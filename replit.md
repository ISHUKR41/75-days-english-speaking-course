# 75 Days Hard English Course

## Project Overview

**The World's Most Advanced English Learning Platform** — a gamified full-stack web + mobile app that takes students from absolute beginner (A0) to fluent professional English speaker in 75 days.

### What it does
- 75-day structured English course covering grammar, vocabulary, speaking, writing, and listening
- Gamified learning with XP, coins, levels, badges, streaks, and leaderboard
- Practice questions with type OR speak-to-answer (voice input)
- Dashboard with progress graphs, heatmaps, and analytics
- Vocabulary bank with IPA pronunciation, Hindi meanings, and example sentences
- Speaking Lab with shadowing, reading aloud, and free talk
- Writing Lab, Revision, Mock Tests, and more

### Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Auth**: Clerk (dev passthrough when no key is set)
- **Database**: SQLite (dev) via Prisma ORM
- **Styling**: Tailwind CSS + shadcn/ui + Framer Motion
- **State**: Zustand + React Query (TanStack Query)
- **Charts**: Recharts
- **Monorepo**: Turborepo (`apps/web` + `apps/mobile`)

## How to Run

The app runs via the **"Start application"** workflow which executes:
```
cd apps/web && DATABASE_URL='file:./prisma/dev.db' npm run dev
```

The app serves on **port 5000**.

## Database Setup

```bash
cd apps/web

# Generate Prisma client
DATABASE_URL='file:./prisma/dev.db' npx prisma generate

# Push schema to SQLite
DATABASE_URL='file:./prisma/dev.db' npx prisma db push

# Seed all 75 days of content
DATABASE_URL='file:./prisma/dev.db' npx tsx prisma/seed.ts
```

## Key Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | SQLite path (set inline in workflow) | Yes |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key for auth UI | For full auth |
| `CLERK_SECRET_KEY` | Clerk secret key (must start with `sk_test_` or `sk_live_`) | For full auth |
| `OPENAI_API_KEY` | AI speech analysis & question generation | Optional |

> **Auth Note**: Without a valid `CLERK_SECRET_KEY`, the app runs in **dev passthrough mode** — all routes are accessible without login. Set a real Clerk secret key to enforce authentication.

## Project Structure

```
apps/
  web/                      # Main Next.js application
    app/
      (auth)/               # Sign-in / sign-up pages
      (main)/               # Protected app pages
        dashboard/          # Main dashboard
        day/[dayNumber]/    # Day overview page
          topic/[topicId]/
            subtopic/[subtopicId]/   # Lesson page
              practice/    # Practice questions (type + speak)
              test/        # Test questions
              vocabulary/  # Subtopic vocabulary
        vocabulary/         # Full vocabulary bank
        speaking/           # Speaking Lab
        writing/            # Writing Lab
        progress/           # Progress & analytics
        leaderboard/        # Leaderboard
        revision/           # Revision mode
        mock-test/          # Mock tests
        profile/            # User profile
        settings/           # Settings
      api/                  # API routes
    components/             # React components
    data/                   # Static course content (days, vocab, questions)
    lib/                    # Utilities (db, auth, sounds, sync)
    prisma/                 # Database schema + seed scripts
    public/                 # Static assets, PWA manifest, service worker
  mobile/                   # Vite + React mobile app (in progress)
packages/                   # Shared packages (planned)
```

## URL Pattern for Lessons

The app uses static config IDs (NOT database cuid IDs) for navigation:
- Day page: `/day/1`
- Topic/Subtopic: `/day/1/topic/d1-t1/subtopic/d1-t1-s1`
- Practice: `/day/1/topic/d1-t1/subtopic/d1-t1-s1/practice`
- Test: `/day/1/topic/d1-t1/subtopic/d1-t1-s1/test`

IDs follow the pattern: `d{day}-t{topic}-s{subtopic}` (e.g., `d1-t1-s1`)

## Important Architecture Notes

- **Static content** (course structure, vocab, questions) lives in `data/` TypeScript files — NOT in the database
- **Database** tracks user progress, XP, scores, streaks only
- **Dev user** is auto-seeded with clerkId `dev-user-001` for local testing
- **Score model** uses `activity/points/xp/coins` fields (NOT `score/maxScore`)
- **SubtopicProgress** requires `dayProgressId` — always upsert DayProgress first

## User Preferences

- Comments on every line of code (simple English)
- Big, visual fonts and colors — modern, animated, professional design
- Inspired by: Apple, Stripe, Linear, Vercel, Clerk, Framer design systems
- Every section should open in its own page
- Mobile + web data must stay in sync
- Offline support (PWA service worker is in `public/sw.js`)
- Voice/speaking answer option alongside typing for all practice questions
