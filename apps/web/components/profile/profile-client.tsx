"use client";
// ============================================================
// Profile Client — Beautiful custom profile page
// Shows user stats, progress, badges, recent activity
// Works with dev passthrough AND real Clerk auth
// ============================================================

import { motion } from "framer-motion";
import {
  Trophy, Zap, Flame, Star, BookOpen, Target,
  Calendar, CheckCircle2, TrendingUp, Award,
  User, Mail, Clock, BarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────
interface ProfileClientProps {
  profileData: {
    user: {
      id: string;
      clerkId: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      username: string | null;
      imageUrl: string | null;
      currentDay: number;
      totalXp: number;
      totalCoins: number;
      level: number;
      streak: number;
      longestStreak: number;
      lastActiveAt: Date | null;
      theme: string;
      language: string;
      soundEnabled: boolean;
      createdAt: Date;
    };
    recentScores: {
      id: string;
      activity: string;
      points: number;
      xp: number;
      createdAt: Date;
    }[];
    dayProgress: {
      id: string;
      dayNumber: number;
      status: string;
      score: number | null;
    }[];
    totalDaysCompleted: number;
    totalQuestionsAnswered: number;
  } | null;
}

// ─── Stat Card ────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  color,
  bg,
}: {
  icon: any;
  label: string;
  value: string | number;
  color: string;
  bg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4"
    >
      <div className={cn("rounded-xl p-3", bg)}>
        <Icon className={cn("h-5 w-5", color)} />
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}

// ─── Badge Card ────────────────────────────────────────────────
function BadgeCard({ emoji, label, earned }: { emoji: string; label: string; earned: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border p-3 flex flex-col items-center gap-1 text-center transition-all",
        earned
          ? "border-yellow-500/40 bg-yellow-500/10"
          : "border-border bg-card opacity-40"
      )}
    >
      <span className="text-2xl">{emoji}</span>
      <p className="text-xs font-medium">{label}</p>
      {earned && <span className="text-xs text-yellow-500">Earned!</span>}
    </div>
  );
}

// ─── Level progress bar ────────────────────────────────────────
function LevelProgress({ level, xp }: { level: number; xp: number }) {
  // XP thresholds: Level 1=0-300, Level 2=300-700, Level 3=700-1200, etc.
  const levelThresholds = [0, 300, 700, 1200, 1800, 2500, 3500, 5000];
  const xpForCurrentLevel = levelThresholds[Math.min(level - 1, levelThresholds.length - 1)] || (level - 1) * 500;
  const xpForNextLevel = levelThresholds[Math.min(level, levelThresholds.length - 1)] || level * 500;
  const xpInLevel = Math.max(0, xp - xpForCurrentLevel);
  const xpNeeded = Math.max(1, xpForNextLevel - xpForCurrentLevel);
  const progress = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Level {level}</span>
        <span className="text-muted-foreground">
          {xpInLevel} / {xpNeeded} XP to Level {level + 1}
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
        />
      </div>
      <p className="text-xs text-muted-foreground text-right">{progress}%</p>
    </div>
  );
}

// ─── Activity badge list ───────────────────────────────────────
const AVAILABLE_BADGES = [
  { emoji: "🌟", label: "First Day", condition: (d: number) => d >= 1 },
  { emoji: "🔥", label: "3-Day Streak", condition: (_d: number, s: number) => s >= 3 },
  { emoji: "📚", label: "5 Days Done", condition: (d: number) => d >= 5 },
  { emoji: "⚡", label: "500 XP Club", condition: (_d: number, _s: number, xp: number) => xp >= 500 },
  { emoji: "🏆", label: "Week Warrior", condition: (_d: number, s: number) => s >= 7 },
  { emoji: "💎", label: "10 Days Done", condition: (d: number) => d >= 10 },
  { emoji: "🎯", label: "1000 XP Club", condition: (_d: number, _s: number, xp: number) => xp >= 1000 },
  { emoji: "🚀", label: "Month Master", condition: (d: number) => d >= 30 },
];

// ─── Main Component ────────────────────────────────────────────
export function ProfileClient({ profileData }: ProfileClientProps) {
  // Default/fallback values if no DB data
  const user = profileData?.user;
  const recentScores = profileData?.recentScores || [];
  const dayProgress = profileData?.dayProgress || [];
  const totalDaysCompleted = profileData?.totalDaysCompleted || 0;

  const displayName =
    user
      ? [user.firstName, user.lastName].filter(Boolean).join(" ") ||
        user.username ||
        user.email?.split("@")[0] ||
        "Dev User"
      : "Dev User";

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const stats = {
    xp: user?.totalXp || 350,
    level: user?.level || 2,
    streak: user?.streak || 3,
    longestStreak: user?.longestStreak || 3,
    currentDay: user?.currentDay || 2,
    coins: user?.totalCoins || 0,
  };

  // Calculate which badges are earned
  const earnedBadges = AVAILABLE_BADGES.map((b) => ({
    ...b,
    earned: b.condition(totalDaysCompleted, stats.streak, stats.xp),
  }));

  // Activity label map
  const activityLabels: Record<string, string> = {
    PRACTICE: "Practice Session",
    TEST: "Subtopic Test",
    MOCK_TEST: "Mock Test",
    DAILY_LOGIN: "Daily Login Bonus",
    VOCABULARY: "Vocabulary Study",
    SPEAKING: "Speaking Practice",
    WRITING: "Writing Practice",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ── Header ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-transparent p-6"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="shrink-0">
            {user?.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.imageUrl}
                alt={displayName}
                className="h-20 w-20 rounded-2xl object-cover border-2 border-violet-500/30"
              />
            ) : (
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-violet-500/30">
                {initials}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <h1 className="text-2xl font-bold">{displayName}</h1>
            {user?.email && (
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                <span>{user.email}</span>
              </div>
            )}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>
                Member since{" "}
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-IN", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Recently"}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 border border-violet-500/25 px-3 py-1 text-xs font-medium text-violet-400">
                <Star className="h-3 w-3" />
                Level {stats.level} Learner
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 px-3 py-1 text-xs font-medium text-emerald-400">
                <Flame className="h-3 w-3" />
                {stats.streak} Day Streak
              </span>
            </div>
          </div>

          {/* XP Big Number */}
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-500">{stats.xp.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">Total XP</p>
          </div>
        </div>

        {/* Level Bar */}
        <div className="mt-5">
          <LevelProgress level={stats.level} xp={stats.xp} />
        </div>
      </motion.div>

      {/* ── Stats Grid ────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard
          icon={Flame}
          label="Day Streak"
          value={`${stats.streak}🔥`}
          color="text-orange-400"
          bg="bg-orange-500/10"
        />
        <StatCard
          icon={BookOpen}
          label="Days Completed"
          value={`${totalDaysCompleted}/75`}
          color="text-blue-400"
          bg="bg-blue-500/10"
        />
        <StatCard
          icon={Zap}
          label="Total XP"
          value={stats.xp}
          color="text-yellow-400"
          bg="bg-yellow-500/10"
        />
        <StatCard
          icon={Trophy}
          label="Longest Streak"
          value={`${stats.longestStreak} days`}
          color="text-violet-400"
          bg="bg-violet-500/10"
        />
      </div>

      {/* ── Badges ────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-500" />
          <h2 className="text-lg font-semibold">Achievements</h2>
          <span className="ml-auto text-xs text-muted-foreground">
            {earnedBadges.filter((b) => b.earned).length}/{earnedBadges.length} earned
          </span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {earnedBadges.map((badge) => (
            <BadgeCard
              key={badge.label}
              emoji={badge.emoji}
              label={badge.label}
              earned={badge.earned}
            />
          ))}
        </div>
      </div>

      {/* ── Course Progress ───────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-500" />
          <h2 className="text-lg font-semibold">Course Progress</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Day {stats.currentDay} of 75</span>
            <span className="text-muted-foreground">
              {Math.round((stats.currentDay / 75) * 100)}% complete
            </span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(stats.currentDay / 75) * 100}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
            />
          </div>
        </div>

        {/* Day grid */}
        {dayProgress.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-3">Recent days:</p>
            <div className="flex flex-wrap gap-2">
              {dayProgress.slice(0, 30).map((d) => (
                <div
                  key={d.dayNumber}
                  className={cn(
                    "h-7 w-7 rounded-lg text-xs font-medium flex items-center justify-center",
                    d.status === "COMPLETED"
                      ? "bg-emerald-500 text-white"
                      : d.status === "IN_PROGRESS"
                      ? "bg-yellow-500/20 border border-yellow-500/40 text-yellow-400"
                      : "bg-muted text-muted-foreground"
                  )}
                  title={`Day ${d.dayNumber}: ${d.status}`}
                >
                  {d.dayNumber}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Recent Activity ───────────────────────────────────── */}
      {recentScores.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {recentScores.map((score) => (
              <div
                key={score.id}
                className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-violet-500/15 flex items-center justify-center">
                    <Target className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {activityLabels[score.activity] || score.activity}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(score.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-yellow-500">+{score.xp} XP</p>
                  <p className="text-xs text-muted-foreground">{score.points} pts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Settings Card ─────────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Account Settings</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl bg-muted/50 p-4 space-y-1">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Theme</p>
            <p className="font-medium capitalize">{user?.theme || "dark"}</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-4 space-y-1">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Language</p>
            <p className="font-medium capitalize">{user?.language || "Hindi"}</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-4 space-y-1">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Sound Effects</p>
            <p className="font-medium">{user?.soundEnabled !== false ? "Enabled ✓" : "Disabled"}</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-4 space-y-1">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Last Active</p>
            <p className="font-medium">
              {user?.lastActiveAt
                ? new Date(user.lastActiveAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Today"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
