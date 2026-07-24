"use client";
// ============================================================
// useUserStats - Custom hook to fetch real user stats from API
// Works with and without Clerk - falls back gracefully
// Updates in real-time when XP, streak, or level changes
// ============================================================

import { useState, useEffect, useCallback } from "react";

// ─── User stats type ──────────────────────────────────────────
export interface UserStats {
  currentDay: number;
  totalXp: number;
  level: number;
  streak: number;
  longestStreak: number;
  totalCoins: number;
  accuracy: number;
  completedDays: number;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  email: string;
  levelProgress: number; // 0-100
}

// ─── Default/empty stats ─────────────────────────────────────
const DEFAULT_STATS: UserStats = {
  currentDay: 1,
  totalXp: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  totalCoins: 0,
  accuracy: 0,
  completedDays: 0,
  firstName: null,
  lastName: null,
  imageUrl: null,
  email: "",
  levelProgress: 0,
};

// ─── Hook ────────────────────────────────────────────────────
export function useUserStats() {
  // Stats state - starts empty, fills from API
  const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);
  // Loading state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState<string | null>(null);

  // Fetch user stats from the API
  const fetchStats = useCallback(async () => {
    try {
      // Call our user API which uses safe-auth.
      // Add a small delay on first call so Next.js dev server has time to
      // compile the API route before the client requests it (avoids the
      // "Failed to fetch" on very first page load in dev).
      const res = await fetch("/api/user", {
        method: "GET",
        // Include cookies for auth
        credentials: "include",
        // Cache-Control: no-cache ensures fresh data every time
        headers: { "Cache-Control": "no-cache" },
      });

      // If not authenticated or error, use defaults
      if (!res.ok) {
        setStats(DEFAULT_STATS);
        return;
      }

      // Parse the response
      const data = await res.json();

      // If user exists in response, extract stats
      if (data?.user) {
        const user = data.user;
        // Calculate level progress (XP within current level)
        const xpForCurrentLevel = (user.level - 1) * 1000;
        const xpIntoCurrentLevel = (user.totalXp ?? 0) - xpForCurrentLevel;
        const levelProgress = Math.min(100, (xpIntoCurrentLevel / 1000) * 100);

        // Update stats with real data
        setStats({
          currentDay: user.currentDay ?? 1,
          totalXp: user.totalXp ?? 0,
          level: user.level ?? 1,
          streak: user.streak ?? 0,
          longestStreak: user.longestStreak ?? 0,
          totalCoins: user.totalCoins ?? 0,
          accuracy: user.accuracy ?? 0,
          completedDays: Math.max(0, (user.currentDay ?? 1) - 1),
          firstName: user.firstName ?? null,
          lastName: user.lastName ?? null,
          imageUrl: user.imageUrl ?? null,
          email: user.email ?? "",
          levelProgress,
        });
      }
    } catch (err) {
      // On network error, keep default stats
      console.error("[useUserStats] Failed to fetch:", err);
      setError("Failed to load user data");
    } finally {
      // Always clear loading
      setLoading(false);
    }
  }, []);

  // Fetch on mount
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Return stats and helpers
  return { stats, loading, error, refetch: fetchStats };
}
