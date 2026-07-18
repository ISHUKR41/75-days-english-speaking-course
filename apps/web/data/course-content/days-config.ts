// ============================================================
// Course Days Configuration - All 75 days with topics/subtopics
// This is the master course structure for 75 Days Hard English
// ============================================================

// Type definition for a subtopic
export interface SubtopicConfig {
  id: string;           // Unique identifier
  title: string;        // Subtopic name
  description: string;  // Brief description
  emoji: string;        // Visual emoji
  estimatedMins: number; // Time to complete
  orderIndex: number;   // Order within topic
}

// Type definition for a topic
export interface TopicConfig {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;        // Brand color for this topic
  orderIndex: number;
  subtopics: SubtopicConfig[];
}

// Type definition for a day
export interface DayConfig {
  dayNumber: number;
  title: string;
  description: string;
  emoji: string;
  isRevision: boolean;
  isMockTest: boolean;
  topics: TopicConfig[];
}

// ─── Day 1: Basic of English ─────────────────────────────────
const DAY_1: DayConfig = {
  dayNumber: 1,
  title: "Basic of English",
  description: "Start your journey from absolute zero. Learn why English matters, how the language works, and build the foundation for fluent communication.",
  emoji: "📚",
  isRevision: false,
  isMockTest: false,
  topics: [
    {
      id: "d1-t1",
      title: "Why Learn English?",
      description: "Understand the power of English and why it will change your life",
      emoji: "🌍",
      color: "#6272f1",
      orderIndex: 1,
      subtopics: [
        {
          id: "d1-t1-s1",
          title: "English - The Global Language",
          description: "Why English is the world's most important language",
          emoji: "🌐",
          estimatedMins: 10,
          orderIndex: 1,
        },
        {
          id: "d1-t1-s2",
          title: "English in Daily Life",
          description: "How English appears in your everyday world",
          emoji: "☀️",
          estimatedMins: 10,
          orderIndex: 2,
        },
        {
          id: "d1-t1-s3",
          title: "English in Your Career",
          description: "How fluent English boosts your job prospects and salary",
          emoji: "💼",
          estimatedMins: 10,
          orderIndex: 3,
        },
      ],
    },
    {
      id: "d1-t2",
      title: "The English Alphabet",
      description: "Master all 26 letters with sounds, pronunciation, and usage",
      emoji: "🔤",
      color: "#8b5cf6",
      orderIndex: 2,
      subtopics: [
        {
          id: "d1-t2-s1",
          title: "Vowels: A, E, I, O, U",
          description: "The five most important letters in English",
          emoji: "🗣️",
          estimatedMins: 15,
          orderIndex: 1,
        },
        {
          id: "d1-t2-s2",
          title: "Consonants and Their Sounds",
          description: "Learn all 21 consonants with correct pronunciation",
          emoji: "📢",
          estimatedMins: 20,
          orderIndex: 2,
        },
        {
          id: "d1-t2-s3",
          title: "Capital vs Lowercase Letters",
          description: "When to use capital letters - rules and examples",
          emoji: "⬆️",
          estimatedMins: 10,
          orderIndex: 3,
        },
      ],
    },
    {
      id: "d1-t3",
      title: "Parts of Speech Overview",
      description: "The 8 building blocks of every English sentence",
      emoji: "🧩",
      color: "#ec4899",
      orderIndex: 3,
      subtopics: [
        {
          id: "d1-t3-s1",
          title: "What Are Parts of Speech?",
          description: "Introduction to the 8 parts of speech with simple examples",
          emoji: "🎯",
          estimatedMins: 15,
          orderIndex: 1,
        },
        {
          id: "d1-t3-s2",
          title: "Nouns - Names of Everything",
          description: "Learn what nouns are, types of nouns, and how to use them",
          emoji: "🏠",
          estimatedMins: 20,
          orderIndex: 2,
        },
        {
          id: "d1-t3-s3",
          title: "Verbs - Action Words",
          description: "Understanding action verbs, helping verbs, and linking verbs",
          emoji: "🏃",
          estimatedMins: 20,
          orderIndex: 3,
        },
        {
          id: "d1-t3-s4",
          title: "Adjectives - Describing Words",
          description: "How to use adjectives to describe nouns beautifully",
          emoji: "🎨",
          estimatedMins: 15,
          orderIndex: 4,
        },
        {
          id: "d1-t3-s5",
          title: "Adverbs - How, When, Where",
          description: "Modify verbs, adjectives, and other adverbs",
          emoji: "⚡",
          estimatedMins: 15,
          orderIndex: 5,
        },
      ],
    },
    {
      id: "d1-t4",
      title: "Basic Sentence Structure",
      description: "How every English sentence is built from scratch",
      emoji: "🏗️",
      color: "#10b981",
      orderIndex: 4,
      subtopics: [
        {
          id: "d1-t4-s1",
          title: "Subject + Verb + Object (SVO)",
          description: "The fundamental pattern of English sentences",
          emoji: "📐",
          estimatedMins: 20,
          orderIndex: 1,
        },
        {
          id: "d1-t4-s2",
          title: "Positive Sentences",
          description: "How to make basic positive/affirmative sentences",
          emoji: "✅",
          estimatedMins: 15,
          orderIndex: 2,
        },
        {
          id: "d1-t4-s3",
          title: "Negative Sentences",
          description: "Adding NOT to make negative sentences correctly",
          emoji: "❌",
          estimatedMins: 15,
          orderIndex: 3,
        },
        {
          id: "d1-t4-s4",
          title: "Question Sentences",
          description: "How to form questions in English - basic rules",
          emoji: "❓",
          estimatedMins: 20,
          orderIndex: 4,
        },
      ],
    },
    {
      id: "d1-t5",
      title: "Punctuation Basics",
      description: "Dots, commas, and marks that give meaning to sentences",
      emoji: "✍️",
      color: "#f59e0b",
      orderIndex: 5,
      subtopics: [
        {
          id: "d1-t5-s1",
          title: "Full Stop, Comma, Question Mark",
          description: "The three most important punctuation marks",
          emoji: ".",
          estimatedMins: 15,
          orderIndex: 1,
        },
        {
          id: "d1-t5-s2",
          title: "Exclamation Mark & Apostrophe",
          description: "Express emotion and show possession correctly",
          emoji: "!",
          estimatedMins: 10,
          orderIndex: 2,
        },
        {
          id: "d1-t5-s3",
          title: "Quotation Marks and Colon",
          description: "When and how to use quotation marks and colons",
          emoji: "\"\"",
          estimatedMins: 10,
          orderIndex: 3,
        },
      ],
    },
  ],
};

// ─── Day 2: Self Introduction ─────────────────────────────────
const DAY_2: DayConfig = {
  dayNumber: 2,
  title: "Self Introduction",
  description: "Learn how to introduce yourself confidently in any situation - casual, professional, and formal settings.",
  emoji: "👋",
  isRevision: false,
  isMockTest: false,
  topics: [
    {
      id: "d2-t1",
      title: "Why Self Introduction Matters",
      description: "First impressions and why knowing how to introduce yourself is crucial",
      emoji: "💡",
      color: "#6272f1",
      orderIndex: 1,
      subtopics: [
        {
          id: "d2-t1-s1",
          title: "The Power of First Impressions",
          description: "How your introduction shapes how others see you",
          emoji: "⚡",
          estimatedMins: 8,
          orderIndex: 1,
        },
        {
          id: "d2-t1-s2",
          title: "Introduction in Different Situations",
          description: "How introductions differ at work, college, parties, and interviews",
          emoji: "🎭",
          estimatedMins: 12,
          orderIndex: 2,
        },
      ],
    },
    {
      id: "d2-t2",
      title: "Introducing Yourself - Basic",
      description: "The standard Hello, My name is... formula and its variations",
      emoji: "🤝",
      color: "#8b5cf6",
      orderIndex: 2,
      subtopics: [
        {
          id: "d2-t2-s1",
          title: "\"My name is...\" - Basic Formula",
          description: "The most common and universally accepted way to introduce",
          emoji: "📛",
          estimatedMins: 15,
          orderIndex: 1,
        },
        {
          id: "d2-t2-s2",
          title: "Telling Your Age and Origin",
          description: "I am 25 years old. I am from Mumbai. I live in Delhi.",
          emoji: "📍",
          estimatedMins: 15,
          orderIndex: 2,
        },
        {
          id: "d2-t2-s3",
          title: "Talking About Your Education",
          description: "I studied in... I completed my degree in... I am a graduate of...",
          emoji: "🎓",
          estimatedMins: 15,
          orderIndex: 3,
        },
        {
          id: "d2-t2-s4",
          title: "Talking About Your Profession",
          description: "I work as... I am a software engineer at... I run a business...",
          emoji: "💼",
          estimatedMins: 15,
          orderIndex: 4,
        },
        {
          id: "d2-t2-s5",
          title: "Talking About Your Hobbies & Interests",
          description: "In my free time, I love... My hobbies include... I am passionate about...",
          emoji: "🎨",
          estimatedMins: 15,
          orderIndex: 5,
        },
      ],
    },
    {
      id: "d2-t3",
      title: "Professional Self Introduction",
      description: "How to introduce yourself in interviews, meetings, and office settings",
      emoji: "👔",
      color: "#ec4899",
      orderIndex: 3,
      subtopics: [
        {
          id: "d2-t3-s1",
          title: "Job Interview Introduction",
          description: "Tell me about yourself - the perfect answer format",
          emoji: "🎤",
          estimatedMins: 20,
          orderIndex: 1,
        },
        {
          id: "d2-t3-s2",
          title: "Meeting Introduction at Office",
          description: "How to introduce yourself when joining a new team or meeting",
          emoji: "🏢",
          estimatedMins: 15,
          orderIndex: 2,
        },
        {
          id: "d2-t3-s3",
          title: "Email Introduction",
          description: "How to introduce yourself via email professionally",
          emoji: "📧",
          estimatedMins: 15,
          orderIndex: 3,
        },
        {
          id: "d2-t3-s4",
          title: "LinkedIn/Online Introduction",
          description: "Crafting your digital introduction for professional networks",
          emoji: "💻",
          estimatedMins: 15,
          orderIndex: 4,
        },
      ],
    },
    {
      id: "d2-t4",
      title: "Responding to Introductions",
      description: "What to say when others introduce themselves to you",
      emoji: "💬",
      color: "#10b981",
      orderIndex: 4,
      subtopics: [
        {
          id: "d2-t4-s1",
          title: "Nice to Meet You Phrases",
          description: "All the variations: Nice to meet you, Glad to meet you, Pleased to meet you",
          emoji: "😊",
          estimatedMins: 15,
          orderIndex: 1,
        },
        {
          id: "d2-t4-s2",
          title: "Asking Follow-up Questions",
          description: "How to keep the conversation going after introductions",
          emoji: "❓",
          estimatedMins: 15,
          orderIndex: 2,
        },
        {
          id: "d2-t4-s3",
          title: "Formal vs Informal Greetings",
          description: "When to use formal and informal language based on context",
          emoji: "🎭",
          estimatedMins: 15,
          orderIndex: 3,
        },
      ],
    },
    {
      id: "d2-t5",
      title: "Personal Pronouns in Introduction",
      description: "I, you, he, she, we, they - how to use them in self introduction",
      emoji: "👤",
      color: "#f59e0b",
      orderIndex: 5,
      subtopics: [
        {
          id: "d2-t5-s1",
          title: "Subject Pronouns: I, You, He, She",
          description: "The basic pronouns and when to use each one",
          emoji: "👥",
          estimatedMins: 20,
          orderIndex: 1,
        },
        {
          id: "d2-t5-s2",
          title: "Possessive Pronouns: My, Your, His, Her",
          description: "Show ownership and relationships - My name, His job, Her hobby",
          emoji: "🏷️",
          estimatedMins: 15,
          orderIndex: 2,
        },
        {
          id: "d2-t5-s3",
          title: "Common Mistakes in Pronouns",
          description: "He vs She, I vs Me, Their vs There - common errors explained",
          emoji: "⚠️",
          estimatedMins: 15,
          orderIndex: 3,
        },
      ],
    },
  ],
};

// ─── Days 3-75 (abbreviated structure for remaining days) ─────
// Each day follows the same detailed structure as Day 1 and Day 2
// The full content is served dynamically from the database after seeding

const REMAINING_DAYS_META: Omit<DayConfig, "topics">[] = [
  { dayNumber: 3, title: "Imperative Sentence", description: "Learn commands, requests, instructions, and orders in English", emoji: "💬", isRevision: false, isMockTest: false },
  { dayNumber: 4, title: "Be Verb", description: "Master am, is, are, was, were and all their uses", emoji: "✅", isRevision: false, isMockTest: false },
  { dayNumber: 5, title: "Demonstrative Pronoun", description: "This, That, These, Those - pointing to things clearly", emoji: "👆", isRevision: false, isMockTest: false },
  { dayNumber: 6, title: "Has / Have", description: "Express possession and perfect tense with Has and Have", emoji: "✨", isRevision: false, isMockTest: false },
  { dayNumber: 7, title: "Had", description: "Past possession and past perfect tense mastery", emoji: "📖", isRevision: false, isMockTest: false },
  { dayNumber: 8, title: "Will Have", description: "Future perfect tense - actions that will be completed", emoji: "🔮", isRevision: false, isMockTest: false },
  { dayNumber: 9, title: "Use of There", description: "There is, There are, There was, There were - existence statements", emoji: "📍", isRevision: false, isMockTest: false },
  { dayNumber: 10, title: "Revision + Practice", description: "Comprehensive review of Days 1-9 with intensive practice", emoji: "🔄", isRevision: true, isMockTest: false },
  { dayNumber: 11, title: "Use of Want", description: "Express desires, wishes, and needs using Want", emoji: "🎯", isRevision: false, isMockTest: false },
  { dayNumber: 12, title: "Use of Wanted", description: "Past desires - things you wanted but may not have gotten", emoji: "⏳", isRevision: false, isMockTest: false },
  { dayNumber: 13, title: "Use of Let", description: "Allow, permit, and suggest with Let + object + verb", emoji: "🚀", isRevision: false, isMockTest: false },
  { dayNumber: 14, title: "Use of Let's", description: "Suggestions and invitations - Let's go, Let's try, Let's see", emoji: "🌟", isRevision: false, isMockTest: false },
  { dayNumber: 15, title: "Would Like To", description: "Polite requests and preferences - more formal than want", emoji: "💫", isRevision: false, isMockTest: false },
  { dayNumber: 16, title: "Can", description: "Ability, permission, and possibility - I can speak English", emoji: "🎭", isRevision: false, isMockTest: false },
  { dayNumber: 17, title: "Should", description: "Advice, duty, and expectation - You should study daily", emoji: "🤔", isRevision: false, isMockTest: false },
  { dayNumber: 18, title: "May", description: "Permission and possibility - May I come in? It may rain.", emoji: "🌈", isRevision: false, isMockTest: false },
  { dayNumber: 19, title: "Must", description: "Strong necessity and obligation - You must complete this", emoji: "⚡", isRevision: false, isMockTest: false },
  { dayNumber: 20, title: "Revision + Speaking Practice", description: "Review modals Can, Should, May, Must with speaking drills", emoji: "🎤", isRevision: true, isMockTest: false },
  { dayNumber: 21, title: "Used To", description: "Past habits and past states that no longer exist", emoji: "🕰️", isRevision: false, isMockTest: false },
  { dayNumber: 22, title: "Could", description: "Past ability, polite requests, and possibility", emoji: "💡", isRevision: false, isMockTest: false },
  { dayNumber: 23, title: "Should Have", description: "Past regrets and criticisms about what should have happened", emoji: "🏆", isRevision: false, isMockTest: false },
  { dayNumber: 24, title: "Must Have", description: "Logical deduction about the past - It must have been...", emoji: "💎", isRevision: false, isMockTest: false },
  { dayNumber: 25, title: "Could Have", description: "Past possibilities that didn't happen", emoji: "🌺", isRevision: false, isMockTest: false },
  { dayNumber: 26, title: "Would Have", description: "Hypothetical past - what would have happened if...", emoji: "🎪", isRevision: false, isMockTest: false },
  { dayNumber: 27, title: "May Have", description: "Past possibility - It may have happened already", emoji: "🔑", isRevision: false, isMockTest: false },
  { dayNumber: 28, title: "Might Have", description: "Weaker past possibility - slight chance something happened", emoji: "❓", isRevision: false, isMockTest: false },
  { dayNumber: 29, title: "Will / Shall", description: "Future tense - predictions, promises, and planned actions", emoji: "⏰", isRevision: false, isMockTest: false },
  { dayNumber: 30, title: "Would + Ought To + Dare", description: "Advanced modal usage for professional communication", emoji: "🎲", isRevision: false, isMockTest: false },
  { dayNumber: 31, title: "Revision", description: "Complete revision of all modal verbs with advanced practice", emoji: "📝", isRevision: true, isMockTest: false },
  { dayNumber: 32, title: "Tenses Part 1", description: "Present Simple and Present Continuous - the two most used tenses", emoji: "⏱️", isRevision: false, isMockTest: false },
  { dayNumber: 33, title: "Tenses Part 2", description: "Present Perfect and Present Perfect Continuous", emoji: "📊", isRevision: false, isMockTest: false },
  { dayNumber: 34, title: "Tenses Part 3", description: "Past Simple, Past Continuous, Past Perfect", emoji: "🌍", isRevision: false, isMockTest: false },
  { dayNumber: 35, title: "Tenses Part 4", description: "Future tenses: will, going to, and future perfect", emoji: "🎓", isRevision: false, isMockTest: false },
  { dayNumber: 36, title: "Prepositions Part 1", description: "In, On, At, By, For, From - place and time prepositions", emoji: "📌", isRevision: false, isMockTest: false },
  { dayNumber: 37, title: "Prepositions Part 2", description: "Advanced prepositions: With, About, Between, Among, Through", emoji: "🔗", isRevision: false, isMockTest: false },
  { dayNumber: 38, title: "Has To / Have To", description: "Obligation and necessity - must do something", emoji: "🛠️", isRevision: false, isMockTest: false },
  { dayNumber: 39, title: "Had To / Will Have To", description: "Past and future obligations", emoji: "🔧", isRevision: false, isMockTest: false },
  { dayNumber: 40, title: "Make / Get", description: "Causative verbs - make someone do something, get something done", emoji: "🔨", isRevision: false, isMockTest: false },
  { dayNumber: 41, title: "Going To", description: "Plans and intentions - I am going to study tonight", emoji: "🎯", isRevision: false, isMockTest: false },
  { dayNumber: 42, title: "About To", description: "Immediate future - something that is about to happen very soon", emoji: "🚀", isRevision: false, isMockTest: false },
  { dayNumber: 43, title: "Want To / Wanted To", description: "Desires in present and past with To + verb structure", emoji: "💬", isRevision: false, isMockTest: false },
  { dayNumber: 44, title: "Need To / Needed To", description: "Necessity and requirement in present and past", emoji: "🎭", isRevision: false, isMockTest: false },
  { dayNumber: 45, title: "Fond Of", description: "Expressing likes and strong interest - I am fond of...", emoji: "❤️", isRevision: false, isMockTest: false },
  { dayNumber: 46, title: "Able To", description: "Ability - I am able to, I was able to, I will be able to", emoji: "💪", isRevision: false, isMockTest: false },
  { dayNumber: 47, title: "Conjunctions", description: "Connecting words: And, But, Or, Because, Although, Unless...", emoji: "🔄", isRevision: false, isMockTest: false },
  { dayNumber: 48, title: "WH Words", description: "Question words: What, Where, When, Who, Why, Which, How", emoji: "❓", isRevision: false, isMockTest: false },
  { dayNumber: 49, title: "Passive Voice Part 1", description: "Converting active sentences to passive - Present and Past tenses", emoji: "🗣️", isRevision: false, isMockTest: false },
  { dayNumber: 50, title: "Passive Voice Part 2", description: "Advanced passive voice - all tenses and special structures", emoji: "🎤", isRevision: false, isMockTest: false },
  { dayNumber: 51, title: "Advance Level Sentences Part 1", description: "Complex and compound sentences for professional communication", emoji: "🚀", isRevision: false, isMockTest: false },
  { dayNumber: 52, title: "Advance Level Sentences Part 2", description: "Conditional sentences, relative clauses, and advanced patterns", emoji: "🌟", isRevision: false, isMockTest: false },
  { dayNumber: 53, title: "Verb List", description: "500+ essential verbs with all forms, meanings, and examples", emoji: "📋", isRevision: false, isMockTest: false },
  { dayNumber: 54, title: "Idioms, Phrases & Proverbs", description: "Master 200+ idioms, common phrases, and powerful proverbs", emoji: "💡", isRevision: false, isMockTest: false },
  { dayNumber: 55, title: "Important Vocabulary", description: "Most frequently used words in professional and daily English", emoji: "📚", isRevision: false, isMockTest: false },
  { dayNumber: 56, title: "Miscellaneous Vocabulary (Noun + Adjective)", description: "Essential nouns and adjectives for complete expression", emoji: "🌈", isRevision: false, isMockTest: false },
  { dayNumber: 57, title: "Stationery Vocabulary", description: "Office supplies, writing materials, and stationery terms", emoji: "📎", isRevision: false, isMockTest: false },
  { dayNumber: 58, title: "Foods Vocabulary & Tastes", description: "All food types, cooking methods, tastes, and restaurant vocabulary", emoji: "🍎", isRevision: false, isMockTest: false },
  { dayNumber: 59, title: "Relation & Weather Vocabulary", description: "Family relationships, social terms, and all weather vocabulary", emoji: "🌤️", isRevision: false, isMockTest: false },
  { dayNumber: 60, title: "Professions & Occupations Vocabulary", description: "200+ job titles, work roles, and professional vocabulary", emoji: "👔", isRevision: false, isMockTest: false },
  { dayNumber: 61, title: "Buildings, Worms & Insects Vocabulary", description: "Architecture, construction, and nature vocabulary", emoji: "🏗️", isRevision: false, isMockTest: false },
  { dayNumber: 62, title: "Flowers & Fruits Vocabulary", description: "Plants, flowers, fruits, and nature vocabulary", emoji: "🌸", isRevision: false, isMockTest: false },
  { dayNumber: 63, title: "Maths Vocabulary", description: "Numbers, calculations, shapes, and mathematics terms in English", emoji: "➕", isRevision: false, isMockTest: false },
  { dayNumber: 64, title: "Body & Diseases Vocabulary", description: "Human body parts, medical terms, and health vocabulary", emoji: "💊", isRevision: false, isMockTest: false },
  { dayNumber: 65, title: "Industry Vocabulary", description: "Manufacturing, business, and industry-specific terminology", emoji: "🏭", isRevision: false, isMockTest: false },
  { dayNumber: 66, title: "Colours & Judiciary Vocabulary", description: "Color names, shades, and legal/judiciary terms", emoji: "🎨", isRevision: false, isMockTest: false },
  { dayNumber: 67, title: "Birds & Astrology Vocabulary", description: "Bird names, astronomy, and astrology vocabulary", emoji: "🦅", isRevision: false, isMockTest: false },
  { dayNumber: 68, title: "Factory & Sports + Sound & Maths Vocabulary", description: "Industrial, sports, sound, and mathematical vocabulary", emoji: "⚽", isRevision: false, isMockTest: false },
  { dayNumber: 69, title: "Application Writing", description: "Write professional applications for jobs, colleges, and government", emoji: "✍️", isRevision: false, isMockTest: false },
  { dayNumber: 70, title: "Letter Writing", description: "Formal and informal letters - structure, tone, and format", emoji: "📬", isRevision: false, isMockTest: false },
  { dayNumber: 71, title: "E-mail Writing", description: "Professional email writing for workplace and formal communication", emoji: "📧", isRevision: false, isMockTest: false },
  { dayNumber: 72, title: "Paragraph Writing", description: "How to write clear, structured, and effective paragraphs", emoji: "📝", isRevision: false, isMockTest: false },
  { dayNumber: 73, title: "Notice Writing + Writing Skills Practice", description: "Official notices, circulars, and comprehensive writing practice", emoji: "📢", isRevision: false, isMockTest: false },
  { dayNumber: 74, title: "Grammar + Vocabulary + Speaking Full Revision", description: "Complete revision of all grammar, vocabulary, and speaking skills", emoji: "📚", isRevision: true, isMockTest: false },
  { dayNumber: 75, title: "Complete Mock Test + Final Revision", description: "Final comprehensive exam covering all 75 days of learning", emoji: "✅", isRevision: true, isMockTest: true },
];

// ─── Export complete course data ──────────────────────────────

// Build remaining days with placeholder topics (actual content loaded from DB)
const remainingDays: DayConfig[] = REMAINING_DAYS_META.map((meta) => ({
  ...meta,
  topics: [
    {
      id: `d${meta.dayNumber}-t1`,
      title: meta.title,
      description: meta.description,
      emoji: meta.emoji,
      color: "#6272f1",
      orderIndex: 1,
      subtopics: [
        {
          id: `d${meta.dayNumber}-t1-s1`,
          title: `Introduction to ${meta.title}`,
          description: `Complete guide to ${meta.title}`,
          emoji: "📖",
          estimatedMins: 20,
          orderIndex: 1,
        },
        {
          id: `d${meta.dayNumber}-t1-s2`,
          title: `${meta.title} - Rules & Examples`,
          description: `Detailed rules with 20+ examples`,
          emoji: "📐",
          estimatedMins: 25,
          orderIndex: 2,
        },
        {
          id: `d${meta.dayNumber}-t1-s3`,
          title: `${meta.title} - Common Mistakes`,
          description: `Mistakes to avoid and how to fix them`,
          emoji: "⚠️",
          estimatedMins: 15,
          orderIndex: 3,
        },
        {
          id: `d${meta.dayNumber}-t1-s4`,
          title: `${meta.title} - Practice & Exercises`,
          description: `Intensive practice with 80+ questions`,
          emoji: "✏️",
          estimatedMins: 30,
          orderIndex: 4,
        },
      ],
    },
  ],
}));

// The complete array of all 75 days
export const COURSE_DAYS_DATA: DayConfig[] = [
  DAY_1,
  DAY_2,
  ...remainingDays,
];

// Helper to get a specific day by number
export function getDayConfig(dayNumber: number): DayConfig | undefined {
  return COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNumber);
}

// Total count
export const TOTAL_DAYS = 75;
