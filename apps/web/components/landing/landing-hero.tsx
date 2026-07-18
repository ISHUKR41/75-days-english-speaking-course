"use client";
// ============================================================
// Landing Hero - Main hero section with animated background
// Inspired by Stripe, Vercel, and Linear hero sections
// ============================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Flame,
  Mic,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import CountUp from "react-countup";

// ─── Stats shown in the hero ─────────────────────────────────
const STATS = [
  { label: "Students Enrolled", value: 12800, suffix: "+" },
  { label: "Vocabulary Words", value: 15000, suffix: "+" },
  { label: "Practice Questions", value: 50000, suffix: "+" },
  { label: "Days to Fluency", value: 75, suffix: "" },
];

// ─── Feature pills shown in hero ─────────────────────────────
const FEATURES = [
  { icon: Brain, label: "AI-Powered Learning", color: "text-purple-400" },
  { icon: Mic, label: "Voice Practice", color: "text-blue-400" },
  { icon: Flame, label: "Daily Streaks", color: "text-orange-400" },
  { icon: Trophy, label: "Gamified Progress", color: "text-gold-400" },
];

// ─── Floating word cards shown around hero ────────────────────
const FLOATING_WORDS = [
  { word: "Eloquent", meaning: "Fluent & persuasive", color: "#6272f1", delay: 0 },
  { word: "Proficient", meaning: "Highly skilled", color: "#8b5cf6", delay: 0.5 },
  { word: "Articulate", meaning: "Clearly expressed", color: "#ec4899", delay: 1 },
  { word: "Confident", meaning: "Self-assured", color: "#10b981", delay: 1.5 },
  { word: "Fluent", meaning: "Smooth & natural", color: "#f59e0b", delay: 2 },
];

export function LandingHero() {
  // Track if component is visible for animations
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring motion for mouse tracking
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transform mouse position to background movement
  const bgX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const bgY = useTransform(smoothY, [-500, 500], [-20, 20]);

  useEffect(() => {
    // Trigger entrance animations
    setVisible(true);

    // Track mouse for parallax
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
    // Hero section container
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* ── Animated background gradients ── */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />

      {/* Moving gradient orbs (parallax) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: bgX, y: bgY }}
        aria-hidden="true"
      >
        {/* Top-left orb */}
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full
                     bg-brand-500/20 blur-3xl"
        />
        {/* Top-right orb */}
        <div
          className="absolute top-20 right-20 h-72 w-72 rounded-full
                     bg-purple-500/15 blur-3xl"
        />
        {/* Bottom-center orb */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full
                     bg-pink-500/10 blur-3xl"
        />
      </motion.div>

      {/* Grid dots pattern */}
      <div className="absolute inset-0 grid-dots opacity-30" aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="relative z-10 page-container text-center px-4">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div
            className="gradient-border inline-flex items-center gap-2 
                       rounded-full px-4 py-2 text-sm font-medium"
          >
            <Sparkles className="h-4 w-4 text-gold-400" aria-hidden="true" />
            <span className="text-gradient-brand">
              World&apos;s Most Advanced English Learning Platform
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold 
                     tracking-tight text-balance mb-6"
        >
          {/* Line 1 */}
          <span className="block text-foreground">Master English</span>
          {/* Line 2 - gradient accent */}
          <span className="block text-gradient-brand">in 75 Days</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle mx-auto mb-8 text-lg md:text-xl"
        >
          From absolute beginner to confident, fluent English speaker. Learn
          grammar, vocabulary, speaking, writing — everything you need for work,
          life, and beyond.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-2 rounded-full border border-border/60 
                         bg-card/50 backdrop-blur-sm px-4 py-2 text-sm font-medium"
            >
              <feature.icon className={`h-4 w-4 ${feature.color}`} aria-hidden="true" />
              <span className="text-foreground/80">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/sign-up"
              className="btn-primary text-base px-8 py-4 shadow-glow-brand"
            >
              <Zap className="h-5 w-5" aria-hidden="true" />
              Start Your Journey — It&apos;s Free
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#curriculum"
              className="btn-secondary text-base px-8 py-4"
            >
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              View Curriculum
            </Link>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {/* Avatars */}
          <div className="flex -space-x-2" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-background 
                           bg-gradient-to-br from-brand-400 to-purple-500"
              />
            ))}
          </div>
          {/* Stars */}
          <div className="flex gap-0.5" aria-label="5 star rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-gold-400 text-gold-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <strong className="text-foreground">12,800+</strong> students learning
          </span>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="card-glass rounded-2xl p-5 text-center"
            >
              {/* Animated counter */}
              <div className="text-3xl font-bold text-gradient-brand">
                {visible && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={0.8 + i * 0.1}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>
              <div className="mt-1 text-xs text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Floating word cards ── */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        {FLOATING_WORDS.map((item, i) => (
          <motion.div
            key={item.word}
            className="absolute card-glass rounded-xl p-3 min-w-[140px]"
            style={{
              // Distribute cards around the edges
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? "5%" : "85%",
              borderLeft: `3px solid ${item.color}`,
            }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0], // Floating animation
            }}
            transition={{
              opacity: { delay: item.delay + 0.5, duration: 0.5 },
              x: { delay: item.delay + 0.5, duration: 0.5 },
              y: {
                delay: item.delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {/* Word */}
            <p className="font-semibold text-sm text-foreground">{item.word}</p>
            {/* Meaning */}
            <p className="text-xs text-muted-foreground mt-0.5">{item.meaning}</p>
            {/* Checkmark */}
            <CheckCircle2
              className="absolute top-2 right-2 h-3.5 w-3.5 text-emerald-400"
            />
          </motion.div>
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col 
                   items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="flex flex-col gap-1">
          <div className="w-0.5 h-4 rounded-full bg-border mx-auto" />
          <div className="w-0.5 h-2 rounded-full bg-border/50 mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
