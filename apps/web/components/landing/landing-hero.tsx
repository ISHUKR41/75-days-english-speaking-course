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
import { motion } from "framer-motion";
import {
  Sparkles, Zap, Play, Users, BookOpen,
  Target, Flame, Star, Mic, MessageSquare,
} from "lucide-react";

// ─── Floating vocabulary word cards ───────────────────────────
// Positions and delays are index-based — no Math.random()
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
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.2)]",
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
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]",
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
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
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
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.2)]",
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
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.2)]",
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
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.2)]",
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
// These represent the rich vocabulary content in the course
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
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── VocabularyMarquee Component ──────────────────────────────
// A horizontal scrolling ticker of vocabulary words
function VocabularyMarquee() {
  // Duplicate words for seamless infinite scroll
  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <div
      className="relative w-full overflow-hidden py-3"
      aria-hidden="true"
    >
      {/* Left fade edge */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      {/* Right fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
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
              ${i % 6 === 0 ? "border-violet-500/30 text-violet-300 bg-violet-500/10" :
                i % 6 === 1 ? "border-blue-500/30 text-blue-300 bg-blue-500/10" :
                i % 6 === 2 ? "border-emerald-500/30 text-emerald-300 bg-emerald-500/10" :
                i % 6 === 3 ? "border-amber-500/30 text-amber-300 bg-amber-500/10" :
                i % 6 === 4 ? "border-pink-500/30 text-pink-300 bg-pink-500/10" :
                              "border-cyan-500/30 text-cyan-300 bg-cyan-500/10"}
            `}
          >
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

    // Initialize Lenis smooth scroll (dynamic import to avoid SSR issues)
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

      {/* Gradient mesh overlay — creates depth */}
      <div
        className="absolute inset-0 pointer-events-none hero-mesh-animated"
        aria-hidden="true"
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Primary gradient orb — top left */}
      <div
        className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Secondary orb — top right */}
      <div
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Tertiary orb — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

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
              animate={{ y: [0, -(8 + i * 3), 0] }}
              transition={{
                y: {
                  delay: item.delay,
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                className={`
                  rounded-xl border backdrop-blur-sm px-4 py-2.5
                  bg-gradient-to-br ${item.color} ${item.border}
                  ${item.glow}
                `}
              >
                <span className={`font-bold ${item.size} ${item.text}`}>
                  {item.word}
                </span>
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
          <div
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 px-5 py-2 text-sm font-semibold text-violet-300 badge-shimmer"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400 animate-pulse" />
            <span>✨ 75 Days • 300+ Words Daily • AI-Powered</span>
            <Star className="h-3.5 w-3.5 text-violet-400" />
          </div>
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
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
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
        {/* Shows the key course stats in a scannable pill row */}
        <motion.div
          custom={0.4}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {STATS_BAR.map((stat) => (
            <div
              key={stat.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2"
            >
              <stat.icon className={`h-3.5 w-3.5 ${stat.color} shrink-0`} aria-hidden="true" />
              <span className="text-sm font-bold text-foreground">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.sublabel}</span>
            </div>
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
          {/* Primary CTA — gradient */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4
                         text-base font-bold text-white shadow-lg
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #6272f1 50%, #4f46e5 100%)",
                boxShadow: "0 0 40px rgba(124,58,237,0.4), 0 4px 24px rgba(98,114,241,0.3)",
              }}
            >
              <Zap className="h-5 w-5" />
              Start Your Journey →
            </Link>
          </motion.div>

          {/* Secondary CTA — ghost */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
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
              <div
                key={i}
                className={`h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br ${gradient}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
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
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.3)" }}
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`
                  flex flex-col items-center gap-1.5 px-6 py-5
                  bg-white/[0.03] hover:bg-white/[0.07] transition-colors
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
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Vocabulary Marquee ticker ── */}
      {/* Scrolling word strip shows depth of the vocabulary course */}
      <motion.div
        className="relative z-10 w-full mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {/* Section label */}
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
