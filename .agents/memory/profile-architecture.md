---
name: Profile page architecture
description: Custom profile page replacing Clerk's <UserProfile/> which crashes in dev passthrough mode
---

# Profile Page Architecture

## Rule
Never use Clerk's `<UserProfile/>` component in this app. It requires a real Clerk session and crashes when using the dev passthrough (`safe-auth.ts`).

**Why:** The app uses `safe-auth.ts` for dev passthrough which returns a hardcoded `dev_user_75days_english` clerkId. Clerk's `<UserProfile/>` tries to render with a real Clerk auth context, fails, and throws.

**How to apply:** Always use the custom `ProfileClient` component at `components/profile/profile-client.tsx`. It:
- Accepts `profileData` fetched server-side from the DB via `getUserProfile(clerkId)` 
- Renders user stats, badges, level progress, recent activity from DB data
- Gracefully handles null `profileData` with fallback default values
- Works with both dev passthrough and real Clerk auth

## Level XP Thresholds
```
Level 1: 0–300 XP
Level 2: 300–700 XP
Level 3: 700–1200 XP
Level 4: 1200–1800 XP
Level 5: 1800–2500 XP
```
These are defined in `levelThresholds` inside `LevelProgress` component.
