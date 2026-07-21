// ============================================================
// GET /api/vocabulary - Returns vocabulary words
// Supports: ?dayId, ?dayNumber, ?subtopicId, ?search, ?limit
// Returns words unique to each day (no duplicates across days)
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/safe-auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const dayId = searchParams.get("dayId");
    const dayNumber = searchParams.get("dayNumber");
    const subtopicId = searchParams.get("subtopicId");
    const search = searchParams.get("search");
    const difficulty = searchParams.get("difficulty"); // BEGINNER, INTERMEDIATE, ADVANCED
    const partOfSpeech = searchParams.get("partOfSpeech"); // noun, verb, etc.
    // Accept both "limit" and "pageSize" params from clients
    const limit = parseInt(
      searchParams.get("limit") || searchParams.get("pageSize") || "200"
    );
    const page = parseInt(searchParams.get("page") || "1");
    const skip = (page - 1) * limit;

    // ─── Day vocabulary (200 words per day from DayVocabulary) ───────────────
    if (dayId || dayNumber) {
      let resolvedDayId = dayId;

      if (!resolvedDayId && dayNumber) {
        const day = await db.day.findUnique({
          where: { dayNumber: parseInt(dayNumber) },
        });
        if (!day) {
          return NextResponse.json({ error: "Day not found" }, { status: 404 });
        }
        resolvedDayId = day.id;
      }

      const where: Record<string, unknown> = { dayId: resolvedDayId! };
      if (search) {
        where.OR = [
          { word: { contains: search } },
          { meaning: { contains: search } },
          { hindiMeaning: { contains: search } },
        ];
      }

      const [words, total] = await Promise.all([
        db.dayVocabulary.findMany({
          where,
          orderBy: { word: "asc" },
          take: limit,
          skip,
        }),
        db.dayVocabulary.count({ where }),
      ]);

      return NextResponse.json({
        data: words,
        meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
      });
    }

    // ─── Subtopic vocabulary ─────────────────────────────────────────────────
    if (subtopicId) {
      const words = await db.subtopicVocabulary.findMany({
        where: {
          subtopicId,
          ...(search
            ? {
                OR: [
                  { word: { contains: search } },
                  { meaning: { contains: search } },
                ],
              }
            : {}),
        },
        orderBy: { word: "asc" },
        take: limit,
        skip,
      });

      return NextResponse.json({ data: words });
    }

    // ─── All vocabulary (for vocabulary page) ────────────────────────────────
    // Build compound where clause for all active filters
    const allWhere: Record<string, unknown> = {};

    if (search) {
      allWhere.OR = [
        { word: { contains: search } },
        { meaning: { contains: search } },
        { hindiMeaning: { contains: search } },
      ];
    }
    if (difficulty) {
      allWhere.difficulty = difficulty;
    }
    if (partOfSpeech) {
      allWhere.partOfSpeech = partOfSpeech;
    }

    const [words, total] = await Promise.all([
      db.dayVocabulary.findMany({
        where: allWhere,
        orderBy: [{ dayId: "asc" }, { word: "asc" }],
        take: limit,
        skip,
        include: {
          day: {
            select: { dayNumber: true, title: true },
          },
        },
      }),
      db.dayVocabulary.count({ where: allWhere }),
    ]);

    return NextResponse.json({
      data: words,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("[API GET /vocabulary] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch vocabulary" },
      { status: 500 }
    );
  }
}
