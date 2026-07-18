// ============================================================
// Day Page - Shows all topics and subtopics for a specific day
// This is the entry point for daily learning
// ============================================================

import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { db } from "@/lib/db";
import { DayPageClient } from "@/components/learning/day-page-client";
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

// ─── Dynamic Metadata ─────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { dayNumber: string };
}): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const dayData = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);

  if (!dayData) {
    return { title: "Day Not Found" };
  }

  return {
    title: `Day ${dayNum}: ${dayData.title}`,
    description: dayData.description,
  };
}

// ─── Fetch day data ────────────────────────────────────────────
async function getDayData(dayNumber: number, userId: string) {
  // Try to get from database first
  let dayData = await db.day
    .findUnique({
      where: { dayNumber },
      include: {
        topics: {
          orderBy: { orderIndex: "asc" },
          include: {
            subtopics: {
              orderBy: { orderIndex: "asc" },
              include: {
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
        // Get user's progress for this day
        progress: {
          where: { userId },
          include: {
            subtopicProgress: true,
          },
        },
      },
    })
    .catch(() => null);

  // Fall back to static content data if DB not seeded yet
  if (!dayData) {
    const staticDay = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNumber);
    if (!staticDay) return null;

    // Return static data in the shape the client expects
    return {
      ...staticDay,
      id: `day-${dayNumber}`,
      topics: staticDay.topics,
      progress: [],
    };
  }

  return dayData;
}

// ─── Page Component ────────────────────────────────────────────
export default async function DayPage({
  params,
}: {
  params: { dayNumber: string };
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // Parse and validate day number
  const dayNumber = parseInt(params.dayNumber);
  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 75) {
    notFound();
  }

  // Fetch data
  const dayData = await getDayData(dayNumber, userId);
  if (!dayData) notFound();

  // Check if user has access to this day
  // TODO: Check user's current day progress and unlock logic
  const userCurrentDay = 2; // Will come from user data
  const hasAccess = dayNumber <= userCurrentDay;

  return (
    <DayPageClient
      dayData={dayData as any}
      dayNumber={dayNumber}
      hasAccess={hasAccess}
      userId={userId}
    />
  );
}
