// ============================================================
// Mobile Sync Bridge — 75 Days Hard English Course
// Handles ALL data synchronization between the mobile app and
// the web backend API. Falls back to localStorage when offline.
// Architecture: API-first → localStorage cache → defaults
// ============================================================

// ─── Storage key for local cache ─────────────────────────────
const STORAGE_KEY = "75days_mobile_v2"; // Cache key in localStorage

// ─── Type definitions ─────────────────────────────────────────

// Full user progress state — mirrors the web app's data model
export interface MobileSyncState {
  userId: string | null; // Clerk user ID (null if not logged in)
  currentDay: number; // Which day the user is currently on
  totalXp: number; // Total experience points earned
  level: number; // Current level (calculated from XP)
  streak: number; // Current daily streak count
  longestStreak: number; // All-time best streak
  coins: number; // Virtual coins for gamification
  accuracy: number; // Overall accuracy percentage (0-100)
  completedSubtopics: string[]; // Array of completed subtopic IDs
  completedDays: number[]; // Array of completed day numbers
  lastSyncedAt: number; // Unix timestamp of last successful sync
  isAuthenticated: boolean; // Whether user is signed in
  firstName: string; // User's first name for display
  lastName: string; // User's last name
  imageUrl: string | null; // Profile picture URL
}

// Vocabulary word shape from the API
export interface VocabWord {
  id: string;
  word: string;
  meaning: string;
  hindiMeaning: string;
  partOfSpeech: string;
  difficulty: string;
  ipa: string;
  example1: string;
  example2: string;
  synonyms: string[];
  antonyms: string[];
}

// Day structure from the API
export interface DayInfo {
  dayNumber: number;
  title: string;
  description: string;
  emoji: string;
  isRevision: boolean;
  isMockTest: boolean;
  topicsCount: number;
}

// Practice question shape
export interface PracticeQuestion {
  id: string;
  questionText: string;
  questionType: "TRANSLATION" | "FILL_BLANK" | "MCQ";
  correctAnswer: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  difficulty: string;
  points: number;
  explanation: string;
  hindiExplanation?: string;
  wordHints?: { word: string; meaning: string }[];
}

// ─── Default state (new user) ─────────────────────────────────
const DEFAULT_STATE: MobileSyncState = {
  userId: null,
  currentDay: 1,
  totalXp: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  coins: 0,
  accuracy: 0,
  completedSubtopics: [],
  completedDays: [],
  lastSyncedAt: 0,
  isAuthenticated: false,
  firstName: "Learner",
  lastName: "",
  imageUrl: null,
};

// ─── Local cache helpers ──────────────────────────────────────

// Read the cached state from localStorage
export function getMobileSyncState(): MobileSyncState {
  if (typeof window === "undefined") return { ...DEFAULT_STATE }; // SSR guard
  try {
    const raw = localStorage.getItem(STORAGE_KEY); // Read from cache
    if (raw) {
      const parsed = JSON.parse(raw) as MobileSyncState; // Parse JSON
      return { ...DEFAULT_STATE, ...parsed }; // Merge with defaults
    }
  } catch (err) {
    console.warn("[SyncBridge] Cache read error:", err); // Log but continue
  }
  return { ...DEFAULT_STATE }; // Return defaults if cache is empty/invalid
}

// Write state to localStorage cache
export function saveMobileSyncState(state: MobileSyncState): void {
  if (typeof window === "undefined") return; // SSR guard
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); // Persist to cache
  } catch (err) {
    console.error("[SyncBridge] Cache write error:", err); // Log error
  }
}

// ─── API helpers ──────────────────────────────────────────────

// Base URL for API calls — proxied to web app via vite proxy
const API_BASE = "/api"; // Vite proxies this to localhost:5000

// Generic fetch wrapper with error handling and timeout
async function apiFetch<T>(
  endpoint: string, // API path (e.g. "/api/user")
  options?: RequestInit // Optional fetch options (method, body, etc.)
): Promise<T | null> {
  try {
    const controller = new AbortController(); // For timeout
    const timeout = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options, // Spread any provided options
      signal: controller.signal, // Attach abort controller
      headers: {
        "Content-Type": "application/json", // Always send JSON
        ...(options?.headers ?? {}), // Merge any extra headers
      },
    });

    clearTimeout(timeout); // Clear timeout on success

    if (!res.ok) {
      console.warn(`[SyncBridge] API ${endpoint} returned ${res.status}`);
      return null; // Return null for non-2xx responses
    }

    return (await res.json()) as T; // Parse and return JSON response
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      console.warn(`[SyncBridge] API ${endpoint} timed out`); // Timeout case
    } else {
      console.warn(`[SyncBridge] API ${endpoint} error:`, err); // Other errors
    }
    return null; // Return null on any failure
  }
}

// ─── Sync functions ───────────────────────────────────────────

// Fetch the user's current state from the web API
// Returns updated state or the cached state if API is unreachable
export async function syncUserFromAPI(): Promise<MobileSyncState> {
  const cached = getMobileSyncState(); // Start with cached state

  // Try fetching from the web API
  const data = await apiFetch<{ user: Record<string, unknown> | null }>("/user");

  // If API returned a user, update the cached state
  if (data?.user) {
    const user = data.user as Record<string, unknown>; // Type-cast for safety
    const updated: MobileSyncState = {
      ...cached, // Keep existing local state
      userId: (user.clerkId as string) ?? cached.userId,
      currentDay: (user.currentDay as number) ?? cached.currentDay,
      totalXp: (user.totalXp as number) ?? cached.totalXp,
      level: (user.level as number) ?? cached.level,
      streak: (user.streak as number) ?? cached.streak,
      longestStreak: (user.longestStreak as number) ?? cached.longestStreak,
      coins: (user.totalCoins as number) ?? cached.coins,
      isAuthenticated: true, // User exists in DB → authenticated
      firstName: (user.firstName as string) ?? cached.firstName,
      lastName: (user.lastName as string) ?? cached.lastName,
      imageUrl: (user.imageUrl as string | null) ?? cached.imageUrl,
      lastSyncedAt: Date.now(), // Update sync timestamp
    };
    saveMobileSyncState(updated); // Persist updated state
    return updated; // Return fresh state
  }

  return cached; // Return cached if API unreachable
}

// Fetch vocabulary words for a specific day from the web API
export async function fetchVocabularyForDay(dayNumber: number): Promise<VocabWord[]> {
  // Call the vocabulary API with the day number filter
  const data = await apiFetch<{ data: VocabWord[]; meta: { total: number } }>(
    `/vocabulary?dayNumber=${dayNumber}&limit=50`
  );
  return data?.data ?? []; // Return words or empty array
}

// Fetch practice questions for a specific subtopic
export async function fetchPracticeQuestions(
  dayNumber: number,
  subtopicId: string
): Promise<PracticeQuestion[]> {
  const data = await apiFetch<{ questions: PracticeQuestion[] }>(
    `/practice?dayNumber=${dayNumber}&subtopicId=${subtopicId}&limit=20`
  );
  return data?.questions ?? []; // Return questions or empty array
}

// Save progress for a completed subtopic back to the web API
export async function saveProgressToAPI(
  dayNumber: number,
  subtopicId: string,
  xpEarned: number,
  accuracy: number
): Promise<boolean> {
  const result = await apiFetch<{ success: boolean }>("/progress/save", {
    method: "POST", // POST to save progress
    body: JSON.stringify({
      dayNumber, // Which day
      subtopicId, // Which subtopic
      xpEarned, // XP to award
      accuracy, // Accuracy percentage
      activity: "practice", // Activity type
    }),
  });
  return result?.success ?? false; // Return true if saved
}

// ─── Local progress helpers (work offline) ────────────────────

// Mark a subtopic as completed locally (and try to sync to API)
export async function markSubtopicCompleted(
  subtopicId: string, // The subtopic ID
  dayNumber: number, // The day number
  xpEarned = 50, // XP to add (default 50)
  accuracy = 100 // Accuracy percentage (default 100)
): Promise<MobileSyncState> {
  const current = getMobileSyncState(); // Get current cached state

  // Only update if not already completed (idempotent)
  if (!current.completedSubtopics.includes(subtopicId)) {
    const newXp = current.totalXp + xpEarned; // Calculate new XP total
    const newLevel = Math.floor(newXp / 500) + 1; // 500 XP per level
    const newCoins = current.coins + Math.floor(xpEarned / 5); // 1 coin per 5 XP
    const newStreak = current.streak + 1; // Increment streak

    // Update the day progress if this is a new day completion
    const newCompletedDays = current.completedDays.includes(dayNumber)
      ? current.completedDays // Already counted
      : [...current.completedDays, dayNumber]; // Add this day

    const updated: MobileSyncState = {
      ...current,
      completedSubtopics: [...current.completedSubtopics, subtopicId], // Add completed
      completedDays: newCompletedDays, // Update completed days
      totalXp: newXp, // Update XP
      level: newLevel, // Update level
      coins: newCoins, // Update coins
      streak: newStreak, // Update streak
      longestStreak: Math.max(current.longestStreak, newStreak), // Best streak
      currentDay: Math.max(current.currentDay, dayNumber), // Update current day
      lastSyncedAt: Date.now(), // Update sync time
    };

    saveMobileSyncState(updated); // Save to localStorage

    // Also try to sync to the web API (fire and forget)
    saveProgressToAPI(dayNumber, subtopicId, xpEarned, accuracy).catch(() => {
      console.warn("[SyncBridge] Could not sync progress to API — saved locally");
    });

    return updated; // Return the updated state
  }

  return current; // Return unchanged state if already completed
}

// ─── Legacy export alias (keep backward compatibility) ────────
export const getMobileSyncStateSync = getMobileSyncState; // Alias for old callers
export const markSubtopicCompletedMobile = markSubtopicCompleted; // Alias
