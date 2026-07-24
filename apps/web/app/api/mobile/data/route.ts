// ============================================================
// GET /api/mobile/data — Mobile app data endpoint
// Returns the full course structure + user state for mobile sync.
// Works with the mobile Vite proxy (vite.config.ts → port 5000).
// Designed to be fetched by the mobile React app.
// ============================================================

import { NextRequest, NextResponse } from "next/server"; // Next.js API types
import { auth } from "@/lib/safe-auth"; // Auth helper for protected mobile data
import { db } from "@/lib/db"; // Prisma database client
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config"; // Static course structure

// Force dynamic rendering so this route is never cached
export const dynamic = "force-dynamic";

// ─── GET handler ──────────────────────────────────────────────
// Returns course structure + authenticated user data for the mobile app
export async function GET(req: NextRequest) {
  try {
    // ── Authenticate the request ──────────────────────────────
    const { userId } = await auth(); // Get the authenticated Clerk user ID

    // ── Build the course structure from static config ─────────
    // We use static data so mobile gets the same structure as web
    const days = COURSE_DAYS_DATA.map((day) => ({
      dayNumber: day.dayNumber, // Day number (1–75)
      title: day.title, // Day title (e.g. "Basic of English")
      description: day.description ?? "", // Day description
      emoji: day.emoji ?? "📚", // Day emoji icon
      isRevision: day.isRevision ?? false, // True for revision days
      isMockTest: day.isMockTest ?? false, // True for mock test days
      topicsCount: day.topics.length, // Number of topics in this day
      subtopicsCount: day.topics.reduce( // Total subtopics across all topics
        (sum, t) => sum + t.subtopics.length, 0
      ),
      topics: day.topics.map((topic) => ({ // Full topic list
        id: topic.id, // Static topic ID (e.g. "d1-t1")
        title: topic.title, // Topic title
        emoji: topic.emoji, // Topic emoji
        color: topic.color, // Topic color class
        subtopics: topic.subtopics.map((sub) => ({ // Subtopic list
          id: sub.id, // Static subtopic ID (e.g. "d1-t1-s1")
          title: sub.title, // Subtopic title
          emoji: sub.emoji, // Subtopic emoji
          estimatedMins: sub.estimatedMins, // Estimated time in minutes
          practiceCount: 40, // Approx practice questions available
          testCount: 25, // Approx test questions available
        })),
      })),
    }));

    // ── Fetch user data from DB (if authenticated) ────────────
    let userData = null; // Will hold user info if found
    let completedSubtopics: string[] = []; // User's completed subtopic IDs
    let completedDays: number[] = []; // Day numbers the user has completed

    if (userId) {
      // Try to find the user in our database
      const user = await db.user.findUnique({
        where: { clerkId: userId }, // Match by Clerk user ID
        select: {
          id: true,
          clerkId: true,
          email: true,
          firstName: true,
          lastName: true,
          imageUrl: true,
          currentDay: true,
          totalXp: true,
          totalCoins: true,
          level: true,
          streak: true,
          longestStreak: true,
          lastActiveAt: true,
        },
      });

      if (user) {
        userData = user; // Store user data for response

        // Fetch all completed subtopics for this user
        const progressRecords = await db.subtopicProgress.findMany({
          where: {
            dayProgress: { userId: user.id }, // Filter by user
            status: "COMPLETED", // Only completed ones
          },
          select: { subtopicId: true, dayProgress: { select: { dayId: true } } },
        });

        // Collect completed subtopic IDs
        completedSubtopics = progressRecords.map((p) => p.subtopicId);

        // Fetch completed days from DayProgress
        const dayProgressRecords = await db.dayProgress.findMany({
          where: { userId: user.id, status: "COMPLETED" }, // Only completed days
          select: { dayId: true }, // Just the day ID
        });

        // Resolve day IDs to day numbers
        if (dayProgressRecords.length > 0) {
          const dayIds = dayProgressRecords.map((dp) => dp.dayId);
          const dbDays = await db.day.findMany({
            where: { id: { in: dayIds } }, // Find days by ID
            select: { dayNumber: true }, // Just need the number
          });
          completedDays = dbDays.map((d) => d.dayNumber); // Extract numbers
        }
      }
    }

    // ── Build and return the response ─────────────────────────
    return NextResponse.json({
      // Full 75-day course structure
      course: {
        totalDays: 75,
        days, // All 75 days with topics and subtopics
      },
      // Authenticated user's progress data (null if not logged in)
      user: userData
        ? {
            clerkId: userData.clerkId,
            firstName: userData.firstName ?? "Learner",
            lastName: userData.lastName ?? "",
            imageUrl: userData.imageUrl,
            currentDay: userData.currentDay,
            totalXp: userData.totalXp,
            totalCoins: userData.totalCoins,
            level: userData.level,
            streak: userData.streak,
            longestStreak: userData.longestStreak,
            lastActiveAt: userData.lastActiveAt,
            completedSubtopics, // All completed subtopic IDs
            completedDays, // All completed day numbers
            isAuthenticated: true, // Flag for mobile app
          }
        : null,
      // Meta information
      meta: {
        syncedAt: new Date().toISOString(), // When this was fetched
        version: "2.0", // API version for future compatibility
      },
    });
  } catch (err) {
    // Log and return error response
    console.error("[API/mobile/data] Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch mobile data" },
      { status: 500 }
    );
  }
}
