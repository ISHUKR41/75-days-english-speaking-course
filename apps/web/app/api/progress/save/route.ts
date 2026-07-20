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
  subtopicId: string;        // DB subtopic ID
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
          ...(score >= 80 ? { status: "COMPLETED", completedAt: new Date() } : {}),
        },
      });
      dayProgressId = dp.id;
    }

    // ── Upsert subtopic progress ──────────────────────────────
    // Find the subtopic by matching config ID pattern against DB
    const subtopic = await db.subtopic.findFirst({
      where: {
        topic: { day: { dayNumber } },
      },
      select: { id: true },
    });

    if (subtopic && dayProgressId) {
      await db.subtopicProgress.upsert({
        where: {
          userId_subtopicId: {
            userId:     user.id,
            subtopicId: subtopic.id,
          },
        },
        create: {
          userId:        user.id,
          subtopicId:    subtopic.id,
          dayProgressId,
          status:        score >= 80 ? "COMPLETED" : "IN_PROGRESS",
          practiceScore: type === "practice" ? score : 0,
          testScore:     type === "test" ? score : 0,
          xpEarned,
          completedAt:   score >= 80 ? new Date() : undefined,
        },
        update: {
          status:        score >= 80 ? "COMPLETED" : "IN_PROGRESS",
          ...(type === "practice" ? { practiceScore: score } : {}),
          ...(type === "test"     ? { testScore:     score } : {}),
          xpEarned:     { increment: xpEarned },
          completedAt:  score >= 80 ? new Date() : undefined,
        },
      });
    }

    // ── Record score in Score table ───────────────────────────
    await db.score.create({
      data: {
        userId:   user.id,
        activity: type === "practice" ? "PRACTICE" : "TEST",
        points:   correct,
        xp:       xpEarned,
        coins:    Math.floor(xpEarned / 10),
        dayId:    day?.id,
        subtopicId: subtopic?.id,
      },
    });

    // ── Check if user should advance to next day ──────────────
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
