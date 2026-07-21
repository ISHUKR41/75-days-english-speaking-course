"use client";
// ============================================================
// Day Page Client - Full interactive day view
// Shows topics, subtopics, progress, vocabulary count
// Animates in with Framer Motion
// ============================================================

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, CheckCircle2, ChevronDown, ChevronRight,
  Clock, Lock, Mic, Play, Star, Target, Trophy, Zap,
  BookMarked, Brain, Flame, Award, AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SubtopicData {
  id: string;
  title: string;
  description: string;
  emoji: string;
  estimatedMins: number;
  orderIndex: number;
  _count: { practiceQs: number; testQs: number; vocabulary: number };
}

interface TopicData {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  orderIndex: number;
  subtopics: SubtopicData[];
}

interface DayData {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
  emoji: string;
  isRevision: boolean;
  isMockTest: boolean;
  topics: TopicData[];
  _count: { vocabulary: number };
}

interface DayPageClientProps {
  day: DayData;
  dayNumber: number;
  hasAccess: boolean;
  userId: string;
  userCurrentDay: number;
  dayProgress: {
    status: string;
    practiceScore: number;
    testScore: number;
    totalXpEarned: number;
  } | null;
  completedSubtopicIds: string[];
}

// ─── Color helpers ────────────────────────────────────────────────────────────
// Returns a gradient based on day number for visual variety
function getDayGradient(dayNumber: number) {
  const gradients = [
    "from-violet-600 to-indigo-600",    // 1-10
    "from-blue-600 to-cyan-600",         // 11-20
    "from-emerald-600 to-teal-600",      // 21-30
    "from-amber-600 to-orange-600",      // 31-40
    "from-rose-600 to-pink-600",         // 41-50
    "from-purple-600 to-violet-600",     // 51-60
    "from-cyan-600 to-blue-600",         // 61-75
  ];
  return gradients[Math.floor((dayNumber - 1) / 11)] ?? gradients[0];
}

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function DayPageClient({
  day,
  dayNumber,
  hasAccess,
  userId,
  userCurrentDay,
  dayProgress,
  completedSubtopicIds,
}: DayPageClientProps) {
  // Track which topics are expanded in the accordion
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(
    new Set([day.topics[0]?.id]) // First topic open by default
  );

  // Build a set for fast lookup of completed subtopics
  const completedSet = new Set(completedSubtopicIds);

  // Total subtopic count
  const totalSubtopics = day.topics.reduce(
    (sum, t) => sum + t.subtopics.length, 0
  );
  const completedSubtopicsCount = completedSubtopicIds.length;
  const progressPercent =
    totalSubtopics > 0
      ? Math.round((completedSubtopicsCount / totalSubtopics) * 100)
      : 0;

  // Gradient for the day header
  const gradient = getDayGradient(dayNumber);

  // First subtopic URL for "Start Learning" button
  const firstSubtopicUrl =
    day.topics[0]?.subtopics[0]
      ? `/day/${dayNumber}/topic/${day.topics[0].id}/subtopic/${day.topics[0].subtopics[0].id}`
      : "#";

  // Toggle topic accordion
  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      next.has(topicId) ? next.delete(topicId) : next.add(topicId);
      return next;
    });
  };

  // ─── Locked Day ─────────────────────────────────────────────────────────────
  if (!hasAccess) {
    return (
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl bg-muted"
        >
          <Lock className="h-12 w-12 text-muted-foreground" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-3">
            Day {dayNumber} is Locked
          </h1>
          <p className="text-muted-foreground text-lg mb-2">
            {day.emoji} <strong>{day.title}</strong>
          </p>
          <p className="text-muted-foreground">
            Complete Day {dayNumber - 1} first to unlock this day.
            You&apos;re currently on Day {userCurrentDay}.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href={`/day/${userCurrentDay}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <Play className="h-4 w-4" />
            Go to Current Day ({userCurrentDay})
          </Link>
        </motion.div>
      </div>
    );
  }

  // ─── Full Day View ───────────────────────────────────────────────────────────
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto space-y-6 pb-12"
    >
      {/* ── Back navigation ── */}
      <motion.div variants={itemVariants}>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </motion.div>

      {/* ── Day Header Card ── */}
      <motion.div
        variants={itemVariants}
        className="relative rounded-3xl overflow-hidden border border-border"
      >
        {/* Gradient banner */}
        <div className={`bg-gradient-to-br ${gradient} p-6 md:p-8`}>
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
            }}
          />

          <div className="relative flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Day number badge */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                <span className="text-2xl font-black">{dayNumber}</span>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Day {dayNumber} of 75
                  </span>
                  {/* Badges */}
                  {day.isRevision && (
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold backdrop-blur-sm">
                      🔄 Revision
                    </span>
                  )}
                  {day.isMockTest && (
                    <span className="rounded-full bg-amber-400/30 px-2 py-0.5 text-xs font-semibold backdrop-blur-sm">
                      ⭐ Mock Test
                    </span>
                  )}
                  {dayProgress?.status === "COMPLETED" && (
                    <span className="rounded-full bg-emerald-400/30 px-2 py-0.5 text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Completed
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-black leading-tight">
                  {day.emoji} {day.title}
                </h1>
                <p className="text-white/80 text-sm mt-1 max-w-xl">
                  {day.description}
                </p>
              </div>
            </div>

            {/* Stats pill */}
            <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-3 text-white shrink-0">
              <div className="text-center">
                <p className="text-2xl font-black">{progressPercent}%</p>
                <p className="text-xs text-white/70">Done</p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative mt-5 h-2 rounded-full bg-white/20 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-white/70">
            <span>{completedSubtopicsCount} completed</span>
            <span>{totalSubtopics} subtopics total</span>
          </div>
        </div>

        {/* Quick action row */}
        <div className="grid grid-cols-3 divide-x divide-border bg-card/80 backdrop-blur-sm">
          {[
            { icon: Play, label: "Start Learning", href: firstSubtopicUrl, color: "text-primary" },
            { icon: BookMarked, label: "Vocabulary", href: `/vocabulary?day=${dayNumber}`, color: "text-amber-500" },
            { icon: Target, label: "Mock Test", href: `/mock-test`, color: "text-rose-500" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-4 text-sm font-medium hover:bg-accent transition-colors"
            >
              <action.icon className={cn("h-4 w-4", action.color)} />
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── Stats Row ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            icon: BookOpen, label: "Topics", value: day.topics.length,
            color: "text-blue-500", bg: "bg-blue-500/10",
          },
          {
            icon: Brain, label: "Subtopics", value: totalSubtopics,
            color: "text-purple-500", bg: "bg-purple-500/10",
          },
          {
            icon: Target, label: "Practice Qs",
            value: day.topics.reduce(
              (s, t) => s + t.subtopics.reduce((ss, sub) => ss + (sub._count?.practiceQs ?? 0), 0), 0
            ) || "80-100",
            color: "text-pink-500", bg: "bg-pink-500/10",
          },
          {
            icon: BookMarked, label: "Vocabulary",
            value: day._count?.vocabulary || "200+",
            color: "text-amber-500", bg: "bg-amber-500/10",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-md transition-shadow"
          >
            <div className={cn("rounded-xl p-2.5", stat.bg)}>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </div>
            <div>
              <p className="text-xl font-black text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Topics Accordion ── */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-500" />
          Topics for Day {dayNumber}
        </h2>

        <div className="space-y-3">
          {day.topics.map((topic, topicIdx) => {
            const isExpanded = expandedTopics.has(topic.id);
            const completedCount = topic.subtopics.filter((s) =>
              completedSet.has(s.id)
            ).length;
            const topicProgressPct =
              topic.subtopics.length > 0
                ? (completedCount / topic.subtopics.length) * 100
                : 0;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: topicIdx * 0.05 }}
                className="rounded-2xl border border-border overflow-hidden bg-card"
              >
                {/* Topic header — click to expand */}
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="flex w-full items-center gap-4 p-4 hover:bg-accent/50 transition-colors text-left"
                  aria-expanded={isExpanded}
                >
                  {/* Topic icon */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ backgroundColor: `${topic.color}25` }}
                  >
                    {topic.emoji}
                  </div>

                  {/* Topic info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-sm md:text-base text-foreground">
                        {topic.title}
                      </h3>
                      {topicProgressPct === 100 && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {topic.description}
                    </p>
                    {/* Mini progress bar */}
                    <div className="mt-2 h-1 w-full max-w-xs rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${topicProgressPct}%`,
                          backgroundColor: topic.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Count + chevron */}
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="hidden sm:block text-xs text-muted-foreground">
                      {completedCount}/{topic.subtopics.length} done
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </div>
                </button>

                {/* Subtopics list */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-border/50"
                    >
                      {topic.subtopics.map((subtopic, subIdx) => {
                        const isCompleted = completedSet.has(subtopic.id);
                        const isCurrent =
                          !isCompleted &&
                          completedSubtopicsCount === topic.subtopics.findIndex(
                            (s) => s.id === subtopic.id
                          );

                        return (
                          <Link
                            key={subtopic.id}
                            href={`/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3.5",
                              "border-b border-border/40 last:border-0",
                              "transition-colors duration-150 hover:bg-accent/40",
                              isCurrent && "bg-primary/5"
                            )}
                          >
                            {/* Status indicator */}
                            <div
                              className={cn(
                                "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm",
                                isCompleted
                                  ? "bg-emerald-500/15 text-emerald-500"
                                  : isCurrent
                                  ? "bg-primary/15 text-primary"
                                  : "bg-muted text-muted-foreground"
                              )}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <span className="text-base">{subtopic.emoji}</span>
                              )}
                            </div>

                            {/* Subtopic info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <p
                                  className={cn(
                                    "text-sm font-semibold",
                                    isCompleted
                                      ? "text-muted-foreground line-through"
                                      : "text-foreground"
                                  )}
                                >
                                  {subtopic.title}
                                </p>
                                {isCurrent && (
                                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
                                    Continue
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground truncate">
                                {subtopic.description}
                              </p>
                              {/* Mini stats */}
                              <div className="flex items-center gap-3 mt-1">
                                {subtopic._count?.practiceQs > 0 && (
                                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Target className="h-3 w-3" />
                                    {subtopic._count.practiceQs} Qs
                                  </span>
                                )}
                                {subtopic._count?.vocabulary > 0 && (
                                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <BookOpen className="h-3 w-3" />
                                    {subtopic._count.vocabulary} words
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Time + arrow */}
                            <div className="shrink-0 flex items-center gap-2">
                              <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {subtopic.estimatedMins}m
                              </span>
                              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                            </div>
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
      </motion.div>

      {/* ── XP & Score Summary ── */}
      {dayProgress && (
        <motion.div variants={itemVariants}>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-base">
              <Trophy className="h-5 w-5 text-amber-500" />
              Your Day {dayNumber} Score
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Practice Score", value: dayProgress.practiceScore, icon: Target, color: "text-blue-500" },
                { label: "Test Score", value: dayProgress.testScore, icon: Award, color: "text-purple-500" },
                { label: "XP Earned", value: `+${dayProgress.totalXpEarned}`, icon: Zap, color: "text-amber-500" },
              ].map((item) => (
                <div key={item.label} className="text-center rounded-xl bg-muted/50 p-3">
                  <item.icon className={cn("h-5 w-5 mx-auto mb-1", item.color)} />
                  <p className="text-xl font-black">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Motivation Banner ── */}
      <motion.div variants={itemVariants}>
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 p-5 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-2xl">
            🔥
          </div>
          <div>
            <p className="font-bold text-foreground">
              {completedSubtopicsCount === 0
                ? "Ready to start? Let's go! 🚀"
                : completedSubtopicsCount === totalSubtopics
                ? "Amazing! Day complete! You're crushing it! 🏆"
                : `${totalSubtopics - completedSubtopicsCount} more to complete this day. Keep going!`}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Each subtopic has lessons, vocabulary, practice questions, and a test.
              Both typing and speaking modes available.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
