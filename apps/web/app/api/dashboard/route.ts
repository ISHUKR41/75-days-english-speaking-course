// ============================================================
// GET /api/dashboard - Returns dashboard stats for logged-in user
// ============================================================

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        progress: {
          include: { day: true },
          orderBy: { updatedAt: "desc" },
          take: 10,
        },
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
          take: 5,
        },
        streakHistory: {
          orderBy: { date: "desc" },
          take: 30,
        },
        scores: {
          orderBy: { createdAt: "desc" },
          take: 20,
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compute stats
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

    // Leaderboard top 10
    const leaderboard = await db.user.findMany({
      orderBy: { totalXp: "desc" },
      take: 10,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        imageUrl: true,
        totalXp: true,
        level: true,
        streak: true,
      },
    });

    // User rank
    const usersAbove = await db.user.count({
      where: { totalXp: { gt: user.totalXp } },
    });
    const rank = usersAbove + 1;

    // All 75 days
    const days = await db.day.findMany({
      orderBy: { dayNumber: "asc" },
      include: {
        _count: { select: { topics: true } },
      },
    });

    return NextResponse.json({
      data: {
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
          currentDay: user.currentDay,
          totalXp: user.totalXp,
          totalCoins: user.totalCoins,
          level: user.level,
          streak: user.streak,
          longestStreak: user.longestStreak,
          soundEnabled: user.soundEnabled,
          theme: user.theme,
        },
        stats: {
          completedDays,
          todayXp,
          weekXp,
          rank,
          badges: user.badges.length,
        },
        progress: user.progress,
        streakHistory: user.streakHistory,
        recentBadges: user.badges,
        leaderboard,
        days,
      },
    });
  } catch (error) {
    console.error("[API GET /dashboard] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
