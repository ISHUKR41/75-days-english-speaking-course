// ============================================================
// Days 3–7 Extended Subtopic Content
// Comprehensive, teacher-quality lesson content for every
// subtopic across Days 3–7 of the 75 Days Hard English Course.
//
// Structure: EXTENDED_SUBTOPIC_CONTENT maps subtopic IDs to
// Partial<LessonContent> objects that override the generic
// fallback generated in lesson-content.tsx.
//
// Coverage:
//   Day 3  — Imperative Sentence  (17 subtopics)
//   Day 4  — Be Verb              (17 subtopics)
//   Day 5  — Demonstrative Pronoun(17 subtopics)
//   Day 6  — Has / Have           (17 subtopics)
//   Day 7  — Had                  (17 subtopics)
// ============================================================

// Import the shared LessonContent type
import type { LessonContent as LessonContentType } from "./day-1-content";

// ============================================================
// The main export — all extended subtopic content entries
// ============================================================
export const EXTENDED_SUBTOPIC_CONTENT: Record<string, Partial<LessonContentType>> = {

  // ══════════════════════════════════════════════════════════
  // DAY 3 — IMPERATIVE SENTENCE
  // ══════════════════════════════════════════════════════════

  // ── d3-t1-s3: Commands vs Requests vs Suggestions ──
  "d3-t1-s3": {
    whyLearnThis: `In English, the same action can be expressed THREE different ways depending on your tone:\n\n"Go to the market!" (COMMAND — direct, strong)\n"Please go to the market." (REQUEST — polite, gentle)\n"You should go to the market." (SUGGESTION — soft advice)\n\nUnderstanding this difference is CRITICAL for:\n✓ Professional communication: Using the right tone in emails and meetings\n✓ Social situations: Not sounding rude when giving directions\n✓ Leadership: Knowing how to inspire, not just order\n✓ Interviews: "Would you mind telling me about yourself?" is softer than "Tell me about yourself!"\n\nNative English speakers switch between these automatically. You need to do the same!`,

    conceptExplanation: `THREE LEVELS OF IMPERATIVE FORCE:\n\n🔴 LEVEL 1 — COMMAND (Direct Order):\nFormula: BASE VERB + sentence\nTone: Strong, direct, urgent\nUsed: Emergencies, military, sports, when time is short\nExample:\n• "Sit down!" → (रुको, बैठो — strong)\n• "Stop the car!"\n• "Answer me now!"\n\nWhen appropriate: Teachers to students, managers in emergencies, parents to children, safety situations\n\n🟡 LEVEL 2 — REQUEST (Polite Command):\nFormula: Please + BASE VERB or BASE VERB + please\nTone: Respectful, cooperative, professional\nUsed: Office, formal situations, strangers, superiors\nExample:\n• "Please sit down." → (कृपया बैठिए — gentle)\n• "Could you please check this?"\n• "Kindly submit by Friday."\n\nWhen appropriate: Professional settings, formal writing, customer service, strangers\n\n🟢 LEVEL 3 — SUGGESTION (Soft Advice):\nFormula: You should/could + BASE VERB, or Why don't you + BASE VERB\nTone: Advisory, helpful, non-pressuring\nUsed: Giving advice, recommending, friendly guidance\nExample:\n• "You should try this restaurant." (यह restaurant try करो — soft suggestion)\n• "Why don't you take a break?"\n• "You could talk to the manager."\n\nWhen appropriate: Advice situations, when you don't have authority, friend-to-friend talk`,

    hindiExplanation: `तीन प्रकार के imperative:\n\n1. COMMAND (आदेश) — सीधा और strong:\n"बैठो!" / "रुको!" / "सुनो!"\nEnglish: "Sit!" / "Stop!" / "Listen!"\n\n2. REQUEST (अनुरोध) — विनम्र और polite:\n"कृपया बैठिए।" / "ज़रा रुकिए।"\nEnglish: "Please sit down." / "Kindly wait."\n\n3. SUGGESTION (सुझाव) — हल्का और friendly:\n"तुम्हें बैठना चाहिए।" / "क्यों न बैठ जाओ?"\nEnglish: "You should sit." / "Why don't you sit?"\n\nProfessional English में ज़्यादातर Request और Suggestion use करते हैं।`,

    rules: [
      {
        rule: "Match your tone to the situation — command only in emergencies",
        explanation: "Direct commands (without 'please') sound harsh in professional settings. Use 'please' with colleagues, clients, and superiors. Reserve direct commands for urgent, time-critical situations.",
        example: "✅ Emergency: 'Call the ambulance!' | ✅ Office: 'Please review this report.' | ✅ Advice: 'You should get some rest.'",
        exception: "In sports coaching and military settings, direct commands are standard and expected.",
      },
      {
        rule: "Suggestions use modal verbs — should, could, might, may",
        explanation: "Unlike commands and requests which use base verbs, suggestions use helping verbs: 'should', 'could', 'might', 'may'. These soften the instruction and show respect for the person's choice.",
        example: "'You should see a doctor.' | 'You could try the other approach.' | 'You might want to check the deadline.'",
        exception: "'Why don't you...?' and 'How about...?' are also common suggestion forms without modal verbs.",
      },
    ],

    commonMistakes: [
      { wrong: "You please sit down.", correct: "Please sit down. OR Sit down, please.", explanation: "Don't say 'You please...' — just use 'please' without the subject." },
      { wrong: "I suggest you should to go.", correct: "I suggest you go. OR You should go.", explanation: "After 'suggest that + subject', use the base verb without 'to'. Or simply say 'You should go.'" },
      { wrong: "Kindly to submit the form.", correct: "Kindly submit the form.", explanation: "After 'kindly', use the base verb directly — not 'to + verb'." },
    ],

    sentencePatterns: [
      {
        pattern: "Direct Command (base verb only)",
        hindiPattern: "सीधा आदेश",
        examples: [
          { english: "Open the window.", hindi: "खिड़की खोलो।" },
          { english: "Submit the report by 5 PM.", hindi: "रिपोर्ट 5 बजे तक जमा करो।" },
          { english: "Call me when you arrive.", hindi: "जब पहुँचो तब call करो।" },
        ],
      },
      {
        pattern: "Polite Request (Please + verb)",
        hindiPattern: "विनम्र अनुरोध",
        examples: [
          { english: "Please share the agenda before the meeting.", hindi: "Meeting से पहले कृपया agenda share करें।" },
          { english: "Could you please explain that again?", hindi: "क्या आप कृपया फिर से समझा सकते हैं?" },
          { english: "Kindly note the updated timeline.", hindi: "कृपया updated timeline नोट करें।" },
        ],
      },
      {
        pattern: "Suggestion (You should / Why don't you)",
        hindiPattern: "सुझाव",
        examples: [
          { english: "You should apply for that position — you're perfectly qualified.", hindi: "आपको उस position के लिए apply करना चाहिए।" },
          { english: "Why don't you talk to HR directly?", hindi: "आप सीधे HR से बात क्यों नहीं करते?" },
          { english: "You might want to double-check the figures before presenting.", hindi: "Present करने से पहले numbers दोबारा check करना शायद अच्छा हो।" },
        ],
      },
    ],

    speakingTips: [
      "Practice switching between command, request, and suggestion for the same sentence",
      "In professional settings, default to REQUEST level — it builds better relationships",
      "Listen to how your English-speaking colleagues ask for things — imitate their tone",
      "Practice saying 'Please' naturally — in fluent English it doesn't sound weak, it sounds professional",
    ],

    summary: [
      "Commands use base verbs — strong and direct",
      "Requests add 'please' or 'kindly' — polite and professional",
      "Suggestions use should/could/might — soft advice that respects choice",
      "In professional English, always default to REQUEST level",
      "Match your tone to the situation: emergencies = command, workplace = request, advice = suggestion",
    ],
  },

  // ── d3-t1-s4: Imperative with Please and Kindly ──
  "d3-t1-s4": {
    whyLearnThis: `"Please" and "Kindly" are MAGIC WORDS in professional English.\n\nWithout them:\n"Send me the file." → Can sound rude or demanding\n\nWith them:\n"Please send me the file." → Professional, respectful, collaborative\n"Kindly send me the file." → Formal, official, polite\n\nIn India's professional world, "Kindly" is especially important:\n✓ Email subject lines: "Kindly Confirm Attendance"\n✓ Official letters: "You are kindly requested to..."\n✓ WhatsApp professional messages: "Kindly note that..."\n✓ Meeting requests: "Please find the attached agenda"\n\nMastering these two words alone will make your English 50% more professional instantly!`,

    conceptExplanation: `PLEASE vs KINDLY — The Difference:\n\n📌 PLEASE:\n→ Used in: All situations — casual, semi-formal, formal\n→ Position: Beginning OR end of sentence\n→ Tone: Warm, friendly, collaborative\n→ Examples:\n• "Please call me." / "Call me, please."\n• "Please have a seat." / "Have a seat, please."\n• "Please check your email."\n\n📌 KINDLY:\n→ Used in: Formal and professional contexts ONLY\n→ Position: Beginning of sentence (not at end)\n→ Tone: Official, respectful, business-like\n→ Examples:\n• "Kindly submit the form by Monday."\n• "Kindly note that the office will remain closed on Friday."\n• "You are kindly requested to attend the meeting."\n\n⚠️ WRONG: "Submit the form, kindly." (Don't put kindly at the end)\n⚠️ WRONG: "Kindly to submit." (No 'to' after kindly)\n✅ CORRECT: "Kindly submit the form."\n\n📌 PLEASE NOTE / KINDLY NOTE:\nBoth are used to draw attention in professional writing:\n• "Please note that the deadline has been extended."\n• "Kindly note that your application is under review."`,

    hindiExplanation: `Please = कृपया (सभी situations में)\nKindly = कृपया (formal/professional situations में)\n\nPlease के साथ:\n• शुरू में: "Please come in." (कृपया अंदर आइए।)\n• अंत में: "Come in, please." (अंदर आइए, कृपया।)\n\nKindly के साथ:\n• हमेशा शुरू में: "Kindly submit the form." (कृपया form जमा करें।)\n• Emails और letters में बहुत ज़्यादा use होता है\n\nProfessional emails में: "Please find attached..." / "Kindly note that..."`,

    rules: [
      {
        rule: "'Please' can come at the beginning or end; 'kindly' only at the beginning",
        explanation: "'Please' is flexible — 'Please come in' and 'Come in, please' are both correct. 'Kindly' is always at the start of the clause: 'Kindly submit the form.' You never say 'Submit the form, kindly.'",
        example: "✅ Please come in. | ✅ Come in, please. | ✅ Kindly submit the form. | ❌ Submit the form, kindly.",
        exception: "In very formal official documents, you sometimes see 'You are kindly requested to...' which is a fixed phrase.",
      },
      {
        rule: "Use base verb directly after 'please' and 'kindly'",
        explanation: "Both 'please' and 'kindly' are followed directly by the base verb — never 'to + verb'.",
        example: "✅ Please send the file. | ✅ Kindly confirm your attendance. | ❌ Please to send the file. | ❌ Kindly to confirm.",
      },
    ],

    commonMistakes: [
      { wrong: "Kindly please submit the form.", correct: "Please submit the form. OR Kindly submit the form.", explanation: "Don't use 'kindly' and 'please' together — they mean the same thing. Use one or the other." },
      { wrong: "Submit the form, kindly.", correct: "Kindly submit the form.", explanation: "'Kindly' must come at the beginning of the request, not the end." },
      { wrong: "Please to call me back.", correct: "Please call me back.", explanation: "No 'to' after 'please'. Formula: Please + base verb." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional email phrases with Please",
        hindiPattern: "Professional email में Please का use",
        examples: [
          { english: "Please find the attached report.", hindi: "कृपया attached report देखें।" },
          { english: "Please let me know if you need any clarification.", hindi: "अगर कोई स्पष्टीकरण चाहिए तो कृपया बताएं।" },
          { english: "Please share your feedback by EOD.", hindi: "EOD तक कृपया अपना feedback share करें।" },
        ],
      },
      {
        pattern: "Professional phrases with Kindly",
        hindiPattern: "Professional context में Kindly का use",
        examples: [
          { english: "Kindly note that the meeting has been rescheduled to 3 PM.", hindi: "कृपया ध्यान दें कि meeting 3 बजे के लिए reschedule हो गई है।" },
          { english: "Kindly revert at the earliest.", hindi: "कृपया जल्द से जल्द respond करें।" },
          { english: "Kindly acknowledge receipt of this email.", hindi: "कृपया इस email की प्राप्ति की पुष्टि करें।" },
        ],
      },
    ],

    speakingTips: [
      "Say 'please' with a warm, natural tone — not forced or robotic",
      "In phone calls: 'Could you please hold for a moment?' — very professional",
      "When ending a request: 'Thank you' after the request makes it even more polite",
      "Practice writing 3 work-related 'Please/Kindly' sentences every day",
    ],

    summary: [
      "'Please' works in all contexts — formal, semi-formal, and casual",
      "'Kindly' is for formal/professional settings only — especially emails and official communication",
      "Both are followed by base verb directly — no 'to' in between",
      "'Please' can be at start or end; 'kindly' only at start",
      "Never combine 'kindly please' — use one or the other",
    ],
  },

  // ── d3-t2-s1: Positive Imperatives ──
  "d3-t2-s1": {
    whyLearnThis: `Every day you give positive commands and instructions. "Open this." "Read that." "Come here." "Listen carefully." These are POSITIVE IMPERATIVES — the most basic and common form of giving instructions in English.\n\nPositive imperatives are essential for:\n✓ Workplace: "Submit the report." "Join the call." "Review this document."\n✓ Teaching: "Read page 10." "Complete exercise 3." "Practice at home."\n✓ Navigation: "Turn left." "Go straight." "Take the first exit."\n✓ Cooking: "Add two cups of water." "Stir for 5 minutes." "Remove from heat."\n\nEvery recipe, every GPS, every instruction manual, every workplace email uses positive imperatives. This is the engine of instructional English!`,

    conceptExplanation: `POSITIVE IMPERATIVES — The Formula:\n\nBASE VERB + Object/Complement\n(No subject, no 'to', no auxiliary verb)\n\n🎯 BASE VERB = the dictionary form of the verb\n• go (not goes, going, went)\n• read (not reads, reading, read [past])\n• open (not opens, opened, opening)\n• be (the only one with special base form)\n\nSTRUCTURES:\n\n1️⃣ SIMPLE COMMAND:\nVerb + Object\n• "Open the door." "Read the email." "Start the engine."\n\n2️⃣ COMMAND + ADVERB:\nVerb + Object + Adverb (or Adverb + Verb)\n• "Walk quickly." "Listen carefully." "Speak slowly."\n• "Always check your work." "Never be late."\n\n3️⃣ COMMAND + PLACE:\nVerb + Place\n• "Come here." "Go there." "Wait outside." "Stand in line."\n\n4️⃣ TWO-PART COMMAND:\nVerb1 + and + Verb2\n• "Take a seat and wait." "Open the file and save it."\n• "Read the instructions and follow them carefully."\n\n5️⃣ IMPERATIVE WITH 'ALWAYS' / 'NEVER':\n• "Always double-check your work before submitting."\n• "Never share your password with anyone."\n• "Always greet the client with a smile."`,

    hindiExplanation: `Positive Imperative = सकारात्मक आदेश या निर्देश\n\nFormula: VERB (base form) + बाकी sentence\nSubject ("you") छुपा होता है हमेशा!\n\nTypes:\n1. Simple: "Read this." (यह पढ़ो।)\n2. With adverb: "Read this carefully." (इसे ध्यान से पढ़ो।)\n3. Two-part: "Read this and note it." (यह पढ़ो और नोट करो।)\n4. With always/never: "Always read carefully." (हमेशा ध्यान से पढ़ो।)\n\nYाद रखो: Base form use करो!\n❌ Reads → ✅ Read\n❌ Going → ✅ Go\n❌ To open → ✅ Open`,

    rules: [
      {
        rule: "Use the base verb — never add -s, -ed, or -ing",
        explanation: "In positive imperatives, the verb is always in its simplest (dictionary/infinitive) form. No conjugation for person or tense. This is what makes imperatives so simple to form.",
        example: "✅ Go, read, open, write, speak, listen, check, send, close, save\n❌ Goes, reads, opened, writing, spoke, listened, checked, sent, closed, saved",
        exception: "The verb 'be' stays as 'be': 'Be careful.' 'Be honest.' 'Be on time.' — NOT 'Are careful' or 'Is careful'.",
      },
      {
        rule: "Adverbs add precision — place them naturally",
        explanation: "Adverbs like quickly, carefully, slowly, immediately, always, never strengthen commands. They usually come after the object or at the beginning of the sentence.",
        example: "'Speak slowly and clearly.' | 'Check your work carefully before submitting.' | 'Always save your work.' | 'Immediately report any issues.'",
      },
    ],

    commonMistakes: [
      { wrong: "Opens the door please.", correct: "Open the door, please.", explanation: "Base verb — never add -s. 'Open', not 'Opens'." },
      { wrong: "Be quickly!", correct: "Be quick! / Do it quickly!", explanation: "'Be' is followed by adjectives: 'Be quick.' For actions, use the adverb with the action: 'Move quickly.'" },
      { wrong: "Always you should check.", correct: "Always check your work.", explanation: "With 'always'/'never' in imperatives, put the adverb first, then the verb: 'Always + verb'." },
    ],

    sentencePatterns: [
      {
        pattern: "Simple Positive Imperative",
        hindiPattern: "साधारण सकारात्मक आदेश",
        examples: [
          { english: "Save the document before closing.", hindi: "बंद करने से पहले document save करो।" },
          { english: "Check your email every morning.", hindi: "हर सुबह email check करो।" },
          { english: "Bring two pens and a notebook.", hindi: "दो pen और एक notebook लाओ।" },
          { english: "Pay attention to the details.", hindi: "details पर ध्यान दो।" },
          { english: "Take notes during the meeting.", hindi: "Meeting के दौरान notes लो।" },
        ],
      },
      {
        pattern: "Imperative with Always/Never",
        hindiPattern: "Always/Never के साथ imperative",
        examples: [
          { english: "Always greet the client warmly.", hindi: "Client का हमेशा गर्मजोशी से स्वागत करो।" },
          { english: "Never make a promise you can't keep.", hindi: "कभी वो वादा मत करो जो तुम पूरा न कर सको।" },
          { english: "Always back up your important files.", hindi: "महत्वपूर्ण files का हमेशा backup लो।" },
        ],
      },
    ],

    speakingTips: [
      "Practice saying commands with a clear, confident voice — not harsh, not hesitant",
      "Pair your command with a brief reason: 'Save the file — we don't want to lose the work.'",
      "In instructions, use sequence words: 'First... Then... After that... Finally...'",
      "Record yourself giving 10 instructions and check for clarity and natural tone",
    ],

    summary: [
      "Positive imperatives use base verb only — no -s, -ed, or -ing",
      "The subject 'you' is always hidden",
      "Adverbs (quickly, carefully, always) add precision to commands",
      "Two-part commands connect with 'and': 'Read and sign the form'",
      "Use 'always' and 'never' for standing rules and habits",
    ],
  },

  // ── d3-t2-s3: Imperative with Let — Let's Go! ──
  "d3-t2-s3": {
    whyLearnThis: `"Let's go!" "Let me explain." "Let's try again." — These are some of the most natural, flowing phrases in English conversation!\n\n"LET" in imperatives is used when:\n✓ Including yourself in the action: "Let's work together."\n✓ Asking for permission: "Let me try."\n✓ Making inclusive suggestions: "Let's meet at 3."\n✓ Professional collaboration: "Let's discuss this further."\n\nNative speakers use "Let's" constantly in meetings, conversations, and collaboration. Without it, you sound like a solo performer instead of a team player!`,

    conceptExplanation: `LET in Imperatives — Three Main Patterns:\n\n1️⃣ LET'S (Let us) — INCLUSIVE SUGGESTION:\n→ Includes the speaker AND the listener\n→ Means "we should do this together"\nFormula: Let's + base verb\n• "Let's study together." (हम साथ पढ़ते हैं।)\n• "Let's start the meeting." (Meeting शुरू करते हैं।)\n• "Let's not argue about this." (इस पर बहस न करते हैं।)\n\n2️⃣ LET ME — ASKING FOR PERMISSION TO ACT:\n→ The speaker asks to do something themselves\nFormula: Let me + base verb\n• "Let me explain this." (मुझे यह explain करने दो।)\n• "Let me handle this situation." (मुझे यह situation handle करने दो।)\n• "Let me check the figures." (मुझे figures check करने दो।)\n\n3️⃣ LET + PERSON + VERB — GIVE PERMISSION:\n→ You are giving someone else permission to do something\nFormula: Let + person + base verb\n• "Let him speak." (उसे बोलने दो।)\n• "Let her decide." (उसे decide करने दो।)\n• "Let the team handle it." (Team को handle करने दो।)\n\n📌 LET'S NOT vs DON'T LET'S:\nBoth mean "we should not do this"\n• "Let's not panic." (COMMON)\n• "Don't let's do that." (RARE — British English only)\nAlways use "Let's not" in modern English.`,

    hindiExplanation: `LET के तीन use:\n\n1. Let's + verb = "हम + verb + करते हैं"\n"Let's go." = चलते हैं। | "Let's start." = शुरू करते हैं।\n\n2. Let me + verb = "मुझे + verb + करने दो"\n"Let me help." = मुझे मदद करने दो।\n"Let me think." = मुझे सोचने दो।\n\n3. Let + someone + verb = "उसे + verb + करने दो"\n"Let him go." = उसे जाने दो।\n"Let her speak." = उसे बोलने दो।\n\nNegative: Let's NOT + verb\n"Let's not fight." = झगड़ा न करते हैं।`,

    rules: [
      {
        rule: "Let's = Let us — always followed by base verb",
        explanation: "After 'Let's', the verb is always in base form. Never 'Let's going', 'Let's to go', or 'Let's went'.",
        example: "✅ Let's go. Let's try. Let's start. Let's be patient.\n❌ Let's going. Let's to go. Let's went.",
      },
      {
        rule: "Negative of Let's = Let's not (NOT 'Let's don't')",
        explanation: "To make 'Let's' negative, add 'not' immediately after 'Let's'. Common mistake: Indians say 'Let's don't go' — this is wrong.",
        example: "✅ Let's not waste time. | ✅ Let's not argue. | ✅ Let's not be late.\n❌ Let's don't waste time. | ❌ Don't let's go.",
      },
    ],

    commonMistakes: [
      { wrong: "Let's going to the market.", correct: "Let's go to the market.", explanation: "After 'Let's', use base verb — not '-ing' form." },
      { wrong: "Let's don't be late.", correct: "Let's not be late.", explanation: "Negative of 'Let's' is 'Let's NOT', not 'Let's don't'." },
      { wrong: "Let me to explain.", correct: "Let me explain.", explanation: "After 'let me', use base verb directly — no 'to'." },
    ],

    sentencePatterns: [
      {
        pattern: "Let's (inclusive suggestion)",
        hindiPattern: "Let's — साथ मिलकर कुछ करना",
        examples: [
          { english: "Let's schedule the meeting for tomorrow morning.", hindi: "कल सुबह के लिए meeting schedule करते हैं।" },
          { english: "Let's review the project status before the call.", hindi: "Call से पहले project status review करते हैं।" },
          { english: "Let's not make the same mistake again.", hindi: "वही गलती दोबारा न करते हैं।" },
        ],
      },
      {
        pattern: "Let me (personal request to act)",
        hindiPattern: "Let me — मैं करता/करती हूँ",
        examples: [
          { english: "Let me check the data and get back to you.", hindi: "मुझे data check करने दो और मैं आपको बताता/बताती हूँ।" },
          { english: "Let me clarify that point for everyone.", hindi: "मुझे सबके लिए वो point clear करने दो।" },
        ],
      },
    ],

    summary: [
      "'Let's + verb' = we should do this together (inclusive suggestion)",
      "'Let me + verb' = I want to do this (personal request)",
      "'Let + person + verb' = give permission to someone",
      "Negative: 'Let's not' — never 'Let's don't'",
      "Base verb always follows 'let' — no 'to', no '-ing'",
    ],
  },

  // ── d3-t2-s4: Imperative with Do for Emphasis ──
  "d3-t2-s4": {
    whyLearnThis: `"Do come to our party!" "Do try the food!" "Do be careful!" — These sentences sound extra warm, inviting, and emphatic in English. The word "DO" adds special emotion and emphasis to requests!\n\nThe emphatic "DO" is used when:\n✓ Inviting someone warmly: "Do come in!" (much warmer than just "Come in!")\n✓ Encouraging someone: "Do try this method — it really works!"\n✓ Making a serious request: "Do remember to lock the door."\n✓ Showing genuine care: "Do take care of yourself!"\n\nThis structure makes your English sound MORE natural and MORE native-like. Most learners miss this — mastering it will elevate your English to the next level!`,

    conceptExplanation: `EMPHATIC 'DO' IN IMPERATIVES:\n\nFormula: Do + base verb\n\nThis adds SPECIAL EMPHASIS — stronger than a regular imperative.\n\nCompare:\n• "Come to the party." (normal invitation)\n• "Do come to the party!" (warm, enthusiastic invitation — shows you really mean it!)\n\n• "Try this dish." (simple suggestion)\n• "Do try this dish!" (enthusiastic recommendation — you genuinely believe they'll love it!)\n\n• "Be careful." (normal warning)\n• "Do be careful." (sincere, heartfelt warning)\n\nWHEN TO USE EMPHATIC DO:\n✓ When you really mean something from the heart\n✓ When inviting someone warmly\n✓ When giving a sincere recommendation\n✓ When contradicting a reluctance: "Oh, do join us!"\n✓ In formal written invitations: "Please do attend our annual dinner."\n\nTONE:\n• Warm and genuine\n• Enthusiastic\n• Persuasive without pressure\n• Shows you care about the person's response`,

    hindiExplanation: `Emphatic DO = ज़ोर देने के लिए DO जोड़ना\n\n"Come!" = आओ (सामान्य)\n"Do come!" = ज़रूर आओ! (special invitation — दिल से)\n\n"Try this." = यह try करो।\n"Do try this!" = ज़रूर try करो! (पक्का enjoy करोगे!)\n\nUsage:\n• Invitation: "Do join us for lunch!" (lunch पर ज़रूर आइए!)\n• Warning: "Do be careful on the road." (सड़क पर ज़रूर सावधान रहना।)\n• Recommendation: "Do read this book — it's excellent!" (यह book ज़रूर पढ़ो!)\n\nJब आप genuinely कुछ feel करते हो — तब DO use करो!`,

    rules: [
      {
        rule: "Emphatic 'do' uses 'do' + base verb — never 'does' or 'did'",
        explanation: "The emphatic 'do' in imperatives is always just 'do' — regardless of person or time. It's always present and doesn't change like 'does' for he/she or 'did' for past.",
        example: "✅ Do come. Do try. Do be careful. Do take care.\n❌ Does come. Did try. Do being careful.",
      },
      {
        rule: "Emphatic 'do' is warmer than the regular imperative",
        explanation: "Use emphatic 'do' when you genuinely want to show enthusiasm, care, or sincere invitation. It's emotionally charged — use it when you mean it.",
        example: "'Come for dinner.' (neutral) vs 'Do come for dinner!' (I really hope you come — I'd love to see you!)",
      },
    ],

    commonMistakes: [
      { wrong: "Does come to the party!", correct: "Do come to the party!", explanation: "Emphatic imperative always uses 'do', not 'does'." },
      { wrong: "Do coming to the party!", correct: "Do come to the party!", explanation: "Base verb after 'do' — not -ing form." },
    ],

    sentencePatterns: [
      {
        pattern: "Emphatic Do (warm invitation)",
        hindiPattern: "DO से दिल से invitation",
        examples: [
          { english: "Do visit us when you're in Delhi!", hindi: "Delhi में होने पर हमसे ज़रूर मिलना!" },
          { english: "Do try the new café — the coffee is amazing!", hindi: "नया café ज़रूर try करो — coffee बेहतरीन है!" },
          { english: "Do let me know if there's anything I can help with.", hindi: "अगर कोई मदद चाहिए तो ज़रूर बताइए।" },
          { english: "Do be patient — good things take time.", hindi: "ज़रूर धैर्य रखो — अच्छी चीज़ें time लेती हैं।" },
        ],
      },
    ],

    summary: [
      "Emphatic 'do + verb' makes requests warmer and more genuine",
      "Always use 'do' (never 'does' or 'did') in emphatic imperatives",
      "Use when you sincerely mean something — invitations, recommendations, warnings",
      "More warm than a regular command — shows you genuinely care",
      "'Do try this!' sounds more enthusiastic than just 'Try this!'",
    ],
  },

  // ── d3-t3-s1: Imperatives at Home and School ──
  "d3-t3-s1": {
    whyLearnThis: `Home and school are where you first learn to follow and give instructions. Before you can use English at work, you need to use it at home and school.\n\nEvery day at home:\n• "Clean your room." "Wash your hands." "Set the table." "Do your homework."\nEvery day at school:\n• "Open your book." "Write this down." "Pay attention." "Submit your assignment."\n\nThese sentences are used hundreds of times daily. If you can say them naturally in English, you've mastered the most basic and important use of imperatives!`,

    conceptExplanation: `HOME IMPERATIVES — Daily Commands:\n\n🏠 MORNING ROUTINES:\n• "Wake up!" / "Get up now!"\n• "Brush your teeth." / "Wash your face."\n• "Get dressed quickly." / "Don't forget your lunch."\n• "Check your bag." / "Be ready by 8."\n\n🍳 KITCHEN / MEAL TIME:\n• "Set the table." / "Wash your hands first."\n• "Sit down." / "Eat properly." / "Don't play with your food."\n• "Help clear the dishes." / "Put the leftovers in the fridge."\n\n🏫 SCHOOL / STUDY:\n• "Open your textbook to page 45."\n• "Write down these notes." / "Pay attention to the board."\n• "Don't talk during the exam."\n• "Submit your homework before 9 AM."\n• "Read the passage carefully before answering."\n\n🌙 EVENING:\n• "Do your homework first." / "Don't watch TV until your work is done."\n• "Clean up your room." / "Pack your bag for tomorrow."\n• "Drink milk before bed." / "Sleep by 10."`,

    hindiExplanation: `घर और स्कूल में रोज़ use होने वाले imperatives:\n\nघर पर (At home):\n• "उठो!" = Get up!\n• "दांत साफ करो।" = Brush your teeth.\n• "हाथ धोओ।" = Wash your hands.\n• "खाना खाओ।" = Eat your food.\n• "कमरा साफ करो।" = Clean your room.\n\nस्कूल में (At school):\n• "किताब खोलो।" = Open your book.\n• "ध्यान से सुनो।" = Listen carefully.\n• "लिखो।" = Write it down.\n• "बात मत करो।" = Don't talk.\n• "homework submit करो।" = Submit your homework.`,

    rules: [
      {
        rule: "Tone shifts from direct (home/children) to polite (school/adults)",
        explanation: "When speaking to children or in informal home settings, direct commands are fine. In school settings (teacher to student), direct commands are still acceptable. But when a student speaks to a teacher, polite requests are required.",
        example: "Parent to child: 'Clean your room!' (direct, fine)\nTeacher to class: 'Open your books.' (direct, fine)\nStudent to teacher: 'Could you please explain again?' (polite required)",
      },
    ],

    commonMistakes: [
      { wrong: "You do your homework.", correct: "Do your homework.", explanation: "Remove 'you' from imperatives — it sounds strange." },
      { wrong: "Don't to run in the corridor.", correct: "Don't run in the corridor.", explanation: "After 'don't', use base verb directly — no 'to'." },
    ],

    sentencePatterns: [
      {
        pattern: "Home daily routine imperatives",
        hindiPattern: "घर में रोज़ के imperatives",
        examples: [
          { english: "Wake up! It's already 7 o'clock.", hindi: "उठो! पहले ही 7 बज गए हैं।" },
          { english: "Brush your teeth and wash your face before breakfast.", hindi: "नाश्ते से पहले दांत और मुंह साफ करो।" },
          { english: "Don't leave your things scattered everywhere.", hindi: "अपनी चीज़ें हर जगह मत फैलाओ।" },
          { english: "Help your younger brother with his homework.", hindi: "अपने छोटे भाई की homework में मदद करो।" },
        ],
      },
      {
        pattern: "School classroom imperatives",
        hindiPattern: "School में imperatives",
        examples: [
          { english: "Open your notebooks and write today's date.", hindi: "अपनी notebooks खोलो और आज की date लिखो।" },
          { english: "Read the passage silently for 5 minutes.", hindi: "5 minutes के लिए passage को ध्यान से पढ़ो।" },
          { english: "Don't copy from your neighbor's paper.", hindi: "पड़ोसी की paper से copy मत करो।" },
        ],
      },
    ],

    summary: [
      "Home imperatives are direct and informal — 'Clean your room!' 'Do your homework!'",
      "School imperatives include both commands and polite requests",
      "Children give requests to adults; adults give commands to children",
      "Morning routine, meal time, study time — all use different imperative types",
      "Practice 10 home/school imperatives every day for fluency",
    ],
  },

  // ── d3-t3-s3: Written Instructions and Signs ──
  "d3-t3-s3": {
    whyLearnThis: `Every time you read a sign, follow a recipe, use a manual, or read an email, you are reading WRITTEN IMPERATIVES.\n\n"Handle with care." — every fragile package\n"Please maintain silence." — every hospital and library\n"Add 2 cups of flour and mix well." — every recipe\n"Click here to confirm." — every website\n"Press Enter to continue." — every software\n\nWritten imperatives are everywhere! Understanding them helps you follow instructions correctly in English. Not understanding them can cause accidents, mistakes, or confusion.`,

    conceptExplanation: `WRITTEN IMPERATIVES — Types and Contexts:\n\n🚦 PUBLIC SIGNS:\n• "No Smoking" / "Do Not Enter" / "Keep Out"\n• "Handle with Care" / "Fragile — This Side Up"\n• "Please Maintain Silence" / "Do Not Disturb"\n• "Emergency Exit — Push to Open"\n• "Press Button for Assistance"\n\n📋 INSTRUCTION MANUALS & TECH:\n• "Insert the battery and turn clockwise."\n• "Press and hold the power button for 3 seconds."\n• "Do not expose to water or extreme heat."\n• "Restart the device if the issue persists."\n\n🍳 RECIPES:\n• "Preheat the oven to 180°C."\n• "Mix the dry ingredients in a bowl."\n• "Bake for 25-30 minutes or until golden brown."\n• "Allow to cool before serving."\n\n📧 PROFESSIONAL EMAILS:\n• "Please find the attached document."\n• "Kindly review and revert by COB."\n• "Please note that the deadline has been moved."\n• "Do not hesitate to contact me if you need assistance."`,

    hindiExplanation: `Written Imperatives = लिखे हुए निर्देश\n\nसड़क पर signs:\n• "Do Not Enter" = अंदर मत जाओ\n• "Handle with Care" = सावधानी से रखो\n• "No Parking" = पार्किंग नहीं\n\nRecipes में:\n• "Add water and stir." = पानी डालो और हिलाओ।\n• "Cook for 10 minutes." = 10 मिनट तक पकाओ।\n\nEmails में:\n• "Please find attached." = attached file देखें।\n• "Kindly revert at the earliest." = जल्दी reply करें।`,

    rules: [
      {
        rule: "Negative signs use 'Do Not' (formal) or 'No + Noun' (shorter)",
        explanation: "'Do Not' is a full negative imperative. 'No' + noun is a shorter sign format. Both are used on public signs.",
        example: "Full: 'Do Not Enter' | Short: 'No Entry' | Full: 'Do Not Use Mobile Phones' | Short: 'No Mobile Phones'",
      },
    ],

    commonMistakes: [
      { wrong: "Not to touch!", correct: "Do not touch! / Don't touch!", explanation: "Written negative imperatives use 'Do not' or 'Don't' — not just 'not to'." },
    ],

    sentencePatterns: [
      {
        pattern: "Public signs and notices",
        hindiPattern: "सार्वजनिक signs",
        examples: [
          { english: "Do not disturb — meeting in progress.", hindi: "परेशान मत करो — meeting चल रही है।" },
          { english: "Handle with care — fragile contents.", hindi: "सावधानी से संभालें — नाज़ुक सामान।" },
          { english: "Keep this area clean — throw waste in the bin.", hindi: "इस जगह को साफ रखें — कचरा bin में डालें।" },
        ],
      },
    ],

    summary: [
      "Written imperatives appear on signs, manuals, recipes, and emails",
      "Negative signs: 'Do Not Enter', 'No Parking', 'Do Not Touch'",
      "Recipes use step-by-step imperatives: 'Mix, stir, bake, cool'",
      "Email phrases: 'Please find attached', 'Kindly revert', 'Do not hesitate to contact'",
      "Reading written imperatives correctly is essential for daily life in English",
    ],
  },

  // ── d3-t4-s1: Action Verbs for Commands ──
  "d3-t4-s1": {
    whyLearnThis: `Imperatives are only as powerful as the VERBS you use. A strong, precise action verb makes your commands clear, confident, and professional.\n\nWeak: "Do something with this file." 😕\nStrong: "Archive this file in the project folder." 💪\n\nKnowing 100+ action verbs for commands will allow you to:\n✓ Give clear, specific instructions at work\n✓ Write precise, professional emails\n✓ Follow and give directions without confusion\n✓ Sound like a native, fluent English speaker`,

    conceptExplanation: `100 KEY ACTION VERBS FOR IMPERATIVES:\n\n📋 OFFICE / WORK VERBS:\nSubmit, Send, Forward, Reply, CC, Archive, File, Print, Scan, Upload, Download, Attach, Save, Backup, Delete, Update, Review, Approve, Reject, Revise, Edit, Proofread, Confirm, Schedule, Reschedule, Cancel, Postpone, Follow up, Escalate, Report\n\n📚 LEARNING / STUDY VERBS:\nRead, Write, Note, Highlight, Memorize, Practice, Repeat, Review, Revise, Study, Understand, Explain, Describe, Define, List, Compare, Analyze, Evaluate, Summarize, Present\n\n🚶 MOVEMENT VERBS:\nGo, Come, Move, Turn, Walk, Run, Stop, Start, Wait, Stand, Sit, Rise, Leave, Enter, Exit, Return, Follow, Lead, Proceed, Advance\n\n🗣️ COMMUNICATION VERBS:\nSpeak, Talk, Tell, Say, Ask, Answer, Reply, Explain, Describe, Announce, Inform, Notify, Alert, Warn, Remind, Confirm, Introduce, Greet, Address\n\n🔧 TECHNICAL / ACTION VERBS:\nClick, Press, Open, Close, Install, Uninstall, Restart, Refresh, Connect, Disconnect, Enable, Disable, Configure, Set up, Update, Upgrade, Download, Upload`,

    hindiExplanation: `Commands के लिए important action verbs:\n\nOffice में:\nSubmit = जमा करो | Send = भेजो | Review = जाँचो | Approve = मंजूर करो | Update = update करो\n\nStudy में:\nRead = पढ़ो | Write = लिखो | Practice = अभ्यास करो | Memorize = याद करो | Understand = समझो\n\nDaily life में:\nGo = जाओ | Come = आओ | Stop = रुको | Wait = इंतज़ार करो | Listen = सुनो\n\nHर verb के साथ practice: "Submit the report." "Review this." "Practice daily."`,

    rules: [
      {
        rule: "Always use the base form of action verbs in imperatives",
        explanation: "Action verbs in imperatives are always in their simplest form. Think of it as the 'order form' of the verb.",
        example: "'submit' not 'submits' | 'review' not 'reviewed' | 'send' not 'sent'",
      },
    ],

    commonMistakes: [
      { wrong: "Submitted the form by Friday.", correct: "Submit the form by Friday.", explanation: "Use base form in commands, not past tense." },
    ],

    sentencePatterns: [
      {
        pattern: "Office action verb imperatives",
        hindiPattern: "Office के imperatives",
        examples: [
          { english: "Forward the email to all team members.", hindi: "Email सभी team members को forward करो।" },
          { english: "Update the spreadsheet with the latest data.", hindi: "Spreadsheet को latest data से update करो।" },
          { english: "Schedule a meeting with the client for Thursday.", hindi: "Client के साथ गुरुवार को meeting schedule करो।" },
          { english: "Archive all completed projects by month end.", hindi: "महीने के अंत तक सभी completed projects archive करो।" },
        ],
      },
    ],

    summary: [
      "Strong, precise action verbs make imperatives clear and professional",
      "100+ action verbs: office, learning, movement, communication, technical",
      "Always use base form: 'submit', not 'submits' or 'submitted'",
      "Practice using 5 new action verbs in sentences every day",
    ],
  },

  // ── d3-t4-s2: Adverbs with Commands ──
  "d3-t4-s2": {
    whyLearnThis: `Compare:\n"Do the work." (vague, weak)\n"Do the work carefully and submit it immediately." (clear, strong, professional)\n\nAdverbs are the difference between a basic command and a POWERFUL instruction. They tell HOW, WHEN, WHERE, and HOW MUCH to do something.\n\nMastering adverbs with commands will make your instructions:\n✓ Clearer and more specific\n✓ More professional\n✓ Easier for others to follow\n✓ More natural sounding in English`,

    conceptExplanation: `ADVERBS WITH IMPERATIVES:\n\n⏱️ TIME ADVERBS (When to do it):\nImmediately, Now, Quickly, Shortly, Soon, First, Then, Before, After, Always, Never, Daily, Regularly\n• "Submit the report immediately."\n• "First review, then approve."\n• "Always double-check your work."\n\n🎯 MANNER ADVERBS (How to do it):\nCarefully, Properly, Correctly, Clearly, Loudly, Quietly, Politely, Confidently, Firmly, Gently\n• "Speak clearly and confidently."\n• "Handle the documents carefully."\n• "Answer politely, even with difficult clients."\n\n📍 PLACE ADVERBS (Where to do it):\nHere, There, Outside, Inside, Upstairs, Downstairs, Away, Back, Forward\n• "Come here." "Wait outside." "Go back to your seat."\n\n📏 DEGREE ADVERBS (How much):\nCompletely, Fully, Partly, Thoroughly, Simply, Briefly, Deeply\n• "Read the instructions thoroughly before starting."\n• "Explain it briefly — we don't have much time."\n• "Complete the task fully before moving to the next."`,

    hindiExplanation: `Adverbs = हमारे commands को और precise बनाते हैं\n\nTime (कब):\n• Immediately = तुरंत: "Reply immediately."\n• Always = हमेशा: "Always be on time."\n• First = पहले: "First check, then submit."\n\nManner (कैसे):\n• Carefully = सावधानी से: "Read carefully."\n• Clearly = स्पष्ट रूप से: "Speak clearly."\n• Politely = विनम्रता से: "Answer politely."\n\nFormula: Verb + Object + Adverb\n"Submit the report immediately."\n"Read this carefully."\n"Speak clearly."`,

    rules: [
      {
        rule: "Adverbs of manner come after the verb and object",
        explanation: "The most common position for manner adverbs is at the END of the imperative sentence: Verb + Object + Adverb of Manner.",
        example: "'Read the document carefully.' | 'Write your name clearly.' | 'Handle the package gently.'",
        exception: "Some adverbs like 'carefully', 'always', 'never' can also go before the verb for emphasis: 'Carefully read every line.' / 'Always save your work.'",
      },
    ],

    commonMistakes: [
      { wrong: "Carefully read this.", correct: "Read this carefully. OR Carefully read this (for emphasis).", explanation: "Both positions are correct, but 'verb + object + adverb' is more natural in everyday speech." },
    ],

    sentencePatterns: [
      {
        pattern: "Imperative + Manner Adverb",
        hindiPattern: "Command + तरीके का adverb",
        examples: [
          { english: "Listen carefully to the instructions.", hindi: "निर्देशों को ध्यान से सुनो।" },
          { english: "Speak slowly and clearly for everyone to understand.", hindi: "सभी की समझ के लिए धीरे और स्पष्ट बोलो।" },
          { english: "Always respond to client emails promptly.", hindi: "Client emails का हमेशा समय पर जवाब दो।" },
          { english: "Complete the form thoroughly before submitting.", hindi: "Submit करने से पहले form पूरी तरह भरो।" },
        ],
      },
    ],

    summary: [
      "Adverbs answer HOW, WHEN, WHERE, and HOW MUCH about a command",
      "Manner adverbs: carefully, clearly, politely, confidently",
      "Time adverbs: immediately, first, always, never",
      "Place adverbs: here, outside, away, back",
      "Position: usually after verb + object, but can be before verb for emphasis",
    ],
  },

  // ── d3-t4-s3: Phrases for Polite Requests ──
  "d3-t4-s3": {
    whyLearnThis: `In real English, especially professional English, DIRECT commands are often replaced by POLITE REQUEST PHRASES. These phrases are essential for:\n✓ Not sounding rude or pushy\n✓ Showing respect for the other person's time and autonomy\n✓ Building good professional relationships\n✓ Writing professional emails that get results\n\nA manager who always says "Do this! Do that!" sounds harsh.\nA great leader says "Would you mind checking this?" "Could you please review this?" — and gets better results!`,

    conceptExplanation: `POLITE REQUEST STRUCTURES (From Most to Least Formal):\n\n🎩 MOST FORMAL:\n• "Would you be so kind as to...?" → Extremely formal/written\n  "Would you be so kind as to submit your application?"\n• "Would you mind + -ing?" → Very polite, formal\n  "Would you mind reviewing this document?"\n• "I would appreciate it if you could..." → Professional\n  "I would appreciate it if you could send the report by tomorrow."\n\n👔 PROFESSIONAL:\n• "Could you please...?" → Standard professional request\n  "Could you please share the data by EOD?"\n• "Would you please...?" → Slightly more formal than 'could'\n  "Would you please confirm your attendance?"\n• "Please could you...?" → British professional style\n  "Please could you clarify your requirements?"\n\n😊 CASUAL-PROFESSIONAL:\n• "Can you...?" → Informal professional\n  "Can you send me that file?"\n• "Could you...?" → Semi-formal\n  "Could you check if the link is working?"\n• "Would you...?" → Polite but casual\n  "Would you grab the report from the printer?"\n\n⚠️ IMPORTANT ABOUT "WOULD YOU MIND":\n"Would you mind + VERB + ing?" (NOT base verb!)\n✅ "Would you mind checking this?"\n❌ "Would you mind to check this?"\n❌ "Would you mind check this?"`,

    hindiExplanation: `Polite request phrases — professional English के लिए:\n\n1. "Would you mind + verb-ing?"\n= क्या आप... करने में कोई आपत्ति नहीं?\n"Would you mind reviewing this?" = क्या आप इसे review करने में कोई आपत्ति नहीं करेंगे?\n\n2. "Could you please...?"\n= क्या आप... कर सकते हैं?\n"Could you please send the file?" = क्या आप file भेज सकते हैं?\n\n3. "I would appreciate it if you could..."\n= अगर आप... करें तो मुझे बहुत अच्छा लगेगा\n"I would appreciate it if you could come early." = अगर आप जल्दी आ सकें तो अच्छा होगा।`,

    rules: [
      {
        rule: "'Would you mind' is followed by verb + -ing (not base verb)",
        explanation: "This is a very common mistake. 'Would you mind' always takes the -ing form: 'Would you mind closing the door?' NOT 'Would you mind close the door?'",
        example: "✅ Would you mind reviewing? | ✅ Would you mind calling back? | ❌ Would you mind to review? | ❌ Would you mind review?",
      },
      {
        rule: "Answering 'Would you mind' — 'No' means you agree to do it",
        explanation: "This confuses many learners. If someone says 'Would you mind closing the door?' and you say 'No, not at all' — it means you AGREE to close it. 'No problem' and 'Of course' are the safest positive responses.",
        example: "Q: 'Would you mind checking this?' A: 'No, not at all.' / 'Of course!' / 'No problem, I'll check it now.'",
      },
    ],

    commonMistakes: [
      { wrong: "Would you mind to come early?", correct: "Would you mind coming early?", explanation: "'Would you mind' takes -ing form, not 'to + verb'." },
      { wrong: "Can you please to send the file?", correct: "Can you please send the file?", explanation: "After 'can you', use base verb directly — no 'to'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional polite requests",
        hindiPattern: "Professional polite requests",
        examples: [
          { english: "Could you please send me the updated version by tomorrow morning?", hindi: "क्या आप कल सुबह तक updated version भेज सकते हैं?" },
          { english: "Would you mind joining the call 5 minutes early?", hindi: "क्या आप call में 5 minutes पहले join करने में कोई आपत्ति नहीं करेंगे?" },
          { english: "I would appreciate it if you could review this before the deadline.", hindi: "अगर आप deadline से पहले यह review कर सकें तो बहुत अच्छा होगा।" },
          { english: "Would it be possible for you to reschedule the meeting?", hindi: "क्या meeting reschedule करना आपके लिए संभव होगा?" },
        ],
      },
    ],

    summary: [
      "'Would you mind + verb-ing?' = very polite formal request",
      "'Could you please + base verb?' = standard professional request",
      "'I would appreciate it if you could...' = formal professional request",
      "Answering 'Would you mind': 'No, not at all' = Yes, I'll do it",
      "Choose request level based on relationship and context",
    ],
  },

  // ── d3-t5-s1: Translation Practice ──
  "d3-t5-s1": {
    whyLearnThis: `Translation is the fastest bridge between what you know in Hindi and what you need to say in English. By translating 80+ imperatives, you will:\n✓ Build automatic response patterns for daily use\n✓ Discover common Indian English translation errors and fix them\n✓ Create a bank of ready-made English sentences for real situations\n✓ Develop the habit of thinking in English structure`,

    conceptExplanation: `TRANSLATION STRATEGY FOR IMPERATIVES:\n\nStep 1: Identify the VERB in the Hindi sentence\nStep 2: Convert it to BASE FORM\nStep 3: Add Please/Kindly if polite\nStep 4: Add objects and adverbs\n\nPRACTICE SENTENCES (Hindi → English):\n\n🏠 HOME:\nदरवाज़ा बंद करो। → Close the door.\nपानी लाओ। → Bring some water.\nटेलीफोन उठाओ। → Answer the phone.\nखाना बनाओ। → Cook food. / Prepare the meal.\nघर साफ करो। → Clean the house.\n\n💼 OFFICE:\nReport submit करो। → Submit the report.\nEmail check करो। → Check your email.\nMeeting join करो। → Join the meeting.\nDocument print करो। → Print the document.\nPresentation तैयार करो। → Prepare the presentation.\n\n🚨 URGENT:\nडॉक्टर को बुलाओ! → Call the doctor!\nमदद करो! → Help me! / Help!\nआग बुझाओ! → Put out the fire!\nतुरंत भागो! → Run immediately!\n\nPOLITE:\nकृपया बैठिए। → Please sit down.\nकृपया इंतज़ार करें। → Please wait.\nकृपया शांत रहें। → Please remain calm.\nकृपया अपना नाम लिखिए। → Please write your name.`,

    hindiExplanation: `Translation practice strategy:\n\n1. Hindi verb को English base verb में convert करो\n2. Subject "आप/तुम" को remove करो\n3. Please/Kindly add करो अगर polite करना है\n\nExample:\nहिंदी: "रिपोर्ट जमा करो।"\nStep 1: Verb = "जमा करो" = Submit\nStep 2: No subject needed\nStep 3: "Submit the report."\n\nPolite version: "Please submit the report." / "Kindly submit the report."`,

    rules: [
      {
        rule: "Remove 'aap/tum/tu' from Hindi sentences when translating to imperatives",
        explanation: "Hindi uses 'aap', 'tum', or 'tu' as subjects in commands. In English imperatives, these are removed entirely.",
        example: "आप बैठिए। → Sit down. (NOT 'You sit down')\nतुम जाओ। → Go. (NOT 'You go')",
      },
    ],

    commonMistakes: [
      { wrong: "You please submit the report.", correct: "Please submit the report.", explanation: "Remove 'you' — it's hidden in English imperatives." },
    ],

    sentencePatterns: [
      {
        pattern: "Hindi to English imperative translation",
        hindiPattern: "Translation practice",
        examples: [
          { english: "Switch off the lights before leaving.", hindi: "जाने से पहले lights बंद करो।" },
          { english: "Please inform me when the order arrives.", hindi: "कृपया order आने पर मुझे inform करें।" },
          { english: "Don't forget to save your progress.", hindi: "अपनी progress save करना मत भूलो।" },
          { english: "Read the instructions carefully before proceeding.", hindi: "आगे बढ़ने से पहले instructions को ध्यान से पढ़ो।" },
        ],
      },
    ],

    summary: [
      "Remove Hindi subject (aap/tum) when translating to English imperatives",
      "Convert Hindi verb to English base verb",
      "Add Please/Kindly for polite translations",
      "Practice 10 translations per day for fluency",
      "Focus on accuracy first, then speed",
    ],
  },

  // ── d3-t5-s2: Speaking Practice ──
  "d3-t5-s2": {
    whyLearnThis: `Reading and writing imperatives is only half the job. You need to be able to SAY them — confidently, clearly, with the right tone.\n\nSpeaking practice is where theory becomes real skill:\n✓ Your mouth needs to practice making these sounds\n✓ Your brain needs to build automatic command patterns\n✓ Your confidence grows when you hear yourself speak\n✓ You discover pronunciation issues you didn't notice while reading\n\nToday's goal: Say 50 imperative sentences out loud with confidence!`,

    conceptExplanation: `SPEAKING DRILLS FOR IMPERATIVES:\n\n🎯 DRILL 1 — BASIC COMMANDS (Say each 3 times):\n"Open!" / "Close!" / "Stop!" / "Start!" / "Go!" / "Come!" / "Wait!" / "Listen!" / "Look!" / "Read!" / "Write!" / "Stand!" / "Sit!"\n\n🎯 DRILL 2 — COMMANDS WITH OBJECTS:\n"Open the door." / "Close the window." / "Start the car." / "Stop the machine." / "Read the email." / "Write your name." / "Check the figures." / "Save the file."\n\n🎯 DRILL 3 — POLITE REQUESTS:\n"Please come in." / "Please sit down." / "Please wait a moment." / "Please send me the file." / "Kindly note this." / "Please call me back." / "Could you please check?" / "Would you mind reviewing?"\n\n🎯 DRILL 4 — LETS + SUGGESTIONS:\n"Let's go!" / "Let's start the meeting." / "Let's take a break." / "Let's review this together." / "Let's not waste time." / "Let me explain." / "Let her decide."\n\n🎯 DRILL 5 — NEGATIVE COMMANDS:\n"Don't be late!" / "Don't forget." / "Never give up." / "Don't worry." / "Do not disturb." / "Please don't shout." / "Never share your password."`,

    hindiExplanation: `Speaking practice = ज़ोर से बोलने की practice\n\nHर sentence 3 बार बोलो:\n1. धीरे बोलो (correctly)\n2. Normal speed पर\n3. Confident और clear tone में\n\nHर रोज़ practice करो:\n• सुबह: 10 commands के साथ दिन शुरू करो\n• दिन में: जो भी करो, उसे English में command की तरह बोलो\n• रात को: आज के 5 new sentences याद करो\n\nRecord yourself — सुनो — improve करो!`,

    rules: [
      {
        rule: "Volume and clarity matter in spoken imperatives",
        explanation: "Commands should be spoken with enough volume and clarity to be heard and understood. Polite requests should be softer and warmer in tone.",
        example: "Command: Clear, firm voice | Request: Warm, respectful tone | Urgent: Louder, faster",
      },
    ],

    commonMistakes: [
      { wrong: "Mumbling or speaking too fast", correct: "Speak clearly and at a natural pace", explanation: "Speaking speed should be natural — not rushed (hard to understand) or too slow (sounds unnatural)." },
    ],

    sentencePatterns: [
      {
        pattern: "Speaking drill sentences",
        hindiPattern: "Speaking practice",
        examples: [
          { english: "Start your presentation with a confident greeting.", hindi: "Confident greeting के साथ presentation शुरू करो।" },
          { english: "Speak slowly and make eye contact with your audience.", hindi: "धीरे बोलो और audience से eye contact रखो।" },
          { english: "Practice this sentence three times in front of a mirror.", hindi: "इस sentence को आईने के सामने तीन बार practice करो।" },
          { english: "Record yourself and listen back to spot your mistakes.", hindi: "खुद को record करो और mistakes पहचानने के लिए वापस सुनो।" },
        ],
      },
    ],

    summary: [
      "Say each imperative three times: slow, normal, confident",
      "Match your tone to the type: firm for commands, warm for requests",
      "Record yourself and review your pronunciation",
      "Practice daily — 10 new sentences per day minimum",
      "Use imperatives in real situations as you learn them",
    ],
  },

  // ── d3-t5-s3: Final Test ──
  "d3-t5-s3": {
    whyLearnThis: `The final test for Imperative Sentences will assess EVERYTHING you've learned:\n✓ Definition and types of imperatives\n✓ Positive, negative, and emphatic forms\n✓ Please, Kindly, Let's structures\n✓ Commands vs Requests vs Suggestions\n✓ Real-life applications at home, school, office, and in writing\n\nTests are not just evaluation — they are the most powerful way to cement your knowledge. Research shows that testing yourself improves memory retention by 50% compared to just reading!`,

    conceptExplanation: `FINAL TEST PREPARATION — RECAP OF ALL KEY POINTS:\n\n✅ WHAT IS AN IMPERATIVE:\nA sentence that gives a command, request, instruction, or suggestion.\nSubject is always 'you' (hidden). Always uses base verb.\n\n✅ FOUR TYPES:\n1. Command: "Go!" | 2. Request: "Please come." | 3. Instruction: "Mix and stir." | 4. Suggestion: "Try this."\n\n✅ POSITIVE: Base verb + object: "Open the window."\n✅ NEGATIVE: Don't/Do not + base verb: "Don't run."\n✅ EMPHATIC: Do + base verb: "Do come to the party!"\n✅ LET'S: Let's + base verb: "Let's start." | Let's not: "Let's not argue."\n✅ POLITE: Please/Kindly + base verb: "Please submit. Kindly note."\n\n✅ COMMON MISTAKES TO AVOID:\n• "You go" → "Go"\n• "Don't to run" → "Don't run"\n• "Please to call" → "Please call"\n• "Let's don't" → "Let's not"\n• "Kindly to submit" → "Kindly submit"\n• "Would you mind to review" → "Would you mind reviewing"\n\n✅ WORKPLACE PHRASES:\n"Please find attached..." | "Kindly note that..." | "Could you please...?" | "Would you mind...ing?"`,

    hindiExplanation: `Final Test Preparation:\n\nTest में आने वाले topics:\n1. Imperative की definition\n2. Types (command/request/instruction/suggestion)\n3. Positive/Negative/Emphatic forms\n4. Please, Kindly, Let's\n5. Real-life usage\n6. Common mistakes\n\nSabse common mistakes:\n• Subject मत लिखो: "You go" ❌ → "Go" ✅\n• "To" मत लगाओ: "Please to call" ❌ → "Please call" ✅\n• "Let's don't" मत बोलो: ❌ → "Let's not" ✅`,

    rules: [
      {
        rule: "Review all 5 test areas before attempting",
        explanation: "The 5 areas: (1) Types of imperatives, (2) Positive formation, (3) Negative formation, (4) Polite structures, (5) Real-life applications.",
        example: "Spend 10 minutes reviewing each area before the 50-question test.",
      },
    ],

    commonMistakes: [
      { wrong: "All of the above common errors", correct: "Review each mistake type systematically", explanation: "Focus on: no subject, base verb only, correct negation, correct polite structures." },
    ],

    sentencePatterns: [
      {
        pattern: "Mixed practice — all types",
        hindiPattern: "सभी types की mixed practice",
        examples: [
          { english: "Submit the project report by Friday without fail.", hindi: "Project report शुक्रवार तक बिना किसी चूक के जमा करो।" },
          { english: "Let's not panic — let's think clearly and find a solution.", hindi: "घबराना नहीं — शांत रहते हैं और solution ढूंढते हैं।" },
          { english: "Would you mind reviewing my presentation before the client call?", hindi: "Client call से पहले क्या आप मेरी presentation review करने में कोई आपत्ति नहीं करेंगे?" },
          { english: "Do try the new approach — it might give better results.", hindi: "नया approach ज़रूर try करो — बेहतर results मिल सकते हैं।" },
        ],
      },
    ],

    summary: [
      "Imperatives = command, request, instruction, suggestion",
      "Always base verb — no conjugation, no subject",
      "Positive: 'Go.' | Negative: 'Don't go.' | Emphatic: 'Do go!' | Let's: 'Let's go.'",
      "Polite: 'Please go.' / 'Kindly go.' / 'Would you mind going?'",
      "You have mastered Imperative Sentences — use them every day!",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 4 — BE VERB (AM / IS / ARE / WAS / WERE)
  // ══════════════════════════════════════════════════════════

  // ── d4-t1-s4: Will Be / Shall Be — Future Be Verb ──
  "d4-t1-s4": {
    whyLearnThis: `"I will be ready." "She will be promoted next month." "They will be there by 5." The future form of Be Verb is everywhere in promises, plans, and predictions!\n\nFuture Be Verb lets you:\n✓ Make promises: "I will be there on time."\n✓ Describe future states: "The report will be ready tomorrow."\n✓ Predict outcomes: "This project will be a great success."\n✓ Plan events: "The conference will be in Mumbai this year."\n✓ Professional promises: "Your order will be delivered by Friday."`,

    conceptExplanation: `FUTURE BE VERB — WILL BE / SHALL BE:\n\n📌 WILL BE — Used for all subjects in future:\nI will be | You will be | He/She/It will be | We will be | They will be\n\nWill be = "होगा/होगी/होंगे" (भविष्य में)\n\nEXAMPLES:\n• I will be at the office by 9. (मैं 9 बजे office में होऊंगा।)\n• She will be promoted next quarter. (उसे अगली quarter में promotion मिलेगी।)\n• The meeting will be in Conference Room A. (Meeting Conference Room A में होगी।)\n• They will be happy to know this. (यह जानकर वे खुश होंगे।)\n• The package will be delivered tomorrow. (कल package deliver होगा।)\n\n📌 CONTRACTIONS:\nI will be → I'll be\nYou will be → You'll be\nHe/She will be → He'll / She'll be\nWe will be → We'll be\nThey will be → They'll be\n\n📌 NEGATIVE: won't be / will not be\n• I won't be available this evening.\n• She won't be at the meeting.\n• The server won't be down for long.\n\n📌 QUESTION: Will + Subject + be?\n• Will you be at the conference?\n• Will she be joining the call?\n• Will the report be ready on time?\n\n📌 SHALL BE (more formal):\nShall be is used in formal/legal documents and British English:\n• "The contractor shall be responsible for all defects."\n• "Payments shall be made within 30 days."`,

    hindiExplanation: `Future Be Verb = Will be / Shall be\n\nFormula: Subject + will be + Noun/Adjective/Preposition\n\nI will be = मैं होऊंगा/होऊंगी\nYou will be = आप होंगे\nHe/She will be = वह होगा/होगी\nWe will be = हम होंगे\nThey will be = वे होंगे\n\nUse:\n• Future state: "I will be ready in 10 minutes."\n• Future position: "He will be the project lead."\n• Future place: "She will be in Delhi tomorrow."\n\nNegative: won't be\n"I won't be available tomorrow."\n\nQuestion: "Will you be there?"`,

    rules: [
      {
        rule: "'Will be' is the same for all subjects in future — no will am/will is/will are",
        explanation: "Unlike present tense (am/is/are), future Be Verb uses ONLY 'will be' for every subject. No changes for person or number.",
        example: "✅ I will be / You will be / He will be / She will be / We will be / They will be\n❌ I will am / He will is / They will are",
        exception: "'Shall be' is an alternative to 'will be' — more formal, less common in modern English, used mostly in legal/official documents.",
      },
    ],

    commonMistakes: [
      { wrong: "I will am ready.", correct: "I will be ready.", explanation: "'Will' is always followed by 'be' — never 'am', 'is', or 'are'." },
      { wrong: "She will be at 9 AM will arrive.", correct: "She will be here at 9 AM.", explanation: "Keep future Be Verb sentences clear and concise." },
    ],

    sentencePatterns: [
      {
        pattern: "Future states and positions with Will Be",
        hindiPattern: "Future में Be Verb",
        examples: [
          { english: "The results will be announced on Friday.", hindi: "Results शुक्रवार को announced होंगे।" },
          { english: "I will be your point of contact for this project.", hindi: "इस project के लिए मैं आपका contact point होऊंगा।" },
          { english: "The new policy will be effective from January 1st.", hindi: "नई policy 1 जनवरी से effective होगी।" },
          { english: "Will you be available for a quick call this afternoon?", hindi: "क्या आप आज दोपहर एक quick call के लिए available होंगे?" },
        ],
      },
    ],

    summary: [
      "'Will be' is the same for ALL subjects — never 'will am/is/are'",
      "Contraction: will be → 'll be (I'll be, she'll be)",
      "Negative: won't be / will not be",
      "Question: Will + subject + be?",
      "'Shall be' is more formal — used in legal/official documents",
    ],
  },

  // ── d4-t2-s1: Be Verb with Nouns ──
  "d4-t2-s1": {
    whyLearnThis: `"I am a teacher." "She is a doctor." "They are engineers." — Be Verb with nouns is how you identify WHAT someone or something IS in English.\n\nThis pattern is essential for:\n✓ Introductions: "I am a software engineer at Google."\n✓ Descriptions: "This is a fantastic opportunity."\n✓ Definitions: "English is a global language."\n✓ Classification: "He is a member of the team."\n\nEvery time you describe identity, role, or category in English, you use Be Verb + Noun. Master this and your introductions will be 100% correct!`,

    conceptExplanation: `BE VERB + NOUN — The Identity Formula:\n\nFormula: Subject + Be Verb + (a/an/the) + Noun\n\n📌 ARTICLE RULES with Be Verb:\n• A/an = for singular, countable, first-mention nouns\n  "She is a doctor." / "He is an engineer."\n• The = for specific, known, or unique nouns\n  "She is the manager of the team."\n• No article = for plural nouns and uncountable nouns\n  "They are engineers." / "He is staff here."\n\nEXAMPLES — PRESENT:\n• I am a student of English. (पहचान)\n• You are a great listener. (quality as noun)\n• He is a data analyst at Amazon. (job)\n• She is the team leader. (specific role)\n• It is a critical issue. (classification)\n• We are a 5-member team. (group identity)\n• They are members of the board. (plural identity)\n\nEXAMPLES — PAST:\n• He was a famous cricket player in his youth.\n• They were pioneers in this field.\n• She was the first woman CEO of the company.\n\nEXAMPLES — FUTURE:\n• I will be a fluent English speaker in 75 days!\n• She will be the project manager next year.\n• They will be the top performers this quarter.`,

    hindiExplanation: `Be Verb + Noun = पहचान बताना\n\nFormula: Subject + am/is/are/was/were + a/an + Noun\n\nPresent:\n• I am + a/an + job = मैं एक _____ हूँ\n  "I am a teacher." (मैं एक teacher हूँ।)\n• He/She is + a/an + noun = वह एक _____ है\n  "She is a doctor." (वह एक doctor है।)\n• We/They are + noun = हम/वे _____ हैं\n  "They are engineers." (वे engineers हैं।)\n\nPast:\n• I was + a/an + noun = मैं एक _____ था/थी\n• He was + a/an + noun = वह एक _____ था`,

    rules: [
      {
        rule: "Use 'a' before consonant sounds, 'an' before vowel sounds",
        explanation: "The choice between 'a' and 'an' depends on SOUND, not spelling. Use 'an' before words that begin with a vowel SOUND.",
        example: "'a doctor', 'a manager', 'a teacher' | 'an engineer', 'an analyst', 'an intern'\nTricky: 'an MBA' (M sounds like 'em' = vowel sound) | 'a university' ('yu' sound = consonant sound)",
        exception: "Words like 'hour' start with a silent H but have vowel sound → 'an hour'. Words like 'university' start with vowel letter but consonant sound → 'a university'.",
      },
    ],

    commonMistakes: [
      { wrong: "She is engineer.", correct: "She is an engineer.", explanation: "Singular countable nouns need 'a' or 'an' before them." },
      { wrong: "I am the student here.", correct: "I am a student here.", explanation: "Use 'a' for first mention of someone's role/identity, not 'the'." },
      { wrong: "They are an engineers.", correct: "They are engineers.", explanation: "Plural nouns don't use 'a/an'." },
    ],

    sentencePatterns: [
      {
        pattern: "Be Verb with job titles and roles",
        hindiPattern: "Job और role बताने के लिए",
        examples: [
          { english: "I am a software developer with 3 years of experience.", hindi: "मैं 3 साल के अनुभव के साथ एक software developer हूँ।" },
          { english: "She is the head of the marketing department.", hindi: "वह marketing department की head है।" },
          { english: "We are a team of 12 passionate professionals.", hindi: "हम 12 passionate professionals की team हैं।" },
          { english: "He was a national level athlete before turning to coaching.", hindi: "Coaching शुरू करने से पहले वह national level athlete था।" },
        ],
      },
    ],

    summary: [
      "Formula: Subject + Be Verb + (a/an/the) + Noun",
      "Use 'a/an' for general identity; 'the' for specific roles",
      "Plural nouns: no article needed",
      "'a' before consonant sounds; 'an' before vowel sounds",
      "Works in all tenses: am (present), was (past), will be (future)",
    ],
  },

  // ── d4-t2-s2: Be Verb with Adjectives ──
  "d4-t2-s2": {
    whyLearnThis: `"She is beautiful." "He is intelligent." "The food is delicious." Be Verb with adjectives is HOW YOU DESCRIBE EVERYTHING in English.\n\nYou use this pattern constantly to describe:\n✓ People: "She is tall, smart, and confident."\n✓ Things: "This phone is fast, light, and expensive."\n✓ Situations: "The interview was difficult but fair."\n✓ Places: "The office is spacious and modern."\n✓ Feelings: "I am excited about this opportunity."\n\nWithout this pattern, you cannot describe anything in English!`,

    conceptExplanation: `BE VERB + ADJECTIVE — The Description Formula:\n\nFormula: Subject + Be Verb + Adjective\n\nNo article (a/an/the) needed after Be Verb + adjective.\nAdjective directly follows the Be Verb.\n\n📌 CATEGORIES OF ADJECTIVES:\n\n😊 EMOTIONAL/MENTAL STATE ADJECTIVES:\nhappy, sad, excited, nervous, confident, worried, proud, angry, surprised, tired, bored, relaxed, stressed, frustrated, motivated, inspired\n• "I am excited about the presentation."\n• "She is nervous before interviews."\n• "He is confident in his abilities."\n\n🌟 PERSONALITY ADJECTIVES:\nkind, friendly, intelligent, creative, hardworking, honest, polite, punctual, reliable, patient, ambitious, focused\n• "She is very intelligent and creative."\n• "He is honest and reliable."\n• "Our team is ambitious and hardworking."\n\n📐 PHYSICAL ADJECTIVES:\ntall, short, thin, heavy, young, old, beautiful, attractive, strong, weak, dark, fair, slim\n• "She is tall and slim."\n• "He is young but very experienced."\n• "The building is tall and modern."\n\n💼 PROFESSIONAL ADJECTIVES:\nexperienced, qualified, skilled, certified, trained, knowledgeable, dedicated, professional\n• "She is highly qualified for this role."\n• "He is experienced in project management."\n\n📦 QUALITY ADJECTIVES:\nexpensive, cheap, good, bad, excellent, terrible, perfect, acceptable, suitable, available, necessary\n• "This product is excellent quality."\n• "The deadline is flexible for now."`,

    hindiExplanation: `Be Verb + Adjective = description देना\n\nFormula: Subject + am/is/are/was/were + Adjective\n\n• I am + adjective: "I am happy." (मैं खुश हूँ।)\n• He/She is + adjective: "She is beautiful." (वह सुंदर है।)\n• We/They are + adjective: "They are intelligent." (वे intelligent हैं।)\n\nPast:\n• I was tired yesterday. (मैं कल थका/थकी था/थी।)\n• She was nervous before the interview. (Interview से पहले वह nervous थी।)\n\nNote: Adjective के बाद कुछ add करो:\n• "She is intelligent." → "She is very intelligent."\n→ "She is highly qualified."\n→ "She is extremely talented."`,

    rules: [
      {
        rule: "Adjectives after Be Verb don't need articles",
        explanation: "Unlike Be Verb + Noun (which needs a/an), Be Verb + Adjective has no article between the verb and adjective. The adjective directly follows the Be Verb.",
        example: "✅ She is beautiful. | ✅ He is confident. | ✅ They are hardworking.\n❌ She is a beautiful. | ❌ He is a confident. (No article before adjective!)",
      },
      {
        rule: "Intensifiers come before adjectives — very, extremely, quite, rather",
        explanation: "To strengthen or weaken adjectives, use intensifiers before them: 'very', 'extremely', 'quite', 'rather', 'fairly', 'so', 'too'.",
        example: "'She is very talented.' | 'He is extremely dedicated.' | 'The project is quite challenging.' | 'The task is rather simple.'",
      },
    ],

    commonMistakes: [
      { wrong: "She is very honestly.", correct: "She is very honest.", explanation: "'Honestly' is an adverb. The adjective 'honest' should be used with Be Verb." },
      { wrong: "He is a intelligent.", correct: "He is intelligent.", explanation: "No article before adjective with Be Verb." },
      { wrong: "I am boring.", correct: "I am bored.", explanation: "Boring = makes others feel bored (quality of something). Bored = the feeling you have. 'The lecture is boring.' / 'I am bored.'." },
    ],

    sentencePatterns: [
      {
        pattern: "Describing people with Be Verb + Adjective",
        hindiPattern: "लोगों को describe करना",
        examples: [
          { english: "She is extremely hardworking and very dedicated to her goals.", hindi: "वह बेहद मेहनती है और अपने goals के प्रति बहुत dedicated है।" },
          { english: "He is quite confident during presentations, even in front of large audiences.", hindi: "वह presentations के दौरान काफी confident है, बड़े audiences के सामने भी।" },
          { english: "The new team member is highly qualified but still somewhat new to the industry.", hindi: "नया team member बहुत qualified है लेकिन industry में अभी भी थोड़ा नया है।" },
        ],
      },
    ],

    summary: [
      "Formula: Subject + Be Verb + Adjective (no article)",
      "Emotional: happy, sad, excited, nervous | Personality: kind, honest, dedicated",
      "Physical: tall, slim, young | Professional: experienced, qualified",
      "Intensifiers: very, extremely, quite, rather",
      "Common error: boring vs bored, interesting vs interested, exciting vs excited",
    ],
  },

  // ── d4-t2-s3: Be Verb with Prepositions (Location) ──
  "d4-t2-s3": {
    whyLearnThis: `"I am at the office." "The meeting is in Conference Room B." "She is on the 5th floor." Be Verb with prepositions of place is how you tell WHERE things and people are in English.\n\nYou need this CONSTANTLY:\n✓ Telling someone your location: "I am at lunch right now."\n✓ Describing office layout: "The IT department is on the 3rd floor."\n✓ Giving directions: "The restroom is down the hall on the right."\n✓ Virtual meetings: "I am in Mumbai, joining remotely."`,

    conceptExplanation: `BE VERB + PREPOSITION — Expressing Location:\n\n📌 KEY PREPOSITIONS WITH BE VERB:\n\nIN — enclosed space, large area, city, country:\n• "I am in Mumbai."\n• "She is in the conference room."\n• "He is in a meeting right now."\n• "The files are in the cabinet."\n\nAT — specific point, address, event:\n• "I am at the office."\n• "She is at her desk."\n• "They are at a client site."\n• "We are at 45 MG Road, Bangalore."\n• "He is at lunch."\n\nON — surface, floor, street, online:\n• "The book is on the table."\n• "She is on the 3rd floor."\n• "He is on his way."\n• "I am on the phone right now."\n• "They are on a conference call."\n\nNEAR / NEXT TO / BESIDE / BEHIND / IN FRONT OF:\n• "The printer is near the window."\n• "She is sitting next to the manager."\n• "His cabin is behind the reception."\n• "The presentation screen is in front of everyone."\n\nOPPOSITE / ACROSS FROM:\n• "My desk is opposite the manager's cabin."\n• "The cafeteria is across from the main entrance."`,

    hindiExplanation: `Be Verb + Preposition = location (जगह) बताना\n\nIN = के अंदर/में:\n"I am in Mumbai." (मैं Mumbai में हूँ।)\n"She is in the meeting room." (वह meeting room में है।)\n\nAT = किसी specific जगह पर:\n"He is at his desk." (वह अपनी desk पर है।)\n"I am at work." (मैं काम पर हूँ।)\n\nON = किसी surface पर या floor पर:\n"She is on the 4th floor." (वह 4th floor पर है।)\n"He is on the phone." (वह phone पर है।)\n\nTrick to remember:\n• IN = inside something (box, room, city)\n• AT = at a point (desk, office, event)\n• ON = on a surface (table, floor) OR in progress (phone, call)`,

    rules: [
      {
        rule: "IN for larger spaces; AT for specific points; ON for surfaces and floors",
        explanation: "General rule: cities/countries = IN. Addresses and events = AT. Floors and surfaces = ON. But there are many fixed expressions to memorize.",
        example: "'She is in London.' | 'She is at the airport.' | 'She is on the second floor.' | 'She is at her desk.' | 'She is in a meeting.'",
        exception: "Fixed expressions: 'at home', 'at work', 'at school', 'at the office', 'on holiday', 'on sick leave', 'in hospital' (British) / 'in the hospital' (American).",
      },
    ],

    commonMistakes: [
      { wrong: "I am in my desk.", correct: "I am at my desk.", explanation: "Use 'at' for specific locations/points like desks, tables, events." },
      { wrong: "She is at the 3rd floor.", correct: "She is on the 3rd floor.", explanation: "Use 'on' for floors in a building." },
      { wrong: "He is in the phone.", correct: "He is on the phone.", explanation: "'On the phone' means he is making/receiving a call." },
    ],

    sentencePatterns: [
      {
        pattern: "Location with Be Verb",
        hindiPattern: "जगह बताना",
        examples: [
          { english: "I am at the office — can we talk later?", hindi: "मैं office में हूँ — क्या हम बाद में बात कर सकते हैं?" },
          { english: "She is in a client meeting until 4 PM.", hindi: "वह 4 बजे तक client meeting में है।" },
          { english: "The documents are on the third shelf in the archive room.", hindi: "Documents archive room में तीसरी shelf पर हैं।" },
          { english: "Was he at the conference yesterday?", hindi: "क्या वह कल conference में था?" },
        ],
      },
    ],

    summary: [
      "IN = enclosed space, room, city, country",
      "AT = specific point, address, event, desk",
      "ON = surface, floor number, phone/call",
      "Common fixed expressions: at home, at work, on holiday, in a meeting",
      "Past: was/were + preposition | Future: will be + preposition",
    ],
  },

  // ── d4-t2-s4: Questions and Negatives with Be Verb ──
  "d4-t2-s4": {
    whyLearnThis: `You can only communicate FULLY when you can make QUESTIONS and NEGATIVES, not just positive statements!\n\n"Are you ready?" "Is she coming?" "They are not available." "I am not sure." — These are as important as positive sentences.\n\nIn professional English:\n✓ Questions show engagement: "Are you available for a call?"\n✓ Negatives show clarity: "I am not responsible for this error."\n✓ Tag questions show politeness: "The meeting is at 3, isn't it?"\n\nMastering questions and negatives with Be Verb completes your basic English toolkit!`,

    conceptExplanation: `QUESTIONS AND NEGATIVES WITH BE VERB:\n\n📌 FORMING QUESTIONS:\nMove Be Verb BEFORE the subject:\n\nStatement: She is ready.\nQuestion: Is she ready?\n\nStatement: They are coming.\nQuestion: Are they coming?\n\nStatement: I am late.\nQuestion: Am I late?\n\nPattern: Be Verb + Subject + Rest of sentence?\n• Am I right?\n• Is she available?\n• Are you the manager?\n• Was he there yesterday?\n• Were they informed?\n• Will you be free tomorrow?\n\n📌 QUESTION WORDS + BE VERB:\n• Where is she? / Where are they?\n• What is the problem? / What are the requirements?\n• Who is the team lead? / Who are the stakeholders?\n• When is the deadline? / When are you available?\n• How is the project going? / How are you feeling?\n• Why is the server down? / Why are they late?\n• Which is the correct version?\n\n📌 NEGATIVE FORM:\nAdd 'not' after the Be Verb:\nSubject + Be Verb + NOT\n\n• I am not ready. (I'm not ready.)\n• He is not available. (He's not / He isn't available.)\n• She is not the manager. (She's not / She isn't.)\n• They are not our clients. (They're not / They aren't.)\n• We were not informed. (We weren't informed.)\n\n📌 CONTRACTIONS FOR NEGATIVES:\nisn't = is not | aren't = are not | wasn't = was not | weren't = were not | won't be = will not be`,

    hindiExplanation: `Questions और Negatives:\n\nQuestion बनाने का formula:\nBe Verb को Subject से पहले लाओ!\n\n"She is ready." → "Is she ready?" ✅\n"They are here." → "Are they here?" ✅\n\nWh-questions:\n"Where is she?" (वह कहाँ है?)\n"When is the meeting?" (Meeting कब है?)\n"Who is the manager?" (Manager कौन है?)\n\nNegative बनाने का formula:\nBe Verb के बाद "not" लगाओ:\n\n"I am not ready." (मैं ready नहीं हूँ।)\n"He is not available." (वह available नहीं है।)\n"They are not here." (वे यहाँ नहीं हैं।)\n\nShort forms:\n• isn't = is not\n• aren't = are not\n• wasn't = was not\n• weren't = were not`,

    rules: [
      {
        rule: "Questions: Move Be Verb before the subject",
        explanation: "English questions with Be Verb are formed by INVERSION — the Be Verb moves to the front of the sentence. This is different from Hindi where word order changes less.",
        example: "'You are free.' → 'Are you free?' | 'She is the manager.' → 'Is she the manager?' | 'They were there.' → 'Were they there?'",
        exception: "With question words (who, what, where), the question word comes FIRST: 'Where are you?' / 'What is this?' / 'Who is she?'",
      },
    ],

    commonMistakes: [
      { wrong: "Is she is ready?", correct: "Is she ready?", explanation: "Don't repeat 'is' — just one Be Verb needed." },
      { wrong: "She not is here.", correct: "She is not here. / She isn't here.", explanation: "'Not' comes AFTER the Be Verb, not before it." },
      { wrong: "Where she is?", correct: "Where is she?", explanation: "Even with question words, Be Verb must come before the subject." },
    ],

    sentencePatterns: [
      {
        pattern: "Be Verb questions in professional settings",
        hindiPattern: "Professional questions",
        examples: [
          { english: "Is the report ready for the client presentation?", hindi: "क्या report client presentation के लिए ready है?" },
          { english: "Are you available for a 30-minute call this afternoon?", hindi: "क्या आप आज दोपहर 30 minutes की call के लिए available हैं?" },
          { english: "Was the meeting productive? Did everyone agree on the timeline?", hindi: "क्या meeting productive थी? क्या सभी timeline पर सहमत थे?" },
          { english: "I am not responsible for this — it was not in my scope of work.", hindi: "मैं इसके लिए ज़िम्मेदार नहीं हूँ — यह मेरे काम के दायरे में नहीं था।" },
        ],
      },
    ],

    summary: [
      "Questions: invert Be Verb and subject — 'She is ready' → 'Is she ready?'",
      "Wh-questions: Question word + Be Verb + Subject",
      "Negatives: Be Verb + NOT — 'I am not', 'She isn't', 'They aren't'",
      "Contractions: isn't, aren't, wasn't, weren't, won't be",
      "Never repeat Be Verb: 'Is she is?' ❌ → 'Is she?' ✅",
    ],
  },

  // ── d4-t3-s1: Be Verb in Continuous Tenses ──
  "d4-t3-s1": {
    whyLearnThis: `"I am working from home today." "She was sleeping when he called." "They will be attending the conference next week." — Continuous tenses use Be Verb as a HELPER!\n\nContinuous tenses express ONGOING ACTIONS — things happening right now, happening at a past moment, or that will be happening in the future. They are essential for:\n✓ Live updates: "I am currently in a meeting."\n✓ Background context: "She was preparing when the manager arrived."\n✓ Future arrangements: "We will be presenting to the board on Monday."\n\nWithout continuous tenses, you can only talk about completed actions. With them, you can describe actions IN PROGRESS!`,

    conceptExplanation: `BE VERB AS HELPING VERB IN CONTINUOUS TENSES:\n\nFormula: Subject + Be Verb + Verb+ING\n\n📌 PRESENT CONTINUOUS (Right now / around now):\nam/is/are + verb+ing\n\n• I am working on the report right now.\n• She is attending a training session today.\n• They are developing the new app.\n• We are currently hiring for 3 positions.\n• The server is processing your request.\n\n📌 PAST CONTINUOUS (At a specific past moment):\nwas/were + verb+ing\n\n• I was working when the power went out.\n• She was sleeping when the alarm rang.\n• They were discussing the budget when I joined the call.\n• The team was reviewing the code when the client called.\n\n📌 FUTURE CONTINUOUS (At a specific future moment):\nwill be + verb+ing\n\n• I will be traveling to Delhi on Monday.\n• She will be presenting to the board at 11 AM.\n• They will be working from the head office this week.\n• We will be discussing the proposal tomorrow afternoon.\n\n📌 INTERRUPTION PATTERN (Past Continuous + Simple Past):\nWas/were + -ing (background) + when + simple past (interruption)\n• "I was reading when he called."\n• "She was working when the power went out."\n• "They were having lunch when the fire alarm rang."`,

    hindiExplanation: `Continuous Tenses में Be Verb = helping verb\n\nFormula: Subject + Be Verb + verb+ing\n\nPresent Continuous (अभी हो रहा है):\n"I am working." = मैं काम कर रहा/रही हूँ।\n"She is studying." = वह पढ़ रही है।\n\nPast Continuous (उस वक्त हो रहा था):\n"I was working." = मैं काम कर रहा/रही था/थी।\n"She was sleeping." = वह सो रही थी।\n\nFuture Continuous (उस वक्त हो रहा होगा):\n"I will be working." = मैं काम कर रहा/रही होऊंगा/होऊंगी।\n"She will be studying." = वह पढ़ रही होगी।`,

    rules: [
      {
        rule: "Continuous tense = Be Verb + verb+ing (Never Be Verb alone or verb alone)",
        explanation: "Both parts are essential: the Be Verb (showing tense) AND the -ing form (showing ongoing action). Missing either one breaks the tense.",
        example: "✅ I am reading. (am + reading) | ✅ She was running. (was + running)\n❌ I am read. (no -ing) | ❌ She reading. (no Be Verb) | ❌ She were running. (wrong Be Verb for singular)",
      },
      {
        rule: "State verbs cannot be used in continuous form",
        explanation: "Some verbs describe STATES, not actions, and cannot use -ing form: know, understand, believe, want, love, hate, need, own, see (= understand), hear.",
        example: "✅ 'I know the answer.' | ❌ 'I am knowing the answer.'\n✅ 'She loves music.' | ❌ 'She is loving music.'\n✅ 'I need help.' | ❌ 'I am needing help.'",
        exception: "Some state verbs CAN be used in continuous for special meanings: 'I am having lunch' (experience, not possession) / 'She is seeing a doctor' (visiting, not just seeing).",
      },
    ],

    commonMistakes: [
      { wrong: "I am knowing him.", correct: "I know him.", explanation: "'Know' is a state verb — cannot use -ing form." },
      { wrong: "She were reading.", correct: "She was reading.", explanation: "'She/He/It' always uses 'was', not 'were'." },
      { wrong: "They was working.", correct: "They were working.", explanation: "'They/You/We' always uses 'were', not 'was'." },
    ],

    sentencePatterns: [
      {
        pattern: "Present Continuous for current activities",
        hindiPattern: "अभी हो रहे कामों के लिए",
        examples: [
          { english: "I am currently working on the Q3 analysis — can we connect tomorrow?", hindi: "मैं अभी Q3 analysis पर काम कर रहा/रही हूँ — क्या हम कल connect कर सकते हैं?" },
          { english: "The team is developing a solution and will update you soon.", hindi: "Team एक solution develop कर रही है और जल्द आपको update करेगी।" },
          { english: "She was reviewing the contract when the client called.", hindi: "जब client ने call किया, वह contract review कर रही थी।" },
        ],
      },
    ],

    summary: [
      "Continuous tenses: Be Verb + verb+ing",
      "Present continuous: am/is/are + -ing (happening now)",
      "Past continuous: was/were + -ing (was happening at a past moment)",
      "Future continuous: will be + -ing (will be happening at a future moment)",
      "State verbs (know, love, want, need) cannot use -ing form",
    ],
  },

  // ── d4-t3-s2: Be Verb in Passive Voice ──
  "d4-t3-s2": {
    whyLearnThis: `"The report was written by the manager." "The email will be sent by tomorrow." "The project is being reviewed." — Passive voice with Be Verb is one of the most IMPORTANT structures in professional English!\n\nPassive voice is used when:\n✓ The action is more important than who did it: "The policy was updated."\n✓ The doer is unknown: "The file was deleted."\n✓ Formal writing: "The contract has been signed."\n✓ Scientific/technical writing: "The data was collected from 500 participants."\n\nIn professional emails, reports, and presentations, passive voice is used constantly. Mastering it will make your English sound truly professional!`,

    conceptExplanation: `PASSIVE VOICE WITH BE VERB:\n\nFormula: Subject + Be Verb + Past Participle (V3) + (by + doer)\n\n📌 PRESENT PASSIVE:\nam/is/are + V3\n• "The report is written by the team."\n• "Emails are checked every morning."\n• "New employees are trained by HR."\n\n📌 PAST PASSIVE:\nwas/were + V3\n• "The project was completed last Friday."\n• "The documents were signed yesterday."\n• "He was promoted to senior manager."\n\n📌 FUTURE PASSIVE:\nwill be + V3\n• "The report will be submitted tomorrow."\n• "Results will be announced on Friday."\n• "The policy will be updated next quarter."\n\n📌 PRESENT CONTINUOUS PASSIVE:\nam/is/are + being + V3\n• "The app is being developed."\n• "The code is being reviewed."\n• "The proposal is being discussed."\n\n📌 ACTIVE vs PASSIVE COMPARISON:\nActive: "The manager wrote the report."\nPassive: "The report was written by the manager."\n\nActive: "They will announce results."\nPassive: "Results will be announced."\n\n📌 KEY PAST PARTICIPLES (V3) TO KNOW:\ncompleted, submitted, approved, rejected, confirmed, delivered, published, announced, updated, reviewed, trained, promoted, assigned`,

    hindiExplanation: `Passive Voice = जब action important हो, not who did it\n\nFormula: Subject + Be Verb + V3 (past participle)\n\nPresent Passive:\n"The report is written." (Report लिखी जाती है।)\n"Letters are sent daily." (Letters रोज़ भेजे जाते हैं।)\n\nPast Passive:\n"The project was completed." (Project complete कर दिया गया।)\n"He was promoted." (उसे promote किया गया।)\n\nFuture Passive:\n"Results will be announced." (Results announce किए जाएंगे।)\n"Deliverables will be shared by EOD." (Deliverables EOD तक share होंगे।)`,

    rules: [
      {
        rule: "Passive voice = Be Verb + Past Participle (V3)",
        explanation: "The main rule of passive voice: Be Verb (in appropriate tense) + V3 (past participle). The Be Verb carries the tense information; V3 carries the action.",
        example: "'The report is submitted.' (present) | 'was submitted' (past) | 'will be submitted' (future) | 'is being submitted' (present continuous)",
      },
    ],

    commonMistakes: [
      { wrong: "The report was submitting.", correct: "The report was submitted.", explanation: "Passive voice uses V3 (past participle), not -ing form." },
      { wrong: "The work is did.", correct: "The work is done.", explanation: "Use the correct V3 form: do → done, not 'did'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional passive voice sentences",
        hindiPattern: "Professional passive sentences",
        examples: [
          { english: "The quarterly report has been reviewed and approved by the director.", hindi: "Quarterly report director द्वारा review और approve कर ली गई है।" },
          { english: "Your application is being processed and results will be shared within 5 days.", hindi: "आपकी application process हो रही है और results 5 दिनों के भीतर share किए जाएंगे।" },
          { english: "The new feature will be released next month after thorough testing.", hindi: "नया feature अच्छी testing के बाद अगले महीने release किया जाएगा।" },
        ],
      },
    ],

    summary: [
      "Passive voice: Be Verb (right tense) + V3 (past participle)",
      "Use when action matters more than the doer",
      "Present passive: is/are + V3 | Past passive: was/were + V3",
      "Future passive: will be + V3 | Continuous passive: is/are being + V3",
      "Common in professional writing: reports, emails, announcements",
    ],
  },

  // ── d4-t3-s3: Common Be Verb Mistakes ──
  "d4-t3-s3": {
    whyLearnThis: `"He don't be late." "She is knowing me." "They is coming." — These mistakes are extremely common among Indian English learners and immediately signal to native speakers that you're still learning.\n\nFix these errors and your English will sound dramatically more fluent. This lesson identifies the TOP 15 Be Verb mistakes Indians make and gives you the permanent fix for each one.`,

    conceptExplanation: `TOP COMMON BE VERB MISTAKES — WITH FIXES:\n\n❌ MISTAKE 1: Using wrong Be Verb for subject\n"He are tall." / "They is coming." / "She am ready."\n✅ FIX: I→am, He/She/It→is, You/We/They→are\n\n❌ MISTAKE 2: Missing Be Verb in sentences\n"She very beautiful." / "He engineer."\n✅ FIX: Always include the Be Verb: "She is very beautiful." / "He is an engineer."\n\n❌ MISTAKE 3: Using Be Verb with state verbs in -ing\n"I am knowing him." / "She is wanting to go."\n✅ FIX: State verbs DON'T use -ing: "I know him." / "She wants to go."\n\n❌ MISTAKE 4: Using 'was' instead of 'were' for plural\n"They was late." / "We was there."\n✅ FIX: I/He/She/It = was. You/We/They = were.\n\n❌ MISTAKE 5: Double Be Verb\n"She is is ready." / "He was was there."\n✅ FIX: Only ONE Be Verb per sentence.\n\n❌ MISTAKE 6: Adding 'not' in wrong place\n"She not is here." / "He not was available."\n✅ FIX: Not comes AFTER Be Verb: "She is not here." / "He was not available."\n\n❌ MISTAKE 7: Using 'be' instead of 'am/is/are'\n"I be ready." / "She be coming."\n✅ FIX: Use 'be' only in imperatives ("Be careful!") and infinitives ("It will be done."). Not in regular statements.\n\n❌ MISTAKE 8: Confusing 'boring' and 'bored'\n"I am boring." (means: I am a boring person!)\n✅ FIX: "I am bored." (meaning: I feel bored right now)\nThe -ing adjective describes the thing/person; -ed adjective describes your feeling.`,

    hindiExplanation: `Common Be Verb mistakes जो Indians बहुत करते हैं:\n\n1. "He are tall." ❌ → "He is tall." ✅\n2. "She am ready." ❌ → "She is ready." ✅\n3. "They was there." ❌ → "They were there." ✅\n4. "I am knowing." ❌ → "I know." ✅ (state verb)\n5. "She not is here." ❌ → "She is not here." ✅\n6. "I be ready." ❌ → "I am ready." ✅\n\nYाद रखो:\nI → am | He/She/It → is | You/We/They → are\nI → was | He/She/It → was | You/We/They → were`,

    rules: [
      {
        rule: "Subject-verb agreement is non-negotiable with Be Verb",
        explanation: "Be Verb has more forms than any other English verb (am, is, are, was, were, be, being, been). Each form has specific uses. Getting this wrong is very noticeable to native speakers.",
        example: "Present: I am / He is / They are | Past: I was / They were | Never: He are / They is / I were",
      },
    ],

    commonMistakes: [
      { wrong: "I am boring.", correct: "I am bored.", explanation: "'Boring' = something that causes boredom. 'Bored' = the feeling of being bored. 'The lecture is boring.' / 'I am bored by the lecture.'" },
      { wrong: "She not is available.", correct: "She is not available. / She isn't available.", explanation: "NOT must come after the Be Verb." },
      { wrong: "They was working.", correct: "They were working.", explanation: "Plural subjects (they/we/you) always use 'were', not 'was'." },
    ],

    sentencePatterns: [
      {
        pattern: "Corrected Be Verb sentences",
        hindiPattern: "Correct Be Verb usage",
        examples: [
          { english: "She is extremely talented and highly motivated to succeed.", hindi: "वह बेहद talented है और सफल होने के लिए बहुत motivated है।" },
          { english: "We were not informed about the change in schedule.", hindi: "हमें schedule में बदलाव के बारे में बताया नहीं गया था।" },
          { english: "Are they available for a discussion this week?", hindi: "क्या वे इस हफ्ते discussion के लिए available हैं?" },
        ],
      },
    ],

    summary: [
      "I→am, He/She/It→is, You/We/They→are (present)",
      "I/He/She/It→was, You/We/They→were (past)",
      "NOT always comes AFTER the Be Verb",
      "State verbs (know, want, love) cannot use -ing form",
      "Boring ≠ Bored | Interesting ≠ Interested | Exciting ≠ Excited",
    ],
  },

  // ── d4-t4-s1: Adjectives with Be Verb ──
  "d4-t4-s1": {
    whyLearnThis: `Adjectives are the words that make English COLORFUL and EXPRESSIVE. Without adjectives, everything is flat and boring:\n\n"The project is done." (plain)\n"The project is outstanding, well-structured, and delivered on time." (vivid, impressive)\n\n200 adjectives across 10 categories will give you the vocabulary to:\n✓ Describe people and personalities vividly\n✓ Give professional opinions with precision\n✓ Express emotions and states naturally\n✓ Sound educated and sophisticated in English`,

    conceptExplanation: `TOP ADJECTIVES USED WITH BE VERB — BY CATEGORY:\n\n😊 EMOTIONS & FEELINGS:\nhappy, sad, excited, nervous, angry, frustrated, worried, anxious, scared, surprised, shocked, disappointed, satisfied, content, grateful, proud, embarrassed, confused, overwhelmed, stressed, relieved, motivated, inspired, hopeful\n\n🧠 PERSONALITY & CHARACTER:\nkind, generous, selfish, honest, dishonest, patient, impatient, confident, shy, outgoing, introvert, aggressive, passive, creative, logical, detail-oriented, ambitious, lazy, dedicated, reliable, trustworthy\n\n💡 INTELLIGENCE & SKILL:\nintelligent, clever, smart, wise, knowledgeable, experienced, skilled, talented, gifted, capable, competent, qualified, trained, certified, expert, novice, inexperienced\n\n💼 PROFESSIONAL QUALITIES:\nprofessional, unprofessional, punctual, responsible, accountable, proactive, reactive, systematic, organized, disorganized, efficient, productive, creative, innovative, strategic, detail-oriented, flexible, adaptable\n\n📊 WORK/PROJECT STATES:\ncomplete, incomplete, pending, approved, rejected, in progress, on hold, delayed, ahead of schedule, behind schedule, under review, critical, urgent, important, minor, major, relevant, irrelevant\n\n🌟 QUALITY ADJECTIVES:\nexcellent, outstanding, good, average, poor, terrible, perfect, flawless, effective, ineffective, innovative, conventional, suitable, appropriate, relevant, significant, substantial, minimal`,

    hindiExplanation: `Be Verb के साथ use होने वाले important adjectives:\n\nEmotions:\nHappy = खुश | Sad = दुखी | Excited = उत्साहित | Nervous = घबराया हुआ | Angry = गुस्से में\n\nPersonality:\nKind = दयालु | Honest = ईमानदार | Patient = धैर्यवान | Confident = आत्मविश्वासी\n\nProfessional:\nPunctual = समय का पाबंद | Responsible = ज़िम्मेदार | Dedicated = समर्पित | Qualified = योग्य\n\nWork status:\nComplete = पूरा | Pending = लंबित | Approved = स्वीकृत | Urgent = जरूरी`,

    rules: [
      {
        rule: "Adjectives never change form with Be Verb — no -s or -ed ending",
        explanation: "Unlike verbs, adjectives don't change based on the subject. 'She is tall' and 'They are tall' — 'tall' stays the same for both.",
        example: "✅ He is happy. They are happy. She was happy. (same adjective, different Be Verb)\n❌ He is happys. They are happied. (adjectives don't conjugate)",
      },
    ],

    commonMistakes: [
      { wrong: "He is very boringly.", correct: "He is very boring.", explanation: "Use adjective (boring), not adverb (boringly) after Be Verb when describing the subject." },
      { wrong: "She is interesting in music.", correct: "She is interested in music.", explanation: "'Interested in' = you find something interesting. 'She is interesting' = she is a fascinating person." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional adjectives with Be Verb",
        hindiPattern: "Professional adjectives",
        examples: [
          { english: "The presentation was outstanding — clear, well-structured, and highly professional.", hindi: "Presentation outstanding थी — clear, well-structured, और बहुत professional।" },
          { english: "She is highly qualified for this role and extremely dedicated to her work.", hindi: "वह इस role के लिए बहुत qualified है और अपने काम के प्रति बेहद dedicated है।" },
          { english: "The project deadline is urgent — we need to prioritize immediately.", hindi: "Project की deadline urgent है — हमें तुरंत prioritize करना होगा।" },
        ],
      },
    ],

    summary: [
      "Adjectives after Be Verb describe what the subject IS or FEELS",
      "Adjectives don't change form — no -s, no -ed endings",
      "Use intensifiers: very, extremely, quite, highly, fairly, rather",
      "Emotion adjectives: happy, excited, nervous, proud, grateful",
      "Professional adjectives: qualified, dedicated, punctual, responsible",
    ],
  },

  // ── d4-t4-s2: Professions and Roles (I am a...) ──
  "d4-t4-s2": {
    whyLearnThis: `"I am a software developer." "She is a data analyst." "He is the project manager." — Talking about professions is one of the FIRST things you do in English!\n\nKnowing 100+ profession names allows you to:\n✓ Introduce yourself professionally\n✓ Describe your colleagues and team\n✓ Read job descriptions accurately\n✓ Network effectively in English`,

    conceptExplanation: `100+ PROFESSIONS AND ROLES WITH BE VERB:\n\n💻 TECHNOLOGY:\nSoftware Developer / Engineer, Web Developer, Frontend/Backend Developer, Full-Stack Developer, Mobile App Developer, Data Analyst, Data Scientist, Machine Learning Engineer, AI Researcher, Cybersecurity Expert, Network Engineer, DevOps Engineer, Cloud Architect, Database Administrator, UX/UI Designer, Product Manager, QA Engineer, Tech Lead, CTO\n\n📊 BUSINESS & MANAGEMENT:\nCEO / Managing Director, COO, CFO, VP / Vice President, General Manager, Operations Manager, Project Manager, Business Analyst, Strategy Consultant, Management Consultant, Entrepreneur, Business Owner, Startup Founder\n\n💼 FINANCE & ACCOUNTING:\nAccountant, Chartered Accountant, Financial Analyst, Investment Banker, Tax Consultant, Auditor, Cost Accountant, Finance Manager, CFO, Treasury Manager\n\n🎨 CREATIVE:\nGraphic Designer, UI/UX Designer, Content Writer, Copywriter, Video Editor, Photographer, Art Director, Creative Director, Social Media Manager, Brand Manager, Marketing Manager, Digital Marketer\n\n🏥 HEALTHCARE:\nDoctor, Physician, Surgeon, Nurse, Dentist, Pharmacist, Physiotherapist, Radiologist, Cardiologist, Dermatologist, Orthopedic Surgeon, Pediatrician\n\n📚 EDUCATION:\nTeacher, Professor, Lecturer, Principal, Vice Principal, Education Coordinator, Curriculum Developer, School Counselor, Academic Researcher\n\n⚖️ LEGAL:\nLawyer, Advocate, Attorney, Legal Consultant, Judge, Notary, Corporate Lawyer, Criminal Defense Lawyer, Intellectual Property Lawyer`,

    hindiExplanation: `Professions को English में कहना:\n\nFormula: I am + a/an + profession\n\nIT में:\n"I am a software developer." (मैं software developer हूँ।)\n"She is a data analyst." (वह data analyst है।)\n"He is the project manager." (वह project manager है।)\n\nBusiness में:\n"I am a marketing manager." (मैं marketing manager हूँ।)\n"She is the CEO of a startup." (वह startup की CEO है।)\n\nHealthcare में:\n"He is a cardiologist." (वह cardiologist है।)\n"She is a nurse." (वह nurse है।)`,

    rules: [
      {
        rule: "Use 'a/an' before profession for general identity; 'the' for specific role",
        explanation: "'I am a manager' = I am a manager (one of many managers). 'I am the manager' = I am the specific manager of this team.",
        example: "'She is a doctor.' (general) vs 'She is the doctor in charge.' (specific)\n'He is a developer.' vs 'He is the lead developer on this project.'",
      },
    ],

    commonMistakes: [
      { wrong: "She is engineer.", correct: "She is an engineer.", explanation: "Singular professions need 'a' or 'an' before them." },
      { wrong: "He is the manager in ABC company.", correct: "He is the manager at ABC company.", explanation: "Use 'at' (not 'in') with company names for location/employment." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional introductions with Be Verb",
        hindiPattern: "Professional introductions",
        examples: [
          { english: "I am a senior data scientist at a leading fintech company in Bangalore.", hindi: "मैं Bangalore में एक leading fintech company में senior data scientist हूँ।" },
          { english: "She is the head of product at a fast-growing startup.", hindi: "वह एक fast-growing startup में product की head है।" },
          { english: "He was the lead architect on the Bangalore Metro project.", hindi: "वह Bangalore Metro project पर lead architect था।" },
        ],
      },
    ],

    summary: [
      "Professions always need 'a/an' (singular) or no article (plural)",
      "'The' for specific/unique roles: 'the CEO', 'the project manager'",
      "100+ professions: tech, business, finance, creative, healthcare, education, legal",
      "At + company name: 'I work at Google', 'She is a developer at Infosys'",
      "Practice: introduce 5 different people using profession + Be Verb sentences",
    ],
  },

  // ── d4-t4-s3: States and Conditions ──
  "d4-t4-s3": {
    whyLearnThis: `"I am tired." "She is ready." "The system is down." "He was sick last week." — States and conditions describe HOW someone or something IS at a moment in time.\n\nExpressing states correctly is essential for:\n✓ Health: "I am not feeling well." "She was sick for a week."\n✓ Readiness: "We are ready." "The report is ready."\n✓ Technical: "The server is down." "The connection is unstable."\n✓ Emotional: "He was upset about the feedback."\n\nThese expressions are used in every conversation, email, and meeting!`,

    conceptExplanation: `STATES AND CONDITIONS WITH BE VERB:\n\n🏃 PHYSICAL STATES:\ntired, exhausted, energetic, fresh, healthy, sick, injured, fit, unfit, strong, weak, hungry, full, thirsty\n• "I am exhausted after the long meeting."\n• "She was sick for three days last week."\n• "He is fit and ready for the challenge."\n\n😊 EMOTIONAL STATES:\nhappy, sad, angry, frustrated, excited, nervous, confident, stressed, relaxed, satisfied, disappointed, proud, grateful, surprised, shocked\n• "She is excited about the new project."\n• "He was frustrated with the repeated delays."\n• "We are all very proud of the team's achievement."\n\n💻 TECHNICAL/SYSTEM STATES:\nup, down, stable, unstable, live, offline, connected, disconnected, available, unavailable, active, inactive, enabled, disabled, processing, idle\n• "The server is down — please check your local settings."\n• "The system is stable now after the update."\n• "The feature is available in the latest version."\n\n📋 WORK/DOCUMENT STATES:\npending, complete, incomplete, in progress, under review, approved, rejected, on hold, submitted, archived, expired, active, draft, final\n• "The contract is under review by the legal team."\n• "The project is on hold pending budget approval."\n• "Your account is active and ready to use."`,

    hindiExplanation: `States = किसी की या किसी चीज़ की अभी की condition\n\nPhysical:\n"I am tired." (मैं थका/थकी हूँ।)\n"She is sick." (वह बीमार है।)\n"He is healthy." (वह स्वस्थ है।)\n\nEmotional:\n"I am excited." (मैं उत्साहित हूँ।)\n"He is frustrated." (वह frustrated है।)\n"We are proud." (हम गर्वित हैं।)\n\nTechnical:\n"The server is down." (Server बंद है।)\n"The connection is stable." (Connection stable है।)\n\nWork states:\n"The report is pending." (Report pending है।)\n"The project is complete." (Project complete है।)`,

    rules: [
      {
        rule: "State adjectives with Be Verb describe the current condition — they can change",
        explanation: "Unlike permanent characteristics, states can change. 'I am tired' (now, but won't always be). Use time expressions to show the state is temporary: 'I am tired today' / 'She was sick last week'.",
        example: "Temporary state: 'I am tired right now.' | Permanent characteristic: 'He is always energetic.'",
      },
    ],

    commonMistakes: [
      { wrong: "The server is fallen.", correct: "The server is down.", explanation: "Technical state: 'down' (not working) and 'up' (working). Not 'fallen'." },
      { wrong: "I am very exciting about this.", correct: "I am very excited about this.", explanation: "'Excited' = you feel excited. 'Exciting' = something that causes excitement." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional state descriptions",
        hindiPattern: "States describe करना",
        examples: [
          { english: "The production server is down — our team is actively working on a fix.", hindi: "Production server down है — हमारी team actively fix पर काम कर रही है।" },
          { english: "I am extremely pleased with the team's performance this quarter.", hindi: "मैं इस quarter में team की performance से बेहद खुश हूँ।" },
          { english: "The project timeline is on hold pending final approval from the client.", hindi: "Project timeline client की final approval pending होने के कारण on hold है।" },
        ],
      },
    ],

    summary: [
      "States describe current, temporary conditions",
      "Physical: tired, sick, hungry | Emotional: happy, stressed, proud",
      "Technical: up, down, stable, live | Work: pending, approved, in progress",
      "Excited (you feel it) vs Exciting (it causes excitement)",
      "Time expressions make states clearer: 'I am tired today' / 'She was sick last week'",
    ],
  },

  // ── d4-t5-s1: Translation Practice — Be Verb ──
  "d4-t5-s1": {
    whyLearnThis: `Translation from Hindi to English for Be Verb sentences is the fastest way to build fluency. You already know what you want to say in Hindi — now let's say it correctly in English.\n\nThrough 80+ translations, you will:\n✓ Cement all Be Verb rules automatically\n✓ Fix common translation errors\n✓ Build instant response patterns for daily use\n✓ Develop confidence for real conversations`,

    conceptExplanation: `TRANSLATION STRATEGY FOR BE VERB:\n\nStep 1: Identify the SUBJECT (I/You/He/She/We/They)\nStep 2: Choose the right Be Verb (am/is/are/was/were)\nStep 3: Identify what comes after (noun, adjective, or preposition)\nStep 4: Check tense (present/past/future)\n\nPRACTICE SET 1 — PRESENT:\nमैं एक teacher हूँ। → I am a teacher.\nवह बहुत intelligent है। → She is very intelligent.\nहम एक team हैं। → We are a team.\nवे office में हैं। → They are at the office.\nयह एक urgent issue है। → This is an urgent issue.\n\nPRACTICE SET 2 — PAST:\nमैं कल बहुत tired था/थी। → I was very tired yesterday.\nवह एक doctor था। → He was a doctor.\nहम वहाँ थे। → We were there.\nवे बहुत excited थे। → They were very excited.\n\nPRACTICE SET 3 — FUTURE:\nमैं कल ready रहूंगा/रहूंगी। → I will be ready tomorrow.\nवह अगले साल manager होगी। → She will be the manager next year.\n\nPRACTICE SET 4 — NEGATIVE:\nमैं ready नहीं हूँ। → I am not ready.\nवह available नहीं है। → She is not available.\nहम वहाँ नहीं थे। → We were not there.\n\nPRACTICE SET 5 — QUESTIONS:\nक्या वह ready है? → Is she ready?\nक्या तुम available हो? → Are you available?\nवह कहाँ है? → Where is she?\nMeeting कब है? → When is the meeting?`,

    hindiExplanation: `Translation कैसे करें:\n\nStep 1: Subject पहचानो (I/He/She/We/They)\nStep 2: Tense पहचानो (present/past/future)\nStep 3: सही Be Verb चुनो\nStep 4: बाकी sentence translate करो\n\nCommon translation patterns:\n• मैं _____ हूँ। → I am _____.\n• वह _____ है। → He/She is _____.\n• वे _____ थे। → They were _____.\n• क्या वह _____ है? → Is he/she _____?\n• वह _____ नहीं है। → He/She is not _____.`,

    rules: [
      {
        rule: "Always determine tense before choosing Be Verb form",
        explanation: "The most common translation error is using wrong tense. Check if the Hindi sentence is talking about NOW (is/am/are), the PAST (was/were), or the FUTURE (will be).",
        example: "मैं tired हूँ → I am tired (present)\nमैं tired था → I was tired (past)\nमैं tired रहूंगा → I will be tired (future)",
      },
    ],

    commonMistakes: [
      { wrong: "She is doing engineer.", correct: "She is an engineer.", explanation: "Don't translate 'engineering kar rahi hai' directly. In English: identity = 'She IS an engineer'." },
    ],

    sentencePatterns: [
      {
        pattern: "Mixed tense Be Verb translations",
        hindiPattern: "Translation practice",
        examples: [
          { english: "The new policy is effective from today — all employees are required to follow it.", hindi: "नई policy आज से effective है — सभी employees को इसका पालन करना आवश्यक है।" },
          { english: "She was the top performer last year and will be the team lead this year.", hindi: "वह पिछले साल top performer थी और इस साल team lead होगी।" },
          { english: "Are you available for the client presentation on Friday afternoon?", hindi: "क्या आप शुक्रवार दोपहर client presentation के लिए available हैं?" },
        ],
      },
    ],

    summary: [
      "Translation strategy: Subject → Tense → Be Verb → Rest",
      "Present: am/is/are | Past: was/were | Future: will be",
      "Negative: add 'not' after Be Verb",
      "Questions: move Be Verb before subject",
      "Practice 10 translations per day for automatic fluency",
    ],
  },

  // ── d4-t5-s2: Speaking Practice with Be Verb ──
  "d4-t5-s2": {
    whyLearnThis: `Knowing Be Verb rules is not enough — you need to SPEAK them automatically, without thinking. Speaking practice builds the neural pathways that make English feel natural.\n\nToday's goal: Say 50 Be Verb sentences out loud, covering all tenses, all subjects, all patterns!`,

    conceptExplanation: `BE VERB SPEAKING DRILLS:\n\n🎯 DRILL 1 — ALL SUBJECTS, PRESENT:\nSay aloud: "I am a student. You are a teacher. He is a doctor. She is a nurse. It is a laptop. We are a team. They are engineers."\n\n🎯 DRILL 2 — DESCRIPTIONS:\n"I am ready. She is beautiful. He is confident. We are excited. They are nervous. The project is complete. The report is pending."\n\n🎯 DRILL 3 — LOCATIONS:\n"I am at home. She is at work. He is in Mumbai. We are on the 4th floor. They are in a meeting. The file is on my desk."\n\n🎯 DRILL 4 — PAST TENSE:\n"I was tired yesterday. She was happy. He was at the office. We were on time. They were ready. It was a great meeting."\n\n🎯 DRILL 5 — FUTURE:\n"I will be there. She will be the manager. They will be promoted. The work will be done. I'll be ready in 5 minutes."\n\n🎯 DRILL 6 — QUESTIONS (Q&A with yourself):\nQ: "Am I ready?" A: "Yes, I am."\nQ: "Is she coming?" A: "Yes, she is. / No, she isn't."\nQ: "Are they available?" A: "Yes, they are. / No, they aren't."\nQ: "Was he there?" A: "Yes, he was." "No, he wasn't."\n\n🎯 DRILL 7 — SELF-INTRODUCTION:\n"I am [Name]. I am from [City]. I am a [profession]. I am [number] years old. I am very passionate about [interest]. I am currently working at [company/studying at]. I am excited to be here!"`,

    hindiExplanation: `Speaking practice — ज़ोर से बोलने का practice\n\nHर sentence 3 बार बोलो:\n1. Slowly and clearly\n2. Normal speed\n3. Natural, confident tone\n\nSelf-introduction in English:\n"I am Rahul. I am from Delhi. I am a software engineer. I am currently working at Infosys. I am very interested in technology and innovation. I am excited to meet all of you today!"\n\nRecord yourself and listen — यही सबसे अच्छा way है improvement का!`,

    rules: [
      {
        rule: "Speaking fluency comes from repetition — say each pattern 3 times minimum",
        explanation: "Research shows that saying a sentence pattern 3 times activates muscle memory. Your mouth needs to practice the sounds, not just your brain understanding the rule.",
        example: "Say 'I am a software engineer at Google' 3 times. Then change the profession. Then change the company. Soon it's automatic!",
      },
    ],

    commonMistakes: [
      { wrong: "Speaking too fast and mumbling", correct: "Speak at a clear, natural pace", explanation: "Fluency is not speed — it's clarity and confidence at a comfortable pace." },
    ],

    sentencePatterns: [
      {
        pattern: "Complete self-introduction using Be Verb",
        hindiPattern: "Be Verb से पूरा self-introduction",
        examples: [
          { english: "I am Priya Sharma. I am from Jaipur but I am currently based in Bangalore. I am a product manager at a fintech startup. I am passionate about creating products that solve real problems. I am very happy to be part of this event!", hindi: "मैं प्रिया शर्मा हूँ। मैं जयपुर से हूँ लेकिन currently Bangalore में हूँ। मैं fintech startup में product manager हूँ।" },
        ],
      },
    ],

    summary: [
      "Say each pattern 3 times minimum for muscle memory",
      "Cover all subjects, tenses, and patterns in your daily practice",
      "Record yourself — review and improve weekly",
      "Self-introduction drill: Name + City + Job + Passion + Current situation",
      "Speaking fluency = clarity + natural pace, not maximum speed",
    ],
  },

  // ── d4-t5-s3: Final Test — Be Verb Mastery ──
  "d4-t5-s3": {
    whyLearnThis: `Today's final test covers EVERYTHING about Be Verb. This is your chance to prove mastery of the most important verb in English!\n\nTest areas:\n✓ Am / Is / Are / Was / Were forms\n✓ Be Verb with nouns, adjectives, and prepositions\n✓ Questions and negatives\n✓ Continuous and passive voice\n✓ Common mistakes\n✓ Real-world applications`,

    conceptExplanation: `COMPREHENSIVE BE VERB REVIEW:\n\n📌 COMPLETE FORM CHART:\nPresent: I am | You are | He/She/It is | We/They are\nPast: I/He/She/It was | You/We/They were\nFuture: Subject + will be\nInfinitive: to be | Gerund: being | Past participle: been\n\n📌 FOUR MAIN USES:\n1. + Noun: "She is a doctor."\n2. + Adjective: "He is confident."\n3. + Preposition: "They are at the office."\n4. + -ing (helping verb): "She is working."\n5. + V3 (passive): "The report was submitted."\n\n📌 ALL NEGATIVE FORMS:\nI'm not | You're not / You aren't | He's not / He isn't\nShe's not / She isn't | We're not / We aren't | They're not / They aren't\nWasn't / Weren't | Won't be\n\n📌 ALL QUESTION FORMS:\nAm I? | Are you? | Is he/she/it? | Are we/they?\nWas I/he/she/it? | Were you/we/they?\nWill you/they be?\n\n📌 QUICK MISTAKE CHECK:\n❌ He are → ✅ He is | ❌ They was → ✅ They were\n❌ She not is → ✅ She is not | ❌ Am I ready? Am. → ✅ Yes, I am.\n❌ I am knowing → ✅ I know | ❌ She is boring → ✅ She is bored (if feeling bored)`,

    hindiExplanation: `Final Test के लिए पूरा recap:\n\nBe Verb chart:\nPresent: am/is/are | Past: was/were | Future: will be\n\nWith nouns: "I am a teacher."\nWith adjectives: "She is smart."\nWith location: "He is at work."\nAs helping verb: "They are working."\nPassive: "The report was submitted."\n\nNegative: not के बाद Be Verb\nQuestion: Be Verb subject से पहले`,

    rules: [
      {
        rule: "Test strategy: eliminate wrong Be Verb forms first",
        explanation: "In MCQ tests, first eliminate options with wrong Be Verb form (wrong subject-verb agreement), then check for correct tense, then check for correct pattern.",
        example: "Q: 'They ___ at the meeting yesterday.' Options: is, are, was, were. → Eliminate 'is' (singular) and 'are' (present) → Correct: 'were' (plural, past).",
      },
    ],

    commonMistakes: [
      { wrong: "All previous mistakes repeated in test", correct: "Review and apply all corrections", explanation: "Focus on: subject-verb agreement, correct tense, not placement, state verb rules." },
    ],

    sentencePatterns: [
      {
        pattern: "Comprehensive Be Verb test sentences",
        hindiPattern: "Test preparation sentences",
        examples: [
          { english: "The new system was installed last night and is now fully operational.", hindi: "नया system कल रात install हुआ और अब fully operational है।" },
          { english: "Were you at the product launch event? I didn't see you there.", hindi: "क्या आप product launch event में थे? मैंने आपको वहाँ नहीं देखा।" },
          { english: "She will be the perfect candidate for this role — she is experienced, confident, and dedicated.", hindi: "वह इस role के लिए perfect candidate होगी — वह experienced, confident, और dedicated है।" },
        ],
      },
    ],

    summary: [
      "Be Verb = most important verb in English",
      "Forms: am, is, are, was, were, will be, been, being",
      "Uses: with nouns, adjectives, prepositions, helping verb, passive",
      "Questions = invert | Negatives = add not after",
      "You have mastered Be Verb — use it confidently every day!",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 5 — DEMONSTRATIVE PRONOUNS (THIS / THAT / THESE / THOSE)
  // ══════════════════════════════════════════════════════════

  // ── d5-t1-s2: This vs That (Singular, Near vs Far) ──
  "d5-t1-s2": {
    whyLearnThis: `"This phone is amazing." "That building over there is beautiful." — THIS and THAT are used CONSTANTLY in English to point to things!\n\nYou use THIS/THAT when:\n✓ Showing things in a meeting: "This slide shows our Q3 results."\n✓ Referring to something just said: "That's exactly what I meant."\n✓ Shopping: "I'd like this one, please."\n✓ Introductions: "This is my colleague Priya."\n✓ Phone calls: "Is that Mr. Sharma?"\n\nTHIS vs THAT is about DISTANCE — physical or conceptual closeness.`,

    conceptExplanation: `THIS vs THAT — Near and Far:\n\n📌 THIS (यह — near me, singular):\n→ Use for things/people NEAR YOU (physically or conceptually)\n→ Refers to the current moment, current topic\n\nExamples:\n• "This pen is mine." (यह pen मेरी है — यह pen मेरे पास है)\n• "This is my laptop." (यह मेरा laptop है)\n• "This is exactly what I needed." (यही मुझे चाहिए था)\n• "This meeting is very productive." (यह meeting बहुत productive है)\n• "Read this carefully." (इसे ध्यान से पढ़ो)\n\nPhone call (classic use):\n• "Hello, this is Rahul speaking." (यह Rahul बोल रहा हूँ)\n\nIntroducing people:\n• "This is my team lead, Ms. Sharma." (यह मेरी team lead, Ms. Sharma हैं)\n\n📌 THAT (वह — far from me, singular):\n→ Use for things/people at a DISTANCE\n→ Refers to something previously mentioned\n→ Used to refer to something past or remote\n\nExamples:\n• "That building is 20 floors tall." (वह building 20 floors ऊंची है — दूर है)\n• "What is that?" (वह क्या है?)\n• "That was a great presentation!" (वह एक बेहतरीन presentation था)\n• "I thought that was a good idea." (मुझे लगा कि वह एक अच्छा idea था)\n• "Can you see that?" (क्या तुम वह देख सकते हो?)\n\nReferring back to something said:\n• "That's exactly right." (बिल्कुल सही)\n• "That's what I was saying." (यही तो मैं कह रहा था)\n• "That's a great point!" (यह बहुत अच्छा point है!)`,

    hindiExplanation: `THIS vs THAT — distance की बात\n\nTHIS = यह (पास में)\n• "This is my book." (यह मेरी किताब है — मेरे पास है)\n• "Read this." (यह पढ़ो)\n• "This is correct." (यह सही है)\n\nTHAT = वह (दूर में)\n• "That is his car." (वह उसकी car है — दूर है)\n• "Look at that!" (वह देखो!)\n• "That was amazing!" (वह amazing था!)\n\nPhone call में:\n"Hello, this is Priya." (Hello, मैं Priya बोल रही हूँ)\n"Is that Mr. Kumar?" (क्या वह Mr. Kumar हैं?)\n\nTrick: THIS = close/near | THAT = distant/far`,

    rules: [
      {
        rule: "THIS = near you physically or in conversation; THAT = far or referred back",
        explanation: "Physical distance: 'This pen' = pen in your hand. 'That pen' = pen across the room. Conversational distance: 'That's a good point' = referring back to what was just said.",
        example: "'This report is on my desk right now.' (near) | 'That report you mentioned yesterday needs review.' (referred back to)",
        exception: "On a phone call, you say 'This is Priya' (introducing yourself = near) and 'Is that the manager?' (the person at the other end = far/distant).",
      },
    ],

    commonMistakes: [
      { wrong: "That is a good book — let me read it.", correct: "This is a good book — let me read it.", explanation: "If the book is in your hand, use 'this', not 'that'." },
      { wrong: "Hello, that is Ravi speaking.", correct: "Hello, this is Ravi speaking.", explanation: "When introducing yourself on the phone, always use 'this is'." },
    ],

    sentencePatterns: [
      {
        pattern: "THIS and THAT in professional settings",
        hindiPattern: "Professional settings में THIS/THAT",
        examples: [
          { english: "This is the updated version of the proposal — please review it.", hindi: "यह proposal का updated version है — कृपया इसे review करें।" },
          { english: "That was an excellent question — let me address it clearly.", hindi: "वह एक excellent question था — मैं इसे clearly address करता/करती हूँ।" },
          { english: "Hello, this is Ananya calling from the HR department.", hindi: "Hello, यह Ananya, HR department से call कर रही हूँ।" },
          { english: "Is that the report you were referring to in your email?", hindi: "क्या वह वही report है जिसका आपने अपने email में ज़िक्र किया था?" },
        ],
      },
    ],

    summary: [
      "THIS = near you (in hand, close, current topic)",
      "THAT = far from you (across room, referred back, past topic)",
      "Phone calls: 'This is [name] speaking' (introducing yourself)",
      "Phone calls: 'Is that [name]?' (asking about the other person)",
      "Conversational THAT: 'That's right!' 'That's a great point!' 'That was excellent!'",
    ],
  },

  // ── d5-t1-s3: These vs Those (Plural, Near vs Far) ──
  "d5-t1-s3": {
    whyLearnThis: `"These documents are ready." "Those clients over there need attention." THESE and THOSE are the plural versions of THIS and THAT — same logic, multiple items!\n\nYou need these when:\n✓ Referring to multiple things: "These results are impressive."\n✓ Comparing groups: "These are better than those."\n✓ Pointing to things far away: "Who are those people?"\n✓ Professional presentations: "These slides cover our strategy."`,

    conceptExplanation: `THESE vs THOSE — Plural Near and Far:\n\n📌 THESE (ये — many things, near me):\nPlural of THIS\n\nExamples:\n• "These books are mine." (ये किताबें मेरी हैं — मेरे पास हैं)\n• "Please sign these documents." (कृपया ये documents sign करें)\n• "These results are very promising." (ये results बहुत promising हैं)\n• "Are these seats taken?" (क्या ये seats ली हुई हैं?)\n• "These are the files you requested." (ये वो files हैं जो आपने माँगी थीं)\n\n📌 THOSE (वे — many things, far from me):\nPlural of THAT\n\nExamples:\n• "Those buildings are in Bandra." (वे buildings Bandra में हैं — दूर)\n• "Who are those people at the entrance?" (प्रवेश द्वार पर वे लोग कौन हैं?)\n• "Those were the best days of my career." (वे मेरे career के सबसे अच्छे दिन थे)\n• "I need those files from the archive." (मुझे archive से वे files चाहिए)\n\n📌 COMPARISON — THESE vs THOSE:\nWhen comparing two groups:\n"These results are better than those." (ये results उनसे बेहतर हैं)\n"These employees are more experienced than those."\n"I prefer these options over those."\n\n📌 SINGULAR VS PLURAL CHART:\nNear | Singular: THIS | Plural: THESE\nFar  | Singular: THAT | Plural: THOSE`,

    hindiExplanation: `THESE vs THOSE:\n\nTHESE = ये (पास में, बहुत सारी चीजें)\n"These are my files." (ये मेरी files हैं।)\n"Read these carefully." (इन्हें ध्यान से पढ़ो।)\n\nTHOSE = वे (दूर में, बहुत सारी चीजें)\n"Those are his books." (वे उसकी किताबें हैं।)\n"Look at those stars!" (उन तारों को देखो!)\n\nFull chart:\nPaas mein: THIS (1) / THESE (many)\nDoor mein: THAT (1) / THOSE (many)\n\nFormula:\nNear + Singular = THIS\nNear + Plural = THESE\nFar + Singular = THAT\nFar + Plural = THOSE`,

    rules: [
      {
        rule: "Match demonstrative to number: singular = this/that, plural = these/those",
        explanation: "The most common mistake is using 'this' for plural nouns. Always check if the noun is singular or plural, then choose the right demonstrative.",
        example: "✅ 'This document is ready.' (singular) | ✅ 'These documents are ready.' (plural)\n❌ 'These document is ready.' | ❌ 'This documents are ready.'",
      },
    ],

    commonMistakes: [
      { wrong: "These book is mine.", correct: "This book is mine. / These books are mine.", explanation: "If singular noun → This. If plural noun → These. Check the noun!" },
      { wrong: "Those peoples are late.", correct: "Those people are late.", explanation: "'People' is already plural — don't add 's'. Those people, not 'those peoples'." },
    ],

    sentencePatterns: [
      {
        pattern: "THESE and THOSE in meetings and presentations",
        hindiPattern: "Meeting और presentation में THESE/THOSE",
        examples: [
          { english: "These quarterly figures show a 23% improvement over last year.", hindi: "ये quarterly figures पिछले साल से 23% improvement दिखाते हैं।" },
          { english: "Those concerns raised in the last meeting have now been fully addressed.", hindi: "पिछली meeting में उठाई गई वे चिंताएं अब पूरी तरह address कर ली गई हैं।" },
          { english: "I need these reports on my desk by 9 AM — not those old versions.", hindi: "मुझे ये reports 9 बजे तक मेरी desk पर चाहिए — वे पुराने versions नहीं।" },
        ],
      },
    ],

    summary: [
      "THESE = plural of THIS (many things near you)",
      "THOSE = plural of THAT (many things far away or referred to)",
      "Chart: This(1 near) / These(many near) / That(1 far) / Those(many far)",
      "Match to noun: singular noun → this/that | plural noun → these/those",
      "Comparison: 'These are better than those.' 'I prefer these over those.'",
    ],
  },

  // ── d5-t1-s4: Demonstrative Adjectives vs Pronouns ──
  "d5-t1-s4": {
    whyLearnThis: `"This book is interesting." vs "This is interesting." — both use 'this', but in different ways!\n\nWhen THIS/THAT/THESE/THOSE come BEFORE a noun, they are ADJECTIVES.\nWhen they REPLACE a noun (stand alone), they are PRONOUNS.\n\nUnderstanding this difference will make your use of demonstratives 100% accurate!`,

    conceptExplanation: `DEMONSTRATIVE ADJECTIVES vs DEMONSTRATIVE PRONOUNS:\n\n📌 AS ADJECTIVES (modify nouns — come before nouns):\nThis + noun | That + noun | These + noun | Those + noun\n\n• "This book is excellent." (This = adjective modifying 'book')\n• "That building is beautiful." (That = adjective modifying 'building')\n• "These files are ready." (These = adjective modifying 'files')\n• "Those ideas were creative." (Those = adjective modifying 'ideas')\n\nMore examples:\n• "This email needs a response." (This = adjective)\n• "These candidates are qualified." (These = adjective)\n• "That project was challenging." (That = adjective)\n\n📌 AS PRONOUNS (replace nouns — stand alone):\nThis | That | These | Those (alone, without noun)\n\n• "This is excellent." (This = pronoun, replaces a noun completely)\n• "That is beautiful." (That = pronoun)\n• "These are ready." (These = pronoun)\n• "Those were creative." (Those = pronoun)\n\nMore examples:\n• "Can you send me this?" (pointing to something)\n• "This is Priya." (introducing someone — pronoun)\n• "Is that yours?" (pointing — pronoun)\n• "I'll take these." (shopping — pronoun)\n\n📌 HOW TO TELL THEM APART:\nAsk yourself: Does it stand alone (pronoun) or modify a noun (adjective)?\n• "This phone is new." → This + phone (noun) = ADJECTIVE\n• "This is new." → This alone = PRONOUN\n• "Are these seats free?" → These + seats = ADJECTIVE\n• "Are these free?" → These alone = PRONOUN`,

    hindiExplanation: `Demonstrative Adjective vs Pronoun:\n\nAdjective = noun से पहले आता है:\n"This book" | "That car" | "These files" | "Those results"\n(यह + noun = adjective)\n\nPronoun = noun की जगह खुद ही use होता है:\n"This is mine." | "That is yours." | "These are ready." | "Those are expensive."\n(अकेला आता है, noun के बिना)\n\nTest: क्या इसके बाद noun है? Yes → Adjective | No → Pronoun`,

    rules: [
      {
        rule: "Demonstrative adjectives are followed by nouns; demonstrative pronouns stand alone",
        explanation: "Simple test: if 'this/that/these/those' has a noun right after it = adjective. If it's alone or followed by a verb = pronoun.",
        example: "Adjective: 'This book', 'That car', 'These results' | Pronoun: 'This is good', 'Take that', 'Are these yours?'",
      },
    ],

    commonMistakes: [
      { wrong: "This are my keys.", correct: "These are my keys.", explanation: "If the noun (keys) is plural, use 'These' (plural demonstrative), not 'This' (singular)." },
    ],

    sentencePatterns: [
      {
        pattern: "Demonstrative adjective vs pronoun contrast",
        hindiPattern: "Adjective vs Pronoun contrast",
        examples: [
          { english: "This strategy has been approved. [Adjective] / This has been approved. [Pronoun]", hindi: "Adjective: यह strategy approve हुई। | Pronoun: यह approve हुई।" },
          { english: "These reports need your signature. [Adj] / These need your signature. [Pronoun]", hindi: "Adjective: इन reports पर आपके sign चाहिए। | Pronoun: इन पर sign चाहिए।" },
        ],
      },
    ],

    summary: [
      "Adjective: this/that/these/those + noun ('This report is ready.')",
      "Pronoun: this/that/these/those alone ('This is ready.')",
      "Test: noun after it? → Adjective | Alone? → Pronoun",
      "Agreement: singular noun → this/that | plural noun → these/those",
      "Both forms are used constantly in English — master both!",
    ],
  },

  // ── d5-t2-s1: Demonstratives as Subjects ──
  "d5-t2-s1": {
    whyLearnThis: `"This is a great opportunity." "That was my best decision." "These are the results you asked for." "Those were simpler times." — Using demonstratives as SUBJECTS of sentences is incredibly powerful in English!\n\nThis pattern lets you:\n✓ Comment on anything quickly: "This is perfect!"\n✓ Make immediate judgments: "That was brilliant!"\n✓ Present information: "These are the key findings."\n✓ Recall the past: "Those were difficult times."`,

    conceptExplanation: `DEMONSTRATIVES AS SUBJECTS:\n\nFormula: This/That/These/Those + Be Verb + Complement\n\nNote: THIS/THAT (singular) → singular Be Verb (is/was/will be)\nTHESE/THOSE (plural) → plural Be Verb (are/were/will be)\n\n📌 THIS IS / THAT IS (Singular):\n• "This is the right approach."\n• "This is exactly what we needed."\n• "That is a brilliant idea."\n• "That was an excellent presentation."\n• "This is going to change everything."\n\n📌 THESE ARE / THOSE ARE (Plural):\n• "These are the final results."\n• "These are the candidates we shortlisted."\n• "Those are the documents you need."\n• "Those were the happiest days of my career."\n\n📌 NEGATIVE FORMS:\n• "This is not what I expected."\n• "That is not the right approach."\n• "These are not final — they need revision."\n• "Those were not approved by the client."\n\n📌 QUESTIONS:\n• "Is this the right file?" | "What is this?"\n• "Is that the manager?" | "Who is that?"\n• "Are these the correct figures?" | "What are these?"\n• "Are those the files from yesterday?" | "Where are those?"`,

    hindiExplanation: `Demonstratives as subjects — Subject की तरह use करना:\n\nThis is = यह है\n"This is correct." (यह सही है।)\n\nThat is = वह है\n"That is my car." (वह मेरी car है।)\n\nThese are = ये हैं\n"These are ready." (ये ready हैं।)\n\nThose are = वे हैं\n"Those are his files." (वे उसकी files हैं।)\n\nPast:\n"This was a mistake." (यह एक गलती थी।)\n"Those were good times." (वे अच्छे दिन थे।)\n\nNegative:\n"This is not correct." (यह सही नहीं है।)\n"These are not ready." (ये ready नहीं हैं।)`,

    rules: [
      {
        rule: "THIS/THAT takes singular Be Verb; THESE/THOSE takes plural Be Verb",
        explanation: "THIS and THAT refer to one thing = singular. THESE and THOSE refer to multiple things = plural. Always match the Be Verb accordingly.",
        example: "✅ This is good. | ✅ These are good. | ✅ That was correct. | ✅ Those were correct.\n❌ This are good. | ❌ These is good. | ❌ That were correct. | ❌ Those was correct.",
      },
    ],

    commonMistakes: [
      { wrong: "These is my report.", correct: "This is my report. (singular) OR These are my reports. (plural)", explanation: "These = plural, so it needs 'are'. If one report, use 'This is my report.'" },
      { wrong: "Those is very helpful.", correct: "Those are very helpful.", explanation: "'Those' is plural → needs 'are', not 'is'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional demonstrative sentences",
        hindiPattern: "Professional sentences with demonstratives",
        examples: [
          { english: "This is the final draft — please review and approve.", hindi: "यह final draft है — कृपया review और approve करें।" },
          { english: "These are the three options we shortlisted for your consideration.", hindi: "ये तीन options हैं जो हमने आपके consideration के लिए shortlist किए हैं।" },
          { english: "That was an outstanding performance — congratulations to the entire team!", hindi: "वह एक outstanding performance था — पूरी team को congratulations!" },
          { english: "Are those the files from yesterday's audit?", hindi: "क्या वे कल के audit की files हैं?" },
        ],
      },
    ],

    summary: [
      "Subject pattern: This/That/These/Those + Be Verb + complement",
      "THIS/THAT (singular) → is/was | THESE/THOSE (plural) → are/were",
      "Negatives: 'This is not...' / 'These are not...'",
      "Questions: 'Is this...?' / 'Are these...?' / 'What is that?'",
      "Works in all tenses: is/was/will be for singular, are/were for plural",
    ],
  },

  // ── d5-t2-s2: Demonstratives as Objects ──
  "d5-t2-s2": {
    whyLearnThis: `"I want this." "Take that." "Please bring these." "Leave those there." — Demonstratives as OBJECTS are used when you want something done with something.\n\nThis is essential for:\n✓ Shopping: "I'll take this one."\n✓ Instructions: "Please file these."\n✓ Clear directions: "Remove those from the list."\n✓ Quick professional communication: "Review this, please."`,

    conceptExplanation: `DEMONSTRATIVES AS OBJECTS:\n\nWhen this/that/these/those comes AFTER the verb (not before), it functions as an OBJECT.\n\nFormula: Subject + Verb + This/That/These/Those\n\n📌 WITH ACTION VERBS:\n• "I want this." (I = subject | want = verb | this = object)\n• "Take that." (hidden subject 'you' | take = verb | that = object)\n• "Please sign these." (Please | sign = verb | these = object)\n• "Bring those files." (those = object — adjective here)\n\n📌 DIRECT OBJECT EXAMPLES:\n• "Did you read this?" (this = what was read)\n• "Can you send those?" (those = what to send)\n• "I need these immediately." (these = what is needed)\n• "Please check that." (that = what to check)\n\n📌 INDIRECT OBJECT EXAMPLES:\n• "Give me this." (me = indirect object, this = direct object)\n• "Show me that." (me = indirect, that = direct)\n• "Send them these." (them = indirect, these = direct)\n\n📌 WITH PREPOSITIONS:\n• "Look at this." | "Wait for that." | "Take care of these." | "Work on those."`,

    hindiExplanation: `Demonstratives as objects — जब this/that/these/those verb के बाद आए:\n\n"I want this." (मुझे यह चाहिए।)\n"Take that." (वह लो।)\n"Please bring these." (कृपया ये लाओ।)\n"Leave those there." (उन्हें वहाँ छोड़ दो।)\n\nShopping में:\n"I'll take this one." (मैं यह वाला लूँगा/लूँगी।)\n"How much is that?" (वह कितने का है?)\n"Are these on sale?" (क्या ये sale में हैं?)\n\nOffice में:\n"Review this." (इसे review करो।)\n"File those." (उन्हें file करो।)\n"Send me these." (मुझे ये भेजो।)`,

    rules: [
      {
        rule: "Demonstrative objects come after the verb — they are what receives the action",
        explanation: "As objects, this/that/these/those receive the action of the verb. They answer 'what?' or 'whom?' in the sentence.",
        example: "'Please review this.' (Review what? → this) | 'Send me those.' (Send what? → those) | 'I want that.' (Want what? → that)",
      },
    ],

    commonMistakes: [
      { wrong: "I want those one.", correct: "I want that one.", explanation: "If singular, use 'that one'. If plural, use 'those'. Can't combine 'those' + 'one' (singular)." },
    ],

    sentencePatterns: [
      {
        pattern: "Objects in professional and shopping contexts",
        hindiPattern: "Objects में demonstratives",
        examples: [
          { english: "Could you please review this and share your feedback by EOD?", hindi: "क्या आप EOD तक इसे review करके feedback share कर सकते हैं?" },
          { english: "I'll take these — can you wrap them separately?", hindi: "मैं ये लूँगा/लूँगी — क्या आप इन्हें अलग-अलग wrap कर सकते हैं?" },
          { english: "Archive those — we won't need those reports anymore.", hindi: "उन्हें archive करो — हमें वे reports अब नहीं चाहिए।" },
        ],
      },
    ],

    summary: [
      "Objects come after the verb: 'Read this.' 'Take that.' 'File these.' 'Leave those.'",
      "Answer the question 'what?' or 'whom?' in the sentence",
      "Shopping: 'I'll take this one.' 'How much is that?'",
      "Office: 'Review this.' 'Send me those.' 'Please file these.'",
      "Match singular/plural: this/that for one, these/those for many",
    ],
  },

  // ── d5-t2-s3: Demonstratives with Be Verb ──
  "d5-t2-s3": {
    whyLearnThis: `Combining demonstratives with Be Verb creates some of the MOST USED sentences in English:\n\n"This is good!" "That was perfect." "These are ready." "Those were the best."\n\nThese combinations appear in:\n✓ Quick opinions: "This is exactly right!"\n✓ Evaluations: "That was not acceptable."\n✓ Status updates: "These are complete. Those are pending."\n✓ Memory/storytelling: "Those were the days!"`,

    conceptExplanation: `DEMONSTRATIVES + BE VERB — ALL COMBINATIONS:\n\n📌 THIS + BE VERB (near, singular):\nPresent: "This is..." | Past: "This was..." | Future: "This will be..."\n• "This is the best solution I've seen."\n• "This was an unexpected result."\n• "This will be our biggest project this year."\n\n📌 THAT + BE VERB (far/referred, singular):\nPresent: "That is..." | Past: "That was..." | Future: "That will be..."\n• "That is not acceptable under any circumstances."\n• "That was the most important decision we made."\n• "That will be a major step forward for the company."\n\n📌 THESE + BE VERB (near, plural):\nPresent: "These are..." | Past: "These were..." | Future: "These will be..."\n• "These are all the materials you will need."\n• "These were the candidates shortlisted by HR."\n• "These will be the key deliverables for Phase 1."\n\n📌 THOSE + BE VERB (far/referred, plural):\nPresent: "Those are..." | Past: "Those were..." | Future: "Those will be..."\n• "Those are the documents from last quarter."\n• "Those were the happiest years of the company."\n• "Those will be the biggest challenges we face."`,

    hindiExplanation: `Demonstratives + Be Verb = सबसे common English sentences\n\nPresent:\n"This is..." = यह है | "That is..." = वह है\n"These are..." = ये हैं | "Those are..." = वे हैं\n\nPast:\n"This was..." = यह था | "That was..." = वह था\n"These were..." = ये थे | "Those were..." = वे थे\n\nFuture:\n"This will be..." = यह होगा\n"These will be..." = ये होंगे\n\nNegative:\n"This is not..." = यह नहीं है\n"Those were not..." = वे नहीं थे`,

    rules: [
      {
        rule: "Agreement: This/That + is/was | These/Those + are/were",
        explanation: "This and That are singular → use is (present) / was (past). These and Those are plural → use are (present) / were (past). This rule NEVER changes.",
        example: "✅ 'This is good.' ✅ 'That was perfect.' ✅ 'These are done.' ✅ 'Those were amazing.'\n❌ 'This are good.' ❌ 'These is done.' ❌ 'That were perfect.' ❌ 'Those was amazing.'",
      },
    ],

    commonMistakes: [
      { wrong: "Those was an excellent result.", correct: "Those were excellent results.", explanation: "'Those' is plural → 'were', not 'was'. Also check: 'that was' (singular) or 'those were' (plural)." },
    ],

    sentencePatterns: [
      {
        pattern: "Quick evaluations and status updates",
        hindiPattern: "Quick evaluations",
        examples: [
          { english: "This is exactly what we were looking for — well done!", hindi: "यह बिल्कुल वही है जो हम ढूंढ रहे थे — बहुत बढ़िया!" },
          { english: "These are the updated figures — much better than what we had before.", hindi: "ये updated figures हैं — पहले से काफी बेहतर।" },
          { english: "Those were the old guidelines — we have new ones now.", hindi: "वे पुरानी guidelines थीं — अब हमारे पास नई हैं।" },
          { english: "That will be a great opportunity for the team to showcase their work.", hindi: "वह team के लिए अपना काम दिखाने का एक बढ़िया मौका होगा।" },
        ],
      },
    ],

    summary: [
      "This/That + is/was/will be (singular Be Verb)",
      "These/Those + are/were/will be (plural Be Verb)",
      "Negative: 'This is not.' 'These are not.' 'Those were not.'",
      "Question: 'Is this?' 'Are these?' 'Was that?' 'Were those?'",
      "Quick opinions: 'This is great!' 'That was wrong.' 'These are ready.'",
    ],
  },

  // ── d5-t2-s4: Questions with Demonstratives ──
  "d5-t2-s4": {
    whyLearnThis: `"What is this?" "Is that yours?" "Are these available?" — Questions with demonstratives are some of the most natural, everyday English questions!\n\nYou ask these questions constantly:\n✓ At work: "Is this the latest version?" "Are these the correct figures?"\n✓ Shopping: "How much is this?" "Are those on discount?"\n✓ Daily life: "What is that sound?" "Whose are these?"\n✓ Clarifying: "Is that what you meant?" "Are these the changes you requested?"`,

    conceptExplanation: `QUESTIONS WITH DEMONSTRATIVES:\n\n📌 YES/NO QUESTIONS:\nIs/Are + This/That/These/Those + complement?\n\n• "Is this correct?" (क्या यह सही है?)\n• "Is that your car?" (क्या वह आपकी car है?)\n• "Are these ready?" (क्या ये ready हैं?)\n• "Are those available?" (क्या वे available हैं?)\n• "Was this approved?" (क्या यह approved था?)\n• "Were those sent?" (क्या वे भेजे गए थे?)\n• "Will this be ready tomorrow?" (क्या यह कल ready होगा?)\n\n📌 WH-QUESTIONS:\nWhat/Who/How much/Whose + is/are + this/that/these/those?\n\n• "What is this?" (यह क्या है?)\n• "What is that?" (वह क्या है?)\n• "What are these?" (ये क्या हैं?)\n• "What are those?" (वे क्या हैं?)\n• "Who is that?" (वह कौन है?)\n• "Whose is this?" (यह किसका है?)\n• "How much is this?" (यह कितने का है?)\n• "How many are these?" (ये कितने हैं?)\n• "Which is this?" (यह कौन सा है?)\n• "Why is this taking so long?" (यह इतना समय क्यों ले रहा है?)\n\n📌 SHORT ANSWERS:\nQ: "Is this ready?" → A: "Yes, it is." / "No, it isn't."\nQ: "Are these done?" → A: "Yes, they are." / "No, they aren't."\nQ: "What is this?" → A: "It's the quarterly report." / "This is the updated version."`,

    hindiExplanation: `Demonstratives के साथ questions:\n\nYes/No Questions:\n"Is this right?" (क्या यह सही है?)\n"Are these ready?" (क्या ये ready हैं?)\n\nWh-Questions:\n"What is this?" (यह क्या है?)\n"Who is that?" (वह कौन है?)\n"How much is this?" (यह कितने का है?)\n"Whose are these?" (ये किसके हैं?)\n\nShort answers:\n"Is this correct?" → "Yes, it is." / "No, it isn't."\n"Are those done?" → "Yes, they are." / "No, they aren't."`,

    rules: [
      {
        rule: "Wh-questions with demonstratives: Wh-word + Be Verb + demonstrative (if pronoun)",
        explanation: "When a demonstrative is the subject, the wh-word comes first: 'What is this?' When it's used as adjective: 'What is this report about?' or 'How much is this phone?'",
        example: "'What is this?' | 'Who is that?' | 'How much are these?' | 'Whose is that?' | 'Why are those missing?'",
      },
    ],

    commonMistakes: [
      { wrong: "What is these?", correct: "What are these?", explanation: "'These' is plural → 'are', not 'is'." },
      { wrong: "How much are this?", correct: "How much is this?", explanation: "'This' is singular → 'is', not 'are'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional clarification questions",
        hindiPattern: "Professional questions with demonstratives",
        examples: [
          { english: "Is this the final version or are there more changes coming?", hindi: "क्या यह final version है या और changes आने वाले हैं?" },
          { english: "What are these figures based on — last month's data or this quarter?", hindi: "ये figures किस पर based हैं — पिछले महीने के data पर या इस quarter पर?" },
          { english: "Are those the deliverables you promised by end of week?", hindi: "क्या वे वो deliverables हैं जिनका आपने हफ्ते के अंत तक वादा किया था?" },
        ],
      },
    ],

    summary: [
      "Yes/No: Is/Are + this/that/these/those + rest?",
      "This/That → Is | These/Those → Are",
      "Wh-questions: What/Who/How much/Whose + is/are + demonstrative",
      "Short answers: 'Yes, it is.' / 'No, they aren't.'",
      "Practice 10 questions daily: shopping, office, and daily life",
    ],
  },

  // ── d5-t3-s1: Pointing to Things Around You ──
  "d5-t3-s1": {
    whyLearnThis: `The most natural use of demonstratives is POINTING to real things around you and describing them. This is how children first learn language, and it's how you should practice too!\n\nBeing able to describe your surroundings in English makes you:\n✓ More comfortable speaking English in real-time\n✓ Able to give directions and describe your environment\n✓ Natural in conversations about your home, office, city`,

    conceptExplanation: `POINTING AND DESCRIBING YOUR SURROUNDINGS:\n\n🏠 AT HOME:\n• "This is my room. This is my desk. This is where I study every day."\n• "That is the kitchen — my mother cooks amazing food there."\n• "These are my books — I've read all of them."\n• "Those are my father's files — please don't touch them."\n\n💼 AT THE OFFICE:\n• "This is my workstation. This is where I spend 8 hours a day."\n• "That is the conference room — we have meetings there."\n• "These are the project files — currently in progress."\n• "Those are the old archives — we don't need them now."\n\n🌆 OUTSIDE / IN THE CITY:\n• "This road leads to the railway station."\n• "That building over there is our head office."\n• "These shops are open till 10 PM."\n• "Those mountains in the distance are part of the Western Ghats."\n\n📱 SHOWING THINGS ON SCREEN/PHONE:\n• "This is the dashboard showing our sales numbers."\n• "That was the notification I received this morning."\n• "These are the photos from yesterday's event."\n• "Those are the reviews our customers left online."`,

    hindiExplanation: `आसपास की चीज़ें describe करना:\n\nGhar mein:\n"This is my room." (यह मेरा room है।)\n"That is the kitchen." (वह kitchen है।)\n"These are my books." (ये मेरी किताबें हैं।)\n"Those are his things." (वे उसकी चीजें हैं।)\n\nPractice method:\nहर रोज़ 10 चीज़ें अपने आसपास point करके English में describe करो!\nसुबह: "This is my coffee. That is the newspaper."\nOffice: "This is my laptop. Those are the project files."\nशाम: "These are my shoes. That is the door."`,

    rules: [
      {
        rule: "This/these for things within arm's reach; that/those for things at a distance",
        explanation: "In real conversation, physical proximity determines the choice. Hold something up = 'this'. Point to something far = 'that'. Things nearby = 'these'. Things far away or elsewhere = 'those'.",
        example: "(Holding a pen) 'This pen is mine.' | (Pointing across room) 'That pen is yours.' | (Pointing to your desk) 'These papers are mine.' | (Pointing to another desk) 'Those papers are his.'",
      },
    ],

    commonMistakes: [
      { wrong: "This building there is beautiful.", correct: "That building over there is beautiful.", explanation: "If the building is far away, use 'that', not 'this'. 'This' is for things near you." },
    ],

    sentencePatterns: [
      {
        pattern: "Describing your immediate environment",
        hindiPattern: "आसपास का description",
        examples: [
          { english: "This is my home office — this is where I work remotely every day.", hindi: "यह मेरा home office है — यहीं मैं हर दिन remotely काम करता/करती हूँ।" },
          { english: "That tall building in the background is our company's headquarters.", hindi: "पीछे वह ऊँची building हमारी company का headquarters है।" },
          { english: "These files on my desk are the ones I'm currently working on.", hindi: "मेरी desk पर ये files वो हैं जिन पर मैं अभी काम कर रहा/रही हूँ।" },
        ],
      },
    ],

    summary: [
      "Point and describe: use THIS/THESE for nearby, THAT/THOSE for far",
      "Practice exercise: describe 10 things around you in English every day",
      "Home: 'This is my room. These are my books. That is the kitchen.'",
      "Office: 'This is my workstation. Those are the archive files.'",
      "Building confidence: start with physical things before abstract concepts",
    ],
  },

  // ── d5-t3-s2: Shopping and Buying ──
  "d5-t3-s2": {
    whyLearnThis: `Shopping in English is one of the most IMMEDIATE and PRACTICAL uses of demonstratives. You POINT to things and describe them!\n\n"How much is this?" "I'd like to try that one." "Can I see those in a different color?" — These are real sentences used in shops every day.\n\nMastering shopping English with demonstratives gives you the confidence to:\n✓ Shop anywhere in English-speaking environments\n✓ Ask for what you want precisely\n✓ Understand what salespeople are saying\n✓ Negotiate and compare options`,

    conceptExplanation: `SHOPPING ENGLISH WITH DEMONSTRATIVES:\n\n🛍️ ASKING PRICE:\n• "How much is this?" (यह कितने का है?)\n• "How much is that bag?" (वह bag कितने की है?)\n• "How much are these shoes?" (ये shoes कितने के हैं?)\n• "How much are those in the window?" (window में वे कितने के हैं?)\n\n🔍 ASKING TO SEE:\n• "Can I see this, please?" (क्या मैं यह देख सकता/सकती हूँ?)\n• "Could you show me that?" (क्या आप मुझे वह दिखा सकते हैं?)\n• "May I try this on?" (क्या मैं यह try कर सकता/सकती हूँ?)\n• "Do you have these in blue?" (क्या आपके पास ये blue color में हैं?)\n\n💬 EXPRESSING PREFERENCES:\n• "I like this one." (मुझे यह पसंद है।)\n• "I prefer that one." (मुझे वह ज़्यादा पसंद है।)\n• "These look better than those." (ये उनसे बेहतर लगते हैं।)\n• "That one in the back is beautiful." (पीछे वाला सुंदर है।)\n\n🛒 DECIDING:\n• "I'll take this one." (मैं यह वाला लूँगा/लूँगी।)\n• "Can I have these two?" (क्या मैं ये दोनों ले सकता/सकती हूँ?)\n• "I'll pass on those, thank you." (धन्यवाद, वे नहीं चाहिए।)\n• "This is exactly what I was looking for!" (यह बिल्कुल वही है जो मैं ढूंढ रहा/रही था/थी!)`,

    hindiExplanation: `Shopping में demonstratives:\n\nPrice पूछना:\n"How much is this?" (यह कितने का है?)\n"How much are these?" (ये कितने के हैं?)\n\nDekhna:\n"Can I see that?" (क्या मैं वह देख सकता/सकती हूँ?)\n"Show me these please." (कृपया ये दिखाइए।)\n\nPasand karna:\n"I like this one." (मुझे यह पसंद है।)\n"I'll take those two." (मैं वो दोनों लूँगा।)\n\nComparison:\n"These are better than those." (ये उनसे बेहतर हैं।)\n"That one is more expensive." (वह ज़्यादा महँगा है।)`,

    rules: [
      {
        rule: "In shopping, 'this/these' = items near you or in your hands; 'that/those' = items in display, far shelf, or window",
        explanation: "When you're examining something = 'this/these'. When pointing to something on display or shelf = 'that/those'. When the shopkeeper hands it to you, it becomes 'this'.",
        example: "(Pointing at shelf) 'Can I see that red bag?' → (Shopkeeper hands it) 'Oh, this is beautiful! How much is this?'",
      },
    ],

    commonMistakes: [
      { wrong: "How much those cost?", correct: "How much do those cost? / How much are those?", explanation: "Questions need proper structure: 'How much + do/are + subject + verb?'" },
    ],

    sentencePatterns: [
      {
        pattern: "Complete shopping dialogue",
        hindiPattern: "Shopping conversation",
        examples: [
          { english: "Excuse me, how much is this jacket? Do you have it in a smaller size?", hindi: "Excuse me, यह jacket कितने की है? क्या आपके पास इसे smaller size में है?" },
          { english: "I like these earrings, but can I see those in the display window as well?", hindi: "मुझे ये earrings पसंद हैं, लेकिन क्या मैं display window में वे भी देख सकती हूँ?" },
          { english: "I'll take these two — can you please wrap them separately?", hindi: "मैं ये दोनों लूँगी — क्या आप इन्हें अलग-अलग wrap कर सकते हैं?" },
        ],
      },
    ],

    summary: [
      "Asking price: 'How much is this?' / 'How much are these?'",
      "Requesting to see: 'Can I see that?' / 'Show me those, please.'",
      "Expressing preference: 'I like this one.' / 'I prefer those.'",
      "Comparison: 'These are better than those.' 'That one is cheaper.'",
      "Deciding: 'I'll take this.' / 'Can I have those two?'",
    ],
  },

  // ── d5-t3-s3: Office and Professional Use ──
  "d5-t3-s3": {
    whyLearnThis: `"This report is excellent." "That strategy didn't work." "These figures need verification." "Those concerns were valid." — Professional English is FULL of demonstratives!\n\nIn the workplace, demonstratives help you:\n✓ Refer to documents clearly: "This report, not that one."\n✓ Give feedback: "This approach is better." "That was not acceptable."\n✓ Discuss data: "These numbers look off." "Those targets are unrealistic."\n✓ Refer to past/future: "Those decisions led to this situation."`,

    conceptExplanation: `DEMONSTRATIVES IN PROFESSIONAL SETTINGS:\n\n📊 IN MEETINGS:\n• "This agenda has 5 points — let's cover them all."\n• "That decision was made in last month's meeting."\n• "These action items need to be completed by Friday."\n• "Those concerns are valid — let's address them now."\n\n📧 IN EMAILS:\n• "This email is to inform you about the changes."\n• "As discussed, that proposal has been approved."\n• "These are the documents you requested."\n• "Please note that those links have been updated."\n\n📈 IN PRESENTATIONS:\n• "This slide shows our Q3 performance."\n• "That data point is particularly significant."\n• "These graphs illustrate the growth trend."\n• "Those figures from 2022 are no longer relevant."\n\n🗣️ IN CONVERSATIONS:\n• "This is what I was suggesting earlier."\n• "That's exactly the problem we're facing."\n• "These are the resources we have available."\n• "Those were the original requirements — they've changed now."`,

    hindiExplanation: `Office और professional settings में demonstratives:\n\nMeeting में:\n"This agenda covers..." (यह agenda...) | "That decision was..." (वह decision...)\n"These action items need..." (ये action items...)\n\nEmail में:\n"This is to inform you..." (यह आपको inform करने के लिए है...)\n"Please review these documents..." (इन documents को review करें...)\n\nPresentation में:\n"This slide shows..." (यह slide दिखाती है...)\n"These graphs illustrate..." (ये graphs दर्शाते हैं...)`,

    rules: [
      {
        rule: "In professional writing, 'this' refers to current document/topic; 'that' refers to previous email/decision",
        explanation: "In professional emails, 'this email is to inform you' (current document). 'As per that email' (previous email). 'These documents' (documents you're sending now). 'Those documents' (documents mentioned previously).",
        example: "'This email is in response to your inquiry.' | 'That policy was updated last month.' | 'Please sign these forms.' | 'Those requirements have changed.'",
      },
    ],

    commonMistakes: [
      { wrong: "These informations are correct.", correct: "This information is correct.", explanation: "'Information' is uncountable — no plural 's'. Use 'this information', not 'these informations'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional demonstrative usage",
        hindiPattern: "Professional usage",
        examples: [
          { english: "This proposal addresses all the concerns raised in that meeting last week.", hindi: "यह proposal पिछले हफ्ते उस meeting में उठाई गई सभी concerns को address करती है।" },
          { english: "These metrics clearly demonstrate the effectiveness of that campaign.", hindi: "ये metrics उस campaign की effectiveness को clearly demonstrate करते हैं।" },
          { english: "Those were our initial projections — this is where we actually stand today.", hindi: "वे हमारे initial projections थे — यह वह है जहाँ हम आज वास्तव में खड़े हैं।" },
        ],
      },
    ],

    summary: [
      "This/these: current document, slide, topic in discussion",
      "That/those: previous email, past decision, earlier data",
      "Meeting: 'This agenda...' 'Those action items...'",
      "Email: 'This email...' 'These documents...' 'Those changes...'",
      "Presentation: 'This slide...' 'These graphs...' 'That data point...'",
    ],
  },

  // ── d5-t4-s1: Household and Daily Objects ──
  "d5-t4-s1": {
    whyLearnThis: `To use demonstratives naturally, you need to know the English names for things you POINT TO every day. If you point but don't know the name, you can't complete the sentence!\n\n"This ___ is mine." — you need to know what to put in the blank!\n\n80 household and daily object names will let you describe your entire world in English.`,

    conceptExplanation: `80 HOUSEHOLD AND DAILY OBJECTS:\n\n🏠 BEDROOM:\nbed, pillow, blanket/quilt, mattress, wardrobe/cupboard, drawer, mirror, alarm clock, bedside table, curtain/drapes, lamp, fan, air conditioner, hanger\n\n🛁 BATHROOM:\ntoilet, basin/sink, tap/faucet, shower, towel, toothbrush, toothpaste, soap, shampoo, conditioner, razor, comb, hairdryer, mirror, bathtub\n\n🍳 KITCHEN:\nstove/gas burner, refrigerator/fridge, microwave, pressure cooker, pan, pot, frying pan, knife, cutting board, mixer/blender, bowl, plate, glass, mug, spoon, fork, spatula, ladle\n\n🛋️ LIVING ROOM:\nsofa/couch, coffee table, television, remote control, bookshelf, cushion, carpet/rug, photograph frame, vase, plant, curtain, window, door\n\n📋 OFFICE/STUDY:\ndesk, chair, laptop, computer, monitor, keyboard, mouse, printer, scanner, notebook, pen, pencil, eraser, ruler, stapler, file folder, sticky notes, calendar\n\n👕 CLOTHING:\nshirt, t-shirt, trousers/pants, jeans, shorts, dress, saree/sari, kurta, jacket, coat, blazer, shoes, sandals, socks, belt, watch, glasses/spectacles, wallet, bag/handbag\n\n🔧 TOOLS/MISC:\nscissors, tape, glue, hammer, screwdriver, needle, thread, umbrella, torch/flashlight, charger, earphones/headphones, power bank`,

    hindiExplanation: `घर में रोज़ देखी जाने वाली 80 चीज़ें English में:\n\nBedroom:\nBed = बिस्तर | Pillow = तकिया | Blanket = कंबल | Mirror = आईना\n\nBathroom:\nTap = नल | Towel = तौलिया | Comb = कंघी\n\nKitchen:\nStove = चूल्हा | Fridge = फ्रिज | Pressure cooker = कुकर\n\nLiving room:\nSofa = सोफा | Remote = रिमोट | Bookshelf = किताबों की अलमारी\n\nStudy/Office:\nLaptop = लैपटॉप | Keyboard = कीबोर्ड | Printer = प्रिंटर\n\nPractice: हर चीज़ को point करके कहो "This is a ___." / "That is a ___."`,

    rules: [
      {
        rule: "Learn objects with their demonstrative + Be Verb sentence",
        explanation: "Don't just memorize vocabulary in isolation. Always practice in a sentence: 'This is a keyboard.' 'That is a printer.' 'These are earphones.' 'Those are books.'",
        example: "'This is a pressure cooker.' | 'That is a refrigerator.' | 'These are charging cables.' | 'Those are my sister's books.'",
      },
    ],

    commonMistakes: [
      { wrong: "This is a furniture.", correct: "This is a piece of furniture. / This is a table.", explanation: "'Furniture' is uncountable. Say the specific item or 'a piece of furniture'." },
    ],

    sentencePatterns: [
      {
        pattern: "Describing household objects",
        hindiPattern: "घर की चीज़ें describe करना",
        examples: [
          { english: "This pressure cooker is new — my mother bought it last week.", hindi: "यह pressure cooker नया है — मेरी माँ ने इसे पिछले हफ्ते खरीदा।" },
          { english: "That bookshelf in the corner has all my engineering textbooks.", hindi: "कोने में वह bookshelf मेरी सभी engineering textbooks से भरी है।" },
          { english: "These earphones have amazing sound quality for their price.", hindi: "इन earphones की इस price पर amazing sound quality है।" },
        ],
      },
    ],

    summary: [
      "Learn 80 household objects: bedroom, bathroom, kitchen, living room, study",
      "Practice: point to objects and say 'This is a [name]' or 'That is a [name]'",
      "Clothing: shirt, t-shirt, jeans, jacket, socks, belt, wallet",
      "Uncountable: furniture, luggage, equipment (can't use 'a' directly)",
      "Daily practice: describe 10 objects around you every morning",
    ],
  },

  // ── d5-t4-s2: Office and Technology Words ──
  "d5-t4-s2": {
    whyLearnThis: `The modern workplace is full of technology. Knowing these words allows you to:\n✓ Discuss IT issues clearly: "This laptop needs a restart."\n✓ Give instructions: "Please connect to that projector."\n✓ Navigate conversations: "These spreadsheets have the data you need."\n✓ Sound professional in tech environments`,

    conceptExplanation: `80 OFFICE AND TECHNOLOGY WORDS:\n\n💻 COMPUTERS:\nlaptop, desktop, computer, tablet, monitor, screen, keyboard, mouse, trackpad, USB port, HDMI port, charger, power adapter, hard drive, SSD, RAM, processor, fan, webcam, microphone, speakers, headset\n\n🖨️ OFFICE EQUIPMENT:\nprinter, scanner, photocopier/Xerox machine, projector, whiteboard, screen, conference phone, landline, extension cord, power strip, shredder, laminator\n\n📱 MOBILE & COMMUNICATION:\nsmartphone, tablet, smartwatch, earbuds, wireless earphones, Bluetooth speaker, power bank, charger, SIM card, memory card\n\n💾 SOFTWARE & DIGITAL:\nbrowser, app/application, software, spreadsheet, document, presentation, email, folder, file, desktop, taskbar, password, login, username, download, upload, attachment, screenshot, video call, meeting link\n\n🌐 INTERNET & NETWORK:\nWi-Fi, router, network, internet connection, VPN, server, cloud storage, Ethernet cable, hotspot\n\n🔌 CABLES & ACCESSORIES:\nUSB cable, charging cable, HDMI cable, audio cable, extension cord, surge protector, cable organizer, mouse pad, laptop stand, keyboard cover, screen protector, phone case`,

    hindiExplanation: `Office और technology के 80 words:\n\nComputer:\nLaptop = लैपटॉप | Monitor = मॉनिटर | Keyboard = कीबोर्ड | Mouse = माउस\n\nEquipment:\nProjector = प्रोजेक्टर | Printer = प्रिंटर | Scanner = स्कैनर\n\nMobile:\nSmartphone = स्मार्टफोन | Earbuds = ईयरबड्स | Power bank = पावर बैंक\n\nSoftware:\nSpreadsheet = स्प्रेडशीट | Folder = फोल्डर | Password = पासवर्ड\n\nPractice sentences:\n"This laptop needs to be charged."\n"That projector isn't working."\n"These files are in the cloud."\n"Those emails need to be replied."`,

    rules: [
      {
        rule: "Tech vocabulary is increasingly standard in Indian English — use it confidently",
        explanation: "Modern tech terms are the same in English and Hindi (laptop, mobile, router, Wi-Fi). However, some Indian usages differ: 'Xerox' = photocopy; 'revert' = reply (Indian usage); 'prepone' = move to earlier time (not standard internationally).",
        example: "Indian: 'Please Xerox this.' | International: 'Please photocopy this.'\nIndian: 'Please revert.' | International: 'Please reply.' / 'Please respond.'",
      },
    ],

    commonMistakes: [
      { wrong: "Please revert back to this email.", correct: "Please reply to this email. / Please respond to this email.", explanation: "'Revert' in standard English means 'to return to a previous state'. In Indian professional English it's used to mean 'reply', but internationally it can confuse people." },
    ],

    sentencePatterns: [
      {
        pattern: "Technology demonstrative sentences",
        hindiPattern: "Technology sentences with demonstratives",
        examples: [
          { english: "This laptop battery drains very quickly — I need a replacement.", hindi: "इस laptop की battery बहुत जल्दी खत्म हो जाती है — मुझे replacement चाहिए।" },
          { english: "Could you please connect to that projector? It's already set up.", hindi: "क्या आप उस projector से connect कर सकते हैं? वह पहले से set up है।" },
          { english: "These spreadsheets contain all the financial data for this year.", hindi: "इन spreadsheets में इस साल का सारा financial data है।" },
        ],
      },
    ],

    summary: [
      "Computer: laptop, monitor, keyboard, mouse, webcam, USB port",
      "Office equipment: printer, projector, whiteboard, conference phone",
      "Mobile: smartphone, earbuds, power bank, charger",
      "Software: spreadsheet, folder, password, browser, cloud, attachment",
      "Network: Wi-Fi, router, VPN, internet connection, server",
    ],
  },

  // ── d5-t4-s3: Common Adjectives with Demonstratives ──
  "d5-t4-s3": {
    whyLearnThis: `"This beautiful painting." "That expensive phone." "These comfortable chairs." — When you combine demonstratives with adjectives, you create rich, descriptive English sentences!\n\nThis skill allows you to:\n✓ Give precise descriptions: "This new laptop is much faster."\n✓ Express opinions naturally: "That was a brilliant idea!"\n✓ Compare things: "These modern methods are more effective than those traditional ones."`,

    conceptExplanation: `ADJECTIVES WITH DEMONSTRATIVES:\n\nStructure 1: Demonstrative + Adjective + Noun\n"This beautiful house" | "That expensive car" | "These comfortable chairs" | "Those old files"\n\nStructure 2: Demonstrative + Be Verb + Adjective\n"This is beautiful." | "That is expensive." | "These are comfortable." | "Those are old."\n\nCOMMON ADJECTIVE CATEGORIES:\n\n🌟 SIZE:\nThis big table | That small cup | These large files | Those tiny screws\n\n💰 VALUE:\nThis expensive watch | That cheap option | These valuable insights | Those worthless suggestions\n\n⏰ AGE:\nThis new approach | That old method | These recent updates | Those outdated guidelines\n\n🎨 QUALITY:\nThis excellent report | That poor presentation | These outstanding results | Those mediocre outcomes\n\n📊 STATUS:\nThis urgent matter | That pending issue | These completed tasks | Those postponed meetings\n\n📍 DISTANCE:\nThis nearby café | That distant goal | These local options | Those international markets\n\nCOMBINED EXAMPLES:\n• "This new digital marketing strategy is delivering excellent results."\n• "That old approach was too slow for our current market."\n• "These recent figures are very encouraging for investors."\n• "Those outdated methods need to be replaced immediately."`,

    hindiExplanation: `Demonstratives + Adjectives = rich descriptions!\n\nFormula: This/That/These/Those + Adjective + Noun\n\n"This beautiful place" (यह सुंदर जगह)\n"That expensive car" (वह महँगी car)\n"These old books" (ये पुरानी किताबें)\n"Those modern buildings" (वे आधुनिक buildings)\n\nYa phir:\n"This is beautiful." (यह सुंदर है।)\n"That is expensive." (वह महँगा है।)\n\nPractice: अपने आसपास चीज़ें देखो और describe करो:\n"This old fan is very noisy."\n"That new restaurant looks expensive."\n"These comfortable chairs are perfect for long meetings."`,

    rules: [
      {
        rule: "Adjective order with demonstratives: Demonstrative + (Opinion) + (Size) + (Age) + (Shape) + (Color) + (Material) + Noun",
        explanation: "When using multiple adjectives, they follow a general order. Don't worry about memorizing all positions — just avoid putting adjectives in a clearly wrong order.",
        example: "'This beautiful new red silk dress.' (opinion + age + color + material + noun)\n'These long old wooden shelves.' (size + age + material + noun)",
      },
    ],

    commonMistakes: [
      { wrong: "This is a red beautiful car.", correct: "This is a beautiful red car.", explanation: "Opinion adjectives (beautiful, great) usually come before factual adjectives (red, big)." },
    ],

    sentencePatterns: [
      {
        pattern: "Rich descriptions with demonstratives + adjectives",
        hindiPattern: "Demonstratives + Adjectives",
        examples: [
          { english: "This innovative new product solves a problem that millions of people face daily.", hindi: "यह innovative नया product एक ऐसी problem solve करता है जो लाखों लोग daily face करते हैं।" },
          { english: "Those old traditional methods simply can't keep up with modern demands.", hindi: "वे पुरानी traditional methods simply modern demands के साथ नहीं चल सकतीं।" },
          { english: "These recent positive changes are a direct result of the team's hard work.", hindi: "ये recent positive changes team की मेहनत का सीधा नतीजा हैं।" },
        ],
      },
    ],

    summary: [
      "Pattern 1: Demonstrative + Adjective + Noun ('This new phone')",
      "Pattern 2: Demonstrative + Be Verb + Adjective ('This is new')",
      "Adjective categories: size, value, age, quality, status, distance",
      "Multiple adjectives: opinion → size → age → shape → color → material",
      "Practice: describe 5 things with 2+ adjectives each day",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 6 — HAS / HAVE
  // ══════════════════════════════════════════════════════════

  // ── d6-t1-s2: Have with I / You / We / They ──
  "d6-t1-s2": {
    whyLearnThis: `"I have a dream." "You have great potential." "We have a meeting at 3." "They have three offices in India." — HAVE is used with I, You, We, and They to express possession, and it's one of the most frequent verbs in English!\n\nThis affects every conversation about:\n✓ Your possessions: "I have a car."\n✓ Your qualities: "You have great leadership skills."\n✓ Group/team information: "We have 5 members in our team."\n✓ Third-party information: "They have a new policy."`,

    conceptExplanation: `HAVE with I / YOU / WE / THEY:\n\nThe rule is simple: I, You, We, They → HAVE (never HAS)\n\n📌 WITH "I":\n• I have a presentation tomorrow.\n• I have 5 years of experience in marketing.\n• I have a question about the deadline.\n• I have no choice in this matter.\n• I have already submitted the report.\n\n📌 WITH "YOU":\n• You have excellent communication skills.\n• You have three days to complete this.\n• You have been selected for the final round.\n• You have a call at 2 PM today.\n• Do you have a minute to discuss this?\n\n📌 WITH "WE":\n• We have a team meeting every Monday.\n• We have achieved all our Q3 targets!\n• We have to submit the proposal by Friday.\n• We have received 500 applications so far.\n• We have no room for compromise on quality.\n\n📌 WITH "THEY":\n• They have five branches across India.\n• They have announced a new product line.\n• They have to deliver by next week.\n• They have been our clients for 10 years.\n• They have strict data privacy policies.\n\n📌 CONTRACTIONS:\nI have → I've | You have → You've | We have → We've | They have → They've\n\n📌 NEGATIVE:\nI/You/We/They + don't have / do not have\n• "I don't have time for this."\n• "We don't have the budget."\n• "They don't have an office in Chennai."`,

    hindiExplanation: `HAVE का use — I, You, We, They के साथ:\n\nI have = मेरे पास है\n"I have a car." (मेरे पास car है।)\n"I have 3 years of experience." (मेरे पास 3 साल का experience है।)\n\nYou have = आपके/तुम्हारे पास है\n"You have a great opportunity." (आपके पास एक बढ़िया opportunity है।)\n\nWe have = हमारे पास है\n"We have a meeting today." (आज हमारी meeting है।)\n\nThey have = उनके पास है\n"They have 3 offices." (उनके 3 offices हैं।)\n\nNegative: don't have\n"I don't have time." (मेरे पास time नहीं है।)\n"We don't have the budget." (हमारे पास budget नहीं है.)\n\nQuestion: Do + I/you/we/they + have?\n"Do you have a pen?" (क्या आपके पास pen है?)`,

    rules: [
      {
        rule: "I, You, We, They → HAVE (never HAS)",
        explanation: "This is a strict grammar rule. HAS is only for He, She, and It. Any sentence with I, You, We, or They uses HAVE.",
        example: "✅ I have / You have / We have / They have\n❌ I has / You has / We has / They has",
      },
    ],

    commonMistakes: [
      { wrong: "I has a question.", correct: "I have a question.", explanation: "'Has' is for He/She/It only. 'I' always uses 'have'." },
      { wrong: "We has no choice.", correct: "We have no choice.", explanation: "'We' uses 'have', not 'has'." },
      { wrong: "Do they has the document?", correct: "Do they have the document?", explanation: "In questions with Do/Don't, the verb stays as 'have' for I/You/We/They." },
    ],

    sentencePatterns: [
      {
        pattern: "HAVE in professional sentences",
        hindiPattern: "Professional HAVE sentences",
        examples: [
          { english: "I have 8 years of experience in software architecture and cloud solutions.", hindi: "मेरे पास software architecture और cloud solutions में 8 साल का experience है।" },
          { english: "We have secured funding for the next 18 months of operations.", hindi: "हमने अगले 18 महीनों के operations के लिए funding secured कर ली है।" },
          { english: "They have consistently delivered high-quality work for the past 3 years.", hindi: "उन्होंने पिछले 3 सालों से consistently high-quality काम deliver किया है।" },
          { english: "Do you have any concerns about the proposed timeline?", hindi: "क्या आपको proposed timeline के बारे में कोई चिंता है?" },
        ],
      },
    ],

    summary: [
      "I, You, We, They → HAVE (strict rule — no exceptions)",
      "Contractions: I've, you've, we've, they've",
      "Negative: don't have / do not have",
      "Questions: Do + I/you/we/they + have?",
      "Common professional uses: experience, meetings, budget, policies",
    ],
  },

  // ── d6-t1-s3: Has with He / She / It ──
  "d6-t1-s3": {
    whyLearnThis: `"He has 10 years of experience." "She has a great personality." "It has many features." — HAS is used with He, She, and It to express possession.\n\nThis is the most commonly confused grammar point for Indian English learners. Getting it right (HAVE with I/You/We/They vs HAS with He/She/It) is ESSENTIAL for speaking correct English.`,

    conceptExplanation: `HAS with HE / SHE / IT:\n\nThe rule: He, She, It, and singular nouns → HAS\n\n📌 WITH "HE":\n• He has a degree in Computer Science.\n• He has 5 years of experience at Infosys.\n• He has a strong technical background.\n• He has been working here since 2020.\n• Does he have time to meet?\n\n📌 WITH "SHE":\n• She has exceptional leadership qualities.\n• She has two master's degrees.\n• She has managed a team of 20 people.\n• She has a very clear vision for the project.\n• Does she have all the information she needs?\n\n📌 WITH "IT" (referring to things, companies, projects):\n• "The company has 500+ employees."\n• "This project has a tight deadline."\n• "The app has over 1 million downloads."\n• "The proposal has some gaps that need to be addressed."\n• "Mumbai has an amazing food scene."\n\n📌 CONTRACTIONS:\nHe has → He's | She has → She's | It has → It's\nNote: He's/She's/It's can also mean 'He is/She is/It is' — context makes it clear!\n\n📌 NEGATIVE: doesn't have / does not have\n• "He doesn't have the authority to approve this."\n• "She doesn't have access to those files."\n• "The system doesn't have enough memory."`,

    hindiExplanation: `HAS का use — He, She, It के साथ:\n\nHe has = उसके पास है (male)\n"He has a car." (उसके पास car है।)\n"He has experience." (उसके पास experience है।)\n\nShe has = उसके पास है (female)\n"She has a great personality." (उसकी बहुत अच्छी personality है।)\n"She has managed many teams." (उसने कई teams manage की हैं।)\n\nIt has = इसमें/उसमें है (thing/company/place)\n"The app has 1 million users." (App में 1 million users हैं।)\n"Mumbai has good infrastructure." (Mumbai में अच्छी infrastructure है।)\n\nNegative: doesn't have\n"He doesn't have time." (उसके पास time नहीं है।)\n"She doesn't have experience." (उसके पास experience नहीं है।)\n\nQuestion: Does + he/she/it + have?\n"Does he have a car?" (क्या उसके पास car है?)`,

    rules: [
      {
        rule: "He, She, It, and singular nouns → HAS (never HAVE)",
        explanation: "Any singular third-person subject (he, she, it, and any singular noun like 'the company', 'my friend', 'this phone') uses HAS.",
        example: "✅ He has / She has / It has / The company has / My friend has\n❌ He have / She have / It have / The company have",
      },
    ],

    commonMistakes: [
      { wrong: "She have many skills.", correct: "She has many skills.", explanation: "'She' uses 'has', not 'have'." },
      { wrong: "The company have a new policy.", correct: "The company has a new policy.", explanation: "'The company' is singular → 'has', not 'have'." },
      { wrong: "Does he has the time?", correct: "Does he have the time?", explanation: "After 'does', the verb reverts to base form 'have' (not 'has')." },
    ],

    sentencePatterns: [
      {
        pattern: "HAS in professional descriptions",
        hindiPattern: "Professional HAS sentences",
        examples: [
          { english: "She has over 15 years of experience in financial auditing.", hindi: "उसके पास financial auditing में 15+ साल का experience है।" },
          { english: "The startup has achieved profitability within its first 18 months.", hindi: "Startup ने अपने पहले 18 महीनों में ही profitability achieve कर ली है।" },
          { english: "He has the skills, the experience, and the attitude to lead this project.", hindi: "उसके पास इस project को lead करने के skills, experience, और attitude हैं।" },
          { english: "Does the system have the capability to handle this volume of data?", hindi: "क्या system में इतने बड़े data को handle करने की capability है?" },
        ],
      },
    ],

    summary: [
      "He, She, It → HAS (strict rule — no exceptions)",
      "Also: 'The company has', 'My friend has', 'The phone has'",
      "Contractions: He's, She's, It's (can also mean He is, She is, It is)",
      "Negative: doesn't have (NOT 'don't has' or 'hasn't')",
      "Questions: Does he/she/it have? (base verb 'have', not 'has')",
    ],
  },

  // ── d6-t1-s4: Questions — Do you have? / Does she have? ──
  "d6-t1-s4": {
    whyLearnThis: `"Do you have a pen?" "Does she have the report?" — Questions with Have/Has are incredibly common and follow a specific pattern that's different from other verbs.\n\nYou need these questions for:\n✓ Daily professional interactions: "Do you have 5 minutes?"\n✓ Confirming information: "Does she have the access code?"\n✓ Checking availability: "Do they have a meeting room available?"\n✓ Clarifying requirements: "Does the client have specific requirements?"`,

    conceptExplanation: `QUESTIONS WITH HAVE / HAS:\n\n📌 WITH I / YOU / WE / THEY → Do + have:\nFormula: Do + I/You/We/They + have + object?\n\n• "Do you have a moment to discuss this?"\n• "Do we have the budget for this?"\n• "Do they have a policy on remote work?"\n• "Do I have all the information I need?"\n• "Do you have any experience with Salesforce?"\n\n📌 WITH HE / SHE / IT → Does + have (base verb!):\nFormula: Does + He/She/It + have + object?\nNOTE: After 'does', the verb goes back to BASE FORM 'have' (not 'has')!\n\n• "Does she have the final report?"\n• "Does he have access to the database?"\n• "Does the app have a dark mode?"\n• "Does the manager have time for a quick call?"\n• "Does it have enough storage capacity?"\n\n📌 WH-QUESTIONS:\n• "What do you have to offer that others don't?"\n• "How much time do we have?"\n• "Who does she have in her team?"\n• "What does this product have that competitors lack?"\n• "Why doesn't he have the required clearance?"\n\n📌 SHORT ANSWERS:\nQ: "Do you have a car?" → A: "Yes, I do." / "No, I don't."\nQ: "Does she have experience?" → A: "Yes, she does." / "No, she doesn't."\nQ: "Do they have an office in Pune?" → A: "Yes, they do." / "No, they don't."`,

    hindiExplanation: `Have/Has के साथ questions:\n\nDo = I/You/We/They के साथ\n"Do you have a pen?" (क्या आपके पास pen है?)\n"Do we have time?" (क्या हमारे पास time है?)\n\nDoes = He/She/It के साथ\n"Does she have the report?" (क्या उसके पास report है?)\n"Does he have experience?" (क्या उसके पास experience है?)\n\nIMPORTANT: Does के बाद base form 'have' (not 'has')!\n❌ "Does she has the report?" \n✅ "Does she have the report?"\n\nShort answers:\n"Yes, I do." / "No, I don't."\n"Yes, she does." / "No, she doesn't."`,

    rules: [
      {
        rule: "After 'does', use base form 'have' — not 'has'",
        explanation: "This is the most common mistake. When forming questions with 'does', the main verb goes back to its base form. So 'She has' becomes 'Does she have?' — not 'Does she has?'",
        example: "✅ 'Does she have the document?' | ✅ 'Does he have experience?' | ✅ 'Does it have Wi-Fi?'\n❌ 'Does she has the document?' | ❌ 'Does he has experience?' | ❌ 'Does it has Wi-Fi?'",
      },
    ],

    commonMistakes: [
      { wrong: "Does she has the key?", correct: "Does she have the key?", explanation: "After 'does', use base form 'have', not 'has'." },
      { wrong: "Do he have a car?", correct: "Does he have a car?", explanation: "'He' takes 'does' in questions, not 'do'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional Have/Has questions",
        hindiPattern: "Professional questions",
        examples: [
          { english: "Do you have any availability for a 30-minute discussion this week?", hindi: "क्या आपके पास इस हफ्ते 30 minutes की discussion के लिए कोई time है?" },
          { english: "Does the platform have the integration capabilities we discussed?", hindi: "क्या platform में वो integration capabilities हैं जिनके बारे में हमने बात की थी?" },
          { english: "Does he have the authority to approve this expenditure?", hindi: "क्या उसे इस खर्च को approve करने का अधिकार है?" },
          { english: "Do they have a dedicated support team available 24/7?", hindi: "क्या उनके पास 24/7 available dedicated support team है?" },
        ],
      },
    ],

    summary: [
      "Do + I/You/We/They + have? (plural subjects)",
      "Does + He/She/It + have? (singular third person)",
      "CRITICAL: After 'does', use 'have' (not 'has')",
      "Short answers: 'Yes, I do.' 'No, she doesn't.'",
      "Wh-questions: 'How much do we have?' 'What does she have?'",
    ],
  },

  // ── d6-t2-s1: Expressing Ownership ──
  "d6-t2-s1": {
    whyLearnThis: `"I have a house." "She has a car." "They have three branches." — Talking about ownership is one of the FIRST things you do in English conversation!\n\nFrom introducing yourself ("I have 5 years of experience") to discussing business ("We have a branch in Delhi"), expressing possession is essential for:\n✓ Describing your assets and resources\n✓ Professional introductions\n✓ Business discussions\n✓ Personal conversations`,

    conceptExplanation: `HAVE / HAS FOR OWNERSHIP AND POSSESSION:\n\nThings you can 'have':\n• Physical possessions: car, house, phone, laptop, degree, certificate\n• Relationships: a brother, a friend, a mentor, a team\n• Qualities: experience, skills, knowledge, talent, patience\n• Problems/Issues: a deadline, a challenge, a meeting, a question\n• Achievements: a promotion, an award, a record\n\n📌 PHYSICAL POSSESSIONS:\n• "I have a 3BHK apartment in Gurgaon."\n• "She has a black sedan."\n• "He has two properties — one in Mumbai and one in Pune."\n• "They have state-of-the-art equipment."\n\n📌 RELATIONSHIPS:\n• "I have an amazing team of 15 people."\n• "She has a mentor who guides her career."\n• "He has a large professional network."\n• "We have long-term relationships with our clients."\n\n📌 SKILLS / EXPERIENCE:\n• "I have 8 years of experience in data analytics."\n• "She has excellent presentation skills."\n• "He has a deep understanding of the Indian market."\n• "They have expertise in cross-border transactions."\n\n📌 ISSUES / CHALLENGES:\n• "We have a problem — the deadline is tomorrow."\n• "She has a question about the contract terms."\n• "I have concerns about the budget."\n• "The project has some risks that we need to manage."`,

    hindiExplanation: `Have/Has = possession (अधिकार/स्वामित्व) बताना\n\nPhysical:\n"I have a house." (मेरे पास घर है।)\n"She has a car." (उसके पास car है।)\n\nRelationships:\n"I have a sister." (मेरी एक बहन है।)\n"He has a great mentor." (उसका एक बेहतरीन mentor है।)\n\nQualities/Skills:\n"She has good communication skills." (उसकी communication skills अच्छी हैं।)\n"I have 5 years of experience." (मेरे पास 5 साल का experience है।)\n\nProblems:\n"I have a question." (मेरा एक सवाल है।)\n"We have a problem." (हमारी एक problem है।)`,

    rules: [
      {
        rule: "Have/Has expresses possession broadly — physical things, abstract qualities, and relationships",
        explanation: "'Have' isn't just for physical objects. You can 'have' experience, skills, ideas, problems, opportunities, and relationships. This broader meaning is essential for professional English.",
        example: "'I have a car.' (physical) | 'I have 10 years of experience.' (abstract) | 'I have a great team.' (relationship) | 'I have a question.' (abstract situation)",
      },
    ],

    commonMistakes: [
      { wrong: "I am having a question.", correct: "I have a question.", explanation: "For possession/having things, don't use -ing form. 'Having' is only for actions like eating: 'I am having lunch.'" },
      { wrong: "She has experienced 5 years.", correct: "She has 5 years of experience.", explanation: "'Experience' as possession: 'She has 5 years of experience.' Not 'She has experienced 5 years.'" },
    ],

    sentencePatterns: [
      {
        pattern: "Ownership and possession sentences",
        hindiPattern: "Ownership sentences",
        examples: [
          { english: "I have over a decade of experience in managing cross-functional teams.", hindi: "मेरे पास cross-functional teams manage करने का एक दशक से ज़्यादा का experience है।" },
          { english: "Our company has offices in Delhi, Mumbai, Bangalore, and Hyderabad.", hindi: "हमारी company के Delhi, Mumbai, Bangalore, और Hyderabad में offices हैं।" },
          { english: "She has an exceptional ability to motivate people and build consensus.", hindi: "उसमें लोगों को motivate करने और consensus build करने की exceptional ability है।" },
          { english: "Do you have any prior experience with project management software?", hindi: "क्या आपका project management software के साथ कोई पूर्व experience है?" },
        ],
      },
    ],

    summary: [
      "HAVE/HAS expresses physical, abstract, and relational possession",
      "Physical: car, house, phone | Abstract: experience, skills, ideas",
      "Relational: team, mentor, network | Situational: question, problem, meeting",
      "Don't use -ing for static possession: 'I have' not 'I am having'",
      "Common professional use: 'I have X years of experience in Y'",
    ],
  },

  // ── d6-t2-s2: Describing Physical Features ──
  "d6-t2-s2": {
    whyLearnThis: `"She has long black hair." "He has brown eyes." "The phone has a great camera." — Describing physical features with HAVE/HAS is one of the most personal and vivid uses of English!\n\nYou use this when:\n✓ Describing people: "She has a warm smile and kind eyes."\n✓ Describing products: "This laptop has a 4K display."\n✓ Describing places: "The office has panoramic city views."\n✓ Comparing: "He has a stronger build than his brother."`,

    conceptExplanation: `HAVE / HAS FOR PHYSICAL FEATURES:\n\n👤 DESCRIBING PEOPLE:\nFace: "She has sharp features and almond-shaped eyes."\nHair: "He has curly black hair."\nHeight: "She has a tall, athletic build."\nSmile: "He has the most genuine smile."\nVoice: "She has a strong, clear voice — perfect for presentations."\nPersonality (as physical characteristic): "He has a commanding presence."\n\n📱 DESCRIBING PRODUCTS:\n• "This smartphone has a 108MP camera with AI features."\n• "The laptop has a 15.6-inch 4K touchscreen display."\n• "The car has a V6 engine with 350 horsepower."\n• "The application has an intuitive, user-friendly interface."\n• "This headphone has 30 hours of battery life and active noise cancellation."\n\n🏢 DESCRIBING PLACES:\n• "The office has a rooftop terrace with a stunning city view."\n• "The hotel has a world-class spa and indoor pool."\n• "The conference room has state-of-the-art AV equipment."\n• "The building has 24-hour security and biometric access."\n\n🏋️ DESCRIBING PHYSICAL CHARACTERISTICS:\n• "She has a photographic memory — she never forgets a face."\n• "He has very fast reflexes — essential for his sport."\n• "The team has a perfect combination of skills and experience."`,

    hindiExplanation: `Physical features describe करना:\n\nLog:\n"She has long hair." (उसके लंबे बाल हैं।)\n"He has brown eyes." (उसकी भूरी आँखें हैं।)\n"She has a beautiful smile." (उसकी सुंदर मुस्कान है।)\n\nProducts:\n"This phone has a great camera." (इस phone में अच्छा camera है।)\n"The laptop has 16GB RAM." (Laptop में 16GB RAM है।)\n\nPlaces:\n"The office has a nice view." (Office में अच्छा view है।)\n"The hotel has a swimming pool." (Hotel में swimming pool है।)\n\nHindi to English trick:\n"उसके बाल लंबे हैं।" = "She has long hair."\n(Hindi में 'के' use होता है, English में 'has' use होता है)`,

    rules: [
      {
        rule: "In English, physical features use HAVE/HAS; in Hindi we say 'ke' (के)",
        explanation: "This is a key structural difference between Hindi and English. Hindi says 'uske lambe baal hain' (के), but English says 'She has long hair' (HAS). The subject + has + feature is the correct English structure.",
        example: "'उसके काले बाल हैं' → 'She has black hair.' | 'इस phone में अच्छा camera है' → 'This phone has a good camera.'",
      },
    ],

    commonMistakes: [
      { wrong: "She is having long hair.", correct: "She has long hair.", explanation: "For permanent features, use simple 'has', not 'is having'." },
      { wrong: "Her eyes is blue.", correct: "She has blue eyes. / Her eyes are blue.", explanation: "Two correct ways: 'She has blue eyes' (HAVE/HAS) or 'Her eyes are blue' (Be Verb)." },
    ],

    sentencePatterns: [
      {
        pattern: "Describing features of people and products",
        hindiPattern: "Features describe करना",
        examples: [
          { english: "She has a natural talent for public speaking and an incredible ability to connect with audiences.", hindi: "उसमें public speaking की natural talent है और audiences के साथ connect करने की incredible ability है।" },
          { english: "The new model has a significantly improved battery life of 48 hours on a single charge.", hindi: "New model में single charge पर 48 hours की significantly improved battery life है।" },
          { english: "Our Bangalore office has open workspaces, breakout rooms, and a rooftop terrace.", hindi: "हमारे Bangalore office में open workspaces, breakout rooms, और rooftop terrace है।" },
        ],
      },
    ],

    summary: [
      "HAVE/HAS for physical features: hair, eyes, height, smile, voice",
      "Products: 'This phone has a 108MP camera.'",
      "Places: 'The office has a great view.'",
      "Hindi 'ke' = English 'has': 'उसके बाल' = 'She has hair'",
      "Simple 'has' for permanent features (not 'is having')",
    ],
  },

  // ── d6-t2-s3: Negatives — I don't have / She doesn't have ──
  "d6-t2-s3": {
    whyLearnThis: `"I don't have time." "She doesn't have the authority." "They don't have a branch in this city." — Negative possession sentences are just as important as positive ones!\n\nYou need negatives to:\n✓ Set boundaries: "I don't have availability this week."\n✓ Clarify limitations: "We don't have the budget for this."\n✓ Explain situations: "She doesn't have the required clearance."\n✓ Decline requests professionally: "I'm sorry, I don't have that information right now."`,

    conceptExplanation: `NEGATIVE FORMS OF HAVE / HAS:\n\n📌 I / YOU / WE / THEY → Don't have / Do not have:\n• "I don't have time for this right now."\n• "You don't have the required permissions."\n• "We don't have sufficient data to make a decision."\n• "They don't have an office in Hyderabad yet."\n\n📌 HE / SHE / IT → Doesn't have / Does not have:\n• "He doesn't have the authority to approve this."\n• "She doesn't have access to that folder."\n• "The app doesn't have offline functionality yet."\n• "This plan doesn't have a contingency for delays."\n\n📌 FORMAL NEGATIVES (written):\n• "I do not have sufficient information to comment on this."\n• "She does not have the required qualifications for this role."\n• "The organization does not have the resources to pursue this."\n\n📌 ALSO: HAD NOT / DIDN'T HAVE (Past):\n• "I didn't have my ID with me."\n• "She didn't have time to finish."\n• "They didn't have the updated version."\n\n📌 PROFESSIONAL WAYS TO SAY YOU DON'T HAVE SOMETHING:\n• "I'm afraid I don't have that information at the moment — let me check and get back to you."\n• "Unfortunately, we don't have the bandwidth for additional projects this quarter."\n• "I don't have the exact figures, but I can find out by EOD."`,

    hindiExplanation: `Negative possession:\n\nI/You/We/They → don't have\n"I don't have time." (मेरे पास time नहीं है।)\n"We don't have the budget." (हमारे पास budget नहीं है।)\n\nHe/She/It → doesn't have\n"She doesn't have experience." (उसके पास experience नहीं है।)\n"He doesn't have access." (उसके पास access नहीं है।)\n\nDo/Does के बाद: have (not has!)\n"She doesn't have" = correct ✅\n"She doesn't has" = wrong ❌\n\nPolite way to say I don't have:\n"I'm afraid I don't have that information right now."\n"Unfortunately, I don't have the authority to decide."`,

    rules: [
      {
        rule: "Don't have (I/You/We/They) | Doesn't have (He/She/It) — never 'don't has' or 'doesn't has'",
        explanation: "After 'don't' and 'doesn't', the verb always returns to base form 'have'. Never 'has' after 'doesn't'.",
        example: "✅ 'I don't have' | ✅ 'She doesn't have' | ✅ 'They don't have'\n❌ 'I don't has' | ❌ 'She doesn't has' | ❌ 'They don't has'",
      },
    ],

    commonMistakes: [
      { wrong: "She doesn't has a car.", correct: "She doesn't have a car.", explanation: "After 'doesn't', always use base form 'have', never 'has'." },
      { wrong: "I am not having time.", correct: "I don't have time.", explanation: "For possession/static situations, use 'don't have', not 'am not having'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional negative HAVE sentences",
        hindiPattern: "Professional negatives",
        examples: [
          { english: "I'm afraid I don't have that information at the moment, but I'll find out and revert by EOD.", hindi: "मुझे खेद है, इस समय मेरे पास वह जानकारी नहीं है, लेकिन मैं पता करके EOD तक revert करूंगा/करूंगी।" },
          { english: "She doesn't have the clearance required to access that database.", hindi: "उसके पास उस database को access करने की required clearance नहीं है।" },
          { english: "Unfortunately, we don't have the bandwidth to take on new projects this quarter.", hindi: "दुर्भाग्य से, इस quarter में नए projects लेने की हमारी bandwidth नहीं है।" },
        ],
      },
    ],

    summary: [
      "I/You/We/They → don't have | He/She/It → doesn't have",
      "NEVER 'don't has' or 'doesn't has' — always base form 'have'",
      "Formal: 'do not have' / 'does not have'",
      "Past: 'didn't have' for all subjects",
      "Professionally: 'I'm afraid I don't have...' 'Unfortunately, we don't have...'",
    ],
  },

  // ── d6-t3-s1: Introduction to Present Perfect ──
  "d6-t3-s1": {
    whyLearnThis: `"I have visited Paris." "She has completed the course." "We have launched three products." — Present Perfect is the tense that connects PAST ACTIONS to the PRESENT MOMENT.\n\nPresent Perfect is essential for:\n✓ CV/Resume: "I have worked at Google for 3 years."\n✓ Updates: "We have resolved the issue."\n✓ Experience: "Have you ever been to a board meeting?"\n✓ Recent news: "The company has announced a merger."\n✓ Conversations: "I have already submitted the report."`,

    conceptExplanation: `PRESENT PERFECT TENSE — INTRODUCTION:\n\nFormula: Subject + have/has + Past Participle (V3)\n\nHave = with I, You, We, They\nHas = with He, She, It\n\n📌 WHAT IS PRESENT PERFECT?\nPresent Perfect links a PAST ACTION to the PRESENT.\nIt answers: "What is the result NOW of something that happened in the past?"\n\nExample:\n"I have submitted the report." \n→ PAST: I submitted it. PRESENT: It's submitted NOW. The result is CURRENT.\n\n📌 FOUR MAIN USES:\n\n1️⃣ EXPERIENCE (जीवन में कभी हुआ):\n"Have you ever worked abroad?"\n"I have never missed a deadline."\n"She has led a team of 50+ people."\n\n2️⃣ RECENT EVENTS (अभी हुआ, result अभी भी relevant है):\n"I have just received your email."\n"She has finally approved the budget."\n"They have launched the product today."\n\n3️⃣ CONTINUITY (तब से अब तक):\n"I have worked here for 5 years."\n"She has been our client since 2019."\n"We have maintained a clean safety record."\n\n4️⃣ COMPLETION (हो गया है):\n"I have finished the analysis."\n"She has signed the contract."\n"The team has delivered everything on time."\n\n📌 KEY WORDS WITH PRESENT PERFECT:\never, never, already, yet, just, for, since, recently, lately, so far, up to now`,

    hindiExplanation: `Present Perfect = have/has + V3 (past participle)\n\nFormula: Subject + have/has + V3\n\nI have eaten. = मैंने खाया है। (अभी result है)\nShe has finished. = उसने खत्म किया है। (अभी complete है)\nWe have launched. = हमने launch किया है। (result अभी भी relevant है)\n\n4 main uses:\n1. Experience: "I have visited London." (कभी London गया था)\n2. Recent: "I have just got your message." (अभी मिला)\n3. Continuity: "I have worked here for 5 years." (5 साल से काम कर रहा हूँ)\n4. Completion: "I have finished the report." (report खत्म हो गई)\n\nKey words:\nEver, Never, Already, Yet, Just, For, Since, Recently`,

    rules: [
      {
        rule: "Present Perfect uses HAVE/HAS + V3 (Past Participle)",
        explanation: "V3 is the third form of the verb (eaten, gone, written, spoken, finished, submitted). Have and Has follow the same subject rules as possession.",
        example: "I have finished. / She has submitted. / They have launched. | Common V3: eaten, gone, done, seen, written, taken, made, said, spoken, finished, completed, submitted, approved, started",
        exception: "Regular verbs: V3 = verb+ed (finish→finished, submit→submitted, complete→completed). Irregular verbs: V3 = unique form (go→gone, eat→eaten, write→written, speak→spoken).",
      },
    ],

    commonMistakes: [
      { wrong: "I have went there.", correct: "I have gone there.", explanation: "'Went' is Simple Past. Present Perfect needs V3: go → gone." },
      { wrong: "She has ate already.", correct: "She has already eaten.", explanation: "'Ate' is Simple Past. V3 of 'eat' is 'eaten'." },
      { wrong: "I have submitted the report yesterday.", correct: "I submitted the report yesterday.", explanation: "Present Perfect is NOT used with specific past time words (yesterday, last week, in 2019). Use Simple Past instead." },
    ],

    sentencePatterns: [
      {
        pattern: "Present Perfect for professional updates",
        hindiPattern: "Professional updates में Present Perfect",
        examples: [
          { english: "I have just completed the analysis — will share the findings with you shortly.", hindi: "मैंने अभी analysis complete की है — findings जल्द आपके साथ share करूंगा/करूंगी।" },
          { english: "She has successfully managed projects worth over ₹50 crore in the past 3 years.", hindi: "उसने पिछले 3 सालों में ₹50 करोड़ से ज़्यादा के projects successfully manage किए हैं।" },
          { english: "We have received 1,200 applications for the position — screening is underway.", hindi: "हमें position के लिए 1,200 applications मिली हैं — screening शुरू है।" },
        ],
      },
    ],

    summary: [
      "Formula: Subject + have/has + V3 (past participle)",
      "4 uses: Experience | Recent events | Continuity (for/since) | Completion",
      "Key words: ever, never, already, yet, just, for, since, recently",
      "NOT with specific past times (yesterday, last year) — use Simple Past for those",
      "Regular V3: +ed | Irregular V3: go→gone, eat→eaten, write→written",
    ],
  },

  // ── d6-t3-s2: Have/Has + Past Participle ──
  "d6-t3-s2": {
    whyLearnThis: `"I have written the email." "She has completed her MBA." "They have expanded to 10 cities." — The formula HAVE/HAS + Past Participle is the backbone of Present Perfect tense and one of the most used sentence patterns in professional English!\n\nOnce you master the V3 forms and this formula, you'll be able to express any past experience in professional English.`,

    conceptExplanation: `HAVE/HAS + PAST PARTICIPLE (V3) — FULL GUIDE:\n\n📌 COMMON IRREGULAR V3 FORMS:\ngo → went → gone | come → came → come | do → did → done\nget → got → gotten/got | give → gave → given | take → took → taken\nsee → saw → seen | know → knew → known | say → said → said\nmake → made → made | become → became → become | begin → began → begun\nbuy → bought → bought | bring → brought → brought | build → built → built\ncatch → caught → caught | choose → chose → chosen | draw → drew → drawn\ndrink → drank → drunk | drive → drove → driven | eat → ate → eaten\nfall → fell → fallen | feel → felt → felt | find → found → found\nfly → flew → flown | forget → forgot → forgotten | grow → grew → grown\nhave → had → had | hear → heard → heard | hold → held → held\nkeep → kept → kept | lead → led → led | leave → left → left\nmeet → met → met | put → put → put | read → read → read\nrun → ran → run | sell → sold → sold | send → sent → sent\nshow → showed → shown | sing → sang → sung | sit → sat → sat\nspeak → spoke → spoken | spend → spent → spent | stand → stood → stood\nswim → swam → swum | teach → taught → taught | tell → told → told\nthink → thought → thought | understand → understood → understood | win → won → won\nwrite → wrote → written\n\n📌 REGULAR V3 FORMS (just +ed):\ncomplete → completed | submit → submitted | finish → finished | deliver → delivered\napprove → approved | launch → launched | achieve → achieved | increase → increased\nreview → reviewed | update → updated | develop → developed | implement → implemented`,

    hindiExplanation: `V3 (Past Participle) याद करने का तरीका:\n\nRegular verbs → +ed:\n"I have finished." "She has submitted." "They have launched."\n\nIrregular verbs (सबसे important):\nGo → Gone: "I have gone."\nEat → Eaten: "She has eaten."\nWrite → Written: "I have written."\nSee → Seen: "He has seen."\nDo → Done: "We have done it."\nSay → Said: "She has said it."\nMake → Made: "They have made progress."\nGive → Given: "I have given my best."\nTake → Taken: "She has taken the lead."\nCome → Come: "He has come a long way."\n\nPractice: हर V3 को एक sentence में use करो!`,

    rules: [
      {
        rule: "Regular V3 = +ed; Irregular V3 must be memorized individually",
        explanation: "About 200 common irregular verbs have unique V3 forms. The most important ones appear in the list above. Memorize the top 50 and you'll cover 95% of daily usage.",
        example: "Regular: submit→submitted, finish→finished, complete→completed\nIrregular: write→written, speak→spoken, begin→begun, choose→chosen",
      },
    ],

    commonMistakes: [
      { wrong: "I have went to London.", correct: "I have gone to London.", explanation: "V3 of 'go' is 'gone', not 'went' (that's Simple Past)." },
      { wrong: "She has gived her best.", correct: "She has given her best.", explanation: "V3 of 'give' is 'given', not 'gived'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional Present Perfect sentences",
        hindiPattern: "Professional sentences",
        examples: [
          { english: "I have spoken with the client and they have agreed to extend the deadline.", hindi: "मैंने client से बात की है और उन्होंने deadline बढ़ाने पर सहमति दी है।" },
          { english: "She has built a team of highly qualified professionals over the past two years.", hindi: "उसने पिछले दो सालों में highly qualified professionals की team build की है।" },
          { english: "We have submitted all the required documents and are awaiting confirmation.", hindi: "हमने सभी required documents submit किए हैं और confirmation का इंतज़ार कर रहे हैं।" },
        ],
      },
    ],

    summary: [
      "Formula: have/has + V3 (past participle)",
      "Regular: submit→submitted, finish→finished, complete→completed",
      "Key irregular V3: go→gone, write→written, speak→spoken, see→seen",
      "Practice the top 50 irregular V3 forms for daily professional use",
      "If unsure of V3, use Simple Past instead (safer option while learning)",
    ],
  },

  // ── d6-t3-s3: Present Perfect in Conversations ──
  "d6-t3-s3": {
    whyLearnThis: `"Have you seen the new update?" "I've already sent the email." "Has she replied yet?" — Present Perfect is the tense of NATURAL CONVERSATION about recent and past events!\n\nWithout Present Perfect, your conversations sound choppy and unnatural. With it, you can:\n✓ Update colleagues: "I've just finished the report."\n✓ Ask about status: "Have you spoken with the client?"\n✓ Confirm completion: "Yes, she has signed the contract."\n✓ Discuss experience: "I've worked in 4 different industries."`,

    conceptExplanation: `PRESENT PERFECT IN NATURAL CONVERSATIONS:\n\n📌 KEY CONVERSATION WORDS:\nalready = पहले ही (completed)\n"I have already submitted it." → Before you asked, it was done.\n\njust = अभी (very recently)\n"I have just received your email." → It arrived moments ago.\n\nyet = अभी तक (in questions/negatives)\n"Have you finished yet?" → Is it done by now?\n"I haven't finished yet." → Not done at this moment.\n\never = कभी भी (in questions about experience)\n"Have you ever been to a board meeting?"\n\nnever = कभी नहीं (negative experience)\n"I have never worked at a startup before."\n\nfor = अवधि (period of time)\n"I have worked here for 3 years." (three-year duration)\n\nsince = तब से (specific starting point)\n"I have worked here since 2021." (started in 2021, still working)\n\nrecently / lately = हाल ही में\n"Have you been to any training recently?"\n"I've been quite busy lately."\n\nso far = अब तक\n"We've received 500 responses so far."`,

    hindiExplanation: `Present Perfect conversations में key words:\n\nAlready = पहले ही: "I have already sent it."\nJust = अभी: "I have just finished."\nYet = अभी तक:\n• Question: "Have you finished yet?" (क्या तुमने खत्म किया?)\n• Negative: "I haven't finished yet." (मैंने अभी तक नहीं किया)\n\nEver = कभी: "Have you ever traveled abroad?"\nNever = कभी नहीं: "I have never been abroad."\n\nFor = duration: "I have worked here for 5 years."\nSince = starting point: "I have worked here since 2020."\n\nConversation tip:\n"Have you done X yet?" → "Yes, I have." / "No, not yet."`,

    rules: [
      {
        rule: "FOR shows duration (period); SINCE shows starting point",
        explanation: "'For' answers 'how long?' and is followed by a period of time. 'Since' answers 'starting when?' and is followed by a specific moment/date.",
        example: "'I have worked here FOR 3 years.' (a period)\n'I have worked here SINCE 2021.' (a year — starting point)\n'She has lived in Mumbai FOR her whole life.' / 'SINCE she was born.'",
      },
    ],

    commonMistakes: [
      { wrong: "I have already submitted it yesterday.", correct: "I already submitted it yesterday. OR I have already submitted it.", explanation: "Don't mix 'already' (Present Perfect) with 'yesterday' (specific time → Simple Past). Use one or the other." },
      { wrong: "Since 3 years", correct: "For 3 years", explanation: "'Since' is for starting points. '3 years' is a period/duration → use 'for': 'for 3 years'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional Present Perfect conversation",
        hindiPattern: "Professional conversation",
        examples: [
          { english: "Have you spoken with the vendor yet? I need their confirmation by end of day.", hindi: "क्या आपने vendor से बात की है? मुझे EOD तक उनकी confirmation चाहिए।" },
          { english: "I have just completed the competitive analysis — I'll share it in the next 30 minutes.", hindi: "मैंने अभी competitive analysis complete की है — अगले 30 minutes में share करूंगा/करूंगी।" },
          { english: "She has been managing this account since 2020 and knows the client very well.", hindi: "वह 2020 से इस account को manage कर रही है और client को बहुत अच्छे से जानती है।" },
        ],
      },
    ],

    summary: [
      "Already = completed before expected | Just = very recently done",
      "Yet = question/negative about completion by now",
      "Ever/Never = experience questions and statements",
      "For + period | Since + starting point",
      "Recently/Lately/So far = general recent timeframe",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 7 — HAD (Past Possession + Past Perfect)
  // ══════════════════════════════════════════════════════════

  // ── d7-t1-s2: Had for Past Possession ──
  "d7-t1-s2": {
    whyLearnThis: `"I had a bicycle when I was a student." "She had beautiful long hair before she cut it." "We had a small team, but we achieved big things." — HAD for past possession describes what you OWNED or EXPERIENCED in the past.\n\nThis is essential for:\n✓ Storytelling: "He had a dream..."\n✓ Professional interviews: "I had a team of 20 when I was at XYZ."\n✓ Describing past life: "She had a lot of responsibilities."\n✓ Comparing past and present: "We had 5 employees then; now we have 500."`,

    conceptExplanation: `HAD FOR PAST POSSESSION:\n\nHAD = Past tense of both HAVE and HAS\nCrucial: HAD is the SAME for ALL subjects!\nI had | You had | He had | She had | It had | We had | They had\n\n📌 PAST PHYSICAL POSSESSIONS:\n• "I had a Maruti 800 as my first car."\n• "She had a beautiful house in the hills."\n• "He had three motorcycles in his garage."\n• "They had offices in 12 cities by 2019."\n\n📌 PAST RELATIONSHIPS:\n• "I had an amazing mentor at my first job."\n• "She had a very supportive family."\n• "We had a team of dedicated professionals."\n• "He had loyal clients who trusted him completely."\n\n📌 PAST QUALITIES / SKILLS:\n• "Even as a child, she had a gift for languages."\n• "He had incredible energy and enthusiasm."\n• "I had very little experience when I started."\n• "She had the strongest work ethic I have ever seen."\n\n📌 PAST STATES AND EXPERIENCES:\n• "I had a terrible cold last week — I'm better now."\n• "She had a very difficult childhood but overcame it."\n• "We had a brilliant time at the team retreat."\n• "He had a near-perfect attendance record for 5 years."\n\n📌 NEGATIVE: DIDN'T HAVE:\n• "I didn't have much confidence in those days."\n• "She didn't have any prior experience in management."\n• "We didn't have the technology we have today."`,

    hindiExplanation: `HAD = पहले था/थी/थे\n\nSabhi subjects ke saath:\nI had = मेरे पास था | He had = उसके पास था | They had = उनके पास था\n\nExamples:\n"When I was young, I had a dog." (जब मैं छोटा था, मेरे पास कुत्ता था।)\n"She had long hair before she cut it." (बाल काटने से पहले उसके लंबे बाल थे।)\n"We had 5 employees when the company started." (जब company शुरू हुई, हमारे 5 employees थे।)\n\nProfessional use:\n"I had a team of 20 at my previous company." (पिछली company में मेरी 20 लोगों की team थी।)\n"She had 10 years of experience before joining us." (हमारे यहाँ आने से पहले उसके पास 10 साल का experience था।)\n\nNegative: didn't have\n"I didn't have experience then." (तब मेरे पास experience नहीं था।)`,

    rules: [
      {
        rule: "HAD is the same for ALL subjects — no 'hads' or variations",
        explanation: "This is the beauty of HAD — it never changes. I had, you had, he had, she had, we had, they had. Unlike present tense (have vs has), past is uniform for all.",
        example: "✅ I had / You had / He had / She had / We had / They had\n❌ He hads / She hadded / They haved (all wrong — HAD never changes)",
      },
    ],

    commonMistakes: [
      { wrong: "When I was young, I use to have a bicycle.", correct: "When I was young, I had a bicycle.", explanation: "For simple past possession, just use 'had'. 'Used to have' also works but is more complex." },
      { wrong: "She didn't had a car.", correct: "She didn't have a car.", explanation: "After 'didn't', use base form 'have', not 'had'." },
    ],

    sentencePatterns: [
      {
        pattern: "HAD for past possession in professional contexts",
        hindiPattern: "Professional past possession",
        examples: [
          { english: "I had a team of 25 engineers at my previous company, and we delivered 3 major products.", hindi: "मेरी पिछली company में 25 engineers की team थी, और हमने 3 major products deliver किए।" },
          { english: "She had an exceptional track record — zero project failures in 8 years.", hindi: "उसका exceptional track record था — 8 सालों में एक भी project failure नहीं।" },
          { english: "We had only ₹2 lakh in initial capital when we started — now we're a ₹50 crore company.", hindi: "शुरुआत में हमारे पास केवल ₹2 लाख की capital थी — अब हम ₹50 करोड़ की company हैं।" },
        ],
      },
    ],

    summary: [
      "HAD = past of HAVE/HAS — same for ALL subjects",
      "Physical: 'I had a car, a house, a bicycle'",
      "Relational: 'She had a great mentor'",
      "Professional: 'I had a team of X at my previous company'",
      "Negative: 'didn't have' (not 'didn't had')",
    ],
  },

  // ── d7-t1-s3: Questions with Had ──
  "d7-t1-s3": {
    whyLearnThis: `"Did you have a good interview?" "Had she ever worked in a startup before?" — Questions with HAD let you inquire about past situations and experiences.\n\nTwo forms:\n1. Did + have (Simple Past): "Did you have a meeting today?"\n2. Had + subject (Past Perfect): "Had they completed the project before the deadline?"\n\nKnowing when to use each will make your questions precise and professional.`,

    conceptExplanation: `QUESTIONS WITH HAD — TWO TYPES:\n\n📌 TYPE 1: DID + HAVE (Simple Past Questions):\nFor asking about past possession or experience:\nFormula: Did + Subject + Have + Object?\n\n• "Did you have a good experience at the conference?"\n• "Did she have all the necessary documents?"\n• "Did they have a backup plan?"\n• "Did he have the authority to approve it?"\n\nShort answers:\n"Yes, I did." / "No, I didn't."\n"Yes, she did." / "No, she didn't."\n\n📌 TYPE 2: HAD + SUBJECT (Past Perfect Questions):\nFor asking which past event happened FIRST:\nFormula: Had + Subject + Past Participle?\n\n• "Had she already submitted the report when you called?"\n• "Had they ever worked together before this project?"\n• "Had the team finished Phase 1 before the launch?"\n• "Had you informed the client before making the change?"\n\n📌 WH-QUESTIONS WITH HAD:\nDid + What/When/Where/Why/How:\n• "What did you have for lunch?" (Simple Past)\n• "Why didn't you have the document with you?"\n• "How much did they have in their budget?"\n• "When did she have her interview?"\n\nHad + What/When/Where:\n• "What had happened before you arrived?"\n• "Where had she worked before joining us?"\n• "Why had the project stalled before the new manager took over?"`,

    hindiExplanation: `Had के साथ questions:\n\nType 1: Did + have (Simple Past)\n"Did you have a meeting?" (क्या आपकी meeting थी?)\n"Did she have experience?" (क्या उसके पास experience था?)\n\nShort answer:\n"Yes, I did." / "No, I didn't."\n\nType 2: Had + subject (Past Perfect)\n"Had she finished before he called?" (क्या उसने call से पहले खत्म कर लिया था?)\n"Had they met before this project?" (क्या वे इस project से पहले मिले थे?)\n\nWh-questions:\n"What did you have in your previous job?" (पिछली job में आपके पास क्या था?)\n"Why hadn't they informed us earlier?" (उन्होंने पहले inform क्यों नहीं किया था?)`,

    rules: [
      {
        rule: "'Did + have' for Simple Past questions; 'Had + subject' for Past Perfect questions",
        explanation: "Use 'Did + have' when asking about a specific past time. Use 'Had + subject' when asking about something that happened before another past event.",
        example: "'Did you have a car in college?' (specific past)\n'Had you learned to drive before buying a car?' (before another past event)",
      },
    ],

    commonMistakes: [
      { wrong: "Did you had a meeting?", correct: "Did you have a meeting?", explanation: "After 'did', use base form 'have', not 'had'." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional questions with Had",
        hindiPattern: "Professional questions",
        examples: [
          { english: "Did you have any experience with enterprise software before joining this company?", hindi: "क्या इस company join करने से पहले आपके पास enterprise software का कोई experience था?" },
          { english: "Had the team completed the user research before starting the design phase?", hindi: "क्या team ने design phase शुरू करने से पहले user research complete की थी?" },
          { english: "What challenges did you have while managing such a large and diverse team?", hindi: "इतनी बड़ी और diverse team manage करते समय आपको क्या challenges थे?" },
        ],
      },
    ],

    summary: [
      "Simple Past questions: Did + subject + have? 'Did you have a car?'",
      "Past Perfect questions: Had + subject + V3? 'Had she finished?'",
      "After 'did', use base form 'have' (not 'had')",
      "Short answers: 'Yes, I did.' / 'No, I didn't.'",
      "Wh-questions: 'What did you have?' / 'Why had they not informed us?'",
    ],
  },

  // ── d7-t1-s4: Negatives with Had ──
  "d7-t1-s4": {
    whyLearnThis: `"I didn't have enough time." "She hadn't finished when I called." — Negative sentences with HAD express ABSENCE of possession in the past and INCOMPLETE actions before other past events.\n\nTwo types of negatives:\n1. Didn't have: "I didn't have a computer in school." (Simple Past)\n2. Hadn't + V3: "She hadn't submitted the report before the meeting." (Past Perfect)`,

    conceptExplanation: `NEGATIVES WITH HAD — TWO TYPES:\n\n📌 TYPE 1: DIDN'T HAVE (Simple Past Negative):\nFormula: Subject + didn't have + object\nSame for ALL subjects!\n\n• "I didn't have any experience when I started."\n• "She didn't have the resources she needed."\n• "He didn't have time to review the proposal."\n• "They didn't have a clear strategy in place."\n• "We didn't have the budget to expand."\n\n📌 TYPE 2: HADN'T + V3 (Past Perfect Negative):\nFormula: Subject + hadn't + Past Participle\nFor actions NOT completed before another past event:\n\n• "I hadn't finished the report when she called."\n• "She hadn't received the email before the meeting started."\n• "They hadn't agreed on the terms before the client arrived."\n• "We hadn't anticipated this problem when we made the plan."\n• "He hadn't realized the impact until it was too late."\n\n📌 FORMAL VERSIONS:\n• "I did not have the authority to make that decision."\n• "She had not been informed before the announcement."\n• "We had not received any prior notice."\n\n📌 CONTRAST: DIDN'T HAVE vs HADN'T:\nSimple Past: "I didn't have a car then." (past possession negative)\nPast Perfect: "I hadn't driven before taking the test." (before another past event)\n\nSimple Past: "She didn't have experience." (past possession negative)\nPast Perfect: "She hadn't worked in tech before joining us." (before joining = another past event)"`,

    hindiExplanation: `Negatives with Had:\n\nType 1: Didn't have (Simple Past negative)\n"I didn't have money." (मेरे पास पैसे नहीं थे।)\n"She didn't have experience." (उसके पास experience नहीं था।)\nAll subjects: didn't have (uniform!)\n\nType 2: Hadn't + V3 (Past Perfect negative)\n"I hadn't finished when she called." (जब उसने call किया, मैंने खत्म नहीं किया था।)\n"They hadn't submitted before the deadline." (Deadline से पहले उन्होंने submit नहीं किया था।)\n\nDifference:\nDidn't have = possession नहीं था\nHadn't + V3 = कोई action दूसरे past से पहले complete नहीं हुई थी`,

    rules: [
      {
        rule: "Didn't have = Simple Past negative for possession; Hadn't + V3 = Past Perfect negative for sequence",
        explanation: "'Didn't have' negates a past state or possession. 'Hadn't + V3' negates an action that should have been completed before another past action.",
        example: "'She didn't have a car.' (possession negative)\n'She hadn't driven a car before her test.' (action not completed before another past event)",
      },
    ],

    commonMistakes: [
      { wrong: "I hadn't no money.", correct: "I didn't have any money. / I had no money.", explanation: "Don't use double negative ('hadn't no'). Use 'didn't have any' or 'had no'." },
      { wrong: "She hadn't submitted it yesterday.", correct: "She didn't submit it yesterday.", explanation: "Past Perfect with specific past times (yesterday) doesn't work — use Simple Past instead." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional negative HAD sentences",
        hindiPattern: "Professional negatives",
        examples: [
          { english: "I didn't have any professional network when I started my career — I built it entirely from scratch.", hindi: "जब मैंने career शुरू किया था, मेरे पास कोई professional network नहीं था — मैंने इसे scratch से build किया।" },
          { english: "She hadn't realized the severity of the situation until she reviewed the quarterly numbers.", hindi: "Quarterly numbers review करने तक उसे situation की गंभीरता का एहसास नहीं था।" },
          { english: "They hadn't completed the due diligence before signing the agreement, which led to complications.", hindi: "Agreement sign करने से पहले उन्होंने due diligence complete नहीं की थी, जिससे complications आईं।" },
        ],
      },
    ],

    summary: [
      "Didn't have = Simple Past negative for possession ('I didn't have a car')",
      "Hadn't + V3 = Past Perfect negative for sequence ('I hadn't finished when...')",
      "'Didn't have' is uniform for all subjects",
      "Don't use double negatives: 'hadn't no money' → 'didn't have any money'",
      "With specific past times (yesterday): use Simple Past 'didn't have'",
    ],
  },

  // ── d7-t2-s1: Introduction to Past Perfect ──
  "d7-t2-s1": {
    whyLearnThis: `"When I arrived, she had already left." "He applied for the job because he had gained enough experience." — Past Perfect is the tense that expresses TIME SEQUENCE between two past events.\n\nWithout Past Perfect, your stories and explanations lack clarity:\n"I arrived. She left." (Which happened first? We don't know!)\n"When I arrived, she had already left." (Clear! She left BEFORE I arrived.)\n\nPast Perfect is essential for:\n✓ Storytelling: "By the time the police arrived, the thief had escaped."\n✓ Explaining: "We failed because we hadn't planned properly."\n✓ Interview answers: "I had worked at three startups before joining this company."`,

    conceptExplanation: `PAST PERFECT — INTRODUCTION:\n\nFormula: Subject + had + Past Participle (V3)\n\nHAD is the same for ALL subjects (same as simple past possession)!\nI had finished | She had submitted | They had arrived\n\n📌 THE CORE CONCEPT:\nPast Perfect = "EARLIER PAST" (happened before another past event)\n\nTimeline thinking:\nPAST (later event) ← → FURTHER PAST (earlier event) ← → NOW\n\nExample:\n"She arrived at 5 PM." (later past event)\n"I had already left by 5 PM." (earlier past event)\n→ "By the time she arrived, I had already left."\n\n📌 WHEN TO USE PAST PERFECT:\n1. To show which of two past events happened FIRST:\n"When he called, I had already submitted the report."\n(Submit = first | Call = second, later)\n\n2. To explain the REASON for a past situation:\n"She got the job because she had studied hard for months."\n(Studied = first reason | Got job = result, later)\n\n3. With time expressions:\nbefore, after, when, by the time, until, as soon as\n"By the time I reached the airport, the flight had departed."\n"After she had reviewed the document, she signed it."\n"He hadn't finished when the deadline arrived."\n\n4. To describe unfulfilled wishes/regrets:\n"I wish I had taken that opportunity when I had it."\n"If only she had known earlier, she could have prepared."`,

    hindiExplanation: `Past Perfect = दो past events में से जो पहले हुआ\n\nFormula: Subject + had + V3\n(सबके लिए same: I had, she had, they had)\n\nConcept:\n1st event (पहले) → Past Perfect\n2nd event (बाद में) → Simple Past\n\nExample:\n"जब वह आई, मैं जा चुका था।"\n"When she came, I had already left."\n\nShe came = Simple Past (बाद की घटना)\nI had left = Past Perfect (पहले की घटना)\n\nKey words:\nBy the time = जब तक | Before = से पहले | After = के बाद | When = जब\n\n"By the time the meeting started, I had prepared all the slides."\n(Meeting = simple past | Slides prepare = past perfect, happened first)`,

    rules: [
      {
        rule: "Use Past Perfect for the EARLIER of two past events",
        explanation: "When two things happened in the past, use Past Perfect for whichever happened FIRST. The second (later) event uses Simple Past.",
        example: "'When I arrived (simple past), the meeting had already started (past perfect — started first).\n'She got the promotion (simple past) because she had worked (past perfect — worked first) incredibly hard.'",
      },
    ],

    commonMistakes: [
      { wrong: "When she had arrived, I left.", correct: "When she arrived, I had already left.", explanation: "The earlier event uses Past Perfect. 'Left' happened before she arrived — so 'had left' is the Past Perfect." },
      { wrong: "I had eaten before going to office yesterday.", correct: "I had eaten before going to the office yesterday.", explanation: "Grammar is correct. But 'yesterday' with Past Perfect is fine when describing sequence: 'I had eaten before I went to the office yesterday.'" },
    ],

    sentencePatterns: [
      {
        pattern: "Past Perfect for sequence of events",
        hindiPattern: "Events की sequence",
        examples: [
          { english: "By the time the manager arrived, the team had already completed the entire presentation.", hindi: "Manager के आने तक team पूरी presentation complete कर चुकी थी।" },
          { english: "She was so confident in the interview because she had prepared for weeks beforehand.", hindi: "Interview में वह इतनी confident थी क्योंकि उसने पहले हफ्तों तक तैयारी की थी।" },
          { english: "When they called to offer me the position, I had already accepted another offer.", hindi: "जब उन्होंने position offer करने के लिए call किया, मैं पहले से ही एक और offer accept कर चुका/चुकी था/थी।" },
        ],
      },
    ],

    summary: [
      "Past Perfect = earlier of two past events",
      "Formula: had + V3 (same for all subjects)",
      "Earlier event = Past Perfect | Later event = Simple Past",
      "Key time words: by the time, when, before, after, until",
      "Also used for: explaining reasons, regrets, unfulfilled past wishes",
    ],
  },

  // ── d7-t2-s2: Had + Past Participle Formula ──
  "d7-t2-s2": {
    whyLearnThis: `"She had eaten." "They had decided." "I had worked." — The formula HAD + V3 (Past Participle) creates Past Perfect sentences.\n\nWith this formula plus 50+ example sentences, you'll be able to express complex time sequences naturally in English — the hallmark of advanced fluency!`,

    conceptExplanation: `HAD + PAST PARTICIPLE — FULL FORMULA WITH EXAMPLES:\n\n📌 FORMULA: Subject + had + V3\n(HAD is same for ALL subjects)\n\nPositive:\n"I had submitted the report."\n"She had completed her MBA."\n"They had signed the contract."\n\nNegative:\n"I hadn't finished when he called."\n"She hadn't received the brief."\n"They hadn't agreed on terms."\n\nQuestion:\n"Had you met him before?"\n"Had she reviewed the document?"\n"Had they prepared for the questions?"\n\n📌 50 EXAMPLE SENTENCES:\n\nProfessional:\n1. "By the time I joined, they had already built a strong client base."\n2. "She was confident because she had researched the company thoroughly."\n3. "The project failed because we hadn't defined clear objectives."\n4. "When the client called, I had just finished the report."\n5. "He got promoted because he had consistently delivered excellent results."\n6. "By the end of 2023, the company had expanded to 15 cities."\n7. "She took over the role after the previous manager had resigned."\n8. "I hadn't used this software before joining this team."\n9. "They had invested ₹10 crore before realizing the market wasn't ready."\n10. "Before the merger, both companies had maintained separate client databases."\n\nPersonal / Daily life:\n11. "When I arrived at the railway station, the train had already left."\n12. "She had never driven on the highway before that trip."\n13. "I had learned 500 English words before starting this course."\n14. "By the time he called back, I had already solved the problem."\n15. "She had cooked dinner before anyone else came home."`,

    hindiExplanation: `Had + V3 formula:\n\nFormula: Subject + had + V3 (past participle)\n\nRegular V3 (just +ed):\n"She had finished the work."\n"I had submitted the form."\n"They had completed the project."\n\nIrregular V3:\n"I had gone to the office." (go → gone)\n"She had spoken with the client." (speak → spoken)\n"He had written the report." (write → written)\n"We had eaten before the meeting." (eat → eaten)\n\nNegative: hadn't + V3\n"I hadn't finished when she called."\n"She hadn't spoken to him before."\n\nQuestion: Had + subject + V3?\n"Had you met him before?"\n"Had she finished the report?"`,

    rules: [
      {
        rule: "HAD in Past Perfect is always 'had' — never 'haved' or any other form",
        explanation: "In Past Perfect, 'had' is an auxiliary (helping) verb. It's always 'had' regardless of subject (I had, she had, they had). Then the main verb must be in V3 (past participle) form.",
        example: "✅ I had gone / She had spoken / They had finished / We had submitted\n❌ I haved gone / She hads spoken / They hadn't spoke (should be 'spoken')",
      },
    ],

    commonMistakes: [
      { wrong: "She had spoke to him.", correct: "She had spoken to him.", explanation: "V3 of 'speak' is 'spoken', not 'spoke' (that's Simple Past)." },
      { wrong: "Had they finished before I arrived?", correct: "Had they finished before I arrived?", explanation: "This is actually correct! Past Perfect question: Had + subject + V3?" },
    ],

    sentencePatterns: [
      {
        pattern: "Professional Past Perfect sentences",
        hindiPattern: "Professional Past Perfect",
        examples: [
          { english: "By the time she joined the leadership team, she had already led two successful product launches.", hindi: "Leadership team में join करने तक, वह पहले ही दो successful product launches lead कर चुकी थी।" },
          { english: "We hadn't anticipated the market shift when we made our 5-year plan.", hindi: "जब हमने 5-year plan बनाया था, हमने market shift की anticipate नहीं की थी।" },
          { english: "He had worked at three Fortune 500 companies before starting his own firm.", hindi: "अपनी firm शुरू करने से पहले उसने तीन Fortune 500 companies में काम किया था।" },
        ],
      },
    ],

    summary: [
      "Formula: had (same for all) + V3 (past participle)",
      "Positive: 'She had completed' | Negative: 'I hadn't finished'",
      "Question: 'Had they prepared?' | Short answer: 'Yes, they had. / No, they hadn't.'",
      "Common V3: gone, spoken, written, eaten, done, seen, finished, submitted",
      "Practice: Write 5 original Past Perfect sentences about your own life",
    ],
  },

  // ── d7-t2-s3: Before and After — Sequence of Past Events ──
  "d7-t2-s3": {
    whyLearnThis: `"Before the client arrived, I had reviewed all the files." "After she had submitted the proposal, the company rejected it." — Expressing sequence of past events is a mark of advanced English proficiency!\n\nThis skill lets you:\n✓ Tell precise, engaging stories\n✓ Write clear professional reports and emails\n✓ Answer interview questions with specific examples\n✓ Explain cause and effect in the past`,

    conceptExplanation: `SEQUENCE OF PAST EVENTS — PATTERNS:\n\n📌 BEFORE + SIMPLE PAST / PAST PERFECT:\n"Before she LEFT, she HAD SUBMITTED the report." (Before + simple past | Main clause = past perfect)\nOR: "She HAD SUBMITTED the report before she LEFT." (Main clause = past perfect | Before + simple past)\n\n📌 AFTER + PAST PERFECT / SIMPLE PAST:\n"After she HAD REVIEWED the document, she SIGNED it." (After + past perfect | Main clause = simple past)\nORDER: Review (earlier, past perfect) → Sign (later, simple past)\n\n📌 WHEN + SIMPLE PAST / PAST PERFECT:\n"When I ARRIVED, she HAD ALREADY LEFT." (When + simple past | Main = past perfect)\nHad left = happened BEFORE arriving\n\n📌 BY THE TIME + SIMPLE PAST / PAST PERFECT:\n"By the time the meeting STARTED, I HAD FINISHED the analysis."\n(By the time + simple past | HAD FINISHED = happened before meeting started)\n\n📌 AS SOON AS + PAST PERFECT / SIMPLE PAST:\n"As soon as she HAD RECEIVED the briefing, she STARTED working."\n\n📌 REAL-LIFE EXAMPLES:\n1. "Before the product launched, the team had tested it over 500 times."\n2. "When the manager arrived, half the team had already gone home."\n3. "After she had worked at 3 startups, she finally got the corporate job she wanted."\n4. "By the time they secured funding, they had spent two years developing the prototype."\n5. "As soon as the data had been analyzed, the decision was made to pivot the strategy."`,

    hindiExplanation: `Sequence of past events:\n\nTwo types of clauses:\nSimple Past = बाद में हुई घटना\nPast Perfect = पहले हुई घटना\n\nPatterns:\n"When she arrived (simple past), I had already left (past perfect)."\n= जब वह आई, मैं पहले ही जा चुका था।\n\n"Before he called (simple past), I had finished (past perfect)."\n= उसके call करने से पहले मैं खत्म कर चुका था।\n\n"After she had reviewed (past perfect), she signed it (simple past)."\n= Review करने के बाद उसने sign किया।\n\n"By the time the meeting started (simple past), we had prepared (past perfect) everything."\n= Meeting शुरू होने तक हम सब तैयार कर चुके थे।`,

    rules: [
      {
        rule: "The earlier event takes Past Perfect; the later event takes Simple Past",
        explanation: "Think of it as a timeline: Past Perfect shows the FIRST event; Simple Past shows the SECOND event. The time words (before, when, by the time) connect them.",
        example: "Timeline: Event 1 (earlier) → Event 2 (later)\n'Before I arrived, she had finished.' → Finish (Past Perfect) = Event 1 | Arrive (Simple Past) = Event 2",
      },
    ],

    commonMistakes: [
      { wrong: "When I arrived, she already left.", correct: "When I arrived, she had already left.", explanation: "The earlier event (leaving) needs Past Perfect: 'had already left'." },
    ],

    sentencePatterns: [
      {
        pattern: "Complex Past Perfect sequence sentences",
        hindiPattern: "Complex sequence sentences",
        examples: [
          { english: "By the time the investor meeting began, we had refined the pitch deck over 30 times.", hindi: "Investor meeting शुरू होने तक, हम pitch deck को 30 से ज़्यादा बार refine कर चुके थे।" },
          { english: "After she had spent 5 years building the product, the market finally validated her vision.", hindi: "Product build करने में 5 साल बिताने के बाद, market ने finally उसकी vision को validate किया।" },
          { english: "When the quarterly review happened, the team had already exceeded all their targets.", hindi: "Quarterly review के समय, team अपने सभी targets पहले ही exceed कर चुकी थी।" },
        ],
      },
    ],

    summary: [
      "Earlier event = Past Perfect (had + V3)",
      "Later event = Simple Past (verb-ed or irregular past)",
      "Time connectors: before, after, when, by the time, as soon as, until",
      "Practice: tell a story about your career with 5 Past Perfect sentences",
      "This is advanced English — mastering it makes you sound highly fluent!",
    ],
  },

  // ── d7-t2-s4: Past Perfect in Conversations ──
  "d7-t2-s4": {
    whyLearnThis: `Natural conversations also use Past Perfect — not just written English!\n\n"I had never worked from home before COVID."\n"Had you met her before the conference?"\n"I was exhausted — I had been working for 12 hours straight."\n\nPast Perfect in conversation sounds sophisticated and adds depth to your English stories and explanations.`,

    conceptExplanation: `PAST PERFECT IN NATURAL CONVERSATIONS:\n\n📌 COMMON CONVERSATIONAL PATTERNS:\n\nSharing experience:\n"I had never used Slack before joining this company — now I use it all day!"\n"She had never managed a remote team before 2020."\n\nExplaining a result:\n"I got the promotion because I had consistently delivered results for 3 years."\n"She moved to Bangalore because she had found her dream job there."\n\nTelling stories:\n"So, by the time I reached the venue, the event had already started!"\n"When I called to apologize, he had already heard the news from someone else."\n\nExpressing regrets:\n"I wish I had known about this opportunity earlier."\n"If only I had prepared better — I might have got the job."\n"He regretted that he hadn't taken that chance when it was available."\n\nAnswering interview questions:\n"Before this role, I had managed 3 product launches successfully."\n"By the time I completed my certification, I had already applied to 15 companies."\n\n📌 CONVERSATIONAL SHORT FORMS:\n"I'd already told her." (I had = I'd)\n"She'd finished by then." (She had = She'd)\n"They'd never seen this before." (They had = They'd)\n"He hadn't expected that reaction." (had not = hadn't)`,

    hindiExplanation: `Conversational Past Perfect:\n\nContraction: had = 'd\n"I had finished." → "I'd finished."\n"She had gone." → "She'd gone."\n"They had decided." → "They'd decided."\n\nCommon conversation sentences:\n"I had never seen snow before going to Shimla." (पहले कभी बर्फ नहीं देखी थी)\n"By the time I reached, they had already left." (जब पहुँचा, वे जा चुके थे)\n"I wish I had studied harder." (काश मैंने ज़्यादा पढ़ा होता)\n\nInterview answers:\n"Before this job, I had managed..." (इस job से पहले, मैंने... manage किया था)\n"I had already completed my certification when I applied." (Apply करते समय, मेरी certification पहले ही complete थी)`,

    rules: [
      {
        rule: "In conversational English, 'had' is often contracted to 'd",
        explanation: "In spoken English, 'had' is commonly shortened: 'I'd finished', 'She'd left', 'They'd decided'. This sounds more natural in conversation than always saying the full 'had'.",
        example: "Formal: 'I had submitted the report by then.' | Conversational: 'I'd already submitted it by then.'",
      },
    ],

    commonMistakes: [
      { wrong: "I wish I studied harder.", correct: "I wish I had studied harder.", explanation: "For past regrets/unfulfilled wishes, use 'I wish I had + V3'." },
    ],

    sentencePatterns: [
      {
        pattern: "Natural conversational Past Perfect",
        hindiPattern: "Conversational Past Perfect",
        examples: [
          { english: "By the time we realized our approach wasn't working, we'd already spent half the budget.", hindi: "जब तक हमें एहसास हुआ कि हमारा approach काम नहीं कर रहा था, हम already आधा budget खर्च कर चुके थे।" },
          { english: "I wish I'd taken that opportunity when it was offered — it would have changed everything.", hindi: "काश मैंने वह opportunity तब ले ली होती जब offer हुई थी — सब कुछ बदल जाता।" },
          { english: "Before I applied, I'd spoken with three people who'd worked there — all had great things to say.", hindi: "Apply करने से पहले, मैंने वहाँ काम करने वाले तीन लोगों से बात की थी — सभी ने बहुत अच्छी बातें बताई थीं।" },
        ],
      },
    ],

    summary: [
      "Past Perfect in conversation: adding depth and sophistication to stories",
      "Contraction: I had = I'd | She had = She'd | They had = They'd",
      "Regrets: 'I wish I had...' 'If only she had...'",
      "Interview answers: 'Before this role, I had...'",
      "Storytelling: 'By the time I arrived, they had already...'",
    ],
  },

  // ── d7-t3-s1: Talking About Past Experiences ──
  "d7-t3-s1": {
    whyLearnThis: `"I had an amazing time at the conference." "She had a difficult start but overcame it beautifully." "We had some incredible learning experiences that year." — Past experiences form the backbone of English storytelling and professional conversations!\n\nIn interviews, networking events, and personal conversations, you constantly talk about past experiences. HAD is your primary tool for this.`,

    conceptExplanation: `TALKING ABOUT PAST EXPERIENCES WITH HAD:\n\n📌 POSITIVE EXPERIENCES:\n• "I had a wonderful experience working at that startup."\n• "She had an exceptional career at her previous company."\n• "We had the best team I've ever worked with."\n• "They had a brilliant run in 2022 — their best year ever."\n\n📌 CHALLENGING EXPERIENCES:\n• "It was difficult — we had major funding challenges in the first year."\n• "She had a very steep learning curve when she joined."\n• "I had some setbacks early in my career, but they made me stronger."\n• "We had communication issues across time zones that we had to resolve."\n\n📌 FORMATIVE EXPERIENCES (experiences that shaped you):\n• "I had a mentor who completely changed my perspective on leadership."\n• "She had a transformative experience at a women's leadership program."\n• "That failure was the best thing that happened — I had to rethink everything."\n\n📌 PROFESSIONAL EXPERIENCE VOCABULARY:\nhad a great time, had challenges, had setbacks, had success, had the opportunity to, had no choice but to, had a chance to, had an incredible run, had tough times, had a clear vision\n\n📌 STORYTELLING TEMPLATE:\n"In [year/time period], I had [experience]. At that time, we/I had [situation]. This experience taught me [lesson/skill]. Since then, I have [current result]."\n\nExample:\n"In 2019, I had my first leadership role. At that time, I had very little management experience. This experience taught me how to motivate people and manage conflict. Since then, I have led teams of up to 50 people successfully."`,

    hindiExplanation: `Past experiences describe करना:\n\nPositive:\n"I had a great experience." (मुझे बहुत अच्छा experience हुआ।)\n"She had an amazing career." (उसका career बेहतरीन था।)\n\nChallenging:\n"I had many challenges." (मुझे बहुत challenges थे।)\n"We had a difficult time." (हमारा बुरा वक्त था।)\n\nFormative (जो आपको बदल दे):\n"I had a mentor who changed everything." (मेरे पास एक ऐसा mentor था जिसने सब बदल दिया।)\n\nStorytelling template:\n"In [year], I had [experience]. This taught me [lesson]."\n"2019 में मुझे [experience] हुआ। इससे मुझे [lesson] सीखा।"`,

    rules: [
      {
        rule: "Past experience stories use both HAD (experience) and Simple Past (events) together",
        explanation: "In past experience stories, 'had' describes the state/situation ('I had a mentor'), while simple past verbs describe specific events ('He taught me', 'We met weekly', 'He guided me').",
        example: "'I had an amazing mentor [HAD = state]. He taught me [Simple Past = action] how to think strategically. We met [Simple Past] every week for two years.'",
      },
    ],

    commonMistakes: [
      { wrong: "I had a great time at conference last week.", correct: "I had a great time at the conference last week.", explanation: "Specific events often need 'the' article: 'the conference', 'the meeting', 'the event'." },
    ],

    sentencePatterns: [
      {
        pattern: "Past experience storytelling",
        hindiPattern: "Past experience stories",
        examples: [
          { english: "Early in my career, I had almost no resources — no team, no budget, no established processes. But we built something remarkable from nothing.", hindi: "Career की शुरुआत में, मेरे पास लगभग कोई resources नहीं थे — कोई team नहीं, budget नहीं, established processes नहीं। लेकिन हमने scratch से कुछ remarkable बनाया।" },
          { english: "She had the most challenging project of her career in 2021, but it became her biggest achievement.", hindi: "2021 में उसके career का सबसे challenging project था, लेकिन वह उसकी सबसे बड़ी achievement बन गई।" },
          { english: "I had the privilege of working with some of the brightest minds in the industry early in my career.", hindi: "Career की शुरुआत में मुझे industry के कुछ सबसे brilliant minds के साथ काम करने का privilege मिला।" },
        ],
      },
    ],

    summary: [
      "HAD describes the experience/state: 'I had a great opportunity'",
      "Simple Past describes specific events within the experience",
      "Positive: had a great time, had success, had an incredible run",
      "Challenging: had setbacks, had difficulties, had to start over",
      "Storytelling template: 'In [time], I had [experience]. This taught me [lesson].'",
    ],
  },

  // ── d7-t3-s2: Had in Storytelling ──
  "d7-t3-s2": {
    whyLearnThis: `The best storytellers in English use Past Perfect naturally. "Once there was a girl who had a dream." "There was a startup that had nothing but a great idea and a dedicated team." — HAD in storytelling creates rich, immersive narratives!\n\nMastering storytelling with HAD will help you:\n✓ Give compelling interview answers (STAR method)\n✓ Write engaging professional bios\n✓ Tell business stories that inspire and persuade\n✓ Connect with English-speaking audiences`,

    conceptExplanation: `HAD IN STORYTELLING — THE STAR METHOD:\n\nSituation — Task — Action — Result\n\n📌 SETTING THE SCENE (HAD for background):\n"It was [time]. Our company had [situation]. We had [resources/challenges]."\n\nExample:\n"It was 2020. Our company had just lost 40% of its revenue due to the pandemic. We had a team of 50 people and very little cash runway. I had to make the most difficult decision of my career."\n\n📌 BUILDING TENSION (HAD + Past Perfect for prior events):\n"Before this crisis, we had built a stable business over 7 years. We had never faced anything like this before."\n\n📌 THE ACTION (Simple Past for specific steps):\n"I called an all-hands meeting. I was transparent about the situation. We decided to pivot our model."\n\n📌 THE RESULT (Present Perfect for current state):\n"Since then, we have grown 3x. We have launched two new product lines. And every team member who stayed has been rewarded with equity."\n\n📌 CLASSIC STORYTELLING PHRASES WITH HAD:\n"Once upon a time, there was a [person] who had [quality/situation]..."\n"By the time [event happened], she had already [earlier action]..."\n"He had always [belief/dream], so when [opportunity], he [action]..."\n"She had spent [X years] doing [thing] before finally [breakthrough]..."`,

    hindiExplanation: `Storytelling में HAD:\n\nScene set करना:\n"It was [year]. I had a team of [X] people. We had [situation]."\n"[Year] था। मेरी [X] लोगों की team थी। हमारे पास [situation] था।"\n\nPast Perfect background:\n"Before this, I had worked at three companies."\n"इससे पहले, मैंने तीन companies में काम किया था।"\n\nAction (simple past):\n"I decided to change the approach."\n"मैंने approach बदलने का फैसला किया।"\n\nResult (present perfect):\n"Since then, we have grown significantly."\n"तब से हम काफी grow कर चुके हैं।"\n\nStory template:\n"[Year] में, [situation + HAD]. इससे पहले [background + Past Perfect]. तब मैंने [action + Simple Past]. आज [result + Present Perfect]."`,

    rules: [
      {
        rule: "Effective storytelling combines HAD (background) + Simple Past (action) + Present Perfect (result)",
        explanation: "This three-part structure is the foundation of great English storytelling and interview answers: set the scene with HAD, describe actions in Simple Past, show current results with Present Perfect.",
        example: "BACKGROUND (HAD): 'We had a struggling business in 2019.' ACTION (Simple Past): 'We pivoted our model.' RESULT (Present Perfect): 'Since then, we have tripled our revenue.'",
      },
    ],

    commonMistakes: [
      { wrong: "He had always wanted to become an engineer, and he became one.", correct: "He had always wanted to become an engineer, and he did become one.", explanation: "When emphasizing fulfillment of a past desire, 'did become' adds special emphasis." },
    ],

    sentencePatterns: [
      {
        pattern: "Complete business storytelling",
        hindiPattern: "Business story",
        examples: [
          { english: "In 2018, I had a clear vision but almost no resources. Before that, I had spent 10 years in corporate roles. I decided to take the leap. Today, we have built a team of 200 and are profitable.", hindi: "2018 में, मेरे पास एक clear vision थी लेकिन लगभग कोई resources नहीं थे। पहले मैंने 10 साल corporate roles में बिताए थे। मैंने leap लेने का फैसला किया। आज, हमने 200 लोगों की team build की है और हम profitable हैं।" },
        ],
      },
    ],

    summary: [
      "Background: HAD + situation ('The company had very little revenue')",
      "Prior events: Past Perfect ('Before this, we had tried three different models')",
      "Actions: Simple Past ('We pivoted. We hired. We launched.')",
      "Results: Present Perfect ('Since then, we have grown 5x')",
      "STAR method: Situation (HAD) + Task (HAD to) + Action (Simple Past) + Result (Present Perfect)",
    ],
  },

  // ── d7-t3-s3: Professional Usage of Had ──
  "d7-t3-s3": {
    whyLearnThis: `"I had already sent the email before the meeting." "She had completed the analysis by the time the client called." — Professional English uses Past Perfect constantly for reporting, updating, and explaining workplace events.\n\nIn workplace communication, HAD helps you:\n✓ Report past actions in order: "By EOD, I had completed X, Y, and Z."\n✓ Explain context in meetings: "By the time this issue arose, we had already tested it thoroughly."\n✓ Write professional reports: "The team had delivered all milestones on schedule."`,

    conceptExplanation: `PROFESSIONAL USAGE OF HAD:\n\n📌 IN MEETING UPDATES:\n"By the time yesterday's meeting started, I had already reviewed all the materials."\n"When the client called, I had just finished the analysis."\n"Before the board presentation, the team had rehearsed five times."\n\n📌 IN EMAILS:\n"I had sent you the updated version before this email — please check your inbox."\n"As discussed, by the time of the audit, all required documents had been submitted."\n"She had already confirmed the timeline before the miscommunication occurred."\n\n📌 IN REPORTS:\n"By Q3, the team had exceeded all performance metrics by 15%."\n"Before the restructuring, the department had operated with a different model."\n"The project had encountered three major delays before the final delivery."\n\n📌 IN PERFORMANCE REVIEWS:\n"By the end of the year, she had led three successful product launches."\n"He had consistently maintained a 98% delivery rate throughout the project."\n"Before taking on leadership, she had already demonstrated strong strategic thinking."\n\n📌 IN PRESENTATIONS:\n"As you can see from this slide, by Q4, we had achieved all our targets."\n"Before this innovation, the industry had relied on traditional methods for decades."\n"By the time this solution was launched, competing products had already started losing market share."`,

    hindiExplanation: `Professional context में HAD:\n\nMeeting updates:\n"By the time the meeting started, I had reviewed everything."\n"Meeting शुरू होने तक, मैंने सब review कर लिया था।"\n\nEmails:\n"I had sent the document before you emailed me."\n"आपके email से पहले मैं document भेज चुका था।"\n\nReports:\n"By Q3, the team had exceeded targets."\n"Q3 तक team ने targets exceed कर लिए थे।"\n\nPerformance review:\n"She had led three projects successfully."\n"उसने तीन projects successfully lead किए थे।"`,

    rules: [
      {
        rule: "In professional writing, Past Perfect adds precision to timeline of events",
        explanation: "Using Past Perfect in reports and updates makes it crystal clear which actions were completed before specific deadlines or events. This precision is highly valued in professional communication.",
        example: "Vague: 'We sent the report before the deadline.' | Precise: 'We had already submitted the final report by the deadline, three days ahead of schedule.'",
      },
    ],

    commonMistakes: [
      { wrong: "By EOD, I have completed all tasks.", correct: "By EOD, I had completed all tasks.", explanation: "When reporting past events before a past deadline, use Past Perfect ('had completed'), not Present Perfect ('have completed')." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional Past Perfect reporting",
        hindiPattern: "Professional reporting",
        examples: [
          { english: "By the time the audit began, all financial records had been meticulously organized and cross-verified.", hindi: "Audit शुरू होने तक, सभी financial records को meticulous तरीके से organize और cross-verify किया जा चुका था।" },
          { english: "She had built strong relationships with every key stakeholder before formally assuming the leadership role.", hindi: "Leadership role formally संभालने से पहले, उसने हर key stakeholder के साथ strong relationships build कर ली थीं।" },
          { english: "Before the merger was announced, the teams had been collaborating informally for over six months.", hindi: "Merger announce होने से पहले, teams छह महीने से ज़्यादा समय से informally collaborate कर रही थीं।" },
        ],
      },
    ],

    summary: [
      "Past Perfect in professional reports: 'The team had delivered all milestones'",
      "In meeting updates: 'By the time the meeting started, I had...'",
      "In emails: 'I had sent the document before your email'",
      "In performance reviews: 'She had led three successful projects'",
      "Key phrase: 'By [deadline/event], [subject] had [V3]...'",
    ],
  },

  // ── d7-t4-s1: Past States and Conditions ──
  "d7-t4-s1": {
    whyLearnThis: `"She had been very happy in her previous job." "I had been so stressed before the interview." "They had been the market leader for a decade." — Past states describe HOW THINGS WERE at some point in the past.\n\nUsing 'had been' (Past Perfect with Be Verb) adds sophistication and describes situations that existed before other past events.`,

    conceptExplanation: `PAST STATES WITH HAD BEEN:\n\nFormula: Subject + had been + Adjective/Noun/Preposition\n\n📌 HAD BEEN + ADJECTIVE:\n"She had been very nervous before the presentation."\n"I had been so tired that I fell asleep immediately."\n"They had been very successful before the market crashed."\n"He had been the top performer for three consecutive years."\n"The system had been stable until the update caused issues."\n\n📌 HAD BEEN + NOUN:\n"She had been the team lead for 5 years before her promotion."\n"He had been a teacher before switching to corporate training."\n"They had been our top clients until the competitor poached them."\n"I had been a solo founder before my co-founder joined."\n\n📌 HAD BEEN + PREPOSITION (LOCATION):\n"She had been in Singapore for two years before returning to India."\n"He had been at the conference when the news broke."\n"They had been on the project for months before it was cancelled."\n\n📌 HAD BEEN + -ING (PAST PERFECT CONTINUOUS):\n"I had been working on this project for 6 months before the client suddenly cancelled."\n"She had been waiting for this opportunity her entire career."\n"They had been developing the product for two years when the funding ran out."`,

    hindiExplanation: `Had been = पहले किसी अवस्था में था/थी\n\nHad been + adjective:\n"She had been nervous." (वह nervous थी — किसी event से पहले)\n"I had been tired." (मैं थका/थकी था/थी)\n\nHad been + noun (profession):\n"He had been a teacher." (वह teacher था — पहले)\n"She had been the manager." (वह manager थी — पहले)\n\nHad been + -ing (continuous):\n"I had been working for hours before the break." (Break से पहले मैं घंटों से काम कर रहा था।)\n"She had been waiting for this opportunity." (वह इस opportunity का इंतज़ार कर रही थी।)`,

    rules: [
      {
        rule: "'Had been' = past state before another past event",
        explanation: "'Had been' is Past Perfect of 'Be Verb'. Use it to describe what the state WAS before some other past event changed it.",
        example: "'She had been nervous before the presentation.' (nervous = past state; presentation = later past event that changed the state)\n'He had been the top performer for 3 years before his burnout.' (top performer = past state; burnout = change event)",
      },
    ],

    commonMistakes: [
      { wrong: "I had been tired, so I slept.", correct: "I was tired, so I slept. OR I had been so tired that I fell asleep immediately.", explanation: "For simple cause and effect in the past, Simple Past is enough: 'I was tired, so I slept.' Past Perfect is for SEQUENCE (one before another)." },
    ],

    sentencePatterns: [
      {
        pattern: "Had been for past states",
        hindiPattern: "Past states with had been",
        examples: [
          { english: "She had been the company's top salesperson for 5 years before she moved to management.", hindi: "Management में आने से पहले वह 5 साल तक company की top salesperson थी।" },
          { english: "The relationship with the client had been excellent until the delivery delays began.", hindi: "Delivery delays शुरू होने तक client के साथ relationship excellent थी।" },
          { english: "I had been nervous about the interview for weeks — but once it started, I felt completely at ease.", hindi: "मैं हफ्तों से interview को लेकर nervous था/थी — लेकिन जैसे ही शुरू हुआ, मुझे बिल्कुल ease feel हुई।" },
        ],
      },
    ],

    summary: [
      "'Had been + adjective' = past state before another past event",
      "'Had been + noun' = past role/identity before a change",
      "'Had been + -ing' = ongoing activity before another past event (Past Perfect Continuous)",
      "Examples: 'had been nervous', 'had been the manager', 'had been working'",
      "Use when the state CHANGED due to another past event",
    ],
  },

  // ── d7-t4-s2: Common Past Participles (V3) List ──
  "d7-t4-s2": {
    whyLearnThis: `The Past Participle (V3) is used in FOUR critical structures:\n1. Present Perfect: "I have written."\n2. Past Perfect: "I had written."\n3. Passive Voice: "The letter was written."\n4. Adjective: "Written permission required."\n\nMastering 100 essential V3 forms gives you mastery over four grammar structures at once!`,

    conceptExplanation: `100 ESSENTIAL PAST PARTICIPLES (V3):\n\n📌 COMPLETELY IRREGULAR (Must memorize):\nbe → been | become → become | begin → begun | break → broken\nbring → brought | build → built | buy → bought | catch → caught\nchoose → chosen | come → come | cost → cost | cut → cut\ndeal → dealt | do → done | draw → drawn | drink → drunk\ndrive → driven | eat → eaten | fall → fallen | feel → felt\nfind → found | fly → flown | forget → forgotten | get → gotten/got\ngive → given | go → gone | grow → grown | have → had\nhear → heard | hide → hidden | hit → hit | hold → held\nhurt → hurt | keep → kept | know → known | lead → led\nlearn → learnt/learned | leave → left | lend → lent | let → let\nlie → lain | lose → lost | make → made | mean → meant\nmeet → met | pay → paid | put → put | read → read\nride → ridden | ring → rung | rise → risen | run → run\nsay → said | see → seen | sell → sold | send → sent\nset → set | show → shown | shut → shut | sing → sung\nsit → sat | sleep → slept | speak → spoken | spend → spent\nstand → stood | steal → stolen | swim → swum | take → taken\nteach → taught | tear → torn | tell → told | think → thought\nthrow → thrown | understand → understood | wake → woken | wear → worn\nwin → won | write → written\n\n📌 REGULAR (just add -ed, V3 = V2 = same):\nwork → worked | start → started | finish → finished | submit → submitted\ncomplete → completed | approve → approved | reject → rejected | launch → launched\ndeliver → delivered | review → reviewed | update → updated | develop → developed\nimplement → implemented | achieve → achieved | increase → increased | improve → improved`,

    hindiExplanation: `100 essential V3 forms याद करो!\n\nSabse important irregular V3:\nGo → Gone: "I have gone." "I had gone."\nSee → Seen: "I have seen." "I had seen."\nDo → Done: "I have done it." "It had been done."\nEat → Eaten: "I have eaten." "She had eaten."\nWrite → Written: "I have written." "The letter had been written."\nSay → Said: "She has said." "He had said."\nSpeak → Spoken: "I have spoken." "She had spoken."\nTake → Taken: "I have taken." "The job had been taken."\nGive → Given: "I have given." "It had been given."\nKnow → Known: "I have known him." "She had known this."\n\nMemory tip: Learn V1 → V2 → V3 together:\nGo → Went → Gone\nSee → Saw → Seen\nEat → Ate → Eaten`,

    rules: [
      {
        rule: "Irregular verbs must be memorized individually — no pattern exists for all",
        explanation: "While most English verbs are regular (add -ed for both past and V3), about 200 common verbs are irregular. The 100 most common ones appear in this lesson. Focus on the top 50 first — they cover 95% of daily usage.",
        example: "Patterns that help: many -d verbs: have→had, say→said, sell→sold, tell→told, buy→bought, bring→brought, think→thought | Many -en verbs: go→gone, write→written, ride→ridden, choose→chosen",
      },
    ],

    commonMistakes: [
      { wrong: "I have went there.", correct: "I have gone there.", explanation: "Most common V3 mistake: 'went' is V2 (simple past). V3 of 'go' is 'gone'." },
      { wrong: "She has wrote the report.", correct: "She has written the report.", explanation: "'wrote' is V2. V3 of 'write' is 'written'." },
    ],

    sentencePatterns: [
      {
        pattern: "Practice V3 in Present Perfect and Past Perfect",
        hindiPattern: "V3 practice sentences",
        examples: [
          { english: "I have spoken with all the stakeholders and built consensus on the way forward.", hindi: "मैंने सभी stakeholders से बात की है और आगे के रास्ते पर consensus build किया है।" },
          { english: "She had written five research papers before her 30th birthday.", hindi: "30 साल की उम्र से पहले उसने पाँच research papers लिखे थे।" },
          { english: "By the time the product launched, the team had built and tested over 200 features.", hindi: "Product launch होने तक, team ने 200 से ज़्यादा features build और test किए थे।" },
        ],
      },
    ],

    summary: [
      "V3 (Past Participle) is used in: Present Perfect, Past Perfect, Passive Voice, Adjective",
      "Regular V3: just add -ed (submit→submitted, finish→finished)",
      "Key irregular V3: go→gone, write→written, speak→spoken, eat→eaten, do→done",
      "Common error: using V2 instead of V3 (went vs gone, wrote vs written)",
      "Memorize 50 core irregular V3 forms for fluent, error-free English",
    ],
  },

  // ── d7-t4-s3: Had in Idioms and Phrases ──
  "d7-t4-s3": {
    whyLearnThis: `"I had enough of this!" "She had a point." "He had the nerve to argue!" "I had no idea!" — English is full of idioms with HAD that you'll encounter constantly in real conversations!\n\nNot knowing these idioms means you'll misunderstand native speakers and sound unnatural when speaking. Mastering 40 common idioms with HAD unlocks real conversational English.`,

    conceptExplanation: `40 COMMON IDIOMS AND PHRASES WITH HAD:\n\n📌 EXPERIENCE/LIMIT:\n• Had enough — exhausted patience or tolerance\n  "I had enough of waiting — let's just start without them."\n• Had it — reached one's limit completely\n  "She had it with the constant interruptions — she walked out."\n• Had a ball — had a wonderful, exciting time\n  "We had a ball at the team party last night!"\n• Had a blast — had a very exciting, fun time\n  "They had a blast at the offsite — activities, food, everything!"\n\n📌 UNDERSTANDING:\n• Had no idea — was completely unaware\n  "I had no idea the presentation was today — no one told me!"\n• Had a clue — (usually negative) had any understanding\n  "She hadn't a clue about what was happening in the market."\n\n📌 ACTIONS:\n• Had a word with — talked privately with someone\n  "I had a word with the manager about the issue — it's been resolved."\n• Had a chat — had an informal conversation\n  "We had a chat about the new project over coffee."\n• Had a meeting — (standard) held a meeting\n  "We had a meeting with the client this morning."\n• Had a look — examined or reviewed something\n  "I had a look at the proposal — it needs some revisions."\n• Had a say — had the opportunity to express opinion\n  "Everyone on the team had a say in the decision."\n\n📌 NERVE/CONFIDENCE:\n• Had the nerve — had audacity (usually used negatively)\n  "He had the nerve to ask for a raise after missing every deadline!"\n• Had the guts — had the courage to do something difficult\n  "She had the guts to present her idea directly to the CEO."\n• Had the audacity — had the boldness to do something rude\n  "They had the audacity to ignore our email for two weeks!"\n\n📌 WORK/PROFESSIONAL:\n• Had a hand in — was involved in creating or causing\n  "She had a hand in designing the entire system architecture."\n• Had a role in — played a part in\n  "He had a role in securing the biggest deal in company history."\n• Had a run — had a period of success or performance\n  "The team had an incredible run — 12 consecutive successful launches."\n• Had a setback — experienced a difficulty or delay\n  "The project had a setback when the lead developer left."\n• Had a breakthrough — achieved a significant discovery or success\n  "The R&D team had a breakthrough that changed everything."`,

    hindiExplanation: `Common Had idioms:\n\nHad enough = बहुत हो गया!\n"I had enough — this is too much."\n\nHad a ball/blast = बहुत मज़ा आया\n"We had a ball at the party!"\n\nHad no idea = बिल्कुल नहीं पता था\n"I had no idea about this!" (मुझे इसके बारे में बिल्कुल नहीं पता था!)\n\nHad a word with = किसी से अलग से बात की\n"I had a word with the manager." (मैंने manager से अलग से बात की।)\n\nHad a look = देखा\n"Please have a look at this." (कृपया इसे देखो।)\n\nHad the nerve = हिम्मत/दिलेरी थी\n"He had the nerve to argue!" (उसकी हिम्मत हुई बहस करने की!)\n\nHad a hand in = किसी काम में हाथ था\n"She had a hand in creating this." (इसे बनाने में उसका हाथ था।)`,

    rules: [
      {
        rule: "Idioms with 'had' are fixed expressions — don't change the form",
        explanation: "When you use 'had a ball' or 'had the nerve', the expression is fixed. You can change tense to 'have a ball' (present) or 'will have a ball' (future), but not the rest of the expression.",
        example: "'I had a ball.' (past) | 'I am having a ball.' (present continuous) | 'We will have a ball!' (future) — the 'ball' part doesn't change.",
      },
    ],

    commonMistakes: [
      { wrong: "I had no idea about it!", correct: "I had no idea about it! / I had no idea! (shorter, more natural)", explanation: "Both are correct, but 'I had no idea!' is a very common, natural exclamation." },
    ],

    sentencePatterns: [
      {
        pattern: "HAD idioms in professional conversations",
        hindiPattern: "Professional HAD idioms",
        examples: [
          { english: "She had a hand in every major product decision and had a run of 3 consecutive successful launches.", hindi: "उसका हर major product decision में हाथ था और उसके 3 consecutive successful launches का शानदार दौर था।" },
          { english: "I had no idea the deadline had been moved up — no one sent me the update!", hindi: "मुझे बिल्कुल नहीं पता था कि deadline आगे कर दी गई है — किसी ने मुझे update नहीं भेजा!" },
          { english: "We had a word with the vendor and they've agreed to extend the warranty at no extra cost.", hindi: "हमने vendor से अलग से बात की और उन्होंने बिना extra cost के warranty extend करने पर सहमति दे दी।" },
        ],
      },
    ],

    summary: [
      "Had enough = patience ran out | Had a ball/blast = had great fun",
      "Had no idea = completely unaware | Had a clue = (neg) had any understanding",
      "Had a word with = spoke privately | Had a look = reviewed/examined",
      "Had the nerve/guts/audacity = had the boldness to do something",
      "Had a hand in = was involved in | Had a run = period of success/performance",
    ],
  },

  // ── d7-t5-s1: Translation Practice — Had ──
  "d7-t5-s1": {
    whyLearnThis: `Translation is the fastest way to build fluency with HAD. By translating 80+ Hindi sentences, you will:\n✓ Master both HAD (simple past) and HAD + V3 (Past Perfect)\n✓ Fix the most common Indian English errors with past tense\n✓ Build automatic response patterns for professional situations\n✓ Develop true bilingual fluency`,

    conceptExplanation: `TRANSLATION PRACTICE — HAD SENTENCES:\n\nSIMPLE PAST POSSESSION:\nमेरे पास पहले एक motorcycle थी। → I had a motorcycle before.\nउसके पास बहुत experience था। → She had a lot of experience.\nहमारी तब 5 offices थीं। → We had 5 offices then.\nउनके पास कोई resources नहीं थे। → They had no resources.\n\nPAST PERFECT:\nJab वह आया, तब मैं जा चुका था। → When he came, I had already left.\nMeeting शुरू होने से पहले उसने report submit कर दी थी। → She had submitted the report before the meeting started.\nDecision लेने से पहले हमने सब analyze कर लिया था। → Before making the decision, we had analyzed everything.\nवे पहले कभी साथ काम नहीं किए थे। → They had never worked together before.\n\nNEGATIVE:\nUsse pehle उसे कोई experience नहीं था। → Before that, he didn't have any experience.\nMeeting से पहले मुझे नहीं पता था। → I hadn't known before the meeting.\n\nQUESTIONS:\nक्या तुम्हारे पास पहले car थी? → Did you have a car before?\nक्या उसने meeting से पहले report review की थी? → Had she reviewed the report before the meeting?\n\nPROFESSIONAL SENTENCES:\nMeeting शुरू होने तक मैंने सब prepare कर लिया था। → By the time the meeting started, I had prepared everything.\nPrevious company में मेरी 20 लोगों की team थी। → I had a team of 20 at my previous company.\nJob मिलने से पहले उसने 5 interviews दिए थे। → Before getting the job, she had attended 5 interviews.`,

    hindiExplanation: `Translation tips:\n\nSimple possession:\n"मेरे पास था/थी" → "I had"\n"उसके पास था/थी" → "He/She had"\n\nPast Perfect:\n"पहले ही...हो चुका था" → "had already + V3"\n"...से पहले...हो गया था" → "had + V3 before..."\n\nNegative:\n"मेरे पास नहीं था" → "I didn't have"\n"पहले...नहीं हुआ था" → "hadn't + V3"\n\nFormula check:\nSimple past: Subject + had + noun\nPast Perfect: Subject + had + V3 (past participle)`,

    rules: [
      {
        rule: "Choose between Simple HAD and Past Perfect HAD based on context",
        explanation: "Simple HAD = expressing past possession ('I had a car'). Past Perfect HAD + V3 = expressing which past event came first ('I had already left when he called').",
        example: "'मेरे पास car थी' = 'I had a car' (simple past possession)\n'वह आने से पहले मैं जा चुका था' = 'I had already left before he came' (Past Perfect sequence)",
      },
    ],

    commonMistakes: [
      { wrong: "उसके पास experience था → She has experience", correct: "She had experience.", explanation: "If it's about past (past possession), use 'had', not 'has' (present)." },
    ],

    sentencePatterns: [
      {
        pattern: "Professional translation exercises",
        hindiPattern: "Professional translations",
        examples: [
          { english: "By the time I joined this organization, I had already gained 8 years of diverse industry experience.", hindi: "जब तक मैं इस organization में join किया, मैं पहले से ही 8 साल का diverse industry experience हासिल कर चुका/चुकी था/थी।" },
          { english: "Before the acquisition, our startup had achieved profitability and had a loyal customer base of 50,000 users.", hindi: "Acquisition से पहले, हमारे startup ने profitability achieve कर ली थी और 50,000 users का loyal customer base था।" },
          { english: "She didn't have formal management training, but she had developed exceptional leadership skills through experience.", hindi: "उसके पास formal management training नहीं थी, लेकिन उसने experience के through exceptional leadership skills develop की थीं।" },
        ],
      },
    ],

    summary: [
      "Simple HAD: past possession ('I had a car', 'She had experience')",
      "Past Perfect: sequence ('I had left before he came')",
      "Negative: 'didn't have' (simple past) | 'hadn't + V3' (past perfect)",
      "Questions: 'Did you have?' (simple) | 'Had you + V3?' (past perfect)",
      "Practice 5 translations daily for automatic fluency with HAD",
    ],
  },

  // ── d7-t5-s2: Speaking Practice with Had ──
  "d7-t5-s2": {
    whyLearnThis: `Speaking HAD sentences naturally requires practice. Your mouth needs to form these patterns automatically. Today's goal: tell 5 stories using Past Perfect out loud, speak 50 HAD sentences with confidence!\n\nSpeaking practice is where HAD moves from your memory to your muscle — from studied knowledge to fluent speech.`,

    conceptExplanation: `SPEAKING DRILLS — HAD:\n\n🎯 DRILL 1 — SIMPLE HAD (Possession):\nSay each 3 times: "I had a bicycle. I had a dream. I had an amazing team. I had great opportunities. I had some challenges. I had no experience."\n\n🎯 DRILL 2 — PAST PERFECT:\n"I had already finished. She had already left. They had already decided. We had already submitted. He had already spoken."\n\n🎯 DRILL 3 — WITH TIME WORDS:\n"By the time she arrived, I had finished. When he called, she had left. Before the meeting, I had prepared everything. After he had reviewed it, he approved it."\n\n🎯 DRILL 4 — PROFESSIONAL SENTENCES:\n"I had a team of 10 at my previous company. I had 5 years of experience before this role. By the time I joined, they had already built a strong foundation. I hadn't used this software before joining."\n\n🎯 DRILL 5 — MINI STORIES (say out loud):\nStory 1: "In 2019, I had a startup idea. By 2020, I had built a team. By 2021, we had launched our product. We had grown from 0 to 10,000 users in one year."\n\nStory 2: "She had always wanted to be a leader. Before her promotion, she had led two successful projects. When the opportunity came, she had already prepared for it for years."\n\nStory 3: "The company had been struggling. By the time the new CEO joined, they had lost 3 major clients. But she had a plan. Within 6 months, the company had recovered completely."`,

    hindiExplanation: `Speaking practice — HAD के साथ stories:\n\nHर sentence 3 बार बोलो:\n"I had a team of 20. I had a team of 20. I had a team of 20."\n\nMini story practice (aloud):\n"My previous company had 50 employees. I had a team of 10 people. By the time I left, we had completed 5 major projects. I had learned so much in those 3 years."\n\nDaily practice:\nसुबह: 10 'had' sentences बोलो\nShaam: एक 30-second story बनाओ using HAD\nWeekly: एक 2-minute 'professional journey' story in English\n\nRecord yourself — यही fastest improvement method है!`,

    rules: [
      {
        rule: "For speaking fluency, practice Past Perfect in complete stories, not isolated sentences",
        explanation: "Native speakers don't practice grammar in isolation — they use it in context. Practice telling mini-stories (2-3 minutes) about your past experiences using HAD naturally throughout.",
        example: "Story practice: 'Before I joined [company], I had worked at [company] for [X] years. During that time, I had [experience]. By the time I left, I had [achievement].'",
      },
    ],

    commonMistakes: [
      { wrong: "Speaking too formally or hesitatingly", correct: "Practice natural, flowing storytelling", explanation: "Past Perfect should sound natural, not like you're reciting grammar rules. Practice until it flows." },
    ],

    sentencePatterns: [
      {
        pattern: "Speaking drill — complete professional narrative",
        hindiPattern: "Professional speaking narrative",
        examples: [
          { english: "Before I joined this company, I had worked at three different organizations across two industries. I had gained experience in both product and operations. By the time I applied here, I had managed budgets of over ₹5 crore and led teams of 30+ people.", hindi: "इस company join करने से पहले, मैं दो industries में तीन अलग organizations में काम कर चुका/चुकी था/थी। मुझे product और operations दोनों में experience था। यहाँ apply करते समय, मैं ₹5 करोड़ से ज़्यादा के budgets manage कर चुका/चुकी था/थी और 30+ लोगों की teams lead कर चुका/चुकी था/थी।" },
        ],
      },
    ],

    summary: [
      "Daily drill: 10 HAD sentences + 1 mini-story every day",
      "Story structure: had (background) + Past Perfect (earlier events) + Simple Past (actions)",
      "Record yourself telling a 2-minute professional story using HAD",
      "Practice question-answer: 'What had you done before this role?'",
      "Fluency = accuracy + speed + natural flow — all come with daily practice!",
    ],
  },

  // ── d7-t5-s3: Final Test — Had Mastery ──
  "d7-t5-s3": {
    whyLearnThis: `Your final test on HAD covers everything:\n✓ HAD for simple past possession\n✓ Questions (did + have, had + V3)\n✓ Negatives (didn't have, hadn't + V3)\n✓ Past Perfect tense (had + V3)\n✓ Past states (had been)\n✓ Professional usage\n✓ Idioms with HAD\n\nTests are powerful memory tools — actively recalling knowledge strengthens it 50% more than passive review!`,

    conceptExplanation: `FINAL REVIEW — ALL HAD CONCEPTS:\n\n📌 HAD FOR POSSESSION (Simple Past):\nAll subjects + had + noun\n"I had / She had / They had" — no exceptions\nNegative: didn't have | Question: Did + subject + have?\n\n📌 PAST PERFECT (Had + V3):\nShows the EARLIER of two past events\nFormula: Subject + had + V3\n• Positive: "She had finished before I arrived."\n• Negative: "I hadn't completed it when the deadline came."\n• Question: "Had you met him before?"\n• Short answer: "Yes, I had." / "No, I hadn't."\n\n📌 PAST STATES:\n"She had been the manager." "They had been waiting." "I had been nervous."\n\n📌 KEY TIME WORDS:\nbefore, after, when, by the time, as soon as, until, already, just, ever, never\n\n📌 COMMON MISTAKES TO AVOID:\n❌ "She hads a car." → ✅ "She had a car."\n❌ "I hadn't no money." → ✅ "I had no money." / "I didn't have any money."\n❌ "When she had arrived, I left." → ✅ "When she arrived, I had already left."\n❌ "Did she had the document?" → ✅ "Did she have the document?"\n❌ "She had went." → ✅ "She had gone."\n\n📌 PROFESSIONAL PHRASES:\n"By the time + past event, subject + had + V3"\n"Before + past event, subject + had + V3"\n"Subject + had + V3 + before/when + past event"`,

    hindiExplanation: `Final Test Recap:\n\nSimple HAD:\n"I had a car." (possession)\n"Did you have a car?" (question)\n"I didn't have a car." (negative)\n\nPast Perfect:\n"I had left before she came."\n"Had she finished before you called?"\n"I hadn't finished when she called."\n\nPast states:\n"She had been the manager."\n"They had been working."\n\nKey mistakes to avoid:\n"She hads" ❌ → "She had" ✅\n"Did she had?" ❌ → "Did she have?" ✅\n"She had went." ❌ → "She had gone." ✅`,

    rules: [
      {
        rule: "For the test, identify whether each sentence needs Simple HAD or Past Perfect HAD",
        explanation: "The key question: Is this about POSSESSION in the past (simple had) or SEQUENCE of two past events (past perfect had + V3)? If there's a 'before another past event' → Past Perfect. If just describing past state → Simple HAD.",
        example: "'I had a car.' (possession → simple had)\n'I had already sold my car before I moved.' (sequence → past perfect: had sold)",
      },
    ],

    commonMistakes: [
      { wrong: "All previous mistakes with HAD", correct: "Review all corrections systematically", explanation: "Focus areas: correct V3 forms (gone not went), didn't have not didn't had, hadn't + V3 for past perfect negative." },
    ],

    sentencePatterns: [
      {
        pattern: "Comprehensive HAD test sentences",
        hindiPattern: "Test sentences",
        examples: [
          { english: "By the time the funding came through, the team had already built the MVP and had 500 beta users.", hindi: "Funding आने तक, team पहले ही MVP build कर चुकी थी और उनके 500 beta users थे।" },
          { english: "She didn't have any experience in sales, but she had excellent communication skills — and that made all the difference.", hindi: "उसके पास sales में कोई experience नहीं था, लेकिन उसकी excellent communication skills थीं — और इसी ने सारा फर्क किया।" },
          { english: "Had you ever managed a project of this scale before? If not, how did you prepare?", hindi: "क्या आपने पहले इस scale का कोई project manage किया था? अगर नहीं, तो आपने कैसे तैयारी की?" },
        ],
      },
    ],

    summary: [
      "Simple HAD: past possession, same for all subjects, negative = didn't have",
      "Past Perfect: had + V3, for earlier of two past events",
      "Past Perfect negative: hadn't + V3 | Question: Had + subject + V3?",
      "Past states: had been + adjective/noun/-ing",
      "You have mastered HAD — use it to tell your story confidently in English!",
    ],
  },
};

// ── Export function for easy lookup ──
export function getExtendedSubtopicContent(
  subtopicId: string
): Partial<typeof EXTENDED_SUBTOPIC_CONTENT[string]> | null {
  return EXTENDED_SUBTOPIC_CONTENT[subtopicId] || null;
}
