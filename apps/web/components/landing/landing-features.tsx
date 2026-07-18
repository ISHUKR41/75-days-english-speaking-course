"use client";
// Landing Features section
import { motion } from "framer-motion";
import { BookOpen, Brain, Flame, Mic, Star, Target, Trophy, Volume2, Zap } from "lucide-react";

const FEATURES = [
  { icon: Brain, title: "AI-Powered Learning", desc: "Smart lessons that adapt to your level and pace", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Mic, title: "Voice Practice", desc: "Speak answers and get instant pronunciation feedback", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: BookOpen, title: "200+ Daily Words", desc: "Unique vocabulary every day — never repeat a word", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Target, title: "80-100 Practice Qs", desc: "Intensive practice questions per subtopic", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: Trophy, title: "Gamified Progress", desc: "XP, coins, badges, streaks, and leaderboards", color: "text-gold-500", bg: "bg-gold-400/10" },
  { icon: Flame, title: "Daily Streaks", desc: "Build habits with streak tracking and reminders", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Volume2, title: "Audio Pronunciation", desc: "Native speaker pronunciation for every word", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: Zap, title: "Instant Feedback", desc: "Know immediately if your answer is right or wrong", color: "text-primary", bg: "bg-primary/10" },
  { icon: Star, title: "Hindi Explanations", desc: "Every concept explained in simple Hindi + English", color: "text-amber-500", bg: "bg-amber-500/10" },
];

export function LandingFeatures() {
  return (
    <section id="features" className="section bg-muted/30">
      <div className="page-container">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-title text-balance">
            Everything You Need to Speak<br />
            <span className="text-gradient-brand">Fluent English</span>
          </motion.h2>
          <p className="section-subtitle mx-auto mt-4">
            A complete learning system built with the same care as the world&apos;s top EdTech platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="card-hover rounded-2xl flex items-start gap-4">
              <div className={`rounded-xl p-3 shrink-0 ${f.bg}`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
