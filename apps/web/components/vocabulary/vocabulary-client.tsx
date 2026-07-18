"use client";
// ============================================================
// Vocabulary Client - Full vocabulary page with search/filter/flashcard
// ============================================================

import { useState, useEffect, useCallback, useMemo } from "react";
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

export function VocabularyClient({ initialWords, days }: VocabularyClientProps) {
  const [words, setWords] = useState<VocabWord[]>(initialWords);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("ALL");
  const [partOfSpeech, setPartOfSpeech] = useState("ALL");
  const [selectedDay, setSelectedDay] = useState("ALL");
  const [view, setView] = useState<"list" | "grid" | "flashcard">("grid");
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Fetch words based on filters
  useEffect(() => {
    const timeout = setTimeout(async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (difficulty !== "ALL") params.set("difficulty", difficulty);
        if (partOfSpeech !== "ALL") params.set("partOfSpeech", partOfSpeech);
        if (selectedDay !== "ALL") params.set("dayId", selectedDay);
        params.set("pageSize", "200");

        const res = await fetch(`/api/vocabulary?${params.toString()}`);
        if (res.ok) {
          const json = await res.json();
          setWords(json.data || []);
          setFlashcardIndex(0);
        }
      } catch {
        // Keep existing words on error
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, difficulty, partOfSpeech, selectedDay]);

  const filteredWords = useMemo(() => {
    if (!search && difficulty === "ALL" && partOfSpeech === "ALL" && selectedDay === "ALL") {
      return words;
    }
    return words;
  }, [words, search, difficulty, partOfSpeech, selectedDay]);

  const toggleMastered = (wordId: string) => {
    setMasteredWords((prev) => {
      const next = new Set(prev);
      if (next.has(wordId)) next.delete(wordId);
      else next.add(wordId);
      return next;
    });
  };

  const currentFlashcard = filteredWords[flashcardIndex];

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
            {filteredWords.length.toLocaleString()} words •{" "}
            {masteredWords.size} mastered
          </p>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-2">
          {(
            [
              { key: "list", icon: List },
              { key: "grid", icon: Grid },
              { key: "flashcard", icon: Layers },
            ] as const
          ).map(({ key, icon: Icon }) => (
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
              <span className="hidden sm:inline capitalize">{key}</span>
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
              placeholder="Search words, meanings..."
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

      {/* Flashcard View */}
      {view === "flashcard" && !isLoading && (
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm text-muted-foreground">
            {flashcardIndex + 1} / {filteredWords.length}
          </p>

          {currentFlashcard ? (
            <motion.div
              key={`${currentFlashcard.id}-${isFlipped}`}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full max-w-lg cursor-pointer"
              style={{ perspective: 1000 }}
            >
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg min-h-[280px] flex flex-col items-center justify-center text-center">
                {!isFlipped ? (
                  <>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      {currentFlashcard.partOfSpeech}
                    </span>
                    <h2 className="text-4xl font-bold text-foreground mb-2">
                      {currentFlashcard.word}
                    </h2>
                    {currentFlashcard.ipa && (
                      <p className="text-muted-foreground font-mono text-sm">
                        {currentFlashcard.ipa}
                      </p>
                    )}
                    <p className="mt-6 text-sm text-muted-foreground">
                      Tap to reveal meaning
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xl font-semibold text-foreground mb-2">
                      {currentFlashcard.meaning}
                    </p>
                    <p className="text-base text-orange-400 mb-4">
                      {currentFlashcard.hindiMeaning}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "{currentFlashcard.example1}"
                    </p>
                  </>
                )}
              </div>
            </motion.div>
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
              onToggleMastered={() => toggleMastered(word.id)}
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
              onToggleMastered={() => toggleMastered(word.id)}
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
  onToggleMastered,
}: {
  word: VocabWord;
  isMastered: boolean;
  onToggleMastered: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const synonyms = (() => {
    try { return JSON.parse(word.synonyms) as string[]; } catch { return []; }
  })();

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
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-foreground">{word.word}</h3>
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
          {word.ipa && (
            <p className="text-xs text-muted-foreground font-mono mt-0.5">{word.ipa}</p>
          )}
          <p className="text-sm text-foreground mt-1">{word.meaning}</p>
          <p className="text-xs text-orange-400 mt-0.5">{word.hindiMeaning}</p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleMastered();
          }}
          className={cn(
            "ml-2 shrink-0 rounded-full p-1.5 transition-all",
            isMastered
              ? "bg-emerald-500 text-white"
              : "bg-muted text-muted-foreground hover:bg-emerald-500/20 hover:text-emerald-500"
          )}
        >
          <Star className="h-3.5 w-3.5" />
        </button>
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
  onToggleMastered,
}: {
  word: VocabWord;
  isMastered: boolean;
  onToggleMastered: () => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl border p-4 transition-all",
        isMastered ? "border-emerald-500/30 bg-emerald-500/5" : "border-border bg-card hover:bg-accent/30"
      )}
    >
      <button
        onClick={onToggleMastered}
        className={cn(
          "shrink-0 rounded-full p-1.5 transition-all",
          isMastered
            ? "bg-emerald-500 text-white"
            : "bg-muted text-muted-foreground hover:bg-emerald-500/20 hover:text-emerald-500"
        )}
      >
        <Star className="h-4 w-4" />
      </button>

      <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{word.word}</span>
            <span className="text-xs text-muted-foreground font-mono">{word.ipa}</span>
          </div>
          <span className="text-xs text-primary">{word.partOfSpeech}</span>
        </div>
        <div>
          <p className="text-sm text-foreground">{word.meaning}</p>
          <p className="text-xs text-orange-400">{word.hindiMeaning}</p>
        </div>
        <p className="text-sm text-muted-foreground italic truncate hidden sm:block">
          "{word.example1}"
        </p>
      </div>
    </div>
  );
}
