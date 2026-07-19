"use client";
// ============================================================
// Landing Features - Premium feature showcase section
// Design inspired by Linear, Stripe, Vercel feature sections
// Each card has an icon, gradient glow, and animated entrance
// ============================================================

import { motion } from "framer-motion";
import {
  BookOpen, Brain, Flame, Globe, Mic, Shield,
  Star, Target, Trophy, Volume2, Zap,
} from "lucide-react";

// ─── Feature definitions ───────────────────────────────────────
const FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Learning Path",
    desc: "Smart lessons that adapt to your level, pace, and weak areas automatically",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
  {
    icon: Mic,
    title: "Voice Answer Mode",
    desc: "Speak your answers out loud — real pronunciation feedback with Web Speech API",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  {
    icon: BookOpen,
    title: "200+ Daily Vocabulary",
    desc: "15,000 unique words across 75 days — with IPA, Hindi meanings, and 5 examples each",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Target,
    title: "80–100 Practice Questions",
    desc: "Translation, MCQ, fill-in-the-blank, and error-detection — per subtopic",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
  },
  {
    icon: Trophy,
    title: "Gamified XP System",
    desc: "Earn XP, coins, and badges. Compete on the global leaderboard with 12,000+ learners",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    icon: Flame,
    title: "Daily Streak System",
    desc: "Build an unbreakable study habit. Lose your streak and start over — no excuses",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  },
  {
    icon: Volume2,
    title: "Native Audio Pronunciation",
    desc: "Hear every word spoken by a native English speaker — available offline via PWA",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
  },
  {
    icon: Star,
    title: "Hindi Explanations Everywhere",
    desc: "Every grammar rule, mistake, and tip is explained in both English and Hindi",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    desc: "Know immediately — with sound effects and explanations — if you got it right",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    glow: "hover:shadow-[0_0_30px_rgba(98,114,241,0.15)]",
  },
  {
    icon: Globe,
    title: "Works Offline (PWA)",
    desc: "Install on your phone and study without internet — your progress syncs when online",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
  },
  {
    icon: Shield,
    title: "Structured 75-Day Curriculum",
    desc: "Go from zero to confident speaker — one day at a time, in the right order",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
  },
  {
    icon: Brain,
    title: "50-Question Subtopic Tests",
    desc: "Prove you've mastered each subtopic before unlocking the next — no skipping",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/20">
      <div className="page-container">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 
                       bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
          >
            <Zap className="h-3.5 w-3.5" />
            Everything in One Platform
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-balance"
          >
            Built for Serious Learners.
            <br />
            <span className="gradient-text">Not for Tourists.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Every feature is designed to push you forward — not keep you comfortable.
            This is the English course that actually changes your life.
          </motion.p>
        </div>

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`
                relative overflow-hidden rounded-2xl border p-5 
                transition-all duration-300 cursor-default
                card-shine
                ${f.border} bg-card ${f.glow}
              `}
            >
              {/* Icon */}
              <div className={`inline-flex rounded-xl p-3 mb-4 ${f.bg}`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground text-sm mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "15,000+", label: "Vocabulary Words", color: "text-emerald-400" },
            { value: "50,000+", label: "Practice Questions", color: "text-blue-400" },
            { value: "75",      label: "Days to Fluency",   color: "text-violet-400" },
            { value: "12,800+", label: "Active Learners",   color: "text-amber-400" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-3xl md:text-4xl font-black tabular-nums ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
