"use client";
// ============================================================
// Dashboard Stats - Row of key metric cards
// Shows XP, accuracy, words learned, time spent, etc.
// ============================================================

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  BookMarked,
  Brain,
  Clock,
  Flame,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────
interface StatsProps {
  stats: {
    currentDay: number;
    completedDays: number;
    streak: number;
    totalXp: number;
    level: number;
    levelProgress: number;
    todayXp: number;
    weekXp: number;
    accuracy: number;
    wordsLearned: number;
    questionsAnswered: number;
    practiceMinutes: number;
    badges: number;
    rank: number;
  };
}

// ─── Stat Card Definition ─────────────────────────────────────
const getStatCards = (stats: StatsProps["stats"]) => [
  {
    icon: Zap,
    label: "Total XP",
    value: stats.totalXp,
    suffix: "",
    subLabel: `+${stats.todayXp} today`,
    subColor: "text-emerald-500",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/20",
  },
  {
    icon: Target,
    label: "Accuracy",
    value: stats.accuracy,
    suffix: "%",
    subLabel: "Overall score",
    subColor: "text-muted-foreground",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/20",
  },
  {
    icon: BookMarked,
    label: "Words Learned",
    value: stats.wordsLearned,
    suffix: "",
    subLabel: "From 15,000 total",
    subColor: "text-muted-foreground",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Brain,
    label: "Questions Done",
    value: stats.questionsAnswered,
    suffix: "",
    subLabel: "Practice & tests",
    subColor: "text-muted-foreground",
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-500",
    borderColor: "border-pink-500/20",
  },
  {
    icon: Clock,
    label: "Practice Time",
    value: stats.practiceMinutes,
    suffix: "m",
    subLabel: "Today",
    subColor: "text-muted-foreground",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    borderColor: "border-cyan-500/20",
  },
  {
    icon: TrendingUp,
    label: "Week XP",
    value: stats.weekXp,
    suffix: "",
    subLabel: "This week",
    subColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Star,
    label: "Badges Earned",
    value: stats.badges,
    suffix: "",
    subLabel: "Achievements",
    subColor: "text-muted-foreground",
    bgColor: "bg-gold-400/10",
    iconColor: "text-gold-500",
    borderColor: "border-gold-400/20",
  },
  {
    icon: Flame,
    label: "Global Rank",
    value: stats.rank,
    suffix: "",
    prefix: "#",
    subLabel: "Leaderboard",
    subColor: "text-muted-foreground",
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-500",
    borderColor: "border-rose-500/20",
  },
];

export function DashboardStats({ stats }: StatsProps) {
  const statCards = getStatCards(stats);

  return (
    <div className="space-y-4">
      {/* Section title */}
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        Your Statistics
      </h2>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -2, scale: 1.01 }}
            className={cn(
              "rounded-2xl border p-4 transition-shadow duration-300",
              "hover:shadow-card-lg bg-card",
              card.borderColor
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl mb-3",
                card.bgColor
              )}
            >
              <card.icon
                className={cn("h-5 w-5", card.iconColor)}
                aria-hidden="true"
              />
            </div>

            {/* Value */}
            <div className="flex items-baseline gap-0.5">
              {card.prefix && (
                <span className="text-2xl font-bold text-foreground">
                  {card.prefix}
                </span>
              )}
              <span className="text-2xl font-bold text-foreground">
                <CountUp
                  end={card.value}
                  duration={2}
                  separator=","
                  useEasing={true}
                />
              </span>
              {card.suffix && (
                <span className="text-lg font-semibold text-foreground">
                  {card.suffix}
                </span>
              )}
            </div>

            {/* Label */}
            <p className="text-sm font-medium text-foreground mt-0.5">
              {card.label}
            </p>

            {/* Sub-label */}
            <p className={cn("text-xs mt-0.5", card.subColor)}>
              {card.subLabel}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
