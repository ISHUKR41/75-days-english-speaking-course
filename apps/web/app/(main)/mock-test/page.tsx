// ============================================================
// Mock Test Page - Full 50-question test
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { MockTestClient } from "@/components/mock-test/mock-test-client";

export const metadata: Metadata = {
  title: "Mock Test",
  description: "Test your English knowledge with 50 questions",
};

async function getMockTestQuestions() {
  try {
    // Get a mix of test questions from all subtopics
    const questions = await db.testQuestion.findMany({
      take: 50,
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        questionText: true,
        questionType: true,
        correctAnswer: true,
        explanation: true,
        optionA: true,
        optionB: true,
        optionC: true,
        optionD: true,
        points: true,
        timeLimit: true,
      },
    });

    // If not enough questions in DB, generate fallback questions
    if (questions.length < 10) {
      return generateFallbackQuestions();
    }

    return questions;
  } catch {
    return generateFallbackQuestions();
  }
}

function generateFallbackQuestions() {
  return [
    {
      id: "q1",
      questionText: "Which sentence uses 'is' correctly?",
      questionType: "MCQ",
      correctAnswer: "She is a doctor.",
      explanation: "'Is' is used with singular third-person subjects (he, she, it).",
      optionA: "I is happy.",
      optionB: "She is a doctor.",
      optionC: "They is friends.",
      optionD: "We is going.",
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q2",
      questionText: "Fill in the blank: 'She ___ to school every day.'",
      questionType: "FILL_BLANK",
      correctAnswer: "goes",
      explanation: "With third-person singular subjects, we add -s/-es to the verb.",
      optionA: null,
      optionB: null,
      optionC: null,
      optionD: null,
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q3",
      questionText: "What is the past tense of 'go'?",
      questionType: "MCQ",
      correctAnswer: "went",
      explanation: "'Go' is an irregular verb. Its past tense is 'went'.",
      optionA: "goed",
      optionB: "gone",
      optionC: "went",
      optionD: "going",
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q4",
      questionText: "True or False: 'I have went to the market.' is correct.",
      questionType: "TRUE_FALSE",
      correctAnswer: "False",
      explanation: "The correct sentence is 'I have gone to the market.' (gone, not went with have).",
      optionA: "True",
      optionB: "False",
      optionC: null,
      optionD: null,
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q5",
      questionText: "Which word means 'very happy'?",
      questionType: "MCQ",
      correctAnswer: "elated",
      explanation: "'Elated' means feeling great happiness or joy.",
      optionA: "elated",
      optionB: "sad",
      optionC: "confused",
      optionD: "tired",
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q6",
      questionText: "Fill in the blank: '___ she sing well?'",
      questionType: "FILL_BLANK",
      correctAnswer: "Does",
      explanation: "'Does' is used for questions with third-person singular (he/she/it).",
      optionA: null,
      optionB: null,
      optionC: null,
      optionD: null,
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q7",
      questionText: "What is the plural of 'child'?",
      questionType: "MCQ",
      correctAnswer: "children",
      explanation: "'Child' has an irregular plural form: 'children'.",
      optionA: "childs",
      optionB: "childen",
      optionC: "children",
      optionD: "child's",
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q8",
      questionText: "Which is the correct sentence?",
      questionType: "MCQ",
      correctAnswer: "I can swim very fast.",
      explanation: "'Can' does not change form. We don't say 'cans'.",
      optionA: "I cans swim very fast.",
      optionB: "I can swim very fast.",
      optionC: "I can swims very fast.",
      optionD: "I can swiming very fast.",
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q9",
      questionText: "Fill in the blank: 'He ___ been waiting for two hours.'",
      questionType: "FILL_BLANK",
      correctAnswer: "has",
      explanation: "'Has' is used with singular subjects (he/she/it) in the present perfect.",
      optionA: null,
      optionB: null,
      optionC: null,
      optionD: null,
      points: 10,
      timeLimit: 60,
    },
    {
      id: "q10",
      questionText: "Which sentence is in the future tense?",
      questionType: "MCQ",
      correctAnswer: "She will travel tomorrow.",
      explanation: "Future tense uses 'will' + base verb form.",
      optionA: "She traveled yesterday.",
      optionB: "She travels every day.",
      optionC: "She was traveling.",
      optionD: "She will travel tomorrow.",
      points: 10,
      timeLimit: 60,
    },
  ];
}

export default async function MockTestPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const questions = await getMockTestQuestions();

  return (
    <div className="py-2">
      <MockTestClient questions={questions as any} userId={userId} />
    </div>
  );
}
