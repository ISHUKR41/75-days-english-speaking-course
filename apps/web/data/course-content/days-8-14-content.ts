// ============================================================
// Days 8-14 Complete Lesson Content
// Topics: Will Have, Use of There, Revision, Want, Wanted, Let, Let's
// Each subtopic has rich explanations, examples, stories, dialogues
// Follows the exact LessonContent pattern from day-1-content.ts
// ============================================================

// Import the shared LessonContent type for type safety
import type { LessonContent as LessonContentType } from "@/data/course-content/day-1-content";

// ============================================================
// DAY 8 — WILL HAVE (Future Perfect Tense)
// Subtopic IDs: d8-t1-s1 through d8-t4-s3
// ============================================================

// ─── Day 8, Topic 1, Subtopic 1: Introduction to Will Have ───
// What is Future Perfect and why do we need it?
const D8_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `"Will Have" (Future Perfect Tense) is one of the most POWERFUL tenses in English!\n\nIt lets you talk about actions that WILL BE COMPLETED by a specific time in the future.\n\nYou use it when:\n• "By tomorrow, I will have finished the report."\n• "By next year, she will have completed her degree."\n• "By the time you arrive, we will have eaten dinner."\n\nWhy it matters in real life:\n✓ Professional emails: "I will have submitted the proposal by Friday."\n✓ Project planning: "By Q3, the team will have completed Phase 1."\n✓ Commitments: "I will have called him before the meeting."\n✓ Promises: "Don't worry, I will have fixed this by morning."\n\nWithout Future Perfect, you sound vague. With it, you sound PRECISE and PROFESSIONAL!`,

  conceptExplanation: `WILL HAVE = Future Perfect Tense\n\nUse it when an action will be COMPLETED before a specific future time.\n\n📌 FORMULA:\nSubject + WILL HAVE + Past Participle (3rd form of verb)\n\nPositive: I will have finished.\nNegative: I will NOT have finished. (won't have)\nQuestion: Will you have finished?\n\n📌 KEY SIGNAL WORDS:\n• By tomorrow / By Monday / By next year\n• By the time + [another clause]\n• Before + [future event]\n• By the end of [day/week/month]\n\n📌 THREE MAIN USES:\n\n1️⃣ COMPLETION before a future time:\n"By 5 PM, I will have submitted the report."\n(Report submit होगा, 5 बजे से पहले।)\n\n2️⃣ COMPLETION before another future action:\n"By the time you reach, the movie will have started."\n(तुम्हारे पहुँचने से पहले movie शुरू हो चुकी होगी।)\n\n3️⃣ DURATION up to a future time:\n"By 2025, I will have worked here for 10 years."\n(2025 तक, मैं यहाँ 10 साल काम कर चुका होऊँगा।)`,

  hindiExplanation: `WILL HAVE = भविष्य में किसी समय तक काम पूरा हो जाएगा\n\nFormula:\nSubject + will have + verb की 3rd form\n\nयह तब use होता है जब:\n• कोई काम भविष्य में एक निश्चित समय से पहले पूरा हो जाएगा\n• एक भविष्य की घटना दूसरी भविष्य की घटना से पहले पूरी होगी\n\nउदाहरण:\n• मैं कल तक report submit कर चुका होऊँगा।\n  = I will have submitted the report by tomorrow.\n\n• जब तुम आओगे, हम खाना खा चुके होंगे।\n  = By the time you come, we will have eaten.\n\n• अगले साल तक वह पढ़ाई पूरी कर चुकी होगी।\n  = By next year, she will have completed her studies.\n\nयाद रखो:\n✓ Positive: will have + 3rd form\n✓ Negative: won't have + 3rd form\n✓ Question: Will + subject + have + 3rd form?`,

  rules: [
    {
      rule: "Formula: Subject + will have + past participle (3rd form)",
      explanation: "The future perfect always uses 'will have' followed by the past participle (3rd form) of the main verb. This structure never changes regardless of the subject.",
      example: "I will have completed / She will have finished / They will have arrived / He will have submitted",
      exception: "For 'I' and 'we' in very formal British English, 'shall have' can be used instead of 'will have'. But 'will have' is universally accepted.",
    },
    {
      rule: "Use signal words: By [time], By the time, Before, By then",
      explanation: "Future perfect almost always appears with a time reference showing the deadline or completion point. These signal words are your clue to use future perfect.",
      example: "By Friday = will have done | By the time she arrives = will have left | Before the meeting = will have prepared",
      exception: "Sometimes the time reference is implied: 'Don't worry, I will have handled it.' (implies: soon/by then)",
    },
    {
      rule: "Negative: Subject + will NOT have (won't have) + past participle",
      explanation: "For negatives, add 'not' between 'will' and 'have'. The contraction 'won't have' is used in speaking. The past participle stays the same.",
      example: "I won't have finished. / She will not have arrived. / They won't have seen the announcement.",
    },
    {
      rule: "Question: Will + subject + have + past participle?",
      explanation: "For yes/no questions, move 'will' before the subject. For WH-questions, the question word comes first, then 'will + subject + have'.",
      example: "Will you have done it by Monday? / Will she have called before we meet? / What will you have accomplished by next year?",
    },
    {
      rule: "Use the correct 3rd form (past participle) of the verb",
      explanation: "The key to Future Perfect is using the correct past participle. Regular verbs add -ed, but irregular verbs have unique 3rd forms you must memorize.",
      example: "go → gone | do → done | write → written | finish → finished | eat → eaten | see → seen | make → made | take → taken",
      exception: "Some verbs have the same form for all three: cut → cut → cut | put → put → put | set → set → set | let → let → let",
    },
  ],

  commonMistakes: [
    {
      wrong: "By tomorrow, I will finish the report.",
      correct: "By tomorrow, I will have finished the report.",
      explanation: "'Will finish' is simple future (incomplete). 'Will have finished' shows completion BEFORE a deadline. 'By' + time = will have + 3rd form.",
    },
    {
      wrong: "She will have finish the project.",
      correct: "She will have finished the project.",
      explanation: "After 'will have', always use the past participle (3rd form). 'Finish' is base form — incorrect here. Use 'finished'.",
    },
    {
      wrong: "By 2025, I will have been working here for 10 years.",
      correct: "By 2025, I will have worked here for 10 years. (OR: will have been working — both can work)",
      explanation: "For duration, 'will have worked' (Future Perfect) and 'will have been working' (Future Perfect Continuous) are both acceptable, with slight meaning difference.",
    },
    {
      wrong: "Will you have eat dinner by then?",
      correct: "Will you have eaten dinner by then?",
      explanation: "In questions, still use the past participle after 'have'. 'Eat' → 'eaten' (irregular). Never use base form after 'have' in perfect tenses.",
    },
    {
      wrong: "I won't have not finished.",
      correct: "I won't have finished. / I will not have finished.",
      explanation: "Never use double negation. Either 'won't' OR 'not' — not both together.",
    },
  ],

  sentencePatterns: [
    {
      pattern: "I/We/You/He/She/They + will have + past participle + by [time]",
      hindiPattern: "[समय] तक + Subject + [verb की 3rd form] + चुका/चुकी होगा/होगी",
      examples: [
        { english: "I will have completed the assignment by 9 PM.", hindi: "मैं रात 9 बजे तक assignment पूरा कर चुका होऊँगा।" },
        { english: "She will have submitted the application by Monday.", hindi: "वह सोमवार तक application submit कर चुकी होगी।" },
        { english: "By next month, he will have earned enough money.", hindi: "अगले महीने तक उसने पर्याप्त पैसे कमा लिए होंगे।" },
        { english: "By the end of this year, we will have launched the product.", hindi: "इस साल के अंत तक हम product launch कर चुके होंगे।" },
        { english: "They will have finished building the house by December.", hindi: "वे दिसंबर तक घर बनाना पूरा कर चुके होंगे।" },
        { english: "By the time you wake up, I will have made breakfast.", hindi: "जब तुम उठोगे, तब तक मैं नाश्ता बना चुका होऊँगा।" },
        { english: "The company will have hired 100 employees by March.", hindi: "मार्च तक company 100 employees hire कर चुकी होगी।" },
      ],
    },
    {
      pattern: "Won't have + past participle + by [time] (Negative)",
      hindiPattern: "[समय] तक + Subject + नहीं [verb की 3rd form] होगा/होगी",
      examples: [
        { english: "I won't have finished the project by tomorrow.", hindi: "मैं कल तक project पूरा नहीं कर पाऊँगा।" },
        { english: "She won't have returned from the trip by Friday.", hindi: "वह शुक्रवार तक यात्रा से नहीं लौटी होगी।" },
        { english: "They won't have received the package by Monday.", hindi: "सोमवार तक उन्हें package नहीं मिला होगा।" },
        { english: "The report won't have been approved by tomorrow.", hindi: "कल तक report approve नहीं हुई होगी।" },
      ],
    },
    {
      pattern: "Will + subject + have + past participle? (Question)",
      hindiPattern: "क्या + Subject + [समय] तक + [verb की 3rd form] चुका होगा?",
      examples: [
        { english: "Will you have completed the task by 5 PM?", hindi: "क्या तुम शाम 5 बजे तक task पूरा कर चुके होंगे?" },
        { english: "Will she have arrived before the meeting starts?", hindi: "क्या वह meeting शुरू होने से पहले आ चुकी होगी?" },
        { english: "Will they have reviewed the proposal by then?", hindi: "क्या वे तब तक proposal review कर चुके होंगे?" },
        { english: "Will he have studied enough by the exam date?", hindi: "क्या वह exam तक पर्याप्त पढ़ चुका होगा?" },
      ],
    },
  ],

  speakingTips: [
    "Practice contractions: 'will have' → 'I'll have done it' — sounds more natural in speaking",
    "Always pair will have with a time phrase: 'by then', 'by tomorrow', 'by the time you...'",
    "In professional meetings, use Future Perfect for commitments: 'I will have the report ready by Friday.'",
    "Practice with irregular past participles: gone, done, seen, written, taken, made — these are the most common",
    "Record sentences like: 'By 2030, I will have achieved my goal of...' — make it personal for better memory",
  ],

  memoryTricks: [
    "Think: WILL HAVE = 'Will already be done!' — it's the future where something is already completed!",
    "Formula shortcut: WILL + HAVE + 3rd form. Three words: W-H-3!",
    "Signal word trick: Whenever you see 'BY [time]', think → 'will have + 3rd form'",
    "Compare: 'I will go' (simple future) vs 'I will have gone' (completed before a deadline)",
    "Think of it like a project deadline: 'I will have submitted by 5 PM' = deadline guarantee!",
  ],

  story: {
    title: "Priya's Big Presentation Promise",
    paragraphs: [
      "Priya is a project manager at a software company. Her client is coming for a review on Friday afternoon at 3 PM. Her manager asked, 'Will everything be ready for the client?'",
      "Priya replied confidently: 'Yes! By Friday 2 PM, I will have prepared all the slides. I will have reviewed the demo three times. The team will have tested all the features.'",
      "Her colleague Rajan asked: 'What about the report? Will you have sent it to the client before the meeting?'",
      "Priya smiled: 'By Thursday night, I will have emailed the full report to the client. By 1 PM Friday, I will have confirmed with every team member. Don't worry!'",
      "Friday morning came. By 11 AM, Priya had already sent the report. By 1 PM, the demo was tested. By 2:30 PM, everything was ready.",
      "The client arrived at 3 PM. The presentation was perfect. Priya's Future Perfect tense planning had made it a PERFECT success!",
    ],
    moral: "Future Perfect tense is the language of planning and commitment. Use it to make and keep professional promises!",
    keyWords: [
      { word: "will have prepared", meaning: "तैयार कर चुकी होगी — completion before a future time" },
      { word: "will have tested", meaning: "test कर चुके होंगे — finished testing by a deadline" },
      { word: "will have emailed", meaning: "email कर चुकी होगी — email sent before a future moment" },
      { word: "commitment", meaning: "प्रतिबद्धता — a firm promise or responsibility" },
    ],
  },

  dialogue: {
    title: "Project Planning Meeting",
    setting: "Team meeting at an IT company. Manager Vikram is asking team members about deadlines.",
    lines: [
      { speaker: "Vikram", text: "The client visit is on the 15th. Will you have finished the design by then, Sneha?", hindi: "15 तारीख को client आ रहे हैं। क्या तुम तब तक design पूरी कर चुकी होगी, Sneha?" },
      { speaker: "Sneha", text: "Yes! By the 13th, I will have completed the design and shared it for review.", hindi: "हाँ! 13 तारीख तक मैं design पूरी कर चुकी होऊँगी और review के लिए share कर दूँगी।" },
      { speaker: "Vikram", text: "What about the backend? Arun, will you have deployed the new features?", hindi: "Backend के बारे में? Arun, क्या तुमने नई features deploy कर दी होंगी?" },
      { speaker: "Arun", text: "By the 12th, I will have deployed everything. I will have run all the tests by the 14th.", hindi: "12 तारीख तक सब deploy हो जाएगा। 14 तारीख तक सारे tests run हो जाएँगे।" },
      { speaker: "Vikram", text: "Perfect! Will the presentation slides have been prepared by then?", hindi: "बढ़िया! क्या presentation slides तब तक तैयार हो जाएँगी?" },
      { speaker: "Sneha", text: "Yes, by the 14th evening, we will have prepared all slides and rehearsed twice.", hindi: "हाँ, 14 शाम तक हम सारी slides तैयार कर चुके होंगे और दो बार rehearsal भी हो जाएगी।" },
      { speaker: "Vikram", text: "Excellent! With this planning, we will have impressed the client before they even sit down!", hindi: "शानदार! इस planning के साथ, client के बैठने से पहले ही हम उन्हें impress कर चुके होंगे!" },
    ],
    notes: [
      "Future Perfect shows professional commitment to deadlines",
      "Use 'By the [date/time]' with will have for project promises",
      "This tense is critical in IT, project management, and business settings",
    ],
  },

  summary: [
    "Will Have = Future Perfect Tense — action completed BEFORE a specific future time",
    "Formula: Subject + will have + past participle (3rd form)",
    "Negative: won't have + past participle | Question: Will + subject + have + past participle?",
    "Signal words: By [time], By the time, Before [event], By then",
    "Perfect for: professional deadlines, commitments, project planning, promises",
  ],
};

// ─── Day 8, Topic 1, Subtopic 2: Structure & Formula ─────────
const D8_T1_S2: Partial<LessonContentType> = {
  whyLearnThis: `Knowing the formula of Future Perfect lets you BUILD sentences quickly and correctly.\n\nThe formula is simple:\nSubject + WILL HAVE + 3rd form (past participle)\n\nOnce you master this 3-step formula, you can make unlimited sentences!\n\nProfessional example:\n• "By Friday, I will have submitted all the reports." ✓\n• "By next month, our team will have completed the migration." ✓\n• "By the time she joins, I will have trained the intern." ✓`,

  sentencePatterns: [
    {
      pattern: "Subject + will have + past participle (Affirmative)",
      hindiPattern: "Subject + [समय] तक + verb-3rd form + चुका/चुकी होगा/होगी",
      examples: [
        { english: "By 6 AM, I will have woken up and exercised.", hindi: "सुबह 6 बजे तक मैं उठ चुका होऊँगा और exercise कर चुका होऊँगा।" },
        { english: "By noon, the chef will have prepared all the dishes.", hindi: "दोपहर तक chef सभी dishes बना चुका होगा।" },
        { english: "By the time the exam begins, I will have revised everything.", hindi: "Exam शुरू होने तक मैं सब कुछ revise कर चुका होऊँगा।" },
        { english: "By 2026, this city will have become a smart city.", hindi: "2026 तक यह शहर smart city बन चुका होगा।" },
        { english: "By the time he retires, he will have served 35 years.", hindi: "Retirement तक उन्होंने 35 साल सेवा कर ली होगी।" },
        { english: "By next week, I will have learned 200 new words.", hindi: "अगले हफ्ते तक मैं 200 नए शब्द सीख चुका होऊँगा।" },
        { english: "By our anniversary, we will have been married for 10 years.", hindi: "हमारी anniversary तक हमें शादी के 10 साल हो चुके होंगे।" },
        { english: "By tomorrow morning, the download will have completed.", hindi: "कल सुबह तक download पूरी हो चुकी होगी।" },
        { english: "By the end of the semester, students will have read 15 books.", hindi: "Semester के अंत तक students 15 किताबें पढ़ चुके होंगे।" },
        { english: "By 8 PM, the match will have ended.", hindi: "शाम 8 बजे तक match खत्म हो चुका होगा।" },
      ],
    },
    {
      pattern: "Subject + won't have + past participle (Negative)",
      hindiPattern: "Subject + [समय] तक + verb-3rd form + नहीं होगा/होगी",
      examples: [
        { english: "She won't have reached home by 9 PM.", hindi: "वह रात 9 बजे तक घर नहीं पहुँची होगी।" },
        { english: "The new software won't have been installed by Monday.", hindi: "सोमवार तक नया software install नहीं हुआ होगा।" },
        { english: "We won't have eaten dinner by the time they arrive.", hindi: "उनके आने तक हम खाना नहीं खाए होंगे।" },
        { english: "He won't have completed his studies by next year.", hindi: "अगले साल तक उसकी पढ़ाई पूरी नहीं होगी।" },
        { english: "The construction won't have finished before winter.", hindi: "सर्दियों से पहले निर्माण पूरा नहीं हुआ होगा।" },
      ],
    },
    {
      pattern: "Will + subject + have + past participle? (Question)",
      hindiPattern: "क्या + Subject + [समय] तक + verb-3rd form + चुका होगा?",
      examples: [
        { english: "Will you have finished your homework before dinner?", hindi: "क्या तुम रात के खाने से पहले homework पूरा कर लोगे?" },
        { english: "Will she have recovered from her illness by Saturday?", hindi: "क्या वह शनिवार तक अपनी बीमारी से ठीक हो जाएगी?" },
        { english: "Will the team have delivered the project on time?", hindi: "क्या team ने project समय पर deliver किया होगा?" },
        { english: "Will you have saved enough money by the end of the year?", hindi: "क्या तुमने साल के अंत तक पर्याप्त पैसे बचाए होंगे?" },
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "By tomorrow, she will finished the work.",
      correct: "By tomorrow, she will have finished the work.",
      explanation: "You MUST include 'have' between 'will' and the past participle. 'Will + 3rd form' is wrong — it must be 'will HAVE + 3rd form'.",
    },
    {
      wrong: "By next year, I will have graduate.",
      correct: "By next year, I will have graduated.",
      explanation: "Use the past participle form: graduate → graduated. Never use base form after 'will have'.",
    },
  ],

  summary: [
    "Three-step formula: Subject + WILL HAVE + 3rd form",
    "Always use past participle (3rd form) after 'will have'",
    "Regular verbs: add -ed | Irregular verbs: unique 3rd forms (go→gone, eat→eaten)",
    "Won't have = negative | Will...have...? = question",
    "Most used with: By [time], By the time, Before, By then",
  ],
};

// ─── Day 8, Topic 2, Subtopic 1: Daily Life Sentences ────────
const D8_T2_S1: Partial<LessonContentType> = {
  whyLearnThis: `Future Perfect tense appears in REAL daily life constantly!\n\nAt home:\n• "By the time you come back, I will have cooked dinner."\n• "By 10 PM, the kids will have slept."\n\nIn daily planning:\n• "By Sunday, I will have completed my revision."\n• "By next month, I will have saved ₹10,000."\n\nIn conversations:\n• "By the time the movie ends, it will have rained outside."\n\nLearning this lets you plan, commit, and communicate PRECISELY!`,

  sentencePatterns: [
    {
      pattern: "Future Perfect in Daily Life Situations",
      hindiPattern: "रोज़मर्रा की ज़िंदगी में Future Perfect",
      examples: [
        { english: "By the time Dad arrives, I will have washed the dishes.", hindi: "पापा के आने तक मैं बर्तन धो चुका होऊँगा।" },
        { english: "By Sunday evening, I will have finished reading this novel.", hindi: "रविवार शाम तक मैं यह novel पढ़ चुका होऊँगा।" },
        { english: "By morning, the rain will have stopped.", hindi: "सुबह तक बारिश रुक चुकी होगी।" },
        { english: "By the time school starts, he will have learned to cycle.", hindi: "School शुरू होने तक वह cycle चलाना सीख चुका होगा।" },
        { english: "By next Diwali, we will have moved to the new house.", hindi: "अगली Diwali तक हम नए घर में shift हो चुके होंगे।" },
        { english: "By the time the guests arrive, she will have prepared the food.", hindi: "मेहमानों के आने तक वह खाना बना चुकी होगी।" },
        { english: "By tonight, I will have called all my relatives.", hindi: "आज रात तक मैं सभी रिश्तेदारों को call कर चुका होऊँगा।" },
        { english: "By next month, I will have saved enough for the trip.", hindi: "अगले महीने तक मैंने यात्रा के लिए पर्याप्त पैसे बचा लिए होंगे।" },
        { english: "By the time the power comes back, my phone will have died.", hindi: "बिजली आने तक मेरा phone बंद हो चुका होगा।" },
        { english: "By her birthday, I will have bought her a gift.", hindi: "उसके जन्मदिन तक मैं उसके लिए gift खरीद चुका होऊँगा।" },
        { english: "By the time the class begins, I will have done the homework.", hindi: "Class शुरू होने तक मैं homework कर चुका होऊँगा।" },
        { english: "By 8 AM tomorrow, I will have already exercised for an hour.", hindi: "कल सुबह 8 बजे तक मैं एक घंटे exercise कर चुका होऊँगा।" },
      ],
    },
  ],

  summary: [
    "Use Future Perfect in daily life for promises and plans",
    "Common in household contexts: cooking, cleaning, shopping, sleeping",
    "Always connect to a time: 'by the time you...', 'by tonight', 'by morning'",
    "Makes your communication more precise and trustworthy",
  ],
};

// ─── Day 8, Topic 2, Subtopic 2: Professional & Office Usage ─
const D8_T2_S2: Partial<LessonContentType> = {
  whyLearnThis: `In professional settings, Future Perfect is used CONSTANTLY for:\n• Project deadlines: "I will have submitted the proposal by Monday."\n• Status updates: "By the time you join the call, I will have shared the deck."\n• Commitments: "The team will have reviewed the code by Thursday."\n• Interview answers: "By the end of next year, I will have gained two years of experience."\n\nMastering this tense makes you sound like a CONFIDENT PROFESSIONAL!`,

  sentencePatterns: [
    {
      pattern: "Future Perfect in Professional Settings",
      hindiPattern: "Professional माहौल में Future Perfect",
      examples: [
        { english: "By Friday, I will have sent you the complete analysis report.", hindi: "शुक्रवार तक मैं तुम्हें पूरी analysis report भेज चुका होऊँगा।" },
        { english: "By the time the client arrives, we will have set up the demo.", hindi: "Client के आने तक हम demo setup कर चुके होंगे।" },
        { english: "By Q2, the product will have reached 10,000 users.", hindi: "Q2 तक product 10,000 users तक पहुँच चुका होगा।" },
        { english: "I will have reviewed your code before the deployment.", hindi: "Deployment से पहले मैं तुम्हारा code review कर चुका होऊँगा।" },
        { english: "By the end of this sprint, we will have implemented all features.", hindi: "इस sprint के अंत तक हम सभी features implement कर चुके होंगे।" },
        { english: "By next month, she will have completed her certification course.", hindi: "अगले महीने तक वह certification course पूरा कर चुकी होगी।" },
        { english: "By the time the report is due, I will have gathered all the data.", hindi: "Report जमा होने की date तक मैं सारा data इकट्ठा कर चुका होऊँगा।" },
        { english: "Our manager will have approved the budget before the meeting.", hindi: "Meeting से पहले हमारे manager budget approve कर चुके होंगे।" },
        { english: "By tomorrow morning, the server will have been upgraded.", hindi: "कल सुबह तक server upgrade हो चुका होगा।" },
        { english: "By the time you onboard, I will have documented the entire process.", hindi: "तुम्हारे join करने तक मैं पूरी process document कर चुका होऊँगा।" },
        { english: "By next year, I will have gained three years of experience.", hindi: "अगले साल तक मेरे पास तीन साल का experience हो जाएगा।" },
        { english: "By the deadline, the entire team will have tested the application.", hindi: "Deadline तक पूरी team application test कर चुकी होगी।" },
      ],
    },
  ],

  summary: [
    "Future Perfect is essential in professional communication for deadlines",
    "Use in project timelines, status updates, team coordination",
    "Perfect for job interviews: shows planning and commitment",
    "Sounds more professional than simple future in work settings",
  ],
};

// ─── Day 8, Topic 3, Subtopic 1: Key Vocabulary ───────────────
const D8_T3_S1: Partial<LessonContentType> = {
  whyLearnThis: `To use Future Perfect effectively, you need to know the PAST PARTICIPLES (3rd forms) of common verbs.\n\nThis vocabulary list gives you the 50 most important verbs with their past participles — so you can build Future Perfect sentences INSTANTLY!`,

  sentencePatterns: [
    {
      pattern: "Common Verbs and Their Past Participles for Future Perfect",
      hindiPattern: "सामान्य verbs और उनके past participles",
      examples: [
        { english: "finish → finished: I will have finished.", hindi: "खत्म करना → खत्म किया — मैं खत्म कर चुका होऊँगा।" },
        { english: "complete → completed: We will have completed.", hindi: "पूरा करना → पूरा किया — हम पूरा कर चुके होंगे।" },
        { english: "submit → submitted: She will have submitted.", hindi: "जमा करना → जमा किया — वह जमा कर चुकी होगी।" },
        { english: "send → sent: I will have sent.", hindi: "भेजना → भेजा — मैंने भेज दिया होगा।" },
        { english: "write → written: He will have written.", hindi: "लिखना → लिखा — उसने लिखा होगा।" },
        { english: "read → read: I will have read.", hindi: "पढ़ना → पढ़ा — मैं पढ़ चुका होऊँगा।" },
        { english: "eat → eaten: They will have eaten.", hindi: "खाना → खाया — वे खा चुके होंगे।" },
        { english: "go → gone: She will have gone.", hindi: "जाना → गया/गई — वह जा चुकी होगी।" },
        { english: "come → come: He will have come.", hindi: "आना → आया — वह आ चुका होगा।" },
        { english: "do → done: I will have done.", hindi: "करना → किया — मैंने किया होगा।" },
        { english: "make → made: We will have made.", hindi: "बनाना → बनाया — हमने बनाया होगा।" },
        { english: "take → taken: She will have taken.", hindi: "लेना → लिया — उसने लिया होगा।" },
        { english: "see → seen: I will have seen.", hindi: "देखना → देखा — मैंने देखा होगा।" },
        { english: "give → given: He will have given.", hindi: "देना → दिया — उसने दिया होगा।" },
        { english: "speak → spoken: I will have spoken.", hindi: "बोलना → बोला — मैंने बात की होगी।" },
      ],
    },
  ],

  summary: [
    "Regular verbs: add -ed (finish→finished, submit→submitted, complete→completed)",
    "Irregular verbs: must memorize (go→gone, eat→eaten, write→written, see→seen)",
    "Some verbs don't change: read→read, cut→cut, put→put, let→let",
    "Practice: write 10 verbs' 3rd forms daily until you know them automatically",
  ],
};

// ─── Day 8, Topic 3, Subtopic 3: Story & Dialogue ─────────────
const D8_T3_S3: Partial<LessonContentType> = {
  story: {
    title: "The Student's 75-Day Challenge",
    paragraphs: [
      "Ravi started the 75 Hard English Challenge. On Day 1, he set goals: 'By Day 75, I will have learned every grammar topic.'",
      "On Day 8, he studied Future Perfect tense. He practiced: 'By Day 15, I will have practiced 1,000 sentences. By Day 30, I will have mastered all tenses.'",
      "His friend Kavya teased him: 'Will you have actually finished by Day 75?'",
      "Ravi smiled: 'Yes! By Day 75, I will have written 500 example sentences. I will have learned 2,000 new words. I will have spoken English for 75 consecutive days!'",
      "Day 75 arrived. Ravi had done everything he promised. He stood confidently in front of his English class and spoke fluently. His teacher said, 'By the time this class ends, you will have inspired everyone here!'",
    ],
    moral: "Future Perfect tense is the language of goal-setting and commitment. Make promises using 'will have' and then KEEP them!",
    keyWords: [
      { word: "challenge", meaning: "चुनौती — a difficult but rewarding task" },
      { word: "goal", meaning: "लक्ष्य — something you aim to achieve" },
      { word: "consecutive", meaning: "लगातार — one after another without a break" },
      { word: "fluently", meaning: "धाराप्रवाह — speaking smoothly and easily" },
    ],
  },

  dialogue: {
    title: "Study Partners Discussing Exam Preparation",
    setting: "Two students Mohan and Tanu are planning their exam strategy.",
    lines: [
      { speaker: "Mohan", text: "Exams are in two weeks. Will you have revised all chapters by then?", hindi: "Exams दो हफ्ते में हैं। क्या तुमने तब तक सभी chapters revise कर लिए होंगे?" },
      { speaker: "Tanu", text: "Yes! By this Sunday, I will have finished units 1 to 5. By next Thursday, I will have covered everything.", hindi: "हाँ! इस रविवार तक units 1 से 5 पूरे हो जाएँगे। अगले गुरुवार तक सब cover हो जाएगा।" },
      { speaker: "Mohan", text: "What about practice papers? Will you have attempted at least 5 mock tests?", hindi: "Practice papers के बारे में? क्या तुमने कम से कम 5 mock tests दिए होंगे?" },
      { speaker: "Tanu", text: "By the day before the exam, I will have attempted 8 mock tests and reviewed all mistakes.", hindi: "Exam से एक दिन पहले तक मैं 8 mock tests दे चुकी होऊँगी और सारी गलतियाँ review कर चुकी होऊँगी।" },
      { speaker: "Mohan", text: "Excellent! By exam day, we will have studied together for 60 hours!", hindi: "शानदार! Exam के दिन तक हम 60 घंटे साथ पढ़ चुके होंगे!" },
      { speaker: "Tanu", text: "And by the time results come out, I will have almost forgotten how nervous I was!", hindi: "और जब results आएँगे, तब तक मैं लगभग भूल चुकी होऊँगी कि मैं कितनी nervous थी!" },
    ],
    notes: [
      "Future Perfect expresses study plans and exam preparation realistically",
      "Use 'by then', 'by [day]', 'by the time' to signal the completion point",
      "Pair with numbers (5 mock tests, 8 mock tests) for specific, credible commitments",
    ],
  },

  summary: [
    "Future Perfect (Will Have) = action completed BEFORE a future point",
    "Formula: Subject + will have + past participle",
    "Key time signals: by, by the time, before, by then",
    "Uses: deadlines, plans, promises, professional commitments",
    "Master 3rd forms (past participles) to use this tense fluently!",
  ],
};

// ============================================================
// DAY 9 — USE OF THERE (There is / There are / There was / There were)
// Subtopic IDs: d9-t1-s1 through d9-t4-s3
// ============================================================

// ─── Day 9, Topic 1, Subtopic 1: Introduction to "There" ─────
const D9_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `"There is", "There are", "There was", "There were" — you use these EVERY DAY!\n\nWhenever you say something EXISTS or something is LOCATED somewhere, you use "There":\n• "There is a dog in the garden."\n• "There are many students in the class."\n• "There was a problem in the system."\n• "There were no seats available."\n\nIn daily life:\n✓ Describing places: "There is a hospital near my house."\n✓ Telling stories: "Once there was a brave king..."\n✓ Office: "There is an urgent email from the client."\n✓ Shopping: "There are no more apples left."\n\nWithout "There is/are", you cannot describe the world around you!`,

  conceptExplanation: `THERE IS / THERE ARE — Existence and Location\n\n"There" here is NOT a place word (not = "वहाँ"). It is used to INTRODUCE a subject and show that something EXISTS.\n\n🎯 THE KEY RULE:\n• THERE IS = Singular (एक चीज़ या व्यक्ति)\n• THERE ARE = Plural (बहुत सारी चीज़ें या लोग)\n• THERE WAS = Singular + Past (पहले एक था)\n• THERE WERE = Plural + Past (पहले बहुत थे)\n\nFORMULA:\nPresent: There + is/are + Subject + location/description\nPast: There + was/were + Subject + location/description\n\nEXAMPLES:\n✓ There IS a cat on the roof. (singular present)\n✓ There ARE ten students in the room. (plural present)\n✓ There WAS a shop here before. (singular past)\n✓ There WERE many trees in this area. (plural past)\n\nNEGATIVE:\nThere is no... / There isn't a...\nThere are no... / There aren't any...\nThere was no... / There wasn't a...\nThere were no... / There weren't any...\n\nQUESTION:\nIs there a...? / Are there any...?\nWas there a...? / Were there any...?`,

  hindiExplanation: `"There is / There are" = किसी चीज़ का होना या मौजूद होना बताना\n\nयहाँ "There" का मतलब "वहाँ" नहीं है!\nयह एक GRAMMAR WORD है जो sentence को शुरू करता है।\n\n📌 कब क्या use करें:\n• एक चीज़ (singular) + Present = THERE IS\n  (एक किताब है मेज़ पर। = There is a book on the table.)\n\n• बहुत सी चीज़ें (plural) + Present = THERE ARE\n  (मेज़ पर बहुत सी किताबें हैं। = There are many books on the table.)\n\n• एक चीज़ (singular) + Past = THERE WAS\n  (पहले यहाँ एक दुकान थी। = There was a shop here.)\n\n• बहुत सी चीज़ें (plural) + Past = THERE WERE\n  (यहाँ पहले बहुत पेड़ थे। = There were many trees here.)\n\nNegative:\n• There is no milk. (दूध नहीं है।)\n• There are no eggs. (अंडे नहीं हैं।)\n• There was no water. (पानी नहीं था।)\n• There were no buses. (बसें नहीं थीं।)`,

  rules: [
    {
      rule: "There IS with singular nouns (Present)",
      explanation: "Use 'there is' when the noun after it is singular (one item or person). The verb 'is' matches the singular subject that follows 'there'.",
      example: "There is a problem. / There is a new student. / There is milk in the fridge. / There is an urgent message for you.",
      exception: "With 'there is', we use 'a/an' before singular countable nouns: 'There is A book.' Not: 'There is book.'",
    },
    {
      rule: "There ARE with plural nouns (Present)",
      explanation: "Use 'there are' when the noun is plural (more than one). 'Are' matches the plural subject that follows.",
      example: "There are five students. / There are many options. / There are two solutions to this problem. / There are lots of opportunities.",
      exception: "When listing items and the FIRST item is plural, use 'are': 'There are books, a pen, and a pencil on the table.'",
    },
    {
      rule: "There WAS with singular nouns (Past)",
      explanation: "For past tense with a singular noun, use 'there was'. It describes something that existed or occurred in the past.",
      example: "There was a big tree here. / There was an accident on the highway. / There was a time when... / There was no internet then.",
    },
    {
      rule: "There WERE with plural nouns (Past)",
      explanation: "For past tense with a plural noun, use 'there were'. It describes multiple things or people that existed in the past.",
      example: "There were many students before. / There were no smartphones then. / There were three candidates for the job. / There were many problems.",
    },
    {
      rule: "Negative: There is/are/was/were + NO + noun OR isn't/aren't/wasn't/weren't + any",
      explanation: "Two ways to make negatives: (1) There is/are NO + noun | (2) There isn't/aren't ANY + noun. Both are correct but have slightly different emphasis.",
      example: "There is no time. / There isn't any time. / There are no buses. / There aren't any buses. / There was no food. / There weren't any seats.",
    },
    {
      rule: "Question: Is there / Are there / Was there / Were there + ?",
      explanation: "For questions, simply move is/are/was/were before 'there'. For WH-questions, add the question word first.",
      example: "Is there a doctor here? / Are there any vacancies? / Was there a problem? / Were there many people? / How many people are there? / What is there to eat?",
    },
  ],

  commonMistakes: [
    {
      wrong: "There is many books on the table.",
      correct: "There are many books on the table.",
      explanation: "'Many books' is plural → use ARE. 'There IS' only for singular (one thing). 'There ARE' for plural (more than one).",
    },
    {
      wrong: "There are a dog in the garden.",
      correct: "There is a dog in the garden.",
      explanation: "'A dog' is singular → use IS. Never 'There ARE a dog'. Match is/are to the noun that follows.",
    },
    {
      wrong: "There is no any milk in the fridge.",
      correct: "There is no milk in the fridge. / There isn't any milk in the fridge.",
      explanation: "Don't use 'no any' together. Use EITHER 'no' OR 'any (with isn't/aren't)'. Never combine both.",
    },
    {
      wrong: "Is there any problem? Yes, there is a.",
      correct: "Is there any problem? Yes, there is one. / Yes, there is.",
      explanation: "Short answer: 'Yes, there is.' (not 'there is a'). For 'no': 'No, there isn't.'",
    },
    {
      wrong: "There has many students in the school.",
      correct: "There are many students in the school.",
      explanation: "Never use 'there has'. The structure is always There + is/are/was/were. Never 'there has' for existence.",
    },
    {
      wrong: "There were a accident yesterday.",
      correct: "There was an accident yesterday.",
      explanation: "Accident is singular → use WAS (not WERE). Also, 'a' → 'an' before words starting with vowel sounds.",
    },
  ],

  sentencePatterns: [
    {
      pattern: "There is/are + noun + location (Present — something exists)",
      hindiPattern: "वहाँ/यहाँ + [noun] + [है/हैं] — मौजूदगी बताना",
      examples: [
        { english: "There is a beautiful park near my house.", hindi: "मेरे घर के पास एक सुंदर पार्क है।" },
        { english: "There are three new students in our class today.", hindi: "आज हमारी class में तीन नए students हैं।" },
        { english: "There is a traffic jam on the main road.", hindi: "Main road पर traffic jam है।" },
        { english: "There are many job opportunities in this city.", hindi: "इस शहर में बहुत job opportunities हैं।" },
        { english: "There is a letter for you on the table.", hindi: "Table पर तुम्हारे लिए एक letter है।" },
        { english: "There are several options we can consider.", hindi: "कई options हैं जिन पर हम विचार कर सकते हैं।" },
        { english: "There is no electricity in the area right now.", hindi: "अभी इस इलाके में बिजली नहीं है।" },
        { english: "There are no vegetables left in the fridge.", hindi: "Fridge में कोई सब्ज़ी नहीं बची है।" },
        { english: "There is a meeting at 3 PM today.", hindi: "आज शाम 3 बजे meeting है।" },
        { english: "There are fifty employees in our department.", hindi: "हमारे department में पचास employees हैं।" },
      ],
    },
    {
      pattern: "There was/were + noun + [time] (Past — something existed)",
      hindiPattern: "पहले + [noun] + था/थे — भूतकाल में मौजूदगी",
      examples: [
        { english: "There was a cinema hall here twenty years ago.", hindi: "बीस साल पहले यहाँ एक cinema hall था।" },
        { english: "There were no mobile phones when my parents were young.", hindi: "जब मेरे माता-पिता जवान थे, तब mobile phones नहीं थे।" },
        { english: "There was a big flood in this region last year.", hindi: "पिछले साल इस इलाके में बड़ी बाढ़ आई थी।" },
        { english: "There were many trees in this area before.", hindi: "पहले इस इलाके में बहुत पेड़ थे।" },
        { english: "There was a time when this was a small village.", hindi: "एक समय था जब यह एक छोटा सा गाँव था।" },
        { english: "There were no computers in offices 50 years ago.", hindi: "50 साल पहले offices में कोई computer नहीं था।" },
        { english: "There was an error in the system last night.", hindi: "कल रात system में एक error था।" },
        { english: "There were hundreds of people at the event.", hindi: "Event में सैकड़ों लोग थे।" },
      ],
    },
    {
      pattern: "Is there / Are there / Was there / Were there? (Questions)",
      hindiPattern: "क्या [वहाँ/यहाँ] + [noun] + है/हैं/था/थे?",
      examples: [
        { english: "Is there a hospital nearby?", hindi: "क्या पास में कोई hospital है?" },
        { english: "Are there any vegetarian options on the menu?", hindi: "क्या menu में कोई vegetarian options हैं?" },
        { english: "Was there a power cut last night?", hindi: "क्या कल रात बिजली गई थी?" },
        { english: "Were there enough chairs for everyone?", hindi: "क्या सभी के लिए पर्याप्त कुर्सियाँ थीं?" },
        { english: "Is there anything I can do for you?", hindi: "क्या कुछ है जो मैं तुम्हारे लिए कर सकता हूँ?" },
        { english: "Are there any complaints from the customers?", hindi: "क्या customers की कोई शिकायतें हैं?" },
      ],
    },
  ],

  speakingTips: [
    "Practice the difference: 'There IS a...' (singular) vs 'There ARE...' (plural) — common speaking error!",
    "In natural speech, 'there is' becomes 'there's': 'There's a problem.' / 'There's no time.'",
    "For 'there are', no common contraction — always say 'there are' fully in formal settings",
    "Use 'there' + be verb naturally in descriptions: describe your city, room, workplace",
    "Practice storytelling: 'Once there was a king who had three sons...' — stories use 'there was' constantly",
  ],

  memoryTricks: [
    "IS = 1 thing (both have 2 letters → I-S for 1 item!) | ARE = 2+ things (longer word = more things!)",
    "WAS = past of IS | WERE = past of ARE — same matching rule applies in past!",
    "Think: 'There is a book' = 1 book, one finger held up. 'There are books' = multiple fingers!",
    "Singular/Plural trick: Count the noun after 'there'. One item → IS. Multiple items → ARE.",
    "'There' in this use = NOT a place (not वहाँ) — it's just a dummy subject to start the sentence!",
  ],

  story: {
    title: "The Old Village That Changed",
    paragraphs: [
      "Grandma Kamla sat with her grandchildren and began to speak. 'Children, let me tell you about our old village.'",
      "'When I was young, there was a large lake near the village. There were many fish in it. There were tall mango trees all around.'",
      "'There were no cars then. There was only one school in the entire area. There were 50 students in that school — and all 50 sat in one room!'",
      "'Now look at our town today. There are five schools. There are hundreds of cars. There are big hospitals and shopping malls.'",
      "'But is there still a lake?' asked little Arav. Grandma shook her head slowly. 'No, beta. There is no lake anymore. There are only buildings where the lake once was.'",
      "'There is a lesson in this,' said Grandma. 'There is value in what we had before. There is hope in what we can build — but only if there is wisdom in our decisions.'",
    ],
    moral: "There is wisdom in the past, there is hope in the present, and there is opportunity in the future — use 'there is/are/was/were' to tell these stories!",
    keyWords: [
      { word: "there is / there are", meaning: "कुछ का मौजूद होना — something exists (present)" },
      { word: "there was / there were", meaning: "पहले कुछ था — something existed (past)" },
      { word: "there is no", meaning: "कुछ नहीं है — something does not exist" },
      { word: "there were no", meaning: "पहले कुछ नहीं था — something did not exist in the past" },
    ],
  },

  dialogue: {
    title: "Looking for a Hotel Room",
    setting: "Rajesh has arrived at a hotel and is asking the receptionist about available rooms.",
    lines: [
      { speaker: "Rajesh", text: "Excuse me, is there a room available for tonight?", hindi: "Excuse me, क्या आज रात के लिए कोई room available है?" },
      { speaker: "Receptionist", text: "Yes sir, there are two rooms available — one single and one double.", hindi: "जी हाँ sir, दो rooms available हैं — एक single और एक double।" },
      { speaker: "Rajesh", text: "Is there a room with a good view?", hindi: "क्या कोई room है जिसमें अच्छा view हो?" },
      { speaker: "Receptionist", text: "There is a double room on the 5th floor with a garden view. There are no rooms with a sea view available right now.", hindi: "5th floor पर एक double room है जिसमें garden का view है। अभी sea view वाला कोई room available नहीं है।" },
      { speaker: "Rajesh", text: "Is there a gym and a pool in the hotel?", hindi: "क्या hotel में gym और pool है?" },
      { speaker: "Receptionist", text: "Yes! There is a gym on the 2nd floor. There is also a rooftop pool. There are towels and equipment available for guests.", hindi: "हाँ! 2nd floor पर gym है। Rooftop पर pool भी है। Guests के लिए towels और equipment available हैं।" },
      { speaker: "Rajesh", text: "Were there any complaints about the rooms recently?", hindi: "क्या हाल ही में rooms के बारे में कोई शिकायतें थीं?" },
      { speaker: "Receptionist", text: "No sir, there were no complaints last week. There was one minor maintenance issue but it was resolved.", hindi: "नहीं sir, पिछले हफ्ते कोई शिकायत नहीं थी। एक छोटी सी maintenance problem थी लेकिन वह ठीक हो गई।" },
    ],
    notes: [
      "Notice: 'Is there' (singular question) vs 'Are there' (plural question)",
      "'There is no' = negative for singular | 'There are no' = negative for plural",
      "'There was' and 'There were' used naturally for past information about the hotel",
    ],
  },

  summary: [
    "There IS = singular, present | There ARE = plural, present",
    "There WAS = singular, past | There WERE = plural, past",
    "Negative: There is NO / There isn't any | There are NO / There aren't any",
    "Question: Is there? / Are there? / Was there? / Were there?",
    "Used for: existence, location, availability, introducing subjects",
  ],
};

// ─── Day 9, Topic 2, Subtopic 1: Daily Life Sentences ────────
const D9_T2_S1: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "There is/are in Daily Life",
      hindiPattern: "रोज़मर्रा की ज़िंदगी में There is/are",
      examples: [
        { english: "There is a lot of traffic on this road in the morning.", hindi: "सुबह इस सड़क पर बहुत traffic होती है।" },
        { english: "There are two ATMs near our colony.", hindi: "हमारी colony के पास दो ATM हैं।" },
        { english: "There is no water in the tank today.", hindi: "आज tank में पानी नहीं है।" },
        { english: "There are many good restaurants in this area.", hindi: "इस इलाके में कई अच्छे restaurants हैं।" },
        { english: "There is a power cut in our building.", hindi: "हमारी building में बिजली नहीं है।" },
        { english: "There are three messages from Mom on my phone.", hindi: "मेरे phone पर Mom के तीन messages हैं।" },
        { english: "There is no sugar left in the kitchen.", hindi: "Kitchen में चीनी नहीं बची है।" },
        { english: "There are enough chairs for all the guests.", hindi: "सभी मेहमानों के लिए पर्याप्त कुर्सियाँ हैं।" },
        { english: "There is a holiday next Monday.", hindi: "अगले सोमवार को छुट्टी है।" },
        { english: "There are many good books in the library.", hindi: "Library में बहुत अच्छी किताबें हैं।" },
        { english: "There was no sound from the neighbor's house.", hindi: "पड़ोसी के घर से कोई आवाज़ नहीं थी।" },
        { english: "There were many people at the temple this morning.", hindi: "आज सुबह मंदिर में बहुत लोग थे।" },
        { english: "Is there a doctor in this building?", hindi: "क्या इस building में कोई doctor है?" },
        { english: "Are there any good schools nearby?", hindi: "क्या पास में कोई अच्छे schools हैं?" },
        { english: "There is no need to worry — I am here.", hindi: "चिंता की कोई ज़रूरत नहीं — मैं यहाँ हूँ।" },
      ],
    },
  ],

  summary: [
    "Use 'There is/are' for everyday descriptions of places, things, availability",
    "Match is/are to singular/plural noun AFTER 'there' — not a pronoun before",
    "Very common in conversations about home, neighborhood, shops, travel",
    "Practice: describe your room, your street, your city using There is/are",
  ],
};

// ─── Day 9, Topic 2, Subtopic 2: Professional & Office Usage ─
const D9_T2_S2: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "There is/are in Professional Context",
      hindiPattern: "Office और Professional माहौल में There is/are",
      examples: [
        { english: "There is an urgent email from the client.", hindi: "Client का एक urgent email है।" },
        { english: "There are three items on today's meeting agenda.", hindi: "आज की meeting agenda में तीन items हैं।" },
        { english: "There is a bug in the code that needs to be fixed.", hindi: "Code में एक bug है जिसे fix करना है।" },
        { english: "There are many opportunities in this project.", hindi: "इस project में बहुत opportunities हैं।" },
        { english: "There is no approval from the manager yet.", hindi: "अभी manager का approval नहीं आया है।" },
        { english: "There were several complaints from customers last quarter.", hindi: "पिछली quarter में customers की कई शिकायतें थीं।" },
        { english: "Is there a backup of the deleted file?", hindi: "क्या deleted file का कोई backup है?" },
        { english: "Are there any pending tasks from yesterday?", hindi: "क्या कल के कोई pending tasks हैं?" },
        { english: "There is a new company policy starting next month.", hindi: "अगले महीने से एक नई company policy शुरू हो रही है।" },
        { english: "There are two candidates shortlisted for the interview.", hindi: "Interview के लिए दो candidates shortlist हुए हैं।" },
        { english: "There was a system outage this morning.", hindi: "आज सुबह system down था।" },
        { english: "There were no objections from the team members.", hindi: "Team members की ओर से कोई आपत्ति नहीं थी।" },
      ],
    },
  ],

  summary: [
    "There is/are is essential in professional emails, reports, and meetings",
    "Use it to announce problems, opportunities, updates, and changes",
    "Sounds more professional than 'I see a problem' → 'There is a problem'",
    "Practice writing 5 professional emails using There is/are/was/were today",
  ],
};

// ============================================================
// DAY 10 — REVISION + PRACTICE (Days 1-9)
// Subtopic IDs: d10-t1-s1, d10-t1-s2, d10-t1-s3, d10-t2-s1, etc.
// Day 10 is a revision day with 3 topics
// ============================================================

// ─── Day 10, Topic 1, Subtopic 1: Key Concepts Review ────────
const D10_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `Day 10 is REVISION DAY — one of the most important days of your 75-day journey!\n\nResearch shows: Revising after 9 days helps you remember 80% more!\n\nToday we review EVERYTHING from Days 1-9:\n• Day 1: Basics of English\n• Day 2: Self Introduction\n• Day 3: Imperative Sentences\n• Day 4: Be Verb (am/is/are/was/were)\n• Day 5: Demonstrative Pronouns (this/that/these/those)\n• Day 6: Has / Have\n• Day 7: Had\n• Day 8: Will Have (Future Perfect)\n• Day 9: Use of There\n\nThis revision will make ALL these concepts stick PERMANENTLY!`,

  conceptExplanation: `QUICK REVIEW: Days 1-9 Key Points\n\n✅ DAY 3 — IMPERATIVE:\nVerb (base form) + rest [No subject!]\n• Come here. / Please sit. / Don't run.\n\n✅ DAY 4 — BE VERB:\nI=AM | He/She/It=IS | You/We/They=ARE\nPast: I/He/She/It=WAS | You/We/They=WERE\n\n✅ DAY 5 — DEMONSTRATIVES:\nNear: THIS (singular) / THESE (plural)\nFar: THAT (singular) / THOSE (plural)\n\n✅ DAY 6 — HAS / HAVE:\nI/You/We/They=HAVE | He/She/It=HAS\n\n✅ DAY 7 — HAD:\nAll subjects → HAD (past of have)\n\n✅ DAY 8 — WILL HAVE:\nSubject + will have + 3rd form (Future Perfect)\n\n✅ DAY 9 — THERE IS/ARE:\nThere IS (singular) | There ARE (plural)\nThere WAS (past singular) | There WERE (past plural)`,

  hindiExplanation: `Days 1-9 का Quick Revision:\n\n🔷 Imperative = Verb से शुरू (subject नहीं)\n  "जाओ = Go!" / "मत रो = Don't cry!"\n\n🔷 Be Verb:\n  मैं = am | वह/यह = is | हम/वे = are\n  था/थी = was | थे/थीं = were\n\n🔷 This/That/These/Those:\n  यह = This | वह = That | ये = These | वे = Those\n\n🔷 Has/Have:\n  मेरे पास है = I have | उसके पास है = She has\n\n🔷 Had:\n  सब के साथ had: I had / She had / They had\n\n🔷 Will Have:\n  [समय] तक + will have + 3rd form\n  "By Friday, I will have done it."\n\n🔷 There is/are:\n  एक चीज़ = There is | बहुत चीज़ें = There are`,

  rules: [
    {
      rule: "Imperative = Verb (base form) — no subject",
      explanation: "Commands and requests start with the verb. Subject 'you' is always hidden. Negative: Don't + verb.",
      example: "Go! / Come here. / Please sit down. / Don't worry. / Be careful.",
    },
    {
      rule: "Be Verb present: AM/IS/ARE — match to subject",
      explanation: "I=AM, He/She/It=IS, You/We/They=ARE. This rule never changes in standard English.",
      example: "I am a teacher. She is smart. We are ready. They are coming.",
    },
    {
      rule: "Has/Have — same matching as Be Verb",
      explanation: "He/She/It=HAS (like IS). I/You/We/They=HAVE (like ARE). Past of both = HAD for all subjects.",
      example: "He has a car. They have a plan. I have a question. She has three sisters.",
    },
    {
      rule: "Will Have + 3rd form = Future Perfect (completion before future time)",
      explanation: "Use when an action will be DONE by a specific future time. Always pair with 'by [time]' or 'before [event]'.",
      example: "By Monday, I will have finished. She will have left before you arrive.",
    },
    {
      rule: "There IS (singular) / ARE (plural) — WAS / WERE (past)",
      explanation: "There is/are introduces existence. Match is/are to the noun that FOLLOWS 'there', not the subject before.",
      example: "There is a book. There are books. There was a problem. There were issues.",
    },
  ],

  commonMistakes: [
    { wrong: "You please come here.", correct: "Please come here.", explanation: "Imperative has NO subject. Remove 'You'. Start directly with Please/verb." },
    { wrong: "She am a doctor.", correct: "She is a doctor.", explanation: "She → IS. Never 'am' with she/he/it. AM is ONLY for I." },
    { wrong: "He have a bicycle.", correct: "He has a bicycle.", explanation: "He/She/It → HAS. HAVE is for I/You/We/They." },
    { wrong: "By tomorrow I will finish.", correct: "By tomorrow, I will have finished.", explanation: "'Will finish' = simple future. 'By [time]' needs 'will have + 3rd form' for Future Perfect." },
    { wrong: "There is many students.", correct: "There are many students.", explanation: "'Students' is plural → There ARE. There IS only for singular nouns." },
  ],

  sentencePatterns: [
    {
      pattern: "Mixed Review: All Day 1-9 Structures",
      hindiPattern: "Days 1-9 के सभी structures का revision",
      examples: [
        { english: "Please sit down and be quiet. (Imperative — Day 3)", hindi: "कृपया बैठ जाइए और शांत रहिए।" },
        { english: "I am a student and she is my teacher. (Be Verb — Day 4)", hindi: "मैं एक student हूँ और वह मेरी teacher हैं।" },
        { english: "He has a laptop but she doesn't have one. (Has/Have — Day 6)", hindi: "उसके पास laptop है लेकिन उसके पास नहीं है।" },
        { english: "By tomorrow, I will have completed all my tasks. (Will Have — Day 8)", hindi: "कल तक मैं सभी काम पूरे कर चुका होऊँगा।" },
        { english: "There are no seats left in the bus. (There — Day 9)", hindi: "Bus में कोई seat नहीं बची है।" },
        { english: "These books are mine, but those belong to her. (Demonstratives — Day 5)", hindi: "ये किताबें मेरी हैं, लेकिन वे उसकी हैं।" },
        { english: "She had a good job before, but now she is looking for a new one. (Had — Day 7)", hindi: "पहले उसके पास अच्छी job थी, लेकिन अब वह नई तलाश कर रही है।" },
        { english: "There was a time when there were no mobile phones.", hindi: "एक समय था जब mobile phones नहीं थे।" },
        { english: "Don't forget — by next week, I will have submitted the project.", hindi: "मत भूलना — अगले हफ्ते तक मैं project submit कर चुका होऊँगा।" },
        { english: "Are there any questions? Please ask them now.", hindi: "क्या कोई सवाल है? कृपया अभी पूछें।" },
      ],
    },
  ],

  summary: [
    "Day 10 Revision: Review all concepts from Days 1-9",
    "Imperative | Be Verb | Demonstratives | Has/Have | Had | Will Have | There is/are",
    "Biggest mistake: wrong is/are/was/were selection — practice daily!",
    "Best revision method: Write 5 sentences using each grammar point",
    "You have completed 10 days — keep going! 65 more days to fluency!",
  ],
};

// ─── Day 10, Topic 1, Subtopic 2: Common Mistakes ────────────
const D10_T1_S2: Partial<LessonContentType> = {
  whyLearnThis: `Knowing your most common mistakes is the FASTEST way to improve!\n\nIn Days 1-9, Hindi speakers make specific recurring errors. By identifying and fixing these NOW, you prevent the same mistakes from appearing in your speech and writing for the rest of the course.\n\nToday: The TOP 20 mistakes from Days 1-9, clearly explained with corrections!`,

  commonMistakes: [
    { wrong: "I is happy.", correct: "I am happy.", explanation: "I ALWAYS uses AM. Never 'I is' or 'I are'." },
    { wrong: "She are coming.", correct: "She is coming.", explanation: "She/He/It = IS. Not 'are'. ARE is for You/We/They." },
    { wrong: "They was present.", correct: "They were present.", explanation: "They = WERE (plural past). WAS is only for I/He/She/It." },
    { wrong: "He have a car.", correct: "He has a car.", explanation: "He/She/It = HAS. HAVE is for I/You/We/They." },
    { wrong: "I am having a phone.", correct: "I have a phone.", explanation: "Possession (owning) doesn't use -ing. Just 'have' for owning things." },
    { wrong: "She hads a dog.", correct: "She had a dog.", explanation: "HAD never changes. No 's', no 'ed'. All subjects use just 'had'." },
    { wrong: "By tomorrow I will finish.", correct: "By tomorrow I will have finished.", explanation: "'By [time]' = will have + 3rd form (Future Perfect, not simple future)." },
    { wrong: "Will have finish.", correct: "Will have finished.", explanation: "After 'will have', use 3rd form (past participle), not base form." },
    { wrong: "There is many books.", correct: "There are many books.", explanation: "Plural noun = ARE. 'Books' is plural → use 'There are'." },
    { wrong: "There are a dog.", correct: "There is a dog.", explanation: "Singular noun = IS. 'A dog' is singular → use 'There is'." },
    { wrong: "Please to sit.", correct: "Please sit.", explanation: "Never 'please to + verb'. Just 'please + base verb'." },
    { wrong: "Don't to run.", correct: "Don't run.", explanation: "After 'don't', use base verb directly — never 'to + verb'." },
    { wrong: "These is my book.", correct: "This is my book.", explanation: "THESE is plural. ONE book = THIS. Many books = THESE." },
    { wrong: "You open the door! (as imperative)", correct: "Open the door!", explanation: "Imperative has no subject. Remove 'You'. Start directly with verb." },
    { wrong: "There has no water.", correct: "There is no water.", explanation: "Never 'there has'. Use There is/are/was/were for existence." },
  ],

  summary: [
    "Top mistakes: wrong be verb, wrong has/have, wrong imperative form",
    "There IS (singular) / There ARE (plural) — never 'There is many'",
    "By [time] = will HAVE + 3rd form (not just 'will + verb')",
    "HAD never changes form — no 'hads' or 'hadded' ever",
    "Review these mistakes daily for the next week for permanent correction!",
  ],
};

// ─── Day 10, Topic 2, Subtopic 1: Speaking Drills ────────────
const D10_T2_S1: Partial<LessonContentType> = {
  whyLearnThis: `Speaking practice is where GRAMMAR becomes FLUENCY!\n\nToday's speaking drills cover all Days 1-9 topics. Say each sentence OUT LOUD — this trains your mouth and memory together!\n\nRule: Read each sentence ALOUD 3 times. Then say it WITHOUT looking at the screen.\n\nThis is the fastest path from "I know the rule" to "I speak it naturally!"`,

  sentencePatterns: [
    {
      pattern: "Speaking Drill: 30 sentences covering Days 1-9",
      hindiPattern: "30 sentences बोलो ज़ोर से — Days 1-9 का speaking practice",
      examples: [
        { english: "Please come to my office at 3 PM.", hindi: "कृपया शाम 3 बजे मेरे office आइए।" },
        { english: "Don't be late for the meeting tomorrow.", hindi: "कल की meeting के लिए देर मत करो।" },
        { english: "I am a software engineer at an IT company.", hindi: "मैं एक IT company में software engineer हूँ।" },
        { english: "She is very talented and hardworking.", hindi: "वह बहुत talented और मेहनती है।" },
        { english: "They were not at the conference yesterday.", hindi: "वे कल conference में नहीं थे।" },
        { english: "This pen is mine, and that book is yours.", hindi: "यह pen मेरी है, और वह किताब तुम्हारी है।" },
        { english: "These documents need to be signed today.", hindi: "इन documents पर आज sign करने की ज़रूरत है।" },
        { english: "He has three years of experience in marketing.", hindi: "उसके पास marketing में तीन साल का experience है।" },
        { english: "We had a great team meeting last week.", hindi: "पिछले हफ्ते हमारी एक शानदार team meeting थी।" },
        { english: "By the deadline, I will have completed all the tasks.", hindi: "Deadline तक मैं सभी tasks पूरे कर चुका होऊँगा।" },
        { english: "There is a new student in our English class.", hindi: "हमारी English class में एक नया student है।" },
        { english: "Are there any messages from the client?", hindi: "क्या client के कोई messages हैं?" },
        { english: "There were no problems during the presentation.", hindi: "Presentation के दौरान कोई समस्या नहीं थी।" },
        { english: "Read the instructions before answering the questions.", hindi: "प्रश्नों का उत्तर देने से पहले निर्देश पढ़ो।" },
        { english: "I will have learned English fluently by Day 75!", hindi: "Day 75 तक मैं fluent English सीख चुका होऊँगा!" },
      ],
    },
  ],

  summary: [
    "Speaking practice converts grammar rules into natural speech",
    "Say each sentence 3 times aloud, then close your eyes and repeat",
    "Focus on: be verb matching, there is/are, will have + 3rd form",
    "Record yourself and listen back — catch your own mistakes!",
    "Consistency: 15 minutes of speaking practice daily = fluency in 75 days",
  ],
};

// ============================================================
// DAY 11 — USE OF WANT (I want to, She wants to)
// Subtopic IDs: d11-t1-s1 through d11-t4-s3
// ============================================================

// ─── Day 11, Topic 1, Subtopic 1: Introduction to WANT ───────
const D11_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `"WANT" is one of the MOST USED WORDS in English!\n\nEvery day you want things, you want to go places, you want someone to do things — and you need WANT to express all of this!\n\n• "I want a cup of tea." (I want + noun)\n• "I want to go home." (I want + to + verb)\n• "She wants to become a doctor." (She wants + to + verb)\n• "Do you want to come with me?" (question form)\n\nAt work:\n✓ "I want to schedule a meeting."\n✓ "The client wants a detailed report."\n✓ "Do you want to review this document?"\n\nWithout WANT, you cannot express your most basic desires and intentions in English!`,

  conceptExplanation: `WANT = चाहना (to desire, to wish for)\n\nWANT has TWO main patterns:\n\n📌 PATTERN 1: Want + NOUN\nI want [a thing]\n• I want coffee. (मुझे coffee चाहिए।)\n• She wants a new phone. (उसे नया phone चाहिए।)\n• They want more time. (उन्हें और समय चाहिए।)\n\n📌 PATTERN 2: Want + TO + Verb (Infinitive)\nI want to [do something]\n• I want to learn English. (मैं English सीखना चाहता हूँ।)\n• She wants to become a doctor. (वह doctor बनना चाहती है।)\n• They want to travel to Paris. (वे Paris जाना चाहते हैं।)\n\n📌 PATTERN 3: Want + Someone + TO + Verb\n[Someone] wants [another person] to do something\n• The manager wants me to submit the report. (Manager चाहते हैं कि मैं report submit करूँ।)\n• She wants him to apologize. (वह चाहती है कि वह माफी माँगे।)\n\n📌 SUBJECT RULES:\nI → want | You → want | We → want | They → want\nHe → wantS | She → wantS | It → wantS\n(Add 's' for He/She/It — just like other verbs!)`,

  hindiExplanation: `WANT = चाहना\n\nTeen patterns:\n\n1. Want + Noun (चीज़ चाहिए):\n   I want water. = मुझे पानी चाहिए।\n   She wants a new dress. = उसे नई dress चाहिए।\n\n2. Want + To + Verb (कुछ करना चाहते हो):\n   I want to eat. = मैं खाना चाहता हूँ।\n   He wants to sleep. = वह सोना चाहता है।\n\n3. Want + Someone + To + Verb (किसी और से कुछ करवाना):\n   I want you to help me. = मैं चाहता हूँ कि तुम मेरी मदद करो।\n   She wants him to study. = वह चाहती है कि वह पढ़े।\n\nNegative:\n   I don't want = मैं नहीं चाहता\n   She doesn't want = वह नहीं चाहती\n\nQuestion:\n   Do you want...? = क्या तुम चाहते हो...?\n   Does she want...? = क्या वह चाहती है...?`,

  rules: [
    {
      rule: "He/She/It → WANTS (add 's') | I/You/We/They → WANT",
      explanation: "Like all present tense verbs, 'want' adds 's' for third person singular (he, she, it). This is one of the most common mistakes in English!",
      example: "I want | She wants | He wants | It wants | We want | You want | They want",
      exception: "In questions with 'does': 'Does she want?' (not 'Does she wants?') — 'does' already carries the 's', so 'want' goes back to base form.",
    },
    {
      rule: "Want + TO + base verb (infinitive) for actions",
      explanation: "When 'want' is followed by an action (verb), always use 'to + base verb'. Never use '-ing' after 'want'.",
      example: "I want TO go. / She wants TO eat. / They want TO learn. / He wants TO improve.",
      exception: "❌ I want going. | ❌ She wants eating. — These are wrong! Always 'want TO + verb' not 'want + -ing'.",
    },
    {
      rule: "Negative: don't/doesn't want [+ to + verb]",
      explanation: "Use 'don't want' for I/You/We/They and 'doesn't want' for He/She/It. The main verb 'want' goes back to base form after doesn't.",
      example: "I don't want to go. / She doesn't want to come. / They don't want any trouble. / He doesn't want coffee.",
    },
    {
      rule: "Question: Do/Does + subject + want + [to + verb]?",
      explanation: "Use 'do' for I/You/We/They and 'does' for He/She/It. In questions, 'want' uses base form (not 'wants' even for he/she).",
      example: "Do you want tea? / Does she want to come? / Do they want more time? / Does he want to speak?",
    },
    {
      rule: "Want + someone + to + verb (causative want)",
      explanation: "This pattern shows that you desire another person to do something. Very common in professional communication.",
      example: "I want YOU to listen carefully. / She wants HIM to apologize. / The boss wants US to submit the report by Friday.",
    },
  ],

  commonMistakes: [
    {
      wrong: "She want to go.",
      correct: "She wants to go.",
      explanation: "She = 3rd person singular → add 's'. 'She wantS to go.' This is one of the most common errors!",
    },
    {
      wrong: "I want going to the market.",
      correct: "I want to go to the market.",
      explanation: "After 'want', always use 'TO + base verb', not '-ing'. 'I want TO GO', not 'I want going'.",
    },
    {
      wrong: "Does she wants to eat?",
      correct: "Does she want to eat?",
      explanation: "'Does' already carries the 's'. So the main verb 'want' must be in base form. Never 'Does she WANTS'.",
    },
    {
      wrong: "I want that you help me.",
      correct: "I want you to help me.",
      explanation: "Want + someone + TO + verb (not 'want that...'). Indian learners often translate Hindi 'चाहता हूँ कि' literally, but English uses 'want + person + to + verb'.",
    },
    {
      wrong: "He don't want to come.",
      correct: "He doesn't want to come.",
      explanation: "He = 3rd person singular → use 'DOESN'T'. 'Don't' is for I/You/We/They only.",
    },
  ],

  sentencePatterns: [
    {
      pattern: "Subject + want/wants + noun (wanting a thing)",
      hindiPattern: "Subject + चाहता/चाहती है + [चीज़]",
      examples: [
        { english: "I want a glass of cold water.", hindi: "मुझे एक गिलास ठंडा पानी चाहिए।" },
        { english: "She wants a promotion this year.", hindi: "वह इस साल promotion चाहती है।" },
        { english: "They want more flexibility in their work schedule.", hindi: "वे अपने work schedule में अधिक flexibility चाहते हैं।" },
        { english: "He wants a solution to this problem right now.", hindi: "वह अभी इस समस्या का समाधान चाहता है।" },
        { english: "The team wants some rest after the long project.", hindi: "Team लंबे project के बाद कुछ आराम चाहती है।" },
        { english: "My mother wants new curtains for the living room.", hindi: "मेरी माँ living room के लिए नए परदे चाहती है।" },
        { english: "Do you want some help with that?", hindi: "क्या तुम्हें उसमें कुछ मदद चाहिए?" },
      ],
    },
    {
      pattern: "Subject + want/wants + to + verb (wanting to do something)",
      hindiPattern: "Subject + [verb] + ना चाहता/चाहती है",
      examples: [
        { english: "I want to learn how to play the guitar.", hindi: "मैं guitar बजाना सीखना चाहता हूँ।" },
        { english: "She wants to start her own business someday.", hindi: "वह किसी दिन अपना खुद का business शुरू करना चाहती है।" },
        { english: "He wants to travel to Europe next year.", hindi: "वह अगले साल Europe travel करना चाहता है।" },
        { english: "We want to improve our English speaking skills.", hindi: "हम अपनी English speaking skills improve करना चाहते हैं।" },
        { english: "The company wants to expand to new markets.", hindi: "Company नए markets में expand करना चाहती है।" },
        { english: "Do you want to have dinner with us tonight?", hindi: "क्या तुम आज रात हमारे साथ खाना खाना चाहते हो?" },
        { english: "Does she want to join the yoga class?", hindi: "क्या वह yoga class join करना चाहती है?" },
        { english: "They don't want to work on weekends.", hindi: "वे weekends पर काम नहीं करना चाहते।" },
        { english: "I don't want to be late for the meeting.", hindi: "मैं meeting के लिए late नहीं होना चाहता।" },
        { english: "She doesn't want to discuss this matter right now.", hindi: "वह अभी इस मामले पर बात नहीं करना चाहती।" },
      ],
    },
    {
      pattern: "Subject + want/wants + someone + to + verb",
      hindiPattern: "Subject + चाहता/चाहती है कि [person] [verb] करे",
      examples: [
        { english: "The teacher wants us to practice speaking every day.", hindi: "Teacher चाहती हैं कि हम हर दिन speaking practice करें।" },
        { english: "My manager wants me to prepare a presentation for Monday.", hindi: "मेरे manager चाहते हैं कि मैं Monday के लिए presentation तैयार करूँ।" },
        { english: "She wants him to be more responsible.", hindi: "वह चाहती है कि वह अधिक ज़िम्मेदार बने।" },
        { english: "They want everyone to attend the annual meeting.", hindi: "वे चाहते हैं कि सभी annual meeting में आएँ।" },
        { english: "Do you want me to help you with this task?", hindi: "क्या तुम चाहते हो कि मैं इस task में तुम्हारी मदद करूँ?" },
      ],
    },
  ],

  speakingTips: [
    "Practice saying: 'I want to...' + 10 things you genuinely want today",
    "Notice the 's' in: 'She wants' / 'He wants' / 'It wants' — practice until it sounds automatic",
    "Common contraction in speech: 'I wanna go' (informal spoken English for 'I want to go')",
    "For professional settings, never use 'wanna' — always 'want to' in formal/office English",
    "Practice questions: 'Do you want to...?' — Ask this to 5 different people today",
  ],

  memoryTricks: [
    "WANT = चाहना — simple! Connect to Hindi: जब भी Hindi में 'चाहना' हो, English में 'want' use करो!",
    "He wantS = S for She/He = S on the end! Remember: He S-wants, She S-wants!",
    "After WANT → always TO + verb: 'I want TO go.' Think: Want needs a TO before every action!",
    "WANT Someone TO do = I want + [person name] + TO + verb. Simple!",
    "Negative memory: Don't WANT (I/You/We/They) | DOESN'T WANT (He/She/It)",
  ],

  story: {
    title: "Ananya's Big Dream",
    paragraphs: [
      "Ananya is 22 years old. She has a dream. She wants to become a successful entrepreneur. She wants to build a company that helps farmers.",
      "Every day, she works hard. She wants to learn about technology and business. She wants to attend a good business school.",
      "Her parents want her to be happy. They want her to succeed. Her father wants her to study finance. Her mother wants her to follow her passion.",
      "Ananya doesn't want to give up. She doesn't want to choose between duty and dreams. She wants both.",
      "She applies to business schools. She wants to get a scholarship. The admissions officer asks: 'What do you want to achieve?'",
      "Ananya smiles: 'I want to change the way agriculture works in India. I want farmers to use technology easily. I want them to earn more. I want to prove that a girl from a small town can change the world.'",
      "She gets the scholarship. Her dream has just begun. She wants to make everyone proud — and she will.",
    ],
    moral: "Knowing what you WANT is the first step to getting it. Use 'want' clearly and confidently — in English and in life!",
    keyWords: [
      { word: "want to achieve", meaning: "हासिल करना चाहती हूँ — desiring to accomplish something" },
      { word: "wants her to succeed", meaning: "चाहते हैं कि वह सफल हो — desire for another person's success" },
      { word: "doesn't want to give up", meaning: "हार नहीं मानना चाहती — refusing to stop trying" },
      { word: "passion", meaning: "जुनून — a strong feeling of enthusiasm for something" },
    ],
  },

  dialogue: {
    title: "Planning a Weekend Trip",
    setting: "Friends Rahul and Priya are planning a trip together.",
    lines: [
      { speaker: "Rahul", text: "Hey Priya, do you want to go somewhere this weekend?", hindi: "Hey Priya, क्या तुम इस weekend कहीं जाना चाहती हो?" },
      { speaker: "Priya", text: "Yes! I really want to go to Nainital. I want to see the lake and the mountains.", hindi: "हाँ! मैं सच में Nainital जाना चाहती हूँ। मैं lake और पहाड़ देखना चाहती हूँ।" },
      { speaker: "Rahul", text: "I want to go there too, but I also want to visit Mussoorie. What do you think?", hindi: "मैं भी वहाँ जाना चाहता हूँ, लेकिन Mussoorie भी जाना चाहता हूँ। तुम क्या सोचती हो?" },
      { speaker: "Priya", text: "Maybe we can do both! I want to leave on Saturday morning. Does Amit want to join us?", hindi: "शायद हम दोनों कर सकते हैं! मैं शनिवार सुबह निकलना चाहती हूँ। क्या Amit भी हमारे साथ आना चाहता है?" },
      { speaker: "Rahul", text: "I'll ask him. He usually wants to join trips but he doesn't want to drive long distances.", hindi: "मैं उससे पूछता हूँ। वह usually trips में जाना चाहता है लेकिन लंबी दूरी drive नहीं करना चाहता।" },
      { speaker: "Priya", text: "That's fine! I want to take the train. I don't want to drive either — I want to enjoy the journey!", hindi: "कोई बात नहीं! मैं train लेना चाहती हूँ। मैं भी drive नहीं करना चाहती — मैं journey enjoy करना चाहती हूँ!" },
      { speaker: "Rahul", text: "Perfect! Do you want me to book the tickets today?", hindi: "बढ़िया! क्या तुम चाहती हो कि मैं आज tickets book करूँ?" },
      { speaker: "Priya", text: "Yes please! I want to get the window seat. I always want to see the mountains through the window.", hindi: "हाँ please! मुझे window seat चाहिए। मैं हमेशा window से पहाड़ देखना चाहती हूँ।" },
    ],
    notes: [
      "Want + noun: 'I want the window seat' / 'She wants tea'",
      "Want + to + verb: 'I want to go' / 'She wants to see'",
      "Want + someone + to + verb: 'Do you want me to book?'",
      "Doesn't want: 'He doesn't want to drive' — He/She/It uses doesn't",
    ],
  },

  summary: [
    "WANT = चाहना — one of the most used verbs in English",
    "Pattern 1: want + noun ('I want water')",
    "Pattern 2: want + to + verb ('I want to go')",
    "Pattern 3: want + someone + to + verb ('I want you to help')",
    "He/She/It = WANTS | Negative = don't/doesn't WANT | Question = Do/Does...WANT?",
  ],
};

// ─── Day 11, Topic 2, Subtopic 1: Daily Life Sentences ────────
const D11_T2_S1: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "WANT in Everyday Life",
      hindiPattern: "रोज़मर्रा की ज़िंदगी में WANT",
      examples: [
        { english: "I want to wake up early tomorrow.", hindi: "मैं कल जल्दी उठना चाहता हूँ।" },
        { english: "She wants to cook something special tonight.", hindi: "वह आज रात कुछ खास बनाना चाहती है।" },
        { english: "My brother wants a new bicycle for his birthday.", hindi: "मेरे भाई को अपने जन्मदिन पर नई cycle चाहिए।" },
        { english: "We want to watch a movie this Friday.", hindi: "हम इस शुक्रवार movie देखना चाहते हैं।" },
        { english: "Does your mother want help with the cooking?", hindi: "क्या तुम्हारी माँ को खाना बनाने में मदद चाहिए?" },
        { english: "I don't want to miss the match tonight.", hindi: "मैं आज रात का match miss नहीं करना चाहता।" },
        { english: "He wants to save money for a new phone.", hindi: "वह नए phone के लिए पैसे बचाना चाहता है।" },
        { english: "The children want to go to the park.", hindi: "बच्चे park जाना चाहते हैं।" },
        { english: "I want my family to be happy and healthy.", hindi: "मैं चाहता हूँ कि मेरा परिवार खुश और स्वस्थ रहे।" },
        { english: "She doesn't want to spend too much money on clothes.", hindi: "वह कपड़ों पर ज़्यादा पैसे खर्च नहीं करना चाहती।" },
        { english: "What do you want for dinner?", hindi: "रात के खाने में तुम क्या चाहते हो?" },
        { english: "He wants to call his parents every Sunday.", hindi: "वह हर रविवार अपने माता-पिता को call करना चाहता है।" },
        { english: "They want to renovate their house this summer.", hindi: "वे इस गर्मियों में अपना घर renovate करना चाहते हैं।" },
        { english: "Do you want me to pick you up from the station?", hindi: "क्या तुम चाहते हो कि मैं station से तुम्हें pick up करूँ?" },
        { english: "I want to spend more quality time with my family.", hindi: "मैं अपने परिवार के साथ अधिक quality time बिताना चाहता हूँ।" },
      ],
    },
  ],

  summary: [
    "WANT is used constantly in home, social, and family contexts",
    "Practice: say 5 things YOU personally want to do — in English",
    "Match: He/She WANTS | I/You/We/They WANT",
    "Want + to + verb is the most common pattern in daily speech",
  ],
};

// ─── Day 11, Topic 2, Subtopic 2: Professional & Office Usage ─
const D11_T2_S2: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "WANT in Professional Context",
      hindiPattern: "Office और Professional माहौल में WANT",
      examples: [
        { english: "I want to schedule a meeting with you this week.", hindi: "मैं इस हफ्ते तुम्हारे साथ एक meeting schedule करना चाहता हूँ।" },
        { english: "The client wants a detailed report by Thursday.", hindi: "Client को गुरुवार तक एक detailed report चाहिए।" },
        { english: "She wants to apply for the senior manager position.", hindi: "वह senior manager की position के लिए apply करना चाहती है।" },
        { english: "We want to improve our customer satisfaction score.", hindi: "हम अपना customer satisfaction score improve करना चाहते हैं।" },
        { english: "The manager wants everyone to attend the training session.", hindi: "Manager चाहते हैं कि सभी training session में participate करें।" },
        { english: "Do you want me to review your presentation before the meeting?", hindi: "क्या तुम चाहते हो कि meeting से पहले मैं तुम्हारी presentation review करूँ?" },
        { english: "He wants to learn new programming languages to grow in his career.", hindi: "वह अपने career में आगे बढ़ने के लिए नई programming languages सीखना चाहता है।" },
        { english: "The HR department wants to conduct quarterly performance reviews.", hindi: "HR department quarterly performance reviews करना चाहती है।" },
        { english: "I don't want to delay this project any further.", hindi: "मैं इस project को और delay नहीं करना चाहता।" },
        { english: "Does the team want to work from home on Fridays?", hindi: "क्या team शुक्रवार को घर से काम करना चाहती है?" },
        { english: "She wants her team to be more innovative and creative.", hindi: "वह चाहती है कि उसकी team अधिक innovative और creative हो।" },
        { english: "I want to discuss the project timeline with you.", hindi: "मैं तुम्हारे साथ project timeline पर बात करना चाहता हूँ।" },
      ],
    },
  ],

  summary: [
    "WANT is a key verb in professional English for expressing goals and requirements",
    "Client wants, manager wants, team wants — all common in work communication",
    "Polite alternatives: 'I would like to' (more formal than 'I want to')",
    "Practice writing 5 professional sentences using want/wants today",
  ],
};

// ============================================================
// DAY 12 — USE OF WANTED (Past Desires)
// Subtopic IDs: d12-t1-s1 through d12-t4-s3
// ============================================================

// ─── Day 12, Topic 1, Subtopic 1: Introduction to WANTED ─────
const D12_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `WANTED = Past tense of WANT = चाहता था / चाहती थी\n\nYou use WANTED to talk about past desires — things you desired in the past, but may or may not have gotten.\n\n• "I wanted to become a cricketer when I was young."\n• "She wanted to visit Paris, but couldn't afford it."\n• "He wanted to apologize, but didn't get the chance."\n\nWhy it's important:\n✓ Storytelling: "Once, I wanted to give up, but I kept going."\n✓ Explanations: "I didn't call because I wanted to respect your privacy."\n✓ Interviews: "I always wanted to work in this company."\n✓ Expressions of regret: "I wanted to come, but I was sick."\n\nWANTED makes your English more narrative, emotional, and real!`,

  conceptExplanation: `WANTED = Past tense of WANT\n\nTHE BEST NEWS: WANTED is the SAME for ALL SUBJECTS!\n\nPresent: I want | She WANTS | They want (changes!)\nPast: I WANTED | She WANTED | They WANTED (same for all!)\n\n📌 THREE PATTERNS (same as WANT, but in past):\n\n1️⃣ Wanted + NOUN:\n• I wanted a bicycle but got a book instead.\n• She wanted a cup of tea.\n\n2️⃣ Wanted + TO + Verb:\n• I wanted to become a doctor.\n• He wanted to travel but had no money.\n• They wanted to help but arrived late.\n\n3️⃣ Wanted + Someone + TO + Verb:\n• She wanted me to wait.\n• The boss wanted us to finish early.\n• My mother wanted me to eat more.\n\n📌 NEGATIVE: Didn't want (same for all subjects!)\n• I didn't want to go. / She didn't want to come.\n\n📌 QUESTION: Did [subject] want...?\n• Did you want tea? / Did she want to come?`,

  hindiExplanation: `WANTED = WANT का past tense = चाहता था / चाहती थी / चाहते थे\n\nसबसे आसान: WANTED सब subjects के साथ एक जैसा है!\n• मैं चाहता था = I wanted\n• वह चाहती थी = She wanted\n• वे चाहते थे = They wanted\n\nतीन patterns:\n1. Wanted + Noun: "I wanted water." (मुझे पानी चाहिए था।)\n2. Wanted + To + Verb: "I wanted to go." (मैं जाना चाहता था।)\n3. Wanted + Person + To + Verb: "I wanted you to come." (मैं चाहता था कि तुम आओ।)\n\nNegative: Didn't want\n• I didn't want to go. (मैं नहीं जाना चाहता था।)\n• She didn't want to eat. (वह खाना नहीं चाहती थी।)\n\nQuestion: Did + subject + want...?\n• Did you want to come? (क्या तुम आना चाहते थे?)\n• Did she want tea? (क्या वह चाय चाहती थी?)`,

  rules: [
    {
      rule: "WANTED is the same for ALL subjects (no 's' needed)",
      explanation: "Unlike present tense (she wantS), the past tense 'wanted' never changes. Every subject — I, you, he, she, we, they — uses the same 'wanted'. This makes past tense easier than present!",
      example: "I wanted / You wanted / He wanted / She wanted / We wanted / They wanted — all the same!",
    },
    {
      rule: "Wanted + TO + base verb for past actions you desired",
      explanation: "Just like present 'want to', use 'wanted to + base verb' for past desires. Always use base verb (infinitive) after 'to', not past form.",
      example: "I wanted TO go. / She wanted TO become a singer. / They wanted TO travel. ❌ 'I wanted to went' is wrong.",
    },
    {
      rule: "Negative: Subject + didn't want + [to + verb/noun]",
      explanation: "'Didn't want' is the negative for ALL subjects in simple past. Always followed by base verb (not 'wanted' again).",
      example: "I didn't want to go. / She didn't want tea. / They didn't want to participate. / He didn't want trouble.",
    },
    {
      rule: "Question: Did + subject + want + [to + verb]?",
      explanation: "For past questions, use 'did' + subject + want (base form). 'Did' carries the past tense — so 'want' stays in base form.",
      example: "Did you want to come? / Did she want help? / Did they want more time? / What did you want to say?",
    },
  ],

  commonMistakes: [
    {
      wrong: "She wantted to go.",
      correct: "She wanted to go.",
      explanation: "WANTED = want + ed. Never double 't'. Correct spelling: w-a-n-t-e-d.",
    },
    {
      wrong: "I wanted to went there.",
      correct: "I wanted to go there.",
      explanation: "After 'to', always use base form (infinitive). 'Went' is past form — wrong here. Use 'go'.",
    },
    {
      wrong: "She didn't wanted to come.",
      correct: "She didn't want to come.",
      explanation: "'Didn't' already marks the past tense. The main verb 'want' must be in base form. Never 'didn't WANTED'.",
    },
    {
      wrong: "Did she wanted to eat?",
      correct: "Did she want to eat?",
      explanation: "After 'did', use base form. 'Did she WANT' (not 'WANTED'). 'Did' carries the past marker.",
    },
    {
      wrong: "I was wanted to become a pilot.",
      correct: "I wanted to become a pilot.",
      explanation: "Never add 'was' before 'wanted' for this meaning. Simple past 'wanted' is enough. 'Was wanted' has a completely different meaning (wanted by police)!",
    },
  ],

  sentencePatterns: [
    {
      pattern: "Subject + wanted + to + verb (Past desire)",
      hindiPattern: "Subject + [verb]-ना चाहता/चाहती था/थी",
      examples: [
        { english: "I wanted to become a pilot when I was a child.", hindi: "जब मैं बच्चा था, मैं pilot बनना चाहता था।" },
        { english: "She wanted to move to Mumbai for better opportunities.", hindi: "वह बेहतर opportunities के लिए Mumbai जाना चाहती थी।" },
        { english: "He wanted to apologize but couldn't find the words.", hindi: "वह माफी माँगना चाहता था लेकिन शब्द नहीं मिले।" },
        { english: "They wanted to start the meeting on time.", hindi: "वे meeting समय पर शुरू करना चाहते थे।" },
        { english: "We wanted to visit Goa last year but plans changed.", hindi: "हम पिछले साल Goa जाना चाहते थे लेकिन plans बदल गए।" },
        { english: "I always wanted to learn a musical instrument.", hindi: "मैं हमेशा कोई वाद्ययंत्र सीखना चाहता था।" },
        { english: "She wanted to study abroad but her father disagreed.", hindi: "वह विदेश में पढ़ना चाहती थी लेकिन उसके पिता ने मना कर दिया।" },
        { english: "He wanted to quit his job, but reconsidered.", hindi: "वह job छोड़ना चाहता था, लेकिन उसने फिर से सोचा।" },
        { english: "I wanted to call you yesterday but I was busy.", hindi: "मैं कल तुम्हें call करना चाहता था लेकिन व्यस्त था।" },
        { english: "They wanted to congratulate you at the party.", hindi: "वे party में तुम्हें बधाई देना चाहते थे।" },
      ],
    },
    {
      pattern: "Subject + didn't want + to + verb (Past negative desire)",
      hindiPattern: "Subject + [verb]-ना नहीं चाहता/चाहती था/थी",
      examples: [
        { english: "I didn't want to hurt your feelings.", hindi: "मैं तुम्हारी feelings hurt नहीं करना चाहता था।" },
        { english: "She didn't want to make a scene in public.", hindi: "वह public में scene नहीं करना चाहती थी।" },
        { english: "He didn't want to accept the defeat.", hindi: "वह हार मानना नहीं चाहता था।" },
        { english: "We didn't want to leave the party so early.", hindi: "हम party इतनी जल्दी नहीं छोड़ना चाहते थे।" },
        { english: "They didn't want anyone to know about the surprise.", hindi: "वे नहीं चाहते थे कि किसी को surprise के बारे में पता चले।" },
        { english: "She didn't want to wake up her sleeping child.", hindi: "वह अपने सोते हुए बच्चे को जगाना नहीं चाहती थी।" },
      ],
    },
    {
      pattern: "Did + subject + want + to + verb? (Past question)",
      hindiPattern: "क्या + Subject + [verb]-ना चाहता/चाहती था/थी?",
      examples: [
        { english: "Did you want to say something in the meeting?", hindi: "क्या तुम meeting में कुछ कहना चाहते थे?" },
        { english: "Did she want to attend the wedding?", hindi: "क्या वह शादी में attend करना चाहती थी?" },
        { english: "Did they want more time to complete the assignment?", hindi: "क्या वे assignment पूरा करने के लिए और समय चाहते थे?" },
        { english: "What did you want to tell me that day?", hindi: "उस दिन तुम मुझे क्या बताना चाहते थे?" },
        { english: "Why didn't she want to come to the party?", hindi: "वह party में क्यों नहीं आना चाहती थी?" },
      ],
    },
  ],

  speakingTips: [
    "Use WANTED for storytelling and past memories — it adds emotion to your English",
    "Pair WANTED with 'but': 'I wanted to come, BUT I was sick.' — very natural!",
    "Practice saying: 'When I was young, I wanted to...' — complete 5 sentences about your childhood dreams",
    "WANTED is great in apologies: 'I wanted to call you, but I forgot. I'm sorry.'",
    "In interviews: 'I always wanted to work in this company because...' — very impressive!",
  ],

  memoryTricks: [
    "WANTED = WANT + ED (simple! just add -ed to make past)",
    "No 's' changes! Everyone uses WANTED — easier than present tense!",
    "Negative: Didn't WANT (not 'didn't wanted'). Did carries the past!",
    "Connect to Hindi: 'चाहता था / चाहती थी / चाहते थे' = WANTED (always!)",
    "Story formula: 'I WANTED to..., but...' — past desire + obstacle = great storytelling!",
  ],

  story: {
    title: "The Teacher Who Changed Everything",
    paragraphs: [
      "Rohan was 10 years old. He wanted to become a football player. He wanted to play in the national team. Every day, he practiced in the field.",
      "But one day, he met his new English teacher, Mrs. Sharma. She said, 'Rohan, I know you wanted to be a footballer. But I want to show you something.'",
      "Mrs. Sharma showed him a book about a famous Indian who wanted to play cricket but became a writer instead — and changed millions of lives.",
      "'Did you ever want to do something else?' Rohan asked. Mrs. Sharma smiled: 'I wanted to be a dancer. But I became a teacher. And now I don't regret it, because I help hundreds of students every year.'",
      "Rohan didn't want to give up football, but he also started reading and writing. He wanted to do both.",
      "Twenty years later, Rohan is a sports journalist who writes about football. He got everything he wanted — just in a way he never expected.",
    ],
    moral: "Sometimes what we WANTED in the past leads us to something even better in the future. Never regret past desires — they shape who you become!",
    keyWords: [
      { word: "wanted to become", meaning: "बनना चाहता था — past desire to be something" },
      { word: "didn't want to give up", meaning: "हार नहीं मानना चाहता था — refusing to quit in the past" },
      { word: "didn't regret", meaning: "पछतावा नहीं था — no feelings of regret" },
      { word: "expected", meaning: "उम्मीद की थी — what was anticipated" },
    ],
  },

  dialogue: {
    title: "An Old Friend Reunion",
    setting: "Two old college friends Meera and Sanjay meet after 10 years.",
    lines: [
      { speaker: "Meera", text: "Sanjay! It's so good to see you after all these years. What are you doing now?", hindi: "Sanjay! इतने सालों बाद तुमसे मिलकर इतनी खुशी हुई। अब तुम क्या करते हो?" },
      { speaker: "Sanjay", text: "I'm a software architect now. I wanted to become a musician in college, but I changed my mind.", hindi: "मैं अब software architect हूँ। College में मैं musician बनना चाहता था, लेकिन मैंने अपना मन बदल लिया।" },
      { speaker: "Meera", text: "Really? I didn't know that! I always wanted to tell you — you played guitar so beautifully.", hindi: "सच में? मुझे यह नहीं पता था! मैं हमेशा तुम्हें बताना चाहती थी — तुम guitar बहुत सुंदर बजाते थे।" },
      { speaker: "Sanjay", text: "Thank you! And what about you? You wanted to do a PhD, didn't you?", hindi: "शुक्रिया! और तुम्हारे बारे में क्या? तुम PhD करना चाहती थीं, है ना?" },
      { speaker: "Meera", text: "Yes, I wanted to! I actually completed it two years ago. I wanted to work in research, and now I do.", hindi: "हाँ, मैं चाहती थी! मैंने दो साल पहले पूरा भी किया। मैं research में काम करना चाहती थी, और अब करती हूँ।" },
      { speaker: "Sanjay", text: "That's amazing! Did you want to stay in India or go abroad for research?", hindi: "यह तो शानदार है! क्या तुम India में रहना चाहती थीं या research के लिए विदेश जाना चाहती थीं?" },
      { speaker: "Meera", text: "I wanted to go to Germany, but my parents wanted me to stay closer to home. I'm glad I stayed — I found the best team right here!", hindi: "मैं Germany जाना चाहती थी, लेकिन मेरे माता-पिता चाहते थे कि मैं घर के पास रहूँ। मुझे खुशी है कि मैं रही — मुझे यहीं सबसे अच्छी team मिली!" },
    ],
    notes: [
      "WANTED = past desires that may or may not have happened",
      "Pair with 'but' for contrast: 'I wanted X, but Y happened'",
      "'Didn't know' and 'wanted to tell' — common in conversations about the past",
      "Use WANTED in interviews: 'I always wanted to work here because...'",
    ],
  },

  summary: [
    "WANTED = past tense of WANT — same for ALL subjects",
    "Patterns: wanted + noun | wanted + to + verb | wanted + someone + to + verb",
    "Negative: didn't want (all subjects) | Question: Did...want...?",
    "Use for: past desires, childhood dreams, missed opportunities, stories",
    "NOT 'didn't wanted' — 'didn't' is already past, so 'want' stays base form",
  ],
};

// ─── Day 12, Topic 2, Subtopic 1: Real Life Sentences ─────────
const D12_T2_S1: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "WANTED in Real Life Situations",
      hindiPattern: "असली ज़िंदगी में WANTED का use",
      examples: [
        { english: "I wanted to call you last night, but I fell asleep.", hindi: "मैं कल रात तुम्हें call करना चाहता था, लेकिन मुझे नींद आ गई।" },
        { english: "She wanted to apologize, but her ego came in the way.", hindi: "वह माफी माँगना चाहती थी, लेकिन उसका ego बीच में आ गया।" },
        { english: "They wanted to go on a picnic, but it rained.", hindi: "वे picnic पर जाना चाहते थे, लेकिन बारिश हो गई।" },
        { english: "I didn't want to wake you up early.", hindi: "मैं तुम्हें जल्दी जगाना नहीं चाहता था।" },
        { english: "He wanted to buy a gift but forgot.", hindi: "वह gift खरीदना चाहता था लेकिन भूल गया।" },
        { english: "Did you want something from the market?", hindi: "क्या तुम्हें बाज़ार से कुछ चाहिए था?" },
        { english: "My grandmother wanted to see me graduate.", hindi: "मेरी दादी मुझे graduate होते देखना चाहती थीं।" },
        { english: "We wanted to surprise her on her birthday.", hindi: "हम उसके जन्मदिन पर उसे surprise करना चाहते थे।" },
        { english: "He didn't want to disappoint his parents.", hindi: "वह अपने माता-पिता को निराश नहीं करना चाहता था।" },
        { english: "I always wanted to live in a house with a garden.", hindi: "मैं हमेशा बगीचे वाले घर में रहना चाहता था।" },
        { english: "She wanted me to wait for her outside.", hindi: "वह चाहती थी कि मैं उसके लिए बाहर इंतज़ार करूँ।" },
        { english: "What did you want to be when you grew up?", hindi: "जब तुम बड़े होते तो क्या बनना चाहते थे?" },
      ],
    },
  ],

  summary: [
    "WANTED connects past desires to stories, explanations, and memories",
    "Very natural with 'but': 'I wanted to X, but Y happened'",
    "Perfect for childhood memories, missed opportunities, past regrets",
    "Practice: Write 5 sentences about things you wanted as a child",
  ],
};

// ============================================================
// DAY 13 — USE OF LET (Let me, Let him, Let her, Let us)
// Subtopic IDs: d13-t1-s1 through d13-t4-s3
// ============================================================

// ─── Day 13, Topic 1, Subtopic 1: Introduction to LET ────────
const D13_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `LET is one of the MOST POWERFUL short words in English!\n\nYou use LET when you:\n• ALLOW someone to do something: "Let me go." / "Let him speak."\n• GIVE PERMISSION: "Please let us leave early."\n• REQUEST to do something: "Let me explain."\n• CAUSE someone to do something: "Let it happen."\n\nIn daily life:\n• "Let me check." (आने दो check करने = Let me check.)\n• "Let her finish speaking." (उसे बात खत्म करने दो.)\n• "Please let me know." (कृपया मुझे बताना.)\n\nIn professional settings:\n✓ "Let me handle this."\n✓ "Please let the client speak first."\n✓ "Let the data guide our decision."\n\nLET is short, powerful, and absolutely essential!`,

  conceptExplanation: `LET = allow, permit, cause (करने देना / होने देना)\n\n🎯 FORMULA:\nLET + Object (someone/something) + Base Verb\n\nNever use 'to' after LET! (Unlike "allow to" or "want to")\n\n📌 LET with PEOPLE:\n• Let ME = मुझे करने दो (Let me do it)\n• Let HIM = उसे करने दो (Let him go)\n• Let HER = उसे करने दो (Let her speak)\n• Let THEM = उन्हें करने दो (Let them try)\n• Let US = हमें करने दो (Let us know)\n• Let IT = इसे होने दो (Let it be)\n\n📌 THREE MAIN USES:\n\n1️⃣ PERMISSION (अनुमति देना):\n"Let me go, please." = मुझे जाने दो।\n"Let him join the meeting." = उसे meeting में आने दो।\n\n2️⃣ REQUEST (निवेदन करना):\n"Please let us know if there are changes."\n"Let me know your feedback."\n\n3️⃣ ALLOWING SOMETHING TO HAPPEN:\n"Let it dry completely before painting."\n"Let the cake cool down before cutting."\n\n⚠️ KEY DIFFERENCE:\n"Let me go" = Allow me to go (permission)\n"Let's go" = Let us go (suggestion — Day 14!)`,

  hindiExplanation: `LET = करने देना / जाने देना / बोलने देना\n\nFormula:\nLET + Object + Verb (base form) — no "to" needed!\n\nउदाहरण:\n• मुझे जाने दो। = Let me go.\n• उसे बोलने दो। = Let him speak.\n• उन्हें try करने दो। = Let them try.\n• इसे सूखने दो। = Let it dry.\n\nNegative (Don't let / Let not):\n• Don't let him go. = उसे जाने मत दो।\n• Don't let them waste time. = उन्हें समय बर्बाद मत करने दो।\n\nPolite forms:\n• Please let me know. = कृपया मुझे बताइए।\n• Kindly let us proceed. = कृपया हमें आगे बढ़ने दीजिए।\n\n⚠️ याद रखो:\nLET के बाद NEVER "to":\n❌ Let me TO go. → ✅ Let me go.\n❌ Let him TO speak. → ✅ Let him speak.`,

  rules: [
    {
      rule: "LET + Object + Base verb (NEVER 'to + verb')",
      explanation: "This is the most important rule for LET! Unlike 'want to go' or 'allow to go', LET uses base verb directly WITHOUT 'to'. 'Let me go' (not 'Let me to go').",
      example: "✅ Let me explain. | ✅ Let him try. | ✅ Let her finish.\n❌ Let me to explain. | ❌ Let him to try. | ❌ Let her to finish.",
      exception: "Compare: 'Allow' uses 'to': 'Allow me TO go.' BUT 'Let': 'Let me go.' — LET never needs 'to'!",
    },
    {
      rule: "Object must come between LET and the verb",
      explanation: "The person or thing being allowed must come right after LET, then the verb. Never skip the object.",
      example: "Let ME go. / Let HIM speak. / Let HER finish. / Let THEM try. / Let IT be.",
      exception: "In 'Let's' (Let us), the object 'us' is already contracted. 'Let's go' = 'Let us go.' This is covered in Day 14.",
    },
    {
      rule: "Negative: Don't let + object + base verb",
      explanation: "To say 'don't allow', use 'Don't let'. This is the most common negative form of LET.",
      example: "Don't let him leave. / Please don't let her cry. / Don't let the food get cold. / Don't let this opportunity pass.",
    },
    {
      rule: "LET in requests: 'Please let me + verb' or 'Let me + verb'",
      explanation: "'Let me' is an extremely common phrase for politely requesting permission to do something. It's one of the most useful English phrases to memorize!",
      example: "Let me check. / Let me think. / Let me explain. / Let me help you. / Please let me know. / Let me handle this.",
    },
    {
      rule: "LET + it/things + happen (allowing natural processes)",
      explanation: "'Let' can also be used to allow natural events or processes to happen — without forcing or stopping them.",
      example: "Let the paint dry. / Let the music play. / Let nature take its course. / Let the idea settle in. / Let it go.",
    },
  ],

  commonMistakes: [
    {
      wrong: "Let me to go.",
      correct: "Let me go.",
      explanation: "NEVER use 'to' after 'let'. Formula: Let + object + BASE verb (no 'to'). 'Let me go', 'Let her speak'.",
    },
    {
      wrong: "Let he go.",
      correct: "Let him go.",
      explanation: "After 'let', use OBJECT pronouns: me, him, her, them, us, it. NOT subject pronouns (he, she, they, I).",
    },
    {
      wrong: "Let she speak first.",
      correct: "Let her speak first.",
      explanation: "'She' is a subject pronoun. After 'let', use object pronoun 'HER': 'Let HER speak first.'",
    },
    {
      wrong: "Please let me to know your decision.",
      correct: "Please let me know your decision.",
      explanation: "'Let me know' is a fixed phrase — no 'to'. Meaning: कृपया मुझे बताएँ। Very common in professional English!",
    },
    {
      wrong: "Please don't let to him go.",
      correct: "Please don't let him go.",
      explanation: "Don't let + object + base verb. No 'to' anywhere in this pattern.",
    },
  ],

  sentencePatterns: [
    {
      pattern: "Let + me/him/her/them/us/it + base verb (Allowing someone)",
      hindiPattern: "[Person]-को [verb]-ने दो — अनुमति देना",
      examples: [
        { english: "Let me handle this situation, please.", hindi: "मुझे यह situation handle करने दो, please।" },
        { english: "Let him present his idea first.", hindi: "पहले उसे अपना idea present करने दो।" },
        { english: "Let her decide — it's her life.", hindi: "उसे decide करने दो — यह उसकी ज़िंदगी है।" },
        { english: "Let them try on their own before asking for help.", hindi: "मदद माँगने से पहले उन्हें खुद try करने दो।" },
        { english: "Let it cool down before you eat it.", hindi: "खाने से पहले इसे ठंडा होने दो।" },
        { english: "Let me know if you need anything.", hindi: "अगर तुम्हें कुछ चाहिए तो मुझे बताओ।" },
        { english: "Let him finish speaking without interrupting.", hindi: "बीच में interrupt किए बिना उसे बोलने दो।" },
        { english: "Let the children play in the garden for a while.", hindi: "बच्चों को थोड़ी देर garden में खेलने दो।" },
        { english: "Let me check the document before we send it.", hindi: "भेजने से पहले मुझे document check करने दो।" },
        { english: "Let us know your feedback on the presentation.", hindi: "Presentation पर अपना feedback हमें दो।" },
        { english: "Please let me explain what happened.", hindi: "कृपया मुझे बताने दो कि क्या हुआ।" },
        { english: "Let the data speak for itself.", hindi: "Data को खुद बोलने दो।" },
      ],
    },
    {
      pattern: "Don't let + object + base verb (Preventing someone from doing something)",
      hindiPattern: "[Person]-को [verb]-ने मत दो — रोकना",
      examples: [
        { english: "Don't let him leave without signing the document.", hindi: "Document पर sign किए बिना उसे जाने मत दो।" },
        { english: "Don't let the children stay up too late.", hindi: "बच्चों को बहुत देर तक जागने मत दो।" },
        { english: "Don't let this problem affect your work.", hindi: "इस problem को अपने काम पर असर मत करने दो।" },
        { english: "Please don't let them know about the surprise party.", hindi: "Please उन्हें surprise party के बारे में मत बताओ।" },
        { english: "Don't let fear stop you from trying new things.", hindi: "डर को नई चीज़ें try करने से मत रोकने दो।" },
        { english: "Don't let the client wait for more than five minutes.", hindi: "Client को पाँच मिनट से ज़्यादा मत इंतज़ार करने दो।" },
      ],
    },
  ],

  speakingTips: [
    "Practice 'Let me...' phrases daily — they are incredibly common in natural English",
    "Most useful: 'Let me know', 'Let me check', 'Let me think', 'Let me explain', 'Let me try'",
    "In professional emails: 'Please let me know by Friday.' — polite and very standard",
    "Voice tone: 'Let me' = calm request | 'Don't let' = firm direction",
    "Practice don't let: 'Don't let this...' — use in warnings and advice",
  ],

  memoryTricks: [
    "LET = Allow = करने देना. L-E-T = Let Everyone Try!",
    "NEVER 'to' after LET: Remember 'LET + object + verb' — it's simpler without 'to'!",
    "Object pronouns after LET: me, him, her, them, us, it (NOT I, he, she, they, we)",
    "'Let me know' = one of the TOP 10 most used English phrases — memorize it as a chunk!",
    "Don't let = prevent. Let = allow. Opposite meanings with the same base!",
  ],

  story: {
    title: "The Wise Coach",
    paragraphs: [
      "Coach Suresh had a team of young cricketers. They were talented but they fought with each other constantly.",
      "One day, during practice, two players Ravi and Vijay started arguing. Coach Suresh didn't let them argue for long. He called them both.",
      "'Let me tell you something,' he said quietly. 'Let Ravi speak first, Vijay. Then let Vijay respond, Ravi. Don't let your ego get in the way of the team.'",
      "Ravi spoke. Vijay listened. Then Vijay spoke. Ravi listened. Coach didn't let either of them interrupt.",
      "Then Coach said: 'In cricket, let the ball do the talking. Don't let your emotions make decisions. Let the game guide you.'",
      "The team was shocked. They had never thought about it that way. From that day, they let each other speak, they let problems be solved calmly, and they let the game bring out the best in each of them.",
      "That season, Coach didn't let them give up when they were losing. He said: 'Let the score not define you. Let your effort define you.' They won the championship.",
    ],
    moral: "Let others speak, let yourself listen, and let wisdom guide your actions. LET is not just grammar — it's a life philosophy!",
    keyWords: [
      { word: "let me tell you", meaning: "मुझे बताने दो — permission to speak/explain" },
      { word: "didn't let them argue", meaning: "बहस नहीं करने दिया — prevented them from arguing" },
      { word: "let each other speak", meaning: "एक-दूसरे को बोलने दिया — allowed each other to speak" },
      { word: "let the game guide", meaning: "खेल को guide करने दो — allow something to show the way" },
    ],
  },

  dialogue: {
    title: "In the Office: Handling a Difficult Situation",
    setting: "Team leader Asha is managing a conflict between colleagues Deepak and Rohit.",
    lines: [
      { speaker: "Asha", text: "Please, let me speak. Both of you, let me handle this calmly.", hindi: "Please, मुझे बोलने दो। तुम दोनों, मुझे शांति से handle करने दो।" },
      { speaker: "Deepak", text: "He didn't let me present my data in the meeting!", hindi: "उसने meeting में मुझे अपना data present नहीं करने दिया!" },
      { speaker: "Asha", text: "Okay Deepak, let me hear your side first. Rohit, please let him finish.", hindi: "Okay Deepak, पहले मुझे तुम्हारी बात सुनने दो। Rohit, please उसे finish करने दो।" },
      { speaker: "Deepak", text: "I had important findings. Let me show you the report now, at least.", hindi: "मेरे पास महत्वपूर्ण findings थीं। कम से कम अब मुझे report दिखाने दो।" },
      { speaker: "Asha", text: "Yes, let him share the report. Rohit, please let the data speak. Don't let personal issues affect our work.", hindi: "हाँ, उसे report share करने दो। Rohit, please data को बोलने दो। Personal issues को हमारे काम पर असर मत करने दो।" },
      { speaker: "Rohit", text: "Okay. I'm sorry. Let me look at the report. And let me apologize to Deepak.", hindi: "Okay। मुझे माफ करो। मुझे report देखने दो। और Deepak से माफी माँगने दो।" },
      { speaker: "Asha", text: "Good. Let's move forward together. Please let me know if this happens again — don't let it escalate.", hindi: "अच्छा। आओ साथ में आगे बढ़ते हैं। अगर ऐसा फिर हो तो मुझे बताओ — इसे escalate मत होने दो।" },
    ],
    notes: [
      "'Let me speak/handle/hear' = requesting permission for yourself",
      "'Let him/her finish/show/share' = granting permission to others",
      "'Don't let' = preventing negative outcomes",
      "'Please let me know' = very common professional phrase",
    ],
  },

  summary: [
    "LET = allow, permit = करने देना",
    "Formula: Let + object (me/him/her/them/us/it) + BASE verb (no 'to'!)",
    "Negative: Don't let + object + base verb",
    "Polite phrases: 'Let me know', 'Please let me explain', 'Let me check'",
    "Object pronouns: me, him, her, them, us, it (NEVER he, she, they, I)",
  ],
};

// ─── Day 13, Topic 2, Subtopic 1: Daily Life Sentences ────────
const D13_T2_S1: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "LET in Daily Life",
      hindiPattern: "रोज़मर्रा की ज़िंदगी में LET",
      examples: [
        { english: "Let me open the door for you.", hindi: "आपके लिए दरवाज़ा खोलने दो।" },
        { english: "Let the soup cool down before drinking.", hindi: "पीने से पहले soup को ठंडा होने दो।" },
        { english: "Please let me carry your bags.", hindi: "Please मुझे तुम्हारे bags उठाने दो।" },
        { english: "Don't let the cat go outside at night.", hindi: "रात को बिल्ली को बाहर मत जाने दो।" },
        { english: "Let him sleep — he's tired from work.", hindi: "उसे सोने दो — वह काम से थका हुआ है।" },
        { english: "Let me call the restaurant and book a table.", hindi: "मुझे restaurant call करके table book करने दो।" },
        { english: "Please don't let the children waste food.", hindi: "Please बच्चों को खाना बर्बाद मत करने दो।" },
        { english: "Let it rain — the fields need water.", hindi: "बारिश होने दो — खेतों को पानी की ज़रूरत है।" },
        { english: "Let me taste the curry before you add more salt.", hindi: "और नमक डालने से पहले मुझे curry taste करने दो।" },
        { english: "Don't let your worries stop you from enjoying today.", hindi: "चिंताओं को आज का आनंद लेने से मत रोकने दो।" },
        { english: "Let the dog out — it's been inside all day.", hindi: "कुत्ते को बाहर जाने दो — वह पूरे दिन अंदर है।" },
        { english: "Let your sister choose the movie tonight.", hindi: "आज रात अपनी बहन को movie choose करने दो।" },
      ],
    },
  ],

  summary: [
    "Let is used constantly in home and family situations",
    "Most common: Let me [do something] = requesting to do something yourself",
    "Don't let = preventing someone from doing something harmful or unwanted",
    "Practice saying 5 'Let me...' sentences about your daily activities",
  ],
};

// ============================================================
// DAY 14 — USE OF LET'S (Suggestions and Invitations)
// Subtopic IDs: d14-t1-s1 through d14-t4-s3
// ============================================================

// ─── Day 14, Topic 1, Subtopic 1: Introduction to LET'S ──────
const D14_T1_S1: Partial<LessonContentType> = {
  whyLearnThis: `LET'S is one of the FRIENDLIEST and most SOCIAL phrases in English!\n\nLet's = Let us — a suggestion or invitation that INCLUDES yourself!\n\n• "Let's go!" (चलो!)\n• "Let's eat." (खाना खाते हैं।)\n• "Let's try something new." (कुछ नया try करते हैं।)\n• "Let's not argue." (बहस मत करते हैं।)\n\nYou use Let's when:\n✓ Making suggestions: "Let's take a break."\n✓ Inviting someone: "Let's have dinner together."\n✓ Group decisions: "Let's vote on this."\n✓ Encouraging action: "Let's not waste time. Let's start!"\n\nWithout "Let's", your English sounds cold and commanding.\nWith "Let's", you sound warm, collaborative, and friendly!\n\nLet's learn it right now!`,

  conceptExplanation: `LET'S = LET US\n\nLet's is a contraction: LET + US = LET'S\n\nIt means: "I suggest WE do something together."\n\n🎯 THE KEY DIFFERENCE:\n• "Let HIM go." = Allow him to go (he goes, not me)\n• "Let's go." = Let US go (WE go together — includes me!)\n\n📌 THREE PATTERNS:\n\n1️⃣ LET'S + Base Verb (Positive Suggestion):\n"Let's go to the park."\n"Let's discuss this issue."\n"Let's try the new restaurant."\n\n2️⃣ LET'S NOT + Base Verb (Negative Suggestion):\n"Let's not rush." (जल्दबाज़ी मत करते हैं।)\n"Let's not argue about small things."\n"Let's not waste this opportunity."\n\n3️⃣ LET'S + Verb + Shall we? (Seeking agreement):\n"Let's take a short break, shall we?"\n"Let's begin the meeting, shall we?"\n"Let's review the plan again, shall we?"\n\n📌 FORMAL EQUIVALENT:\nInstead of "Let's", formal writing uses:\n"We should consider..."\n"I suggest we..."\n"It would be advisable to..."`,

  hindiExplanation: `LET'S = चलो, करते हैं, करें — एक साथ कुछ करने का सुझाव देना\n\nLet's = Let us का short form\n\nजब तुम "Let's" बोलते हो, तो तुम खुद भी उस काम में शामिल हो!\n\n📌 Positive (सुझाव):\n• Let's go = चलते हैं / जाते हैं\n• Let's eat = खाना खाते हैं\n• Let's study = पढ़ते हैं\n• Let's try = try करते हैं\n\n📌 Negative (Don't do together):\n• Let's not fight = लड़ाई मत करते हैं\n• Let's not be late = देर मत करते हैं\n• Let's not give up = हार मत मानते हैं\n\n📌 Requesting Agreement:\n• Let's begin, shall we? = शुरू करते हैं, ठीक है?\n• Let's order, shall we? = Order करते हैं, ठीक है?\n\nDifference:\n• Let him go = उसे जाने दो (permission for someone else)\n• Let's go = आओ हम साथ चलते हैं (suggestion including self)`,

  rules: [
    {
      rule: "Let's = Let us — includes the speaker in the suggestion",
      explanation: "'Let's' always includes yourself. When you say 'Let's go', you're saying 'I suggest WE go together.' If you're not included, use 'Let him/her/them' instead.",
      example: "Let's go to lunch. (you + me together) ≠ Let him go. (only him, not me)",
    },
    {
      rule: "Let's + base verb (always base form, no changes)",
      explanation: "After 'Let's', always use the base form of the verb. No 's', no '-ing', no past form. This is the same rule as all 'let' patterns.",
      example: "Let's go. / Let's eat. / Let's try. / Let's begin. / Let's discuss. / Let's celebrate.\n❌ Let's going. | ❌ Let's goes. | ❌ Let's went. — All wrong!",
    },
    {
      rule: "Negative: Let's NOT + base verb (suggestion not to do something)",
      explanation: "'Let's not' is the negative form. It suggests that WE should NOT do something. Much more polite than 'Don't do this!'",
      example: "Let's not rush. / Let's not argue. / Let's not be late. / Let's not make assumptions. / Let's not waste time.",
    },
    {
      rule: "Add 'shall we?' at the end to seek agreement",
      explanation: "Adding 'shall we?' after a Let's sentence turns it into a question seeking agreement. Very common in formal meetings and polite conversations.",
      example: "Let's begin the meeting, shall we? / Let's take a break, shall we? / Let's move to the next point, shall we?",
    },
    {
      rule: "Let's is informal — formal alternatives exist",
      explanation: "In very formal writing (official letters, legal documents), 'Let's' sounds too casual. Use 'I suggest we...', 'We should consider...', or 'It is advisable that we...' instead.",
      example: "Casual: 'Let's discuss this.' | Formal: 'I suggest we discuss this.' / 'We should discuss this matter.'",
    },
  ],

  commonMistakes: [
    {
      wrong: "Lets go.",
      correct: "Let's go.",
      explanation: "Always use the apostrophe! 'Let's' = Let us. 'Lets' (without apostrophe) means 'allows' (He lets me go). They have completely different meanings!",
    },
    {
      wrong: "Let's going to the market.",
      correct: "Let's go to the market.",
      explanation: "After 'Let's', use BASE form of verb — never -ing form. 'Let's go', not 'Let's going'.",
    },
    {
      wrong: "Let's not to argue.",
      correct: "Let's not argue.",
      explanation: "After 'Let's not', use base verb directly — no 'to'. 'Let's not argue', not 'Let's not to argue'.",
    },
    {
      wrong: "Let us to begin the meeting.",
      correct: "Let's begin the meeting. / Let us begin the meeting.",
      explanation: "No 'to' after 'let us' either. 'Let us begin' (formal) or 'Let's begin' (casual) — but never 'Let us TO begin'.",
    },
    {
      wrong: "Let's go, won't we?",
      correct: "Let's go, shall we?",
      explanation: "The correct tag question for 'Let's' is always 'shall we?' — not 'won't we?' or 'can we?' Memorize: Let's + shall we?",
    },
  ],

  sentencePatterns: [
    {
      pattern: "Let's + base verb (Positive suggestion — doing together)",
      hindiPattern: "चलो + [verb] करते हैं — साथ में suggestion",
      examples: [
        { english: "Let's go for a walk after dinner.", hindi: "रात के खाने के बाद चलो walk पर चलते हैं।" },
        { english: "Let's celebrate your promotion tonight!", hindi: "आज रात तुम्हारी promotion celebrate करते हैं!" },
        { english: "Let's start from the beginning and understand properly.", hindi: "शुरू से शुरू करते हैं और अच्छे से समझते हैं।" },
        { english: "Let's have a team lunch this Friday.", hindi: "इस शुक्रवार team lunch रखते हैं।" },
        { english: "Let's try a different approach to this problem.", hindi: "इस problem पर एक अलग approach try करते हैं।" },
        { english: "Let's call Mom and wish her on her anniversary.", hindi: "Mom को call करते हैं और anniversary पर wish करते हैं।" },
        { english: "Let's book the tickets before they sell out.", hindi: "Tickets बिकने से पहले book करते हैं।" },
        { english: "Let's discuss the results of last week's campaign.", hindi: "पिछले हफ्ते की campaign के results discuss करते हैं।" },
        { english: "Let's make this the best year of our lives!", hindi: "इस साल को अपनी ज़िंदगी का सबसे अच्छा साल बनाते हैं!" },
        { english: "Let's split the work equally among team members.", hindi: "Team members में काम बराबर बाँटते हैं।" },
        { english: "Let's check the weather before we leave.", hindi: "जाने से पहले weather check करते हैं।" },
        { english: "Let's learn 10 new English words every day.", hindi: "हर दिन 10 नए English words सीखते हैं।" },
      ],
    },
    {
      pattern: "Let's not + base verb (Negative suggestion — not doing together)",
      hindiPattern: "चलो + [verb] मत करते हैं — न करने का suggestion",
      examples: [
        { english: "Let's not argue over small things.", hindi: "छोटी-छोटी बातों पर बहस मत करते हैं।" },
        { english: "Let's not waste any more time on this issue.", hindi: "इस issue पर और समय बर्बाद मत करते हैं।" },
        { english: "Let's not rush — quality matters more than speed.", hindi: "जल्दबाज़ी मत करते हैं — quality speed से ज़्यादा ज़रूरी है।" },
        { english: "Let's not make any decisions without consulting the team.", hindi: "Team से पूछे बिना कोई decision मत करते हैं।" },
        { english: "Let's not be late for the client meeting.", hindi: "Client meeting के लिए देर मत करते हैं।" },
        { english: "Let's not give up just because it's difficult.", hindi: "सिर्फ इसलिए हार मत मानते हैं कि यह मुश्किल है।" },
        { english: "Let's not forget to backup the files before closing.", hindi: "बंद करने से पहले files backup करना मत भूलते हैं।" },
        { english: "Let's not make promises we can't keep.", hindi: "ऐसे वादे मत करते हैं जो हम पूरे नहीं कर सकते।" },
      ],
    },
    {
      pattern: "Let's + verb + shall we? (Seeking agreement politely)",
      hindiPattern: "चलो [verb] करते हैं, ठीक है? — agreement माँगना",
      examples: [
        { english: "Let's begin the meeting, shall we?", hindi: "Meeting शुरू करते हैं, ठीक है?" },
        { english: "Let's take a ten-minute break, shall we?", hindi: "दस मिनट का break लेते हैं, ठीक है?" },
        { english: "Let's move to the next agenda point, shall we?", hindi: "अगले agenda point पर जाते हैं, ठीक है?" },
        { english: "Let's order the food now, shall we?", hindi: "अब खाना order करते हैं, ठीक है?" },
        { english: "Let's wrap up this discussion, shall we?", hindi: "इस discussion को यहीं खत्म करते हैं, ठीक है?" },
      ],
    },
  ],

  speakingTips: [
    "Practice 'Let's go!' — the most used English phrase. Say it with enthusiasm!",
    "Use rising intonation on 'Let's' suggestions: 'Let's GO for a walk?' (sounds inviting)",
    "Add '?' to make suggestions feel collaborative, not commanding",
    "In meetings, 'Shall we?' is very professional: 'Let's begin, shall we?'",
    "Practice 'Let's not' for showing restraint: 'Let's not jump to conclusions.'",
  ],

  memoryTricks: [
    "LET'S = LET + 'S (US) = Let US. The apostrophe stands for 'u' in 'us'!",
    "Let's INCLUDES you! LET HIM doesn't include you. The 's' in Let's = self + others!",
    "No 'to' after Let's: 'Let's GO' (not 'Let's to go'). GO directly after Let's!",
    "Let's not = polite 'don't'. More friendly than 'Don't do this!'",
    "Shall we? = the tag question for Let's. L-S-S: Let's + Shall we!",
  ],

  story: {
    title: "The 75-Day English Club",
    paragraphs: [
      "On Day 1 of the 75 Hard English course, Raj turned to his study partner Pooja and said: 'Let's start this journey together!'",
      "Pooja smiled: 'Let's commit to speaking English every single day. Let's not skip even one day!'",
      "By Day 7, they were struggling. 'This is hard,' Raj admitted. 'Let's not give up,' Pooja said firmly.",
      "By Day 14, they had mastered Let and Let's. They practiced together: 'Let's review what we learned! Let's make sentences! Let's speak loudly!'",
      "On Day 30, they met new students who were just starting. 'Let's help them!' Pooja suggested. So they became mentors.",
      "On Day 75, they stood in front of 50 students and spoke in English for 30 minutes. Their teacher said, 'Look at them — let's give them a round of applause!'",
      "Raj whispered to Pooja: 'We did it. Let's celebrate!' Pooja laughed: 'Let's not stop here — let's keep going forever!'",
    ],
    moral: "Let's is the language of teamwork, friendship, and shared goals. When you say Let's, you invite others into your journey!",
    keyWords: [
      { word: "let's start", meaning: "शुरू करते हैं — invitation to begin together" },
      { word: "let's not give up", meaning: "हार मत मानते हैं — suggestion to persevere together" },
      { word: "let's celebrate", meaning: "celebrate करते हैं — invitation to celebrate together" },
      { word: "let's commit", meaning: "प्रतिबद्ध होते हैं — pledging to do something as a group" },
    ],
  },

  dialogue: {
    title: "Friends Planning a Road Trip",
    setting: "A group of friends — Ajay, Swati, and Nikhil — are planning a weekend road trip.",
    lines: [
      { speaker: "Ajay", text: "Guys, the weekend is coming! Let's do something exciting!", hindi: "Guys, weekend आ रहा है! कुछ exciting करते हैं!" },
      { speaker: "Swati", text: "Let's go on a road trip! I've been wanting to visit Coorg for so long.", hindi: "Road trip पर जाते हैं! मैं बहुत समय से Coorg जाना चाहती थी।" },
      { speaker: "Nikhil", text: "Let's not rush the plan. Let's first check if everyone can get Saturday off.", hindi: "Plan जल्दबाज़ी में मत बनाते हैं। पहले check करते हैं कि सभी को शनिवार की छुट्टी मिल सकती है।" },
      { speaker: "Ajay", text: "Good point! Let's create a WhatsApp group and coordinate. Let's also plan the budget first.", hindi: "अच्छा point! WhatsApp group बनाते हैं और coordinate करते हैं। पहले budget भी plan करते हैं।" },
      { speaker: "Swati", text: "Let's not spend too much. Let's keep it simple — drive, camp, and enjoy nature.", hindi: "ज़्यादा खर्च मत करते हैं। Simple रखते हैं — drive, camp, और nature enjoy करते हैं।" },
      { speaker: "Nikhil", text: "Perfect! Let's leave early on Saturday to avoid traffic. Let's pack light, shall we?", hindi: "Perfect! Traffic से बचने के लिए शनिवार को जल्दी निकलते हैं। हल्का pack करते हैं, ठीक है?" },
      { speaker: "Ajay", text: "Agreed! Let's make this the best trip of the year. Let's not forget any essentials this time!", hindi: "Agreed! इसे साल की सबसे अच्छी trip बनाते हैं। इस बार ज़रूरी चीज़ें मत भूलते हैं!" },
      { speaker: "Swati", text: "Let's share the driving too — let's not put all the burden on one person.", hindi: "Driving भी share करते हैं — सारा बोझ एक person पर मत डालते हैं।" },
    ],
    notes: [
      "Let's = suggestion INCLUDING yourself (we go together)",
      "Let's not = polite way to suggest NOT doing something together",
      "Shall we? = seeking group agreement after a Let's suggestion",
      "Notice: Let's go / Let's check / Let's plan / Let's leave — all base verbs after Let's",
    ],
  },

  summary: [
    "Let's = Let us = Suggestion including yourself and others",
    "Formula: Let's + base verb (NEVER Let's + -ing or Let's to + verb)",
    "Negative: Let's not + base verb (polite suggestion not to do something)",
    "Tag: Let's + verb + shall we? (seeking agreement)",
    "Let's vs Let him: Let's = includes you | Let him = only about another person",
  ],
};

// ─── Day 14, Topic 2, Subtopic 1: Daily Life Sentences ────────
const D14_T2_S1: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "LET'S in Everyday Situations",
      hindiPattern: "रोज़मर्रा में LET'S",
      examples: [
        { english: "Let's cook something together tonight.", hindi: "आज रात साथ मिलकर कुछ बनाते हैं।" },
        { english: "Let's watch a movie after dinner.", hindi: "रात के खाने के बाद movie देखते हैं।" },
        { english: "Let's visit Grandma this Sunday.", hindi: "इस रविवार दादी से मिलने जाते हैं।" },
        { english: "Let's not miss this sale — it ends today!", hindi: "यह sale miss मत करते हैं — आज खत्म हो रही है!" },
        { english: "Let's clean the house before Mom comes home.", hindi: "Mom के घर आने से पहले घर साफ करते हैं।" },
        { english: "Let's order pizza — I don't feel like cooking today.", hindi: "Pizza order करते हैं — आज खाना बनाने का मन नहीं है।" },
        { english: "Let's start a morning walk routine from tomorrow.", hindi: "कल से morning walk का routine शुरू करते हैं।" },
        { english: "Let's not spend the whole day on social media.", hindi: "पूरा दिन social media पर मत बिताते हैं।" },
        { english: "Let's surprise Dad on his birthday with a special cake.", hindi: "पापा के जन्मदिन पर special cake के साथ उन्हें surprise करते हैं।" },
        { english: "Let's try that new cafe that opened near our office.", hindi: "हमारे office के पास जो नया cafe खुला है, वहाँ try करते हैं।" },
        { english: "Let's not be negative — let's focus on solutions.", hindi: "Negative मत होते हैं — solutions पर focus करते हैं।" },
        { english: "Let's save money this month and plan a vacation.", hindi: "इस महीने पैसे बचाते हैं और vacation plan करते हैं।" },
      ],
    },
  ],

  summary: [
    "Let's is the most social and friendly phrase in English",
    "Used to invite, suggest, encourage, or coordinate with others",
    "Daily uses: food, plans, activities, outings, family events",
    "Practice: suggest 5 things to someone using 'Let's' today!",
  ],
};

// ─── Day 14, Topic 2, Subtopic 2: Professional & Office Usage ─
const D14_T2_S2: Partial<LessonContentType> = {
  sentencePatterns: [
    {
      pattern: "LET'S in Professional Settings",
      hindiPattern: "Office और Professional माहौल में LET'S",
      examples: [
        { english: "Let's schedule a call with the client for tomorrow.", hindi: "कल client के साथ call schedule करते हैं।" },
        { english: "Let's review the quarterly report before the presentation.", hindi: "Presentation से पहले quarterly report review करते हैं।" },
        { english: "Let's not make any commitments without consulting the team.", hindi: "Team से पूछे बिना कोई commitment मत करते हैं।" },
        { english: "Let's set clear deadlines for each milestone.", hindi: "हर milestone के लिए clear deadlines set करते हैं।" },
        { english: "Let's brainstorm new ideas for this campaign, shall we?", hindi: "इस campaign के लिए नए ideas brainstorm करते हैं, ठीक है?" },
        { english: "Let's wrap up this project and move to the next one.", hindi: "इस project को खत्म करते हैं और अगले पर जाते हैं।" },
        { english: "Let's not jump to conclusions before seeing all the data.", hindi: "सारा data देखने से पहले कोई निष्कर्ष मत निकालते हैं।" },
        { english: "Let's create a checklist to make sure nothing is missed.", hindi: "Checklist बनाते हैं ताकि कुछ भी छूटे नहीं।" },
        { english: "Let's give the new intern some time to adjust.", hindi: "नए intern को adjust करने के लिए थोड़ा समय देते हैं।" },
        { english: "Let's reconvene after the lunch break, shall we?", hindi: "Lunch break के बाद फिर मिलते हैं, ठीक है?" },
        { english: "Let's not let one bad review ruin our momentum.", hindi: "एक बुरी review को हमारी momentum बर्बाद मत करने देते हैं।" },
        { english: "Let's aim to finish this sprint two days ahead of schedule.", hindi: "इस sprint को schedule से दो दिन पहले खत्म करने का लक्ष्य रखते हैं।" },
      ],
    },
  ],

  summary: [
    "Let's is essential in professional communication for collaboration",
    "'Shall we?' makes it even more polite in formal meetings",
    "Let's not = professional way to suggest caution",
    "Replaces commands with inclusive suggestions — builds team spirit",
  ],
};

// ─── Day 14, Topic 3, Subtopic 3: Story & Full Dialogue ───────
const D14_T3_S3: Partial<LessonContentType> = {
  story: {
    title: "Day 14 Complete: The Grammar Warriors",
    paragraphs: [
      "Fourteen days had passed since the 75 Hard English Challenge began. Nisha looked at her notes: Imperative. Be Verb. This/That. Has/Have. Had. Will Have. There is/are. Want. Wanted. Let. Let's.",
      "She called her study partner Arjun: 'Let's review everything together!' 'Let me get my notebook,' he replied.",
      "They practiced: 'Let's start with Let and Let's. Let's not confuse them.' Arjun said.",
      "Nisha agreed: 'Let's practice: Let me go = allow me. Let's go = we go together. There IS a difference!'",
      "By the end of the session, they felt confident. Nisha said: 'Let's celebrate — we've finished 14 days!'",
      "'Let's not stop here,' Arjun smiled. 'By Day 75, we will have mastered everything. Let's go all the way!'",
      "There was determination in both their voices. There were 61 days more to go. But let's be honest — they had already transformed.",
    ],
    moral: "Grammar is not just rules — it's a tool to express your life, your desires, and your dreams. Let's use it every day!",
    keyWords: [
      { word: "let's review", meaning: "review करते हैं — joint suggestion to look back" },
      { word: "let me get", meaning: "मुझे लेने दो — permission for self" },
      { word: "let's not confuse", meaning: "confuse मत होते हैं — joint suggestion to avoid error" },
      { word: "let's go all the way", meaning: "पूरे रास्ते जाते हैं — determination to complete" },
    ],
  },

  dialogue: {
    title: "Day 14 Review: Student and Teacher",
    setting: "English teacher Ms. Sheetal reviews Day 14 topic with student Karan.",
    lines: [
      { speaker: "Ms. Sheetal", text: "Let's do a quick revision of today's topic, Karan. Tell me — what is the difference between Let and Let's?", hindi: "Karan, आज के topic का quick revision करते हैं। बताओ — Let और Let's में क्या अंतर है?" },
      { speaker: "Karan", text: "'Let' allows someone else to do something — like 'Let him go.' 'Let's' is a suggestion including yourself — like 'Let's go together.'", hindi: "'Let' किसी और को कुछ करने देता है — जैसे 'Let him go.' 'Let's' एक suggestion है जिसमें आप खुद भी शामिल हैं — जैसे 'Let's go together.'" },
      { speaker: "Ms. Sheetal", text: "Excellent! Now make a sentence using 'Let's not.'", hindi: "Excellent! अब 'Let's not' से एक sentence बनाओ।" },
      { speaker: "Karan", text: "Let's not waste time — let's keep practicing English every day!", hindi: "समय बर्बाद मत करते हैं — हर दिन English practice करते रहते हैं!" },
      { speaker: "Ms. Sheetal", text: "Perfect! And now use 'Let me' and 'Let him' in sentences.", hindi: "Perfect! अब 'Let me' और 'Let him' से sentences बनाओ।" },
      { speaker: "Karan", text: "Let me explain what I learned: Let him speak first because he is the senior member of the team.", hindi: "मैंने जो सीखा वह explain करने दो: उसे पहले बोलने दो क्योंकि वह team का senior member है।" },
      { speaker: "Ms. Sheetal", text: "Brilliant! Let's give you a round of applause! You've completed 14 days of English mastery!", hindi: "शानदार! तुम्हें एक round of applause देते हैं! तुमने English mastery के 14 दिन पूरे किए!" },
      { speaker: "Karan", text: "Thank you, Ma'am! Let's keep going — shall we?", hindi: "शुक्रिया, Ma'am! चलते रहते हैं — ठीक है?" },
    ],
    notes: [
      "Day 14 complete: Let + Let's = allow vs suggest",
      "Shall we? = seeking agreement in polite settings",
      "Let me = requesting permission for yourself",
      "Let's not = joint suggestion to avoid doing something",
    ],
  },

  summary: [
    "Day 14 complete! Let's and Let — two powerful English tools",
    "Let's = Let us = WE do together (includes speaker)",
    "Let him/her/them = allow someone else (does NOT include speaker)",
    "Let's not = suggestion to avoid doing something together",
    "Practice: Use Let's in 10 real conversations today!",
  ],
};

// ============================================================
// EXPORT: The content map for Days 8-14
// This map is merged into the main SUBTOPIC_CONTENT_MAP
// ============================================================

// Export all Day 8-14 subtopic content as a single Record object
// Each key is a subtopicId (e.g., "d8-t1-s1"), value is the content
export const DAYS_8_TO_14_CONTENT: Record<string, Partial<LessonContentType>> = {

  // ─── DAY 8: WILL HAVE (Future Perfect) ─────────────────────
  "d8-t1-s1": D8_T1_S1,  // Introduction to Will Have / Future Perfect
  "d8-t1-s2": D8_T1_S2,  // Structure & Formula of Will Have
  "d8-t1-s3": {           // Positive, Negative & Questions with Will Have
    sentencePatterns: [
      {
        pattern: "Positive, Negative, and Questions — Will Have",
        hindiPattern: "Will Have के positive, negative, और question forms",
        examples: [
          { english: "✅ Positive: I will have finished the work by Monday.", hindi: "सकारात्मक: मैं सोमवार तक काम पूरा कर चुका होऊँगा।" },
          { english: "❌ Negative: I won't have finished the work by Monday.", hindi: "नकारात्मक: मैं सोमवार तक काम पूरा नहीं कर पाऊँगा।" },
          { english: "❓ Question: Will you have finished the work by Monday?", hindi: "प्रश्न: क्या तुम सोमवार तक काम पूरा कर चुके होंगे?" },
          { english: "✅ She will have submitted the form by tomorrow.", hindi: "वह कल तक form submit कर चुकी होगी।" },
          { english: "❌ She won't have submitted the form by tomorrow.", hindi: "वह कल तक form submit नहीं कर पाएगी।" },
          { english: "❓ Will she have submitted the form by tomorrow?", hindi: "क्या वह कल तक form submit कर चुकी होगी?" },
          { english: "✅ They will have cleaned the office by 9 AM.", hindi: "वे सुबह 9 बजे तक office साफ कर चुके होंगे।" },
          { english: "❌ They won't have cleaned the office by 9 AM.", hindi: "वे सुबह 9 बजे तक office साफ नहीं कर पाएँगे।" },
          { english: "❓ Will they have cleaned the office by 9 AM?", hindi: "क्या वे सुबह 9 बजे तक office साफ कर चुके होंगे?" },
          { english: "✅ By next year, I will have earned my degree.", hindi: "अगले साल तक मैं अपनी degree प्राप्त कर चुका होऊँगा।" },
        ],
      },
    ],
    summary: [
      "Positive: Subject + will have + 3rd form",
      "Negative: Subject + won't have + 3rd form",
      "Question: Will + subject + have + 3rd form?",
      "Short answers: Yes, I will have. / No, I won't have.",
    ],
  },

  "d8-t1-s4": {           // Will Have with Different Subjects
    sentencePatterns: [
      {
        pattern: "Will Have with All Subjects",
        hindiPattern: "सभी Subjects के साथ Will Have",
        examples: [
          { english: "I will have completed the course by December.", hindi: "मैं दिसंबर तक course पूरा कर चुका होऊँगा।" },
          { english: "You will have mastered English by Day 75.", hindi: "तुम Day 75 तक English master कर चुके होंगे।" },
          { english: "He will have arrived before the event starts.", hindi: "वह event शुरू होने से पहले पहुँच चुका होगा।" },
          { english: "She will have published her book by next year.", hindi: "वह अगले साल तक अपनी किताब publish कर चुकी होगी।" },
          { english: "It will have loaded by the time you return.", hindi: "तुम्हारे वापस आने तक यह load हो चुका होगा।" },
          { english: "We will have prepared the proposal by Thursday.", hindi: "हम गुरुवार तक proposal तैयार कर चुके होंगे।" },
          { english: "They will have finished the renovation by summer.", hindi: "वे गर्मियों तक renovation खत्म कर चुके होंगे।" },
        ],
      },
    ],
    summary: [
      "Will Have is the same for ALL subjects — no changes!",
      "I will have / You will have / He will have / She will have / We will have / They will have",
      "This is easier than present perfect (have vs has distinction doesn't apply here)",
    ],
  },

  "d8-t2-s1": D8_T2_S1,  // Daily Life Sentences — Will Have
  "d8-t2-s2": D8_T2_S2,  // Professional & Office Usage — Will Have

  "d8-t2-s3": {           // Common Mistakes — Will Have
    commonMistakes: [
      { wrong: "By tomorrow I will finish the project.", correct: "By tomorrow I will have finished the project.", explanation: "'By [time]' = needs Future Perfect (will have). Simple future (will finish) doesn't show completion." },
      { wrong: "She will have went there.", correct: "She will have gone there.", explanation: "'Go' → 3rd form = 'GONE'. Not 'went' (that's simple past). After 'will have', always use 3rd form." },
      { wrong: "Will have he done it?", correct: "Will he have done it?", explanation: "Question word order: WILL + SUBJECT + HAVE + past participle. 'Will he have done it?' — subject comes between will and have." },
      { wrong: "By the time you come, I will have been finished.", correct: "By the time you come, I will have finished.", explanation: "No need for 'been' here. Just 'will have + past participle'. 'Will have been finished' would mean passive voice." },
    ],
    summary: [
      "Most common error: using simple future instead of will have with 'By [time]'",
      "Use correct 3rd forms — irregular verbs are the main source of errors",
      "Question order: Will + Subject + Have + 3rd form",
    ],
  },

  "d8-t3-s1": D8_T3_S1,  // Key Vocabulary (Past Participles)

  "d8-t3-s2": {           // Phrasal Verbs & Idioms — Will Have
    sentencePatterns: [
      {
        pattern: "Phrasal Verbs and Expressions in Future Perfect",
        hindiPattern: "Future Perfect में phrasal verbs और expressions",
        examples: [
          { english: "By next month, I will have given up all bad habits.", hindi: "अगले महीने तक मैं सभी बुरी आदतें छोड़ चुका होऊँगा।" },
          { english: "By graduation, she will have moved on from this difficult phase.", hindi: "Graduation तक वह इस मुश्किल दौर से आगे बढ़ चुकी होगी।" },
          { english: "By the meeting, we will have figured out the solution.", hindi: "Meeting तक हम solution निकाल चुके होंगे।" },
          { english: "By the weekend, he will have caught up on all his work.", hindi: "Weekend तक वह अपना सारा काम पूरा कर चुका होगा।" },
          { english: "By then, the team will have come up with new ideas.", hindi: "तब तक team नए ideas लेकर आ चुकी होगी।" },
        ],
      },
    ],
    summary: [
      "Phrasal verbs work the same way in Future Perfect",
      "Use 3rd form (past participle) of both parts: 'given up', 'moved on', 'caught up'",
      "Practice: combine phrasal verbs you know with 'will have'",
    ],
  },

  "d8-t3-s3": D8_T3_S3,  // Story & Dialogue — Will Have

  "d8-t4-s1": {           // Practice Questions — Will Have
    sentencePatterns: [
      {
        pattern: "80 Practice Sentences — Translate to English using Will Have",
        hindiPattern: "Hindi से English में अनुवाद करो — Will Have use करके",
        examples: [
          { english: "By 8 PM, I will have cooked dinner.", hindi: "शाम 8 बजे तक मैं रात का खाना बना चुका होऊँगा।" },
          { english: "By Monday, she will have read 3 chapters.", hindi: "सोमवार तक वह 3 chapters पढ़ चुकी होगी।" },
          { english: "By tomorrow, he will have repaired the bicycle.", hindi: "कल तक उसने cycle ठीक कर ली होगी।" },
          { english: "By March, they will have launched the new product.", hindi: "मार्च तक उन्होंने नया product launch कर दिया होगा।" },
          { english: "By the time you wake up, I will have left.", hindi: "तुम्हारे उठने तक मैं जा चुका होऊँगा।" },
          { english: "By next year, this road will have been widened.", hindi: "अगले साल तक इस सड़क को चौड़ा किया जा चुका होगा।" },
          { english: "By evening, we will have received the delivery.", hindi: "शाम तक हमें delivery मिल चुकी होगी।" },
          { english: "By June, he will have saved enough for a laptop.", hindi: "जून तक उसने laptop के लिए पर्याप्त पैसे बचा लिए होंगे।" },
          { english: "By the time the results come, we will have studied for 6 months.", hindi: "Results आने तक हम 6 महीने पढ़ चुके होंगे।" },
          { english: "By 2030, I will have traveled to 10 countries.", hindi: "2030 तक मैं 10 देशों में जा चुका होऊँगा।" },
        ],
      },
    ],
    summary: [
      "Practice converting Hindi sentences to English using Will Have",
      "Look for 'by [time]', 'by the time', 'before' as clues",
      "Master the 10 most common irregular past participles: gone, done, seen, made, taken, written, given, spoken, eaten, come",
    ],
  },

  "d8-t4-s2": {           // Speaking Practice — Will Have
    speakingTips: [
      "Say these 5 sentences aloud 5 times each until they feel natural",
      "1. By Day 75, I will have mastered English!",
      "2. By Friday, I will have completed all my tasks.",
      "3. By next year, I will have achieved my goal.",
      "4. Will you have finished by then?",
      "5. Don't worry — I will have handled it by tomorrow.",
      "Record yourself and compare to native speaker pronunciation on YouTube",
      "Practice with a friend: one person sets a 'By [time]' deadline, other makes the Will Have sentence",
    ],
    summary: [
      "Speaking practice is essential to move from knowing to using",
      "Say Future Perfect sentences DAILY to make them automatic",
      "Focus on fluency first, perfect pronunciation second",
    ],
  },

  "d8-t4-s3": {           // Final Assessment — Will Have
    rules: [
      { rule: "RULE 1: Subject + will have + 3rd form", explanation: "The fundamental formula", example: "I will have finished. / She will have submitted." },
      { rule: "RULE 2: Use with 'By [time]' signal words", explanation: "Future Perfect pairs with deadline markers", example: "By Friday / By tomorrow / By the time you arrive" },
      { rule: "RULE 3: Negative = won't have + 3rd form", explanation: "Won't have = will not have", example: "I won't have finished. / She won't have submitted." },
      { rule: "RULE 4: Question = Will + subject + have + 3rd form?", explanation: "Invert will and subject for questions", example: "Will you have done it? / Will she have left?" },
    ],
    summary: [
      "Day 8 COMPLETE — You have mastered Future Perfect!",
      "Formula: Subject + will have + past participle",
      "Use when: showing completion before a future deadline",
      "Practice: Make 1 Will Have sentence every evening about tomorrow's plans",
    ],
  },

  // ─── DAY 9: USE OF THERE ────────────────────────────────────
  "d9-t1-s1": D9_T1_S1,  // Introduction to There is/are/was/were

  "d9-t1-s2": {           // Structure & Formula of There
    conceptExplanation: `THERE IS / THERE ARE — The Formula\n\nRemember: "There" here = NOT place word. It's a DUMMY SUBJECT that starts the sentence.\n\nFORMULA:\nThere + BE VERB + NOUN + (location/time/description)\n\nThe BE VERB matches the NOUN (not "there"):\n• There IS a cat. (cat = singular → IS)\n• There ARE cats. (cats = plural → ARE)\n\nFull sentence structure:\nThere + is/are/was/were + a/an/some/many + noun + [location]\n\nPRESENT:\n+ There is a book on the table.\n- There is no book. / There isn't a book.\n? Is there a book? → Yes, there is. / No, there isn't.\n\nPAST:\n+ There was a shop here.\n- There was no shop. / There wasn't a shop.\n? Was there a shop? → Yes, there was. / No, there wasn't.`,

    sentencePatterns: [
      {
        pattern: "Full Formula Practice: There + be + article + noun + location",
        hindiPattern: "There + is/are/was/were + [article] + noun + [जगह]",
        examples: [
          { english: "There is a beautiful waterfall near the village.", hindi: "गाँव के पास एक सुंदर झरना है।" },
          { english: "There are fifty students in the computer lab.", hindi: "Computer lab में पचास students हैं।" },
          { english: "There was a bookshop on this street before.", hindi: "पहले इस गली में एक किताब की दुकान थी।" },
          { english: "There were many birds in this forest last year.", hindi: "पिछले साल इस जंगल में बहुत पक्षी थे।" },
          { english: "There is no milk left in the bottle.", hindi: "Bottle में दूध नहीं बचा है।" },
          { english: "There are no seats available in first class.", hindi: "First class में कोई seat available नहीं है।" },
          { english: "There was no signal on my phone in that area.", hindi: "उस इलाके में मेरे phone पर signal नहीं था।" },
          { english: "There were no problems during the installation.", hindi: "Installation के दौरान कोई problem नहीं थी।" },
        ],
      },
    ],
    summary: [
      "Formula: There + is/are/was/were + noun + location/description",
      "Match the BE VERB to the NOUN that follows 'there'",
      "Articles: There is A... / There are SOME... / There are MANY...",
    ],
  },

  "d9-t1-s3": {           // Positive, Negative & Questions — There
    sentencePatterns: [
      {
        pattern: "There — Positive, Negative, and Question Forms",
        hindiPattern: "There के positive, negative, और question forms",
        examples: [
          { english: "✅ There is a problem with the network.", hindi: "Network में एक problem है।" },
          { english: "❌ There is no problem with the network. / There isn't any problem.", hindi: "Network में कोई problem नहीं है।" },
          { english: "❓ Is there a problem with the network?", hindi: "क्या network में कोई problem है?" },
          { english: "✅ There are many opportunities in this field.", hindi: "इस field में बहुत opportunities हैं।" },
          { english: "❌ There are no opportunities. / There aren't any opportunities.", hindi: "कोई opportunities नहीं हैं।" },
          { english: "❓ Are there any opportunities in this field?", hindi: "क्या इस field में कोई opportunities हैं?" },
          { english: "✅ There was a long queue at the counter.", hindi: "Counter पर लंबी queue थी।" },
          { english: "❌ There was no queue. / There wasn't any queue.", hindi: "कोई queue नहीं थी।" },
          { english: "❓ Was there a long queue?", hindi: "क्या लंबी queue थी?" },
          { english: "✅ There were many mistakes in the report.", hindi: "Report में बहुत सारी गलतियाँ थीं।" },
          { english: "❌ There were no mistakes. / There weren't any mistakes.", hindi: "कोई गलतियाँ नहीं थीं।" },
          { english: "❓ Were there any mistakes in the report?", hindi: "क्या report में कोई गलतियाँ थीं?" },
        ],
      },
    ],
    summary: [
      "Positive: There is/are/was/were + noun",
      "Negative (Option 1): There is/are NO + noun | Negative (Option 2): There isn't/aren't ANY + noun",
      "Question: Is/Are/Was/Were + there + noun?",
      "Short answers: Yes, there is/are. / No, there isn't/aren't.",
    ],
  },

  "d9-t1-s4": {           // There with Different Subjects and Amounts
    sentencePatterns: [
      {
        pattern: "There with Quantities, Numbers, and Amounts",
        hindiPattern: "There के साथ मात्रा, संख्या, और amount",
        examples: [
          { english: "There is a little milk left. Please buy more.", hindi: "थोड़ा दूध बचा है। Please और खरीदो।" },
          { english: "There are a few apples in the basket.", hindi: "टोकरी में कुछ सेब हैं।" },
          { english: "There is a lot of noise outside today.", hindi: "आज बाहर बहुत शोर है।" },
          { english: "There are a lot of people at the station.", hindi: "Station पर बहुत लोग हैं।" },
          { english: "There is too much work and too little time.", hindi: "बहुत काम है और बहुत कम समय।" },
          { english: "There are too many rules and not enough flexibility.", hindi: "बहुत ज़्यादा rules हैं और पर्याप्त flexibility नहीं।" },
          { english: "There is some sugar in the jar.", hindi: "Jar में थोड़ी चीनी है।" },
          { english: "There are some emails waiting for your reply.", hindi: "कुछ emails तुम्हारे reply का इंतज़ार कर रहे हैं।" },
        ],
      },
    ],
    summary: [
      "There is + uncountable nouns (milk, water, noise, time)",
      "There are + countable plural nouns (apples, people, emails, students)",
      "Quantity words: a little (थोड़ा), a few (कुछ), a lot of (बहुत), some (कुछ), many (बहुत सारे)",
    ],
  },

  "d9-t2-s1": D9_T2_S1,  // Daily Life Sentences — There
  "d9-t2-s2": D9_T2_S2,  // Professional Usage — There

  "d9-t2-s3": {           // Common Mistakes — There
    commonMistakes: [
      { wrong: "There is many books.", correct: "There are many books.", explanation: "'Many books' = plural → use ARE. If the noun after 'there' is plural, use ARE." },
      { wrong: "There are a problem.", correct: "There is a problem.", explanation: "'A problem' = singular → use IS. The article 'a' signals singular." },
      { wrong: "There is no any water.", correct: "There is no water. / There isn't any water.", explanation: "Never use 'no any'. Either 'There is NO water' OR 'There isn't ANY water' — never both together." },
      { wrong: "There have many students.", correct: "There are many students.", explanation: "Never 'There have'. Always use There + is/are/was/were. 'Have' is not used with 'there' for existence." },
      { wrong: "Is there students in the class?", correct: "Are there students in the class?", explanation: "'Students' is plural → use ARE in the question: 'Are there students?'" },
    ],
    summary: [
      "Match is/are to the NOUN that follows 'there' — not to 'there' itself",
      "Never 'no any' — use either 'no' or 'any with isn't/aren't'",
      "Never 'there have' — only There is/are/was/were for existence",
    ],
  },

  "d9-t3-s1": {           // Key Vocabulary — There
    sentencePatterns: [
      {
        pattern: "50 Key Sentences with There is/are/was/were",
        hindiPattern: "50 महत्वपूर्ण sentences — There is/are/was/were के साथ",
        examples: [
          { english: "There is a direct flight from Delhi to New York.", hindi: "Delhi से New York के लिए सीधी flight है।" },
          { english: "There are plenty of options to choose from.", hindi: "Choose करने के लिए बहुत options हैं।" },
          { english: "There is no shortcut to success.", hindi: "सफलता का कोई shortcut नहीं है।" },
          { english: "There are always two sides to every story.", hindi: "हर कहानी के हमेशा दो पहलू होते हैं।" },
          { english: "There is hope as long as there is life.", hindi: "जब तक ज़िंदगी है, तब तक उम्मीद है।" },
          { english: "There was a big celebration in the neighborhood.", hindi: "मोहल्ले में बड़ा जश्न था।" },
          { english: "There were no winners in that argument.", hindi: "उस बहस में कोई जीता नहीं।" },
          { english: "There is something I need to tell you.", hindi: "कुछ है जो मुझे तुम्हें बताना है।" },
          { english: "There are no words to express my gratitude.", hindi: "मेरी कृतज्ञता व्यक्त करने के लिए कोई शब्द नहीं हैं।" },
          { english: "There is a better way to handle this situation.", hindi: "इस situation को handle करने का एक बेहतर तरीका है।" },
        ],
      },
    ],
    summary: [
      "There is/are is used not just for physical things but also abstract concepts",
      "'There is hope', 'There is a way', 'There are no words' — all natural English",
      "Practice using There is/are in descriptions of places, situations, and feelings",
    ],
  },

  "d9-t3-s2": {           // Phrasal Verbs — There
    sentencePatterns: [
      {
        pattern: "Common Expressions and Phrases with There",
        hindiPattern: "There के साथ common expressions और phrases",
        examples: [
          { english: "There's no place like home.", hindi: "घर जैसी कोई जगह नहीं होती।" },
          { english: "There's no time like the present.", hindi: "अभी से बेहतर कोई समय नहीं।" },
          { english: "There must be a mistake somewhere.", hindi: "कहीं न कहीं कोई गलती ज़रूर है।" },
          { english: "There seems to be a misunderstanding.", hindi: "लगता है कोई misunderstanding हो गई है।" },
          { english: "There's no need to worry about this.", hindi: "इसके बारे में चिंता करने की कोई ज़रूरत नहीं।" },
          { english: "There happens to be a vacancy in our team.", hindi: "हमारी team में एक vacancy है।" },
          { english: "Is there anything I can do to help?", hindi: "क्या कुछ है जो मैं मदद के लिए कर सकता हूँ?" },
          { english: "There's no point arguing about this now.", hindi: "अभी इस पर बहस करने का कोई फायदा नहीं।" },
        ],
      },
    ],
    summary: [
      "Many fixed expressions use 'there': 'there's no need', 'there must be', 'there seems to be'",
      "These phrases are very natural in spoken English — memorize them as chunks",
      "'There's no + noun' = a very useful pattern for expressing that something doesn't exist",
    ],
  },

  "d9-t3-s3": {           // Story & Dialogue — There
    story: {
      title: "The Ghost Town",
      paragraphs: [
        "Vikram was a travel journalist. He visited an old village in Rajasthan that people said was abandoned. When he arrived, there was complete silence.",
        "There was an old temple at the center. There were carvings on the walls that told stories. There were no people anywhere.",
        "Vikram explored the village. There was a well that had dried up. There were old houses with broken doors. There was a school with no students.",
        "He found an old man at the edge of the village. 'What happened here?' Vikram asked. The man said, 'There used to be 500 families here. There was a drought for three years. There were no crops, no water. So people left.'",
        "'Is there anyone left who remembers?' Vikram asked. The man nodded: 'There are a few of us. There is still hope. There are plans to restore the water supply.'",
        "Vikram wrote his article: 'There was a village that suffered. There are people who remember. There is hope yet.'",
      ],
      moral: "Where there is life, there is hope. Where there are memories, there is history. Where there are people who care, there is a future.",
      keyWords: [
        { word: "there was silence", meaning: "सन्नाटा था — silence existed in that place" },
        { word: "there were no people", meaning: "कोई लोग नहीं थे — no people existed" },
        { word: "there used to be", meaning: "पहले [कुछ] था — something existed in the past (habitual past)" },
        { word: "there is hope", meaning: "उम्मीद है — hope exists (abstract existence)" },
      ],
    },

    dialogue: {
      title: "Apartment Hunting",
      setting: "Shefali is looking for an apartment. The real estate agent is showing her options.",
      lines: [
        { speaker: "Agent", text: "This is the apartment. As you can see, there is a spacious living room.", hindi: "यह apartment है। जैसा आप देख सकते हैं, यहाँ एक spacious living room है।" },
        { speaker: "Shefali", text: "Is there a balcony? I really want one.", hindi: "क्या कोई balcony है? मुझे सच में चाहिए।" },
        { speaker: "Agent", text: "Yes! There is a large balcony with a garden view. There are two bedrooms and two bathrooms.", hindi: "हाँ! Garden view के साथ एक बड़ी balcony है। दो bedrooms और दो bathrooms हैं।" },
        { speaker: "Shefali", text: "Are there any grocery stores nearby? And is there a metro station close?", hindi: "क्या पास में कोई grocery stores हैं? और क्या पास में metro station है?" },
        { speaker: "Agent", text: "There are three supermarkets within walking distance. There is a metro station just 500 meters away.", hindi: "पैदल दूरी पर तीन supermarkets हैं। 500 मीटर दूर metro station है।" },
        { speaker: "Shefali", text: "Were there any problems with the previous tenant?", hindi: "पिछले tenant के साथ कोई problem थी?" },
        { speaker: "Agent", text: "No, there were no complaints from the society. There was a minor plumbing issue but it has been fixed.", hindi: "नहीं, society की तरफ से कोई शिकायत नहीं थी। एक छोटी plumbing issue थी लेकिन ठीक हो गई।" },
        { speaker: "Shefali", text: "Is there any chance of negotiation on the rent?", hindi: "क्या rent पर negotiate होने की कोई possibility है?" },
        { speaker: "Agent", text: "There is always some flexibility. Let me talk to the owner and see.", hindi: "हमेशा थोड़ी flexibility होती है। मैं owner से बात करके देखता हूँ।" },
      ],
      notes: [
        "Is there...? / Are there...? = standard questions about availability and existence",
        "'Were there any problems?' = past question about history",
        "There is always some flexibility = existence of possibility (abstract)",
        "Very practical dialogue for apartment hunting, shopping, travel — use this pattern!",
      ],
    },

    summary: [
      "There is/are/was/were = existence, presence, availability",
      "Singular: IS/WAS | Plural: ARE/WERE",
      "Negative: no / not any | Question: Is there? / Are there? / Was there? / Were there?",
      "Master this pattern and you can describe any situation, place, or scenario in English!",
    ],
  },

  "d9-t4-s1": {           // Practice Questions — There
    sentencePatterns: [
      {
        pattern: "Translate these Hindi sentences to English using There is/are/was/were",
        hindiPattern: "Hindi से English translate करो",
        examples: [
          { english: "There is a traffic signal at the end of this road.", hindi: "इस सड़क के अंत में एक traffic signal है।" },
          { english: "There are no parking spaces available right now.", hindi: "अभी कोई parking space available नहीं है।" },
          { english: "There is a power cut every day in summer.", hindi: "गर्मियों में हर दिन बिजली जाती है।" },
          { english: "There are too many notifications on my phone.", hindi: "मेरे phone पर बहुत ज़्यादा notifications हैं।" },
          { english: "Was there anyone in the office when you arrived?", hindi: "जब तुम पहुँचे, क्या office में कोई था?" },
          { english: "Were there any updates from the head office?", hindi: "क्या head office से कोई updates थे?" },
          { english: "There is nothing to worry about.", hindi: "चिंता करने की कोई बात नहीं।" },
          { english: "There are many ways to solve this problem.", hindi: "इस problem को solve करने के कई तरीके हैं।" },
          { english: "There was a power failure during the presentation.", hindi: "Presentation के दौरान बिजली चली गई थी।" },
          { english: "There were at least 200 people at the event.", hindi: "Event में कम से कम 200 लोग थे।" },
        ],
      },
    ],
    summary: [
      "Practice recognizing singular vs plural to choose is/are/was/were correctly",
      "Practice positive, negative, and question forms equally",
      "Aim for 80%+ accuracy before moving to Day 11",
    ],
  },

  "d9-t4-s2": {           // Speaking Practice — There
    speakingTips: [
      "Say these aloud 3 times each: 'There IS a cat.' / 'There ARE cats.' — feel the difference!",
      "Describe your room right now using 'There is/are': 'There is a bed. There are books. There is a fan.'",
      "Practice telling a story using 'there was/were': 'When I was young, there was a river near our home...'",
      "In meetings: 'There is one more thing I want to add.' / 'There are a few points to discuss.'",
      "Record a 1-minute audio describing your street using 'There is/are'",
    ],
    summary: [
      "Speaking 'There is/are' fluently requires daily practice",
      "Describe places, rooms, situations around you every day",
      "This pattern is one of the TOP 5 most common English structures — master it!",
    ],
  },

  "d9-t4-s3": {           // Final Assessment — There
    rules: [
      { rule: "Singular + Present = There IS", explanation: "One item/person → IS", example: "There is a book. There is a student." },
      { rule: "Plural + Present = There ARE", explanation: "Many items/people → ARE", example: "There are books. There are students." },
      { rule: "Singular + Past = There WAS", explanation: "One item/person in the past → WAS", example: "There was a shop. There was a student." },
      { rule: "Plural + Past = There WERE", explanation: "Many items/people in the past → WERE", example: "There were shops. There were students." },
    ],
    summary: [
      "Day 9 COMPLETE — You have mastered There is/are/was/were!",
      "Is (singular) / Are (plural) — always match to the noun AFTER 'there'",
      "Question: Is there? / Are there? | Negative: There is NO / There aren't ANY",
      "Use in daily descriptions of places, situations, and existence of things",
    ],
  },

  // ─── DAY 10: REVISION + PRACTICE ───────────────────────────
  "d10-t1-s1": D10_T1_S1,  // Key Concepts Review
  "d10-t1-s2": D10_T1_S2,  // Common Mistakes to Avoid

  "d10-t1-s3": {            // Quick Reference Cheat Sheet
    rules: [
      { rule: "Imperative (Day 3)", explanation: "Command/Request/Instruction — base verb, no subject. Don't + verb for negative.", example: "Go! / Please come. / Don't run. / Be careful." },
      { rule: "Be Verb (Day 4)", explanation: "I=AM, He/She/It=IS, You/We/They=ARE. Past: I/He/She/It=WAS, You/We/They=WERE.", example: "I am happy. She is smart. We are ready. He was late." },
      { rule: "Demonstratives (Day 5)", explanation: "Near: THIS (sing.) / THESE (pl.). Far: THAT (sing.) / THOSE (pl.).", example: "This book. These books. That man. Those men." },
      { rule: "Has/Have (Day 6)", explanation: "I/You/We/They=HAVE, He/She/It=HAS. Past of both=HAD.", example: "I have. She has. They had." },
      { rule: "Had (Day 7)", explanation: "Past of Have. Same for ALL subjects. Past Perfect with: had + 3rd form.", example: "She had a car. He had already left." },
      { rule: "Will Have (Day 8)", explanation: "Future Perfect. Subject + will have + 3rd form. Use with 'By [time]'.", example: "By Friday, I will have submitted." },
      { rule: "There is/are (Day 9)", explanation: "There IS (singular) / There ARE (plural). There WAS/WERE (past).", example: "There is a book. There are books. There was a problem." },
    ],
    summary: [
      "CHEAT SHEET: Print this or write it in your notebook!",
      "Review this sheet every morning for the next 2 weeks",
      "Test yourself: cover the examples and try to write your own",
      "Focus extra time on your weakest area from Days 1-9",
    ],
  },

  "d10-t2-s1": D10_T2_S1,  // Speaking Drills

  "d10-t2-s2": {            // Real Conversation Practice
    dialogue: {
      title: "A Complete Revision Conversation — Days 1-9 Grammar",
      setting: "Two friends Anita and Mohan meet at a café and have a conversation using all Day 1-9 grammar structures.",
      lines: [
        { speaker: "Anita", text: "Hi Mohan! This café is so nice! There are so many good options on the menu.", hindi: "Hi Mohan! यह café बहुत अच्छा है! Menu पर बहुत अच्छे options हैं।" },
        { speaker: "Mohan", text: "I know! I am so happy we came here. Let's order quickly — I am really hungry.", hindi: "मुझे पता है! मैं बहुत खुश हूँ कि हम यहाँ आए। जल्दी order करते हैं — मुझे सच में भूख लगी है।" },
        { speaker: "Anita", text: "Please don't order too much — we had a big lunch! Remember?", hindi: "Please बहुत ज़्यादा order मत करो — हमने बड़ा lunch खाया था! याद है?" },
        { speaker: "Mohan", text: "Yes, but that was three hours ago! I am hungry again. Does this place have sandwiches?", hindi: "हाँ, लेकिन वह तीन घंटे पहले था! मुझे फिर भूख लगी है। क्या इस जगह sandwiches हैं?" },
        { speaker: "Anita", text: "There are sandwiches AND pasta. I want to try the pasta. What about you?", hindi: "Sandwiches भी हैं और pasta भी। मैं pasta try करना चाहती हूँ। तुम्हारे बारे में?" },
        { speaker: "Mohan", text: "I wanted to try their famous burger. By the time we finish, it will have been a perfect afternoon!", hindi: "मैं उनका famous burger try करना चाहता था। जब तक हम खत्म करेंगे, यह एक perfect दोपहर बन चुकी होगी!" },
        { speaker: "Anita", text: "That was a Future Perfect sentence! You are getting better at English! By Day 75, you will have mastered everything!", hindi: "यह Future Perfect sentence था! तुम English में बेहतर हो रहे हो! Day 75 तक तुम सब कुछ master कर चुके होंगे!" },
        { speaker: "Mohan", text: "Let me practice more then! There is no better way to learn than using it in real life.", hindi: "फिर मुझे और practice करने दो! इसे असल ज़िंदगी में use करने से बेहतर कोई तरीका नहीं।" },
      ],
      notes: [
        "This conversation uses: There is/are, Be verb (am/are/is/was/were), Want, Wanted, Will Have, Let, Please/Don't (Imperative), Has",
        "Natural conversation = the best grammar practice!",
        "Try to have a similar conversation with a friend — use all Day 1-9 grammar!",
      ],
    },
    summary: [
      "Real conversations combine ALL grammar rules naturally",
      "Don't think about grammar rules while speaking — feel them!",
      "The goal: automatic, fluent use of all Days 1-9 structures",
    ],
  },

  "d10-t2-s3": {            // Pronunciation Refinement
    speakingTips: [
      "Key pronunciation points for Days 1-9 topics:",
      "1. 'There is' = sounds like 'there-iz' (not 'there-ees')",
      "2. 'Will have' = in fast speech = 'will-uv' or 'wull-uv'",
      "3. 'Let's' = must sound like one word: 'lets' (not 'let us')",
      "4. 'Wanted' = 'WAWN-tid' (not 'want-ED' with heavy stress on last syllable)",
      "5. 'Are there' = 'ar-ther' (not 'are-there' with big pause)",
      "6. 'Won't have' = 'wohnt-uv' (sounds like 'wontav' in fast speech)",
      "7. Practice linking sounds: 'There is' → 'Thaire-iz' | 'Let's go' → 'Letsg-oh'",
    ],
    summary: [
      "Pronunciation connects grammar rules to real spoken English",
      "Focus on natural rhythm — English is stress-timed, not syllable-timed",
      "Shadow native speakers: find English YouTube videos and repeat exactly",
    ],
  },

  "d10-t3-s1": {            // Grammar Test
    sentencePatterns: [
      {
        pattern: "50-Question Grammar Test — Days 1-9",
        hindiPattern: "Days 1-9 का 50-question grammar test",
        examples: [
          { english: "Q1: ___ you happy? (Fill: Am/Is/Are) → Answer: Are", hindi: "Q1: क्या ___ तुम खुश हो? → Are (You → ARE)" },
          { english: "Q2: She ___ a doctor. → Answer: is", hindi: "Q2: वह ___ doctor है। → is (She → IS)" },
          { english: "Q3: There ___ three students. → Answer: are", hindi: "Q3: तीन students ___। → are (3 students = plural = ARE)" },
          { english: "Q4: By Monday, I ___ finished. → Answer: will have", hindi: "Q4: सोमवार तक मैं ___ खत्म।→ will have" },
          { english: "Q5: ___ me go, please. → Answer: Let", hindi: "Q5: ___ मुझे जाने दो। → Let" },
          { english: "Q6: ___ go to the market together! → Answer: Let's", hindi: "Q6: ___ बाज़ार चलते हैं! → Let's" },
          { english: "Q7: I ___ to be a pilot when I was young. → Answer: wanted", hindi: "Q7: जब मैं छोटा था, मैं pilot ___ चाहता था। → wanted" },
          { english: "Q8: She ___ three cars. → Answer: has", hindi: "Q8: उसके पास तीन गाड़ियाँ ___। → has (She → HAS)" },
          { english: "Q9: ___ there any water? → Answer: Is", hindi: "Q9: क्या ___ पानी है? → Is (water = uncountable = singular)" },
          { english: "Q10: Don't ___ him go. → Answer: let", hindi: "Q10: उसे जाने मत ___। → let" },
        ],
      },
    ],
    summary: [
      "Test yourself without looking at notes!",
      "Score 40+/50 = Excellent | 30-39 = Good | Below 30 = Need more review",
      "For any wrong answer, go back to that day's lesson and review",
    ],
  },

  "d10-t3-s2": {            // Vocabulary Test
    sentencePatterns: [
      {
        pattern: "Vocabulary Test — Key Words from Days 1-9",
        hindiPattern: "Days 1-9 के key words का test",
        examples: [
          { english: "Imperative = a sentence that gives a command or request", hindi: "Imperative = आदेश या अनुरोध देने वाला sentence" },
          { english: "Subject = the person or thing performing an action", hindi: "Subject = कार्य करने वाला व्यक्ति या चीज़" },
          { english: "Base verb = the simplest form of a verb (go, eat, run)", hindi: "Base verb = verb का सबसे सरल रूप (go, eat, run)" },
          { english: "Past participle = 3rd form of a verb (gone, eaten, run)", hindi: "Past participle = verb की 3rd form (gone, eaten, run)" },
          { english: "Singular = one (book, student, problem)", hindi: "Singular = एक (किताब, student, problem)" },
          { english: "Plural = more than one (books, students, problems)", hindi: "Plural = एक से ज़्यादा (किताबें, students, problems)" },
          { english: "Future Perfect = completed before a specific future time", hindi: "Future Perfect = भविष्य में किसी समय से पहले पूरा होगा" },
          { english: "Contraction = short form ('s, 're, won't, let's)", hindi: "Contraction = छोटा form ('s, 're, won't, let's)" },
        ],
      },
    ],
    summary: [
      "Build your grammar vocabulary alongside sentence practice",
      "Knowing grammar terms helps you understand explanations faster",
      "These words will appear in every English textbook and course",
    ],
  },

  "d10-t3-s3": {            // Speaking Assessment
    speakingTips: [
      "SPEAKING ASSESSMENT — Record yourself doing these 5 tasks:",
      "1. Introduce yourself using Be Verb: 'I am... I am from... I am a...'",
      "2. Describe your room using There is/are: 'In my room, there is...'",
      "3. Tell about a childhood dream using Wanted: 'When I was young, I wanted to...'",
      "4. Make 3 suggestions using Let's: 'Let's...', 'Let's not...', 'Let's..., shall we?'",
      "5. Make a professional commitment using Will Have: 'By [date], I will have...'",
      "Listen to your recording and note: Did you use the correct grammar? Was it fluent?",
      "Share your recording with a friend or teacher for feedback!",
    ],
    summary: [
      "Speaking assessment = the real test of grammar mastery",
      "Record → Listen → Note errors → Practice again",
      "Day 10 complete! Take a moment to appreciate how much you've learned!",
      "Day 11 starts a new chapter: Modal and Auxiliary Verbs — let's go!",
    ],
  },

  // ─── DAY 11: USE OF WANT ────────────────────────────────────
  "d11-t1-s1": D11_T1_S1,  // Introduction to WANT

  "d11-t1-s2": {            // Structure & Formula of WANT
    conceptExplanation: `WANT — Complete Structure Chart\n\nPresent Tense:\n+: Subject + want/wants + (to + verb / noun)\n-: Subject + don't/doesn't want + (to + verb / noun)\n?: Do/Does + subject + want + (to + verb / noun)?\n\nSubject matching:\n• I/You/We/They → WANT, DON'T WANT, DO...WANT?\n• He/She/It → WANTS, DOESN'T WANT, DOES...WANT?\n\nWant + Someone + to + verb:\n+: She wants me to come.\n-: She doesn't want me to come.\n?: Does she want me to come?`,

    sentencePatterns: [
      {
        pattern: "Complete Pattern: Want in All Forms",
        hindiPattern: "WANT के सभी forms",
        examples: [
          { english: "I want to learn a new skill this year.", hindi: "मैं इस साल एक नया skill सीखना चाहता हूँ।" },
          { english: "She wants to change her career path.", hindi: "वह अपना career path बदलना चाहती है।" },
          { english: "They want to hire more experienced staff.", hindi: "वे अधिक experienced staff hire करना चाहते हैं।" },
          { english: "I don't want to be late for the flight.", hindi: "मैं flight के लिए देर नहीं करना चाहता।" },
          { english: "He doesn't want to attend the dinner.", hindi: "वह dinner में attend नहीं करना चाहता।" },
          { english: "Do you want to try the new dessert?", hindi: "क्या तुम नया dessert try करना चाहते हो?" },
          { english: "Does she want any help with the assignment?", hindi: "क्या उसे assignment में कोई मदद चाहिए?" },
          { english: "My parents want me to pursue engineering.", hindi: "मेरे माता-पिता चाहते हैं कि मैं engineering करूँ।" },
          { english: "The teacher doesn't want the students to cheat.", hindi: "Teacher नहीं चाहती कि students cheat करें।" },
          { english: "What do you want to do after graduation?", hindi: "Graduation के बाद तुम क्या करना चाहते हो?" },
        ],
      },
    ],
    summary: [
      "He/She/It = WANTS | I/You/We/They = WANT",
      "Negative: doesn't want (he/she) / don't want (I/you/we/they)",
      "Question: Does she want? / Do you want?",
      "Three patterns: want + noun | want + to + verb | want + someone + to + verb",
    ],
  },

  "d11-t1-s3": {            // Positive, Negative & Questions — Want
    sentencePatterns: [
      {
        pattern: "Want — Positive, Negative, and Question Practice",
        hindiPattern: "Want के positive, negative, और question forms",
        examples: [
          { english: "✅ I want to visit the Taj Mahal someday.", hindi: "मैं किसी दिन Taj Mahal देखना चाहता हूँ।" },
          { english: "❌ I don't want to wait any longer.", hindi: "मैं और इंतज़ार नहीं करना चाहता।" },
          { english: "❓ Do you want to come with me?", hindi: "क्या तुम मेरे साथ आना चाहते हो?" },
          { english: "✅ She wants a promotion and a pay raise.", hindi: "वह promotion और pay raise चाहती है।" },
          { english: "❌ She doesn't want to work overtime anymore.", hindi: "वह अब overtime काम नहीं करना चाहती।" },
          { english: "❓ Does she want any additional responsibilities?", hindi: "क्या वह कोई अतिरिक्त ज़िम्मेदारियाँ चाहती है?" },
          { english: "✅ They want to expand their business internationally.", hindi: "वे अपना business internationally expand करना चाहते हैं।" },
          { english: "❌ They don't want to rush the decision.", hindi: "वे decision जल्दबाज़ी में नहीं लेना चाहते।" },
          { english: "❓ Do they want to schedule a follow-up meeting?", hindi: "क्या वे follow-up meeting schedule करना चाहते हैं?" },
        ],
      },
    ],
    summary: [
      "Always match the auxiliary (do/does/don't/doesn't) to the subject",
      "After does/doesn't, the verb is WANT (base form), not WANTS",
      "Questions with want are excellent for conversations: 'What do you want to...?'",
    ],
  },

  "d11-t1-s4": {            // Want with Different Subjects
    sentencePatterns: [
      {
        pattern: "Want with All Subjects",
        hindiPattern: "सभी subjects के साथ WANT",
        examples: [
          { english: "I want to improve my English before the interview.", hindi: "Interview से पहले मैं अपनी English सुधारना चाहता हूँ।" },
          { english: "You want to make a good impression on the first day.", hindi: "तुम पहले दिन अच्छा impression बनाना चाहते हो।" },
          { english: "He wants to take a break and recharge.", hindi: "वह break लेकर recharge करना चाहता है।" },
          { english: "She wants to pursue her passion for teaching.", hindi: "वह teaching के प्रति अपने जुनून को pursue करना चाहती है।" },
          { english: "We want to create a positive work culture.", hindi: "हम एक positive work culture बनाना चाहते हैं।" },
          { english: "They want to finalize the deal by end of week.", hindi: "वे हफ्ते के अंत तक deal finalize करना चाहते हैं।" },
          { english: "It wants to reboot — please save your work.", hindi: "(Computer) यह restart होना चाहता है — please अपना काम save करो।" },
        ],
      },
    ],
    summary: [
      "I want / You want / He wants / She wants / It wants / We want / They want",
      "Only He/She/It adds 's' to WANT — all others use WANT unchanged",
      "In questions with does: Does she want? (want, not wants)",
    ],
  },

  "d11-t2-s1": D11_T2_S1,  // Daily Life Sentences — Want
  "d11-t2-s2": D11_T2_S2,  // Professional Usage — Want

  "d11-t2-s3": {            // Common Mistakes — Want
    commonMistakes: [
      { wrong: "I want go to the market.", correct: "I want TO go to the market.", explanation: "After 'want' when followed by a verb, always use 'to + verb' (infinitive). Never skip 'to'." },
      { wrong: "He want to eat.", correct: "He wants to eat.", explanation: "He = 3rd person singular → WANTS (add 's'). Very common error!" },
      { wrong: "Does she wants coffee?", correct: "Does she want coffee?", explanation: "'Does' already marks 3rd person — so 'want' stays base form. Never 'Does she WANTS'." },
      { wrong: "I want that she comes.", correct: "I want her to come.", explanation: "Want + someone + to + verb. NOT 'want that + clause'. Indian learners often translate Hindi directly." },
      { wrong: "I am wanting to go.", correct: "I want to go.", explanation: "'Want' is a stative verb — it doesn't normally use -ing. Never 'I am wanting'. Just 'I want'." },
    ],
    summary: [
      "5 key mistakes to avoid with WANT",
      "Always: want TO + verb (not 'want + verb' directly)",
      "Never: am wanting (want is stative — no -ing in this sense)",
      "He WANTS / Does she WANT? (not 'Does she WANTS')",
    ],
  },

  "d11-t3-s1": {            // Key Vocabulary — Want
    sentencePatterns: [
      {
        pattern: "50 Rich Sentences Using Want/Wants",
        hindiPattern: "50 sentences जिनमें Want/Wants है",
        examples: [
          { english: "I want to be the best version of myself.", hindi: "मैं अपना best version बनना चाहता हूँ।" },
          { english: "She wants to make a difference in the world.", hindi: "वह दुनिया में बदलाव लाना चाहती है।" },
          { english: "Every student wants to succeed in life.", hindi: "हर student ज़िंदगी में सफल होना चाहता है।" },
          { english: "He wants to buy his mother a house.", hindi: "वह अपनी माँ के लिए घर खरीदना चाहता है।" },
          { english: "We want to hear your feedback on this idea.", hindi: "हम इस idea पर तुम्हारा feedback सुनना चाहते हैं।" },
          { english: "She wants her team to feel valued and heard.", hindi: "वह चाहती है कि उसकी team valued और heard feel करे।" },
          { english: "I don't want to miss this golden opportunity.", hindi: "मैं यह सुनहरा अवसर miss नहीं करना चाहता।" },
          { english: "Do you want to try something completely new today?", hindi: "क्या तुम आज कुछ पूरी तरह नया try करना चाहते हो?" },
          { english: "The company wants to maintain its reputation.", hindi: "Company अपनी reputation बनाए रखना चाहती है।" },
          { english: "They want to invest in their employees' growth.", hindi: "वे अपने employees की growth में invest करना चाहते हैं।" },
        ],
      },
    ],
    summary: [
      "WANT is used for desires at every scale — personal, professional, global",
      "Want + to + verb = expressing personal or organizational goals",
      "Mastering WANT gives you the ability to express any desire in English",
    ],
  },

  "d11-t3-s2": {            // Phrasal Verbs — Want
    sentencePatterns: [
      {
        pattern: "Want with Common Expressions and Phrasal Verbs",
        hindiPattern: "Want के साथ common expressions",
        examples: [
          { english: "I want to give up, but I won't.", hindi: "मैं हार मानना चाहता हूँ, लेकिन नहीं मानूँगा।" },
          { english: "She wants to move on from the past.", hindi: "वह past से आगे बढ़ना चाहती है।" },
          { english: "He wants to make up for lost time.", hindi: "वह खोए हुए समय की भरपाई करना चाहता है।" },
          { english: "They want to catch up on the latest developments.", hindi: "वे latest developments के साथ catch up करना चाहते हैं।" },
          { english: "Do you want to take a crack at this problem?", hindi: "क्या तुम इस problem पर try करना चाहते हो?" },
          { english: "I want to put my best foot forward in this interview.", hindi: "मैं इस interview में अपना best देना चाहता हूँ।" },
        ],
      },
    ],
    summary: [
      "Want pairs naturally with phrasal verbs and idiomatic expressions",
      "Practice combining want + phrasal verbs for richer, more natural English",
    ],
  },

  "d11-t3-s3": {            // Story & Dialogue — Want
    // Uses D11_T1_S1's built-in story and dialogue (already rich)
    summary: [
      "WANT stories show desires driving action — very human and relatable",
      "Practice storytelling using want: 'Once upon a time, I wanted to...'",
      "Use want in conversations to show interest: 'What do you want to do?'",
    ],
  },

  "d11-t4-s1": {            // Practice Questions — Want
    sentencePatterns: [
      {
        pattern: "Practice: Fill in the blank and Translate",
        hindiPattern: "Practice: blank fill करो और translate करो",
        examples: [
          { english: "I ___ (want/wants) to study abroad. → want", hindi: "मैं विदेश में पढ़ना ___ हूँ। → चाहता" },
          { english: "She ___ (want/wants) a new job. → wants", hindi: "वह नई job ___ है। → चाहती" },
          { english: "Do you ___ (want/wants) to come? → want", hindi: "क्या तुम आना ___ हो? → चाहते" },
          { english: "He ___ (don't/doesn't) want to argue. → doesn't", hindi: "वह बहस नहीं ___ चाहता। → करना" },
          { english: "They ___ (want/wants) to move to Bangalore. → want", hindi: "वे Bangalore ___ जाना चाहते हैं। → में" },
          { english: "My boss ___ (want/wants) me to lead the project. → wants", hindi: "मेरे boss ___ चाहते हैं कि मैं project lead करूँ। → चाहते" },
          { english: "___ (Do/Does) she want to resign? → Does", hindi: "क्या वह resign ___ चाहती है? → करना" },
          { english: "I ___ (want/wanted) to call you, but I forgot. → wanted", hindi: "मैं तुम्हें call ___ चाहता था, लेकिन भूल गया। → करना" },
          { english: "We ___ (want/wants) to launch a new app. → want", hindi: "हम एक नया app launch ___ चाहते हैं। → करना" },
          { english: "Does he ___ (want/wants) any help? → want", hindi: "क्या उसे कोई मदद ___ है? → चाहिए" },
        ],
      },
    ],
    summary: [
      "Practice until you choose want/wants automatically",
      "Remember the -s rule: He/She/It WANTS — everything else WANT",
      "After Do/Does: always base form (want, not wants)",
    ],
  },

  "d11-t4-s2": {            // Speaking Practice — Want
    speakingTips: [
      "Complete these sentences aloud, then repeat 3 times:",
      "1. I want to _______ by the end of this year.",
      "2. My best friend wants to _______.",
      "3. I don't want to _______ anymore.",
      "4. Does your family want you to _______?",
      "5. What do YOU most want in life right now?",
      "Now make REAL sentences using want that are true for your life!",
      "Share your sentences with a study partner for feedback",
    ],
    summary: [
      "Speaking WANT sentences about YOUR real life makes grammar personal and memorable",
      "Personal connection to grammar = permanent memory",
    ],
  },

  "d11-t4-s3": {            // Final Assessment — Want
    rules: [
      { rule: "WANT + noun (desiring a thing)", explanation: "I want coffee. She wants a promotion.", example: "I want peace and quiet." },
      { rule: "WANT + TO + verb (desiring to do)", explanation: "I want to go. She wants to eat.", example: "He wants to become a doctor." },
      { rule: "WANT + someone + TO + verb (desiring others to do)", explanation: "I want you to listen.", example: "She wants him to apologize." },
      { rule: "He/She/It: WANTS | Others: WANT", explanation: "3rd person singular adds 's'", example: "She wants. They want." },
    ],
    summary: [
      "Day 11 COMPLETE — You have mastered WANT!",
      "3 patterns: want + noun | want + to + verb | want + someone + to + verb",
      "He/She/It = WANTS (with 's') | I/You/We/They = WANT",
      "Practice: Express 5 genuine desires using want every day!",
    ],
  },

  // ─── DAY 12: USE OF WANTED ──────────────────────────────────
  "d12-t1-s1": D12_T1_S1,  // Introduction to WANTED

  "d12-t1-s2": {            // Structure & Formula — Wanted
    sentencePatterns: [
      {
        pattern: "WANTED — Complete Structure in All Forms",
        hindiPattern: "WANTED के सभी forms",
        examples: [
          { english: "I wanted to be a singer when I was young.", hindi: "जब मैं छोटा था, मैं singer बनना चाहता था।" },
          { english: "She wanted to join the army but changed her mind.", hindi: "वह army join करना चाहती थी लेकिन उसने अपना मन बदल लिया।" },
          { english: "They wanted to invest in real estate years ago.", hindi: "वे कुछ साल पहले real estate में invest करना चाहते थे।" },
          { english: "I didn't want to miss the concert.", hindi: "मैं concert miss नहीं करना चाहता था।" },
          { english: "He didn't want to accept the job offer initially.", hindi: "शुरुआत में वह job offer accept नहीं करना चाहता था।" },
          { english: "Did you want anything from the cafeteria?", hindi: "क्या तुम cafeteria से कुछ चाहते थे?" },
          { english: "Did she want to speak to the manager?", hindi: "क्या वह manager से बात करना चाहती थी?" },
          { english: "What did you want to become as a child?", hindi: "बच्चे के रूप में तुम क्या बनना चाहते थे?" },
          { english: "She wanted me to read her essay before submitting it.", hindi: "वह चाहती थी कि submit करने से पहले मैं उसका essay पढ़ूँ।" },
          { english: "The team didn't want to work under that manager.", hindi: "Team उस manager के under काम नहीं करना चाहती थी।" },
        ],
      },
    ],
    summary: [
      "WANTED = same for ALL subjects (no 's' needed — past tense!)",
      "Negative: didn't want (NOT 'didn't wanted')",
      "Question: Did...want...? (not 'Did...wanted...?')",
    ],
  },

  "d12-t1-s3": {            // Positive, Negative & Questions — Wanted
    sentencePatterns: [
      {
        pattern: "Wanted — All Three Forms with Examples",
        hindiPattern: "Wanted के तीनों forms",
        examples: [
          { english: "✅ I always wanted to learn to swim.", hindi: "मैं हमेशा तैरना सीखना चाहता था।" },
          { english: "❌ I didn't want to learn to swim as a child.", hindi: "बचपन में मैं तैरना सीखना नहीं चाहता था।" },
          { english: "❓ Did you always want to learn English?", hindi: "क्या तुम हमेशा English सीखना चाहते थे?" },
          { english: "✅ She wanted to resign last month.", hindi: "पिछले महीने वह resign करना चाहती थी।" },
          { english: "❌ She didn't want to make any sudden decisions.", hindi: "वह कोई अचानक decision नहीं लेना चाहती थी।" },
          { english: "❓ Did she want to talk about the issue privately?", hindi: "क्या वह issue के बारे में privately बात करना चाहती थी?" },
        ],
      },
    ],
    summary: [
      "Wanted is regular past tense — simple and consistent",
      "Negative: 'didn't want' (did carries the past — want stays base form)",
      "Question: 'Did...want?' (not 'Did...wanted?')",
    ],
  },

  "d12-t1-s4": {            // Wanted with Different Subjects
    sentencePatterns: [
      {
        pattern: "Wanted — Same for ALL Subjects",
        hindiPattern: "सभी subjects के साथ WANTED — same!",
        examples: [
          { english: "I wanted to save more money last year.", hindi: "मैं पिछले साल और पैसे बचाना चाहता था।" },
          { english: "You wanted to take the day off, didn't you?", hindi: "तुम day off लेना चाहते थे, है ना?" },
          { english: "He wanted to apologize but was too proud.", hindi: "वह माफी माँगना चाहता था लेकिन बहुत घमंडी था।" },
          { english: "She wanted to tell you the truth.", hindi: "वह तुम्हें सच बताना चाहती थी।" },
          { english: "We wanted to surprise you but you found out early!", hindi: "हम तुम्हें surprise करना चाहते थे लेकिन तुम्हें जल्दी पता चल गया!" },
          { english: "They wanted to complete the task before leaving.", hindi: "वे जाने से पहले काम पूरा करना चाहते थे।" },
        ],
      },
    ],
    summary: [
      "WANTED = same for all: I wanted, you wanted, he wanted, she wanted, we wanted, they wanted",
      "No 's' needed! Past tense is always uniform for 'want'",
      "This simplicity makes WANTED easier than present tense WANT",
    ],
  },

  "d12-t2-s1": D12_T2_S1,  // Real Life Sentences — Wanted

  "d12-t2-s2": {            // Professional Usage — Wanted
    sentencePatterns: [
      {
        pattern: "WANTED in Professional Context",
        hindiPattern: "Professional माहौल में WANTED",
        examples: [
          { english: "I always wanted to work at a company like this.", hindi: "मैं हमेशा ऐसी company में काम करना चाहता था।" },
          { english: "She wanted to raise the issue in the last meeting but didn't get the chance.", hindi: "वह पिछली meeting में issue उठाना चाहती थी लेकिन मौका नहीं मिला।" },
          { english: "We wanted to launch the product in Q1 but faced delays.", hindi: "हम Q1 में product launch करना चाहते थे लेकिन delays हुई।" },
          { english: "The client wanted a detailed breakdown of the costs.", hindi: "Client costs का detailed breakdown चाहता था।" },
          { english: "I didn't want to make that decision without consulting you.", hindi: "मैं तुमसे पूछे बिना वह decision नहीं लेना चाहता था।" },
          { english: "Did the team want more time to finalize the proposal?", hindi: "क्या team proposal finalize करने के लिए और समय चाहती थी?" },
          { english: "He wanted to negotiate a better salary but felt unsure.", hindi: "वह बेहतर salary negotiate करना चाहता था लेकिन confident नहीं था।" },
          { english: "They wanted the project delivered a week earlier.", hindi: "वे project एक हफ्ते पहले deliver चाहते थे।" },
        ],
      },
    ],
    summary: [
      "WANTED explains past intentions and missed opportunities professionally",
      "Very useful in project discussions: 'We wanted to X but Y happened'",
      "In interviews: 'I always wanted to work here because...'",
    ],
  },

  "d12-t2-s3": {            // Common Mistakes — Wanted
    commonMistakes: [
      { wrong: "I was wanted to eat.", correct: "I wanted to eat.", explanation: "Never add 'was' before 'wanted' for this meaning. Just 'wanted' = past desire. ('Was wanted' means wanted by police!)" },
      { wrong: "She didn't wanted to go.", correct: "She didn't want to go.", explanation: "'Didn't' already marks past — so 'want' stays base form. Never 'didn't WANTED'." },
      { wrong: "Did you wanted to say something?", correct: "Did you want to say something?", explanation: "After 'did', always use base form. 'Did you WANT' (not WANTED)." },
      { wrong: "I wanted to went there.", correct: "I wanted to go there.", explanation: "After 'to', always base form: 'to GO', not 'to WENT'." },
      { wrong: "She wantted to leave.", correct: "She wanted to leave.", explanation: "Correct spelling: want + ed = wanted (one 't', not 'wantted')." },
    ],
    summary: [
      "WANTED common errors: didn't wanted, did...wanted, wantted, was wanted",
      "Remember: after 'did' and 'to' — always base form",
      "WANTED = want + ed (one 't', standard -ed rule)",
    ],
  },

  "d12-t3-s1": {            // Key Vocabulary — Wanted
    sentencePatterns: [
      {
        pattern: "Rich Sentences with WANTED — Different Contexts",
        hindiPattern: "WANTED के साथ rich sentences — अलग-अलग contexts",
        examples: [
          { english: "She always wanted to make her family proud.", hindi: "वह हमेशा अपने परिवार को गर्व महसूस कराना चाहती थी।" },
          { english: "I wanted to reach out earlier but was overwhelmed with work.", hindi: "मैं पहले connect करना चाहता था लेकिन काम से overwhelmed था।" },
          { english: "He wanted to prove everyone wrong and he did.", hindi: "वह सभी को गलत साबित करना चाहता था और उसने किया।" },
          { english: "We wanted to take a different route but GPS directed us here.", hindi: "हम अलग रास्ता लेना चाहते थे लेकिन GPS ने यहाँ भेजा।" },
          { english: "I wanted to tell you — you did an incredible job today.", hindi: "मैं तुम्हें बताना चाहता था — तुमने आज अविश्वसनीय काम किया।" },
          { english: "She didn't want to be the center of attention.", hindi: "वह ध्यान का केंद्र नहीं बनना चाहती थी।" },
          { english: "They wanted the celebration to be a surprise.", hindi: "वे celebration को surprise रखना चाहते थे।" },
          { english: "I didn't want to leave without saying goodbye.", hindi: "मैं बिना अलविदा कहे जाना नहीं चाहता था।" },
          { english: "He wanted to volunteer for the charity event.", hindi: "वह charity event के लिए volunteer करना चाहता था।" },
          { english: "Did you want to add anything to the presentation?", hindi: "क्या तुम presentation में कुछ और जोड़ना चाहते थे?" },
        ],
      },
    ],
    summary: [
      "WANTED adds richness to stories, explanations, and conversations",
      "Use it to show motivation, intention, and missed opportunities",
      "Pair with 'but' for natural contrast: 'I wanted X, but Y'",
    ],
  },

  "d12-t3-s2": {            // Phrasal Verbs — Wanted
    sentencePatterns: [
      {
        pattern: "Wanted + Phrasal Verbs",
        hindiPattern: "Wanted के साथ phrasal verbs",
        examples: [
          { english: "I wanted to give up, but my mentor stopped me.", hindi: "मैं हार मानना चाहता था, लेकिन मेरे mentor ने रोका।" },
          { english: "She wanted to speak up but was afraid of criticism.", hindi: "वह बोलना चाहती थी लेकिन आलोचना से डरती थी।" },
          { english: "He wanted to back out of the deal at the last minute.", hindi: "वह आखिरी वक्त पर deal से पीछे हटना चाहता था।" },
          { english: "They wanted to put off the decision until more data was available.", hindi: "वे decision तब तक टालना चाहते थे जब तक और data न आए।" },
          { english: "I wanted to reach out to you sooner — I'm sorry for the delay.", hindi: "मैं तुमसे जल्दी संपर्क करना चाहता था — देरी के लिए माफी।" },
        ],
      },
    ],
    summary: [
      "WANTED + phrasal verbs = very natural and expressive English",
      "Give up, speak up, back out, put off, reach out — common professional phrasal verbs",
    ],
  },

  "d12-t3-s3": {            // Story & Dialogue — Wanted (rich dialogue)
    dialogue: {
      title: "Job Interview: Discussing Past Goals",
      setting: "Rahul is in a job interview. The interviewer is asking about his past motivations.",
      lines: [
        { speaker: "Interviewer", text: "Tell me, Rahul — what did you want to be when you were young?", hindi: "बताइए, Rahul — जब आप छोटे थे, तो क्या बनना चाहते थे?" },
        { speaker: "Rahul", text: "I wanted to be a cricketer, actually! But I realized early that I had a stronger passion for technology.", hindi: "मैं actually cricketer बनना चाहता था! लेकिन मुझे जल्दी एहसास हुआ कि technology के प्रति मेरा जुनून ज़्यादा है।" },
        { speaker: "Interviewer", text: "Interesting! And what did you want to achieve in your previous company?", hindi: "दिलचस्प! और अपनी पिछली company में आप क्या हासिल करना चाहते थे?" },
        { speaker: "Rahul", text: "I wanted to lead a product team. I didn't want to just write code — I wanted to build something meaningful.", hindi: "मैं product team lead करना चाहता था। मैं सिर्फ code नहीं लिखना चाहता था — मैं कुछ meaningful बनाना चाहता था।" },
        { speaker: "Interviewer", text: "Did you achieve that?", hindi: "क्या आप वह हासिल कर पाए?" },
        { speaker: "Rahul", text: "Partially. I wanted to do more, but the company structure didn't allow it. That's why I wanted to move here — there are more opportunities.", hindi: "आंशिक रूप से। मैं और करना चाहता था, लेकिन company structure ने allow नहीं किया। इसीलिए मैं यहाँ आना चाहता था — यहाँ और opportunities हैं।" },
        { speaker: "Interviewer", text: "I appreciate your honesty. We wanted someone who wanted to grow, not just follow instructions.", hindi: "मैं आपकी ईमानदारी की सराहना करता हूँ। हम किसी ऐसे व्यक्ति को चाहते थे जो grow करना चाहे, सिर्फ instructions follow नहीं।" },
        { speaker: "Rahul", text: "That's exactly what I've always wanted to hear from an employer.", hindi: "यही मैं हमेशा एक employer से सुनना चाहता था।" },
      ],
      notes: [
        "WANTED is perfect for job interviews — showing past motivations and growth",
        "'I wanted to X but Y' = shows self-awareness and reflection",
        "Using WANTED shows maturity and depth in professional communication",
      ],
    },
    summary: [
      "Day 12 complete — WANTED mastered!",
      "WANTED = past desires, motivations, and missed opportunities",
      "Essential for interviews, storytelling, and professional communication",
      "Practice: Write your career story using WANTED 5 times",
    ],
  },

  "d12-t4-s1": {            // Practice Questions — Wanted
    sentencePatterns: [
      {
        pattern: "Practice: Translate to English using WANTED",
        hindiPattern: "Hindi से English में translate करो — WANTED use करके",
        examples: [
          { english: "I wanted to become an engineer.", hindi: "मैं engineer बनना चाहता था।" },
          { english: "She wanted to visit her grandparents this summer.", hindi: "वह इस गर्मियों में अपने दादा-दादी से मिलने जाना चाहती थी।" },
          { english: "He wanted to start a new business.", hindi: "वह नया business शुरू करना चाहता था।" },
          { english: "We didn't want to cancel the event.", hindi: "हम event cancel नहीं करना चाहते थे।" },
          { english: "Did she want to apply for the scholarship?", hindi: "क्या वह scholarship के लिए apply करना चाहती थी?" },
          { english: "They wanted to meet you before the conference.", hindi: "वे conference से पहले तुमसे मिलना चाहते थे।" },
          { english: "I didn't want to disappoint my family.", hindi: "मैं अपने परिवार को निराश नहीं करना चाहता था।" },
          { english: "What did you want to tell me yesterday?", hindi: "कल तुम मुझे क्या बताना चाहते थे?" },
        ],
      },
    ],
    summary: ["Practice WANTED with all subjects and forms", "Focus especially on: didn't want (NOT didn't wanted)", "Did + subject + want? (NOT Did + subject + wanted?)"],
  },

  "d12-t4-s2": {            // Speaking Practice — Wanted
    speakingTips: [
      "Complete these aloud: 'When I was a child, I wanted to _______.'",
      "Say 5 things you wanted to do last year but didn't.",
      "Practice: 'I didn't want to _______ but I had to.'",
      "Use WANTED to tell a 2-minute story about your childhood dream.",
      "Record and listen — do you use 'didn't want' correctly without adding 'ed'?",
    ],
    summary: [
      "Speaking practice = the bridge from knowing to using",
      "Personal stories with WANTED make your English more engaging",
      "WANTED + but = great storytelling formula",
    ],
  },

  "d12-t4-s3": {            // Final Assessment — Wanted
    summary: [
      "Day 12 COMPLETE — WANTED mastered!",
      "WANTED = past of WANT | Same for ALL subjects | Add -ed to WANT",
      "Negative: didn't WANT (base form after 'didn't')",
      "Question: Did + subject + WANT? (base form after 'did')",
      "Key use: past desires, motivations, missed opportunities, regrets",
    ],
  },

  // ─── DAY 13: USE OF LET ─────────────────────────────────────
  "d13-t1-s1": D13_T1_S1,  // Introduction to LET

  "d13-t1-s2": {            // Structure & Formula of LET
    conceptExplanation: `LET — Complete Structure\n\nFormula: LET + Object + Base Verb (NO 'to'!)\n\nObject pronouns after LET:\n• me (I → me)\n• him (he → him)\n• her (she → her)\n• them (they → them)\n• us (we → us)\n• it (it → it)\n\nPositive:\nLet me go. / Let him speak. / Let her decide. / Let them try.\n\nNegative:\nDon't let me forget. / Don't let him leave. / Don't let her worry.\n\nPolite forms:\nPlease let me know. / Kindly let us proceed.\n\nPast tense of LET:\n'Let' is an irregular verb — past tense is also LET (no change!)\n• I let him go yesterday. (past)\n• She let me know earlier. (past)\n• Don't let them see this. (present/future)`,

    sentencePatterns: [
      {
        pattern: "Let Structure: All Patterns Together",
        hindiPattern: "Let के सभी patterns",
        examples: [
          { english: "Let me think about this before deciding.", hindi: "Decide करने से पहले मुझे सोचने दो।" },
          { english: "Let him explain his side of the story.", hindi: "उसे अपनी बात explain करने दो।" },
          { english: "Let her take the lead on this project.", hindi: "इस project में उसे lead लेने दो।" },
          { english: "Let them practice independently.", hindi: "उन्हें independently practice करने दो।" },
          { english: "Let us know if you need any clarification.", hindi: "अगर कोई clarification चाहिए तो बताओ।" },
          { english: "Don't let him waste this opportunity.", hindi: "उसे यह opportunity बर्बाद मत करने दो।" },
          { english: "Please don't let them wait too long.", hindi: "Please उन्हें ज़्यादा देर इंतज़ार मत करने दो।" },
          { english: "Let me double-check the figures.", hindi: "मुझे figures double-check करने दो।" },
          { english: "Please let us continue with the presentation.", hindi: "Please हमें presentation जारी रखने दो।" },
          { english: "Don't let it affect your performance.", hindi: "इसे तुम्हारी performance पर असर मत करने दो।" },
        ],
      },
    ],
    summary: [
      "LET + object + base verb (NO 'to'!)",
      "Object pronouns: me, him, her, them, us, it (NOT I, he, she, they, we)",
      "Don't let = preventing someone | Let = allowing someone",
    ],
  },

  "d13-t1-s3": {            // Positive, Negative & Questions — Let
    sentencePatterns: [
      {
        pattern: "Let — Positive, Negative, and Questions",
        hindiPattern: "Let के positive, negative, और question forms",
        examples: [
          { english: "✅ Let me handle the customer complaint.", hindi: "Customer complaint मुझे handle करने दो।" },
          { english: "❌ Don't let the situation escalate.", hindi: "Situation को escalate मत होने दो।" },
          { english: "❓ Will you let me present my idea to the team?", hindi: "क्या तुम मुझे अपना idea team को present करने दोगे?" },
          { english: "✅ Let her take some time to recover.", hindi: "उसे recover करने के लिए थोड़ा समय दो।" },
          { english: "❌ Don't let him interrupt when others are speaking.", hindi: "जब दूसरे बोल रहे हों तो उसे interrupt मत करने दो।" },
          { english: "❓ Could you please let us leave a bit early today?", hindi: "क्या आप please हमें आज थोड़ा जल्दी जाने दे सकते हैं?" },
          { english: "✅ Let the new employee observe the process first.", hindi: "नए employee को पहले process observe करने दो।" },
          { english: "❌ Don't let deadlines be missed — follow up regularly.", hindi: "Deadlines miss मत होने दो — regularly follow up करो।" },
        ],
      },
    ],
    summary: [
      "Positive: Let + object + verb | Negative: Don't let + object + verb",
      "Questions with LET often use 'will you let...?' or 'could you let...?'",
      "Let in past: 'She let me know' / 'I let him go' (LET stays as LET in past!)",
    ],
  },

  "d13-t1-s4": {            // Let with Different Objects
    sentencePatterns: [
      {
        pattern: "LET with Me / Him / Her / Them / Us / It / Others",
        hindiPattern: "LET + अलग-अलग objects",
        examples: [
          { english: "Let ME try — I think I can do it.", hindi: "मुझे try करने दो — मुझे लगता है मैं कर सकता हूँ।" },
          { english: "Let HIM rest — he worked all night.", hindi: "उसे आराम करने दो — वह रात भर काम करता रहा।" },
          { english: "Let HER choose — it's her decision.", hindi: "उसे choose करने दो — यह उसका decision है।" },
          { english: "Let THEM compete fairly.", hindi: "उन्हें fairly compete करने दो।" },
          { english: "Let US review the plan together.", hindi: "हमें साथ मिलकर plan review करने दो।" },
          { english: "Let IT run its course — don't force it.", hindi: "इसे अपने आप चलने दो — force मत करो।" },
          { english: "Let everyone contribute their ideas freely.", hindi: "सभी को अपने ideas freely contribute करने दो।" },
          { english: "Let the data guide our decision.", hindi: "Data को हमारे decision को guide करने दो।" },
        ],
      },
    ],
    summary: [
      "LET works with all object pronouns and nouns",
      "The object comes immediately after LET — never skip it!",
      "Let me know / Let us know = extremely common professional phrases",
    ],
  },

  "d13-t2-s1": D13_T2_S1,  // Daily Life Sentences — Let

  "d13-t2-s2": {            // Professional Usage — Let
    sentencePatterns: [
      {
        pattern: "LET in Professional and Office Settings",
        hindiPattern: "Office और Professional माहौल में LET",
        examples: [
          { english: "Please let me know your availability for a call this week.", hindi: "Please मुझे बताएँ कि इस हफ्ते तुम्हारे पास कब time है।" },
          { english: "Let him present his proposal without interruption.", hindi: "उसे बिना interrupt किए अपना proposal present करने दो।" },
          { english: "Don't let the team lose momentum — keep encouraging them.", hindi: "Team की momentum मत जाने दो — उन्हें encourage करते रहो।" },
          { english: "Let the client know that we are working on the issue.", hindi: "Client को बताओ कि हम issue पर काम कर रहे हैं।" },
          { english: "Please don't let this information go beyond this room.", hindi: "Please यह information इस room से बाहर मत जाने दो।" },
          { english: "Let the survey results guide our marketing strategy.", hindi: "Survey results को हमारी marketing strategy guide करने दो।" },
          { english: "Could you please let me access the shared folder?", hindi: "क्या आप please मुझे shared folder access करने दे सकते हैं?" },
          { english: "Don't let the project scope expand without proper approval.", hindi: "बिना proper approval के project scope expand मत होने दो।" },
          { english: "Let the intern shadow you for a day to learn the process.", hindi: "Intern को एक दिन के लिए तुम्हारे साथ रहने दो ताकि process सीखे।" },
          { english: "Please let us know if there are any objections to the proposal.", hindi: "Please हमें बताएँ अगर proposal पर कोई आपत्ति हो।" },
        ],
      },
    ],
    summary: [
      "'Please let me know' = most common professional Let phrase",
      "Let someone do something = granting professional permission or delegation",
      "Don't let = professional way to prevent problems or information leaks",
    ],
  },

  "d13-t2-s3": {            // Common Mistakes — Let
    commonMistakes: [
      { wrong: "Let me to check this.", correct: "Let me check this.", explanation: "No 'to' after LET! Formula: Let + object + BASE verb (direct, no 'to')." },
      { wrong: "Let he go.", correct: "Let him go.", explanation: "After LET, use OBJECT pronouns (me, him, her, them, us) — not subject pronouns (I, he, she, they, we)." },
      { wrong: "Please let we know.", correct: "Please let us know.", explanation: "'We' is subject pronoun. After LET, use 'US' (object pronoun). 'Let us know' = 'Let we know' is WRONG." },
      { wrong: "Don't let to him speak.", correct: "Don't let him speak.", explanation: "Don't let + object + base verb — no 'to' anywhere. 'Don't let HIM speak'." },
      { wrong: "She letted me go.", correct: "She let me go.", explanation: "LET is an IRREGULAR verb — past tense is also LET. Never 'letted'. I let / She let / They let (all the same in past!)." },
    ],
    summary: [
      "Top Let mistakes: using 'to', wrong pronouns (he instead of him), adding 'ed' for past (letted is wrong)",
      "Let → past tense is also LET (irregular verb — no change!)",
      "Object pronouns after Let: me, him, her, them, us, it",
    ],
  },

  "d13-t3-s1": {            // Key Vocabulary — Let
    sentencePatterns: [
      {
        pattern: "50 Essential LET Sentences",
        hindiPattern: "LET के 50 essential sentences",
        examples: [
          { english: "Let me be clear about one thing.", hindi: "एक बात के बारे में मुझे clear कर लेने दो।" },
          { english: "Let her own her mistakes and learn from them.", hindi: "उसे अपनी गलतियाँ माननी दो और उनसे सीखने दो।" },
          { english: "Don't let fear be the reason you never try.", hindi: "डर को वह वजह मत बनने दो कि तुम कभी try नहीं करते।" },
          { english: "Let the best idea win, regardless of who suggested it.", hindi: "Best idea को जीतने दो, चाहे किसी ने भी suggest किया हो।" },
          { english: "Please let me know if you agree with this plan.", hindi: "Please मुझे बताओ अगर तुम इस plan से agree करते हो।" },
          { english: "Don't let negativity drain your energy.", hindi: "Negativity को अपनी energy drain मत करने दो।" },
          { english: "Let it go — some battles are not worth fighting.", hindi: "जाने दो — कुछ लड़ाइयाँ लड़ने लायक नहीं होतीं।" },
          { english: "Let the results speak for themselves.", hindi: "Results को खुद बोलने दो।" },
          { english: "Please don't let him know about the surprise visit.", hindi: "Please उसे surprise visit के बारे में मत बताओ।" },
          { english: "Let us not forget the sacrifices of those who came before us.", hindi: "हमारे पहले आए लोगों के बलिदानों को भूलने मत दो।" },
        ],
      },
    ],
    summary: [
      "Let is used not just for permission but also for wisdom and encouragement",
      "'Let it go', 'Let results speak' = philosophical uses of LET",
      "Mastering LET makes your English sound more fluent and native",
    ],
  },

  "d13-t3-s2": {            // Phrasal Verbs — Let
    sentencePatterns: [
      {
        pattern: "Let in Fixed Expressions and Idioms",
        hindiPattern: "LET के साथ fixed expressions और idioms",
        examples: [
          { english: "Let it be — don't overthink everything.", hindi: "होने दो — हर चीज़ के बारे में ज़्यादा मत सोचो।" },
          { english: "Let sleeping dogs lie — don't bring up old issues.", hindi: "सोए कुत्तों को जगाओ मत — पुराने मुद्दे मत उठाओ।" },
          { english: "Let the cat out of the bag — she accidentally told everyone the secret.", hindi: "उसने गलती से सबको secret बता दिया।" },
          { english: "Let off steam — give your team some time to relax after the hard deadline.", hindi: "Team को कठिन deadline के बाद relax करने का समय दो।" },
          { english: "Let alone the salary — even the work environment is great here.", hindi: "Salary तो छोड़ो — यहाँ work environment भी बहुत अच्छा है।" },
          { english: "Let bygones be bygones — don't hold grudges.", hindi: "जो हो गया उसे भूल जाओ — गुस्सा मत पालो।" },
        ],
      },
    ],
    summary: [
      "LET appears in many English idioms and fixed expressions",
      "'Let it be', 'let sleeping dogs lie', 'let the cat out of the bag' = very common",
      "Learning these as complete chunks makes you sound natural!",
    ],
  },

  "d13-t3-s3": {            // Story & Dialogue for LET (already in D13_T1_S1)
    summary: [
      "LET stories often involve permission, conflict resolution, and collaboration",
      "Practice using Let me / Don't let / Let them in story-based contexts",
    ],
  },

  "d13-t4-s1": {            // Practice Questions — Let
    sentencePatterns: [
      {
        pattern: "Practice: Fill in with the correct LET structure",
        hindiPattern: "Correct LET structure से fill in करो",
        examples: [
          { english: "Please ___ (let/lets) me know your decision.", hindi: "Please ___ मुझे अपना decision बताओ। → Let" },
          { english: "___ (Let/Don't let) him leave without permission.", hindi: "उसे बिना permission के जाने ___। → Don't let" },
          { english: "Could you ___ (let/lets) us use the conference room?", hindi: "क्या आप हमें conference room use ___ दे सकते हैं? → let" },
          { english: "Please don't ___ (let/lets) them know the budget.", hindi: "Please उन्हें budget ___ मत बताओ। → let" },
          { english: "___ me try one more time.", hindi: "एक बार और try ___ मुझे। → Let" },
          { english: "Don't ___ (let/let's) fear stop you.", hindi: "डर को रोकने ___ मत दो। → let" },
          { english: "___ (let's/let) the meeting begin.", hindi: "Meeting ___ शुरू होने दो। → Let" },
          { english: "Please ___ me know if there is any issue.", hindi: "अगर कोई issue हो तो ___ मुझे बताना। → let" },
        ],
      },
    ],
    summary: [
      "Practice distinguishing Let / Don't let / Let's",
      "Always use object pronouns after Let (me, him, her, them, us)",
      "No 'to' ever after LET or Don't let",
    ],
  },

  "d13-t4-s2": {            // Speaking Practice — Let
    speakingTips: [
      "Practice these 5 sentences aloud 3 times each:",
      "1. Let me explain what happened.",
      "2. Please let me know if you need anything.",
      "3. Don't let this problem stop you.",
      "4. Let her decide — it's her choice.",
      "5. Let it go — don't worry about small things.",
      "Now make 5 original LET sentences using real situations from your life!",
    ],
    summary: [
      "Speaking LET naturally requires practice — it uses object pronouns which are different from subject pronouns in Hindi thinking",
      "Most important: Let ME know, Let HIM go, Let HER speak, Let THEM try",
    ],
  },

  "d13-t4-s3": {            // Final Assessment — Let
    rules: [
      { rule: "LET + object + base verb (no 'to')", explanation: "Allow someone to do something", example: "Let me go. / Let him speak." },
      { rule: "Don't let + object + base verb", explanation: "Prevent someone from doing something", example: "Don't let him leave. / Don't let it happen." },
      { rule: "Use object pronouns (me, him, her, them, us, it)", explanation: "Never subject pronouns after LET", example: "Let HIM go. (not 'Let HE go')" },
      { rule: "Past tense of LET = LET (irregular — no change)", explanation: "Let is irregular — no 'letted'", example: "She let me know. / I let him go. (past tense)" },
    ],
    summary: [
      "Day 13 COMPLETE — LET mastered!",
      "Let = allow | Don't let = prevent",
      "NO 'to' after LET | Use object pronouns (me/him/her/them/us/it)",
      "Essential phrases: Let me know, Let me check, Let me explain",
    ],
  },

  // ─── DAY 14: USE OF LET'S ───────────────────────────────────
  "d14-t1-s1": D14_T1_S1,  // Introduction to LET'S

  "d14-t1-s2": {            // Structure & Formula — Let's
    conceptExplanation: `LET'S — Complete Structure Guide\n\nLet's = Let + US (contraction)\n\nFormula:\nLet's + BASE VERB (direct — no 'to', no '-ing')\n\nPositive Suggestion:\nLet's go. / Let's eat. / Let's try.\n\nNegative Suggestion:\nLet's not argue. / Let's not rush. / Let's not give up.\n\nWith Tag Question (seeking agreement):\nLet's begin, SHALL WE?\nLet's take a break, shall we?\n\nIn Past (informal storytelling):\n"And then we said, 'Let's go!' and ran out the door!"\n\nFormal equivalent:\n'Let's discuss' → Formal: 'I suggest we discuss' / 'We should discuss'\n\nKey: LET'S always includes the SPEAKER — you are PART of the suggestion!`,

    sentencePatterns: [
      {
        pattern: "Let's — All Patterns Practice",
        hindiPattern: "Let's के सभी patterns",
        examples: [
          { english: "Let's take this step by step.", hindi: "इसे step by step लेते हैं।" },
          { english: "Let's not jump to conclusions.", hindi: "जल्दी से निष्कर्ष मत निकालते हैं।" },
          { english: "Let's try a different approach, shall we?", hindi: "एक अलग approach try करते हैं, ठीक है?" },
          { english: "Let's agree to disagree on this one.", hindi: "इस पर सहमति हो कि हम असहमत हैं।" },
          { english: "Let's make the most of this opportunity.", hindi: "इस अवसर का पूरा फायदा उठाते हैं।" },
          { english: "Let's not repeat the same mistakes.", hindi: "वही गलतियाँ दोबारा मत करते हैं।" },
          { english: "Let's review the agenda before we start.", hindi: "शुरू करने से पहले agenda review करते हैं।" },
          { english: "Let's all pitch in and help each other.", hindi: "आओ सब मिलकर एक-दूसरे की मदद करें।" },
          { english: "Let's be honest — this plan needs work.", hindi: "Honest रहते हैं — इस plan को काम चाहिए।" },
          { english: "Let's not waste each other's time.", hindi: "एक-दूसरे का समय बर्बाद मत करते हैं।" },
        ],
      },
    ],
    summary: [
      "Let's + base verb (positive) | Let's not + base verb (negative)",
      "Tag: Let's + verb + shall we? (seeking agreement)",
      "No 'to', no '-ing', no '-s' after Let's",
      "Let's INCLUDES the speaker — different from 'Let him/her/them'",
    ],
  },

  "d14-t1-s3": {            // Let's - Positive, Negative & With Shall We
    sentencePatterns: [
      {
        pattern: "Let's — Three Forms: Positive, Negative, Shall We?",
        hindiPattern: "Let's के तीनों forms",
        examples: [
          { english: "✅ Let's organize a team building event this month.", hindi: "इस महीने team building event organize करते हैं।" },
          { english: "❌ Let's not postpone this any further.", hindi: "इसे और postpone मत करते हैं।" },
          { english: "❓ Let's reschedule the meeting for next week, shall we?", hindi: "Meeting अगले हफ्ते reschedule करते हैं, ठीक है?" },
          { english: "✅ Let's focus on the positives and learn from the negatives.", hindi: "Positives पर focus करते हैं और negatives से सीखते हैं।" },
          { english: "❌ Let's not blame each other — let's find solutions.", hindi: "एक-दूसरे को blame मत करते हैं — solutions खोजते हैं।" },
          { english: "❓ Let's wrap up this discussion, shall we?", hindi: "यह discussion यहाँ खत्म करते हैं, ठीक है?" },
          { english: "✅ Let's celebrate every small win along the way.", hindi: "रास्ते में हर छोटी जीत celebrate करते हैं।" },
          { english: "❌ Let's not underestimate the challenges ahead.", hindi: "आगे आने वाली challenges को कम नहीं आँकते हैं।" },
          { english: "❓ Let's start fresh tomorrow, shall we?", hindi: "कल नए सिरे से शुरू करते हैं, ठीक है?" },
        ],
      },
    ],
    summary: [
      "Three forms: Let's [verb] | Let's not [verb] | Let's [verb], shall we?",
      "Shall we? = polite tag for seeking agreement in Let's sentences",
      "Use Let's not for collaborative caution and positive redirection",
    ],
  },

  "d14-t1-s4": {            // Let's vs Let — Key Difference
    conceptExplanation: `LET vs LET'S — THE KEY DIFFERENCE\n\n🔴 LET + object = allow someone ELSE to do something\n(Speaker may or may not be involved — but usually isn't)\n\n🟢 LET'S = LET US = WE do something together\n(Speaker IS always included in the suggestion)\n\nCompare:\n• "Let him go." = Allow HIM to go. (He goes. Not necessarily me.)\n• "Let's go." = Let US go. (WE all go together — I'm included!)\n\n• "Let her eat." = Allow HER to eat. (I may not eat.)\n• "Let's eat." = Let US eat. (We ALL eat together!)\n\n• "Let them try." = Allow THEM to try. (I watch.)\n• "Let's try." = Let US try. (I try too!)`,

    sentencePatterns: [
      {
        pattern: "LET vs LET'S — Contrast Practice",
        hindiPattern: "LET और LET'S का अंतर — practice",
        examples: [
          { english: "Let him speak at the meeting. (allow him — not you)", hindi: "उसे meeting में बोलने दो। (उसे allow करो — तुम नहीं)" },
          { english: "Let's speak at the meeting. (we all speak — including you)", hindi: "हम meeting में बोलते हैं। (हम सभी — तुम भी शामिल)" },
          { english: "Let her decide. (she decides — you just allow it)", hindi: "उसे decide करने दो। (वह decide करे — तुम बस allow करो)" },
          { english: "Let's decide together. (we decide as a group)", hindi: "साथ मिलकर decide करते हैं। (group decision)" },
          { english: "Let them go first. (they go — you may stay)", hindi: "उन्हें पहले जाने दो। (वे जाते हैं — तुम रह सकते हो)" },
          { english: "Let's go together! (we ALL go — you included)", hindi: "साथ चलते हैं! (सब जाते हैं — तुम भी)" },
          { english: "Let me handle this. (I handle it — requesting permission for myself)", hindi: "मुझे handle करने दो। (मैं handle करूँगा — अपने लिए permission माँग रहा हूँ)" },
          { english: "Let's handle this together. (we both handle it)", hindi: "मिलकर handle करते हैं। (हम दोनों मिलकर करते हैं)" },
        ],
      },
    ],
    summary: [
      "LET + object = permission/allowance for someone ELSE",
      "LET'S = suggestion for ALL of us (speaker included)",
      "The 's' in LET'S represents 'us' — YOU are part of it!",
      "This is one of the most important distinctions in English grammar",
    ],
  },

  "d14-t2-s1": D14_T2_S1,  // Daily Life Sentences — Let's
  "d14-t2-s2": D14_T2_S2,  // Professional Usage — Let's

  "d14-t2-s3": {            // Common Mistakes — Let's
    commonMistakes: [
      { wrong: "Lets go to the market.", correct: "Let's go to the market.", explanation: "ALWAYS write the apostrophe! 'Lets' (no apostrophe) = He lets = allows. 'Let's' (with apostrophe) = Let us = suggestion." },
      { wrong: "Let's to go now.", correct: "Let's go now.", explanation: "No 'to' after Let's! Direct base verb. 'Let's GO' (not 'Let's to go')." },
      { wrong: "Let's not to argue.", correct: "Let's not argue.", explanation: "Let's not + BASE verb directly. No 'to' needed. 'Let's not ARGUE' (not 'to argue')." },
      { wrong: "Let's go, won't we?", correct: "Let's go, shall we?", explanation: "The ONLY correct tag question for Let's is 'shall we?' — not 'won't we?' or 'aren't we?' or 'can we?'." },
      { wrong: "Let's going out for dinner.", correct: "Let's go out for dinner.", explanation: "After Let's, use BASE form — never -ing. 'Let's GO' not 'Let's GOING'." },
    ],
    summary: [
      "Top 5 Let's mistakes: missing apostrophe, adding 'to', adding -ing, wrong tag (won't we? instead of shall we?)",
      "Remember: Let's = Let + US. The apostrophe = the missing 'U'",
      "Always: Let's + base verb (direct, clean, simple!)",
    ],
  },

  "d14-t3-s1": {            // Key Vocabulary — Let's
    sentencePatterns: [
      {
        pattern: "50 Natural Let's Sentences for Real Life",
        hindiPattern: "असली ज़िंदगी के लिए 50 natural Let's sentences",
        examples: [
          { english: "Let's make today count.", hindi: "आज का पूरा फायदा उठाते हैं।" },
          { english: "Let's not forget why we started.", hindi: "याद रखते हैं कि हमने क्यों शुरू किया था।" },
          { english: "Let's see what happens — we'll adapt as we go.", hindi: "देखते हैं क्या होता है — हम जैसे-जैसे आगे बढ़ेंगे, adapt करेंगे।" },
          { english: "Let's call it a day — we've done enough.", hindi: "आज के लिए काफी है — बस करते हैं।" },
          { english: "Let's touch base after the meeting.", hindi: "Meeting के बाद connect करते हैं।" },
          { english: "Let's cross that bridge when we come to it.", hindi: "जब उस situation में पहुँचें, तब देखेंगे।" },
          { english: "Let's not put all our eggs in one basket.", hindi: "सारे eggs एक ही basket में मत रखते हैं।" },
          { english: "Let's cut to the chase — what exactly is the problem?", hindi: "सीधे बात पर आते हैं — असल problem क्या है?" },
          { english: "Let's give it our best shot.", hindi: "अपना best देते हैं।" },
          { english: "Let's not lose sight of our main goal.", hindi: "अपने main goal से नज़र मत हटाते हैं।" },
        ],
      },
    ],
    summary: [
      "Let's appears in many English idioms and expressions",
      "'Let's see', 'Let's face it', 'Let's call it a day' = very natural phrases",
      "Memorize these as complete chunks for instant fluency",
    ],
  },

  "d14-t3-s2": {            // Phrasal Verbs — Let's
    sentencePatterns: [
      {
        pattern: "Let's with Phrasal Verbs and Idiomatic Expressions",
        hindiPattern: "Let's के साथ phrasal verbs",
        examples: [
          { english: "Let's wrap up — we're running out of time.", hindi: "बस करते हैं — समय खत्म हो रहा है।" },
          { english: "Let's pick up where we left off.", hindi: "वहाँ से शुरू करते हैं जहाँ हमने छोड़ा था।" },
          { english: "Let's put this on hold for now.", hindi: "इसे अभी के लिए रोकते हैं।" },
          { english: "Let's come up with a better solution.", hindi: "एक बेहतर solution निकालते हैं।" },
          { english: "Let's set aside our differences and work together.", hindi: "अपने मतभेद अलग रखते हैं और साथ काम करते हैं।" },
          { english: "Let's break it down into smaller steps.", hindi: "इसे छोटे-छोटे steps में बाँटते हैं।" },
          { english: "Let's follow up on this next week.", hindi: "अगले हफ्ते इस पर follow up करते हैं।" },
          { english: "Let's not give up on each other.", hindi: "एक-दूसरे को छोड़ते नहीं हैं।" },
        ],
      },
    ],
    summary: [
      "Let's + phrasal verbs = very natural professional and daily English",
      "Common: Let's wrap up, Let's pick up, Let's follow up, Let's break it down",
      "These phrases make you sound fluent immediately — memorize as chunks!",
    ],
  },

  "d14-t3-s3": D14_T3_S3,  // Story & Dialogue — Let's (rich content)

  "d14-t4-s1": {            // Practice Questions — Let's
    sentencePatterns: [
      {
        pattern: "Practice: Make sentences using Let's, Let's not, and Let's...shall we?",
        hindiPattern: "Let's, Let's not, और Let's...shall we? से sentences बनाओ",
        examples: [
          { english: "Let's visit the museum this weekend.", hindi: "इस weekend museum चलते हैं।" },
          { english: "Let's not book the cheapest option — quality matters.", hindi: "सबसे सस्ता option book मत करते हैं — quality मायने रखती है।" },
          { english: "Let's start the presentation, shall we?", hindi: "Presentation शुरू करते हैं, ठीक है?" },
          { english: "Let's all agree on one thing: we will not miss deadlines.", hindi: "एक बात पर सब agree करते हैं: हम deadlines miss नहीं करेंगे।" },
          { english: "Let's not make any assumptions without checking the facts.", hindi: "Facts check किए बिना कोई assumption मत करते हैं।" },
          { english: "Let's discuss the budget allocations, shall we?", hindi: "Budget allocations discuss करते हैं, ठीक है?" },
          { english: "Let's take this one day at a time.", hindi: "एक दिन में एक कदम लेते हैं।" },
          { english: "Let's not forget to send the minutes of the meeting.", hindi: "Meeting के minutes भेजना मत भूलते हैं।" },
          { english: "Let's finalize the plan and get started!", hindi: "Plan finalize करते हैं और शुरू होते हैं!" },
          { english: "Let's learn from this experience and do better next time.", hindi: "इस experience से सीखते हैं और अगली बार बेहतर करते हैं।" },
        ],
      },
    ],
    summary: [
      "Practice all three Let's forms: positive, negative (not), and with shall we?",
      "Aim for 100% accuracy on apostrophe ('Let's' not 'Lets') and no 'to' after Let's",
    ],
  },

  "d14-t4-s2": {            // Speaking Practice — Let's
    speakingTips: [
      "Practice saying these 5 sentences with energy and enthusiasm:",
      "1. Let's GO! (most common, most energetic)",
      "2. Let's get started — we have a lot to cover!",
      "3. Let's not waste any more time — action time!",
      "4. Let's do this together — team effort!",
      "5. Let's wrap up, shall we?",
      "NOW: make 5 genuine Let's suggestions for things you want to do with someone today.",
      "The goal: use Let's so naturally that it becomes your default word for inviting others!",
    ],
    summary: [
      "Let's is one of the most energizing phrases in English — use it with enthusiasm!",
      "It builds team spirit, friendship, and collaboration in any context",
      "Daily practice: start every suggestion with 'Let's...' instead of commands",
    ],
  },

  "d14-t4-s3": {            // Final Assessment — Let's
    rules: [
      { rule: "Let's = Let us — includes the speaker in the action", explanation: "YOU are part of the suggestion", example: "Let's go. / Let's try. / Let's eat." },
      { rule: "Let's + base verb (never 'to', never '-ing')", explanation: "Direct base verb always", example: "Let's GO (not Let's to go | not Let's going)" },
      { rule: "Negative: Let's not + base verb", explanation: "Suggesting we should NOT do something together", example: "Let's not argue. / Let's not give up." },
      { rule: "Tag: Let's + verb + shall we?", explanation: "'Shall we?' is the ONLY correct tag for Let's sentences", example: "Let's begin, shall we?" },
      { rule: "Let's vs Let: Let's = WE do it | Let = allow someone else", explanation: "Critical distinction for fluency", example: "Let's go (WE go) vs Let him go (HE goes)" },
    ],
    summary: [
      "Day 14 COMPLETE — Let's mastered!",
      "Let's = suggestion including yourself | Let = permission for someone else",
      "Formula: Let's + base verb | Let's not + base verb | Let's..., shall we?",
      "You have completed 14 days! Let's keep going for 61 more! Let's DO THIS!",
    ],
  },
};
