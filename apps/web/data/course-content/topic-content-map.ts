// ============================================================
// Comprehensive Topic Content Map — All 75 Days
// Rich, topic-specific educational content per day
// Imported by lesson-content.tsx to show real lesson data
// Each entry has: why, concept, rules, mistakes, story, dialogue
// ============================================================

// Import the shared LessonContent type from day-1 content file
import type { LessonContent as LessonContentType } from "@/data/course-content/day-1-content";
// Import rich handcrafted content for Days 8-14
import { DAYS_8_TO_14_CONTENT } from "@/data/course-content/days-8-14-content";

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

// ─── Day 7: Had ───────────────────────────────────────────────
// Past possession, past perfect — talking about what was owned/done before
const DAY_7_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `HAD is the past tense of HAVE and HAS — and it is one of the most powerful words in storytelling!\n\nEvery time you talk about the PAST, you need HAD:\n• "I had a great job before." (past possession)\n• "She had finished the work when I arrived." (past perfect)\n• "They had a meeting yesterday." (past event)\n• "He had no experience then." (past state)\n\nWithout HAD, you cannot:\n❌ Talk about what someone owned in the past\n❌ Describe events that happened before another past event\n❌ Tell stories about your life, experiences, and history\n❌ Express regret: "I had the chance but I missed it."\n\nHAD is used with ALL subjects — I, he, she, it, you, we, they — making it simpler than HAVE/HAS!\n\nMaster HAD today and unlock past storytelling in English!`,

  conceptExplanation: `HAD = past tense of HAVE and HAS\n\nThe beautiful thing: HAD is the same for EVERYONE!\n• I had / He had / She had / It had / You had / We had / They had\n(No need to choose between two forms — HAD works for all!)\n\n📌 THREE USES OF HAD:\n\n1. PAST POSSESSION (paas tha/thi/the):\n"I had a bicycle when I was young."\n"She had a beautiful house in Mumbai."\n"They had three employees in the beginning."\n\n2. PAST PERFECT (past mein, dono kaam hue — pehle wala kaam HAD se):\nFormula: Subject + HAD + past participle + rest\n"I had finished the work before he arrived."\n"She had already left when the meeting started."\n"They had submitted the report before the deadline."\n\n3. HAD TO (past obligation — past mein karna padha):\n"I had to work late yesterday."\n"She had to cancel the meeting."\n"We had to change our plans."\n\n📌 NEGATIVE:\nSubject + had + NOT (hadn't)\n"I hadn't seen that movie before."\n"She hadn't eaten lunch yet."\n\n📌 QUESTION:\nHad + Subject + past participle?\n"Had you finished the report before the meeting?"\n"Had she ever visited London?"`,

  simpleExplanation: `HAD = "tha/thi/the" ya "kar chuka tha/thi"\n\nSabse easy rule:\nHAVE → Present (ab ke liye)\nHAS → Present (uske liye)\nHAD → PAST (sab ke liye — sabka same!)\n\nExample:\n• I have a car. (ab mere paas hai)\n• I had a car. (pehle mere paas thi)\n\n• She has a job. (ab uske paas hai)\n• She had a job. (pehle uske paas thi)\n\nPast Perfect:\n• I had done it. (main pehle hi kar chuka tha)\n• She had left. (woh pehle ja chuki thi)\n\nHad to = karna pada:\n• I had to go. (mujhe jaana pada)\n• He had to wait. (use wait karna pada)`,

  hindiExplanation: `HAD = "था/थी/थे" का उपयोग — भूतकाल में possession और घटनाएं\n\nHAD सभी subjects के साथ same रहता है:\nI had / He had / She had / You had / We had / They had\n\nतीन उपयोग:\n\n1. भूतकाल में possession (Past Possession):\n• मेरे पास एक साइकिल थी। = I had a bicycle.\n• उसके पास बहुत पैसे थे। = She had a lot of money.\n• उनके पास एक बड़ा घर था। = They had a big house.\n\n2. Past Perfect — जब दो काम past में हुए:\n• जब वह आया, मैं जा चुका था। = When he came, I had already left.\n• Meeting शुरू होने से पहले उसने काम पूरा कर लिया था। = She had finished the work before the meeting started.\n\n3. Had to — भूतकाल में obligation:\n• मुझे कल देर तक काम करना पड़ा। = I had to work late yesterday.\n• उसे meeting cancel करनी पड़ी। = She had to cancel the meeting.\n\nNegative: hadn't (had not)\n• मैंने वह फिल्म पहले नहीं देखी थी। = I hadn't seen that movie before.\n\nQuestion: Had + subject...?\n• क्या उसने report submit की थी? = Had she submitted the report?`,

  rules: [
    {
      rule: "HAD is same for all subjects (no exceptions)",
      explanation: "Unlike have/has where you must choose based on the subject, HAD is used with every subject — I, he, she, it, you, we, they. This makes it the most uniform of the 'have' verbs.",
      example: "I had / You had / He had / She had / It had / We had / They had — all correct!",
      exception: "In very formal/literary writing, 'had' can be inverted: 'Had I known, I would have helped.' (If I had known...)",
    },
    {
      rule: "Past Possession: Subject + had + noun",
      explanation: "Use HAD to say what someone owned, possessed, or experienced in the past — something that may or may not still be true now.",
      example: "I had a dog when I was a child. / She had an amazing opportunity. / They had three offices in Bangalore.",
      exception: "If the possession is still continuing, use HAVE/HAS: 'I have a car.' (still have it) vs 'I had a car.' (no longer have it).",
    },
    {
      rule: "Past Perfect: Subject + had + past participle",
      explanation: "When two events happened in the past, the OLDER event uses HAD + past participle. This shows which action happened first.",
      example: "She had already eaten when I arrived. / By the time the meeting started, he had sent the email. / They had practiced for weeks before the presentation.",
      exception: "If the order of events is clear from words like 'before' or 'after', simple past can sometimes replace past perfect: 'Before she left, she finished the work.' = both acceptable.",
    },
    {
      rule: "Negative: Subject + had + not (hadn't)",
      explanation: "Add 'not' after HAD to make negative sentences. The contraction 'hadn't' is common in speech.",
      example: "I hadn't heard that news before. / She hadn't completed the project. / They hadn't expected this result.",
      exception: "In questions, HAD moves before the subject: 'Hadn't you told him?' — this expresses surprise or expectation.",
    },
    {
      rule: "Had to = was/were obliged to (past obligation)",
      explanation: "HAD TO expresses something that was necessary or required in the past. It's the past form of 'have to'.",
      example: "I had to cancel my leave. / She had to work on the weekend. / They had to revise the entire report.",
      exception: "'Must' has no simple past — we use 'had to' instead: 'I must go' (present) → 'I had to go' (past). Never say 'I must went'.",
    },
  ],

  commonMistakes: [
    { wrong: "I have done it yesterday.", correct: "I had done it yesterday. / I did it yesterday.", explanation: "Past events use 'had done' (past perfect) or simple past 'did'. Never use 'have done' with past time words like 'yesterday'." },
    { wrong: "She had went to Delhi.", correct: "She had gone to Delhi.", explanation: "After HAD, always use the PAST PARTICIPLE — not simple past! 'went' is simple past; 'gone' is past participle." },
    { wrong: "He had to went early.", correct: "He had to go early.", explanation: "After 'had to', always use BASE FORM of the verb. Never 'had to went' or 'had to going'." },
    { wrong: "Before I came, she has left.", correct: "Before I came, she had left.", explanation: "When one past action happened before another past action, use HAD + past participle for the earlier action." },
    { wrong: "I hadn't no money.", correct: "I hadn't any money. / I had no money.", explanation: "Double negative is wrong. Use either 'hadn't any' OR 'had no' — not both together." },
  ],

  sentencePatterns: [
    {
      pattern: "Subject + had + noun (Past Possession)",
      hindiPattern: "Subject + के पास था/थी/थे",
      examples: [
        { english: "I had a very good mentor when I started my career.", hindi: "जब मैंने अपना career शुरू किया, मेरे पास एक बहुत अच्छे mentor थे।" },
        { english: "She had five years of experience before joining our company.", hindi: "हमारी company join करने से पहले उसके पास पाँच साल का अनुभव था।" },
        { english: "Our team had only three people at the beginning.", hindi: "शुरुआत में हमारी team में केवल तीन लोग थे।" },
        { english: "He had no idea about the project requirements.", hindi: "उसे project की requirements के बारे में कोई जानकारी नहीं थी।" },
        { english: "They had a small office in Pune before moving to Mumbai.", hindi: "मुंबई आने से पहले उनका Pune में एक छोटा office था।" },
      ],
    },
    {
      pattern: "Subject + had + past participle (Past Perfect)",
      hindiPattern: "Subject + पहले ही कर चुका था/थी",
      examples: [
        { english: "I had already submitted the report when the manager asked for it.", hindi: "जब manager ने माँगी, तब तक मैं report पहले ही submit कर चुका था।" },
        { english: "She had finished three projects before she got her promotion.", hindi: "Promotion मिलने से पहले वह तीन projects पूरे कर चुकी थी।" },
        { english: "By the time we reached the station, the train had left.", hindi: "जब तक हम station पहुँचे, train जा चुकी थी।" },
        { english: "He had never spoken to a client before that presentation.", hindi: "उस presentation से पहले उसने कभी किसी client से बात नहीं की थी।" },
      ],
    },
    {
      pattern: "Subject + had to + base verb (Past Obligation)",
      hindiPattern: "Subject + को करना पड़ा",
      examples: [
        { english: "I had to stay late in the office to finish the deadline.", hindi: "Deadline पूरी करने के लिए मुझे office में देर तक रुकना पड़ा।" },
        { english: "She had to cancel all her meetings due to the emergency.", hindi: "Emergency के कारण उसे अपनी सभी meetings cancel करनी पड़ीं।" },
        { english: "We had to revise the entire proposal after the client's feedback.", hindi: "Client के feedback के बाद हमें पूरा proposal दोबारा बनाना पड़ा।" },
      ],
    },
  ],

  speakingTips: [
    "HAD sounds like 'haed' — practice saying it clearly, don't swallow the 'd'",
    "Short form: 'I'd' = 'I had' in speech: 'I'd finished before he came.'",
    "Storytelling with HAD: 'When I was young, I had a dream. I had decided to...' — HAD creates beautiful narrative flow",
    "Practice the sequence: 'Before X, I had already Y.' — this pattern is key to past perfect",
    "Contractions: I'd, she'd, he'd, we'd, they'd — all mean '[pronoun] had' in context",
    "In interviews, use past perfect to show experience timeline: 'By the time I joined, I had already completed...'",
  ],

  memoryTricks: [
    "HAD = Has And Done (past!) — it's what HAVE/HAS looked like BEFORE!",
    "HAD = same for everyone! I had, you had, she had, they had — no changes!",
    "HAVE → present | HAD → past. Think: 'I HAVE it NOW' vs 'I HAD it THEN'",
    "Past Perfect sequence: HAD = the OLDER action. 'She had left' (first) 'before I came' (second).",
    "'Had to' = 'had' + 'to' = past + must. Past Must = Had To!",
    "Story trick: Start any past story with HAD: 'Once, there had been a village where...' — instantly feels like a story!",
  ],

  professionalUsage: [
    { situation: "Explaining work history in interview", english: "Before joining this role, I had worked in the banking sector for two years. I had managed a team of eight people. We had delivered three major projects ahead of schedule.", hindi: "Interview में past experience बताने के लिए past perfect essential है।" },
    { situation: "Project post-mortem email", english: "By the time we received the client feedback, our team had already revised the design twice. We had sent three versions before the final approval came. The project had consumed more time than estimated.", hindi: "Project completion के बाद summary email में past perfect।" },
    { situation: "Explaining missed deadline", english: "I apologize for the delay. I had planned to submit by Friday, but I had to handle an urgent issue that came up. I had no way to foresee this situation.", hindi: "Delay explain करते समय — had to और past perfect।" },
  ],

  dailyUsage: [
    { situation: "Sharing childhood memories", english: "I had a dog when I was 10 years old. We had a huge garden. I had never traveled by plane before that school trip.", hindi: "बचपन की यादें share करना।" },
    { situation: "Explaining why something was missed", english: "Sorry I missed the party. I had to work late. I had planned to come but couldn't.", hindi: "किसी event miss करने का कारण बताना।" },
  ],

  officeUsage: [
    { situation: "Status update to manager", english: "By the time the client called, we had already prepared the revised quote. I had sent it to the team for review. They had approved it before the call.", hindi: "Manager को timeline और status बताना।" },
  ],

  interviewUsage: [
    { situation: "Explaining career progression", english: "By the time I applied for the senior role, I had already led two successful projects. I had built strong relationships with international clients. I had also completed a certification in project management.", hindi: "Senior role के लिए readiness prove करना।" },
  ],

  story: {
    title: "The Project That Changed Everything",
    paragraphs: [
      "In 2018, Anjali had a small startup with just three employees. She had a dream — to build an app that would help millions of people learn new skills.",
      "But the journey wasn't easy. Before she could launch the app, she had to solve hundreds of technical problems. She had worked for 14 hours a day for six months straight.",
      "By the time investors came knocking, Anjali had already built a working prototype. She had tested it with over 500 users. Her team had gathered valuable feedback.",
      "During the investor meeting, Anjali explained: 'Before this presentation, we had already achieved 10,000 downloads without any marketing budget. Our users had given us an average rating of 4.8 stars.'",
      "The investors were amazed. They had never seen such dedication. 'We had planned to invest in three companies this quarter,' one investor said, 'but we hadn't met anyone quite like you.'",
      "Anjali got the funding. She had worked hard for years. She had faced every obstacle with courage. And she had never given up her dream. That is why she succeeded.",
    ],
    moral: "HAD tells the story of what came before — your preparation, your struggles, your foundation. Master HAD and you can narrate your entire journey in English!",
    keyWords: [
      { word: "had", meaning: "था/थी/थे — past possession or past perfect" },
      { word: "had to", meaning: "करना पड़ा — past obligation" },
      { word: "had already", meaning: "पहले से ही कर चुका था — emphasizes earlier completion" },
      { word: "hadn't", meaning: "नहीं किया था — past negative" },
    ],
  },

  essay: {
    title: "HAD: The Gateway to English Storytelling",
    paragraphs: [
      "The word 'had' is far more powerful than its three letters suggest. As the past tense of both 'have' and 'has', it is the single key that unlocks all past-tense expression in English.",
      "Unlike its present-tense counterparts — where 'have' is used for some subjects and 'has' for others — 'had' applies uniformly to all subjects. I had, you had, he had, she had, we had, they had. This simplicity makes it easier to use, even as its grammatical functions remain sophisticated.",
      "The past perfect tense, formed with 'had' plus a past participle, allows speakers to layer time — describing not just what happened in the past, but establishing which event came first. 'By the time she arrived, I had finished the report' paints a precise picture of two events and their sequence.",
      "In professional English, 'had' appears constantly in interviews, reports, and presentations where speakers describe their history, achievements, and past responsibilities. Mastering 'had' is essential for any professional communicator.",
    ],
    keyPoints: [
      "HAD = past tense of HAVE and HAS — same for ALL subjects",
      "Past possession: 'I had a car.' / 'She had an opportunity.'",
      "Past perfect: HAD + past participle = action that happened before another past action",
      "Had to = past obligation (must → had to in past)",
      "Negative: hadn't | Question: Had + subject + past participle?",
    ],
  },

  dialogue: {
    title: "The Job Interview Flashback",
    setting: "Rohit is in a job interview. The interviewer asks about his past experience.",
    lines: [
      { speaker: "Interviewer", text: "Tell me about your previous job. What had you achieved before leaving?", hindi: "अपनी पिछली job के बारे में बताइए। छोड़ने से पहले आपने क्या achieve किया था?" },
      { speaker: "Rohit", text: "Before I left, I had led a team of 12 people. We had successfully delivered a mobile app with over 50,000 downloads.", hindi: "छोड़ने से पहले, मैं 12 लोगों की team lead कर चुका था। हमने एक mobile app successfully deliver की थी जिसके 50,000+ downloads थे।" },
      { speaker: "Interviewer", text: "Impressive! Had you worked with international clients before?", hindi: "प्रभावशाली! क्या आप पहले international clients के साथ काम कर चुके थे?" },
      { speaker: "Rohit", text: "Yes. Before that project, I hadn't had much exposure, but I had taken a communication skills course to prepare myself.", hindi: "हाँ। उस project से पहले, मुझे ज़्यादा exposure नहीं था, लेकिन मैंने खुद को तैयार करने के लिए communication skills course किया था।" },
      { speaker: "Interviewer", text: "What challenges had you faced in that role?", hindi: "उस role में आपको किन challenges का सामना करना पड़ा था?" },
      { speaker: "Rohit", text: "We had to work across three different time zones. Initially, I had to adjust my schedule completely. It was tough, but I had to manage it — and I did.", hindi: "हमें तीन अलग-अलग time zones में काम करना पड़ता था। शुरुआत में, मुझे अपना schedule पूरी तरह बदलना पड़ा। यह कठिन था, लेकिन manage करना पड़ा — और मैंने किया।" },
    ],
    notes: [
      "Past possession: 'I had led' / 'We had delivered' — things achieved in the past",
      "Past perfect: 'had you worked' — asking about experience before another point",
      "Negative: 'I hadn't had much exposure' — things lacking in the past",
      "Had to: 'I had to adjust' / 'I had to manage' — past obligations",
      "This dialogue shows how past perfect impresses interviewers — use it!",
    ],
  },

  summary: [
    "HAD = past tense of HAVE/HAS — same for ALL subjects (I/he/she/you/we/they)",
    "Past Possession: I had a car. / She had 5 years of experience.",
    "Past Perfect: Subject + HAD + past participle (before another past event)",
    "Had to = was obliged to (past must): I had to stay late. / She had to cancel.",
    "Negative: hadn't (had not) | Question: Had + subject + past participle?",
    "Day 7 complete! Use HAD to tell a story about your past in 5 sentences!",
  ],
};

// ─── Day 8: Will Have (Future Perfect) ───────────────────────
// Expressing completed actions in the future
const DAY_8_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `WILL HAVE is the future perfect tense — one of the most impressive tenses in English!\n\nYou use WILL HAVE when you want to say:\n"By some future time, this action will already be FINISHED."\n\nReal-life examples:\n• "By Friday, I will have submitted all the reports."\n• "By next year, she will have completed her MBA."\n• "By the time you read this, we will have launched the product."\n• "By 2025, they will have served one million customers."\n\nWhy learn this?\n✓ Makes your English sound advanced and professional\n✓ Essential for project planning and timelines\n✓ Impresses in interviews and presentations\n✓ Shows you can think ahead and commit to future completions\n\nMost Indian English learners don't know this tense — learning it puts you ahead of 90% of learners!`,

  conceptExplanation: `WILL HAVE = Future Perfect Tense\n\nFormula:\nSubject + WILL HAVE + past participle\n\nThis tense talks about an action that WILL BE COMPLETE before a specific future time.\n\nThink of it this way:\nPresent Perfect: "I HAVE finished." (finished, relevant now)\nPast Perfect: "I HAD finished." (finished before another past event)\nFuture Perfect: "I WILL HAVE finished." (will finish before a future point)\n\n📌 COMMON STRUCTURE:\nBy + future time + Subject + will have + past participle\n\n"By Monday, I will have completed the task."\n"By the end of the year, she will have saved enough money."\n"By the time you arrive, we will have prepared everything."\n\n📌 NEGATIVE:\nSubject + will not have (won't have) + past participle\n"I won't have finished by 5 PM."\n"They won't have arrived by then."\n\n📌 QUESTION:\nWill + Subject + have + past participle?\n"Will you have submitted the report by Friday?"\n"Will she have recovered by next week?"\n\n📌 KEY TIME MARKERS:\n• By [time]: "By Monday" / "By next year" / "By the time"\n• Before [event]: "Before she arrives" / "Before the meeting"\n• In [duration]: "In two hours, we will have been here for a day"`,

  simpleExplanation: `Will Have = future mein, ek kaam tab tak ho chuka hoga!\n\nFormula: WILL HAVE + past participle\n\nSoch: koi future point hai → us point tak kaam COMPLETE hoga\n\nExample:\n• "By tonight, I will have finished the work."\n  (aaj raat tak kaam khatam ho chuka hoga)\n\n• "By next month, she will have got her results."\n  (agle mahine tak uske results aa chuke honge)\n\n• "By the time he comes, I will have cooked dinner."\n  (jab tak woh aayega, main khaana bana chuka/chuki hounga/hooongi)\n\nNegative: won't have + past participle\n"I won't have finished by 3 PM."\n(3 baje tak main kaam khatam nahi kar paunga)\n\nQuestion: Will + subject + have + past participle?\n"Will you have left by then?"`,

  hindiExplanation: `Will Have = भविष्य में किसी समय तक काम पूरा हो चुका होगा\n\nFormula:\nSubject + will have + past participle\n\nयह tense तब use करते हैं जब:\nभविष्य के किसी specific time से पहले कोई काम complete हो जाएगा\n\nउदाहरण:\n• शुक्रवार तक मैं report submit कर चुका होऊँगा।\n  = By Friday, I will have submitted the report.\n\n• अगले साल तक वह MBA complete कर चुकी होगी।\n  = By next year, she will have completed her MBA.\n\n• जब तक तुम आओगे, हम खाना बना चुके होंगे।\n  = By the time you come, we will have cooked the food.\n\nNegative:\n• मैं 5 बजे तक काम खत्म नहीं कर पाऊँगा।\n  = I won't have finished the work by 5 PM.\n\nQuestion:\n• क्या वह शुक्रवार तक report submit कर चुका होगा?\n  = Will he have submitted the report by Friday?\n\nKey Words जो इस tense के साथ आते हैं:\nBy (तक) / By the time (जब तक) / Before (से पहले) / In [time] (में)`,

  rules: [
    {
      rule: "Formula: Subject + will have + past participle",
      explanation: "The future perfect always uses 'will have' followed by the past participle (3rd form) of the main verb. This is the same for ALL subjects.",
      example: "I will have finished. / She will have arrived. / They will have submitted. / We will have completed.",
      exception: "'Shall have' is occasionally used instead of 'will have' with I/We in very formal British English, but 'will have' is universally acceptable.",
    },
    {
      rule: "Always used with a future time reference",
      explanation: "The future perfect describes an action completed BEFORE a specific future point. It always needs a 'by', 'before', or 'by the time' phrase to anchor the future time.",
      example: "By Friday, I will have submitted the report. / Before the party, she will have prepared the food. / By the time he wakes up, she will have already left.",
      exception: "Sometimes the future time is implied by context: 'Don't worry — I will have fixed it.' (before a certain expected event)",
    },
    {
      rule: "Irregular past participles are essential",
      explanation: "Many common verbs have irregular past participles. You must use the correct form after 'will have'.",
      example: "write → written: 'I will have written the email.' / go → gone: 'She will have gone by then.' / do → done: 'We will have done it.' / finish → finished (regular)",
      exception: "Regular verbs simply add -ed: finish→finished, submit→submitted, complete→completed, deliver→delivered.",
    },
    {
      rule: "Negative: won't have + past participle",
      explanation: "To say an action will NOT be complete by a future time, use 'won't have' (or 'will not have') before the past participle.",
      example: "I won't have received the results by tomorrow. / She won't have arrived by 6 PM. / They won't have finished the audit before the deadline.",
      exception: "Don't confuse 'won't have' (future perfect negative) with 'won't be having' (future continuous negative) — they mean different things.",
    },
    {
      rule: "Question: Will + subject + have + past participle?",
      explanation: "In questions, 'will' moves before the subject, and 'have' stays with the past participle.",
      example: "Will you have completed the training by Monday? / Will she have left by the time we arrive? / Will they have submitted all documents?",
      exception: "With 'by the time' in questions: 'Will they have finished by the time we need the results?' — the question word can extend the sentence.",
    },
  ],

  commonMistakes: [
    { wrong: "By Monday I will have finish.", correct: "By Monday, I will have finished.", explanation: "After 'will have', always use PAST PARTICIPLE — 'finished' not 'finish'. Regular verbs add -ed." },
    { wrong: "She will have went by then.", correct: "She will have gone by then.", explanation: "'Went' is simple past — NOT past participle. 'Gone' is the past participle of 'go'. Will have + PAST PARTICIPLE!" },
    { wrong: "I will have completed it yesterday.", correct: "I will have completed it by tomorrow.", explanation: "Future perfect must use a FUTURE time marker. 'Yesterday' is past — can't be used with 'will have'." },
    { wrong: "Will she has completed?", correct: "Will she have completed?", explanation: "In future perfect questions: WILL + subject + HAVE (not 'has'). 'Has' is only for present perfect." },
    { wrong: "By tonight, I will have been finished.", correct: "By tonight, I will have finished.", explanation: "Don't add 'been' unnecessarily. 'Will have finished' is correct. 'Will have been finished' would mean passive voice." },
  ],

  sentencePatterns: [
    {
      pattern: "By + time + Subject + will have + past participle",
      hindiPattern: "समय + तक + Subject + कर चुका होगा",
      examples: [
        { english: "By Friday, I will have submitted all the quarterly reports.", hindi: "शुक्रवार तक मैं सभी quarterly reports submit कर चुका होऊँगा।" },
        { english: "By next month, she will have completed her certification course.", hindi: "अगले महीने तक वह अपना certification course complete कर चुकी होगी।" },
        { english: "By the end of this year, they will have served over one lakh customers.", hindi: "इस साल के अंत तक वे एक लाख से अधिक customers को serve कर चुके होंगे।" },
        { english: "By the time the manager arrives, we will have prepared the presentation.", hindi: "जब तक manager आएंगे, हम presentation तैयार कर चुके होंगे।" },
        { english: "By 2025, our company will have expanded to five new countries.", hindi: "2025 तक हमारी company पाँच नए देशों में expand कर चुकी होगी।" },
      ],
    },
    {
      pattern: "Subject + will have + past participle + before + event",
      hindiPattern: "Subject + घटना से पहले + कर चुका होगा",
      examples: [
        { english: "I will have sent the email before the meeting starts.", hindi: "Meeting शुरू होने से पहले मैं email भेज चुका होऊँगा।" },
        { english: "She will have reviewed the document before you present it.", hindi: "Presentation से पहले वह document review कर चुकी होगी।" },
        { english: "We will have trained all new employees before the product launch.", hindi: "Product launch से पहले हम सभी नए employees को train कर चुके होंगे।" },
      ],
    },
    {
      pattern: "Will + Subject + have + past participle + by [time]?",
      hindiPattern: "क्या Subject [समय] तक [काम] कर चुका होगा?",
      examples: [
        { english: "Will you have finished the project by Monday?", hindi: "क्या तुम सोमवार तक project finish कर चुके होगे?" },
        { english: "Will she have received the offer letter by next week?", hindi: "क्या उसे अगले हफ्ते तक offer letter मिल चुका होगा?" },
        { english: "Will the team have tested all the features before deployment?", hindi: "क्या team deployment से पहले सभी features test कर चुकी होगी?" },
      ],
    },
  ],

  speakingTips: [
    "Practice the rhythm: 'By FRIDAY, I will have FINISHED' — stress the time marker and main verb",
    "Quick form in speech: 'I'll have done it by then.' — 'will' contracts to 'll' in natural speech",
    "Use future perfect in project updates: 'By our next call, we'll have completed phase one.'",
    "Avoid overusing it — use for planned completions, not casual talk. 'By 7 PM, I'll have reached home.' (planning)",
    "In presentations: 'By the end of this presentation, you will have learned three key concepts.' — powerful opener!",
    "Practice with daily goals: 'By tonight, I will have done 30 minutes of English practice.'",
  ],

  memoryTricks: [
    "WILL HAVE = 'Will be done' — it's like a promise about future completion!",
    "Three perfects: HAVE done (now finished) → HAD done (then finished) → WILL HAVE done (future finished)",
    "The 'By' rule: WILL HAVE always needs a 'BY' or 'BEFORE' — no 'by/before' = probably wrong tense!",
    "Sequence: WILL HAVE = action finishes FIRST, then the future time arrives. Action → Future Time.",
    "Real example: 'By the time I'm 30, I will have traveled to 5 countries.' — goals in future perfect!",
  ],

  professionalUsage: [
    { situation: "Project timeline in business proposal", english: "By March 31st, we will have completed Phase 1 of development. By June, we will have launched the beta version. By year-end, we will have onboarded 10,000 users.", hindi: "Business proposal में milestones express करने के लिए।" },
    { situation: "Reassuring a client", english: "Don't worry — by the time of your review meeting, we will have addressed all the concerns you raised. Our team will have tested every feature thoroughly.", hindi: "Client को assure करना कि काम हो जाएगा।" },
    { situation: "Interview — future plans", english: "In five years, I will have built expertise in machine learning. I will have led at least two major projects. I will have grown into a senior technical role.", hindi: "Interview में 5-year plan बताने के लिए।" },
  ],

  dailyUsage: [
    { situation: "Planning a trip", english: "By the time we reach Goa, we will have been traveling for 10 hours! But it will be worth it. By evening, we will have checked in and settled.", hindi: "Trip planning में future perfect।" },
    { situation: "Making a promise", english: "Don't worry about dinner — by the time you come home, I will have cooked everything. I will have also cleaned the house!", hindi: "Promise करना — future perfect।" },
  ],

  officeUsage: [
    { situation: "Reporting to manager on progress", english: "Sir, by end of day, I will have sent the revised proposal to the client. By Thursday, I will have received their feedback and incorporated all changes.", hindi: "Manager को progress और ETA बताना।" },
  ],

  interviewUsage: [
    { situation: "Describing future goals", english: "In the next three years, I will have mastered cloud architecture. I will have led a team of at least 10 engineers. I will have delivered high-impact projects for the organization.", hindi: "Career goals interview में confidently express करना।" },
  ],

  story: {
    title: "The 75-Day Promise",
    paragraphs: [
      "On Day 1 of his English course, Rajan made a promise to himself: 'By Day 75, I will have transformed my English completely.'",
      "He wrote his goals in a notebook: 'By the end of this month, I will have learned 300 new words. By Day 30, I will have mastered basic grammar. By Day 50, I will have practiced speaking every single day.'",
      "Some days were hard. By Week 2, Rajan had already missed two sessions. But he kept going. 'By Friday, I will have caught up with all the missed lessons,' he promised.",
      "By Day 50, Rajan could speak confidently in conversations. 'By Day 75, I will have given my first full presentation in English,' he wrote in his diary.",
      "On Day 74, his manager called him in. 'Rajan, we have a client presentation tomorrow. Can you handle it?' Rajan smiled. 'Absolutely. By tomorrow evening, I will have delivered my best presentation ever.'",
      "On Day 75, Rajan stood before 30 people and spoke for 20 minutes in flawless English. His course was complete. As he had promised — by Day 75, he had transformed himself completely.",
    ],
    moral: "WILL HAVE helps you make powerful promises about the future. Set your goals using future perfect: 'By [date], I will have [achievement].' This turns dreams into commitments!",
    keyWords: [
      { word: "will have completed", meaning: "complete कर चुका/चुकी होगा — future completion" },
      { word: "by the end of", meaning: "के अंत तक — a future time marker" },
      { word: "by the time", meaning: "जब तक — when a future event happens" },
      { word: "won't have", meaning: "नहीं कर पाएगा — future perfect negative" },
    ],
  },

  essay: {
    title: "Will Have: Making Commitments About the Future",
    paragraphs: [
      "The future perfect tense — expressed through 'will have' plus a past participle — is perhaps the most sophisticated of English tenses. It allows speakers to describe actions that will be completed before a specific future moment.",
      "What makes 'will have' remarkable is how it bridges present intention and future completion. When a manager says 'By Monday, I will have reviewed all the applications', they are not just predicting — they are committing to a finished state at a future point in time.",
      "In professional settings, the future perfect is indispensable for project planning, client communication, and goal-setting. 'By our next quarterly review, we will have implemented all recommended changes' is a professional commitment that builds trust and credibility.",
      "For English learners, mastering this tense signals advanced proficiency. While many speakers manage with simple future ('I will finish'), those who can deploy future perfect ('I will have finished by then') demonstrate a nuanced command of English that truly impresses.",
    ],
    keyPoints: [
      "Formula: Subject + will have + past participle",
      "Always used with 'by', 'before', or 'by the time' (future time reference)",
      "Same for ALL subjects — no variation",
      "Negative: won't have + past participle",
      "Question: Will + subject + have + past participle?",
    ],
  },

  dialogue: {
    title: "Planning the Project Deadline",
    setting: "Team leader Sunita and her colleague Aditya discuss project milestones.",
    lines: [
      { speaker: "Sunita", text: "Aditya, will we have completed the testing phase by Thursday?", hindi: "Aditya, क्या हम गुरुवार तक testing phase complete कर चुके होंगे?" },
      { speaker: "Aditya", text: "Yes! By Wednesday evening, I will have run all the test cases. By Thursday morning, I will have sent you the full report.", hindi: "हाँ! बुधवार शाम तक मैं सभी test cases run कर चुका होऊँगा। गुरुवार सुबह तक मैं तुम्हें पूरी report भेज चुका होऊँगा।" },
      { speaker: "Sunita", text: "Perfect. The client review is on Friday. By then, will you have fixed all the bugs too?", hindi: "बढ़िया। Client review शुक्रवार को है। तब तक क्या तुम सभी bugs भी fix कर चुके होगे?" },
      { speaker: "Aditya", text: "Most of them, yes. But honestly, I won't have resolved the payment gateway issue by Friday — that will take more time.", hindi: "ज़्यादातर, हाँ। लेकिन honestly, payment gateway issue मैं शुक्रवार तक resolve नहीं कर पाऊँगा — उसमें ज़्यादा समय लगेगा।" },
      { speaker: "Sunita", text: "Okay, that's fair. I'll inform the client. By next Tuesday, will you have resolved everything completely?", hindi: "ठीक है, यह fair है। मैं client को inform करूँगी। अगले मंगलवार तक, क्या तुम सब कुछ completely resolve कर चुके होगे?" },
      { speaker: "Aditya", text: "Absolutely. By next Monday end-of-day, I will have fixed everything and pushed the final build.", hindi: "बिल्कुल। अगले सोमवार दिन के अंत तक, मैं सब कुछ fix करके final build push कर चुका होऊँगा।" },
    ],
    notes: [
      "Future perfect for deadlines: 'will have completed', 'will have run', 'will have sent'",
      "Negative future perfect: 'I won't have resolved' — honest about what WON'T be done",
      "Question form: 'Will we have completed?' / 'Will you have fixed?'",
      "This dialogue shows how future perfect is ESSENTIAL in professional project planning",
    ],
  },

  summary: [
    "WILL HAVE = Future Perfect — action completed before a future time",
    "Formula: Subject + WILL HAVE + past participle (same for all subjects)",
    "Always pair with: By [time] / Before [event] / By the time [event]",
    "Negative: won't have + past participle | Question: Will + subject + have + past participle?",
    "Key irregular participles: go→gone, do→done, write→written, see→seen, take→taken",
    "Day 8 complete! Write 5 goals using 'By [date], I will have...'",
  ],
};

// ─── Day 9: Use of There ──────────────────────────────────────
// There is, There are, There was, There were — existence and location
const DAY_9_CONTENT: Partial<LessonContentType> = {
  whyLearnThis: `"THERE IS" and "THERE ARE" are among the TOP 10 most-used phrases in English!\n\nYou need them EVERY single day:\n• "There is a meeting tomorrow." (kal meeting hai)\n• "There are 50 employees in our office." (hamare office mein 50 log hain)\n• "There was a problem with the server." (server mein problem thi)\n• "There were many mistakes in the report." (report mein kai galtiyan thin)\n\nWithout THERE IS/ARE, you cannot:\n❌ Tell if something exists: "There is a solution."\n❌ Describe quantities: "There are three options."\n❌ Report situations: "There is a traffic jam."\n❌ Set scenes: "There was a young man who..."\n\nThis is one of the MOST COMMON patterns in English:\n✓ News reports: "There are reports of..."\n✓ Emails: "There is an update regarding..."\n✓ Conversation: "Is there any coffee left?"\n✓ Stories: "Once there was a king..."\n\nLearn this today and immediately sound more natural in English!`,

  conceptExplanation: `THERE IS / THERE ARE / THERE WAS / THERE WERE\n\nThis structure introduces something — it says "something EXISTS" somewhere.\n\nKey insight: "THERE" here is NOT a place! It's a grammatical structure.\n\n"There is a book on the table."\n(NOT saying table is somewhere called 'there'!)\n(Saying: A book exists on the table.)\n\n📌 FOUR FORMS:\n1. THERE IS (present, singular): 1 thing exists\n   "There is a meeting at 3 PM."\n\n2. THERE ARE (present, plural): many things exist\n   "There are 10 people in the queue."\n\n3. THERE WAS (past, singular): 1 thing existed\n   "There was a mistake in the email."\n\n4. THERE WERE (past, plural): many things existed\n   "There were 50 candidates in the interview."\n\n📌 FUTURE:\nThere will be + noun\n"There will be a training session next week."\n\n📌 NEGATIVE:\nThere is no / There isn't any\n"There is no time." / "There aren't any chairs."\n\n📌 QUESTION:\nIs there...? / Are there...? / Was there...? / Were there...?\n"Is there any coffee?" / "Are there any vacancies?"`,

  simpleExplanation: `THERE IS/ARE = "hai/hain" ya "tha/the" kuch kisi jagah\n\nFormula:\nEK cheez → THERE IS\nKAI cheezein → THERE ARE\n\nPresent:\n• There is a dog. (Ek kutta hai.)\n• There are two dogs. (Do kutte hain.)\n\nPast:\n• There was a dog. (Ek kutta tha.)\n• There were two dogs. (Do kutte the.)\n\nFuture:\n• There will be a dog. (Ek kutta hoga.)\n\nNegative:\n• There is no problem. (Koi samasya nahi hai.)\n• There are no chairs. (Koi kursi nahi hain.)\n\nQuestion:\n• Is there a problem? (Kya koi samasya hai?)\n• Are there any chairs? (Kya koi kursi hain?)`,

  hindiExplanation: `There is / There are = "है/हैं" या "था/थे" — किसी चीज़ का अस्तित्व बताना\n\nचार रूप:\n1. There is: एक चीज़ present में\n   • एक meeting है। = There is a meeting.\n   • एक problem है। = There is a problem.\n\n2. There are: अनेक चीज़ें present में\n   • तीन options हैं। = There are three options.\n   • बहुत लोग हैं। = There are many people.\n\n3. There was: एक चीज़ past में\n   • कल एक meeting थी। = There was a meeting yesterday.\n   • एक गलती थी। = There was a mistake.\n\n4. There were: अनेक चीज़ें past में\n   • कई candidates थे। = There were many candidates.\n   • बहुत समस्याएँ थीं। = There were many problems.\n\nFuture: There will be\n• कल एक training होगी। = There will be a training tomorrow.\n\nNegative: There is no / There isn't any\n• कोई समय नहीं है। = There is no time.\n• कोई vacancy नहीं है। = There is no vacancy.\n\nQuestion: Is there / Are there?\n• क्या कोई solution है? = Is there any solution?\n• क्या कोई chairs हैं? = Are there any chairs?`,

  rules: [
    {
      rule: "THERE IS with singular nouns (one thing)",
      explanation: "Use 'there is' when the noun that follows is singular (just one person or thing). The be verb agrees with the noun that comes AFTER 'there', not with 'there' itself.",
      example: "There is a problem with the internet. / There is one candidate waiting. / There is a solution to every problem.",
      exception: "When listing mixed singular and plural: 'There is one pen and two books.' — some speakers use 'is' matching the first item (informal). Formally, use the plural: 'There are one pen and two books' if pen comes last.",
    },
    {
      rule: "THERE ARE with plural nouns (many things)",
      explanation: "Use 'there are' when the noun that follows is plural (more than one). Always use plural be verb when the noun is plural.",
      example: "There are 15 people in the meeting. / There are several options available. / There are no vacancies at this time.",
      exception: "Informal speech sometimes uses 'there's' even with plural in fast conversation: 'There's a lot of things to do.' — grammatically incorrect but very common in casual speech. Avoid in writing.",
    },
    {
      rule: "THERE WAS (past singular) / THERE WERE (past plural)",
      explanation: "For past tense, use 'there was' for one thing and 'there were' for multiple things. These are simply the past forms of 'there is/are'.",
      example: "There was a traffic jam on the highway. / There were three errors in the report. / There was no electricity for two hours. / There were 200 people at the event.",
      exception: "'There was' can be used at the start of stories: 'There was once a king...' — this is a storytelling convention in English.",
    },
    {
      rule: "THERE WILL BE for future existence",
      explanation: "Use 'there will be' to talk about things that will exist or happen in the future. It works for both singular and plural nouns.",
      example: "There will be a holiday next week. / There will be many challenges ahead. / There will be a new policy from April.",
      exception: "You can also say 'there's going to be' for a planned/predicted future: 'There's going to be a storm tonight.'",
    },
    {
      rule: "Negative: There is/are NO + noun OR There isn't/aren't any + noun",
      explanation: "Two ways to make 'there' sentences negative: (1) 'no' + noun, (2) 'isn't/aren't any' + noun. Both mean the same but 'no' is more emphatic.",
      example: "There is no parking available. / There isn't any parking available. / There are no options left. / There aren't any options left.",
      exception: "'There is nothing' (no thing) and 'There is nobody' (no person) are also common: 'There is nothing to worry about.' / 'There is nobody in the office.'",
    },
  ],

  commonMistakes: [
    { wrong: "There are a dog in the garden.", correct: "There is a dog in the garden.", explanation: "'A dog' is singular — use THERE IS. 'There are' needs a plural noun: 'There are dogs.'" },
    { wrong: "There is many problems.", correct: "There are many problems.", explanation: "'Many problems' is plural — use THERE ARE. 'There is' needs singular: 'There is a problem.'" },
    { wrong: "Is there any chairs?", correct: "Are there any chairs?", explanation: "'Chairs' is plural — use ARE THERE. 'Is there' is for singular: 'Is there a chair?'" },
    { wrong: "There is no any solution.", correct: "There is no solution. / There isn't any solution.", explanation: "Never use 'no' and 'any' together. Use EITHER 'there is no solution' OR 'there isn't any solution' — not both." },
    { wrong: "There have a problem.", correct: "There is a problem.", explanation: "NEVER use 'there have/has'. Always use 'there is/are/was/were'. 'There have' doesn't exist in English!" },
  ],

  sentencePatterns: [
    {
      pattern: "There is/are + noun + location/detail (Present)",
      hindiPattern: "वहाँ/यहाँ + है/हैं + संज्ञा",
      examples: [
        { english: "There is an important meeting at 3 PM today.", hindi: "आज 3 बजे एक important meeting है।" },
        { english: "There are five new candidates for the interview.", hindi: "Interview के लिए पाँच नए candidates हैं।" },
        { english: "There is a new policy regarding work from home.", hindi: "Work from home के बारे में एक नई policy है।" },
        { english: "There are many opportunities in the IT sector right now.", hindi: "अभी IT sector में बहुत opportunities हैं।" },
        { english: "There is no parking space available in this building.", hindi: "इस building में कोई parking space available नहीं है।" },
      ],
    },
    {
      pattern: "There was/were + noun + time/detail (Past)",
      hindiPattern: "था/थे + संज्ञा — भूतकाल",
      examples: [
        { english: "There was a major error in the quarterly report.", hindi: "Quarterly report में एक major error था।" },
        { english: "There were 200 participants at the annual conference.", hindi: "Annual conference में 200 participants थे।" },
        { english: "There was no internet connection for three hours this morning.", hindi: "आज सुबह तीन घंटे internet connection नहीं था।" },
        { english: "There were several complaints from clients last week.", hindi: "पिछले हफ्ते clients से कई complaints थीं।" },
      ],
    },
    {
      pattern: "Is there / Are there + noun + ? (Question)",
      hindiPattern: "क्या + है/हैं + संज्ञा + ?",
      examples: [
        { english: "Is there a solution to this technical issue?", hindi: "क्या इस technical issue का कोई solution है?" },
        { english: "Are there any vacancies in the marketing department?", hindi: "क्या marketing department में कोई vacancy है?" },
        { english: "Is there enough time to finish before the deadline?", hindi: "क्या Deadline से पहले finish करने के लिए पर्याप्त समय है?" },
        { english: "Are there any questions before we begin?", hindi: "क्या शुरू करने से पहले कोई सवाल हैं?" },
      ],
    },
  ],

  speakingTips: [
    "Contraction in speech: 'There's a meeting.' (there's = there is) — very natural and common",
    "Question rhythm: 'Is there ANYthing I can help with?' — stress 'any' slightly",
    "Practice: describe your room/office using 'there is/there are' — 10 sentences minimum",
    "'There's' sounds like 'therez' — the 'r' and 's' blend: practice this sound",
    "In meetings: 'There are three points I'd like to discuss...' — great sentence starter",
    "Storytelling opener: 'There was once a time when...' — classic, powerful story beginning",
  ],

  memoryTricks: [
    "THERE IS/ARE = 'existence announcement' — you're telling someone something EXISTS!",
    "Singular or plural? The noun AFTER 'there' decides: 'There is [ONE]' / 'There are [MANY]'",
    "Is/Are chart: IS → one thing / ARE → more than one. Same rule as all be verbs!",
    "Question trick: flip 'there is/are': 'There is a...' → 'Is there a...?' Easy!",
    "Story magic words: 'There was...' / 'There were...' — start any past story with these!",
    "'There is no shortcut to success.' — remember this sentence to remember the negative form!",
  ],

  professionalUsage: [
    { situation: "Professional email — informing about updates", english: "Dear Team, there is an important update regarding the project timeline. There are a few changes that we need to discuss urgently. There will be a meeting tomorrow at 10 AM. Please ensure there are no scheduling conflicts.", hindi: "Professional email में there is/are से updates share करना।" },
    { situation: "Reporting a problem to manager", english: "Sir, there is a critical issue with the payment module. There are three error logs from this morning. There was a similar problem last month, but there was a quick fix available then. Currently, there is no immediate solution.", hindi: "Manager को problem report करना — there is/was for issues।" },
    { situation: "Presenting data in a meeting", english: "There are three key findings from our research. First, there is a 20% increase in customer complaints. Second, there are clear gaps in our response time. Third, there is a strong demand for better support channels.", hindi: "Meeting में findings present करना।" },
  ],

  dailyUsage: [
    { situation: "Talking about your surroundings", english: "There is a beautiful park near my house. There are two good restaurants nearby. There was a supermarket here last year, but it closed. There will be a new mall opening next month!", hindi: "Surroundings और neighborhood describe करना।" },
    { situation: "At a party or event", english: "Is there enough food for everyone? There are so many guests! There is a great DJ tonight. Were there any vegetarian options?", hindi: "Social events में there is/are।" },
  ],

  officeUsage: [
    { situation: "Describing office facilities", english: "There is a conference room on the third floor. There are two printers on our floor — one for colour and one for black and white. There is no parking available in the basement today. Are there any extra chairs for the visitors?", hindi: "Office की facilities describe करना।" },
  ],

  interviewUsage: [
    { situation: "Talking about your current workplace", english: "In my current company, there are around 500 employees. There is a very good learning culture. There are regular training programs and workshops. There is also a mentorship program for new employees.", hindi: "Current company describe करना — there is/are से।" },
  ],

  story: {
    title: "The Empty Office",
    paragraphs: [
      "It was Monday morning. Priya arrived at her new office. She looked around carefully. There was a reception desk, but there was nobody sitting there. There were a few chairs in the waiting area, but there was nobody waiting.",
      "'Is there anyone here?' Priya called out. There was silence. She walked further in. There were desks, computers, and files everywhere — but there was not a single person.",
      "Suddenly, her phone rang. It was her manager. 'Priya, there is a team outing today! There are 30 people waiting at the park near the office. Were there any signs near the entrance?'",
      "Priya laughed. 'There was a notice board, but I didn't read it!' There were directions on the board pointing to the park.",
      "'Are there any buses going there?' Priya asked. 'There is a company bus leaving in 5 minutes!' her manager replied. 'There is no time to waste!'",
      "Priya ran to the bus. There were smiling faces everywhere. There was music playing. There was food, games, and laughter. It turned out there was nothing to worry about — there was just a surprise waiting for her!",
    ],
    moral: "THERE IS and THERE ARE help you describe what exists around you — people, things, situations. Master these phrases and you can narrate any scene vividly in English!",
    keyWords: [
      { word: "there is", meaning: "है — one thing exists (present)" },
      { word: "there are", meaning: "हैं — multiple things exist (present)" },
      { word: "there was", meaning: "था/थी — one thing existed (past)" },
      { word: "there were", meaning: "थे/थीं — multiple things existed (past)" },
      { word: "there will be", meaning: "होगा/होगी — something will exist (future)" },
    ],
  },

  essay: {
    title: "There Is, There Are: The Building Blocks of Description",
    paragraphs: [
      "Few grammatical structures in English are as universally useful as 'there is' and 'there are'. These existential constructions allow speakers to introduce new information, describe environments, report situations, and build narratives with remarkable efficiency.",
      "The rule is elegant in its simplicity: 'there is' for one thing, 'there are' for many. Past: 'there was' and 'there were'. Future: 'there will be'. This set of four patterns covers the complete timeline of existence.",
      "In professional contexts, these structures appear constantly. Business emails begin with 'There is an update regarding...'. Reports state 'There are three key findings...'. Presentations open with 'There are several points I'd like to address...'.",
      "The existential 'there' is particularly powerful in storytelling. 'Once upon a time, there was a...' is perhaps the most recognizable opening in English literature. Every great story introduces its world with 'there is/was' — existence before action.",
    ],
    keyPoints: [
      "There is + singular noun (present) | There are + plural noun (present)",
      "There was + singular noun (past) | There were + plural noun (past)",
      "Future: There will be (singular and plural)",
      "Negative: There is no... / There isn't any... / There are no... / There aren't any...",
      "Question: Is there...? / Are there...? — simply flip the order",
    ],
  },

  dialogue: {
    title: "The New Employee's Questions",
    setting: "Kavita, a new employee, is asking her colleague Suresh about the office.",
    lines: [
      { speaker: "Kavita", text: "Excuse me, Suresh. Is there a cafeteria in this building?", hindi: "माफ़ कीजिए, सुरेश। क्या इस building में cafeteria है?" },
      { speaker: "Suresh", text: "Yes! There is a cafeteria on the 5th floor. There are also two vending machines on this floor if you need something quickly.", hindi: "हाँ! 5th floor पर cafeteria है। अगर आपको जल्दी कुछ चाहिए तो इस floor पर दो vending machines भी हैं।" },
      { speaker: "Kavita", text: "Great! Are there any training sessions this week?", hindi: "बढ़िया! क्या इस हफ्ते कोई training sessions हैं?" },
      { speaker: "Suresh", text: "Yes, there are two training sessions. There is an induction session tomorrow morning, and there is a safety training on Thursday afternoon.", hindi: "हाँ, दो training sessions हैं। कल सुबह induction session है, और गुरुवार दोपहर safety training है।" },
      { speaker: "Kavita", text: "Is there a parking area for employees? I came by car today.", hindi: "क्या employees के लिए parking area है? मैं आज car से आई हूँ।" },
      { speaker: "Suresh", text: "There is parking in the basement, but there are very few spots. There was a new parking building under construction, but there were some delays. There will be more space available from next month.", hindi: "Basement में parking है, लेकिन बहुत कम spots हैं। एक नई parking building construction में थी, लेकिन कुछ delays थे। अगले महीने से ज़्यादा space available होगी।" },
    ],
    notes: [
      "Present: 'Is there a cafeteria?' / 'There is a cafeteria' / 'There are two sessions'",
      "Past: 'There was a building' / 'There were some delays'",
      "Future: 'There will be more space'",
      "Negative: 'there are very few spots' (near negative) — shows quantity",
      "This dialogue covers ALL four 'there' forms in a natural conversation!",
    ],
  },

  summary: [
    "THERE IS = 1 thing exists (present) | THERE ARE = many things exist (present)",
    "THERE WAS = 1 thing existed (past) | THERE WERE = many things existed (past)",
    "THERE WILL BE = future existence (singular and plural)",
    "Negative: There is no... / There isn't any... / There are no... / There aren't any...",
    "Question: Is there...? / Are there...? / Was there...? / Were there...?",
    "Day 9 complete! Describe your room/office with 10 'there is/are' sentences!",
  ],
};

// ─── Content Map: Day Number → Content ────────────────────────
// Maps each day number to its specific educational content
// Days with content: 3, 4, 5, 6, 7, 8, 9
// All other days use the smart generic generator
export const SPECIFIC_DAY_CONTENT: Record<number, Partial<LessonContentType>> = {
  3: DAY_3_CONTENT,  // Imperative Sentence
  4: DAY_4_CONTENT,  // Be Verb
  5: DAY_5_CONTENT,  // Demonstrative Pronoun
  6: DAY_6_CONTENT,  // Has / Have
  7: DAY_7_CONTENT,  // Had (Past Possession & Past Perfect)
  8: DAY_8_CONTENT,   // Will Have (Future Perfect)
  9: DAY_9_CONTENT,   // Use of There (There is, There are, There was, There were)
  10: DAYS_8_TO_14_CONTENT["d10-t1-s1"] || {},  // Revision Day
  11: DAYS_8_TO_14_CONTENT["d11-t1-s1"] || {},  // Use of Want
  12: DAYS_8_TO_14_CONTENT["d12-t1-s1"] || {},  // Use of Wanted
  13: DAYS_8_TO_14_CONTENT["d13-t1-s1"] || {},  // Use of Let
  14: DAYS_8_TO_14_CONTENT["d14-t1-s1"] || {},  // Use of Let's
};

// ─── Helper function ──────────────────────────────────────────
// Gets specific content for a day, or null if not available
export function getSpecificDayContent(
  dayNumber: number
): Partial<LessonContentType> | null {
  // Check if we have specific content for this day
  return SPECIFIC_DAY_CONTENT[dayNumber] || null;
}

// ─── Per-Subtopic Content Map (Days 3–7) ──────────────────────
// Rich, handcrafted lesson content tailored for each individual subtopic
// This overrides the day-level content for maximum teaching quality
// Each entry is a complete or partial LessonContent for a specific subtopic
const SUBTOPIC_CONTENT_MAP: Record<string, Partial<LessonContentType>> = {

  // ══════════════════════════════════════════════════════════════
  // DAY 3 — IMPERATIVE SENTENCE
  // ══════════════════════════════════════════════════════════════

  // d3-t1-s1: Definition and Types of Imperatives
  "d3-t1-s1": {
    whyLearnThis: `Every single conversation involves giving or receiving instructions. "Come here." "Don't do that." "Please sit down." These are IMPERATIVE sentences — and you use them HUNDREDS of times every day!\n\nWithout imperative sentences:\n❌ You can't give directions: "Go left, then right."\n❌ You can't give instructions: "Read page 5."\n❌ You can't make requests: "Please help me."\n❌ You can't give warnings: "Be careful! Watch out!"\n\nIn your CAREER:\n✓ Every office email uses imperatives: "Please find attached..."\n✓ Every manager uses imperatives: "Submit the report by Friday."\n✓ Every interview has imperatives: "Tell me about yourself."\n\nMastering this TODAY means you can immediately start giving clear, confident instructions in English!`,

    conceptExplanation: `An IMPERATIVE SENTENCE is a sentence that gives a COMMAND, REQUEST, INSTRUCTION, or SUGGESTION.\n\n🎯 THE BIG SECRET: The subject is HIDDEN!\nIn every imperative, the subject is "YOU" — but we never say it.\n\n"Sit down." = (You) sit down.\n"Read this book." = (You) read this book.\n"Please be quiet." = (You) please be quiet.\n\n📚 FOUR TYPES OF IMPERATIVES:\n\n1️⃣ COMMAND (आदेश) — Strong, direct:\n• "Stop talking!"\n• "Give me that pen."\n• "Look at the board."\n\n2️⃣ REQUEST (अनुरोध) — Polite, gentle:\n• "Please help me with this."\n• "Could you please open the window?"\n• "Kindly submit your assignment."\n\n3️⃣ INSTRUCTION (निर्देश) — Step-by-step:\n• "First, open the file. Then, click Save."\n• "Mix the flour and add water."\n• "Press the green button to start."\n\n4️⃣ SUGGESTION (सुझाव) — Friendly advice:\n• "Try the new restaurant!"\n• "Let's go for a walk."\n• "Just breathe and relax."\n\nKEY FORMULA:\nVerb (base form) + rest of sentence\n[The word 'YOU' is always understood]`,

    hindiExplanation: `Imperative Sentence = वह sentence जो command (आदेश), request (अनुरोध), instruction (निर्देश), या suggestion (सुझाव) देता है।\n\n🔑 सबसे बड़ा secret: Subject हमेशा "YOU" होता है — लेकिन हम इसे बोलते नहीं!\n\nचार प्रकार:\n1. Command: "Stop!" (रुको!)\n2. Request: "Please help me." (कृपया मेरी मदद करो।)\n3. Instruction: "Read chapter 5." (Chapter 5 पढ़ो।)\n4. Suggestion: "Try this once." (एक बार कोशिश करो।)\n\nFormula: Verb (base form) + बाकी sentence\nउदाहरण: "Go to school." = जाओ + school + में → स्कूल जाओ।`,

    rules: [
      {
        rule: "Always use the BASE form of the verb (no 'to', no '-ing', no '-ed')",
        explanation: "Imperatives use the simplest, dictionary form of the verb. Never 'to go', never 'going', just 'go'. This makes English imperatives very simple to form.",
        example: "✅ Go to the market. | ✅ Read this. | ✅ Open the door. | ✅ Be quiet.\n❌ To go to market. | ❌ Going to market. | ❌ Went to market.",
        exception: "The verb 'be' is an exception — it stays as 'be': 'Be careful.' / 'Be honest.' / 'Be on time.'",
      },
      {
        rule: "The subject 'YOU' is always understood — never written or spoken",
        explanation: "Unlike all other sentence types, imperatives NEVER include the subject. If you say 'You go to the market', it sounds very rude and unnatural in English. Just say 'Go to the market'.",
        example: "✅ Come here! | ✅ Listen carefully. | ✅ Write your name.\n❌ You come here! | ❌ You listen carefully. | ❌ You write your name.",
        exception: "Exception: You CAN say 'You go!' for strong emphasis in an argument, but this is very informal and confrontational.",
      },
      {
        rule: "Use 'please' or 'kindly' to make requests polite",
        explanation: "A command sounds direct and sometimes rude. Adding 'please' (or 'kindly' in formal writing) transforms a command into a polite request. 'Please' can go at the start OR end of the sentence.",
        example: "✅ Please sit down. | ✅ Sit down, please. | ✅ Kindly submit your form.\nSame meaning: 'Close the door.' vs 'Please close the door.' — very different tone!",
        exception: "In emergencies, skip 'please': 'Call the ambulance NOW!' / 'Run!' / 'Duck!'",
      },
      {
        rule: "Commands can end with ! (urgent) or . (normal)",
        explanation: "Use an exclamation mark when the command is urgent, strong, or emotional. Use a period for normal, calm instructions and requests.",
        example: "Urgent: 'Stop the car!' / 'Help me!' / 'Watch out!'\nNormal: 'Please have a seat.' / 'Submit the form by Monday.' / 'Read chapter 3.'",
        exception: "Don't overuse ! in professional emails — it appears unprofessional and immature in formal writing.",
      },
    ],

    commonMistakes: [
      { wrong: "You sit down please.", correct: "Please sit down.", explanation: "Remove 'You' — the subject is always hidden in imperatives. Use 'Please' at the beginning for a polite request." },
      { wrong: "To open the door.", correct: "Open the door.", explanation: "Never use 'to + verb' for imperatives. Remove 'to' and just use the base verb directly." },
      { wrong: "Be sitting down.", correct: "Sit down.", explanation: "Use the base verb, not the -ing form. 'Be sitting' is wrong — just say 'Sit'." },
      { wrong: "Does open the window!", correct: "Open the window!", explanation: "Never use 'do/does/did' before the main verb in a positive imperative (only in negative: 'Don't open')." },
      { wrong: "Please to call me.", correct: "Please call me.", explanation: "After 'please', use the base verb directly — never 'to + verb'. Formula: Please + base verb." },
    ],

    sentencePatterns: [
      {
        pattern: "Command (Direct Order)",
        hindiPattern: "सीधा आदेश",
        examples: [
          { english: "Close the door.", hindi: "दरवाज़ा बंद करो।" },
          { english: "Write your name at the top.", hindi: "सबसे ऊपर अपना नाम लिखो।" },
          { english: "Answer all the questions.", hindi: "सभी सवालों के जवाब दो।" },
          { english: "Stand up straight.", hindi: "सीधे खड़े रहो।" },
          { english: "Stop talking and listen.", hindi: "बात करना बंद करो और सुनो।" },
        ],
      },
      {
        pattern: "Polite Request (Please + Verb)",
        hindiPattern: "विनम्र अनुरोध",
        examples: [
          { english: "Please send me the document.", hindi: "कृपया मुझे document भेजिए।" },
          { english: "Please be on time tomorrow.", hindi: "कृपया कल समय पर आइए।" },
          { english: "Please help me understand this.", hindi: "कृपया मुझे यह समझने में मदद करें।" },
          { english: "Please keep this confidential.", hindi: "कृपया इसे गोपनीय रखें।" },
        ],
      },
      {
        pattern: "Instruction (Step-by-Step)",
        hindiPattern: "निर्देश (Step-by-Step)",
        examples: [
          { english: "First, read the question carefully, then answer.", hindi: "पहले, सवाल को ध्यान से पढ़ो, फिर जवाब दो।" },
          { english: "Open the app and click on 'New File'.", hindi: "App खोलो और 'New File' पर click करो।" },
          { english: "Mix the ingredients and stir for 2 minutes.", hindi: "सामग्री मिलाओ और 2 मिनट हिलाओ।" },
        ],
      },
    ],

    speakingTips: [
      "Practice giving commands in a FIRM but friendly tone — not angry, not weak",
      "Add 'please' naturally — don't make it sound forced or sarcastic",
      "When giving instructions, slow down and pause between steps",
      "Practice these 10 daily imperatives: 'Come in', 'Sit down', 'Listen', 'Look', 'Read', 'Write', 'Stop', 'Start', 'Wait', 'Go'",
      "Record yourself giving instructions and check if you sound clear and natural",
    ],

    memoryTricks: [
      "Remember: VERB FIRST! If your sentence starts with a verb, it's probably an imperative.",
      "The 'YOU' rule: Pretend 'you' is invisible but always there. (You) Go! (You) Stop! (You) Come!",
      "Types: CRISP = Command, Request, Instruction, Suggestion, Polite imperative",
      "Please test: 'Please' at start or end = polite request | No 'please' = direct command",
    ],

    summary: [
      "Imperative sentences give commands, requests, instructions, or suggestions",
      "The subject 'you' is ALWAYS hidden — never write or say it",
      "Always use the BASE FORM of the verb (go, read, open, be)",
      "Add 'please' or 'kindly' to make it polite",
      "End with . for normal, ! for urgent/emotional",
      "4 types: Commands, Requests, Instructions, Suggestions",
    ],
  },

  // d3-t1-s2: The Hidden Subject 'You' Explained
  "d3-t1-s2": {
    whyLearnThis: `Why does English grammar work differently for imperatives? Why do we skip the subject?\n\nThis is one of the most UNIQUE features of English — and understanding it will make everything click!\n\nIn Hindi/Urdu: "Aap jaiye." (You go.) — subject included\nIn English: "Go." — subject hidden!\n\nWhen you understand WHY 'you' is hidden in imperatives, you will:\n✓ Stop making the mistake of adding 'you' in commands\n✓ Understand why "You go!" sounds rude\n✓ Know when it's acceptable to say 'you' in imperatives\n✓ Write better professional emails and messages`,

    conceptExplanation: `In English, every sentence normally needs a subject and a verb:\n• "I go to school." (I = subject)\n• "She reads books." (She = subject)\n• "They play cricket." (They = subject)\n\nBUT in IMPERATIVE sentences, the subject is ALWAYS 'you' — and we DROP it!\n\nWHY? Because:\n1. When you give a command, you're ALWAYS talking TO someone\n2. That someone is always 'you' — so it's obvious\n3. Saying 'you' makes it sound rude, aggressive, or childish\n\nComparison:\n🔴 "You sit down!" — sounds rude, like scolding a child\n🟢 "Sit down." — sounds normal, calm\n🟢 "Please sit down." — sounds polite\n\nSO THE RULE IS SIMPLE:\n❌ NEVER add 'you' at the start of an imperative sentence\n✅ Just start directly with the verb\n\nExceptions (RARE cases where 'you' is used):\n1. To single out one person from a group:\n"You, come here! The rest, stay back."\n\n2. For very strong emphasis (sounds aggressive):\n"You listen to me right now!"\n\n3. In informal/dramatic situations:\n"You stay here. I'll go."`,

    rules: [
      {
        rule: "Never start an imperative sentence with 'you'",
        explanation: "Adding 'you' to the beginning of a command sounds either very rude (like scolding) or unnatural. Native English speakers never say 'You come here' — they just say 'Come here'.",
        example: "✅ Come here. | ✅ Go away. | ✅ Read this.\n❌ You come here. | ❌ You go away. | ❌ You read this.",
        exception: "RARE exception: 'You, come here!' can single out one person from a group. But this is unusual and should be used carefully.",
      },
      {
        rule: "The understood 'you' makes imperatives direct and efficient",
        explanation: "English imperatives are powerful because they get straight to the point. In professional communication, clear and direct imperatives save time and prevent confusion.",
        example: "Email subject line: 'Please review and respond by Friday.' (Much cleaner than 'You should please review and you should respond by Friday.')",
      },
    ],

    commonMistakes: [
      { wrong: "You go to market.", correct: "Go to the market.", explanation: "Drop 'you' — imperatives never include the subject." },
      { wrong: "You please help me.", correct: "Please help me.", explanation: "The subject 'you' is hidden. Start with 'Please' + verb." },
      { wrong: "You don't make noise.", correct: "Don't make noise.", explanation: "In negative imperatives too, 'you' is dropped. Start with 'Don't'." },
    ],

    summary: [
      "In imperatives, the subject 'you' is ALWAYS understood but never written or spoken",
      "Saying 'You sit down!' sounds rude — just say 'Sit down.' or 'Please sit down.'",
      "Rare exceptions: 'You, come here!' (singling someone out from a group)",
      "This makes English imperatives direct, efficient, and natural",
    ],
  },

  // d3-t2-s2: Negative Imperatives — Don't Do This!
  "d3-t2-s2": {
    whyLearnThis: `"Don't worry." "Don't be late." "Please don't forget."\n\nNegative imperatives are used CONSTANTLY in daily life! Every time you want to STOP someone from doing something — warn them, advise them, or ask them not to do something — you use a negative imperative.\n\nIn your daily life:\n• "Don't run in the corridor!"\n• "Don't forget your keys."\n• "Please don't be late for the meeting."\n\nIn office communication:\n• "Do not share confidential information."\n• "Please do not reply to all."\n• "Do not leave early without permission."\n\nMastering negative imperatives gives you the power to set clear boundaries and give warnings in English!`,

    conceptExplanation: `NEGATIVE IMPERATIVES — How to say "Don't do this!"\n\nFormula:\nDON'T + Base verb + rest of sentence\n\nExamples:\n• Don't run. (मत दौड़ो।)\n• Don't be late. (देर मत करो।)\n• Don't touch this. (इसे मत छुओ।)\n• Don't forget your homework. (अपना homework मत भूलो।)\n\nFORMAL version:\nDO NOT + Base verb + rest of sentence\n\nExamples:\n• Do not enter without permission.\n• Do not use mobile phones here.\n• Do not disturb.\n\nPOLITE negative:\nPLEASE + DON'T + Base verb\nor\nDON'T + Base verb + please\n\nExamples:\n• Please don't be late.\n• Don't worry about it, please.\n• Please don't make noise.\n\nIMPORTANT:\n❌ NOT run. (WRONG)\n❌ No run. (WRONG)\n✅ Don't run. (CORRECT)\n✅ Do not run. (CORRECT — formal)`,

    hindiExplanation: `Negative Imperative = "मत + verb" या "Don't + verb"\n\nSimple formula:\nDon't + verb (base form) + बाकी sentence\n\nउदाहरण:\n• Don't cry. = मत रो।\n• Don't worry. = चिंता मत करो।\n• Don't be rude. = रूखा मत बनो।\n• Don't give up. = हार मत मानो।\n\nFormal (office, signs, notices में):\nDo not + verb\n• Do not enter. = प्रवेश न करें।\n• Do not smoke. = धूम्रपान न करें।\n\nPolite:\nPlease don't + verb\n• Please don't be late. = कृपया देर मत करें।`,

    rules: [
      {
        rule: "Negative imperative formula: Don't / Do not + base verb",
        explanation: "To make an imperative negative, add 'don't' (informal/conversational) or 'do not' (formal/written) before the base verb. NEVER use just 'not' alone.",
        example: "✅ Don't run! | ✅ Do not enter. | ✅ Please don't shout.\n❌ Not run! | ❌ No running! (signs only) | ❌ Don't to run.",
        exception: "'No + verb-ing' is used on signs only: 'No Smoking' / 'No Parking'. This is not a sentence — just a notice.",
      },
      {
        rule: "Use 'Do not' for formal writing, 'Don't' for conversation",
        explanation: "'Do not' is used in formal notices, official letters, emails, and professional documents. 'Don't' is used in casual conversation with friends, family, and informal settings.",
        example: "Formal: 'Please do not use mobile phones during the meeting.' | Casual: 'Don't use your phone now.'",
      },
      {
        rule: "Add 'please' to make negative imperatives polite",
        explanation: "Negative commands can sound harsh. Adding 'please' makes them sound like requests rather than orders. 'Please don't' is the most polite way to ask someone not to do something.",
        example: "Harsh: 'Don't be late.' | Polite: 'Please don't be late.' | Very polite: 'I would appreciate it if you could be on time.'",
      },
    ],

    commonMistakes: [
      { wrong: "Not go there!", correct: "Don't go there!", explanation: "Never use just 'not' to make a negative imperative. Always use 'don't' or 'do not'." },
      { wrong: "Don't to touch this.", correct: "Don't touch this.", explanation: "After 'don't', use the BASE verb — never 'to + verb'. Formula: Don't + base verb." },
      { wrong: "Please you don't come late.", correct: "Please don't come late.", explanation: "No 'you' in imperatives! Formula: Please + don't + base verb." },
      { wrong: "Do not ran away.", correct: "Do not run away.", explanation: "After 'do not', use the BASE form (run), not the past tense (ran)." },
    ],

    sentencePatterns: [
      {
        pattern: "Don't + verb (Casual/Conversational)",
        hindiPattern: "मत + क्रिया (बातचीत में)",
        examples: [
          { english: "Don't be scared.", hindi: "डरो मत।" },
          { english: "Don't give up so easily.", hindi: "इतनी आसानी से हार मत मानो।" },
          { english: "Don't forget to call me.", hindi: "मुझे call करना मत भूलो।" },
          { english: "Don't make the same mistake again.", hindi: "वही गलती फिर से मत करो।" },
          { english: "Don't worry, everything will be fine.", hindi: "चिंता मत करो, सब ठीक हो जाएगा।" },
        ],
      },
      {
        pattern: "Please don't + verb (Polite Request)",
        hindiPattern: "कृपया मत + क्रिया (विनम्र अनुरोध)",
        examples: [
          { english: "Please don't be late for the meeting.", hindi: "कृपया meeting के लिए देर मत करें।" },
          { english: "Please don't share this with anyone.", hindi: "कृपया इसे किसी के साथ share मत करें।" },
          { english: "Please don't interrupt while I'm speaking.", hindi: "कृपया जब मैं बोल रहा हूँ तो बीच में मत बोलें।" },
        ],
      },
      {
        pattern: "Do not + verb (Formal/Official)",
        hindiPattern: "न + क्रिया (formal/आधिकारिक)",
        examples: [
          { english: "Do not enter without permission.", hindi: "बिना अनुमति के प्रवेश न करें।" },
          { english: "Do not share your password with anyone.", hindi: "अपना password किसी के साथ share न करें।" },
          { english: "Do not leave the office without informing your manager.", hindi: "Manager को बताए बिना office मत छोड़ें।" },
        ],
      },
    ],

    summary: [
      "Negative imperatives = Don't / Do not + base verb",
      "'Don't' = casual conversation | 'Do not' = formal writing",
      "Add 'please' for polite negative requests: 'Please don't be late'",
      "NEVER use just 'not' alone — always 'don't' or 'do not'",
      "NEVER add 'to' after 'don't': ❌ 'Don't to run' | ✅ 'Don't run'",
    ],
  },

  // d3-t3-s2: Imperatives at Work and Office
  "d3-t3-s2": {
    whyLearnThis: `Office communication in English is 80% imperatives!\n\nEvery email, every meeting, every instruction uses imperative sentences. If you want to SUCCEED in a professional English-speaking environment, you MUST master office imperatives.\n\nSituations you'll use this DAILY:\n• Writing professional emails\n• Giving instructions to colleagues\n• Running or attending meetings\n• Customer service communication\n• Phone calls and video conferences\n\nThe difference between sounding professional and unprofessional often comes down to HOW you give instructions. A good professional uses imperatives correctly!`,

    conceptExplanation: `OFFICE IMPERATIVES — Professional English Commands\n\n📧 IN EMAILS:\n• "Please find the attached document."\n• "Kindly review and revert by EOD."\n• "Please confirm receipt of this email."\n• "Do not reply to all — only to the sender."\n\n🤝 IN MEETINGS:\n• "Let's start the meeting." / "Let's begin."\n• "Please take your seats." / "Please be seated."\n• "Hold on, let me check." / "Give me a moment."\n• "Please mute your mic when not speaking."\n• "Note down the action items, please."\n\n📱 ON CALLS:\n• "Can you hear me clearly?" → "Speak up, please."\n• "Please repeat that." / "Please say that again."\n• "Hold on, please." / "Please hold."\n• "Please call me back in 10 minutes."\n\n💼 INSTRUCTIONS TO TEAM:\n• "Submit your reports by Friday."\n• "Please copy me on all client emails."\n• "Inform me before taking any decision."\n• "Please check with the client before proceeding."`,

    rules: [
      {
        rule: "Use 'Please' or 'Kindly' in all professional imperatives",
        explanation: "In office settings, direct commands without 'please' can come across as rude or aggressive. Always add 'please' (casual-professional) or 'kindly' (formal-professional) to imperatives.",
        example: "Casual: 'Send me the report.' | Professional: 'Please send me the report.' | Formal: 'Kindly send me the report at your earliest convenience.'",
      },
      {
        rule: "EOD, ASAP, and other office acronyms go with imperatives",
        explanation: "In Indian offices, common phrases like 'by EOD' (end of day), 'ASAP' (as soon as possible), 'revert' (reply) are often used with imperative sentences.",
        example: "'Please revert by EOD.' / 'Submit ASAP.' / 'Please share an update at the earliest.'",
        exception: "Note: 'Revert' in Indian English means 'reply/respond'. In global English, revert means 'go back to a previous state'.",
      },
    ],

    sentencePatterns: [
      {
        pattern: "Professional Email Imperatives",
        hindiPattern: "Professional Email में Imperatives",
        examples: [
          { english: "Please find the attached report.", hindi: "कृपया संलग्न report देखें।" },
          { english: "Kindly revert by end of day.", hindi: "कृपया आज दिन के अंत तक जवाब दें।" },
          { english: "Please confirm your availability for the meeting.", hindi: "कृपया meeting के लिए अपनी उपलब्धता confirm करें।" },
          { english: "Please do not hesitate to contact me for any queries.", hindi: "किसी भी प्रश्न के लिए कृपया मुझसे संपर्क करने में संकोच न करें।" },
        ],
      },
      {
        pattern: "Meeting Room Imperatives",
        hindiPattern: "Meeting में Imperatives",
        examples: [
          { english: "Let's start the meeting.", hindi: "चलिए meeting शुरू करते हैं।" },
          { english: "Please mute your microphone.", hindi: "कृपया अपना microphone mute करें।" },
          { english: "Note down the key points.", hindi: "मुख्य बिंदु note कर लो।" },
          { english: "Please hold your questions until the end.", hindi: "कृपया अपने सवाल अंत तक रोकें।" },
        ],
      },
    ],

    summary: [
      "Always use 'Please' or 'Kindly' in professional imperatives",
      "Common office imperatives: 'Please find attached', 'Kindly revert', 'Please confirm'",
      "Meeting imperatives: 'Let's begin', 'Please mute', 'Note down'",
      "Phone imperatives: 'Please hold', 'Please repeat', 'Call me back'",
      "The more polite your imperative, the more professional you sound",
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // DAY 4 — BE VERB (Am / Is / Are / Was / Were / Will Be)
  // ══════════════════════════════════════════════════════════════

  // d4-t1-s1: What is Be Verb and Why It's Special
  "d4-t1-s1": {
    whyLearnThis: `The Be Verb (am, is, are, was, were, will be) is the MOST IMPORTANT verb in the entire English language!\n\nHere's why:\n• It appears in EVERY English conversation\n• It's used to describe EVERYTHING: people, places, things, feelings\n• Without Be Verb, you can't use continuous tenses (I am going, She was reading)\n• Without Be Verb, you can't use passive voice (It is done, The letter was sent)\n\nYou use Be Verb when you:\n✓ Introduce yourself: "I am Rahul. I am from Delhi."\n✓ Describe things: "The book is interesting."\n✓ Tell the time: "It is 3 o'clock."\n✓ Talk about feelings: "I am tired. She is happy."\n✓ Describe location: "He is at home. They are in Mumbai."\n\nMaster Be Verb today — you'll use it in literally EVERY English sentence!`,

    conceptExplanation: `THE BE VERB FAMILY — Complete Overview\n\nBe Verb is one verb that has MANY forms depending on the subject and time:\n\n📊 PRESENT TENSE (अभी):\n• AM → only with 'I': "I am a student."\n• IS → with He, She, It (singular): "She is beautiful. It is hot."\n• ARE → with You, We, They (plural): "You are smart. We are friends."\n\n📊 PAST TENSE (पहले):\n• WAS → with I, He, She, It: "I was there. He was tired."\n• WERE → with You, We, They: "You were right. They were happy."\n\n📊 FUTURE TENSE (आगे):\n• WILL BE → with all subjects: "I will be ready. She will be there."\n• SHALL BE → formal: "We shall be pleased to meet you."\n\nUSES OF BE VERB:\n1. Identity: "I am a teacher." (मैं एक शिक्षक हूँ।)\n2. Description: "She is tall and beautiful." (वह लंबी और सुंदर है।)\n3. Location: "He is in the office." (वह office में है।)\n4. Time: "It is Monday." / "It is 5 PM."\n5. Age: "I am 25 years old." (मैं 25 साल का हूँ।)\n6. Feeling: "We are excited!" (हम excited हैं!)`,

    hindiExplanation: `Be Verb = हिंदी में "हूँ / है / हैं / था / थी / थे / होगा/होगी"\n\nSubject के हिसाब से Be Verb बदलता है:\n\nPresent (अभी):\n• I → am: "I am happy." = "मैं खुश हूँ।"\n• He/She/It → is: "She is tired." = "वह थकी है।"\n• You/We/They → are: "They are ready." = "वे तैयार हैं।"\n\nPast (पहले):\n• I/He/She/It → was: "He was sick." = "वह बीमार था।"\n• You/We/They → were: "We were late." = "हम देर से आए थे।"\n\nFuture (आगे):\n• सभी subjects → will be: "I will be there." = "मैं वहाँ रहूँगा।"`,

    rules: [
      {
        rule: "AM goes only with 'I' (always, no exceptions)",
        explanation: "In English, 'am' is exclusively used with the first person singular 'I'. Never use 'am' with any other subject.",
        example: "✅ I am a doctor. | ✅ I am from India. | ✅ I am happy.\n❌ He am a doctor. | ❌ We am ready. | ❌ You am correct.",
        exception: "In questions: 'Am I correct?' / 'Am I late?' — 'am' still only goes with 'I'.",
      },
      {
        rule: "IS goes with He, She, It, and singular nouns",
        explanation: "Use 'is' for all third-person singular subjects — one person, one thing, one place.",
        example: "✅ He is smart. | ✅ She is a teacher. | ✅ It is hot today. | ✅ Ravi is at home. | ✅ The book is interesting.",
        exception: "Collective nouns can use 'is': 'The team is ready.' But plural nouns use 'are': 'The teams are ready.'",
      },
      {
        rule: "ARE goes with You, We, They, and plural nouns",
        explanation: "Use 'are' for second person (you), and all plural subjects (we, they, plural nouns).",
        example: "✅ You are right. | ✅ We are friends. | ✅ They are ready. | ✅ The students are smart. | ✅ Priya and Rahul are colleagues.",
        exception: "'You are' is used for BOTH singular and plural 'you'. 'You are my friend.' and 'You are all my friends.' both use 'are'.",
      },
      {
        rule: "WAS for I/He/She/It in past, WERE for You/We/They in past",
        explanation: "In past tense, Be Verb has only two forms: was (singular) and were (plural). The same subject-based rule applies.",
        example: "✅ I was tired. | ✅ She was right. | ✅ They were happy. | ✅ You were late.\n❌ I were there. | ❌ He were sick. | ❌ She were wrong.",
        exception: "In formal/literary writing: 'If I were you...' (subjunctive mood — not a grammar mistake, actually correct!)",
      },
    ],

    commonMistakes: [
      { wrong: "He am a teacher.", correct: "He is a teacher.", explanation: "'Am' is ONLY for 'I'. He/She/It always use 'is'." },
      { wrong: "They is ready.", correct: "They are ready.", explanation: "'Is' is for singular (He/She/It). 'Are' is for plural (They/We) and 'You'." },
      { wrong: "I are happy.", correct: "I am happy.", explanation: "'Are' is for You/We/They. 'I' always uses 'am'." },
      { wrong: "We was late yesterday.", correct: "We were late yesterday.", explanation: "'Was' is for I/He/She/It in past. 'Were' is for You/We/They in past." },
      { wrong: "She are my best friend.", correct: "She is my best friend.", explanation: "'She' is singular — always use 'is', not 'are'." },
    ],

    story: {
      title: "Arjun's First Day at a Multinational Company",
      paragraphs: [
        "Arjun was nervous. It was his first day at a big company in Bengaluru. As he entered the office, he thought, 'I am ready for this. This is my big chance.'",
        "'Good morning!' said the receptionist. 'You are Arjun Sharma, right? Your team is on the 3rd floor. The elevator is to your left.'",
        "When Arjun reached the 3rd floor, his new manager was there to greet him. 'I am Priya Nair, your manager,' she said warmly. 'The team is very excited to meet you.'",
        "Arjun introduced himself to his team: 'Hi everyone! I am Arjun. I am from Pune. I am a software developer with 3 years of experience. I am really happy to be here!'",
        "His colleague Ravi smiled: 'We are happy to have you! The project we are working on is very interesting. Our deadline is next month, but we are well prepared.'",
        "That evening, Arjun called his mother. 'Mom, the office is amazing! My manager is very kind. My colleagues are friendly. I am so glad I took this opportunity!'",
        "His mother replied: 'I am so proud of you, beta. You are exactly where you are supposed to be!'",
      ],
      moral: "Every new beginning requires clear communication. Be Verb helps you describe who you are, where you are, and how you feel — in any situation!",
      keyWords: [
        { word: "nervous", meaning: "feeling worried or anxious about something" },
        { word: "receptionist", meaning: "person who greets visitors at an office" },
        { word: "colleague", meaning: "person you work with" },
        { word: "deadline", meaning: "the last date to complete something" },
      ],
    },

    dialogue: {
      title: "Job Interview — Using Be Verb Perfectly",
      setting: "Rahul is being interviewed for a Software Engineer position at a tech company.",
      lines: [
        { speaker: "Interviewer", text: "Good morning! Please have a seat. I am Mr. Singh, the HR manager. How are you today?", hindi: "शुभ प्रभात! कृपया बैठिए। मैं Mr. Singh, HR manager हूँ। आज आप कैसे हैं?" },
        { speaker: "Rahul", text: "Good morning, Mr. Singh! I am doing great, thank you. I am Rahul Verma. I am very excited to be here today.", hindi: "शुभ प्रभात, Mr. Singh! मैं बहुत अच्छा हूँ, धन्यवाद। मैं Rahul Verma हूँ। मैं आज यहाँ होकर बहुत excited हूँ।" },
        { speaker: "Interviewer", text: "Great! So, Rahul, tell me — where are you from, and what is your current role?", hindi: "बढ़िया! तो, Rahul, बताइए — आप कहाँ से हैं, और आपकी वर्तमान भूमिका क्या है?" },
        { speaker: "Rahul", text: "I am from Jaipur, Rajasthan. Currently, I am a software developer at ABC Technologies. I am responsible for the backend API development. My team is of 8 people.", hindi: "मैं Jaipur, Rajasthan से हूँ। वर्तमान में, मैं ABC Technologies में software developer हूँ। मैं backend API development के लिए जिम्मेदार हूँ। मेरी team 8 लोगों की है।" },
        { speaker: "Interviewer", text: "That is impressive! Why are you interested in this position?", hindi: "यह प्रभावशाली है! आप इस position में रुचि क्यों रखते हैं?" },
        { speaker: "Rahul", text: "Your company is known for innovation. The projects here are challenging and exciting. I am confident that I am the right fit for this role. I am ready to contribute from day one!", hindi: "आपकी company innovation के लिए जानी जाती है। यहाँ के projects challenging और exciting हैं। मुझे विश्वास है कि मैं इस role के लिए सही व्यक्ति हूँ। मैं पहले दिन से योगदान देने के लिए तैयार हूँ!" },
        { speaker: "Interviewer", text: "Excellent, Rahul! Your answers are very clear. We are certainly interested in you. We will be in touch.", hindi: "बहुत बढ़िया, Rahul! आपके जवाब बहुत स्पष्ट हैं। हम निश्चित रूप से आपमें रुचि रखते हैं। हम संपर्क में रहेंगे।" },
      ],
      notes: [
        "Notice how 'am', 'is', and 'are' are used throughout the interview",
        "'I am + adjective' describes your feelings: 'I am excited', 'I am confident'",
        "'I am + noun' describes your identity: 'I am a developer', 'I am from Jaipur'",
        "Be Verb in present tense makes your introduction sound confident and clear",
      ],
    },

    summary: [
      "Be Verb = am / is / are (present) | was / were (past) | will be (future)",
      "AM: only with 'I' | IS: He, She, It | ARE: You, We, They",
      "WAS: I, He, She, It (past) | WERE: You, We, They (past)",
      "Uses: identity, description, location, age, time, feelings",
      "The most important verb in English — used in EVERY conversation",
    ],
  },

  // d4-t1-s2: Am / Is / Are — Present Be Verb
  "d4-t1-s2": {
    whyLearnThis: `Am, Is, Are — these 3 small words unlock 90% of basic English conversation!\n\nEvery time you describe ANYTHING happening RIGHT NOW:\n• "I am hungry." (मुझे भूख है।)\n• "The weather is beautiful." (मौसम सुंदर है।)\n• "My friends are here." (मेरे दोस्त यहाँ हैं।)\n\nYou need Am/Is/Are.\n\nThink of Am/Is/Are as the BRIDGE between the subject and what you want to say about it:\nI → AM → [anything about me]\nHe/She/It → IS → [anything about him/her/it]\nYou/We/They → ARE → [anything about them]\n\nMaster these 3 words and you can describe EVERYTHING happening in the present moment!`,

    conceptExplanation: `AM / IS / ARE — The Present Be Verb\n\nAM (हूँ) — ONLY with "I":\n• I am a student. (मैं एक छात्र हूँ।)\n• I am from Delhi. (मैं दिल्ली से हूँ।)\n• I am 22 years old. (मैं 22 साल का हूँ।)\n• I am happy today. (मैं आज खुश हूँ।)\n• I am ready! (मैं तैयार हूँ!)\n\nIS (है) — with He, She, It, singular nouns:\n• He is my brother. (वह मेरा भाई है।)\n• She is a doctor. (वह एक doctor है।)\n• It is very hot. (बहुत गर्मी है।)\n• Ravi is at work. (Ravi काम पर है।)\n• The movie is amazing! (Movie amazing है!)\n\nARE (हैं/हो) — with You, We, They, plural nouns:\n• You are right. (आप/तुम सही हो।)\n• We are classmates. (हम classmates हैं।)\n• They are from Hyderabad. (वे Hyderabad से हैं।)\n• My parents are at home. (मेरे माता-पिता घर पर हैं।)\n• The results are out! (Results आ गए हैं!)\n\nNEGATIVE FORM (am not / is not / are not):\n• I am not feeling well. → I'm not well.\n• He is not here. → He isn't here.\n• They are not ready. → They aren't ready.\n\nQUESTION FORM:\n• Am I late? | Are you sure? | Is she coming?`,

    rules: [
      {
        rule: "Subject + Am/Is/Are + Description (main sentence structure)",
        explanation: "Every Be Verb sentence follows this pattern: subject first, then the right Be Verb (am/is/are), then what you want to describe. The description can be a noun (I am a teacher), adjective (She is beautiful), location (He is at home), or time/age.",
        example: "I am + [noun/adjective/location]: 'I am a developer. I am tired. I am in the office.'\nShe is + [description]: 'She is smart. She is from Mumbai. She is 25 years old.'",
      },
      {
        rule: "Contractions: I'm / He's / She's / It's / You're / We're / They're",
        explanation: "In spoken English and informal writing, we always contract 'am', 'is', 'are' with the subject. Using the full form ('I am', 'He is') sounds formal — contractions sound natural and native.",
        example: "I am → I'm | He is → He's | She is → She's | It is → It's | You are → You're | We are → We're | They are → They're",
        exception: "Never contract in formal writing (official letters, exams). Never contract the negative form when emphasizing: 'He is NOT here' (stress on 'not').",
      },
    ],

    commonMistakes: [
      { wrong: "I is tired.", correct: "I am tired.", explanation: "'I' always uses 'am'. Never 'is' or 'are' with 'I'." },
      { wrong: "She are beautiful.", correct: "She is beautiful.", explanation: "'She' (singular, 3rd person) uses 'is'. 'Are' is for You/We/They." },
      { wrong: "They is from Chennai.", correct: "They are from Chennai.", explanation: "'They' (plural) uses 'are'. 'Is' is only for He/She/It." },
      { wrong: "He aren't my friend.", correct: "He isn't my friend.", explanation: "Negative of 'is' = 'isn't' (not 'aren't'). 'Aren't' is for You/We/They." },
      { wrong: "My name is Rahul and I am 25 and I am engineer.", correct: "My name is Rahul. I am 25 years old. I am an engineer.", explanation: "Don't chain too many 'am/is/are' in one sentence. Use separate sentences for clarity." },
    ],

    sentencePatterns: [
      {
        pattern: "Subject + Am/Is/Are + Noun (Identity)",
        hindiPattern: "Subject + हूँ/है/हैं + Noun (पहचान)",
        examples: [
          { english: "I am a software engineer.", hindi: "मैं एक software engineer हूँ।" },
          { english: "She is the manager of this department.", hindi: "वह इस department की manager है।" },
          { english: "We are students of the same college.", hindi: "हम एक ही college के छात्र हैं।" },
          { english: "Ravi and Priya are my best friends.", hindi: "Ravi और Priya मेरे सबसे अच्छे दोस्त हैं।" },
          { english: "It is a golden opportunity.", hindi: "यह एक सुनहरा मौका है।" },
        ],
      },
      {
        pattern: "Subject + Am/Is/Are + Adjective (Description)",
        hindiPattern: "Subject + हूँ/है/हैं + Adjective (वर्णन)",
        examples: [
          { english: "I am very excited about the new project.", hindi: "मैं नए project को लेकर बहुत excited हूँ।" },
          { english: "The presentation is impressive and well-prepared.", hindi: "Presentation प्रभावशाली और अच्छी तरह तैयार है।" },
          { english: "My colleagues are hardworking and talented.", hindi: "मेरे colleagues मेहनती और talented हैं।" },
          { english: "The new office is spacious, modern, and well-equipped.", hindi: "नया office विशाल, आधुनिक और अच्छी तरह से सुसज्जित है।" },
        ],
      },
      {
        pattern: "Questions with Am/Is/Are",
        hindiPattern: "Am/Is/Are से सवाल",
        examples: [
          { english: "Are you free this evening?", hindi: "क्या आप आज शाम free हैं?" },
          { english: "Is the meeting still scheduled for 3 PM?", hindi: "क्या meeting अभी भी 3 बजे scheduled है?" },
          { english: "Am I correct in my understanding?", hindi: "क्या मेरी समझ सही है?" },
          { english: "Are the results ready?", hindi: "क्या results तैयार हैं?" },
        ],
      },
    ],

    summary: [
      "AM = only with 'I' | IS = He/She/It (singular) | ARE = You/We/They (plural)",
      "Use Be Verb to describe identity, characteristics, location, time, feelings",
      "Contractions: I'm, He's, She's, It's, You're, We're, They're",
      "Negative: am not, isn't (is not), aren't (are not)",
      "Questions: flip the subject and Be Verb — 'Are you...?', 'Is she...?', 'Am I...?'",
    ],
  },

  // d4-t1-s3: Was / Were — Past Be Verb
  "d4-t1-s3": {
    whyLearnThis: `"Was" and "Were" are how you describe EVERYTHING from the past!\n\nWhen you talk about:\n• How you felt yesterday: "I was very tired."\n• What something was like: "The food was amazing!"\n• Where someone was: "She was in the hospital."\n• Past events: "The meeting was successful."\n\nYou use WAS or WERE.\n\nThis is ESSENTIAL for:\n✓ Telling stories: "Once upon a time, there was a young student..."\n✓ Job interviews: "I was the team leader at my previous company."\n✓ Daily conversations: "Yesterday was a great day!"\n✓ Writing: "The weather was perfect for a picnic."`,

    conceptExplanation: `WAS / WERE — Past Tense of Be Verb\n\nWAS (था/थी) — with I, He, She, It:\n• I was in Delhi last year. (मैं पिछले साल Delhi में था।)\n• He was the best student. (वह सबसे अच्छा छात्र था।)\n• She was very nervous. (वह बहुत nervous थी।)\n• It was a beautiful morning. (यह एक सुंदर सुबह थी।)\n\nWERE (थे/थीं) — with You, We, They:\n• You were right about that. (आप उस बारे में सही थे।)\n• We were classmates in school. (हम school में classmates थे।)\n• They were late to the meeting. (वे meeting में देर से आए।)\n• The results were disappointing. (Results निराशाजनक थे।)\n\nNEGATIVE FORM:\n• I was not there. → I wasn't there.\n• He was not happy. → He wasn't happy.\n• They were not ready. → They weren't ready.\n\nQUESTION FORM:\n• Was I wrong? | Were you there?\n• Was she at home? | Were they ready?\n• Was the movie good? | Were the results good?`,

    rules: [
      {
        rule: "WAS = I, He, She, It (past) | WERE = You, We, They (past)",
        explanation: "Same as present tense rule but in past. WAS is the past form of 'am' and 'is'. WERE is the past form of 'are'.",
        example: "Present → Past: I am → I was | He is → He was | They are → They were | You are → You were",
        exception: "'If I were you...' — This is called the SUBJUNCTIVE mood. Even though 'I' normally uses 'was', in hypothetical situations ('if' statements), 'were' is used: 'If I were rich...' / 'If she were here...'",
      },
    ],

    commonMistakes: [
      { wrong: "I were at home yesterday.", correct: "I was at home yesterday.", explanation: "'I' uses 'was' in past tense (just like 'am' in present)." },
      { wrong: "They was wrong.", correct: "They were wrong.", explanation: "'They' uses 'were' in past tense (just like 'are' in present)." },
      { wrong: "Was you there?", correct: "Were you there?", explanation: "Questions with 'you' use 'were', not 'was': Were you there? Were you ready?" },
    ],

    sentencePatterns: [
      {
        pattern: "Subject + Was/Were + Description (Past Statements)",
        hindiPattern: "Subject + था/थे + Description (भूतकाल)",
        examples: [
          { english: "I was very nervous during my first presentation.", hindi: "अपनी पहली presentation के दौरान मैं बहुत nervous था।" },
          { english: "The interview was challenging but rewarding.", hindi: "Interview challenging था लेकिन फायदेमंद था।" },
          { english: "My previous manager was very supportive.", hindi: "मेरे पिछले manager बहुत supportive थे।" },
          { english: "We were a team of five when the project started.", hindi: "जब project शुरू हुआ तो हम पाँच लोगों की team थे।" },
          { english: "The results were better than expected.", hindi: "Results अपेक्षा से बेहतर थे।" },
        ],
      },
    ],

    summary: [
      "WAS = past of 'am' and 'is' → used with I, He, She, It",
      "WERE = past of 'are' → used with You, We, They",
      "Negative: wasn't (was not), weren't (were not)",
      "Questions: Was she...? Were they...? Were you...?",
      "Special: 'If I were you...' — subjunctive mood (hypothetical situations)",
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // DAY 5 — DEMONSTRATIVE PRONOUN (This / That / These / Those)
  // ══════════════════════════════════════════════════════════════

  // d5-t1-s1: What Are Demonstrative Pronouns?
  "d5-t1-s1": {
    whyLearnThis: `"This is amazing!" "That was a great idea!" "These are the files you need." "Those were the best days!"\n\nDemonstrative pronouns are POINTING words — you use them to point out SPECIFIC things without repeating the noun!\n\nYou use them:\n✓ When you show something to someone: "Look at this!"\n✓ When you talk about something far: "That building over there."\n✓ When you refer to multiple things near you: "These are my documents."\n✓ When you refer to past things: "Those were the days!"\n\nIn conversations: CONSTANTLY!\nIn presentations: "This graph shows..." / "These figures represent..."\nIn phone calls: "Is this Priya?" / "This is Rahul calling."`,

    conceptExplanation: `DEMONSTRATIVE PRONOUNS — The 4 Pointing Words\n\n📍 THE SIMPLE RULE:\nNEAR or PRESENT → THIS (one) / THESE (many)\nFAR or PAST → THAT (one) / THOSE (many)\n\n📊 THE COMPLETE CHART:\n\n       SINGULAR (एक)    PLURAL (अनेक)\nNEAR:   THIS             THESE\nFAR:    THAT             THOSE\n\n✅ THIS (यह — near, singular):\n• "This is my pen." (यह मेरी कलम है।)\n• "This book is interesting." (यह किताब interesting है।)\n• "Is this your phone?" (क्या यह आपका फ़ोन है?)\n\n✅ THAT (वह — far, singular):\n• "That is a beautiful painting." (वह एक सुंदर painting है।)\n• "Who is that woman?" (वह महिला कौन है?)\n• "That was an excellent presentation!" (वह एक उत्कृष्ट presentation थी!)\n\n✅ THESE (ये — near, plural):\n• "These are my project files." (ये मेरी project files हैं।)\n• "These results are excellent." (ये results excellent हैं।)\n• "Please look at these documents." (कृपया इन documents को देखें।)\n\n✅ THOSE (वे — far, plural):\n• "Those were the best results we ever had." (वे अब तक के सबसे अच्छे results थे।)\n• "Who are those people?" (वे लोग कौन हैं?)\n• "Those days were very tough." (वे दिन बहुत कठिन थे।)\n\n⚠️ DEMONSTRATIVE PRONOUN vs DEMONSTRATIVE ADJECTIVE:\nPronoun: "This is nice." (subject of sentence)\nAdjective: "This book is nice." (describes the noun 'book')`,

    hindiExplanation: `Demonstrative Pronouns = संकेतवाचक सर्वनाम (Pointing Words)\n\nसरल नियम:\nपास / अभी → This (एक) / These (अनेक)\nदूर / पहले → That (एक) / Those (अनेक)\n\nThis = यह (एक, पास)\nThat = वह (एक, दूर)\nThese = ये (अनेक, पास)\nThose = वे (अनेक, दूर)\n\nउदाहरण:\n• This is my bag. = यह मेरा बैग है। (पास, एक)\n• That is his car. = वह उसकी car है। (दूर, एक)\n• These are my notes. = ये मेरे notes हैं। (पास, अनेक)\n• Those were good times. = वे अच्छे समय थे। (पहले, अनेक)`,

    rules: [
      {
        rule: "THIS for one near thing, THESE for many near things",
        explanation: "Use 'this' when pointing to one object/person close to you (physically or in time). Use 'these' when pointing to multiple objects/people close to you.",
        example: "Near+Singular: 'This is my ID card.' | Near+Plural: 'These are the project documents.'",
        exception: "'This' can also be used on phone calls when introducing yourself: 'Hello, this is Rahul calling.' Even though you're not physically 'near', it's a convention.",
      },
      {
        rule: "THAT for one far thing, THOSE for many far things",
        explanation: "Use 'that' for one distant object/person (far in space or past in time). Use 'those' for multiple distant objects/people.",
        example: "Far+Singular: 'That is the head office building.' | Far+Plural: 'Those are old records from 2018.'",
        exception: "'That' is also used to refer to something just mentioned: 'She got promoted. That is wonderful news!' (referring back to the promotion)",
      },
    ],

    commonMistakes: [
      { wrong: "These is my pen.", correct: "This is my pen.", explanation: "'This' is singular (one pen). 'These' is plural — use 'These are my pens' (many pens)." },
      { wrong: "Those is a beautiful house.", correct: "That is a beautiful house.", explanation: "'Those' is plural. For one house far away, use 'That is a beautiful house.'" },
      { wrong: "This are my friends.", correct: "These are my friends.", explanation: "'Friends' is plural — use 'these' (nearby, plural). The verb becomes 'are'." },
      { wrong: "Hello? Is this Priya calling?", correct: "Hello? Is this Priya? This is Rahul calling.", explanation: "On phone: the CALLER says 'This is [name]'. To verify who you called: 'Is this Priya?' (correct!)" },
    ],

    summary: [
      "4 demonstrative pronouns: This / That / These / Those",
      "Near+Singular = THIS | Near+Plural = THESE",
      "Far+Singular = THAT | Far+Plural = THOSE",
      "They replace nouns to avoid repetition and point to specific things",
      "Special: 'This is Rahul.' (phone) / 'That is wonderful!' (referring to news)",
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // DAY 6 — HAS / HAVE
  // ══════════════════════════════════════════════════════════════

  // d6-t1-s1: Has vs Have — Which One to Use?
  "d6-t1-s1": {
    whyLearnThis: `"I have a dream." "She has a great personality." "Do you have time?"\n\nHas and Have are OWNERSHIP WORDS — they tell us who possesses, owns, or experiences something.\n\nYou use Has/Have:\n✓ To show possession: "I have a car." / "She has a laptop."\n✓ To describe: "He has blue eyes." / "We have a great team."\n✓ To ask questions: "Do you have a moment?" / "Does she have the report?"\n✓ In present perfect: "I have finished the work." / "She has already left."\n\nThis is one of the most IMPORTANT verbs in English. You will use it dozens of times every day!`,

    conceptExplanation: `HAS vs HAVE — The Rules\n\nHAVE (हैं/है) — with I, You, We, They:\n• I have a meeting at 3 PM. (मेरी 3 बजे meeting है।)\n• You have a great attitude. (आपका नज़रिया बेहतरीन है।)\n• We have everything we need. (हमारे पास जो चाहिए सब है।)\n• They have submitted the report. (उन्होंने report submit कर दी है।)\n\nHAS (है) — with He, She, It (and singular nouns):\n• He has a lot of experience. (उसके पास बहुत experience है।)\n• She has a master's degree. (उसके पास master's degree है।)\n• It has many features. (इसमें कई features हैं।)\n• The company has 500 employees. (company में 500 employees हैं।)\n\nREMEMBER THE PATTERN:\nSame as Be Verb!\n• AM/HAVE → for 'I'\n• IS/HAS → for He, She, It\n• ARE/HAVE → for You, We, They\n\nQUESTION FORM:\n• Do I have...? / Do you have...? / Do we have...? / Do they have...?\n• Does he have...? / Does she have...? / Does it have...?\n\nNEGATIVE FORM:\n• I don't have time. / We don't have enough staff.\n• He doesn't have experience. / She doesn't have permission.`,

    hindiExplanation: `Have = मेरे पास है, तुम्हारे पास है, हमारे पास है, उनके पास है\nHas = उसके पास है (he/she/it के लिए)\n\nसरल नियम:\n• I, You, We, They → HAVE\n• He, She, It → HAS\n\nउदाहरण:\n• I have a car. = मेरे पास एक car है।\n• She has a laptop. = उसके पास laptop है।\n• They have a big house. = उनके पास बड़ा घर है।\n• He has good English skills. = उसकी English अच्छी है।\n\nसवाल:\n• Do you have...? = क्या आपके पास... है?\n• Does he have...? = क्या उसके पास... है?`,

    rules: [
      {
        rule: "HAVE with I, You, We, They | HAS with He, She, It",
        explanation: "The rule is exactly the same as the Is/Are rule for Be Verb. Singular third person (he/she/it) gets 'has'. Everyone else gets 'have'.",
        example: "✅ I have a pen. | ✅ You have time. | ✅ She has patience. | ✅ The phone has good camera.\n❌ She have a car. | ❌ He have experience. | ❌ It have many features.",
        exception: "When using 'have' as a main verb (possession), it doesn't get -ing form: ❌ 'I am having a car.' ✅ 'I have a car.' BUT in experiences: ✅ 'I am having lunch right now.'",
      },
      {
        rule: "Questions: Do + I/you/we/they + have | Does + he/she/it + have",
        explanation: "To form questions with 'have' (possession), use the auxiliary 'do/does'. After 'does', always use 'have' (not 'has') because 'does' already marks the third person.",
        example: "✅ Does she have time? | ✅ Do you have the report? | ✅ Does the product have a warranty?\n❌ Has she time? | ❌ Have you the report? (British English only) | ❌ Does she has time?",
        exception: "In British English, 'Have you the time?' is acceptable but old-fashioned. Indian and American English always use 'Do you have...'",
      },
    ],

    commonMistakes: [
      { wrong: "She have a car.", correct: "She has a car.", explanation: "'She' = 3rd person singular → always use 'has', never 'have'." },
      { wrong: "Does he has time?", correct: "Does he have time?", explanation: "After 'does', always use 'have' (base form). 'Does' already shows 3rd person." },
      { wrong: "They has finished the work.", correct: "They have finished the work.", explanation: "'They' = plural → always use 'have'. 'Has' is only for He/She/It." },
      { wrong: "I am having a smartphone.", correct: "I have a smartphone.", explanation: "For possession (owning), don't use -ing. 'I have a phone.' But for experience: 'I am having a great time!' is correct." },
    ],

    summary: [
      "HAVE: I, You, We, They | HAS: He, She, It (singular)",
      "For questions: Do you have...? Does she have...?",
      "Negative: don't have / doesn't have",
      "NEVER use -ing for possession: ❌ 'I am having a car' → ✅ 'I have a car'",
      "Same subject pattern as Be Verb (am/is/are → have/has)",
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // DAY 7 — HAD (Past of Have)
  // ══════════════════════════════════════════════════════════════

  // d7-t1-s1: What is Had? Past of Have Explained
  "d7-t1-s1": {
    whyLearnThis: `"I had a dream." "She had three interviews before getting the job." "We had a wonderful time together."\n\nHAD is the PAST TENSE of HAVE — and it's one of the most powerful verbs for storytelling and describing past experiences!\n\nYou use HAD when:\n✓ Describing past possession: "I had a bicycle when I was young."\n✓ Telling stories: "Once upon a time, a king had three sons."\n✓ Talking about past experiences: "I had never seen snow before."\n✓ Present Perfect: "I had already finished by the time he called."\n✓ Describing past characteristics: "She had a beautiful smile. He had a great sense of humor."\n\nUnlike HAVE and HAS (which depend on the subject), HAD is SAME for EVERYONE! This makes it easy to use!`,

    conceptExplanation: `HAD — The Past of Have\n\n🎯 THE BIG ADVANTAGE: HAD is the same for ALL subjects!\n\nPresent: I have, You have, He HAS, She HAS, We have, They have\nPast: I HAD, You HAD, He HAD, She HAD, We HAD, They HAD\n\nEveryone uses HAD in the past!\n\n📚 USES OF HAD:\n\n1️⃣ PAST POSSESSION (पहले कुछ था):\n• I had a red bicycle in school. (School में मेरे पास लाल cycle थी।)\n• She had a beautiful garden. (उसके पास एक सुंदर बगीचा था।)\n• They had three offices in Delhi. (उनके तीन office थे Delhi में।)\n\n2️⃣ PAST EXPERIENCE (पहले कोई अनुभव था):\n• He had a terrible accident last year. (उसे पिछले साल भयानक accident हुई।)\n• We had a fantastic vacation in Goa. (हमने Goa में शानदार छुट्टियाँ बिताईं।)\n• I had an amazing teacher in college. (College में मेरे एक amazing teacher थे।)\n\n3️⃣ PAST PERFECT (और भी पहले):\n• By the time she arrived, I had already left. (जब वह आई, मैं पहले ही जा चुका था।)\n• He had finished the report before the meeting. (Meeting से पहले उसने report complete कर ली थी।)\n\n4️⃣ NEGATIVE FORM: HAD NOT / HADN'T\n• I didn't have... (Wait — for simple past, we use "didn't have"!)\n• Past Perfect negative: I hadn't finished when she called.\n\n⚠️ IMPORTANT DISTINCTION:\nSimple past: "I didn't have time." (NOT "I hadn't time")\nPast Perfect: "I hadn't seen that movie when she recommended it."`,

    hindiExplanation: `HAD = HAVE/HAS का past tense (था/थी/थे)\n\nसबसे आसान बात: HAD सब subjects के साथ एक जैसा है!\n• I had = मेरे पास था\n• He had = उसके पास था\n• She had = उसके पास था\n• We had = हमारे पास था\n• They had = उनके पास था\n\nउपयोग:\n1. पुरानी चीज़ें: "I had a dog." (मेरे पास कुत्ता था।)\n2. पुराना अनुभव: "I had a great time." (मैंने बहुत मज़ा किया।)\n3. Past Perfect: "I had finished before he came." (वह आने से पहले मैं खत्म कर चुका था।)`,

    rules: [
      {
        rule: "HAD is the same for ALL subjects — no 'hads' for he/she",
        explanation: "Unlike 'have' and 'has' in present tense, 'had' is uniform. Every subject (I, you, he, she, it, we, they) uses the same 'had'. This makes past tense much simpler than present!",
        example: "✅ I had / You had / He had / She had / It had / We had / They had\n❌ She hads / He hadded / They hadded (all wrong — 'had' never changes)",
      },
      {
        rule: "For simple past negative: didn't have (NOT hadn't)",
        explanation: "When negating simple past possession, use 'didn't have'. Reserve 'hadn't' for Past Perfect (had + past participle structure).",
        example: "Simple past: 'I didn't have enough money.' / 'She didn't have time.'\nPast Perfect: 'She hadn't seen the movie before.' / 'I hadn't finished when he called.'",
        exception: "In British English, 'I hadn't any money' is sometimes used, but 'I didn't have any money' is more common globally.",
      },
    ],

    commonMistakes: [
      { wrong: "She hads a car.", correct: "She had a car.", explanation: "'Had' never changes — no 's', no 'd' added. It's always just 'had' for all subjects." },
      { wrong: "I hadn't time for it.", correct: "I didn't have time for it.", explanation: "For simple past negatives, use 'didn't have'. 'Hadn't' is for Past Perfect." },
      { wrong: "Before I came, he had left already.", correct: "Before I came, he had already left.", explanation: "Put 'already' between 'had' and the past participle: 'had already left'." },
    ],

    sentencePatterns: [
      {
        pattern: "Subject + had + noun/adjective (Past Possession/State)",
        hindiPattern: "Subject + था/थी/थे + noun (भूतकाल में था)",
        examples: [
          { english: "When I was a child, I had a bicycle.", hindi: "जब मैं बच्चा था, मेरे पास cycle थी।" },
          { english: "She had a very good reputation in the company.", hindi: "Company में उसकी बहुत अच्छी reputation थी।" },
          { english: "We had a beautiful office in Connaught Place.", hindi: "Connaught Place में हमारा एक सुंदर office था।" },
          { english: "The project had many challenges, but we solved them all.", hindi: "Project में कई challenges थे, लेकिन हमने सभी को solve किया।" },
        ],
      },
      {
        pattern: "Past Perfect: had + past participle (Action completed before another past action)",
        hindiPattern: "Past Perfect: जब ... तब पहले ही... हो चुका था",
        examples: [
          { english: "By the time I reached the office, the meeting had already started.", hindi: "जब मैं office पहुँचा, meeting पहले ही शुरू हो चुकी थी।" },
          { english: "She had never visited abroad before getting this job.", hindi: "यह job मिलने से पहले उसने कभी विदेश नहीं देखा था।" },
          { english: "I had prepared for months before the interview.", hindi: "Interview से पहले मैंने महीनों तैयारी की थी।" },
        ],
      },
    ],

    summary: [
      "HAD = past tense of both HAVE and HAS",
      "Same for ALL subjects — no exceptions, no 'hads'",
      "Uses: past possession, past characteristics, past perfect",
      "Simple past negative: 'didn't have' | Past perfect negative: 'hadn't + past participle'",
      "Past perfect: 'I had finished before he called' (one past action before another)",
    ],
  },
};

// ─── Export per-subtopic content function ────────────────────
// Returns specific content for a single subtopic ID, or null if not available
// Used by lesson-content.tsx for maximum content richness
// Checks Days 3-9 SUBTOPIC_CONTENT_MAP first, then Days 8-14 rich content
export function getSubtopicSpecificContent(
  subtopicId: string,
  _dayNumber: number
): Partial<LessonContentType> | null {
  // Check Days 3-9 handcrafted subtopic content first (most detailed)
  const d3to9 = SUBTOPIC_CONTENT_MAP[subtopicId];
  if (d3to9) return d3to9;
  // Check Days 8-14 rich content map (covers all d8-* through d14-* subtopics)
  const d8to14 = DAYS_8_TO_14_CONTENT[subtopicId];
  if (d8to14) return d8to14;
  return null;
}
