// ============================================================
// Day Page - Shows full day with all topics and subtopics
// Uses STATIC config data for structure (IDs match subtopic page)
// Uses DB only for user progress tracking
// ============================================================

import { auth } from "@/lib/safe-auth";
import { redirect, notFound } from "next/navigation";
import { Metadata } from "next";
import { db } from "@/lib/db";
import { DayPageClient } from "@/components/learning/day-page-client";
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

// ─── Generate metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { dayNumber: string };
}): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const dayConfig = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  return {
    title: dayConfig
      ? `Day ${dayNum}: ${dayConfig.title} | 75 Days Hard English`
      : `Day ${dayNum} | 75 Days Hard English`,
    description: dayConfig?.description ?? "Learn English with 75 Days Hard Course",
  };
}

// ─── Page Component ────────────────────────────────────────────────────────────
export default async function DayPage({
  params,
}: {
  params: { dayNumber: string };
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const dayNum = parseInt(params.dayNumber);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // ── Get structure from STATIC CONFIG ────────────────────────
  // This ensures topic/subtopic IDs match what the subtopic page expects
  const dayConfig = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!dayConfig) notFound();

  // Build day data entirely from static config
  const day = {
    id: `day-${dayNum}`,
    dayNumber: dayConfig.dayNumber,
    title: dayConfig.title,
    description: dayConfig.description,
    emoji: dayConfig.emoji,
    isRevision: dayConfig.isRevision,
    isMockTest: dayConfig.isMockTest,
    topics: dayConfig.topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      description: topic.description,
      emoji: topic.emoji,
      color: topic.color,
      orderIndex: topic.orderIndex,
      subtopics: topic.subtopics.map((sub) => ({
        id: sub.id,
        title: sub.title,
        description: sub.description,
        emoji: sub.emoji,
        estimatedMins: sub.estimatedMins,
        orderIndex: sub.orderIndex,
        _count: {
          // All days have rich content; days 1–2 hand-written, 3–75 generator
          practiceQs: dayNum <= 2 ? 80 : 40,
          testQs: dayNum <= 2 ? 50 : 25,
          vocabulary: dayNum <= 2 ? 200 : 150,
        },
      })),
    })),
    _count: {
      vocabulary: dayNum <= 2 ? 200 : 150,
    },
  };

  // ── Get user progress from DB ──────────────────────────────
  let user = null;
  let dayProgress = null;
  const completedSubtopicIds: string[] = [];

  try {
    user = await db.user.findUnique({
      where: { clerkId: userId },
      select: { id: true, currentDay: true, totalXp: true, level: true, streak: true },
    });

    if (user) {
      const dbDay = await db.day.findUnique({ where: { dayNumber: dayNum } });
      if (dbDay) {
        dayProgress = await db.dayProgress.findFirst({
          where: { userId: user.id, dayId: dbDay.id },
        });

        // Subtopic progress uses the static subtopic IDs stored in DB
        if (dayProgress) {
          const subtopicProgresses = await db.subtopicProgress.findMany({
            where: {
              dayProgressId: dayProgress.id,
              status: "COMPLETED",
            },
          });
          // subtopicId in SubtopicProgress stores static config IDs when we save them
          completedSubtopicIds.push(
            ...subtopicProgresses.map((sp) => sp.subtopicId)
          );
        }
      }
    }
  } catch (err) {
    console.warn("Day page: DB progress fetch skipped:", (err as Error).message);
  }

  // ── Access control ─────────────────────────────────────────
  const hasAccess = user ? dayNum <= user.currentDay + 1 : dayNum === 1;

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
