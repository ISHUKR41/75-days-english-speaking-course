"use client";
// ============================================================
// Lesson Content - The main theory/learning section for a subtopic
// Shows: why learn, concept, rules, examples, mistakes, tips,
// memory tricks, professional usage, stories, dialogues, essays
// Dynamically loads content from day-specific content files
// ============================================================

import { useState, useMemo } from "react";
// Import animation library for smooth transitions
import { motion, AnimatePresence } from "framer-motion";
// Import icons from lucide-react for visual elements
import {
  AlertTriangle, BookOpen, Brain, CheckCircle2, ChevronDown,
  Lightbulb, MessageSquare, Star, Volume2, Zap, Briefcase,
  Home, GraduationCap, Sparkles, BookMarked, Users,
} from "lucide-react";
// Import utility for conditional class names
import { cn } from "@/lib/utils";
// Import content types and data loader from Day 1 content
import type { LessonContent as LessonContentType } from "@/data/course-content/day-1-content";
// Import the content retrieval function
import { getDay1LessonContent } from "@/data/course-content/day-1-content";

// ─── Props for this component ─────────────────────────────────
interface LessonContentProps {
  // The day number (1-75)
  dayNumber: number;
  // The topic ID (e.g., "d1-t1")
  topicId: string;
  // The subtopic ID (e.g., "d1-t1-s1")
  subtopicId: string;
  // The subtopic title for display
  subtopicTitle: string;
  // The topic's brand color
  topicColor: string;
  // Callback when user completes the lesson
  onComplete: () => void;
}

// ─── Section Types ───────────────────────────────────────────
// All the sections available in the lesson view
type Section =
  | "why"          // Why are we learning this topic
  | "concept"      // Full concept explanation
  | "rules"        // Grammar rules and structure
  | "examples"     // Sentence patterns and real examples
  | "mistakes"     // Common mistakes students make
  | "tips"         // Speaking tips and memory tricks
  | "professional" // Professional, office, interview usage
  | "story"        // Story using learned concepts
  | "dialogue"     // Dialogue between two people
  | "summary";     // Summary of everything learned

// ─── Section configuration ────────────────────────────────────
// Each section has an icon, label, and color for the tab button
const SECTIONS = [
  { key: "why" as Section, icon: Lightbulb, label: "Why Learn?", color: "text-amber-500", bg: "bg-amber-500/10" },
  { key: "concept" as Section, icon: Brain, label: "Concept", color: "text-purple-500", bg: "bg-purple-500/10" },
  { key: "rules" as Section, icon: BookOpen, label: "Rules", color: "text-blue-500", bg: "bg-blue-500/10" },
  { key: "examples" as Section, icon: MessageSquare, label: "Examples", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { key: "mistakes" as Section, icon: AlertTriangle, label: "Mistakes", color: "text-rose-500", bg: "bg-rose-500/10" },
  { key: "tips" as Section, icon: Star, label: "Tips", color: "text-gold-500", bg: "bg-gold-400/10" },
  { key: "professional" as Section, icon: Briefcase, label: "Pro Use", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { key: "story" as Section, icon: BookMarked, label: "Story", color: "text-pink-500", bg: "bg-pink-500/10" },
  { key: "dialogue" as Section, icon: Users, label: "Dialogue", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { key: "summary" as Section, icon: GraduationCap, label: "Summary", color: "text-teal-500", bg: "bg-teal-500/10" },
];

// ─── Main Component ──────────────────────────────────────────
export function LessonContent({
  dayNumber,
  topicId,
  subtopicId,
  subtopicTitle,
  topicColor,
  onComplete,
}: LessonContentProps) {
  // Track which section is currently active
  const [activeSection, setActiveSection] = useState<Section>("why");
  // Track which sections the user has read
  const [completedSections, setCompletedSections] = useState<Set<Section>>(new Set());
  // Toggle for showing Hindi translations
  const [showHindi, setShowHindi] = useState(false);

  // ── Load content dynamically based on day number ──
  // This loads the actual lesson content from the data files
  const content = useMemo(() => {
    // For Day 1, use the getDay1LessonContent function
    if (dayNumber === 1) {
      return getDay1LessonContent(subtopicId) || null;
    }
    // For other days, we'll add similar functions later
    // TODO: Add getDay2LessonContent, getDay3LessonContent, etc.
    return null;
  }, [dayNumber, subtopicId]);

  // Mark a section as read when user clicks on it
  const markComplete = (section: Section) => {
    // Create a new Set from the previous state and add the new section
    setCompletedSections(prev => {
      const newSet = new Set(Array.from(prev));
      newSet.add(section);
      return newSet;
    });
  };

  // Check if user has read all sections
  const allDone = completedSections.size >= SECTIONS.length;

  // ── Speak text using browser's speech synthesis ──
  // This makes the text-to-speech voice more friendly and natural
  const speakText = (text: string) => {
    // Check if the browser supports speech synthesis
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    // Cancel any currently speaking text
    window.speechSynthesis.cancel();
    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    // Set the voice properties for a friendly tone
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.1; // Slightly higher pitch for friendliness
    utterance.volume = 0.9; // Not too loud
    utterance.lang = "en-US"; // Use American English voice
    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  // ── If no content is available, show a placeholder ──
  if (!content) {
    return (
      <div className="space-y-6">
        {/* No content available card */}
        <div className="card-base rounded-2xl text-center p-8">
          {/* Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            {subtopicTitle}
          </h2>
          {/* Description - explains content is being loaded */}
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            This lesson content is being prepared by our team. 
            Content for this subtopic will be available soon with full theory, 
            examples, practice questions, and vocabulary.
          </p>
          {/* Continue button */}
          <button
            onClick={onComplete}
            className="btn-primary px-8 py-3 text-base"
          >
            <Zap className="h-5 w-5" />
            Continue to Vocabulary →
          </button>
        </div>
      </div>
    );
  }

  // ── Main render with full content ──
  return (
    <div className="space-y-6">
      {/* ── Section Navigation Tabs ── */}
      {/* Grid of clickable tabs for each section */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
        {SECTIONS.map(section => (
          <button
            key={section.key}
            onClick={() => {
              // Switch to this section
              setActiveSection(section.key);
              // Mark it as read
              markComplete(section.key);
            }}
            className={cn(
              // Base styles for all tabs
              "relative flex flex-col items-center gap-1 rounded-xl p-2 text-xs font-medium transition-all",
              // Active tab styling
              activeSection === section.key
                ? `${section.bg} ${section.color} border-2 border-current shadow-sm`
                : "border border-border text-muted-foreground hover:bg-accent"
            )}
          >
            {/* Section icon */}
            <section.icon className="h-4 w-4" />
            {/* Section label (hidden on very small screens) */}
            <span className="text-center leading-tight text-[10px] sm:text-xs">
              {section.label}
            </span>
            {/* Completed checkmark badge */}
            {completedSections.has(section.key) && (
              <CheckCircle2 className="absolute -top-1.5 -right-1.5 h-4 w-4 text-emerald-500 bg-background rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* ── Progress indicator ── */}
      {/* Shows how many sections the user has completed */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${(completedSections.size / SECTIONS.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {completedSections.size}/{SECTIONS.length} sections
        </span>
      </div>

      {/* ── Content Area ── */}
      {/* AnimatePresence handles smooth transitions between sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* WHY LEARN THIS section */}
          {activeSection === "why" && (
            <WhySection
              content={content}
              topicColor={topicColor}
              onSpeak={speakText}
            />
          )}

          {/* CONCEPT section */}
          {activeSection === "concept" && (
            <ConceptSection
              content={content}
              topicColor={topicColor}
              showHindi={showHindi}
              setShowHindi={setShowHindi}
              onSpeak={speakText}
            />
          )}

          {/* RULES section */}
          {activeSection === "rules" && (
            <RulesSection
              content={content}
              topicColor={topicColor}
            />
          )}

          {/* EXAMPLES section */}
          {activeSection === "examples" && (
            <ExamplesSection
              content={content}
              showHindi={showHindi}
              setShowHindi={setShowHindi}
              onSpeak={speakText}
            />
          )}

          {/* MISTAKES section */}
          {activeSection === "mistakes" && (
            <MistakesSection content={content} />
          )}

          {/* TIPS section */}
          {activeSection === "tips" && (
            <TipsSection content={content} />
          )}

          {/* PROFESSIONAL USAGE section */}
          {activeSection === "professional" && (
            <ProfessionalSection content={content} onSpeak={speakText} />
          )}

          {/* STORY section */}
          {activeSection === "story" && (
            <StorySection content={content} onSpeak={speakText} />
          )}

          {/* DIALOGUE section */}
          {activeSection === "dialogue" && (
            <DialogueSection content={content} onSpeak={speakText} />
          )}

          {/* SUMMARY section */}
          {activeSection === "summary" && (
            <SummarySection content={content} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Complete Lesson Button ── */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onComplete}
          className={cn(
            "btn-primary px-8 py-3 text-base gap-2",
            !allDone && "opacity-80"
          )}
        >
          <Zap className="h-5 w-5" />
          {allDone
            ? "Lesson Complete — Start Vocabulary! 🎉"
            : "Continue to Vocabulary →"}
        </button>
      </div>
    </div>
  );
}

// ============================================================
// SUB-COMPONENTS - Each renders one section of the lesson
// ============================================================

// ─── WHY LEARN THIS Section ──────────────────────────────────
// Shows why this topic is important and motivates the student
function WhySection({
  content,
  topicColor,
  onSpeak,
}: {
  content: LessonContentType;
  topicColor: string;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Main explanation card */}
      <div
        className="card-base rounded-2xl"
        style={{ borderLeft: `4px solid ${topicColor}` }}
      >
        {/* Section heading */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold" style={{ color: topicColor }}>
            🌟 Why Are We Learning This?
          </h2>
          {/* Listen button to hear the explanation */}
          <button
            onClick={() => onSpeak(content.whyLearnThis.slice(0, 300))}
            className="btn-ghost p-2 rounded-lg"
            title="Listen to this section"
          >
            <Volume2 className="h-4 w-4" />
          </button>
        </div>
        {/* The explanation text - splits by paragraph for readability */}
        <div className="space-y-3">
          {content.whyLearnThis.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-foreground leading-relaxed text-base"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Motivation tip box */}
      <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
        <p className="text-sm text-primary font-medium flex items-center gap-2">
          <Lightbulb className="h-4 w-4 shrink-0" />
          Master this today and you will use it every single day for the rest of your life!
        </p>
      </div>
    </div>
  );
}

// ─── CONCEPT Section ─────────────────────────────────────────
// Shows the full concept explanation with Hindi toggle
function ConceptSection({
  content,
  topicColor,
  showHindi,
  setShowHindi,
  onSpeak,
}: {
  content: LessonContentType;
  topicColor: string;
  showHindi: boolean;
  setShowHindi: (v: boolean) => void;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Header with Hindi toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-500" />
          Understanding the Concept
        </h2>
        <div className="flex items-center gap-2">
          {/* Listen button */}
          <button
            onClick={() => onSpeak(content.conceptExplanation.slice(0, 400))}
            className="btn-ghost p-2 rounded-lg"
          >
            <Volume2 className="h-4 w-4" />
          </button>
          {/* Hindi toggle */}
          <button
            onClick={() => setShowHindi(!showHindi)}
            className="btn-secondary text-sm py-1.5 px-3"
          >
            {showHindi ? "Hide Hindi" : "Show Hindi"}
          </button>
        </div>
      </div>

      {/* Concept explanation */}
      <div className="card-base rounded-2xl" style={{ borderLeft: `4px solid ${topicColor}` }}>
        <div className="space-y-3">
          {content.conceptExplanation.split("\n\n").map((para, i) => (
            <p key={i} className="text-foreground leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Simple explanation box */}
      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
        <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Simple Explanation (Easy to Understand)
        </h3>
        <p className="text-sm text-foreground leading-relaxed">
          {content.simpleExplanation}
        </p>
      </div>

      {/* Hindi explanation (toggle) */}
      <AnimatePresence>
        {showHindi && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
              <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-2">
                🇮🇳 Hindi Explanation
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {content.hindiExplanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── RULES Section ───────────────────────────────────────────
// Shows grammar rules with expandable accordion
function RulesSection({
  content,
  topicColor,
}: {
  content: LessonContentType;
  topicColor: string;
}) {
  // Track which rule is expanded
  const [openRule, setOpenRule] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {/* Section heading */}
      <h2 className="text-xl font-bold flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-blue-500" />
        Rules & Structure
      </h2>

      {/* Rules accordion list */}
      {content.rules.map((rule, i) => (
        <div key={i} className="rounded-xl border border-border overflow-hidden">
          {/* Rule header button */}
          <button
            onClick={() => setOpenRule(openRule === i ? null : i)}
            className="flex w-full items-center justify-between p-4 hover:bg-accent transition-colors"
          >
            {/* Rule number and title */}
            <div className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: topicColor }}
              >
                {i + 1}
              </span>
              <span className="font-semibold text-left">{rule.rule}</span>
            </div>
            {/* Expand/collapse chevron */}
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform shrink-0",
                openRule === i && "rotate-180"
              )}
            />
          </button>

          {/* Expandable rule details */}
          <AnimatePresence>
            {openRule === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-3">
                  {/* Rule explanation */}
                  <p className="text-muted-foreground">{rule.explanation}</p>
                  {/* Example */}
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                      ✅ Example
                    </p>
                    <p className="font-semibold text-foreground">{rule.example}</p>
                  </div>
                  {/* Exception (if any) */}
                  {rule.exception && (
                    <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-3">
                      <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">
                        ⚠️ Exception
                      </p>
                      <p className="text-sm text-foreground">{rule.exception}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── EXAMPLES Section ────────────────────────────────────────
// Shows sentence patterns with Hindi translations
function ExamplesSection({
  content,
  showHindi,
  setShowHindi,
  onSpeak,
}: {
  content: LessonContentType;
  showHindi: boolean;
  setShowHindi: (v: boolean) => void;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Header with Hindi toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-emerald-500" />
          Sentence Patterns & Examples
        </h2>
        <button
          onClick={() => setShowHindi(!showHindi)}
          className="btn-secondary text-sm py-1.5 px-3"
        >
          {showHindi ? "Hide Hindi" : "Show Hindi"}
        </button>
      </div>

      {/* Sentence patterns */}
      {content.sentencePatterns.map((pattern, pIdx) => (
        <div key={pIdx} className="space-y-2">
          {/* Pattern header */}
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-3">
            <h3 className="font-bold text-primary text-sm">
              📐 Pattern: {pattern.pattern}
            </h3>
            {showHindi && (
              <p className="text-xs text-muted-foreground mt-1">
                {pattern.hindiPattern}
              </p>
            )}
          </div>

          {/* Examples for this pattern */}
          <div className="space-y-2">
            {pattern.examples.map((ex, eIdx) => (
              <motion.div
                key={eIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: eIdx * 0.05 }}
                className="rounded-xl border border-border bg-card p-3 flex items-start gap-3"
              >
                {/* Example number */}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {eIdx + 1}
                </span>
                <div className="flex-1">
                  {/* Hindi sentence (if toggled on) */}
                  {showHindi && (
                    <p className="text-xs text-muted-foreground mb-1">
                      {ex.hindi}
                    </p>
                  )}
                  {/* English sentence */}
                  <p className="text-sm font-semibold text-foreground">
                    {ex.english}
                  </p>
                </div>
                {/* Listen button */}
                <button
                  onClick={() => onSpeak(ex.english)}
                  className="btn-ghost p-1.5 rounded-lg shrink-0"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MISTAKES Section ────────────────────────────────────────
// Shows common mistakes with corrections
function MistakesSection({ content }: { content: LessonContentType }) {
  return (
    <div className="space-y-4">
      {/* Section heading */}
      <h2 className="text-xl font-bold flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-rose-500" />
        Common Mistakes to Avoid
      </h2>

      {/* Mistakes list */}
      {content.commonMistakes.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-2"
        >
          {/* Wrong vs Correct comparison */}
          <div className="flex gap-3">
            {/* Wrong example */}
            <div className="rounded-lg bg-rose-500/10 p-3 flex-1">
              <p className="text-xs font-medium text-rose-500 mb-1">❌ WRONG</p>
              <p className="font-semibold line-through text-rose-400 dark:text-rose-300">
                {m.wrong}
              </p>
            </div>
            {/* Correct example */}
            <div className="rounded-lg bg-emerald-500/10 p-3 flex-1">
              <p className="text-xs font-medium text-emerald-500 mb-1">✅ CORRECT</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                {m.correct}
              </p>
            </div>
          </div>
          {/* Explanation of why it's wrong */}
          <p className="text-sm text-muted-foreground">{m.explanation}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── TIPS Section ────────────────────────────────────────────
// Shows speaking tips and memory tricks
function TipsSection({ content }: { content: LessonContentType }) {
  return (
    <div className="space-y-6">
      {/* Speaking Tips */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-gold-500" />
          Speaking Tips
        </h2>
        {content.speakingTips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-xl bg-gold-400/10 border border-gold-400/20 p-4"
          >
            {/* Tip number */}
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-sm font-bold text-gold-500">
              {i + 1}
            </div>
            {/* Tip text */}
            <p className="text-sm text-foreground leading-relaxed">{tip}</p>
          </motion.div>
        ))}
      </div>

      {/* Memory Tricks */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          Memory Tricks & Mnemonics
        </h2>
        {content.memoryTricks.map((trick, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-xl bg-purple-500/10 border border-purple-500/20 p-4"
          >
            <div className="text-lg">🧠</div>
            <p className="text-sm text-foreground leading-relaxed">{trick}</p>
          </motion.div>
        ))}
      </div>

      {/* Daily Challenge */}
      <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
        <p className="text-sm font-medium text-primary">
          🎯 Daily Challenge: Use today&apos;s concepts in 10 real sentences before sleeping tonight!
        </p>
      </div>
    </div>
  );
}

// ─── PROFESSIONAL USAGE Section ──────────────────────────────
// Shows how to use the concept in professional, office, and interview settings
function ProfessionalSection({
  content,
  onSpeak,
}: {
  content: LessonContentType;
  onSpeak: (text: string) => void;
}) {
  // Combine all professional usage examples
  const sections = [
    { title: "🏢 Office Usage", icon: Briefcase, items: content.officeUsage, color: "blue" },
    { title: "💼 Interview Usage", icon: GraduationCap, items: content.interviewUsage, color: "purple" },
    { title: "🏠 Daily Life Usage", icon: Home, items: content.dailyUsage, color: "emerald" },
    { title: "📧 Professional Usage", icon: Briefcase, items: content.professionalUsage, color: "cyan" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-cyan-500" />
        Real-World Usage
      </h2>

      {sections.map((section, sIdx) => (
        <div key={sIdx} className="space-y-2">
          <h3 className="font-bold text-base">{section.title}</h3>
          {section.items.map((item, iIdx) => (
            <motion.div
              key={iIdx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: iIdx * 0.05 }}
              className="rounded-xl border border-border bg-card p-3"
            >
              {/* Situation */}
              <p className="text-xs text-muted-foreground mb-1">
                📍 {item.situation}
              </p>
              {/* English sentence */}
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground flex-1">
                  {item.english}
                </p>
                <button
                  onClick={() => onSpeak(item.english)}
                  className="btn-ghost p-1 rounded-lg shrink-0"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </div>
              {/* Hindi translation */}
              <p className="text-xs text-muted-foreground mt-1">{item.hindi}</p>
              {/* Tip if available */}
              {item.tip && (
                <p className="text-xs text-primary mt-1 flex items-center gap-1">
                  <Lightbulb className="h-3 w-3" /> {item.tip}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── STORY Section ───────────────────────────────────────────
// Shows a short story using concepts learned in this lesson
function StorySection({
  content,
  onSpeak,
}: {
  content: LessonContentType;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <BookMarked className="h-5 w-5 text-pink-500" />
        Story Time
      </h2>

      {/* Story card */}
      <div className="card-base rounded-2xl" style={{ borderLeft: "4px solid #ec4899" }}>
        {/* Story title */}
        <h3 className="text-lg font-bold mb-3">{content.story.title}</h3>
        {/* Story paragraphs */}
        <div className="space-y-3">
          {content.story.paragraphs.map((para, i) => (
            <p key={i} className="text-foreground leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>
        {/* Listen to the story */}
        <button
          onClick={() => onSpeak(content.story.paragraphs.join(" "))}
          className="btn-secondary mt-4 text-sm py-1.5 gap-1"
        >
          <Volume2 className="h-3.5 w-3.5" /> Listen to Story
        </button>
      </div>

      {/* Moral */}
      <div className="rounded-xl bg-pink-500/10 border border-pink-500/20 p-4">
        <p className="text-sm font-medium text-pink-600 dark:text-pink-400">
          📖 Moral: {content.story.moral}
        </p>
      </div>

      {/* Key words from story */}
      <div className="flex flex-wrap gap-2">
        {content.story.keyWords.map((kw, i) => (
          <span
            key={i}
            className="rounded-full bg-pink-500/10 border border-pink-500/20 px-3 py-1 text-xs font-medium"
          >
            <span className="text-foreground font-bold">{kw.word}</span>
            <span className="text-muted-foreground ml-1">= {kw.meaning}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── DIALOGUE Section ────────────────────────────────────────
// Shows a conversation between two people
function DialogueSection({
  content,
  onSpeak,
}: {
  content: LessonContentType;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Users className="h-5 w-5 text-indigo-500" />
        Conversation Practice
      </h2>

      {/* Dialogue setting */}
      <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-3">
        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          📍 {content.dialogue.setting}
        </p>
      </div>

      {/* Dialogue lines */}
      <div className="space-y-2">
        {content.dialogue.lines.map((line, i) => {
          // Alternate between left and right alignment
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex gap-2",
                isLeft ? "justify-start" : "justify-end"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl p-3",
                  isLeft
                    ? "bg-primary/10 border border-primary/20 rounded-bl-sm"
                    : "bg-emerald-500/10 border border-emerald-500/20 rounded-br-sm"
                )}
              >
                {/* Speaker name */}
                <p className={cn(
                  "text-xs font-bold mb-1",
                  isLeft ? "text-primary" : "text-emerald-600 dark:text-emerald-400"
                )}>
                  {line.speaker}
                </p>
                {/* English text */}
                <p className="text-sm font-medium text-foreground">{line.text}</p>
                {/* Hindi translation */}
                <p className="text-xs text-muted-foreground mt-1">{line.hindi}</p>
              </div>
              {/* Listen button */}
              <button
                onClick={() => onSpeak(line.text)}
                className="btn-ghost p-1 rounded-lg self-center shrink-0"
              >
                <Volume2 className="h-3 w-3" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <h3 className="font-bold text-sm">💡 Language Notes:</h3>
        {content.dialogue.notes.map((note, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SUMMARY Section ─────────────────────────────────────────
// Shows a concise summary of everything learned
function SummarySection({ content }: { content: LessonContentType }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-teal-500" />
        Lesson Summary
      </h2>

      {/* Summary points */}
      <div className="card-base rounded-2xl" style={{ borderLeft: "4px solid #14b8a6" }}>
        <div className="space-y-3">
          {content.summary.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-xs font-bold text-teal-600 dark:text-teal-400">
                {i + 1}
              </div>
              <p className="text-sm text-foreground leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completion message */}
      <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 p-4 text-center">
        <p className="text-sm font-medium text-foreground">
          🎉 You have completed the theory for this subtopic!
          Now practice with vocabulary and questions to solidify your knowledge.
        </p>
      </div>
    </div>
  );
}
