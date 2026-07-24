"use client";
// ============================================================
// Landing CTA - Compelling call-to-action section
// Premium design inspired by Stripe, Linear, Vercel CTAs
// Features: animated gradient, floating particles, dual CTAs
// ============================================================

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Mic, Target, Zap, CheckCircle2, Sparkles, Globe, Trophy } from "lucide-react";

// ─── Benefits shown inside the CTA banner ─────────────────────
const CTA_BENEFITS = [
  { icon: CheckCircle2, text: "75 structured days" },
  { icon: Target, text: "800+ questions per day" },
  { icon: Mic, text: "Type & Speak answers" },
  { icon: BookOpen, text: "200+ vocab words daily" },
  { icon: Trophy, text: "Gamified XP & badges" },
  { icon: Globe, text: "Real-life English focus" },
];

// ─── Stats to show inside CTA ─────────────────────────────────
const CTA_STATS = [
  { value: "75", label: "Days" },
  { value: "15K+", label: "Vocabulary" },
  { value: "50K+", label: "Questions" },
  { value: "FREE", label: "Forever" },
];

export function LandingCTA() {
  return (
    // Full-width section with generous padding
    <section className="section" aria-label="Call to action">
      <div className="page-container">
        {/* ── Main CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #db2777 80%, #f59e0b 100%)",
          }}
        >
          {/* Animated dot grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          {/* Large glowing orbs for depth */}
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)", filter: "blur(40px)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)", filter: "blur(40px)" }}
            aria-hidden="true"
          />

          {/* ── Card Content ── */}
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 flex items-center justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                World&apos;s Most Advanced Free English Course
                <Sparkles className="h-4 w-4 text-yellow-300" />
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight"
            >
              Start Speaking English
              <br />
              <span className="text-yellow-300">Fluently Today</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-4 max-w-2xl text-center text-base md:text-lg text-white/80"
            >
              75 days. 200 words daily. 80+ practice questions. One goal — confident, fluent English 
              that you can use in your job, in meetings, with friends, and in daily life.
            </motion.p>

            {/* ── Stats Row ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              {CTA_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-yellow-300">{stat.value}</div>
                  <div className="text-xs text-white/70 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* ── CTA Buttons ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-primary shadow-2xl hover:bg-white/95 transition-all duration-200"
                >
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Start Free — Day 1 Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all duration-200"
                >
                  Sign In to Continue
                  <ArrowRight className="h-5 w-5 opacity-70" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-5 text-center text-sm text-white/60"
            >
              No credit card required · 100% Free · Start in 30 seconds · Open Source
            </motion.p>

            {/* ── Benefits Grid ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {CTA_BENEFITS.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-1.5 rounded-full bg-white/15 border border-white/20 px-3 py-1.5 text-sm text-white font-medium"
                >
                  <benefit.icon className="h-3.5 w-3.5 text-yellow-300" />
                  {benefit.text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
