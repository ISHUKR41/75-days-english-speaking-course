"use client";
// ============================================================
// Landing Features — Bento Grid showcase (Linear/Vercel style)
// 6 feature cards with glassmorphism + gradient icon backgrounds
// Animated on scroll with Intersection Observer
// ============================================================

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mic, BookOpen, Brain, TrendingUp, Trophy, Zap,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

// ─── Feature card definitions ──────────────────────────────────
const FEATURES = [
  {
    icon: Mic,
    emoji: "🎙️",
    title: "Speaking Lab",
    description:
      "Speak out loud and get real-time pronunciation feedback. Practice 200+ phrases daily with native-speaker audio guides and voice detection.",
    gradient: "from-blue-600 to-indigo-600",
    bg: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    colSpan: "md:col-span-1 lg:col-span-2",
    rowSpan: "",
    visual: (
      <div className="mt-4 flex gap-1 items-end h-12">
        {[4, 7, 12, 9, 14, 10, 6, 11, 8, 5, 13, 7].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-blue-400/60 animate-pulse"
            style={{
              height: `${h * 3}px`,
              animationDelay: `${i * 80}ms`,
              animationDuration: "1.2s",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Vocabulary Bank",
    description:
      "15,000+ words across 75 days with IPA pronunciation, example sentences in Hindi & English, memory tips, and spaced repetition.",
    gradient: "from-emerald-600 to-teal-600",
    bg: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "",
    visual: (
      <div className="mt-4 space-y-1.5">
        {["Eloquent", "Proficient", "Articulate"].map((w, i) => (
          <div
            key={w}
            className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5"
          >
            <span className="text-[10px] font-bold text-emerald-400">
              {["A2", "B1", "B2"][i]}
            </span>
            <span className="text-xs text-foreground font-medium">{w}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Brain,
    emoji: "🤖",
    title: "AI Practice",
    description:
      "Smart lessons that adapt to your level, pace, and weak areas. Never feel lost — the AI knows what you need to improve next.",
    gradient: "from-violet-600 to-purple-600",
    bg: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "",
    visual: (
      <div className="mt-4 flex gap-2 flex-wrap">
        {["Grammar", "Tenses", "Vocabulary", "Speaking"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-500/15 border border-violet-500/20 px-2.5 py-1 text-[10px] font-semibold text-violet-300"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: TrendingUp,
    emoji: "📊",
    title: "Progress Tracking",
    description:
      "See your XP, streaks, accuracy, and vocabulary growth in beautiful charts. Every lesson builds on the last.",
    gradient: "from-amber-600 to-orange-600",
    bg: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    colSpan: "md:col-span-1 lg:col-span-2",
    rowSpan: "",
    visual: (
      <div className="mt-4 flex items-end gap-1 h-12">
        {[30, 45, 35, 60, 50, 75, 65, 85, 70, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-amber-500 to-amber-300"
            style={{ height: `${h * 0.48}px`, opacity: 0.7 + i * 0.03 }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: Zap,
    emoji: "📝",
    title: "Mock Tests",
    description:
      "Full-length mock tests with 80+ questions per day, timed sessions, and detailed answer explanations in Hindi & English.",
    gradient: "from-rose-600 to-pink-600",
    bg: "from-rose-500/10 to-pink-500/5",
    border: "border-rose-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "",
    visual: (
      <div className="mt-4 space-y-1.5">
        {[
          { label: "Grammar", pct: 88 },
          { label: "Vocab", pct: 73 },
          { label: "Speaking", pct: 65 },
        ].map((item) => (
          <div key={item.label} className="space-y-0.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="text-rose-400 font-bold">{item.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-rose-500/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-400"
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Gamification — XP & Badges",
    description:
      "Earn XP for every lesson, collect achievement badges, and compete on the global leaderboard. Discipline meets fun.",
    gradient: "from-yellow-600 to-amber-600",
    bg: "from-yellow-500/10 to-amber-500/5",
    border: "border-yellow-500/20",
    glow: "hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]",
    iconBg: "bg-yellow-500/15",
    iconColor: "text-yellow-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "",
    visual: (
      <div className="mt-4 flex gap-2">
        {["🥇", "🔥", "⚡", "🌟", "💎"].map((badge, i) => (
          <div
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-500/15 border border-yellow-500/20 text-base"
          >
            {badge}
          </div>
        ))}
      </div>
    ),
  },
];

// ─── Stats row ─────────────────────────────────────────────────
const STATS = [
  { num: 15000, suffix: "+", label: "Vocabulary Words", color: "text-emerald-400" },
  { num: 50000, suffix: "+", label: "Practice Questions", color: "text-blue-400" },
  { num: 75,    suffix: "",  label: "Days to Fluency",   color: "text-violet-400" },
  { num: 12800, suffix: "+", label: "Active Learners",   color: "text-amber-400" },
];

// ─── Custom hook for intersection observer ─────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Feature Card Component ────────────────────────────────────
function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: typeof FEATURES[0];
  index: number;
  inView: boolean;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={`
        group relative overflow-hidden rounded-2xl border p-6 md:p-7
        bg-gradient-to-br ${feature.bg}
        ${feature.border} ${feature.glow} ${feature.colSpan}
        transition-all duration-500 cursor-default flex flex-col
        backdrop-blur-sm
      `}
    >
      {/* Corner decoration */}
      <div
        className={`
          absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-10
          bg-gradient-to-br ${feature.gradient} group-hover:opacity-20
          transition-opacity duration-500 blur-xl
        `}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`
          relative inline-flex items-center justify-center
          h-12 w-12 rounded-2xl ${feature.iconBg} border ${feature.border}
          mb-5 shadow-sm
        `}
      >
        <Icon className={`h-5 w-5 ${feature.iconColor}`} />
        <span className="absolute -top-1.5 -right-1.5 text-base">{feature.emoji}</span>
      </div>

      {/* Content */}
      <h3 className="font-bold text-xl text-foreground mb-2.5 leading-snug">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {feature.description}
      </p>

      {/* Visual mockup */}
      {feature.visual}
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export function LandingFeatures() {
  const { ref: gridRef, inView: gridInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="page-container relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30
                       bg-violet-500/10 px-4 py-1.5 text-sm font-bold text-violet-400 mb-6"
          >
            <Zap className="h-3.5 w-3.5" />
            Everything in One Platform
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-balance"
          >
            Built for Serious Learners.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #818cf8, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not for Tourists.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Every feature is designed to push you forward — not keep you comfortable.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              inView={gridInView}
            />
          ))}
        </div>

        {/* ── Stats Row ── */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 p-8 md:p-10 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {STATS.map((stat, idx) => (
            <div key={stat.label} className="text-center relative z-10">
              <p className={`text-4xl md:text-5xl font-black tabular-nums tracking-tighter ${stat.color} mb-1.5`}>
                <AnimatedCounter end={stat.num} suffix={stat.suffix} duration={2500 + idx * 200} />
              </p>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
