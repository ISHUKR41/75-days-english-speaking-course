"use client";
// ============================================================
// Learn Page Client - Full theory learning experience
// Shows rich lesson content: concept, rules, examples, story
// Features: GSAP animations, text-to-speech, section navigation
// Replaces the old "Learn" tab in SubtopicLesson
// ============================================================

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, BookOpen, Brain, Lightbulb,
  MessageSquare, AlertTriangle, Star, Volume2, VolumeX,
  CheckCircle2, GraduationCap, Briefcase, BookMarked,
  Users, ChevronDown, ChevronUp, Mic, Home, ChevronRight,
  Play, Trophy, Target, Zap, Clock, RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { TopicConfig, SubtopicConfig } from "@/data/course-content/days-config";
import { LessonContent } from "@/components/learning/lesson-content";

// ─── Props Interface ──────────────────────────────────────────
interface LearnPageClientProps {
  dayNumber: number;
  dayTitle: string;
  dayEmoji: string;
  topic: TopicConfig;
  subtopic: SubtopicConfig;
  prevSubtopicId?: string;
  nextSubtopicId?: string;
  nextTopicId?: string;
  nextTopicFirstSubtopicId?: string;
  userId: string;
}

// ─── Section Progress Type ────────────────────────────────────
interface SectionProgress {
  content: boolean;
  complete: boolean;
}

// ─── Section tab config ───────────────────────────────────────
const SECTION_TABS = [
  {
    id: "learn" as const,
    label: "Learn",
    icon: BookOpen,
    color: "text-indigo-500",
    activeBg: "bg-indigo-500",
    hoverBg: "hover:bg-indigo-500/10 hover:border-indigo-500/30",
    hoverText: "hover:text-indigo-600",
  },
  {
    id: "vocab" as const,
    label: "Vocabulary",
    icon: Star,
    color: "text-purple-500",
    activeBg: "bg-purple-500",
    hoverBg: "hover:bg-purple-500/10 hover:border-purple-500/30",
    hoverText: "hover:text-purple-600",
  },
  {
    id: "practice" as const,
    label: "Practice",
    icon: Target,
    color: "text-emerald-500",
    activeBg: "bg-emerald-500",
    hoverBg: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
    hoverText: "hover:text-emerald-600",
  },
  {
    id: "test" as const,
    label: "Test",
    icon: Trophy,
    color: "text-amber-500",
    activeBg: "bg-amber-500",
    hoverBg: "hover:bg-amber-500/10 hover:border-amber-500/30",
    hoverText: "hover:text-amber-600",
  },
] as const;

// ============================================================
// Main Component: LearnPageClient
// ============================================================
export function LearnPageClient({
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
}: LearnPageClientProps) {
  const router = useRouter();

  const [isComplete, setIsComplete] = useState(false);
  const [showCompleteAnim, setShowCompleteAnim] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  // Track reading progress based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const progress = Math.min(100, (scrollTop / (scrollHeight - clientHeight)) * 100);
      setReadingProgress(progress);
    };

    const el = contentRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    return () => { if (el) el.removeEventListener("scroll", handleScroll); };
  }, [isComplete]);

  // ── Text-to-Speech ─────────────────────────────────────────
  const speak = useCallback((text: string) => {
    if (!ttsEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [ttsEnabled]);

  // Stop TTS on unmount
  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  // ── Mark lesson as complete ───────────────────────────────
  const handleComplete = useCallback(async () => {
    setIsComplete(true);
    setShowCompleteAnim(true);
    try {
      await fetch("/api/progress/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dayNumber,
          subtopicId: subtopic.id,
          type: "learn",
          score: 100,
          xpEarned: 25,
          correct: 1,
          total: 1,
        }),
      });
    } catch (e) {
      console.warn("Progress save failed:", e);
    }
    setTimeout(() => setShowCompleteAnim(false), 3000);
  }, [dayNumber, subtopic.id]);

  // ── Navigation URLs ───────────────────────────────────────
  const baseUrl = `/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`;
  const vocabUrl = `${baseUrl}/vocabulary`;
  const practiceUrl = `${baseUrl}/practice`;
  const testUrl = `${baseUrl}/test`;
  const subtopicUrl = baseUrl;
  const dayUrl = `/day/${dayNumber}`;

  const prevUrl = prevSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${prevSubtopicId}/learn`
    : null;
  const nextUrl = nextSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${nextSubtopicId}/learn`
    : nextTopicId && nextTopicFirstSubtopicId
    ? `/day/${dayNumber}/topic/${nextTopicId}/subtopic/${nextTopicFirstSubtopicId}/learn`
    : null;

  const estimatedMins = subtopic.estimatedMins || 15;

  // ── Section tab URLs ──────────────────────────────────────
  const tabUrls = {
    learn: `${baseUrl}/learn`,
    vocab: vocabUrl,
    practice: practiceUrl,
    test: testUrl,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Reading Progress Bar ─────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-muted/50">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ── Top Navigation Bar ─────────────────────────────── */}
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Breadcrumb */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground overflow-hidden">
              <Link
                href={dayUrl}
                className="flex items-center gap-1 hover:text-foreground transition-colors shrink-0 hover:bg-accent rounded-md px-1.5 py-0.5"
              >
                <Home className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-xs">Day {dayNumber}</span>
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0 opacity-40" />
              <span className="hidden md:inline truncate max-w-[100px] text-xs" title={topic.title}>
                {topic.emoji} {topic.title}
              </span>
              <ChevronRight className="h-3 w-3 shrink-0 hidden md:block opacity-40" />
              <span className="truncate max-w-[140px] text-xs font-semibold text-foreground" title={subtopic.title}>
                {subtopic.emoji} {subtopic.title}
              </span>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Estimated time */}
              <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                {estimatedMins} min
              </span>

              {/* TTS toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setTtsEnabled((prev) => !prev);
                  if (isSpeaking) window.speechSynthesis?.cancel();
                }}
                className={cn(
                  "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full transition-all border",
                  ttsEnabled
                    ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
                    : "bg-muted text-muted-foreground border-border/40"
                )}
                title={ttsEnabled ? "Turn off audio" : "Turn on audio"}
              >
                {ttsEnabled ? (
                  <Volume2 className={cn("h-3.5 w-3.5", isSpeaking && "animate-pulse")} />
                ) : (
                  <VolumeX className="h-3.5 w-3.5" />
                )}
                <span className="hidden sm:inline">Audio</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ─────────────────────────────── */}
      <div
        ref={contentRef}
        className="container mx-auto max-w-5xl px-4 py-6 pb-32"
      >
        {/* ── Page Header ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          {/* Section indicator pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 mb-4">
            <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
              Learn &amp; Understand
            </span>
            {isComplete && (
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            )}
          </div>

          {/* Subtopic title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="text-3xl">{subtopic.emoji}</span>
            {subtopic.title}
          </h1>

          {/* Subtopic description */}
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            {subtopic.description}
          </p>

          {/* ── Section navigation tabs ── */}
          <div className="flex flex-wrap gap-2 p-1 bg-muted/40 rounded-xl border border-border/50 w-fit">
            {SECTION_TABS.map((tab) => {
              const isActive = tab.id === "learn";
              const href = tabUrls[tab.id];

              if (isActive) {
                return (
                  <span
                    key={tab.id}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm",
                      tab.activeBg
                    )}
                  >
                    <tab.icon className="h-3.5 w-3.5" />
                    {tab.label}
                  </span>
                );
              }

              return (
                <Link
                  key={tab.id}
                  href={href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg border border-transparent px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-200",
                    tab.hoverBg, tab.hoverText
                  )}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* ── Lesson Content ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <LessonContent
            dayNumber={dayNumber}
            topicId={topic.id}
            subtopicId={subtopic.id}
            subtopicTitle={subtopic.title}
            topicColor={topic.color}
            onComplete={handleComplete}
          />
        </motion.div>

        {/* ── Completion Banner ───────────────────────────── */}
        <AnimatePresence>
          {showCompleteAnim && (
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-emerald-500 px-6 py-4 text-white shadow-2xl shadow-emerald-500/40"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <CheckCircle2 className="h-6 w-6" />
                </motion.div>
                <div>
                  <p className="font-bold">Lesson Complete! 🎉</p>
                  <p className="text-xs text-emerald-100">+25 XP earned. Great job!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── What to do next ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15">
              <Zap className="h-4 w-4 text-amber-500" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Ready for more? Continue here:</h2>
          </div>

          {/* Next step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Vocabulary Card */}
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={vocabUrl} className="group block h-full">
                <div className="h-full rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/10">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400"
                  >
                    <Star className="h-5 w-5" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1">Vocabulary</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Learn 200+ unique words for this topic with Hindi meanings and audio
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                    Start <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Practice Card */}
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={practiceUrl} className="group block h-full">
                <div className="h-full rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/10">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                  >
                    <Target className="h-5 w-5" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1">Practice</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Answer 80+ questions by typing or speaking — both modes supported
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                    Start <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Test Card */}
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={testUrl} className="group block h-full">
                <div className="h-full rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/10">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400"
                  >
                    <Trophy className="h-5 w-5" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1">Test Yourself</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    50-question graded test — need 80%+ to pass and unlock next content
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:gap-2 transition-all">
                    Take Test <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Fixed Bottom Navigation ──────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Previous button */}
            {prevUrl ? (
              <Link
                href={prevUrl}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <motion.span whileHover={{ x: -3 }} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Previous</span>
                </motion.span>
              </Link>
            ) : (
              <Link
                href={dayUrl}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <motion.span whileHover={{ x: -3 }} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Day {dayNumber}</span>
                </motion.span>
              </Link>
            )}

            {/* Center: Mark as complete */}
            <motion.button
              onClick={handleComplete}
              disabled={isComplete}
              whileHover={isComplete ? {} : { scale: 1.04, y: -1 }}
              whileTap={isComplete ? {} : { scale: 0.96 }}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all",
                isComplete
                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 cursor-default"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/25"
              )}
            >
              {isComplete ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Completed!
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  I Understood This
                </>
              )}
            </motion.button>

            {/* Next button */}
            {nextUrl ? (
              <Link
                href={nextUrl}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <motion.span whileHover={{ x: 3 }} className="flex items-center gap-2">
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            ) : (
              <Link
                href={vocabUrl}
                className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-colors group"
              >
                <motion.span whileHover={{ x: 3 }} className="flex items-center gap-2">
                  <span className="hidden sm:inline">Vocabulary</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
