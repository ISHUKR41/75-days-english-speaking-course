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
  Clock,
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

  // Icon based on day type and status
  const StatusIcon = isCompleted
    ? CheckCircle2
    : isLocked
    ? Lock
    : isMockTest
    ? Trophy
    : isRevision
    ? RefreshCcw
    : Play;

  // Can the user access this day?
  const canAccess = !isLocked;

  const CardContent = () => (
    <div
      className={cn(
        // Base card styles
        "relative overflow-hidden rounded-2xl border p-4 h-full",
        "transition-all duration-300",

        // Status-based styles
        isCompleted && [
          "border-emerald-500/30 bg-emerald-500/5",
          "hover:border-emerald-500/50 hover:shadow-card-lg hover:-translate-y-1",
        ],
        isCurrent && [
          "border-primary/50 bg-primary/5",
          "hover:border-primary/70 hover:shadow-glow-brand hover:-translate-y-1",
          "shadow-card",
        ],
        isLocked && [
          "border-border/50 bg-muted/30 opacity-60",
          "cursor-not-allowed",
        ],
        !isCompleted && !isCurrent && !isLocked && [
          "border-border bg-card",
          "hover:border-primary/30 hover:shadow-card-lg hover:-translate-y-1",
        ]
      )}
    >
      {/* Background gradient for current day */}
      {isCurrent && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${dayColor}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Top row: day number + status icon */}
      <div className="flex items-start justify-between mb-3">
        {/* Day number badge */}
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
          style={{ backgroundColor: isLocked ? undefined : dayColor }}
        >
          {isLocked ? (
            <Lock className="h-4 w-4 text-muted-foreground/60" />
          ) : (
            dayNumber
          )}
        </div>

        {/* Emoji */}
        <span
          className="text-2xl"
          role="img"
          aria-label={`Day ${dayNumber} emoji`}
        >
          {emoji}
        </span>
      </div>

      {/* Day type badge */}
      {(isRevision || isMockTest) && (
        <div
          className={cn(
            "badge mb-2",
            isRevision && "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
            isMockTest && "bg-amber-500/10 text-amber-600 dark:text-amber-400"
          )}
        >
          {isRevision ? (
            <>
              <RefreshCcw className="h-3 w-3" />
              Revision
            </>
          ) : (
            <>
              <Trophy className="h-3 w-3" />
              Mock Test
            </>
          )}
        </div>
      )}

      {/* Day title */}
      <h3
        className={cn(
          "font-semibold text-sm mb-1 leading-snug",
          isLocked ? "text-muted-foreground/60" : "text-foreground"
        )}
      >
        Day {dayNumber} · {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-xs mb-3 line-clamp-2",
          isLocked ? "text-muted-foreground/40" : "text-muted-foreground"
        )}
      >
        {description || `Learn ${title} with examples and practice`}
      </p>

      {/* Progress bar for started days */}
      {(isCompleted || isCurrent) && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">
              {topicsCount} topics
            </span>
            <span
              className={cn(
                "text-xs font-medium",
                isCompleted ? "text-emerald-500" : "text-primary"
              )}
            >
              {progressPercent}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-muted">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-1000",
                isCompleted
                  ? "bg-emerald-500"
                  : "bg-gradient-to-r from-primary to-purple-500"
              )}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Bottom row: meta info + action */}
      <div className="flex items-center justify-between">
        {/* Topics count */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <BookOpen className="h-3 w-3" />
          <span>{topicsCount || 3} topics</span>
        </div>

        {/* Action button */}
        {!isLocked && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-1",
              isCompleted
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : isCurrent
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            )}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="h-3 w-3" />
                Done
              </>
            ) : isCurrent ? (
              <>
                <Play className="h-3 w-3" />
                Continue
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                Start
              </>
            )}
          </div>
        )}

        {/* Arrow for accessible days */}
        {canAccess && (
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              "group-hover:translate-x-1",
              isCompleted ? "text-emerald-500/60" : "text-muted-foreground/60"
            )}
          />
        )}
      </div>

      {/* Current day pulse indicator */}
      {isCurrent && (
        <div
          className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-primary"
          aria-label="Current day"
        >
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        </div>
      )}
    </div>
  );

  // Render as link if accessible, div if locked
  if (canAccess) {
    return (
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Link
          href={`/day/${dayNumber}`}
          className="block h-full group"
          aria-label={`Day ${dayNumber}: ${title}${isCompleted ? " (completed)" : isCurrent ? " (current)" : ""}`}
        >
          <CardContent />
        </Link>
      </motion.div>
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
