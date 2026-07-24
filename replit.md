# 75 Days Hard English Course

A full-stack gamified English learning platform that takes learners from absolute beginner to fluent English speaker across 75 structured days.

## How to run on Replit

The app starts automatically via the configured workflow. The workflow:
1. Installs the monorepo npm dependencies from the repository root (if needed)
2. Pushes the Prisma schema to SQLite (`apps/web/prisma/dev.db`)
3. Seeds 75 days of course content (safe to re-run — clears and re-inserts)
4. Starts Next.js dev server on **port 5000**

To run manually from the Shell:
```bash
npm install
cd apps/web
DATABASE_URL='file:./dev.db' npx prisma db push --accept-data-loss
DATABASE_URL='file:./dev.db' npx tsx prisma/seed.ts
DATABASE_URL='file:./dev.db' npm run dev
```

Or use the root helper:
```bash
bash setup.sh
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Monorepo | Turborepo — main app is `apps/web/` |
| Database | Prisma ORM + SQLite (`dev.db`) |
| Auth | Clerk (`@clerk/nextjs` v5) — required for protected routes |
| Styling | Tailwind CSS + custom design tokens |
| Animation | Framer Motion, GSAP, Anime.js, Lottie |
| State | Zustand (with localStorage persist) |
| Charts | Recharts |
| Speech | Web Speech API (browser-native) |
| Sounds | Web Audio API + Howler |

## Project structure

```
apps/
  web/                        ← Main Next.js 14 app (port 5000)
    app/
      (auth)/                 ← /sign-in  /sign-up  (Clerk)
      (main)/                 ← All protected pages
        dashboard/            ← User dashboard
        day/[dayNumber]/      ← Day overview (1–75)
          topic/[topicId]/subtopic/[subtopicId]/
            page.tsx          ← Lesson content
            practice/         ← Practice questions (type + speak)
            test/             ← Test assessment
            vocabulary/       ← Subtopic vocabulary
        vocabulary/           ← Full vocabulary bank
        speaking/             ← Speaking lab
        writing/              ← Writing lab
        progress/             ← Progress charts
        revision/             ← Revision sessions
        leaderboard/          ← Leaderboard
        mock-test/            ← Mock tests
        settings/             ← User settings
      api/                    ← API routes (progress, scores, speech, mobile)
    components/               ← UI components (landing/, learning/, layout/, ui/)
    data/                     ← Static course content (days-config.ts, vocabulary/, questions/)
    lib/                      ← db.ts, safe-auth.ts, utils.ts, mobile-sync.ts
    prisma/                   ← schema.prisma, seed.ts, dev.db
    store/                    ← Zustand stores
    hooks/                    ← Custom React hooks
    types/                    ← TypeScript types
    scripts/                  ← Helper scripts (setup-db.sh)
  mobile/                     ← Vite/React mobile app (port 5001, skeleton)
packages/                     ← Shared monorepo packages (currently placeholders)
setup.sh                      ← Root first-run setup script
```

## Database

SQLite database lives at `apps/web/prisma/dev.db`.

To reset and re-seed:
```bash
cd apps/web
DATABASE_URL='file:./dev.db' npx prisma db push --accept-data-loss
DATABASE_URL='file:./dev.db' npx tsx prisma/seed.ts
```

Seed output: **75 days, 470 subtopics, vocabulary words, practice questions, badges, dev user**.

The `dev.db` file is in `.gitignore` so it is not committed — the workflow re-creates it automatically on every fresh Replit session.

## Auth / Clerk

Dashboard, day, practice, and other `(main)` routes require an authenticated
Clerk session. When `CLERK_SECRET_KEY` is absent or invalid, protected routes
redirect to `/sign-in`; the app does not use a seeded user as an auth bypass.

To enable real auth:
1. Create a Clerk project at https://dashboard.clerk.com
2. Add `CLERK_SECRET_KEY` as a **Replit Secret** (value starts with `sk_test_` or `sk_live_`)
3. `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is already set as a shared env var

## Environment variables

Already configured as Replit env vars (shared):
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk public key (pk_test_...)
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` / `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` / `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`
- `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_ENABLE_GAMIFICATION`, `NEXT_PUBLIC_ENABLE_SPEECH_RECOGNITION`

A local `apps/web/.env.local` file is also present for overriding values in dev.

See `apps/web/.env.example` for the full list of supported variables.

## Health check

`GET /api/health` — public endpoint that confirms the app is running, DB is connected, and Clerk configuration mode. Used by the mobile app sync bridge to verify connectivity.

## Available npm scripts (run from `apps/web/`)

```bash
npm run dev          # Start dev server on port 5000
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
npm run db:push      # Push Prisma schema (needs DATABASE_URL)
npm run db:seed      # Seed course data  (needs DATABASE_URL)
npm run db:studio    # Open Prisma Studio UI
```

## User preferences

- Keep existing file/folder structure — do not rename or delete files without confirmation
- Every file should have inline comments on key lines explaining the logic
- Use big, visual fonts with accessible color contrast
- All sections must be fully responsive (mobile → tablet → desktop)
- Design inspiration: Apple, Vercel, Linear, Stripe, Airbnb (see reference URLs in messages)
- Animations via Framer Motion, GSAP, Anime.js — smooth and professional, never janky
- Content tone: warm, encouraging, like a great teacher — not robotic
- Both **type** and **speak** answer modes must always be available in practice sessions
- Protected app pages must require sign-in; the landing page and auth pages remain previewable without a Clerk secret
