// ============================================================
// POST /api/score - Save score + update user XP/coins in DB
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
      activity,
      points = 0,
      xp = 0,
      coins = 0,
      dayId,
      subtopicId,
    } = body;

    if (!activity) {
      return NextResponse.json(
        { error: "activity is required" },
        { status: 400 }
      );
    }

    // Save score record + update user totals in a transaction
    const [score, updatedUser] = await db.$transaction([
      db.score.create({
        data: {
          userId: user.id,
          activity,
          points,
          xp,
          coins,
          ...(dayId && { dayId }),
          ...(subtopicId && { subtopicId }),
        },
      }),
      db.user.update({
        where: { id: user.id },
        data: {
          totalXp: { increment: xp },
          totalCoins: { increment: coins },
          lastActiveAt: new Date(),
        },
      }),
    ]);

    // Calculate level from new XP
    const newLevel = calculateLevel(updatedUser.totalXp);
    if (newLevel > updatedUser.level) {
      await db.user.update({
        where: { id: user.id },
        data: { level: newLevel },
      });
    }

    return NextResponse.json({
      data: {
        score,
        user: {
          totalXp: updatedUser.totalXp,
          totalCoins: updatedUser.totalCoins,
          level: Math.max(newLevel, updatedUser.level),
        },
        leveledUp: newLevel > updatedUser.level,
      },
    });
  } catch (error) {
    console.error("[API POST /score] Error:", error);
    return NextResponse.json({ error: "Failed to save score" }, { status: 500 });
  }
}

function calculateLevel(totalXp: number): number {
  let level = 1;
  let xpNeeded = 0;
  while (level <= 100) {
    xpNeeded += Math.floor(100 * Math.pow(1.5, level - 1));
    if (totalXp < xpNeeded) break;
    level++;
  }
  return level;
}
