# 📁 75 Days Hard English Course — Complete File Structure

> **AI Efficiency Note**: Read this file FIRST before exploring the codebase.
> It tells you exactly where every feature lives, saving token usage.
> Update this file whenever new files/folders are added.

---

## 🏗️ Monorepo Root

```
/
├── apps/
│   ├── web/              ← Main Next.js 14 app (PORT 5000)
│   └── mobile/           ← Vite/React mobile app (PORT 5001, skeleton)
├── packages/             ← Shared monorepo packages (placeholders)
├── ROBOT/                ← Reference/robot files
├── English.txt           ← Course requirements & vocabulary reference
├── intro.txt             ← Project intro & requirements
├── FILE_STRUCTURE.md     ← THIS FILE — read first!
├── PROJECT_STRUCTURE.md  ← Detailed project structure doc (legacy)
├── README.md             ← Public-facing README with setup instructions
├── replit.md             ← Replit config + user preferences
├── setup.sh              ← One-shot setup script
├── turbo.json            ← Turborepo configuration
├── package.json          ← Root package.json (workspaces)
└── package-lock.json
```

---

## 🌐 Main Web App: `apps/web/`

### Entry Points & Config

```
apps/web/
├── next.config.mjs           ← Next.js config (port 5000, Replit hosts, audio/SVG)
├── tailwind.config.ts        ← Tailwind config + brand colors + dark mode
├── tsconfig.json             ← TypeScript config (path aliases: @/*)
├── package.json              ← Web app deps (Next.js, Prisma, Clerk, etc.)
└── styles/
    └── globals.css           ← Global CSS (design tokens, dark mode vars, animations)
```

### App Router Structure (`apps/web/app/`)

```
app/
├── layout.tsx                ← Root layout (ThemeProvider, Clerk, QueryProvider)
├── page.tsx                  ← Landing page (redirects to /dashboard if authed)
│
├── (auth)/                   ← Auth group — NO sidebar
│   ├── sign-in/[[...sign-in]]/page.tsx   ← Clerk sign-in page
│   └── sign-up/[[...sign-up]]/page.tsx   ← Clerk sign-up page
│
├── (main)/                   ← Protected group — HAS sidebar
│   ├── layout.tsx            ← Sidebar layout wrapper
│   ├── dashboard/page.tsx    ← Dashboard (XP, streak, quick actions, leaderboard)
│   ├── day/[dayNumber]/
│   │   ├── page.tsx          ← Day overview (topics + subtopics list)
│   │   ├── vocabulary/page.tsx ← Full-day vocabulary page
│   │   └── topic/[topicId]/subtopic/[subtopicId]/
│   │       ├── page.tsx           ← Subtopic hub (Learn / Vocab / Practice / Test cards)
│   │       ├── learn/page.tsx     ← Theory lesson (10 sections: Why, Concept, Rules...)
│   │       ├── vocabulary/page.tsx ← Subtopic vocabulary (200+ words, flashcards)
│   │       ├── practice/
│   │       │   ├── page.tsx           ← Practice page (server wrapper)
│   │       │   └── practice-client.tsx ← Practice client wrapper
│   │       └── test/
│   │           ├── page.tsx           ← Test page (server wrapper)
│   │           └── test-client.tsx    ← Test client wrapper
│   ├── vocabulary/page.tsx   ← Global vocabulary bank
│   ├── progress/page.tsx     ← Progress charts & stats
│   ├── speaking/page.tsx     ← Speaking lab (Web Speech API)
│   ├── writing/page.tsx      ← Writing lab
│   ├── revision/page.tsx     ← Revision sessions
│   ├── leaderboard/page.tsx  ← Leaderboard (top students by XP)
│   ├── mock-test/page.tsx    ← 50-question timed mock test
│   ├── profile/page.tsx      ← User profile (DB-backed real data)
│   └── settings/page.tsx     ← Theme, sound, notification settings
│
└── api/                      ← API routes
    ├── health/route.ts           ← GET /api/health (status check)
    ├── days/route.ts             ← GET /api/days (all days list)
    ├── days/[dayNumber]/route.ts ← GET /api/days/:n (single day)
    ├── dashboard/route.ts        ← GET /api/dashboard (dashboard data)
    ├── user/route.ts             ← GET/POST /api/user
    ├── vocabulary/route.ts       ← GET /api/vocabulary (filterable)
    ├── topics/route.ts           ← GET /api/topics
    ├── subtopics/[subtopicId]/route.ts ← GET /api/subtopics/:id
    ├── practice/route.ts         ← GET /api/practice (questions)
    ├── test/route.ts             ← GET/POST /api/test
    ├── score/route.ts            ← POST /api/score
    ├── speech/route.ts           ← POST /api/speech (speech analysis)
    ├── progress/
    │   ├── route.ts              ← GET /api/progress
    │   ├── save/route.ts         ← POST /api/progress/save ⭐ (critical)
    │   └── sync/route.ts         ← POST /api/progress/sync (mobile)
    ├── mobile/data/route.ts      ← GET /api/mobile/data (sync bridge)
    └── clerk/webhook/route.ts    ← POST /api/clerk/webhook
```

---

### Components (`apps/web/components/`)

```
components/
│
├── landing/                  ← Marketing landing page sections
│   ├── landing-hero.tsx      ← Hero: headline + CTA + stats + floating words
│   ├── landing-navbar.tsx    ← Navbar: logo + links + sign-in/sign-up
│   ├── landing-features.tsx  ← 6 feature cards (gamification, speaking, etc.)
│   ├── landing-curriculum.tsx ← 75-day course overview table
│   ├── landing-testimonials.tsx ← Student testimonials
│   ├── landing-cta.tsx       ← Bottom CTA section
│   └── landing-footer.tsx    ← Footer with links
│
├── dashboard/                ← Dashboard components
│   ├── dashboard-client.tsx  ← Main dashboard client (quick actions, days grid)
│   ├── dashboard-stats.tsx   ← XP/streak/level stat cards
│   ├── dashboard-streak.tsx  ← Heatmap calendar streak
│   ├── dashboard-chart.tsx   ← Recharts XP progress chart
│   └── day-card.tsx          ← Individual day card in the grid
│
├── learning/                 ← Core lesson components
│   ├── day-page-client.tsx   ← Day overview (topics, subtopics, progress)
│   ├── subtopic-overview.tsx ← Section hub: Learn/Vocab/Practice/Test cards
│   ├── subtopic-lesson.tsx   ← Embedded lesson (all 4 sections in one page)
│   ├── learn-page-client.tsx ← Dedicated learn page client wrapper
│   └── lesson-content.tsx    ← THE BIG ONE: theory sections (Why/Concept/Rules/etc.)
│                               Contains: Day1 real content, Day2 generators, Day3-75 generic
│
├── practice/                 ← Practice & Test components
│   ├── practice-section.tsx  ← ⭐ Core practice (Type OR Speak mode, 140+ questions)
│   │                           Loads questions from data files, handles scoring
│   └── test-section.tsx      ← 50-question graded test (same structure as practice)
│
├── vocabulary/               ← Vocabulary components
│   ├── vocabulary-client.tsx ← Global vocabulary bank (filter, search, flashcards)
│   └── vocabulary-section.tsx ← Subtopic vocabulary (200+ words, audio TTS)
│
├── speech/
│   └── speaking-lab.tsx      ← Speaking lab (Web Speech API, pronunciation scoring)
│
├── writing/
│   └── writing-lab-client.tsx ← Writing prompts and submission
│
├── profile/
│   └── profile-client.tsx    ← Profile page (DB-backed: name, XP, badges)
│
├── progress/
│   └── progress-page-client.tsx ← Progress charts (Recharts, heatmap)
│
├── revision/
│   └── revision-client.tsx   ← Revision session component
│
├── mock-test/
│   └── mock-test-client.tsx  ← 50-question timed mock test
│
├── leaderboard/
│   └── leaderboard-client.tsx ← Top students by XP
│
├── settings/
│   └── settings-client.tsx   ← Theme/sound/notification settings (client-only, no SSR!)
│
└── layout/                   ← App shell components
    ├── app-header.tsx         ← Top header (XP, streak, notifications, avatar)
    ├── app-sidebar.tsx        ← Left sidebar (nav, user info, day progress)
    ├── sidebar-mobile-closer.tsx ← Closes sidebar on mobile mount
    ├── mobile-sidebar-backdrop.tsx ← Mobile backdrop
    ├── theme-provider.tsx     ← next-themes provider
    ├── theme-toggle.tsx       ← Dark/light toggle button
    └── query-provider.tsx     ← React Query provider
```

---

### Data Layer (`apps/web/data/`)

```
data/
│
├── course-content/           ← Static course structure (no DB needed)
│   ├── days-config.ts        ← ⭐ MASTER: All 75 days (topicId/subtopicId = static IDs!)
│   │                           IDs like "d1-t1-s1" are used everywhere — DO NOT CHANGE
│   ├── days-3-7-config.ts    ← Days 3-7 detailed topic/subtopic configs (imported by days-config.ts)
│   ├── day-1-content.ts      ← Rich lesson content for Day 1 (gold standard)
│   ├── day-2-content.ts      ← Day 2 lesson content (Self Introduction)
│   ├── days-3-7-config.ts    ← Full DayConfig for Days 3-7 with all subtopics
│   ├── days-3-7-content-extended.ts ← Extended lesson content for Days 3-7 subtopics
│   └── topic-content-map.ts  ← Maps dayNumber → lesson content (used by lesson-content.tsx)
│
├── vocabulary/               ← Vocabulary word banks (unique per day)
│   ├── day-1-vocabulary.ts   ← 200 words (full format with IPA, examples, synonyms)
│   ├── day-2-vocabulary.ts   ← 200 words (Self Introduction vocabulary)
│   ├── day-3-vocabulary.ts   ← 300+ words (Imperative Sentence vocabulary)
│   ├── day-4-vocabulary.ts   ← 300+ words (Be Verb vocabulary)
│   ├── day-5-vocabulary.ts   ← 300+ words (Demonstrative Pronoun vocabulary)
│   ├── day-6-vocabulary.ts   ← 300+ words (Has/Have vocabulary)
│   ├── day-7-vocabulary.ts   ← 300+ words (Had vocabulary)
│   ├── day-8-vocabulary.ts   ← 200+ words (Want/Wanted vocabulary)
│   ├── day-9-vocabulary.ts   ← 200+ words (Let/Let's vocabulary)
│   ├── day-10-vocabulary.ts  ← 200+ words (Would Like To vocabulary)
│   ├── day-11-vocabulary.ts  ← 200+ words (Can vocabulary)
│   ├── day-12-vocabulary.ts  ← 200+ words (Should vocabulary)
│   ├── day-13-vocabulary.ts  ← 200+ words (May/Must vocabulary)
│   ├── day-14-vocabulary.ts  ← 200+ words (Revision Week 2 vocabulary)
│   ├── day-15-vocabulary.ts  ← 200+ words (Used To vocabulary)
│   ├── day-16-vocabulary.ts  ← 200+ words (Could vocabulary)
│   ├── day-17-vocabulary.ts  ← 200+ words (Should Have vocabulary)
│   ├── day-18-vocabulary.ts  ← 200+ words (Must Have vocabulary)
│   ├── day-19-vocabulary.ts  ← 200+ words (Would Have vocabulary)
│   ├── day-20-vocabulary.ts  ← 200+ words (May Have vocabulary)
│   ├── day-21-vocabulary.ts  ← 200+ words (Will/Shall vocabulary)
│   ├── day-22-vocabulary.ts  ← 200+ words (Advanced Modals vocabulary)
│   ├── day-23-vocabulary.ts  ← 200+ words (Complete Modal Revision vocabulary)
│   ├── day-24-vocabulary.ts  ← 200+ words (Present Simple vocabulary)
│   ├── day-25-vocabulary.ts  ← 200+ words (Present Continuous vocabulary)
│   ├── day-26-vocabulary.ts  ← 200+ words (Present Perfect vocabulary)
│   ├── day-27-vocabulary.ts  ← 200+ words (Past Simple vocabulary)
│   ├── day-28-vocabulary.ts  ← 200+ words (Past Continuous vocabulary)
│   ├── day-29-vocabulary.ts  ← 200+ words (Past Perfect vocabulary)
│   ├── day-30-vocabulary.ts  ← 200+ words (Future Tenses vocabulary)
│   └── all-days-vocabulary.ts ← Generator: creates vocabulary for Days 8-75
│
└── questions/                ← Practice & test question banks
    ├── day-1-questions.ts          ← Day 1 core questions (~80+)
    ├── day-1-extended-questions.ts ← Day 1 extra questions (+80)
    ├── day-1-all-subtopics-questions.ts ← Day 1 all-subtopic questions
    ├── day-1-subtopics-questions.ts ← Day 1 subtopic-specific questions
    ├── day-2-questions.ts          ← Day 2 questions (~80+)
    ├── days-3-7-questions.ts       ← Days 3-7 base questions
    ├── days-4-7-extra-questions.ts ← Days 4-7 extra questions (~45/day)
    ├── days-8-14-questions.ts      ← Days 8-14 questions (~60/day, Modal verbs week)
    ├── days-15-22-questions.ts     ← Days 15-22 questions (~60/day, Advanced modals)
    ├── days-23-30-questions.ts     ← Days 23-30 questions (~60/day, All 12 Tenses intro)
    └── question-generator.ts       ← Generates 3 questions/vocab word (Days 8-75 fallback)
```

---

### Library & Utilities (`apps/web/lib/`)

```
lib/
├── safe-auth.ts     ← ⭐ Auth wrapper: Clerk when configured, dev passthrough otherwise
│                       DEV_USER_CLERK_ID = "dev_user_75days_english"
│                       IS_CLERK_CONFIGURED = checks sk_test_/sk_live_ prefix + length > 40
├── db.ts            ← Prisma client singleton
└── utils.ts         ← cn(), getDayColor(), checkAnswer(), playSound()
```

---

### Database (`apps/web/prisma/`)

```
prisma/
├── schema.prisma    ← SQLite schema (User, Day, Topic, Subtopic, Progress, Score, etc.)
├── seed.ts          ← Seeds 75 days, 83 topics, 470 subtopics, badges, dev user
└── dev.db           ← SQLite database (auto-created by workflow, in .gitignore)
```

**Key Schema Models:**
- `User` — clerkId, email, totalXp, level, streak, currentDay
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

### Stores (`apps/web/store/`)

```
store/
└── use-app-store.ts   ← Zustand store (persist to localStorage)
```

---

### Hooks (`apps/web/hooks/`)

```
hooks/
└── (custom React hooks)
```

### Types (`apps/web/types/`)

```
types/
└── (TypeScript interfaces)
```

### Actions (`apps/web/actions/`)

```
actions/
├── progress.ts    ← Server actions for progress
├── score.ts       ← Server actions for scoring
└── user.ts        ← Server actions for user management
```

---

## 🔑 Critical Rules (READ BEFORE EDITING)

### 1. Static Config IDs Are Sacred
```
Topic IDs:    d{day}-t{topic}          e.g., "d1-t1", "d3-t2"
Subtopic IDs: d{day}-t{topic}-s{sub}  e.g., "d1-t1-s1", "d3-t2-s3"
```
These IDs are used in:
- URL paths: `/day/1/topic/d1-t1/subtopic/d1-t1-s1`
- Database: `SubtopicProgress.subtopicId` stores these static IDs
- Progress API: `POST /api/progress/save` accepts these IDs directly
- **NEVER change or rename these IDs** — it breaks progress tracking

### 2. Auth System
- Dev mode (no Clerk): `safe-auth.ts` returns `{ userId: "dev_user_75days_english" }`
- Real auth: Set `CLERK_SECRET_KEY` (must start with `sk_test_` or `sk_live_`, 80+ chars)
- All `/day/*` and `/dashboard` routes check `userId` — redirect to `/sign-in` if null

### 3. Score Model Fields
```typescript
Score { activity, points, xp, coins, dayId, subtopicId }
// NOT: scoreType, score, maxScore, percentage, correct, total
```

### 4. SubtopicProgress.create requires dayProgressId
```typescript
// WRONG: db.subtopicProgress.create({ data: { subtopicId, userId } })
// RIGHT: Upsert DayProgress first → get dayProgressId → then create SubtopicProgress
```

### 5. Settings Page is Client-Only
```typescript
// settings-client.tsx uses dynamic(..., { ssr: false }) — no SSR!
// Zustand + next-themes crash on server render
```

### 6. Progress Save Route (Critical)
```
POST /api/progress/save
Body: { dayNumber, subtopicId (static config ID!), type, score, xpEarned }
```
Uses static subtopicId from request body directly — does NOT look up DB cuid

### 7. Mobile Sync
```
GET /api/mobile/data  ← Used by mobile app to sync all course data
POST /api/progress/sync ← Used by mobile to sync progress
```

### 8. Database Seeding
```bash
cd apps/web && DATABASE_URL='file:./dev.db' npx tsx prisma/seed.ts
```
Seeds: 75 days, 83 topics, 470 subtopics, badges, dev user (currentDay: 1)

---

## 🔄 Workflow

```
Start application:
  npm install (root)
  → cd apps/web
  → DATABASE_URL='file:./dev.db' npx prisma db push
  → npx tsx prisma/seed.ts
  → npm run dev (port 5000)
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.35 | Framework |
| @clerk/nextjs | 5.x | Authentication |
| @prisma/client | 5.22 | SQLite ORM |
| framer-motion | 11.x | Animations |
| gsap | 3.15 | Advanced animations |
| animejs | 3.2 | Animation library |
| lottie-react | 2.4 | Lottie animations |
| three | 0.170 | 3D graphics |
| zustand | 4.x | State management |
| recharts | 2.x | Charts |
| tailwindcss | 3.4 | Styling |
| shadcn/ui | - | UI components |
| react-countup | 6.5 | Animated counters |

---

## 📊 Content Coverage

| Day | Topic | Subtopics | Vocabulary | Questions |
|-----|-------|-----------|------------|-----------|
| 1 | Basic of English | 18 | 200 | 80+ (hand-crafted) |
| 2 | Self Introduction | 17 | 200 | 80+ |
| 3 | Imperative Sentence | 17 | 300+ | 45+ |
| 4 | Be Verb | 17 | 300+ | ~100 |
| 5 | Demonstrative Pronoun | 17 | 300+ | ~82 |
| 6 | Has / Have | 17 | 300+ | ~76 |
| 7 | Had | 17 | 300+ | ~83 |
| 8-75 | Various | ~6/day | Auto-gen | Auto-gen |

---

## 🚀 Adding New Content

### To add vocabulary for a new day:
1. Create `apps/web/data/vocabulary/day-N-vocabulary.ts`
2. Export `DAY_N_VOCABULARY: VocabularyWord[]`
3. Import in `apps/web/data/vocabulary/all-days-vocabulary.ts`

### To add questions for a new day:
1. Create `apps/web/data/questions/day-N-questions.ts`  
2. Export `ALL_DAY_N_QUESTIONS: PracticeQ[]`
3. Import in `apps/web/components/practice/practice-section.tsx`

### To add lesson content for a new day:
1. Add to `apps/web/data/course-content/topic-content-map.ts`
2. The map key is the `dayNumber` (integer)
3. Export from the appropriate content file

---

## 🐛 Known Issues & Fixes Applied

1. **Landing hero invisible** → Fixed: removed opacity-0 initial state in framer-motion
2. **react-countup not in apps/web** → Fixed: installed as direct dep in apps/web
3. **SubtopicProgress needs dayProgressId** → Fixed in `/api/progress/save`
4. **Settings SSR crash** → Fixed: dynamic import with `ssr: false`
5. **Mobile sidebar blocking content** → Fixed: SidebarMobileCloser component
6. **Math.random in SSR** → Fixed: use deterministic formulas
7. **Score model field names** → Fixed: use points/xp not score/maxScore

Last updated: 2026-07-24
