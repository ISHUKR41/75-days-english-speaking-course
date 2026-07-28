// ============================================================
// Day Quiz Page — 10 random questions from that day
// Shows score at the end with motivational message
// Server component that loads questions, client handles quiz UI
// ============================================================

import { auth } from "@/lib/safe-auth";
import { redirect, notFound } from "next/navigation";
import { Metadata } from "next";
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";
import { DayQuizClient } from "@/components/quiz/day-quiz-client";

// ─── Generate metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { dayNumber: string };
}): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const dayConfig = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  return {
    title: dayConfig
      ? `Day ${dayNum} Quiz: ${dayConfig.title} | 75 Days Hard English`
      : `Day ${dayNum} Quiz | 75 Days Hard English`,
    description: `Test your knowledge from Day ${dayNum} with 10 quick questions. Check your score and see what to revise.`,
  };
}

// ─── Load questions for this day ───────────────────────────────────────────────
// Returns a flat list of quiz-friendly question objects
async function getQuestionsForDay(dayNum: number) {
  // We import question sets lazily based on day number
  // Fallback to a curated set of grammar questions if day-specific set not available
  try {
    if (dayNum === 1) {
      const mod = await import("@/data/questions/day-1-questions");
      return mod.ALL_DAY_1_QUESTIONS ?? [];
    }
    if (dayNum === 2) {
      const mod = await import("@/data/questions/day-2-questions");
      // day-2 may export different names — look for any array export
      // Using Array.isArray without type predicate to avoid TS strict-mode issue
      const allArrays = (Object.values(mod) as unknown[]).filter(Array.isArray) as unknown[][];
      return allArrays.flat() as import("@/data/questions/day-1-questions").PracticeQ[];
    }
    if (dayNum >= 3 && dayNum <= 7) {
      const mod = await import("@/data/questions/days-3-7-questions");
      const allArrays = (Object.values(mod) as unknown[]).filter(Array.isArray) as unknown[][];
      const all = allArrays.flat() as import("@/data/questions/day-1-questions").PracticeQ[];
      // Filter to questions whose subtopicId matches this day (d3-*, d4-*, etc.)
      const dayPrefix = `d${dayNum}-`;
      const filtered = all.filter((q) =>
        q.subtopicId?.startsWith(dayPrefix)
      );
      return filtered.length > 0 ? filtered : all;
    }
    if (dayNum >= 8 && dayNum <= 14) {
      const mod = await import("@/data/questions/days-8-14-questions");
      const allArrays = (Object.values(mod) as unknown[]).filter(Array.isArray) as unknown[][];
      return allArrays.flat() as import("@/data/questions/day-1-questions").PracticeQ[];
    }
  } catch {
    // Fall through to fallback below
  }

  // Fallback: return built-in grammar quiz questions that work for any day
  return FALLBACK_QUESTIONS;
}

// ─── Fallback quiz questions (grammar-focused, works for any day) ──────────────
const FALLBACK_QUESTIONS = [
  {
    id: "fq1",
    subtopicId: "general",
    questionText: "Which sentence is correct?",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "She doesn't know the answer.",
    optionA: "She don't know the answer.",
    optionB: "She doesn't know the answer.",
    optionC: "She didn't knows the answer.",
    optionD: "She not know the answer.",
    explanation: "With She/He/It in simple present negative, use 'doesn't' + base verb.",
    hindiExplanation: "She/He/It के साथ negative में 'doesn't' + base verb आता है।",
    points: 10,
  },
  {
    id: "fq2",
    subtopicId: "general",
    questionText: "Fill the blank: 'She is ___ honest person.'",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "an",
    optionA: "a",
    optionB: "an",
    optionC: "the",
    optionD: "no article",
    explanation: "'Honest' starts with a vowel sound ('o' — h is silent), so use 'an'.",
    hindiExplanation: "'Honest' में h silent है, vowel sound से शुरू होता है, इसलिए 'an'।",
    points: 10,
  },
  {
    id: "fq3",
    subtopicId: "general",
    questionText: "Choose the correct sentence:",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "I have been working here since 2020.",
    optionA: "I am working here since 2020.",
    optionB: "I work here since 2020.",
    optionC: "I have been working here since 2020.",
    optionD: "I worked here since 2020.",
    explanation: "Use Present Perfect Continuous (have/has been + V-ing) with 'since'.",
    hindiExplanation: "'Since' के साथ Present Perfect Continuous use होता है।",
    points: 10,
  },
  {
    id: "fq4",
    subtopicId: "general",
    questionText: "Which is correct? 'The meeting is ___ 3 PM.'",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "at",
    optionA: "in",
    optionB: "on",
    optionC: "at",
    optionD: "by",
    explanation: "AT + specific time. 'The meeting is at 3 PM.'",
    hindiExplanation: "Specific time के लिए 'at' use होता है।",
    points: 10,
  },
  {
    id: "fq5",
    subtopicId: "general",
    questionText: "Identify the error: 'He must to submit the report.'",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "Remove 'to' — it should be 'He must submit the report.'",
    optionA: "No error",
    optionB: "Remove 'to' — it should be 'He must submit the report.'",
    optionC: "Change 'must' to 'should to'",
    optionD: "Change 'report' to 'reports'",
    explanation: "After modal verbs (must, can, should, will), NEVER use 'to'. Base form directly.",
    hindiExplanation: "Modal verbs के बाद 'to' नहीं लगाते — directly base form।",
    points: 10,
  },
  {
    id: "fq6",
    subtopicId: "general",
    questionText: "What does 'concise' mean?",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "Brief and clear, without unnecessary words",
    optionA: "Very long and detailed",
    optionB: "Brief and clear, without unnecessary words",
    optionC: "Confusing and complex",
    optionD: "Spoken out loud",
    explanation: "Concise = brief + clear. Example: 'Please write a concise report.'",
    hindiExplanation: "Concise = संक्षिप्त और स्पष्ट — unnecessary words के बिना।",
    points: 10,
  },
  {
    id: "fq7",
    subtopicId: "general",
    questionText: "Which sentence uses 'affect' and 'effect' correctly?",
    questionType: "mcq" as const,
    difficulty: "intermediate" as const,
    correctAnswer: "The rain affected the match. The effect was visible.",
    optionA: "The rain effected the match. The affect was visible.",
    optionB: "The rain affected the match. The effect was visible.",
    optionC: "The rain affected the match. The affect was visible.",
    optionD: "The rain effected the match. The effect was visible.",
    explanation: "AFFECT = verb (to influence). EFFECT = noun (the result).",
    hindiExplanation: "Affect = verb (influence करना)। Effect = noun (result/परिणाम)।",
    points: 10,
  },
  {
    id: "fq8",
    subtopicId: "general",
    questionText: "What is the passive voice of 'She wrote the letter'?",
    questionType: "mcq" as const,
    difficulty: "intermediate" as const,
    correctAnswer: "The letter was written by her.",
    optionA: "The letter was written by she.",
    optionB: "The letter was written by her.",
    optionC: "The letter is written by her.",
    optionD: "The letter written by her.",
    explanation: "Passive: Object becomes Subject. 'She' → 'her' (object pronoun). Was + V3.",
    hindiExplanation: "Passive में object subject बन जाता है। She → her।",
    points: 10,
  },
  {
    id: "fq9",
    subtopicId: "general",
    questionText: "Choose the correct sentence:",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "I went to Paris last year.",
    optionA: "I have went to Paris last year.",
    optionB: "I went to Paris last year.",
    optionC: "I have gone to Paris last year.",
    optionD: "I had went to Paris last year.",
    explanation: "With specific past time ('last year'), use Simple Past — never Present Perfect.",
    hindiExplanation: "Specific past time (last year, yesterday) के साथ Simple Past use होता है।",
    points: 10,
  },
  {
    id: "fq10",
    subtopicId: "general",
    questionText: "'Myself Rahul' as an introduction is:",
    questionType: "mcq" as const,
    difficulty: "beginner" as const,
    correctAnswer: "Wrong — say 'My name is Rahul' or 'I am Rahul'",
    optionA: "Correct formal English",
    optionB: "Wrong — say 'My name is Rahul' or 'I am Rahul'",
    optionC: "Acceptable in professional settings",
    optionD: "Used only in written English",
    explanation: "'Myself Rahul' is Indianism — incorrect English. Say 'I am Rahul' or 'My name is Rahul'.",
    hindiExplanation: "'Myself' से introduction नहीं देते — यह गलत है।",
    points: 10,
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────
export default async function DayQuizPage({
  params,
}: {
  params: { dayNumber: string };
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const dayNum = parseInt(params.dayNumber);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  const dayConfig = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!dayConfig) notFound();

  // Load questions for this day
  const allQuestions = await getQuestionsForDay(dayNum);

  // Filter to only MCQ-type questions (most quiz-friendly)
  // or translation questions that can be shown as MCQ
  const mcqQuestions = allQuestions.filter(
    (q) =>
      q.questionType === "mcq" &&
      q.optionA &&
      q.optionB &&
      q.optionC &&
      q.optionD
  );

  // Pick 10 random questions — use a deterministic shuffle based on dayNum
  // so it's stable on SSR but different per day
  const questionsToUse = mcqQuestions.length >= 10 ? mcqQuestions : [
    ...mcqQuestions,
    ...FALLBACK_QUESTIONS.slice(0, 10 - mcqQuestions.length),
  ];

  // Deterministic shuffle for the day
  const shuffled = deterministicShuffle(questionsToUse, dayNum * 7);
  const quizQuestions = shuffled.slice(0, 10).map((q) => ({
    id: q.id,
    question: q.questionText,
    options: [q.optionA!, q.optionB!, q.optionC!, q.optionD!],
    correctIndex: getCorrectIndex(q),
    explanation: q.explanation,
    hindiExplanation: q.hindiExplanation,
    category: q.subtopicId,
    points: q.points,
  }));

  return (
    <DayQuizClient
      dayNumber={dayNum}
      dayTitle={dayConfig.title}
      dayEmoji={dayConfig.emoji}
      questions={quizQuestions}
      userId={userId}
    />
  );
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function deterministicShuffle<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  let s = seed;
  for (let i = copy.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getCorrectIndex(
  q: import("@/data/questions/day-1-questions").PracticeQ
): number {
  const opts = [q.optionA, q.optionB, q.optionC, q.optionD];
  const normalizedCorrect = q.correctAnswer.toLowerCase().trim();

  // Try exact match first
  for (let i = 0; i < opts.length; i++) {
    if (opts[i]?.toLowerCase().trim() === normalizedCorrect) return i;
  }
  // Try partial match (correct answer may be longer than option)
  for (let i = 0; i < opts.length; i++) {
    const opt = opts[i]?.toLowerCase().trim() ?? "";
    if (normalizedCorrect.includes(opt) || opt.includes(normalizedCorrect)) {
      return i;
    }
  }
  // Default to first option
  return 0;
}
