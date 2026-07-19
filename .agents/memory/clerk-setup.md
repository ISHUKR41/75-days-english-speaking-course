---
name: Clerk Auth Setup
description: Auth config, dev passthrough, and correct env var names for this project
---

## Dev Passthrough
`lib/safe-auth.ts` returns `dev_user_75days_english` when `CLERK_SECRET_KEY` is placeholder.
This lets the app run without real Clerk keys — all pages work in dev mode.

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
