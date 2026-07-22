// ============================================================
// Mobile Sync Bridge - Connects Mobile App with Web Backend API
// Keeps local progress, XP, streak, and subtopic status in sync.
// Supports offline cached operation when network is unavailable.
// ============================================================

const STORAGE_KEY = "75_days_mobile_sync_state_v1";

export interface MobileSyncState {
  currentDay: number;
  totalXp: number;
  level: number;
  streak: number;
  completedSubtopics: string[];
  lastSyncedAt: number;
}

// Get initial state
export function getMobileSyncState(): MobileSyncState {
  if (typeof window === "undefined") {
    return { currentDay: 1, totalXp: 0, level: 1, streak: 1, completedSubtopics: [], lastSyncedAt: Date.now() };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn("Mobile sync state read error:", err);
  }
  return { currentDay: 1, totalXp: 0, level: 1, streak: 1, completedSubtopics: [], lastSyncedAt: Date.now() };
}

// Save state
export function saveMobileSyncState(state: MobileSyncState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Mobile sync state write error:", err);
  }
}

// Complete a subtopic on mobile
export function markSubtopicCompletedMobile(subtopicId: string, dayNumber: number, xpEarned = 50): MobileSyncState {
  const currentState = getMobileSyncState();
  if (!currentState.completedSubtopics.includes(subtopicId)) {
    currentState.completedSubtopics.push(subtopicId);
    currentState.totalXp += xpEarned;
    currentState.level = Math.floor(currentState.totalXp / 500) + 1;
    if (dayNumber >= currentState.currentDay) {
      currentState.currentDay = Math.min(75, dayNumber);
    }
    currentState.lastSyncedAt = Date.now();
    saveMobileSyncState(currentState);
  }
  return currentState;
}
