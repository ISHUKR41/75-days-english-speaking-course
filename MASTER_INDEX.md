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
│   └── mobile/       ← Vite + React mobile companion app
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
├── replit.md         ← Replit-specific run config and notes
├── CONTRIBUTING.md   ← Branch strategy (day-1 through day-75)
├── FILE_STRUCTURE.md ← Previous structure doc (superseded by this file)
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
- **Auth:** Clerk v5 — requires CLERK_SECRET_KEY set in Replit Secrets
- **Database:** SQLite via Prisma at `apps/web/prisma/dev.db`
- **Run:** `npm run dev` from `apps/web/`
- **Dev passthrough:** Without valid Clerk secret, `safeAuth()` returns null → all protected routes redirect to /sign-in

---

## 📂 apps/web/app/ — Next.js Routes

### Public Routes (no auth)
| File | Route | Description |
|------|-------|-------------|
| `app/page.tsx` | `/` | Landing page (LandingHero + LandingFeatures + LandingCurriculum + LandingTestimonials + LandingCTA + LandingFooter) |
| `app/(auth)/sign-in/[[...sign-in]]/page.tsx` | `/sign-in` | Clerk SignIn component |
| `app/(auth)/sign-up/[[...sign-up]]/page.tsx` | `/sign-up` | Clerk SignUp component |

### Protected Routes — `app/(main)/` (Clerk auth required)
| File | Route | Description |
|------|-------|-------------|
| `app/(main)/layout.tsx` | — | Auth guard + AppSidebar + AppHeader + SidebarProvider |
| `app/(main)/dashboard/page.tsx` | `/dashboard` | Main hub: stats, day grid, quick actions, leaderboard |
| `app/(main)/day/[dayNumber]/page.tsx` | `/day/1` … `/day/75` | Day overview with topics/subtopics accordion |
| `app/(main)/day/[dayNumber]/vocabulary/page.tsx` | `/day/1/vocabulary` | Day-specific vocabulary list |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/page.tsx` | `.../subtopic/d1-t1-s1` | Subtopic hub: 4 section cards (Learn/Vocab/Practice/Test) |
| `app/(main)/day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]/learn/page.tsx` | `.../learn` | Full theory lesson with GSAP + TTS |
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
| `api/progress/save/route.ts` | `POST /api/progress/save` | Save subtopic progress |
| `api/progress/sync/route.ts` | `POST /api/progress/sync` | Sync offline progress |
| `api/score/route.ts` | `POST /api/score` | Save score/XP after practice/test |
| `api/speech/route.ts` | `GET /api/speech` | Speech assessment data |
| `api/subtopics/[subtopicId]/route.ts` | `GET /api/subtopics/:id` | Subtopic details |
| `api/test/route.ts` | `GET /api/test` | Test questions |
| `api/topics/route.ts` | `GET /api/topics` | Topics list |
| `api/user/route.ts` | `GET/PUT /api/user` | User profile |
| `api/vocabulary/route.ts` | `GET /api/vocabulary` | Vocabulary with filters |
| `app/layout.tsx` | — | Root layout: ClerkProvider, ThemeProvider, QueryProvider, SEO, fonts |

---

## 🧩 apps/web/components/ — All Components

### Dashboard (`components/dashboard/`)
| File | Description |
|------|-------------|
| `dashboard-client.tsx` | Main interactive dashboard (stats, day grid, quick actions, leaderboard preview) |
| `dashboard-chart.tsx` | XP progress chart using Recharts |
| `dashboard-stats.tsx` | Stats row (streak, XP, level, words learned) |
| `dashboard-streak.tsx` | Streak heatmap calendar |
| `day-card.tsx` | Individual day card in the 75-day grid |

### Landing Page (`components/landing/`)
| File | Description |
|------|-------------|
| `landing-hero.tsx` | Hero section with animated headline, floating word cards |
| `landing-features.tsx` | 6-feature grid with icons and descriptions |
| `landing-curriculum.tsx` | 75-day curriculum overview |
| `landing-navbar.tsx` | Navigation bar with logo, links, theme toggle, sign-in/start CTA |
| `landing-testimonials.tsx` | Student testimonials |
| `landing-cta.tsx` | Bottom call-to-action section |
| `landing-footer.tsx` | Footer with links and copyright |

### Layout (`components/layout/`)
| File | Description |
|------|-------------|
| `app-sidebar.tsx` | Left sidebar: nav links to all pages |
| `app-header.tsx` | Top header: user avatar, XP display, theme toggle |
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
| `practice-section.tsx` | Core practice component: TYPE or SPEAK mode, 80+ Qs, XP, scoring |
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

### Empty Subdirectories (for future use)
- `components/animations/` — Future animation components
- `components/charts/` — Future chart components
- `components/gamification/` — Future gamification components (badges, XP animations)

---

## 📊 apps/web/data/ — Static Course Data (Source of Truth)

### Course Content (`data/course-content/`)
| File | Description |
|------|-------------|
| `days-config.ts` | **MASTER:** All 75 days with topics + subtopics. Static IDs used everywhere. 648 lines. |
| `days-3-7-config.ts` | Extended config for Days 3-7 (subtopic details) |
| `day-1-content.ts` | Full lesson content for Day 1 (all subtopics): why/concept/rules/examples/story/dialogue |
| `day-2-content.ts` | Full lesson content for Day 2 (Self Introduction subtopics) |
| `days-3-7-content-extended.ts` | Extended lesson content for Days 3-7 |
| `topic-content-map.ts` | Content lookup map: getSpecificDayContent(), getSubtopicSpecificContent() |

### Questions (`data/questions/`)
| File | Description |
|------|-------------|
| `day-1-questions.ts` | 187 hand-crafted questions for Day 1 (PracticeQ type) |
| `day-1-extended-questions.ts` | 80+ additional questions for Day 1 subtopics |
| `day-1-subtopics-questions.ts` | Subtopic-specific questions for all Day 1 subtopics |
| `day-1-all-subtopics-questions.ts` | Comprehensive Day 1 question bank |
| `day-2-questions.ts` | Questions for Day 2 (Self Introduction) |
| `days-3-7-questions.ts` | Questions for Days 3-7: getDays3to7Questions() merges all |
| `days-4-7-extra-questions.ts` | 45+ extra questions per day for Days 4-7 |
| `question-generator.ts` | generateQuestionsFromVocab(): creates 3 Qs per vocab word (translation/fill/MCQ) |

### Vocabulary (`data/vocabulary/`)
| File | Description |
|------|-------------|
| `day-1-vocabulary.ts` | 300+ hand-crafted words for Day 1 with IPA, Hindi meaning, examples, synonyms |
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
| `safe-auth.ts` | **CRITICAL:** safeAuth(), IS_CLERK_CONFIGURED check. Without valid sk_test_/sk_live_ key, returns null. |
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
| `seed.ts` | Seeds all 75 days, topics, subtopics, badges, dev user |
| `seed-vocabulary.ts` | Vocabulary seeding helper |
| `dev.db` | SQLite database file (auto-created on startup) |

---

## 🎨 apps/web/styles/

| File | Description |
|------|-------------|
| `globals.css` | Tailwind base + custom CSS variables (HSL color tokens, glow shadows, animations) |

---

## 📱 apps/web/public/ — Static Assets

| Path | Description |
|------|-------------|
| `icons/` | SVG icons for PWA (96x96, 192x192, 512x512, apple-touch-icon) |
| `images/` | Static images |
| `sounds/` | Sound files directory |
| `manifest.json` | PWA manifest |
| `sw.js` | Service Worker for offline support |

---

## 📱 apps/mobile/ — Mobile Companion App (Vite + React)

| File | Description |
|------|-------------|
| `src/App.tsx` | Main mobile app component: Dashboard, Course Journey, Speaking Lab, Vocab Bank tabs |
| `src/lib/syncBridge.ts` | Syncs with web API: auth, progress, vocabulary data |
| `src/main.tsx` | Vite entry point |
| `src/index.css` | Mobile app styles |
| `vite.config.ts` | Vite config (proxies API to web app) |
| `package.json` | Mobile dependencies |

---

## 🔑 Critical Rules (Read Before Editing)

### Auth Architecture
- `IS_CLERK_CONFIGURED` = true only when CLERK_SECRET_KEY starts with sk_test_ or sk_live_
- Without valid CLERK_SECRET_KEY → ALL `/dashboard`, `/day/*`, `/profile` etc. → redirect to `/sign-in`
- Set CLERK_SECRET_KEY in Replit Secrets panel (never in .env files)

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

## 📚 Day 1–7 Topic Structure

| Day | Title | Topics | Key Content |
|-----|-------|--------|-------------|
| 1 | Basic of English | Why English, Alphabet, Parts of Speech, Sentence Structure, Introduction to Tenses, Numbers | Full content in day-1-content.ts |
| 2 | Self Introduction | First Impressions, Introduction Phrases, About Me, Formal vs Casual | day-2-content.ts |
| 3 | Imperative Sentences | Commands, Requests, Polite Forms, Negative Commands | days-3-7-content-extended.ts |
| 4 | Be Verbs | am/is/are (present), was/were (past), Questions, Negatives | days-3-7-content-extended.ts |
| 5 | Demonstrative Pronouns | This/That, These/Those, Near/Far objects | days-3-7-content-extended.ts |
| 6 | Has / Have | Possession, Has vs Have rules, Questions/Negatives | days-3-7-content-extended.ts |
| 7 | Had (Past) | Past possession, Had + noun, Past perfect intro | days-3-7-content-extended.ts |

---

## 🎓 Question Counts by Day

| Day | Hand-crafted | Vocab-generated | Total |
|-----|-------------|-----------------|-------|
| 1 | 187+ base + 80+ extended | ~600 (200 words × 3) | 880+ |
| 2 | Day 2 bank | ~900 (300 words × 3) | 900+ |
| 3-7 | getDays3to7Questions() | ~900 each | 900+ each |
| 8-75 | Auto-generated | 40+ per subtopic | 120+ per subtopic |

---

_Update this file whenever you add routes, components, data files, or API endpoints._
