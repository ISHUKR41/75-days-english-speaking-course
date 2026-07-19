// ============================================================
// User API - GET and POST/UPSERT user in database
// Uses safe-auth for Clerk compatibility in dev mode
// GET: Returns current user data
// POST: Creates or updates user from Clerk webhook data
// ============================================================

import { NextResponse } from "next/server";
import { auth, safeCurrentUser } from "@/lib/safe-auth";
import { db } from "@/lib/db";

// ─── GET /api/user ─────────────────────────────────────────────
// Returns the current authenticated user's data from our DB
export async function GET() {
  try {
    // Get the authenticated user ID (safe - works with/without Clerk)
    const { userId } = await auth();

    // If not authenticated, return null user
    if (!userId) {
      return NextResponse.json({ user: null });
    }

    // Find user in our database by their Clerk ID
    const user = await db.user.findUnique({
      where: { clerkId: userId },
      select: {
        // Only select fields we need to send to the client
        id: true,
        clerkId: true,
        email: true,
        firstName: true,
        lastName: true,
        imageUrl: true,
        username: true,
        currentDay: true,
        totalXp: true,
        totalCoins: true,
        level: true,
        streak: true,
        longestStreak: true,
        lastActiveAt: true,
        theme: true,
        language: true,
        soundEnabled: true,
        createdAt: true,
        // Count of badges earned
        _count: {
          select: {
            badges: true,
            progress: true,
          },
        },
      },
    });

    // Return null if user not found in DB yet
    if (!user) {
      return NextResponse.json({ user: null });
    }

    // Return user data with computed accuracy field
    return NextResponse.json({
      user: {
        ...user,
        accuracy: 0, // Computed from practice answers - placeholder
      },
    });
  } catch (error) {
    // Log error but return safe response
    console.error("[GET /api/user] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// ─── POST /api/user ────────────────────────────────────────────
// Creates or updates user in our database
// Called from Clerk webhook or after user signs in
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json().catch(() => ({}));

    // Get the authenticated user
    const { userId: clerkId } = await auth();

    // userId must match authenticated user for security
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Try to get user data from Clerk (safe wrapper)
    const clerkUser = await safeCurrentUser();

    // Build user data from body or Clerk data
    const email =
      body.email ||
      (clerkUser as any)?.emailAddresses?.[0]?.emailAddress ||
      `${clerkId}@unknown.com`;
    const firstName = body.firstName || (clerkUser as any)?.firstName || "";
    const lastName = body.lastName || (clerkUser as any)?.lastName || "";
    const imageUrl = body.imageUrl || (clerkUser as any)?.imageUrl || "";
    // Generate username from clerkId if not provided
    const username =
      body.username ||
      (clerkUser as any)?.username ||
      `user_${clerkId.slice(-8)}`;

    // Upsert user in database (create if not exists, update if exists)
    const user = await db.user.upsert({
      where: { clerkId },
      update: {
        // Only update these fields - preserve game progress
        email,
        firstName,
        lastName,
        imageUrl,
        username,
        // Update last active time
        lastActiveAt: new Date(),
      },
      create: {
        // Create new user with all required fields
        clerkId,
        email,
        firstName,
        lastName,
        imageUrl,
        username,
        // Start at Day 1 with 0 progress
        currentDay: 1,
        totalXp: 0,
        totalCoins: 0,
        level: 1,
        streak: 0,
        longestStreak: 0,
      },
    });

    // Return the upserted user
    return NextResponse.json({ user, created: !user });
  } catch (error) {
    // Log error but return safe response
    console.error("[POST /api/user] Error:", error);
    return NextResponse.json(
      { error: "Failed to create/update user" },
      { status: 500 }
    );
  }
}
