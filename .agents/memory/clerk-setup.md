---
name: Clerk Auth Setup
description: Auth config, protected-route behavior, and correct env var names for this project
---

## Protected Routes
`lib/safe-auth.ts` returns no user when `CLERK_SECRET_KEY` is missing or invalid.
The `(main)` layout redirects unauthenticated visitors to `/sign-in`; the seeded
dev user is for database tooling only and is not an authentication bypass.

## Correct Clerk Env Vars (use these, NOT the deprecated ones)
```
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
```

**Do NOT use:** `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` / `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` — these are deprecated and cause browser console warnings.

## Sign-In / Sign-Up Component Props
Use `fallbackRedirectUrl` and `forceRedirectUrl`, NOT the deprecated `afterSignInUrl` / `afterSignUpUrl`.

**Why:** Clerk v5+ deprecated the old props. Using old ones causes console warnings on every page load.
