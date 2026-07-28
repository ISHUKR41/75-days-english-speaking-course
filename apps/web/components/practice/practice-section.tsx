"use client";
// ============================================================
// Practice Section - Core practice with TYPE and SPEAK modes
// 80-100 questions per subtopic, real scoring, sound effects
// ============================================================

import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Mic, MicOff, Send, SkipForward,
  Volume2, X, Zap, AlertCircle, Trophy, RefreshCcw,
  ChevronRight, Eye,
} from "lucide-react";
import { cn, checkAnswer, playSound } from "@/lib/utils";
// Import the PracticeQ type for type compatibility
import type { PracticeQ } from "@/data/questions/day-1-questions";
// Unified question loader — single entry point for all 75 days
import { getQuestionsForDayAndSubtopic } from "@/data/questions/questions-loader";

// ─── Types ───────────────────────────────────────────────────
// Question interface used by the practice UI
interface Question {
  id: string;            // Unique question identifier
  questionText: string;  // The question (often in Hindi for translation)
  questionType: string;  // mcq, translation, fill_blank, error_detection
  difficulty: string;    // beginner, elementary, intermediate
  correctAnswer: string; // The correct English answer
  explanation: string;   // Why this answer is correct
  hindiExplanation?: string; // Hindi explanation for clarity
  optionA?: string;      // MCQ option A
  optionB?: string;      // MCQ option B
  optionC?: string;      // MCQ option C
  optionD?: string;      // MCQ option D
  wordHints?: { word: string; meaning: string }[]; // Vocabulary hints
  points: number;        // Points awarded for correct answer
}

// Props passed to PracticeSection from SubtopicLesson
interface PracticeSectionProps {
  dayNumber: number;      // Which day (1-75)
  subtopicId: string;     // Which subtopic to load questions for
  subtopicTitle: string;  // Display title of the subtopic
  topicColor: string;     // Brand color for the topic
  userId: string;         // Current user's ID for tracking
  onComplete: (score: number) => void; // Callback when practice is done
}

// ─── Answer mode ──────────────────────────────────────────────
// User can type or speak their answers
type AnswerMode = "type" | "speak";
// Question can be unanswered, correct, wrong, or answer revealed
type QuestionState = "unanswered" | "correct" | "wrong" | "revealed";

// ─── Helper: Convert PracticeQ to Question format ─────────────
// Maps the data file format to the UI component format
function mapPracticeQToQuestion(pq: PracticeQ): Question {
  return {
    id: pq.id,
    questionText: pq.questionText,
    questionType: pq.questionType.toUpperCase(), // Normalize to uppercase
    difficulty: pq.difficulty.toUpperCase(), // Normalize to uppercase
    correctAnswer: pq.correctAnswer,
    explanation: pq.explanation,
    hindiExplanation: pq.hindiExplanation,
    optionA: pq.optionA,
    optionB: pq.optionB,
    optionC: pq.optionC,
    optionD: pq.optionD,
    wordHints: pq.wordHints || [],
    points: pq.points,
  };
}

// ─── Memoized PracticeSection to avoid unnecessary re-renders ──
// React.memo ensures the component only re-renders when props change
export const PracticeSection = memo(function PracticeSection({ dayNumber, subtopicId, subtopicTitle, topicColor, userId, onComplete }: PracticeSectionProps) {
  // Load questions via the unified loader — memoized so they don't regenerate on re-renders
  // useMemo caches the result until dayNumber or subtopicId changes
  const questions = useMemo<Question[]>(
    () => getQuestionsForDayAndSubtopic(dayNumber, subtopicId).map(mapPracticeQToQuestion),
    [dayNumber, subtopicId]
  );
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answerMode, setAnswerMode] = useState<AnswerMode>("type");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [questionState, setQuestionState] = useState<QuestionState>("unanswered");
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [spokenAnswer, setSpokenAnswer] = useState("");
  const [showComplete, setShowComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const currentQ = questions[currentQIndex];

  // Focus input on question change
  useEffect(() => {
    if (answerMode === "type" && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [currentQIndex, answerMode]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results).map((r: any) => r[0].transcript).join("");
      setSpokenAnswer(transcript);
    };
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    return () => recognition.abort();
  }, []);

  // Submit an answer
  const submitAnswer = useCallback((answer: string) => {
    if (questionState !== "unanswered") return;
    const q = currentQ;
    const isCorrect = checkAnswer(answer, q.correctAnswer);
    setQuestionState(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      setScore(s => s + q.points);
      setTotalPoints(t => t + q.points);
      setCorrect(c => c + 1);
      playSound("correct");
    } else {
      setWrong(w => w + 1);
      playSound("wrong");
    }
  }, [currentQ, questionState]);

  // Handle MCQ selection
  const handleOptionSelect = (option: string) => {
    if (questionState !== "unanswered") return;
    setSelectedOption(option);
    submitAnswer(option);
  };

  // Handle typed submission
  const handleTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedAnswer.trim()) return;
    submitAnswer(typedAnswer.trim());
  };

  // Handle spoken answer
  const handleSpokenSubmit = () => {
    if (!spokenAnswer.trim()) return;
    submitAnswer(spokenAnswer.trim());
  };

  // Toggle speech recognition
  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setSpokenAnswer("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQIndex >= questions.length - 1) {
      setShowComplete(true);
    } else {
      setCurrentQIndex(i => i + 1);
      setQuestionState("unanswered");
      setTypedAnswer("");
      setSpokenAnswer("");
      setSelectedOption(null);
    }
  };

  // Reveal answer
  const revealAnswer = () => {
    setQuestionState("revealed");
    setWrong(w => w + 1);
  };

  // Speak question
  const speakQuestion = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "hi-IN";
    window.speechSynthesis.speak(utt);
  };

  // Completion screen
  // ── Practice completion screen — premium celebration UI ──
  if (showComplete) {
    const accuracy = Math.round((correct / questions.length) * 100);
    const grade =
      accuracy >= 90 ? { label: "Excellent!", emoji: "🏆", color: "text-gold-400" } :
      accuracy >= 75 ? { label: "Great Job!", emoji: "🌟", color: "text-emerald-400" } :
      accuracy >= 50 ? { label: "Good Work!", emoji: "💪", color: "text-blue-400" } :
                       { label: "Keep Going!", emoji: "🎯", color: "text-purple-400" };
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-center space-y-7 py-6 overflow-hidden"
      >
        {/* Animated background orbs */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/10 blur-[80px] animate-pulse" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-gold-400/10 blur-[60px] animate-pulse" style={{ animationDelay: "0.6s" }} />

        {/* Trophy icon with bounce */}
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 14, delay: 0.15 }}
            className="relative inline-block"
          >
            {/* Glow ring behind trophy */}
            <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-xl scale-150" />
            <div className="relative flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-amber-400/20 to-gold-400/10 border border-gold-400/30">
              <Trophy className="h-12 w-12 text-gold-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-4xl mb-2">{grade.emoji}</p>
            <h2 className={`text-3xl font-black ${grade.color}`}>{grade.label}</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              You finished <span className="font-semibold text-foreground">{subtopicTitle}</span>
            </p>
          </motion.div>
        </div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-3 gap-3 max-w-sm mx-auto relative z-10"
        >
          {[
            { label: "Score", value: `${score} pts`, icon: "⚡", bg: "bg-amber-500/10 border-amber-500/20", text: "text-amber-400" },
            { label: "Correct", value: `${correct}/${questions.length}`, icon: "✓", bg: "bg-emerald-500/10 border-emerald-500/20", text: "text-emerald-400" },
            { label: "Accuracy", value: `${accuracy}%`, icon: "%", bg: "bg-blue-500/10 border-blue-500/20", text: "text-blue-400" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 300 }}
              className={`rounded-2xl border p-4 ${stat.bg}`}
            >
              <p className={`text-2xl font-black stat-number ${stat.text}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* XP earned animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 relative z-10"
        >
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold text-primary">+{Math.round(score * 0.5)} XP Earned!</span>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3 justify-center relative z-10"
        >
          <button
            onClick={() => {
              setCurrentQIndex(0); setScore(0); setCorrect(0); setWrong(0);
              setQuestionState("unanswered"); setShowComplete(false); setSelectedOption(null);
            }}
            className="btn-secondary gap-2"
          >
            <RefreshCcw className="h-4 w-4" /> Retry
          </button>
          <button onClick={() => onComplete(accuracy)} className="btn-gradient gap-2 px-8">
            <Trophy className="h-4 w-4" /> Go to Test →
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const isMCQ = currentQ.questionType === "MCQ";
  const options = isMCQ ? [currentQ.optionA, currentQ.optionB, currentQ.optionC, currentQ.optionD].filter(Boolean) : [];

  return (
    <div className="space-y-4">
      {/* Header with score */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {/* Question counter */}
          <div className="flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5">
            <span className="text-xs font-black text-primary">{currentQIndex + 1}</span>
            <span className="text-xs text-muted-foreground/60">/</span>
            <span className="text-xs font-medium text-muted-foreground">{questions.length}</span>
          </div>
          {/* Correct */}
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-xs font-bold text-emerald-500">{correct}</span>
          </div>
          {/* Wrong */}
          <div className="flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1.5">
            <X className="h-3.5 w-3.5 text-rose-500" />
            <span className="text-xs font-bold text-rose-500">{wrong}</span>
          </div>
        </div>
        {/* Score */}
        <motion.div
          key={score}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5"
        >
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          <span className="text-sm font-black text-amber-500">{score} pts</span>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="h-2 rounded-full bg-muted/60 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary via-violet-500 to-purple-500"
            animate={{ width: `${((currentQIndex) / questions.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ boxShadow: "0 0 8px hsl(var(--primary)/0.4)" }}
          />
        </div>
      </div>

      {/* Answer mode toggle — premium segmented control */}
      <div className="flex gap-1 p-1 rounded-2xl bg-muted/50 border border-border/60 w-fit shadow-inner">
        <motion.button
          onClick={() => setAnswerMode("type")}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "relative flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200",
            answerMode === "type"
              ? "bg-card text-foreground shadow-md border border-border/60"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          {/* Active indicator dot */}
          {answerMode === "type" && (
            <motion.span
              layoutId="mode-dot"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary"
            />
          )}
          <span className="text-base">⌨️</span>
          <span>Type Answer</span>
        </motion.button>
        <motion.button
          onClick={() => setAnswerMode("speak")}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "relative flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200",
            answerMode === "speak"
              ? "bg-card text-foreground shadow-md border border-border/60"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          {answerMode === "speak" && (
            <motion.span
              layoutId="mode-dot"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-rose-500"
            />
          )}
          <span className="text-base">🎤</span>
          <span>Speak Answer</span>
        </motion.button>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "rounded-2xl border-2 p-5 transition-all duration-300",
            questionState === "correct" && "border-emerald-500/60 bg-emerald-500/5",
            questionState === "wrong" && "border-rose-500/60 bg-rose-500/5",
            questionState === "revealed" && "border-amber-500/60 bg-amber-500/5",
            questionState === "unanswered" && "border-border bg-card"
          )}
        >
          {/* Difficulty badge + speak button */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={cn(
                "badge text-xs font-bold",
                currentQ.difficulty === "BEGINNER"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : currentQ.difficulty === "INTERMEDIATE"
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
              )}
            >
              {currentQ.difficulty}
            </span>
            <button
              onClick={() => speakQuestion(currentQ.questionText)}
              className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent transition-colors"
              title="Listen to question"
            >
              <Volume2 className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Question text */}
          <h3 className="text-lg font-bold text-foreground mb-4 leading-relaxed">{currentQ.questionText}</h3>

          {/* Word hints */}
          {currentQ.wordHints && currentQ.wordHints.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {currentQ.wordHints.map((hint, i) => (
                <div key={i} className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs">
                  <span className="font-semibold text-primary">{hint.word}</span>
                  <span className="text-muted-foreground ml-1">= {hint.meaning}</span>
                </div>
              ))}
            </div>
          )}

          {/* MCQ Options */}
          {isMCQ && questionState === "unanswered" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {options.map((opt, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleOptionSelect(opt!)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border-2 border-border/70 bg-muted/30 p-3.5 text-left text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm"
                >
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-md bg-muted text-xs font-bold text-muted-foreground mr-2.5">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </motion.button>
              ))}
            </div>
          )}

          {/* MCQ Results */}
          {isMCQ && questionState !== "unanswered" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {options.map((opt, i) => {
                const isCorrectOpt = opt === currentQ.correctAnswer;
                const isSelectedOpt = opt === selectedOption;
                return (
                  <div
                    key={i}
                    className={cn(
                      "rounded-xl border-2 p-3.5 text-sm font-medium",
                      isCorrectOpt
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : isSelectedOpt && !isCorrectOpt
                        ? "border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400"
                        : "border-border/40 text-muted-foreground/60 bg-muted/20"
                    )}
                  >
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-md bg-muted/60 text-xs font-bold mr-2.5">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                    {isCorrectOpt && " ✓"}
                    {isSelectedOpt && !isCorrectOpt && " ✗"}
                  </div>
                );
              })}
            </div>
          )}

          {/* Type answer input */}
          {!isMCQ && answerMode === "type" && questionState === "unanswered" && (
            <form onSubmit={handleTypeSubmit} className="flex gap-2.5">
              <input
                ref={inputRef}
                type="text"
                value={typedAnswer}
                onChange={e => setTypedAnswer(e.target.value)}
                placeholder="Type your answer in English..."
                className="input-field flex-1 text-base h-12 rounded-xl"
                autoFocus
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-5 h-12 rounded-xl shrink-0"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          )}

          {/* ── Speak answer mode — premium Apple-style recording UI ── */}
          {!isMCQ && answerMode === "speak" && questionState === "unanswered" && (
            <div className="space-y-4">

              {/* Sound visualizer — shown while listening */}
              <AnimatePresence>
                {isListening && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-end justify-center gap-1.5 py-3"
                    style={{ minHeight: 88 }}
                  >
                    {/* 11 animated sound bars — large, vibrant */}
                    {Array.from({ length: 11 }).map((_, i) => (
                      <div key={i} className="sound-bar-lg" />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Transcript area — shows spoken text */}
              <div
                className={cn(
                  "rounded-2xl border-2 p-5 min-h-[70px] flex items-center justify-center transition-all duration-300",
                  isListening
                    ? "border-rose-500/50 bg-rose-500/5 shadow-[0_0_20px_rgba(244,63,94,0.1)]"
                    : spokenAnswer
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_20px_rgba(98,114,241,0.1)]"
                    : "border-border/50 bg-muted/20"
                )}
              >
                {isListening ? (
                  /* Active listening indicator */
                  <div className="text-center">
                    <p className="text-rose-400 font-bold text-sm animate-pulse">🎙️ Listening — speak clearly in English…</p>
                    {spokenAnswer && (
                      <p className="text-foreground font-semibold mt-2 text-base">&ldquo;{spokenAnswer}&rdquo;</p>
                    )}
                  </div>
                ) : spokenAnswer ? (
                  /* Show the transcript */
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest font-medium">Your answer</p>
                    <p className="text-foreground font-bold text-lg">&ldquo;{spokenAnswer}&rdquo;</p>
                  </div>
                ) : (
                  /* Idle prompt */
                  <div className="text-center">
                    <Mic className="h-7 w-7 text-muted-foreground/30 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm font-medium">
                      Tap the microphone and speak your answer in English
                    </p>
                    <p className="text-muted-foreground/50 text-xs mt-1">
                      Web Speech API — works best in Chrome
                    </p>
                  </div>
                )}
              </div>

              {/* Big mic button — center stage, Apple/Siri style */}
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="relative flex items-center justify-center">
                  {/* Pulse rings — only when listening */}
                  {isListening && (
                    <>
                      <div className="mic-ring absolute inset-[-16px]" />
                      <div className="mic-ring absolute inset-[-16px]" />
                      <div className="mic-ring absolute inset-[-16px]" />
                    </>
                  )}

                  {/* The main mic button */}
                  <motion.button
                    onClick={toggleListening}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={cn(
                      "relative z-10 flex h-24 w-24 items-center justify-center rounded-full text-white transition-all duration-300",
                      isListening
                        ? "bg-gradient-to-br from-rose-500 to-red-600 shadow-[0_0_40px_rgba(244,63,94,0.5),0_0_80px_rgba(244,63,94,0.2)] speak-active"
                        : "bg-gradient-to-br from-primary to-violet-600 shadow-[0_0_30px_rgba(98,114,241,0.4),0_0_60px_rgba(98,114,241,0.15)] hover:shadow-[0_0_50px_rgba(98,114,241,0.5),0_0_80px_rgba(98,114,241,0.2)]"
                    )}
                  >
                    {/* Inner ring decoration */}
                    <div className="absolute inset-2 rounded-full border border-white/20" />
                    {isListening ? (
                      <MicOff className="h-10 w-10 relative z-10" />
                    ) : (
                      <Mic className="h-10 w-10 relative z-10" />
                    )}
                  </motion.button>
                </div>

                {/* Label under button */}
                <p className={cn(
                  "text-sm font-semibold transition-colors duration-200",
                  isListening ? "text-rose-400" : "text-muted-foreground"
                )}>
                  {isListening ? "Tap to stop recording" : "Tap to start speaking"}
                </p>

                {/* Submit button — appears once answer is transcribed */}
                <AnimatePresence>
                  {spokenAnswer && !isListening && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.85, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: 8 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      onClick={handleSpokenSubmit}
                      className="btn-primary gap-2 px-8 py-3 text-base rounded-xl"
                    >
                      <Send className="h-4 w-4" />
                      Submit Answer
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Answer result */}
          <AnimatePresence>
            {questionState !== "unanswered" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className={cn("rounded-xl p-4 mt-4",
                  questionState === "correct" ? "bg-emerald-500/10 border border-emerald-500/30" :
                  questionState === "revealed" ? "bg-amber-500/10 border border-amber-500/30" :
                  "bg-rose-500/10 border border-rose-500/30")}>
                {questionState === "correct" ? (
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Excellent! +{currentQ.points} points
                  </p>
                ) : questionState === "wrong" ? (
                  <p className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" /> Not quite. Correct: <span className="font-bold">{currentQ.correctAnswer}</span>
                  </p>
                ) : (
                  <p className="text-amber-600 dark:text-amber-400 font-semibold">
                    Answer: <span className="font-bold">{currentQ.correctAnswer}</span>
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-2">{currentQ.explanation}</p>
                {currentQ.hindiExplanation && (
                  <p className="text-sm text-primary/80 mt-1">{currentQ.hindiExplanation}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Bottom actions */}
      <div className="flex items-center justify-between gap-3">
        {questionState === "unanswered" && !isMCQ && (
          <button onClick={revealAnswer} className="btn-ghost gap-2 text-sm">
            <Eye className="h-4 w-4" /> Reveal Answer
          </button>
        )}
        {questionState !== "unanswered" && (
          <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            onClick={nextQuestion} className="btn-primary ml-auto gap-2 px-8">
            {currentQIndex >= questions.length - 1 ? (
              <><Trophy className="h-4 w-4" /> Finish Practice</>
            ) : (
              <>Next Question <ChevronRight className="h-4 w-4" /></>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
// Close the memo() wrapper
});
