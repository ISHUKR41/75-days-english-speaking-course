"use client";
// ============================================================
// useProgress - Custom hook for fetching and updating progress via API
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";

interface DayProgress {
  id: string;
  userId: string;
  dayId: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  startedAt: string | null;
  completedAt: string | null;
  practiceScore: number;
  testScore: number;
  totalXpEarned: number;
  topicsCompleted: number;
  topicsTotal: number;
  day?: {
    dayNumber: number;
    title: string;
    emoji: string;
  };
}

interface UpdateProgressData {
  dayId: string;
  status?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  practiceScore?: number;
  testScore?: number;
  xpEarned?: number;
}

interface UseProgressReturn {
  progress: DayProgress[];
  isLoading: boolean;
  error: string | null;
  updateProgress: (data: UpdateProgressData) => Promise<boolean>;
  refetch: () => Promise<void>;
  getProgressForDay: (dayId: string) => DayProgress | undefined;
  completedDaysCount: number;
}

export function useProgress(): UseProgressReturn {
  const { user, isLoaded } = useUser();
  const [progress, setProgress] = useState<DayProgress[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!isLoaded || !user) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/progress");
      if (!res.ok) throw new Error("Failed to fetch progress");
      const json = await res.json();
      setProgress(json.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }, [isLoaded, user]);

  // Load progress on mount
  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const updateProgress = useCallback(
    async (data: UpdateProgressData): Promise<boolean> => {
      try {
        const res = await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) return false;

        const json = await res.json();
        if (json.data) {
          setProgress((prev) => {
            const index = prev.findIndex((p) => p.dayId === data.dayId);
            if (index >= 0) {
              const updated = [...prev];
              updated[index] = { ...updated[index], ...json.data };
              return updated;
            }
            return [...prev, json.data];
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    []
  );

  const getProgressForDay = useCallback(
    (dayId: string) => progress.find((p) => p.dayId === dayId),
    [progress]
  );

  const completedDaysCount = progress.filter(
    (p) => p.status === "COMPLETED"
  ).length;

  return {
    progress,
    isLoading,
    error,
    updateProgress,
    refetch: fetchProgress,
    getProgressForDay,
    completedDaysCount,
  };
}
