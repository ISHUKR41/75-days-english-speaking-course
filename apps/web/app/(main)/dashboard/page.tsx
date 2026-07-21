// ============================================================
// Dashboard Page - Main hub for the 75 Days English Course
// Shows: current day, progress, stats, quick actions
// ============================================================

import { auth } from "@/lib/safe-auth";
import { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard/dashboard-client";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your English learning dashboard - track progress, continue learning",
};

// Fetch user data on the server — auto-creates user if first visit
async function getDashboardData(userId: string) {
  try {
    // Auto-upsert user so they always exist in DB
    // This handles: first-time visitors, dev passthrough, and new sign-ups
    const isDevUser = userId === "dev_user_75days_english";
    const user = await db.user.upsert({
      where: { clerkId: userId },
      update: { lastActiveAt: new Date() },
      create: {
        clerkId: userId,
        email: isDevUser ? "dev@75daysenglish.com" : `${userId.slice(-8)}@75days.app`,
        username: isDevUser ? "devstudent" : `student_${userId.slice(-6)}`,
        firstName: isDevUser ? "Dev" : "Student",
        lastName: isDevUser ? "User" : "",
        currentDay: 1,
        totalXp: 0,
        totalCoins: 0,
        level: 1,
        streak: 0,
        longestStreak: 0,
      },
      include: {
        // Get recent progress
        progress: {
          include: {
            day: true,
          },
          orderBy: { updatedAt: "desc" },
          take: 5,
        },
        // Get badge count
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
          take: 5,
        },
        // Get streak history for heatmap
        streakHistory: {
          orderBy: { date: "desc" },
          take: 30,
        },
      },
    });

    // Get all 75 days with basic info
    const days = await db.day.findMany({
      orderBy: { dayNumber: "asc" },
      include: {
        _count: {
          select: { topics: true },
        },
      },
    });

    // Get leaderboard top 5
    const leaderboard = await db.user.findMany({
      orderBy: { totalXp: "desc" },
      take: 5,
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

    // Compute real stats from score records
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    let todayXp = 0;
    let weekXp = 0;
    let accuracy = 0;
    let questionsAnswered = 0;
    let wordsLearned = 0;

    try {
      const recentScores = await db.score.findMany({
        where: { userId: user.id },
        select: { xp: true, points: true, createdAt: true },
        orderBy: { createdAt: "desc" },
        take: 200,
      });

      questionsAnswered = recentScores.length;

      if (recentScores.length > 0) {
        const totalPoints = recentScores.reduce((s, r) => s + (r.points ?? 0), 0);
        accuracy = Math.round(totalPoints / recentScores.length);
      }

      todayXp = recentScores
        .filter((s) => new Date(s.createdAt) >= todayStart)
        .reduce((sum, s) => sum + (s.xp ?? 0), 0);

      weekXp = recentScores
        .filter((s) => new Date(s.createdAt) >= weekStart)
        .reduce((sum, s) => sum + (s.xp ?? 0), 0);

      // Estimate words learned based on completed days
      wordsLearned = Math.min((user.currentDay - 1) * 200, 15000);
    } catch {
      // Ignore stat errors — fall back to zeros
    }

    return { user, days, leaderboard, todayXp, weekXp, accuracy, questionsAnswered, wordsLearned };
  } catch (error) {
    console.error("Dashboard data fetch error:", error);
    // Return safe fallback — dashboard will show with placeholder data
    return { user: null, days: [], leaderboard: [] };
  }
}

export default async function DashboardPage() {
  const { userId } = await auth();

  // This should never happen due to layout protection, but just in case
  if (!userId) redirect("/sign-in");

  // Fetch all dashboard data
  const { user, days, leaderboard, todayXp, weekXp, accuracy, questionsAnswered, wordsLearned } =
    await getDashboardData(userId);

  return (
    <DashboardClient
      userId={userId}
      initialUser={user}
      initialDays={days}
      initialLeaderboard={leaderboard}
      todayXp={todayXp}
      weekXp={weekXp}
      accuracy={accuracy}
      questionsAnswered={questionsAnswered}
      wordsLearned={wordsLearned}
    />
  );
}
