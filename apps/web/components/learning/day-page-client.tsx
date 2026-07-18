"use client";
// ============================================================
// Day Page Client - Interactive day view with topics and subtopics
// User arrives here when clicking on a day card in dashboard
// ============================================================

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Lock,
  Mic,
  Play,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { cn, getDayColor } from "@/lib/utils";
import type { DayConfig } from "@/data/course-content/days-config";

interface DayPageClientProps {
  dayData: DayConfig & { id: string; progress?: unknown[] };
  dayNumber: number;
  hasAccess: boolean;
  userId: string;
}

export function DayPageClient({
  dayData,
  dayNumber,
  hasAccess,
  userId,
}: DayPageClientProps) {
  // Track which topics are expanded
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(
    new Set([dayData.topics[0]?.id]) // First topic is expanded by default
  );

  // Day color
  const dayColor = getDayColor(dayNumber);

  // Toggle topic expansion
  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  // Mock progress (will come from API)
  const completedSubtopics = new Set<string>();
  const currentSubtopicId = dayData.topics[0]?.subtopics[0]?.id;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* ── Back navigation ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm text-muted-foreground 
                     hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </motion.div>

      {/* ── Day Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border overflow-hidden"
      >
        {/* Gradient banner */}
        <div
          className="p-6 relative"
          style={{
            background: `linear-gradient(135deg, ${dayColor}20, transparent)`,
            borderBottom: `2px solid ${dayColor}40`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Day number badge */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl
                           text-2xl font-bold text-white shadow-lg"
                style={{ backgroundColor: dayColor }}
              >
                {dayNumber}
              </div>

              {/* Title and description */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Day {dayNumber}
                  </span>
                  {dayData.isRevision && (
                    <span className="badge bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs">
                      Revision
                    </span>
                  )}
                  {dayData.isMockTest && (
                    <span className="badge bg-gold-400/10 text-gold-600 dark:text-gold-400 text-xs">
                      Mock Test
                    </span>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-foreground">
                  {dayData.emoji} {dayData.title}
                </h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  {dayData.description}
                </p>
              </div>
            </div>

            {/* Day stats */}
            <div className="hidden sm:flex flex-col items-end gap-2">
              <div className="badge-primary">
                {dayData.topics.length} Topics
              </div>
              <div className="text-xs text-muted-foreground">
                {dayData.topics.reduce((sum, t) => sum + t.subtopics.length, 0)} Subtopics
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Day Progress</span>
              <span>{completedSubtopics.size} / {dayData.topics.reduce((sum, t) => sum + t.subtopics.length, 0)} completed</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(completedSubtopics.size / Math.max(1, dayData.topics.reduce((sum, t) => sum + t.subtopics.length, 0))) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="grid grid-cols-3 divide-x divide-border bg-card">
          <Link
            href={`/day/${dayNumber}/topic/${dayData.topics[0]?.id}/subtopic/${dayData.topics[0]?.subtopics[0]?.id}`}
            className="flex items-center justify-center gap-2 py-3 text-sm font-medium
                       text-primary hover:bg-primary/5 transition-colors"
          >
            <Play className="h-4 w-4" />
            <span className="hidden sm:inline">Start Learning</span>
            <span className="sm:hidden">Learn</span>
          </Link>
          <Link
            href={`/day/${dayNumber}?tab=vocabulary`}
            className="flex items-center justify-center gap-2 py-3 text-sm font-medium
                       text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Vocabulary</span>
            <span className="sm:hidden">Words</span>
          </Link>
          <Link
            href={`/day/${dayNumber}?tab=test`}
            className="flex items-center justify-center gap-2 py-3 text-sm font-medium
                       text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Target className="h-4 w-4" />
            <span className="hidden sm:inline">Take Test</span>
            <span className="sm:hidden">Test</span>
          </Link>
        </div>
      </motion.div>

      {/* ── Topics List ── */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Topics for Day {dayNumber}</h2>

        {dayData.topics.map((topic, topicIdx) => {
          const isExpanded = expandedTopics.has(topic.id);
          const completedCount = topic.subtopics.filter((s) =>
            completedSubtopics.has(s.id)
          ).length;
          const topicProgress = (completedCount / topic.subtopics.length) * 100;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: topicIdx * 0.08 }}
              className="rounded-2xl border border-border overflow-hidden"
            >
              {/* Topic header - clickable to expand */}
              <button
                onClick={() => toggleTopic(topic.id)}
                className="flex w-full items-center gap-4 p-4 hover:bg-accent transition-colors text-left"
                aria-expanded={isExpanded}
                aria-controls={`topic-${topic.id}`}
              >
                {/* Topic color dot */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{ backgroundColor: `${topic.color}20` }}
                >
                  {topic.emoji}
                </div>

                {/* Topic info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-foreground truncate">
                      {topic.title}
                    </h3>
                    {topicProgress === 100 && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {topic.description}
                  </p>
                  {/* Mini progress bar */}
                  <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${topicProgress}%`,
                        backgroundColor: topic.color,
                      }}
                    />
                  </div>
                </div>

                {/* Subtopic count */}
                <div className="shrink-0 text-right">
                  <div className="text-xs font-medium text-muted-foreground">
                    {completedCount}/{topic.subtopics.length}
                  </div>
                  <div className="text-xs text-muted-foreground">subtopics</div>
                </div>

                {/* Expand arrow */}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    isExpanded && "rotate-180"
                  )}
                />
              </button>

              {/* Subtopics list */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    id={`topic-${topic.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-border"
                  >
                    {topic.subtopics.map((subtopic, subtopicIdx) => {
                      const isCompleted = completedSubtopics.has(subtopic.id);
                      const isCurrent = subtopic.id === currentSubtopicId;

                      return (
                        <Link
                          key={subtopic.id}
                          href={`/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 border-b border-border/50 last:border-0",
                            "transition-colors duration-150",
                            isCurrent
                              ? "bg-primary/5"
                              : "hover:bg-accent"
                          )}
                        >
                          {/* Status icon */}
                          <div
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm",
                              isCompleted
                                ? "bg-emerald-500/10 text-emerald-500"
                                : isCurrent
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <span>{subtopic.emoji}</span>
                            )}
                          </div>

                          {/* Subtopic info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p
                                className={cn(
                                  "text-sm font-medium truncate",
                                  isCompleted
                                    ? "text-muted-foreground line-through"
                                    : isCurrent
                                    ? "text-primary"
                                    : "text-foreground"
                                )}
                              >
                                {subtopic.title}
                              </p>
                              {isCurrent && (
                                <span className="badge-primary text-xs">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate">
                              {subtopic.description}
                            </p>
                          </div>

                          {/* Time estimate */}
                          <div className="shrink-0 flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {subtopic.estimatedMins}m
                          </div>

                          {/* Arrow */}
                          <ChevronRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── Day Stats Footer ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          {
            icon: BookOpen,
            label: "Topics",
            value: dayData.topics.length,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
          },
          {
            icon: Target,
            label: "Subtopics",
            value: dayData.topics.reduce((s, t) => s + t.subtopics.length, 0),
            color: "text-purple-500",
            bg: "bg-purple-500/10",
          },
          {
            icon: Mic,
            label: "Practice Qs",
            value: "80-100",
            color: "text-pink-500",
            bg: "bg-pink-500/10",
          },
          {
            icon: Zap,
            label: "XP Available",
            value: "500+",
            color: "text-gold-500",
            bg: "bg-gold-400/10",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
          >
            <div className={cn("rounded-lg p-2", stat.bg)}>
              <stat.icon className={cn("h-4 w-4", stat.color)} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
