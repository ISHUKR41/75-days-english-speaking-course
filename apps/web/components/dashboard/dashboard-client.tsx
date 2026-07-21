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
}: DashboardClientProps) {
  // Active tab for day list filter
  const [activeFilter, setActiveFilter] = useState<
    "all" | "in-progress" | "completed" | "locked"
  >("all");

  // Use real data from database — fall back to mock only when null
  // initialUser is the Prisma User model from the server component
  const realUser = initialUser as {
    firstName?: string; lastName?: string;
    currentDay?: number; totalXp?: number; level?: number;
    streak?: number; longestStreak?: number; totalCoins?: number;
    progress?: Array<{ status?: string }>;
    badges?: Array<unknown>;
  } | null;

  const stats = {
    currentDay: realUser?.currentDay ?? 1,
    completedDays: realUser?.currentDay ? Math.max(0, realUser.currentDay - 1) : 0,
    streak: realUser?.streak ?? 0,
    totalXp: realUser?.totalXp ?? 0,
    level: realUser?.level ?? 1,
    levelProgress: realUser ? ((realUser.totalXp ?? 0) % 1000) / 10 : 0,
    todayXp: 0,
    weekXp: 0,
    accuracy: 0,
    wordsLearned: 0,
    questionsAnswered: 0,
    practiceMinutes: 0,
    badges: realUser?.badges?.length ?? 0,
    rank: 0,
  };

  // Build dynamic quick actions based on current day
  const QUICK_ACTIONS = buildQuickActions(stats.currentDay);

  // Filter days based on active tab
  const filteredDays = initialDays.filter((day) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return day.dayNumber < stats.currentDay;
    if (activeFilter === "in-progress") return day.dayNumber === stats.currentDay;
    if (activeFilter === "locked") return day.dayNumber > stats.currentDay;
    return true;
  });

  // Use initial days or generate placeholder data
  const daysToShow =
    initialDays.length > 0
      ? filteredDays
      : generatePlaceholderDays().filter((day) => {
          if (activeFilter === "all") return true;
          if (activeFilter === "completed") return day.dayNumber < stats.currentDay;
          if (activeFilter === "in-progress") return day.dayNumber === stats.currentDay;
          if (activeFilter === "locked") return day.dayNumber > stats.currentDay;
          return true;
        });

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
        className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 md:p-8"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)/0.12) 0%, hsl(var(--card)) 50%, hsl(238 60% 10% / 0.5) 100%)",
        }}
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Day badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-3">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">
                Day {stats.currentDay} of 75
              </span>
            </div>
            {/* Greeting with user name */}
            <h1 className="text-2xl md:text-3xl font-black text-foreground">
              {realUser?.firstName
                ? `Welcome back, ${realUser.firstName}! 👋`
                : "Welcome back! 👋"}
            </h1>
            <p className="text-muted-foreground mt-1.5 text-sm md:text-base">
              You&apos;re on{" "}
              <span className="font-bold text-primary">Day {stats.currentDay}</span>{" "}
              of your{" "}
              <span className="font-semibold text-foreground">75-day journey</span>.{" "}
              {stats.streak >= 7
                ? "🔥 Amazing streak — keep it going!"
                : stats.completedDays > 0
                ? "Great progress — don't stop now!"
                : "Your journey starts here. Let's go!"}
            </p>

            {/* Mini progress bar */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 max-w-sm h-2 rounded-full bg-muted/60 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-violet-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(1, Math.round((stats.completedDays / 75) * 100))}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </div>
              <span className="text-xs font-bold text-primary whitespace-nowrap">
                {Math.round((stats.completedDays / 75) * 100)}% Complete
              </span>
            </div>
          </div>

          {/* Stats pills */}
          <div className="flex gap-3 flex-wrap sm:flex-nowrap shrink-0">
            {/* Streak */}
            <div className="flex items-center gap-2 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 min-w-[90px]">
              <Flame className="h-6 w-6 text-orange-500 animate-flicker shrink-0" aria-hidden="true" />
              <div>
                <p className="text-2xl font-black text-foreground leading-none">{stats.streak}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Day Streak</p>
              </div>
            </div>
            {/* Level */}
            <div className="flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 min-w-[80px]">
              <Star className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
              <div>
                <p className="text-2xl font-black text-foreground leading-none">{stats.level}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Level</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Quick Actions ── */}
      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gold-400" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((action, i) => (
            <motion.div
              key={action.label}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={action.href}
                className={cn(
                  "relative flex flex-col gap-3 rounded-2xl p-5 text-white overflow-hidden",
                  `bg-gradient-to-br ${action.color}`,
                  action.glow
                )}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 100% 0%, white 0%, transparent 60%)",
                  }}
                />

                {/* Badge */}
                <span
                  className="absolute top-3 right-3 rounded-full bg-white/20 
                             px-2 py-0.5 text-xs font-semibold backdrop-blur-sm"
                >
                  {action.badge}
                </span>

                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                  <action.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-base">{action.label}</p>
                  <p className="text-xs text-white/80 mt-0.5">
                    {action.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 opacity-70" />
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

          {/* Level progress bar */}
          <div className="progress-bar h-3">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${stats.levelProgress}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              Level {stats.level}
            </span>
            <span className="text-xs text-muted-foreground">
              {stats.levelProgress}% to Level {stats.level + 1}
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
              { key: "in-progress", label: "In Progress", count: 1 },
              { key: "locked", label: "Locked", count: 74 - stats.completedDays },
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
                completedDays={stats.completedDays}
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
            {(initialLeaderboard.length > 0
              ? initialLeaderboard
              : MOCK_LEADERBOARD
            ).map((user, i) => (
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Generate placeholder 75 days
function generatePlaceholderDays() {
  const TOPICS = [
    "Basic of English", "Self Introduction", "Imperative Sentence",
    "Be Verb", "Demonstrative Pronoun", "Has / Have", "Had", "Will Have",
    "Use of There", "Revision + Practice", "Use of Want", "Use of Wanted",
    "Use of Let", "Use of Let's", "Would Like To", "Can", "Should", "May",
    "Must", "Revision + Speaking Practice", "Used To", "Could",
    "Should Have", "Must Have", "Could Have", "Would Have", "May Have",
    "Might Have", "Will / Shall", "Would + Ought To + Dare", "Revision",
    "Tenses Part 1", "Tenses Part 2", "Tenses Part 3", "Tenses Part 4",
    "Prepositions Part 1", "Prepositions Part 2", "Has To / Have To",
    "Had To / Will Have To", "Make / Get", "Going To", "About To",
    "Want To / Wanted To", "Need To / Needed To", "Fond Of", "Able To",
    "Conjunctions", "WH Words", "Passive Voice Part 1", "Passive Voice Part 2",
    "Advance Level Sentences Part 1", "Advance Level Sentences Part 2",
    "Verb List", "Idioms, Phrases & Proverbs", "Important Vocabulary",
    "Miscellaneous Vocabulary", "Stationery Vocabulary",
    "Foods Vocabulary & Tastes", "Relation & Weather Vocabulary",
    "Professions & Occupations", "Buildings, Worms & Insects",
    "Flowers & Fruits Vocabulary", "Maths Vocabulary",
    "Body & Diseases Vocabulary", "Industry Vocabulary",
    "Colours & Judiciary", "Birds & Astrology",
    "Factory & Sports + Sound", "Application Writing", "Letter Writing",
    "E-mail Writing", "Paragraph Writing",
    "Notice Writing + Writing Skills", "Grammar + Vocabulary + Speaking",
    "Complete Mock Test + Final Revision",
  ];

  const EMOJIS = ["📚", "👋", "💬", "✅", "👆", "✨", "📖", "🔮", "📍", "🔄",
    "🎯", "⏳", "🚀", "🌟", "💫", "🎭", "🤔", "🌈", "⚡", "🎤",
    "🕰️", "💡", "🏆", "💎", "🌺", "🎪", "🔑", "❓", "⏰", "🎲",
    "📝", "⏱️", "📊", "🌍", "🎓", "📌", "🔗", "🛠️", "🔧", "🔨",
    "🎯", "🚀", "💬", "🎭", "❤️", "💪", "🔄", "❓", "🗣️", "🎤",
    "🚀", "🌟", "📋", "💡", "📚", "🌈", "📎", "🍎", "🌤️", "👔",
    "🏗️", "🌸", "➕", "💊", "🏭", "🎨", "🦅", "⚽", "✍️", "📬",
    "📧", "📝", "📢", "📚", "✅"];

  return TOPICS.map((title, i) => ({
    dayNumber: i + 1,
    title,
    description: `Master ${title.toLowerCase()} with 200+ vocabulary words and practice questions`,
    emoji: EMOJIS[i] || "📚",
    isRevision: title.includes("Revision"),
    isMockTest: title.includes("Mock Test"),
    _count: { topics: ((i * 7 + 3) % 4) + 2 }, // Deterministic: 2-5 topics
  }));
}

// Mock leaderboard data
const MOCK_LEADERBOARD = [
  { id: "1", firstName: "Rahul", lastName: "Sharma", imageUrl: null, totalXp: 8450, level: 12, streak: 21 },
  { id: "2", firstName: "Priya", lastName: "Singh", imageUrl: null, totalXp: 7820, level: 11, streak: 18 },
  { id: "3", firstName: "Amir", lastName: "Khan", imageUrl: null, totalXp: 6900, level: 10, streak: 15 },
  { id: "4", firstName: "Anjali", lastName: "Patel", imageUrl: null, totalXp: 5430, level: 8, streak: 12 },
  { id: "5", firstName: "Dev", lastName: "Kumar", imageUrl: null, totalXp: 4210, level: 7, streak: 9 },
];
