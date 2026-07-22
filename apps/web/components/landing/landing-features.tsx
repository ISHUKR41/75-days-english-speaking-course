"use client";
// ============================================================
// Landing Features - Premium feature showcase section
// Design inspired by Linear, Stripe, Vercel feature sections
// Each card has an icon, gradient glow, and animated entrance
// ============================================================

import { motion } from "framer-motion";
import {
  BookOpen, Brain, Flame, Globe, Mic, Shield,
  Star, Target, Trophy, Volume2, Zap, LayoutGrid
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

// ─── Feature definitions ───────────────────────────────────────
const FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Learning Path",
    desc: "Smart lessons that adapt to your level, pace, and weak areas automatically. Never feel lost or left behind.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    gradient: "from-violet-500/20 via-transparent to-transparent",
    bentoClass: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Mic,
    title: "Voice Answer Mode",
    desc: "Speak out loud — get real-time pronunciation feedback.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    gradient: "from-blue-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: BookOpen,
    title: "Daily Vocab",
    desc: "15,000 words over 75 days, complete with IPA and examples.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: Target,
    title: "Endless Practice",
    desc: "80–100 questions per topic to build deep muscle memory.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    gradient: "from-rose-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: Trophy,
    title: "Gamified System",
    desc: "Earn XP, collect coins, and compete globally.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    gradient: "from-amber-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: Flame,
    title: "Unforgiving Daily Streaks",
    desc: "Build an unbreakable habit. Skip a day, lose your streak, and start all over. No excuses.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    gradient: "from-orange-500/20 via-transparent to-transparent",
    bentoClass: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Volume2,
    title: "Native Audio",
    desc: "Hear every sentence spoken clearly by a native speaker.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    gradient: "from-cyan-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: Star,
    title: "Hindi Explanations Everywhere",
    desc: "Every grammar rule, mistake, and nuanced tip is explained clearly in both English and Hindi.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    gradient: "from-yellow-500/20 via-transparent to-transparent",
    bentoClass: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    desc: "Know immediately if you got it right or wrong.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    glow: "hover:shadow-[0_0_100px_rgba(var(--primary),0.15)]",
    gradient: "from-primary/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "75-Day Curriculum",
    desc: "A proven, highly structured path from absolute zero to confident, fluent speaker.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    gradient: "from-indigo-500/20 via-transparent to-transparent",
    bentoClass: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: LayoutGrid,
    title: "Subtopic Mastery",
    desc: "Prove mastery before you can advance.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    gradient: "from-pink-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
  {
    icon: Globe,
    title: "Works Offline",
    desc: "Install as a PWA. Study anywhere, internet or not.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
    gradient: "from-teal-500/20 via-transparent to-transparent",
    bentoClass: "lg:col-span-1",
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="page-container relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 
                       bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6 shadow-glow-brand"
          >
            <Zap className="h-4 w-4" />
            Everything in One Platform
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-balance"
          >
            Built for Serious Learners.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
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
            This is the English course that actually changes your life.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`
                group relative overflow-hidden rounded-[24px] border p-6 md:p-8
                transition-all duration-500 cursor-default
                bg-card/50 backdrop-blur-sm
                ${f.border} ${f.glow} ${f.bentoClass}
                flex flex-col
              `}
            >
              {/* Background Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true" 
              />
              
              {/* Giant background icon (decorative) */}
              <f.icon 
                className={`absolute -right-6 -bottom-6 w-40 h-40 ${f.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12`} 
                aria-hidden="true" 
              />

              {/* Icon */}
              <div className={`relative inline-flex rounded-2xl p-4 mb-6 ${f.bg} border ${f.border} w-fit shadow-sm`}>
                <f.icon className={`h-6 w-6 ${f.color}`} />
              </div>

              {/* Content */}
              <div className="relative mt-auto">
                <h3 className="font-bold text-xl text-foreground mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 p-8 md:p-12 rounded-[32px] border border-border/50 bg-muted/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 opacity-50" />
          
          {[
            { num: 15000, suffix: "+", label: "Vocabulary Words", color: "text-emerald-500" },
            { num: 50000, suffix: "+", label: "Practice Questions", color: "text-blue-500" },
            { num: 75,    suffix: "",  label: "Days to Fluency",   color: "text-violet-500" },
            { num: 12800, suffix: "+", label: "Active Learners",   color: "text-amber-500" },
          ].map((stat, idx) => (
            <div key={stat.label} className="text-center relative z-10">
              <p className={`text-4xl md:text-5xl lg:text-6xl font-black tabular-nums tracking-tighter ${stat.color} mb-2`}>
                <AnimatedCounter end={stat.num} suffix={stat.suffix} duration={2500 + idx * 200} />
              </p>
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
