"use client";
// ============================================================
// Mock Test Client - 50-question full test with timer
// Modes: TYPE and SPEAK answers
// ============================================================

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  ChevronRight,
  Check,
  X,
  Mic,
  MicOff,
  Type,
  RotateCcw,
  Trophy,
  Zap,
  Target,
  AlertCircle,
} from "lucide-react";
import { cn, formatTime, calculateGrade, gradeColor } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { useSound } from "@/hooks/use-sound";

interface Question {
  id: string;
  questionText: string;
  questionType: string;
  correctAnswer: string;
  explanation: string;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  points: number;
  timeLimit: number;
}

interface MockTestClientProps {
  questions: Question[];
  userId: string;
}

type AnswerMode = "TYPE" | "SPEAK";
type TestState = "ready" | "running" | "finished";

interface QuestionResult {
  questionId: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
  timeTaken: number;
  inputMethod: AnswerMode;
}

const TIME_PER_QUESTION = 60;

export function MockTestClient({ questions, userId }: MockTestClientProps) {
  const [testState, setTestState] = useState<TestState>("ready");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerMode, setAnswerMode] = useState<AnswerMode>("TYPE");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState<QuestionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const { playCorrect, playWrong, playPerfect } = useSound();

  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    isSupported: speechSupported,
  } = useSpeechRecognition({ language: "en-US" });

  const currentQuestion = questions[currentIndex];

  const submitAnswer = useCallback(
    (answer: string, timedOut = false) => {
      if (showFeedback) return;
      if (timerRef.current) clearInterval(timerRef.current);

      const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000);
      const finalAnswer = answer || typedAnswer || selectedOption || "";
      const correct =
        finalAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase();
      const pointsEarned = correct ? currentQuestion.points : 0;

      if (correct) {
        playCorrect();
      } else {
        playWrong();
      }

      const result: QuestionResult = {
        questionId: currentQuestion.id,
        userAnswer: finalAnswer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: correct,
        pointsEarned,
        timeTaken,
        inputMethod: answerMode,
      };

      setLastResult(result);
      setResults((prev) => [...prev, result]);
      setShowFeedback(true);
    },
    [
      showFeedback,
      typedAnswer,
      selectedOption,
      currentQuestion,
      answerMode,
      playCorrect,
      playWrong,
    ],
  );

  const handleTimeUp = useCallback(() => {
    if (showFeedback) return;
    submitAnswer("", true);
  }, [showFeedback, submitAnswer]);

  // Timer
  useEffect(() => {
    if (testState !== "running" || showFeedback) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleTimeUp();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, handleTimeUp, showFeedback, testState]);

  // Reset timer on question change
  useEffect(() => {
    if (testState === "running") {
      setTimeLeft(TIME_PER_QUESTION);
      startTimeRef.current = Date.now();
    }
  }, [currentIndex, testState]);

  // When speech transcript comes in
  useEffect(() => {
    if (transcript && !isListening) {
      setTypedAnswer(transcript);
    }
  }, [transcript, isListening]);

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      finishTest();
    } else {
      setCurrentIndex((i) => i + 1);
      setTypedAnswer("");
      setSelectedOption(null);
      setShowFeedback(false);
      setLastResult(null);
      resetTranscript();
    }
  };

  const finishTest = async () => {
    setTestState("finished");

    // Save to DB
    const totalScore = results.reduce((sum, r) => sum + r.pointsEarned, 0);
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
    const correct = results.filter((r) => r.isCorrect).length;
    const percentage = Math.round((totalScore / maxScore) * 100);
    const xpEarned = Math.round(totalScore / 2);

    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await fetch("/api/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            activity: "MOCK_TEST",
            points: totalScore,
            xp: xpEarned,
            coins: Math.floor(xpEarned / 5),
          }),
        });
      } catch {
        // Silently fail
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const startTest = () => {
    setTestState("running");
    setCurrentIndex(0);
    setResults([]);
    setTypedAnswer("");
    setSelectedOption(null);
    setShowFeedback(false);
    startTimeRef.current = Date.now();
  };

  const restartTest = () => {
    setTestState("ready");
    setCurrentIndex(0);
    setResults([]);
    setTypedAnswer("");
    setSelectedOption(null);
    setShowFeedback(false);
    setLastResult(null);
  };

  // Determine if MCQ
  const isMCQ =
    currentQuestion?.optionA &&
    currentQuestion?.optionB &&
    currentQuestion?.optionC &&
    currentQuestion?.optionD;

  // ─── Ready Screen ──────────────────────────────────────────
  if (testState === "ready") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">🎯 Mock Test</h1>
          <p className="text-muted-foreground">
            Test your English knowledge with 50 questions from all topics
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Questions", value: questions.length, icon: Target },
            { label: "Time/Question", value: `${TIME_PER_QUESTION}s`, icon: Timer },
            { label: "Max XP", value: "250+", icon: Zap },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <h2 className="font-semibold">Answer Mode</h2>
          <div className="flex gap-3">
            {(["TYPE", "SPEAK"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setAnswerMode(mode)}
                disabled={mode === "SPEAK" && !speechSupported}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-all",
                  answerMode === mode
                    ? "border-primary bg-primary text-white"
                    : "border-border text-muted-foreground hover:bg-accent disabled:opacity-50"
                )}
              >
                {mode === "TYPE" ? <Type className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                {mode === "SPEAK" && !speechSupported
                  ? "SPEAK (Unsupported)"
                  : mode}
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-sm text-amber-600 flex gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <p>
              Read each question carefully. You have {TIME_PER_QUESTION} seconds
              per question. For fill-in-the-blank, type exactly what's missing.
            </p>
          </div>
        </div>

        <button
          onClick={startTest}
          disabled={questions.length === 0}
          className="w-full rounded-xl bg-primary text-white py-4 font-semibold text-lg hover:bg-primary/90 transition-all disabled:opacity-50"
        >
          Start Test ({questions.length} Questions)
        </button>
      </div>
    );
  }

  // ─── Finished Screen ───────────────────────────────────────
  if (testState === "finished") {
    const totalScore = results.reduce((sum, r) => sum + r.pointsEarned, 0);
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
    const correct = results.filter((r) => r.isCorrect).length;
    const percentage = Math.round((correct / questions.length) * 100);
    const grade = calculateGrade(percentage);
    const xpEarned = Math.round(totalScore / 2);

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-3"
        >
          <div className="text-6xl">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🎯" : "📚"}
          </div>
          <h1 className="text-3xl font-bold">Test Complete!</h1>
          <div
            className={cn(
              "text-6xl font-bold",
              gradeColor(grade)
            )}
          >
            {grade}
          </div>
          <p className="text-muted-foreground">{percentage}% correct</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Correct", value: correct, color: "text-emerald-500" },
            {
              label: "Wrong",
              value: questions.length - correct,
              color: "text-red-500",
            },
            { label: "Score", value: `${totalScore}/${maxScore}`, color: "text-blue-500" },
            { label: "XP Earned", value: `+${xpEarned}`, color: "text-yellow-500" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <p className={cn("text-2xl font-bold", color)}>{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Answer review */}
        <div className="rounded-2xl border border-border bg-card p-4">
          <h2 className="font-semibold mb-3">Question Review</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {results.map((result, i) => (
              <div
                key={result.questionId}
                className={cn(
                  "rounded-xl border p-3 text-sm",
                  result.isCorrect
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-red-500/30 bg-red-500/5"
                )}
              >
                <div className="flex items-start gap-2">
                  {result.isCorrect ? (
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium">
                      Q{i + 1}. {questions[i]?.questionText}
                    </p>
                    {!result.isCorrect && (
                      <p className="text-xs mt-1">
                        <span className="text-muted-foreground">Your answer: </span>
                        <span className="text-red-500">{result.userAnswer || "(skipped)"}</span>
                        <span className="text-muted-foreground"> • Correct: </span>
                        <span className="text-emerald-500">{result.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {result.pointsEarned}pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={restartTest}
          className="w-full flex items-center justify-center gap-2 rounded-xl border border-border py-3 font-medium hover:bg-accent transition-all"
        >
          <RotateCcw className="h-4 w-4" />
          Take Again
        </button>
      </div>
    );
  }

  // ─── Running Screen ────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground shrink-0">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Timer + score */}
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "flex items-center gap-2 font-mono text-sm font-bold rounded-lg px-3 py-1.5",
            timeLeft <= 10
              ? "bg-red-500/10 text-red-500"
              : "bg-muted text-foreground"
          )}
        >
          <Timer className="h-4 w-4" />
          {formatTime(timeLeft)}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Trophy className="h-4 w-4 text-yellow-500" />
          {results.reduce((sum, r) => sum + r.pointsEarned, 0)} pts
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-border bg-card p-6 space-y-5"
        >
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Question {currentIndex + 1} •{" "}
              {currentQuestion.questionType.replace(/_/g, " ")} •{" "}
              {currentQuestion.points} pts
            </span>
            <p className="text-lg font-semibold mt-2 leading-relaxed">
              {currentQuestion.questionText}
            </p>
          </div>

          {/* MCQ Options */}
          {isMCQ && !showFeedback && (
            <div className="grid grid-cols-1 gap-2">
              {[
                { key: "A", val: currentQuestion.optionA },
                { key: "B", val: currentQuestion.optionB },
                { key: "C", val: currentQuestion.optionC },
                { key: "D", val: currentQuestion.optionD },
              ].map(({ key, val }) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedOption(val || "");
                    setTypedAnswer(val || "");
                  }}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-3 text-left text-sm transition-all",
                    selectedOption === val
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:bg-accent"
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    {key}
                  </span>
                  {val}
                </button>
              ))}
            </div>
          )}

          {/* Text / Speech input */}
          {!isMCQ && !showFeedback && (
            <div className="space-y-3">
              {answerMode === "TYPE" ? (
                <input
                  type="text"
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitAnswer(typedAnswer)}
                  placeholder="Type your answer here..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  autoFocus
                />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  {transcript && (
                    <p className="text-sm text-center">{transcript}</p>
                  )}
                  <button
                    onClick={
                      isListening
                        ? () => {
                            stopListening();
                          }
                        : startListening
                    }
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full transition-all",
                      isListening
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-primary text-white"
                    )}
                  >
                    {isListening ? (
                      <MicOff className="h-7 w-7" />
                    ) : (
                      <Mic className="h-7 w-7" />
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    {isListening ? "Listening..." : "Tap to speak your answer"}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Feedback overlay */}
          <AnimatePresence>
            {showFeedback && lastResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "rounded-xl border p-4",
                  lastResult.isCorrect
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-red-500/30 bg-red-500/10"
                )}
              >
                <div className="flex items-start gap-3">
                  {lastResult.isCorrect ? (
                    <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 shrink-0" />
                  )}
                  <div>
                    <p className="font-semibold">
                      {lastResult.isCorrect ? "Correct!" : "Incorrect"}
                    </p>
                    {!lastResult.isCorrect && (
                      <p className="text-sm mt-1">
                        <span className="text-muted-foreground">Answer: </span>
                        <span className="font-medium">
                          {lastResult.correctAnswer}
                        </span>
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {questions[currentIndex]?.explanation}
                    </p>
                  </div>
                  {lastResult.isCorrect && (
                    <span className="ml-auto text-emerald-500 font-bold">
                      +{lastResult.pointsEarned} pts
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Submit / Next button */}
      {!showFeedback ? (
        <button
          onClick={() => submitAnswer(typedAnswer || selectedOption || "")}
          disabled={!typedAnswer && !selectedOption}
          className="w-full rounded-xl bg-primary text-white py-3 font-medium disabled:opacity-50 hover:bg-primary/90 transition-all"
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-all"
        >
          {currentIndex === questions.length - 1 ? "Finish Test" : "Next Question"}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
