# 75 Days Hard English Course

A full-stack gamified English learning platform that takes learners from beginner to fluent in 75 structured days.

## How to run

The app is configured to start automatically. The workflow command is:
```
cd apps/web && DATABASE_URL='file:./prisma/dev.db' npm run dev
```
The app runs on **port 5000**.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Monorepo:** Turborepo (`apps/web` is the main app)
- **Database:** Prisma ORM with SQLite (dev) — `apps/web/prisma/dev.db`
- **Auth:** Clerk (`@clerk/nextjs`) — dev passthrough active when `CLERK_SECRET_KEY` is not a valid `sk_test_/sk_live_` key
- **Styling:** Tailwind CSS + custom design tokens in `globals.css`
- **Animation:** Framer Motion, GSAP, Anime.js
- **State:** Zustand (with persist)
- **Charts:** Recharts
- **Speech:** Web Speech API (browser-native, no server needed)
- **Sounds:** Web Audio API + Howler

## Project structure

```
apps/
  web/                   ← Main Next.js app
    app/                 ← App Router pages
      (auth)/            ← sign-in / sign-up
      (main)/            ← dashboard, day pages, vocabulary, speaking, writing...
    components/          ← UI components (landing/, learning/, layout/, etc.)
    data/                ← Static course content (days config, vocabulary, questions)
    lib/                 ← db.ts, safe-auth.ts, utils.ts, sync-engine.ts
    prisma/              ← schema.prisma, seed.ts, dev.db (SQLite)
    config/              ← Course days config, theme tokens
    store/               ← Zustand stores
    hooks/               ← Custom React hooks
    types/               ← TypeScript types
ROBOT/                   ← Mirror / backup directory structure
```

## Database setup

```bash
cd apps/web
DATABASE_URL='file:./prisma/dev.db' npx prisma db push   # push schema
DATABASE_URL='file:./prisma/dev.db' npx tsx prisma/seed.ts  # seed data
```

The seed creates 75 days, 470 subtopics, vocabulary words, badges, and a dev user (`dev_user_75days_english`).

## Auth / Clerk

- **Dev passthrough** is active when `CLERK_SECRET_KEY` is not set or is not a valid Clerk key (`sk_test_*` / `sk_live_*`). In this mode all routes are open and a seeded dev user is used automatically.
- To enable real auth: add `CLERK_SECRET_KEY` as a Replit Secret (must start with `sk_test_` or `sk_live_`).
- The logic lives in `apps/web/lib/safe-auth.ts` and `apps/web/middleware.ts`.

## Environment variables

Set in `apps/web/.env.local` (already created):
- `DATABASE_URL` — SQLite path (`file:./prisma/dev.db`)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, etc.

Also set as Replit Env Vars (shared):
- `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_ENABLE_GAMIFICATION`, `NEXT_PUBLIC_ENABLE_SPEECH_RECOGNITION`

## User preferences

- Keep existing file/folder structure intact — do not delete or rename files without confirmation
- Every file should have inline comments on key lines
- Use big, visual fonts and accessible color contrast
- All sections should be fully responsive (mobile → desktop)
- Design inspiration: Apple, Vercel, Linear, Stripe, Airbnb (see getdesign.md references)
- Animations via Framer Motion, GSAP, Anime.js — prefer smooth and professional
- Content tone: friendly, encouraging, like a great teacher — not robotic
