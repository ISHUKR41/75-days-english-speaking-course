"use client";
// ============================================================
// Landing Hero — SPECTACULAR full-screen hero section
// Design: Apple × Linear × Vercel × Stripe
// Features: animated gradient bg, floating word cards,
// shimmer badge, animated stats, vocabulary marquee ticker,
// Lenis smooth scroll, gradient mesh background animation
// NO Math.random() — all values are deterministic
// ============================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Sparkles, Zap, Play, Users, BookOpen,
  Target, Flame, Star, Mic, MessageSquare,
  ArrowRight,
} from "lucide-react";

// ─── Particle positions (deterministic, no Math.random()) ─────
const PARTICLES = [
  { x: "8%",  y: "15%", size: 2, opacity: 0.4, delay: 0,   dur: 4   },
  { x: "92%", y: "10%", size: 3, opacity: 0.3, delay: 0.5, dur: 5   },
  { x: "15%", y: "80%", size: 2, opacity: 0.5, delay: 1,   dur: 4.5 },
  { x: "85%", y: "75%", size: 2, opacity: 0.3, delay: 1.5, dur: 6   },
  { x: "50%", y: "5%",  size: 3, opacity: 0.4, delay: 0.8, dur: 5.5 },
  { x: "30%", y: "90%", size: 2, opacity: 0.3, delay: 1.2, dur: 4.8 },
  { x: "70%", y: "88%", size: 2, opacity: 0.4, delay: 0.3, dur: 5.2 },
  { x: "5%",  y: "50%", size: 3, opacity: 0.3, delay: 1.8, dur: 6.5 },
  { x: "95%", y: "45%", size: 2, opacity: 0.4, delay: 0.7, dur: 4.2 },
  { x: "45%", y: "95%", size: 2, opacity: 0.3, delay: 2.0, dur: 5.8 },
  { x: "55%", y: "18%", size: 3, opacity: 0.35,delay: 1.4, dur: 4.7 },
  { x: "22%", y: "35%", size: 2, opacity: 0.3, delay: 0.9, dur: 5.3 },
];

// ─── Floating vocabulary word cards ───────────────────────────
const FLOATING_WORDS = [
  {
    word: "Fluent",
    size: "text-sm",
    style: { top: "20%", left: "5%", transform: "rotate(-3deg)" },
    delay: 0,
    duration: 5,
    color: "from-violet-500/25 to-purple-500/15",
    border: "border-violet-500/40",
    text: "text-violet-200",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    dotColor: "bg-violet-400",
  },
  {
    word: "Confident",
    size: "text-xs",
    style: { top: "32%", right: "4%", transform: "rotate(2deg)" },
    delay: 0.8,
    duration: 6,
    color: "from-blue-500/25 to-indigo-500/15",
    border: "border-blue-500/40",
    text: "text-blue-200",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.25)]",
    dotColor: "bg-blue-400",
  },
  {
    word: "Professional",
    size: "text-sm",
    style: { bottom: "30%", left: "4%", transform: "rotate(4deg)" },
    delay: 1.6,
    duration: 7,
    color: "from-emerald-500/25 to-teal-500/15",
    border: "border-emerald-500/40",
    text: "text-emerald-200",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    dotColor: "bg-emerald-400",
  },
  {
    word: "Grammar",
    size: "text-xs",
    style: { top: "24%", right: "6%", transform: "rotate(-2deg)" },
    delay: 0.4,
    duration: 5.5,
    color: "from-amber-500/25 to-orange-500/15",
    border: "border-amber-500/40",
    text: "text-amber-200",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    dotColor: "bg-amber-400",
  },
  {
    word: "Vocabulary",
    size: "text-sm",
    style: { bottom: "34%", right: "5%", transform: "rotate(3deg)" },
    delay: 1.2,
    duration: 6.5,
    color: "from-pink-500/25 to-rose-500/15",
    border: "border-pink-500/40",
    text: "text-pink-200",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.25)]",
    dotColor: "bg-pink-400",
  },
  {
    word: "Speaking",
    size: "text-xs",
    style: { top: "55%", left: "3%", transform: "rotate(-1deg)" },
    delay: 2.0,
    duration: 6,
    color: "from-cyan-500/25 to-sky-500/15",
    border: "border-cyan-500/40",
    text: "text-cyan-200",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    dotColor: "bg-cyan-400",
  },
];

// ─── Statistics bar data — course highlights ──────────────────
const STATS_BAR = [
  { label: "75 Days", sublabel: "Structured Program", icon: Flame, color: "text-orange-400" },
  { label: "300+", sublabel: "Words Daily", icon: BookOpen, color: "text-violet-400" },
  { label: "500+", sublabel: "Practice Questions", icon: Target, color: "text-pink-400" },
  { label: "Type & Speak", sublabel: "Dual Learning", icon: Mic, color: "text-emerald-400" },
];

// ─── Bottom stats bar data ─────────────────────────────────────
const HERO_STATS = [
  { icon: Users,       value: "50,000+",    label: "Learners" },
  { icon: Flame,       value: "75 Days",    label: "Program" },
  { icon: BookOpen,    value: "300+",        label: "Words/Day" },
  { icon: Zap,         value: "AI-Powered", label: "Learning" },
];

// ─── Vocabulary marquee — scrolling ticker of English words ───
const MARQUEE_WORDS = [
  "Perseverance", "Eloquent", "Tenacious", "Articulate", "Exemplary",
  "Proficient", "Astute", "Resilient", "Innovative", "Commendable",
  "Diligent", "Versatile", "Pragmatic", "Meticulous", "Proactive",
  "Accomplished", "Motivated", "Dedicated", "Ambitious", "Fluent",
  "Confident", "Enthusiastic", "Professional", "Competent", "Remarkable",
  "Strategic", "Analytical", "Collaborative", "Insightful", "Dynamic",
];

// ─── Social proof avatar gradient colors ──────────────────────
const AVATAR_COLORS = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-orange-400 to-red-500",
  "from-yellow-400 to-amber-500",
];

// ─── Animation variants ────────────────────────────────────────
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const statBarItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Animated count-up number ─────────────────────────────────
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString() + suffix);
  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    rounded.on("change", (v) => setDisplay(v));
    const controls = animate(count, target, { duration: 2, ease: "easeOut", delay: 0.8 });
    return controls.stop;
  }, [count, rounded, target]);

  return <span>{display}</span>;
}

// ─── VocabularyMarquee Component ──────────────────────────────
function VocabularyMarquee() {
  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <div className="relative w-full overflow-hidden py-3" aria-hidden="true">
      {/* Left fade edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      {/* Right fade edge */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />

      {/* Scrolling track */}
      <div className="marquee-track flex gap-3 w-max">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`
              inline-flex items-center gap-1.5 rounded-full px-3 py-1
              border backdrop-blur-sm text-xs font-semibold whitespace-nowrap
              transition-all duration-300 hover:scale-105
              ${i % 6 === 0 ? "border-violet-500/30 text-violet-300 bg-violet-500/10" :
                i % 6 === 1 ? "border-blue-500/30 text-blue-300 bg-blue-500/10" :
                i % 6 === 2 ? "border-emerald-500/30 text-emerald-300 bg-emerald-500/10" :
                i % 6 === 3 ? "border-amber-500/30 text-amber-300 bg-amber-500/10" :
                i % 6 === 4 ? "border-pink-500/30 text-pink-300 bg-pink-500/10" :
                              "border-cyan-500/30 text-cyan-300 bg-cyan-500/10"}
            `}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                i % 6 === 0 ? "bg-violet-400" :
                i % 6 === 1 ? "bg-blue-400" :
                i % 6 === 2 ? "bg-emerald-400" :
                i % 6 === 3 ? "bg-amber-400" :
                i % 6 === 4 ? "bg-pink-400" :
                               "bg-cyan-400"
              }`}
            />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Component ────────────────────────────────────────────
export function LandingHero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        }) as { raf: (time: number) => void; destroy: () => void };

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis not available, fallback to native scroll
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "88px", paddingBottom: "40px" }}
      aria-label="Hero section"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-background" aria-hidden="true" />

      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 hero-gradient-animated pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none hero-mesh-animated"
        aria-hidden="true"
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Primary gradient orb — top left */}
      <motion.div
        className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.24, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Secondary orb — top right */}
      <motion.div
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Tertiary orb — bottom center */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ── CSS Particle effects ── */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-violet-400/60"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [p.opacity, p.opacity * 1.6, p.opacity],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Floating word cards (desktop only) ── */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none hidden xl:block"
          aria-hidden="true"
        >
          {FLOATING_WORDS.map((item, i) => (
            <motion.div
              key={item.word}
              className="absolute"
              style={item.style as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -(8 + i * 3), 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: item.delay + 0.5 },
                scale: { duration: 0.6, delay: item.delay + 0.5 },
                y: {
                  delay: item.delay + 0.5,
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
            >
              <div
                className={`
                  rounded-xl border backdrop-blur-md px-4 py-2.5
                  bg-gradient-to-br ${item.color} ${item.border}
                  ${item.glow}
                `}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                  <span className={`font-bold ${item.size} ${item.text}`}>
                    {item.word}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center w-full">

        {/* ── Animated shimmer badge ── */}
        <motion.div
          custom={0}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300 badge-shimmer backdrop-blur-sm cursor-default">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              </motion.span>
              <span>✨ 75 Days • 300+ Words Daily • AI-Powered</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Star className="h-3.5 w-3.5 text-violet-400 fill-violet-400" />
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mb-6 space-y-1">
          <motion.h1
            custom={0.1}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="font-black text-foreground leading-[0.92] tracking-tighter font-display-hero"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
          >
            Speak English
          </motion.h1>

          <motion.h1
            custom={0.2}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="font-black leading-[0.92] tracking-tighter font-display-hero"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #60a5fa 70%, #a78bfa 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 4s linear infinite",
            }}
          >
            Fluently
          </motion.h1>
        </div>

        {/* ── Subtitle ── */}
        <motion.p
          custom={0.35}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          From absolute beginner to{" "}
          <span className="text-foreground font-semibold">confident, fluent</span>{" "}
          English speaker. Master grammar, vocabulary, speaking &amp; professional communication
          — one structured day at a time.
        </motion.p>

        {/* ── Statistics bar — course highlights ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {STATS_BAR.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statBarItem}
              whileHover={{ scale: 1.06, y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 cursor-default"
            >
              <stat.icon className={`h-3.5 w-3.5 ${stat.color} shrink-0`} aria-hidden="true" />
              <span className="text-sm font-bold text-foreground">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.sublabel}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA buttons ── */}
        <motion.div
          custom={0.45}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-2xl px-8 py-4
                         text-base font-bold text-white shadow-lg
                         transition-all duration-300 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #6272f1 50%, #4f46e5 100%)",
                boxShadow: "0 0 40px rgba(124,58,237,0.45), 0 4px 24px rgba(98,114,241,0.35)",
              }}
            >
              {/* Shimmer effect on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer-slide 1.5s ease-in-out infinite",
                }}
              />
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              >
                <Zap className="h-5 w-5 relative z-10" />
              </motion.span>
              <span className="relative z-10">Start Your Journey</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-border/60
                         bg-card/40 backdrop-blur-sm px-8 py-4 text-base font-semibold
                         text-foreground hover:bg-card/70 hover:border-border
                         transition-all duration-200"
            >
              <Play className="h-4 w-4 text-muted-foreground" />
              Watch Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Social proof row ── */}
        <motion.div
          custom={0.55}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="flex -space-x-2.5">
            {AVATAR_COLORS.map((gradient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br ${gradient} shadow-lg`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.08, type: "spring" }}
                >
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                </motion.span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground font-semibold">4.9/5</strong> · 50,000+ learners
            </span>
          </div>
        </motion.div>

        {/* ── Bottom stats bar — glassmorphism card ── */}
        <motion.div
          custom={0.65}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <div
            className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden
                       border border-white/10 glass shadow-xl"
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.35)" }}
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                className={`
                  flex flex-col items-center gap-1.5 px-6 py-5
                  bg-white/[0.03] transition-colors cursor-default
                  ${i < HERO_STATS.length - 1 ? "border-r border-white/10" : ""}
                `}
              >
                <stat.icon className="h-4 w-4 text-violet-400" />
                <span className="text-lg font-black text-foreground tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Vocabulary Marquee ticker ── */}
      <motion.div
        className="relative z-10 w-full mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="text-center mb-3">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            <MessageSquare className="inline h-3 w-3 mr-1 mb-0.5" />
            300+ words you&apos;ll master daily
          </span>
        </div>
        <VocabularyMarquee />
      </motion.div>

      {/* ── Scroll indicator ── */}
      {mounted && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                     items-center gap-2 text-muted-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
