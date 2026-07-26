"use client";
// ============================================================
// Vocabulary Client - Full vocabulary page with search/filter/flashcard/quiz
// Shows initialWords immediately from server; only re-fetches when
// the user actively changes a filter or search term.
// ============================================================

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Filter,
  Volume2,
  Check,
  X,
  Star,
  Layers,
  List,
  Grid,
  Copy,
  Heart,
  Brain,
  CheckCircle2,
  XCircle,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VocabWord {
  id: string;
  word: string;
  meaning: string;
  hindiMeaning: string;
  ipa?: string | null;
  partOfSpeech: string;
  difficulty: string;
  example1: string;
  example2: string;
  synonyms: string;
  antonyms: string;
  day?: { dayNumber: number; title: string };
}

interface VocabularyClientProps {
  initialWords: VocabWord[];
  days: Array<{ id: string; dayNumber: number; title: string }>;
}

const DIFFICULTIES = ["ALL", "BEGINNER", "INTERMEDIATE", "ADVANCED"];
const PARTS_OF_SPEECH = [
  "ALL", "noun", "verb", "adjective", "adverb",
  "pronoun", "preposition", "conjunction", "interjection",
];

// ─── localStorage helpers ─────────────────────────────────────
function loadFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem("vocab-favorites");
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {}
  return new Set();
}

function saveFavorites(favs: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("vocab-favorites", JSON.stringify(Array.from(favs)));
  } catch {}
}

export function VocabularyClient({ initialWords, days }: VocabularyClientProps) {
  const [words, setWords] = useState<VocabWord[]>(initialWords);
  const [totalCount, setTotalCount] = useState(initialWords.length);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("ALL");
  const [partOfSpeech, setPartOfSpeech] = useState("ALL");
  const [selectedDay, setSelectedDay] = useState("ALL");
  const [view, setView] = useState<"list" | "grid" | "flashcard" | "quiz">("grid");
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizState, setQuizState] = useState<"asking" | "correct" | "wrong">("asking");
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [showQuizComplete, setShowQuizComplete] = useState(false);
  const quizInputRef = useRef<HTMLInputElement>(null);

  // ref: true after the very first render — lets us skip the mount fetch
  const isFirstMount = useRef(true);

  // Load favorites from localStorage on mount
  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  // Fetch words based on filters (debounced 300ms).
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const timeout = setTimeout(async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (difficulty !== "ALL") params.set("difficulty", difficulty);
        if (partOfSpeech !== "ALL") params.set("partOfSpeech", partOfSpeech);
        if (selectedDay !== "ALL") params.set("dayId", selectedDay);
        params.set("limit", "200");

        const res = await fetch(`/api/vocabulary?${params.toString()}`);
        if (res.ok) {
          const json = await res.json();
          setWords(json.data || []);
          setTotalCount(json.meta?.total ?? (json.data?.length || 0));
          setFlashcardIndex(0);
          setQuizIndex(0);
          setQuizState("asking");
        }
      } catch {
        // Keep existing words on error
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, difficulty, partOfSpeech, selectedDay]);

  // Client-side search also filters by hindi meaning
  const filteredWords = useMemo(() => {
    if (!search.trim()) return words;
    const q = search.toLowerCase().trim();
    return words.filter(
      (w) =>
        w.word.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        w.hindiMeaning.toLowerCase().includes(q) ||
        w.example1.toLowerCase().includes(q)
    );
  }, [words, search]);

  const toggleMastered = (wordId: string) => {
    setMasteredWords((prev) => {
      const next = new Set(prev);
      if (next.has(wordId)) next.delete(wordId);
      else next.add(wordId);
      return next;
    });
  };

  const toggleFavorite = (wordId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(wordId)) next.delete(wordId);
      else next.add(wordId);
      saveFavorites(next);
      return next;
    });
  };

  const currentFlashcard = filteredWords[flashcardIndex];
  const currentQuizWord = filteredWords[quizIndex];

  // Quiz submission
  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuizWord || quizState !== "asking") return;
    const userAns = quizAnswer.trim().toLowerCase();
    const correct = currentQuizWord.meaning.toLowerCase();
    const hindi = currentQuizWord.hindiMeaning.toLowerCase();
    const isCorrect =
      correct.includes(userAns) ||
      userAns.includes(correct.split(/[,;]/)[0].trim()) ||
      hindi.includes(userAns) ||
      userAns.length > 2 && correct.split(/\s+/).some(w => w.startsWith(userAns));

    setQuizTotal(t => t + 1);
    if (isCorrect) {
      setQuizState("correct");
      setQuizScore(s => s + 1);
    } else {
      setQuizState("wrong");
    }
  };

  const handleQuizNext = () => {
    if (quizIndex >= filteredWords.length - 1) {
      setShowQuizComplete(true);
    } else {
      setQuizIndex(i => i + 1);
      setQuizAnswer("");
      setQuizState("asking");
      setTimeout(() => quizInputRef.current?.focus(), 100);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizAnswer("");
    setQuizState("asking");
    setQuizScore(0);
    setQuizTotal(0);
    setShowQuizComplete(false);
  };

  const speakWord = (word: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const utt = new SpeechSynthesisUtterance(word);
    utt.lang = "en-US";
    utt.rate = 0.85;
    window.speechSynthesis.speak(utt);
  };

  const copyWord = (word: string) => {
    navigator.clipboard.writeText(word).catch(() => {});
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Vocabulary Bank
          </h1>
          <p className="text-muted-foreground mt-1">
            {totalCount.toLocaleString()} words •{" "}
            {masteredWords.size} mastered •{" "}
            {favorites.size} favorites ❤️
          </p>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          {(
            [
              { key: "list", icon: List, label: "List" },
              { key: "grid", icon: Grid, label: "Grid" },
              { key: "flashcard", icon: Layers, label: "Flash" },
              { key: "quiz", icon: Brain, label: "Quiz" },
            ] as const
          ).map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                view === key
                  ? "bg-primary text-white"
                  : "border border-border text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search + Filters */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search words, meanings, Hindi meanings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
              showFilters
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {/* Day filter */}
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Day</label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="ALL">All Days</option>
                    {days.map((d) => (
                      <option key={d.id} value={d.id}>
                        Day {d.dayNumber}: {d.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty filter */}
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Difficulty</label>
                  <div className="flex gap-2 flex-wrap">
                    {DIFFICULTIES.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDifficulty(d)}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-medium transition-all",
                          difficulty === d
                            ? "bg-primary text-white"
                            : "border border-border text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Part of speech filter */}
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Part of Speech</label>
                  <select
                    value={partOfSpeech}
                    onChange={(e) => setPartOfSpeech(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {PARTS_OF_SPEECH.map((p) => (
                      <option key={p} value={p}>
                        {p === "ALL" ? "All Parts of Speech" : p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}

      {/* ── QUIZ MODE ── */}
      {view === "quiz" && !isLoading && (
        <div className="max-w-lg mx-auto space-y-5">
          {showQuizComplete ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-5 py-8"
            >
              <div className="text-5xl mb-2">🏆</div>
              <h2 className="text-2xl font-black text-foreground">Quiz Complete!</h2>
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center">
                  <p className="text-2xl font-black text-emerald-400">{quizScore}</p>
                  <p className="text-xs text-muted-foreground">Correct</p>
                </div>
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-center">
                  <p className="text-2xl font-black text-rose-400">{quizTotal - quizScore}</p>
                  <p className="text-xs text-muted-foreground">Wrong</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-center">
                  <p className="text-2xl font-black text-primary">
                    {quizTotal > 0 ? Math.round((quizScore / quizTotal) * 100) : 0}%
                  </p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Try Again
              </button>
            </motion.div>
          ) : currentQuizWord ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={quizIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="space-y-4"
              >
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{quizIndex + 1} / {filteredWords.length}</span>
                  <span className="text-emerald-500 font-semibold">{quizScore} correct</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${((quizIndex) / filteredWords.length) * 100}%` }}
                  />
                </div>

                {/* Word card */}
                <div className={cn(
                  "rounded-2xl border-2 p-6 text-center transition-all duration-300",
                  quizState === "correct" && "border-emerald-500/60 bg-emerald-500/5",
                  quizState === "wrong" && "border-rose-500/60 bg-rose-500/5",
                  quizState === "asking" && "border-border bg-card"
                )}>
                  {/* Word */}
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <h2 className="text-4xl font-black text-foreground tracking-tight">
                      {currentQuizWord.word}
                    </h2>
                    <button
                      onClick={() => speakWord(currentQuizWord.word)}
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                  {currentQuizWord.ipa && (
                    <p className="text-sm text-muted-foreground font-mono mb-2">
                      {currentQuizWord.ipa}
                    </p>
                  )}
                  <span className="inline-block rounded-full bg-primary/10 text-primary text-xs px-2.5 py-1 mb-4">
                    {currentQuizWord.partOfSpeech}
                  </span>

                  {/* Question prompt */}
                  {quizState === "asking" && (
                    <p className="text-sm text-muted-foreground mb-4">
                      Type the English meaning of this word:
                    </p>
                  )}

                  {/* Answer result */}
                  {quizState !== "asking" && (
                    <div className="mb-4">
                      {quizState === "correct" ? (
                        <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold">
                          <CheckCircle2 className="h-5 w-5" />
                          Correct! Great job!
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex items-center justify-center gap-2 text-rose-500 font-bold">
                            <XCircle className="h-5 w-5" />
                            Not quite!
                          </div>
                          <p className="text-sm text-foreground">
                            Correct: <strong>{currentQuizWord.meaning}</strong>
                          </p>
                          <p className="text-sm text-orange-400">{currentQuizWord.hindiMeaning}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Input form */}
                  {quizState === "asking" && (
                    <form onSubmit={handleQuizSubmit} className="flex gap-2">
                      <input
                        ref={quizInputRef}
                        type="text"
                        value={quizAnswer}
                        onChange={e => setQuizAnswer(e.target.value)}
                        placeholder="Type the meaning..."
                        autoFocus
                        className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-primary text-white px-4 py-2.5 font-semibold hover:bg-primary/90 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>

                {/* Navigation */}
                {quizState !== "asking" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                  >
                    {/* Example sentence after answer */}
                    <p className="text-xs text-muted-foreground italic flex-1 mr-4">
                      "{currentQuizWord.example1}"
                    </p>
                    <button
                      onClick={handleQuizNext}
                      className="shrink-0 flex items-center gap-2 rounded-xl bg-primary text-white px-5 py-2.5 font-semibold hover:bg-primary/90 transition-colors"
                    >
                      {quizIndex >= filteredWords.length - 1 ? "Finish" : "Next"}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No words match your filters
            </div>
          )}
        </div>
      )}

      {/* ── Flashcard View ── */}
      {view === "flashcard" && !isLoading && (
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm text-muted-foreground">
            {flashcardIndex + 1} / {filteredWords.length}
          </p>

          {currentFlashcard ? (
            <div
              className="w-full max-w-lg cursor-pointer"
              style={{ perspective: "1200px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                style={{ transformStyle: "preserve-3d", position: "relative", minHeight: 280 }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-purple-500/5 p-8 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-muted">
                    {currentFlashcard.partOfSpeech}
                  </span>
                  <h2 className="text-5xl font-black text-foreground mb-2 tracking-tight">
                    {currentFlashcard.word}
                  </h2>
                  {currentFlashcard.ipa && (
                    <p className="text-muted-foreground font-mono text-sm mb-1">
                      {currentFlashcard.ipa}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={e => { e.stopPropagation(); speakWord(currentFlashcard.word); }}
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); copyWord(currentFlashcard.word); }}
                      className="p-2 rounded-lg hover:bg-accent transition-colors"
                      title="Copy word"
                    >
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); toggleFavorite(currentFlashcard.id); }}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        favorites.has(currentFlashcard.id)
                          ? "text-rose-500 hover:text-rose-600"
                          : "text-muted-foreground hover:text-rose-400"
                      )}
                      title="Favorite"
                    >
                      <Heart className={cn("h-4 w-4", favorites.has(currentFlashcard.id) && "fill-current")} />
                    </button>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    👆 Tap to reveal meaning
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-8 flex flex-col items-center justify-center text-center overflow-auto"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-xl font-bold text-foreground mb-2">
                    {currentFlashcard.meaning}
                  </p>
                  <p className="text-lg text-orange-400 font-semibold mb-3">
                    {currentFlashcard.hindiMeaning}
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    &ldquo;{currentFlashcard.example1}&rdquo;
                  </p>
                  {currentFlashcard.day && (
                    <p className="text-xs text-muted-foreground">
                      Day {currentFlashcard.day.dayNumber}: {currentFlashcard.day.title}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No words match your filters
            </div>
          )}

          {/* Flashcard controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setFlashcardIndex((i) => Math.max(0, i - 1));
                setIsFlipped(false);
              }}
              disabled={flashcardIndex === 0}
              className="rounded-xl border border-border p-3 disabled:opacity-30 hover:bg-accent transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {currentFlashcard && (
              <div className="flex gap-3">
                <button
                  onClick={() => toggleMastered(currentFlashcard.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                    masteredWords.has(currentFlashcard.id)
                      ? "bg-emerald-500 text-white"
                      : "border border-border hover:bg-accent"
                  )}
                >
                  <Check className="h-4 w-4" />
                  {masteredWords.has(currentFlashcard.id) ? "Mastered!" : "Got it"}
                </button>
                <button
                  onClick={() => {
                    setFlashcardIndex((i) =>
                      Math.min(filteredWords.length - 1, i + 1)
                    );
                    setIsFlipped(false);
                  }}
                  className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm hover:bg-accent"
                >
                  <X className="h-4 w-4" />
                  Skip
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setFlashcardIndex((i) =>
                  Math.min(filteredWords.length - 1, i + 1)
                );
                setIsFlipped(false);
              }}
              disabled={flashcardIndex === filteredWords.length - 1}
              className="rounded-xl border border-border p-3 disabled:opacity-30 hover:bg-accent transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Reset button */}
          <button
            onClick={() => {
              setFlashcardIndex(0);
              setIsFlipped(false);
            }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Restart deck
          </button>
        </div>
      )}

      {/* Grid View */}
      {view === "grid" && !isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredWords.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              isMastered={masteredWords.has(word.id)}
              isFavorite={favorites.has(word.id)}
              onToggleMastered={() => toggleMastered(word.id)}
              onToggleFavorite={() => toggleFavorite(word.id)}
              onSpeak={() => speakWord(word.word)}
              onCopy={() => copyWord(word.word)}
            />
          ))}
          {filteredWords.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No words match your filters
            </div>
          )}
        </div>
      )}

      {/* List View */}
      {view === "list" && !isLoading && (
        <div className="space-y-2">
          {filteredWords.map((word) => (
            <WordListItem
              key={word.id}
              word={word}
              isMastered={masteredWords.has(word.id)}
              isFavorite={favorites.has(word.id)}
              onToggleMastered={() => toggleMastered(word.id)}
              onToggleFavorite={() => toggleFavorite(word.id)}
              onSpeak={() => speakWord(word.word)}
              onCopy={() => copyWord(word.word)}
            />
          ))}
          {filteredWords.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No words match your filters
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Word Card (Grid) ─────────────────────────────────────────
function WordCard({
  word,
  isMastered,
  isFavorite,
  onToggleMastered,
  onToggleFavorite,
  onSpeak,
  onCopy,
}: {
  word: VocabWord;
  isMastered: boolean;
  isFavorite: boolean;
  onToggleMastered: () => void;
  onToggleFavorite: () => void;
  onSpeak: () => void;
  onCopy: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const synonyms = (() => {
    try { return JSON.parse(word.synonyms) as string[]; } catch { return []; }
  })();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      layout
      className={cn(
        "rounded-2xl border p-4 cursor-pointer transition-all hover:shadow-md",
        isMastered
          ? "border-emerald-500/30 bg-emerald-500/5"
          : "border-border bg-card"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {/* Big word text */}
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h3 className="font-black text-xl text-foreground tracking-tight">{word.word}</h3>
          </div>
          {/* IPA in gray */}
          {word.ipa && (
            <p className="text-xs text-muted-foreground font-mono mb-1">{word.ipa}</p>
          )}
          <div className="flex items-center gap-1.5 flex-wrap mb-1">
            <span className="text-xs rounded-full bg-primary/10 text-primary px-2 py-0.5">
              {word.partOfSpeech}
            </span>
            <span
              className={cn(
                "text-xs rounded-full px-2 py-0.5",
                word.difficulty === "BEGINNER" && "bg-green-500/10 text-green-600",
                word.difficulty === "INTERMEDIATE" && "bg-amber-500/10 text-amber-600",
                word.difficulty === "ADVANCED" && "bg-red-500/10 text-red-600"
              )}
            >
              {word.difficulty.toLowerCase()}
            </span>
          </div>
          <p className="text-sm text-foreground">{word.meaning}</p>
          {/* Hindi meaning prominent */}
          <p className="text-sm font-semibold text-orange-400 mt-0.5">{word.hindiMeaning}</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-1 ml-2 shrink-0">
          <button
            onClick={(e) => { e.stopPropagation(); onSpeak(); }}
            className="rounded-lg p-1.5 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            title="Pronounce"
          >
            <Volume2 className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={handleCopy}
            className="rounded-lg p-1.5 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            title="Copy word"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
            className={cn(
              "rounded-lg p-1.5 transition-colors",
              isFavorite
                ? "text-rose-500 hover:text-rose-600"
                : "text-muted-foreground hover:text-rose-400"
            )}
            title="Favorite"
          >
            <Heart className={cn("h-3.5 w-3.5", isFavorite && "fill-current")} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleMastered(); }}
            className={cn(
              "rounded-lg p-1.5 transition-colors",
              isMastered
                ? "text-emerald-500"
                : "text-muted-foreground hover:text-emerald-500"
            )}
            title="Mark mastered"
          >
            <Star className={cn("h-3.5 w-3.5", isMastered && "fill-current")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 pt-3 border-t border-border space-y-2">
              <p className="text-xs text-muted-foreground italic">"{word.example1}"</p>
              <p className="text-xs text-muted-foreground italic">"{word.example2}"</p>
              {synonyms.length > 0 && (
                <div className="flex gap-1 flex-wrap">
                  <span className="text-xs text-muted-foreground">Synonyms:</span>
                  {synonyms.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs rounded bg-muted px-1.5 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {word.day && (
                <p className="text-xs text-muted-foreground">
                  Day {word.day.dayNumber}: {word.day.title}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Word List Item ───────────────────────────────────────────
function WordListItem({
  word,
  isMastered,
  isFavorite,
  onToggleMastered,
  onToggleFavorite,
  onSpeak,
  onCopy,
}: {
  word: VocabWord;
  isMastered: boolean;
  isFavorite: boolean;
  onToggleMastered: () => void;
  onToggleFavorite: () => void;
  onSpeak: () => void;
  onCopy: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl border p-4 transition-all",
        isMastered ? "border-emerald-500/30 bg-emerald-500/5" : "border-border bg-card hover:bg-accent/30"
      )}
    >
      {/* Actions */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={onToggleMastered}
          className={cn(
            "rounded-full p-1.5 transition-all",
            isMastered
              ? "bg-emerald-500 text-white"
              : "bg-muted text-muted-foreground hover:bg-emerald-500/20 hover:text-emerald-500"
          )}
        >
          <Star className={cn("h-4 w-4", isMastered && "fill-white")} />
        </button>
        <button
          onClick={onToggleFavorite}
          className={cn(
            "rounded-full p-1.5 transition-all",
            isFavorite
              ? "text-rose-500"
              : "text-muted-foreground hover:text-rose-400"
          )}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
        </button>
      </div>

      <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-foreground">{word.word}</span>
            <span className="text-xs text-muted-foreground font-mono">{word.ipa}</span>
          </div>
          <span className="text-xs text-primary">{word.partOfSpeech}</span>
        </div>
        <div>
          <p className="text-sm text-foreground">{word.meaning}</p>
          <p className="text-sm font-semibold text-orange-400">{word.hindiMeaning}</p>
        </div>
        <p className="text-sm text-muted-foreground italic truncate hidden sm:block">
          "{word.example1}"
        </p>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={onSpeak}
          className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          title="Pronounce"
        >
          <Volume2 className="h-4 w-4" />
        </button>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          title="Copy word"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
