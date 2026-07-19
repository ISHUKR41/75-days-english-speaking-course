"use client";
// ============================================================
// Subtopic Lesson - The full lesson experience for one subtopic
// Includes: theory, examples, practice questions, vocabulary
// Both TYPED and SPOKEN answer modes
// ============================================================

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2,
  ChevronRight, Mic, MicOff, Play, RotateCcw,
  Star, Target, Trophy, Volume2, Zap,
} from "lucide-react";
import { cn, playSound } from "@/lib/utils";
import type { TopicConfig, SubtopicConfig } from "@/data/course-content/days-config";
import { LessonContent } from "@/components/learning/lesson-content";
import { PracticeSection } from "@/components/practice/practice-section";
import { VocabularySection } from "@/components/vocabulary/vocabulary-section";
import { TestSection } from "@/components/practice/test-section";

interface SubtopicLessonProps {
  dayNumber: number;
  dayTitle: string;
  topic: TopicConfig;
  subtopic: SubtopicConfig;
  prevSubtopicId?: string;
  nextSubtopicId?: string;
  nextTopicId?: string;
  nextTopicFirstSubtopicId?: string;
  userId: string;
}

// Lesson sections/tabs
type LessonSection = "learn" | "vocabulary" | "practice" | "test";

export function SubtopicLesson({
  dayNumber,
  dayTitle,
  topic,
  subtopic,
  prevSubtopicId,
  nextSubtopicId,
  nextTopicId,
  nextTopicFirstSubtopicId,
  userId,
}: SubtopicLessonProps) {
  const [activeSection, setActiveSection] = useState<LessonSection>("learn");
  const [lessonComplete, setLessonComplete] = useState(false);
  const [practiceScore, setPracticeScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);

  // Save progress to the API and award XP
  const saveProgress = useCallback(
    async (type: "practice" | "test", score: number, xp: number) => {
      try {
        await fetch("/api/progress/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dayNumber,
            subtopicId: subtopic.id,
            type,
            score,
            xpEarned: xp,
            correct: Math.round((score / 100) * 10),
            total: 10,
          }),
        });
      } catch (e) {
        // Non-blocking: progress save errors don't disrupt the lesson
        console.warn("Progress save failed:", e);
      }
    },
    [dayNumber, subtopic.id]
  );

  // Handle section completion
  const handleSectionComplete = useCallback(
    (section: LessonSection, score?: number) => {
      if (section === "practice" && score !== undefined) {
        setPracticeScore(score);
        const xp = Math.floor(score * 0.5); // Up to 50 XP for practice
        setXpEarned((prev) => prev + xp);
        saveProgress("practice", score, xp);
        playSound("correct");
      }
      if (section === "test") {
        setLessonComplete(true);
        playSound("perfect");
      }
    },
    [saveProgress]
  );

  // Navigation URLs
  const prevUrl = prevSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${prevSubtopicId}`
    : `/day/${dayNumber}`;

  const nextUrl = nextSubtopicId
    ? `/day/${dayNumber}/topic/${topic.id}/subtopic/${nextSubtopicId}`
    : nextTopicId && nextTopicFirstSubtopicId
    ? `/day/${dayNumber}/topic/${nextTopicId}/subtopic/${nextTopicFirstSubtopicId}`
    : `/day/${dayNumber}`;

  // Section tabs config
  const SECTIONS: { key: LessonSection; icon: React.ElementType; label: string }[] = [
    { key: "learn", icon: BookOpen, label: "Learn" },
    { key: "vocabulary", icon: Star, label: "Vocabulary" },
    { key: "practice", icon: Target, label: "Practice" },
    { key: "test", icon: Trophy, label: "Test" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* ── Breadcrumb navigation ── */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap"
        aria-label="Breadcrumb"
      >
        <Link href="/dashboard" className="hover:text-foreground transition-colors">
          Dashboard
        </Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        <Link href={`/day/${dayNumber}`} className="hover:text-foreground transition-colors">
          Day {dayNumber}
        </Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        <span className="text-foreground truncate max-w-[200px]">{subtopic.title}</span>
      </motion.nav>

      {/* ── Lesson Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border bg-card overflow-hidden"
      >
        {/* Header content */}
        <div
          className="p-5"
          style={{
            background: `linear-gradient(135deg, ${topic.color}15, transparent)`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: `${topic.color}20` }}
              >
                {subtopic.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: topic.color }}
                  >
                    {topic.title}
                  </span>
                </div>
                <h1 className="text-xl font-bold text-foreground">{subtopic.title}</h1>
                <p className="text-sm text-muted-foreground mt-0.5">{subtopic.description}</p>
              </div>
            </div>

            {/* XP badge */}
            {xpEarned > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 rounded-full bg-gold-400/10 
                           border border-gold-400/30 px-3 py-1.5"
              >
                <Zap className="h-4 w-4 text-gold-500" />
                <span className="text-sm font-bold text-gold-500">+{xpEarned} XP</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Section tabs */}
        <div className="flex border-t border-border">
          {SECTIONS.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium",
                "transition-all duration-200 border-b-2",
                activeSection === section.key
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
              aria-selected={activeSection === section.key}
              role="tab"
            >
              <section.icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── Section Content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {activeSection === "learn" && (
            <LessonContent
              dayNumber={dayNumber}
              topicId={topic.id}
              subtopicId={subtopic.id}
              subtopicTitle={subtopic.title}
              topicColor={topic.color}
              onComplete={() => setActiveSection("vocabulary")}
            />
          )}

          {activeSection === "vocabulary" && (
            <VocabularySection
              dayNumber={dayNumber}
              subtopicId={subtopic.id}
              subtopicTitle={subtopic.title}
              onComplete={() => setActiveSection("practice")}
            />
          )}

          {activeSection === "practice" && (
            <PracticeSection
              dayNumber={dayNumber}
              subtopicId={subtopic.id}
              subtopicTitle={subtopic.title}
              topicColor={topic.color}
              userId={userId}
              onComplete={(score) => {
                handleSectionComplete("practice", score);
                setActiveSection("test");
              }}
            />
          )}

          {activeSection === "test" && (
            <TestSection
              dayNumber={dayNumber}
              subtopicId={subtopic.id}
              subtopicTitle={subtopic.title}
              topicColor={topic.color}
              userId={userId}
              onComplete={(score, xp) => {
                setXpEarned(prev => prev + xp);
                // Save test progress to DB (non-blocking)
                saveProgress("test", score, xp);
                handleSectionComplete("test", score);
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Lesson Navigation ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between gap-4 pt-2"
      >
        {/* Previous button */}
        <Link
          href={prevUrl}
          className="btn-secondary gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Link>

        {/* Progress dots */}
        <div className="flex gap-2 items-center">
          {SECTIONS.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeSection === section.key
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              )}
              aria-label={`Go to ${section.label} section`}
            />
          ))}
        </div>

        {/* Next button */}
        <Link
          href={nextUrl}
          className="btn-primary gap-2"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
}
