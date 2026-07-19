// ============================================================
// GET /api/dashboard - All data needed for the dashboard in 1 call
// Returns: user stats, progress, streak, leaderboard, days
// Optimized: single round trip to avoid waterfall requests
// ============================================================

import { NextResponse } from "next/server";
import { auth } from "@/lib/safe-auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ─── Try to get or create user ───────────────────────────────────────────
    let user = await db.user.findUnique({
      where: { clerkId },
      include: {
        // Recent progress for display
        progress: {
          include: { day: true },
          orderBy: { updatedAt: "desc" },
          take: 10,
        },
        // Recent badges
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
          take: 5,
        },
        // Streak calendar data (last 30 days)
        streakHistory: {
          orderBy: { date: "desc" },
          take: 30,
        },
      },
    });

    // ─── Get all 75 days for the day grid ────────────────────────────────────
    const days = await db.day.findMany({
      orderBy: { dayNumber: "asc" },
      include: {
        _count: {
          select: { topics: true, vocabulary: true },
        },
      },
    });

    // ─── Leaderboard top 10 ──────────────────────────────────────────────────
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
        currentDay: true,
      },
    });

    // ─── Weekly XP data for chart (last 7 days) ──────────────────────────────
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    let weeklyXp: { createdAt: Date; xp: number }[] = [];
    if (user) {
      weeklyXp = await db.score.findMany({
        where: {
          userId: user.id,
          createdAt: { gte: weekAgo },
        },
        select: { createdAt: true, xp: true },
        orderBy: { createdAt: "asc" },
      });
    }

    // ─── Compute user rank ───────────────────────────────────────────────────
    let userRank = 0;
    if (user) {
      userRank =
        (await db.user.count({
          where: { totalXp: { gt: user.totalXp } },
        })) + 1;
    }

    return NextResponse.json({
      data: {
        user,
        days,
        leaderboard,
        weeklyXp,
        userRank,
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
