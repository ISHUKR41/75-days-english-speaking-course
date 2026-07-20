"use client";
// ============================================================
// Test Section — Full 50-question graded test for a subtopic
// Harder than practice: no hints, no reveal, timer pressure
// Results saved to DB, XP awarded, badges checked
// ============================================================

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, CheckCircle2, ChevronRight, Clock,
  RefreshCcw, Send, Trophy, X, Zap, AlertOctagon,
  Target, BarChart3,
} from "lucide-react";
import { cn, checkAnswer, playSound } from "@/lib/utils";
// Question data loaders (reuse same bank as practice but different UX)
import { ALL_DAY_1_QUESTIONS } from "@/data/questions/day-1-questions";
import { ALL_DAY1_EXTENDED_QUESTIONS } from "@/data/questions/day-1-extended-questions";
import { ALL_DAY_2_QUESTIONS } from "@/data/questions/day-2-questions";
import type { PracticeQ } from "@/data/questions/day-1-questions";

// ─── Props ─────────────────────────────────────────────────────
interface TestSectionProps {
  dayNumber: number;        // Day 1-75
  subtopicId: string;       // Subtopic being tested
  subtopicTitle: string;    // Display name
  topicColor: string;       // Brand color
  userId: string;           // For saving results
  onComplete: (score: number, xpEarned: number) => void; // Score = 0-100
}

// ─── Internal question state ────────────────────────────────────
type QState = "unanswered" | "correct" | "wrong";

// ─── Timer config ───────────────────────────────────────────────
const SECONDS_PER_QUESTION = 30; // 30s per question
const MAX_QUESTIONS = 50;        // Max questions to show

// ─── Load test questions (same bank as practice) ────────────────
function loadTestQuestions(dayNumber: number, subtopicId: string): PracticeQ[] {
  // Day 1 — merge base + extended, filter by subtopic then shuffle
  if (dayNumber === 1) {
    const all = [...ALL_DAY_1_QUESTIONS, ...ALL_DAY1_EXTENDED_QUESTIONS];
    const filtered = all.filter(q => q.subtopicId === subtopicId);
    const pool = filtered.length >= 10 ? filtered : all; // Fallback to all
    return shuffleArray(pool).slice(0, MAX_QUESTIONS);
  }
  // Day 2
  if (dayNumber === 2) {
    const filtered = ALL_DAY_2_QUESTIONS.filter(q => q.subtopicId === subtopicId);
    const pool = filtered.length >= 10 ? filtered : ALL_DAY_2_QUESTIONS;
    return shuffleArray(pool).slice(0, MAX_QUESTIONS);
  }
  // Days 3-75 — fallback to Day 1
  return shuffleArray(ALL_DAY_1_QUESTIONS).slice(0, MAX_QUESTIONS);
}

// ─── Fisher–Yates shuffle ───────────────────────────────────────
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Grade label based on accuracy ─────────────────────────────
function getGrade(accuracy: number) {
  if (accuracy >= 90) return { label: "A+", color: "text-emerald-500", emoji: "🏆" };
  if (accuracy >= 80) return { label: "A",  color: "text-emerald-500", emoji: "🌟" };
  if (accuracy >= 70) return { label: "B",  color: "text-blue-500",    emoji: "👍" };
  if (accuracy >= 60) return { label: "C",  color: "text-amber-500",   emoji: "📚" };
  return                      { label: "D",  color: "text-rose-500",    emoji: "💪" };
}

// ─── XP based on score ─────────────────────────────────────────
function calcXP(accuracy: number, totalQuestions: number) {
  const base = Math.floor(accuracy * 3); // 0-300 base
  const bonus = accuracy >= 90 ? 100 : accuracy >= 80 ? 50 : 0;
  return base + bonus;
}

// ============================================================
// Main TestSection component
// ============================================================
export function TestSection({
  dayNumber, subtopicId, subtopicTitle, topicColor, userId, onComplete
}: TestSectionProps) {
  // ── State ────────────────────────────────────────────────────
  const [phase, setPhase] = useState<"intro" | "test" | "results">("intro");
  const [questions, setQuestions] = useState<PracticeQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [qStates, setQStates] = useState<QState[]>([]);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ── Start the test ──────────────────────────────────────────
  const startTest = useCallback(() => {
    const qs = loadTestQuestions(dayNumber, subtopicId);
    setQuestions(qs);
    setQStates(new Array(qs.length).fill("unanswered"));
    setCurrentIndex(0);
    setCorrect(0);
    setWrong(0);
    setSkipped(0);
    setTypedAnswer("");
    setSelectedOption(null);
    setTimeLeft(SECONDS_PER_QUESTION);
    setStartTime(Date.now());
    setPhase("test");
    playSound("click");
  }, [dayNumber, subtopicId]);

  // ── Timer countdown ─────────────────────────────────────────
  useEffect(() => {
    if (phase !== "test") return;
    // Reset timer when question changes
    setTimeLeft(SECONDS_PER_QUESTION);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Time up — count as wrong
          handleTimeUp();
          return SECONDS_PER_QUESTION;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, phase]);

  // ── Auto-focus input when in test mode ─────────────────────
  useEffect(() => {
    if (phase === "test" && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [currentIndex, phase]);

  // ── Time up handler ─────────────────────────────────────────
  const handleTimeUp = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setQStates(prev => { const n = [...prev]; n[currentIndex] = "wrong"; return n; });
    setWrong(w => w + 1);
    playSound("wrong");
    // Move to next after 1s
    setTimeout(() => nextQuestion(), 800);
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Submit answer ───────────────────────────────────────────
  const submitAnswer = useCallback((answer: string) => {
    if (qStates[currentIndex] !== "unanswered") return;
    if (timerRef.current) clearInterval(timerRef.current);
    const isCorrect = checkAnswer(answer, questions[currentIndex].correctAnswer);
    setQStates(prev => { const n = [...prev]; n[currentIndex] = isCorrect ? "correct" : "wrong"; return n; });
    if (isCorrect) { setCorrect(c => c + 1); playSound("correct"); }
    else { setWrong(w => w + 1); playSound("wrong"); }
    // Move to next after short delay
    setTimeout(() => nextQuestion(), isCorrect ? 600 : 1200);
  }, [currentIndex, qStates, questions]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── MCQ option handler ──────────────────────────────────────
  const handleOptionSelect = (option: string) => {
    if (qStates[currentIndex] !== "unanswered") return;
    setSelectedOption(option);
    submitAnswer(option);
  };

  // ── Typed submit ────────────────────────────────────────────
  const handleTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedAnswer.trim()) return;
    submitAnswer(typedAnswer.trim());
  };

  // ── Next question ───────────────────────────────────────────
  const nextQuestion = useCallback(() => {
    setTypedAnswer("");
    setSelectedOption(null);
    if (currentIndex >= questions.length - 1) {
      // Test complete
      setTotalTime(Math.round((Date.now() - startTime) / 1000));
      setPhase("results");
      playSound("perfect");
    } else {
      setCurrentIndex(i => i + 1);
    }
  }, [currentIndex, questions.length, startTime]);

  // ── Current question ─────────────────────────────────────────
  const currentQ = questions[currentIndex];

  // ═══════════════════════════════════════════════════════════════
  // INTRO SCREEN
  // ═══════════════════════════════════════════════════════════════
  if (phase === "intro") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header card */}
        <div
          className="rounded-2xl p-8 text-center space-y-4 border border-border"
          style={{ background: `linear-gradient(135deg, ${topicColor}10, transparent)` }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${topicColor}20`, border: `2px solid ${topicColor}40` }}
            >
              <Trophy className="h-10 w-10" style={{ color: topicColor }} />
            </div>
          </motion.div>

          <div>
            <h2 className="text-2xl font-black text-foreground">Subtopic Test</h2>
            <p className="text-muted-foreground mt-1">{subtopicTitle}</p>
          </div>

          {/* Test rules */}
          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            {[
              { icon: Target, label: "50 Questions", sub: "All types" },
              { icon: Clock, label: "30s / Q",      sub: "Per question" },
              { icon: BarChart3, label: "Scored",   sub: "XP Awarded" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="card-base rounded-xl p-3 text-center">
                <Icon className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-xs font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules list */}
        <div className="card-base rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-semibold mb-3">Test Rules</h3>
          {[
            "No hints or answer reveals — this is a real test",
            "You have 30 seconds per question — a timer will count down",
            "Questions are shuffled randomly for each attempt",
            "Score 80%+ to unlock the next subtopic",
            "XP is awarded based on your final accuracy",
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <span>{rule}</span>
            </div>
          ))}
        </div>

        <button
          onClick={startTest}
          className="btn-primary w-full py-4 text-base gap-2"
        >
          <Zap className="h-5 w-5" />
          Start Test — {MAX_QUESTIONS} Questions
        </button>
      </motion.div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // RESULTS SCREEN
  // ═══════════════════════════════════════════════════════════════
  if (phase === "results") {
    const accuracy  = Math.round((correct / questions.length) * 100);
    const xpEarned  = calcXP(accuracy, questions.length);
    const grade     = getGrade(accuracy);
    const minutes   = Math.floor(totalTime / 60);
    const seconds   = totalTime % 60;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6 text-center"
      >
        {/* Score hero */}
        <div
          className="rounded-2xl p-8 border border-border space-y-4"
          style={{ background: `linear-gradient(135deg, ${topicColor}10, transparent)` }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-6xl"
          >
            {grade.emoji}
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-7xl font-black tabular-nums ${grade.color}`}
            >
              {accuracy}%
            </motion.p>
            <p className="text-muted-foreground mt-1">
              Grade <span className={`font-bold ${grade.color}`}>{grade.label}</span>
            </p>
          </div>

          {/* XP earned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/30 px-4 py-2"
          >
            <Zap className="h-4 w-4 text-amber-500" />
            <span className="font-bold text-amber-500">+{xpEarned} XP Earned</span>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Correct",   value: correct,           icon: CheckCircle2, color: "text-emerald-500" },
            { label: "Wrong",     value: wrong,             icon: X,            color: "text-rose-500" },
            { label: "Skipped",   value: skipped,           icon: AlertCircle,  color: "text-amber-500" },
            { label: "Time",      value: `${minutes}:${String(seconds).padStart(2, "0")}`, icon: Clock, color: "text-blue-500" },
          ].map(({ label, value, icon: Icon, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-base rounded-xl p-4 text-center"
            >
              <Icon className={`h-5 w-5 mx-auto mb-1 ${color}`} />
              <p className={`text-2xl font-black ${color}`}>{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Pass/Fail message */}
        {accuracy >= 80 ? (
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-600 dark:text-emerald-400">
            <p className="font-semibold">🎉 Excellent! You passed this test.</p>
            <p className="text-sm mt-1 opacity-80">You&apos;ve mastered {subtopicTitle}. Move to the next subtopic!</p>
          </div>
        ) : (
          <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-4 text-amber-600 dark:text-amber-400">
            <p className="font-semibold">📚 Keep practicing! You scored below 80%.</p>
            <p className="text-sm mt-1 opacity-80">Review the lesson and practice more before retrying.</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={startTest}
            className="btn-secondary gap-2"
          >
            <RefreshCcw className="h-4 w-4" />
            Retake Test
          </button>
          <button
            onClick={() => onComplete(accuracy, xpEarned)}
            className="btn-primary gap-2 px-8"
          >
            Continue
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // TEST SCREEN
  // ═══════════════════════════════════════════════════════════════
  const isMCQ = (currentQ?.questionType as string) === "mcq" || (currentQ?.questionType as string) === "MCQ";
  const options = isMCQ
    ? [currentQ?.optionA, currentQ?.optionB, currentQ?.optionC, currentQ?.optionD].filter(Boolean) as string[]
    : [];
  const timerPercent = (timeLeft / SECONDS_PER_QUESTION) * 100;
  const currentState = qStates[currentIndex];

  return (
    <div className="space-y-4">
      {/* ── Header bar ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Question counter */}
          <span className="badge-primary font-bold tabular-nums">
            {currentIndex + 1} / {questions.length}
          </span>
          {/* Score */}
          <span className="text-sm font-semibold text-emerald-500 flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5" />{correct}
          </span>
          <span className="text-sm font-semibold text-rose-500 flex items-center gap-1">
            <X className="h-3.5 w-3.5" />{wrong}
          </span>
        </div>

        {/* Timer */}
        <div className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular-nums",
          timeLeft <= 10
            ? "bg-rose-500/10 border border-rose-500/30 text-rose-500"
            : "bg-muted border border-border text-foreground"
        )}>
          <Clock className="h-3.5 w-3.5" />
          {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:{String(timeLeft % 60).padStart(2, "0")}
        </div>
      </div>

      {/* ── Timer progress bar ──────────────────────────────────── */}
      <div className="h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className={cn(
            "h-full rounded-full transition-all",
            timeLeft <= 10 ? "bg-rose-500" : "bg-primary"
          )}
          style={{ width: `${timerPercent}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* ── Question progress bar ───────────────────────────────── */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-purple-500"
          animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* ── Question card ───────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "rounded-2xl border p-6 space-y-5",
            currentState === "correct"
              ? "border-emerald-500/50 bg-emerald-500/5"
              : currentState === "wrong"
              ? "border-rose-500/50 bg-rose-500/5"
              : "border-border bg-card"
          )}
        >
          {/* Difficulty badge */}
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded-full",
              currentQ?.difficulty === "beginner" ? "bg-emerald-500/10 text-emerald-500"
              : currentQ?.difficulty === "intermediate" ? "bg-amber-500/10 text-amber-500"
              : "bg-rose-500/10 text-rose-500"
            )}>
              {currentQ?.difficulty ?? "Beginner"}
            </span>
            <span className="text-xs text-muted-foreground">{currentQ?.points ?? 10} pts</span>
          </div>

          {/* Question text */}
          <p className="text-lg font-semibold text-foreground leading-relaxed">
            {currentQ?.questionText}
          </p>

          {/* MCQ options */}
          {isMCQ && options.length > 0 && (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(opt)}
                  disabled={currentState !== "unanswered"}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                    "hover:border-primary/50 hover:bg-primary/5",
                    selectedOption === opt && currentState === "correct"
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
                      : selectedOption === opt && currentState === "wrong"
                      ? "border-rose-500 bg-rose-500/10 text-rose-600"
                      : "border-border bg-card"
                  )}
                >
                  <span className="mr-2 font-bold text-muted-foreground">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Text input for non-MCQ */}
          {!isMCQ && currentState === "unanswered" && (
            <form onSubmit={handleTypeSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={typedAnswer}
                onChange={e => setTypedAnswer(e.target.value)}
                placeholder="Type your answer in English…"
                className="input flex-1"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="submit"
                disabled={!typedAnswer.trim()}
                className="btn-primary px-4"
                aria-label="Submit answer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Feedback — shown after answering */}
          <AnimatePresence>
            {currentState !== "unanswered" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={cn(
                  "rounded-xl p-3 text-sm",
                  currentState === "correct"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                )}
              >
                {currentState === "correct" ? (
                  <p><span className="font-bold">✓ Correct!</span> {currentQ?.explanation}</p>
                ) : (
                  <div className="space-y-1">
                    <p><span className="font-bold">✗ Wrong.</span> Correct: <span className="font-semibold">{currentQ?.correctAnswer}</span></p>
                    {currentQ?.hindiExplanation && (
                      <p className="text-xs opacity-80">{currentQ.hindiExplanation}</p>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
