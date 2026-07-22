"use client";
// ============================================================
// Day Card - Individual day card in the 75-day grid
// Shows day status, title, progress, and navigation
// ============================================================

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Lock,
  Play,
  RefreshCcw,
  Trophy,
} from "lucide-react";
import { cn, getDayColor } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────
interface DayCardProps {
  dayNumber: number;
  title: string;
  description: string;
  emoji: string;
  isRevision: boolean;
  isMockTest: boolean;
  topicsCount: number;
  currentDay: number;
  completedDays: number;
}

export function DayCard({
  dayNumber,
  title,
  description,
  emoji,
  isRevision,
  isMockTest,
  topicsCount,
  currentDay,
  completedDays,
}: DayCardProps) {
  // Determine the status of this day
  const isCompleted = dayNumber < currentDay;
  const isCurrent = dayNumber === currentDay;
  const isLocked = dayNumber > currentDay;

  // Color for this specific day
  const dayColor = getDayColor(dayNumber);

  // Generate deterministic progress percentage for current day
  // Using dayNumber for stable server/client rendering (no Math.random())
  const progressPercent = isCompleted
    ? 100
    : isCurrent
    ? ((dayNumber * 17 + 23) % 45) + 20 // Deterministic: 20-65% range
    : 0;

  // Can the user access this day?
  const canAccess = !isLocked;

  const CardContent = () => (
    <div
      className={cn(
        // Base card styles - larger and more impressive
        "relative overflow-hidden rounded-[24px] border p-5 sm:p-6 h-full flex flex-col",
        "transition-all duration-500 ease-out",
        "bg-card/40 backdrop-blur-sm",

        // Status-based styles
        isCompleted && [
          "border-emerald-500/20",
          "hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:-translate-y-1.5",
        ],
        isCurrent && [
          "border-primary/50",
          "hover:border-primary/70 hover:bg-primary/5 hover:-translate-y-1.5",
          "shadow-[0_8px_30px_-12px_rgba(var(--primary),0.3)]",
        ],
        isLocked && [
          "border-border/40 bg-muted/20 opacity-70",
          "cursor-not-allowed grayscale-[0.5]",
        ],
        !isCompleted && !isCurrent && !isLocked && [
          "border-border/60",
          "hover:border-primary/40 hover:-translate-y-1.5",
        ]
      )}
    >
      {/* Subtle background glow for current day */}
      {isCurrent && (
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${dayColor}, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Hover glow effect matching day color */}
      {!isLocked && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${dayColor}, transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* ─── Top Row ─── */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div className="flex items-center gap-3">
          {/* Day number prominently displayed */}
          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-2xl w-14 h-14 shadow-sm relative overflow-hidden",
              isLocked ? "bg-muted" : ""
            )}
            style={{ backgroundColor: !isLocked ? dayColor : undefined }}
          >
            {isLocked ? (
              <Lock className="h-5 w-5 text-muted-foreground/60" />
            ) : isCompleted ? (
              <CheckCircle2 className="h-6 w-6 text-white" />
            ) : (
              <>
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider leading-none mt-1">Day</span>
                <span className="text-xl font-black text-white leading-none">{dayNumber}</span>
              </>
            )}
            
            {/* Glossy reflection effect */}
            {!isLocked && (
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            )}
          </div>

          {/* Status Badges */}
          <div className="flex flex-col gap-1.5">
            {isCurrent && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary w-fit border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                TODAY
              </div>
            )}
            
            {isCompleted && (
              <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 w-fit border border-emerald-500/20">
                COMPLETED
              </div>
            )}

            {isLocked && (
              <div className="inline-flex items-center gap-1 rounded-full bg-muted-foreground/10 px-2.5 py-0.5 text-xs font-bold text-muted-foreground w-fit border border-border">
                LOCKED
              </div>
            )}

            {/* Type badge */}
            {(isRevision || isMockTest) && (
              <div
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit",
                  isRevision && "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20",
                  isMockTest && "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                )}
              >
                {isRevision ? (
                  <RefreshCcw className="h-3 w-3" />
                ) : (
                  <Trophy className="h-3 w-3" />
                )}
                {isRevision ? "Revision" : "Mock Test"}
              </div>
            )}
          </div>
        </div>

        {/* Emoji */}
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full bg-card shadow-sm border border-border/50 text-2xl transition-transform duration-500",
            !isLocked && "group-hover:scale-110 group-hover:rotate-6"
          )}
          role="img"
          aria-label={`Day ${dayNumber} emoji`}
        >
          <span className={cn(isLocked && "opacity-50 grayscale")}>{emoji}</span>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="flex-grow flex flex-col relative z-10">
        <h3
          className={cn(
            "font-bold text-lg mb-2 leading-tight tracking-tight",
            isLocked ? "text-muted-foreground/70" : "text-foreground"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-sm mb-5 line-clamp-2 flex-grow",
            isLocked ? "text-muted-foreground/50" : "text-muted-foreground"
          )}
        >
          {description || `Master ${title.toLowerCase()} with real-world examples and interactive practice sessions.`}
        </p>

        {/* ─── Progress & Bottom Row ─── */}
        <div className="mt-auto flex flex-col gap-4">
          {/* Progress Indicator */}
          {(!isLocked) && (
            <div className="w-full">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{topicsCount || 3} topics</span>
                </div>
                <span
                  className={cn(
                    "text-xs font-bold tabular-nums",
                    isCompleted ? "text-emerald-500" : isCurrent ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {progressPercent}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className={cn(
                    "h-full rounded-full relative",
                    isCompleted
                      ? "bg-emerald-500"
                      : "bg-primary"
                  )}
                >
                  {/* Shimmer effect for current progress */}
                  {isCurrent && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  )}
                </motion.div>
              </div>
            </div>
          )}

          {/* Action Area */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            {isLocked ? (
              <span className="text-xs font-medium text-muted-foreground/60 flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" />
                Unlocks after Day {dayNumber - 1}
              </span>
            ) : (
              <span 
                className={cn(
                  "text-sm font-semibold flex items-center gap-1.5 transition-colors duration-300",
                  isCompleted ? "text-emerald-600 dark:text-emerald-400" : "text-primary group-hover:text-primary/80"
                )}
              >
                {isCompleted ? "Review lesson" : isCurrent ? "Continue learning" : "Start learning"}
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            )}
            
            {/* Play button circle */}
            {!isLocked && !isCompleted && (
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm"
              )}>
                <Play className="h-3.5 w-3.5 ml-0.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Render as link if accessible, div if locked
  if (canAccess) {
    return (
      <Link
        href={`/day/${dayNumber}`}
        className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[24px]"
        aria-label={`Day ${dayNumber}: ${title}${isCompleted ? " (completed)" : isCurrent ? " (current)" : ""}`}
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div
      className="block h-full"
      aria-label={`Day ${dayNumber}: ${title} (locked)`}
      aria-disabled="true"
    >
      <CardContent />
    </div>
  );
}
