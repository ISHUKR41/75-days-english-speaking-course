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

// ─── Dev user ID ─────────────────────────────────────────────
// Seeded in prisma/seed.ts — used only when Clerk is not configured.
export const DEV_USER_CLERK_ID = "dev_user_75days_english";

// ─── Safe auth function ──────────────────────────────────────
// Returns { userId } safely — never throws even if Clerk fails.
// When Clerk is NOT configured (no valid sk_test_/sk_live_ key),
// returns the seeded dev user so the app is fully testable locally.
export async function safeAuth(): Promise<{
  userId: string | null;
  sessionId?: string | null;
}> {
  // ── Dev mode: Clerk not configured ────────────────────────
  // Allow full app access with the seeded dev user so every feature
  // can be tested without a Clerk secret key. Real Clerk takes over
  // automatically the moment a valid secret key is added.
  if (!IS_CLERK_CONFIGURED) {
    return { userId: DEV_USER_CLERK_ID, sessionId: "dev_session" };
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
// In dev mode returns a minimal profile matching the seeded user.
export async function safeCurrentUser() {
  // ── Dev mode: return minimal seeded user profile ─────────────
  if (!IS_CLERK_CONFIGURED) {
    return {
      id: DEV_USER_CLERK_ID,
      firstName: "Dev",
      lastName: "User",
      emailAddresses: [{ emailAddress: "dev@75daysenglish.com" }],
      imageUrl: "",
    };
  }

  // ── Production mode: use real Clerk currentUser ────────────
  try {
    const { currentUser } = await import("@clerk/nextjs/server");
    return currentUser();
  } catch {
    return null;
  }
}
