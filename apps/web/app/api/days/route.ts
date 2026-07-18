// ============================================================
// GET /api/days - Returns all 75 days from DB
// ============================================================

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const days = await db.day.findMany({
      orderBy: { dayNumber: "asc" },
      include: {
        _count: {
          select: { topics: true, vocabulary: true },
        },
      },
    });

    return NextResponse.json({ data: days });
  } catch (error) {
    console.error("[API /days] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch days" },
      { status: 500 }
    );
  }
}
