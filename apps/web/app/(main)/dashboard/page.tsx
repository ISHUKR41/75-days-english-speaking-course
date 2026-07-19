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

// Fetch user data on the server
async function getDashboardData(userId: string) {
  try {
    // Get or create user in our database
    const user = await db.user.findUnique({
      where: { clerkId: userId },
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

    return { user, days, leaderboard };
  } catch (error) {
    console.error("Dashboard data fetch error:", error);
    return { user: null, days: [], leaderboard: [] };
  }
}

export default async function DashboardPage() {
  const { userId } = await auth();

  // This should never happen due to layout protection, but just in case
  if (!userId) redirect("/sign-in");

  // Fetch all dashboard data
  const { user, days, leaderboard } = await getDashboardData(userId);

  return (
    <DashboardClient
      userId={userId}
      initialUser={user}
      initialDays={days}
      initialLeaderboard={leaderboard}
    />
  );
}
