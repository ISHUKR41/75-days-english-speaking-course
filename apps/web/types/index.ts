// ============================================================
// TypeScript Types - 75 Days Hard English Course
// Central type definitions for all data models
// ============================================================

// ─── User ────────────────────────────────────────────────────
export interface User {
  id: string;
  clerkId: string;
  email: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  currentDay: number;
  totalXp: number;
  totalCoins: number;
  level: number;
  streak: number;
  longestStreak: number;
  lastActiveAt: Date | string;
  theme: "DARK" | "LIGHT" | "SYSTEM";
  language: string;
  soundEnabled: boolean;
}

// ─── Course Structure ─────────────────────────────────────────
export interface Day {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
  emoji: string;
  isRevision: boolean;
  isMockTest: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  topics?: Topic[];
  _count?: { topics: number };
}

export interface Topic {
  id: string;
  dayId: string;
  title: string;
  description: string;
  orderIndex: number;
  emoji: string;
  color: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  subtopics?: Subtopic[];
}

export interface Subtopic {
  id: string;
  topicId: string;
  title: string;
  description: string;
  orderIndex: number;
  emoji: string;
  estimatedMins: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  content?: SubtopicContent;
  _count?: {
    practiceQs: number;
    testQs: number;
    vocabulary: number;
  };
}

export interface SubtopicContent {
  id: string;
  subtopicId: string;
  whyLearnThis: string;
  conceptExplanation: string;
  simpleExplanation: string;
  hindiExplanation: string;
  rules: string;
  exceptions: string;
  sentencePatterns: string;
  commonMistakes: string;
  advancedMistakes: string;
  speakingTips: string;
  pronunciationGuide: string;
  memoryTricks: string;
  professionalUsage: string;
  dailyUsage: string;
  officeUsage: string;
  interviewUsage: string;
  emailUsage: string;
  businessUsage: string;
  story: string;
  essay: string;
  dialogue: string;
  conversation: string;
  summary: string;
  imageUrls: string;
  videoUrls: string;
}

// ─── Vocabulary ───────────────────────────────────────────────
export interface VocabularyWord {
  id: string;
  dayId?: string;
  subtopicId?: string;
  word: string;
  meaning: string;
  hindiMeaning: string;
  ipa?: string | null;
  partOfSpeech: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  example1: string;
  example2: string;
  example3?: string | null;
  officeExample?: string | null;
  dailyExample?: string | null;
  synonyms: string;
  antonyms: string;
  audioUrl?: string | null;
  createdAt: Date | string;
}

// ─── Questions & Answers ──────────────────────────────────────
export interface PracticeQuestion {
  id: string;
  subtopicId: string;
  questionText: string;
  questionType:
    | "FILL_BLANK"
    | "MCQ"
    | "TRUE_FALSE"
    | "ARRANGE"
    | "SPEAK"
    | "TRANSLATE";
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  orderIndex: number;
  correctAnswer: string;
  explanation: string;
  hindiExplanation?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  wordHints: string;
  tags: string;
  points: number;
  createdAt: Date | string;
}

export interface TestQuestion {
  id: string;
  subtopicId: string;
  questionText: string;
  questionType: "MCQ" | "FILL_BLANK" | "TRUE_FALSE" | "SPEAK" | "TRANSLATE";
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  orderIndex: number;
  correctAnswer: string;
  explanation: string;
  hindiExplanation?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  timeLimit: number;
  points: number;
  tags: string;
  createdAt: Date | string;
}

export interface PracticeAnswer {
  id: string;
  userId: string;
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
  timeTaken?: number | null;
  inputMethod: "TYPED" | "SPOKEN" | "SELECTED";
  speechTranscript?: string | null;
  speechConfidence?: number | null;
  createdAt: Date | string;
}

// ─── Progress ─────────────────────────────────────────────────
export interface Progress {
  id: string;
  userId: string;
  dayId: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  startedAt?: Date | string | null;
  completedAt?: Date | string | null;
  practiceScore: number;
  testScore: number;
  totalXpEarned: number;
  topicsCompleted: number;
  topicsTotal: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  day?: Day;
  subtopicProgress?: SubtopicProgress[];
}

export interface SubtopicProgress {
  id: string;
  userId: string;
  subtopicId: string;
  dayProgressId: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  startedAt?: Date | string | null;
  completedAt?: Date | string | null;
  practiceAttempted: number;
  practiceCorrect: number;
  practiceScore: number;
  testAttempted: number;
  testCorrect: number;
  testScore: number;
  xpEarned: number;
  timeSpentMins: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// ─── Scoring ──────────────────────────────────────────────────
export interface Score {
  id: string;
  userId: string;
  activity: string;
  points: number;
  xp: number;
  coins: number;
  dayId?: string | null;
  subtopicId?: string | null;
  createdAt: Date | string;
}

// ─── Gamification ─────────────────────────────────────────────
export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  imageUrl?: string | null;
  category:
    | "ACHIEVEMENT"
    | "STREAK"
    | "COMPLETION"
    | "SCORE"
    | "SPECIAL";
  xpReward: number;
  coinsReward: number;
  condition: string;
  createdAt: Date | string;
}

export interface UserBadge {
  id: string;
  userId: string;
  badgeId: string;
  earnedAt: Date | string;
  badge?: Badge;
}

// ─── Dashboard ────────────────────────────────────────────────
export interface DashboardStats {
  user: User | null;
  currentDay: number;
  completedDays: number;
  streak: number;
  totalXp: number;
  level: number;
  levelProgress: number;
  todayXp: number;
  weekXp: number;
  accuracy: number;
  wordsLearned: number;
  questionsAnswered: number;
  practiceMinutes: number;
  badges: number;
  rank: number;
  recentProgress: Progress[];
  leaderboard: LeaderboardEntry[];
}

export interface LeaderboardEntry {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string | null;
  totalXp: number;
  level: number;
  streak: number;
  rank?: number;
}

// ─── Speech ──────────────────────────────────────────────────
export interface SpeechAttempt {
  id: string;
  userId: string;
  subtopicId?: string | null;
  questionId?: string | null;
  targetText: string;
  transcript: string;
  confidence: number;
  accuracy: number;
  wordsCorrect: number;
  wordsTotal: number;
  pronunciationScore: number;
  fluencyScore: number;
  feedback?: string | null;
  corrections: string;
  audioUrl?: string | null;
  durationSeconds?: number | null;
  createdAt: Date | string;
}

// ─── Test Attempt ─────────────────────────────────────────────
export interface TestAttempt {
  id: string;
  userId: string;
  subtopicId?: string | null;
  dayId?: string | null;
  testType: "SUBTOPIC" | "DAY" | "MOCK" | "FINAL";
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  score: number;
  maxScore: number;
  percentage: number;
  grade?: string | null;
  timeTaken: number;
  startedAt: Date | string;
  completedAt?: Date | string | null;
  xpEarned: number;
  createdAt: Date | string;
}

// ─── API Response Wrappers ────────────────────────────────────
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
