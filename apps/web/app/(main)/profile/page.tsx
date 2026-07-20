// ============================================================
// Profile Page — Custom profile replacing Clerk's UserProfile
// Shows real user stats, progress, achievements from DB
// Works with dev passthrough AND real Clerk auth
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ProfileClient } from "@/components/profile/profile-client";

export const metadata: Metadata = {
  title: "My Profile | 75 Days Hard English",
  description: "Your learning profile, achievements, and stats",
};

// Fetch full user profile data from DB
async function getUserProfile(clerkId: string) {
  try {
    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        badges: true,
        _count: {
          select: {
            progress: true,
            scores: true,
          },
        },
      },
    });

    if (!user) return null;

    // Get recent scores
    const recentScores = await db.score.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    // Get day progress
    const dayProgress = await db.dayProgress.findMany({
      where: { userId: user.id },
      orderBy: { dayNumber: "asc" },
    });

    return {
      user,
      recentScores,
      dayProgress,
      totalDaysCompleted: dayProgress.filter((d) => d.status === "COMPLETED").length,
      totalQuestionsAnswered: user._count.scores,
    };
  } catch {
    return null;
  }
}

export default async function ProfilePage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const profileData = await getUserProfile(userId);

  return (
    <div className="py-2">
      <ProfileClient profileData={profileData} />
    </div>
  );
}
