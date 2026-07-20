"use client";
// ============================================================
// Revision Page Client
// Smart revision system: Flashcard review, Quick Quiz,
// Grammar Rules reference, Day-by-day overview
// Design: Linear / Notion inspired premium dark UI
// ============================================================

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Zap,
  Target,
  Star,
  Lightbulb,
  Clock,
  Trophy,
  AlertCircle,
  Volume2,
  List,
  Grid3x3,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Grammar Rules Quick Reference ───────────────────────────
const GRAMMAR_RULES = [
  {
    topic: "Articles (A / An / The)",
    icon: "📗",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    rules: [
      { rule: "Use 'A' before consonant sounds", example: "a book, a university (u sounds like 'you')", hindi: "Consonant sound से पहले 'A'" },
      { rule: "Use 'An' before vowel sounds", example: "an apple, an hour (h is silent)", hindi: "Vowel sound से पहले 'An'" },
      { rule: "Use 'The' for specific things", example: "the sun, the book I gave you", hindi: "Specific चीज़ के लिए 'The'" },
      { rule: "No article before countries, languages, sports", example: "I speak English. She plays cricket.", hindi: "Countries, languages, sports के पहले no article" },
    ],
    commonMistake: "❌ I went to the market to buy the milk. ✅ I went to the market to buy milk.",
  },
  {
    topic: "Tenses Overview",
    icon: "⏰",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    rules: [
      { rule: "Simple Present = daily routine/facts", example: "She works at Google. He speaks French.", hindi: "Daily routine या fact के लिए" },
      { rule: "Present Continuous = happening NOW", example: "She is working right now. I am reading.", hindi: "अभी हो रहा है उसके लिए" },
      { rule: "Simple Past = completed action", example: "He went to Delhi. She called me.", hindi: "Complete हो चुके action के लिए" },
      { rule: "Present Perfect = past action with present relevance", example: "I have visited Paris. She has finished the work.", hindi: "Past action जो अभी भी relevant है" },
    ],
    commonMistake: "❌ I am working here since 2020. ✅ I have been working here since 2020.",
  },
  {
    topic: "Modal Verbs",
    icon: "🔮",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    rules: [
      { rule: "CAN = ability", example: "She can swim. Can you drive?", hindi: "Ability (क्षमता)" },
      { rule: "SHOULD = advice/recommendation", example: "You should sleep early. He should apologize.", hindi: "Advice (सलाह)" },
      { rule: "MUST = strong obligation", example: "You must wear a seatbelt. I must submit the report.", hindi: "Strong obligation (ज़रूरी)" },
      { rule: "MAY = polite permission / possibility", example: "May I come in? It may rain today.", hindi: "Polite permission या possibility" },
      { rule: "WOULD = polite request / past habit", example: "Would you help me? He would walk every morning.", hindi: "Polite request या past habit" },
    ],
    commonMistake: "❌ He must to go. ✅ He must go. (No 'to' after modal verbs)",
  },
  {
    topic: "Prepositions (In / On / At)",
    icon: "📍",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    rules: [
      { rule: "IN: months, years, cities, enclosed spaces", example: "in July, in 2024, in Mumbai, in the room", hindi: "Months, years, cities के लिए" },
      { rule: "ON: days, dates, surfaces", example: "on Monday, on 15th July, on the table", hindi: "Days, dates, surfaces के लिए" },
      { rule: "AT: specific times, specific places", example: "at 9 AM, at the station, at home", hindi: "Specific time या place के लिए" },
    ],
    commonMistake: "❌ I will meet you on Monday at 9 in the morning → ✅ All three used correctly here!",
  },
  {
    topic: "Common Sentence Patterns",
    icon: "🔄",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    rules: [
      { rule: "Subject + Verb + Object (S+V+O)", example: "She reads books. He drinks tea every morning.", hindi: "Basic English sentence structure" },
      { rule: "Subject + Be + Adjective", example: "She is intelligent. The food was delicious.", hindi: "Be verb + adjective" },
      { rule: "There + Be + Subject", example: "There is a problem. There are many students.", hindi: "'There is/are' pattern" },
      { rule: "Subject + Have/Has + Object", example: "She has a car. They have two offices.", hindi: "Possession दिखाने के लिए" },
    ],
    commonMistake: "❌ There is many people. ✅ There are many people. (People = plural → are)",
  },
  {
    topic: "Common Mistakes by Indians",
    icon: "⚠️",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    rules: [
      { rule: "'Myself Rahul' is WRONG", example: "✅ My name is Rahul. / I am Rahul.", hindi: "'Myself' से introduction नहीं देते" },
      { rule: "'Do the needful' — avoid!", example: "✅ Please do what is required. / Please handle this.", hindi: "इसे avoid करें" },
      { rule: "'Revert back' — redundant!", example: "✅ Please revert. (Back is already in 'revert')", hindi: "'Revert' = come back, so 'back' is extra" },
      { rule: "'I am having' for states — wrong!", example: "✅ I have a car. (Not: I am having a car.)", hindi: "State verbs (have, know, like) with continuous = wrong" },
      { rule: "'Kindly do the needful' — outdated!", example: "✅ Please let me know if you need anything.", hindi: "Professional emails में avoid करें" },
    ],
    commonMistake: "❌ I am knowing the answer. ✅ I know the answer.",
  },
];

// ─── Flashcard Data ────────────────────────────────────────────
const FLASHCARDS = [
  // Articles
  { front: "When do you use 'AN' before a word?", back: "Before words that start with a VOWEL SOUND (a, e, i, o, u). Exception: 'an hour' (h is silent) | 'a university' (sounds like 'you')", category: "Articles", hindi: "Vowel sound से शुरू होने वाले words के पहले" },
  { front: "Fill the blank: I am ___ honest person.", back: "AN honest person ✅ (H is silent — 'honest' starts with vowel sound 'o')", category: "Articles", hindi: "H silent है, इसलिए 'an'" },
  { front: "When do we NOT use an article?", back: "Before: Countries (India, France) | Languages (English, Hindi) | Sports (cricket, football) | Meals (breakfast, lunch) | Subjects (Mathematics)", category: "Articles", hindi: "Countries, languages, sports, meals, subjects के पहले no article" },
  // Tenses
  { front: "What tense: 'She has been studying for 2 hours'?", back: "Present Perfect Continuous ✅ | Formula: has/have + been + V-ing | Used for: action that started in past and is still continuing", category: "Tenses", hindi: "Past में शुरू हुआ और अभी भी चल रहा है" },
  { front: "Correct the error: 'He is knowing the answer.'", back: "'I know the answer.' ✅ | STATIVE VERBS (know, have, like, love, hate, want, believe) do NOT use continuous tense", category: "Common Errors", hindi: "State verbs को continuous में use नहीं करते" },
  { front: "What does 'SINCE' vs 'FOR' express?", back: "SINCE = from a specific point in time (since 2020, since Monday) | FOR = duration (for 3 years, for 2 hours)", category: "Tenses", hindi: "Since = specific time से | For = duration (कितने time के लिए)" },
  // Modals
  { front: "What's the difference between MAY and MIGHT?", back: "MAY = more likely possibility (40-60% chance) | MIGHT = less likely possibility (20-40% chance) | Example: It may rain vs It might rain (less likely)", category: "Modals", hindi: "May = ज़्यादा likely | Might = कम likely" },
  { front: "When do you use 'SHOULD HAVE + V3'?", back: "For past advice/regret — something that was advisable but didn't happen. | Example: You should have called me. (But you didn't.) | They should have left earlier.", category: "Modals", hindi: "Past में ऐसा होना चाहिए था लेकिन हुआ नहीं" },
  { front: "Fill: 'You ___ wear a seatbelt. It's the law.'", back: "MUST ✅ | 'Must' shows strong obligation/necessity | 'Should' would be softer — a recommendation, not a law", category: "Modals", hindi: "Law/strong obligation के लिए MUST" },
  // Prepositions
  { front: "IN, ON, or AT? 'I'll see you ___ Monday.'", back: "ON Monday ✅ | Rule: ON + days of the week | ON + specific dates | Example: on 15th July, on your birthday", category: "Prepositions", hindi: "Days के लिए ON" },
  { front: "IN, ON, or AT? 'She lives ___ Mumbai.'", back: "IN Mumbai ✅ | Rule: IN + cities, countries, enclosed spaces | IN + months, years, seasons | Example: in 2024, in January, in India", category: "Prepositions", hindi: "Cities/countries के लिए IN" },
  { front: "IN, ON, or AT? 'Meet me ___ 9 AM.'", back: "AT 9 AM ✅ | Rule: AT + specific times | AT + specific places (the station, home, school) | Example: at noon, at midnight, at the airport", category: "Prepositions", hindi: "Specific time के लिए AT" },
  // Vocabulary
  { front: "What is the difference between 'affect' and 'effect'?", back: "AFFECT (verb) = to influence | Example: The rain affected the match. | EFFECT (noun) = the result | Example: The effect of rain was visible on the pitch.", category: "Vocabulary", hindi: "Affect = verb (influence करना) | Effect = noun (result)" },
  { front: "What does 'Concise' mean? Use in a sentence.", back: "CONCISE = brief and clear, without unnecessary words | Example: Please write a concise report — not more than 2 pages. | Synonym: brief, succinct", category: "Vocabulary", hindi: "Short और clear — unnecessary words के बिना" },
  { front: "Explain 'Paraphrase' with an example.", back: "PARAPHRASE = to restate something in your own words | Original: 'The man left immediately.' | Paraphrase: 'The person departed without any delay.'", category: "Vocabulary", hindi: "किसी बात को अपने words में दोबारा कहना" },
];

// ─── Quick Quiz Data ───────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    question: "Which sentence is correct?",
    options: [
      "She don't know the answer.",
      "She doesn't know the answer.",
      "She didn't knows the answer.",
      "She not know the answer.",
    ],
    correct: 1,
    explanation: "With third person singular (she/he/it) in simple present negative, use 'doesn't' + base verb. 'She doesn't know' ✅",
    category: "Grammar",
  },
  {
    question: "Fill the blank: '_____ your parents allow you to go out at night?'",
    options: ["Do", "Does", "Did", "Are"],
    correct: 0,
    explanation: "'Your parents' is plural, so use 'Do' for question. 'Do your parents...' ✅ | 'Does' is only for he/she/it.",
    category: "Grammar",
  },
  {
    question: "Which is the correct use of 'since' and 'for'?",
    options: [
      "I have worked here since three years.",
      "I have worked here for 2020.",
      "I have worked here since 2020.",
      "I have worked here for since 3 years.",
    ],
    correct: 2,
    explanation: "'Since' + specific point in time (since 2020, since Monday). 'For' + duration (for 3 years, for two hours).",
    category: "Tenses",
  },
  {
    question: "Which sentence uses the Present Perfect correctly?",
    options: [
      "I have went to Paris last year.",
      "I went to Paris last year.",
      "I have gone to Paris last year.",
      "I had went to Paris last year.",
    ],
    correct: 1,
    explanation: "With a specific past time ('last year'), use Simple Past: 'I went'. Present Perfect cannot be used with specific past time words (yesterday, last year, in 2020).",
    category: "Tenses",
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "He must to submit the report by Friday.",
      "He must submitted the report by Friday.",
      "He must submit the report by Friday.",
      "He must submitting the report by Friday.",
    ],
    correct: 2,
    explanation: "After modal verbs (can, must, should, may, will), ALWAYS use the base form (V1) WITHOUT 'to'. 'He must submit' ✅",
    category: "Modals",
  },
  {
    question: "What is the correct article: 'She is ___ honest person.'",
    options: ["a", "an", "the", "No article needed"],
    correct: 1,
    explanation: "'Honest' starts with a vowel SOUND ('o' sound — the 'h' is silent). So use 'AN honest person'. ✅",
    category: "Articles",
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "I am having a car.",
      "I am having many problems.",
      "I have a car.",
      "Both B and C",
    ],
    correct: 3,
    explanation: "Stative verbs (have, know, like) DON'T usually use continuous. But 'I am having many problems' = 'experiencing problems' — this use IS acceptable. 'I have a car' for possession = correct. ✅",
    category: "Common Errors",
  },
  {
    question: "Choose the correct preposition: 'The meeting is ___ 3 PM.'",
    options: ["in", "on", "at", "by"],
    correct: 2,
    explanation: "AT + specific time. 'The meeting is AT 3 PM.' ✅ | IN = months/years/cities | ON = days/dates | BY = deadline",
    category: "Prepositions",
  },
  {
    question: "Identify the error: 'He is more better at English than me.'",
    options: [
      "'He is' should be 'He are'",
      "'more better' is wrong — should be just 'better'",
      "'than me' should be 'than I'",
      "No error",
    ],
    correct: 1,
    explanation: "'More better' is WRONG — it's a double comparative. Say 'better' (comparative of good) OR 'more good' — never both. ✅ 'He is better at English than me.'",
    category: "Common Errors",
  },
  {
    question: "Which is the correct passive voice of 'She wrote the letter'?",
    options: [
      "The letter was written by she.",
      "The letter was written by her.",
      "The letter is written by her.",
      "The letter written by her.",
    ],
    correct: 1,
    explanation: "In passive voice, the object becomes subject. 'She' → 'her' (object pronoun). ✅ 'The letter was written by her.' (Simple Past Passive = was/were + V3)",
    category: "Grammar",
  },
];

type ViewMode = "overview" | "flashcards" | "quiz" | "grammar";

interface RevisionClientProps {
  userId: string;
}

export function RevisionClient({ userId }: RevisionClientProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Set<number>>(new Set());
  const [categoryFilter, setCategoryFilter] = useState("All");
  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<boolean[]>([]);
  const [quizDone, setQuizDone] = useState(false);
  // Grammar rule accordion
  const [openRule, setOpenRule] = useState<number | null>(null);

  const flashcardCategories = ["All", ...Array.from(new Set(FLASHCARDS.map((c) => c.category)))];
  const filteredCards =
    categoryFilter === "All"
      ? FLASHCARDS
      : FLASHCARDS.filter((c) => c.category === categoryFilter);
  const currentCard = filteredCards[cardIndex] || FLASHCARDS[0];
  const currentQuestion = QUIZ_QUESTIONS[quizIndex];

  const speakText = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "en-US";
    utt.rate = 0.85;
    window.speechSynthesis.speak(utt);
  };

  const handleFlashcardNext = () => {
    setFlipped(false);
    setTimeout(() => setCardIndex((i) => (i + 1) % filteredCards.length), 150);
  };

  const handleFlashcardPrev = () => {
    setFlipped(false);
    setTimeout(() => setCardIndex((i) => (i - 1 + filteredCards.length) % filteredCards.length), 150);
  };

  const handleMastered = () => {
    setMasteredCards((prev) => new Set([...prev, cardIndex]));
    handleFlashcardNext();
  };

  const handleQuizAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correct;
    setQuizResults((prev) => [...prev, isCorrect]);
  };

  const handleQuizNext = () => {
    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setQuizDone(true);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizResults([]);
    setQuizDone(false);
  };

  const MODE_TABS = [
    { id: "overview" as ViewMode, label: "Overview", icon: Grid3x3 },
    { id: "flashcards" as ViewMode, label: "Flashcards", icon: BookOpen },
    { id: "quiz" as ViewMode, label: "Quick Quiz", icon: Brain },
    { id: "grammar" as ViewMode, label: "Grammar Rules", icon: List },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-3">
          🔄 Revision Center
        </h1>
        <p className="text-muted-foreground mt-1">
          Review, reinforce, and master everything you've learned so far
        </p>
      </motion.div>

      {/* Mode Tabs */}
      <div className="flex gap-1 rounded-xl border border-border bg-muted/30 p-1 overflow-x-auto">
        {MODE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setViewMode(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap flex-1",
              viewMode === tab.id
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-4 w-4 shrink-0" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW MODE ─── */}
      <AnimatePresence mode="wait">
        {viewMode === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Flashcards", value: FLASHCARDS.length, icon: "📚", color: "text-primary" },
                { label: "Quiz Questions", value: QUIZ_QUESTIONS.length, icon: "🧠", color: "text-purple-400" },
                { label: "Grammar Topics", value: GRAMMAR_RULES.length, icon: "📖", color: "text-blue-400" },
                { label: "Mastered Cards", value: masteredCards.size, icon: "⭐", color: "text-gold-400" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center">
                  <p className="text-3xl mb-1">{s.icon}</p>
                  <p className={cn("text-2xl font-black", s.color)}>{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Quick access cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  mode: "flashcards" as ViewMode,
                  title: "Flashcard Review",
                  desc: `${FLASHCARDS.length} cards across 5 topics — flip to reveal answers`,
                  icon: BookOpen,
                  gradient: "from-primary/20 to-purple-500/10",
                  border: "border-primary/20",
                  iconColor: "text-primary",
                },
                {
                  mode: "quiz" as ViewMode,
                  title: "Quick Quiz",
                  desc: `${QUIZ_QUESTIONS.length} MCQ questions — test your knowledge instantly`,
                  icon: Brain,
                  gradient: "from-emerald-500/20 to-teal-500/10",
                  border: "border-emerald-500/20",
                  iconColor: "text-emerald-400",
                },
                {
                  mode: "grammar" as ViewMode,
                  title: "Grammar Reference",
                  desc: `${GRAMMAR_RULES.length} grammar topics with rules, examples, and common mistakes`,
                  icon: BookOpen,
                  gradient: "from-amber-500/20 to-orange-500/10",
                  border: "border-amber-500/20",
                  iconColor: "text-amber-400",
                },
              ].map((card) => (
                <motion.button
                  key={card.mode}
                  whileHover={{ y: -4, scale: 1.01 }}
                  onClick={() => setViewMode(card.mode)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-all hover:shadow-lg",
                    card.border,
                    `bg-gradient-to-br ${card.gradient}`
                  )}
                >
                  <card.icon className={cn("h-8 w-8 mb-3", card.iconColor)} />
                  <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {card.desc}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary">
                    Start <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Study tips */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-amber-400" />
                <p className="font-semibold text-foreground">Revision Strategy</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { step: "1", text: "Start with Flashcards — flip every card and speak the answer out loud" },
                  { step: "2", text: "Take the Quick Quiz without looking at notes — pure recall" },
                  { step: "3", text: "Review Grammar Rules for any topic you got wrong in the quiz" },
                  { step: "4", text: "Repeat daily — 15 minutes of revision beats 3 hours once a week" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs shrink-0">
                      {s.step}
                    </span>
                    <span className="text-foreground/80">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── FLASHCARDS MODE ─── */}
        {viewMode === "flashcards" && (
          <motion.div
            key="flashcards"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-5"
          >
            {/* Category filter */}
            <div className="flex gap-2 flex-wrap">
              {flashcardCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategoryFilter(cat); setCardIndex(0); setFlipped(false); }}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium border transition-all",
                    categoryFilter === cat
                      ? "bg-primary text-white border-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{cardIndex + 1} / {filteredCards.length} cards</span>
              <span className="text-emerald-400 font-medium">
                {masteredCards.size} mastered ⭐
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                animate={{ width: `${((cardIndex + 1) / filteredCards.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Flashcard */}
            <div className="perspective-1000" style={{ perspective: "1200px" }}>
              <motion.div
                className="relative h-64 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                onClick={() => setFlipped((f) => !f)}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-purple-500/5 p-6 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-primary/10">
                    {currentCard.category}
                  </span>
                  <p className="text-xl font-bold text-foreground leading-tight">
                    {currentCard.front}
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    👆 Tap to reveal answer
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-6 flex flex-col items-start justify-center overflow-auto"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-sm font-bold text-foreground leading-relaxed mb-3">
                    {currentCard.back}
                  </p>
                  {currentCard.hindi && (
                    <div className="mt-auto pt-3 border-t border-emerald-500/20 w-full">
                      <p className="text-xs text-emerald-400 font-medium">🇮🇳 Hindi:</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{currentCard.hindi}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleFlashcardPrev}
                className="btn-secondary p-3 rounded-xl"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 flex gap-2">
                <button
                  onClick={handleMastered}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 py-3 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Got it! ⭐
                </button>
                <button
                  onClick={() => { speakText(currentCard.front); }}
                  className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  title="Listen"
                >
                  <Volume2 className="h-5 w-5" />
                </button>
              </div>

              <button
                onClick={handleFlashcardNext}
                className="btn-secondary p-3 rounded-xl"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Tap the card to flip • Mark cards you know • Come back to the rest
            </p>
          </motion.div>
        )}

        {/* ── QUIZ MODE ─── */}
        {viewMode === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-5"
          >
            {quizDone ? (
              // ── Quiz Results ──
              <div className="space-y-5">
                <div className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="text-5xl mb-4">
                    {quizResults.filter(Boolean).length >= 8 ? "🏆" : quizResults.filter(Boolean).length >= 6 ? "⭐" : "💪"}
                  </div>
                  <p className="text-3xl font-black text-foreground mb-2">
                    {quizResults.filter(Boolean).length} / {QUIZ_QUESTIONS.length}
                  </p>
                  <p className="text-muted-foreground mb-1">
                    {Math.round((quizResults.filter(Boolean).length / QUIZ_QUESTIONS.length) * 100)}% Accuracy
                  </p>
                  <p className="text-sm font-medium text-foreground mt-4">
                    {quizResults.filter(Boolean).length >= 8
                      ? "Excellent! You've mastered these concepts! 🌟"
                      : quizResults.filter(Boolean).length >= 6
                      ? "Good work! Review the Grammar Rules section for weak areas."
                      : "Keep going! Review Flashcards and try again."}
                  </p>
                </div>

                {/* Per-question results */}
                <div className="space-y-2">
                  {QUIZ_QUESTIONS.map((q, i) => (
                    <div
                      key={i}
                      className={cn(
                        "rounded-xl border p-3 flex items-center gap-3 text-sm",
                        quizResults[i]
                          ? "border-emerald-500/20 bg-emerald-500/5"
                          : "border-red-500/20 bg-red-500/5"
                      )}
                    >
                      {quizResults[i] ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                      )}
                      <span className="text-xs font-medium text-muted-foreground shrink-0">
                        {q.category}
                      </span>
                      <span className="text-foreground/90 truncate">{q.question}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={resetQuiz}
                  className="btn-primary w-full py-3"
                >
                  <RotateCcw className="h-4 w-4" />
                  Retake Quiz
                </button>
              </div>
            ) : (
              // ── Quiz Question ──
              <>
                {/* Progress */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {currentQuestion.category}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                    animate={{ width: `${((quizIndex) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-lg font-bold text-foreground leading-snug">
                    {currentQuestion.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQuestion.options.map((option, i) => {
                    const isSelected = selectedAnswer === i;
                    const isCorrect = i === currentQuestion.correct;
                    const showResult = selectedAnswer !== null;

                    return (
                      <motion.button
                        key={i}
                        whileHover={!showResult ? { scale: 1.01 } : {}}
                        onClick={() => handleQuizAnswer(i)}
                        disabled={showResult}
                        className={cn(
                          "w-full rounded-xl border p-4 text-left text-sm transition-all",
                          !showResult && "hover:border-primary/50 hover:bg-primary/5 border-border bg-card",
                          showResult && isCorrect && "border-emerald-500/50 bg-emerald-500/10 text-emerald-300",
                          showResult && isSelected && !isCorrect && "border-red-500/50 bg-red-500/10 text-red-300",
                          showResult && !isSelected && !isCorrect && "border-border bg-card opacity-50",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shrink-0",
                              !showResult && "bg-muted text-muted-foreground",
                              showResult && isCorrect && "bg-emerald-500/20 text-emerald-400",
                              showResult && isSelected && !isCorrect && "bg-red-500/20 text-red-400",
                              showResult && !isSelected && !isCorrect && "bg-muted text-muted-foreground",
                            )}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="leading-snug">{option}</span>
                          {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-400 ml-auto" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-red-400 ml-auto" />}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {selectedAnswer !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "rounded-xl border p-4",
                        selectedAnswer === currentQuestion.correct
                          ? "border-emerald-500/30 bg-emerald-500/5"
                          : "border-orange-500/30 bg-orange-500/5"
                      )}
                    >
                      <p className="text-sm font-semibold mb-1">
                        {selectedAnswer === currentQuestion.correct ? "✅ Correct!" : "❌ Not quite — here's why:"}
                      </p>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selectedAnswer !== null && (
                  <button
                    onClick={handleQuizNext}
                    className="btn-primary w-full py-3"
                  >
                    {quizIndex < QUIZ_QUESTIONS.length - 1 ? (
                      <>Next Question <ChevronRight className="h-4 w-4" /></>
                    ) : (
                      <>See Results <Trophy className="h-4 w-4" /></>
                    )}
                  </button>
                )}
              </>
            )}
          </motion.div>
        )}

        {/* ── GRAMMAR RULES MODE ─── */}
        {viewMode === "grammar" && (
          <motion.div
            key="grammar"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-3"
          >
            <p className="text-sm text-muted-foreground">
              Click any topic to expand the full rules, examples, and common mistakes.
            </p>

            {GRAMMAR_RULES.map((rule, i) => (
              <motion.div
                key={rule.topic}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenRule(openRule === i ? null : i)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-accent/50 transition-colors"
                >
                  <span className={cn("text-xl w-8 h-8 flex items-center justify-center rounded-xl shrink-0", rule.bg)}>
                    {rule.icon}
                  </span>
                  <span className="flex-1 font-semibold text-foreground">{rule.topic}</span>
                  <span className="text-muted-foreground text-xs mr-2">
                    {rule.rules.length} rules
                  </span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform shrink-0",
                      openRule === i && "rotate-90"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openRule === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-border pt-4 space-y-3">
                        {rule.rules.map((r, j) => (
                          <div key={j} className="rounded-xl bg-muted/30 p-3">
                            <div className="flex items-start gap-2 mb-1">
                              <span className={cn("font-bold text-sm shrink-0", rule.color)}>
                                Rule {j + 1}:
                              </span>
                              <span className="text-sm font-medium text-foreground">
                                {r.rule}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground ml-14 mb-1">
                              📌 {r.example}
                            </p>
                            <p className="text-xs text-foreground/60 ml-14">
                              🇮🇳 {r.hindi}
                            </p>
                          </div>
                        ))}

                        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
                          <p className="text-xs font-semibold text-red-400 mb-1">⚠️ Common Mistake:</p>
                          <p className="text-xs text-foreground/90">{rule.commonMistake}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
