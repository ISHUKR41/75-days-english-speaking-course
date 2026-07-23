"use client";
// ============================================================
// Landing Hero - Premium hero section for 75 Days English
// Design inspired by: Apple, Stripe, Linear, Vercel, Claude
// Features: massive typography, gradient orbs, floating cards,
// animated stats counter, parallax background
// FIXED: Content always visible — no opacity-0 initial state
// ============================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// Framer Motion for premium animations
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// Icons from Lucide
import {
  ArrowRight, BookOpen, Brain, CheckCircle2, Flame,
  Mic, Sparkles, Star, Trophy, Zap, Globe, Users,
  GraduationCap, Target,
} from "lucide-react";
// Animated number counter
import CountUp from "react-countup";

// ─── Platform stats displayed in the hero ─────────────────────
// These are the key metrics that demonstrate platform value
const HERO_STATS = [
  { label: "Active Students", value: 12800, suffix: "+", icon: Users },
  { label: "Vocabulary Words", value: 15000, suffix: "+", icon: BookOpen },
  { label: "Practice Questions", value: 50000, suffix: "+", icon: Target },
  { label: "Days to Fluency", value: 75, suffix: "", icon: Flame },
];

// ─── Feature badges shown in hero ─────────────────────────────
// 6 unique selling points shown as pill badges
const FEATURE_BADGES = [
  { icon: Brain, label: "AI-Powered", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Mic, label: "Voice Practice", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Flame, label: "Daily Streaks", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { icon: Trophy, label: "Gamified", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { icon: Globe, label: "75 Days", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: GraduationCap, label: "Certified", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
];

// ─── Floating vocabulary word cards ───────────────────────────
// These float around the hero on large screens for visual interest
const FLOATING_WORDS = [
  { word: "Eloquent", meaning: "Clear & persuasive", color: "#6272f1", delay: 0, position: { top: "18%", left: "3%" } },
  { word: "Proficient", meaning: "Highly skilled", color: "#8b5cf6", delay: 0.5, position: { top: "42%", right: "3%" } },
  { word: "Articulate", meaning: "Express clearly", color: "#ec4899", delay: 1, position: { top: "65%", left: "4%" } },
  { word: "Confident", meaning: "Self-assured", color: "#10b981", delay: 1.5, position: { top: "28%", right: "4%" } },
  { word: "Fluent", meaning: "Natural speaker", color: "#f59e0b", delay: 2, position: { bottom: "22%", right: "4%" } },
];

// ─── Social proof avatars (colored circles) ────────────────────
const AVATAR_COLORS = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-orange-400 to-red-500",
  "from-yellow-400 to-amber-500",
];

// ─── Hero Component ────────────────────────────────────────────
export function LandingHero() {
  // countStarted controls when CountUp begins (after mount)
  const [countStarted, setCountStarted] = useState(false);
  // containerRef for parallax scroll detection
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Mouse parallax setup ──
  // Track mouse position for background parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smooth spring motion applied to mouse position
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  // Map mouse position to small background shifts
  const bgX = useTransform(smoothX, [-600, 600], [-25, 25]);
  const bgY = useTransform(smoothY, [-400, 400], [-15, 15]);

  useEffect(() => {
    // Start counters after short delay so user notices the count-up
    const counterTimer = setTimeout(() => setCountStarted(true), 600);

    // Track mouse for parallax on desktop only
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(counterTimer);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
      aria-label="Hero section"
    >
      {/* ── Background: Multi-layer gradient system ── */}
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" aria-hidden="true" />

      {/* Animated gradient orbs — parallax with mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: bgX, y: bgY }}
        aria-hidden="true"
      >
        {/* Primary orb — top left — brand indigo */}
        <div
          className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #6272f1 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary orb — top right — purple */}
        <div
          className="absolute top-10 right-0 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Tertiary orb — bottom center — pink */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.12,
          }}
        />
      </motion.div>

      {/* Grid dot pattern overlay — subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Gradient fade overlay at top — blends with navbar */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background)), transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Floating word cards (desktop only, xl screens) ── */}
      {/* These float around the hero to show vocabulary in action */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
        {FLOATING_WORDS.map((item) => (
          <motion.div
            key={item.word}
            className="absolute"
            style={item.position}
            // Start visible — no opacity-0 initial state
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              y: { delay: item.delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Word card with colored left border */}
            <div
              className="rounded-xl border bg-card/80 backdrop-blur-md p-3 min-w-[140px]
                         shadow-lg shadow-black/20"
              style={{
                borderColor: `${item.color}40`,
                borderLeftColor: item.color,
                borderLeftWidth: 3,
              }}
            >
              {/* English word */}
              <p className="font-semibold text-sm text-foreground">{item.word}</p>
              {/* Hindi/English meaning */}
              <p className="text-xs text-muted-foreground mt-0.5">{item.meaning}</p>
              {/* Check mark — shows it's learned */}
              <CheckCircle2 className="absolute top-2 right-2 h-3.5 w-3.5 text-emerald-400" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Main content area ── */}
      {/* All content is always visible — animations are optional enhancements */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">

        {/* ── Announcement badge ── */}
        {/* Catches attention immediately with a "new" indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30
                       bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300
                       backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-400 animate-pulse" aria-hidden="true" />
            <span>World&apos;s Most Advanced English Learning Platform</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </motion.div>

        {/* ── MASSIVE HEADLINE ── */}
        {/* The primary value proposition — huge, bold, gradient accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          {/* Line 1: plain foreground text */}
          <h1
            className="font-black text-foreground leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            Speak English
          </h1>

          {/* Line 2: gradient text accent — most visually striking element */}
          <h1
            className="font-black leading-[0.95] tracking-tighter"
            style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              background: "linear-gradient(135deg, #6272f1 0%, #8b5cf6 40%, #ec4899 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Fluently
          </h1>

          {/* Line 3: plain foreground text */}
          <h1
            className="font-black text-foreground leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6272f1 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              75 Days
            </span>
          </h1>
        </motion.div>

        {/* ── Subtitle ── */}
        {/* Secondary copy explaining the full offering */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          From absolute beginner to{" "}
          <span className="text-foreground font-semibold">confident, fluent</span>{" "}
          English speaker. Master grammar, vocabulary, speaking, and professional
          communication with AI-powered personalized learning.
        </motion.p>

        {/* ── Feature pill badges ── */}
        {/* 6 USPs shown as small pill badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FEATURE_BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5
                         text-xs font-medium backdrop-blur-sm ${badge.bg}`}
            >
              {/* Icon with color matching badge theme */}
              <badge.icon className={`h-3.5 w-3.5 ${badge.color}`} aria-hidden="true" />
              <span className="text-foreground/80">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA Buttons ── */}
        {/* Primary and secondary calls to action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary CTA — high contrast gradient button */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4
                         text-base font-bold text-white shadow-lg
                         transition-all duration-200 hover:shadow-xl
                         hover:shadow-brand-500/25 active:shadow-md"
              style={{
                background: "linear-gradient(135deg, #6272f1 0%, #8b5cf6 100%)",
                boxShadow: "0 0 40px rgba(98,114,241,0.35)",
              }}
            >
              <Zap className="h-5 w-5" aria-hidden="true" />
              Start Your Journey Free
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Secondary CTA — outlined style */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-xl border border-border/60
                         bg-card/50 backdrop-blur-sm px-8 py-4 text-base font-semibold
                         text-foreground hover:bg-accent hover:border-border
                         transition-all duration-200"
            >
              <BookOpen className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              View Full Curriculum
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Social proof row ── */}
        {/* Avatar stack + star rating to build trust */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {/* Stacked colored avatar circles */}
          <div className="flex -space-x-2.5" aria-hidden="true">
            {AVATAR_COLORS.map((gradient, i) => (
              <div
                key={i}
                className={`h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br ${gradient}`}
              />
            ))}
          </div>

          {/* Star rating + count */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5" aria-label="Rated 5 stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="font-semibold text-foreground">4.9/5</strong> from 12,800+ students
            </span>
          </div>
        </motion.div>

        {/* ── Stats Grid ── */}
        {/* 4 animated number counters showing key platform metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.08, duration: 0.4 }}
              className="group rounded-2xl border border-border/50 bg-card/60
                         backdrop-blur-sm p-5 text-center hover:border-border
                         hover:bg-card transition-all duration-200 hover:shadow-lg
                         hover:shadow-black/10"
            >
              {/* Category icon */}
              <stat.icon
                className="h-5 w-5 mx-auto mb-2 text-muted-foreground
                           group-hover:text-primary transition-colors"
                aria-hidden="true"
              />

              {/* Animated count-up number with gradient text */}
              <div
                className="text-3xl font-black tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #6272f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                {/* CountUp runs only on client after mount */}
                {countStarted ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    delay={i * 0.15}
                    separator=","
                  />
                ) : (
                  // Static fallback shown during SSR and before hydration
                  stat.value.toLocaleString()
                )}
                {stat.suffix}
              </div>

              {/* Metric label */}
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      {/* Subtle bouncing arrow at bottom of hero */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                   items-center gap-2 text-muted-foreground/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
}
