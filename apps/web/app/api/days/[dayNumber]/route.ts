// ============================================================
// GET /api/days/[dayNumber] - Returns single day with topics+subtopics
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: { dayNumber: string } }
) {
  try {
    const dayNumber = parseInt(params.dayNumber);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 75) {
      return NextResponse.json({ error: "Invalid day number" }, { status: 400 });
    }

    const day = await db.day.findUnique({
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
        _count: {
          select: { topics: true, vocabulary: true },
        },
      },
    });

    if (!day) {
      return NextResponse.json({ error: "Day not found" }, { status: 404 });
    }

    return NextResponse.json({ data: day });
  } catch (error) {
    console.error("[API /days/[dayNumber]] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch day data" },
      { status: 500 }
    );
  }
}
