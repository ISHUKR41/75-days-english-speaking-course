// ============================================================
// GET /api/days/[dayNumber] - Get a single day with all topics
// and subtopics, plus user progress for that day
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { dayNumber: string } }
) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dayNum = parseInt(params.dayNumber);
    if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) {
      return NextResponse.json(
        { error: "Invalid day number (must be 1–75)" },
        { status: 400 }
      );
    }

    // Fetch the full day with all topics and subtopics
    const day = await db.day.findUnique({
      where: { dayNumber: dayNum },
      include: {
        topics: {
          orderBy: { orderIndex: "asc" },
          include: {
            subtopics: {
              orderBy: { orderIndex: "asc" },
              select: {
                id: true,
                title: true,
                description: true,
                emoji: true,
                estimatedMins: true,
                orderIndex: true,
                // Count practice and test questions
                _count: {
                  select: {
                    practiceQs: true,
                    testQs: true,
                    vocabulary: true,
                  },
                },
              },
            },
            _count: {
              select: { subtopics: true },
            },
          },
        },
        // Vocabulary count for this day
        _count: {
          select: { vocabulary: true },
        },
      },
    });

    if (!day) {
      return NextResponse.json(
        { error: `Day ${dayNum} not found in database` },
        { status: 404 }
      );
    }

    // Get user's progress on this day
    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    let dayProgress = null;
    let subtopicProgressMap: Record<string, unknown> = {};

    if (user) {
      dayProgress = await db.dayProgress.findUnique({
        where: {
          userId_dayId: {
            userId: user.id,
            dayId: day.id,
          },
        },
        include: {
          subtopicProgress: true,
        },
      });

      if (dayProgress?.subtopicProgress) {
        // Build a map: subtopicId → progress object
        for (const sp of dayProgress.subtopicProgress) {
          subtopicProgressMap[sp.subtopicId] = sp;
        }
      }
    }

    return NextResponse.json({
      data: {
        day,
        dayProgress,
        subtopicProgressMap,
      },
    });
  } catch (error) {
    console.error(`[API GET /days/${params.dayNumber}] Error:`, error);
    return NextResponse.json(
      { error: "Failed to fetch day data" },
      { status: 500 }
    );
  }
}
