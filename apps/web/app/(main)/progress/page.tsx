// ============================================================
// Progress Page — Real DB-backed stats
// Fetches user's actual XP, streak, completedDays on the server
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ProgressPageClient } from "@/components/progress/progress-page-client";

export const metadata: Metadata = {
  title: "My Progress — 75 Days Hard English",
  description: "Track your 75-day English learning journey with real stats.",
};

export default async function ProgressPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  try {
    // ── Fetch real user data from DB ──────────────────────────
    const user = await db.user.findUnique({
      where: { clerkId: userId },
      include: {
        _count: { select: { progress: true, badges: true } },
      },
    });

    // ── Fetch completed day progress ───────────────────────────
    const dayProgressList = await db.dayProgress.findMany({
      where: { userId: user?.id ?? "", status: "COMPLETED" },
      include: { day: { select: { dayNumber: true } } },
      orderBy: { updatedAt: "asc" },
    });

    const completedDayNumbers = dayProgressList.map((p) => p.day.dayNumber);

    // ── Recent scores for chart ─────────────────────────────
    const scores = await db.score.findMany({
      where: { userId: user?.id ?? "" },
      orderBy: { createdAt: "asc" },
      take: 30,
    });

    return (
      <ProgressPageClient
        userId={userId}
        totalXp={user?.totalXp ?? 0}
        streak={user?.streak ?? 0}
        longestStreak={user?.longestStreak ?? 0}
        level={user?.level ?? 1}
        completedDayNumbers={completedDayNumbers}
        currentDay={user?.currentDay ?? 1}
        badgeCount={user?._count?.badges ?? 0}
        scores={scores.map((s) => ({
          score: s.points,
          maxScore: Math.max(s.points + 20, 100),
          createdAt: s.createdAt.toISOString(),
        }))}
      />
    );
  } catch (error) {
    console.error("Progress page error:", error);
    return (
      <ProgressPageClient
        userId={userId}
        totalXp={0}
        streak={0}
        longestStreak={0}
        level={1}
        completedDayNumbers={[]}
        currentDay={1}
        badgeCount={0}
        scores={[]}
      />
    );
  }
}
