// ============================================================
// GET  /api/progress - Get user's full learning progress
// POST /api/progress - Update subtopic or day progress
// Used by dashboard, progress page, and day pages
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

// ─── GET: Full user progress ─────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const dayNumber = searchParams.get("dayNumber");

    // Find user
    const user = await db.user.findUnique({
      where: { clerkId },
      select: {
        id: true,
        currentDay: true,
        totalXp: true,
        totalCoins: true,
        level: true,
        streak: true,
        longestStreak: true,
        lastActiveAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // If specific day requested
    if (dayNumber) {
      const day = await db.day.findUnique({
        where: { dayNumber: parseInt(dayNumber) },
      });

      if (!day) {
        return NextResponse.json({ error: "Day not found" }, { status: 404 });
      }

      const dayProgress = await db.dayProgress.findUnique({
        where: { userId_dayId: { userId: user.id, dayId: day.id } },
        include: { subtopicProgress: true },
      });

      return NextResponse.json({ data: { user, dayProgress } });
    }

    // ─── Full progress for the progress page ─────────────────────────────────
    const allProgress = await db.dayProgress.findMany({
      where: { userId: user.id },
      include: {
        day: {
          select: {
            dayNumber: true,
            title: true,
            emoji: true,
            isRevision: true,
          },
        },
        subtopicProgress: {
          select: {
            status: true,
            practiceScore: true,
            testScore: true,
            xpEarned: true,
            timeSpentMins: true,
          },
        },
      },
      orderBy: { day: { dayNumber: "asc" } },
    });

    // Get streak history (last 30 days)
    const streakHistory = await db.streakHistory.findMany({
      where: { userId: user.id },
      orderBy: { date: "desc" },
      take: 30,
    });

    // Get recent scores for chart
    const recentScores = await db.score.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 100,
      select: {
        activity: true,
        points: true,
        xp: true,
        createdAt: true,
      },
    });

    // Compute summary stats
    const completedDays = allProgress.filter(
      (p) => p.status === "COMPLETED"
    ).length;
    const totalPracticeScore = allProgress.reduce(
      (sum, p) => sum + p.practiceScore,
      0
    );
    const totalTestScore = allProgress.reduce(
      (sum, p) => sum + p.testScore,
      0
    );

    return NextResponse.json({
      data: {
        user,
        allProgress,
        streakHistory,
        recentScores,
        summary: {
          completedDays,
          totalPracticeScore,
          totalTestScore,
          totalXp: user.totalXp,
          streak: user.streak,
          level: user.level,
        },
      },
    });
  } catch (error) {
    console.error("[API GET /progress] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}

// ─── Validation schema ────────────────────────────────────────────────────────
const updateProgressSchema = z.object({
  // Which subtopic to update
  subtopicId: z.string().min(1),
  // New status
  status: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]),
  // Optional score data
  practiceScore: z.number().optional(),
  testScore: z.number().optional(),
  xpEarned: z.number().optional(),
  timeSpentMins: z.number().optional(),
});

// ─── POST: Update progress ────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = updateProgressSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { subtopicId, status, practiceScore, testScore, xpEarned, timeSpentMins } =
      parsed.data;

    // Get user
    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get subtopic → topic → day chain
    const subtopic = await db.subtopic.findUnique({
      where: { id: subtopicId },
      include: {
        topic: {
          include: {
            day: true,
          },
        },
      },
    });
    if (!subtopic) {
      return NextResponse.json({ error: "Subtopic not found" }, { status: 404 });
    }

    const dayId = subtopic.topic.day.id;

    // Upsert DayProgress first
    const dayProgress = await db.dayProgress.upsert({
      where: { userId_dayId: { userId: user.id, dayId } },
      create: {
        userId: user.id,
        dayId,
        status: "IN_PROGRESS",
        startedAt: new Date(),
      },
      update: {
        status: "IN_PROGRESS",
      },
    });

    // Upsert SubtopicProgress
    const subtopicProgress = await db.subtopicProgress.upsert({
      where: { userId_subtopicId: { userId: user.id, subtopicId } },
      create: {
        userId: user.id,
        subtopicId,
        dayProgressId: dayProgress.id,
        status,
        startedAt: status !== "NOT_STARTED" ? new Date() : undefined,
        completedAt: status === "COMPLETED" ? new Date() : undefined,
        practiceScore: practiceScore ?? 0,
        testScore: testScore ?? 0,
        xpEarned: xpEarned ?? 0,
        timeSpentMins: timeSpentMins ?? 0,
      },
      update: {
        status,
        completedAt: status === "COMPLETED" ? new Date() : undefined,
        ...(practiceScore !== undefined && { practiceScore }),
        ...(testScore !== undefined && { testScore }),
        ...(xpEarned !== undefined && { xpEarned: { increment: xpEarned } }),
        ...(timeSpentMins !== undefined && {
          timeSpentMins: { increment: timeSpentMins },
        }),
      },
    });

    // Check if all subtopics in day are complete → mark day complete
    const allSubtopicsInDay = await db.subtopic.findMany({
      where: { topic: { dayId } },
      select: { id: true },
    });

    const completedCount = await db.subtopicProgress.count({
      where: {
        userId: user.id,
        subtopicId: { in: allSubtopicsInDay.map((s) => s.id) },
        status: "COMPLETED",
      },
    });

    if (completedCount === allSubtopicsInDay.length) {
      // All subtopics done → mark day as completed
      await db.dayProgress.update({
        where: { id: dayProgress.id },
        data: {
          status: "COMPLETED",
          completedAt: new Date(),
          topicsCompleted: allSubtopicsInDay.length,
          topicsTotal: allSubtopicsInDay.length,
        },
      });

      // Advance user's currentDay if needed
      await db.user.update({
        where: { id: user.id },
        data: {
          currentDay: {
            increment: 1,
          },
        },
      });
    }

    return NextResponse.json({
      data: { subtopicProgress, dayProgress },
    });
  } catch (error) {
    console.error("[API POST /progress] Error:", error);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}
