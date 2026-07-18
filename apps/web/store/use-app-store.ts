"use client";
// ============================================================
// Zustand Global Store - 75 Days Hard English Course
// Manages: user XP, coins, level, streak, progress, sound
// ============================================================

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { levelFromXp, xpProgressInLevel } from "@/lib/utils";

// ─── Store State Interface ───────────────────────────────────
interface AppState {
  // User stats
  userId: string | null;
  totalXp: number;
  totalCoins: number;
  level: number;
  levelProgress: number;
  streak: number;
  currentDay: number;

  // Sound preferences
  soundEnabled: boolean;

  // Progress tracking
  completedSubtopics: Set<string>;
  practiceScores: Map<string, number>; // subtopicId -> score

  // UI state
  isLoading: boolean;
  error: string | null;

  // ── Actions ──────────────────────────────────────────────
  setUserId: (id: string) => void;
  addXp: (amount: number) => void;
  addCoins: (amount: number) => void;
  setStreak: (streak: number) => void;
  setCurrentDay: (day: number) => void;
  toggleSound: () => void;
  setSoundEnabled: (enabled: boolean) => void;
  markSubtopicComplete: (subtopicId: string) => void;
  setPracticeScore: (subtopicId: string, score: number) => void;
  setUserStats: (stats: Partial<AppState>) => void;
  reset: () => void;
}

// ─── Initial State ────────────────────────────────────────────
const initialState = {
  userId: null,
  totalXp: 0,
  totalCoins: 0,
  level: 1,
  levelProgress: 0,
  streak: 0,
  currentDay: 1,
  soundEnabled: true,
  isLoading: false,
  error: null,
};

// ─── Zustand Store ────────────────────────────────────────────
export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // State
      ...initialState,
      completedSubtopics: new Set<string>(),
      practiceScores: new Map<string, number>(),

      // ── Actions ────────────────────────────────────────────
      setUserId: (id) => set({ userId: id }),

      addXp: (amount) => {
        const newXp = get().totalXp + amount;
        const newLevel = levelFromXp(newXp);
        const newProgress = xpProgressInLevel(newXp);
        set({ totalXp: newXp, level: newLevel, levelProgress: newProgress });
      },

      addCoins: (amount) => {
        set({ totalCoins: get().totalCoins + amount });
      },

      setStreak: (streak) => set({ streak }),

      setCurrentDay: (day) => set({ currentDay: day }),

      toggleSound: () => set({ soundEnabled: !get().soundEnabled }),

      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),

      markSubtopicComplete: (subtopicId) => {
        const current = get().completedSubtopics;
        const updated = new Set(current);
        updated.add(subtopicId);
        set({ completedSubtopics: updated });
      },

      setPracticeScore: (subtopicId, score) => {
        const current = get().practiceScores;
        const updated = new Map(current);
        updated.set(subtopicId, score);
        set({ practiceScores: updated });
      },

      setUserStats: (stats) => {
        const updates: Partial<AppState> = {};
        if (stats.totalXp !== undefined) {
          updates.totalXp = stats.totalXp;
          updates.level = levelFromXp(stats.totalXp);
          updates.levelProgress = xpProgressInLevel(stats.totalXp);
        }
        if (stats.totalCoins !== undefined) updates.totalCoins = stats.totalCoins;
        if (stats.streak !== undefined) updates.streak = stats.streak;
        if (stats.currentDay !== undefined) updates.currentDay = stats.currentDay;
        if (stats.userId !== undefined) updates.userId = stats.userId;
        if (stats.soundEnabled !== undefined) updates.soundEnabled = stats.soundEnabled;
        set(updates);
      },

      reset: () =>
        set({
          ...initialState,
          completedSubtopics: new Set<string>(),
          practiceScores: new Map<string, number>(),
        }),
    }),
    {
      name: "75-days-app-store",
      storage: createJSONStorage(() => localStorage, {
        // Custom serialization for Set and Map
        replacer: (_key, value) => {
          if (value instanceof Set) {
            return { __type: "Set", value: Array.from(value) };
          }
          if (value instanceof Map) {
            return { __type: "Map", value: Array.from(value.entries()) };
          }
          return value;
        },
        reviver: (_key, value) => {
          if (
            value &&
            typeof value === "object" &&
            (value as Record<string, unknown>).__type === "Set"
          ) {
            return new Set((value as Record<string, unknown[]>).value);
          }
          if (
            value &&
            typeof value === "object" &&
            (value as Record<string, unknown>).__type === "Map"
          ) {
            return new Map(
              (value as Record<string, [string, unknown][]>).value
            );
          }
          return value;
        },
      }),
      // Only persist certain fields
      partialize: (state) => ({
        userId: state.userId,
        totalXp: state.totalXp,
        totalCoins: state.totalCoins,
        level: state.level,
        levelProgress: state.levelProgress,
        streak: state.streak,
        currentDay: state.currentDay,
        soundEnabled: state.soundEnabled,
        completedSubtopics: state.completedSubtopics,
        practiceScores: state.practiceScores,
      }),
    }
  )
);
