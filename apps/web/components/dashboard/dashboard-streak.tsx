"use client";
// ============================================================
// Dashboard Streak - Visual streak calendar (GitHub heatmap style)
// Shows daily activity for the last 30 days
// ============================================================

import { motion } from "framer-motion";
import { Flame, Trophy, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardStreakProps {
  streakDays: number;
}

// Generate last 35 days of mock activity data
function generateActivityData() {
  const data: { date: string; active: boolean; xp: number }[] = [];
  const today = new Date();

  for (let i = 34; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Make recent days more likely to be active
    const isRecent = i < 7;
    const active = isRecent ? Math.random() > 0.15 : Math.random() > 0.45;

    data.push({
      date: date.toISOString().split("T")[0],
      active,
      xp: active ? Math.floor(Math.random() * 400) + 100 : 0,
    });
  }

  return data;
}

// Get intensity class based on XP
function getIntensityClass(xp: number): string {
  if (xp === 0) return "bg-muted/50";
  if (xp < 150) return "bg-primary/30";
  if (xp < 250) return "bg-primary/55";
  if (xp < 350) return "bg-primary/75";
  return "bg-primary";
}

export function DashboardStreak({ streakDays }: DashboardStreakProps) {
  const activityData = generateActivityData();
  const today = new Date().toISOString().split("T")[0];

  // Group data into weeks of 5 (Mon-Fri) for display
  const weeks: typeof activityData[] = [];
  for (let i = 0; i < activityData.length; i += 5) {
    weeks.push(activityData.slice(i, i + 5));
  }

  // Calculate stats
  const totalActiveDays = activityData.filter((d) => d.active).length;
  const totalXp = activityData.reduce((sum, d) => sum + d.xp, 0);

  return (
    <div className="card-base rounded-2xl h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Activity Streak
        </h3>
        <span className="badge-primary">{totalActiveDays}/35 days</span>
      </div>

      {/* Big streak number */}
      <div className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flame
            className="h-10 w-10 text-orange-500"
            aria-hidden="true"
          />
        </motion.div>
        <div>
          <p className="text-3xl font-bold text-foreground">{streakDays}</p>
          <p className="text-sm text-muted-foreground">Day streak</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-sm font-semibold text-gold-500 flex items-center gap-1 justify-end">
            <Trophy className="h-4 w-4" />
            Best: {Math.max(streakDays, 14)}
          </p>
          <p className="text-xs text-muted-foreground">All time</p>
        </div>
      </div>

      {/* Activity heatmap grid */}
      <div className="flex-1">
        <p className="text-xs text-muted-foreground mb-2 font-medium">
          Last 35 days activity
        </p>

        {/* Grid layout */}
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
                      delay: (weekIdx * 5 + dayIdx) * 0.02,
                      duration: 0.3,
                    }}
                    className={cn(
                      "relative h-5 w-full rounded-sm transition-all duration-300",
                      "cursor-pointer hover:scale-125 hover:z-10",
                      getIntensityClass(day.xp),
                      isToday && "ring-2 ring-primary ring-offset-1 ring-offset-background"
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

        {/* Legend */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">Less</span>
          <div className="flex gap-1">
            {["bg-muted/50", "bg-primary/30", "bg-primary/55", "bg-primary/75", "bg-primary"].map(
              (cls, i) => (
                <div
                  key={i}
                  className={cn("h-3 w-3 rounded-sm", cls)}
                  aria-hidden="true"
                />
              )
            )}
          </div>
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3">
        <div className="text-center p-2 rounded-xl bg-muted/50">
          <p className="text-lg font-bold text-foreground">{totalXp.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Zap className="h-3 w-3 text-gold-400" />
            Total XP (35d)
          </p>
        </div>
        <div className="text-center p-2 rounded-xl bg-muted/50">
          <p className="text-lg font-bold text-foreground">
            {Math.round((totalActiveDays / 35) * 100)}%
          </p>
          <p className="text-xs text-muted-foreground">Consistency</p>
        </div>
      </div>
    </div>
  );
}
