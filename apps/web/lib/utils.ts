// ============================================================
// Utility Functions - 75 Days Hard English Course
// Common helper functions used across the application
// ============================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── CSS Class Helper ─────────────────────────────────────────
// Merges Tailwind classes, resolving conflicts intelligently
// Example: cn("px-4", "px-6") => "px-6" (last one wins)
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ─── Number Formatting ────────────────────────────────────────

// Format large numbers with K/M suffixes
// Example: formatNumber(12800) => "12.8K"
export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
}

// Format number with commas
// Example: formatWithCommas(12800) => "12,800"
export function formatWithCommas(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

// ─── XP & Level Calculations ─────────────────────────────────

// Calculate the XP required to reach a given level
// Uses exponential scaling so higher levels require more XP
export function xpForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1));
}

// Calculate level from total XP
export function levelFromXp(totalXp: number): number {
  let level = 1;
  let xpNeeded = 0;

  while (true) {
    xpNeeded += xpForLevel(level);
    if (totalXp < xpNeeded) break;
    level++;
    if (level > 100) break; // Max level cap
  }

  return level;
}

// Calculate progress percentage within current level
export function xpProgressInLevel(totalXp: number): number {
  const level = levelFromXp(totalXp);
  
  // Calculate XP at start of current level
  let xpAtLevelStart = 0;
  for (let i = 1; i < level; i++) {
    xpAtLevelStart += xpForLevel(i);
  }
  
  // XP needed for next level
  const xpForCurrentLevel = xpForLevel(level);
  
  // Current progress within this level
  const currentLevelXp = totalXp - xpAtLevelStart;
  
  return Math.min(100, Math.floor((currentLevelXp / xpForCurrentLevel) * 100));
}

// ─── Score Calculations ───────────────────────────────────────

// Calculate grade from percentage score
// Returns letter grade with + or - modifiers
export function calculateGrade(percentage: number): string {
  if (percentage >= 97) return "A+";
  if (percentage >= 93) return "A";
  if (percentage >= 90) return "A-";
  if (percentage >= 87) return "B+";
  if (percentage >= 83) return "B";
  if (percentage >= 80) return "B-";
  if (percentage >= 77) return "C+";
  if (percentage >= 73) return "C";
  if (percentage >= 70) return "C-";
  if (percentage >= 60) return "D";
  return "F";
}

// Get color class for a grade
export function gradeColor(grade: string): string {
  const firstLetter = grade.charAt(0);
  switch (firstLetter) {
    case "A": return "text-emerald-500";
    case "B": return "text-blue-500";
    case "C": return "text-amber-500";
    case "D": return "text-orange-500";
    case "F": return "text-rose-500";
    default:  return "text-muted-foreground";
  }
}

// ─── Date & Time Helpers ─────────────────────────────────────

// Format date as relative time (e.g., "2 hours ago")
export function relativeTime(date: Date | string): string {
  const now = new Date();
  const target = new Date(date);
  const diff = now.getTime() - target.getTime();
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  
  if (seconds < 60)   return "just now";
  if (minutes < 60)   return `${minutes}m ago`;
  if (hours < 24)     return `${hours}h ago`;
  if (days < 7)       return `${days}d ago`;
  if (weeks < 4)      return `${weeks}w ago`;
  if (months < 12)    return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

// Format seconds into MM:SS display
// Example: formatTime(125) => "2:05"
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Check if two dates are the same day
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

// Get start of current week (Monday)
export function getWeekStart(date: Date = new Date()): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// ─── String Helpers ───────────────────────────────────────────

// Truncate text with ellipsis
// Example: truncate("Hello World", 8) => "Hello..."
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

// Capitalize first letter of each word
export function titleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Convert camelCase to human-readable
// Example: "firstName" => "First Name"
export function camelToHuman(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

// Slugify a string for URLs
// Example: "Parts of Speech" => "parts-of-speech"
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─── Answer Checking ─────────────────────────────────────────

// Compare user answer with correct answer
// Ignores case, extra spaces, and common punctuation
export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .trim()
      // Remove extra spaces
      .replace(/\s+/g, " ")
      // Remove common punctuation that shouldn't affect correctness
      .replace(/[.,!?'"]/g, "");
  
  return normalize(userAnswer) === normalize(correctAnswer);
}

// Calculate similarity score between two strings (0-1)
// Uses Levenshtein distance for fuzzy matching
export function stringSimilarity(a: string, b: string): number {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  
  if (longer.length === 0) return 1.0;
  
  const costs: number[] = [];
  for (let i = 0; i <= shorter.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= longer.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (shorter[i - 1] !== longer[j - 1]) {
          newValue = Math.min(
            Math.min(newValue, lastValue),
            costs[j]
          ) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[longer.length] = lastValue;
  }
  
  const editDistance = costs[longer.length];
  return (longer.length - editDistance) / longer.length;
}

// ─── Array Helpers ────────────────────────────────────────────

// Shuffle an array (Fisher-Yates algorithm)
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Pick random items from an array
export function pickRandom<T>(array: T[], count: number): T[] {
  return shuffle(array).slice(0, count);
}

// Group array by a key
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    return {
      ...groups,
      [groupKey]: [...(groups[groupKey] || []), item],
    };
  }, {} as Record<string, T[]>);
}

// ─── Color Helpers ────────────────────────────────────────────

// Get day color based on day number (consistent color per day)
export function getDayColor(dayNumber: number): string {
  const colors = [
    "#6272f1", "#8b5cf6", "#ec4899", "#10b981",
    "#f59e0b", "#06b6d4", "#f43f5e", "#3b82f6",
    "#a855f7", "#14b8a6", "#eab308", "#ef4444",
  ];
  return colors[(dayNumber - 1) % colors.length];
}

// Get progress color based on percentage
export function progressColor(percentage: number): string {
  if (percentage >= 80) return "text-emerald-500";
  if (percentage >= 60) return "text-blue-500";
  if (percentage >= 40) return "text-amber-500";
  if (percentage >= 20) return "text-orange-500";
  return "text-rose-500";
}

// ─── Local Storage Helpers ────────────────────────────────────
// Safe wrappers for localStorage (handles SSR)

export function getLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors (e.g., private browsing)
  }
}

export function removeLocalStorage(key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore errors
  }
}

// ─── Validation Helpers ───────────────────────────────────────

// Check if a string is a valid email
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check if string is empty (null, undefined, or whitespace)
export function isEmpty(value: string | null | undefined): boolean {
  return !value || value.trim().length === 0;
}

// ─── Sound Effect Helper ─────────────────────────────────────

// Play a sound effect using Web Audio API (no mp3 files needed)
// Sounds are generated in real-time for instant feedback
export function playSound(
  type: "correct" | "wrong" | "perfect" | "levelup" | "badge" | "click"
): void {
  // Skip if running on the server (SSR)
  if (typeof window === "undefined") return;

  // Check if user has sound enabled in their preferences
  const soundEnabled = getLocalStorage("soundEnabled", true);
  if (!soundEnabled) return;

  // Dynamically import the sounds module to avoid SSR issues
  // This uses the Web Audio API — no external .mp3 files needed
  import("@/lib/sounds").then(({ playSoundEffect }) => {
    playSoundEffect(type as any);
  }).catch(() => {
    // Silently fail if sounds module can't load
  });
}

// ─── Debounce ────────────────────────────────────────────────

// Debounce a function call
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
