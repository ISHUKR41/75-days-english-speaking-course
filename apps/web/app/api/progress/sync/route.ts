// ============================================================
// API Route - /api/progress/sync
// Receives offline sync actions queued by web or mobile clients
// and updates the database records (subtopic progress, day progress,
// XP, scores, streak, practice answers).
// ============================================================

// Import Next.js server response utilities
import { NextResponse } from "next/server";
// Import safe authentication helper
import { auth } from "@/lib/safe-auth";
// Import database client singleton
import { db } from "@/lib/db";

// POST handler for offline queue synchronization
export async function POST(req: Request) {
  try {
    // Authenticate request user
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse JSON body containing the sync action
    const body = await req.json();
    const { type, payload } = body;

    // Retrieve database User record corresponding to current Clerk user
    const user = await db.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Handle different action types
    switch (type) {
      case "COMPLETE_SUBTOPIC": {
        const { subtopicId, dayNumber, score, xpEarned } = payload;

        // Find or create Day record in DB
        const day = await db.day.findUnique({ where: { dayNumber } });
        if (day) {
          // Upsert DayProgress
          const dayProgress = await db.dayProgress.upsert({
            where: {
              userId_dayId: { userId: user.id, dayId: day.id },
            },
            update: {
              status: "IN_PROGRESS",
              totalXpEarned: { increment: xpEarned || 50 },
            },
            create: {
              userId: user.id,
              dayId: day.id,
              status: "IN_PROGRESS",
              totalXpEarned: xpEarned || 50,
            },
          });

          // Upsert SubtopicProgress
          await db.subtopicProgress.upsert({
            where: {
              userId_subtopicId: { userId: user.id, subtopicId },
            },
            update: {
              status: "COMPLETED",
              completedAt: new Date(),
              xpEarned: xpEarned || 50,
              testScore: score || 100,
            },
            create: {
              userId: user.id,
              subtopicId,
              dayProgressId: dayProgress.id,
              status: "COMPLETED",
              completedAt: new Date(),
              xpEarned: xpEarned || 50,
              testScore: score || 100,
            },
          });

          // Increment user total XP and check day progression
          await db.user.update({
            where: { id: user.id },
            data: {
              totalXp: { increment: xpEarned || 50 },
              lastActiveAt: new Date(),
            },
          });
        }
        break;
      }

      case "SAVE_PRACTICE_ANSWER": {
        const { questionId, userAnswer, isCorrect, pointsEarned, inputMethod } = payload;

        // Record practice answer in DB
        await db.practiceAnswer.create({
          data: {
            userId: user.id,
            questionId,
            userAnswer,
            isCorrect,
            pointsEarned: pointsEarned || 0,
            inputMethod: inputMethod || "TYPED",
          },
        });
        break;
      }

      case "UPDATE_STREAK": {
        const { streak } = payload;
        await db.user.update({
          where: { id: user.id },
          data: {
            streak: streak || user.streak + 1,
            lastActiveAt: new Date(),
          },
        });
        break;
      }

      default:
        console.log(`[SyncAPI] Unknown action type: ${type}`);
    }

    // Return success response
    return NextResponse.json({ success: true, timestamp: Date.now() });
  } catch (error) {
    console.error("[SyncAPI] Error processing sync action:", error);
    return NextResponse.json(
      { error: "Sync failed", message: (error as Error).message },
      { status: 500 }
    );
  }
}
