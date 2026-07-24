---
name: Dev Mode Auth
description: When CLERK_SECRET_KEY is absent, safeAuth() returns the seeded dev user so all pages render without Clerk configured.
---

# Dev Mode Auth Passthrough

## Rule
When `IS_CLERK_CONFIGURED` is `false` (no valid `sk_test_`/`sk_live_` CLERK_SECRET_KEY), `safeAuth()` returns `{ userId: DEV_USER_CLERK_ID, sessionId: "dev_session" }` instead of `null`. This makes every page in the app previewable without a Clerk account.

**Why:** The user could not provide a valid Clerk secret key. Returning `null` caused the MainLayout to redirect ALL users to `/sign-in` with no way to access any course page. The dev passthrough enables testing/preview while preserving real Clerk auth when the key is present.

**How to apply:**
- `apps/web/lib/safe-auth.ts` — the `safeAuth()` function has the branch
- `IS_DEV_MODE = !IS_CLERK_CONFIGURED` is exported; UI components can import it to show a "Dev Mode" banner
- `DEV_USER_CLERK_ID = "dev_user_75days_english"` matches the user seeded by `prisma/seed.ts`
- The DB user is always upserted in `dashboard/page.tsx` so a real DB record always exists for the dev user

**When Clerk key is added:** Remove nothing — the `IS_CLERK_CONFIGURED` check in `safe-auth.ts` automatically switches to real Clerk auth when a valid key is present.
