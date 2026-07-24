"use client";
// ============================================================
// Dashboard Stats - Row of key metric cards with real data
// Shows XP, accuracy, words learned, time spent, etc.
// Premium design with animated counters and gradient icons
// ============================================================

// Framer Motion for smooth entrance animations
import { motion } from "framer-motion";
// react-countup for number animation
import CountUp from "react-countup";
// Icons for each metric
import {
  BookMarked,
  Brain,
  Clock,
  Flame,
  Star,
  Target,
  TrendingUp,
  Zap,
  Trophy,
  Sparkles,
} from "lucide-react";
// Utility for conditional class names
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────
interface StatsProps {
  stats: {
    currentDay: number;       // Which day the user is on
    completedDays: number;    // How many days finished
    streak: number;           // Consecutive study days
    totalXp: number;          // Total XP earned across all days
    level: number;            // Current level (based on XP)
    levelProgress: number;    // Progress to next level (0-100)
    todayXp: number;          // XP earned today
    weekXp: number;           // XP earned this week
    accuracy: number;         // Overall answer accuracy (%)
    wordsLearned: number;     // Total vocabulary words mastered
    questionsAnswered: number; // Total questions answered
    practiceMinutes: number;  // Minutes spent practicing today
    badges: number;           // Number of badges earned
    rank: number;             // Leaderboard rank
  };
}

// ─── Card definitions ─────────────────────────────────────────
// Each card shows one metric with icon, gradient, and sublabel
const getStatCards = (stats: StatsProps["stats"]) => [
  {
    icon: Zap,
    label: "Total XP",
    value: stats.totalXp,
    suffix: "",
    subLabel: stats.todayXp > 0 ? `+${stats.todayXp} today` : "Start earning XP!",
    subColor: stats.todayXp > 0 ? "text-emerald-400" : "text-muted-foreground",
    // Amber gradient for XP — gold/achievement feel
    gradientFrom: "#f59e0b",
    gradientTo: "#d97706",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Target,
    label: "Accuracy",
    value: stats.accuracy,
    suffix: "%",
    subLabel: "Overall score",
    subColor: "text-muted-foreground",
    // Blue gradient for accuracy — precision/skill feel
    gradientFrom: "#3b82f6",
    gradientTo: "#1d4ed8",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
  },
  {
    icon: BookMarked,
    label: "Words Learned",
    value: stats.wordsLearned,
    suffix: "",
    subLabel: "From 15,000 total",
    subColor: "text-muted-foreground",
    // Purple gradient for vocabulary — knowledge feel
    gradientFrom: "#8b5cf6",
    gradientTo: "#7c3aed",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
  },
  {
    icon: Brain,
    label: "Questions Done",
    value: stats.questionsAnswered,
    suffix: "",
    subLabel: "Practice & tests",
    subColor: "text-muted-foreground",
    // Pink gradient for questions — effort feel
    gradientFrom: "#ec4899",
    gradientTo: "#db2777",
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",
  },
  {
    icon: Flame,
    label: "Day Streak",
    value: stats.streak,
    suffix: " days",
    subLabel: "Keep it going!",
    subColor: "text-orange-400",
    // Orange gradient for streak — fire/motivation feel
    gradientFrom: "#f97316",
    gradientTo: "#ea580c",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]",
  },
  {
    icon: TrendingUp,
    label: "Week XP",
    value: stats.weekXp,
    suffix: "",
    subLabel: "This week",
    subColor: "text-emerald-400",
    // Emerald gradient for week progress — growth feel
    gradientFrom: "#10b981",
    gradientTo: "#059669",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Trophy,
    label: "Badges Earned",
    value: stats.badges,
    suffix: "",
    subLabel: "Achievements",
    subColor: "text-muted-foreground",
    // Gold gradient for badges — prestige feel
    gradientFrom: "#f59e0b",
    gradientTo: "#b45309",
    bgColor: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Star,
    label: "Current Level",
    value: stats.level,
    suffix: "",
    subLabel: `${stats.levelProgress.toFixed(0)}% to next level`,
    subColor: "text-cyan-400",
    // Cyan gradient for level — clarity/rank feel
    gradientFrom: "#06b6d4",
    gradientTo: "#0891b2",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    glowColor: "hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
  },
];

// ─── Animation variants ───────────────────────────────────────
// Stagger children so cards appear one by one
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Individual card entrance animation
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── DashboardStats Component ─────────────────────────────────
export function DashboardStats({ stats }: StatsProps) {
  // Build card definitions with current stats
  const cards = getStatCards(stats);

  return (
    // Full-width stats section
    <section aria-label="Learning statistics">
      {/* Section header */}
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
          Your Statistics
        </h2>
      </div>

      {/* ── Stats grid — responsive: 2 cols on mobile, 4 on desktop ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4"
        role="list"
      >
        {cards.map((card) => (
          <motion.div
            key={card.label}
            variants={cardVariants}
            role="listitem"
            aria-label={`${card.label}: ${card.value}${card.suffix}`}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={cn(
                // Card base styles
                "group relative overflow-hidden rounded-2xl border p-4 cursor-default",
                "bg-card transition-all duration-300",
                // Border and glow colors (from card definition)
                card.borderColor,
                card.glowColor
              )}
            >
              {/* Subtle gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top left, ${card.gradientFrom}08, transparent 60%)`,
                }}
                aria-hidden="true"
              />

              {/* ── Card inner layout ── */}
              <div className="relative flex flex-col gap-2">
                {/* Icon badge */}
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-xl",
                    card.bgColor
                  )}
                >
                  <card.icon className={cn("h-4 w-4", card.iconColor)} aria-hidden="true" />
                </div>

                {/* Metric value (animated count-up) */}
                <div className="text-2xl font-black tabular-nums leading-none">
                  <CountUp
                    end={card.value}
                    duration={1.5}
                    separator=","
                    preserveValue
                  />
                  {card.suffix && (
                    <span className="text-sm font-semibold text-muted-foreground">{card.suffix}</span>
                  )}
                </div>

                {/* Metric label */}
                <div className="text-xs font-semibold text-foreground">{card.label}</div>

                {/* Sub-label (e.g. "+50 today") */}
                <div className={cn("text-[10px] font-medium", card.subColor)}>
                  {card.subLabel}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
