# 75 Days Hard English Course

## Project Overview

A full-stack gamified English learning platform built with Next.js 14, Clerk auth, Prisma + SQLite, Zustand, Framer Motion, and Recharts. Designed to take learners from beginner to advanced English in 75 structured days.

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.6
- **Auth**: Clerk (with dev passthrough when key is missing)
- **Database**: SQLite (dev) via Prisma ORM
- **Styling**: Tailwind CSS + custom design tokens
- **Animation**: Framer Motion + GSAP
- **State**: Zustand (with persist)
- **Charts**: Recharts
- **Icons**: Lucide React

### How to Run
The app is configured to run via the "Start application" workflow:
```
cd apps/web && npm install --prefer-offline; DATABASE_URL='file:./dev.db' npx prisma db push --accept-data-loss; DATABASE_URL='file:./dev.db' npx tsx prisma/seed.ts; DATABASE_URL='file:./dev.db' npm run dev
```
Server runs on port 5000.

### Key Routes
- `/` — Landing page
- `/dashboard` — User dashboard with progress
- `/day/[1-75]` — Day learning page
- `/day/[N]/topic/[topicId]/subtopic/[subtopicId]` — **Section overview** (new! each section is now its own page)
- `/day/[N]/topic/[topicId]/subtopic/[subtopicId]/learn` — **Theory page** (new!)
- `/day/[N]/topic/[topicId]/subtopic/[subtopicId]/vocabulary` — Vocabulary
- `/day/[N]/topic/[topicId]/subtopic/[subtopicId]/practice` — Practice (type OR speak)
- `/day/[N]/topic/[topicId]/subtopic/[subtopicId]/test` — Graded test
- `/vocabulary` — Global vocabulary bank
- `/speaking` — Speaking lab
- `/profile` — User profile
- `/leaderboard` — Global leaderboard
- `/mock-test` — 50-question mock test

### Architecture
- **Static data**: Course content lives in `data/` (vocabulary, questions, day configs, lesson content)
- **Database**: Only tracks progress (XP, completed subtopics, streaks) — NOT course content
- **Auth**: Clerk with dev passthrough — works without Clerk keys in development
- **Section pages**: Each subtopic now has 4 separate pages (learn, vocabulary, practice, test)

### Environment Variables
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Set (dev key)
- `CLERK_SECRET_KEY` — **Needed for production auth**. The dev passthrough works without it.
- `SESSION_SECRET` — Session secret (set as Replit secret)
- `DATABASE_URL` — Set automatically in workflow command

## User Preferences
- All code files should have detailed comments on every line
- Each section (Learn, Vocabulary, Practice, Test) should open as its own page, not a tab
- Speech recognition support on all practice questions (type OR speak)
- All days 1-7 content must be unique and complete
- Modern design inspired by Stripe, Apple, Linear, Vercel, Clerk
- Big visual fonts and colors that are clearly visible
- SEO optimized for "75 days hard English course" keyword targeting
- Clerk secret key to be provided later by user (CLERK_SECRET_KEY)
