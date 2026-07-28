"use client";
// ============================================================
// Landing Curriculum — Timeline / roadmap showing Day 1-10 preview
// + full 75-day weekly breakdown
// Design: modern timeline cards with emoji, unlock status, animation
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2, Lock, Sparkles, ChevronRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Day 1-10 timeline preview (shown at the top) ─────────────
const FIRST_TEN_DAYS = [
  { day: 1, emoji: "📖", title: "Basics of English", desc: "Parts of speech, sentence structure, alphabet sounds", unlocked: true },
  { day: 2, emoji: "🗣️", title: "Self Introduction", desc: "Introduce yourself confidently in English", unlocked: true },
  { day: 3, emoji: "⚡", title: "Imperative Sentences", desc: "Commands, requests, and how to give instructions", unlocked: true },
  { day: 4, emoji: "🔑", title: "Be Verb (Am/Is/Are)", desc: "Master the foundation of all English sentences", unlocked: true },
  { day: 5, emoji: "👆", title: "Demonstrative Pronouns", desc: "This, That, These, Those — with practice", unlocked: false },
  { day: 6, emoji: "✅", title: "Has / Have", desc: "Expressing possession and experience", unlocked: false },
  { day: 7, emoji: "⏪", title: "Had (Past Possession)", desc: "Talk about what you had in the past", unlocked: false },
  { day: 8, emoji: "🔮", title: "Will Have (Future)", desc: "Express future possession and goals", unlocked: false },
  { day: 9, emoji: "📍", title: "Use of There", desc: "There is / There are / There was", unlocked: false },
  { day: 10, emoji: "🏆", title: "Revision + Practice", desc: "Solidify Days 1-9 with mock test", unlocked: false },
];

// ─── Weekly breakdown ──────────────────────────────────────────
const WEEKS = [
  {
    week: "Week 1–2", days: "Days 1–10", theme: "Foundations",
    color: "bg-blue-500", glowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500/30", textColor: "text-blue-400",
    topics: [
      "Basic of English", "Self Introduction", "Be Verb (Am/Is/Are)",
      "Has / Have", "Demonstrative Pronouns", "Revision + Practice",
    ],
  },
  {
    week: "Week 3–4", days: "Days 11–20", theme: "Modal Verbs",
    color: "bg-purple-500", glowColor: "shadow-purple-500/20",
    borderColor: "border-purple-500/30", textColor: "text-purple-400",
    topics: [
      "Use of Want / Wanted", "Use of Let / Let's", "Would Like To",
      "Can / Should / May / Must", "Speaking Practice", "Modal Revision",
    ],
  },
  {
    week: "Week 5–6", days: "Days 21–31", theme: "Advanced Modals",
    color: "bg-pink-500", glowColor: "shadow-pink-500/20",
    borderColor: "border-pink-500/30", textColor: "text-pink-400",
    topics: [
      "Used To / Could", "Should Have / Must Have", "Would Have / May Have",
      "Will / Shall", "Ought To", "Complete Modal Revision",
    ],
  },
  {
    week: "Week 7–8", days: "Days 32–50", theme: "All 12 Tenses",
    color: "bg-emerald-500", glowColor: "shadow-emerald-500/20",
    borderColor: "border-emerald-500/30", textColor: "text-emerald-400",
    topics: [
      "Present Simple & Continuous", "Present Perfect & Past Perfect",
      "Future Tenses", "All 12 Tenses Master", "Prepositions", "Passive Voice",
    ],
  },
  {
    week: "Week 9–10", days: "Days 51–68", theme: "Advanced English",
    color: "bg-amber-500", glowColor: "shadow-amber-500/20",
    borderColor: "border-amber-500/30", textColor: "text-amber-400",
    topics: [
      "Advanced Sentences", "500+ Verb List", "Idioms & Phrases",
      "15,000+ Vocabulary", "Body / Food / Nature Words", "Industry Vocabulary",
    ],
  },
  {
    week: "Week 11", days: "Days 69–75", theme: "Writing & Final Test",
    color: "bg-rose-500", glowColor: "shadow-rose-500/20",
    borderColor: "border-rose-500/30", textColor: "text-rose-400",
    topics: [
      "Application Writing", "Letter / Email Writing", "Paragraph Writing",
      "Essay & Notice Writing", "Complete Grammar Revision", "Final Mock Test",
    ],
  },
];

// ─── Day card in the timeline ──────────────────────────────────
function DayTimelineCard({
  item,
  index,
}: {
  item: typeof FIRST_TEN_DAYS[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-start gap-4 group"
    >
      {/* Timeline connector line */}
      {index < FIRST_TEN_DAYS.length - 1 && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-border to-transparent" />
      )}

      {/* Day number circle */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black z-10 transition-all duration-200",
          item.unlocked
            ? "bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
            : "bg-muted text-muted-foreground border border-border"
        )}
      >
        {item.unlocked ? (
          <span>{item.day}</span>
        ) : (
          <Lock className="h-3.5 w-3.5" />
        )}
        {/* Pulse ring for unlocked days */}
        {item.unlocked && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-violet-400/40"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
          />
        )}
      </motion.div>

      {/* Card content */}
      <motion.div
        whileHover={{ y: -2 }}
        className={cn(
          "flex-1 rounded-2xl border p-4 mb-3 transition-all duration-200 cursor-default",
          item.unlocked
            ? "border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40 hover:bg-violet-500/8"
            : "border-border bg-card hover:border-border/80"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Emoji */}
            <span className="text-2xl leading-none">{item.emoji}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Day {item.day}
                </span>
                {item.unlocked && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 border border-violet-500/30 px-2 py-0.5 text-[10px] font-bold text-violet-400">
                    <CheckCircle2 className="h-2.5 w-2.5" /> Unlocked
                  </span>
                )}
              </div>
              <p className="text-sm font-bold text-foreground mt-0.5">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
          {/* Arrow hint */}
          <ChevronRight className={cn(
            "h-4 w-4 shrink-0 mt-0.5 transition-colors",
            item.unlocked ? "text-violet-400" : "text-muted-foreground/30"
          )} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export function LandingCurriculum() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section id="curriculum" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
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
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-bold text-violet-400 mb-6 backdrop-blur-sm"
          >
            <Calendar className="h-3.5 w-3.5" />
            Complete 75-Day Roadmap
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-balance leading-tight"
          >
            Every Day Has a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #60a5fa 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Purpose.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A meticulously structured curriculum — from Day 1 basics to Day 75 mastery.
            Every lesson builds on the last.
          </motion.p>
        </div>

        {/* ── Two-column layout: timeline + weekly tabs ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Day 1-10 Timeline ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/15">
                <Sparkles className="h-4 w-4 text-violet-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">First 10 Days Preview</h3>
                <p className="text-xs text-muted-foreground">What you&apos;ll cover in Week 1 &amp; 2</p>
              </div>
            </motion.div>

            <div className="space-y-0">
              {FIRST_TEN_DAYS.map((item, i) => (
                <DayTimelineCard key={item.day} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* ── Right: Weekly Tab Switcher ── */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15">
                <BookOpen className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Full Curriculum Breakdown</h3>
                <p className="text-xs text-muted-foreground">Select a week to see the topics</p>
              </div>
            </motion.div>

            {/* Week selector tabs (horizontal scroll on mobile) */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {WEEKS.map((w, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveWeek(i)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "rounded-xl px-3.5 py-2.5 text-left transition-all shrink-0 text-xs font-semibold border",
                    activeWeek === i
                      ? `${w.color} text-white border-transparent shadow-lg ${w.glowColor}`
                      : "border-border hover:bg-accent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="font-black">{w.week}</div>
                  <div className="opacity-75 font-medium">{w.days}</div>
                </motion.button>
              ))}
            </div>

            {/* Week content panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeek}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={cn(
                  "rounded-2xl border p-6 backdrop-blur-sm",
                  WEEKS[activeWeek].borderColor,
                  "bg-card"
                )}
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                {/* Header badge */}
                <div className={cn(
                  "inline-flex items-center gap-2 rounded-full text-white px-4 py-1.5 text-xs font-bold mb-5",
                  WEEKS[activeWeek].color
                )}>
                  <BookOpen className="h-3.5 w-3.5" />
                  {WEEKS[activeWeek].theme} — {WEEKS[activeWeek].days}
                </div>

                {/* Topic list */}
                <div className="space-y-2.5">
                  {WEEKS[activeWeek].topics.map((topic, i) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-3 hover:bg-muted/50 transition-colors cursor-default"
                    >
                      {/* Colored check icon */}
                      <div className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                        activeWeek === 0 ? "bg-blue-500/15" :
                        activeWeek === 1 ? "bg-purple-500/15" :
                        activeWeek === 2 ? "bg-pink-500/15" :
                        activeWeek === 3 ? "bg-emerald-500/15" :
                        activeWeek === 4 ? "bg-amber-500/15" :
                                          "bg-rose-500/15"
                      )}>
                        <CheckCircle2 className={cn("h-4 w-4", WEEKS[activeWeek].textColor)} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{topic}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress hint */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
                  <span className="text-xs text-muted-foreground">
                    {WEEKS[activeWeek].topics.length} topic areas covered
                  </span>
                  <span className={cn("text-xs font-bold", WEEKS[activeWeek].textColor)}>
                    {WEEKS[activeWeek].days}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Total summary */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 grid grid-cols-3 gap-3"
            >
              {[
                { label: "75 Days", sublabel: "Total lessons", color: "text-violet-400" },
                { label: "15,000+", sublabel: "Vocabulary words", color: "text-emerald-400" },
                { label: "500+", sublabel: "Practice tests", color: "text-amber-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-card p-3 text-center cursor-default"
                >
                  <p className={cn("text-lg font-black tabular-nums", item.color)}>{item.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
