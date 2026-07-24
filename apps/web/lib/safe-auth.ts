// ============================================================
// Safe Auth - Graceful wrapper around Clerk's auth().
// ── When CLERK_SECRET_KEY is valid → real Clerk auth
// ── When key is missing/invalid → dev mode with seeded user
//    (lets you preview all pages without a Clerk account)
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
// This user is always seeded into the database by prisma/seed.ts.
// Used only when CLERK_SECRET_KEY is not configured.
export const DEV_USER_CLERK_ID = "dev_user_75days_english";

// ─── Dev mode flag exported for UI banners ────────────────────
// Components can import this to show "Dev Mode" notices.
export const IS_DEV_MODE = !IS_CLERK_CONFIGURED;

// ─── Safe auth function ──────────────────────────────────────
// Returns { userId } safely — never throws even if Clerk fails.
// When Clerk is NOT configured, returns the seeded dev user so
// every page in the app is previewable without a Clerk account.
export async function safeAuth(): Promise<{
  userId: string | null;
  sessionId?: string | null;
}> {
  // ── Dev mode: Clerk secret is absent or invalid ────────────
  // Return the seeded dev user so all pages render immediately.
  // The user still sees a "Dev Mode" banner until they add the key.
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
// In dev mode returns a mock profile matching the seeded dev user.
export async function safeCurrentUser() {
  // ── Dev mode: return a mock user matching the seeded record ──
  if (!IS_CLERK_CONFIGURED) {
    return {
      id: DEV_USER_CLERK_ID,
      firstName: "Dev",
      lastName: "Student",
      emailAddresses: [{ emailAddress: "dev@75daysenglish.com" }],
      imageUrl: null,
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
