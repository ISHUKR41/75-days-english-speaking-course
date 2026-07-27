// ============================================================
// Database Seed - Seeds all 75 days of course content
// Run: npx tsx prisma/seed.ts
// ============================================================
import { PrismaClient } from "@prisma/client";
import { ALL_DAY_1_VOCABULARY } from "../data/vocabulary/day-1-vocabulary";

// Create a fresh Prisma client for seeding
const prisma = new PrismaClient();

// ─── All 75 days data ─────────────────────────────────────────
const DAYS = [
  { n: 1,  title: "Basic of English",                    emoji: "📚", isRevision: false, isMockTest: false, desc: "Start from zero. Learn the alphabet, parts of speech, and basic sentence structure." },
  { n: 2,  title: "Self Introduction",                   emoji: "👋", isRevision: false, isMockTest: false, desc: "Introduce yourself confidently in any situation - casual, professional, or formal." },
  { n: 3,  title: "Imperative Sentence",                 emoji: "💬", isRevision: false, isMockTest: false, desc: "Commands, requests, and instructions. Do this. Don't do that." },
  { n: 4,  title: "Be Verb",                             emoji: "✅", isRevision: false, isMockTest: false, desc: "Master am, is, are, was, were and all their uses in every sentence." },
  { n: 5,  title: "Demonstrative Pronoun",               emoji: "👆", isRevision: false, isMockTest: false, desc: "This, That, These, Those - pointing to things near and far." },
  { n: 6,  title: "Has / Have",                          emoji: "✨", isRevision: false, isMockTest: false, desc: "Express possession and the present perfect tense with Has and Have." },
  { n: 7,  title: "Had",                                 emoji: "📖", isRevision: false, isMockTest: false, desc: "Past possession and past perfect tense mastery." },
  { n: 8,  title: "Will Have",                           emoji: "🔮", isRevision: false, isMockTest: false, desc: "Future perfect tense - actions that will be completed before a future time." },
  { n: 9,  title: "Use of There",                        emoji: "📍", isRevision: false, isMockTest: false, desc: "There is, There are, There was, There were - existence statements." },
  { n: 10, title: "Revision + Practice",                 emoji: "🔄", isRevision: true,  isMockTest: false, desc: "Comprehensive review of Days 1-9 with intensive speaking and writing practice." },
  { n: 11, title: "Use of Want",                         emoji: "🎯", isRevision: false, isMockTest: false, desc: "Express desires, wishes, and needs using Want in the present tense." },
  { n: 12, title: "Use of Wanted",                       emoji: "⏳", isRevision: false, isMockTest: false, desc: "Past desires - things you wanted but may or may not have gotten." },
  { n: 13, title: "Use of Let",                          emoji: "🚀", isRevision: false, isMockTest: false, desc: "Allow, permit, and cause actions - Let him go. Let me help." },
  { n: 14, title: "Use of Let's",                        emoji: "🌟", isRevision: false, isMockTest: false, desc: "Suggestions and invitations - Let's go, Let's try, Let's see." },
  { n: 15, title: "Would Like To",                       emoji: "💫", isRevision: false, isMockTest: false, desc: "Polite requests and preferences - more formal than want." },
  { n: 16, title: "Can",                                 emoji: "💪", isRevision: false, isMockTest: false, desc: "Ability, permission, and possibility - I can speak English." },
  { n: 17, title: "Should",                              emoji: "🤔", isRevision: false, isMockTest: false, desc: "Advice, duty, and expectation - You should study daily." },
  { n: 18, title: "May",                                 emoji: "🌈", isRevision: false, isMockTest: false, desc: "Permission and possibility - May I come in? It may rain." },
  { n: 19, title: "Must",                                emoji: "⚡", isRevision: false, isMockTest: false, desc: "Strong necessity and obligation - You must complete this task." },
  { n: 20, title: "Revision + Speaking Practice",        emoji: "🎤", isRevision: true,  isMockTest: false, desc: "Review modals Can, Should, May, Must with intensive speaking drills." },
  { n: 21, title: "Used To",                             emoji: "🕰️", isRevision: false, isMockTest: false, desc: "Past habits and past states that no longer exist today." },
  { n: 22, title: "Could",                               emoji: "💡", isRevision: false, isMockTest: false, desc: "Past ability, polite requests, and suggestions." },
  { n: 23, title: "Should Have",                         emoji: "🏆", isRevision: false, isMockTest: false, desc: "Past regrets and criticisms - what should have happened." },
  { n: 24, title: "Must Have",                           emoji: "💎", isRevision: false, isMockTest: false, desc: "Logical deduction about the past - It must have been him." },
  { n: 25, title: "Could Have",                          emoji: "🌺", isRevision: false, isMockTest: false, desc: "Past possibilities that didn't actually happen." },
  { n: 26, title: "Would Have",                          emoji: "🎪", isRevision: false, isMockTest: false, desc: "Hypothetical past - what would have happened if..." },
  { n: 27, title: "May Have",                            emoji: "🔑", isRevision: false, isMockTest: false, desc: "Past possibility - It may have happened already." },
  { n: 28, title: "Might Have",                          emoji: "❓", isRevision: false, isMockTest: false, desc: "Weaker past possibility - slight chance something happened." },
  { n: 29, title: "Will / Shall",                        emoji: "⏰", isRevision: false, isMockTest: false, desc: "Future tense - predictions, promises, and planned actions." },
  { n: 30, title: "Would + Ought To + Dare",             emoji: "🎲", isRevision: false, isMockTest: false, desc: "Advanced modal usage for professional communication." },
  { n: 31, title: "Revision",                            emoji: "📝", isRevision: true,  isMockTest: false, desc: "Complete revision of all modal verbs with advanced practice." },
  { n: 32, title: "Tenses Part 1",                       emoji: "⏱️", isRevision: false, isMockTest: false, desc: "Present Simple and Present Continuous - the two most used tenses." },
  { n: 33, title: "Tenses Part 2",                       emoji: "📊", isRevision: false, isMockTest: false, desc: "Present Perfect and Present Perfect Continuous tenses." },
  { n: 34, title: "Tenses Part 3",                       emoji: "🌍", isRevision: false, isMockTest: false, desc: "Past Simple, Past Continuous, Past Perfect tenses." },
  { n: 35, title: "Tenses Part 4",                       emoji: "🎓", isRevision: false, isMockTest: false, desc: "Future tenses: will, going to, and future perfect." },
  { n: 36, title: "Prepositions Part 1",                 emoji: "📌", isRevision: false, isMockTest: false, desc: "In, On, At, By, For, From - place and time prepositions." },
  { n: 37, title: "Prepositions Part 2",                 emoji: "🔗", isRevision: false, isMockTest: false, desc: "With, About, Between, Among, Through - advanced prepositions." },
  { n: 38, title: "Has To / Have To",                    emoji: "🛠️", isRevision: false, isMockTest: false, desc: "Obligation and necessity - I have to go. She has to study." },
  { n: 39, title: "Had To / Will Have To",               emoji: "🔧", isRevision: false, isMockTest: false, desc: "Past and future obligations and necessities." },
  { n: 40, title: "Make / Get",                          emoji: "🔨", isRevision: false, isMockTest: false, desc: "Causative verbs - make someone do, get something done." },
  { n: 41, title: "Going To",                            emoji: "🎯", isRevision: false, isMockTest: false, desc: "Plans and intentions - I am going to study tonight." },
  { n: 42, title: "About To",                            emoji: "🚀", isRevision: false, isMockTest: false, desc: "Immediate future - something about to happen very soon." },
  { n: 43, title: "Want To / Wanted To",                 emoji: "💬", isRevision: false, isMockTest: false, desc: "Desires in present and past with To + verb structure." },
  { n: 44, title: "Need To / Needed To",                 emoji: "🎭", isRevision: false, isMockTest: false, desc: "Necessity and requirement in present and past." },
  { n: 45, title: "Fond Of",                             emoji: "❤️", isRevision: false, isMockTest: false, desc: "Expressing likes and strong interest - I am fond of reading." },
  { n: 46, title: "Able To",                             emoji: "💪", isRevision: false, isMockTest: false, desc: "Ability in different tenses - I am/was/will be able to." },
  { n: 47, title: "Conjunctions",                        emoji: "🔄", isRevision: false, isMockTest: false, desc: "Connecting words: And, But, Or, Because, Although, Unless..." },
  { n: 48, title: "WH Words",                            emoji: "❓", isRevision: false, isMockTest: false, desc: "Question words: What, Where, When, Who, Why, Which, How." },
  { n: 49, title: "Passive Voice Part 1",                emoji: "🗣️", isRevision: false, isMockTest: false, desc: "Converting active to passive - Present and Past tenses." },
  { n: 50, title: "Passive Voice Part 2",                emoji: "🎤", isRevision: false, isMockTest: false, desc: "Advanced passive voice - all tenses and special structures." },
  { n: 51, title: "Advance Level Sentences Part 1",      emoji: "🚀", isRevision: false, isMockTest: false, desc: "Complex and compound sentences for professional communication." },
  { n: 52, title: "Advance Level Sentences Part 2",      emoji: "🌟", isRevision: false, isMockTest: false, desc: "Conditional sentences, relative clauses, and advanced patterns." },
  { n: 53, title: "Verb List",                           emoji: "📋", isRevision: false, isMockTest: false, desc: "500+ essential verbs with all forms, meanings, and examples." },
  { n: 54, title: "Idioms, Phrases & Proverbs",          emoji: "💡", isRevision: false, isMockTest: false, desc: "200+ idioms, common phrases, and powerful proverbs." },
  { n: 55, title: "Important Vocabulary",                emoji: "📚", isRevision: false, isMockTest: false, desc: "Most frequently used words in professional and daily English." },
  { n: 56, title: "Miscellaneous Vocabulary",            emoji: "🌈", isRevision: false, isMockTest: false, desc: "Essential nouns and adjectives for complete expression." },
  { n: 57, title: "Stationery Vocabulary",               emoji: "📎", isRevision: false, isMockTest: false, desc: "Office supplies, writing materials, and stationery terms." },
  { n: 58, title: "Foods Vocabulary & Tastes",           emoji: "🍎", isRevision: false, isMockTest: false, desc: "All food types, cooking methods, tastes, and restaurant vocabulary." },
  { n: 59, title: "Relation & Weather Vocabulary",       emoji: "🌤️", isRevision: false, isMockTest: false, desc: "Family relationships, social terms, and all weather vocabulary." },
  { n: 60, title: "Professions & Occupations",           emoji: "👔", isRevision: false, isMockTest: false, desc: "200+ job titles, work roles, and professional vocabulary." },
  { n: 61, title: "Buildings, Worms & Insects",          emoji: "🏗️", isRevision: false, isMockTest: false, desc: "Architecture, construction, and nature vocabulary." },
  { n: 62, title: "Flowers & Fruits Vocabulary",         emoji: "🌸", isRevision: false, isMockTest: false, desc: "Plants, flowers, fruits, and nature vocabulary." },
  { n: 63, title: "Maths Vocabulary",                    emoji: "➕", isRevision: false, isMockTest: false, desc: "Numbers, calculations, shapes, and mathematics terms." },
  { n: 64, title: "Body & Diseases Vocabulary",          emoji: "💊", isRevision: false, isMockTest: false, desc: "Human body parts, medical terms, and health vocabulary." },
  { n: 65, title: "Industry Vocabulary",                 emoji: "🏭", isRevision: false, isMockTest: false, desc: "Manufacturing, business, and industry-specific terminology." },
  { n: 66, title: "Colours & Judiciary Vocabulary",      emoji: "🎨", isRevision: false, isMockTest: false, desc: "Color names, shades, and legal or judiciary terms." },
  { n: 67, title: "Birds & Astrology Vocabulary",        emoji: "🦅", isRevision: false, isMockTest: false, desc: "Bird names, astronomy, and astrology vocabulary." },
  { n: 68, title: "Factory & Sports + Sound & Maths",   emoji: "⚽", isRevision: false, isMockTest: false, desc: "Industrial, sports, sound, and mathematical vocabulary." },
  { n: 69, title: "Application Writing",                 emoji: "✍️", isRevision: false, isMockTest: false, desc: "Write professional applications for jobs, colleges, and government." },
  { n: 70, title: "Letter Writing",                      emoji: "📬", isRevision: false, isMockTest: false, desc: "Formal and informal letters - structure, tone, and format." },
  { n: 71, title: "E-mail Writing",                      emoji: "📧", isRevision: false, isMockTest: false, desc: "Professional email writing for workplace and formal communication." },
  { n: 72, title: "Paragraph Writing",                   emoji: "📝", isRevision: false, isMockTest: false, desc: "How to write clear, structured, and effective paragraphs." },
  { n: 73, title: "Notice Writing + Writing Skills",     emoji: "📢", isRevision: false, isMockTest: false, desc: "Official notices, circulars, and comprehensive writing practice." },
  { n: 74, title: "Grammar + Vocabulary + Speaking",     emoji: "📚", isRevision: true,  isMockTest: false, desc: "Complete revision of all grammar, vocabulary, and speaking skills." },
  { n: 75, title: "Complete Mock Test + Final Revision", emoji: "✅", isRevision: true,  isMockTest: true,  desc: "Final comprehensive exam covering all 75 days of learning." },
];

// Topics structure for Day 1 and Day 2 (full detail)
// Other days get auto-generated topics
const DAY_TOPICS: Record<number, Array<{
  title: string; description: string; emoji: string; color: string; orderIndex: number;
  subtopics: Array<{ title: string; description: string; emoji: string; orderIndex: number; estimatedMins: number }>;
}>> = {
  1: [
    { title: "Why Learn English?", description: "Why English will change your life and career", emoji: "🌍", color: "#6272f1", orderIndex: 1,
      subtopics: [
        { title: "English - The Global Language", description: "Why English is the world's most important language", emoji: "🌐", orderIndex: 1, estimatedMins: 10 },
        { title: "English in Your Career", description: "How fluent English boosts your job and salary", emoji: "💼", orderIndex: 2, estimatedMins: 10 },
        { title: "How to Learn English Fast", description: "Proven techniques to learn English quickly", emoji: "⚡", orderIndex: 3, estimatedMins: 10 },
      ]
    },
    { title: "The English Alphabet", description: "Master all 26 letters with sounds and pronunciation", emoji: "🔤", color: "#8b5cf6", orderIndex: 2,
      subtopics: [
        { title: "Vowels: A, E, I, O, U", description: "The five most important letters in English", emoji: "🗣️", orderIndex: 1, estimatedMins: 15 },
        { title: "Consonants and Their Sounds", description: "All 21 consonants with correct pronunciation", emoji: "📢", orderIndex: 2, estimatedMins: 20 },
        { title: "Capital vs Lowercase Letters", description: "When to use capital letters - rules and examples", emoji: "⬆️", orderIndex: 3, estimatedMins: 10 },
      ]
    },
    { title: "Parts of Speech Overview", description: "The 8 building blocks of every English sentence", emoji: "🧩", color: "#ec4899", orderIndex: 3,
      subtopics: [
        { title: "Nouns - Names of Everything", description: "Types of nouns and how to use them", emoji: "🏠", orderIndex: 1, estimatedMins: 20 },
        { title: "Verbs - Action Words", description: "Action verbs, helping verbs, and linking verbs", emoji: "🏃", orderIndex: 2, estimatedMins: 20 },
        { title: "Adjectives - Describing Words", description: "How to use adjectives to describe nouns", emoji: "🎨", orderIndex: 3, estimatedMins: 15 },
        { title: "Adverbs, Pronouns & More", description: "The remaining parts of speech explained", emoji: "⚡", orderIndex: 4, estimatedMins: 15 },
      ]
    },
    { title: "Basic Sentence Structure", description: "How every English sentence is built", emoji: "🏗️", color: "#10b981", orderIndex: 4,
      subtopics: [
        { title: "Subject + Verb + Object (SVO)", description: "The fundamental pattern of English sentences", emoji: "📐", orderIndex: 1, estimatedMins: 20 },
        { title: "Positive Sentences", description: "How to make basic affirmative sentences", emoji: "✅", orderIndex: 2, estimatedMins: 15 },
        { title: "Negative Sentences", description: "Adding NOT to make negative sentences correctly", emoji: "❌", orderIndex: 3, estimatedMins: 15 },
        { title: "Question Sentences", description: "How to form questions in English", emoji: "❓", orderIndex: 4, estimatedMins: 20 },
      ]
    },
    { title: "Punctuation Basics", description: "Marks that give meaning to sentences", emoji: "✍️", color: "#f59e0b", orderIndex: 5,
      subtopics: [
        { title: "Full Stop, Comma, Question Mark", description: "The three most important punctuation marks", emoji: "📌", orderIndex: 1, estimatedMins: 15 },
        { title: "Exclamation, Apostrophe & More", description: "Express emotion and show possession correctly", emoji: "❗", orderIndex: 2, estimatedMins: 10 },
      ]
    },
  ],
  2: [
    { title: "Why Self Introduction Matters", description: "First impressions and why introduction is crucial", emoji: "💡", color: "#6272f1", orderIndex: 1,
      subtopics: [
        { title: "The Power of First Impressions", description: "How your introduction shapes how others see you", emoji: "⚡", orderIndex: 1, estimatedMins: 8 },
        { title: "Introduction in Different Situations", description: "Work, college, parties, and interview introductions", emoji: "🎭", orderIndex: 2, estimatedMins: 12 },
      ]
    },
    { title: "Basic Self Introduction", description: "The standard Hello, My name is... formula", emoji: "🤝", color: "#8b5cf6", orderIndex: 2,
      subtopics: [
        { title: "My Name Is... - Basic Formula", description: "The most universal way to introduce yourself", emoji: "📛", orderIndex: 1, estimatedMins: 15 },
        { title: "Telling Your Age and Origin", description: "I am 25 years old. I am from Mumbai.", emoji: "📍", orderIndex: 2, estimatedMins: 15 },
        { title: "Talking About Your Education", description: "I studied in... I completed my degree in...", emoji: "🎓", orderIndex: 3, estimatedMins: 15 },
        { title: "Talking About Your Profession", description: "I work as... I am a software engineer at...", emoji: "💼", orderIndex: 4, estimatedMins: 15 },
        { title: "Hobbies & Interests", description: "In my free time, I love... My hobbies include...", emoji: "🎨", orderIndex: 5, estimatedMins: 15 },
      ]
    },
    { title: "Professional Introduction", description: "Introductions in interviews, meetings, and office", emoji: "👔", color: "#ec4899", orderIndex: 3,
      subtopics: [
        { title: "Job Interview Introduction", description: "Tell me about yourself - the perfect answer", emoji: "🎤", orderIndex: 1, estimatedMins: 20 },
        { title: "Meeting Introduction at Office", description: "How to introduce yourself to a new team", emoji: "🏢", orderIndex: 2, estimatedMins: 15 },
        { title: "Email Introduction", description: "How to introduce yourself via email professionally", emoji: "📧", orderIndex: 3, estimatedMins: 15 },
      ]
    },
    { title: "Responding to Introductions", description: "What to say when others introduce themselves", emoji: "💬", color: "#10b981", orderIndex: 4,
      subtopics: [
        { title: "Nice to Meet You Phrases", description: "All variations: Nice to meet you, Glad to meet you...", emoji: "😊", orderIndex: 1, estimatedMins: 15 },
        { title: "Asking Follow-up Questions", description: "How to keep the conversation going", emoji: "❓", orderIndex: 2, estimatedMins: 15 },
        { title: "Formal vs Informal Greetings", description: "When to use formal and informal language", emoji: "🎭", orderIndex: 3, estimatedMins: 15 },
      ]
    },
    { title: "Personal Pronouns in Introduction", description: "I, you, he, she, we, they - using them correctly", emoji: "👤", color: "#f59e0b", orderIndex: 5,
      subtopics: [
        { title: "Subject Pronouns: I, You, He, She", description: "Basic pronouns and when to use each one", emoji: "👥", orderIndex: 1, estimatedMins: 20 },
        { title: "Possessive Pronouns: My, Your, His, Her", description: "Show ownership - My name, His job, Her hobby", emoji: "🏷️", orderIndex: 2, estimatedMins: 15 },
        { title: "Common Pronoun Mistakes", description: "He vs She, I vs Me, Their vs There explained", emoji: "⚠️", orderIndex: 3, estimatedMins: 15 },
      ]
    },
  ],
};

// Day 1 vocabulary — mapped from full 200-word static file
const DAY1_VOCAB = ALL_DAY_1_VOCABULARY.map((v) => ({
  word: v.word,
  meaning: v.meaning,
  hindiMeaning: v.hindiMeaning,
  ipa: v.ipa ?? null,
  partOfSpeech: v.partOfSpeech,
  difficulty: (v.difficulty as string).toUpperCase(),
  example1: v.example1,
  example2: v.example2,
  example3: v.example3 ?? null,
  officeExample: v.officeExample ?? null,
  dailyExample: v.dailyExample ?? null,
  synonyms: JSON.stringify(v.synonyms ?? []),
  antonyms: JSON.stringify(v.antonyms ?? []),
}));


// Practice questions for Day 1 subtopics
const DAY1_PRACTICE_QUESTIONS = [
  // SVO Structure questions
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "वह स्कूल जाती है। (She _____ to school.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "She goes to school.", explanation: "Subject (She) + Verb (goes) + Object (to school). Singular subject gets 's' on verb.", hindiExplanation: "Subject (She) + Verb (goes) + Object। Present Simple में He/She/It के साथ verb में 's' लगाते हैं।", wordHints: JSON.stringify([{word:"goes",meaning:"जाती है"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "राम खाना खाता है। (Ram _____ food.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "Ram eats food.", explanation: "Ram = singular → eat + s = eats.", hindiExplanation: "Singular subject के साथ eat → eats होता है।", wordHints: JSON.stringify([{word:"eats",meaning:"खाता है"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "बच्चे खेलते हैं। (The children _____.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "The children play.", explanation: "Plural subject - no 's' on verb. Subject + Verb.", hindiExplanation: "Plural subject के साथ verb में 's' नहीं लगता।", wordHints: JSON.stringify([{word:"play",meaning:"खेलते हैं"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "मेरी माँ खाना पकाती हैं। (My mother _____ food.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "My mother cooks food.", explanation: "My mother = She (singular) → cook + s = cooks.", hindiExplanation: "My mother = She → verb को 's' मिलता है → cooks।", wordHints: JSON.stringify([{word:"cooks",meaning:"पकाती हैं"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "वह हर सुबह दौड़ता है। (He _____ every morning.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "He runs every morning.", explanation: "He (singular) + run + s = runs.", hindiExplanation: "He के साथ run में s जोड़कर runs बनाते हैं।", wordHints: JSON.stringify([{word:"runs",meaning:"दौड़ता है"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "वे लोग शहर में रहते हैं। (They _____ in the city.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "They live in the city.", explanation: "They is plural, so 'live' stays without 's'.", hindiExplanation: "They plural है, इसलिए verb में 's' नहीं आएगा।", wordHints: JSON.stringify([{word:"live",meaning:"रहते हैं"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "कुत्ता भौंकता है। (The dog _____.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "The dog barks.", explanation: "The dog = It (singular) → bark + s = barks.", hindiExplanation: "Singular noun के साथ verb में 's' लगता है।", wordHints: JSON.stringify([{word:"barks",meaning:"भौंकता है"}]), points: 10 },
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "हम रोज पढ़ते हैं। (We _____ every day.)", questionType: "FILL_BLANK", difficulty: "BEGINNER", correctAnswer: "We study every day.", explanation: "We is plural - no 's' on verb. Study stays as study.", hindiExplanation: "We plural है, verb में 's' नहीं लगेगा।", wordHints: JSON.stringify([{word:"study",meaning:"पढ़ते हैं"}]), points: 10 },
  // Positive sentences
  { subtopicTitle: "Positive Sentences", questionText: "मैं एक विद्यार्थी हूँ।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "I am a student.", explanation: "I + am (be verb for I) + a + noun.", hindiExplanation: "I के साथ हमेशा 'am' आता है।", wordHints: JSON.stringify([{word:"student",meaning:"विद्यार्थी"}]), points: 10 },
  { subtopicTitle: "Positive Sentences", questionText: "वह एक डॉक्टर है।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "He is a doctor.", explanation: "He + is (be verb for He) + a doctor.", hindiExplanation: "He/She/It के साथ 'is' आता है।", wordHints: JSON.stringify([{word:"doctor",meaning:"डॉक्टर"}]), points: 10 },
  { subtopicTitle: "Positive Sentences", questionText: "हम अच्छे दोस्त हैं।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "We are good friends.", explanation: "We + are (be verb for We) + good friends.", hindiExplanation: "We/You/They के साथ 'are' आता है।", wordHints: JSON.stringify([{word:"friends",meaning:"दोस्त"}]), points: 10 },
  { subtopicTitle: "Positive Sentences", questionText: "आसमान नीला है।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "The sky is blue.", explanation: "The sky (singular) + is + blue.", hindiExplanation: "Singular noun के साथ 'is' आता है।", wordHints: JSON.stringify([{word:"sky",meaning:"आसमान"},{word:"blue",meaning:"नीला"}]), points: 10 },
  { subtopicTitle: "Positive Sentences", questionText: "मेरे पास एक कार है।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "I have a car.", explanation: "I + have + a car. 'Have' for possession with I.", hindiExplanation: "Possession के लिए I के साथ 'have' आता है।", wordHints: JSON.stringify([{word:"have",meaning:"के पास है"}]), points: 10 },
  // Negative sentences
  { subtopicTitle: "Negative Sentences", questionText: "मैं थका हुआ नहीं हूँ।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "I am not tired.", explanation: "I + am + not + tired. Add 'not' after be verb.", hindiExplanation: "Negative बनाने के लिए be verb के बाद 'not' लगाते हैं।", wordHints: JSON.stringify([{word:"tired",meaning:"थका हुआ"}]), points: 10 },
  { subtopicTitle: "Negative Sentences", questionText: "वह ऑफिस नहीं जाती है।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "She does not go to office.", explanation: "She = singular → does not + verb base form.", hindiExplanation: "He/She/It के साथ negative में 'does not' + base form।", wordHints: JSON.stringify([{word:"does not",meaning:"नहीं जाती"}]), points: 10 },
  { subtopicTitle: "Negative Sentences", questionText: "हम मांस नहीं खाते।", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "We do not eat meat.", explanation: "We (plural) + do not + eat (base form).", hindiExplanation: "We/They/I के साथ 'do not' + base form।", wordHints: JSON.stringify([{word:"meat",meaning:"मांस"}]), points: 10 },
  // Question sentences
  { subtopicTitle: "Question Sentences", questionText: "तुम्हारा नाम क्या है?", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "What is your name?", explanation: "WH-word (What) + is + your name?", hindiExplanation: "WH-word + is/are + subject pattern।", wordHints: JSON.stringify([{word:"name",meaning:"नाम"}]), points: 10 },
  { subtopicTitle: "Question Sentences", questionText: "वह कहाँ रहता है?", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "Where does he live?", explanation: "Where + does (singular) + he + live?", hindiExplanation: "He/She/It के साथ question में 'does' आता है।", wordHints: JSON.stringify([{word:"where",meaning:"कहाँ"}]), points: 10 },
  { subtopicTitle: "Question Sentences", questionText: "क्या तुम अंग्रेज़ी बोल सकते हो?", questionType: "TRANSLATION", difficulty: "BEGINNER", correctAnswer: "Can you speak English?", explanation: "Can + you + speak + English?", hindiExplanation: "Can के साथ always base form आता है।", wordHints: JSON.stringify([{word:"can",meaning:"सकना"}]), points: 10 },
  // MCQ questions
  { subtopicTitle: "Subject + Verb + Object (SVO)", questionText: "Which sentence has correct SVO structure?", questionType: "MCQ", difficulty: "BEGINNER", correctAnswer: "She reads books.", explanation: "She (Subject) + reads (Verb) + books (Object) = correct SVO.", hindiExplanation: "She (Subject) + reads (Verb) + books (Object) = सही SVO structure।", optionA: "Books reads she.", optionB: "She reads books.", optionC: "Reads she books.", optionD: "Books she reads.", wordHints: JSON.stringify([]), points: 10 },
];

// ─── Main seed function ───────────────────────────────────────
async function main() {
  console.log("🌱 Seeding 75 Days Hard English Course database...");

  // Clear existing data (for re-seeding)
  await prisma.practiceAnswer.deleteMany();
  await prisma.testAttemptAnswer.deleteMany();
  await prisma.testAttempt.deleteMany();
  await prisma.subtopicProgress.deleteMany();
  await prisma.dayProgress.deleteMany();
  await prisma.practiceQuestion.deleteMany();
  await prisma.testQuestion.deleteMany();
  await prisma.subtopicVocabulary.deleteMany();
  await prisma.subtopicVerb.deleteMany();
  await prisma.subtopicContent.deleteMany();
  await prisma.subtopic.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.dayVocabulary.deleteMany();
  await prisma.day.deleteMany();
  await prisma.userBadge.deleteMany();
  await prisma.badge.deleteMany();
  console.log("🗑️  Cleared old data");

  // Seed all 75 days
  for (const dayMeta of DAYS) {
    const day = await prisma.day.create({
      data: {
        dayNumber: dayMeta.n,
        title: dayMeta.title,
        description: dayMeta.desc,
        emoji: dayMeta.emoji,
        isRevision: dayMeta.isRevision,
        isMockTest: dayMeta.isMockTest,
      },
    });

    // Get topics for this day (custom for days 1-2, auto for rest)
    const topicsData = DAY_TOPICS[dayMeta.n] || [
      {
        title: dayMeta.title,
        description: dayMeta.desc,
        emoji: dayMeta.emoji,
        color: "#6272f1",
        orderIndex: 1,
        subtopics: [
          { title: `Introduction to ${dayMeta.title}`, description: `Complete beginner guide to ${dayMeta.title}`, emoji: "📖", orderIndex: 1, estimatedMins: 20 },
          { title: `${dayMeta.title} - Rules & Examples`, description: `Detailed rules with 30+ real examples`, emoji: "📐", orderIndex: 2, estimatedMins: 25 },
          { title: `${dayMeta.title} - Common Mistakes`, description: `Mistakes to avoid and how to correct them`, emoji: "⚠️", orderIndex: 3, estimatedMins: 15 },
          { title: `${dayMeta.title} - Daily Usage`, description: `How to use this in daily conversation`, emoji: "💬", orderIndex: 4, estimatedMins: 20 },
          { title: `${dayMeta.title} - Office & Professional`, description: `Professional usage in workplace settings`, emoji: "🏢", orderIndex: 5, estimatedMins: 15 },
          { title: `${dayMeta.title} - Practice`, description: `80+ practice questions for mastery`, emoji: "✏️", orderIndex: 6, estimatedMins: 30 },
        ],
      },
    ];

    // Create topics and subtopics
    for (const topicData of topicsData) {
      const topic = await prisma.topic.create({
        data: {
          dayId: day.id,
          title: topicData.title,
          description: topicData.description,
          orderIndex: topicData.orderIndex,
          emoji: topicData.emoji,
          color: topicData.color,
        },
      });

      for (const subtopicData of topicData.subtopics) {
        const subtopic = await prisma.subtopic.create({
          data: {
            topicId: topic.id,
            title: subtopicData.title,
            description: subtopicData.description,
            orderIndex: subtopicData.orderIndex,
            emoji: subtopicData.emoji,
            estimatedMins: subtopicData.estimatedMins,
          },
        });

        // Create content for this subtopic
        await prisma.subtopicContent.create({
          data: {
            subtopicId: subtopic.id,
            whyLearnThis: JSON.stringify({ text: `Understanding ${subtopicData.title} is essential for fluent English communication. This will help you speak clearly in daily life, office, and professional settings.` }),
            conceptExplanation: JSON.stringify({ text: `${subtopicData.title} is a core concept in English grammar. Let us understand it step by step with clear examples.` }),
            simpleExplanation: JSON.stringify({ text: `Simply put: ${subtopicData.description}. Let us look at easy examples to understand this.` }),
            hindiExplanation: JSON.stringify({ text: `${subtopicData.title} को हिंदी में समझें: यह English grammar का एक महत्वपूर्ण भाग है।` }),
            rules: JSON.stringify([`Rule 1: ${subtopicData.title} follows specific patterns`, `Rule 2: Practice daily to master this concept`, `Rule 3: Use in real conversations for fluency`]),
            commonMistakes: JSON.stringify([`Mistake 1: Confusing similar structures`, `Mistake 2: Wrong word order`, `Mistake 3: Missing helper verbs`]),
            speakingTips: JSON.stringify([`Tip 1: Practice out loud daily`, `Tip 2: Record yourself speaking`, `Tip 3: Use mirror practice`]),
            story: JSON.stringify({ title: `A Story Using ${subtopicData.title}`, content: `Priya was learning English. Every day she practiced ${subtopicData.title}. Her teacher said, "Practice makes perfect." Priya worked hard and became fluent.` }),
            summary: JSON.stringify({ text: `Today you learned ${subtopicData.title}. Keep practicing and use it in your daily conversations.` }),
          },
        });

        // Add practice questions for Day 1 subtopics
        if (dayMeta.n === 1) {
          const matchingQs = DAY1_PRACTICE_QUESTIONS.filter(q => q.subtopicTitle === subtopicData.title);
          for (let qi = 0; qi < matchingQs.length; qi++) {
            const q = matchingQs[qi];
            await prisma.practiceQuestion.create({
              data: {
                subtopicId: subtopic.id,
                questionText: q.questionText,
                questionType: q.questionType,
                difficulty: q.difficulty,
                orderIndex: qi,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                hindiExplanation: q.hindiExplanation,
                optionA: (q as any).optionA,
                optionB: (q as any).optionB,
                optionC: (q as any).optionC,
                optionD: (q as any).optionD,
                wordHints: q.wordHints,
                points: q.points,
              },
            });
          }
        }
      }
    }

    // Add vocabulary for Day 1
    if (dayMeta.n === 1) {
      for (const vocab of DAY1_VOCAB) {
        await prisma.dayVocabulary.create({
          data: { dayId: day.id, ...vocab },
        });
      }
    }

    if (dayMeta.n % 10 === 0 || dayMeta.n === 1 || dayMeta.n === 2) {
      console.log(`✅ Day ${dayMeta.n}: ${dayMeta.title} seeded`);
    }
  }

  // Seed achievement badges
  const BADGES = [
    { name: "First Step", description: "Complete Day 1 of the course", emoji: "🎯", category: "MILESTONE", xpReward: 50, coinsReward: 25, condition: JSON.stringify({ type: "day_complete", dayNumber: 1 }) },
    { name: "Week Warrior", description: "Complete 7 days in a row", emoji: "🔥", category: "STREAK", xpReward: 200, coinsReward: 100, condition: JSON.stringify({ type: "streak", days: 7 }) },
    { name: "Vocabulary Master", description: "Learn 1000 new words", emoji: "📚", category: "VOCABULARY", xpReward: 500, coinsReward: 250, condition: JSON.stringify({ type: "words", count: 1000 }) },
    { name: "Perfect Score", description: "Get 100% on any test", emoji: "⭐", category: "PERFECT", xpReward: 300, coinsReward: 150, condition: JSON.stringify({ type: "test_score", percentage: 100 }) },
    { name: "Speed Learner", description: "Complete 5 subtopics in one day", emoji: "⚡", category: "SPEED", xpReward: 150, coinsReward: 75, condition: JSON.stringify({ type: "daily_subtopics", count: 5 }) },
    { name: "Speaking Star", description: "Complete 50 voice practice sessions", emoji: "🎤", category: "SPEAKING", xpReward: 400, coinsReward: 200, condition: JSON.stringify({ type: "voice_sessions", count: 50 }) },
    { name: "Halfway Hero", description: "Complete 37 of 75 days", emoji: "🏃", category: "MILESTONE", xpReward: 1000, coinsReward: 500, condition: JSON.stringify({ type: "day_complete", dayNumber: 37 }) },
    { name: "Course Champion", description: "Complete all 75 days!", emoji: "🏆", category: "MILESTONE", xpReward: 5000, coinsReward: 2500, condition: JSON.stringify({ type: "day_complete", dayNumber: 75 }) },
    { name: "Grammar Guru", description: "Score 90%+ in 10 grammar tests", emoji: "📖", category: "GRAMMAR", xpReward: 600, coinsReward: 300, condition: JSON.stringify({ type: "grammar_tests", count: 10, minScore: 90 }) },
    { name: "Daily Devotee", description: "Log in for 30 consecutive days", emoji: "🌟", category: "STREAK", xpReward: 750, coinsReward: 375, condition: JSON.stringify({ type: "streak", days: 30 }) },
  ];

  for (const badge of BADGES) {
    await prisma.badge.upsert({
      where: { name: badge.name },
      update: {},
      create: badge,
    });
  }
  console.log("🏆 Badges seeded");

  const totalDays = await prisma.day.count();
  const totalTopics = await prisma.topic.count();
  const totalSubtopics = await prisma.subtopic.count();
  const totalVocab = await prisma.dayVocabulary.count();
  const totalQs = await prisma.practiceQuestion.count();

  // Create a database fixture user for local seed data.
  // This record is never used as an authentication bypass.
  await createDevUser();

  console.log("\n✨ Database seeded successfully!");
  console.log(`📅 Days: ${totalDays}/75`);
  console.log(`📚 Topics: ${totalTopics}`);
  console.log(`📖 Subtopics: ${totalSubtopics}`);
  console.log(`📝 Vocabulary words: ${totalVocab}`);
  console.log(`❓ Practice questions: ${totalQs}`);
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

// ─── Create seeded database fixture user ──────────────────────
async function createDevUser() {
  const devClerkId = "dev_user_75days_english";
  await prisma.user.upsert({
    where: { clerkId: devClerkId },
    update: { lastActiveAt: new Date() },
    create: {
      clerkId: devClerkId,
      email: "dev@75daysenglish.com",
      username: "devstudent",
      firstName: "Dev",
      lastName: "Student",
      currentDay: 1,
      totalXp: 0,
      totalCoins: 0,
      level: 1,
      streak: 0,
      longestStreak: 0,
      theme: "DARK",
    },
  });
  console.log("👤 Dev user created/updated");
}
