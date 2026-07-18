"use server";
// ============================================================
// User Server Actions - 75 Days Hard English Course
// ============================================================

import { db } from "@/lib/db";
import { levelFromXp, xpProgressInLevel } from "@/lib/utils";

interface CreateOrUpdateUserData {
  email?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  username?: string;
}

// Create or update a user record by Clerk ID
export async function createOrUpdateUser(
  clerkId: string,
  data: CreateOrUpdateUserData
) {
  try {
    const email =
      data.email || `clerk_${clerkId.slice(-8)}@placeholder.com`;
    const username =
      data.username || `user_${clerkId.slice(-8)}`;

    const user = await db.user.upsert({
      where: { clerkId },
      update: {
        ...(data.email && { email: data.email }),
        ...(data.firstName !== undefined && { firstName: data.firstName }),
        ...(data.lastName !== undefined && { lastName: data.lastName }),
        ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
        ...(data.username && { username: data.username }),
        updatedAt: new Date(),
      },
      create: {
        clerkId,
        email,
        username,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        imageUrl: data.imageUrl || "",
      },
    });

    return { success: true, user };
  } catch (error) {
    console.error("[createOrUpdateUser] Error:", error);
    return { success: false, error: String(error) };
  }
}

// Get comprehensive stats for a user
export async function getUserStats(userId: string) {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
        progress: {
          include: { day: true },
          orderBy: { updatedAt: "desc" },
        },
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
        },
        streakHistory: {
          orderBy: { date: "desc" },
          take: 30,
        },
        scores: {
          orderBy: { createdAt: "desc" },
          take: 50,
        },
        _count: {
          select: {
            progress: true,
            badges: true,
            scores: true,
            speechAttempts: true,
          },
        },
      },
    });

    if (!user) return null;

    const completedDays = user.progress.filter(
      (p) => p.status === "COMPLETED"
    ).length;

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayXp = user.scores
      .filter((s) => new Date(s.createdAt) >= todayStart)
      .reduce((sum, s) => sum + s.xp, 0);

    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    weekStart.setHours(0, 0, 0, 0);
    const weekXp = user.scores
      .filter((s) => new Date(s.createdAt) >= weekStart)
      .reduce((sum, s) => sum + s.xp, 0);

    // Leaderboard rank
    const usersAbove = await db.user.count({
      where: { totalXp: { gt: user.totalXp } },
    });

    const level = levelFromXp(user.totalXp);
    const levelProgress = xpProgressInLevel(user.totalXp);

    return {
      user,
      completedDays,
      todayXp,
      weekXp,
      rank: usersAbove + 1,
      level,
      levelProgress,
    };
  } catch (error) {
    console.error("[getUserStats] Error:", error);
    return null;
  }
}
