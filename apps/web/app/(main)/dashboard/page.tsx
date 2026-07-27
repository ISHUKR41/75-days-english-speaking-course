// ============================================================
// Dashboard Page - Main hub for the 75 Days English Course
// Shows: current day, progress, stats, quick actions
// Server component — fetches all data before render
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
async function getDashboardData(clerkId: string) {
  try {
    const isDevUser = clerkId === "dev_user_75days_english";

    // Auto-upsert user so they always exist in DB
    const user = await db.user.upsert({
      where: { clerkId },
      update: { lastActiveAt: new Date() },
      create: {
        clerkId,
        email: isDevUser ? "dev@75daysenglish.com" : `${clerkId.slice(-8)}@75days.app`,
        username: isDevUser ? "devstudent" : `student_${clerkId.slice(-6)}`,
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
        // ALL progress records — needed for completion status on day grid
        progress: {
          include: { day: true },
          orderBy: { updatedAt: "desc" },
        },
        // Badges count
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
          take: 10,
        },
        // Streak history for heatmap (last 90 days)
        streakHistory: {
          orderBy: { date: "desc" },
          take: 90,
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
        currentDay: true,
      },
    });

    // ─── Compute real stats ─────────────────────────────────────────────────
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Completed days from DayProgress
    const completedDaysCount = user.progress.filter(
      (p) => p.status === "COMPLETED"
    ).length;

    // XP stats from Score records
    let todayXp = 0;
    let weekXp = 0;
    let questionsAnswered = 0;
    let wordsLearned = 0;
    let accuracy = 0;
    let recentActivity: Array<{
      id: string;
      activity: string;
      xp: number;
      points: number;
      createdAt: Date;
      dayId: string | null;
    }> = [];

    try {
      // Today and week XP
      const [todayScores, weekScores] = await Promise.all([
        db.score.findMany({
          where: { userId: user.id, createdAt: { gte: todayStart } },
          select: { xp: true },
        }),
        db.score.findMany({
          where: { userId: user.id, createdAt: { gte: weekStart } },
          select: { xp: true },
        }),
      ]);

      todayXp = todayScores.reduce((s, r) => s + (r.xp ?? 0), 0);
      weekXp = weekScores.reduce((s, r) => s + (r.xp ?? 0), 0);

      // Total questions answered = total score records
      questionsAnswered = await db.score.count({ where: { userId: user.id } });

      // Mastered vocabulary
      wordsLearned = await db.userVocabulary.count({
        where: { userId: user.id, mastered: true },
      });

      // Practice accuracy
      try {
        const [totalAnswers, correctAnswers] = await Promise.all([
          db.practiceAnswer.count({ where: { userId: user.id } }),
          db.practiceAnswer.count({ where: { userId: user.id, isCorrect: true } }),
        ]);
        if (totalAnswers > 0) {
          accuracy = Math.round((correctAnswers / totalAnswers) * 100);
        }
      } catch {
        // ignore
      }

      // Recent activity feed
      recentActivity = await db.score.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
          id: true,
          activity: true,
          xp: true,
          points: true,
          createdAt: true,
          dayId: true,
        },
      });
    } catch {
      // Ignore stat errors — fall back to zeros
    }

    // Weekly XP chart data (last 7 days grouped by day)
    let weeklyXpChart: { day: string; xp: number; questions: number }[] = [];
    try {
      const weeklyScores = await db.score.findMany({
        where: { userId: user.id, createdAt: { gte: weekStart } },
        select: { createdAt: true, xp: true },
        orderBy: { createdAt: "asc" },
      });

      // Build a map: date string → { xp, count }
      const dayMap = new Map<string, { xp: number; questions: number }>();
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split("T")[0];
        dayMap.set(key, { xp: 0, questions: 0 });
      }
      for (const score of weeklyScores) {
        const key = new Date(score.createdAt).toISOString().split("T")[0];
        const entry = dayMap.get(key);
        if (entry) {
          entry.xp += score.xp ?? 0;
          entry.questions += 1;
        }
      }
      weeklyXpChart = Array.from(dayMap.entries()).map(([dateStr, vals]) => {
        const d = new Date(dateStr);
        return { day: dayNames[d.getDay()], xp: vals.xp, questions: vals.questions };
      });
    } catch {
      // ignore
    }

    // User rank
    let userRank = 0;
    try {
      userRank =
        (await db.user.count({ where: { totalXp: { gt: user.totalXp } } })) + 1;
    } catch {
      // ignore
    }

    return {
      user,
      days,
      leaderboard,
      completedDaysCount,
      todayXp,
      weekXp,
      accuracy,
      questionsAnswered,
      wordsLearned,
      weeklyXpChart,
      userRank,
      recentActivity,
    };
  } catch (error) {
    console.error("Dashboard data fetch error:", error);
    throw new Error("Dashboard data could not be loaded.");
  }
}

export default async function DashboardPage() {
  const { userId } = await auth();

  // This should never happen due to layout protection, but just in case
  if (!userId) redirect("/sign-in");

  // Fetch all dashboard data
  const data = await getDashboardData(userId);

  return (
    <DashboardClient
      userId={userId}
      initialUser={data.user}
      initialDays={data.days}
      initialLeaderboard={data.leaderboard}
      completedDaysCount={data.completedDaysCount}
      todayXp={data.todayXp}
      weekXp={data.weekXp}
      accuracy={data.accuracy}
      questionsAnswered={data.questionsAnswered}
      wordsLearned={data.wordsLearned}
      weeklyXpChart={data.weeklyXpChart}
      userRank={data.userRank}
      recentActivity={data.recentActivity}
    />
  );
}
