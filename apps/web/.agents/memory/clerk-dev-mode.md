---
name: Clerk Dev Mode Auth
description: How safe-auth works when Clerk secret key is missing or invalid
---

# Clerk Dev Mode Auth

## The Rule
All server-side `auth()` calls must use `safeAuth()` from `@/lib/safe-auth` — NOT the raw `auth` from `@clerk/nextjs/server`. This prevents crashes when the Clerk secret key is a placeholder.

**Why:** The Clerk secret key provided was not a valid `sk_test_...` format key. Without a valid key, Clerk's `auth()` throws at the middleware level and on every server component. The safe wrapper detects this and returns a dev user ID instead.

**How to apply:**
- `lib/safe-auth.ts` exports `auth` (alias for `safeAuth`) and `safeCurrentUser` (alias for `currentUser`)
- `middleware.ts` exports a passthrough `devMiddleware` when `IS_CLERK_CONFIGURED` is false
- Dev user in DB: clerkId = `dev_user_75days_english`, email = `dev@75daysenglish.com`
- `IS_CLERK_CONFIGURED` checks: key starts with `sk_test_` or `sk_live_`, length > 40, no "placeholder"/"xxxxxxxxxxx"
- When user adds a real Clerk key, everything switches automatically — no code changes needed

## Bulk import replacement done
All 23 files that imported from `@clerk/nextjs/server` were bulk-replaced with `@/lib/safe-auth` via sed. The `UserButton` component was also replaced with a simple avatar link since it requires Clerk.
