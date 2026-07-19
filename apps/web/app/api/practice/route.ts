// ============================================================
// POST /api/practice - Submit a practice answer (typed or spoken)
// GET  /api/practice - Get practice questions for a subtopic
// Handles both TYPED and SPEECH answer modes
// Awards XP and updates score on correct answers
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/safe-auth";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

// ─── GET: Fetch questions for a subtopic ─────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const subtopicId = searchParams.get("subtopicId");
    const limit = parseInt(searchParams.get("limit") || "100");

    if (!subtopicId) {
      return NextResponse.json(
        { error: "subtopicId is required" },
        { status: 400 }
      );
    }

    // Fetch all practice questions for this subtopic
    const questions = await db.practiceQuestion.findMany({
      where: { subtopicId },
      orderBy: { orderIndex: "asc" },
      take: limit,
    });

    return NextResponse.json({ data: questions });
  } catch (error) {
    console.error("[API GET /practice] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch practice questions" },
      { status: 500 }
    );
  }
}

// ─── Validation schema for submitting an answer ───────────────────────────────
const answerSchema = z.object({
  // Which question is being answered
  questionId: z.string().min(1),
  // The user's answer text
  userAnswer: z.string().min(0),
  // How long they took in seconds
  timeTaken: z.number().optional(),
  // TYPED or SPEECH
  inputMethod: z.enum(["TYPED", "SPEECH"]).default("TYPED"),
  // If speech, the raw transcript
  speechTranscript: z.string().optional(),
  // Speech confidence 0-1
  speechConfidence: z.number().min(0).max(1).optional(),
});

// ─── POST: Submit practice answer ────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse and validate request body
    const body = await req.json();
    const parsed = answerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const {
      questionId,
      userAnswer,
      timeTaken,
      inputMethod,
      speechTranscript,
      speechConfidence,
    } = parsed.data;

    // Get user from DB
    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true, totalXp: true, totalCoins: true, level: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get the question to check the answer
    const question = await db.practiceQuestion.findUnique({
      where: { id: questionId },
      include: { subtopic: true },
    });

    if (!question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    // ─── Intelligent answer checking ────────────────────────────────────────
    // Normalize both answers: lowercase, trim whitespace, remove extra spaces
    const normalize = (s: string) =>
      s
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")           // collapse spaces
        .replace(/[.,!?;:'"]+$/g, "")   // remove trailing punctuation
        .replace(/^[.,!?;:'"]+/, "");   // remove leading punctuation

    const normalizedUser = normalize(userAnswer);
    const normalizedCorrect = normalize(question.correctAnswer);

    // Check for exact match first
    let isCorrect = normalizedUser === normalizedCorrect;

    // If not exact, check if speech transcript matches (for speech input)
    if (!isCorrect && inputMethod === "SPEECH" && speechTranscript) {
      const normalizedSpeech = normalize(speechTranscript);
      isCorrect = normalizedSpeech === normalizedCorrect;
    }

    // Calculate points earned
    const pointsEarned = isCorrect ? question.points : 0;
    const xpEarned = isCorrect ? Math.floor(question.points * 0.5) : 0;
    const coinsEarned = isCorrect ? Math.floor(question.points * 0.1) : 0;

    // Save the answer record
    const answer = await db.practiceAnswer.create({
      data: {
        userId: user.id,
        questionId,
        userAnswer,
        isCorrect,
        pointsEarned,
        timeTaken,
        inputMethod,
        speechTranscript,
        speechConfidence,
      },
    });

    // If correct, update user XP, coins, and score
    if (isCorrect && (xpEarned > 0 || coinsEarned > 0)) {
      await db.user.update({
        where: { id: user.id },
        data: {
          totalXp: { increment: xpEarned },
          totalCoins: { increment: coinsEarned },
          lastActiveAt: new Date(),
          // Level up logic: every 1000 XP = 1 level
          level: Math.floor((user.totalXp + xpEarned) / 1000) + 1,
        },
      });

      // Record the score event
      await db.score.create({
        data: {
          userId: user.id,
          activity: "PRACTICE",
          points: pointsEarned,
          xp: xpEarned,
          coins: coinsEarned,
          subtopicId: question.subtopicId,
        },
      });
    }

    return NextResponse.json({
      data: {
        answerId: answer.id,
        isCorrect,
        pointsEarned,
        xpEarned,
        coinsEarned,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        hindiExplanation: question.hindiExplanation,
      },
    });
  } catch (error) {
    console.error("[API POST /practice] Error:", error);
    return NextResponse.json(
      { error: "Failed to submit answer" },
      { status: 500 }
    );
  }
}
