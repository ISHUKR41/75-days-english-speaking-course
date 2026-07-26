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
function getDayGradient(dayNumber: number) {
  const gradients = [
    "from-violet-600 to-indigo-600",
    "from-blue-600 to-cyan-600",
    "from-emerald-600 to-teal-600",
    "from-amber-600 to-orange-600",
    "from-rose-600 to-pink-600",
    "from-purple-600 to-violet-600",
    "from-cyan-600 to-blue-600",
  ];
  return gradients[Math.floor((dayNumber - 1) / 11)] ?? gradients[0];
}

// ─── Difficulty indicator ─────────────────────────────────────────────────────
function getSubtopicDifficulty(subtopicIndex: number, totalSubtopics: number): {
  label: string;
  color: string;
  bg: string;
  border: string;
} {
  const ratio = subtopicIndex / Math.max(totalSubtopics - 1, 1);
  if (ratio < 0.33) return {
    label: "Beginner",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
  };
  if (ratio < 0.67) return {
    label: "Elementary",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
  };
  return {
    label: "Intermediate",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/25",
  };
}

// ─── SVG Progress Ring ────────────────────────────────────────────────────────
function ProgressRing({
  percent,
  size = 48,
  strokeWidth = 4,
  color = "#6272f1",
  trackColor = "rgba(255,255,255,0.2)",
}: {
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percent / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${circumference}`}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference - dash }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </svg>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
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
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(
    new Set([day.topics[0]?.id])
  );

  const completedSet = new Set(completedSubtopicIds);

  const totalSubtopics = day.topics.reduce(
    (sum, t) => sum + t.subtopics.length, 0
  );
  const completedSubtopicsCount = completedSubtopicIds.length;
  const progressPercent =
    totalSubtopics > 0
      ? Math.round((completedSubtopicsCount / totalSubtopics) * 100)
      : 0;

  const gradient = getDayGradient(dayNumber);

  const firstSubtopicUrl =
    day.topics[0]?.subtopics[0]
      ? `/day/${dayNumber}/topic/${day.topics[0].id}/subtopic/${day.topics[0].subtopics[0].id}/learn`
      : "#";

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
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ x: -3 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </motion.span>
        </Link>
      </motion.div>

      {/* ── Day Header Card ── */}
      <motion.div
        variants={itemVariants}
        className="relative rounded-3xl overflow-hidden border border-border shadow-xl"
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
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Day number badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white"
              >
                <span className="text-2xl font-black">{dayNumber}</span>
              </motion.div>
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

            {/* Animated progress ring + stats */}
            <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-3 text-white shrink-0">
              <div className="relative flex items-center justify-center">
                <ProgressRing
                  percent={progressPercent}
                  size={56}
                  strokeWidth={5}
                  color="white"
                  trackColor="rgba(255,255,255,0.2)"
                />
                <span className="absolute text-sm font-black">{progressPercent}%</span>
              </div>
              <div className="text-center">
                <p className="text-xs text-white/70">Done</p>
                <p className="text-xs text-white/90 font-semibold mt-0.5">
                  {completedSubtopicsCount}/{totalSubtopics}
                </p>
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
            { icon: Play, label: "Start Learning", href: firstSubtopicUrl, color: "text-primary", hoverBg: "hover:bg-primary/5" },
            { icon: BookMarked, label: "Vocabulary", href: `/vocabulary?day=${dayNumber}`, color: "text-amber-500", hoverBg: "hover:bg-amber-500/5" },
            { icon: Target, label: "Mock Test", href: `/mock-test`, color: "text-rose-500", hoverBg: "hover:bg-rose-500/5" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={cn(
                "flex flex-col sm:flex-row items-center justify-center gap-1.5 py-4 text-sm font-medium transition-all duration-200 group",
                action.hoverBg
              )}
            >
              <action.icon className={cn("h-4 w-4 transition-transform group-hover:scale-110", action.color)} />
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
            color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20",
            glow: "hover:shadow-blue-500/10",
          },
          {
            icon: Brain, label: "Subtopics", value: totalSubtopics,
            color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20",
            glow: "hover:shadow-purple-500/10",
          },
          {
            icon: Target, label: "Practice Qs",
            value: day.topics.reduce(
              (s, t) => s + t.subtopics.reduce((ss, sub) => ss + (sub._count?.practiceQs ?? 0), 0), 0
            ) || "80-100",
            color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20",
            glow: "hover:shadow-pink-500/10",
          },
          {
            icon: BookMarked, label: "Vocabulary",
            value: day._count?.vocabulary || "200+",
            color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20",
            glow: "hover:shadow-amber-500/10",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className={cn(
              "flex items-center gap-3 rounded-2xl border bg-card p-4 transition-all duration-200 hover:shadow-lg cursor-default",
              stat.border, stat.glow
            )}
          >
            <div className={cn("rounded-xl p-2.5 shrink-0", stat.bg)}>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </div>
            <div>
              <p className="text-xl font-black text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Topics Accordion ── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15">
            <Star className="h-4 w-4 text-amber-500" />
          </div>
          <h2 className="text-xl font-bold">Topics for Day {dayNumber}</h2>
        </div>

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
            const isTopicDone = topicProgressPct === 100 && topic.subtopics.length > 0;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: topicIdx * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "rounded-2xl border overflow-hidden bg-card transition-all duration-200",
                  isTopicDone ? "border-emerald-500/30" : "border-border",
                  isExpanded && "shadow-md"
                )}
              >
                {/* Topic header */}
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className={cn(
                    "flex w-full items-center gap-4 p-4 transition-colors text-left",
                    isExpanded ? "bg-accent/30" : "hover:bg-accent/50"
                  )}
                  aria-expanded={isExpanded}
                >
                  {/* Topic icon + animated progress ring */}
                  <div className="relative shrink-0">
                    <ProgressRing
                      percent={topicProgressPct}
                      size={44}
                      strokeWidth={3.5}
                      color={topic.color || "#6272f1"}
                      trackColor="hsl(var(--muted))"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center text-lg"
                      style={{ transform: "none" }}
                    >
                      {topic.emoji}
                    </div>
                  </div>

                  {/* Topic info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-sm md:text-base text-foreground">
                        {topic.title}
                      </h3>
                      {isTopicDone && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 text-xs font-bold text-emerald-500">
                          <CheckCircle2 className="h-3 w-3" /> Done
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {topic.description}
                    </p>
                    {/* Mini progress bar */}
                    <div className="mt-2 h-1 w-full max-w-xs rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full transition-all duration-700"
                        initial={{ width: 0 }}
                        animate={{ width: `${topicProgressPct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: topicIdx * 0.1 }}
                        style={{ backgroundColor: topic.color }}
                      />
                    </div>
                  </div>

                  {/* Count + chevron */}
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="hidden sm:block text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {completedCount}/{topic.subtopics.length} done
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </button>

                {/* Subtopics list */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-border/50"
                    >
                      {topic.subtopics.map((subtopic, subIdx) => {
                        const isCompleted = completedSet.has(subtopic.id);
                        const isCurrent =
                          !isCompleted &&
                          completedSubtopicsCount === topic.subtopics.findIndex(
                            (s) => s.id === subtopic.id
                          );
                        const difficulty = getSubtopicDifficulty(subIdx, topic.subtopics.length);
                        const subtopicLearnUrl = `/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}/learn`;
                        const subtopicPracticeUrl = `/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}/practice`;
                        const subtopicTestUrl = `/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}/test`;

                        return (
                          <motion.div
                            key={subtopic.id}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIdx * 0.04, duration: 0.25 }}
                            className={cn(
                              "border-b border-border/40 last:border-0 transition-all duration-200",
                              isCompleted && "bg-emerald-500/[0.03]",
                              isCurrent && "bg-primary/[0.04]",
                            )}
                          >
                            <div className="flex items-center gap-3 px-4 py-3.5">
                              {/* Status indicator */}
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className={cn(
                                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm transition-colors",
                                  isCompleted
                                    ? "bg-emerald-500/15 text-emerald-500 ring-1 ring-emerald-500/25"
                                    : isCurrent
                                    ? "bg-primary/15 text-primary ring-1 ring-primary/25"
                                    : "bg-muted text-muted-foreground"
                                )}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                  <span className="text-base">{subtopic.emoji}</span>
                                )}
                              </motion.div>

                              {/* Subtopic info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Link
                                    href={`/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`}
                                    className={cn(
                                      "text-sm font-semibold hover:underline underline-offset-2",
                                      isCompleted
                                        ? "text-muted-foreground/70"
                                        : "text-foreground"
                                    )}
                                  >
                                    {subtopic.title}
                                  </Link>
                                  {/* Difficulty chip */}
                                  <span className={cn(
                                    "rounded-full border px-2 py-0.5 text-xs font-medium",
                                    difficulty.bg, difficulty.color, difficulty.border
                                  )}>
                                    {difficulty.label}
                                  </span>
                                  {isCompleted && (
                                    <span className="rounded-full bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 text-xs font-bold text-emerald-500">
                                      ✓ Done
                                    </span>
                                  )}
                                  {isCurrent && (
                                    <span className="rounded-full bg-primary/15 border border-primary/25 px-2 py-0.5 text-xs font-bold text-primary animate-pulse">
                                      Continue →
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground truncate mt-0.5">
                                  {subtopic.description}
                                </p>

                                {/* Action chips */}
                                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                  <Link
                                    href={subtopicLearnUrl}
                                    className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all hover:scale-105"
                                    onClick={e => e.stopPropagation()}
                                  >
                                    <BookOpen className="h-2.5 w-2.5" />
                                    Learn
                                  </Link>
                                  <Link
                                    href={subtopicPracticeUrl}
                                    className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 transition-all hover:scale-105"
                                    onClick={e => e.stopPropagation()}
                                  >
                                    <Target className="h-2.5 w-2.5" />
                                    Practice
                                  </Link>
                                  <Link
                                    href={subtopicTestUrl}
                                    className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-400 transition-all hover:scale-105"
                                    onClick={e => e.stopPropagation()}
                                  >
                                    <Trophy className="h-2.5 w-2.5" />
                                    Test
                                  </Link>

                                  {/* Stats */}
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
                                <Link
                                  href={`/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`}
                                  className="flex items-center justify-center h-7 w-7 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                  <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
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
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15">
                <Trophy className="h-4 w-4 text-amber-500" />
              </div>
              Your Day {dayNumber} Score
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Practice Score", value: dayProgress.practiceScore, icon: Target, color: "text-blue-500", bg: "bg-blue-500/10" },
                { label: "Test Score", value: dayProgress.testScore, icon: Award, color: "text-purple-500", bg: "bg-purple-500/10" },
                { label: "XP Earned", value: `+${dayProgress.totalXpEarned}`, icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className={cn("text-center rounded-xl p-3", item.bg)}
                >
                  <item.icon className={cn("h-5 w-5 mx-auto mb-1", item.color)} />
                  <p className="text-xl font-black">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Motivation Banner ── */}
      <motion.div variants={itemVariants}>
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 p-5 flex items-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-2xl"
          >
            🔥
          </motion.div>
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
