// ============================================================
// Leaderboard Page - Top 100 users by XP
// ============================================================

import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { LeaderboardClient } from "@/components/leaderboard/leaderboard-client";

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "See how you rank among all learners",
};

async function getLeaderboardData(clerkId: string) {
  try {
    const [users, dbUser] = await Promise.all([
      db.user.findMany({
        orderBy: { totalXp: "desc" },
        take: 100,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          imageUrl: true,
          totalXp: true,
          level: true,
          streak: true,
          scores: {
            where: {
              createdAt: {
                gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              },
            },
            select: { xp: true },
          },
        },
      }),
      db.user.findUnique({
        where: { clerkId },
        select: { id: true, totalXp: true },
      }),
    ]);

    // Compute weekly XP
    const usersWithWeekXp = users.map((u) => ({
      id: u.id,
      firstName: u.firstName,
      lastName: u.lastName,
      imageUrl: u.imageUrl,
      totalXp: u.totalXp,
      level: u.level,
      streak: u.streak,
      weekXp: u.scores.reduce((sum, s) => sum + s.xp, 0),
      monthXp: u.totalXp, // Simplified: use total for month view
    }));

    // Get current user rank
    let currentUserRank = 0;
    if (dbUser) {
      currentUserRank =
        (await db.user.count({
          where: { totalXp: { gt: dbUser.totalXp } },
        })) + 1;
    }

    return {
      users: usersWithWeekXp,
      currentDbUserId: dbUser?.id || "",
      currentUserRank,
    };
  } catch (error) {
    console.error("[Leaderboard] Error:", error);
    return { users: [], currentDbUserId: "", currentUserRank: 0 };
  }
}

export default async function LeaderboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { users, currentDbUserId, currentUserRank } =
    await getLeaderboardData(userId);

  return (
    <div className="py-2">
      <LeaderboardClient
        users={users as any}
        currentUserId={currentDbUserId}
        currentUserRank={currentUserRank}
      />
    </div>
  );
}
