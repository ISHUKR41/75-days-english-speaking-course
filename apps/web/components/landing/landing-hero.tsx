"use client";
// ============================================================
// Landing Hero - Premium hero section for 75 Days English
// Design inspired by: Apple, Stripe, Linear, Vercel, Claude
// Features: massive typography, gradient orbs, floating cards,
// animated stats counter, parallax background
// FIX: All content starts VISIBLE — no opacity-0 initial state
// ============================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// Framer Motion for premium animations
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// Icons from Lucide
import {
  ArrowRight, BookOpen, Brain, CheckCircle2, Flame,
  Mic, Sparkles, Star, Trophy, Zap, Globe, Users,
  GraduationCap, Target, Play,
} from "lucide-react";

// ─── Platform stats displayed in the hero ─────────────────────
// These are the key metrics that demonstrate platform value
const HERO_STATS = [
  { label: "Active Students", value: "12,800+", icon: Users, color: "#6272f1" },
  { label: "Vocabulary Words", value: "15,000+", icon: BookOpen, color: "#8b5cf6" },
  { label: "Practice Questions", value: "50,000+", icon: Target, color: "#ec4899" },
  { label: "Days to Fluency", value: "75", icon: Flame, color: "#f59e0b" },
];

// ─── Feature badges shown in hero ─────────────────────────────
const FEATURE_BADGES = [
  { icon: Brain, label: "AI-Powered", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Mic, label: "Voice Practice", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Flame, label: "Daily Streaks", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { icon: Trophy, label: "Gamified XP", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { icon: Globe, label: "75 Days Plan", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: GraduationCap, label: "Certified", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
];

// ─── Floating vocabulary word cards ───────────────────────────
// Float around the hero on xl screens for visual interest
const FLOATING_WORDS = [
  { word: "Eloquent", meaning: "Clear & persuasive", color: "#6272f1", delay: 0, position: { top: "18%", left: "2%" } },
  { word: "Proficient", meaning: "Highly skilled", color: "#8b5cf6", delay: 0.5, position: { top: "42%", right: "2%" } },
  { word: "Articulate", meaning: "Express clearly", color: "#ec4899", delay: 1, position: { top: "65%", left: "3%" } },
  { word: "Confident", meaning: "Self-assured", color: "#10b981", delay: 1.5, position: { top: "28%", right: "3%" } },
  { word: "Fluent", meaning: "Natural speaker", color: "#f59e0b", delay: 2, position: { bottom: "22%", right: "3%" } },
];

// ─── Social proof avatars ──────────────────────────────────────
const AVATAR_GRADIENTS = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-orange-400 to-red-500",
  "from-yellow-400 to-amber-500",
];

// ─── Hero Component ────────────────────────────────────────────
export function LandingHero() {
  // Container ref for parallax
  const containerRef = useRef<HTMLDivElement>(null);
  // Track if component is mounted (for client-only features)
  const [mounted, setMounted] = useState(false);

  // ── Mouse parallax setup ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const bgX = useTransform(smoothX, [-600, 600], [-25, 25]);
  const bgY = useTransform(smoothY, [-400, 400], [-15, 15]);

  useEffect(() => {
    // Mark as mounted so client-only features activate
    setMounted(true);

    // Track mouse for parallax on desktop only
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
      aria-label="Hero section"
    >
      {/* ── Background: Multi-layer gradient system ── */}
      <div className="absolute inset-0 bg-background" aria-hidden="true" />

      {/* Animated gradient orbs — parallax with mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: mounted ? bgX : 0, y: mounted ? bgY : 0 }}
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

      {/* ── Floating word cards (desktop only, xl screens) ── */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
        {FLOATING_WORDS.map((item) => (
          <motion.div
            key={item.word}
            className="absolute"
            style={item.position as React.CSSProperties}
            // Start visible — float animation only
            animate={{ y: [0, -12, 0] }}
            transition={{
              y: { delay: item.delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div
              className="rounded-xl border bg-card/80 backdrop-blur-md p-3 min-w-[140px]
                         shadow-lg shadow-black/20"
              style={{
                borderColor: `${item.color}40`,
                borderLeftColor: item.color,
                borderLeftWidth: 3,
              }}
            >
              <p className="font-semibold text-sm text-foreground">{item.word}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.meaning}</p>
              <CheckCircle2 className="absolute top-2 right-2 h-3.5 w-3.5 text-emerald-400" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Main content area — ALWAYS VISIBLE ── */}
      {/* NO opacity-0 initial state — content is visible immediately */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">

        {/* ── Announcement badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30
                       bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300
                       backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-400 animate-pulse" />
            <span>World&apos;s Most Advanced English Learning Platform</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </motion.div>

        {/* ── MASSIVE HEADLINE — always rendered, visible by default ── */}
        <div className="mb-6">
          {/* Line 1 */}
          <h1
            className="font-black text-foreground leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            Speak English
          </h1>

          {/* Line 2 — gradient accent */}
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

          {/* Line 3 */}
          <h1
            className="font-black text-foreground leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              75 Days
            </span>
          </h1>
        </div>

        {/* ── Subtitle ── */}
        <p
          className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          From absolute beginner to{" "}
          <span className="text-foreground font-semibold">confident, fluent</span>{" "}
          English speaker. Master grammar, vocabulary, speaking, and professional
          communication — one structured day at a time.
        </p>

        {/* ── Feature pill badges ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FEATURE_BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5
                         text-xs font-medium backdrop-blur-sm ${badge.bg}`}
            >
              <badge.icon className={`h-3.5 w-3.5 ${badge.color}`} />
              <span className="text-foreground/80">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4
                         text-base font-bold text-white shadow-lg
                         transition-all duration-200 hover:shadow-xl
                         hover:shadow-brand-500/30 active:shadow-md"
              style={{
                background: "linear-gradient(135deg, #6272f1 0%, #8b5cf6 100%)",
                boxShadow: "0 0 40px rgba(98,114,241,0.35)",
              }}
            >
              <Zap className="h-5 w-5" />
              Start Your Journey Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-xl border border-border/60
                         bg-card/50 backdrop-blur-sm px-8 py-4 text-base font-semibold
                         text-foreground hover:bg-accent hover:border-border
                         transition-all duration-200"
            >
              <Play className="h-5 w-5 text-muted-foreground" />
              Watch How It Works
            </Link>
          </motion.div>
        </div>

        {/* ── Social proof row ── */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {/* Stacked avatar circles */}
          <div className="flex -space-x-2.5">
            {AVATAR_GRADIENTS.map((gradient, i) => (
              <div
                key={i}
                className={`h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br ${gradient}`}
              />
            ))}
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="font-semibold text-foreground">4.9/5</strong> from 12,800+ students
            </span>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        {/* 4 key platform metrics shown as cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group rounded-2xl border border-border/50 bg-card/60
                         backdrop-blur-sm p-5 text-center hover:border-border
                         hover:bg-card transition-all duration-200 hover:shadow-lg
                         hover:shadow-black/10"
            >
              {/* Category icon */}
              <stat.icon
                className="h-5 w-5 mx-auto mb-2 text-muted-foreground
                           group-hover:text-primary transition-colors"
              />

              {/* Big number */}
              <div
                className="text-2xl font-black tracking-tight"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}, #8b5cf6)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                   items-center gap-2 text-muted-foreground/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
}
