"use client";
// ============================================================
// Dashboard Client - Interactive dashboard with real-time updates
// All charts, animations, and interactive elements live here
// ============================================================

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Flame,
  BookMarked,
  Mic,
  Play,
  Star,
  Target,
  Trophy,
  Zap,
  Calendar,
  Sparkles,
  Rocket,
  ChevronRight,
  Activity,
} from "lucide-react";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardStreak } from "@/components/dashboard/dashboard-streak";
import { DashboardChart } from "@/components/dashboard/dashboard-chart";
import { DayCard } from "@/components/dashboard/day-card";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────
interface RecentActivityItem {
  id: string;
  activity: string;
  xp: number;
  points: number;
  createdAt: Date | string;
  dayId: string | null;
}

interface DashboardClientProps {
  userId: string;
  initialUser: Record<string, unknown> | null;
  initialDays: Array<{
    dayNumber: number;
    title: string;
    description: string;
    emoji: string;
    isRevision: boolean;
    isMockTest: boolean;
    _count: { topics: number };
  }>;
  initialLeaderboard: Array<{
    id: string;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;
    totalXp: number;
    level: number;
    streak: number;
    currentDay?: number;
  }>;
  completedDaysCount?: number;
  todayXp?: number;
  weekXp?: number;
  accuracy?: number;
  questionsAnswered?: number;
  wordsLearned?: number;
  weeklyXpChart?: Array<{ day: string; xp: number; questions: number }>;
  userRank?: number;
  recentActivity?: RecentActivityItem[];
}

// Build dynamic quick actions based on user's current day
function buildQuickActions(currentDay: number) {
  return [
    {
      icon: Play,
      label: `Continue Day ${currentDay}`,
      description: "Pick up where you left off",
      href: `/day/${currentDay}`,
      color: "from-brand-500 to-purple-500",
      badge: "Current",
    },
    {
      icon: BookMarked,
      label: "Vocabulary Bank",
      description: "Review & master words",
      href: "/vocabulary",
      color: "from-amber-500 to-orange-500",
      badge: "200+ words",
    },
    {
      icon: Mic,
      label: "Speaking Practice",
      description: "Practice pronunciation",
      href: "/speaking",
      color: "from-pink-500 to-rose-500",
      badge: "NEW",
    },
    {
      icon: Target,
      label: "Quick Test",
      description: "Test your knowledge",
      href: "/mock-test",
      color: "from-emerald-500 to-cyan-500",
      badge: "50 Qs",
    },
  ];
}

// Format time ago for activity feed
function timeAgo(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "yesterday";
  return `${diffDays}d ago`;
}

// Format activity label for display
function formatActivity(activity: string): string {
  const map: Record<string, string> = {
    PRACTICE: "Completed practice",
    TEST: "Passed a test",
    LESSON: "Finished a lesson",
    VOCABULARY: "Learned vocabulary",
    STREAK_BONUS: "Streak bonus",
    SPEECH: "Speaking practice",
    DAILY_LOGIN: "Daily login",
    BADGE: "Earned a badge",
  };
  return map[activity] ?? activity.replace(/_/g, " ").toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
}

// Motivational message based on streak
function getMotivationalMessage(streak: number, completedDays: number): string {
  if (streak >= 30) return "🏆 Incredible! 30+ day streak — you're unstoppable!";
  if (streak >= 14) return "🔥 Two weeks strong! Your dedication is inspiring!";
  if (streak >= 7) return "⚡ One week streak — you're building a great habit!";
  if (streak >= 3) return "💪 3-day streak! Momentum is everything, keep going!";
  if (streak >= 1) return "🌱 Great start! Come back tomorrow to grow your streak!";
  if (completedDays > 10) return "📚 You've completed " + completedDays + " days — amazing progress!";
  if (completedDays > 0) return "✨ Great progress! Keep learning every day!";
  return "🚀 Your 75-day English journey starts now. Let's go!";
}

// ─── Animation variants ───────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DashboardClient({
  userId,
  initialUser,
  initialDays,
  initialLeaderboard,
  completedDaysCount: propCompletedDays,
  todayXp: propTodayXp = 0,
  weekXp: propWeekXp = 0,
  accuracy: propAccuracy = 0,
  questionsAnswered: propQuestionsAnswered = 0,
  wordsLearned: propWordsLearned = 0,
  weeklyXpChart,
  userRank: propUserRank = 0,
  recentActivity = [],
}: DashboardClientProps) {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "in-progress" | "completed" | "locked"
  >("all");

  // ─── Cast user type ───────────────────────────────────────────
  const realUser = initialUser as {
    firstName?: string;
    lastName?: string;
    currentDay?: number;
    totalXp?: number;
    level?: number;
    streak?: number;
    longestStreak?: number;
    totalCoins?: number;
    progress?: Array<{
      status?: string;
      topicsCompleted?: number;
      topicsTotal?: number;
      day?: { dayNumber: number };
    }>;
    badges?: Array<unknown>;
    streakHistory?: Array<{
      date: string | Date;
      completed: boolean;
      xpEarned: number;
    }>;
  } | null;

  // ─── Build progress maps from real DB data ────────────────────
  const progressByDay = new Map(
    (realUser?.progress ?? [])
      .filter((p) => p.day?.dayNumber)
      .map((p) => [p.day!.dayNumber, p])
  );

  const completedDayNumbers = new Set(
    (realUser?.progress ?? [])
      .filter((p) => p.status === "COMPLETED" && p.day?.dayNumber)
      .map((p) => p.day!.dayNumber)
  );

  const inProgressDayNumbers = new Set(
    (realUser?.progress ?? [])
      .filter(
        (p) =>
          p.status === "IN_PROGRESS" &&
          p.day?.dayNumber &&
          !completedDayNumbers.has(p.day!.dayNumber)
      )
      .map((p) => p.day!.dayNumber)
  );

  // ─── Stats (real data from DB) ────────────────────────────────
  const completedDays =
    propCompletedDays !== undefined
      ? propCompletedDays
      : completedDayNumbers.size;

  const stats = {
    currentDay: realUser?.currentDay ?? 1,
    completedDays,
    streak: realUser?.streak ?? 0,
    longestStreak: realUser?.longestStreak ?? 0,
    totalXp: realUser?.totalXp ?? 0,
    level: realUser?.level ?? 1,
    // XP within current level: each level needs 1000 XP
    levelProgress: realUser
      ? Math.round(((realUser.totalXp ?? 0) % 1000) / 10)
      : 0,
    xpToNextLevel: realUser
      ? 1000 - ((realUser.totalXp ?? 0) % 1000)
      : 1000,
    todayXp: propTodayXp,
    weekXp: propWeekXp,
    accuracy: propAccuracy,
    wordsLearned: propWordsLearned,
    questionsAnswered: propQuestionsAnswered,
    practiceMinutes: 0,
    badges: realUser?.badges?.length ?? 0,
    rank: propUserRank,
  };

  const QUICK_ACTIONS = buildQuickActions(stats.currentDay);
  const motivationalMessage = getMotivationalMessage(stats.streak, stats.completedDays);
  const overallProgressPct = Math.round((stats.completedDays / 75) * 100);

  // ─── Day filters ──────────────────────────────────────────────
  const filteredDays = initialDays.filter((day) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return completedDayNumbers.has(day.dayNumber);
    if (activeFilter === "in-progress") return inProgressDayNumbers.has(day.dayNumber);
    if (activeFilter === "locked") return false;
    return true;
  });

  // ─── Streak history for heatmap ───────────────────────────────
  const streakHistory = (realUser?.streakHistory ?? []).map((h) => ({
    date: h.date,
    completed: h.completed,
    xpEarned: h.xpEarned,
  }));

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 max-w-7xl mx-auto pb-8"
    >
      {/* ── Welcome Hero Card ─────────────────────────────────── */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-3xl border border-primary/20"
      >
        {/* Dark layered background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(238 84% 6%) 0%, hsl(224 30% 8%) 55%, hsl(270 60% 7%) 100%)",
          }}
        />

        {/* Ambient glow orbs */}
        <motion.div
          className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-600/15 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />

        {/* Grid dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] grid-dots" />

        <div className="relative p-5 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Left: greeting + progress */}
            <div className="flex-1 min-w-0">
              {/* Day badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 300 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 mb-4 backdrop-blur-sm"
              >
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-bold text-primary tracking-wide">
                  DAY {stats.currentDay} OF 75
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight"
              >
                {realUser?.firstName ? (
                  <>
                    Welcome back,{" "}
                    <span className="gradient-text">{realUser.firstName}</span>! 👋
                  </>
                ) : (
                  <>Welcome back! 👋</>
                )}
              </motion.h1>

              {/* Motivational message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/65 mt-2 text-sm md:text-base max-w-lg"
              >
                {motivationalMessage}
              </motion.p>

              {/* Overall progress bar */}
              <div className="mt-5 space-y-1.5 max-w-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40 font-medium">Overall Progress</span>
                  <span className="text-xs font-bold text-primary">
                    {overallProgressPct}% Complete
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-violet-400 to-purple-400"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.max(1.5, overallProgressPct)}%`,
                    }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                    style={{ boxShadow: "0 0 12px hsl(var(--primary)/0.5)" }}
                  />
                </div>
                <p className="text-xs text-white/35">
                  {stats.completedDays} / 75 days completed &bull;{" "}
                  {75 - stats.completedDays} days remaining
                </p>
              </div>

              {/* XP level progress */}
              <div className="mt-4 space-y-1.5 max-w-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40 font-medium">
                    Level {stats.level} Progress
                  </span>
                  <span className="text-xs font-bold text-amber-400">
                    {stats.xpToNextLevel} XP to Level {stats.level + 1}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(1.5, stats.levelProgress)}%` }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
                    style={{ boxShadow: "0 0 8px rgba(251,191,36,0.5)" }}
                  />
                </div>
              </div>

              {/* Continue Learning CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-5"
              >
                <Link
                  href={`/day/${stats.currentDay}`}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-glow-brand hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Rocket className="h-4 w-4" />
                  Continue Day {stats.currentDay}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right: stat pills */}
            <div className="flex flex-row lg:flex-col gap-3 shrink-0 flex-wrap">
              {/* Streak */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex items-center gap-3 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 backdrop-blur-sm min-w-[100px]"
              >
                <Flame className="h-6 w-6 text-orange-400 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-black text-white leading-none tabular-nums">
                    {stats.streak}
                  </p>
                  <p className="text-[10px] text-white/50 mt-0.5 font-medium">Day Streak</p>
                </div>
              </motion.div>

              {/* Level */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.45 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 backdrop-blur-sm min-w-[100px]"
              >
                <Star className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-black text-white leading-none tabular-nums">
                    {stats.level}
                  </p>
                  <p className="text-[10px] text-white/50 mt-0.5 font-medium">Level</p>
                </div>
              </motion.div>

              {/* Total XP */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.49, duration: 0.45 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 backdrop-blur-sm min-w-[100px]"
              >
                <Zap className="h-6 w-6 text-amber-400 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-black text-white leading-none tabular-nums">
                    {stats.totalXp.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-white/50 mt-0.5 font-medium">Total XP</p>
                </div>
              </motion.div>

              {/* Rank */}
              {stats.rank > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.56, duration: 0.45 }}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 backdrop-blur-sm min-w-[100px]"
                >
                  <Trophy className="h-6 w-6 text-emerald-400 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-2xl font-black text-white leading-none tabular-nums">
                      #{stats.rank}
                    </p>
                    <p className="text-[10px] text-white/50 mt-0.5 font-medium">Rank</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Quick Actions ─────────────────────────────────────── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15">
            <Sparkles className="h-4 w-4 text-amber-400" />
          </div>
          <h2 className="text-base font-bold">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {QUICK_ACTIONS.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={action.href}
                className={cn(
                  "relative flex flex-col gap-3 rounded-2xl p-4 text-white overflow-hidden h-full",
                  `bg-gradient-to-br ${action.color}`
                )}
              >
                {/* Shine overlay */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 100% 0%, white 0%, transparent 55%)",
                  }}
                />

                {/* Badge */}
                <span className="absolute top-3 right-3 rounded-full bg-black/20 border border-white/20 px-2 py-0.5 text-[10px] font-bold">
                  {action.badge}
                </span>

                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 border border-white/20">
                  <action.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-bold text-sm leading-tight">{action.label}</p>
                  <p className="text-[11px] text-white/75 mt-0.5">{action.description}</p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-3.5 w-3.5 opacity-60 self-end" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Stats Grid ───────────────────────────────────────── */}
      <motion.div variants={itemVariants}>
        <DashboardStats stats={stats} />
      </motion.div>

      {/* ── Charts Row ───────────────────────────────────────── */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {/* Weekly XP Chart */}
        <div className="lg:col-span-2">
          <DashboardChart weeklyData={weeklyXpChart} />
        </div>

        {/* Streak Calendar */}
        <div>
          <DashboardStreak
            streakDays={stats.streak}
            longestStreak={stats.longestStreak}
            streakHistory={streakHistory}
          />
        </div>
      </motion.div>

      {/* ── Recent Activity Feed ─────────────────────────────── */}
      {recentActivity.length > 0 && (
        <motion.div variants={itemVariants}>
          <div className="card-base rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                Recent Activity
              </h3>
              <span className="text-xs text-muted-foreground">Last {recentActivity.length} sessions</span>
            </div>

            <div className="space-y-2">
              {recentActivity.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                  className="flex items-center gap-3 rounded-xl p-3 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  {/* Activity icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    {item.activity.includes("PRACTICE") || item.activity.includes("TEST") ? (
                      <Brain className="h-4 w-4 text-primary" />
                    ) : item.activity.includes("VOCAB") ? (
                      <BookMarked className="h-4 w-4 text-amber-400" />
                    ) : item.activity.includes("SPEECH") ? (
                      <Mic className="h-4 w-4 text-pink-400" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    )}
                  </div>

                  {/* Activity info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {formatActivity(item.activity)}
                    </p>
                    {item.dayId && (
                      <p className="text-xs text-muted-foreground">
                        {timeAgo(item.createdAt)}
                      </p>
                    )}
                    {!item.dayId && (
                      <p className="text-xs text-muted-foreground">
                        {timeAgo(item.createdAt)}
                      </p>
                    )}
                  </div>

                  {/* XP earned */}
                  {item.xp > 0 && (
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/10 rounded-full px-2.5 py-1 shrink-0">
                      <Zap className="h-3 w-3" />
                      +{item.xp} XP
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ── 75 Days Grid ─────────────────────────────────────── */}
      <motion.div variants={itemVariants}>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div>
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              Your 75-Day Journey
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {stats.completedDays} of 75 days completed &bull;{" "}
              {75 - stats.completedDays} days remaining
            </p>
          </div>

          {/* Progress % */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-2xl font-bold text-primary tabular-nums">
                {overallProgressPct}%
              </p>
              <p className="text-xs text-muted-foreground">Complete</p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {(
            [
              { key: "all", label: "All Days", count: 75 },
              { key: "completed", label: "Completed", count: stats.completedDays },
              {
                key: "in-progress",
                label: "In Progress",
                count: inProgressDayNumbers.size,
              },
            ] as const
          ).map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                activeFilter === filter.key
                  ? "bg-primary text-white shadow-glow-brand"
                  : "border border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {filter.label}
              <span
                className={cn(
                  "ml-1.5 rounded-full px-1.5 py-0.5 text-xs",
                  activeFilter === filter.key
                    ? "bg-white/20"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Days grid — responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredDays.map((day, i) => (
            <motion.div
              key={`day-${day.dayNumber}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.min(i * 0.025, 0.6),
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <DayCard
                dayNumber={day.dayNumber}
                title={day.title}
                description={day.description || ""}
                emoji={day.emoji || "📚"}
                isRevision={day.isRevision || false}
                isMockTest={day.isMockTest || false}
                topicsCount={day._count?.topics || 0}
                currentDay={stats.currentDay}
                isCompleted={completedDayNumbers.has(day.dayNumber)}
                isInProgress={inProgressDayNumbers.has(day.dayNumber)}
                progressPercent={(() => {
                  const progress = progressByDay.get(day.dayNumber);
                  if (!progress) return 0;
                  if (progress.status === "COMPLETED") return 100;
                  if (!progress.topicsTotal) return 0;
                  return Math.min(
                    100,
                    Math.round(
                      ((progress.topicsCompleted ?? 0) / progress.topicsTotal) * 100
                    )
                  );
                })()}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty state for filtered view */}
        {filteredDays.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3 py-12 rounded-2xl border border-dashed border-border"
          >
            <div className="text-4xl">📚</div>
            <p className="text-muted-foreground text-sm">
              {activeFilter === "completed"
                ? "No completed days yet — start learning!"
                : activeFilter === "in-progress"
                ? "No days in progress. Start Day 1!"
                : "No days found."}
            </p>
            <Link
              href={`/day/${stats.currentDay}`}
              className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            >
              Go to Day {stats.currentDay} <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        )}
      </motion.div>

      {/* ── Leaderboard Preview ───────────────────────────────── */}
      <motion.div variants={itemVariants}>
        <div className="card-base rounded-2xl">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15">
                <Trophy className="h-4 w-4 text-amber-400" />
              </div>
              Top Learners
            </h3>
            <Link
              href="/leaderboard"
              className="text-sm text-primary hover:underline flex items-center gap-1 group"
            >
              See all{" "}
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </Link>
          </div>

          <div className="space-y-2">
            {initialLeaderboard.map((user, i) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                whileHover={{ x: 4, backgroundColor: "hsl(var(--accent))" }}
                className="flex items-center gap-3 rounded-xl p-3 transition-colors"
              >
                {/* Rank badge */}
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    i === 0 && "bg-amber-400/20 text-amber-500 ring-1 ring-amber-400/40",
                    i === 1 && "bg-slate-400/20 text-slate-400 ring-1 ring-slate-400/30",
                    i === 2 && "bg-amber-700/20 text-amber-700 ring-1 ring-amber-700/30",
                    i > 2 && "bg-muted text-muted-foreground"
                  )}
                >
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                </span>

                {/* Avatar */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center
                             rounded-full bg-gradient-to-br from-primary to-purple-500
                             text-white text-sm font-bold ring-2 ring-primary/20"
                >
                  {(user.firstName || "U").charAt(0).toUpperCase()}
                </div>

                {/* Name & info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {[user.firstName, user.lastName].filter(Boolean).join(" ") || "Anonymous"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Level {user.level}
                    {user.streak > 0 && ` • 🔥 ${user.streak} day streak`}
                    {user.currentDay && ` • Day ${user.currentDay}`}
                  </p>
                </div>

                {/* XP */}
                <div className="flex items-center gap-1 text-sm font-semibold text-amber-500 bg-amber-500/10 rounded-full px-2.5 py-1 shrink-0">
                  <Zap className="h-3.5 w-3.5" />
                  {user.totalXp.toLocaleString()}
                </div>
              </motion.div>
            ))}

            {initialLeaderboard.length === 0 && (
              <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground text-center">
                No leaderboard activity yet. Complete a lesson to appear here!
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
