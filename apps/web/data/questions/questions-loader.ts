// ============================================================
// Unified Questions Loader — 75 Days Hard English Course
// Single entry point to get practice questions for any day
// and optional subtopic. Used by practice-section.tsx.
// ============================================================

import type { PracticeQ } from "./day-1-questions";

// ── Day-specific hand-crafted question banks ──────────────────
import { ALL_DAY_1_QUESTIONS } from "./day-1-questions";
import { ALL_DAY1_EXTENDED_QUESTIONS } from "./day-1-extended-questions";
import { ALL_DAY1_EXTENDED_V2_QUESTIONS } from "./day-1-extended-v2-questions";
import { ALL_DAY_2_QUESTIONS } from "./day-2-questions";
import { getDays3to7Questions } from "./days-3-7-questions";
// Days 8-14 hand-curated questions + enhanced questions
import { getDays8to14Questions } from "./days-8-14-questions";
// Enhanced extra questions for Days 8-14
import {
  getDays8to14QuestionsEnhanced,
} from "./days-8-14-questions-enhanced";
// Extra question banks for days 8-9, 10-11, 12-14
import { DAY_8_EXTRA_QUESTIONS, DAY_9_EXTRA_QUESTIONS } from "./days-8-9-extra-questions";
import { DAY_10_EXTRA_QUESTIONS, DAY_11_EXTRA_QUESTIONS } from "./days-10-11-extra-questions";
import { DAY_12_EXTRA_QUESTIONS, DAY_13_EXTRA_QUESTIONS, DAY_14_EXTRA_QUESTIONS } from "./days-12-14-extra-questions";
// Days 15-21 comprehensive hand-crafted questions
import { getDays15to21Questions } from "./days-15-21-comprehensive";
// Days 22-28 comprehensive hand-crafted questions (Could, Should Have, Must Have, Could Have, Would Have, May Have, Might Have)
import { getDays22to28Questions } from "./days-22-28-comprehensive";
// Days 29-35 comprehensive hand-crafted questions (Will/Shall, Would+Ought To+Dare, Tenses)
import { getDays29to35Questions } from "./days-29-35-comprehensive";
// Vocabulary-based auto-generator for days 36-75
import { getVocabularyForDay } from "@/data/vocabulary/all-days-vocabulary";
import { generateQuestionsFromVocab } from "./question-generator";

// ── Merged extra questions per day (Days 8-14) ────────────────
// Combines base + enhanced + extra questions into one map for easy lookup
const DAYS_8_TO_14_EXTRA: Record<number, PracticeQ[]> = {
  8: [...DAY_8_EXTRA_QUESTIONS],
  9: [...DAY_9_EXTRA_QUESTIONS],
  10: [...DAY_10_EXTRA_QUESTIONS],
  11: [...DAY_11_EXTRA_QUESTIONS],
  12: [...DAY_12_EXTRA_QUESTIONS],
  13: [...DAY_13_EXTRA_QUESTIONS],
  14: [...DAY_14_EXTRA_QUESTIONS],
};

// ── Helper: filter by subtopicId ──────────────────────────────
function filterBySubtopic(questions: PracticeQ[], subtopicId?: string): PracticeQ[] {
  if (!subtopicId) return questions;
  const filtered = questions.filter(q => q.subtopicId === subtopicId);
  // Return all day questions if none match the subtopic (graceful fallback)
  return filtered.length > 0 ? filtered : questions;
}

// ── Main export: unified question loader ──────────────────────
/**
 * Returns practice questions for a specific day and optional subtopic.
 * Priority order: hand-crafted → enhanced → extra → vocab-generated.
 *
 * @param dayNumber  Day 1–75
 * @param subtopicId Optional subtopic filter (e.g. "d8-t1-s1")
 */
export function getQuestionsForDayAndSubtopic(
  dayNumber: number,
  subtopicId?: string
): PracticeQ[] {
  // ── Day 1: Combine all three Day 1 question banks ────────────
  if (dayNumber === 1) {
    const all: PracticeQ[] = [
      ...ALL_DAY_1_QUESTIONS,
      ...ALL_DAY1_EXTENDED_QUESTIONS,
      ...ALL_DAY1_EXTENDED_V2_QUESTIONS,
    ];
    return filterBySubtopic(all, subtopicId);
  }

  // ── Day 2: Day 2 question bank ───────────────────────────────
  if (dayNumber === 2) {
    return filterBySubtopic(ALL_DAY_2_QUESTIONS, subtopicId);
  }

  // ── Days 3-7: Hand-curated questions ─────────────────────────
  if (dayNumber >= 3 && dayNumber <= 7) {
    // getDays3to7Questions already filters by subtopicId if given
    const questions = getDays3to7Questions(dayNumber, subtopicId);
    if (questions.length > 0) return questions;
    // Fallback to all day questions
    return getDays3to7Questions(dayNumber);
  }

  // ── Days 8-14: Hand-curated + enhanced + extra questions ──────
  if (dayNumber >= 8 && dayNumber <= 14) {
    // Merge base + enhanced + extra into one pool
    const base = getDays8to14Questions(dayNumber); // base hand-crafted
    const enhanced = getDays8to14QuestionsEnhanced(dayNumber); // enhanced set
    const extra = DAYS_8_TO_14_EXTRA[dayNumber] ?? []; // per-day extra

    // Deduplicate by question ID
    const seen = new Set<string>();
    const merged: PracticeQ[] = [];
    for (const q of [...base, ...enhanced, ...extra]) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        merged.push(q);
      }
    }

    return filterBySubtopic(merged, subtopicId);
  }

  // ── Days 15-21: Hand-crafted comprehensive questions ─────────
  // 600+ questions covering Would Like To, Can, Should, May, Must, Revision, Used To
  if (dayNumber >= 15 && dayNumber <= 21) {
    // Get hand-crafted questions from the comprehensive file
    const handCrafted = getDays15to21Questions(dayNumber, subtopicId);
    if (handCrafted.length > 0) return handCrafted;
    // Fallback to vocab-generated if no hand-crafted found
    const vocab = getVocabularyForDay(dayNumber, 40);
    return generateQuestionsFromVocab(vocab, subtopicId ?? "", dayNumber, 1);
  }

  // ── Days 22-28: Hand-crafted comprehensive questions ─────────
  // Could, Should Have, Must Have, Could Have, Would Have, May Have, Might Have
  if (dayNumber >= 22 && dayNumber <= 28) {
    const handCrafted = getDays22to28Questions(dayNumber, subtopicId);
    if (handCrafted.length > 0) return handCrafted;
    // Fallback to vocab-generated
    const vocab = getVocabularyForDay(dayNumber, 40);
    return generateQuestionsFromVocab(vocab, subtopicId ?? "", dayNumber, 1);
  }

  // ── Days 29-35: Hand-crafted comprehensive questions ─────────
  // Will/Shall, Would+Ought To+Dare, Tenses Parts 1-4
  if (dayNumber >= 29 && dayNumber <= 35) {
    const handCrafted = getDays29to35Questions(dayNumber, subtopicId);
    if (handCrafted.length > 0) return handCrafted;
    // Fallback to vocab-generated
    const vocab = getVocabularyForDay(dayNumber, 40);
    return generateQuestionsFromVocab(vocab, subtopicId ?? "", dayNumber, 1);
  }

  // ── Days 36-75: Vocabulary-generated questions ────────────────
  const vocab = getVocabularyForDay(dayNumber, 40);
  return generateQuestionsFromVocab(vocab, subtopicId ?? "", dayNumber, 1);
}
