"use client";
// ============================================================
// Practice Section - Core practice with TYPE and SPEAK modes
// 80-100 questions per subtopic, real scoring, sound effects
// ============================================================

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Mic, MicOff, Send, SkipForward,
  Volume2, X, Zap, AlertCircle, Trophy, RefreshCcw,
  ChevronRight, Eye,
} from "lucide-react";
import { cn, checkAnswer, playSound } from "@/lib/utils";
// Import real question data for Day 1
import { ALL_DAY_1_QUESTIONS } from "@/data/questions/day-1-questions";
// Import extended questions (80+ additional questions)
import { ALL_DAY1_EXTENDED_QUESTIONS } from "@/data/questions/day-1-extended-questions";
// Import Day 2 questions
import { ALL_DAY_2_QUESTIONS } from "@/data/questions/day-2-questions";
// Import the PracticeQ type for type compatibility
import type { PracticeQ } from "@/data/questions/day-1-questions";
// Import vocabulary data for question generation
import { ALL_DAY_1_VOCABULARY } from "@/data/vocabulary/day-1-vocabulary";
import { ALL_DAY_2_VOCABULARY } from "@/data/vocabulary/day-2-vocabulary";
// Import question generator (creates 3 questions per vocabulary word)
import { generateQuestionsFromVocab } from "@/data/questions/question-generator";

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

// ─── Helper: Generate vocab-based questions as rich fallback ──
// Generates 3 questions per vocabulary word (600 per day)
function getVocabGeneratedQuestions(dayNumber: number, subtopicId: string): Question[] {
  const vocab = dayNumber === 2 ? ALL_DAY_2_VOCABULARY : ALL_DAY_1_VOCABULARY;
  // Use a slice of vocabulary relevant to this subtopic's index
  const subtopicNum = parseInt(subtopicId.split("-s").pop() || "1", 10);
  const wordsPerSubtopic = 15; // 15 words × 3 questions = 45 questions per subtopic
  const startIdx = ((subtopicNum - 1) * wordsPerSubtopic) % vocab.length;
  const slicedVocab = vocab.slice(startIdx, startIdx + wordsPerSubtopic);
  // If slice is too short, wrap around
  const finalVocab = slicedVocab.length >= 10
    ? slicedVocab
    : [...slicedVocab, ...vocab.slice(0, wordsPerSubtopic - slicedVocab.length)];
  const generated = generateQuestionsFromVocab(finalVocab, subtopicId, dayNumber, subtopicNum);
  return generated.map(pq => mapPracticeQToQuestion(pq as any));
}

// ─── Helper: Load questions for a specific day and subtopic ──
// Combines base questions + extended questions + vocab-generated questions
function loadQuestionsForSubtopic(dayNumber: number, subtopicId: string): Question[] {
  // For Day 1, combine both question banks
  if (dayNumber === 1) {
    // Get base questions for this subtopic
    const baseQs = ALL_DAY_1_QUESTIONS.filter(q => q.subtopicId === subtopicId);
    // Get extended questions for this subtopic
    const extQs = ALL_DAY1_EXTENDED_QUESTIONS.filter(q => q.subtopicId === subtopicId);
    // Combine handwritten questions
    const handwritten = [...baseQs, ...extQs].map(mapPracticeQToQuestion);
    // Always add vocab-generated questions for variety (45 more)
    const generated = getVocabGeneratedQuestions(1, subtopicId);
    const combined = [...handwritten, ...generated];
    if (combined.length > 0) return combined;
    // Full fallback: all Day 1 questions + vocab generated
    return [
      ...ALL_DAY_1_QUESTIONS.map(mapPracticeQToQuestion),
      ...getVocabGeneratedQuestions(1, subtopicId),
    ];
  }
  // For Day 2, use the Day 2 question bank + vocab generated
  if (dayNumber === 2) {
    const d2Qs = ALL_DAY_2_QUESTIONS.filter(q => q.subtopicId === subtopicId);
    const generated = getVocabGeneratedQuestions(2, subtopicId);
    const handwritten = d2Qs.map(mapPracticeQToQuestion);
    const combined = [...handwritten, ...generated];
    if (combined.length > 0) return combined;
    return [...ALL_DAY_2_QUESTIONS.map(mapPracticeQToQuestion), ...generated];
  }
  // For all other days (3-75): generate 45 questions from Day 1 vocab
  // (will be replaced when day-specific content is added)
  const fallbackGenerated = getVocabGeneratedQuestions(1, subtopicId);
  if (fallbackGenerated.length > 0) return fallbackGenerated;
  return ALL_DAY_1_QUESTIONS.map(mapPracticeQToQuestion);
}

export function PracticeSection({ dayNumber, subtopicId, subtopicTitle, topicColor, userId, onComplete }: PracticeSectionProps) {
  // Load real questions dynamically based on day and subtopic
  const [questions] = useState<Question[]>(() => loadQuestionsForSubtopic(dayNumber, subtopicId));
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
  if (showComplete) {
    const accuracy = Math.round((correct / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 py-8">
        <div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
            <Trophy className="h-20 w-20 text-gold-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl font-black text-foreground">Practice Complete!</h2>
          <p className="text-muted-foreground mt-2">Great work on {subtopicTitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { label: "Score", value: `${score}`, color: "text-gold-500" },
            { label: "Correct", value: `${correct}/${questions.length}`, color: "text-emerald-500" },
            { label: "Accuracy", value: `${accuracy}%`, color: "text-blue-500" },
          ].map(stat => (
            <div key={stat.label} className="card-base rounded-xl text-center py-4">
              <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setCurrentQIndex(0); setScore(0); setCorrect(0); setWrong(0); setQuestionState("unanswered"); setShowComplete(false); }}
            className="btn-secondary gap-2">
            <RefreshCcw className="h-4 w-4" /> Retry
          </button>
          <button onClick={() => onComplete(accuracy)} className="btn-primary gap-2 px-8">
            <Zap className="h-4 w-4" /> Continue to Test →
          </button>
        </div>
      </motion.div>
    );
  }

  const isMCQ = currentQ.questionType === "MCQ";
  const options = isMCQ ? [currentQ.optionA, currentQ.optionB, currentQ.optionC, currentQ.optionD].filter(Boolean) : [];

  return (
    <div className="space-y-5">
      {/* Header with score */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="badge-primary font-bold">{currentQIndex + 1} / {questions.length}</div>
          <div className="flex items-center gap-1 text-emerald-500 text-sm font-semibold">
            <CheckCircle2 className="h-4 w-4" />{correct}
          </div>
          <div className="flex items-center gap-1 text-rose-500 text-sm font-semibold">
            <X className="h-4 w-4" />{wrong}
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 px-3 py-1.5">
          <Zap className="h-4 w-4 text-gold-500" />
          <span className="text-sm font-bold text-gold-500">{score} pts</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div className="h-full bg-gradient-to-r from-primary to-purple-500"
          animate={{ width: `${((currentQIndex) / questions.length) * 100}%` }} />
      </div>

      {/* Answer mode toggle */}
      <div className="flex gap-2 p-1 rounded-xl bg-muted border border-border w-fit">
        <button onClick={() => setAnswerMode("type")}
          className={cn("flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all",
            answerMode === "type" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
          ⌨️ Type
        </button>
        <button onClick={() => setAnswerMode("speak")}
          className={cn("flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all",
            answerMode === "speak" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
          🎤 Speak
        </button>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div key={currentQIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className={cn("rounded-2xl border-2 p-5 transition-colors",
            questionState === "correct" && "border-emerald-500 bg-emerald-500/5",
            questionState === "wrong" && "border-rose-500 bg-rose-500/5",
            questionState === "revealed" && "border-amber-500 bg-amber-500/5",
            questionState === "unanswered" && "border-border bg-card"
          )}>
          {/* Difficulty badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={cn("badge text-xs", currentQ.difficulty === "BEGINNER" ? "badge-success" : currentQ.difficulty === "INTERMEDIATE" ? "badge-warning" : "badge-danger")}>
              {currentQ.difficulty}
            </span>
            <button onClick={() => speakQuestion(currentQ.questionText)} className="btn-ghost p-1.5 rounded-lg">
              <Volume2 className="h-4 w-4" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {options.map((opt, i) => (
                <button key={i} onClick={() => handleOptionSelect(opt!)}
                  className={cn("rounded-xl border-2 p-3 text-left text-sm font-medium transition-all",
                    "border-border hover:border-primary/50 hover:bg-primary/5")}>
                  <span className="text-muted-foreground mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                </button>
              ))}
            </div>
          )}

          {/* MCQ Results */}
          {isMCQ && questionState !== "unanswered" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {options.map((opt, i) => {
                const isCorrectOpt = opt === currentQ.correctAnswer;
                const isSelectedOpt = opt === selectedOption;
                return (
                  <div key={i} className={cn("rounded-xl border-2 p-3 text-sm font-medium",
                    isCorrectOpt ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" :
                    isSelectedOpt && !isCorrectOpt ? "border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400" :
                    "border-border/50 text-muted-foreground opacity-60")}>
                    <span className="mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                    {isCorrectOpt && " ✅"}
                    {isSelectedOpt && !isCorrectOpt && " ❌"}
                  </div>
                );
              })}
            </div>
          )}

          {/* Type answer input */}
          {!isMCQ && answerMode === "type" && questionState === "unanswered" && (
            <form onSubmit={handleTypeSubmit} className="flex gap-2">
              <input ref={inputRef} type="text" value={typedAnswer}
                onChange={e => setTypedAnswer(e.target.value)}
                placeholder="Type your answer in English..."
                className="input-field flex-1 text-base" autoFocus />
              <button type="submit" className="btn-primary px-4 py-2 shrink-0">
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Speak answer */}
          {!isMCQ && answerMode === "speak" && questionState === "unanswered" && (
            <div className="space-y-3">
              {/* Speech recording area */}
              <div className={cn("rounded-xl border-2 p-4 min-h-16 flex items-center justify-center transition-colors",
                isListening ? "border-rose-500 bg-rose-500/5 animate-pulse" : "border-border")}>
                {isListening ? (
                  <div className="flex items-center gap-3">
                    <div className="sound-wave">
                      {[1,2,3,4,5,6,7].map(n => <div key={n} className="sound-wave-bar" />)}
                    </div>
                    <span className="text-sm text-rose-500 font-medium">Listening...</span>
                  </div>
                ) : spokenAnswer ? (
                  <p className="text-foreground font-medium text-center">{spokenAnswer}</p>
                ) : (
                  <p className="text-muted-foreground text-sm text-center">Click the mic and speak your answer in English</p>
                )}
              </div>
              <div className="flex gap-2">
                <button onClick={toggleListening}
                  className={cn("flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium flex-1 justify-center transition-all",
                    isListening ? "bg-rose-500 text-white hover:bg-rose-600" : "bg-primary text-white hover:bg-primary/90")}>
                  {isListening ? <><MicOff className="h-5 w-5" /> Stop Recording</> : <><Mic className="h-5 w-5" /> Start Speaking</>}
                </button>
                {spokenAnswer && (
                  <button onClick={handleSpokenSubmit} className="btn-primary px-6">
                    <Send className="h-4 w-4" /> Submit
                  </button>
                )}
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
}
