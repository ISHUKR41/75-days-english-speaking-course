"use client";
// ============================================================
// Learn Page Client - Full theory learning experience
// Shows rich lesson content: concept, rules, examples, story
// Features: GSAP animations, text-to-speech, section navigation
// Replaces the old "Learn" tab in SubtopicLesson
// ============================================================

// React core imports for state, effects, and refs
import { useState, useCallback, useRef, useEffect } from "react";
// Next.js navigation for routing between section pages
import Link from "next/link";
import { useRouter } from "next/navigation";
// Framer Motion for smooth animations
import { motion, AnimatePresence } from "framer-motion";
// Lucide icons for visual UI elements
import {
  ArrowLeft, ArrowRight, BookOpen, Brain, Lightbulb,
  MessageSquare, AlertTriangle, Star, Volume2, VolumeX,
  CheckCircle2, GraduationCap, Briefcase, BookMarked,
  Users, ChevronDown, ChevronUp, Mic, Home, ChevronRight,
  Play, Trophy, Target, Zap, Clock, RotateCcw,
} from "lucide-react";
// Utility function for conditional class names
import { cn } from "@/lib/utils";
// Static course configuration types
import type { TopicConfig, SubtopicConfig } from "@/data/course-content/days-config";
// Lesson content component (the actual teaching content)
import { LessonContent } from "@/components/learning/lesson-content";

// ─── Props Interface ──────────────────────────────────────────
// Defines what data this component receives from the server page
interface LearnPageClientProps {
  dayNumber: number;           // Current day (1-75)
  dayTitle: string;            // Day title (e.g., "Basic of English")
  dayEmoji: string;            // Day emoji for visual appeal
  topic: TopicConfig;          // Current topic configuration
  subtopic: SubtopicConfig;    // Current subtopic configuration
  prevSubtopicId?: string;     // Previous subtopic ID for navigation
  nextSubtopicId?: string;     // Next subtopic ID for navigation
  nextTopicId?: string;        // Next topic ID for navigation
  nextTopicFirstSubtopicId?: string; // First subtopic of next topic
  userId: string;              // Current user ID for progress tracking
}

// ─── Section Progress Type ────────────────────────────────────
// Tracks which sections of the lesson the user has viewed
interface SectionProgress {
  content: boolean;    // Whether user has scrolled through content
  complete: boolean;   // Whether user has clicked "I Understood"
}

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
  // ── Router for programmatic navigation ──────────────────────
  const router = useRouter();

  // ── State: Track lesson completion ──────────────────────────
  // Whether user has marked this lesson as understood
  const [isComplete, setIsComplete] = useState(false);
  // Whether the completion animation is showing
  const [showCompleteAnim, setShowCompleteAnim] = useState(false);
  // Text-to-speech enabled/disabled toggle
  const [ttsEnabled, setTtsEnabled] = useState(true);
  // Whether TTS is currently speaking
  const [isSpeaking, setIsSpeaking] = useState(false);
  // Progress through the lesson (0-100)
  const [readingProgress, setReadingProgress] = useState(0);

  // ── Scroll tracking for progress bar ─────────────────────────
  // Reference to the main content area for scroll tracking
  const contentRef = useRef<HTMLDivElement>(null);

  // Track reading progress based on scroll position
  useEffect(() => {
    // Function to calculate how far user has scrolled through content
    const handleScroll = () => {
      if (!contentRef.current) return;
      // Get scroll position and total scrollable height
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      // Calculate percentage scrolled (capped at 100)
      const progress = Math.min(100, (scrollTop / (scrollHeight - clientHeight)) * 100);
      // Update progress state
      setReadingProgress(progress);
      // Auto-enable completion after reading 80% of content
      if (progress >= 80 && !isComplete) {
        // Just enable the button, don't auto-complete
      }
    };

    // Add scroll listener to the content div
    const el = contentRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup listener on unmount
    return () => { if (el) el.removeEventListener("scroll", handleScroll); };
  }, [isComplete]);

  // ── Text-to-Speech function ───────────────────────────────────
  // Speaks the given text using Web Speech API
  const speak = useCallback((text: string) => {
    // Check if TTS is enabled and browser supports it
    if (!ttsEnabled || !window.speechSynthesis) return;
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    // Create utterance with the provided text
    const utterance = new SpeechSynthesisUtterance(text);
    // Set language to English
    utterance.lang = "en-US";
    // Set a comfortable reading speed
    utterance.rate = 0.9;
    // Set pitch to natural sounding
    utterance.pitch = 1.0;
    // Track speaking state
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    // Start speaking
    window.speechSynthesis.speak(utterance);
  }, [ttsEnabled]);

  // ── Stop TTS on unmount ───────────────────────────────────────
  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  // ── Mark lesson as complete ───────────────────────────────────
  // Saves progress and shows completion animation
  const handleComplete = useCallback(async () => {
    // Mark as complete in local state
    setIsComplete(true);
    // Show celebration animation
    setShowCompleteAnim(true);
    // Save progress to API (non-blocking)
    try {
      await fetch("/api/progress/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dayNumber,
          subtopicId: subtopic.id,
          type: "learn",
          score: 100,
          xpEarned: 25, // 25 XP for completing the theory
          correct: 1,
          total: 1,
        }),
      });
    } catch (e) {
      // Non-blocking: progress save failures don't affect user experience
      console.warn("Progress save failed:", e);
    }
    // Hide animation after 3 seconds
    setTimeout(() => setShowCompleteAnim(false), 3000);
  }, [dayNumber, subtopic.id]);

  // ── Build navigation URLs ─────────────────────────────────────
  // Base URL for this subtopic
  const baseUrl = `/day/${dayNumber}/topic/${topic.id}/subtopic/${subtopic.id}`;
  // URL for the vocabulary section
  const vocabUrl = `${baseUrl}/vocabulary`;
  // URL for the practice section
  const practiceUrl = `${baseUrl}/practice`;
  // URL for the test section
  const testUrl = `${baseUrl}/test`;
  // URL to go back to the subtopic overview
  const subtopicUrl = baseUrl;
  // URL to go back to the day page
  const dayUrl = `/day/${dayNumber}`;

  // ── Next/Previous navigation ──────────────────────────────────
  // URL for previous subtopic's learn page
  const prevUrl = prevSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${prevSubtopicId}/learn`
    : null;
  // URL for next subtopic or next topic
  const nextUrl = nextSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${nextSubtopicId}/learn`
    : nextTopicId && nextTopicFirstSubtopicId
    ? `/day/${dayNumber}/topic/${nextTopicId}/subtopic/${nextTopicFirstSubtopicId}/learn`
    : null;

  // ── Estimated reading time ─────────────────────────────────────
  // Calculate based on subtopic's estimated minutes
  const estimatedMins = subtopic.estimatedMins || 15;

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-background">
      {/* ── Reading Progress Bar at top of page ─────────────── */}
      {/* Shows how far user has scrolled through content */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ── Top Navigation Bar ──────────────────────────────── */}
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-between">
            {/* Left: Back navigation and breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-hidden">
              {/* Home link */}
              <Link href={dayUrl} className="flex items-center gap-1 hover:text-foreground transition-colors shrink-0">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Day {dayNumber}</span>
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              {/* Topic name */}
              <span className="hidden md:inline truncate max-w-[120px]" title={topic.title}>
                {topic.emoji} {topic.title}
              </span>
              <ChevronRight className="h-3 w-3 shrink-0 hidden md:block" />
              {/* Subtopic name (current) */}
              <span className="truncate max-w-[150px] font-medium text-foreground" title={subtopic.title}>
                {subtopic.emoji} {subtopic.title}
              </span>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Estimated time badge */}
              <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                {estimatedMins} min
              </span>

              {/* TTS toggle button */}
              <button
                onClick={() => {
                  setTtsEnabled((prev) => !prev);
                  if (isSpeaking) window.speechSynthesis?.cancel();
                }}
                className={cn(
                  "flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-colors",
                  ttsEnabled
                    ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    : "bg-muted text-muted-foreground"
                )}
                title={ttsEnabled ? "Turn off audio" : "Turn on audio"}
              >
                {ttsEnabled ? (
                  <Volume2 className={cn("h-3 w-3", isSpeaking && "animate-pulse")} />
                ) : (
                  <VolumeX className="h-3 w-3" />
                )}
                <span className="hidden sm:inline">Audio</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ────────────────────────────────── */}
      <div
        ref={contentRef}
        className="container mx-auto max-w-5xl px-4 py-6 pb-32"
      >
        {/* ── Page Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Section indicator pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 mb-4">
            <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
              Learn &amp; Understand
            </span>
          </div>

          {/* Subtopic title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="text-3xl">{subtopic.emoji}</span>
            {subtopic.title}
          </h1>

          {/* Subtopic description */}
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            {subtopic.description}
          </p>

          {/* Section navigation pills */}
          <div className="flex flex-wrap gap-2">
            {/* Learn (current - active) */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
              <BookOpen className="h-3 w-3" />
              Learn
            </span>
            {/* Vocabulary link */}
            <Link
              href={vocabUrl}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted hover:bg-purple-500/10 border border-border hover:border-purple-500/30 px-3 py-1 text-xs font-semibold text-muted-foreground hover:text-purple-600 transition-all"
            >
              <Star className="h-3 w-3" />
              Vocabulary
            </Link>
            {/* Practice link */}
            <Link
              href={practiceUrl}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted hover:bg-emerald-500/10 border border-border hover:border-emerald-500/30 px-3 py-1 text-xs font-semibold text-muted-foreground hover:text-emerald-600 transition-all"
            >
              <Target className="h-3 w-3" />
              Practice
            </Link>
            {/* Test link */}
            <Link
              href={testUrl}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted hover:bg-amber-500/10 border border-border hover:border-amber-500/30 px-3 py-1 text-xs font-semibold text-muted-foreground hover:text-amber-600 transition-all"
            >
              <Trophy className="h-3 w-3" />
              Test
            </Link>
          </div>
        </motion.div>

        {/* ── Lesson Content ──────────────────────────────────── */}
        {/* This is the main rich content from lesson-content.tsx */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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

        {/* ── Completion Banner ────────────────────────────────── */}
        {/* Shows after user marks lesson complete */}
        <AnimatePresence>
          {showCompleteAnim && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-emerald-500 px-6 py-4 text-white shadow-2xl shadow-emerald-500/30"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6" />
                <div>
                  <p className="font-bold">Lesson Complete! 🎉</p>
                  <p className="text-xs text-emerald-100">+25 XP earned. Great job!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── What to do next ──────────────────────────────────── */}
        {/* Section cards showing next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 mb-8"
        >
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Ready for more? Continue here:
          </h2>

          {/* Next step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Vocabulary Card */}
            <Link href={vocabUrl} className="group block">
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-1">Vocabulary</h3>
                <p className="text-xs text-muted-foreground">Learn 200+ unique words for this topic with Hindi meanings and audio</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                  Start →
                </div>
              </div>
            </Link>

            {/* Practice Card */}
            <Link href={practiceUrl} className="group block">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-1">Practice</h3>
                <p className="text-xs text-muted-foreground">Answer 80+ questions by typing or speaking — both modes supported</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Start →
                </div>
              </div>
            </Link>

            {/* Test Card */}
            <Link href={testUrl} className="group block">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-1">Test Yourself</h3>
                <p className="text-xs text-muted-foreground">50-question graded test — need 80%+ to pass and unlock next content</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  Take Test →
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Fixed Bottom Navigation ──────────────────────────── */}
      {/* Prev/Next navigation fixed at bottom of screen */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Previous subtopic button */}
            {prevUrl ? (
              <Link href={prevUrl} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Previous</span>
              </Link>
            ) : (
              <Link href={dayUrl} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Day {dayNumber}</span>
              </Link>
            )}

            {/* Center: Mark as complete button */}
            <button
              onClick={handleComplete}
              disabled={isComplete}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all",
                isComplete
                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 cursor-default"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
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
            </button>

            {/* Next subtopic button */}
            {nextUrl ? (
              <Link href={nextUrl} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link href={vocabUrl} className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-colors group">
                <span className="hidden sm:inline">Vocabulary</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
