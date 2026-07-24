# 📁 75 Days Hard English — Complete Project Structure
> Last updated: 2026-07-24
> Purpose: Save AI tokens — read this FIRST before exploring files individually.
> Source of truth: update this document when a major folder, route, data source, or run instruction changes.

## Replit verification notes

- The primary preview workflow is `Start application`.
- It installs from the repository root, recreates the local Prisma SQLite schema,
  seeds the course, removes the stale Next.js development cache, and serves
  `apps/web` on port 5000.
- Local development authentication uses the documented safe-auth passthrough
  when a valid Clerk secret is not configured. Real Clerk authentication must
  be enabled with a Replit Secret before production use.
- The web app is the source of truth for mobile data through the mobile API
  routes under `apps/web/app/api/mobile/`; the mobile app is currently a
  lightweight client skeleton, not a second content database.

---

## 🏗️ Monorepo Overview (Turborepo)

```
root/
├── apps/
│   ├── web/          ← Main Next.js 14 App (APP ROUTER) — PORT 5000
│   └── mobile/       ← Vite + React mobile skeleton (lightweight)
├── packages/
│   ├── config/       ← Shared ESLint/TS configs
│   ├── content/      ← (placeholder)
│   ├── database/     ← (placeholder)
│   └── ui/           ← (placeholder)
├── English.txt       ← User requirements & feature wishlist
├── intro.txt         ← Additional user requirements
├── README.md         ← Project overview, tech stack
├── replit.md         ← Replit run instructions + dev passthrough info
├── CONTRIBUTING.md   ← Parallel branch strategy (day-1 through day-75)
├── turbo.json        ← Turborepo pipeline config
└── setup.sh          ← One-time init script
```

---

## 🌐 apps/web — Main Next.js Application

### Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.6 |
| Auth | Clerk v5 (with dev passthrough when key missing) |
| Database | SQLite via Prisma ORM (dev), easily migrated to PostgreSQL |
| Styling | Tailwind CSS + custom design tokens |
| Animation | Framer Motion |
| State | Zustand (with persist) |
| Charts | Recharts |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Sounds | Web Audio API (no mp3 files) |
| Speech | Web Speech API (browser built-in) |
| Data Fetch | React Query (@tanstack/react-query) |

### Port & Run
- Dev server runs on **port 5000** (`next dev --port 5000`)
- DATABASE_URL: `file:./dev.db` when commands run from `apps/web` (SQLite file at `apps/web/prisma/dev.db`)
- Workflow: `cd apps/web && npm install; prisma db push; tsx prisma/seed.ts; npm run dev`

---

## 📂 apps/web Directory Tree

### App Routes (`apps/web/app/`)

```
app/
├── layout.tsx                          ← Root layout: ClerkProvider, ThemeProvider, QueryProvider, SEO, fonts
├── page.tsx                            ← Landing page (marketing, no auth required)
│
├── (auth)/                             ← Auth routes (public, no sidebar)
│   ├── sign-in/[[...sign-in]]/page.tsx ← Clerk SignIn component
│   └── sign-up/[[...sign-up]]/page.tsx ← Clerk SignUp component
│
├── (main)/                             ← All authenticated pages (sidebar + header)
│   ├── layout.tsx                      ← Auth guard + AppSidebar + AppHeader layout
│   ├── dashboard/page.tsx              ← Main dashboard (stats, quick actions, day list)
│   ├── day/[dayNumber]/
│   │   ├── page.tsx                    ← Day overview (topics + subtopics list, progress)
│   │   ├── vocabulary/page.tsx         ← Day-specific vocabulary page
│   │   └── topic/[topicId]/subtopic/[subtopicId]/
│   │       ├── page.tsx                ← Subtopic overview (redirects to /learn)
│   │       ├── learn/page.tsx          ← Full lesson page (theory, rules, story, dialogue)
│   │       ├── practice/
│   │       │   ├── page.tsx            ← Practice page (server)
│   │       │   └── practice-client.tsx ← Practice client (wraps PracticeSection)
│   │       ├── test/
│   │       │   ├── page.tsx            ← Test page (server)
│   │       │   └── test-client.tsx     ← Test client (wraps TestSection)
│   │       └── vocabulary/page.tsx     ← Subtopic vocabulary
│   ├── leaderboard/page.tsx
│   ├── mock-test/page.tsx              ← 50-question timed mock test (TYPE or SPEAK mode)
│   ├── profile/page.tsx
│   ├── progress/page.tsx               ← Heatmap, XP chart, stats
│   ├── revision/page.tsx
│   ├── settings/page.tsx
│   ├── speaking/page.tsx               ← Speaking Lab (Reading, Shadowing, Free Talk)
│   ├── vocabulary/page.tsx             ← Global vocabulary bank (200+ words, filters)
│   └── writing/page.tsx               ← Writing lab
│
└── api/                                ← REST API routes
    ├── clerk/webhook/route.ts          ← Clerk user sync webhook
    ├── dashboard/route.ts              ← Dashboard stats API
    ├── days/route.ts                   ← All days list
    ├── days/[dayNumber]/route.ts       ← Single day data
    ├── health/route.ts                 ← Health check (GET /api/health)
    ├── mobile/data/route.ts            ← Mobile app data sync endpoint
    ├── practice/route.ts               ← Practice questions
    ├── progress/route.ts               ← User progress
    ├── progress/save/route.ts          ← Save progress (uses STATIC subtopicIds, NOT DB cuid)
    ├── progress/sync/route.ts          ← Offline sync endpoint
    ├── score/route.ts                  ← Save score/XP
    ├── speech/route.ts                 ← Speech attempt logging
    ├── subtopics/[subtopicId]/route.ts ← Single subtopic data
    ├── test/route.ts                   ← Test questions
    ├── topics/route.ts                 ← Topics list
    ├── user/route.ts                   ← User profile CRUD
    └── vocabulary/route.ts             ← Vocabulary (supports difficulty/partOfSpeech/pageSize/limit filters)
```

---

### Components (`apps/web/components/`)

```
components/
├── dashboard/
│   ├── dashboard-client.tsx   ← Interactive dashboard with stats, day list, quick actions
│   ├── dashboard-chart.tsx    ← Recharts XP/progress chart
│   ├── dashboard-stats.tsx    ← Stat cards (streak, XP, level, etc.)
│   ├── dashboard-streak.tsx   ← Streak heatmap component
│   └── day-card.tsx           ← Single day card in dashboard grid
│
├── landing/
│   ├── landing-hero.tsx       ← Hero section (animated, GSAP)
│   ├── landing-navbar.tsx     ← Marketing nav (Sign in / Start Free buttons)
│   ├── landing-features.tsx   ← Features grid section
│   ├── landing-curriculum.tsx ← Course curriculum preview
│   ├── landing-testimonials.tsx
│   ├── landing-cta.tsx        ← Call to action section
│   └── landing-footer.tsx
│
├── layout/
│   ├── app-sidebar.tsx        ← Left sidebar (nav: Dashboard, Progress, Vocab, etc.)
│   ├── app-header.tsx         ← Top header (XP, streak, theme toggle, user avatar)
│   ├── mobile-sidebar-backdrop.tsx ← Overlay when sidebar open on mobile
│   ├── sidebar-mobile-closer.tsx   ← CLIENT: closes sidebar on mobile mount (window.innerWidth < 1024)
│   ├── theme-provider.tsx     ← next-themes ThemeProvider
│   ├── theme-toggle.tsx       ← Dark/Light/System toggle button
│   └── query-provider.tsx     ← React Query QueryClientProvider
│
├── learning/
│   ├── day-page-client.tsx    ← Day overview client (topics accordion, subtopic cards)
│   ├── learn-page-client.tsx  ← Full lesson viewer (tabs: Why, Concept, Rules, Examples, etc.)
│   ├── lesson-content.tsx     ← Renders LessonContent data (LARGE FILE ~2000+ lines)
│   ├── subtopic-lesson.tsx    ← Subtopic lesson wrapper (combines learn + practice + test tabs)
│   └── subtopic-overview.tsx  ← Subtopic overview card
│
├── practice/
│   ├── practice-section.tsx   ← 🔑 Core practice UI — TYPE and SPEAK answer modes
│   │                             Loads questions for any day/subtopic dynamically
│   │                             140+ questions per subtopic, includes vocab-generated
│   └── test-section.tsx       ← Timed test UI (similar to practice but with timer)
│
├── vocabulary/
│   ├── vocabulary-client.tsx  ← Vocabulary bank (search, filter, grid/list/flashcard views)
│   └── vocabulary-section.tsx ← Subtopic vocabulary display
│
├── mock-test/
│   └── mock-test-client.tsx   ← 50-question mock test (TYPE or SPEAK mode)
│
├── speech/
│   └── speaking-lab.tsx       ← Speaking Lab (Reading, Shadowing, Free Talk modes)
│
├── leaderboard/
│   └── leaderboard-client.tsx
│
├── profile/
│   └── profile-client.tsx     ← Custom profile page (DB data, NOT Clerk UserProfile)
│
├── progress/
│   └── progress-page-client.tsx ← Progress page (XP chart, heatmap, stats)
│
├── revision/
│   └── revision-client.tsx
│
├── settings/
│   └── settings-client.tsx    ← MUST use dynamic(..., { ssr: false }) — Zustand + next-themes
│
├── writing/
│   └── writing-lab-client.tsx
│
└── ui/
    ├── sidebar.tsx            ← SidebarProvider, AppSidebar, SidebarMobileCloser
    └── animated-counter.tsx   ← Count-up animation component
```

---

### Data Files (`apps/web/data/`)

```
data/
├── course-content/
│   ├── days-config.ts          ← 🔑 MASTER CONFIG: All 75 days structure
│   │                              Exports: COURSE_DAYS_DATA (array of DayConfig)
│   │                              Types: DayConfig, TopicConfig, SubtopicConfig
│   │                              Day IDs: d1-t1, d1-t1-s1, d2-t1, d2-t1-s1, etc.
│   ├── day-1-content.ts        ← Deep lesson content for all Day 1 subtopics
│   │                              Exports: SUBTOPIC_1_WHY_LEARN, SUBTOPIC_2_ALPHABET, etc.
│   │                              Type: LessonContent (whyLearnThis, rules, commonMistakes, story, dialogue...)
│   ├── day-2-content.ts        ← Deep lesson content for Day 2 subtopics
│   ├── days-3-7-config.ts      ← Detailed topic/subtopic configs for Days 3-7
│   │                              Exports: DAY_3_CONFIG, DAY_4_CONFIG, DAY_5_CONFIG, DAY_6_CONFIG, DAY_7_CONFIG
│   └── topic-content-map.ts   ← Maps subtopicId → LessonContent (for lesson-content.tsx)
│
├── questions/
│   ├── day-1-questions.ts      ← Day 1 handwritten questions + PracticeQ type definition
│   ├── day-1-all-subtopics-questions.ts ← ALL_DAY_1_QUESTIONS (combined export)
│   ├── day-1-extended-questions.ts      ← ALL_DAY1_EXTENDED_QUESTIONS (80+ additional)
│   ├── day-2-questions.ts      ← ALL_DAY_2_QUESTIONS
│   ├── days-3-7-questions.ts   ← getDays3to7Questions(dayNumber, subtopicId?) function
│   │                              DAY_3_T1_QUESTIONS, DAY_3_T2_QUESTIONS, etc.
│   └── question-generator.ts  ← generateQuestionsFromVocab() — creates 3 Qs per vocab word
│                                  (translation, fill_blank, MCQ) — used as fallback for Days 3-75
│
└── vocabulary/
    ├── day-1-vocabulary.ts     ← ALL_DAY_1_VOCABULARY (200 words)
    ├── day-2-vocabulary.ts     ← ALL_DAY_2_VOCABULARY (200 words)
    └── all-days-vocabulary.ts  ← getVocabularyForDay(dayNumber, count?) — generates topic-specific vocab
                                   Returns vocabulary for days 3-75 based on day number
```

---

### Library & Utilities (`apps/web/lib/`)

```
lib/
├── safe-auth.ts    ← 🔑 Auth wrapper
│                      IS_CLERK_CONFIGURED: bool (checks if sk_test_/sk_live_ key exists)
│                      DEV_USER_CLERK_ID: "dev_user_75days_english"
│                      safeAuth() → { userId } — uses dev user when Clerk not configured
│                      auth = safeAuth (alias for import { auth } from "@/lib/safe-auth")
│                      safeCurrentUser() → mock user or real Clerk user
│
├── db.ts           ← Prisma client singleton (import { db } from "@/lib/db")
├── prisma.ts       ← Prisma client setup
├── utils.ts        ← cn(), getDayColor(), checkAnswer(), playSound()
├── sounds.ts       ← Web Audio API sound effects (correct, wrong, complete, levelup)
└── sync-engine.ts  ← Offline sync logic for mobile/web data sync
```

---

### Hooks (`apps/web/hooks/`)

```
hooks/
├── use-progress.ts           ← React Query hook for user progress data
├── use-sound.ts              ← Sound effect hook
├── use-speech-recognition.ts ← Web Speech API hook (browser microphone)
└── use-user-stats.ts         ← User stats (XP, streak, level) hook
```

---

### Store (`apps/web/store/`)

```
store/
└── use-app-store.ts  ← Zustand store (theme, sound, sidebar, user preferences)
                         Must use dynamic import with ssr:false in Settings page
```

---

### Actions (`apps/web/actions/`)

```
actions/
├── progress.ts  ← Server actions for saving/fetching progress
├── score.ts     ← Server actions for saving scores/XP
└── user.ts      ← Server actions for user profile updates
```

---

### Database (`apps/web/prisma/`)

```
prisma/
├── schema.prisma   ← Complete DB schema (SQLite for dev)
│   Models:
│   - User (clerkId, email, firstName, lastName, currentDay, totalXp, totalCoins, level, streak, longestStreak)
│   - Day (dayNumber, title, description, emoji, isRevision, isMockTest)
│   - Topic (dayId, title, orderIndex, color, emoji)
│   - Subtopic (topicId, title, orderIndex, estimatedMins)
│   - SubtopicContent (JSON lesson content for each subtopic)
│   - DayVocabulary, SubtopicVocabulary (word banks)
│   - SubtopicVerb (verb conjugation tables)
│   - PracticeQuestion, TestQuestion (question banks)
│   - PracticeAnswer, TestAttemptAnswer (user answer history)
│   - TestAttempt (timed test records)
│   - DayProgress, SubtopicProgress (user completion tracking)
│   - Score (activity/points/xp/coins/dayId/subtopicId — NOT score/maxScore/percentage)
│   - Badge, UserBadge (achievements)
│   - StreakHistory (daily streak records)
│   - SpeechAttempt (speaking lab records)
│   - LearningSession (session tracking)
│   - UserVocabulary (mastery tracking)
│   - UserNote, UserBookmark (personal notes and bookmarks)
│
├── seed.ts         ← Seeds DB: days 1-75, dev user (clerkId: "dev_user_75days_english")
└── seed-vocabulary.ts ← Vocabulary seeding script
```

---

## 🔑 Critical Architecture Rules

### Authentication
- **Dev passthrough**: When `CLERK_SECRET_KEY` is missing or invalid, `IS_CLERK_CONFIGURED = false`
- Dev user ID: `"dev_user_75days_english"` (seeded in DB)
- All protected pages: `import { auth } from "@/lib/safe-auth"` (NOT from `@clerk/nextjs/server` directly)
- Layout guard: `apps/web/app/(main)/layout.tsx` redirects to /sign-in only when Clerk IS configured

### Static Config vs Database
- **Day/Topic/Subtopic STRUCTURE** → static config files in `data/course-content/`
- **User PROGRESS** → database (DayProgress, SubtopicProgress)
- **IDs must match**: SubtopicProgress.subtopicId stores STATIC config IDs (e.g., "d1-t1-s1"), NOT DB cuid IDs
- Progress save route (`/api/progress/save`) uses static subtopicId from request body directly

### Question Loading (practice-section.tsx)
```
Day 1: ALL_DAY_1_QUESTIONS + ALL_DAY1_EXTENDED_QUESTIONS + generateQuestionsFromVocab()
Day 2: ALL_DAY_2_QUESTIONS + generateQuestionsFromVocab()
Days 3-7: getDays3to7Questions() + generateQuestionsFromVocab()
Days 8-75: getVocabularyForDay() → generateQuestionsFromVocab() (60 words × 3 Qs = 180 per day)
```

### Answer Modes
Both `practice-section.tsx` and `mock-test-client.tsx` support:
- **TYPE mode**: Text input field
- **SPEAK mode**: Web Speech API microphone (browser built-in, no external API needed)

### Score Model Fields
```
Score: activity, points, xp, coins, dayId, subtopicId
⚠️ NOT: scoreType, score, maxScore, percentage, correct, total
```

### SubtopicProgress Creation
```typescript
// ALWAYS upsert DayProgress first to get dayProgressId
const dayProgress = await db.dayProgress.upsert(...)
await db.subtopicProgress.create({ data: { dayProgressId: dayProgress.id, ... } })
```

### Mobile Sidebar
- `SidebarProvider defaultOpen=true` blocks content on mobile
- `SidebarMobileCloser` client component calls `setOpen(false)` if `window.innerWidth < 1024` on mount

### Settings Page (SSR fix)
```typescript
// settings page MUST use dynamic import with ssr:false
const SettingsClient = dynamic(() => import("@/components/settings/settings-client"), { ssr: false })
```

### Vocabulary API
- `/api/vocabulary` accepts: `difficulty`, `partOfSpeech` filters for "all" case
- Also reads `pageSize` OR `limit` param
- Profile stats: use `?? 0` not `|| 0` for numeric fields (0 is falsy)

---

## 🌐 Course Structure (Days 1-75)

### Days 1-7 (Fully Built)
| Day | Topic | Content Status |
|-----|-------|---------------|
| 1 | Basic of English | ✅ Full lesson content + 140+ questions + 200 vocab |
| 2 | Self Introduction | ✅ Full lesson content + questions + 200 vocab |
| 3 | Imperative Sentence | ✅ Config + questions (getDays3to7Questions) + vocab generator |
| 4 | Be Verb (Am/Is/Are/Was/Were) | ✅ Config + questions + vocab generator |
| 5 | Demonstrative Pronoun | ✅ Config + questions + vocab generator |
| 6 | Has / Have | ✅ Config + questions + vocab generator |
| 7 | Simple Present Tense | ✅ Config + questions + vocab generator |

### Days 8-75
- Structure: Static config in `days-config.ts` (all 75 days defined)
- Questions: Generated from `generateQuestionsFromVocab()` (3 per vocab word)
- Vocabulary: `getVocabularyForDay(dayNumber)` from `all-days-vocabulary.ts`

### Day ID Patterns
```
Day 1: d1-t1, d1-t1-s1, d1-t1-s2... d1-t5-s3
Day 2: d2-t1, d2-t1-s1... d2-t5-s3
Day 3: d3-t1, d3-t1-s1... d3-t5-s3
...etc
```

---

## 🗄️ Database (SQLite - dev)

- Location: `apps/web/prisma/dev.db`
- ORM: Prisma 5.22
- Dev seeding: `tsx prisma/seed.ts` — creates days 1-75, dev user
- Migrations: `prisma db push --accept-data-loss` (dev mode)

---

## 📱 Mobile App (apps/mobile/)

```
mobile/
├── src/
│   ├── App.tsx      ← Main app component (lightweight Vite + React)
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── tsconfig.json
└── package.json
```
- Data source: Fetches from web app's `/api/mobile/data` endpoint
- Sync: Uses `lib/sync-engine.ts` for offline support

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | For real auth | Clerk publishable key (pk_test_... or pk_live_...) |
| `CLERK_SECRET_KEY` | For real auth | Clerk secret key (sk_test_... or sk_live_...) |
| `DATABASE_URL` | Always | `file:./dev.db` from `apps/web` (SQLite file at `apps/web/prisma/dev.db`) |
| `SESSION_SECRET` | Optional | Express session secret |
| `NEXT_PUBLIC_APP_URL` | Optional | Production URL for SEO/OG tags |

**Dev mode**: Without `CLERK_SECRET_KEY`, app runs with dev passthrough (no sign-in required)

---

## 🎨 UI/Design System

- **Dark mode default** (dark/light/system toggle in header)
- **Color tokens**: primary (brand purple/indigo), gold-400, emerald, rose, amber
- **Fonts**: Inter (body), Outfit (headings) — Google Fonts
- **Custom CSS classes**: `gradient-text`, `hero-gradient`, `card-shine`, `grid-dots`, `shadow-glow-brand`, `animate-flicker`
- **Tailwind config**: `apps/web/tailwind.config.ts`
- **Global styles**: `apps/web/styles/globals.css`

---

## 🚀 SEO

- JSON-LD structured data (Course schema) in `app/layout.tsx`
- Keywords targeting: "75 days hard English course", "English bolna kaise sikhe"
- OG tags, Twitter cards, sitemap-ready
- All pages have dynamic `generateMetadata()` for proper titles/descriptions

---

## 📋 What IS Working (Verified 2026-07-24)
- ✅ Dashboard (real user data from DB)
- ✅ Day 1-7 pages (locked/unlocked correctly)
- ✅ Learn pages (full lesson with sections: Why, Concept, Rules, Examples, Tips, Story, Dialogue, Summary)
- ✅ Practice pages (140+ questions, TYPE + SPEAK answer modes)
- ✅ Test pages (timed tests with TYPE + SPEAK modes)
- ✅ Vocabulary bank (200+ words, grid/list/flashcard views, search, filters)
- ✅ Mock Test (50 questions, TYPE + SPEAK modes)
- ✅ Speaking Lab (Reading, Shadowing, Free Talk)
- ✅ Progress page (XP chart, streak heatmap, stats)
- ✅ Leaderboard
- ✅ Dev passthrough auth (no Clerk key needed in dev)
- ✅ Sound effects (Web Audio API)
- ✅ Dark/light theme
- ✅ TypeScript clean (0 errors as of 2026-07-24)
- ✅ Env vars set: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, Clerk URLs, app flags

## 🐛 Bugs Fixed (2026-07-24)
- **TypeScript error in `days-3-7-content-extended.ts` line 2329**: Missing closing backtick on
  `conceptExplanation` template literal for subtopic `d7-t1-s4`. This caused 45 cascading
  TypeScript parse errors on line 2331. Fixed by adding the closing backtick.

## ⚠️ Known Gaps / TODO
- ❌ Real Clerk auth requires valid CLERK_SECRET_KEY secret (Replit Secret — starts with `sk_test_`)
- ❌ Mobile app is skeleton only (no real screens)
- ❌ Days 8-75 use generated questions only (no handwritten questions)
- ❌ Offline PWA service worker not implemented
- ❌ Push notifications not implemented
- ❌ Writing Lab partially implemented
- ❌ Revision page partially implemented
- ❌ Full Day 1-75 rich content (Days 3-75 use generator fallback, not hand-written lessons)
