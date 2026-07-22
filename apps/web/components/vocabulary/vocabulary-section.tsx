"use client";
// ============================================================
// Vocabulary Section - Shows vocabulary for a subtopic/day
// Includes flashcard mode, list mode, and audio pronunciation
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookMarked, ChevronLeft, ChevronRight, Mic, RefreshCcw,
  Star, Volume2, Zap, CheckCircle2, BookOpen,
} from "lucide-react";
import { cn, playSound } from "@/lib/utils";
// Import real vocabulary data for Day 1
import { ALL_DAY_1_VOCABULARY } from "@/data/vocabulary/day-1-vocabulary";
// Import Day 2 vocabulary
import { DAY_2_VOCABULARY } from "@/data/vocabulary/day-2-vocabulary";
// Import all-days vocabulary generator for Days 3-75
import { getVocabularyForDay } from "@/data/vocabulary/all-days-vocabulary";
// Import the VocabularyWord type for type compatibility
import type { VocabularyWord } from "@/data/vocabulary/day-1-vocabulary";

// ─── Types ───────────────────────────────────────────────────
// Local interface for the vocabulary UI component
interface VocabWord {
  id: string;          // Unique word ID
  word: string;        // The English word
  meaning: string;     // Simple English meaning
  hindiMeaning: string; // Hindi translation
  ipa?: string;        // IPA pronunciation guide
  partOfSpeech: string; // noun, verb, adjective, etc.
  example1: string;    // First example sentence
  example2: string;    // Second example sentence
  synonyms: string[];  // Related words with similar meaning
  antonyms?: string[]; // Opposite words
}

// Props passed to VocabularySection from SubtopicLesson
interface VocabularySectionProps {
  dayNumber: number;    // Which day (1-75)
  subtopicId: string;   // Which subtopic this belongs to
  subtopicTitle: string; // Display title
  topicColor?: string;  // Brand color for topic
  userId?: string;      // Current user ID for tracking
  onComplete?: () => void; // Callback when user completes vocabulary
}

// View modes for displaying vocabulary
type ViewMode = "cards" | "list" | "quiz";

// ─── Helper: Convert VocabularyWord to local VocabWord ────────
// Maps the data file format to the UI component format
function mapVocabWord(vw: VocabularyWord): VocabWord {
  return {
    id: vw.id,
    word: vw.word,
    meaning: vw.meaning,
    hindiMeaning: vw.hindiMeaning,
    ipa: vw.ipa,
    partOfSpeech: vw.partOfSpeech,
    example1: vw.example1,
    example2: vw.example2,
    synonyms: vw.synonyms,
    antonyms: vw.antonyms,
  };
}

// ─── Helper: Load vocabulary for a specific day ───────────────
// Returns all vocabulary words for the given day
function loadVocabularyForDay(dayNumber: number): VocabWord[] {
  // For Day 1, return the real vocabulary data
  if (dayNumber === 1) {
    return ALL_DAY_1_VOCABULARY.map(mapVocabWord);
  }
  // For Day 2, return Day 2 vocabulary
  if (dayNumber === 2) {
    return DAY_2_VOCABULARY.map(mapVocabWord);
  }
  // For Days 3-75, use the comprehensive vocabulary generator
  return getVocabularyForDay(dayNumber, 50).map(mapVocabWord);
}

export function VocabularySection({ dayNumber, subtopicId, subtopicTitle, onComplete }: VocabularySectionProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());
  // Load real vocabulary data dynamically based on day number
  const [words] = useState<VocabWord[]>(() => loadVocabularyForDay(dayNumber));

  // Current word
  const currentWord = words[currentIndex];
  const progress = masteredWords.size / words.length;

  // Navigate cards
  const nextCard = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex(i => Math.min(i + 1, words.length - 1)), 150);
  };
  const prevCard = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex(i => Math.max(i - 1, 0)), 150);
  };

  // Mark word as mastered
  const masterWord = (wordId: string) => {
    setMasteredWords(prev => { const s = new Set(prev); s.add(wordId); return s; });
    playSound("correct");
    nextCard();
  };

  // Speak the word using Web Speech API
  const speakWord = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "en-US";
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">📝 Vocabulary</h2>
          <p className="text-sm text-muted-foreground">{words.length} words • {masteredWords.size} mastered</p>
        </div>
        {/* View mode toggle */}
        <div className="flex gap-1 rounded-xl border border-border bg-muted p-1">
          {(["cards", "list"] as ViewMode[]).map(mode => (
            <button key={mode} onClick={() => setViewMode(mode)}
              className={cn("rounded-lg px-3 py-1.5 text-xs font-medium transition-all capitalize",
                viewMode === mode ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}>
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span><span>{Math.round(progress * 100)}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
            animate={{ width: `${progress * 100}%` }} transition={{ duration: 0.5 }} />
        </div>
      </div>

      {/* Cards mode - Flashcard with flip animation */}
      {viewMode === "cards" && currentWord && (
        <div className="space-y-4">
          {/* Card counter */}
          <div className="text-center text-sm text-muted-foreground font-medium">
            {currentIndex + 1} / {words.length}
          </div>

          {/* Flashcard */}
          <div className="perspective-1000">
            <motion.div
              className="relative h-64 cursor-pointer preserve-3d"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              onClick={() => setFlipped(!flipped)}
            >
              {/* Front - English word */}
              <div className="absolute inset-0 backface-hidden">
                <div className="h-full card-base rounded-2xl flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary/20">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{currentWord.partOfSpeech}</span>
                  <h3 className="text-4xl font-black text-foreground mb-2">{currentWord.word}</h3>
                  {currentWord.ipa && <p className="text-sm text-muted-foreground font-mono mb-4">{currentWord.ipa}</p>}
                  <button onClick={(e) => { e.stopPropagation(); speakWord(currentWord.word); }}
                    className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                    <Volume2 className="h-4 w-4" /> Pronounce
                  </button>
                  <p className="text-xs text-muted-foreground mt-4">👆 Tap to see meaning</p>
                </div>
              </div>

              {/* Back - Hindi meaning + examples */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-auto">
                <div className="h-full card-base rounded-2xl p-5 space-y-3">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Meaning</p>
                    <p className="text-lg font-bold text-foreground mt-1">{currentWord.meaning}</p>
                    <p className="text-base text-primary font-semibold">{currentWord.hindiMeaning}</p>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground">Examples</p>
                    <p className="text-sm text-foreground">• {currentWord.example1}</p>
                    <p className="text-sm text-muted-foreground">• {currentWord.example2}</p>
                  </div>
                  {currentWord.synonyms.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {currentWord.synonyms.slice(0, 3).map(s => (
                        <span key={s} className="badge-primary text-xs">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button onClick={prevCard} disabled={currentIndex === 0} className="btn-secondary p-3 rounded-xl disabled:opacity-40">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {/* Action buttons */}
            <div className="flex gap-2 flex-1 justify-center">
              <button onClick={() => masterWord(currentWord.id)}
                className="btn-primary flex-1 max-w-32 py-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4" /> Got it!
              </button>
              <button onClick={nextCard}
                className="btn-secondary flex-1 max-w-32 py-2.5 text-sm">
                <RefreshCcw className="h-4 w-4" /> Review
              </button>
            </div>
            <button onClick={nextCard} disabled={currentIndex === words.length - 1} className="btn-secondary p-3 rounded-xl disabled:opacity-40">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* List mode - All words in a scrollable list */}
      {viewMode === "list" && (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {words.map((word, i) => (
            <motion.div key={word.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
              className={cn("rounded-xl border p-4 transition-colors", masteredWords.has(word.id) ? "border-emerald-500/30 bg-emerald-500/5" : "border-border bg-card hover:border-primary/30")}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-foreground text-lg">{word.word}</span>
                    <span className="badge bg-muted text-muted-foreground text-xs">{word.partOfSpeech}</span>
                    {word.ipa && <span className="text-xs text-muted-foreground font-mono">{word.ipa}</span>}
                    {masteredWords.has(word.id) && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <p className="text-base text-foreground mt-1">{word.meaning}</p>
                  <p className="text-sm text-primary font-medium">{word.hindiMeaning}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 italic">"{word.example1}"</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button onClick={() => speakWord(word.word)} className="btn-ghost p-2 rounded-lg">
                    <Volume2 className="h-4 w-4" />
                  </button>
                  <button onClick={() => masterWord(word.id)} className={cn("p-2 rounded-lg transition-colors", masteredWords.has(word.id) ? "text-emerald-500" : "text-muted-foreground hover:text-foreground hover:bg-accent")}>
                    <Star className={cn("h-4 w-4", masteredWords.has(word.id) && "fill-emerald-500")} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Continue button */}
      <button onClick={onComplete} className="btn-primary w-full py-3 text-base">
        <Zap className="h-5 w-5" />
        {masteredWords.size >= Math.floor(words.length * 0.7)
          ? "Great job! Continue to Practice →"
          : `Continue to Practice (${masteredWords.size}/${words.length} mastered)`}
      </button>
    </div>
  );
}
