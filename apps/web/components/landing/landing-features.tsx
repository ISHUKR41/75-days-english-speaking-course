"use client";
// ============================================================
// Landing Features — Premium Bento Grid (Linear/Vercel/Stripe style)
// Glassmorphism cards + gradient borders + glow icons
// Staggered Framer Motion animations + 3D hover tilt
// ============================================================

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    metric: "200+ phrases daily",
    metricColor: "text-blue-400",
    colSpan: "md:col-span-1 lg:col-span-2",
    visual: (
      <div className="mt-5 flex gap-1.5 items-end h-14">
        {[4, 7, 12, 9, 14, 10, 6, 11, 8, 5, 13, 7, 10, 4].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full animate-pulse"
            style={{
              height: `${h * 3.5}px`,
              animationDelay: `${i * 80}ms`,
              animationDuration: "1.4s",
              background: `rgba(96, 165, 250, ${0.3 + (i % 3) * 0.2})`,
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
    glow: "hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    metric: "15,000+ words",
    metricColor: "text-emerald-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    visual: (
      <div className="mt-5 space-y-2">
        {[
          { word: "Eloquent", level: "B2", pct: 90 },
          { word: "Proficient", level: "B1", pct: 72 },
          { word: "Articulate", level: "A2", pct: 55 },
        ].map((item, i) => (
          <div key={item.word} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/15 rounded-md px-1.5 py-0.5">
                  {item.level}
                </span>
                <span className="text-xs text-foreground font-semibold">{item.word}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold">{item.pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-emerald-500/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                style={{ width: `${item.pct}%` }}
              />
            </div>
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
    glow: "hover:shadow-[0_0_50px_rgba(139,92,246,0.2)]",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    metric: "Adaptive AI engine",
    metricColor: "text-violet-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    visual: (
      <div className="mt-5 flex gap-2 flex-wrap">
        {["Grammar", "Tenses", "Vocabulary", "Speaking", "Writing", "Listening"].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.07 }}
            className="rounded-full bg-violet-500/15 border border-violet-500/25 px-2.5 py-1 text-[10px] font-bold text-violet-300"
          >
            {tag}
          </motion.span>
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
    glow: "hover:shadow-[0_0_50px_rgba(245,158,11,0.2)]",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    metric: "Real-time XP charts",
    metricColor: "text-amber-400",
    colSpan: "md:col-span-1 lg:col-span-2",
    visual: (
      <div className="mt-5 flex items-end gap-1.5 h-14">
        {[30, 45, 35, 60, 50, 75, 65, 85, 70, 90, 80, 95].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md"
            initial={{ height: 0 }}
            whileInView={{ height: `${h * 0.56}px` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: "easeOut" }}
            style={{
              background: `linear-gradient(to top, rgb(245,158,11,${0.5 + i * 0.04}), rgb(251,191,36,0.8))`,
            }}
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
    glow: "hover:shadow-[0_0_50px_rgba(244,63,94,0.2)]",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
    metric: "80+ questions/day",
    metricColor: "text-rose-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    visual: (
      <div className="mt-5 space-y-2">
        {[
          { label: "Grammar", pct: 88 },
          { label: "Vocab", pct: 73 },
          { label: "Speaking", pct: 65 },
        ].map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-muted-foreground font-medium">{item.label}</span>
              <span className="text-rose-400 font-black">{item.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-rose-500/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
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
    title: "XP & Badges",
    description:
      "Earn XP for every lesson, collect achievement badges, and compete on the global leaderboard. Discipline meets fun.",
    gradient: "from-yellow-600 to-amber-600",
    bg: "from-yellow-500/10 to-amber-500/5",
    border: "border-yellow-500/20",
    glow: "hover:shadow-[0_0_50px_rgba(234,179,8,0.2)]",
    iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600",
    metric: "50+ achievements",
    metricColor: "text-yellow-400",
    colSpan: "md:col-span-1 lg:col-span-1",
    visual: (
      <div className="mt-5">
        <div className="flex gap-2 mb-3">
          {["🥇", "🔥", "⚡", "🌟", "💎"].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500/15 border border-yellow-500/25 text-base cursor-default"
            >
              {badge}
            </motion.div>
          ))}
        </div>
        {/* XP bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-muted-foreground">Level 12</span>
            <span className="text-yellow-400 font-bold">8,450 XP</span>
          </div>
          <div className="h-2 rounded-full bg-yellow-500/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-400"
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              style={{ boxShadow: "0 0 8px rgba(251,191,36,0.5)" }}
            />
          </div>
        </div>
      </div>
    ),
  },
];

// ─── Stats row ─────────────────────────────────────────────────
const STATS = [
  { num: 15000, suffix: "+", label: "Vocabulary Words", color: "text-emerald-400", icon: "📚" },
  { num: 50000, suffix: "+", label: "Practice Questions", color: "text-blue-400", icon: "🎯" },
  { num: 75,    suffix: "",  label: "Days to Fluency",   color: "text-violet-400", icon: "🗓️" },
  { num: 12800, suffix: "+", label: "Active Learners",   color: "text-amber-400", icon: "🏆" },
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

// ─── 3D Tilt Card Hook ─────────────────────────────────────────
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
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
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
      transition={{
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
      className={feature.colSpan}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { duration: 0.2 } }}
        className={`
          group relative overflow-hidden rounded-2xl border p-6 md:p-7
          bg-gradient-to-br ${feature.bg} ${feature.border} ${feature.glow}
          transition-shadow duration-500 cursor-default flex flex-col h-full
          backdrop-blur-sm
        `}
      >
        {/* Gradient corner orb */}
        <motion.div
          className={`
            absolute -top-16 -right-16 h-40 w-40 rounded-full
            bg-gradient-to-br ${feature.gradient}
            opacity-[0.07] blur-2xl pointer-events-none
          `}
          animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        />

        {/* Shimmer border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent, rgba(255,255,255,0.04), transparent)`,
          }}
        />

        {/* Icon with gradient bg + glow */}
        <div className="mb-5 flex items-start justify-between">
          <motion.div
            className={`
              relative inline-flex items-center justify-center
              h-14 w-14 rounded-2xl ${feature.iconBg}
              shadow-lg shadow-black/20
            `}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="h-6 w-6 text-white" />
            <span className="absolute -top-1.5 -right-1.5 text-lg leading-none">
              {feature.emoji}
            </span>
          </motion.div>

          {/* Metric badge */}
          <span className={`text-xs font-bold ${feature.metricColor} bg-white/5 border border-white/10 rounded-full px-3 py-1`}>
            {feature.metric}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-black text-lg text-foreground mb-2 leading-snug tracking-tight">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {feature.description}
        </p>

        {/* Visual mockup */}
        {feature.visual}
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export function LandingFeatures() {
  const { ref: gridRef, inView: gridInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Section background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(98,114,241,0.07) 0%, transparent 65%)",
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
                       bg-violet-500/10 px-4 py-1.5 text-sm font-bold text-violet-400 mb-6
                       backdrop-blur-sm"
          >
            <Zap className="h-3.5 w-3.5" />
            Everything in One Platform
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-balance leading-tight"
          >
            Built for Serious Learners.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #60a5fa 80%)",
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
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
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
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden border border-white/8 relative"
          style={{
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          {/* Inner gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
            }}
          />

          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              className={`
                text-center py-8 px-4 relative z-10 cursor-default transition-colors
                ${idx < STATS.length - 1 ? "border-r border-white/[0.06]" : ""}
                ${idx >= 2 ? "border-t border-white/[0.06] lg:border-t-0" : ""}
              `}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className={`text-4xl md:text-5xl font-black tabular-nums tracking-tighter ${stat.color} mb-1.5`}>
                {statsInView ? (
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} duration={2500 + idx * 200} />
                ) : (
                  "0" + stat.suffix
                )}
              </p>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
