"use client";
// ============================================================
// SubtopicOverview - The section selection hub for each subtopic
// Shows 4 section cards: Learn, Vocabulary, Practice, Test
// Each card opens its own dedicated full page
// Design inspired by Linear, Stripe, and Apple's clean UX
// ============================================================

// React core for state management
import { useState } from "react";
// Next.js Link for client-side navigation
import Link from "next/link";
// Framer Motion for smooth entrance animations
import { motion } from "framer-motion";
// Lucide icons for visual appeal
import {
  BookOpen, Star, Target, Trophy, ArrowLeft, ArrowRight,
  CheckCircle2, Clock, Zap, ChevronRight, Home, Lock,
  Play, Mic, Volume2, FileText, Brain, GraduationCap,
  BarChart3, Users, Sparkles,
} from "lucide-react";
// Conditional className utility
import { cn } from "@/lib/utils";
// Course configuration types
import type { TopicConfig, SubtopicConfig } from "@/data/course-content/days-config";

// ─── Props Interface ──────────────────────────────────────────
interface SubtopicOverviewProps {
  dayNumber: number;                  // Current day number (1-75)
  dayTitle: string;                   // Day title for breadcrumb
  dayEmoji: string;                   // Day emoji for visual
  topic: TopicConfig;                 // Current topic config
  subtopic: SubtopicConfig;           // Current subtopic config
  prevSubtopicId?: string;            // Previous subtopic ID
  nextSubtopicId?: string;            // Next subtopic ID
  nextTopicId?: string;               // Next topic ID
  nextTopicFirstSubtopicId?: string;  // First subtopic of next topic
  userId: string;                     // Current user ID
  completedSections: string[];        // Array of completed section activities
}

// ─── Section Card Data Type ───────────────────────────────────
// Defines a learning section card shown on the overview
interface SectionCard {
  key: string;           // Unique key for the section
  route: string;         // URL route to navigate to
  icon: React.ElementType; // Icon component for the card
  iconBg: string;        // Background color for icon
  iconColor: string;     // Icon color
  borderColor: string;   // Card border color
  hoverBg: string;       // Card hover background
  label: string;         // Section name
  description: string;   // What happens in this section
  stats: string;         // Quick stats badge
  timeEst: string;       // Estimated time to complete
  completedActivity: string; // Activity name to check completion
  features: string[];    // Feature bullets for this section
}

// ── Animation variants for staggered card entrance ────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each card by 100ms
    },
  },
};

// Animation for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ============================================================
// Main Component
// ============================================================
export function SubtopicOverview({
  dayNumber,
  dayTitle,
  dayEmoji,
  topic,
  subtopic,
  prevSubtopicId,
  nextSubtopicId,
  nextTopicId,
  nextTopicFirstSubtopicId,
  userId,
  completedSections,
}: SubtopicOverviewProps) {
  // ── Build base URL for all section routes ──────────────────
  const baseUrl = `/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`;

  // ── Build section cards data ───────────────────────────────
  const sections: SectionCard[] = [
    // ── LEARN SECTION ──────────────────────────────────────────
    {
      key: "learn",
      route: `${baseUrl}/learn`,
      icon: BookOpen,
      iconBg: "bg-indigo-500/15",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-500/20 hover:border-indigo-500/60",
      hoverBg: "hover:bg-indigo-500/5",
      label: "Learn & Understand",
      description: "Deep dive into the concept with a teacher's explanation. Understand WHY before you practice.",
      stats: "Theory",
      timeEst: `${subtopic.estimatedMins || 15} min read`,
      completedActivity: "learn",
      features: [
        "Why we learn this topic",
        "Full concept explanation with Hindi",
        "Grammar rules with exceptions",
        "Common mistakes to avoid",
        "Real-life examples & stories",
        "Professional usage tips",
      ],
    },
    // ── VOCABULARY SECTION ─────────────────────────────────────
    {
      key: "vocabulary",
      route: `${baseUrl}/vocabulary`,
      icon: Star,
      iconBg: "bg-purple-500/15",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-500/20 hover:border-purple-500/60",
      hoverBg: "hover:bg-purple-500/5",
      label: "Vocabulary Bank",
      description: "Master unique words for this topic. Every word is exclusive to this day — no repeats across the 75-day course.",
      stats: "200+ Words",
      timeEst: "20 min",
      completedActivity: "vocabulary",
      features: [
        "200+ unique topic-specific words",
        "Hindi meaning + IPA pronunciation",
        "3 real-life example sentences each",
        "Synonyms, antonyms, usage notes",
        "Flashcard & quiz modes",
        "Audio pronunciation (TTS)",
      ],
    },
    // ── PRACTICE SECTION ───────────────────────────────────────
    {
      key: "practice",
      route: `${baseUrl}/practice`,
      icon: Target,
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/60",
      hoverBg: "hover:bg-emerald-500/5",
      label: "Practice",
      description: "Answer 80+ questions by TYPING or SPEAKING. Both modes work the same — choose what suits you!",
      stats: "80+ Questions",
      timeEst: "30 min",
      completedActivity: "practice",
      features: [
        "Type your answer OR speak it",
        "Instant feedback with explanation",
        "Hindi questions, English answers",
        "Hints available if you're stuck",
        "Translation & fill-in-the-blank",
        "XP rewards for correct answers",
      ],
    },
    // ── TEST SECTION ───────────────────────────────────────────
    {
      key: "test",
      route: `${baseUrl}/test`,
      icon: Trophy,
      iconBg: "bg-amber-500/15",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-500/20 hover:border-amber-500/60",
      hoverBg: "hover:bg-amber-500/5",
      label: "Test Yourself",
      description: "50 graded questions with a 30-second timer. Need 80%+ to pass and unlock the next subtopic.",
      stats: "50 Questions",
      timeEst: "25 min",
      completedActivity: "test",
      features: [
        "50 questions, 30 seconds each",
        "No hints — tests real knowledge",
        "Grade: A+, A, B, C, D",
        "80%+ required to pass",
        "Detailed results breakdown",
        "Max 150 XP on perfect score",
      ],
    },
  ];

  // ── Navigation URLs ────────────────────────────────────────
  // URL for previous subtopic
  const prevUrl = prevSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${prevSubtopicId}`
    : `/day/${dayNumber}`;

  // URL for next subtopic or next topic
  const nextUrl = nextSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${nextSubtopicId}`
    : nextTopicId && nextTopicFirstSubtopicId
    ? `/day/${dayNumber}/topic/${nextTopicId}/subtopic/${nextTopicFirstSubtopicId}`
    : `/day/${dayNumber}`;

  // ── Calculate overall progress for this subtopic ───────────
  // Count how many of the 4 sections are complete
  const completedCount = sections.filter((s) =>
    completedSections.includes(s.completedActivity)
  ).length;

  // Progress percentage (0-100)
  const progressPct = Math.round((completedCount / sections.length) * 100);

  // ── Check if lesson is complete (all 4 sections done) ──────
  const isFullyComplete = completedCount === sections.length;

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-background">
      {/* ── Top navigation bar ────────────────────────────── */}
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground overflow-hidden">
              {/* Dashboard link */}
              <Link href="/dashboard" className="hover:text-foreground transition-colors shrink-0">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              {/* Day link */}
              <Link href={`/day/${dayNumber}`} className="hover:text-foreground transition-colors shrink-0 flex items-center gap-1">
                <span>{dayEmoji}</span>
                <span className="hidden sm:inline">Day {dayNumber}</span>
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              {/* Topic name */}
              <span className="hidden md:inline text-muted-foreground truncate max-w-[100px]">
                {topic.emoji} {topic.title}
              </span>
              <ChevronRight className="h-3 w-3 shrink-0 hidden md:block" />
              {/* Current subtopic (active) */}
              <span className="font-medium text-foreground truncate max-w-[160px]" title={subtopic.title}>
                {subtopic.emoji} {subtopic.title}
              </span>
            </div>

            {/* Progress badge */}
            {completedCount > 0 && (
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-muted-foreground hidden sm:block">
                  {completedCount}/{sections.length} sections done
                </span>
                <div className="h-1.5 w-20 rounded-full bg-muted overflow-hidden hidden sm:block">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                {isFullyComplete && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────── */}
      <div className="container mx-auto max-w-5xl px-4 py-8 pb-24">

        {/* ── Page Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Topic badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-4 text-xs font-semibold"
            style={{
              borderColor: `${topic.color}40`,
              backgroundColor: `${topic.color}10`,
              color: topic.color,
            }}
          >
            <span>{topic.emoji}</span>
            {topic.title}
          </div>

          {/* Subtopic title */}
          <div className="flex items-start gap-4 mb-3">
            {/* Large emoji */}
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-lg"
              style={{ backgroundColor: `${topic.color}20` }}
            >
              {subtopic.emoji}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {subtopic.title}
              </h1>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                {subtopic.description}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-4">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              ~{(subtopic.estimatedMins || 15) + 55} min total
            </span>
            <span className="flex items-center gap-1.5">
              <Target className="h-4 w-4" />
              80+ practice questions
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4" />
              200+ vocabulary words
            </span>
            <span className="flex items-center gap-1.5">
              <Mic className="h-4 w-4" />
              Type OR Speak answers
            </span>
          </div>

          {/* Completion status banner */}
          {isFullyComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4"
            >
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <div>
                <p className="font-semibold text-emerald-700 dark:text-emerald-300">
                  Subtopic Complete! 🎉
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  You've finished all 4 sections. Great job! Move on to the next subtopic.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* ── Section Cards Grid ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
        >
          {sections.map((section) => {
            // Check if this section is completed
            const isCompleted = completedSections.includes(section.completedActivity);
            // Icon component
            const Icon = section.icon;

            return (
              <motion.div key={section.key} variants={cardVariants}>
                <Link href={section.route} className="group block h-full">
                  <div
                    className={cn(
                      // Base card styles
                      "relative h-full rounded-2xl border p-6 transition-all duration-300",
                      // Section-specific border and hover bg
                      section.borderColor,
                      section.hoverBg,
                      // Lift on hover
                      "hover:-translate-y-1 hover:shadow-xl",
                      // Completed state
                      isCompleted && "opacity-80"
                    )}
                  >
                    {/* Completed checkmark badge */}
                    {isCompleted && (
                      <div className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    )}

                    {/* Section icon */}
                    <div
                      className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                        section.iconBg,
                        section.iconColor
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Section header */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        {/* Section label */}
                        <h3 className="text-lg font-bold text-foreground">
                          {section.label}
                        </h3>
                        {/* Stats badge */}
                        <span className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-semibold",
                          section.iconBg,
                          section.iconColor
                        )}>
                          {section.stats}
                        </span>
                      </div>
                      {/* Time estimate */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Clock className="h-3 w-3" />
                        {section.timeEst}
                        {isCompleted && (
                          <span className="ml-2 text-emerald-600 dark:text-emerald-400 font-medium">
                            ✓ Completed
                          </span>
                        )}
                      </div>
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                    </div>

                    {/* Feature list */}
                    <ul className="space-y-1.5 mb-4">
                      {section.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          {/* Bullet */}
                          <span className={cn("mt-0.5 h-1.5 w-1.5 rounded-full shrink-0", section.iconBg.replace("/15", ""))}>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA arrow */}
                    <div className={cn(
                      "flex items-center gap-1 text-sm font-semibold transition-all duration-300",
                      section.iconColor,
                      "group-hover:gap-2"
                    )}>
                      {isCompleted ? "Review Again" : "Start"} →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Recommended Learning Path ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl border border-border bg-card/50 p-6 mb-8"
        >
          <h2 className="font-bold text-base text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Recommended Learning Path
          </h2>
          {/* Path steps */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { label: "1. Learn", icon: BookOpen, color: "bg-indigo-500" },
              { label: "→", icon: null, color: "" },
              { label: "2. Vocabulary", icon: Star, color: "bg-purple-500" },
              { label: "→", icon: null, color: "" },
              { label: "3. Practice", icon: Target, color: "bg-emerald-500" },
              { label: "→", icon: null, color: "" },
              { label: "4. Test", icon: Trophy, color: "bg-amber-500" },
            ].map((step, i) => {
              // Render arrow separators differently
              if (!step.icon) {
                return <span key={i} className="text-muted-foreground text-lg shrink-0">→</span>;
              }
              const StepIcon = step.icon;
              return (
                <div key={i} className="flex items-center gap-1.5 shrink-0">
                  <div className={cn("flex h-7 w-7 items-center justify-center rounded-lg text-white shrink-0", step.color)}>
                    <StepIcon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{step.label}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Follow this order for best results: Learn the concept first, then build vocabulary, practice with questions, and finally test yourself.
          </p>
        </motion.div>
      </div>

      {/* ── Fixed Bottom Navigation ────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Previous navigation */}
            <Link
              href={prevUrl}
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">
                {prevSubtopicId ? "Previous Subtopic" : `Day ${dayNumber}`}
              </span>
              <span className="sm:hidden">Back</span>
            </Link>

            {/* Start Learning CTA */}
            <Link
              href={`${baseUrl}/learn`}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 hover:shadow-xl hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <Play className="h-4 w-4" />
              {completedSections.includes("learn") ? "Continue Learning" : "Start Learning"}
            </Link>

            {/* Next navigation */}
            <Link
              href={nextUrl}
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all group"
            >
              <span className="hidden sm:inline">
                {nextSubtopicId ? "Next Subtopic" : nextTopicId ? "Next Topic" : `Day ${dayNumber}`}
              </span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
