"use client";
// ============================================================
// Speaking Lab - Pronunciation practice with Web Speech API
// Modes: sentence reading, shadowing, pronunciation check
// ============================================================

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Volume2,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Target,
  Zap,
  BookOpen,
  Headphones,
  AlertCircle,
} from "lucide-react";
import { cn, stringSimilarity } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";

// ─── Practice sentences organized by category ─────────────────
const PRACTICE_SENTENCES = [
  {
    category: "Greetings",
    sentences: [
      "Hello, my name is Sarah. It is nice to meet you.",
      "Good morning! How are you doing today?",
      "I am very happy to see you again after so long.",
      "Please allow me to introduce myself to the group.",
    ],
  },
  {
    category: "Daily Conversations",
    sentences: [
      "Could you please tell me where the nearest bus stop is?",
      "I would like to order a cup of coffee, please.",
      "What time does the office open in the morning?",
      "I am sorry for being late. There was heavy traffic.",
    ],
  },
  {
    category: "Pronunciation Practice",
    sentences: [
      "She sells seashells by the seashore.",
      "The big black bear sat on a big black rug.",
      "How much wood would a woodchuck chuck?",
      "Peter Piper picked a peck of pickled peppers.",
    ],
  },
  {
    category: "Office English",
    sentences: [
      "I would like to schedule a meeting for tomorrow afternoon.",
      "Please send me the report by the end of business today.",
      "Could we discuss the project timeline in our next meeting?",
      "I will forward the email to the concerned department immediately.",
    ],
  },
];

type Mode = "reading" | "shadowing" | "free";

interface SpeakingLabProps {
  userId?: string;
}

export function SpeakingLab({ userId }: SpeakingLabProps) {
  const [mode, setMode] = useState<Mode>("reading");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [score, setScore] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string>("");
  const [sessionScore, setSessionScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    isSupported,
    error: speechError,
    confidence,
  } = useSpeechRecognition({
    language: "en-US",
    continuous: false,
    interimResults: true,
  });

  const currentCategory = PRACTICE_SENTENCES[categoryIndex];
  const currentSentence = currentCategory.sentences[sentenceIndex];

  // Evaluate transcript against target
  const evaluateSpeech = (spoken: string, targetText: string) => {
    if (!spoken.trim()) return 0;

    const similarity = stringSimilarity(
      spoken.toLowerCase().trim(),
      targetText.toLowerCase().trim()
    );
    return Math.round(similarity * 100);
  };

  // When we get a transcript, evaluate it
  const saveSpeechAttempt = useCallback(
    async (accuracy: number, spokenTranscript: string) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      try {
        await fetch("/api/speech", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            targetText: currentSentence,
            transcript: spokenTranscript,
            confidence,
            accuracy: accuracy / 100,
            wordsCorrect: Math.round(
              (accuracy / 100) * currentSentence.split(" ").length,
            ),
            wordsTotal: currentSentence.split(" ").length,
            pronunciationScore: accuracy / 100,
            fluencyScore: confidence || accuracy / 100,
          }),
        });
      } catch {
        // Speech progress is best-effort when offline or unsupported.
      } finally {
        setIsSubmitting(false);
      }
    },
    [confidence, currentSentence, isSubmitting],
  );

  useEffect(() => {
    if (transcript && !isListening) {
      const accuracy = evaluateSpeech(transcript, currentSentence);
      setScore(accuracy);

      if (accuracy >= 90) {
        setFeedback("Excellent! Your pronunciation is perfect! 🌟");
      } else if (accuracy >= 70) {
        setFeedback("Good job! A little more practice and you'll nail it! 👍");
      } else if (accuracy >= 50) {
        setFeedback("Keep practicing! Try speaking more slowly and clearly. 💪");
      } else {
        setFeedback(
          "Don't give up! Read the sentence aloud slowly first, then try again. 📖"
        );
      }

      setScores((prev) => [...prev, accuracy]);
      setAttempts((prev) => prev + 1);
      setSessionScore((prev) => prev + accuracy);

      // Save to DB
      if (userId) {
        saveSpeechAttempt(accuracy, transcript);
      }
    }
  }, [currentSentence, isListening, saveSpeechAttempt, transcript, userId]);

  const handleNextSentence = () => {
    const sentences = currentCategory.sentences;
    if (sentenceIndex < sentences.length - 1) {
      setSentenceIndex((i) => i + 1);
    } else {
      setCategoryIndex((i) => (i + 1) % PRACTICE_SENTENCES.length);
      setSentenceIndex(0);
    }
    resetTranscript();
    setScore(null);
    setFeedback("");
  };

  const handlePrevSentence = () => {
    if (sentenceIndex > 0) {
      setSentenceIndex((i) => i - 1);
    } else {
      const newCat = (categoryIndex - 1 + PRACTICE_SENTENCES.length) % PRACTICE_SENTENCES.length;
      setCategoryIndex(newCat);
      setSentenceIndex(PRACTICE_SENTENCES[newCat].sentences.length - 1);
    }
    resetTranscript();
    setScore(null);
    setFeedback("");
  };

  const handleTryAgain = () => {
    resetTranscript();
    setScore(null);
    setFeedback("");
  };

  // Text-to-speech
  const speakSentence = () => {
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(currentSentence);
    utterance.lang = "en-US";
    utterance.rate = mode === "shadowing" ? 0.85 : 1.0;
    speechSynthesis.speak(utterance);
  };

  const avgScore =
    scores.length > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Premium header */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(238 84% 6%) 0%, hsl(224 30% 8%) 60%, hsl(280 60% 7%) 100%)",
          }}
        />
        <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-[70px]" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-500/15 blur-[50px]" />
        <div className="absolute inset-0 grid-dots opacity-[0.04]" />
        <div className="relative p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl md:text-3xl font-black text-white">Speaking Lab</h1>
              <p className="text-white/60 mt-1">
                Practice pronunciation, shadowing, and free talking
              </p>
            </div>
            <div className="flex gap-3 sm:ml-auto flex-wrap justify-center">
              {[
                { label: "Attempts", value: attempts, icon: Target, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
                { label: "Avg Score", value: `${avgScore}%`, icon: Zap, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
                { label: "XP Earned", value: Math.floor(sessionScore / 10), icon: BookOpen, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
              ].map(stat => (
                <div key={stat.label} className={cn("flex items-center gap-2 rounded-xl border px-3.5 py-2.5 backdrop-blur-sm", stat.bg)}>
                  <stat.icon className={cn("h-4 w-4", stat.color)} />
                  <div>
                    <p className={cn("text-lg font-black leading-none", stat.color)}>{stat.value}</p>
                    <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mode selector */}
      <div className="flex rounded-xl border border-border overflow-hidden">
        {(
          [
            { key: "reading", label: "📖 Reading", desc: "Read aloud" },
            { key: "shadowing", label: "🎧 Shadowing", desc: "Listen & repeat" },
            { key: "free", label: "🎤 Free Talk", desc: "Speak freely" },
          ] as const
        ).map(({ key, label, desc }) => (
          <button
            key={key}
            onClick={() => {
              setMode(key);
              handleTryAgain();
            }}
            className={cn(
              "flex-1 py-3 px-2 text-center transition-all",
              mode === key
                ? "bg-primary text-white"
                : "text-muted-foreground hover:bg-accent"
            )}
          >
            <p className="text-sm font-medium">{label}</p>
            <p className="text-xs opacity-75">{desc}</p>
          </button>
        ))}
      </div>

      {/* Main practice card */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
        {/* Category indicator */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
            {currentCategory.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {sentenceIndex + 1} / {currentCategory.sentences.length}
          </span>
        </div>

        {/* Target sentence */}
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-foreground leading-relaxed">
            {currentSentence}
          </p>

          {mode === "shadowing" && (
            <button
              onClick={speakSentence}
              className="flex items-center gap-2 mx-auto text-sm text-primary hover:underline"
            >
              <Headphones className="h-4 w-4" />
              Listen first
            </button>
          )}

          {mode !== "shadowing" && (
            <button
              onClick={speakSentence}
              className="flex items-center gap-2 mx-auto text-xs text-muted-foreground hover:text-foreground"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Hear pronunciation
            </button>
          )}
        </div>

        {/* Transcript display */}
        {transcript && (
          <div className="rounded-xl bg-muted/50 p-4">
            <p className="text-xs text-muted-foreground mb-1">You said:</p>
            <p className="text-sm text-foreground">{transcript}</p>
          </div>
        )}

        {/* Score display */}
        <AnimatePresence>
          {score !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                "rounded-xl p-4 flex items-center gap-3",
                score >= 70 ? "bg-emerald-500/10" : "bg-amber-500/10"
              )}
            >
              {score >= 70 ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 text-amber-500 shrink-0" />
              )}
              <div>
                <p className="font-semibold">
                  {score}% accuracy
                </p>
                <p className="text-sm text-muted-foreground">{feedback}</p>
              </div>
              <div className="ml-auto text-2xl font-bold">
                {score >= 90 ? "⭐" : score >= 70 ? "👍" : "💪"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Microphone button */}
        {!isSupported && (
          <div className="flex items-center gap-2 text-amber-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            Your browser doesn't support speech recognition. Try Chrome or Edge.
          </div>
        )}

        {speechError && (
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            {speechError}
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isListening ? stopListening : startListening}
            disabled={!isSupported}
            className={cn(
              "flex h-20 w-20 items-center justify-center rounded-full transition-all shadow-lg",
              isListening
                ? "bg-red-500 text-white animate-pulse shadow-red-500/30"
                : "bg-primary text-white shadow-primary/30"
            )}
          >
            {isListening ? (
              <MicOff className="h-8 w-8" />
            ) : (
              <Mic className="h-8 w-8" />
            )}
          </motion.button>
          <p className="text-sm text-muted-foreground">
            {isListening ? "Listening... (tap to stop)" : "Tap to speak"}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevSentence}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>

          {score !== null && (
            <button
              onClick={handleTryAgain}
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <RotateCcw className="h-4 w-4" />
              Try again
            </button>
          )}

          <button
            onClick={handleNextSentence}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Category navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {PRACTICE_SENTENCES.map((cat, i) => (
          <button
            key={cat.category}
            onClick={() => {
              setCategoryIndex(i);
              setSentenceIndex(0);
              handleTryAgain();
            }}
            className={cn(
              "rounded-xl border p-3 text-sm text-left transition-all",
              i === categoryIndex
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-accent"
            )}
          >
            <p className="font-medium">{cat.category}</p>
            <p className="text-xs opacity-70 mt-0.5">
              {cat.sentences.length} sentences
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
