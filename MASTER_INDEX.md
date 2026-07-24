# 📁 MASTER INDEX — 75 Days Hard English Course
> **Purpose:** Save AI tokens — read this FIRST before exploring individual files.
> **Last Updated:** 2026-07-24
> **Rule:** Update this file whenever a new folder, route, component, or data file is added.

---

## 🏗️ Monorepo Root

```
root/
├── apps/
│   ├── web/          ← Main Next.js 14 App (App Router) — PORT 5000
│   └── mobile/       ← Vite + React mobile companion app (skeleton)
├── packages/
│   ├── config/       ← Shared ESLint + TypeScript configs
│   ├── content/      ← Placeholder for shared content
│   ├── database/     ← Placeholder for shared DB schema
│   └── ui/           ← Placeholder for shared UI components
├── English.txt       ← User requirements and feature wishlist (READ THIS)
├── intro.txt         ← Additional user requirements (READ THIS)
├── MASTER_INDEX.md   ← THIS FILE — token-efficient project index
├── PROJECT_STRUCTURE.md ← Detailed run instructions and architecture
├── README.md         ← Project overview and tech stack
├── replit.md         ← Replit-specific run config and user preferences
├── CONTRIBUTING.md   ← Branch strategy (day-1 through day-75)
├── FILE_STRUCTURE.md ← Previous structure doc
├── turbo.json        ← Turborepo pipeline
├── package.json      ← Root package (workspaces)
├── package-lock.json ← Lock file
├── setup.sh          ← One-time init script
└── add-gitkeep.js    ← Utility to add .gitkeep to empty dirs
```

---

## 🌐 apps/web — Main Next.js Application

### Key Facts
- **Framework:** Next.js 14 (App Router)
- **Port:** 5000
- **Auth:** Clerk v5 — dev passthrough without CLERK_SECRET_KEY; full auth when key is set
- **Database:** SQLite via Prisma at `apps/web/prisma/dev.db`
- **Run:** `npm run dev` from `apps/web/`
- **TypeScript:** 0 errors (verified 2026-07-24)

---

## 📂 apps/web/app/ — Next.js Routes

### Public Routes (no auth)
| File | Route | Description |
|------|-------|-------------|
| `app/page.tsx` | `/` | Landing page (redirects to /dashboard if authed + Clerk configured) |
| `app/(auth)/sign-in/[[...sign-in]]/page.tsx` | `/sign-in` | Clerk SignIn component |
| `app/(auth)/sign-up/[[...sign-up]]/page.tsx` | `/sign-up` | Clerk SignUp component |
| `app/not-found.tsx` | `*` | Custom 404 page |
| `app/error.tsx` | `*` | Global error boundary |
| `app/loading.tsx` | `*` | Loading skeleton |

### Protected Routes — `app/(main)/` (Auth required)
| File | Route | Description |
|------|-------|-------------|
| `app/(main)/layout.tsx` | — | Auth guard + AppSidebar + AppHeader + SidebarProvider |
| `app/(main)/dashboard/page.tsx` | `/dashboard` | Main hub: stats, day grid, quick actions, leaderboard |
| `app/(main)/day/[dayNumber]/page.tsx` | `/day/1` … `/day/75` | Day overview with topics/subtopics accordion |
| `app/(main)/day/[dayNumber]/vocabulary/page.tsx` | `/day/1/vocabulary` | Day-specific vocabulary list |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/page.tsx` | `.../subtopic/d1-t1-s1` | Subtopic hub: 4 section cards (Learn/Vocab/Practice/Test) |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/learn/page.tsx` | `.../learn` | Full theory lesson with TTS |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/practice/page.tsx` | `.../practice` | 80+ questions, TYPE or SPEAK mode |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/practice/practice-client.tsx` | — | Practice client component |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/test/page.tsx` | `.../test` | 50-question timed test |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/test/test-client.tsx` | — | Test client component |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/vocabulary/page.tsx` | `.../vocabulary` | Subtopic-specific vocabulary |
| `app/(main)/leaderboard/page.tsx` | `/leaderboard` | Global leaderboard |
| `app/(main)/mock-test/page.tsx` | `/mock-test` | 50-question mock test (all topics) |
| `app/(main)/profile/page.tsx` | `/profile` | User profile (name, stats, badges) |
| `app/(main)/progress/page.tsx` | `/progress` | Progress charts and heatmap |
| `app/(main)/revision/page.tsx` | `/revision` | Revision/review mode |
| `app/(main)/settings/page.tsx` | `/settings` | App settings (theme, sound, notifications) |
| `app/(main)/speaking/page.tsx` | `/speaking` | Speaking Lab (read/shadow/free talk) |
| `app/(main)/vocabulary/page.tsx` | `/vocabulary` | Global vocabulary bank (all days) |
| `app/(main)/writing/page.tsx` | `/writing` | Writing lab (essays, emails, letters) |

### API Routes — `app/api/`
| File | Endpoint | Description |
|------|----------|-------------|
| `api/clerk/webhook/route.ts` | `POST /api/clerk/webhook` | Clerk user created/updated webhook |
| `api/dashboard/route.ts` | `GET /api/dashboard` | Dashboard data (stats, progress) |
| `api/days/route.ts` | `GET /api/days` | All 75 days list |
| `api/days/[dayNumber]/route.ts` | `GET /api/days/1` | Single day details |
| `api/health/route.ts` | `GET /api/health` | Health check (public) |
| `api/mobile/data/route.ts` | `GET /api/mobile/data` | Mobile app sync data endpoint |
| `api/practice/route.ts` | `GET /api/practice` | Practice questions for subtopic |
| `api/progress/route.ts` | `GET /api/progress` | User progress data |
| `api/progress/save/route.ts` | `POST /api/progress/save` | Save subtopic progress (uses static IDs) |
| `api/progress/sync/route.ts` | `POST /api/progress/sync` | Sync offline progress |
| `api/score/route.ts` | `POST /api/score` | Save score/XP after practice/test |
| `api/speech/route.ts` | `GET /api/speech` | Speech assessment data |
| `api/subtopics/[subtopicId]/route.ts` | `GET /api/subtopics/:id` | Subtopic details |
| `api/test/route.ts` | `GET /api/test` | Test questions |
| `api/topics/route.ts` | `GET /api/topics` | Topics list |
| `api/user/route.ts` | `GET/PUT /api/user` | User profile |
| `api/vocabulary/route.ts` | `GET /api/vocabulary` | Vocabulary with filters |

---

## 🧩 apps/web/components/ — All Components

### Dashboard (`components/dashboard/`)
| File | Description |
|------|-------------|
| `dashboard-client.tsx` | Main interactive dashboard (stats, day grid, quick actions, leaderboard preview) |
| `dashboard-chart.tsx` | XP progress chart using Recharts |
| `dashboard-stats.tsx` | Stats row (8 metric cards with animated counters, gradient icons) |
| `dashboard-streak.tsx` | Streak heatmap calendar |
| `day-card.tsx` | Individual day card in the 75-day grid |

### Landing Page (`components/landing/`)
| File | Description |
|------|-------------|
| `landing-hero.tsx` | Hero section with animated headline, floating word cards, parallax mouse |
| `landing-features.tsx` | 6-feature bento grid with icons and descriptions |
| `landing-curriculum.tsx` | 75-day curriculum overview |
| `landing-navbar.tsx` | Navigation bar with logo, links, theme toggle, sign-in/start CTA |
| `landing-testimonials.tsx` | Student testimonials |
| `landing-cta.tsx` | Bottom CTA with stats, benefits badges, dual action buttons |
| `landing-footer.tsx` | Footer with navigation columns, brand, and copyright |

### Layout (`components/layout/`)
| File | Description |
|------|-------------|
| `app-sidebar.tsx` | Left sidebar with all 75 days, nav links, user info |
| `app-header.tsx` | Top header: search, XP display, theme toggle, user avatar |
| `mobile-sidebar-backdrop.tsx` | Dark overlay when sidebar is open on mobile |
| `sidebar-mobile-closer.tsx` | Client component: auto-closes sidebar on mobile (<1024px) |
| `theme-provider.tsx` | next-themes ThemeProvider wrapper |
| `theme-toggle.tsx` | Sun/Moon toggle button |
| `query-provider.tsx` | React Query (TanStack) provider |

### Learning System (`components/learning/`)
| File | Description |
|------|-------------|
| `day-page-client.tsx` | Day overview: gradient header, stats, topics accordion with subtopics |
| `learn-page-client.tsx` | Full theory lesson: section tabs, scroll progress, TTS, GSAP animations |
| `lesson-content.tsx` | Content renderer: why/concept/rules/examples/mistakes/tips/story/dialogue/summary |
| `subtopic-lesson.tsx` | Subtopic lesson hub (wraps Learn + Practice + Test tabs) |
| `subtopic-overview.tsx` | 4 section cards for a subtopic (Learn / Vocabulary / Practice / Test) |

### Practice & Testing (`components/practice/`)
| File | Description |
|------|-------------|
| `practice-section.tsx` | Core practice component: TYPE or SPEAK mode, 80-140+ Qs, XP, scoring |
| `test-section.tsx` | 50-question timed test with grade (A+/A/B/C/D), requires 80%+ to pass |

### Other Page Components
| File | Description |
|------|-------------|
| `components/leaderboard/leaderboard-client.tsx` | Global leaderboard with ranking |
| `components/mock-test/mock-test-client.tsx` | 50-question mock test (all topics) |
| `components/profile/profile-client.tsx` | Custom user profile (DB data, not Clerk's default) |
| `components/progress/progress-page-client.tsx` | Progress charts, heatmap, day-by-day breakdown |
| `components/revision/revision-client.tsx` | Revision/review mode |
| `components/settings/settings-client.tsx` | Settings (theme, sound, notifications) — MUST be dynamic(ssr:false) |
| `components/speech/speaking-lab.tsx` | Speaking Lab: read aloud, shadow, free talk, accuracy scoring |
| `components/vocabulary/vocabulary-client.tsx` | Full vocabulary bank with search, filters, flashcard mode |
| `components/vocabulary/vocabulary-section.tsx` | Vocabulary section for a specific subtopic |
| `components/writing/writing-lab-client.tsx` | Writing lab: essay, email, letter templates |

### UI Primitives (`components/ui/`)
| File | Description |
|------|-------------|
| `sidebar.tsx` | shadcn/ui Sidebar (SidebarProvider, Sidebar, SidebarTrigger, etc.) |
| `animated-counter.tsx` | Animated number counter (for XP, streak display) |

---

## 📊 apps/web/data/ — Static Course Data (Source of Truth)

### Course Content (`data/course-content/`)
| File | Description |
|------|-------------|
| `days-config.ts` | **MASTER:** All 75 days with topics + subtopics. Static IDs used everywhere. |
| `days-3-7-config.ts` | Extended config for Days 3-7 (subtopic details) |
| `day-1-content.ts` | Full lesson content for Day 1 (all subtopics): why/concept/rules/examples/story/dialogue |
| `day-2-content.ts` | Full lesson content for Day 2 (Self Introduction subtopics) |
| `days-3-7-content-extended.ts` | Extended lesson content for Days 3-7 |
| `topic-content-map.ts` | Content lookup map: getSpecificDayContent(), getSubtopicSpecificContent() |

### Questions (`data/questions/`)
| File | Description |
|------|-------------|
| `day-1-questions.ts` | 187+ hand-crafted questions for Day 1 (PracticeQ type) |
| `day-1-extended-questions.ts` | 80+ additional questions for Day 1 subtopics |
| `day-1-subtopics-questions.ts` | Subtopic-specific questions for all Day 1 subtopics |
| `day-1-all-subtopics-questions.ts` | Comprehensive Day 1 question bank |
| `day-1-comprehensive.ts` | Additional comprehensive Day 1 questions |
| `day-2-questions.ts` | Questions for Day 2 (Self Introduction) |
| `day-2-comprehensive.ts` | Additional comprehensive Day 2 questions |
| `days-3-7-questions.ts` | Questions for Days 3-7: getDays3to7Questions() merges all |
| `days-3-7-comprehensive.ts` | Additional comprehensive Days 3-7 questions |
| `days-4-7-extra-questions.ts` | 45+ extra questions per day for Days 4-7 |
| `question-generator.ts` | generateQuestionsFromVocab(): creates 3 Qs per vocab word (Days 8-75) |

### Vocabulary (`data/vocabulary/`)
| File | Description |
|------|-------------|
| `day-1-vocabulary.ts` | 300+ hand-crafted words for Day 1 with IPA, Hindi meaning, examples |
| `day-2-vocabulary.ts` | 300+ words for Day 2 (Self Introduction vocabulary) |
| `day-3-vocabulary.ts` | 300+ words for Day 3 (Imperative vocabulary) |
| `day-4-vocabulary.ts` | 300+ words for Day 4 (Be Verbs vocabulary) |
| `day-5-vocabulary.ts` | 300+ words for Day 5 (Demonstrative vocabulary) |
| `day-6-vocabulary.ts` | 300+ words for Day 6 (Has/Have vocabulary) |
| `day-7-vocabulary.ts` | 300+ words for Day 7 (Had vocabulary) |
| `all-days-vocabulary.ts` | getVocabularyForDay(day, count): generates vocab for Days 8-75 |

---

## 🔧 apps/web/lib/ — Utility Libraries

| File | Description |
|------|-------------|
| `safe-auth.ts` | **CRITICAL:** safeAuth(), IS_CLERK_CONFIGURED. Dev passthrough without sk_test_ key. |
| `db.ts` | Prisma client singleton (import { db }) |
| `prisma.ts` | Prisma client setup |
| `utils.ts` | cn(), getDayColor(), checkAnswer(), playSound() |
| `sounds.ts` | Web Audio API sound effects (correct, wrong, complete, levelup) |
| `sync-engine.ts` | Offline sync logic for mobile/web data sync |

---

## 🎣 apps/web/hooks/ — Custom React Hooks

| File | Description |
|------|-------------|
| `use-progress.ts` | React Query hook for user progress data |
| `use-sound.ts` | Sound effect hook (wraps sounds.ts) |
| `use-speech-recognition.ts` | Web Speech API hook (browser microphone, transcript, isListening) |
| `use-user-stats.ts` | User stats hook (XP, streak, level) |

---

## 🏪 apps/web/store/ — Global State

| File | Description |
|------|-------------|
| `use-app-store.ts` | Zustand store: theme, sound on/off, sidebar state, user preferences. **MUST use dynamic(ssr:false) in Settings** |

---

## ⚡ apps/web/actions/ — Server Actions

| File | Description |
|------|-------------|
| `progress.ts` | Server actions: saveProgress(), getProgress() |
| `score.ts` | Server actions: saveScore(), getScores() |
| `user.ts` | Server actions: updateUser(), getUser() |

---

## 🗄️ apps/web/prisma/ — Database

| File | Description |
|------|-------------|
| `schema.prisma` | Full Prisma schema: User, Day, Topic, Subtopic, DayProgress, SubtopicProgress, Score, UserVocabulary, Badge, UserBadge, StreakHistory |
| `seed.ts` | Seeds all 75 days, topics, subtopics, badges, dev user (currentDay: 1) |
| `seed-vocabulary.ts` | Vocabulary seeding helper |
| `dev.db` | SQLite database file (auto-created on startup) |

**Key Schema Models:**
- `User` — clerkId, email, firstName, lastName, totalXp, level, streak, currentDay
- `Day` — dayNumber, title, description, emoji
- `Topic` — dayId, title, orderIndex, color
- `Subtopic` — topicId, title, estimatedMins
- `DayProgress` — userId, dayId, status (IN_PROGRESS/COMPLETED)
- `SubtopicProgress` — dayProgressId, subtopicId (stores STATIC config IDs!)
- `Score` — userId, activity, points, xp, coins
- `UserVocabulary` — userId, word, mastered
- `Badge` / `UserBadge` — gamification badges
- `StreakHistory` — daily activity for heatmap

---

## 🔑 Critical Rules (Read Before Editing)

### Auth Architecture
- `IS_CLERK_CONFIGURED` = true only when CLERK_SECRET_KEY starts with `sk_test_` or `sk_live_` AND length > 40
- Without valid CLERK_SECRET_KEY → dev passthrough (DEV_USER_CLERK_ID = "dev_user_75days_english")
- Set CLERK_SECRET_KEY in Replit Secrets panel (never in .env files)
- All protected routes import `{ auth } from "@/lib/safe-auth"` (NOT from `@clerk/nextjs/server` directly)

### Static IDs vs DB IDs
- Topic/Subtopic IDs (like `d1-t1`, `d1-t1-s1`) come from `days-config.ts` — NEVER from DB
- DB stores progress using these static config IDs as foreign keys
- NEVER use DB-generated cuid() IDs for topic/subtopic navigation

### Content Architecture
- Vocabulary, questions, lesson content → **static TypeScript files** (no DB reads)
- DB only tracks: user progress, XP/coins, scores, streaks, badges

### Score Model Fields
- `Score` has: activity, points, xp, coins, dayId, subtopicId
- NOT: scoreType, score, maxScore, percentage, correct, total

### SubtopicProgress Creation
- Must upsert DayProgress first to get dayProgressId
- SubtopicProgress.create() REQUIRES dayProgressId

### Settings Component
- `SettingsClient` MUST use `dynamic(..., { ssr: false })` — Zustand + next-themes are client-only

### Mobile Data Sync
- Mobile app reads from `/api/mobile/data` (same DB as web)
- Progress synced via `/api/progress/sync`
- Offline: localStorage cache, sync on reconnect

### Hydration Rules
- NEVER use Math.random() in SSR components — use deterministic formulas
- Any component using Zustand or next-themes must be client-only

---

## 🚀 Running the App

```bash
# From repo root:
npm install
cd apps/web
DATABASE_URL='file:./dev.db' npx prisma db push --accept-data-loss
npx tsx prisma/seed.ts
npm run dev
```

Or use the **"Start application"** workflow in Replit (port 5000).

---

## 📊 Content Coverage (Verified 2026-07-24)

| Day | Topic | Subtopics | Vocabulary | Questions |
|-----|-------|-----------|------------|-----------|
| 1 | Basic of English | 18 | 300+ | 880+ (hand-crafted + vocab-gen) |
| 2 | Self Introduction | 17 | 300+ | 900+ |
| 3 | Imperative Sentence | 17 | 300+ | 900+ |
| 4 | Be Verb | 17 | 300+ | ~1000 |
| 5 | Demonstrative Pronoun | 17 | 300+ | ~900 |
| 6 | Has / Have | 17 | 300+ | ~900 |
| 7 | Had | 17 | 300+ | ~900 |
| 8-75 | Various | ~6/day | Auto-gen | Auto-gen (~180/subtopic) |

---

## ✅ Verified Working (2026-07-24)
- Landing page (/, /sign-in, /sign-up)
- Dashboard with real user data from DB
- All 75 day pages (/day/1 through /day/75)
- Learn pages (full lesson with 10 sections)
- Practice pages (140+ questions, TYPE + SPEAK modes)
- Test pages (timed tests with TYPE + SPEAK modes)
- Vocabulary bank (300+ words, grid/list/flashcard views)
- Mock Test (50 questions, TYPE + SPEAK modes)
- Speaking Lab (Reading, Shadowing, Free Talk)
- Progress page (XP chart, streak heatmap, stats)
- Leaderboard
- Profile page
- Settings page
- Sound effects
- Dark/light theme
- 0 TypeScript errors

## ❌ Known Gaps
- CLERK_SECRET_KEY not set (needs Replit Secret for real auth)
- Mobile app is a skeleton (needs full React Native implementation)
- Days 8-75 use auto-generated content (no hand-crafted lessons)
- Offline PWA service worker not active
- Writing Lab partially implemented
- Revision page partially implemented

_Update this file whenever you add routes, components, data files, or API endpoints._
