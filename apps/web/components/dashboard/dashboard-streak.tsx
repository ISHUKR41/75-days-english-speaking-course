"use client";
// ============================================================
// Dashboard Streak - Visual streak calendar (GitHub heatmap style)
// Shows daily activity for the last 35 days
// Uses real streak history data from the database
// ============================================================

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Flame, Trophy, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Props for this component
interface DashboardStreakProps {
  streakDays: number;           // Current streak count from DB
  longestStreak?: number;       // All-time best streak
  streakHistory?: Array<{       // Real history from DB
    date: string | Date;
    completed: boolean;
    xpEarned: number;
  }>;
}

// Type for a single day's activity entry
interface ActivityDay {
  date: string;    // ISO date string YYYY-MM-DD
  active: boolean; // Whether the user was active that day
  xp: number;      // XP earned that day
}

// Get Tailwind intensity class based on XP earned
function getIntensityClass(xp: number, active: boolean): string {
  if (!active || xp === 0) return "bg-muted/40";    // No activity
  if (xp < 150) return "bg-primary/30";              // Low activity
  if (xp < 300) return "bg-primary/55";              // Medium activity
  if (xp < 500) return "bg-primary/80";              // High activity
  return "bg-primary";                                // Maximum activity
}

export function DashboardStreak({
  streakDays,
  longestStreak,
  streakHistory = [],
}: DashboardStreakProps) {
  // Build 35-day activity grid from real DB data
  const activityData = useMemo<ActivityDay[]>(() => {
    // Build a lookup map from real streak history
    const historyMap = new Map<string, { completed: boolean; xpEarned: number }>();
    for (const entry of streakHistory) {
      const dateStr =
        entry.date instanceof Date
          ? entry.date.toISOString().split("T")[0]
          : String(entry.date).split("T")[0];
      historyMap.set(dateStr, {
        completed: entry.completed,
        xpEarned: entry.xpEarned,
      });
    }

    // Generate last 35 days
    const days: ActivityDay[] = [];
    const today = new Date();
    for (let i = 34; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const record = historyMap.get(dateStr);
      days.push({
        date: dateStr,
        active: record?.completed ?? false,
        xp: record?.xpEarned ?? 0,
      });
    }
    return days;
  }, [streakHistory]);

  // Today's date for ring highlight
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  // Group data into weeks (7 days each) for grid display
  const weeks: ActivityDay[][] = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  // Calculate streak statistics from real data
  const totalActiveDays = activityData.filter((d) => d.active).length;
  const totalXp = activityData.reduce((sum, d) => sum + d.xp, 0);
  const bestStreak = longestStreak ?? Math.max(streakDays, 0);

  // Motivational message based on streak
  const streakMessage =
    streakDays >= 30
      ? "🏆 Legendary streak!"
      : streakDays >= 14
      ? "🔥 You're on fire!"
      : streakDays >= 7
      ? "⚡ Great momentum!"
      : streakDays >= 3
      ? "💪 Keep it up!"
      : streakDays >= 1
      ? "🌱 Good start!"
      : "Start your streak today!";

  return (
    <div className="card-base rounded-2xl h-full flex flex-col">
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Activity Streak
        </h3>
        <span className="badge-primary">
          {totalActiveDays}/35 days
        </span>
      </div>

      {/* ── Streak Number Card ── */}
      <div className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
        {/* Animated flame icon */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flame
            className={cn(
              "h-10 w-10",
              streakDays > 0 ? "text-orange-500" : "text-muted-foreground/40"
            )}
            aria-hidden="true"
          />
        </motion.div>

        {/* Current streak count */}
        <div>
          <p className="text-3xl font-bold text-foreground tabular-nums">
            {streakDays}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{streakMessage}</p>
        </div>

        {/* Best streak */}
        <div className="ml-auto text-right">
          <p className="text-sm font-semibold text-amber-500 flex items-center gap-1 justify-end">
            <Trophy className="h-4 w-4" />
            Best: {bestStreak}
          </p>
          <p className="text-xs text-muted-foreground">All time</p>
        </div>
      </div>

      {/* ── Activity Heatmap Grid ── */}
      <div className="flex-1">
        <p className="text-xs text-muted-foreground mb-2 font-medium">
          Last 35 days activity
        </p>

        {/* Grid layout — 5 weeks × 7 days */}
        <div className="flex gap-1">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1 flex-1">
              {week.map((day, dayIdx) => {
                const isToday = day.date === todayStr;
                return (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (weekIdx * 7 + dayIdx) * 0.012,
                      duration: 0.25,
                    }}
                    className={cn(
                      "relative h-5 w-full rounded-sm transition-all duration-200",
                      "cursor-default hover:scale-125 hover:z-10",
                      getIntensityClass(day.xp, day.active),
                      isToday &&
                        "ring-2 ring-primary ring-offset-1 ring-offset-background"
                    )}
                    title={
                      day.active
                        ? `${day.date}: ${day.xp} XP earned`
                        : `${day.date}: No activity`
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">Less</span>
          <div className="flex gap-1">
            {[
              "bg-muted/40",
              "bg-primary/30",
              "bg-primary/55",
              "bg-primary/80",
              "bg-primary",
            ].map((cls, i) => (
              <div
                key={i}
                className={cn("h-3 w-3 rounded-sm", cls)}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>

      {/* ── Bottom Stats ── */}
      <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3">
        {/* Total XP this period */}
        <div className="text-center p-2 rounded-xl bg-muted/50">
          <p className="text-lg font-bold text-foreground tabular-nums">
            {totalXp > 0 ? totalXp.toLocaleString() : "0"}
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Zap className="h-3 w-3 text-amber-400" />
            XP (35 days)
          </p>
        </div>

        {/* Consistency percentage */}
        <div className="text-center p-2 rounded-xl bg-muted/50">
          <p className="text-lg font-bold text-foreground tabular-nums">
            {Math.round((totalActiveDays / 35) * 100)}%
          </p>
          <p className="text-xs text-muted-foreground">Consistency</p>
        </div>
      </div>
    </div>
  );
}
