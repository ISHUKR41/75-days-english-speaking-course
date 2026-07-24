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
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Flame,
  Lock,
  Mic,
  Play,
  Star,
  Target,
  Trophy,
  TrendingUp,
  Zap,
  Calendar,
  Award,
  BarChart3,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardStreak } from "@/components/dashboard/dashboard-streak";
import { DashboardChart } from "@/components/dashboard/dashboard-chart";
import { DayCard } from "@/components/dashboard/day-card";
import { getDayColor, cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────
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
  }>;
  todayXp?: number;
  weekXp?: number;
  accuracy?: number;
  questionsAnswered?: number;
  wordsLearned?: number;
}
// Build dynamic quick actions based on user's current day
function buildQuickActions(currentDay: number) {
  return [
    {
      icon: Play,
      label: `Continue Day ${currentDay}`,
      description: currentDay === 1 ? "Basic of English" : currentDay === 2 ? "Self Introduction" : `Day ${currentDay} Lesson`,
      href: `/day/${currentDay}`,
      color: "from-brand-500 to-purple-500",
      glow: "shadow-glow-brand",
      badge: "Current",
    },
    {
      icon: BookMarked,
      label: "Vocabulary Bank",
      description: "Browse all words",
      href: "/vocabulary",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-glow-gold",
      badge: "200+ words",
    },
    {
      icon: Mic,
      label: "Speaking Practice",
      description: "Practice out loud",
      href: "/speaking",
      color: "from-pink-500 to-rose-500",
      glow: "shadow-glow-rose",
      badge: "NEW",
    },
    {
      icon: Target,
      label: "Quick Test",
      description: "Test your knowledge",
      href: "/mock-test",
      color: "from-emerald-500 to-cyan-500",
      glow: "shadow-glow-emerald",
      badge: "50 Qs",
    },
  ];
}

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function DashboardClient({
  userId,
  initialUser,
  initialDays,
  initialLeaderboard,
  todayXp: propTodayXp = 0,
  weekXp: propWeekXp = 0,
  accuracy: propAccuracy = 0,
  questionsAnswered: propQuestionsAnswered = 0,
  wordsLearned: propWordsLearned = 0,
}: DashboardClientProps) {
  // Active tab for day list filter
  const [activeFilter, setActiveFilter] = useState<
    "all" | "in-progress" | "completed" | "locked"
  >("all");

  // Use only the user record loaded by the server component.
  // Missing data stays an honest empty state instead of becoming fake data.
  const realUser = initialUser as {
    firstName?: string; lastName?: string;
    currentDay?: number; totalXp?: number; level?: number;
    streak?: number; longestStreak?: number; totalCoins?: number;
    progress?: Array<{
      status?: string;
      topicsCompleted?: number;
      topicsTotal?: number;
      day?: { dayNumber: number };
    }>;
    badges?: Array<unknown>;
  } | null;

  const progressByDay = new Map(
    (realUser?.progress ?? [])
      .filter((progress) => progress.day?.dayNumber)
      .map((progress) => [progress.day!.dayNumber, progress])
  );
  const completedDayNumbers = new Set(
    (realUser?.progress ?? [])
      .filter((progress) => progress.status === "COMPLETED" && progress.day?.dayNumber)
      .map((progress) => progress.day!.dayNumber)
  );
  const inProgressDayNumbers = new Set(
    (realUser?.progress ?? [])
      .filter(
        (progress) =>
          progress.status === "IN_PROGRESS" &&
          progress.day?.dayNumber &&
          !completedDayNumbers.has(progress.day!.dayNumber)
      )
      .map((progress) => progress.day!.dayNumber)
  );

  const stats = {
    currentDay: realUser?.currentDay ?? 1,
    completedDays: completedDayNumbers.size,
    streak: realUser?.streak ?? 0,
    totalXp: realUser?.totalXp ?? 0,
    level: realUser?.level ?? 1,
    levelProgress: realUser ? ((realUser.totalXp ?? 0) % 1000) / 10 : 0,
    todayXp: propTodayXp,
    weekXp: propWeekXp,
    accuracy: propAccuracy,
    wordsLearned: propWordsLearned,
    questionsAnswered: propQuestionsAnswered,
    practiceMinutes: 0, // Not tracked yet
    badges: realUser?.badges?.length ?? 0,
    rank: 0, // Computed separately if needed
  };

  // Build dynamic quick actions based on current day
  const QUICK_ACTIONS = buildQuickActions(stats.currentDay);

  // Filter days based on active tab
  const filteredDays = initialDays.filter((day) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return completedDayNumbers.has(day.dayNumber);
    if (activeFilter === "in-progress") return inProgressDayNumbers.has(day.dayNumber);
    if (activeFilter === "locked") return false;
    return true;
  });

  // The database is the single source for the day grid.
  const daysToShow = filteredDays;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 max-w-7xl mx-auto"
    >
      {/* ── Welcome Header ── */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-3xl border border-primary/20"
      >
        {/* Layered dark background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(238 84% 6%) 0%, hsl(224 30% 8%) 55%, hsl(270 60% 7%) 100%)",
          }}
        />

        {/* Animated ambient orbs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-600/15 blur-[80px] animate-pulse"
          style={{ animationDelay: "1.4s" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[70px] animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />

        {/* Grid dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] grid-dots" />

        <div className="relative p-6 md:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="flex-1 min-w-0">
              {/* Day badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 mb-4 backdrop-blur-sm"
              >
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-bold text-primary tracking-wide">
                  DAY {stats.currentDay} OF 75
                </span>
              </motion.div>

              {/* Greeting */}
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {realUser?.firstName ? (
                  <>Welcome back, <span className="gradient-text">{realUser.firstName}</span>! 👋</>
                ) : (
                  <>Welcome back! 👋</>
                )}
              </h1>
              <p className="text-white/60 mt-2 text-sm md:text-base max-w-lg">
                You&apos;re on{" "}
                <span className="font-bold text-primary">Day {stats.currentDay}</span>{" "}
                of your{" "}
                <span className="font-semibold text-white/80">75-day journey</span>.{" "}
                {stats.streak >= 7
                  ? "🔥 Amazing streak — keep it going!"
                  : stats.completedDays > 0
                  ? "Great progress — don't stop now!"
                  : "Your journey starts here. Let's go!"}
              </p>

              {/* Progress bar */}
              <div className="mt-5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40 font-medium">Overall Progress</span>
                  <span className="text-xs font-bold text-primary">
                    {Math.round((stats.completedDays / 75) * 100)}% Complete
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-violet-400 to-purple-400"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.max(1.5, Math.round((stats.completedDays / 75) * 100))}%`,
                    }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                    style={{ boxShadow: "0 0 12px hsl(var(--primary)/0.5)" }}
                  />
                </div>
                <p className="text-xs text-white/35">
                  {stats.completedDays} / 75 days completed
                </p>
              </div>
            </div>

            {/* Stats pills */}
            <div className="flex gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              {/* Streak */}
              <div className="flex items-center gap-3 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-5 py-4 backdrop-blur-sm min-w-[105px]">
                <Flame
                  className="h-7 w-7 text-orange-400 animate-flicker shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-3xl font-black text-white leading-none tabular-nums">
                    {stats.streak}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5 font-medium">Day Streak</p>
                </div>
              </div>
              {/* Level */}
              <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 backdrop-blur-sm min-w-[95px]">
                <Star className="h-7 w-7 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-3xl font-black text-white leading-none tabular-nums">
                    {stats.level}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5 font-medium">Level</p>
                </div>
              </div>
              {/* Total XP */}
              <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 backdrop-blur-sm min-w-[95px]">
                <Zap className="h-7 w-7 text-amber-400 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-3xl font-black text-white leading-none tabular-nums">
                    {stats.totalXp}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5 font-medium">Total XP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Quick Actions ── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="h-5 w-5 text-gold-400" />
          <h2 className="text-lg font-bold">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((action) => (
            <motion.div
              key={action.label}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="card-shine"
            >
              <Link
                href={action.href}
                className={cn(
                  "relative flex flex-col gap-4 rounded-2xl p-5 text-white overflow-hidden h-full",
                  `bg-gradient-to-br ${action.color}`,
                  action.glow
                )}
              >
                {/* Radial shine overlay */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 100% 0%, white 0%, transparent 55%)",
                  }}
                />
                {/* Bottom left dark for depth */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  }}
                />

                {/* Badge */}
                <span className="absolute top-3.5 right-3.5 rounded-full bg-black/20 border border-white/20 px-2.5 py-0.5 text-xs font-bold backdrop-blur-sm">
                  {action.badge}
                </span>

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 border border-white/20 backdrop-blur-sm">
                  <action.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-bold text-base leading-tight">{action.label}</p>
                  <p className="text-xs text-white/75 mt-1">{action.description}</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-end">
                  <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Stats Grid ── */}
      <motion.div variants={itemVariants}>
        <DashboardStats stats={stats} />
      </motion.div>

      {/* ── Charts Row ── */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Weekly XP Chart */}
        <div className="lg:col-span-2">
          <DashboardChart />
        </div>

        {/* Streak Calendar */}
        <div>
          <DashboardStreak streakDays={stats.streak} />
        </div>
      </motion.div>

      {/* ── XP & Level Progress ── */}
      <motion.div variants={itemVariants}>
        <div className="card-base rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Level {stats.level}</h3>
                <p className="text-xs text-muted-foreground">
                  {stats.totalXp} XP total
                </p>
              </div>
            </div>
            <span className="badge-primary">
              +{stats.todayXp} XP today
            </span>
          </div>

          {/* Level progress bar — animated gradient */}
          <div className="h-3 rounded-full bg-muted/60 overflow-hidden">
            <motion.div
              className="h-full xp-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(2, stats.levelProgress)}%` }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground font-medium">
              Lv. {stats.level}
            </span>
            <span className="text-xs font-bold text-primary">
              {stats.levelProgress}% → Lv. {stats.level + 1}
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── 75 Days Grid ── */}
      <motion.div variants={itemVariants}>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Your 75-Day Journey
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {stats.completedDays} of 75 days completed •{" "}
              {75 - stats.completedDays} days remaining
            </p>
          </div>

          {/* Progress ring */}
          <div className="flex items-center gap-3">
            {/* Overall progress */}
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">
                {Math.round((stats.completedDays / 75) * 100)}%
              </p>
              <p className="text-xs text-muted-foreground">Complete</p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {(
            [
              { key: "all", label: "All Days", count: 75 },
              { key: "completed", label: "Completed", count: stats.completedDays },
              { key: "in-progress", label: "In Progress", count: inProgressDayNumbers.size },
              { key: "locked", label: "Locked", count: 0 },
            ] as const
          ).map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
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
            </button>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {daysToShow.map((day, i) => (
            <motion.div
              key={`day-${day.dayNumber}`}
              variants={itemVariants}
              custom={i}
              transition={{ delay: i * 0.03 }}
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
                    Math.round(((progress.topicsCompleted ?? 0) / progress.topicsTotal) * 100)
                  );
                })()}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Leaderboard Preview ── */}
      <motion.div variants={itemVariants}>
        <div className="card-base rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Trophy className="h-5 w-5 text-gold-400" />
              Top Learners
            </h3>
            <Link
              href="/leaderboard"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Leaderboard list */}
          <div className="space-y-3">
            {initialLeaderboard.map((user, i) => (
              <div
                key={user.id}
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-accent transition-colors"
              >
                {/* Rank */}
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    i === 0 && "bg-gold-400/20 text-gold-500",
                    i === 1 && "bg-slate-400/20 text-slate-400",
                    i === 2 && "bg-amber-700/20 text-amber-700",
                    i > 2 && "bg-muted text-muted-foreground"
                  )}
                >
                  {i + 1}
                </span>

                {/* Avatar */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center 
                             rounded-full bg-gradient-to-br from-primary to-purple-500
                             text-white text-sm font-bold"
                >
                  {(user.firstName || "U").charAt(0)}
                </div>

                {/* Name & XP */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Level {user.level} • {user.streak} day streak
                  </p>
                </div>

                {/* XP */}
                <div className="flex items-center gap-1 text-sm font-semibold text-gold-500">
                  <Zap className="h-3.5 w-3.5" />
                  {user.totalXp.toLocaleString()}
                </div>
              </div>
            ))}
            {initialLeaderboard.length === 0 && (
              <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                No leaderboard activity yet. Complete a lesson to appear here.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
