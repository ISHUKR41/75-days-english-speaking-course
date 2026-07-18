// ============================================================
// GET /api/vocabulary - Returns vocabulary for a day (?dayId=xxx)
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dayId = searchParams.get("dayId");
    const dayNumber = searchParams.get("dayNumber");
    const subtopicId = searchParams.get("subtopicId");
    const search = searchParams.get("search") || "";
    const difficulty = searchParams.get("difficulty");
    const partOfSpeech = searchParams.get("partOfSpeech");
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "50");
    const skip = (page - 1) * pageSize;

    // If subtopicId is provided, fetch subtopic vocabulary
    if (subtopicId) {
      const where: Record<string, unknown> = { subtopicId };
      if (search) {
        where.OR = [
          { word: { contains: search } },
          { meaning: { contains: search } },
        ];
      }
      if (difficulty) where.difficulty = difficulty;
      if (partOfSpeech) where.partOfSpeech = partOfSpeech;

      const [vocab, total] = await db.$transaction([
        db.subtopicVocabulary.findMany({
          where,
          skip,
          take: pageSize,
          orderBy: { word: "asc" },
        }),
        db.subtopicVocabulary.count({ where }),
      ]);

      return NextResponse.json({ data: vocab, total, page, pageSize });
    }

    // Resolve dayId from dayNumber if needed
    let resolvedDayId = dayId;
    if (!resolvedDayId && dayNumber) {
      const day = await db.day.findUnique({
        where: { dayNumber: parseInt(dayNumber) },
        select: { id: true },
      });
      resolvedDayId = day?.id || null;
    }

    const where: Record<string, unknown> = {};
    if (resolvedDayId) where.dayId = resolvedDayId;
    if (search) {
      where.OR = [
        { word: { contains: search } },
        { meaning: { contains: search } },
        { hindiMeaning: { contains: search } },
      ];
    }
    if (difficulty) where.difficulty = difficulty;
    if (partOfSpeech) where.partOfSpeech = partOfSpeech;

    const [vocab, total] = await db.$transaction([
      db.dayVocabulary.findMany({
        where,
        skip,
        take: pageSize,
        include: {
          day: { select: { dayNumber: true, title: true } },
        },
        orderBy: [{ day: { dayNumber: "asc" } }, { word: "asc" }],
      }),
      db.dayVocabulary.count({ where }),
    ]);

    return NextResponse.json({ data: vocab, total, page, pageSize });
  } catch (error) {
    console.error("[API GET /vocabulary] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch vocabulary" },
      { status: 500 }
    );
  }
}
