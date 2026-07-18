// ============================================================
// GET+POST /api/user - Get/create user in DB from Clerk data
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// GET /api/user - get current user from DB
export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        _count: {
          select: {
            progress: true,
            badges: true,
            scores: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ data: user });
  } catch (error) {
    console.error("[API GET /user] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// POST /api/user - create or update user from Clerk data
export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get data from body or Clerk
    let body: Record<string, string> = {};
    try {
      body = await req.json();
    } catch {
      // No body is fine, we'll use Clerk data
    }

    // Fetch from Clerk if not provided
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return NextResponse.json(
        { error: "Clerk user not found" },
        { status: 404 }
      );
    }

    const email =
      body.email ||
      clerkUser.emailAddresses[0]?.emailAddress ||
      `${clerkId}@unknown.com`;
    const firstName = body.firstName || clerkUser.firstName || "";
    const lastName = body.lastName || clerkUser.lastName || "";
    const imageUrl = body.imageUrl || clerkUser.imageUrl || "";
    const username =
      body.username || clerkUser.username || `user_${clerkId.slice(-8)}`;

    const user = await db.user.upsert({
      where: { clerkId },
      update: {
        email,
        firstName,
        lastName,
        imageUrl,
        username,
        updatedAt: new Date(),
      },
      create: {
        clerkId,
        email,
        firstName,
        lastName,
        imageUrl,
        username,
      },
    });

    return NextResponse.json({ data: user });
  } catch (error) {
    console.error("[API POST /user] Error:", error);
    return NextResponse.json(
      { error: "Failed to create/update user" },
      { status: 500 }
    );
  }
}
