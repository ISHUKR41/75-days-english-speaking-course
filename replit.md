# 75 Days Hard English Course — Replit Configuration

## Project Overview
A full-stack gamified English learning platform that takes students from beginner to fluent in 75 structured days. Features XP/badges/streaks, speaking lab, vocabulary bank, practice with Type & Speak modes, and a complete 75-day curriculum.

## Tech Stack
- **Framework**: Next.js 14 (App Router), TypeScript 5.6
- **Auth**: Clerk v5 (protected routes require a real Clerk session)
- **Database**: SQLite via Prisma ORM (`apps/web/prisma/dev.db`)
- **Styling**: Tailwind CSS + custom design tokens
- **Animation**: Framer Motion + GSAP + Anime.js
- **State**: Zustand (persist), React Query
- **Charts**: Recharts
- **Speech**: Web Speech API (browser built-in)
- **Monorepo**: Turborepo

## How to Run
The **"Start application"** workflow handles everything automatically:
1. `npm install` (root — installs all workspaces)
2. `cd apps/web`
3. `DATABASE_URL='file:./dev.db' npx prisma db push --accept-data-loss`
4. `npx tsx prisma/seed.ts` (seeds 75 days, dev user, badges)
5. `npm run dev` (Next.js on port 5000)

## Environment Variables Set
| Variable | Status | Description |
|----------|--------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ Set | Clerk publishable key (dev) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | ✅ Set | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | ✅ Set | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | ✅ Set | `/dashboard` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | ✅ Set | `/dashboard` |
| `SESSION_SECRET` | ✅ Secret | Session secret |
| `CLERK_SECRET_KEY` | ❌ Needs setting | Add as Replit Secret (starts with `sk_test_`) |

## Authentication Notes
- **Without CLERK_SECRET_KEY**: Public landing and auth pages remain available, but dashboard, course, and user APIs require sign-in and redirect/reject safely.
- **With CLERK_SECRET_KEY**: Full Clerk auth active — users must sign up/sign in. Add the key via Replit Secrets panel.
- Dev user is seeded with: `firstName: "Dev"`, `lastName: "Student"`, `currentDay: 1`

## Key Routes
| Route | Description |
|-------|-------------|
| `/` | Landing page (marketing) |
| `/dashboard` | Main learning hub |
| `/day/1` through `/day/75` | Daily lesson pages |
| `/day/N/topic/dN-tN/subtopic/dN-tN-sN/learn` | Theory lesson |
| `/day/N/topic/dN-tN/subtopic/dN-tN-sN/practice` | Practice (Type/Speak) |
| `/day/N/topic/dN-tN/subtopic/dN-tN-sN/test` | Timed test |
| `/vocabulary` | Global vocabulary bank |
| `/speaking` | Speaking lab |
| `/mock-test` | 50-question mock test |
| `/progress` | Progress charts & heatmap |
| `/leaderboard` | Global leaderboard |

## Database
- **Dev**: SQLite at `apps/web/prisma/dev.db` (auto-created on startup)
- **Schema**: See `apps/web/prisma/schema.prisma`
- **Seeding**: `cd apps/web && DATABASE_URL='file:./dev.db' npx tsx prisma/seed.ts`

## Content Architecture
- **Day/Topic/Subtopic structure**: Static TypeScript config in `data/course-content/`
- **Questions**: Static files for Days 1-7, auto-generated for Days 8-75
- **Vocabulary**: Static files for Days 1-7 (300+ words/day), generated for Days 8-75
- **Progress/XP/Scores**: Database only

## User Preferences
- Keep all 75 days with separate folders and pages
- Use Type AND Speak answer modes for all practice
- Real data from database (no fake/placeholder data in dashboard)
- Modern, animated, professional UI
- Every page should have a separate route
- All files should have comments on every line
- Fully responsive for mobile and desktop
- Open source friendly

## Status (2026-07-24)
- ✅ App running on port 5000
- ✅ All pages working (dashboard, day pages, learn, practice, test, vocabulary)
- ✅ TypeScript: 0 errors
- ✅ Production build verified with `DATABASE_URL='file:./dev.db' npm run build`
- ✅ Offline fallback builds correctly with a client-only retry action
- ✅ Clerk publishable key configured
- ✅ Protected-route auth fails closed when Clerk secret is missing
- ✅ Sound effects (Web Audio API)
- ✅ Dark/light theme
- ❌ CLERK_SECRET_KEY needs to be added as a Replit Secret for production auth
- ❌ Mobile app is a skeleton (needs full implementation)
- ❌ Days 8-75 use auto-generated content (no hand-crafted lessons)
