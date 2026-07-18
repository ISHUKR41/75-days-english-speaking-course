# Contributing to 75 Days Hard English Course

Thank you for your interest in contributing! This project follows a **parallel branch strategy** where each of the 75 days is developed independently.

---

## 🌿 Branch Strategy

Each day has its own dedicated branch: `day-1` through `day-75`.

```
main
├── day-1    (Day 1: Basics of English)
├── day-2    (Day 2: Self Introduction)
├── day-3    (Day 3: Imperative Sentences)
...
└── day-75   (Day 75: Complete Mock Test + Final Revision)
```

### Why separate branches?

- **75 teams** can work in parallel — one team per day
- Prevents merge conflicts between different days
- Each day can be reviewed, tested, and merged independently
- Easy to track progress across the entire curriculum

---

## 🚀 Getting Started as a Contributor

### 1. Fork and clone the repo

```bash
git clone https://github.com/your-org/75-days-english.git
cd 75-days-english
```

### 2. Check out your day's branch

```bash
# For Day 5 content, check out the day-5 branch
git checkout day-5
```

If the branch doesn't exist locally, fetch it from remote:

```bash
git fetch origin day-5
git checkout -b day-5 origin/day-5
```

### 3. Set up the project

```bash
cd apps/web
npm install
cp .env.example .env.local
# Fill in your Clerk keys in .env.local
npm run db:push
npm run db:seed
npm run dev
```

---

## 📋 What to Contribute Per Day

Each day branch should contain:

### Content files (in `/data/`)
- `data/vocabulary/day-XX.ts` — 200+ vocabulary words
- `data/questions/day-XX-questions.ts` — Practice + test questions

### What goes in each day's content

**Vocabulary words** (200+ per day):
```typescript
{
  word: "accomplish",
  meaning: "to successfully complete a task",
  hindiMeaning: "पूरा करना",
  ipa: "/əˈkɒmplɪʃ/",
  partOfSpeech: "verb",
  difficulty: "INTERMEDIATE",
  example1: "She accomplished all her goals this year.",
  example2: "It's hard to accomplish anything without a plan.",
  synonyms: ["achieve", "complete", "fulfill"],
  antonyms: ["fail", "abandon"],
}
```

**Practice questions** (minimum 20 per subtopic):
```typescript
{
  questionText: "She ___ to work every morning.",
  questionType: "FILL_BLANK",
  correctAnswer: "walks",
  explanation: "Present simple tense for daily routines.",
  difficulty: "BEGINNER",
  points: 10,
}
```

---

## 📝 Code Style Guidelines

### TypeScript
- Use `interface` for object types
- Prefer `const` over `let`
- Use explicit return types for functions
- No `any` types unless absolutely necessary

### Components
- All interactive components need `"use client"` directive
- Server components should fetch data and pass it down
- Use the `cn()` utility for conditional Tailwind classes
- Follow the existing Framer Motion animation patterns

### API Routes
- Always wrap in try/catch
- Return `NextResponse.json()` with proper status codes
- Validate input before DB operations
- Use Prisma transactions for multi-step operations

### Naming Conventions
- Files: `kebab-case.ts` / `kebab-case.tsx`
- Components: `PascalCase`
- Functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`

---

## 🔄 Pull Request Process

1. **One PR per day** — Each day-XX branch should have one focused PR
2. **Title format**: `feat(day-XX): Add Day XX - [Day Title]`
3. **Description must include**:
   - Number of vocabulary words added
   - Number of practice questions added
   - Number of test questions added
   - Screenshots if adding new UI components
4. **All tests must pass** before requesting review
5. **Two approvals required** before merging to `main`

### PR Template

```markdown
## Day XX: [Day Title]

### Changes
- [ ] Added XX vocabulary words to `data/vocabulary/day-XX.ts`
- [ ] Added XX practice questions
- [ ] Added XX test questions
- [ ] Updated seed file if needed

### Content Summary
- Topics covered: ...
- Vocabulary focus: ...
- Grammar focus: ...

### Screenshots
(If UI changes)
```

---

## 🌍 Translation Contributions

We welcome translations of:
- Hindi meanings (`hindiMeaning` field)
- Explanations in regional languages
- UI labels for language settings

Currently supported languages: Hindi, Telugu, Tamil, Kannada, Marathi, Gujarati, Bengali

---

## 🐛 Bug Reports

Please use the GitHub Issues tab with the following template:

```markdown
**Describe the bug**
A clear description of what the bug is.

**Day/Route affected**
e.g., Day 5, /api/vocabulary

**Steps to reproduce**
1. Go to '...'
2. Click on '...'

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable.

**Environment**
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Node.js: [e.g., 20.x]
```

---

## 💬 Communication

- **Discussions**: Use GitHub Discussions for questions and ideas
- **Issues**: Use GitHub Issues for bugs and feature requests
- **Branch chat**: Each day-XX branch should have a linked discussion thread

---

## 📊 Day Assignment

| Days | Focus Area |
|------|-----------|
| 1-10 | Basic Grammar & Be Verbs |
| 11-20 | Modal Verbs (Can, Should, May, Must) |
| 21-30 | Perfect Modals & Will/Would |
| 31-40 | Tenses (All 12) |
| 41-50 | Advanced Structures |
| 51-60 | Vocabulary (Thematic) |
| 61-70 | Advanced Vocabulary |
| 71-75 | Writing Skills & Final Tests |

To claim a day, comment on the corresponding GitHub Issue:
`Claiming Day XX - [Your Name]`

---

## ✅ Code of Conduct

- Be respectful and constructive in all interactions
- Help other contributors learn
- English learning is for everyone — keep content inclusive
- No spam, self-promotion, or off-topic discussions

---

Thank you for helping make English learning accessible to everyone! 🙏
