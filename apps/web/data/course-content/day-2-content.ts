// ============================================================
// Day 2 Content - Self Introduction
// Full lesson content for all 16 subtopics of Day 2
// Format: matches LessonContent interface from day-1-content.ts
// Covers: first impressions, name/age, job, family, hobbies,
//         educational background, professional intro, and more
// ============================================================

import { type LessonContent } from "./day-1-content";

// ─── Helper: Get Day 2 lesson content by subtopic ID ─────────
// Returns null if no content found for that subtopicId
export function getDay2LessonContent(subtopicId: string): LessonContent | null {
  return (DAY_2_LESSON_CONTENT[subtopicId] ?? null) as LessonContent | null;
}

// ─── Day 2 lesson content map ─────────────────────────────────
// Key = subtopic ID from days-config.ts
// Value = full LessonContent object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DAY_2_LESSON_CONTENT: Record<string, any> = {

  // ══════════════════════════════════════════════════════════════
  // Topic 1: The Art of First Impressions
  // Subtopic 1: The Power of First Impressions (d2-t1-s1)
  // ══════════════════════════════════════════════════════════════
  "d2-t1-s1": {
    whyLearnThis: `First impressions are formed in just 7 seconds. Whether you are meeting a client, attending an interview, joining a new office, or making friends — the way you introduce yourself determines how people will see you FOREVER.

In English, a strong first impression shows:
• You are confident and professional
• You can communicate clearly and fluently
• You respect the other person's time
• You have prepared and care about the interaction

This skill is used EVERY SINGLE DAY of your professional and social life. Mastering it will open doors that you didn't even know existed.

Real Impact:
→ Job interviews: 90% of interviewers decide in the first 30 seconds
→ Business meetings: Your first words set the tone for the entire relationship
→ Social situations: People who introduce themselves well are seen as leaders
→ Online communication: Your first message determines if someone responds`,

    conceptExplanation: `A first impression in English has three key parts:

PART 1 — WHO YOU ARE (Identity)
Tell them your name, where you are from, and your basic identity.
"My name is Rahul. I am from Pune, Maharashtra."

PART 2 — WHAT YOU DO (Role/Purpose)
Tell them your professional or current life role.
"I am a software engineer at TCS." OR "I am a final-year student at DU."

PART 3 — CONNECTION (Why you are talking to them)
Bridge the gap between you and them.
"I heard great things about your work, and I wanted to introduce myself."

The GOLDEN RULE: Keep your first introduction SHORT (30-60 seconds), CLEAR, and CONFIDENT. Do not tell your entire life story in the first meeting.`,

    simpleExplanation: `पहली बार किसी से मिलने पर 3 चीजें बताएं:
1. आपका नाम
2. आप क्या करते हैं
3. आप यहाँ क्यों आए हैं या उन्हें क्यों जानना चाहते हैं

बस इतना काफी है पहले introduction के लिए।`,

    hindiExplanation: `पहला impression 7 seconds में बन जाता है। English में confident introduction देना सीखना बहुत जरूरी है क्योंकि यह interview, office, और social situations में आपकी image बनाता है।`,

    rules: [
      {
        id: "d2r1",
        rule: "Always start with your name using 'My name is...' or 'I am...'",
        explanation: "Both are correct. 'My name is Rahul' is slightly more formal than 'I'm Rahul'.",
        examples: [
          "My name is Priya Sharma.",
          "I'm Vikram — nice to meet you.",
          "Please call me Raj.",
        ],
        exceptions: ["In informal settings, just saying your name is fine: 'Hey, I'm Arjun!'"],
        hindiNote: "Formal: 'My name is...' | Informal: 'I'm...'"
      },
      {
        id: "d2r2",
        rule: "Follow your name with your location or origin using 'I am from...'",
        explanation: "Use 'from' when talking about your hometown, city, or country.",
        examples: [
          "I am from Mumbai, Maharashtra.",
          "I'm originally from Delhi but I live in Bangalore now.",
          "I come from a small town in Rajasthan called Jodhpur.",
        ],
        exceptions: [],
        hindiNote: "'from' = 'से'. मैं Mumbai से हूँ = I am from Mumbai."
      },
      {
        id: "d2r3",
        rule: "State your profession or role with 'I am a...' or 'I work as a...'",
        explanation: "Use 'I am a' before job titles. For specific roles, 'I work as' also works.",
        examples: [
          "I am a software developer.",
          "I work as a marketing manager at a startup.",
          "I am currently a student pursuing B.Tech in Computer Science.",
        ],
        exceptions: ["For senior roles: 'I serve as' — 'I serve as the Director of Operations.'"],
        hindiNote: "'I am a + job title' सबसे common pattern है।"
      },
    ],

    sentencePatterns: [
      {
        id: "d2sp1",
        pattern: "Hi/Hello, my name is [NAME]. I am from [PLACE].",
        usage: "Standard formal introduction",
        examples: [
          "Hi, my name is Arun. I am from Chennai.",
          "Hello, my name is Sunita. I am from Hyderabad.",
          "Hi there, my name is Mohammed. I am from Kolkata.",
        ],
        hindiTranslation: "नमस्ते, मेरा नाम [नाम] है। मैं [जगह] से हूँ।",
      },
      {
        id: "d2sp2",
        pattern: "I am a [JOB TITLE] at/with [COMPANY/ORGANIZATION].",
        usage: "Professional context",
        examples: [
          "I am a data analyst at Infosys.",
          "I am a teacher with Delhi Public School.",
          "I am a freelance graphic designer.",
        ],
        hindiTranslation: "मैं [company] में एक [job title] हूँ।",
      },
      {
        id: "d2sp3",
        pattern: "It is nice / great / a pleasure to meet you.",
        usage: "Polite closing of introduction",
        examples: [
          "It is very nice to meet you, Mr. Sharma.",
          "It's great to finally meet you in person.",
          "It's a pleasure to meet everyone here today.",
        ],
        hindiTranslation: "आपसे मिलकर बहुत अच्छा लगा।",
      },
    ],

    commonMistakes: [
      {
        id: "d2cm1",
        mistake: "Saying 'Myself Rahul' instead of 'My name is Rahul' or 'I am Rahul'",
        correction: "Say 'My name is Rahul' or 'I am Rahul'",
        explanation: "'Myself Rahul' is a direct Hindi translation error. English does not use 'myself' to introduce yourself.",
        hindiExplanation: "'Myself Rahul' galat hai. Hindi mein 'Mera naam Rahul hai' ka sahi English translation hai 'My name is Rahul'.",
        wrongExample: "❌ Myself Rahul. I am from Delhi.",
        rightExample: "✅ My name is Rahul. I am from Delhi.",
      },
      {
        id: "d2cm2",
        mistake: "Saying 'I am doing engineering' instead of 'I am studying engineering'",
        correction: "Use 'studying', 'pursuing', or 'enrolled in' for education",
        explanation: "'Doing' is too vague for education. 'Studying' or 'pursuing' is more precise.",
        hindiExplanation: "'I am doing engineering' galat lag sakta hai. 'Studying engineering' zyada sahi hai।",
        wrongExample: "❌ I am doing B.Tech from Delhi University.",
        rightExample: "✅ I am studying B.Tech at Delhi University.",
      },
      {
        id: "d2cm3",
        mistake: "Giving too much information in the first introduction",
        correction: "Keep your introduction to 30-60 seconds maximum",
        explanation: "A first impression introduction is just the opening — not your full life story. Be brief, clear, and let the conversation flow naturally.",
        hindiExplanation: "पहले introduction में सिर्फ basic information दें। बाकी बातें conversation में अपने आप आएंगी।",
        wrongExample: "❌ Starting to explain your entire career history, family background, and future plans in the first 5 minutes.",
        rightExample: "✅ Hi, I'm Neha. I'm a marketing executive at Flipkart. I specialize in digital campaigns. Nice to meet you!",
      },
    ],

    advancedMistakes: [
      {
        id: "d2am1",
        mistake: "Not making eye contact while introducing yourself",
        correction: "Always make eye contact — it shows confidence and respect",
        explanation: "In English professional culture, eye contact is essential during introduction. Avoiding it signals lack of confidence.",
        hindiExplanation: "English business culture में eye contact बहुत important है। यह confidence दिखाता है।",
        wrongExample: "Looking down or around while saying your name.",
        rightExample: "Looking the person in the eyes, smiling, and speaking clearly.",
      },
    ],

    speakingTips: [
      "Slow down when saying your name — make sure they can hear it clearly",
      "Smile genuinely when you say 'Nice to meet you' — it creates warmth",
      "Offer a firm handshake (in-person) or a warm nod (online meetings)",
      "Repeat the other person's name once after hearing it: 'Great to meet you, Mr. Kumar!'",
      "Prepare a 30-second self-introduction in advance for job/interview situations",
    ],

    pronunciationGuide: {
      sounds: [
        { sound: "Nice to meet you", ipa: "/naɪs tə miːt juː/", tip: "Say it as one smooth phrase, not three separate words" },
        { sound: "Pleasure", ipa: "/ˈplɛʒər/", tip: "The 'ea' sounds like 'e' — PLEH-zher, not PLEE-zure" },
        { sound: "Introduction", ipa: "/ˌɪntrəˈdʌkʃən/", tip: "Stress the DUK syllable: in-truh-DUK-shun" },
      ],
    },

    memoryTricks: [
      "Remember WHO-WHAT-WHY: Who are you? What do you do? Why are you meeting this person?",
      "The 3C rule: Clear, Concise, Confident",
      "Imagine you are a news anchor — professional, clear, and engaging",
    ],

    professionalUsage: [
      {
        id: "d2pu1",
        context: "Job Interview",
        title: "Standard Interview Introduction",
        english: "Good morning. My name is Deepak Verma. I am from Lucknow, and I currently live in Noida. I have 3 years of experience in software development, specializing in React and Node.js. I am very excited about this opportunity at your company.",
        hindi: "जब interviewer कहें 'Tell me about yourself' — तो यही pattern use करें।",
        tips: ["Keep it under 90 seconds", "End with why you want THIS specific job", "Show enthusiasm"],
      },
      {
        id: "d2pu2",
        context: "Business Meeting",
        title: "Professional Meeting Introduction",
        english: "Hello everyone, I'm Sneha Kapoor. I work as a Product Manager at Razorpay, and I am here today to discuss the partnership proposal. It's a pleasure to meet all of you.",
        hindi: "Business meeting में introduction formal और brief रखें।",
        tips: ["State your company and role clearly", "Mention why you are at the meeting", "Keep it under 30 seconds"],
      },
    ],

    dailyUsage: [
      { situation: "Meeting a new neighbor", english: "Hi! I just moved in next door. My name is Rohan. I work in IT. Looking forward to getting to know you!", hindi: "नए पड़ोसी से मिलने पर friendly और brief रहें।" },
      { situation: "At a social event", english: "Hi, I'm Ananya! I'm a friend of Riya's. I work in marketing. Are you also from her college?", hindi: "Social events में light और friendly introduction दें।" },
    ],

    story: {
      title: "Rahul's Big Interview Day",
      content: `Rahul was nervous. Today was the most important day of his career — his interview at Google India.

He walked into the meeting room. Three interviewers sat across the table, looking professional and focused.

"Please introduce yourself," said the lead interviewer.

Rahul took a deep breath. He remembered his preparation:

"Good morning. My name is Rahul Sharma. I am from Jaipur, Rajasthan, but I have been living in Bangalore for the past 3 years. I completed my B.Tech in Computer Science from NIT Jaipur in 2021.

I currently work as a backend developer at Infosys, where I specialize in Python and distributed systems. During my time there, I led a team of 4 developers to reduce API response time by 40%.

I am applying here because Google's engineering culture is world-class, and I believe I can contribute significantly to your infrastructure team. I'm very excited about this opportunity."

The interviewers nodded and smiled.

The first interviewer said, "That was an excellent introduction, Rahul. Very clear and structured."

Rahul smiled back, feeling confident. His preparation had paid off.

He got the offer three days later.`,
      moral: "A clear, confident, and well-structured self-introduction is the first step to any success.",
      vocabulary: ["nervous", "professional", "preparation", "specialize", "contribute", "infrastructure", "structured"],
    },

    dialogue: {
      title: "First Day at New Office",
      exchanges: [
        { speaker: "A", text: "Good morning! You must be the new joiner. I'm Priya, from the marketing team.", translation: "सुप्रभात! आप नए joiner लगते हैं। मैं Priya हूँ, marketing team से।" },
        { speaker: "B", text: "Good morning! Yes, today is my first day. I'm Arjun Mehta. I'll be joining as a Data Analyst. Very nice to meet you, Priya.", translation: "सुप्रभात! हाँ, आज मेरा पहला दिन है। मैं Arjun Mehta हूँ। Data Analyst के रूप में join करूँगा। आपसे मिलकर बहुत अच्छा लगा, Priya।" },
        { speaker: "A", text: "Welcome to the team! Where are you from, Arjun?", translation: "टीम में आपका स्वागत है, Arjun! आप कहाँ से हैं?" },
        { speaker: "B", text: "I'm originally from Pune, but I studied and worked in Hyderabad for the past 4 years. I just moved to Mumbai last week.", translation: "मैं मूल रूप से Pune से हूँ, लेकिन पिछले 4 साल Hyderabad में पढ़ाई और काम किया। पिछले हफ्ते Mumbai आया।" },
        { speaker: "A", text: "Oh wow! Big move. How are you finding Mumbai so far?", translation: "वाह! बड़ा बदलाव। Mumbai कैसा लग रहा है अभी तक?" },
        { speaker: "B", text: "It's exciting! A bit overwhelming, honestly. But I'm happy to be at this company — I've heard great things about the culture here.", translation: "रोमांचक है! थोड़ा overwhelming भी है। लेकिन मैं खुश हूँ यहाँ होने पर — यहाँ की culture के बारे में बहुत अच्छी बातें सुनी हैं।" },
        { speaker: "A", text: "You'll love it here. Let me introduce you to the rest of the team!", translation: "आपको यहाँ बहुत अच्छा लगेगा। मैं आपको बाकी team से मिलवाती हूँ!" },
      ],
      vocabulary: ["joiner", "originally", "overwhelm", "culture", "introduce"],
    },

    summary: {
      keyPoints: [
        "First impressions are formed in 7 seconds — make every word count",
        "Use 'My name is...' or 'I am...' — never 'Myself...'",
        "The WHO-WHAT-WHY structure: Name + Role + Connection",
        "Keep your first introduction under 60 seconds",
        "End with 'Nice / Great / Pleased to meet you'",
        "Eye contact + smile = confidence",
      ],
      quickReview: [
        { question: "How long should a first introduction be?", answer: "30-60 seconds maximum" },
        { question: "What is wrong with 'Myself Rahul'?", answer: "It's a Hindi translation error. Say 'My name is Rahul' or 'I am Rahul'" },
        { question: "What does the WHO-WHAT-WHY structure mean?", answer: "Who = your name, What = your job/role, Why = your reason for being there" },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════
  // Topic 1 — Subtopic 2: Saying Your Name Correctly (d2-t1-s2)
  // ══════════════════════════════════════════════════════════════
  "d2-t1-s2": {
    whyLearnThis: `Your name is your identity. When you say your name incorrectly or too quickly, people can't remember it — and that ruins the whole point of an introduction.

In English, the way you say your name signals how confident you are. A person who says their name clearly and proudly makes a strong impression.

Many Indian names are hard for English speakers to pronounce. Learning to introduce your name in a helpful, friendly way — and to offer an easier version if needed — is a key professional skill.`,

    conceptExplanation: `SAYING YOUR NAME IN ENGLISH:

1. Say your full name first:
   "My name is Subramaniam Venkataramaiah."

2. Offer a shorter version or nickname if appropriate:
   "You can call me Subbu — it's easier!"

3. Spell it if needed:
   "It's Subramaniam — S-U-B-R-A-M-A-N-I-A-M."

4. Offer pronunciation help:
   "My name is Dhananjay — it's pronounced dha-NAN-jay."

THE RULE: Never be embarrassed about your name. Say it with PRIDE. If they mispronounce it, correct them kindly: "Actually, it's [correct pronunciation]. Easy mistake to make!"`,

    simpleExplanation: `अपना नाम बोलने के तरीके:
1. पूरा नाम बोलें
2. छोटा नाम/nickname offer करें
3. जरूरत हो तो spelling दें
4. Pronunciation guide दें`,

    hindiExplanation: `अपना नाम proud होकर बोलें। अगर कोई गलत बोले तो politely correct करें।`,

    rules: [
      {
        id: "d2-s2-r1",
        rule: "Say your full name, then offer a shorter version if needed",
        explanation: "In formal settings, use your full name. Offering a nickname shows friendliness.",
        examples: [
          "My full name is Krishnamurthy, but you can call me Krishna.",
          "My name is Balakrishnan — most people call me Bala.",
        ],
        exceptions: [],
        hindiNote: "Office में पूरा नाम दें, फिर आसान version offer करें।",
      },
    ],

    sentencePatterns: [
      {
        id: "d2-s2-sp1",
        pattern: "My name is [FULL NAME] — you can call me [SHORT NAME].",
        usage: "When your name is long or hard to pronounce",
        examples: [
          "My name is Venkataramaiah — you can call me Venkat.",
          "My name is Thiruvenkatam — most people call me Thiru.",
        ],
        hindiTranslation: "मेरा नाम [पूरा नाम] है — आप मुझे [छोटा नाम] बुला सकते हैं।",
      },
      {
        id: "d2-s2-sp2",
        pattern: "It's pronounced [PRONUNCIATION] — [SPELLING].",
        usage: "When helping someone say your name correctly",
        examples: [
          "It's pronounced Dha-NAN-jay. D-H-A-N-A-N-J-A-Y.",
          "It's Shruti — S-H-R-U-T-I. Like 'Shrew-tee'.",
        ],
        hindiTranslation: "इसे [pronunciation] बोला जाता है।",
      },
    ],

    commonMistakes: [
      {
        id: "d2-s2-cm1",
        mistake: "Saying your name too fast or too softly",
        correction: "Say your name slowly and clearly — it's the most important word in the introduction",
        explanation: "Many people rush through their name because they are nervous. But your name is the ONE thing the other person must remember.",
        hindiExplanation: "घबराहट में लोग अपना नाम जल्दी बोल देते हैं। Name clearly और confidently बोलें।",
        wrongExample: "❌ Speaking so fast that the other person says 'Sorry, what was your name again?'",
        rightExample: "✅ Saying your name clearly, with a brief pause after it.",
      },
    ],

    advancedMistakes: [],
    speakingTips: [
      "Pause for 1 second after saying your name so it registers",
      "Make eye contact exactly when you say your name",
      "Say your name with a slight smile — it makes it sound warmer",
    ],
    pronunciationGuide: { sounds: [] },
    memoryTricks: [
      "Your name is a brand — say it like you are proud of it",
      "Practice saying your name 10 times in the mirror every morning this week",
    ],

    professionalUsage: [
      {
        id: "d2-s2-pu1",
        context: "Networking Event",
        title: "Introducing your name at a networking event",
        english: "Hi! I'm Raghavendra — but call me Raghu, it's much easier. I work in fintech, specializing in payment gateway integrations.",
        hindi: "Networking में name को easy बनाना लोगों को याद रखने में help करता है।",
        tips: ["Offer the short version proactively", "Smile when you say it"],
      },
    ],

    dailyUsage: [
      { situation: "Correcting a mispronunciation politely", english: "Actually, it's Shri-VATSA, not SHRI-vatsa. Easy to mix up! Please feel free to call me Shri.", hindi: "गलत pronunciation को politely correct करें।" },
    ],

    story: {
      title: "The Name That Changed Everything",
      content: `Deepika had always been embarrassed by her name. In meetings, she would mumble "Deepika" so quickly that people always asked "Sorry, what?" She would then get flustered and say it again, quieter.

One day, her mentor Priya noticed this pattern.

"Deepika," said Priya, "your name is beautiful. It means 'lamp'. It illuminates. Say it like that."

The next day, at an all-hands meeting, the CEO asked everyone to introduce themselves.

When it was Deepika's turn, she stood tall. "My name is Deepika Nair. It means 'lamp' — and I hope to bring light to whatever project I work on."

The room went quiet for a moment, then people smiled. Even the CEO said, "What a wonderful way to introduce yourself."

Her name became her brand.`,
      moral: "Say your name with pride and meaning — it becomes your identity.",
      vocabulary: ["embarrassed", "mumble", "flustered", "illuminate", "proactively"],
    },

    dialogue: {
      title: "Introducing Your Name at a Conference",
      exchanges: [
        { speaker: "A", text: "Hi! I don't think we've met. I'm James from Singapore.", translation: "नमस्ते! मुझे नहीं लगता हम मिले हैं। मैं James हूँ, Singapore से।" },
        { speaker: "B", text: "Hi James! I'm Sriramakrishnan — it's a mouthful, I know! You can call me Sri. I'm from Chennai, India.", translation: "हाय James! मैं Sriramakrishnan हूँ — जानता हूँ, थोड़ा लंबा है। मुझे Sri बुला सकते हैं। मैं Chennai, India से हूँ।" },
        { speaker: "A", text: "Sri — that's easy! Great to meet you. What brings you to this conference?", translation: "Sri — यह easy है! आपसे मिलकर अच्छा लगा। आप इस conference में क्यों आए?" },
        { speaker: "B", text: "I'm presenting a paper on AI ethics tomorrow. What about you?", translation: "मैं कल AI ethics पर एक paper present कर रहा हूँ। आप?" },
      ],
      vocabulary: ["mouthful", "conference", "presenting", "ethics"],
    },

    summary: {
      keyPoints: [
        "Say your full name first, then offer a shorter version",
        "Say your name SLOWLY and CLEARLY — never rush it",
        "Make eye contact when saying your name",
        "Politely correct mispronunciations: 'Actually, it's...'",
        "Be proud of your name — it's your identity",
      ],
      quickReview: [
        { question: "What should you do if your name is long?", answer: "Say your full name, then offer a shorter nickname: 'You can call me...'" },
        { question: "How should you correct a mispronunciation?", answer: "Politely: 'Actually, it's [correct]. Easy mistake!'" },
      ],
    },
  },

};

export default DAY_2_LESSON_CONTENT;
