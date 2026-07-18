// ============================================================
// GET+POST /api/progress - Get/update user progress
// Requires Clerk auth
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// GET /api/progress - get all progress for authenticated user
export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({ where: { clerkId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const progress = await db.dayProgress.findMany({
      where: { userId: user.id },
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

    return NextResponse.json({ data: progress });
  } catch (error) {
    console.error("[API GET /progress] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}

// POST /api/progress - update or create day progress
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({ where: { clerkId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await req.json();
    const { dayId, status, practiceScore, testScore, xpEarned } = body;

    if (!dayId) {
      return NextResponse.json({ error: "dayId is required" }, { status: 400 });
    }

    // Upsert the day progress
    const progress = await db.dayProgress.upsert({
      where: { userId_dayId: { userId: user.id, dayId } },
      update: {
        ...(status && { status }),
        ...(practiceScore !== undefined && { practiceScore }),
        ...(testScore !== undefined && { testScore }),
        ...(xpEarned !== undefined && {
          totalXpEarned: { increment: xpEarned },
        }),
        ...(status === "COMPLETED" && { completedAt: new Date() }),
        ...(status === "IN_PROGRESS" && { startedAt: new Date() }),
      },
      create: {
        userId: user.id,
        dayId,
        status: status || "IN_PROGRESS",
        startedAt: new Date(),
        practiceScore: practiceScore || 0,
        testScore: testScore || 0,
        totalXpEarned: xpEarned || 0,
      },
    });

    return NextResponse.json({ data: progress });
  } catch (error) {
    console.error("[API POST /progress] Error:", error);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}
