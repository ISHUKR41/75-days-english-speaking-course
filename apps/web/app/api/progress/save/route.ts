// ============================================================
// API Route: POST /api/progress/save
// Saves practice/test scores and awards XP to the user
// Called by PracticeSection and TestSection after completion
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/safe-auth";
import { db } from "@/lib/db";

// ─── Request body schema ──────────────────────────────────────
interface SaveProgressBody {
  dayNumber: number;         // Which day (1-75)
  subtopicId: string;        // Static config subtopic ID (e.g., "d1-t1-s1")
  type: "practice" | "test"; // Which section completed
  score: number;             // 0-100 accuracy
  xpEarned: number;          // XP to award
  correct: number;           // Number of correct answers
  total: number;             // Total questions answered
}

export async function POST(req: NextRequest) {
  try {
    // ── Auth check ────────────────────────────────────────────
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── Parse body ────────────────────────────────────────────
    const body: SaveProgressBody = await req.json();
    const { dayNumber, subtopicId, type, score, xpEarned, correct, total } = body;

    // ── Get user from DB ──────────────────────────────────────
    const user = await db.user.findUnique({
      where: { clerkId: userId },
      select: { id: true, totalXp: true, level: true, currentDay: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ── Calculate new XP and level ────────────────────────────
    const newTotalXp = user.totalXp + xpEarned;
    const newLevel   = Math.floor(newTotalXp / 1000) + 1;

    // ── Update user XP and level ──────────────────────────────
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        totalXp:     newTotalXp,
        level:       Math.max(user.level, newLevel),
        lastActiveAt: new Date(),
      },
    });

    // ── Get day record ────────────────────────────────────────
    const day = await db.day.findUnique({
      where: { dayNumber },
      select: { id: true },
    });

    // ── Upsert day progress ───────────────────────────────────
    let dayProgressId: string | null = null;
    if (day) {
      const dp = await db.dayProgress.upsert({
        where: {
          userId_dayId: {
            userId: user.id,
            dayId:  day.id,
          },
        },
        create: {
          userId:         user.id,
          dayId:          day.id,
          status:         "IN_PROGRESS",
          practiceScore:  type === "practice" ? score : 0,
          testScore:      type === "test" ? score : 0,
          totalXpEarned:  xpEarned,
          startedAt:      new Date(),
        },
        update: {
          ...(type === "practice" ? { practiceScore: score } : {}),
          ...(type === "test" ? { testScore: score } : {}),
          totalXpEarned: { increment: xpEarned },
          ...(type === "test" && score >= 80 ? { status: "COMPLETED", completedAt: new Date() } : {}),
        },
      });
      dayProgressId = dp.id;
    }

    // ── Upsert subtopic progress using STATIC config ID ───────
    // The subtopicId from the request body is the static config ID
    // (e.g., "d1-t1-s1"). We store it directly so the day page
    // can match completed subtopics against the static config.
    if (dayProgressId && subtopicId) {
      await db.subtopicProgress.upsert({
        where: {
          userId_subtopicId: {
            userId:     user.id,
            subtopicId: subtopicId, // Use static config ID directly
          },
        },
        create: {
          userId:        user.id,
          subtopicId:    subtopicId,
          dayProgressId,
          status:        score >= 80 ? "COMPLETED" : "IN_PROGRESS",
          practiceScore: type === "practice" ? score : 0,
          testScore:     type === "test" ? score : 0,
          xpEarned,
          completedAt:   score >= 80 ? new Date() : undefined,
        },
        update: {
          ...(score >= 80 ? { status: "COMPLETED" } : {}),
          ...(type === "practice" ? { practiceScore: score } : {}),
          ...(type === "test"     ? { testScore:     score } : {}),
          xpEarned:     { increment: xpEarned },
          ...(score >= 80 ? { completedAt: new Date() } : {}),
        },
      });
    }

    // ── Record score in Score table ───────────────────────────
    // Find a DB subtopic for reference (best effort, non-blocking)
    const dbSubtopic = await db.subtopic.findFirst({
      where: { topic: { day: { dayNumber } } },
      select: { id: true },
    }).catch(() => null);

    await db.score.create({
      data: {
        userId:   user.id,
        activity: type === "practice" ? "PRACTICE" : "TEST",
        points:   correct,
        xp:       xpEarned,
        coins:    Math.floor(xpEarned / 10),
        dayId:    day?.id,
        subtopicId: dbSubtopic?.id,
      },
    });

    // ── Check if user should advance to next day ──────────────
    // Only advance when a TEST is passed (≥80%) for the current day
    if (type === "test" && score >= 80 && dayNumber >= user.currentDay) {
      await db.user.update({
        where: { id: user.id },
        data: { currentDay: { increment: 1 } },
      });
    }

    return NextResponse.json({
      success: true,
      xpEarned,
      newTotalXp: updatedUser.totalXp,
      newLevel: updatedUser.level,
      leveledUp: updatedUser.level > user.level,
    });
  } catch (error) {
    console.error("[POST /api/progress/save] Error:", error);
    return NextResponse.json(
      { error: "Failed to save progress" },
      { status: 500 }
    );
  }
}
