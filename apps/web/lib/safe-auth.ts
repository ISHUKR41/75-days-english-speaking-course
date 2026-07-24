// ============================================================
// Safe Auth - Graceful wrapper around Clerk's auth().
// A missing Clerk secret is treated as unauthenticated. This is
// intentional: course content must never be available without sign-in.
// ============================================================

// ─── Check if Clerk secret key is properly configured ────────
// A real Clerk key starts with sk_test_ or sk_live_ and is 80+ chars
const CLERK_SECRET = process.env.CLERK_SECRET_KEY ?? "";

// Export this so other parts of the app can check if auth is real
// A real Clerk secret key: starts with sk_test_ or sk_live_, is 80+ chars,
// and does NOT contain any placeholder string we might accidentally set.
export const IS_CLERK_CONFIGURED =
  (CLERK_SECRET.startsWith("sk_test_") ||
    CLERK_SECRET.startsWith("sk_live_")) &&
  CLERK_SECRET.length > 40 &&               // real keys are ~80+ chars
  !CLERK_SECRET.includes("placeholder") &&  // not our placeholder string
  !CLERK_SECRET.includes("xxxxxxxxxxx") &&  // not the example placeholder
  !CLERK_SECRET.includes("REPLACE") &&      // not the .env.example value
  !CLERK_SECRET.includes("YOUR_SECRET") &&  // not a template variable
  !CLERK_SECRET.includes("YOUR_KEY");       // not a template variable

// ─── Seeded user ID retained for database seed/demo tooling ───
// It is not used as an authentication bypass.
export const DEV_USER_CLERK_ID = "dev_user_75days_english";

// ─── Safe auth function ──────────────────────────────────────
// Returns { userId } safely — never throws even if Clerk fails
export async function safeAuth(): Promise<{
  userId: string | null;
  sessionId?: string | null;
}> {
  // Without a server-side Clerk secret there is no trustworthy
  // session to identify, so protected pages must redirect to sign-in.
  if (!IS_CLERK_CONFIGURED) {
    return { userId: null, sessionId: null };
  }

  // When Clerk IS configured, use real auth
  try {
    // Dynamic import to avoid crash when key is invalid at module level
    const { auth } = await import("@clerk/nextjs/server");
    const result = await auth();
    return result;
  } catch (error) {
    // If Clerk auth fails for any reason, log and return null
    console.error("[safe-auth] Clerk auth failed:", error);
    return { userId: null, sessionId: null };
  }
}

// ─── Named aliases so existing imports work unchanged ─────────
// Files can import { auth } from "@/lib/safe-auth" and keep the same call
export const auth = safeAuth;

// ─── Safe currentUser function ────────────────────────────────
// Returns current user info safely
export async function safeCurrentUser() {
  // Without Clerk there is no authenticated profile to return.
  if (!IS_CLERK_CONFIGURED) {
    return null;
  }

  // When Clerk IS configured, use real currentUser
  try {
    const { currentUser } = await import("@clerk/nextjs/server");
    return currentUser();
  } catch {
    return null;
  }
}
