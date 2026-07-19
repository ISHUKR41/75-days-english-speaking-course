// ============================================================
// GET /api/topics - Returns topics for a specific day
// Query: ?dayId=xxx  OR  ?dayNumber=1
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/safe-auth";
import { db } from "@/lib/db";

// Force dynamic rendering (auth check)
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // Verify user is authenticated
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const dayId = searchParams.get("dayId");
    const dayNumber = searchParams.get("dayNumber");

    // Build the where clause dynamically
    let whereClause: Record<string, unknown> = {};

    if (dayId) {
      // Filter by direct dayId
      whereClause = { dayId };
    } else if (dayNumber) {
      // Filter by dayNumber — find the day first
      const day = await db.day.findUnique({
        where: { dayNumber: parseInt(dayNumber) },
      });
      if (!day) {
        return NextResponse.json({ error: "Day not found" }, { status: 404 });
      }
      whereClause = { dayId: day.id };
    } else {
      // No filter — return all topics (sorted by order)
      whereClause = {};
    }

    // Fetch topics with subtopics nested
    const topics = await db.topic.findMany({
      where: whereClause,
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
          },
        },
        // Count questions per topic
        _count: {
          select: { subtopics: true },
        },
      },
    });

    return NextResponse.json({ data: topics });
  } catch (error) {
    console.error("[API GET /topics] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch topics" },
      { status: 500 }
    );
  }
}
