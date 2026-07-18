// ============================================================
// GET /api/score  - Get user's score history + stats
// POST /api/score - Record a new score event (XP, coins)
// Used by: dashboard chart, progress page, gamification
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

// ─── GET: Score history ───────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const period = searchParams.get("period") || "week"; // week, month, all
    const limit = parseInt(searchParams.get("limit") || "100");

    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Calculate date range
    const since = new Date();
    if (period === "week") since.setDate(since.getDate() - 7);
    else if (period === "month") since.setMonth(since.getMonth() - 1);
    else since.setFullYear(2020); // "all" - from beginning

    const scores = await db.score.findMany({
      where: {
        userId: user.id,
        createdAt: { gte: since },
      },
      orderBy: { createdAt: "asc" },
      take: limit,
      select: {
        activity: true,
        points: true,
        xp: true,
        coins: true,
        createdAt: true,
      },
    });

    // Aggregate by day for chart
    const dailyMap: Record<string, { xp: number; points: number; coins: number }> = {};
    for (const score of scores) {
      const dateKey = score.createdAt.toISOString().split("T")[0];
      if (!dailyMap[dateKey]) {
        dailyMap[dateKey] = { xp: 0, points: 0, coins: 0 };
      }
      dailyMap[dateKey].xp += score.xp;
      dailyMap[dateKey].points += score.points;
      dailyMap[dateKey].coins += score.coins;
    }

    const dailyData = Object.entries(dailyMap).map(([date, data]) => ({
      date,
      ...data,
    }));

    const totalXp = scores.reduce((s, sc) => s + sc.xp, 0);
    const totalPoints = scores.reduce((s, sc) => s + sc.points, 0);

    return NextResponse.json({
      data: {
        scores,
        dailyData,
        summary: { totalXp, totalPoints, period },
      },
    });
  } catch (error) {
    console.error("[API GET /score] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch scores" },
      { status: 500 }
    );
  }
}

// ─── Schema ───────────────────────────────────────────────────────────────────
const scoreSchema = z.object({
  activity: z.string().min(1),
  points: z.number().min(0),
  xp: z.number().min(0).default(0),
  coins: z.number().min(0).default(0),
  dayId: z.string().optional(),
  subtopicId: z.string().optional(),
});

// ─── POST: Record score ───────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = scoreSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true, totalXp: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create score record
    const score = await db.score.create({
      data: { userId: user.id, ...parsed.data },
    });

    // Update user totals
    await db.user.update({
      where: { id: user.id },
      data: {
        totalXp: { increment: parsed.data.xp },
        totalCoins: { increment: parsed.data.coins },
        level: Math.floor((user.totalXp + parsed.data.xp) / 1000) + 1,
        lastActiveAt: new Date(),
      },
    });

    return NextResponse.json({ data: score });
  } catch (error) {
    console.error("[API POST /score] Error:", error);
    return NextResponse.json(
      { error: "Failed to record score" },
      { status: 500 }
    );
  }
}
