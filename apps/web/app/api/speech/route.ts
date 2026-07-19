// ============================================================
// POST /api/speech - Save a speech practice attempt
// Records transcript, confidence score, accuracy
// Awards XP for voice practice sessions
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/safe-auth";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

// ─── Validation schema ────────────────────────────────────────────────────────
const speechSchema = z.object({
  // The text that the user was supposed to say
  targetText: z.string().min(1),
  // What the speech recognition heard
  transcript: z.string().min(0),
  // 0.0 to 1.0 confidence from browser speech API
  confidence: z.number().min(0).max(1).default(0),
  // Optional subtopic context
  subtopicId: z.string().optional(),
  // Optional question context
  questionId: z.string().optional(),
  // Duration in seconds
  durationSeconds: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = speechSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { targetText, transcript, confidence, subtopicId, questionId, durationSeconds } =
      parsed.data;

    // Get user
    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ─── Calculate accuracy by comparing words ────────────────────────────────
    const normalize = (s: string) =>
      s
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")
        .split(/\s+/)
        .filter(Boolean);

    const targetWords = normalize(targetText);
    const spokenWords = normalize(transcript);

    // Count matching words
    let matchCount = 0;
    const targetSet = new Set(targetWords);
    for (const word of spokenWords) {
      if (targetSet.has(word)) matchCount++;
    }

    // Accuracy = matched / total target words
    const accuracy =
      targetWords.length > 0 ? matchCount / targetWords.length : 0;
    const wordsCorrect = matchCount;
    const wordsTotal = targetWords.length;

    // Pronunciation score = average of confidence and accuracy
    const pronunciationScore = (confidence + accuracy) / 2;
    const fluencyScore =
      durationSeconds && targetWords.length > 0
        ? Math.min(1, (targetWords.length / durationSeconds) * 0.5)
        : confidence;

    // ─── Build feedback ───────────────────────────────────────────────────────
    const corrections: { word: string; suggestion: string }[] = [];
    if (accuracy < 0.9) {
      const spokenSet = new Set(spokenWords);
      for (const word of targetWords) {
        if (!spokenSet.has(word)) {
          corrections.push({
            word,
            suggestion: `Practice saying "${word}" more clearly`,
          });
        }
      }
    }

    let feedback = "";
    if (accuracy >= 0.95) {
      feedback = "Excellent! Your pronunciation is very accurate. Keep it up!";
    } else if (accuracy >= 0.8) {
      feedback =
        "Good job! A few words were unclear. Keep practicing for perfect fluency.";
    } else if (accuracy >= 0.6) {
      feedback =
        "Nice try! Focus on the highlighted words and practice them individually.";
    } else {
      feedback =
        "Keep practicing! Try speaking more slowly and clearly. You will improve with daily practice.";
    }

    // ─── Save to DB ───────────────────────────────────────────────────────────
    const attempt = await db.speechAttempt.create({
      data: {
        userId: user.id,
        subtopicId,
        questionId,
        targetText,
        transcript,
        confidence,
        accuracy,
        wordsCorrect,
        wordsTotal,
        pronunciationScore,
        fluencyScore,
        feedback,
        corrections: JSON.stringify(corrections),
        durationSeconds,
      },
    });

    // Award XP for practicing speech
    const xpEarned = Math.floor(accuracy * 20) + 5; // 5-25 XP per attempt
    await db.user.update({
      where: { id: user.id },
      data: {
        totalXp: { increment: xpEarned },
        lastActiveAt: new Date(),
      },
    });

    await db.score.create({
      data: {
        userId: user.id,
        activity: "SPEECH",
        points: Math.floor(accuracy * 100),
        xp: xpEarned,
        coins: Math.floor(xpEarned * 0.2),
        subtopicId,
      },
    });

    return NextResponse.json({
      data: {
        attemptId: attempt.id,
        accuracy: Math.round(accuracy * 100),
        pronunciationScore: Math.round(pronunciationScore * 100),
        fluencyScore: Math.round(fluencyScore * 100),
        wordsCorrect,
        wordsTotal,
        feedback,
        corrections,
        xpEarned,
      },
    });
  } catch (error) {
    console.error("[API POST /speech] Error:", error);
    return NextResponse.json(
      { error: "Failed to save speech attempt" },
      { status: 500 }
    );
  }
}
