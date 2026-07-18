// ============================================================
// GET  /api/test  - Fetch test questions for a subtopic or day
// POST /api/test  - Submit completed test attempt
// Test = 50 questions per subtopic, 100 per day
// Both TYPED and SPEECH answer modes supported
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

// ─── GET: Fetch test questions ───────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const subtopicId = searchParams.get("subtopicId");
    const dayId = searchParams.get("dayId");
    const dayNumber = searchParams.get("dayNumber");

    let questions: unknown[] = [];

    if (subtopicId) {
      // Subtopic test: 50 questions
      questions = await db.testQuestion.findMany({
        where: { subtopicId },
        orderBy: { orderIndex: "asc" },
        take: 50,
      });
    } else if (dayId || dayNumber) {
      // Day-level test: gather questions from all subtopics
      let resolvedDayId = dayId;

      if (!resolvedDayId && dayNumber) {
        const day = await db.day.findUnique({
          where: { dayNumber: parseInt(dayNumber) },
        });
        if (!day) {
          return NextResponse.json({ error: "Day not found" }, { status: 404 });
        }
        resolvedDayId = day.id;
      }

      // Get all subtopics under this day
      const subtopics = await db.subtopic.findMany({
        where: {
          topic: {
            dayId: resolvedDayId!,
          },
        },
        select: { id: true },
      });

      const subtopicIds = subtopics.map((s) => s.id);

      // Fetch test questions across all subtopics (up to 100 total)
      questions = await db.testQuestion.findMany({
        where: { subtopicId: { in: subtopicIds } },
        orderBy: { orderIndex: "asc" },
        take: 100,
      });

      // Shuffle for randomness
      questions = (questions as unknown[]).sort(() => Math.random() - 0.5);
    }

    return NextResponse.json({ data: questions });
  } catch (error) {
    console.error("[API GET /test] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch test questions" },
      { status: 500 }
    );
  }
}

// ─── Validation: full test attempt submission ─────────────────────────────────
const testAttemptSchema = z.object({
  // Optional: if this is a subtopic test
  subtopicId: z.string().optional(),
  // Optional: if this is a day test
  dayId: z.string().optional(),
  // SUBTOPIC, DAY, or MOCK
  testType: z.enum(["SUBTOPIC", "DAY", "MOCK"]).default("SUBTOPIC"),
  // Total time taken in seconds
  timeTaken: z.number(),
  // Array of individual answers
  answers: z.array(
    z.object({
      questionId: z.string(),
      userAnswer: z.string(),
      timeTaken: z.number().optional(),
      inputMethod: z.enum(["TYPED", "SPEECH"]).default("TYPED"),
      speechTranscript: z.string().optional(),
    })
  ),
});

// ─── POST: Submit a full test attempt ────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = testAttemptSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { subtopicId, dayId, testType, timeTaken, answers } = parsed.data;

    // Get user
    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true, totalXp: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get all questions in this test
    const questionIds = answers.map((a) => a.questionId);
    const questions = await db.testQuestion.findMany({
      where: { id: { in: questionIds } },
    });

    const questionMap = new Map(questions.map((q) => [q.id, q]));

    // Normalize answer for comparison
    const normalize = (s: string) =>
      s.toLowerCase().trim().replace(/\s+/g, " ").replace(/[.,!?;:'"]+$/, "");

    // Grade each answer
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let skippedAnswers = 0;
    let totalScore = 0;
    let maxScore = 0;
    let xpEarned = 0;

    const gradedAnswers = answers.map((answer) => {
      const question = questionMap.get(answer.questionId);
      if (!question) return { ...answer, isCorrect: false, pointsEarned: 0 };

      maxScore += question.points;

      // Skip if empty answer
      if (!answer.userAnswer.trim()) {
        skippedAnswers++;
        return { ...answer, isCorrect: false, pointsEarned: 0 };
      }

      const isCorrect =
        normalize(answer.userAnswer) === normalize(question.correctAnswer) ||
        (answer.speechTranscript
          ? normalize(answer.speechTranscript) ===
            normalize(question.correctAnswer)
          : false);

      if (isCorrect) {
        correctAnswers++;
        totalScore += question.points;
        xpEarned += Math.floor(question.points * 0.8);
      } else {
        wrongAnswers++;
      }

      return {
        ...answer,
        isCorrect,
        pointsEarned: isCorrect ? question.points : 0,
      };
    });

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    // Grade letter
    let grade = "F";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";

    // Create test attempt record
    const attempt = await db.testAttempt.create({
      data: {
        userId: user.id,
        subtopicId,
        dayId,
        testType,
        totalQuestions: answers.length,
        correctAnswers,
        wrongAnswers,
        skippedAnswers,
        score: totalScore,
        maxScore,
        percentage,
        grade,
        timeTaken,
        completedAt: new Date(),
        xpEarned,
        // Save individual answers
        answers: {
          create: gradedAnswers.map((a) => ({
            questionId: a.questionId,
            userAnswer: a.userAnswer,
            isCorrect: a.isCorrect,
            pointsEarned: a.pointsEarned,
            timeTaken: a.timeTaken,
            inputMethod: a.inputMethod,
            speechTranscript: a.speechTranscript,
          })),
        },
      },
    });

    // Award XP to user
    if (xpEarned > 0) {
      await db.user.update({
        where: { id: user.id },
        data: {
          totalXp: { increment: xpEarned },
          lastActiveAt: new Date(),
          level: Math.floor((user.totalXp + xpEarned) / 1000) + 1,
        },
      });

      await db.score.create({
        data: {
          userId: user.id,
          activity: "TEST",
          points: totalScore,
          xp: xpEarned,
          coins: Math.floor(xpEarned * 0.2),
          subtopicId,
          dayId,
        },
      });
    }

    return NextResponse.json({
      data: {
        attemptId: attempt.id,
        correctAnswers,
        wrongAnswers,
        skippedAnswers,
        totalScore,
        maxScore,
        percentage: Math.round(percentage * 10) / 10,
        grade,
        xpEarned,
        gradedAnswers,
      },
    });
  } catch (error) {
    console.error("[API POST /test] Error:", error);
    return NextResponse.json(
      { error: "Failed to submit test" },
      { status: 500 }
    );
  }
}
