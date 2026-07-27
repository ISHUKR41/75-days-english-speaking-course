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
        // All progress for completion status
        progress: {
          include: { day: true },
          orderBy: { updatedAt: "desc" },
        },
        // Recent badges
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
          take: 5,
        },
        // Streak calendar data (last 90 days)
        streakHistory: {
          orderBy: { date: "desc" },
          take: 90,
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

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

    const weeklyXp = await db.score.findMany({
      where: {
        userId: user.id,
        createdAt: { gte: weekAgo },
      },
      select: { createdAt: true, xp: true, activity: true, points: true },
      orderBy: { createdAt: "asc" },
    });

    // ─── Real stats counts ───────────────────────────────────────────────────
    const completedDaysCount = await db.dayProgress.count({
      where: { userId: user.id, status: "COMPLETED" },
    });

    const totalScores = await db.score.count({
      where: { userId: user.id },
    });

    const masteredVocab = await db.userVocabulary.count({
      where: { userId: user.id, mastered: true },
    });

    // ─── Today's XP ─────────────────────────────────────────────────────────
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayScores = await db.score.findMany({
      where: { userId: user.id, createdAt: { gte: todayStart } },
      select: { xp: true },
    });
    const todayXp = todayScores.reduce((sum, s) => sum + (s.xp ?? 0), 0);

    // ─── Week XP ─────────────────────────────────────────────────────────────
    const weekXp = weeklyXp.reduce((sum, s) => sum + (s.xp ?? 0), 0);

    // ─── Recent activity (last 10 score records with context) ────────────────
    const recentActivity = await db.score.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        activity: true,
        xp: true,
        points: true,
        createdAt: true,
        dayId: true,
      },
    });

    // ─── Compute user rank ───────────────────────────────────────────────────
    const userRank =
      (await db.user.count({
        where: { totalXp: { gt: user.totalXp } },
      })) + 1;

    // ─── Practice accuracy from answers ──────────────────────────────────────
    let accuracy = 0;
    try {
      const answerStats = await db.practiceAnswer.aggregate({
        where: { userId: user.id },
        _count: { id: true },
        _sum: { pointsEarned: true },
      });
      const totalAnswers = answerStats._count.id;
      if (totalAnswers > 0) {
        const correctAnswers = await db.practiceAnswer.count({
          where: { userId: user.id, isCorrect: true },
        });
        accuracy = Math.round((correctAnswers / totalAnswers) * 100);
      }
    } catch {
      // Ignore if practiceAnswer table doesn't exist yet
    }

    return NextResponse.json({
      data: {
        user,
        days,
        leaderboard,
        weeklyXp,
        userRank,
        completedDaysCount,
        totalScores,
        masteredVocab,
        todayXp,
        weekXp,
        accuracy,
        recentActivity,
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
