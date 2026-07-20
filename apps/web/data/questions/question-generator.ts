// ============================================================
// Question Generator — Auto-generates 2-3 practice questions
// per vocabulary word. Covers ALL 75 days automatically.
// Question types: translation, fill_blank, MCQ
// ============================================================

import type { VocabularyWord } from "@/data/vocabulary/day-1-vocabulary";
import type { PracticeQ } from "./day-1-questions";

// ─── Wrong options pool for MCQ distractors ────────────────────────────────
// Grouped by part of speech for more realistic wrong answers
const NOUN_DISTRACTORS = ["table", "water", "music", "flower", "river", "cloud", "bridge", "window", "candle", "mirror"];
const VERB_DISTRACTORS = ["run", "jump", "sleep", "eat", "laugh", "cry", "think", "write", "read", "play"];
const ADJ_DISTRACTORS = ["small", "red", "cold", "loud", "fast", "dark", "rough", "thin", "wet", "old"];
const MEANING_DISTRACTORS = [
  "to feel very tired",
  "a type of food",
  "a loud noise",
  "to move quickly",
  "feeling cold",
  "a place to sit",
  "to fall asleep",
  "a bright color",
  "to make a sound",
  "a kind of animal",
  "to stop working",
  "a long journey",
  "to feel confused",
  "a big building",
  "to speak loudly",
];

// Pick 3 random distractors that are not the correct answer
function getDistractors(correct: string, pool: string[]): [string, string, string] {
  const filtered = pool.filter((d) => d.toLowerCase() !== correct.toLowerCase());
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return [shuffled[0] || "none", shuffled[1] || "never", shuffled[2] || "always"];
}

// Pick 3 random meaning distractors (not the correct one)
function getMeaningDistractors(correct: string): [string, string, string] {
  const filtered = MEANING_DISTRACTORS.filter(
    (d) => !correct.toLowerCase().includes(d.split(" ")[2] || "xxxx")
  );
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return [
    shuffled[0] || "to move forward",
    shuffled[1] || "a type of fruit",
    shuffled[2] || "feeling happy",
  ];
}

// ─── Generate 3 questions per vocabulary word ─────────────────────────────
export function generateQuestionsFromVocab(
  words: VocabularyWord[],
  subtopicId: string,
  dayNumber: number,
  subtopicIndex = 0
): PracticeQ[] {
  const questions: PracticeQ[] = [];
  const prefix = `gen-d${dayNumber}-s${subtopicIndex}`;

  words.forEach((word, idx) => {
    const qBase = `${prefix}-w${idx}`;

    // ── Q1: Hindi → English translation ──────────────────────
    questions.push({
      id: `${qBase}-t`,
      subtopicId,
      questionText: `"${word.hindiMeaning.split(",")[0].trim()}" ko English mein kya kehte hain? (What is the English word for "${word.hindiMeaning.split(",")[0].trim()}"?)`,
      questionType: "translation",
      difficulty: word.difficulty || "beginner",
      correctAnswer: word.word,
      explanation: `"${word.hindiMeaning}" = "${word.word}" in English. ${word.meaning}`,
      hindiExplanation: `"${word.hindiMeaning}" को English में "${word.word}" कहते हैं। ${word.meaning}`,
      wordHints: [{ word: word.word, meaning: word.hindiMeaning }],
      points: 10,
    });

    // ── Q2: Fill in the blank (using example1) ─────────────────
    // Replace the word in example1 with a blank
    const sentence = word.example1;
    const wordRegex = new RegExp(`\\b${word.word}\\b`, "i");
    const blankSentence = sentence.replace(wordRegex, "_____");

    if (blankSentence !== sentence) {
      // Word was found and replaced
      questions.push({
        id: `${qBase}-f`,
        subtopicId,
        questionText: `Fill in the blank: "${blankSentence}"`,
        questionType: "fill_blank",
        difficulty: word.difficulty || "beginner",
        correctAnswer: word.word,
        explanation: `The missing word is "${word.word}" (${word.hindiMeaning}). ${word.meaning}`,
        hindiExplanation: `खाली जगह में "${word.word}" आएगा जिसका मतलब है "${word.hindiMeaning}"।`,
        wordHints: [{ word: word.word, meaning: word.hindiMeaning }],
        points: 10,
      });
    } else {
      // Word not directly in sentence — use a translation fill-blank
      questions.push({
        id: `${qBase}-f`,
        subtopicId,
        questionText: `Translate this sentence: "${word.example2 || word.example1}" — (Hint: use the word "${word.hindiMeaning.split(",")[0].trim()}")`,
        questionType: "translation",
        difficulty: word.difficulty || "beginner",
        correctAnswer: word.example2 || word.example1,
        explanation: `Full sentence: "${word.example2 || word.example1}". The key word is "${word.word}" (${word.hindiMeaning}).`,
        hindiExplanation: `पूरा वाक्य: "${word.example2 || word.example1}"। मुख्य शब्द है "${word.word}" (${word.hindiMeaning})।`,
        wordHints: [{ word: word.word, meaning: word.hindiMeaning }],
        points: 10,
      });
    }

    // ── Q3: MCQ — What is the meaning? ────────────────────────
    const [d1, d2, d3] = getMeaningDistractors(word.meaning);
    // Randomly shuffle the correct answer into A/B/C/D
    const options = [word.meaning, d1, d2, d3].sort(() => 0.5 - Math.random());
    const optA = options[0];
    const optB = options[1];
    const optC = options[2];
    const optD = options[3];

    questions.push({
      id: `${qBase}-m`,
      subtopicId,
      questionText: `What is the meaning of the word "${word.word}" (${word.ipa || ""})?`,
      questionType: "mcq",
      difficulty: word.difficulty || "beginner",
      correctAnswer: word.meaning,
      explanation: `"${word.word}" means: ${word.meaning}. Example: ${word.example1}`,
      hindiExplanation: `"${word.word}" का मतलब है: ${word.hindiMeaning}। उदाहरण: ${word.example1}`,
      optionA: optA,
      optionB: optB,
      optionC: optC,
      optionD: optD,
      wordHints: [{ word: word.word, meaning: word.hindiMeaning }],
      points: 10,
    });
  });

  return questions;
}

// ─── Generate test questions (50 per day) from vocab ──────────────────────
export function generateTestQuestionsFromVocab(
  words: VocabularyWord[],
  subtopicId: string,
  dayNumber: number,
  count = 50
): PracticeQ[] {
  // Take a sample of words (up to 17 words → 51 questions)
  const sample = words.slice(0, Math.ceil(count / 3));
  const allQ = generateQuestionsFromVocab(sample, subtopicId, dayNumber, 99);
  return allQ.slice(0, count);
}
