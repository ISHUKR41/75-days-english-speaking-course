"use client";
// ============================================================
// SubtopicLessonPage - The full lesson experience
// 4 tabs: Learn | Vocabulary | Practice | Test
// Premium design with Framer Motion animations
// Handles null/loading states gracefully
// ============================================================
import { useState, useCallback } from "react"; // React state and memoization
import Link from "next/link"; // Next.js client-side navigation
import { motion, AnimatePresence } from "framer-motion"; // Animation library
import {
  ArrowLeft, // Left arrow icon
  ArrowRight, // Right arrow icon
  BookOpen, // Book icon for Learn tab
  ChevronRight, // Breadcrumb separator
  Star, // Star icon for Vocabulary tab
  Target, // Target icon for Practice tab
  Trophy, // Trophy icon for Test tab
  Zap, // Lightning bolt for XP
  AlertCircle, // Warning icon for errors
} from "lucide-react";
import { cn } from "@/lib/utils"; // CSS class merge utility
import { PracticeSection } from "@/components/practice/practice-section"; // Practice questions component
import { TestSection } from "@/components/learning/test-section"; // Test component
import { LearnTab } from "@/components/learning/learn-tab"; // Learn content component
import { VocabTab } from "@/components/learning/vocab-tab"; // Vocabulary component

// ─── Types ────────────────────────────────────────────────────────────────────
// Props passed from the server component page
interface SubtopicLessonPageProps {
  dayNumber: number; // Which day (1-75) we are on
  dayTitle: string; // Display title for the day (e.g. "Self Introduction")
  topicId: string; // The parent topic ID (for navigation URLs)
  subtopicId: string; // The current subtopic ID
  subtopicData: SubtopicData | null; // Full subtopic from API (null if not found)
  prevSubtopicId?: string; // Previous subtopic ID (for ← button)
  nextSubtopicId?: string; // Next subtopic ID (for → button)
  prevTopicId?: string; // Previous subtopic's topic (for URL construction)
  nextTopicId?: string; // Next subtopic's topic (for URL construction)
  userId: string; // Clerk user ID for tracking progress
}

// Full subtopic shape from the API
interface SubtopicData {
  id: string; // Subtopic unique ID
  topicId: string; // Parent topic ID
  title: string; // Display title (e.g. "Articles: A, An, The")
  description: string; // Short description
  emoji: string; // Emoji icon (e.g. "📖")
  estimatedMins: number; // Estimated reading/practice time
  content?: SubtopicContent | null; // Rich lesson content
  vocabulary?: VocabWord[]; // Vocabulary words for this subtopic
  practiceQuestions?: PracticeQ[]; // Practice questions (80-100)
  testQuestions?: TestQ[]; // Test questions (50)
  topic?: {
    title: string; // Parent topic title
    color: string; // Brand color for this topic
    emoji: string; // Topic emoji
  };
}

// Rich lesson content from the DB
interface SubtopicContent {
  whyLearnThis: string; // Motivation paragraph
  conceptExplanation: string; // Main explanation
  simpleExplanation: string; // ELI5 version
  hindiExplanation: string; // Hindi explanation
  rules: string; // Grammar rules (JSON string or plain text)
  exceptions: string; // Exceptions to rules
  sentencePatterns: string; // Sentence structure patterns
  commonMistakes: string; // Common errors learners make
  advancedMistakes: string; // Advanced-level mistakes
  speakingTips: string; // Tips for speaking naturally
  pronunciationGuide: string; // Pronunciation guide
  memoryTricks: string; // Mnemonics and memory tricks
  professionalUsage: string; // Office/business context examples
  dailyUsage: string; // Everyday usage examples
  officeUsage: string; // Office-specific examples
  interviewUsage: string; // Interview context examples
  emailUsage: string; // Email writing examples
  businessUsage: string; // Business context examples
  story: string; // Short story using concepts
  essay: string; // Essay section
  dialogue: string; // Dialogue examples
  conversation: string; // Conversation templates
  summary: string; // Summary of key points
}

// Vocabulary word shape
interface VocabWord {
  id: string; // Word unique ID
  word: string; // The English word
  meaning: string; // English meaning
  hindiMeaning: string; // Hindi meaning
  ipa?: string | null; // IPA pronunciation
  partOfSpeech: string; // noun, verb, adjective, etc.
  difficulty: string; // BEGINNER / INTERMEDIATE / ADVANCED
  example1: string; // First example sentence
  example2: string; // Second example sentence
  example3?: string | null; // Optional third example
  officeExample?: string | null; // Office context example
  dailyExample?: string | null; // Daily life example
  synonyms: string; // Comma-separated synonyms
  antonyms: string; // Comma-separated antonyms
}

// Practice question shape
interface PracticeQ {
  id: string; // Question unique ID
  questionText: string; // The question (often in Hindi)
  questionType: string; // FILL_BLANK | MCQ | TRANSLATE | etc.
  difficulty: string; // BEGINNER | INTERMEDIATE | ADVANCED
  correctAnswer: string; // Expected answer
  explanation: string; // Why this is correct
  hindiExplanation?: string | null; // Hindi explanation
  optionA?: string | null; // MCQ option A
  optionB?: string | null; // MCQ option B
  optionC?: string | null; // MCQ option C
  optionD?: string | null; // MCQ option D
  points: number; // Points awarded for correct answer
}

// Test question shape (stricter — always has time limit)
interface TestQ {
  id: string; // Question unique ID
  questionText: string; // The question
  questionType: string; // MCQ | FILL_BLANK | TRANSLATE | etc.
  difficulty: string; // BEGINNER | INTERMEDIATE | ADVANCED
  correctAnswer: string; // Expected answer
  explanation: string; // Why this is correct
  optionA?: string | null; // MCQ option A
  optionB?: string | null; // MCQ option B
  optionC?: string | null; // MCQ option C
  optionD?: string | null; // MCQ option D
  timeLimit: number; // Seconds allowed per question
  points: number; // Points for correct answer
}

// ─── Tab definitions ──────────────────────────────────────────────────────────
type Tab = "learn" | "vocabulary" | "practice" | "test"; // Possible active tab values

// Configuration for each tab button
const TABS: { key: Tab; icon: React.ElementType; label: string; emoji: string }[] =
  [
    { key: "learn", icon: BookOpen, label: "Learn", emoji: "📖" }, // Theory and content
    { key: "vocabulary", icon: Star, label: "Vocabulary", emoji: "📚" }, // Word cards
    { key: "practice", icon: Target, label: "Practice", emoji: "🎯" }, // Practice questions
    { key: "test", icon: Trophy, label: "Test", emoji: "🏆" }, // Timed test
  ];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 20 }, // Start invisible and below
  animate: { opacity: 1, y: 0 }, // Animate to visible at position
  exit: { opacity: 0, y: -10 }, // Exit upwards
  transition: { duration: 0.25 }, // Quarter-second transition
};

// ─── Component ────────────────────────────────────────────────────────────────
export function SubtopicLessonPage({
  dayNumber,
  dayTitle,
  topicId,
  subtopicId,
  subtopicData,
  prevSubtopicId,
  nextSubtopicId,
  prevTopicId,
  nextTopicId,
  userId,
}: SubtopicLessonPageProps) {
  // Track which tab is currently active
  const [activeTab, setActiveTab] = useState<Tab>("learn");

  // Track XP earned during this session for the XP badge
  const [sessionXp, setSessionXp] = useState(0);

  // Track whether the full lesson is complete (test finished)
  const [lessonComplete, setLessonComplete] = useState(false);

  // Handle practice completion — award XP and move to test tab
  const handlePracticeComplete = useCallback(
    (accuracy: number) => {
      const xpAwarded = Math.floor(accuracy * 0.8); // XP proportional to accuracy
      setSessionXp((prev) => prev + xpAwarded); // Add to session total
      setActiveTab("test"); // Automatically advance to test tab
    },
    [] // No dependencies — stable reference
  );

  // Handle test completion — mark lesson done, add XP
  const handleTestComplete = useCallback(
    (score: number, total: number) => {
      const pct = total > 0 ? Math.round((score / total) * 100) : 0; // Percentage score
      const xpAwarded = Math.floor(pct * 1.5); // Bonus XP for test
      setSessionXp((prev) => prev + xpAwarded); // Add to session XP
      setLessonComplete(true); // Mark lesson as finished
    },
    [] // Stable callback
  );

  // ─── Build navigation URLs ─────────────────────────────────────────────────
  // Previous button: go to prev subtopic, or back to day page if at start
  const prevUrl = prevSubtopicId
    ? `/day/${dayNumber}/topic/${prevTopicId || topicId}/subtopic/${prevSubtopicId}` // Prev subtopic
    : `/day/${dayNumber}`; // Fall back to day overview

  // Next button: go to next subtopic, or back to day page if at end
  const nextUrl = nextSubtopicId
    ? `/day/${dayNumber}/topic/${nextTopicId || topicId}/subtopic/${nextSubtopicId}` // Next subtopic
    : `/day/${dayNumber}`; // Fall back to day overview

  // Extract convenience variables from subtopicData
  const topicColor = subtopicData?.topic?.color || "#6272f1"; // Default brand color
  const topicTitle = subtopicData?.topic?.title || "Topic"; // Default topic title
  const subtopicTitle = subtopicData?.title || "Lesson"; // Default subtopic title

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16"> {/* Max width container with bottom padding */}

      {/* ── Breadcrumb navigation ── */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }} // Start above position
        animate={{ opacity: 1, y: 0 }} // Animate to natural position
        transition={{ duration: 0.3 }} // Smooth 300ms transition
        className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap" // Wrap on small screens
        aria-label="Breadcrumb" // Accessibility label
      >
        <Link href="/dashboard" className="hover:text-foreground transition-colors"> {/* Dashboard link */}
          Dashboard
        </Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0" /> {/* Separator */}
        <Link href={`/day/${dayNumber}`} className="hover:text-foreground transition-colors"> {/* Day link */}
          Day {dayNumber}: {dayTitle}
        </Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0" /> {/* Separator */}
        <span className="text-foreground font-medium truncate max-w-[200px]"> {/* Current page */}
          {subtopicTitle}
        </span>
      </motion.nav>

      {/* ── Lesson header card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} // Start below position
        animate={{ opacity: 1, y: 0 }} // Slide up to position
        transition={{ duration: 0.4 }} // Smooth entrance
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-card" // Card styling
      >
        {/* Colored header with gradient background */}
        <div
          className="p-5 md:p-6" // Responsive padding
          style={{
            background: `linear-gradient(135deg, ${topicColor}18, transparent 70%)`, // Subtle gradient tint
          }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap"> {/* Responsive flex layout */}
            {/* Left: emoji, topic, title, description */}
            <div className="flex items-center gap-4">
              {/* Emoji icon with colored background */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shrink-0" // Large emoji container
                style={{ backgroundColor: `${topicColor}20` }} // 20% opacity tint
              >
                {subtopicData?.emoji || "📖"} {/* Subtopic emoji with fallback */}
              </div>
              {/* Text info */}
              <div>
                {/* Topic label */}
                <span
                  className="text-xs font-semibold uppercase tracking-widest" // Small caps label
                  style={{ color: topicColor }} // Topic brand color
                >
                  {topicTitle} {/* Parent topic name */}
                </span>
                {/* Main title */}
                <h1 className="text-xl md:text-2xl font-black text-foreground mt-0.5"> {/* Bold heading */}
                  {subtopicTitle} {/* Subtopic title */}
                </h1>
                {/* Description */}
                <p className="text-sm text-muted-foreground mt-1 max-w-md"> {/* Muted description */}
                  {subtopicData?.description || "Master this topic with interactive lessons"} {/* With fallback */}
                </p>
              </div>
            </div>

            {/* Right: session XP badge + estimated time */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              {/* XP earned badge — only shows after earning XP */}
              {sessionXp > 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }} // Start collapsed
                  animate={{ scale: 1, opacity: 1 }} // Bounce in
                  transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring animation
                  className="flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1.5" // Gold badge
                >
                  <Zap className="h-4 w-4 text-amber-500" /> {/* Lightning bolt icon */}
                  <span className="text-sm font-bold text-amber-500">+{sessionXp} XP</span> {/* XP total */}
                </motion.div>
              )}
              {/* Estimated time badge */}
              <span className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1"> {/* Muted pill */}
                ~{subtopicData?.estimatedMins || 15} min {/* Estimated duration */}
              </span>
            </div>
          </div>
        </div>

        {/* ── Tab navigation bar ── */}
        <div
          className="flex border-t border-border overflow-x-auto scrollbar-hide" // Horizontal scroll on mobile
          role="tablist" // ARIA tablist role
        >
          {TABS.map((tab) => (
            <button
              key={tab.key} // Unique key for React reconciliation
              onClick={() => setActiveTab(tab.key)} // Switch active tab
              role="tab" // ARIA tab role
              aria-selected={activeTab === tab.key} // ARIA selected state
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 py-3 px-2 text-sm font-medium", // Base tab styles
                "transition-all duration-200 border-b-2 whitespace-nowrap shrink-0 min-w-[80px]", // Prevent wrap
                activeTab === tab.key
                  ? "border-primary text-primary bg-primary/5" // Active: colored border + tint
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent" // Inactive: hover only
              )}
            >
              <span className="text-base leading-none" aria-hidden="true">{tab.emoji}</span> {/* Tab emoji */}
              <span className="hidden sm:inline">{tab.label}</span> {/* Label hidden on very small screens */}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── Tab content area ── */}
      <AnimatePresence mode="wait"> {/* Wait for exit animation before entering */}
        <motion.div
          key={activeTab} // Re-mount when tab changes for animation
          {...fadeUp} // Apply fade-up animation
        >
          {/* LEARN TAB */}
          {activeTab === "learn" && (
            <LearnTab
              content={subtopicData?.content || null} // Lesson content (null → skeleton)
              subtopicTitle={subtopicTitle} // Pass title for headings
              topicColor={topicColor} // Pass color for accents
              onComplete={() => setActiveTab("vocabulary")} // Advance to vocabulary tab
            />
          )}

          {/* VOCABULARY TAB */}
          {activeTab === "vocabulary" && (
            <VocabTab
              words={subtopicData?.vocabulary || []} // Vocabulary words array
              subtopicTitle={subtopicTitle} // For heading
              onComplete={() => setActiveTab("practice")} // Advance to practice
            />
          )}

          {/* PRACTICE TAB */}
          {activeTab === "practice" && (
            <PracticeSection
              dayNumber={dayNumber} // Day number for question loading
              subtopicId={subtopicId} // Subtopic ID for filtering
              subtopicTitle={subtopicTitle} // Display title
              topicColor={topicColor} // Accent color
              userId={userId} // User ID for answer tracking
              onComplete={handlePracticeComplete} // Advance to test on completion
            />
          )}

          {/* TEST TAB */}
          {activeTab === "test" && (
            <TestSection
              subtopicId={subtopicId} // Subtopic ID for test questions
              subtopicTitle={subtopicTitle} // Display title
              topicColor={topicColor} // Accent color
              userId={userId} // User ID for result tracking
              onComplete={handleTestComplete} // Callback with score + total
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Lesson navigation (prev/next buttons) ── */}
      <motion.div
        initial={{ opacity: 0 }} // Fade in after content loads
        animate={{ opacity: 1 }} // Become visible
        transition={{ delay: 0.4 }} // Slight delay so content appears first
        className="flex items-center justify-between gap-4 pt-4 border-t border-border" // Spaced row with top border
      >
        {/* Previous button */}
        <Link
          href={prevUrl} // Navigate to previous subtopic or day
          className="btn-secondary flex items-center gap-2" // Secondary button styles
        >
          <ArrowLeft className="h-4 w-4" /> {/* Left arrow icon */}
          <span className="hidden sm:inline">Previous</span> {/* Label hidden on mobile */}
        </Link>

        {/* Tab progress dots */}
        <div className="flex gap-2 items-center" role="tablist"> {/* Dot navigation */}
          {TABS.map((tab) => (
            <button
              key={tab.key} // Unique key
              onClick={() => setActiveTab(tab.key)} // Navigate to tab on click
              aria-label={`Go to ${tab.label} tab`} // Accessibility label
              className={cn(
                "h-2 rounded-full transition-all duration-300", // Pill shape
                activeTab === tab.key
                  ? "w-6 bg-primary" // Active: wider and colored
                  : "w-2 bg-border hover:bg-muted-foreground" // Inactive: small dot
              )}
            />
          ))}
        </div>

        {/* Next button */}
        <Link
          href={nextUrl} // Navigate to next subtopic or day
          className="btn-primary flex items-center gap-2" // Primary button styles
        >
          <span className="hidden sm:inline">Next</span> {/* Label hidden on mobile */}
          <ArrowRight className="h-4 w-4" /> {/* Right arrow icon */}
        </Link>
      </motion.div>
    </div>
  );
}
