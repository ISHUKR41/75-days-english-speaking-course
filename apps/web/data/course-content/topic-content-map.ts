// ============================================================
// Comprehensive Topic Content Map — All 75 Days
// Rich, topic-specific educational content per day
// Imported by lesson-content.tsx to show real lesson data
// Each entry has: why, concept, rules, mistakes, story, dialogue
// ============================================================

// Import the shared LessonContent type from day-1 content file
import type { LessonContent as LessonContentType } from "@/data/course-content/day-1-content";

// ─── Day 3: Imperative Sentence ───────────────────────────────
// Commands, requests, instructions, and suggestions in English
const DAY_3_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `Imperative sentences are the COMMANDS of English! You use them 50+ times every single day.\n\nEvery time you say:\n• "Open the door."\n• "Please send me that file."\n• "Don't worry!"\n• "Listen carefully."\n\n...you are using an IMPERATIVE SENTENCE!\n\nIn your career:\n✓ Instructions at work: "Submit the report by Friday."\n✓ Emails: "Please find the attached document."\n✓ Meetings: "Kindly note these points."\n✓ Customer service: "Please hold the line."\n\nWithout imperative sentences, you cannot give instructions, make requests, or guide others. Master this today!`,

  conceptExplanation: `An IMPERATIVE SENTENCE gives a command, instruction, request, or suggestion.\n\nThe AMAZING thing about imperatives: THE SUBJECT IS HIDDEN!\n\nIn every imperative, the subject is "YOU" — but we don't say it!\n\nFormula:\nBase form of verb + rest of sentence\n(The "you" is understood)\n\nExamples:\n• "Sit down." = (You) sit down.\n• "Read the book." = (You) read the book.\n• "Be quiet." = (You) be quiet.\n• "Don't run." = (You) do not run.\n\nFour types of imperatives:\n1. COMMANDS: "Stop!" / "Come here!"\n2. REQUESTS: "Please help me." / "Kindly wait."\n3. INSTRUCTIONS: "Add salt and stir."\n4. SUGGESTIONS: "Try this restaurant." / "Let's go."`,

  simpleExplanation: `Imperative = command ya request dena!\n\nSabse easy grammar rule:\nSIRF VERB se start karo — no "I", "you", "he" needed!\n\nHindi mein: "Aao!" = Come!\nHindi mein: "Mat jao!" = Don't go!\nHindi mein: "Baithiye please." = Please sit.\n\nYaad karo: Base form use karo — no "s", no "ed", no "ing"!\n❌ "Goes to school!"\n✅ "Go to school!"`,

  hindiExplanation: `Imperative Sentence = आदेश (command), निवेदन (request), या सुझाव (suggestion) देना।\n\nFormula: Verb (base form) + बाकी sentence\n"You" automatically समझा जाता है।\n\nउदाहरण:\n• बंद करो दरवाज़ा = Close the door.\n• कृपया बैठिए = Please sit down.\n• मत रोओ = Don't cry.\n• जल्दी आओ = Come quickly.\n\nPolite बनाने के लिए:\n"Please" add करो शुरू में या अंत में:\n• Please come here.\n• Come here, please.\n\nNegative बनाने के लिए:\n"Don't" + verb:\n• Don't touch this.\n• Don't be late.`,

  rules: [
    {
      rule: "Base verb starts the sentence (no subject, no 'to')",
      explanation: "In imperative sentences, use the base form of the verb directly — not 'to go', not 'going', just 'go'. The subject 'you' is always understood.",
      example: "Go to the market. / Read this book. / Open the window.",
      exception: "Exception: 'Be' is used as is: 'Be careful.' / 'Be quiet.' / 'Be honest.'",
    },
    {
      rule: "Add 'Please' for politeness",
      explanation: "Commands can sound rude. Add 'please' at the beginning or end to make them polite requests. This is essential in professional settings.",
      example: "Please submit the report. / Submit the report, please. / Please be on time.",
      exception: "In emergency situations, 'please' can be skipped: 'Call the doctor NOW!' / 'Run!'",
    },
    {
      rule: "Negative: Don't + base verb",
      explanation: "To make an imperative negative (saying 'don't do this'), add 'don't' or 'do not' before the verb. NEVER use 'not' alone.",
      example: "Don't be late. / Do not touch. / Don't worry. / Please don't shout.",
      exception: "Formal: 'Do not' is more formal than 'don't'. Use 'Do not' in notices, signs, and formal emails.",
    },
    {
      rule: "Exclamation mark shows urgency",
      explanation: "Use an exclamation mark (!) when the command is urgent, strong, or emotional. Use a period (.) for normal commands and requests.",
      example: "Help! / Stop! / Please have a seat. / Pass the salt.",
      exception: "Do not overuse exclamation marks in professional writing — it looks unprofessional and immature.",
    },
    {
      rule: "Use 'Kindly' for formal/professional requests",
      explanation: "'Kindly' is a formal alternative to 'please'. It's commonly used in Indian professional English and formal letters.",
      example: "Kindly note that the meeting is at 3 PM. / Kindly submit your documents by Monday.",
      exception: "Avoid 'kindly' in casual conversations — it sounds overly formal with friends.",
    },
  ],

  commonMistakes: [
    { wrong: "You go to market.", correct: "Go to the market.", explanation: "Imperative = no subject! Remove 'You' from the beginning. Start directly with the verb." },
    { wrong: "Please to come here.", correct: "Please come here.", explanation: "Never use 'to' after 'please' in imperatives. Formula: Please + base verb." },
    { wrong: "Don't to run.", correct: "Don't run.", explanation: "After 'don't', use base verb — NEVER 'to + verb'. Don't run / Don't speak / Don't cry." },
    { wrong: "Be quite.", correct: "Be quiet.", explanation: "'Quite' means 'very' (adverb). 'Quiet' means 'no noise' (adjective). 'Be quiet' = chup raho." },
    { wrong: "Opens the door!", correct: "Open the door!", explanation: "Imperative uses base form — not 'opens' (3rd person singular). Never add 's' in imperatives." },
  ],

  sentencePatterns: [
    {
      pattern: "Verb + Object (Basic Command)",
      hindiPattern: "क्रिया + वस्तु (आदेश)",
      examples: [
        { english: "Close the door.", hindi: "दरवाज़ा बंद करो।" },
        { english: "Write your name here.", hindi: "अपना नाम यहाँ लिखो।" },
        { english: "Read the instructions carefully.", hindi: "निर्देश ध्यान से पढ़ो।" },
        { english: "Call me tomorrow morning.", hindi: "कल सुबह मुझे call करो।" },
        { english: "Finish your work before leaving.", hindi: "जाने से पहले अपना काम खत्म करो।" },
      ],
    },
    {
      pattern: "Please + Verb + Object (Polite Request)",
      hindiPattern: "कृपया + क्रिया + वस्तु (विनम्र अनुरोध)",
      examples: [
        { english: "Please send me the report by 5 PM.", hindi: "कृपया मुझे शाम 5 बजे तक रिपोर्ट भेजें।" },
        { english: "Please wait a moment.", hindi: "कृपया एक क्षण प्रतीक्षा करें।" },
        { english: "Please be on time for the meeting.", hindi: "कृपया मीटिंग के लिए समय पर आएं।" },
        { english: "Please check your email.", hindi: "कृपया अपना email चेक करें।" },
      ],
    },
    {
      pattern: "Don't + Verb (Negative Command)",
      hindiPattern: "मत + क्रिया (नकारात्मक आदेश)",
      examples: [
        { english: "Don't be late for the meeting.", hindi: "मीटिंग के लिए देर मत करो।" },
        { english: "Don't worry about small mistakes.", hindi: "छोटी गलतियों की चिंता मत करो।" },
        { english: "Don't forget the meeting tomorrow.", hindi: "कल की मीटिंग मत भूलना।" },
        { english: "Don't share confidential files.", hindi: "गोपनीय files share मत करो।" },
      ],
    },
  ],

  speakingTips: [
    "Say imperatives with a firm, confident tone — add 'please' to sound professional",
    "In office settings, always use 'please': 'Please review this.' not 'Review this.'",
    "Practice the difference in tone: command (firm) vs request (softer) vs suggestion (rising tone)",
    "Record yourself giving instructions — check if you sound polite or harsh",
    "Shadow English instructional YouTube videos — repeat commands you hear out loud",
    "Imperatives in singing: many English songs use imperatives — 'Don't stop believing', 'Come as you are'",
  ],

  memoryTricks: [
    "IMPERATIVE = Think 'Emperor' — an emperor gives commands! Imperative = Emperor's language!",
    "Formula trick: Hide 'You', start with verb! 'You close the door.' → 'Close the door!'",
    "Negative trick: Replace 'You don't' with 'Don't': 'You don't run!' → 'Don't run!'",
    "'Please' = politeness switch. Add it to turn any command into a polite request!",
    "Traffic signs are imperatives: STOP / GO SLOW / KEEP LEFT — all base verbs!",
  ],

  professionalUsage: [
    { situation: "Professional email requests", english: "Please find the attached report. Kindly review and share your feedback by Friday. Do not hesitate to contact me if you have any questions.", hindi: "Professional email में imperative + please/kindly use करें।" },
    { situation: "Meeting instructions", english: "Please mute your microphones when not speaking. Don't forget to turn on your cameras. Submit your questions in the chat box.", hindi: "Meeting में clear imperatives देना ज़रूरी है।" },
    { situation: "Team instructions", english: "Update the spreadsheet daily. Submit timesheets by Friday 5 PM. Don't share confidential documents externally.", hindi: "Team को instructions — clear और polite imperatives।" },
  ],

  dailyUsage: [
    { situation: "At home", english: "Switch off the lights. Don't leave the fan on. Please clean your room before dinner.", hindi: "घर पर daily imperatives।" },
    { situation: "With friends", english: "Come to my house tonight! Bring some snacks. Don't be late!", hindi: "दोस्तों के साथ casual imperatives।" },
  ],

  officeUsage: [
    { situation: "Delegating work", english: "Prepare the presentation slides by Monday. Include all the quarterly data. Don't forget to add graphs and charts.", hindi: "काम delegate करते समय clear instructions।" },
  ],

  interviewUsage: [
    { situation: "Following interviewer's instructions", english: "Interviewer: 'Please introduce yourself.' / 'Tell me about your strengths.' / 'Don't rush — take your time and be specific.'", hindi: "Interview में interviewer के imperatives को पहचानो और perfectly follow करो।" },
  ],

  story: {
    title: "Rahul's First Day at Work",
    paragraphs: [
      "Rahul joined a new company. On his first day, his manager gave instructions: 'Come to office by 9 AM. Park in Zone B. Don't use your phone during meetings. Please introduce yourself to the team.'",
      "Rahul listened carefully and repeated to himself: 'Come early. Park in Zone B. No phone in meetings. Introduce myself.' All imperatives!",
      "At lunch, a colleague said: 'Don't worry! Everyone is friendly here. Just be yourself. Try the food in the cafeteria — it's excellent!'",
      "Rahul smiled: 'Thank you! Please tell me more about the team.'",
      "His colleague laughed: 'Don't ask too many questions on day one!' They both laughed.",
      "By evening, Rahul realized: Imperative sentences run an office. Every instruction, every request — all imperatives!",
    ],
    moral: "Imperative sentences make communication clear and direct. Master them and you can give and follow instructions perfectly!",
    keyWords: [
      { word: "instruction", meaning: "निर्देश — a direction or command" },
      { word: "delegate", meaning: "सौंपना — to assign a task to someone" },
      { word: "polite", meaning: "विनम्र — showing good manners" },
      { word: "urgent", meaning: "तत्काल — needing immediate action" },
    ],
  },

  essay: {
    title: "Imperative Sentences: The Language of Action and Direction",
    paragraphs: [
      "Imperative sentences are the most action-oriented form of English grammar. Unlike declarative sentences that merely state facts, imperatives drive action, guide behavior, and direct others toward outcomes.",
      "Every day, we encounter imperatives everywhere — traffic signs say 'Stop' and 'Drive Slow', recipes say 'Add two cups of flour and mix well', teachers say 'Open your books to page fifty', apps say 'Tap to continue'.",
      "In professional settings, mastery of imperatives is crucial. A manager who cannot give clear, polite instructions loses authority. An employee who cannot follow or relay instructions creates confusion in the workplace.",
      "The beauty of imperative sentences is their efficiency. By hiding the subject 'you', they cut directly to the action. 'Please submit the report by Friday' communicates far more cleanly than a longer, wordy alternative.",
      "Mastering imperatives means mastering the art of effective communication — being direct, being clear, and being polite all at the same time.",
    ],
    keyPoints: [
      "Imperative = Command / Request / Instruction / Suggestion",
      "Subject 'You' is always hidden — start directly with the verb",
      "Add 'please' to turn any command into a polite request",
      "Negative imperative = Don't + base verb",
      "Used 50+ times daily in real communication",
    ],
  },

  dialogue: {
    title: "First Day at the Office",
    setting: "Arjun's first day at his new office. Senior colleague Meera is guiding him.",
    lines: [
      { speaker: "Meera", text: "Welcome, Arjun! Please follow me. I'll show you your desk.", hindi: "स्वागत है, अर्जुन! कृपया मेरे साथ आइए।" },
      { speaker: "Arjun", text: "Thank you, Meera! Please tell me the office rules.", hindi: "धन्यवाद, मीरा! कृपया office के rules बताइए।" },
      { speaker: "Meera", text: "Sure! Come on time — 9 AM sharp. Don't use your personal phone during work hours.", hindi: "ज़रूर! समय पर आइए — 9 बजे। काम के दौरान personal phone मत use करिए।" },
      { speaker: "Arjun", text: "Understood. Please tell me about the lunch break.", hindi: "समझ गया। कृपया lunch break के बारे में बताइए।" },
      { speaker: "Meera", text: "Take lunch from 1 to 2 PM. Don't eat at your desk — use the cafeteria. And please introduce yourself to everyone today!", hindi: "1 से 2 बजे lunch लीजिए। Desk पर मत खाइए। और आज सभी से परिचय करिए!" },
      { speaker: "Arjun", text: "Perfect! Thank you so much. I will follow all the instructions!", hindi: "बिल्कुल! बहुत धन्यवाद। मैं सभी निर्देश follow करूँगा!" },
    ],
    notes: [
      "Notice imperatives: Follow, Tell, Come, Don't use, Take, Don't eat, Introduce",
      "'Please' makes every command polite and professional",
      "Both giving AND receiving instructions well is a key professional skill",
      "Real offices use imperatives constantly — now you can understand and use them!",
    ],
  },

  summary: [
    "Imperative Sentence = Command / Request / Instruction / Suggestion",
    "Formula: Base verb + rest (subject 'You' is always hidden)",
    "Positive: 'Open the door.' | Negative: 'Don't open the door.'",
    "Polite: Add 'please' before or after — 'Please sit.' or 'Sit down, please.'",
    "Used everywhere: home, office, travel, shopping — 50+ times per day!",
    "Day 3 complete! Practice: use imperatives in 10 real sentences today!",
  ],
};

// ─── Day 4: Be Verb ───────────────────────────────────────────
// am, is, are, was, were — the backbone of English grammar
const DAY_4_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `Be verb is THE MOST USED VERB in English!\n\nEvery single day, in every conversation, email, or message — you use "be verbs":\n• AM (I am)\n• IS (He is / She is / It is)\n• ARE (You are / We are / They are)\n• WAS (past: I was / He was)\n• WERE (past: You were / We were / They were)\n\nWithout "be verbs", you cannot:\n❌ Tell who you are: "I ___ a student."\n❌ Describe things: "The food ___ delicious."\n❌ Talk about feelings: "I ___ tired."\n❌ Make continuous tenses: "She ___ studying."\n\nBe verbs are the BACKBONE of English grammar. Master them and 40% of English becomes easier immediately!`,

  conceptExplanation: `BE VERB = am / is / are / was / were / been / being\n\nThink of BE VERB as the "equal sign" (=) of English:\n• I am a teacher. = I = teacher\n• She is beautiful. = She = beautiful\n• They are engineers. = They = engineers\n\n📌 PRESENT TENSE:\nI → AM (I am happy)\nHe/She/It → IS (He is tall)\nYou/We/They → ARE (We are friends)\n\n📌 PAST TENSE:\nI/He/She/It → WAS (I was tired yesterday)\nYou/We/They → WERE (They were here)\n\n📌 THREE USES OF BE VERB:\n1. LINKING VERB: connects subject to adjective/noun\n   "She is intelligent." / "I am a doctor."\n2. HELPING VERB (continuous tenses):\n   "He is eating." / "They were playing."\n3. PASSIVE VOICE:\n   "The letter was written by me."`,

  simpleExplanation: `Be verb = "hona" wala verb!\n\nSimple formula yaad karo:\nPresent: am/is/are\nPast: was/were\n\nTrick:\nI = AM (I am only with AM!)\nHe/She/It = IS (3 singular = IS)\nYou/We/They = ARE (plural/you = ARE)\n\nPast mein:\nI/He/She/It = WAS\nYou/We/They = WERE\n\nExample:\n• I am a student. (Present)\n• I was a student. (Past)\n• She is happy. (Present)\n• She was happy. (Past)`,

  hindiExplanation: `Be Verb = "होना" का अंग्रेज़ी रूप\n\nहिंदी में: हूँ / है / हैं / था / थे / थी\nअंग्रेज़ी में: am / is / are / was / were\n\nFormula याद करें:\nPresent Tense:\n• मैं हूँ = I am\n• वह है = He/She is\n• हम/आप/वे हैं = We/You/They are\n\nPast Tense:\n• मैं था/थी = I was\n• वह था/थी = He/She was\n• हम/आप/वे थे/थीं = We/You/They were\n\nNegative:\n• I am not (मैं नहीं हूँ)\n• He is not / isn't (वह नहीं है)\n• They are not / aren't (वे नहीं हैं)\n\nQuestion:\n• Am I right? (क्या मैं सही हूँ?)\n• Is she coming? (क्या वह आ रही है?)\n• Are they ready? (क्या वे तैयार हैं?)`,

  rules: [
    {
      rule: "I always uses AM (never is/are)",
      explanation: "The pronoun 'I' always pairs with 'am' in present tense. This is a fixed rule with no exceptions in normal English.",
      example: "I am happy. / I am a student. / I am from India. / I am learning English.",
      exception: "Past tense: 'I was' (correct) — except in subjunctive mood: 'If I were you, I would leave.' (hypothetical situation)",
    },
    {
      rule: "He/She/It (and singular nouns) use IS",
      explanation: "Third person singular subjects use 'is'. This includes he, she, it, and any single person or thing.",
      example: "She is a doctor. / He is my friend. / The book is interesting. / Mumbai is amazing. / The meeting is at 3 PM.",
      exception: "Collective nouns: 'The team is ready.' (team as one unit) OR 'The team are all ready.' (team as individuals) — both acceptable.",
    },
    {
      rule: "You/We/They (and plural nouns) use ARE",
      explanation: "Second person (you — singular and plural), first person plural (we), and third person plural (they) all use 'are'.",
      example: "You are smart. / We are colleagues. / They are students. / The books are on the table.",
      exception: "'You are' is used even for ONE person: 'You are my best friend.' — 'you' always takes 'are', never 'is'.",
    },
    {
      rule: "Negative: Subject + am/is/are + NOT",
      explanation: "To make negative sentences with be verbs, add 'not' after the be verb. Common contractions: isn't, aren't, wasn't, weren't.",
      example: "I am not tired. / She is not ready. / They are not here. / He wasn't at the meeting.",
      exception: "NO contraction for 'am not': 'I amn't' is wrong. Use 'I'm not' or 'I am not'.",
    },
    {
      rule: "Question: Am/Is/Are + Subject + rest?",
      explanation: "To form yes/no questions, move the be verb BEFORE the subject. For WH-questions, the question word comes first.",
      example: "Am I right? / Is she coming? / Are they ready? / Were you there? / Where is the file? / Why are you late?",
      exception: "Indirect questions keep normal order: 'I want to know if she is coming.' (not: 'I want to know is she coming.')",
    },
  ],

  commonMistakes: [
    { wrong: "I is a student.", correct: "I am a student.", explanation: "'I' always uses 'am'. Never 'I is' or 'I are' — no exceptions." },
    { wrong: "She are coming.", correct: "She is coming.", explanation: "He/She/It = IS. 'Are' is only for You/We/They." },
    { wrong: "They is my friends.", correct: "They are my friends.", explanation: "Plural subjects use 'are'. 'They is' is never correct." },
    { wrong: "He was not go.", correct: "He was not going. / He did not go.", explanation: "Be verb + not + verb-ING for continuous. Use 'did not go' for simple past." },
    { wrong: "Are you is ready?", correct: "Are you ready?", explanation: "ONE be verb per sentence — never two! Never 'Are you is' or 'Is she are'." },
  ],

  sentencePatterns: [
    {
      pattern: "Subject + am/is/are + Noun/Adjective (Present Tense)",
      hindiPattern: "वर्तमान काल — Subject + हूँ/है/हैं",
      examples: [
        { english: "I am a software engineer at TCS.", hindi: "मैं TCS में एक software engineer हूँ।" },
        { english: "She is very intelligent and hardworking.", hindi: "वह बहुत intelligent और मेहनती है।" },
        { english: "We are teammates on this project.", hindi: "हम इस project में teammates हैं।" },
        { english: "The weather is beautiful today.", hindi: "आज मौसम सुंदर है।" },
        { english: "They are from the Bengaluru office.", hindi: "वे बेंगलुरु office से हैं।" },
      ],
    },
    {
      pattern: "Subject + was/were + Noun/Adjective (Past Tense)",
      hindiPattern: "भूतकाल — Subject + था/थे/थी",
      examples: [
        { english: "I was very tired after the long meeting.", hindi: "लंबी meeting के बाद मैं बहुत थका हुआ था।" },
        { english: "She was a student at Delhi University.", hindi: "वह दिल्ली University में एक छात्रा थी।" },
        { english: "The project was completed on time.", hindi: "project समय पर पूरा हो गया था।" },
        { english: "They were at the conference yesterday.", hindi: "वे कल conference में थे।" },
      ],
    },
    {
      pattern: "Subject + am/is/are + NOT (Negative)",
      hindiPattern: "नकारात्मक — Subject + नहीं हूँ/है/हैं",
      examples: [
        { english: "I am not feeling well today.", hindi: "मैं आज ठीक नहीं हूँ।" },
        { english: "He isn't in the office today.", hindi: "वह आज office में नहीं है।" },
        { english: "We aren't ready for the presentation yet.", hindi: "हम अभी presentation के लिए तैयार नहीं हैं।" },
        { english: "The files aren't on the shared drive.", hindi: "files shared drive पर नहीं हैं।" },
      ],
    },
  ],

  speakingTips: [
    "Practice contractions: I'm, she's, he's, we're, they're — these are how native speakers actually speak",
    "Short answers with be verb: 'Are you coming?' → 'Yes, I am.' / 'No, I'm not.' (Never just 'Yes' or 'No'!)",
    "Stress the be verb for emphasis: 'I AM telling the truth!' / 'She IS very talented!' (stressed = strong emphasis)",
    "Practice daily: describe yourself, your room, your colleagues, your city using be verbs",
    "Notice be verbs in every English sentence you read — they appear 3-5 times per paragraph",
  ],

  memoryTricks: [
    "I AM → A comes first in the alphabet = I = FIRST person = AM!",
    "IS = Individual Singular (He, She, It — all individual and singular)",
    "ARE = All the Rest (You, We, They — everyone else uses ARE)",
    "WAS/WERE: same as IS/ARE but past! I/He/She/It → WAS | You/We/They → WERE",
    "Question trick: flip the order! 'She is.' → 'Is she?' / 'They are.' → 'Are they?'",
  ],

  professionalUsage: [
    { situation: "Professional self-introduction", english: "I am Priya Sharma. I am a Senior Data Analyst at TCS. I am currently working on the banking automation project.", hindi: "Professional introduction में am/is/are essential है।" },
    { situation: "Status update email", english: "The project is on track. The deadline is March 31st. Our team is ready for the final review. The client was satisfied with the last update.", hindi: "Project status — current state (is) और past state (was) के लिए।" },
    { situation: "Meeting invitation", english: "The meeting is at 3 PM in Conference Room B. All team members are required to attend. The agenda is attached.", hindi: "Meeting details में be verb for time, location, requirements।" },
  ],

  dailyUsage: [
    { situation: "Talking about feelings", english: "I am exhausted after the long day. Are you hungry? The food is ready. The children are asleep.", hindi: "Feelings और states express करने के लिए।" },
    { situation: "Describing people and places", english: "My friend is very talented. The market is crowded today. The roads were empty this morning.", hindi: "People और places describe करते समय।" },
  ],

  officeUsage: [
    { situation: "Meeting and scheduling", english: "The meeting is at 3 PM. The conference room is on the 4th floor. Is the projector ready? Our manager was on leave yesterday.", hindi: "Office में time, place, और status के लिए।" },
  ],

  interviewUsage: [
    { situation: "Perfect self-introduction", english: "I am Arjun Kumar. I am a Computer Science graduate from Delhi University. I am passionate about software development. I was previously an intern at Infosys where I was part of the backend team.", hindi: "Interview में AM, IS, WAS का correct use first impression बनाता है।" },
  ],

  story: {
    title: "The Grammar Lesson",
    paragraphs: [
      "Sita was a new English teacher. On her first day, she introduced herself: 'Good morning! I am Sita. I am your new English teacher. I am from Pune.'",
      "A curious student raised his hand: 'Teacher, why do we say I am but He is? Why not He am?'",
      "Sita smiled — her favourite question! 'Think of AM as the personal bodyguard of I. AM only works for I. IS belongs to He, She, and It. And ARE protects You, We, and They.'",
      "The student thought for a moment: 'So they are like three different guards for three different groups?'",
      "Sita clapped. 'Perfect! You just made the best explanation I have ever heard!'",
      "The students practiced: 'I am happy. She is smart. They are ready. We were there. He was wrong.'",
      "Sita was proud. The classroom was full of energy. English was no longer scary — it was exciting!",
    ],
    moral: "Be verbs are not random — they follow a clear pattern. Once you memorize AM/IS/ARE/WAS/WERE, you unlock the most important verb in English!",
    keyWords: [
      { word: "am", meaning: "हूँ — be verb for I (present)" },
      { word: "is", meaning: "है — be verb for He/She/It (present)" },
      { word: "are", meaning: "हैं/हो — be verb for You/We/They (present)" },
      { word: "was / were", meaning: "था/थे/थी — past tense of be verb" },
    ],
  },

  essay: {
    title: "The Be Verb: The Foundation of English Communication",
    paragraphs: [
      "Among all verbs in the English language, the 'be verb' stands apart as the most fundamental. Without mastering am, is, are, was, and were, fluent English communication is nearly impossible.",
      "The be verb serves multiple grammatical functions. As a linking verb, it connects subjects to descriptions. As a helping verb, it forms continuous tenses. In passive voice, it carries the action.",
      "For Indian English learners, the be verb presents unique challenges because Hindi uses 'hona' (to be) differently. This leads to common errors like 'She is doctor' instead of 'She is a doctor'.",
      "The path to mastery is through daily practice. Write ten sentences using different be verbs every morning. Notice contractions: I'm, she's, they're. Soon, the correct form comes automatically.",
    ],
    keyPoints: [
      "AM for I (only I uses AM — never is or are)",
      "IS for He, She, It, and singular nouns",
      "ARE for You, We, They, and plural nouns",
      "Past: WAS (I/He/She/It) | WERE (You/We/They)",
      "Negative: add NOT | Question: move be verb before subject",
    ],
  },

  dialogue: {
    title: "Old Friends Reconnecting",
    setting: "Ravi meets his old school friend Ananya after 5 years at a coffee shop.",
    lines: [
      { speaker: "Ravi", text: "Ananya! Is that you? It's been so long!", hindi: "अनन्या! क्या तुम हो? बहुत समय बाद!" },
      { speaker: "Ananya", text: "Ravi! Yes, it's me! I am so happy to see you! Where are you working these days?", hindi: "रवि! हाँ, मैं हूँ! मैं तुम्हें देखकर बहुत खुश हूँ! आजकल कहाँ काम कर रहे हो?" },
      { speaker: "Ravi", text: "I am in Bengaluru now. I am a software engineer at a startup. It is very exciting work!", hindi: "मैं अब बेंगलुरु में हूँ। मैं एक startup में software engineer हूँ। बहुत exciting काम है!" },
      { speaker: "Ananya", text: "That's wonderful! I am a teacher now. My students are amazing!", hindi: "यह wonderful है! मैं अब teacher हूँ। मेरे छात्र amazing हैं!" },
      { speaker: "Ravi", text: "Were you always interested in teaching? I remember you were great at explaining things in school.", hindi: "क्या तुम हमेशा से teaching में interested थीं? मुझे याद है school में तुम चीज़ें समझाने में बहुत अच्छी थीं।" },
      { speaker: "Ananya", text: "Yes! I was always passionate about education. This job is perfect for me. I am very happy.", hindi: "हाँ! मैं हमेशा education के बारे में passionate थी। यह job मेरे लिए perfect है। मैं बहुत खुश हूँ।" },
    ],
    notes: [
      "Be verbs used: Is that you? / I am / Where are you / I am / I am / It is / I am / are amazing / Were you / you were / I was / This job is / I am",
      "Contractions in natural speech: It's = It is, That's = That is",
      "Past be verb: 'Were you' (question) and 'I was' (statement)",
      "Be verbs appear multiple times in every natural conversation — they are unavoidable!",
    ],
  },

  summary: [
    "BE VERB = am / is / are (present) | was / were (past)",
    "I → AM | He/She/It → IS | You/We/They → ARE",
    "Past: I/He/She/It → WAS | You/We/They → WERE",
    "Negative: add NOT after be verb | Contractions: isn't / aren't / wasn't / weren't",
    "Question: Move be verb BEFORE subject | Am I? / Is she? / Are they?",
    "Three uses: Linking verb (description) | Helping verb (continuous) | Passive voice",
  ],
};

// ─── Day 5: Demonstrative Pronoun ─────────────────────────────
// This, That, These, Those — pointing to things clearly
const DAY_5_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `Demonstrative pronouns are your POINTING words in English!\n\nEvery day you need to point to things:\n• "This is my phone." (pointing to nearby phone)\n• "That is the manager's office." (pointing to far office)\n• "These are the documents." (pointing to nearby papers)\n• "Those are the products." (pointing to far items)\n\nWithout demonstrative pronouns:\n❌ You cannot clearly show WHICH thing you mean\n❌ You confuse near vs far things\n❌ Your English sounds vague and unclear\n\nIn professional English:\n• "This proposal is excellent."\n• "Those files need to be updated."\n• "Is this the right form?\n\nMaster THIS, THAT, THESE, THOSE and your English becomes precise and clear!`,

  conceptExplanation: `DEMONSTRATIVE PRONOUNS = Words that POINT to things!\n\nFour demonstrative pronouns:\n\n📍 THIS → Near + Singular (1 thing near you)\n   "This is my book." / "This pen is mine."\n\n📍 THAT → Far + Singular (1 thing far away)\n   "That is the principal's office." / "That car is expensive."\n\n📍 THESE → Near + Plural (many things near you)\n   "These are my notes." / "These books belong to me."\n\n📍 THOSE → Far + Plural (many things far away)\n   "Those are the files." / "Those students are brilliant."\n\nSimple Chart:\n          | NEAR  | FAR\n----------|-------|-------\nSINGULAR | THIS  | THAT\nPLURAL   | THESE | THOSE\n\nKey insight: THIS/THESE for near = T-H-I-S has "HI" (come close!)\nTHAT/THOSE for far = THAT/THOSE have extra letters (more distance!)`,

  simpleExplanation: `Simple yaad karo:\n\nEK cheez paas = THIS (यह)\nEK cheez door = THAT (वह)\nKAI cheezein paas = THESE (ये)\nKAI cheezein door = THOSE (वे)\n\nTrick:\nTHIS → THESE (paas waale — both start with 'TH-')\nTHAT → THOSE (door waale — both have 'TH-' + extra letters)\n\nNear = Chhote (THIS/THESE = shorter!)\nFar = Bade (THAT/THOSE = longer!)\n\nExample:\nPaas wali pen (near singular): This is my pen.\nDoor wali building (far singular): That is a hospital.\nPaas wale books (near plural): These are my books.\nDoor wale students (far plural): Those are our seniors.`,

  hindiExplanation: `Demonstrative Pronouns = संकेतवाचक सर्वनाम\n(इशारा करने वाले शब्द)\n\nचार प्रकार:\n• यह (near singular) = THIS\n• वह (far singular) = THAT\n• ये (near plural) = THESE\n• वे (far plural) = THOSE\n\nउदाहरण:\n• यह मेरी किताब है। = This is my book.\n• वह मेरा घर है। = That is my house.\n• ये मेरे notes हैं। = These are my notes.\n• वे मेरे दोस्त हैं। = Those are my friends.\n\nImportant:\nPronoun के रूप में: "This is good." (This = subject)\nAdjective के रूप में: "This book is good." (This describes book)`,

  rules: [
    {
      rule: "THIS = near + singular (one thing close to you)",
      explanation: "Use THIS when pointing to ONE thing that is close to you (within arm's reach or in your vicinity).",
      example: "This is my laptop. / This coffee is hot. / Is this seat taken?",
      exception: "THIS can also refer to something just mentioned: 'She got promoted. This is great news!'",
    },
    {
      rule: "THAT = far + singular (one thing at a distance)",
      explanation: "Use THAT when pointing to ONE thing that is away from you — across the room, outside, or at a distance.",
      example: "That is the CEO's office. / That building is very tall. / Is that your car?",
      exception: "THAT can refer to something mentioned earlier (not in sight): 'She said she was busy. That was an excuse.'",
    },
    {
      rule: "THESE = near + plural (many things close to you)",
      explanation: "Use THESE when pointing to MULTIPLE things that are close to you.",
      example: "These are the project files. / These chairs are comfortable. / Are these your keys?",
      exception: "THESE also works for things in the current time: 'These days, everyone uses smartphones.'",
    },
    {
      rule: "THOSE = far + plural (many things at a distance)",
      explanation: "Use THOSE when pointing to MULTIPLE things that are away from you.",
      example: "Those are the new recruits. / Those buildings are very old. / Are those your colleagues?",
      exception: "THOSE can refer to past things: 'Those were the best days of my life.'",
    },
  ],

  commonMistakes: [
    { wrong: "These is my book.", correct: "This is my book.", explanation: "'These' is plural. For ONE book = THIS. 'These are my books.' (plural books)" },
    { wrong: "That are my friends.", correct: "Those are my friends.", explanation: "'Friends' is plural. For many people far = THOSE. 'That is my friend.' (one friend)" },
    { wrong: "This books are good.", correct: "These books are good.", explanation: "'Books' is plural, so use THESE (plural near) — not THIS (singular near)." },
    { wrong: "Those is very expensive.", correct: "That is very expensive.", explanation: "If pointing to ONE thing far away, use THAT with 'is'. THOSE uses 'are'." },
    { wrong: "Is this are your pen?", correct: "Is this your pen?", explanation: "'This' always takes 'is'. Never mix 'this' with 'are'." },
  ],

  sentencePatterns: [
    {
      pattern: "This/That + is + noun (Singular)",
      hindiPattern: "यह/वह + है + संज्ञा",
      examples: [
        { english: "This is my office badge.", hindi: "यह मेरा office badge है।" },
        { english: "That is the conference room.", hindi: "वह conference room है।" },
        { english: "Is this the correct form?", hindi: "क्या यह सही form है?" },
        { english: "That was an excellent presentation!", hindi: "वह एक excellent presentation था!" },
      ],
    },
    {
      pattern: "These/Those + are + noun (Plural)",
      hindiPattern: "ये/वे + हैं + संज्ञा",
      examples: [
        { english: "These are the meeting notes from today.", hindi: "ये आज की meeting notes हैं।" },
        { english: "Those are the files you requested.", hindi: "वे वो files हैं जो आपने माँगी थीं।" },
        { english: "Are these the latest reports?", hindi: "क्या ये latest reports हैं?" },
        { english: "Those were the best ideas in the meeting.", hindi: "वे meeting में सबसे अच्छे ideas थे।" },
      ],
    },
    {
      pattern: "This/These + noun + is/are (As adjective)",
      hindiPattern: "यह/ये + संज्ञा + है/हैं",
      examples: [
        { english: "This project is very challenging.", hindi: "यह project बहुत challenging है।" },
        { english: "These documents are ready for review.", hindi: "ये documents review के लिए तैयार हैं।" },
        { english: "That idea is brilliant!", hindi: "वह idea brilliant है!" },
        { english: "Those results are impressive.", hindi: "वे results impressive हैं।" },
      ],
    },
  ],

  speakingTips: [
    "Point with your finger while speaking: 'This (point near) is mine. That (point far) is yours.'",
    "THIS sounds like 'diss' (as in dismiss) — short and sharp = near!",
    "Practice: pick up objects around you. 'This pen. These books. That chair. Those windows.'",
    "In presentations: 'This slide shows... / These figures represent... / That graph indicates...'",
    "Time expressions: 'This year / These days / That year / Those times' — demonstratives for time!",
  ],

  memoryTricks: [
    "NEAR = THIS/THESE | FAR = THAT/THOSE. Near rhymes with HERE (this is HERE!)",
    "THIS → THESE: add 'E' for many! THIS + E = THESE! (near ones)",
    "THAT → THOSE: change 'AT' to 'OSE' for many! (far ones)",
    "Quick check: one? → THIS/THAT | many? → THESE/THOSE | near? → THIS/THESE | far? → THAT/THOSE",
    "Use a table: Near-Far x Singular-Plural = 4 boxes. Fill each: THIS, THAT, THESE, THOSE",
  ],

  professionalUsage: [
    { situation: "Presentation/meeting", english: "This chart shows our quarterly growth. These figures represent the total revenue. That graph on the right shows last year's comparison. Those were the challenges we faced.", hindi: "Presentation में demonstratives to point to data/slides।" },
    { situation: "Email attachments", english: "Please find attached this report. These documents contain the final data. Could you review these files and share your feedback?", hindi: "Email में attachments refer करने के लिए।" },
  ],

  dailyUsage: [
    { situation: "Shopping", english: "How much is this? I'll take these. Can you show me that one? Are those on sale?", hindi: "Shopping में demonstratives हर जगह use होते हैं।" },
    { situation: "Giving directions", english: "Take this road. Turn at that building. These streets are one-way. Those signs will guide you.", hindi: "Directions देते समय।" },
  ],

  officeUsage: [
    { situation: "Referring to documents", english: "Please review this proposal. These are the updated terms. That version is outdated. Could you replace those files with the latest ones?", hindi: "Office में documents refer करने के लिए।" },
  ],

  interviewUsage: [
    { situation: "Referring to work samples", english: "This project was my biggest achievement. These were the challenges I faced. That experience taught me resilience. Those results proved my ability.", hindi: "Interview में past work refer करने के लिए।" },
  ],

  story: {
    title: "The Lost Phone",
    paragraphs: [
      "Priya was at the office when she realized her phone was missing. She asked her colleague Rajan: 'Excuse me, is this your phone?' pointing to one on the desk.",
      "Rajan looked up: 'No, that is not mine. Mine is that black one on the table over there.'",
      "Priya looked around. 'What about these phones? Are these anyone's?' She found three phones on a nearby shelf.",
      "The receptionist came over: 'Those are the phones from the lost and found. Someone collected them yesterday. But this one here is different.'",
      "The receptionist picked up a phone from right next to her: 'Is this yours, Priya?'",
      "Priya grabbed it joyfully: 'YES! This is my phone! Thank goodness!' She looked at everyone and laughed: 'I was looking everywhere and this was right here all along!'",
      "Everyone in the office smiled. That moment taught Priya: sometimes what you are looking for is right HERE — just like THIS!",
    ],
    moral: "THIS = right here, right now, near you! THAT = over there, away from you! Master these four words and you will always know how to point clearly in English!",
    keyWords: [
      { word: "this", meaning: "यह — near, singular" },
      { word: "that", meaning: "वह — far, singular" },
      { word: "these", meaning: "ये — near, plural" },
      { word: "those", meaning: "वे — far, plural" },
    ],
  },

  essay: {
    title: "Demonstrative Pronouns: Pointing with Precision in English",
    paragraphs: [
      "Language needs precision. When we want to point to specific things around us, demonstrative pronouns — this, that, these, those — provide the linguistic equivalent of a pointing finger.",
      "The logic is simple yet elegant: two dimensions create four words. The first dimension is distance (near vs far). The second is number (one vs many). Combining these gives us THIS (near-one), THAT (far-one), THESE (near-many), THOSE (far-many).",
      "In professional settings, demonstrative pronouns appear constantly. In presentations, 'This data shows...' and 'Those results indicate...' are indispensable. In emails, 'Please review these files...' and 'That approach was effective...' guide communication.",
      "For Indian English learners, the near/far distinction requires practice, as Hindi uses 'yah' and 'vah' similarly. However, the plural forms 'these' and 'those' often cause confusion because English has separate words while Hindi uses 'ye' and 've' more flexibly.",
    ],
    keyPoints: [
      "THIS = near + singular | THAT = far + singular",
      "THESE = near + plural | THOSE = far + plural",
      "Also work as adjectives: 'this book', 'those people'",
      "Time usage: 'these days', 'that year', 'those times'",
      "After 'is/was' → THIS/THAT | after 'are/were' → THESE/THOSE",
    ],
  },

  dialogue: {
    title: "The Office Tour",
    setting: "New employee Kavya is getting a tour from colleague Deepak.",
    lines: [
      { speaker: "Deepak", text: "Welcome, Kavya! This is our main floor. Those glass cabins are the senior managers' offices.", hindi: "स्वागत है, Kavya! यह हमारा main floor है। वे glass cabins senior managers के offices हैं।" },
      { speaker: "Kavya", text: "It's beautiful! Is this a common area? What are these machines?", hindi: "यह सुंदर है! क्या यह common area है? ये machines क्या हैं?" },
      { speaker: "Deepak", text: "Yes! This open space is for collaboration. These are the printers and scanners. That room over there is the server room — do not enter that area.", hindi: "हाँ! यह open space collaboration के लिए है। ये printers और scanners हैं। वह कमरा server room है — वहाँ मत जाना।" },
      { speaker: "Kavya", text: "Understood! And what about those people near the window?", hindi: "समझ गई! और वे लोग window के पास कौन हैं?" },
      { speaker: "Deepak", text: "Those are our design team members. This floor has 3 teams. Those cubicles on the left are for the data team.", hindi: "वे हमारी design team के members हैं। इस floor पर 3 teams हैं। बाईं तरफ के वे cubicles data team के लिए हैं।" },
      { speaker: "Kavya", text: "This place is amazing! I love this environment!", hindi: "यह जगह amazing है! मुझे यह environment बहुत पसंद है!" },
    ],
    notes: [
      "Near things: 'This is our main floor' / 'These are the printers' / 'This place'",
      "Far things: 'Those glass cabins' / 'That room' / 'Those people' / 'Those cubicles'",
      "Demonstratives can be pronouns (stand alone) or adjectives (describe a noun)",
      "The near/far distinction is context-dependent — point with your hand while practicing!",
    ],
  },

  summary: [
    "THIS = near + singular (1 thing close to you)",
    "THAT = far + singular (1 thing away from you)",
    "THESE = near + plural (many things close to you)",
    "THOSE = far + plural (many things away from you)",
    "Chart: Near+One=THIS | Far+One=THAT | Near+Many=THESE | Far+Many=THOSE",
    "Day 5 complete! Practice: point to 10 things and say 'This is...' or 'These are...'",
  ],
};

// ─── Day 6: Has / Have ─────────────────────────────────────────
const DAY_6_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `HAS and HAVE are used every single day in English!\n\nYou use them to express:\n• POSSESSION: "I have a car." / "She has a degree."\n• EXPERIENCE: "I have visited Delhi." / "He has worked at Google."\n• OBLIGATION: "I have to finish this." / "She has to attend the meeting."\n• DESCRIPTION: "He has blue eyes." / "She has a beautiful voice."\n\nWithout HAS and HAVE, you cannot:\n❌ Talk about what you own\n❌ Describe people properly\n❌ Express completed actions (Present Perfect)\n❌ Say what someone is required to do\n\nHAS and HAVE appear in 70% of all English conversations. Master them today!`,

  conceptExplanation: `HAVE = general usage (I, You, We, They)\nHAS = he, she, it usage (3rd person singular)\n\n📌 POSSESSION (owning something):\n"I have a laptop." / "She has a car." / "They have a big house."\n\n📌 PRESENT PERFECT (completed actions):\n"I have finished the work." / "She has visited London." / "We have completed the project."\n\n📌 HAVE TO / HAS TO (obligation - must do):\n"I have to submit the report." / "He has to attend the meeting."\n\n📌 HAVE + NOUN (expressions):\n"Have breakfast" / "Have lunch" / "Have a meeting" / "Have a rest" / "Have fun"\n\nSimple rule:\nI / You / We / They → HAVE\nHe / She / It → HAS`,

  simpleExplanation: `Have = paas hona / karna\nHas = paas hai (uske liye)\n\nYaad karo:\nMAIN (I) → HAVE\nTUM (You) → HAVE\nHUM (We) → HAVE\nVE (They) → HAVE\n\nVAH (He/She/It) → HAS\n\nExample:\n• I have a pen. (Mere paas pen hai.)\n• She has a pen. (Uske paas pen hai.)\n• We have a meeting. (Hamari meeting hai.)\n• He has a meeting. (Uski meeting hai.)`,

  hindiExplanation: `Have / Has = "के पास होना" या "होना"\n\nHave: I, You, We, They के साथ\nHas: He, She, It के साथ\n\nउदाहरण:\n• मेरे पास एक laptop है। = I have a laptop.\n• उसके पास एक laptop है। (वह = He/She) = He/She has a laptop.\n• हमारे पास बहुत काम है। = We have a lot of work.\n• उनके पास कोई अनुभव नहीं है। = They don't have any experience.\n\nHave to / Has to = करना पड़ता है\n• मुझे जाना पड़ेगा। = I have to go.\n• उसे जाना पड़ेगा। = He has to go.`,

  rules: [
    { rule: "HAVE with I, You, We, They", explanation: "First person (I), second person (you), and plural subjects (we, they) always use HAVE.", example: "I have a meeting at 3 PM. / You have two options. / We have completed the project. / They have the files.", exception: "In questions: 'Do you have...?' / 'Do they have...?' — 'do' is added as helper." },
    { rule: "HAS with He, She, It (and singular nouns)", explanation: "Third person singular subjects always use HAS. This includes he, she, it, and any single person by name.", example: "She has excellent communication skills. / He has 5 years of experience. / The company has 500 employees.", exception: "In questions: 'Does she have...?' / 'Does he have...?' — 'does' is added, and HAS becomes HAVE." },
    { rule: "Have/Has + past participle = Present Perfect", explanation: "HAVE/HAS + past participle forms the present perfect tense — actions completed before now.", example: "I have finished the report. / She has already left. / They have sent the email.", exception: "Irregular verbs: go→gone, do→done, see→seen, take→taken, write→written." },
    { rule: "Have to / Has to = obligation (must)", explanation: "HAVE TO and HAS TO express obligation — something you MUST do. Similar to 'must' but sounds less forceful.", example: "I have to submit this by Friday. / She has to attend the training. / We have to follow company policy.", exception: "HAVE TO is about external obligation. MUST is about personal/internal obligation: 'I must study' (my own decision) vs 'I have to submit' (deadline requires it)." },
  ],

  commonMistakes: [
    { wrong: "She have a meeting.", correct: "She has a meeting.", explanation: "He/She/It = HAS. Never 'she have'." },
    { wrong: "He have completed the project.", correct: "He has completed the project.", explanation: "Present Perfect with He/She = HAS + past participle." },
    { wrong: "I has a car.", correct: "I have a car.", explanation: "I always uses HAVE, never HAS." },
    { wrong: "Does she has time?", correct: "Does she have time?", explanation: "When 'does' is the helper verb, the main verb goes to base form: 'does she HAVE' (not 'has')." },
    { wrong: "I have to going.", correct: "I have to go.", explanation: "After 'have to / has to', always use BASE form of verb — never -ing form." },
  ],

  sentencePatterns: [
    { pattern: "Subject + have/has + noun (Possession)", hindiPattern: "Subject + के पास + noun", examples: [
      { english: "I have three years of experience in marketing.", hindi: "मेरे पास marketing में तीन साल का अनुभव है।" },
      { english: "She has a master's degree from Delhi University.", hindi: "उसके पास दिल्ली University से master's degree है।" },
      { english: "Our company has offices in 10 cities.", hindi: "हमारी company के 10 शहरों में offices हैं।" },
      { english: "He has an excellent track record.", hindi: "उसके पास एक excellent track record है।" },
    ]},
    { pattern: "Subject + have/has + past participle (Present Perfect)", hindiPattern: "Subject + चुका/चुकी है", examples: [
      { english: "I have sent the report to the manager.", hindi: "मैंने manager को report भेज दी है।" },
      { english: "She has already completed the assignment.", hindi: "उसने पहले से ही assignment पूरी कर ली है।" },
      { english: "We have discussed this in the last meeting.", hindi: "हमने पिछली meeting में इस पर चर्चा की है।" },
    ]},
    { pattern: "Subject + have to/has to + base verb (Obligation)", hindiPattern: "Subject + को + करना पड़ता है", examples: [
      { english: "I have to submit the report by Friday.", hindi: "मुझे शुक्रवार तक report submit करनी है।" },
      { english: "She has to attend the client meeting.", hindi: "उसे client meeting में attend करना है।" },
      { english: "We have to update our software.", hindi: "हमें अपना software update करना है।" },
    ]},
  ],

  speakingTips: [
    "Contractions: 'I've' (I have), 'She's' (She has), 'We've' (We have), 'He's' (He has) — natives speak fast!",
    "Present Perfect in conversation: 'Have you eaten?' 'Yes, I've already had lunch.'",
    "DON'T say 'I am having a car.' — possessions don't use continuous! Say 'I have a car.'",
    "Practice the Have/Has distinction daily: 'I have... He has... She has... They have...'",
    "Common expressions: have fun, have time, have a look, have a meeting, have breakfast/lunch/dinner",
  ],

  memoryTricks: [
    "HAS = He/She/It = H — all start with the SAME letter! H for Has, H for He, H for Her/His",
    "HAVE = Everything else (I, You, We, They) — 4 options, all use HAVE",
    "Has to / Have to trick: HAS for HE/SHE, HAVE for the rest — same rule as possession!",
    "Present Perfect shortcut: finished action + relevance now = HAVE/HAS + past participle",
  ],

  professionalUsage: [
    { situation: "In interview about experience", english: "I have worked in the IT industry for 5 years. I have led a team of 10 engineers. I have experience in both frontend and backend development. Our team has delivered 20+ projects successfully.", hindi: "Interview में experience बताने के लिए have/has essential है।" },
    { situation: "Work status updates", english: "I have completed the report. She has reviewed the code. We have finalized the deadline. The client has approved the proposal.", hindi: "Progress updates में present perfect।" },
  ],

  dailyUsage: [
    { situation: "Daily conversations", english: "Have you had breakfast? No, I haven't had time. She has already left. They have a new baby!", hindi: "रोज़ की बातचीत में have/has।" },
  ],

  officeUsage: [
    { situation: "Reporting completions", english: "I have sent the email. He has updated the spreadsheet. We have scheduled the meeting for Thursday.", hindi: "Office में completed tasks report करने के लिए।" },
  ],

  interviewUsage: [
    { situation: "Talking about achievements", english: "I have successfully managed three large-scale projects. I have received the 'Best Employee' award twice. I have experience working with international clients.", hindi: "Achievements बताने के लिए present perfect।" },
  ],

  story: {
    title: "The Job Interview",
    paragraphs: [
      "Vikram has a job interview today. He has prepared well. He has practiced his answers, has ironed his shirt, and has arrived 15 minutes early.",
      "The interviewer begins: 'So, Vikram, what experience do you have?'",
      "Vikram answers confidently: 'I have three years of experience in data analytics. I have worked with Python and SQL. I have also led a team of five people.'",
      "The interviewer asks: 'Has your team completed any major projects?'",
      "Vikram smiles: 'Yes! We have delivered six successful projects. Our latest project has saved the company 30% in operational costs.'",
      "The interviewer nods: 'Excellent! I have one more question. Where do you see yourself in five years?'",
      "Vikram has already thought about this: 'I have a clear goal — to become a data science team lead. I have started learning machine learning to prepare for that role.'",
      "The interviewer was impressed. Vikram has done everything right. He gets the job!",
    ],
    moral: "HAVE and HAS help you talk about experience, achievements, and possession — three things every job interview asks about! Master them and you will impress in any interview.",
    keyWords: [
      { word: "experience", meaning: "अनुभव — knowledge/skill gained from work" },
      { word: "achievement", meaning: "उपलब्धि — something successfully accomplished" },
      { word: "deliver", meaning: "पूरा करके देना — to complete and hand over" },
      { word: "have to", meaning: "करना पड़ता है — obligation to do something" },
    ],
  },

  essay: {
    title: "Have and Has: The Verbs of Possession and Experience",
    paragraphs: [
      "Few verbs are as versatile and essential as 'have' and 'has' in English. They express possession, experience, obligation, and serve as crucial helping verbs in the present perfect tense.",
      "The distinction between 'have' (for I, you, we, they) and 'has' (for he, she, it) follows the same pattern as other verbs in the third person singular — the addition of 's'.",
      "In professional English, the present perfect tense formed with have/has is indispensable: 'I have completed...' 'She has reviewed...' 'We have submitted...' These phrases communicate current relevance of completed actions.",
      "The phrase 'have to / has to' expressing obligation is equally common: 'I have to meet the deadline.' 'She has to attend the training.' Mastering this allows clear expression of duties and requirements.",
    ],
    keyPoints: [
      "I/You/We/They → HAVE | He/She/It → HAS",
      "Have/Has + past participle = Present Perfect (completed action)",
      "Have to / Has to = must (obligation)",
      "No continuous form for possession: 'I have' NOT 'I am having' (for things you own)",
      "In questions with 'does': does → do + have (not has!): 'Does she HAVE time?'",
    ],
  },

  dialogue: {
    title: "Planning the Project",
    setting: "Two colleagues, Neha and Sameer, planning a work project.",
    lines: [
      { speaker: "Neha", text: "Sameer, do you have the updated client list?", hindi: "समीर, क्या तुम्हारे पास updated client list है?" },
      { speaker: "Sameer", text: "Yes, I have it. I have also sent it to your email.", hindi: "हाँ, मेरे पास है। मैंने इसे तुम्हारे email पर भी भेज दिया है।" },
      { speaker: "Neha", text: "Great! Has the manager approved the new budget?", hindi: "अच्छा! क्या manager ने new budget approve किया है?" },
      { speaker: "Sameer", text: "Not yet. He has a meeting with the directors today. He has to review the numbers first.", hindi: "अभी नहीं। उनकी आज directors के साथ meeting है। उन्हें पहले numbers review करने हैं।" },
      { speaker: "Neha", text: "We have to submit the proposal by Monday. Do we have enough time?", hindi: "हमें सोमवार तक proposal submit करनी है। क्या हमारे पास पर्याप्त समय है?" },
      { speaker: "Sameer", text: "We have the whole weekend. I have already prepared 70% of the document. We have to complete the budget section together.", hindi: "हमारे पास पूरा weekend है। मैंने already 70% document तैयार कर लिया है। हमें budget section साथ में complete करना है।" },
    ],
    notes: [
      "Possession: 'I have it', 'He has a meeting', 'We have the weekend'",
      "Present Perfect: 'I have sent', 'I have prepared'",
      "Obligation: 'He has to review', 'We have to submit', 'We have to complete'",
      "Question forms: 'Do you have...?' 'Has the manager...?' 'Do we have...?'",
    ],
  },

  summary: [
    "HAVE: used with I, You, We, They | HAS: used with He, She, It",
    "Possession: I have a car. / She has a degree.",
    "Present Perfect: I have finished. / She has left. / We have submitted.",
    "Obligation: I have to go. / He has to attend. / We have to submit.",
    "In questions with 'does': Does she HAVE (not 'has')? Yes, she has.",
    "Day 6 complete! Use have/has in 10 sentences today!",
  ],
};

// ─── Content Map: Day Number → Content ────────────────────────
// Maps each day number to its specific educational content
// Days with content: 3, 4, 5, 6
// All other days use the smart generic generator
export const SPECIFIC_DAY_CONTENT: Record<number, Partial<LessonContentType>> = {
  3: DAY_3_CONTENT,  // Imperative Sentence
  4: DAY_4_CONTENT,  // Be Verb
  5: DAY_5_CONTENT,  // Demonstrative Pronoun
  6: DAY_6_CONTENT,  // Has / Have
};

// ─── Helper function ──────────────────────────────────────────
// Gets specific content for a day, or null if not available
export function getSpecificDayContent(
  dayNumber: number
): Partial<LessonContentType> | null {
  // Check if we have specific content for this day
  return SPECIFIC_DAY_CONTENT[dayNumber] || null;
}
