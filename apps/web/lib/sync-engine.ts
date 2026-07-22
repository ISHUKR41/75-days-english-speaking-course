// ============================================================
// Sync Engine - Web & Mobile Offline-First Synchronization
// Manages local storage, IndexedDB caching, offline queueing,
// and background server synchronization for XP, streak, scores,
// practice answers, and subtopic progress.
// ============================================================

// Import React hooks for client integration
import { useEffect, useState, useCallback } from "react";

// Key names used for localStorage / IndexedDB persistence
const LOCAL_STORAGE_PROGRESS_KEY = "75_days_english_user_progress_v1";
const LOCAL_STORAGE_SYNC_QUEUE_KEY = "75_days_english_sync_queue_v1";
const LOCAL_STORAGE_OFFLINE_VOCAB_KEY = "75_days_english_offline_vocab_v1";

// Type definition for a queued sync action
export interface SyncAction {
  id: string; // Unique identifier for the action
  type: "COMPLETE_SUBTOPIC" | "SAVE_PRACTICE_ANSWER" | "SUBMIT_TEST" | "UPDATE_STREAK"; // Action type
  payload: Record<string, any>; // Action payload data
  timestamp: number; // Milliseconds timestamp when action occurred
  attempts: number; // Number of sync retry attempts
}

// Type definition for offline progress cache
export interface OfflineProgressState {
  userId: string;
  currentDay: number;
  totalXp: number;
  level: number;
  streak: number;
  completedSubtopics: string[];
  lastSyncedAt: number;
}

// ─── Local Storage Helper Functions ──────────────────────────────────────────

/**
 * Gets the current offline progress state from local storage.
 * @returns The cached progress state or default initial state if empty.
 */
export function getOfflineProgress(userId: string): OfflineProgressState {
  // Check browser window environment
  if (typeof window === "undefined") {
    return {
      userId,
      currentDay: 1,
      totalXp: 0,
      level: 1,
      streak: 0,
      completedSubtopics: [],
      lastSyncedAt: Date.now(),
    };
  }

  try {
    // Read stored JSON string
    const raw = localStorage.getItem(`${LOCAL_STORAGE_PROGRESS_KEY}_${userId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn("[SyncEngine] Error reading offline progress:", err);
  }

  // Default fallback state
  return {
    userId,
    currentDay: 1,
    totalXp: 0,
    level: 1,
    streak: 0,
    completedSubtopics: [],
    lastSyncedAt: Date.now(),
  };
}

/**
 * Saves updated progress state to local storage for instant offline access.
 * @param progress State object to save
 */
export function saveOfflineProgress(progress: OfflineProgressState): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      `${LOCAL_STORAGE_PROGRESS_KEY}_${progress.userId}`,
      JSON.stringify(progress)
    );
  } catch (err) {
    console.error("[SyncEngine] Failed to save offline progress:", err);
  }
}

/**
 * Enqueues an action to be synced with the database server when online.
 * @param action Sync action object
 */
export function enqueueSyncAction(action: Omit<SyncAction, "id" | "timestamp" | "attempts">): void {
  if (typeof window === "undefined") return;

  try {
    // Read existing queue
    const queue = getSyncQueue();
    // Construct complete action object with unique ID
    const fullAction: SyncAction = {
      ...action,
      id: `sync_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      timestamp: Date.now(),
      attempts: 0,
    };
    // Append to queue
    queue.push(fullAction);
    // Save updated queue to local storage
    localStorage.setItem(LOCAL_STORAGE_SYNC_QUEUE_KEY, JSON.stringify(queue));

    // If browser is currently online, trigger sync immediately
    if (navigator.onLine) {
      flushSyncQueue();
    }
  } catch (err) {
    console.error("[SyncEngine] Failed to enqueue sync action:", err);
  }
}

/**
 * Gets the current pending sync queue.
 * @returns Array of pending SyncAction objects
 */
export function getSyncQueue(): SyncAction[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_SYNC_QUEUE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn("[SyncEngine] Error reading sync queue:", err);
  }
  return [];
}

/**
 * Processes and sends all queued offline actions to the backend sync API endpoint.
 */
export async function flushSyncQueue(): Promise<boolean> {
  if (typeof window === "undefined" || !navigator.onLine) return false;

  const queue = getSyncQueue();
  if (queue.length === 0) return true;

  console.log(`[SyncEngine] Flushing ${queue.length} offline actions to server...`);

  const remainingQueue: SyncAction[] = [];

  for (const action of queue) {
    try {
      // Send action payload to backend sync endpoint
      const response = await fetch("/api/progress/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action),
      });

      if (!response.ok) {
        // If server returns error, increment attempt counter and keep in queue
        action.attempts += 1;
        if (action.attempts < 5) {
          remainingQueue.push(action);
        }
      }
    } catch (err) {
      console.warn(`[SyncEngine] Failed to sync action ${action.id}:`, err);
      action.attempts += 1;
      if (action.attempts < 5) {
        remainingQueue.push(action);
      }
    }
  }

  // Update localStorage with remaining unprocessed actions
  try {
    localStorage.setItem(LOCAL_STORAGE_SYNC_QUEUE_KEY, JSON.stringify(remainingQueue));
  } catch (err) {
    console.error("[SyncEngine] Error saving remaining sync queue:", err);
  }

  return remainingQueue.length === 0;
}

// ─── React Hook for Offline & Sync Status ────────────────────────────────────

/**
 * Custom React hook for tracking online/offline status, queue size, and sync operations.
 */
export function useOfflineSync(userId?: string) {
  // Online connectivity state
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof window !== "undefined" ? navigator.onLine : true
  );
  // Count of pending offline sync actions
  const [pendingQueueCount, setPendingQueueCount] = useState<number>(0);
  // Sync in progress indicator
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Synchronize state and trigger queue processing
  const handleSync = useCallback(async () => {
    if (!navigator.onLine) return;
    setIsSyncing(true);
    await flushSyncQueue();
    setPendingQueueCount(getSyncQueue().length);
    setIsSyncing(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Update online status listeners
    const handleOnline = () => {
      setIsOnline(true);
      handleSync();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial queue count check
    setPendingQueueCount(getSyncQueue().length);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleSync]);

  return {
    isOnline,
    isSyncing,
    pendingQueueCount,
    triggerSync: handleSync,
    getOfflineProgress: () => (userId ? getOfflineProgress(userId) : null),
    saveOfflineProgress,
    enqueueSyncAction,
  };
}
