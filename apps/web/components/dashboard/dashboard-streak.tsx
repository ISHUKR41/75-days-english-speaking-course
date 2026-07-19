"use client";
// ============================================================
// Dashboard Streak - Visual streak calendar (GitHub heatmap style)
// Shows daily activity for the last 35 days
// FIX: All random data generated client-side via useEffect
//      to prevent React hydration mismatch errors
// ============================================================

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Trophy, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Props for this component
interface DashboardStreakProps {
  streakDays: number; // Current streak count from DB
}

// Type for a single day's activity entry
interface ActivityDay {
  date: string;   // ISO date string YYYY-MM-DD
  active: boolean; // Whether the user was active that day
  xp: number;     // XP earned that day
}

// Generate last 35 days of activity data (client-side only)
// Uses Math.random() which must NOT run on server (hydration mismatch)
function generateActivityData(): ActivityDay[] {
  const data: ActivityDay[] = [];
  // Get today's date in ISO format
  const today = new Date();

  // Loop from 34 days ago to today
  for (let i = 34; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Recent days are more likely to be active (simulate real streak)
    const isRecent = i < 7;
    // Random activity distribution: recent = 85% active, older = 55% active
    const active = isRecent
      ? Math.random() > 0.15
      : Math.random() > 0.45;

    data.push({
      date: date.toISOString().split("T")[0],
      active,
      // Random XP between 100-500 for active days, 0 for inactive
      xp: active ? Math.floor(Math.random() * 400) + 100 : 0,
    });
  }

  return data;
}

// Get Tailwind intensity class based on XP earned
function getIntensityClass(xp: number): string {
  if (xp === 0) return "bg-muted/40";          // No activity
  if (xp < 150) return "bg-primary/25";         // Low activity
  if (xp < 250) return "bg-primary/50";         // Medium activity
  if (xp < 350) return "bg-primary/75";         // High activity
  return "bg-primary";                           // Maximum activity
}

export function DashboardStreak({ streakDays }: DashboardStreakProps) {
  // Initialize with empty data to avoid hydration mismatch
  // Real data is generated client-side in useEffect
  const [activityData, setActivityData] = useState<ActivityDay[]>([]);
  const [today, setToday] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  // Generate activity data ONLY on client side to avoid hydration mismatch
  // Math.random() and new Date() produce different values on server vs client
  useEffect(() => {
    setActivityData(generateActivityData());
    setToday(new Date().toISOString().split("T")[0]);
    setIsClient(true);
  }, []); // Run once on mount

  // Group data into weeks (7 days each) for grid display
  const weeks: ActivityDay[][] = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  // Calculate streak statistics
  const totalActiveDays = activityData.filter((d) => d.active).length;
  const totalXp = activityData.reduce((sum, d) => sum + d.xp, 0);

  return (
    <div className="card-base rounded-2xl h-full flex flex-col">
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Activity Streak
        </h3>
        {/* Show active days count */}
        <span className="badge-primary">
          {isClient ? `${totalActiveDays}/35 days` : "-- days"}
        </span>
      </div>

      {/* ── Streak Number Card ── */}
      <div className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
        {/* Animated flame icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flame className="h-10 w-10 text-orange-500" aria-hidden="true" />
        </motion.div>

        {/* Current streak count */}
        <div>
          <p className="text-3xl font-bold text-foreground" suppressHydrationWarning>
            {streakDays}
          </p>
          <p className="text-sm text-muted-foreground">Day streak</p>
        </div>

        {/* Best streak */}
        <div className="ml-auto text-right">
          <p className="text-sm font-semibold text-amber-500 flex items-center gap-1 justify-end">
            <Trophy className="h-4 w-4" />
            Best: {Math.max(streakDays, 14)}
          </p>
          <p className="text-xs text-muted-foreground">All time</p>
        </div>
      </div>

      {/* ── Activity Heatmap Grid ── */}
      <div className="flex-1">
        <p className="text-xs text-muted-foreground mb-2 font-medium">
          Last 35 days activity
        </p>

        {/* Show skeleton while client data loads */}
        {!isClient ? (
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1 flex-1">
                {Array.from({ length: 7 }).map((_, dayIdx) => (
                  <div
                    key={dayIdx}
                    className="h-5 w-full rounded-sm bg-muted/40 animate-pulse"
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          // Grid layout — 5 weeks × 7 days
          <div className="flex gap-1">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1 flex-1">
                {week.map((day, dayIdx) => {
                  const isToday = day.date === today;
                  return (
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: (weekIdx * 7 + dayIdx) * 0.015,
                        duration: 0.3,
                      }}
                      className={cn(
                        "relative h-5 w-full rounded-sm transition-all duration-300",
                        "cursor-pointer hover:scale-125 hover:z-10",
                        getIntensityClass(day.xp),
                        isToday &&
                          "ring-2 ring-primary ring-offset-1 ring-offset-background"
                      )}
                      title={
                        day.active
                          ? `${day.date}: ${day.xp} XP`
                          : `${day.date}: No activity`
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">Less</span>
          <div className="flex gap-1">
            {[
              "bg-muted/40",
              "bg-primary/25",
              "bg-primary/50",
              "bg-primary/75",
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
        {/* Total XP */}
        <div className="text-center p-2 rounded-xl bg-muted/50">
          <p className="text-lg font-bold text-foreground" suppressHydrationWarning>
            {isClient ? totalXp.toLocaleString() : "---"}
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Zap className="h-3 w-3 text-amber-400" />
            Total XP (35d)
          </p>
        </div>

        {/* Consistency percentage */}
        <div className="text-center p-2 rounded-xl bg-muted/50">
          <p className="text-lg font-bold text-foreground" suppressHydrationWarning>
            {isClient ? `${Math.round((totalActiveDays / 35) * 100)}%` : "--%"}
          </p>
          <p className="text-xs text-muted-foreground">Consistency</p>
        </div>
      </div>
    </div>
  );
}
