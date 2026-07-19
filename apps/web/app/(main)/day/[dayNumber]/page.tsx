// ============================================================
// Day Page - Shows full day with all topics and subtopics
// Server component: fetches data, then passes to client
// Protected: redirect to sign-in if not authenticated
// ============================================================

import { auth } from "@/lib/safe-auth";
import { redirect, notFound } from "next/navigation";
import { Metadata } from "next";
import { db } from "@/lib/db";
import { DayPageClient } from "@/components/learning/day-page-client";

// ─── Generate metadata for SEO ───────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { dayNumber: string };
}): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const day = await db.day.findUnique({ where: { dayNumber: dayNum } });
  return {
    title: day
      ? `Day ${dayNum}: ${day.title} | 75 Days Hard English`
      : `Day ${dayNum} | 75 Days Hard English`,
    description: day?.description ?? "Learn English with 75 Days Hard Course",
  };
}

// ─── Server-side data fetch ───────────────────────────────────────────────────
async function getDayData(dayNum: number, clerkId: string) {
  // Fetch day with all topics and subtopics in one query
  const day = await db.day.findUnique({
    where: { dayNumber: dayNum },
    include: {
      topics: {
        orderBy: { orderIndex: "asc" },
        include: {
          subtopics: {
            orderBy: { orderIndex: "asc" },
            include: {
              // Question counts per subtopic
              _count: {
                select: {
                  practiceQs: true,
                  testQs: true,
                  vocabulary: true,
                },
              },
            },
          },
        },
      },
      // Vocabulary count for the day
      _count: {
        select: { vocabulary: true },
      },
    },
  });

  if (!day) return null;

  // Get the user from DB
  const user = await db.user.findUnique({
    where: { clerkId },
    select: { id: true, currentDay: true, totalXp: true, level: true, streak: true },
  });

  // Check if user has access to this day
  // Users can only access up to their currentDay + 1 (next day preview)
  const hasAccess = user ? dayNum <= (user.currentDay + 1) : dayNum === 1;

  // Get user's progress on this day and its subtopics
  let dayProgress = null;
  const completedSubtopicIds = new Set<string>();

  if (user) {
    dayProgress = await db.dayProgress.findUnique({
      where: { userId_dayId: { userId: user.id, dayId: day.id } },
      include: { subtopicProgress: true },
    });

    // Build set of completed subtopic IDs
    if (dayProgress?.subtopicProgress) {
      for (const sp of dayProgress.subtopicProgress) {
        if (sp.status === "COMPLETED") {
          completedSubtopicIds.add(sp.subtopicId);
        }
      }
    }
  }

  return { day, user, hasAccess, dayProgress, completedSubtopicIds: Array.from(completedSubtopicIds) };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function DayPage({
  params,
}: {
  params: { dayNumber: string };
}) {
  // Ensure authenticated
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // Validate day number
  const dayNum = parseInt(params.dayNumber);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // Fetch all data
  const data = await getDayData(dayNum, userId);
  if (!data) notFound();

  const { day, user, hasAccess, dayProgress, completedSubtopicIds } = data;

  // If locked, still show the page but with locked state
  return (
    <DayPageClient
      day={day as any}
      dayNumber={dayNum}
      hasAccess={hasAccess}
      userId={userId}
      userCurrentDay={user?.currentDay ?? 1}
      dayProgress={dayProgress as any}
      completedSubtopicIds={completedSubtopicIds}
    />
  );
}
