"use server";
// ============================================================
// Progress Server Actions - 75 Days Hard English Course
// ============================================================

import { db } from "@/lib/db";

interface UpdateDayProgressData {
  status?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  practiceScore?: number;
  testScore?: number;
  xpEarned?: number;
  topicsCompleted?: number;
  topicsTotal?: number;
}

// Update (or create) progress for a specific day
export async function updateDayProgress(
  userId: string,
  dayId: string,
  data: UpdateDayProgressData
) {
  try {
    const progress = await db.dayProgress.upsert({
      where: { userId_dayId: { userId, dayId } },
      update: {
        ...(data.status && { status: data.status }),
        ...(data.practiceScore !== undefined && {
          practiceScore: data.practiceScore,
        }),
        ...(data.testScore !== undefined && { testScore: data.testScore }),
        ...(data.xpEarned !== undefined && {
          totalXpEarned: { increment: data.xpEarned },
        }),
        ...(data.topicsCompleted !== undefined && {
          topicsCompleted: data.topicsCompleted,
        }),
        ...(data.topicsTotal !== undefined && {
          topicsTotal: data.topicsTotal,
        }),
        ...(data.status === "COMPLETED" && { completedAt: new Date() }),
        ...(data.status === "IN_PROGRESS" && { startedAt: new Date() }),
        updatedAt: new Date(),
      },
      create: {
        userId,
        dayId,
        status: data.status || "IN_PROGRESS",
        startedAt:
          data.status === "IN_PROGRESS" ? new Date() : undefined,
        completedAt:
          data.status === "COMPLETED" ? new Date() : undefined,
        practiceScore: data.practiceScore || 0,
        testScore: data.testScore || 0,
        totalXpEarned: data.xpEarned || 0,
        topicsCompleted: data.topicsCompleted || 0,
        topicsTotal: data.topicsTotal || 0,
      },
    });

    return { success: true, progress };
  } catch (error) {
    console.error("[updateDayProgress] Error:", error);
    return { success: false, error: String(error) };
  }
}

// Get all progress records for a user
export async function getProgress(userId: string) {
  try {
    const progress = await db.dayProgress.findMany({
      where: { userId },
      include: {
        day: {
          select: {
            dayNumber: true,
            title: true,
            emoji: true,
            isRevision: true,
            isMockTest: true,
          },
        },
        subtopicProgress: true,
      },
      orderBy: { createdAt: "asc" },
    });

    return { success: true, progress };
  } catch (error) {
    console.error("[getProgress] Error:", error);
    return { success: false, error: String(error), progress: [] };
  }
}

// Update subtopic progress
export async function updateSubtopicProgress(
  userId: string,
  subtopicId: string,
  dayProgressId: string,
  data: {
    status?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
    practiceCorrect?: number;
    practiceAttempted?: number;
    practiceScore?: number;
    testCorrect?: number;
    testAttempted?: number;
    testScore?: number;
    xpEarned?: number;
    timeSpentMins?: number;
  }
) {
  try {
    const progress = await db.subtopicProgress.upsert({
      where: { userId_subtopicId: { userId, subtopicId } },
      update: {
        ...(data.status && { status: data.status }),
        ...(data.practiceCorrect !== undefined && {
          practiceCorrect: data.practiceCorrect,
        }),
        ...(data.practiceAttempted !== undefined && {
          practiceAttempted: data.practiceAttempted,
        }),
        ...(data.practiceScore !== undefined && {
          practiceScore: data.practiceScore,
        }),
        ...(data.testCorrect !== undefined && {
          testCorrect: data.testCorrect,
        }),
        ...(data.testAttempted !== undefined && {
          testAttempted: data.testAttempted,
        }),
        ...(data.testScore !== undefined && { testScore: data.testScore }),
        ...(data.xpEarned !== undefined && {
          xpEarned: { increment: data.xpEarned },
        }),
        ...(data.timeSpentMins !== undefined && {
          timeSpentMins: { increment: data.timeSpentMins },
        }),
        ...(data.status === "COMPLETED" && { completedAt: new Date() }),
        ...(data.status === "IN_PROGRESS" && { startedAt: new Date() }),
        updatedAt: new Date(),
      },
      create: {
        userId,
        subtopicId,
        dayProgressId,
        status: data.status || "IN_PROGRESS",
        startedAt: new Date(),
        practiceCorrect: data.practiceCorrect || 0,
        practiceAttempted: data.practiceAttempted || 0,
        practiceScore: data.practiceScore || 0,
        testCorrect: data.testCorrect || 0,
        testAttempted: data.testAttempted || 0,
        testScore: data.testScore || 0,
        xpEarned: data.xpEarned || 0,
        timeSpentMins: data.timeSpentMins || 0,
      },
    });

    return { success: true, progress };
  } catch (error) {
    console.error("[updateSubtopicProgress] Error:", error);
    return { success: false, error: String(error) };
  }
}
