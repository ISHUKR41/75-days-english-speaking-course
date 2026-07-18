// ============================================================
// GET /api/subtopics/[subtopicId] - Full subtopic data
// Returns: subtopic + content + vocabulary + practice questions
// Used by the lesson page to load everything at once
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// Dynamic rendering required for auth
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { subtopicId: string } }
) {
  try {
    // Authenticate the request
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { subtopicId } = params;
    if (!subtopicId) {
      return NextResponse.json(
        { error: "subtopicId is required" },
        { status: 400 }
      );
    }

    // Fetch full subtopic data with all relations
    const subtopic = await db.subtopic.findUnique({
      where: { id: subtopicId },
      include: {
        // Rich lesson content
        content: true,

        // Topic and day for breadcrumbs
        topic: {
          include: {
            day: {
              select: {
                id: true,
                dayNumber: true,
                title: true,
                emoji: true,
              },
            },
          },
        },

        // Vocabulary words (up to 200)
        vocabulary: {
          orderBy: { createdAt: "asc" },
          take: 200,
        },

        // Practice questions (80-100 per subtopic)
        practiceQs: {
          orderBy: { orderIndex: "asc" },
          take: 100,
        },

        // Test questions (50 per subtopic)
        testQs: {
          orderBy: { orderIndex: "asc" },
          take: 50,
        },

        // Verb list for this subtopic
        verbs: {
          orderBy: { createdAt: "asc" },
          take: 100,
        },
      },
    });

    if (!subtopic) {
      return NextResponse.json(
        { error: "Subtopic not found" },
        { status: 404 }
      );
    }

    // Get user's progress on this subtopic
    const user = await db.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    let userProgress = null;
    if (user) {
      userProgress = await db.subtopicProgress.findUnique({
        where: {
          userId_subtopicId: {
            userId: user.id,
            subtopicId,
          },
        },
      });
    }

    // Return combined data
    return NextResponse.json({
      data: {
        subtopic,
        userProgress,
      },
    });
  } catch (error) {
    console.error("[API GET /subtopics/:id] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subtopic" },
      { status: 500 }
    );
  }
}
