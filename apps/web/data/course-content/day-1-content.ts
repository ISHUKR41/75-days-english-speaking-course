// ============================================================
// Day 1 Complete Content - "Basic of English"
// Full lesson content for every subtopic of Day 1
// Includes: theory, examples, rules, common mistakes, tips,
// memory tricks, professional usage, daily usage, stories, etc.
// ============================================================

// ─── Types for lesson content ─────────────────────────────────
// Every subtopic follows this exact structure for consistency
export interface LessonContent {
  // Unique identifier for this lesson
  id: string;
  // Which subtopic this content belongs to
  subtopicId: string;
  // Why we are learning this topic (motivation + context)
  whyLearnThis: string;
  // Full concept explanation (teacher-like, friendly tone)
  conceptExplanation: string;
  // Very simple explanation for absolute beginners
  simpleExplanation: string;
  // Hindi explanation for better understanding
  hindiExplanation: string;
  // Grammar rules with exceptions
  rules: RuleItem[];
  // Common mistakes students make
  commonMistakes: MistakeItem[];
  // Sentence patterns with 20-35 examples
  sentencePatterns: SentencePattern[];
  // Speaking and pronunciation tips
  speakingTips: string[];
  // Memory tricks and mnemonics
  memoryTricks: string[];
  // How to use this in professional settings
  professionalUsage: UsageExample[];
  // How to use in daily life
  dailyUsage: UsageExample[];
  // How to use in office settings
  officeUsage: UsageExample[];
  // How to use in job interviews
  interviewUsage: UsageExample[];
  // A short story using concepts learned
  story: StoryContent;
  // An essay using concepts learned
  essay: EssayContent;
  // A dialogue between two people
  dialogue: DialogueContent;
  // Summary of the entire lesson
  summary: string[];
}

// A grammar rule with explanation and exceptions
export interface RuleItem {
  // The rule title
  rule: string;
  // Detailed explanation of the rule
  explanation: string;
  // Example showing the rule
  example: string;
  // Any exceptions to this rule
  exception?: string;
}

// A common mistake with correction
export interface MistakeItem {
  // The wrong way (what students usually say)
  wrong: string;
  // The correct way
  correct: string;
  // Why it's wrong and how to remember the correct form
  explanation: string;
}

// A sentence pattern with multiple examples
export interface SentencePattern {
  // The pattern name (e.g., "Subject + Verb + Object")
  pattern: string;
  // Hindi translation of the pattern
  hindiPattern: string;
  // Multiple example sentences
  examples: { english: string; hindi: string }[];
}

// Usage example for different contexts
export interface UsageExample {
  // The situation or context
  situation: string;
  // The English sentence
  english: string;
  // Hindi translation
  hindi: string;
  // Additional notes or tips
  tip?: string;
}

// Story content
export interface StoryContent {
  // Story title
  title: string;
  // The story text (using only learned concepts)
  paragraphs: string[];
  // Moral or lesson from the story
  moral: string;
  // Key vocabulary from the story
  keyWords: { word: string; meaning: string }[];
}

// Essay content
export interface EssayContent {
  // Essay title
  title: string;
  // Essay paragraphs
  paragraphs: string[];
  // Key points summarized
  keyPoints: string[];
}

// Dialogue content
export interface DialogueContent {
  // Title describing the situation
  title: string;
  // Context/setting of the dialogue
  setting: string;
  // The dialogue lines
  lines: { speaker: string; text: string; hindi: string }[];
  // Cultural or language notes
  notes: string[];
}

// ============================================================
// SUBTOPIC 1: Why Learn English?
// ============================================================
export const SUBTOPIC_1_WHY_LEARN: LessonContent = {
  id: "d1-s1-why-learn",
  subtopicId: "d1-t1-s1",

  // ── Why are we learning this? ──
  whyLearnThis: `English is the most widely spoken language in the world. Over 1.5 billion people speak English globally. It is the official language of business, technology, science, and the internet. Whether you want to get a better job, travel abroad, study at a top university, or simply communicate with people from different countries — English is your key.

In India, English is essential for:
• Getting jobs in IT companies, MNCs, and startups
• Communicating with colleagues in offices
• Writing emails and reports
• Attending meetings and presentations
• Cracking interviews
• Using the internet and technology
• Understanding movies, music, and content
• Building confidence in social situations

This course will take you from knowing ZERO English to speaking FLUENTLY in just 75 days. Every day, you will learn new words, practice grammar, and build your speaking skills step by step.

Don't worry if you don't know anything right now. We start from the absolute basics. By the end of Day 1, you will already be able to form simple English sentences!`,

  // ── Full concept explanation ──
  conceptExplanation: `Let's understand what English actually is and how it works.

English is a language — just like Hindi, Tamil, Telugu, or Bengali. The only difference is that English uses the Roman alphabet (A, B, C, D...) instead of Devanagari (अ, आ, इ, ई...).

English has some basic building blocks:

1. ALPHABET — English has 26 letters (A to Z)
   - 5 vowels: A, E, I, O, U
   - 21 consonants: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z

2. WORDS — Letters combine to form words
   - Example: C + A + T = CAT (बिल्ली)
   - Example: B + O + O + K = BOOK (किताब)

3. SENTENCES — Words combine to form sentences
   - Example: "I read a book." (मैं किताब पढ़ता हूँ।)
   - Example: "She goes to school." (वह स्कूल जाती है।)

4. GRAMMAR — Rules that tell us how to arrange words correctly
   - "I am a student." ✅ (Correct)
   - "Am I student a." ❌ (Wrong — grammar rules broken)

Every sentence in English follows a basic pattern:
SUBJECT + VERB + OBJECT (SVO)

Subject = Who is doing the action (I, He, She, We, They)
Verb = The action word (go, eat, read, write, play)
Object = What the action is done to (book, food, school)

Example:
"I eat food." → I (subject) + eat (verb) + food (object)
"She reads a book." → She (subject) + reads (verb) + a book (object)`,

  // ── Simple explanation ──
  simpleExplanation: `Think of English like building with LEGO blocks.

Letters are the smallest blocks → A, B, C...
Words are made by joining letters → C-A-T = CAT
Sentences are made by joining words → "The cat is big."

The most important rule is: WHO + DOES WHAT + TO WHAT
In English, we call this: Subject + Verb + Object

"I eat rice." 
I = who (Subject)
eat = does what (Verb)  
rice = to what (Object)

That's it! If you understand this one pattern, you can already make hundreds of sentences!`,

  // ── Hindi explanation ──
  hindiExplanation: `English ek bhasha hai — jaise Hindi, Tamil, ya Bengali. Bas fark itna hai ki English Roman alphabet (A, B, C) use karti hai.

English mein 3 basic cheezein hain:
1. Letters (अक्षर) — A se Z tak 26 letters
2. Words (शब्द) — Letters milkar words banate hain (C+A+T = CAT)
3. Sentences (वाक्य) — Words milkar sentences banate hain

Har sentence mein ek pattern hota hai:
KAUN + KYA KARTA HAI + KISKO/KISKO LIYE
English mein: Subject + Verb + Object

Jaise:
"Main khana khata hoon." → "I eat food."
I = Main (Subject)
eat = khata hoon (Verb)
food = khana (Object)

Bas itna samajh lo — baaki sab aasan ho jayega!`,

  // ── Grammar rules ──
  rules: [
    {
      rule: "Every English sentence must have a Subject and a Verb",
      explanation: "You cannot make a sentence without telling WHO is doing the action and WHAT the action is. Even simple sentences need both.",
      example: "She runs. (She = subject, runs = verb)",
      exception: "In commands (imperative sentences), the subject 'You' is hidden. E.g., 'Sit down.' = '(You) Sit down.'"
    },
    {
      rule: "English follows Subject + Verb + Object (SVO) order",
      explanation: "Unlike Hindi where we say 'Main khana khata hoon' (I food eat), English puts the verb before the object: 'I eat food.'",
      example: "He reads books. (He + reads + books)",
    },
    {
      rule: "The first word of every sentence starts with a Capital letter",
      explanation: "Always capitalize the first letter. Also capitalize names of people, places, and 'I'.",
      example: "She is my friend. My name is Rahul. I am happy.",
    },
    {
      rule: "Every sentence ends with a punctuation mark",
      explanation: "Use a period (.) for statements, question mark (?) for questions, and exclamation mark (!) for excitement/surprise.",
      example: "He is a doctor. (.) | Are you okay? (?) | Wow, that's amazing! (!)",
    },
    {
      rule: "Singular subjects use singular verbs, plural subjects use plural verbs",
      explanation: "When the subject is one person (he, she, it), we add -s or -es to the verb. When the subject is more than one (they, we), we don't add -s.",
      example: "He runs. (singular) vs. They run. (plural)",
      exception: "I and You are special — they use the base form: 'I run' (not 'I runs'), 'You run' (not 'You runs')"
    },
  ],

  // ── Common mistakes ──
  commonMistakes: [
    {
      wrong: "She go to school.",
      correct: "She goes to school.",
      explanation: "When the subject is He/She/It, we must add -s or -es to the verb. She + go = She goes."
    },
    {
      wrong: "I am go to market.",
      correct: "I go to market.",
      explanation: "Don't mix 'am/is/are' with action verbs. Use either 'I am happy' (state) OR 'I go' (action), not both."
    },
    {
      wrong: "he is my friend.",
      correct: "He is my friend.",
      explanation: "Always capitalize the first word of a sentence. 'he' at the start should be 'He'."
    },
    {
      wrong: "They plays cricket.",
      correct: "They play cricket.",
      explanation: "They is plural — don't add -s to the verb. Only add -s for He/She/It."
    },
    {
      wrong: "I am student.",
      correct: "I am a student.",
      explanation: "Use 'a' or 'an' before singular countable nouns. 'a student' (not just 'student')."
    },
    {
      wrong: "She don't like tea.",
      correct: "She doesn't like tea.",
      explanation: "For He/She/It, use 'doesn't' (not 'don't') in negative sentences."
    },
    {
      wrong: "Main eat food.",
      correct: "I eat food.",
      explanation: "Don't mix Hindi and English words. 'Main' should be 'I' in English."
    },
    {
      wrong: "Yesterday I go to school.",
      correct: "Yesterday I went to school.",
      explanation: "For past actions, use past tense. 'go' → 'went' for past."
    },
    {
      wrong: "He have a car.",
      correct: "He has a car.",
      explanation: "He/She/It uses 'has', not 'have'. I/You/We/They use 'have'."
    },
    {
      wrong: "I doesn't know.",
      correct: "I don't know.",
      explanation: "'I' uses 'don't' (not 'doesn't'). Only He/She/It uses 'doesn't'."
    },
  ],

  // ── Sentence patterns ──
  sentencePatterns: [
    {
      pattern: "Subject + Verb",
      hindiPattern: "कौन + क्या करता है",
      examples: [
        { english: "I run.", hindi: "मैं दौड़ता हूँ।" },
        { english: "She sings.", hindi: "वह गाती है।" },
        { english: "He sleeps.", hindi: "वह सोता है।" },
        { english: "They dance.", hindi: "वे नाचते हैं।" },
        { english: "We study.", hindi: "हम पढ़ते हैं।" },
      ],
    },
    {
      pattern: "Subject + Verb + Object",
      hindiPattern: "कौन + क्या करता है + क्या",
      examples: [
        { english: "I eat food.", hindi: "मैं खाना खाता हूँ।" },
        { english: "She reads books.", hindi: "वह किताबें पढ़ती है।" },
        { english: "He drives a car.", hindi: "वह कार चलाता है।" },
        { english: "They play cricket.", hindi: "वे क्रिकेट खेलते हैं।" },
        { english: "We drink water.", hindi: "हम पानी पीते हैं।" },
        { english: "You write letters.", hindi: "तुम चिट्ठियाँ लिखते हो।" },
        { english: "The dog eats bones.", hindi: "कुत्ता हड्डियाँ खाता है।" },
      ],
    },
    {
      pattern: "Subject + Be Verb + Adjective",
      hindiPattern: "कौन + है/हूँ/हैं + कैसा",
      examples: [
        { english: "I am happy.", hindi: "मैं खुश हूँ।" },
        { english: "She is beautiful.", hindi: "वह सुंदर है।" },
        { english: "He is tall.", hindi: "वह लंबा है।" },
        { english: "They are strong.", hindi: "वे मजबूत हैं।" },
        { english: "We are ready.", hindi: "हम तैयार हैं।" },
        { english: "You are smart.", hindi: "तुम होशियार हो।" },
        { english: "It is cold today.", hindi: "आज ठंड है।" },
      ],
    },
    {
      pattern: "Subject + Be Verb + Noun",
      hindiPattern: "कौन + है/हूँ/हैं + क्या",
      examples: [
        { english: "I am a student.", hindi: "मैं एक छात्र हूँ।" },
        { english: "She is a doctor.", hindi: "वह एक डॉक्टर है।" },
        { english: "He is a teacher.", hindi: "वह एक शिक्षक है।" },
        { english: "They are engineers.", hindi: "वे इंजीनियर हैं।" },
        { english: "We are friends.", hindi: "हम दोस्त हैं।" },
        { english: "My father is a businessman.", hindi: "मेरे पिता व्यापारी हैं।" },
      ],
    },
    {
      pattern: "Subject + Do/Does + Not + Verb",
      hindiPattern: "कौन + नहीं + क्या करता है",
      examples: [
        { english: "I do not like tea.", hindi: "मुझे चाय पसंद नहीं है।" },
        { english: "She does not eat meat.", hindi: "वह मांस नहीं खाती।" },
        { english: "He does not play games.", hindi: "वह खेल नहीं खेलता।" },
        { english: "They do not watch TV.", hindi: "वे टीवी नहीं देखते।" },
        { english: "We do not smoke.", hindi: "हम धूम्रपान नहीं करते।" },
      ],
    },
    {
      pattern: "Do/Does + Subject + Verb + Object + ?",
      hindiPattern: "क्या + कौन + क्या करता है + क्या + ?",
      examples: [
        { english: "Do you like coffee?", hindi: "क्या तुम्हें कॉफी पसंद है?" },
        { english: "Does she speak English?", hindi: "क्या वह अंग्रेजी बोलती है?" },
        { english: "Does he work here?", hindi: "क्या वह यहाँ काम करता है?" },
        { english: "Do they play cricket?", hindi: "क्या वे क्रिकेट खेलते हैं?" },
        { english: "Do we have time?", hindi: "क्या हमारे पास समय है?" },
      ],
    },
  ],

  // ── Speaking tips ──
  speakingTips: [
    "Start with short sentences. Don't try to make long sentences on Day 1.",
    "Say each word clearly. Don't rush. Speed will come with practice.",
    "Practice in front of a mirror. Watch your mouth movements.",
    "Record yourself speaking and listen back. You'll notice mistakes easily.",
    "Don't translate from Hindi in your head. Think in English directly.",
    "Listen to English podcasts, YouTube videos, and movies daily.",
    "Speak English for at least 15 minutes every day — even to yourself.",
    "Don't be afraid of making mistakes. Every fluent speaker once made mistakes too.",
    "Focus on pronouncing vowels correctly: A (ऐ), E (ई), I (आई), O (ओ), U (यू).",
    "Practice tongue twisters to improve pronunciation speed and clarity.",
  ],

  // ── Memory tricks ──
  memoryTricks: [
    "SVO = 'Some Very Old' — Subject, Verb, Object. Remember the order!",
    "Vowels: 'An Elephant In Orange Underwear' — A, E, I, O, U",
    "He/She/It = -s. Remember: 'She singS, He runS, It workS'",
    "Capital letter at start: Think of it as 'standing tall at the beginning'",
    "'I' is ALWAYS capital. You are important — so 'I' is always big!",
    "Period (.) = full stop = sentence is complete, like parking a car",
    "Question mark (?) = it curves up, like your voice goes up when asking",
    "To remember Do vs Does: 'Does' has an 'S' — use it with he/She/it (all have S-sound)",
  ],

  // ── Professional usage ──
  professionalUsage: [
    {
      situation: "Introducing yourself in a meeting",
      english: "Good morning. I am Rahul from the marketing team.",
      hindi: "सुप्रभात। मैं मार्केटिंग टीम से राहुल हूँ।",
      tip: "Always state your name and department clearly."
    },
    {
      situation: "Greeting a client",
      english: "Hello, nice to meet you. I am your point of contact.",
      hindi: "नमस्ते, आपसे मिलकर अच्छा लगा। मैं आपका संपर्क व्यक्ति हूँ।",
      tip: "Use a firm handshake and maintain eye contact."
    },
    {
      situation: "Starting an email",
      english: "Dear Sir/Madam, I hope this email finds you well.",
      hindi: "प्रिय महोदय/महोदया, मुझे आशा है कि आप कुशल हैं।",
      tip: "This is the most professional email opening in English."
    },
  ],

  // ── Daily usage ──
  dailyUsage: [
    {
      situation: "Morning greeting to family",
      english: "Good morning! How did you sleep?",
      hindi: "सुप्रभात! नींद कैसी आई?",
    },
    {
      situation: "Ordering food at a restaurant",
      english: "I would like a cup of tea, please.",
      hindi: "मुझे एक कप चाय चाहिए, कृपया।",
    },
    {
      situation: "Asking for directions",
      english: "Excuse me, where is the nearest bus stop?",
      hindi: "माफ़ कीजिए, सबसे नज़दीकी बस स्टॉप कहाँ है?",
    },
    {
      situation: "Thanking someone",
      english: "Thank you very much for your help.",
      hindi: "आपकी मदद के लिए बहुत-बहुत धन्यवाद।",
    },
  ],

  // ── Office usage ──
  officeUsage: [
    {
      situation: "Asking for leave",
      english: "Sir, I need to take a day off tomorrow.",
      hindi: "सर, मुझे कल एक दिन की छुट्टी चाहिए।",
    },
    {
      situation: "Reporting to your manager",
      english: "Sir, I have completed the task you assigned.",
      hindi: "सर, मैंने वह काम पूरा कर लिया जो आपने दिया था।",
    },
    {
      situation: "Asking a colleague for help",
      english: "Excuse me, can you help me with this file?",
      hindi: "माफ़ कीजिए, क्या आप इस फाइल में मेरी मदद कर सकते हैं?",
    },
  ],

  // ── Interview usage ──
  interviewUsage: [
    {
      situation: "Entering the interview room",
      english: "Good morning, sir/ma'am. May I come in?",
      hindi: "सुप्रभात सर/मैम। क्या मैं अंदर आ सकता/सकती हूँ?",
      tip: "Always knock before entering. Smile and make eye contact."
    },
    {
      situation: "When asked 'Tell me about yourself'",
      english: "My name is Priya. I am a computer science graduate from Delhi University.",
      hindi: "मेरा नाम प्रिया है। मैं दिल्ली विश्वविद्यालय से कंप्यूटर साइंस ग्रेजुएट हूँ।",
      tip: "Keep it brief — name, education, and one key skill."
    },
  ],

  // ── Story ──
  story: {
    title: "Rahul's First English Class",
    paragraphs: [
      "Rahul is a boy from a small town. He is 22 years old. He wants to learn English.",
      "One day, Rahul joins an English class. The teacher says, 'Good morning, class!' Rahul does not understand. But he listens carefully.",
      "The teacher writes on the board: 'I am a student.' She says, 'Repeat after me.' Rahul repeats: 'I am a student.'",
      "The teacher smiles. She says, 'Very good, Rahul! Now tell me your name in English.' Rahul says, 'My name is Rahul.'",
      "After class, Rahul practices at home. He says to the mirror: 'I am Rahul. I am a student. I want to learn English.' He feels happy.",
      "Every day, Rahul learns new words. He practices speaking. After 75 days, Rahul speaks English fluently. His dream comes true!",
    ],
    moral: "Consistent practice is the key to learning any language. Even 15 minutes daily can change your life.",
    keyWords: [
      { word: "boy", meaning: "लड़का" },
      { word: "town", meaning: "शहर/कस्बा" },
      { word: "learn", meaning: "सीखना" },
      { word: "class", meaning: "कक्षा" },
      { word: "teacher", meaning: "शिक्षक" },
      { word: "repeat", meaning: "दोहराना" },
      { word: "mirror", meaning: "आईना" },
      { word: "practice", meaning: "अभ्यास" },
      { word: "fluently", meaning: "धाराप्रवाह" },
      { word: "dream", meaning: "सपना" },
    ],
  },

  // ── Essay ──
  essay: {
    title: "Why English Is Important",
    paragraphs: [
      "English is one of the most important languages in the world. Over 1.5 billion people speak English. It is the language of business, science, and the internet.",
      "In India, English is very important. Many companies use English for communication. If you want a good job, you need to speak English well.",
      "English helps us in many ways. We can read books, watch movies, and use the internet in English. We can also travel to other countries and communicate easily.",
      "Learning English is not difficult. You just need to practice every day. Start with simple words and sentences. Slowly, you will improve. The key is consistency.",
      "I believe that everyone should learn English. It opens many doors of opportunity. It gives us confidence. It helps us grow in our career and personal life.",
    ],
    keyPoints: [
      "English is spoken by over 1.5 billion people worldwide",
      "It is the language of business, technology, and the internet",
      "Learning English improves job prospects and career growth",
      "Daily practice is the key to mastering English",
      "Start simple — even 15 minutes daily makes a huge difference",
    ],
  },

  // ── Dialogue ──
  dialogue: {
    title: "First Day at English Class",
    setting: "A classroom. The teacher meets a new student.",
    lines: [
      { speaker: "Teacher", text: "Good morning! Welcome to the English class.", hindi: "सुप्रभात! अंग्रेजी की कक्षा में आपका स्वागत है।" },
      { speaker: "Student", text: "Good morning, ma'am. Thank you.", hindi: "सुप्रभात, मैम। धन्यवाद।" },
      { speaker: "Teacher", text: "What is your name?", hindi: "आपका नाम क्या है?" },
      { speaker: "Student", text: "My name is Amit.", hindi: "मेरा नाम अमित है।" },
      { speaker: "Teacher", text: "Nice to meet you, Amit. Are you a student?", hindi: "आपसे मिलकर अच्छा लगा, अमित। क्या आप छात्र हैं?" },
      { speaker: "Student", text: "Yes, I am a student. I study in college.", hindi: "हाँ, मैं एक छात्र हूँ। मैं कॉलेज में पढ़ता हूँ।" },
      { speaker: "Teacher", text: "Very good! Why do you want to learn English?", hindi: "बहुत अच्छा! आप अंग्रेजी क्यों सीखना चाहते हैं?" },
      { speaker: "Student", text: "I want to get a good job. English is important for that.", hindi: "मुझे अच्छी नौकरी चाहिए। उसके लिए अंग्रेजी ज़रूरी है।" },
      { speaker: "Teacher", text: "That is a great reason. Let's start with the basics.", hindi: "यह बहुत अच्छा कारण है। चलिए बेसिक से शुरू करते हैं।" },
      { speaker: "Student", text: "Thank you, ma'am. I am ready to learn.", hindi: "धन्यवाद, मैम। मैं सीखने के लिए तैयार हूँ।" },
    ],
    notes: [
      "Always say 'Good morning' when meeting someone in the morning (before 12 PM)",
      "Use 'Good afternoon' after 12 PM and 'Good evening' after 5 PM",
      "'Nice to meet you' is a polite phrase used when meeting someone for the first time",
      "In formal settings, use 'Sir' for men and 'Ma'am' for women",
    ],
  },

  // ── Summary ──
  summary: [
    "English has 26 letters — 5 vowels (A, E, I, O, U) and 21 consonants",
    "Letters form words, words form sentences",
    "Every sentence follows: Subject + Verb + Object (SVO) pattern",
    "Always capitalize the first letter of a sentence and proper nouns",
    "End every sentence with proper punctuation (. ? !)",
    "For He/She/It, add -s or -es to the verb (She goes, He runs)",
    "For I/You/We/They, use the base verb form (I go, They run)",
    "Use 'don't' with I/You/We/They and 'doesn't' with He/She/It",
    "Practice speaking daily — even 15 minutes makes a difference",
    "Don't be afraid of mistakes — they are part of learning!",
  ],
};

// ============================================================
// SUBTOPIC 2: The English Alphabet & Sounds
// ============================================================
export const SUBTOPIC_2_ALPHABET: LessonContent = {
  id: "d1-s2-alphabet",
  subtopicId: "d1-t1-s2",

  whyLearnThis: `The alphabet is the foundation of any language. Before you can read, write, or speak English, you need to know all 26 letters and their sounds. Think of letters as the building blocks — just like bricks build a house, letters build words!

In Hindi, you already know the concept of vowels (स्वर) and consonants (व्यंजन). English works the same way:
• Vowels (स्वर): A, E, I, O, U — These are the sounds that come out freely
• Consonants (व्यंजन): All other 21 letters — These need a vowel to make a complete sound

Why is this important?
• You need to spell your name correctly in forms and emails
• You need to read signboards, menus, and messages
• You need to understand pronunciation (how words sound)
• You need to type on a computer or phone keyboard`,

  conceptExplanation: `THE ENGLISH ALPHABET

English has exactly 26 letters. Here they are in order:

UPPERCASE (Capital Letters):
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

lowercase (small letters):
a b c d e f g h i j k l m n o p q r s t u v w x y z

VOWELS (5 letters — the most important):
A (ऐ) — as in Apple, Ant, Animal
E (ई) — as in Egg, Elephant, Engine
I (आई) — as in Ice cream, Ink, India
O (ओ) — as in Orange, Octopus, Open
U (यू) — as in Umbrella, Uncle, Uniform

CONSONANTS (21 letters):
B (बी), C (सी), D (डी), F (एफ), G (जी), H (एच), J (जे),
K (के), L (एल), M (एम), N (एन), P (पी), Q (क्यू), R (आर),
S (एस), T (टी), V (वी), W (डब्ल्यू), X (एक्स), Y (वाय), Z (ज़ेड)

IMPORTANT CONCEPTS:

1. Every word MUST have at least one vowel
   - "cat" has vowel 'a' ✅
   - "bcdf" is NOT a word ❌ (no vowel)

2. Capital vs Small letters:
   - Use CAPITAL at the start of sentences: "She is happy."
   - Use CAPITAL for names: "Rahul", "India", "Monday"
   - Use CAPITAL for "I": "I am going."
   - Use small letters everywhere else

3. Some letters sound different in different words:
   - C can sound like 'k' (cat) or 's' (city)
   - G can sound like 'g' (go) or 'j' (gentle)
   - S can sound like 's' (sun) or 'z' (is)`,

  simpleExplanation: `English has 26 letters: A to Z.

5 special letters called VOWELS: A, E, I, O, U
(Remember: An Elephant In Orange Underwear!)

21 other letters are called CONSONANTS.

Every English word must have at least one vowel.

Capital letters (BIG) = A, B, C
Small letters (छोटे) = a, b, c

Use capital letters for:
- First word of sentence
- Names (Rahul, India)
- The word "I"`,

  hindiExplanation: `English mein 26 letters hain: A se lekar Z tak.

5 vowels (स्वर) hain: A, E, I, O, U
21 consonants (व्यंजन) hain: B, C, D, F... Z tak

Jaise Hindi mein "अ, आ, इ, ई" vowels hain,
Waise English mein A, E, I, O, U vowels hain.

Har English word mein kam se kam ek vowel hona zaroori hai.
Jaise "cat" mein 'a' vowel hai.

Capital (bade) letters use karo:
- Sentence ke shuru mein
- Naam ke liye (Rahul, India)
- "I" ke liye always capital`,

  rules: [
    {
      rule: "Every word must contain at least one vowel (A, E, I, O, U)",
      explanation: "Without a vowel, you cannot pronounce the word. Vowels are the sound-makers.",
      example: "'book' has vowel 'o', 'pen' has vowel 'e', 'cat' has vowel 'a'",
    },
    {
      rule: "Y can sometimes act as a vowel",
      explanation: "When Y appears in the middle or end of a word and makes a vowel sound, it acts like a vowel.",
      example: "'gym' — Y sounds like 'i'. 'happy' — Y sounds like 'ee'.",
      exception: "At the beginning of a word, Y is always a consonant: 'yes', 'yellow'.",
    },
    {
      rule: "Use capital letters for proper nouns (names of specific people, places, things)",
      explanation: "Names are special — they always start with a capital letter, even in the middle of a sentence.",
      example: "'I live in India.' 'My friend Rahul is here.'",
    },
    {
      rule: "The letter 'I' (referring to yourself) is ALWAYS capital",
      explanation: "Unlike Hindi where 'मैं' can be small, in English 'I' is always written as a capital letter.",
      example: "'I am happy.' 'She and I are friends.'",
    },
  ],

  commonMistakes: [
    {
      wrong: "i am a student.",
      correct: "I am a student.",
      explanation: "The word 'I' (referring to yourself) is ALWAYS written in capital, even in the middle of a sentence.",
    },
    {
      wrong: "my name is rahul.",
      correct: "My name is Rahul.",
      explanation: "Names of people always start with a capital letter. Also, 'My' is capital because it starts the sentence.",
    },
    {
      wrong: "i live in india.",
      correct: "I live in India.",
      explanation: "'I' is always capital. Country names like 'India' also always start with a capital letter.",
    },
    {
      wrong: "THANK YOU FOR YOUR HELP.",
      correct: "Thank you for your help.",
      explanation: "Writing everything in capitals is considered SHOUTING in English. Only capitalize where needed.",
    },
    {
      wrong: "b-o-y spells BOI",
      correct: "b-o-y spells BOY",
      explanation: "Pay attention to how each letter sounds. 'y' at the end of 'boy' makes the sound 'ee' not 'i'.",
    },
  ],

  sentencePatterns: [
    {
      pattern: "Spelling your name",
      hindiPattern: "अपना नाम spell करना",
      examples: [
        { english: "My name is Amit. A-M-I-T.", hindi: "मेरा नाम अमित है। ए-एम-आई-टी।" },
        { english: "I am Priya. P-R-I-Y-A.", hindi: "मैं प्रिया हूँ। पी-आर-आई-वाय-ए।" },
        { english: "Can you spell your name?", hindi: "क्या आप अपना नाम spell कर सकते हैं?" },
      ],
    },
    {
      pattern: "Identifying vowels and consonants",
      hindiPattern: "स्वर और व्यंजन पहचानना",
      examples: [
        { english: "A, E, I, O, U are vowels.", hindi: "A, E, I, O, U स्वर हैं।" },
        { english: "B, C, D, F, G are consonants.", hindi: "B, C, D, F, G व्यंजन हैं।" },
        { english: "The word 'apple' starts with a vowel.", hindi: "'apple' शब्द स्वर से शुरू होता है।" },
        { english: "The word 'book' starts with a consonant.", hindi: "'book' शब्द व्यंजन से शुरू होता है।" },
      ],
    },
    {
      pattern: "Asking about letters",
      hindiPattern: "अक्षरों के बारे में पूछना",
      examples: [
        { english: "What letter comes after M?", hindi: "M के बाद कौन सा letter आता है?" },
        { english: "How many vowels are in 'beautiful'?", hindi: "'beautiful' में कितने vowels हैं?" },
        { english: "Is 'H' a vowel or consonant?", hindi: "क्या 'H' vowel है या consonant?" },
      ],
    },
  ],

  speakingTips: [
    "Practice saying the alphabet out loud every day — A, B, C, D...",
    "Pay attention to letters that sound similar: B/P, D/T, G/K, V/W",
    "The letter 'W' is pronounced 'double-you', not 'double-vee'",
    "The letter 'Z' is 'zed' in British English and 'zee' in American English",
    "Practice spelling your name, your city name, and your email address out loud",
  ],

  memoryTricks: [
    "VOWELS: 'An Elephant In Orange Underwear' = A, E, I, O, U",
    "26 letters = 2+6 = 8. Lucky number for learning!",
    "Alphabet song: Sing 'A-B-C-D-E-F-G...' like Twinkle Twinkle",
    "Consonants = All letters that are NOT vowels (21 of them)",
  ],

  professionalUsage: [
    {
      situation: "Spelling your email address",
      english: "My email is rahul dot sharma at gmail dot com. R-A-H-U-L dot S-H-A-R-M-A.",
      hindi: "मेरा ईमेल rahul.sharma@gmail.com है।",
      tip: "Always spell out your email clearly, especially unusual letters."
    },
  ],

  dailyUsage: [
    {
      situation: "Telling someone your phone number",
      english: "My phone number is 9-8-7-6-5-4-3-2-1-0.",
      hindi: "मेरा फोन नंबर 9876543210 है।",
    },
  ],

  officeUsage: [
    {
      situation: "Filling out a form",
      english: "Please write your name in capital letters: RAHUL SHARMA.",
      hindi: "कृपया अपना नाम बड़े अक्षरों में लिखें: RAHUL SHARMA।",
    },
  ],

  interviewUsage: [
    {
      situation: "When the interviewer asks you to spell your name",
      english: "My name is Priya Patel. P-R-I-Y-A, space, P-A-T-E-L.",
      hindi: "मेरा नाम प्रिया पटेल है।",
      tip: "Speak each letter slowly and clearly."
    },
  ],

  story: {
    title: "The Magic of Letters",
    paragraphs: [
      "Little Aarav knows the Hindi alphabet very well. One day, his sister gives him an English book.",
      "'Look, Aarav!' she says. 'English has only 26 letters. Hindi has more than 40!'",
      "Aarav looks at the book. He sees A, B, C, D... He tries to read: 'C-A-T. Cat! That means billi!'",
      "He is very happy. He reads more words: D-O-G. Dog! B-O-O-K. Book! He loves learning new letters.",
      "Every night, Aarav writes five new words in his notebook. After one week, he knows 35 words!",
      "'English is easy!' Aarav tells his sister. 'You just need to know the 26 letters and practice every day.'",
    ],
    moral: "The English alphabet is your first step. Master these 26 letters and you can read any English word!",
    keyWords: [
      { word: "alphabet", meaning: "वर्णमाला" },
      { word: "letter", meaning: "अक्षर" },
      { word: "read", meaning: "पढ़ना" },
      { word: "write", meaning: "लिखना" },
      { word: "notebook", meaning: "नोटबुक/कॉपी" },
      { word: "practice", meaning: "अभ्यास" },
    ],
  },

  essay: {
    title: "The English Alphabet",
    paragraphs: [
      "The English alphabet has 26 letters. These letters are divided into two groups: vowels and consonants.",
      "There are 5 vowels: A, E, I, O, and U. These vowels are very important because every English word must have at least one vowel.",
      "There are 21 consonants. Some examples are B, C, D, F, and G. Consonants need vowels to make complete sounds.",
      "Every letter has two forms: capital (big) and lowercase (small). We use capital letters at the start of sentences, for names, and for the word 'I'.",
      "Learning the alphabet is the first and most important step in learning English. Once you know all 26 letters, you can start reading and writing words.",
    ],
    keyPoints: [
      "26 letters total in the English alphabet",
      "5 vowels (A, E, I, O, U) and 21 consonants",
      "Every word must contain at least one vowel",
      "Capital letters used for sentence starts, names, and 'I'",
    ],
  },

  dialogue: {
    title: "Learning the Alphabet",
    setting: "A teacher helps a student learn the English alphabet.",
    lines: [
      { speaker: "Teacher", text: "Let's start with the alphabet. Can you say A, B, C?", hindi: "चलिए alphabet से शुरू करते हैं। क्या आप A, B, C बोल सकते हैं?" },
      { speaker: "Student", text: "A, B, C, D, E, F, G...", hindi: "ए, बी, सी, डी, ई, एफ, जी..." },
      { speaker: "Teacher", text: "Excellent! Now, do you know which letters are vowels?", hindi: "बहुत बढ़िया! क्या आपको पता है कौन से अक्षर vowels हैं?" },
      { speaker: "Student", text: "A, E, I, O, U are vowels.", hindi: "A, E, I, O, U vowels हैं।" },
      { speaker: "Teacher", text: "Perfect! And the rest are called?", hindi: "बिल्कुल सही! और बाकी को क्या कहते हैं?" },
      { speaker: "Student", text: "Consonants!", hindi: "व्यंजन!" },
      { speaker: "Teacher", text: "Great job! Now spell your name for me.", hindi: "शाबाश! अब मुझे अपना नाम spell करके बताओ।" },
      { speaker: "Student", text: "R-A-H-U-L. Rahul!", hindi: "आर-ए-एच-यू-एल। राहुल!" },
    ],
    notes: [
      "When spelling words, say each letter clearly and slowly",
      "Use the NATO alphabet for phone calls: A=Alpha, B=Bravo, C=Charlie",
      "Practice spelling common words daily to build confidence",
    ],
  },

  summary: [
    "English has 26 letters: A to Z",
    "5 vowels: A, E, I, O, U (remember: An Elephant In Orange Underwear)",
    "21 consonants: all other letters",
    "Every word must have at least one vowel",
    "Capital letters: used for sentence starts, names, and 'I'",
    "Lowercase letters: used everywhere else",
    "Practice spelling your name, city, and email daily",
  ],
};

// ============================================================
// SUBTOPIC 3: Parts of Speech Overview
// ============================================================
export const SUBTOPIC_3_PARTS_OF_SPEECH: LessonContent = {
  id: "d1-s3-parts-of-speech",
  subtopicId: "d1-t1-s3",

  whyLearnThis: `Every word in English belongs to a category called "Parts of Speech." Think of it like sorting items in your house — clothes go in the cupboard, food goes in the kitchen, books go on the shelf. Similarly, every English word has a category:

• Nouns = Names of things (book, car, Rahul)
• Verbs = Action words (run, eat, write)
• Adjectives = Describing words (big, beautiful, fast)
• Adverbs = Describe how an action is done (quickly, slowly)
• Pronouns = Replace nouns (he, she, it, they)
• Prepositions = Show position/direction (in, on, at, under)
• Conjunctions = Joining words (and, but, or)
• Interjections = Emotion words (Wow! Oh! Oops!)

Why is this important?
• It helps you understand sentence structure
• It helps you use the right word in the right place
• It prevents common mistakes
• It is the foundation of all grammar`,

  conceptExplanation: `PARTS OF SPEECH — The 8 Categories of English Words

Every single word in English falls into one of 8 categories. Let's understand each one:

1. NOUN (संज्ञा) — Names of people, places, things, or ideas
   Examples: Rahul, India, book, happiness, dog, school
   Easy way: If you can put "the" or "a" before it, it's probably a noun.
   "the book" ✅ "the run" ❌ (run is a verb, not a noun)

2. PRONOUN (सर्वनाम) — Words that replace nouns
   Examples: I, you, he, she, it, we, they, me, him, her
   Why we use them: Instead of saying "Rahul went to Rahul's school", we say "Rahul went to his school."

3. VERB (क्रिया) — Action words or state words
   Action verbs: run, eat, write, play, sing, dance
   State verbs: am, is, are, was, were, have, has
   Easy way: If you can put "I" before it and it makes sense, it's a verb.
   "I run" ✅ "I book" ❌

4. ADJECTIVE (विशेषण) — Words that describe nouns
   Examples: big, small, beautiful, fast, red, happy, old, new
   Easy way: If it answers "what kind?", "how many?", or "which one?", it's an adjective.
   "a BIG house" — big describes the house

5. ADVERB (क्रिया विशेषण) — Words that describe verbs, adjectives, or other adverbs
   Examples: quickly, slowly, very, extremely, carefully, happily
   Easy way: If it answers "how?", "when?", "where?", or "how much?", it's an adverb.
   "She runs QUICKLY" — quickly describes how she runs

6. PREPOSITION (संबंधबोधक) — Words that show position, direction, or time
   Examples: in, on, at, under, over, between, before, after
   "The book is ON the table." (shows position)
   "I go to school AT 8 AM." (shows time)

7. CONJUNCTION (समुच्चयबोधक) — Words that join words, phrases, or sentences
   Examples: and, but, or, so, because, although
   "I like tea AND coffee." (joins two nouns)
   "She is smart BUT lazy." (joins two adjectives)

8. INTERJECTION (विस्मयादिबोधक) — Words that express strong emotions
   Examples: Wow!, Oh!, Oops!, Hurray!, Alas!, Hey!
   "Wow! That is amazing!" (expresses surprise)
   "Oops! I made a mistake." (expresses regret)`,

  simpleExplanation: `Think of Parts of Speech like players on a cricket team:

NOUN = The player's name (Virat, Rohit)
PRONOUN = Instead of name, we say "he" or "she"
VERB = What the player does (bats, bowls, runs)
ADJECTIVE = How we describe the player (fast, strong, tall)
ADVERB = How they do the action (quickly, slowly)
PREPOSITION = Where they are (in the field, at the crease)
CONJUNCTION = Joining players (Virat AND Rohit)
INTERJECTION = Crowd reaction (Wow! Six! Oh no!)

Every word in English is one of these 8 types. That's it!`,

  hindiExplanation: `English mein har word ek category mein aata hai. Total 8 categories hain:

1. NOUN (संज्ञा) — Naam: Rahul, kitab, India
2. PRONOUN (सर्वनाम) — Naam ki jagah: wo, main, hum
3. VERB (क्रिया) — Kaam: khana, padhna, daudna
4. ADJECTIVE (विशेषण) — Kaisa: bada, chhota, sundar
5. ADVERB (क्रिया विशेषण) — Kaise: jaldi se, dhire se
6. PREPOSITION (संबंधबोधक) — Kahan/Kab: mein, par, ke upar
7. CONJUNCTION (समुच्चयबोधक) — Jodne wale: aur, lekin, ya
8. INTERJECTION (विस्मयादिबोधक) — Bhavna: Wah!, Arre!, Oho!`,

  rules: [
    {
      rule: "Every complete sentence must have at least a noun (or pronoun) and a verb",
      explanation: "The noun tells WHO, and the verb tells WHAT THEY DO.",
      example: "'Rahul (noun) runs (verb).' 'She (pronoun) sings (verb).'",
    },
    {
      rule: "Adjectives come BEFORE nouns in English",
      explanation: "Unlike Hindi where adjective can come before or after, in English the adjective always comes before the noun.",
      example: "'a beautiful girl' ✅ (not 'a girl beautiful' ❌)",
      exception: "After linking verbs (is/am/are), adjective comes after: 'She is beautiful.'"
    },
    {
      rule: "Adverbs usually come after the verb or at the end of the sentence",
      explanation: "The adverb describes HOW the verb is done.",
      example: "'She sings beautifully.' 'He runs quickly.'",
    },
  ],

  commonMistakes: [
    {
      wrong: "She is beauty.",
      correct: "She is beautiful.",
      explanation: "'Beauty' is a noun. After 'is', we need an adjective. 'Beautiful' is the adjective form."
    },
    {
      wrong: "He runs slow.",
      correct: "He runs slowly.",
      explanation: "'Slow' is an adjective. To describe a verb (runs), use the adverb form: 'slowly'."
    },
    {
      wrong: "Me am happy.",
      correct: "I am happy.",
      explanation: "'Me' is an object pronoun. As a subject, use 'I'. 'I am' (not 'Me am')."
    },
    {
      wrong: "She speak good English.",
      correct: "She speaks good English.",
      explanation: "With She/He/It, add -s to the verb: 'speaks' (not 'speak')."
    },
  ],

  sentencePatterns: [
    {
      pattern: "Noun + Verb",
      hindiPattern: "संज्ञा + क्रिया",
      examples: [
        { english: "Birds fly.", hindi: "पक्षी उड़ते हैं।" },
        { english: "Dogs bark.", hindi: "कुत्ते भौंकते हैं।" },
        { english: "Children play.", hindi: "बच्चे खेलते हैं।" },
        { english: "Rain falls.", hindi: "बारिश गिरती है।" },
        { english: "The sun shines.", hindi: "सूरज चमकता है।" },
      ],
    },
    {
      pattern: "Pronoun + Verb + Adverb",
      hindiPattern: "सर्वनाम + क्रिया + क्रिया विशेषण",
      examples: [
        { english: "She sings beautifully.", hindi: "वह सुंदर गाती है।" },
        { english: "He runs quickly.", hindi: "वह तेज़ दौड़ता है।" },
        { english: "They work hard.", hindi: "वे कड़ी मेहनत करते हैं।" },
        { english: "We eat slowly.", hindi: "हम धीरे-धीरे खाते हैं।" },
      ],
    },
    {
      pattern: "Adjective + Noun + Verb",
      hindiPattern: "विशेषण + संज्ञा + क्रिया",
      examples: [
        { english: "A tall boy stands.", hindi: "एक लंबा लड़का खड़ा है।" },
        { english: "The red car stops.", hindi: "लाल कार रुकती है।" },
        { english: "A small bird sings.", hindi: "एक छोटी चिड़िया गाती है।" },
        { english: "An old man walks.", hindi: "एक बूढ़ा आदमी चलता है।" },
      ],
    },
  ],

  speakingTips: [
    "When describing something, put the adjective BEFORE the noun: 'a big house' (not 'a house big')",
    "Use adverbs to make your sentences more interesting: Instead of 'He runs', say 'He runs quickly'",
    "Practice identifying parts of speech in sentences you hear — it trains your grammar sense",
  ],

  memoryTricks: [
    "NAPA VICE: Noun, Adjective, Pronoun, Adverb, Verb, Interjection, Conjunction, prEposition — all 8!",
    "Nouns = NAMES of things. N for Noun, N for Name.",
    "Verbs = ACTION words. Think 'Verb = Very Active'",
    "Adjectives = DESCRIBE nouns. 'Adjective Adds Description'",
    "Adverbs usually end in -ly: quickly, slowly, beautifully, carefully",
  ],

  professionalUsage: [
    {
      situation: "Describing a product in a meeting",
      english: "Our new product is innovative and cost-effective.",
      hindi: "हमारा नया उत्पाद नवीन और लागत प्रभावी है।",
      tip: "'innovative' and 'cost-effective' are adjectives describing 'product' (noun)."
    },
  ],

  dailyUsage: [
    {
      situation: "Describing your day",
      english: "I had a wonderful day. The weather was beautiful and I felt happy.",
      hindi: "मेरा दिन बहुत अच्छा था। मौसम सुंदर था और मैं खुश था।",
    },
  ],

  officeUsage: [
    {
      situation: "Writing a report",
      english: "The quarterly results show significant improvement in all departments.",
      hindi: "तिमाही नतीजे सभी विभागों में महत्वपूर्ण सुधार दिखाते हैं।",
    },
  ],

  interviewUsage: [
    {
      situation: "Describing your strengths",
      english: "I am a hardworking and dedicated person. I learn new things quickly.",
      hindi: "मैं एक मेहनती और समर्पित व्यक्ति हूँ। मैं नई चीज़ें जल्दी सीखता हूँ।",
      tip: "'hardworking' and 'dedicated' are adjectives. 'quickly' is an adverb."
    },
  ],

  story: {
    title: "The Smart Parrot",
    paragraphs: [
      "A beautiful green parrot lives in a big tree. The parrot is very smart.",
      "Every morning, the parrot says 'Good morning!' to the old man who walks by.",
      "The old man smiles happily. He gives the parrot fresh fruits daily.",
      "One day, a small boy comes near the tree. He asks, 'Can the parrot really talk?'",
      "The parrot says clearly, 'Yes! I speak English fluently!'",
      "The boy laughs loudly. He says, 'Wow! You are amazing!' The parrot feels proud.",
    ],
    moral: "Words have power. Learning to use the right words at the right time makes you impressive.",
    keyWords: [
      { word: "beautiful", meaning: "सुंदर (adjective)" },
      { word: "green", meaning: "हरा (adjective)" },
      { word: "smart", meaning: "होशियार (adjective)" },
      { word: "happily", meaning: "खुशी से (adverb)" },
      { word: "clearly", meaning: "स्पष्ट रूप से (adverb)" },
      { word: "fluently", meaning: "धाराप्रवाह (adverb)" },
    ],
  },

  essay: {
    title: "Understanding Parts of Speech",
    paragraphs: [
      "Every word in the English language belongs to one of eight categories. These categories are called 'Parts of Speech.'",
      "Nouns are the names of things — like 'book', 'car', and 'India'. Verbs are action words — like 'run', 'eat', and 'write'.",
      "Adjectives describe nouns — like 'big house' or 'beautiful girl'. Adverbs describe how verbs happen — like 'runs quickly' or 'sings beautifully'.",
      "Understanding parts of speech helps us build correct sentences. It is like knowing the rules of a game — once you know the rules, you can play well.",
    ],
    keyPoints: [
      "8 parts of speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection",
      "Nouns = names, Verbs = actions, Adjectives = descriptions",
      "Knowing parts of speech helps you build grammatically correct sentences",
    ],
  },

  dialogue: {
    title: "Identifying Parts of Speech",
    setting: "Teacher tests a student on parts of speech.",
    lines: [
      { speaker: "Teacher", text: "In the sentence 'The big dog runs quickly', what is 'dog'?", hindi: "'The big dog runs quickly' में 'dog' क्या है?" },
      { speaker: "Student", text: "Dog is a noun. It is the name of an animal.", hindi: "Dog एक noun है। यह एक जानवर का नाम है।" },
      { speaker: "Teacher", text: "Correct! And what about 'big'?", hindi: "सही! और 'big' के बारे में?" },
      { speaker: "Student", text: "Big is an adjective. It describes the dog.", hindi: "Big एक adjective है। यह dog को describe करता है।" },
      { speaker: "Teacher", text: "What about 'runs'?", hindi: "'runs' के बारे में?" },
      { speaker: "Student", text: "Runs is a verb. It tells the action.", hindi: "Runs एक verb है। यह action बताता है।" },
      { speaker: "Teacher", text: "And 'quickly'?", hindi: "और 'quickly'?" },
      { speaker: "Student", text: "Quickly is an adverb. It tells how the dog runs.", hindi: "Quickly एक adverb है। यह बताता है कि dog कैसे runs।" },
    ],
    notes: [
      "Adjectives answer: What kind? How many? Which one?",
      "Adverbs answer: How? When? Where? How much?",
      "Most adverbs are made by adding -ly to adjectives: quick → quickly",
    ],
  },

  summary: [
    "8 Parts of Speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection",
    "Noun = name of a person, place, thing, or idea",
    "Pronoun = replaces a noun (I, you, he, she, it, we, they)",
    "Verb = action word or state word (run, eat, is, am, are)",
    "Adjective = describes a noun (big, beautiful, fast) — comes BEFORE the noun",
    "Adverb = describes a verb, adjective, or adverb (quickly, very, slowly) — usually ends in -ly",
    "Preposition = shows position/time (in, on, at, under, between)",
    "Conjunction = joins words or sentences (and, but, or, because)",
    "Interjection = expresses strong emotion (Wow! Oh! Oops!)",
  ],
};

// ============================================================
// Export all Day 1 lesson content as a single object
// ============================================================
export const DAY_1_CONTENT = {
  // All subtopic lesson content for Day 1
  lessons: [
    SUBTOPIC_1_WHY_LEARN,
    SUBTOPIC_2_ALPHABET,
    SUBTOPIC_3_PARTS_OF_SPEECH,
  ],
};

// Helper to get lesson content by subtopic ID
export function getDay1LessonContent(subtopicId: string): LessonContent | undefined {
  return DAY_1_CONTENT.lessons.find((l) => l.subtopicId === subtopicId);
}

// Export default
export default DAY_1_CONTENT;
