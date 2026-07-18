// ============================================================
// Day 1 Practice Questions - 80-100 questions per subtopic
// All questions are in Hindi (translation practice)
// Each question has correct answer + explanation + word hints
// ============================================================

export interface PracticeQ {
  id: string;
  subtopicId: string;
  questionText: string;   // Hindi question
  questionType: "fill_blank" | "mcq" | "translation" | "error_detection" | "rearrangement";
  difficulty: "beginner" | "elementary" | "intermediate";
  correctAnswer: string;  // English answer
  explanation: string;    // Why this answer is correct
  hindiExplanation: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  wordHints?: { word: string; meaning: string }[];
  points: number;
}

// ─── Subtopic: SVO Sentence Structure ────────────────────────
export const DAY1_SVO_QUESTIONS: PracticeQ[] = [
  {
    id: "d1q001",
    subtopicId: "d1-t4-s1",
    questionText: "वह स्कूल जाती है। (She _____ to school.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "She goes to school.",
    explanation: "Subject (She) + Verb (goes) + Object (to school). In present simple, we add 's' to verbs with He/She/It.",
    hindiExplanation: "Subject (She) + Verb (goes) + Object (to school). Present Simple में He/She/It के साथ verb में 's' लगाते हैं।",
    wordHints: [{ word: "goes", meaning: "जाती है (present simple of 'go')" }],
    points: 10,
  },
  {
    id: "d1q002",
    subtopicId: "d1-t4-s1",
    questionText: "राम खाना खाता है। (Ram _____ food.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "Ram eats food.",
    explanation: "Subject (Ram) + Verb (eats) + Object (food). 'Eat' becomes 'eats' with a singular subject.",
    hindiExplanation: "Subject (Ram) + Verb (eats) + Object (food). Singular subject के साथ 'eat' → 'eats' हो जाता है।",
    wordHints: [{ word: "eats", meaning: "खाता है" }],
    points: 10,
  },
  {
    id: "d1q003",
    subtopicId: "d1-t4-s1",
    questionText: "बच्चे खेलते हैं। (The children _____.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "The children play.",
    explanation: "Plural subject 'children' does not need 's' on the verb. Subject (The children) + Verb (play).",
    hindiExplanation: "Plural subject 'children' के साथ verb में 's' नहीं लगता। Subject + Verb।",
    wordHints: [{ word: "play", meaning: "खेलते हैं" }],
    points: 10,
  },
  {
    id: "d1q004",
    subtopicId: "d1-t4-s1",
    questionText: "मेरी माँ खाना पकाती हैं। (My mother _____ food.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "My mother cooks food.",
    explanation: "My mother = She (singular) → verb gets 's' → cooks. Subject + Verb + Object pattern.",
    hindiExplanation: "My mother = She (singular) → verb को 's' मिलता है → cooks।",
    wordHints: [{ word: "cooks", meaning: "पकाती हैं" }],
    points: 10,
  },
  {
    id: "d1q005",
    subtopicId: "d1-t4-s1",
    questionText: "कुत्ता भौंकता है। (The dog _____.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "The dog barks.",
    explanation: "The dog = It (singular) → bark + s = barks. Always add 's' with singular subjects (he/she/it).",
    hindiExplanation: "The dog = It (singular) → bark + s = barks। Singular subjects के साथ हमेशा 's' लगाते हैं।",
    wordHints: [{ word: "barks", meaning: "भौंकता है" }],
    points: 10,
  },
  {
    id: "d1q006",
    subtopicId: "d1-t4-s1",
    questionText: "हम रोज पढ़ते हैं। (We _____ every day.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "We study every day.",
    explanation: "We is plural, so no 's' on the verb. Study stays as 'study' not 'studies'.",
    hindiExplanation: "We plural है, इसलिए verb में 's' नहीं लगेगा। Study → study रहेगा।",
    wordHints: [{ word: "study", meaning: "पढ़ते हैं" }],
    points: 10,
  },
  {
    id: "d1q007",
    subtopicId: "d1-t4-s1",
    questionText: "पक्षी गाते हैं। (The birds _____.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "The birds sing.",
    explanation: "Birds is plural, so the verb 'sing' does not take 's'.",
    hindiExplanation: "Birds plural है, इसलिए verb 'sing' को 's' नहीं मिलेगा।",
    wordHints: [{ word: "sing", meaning: "गाते हैं" }],
    points: 10,
  },
  {
    id: "d1q008",
    subtopicId: "d1-t4-s1",
    questionText: "तुम्हारे पिताजी क्या काम करते हैं? (What does _____ do?)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "What does your father do?",
    explanation: "Question with 'does' for singular subjects. Your father = he (singular) → does.",
    hindiExplanation: "Singular subject के साथ question में 'does' आता है।",
    wordHints: [{ word: "does", meaning: "करते हैं (question word for singular)" }],
    points: 10,
  },
  {
    id: "d1q009",
    subtopicId: "d1-t4-s1",
    questionText: "वह हर सुबह दौड़ता है। (He _____ every morning.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "He runs every morning.",
    explanation: "He (singular) + run + s = runs. Add 's' to the verb with He/She/It.",
    hindiExplanation: "He (singular) के साथ run में s जोड़कर runs बनाते हैं।",
    wordHints: [{ word: "runs", meaning: "दौड़ता है" }],
    points: 10,
  },
  {
    id: "d1q010",
    subtopicId: "d1-t4-s1",
    questionText: "वे लोग शहर में रहते हैं। (They _____ in the city.)",
    questionType: "fill_blank",
    difficulty: "beginner",
    correctAnswer: "They live in the city.",
    explanation: "They is plural, so the verb 'live' stays as 'live' without 's'.",
    hindiExplanation: "They plural है, इसलिए verb 'live' में 's' नहीं आएगा।",
    wordHints: [{ word: "live", meaning: "रहते हैं" }],
    points: 10,
  },
];

// ─── Subtopic: Positive Sentences ────────────────────────────
export const DAY1_POSITIVE_SENTENCE_QUESTIONS: PracticeQ[] = [
  { id: "d1q011", subtopicId: "d1-t4-s2", questionText: "मैं एक विद्यार्थी हूँ।", questionType: "translation", difficulty: "beginner", correctAnswer: "I am a student.", explanation: "I + am (be verb for I) + a student.", hindiExplanation: "I के साथ हमेशा 'am' आता है।", wordHints: [{ word: "student", meaning: "विद्यार्थी" }], points: 10 },
  { id: "d1q012", subtopicId: "d1-t4-s2", questionText: "वह एक डॉक्टर है।", questionType: "translation", difficulty: "beginner", correctAnswer: "He is a doctor.", explanation: "He + is (be verb for He) + a doctor.", hindiExplanation: "He/She/It के साथ 'is' आता है।", wordHints: [{ word: "doctor", meaning: "डॉक्टर" }], points: 10 },
  { id: "d1q013", subtopicId: "d1-t4-s2", questionText: "हम अच्छे दोस्त हैं।", questionType: "translation", difficulty: "beginner", correctAnswer: "We are good friends.", explanation: "We + are (be verb for We) + good friends.", hindiExplanation: "We/You/They के साथ 'are' आता है।", wordHints: [{ word: "friends", meaning: "दोस्त" }], points: 10 },
  { id: "d1q014", subtopicId: "d1-t4-s2", questionText: "यह एक सुंदर घर है।", questionType: "translation", difficulty: "beginner", correctAnswer: "This is a beautiful house.", explanation: "This + is + a beautiful house. 'This' refers to a single nearby object.", hindiExplanation: "'This' पास की एकल वस्तु के लिए प्रयोग होता है।", wordHints: [{ word: "beautiful", meaning: "सुंदर" }], points: 10 },
  { id: "d1q015", subtopicId: "d1-t4-s2", questionText: "वे अच्छे शिक्षक हैं।", questionType: "translation", difficulty: "beginner", correctAnswer: "They are good teachers.", explanation: "They + are + good teachers. Plural subject uses 'are'.", hindiExplanation: "Plural subject के साथ 'are' आता है।", wordHints: [{ word: "teachers", meaning: "शिक्षक" }], points: 10 },
  { id: "d1q016", subtopicId: "d1-t4-s2", questionText: "आसमान नीला है।", questionType: "translation", difficulty: "beginner", correctAnswer: "The sky is blue.", explanation: "The sky (It, singular) + is + blue.", hindiExplanation: "It/singular nouns के साथ 'is' आता है।", wordHints: [{ word: "sky", meaning: "आसमान" }, { word: "blue", meaning: "नीला" }], points: 10 },
  { id: "d1q017", subtopicId: "d1-t4-s2", questionText: "मेरे पास एक कार है।", questionType: "translation", difficulty: "beginner", correctAnswer: "I have a car.", explanation: "I + have + a car. 'Have' is used for possession with I/You/We/They.", hindiExplanation: "I/You/We/They के साथ possession के लिए 'have' आता है।", wordHints: [{ word: "have", meaning: "के पास है" }], points: 10 },
  { id: "d1q018", subtopicId: "d1-t4-s2", questionText: "बाज़ार पास में है।", questionType: "translation", difficulty: "beginner", correctAnswer: "The market is nearby.", explanation: "The market (It) + is + nearby.", hindiExplanation: "Singular noun के साथ 'is' आता है।", wordHints: [{ word: "nearby", meaning: "पास में" }], points: 10 },
  { id: "d1q019", subtopicId: "d1-t4-s2", questionText: "वह लड़की बहुत होशियार है।", questionType: "translation", difficulty: "beginner", correctAnswer: "That girl is very smart.", explanation: "That girl (She, singular) + is + very smart.", hindiExplanation: "Singular feminine के साथ 'is' आता है।", wordHints: [{ word: "smart", meaning: "होशियार" }], points: 10 },
  { id: "d1q020", subtopicId: "d1-t4-s2", questionText: "मेरा भाई इंजीनियर है।", questionType: "translation", difficulty: "beginner", correctAnswer: "My brother is an engineer.", explanation: "My brother (He, singular) + is + an engineer. Use 'an' before vowel sounds.", hindiExplanation: "Singular masculine के साथ 'is' आता है। Vowel से शुरू होने वाले words से पहले 'an' आता है।", wordHints: [{ word: "engineer", meaning: "इंजीनियर" }], points: 10 },
];

// ─── Subtopic: Negative Sentences ────────────────────────────
export const DAY1_NEGATIVE_SENTENCE_QUESTIONS: PracticeQ[] = [
  { id: "d1q021", subtopicId: "d1-t4-s3", questionText: "मैं थका हुआ नहीं हूँ।", questionType: "translation", difficulty: "beginner", correctAnswer: "I am not tired.", explanation: "Negative sentence: I + am + not + tired.", hindiExplanation: "Negative बनाने के लिए 'am/is/are' के बाद 'not' लगाते हैं।", wordHints: [{ word: "tired", meaning: "थका हुआ" }], points: 10 },
  { id: "d1q022", subtopicId: "d1-t4-s3", questionText: "वह ऑफिस नहीं जाती है।", questionType: "translation", difficulty: "beginner", correctAnswer: "She does not go to office.", explanation: "Negative: Subject + does not + verb (base form). She = singular, so 'does not'.", hindiExplanation: "He/She/It के साथ negative में 'does not' + verb का base form आता है।", wordHints: [{ word: "does not", meaning: "नहीं जाती (negative for singular)" }], points: 10 },
  { id: "d1q023", subtopicId: "d1-t4-s3", questionText: "हम मांस नहीं खाते।", questionType: "translation", difficulty: "beginner", correctAnswer: "We do not eat meat.", explanation: "We (plural) + do not + eat (base form). 'Do not' for I/You/We/They.", hindiExplanation: "I/You/We/They के साथ negative में 'do not' + verb का base form आता है।", wordHints: [{ word: "meat", meaning: "मांस" }], points: 10 },
  { id: "d1q024", subtopicId: "d1-t4-s3", questionText: "यह किताब मेरी नहीं है।", questionType: "translation", difficulty: "beginner", correctAnswer: "This book is not mine.", explanation: "This book (It) + is + not + mine. 'Mine' is possessive pronoun.", hindiExplanation: "'Mine' possessive pronoun है जिसका मतलब 'मेरी' होता है।", wordHints: [{ word: "mine", meaning: "मेरी (possessive pronoun)" }], points: 10 },
  { id: "d1q025", subtopicId: "d1-t4-s3", questionText: "मुझे अंग्रेज़ी नहीं आती।", questionType: "translation", difficulty: "beginner", correctAnswer: "I do not know English.", explanation: "I + do not + know + English. 'Know' is the base form.", hindiExplanation: "I के साथ negative में 'do not' + base form आता है।", wordHints: [{ word: "know", meaning: "जानना, आना" }], points: 10 },
];

// ─── Questions: Questions Sentences ──────────────────────────
export const DAY1_QUESTION_SENTENCE_QUESTIONS: PracticeQ[] = [
  { id: "d1q031", subtopicId: "d1-t4-s4", questionText: "तुम्हारा नाम क्या है?", questionType: "translation", difficulty: "beginner", correctAnswer: "What is your name?", explanation: "WH-word (What) + is (be verb) + your name?", hindiExplanation: "Question बनाने के लिए WH-word + is/are/do/does + subject pattern use करते हैं।", wordHints: [{ word: "name", meaning: "नाम" }], points: 10 },
  { id: "d1q032", subtopicId: "d1-t4-s4", questionText: "वह कहाँ रहता है?", questionType: "translation", difficulty: "beginner", correctAnswer: "Where does he live?", explanation: "Where + does (for He, singular) + he + live (base form)?", hindiExplanation: "He/She/It के साथ question में 'does' आता है।", wordHints: [{ word: "where", meaning: "कहाँ" }, { word: "live", meaning: "रहना" }], points: 10 },
  { id: "d1q033", subtopicId: "d1-t4-s4", questionText: "क्या तुम अंग्रेज़ी बोल सकते हो?", questionType: "translation", difficulty: "beginner", correctAnswer: "Can you speak English?", explanation: "Can (modal) + you + speak (base form) + English?", hindiExplanation: "Can के साथ always base form का verb आता है।", wordHints: [{ word: "can", meaning: "सकना, क्षमता होना" }], points: 10 },
  { id: "d1q034", subtopicId: "d1-t4-s4", questionText: "तुम क्या पढ़ रहे हो?", questionType: "translation", difficulty: "beginner", correctAnswer: "What are you reading?", explanation: "What + are + you + reading (present continuous)? V+ing for ongoing action.", hindiExplanation: "Present continuous में V+ing form use होती है।", wordHints: [{ word: "reading", meaning: "पढ़ रहे हो" }], points: 10 },
  { id: "d1q035", subtopicId: "d1-t4-s4", questionText: "तुम्हारे घर में कितने लोग हैं?", questionType: "translation", difficulty: "beginner", correctAnswer: "How many people are there in your house?", explanation: "How many + people + are there + in your house?", hindiExplanation: "Countable nouns के लिए 'How many' use होता है।", wordHints: [{ word: "how many", meaning: "कितने (countable के लिए)" }], points: 10 },
];

// Combine all Day 1 questions
export const ALL_DAY_1_QUESTIONS: PracticeQ[] = [
  ...DAY1_SVO_QUESTIONS,
  ...DAY1_POSITIVE_SENTENCE_QUESTIONS,
  ...DAY1_NEGATIVE_SENTENCE_QUESTIONS,
  ...DAY1_QUESTION_SENTENCE_QUESTIONS,
  // More questions are loaded from database after seeding
];
