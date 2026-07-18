// ============================================================
// POST /api/speech - Save speech attempt to DB
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({ where: { clerkId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await req.json();
    const {
      subtopicId,
      questionId,
      targetText,
      transcript,
      confidence = 0,
      accuracy = 0,
      wordsCorrect = 0,
      wordsTotal = 0,
      pronunciationScore = 0,
      fluencyScore = 0,
      feedback,
      corrections = [],
      audioUrl,
      durationSeconds,
    } = body;

    if (!targetText || !transcript) {
      return NextResponse.json(
        { error: "targetText and transcript are required" },
        { status: 400 }
      );
    }

    const attempt = await db.speechAttempt.create({
      data: {
        userId: user.id,
        ...(subtopicId && { subtopicId }),
        ...(questionId && { questionId }),
        targetText,
        transcript,
        confidence,
        accuracy,
        wordsCorrect,
        wordsTotal,
        pronunciationScore,
        fluencyScore,
        ...(feedback && { feedback }),
        corrections: JSON.stringify(corrections),
        ...(audioUrl && { audioUrl }),
        ...(durationSeconds !== undefined && { durationSeconds }),
      },
    });

    // Award XP for speech practice
    const xpEarned = Math.round(accuracy * 10); // up to 10 XP per attempt
    if (xpEarned > 0) {
      await db.$transaction([
        db.user.update({
          where: { id: user.id },
          data: { totalXp: { increment: xpEarned }, lastActiveAt: new Date() },
        }),
        db.score.create({
          data: {
            userId: user.id,
            activity: "SPEECH_PRACTICE",
            points: xpEarned,
            xp: xpEarned,
            coins: Math.floor(xpEarned / 5),
          },
        }),
      ]);
    }

    return NextResponse.json({ data: attempt, xpEarned });
  } catch (error) {
    console.error("[API POST /speech] Error:", error);
    return NextResponse.json(
      { error: "Failed to save speech attempt" },
      { status: 500 }
    );
  }
}

// GET /api/speech - Get user's recent speech attempts
export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({ where: { clerkId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const attempts = await db.speechAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 20,
    });

    return NextResponse.json({ data: attempts });
  } catch (error) {
    console.error("[API GET /speech] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch speech attempts" },
      { status: 500 }
    );
  }
}
