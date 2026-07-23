// ============================================================
// GET /api/health — Health check endpoint
// Returns app status, DB connectivity, and Clerk config state.
// Used by monitoring tools and the mobile app to confirm the
// web API is reachable before syncing data.
// No authentication required — this is a public endpoint.
// ============================================================

import { NextResponse } from "next/server";
import { db } from "@/lib/db";                      // Prisma DB client
import { IS_CLERK_CONFIGURED } from "@/lib/safe-auth"; // Clerk config flag

// Force dynamic so this is never cached — we want fresh status every time
export const dynamic = "force-dynamic";

// ─── GET /api/health ──────────────────────────────────────────
// Returns: { status, db, clerk, timestamp, version }
export async function GET() {
  // ── Check database connectivity ────────────────────────────
  // Run a simple count query to verify the DB is reachable
  let dbStatus: "ok" | "error" = "error";
  let dbUserCount = 0;

  try {
    // Count total users — lightweight query that confirms DB is up
    dbUserCount = await db.user.count();
    dbStatus = "ok"; // DB responded without error
  } catch (err) {
    // DB is down or unreachable — log and continue
    console.error("[/api/health] DB check failed:", err);
  }

  // ── Build response payload ─────────────────────────────────
  const payload = {
    status: dbStatus === "ok" ? "healthy" : "degraded", // Overall app health
    db: {
      status: dbStatus,     // "ok" or "error"
      userCount: dbUserCount, // Number of users in DB (0 if not seeded)
    },
    clerk: {
      configured: IS_CLERK_CONFIGURED, // true = real auth; false = dev passthrough
      mode: IS_CLERK_CONFIGURED ? "production" : "development", // auth mode label
    },
    timestamp: new Date().toISOString(), // Current server time
    version: "1.0.0",                    // App version — bump on major releases
    app: "75 Days Hard English Course",  // App name for easy identification
  };

  // ── Return response with appropriate HTTP status ───────────
  // 200 when healthy, 503 when DB is down (mobile can retry)
  return NextResponse.json(payload, {
    status: dbStatus === "ok" ? 200 : 503,
    headers: {
      // Allow mobile app to call this cross-origin
      "Access-Control-Allow-Origin": "*",
      // Clients should not cache this response — always fetch fresh
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
