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

    // ── Find subtopic in DB ───────────────────────────────────
    // The subtopicId from the config is like "d1-t1-s1"
    // We need to match it against the DB subtopic that has the same order
    // For now, find the subtopic by pattern match from config ID
    const subtopic = await db.subtopic.findFirst({
      where: {
        topic: {
          day: { dayNumber },
        },
      },
      select: { id: true },
      take: 1,
    });

    // ── Calculate new XP and level ────────────────────────────
    const newTotalXp  = user.totalXp + xpEarned;
    const newLevel    = Math.floor(newTotalXp / 1000) + 1; // Level up every 1000 XP

    // ── Update user XP and level ──────────────────────────────
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        totalXp:     newTotalXp,
        level:       Math.max(user.level, newLevel), // Never go down
        lastActiveAt: new Date(),
      },
    });

    // ── Upsert subtopic progress ──────────────────────────────
    if (subtopic) {
      await db.subtopicProgress.upsert({
        where: {
          userId_subtopicId: {
            userId: user.id,
            subtopicId: subtopic.id,
          },
        },
        create: {
          userId:       user.id,
          subtopicId:   subtopic.id,
          status:       score >= 80 ? "COMPLETED" : "IN_PROGRESS",
          practiceScore: type === "practice" ? score : 0,
          testScore:    type === "test" ? score : 0,
          xpEarned,
          completedAt:  score >= 80 ? new Date() : undefined,
        },
        update: {
          status:       score >= 80 ? "COMPLETED" : "IN_PROGRESS",
          ...(type === "practice" ? { practiceScore: score } : {}),
          ...(type === "test" ? { testScore: score } : {}),
          xpEarned:     { increment: xpEarned },
          completedAt:  score >= 80 ? new Date() : undefined,
        },
      });
    }

    // ── Upsert day progress ───────────────────────────────────
    const day = await db.day.findUnique({
      where: { dayNumber },
      select: { id: true },
    });

    if (day) {
      await db.dayProgress.upsert({
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
        },
      });
    }

    // ── Record score in Score table ───────────────────────────
    await db.score.create({
      data: {
        userId:       user.id,
        scoreType:    type === "practice" ? "PRACTICE" : "TEST",
        score,
        maxScore:     100,
        percentage:   score,
        correct,
        total,
        xpEarned,
        dayNumber,
      },
    });

    // ── Check if user should advance to next day ──────────────
    // If they completed a test with 80%+ score and it's the current day
    if (type === "test" && score >= 80 && dayNumber >= user.currentDay) {
      await db.user.update({
        where: { id: user.id },
        data: {
          currentDay: Math.min(dayNumber + 1, 75),
        },
      });
    }

    return NextResponse.json({
      success:   true,
      xpEarned,
      newTotalXp: updatedUser.totalXp,
      newLevel:   updatedUser.level,
      levelUp:    updatedUser.level > user.level,
    });

  } catch (error) {
    console.error("[/api/progress/save] Error:", error);
    return NextResponse.json(
      { error: "Failed to save progress" },
      { status: 500 }
    );
  }
}
