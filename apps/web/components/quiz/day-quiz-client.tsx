"use client";
// ============================================================
// Day Quiz Client Component
// 10-question MCQ quiz for each day
// Shows score with motivational message at the end
// Design: matches the rest of the 75 Days Hard English UI
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  Zap,
  ArrowLeft,
  Target,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Types ─────────────────────────────────────────────────────
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hindiExplanation: string;
  category: string;
  points: number;
}

interface DayQuizClientProps {
  dayNumber: number;
  dayTitle: string;
  dayEmoji: string;
  questions: QuizQuestion[];
  userId: string;
}

// ─── Motivational messages by score band ──────────────────────
function getMotivationalMessage(correct: number, total: number): {
  emoji: string;
  title: string;
  message: string;
  color: string;
} {
  const pct = (correct / total) * 100;
  if (pct === 100)
    return {
      emoji: "🏆",
      title: "Perfect Score!",
      message:
        "Absolutely brilliant! You've mastered every question. You're on fire — keep this momentum going!",
      color: "text-yellow-400",
    };
  if (pct >= 80)
    return {
      emoji: "⭐",
      title: "Excellent Work!",
      message:
        "Outstanding performance! You clearly understand the material. Review the missed questions and you'll hit 100% next time.",
      color: "text-primary",
    };
  if (pct >= 60)
    return {
      emoji: "👍",
      title: "Good Effort!",
      message:
        "Solid foundation! You're making real progress. Review the topics you missed in the Grammar Rules section.",
      color: "text-blue-400",
    };
  if (pct >= 40)
    return {
      emoji: "💪",
      title: "Keep Going!",
      message:
        "Good attempt! Practice makes perfect. Go back to the day's lesson, review the flashcards, then try again.",
      color: "text-orange-400",
    };
  return {
    emoji: "📚",
    title: "Time to Revise!",
    message:
      "Don't give up! Revisit the day's content, use the flashcard review, then tackle this quiz again. Every attempt makes you stronger.",
    color: "text-red-400",
  };
}

// ─── Main Component ────────────────────────────────────────────
export function DayQuizClient({
  dayNumber,
  dayTitle,
  dayEmoji,
  questions,
  userId,
}: DayQuizClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [quizDone, setQuizDone] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeTaken, setTimeTaken] = useState(0);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const correctCount = answers.filter(
    (a, i) => a !== null && a === questions[i]?.correctIndex
  ).length;

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setTimeTaken(Math.round((Date.now() - startTime) / 1000));
      setQuizDone(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers(new Array(questions.length).fill(null));
    setQuizDone(false);
  };

  const result = getMotivationalMessage(correctCount, totalQuestions);
  const totalXpEarned = answers.reduce((sum, a, i) => {
    if (a !== null && a === questions[i]?.correctIndex) {
      return sum + (questions[i]?.points ?? 10);
    }
    return sum;
  }, 0);

  // ── Quiz Completed Screen ─────────────────────────────────
  if (quizDone) {
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Back link */}
        <Link
          href={`/day/${dayNumber}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Day {dayNumber}
        </Link>

        {/* Score Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-2xl border border-border bg-card p-8 text-center"
        >
          <div className="text-6xl mb-4">{result.emoji}</div>
          <h2 className={cn("text-2xl font-black mb-2", result.color)}>
            {result.title}
          </h2>
          <div className="text-5xl font-black text-foreground mb-2">
            {correctCount} / {totalQuestions}
          </div>
          <p className="text-muted-foreground mb-1">
            {Math.round((correctCount / totalQuestions) * 100)}% Accuracy
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 my-6">
            <div className="rounded-xl bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground mb-1">Time Taken</p>
              <p className="font-bold text-foreground">
                {minutes}:{seconds.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <p className="text-xs text-muted-foreground mb-1">XP Earned</p>
              <p className="font-bold text-primary">+{totalXpEarned} XP</p>
            </div>
            <div className="rounded-xl bg-emerald-500/10 p-3">
              <p className="text-xs text-muted-foreground mb-1">Correct</p>
              <p className="font-bold text-emerald-400">{correctCount} ✓</p>
            </div>
          </div>

          <p className="text-sm text-foreground/80 leading-relaxed mb-6">
            {result.message}
          </p>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleRetry}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/30 text-foreground py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Retry Quiz
            </button>
            <Link
              href={`/day/${dayNumber}`}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary text-white py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Back to Lessons
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Per-question breakdown */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Question Breakdown
          </h3>
          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.correctIndex;
            return (
              <div
                key={q.id}
                className={cn(
                  "rounded-xl border p-3 flex items-start gap-3 text-sm",
                  isCorrect
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : "border-red-500/20 bg-red-500/5"
                )}
              >
                {isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-foreground/90 text-xs leading-snug truncate">
                    Q{i + 1}: {q.question}
                  </p>
                  {!isCorrect && (
                    <p className="text-xs text-emerald-400 mt-0.5">
                      ✓ {q.options[q.correctIndex]}
                    </p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {isCorrect ? `+${q.points} XP` : "0 XP"}
                </span>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/revision"
            className="flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <Brain className="h-4 w-4" />
            Go to Revision
          </Link>
          <Link
            href={`/day/${Math.min(75, dayNumber + 1)}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/20 text-primary py-3 text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <Target className="h-4 w-4" />
            Next Day →
          </Link>
        </div>
      </div>
    );
  }

  // ── Quiz Question Screen ─────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <Link
          href={`/day/${dayNumber}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Day {dayNumber}
        </Link>
        <span className="text-muted-foreground/40">›</span>
        <span className="text-sm font-medium text-foreground">
          {dayEmoji} Quick Quiz
        </span>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-xl md:text-2xl font-black text-foreground">
          Day {dayNumber} Quiz — {dayTitle}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          10 questions · Test your knowledge from today's lesson
        </p>
      </motion.div>

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="flex items-center gap-1 text-primary font-medium">
            <Zap className="h-3 w-3" />
            {answers
              .filter((a, i) => a !== null && a === questions[i]?.correctIndex)
              .length}{" "}
            correct
          </span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
            animate={{
              width: `${((currentIndex) / totalQuestions) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* Question */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                Q{currentIndex + 1}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentQuestion.points} XP
              </span>
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground leading-snug">
              {currentQuestion.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((option, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrect = i === currentQuestion.correctIndex;
              const showResult = selectedAnswer !== null;

              return (
                <motion.button
                  key={i}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                  onClick={() => handleAnswer(i)}
                  disabled={showResult}
                  className={cn(
                    "w-full rounded-xl border p-4 text-left text-sm transition-all",
                    !showResult &&
                      "hover:border-primary/50 hover:bg-primary/5 border-border bg-card cursor-pointer",
                    showResult &&
                      isCorrect &&
                      "border-emerald-500/50 bg-emerald-500/10",
                    showResult &&
                      isSelected &&
                      !isCorrect &&
                      "border-red-500/50 bg-red-500/10",
                    showResult &&
                      !isSelected &&
                      !isCorrect &&
                      "border-border bg-card opacity-50",
                    showResult && "cursor-default"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shrink-0",
                        !showResult && "bg-muted text-muted-foreground",
                        showResult &&
                          isCorrect &&
                          "bg-emerald-500/20 text-emerald-400",
                        showResult &&
                          isSelected &&
                          !isCorrect &&
                          "bg-red-500/20 text-red-400",
                        showResult &&
                          !isSelected &&
                          !isCorrect &&
                          "bg-muted text-muted-foreground"
                      )}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span
                      className={cn(
                        "leading-snug flex-1",
                        showResult && isCorrect && "text-emerald-300",
                        showResult && isSelected && !isCorrect && "text-red-300"
                      )}
                    >
                      {option}
                    </span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "rounded-xl border p-4",
                  selectedAnswer === currentQuestion.correctIndex
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-orange-500/30 bg-orange-500/5"
                )}
              >
                <p className="text-sm font-semibold mb-1.5">
                  {selectedAnswer === currentQuestion.correctIndex
                    ? "✅ Correct!"
                    : "❌ Not quite — here's why:"}
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed mb-2">
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.hindiExplanation && (
                  <p className="text-xs text-muted-foreground border-t border-border/50 pt-2 mt-2">
                    🇮🇳 {currentQuestion.hindiExplanation}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {selectedAnswer !== null && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-white py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {currentIndex < totalQuestions - 1 ? (
                <>
                  Next Question
                  <ChevronRight className="h-4 w-4" />
                </>
              ) : (
                <>
                  See Results
                  <Trophy className="h-4 w-4" />
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Question dots */}
      <div className="flex gap-1 justify-center flex-wrap">
        {questions.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 rounded-full transition-all",
              i === currentIndex
                ? "w-6 bg-primary"
                : answers[i] !== null
                ? answers[i] === questions[i]?.correctIndex
                  ? "w-2 bg-emerald-500/60"
                  : "w-2 bg-red-500/60"
                : "w-2 bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}
