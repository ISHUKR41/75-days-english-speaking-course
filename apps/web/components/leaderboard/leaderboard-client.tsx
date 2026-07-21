"use client";
// ============================================================
// Leaderboard Client - Top learners with tabs and animations
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, Zap, Crown, Medal, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  totalXp: number;
  level: number;
  streak: number;
  weekXp?: number;
  monthXp?: number;
}

interface LeaderboardClientProps {
  users: LeaderboardUser[];
  currentUserId: string;
  currentUserRank: number;
}

const TABS = [
  { key: "all", label: "All Time" },
  { key: "week", label: "This Week" },
  { key: "month", label: "This Month" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function LeaderboardClient({
  users,
  currentUserId,
  currentUserRank,
}: LeaderboardClientProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  // Sort by relevant metric based on tab
  const sortedUsers = [...users].sort((a, b) => {
    if (activeTab === "week") return (b.weekXp || 0) - (a.weekXp || 0);
    if (activeTab === "month") return (b.monthXp || 0) - (a.monthXp || 0);
    return b.totalXp - a.totalXp;
  });

  const getXpDisplay = (user: LeaderboardUser) => {
    if (activeTab === "week") return user.weekXp || 0;
    if (activeTab === "month") return user.monthXp || 0;
    return user.totalXp;
  };

  const currentUserInList = sortedUsers.find((u) => u.id === currentUserId);
  const currentUserIndexInList = sortedUsers.findIndex((u) => u.id === currentUserId);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Premium header */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(40 80% 5%) 0%, hsl(224 30% 8%) 60%, hsl(35 70% 6%) 100%)",
          }}
        />
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber-500/20 blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-orange-500/15 blur-[50px]" />
        <div className="absolute inset-0 grid-dots opacity-[0.04]" />
        <div className="relative p-6 md:p-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-500/30 mb-4">
            <Trophy className="h-7 w-7 text-amber-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white">Leaderboard</h1>
          <p className="text-white/60 mt-1.5">
            See how you rank among all learners
          </p>
        </div>
      </div>

      {/* Current user rank card */}
      {currentUserInList && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-5 flex items-center gap-4"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] grid-dots" />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30 text-primary font-black text-lg">
            #{currentUserIndexInList + 1}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-foreground">Your Rank</p>
            <p className="text-sm text-muted-foreground truncate">
              {currentUserInList.firstName} {currentUserInList.lastName} •
              Level {currentUserInList.level}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-black text-primary text-lg">
              {getXpDisplay(currentUserInList).toLocaleString()} XP
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
              <Flame className="h-3 w-3 text-orange-400" />
              {currentUserInList.streak} day streak
            </p>
          </div>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="flex rounded-xl border border-border overflow-hidden">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-all",
              activeTab === tab.key
                ? "bg-primary text-white"
                : "text-muted-foreground hover:bg-accent"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Top 3 podium */}
      {sortedUsers.length >= 3 && (
        <div className="flex items-end justify-center gap-4 py-4">
          {/* 2nd place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-slate-400 to-slate-300 text-white text-lg font-bold">
              {(sortedUsers[1].firstName || "U").charAt(0)}
              <Medal className="absolute -bottom-1 -right-1 h-4 w-4 text-slate-400" />
            </div>
            <div className="flex h-16 w-20 flex-col items-center justify-center rounded-t-xl bg-slate-400/20 border border-slate-400/30">
              <p className="text-xs font-medium text-center truncate w-16 px-1">
                {sortedUsers[1].firstName}
              </p>
              <p className="text-xs text-muted-foreground">
                {getXpDisplay(sortedUsers[1]).toLocaleString()} XP
              </p>
            </div>
          </motion.div>

          {/* 1st place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <Crown className="h-6 w-6 text-yellow-500 animate-bounce" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-white text-xl font-bold shadow-lg shadow-yellow-500/30">
              {(sortedUsers[0].firstName || "U").charAt(0)}
            </div>
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-t-xl bg-yellow-500/20 border border-yellow-500/30">
              <p className="text-xs font-bold text-center truncate w-20 px-1">
                {sortedUsers[0].firstName}
              </p>
              <p className="text-sm font-bold text-yellow-500">
                {getXpDisplay(sortedUsers[0]).toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">XP</p>
            </div>
          </motion.div>

          {/* 3rd place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-700 to-amber-600 text-white font-bold">
              {(sortedUsers[2].firstName || "U").charAt(0)}
              <Star className="absolute -bottom-1 -right-1 h-4 w-4 text-amber-700" />
            </div>
            <div className="flex h-12 w-20 flex-col items-center justify-center rounded-t-xl bg-amber-700/20 border border-amber-700/30">
              <p className="text-xs font-medium text-center truncate w-16 px-1">
                {sortedUsers[2].firstName}
              </p>
              <p className="text-xs text-muted-foreground">
                {getXpDisplay(sortedUsers[2]).toLocaleString()} XP
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Full leaderboard list */}
      <div className="space-y-2">
        {sortedUsers.slice(0, 100).map((user, i) => {
          const isCurrentUser = user.id === currentUserId;
          const xp = getXpDisplay(user);

          return (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className={cn(
                "flex items-center gap-4 rounded-xl border p-4 transition-all",
                isCurrentUser
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-card hover:bg-accent/30"
              )}
            >
              {/* Rank */}
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  i === 0 && "bg-yellow-400/20 text-yellow-500",
                  i === 1 && "bg-slate-400/20 text-slate-400",
                  i === 2 && "bg-amber-700/20 text-amber-700",
                  i > 2 && "bg-muted text-muted-foreground"
                )}
              >
                {i < 3 ? ["🥇", "🥈", "🥉"][i] : i + 1}
              </span>

              {/* Avatar */}
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-sm font-bold",
                  isCurrentUser
                    ? "bg-primary"
                    : "bg-gradient-to-br from-purple-500 to-blue-500"
                )}
              >
                {user.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.imageUrl}
                    alt={user.firstName || ""}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  (user.firstName || "U").charAt(0)
                )}
              </div>

              {/* Name & stats */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">
                  {user.firstName} {user.lastName}
                  {isCurrentUser && (
                    <span className="ml-2 text-xs text-primary">(You)</span>
                  )}
                </p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-muted-foreground">
                    Level {user.level}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs text-orange-400">
                    <Flame className="h-3 w-3" />
                    {user.streak}d
                  </span>
                </div>
              </div>

              {/* XP */}
              <div className="flex items-center gap-1 font-bold text-primary">
                <Zap className="h-4 w-4" />
                {xp.toLocaleString()}
              </div>
            </motion.div>
          );
        })}

        {sortedUsers.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No users found. Be the first to earn XP!
          </div>
        )}
      </div>
    </div>
  );
}
