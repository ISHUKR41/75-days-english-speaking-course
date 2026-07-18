"use server";
// ============================================================
// Score Server Actions - 75 Days Hard English Course
// ============================================================

import { db } from "@/lib/db";
import { levelFromXp } from "@/lib/utils";

// Add score record and update user's XP and coins
export async function addScore(
  userId: string,
  points: number,
  xp: number,
  options?: {
    coins?: number;
    activity?: string;
    dayId?: string;
    subtopicId?: string;
  }
) {
  try {
    const coins = options?.coins ?? Math.floor(xp / 10);
    const activity = options?.activity || "PRACTICE";

    const [score, user] = await db.$transaction([
      db.score.create({
        data: {
          userId,
          activity,
          points,
          xp,
          coins,
          ...(options?.dayId && { dayId: options.dayId }),
          ...(options?.subtopicId && { subtopicId: options.subtopicId }),
        },
      }),
      db.user.update({
        where: { id: userId },
        data: {
          totalXp: { increment: xp },
          totalCoins: { increment: coins },
          lastActiveAt: new Date(),
        },
      }),
    ]);

    // Check and update level
    const newLevel = levelFromXp(user.totalXp);
    let leveledUp = false;
    if (newLevel > user.level) {
      await db.user.update({
        where: { id: userId },
        data: { level: newLevel },
      });
      leveledUp = true;
    }

    return {
      success: true,
      score,
      newTotalXp: user.totalXp,
      newTotalCoins: user.totalCoins,
      newLevel,
      leveledUp,
    };
  } catch (error) {
    console.error("[addScore] Error:", error);
    return { success: false, error: String(error) };
  }
}

// Update user's XP directly (e.g., from streak bonus)
export async function updateUserXp(userId: string, xp: number) {
  try {
    const user = await db.user.update({
      where: { id: userId },
      data: {
        totalXp: { increment: xp },
        lastActiveAt: new Date(),
      },
    });

    const newLevel = levelFromXp(user.totalXp);
    let leveledUp = false;
    if (newLevel > user.level) {
      await db.user.update({
        where: { id: userId },
        data: { level: newLevel },
      });
      leveledUp = true;
    }

    return {
      success: true,
      totalXp: user.totalXp,
      newLevel,
      leveledUp,
    };
  } catch (error) {
    console.error("[updateUserXp] Error:", error);
    return { success: false, error: String(error) };
  }
}

// Get score history for a user
export async function getScoreHistory(userId: string, limit = 50) {
  try {
    const scores = await db.score.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    const totalXp = scores.reduce((sum, s) => sum + s.xp, 0);
    const totalCoins = scores.reduce((sum, s) => sum + s.coins, 0);
    const totalPoints = scores.reduce((sum, s) => sum + s.points, 0);

    return { success: true, scores, totalXp, totalCoins, totalPoints };
  } catch (error) {
    console.error("[getScoreHistory] Error:", error);
    return {
      success: false,
      error: String(error),
      scores: [],
      totalXp: 0,
      totalCoins: 0,
      totalPoints: 0,
    };
  }
}
