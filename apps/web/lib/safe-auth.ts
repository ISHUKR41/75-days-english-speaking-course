// ============================================================
// Safe Auth - Graceful wrapper around Clerk's auth().
// Protected routes always require a real Clerk session.
// Missing or invalid configuration never grants access to a seeded user.
// ============================================================

// ─── Check if Clerk secret key is properly configured ────────
// A real Clerk key starts with sk_test_ or sk_live_ and is 80+ chars.
const CLERK_SECRET = process.env.CLERK_SECRET_KEY ?? "";

// True only when a real, non-placeholder Clerk secret key is present.
// Export so middleware and other modules can branch on this.
export const IS_CLERK_CONFIGURED =
  (CLERK_SECRET.startsWith("sk_test_") ||
    CLERK_SECRET.startsWith("sk_live_")) &&
  CLERK_SECRET.length > 40 &&               // real keys are ~80+ chars
  !CLERK_SECRET.includes("placeholder") &&  // not our placeholder string
  !CLERK_SECRET.includes("xxxxxxxxxxx") &&  // not the example placeholder
  !CLERK_SECRET.includes("REPLACE") &&      // not the .env.example value
  !CLERK_SECRET.includes("YOUR_SECRET") &&  // not a template variable
  !CLERK_SECRET.includes("YOUR_KEY");       // not a template variable

// ─── Safe auth function ──────────────────────────────────────
// Returns { userId } safely — never throws even if Clerk fails.
// When Clerk is NOT configured, returns null so protected routes redirect.
export async function safeAuth(): Promise<{
  userId: string | null;
  sessionId?: string | null;
}> {
  // ── Configuration guard ────────────────────────────────────
  // The seeded database user is for database tooling only, never auth.
  if (!IS_CLERK_CONFIGURED) {
    return { userId: null, sessionId: null };
  }

  // ── Production mode: use real Clerk auth ───────────────────
  try {
    // Dynamic import prevents crash when key is invalid at module level.
    const { auth } = await import("@clerk/nextjs/server");
    const result = await auth();
    return result;
  } catch (error) {
    // If Clerk auth fails for any reason, log and fall through to dev user.
    console.error("[safe-auth] Clerk auth failed:", error);
    // Do NOT fall back to dev user in production — surface the failure.
    return { userId: null, sessionId: null };
  }
}

// ─── Named aliases so existing imports work unchanged ─────────
// Files import { auth } from "@/lib/safe-auth" and call it the same way.
export const auth = safeAuth;

// ─── Safe currentUser function ────────────────────────────────
// Returns the current user's profile safely.
// Returns null when Clerk is unavailable; never fabricates a profile.
export async function safeCurrentUser() {
  // ── Configuration guard ──────────────────────────────────────
  if (!IS_CLERK_CONFIGURED) {
    return null;
  }

  // ── Production mode: use real Clerk currentUser ────────────
  try {
    const { currentUser } = await import("@clerk/nextjs/server");
    return currentUser();
  } catch {
    return null;
  }
}
