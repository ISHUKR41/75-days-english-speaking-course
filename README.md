# 🇬🇧 75 Days Hard English Course

A full-stack gamified English learning platform built with Next.js 14, Clerk auth, Prisma + SQLite, Zustand, Framer Motion, and Recharts. Designed to take learners from beginner to advanced English in 75 structured days.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-teal?logo=prisma)](https://prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

---

## ✨ Features

- **75 Structured Days** — Topics from Basic English to Advanced Grammar, Vocabulary, and Writing
- **Gamification** — XP, coins, levels, streaks, badges, and leaderboard
- **Speaking Lab** — Web Speech API for pronunciation practice and shadowing
- **Vocabulary Bank** — 200+ words per day with flashcard mode, search, and mastery tracking
- **Mock Tests** — 50-question timed tests with TYPE or SPEAK modes
- **Real-time Progress** — Heatmap streaks, charts, and detailed stats
- **Dark / Light / System Theme** — Full theme support with next-themes
- **Responsive Design** — Works beautifully on mobile and desktop

## 🛠 Tech Stack

| Category       | Technology                        |
|---------------|-----------------------------------|
| Framework     | Next.js 14 (App Router)           |
| Language      | TypeScript 5.6                    |
| Auth          | Clerk                             |
| Database      | SQLite (dev) via Prisma ORM       |
| Styling       | Tailwind CSS + custom design tokens|
| Animation     | Framer Motion                     |
| State         | Zustand (with persist)            |
| Charts        | Recharts                          |
| Icons         | Lucide React                      |
| Forms         | React Hook Form + Zod             |
| Sounds        | Web Audio API (no mp3 files)      |
| Speech        | Web Speech API                    |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A [Clerk](https://clerk.com) account (free tier is fine)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/75-days-english.git
cd 75-days-english/apps/web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

```env
# Database (SQLite for local dev)
DATABASE_URL="file:./dev.db"

# Clerk Auth - get from https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk redirect URLs (optional, defaults shown)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 4. Set up the database

```bash
# Push schema to SQLite
npm run db:push

# Seed the database with all 75 days of content
npm run db:seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
apps/web/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Sign-in / Sign-up pages (Clerk)
│   ├── (main)/             # Protected app pages
│   │   ├── dashboard/      # Main dashboard
│   │   ├── day/[dayNumber] # Daily lesson page
│   │   ├── vocabulary/     # Vocabulary bank
│   │   ├── speaking/       # Speaking lab
│   │   ├── mock-test/      # Mock tests
│   │   ├── leaderboard/    # Leaderboard
│   │   ├── settings/       # User settings
│   │   └── ...
│   ├── api/                # API routes
│   │   ├── days/           # Days CRUD
│   │   ├── progress/       # Progress tracking
│   │   ├── score/          # Score saving
│   │   ├── vocabulary/     # Vocabulary queries
│   │   ├── dashboard/      # Dashboard stats
│   │   ├── user/           # User management
│   │   ├── speech/         # Speech attempts
│   │   └── clerk/webhook/  # Clerk webhook sync
│   └── layout.tsx
├── actions/                # Next.js Server Actions
│   ├── user.ts
│   ├── progress.ts
│   └── score.ts
├── components/             # React components
│   ├── dashboard/
│   ├── vocabulary/
│   ├── speech/
│   ├── leaderboard/
│   ├── mock-test/
│   ├── settings/
│   ├── learning/
│   ├── ui/
│   └── ...
├── hooks/                  # Custom React hooks
│   ├── use-speech-recognition.ts
│   ├── use-sound.ts
│   └── use-progress.ts
├── lib/
│   ├── db.ts               # Prisma client singleton
│   ├── sounds.ts           # Web Audio API sound effects
│   └── utils.ts            # Utility functions
├── prisma/
│   ├── schema.prisma       # Database schema
│   ├── seed.ts             # Seed script (75 days of content)
│   └── dev.db              # SQLite database (gitignored)
├── store/
│   └── use-app-store.ts    # Zustand global store
├── types/
│   └── index.ts            # TypeScript type definitions
└── styles/
    └── globals.css         # Global styles + Tailwind
```

---

## 🗄 Database Schema

The app uses Prisma with SQLite (upgradeable to PostgreSQL). Key models:

- **User** — Clerk-synced users with XP, coins, level, streak
- **Day** — 75 days of course content
- **Topic** — Topics within each day
- **Subtopic** — Sub-sections with vocabulary and questions
- **DayVocabulary** — 200+ words per day
- **PracticeQuestion / TestQuestion** — Questions for practice and tests
- **DayProgress** — Per-user per-day progress tracking
- **Score** — XP/coin transaction history
- **Badge** — Gamification achievements

To explore the database:

```bash
npm run db:studio
```

---

## 🔧 Available Scripts

| Script              | Description                          |
|---------------------|--------------------------------------|
| `npm run dev`       | Start development server on port 3000|
| `npm run build`     | Build for production                 |
| `npm run start`     | Start production server              |
| `npm run lint`      | Run ESLint                           |
| `npm run type-check`| TypeScript type checking             |
| `npm run db:push`   | Push schema changes to SQLite        |
| `npm run db:migrate`| Run Prisma migrations                |
| `npm run db:seed`   | Seed database with course content    |
| `npm run db:studio` | Open Prisma Studio                   |

---

## 🤝 Contributing

We welcome contributions! Each of the 75 days has its own branch for parallel development.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Branch naming convention (day-1 through day-75)
- How to add content for a specific day
- Code style guidelines
- Pull request process

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgements

- [Clerk](https://clerk.com) for authentication
- [Prisma](https://prisma.io) for the ORM
- [Vercel](https://vercel.com) for deployment
- The entire open-source community for the amazing packages that power this app
