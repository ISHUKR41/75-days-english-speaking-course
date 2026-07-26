// ============================================================
// Days 3-7 Practice Questions — 75 Days Hard English Course
// Rich, topic-specific questions for each day (80-100 per subtopic)
// Each question has: questionText, correctAnswer, explanation,
// hindiExplanation, optionA-D (for MCQ), wordHints, points
// ============================================================

// Import the shared question type
import type { PracticeQ } from "./day-1-questions";

// ══════════════════════════════════════════════════════════════
// DAY 3: IMPERATIVE SENTENCE QUESTIONS
// 90 practice questions across all subtopics
// ══════════════════════════════════════════════════════════════

// Helper to make Day 3 questions
// hindiExplanation is optional (defaults to explanation if not provided)
const d3q = (
  id: string,
  subtopicId: string,
  questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string,
  explanation: string,
  hindiExplanationOrPoints: string | number,
  pointsOrOptions?: number | { a: string; b: string; c: string; d: string },
  optionsOrHints?: { a: string; b: string; c: string; d: string } | { word: string; meaning: string }[],
  hints?: { word: string; meaning: string }[]
): PracticeQ => {
  // Determine if hindiExplanation was provided or if it was skipped
  const hasHindi = typeof hindiExplanationOrPoints === "string";
  const hindiExplanation = hasHindi ? hindiExplanationOrPoints : explanation;
  const points = hasHindi
    ? (typeof pointsOrOptions === "number" ? pointsOrOptions : 5)
    : (typeof hindiExplanationOrPoints === "number" ? hindiExplanationOrPoints : 5);
  const options = hasHindi
    ? (typeof pointsOrOptions === "object" && !Array.isArray(pointsOrOptions) ? pointsOrOptions : undefined)
    : (typeof optionsOrHints === "object" && !Array.isArray(optionsOrHints) ? optionsOrHints as { a: string; b: string; c: string; d: string } : undefined);
  const wordHints = hasHindi
    ? (Array.isArray(optionsOrHints) ? optionsOrHints as { word: string; meaning: string }[] : hints || [])
    : (Array.isArray(optionsOrHints) ? optionsOrHints as { word: string; meaning: string }[] : hints || []);

  return {
    id,
    subtopicId,
    questionText,
    questionType,
    difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
    correctAnswer,
    explanation,
    hindiExplanation,
    optionA: options?.a,
    optionB: options?.b,
    optionC: options?.c,
    optionD: options?.d,
    wordHints,
    points,
  };
};

// ── Day 3, Topic 1: Definition and Types ──────────────────────
export const DAY_3_T1_QUESTIONS: PracticeQ[] = [
  d3q("d3-t1-s1-q01","d3-t1-s1","'Darwaza band karo.' ko English mein translate karo.","translation","Close the door.","'Close' base verb hai. Door = darwaza. Imperative sentence mein subject 'you' hidden hota hai.","Command sentence: verb se seedha shuru karo. 'Close the door.' = 'Darwaza band karo.'",5),
  d3q("d3-t1-s1-q02","d3-t1-s1","'Chup raho.' ko English mein translate karo.","translation","Be quiet.","'Be quiet' ek imperative sentence hai. Be + adjective pattern use hota hai commands mein.","Be quiet = chup raho. 'Be' + adjective se quiet commands banate hain.",5),
  d3q("d3-t1-s1-q03","d3-t1-s1","Which is an imperative sentence?","mcq","Sit down, please.","Imperative sentences give commands or requests. 'Sit down, please' is a polite command.","Imperative sentence command ya request deta hai. 'Sit down, please' ek polite command hai.",5,{a:"She is sitting down.",b:"Sit down, please.",c:"Will you sit down?",d:"She sat down."}),
  d3q("d3-t1-s1-q04","d3-t1-s1","'Yahan aao.' ko English mein translate karo.","translation","Come here.","'Come here' is a simple imperative. Base verb 'come' + adverb 'here'. Subject 'you' is hidden.","'Come here' = 'Yahan aao.' Verb se seedha shuru kiya.",5),
  d3q("d3-t1-s1-q05","d3-t1-s1","What is the subject of the imperative sentence 'Open the window'?","mcq","You (hidden/implied)","In imperative sentences, the subject 'You' is always implied but not spoken. The sentence starts with the verb.","Imperative mein 'You' subject hota hai lekin bolte nahin. Verb se seedha start karte hain.",5,{a:"I",b:"We",c:"You (hidden/implied)",d:"He"}),
  d3q("d3-t1-s1-q06","d3-t1-s1","'Dhyan se suno.' ko English mein translate karo.","translation","Listen carefully.","'Listen' is the base verb. 'Carefully' is an adverb showing HOW to listen. A polite command.","Listen carefully = dhyan se suno. Adverb 'carefully' describe karta hai kaise sunnay.",6),
  d3q("d3-t1-s1-q07","d3-t1-s1","'Do not run in the hallway.' is what type of sentence?","mcq","Negative Imperative","Negative imperatives use 'Do not' or 'Don't' + base verb to forbid or warn someone.","Negative imperative mein 'Do not' ya 'Don't' lagata hai action rokne ke liye.",5,{a:"Positive Imperative",b:"Negative Imperative",c:"Question",d:"Statement"}),
  d3q("d3-t1-s1-q08","d3-t1-s1","'Kitaab kholo.' ko English mein translate karo.","translation","Open the book.","'Open' is the base verb. 'The book' is the object. Simple imperative sentence.","Open the book = Kitaab kholo. 'Open' base verb hai.",5),
  d3q("d3-t1-s1-q09","d3-t1-s1","Imperative sentence mein verb ki konsi form use hoti hai?","mcq","Base form (V1)","In imperatives, always use the base form (V1) of the verb — not 'goes', not 'going', just 'go'.","Imperative mein verb ki base form use hoti hai — 'go', 'open', 'sit', 'read' etc.",5,{a:"Past form (V2)",b:"Third person (V1+s)",c:"Base form (V1)",d:"Present participle (V1+ing)"}),
  d3q("d3-t1-s1-q10","d3-t1-s1","'Ghar jao.' ko English mein translate karo.","translation","Go home.","'Go' is the imperative verb. 'Home' is the destination. Simple and direct command.","Go home = Ghar jao. Simple and direct command.",5),
  d3q("d3-t1-s2-q01","d3-t1-s2","'Please darwaza band karo.' ko English mein translate karo.","translation","Please close the door.","Adding 'Please' at the beginning makes a command a polite request. It's essential in professional settings.","'Please' lagane se command polite ban jaata hai. Please close the door = kripaya darwaza band karein.",5),
  d3q("d3-t1-s2-q02","d3-t1-s2","How do you make an imperative sentence polite?","mcq","Add Please at the beginning or end","'Please' transforms a command into a request. 'Sit.' becomes 'Please sit.' or 'Sit, please.'","'Please' lagane se command polite ho jaata hai. Shuru ya ant mein dono jagah laga sakte hain.",5,{a:"Add 'You' before the verb",b:"Change the verb to past tense",c:"Add Please at the beginning or end",d:"Add a question mark"}),
  d3q("d3-t1-s2-q03","d3-t1-s2","'Kripaya baith jaiye.' ko English mein translate karo.","translation","Please sit down.","'Please sit down.' is a polite imperative. 'Sit down' = baithna. Please makes it respectful.","Please sit down = Kripaya baith jaiye. Very polite and professional.",5),
  d3q("d3-t1-s2-q04","d3-t1-s2","Identify the error: 'Please to come here.'","error_detection","Please come here.","'To' should not be added after 'please'. The correct form is 'Please + base verb' without 'to'.","'Please + to + verb' galat hai. Sahi form: 'Please + verb'. 'Please come' (not 'Please to come').",6),
  d3q("d3-t1-s2-q05","d3-t1-s2","'Kindly apni report submit karo.' ko English mein translate karo.","translation","Kindly submit your report.","'Kindly' is a formal alternative to 'Please'. It's commonly used in professional and written English.","Kindly = kripaya (professional version). 'Kindly submit your report.' very formal hai.",6),
  d3q("d3-t1-s3-q01","d3-t1-s3","'Mat ro.' ko English mein translate karo.","translation","Don't cry.","'Don't' + base verb = negative imperative. Don't cry = Mat ro. Very commonly used.",5),
  d3q("d3-t1-s3-q02","d3-t1-s3","'Chinta mat karo.' ko English mein translate karo.","translation","Don't worry.","'Don't worry' is one of the most common English phrases. Don't = mat. Worry = chinta karna.",5),
  d3q("d3-t1-s3-q03","d3-t1-s3","Which sentence is a negative imperative?","mcq","Don't touch that.","Negative imperatives use 'Don't' or 'Do not' to stop someone from doing something.","Negative imperative mein 'Don't' ya 'Do not' hota hai kisi ko rokne ke liye.",5,{a:"She doesn't touch that.",b:"Did she touch that?",c:"Don't touch that.",d:"She touched that."}),
  d3q("d3-t1-s3-q04","d3-t1-s3","'Is meeting mein late mat aana.' ko English mein translate karo.","translation","Don't be late to this meeting.","'Don't be late' = mat late aana. Be + adjective (late) negative imperative.",6),
  d3q("d3-t1-s3-q05","d3-t1-s3","What is the difference between 'Don't' and 'Do not' in commands?","mcq","'Do not' is more formal than 'Don't'","'Do not' is used in formal writing, signs, and professional emails. 'Don't' is used in casual speech.","'Do not' formal writing mein use hota hai (emails, notices). 'Don't' casual speech mein.",6,{a:"They mean different things",b:"'Do not' is more formal than 'Don't'",c:"'Don't' is more formal",d:"There is no difference"}),
  d3q("d3-t1-s4-q01","d3-t1-s4","'Chalo chalne chalte hain!' ko English mein translate karo.","translation","Let's go!","\"Let's\" = Let us (short form). Used for making suggestions to include yourself and others.",5),
  d3q("d3-t1-s4-q02","d3-t1-s4","'Let's' mein 'us' ka matlab kya hai?","mcq","Me and you / We","'Let's' is the short form of 'Let us'. It means 'you and me together'. It's used for inclusive suggestions.","Let's = Let us = main aur tum dono. Inclusive suggestion for group activities.",5,{a:"Only me",b:"Only you",c:"Me and you / We",d:"He and she"}),
  d3q("d3-t1-s4-q03","d3-t1-s4","'Chaliye khana khate hain.' ko English mein translate karo.","translation","Let's eat.","'Let's eat.' is a simple suggestion. Let us + base verb (eat). No 'to' before eat.",5),
];

// ── Day 3, Topic 2: Forming Imperatives ──────────────────────
export const DAY_3_T2_QUESTIONS: PracticeQ[] = [
  d3q("d3-t2-s1-q01","d3-t2-s1","'Apna kaam karo.' ko English mein translate karo.","translation","Do your work.","'Do your work.' = Apna kaam karo. 'Do' is the base verb. 'Your work' is the object.",5),
  d3q("d3-t2-s1-q02","d3-t2-s1","'Report time par submit karo.' ko English mein translate karo.","translation","Submit the report on time.","'Submit' is the base verb (imperative). 'On time' = samay par. Professional command.",6),
  d3q("d3-t2-s1-q03","d3-t2-s1","'Bahar jao.' ko English mein translate karo.","translation","Go outside.","Simple imperative. 'Go' = base verb. 'Outside' = bahar.",5),
  d3q("d3-t2-s1-q04","d3-t2-s1","'Paani piyo.' ko English mein translate karo.","translation","Drink water.","'Drink' is the base verb. 'Water' is the object. Simple, natural command.",5),
  d3q("d3-t2-s1-q05","d3-t2-s1","'Haath dhoo.' ko English mein translate karo.","translation","Wash your hands.","'Wash' is the base verb. 'Your hands' is the object. Very common everyday command.",5),
  d3q("d3-t2-s1-q06","d3-t2-s1","'Mujhe phone karo.' ko English mein translate karo.","translation","Call me.","'Call' is the base verb. 'Me' is the object pronoun. Simple direct command.",5),
  d3q("d3-t2-s1-q07","d3-t2-s1","'Mujhe apna number do.' ko English mein translate karo.","translation","Give me your number.","'Give' is the base verb. 'Me' = indirect object. 'Your number' = direct object.",6),
  d3q("d3-t2-s1-q08","d3-t2-s1","'Jaldi karo.' ko English mein translate karo.","translation","Hurry up.","'Hurry up' is a phrasal verb meaning to move faster. Very common in daily English.",5),
  d3q("d3-t2-s1-q09","d3-t2-s1","'Dhyan se padho.' ko English mein translate karo.","translation","Read carefully.","'Read' is the base verb. 'Carefully' is the adverb. Common study command.",5),
  d3q("d3-t2-s1-q10","d3-t2-s1","'Mujhe ek pen do.' ko English mein translate karo.","translation","Give me a pen.","'Give' is the imperative verb. 'Me' is the indirect object. 'A pen' is the direct object.",5),
  d3q("d3-t2-s2-q01","d3-t2-s2","'Is cheez ko mat chhuoo.' ko English mein translate karo.","translation","Don't touch this.","'Don't touch' = negative imperative. 'This' = yeh cheez. Very common warning command.",5),
  d3q("d3-t2-s2-q02","d3-t2-s2","'Late mat aana.' ko English mein translate karo.","translation","Don't be late.","'Don't be late' = negative imperative with Be verb. Very important professional phrase.",5),
  d3q("d3-t2-s2-q03","d3-t2-s2","'Bolte waqt interrupt mat karo.' ko English mein translate karo.","translation","Don't interrupt while speaking.","'Don't interrupt' is a polite rule. 'While speaking' = bolte waqt. Professional etiquette.",7),
  d3q("d3-t2-s2-q04","d3-t2-s2","'Is kamre mein smoke mat karo.' ko English mein translate karo.","translation","Don't smoke in this room.","'Don't smoke' = mat piyo (cigarette). 'In this room' = is kamre mein. Common rule/sign.",6),
  d3q("d3-t2-s2-q05","d3-t2-s2","Identify the error: 'Not open the door.'","error_detection","Don't open the door.","Negative imperatives need 'Don't' or 'Do not', not just 'Not'. 'Not' alone cannot start a command.","Negative imperative mein 'Don't' ya 'Do not' use karte hain sirf 'Not' se nahi shuru karte.",6,{a:"Not open the door.",b:"Don't open the door.",c:"Do not opening the door.",d:"Don't to open the door."},[{word:"negative",meaning:"nahi"},{word:"imperative",meaning:"aadesh"}]),
  d3q("d3-t2-s3-q01","d3-t2-s3","'Chaliye bahar chalte hain.' ko English mein translate karo.","translation","Let's go outside.","Let's + base verb. 'Let's go' = chaliye chalte hain. Used for inclusive suggestions.",5),
  d3q("d3-t2-s3-q02","d3-t2-s3","'Let's have a meeting.' ka Hindi mein kya matlab hai?","mcq","Chaliye meeting karte hain.","Let's have a meeting = Chaliye meeting karte hain. A suggestion to include everyone.",5,{a:"Wo meeting karega.",b:"Meeting thi.",c:"Chaliye meeting karte hain.",d:"Main meeting karoon?"}),
  d3q("d3-t2-s4-q01","d3-t2-s4","'Do come to my party.' mein 'Do' kyon use hua hai?","mcq","Emphasis ke liye — zaroori hain aana","'Do' before an imperative adds emphasis and warmth. 'Do come' is stronger and more inviting than 'Come'.",7,{a:"Negative banane ke liye",b:"Emphasis ke liye — zaroori hain aana",c:"Question banane ke liye",d:"Future tense ke liye"}),
  d3q("d3-t2-s4-q02","d3-t2-s4","'Do be careful.' ka kya matlab hai?","translation","Zaroor dhyan rakhna.","'Do be careful' = emphatic imperative. The word 'do' adds extra emphasis and concern.",7),
];

// ── Day 3, Topic 3: Imperatives in Real Life ─────────────────
export const DAY_3_T3_QUESTIONS: PracticeQ[] = [
  d3q("d3-t3-s1-q01","d3-t3-s1","'Apna ghar saaf karo.' ko English mein translate karo.","translation","Clean your house.","'Clean' = saaf karna. 'Your house' = apna ghar. Common household command.",5),
  d3q("d3-t3-s1-q02","d3-t3-s1","'Subah uthke exercise karo.' ko English mein translate karo.","translation","Wake up and exercise in the morning.","Two imperatives joined: 'Wake up' and 'exercise'. 'And' connects them.",6),
  d3q("d3-t3-s1-q03","d3-t3-s1","'Teacher ki baat suno.' ko English mein translate karo.","translation","Listen to the teacher.","'Listen to' = dhyan se sunna (requires 'to'). 'The teacher' = object.",5),
  d3q("d3-t3-s1-q04","d3-t3-s1","'Apna homework karo.' ko English mein translate karo.","translation","Do your homework.","'Do your homework.' = Apna homework karo. 'Do' is the base verb here.",5),
  d3q("d3-t3-s1-q05","d3-t3-s1","'Khana khane se pehle haath dhoo.' ko English mein translate karo.","translation","Wash your hands before eating.","'Before eating' = infinitive phrase. 'Wash your hands' = main imperative command.",7),
  d3q("d3-t3-s2-q01","d3-t3-s2","'Kripaya apni report kal tak submit karein.' ko English mein translate karo.","translation","Please submit your report by tomorrow.","Professional request with 'Please'. 'By tomorrow' = kal tak. Formal office command.",7),
  d3q("d3-t3-s2-q02","d3-t3-s2","'Meeting mein phone mute rakhein.' ko English mein translate karo.","translation","Please mute your phone during the meeting.","Office etiquette command. 'During the meeting' = meeting ke dauran.",7),
  d3q("d3-t3-s2-q03","d3-t3-s2","'Is document ko sign karein.' ko English mein translate karo.","translation","Please sign this document.","'Sign' = sign karna (verb). 'This document' = is document ko. Professional request.",6),
  d3q("d3-t3-s2-q04","d3-t3-s2","'Kripaya apna parichay dein.' ko English mein translate karo.","translation","Please introduce yourself.","'Introduce yourself' = apna parichay do. 'Please' makes it a polite request.",6),
  d3q("d3-t3-s2-q05","d3-t3-s2","'Client ke sath professional rahein.' ko English mein translate karo.","translation","Please be professional with the client.","'Be professional' = Be + adjective imperative. Very important office command.",7),
  d3q("d3-t3-s3-q01","d3-t3-s3","'Wet floor hai — dhyan se chalein.' is ek instruction sign hai. English mein kya hoga?","translation","Caution: Wet floor.","Signs use short imperatives: 'Caution', 'Stop', 'No entry'. 'Wet floor' is a common safety sign.",6),
  d3q("d3-t3-s3-q02","d3-t3-s3","'Do not enter without permission.' ka Hindi mein kya matlab hai?","translation","Bina permission ke andar mat aao.","'Do not enter' = formal negative imperative. Used on official signs and notices.",6),
  d3q("d3-t3-s3-q03","d3-t3-s3","'Namak daalo aur mix karo.' ko English mein translate karo.","translation","Add salt and mix well.","Recipe instruction with two imperatives: 'Add' and 'mix'. 'Well' = achhe se.",6),
];

// ── Day 3, Topic 4: Vocabulary ────────────────────────────────
export const DAY_3_T4_QUESTIONS: PracticeQ[] = [
  d3q("d3-t4-s1-q01","d3-t4-s1","'Submit' ka Hindi mein kya matlab hai?","mcq","Jama karna / Dena","Submit = to give/hand over something (as a document, report, assignment)","Submit = jama karna. Office mein bahut use hota hai: 'Submit the report.'",5,{a:"Lena",b:"Jama karna / Dena",c:"Padhna",d:"Likhna"}),
  d3q("d3-t4-s1-q02","d3-t4-s1","'Report jama karo.' ko English mein translate karo.","translation","Submit the report.","'Submit' = jama karna. Professional command used in offices and schools.",5),
  d3q("d3-t4-s1-q03","d3-t4-s1","'Verify' ka kya matlab hai?","mcq","Jaanch karna / Confirm karna","To verify means to check the accuracy or truth of something. Common in professional English.",6,{a:"Ignore karna",b:"Hataana",c:"Jaanch karna / Confirm karna",d:"Likhna"}),
  d3q("d3-t4-s1-q04","d3-t4-s1","'Is file ko verify karo.' ko English mein translate karo.","translation","Verify this file.","'Verify this file' = is file ko check/verify karo. Professional office command.",6),
  d3q("d3-t4-s1-q05","d3-t4-s1","'Report approve karo.' ko English mein translate karo.","translation","Approve the report.","'Approve' = manjoori dena. Professional command used in management.",7),
  d3q("d3-t4-s2-q01","d3-t4-s2","'Immediately' ka kya matlab hai?","mcq","Turant / Abhi","Immediately = without any delay, right now. Used to show urgency in commands.",5,{a:"Dheere dheere",b:"Turant / Abhi",c:"Shayad",d:"Baad mein"}),
  d3q("d3-t4-s2-q02","d3-t4-s2","'Kripaya turant aayein.' ko English mein translate karo.","translation","Please come immediately.","'Immediately' adds urgency to the polite request. Very common in urgent situations.",6),
  d3q("d3-t4-s2-q03","d3-t4-s2","'Carefully' ka use kab karte hain?","mcq","Jab dhyan se karne ki zarurat ho","'Carefully' is used when attention and caution are required. Drive carefully. Read carefully.",5,{a:"Jab kaam fast karna ho",b:"Jab dhyan se karne ki zarurat ho",c:"Jab rest karna ho",d:"Jab loud bolna ho"}),
  d3q("d3-t4-s3-q01","d3-t4-s3","'Would you mind closing the door?' ka matlab kya hai?","mcq","Kya aap darwaza band kar sakte hain? (bahut polite)","'Would you mind + V-ing' is the most polite form of a request. More formal than 'Please close.'","Yeh bahut polite request hai. 'Would you mind' = kya aapko koi problem nahi hogi?",8,{a:"Aap darwaza band karenge?",b:"Darwaza band karo.",c:"Kya aap darwaza band kar sakte hain? (bahut polite)",d:"Darwaza band mat karo."}),
  d3q("d3-t4-s3-q02","d3-t4-s3","'Could you please help me with this?' ka Hindi mein kya matlab hai?","translation","Kya aap mujhe isme madad kar sakte hain?","'Could you please' = very polite request. More formal than 'Can you help me?'",8),
];

// ── Day 3, Topic 5: Practice Questions ───────────────────────
export const DAY_3_T5_QUESTIONS: PracticeQ[] = [
  d3q("d3-t5-s1-q01","d3-t5-s1","'Seedha chalo.' ko English mein translate karo.","translation","Walk straight.","'Walk straight' = seedha chalo. Simple direction command.",5),
  d3q("d3-t5-s1-q02","d3-t5-s1","'Baaye mudo.' ko English mein translate karo.","translation","Turn left.","'Turn left' = baaye mudo. Common direction command.",5),
  d3q("d3-t5-s1-q03","d3-t5-s1","'Pehle socho, phir bolo.' ko English mein translate karo.","translation","Think first, then speak.","Two imperatives: Think and speak. 'First' = pehle. 'Then' = phir.",6),
  d3q("d3-t5-s1-q04","d3-t5-s1","'Emergency exit dhundho.' ko English mein translate karo.","translation","Find the emergency exit.","'Find' = dhundna. 'Emergency exit' = aapat dwar. Important safety instruction.",6),
  d3q("d3-t5-s1-q05","d3-t5-s1","'Report mein apna naam likho.' ko English mein translate karo.","translation","Write your name on the report.","'Write your name' = apna naam likho. 'On the report' = report mein.",6),
  d3q("d3-t5-s1-q06","d3-t5-s1","'Office mein professionally kapde pehno.' ko English mein translate karo.","translation","Dress professionally for the office.","'Dress professionally' = professional kapde pehno. 'For the office' = office ke liye.",7),
  d3q("d3-t5-s1-q07","d3-t5-s1","'Apna phone silent mode mein rakho.' ko English mein translate karo.","translation","Keep your phone on silent mode.","'Keep' = rakhna. 'On silent mode' = silent mode mein. Common office instruction.",6),
  d3q("d3-t5-s1-q08","d3-t5-s1","'Pani waste mat karo.' ko English mein translate karo.","translation","Don't waste water.","Negative imperative: Don't + base verb. 'Waste' = barbaad karna. Environmental message.",5),
  d3q("d3-t5-s1-q09","d3-t5-s1","'Lights off karke jao.' ko English mein translate karo.","translation","Turn off the lights before leaving.","'Turn off' = band karna (phrasal verb). 'Before leaving' = jaane se pehle.",7),
  d3q("d3-t5-s1-q10","d3-t5-s1","'Koi bhi decision lete samay sochna.' ko English mein translate karo.","translation","Think before making any decision.","'Think before' = sochna pehle. 'Making any decision' = koi bhi decision lena.",8),
  d3q("d3-t5-s2-q01","d3-t5-s2","Speaking: 'Roz subah yoga karo.' ko English mein bolke answer dena.","translation","Do yoga every morning.","'Do yoga' = yoga karo. 'Every morning' = roz subah. Healthy lifestyle command.",5),
  d3q("d3-t5-s2-q02","d3-t5-s2","Speaking: 'Ek ghante mein mujhe call karo.' ko English mein bolke answer dena.","translation","Call me in one hour.","'Call me in one hour' = ek ghante mein phone karo. Time reference with 'in'.",6),
  d3q("d3-t5-s2-q03","d3-t5-s2","Speaking: 'Apne sapno ko follow karo.' ko English mein bolke answer dena.","translation","Follow your dreams.","'Follow your dreams' = apne sapno ko follow karo. Motivational imperative.",6),
  d3q("d3-t5-s3-q01","d3-t5-s3","'She don't come late.' mein kya galti hai?","error_detection","Don't be late. / Please don't be late.","This is an imperative, not a statement about 'she'. The correct imperative is 'Don't be late.'",8,{a:"She doesn't come late.",b:"Don't be late. / Please don't be late.",c:"She not come late.",d:"She is not coming late."}),
  d3q("d3-t5-s3-q02","d3-t5-s3","'Please to submit the report.' mein kya galti hai?","error_detection","Please submit the report.","Never add 'to' after 'please' in imperative sentences. 'Please + base verb' is the correct form.",7,{a:"Please submitting the report.",b:"Please submitted the report.",c:"Please submit the report.",d:"Please submits the report."}),
  d3q("d3-t5-s3-q03","d3-t5-s3","Which sentence is CORRECT?","mcq","Don't run in the corridor.","'Don't + base verb' is the correct form of a negative imperative. Other options have errors.",7,{a:"Not run in the corridor.",b:"Don't runs in the corridor.",c:"Don't running in the corridor.",d:"Don't run in the corridor."}),
];

// ── Export all Day 3 questions ────────────────────────────────
export const ALL_DAY_3_QUESTIONS: PracticeQ[] = [
  ...DAY_3_T1_QUESTIONS,
  ...DAY_3_T2_QUESTIONS,
  ...DAY_3_T3_QUESTIONS,
  ...DAY_3_T4_QUESTIONS,
  ...DAY_3_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 4: BE VERB QUESTIONS
// 90 practice questions across all subtopics
// ══════════════════════════════════════════════════════════════

// Day 4 question helper — hindiExplanation is optional
const d4q = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  hindiOrPoints: string | number,
  pointsOrOptions?: number | { a: string; b: string; c: string; d: string },
  optionsParam?: { a: string; b: string; c: string; d: string }
): PracticeQ => {
  const hasHindi = typeof hindiOrPoints === "string";
  const hindiExplanation = hasHindi ? hindiOrPoints : explanation;
  const points = hasHindi
    ? (typeof pointsOrOptions === "number" ? pointsOrOptions : 5)
    : (typeof hindiOrPoints === "number" ? hindiOrPoints : 5);
  const options = hasHindi
    ? (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : optionsParam)
    : (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : undefined);
  return {
    id, subtopicId, questionText, questionType,
    difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
    correctAnswer, explanation, hindiExplanation,
    optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
    wordHints: [], points,
  };
};

export const DAY_4_T1_QUESTIONS: PracticeQ[] = [
  d4q("d4-t1-s1-q01","d4-t1-s1","'Main ek teacher hun.' ko English mein translate karo.","translation","I am a teacher.","'I am' = main hun. 'A teacher' = ek teacher. Be verb 'am' is used with 'I'.",5),
  d4q("d4-t1-s1-q02","d4-t1-s1","'Woh ek doctor hai.' ko English mein translate karo.","translation","He is a doctor.","'He is' = woh hai. 'A doctor' = ek doctor. Be verb 'is' is used with He/She/It.",5),
  d4q("d4-t1-s1-q03","d4-t1-s1","'Hum log students hain.' ko English mein translate karo.","translation","We are students.","'We are' = hum hain. 'Students' = vidyarthi. Be verb 'are' is used with We/You/They.",5),
  d4q("d4-t1-s2-q01","d4-t1-s2","Which Be Verb is used with 'I'?","mcq","am","'I am' is the only correct form. Never say 'I is' or 'I are'. This is a fundamental rule.",5,{a:"is",b:"are",c:"am",d:"be"}),
  d4q("d4-t1-s2-q02","d4-t1-s2","Which Be Verb is used with 'She'?","mcq","is","She/He/It always uses 'is' in present tense. This is a non-negotiable grammar rule.",5,{a:"am",b:"are",c:"is",d:"was"}),
  d4q("d4-t1-s2-q03","d4-t1-s2","'Tum bahut smart ho.' ko English mein translate karo.","translation","You are very smart.","'You are' = tum ho. 'Very smart' = bahut smart. Be verb + adjective.",5),
  d4q("d4-t1-s2-q04","d4-t1-s2","Fill in the blank: 'They ___ my best friends.'","fill_blank","are","'They' takes 'are' in present tense. They are = woh hain.",5),
  d4q("d4-t1-s2-q05","d4-t1-s2","'Woh khush hai.' ko English mein translate karo. (She)","translation","She is happy.","'She is' = woh hai. 'Happy' = khush. Be verb + adjective pattern.",5),
  d4q("d4-t1-s2-q06","d4-t1-s2","'Main office mein hun.' ko English mein translate karo.","translation","I am at the office.","'I am' + preposition + location. 'At the office' = office mein. Be verb with location.",5),
  d4q("d4-t1-s2-q07","d4-t1-s2","'Woh log engineer hain.' ko English mein translate karo.","translation","They are engineers.","'They are' = woh hain. 'Engineers' = plural noun (no 'an' needed for plural).",6),
  d4q("d4-t1-s3-q01","d4-t1-s3","Which Be Verb is used for past tense with 'I'?","mcq","was","'I was' is the past form of 'I am'. Was is used with I, He, She, It in past tense.",5,{a:"am",b:"is",c:"were",d:"was"}),
  d4q("d4-t1-s3-q02","d4-t1-s3","'Woh kal ghar par tha.' ko English mein translate karo.","translation","He was at home yesterday.","'He was' = woh tha. 'Yesterday' = kal. 'At home' = ghar par. Past Be Verb.",5),
  d4q("d4-t1-s3-q03","d4-t1-s3","'Hum log kal office mein the.' ko English mein translate karo.","translation","We were at the office yesterday.","'We were' = hum the. Past tense with plural subject uses 'were'.",5),
  d4q("d4-t1-s3-q04","d4-t1-s3","'She ___ very tired last night.' mein kya aayega?","fill_blank","was","Past tense + She = 'was'. 'Last night' confirms it's past tense.",5),
  d4q("d4-t1-s3-q05","d4-t1-s3","'Woh sab bahut busy the.' ko English mein translate karo.","translation","They were very busy.","'They were' = woh the. 'Very busy' = bahut busy. Past tense with plural.",5),
  d4q("d4-t1-s4-q01","d4-t1-s4","'Kal main ghar par rahunga.' ko English mein translate karo.","translation","I will be at home tomorrow.","'Will be' = rahunga (future). 'Tomorrow' = kal. Future Be Verb.",6),
  d4q("d4-t1-s4-q02","d4-t1-s4","'Woh kal ready rahegi.' ko English mein translate karo.","translation","She will be ready tomorrow.","'Will be' = rahegi (future). 'Ready' = tayyar. Future Be Verb + adjective.",6),
];

export const DAY_4_T2_QUESTIONS: PracticeQ[] = [
  d4q("d4-t2-s1-q01","d4-t2-s1","'Main ek software engineer hun.' ko English mein translate karo.","translation","I am a software engineer.","Be Verb + profession. Always use 'a' or 'an' before a singular profession.",5),
  d4q("d4-t2-s1-q02","d4-t2-s1","'Woh ek nurse hai.' ko English mein translate karo.","translation","She is a nurse.","'She is' + 'a nurse'. Be Verb with profession. She/He/It uses 'is'.",5),
  d4q("d4-t2-s1-q03","d4-t2-s1","'Hum dono dost hain.' ko English mein translate karo.","translation","We are both friends.","'We are both' = hum dono hain. 'Friends' = plural noun. No article before plural.",5),
  d4q("d4-t2-s2-q01","d4-t2-s2","'Woh bahut intelligent hai.' ko English mein translate karo.","translation","She is very intelligent.","Be Verb + adjective. 'Very intelligent' = bahut buddhiman.",5),
  d4q("d4-t2-s2-q02","d4-t2-s2","'Main bahut thaka hua hun.' ko English mein translate karo.","translation","I am very tired.","'I am tired' = main thaka hua hun. Be Verb + past participle used as adjective.",5),
  d4q("d4-t2-s2-q03","d4-t2-s2","'Yeh kitaab bahut interesting hai.' ko English mein translate karo.","translation","This book is very interesting.","'This book is' = yeh kitaab hai. 'Very interesting' = bahut interesting.",5),
  d4q("d4-t2-s2-q04","d4-t2-s2","'Tumhara kaam bahut acha hai.' ko English mein translate karo.","translation","Your work is very good.","'Your work is' = tumhara kaam hai. 'Very good' = bahut acha. Be Verb + adjective.",5),
  d4q("d4-t2-s3-q01","d4-t2-s3","'Main abhi office mein hun.' ko English mein translate karo.","translation","I am at the office right now.","'At the office' = office mein. 'Right now' = abhi. Be Verb + location.",5),
  d4q("d4-t2-s3-q02","d4-t2-s3","'Woh Mumbai mein hai.' ko English mein translate karo.","translation","She is in Mumbai.","'In Mumbai' = Mumbai mein. Cities use 'in'. 'She is' = woh hai.",5),
  d4q("d4-t2-s3-q03","d4-t2-s3","'Meeting 3rd floor par hai.' ko English mein translate karo.","translation","The meeting is on the 3rd floor.","'On the 3rd floor' = 3rd floor par. Floors use 'on'. 'The meeting is' = meeting hai.",6),
  d4q("d4-t2-s4-q01","d4-t2-s4","'Kya tum busy ho?' ko English mein translate karo.","translation","Are you busy?","Question with Be Verb: Are + you + adjective? Invert subject and Be Verb for questions.",5),
  d4q("d4-t2-s4-q02","d4-t2-s4","'Main doctor nahi hun.' ko English mein translate karo.","translation","I am not a doctor.","Negative: Be Verb + not. 'I am not' = main nahi hun.",5),
  d4q("d4-t2-s4-q03","d4-t2-s4","'Kya woh ghar par hai?' ko English mein translate karo.","translation","Is he at home?","Question: Is + He + at home? Invert for yes/no questions.",5),
  d4q("d4-t2-s4-q04","d4-t2-s4","'Woh log happy nahi hain.' ko English mein translate karo.","translation","They are not happy.","Negative plural: They are not + adjective. 'They aren't happy' is also correct.",5),
];

export const DAY_4_T3_QUESTIONS: PracticeQ[] = [
  d4q("d4-t3-s1-q01","d4-t3-s1","'Woh kaam kar raha hai.' ko English mein translate karo.","translation","He is working.","Present continuous: Be Verb (is) + V-ing. 'Is working' = kaam kar raha hai.",6),
  d4q("d4-t3-s1-q02","d4-t3-s1","'Main abhi padh raha hun.' ko English mein translate karo.","translation","I am studying right now.","Present continuous: I am + studying. 'Right now' = abhi.",6),
  d4q("d4-t3-s1-q03","d4-t3-s1","'Woh so rahi thi.' ko English mein translate karo.","translation","She was sleeping.","Past continuous: was/were + V-ing. 'Was sleeping' = so rahi thi.",7),
  d4q("d4-t3-s2-q01","d4-t3-s2","'Report likhi ja rahi hai.' ko English mein translate karo.","translation","The report is being written.","Passive voice: is being + past participle. 'Being written' = likh ja rahi hai.",8),
  d4q("d4-t3-s2-q02","d4-t3-s2","'Letter bheja ja raha hai.' ko English mein translate karo.","translation","The letter is being sent.","Passive present continuous: is being + sent. 'Being sent' = bheja ja raha.",8),
  d4q("d4-t3-s3-q01","d4-t3-s3","Identify the error: 'She am a good student.'","error_detection","She is a good student.","'She' takes 'is', not 'am'. Only 'I' uses 'am'. This is one of the most common mistakes.",7,{a:"She was a good student.",b:"She is a good student.",c:"She are a good student.",d:"She be a good student."}),
  d4q("d4-t3-s3-q02","d4-t3-s3","Identify the error: 'They is very happy.'","error_detection","They are very happy.","'They' takes 'are', not 'is'. Is = he/she/it. Are = we/you/they.",6,{a:"They was very happy.",b:"They am very happy.",c:"They are very happy.",d:"They be very happy."}),
  d4q("d4-t3-s3-q03","d4-t3-s3","Identify the error: 'I are a teacher.'","error_detection","I am a teacher.","'I' always takes 'am'. Never 'are' or 'is'. I am = main hun.",5,{a:"I is a teacher.",b:"I am a teacher.",c:"I were a teacher.",d:"I be a teacher."}),
];

export const DAY_4_T4_QUESTIONS: PracticeQ[] = [
  d4q("d4-t4-s1-q01","d4-t4-s1","'Main excited hun.' ko English mein translate karo.","translation","I am excited.","'Excited' = adjective describing emotional state. I am + adjective.",5),
  d4q("d4-t4-s1-q02","d4-t4-s1","'Woh bahut confident hai.' ko English mein translate karo.","translation","She is very confident.","'Confident' = aatmavishwasi. Be Verb + adjective for describing personality.",5),
  d4q("d4-t4-s1-q03","d4-t4-s1","'Yeh kaam mushkil hai.' ko English mein translate karo.","translation","This work is difficult.","'Difficult' = mushkil. Adjective describing task. This/That + is + adjective.",5),
  d4q("d4-t4-s2-q01","d4-t4-s2","'Woh ek project manager hai.' ko English mein translate karo.","translation","She is a project manager.","Profession with Be Verb. 'A project manager' = ek project manager.",6),
  d4q("d4-t4-s2-q02","d4-t4-s2","'Main ek data analyst hun.' ko English mein translate karo.","translation","I am a data analyst.","Modern job title with Be Verb. 'I am' + job title.",6),
  d4q("d4-t4-s3-q01","d4-t4-s3","'Woh bahut thaka hua hai.' ko English mein translate karo.","translation","He is very tired.","'Tired' = thaka hua (past participle used as adjective). He is very tired.",5),
  d4q("d4-t4-s3-q02","d4-t4-s3","'Main bilkul tayar hun.' ko English mein translate karo.","translation","I am completely ready.","'Completely ready' = bilkul tayar. Adverb + adjective with Be Verb.",6),
];

export const DAY_4_T5_QUESTIONS: PracticeQ[] = [
  d4q("d4-t5-s1-q01","d4-t5-s1","'Mera bhai ek pilot hai.' ko English mein translate karo.","translation","My brother is a pilot.","Be Verb + profession. 'My brother is' = mera bhai hai.",5),
  d4q("d4-t5-s1-q02","d4-t5-s1","'Woh sab bohot talented hain.' ko English mein translate karo.","translation","They are all very talented.","'They are all' = woh sab hain. 'Very talented' = bahut talented.",6),
  d4q("d4-t5-s1-q03","d4-t5-s1","'Kya aap free ho kal?' ko English mein translate karo.","translation","Are you free tomorrow?","Question with Be Verb: Are + you + adjective + time? Formal polite question.",6),
  d4q("d4-t5-s1-q04","d4-t5-s1","'Main kuch zyada sure nahi hun.' ko English mein translate karo.","translation","I am not very sure.","Negative: I am not + adjective. 'Not very sure' = kuch zyada sure nahi.",6),
  d4q("d4-t5-s1-q05","d4-t5-s1","'Presentation kal hai.' ko English mein translate karo.","translation","The presentation is tomorrow.","Be Verb with time: is + tomorrow. 'The presentation is tomorrow' = presentation kal hai.",6),
  d4q("d4-t5-s2-q01","d4-t5-s2","Speaking: 'Mera naam [your name] hai.' ko English mein bolke answer dena.","translation","My name is [your name].","'My name is' = mera naam hai. The most basic and important Be Verb sentence.",5),
  d4q("d4-t5-s2-q02","d4-t5-s2","Speaking: 'Main [apna sheher] se hun.' ko English mein bolke answer dena.","translation","I am from [your city].","'I am from' = main ... se hun. Be Verb with origin.",5),
  d4q("d4-t5-s3-q01","d4-t5-s3","Which is CORRECT?","mcq","She is an honest person.","'An' is used before words starting with vowel sounds (honest starts with 'a' sound). 'She is' is correct.",7,{a:"She am an honest person.",b:"She are an honest person.",c:"She is an honest person.",d:"She is a honest person."}),
  d4q("d4-t5-s3-q02","d4-t5-s3","'They was at the party last night.' mein galti kya hai?","error_detection","They were at the party last night.","'They' takes 'were' (not 'was') in past tense. Was = I/He/She/It. Were = We/You/They.",6,{a:"They is at the party last night.",b:"They were at the party last night.",c:"They am at the party last night.",d:"They be at the party last night."}),
];

// Export all Day 4 questions
export const ALL_DAY_4_QUESTIONS: PracticeQ[] = [
  ...DAY_4_T1_QUESTIONS,
  ...DAY_4_T2_QUESTIONS,
  ...DAY_4_T3_QUESTIONS,
  ...DAY_4_T4_QUESTIONS,
  ...DAY_4_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 5: DEMONSTRATIVE PRONOUN QUESTIONS
// ══════════════════════════════════════════════════════════════

// Day 5 question helper — hindiExplanation is optional
const d5q = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  hindiOrPoints: string | number,
  pointsOrOptions?: number | { a: string; b: string; c: string; d: string },
  optionsParam?: { a: string; b: string; c: string; d: string }
): PracticeQ => {
  const hasHindi = typeof hindiOrPoints === "string";
  const hindiExplanation = hasHindi ? hindiOrPoints : explanation;
  const points = hasHindi
    ? (typeof pointsOrOptions === "number" ? pointsOrOptions : 5)
    : (typeof hindiOrPoints === "number" ? hindiOrPoints : 5);
  const options = hasHindi
    ? (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : optionsParam)
    : (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : undefined);
  return {
    id, subtopicId, questionText, questionType,
    difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
    correctAnswer, explanation, hindiExplanation,
    optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
    wordHints: [], points,
  };
};

export const DAY_5_T1_QUESTIONS: PracticeQ[] = [
  d5q("d5-t1-s1-q01","d5-t1-s1","'Yeh meri kitaab hai.' ko English mein translate karo.","translation","This is my book.","'This' = yeh (paas ki cheez). 'This is my book' = Yeh meri kitaab hai.",5),
  d5q("d5-t1-s1-q02","d5-t1-s1","'Woh meri car hai.' ko English mein translate karo.","translation","That is my car.","'That' = woh (door ki cheez). 'That is my car' = Woh meri car hai.",5),
  d5q("d5-t1-s1-q03","d5-t1-s1","'Yeh mere dost hain.' ko English mein translate karo.","translation","These are my friends.","'These' = yeh sab (paas ke log ya cheezein). Plural near demonstrative.",5),
  d5q("d5-t1-s1-q04","d5-t1-s1","'Woh log mere saath kaam karte hain.' ko English mein translate karo using demonstrative.","translation","Those are my colleagues.","'Those' = woh sab (door ke log). Plural far demonstrative.",5),
  d5q("d5-t1-s2-q01","d5-t1-s2","'This' kab use karte hain?","mcq","Jab cheez ya person hamare paas ho (singular)","THIS = one thing/person near you. THAT = one thing/person far from you.",5,{a:"Jab cheez door ho (plural)",b:"Jab cheez ya person hamare paas ho (singular)",c:"Jab cheez badi ho",d:"Jab hum question poochhein"}),
  d5q("d5-t1-s2-q02","d5-t1-s2","'That' kab use karte hain?","mcq","Jab cheez ya person hamare se door ho (singular)","THAT = one thing/person far from you. Pointing to something at a distance.",5,{a:"Jab cheez paas ho",b:"Jab plural ho",c:"Jab cheez ya person hamare se door ho (singular)",d:"Kabhie nahi"}),
  d5q("d5-t1-s2-q03","d5-t1-s2","'Yeh pen hai.' ko English mein translate karo.","translation","This is a pen.","'This is a pen' = Yeh ek pen hai. Near singular demonstrative.",5),
  d5q("d5-t1-s2-q04","d5-t1-s2","'Woh ek hospital hai.' ko English mein translate karo.","translation","That is a hospital.","'That is a hospital' = Woh ek hospital hai. Far singular demonstrative.",5),
  d5q("d5-t1-s3-q01","d5-t1-s3","'These' aur 'Those' mein kya fark hai?","mcq","These = plural near, Those = plural far","These = many things near you. Those = many things far from you. Both are plural.",5,{a:"These = singular, Those = plural",b:"These = plural near, Those = plural far",c:"These = far, Those = near",d:"Koi fark nahi"}),
  d5q("d5-t1-s3-q02","d5-t1-s3","'Yeh saari cheezein meri hain.' ko English mein translate karo.","translation","These are all mine.","'These' = plural near. 'All mine' = saari meri. Near plural demonstrative.",6),
  d5q("d5-t1-s3-q03","d5-t1-s3","'Woh sab flowers bahut sundar hain.' ko English mein translate karo.","translation","Those flowers are very beautiful.","'Those flowers' = far plural demonstrative as adjective. 'Very beautiful' = bahut sundar.",6),
  d5q("d5-t1-s4-q01","d5-t1-s4","'This book is mine.' mein 'this' kya hai?","mcq","Demonstrative adjective (modifying 'book')","When 'this/that/these/those' comes before a noun, it acts as a demonstrative adjective.",7,{a:"Demonstrative pronoun",b:"Personal pronoun",c:"Demonstrative adjective (modifying 'book')",d:"Verb"}),
  d5q("d5-t1-s4-q02","d5-t1-s4","'This is mine.' mein 'this' kya hai?","mcq","Demonstrative pronoun (replacing the noun)","When 'this/that/these/those' stands alone without a noun, it acts as a demonstrative pronoun.",7,{a:"Demonstrative adjective",b:"Demonstrative pronoun (replacing the noun)",c:"Verb",d:"Adverb"}),
];

export const DAY_5_T2_QUESTIONS: PracticeQ[] = [
  d5q("d5-t2-s1-q01","d5-t2-s1","'Yeh meri gadi hai.' ko English mein translate karo.","translation","This is my car.","'This is' + possessive + noun. Near singular object.",5),
  d5q("d5-t2-s1-q02","d5-t2-s1","'Woh ek famous restaurant hai.' ko English mein translate karo.","translation","That is a famous restaurant.","'That is' = woh hai. Far singular demonstrative as subject.",5),
  d5q("d5-t2-s1-q03","d5-t2-s1","'Yeh mere naye shoes hain.' ko English mein translate karo.","translation","These are my new shoes.","'These are' = yeh hain. Near plural demonstrative. 'New shoes' = naye joote.",5),
  d5q("d5-t2-s2-q01","d5-t2-s2","'Mujhe woh de do.' ko English mein translate karo.","translation","Give me that.","'That' as object. Near the listener but far from speaker. Direct object position.",5),
  d5q("d5-t2-s2-q02","d5-t2-s2","'Main yeh chahta hun.' ko English mein translate karo.","translation","I want this.","'This' as direct object. 'I want this' = main yeh chahta hun.",5),
  d5q("d5-t2-s2-q03","d5-t2-s2","'Unhe yeh sab do.' ko English mein translate karo.","translation","Give them these.","'These' as object — giving multiple near things. Indirect object 'them' (unhe).",6),
  d5q("d5-t2-s3-q01","d5-t2-s3","'Yeh kitaab bahut achhi hai.' ko English mein translate karo.","translation","This book is very good.","'This book' = demonstrative adjective. 'Is very good' = hai bahut achhi. Demonstrative + Be Verb.",5),
  d5q("d5-t2-s3-q02","d5-t2-s3","'Woh meeting bahut productive thi.' ko English mein translate karo.","translation","That meeting was very productive.","'That meeting' = demonstrative adjective. 'Was productive' = past Be Verb.",6),
  d5q("d5-t2-s4-q01","d5-t2-s4","'Yeh kya hai?' ko English mein translate karo.","translation","What is this?","'What is this?' = Yeh kya hai? Question with demonstrative pronoun.",5),
  d5q("d5-t2-s4-q02","d5-t2-s4","'Woh kaun hai?' ko English mein translate karo.","translation","Who is that?","'Who is that?' = Woh kaun hai? Question about a far person.",5),
  d5q("d5-t2-s4-q03","d5-t2-s4","'Kya yeh available hai?' ko English mein translate karo.","translation","Is this available?","Yes/No question with demonstrative: 'Is this...?' = Kya yeh hai?",5),
];

export const DAY_5_T3_QUESTIONS: PracticeQ[] = [
  d5q("d5-t3-s1-q01","d5-t3-s1","'Yeh mera ghar hai.' ko English mein translate karo.","translation","This is my house.","Describing your home with demonstrative. Near singular.",5),
  d5q("d5-t3-s1-q02","d5-t3-s1","'Woh paas wali dukaan acchi hai.' ko English mein translate karo.","translation","That shop over there is good.","'That shop over there' = woh paas wali dukaan. Pointing to something at a distance.",6),
  d5q("d5-t3-s2-q01","d5-t3-s2","Shopping: 'Mujhe yeh wali pasand hai.' ko English mein translate karo.","translation","I like this one.","Shopping phrase. 'This one' = yeh wali/wala. Very common in shops.",5),
  d5q("d5-t3-s2-q02","d5-t3-s2","Shopping: 'Woh bag kitne ka hai?' ko English mein translate karo.","translation","How much is that bag?","'How much is that?' = Woh kitne ka hai? Shopping question with demonstrative.",5),
  d5q("d5-t3-s2-q03","d5-t3-s2","Shopping: 'Kya main yeh try kar sakta hun?' ko English mein translate karo.","translation","Can I try this?","Permission request using demonstrative. 'Can I try this?' = Kya main yeh try kar sakta hun?",6),
  d5q("d5-t3-s3-q01","d5-t3-s3","Office: 'Kripaya is report ko dekho.' ko English mein translate karo.","translation","Please review this report.","'This report' = is report. 'Review' = dekhna/review karna. Professional office phrase.",6),
  d5q("d5-t3-s3-q02","d5-t3-s3","Office: 'Woh project successfully complete ho gaya.' ko English mein translate karo.","translation","That project was successfully completed.","'That project' = woh project. Past passive with demonstrative.",7),
];

export const DAY_5_T4_QUESTIONS: PracticeQ[] = [
  d5q("d5-t4-s1-q01","d5-t4-s1","'Kursi' ko English mein kya kehte hain?","mcq","Chair","Kursi = Chair. Common household furniture word.",5,{a:"Table",b:"Chair",c:"Bed",d:"Door"}),
  d5q("d5-t4-s1-q02","d5-t4-s1","'This is a comfortable chair.' ka Hindi mein kya matlab hai?","translation","Yeh ek aaram deh kursi hai.","'This is a' = yeh ek hai. 'Comfortable' = aaram deh / aaram daya.",5),
  d5q("d5-t4-s2-q01","d5-t4-s2","'Printer' ko use karne ki sentence banao demonstrative ke sath.","translation","This printer is not working.","'This printer' = yeh printer. Common office complaint sentence.",6),
  d5q("d5-t4-s2-q02","d5-t4-s2","'Woh laptop naya hai.' ko English mein translate karo.","translation","That laptop is new.","'That laptop' = woh laptop (far). 'Is new' = naya hai. Tech vocabulary with demonstrative.",5),
  d5q("d5-t4-s3-q01","d5-t4-s3","'Yeh bahut acha plan hai.' ko English mein translate karo.","translation","This is a very good plan.","'This is a very good plan.' = Yeh bahut acha plan hai. Demonstrative + adjective.",5),
];

export const DAY_5_T5_QUESTIONS: PracticeQ[] = [
  d5q("d5-t5-s1-q01","d5-t5-s1","'Yeh cheez mere kaam ki nahi hai.' ko English mein translate karo.","translation","This is not useful for me.","Negative demonstrative sentence. 'Not useful for me' = mere kaam ki nahi.",6),
  d5q("d5-t5-s1-q02","d5-t5-s1","'Woh insaan bahut kind hai.' ko English mein translate karo.","translation","That person is very kind.","'That person' = far demonstrative adjective. 'Very kind' = bahut daya lu.",6),
  d5q("d5-t5-s1-q03","d5-t5-s1","'Yeh sab meri galti hai.' ko English mein translate karo.","translation","This is all my fault.","'This is all my fault' = Yeh sab meri galti hai. Demonstrative in self-reflection.",7),
  d5q("d5-t5-s2-q01","d5-t5-s2","Speaking: Apne kamre mein paas ki 5 cheezein describe karo 'This is...' se.","translation","This is my phone. This is my book. This is my pen. This is my bag. This is my water bottle.","'This is' = yeh hai. Describe 5 near objects. Good speaking practice.",5),
  d5q("d5-t5-s3-q01","d5-t5-s3","'Those students are very hard-working.' ka Hindi mein kya matlab hai?","translation","Woh sab students bahut mehnat karte hain.","'Those students' = woh sab students (far). 'Hard-working' = mehnat wale.",6),
  d5q("d5-t5-s3-q02","d5-t5-s3","Which sentence uses 'those' CORRECTLY?","mcq","Those are my books on the shelf.","'Those books on the shelf' are far from the speaker. Those = plural far demonstrative.",6,{a:"Those is my friend.",b:"Those is very nice.",c:"Those are my books on the shelf.",d:"Those am expensive."}),
];

// Export all Day 5 questions
export const ALL_DAY_5_QUESTIONS: PracticeQ[] = [
  ...DAY_5_T1_QUESTIONS,
  ...DAY_5_T2_QUESTIONS,
  ...DAY_5_T3_QUESTIONS,
  ...DAY_5_T4_QUESTIONS,
  ...DAY_5_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 6: HAS / HAVE QUESTIONS
// ══════════════════════════════════════════════════════════════

// Day 6 question helper — hindiExplanation is optional
const d6q = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  hindiOrPoints: string | number,
  pointsOrOptions?: number | { a: string; b: string; c: string; d: string },
  optionsParam?: { a: string; b: string; c: string; d: string }
): PracticeQ => {
  const hasHindi = typeof hindiOrPoints === "string";
  const hindiExplanation = hasHindi ? hindiOrPoints : explanation;
  const points = hasHindi
    ? (typeof pointsOrOptions === "number" ? pointsOrOptions : 5)
    : (typeof hindiOrPoints === "number" ? hindiOrPoints : 5);
  const options = hasHindi
    ? (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : optionsParam)
    : (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : undefined);
  return {
    id, subtopicId, questionText, questionType,
    difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
    correctAnswer, explanation, hindiExplanation,
    optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
    wordHints: [], points,
  };
};

export const DAY_6_T1_QUESTIONS: PracticeQ[] = [
  d6q("d6-t1-s1-q01","d6-t1-s1","'Mere paas ek car hai.' ko English mein translate karo.","translation","I have a car.","'I have' = mere paas hai. 'Have' is used with I/You/We/They.",5),
  d6q("d6-t1-s1-q02","d6-t1-s1","'Uske paas ek acchi job hai.' ko English mein translate karo. (She)","translation","She has a good job.","'She has' = uske paas hai. 'Has' is used with He/She/It.",5),
  d6q("d6-t1-s1-q03","d6-t1-s1","Which is CORRECT?","mcq","He has two brothers.","'He' takes 'has', not 'have'. Has = He/She/It. Have = I/You/We/They.",5,{a:"He have two brothers.",b:"He has two brothers.",c:"He had two brothers.",d:"He is have two brothers."}),
  d6q("d6-t1-s1-q04","d6-t1-s1","'Hamare paas ek bada ghar hai.' ko English mein translate karo.","translation","We have a big house.","'We have' = hamare paas hai. 'A big house' = ek bada ghar.",5),
  d6q("d6-t1-s1-q05","d6-t1-s1","'Unke paas bahut saari qualities hain.' ko English mein translate karo.","translation","They have many qualities.","'They have' = unke paas hain. 'Many qualities' = bahut saari qualities. Plural noun.",5),
  d6q("d6-t1-s2-q01","d6-t1-s2","'Mere paas do bhai hain.' ko English mein translate karo.","translation","I have two brothers.","'I have two brothers.' = Mere paas do bhai hain. Have + plural noun.",5),
  d6q("d6-t1-s2-q02","d6-t1-s2","'Aapke paas koi problem hai kya?' ko English mein translate karo.","translation","Do you have any problem?","Question with 'have': Do + you + have + object? Very common polite question.",5),
  d6q("d6-t1-s3-q01","d6-t1-s3","'Uske paas neeli aankhen hain.' ko English mein translate karo.","translation","She has blue eyes.","'She has blue eyes.' = Physical feature description. Has + adjective + noun.",5),
  d6q("d6-t1-s3-q02","d6-t1-s3","'Is phone mein ek great camera hai.' ko English mein translate karo.","translation","This phone has a great camera.","'This phone has' = feature description. It/This = has (third person singular).",6),
  d6q("d6-t1-s4-q01","d6-t1-s4","'Kya aapke paas koi ID proof hai?' ko English mein translate karo.","translation","Do you have any ID proof?","'Do you have?' = Kya aapke paas hai? Standard question form with Have.",5),
  d6q("d6-t1-s4-q02","d6-t1-s4","'Mere paas time nahi hai.' ko English mein translate karo.","translation","I don't have time.","Negative: I don't have = mere paas nahi hai. 'Time' = uncountable noun (no article).",5),
  d6q("d6-t1-s4-q03","d6-t1-s4","'Uske paas experience nahi hai.' ko English mein translate karo.","translation","She doesn't have experience.","Negative with 'doesn't': She doesn't have = uske paas nahi hai. Third person negative.",5),
];

export const DAY_6_T2_QUESTIONS: PracticeQ[] = [
  d6q("d6-t2-s1-q01","d6-t2-s1","'Mere paas ek degree hai.' ko English mein translate karo.","translation","I have a degree.","'I have a degree.' = Mere paas ek degree hai. Important for professional introductions.",5),
  d6q("d6-t2-s1-q02","d6-t2-s1","'Woh 10 saal ka experience rakhta hai.' ko English mein translate karo.","translation","He has 10 years of experience.","'He has 10 years of experience.' = Professional statement. Has + duration + of + noun.",7),
  d6q("d6-t2-s1-q03","d6-t2-s1","'Hamare paas ek acha team hai.' ko English mein translate karo.","translation","We have a good team.","'We have a good team.' = Office/professional context. Have + adjective + noun.",5),
  d6q("d6-t2-s2-q01","d6-t2-s2","'Uske baal lambe hain.' ko English mein translate karo.","translation","She has long hair.","'She has long hair.' = Physical description. Has + adjective + noun (feature).",5),
  d6q("d6-t2-s2-q02","d6-t2-s2","'Is building mein 20 floor hain.' ko English mein translate karo.","translation","This building has 20 floors.","'This building has' = feature description. It = has (third person).",6),
  d6q("d6-t2-s3-q01","d6-t2-s3","'Mere paas abhi time nahi hai.' ko English mein translate karo.","translation","I don't have time right now.","'I don't have time' = common polite refusal. 'Right now' = abhi.",5),
  d6q("d6-t2-s3-q02","d6-t2-s3","'Uske paas koi qualification nahi hai.' ko English mein translate karo.","translation","She doesn't have any qualification.","'She doesn't have any' = third person negative. 'Qualification' = yogyata.",6),
];

export const DAY_6_T3_QUESTIONS: PracticeQ[] = [
  d6q("d6-t3-s1-q01","d6-t3-s1","Present Perfect tense mein kaunsa helping verb use hota hai?","mcq","Have / Has","Present Perfect = Subject + have/has + V3 (past participle). Have with I/You/We/They. Has with He/She/It.",6,{a:"Did",b:"Was/Were",c:"Have / Has",d:"Will"}),
  d6q("d6-t3-s1-q02","d6-t3-s1","'Present Perfect' kab use karte hain?","mcq","Jab past ka action present se connected ho","Present Perfect is used when a past action has relevance to the present — just done, life experience, etc.",7,{a:"Sirf future ke liye",b:"Jab past ka action present se connected ho",c:"Sirf past ke liye",d:"Kabhie nahi"}),
  d6q("d6-t3-s2-q01","d6-t3-s2","'Maine khana kha liya.' ko English mein translate karo.","translation","I have eaten.","Present Perfect: I have + eaten (V3). 'Have eaten' = kha liya.",6),
  d6q("d6-t3-s2-q02","d6-t3-s2","'Usne report bheji hai.' ko English mein translate karo.","translation","She has sent the report.","Present Perfect: She has + sent (V3). 'Has sent' = bheji hai.",7),
  d6q("d6-t3-s2-q03","d6-t3-s2","'Humne yeh film dekhi hai.' ko English mein translate karo.","translation","We have watched this movie.","Present Perfect: We have + watched (V3). 'Have watched' = dekhi hai.",7),
  d6q("d6-t3-s3-q01","d6-t3-s3","'Kya tumne report submit ki hai?' ko English mein translate karo.","translation","Have you submitted the report?","Present Perfect question: Have + you + V3? 'Have you submitted' = kya tumne submit ki?",7),
  d6q("d6-t3-s3-q02","d6-t3-s3","'Maine pehle se email bheja hua hai.' ko English mein translate karo.","translation","I have already sent the email.","'Already' = pehle se. Present Perfect with already = I have already + V3.",8),
];

export const DAY_6_T4_QUESTIONS: PracticeQ[] = [
  d6q("d6-t4-s1-q01","d6-t4-s1","'Mere paas ek achhi salary wali job hai.' ko English mein translate karo.","translation","I have a well-paying job.","'I have a well-paying job.' = Professional statement. Have + compound adjective + noun.",7),
  d6q("d6-t4-s1-q02","d6-t4-s1","'Uske paas bahut zyada skills hain.' ko English mein translate karo.","translation","She has a lot of skills.","'A lot of skills' = bahut zyada skills. Have/Has + a lot of + plural noun.",6),
  d6q("d6-t4-s3-q01","d6-t4-s3","'Have a look at this.' ka Hindi mein kya matlab hai?","translation","Isko ek baar dekho.","'Have a look' = dekhna (idiom). Very common English idiom with HAVE.",6),
  d6q("d6-t4-s3-q02","d6-t4-s3","'Let's have a meeting.' ka kya matlab hai?","translation","Chaliye meeting karte hain.","'Have a meeting' = meeting karna. Common idiom: Have + a + noun.",5),
];

export const DAY_6_T5_QUESTIONS: PracticeQ[] = [
  d6q("d6-t5-s1-q01","d6-t5-s1","'Mere dost ke paas ek naya laptop hai.' ko English mein translate karo.","translation","My friend has a new laptop.","'My friend has' = mere dost ke paas hai. 'A new laptop' = ek naya laptop.",5),
  d6q("d6-t5-s1-q02","d6-t5-s1","'Is company mein 1000 employees hain.' ko English mein translate karo.","translation","This company has 1000 employees.","'This company has' = is company mein hain. Feature/composition description.",7),
  d6q("d6-t5-s1-q03","d6-t5-s1","'Kya aapne kabhi London dekha hai?' ko English mein translate karo.","translation","Have you ever been to London?","'Have you ever' = kya aapne kabhi. 'Been to' = gaye ho. Life experience question.",8),
  d6q("d6-t5-s2-q01","d6-t5-s2","Speaking: 'Mere paas [apni skills list karein].' ko English mein bolke answer dena.","translation","I have good communication skills, I have technical knowledge, I have leadership abilities.","List your skills using 'I have'. This is essential for interviews and introductions.",6),
  d6q("d6-t5-s3-q01","d6-t5-s3","Which is INCORRECT?","mcq","She have a meeting tomorrow.","'She' takes 'has', not 'have'. She has a meeting = uski meeting hai.",6,{a:"I have a presentation tomorrow.",b:"We have a project deadline.",c:"She have a meeting tomorrow.",d:"They have finished the work."}),
  d6q("d6-t5-s3-q02","d6-t5-s3","'Have you eaten?' kaa sahi Hindi matlab kya hai?","translation","Kya tumne khana kha liya?","'Have you eaten?' = Present Perfect question. 'Eaten' = V3 of eat.",6),
];

// Export all Day 6 questions
export const ALL_DAY_6_QUESTIONS: PracticeQ[] = [
  ...DAY_6_T1_QUESTIONS,
  ...DAY_6_T2_QUESTIONS,
  ...DAY_6_T3_QUESTIONS,
  ...DAY_6_T4_QUESTIONS,
  ...DAY_6_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 7: HAD QUESTIONS
// ══════════════════════════════════════════════════════════════

// Day 7 question helper — hindiExplanation is optional
const d7q = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  hindiOrPoints: string | number,
  pointsOrOptions?: number | { a: string; b: string; c: string; d: string },
  optionsParam?: { a: string; b: string; c: string; d: string }
): PracticeQ => {
  const hasHindi = typeof hindiOrPoints === "string";
  const hindiExplanation = hasHindi ? hindiOrPoints : explanation;
  const points = hasHindi
    ? (typeof pointsOrOptions === "number" ? pointsOrOptions : 5)
    : (typeof hindiOrPoints === "number" ? hindiOrPoints : 5);
  const options = hasHindi
    ? (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : optionsParam)
    : (typeof pointsOrOptions === "object" ? pointsOrOptions as { a: string; b: string; c: string; d: string } : undefined);
  return {
    id, subtopicId, questionText, questionType,
    difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
    correctAnswer, explanation, hindiExplanation,
    optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
    wordHints: [], points,
  };
};

export const DAY_7_T1_QUESTIONS: PracticeQ[] = [
  d7q("d7-t1-s1-q01","d7-t1-s1","'Pehle mere paas ek car thi.' ko English mein translate karo.","translation","I had a car.","'Had' = past of Have. 'I had a car' = pehle mere paas ek car thi.",5),
  d7q("d7-t1-s1-q02","d7-t1-s1","'Uske paas kal ek meeting thi.' ko English mein translate karo.","translation","She had a meeting yesterday.","'She had' = uske paas thi (past). 'Yesterday' confirms past tense.",5),
  d7q("d7-t1-s1-q03","d7-t1-s1","'Had' kis ka past tense hai?","mcq","Have / Has dono ka","'Had' is the past tense of BOTH 'have' and 'has'. All persons use 'had' in past tense.",5,{a:"Sirf 'have' ka",b:"Sirf 'has' ka",c:"Have / Has dono ka",d:"'Be' verb ka"}),
  d7q("d7-t1-s1-q04","d7-t1-s1","'Hum logon ke paas bohot saari problems thin.' ko English mein translate karo.","translation","We had many problems.","'We had many problems.' = Hum logon ke paas bahut saari problems thin. Past possession.",5),
  d7q("d7-t1-s2-q01","d7-t1-s2","'Bachpan mein mera ek bada ghar tha.' ko English mein translate karo.","translation","I had a big house in my childhood.","'I had' = past possession. 'In my childhood' = bachpan mein. Story-telling sentence.",6),
  d7q("d7-t1-s2-q02","d7-t1-s2","'Unke paas ek bada business tha.' ko English mein translate karo.","translation","They had a big business.","'They had a big business.' = Unke paas bada business tha. Past plural possession.",5),
  d7q("d7-t1-s3-q01","d7-t1-s3","'Kya tumhare paas pehle ek bike thi?' ko English mein translate karo.","translation","Did you have a bike before?","'Did you have?' = Kya tumhare paas tha? Past question with 'did'.",5),
  d7q("d7-t1-s3-q02","d7-t1-s3","'Kya uske paas koi option tha?' ko English mein translate karo.","translation","Did she have any option?","'Did she have?' = Kya uske paas tha? Past question. 'Any option' = koi option.",6),
  d7q("d7-t1-s4-q01","d7-t1-s4","'Mere paas kal paisa nahi tha.' ko English mein translate karo.","translation","I didn't have money yesterday.","'I didn't have' = mere paas nahi tha. Negative past: didn't + have.",5),
  d7q("d7-t1-s4-q02","d7-t1-s4","'Unke paas koi experience nahi tha.' ko English mein translate karo.","translation","They didn't have any experience.","'They didn't have any experience.' = Unke paas koi experience nahi tha. Past negative.",6),
];

export const DAY_7_T2_QUESTIONS: PracticeQ[] = [
  d7q("d7-t2-s1-q01","d7-t2-s1","'Past Perfect' mein kaunsa helping verb use hota hai?","mcq","Had","Past Perfect = Subject + had + V3 (past participle). ALL subjects use 'had'.",6,{a:"Have",b:"Has",c:"Had",d:"Was/Were"}),
  d7q("d7-t2-s1-q02","d7-t2-s1","Past Perfect kab use karte hain?","mcq","Jab do past actions mein se pehle wale ko dikhana ho","When two things happened in the past, Past Perfect shows which happened FIRST (before the other).",7,{a:"Sirf future mein",b:"Jab do past actions mein se pehle wale ko dikhana ho",c:"Present actions ke liye",d:"Kabhie nahi"}),
  d7q("d7-t2-s2-q01","d7-t2-s2","'Jab main pahuncha, woh ja chuka tha.' ko English mein translate karo.","translation","When I arrived, she had already left.","Past Perfect: 'had left' happened BEFORE 'I arrived'. Classic Past Perfect structure.",8),
  d7q("d7-t2-s2-q02","d7-t2-s2","'Maine khaana kha liya tha jab woh aaye.' ko English mein translate karo.","translation","I had eaten when they came.","'Had eaten' = Past Perfect (happened before 'they came'). Sequence of past events.",8),
  d7q("d7-t2-s2-q03","d7-t2-s2","'Usne pehle se report submit kar di thi.' ko English mein translate karo.","translation","She had already submitted the report.","'Had already submitted' = Past Perfect with 'already'. Professional use case.",8),
  d7q("d7-t2-s2-q04","d7-t2-s2","Past Perfect formula kya hai?","mcq","Subject + had + V3","Past Perfect = Subject + had + V3 (past participle). I had eaten. She had gone. They had finished.",7,{a:"Subject + have + V3",b:"Subject + was/were + V3",c:"Subject + had + V3",d:"Subject + did + V3"}),
  d7q("d7-t2-s3-q01","d7-t2-s3","'Train jane ke bad hum station pahunche.' ko English mein translate karo.","translation","We arrived at the station after the train had left.","'Had left' happened BEFORE 'we arrived'. The train leaving = first action (Past Perfect).",8),
  d7q("d7-t2-s3-q02","d7-t2-s3","'Jab tak hum pahunche tab tak khana khatam ho chuka tha.' ko English mein translate karo.","translation","By the time we arrived, the food had finished.","'By the time' = jab tak. 'Had finished' = Past Perfect for earlier action.",9),
  d7q("d7-t2-s4-q01","d7-t2-s4","'Kya tumne yeh pehle dekha tha?' ko English mein translate karo.","translation","Had you seen this before?","Past Perfect question: Had + subject + V3? 'Had you seen?' = Kya tumne dekha tha?",8),
  d7q("d7-t2-s4-q02","d7-t2-s4","'Maine pehle kabhi England nahi dekha tha.' ko English mein translate karo.","translation","I had never been to England before.","'Had never' = Past Perfect negative. 'Been to' = gaya hua hona. Travel Past Perfect.",9),
];

export const DAY_7_T3_QUESTIONS: PracticeQ[] = [
  d7q("d7-t3-s1-q01","d7-t3-s1","'Mujhe bahut acha waqt mila tha.' ko English mein translate karo.","translation","I had a great time.","'Had a great time' = bahut acha waqt mila. Common past experience expression.",5),
  d7q("d7-t3-s1-q02","d7-t3-s1","'Uski bahut mushkil zindagi rahi.' ko English mein translate karo.","translation","She had a very difficult life.","'Had a difficult life' = past life description. Had + a + adjective + noun.",6),
  d7q("d7-t3-s2-q01","d7-t3-s2","'Ek baar ek raja tha jiske paas ek jadui talwar thi.' ko English mein translate karo.","translation","Once there was a king who had a magical sword.","Story-telling with Had. 'Who had' = relative clause + past possession.",7),
  d7q("d7-t3-s3-q01","d7-t3-s3","'Maine email pehle hi bhej diya tha.' ko English mein translate karo.","translation","I had already sent the email.","Professional Past Perfect. 'Had already' = pehle hi kar liya tha. Office context.",8),
  d7q("d7-t3-s3-q02","d7-t3-s3","'Meeting shuru hone se pehle team ne saari preparation kar li thi.' ko English mein translate karo.","translation","The team had completed all preparation before the meeting started.","Complex Past Perfect. 'Before the meeting started' = meeting se pehle (Past Simple).",9),
];

export const DAY_7_T4_QUESTIONS: PracticeQ[] = [
  d7q("d7-t4-s1-q01","d7-t4-s1","'Woh bahut thaka hua tha.' ko English mein translate karo.","translation","He had been very tired.","'Had been' = past state with be verb. He had been tired = woh thaka hua tha.",7),
  d7q("d7-t4-s1-q02","d7-t4-s1","'Main college mein bahut busy tha.' ko English mein translate karo.","translation","I had been very busy in college.","'Had been busy' = past state. College mein = in college.",7),
  d7q("d7-t4-s2-q01","d7-t4-s2","'Eat' ka V3 form kya hai?","mcq","Eaten","V3 (past participle) of Eat = Eaten. Used in Perfect tenses: I have eaten, I had eaten.",6,{a:"Ate",b:"Eating",c:"Eaten",d:"Eated"}),
  d7q("d7-t4-s2-q02","d7-t4-s2","'Go' ka V3 form kya hai?","mcq","Gone","V3 of Go = Gone. I have gone. She had gone. Used in Perfect tenses.",6,{a:"Went",b:"Going",c:"Goes",d:"Gone"}),
  d7q("d7-t4-s2-q03","d7-t4-s2","'Write' ka V3 form kya hai?","mcq","Written","V3 of Write = Written. I have written. She had written. Important irregular verb.",6,{a:"Wrote",b:"Writing",c:"Written",d:"Writed"}),
  d7q("d7-t4-s3-q01","d7-t4-s3","'I had enough of this.' ka kya matlab hai?","mcq","Mujhe ab aur bardaasht nahi hota.","'Have/Had enough' = idiom meaning you can't tolerate anymore. Very common English expression.",7,{a:"Mere paas bahut kuch tha.",b:"Mujhe ab aur bardaasht nahi hota.",c:"Main bahut khush tha.",d:"Maine sab kuch rakh liya."}),
];

export const DAY_7_T5_QUESTIONS: PracticeQ[] = [
  d7q("d7-t5-s1-q01","d7-t5-s1","'Meri dadi ke paas bahut zyada samajhdari thi.' ko English mein translate karo.","translation","My grandmother had a lot of wisdom.","'Had a lot of wisdom' = bahut zyada samajhdari thi. Past possession of quality.",6),
  d7q("d7-t5-s1-q02","d7-t5-s1","'Jab main bada hua, to hamare paas paisa nahi tha.' ko English mein translate karo.","translation","When I was growing up, we didn't have money.","Storytelling with past negative: 'We didn't have money' = hamare paas paisa nahi tha.",7),
  d7q("d7-t5-s1-q03","d7-t5-s1","'Doctor ke aane se pehle meri tabiyat kharab ho chuki thi.' ko English mein translate karo.","translation","I had already fallen sick before the doctor came.","Past Perfect + Past Simple: 'had fallen sick' before 'doctor came'.",9),
  d7q("d7-t5-s2-q01","d7-t5-s2","Speaking: 'Bacchpan mein mere paas [koi cheez] tha/thi.' ko English mein bolke answer dena.","translation","In my childhood, I had a bicycle / a best friend / a dog.","Past possession in storytelling. 'In my childhood, I had a...' = bachpan mein mere paas tha.",6),
  d7q("d7-t5-s3-q01","d7-t5-s3","Which sentence shows Past Perfect CORRECTLY?","mcq","She had finished her work before the meeting.","'Had finished' is Past Perfect — the finishing happened BEFORE the meeting (Past Simple).",8,{a:"She finished her work before the meeting had started.",b:"She has finished her work before the meeting.",c:"She had finishing her work before the meeting.",d:"She had finished her work before the meeting."}),
  d7q("d7-t5-s3-q02","d7-t5-s3","'They had went to the party.' mein kya galti hai?","error_detection","They had gone to the party.","V3 of 'go' = 'gone', not 'went'. 'Went' is V2 (Simple Past). Past Perfect needs V3.",7,{a:"They had went to the party.",b:"They have went to the party.",c:"They had gone to the party.",d:"They was went to the party."}),
  d7q("d7-t5-s3-q03","d7-t5-s3","'She had eaten before she came.' is ___?","mcq","Correct — Past Perfect used properly","'Had eaten' happened BEFORE 'she came'. This is the correct use of Past Perfect.",8,{a:"Wrong — should be 'She has eaten before she came'",b:"Wrong — should be 'She ate before she came'",c:"Correct — Past Perfect used properly",d:"Wrong — should be 'She had eat before she came'"}),
];

// Export all Day 7 questions
export const ALL_DAY_7_QUESTIONS: PracticeQ[] = [
  ...DAY_7_T1_QUESTIONS,
  ...DAY_7_T2_QUESTIONS,
  ...DAY_7_T3_QUESTIONS,
  ...DAY_7_T4_QUESTIONS,
  ...DAY_7_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// ADDITIONAL QUESTIONS — Day 3 (50+ more)
// ══════════════════════════════════════════════════════════════
export const DAY_3_EXTRA_QUESTIONS: PracticeQ[] = [
  d3q("d3-ex-q01","d3-t1-s1","'Apna naam likhiye.' ko English mein translate karo.","translation","Write your name.","Write = base verb (imperative). Your name = apna naam. Simple command.",5),
  d3q("d3-ex-q02","d3-t1-s1","'Phone mat uthao.' ko English mein translate karo.","translation","Don't pick up the phone.","Don't + pick up (phrasal verb). Phone = phone. Negative imperative.",5),
  d3q("d3-ex-q03","d3-t1-s1","'Chaliye saath mein khaate hain.' ko English mein translate karo.","translation","Let's eat together.","Let's + eat (base verb) + together. Inclusive suggestion.",5),
  d3q("d3-ex-q04","d3-t1-s2","'Please thoda time dijiye.' ko English mein translate karo.","translation","Please give me some time.","Please + give me (indirect object) + some time. Polite request.",5),
  d3q("d3-ex-q05","d3-t1-s2","Which sentence uses 'Please' correctly?","mcq","Please submit your assignment by Friday.",5,{a:"Please to submit your assignment.",b:"Please submitting your assignment.",c:"Please submit your assignment by Friday.",d:"Please submitted your assignment."},"Correct form: Please + base verb. 'Please to submit' is wrong — never add 'to' after please.","Please + base verb = sahi form. 'Please to submit' galat hai."),
  d3q("d3-ex-q06","d3-t2-s1","'Apna bag pack karo.' ko English mein translate karo.","translation","Pack your bag.","Pack = base verb. Your bag = apna bag. Simple imperative.",5),
  d3q("d3-ex-q07","d3-t2-s1","'Meeting room book karo.' ko English mein translate karo.","translation","Book the meeting room.","Book = verb (to reserve). The meeting room = object. Office command.",6),
  d3q("d3-ex-q08","d3-t2-s1","'Clients ko email karo.' ko English mein translate karo.","translation","Email the clients.","Email = verb (imperative). The clients = object. Professional command.",6),
  d3q("d3-ex-q09","d3-t2-s2","'Is meeting mein late mat aana.' ko English mein translate karo.","translation","Don't be late to this meeting.","Don't be late = negative imperative with be verb. Very professional.",6),
  d3q("d3-ex-q10","d3-t2-s2","'Office mein personal calls mat karo.' ko English mein translate karo.","translation","Don't make personal calls at the office.","Don't + make + personal calls. 'At the office' = location. Professional rule.",6),
  d3q("d3-ex-q11","d3-t2-s3","'Chaliye project start karte hain.' ko English mein translate karo.","translation","Let's start the project.","Let's + start (base verb) + the project. Inclusive suggestion.",5),
  d3q("d3-ex-q12","d3-t2-s3","'Let's discuss this tomorrow.' ka Hindi mein matlab kya hai?","mcq","Chaliye kal is baare mein baat karte hain.",5,{a:"Woh kal discuss karega.",b:"Chaliye kal is baare mein baat karte hain.",c:"Kya hum kal baat karein?",d:"Kal discuss kiya tha."},"Let's discuss = chaliye baat karte hain. 'Let's' = suggestion for group action.","Let's = chaliye. Hum dono ya sabhi ke liye suggestion."),
  d3q("d3-ex-q13","d3-t3-s1","'Roz subah 6 baje utho.' ko English mein translate karo.","translation","Wake up at 6 AM every morning.","Wake up = phrasal verb (imperative). At 6 AM = time. Every morning = frequency.",6),
  d3q("d3-ex-q14","d3-t3-s1","'Roz ek naya English word seekho.' ko English mein translate karo.","translation","Learn one new English word every day.","Learn = base verb. One new English word = object. Every day = frequency.",5),
  d3q("d3-ex-q15","d3-t3-s2","'Kindly apna ID card saath rakhein.' ko English mein translate karo.","translation","Kindly keep your ID card with you.","Kindly = formal version of please. Keep = base verb. With you = saath mein.",6),
  d3q("d3-ex-q16","d3-t3-s2","'Please apni seat pe baith jaiye.' ko English mein translate karo.","translation","Please take your seat.","Take your seat = polite way of saying 'sit down'. Very formal/professional.",6),
  d3q("d3-ex-q17","d3-t3-s3","'No Parking.' sign ka kya matlab hai?","mcq","Yahan parking ki izajat nahi hai.",6,{a:"Parking available hai.",b:"Yahan parking ki izajat nahi hai.",c:"Free parking hai.",d:"Reserved parking hai."},"Signs use short imperatives. 'No + noun' = prohibitive sign.","No Parking = Yahan gaadi khadi mat karo. Signs short imperative use karte hain."),
  d3q("d3-ex-q18","d3-t3-s3","'Silence please.' ka Hindi mein kya matlab hai?","translation","Kripaya chup rahiye.","Silence please = kripaya chup rahiye. Sign/request for silence.",5),
  d3q("d3-ex-q19","d3-t4-s1","'Organize' ka kya matlab hai?","mcq","Vyavasthit karna",5,{a:"Todna",b:"Vyavasthit karna",c:"Padhna",d:"Bolna"},"Organize = to arrange things in order. Imperative: Organize your files.","Organize = vyavasthit karna. Office mein commonly use hota hai."),
  d3q("d3-ex-q20","d3-t4-s1","'Apni files organize karo.' ko English mein translate karo.","translation","Organize your files.","Organize = base verb. Your files = object. Common office command.",5),
  d3q("d3-ex-q21","d3-t4-s2","'Collaborate' ka kya matlab hai?","mcq","Milkar kaam karna",6,{a:"Akele kaam karna",b:"Milkar kaam karna",c:"Kaam band karna",d:"Kaam shuru karna"},"Collaborate = to work together with others.","Collaborate = milkar kaam karna. Team mein common word."),
  d3q("d3-ex-q22","d3-t5-s1","'Apni report update karo.' ko English mein translate karo.","translation","Update your report.","Update = base verb. Your report = object. Common office command.",5),
  d3q("d3-ex-q23","d3-t5-s1","'Meeting ke liye tayaar ho jao.' ko English mein translate karo.","translation","Get ready for the meeting.","Get ready = idiom for 'prepare'. For the meeting = ke liye.",6),
  d3q("d3-ex-q24","d3-t5-s2","'Roz English mein diary likho.' ko English mein translate karo.","translation","Write a diary in English every day.","Write = imperative. A diary = object. In English = English mein. Every day = roz.",6),
  d3q("d3-ex-q25","d3-t5-s2","'English mein socho, English mein bolo.' ko English mein translate karo.","translation","Think in English, speak in English.","Two imperatives: Think and speak. Both use base verb form.",7),
  d3q("d3-ex-q26","d3-t5-s3","Error detect karo: 'Kindly to fill this form.'","error_detection","Kindly fill this form.","Never use 'to' after Kindly/Please. Correct: Kindly + base verb.",6,{a:"Kindly filled this form.",b:"Kindly to fill this form.",c:"Kindly fill this form.",d:"Kindly filling this form."}),
  d3q("d3-ex-q27","d3-t5-s3","Error detect karo: 'Don't runs in the corridor.'","error_detection","Don't run in the corridor.","After Don't, always use base form (V1). 'Runs' is wrong — correct: 'run'.",6,{a:"Don't runs in the corridor.",b:"Don't running in the corridor.",c:"Don't run in the corridor.",d:"Not run in the corridor."}),
  d3q("d3-ex-q28","d3-t1-s1","Fill in the blank: '___ careful while driving.'","fill_blank","Be","'Be + adjective' = imperative. Be careful = dhyan rakhna. Be is used with adjectives.",5),
  d3q("d3-ex-q29","d3-t2-s1","Fill in the blank: '___ your work before submitting.'","fill_blank","Check","'Check your work' = imperative command. Base verb = Check.",5),
  d3q("d3-ex-q30","d3-t2-s1","Fill in the blank: 'Please ___ your phone on silent mode.'","fill_blank","keep","Keep = base verb. Please + keep = polite request.",5),
  d3q("d3-ex-q31","d3-t1-s3","'Kabhi bhi time waste mat karo.' ko English mein translate karo.","translation","Never waste your time.","Never + base verb = emphatic negative. Never = kabhi bhi nahi.",6),
  d3q("d3-ex-q32","d3-t1-s3","'Yahan mat aao.' ko English mein translate karo.","translation","Don't come here.","Don't + come = negative imperative. Here = yahan.",5),
  d3q("d3-ex-q33","d3-t1-s4","'Let's take a break.' ka Hindi mein kya matlab hai?","translation","Chaliye break lete hain.","Let's = let us = inclusive suggestion. Take a break = break lena.",5),
  d3q("d3-ex-q34","d3-t2-s4","'Do try this method.' mein 'Do' ka kya role hai?","mcq","Emphasis ke liye",7,{a:"Negative banane ke liye",b:"Emphasis ke liye",c:"Past tense ke liye",d:"Question banana ke liye"},"'Do + base verb' in imperative = emphatic form. Shows strong encouragement.","'Do try' = zaroor try karo. 'Do' emphasis deta hai."),
  d3q("d3-ex-q35","d3-t3-s1","'Roz 8 ghante soyo.' ko English mein translate karo.","translation","Sleep for 8 hours every day.","Sleep = base verb. For 8 hours = time duration. Every day = roz.",5),
  d3q("d3-ex-q36","d3-t3-s2","'Please project ke baare mein update dijiye.' ko English mein translate karo.","translation","Please provide an update on the project.","Please + provide (base verb) + an update + on the project. Professional phrase.",7),
  d3q("d3-ex-q37","d3-t4-s3","'Would you mind helping me?' ka kya matlab hai?","mcq","Kya aap meri madad kar sakte hain? (bahut polite)",8,{a:"Tum meri madad karo.",b:"Woh meri madad karta hai.",c:"Kya aap meri madad kar sakte hain? (bahut polite)",d:"Maine madad ki."},"Would you mind + gerund = most polite request form.","Would you mind helping = kya aapko madad karne mein koi problem nahi hogi?"),
  d3q("d3-ex-q38","d3-t4-s3","'Could you please send me the report?' ka Hindi mein kya matlab hai?","translation","Kya aap mujhe report bhej sakte hain?","Could you please = very polite request. Send me the report = report bhejna.",7),
  d3q("d3-ex-q39","d3-t5-s1","'Computer shut down karo.' ko English mein translate karo.","translation","Shut down the computer.","Shut down = phrasal verb (imperative). The computer = object.",5),
  d3q("d3-ex-q40","d3-t5-s1","'Presentation prepare karo.' ko English mein translate karo.","translation","Prepare the presentation.","Prepare = base verb. The presentation = object. Professional command.",5),
  d3q("d3-ex-q41","d3-t2-s1","'Haath dhoke khaana khao.' ko English mein translate karo.","translation","Wash your hands and then eat.","Two imperatives: Wash (first) and eat (second). Joined with 'and then'.",6),
  d3q("d3-ex-q42","d3-t1-s1","Identify the imperative: 'She runs every day.' OR 'Run every day.'","mcq","Run every day.","'Run every day' starts with a base verb — it is an imperative. 'She runs' is a statement.",5,{a:"She runs every day.",b:"Run every day.",c:"Does she run?",d:"She ran every day."}),
  d3q("d3-ex-q43","d3-t3-s3","'Add sugar and stir well.' kis context mein use hota hai?","mcq","Recipe instructions",5,{a:"Office notice",b:"Road sign",c:"Recipe instructions",d:"Emergency sign"},"Add and stir are imperatives used in cooking/recipe instructions.","Cooking recipes mein imperative use hota hai: Add, Stir, Mix, Bake."),
  d3q("d3-ex-q44","d3-t2-s2","'Kisi bhi meeting mein interrupt mat karo.' ko English mein translate karo.","translation","Don't interrupt during any meeting.","Don't + interrupt + during any meeting. Professional etiquette rule.",7),
  d3q("d3-ex-q45","d3-t5-s1","'Apna best do.' ko English mein translate karo.","translation","Give your best.","Give = base verb. Your best = apna best. Common motivational imperative.",5),
  d3q("d3-ex-q46","d3-t1-s2","Fill: 'Kindly ___ this form and submit it.'","fill_blank","fill in","Kindly + base verb. Fill in (phrasal verb) = koi form bharna.",6),
  d3q("d3-ex-q47","d3-t3-s2","'Please is meeting ka notes lein.' ko English mein translate karo.","translation","Please take notes during this meeting.","Please + take notes = meeting mein notes lena. Professional office command.",6),
  d3q("d3-ex-q48","d3-t1-s3","'Please mat poochho kyon.' ko English mein translate karo.","translation","Please don't ask why.","Please + don't (negative imperative) + ask + why. Polite negative command.",6),
  d3q("d3-ex-q49","d3-t5-s3","Error detect karo: 'Please don't to worry.'","error_detection","Please don't worry.","Never use 'to' after 'don't' in negative imperatives. Don't + base verb.",6,{a:"Please not worry.",b:"Please don't to worry.",c:"Please don't worry.",d:"Please don't worrying."}),
  d3q("d3-ex-q50","d3-t4-s1","'Report approve karo.' ko English mein translate karo.","translation","Approve the report.","Approve = base verb. The report = object. Management command.",7),
  d3q("d3-ex-q51","d3-t2-s1","'Data enter karo.' ko English mein translate karo.","translation","Enter the data.","Enter = base verb. The data = object. IT/office command.",5),
  d3q("d3-ex-q52","d3-t1-s1","'Jaldi jao aur wapas aao.' ko English mein translate karo.","translation","Go quickly and come back.","Two imperatives: Go and come back. Joined with 'and'.",6),
  d3q("d3-ex-q53","d3-t2-s1","'Pehle sochhna phir bolna.' ko English mein translate karo.","translation","Think first, then speak.","Two imperatives: Think (first) and speak (then). Order of action matters.",6),
];

// ══════════════════════════════════════════════════════════════
// ADDITIONAL QUESTIONS — Day 4 (50+ more)
// ══════════════════════════════════════════════════════════════
const d4xq = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  points: number,
  options?: { a: string; b: string; c: string; d: string }
): PracticeQ => ({
  id, subtopicId, questionText, questionType,
  difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
  correctAnswer, explanation, hindiExplanation: explanation,
  optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
  wordHints: [], points,
});

export const DAY_4_EXTRA_QUESTIONS: PracticeQ[] = [
  d4xq("d4-ex-q01","d4-t1-s1","'Woh ek engineer hai.' ko English mein translate karo.","translation","He is an engineer.","He is = woh hai. 'An' before engineer (starts with vowel sound). Be verb with profession.",5),
  d4xq("d4-ex-q02","d4-t1-s1","'Hum sab thake hue hain.' ko English mein translate karo.","translation","We are all tired.","We are = hum hain. All = sab. Tired = thake hue. Be verb + adjective.",5),
  d4xq("d4-ex-q03","d4-t1-s2","Fill in the blank: 'She ___ a doctor.'","fill_blank","is","She is = woh hai. Present tense. She takes 'is'.",5),
  d4xq("d4-ex-q04","d4-t1-s2","Fill in the blank: 'I ___ very happy today.'","fill_blank","am","I am = main hun. 'Am' is always used with 'I'.",5),
  d4xq("d4-ex-q05","d4-t1-s2","Fill in the blank: 'They ___ my colleagues.'","fill_blank","are","They are = woh hain. Plural subject takes 'are'.",5),
  d4xq("d4-ex-q06","d4-t1-s3","'Kal main ghar par tha.' ko English mein translate karo.","translation","I was at home yesterday.","I was = main tha. Yesterday = kal. At home = ghar par. Past be verb.",5),
  d4xq("d4-ex-q07","d4-t1-s3","'Woh log busy the.' ko English mein translate karo.","translation","They were busy.","They were = woh the. Busy = vyast. Past plural be verb.",5),
  d4xq("d4-ex-q08","d4-t1-s3","Fill in the blank: 'She ___ sick last week.'","fill_blank","was","She was = woh thi. Last week = pichle hafte. Past tense, singular.",5),
  d4xq("d4-ex-q09","d4-t1-s4","'Woh kal ready rahega.' ko English mein translate karo.","translation","He will be ready tomorrow.","Will be = future be verb. Ready = tayyar. Tomorrow = kal.",6),
  d4xq("d4-ex-q10","d4-t1-s4","'Future mein be verb ka kya form hoga?' ","mcq","Will be","Future tense with be verb = will + be. Example: I will be, She will be, They will be.",5,{a:"Am/Is/Are",b:"Was/Were",c:"Will be",d:"Being"}),
  d4xq("d4-ex-q11","d4-t2-s1","'Main ek student hun.' ko English mein translate karo.","translation","I am a student.","I am = main hun. A student = ek vidyarthi. 'A' before consonant sound.",5),
  d4xq("d4-ex-q12","d4-t2-s1","'Woh ek accountant hai.' ko English mein translate karo.","translation","She is an accountant.","She is = woh hai. 'An' before accountant (vowel sound 'a').",5),
  d4xq("d4-ex-q13","d4-t2-s2","'Tum bahut creative ho.' ko English mein translate karo.","translation","You are very creative.","You are = tum ho. Very creative = bahut creative. Be verb + adjective.",5),
  d4xq("d4-ex-q14","d4-t2-s2","'Woh kaam mein dedicated hai.' ko English mein translate karo.","translation","She is dedicated to her work.","She is = woh hai. Dedicated to = ke liye samarpita. Adjective + preposition.",6),
  d4xq("d4-ex-q15","d4-t2-s3","Error detect karo: 'I is a teacher.'","error_detection","I am a teacher.","'I' always takes 'am' — never 'is' or 'are'. This is a fundamental rule.",5,{a:"I is a teacher.",b:"I am a teacher.",c:"I are a teacher.",d:"I be a teacher."}),
  d4xq("d4-ex-q16","d4-t2-s3","Error detect karo: 'She are happy.'","error_detection","She is happy.","She/He/It always takes 'is'. 'Are' is for We/You/They.",5,{a:"She am happy.",b:"She is happy.",c:"She are happy.",d:"She be happy."}),
  d4xq("d4-ex-q17","d4-t3-s1","'Kya tum busy ho?' ko English mein translate karo.","translation","Are you busy?","Question form: Be verb (Are) + subject (you) + adjective (busy). Invert order for questions.",5),
  d4xq("d4-ex-q18","d4-t3-s1","'Kya woh office mein hai?' ko English mein translate karo.","translation","Is she at the office?","Question form: Is + she + at the office. Invert be verb and subject.",5),
  d4xq("d4-ex-q19","d4-t3-s2","'Main thaka hua nahi hun.' ko English mein translate karo.","translation","I am not tired.","Negative: I am + not + adjective. Am not = hun nahi.",5),
  d4xq("d4-ex-q20","d4-t3-s2","'Woh yahan nahi tha.' ko English mein translate karo.","translation","He was not here.","Negative past: He was + not + here. Was not = tha nahi.",5),
  d4xq("d4-ex-q21","d4-t1-s2","'Which be verb is used with You?'","mcq","are","You always takes 'are' — whether singular or plural subject.",5,{a:"am",b:"is",c:"are",d:"was"}),
  d4xq("d4-ex-q22","d4-t1-s3","'Which be verb is used with I in past?'","mcq","was","I was = main tha/thi. Past tense of 'I am' is 'I was'.",5,{a:"were",b:"am",c:"was",d:"is"}),
  d4xq("d4-ex-q23","d4-t2-s1","'Hum sab ek hi team mein hain.' ko English mein translate karo.","translation","We are all in the same team.","We are = hum hain. All = sab. In the same team = ek hi team mein.",6),
  d4xq("d4-ex-q24","d4-t2-s2","'Tum bahut talented ho.' ko English mein translate karo.","translation","You are very talented.","You are = tum ho. Very talented = bahut pratibhavan.",5),
  d4xq("d4-ex-q25","d4-t2-s3","Error detect karo: 'They was absent yesterday.'","error_detection","They were absent yesterday.","They (plural) takes 'were' in past tense, not 'was'.",5,{a:"They was absent yesterday.",b:"They were absent yesterday.",c:"They is absent yesterday.",d:"They are absent yesterday."}),
  d4xq("d4-ex-q26","d4-t3-s1","'Kya aap free hain?' ko English mein translate karo.","translation","Are you free?","Are + you (subject) + free (adjective). Simple question with be verb.",5),
  d4xq("d4-ex-q27","d4-t1-s1","'Woh log bahut experienced hain.' ko English mein translate karo.","translation","They are very experienced.","They are = woh hain. Very experienced = bahut anubhavi.",5),
  d4xq("d4-ex-q28","d4-t2-s2","Fill in the blank: 'She ___ very punctual at work.'","fill_blank","is","She is = woh hai. Present tense. Punctual = samay par aane wali.",5),
  d4xq("d4-ex-q29","d4-t1-s4","'Hum kal wahan honge.' ko English mein translate karo.","translation","We will be there tomorrow.","We will be = hum honge (future). There = wahan. Tomorrow = kal.",6),
  d4xq("d4-ex-q30","d4-t1-s3","'Kya woh log kal busy the?' ko English mein translate karo.","translation","Were they busy yesterday?","Question form past: Were + they + busy + yesterday. Invert for question.",6),
  d4xq("d4-ex-q31","d4-t3-s2","'Main office mein nahi hun.' ko English mein translate karo.","translation","I am not at the office.","I am not = main nahi hun. At the office = office mein.",5),
  d4xq("d4-ex-q32","d4-t1-s2","Be verb ka use kab hota hai?","mcq","Identity, state, profession, or description batane ke liye","Be verb is used to describe who someone is, what they do, or how they feel.",5,{a:"Action verbs ke sath",b:"Identity, state, profession, or description batane ke liye",c:"Past tense banane ke liye",d:"Questions mein sirf"}),
  d4xq("d4-ex-q33","d4-t2-s1","'Woh ek very dedicated teacher hain.' ko English mein translate karo.","translation","She is a very dedicated teacher.","She is = woh hain. A very dedicated teacher = bahut samarpita shikshak.",6),
  d4xq("d4-ex-q34","d4-t2-s3","Error detect karo: 'He is not a lazy student, he is working hard.'","error_detection","He is not a lazy student; he works hard.","The second clause should use Simple Present 'works', not a continuous form.",7,{a:"He is not a lazy student, he is working hard.",b:"He is not a lazy student; he works hard.",c:"He was not a lazy student; he was working hard.",d:"He is not lazy student; he works hard."}),
  d4xq("d4-ex-q35","d4-t3-s1","'Kya tum thake hue ho?' ko English mein translate karo.","translation","Are you tired?","Are + you + tired? Question form with be verb.",5),
  d4xq("d4-ex-q36","d4-t3-s2","'Woh khush nahi hai.' ko English mein translate karo.","translation","She is not happy.","She is not = woh nahi hai. Negative with be verb.",5),
  d4xq("d4-ex-q37","d4-t1-s1","'Woh ek nurse hai.' ko English mein translate karo.","translation","She is a nurse.","She is = woh hai. A nurse = ek nurse. Be verb + profession.",5),
  d4xq("d4-ex-q38","d4-t1-s2","Fill: 'The books ___ on the table.'","fill_blank","are","The books (plural) = are. On the table = mez par.",5),
  d4xq("d4-ex-q39","d4-t2-s2","'Main bahut proud hun apni team pe.' ko English mein translate karo.","translation","I am very proud of my team.","I am = main hun. Very proud of = bahut garv hai. Team = team.",6),
  d4xq("d4-ex-q40","d4-t1-s3","'Pichle saal hum bahut busy the.' ko English mein translate karo.","translation","We were very busy last year.","We were = hum the. Very busy = bahut vyast. Last year = pichle saal.",5),
  d4xq("d4-ex-q41","d4-t2-s1","'Main ek graduate hun.' ko English mein translate karo.","translation","I am a graduate.","I am = main hun. A graduate = ek graduate. Be verb + noun.",5),
  d4xq("d4-ex-q42","d4-t3-s1","'Kya woh doctor tha?' ko English mein translate karo.","translation","Was he a doctor?","Question past: Was + he + a doctor? Invert for question.",5),
  d4xq("d4-ex-q43","d4-t1-s4","'Kal raat mein yahan rahunga.' ko English mein translate karo.","translation","I will be here tonight.","I will be = main rahunga. Here = yahan. Tonight = aaj raat.",6),
  d4xq("d4-ex-q44","d4-t2-s2","'She ___ very professional in her approach.' mein kya aayega?","fill_blank","is","She is = present tense. Professional = peshavar. Approach = tarika.",5),
  d4xq("d4-ex-q45","d4-t1-s2","'Am/Is/Are' ka use kab hota hai?","mcq","Present tense mein","Am, Is, Are are present tense forms of be verb. Was, Were are past forms.",5,{a:"Past tense mein",b:"Future tense mein",c:"Present tense mein",d:"Perfect tense mein"}),
  d4xq("d4-ex-q46","d4-t2-s3","Error detect karo: 'You is wrong about that.'","error_detection","You are wrong about that.","'You' always takes 'are' — never 'is' or 'am'.",5,{a:"You am wrong about that.",b:"You is wrong about that.",c:"You are wrong about that.",d:"You was wrong about that."}),
  d4xq("d4-ex-q47","d4-t3-s2","'Hum thake nahi hain.' ko English mein translate karo.","translation","We are not tired.","We are not = hum nahi hain. Negative with be verb.",5),
  d4xq("d4-ex-q48","d4-t1-s3","'Was/Were' ka use kab hota hai?","mcq","Past tense mein","Was/Were are past tense forms. Was = I/He/She/It. Were = You/We/They.",5,{a:"Present tense mein",b:"Future tense mein",c:"Past tense mein",d:"Perfect tense mein"}),
  d4xq("d4-ex-q49","d4-t2-s2","'Woh bahut patient hai.' ko English mein translate karo.","translation","She is very patient.","She is = woh hai. Very patient = bahut dhairywaan.",5),
  d4xq("d4-ex-q50","d4-t2-s1","'Main ek manager hun.' ko English mein translate karo.","translation","I am a manager.","I am = main hun. A manager = ek manager. Be verb + profession.",5),
  d4xq("d4-ex-q51","d4-t1-s1","'Mera naam Rahul hai.' ko English mein translate karo.","translation","My name is Rahul.","My name is = mera naam hai. Be verb 'is' with singular noun.",5),
  d4xq("d4-ex-q52","d4-t2-s2","'Woh bahut sincere hai apne kaam mein.' ko English mein translate karo.","translation","She is very sincere in her work.","She is = woh hai. Very sincere = bahut imaandaar. In her work = apne kaam mein.",5),
];

// ══════════════════════════════════════════════════════════════
// ADDITIONAL QUESTIONS — Day 5 (50+ more)
// ══════════════════════════════════════════════════════════════
const d5xq = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  points: number,
  options?: { a: string; b: string; c: string; d: string }
): PracticeQ => ({
  id, subtopicId, questionText, questionType,
  difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
  correctAnswer, explanation, hindiExplanation: explanation,
  optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
  wordHints: [], points,
});

export const DAY_5_EXTRA_QUESTIONS: PracticeQ[] = [
  d5xq("d5-ex-q01","d5-t1-s1","'This' ka use kab hota hai?","mcq","Jo cheez paas ho, singular","This = paas ki ek cheez (singular). That = door, These = paas plural, Those = door plural.",5,{a:"Door cheez, plural",b:"Jo cheez paas ho, singular",c:"Door cheez, singular",d:"Paas cheez, plural"}),
  d5xq("d5-ex-q02","d5-t1-s1","'These' ka use kab hota hai?","mcq","Jo cheezein paas hon, plural","These = paas ki kai cheezeein (plural). Contrast with 'this' which is singular.",5,{a:"Door cheez, singular",b:"Paas cheez, singular",c:"Jo cheezein paas hon, plural",d:"Door cheezein, plural"}),
  d5xq("d5-ex-q03","d5-t1-s1","'That' ka use kab hota hai?","mcq","Door cheez, singular","That = door ki ek cheez (singular). Contrast with 'this' which is near.",5,{a:"Paas cheez, singular",b:"Paas cheezein, plural",c:"Door cheez, singular",d:"Door cheezein, plural"}),
  d5xq("d5-ex-q04","d5-t1-s1","'Those' ka use kab hota hai?","mcq","Door cheezein, plural","Those = door ki kai cheezein (plural). Contrast with 'these' which is near.",5,{a:"Paas cheez, singular",b:"Paas cheezein, plural",c:"Door cheez, singular",d:"Door cheezein, plural"}),
  d5xq("d5-ex-q05","d5-t1-s2","'Yeh meri kitaab hai.' ko English mein translate karo.","translation","This is my book.","This = yeh (paas, singular). Is = hai. My book = meri kitaab.",5),
  d5xq("d5-ex-q06","d5-t1-s2","'Woh mera pen hai.' ko English mein translate karo.","translation","That is my pen.","That = woh (door, singular). Is = hai. My pen = mera pen.",5),
  d5xq("d5-ex-q07","d5-t1-s2","'Yeh meri kitabein hain.' ko English mein translate karo.","translation","These are my books.","These = yeh sab (paas, plural). Are = hain. My books = meri kitabein.",5),
  d5xq("d5-ex-q08","d5-t1-s2","'Woh log mere dost hain.' ko English mein translate karo.","translation","Those are my friends.","Those = woh sab (door, plural). Are = hain. My friends = mere dost.",5),
  d5xq("d5-ex-q09","d5-t2-s1","Fill in the blank: '___ is a beautiful flower.' (paas)","fill_blank","This","This = paas ki ek cheez. Singular. 'A beautiful flower' = singular.",5),
  d5xq("d5-ex-q10","d5-t2-s1","Fill in the blank: '___ are my shoes.' (paas meri jootiyaan)","fill_blank","These","These = paas ki kai cheezein. Shoes = plural.",5),
  d5xq("d5-ex-q11","d5-t2-s1","Fill in the blank: '___ is the Taj Mahal.' (door)","fill_blank","That","That = door ki ek cheez. Taj Mahal = singular.",5),
  d5xq("d5-ex-q12","d5-t2-s1","Fill in the blank: '___ are my colleagues.' (door log)","fill_blank","Those","Those = door ki kai cheezein/log. Colleagues = plural.",5),
  d5xq("d5-ex-q13","d5-t2-s2","'Yeh mera laptop hai.' ko English mein translate karo.","translation","This is my laptop.","This = yeh. Is = hai. My laptop = mera laptop.",5),
  d5xq("d5-ex-q14","d5-t2-s2","'Woh building bahut purani hai.' ko English mein translate karo.","translation","That building is very old.","That = woh (door). Building = building. Is very old = bahut purani hai.",5),
  d5xq("d5-ex-q15","d5-t2-s2","'Yeh sab documents important hain.' ko English mein translate karo.","translation","These documents are important.","These = yeh sab (plural). Documents = documents. Are = hain. Important = zaroori.",5),
  d5xq("d5-ex-q16","d5-t2-s2","'Woh problems solve ho gayi hain.' ko English mein translate karo.","translation","Those problems have been solved.","Those = woh sab (door, plural). Problems = samasyas. Have been solved = passive perfect.",7),
  d5xq("d5-ex-q17","d5-t3-s1","Error detect karo: 'These is my pens.'","error_detection","These are my pens.","These (plural) takes 'are', not 'is'. Plural demonstrative = plural verb.",5,{a:"These is my pens.",b:"These are my pens.",c:"This are my pens.",d:"Those is my pens."}),
  d5xq("d5-ex-q18","d5-t3-s1","Error detect karo: 'That are my friends.'","error_detection","Those are my friends.","That = singular. For plural subject far away, use 'Those'.",5,{a:"That are my friends.",b:"Those is my friends.",c:"Those are my friends.",d:"That is my friends."}),
  d5xq("d5-ex-q19","d5-t3-s1","Error detect karo: 'This are good ideas.'","error_detection","These are good ideas.","Ideas = plural. For near plural things, use 'These'.",5,{a:"This is good ideas.",b:"This are good ideas.",c:"These are good ideas.",d:"These is good ideas."}),
  d5xq("d5-ex-q20","d5-t1-s1","'This' aur 'These' mein kya fark hai?","mcq","This = singular, These = plural","Both refer to near objects. 'This' = one (singular), 'These' = more than one (plural).",5,{a:"This = door, These = paas",b:"This = singular, These = plural",c:"This = plural, These = singular",d:"Dono same hain"}),
  d5xq("d5-ex-q21","d5-t1-s2","'Yeh chair toot gayi hai.' ko English mein translate karo.","translation","This chair is broken.","This = yeh (near, singular). Chair = chair. Is broken = toot gayi hai.",5),
  d5xq("d5-ex-q22","d5-t1-s2","'Woh ghar bahut sundar hai.' ko English mein translate karo.","translation","That house is very beautiful.","That = woh (far, singular). House = ghar. Is very beautiful = bahut sundar hai.",5),
  d5xq("d5-ex-q23","d5-t2-s1","Fill: '___ phone is not working.' (paas, singular)","fill_blank","This","This phone = yeh phone (near, singular).",5),
  d5xq("d5-ex-q24","d5-t2-s2","'Woh log bahut hardworking hain.' ko English mein translate karo.","translation","Those people are very hardworking.","Those = woh sab (far, plural). People = log. Are = hain. Hardworking = mehnatee.",5),
  d5xq("d5-ex-q25","d5-t1-s1","'Demonstrative pronoun' ka matlab kya hai?","mcq","Jo cheez ya insaan ki taraf ishara kare","Demonstrative pronouns point to specific nouns. This, That, These, Those = demonstrative.",5,{a:"Jo kisi ki jagah le",b:"Jo action bataye",c:"Jo cheez ya insaan ki taraf ishara kare",d:"Jo samay bataye"}),
  d5xq("d5-ex-q26","d5-t2-s1","Fill: '___ are the new employees.' (paas, plural)","fill_blank","These","These = paas ke kai log. Are = plural verb.",5),
  d5xq("d5-ex-q27","d5-t1-s2","'Yeh meri car hai.' ko English mein translate karo.","translation","This is my car.","This is = yeh hai. My car = meri car.",5),
  d5xq("d5-ex-q28","d5-t2-s2","'Yeh sab chairs khali hain.' ko English mein translate karo.","translation","These chairs are empty.","These = yeh sab (near, plural). Chairs = plural. Are = plural verb. Empty = khali.",5),
  d5xq("d5-ex-q29","d5-t3-s2","'This' ko singular ke sath use karte hain ya plural ke sath?","mcq","Singular","'This' is always used with singular nouns. 'These' is used with plural nouns.",5,{a:"Plural",b:"Singular",c:"Dono ke sath",d:"Kisi ke sath nahi"}),
  d5xq("d5-ex-q30","d5-t3-s2","'Those' ko singular ke sath use karte hain ya plural ke sath?","mcq","Plural","'Those' is always used with plural nouns. 'That' is used with singular.",5,{a:"Singular",b:"Plural",c:"Dono ke sath",d:"Kisi ke sath nahi"}),
  d5xq("d5-ex-q31","d5-t1-s2","'Woh kitaab bahut boring hai.' ko English mein translate karo.","translation","That book is very boring.","That = woh (far, singular). Book = kitaab. Is boring = boring hai.",5),
  d5xq("d5-ex-q32","d5-t2-s2","'Yeh saari problems solve ho sakti hain.' ko English mein translate karo.","translation","These problems can all be solved.","These = yeh sab (near, plural). Problems = samasyas. Can be solved = solve ho sakti hain.",7),
  d5xq("d5-ex-q33","d5-t1-s1","'This/That/These/Those' ko kya kehte hain?","mcq","Demonstrative pronouns","These four words point to specific things — near or far, singular or plural.",5,{a:"Personal pronouns",b:"Demonstrative pronouns",c:"Relative pronouns",d:"Interrogative pronouns"}),
  d5xq("d5-ex-q34","d5-t2-s1","Fill: '___ is an important rule.' (paas)","fill_blank","This","This rule = yeh niyam (near, singular).",5),
  d5xq("d5-ex-q35","d5-t1-s2","'Woh sab kitabein bahut helpful hain.' ko English mein translate karo.","translation","Those books are very helpful.","Those = woh sab (far, plural). Books = kitabein. Are = hain. Helpful = helpful.",5),
  d5xq("d5-ex-q36","d5-t3-s1","Error detect karo: 'This cars are new.'","error_detection","These cars are new.","Cars = plural. Near plural = These, not This.",5,{a:"This car are new.",b:"This cars is new.",c:"These cars are new.",d:"Those cars is new."}),
  d5xq("d5-ex-q37","d5-t2-s2","'Woh sab meetings bahut productive thin.' ko English mein translate karo.","translation","Those meetings were very productive.","Those = woh sab (far, plural). Meetings = plural. Were = thin (past).",6),
  d5xq("d5-ex-q38","d5-t1-s2","'Yeh mera favourite restaurant hai.' ko English mein translate karo.","translation","This is my favourite restaurant.","This is = yeh hai. My favourite restaurant = mera pasandida restaurant.",5),
  d5xq("d5-ex-q39","d5-t2-s2","'Woh sab students bahut talented hain.' ko English mein translate karo.","translation","Those students are very talented.","Those = woh sab (far, plural). Students = plural. Are = hain. Talented = pratibhashali.",5),
  d5xq("d5-ex-q40","d5-t1-s2","'Yeh sab options bahut achhe hain.' ko English mein translate karo.","translation","These options are very good.","These = yeh sab (near, plural). Options = plural. Are = hain. Good = achhe.",5),
  d5xq("d5-ex-q41","d5-t2-s1","Fill: '___ are my favourite songs.' (paas, plural)","fill_blank","These","These = paas ki kai cheezein. Songs = plural.",5),
  d5xq("d5-ex-q42","d5-t3-s1","Error detect karo: 'Those book is interesting.'","error_detection","That book is interesting.","One book = singular. Far singular = That, not Those.",5,{a:"Those books are interesting.",b:"That books are interesting.",c:"That book is interesting.",d:"Those book are interesting."}),
  d5xq("d5-ex-q43","d5-t1-s2","'Yeh mera office hai.' ko English mein translate karo.","translation","This is my office.","This is = yeh hai. My office = mera office.",5),
  d5xq("d5-ex-q44","d5-t3-s2","'That' aur 'Those' mein kya fark hai?","mcq","That = singular (door), Those = plural (door)","That = one far thing (singular). Those = many far things (plural).",5,{a:"That = paas, Those = door",b:"That = plural, Those = singular",c:"That = singular (door), Those = plural (door)",d:"Koi fark nahi"}),
  d5xq("d5-ex-q45","d5-t2-s2","'Woh experiment bahut successful raha.' ko English mein translate karo.","translation","That experiment was very successful.","That = woh (far, singular). Experiment. Was very successful = bahut successful raha.",6),
  d5xq("d5-ex-q46","d5-t1-s2","'Woh sab flowers bahut sundar hain.' ko English mein translate karo.","translation","Those flowers are very beautiful.","Those = woh sab (far, plural). Flowers = plural. Are = hain. Beautiful = sundar.",5),
  d5xq("d5-ex-q47","d5-t2-s2","'Yeh saari files important hain.' ko English mein translate karo.","translation","These files are important.","These = yeh sab (near, plural). Files = plural. Are = hain. Important = zaroori.",5),
  d5xq("d5-ex-q48","d5-t3-s1","Error detect karo: 'These is a good idea.'","error_detection","This is a good idea.","A good idea = singular. Near singular = This. This takes 'is'.",5,{a:"These are a good idea.",b:"These is a good idea.",c:"This is a good idea.",d:"Those is a good idea."}),
  d5xq("d5-ex-q49","d5-t1-s2","'Woh hospital bahut achha hai.' ko English mein translate karo.","translation","That hospital is very good.","That = woh (far, singular). Hospital = hospital. Is very good = bahut achha hai.",5),
  d5xq("d5-ex-q50","d5-t2-s1","Fill: '___ is a great opportunity.' (paas)","fill_blank","This","This = paas ki ek cheez. Opportunity = singular.",5),
  d5xq("d5-ex-q51","d5-t1-s2","'Yeh program bahut helpful hai.' ko English mein translate karo.","translation","This program is very helpful.","This = yeh (near, singular). Program = program. Is very helpful = bahut helpful hai.",5),
  d5xq("d5-ex-q52","d5-t2-s2","'Woh sab students exam mein pass ho gaye.' ko English mein translate karo.","translation","Those students passed the exam.","Those = woh sab (far, plural). Students = plural. Passed = past tense.",6),
];

// ══════════════════════════════════════════════════════════════
// ADDITIONAL QUESTIONS — Day 6 (50+ more)
// ══════════════════════════════════════════════════════════════
const d6xq = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  points: number,
  options?: { a: string; b: string; c: string; d: string }
): PracticeQ => ({
  id, subtopicId, questionText, questionType,
  difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
  correctAnswer, explanation, hindiExplanation: explanation,
  optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
  wordHints: [], points,
});

export const DAY_6_EXTRA_QUESTIONS: PracticeQ[] = [
  d6xq("d6-ex-q01","d6-t1-s1","'Uske paas ek car hai.' ko English mein translate karo.","translation","He has a car.","He has = uske paas hai. A car = ek car. Has = singular (He/She/It) present.",5),
  d6xq("d6-ex-q02","d6-t1-s1","'Mere paas ek mobile phone hai.' ko English mein translate karo.","translation","I have a mobile phone.","I have = mere paas hai. A mobile phone = ek mobile phone.",5),
  d6xq("d6-ex-q03","d6-t1-s1","'Uske paas bahut experience hai.' ko English mein translate karo.","translation","She has a lot of experience.","She has = uske paas hai. A lot of = bahut. Experience = anubhav.",5),
  d6xq("d6-ex-q04","d6-t1-s1","'Mere paas time nahi hai.' ko English mein translate karo.","translation","I don't have time.","I don't have = mere paas nahi hai. Time = samay. Negative form.",5),
  d6xq("d6-ex-q05","d6-t1-s2","'Uske paas ek achhi job hai.' ko English mein translate karo.","translation","She has a good job.","She has = uske paas hai. A good job = ek achhi naukri.",5),
  d6xq("d6-ex-q06","d6-t1-s2","'Unke paas ek sundar ghar hai.' ko English mein translate karo.","translation","They have a beautiful house.","They have = unke paas hain. A beautiful house = ek sundar ghar.",5),
  d6xq("d6-ex-q07","d6-t1-s2","Fill in the blank: 'She ___ blue eyes.'","fill_blank","has","She has = singular third person. Has = physical characteristic.",5),
  d6xq("d6-ex-q08","d6-t1-s2","Fill in the blank: 'I ___ a question.'","fill_blank","have","I have = main ke paas hai. Have = first person singular.",5),
  d6xq("d6-ex-q09","d6-t2-s1","'Kya uske paas car hai?' ko English mein translate karo.","translation","Does he have a car?","Question form: Does + he + have. Use 'have' (not has) in question with does.",6),
  d6xq("d6-ex-q10","d6-t2-s1","'Kya tumhare paas time hai?' ko English mein translate karo.","translation","Do you have time?","Question form: Do + you + have. Use 'do' for I/You/We/They.",5),
  d6xq("d6-ex-q11","d6-t2-s1","Error detect karo: 'She have a nice voice.'","error_detection","She has a nice voice.","She/He/It takes 'has'. 'Have' is for I/You/We/They.",5,{a:"She have a nice voice.",b:"She has a nice voice.",c:"She is having a nice voice.",d:"She had a nice voice."}),
  d6xq("d6-ex-q12","d6-t2-s1","Error detect karo: 'I has a big family.'","error_detection","I have a big family.","'I' takes 'have', not 'has'. Has is only for He/She/It.",5,{a:"I is having a big family.",b:"I had a big family.",c:"I has a big family.",d:"I have a big family."}),
  d6xq("d6-ex-q13","d6-t1-s1","'Have/Has' ka use kab hota hai?","mcq","Possession ya relationship batane ke liye","Have/Has is used to show ownership, relationships, or characteristics.",5,{a:"Action verbs ke sath",b:"Past tense batane ke liye",c:"Possession ya relationship batane ke liye",d:"Future batane ke liye"}),
  d6xq("d6-ex-q14","d6-t1-s2","'Mere paas ek younger sister hai.' ko English mein translate karo.","translation","I have a younger sister.","I have = mere paas hai. A younger sister = ek chhoti bahan.",5),
  d6xq("d6-ex-q15","d6-t1-s2","'Uske paas bahut saari skills hain.' ko English mein translate karo.","translation","She has many skills.","She has = uske paas hain. Many skills = bahut saari kaabiliyatein.",5),
  d6xq("d6-ex-q16","d6-t2-s1","'Has' ka use kab hota hai?","mcq","He/She/It ke sath (singular third person)","Has is only used with singular third person: He has, She has, It has.",5,{a:"I ke sath",b:"You ke sath",c:"He/She/It ke sath (singular third person)",d:"We/They ke sath"}),
  d6xq("d6-ex-q17","d6-t2-s2","'Have you ever been to Delhi?' ka Hindi mein kya matlab hai?","translation","Kya aap kabhi Delhi gaye hain?","Present Perfect question. Have you ever = kya aap kabhi... hain.",7),
  d6xq("d6-ex-q18","d6-t2-s2","'She has finished the project.' ka Hindi mein kya matlab hai?","translation","Usne project khatam kar diya hai.","Present Perfect: has + V3 (finished). Action completed at some point.",7),
  d6xq("d6-ex-q19","d6-t2-s2","'I have been working here for five years.' ka Hindi mein kya matlab hai?","translation","Main yahan paanch saal se kaam kar raha hun.","Present Perfect Continuous: have been + V-ing. Ongoing action from past.",8),
  d6xq("d6-ex-q20","d6-t3-s1","'Uske paas bahut courage hai.' ko English mein translate karo.","translation","She has a lot of courage.","She has = uske paas hai. A lot of courage = bahut himmat.",5),
  d6xq("d6-ex-q21","d6-t3-s1","'Mere paas ek strong work ethic hai.' ko English mein translate karo.","translation","I have a strong work ethic.","I have = mere paas hai. A strong work ethic = mazboot kaam ki aadat.",6),
  d6xq("d6-ex-q22","d6-t3-s1","'Is project ko sirf wo handle kar sakti hai.' ko English mein translate karo.","translation","Only she has the ability to handle this project.","She has the ability = uske paas kabiliyat hai. To handle = handle karne ki.",7),
  d6xq("d6-ex-q23","d6-t3-s2","'Unhe bahut knowledge hai.' ko English mein translate karo.","translation","They have a lot of knowledge.","They have = unke paas hai. A lot of knowledge = bahut gyaan.",5),
  d6xq("d6-ex-q24","d6-t1-s2","Fill: 'He ___ an MBA degree.'","fill_blank","has","He has = singular third person. MBA degree = qualification.",5),
  d6xq("d6-ex-q25","d6-t1-s2","Fill: 'We ___ a meeting at 3 PM.'","fill_blank","have","We have = first person plural. Meeting = baithak.",5),
  d6xq("d6-ex-q26","d6-t2-s1","'Kya tumhare paas koi suggestions hain?' ko English mein translate karo.","translation","Do you have any suggestions?","Do + you + have = question form. Any suggestions = koi sujhav.",6),
  d6xq("d6-ex-q27","d6-t2-s1","'Kya unke paas yeh documents hain?' ko English mein translate karo.","translation","Do they have these documents?","Do + they + have. Documents = kagzaat. Question form with plural.",5),
  d6xq("d6-ex-q28","d6-t2-s1","'Kya uske paas presentation ready hai?' ko English mein translate karo.","translation","Does she have the presentation ready?","Does + she + have. Presentation ready = tayyar presentation.",6),
  d6xq("d6-ex-q29","d6-t3-s1","'Mere paas ek strong network hai.' ko English mein translate karo.","translation","I have a strong network.","I have = mere paas hai. Strong network = mazboot sampark jaal.",6),
  d6xq("d6-ex-q30","d6-t3-s2","'Unki company ke paas bahut resources hain.' ko English mein translate karo.","translation","Their company has many resources.","Their company has = unki company ke paas hain. Many resources = bahut saare sansaadhan.",6),
  d6xq("d6-ex-q31","d6-t2-s2","'She ___ already submitted the report.' mein kya aayega?","fill_blank","has","Present Perfect: She has + V3. Already submitted = pahle se jama kar di.",6),
  d6xq("d6-ex-q32","d6-t2-s2","'They ___ been working here for ten years.' mein kya aayega?","fill_blank","have","Present Perfect Continuous: They have + been + V-ing. Ten years = das saal se.",7),
  d6xq("d6-ex-q33","d6-t1-s1","'Mere paas ek new idea hai.' ko English mein translate karo.","translation","I have a new idea.","I have = mere paas hai. A new idea = ek nayi soch.",5),
  d6xq("d6-ex-q34","d6-t1-s2","'Uske paas ek great sense of humour hai.' ko English mein translate karo.","translation","He has a great sense of humour.","He has = uske paas hai. A great sense of humour = gehri hansi ki aadat.",6),
  d6xq("d6-ex-q35","d6-t3-s1","'Uske paas leadership qualities hain.' ko English mein translate karo.","translation","She has leadership qualities.","She has = uske paas hain. Leadership qualities = netritva gun.",6),
  d6xq("d6-ex-q36","d6-t1-s1","'Mere paas aaj bahut kaam hai.' ko English mein translate karo.","translation","I have a lot of work today.","I have = mere paas hai. A lot of work = bahut kaam. Today = aaj.",5),
  d6xq("d6-ex-q37","d6-t2-s1","Error detect karo: 'Does she has a car?'","error_detection","Does she have a car?","With Does, always use base form 'have' not 'has'. Does + subject + have.",6,{a:"Does she has a car?",b:"Does she have a car?",c:"Do she has a car?",d:"Do she have a car?"}),
  d6xq("d6-ex-q38","d6-t2-s1","Error detect karo: 'Do he have a meeting?'","error_detection","Does he have a meeting?","With He (singular third person), use 'Does' not 'Do'.",6,{a:"Do he have a meeting?",b:"Does he has a meeting?",c:"Does he have a meeting?",d:"Do he has a meeting?"}),
  d6xq("d6-ex-q39","d6-t3-s2","'Hamari team ke paas bahut talent hai.' ko English mein translate karo.","translation","Our team has a lot of talent.","Our team has = hamari team ke paas hai. A lot of talent = bahut prateeba.",6),
  d6xq("d6-ex-q40","d6-t3-s2","'Is company ke paas 500 employees hain.' ko English mein translate karo.","translation","This company has 500 employees.","This company has = is company ke paas hain. 500 employees = 500 karamchaari.",6),
  d6xq("d6-ex-q41","d6-t1-s2","Fill: 'The team ___ a strong leader.'","fill_blank","has","The team has = team ke paas hai. Strong leader = mazboot neta.",5),
  d6xq("d6-ex-q42","d6-t1-s2","Fill: 'They ___ many offices in India.'","fill_blank","have","They have = unke paas hain. Many offices = kai karyaalay.",5),
  d6xq("d6-ex-q43","d6-t2-s2","'He has been in this company for 10 years.' ka kya matlab hai?","translation","Woh is company mein 10 saal se hai.","Present Perfect: has been = hai (ongoing from past). 10 years = das saal se.",7),
  d6xq("d6-ex-q44","d6-t3-s1","'Uske paas bahut patience hai.' ko English mein translate karo.","translation","She has a lot of patience.","She has = uske paas hai. A lot of patience = bahut sabr.",5),
  d6xq("d6-ex-q45","d6-t3-s1","'Mere paas ek strong goal hai.' ko English mein translate karo.","translation","I have a strong goal.","I have = mere paas hai. A strong goal = ek mazboot lakshya.",5),
  d6xq("d6-ex-q46","d6-t2-s2","'I have never seen such dedication.' ka kya matlab hai?","translation","Maine itni dedication kabhi nahi dekhi.","Present Perfect + never = kabhi nahi. Seen = V3 of see. Such dedication = aisi lagan.",7),
  d6xq("d6-ex-q47","d6-t3-s2","'Unke paas sab kuch hai jo kisi ko chahiye.' ko English mein translate karo.","translation","They have everything that anyone could need.","They have = unke paas hai. Everything = sab kuch. Could need = chahiye ho sakta hai.",8),
  d6xq("d6-ex-q48","d6-t1-s1","'Uski company ke paas 3 awards hain.' ko English mein translate karo.","translation","His company has 3 awards.","His company has = uski company ke paas hain. 3 awards = teen puraskar.",5),
  d6xq("d6-ex-q49","d6-t2-s1","'Have' aur 'Has' mein kya fark hai?","mcq","Have = I/You/We/They, Has = He/She/It","Have is for first person (I), second person (You), plural (We/They). Has is for third person singular.",5,{a:"Koi fark nahi",b:"Have = past, Has = present",c:"Have = I/You/We/They, Has = He/She/It",d:"Have = future, Has = present"}),
  d6xq("d6-ex-q50","d6-t1-s2","'Mere paas ek positive attitude hai.' ko English mein translate karo.","translation","I have a positive attitude.","I have = mere paas hai. A positive attitude = sakaraatmak soch.",5),
  d6xq("d6-ex-q51","d6-t3-s1","'Uske paas bahut confidence hai.' ko English mein translate karo.","translation","She has a lot of confidence.","She has = uske paas hai. A lot of confidence = bahut aatmavishwaas.",5),
  d6xq("d6-ex-q52","d6-t3-s2","'Hamari organisation ke paas bahut resources hain.' ko English mein translate karo.","translation","Our organisation has many resources.","Our organisation has = hamari sanstha ke paas hain. Many resources = bahut sansaadhan.",6),
];

// ══════════════════════════════════════════════════════════════
// ADDITIONAL QUESTIONS — Day 7 (50+ more)
// ══════════════════════════════════════════════════════════════
const d7xq = (
  id: string, subtopicId: string, questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string, explanation: string,
  points: number,
  options?: { a: string; b: string; c: string; d: string }
): PracticeQ => ({
  id, subtopicId, questionText, questionType,
  difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
  correctAnswer, explanation, hindiExplanation: explanation,
  optionA: options?.a, optionB: options?.b, optionC: options?.c, optionD: options?.d,
  wordHints: [], points,
});

export const DAY_7_EXTRA_QUESTIONS: PracticeQ[] = [
  d7xq("d7-ex-q01","d7-t1-s1","'Had' ka use kab hota hai?","mcq","Past perfect tense mein (pehle ki completed action)","'Had' is used in Past Perfect tense to show an action completed before another past event.",5,{a:"Present tense mein",b:"Future tense mein",c:"Past perfect tense mein (pehle ki completed action)",d:"Simple present mein"}),
  d7xq("d7-ex-q02","d7-t1-s1","'Maine khana khaya tha pehle aane se.' ko English mein translate karo.","translation","I had eaten before coming.","Past Perfect: I + had + V3 (eaten). Before coming = aane se pehle.",6),
  d7xq("d7-ex-q03","d7-t1-s1","'Usne exam dene se pehle padha tha.' ko English mein translate karo.","translation","She had studied before taking the exam.","Past Perfect: She + had + studied (V3). Before taking the exam = exam se pehle.",6),
  d7xq("d7-ex-q04","d7-t1-s2","Past Perfect mein konsi V form use hoti hai?","mcq","Had + V3 (past participle)","Past Perfect = Had + V3. V3 is the past participle: gone, eaten, taken, seen.",5,{a:"Had + V1",b:"Had + V2",c:"Had + V3 (past participle)",d:"Was/Were + V3"}),
  d7xq("d7-ex-q05","d7-t1-s2","'Maine usse pehle kabhi nahi dekha tha.' ko English mein translate karo.","translation","I had never seen him before.","Past Perfect: I + had + never + seen (V3). Before = pehle. Negative with never.",7),
  d7xq("d7-ex-q06","d7-t1-s2","Fill: 'She ___ finished her work before the deadline.'","fill_blank","had","Past Perfect: She + had + V3. Before the deadline = deadline se pehle.",6),
  d7xq("d7-ex-q07","d7-t1-s2","Fill: 'They ___ left by the time I arrived.'","fill_blank","had","Past Perfect: They + had + left (V3). By the time = jab tak.",6),
  d7xq("d7-ex-q08","d7-t1-s1","'Woh jaa chuka tha jab main aaya.' ko English mein translate karo.","translation","He had gone when I arrived.","Past Perfect for first action (had gone). Simple Past for second action (arrived).",7),
  d7xq("d7-ex-q09","d7-t2-s1","'Train chali thi jab tak main pahuncha.' ko English mein translate karo.","translation","The train had left by the time I reached.","Had left = pehle ki action. By the time I reached = jab tak main pahuncha.",7),
  d7xq("d7-ex-q10","d7-t2-s1","'Usne pehle hi bata diya tha.' ko English mein translate karo.","translation","She had already told me.","Had told = Past Perfect. Already = pehle hi. Past action before something.",6),
  d7xq("d7-ex-q11","d7-t2-s1","'Humne pehle se planning kar li thi.' ko English mein translate karo.","translation","We had already planned it.","We + had + planned (V3). Already = pehle se. Planning completed before event.",6),
  d7xq("d7-ex-q12","d7-t2-s2","Error detect karo: 'She had went to Mumbai.'","error_detection","She had gone to Mumbai.","V3 of 'go' is 'gone', not 'went' (which is V2). Past Perfect uses V3.",6,{a:"She had went to Mumbai.",b:"She had go to Mumbai.",c:"She had gone to Mumbai.",d:"She has gone to Mumbai."}),
  d7xq("d7-ex-q13","d7-t2-s2","Error detect karo: 'He had ate before leaving.'","error_detection","He had eaten before leaving.","V3 of 'eat' is 'eaten', not 'ate' (V2). Past Perfect uses V3.",6,{a:"He had ate before leaving.",b:"He had eat before leaving.",c:"He had eaten before leaving.",d:"He has eaten before leaving."}),
  d7xq("d7-ex-q14","d7-t2-s2","Error detect karo: 'They had wrote a letter.'","error_detection","They had written a letter.","V3 of 'write' is 'written', not 'wrote' (V2). Past Perfect uses V3.",6,{a:"They had wrote a letter.",b:"They had write a letter.",c:"They had written a letter.",d:"They have written a letter."}),
  d7xq("d7-ex-q15","d7-t1-s1","'Woh job apply karne se pehle CV update kar chuka tha.' ko English mein translate karo.","translation","He had updated his CV before applying for the job.","Had updated = completed before applying. Before applying = apply karne se pehle.",7),
  d7xq("d7-ex-q16","d7-t2-s1","'Jab tak main pahuncha tab tak presentation shuru ho chuki thi.' ko English mein translate karo.","translation","By the time I arrived, the presentation had already started.","By the time I arrived = jab tak main pahuncha. Presentation had started = pehle ho chuki thi.",8),
  d7xq("d7-ex-q17","d7-t3-s1","'Pehle humne is cheez pe sochha tha.' ko English mein translate karo.","translation","We had thought about this before.","Had thought = Past Perfect. About this = is baare mein. Before = pehle.",6),
  d7xq("d7-ex-q18","d7-t3-s1","'Maine usse pehle baat ki thi.' ko English mein translate karo.","translation","I had spoken to him before.","Had spoken = Past Perfect (V3 of speak). Before = pehle.",6),
  d7xq("d7-ex-q19","d7-t3-s1","'Usne kabhi yahan kaam nahi kiya tha.' ko English mein translate karo.","translation","She had never worked here.","Had never worked = negative Past Perfect. Never = kabhi nahi.",7),
  d7xq("d7-ex-q20","d7-t1-s2","'Past Perfect kab use karte hain?' ka sahi answer kya hai?","mcq","Jab do past actions hon aur ek pehle complete ho","Past Perfect is used when there are two past actions and one was completed before the other.",6,{a:"Jab ek hi past action ho",b:"Jab future ki baat karein",c:"Jab do past actions hon aur ek pehle complete ho",d:"Present actions ke liye"}),
  d7xq("d7-ex-q21","d7-t1-s1","'Usne mujhe pehle hi bata diya tha.' ko English mein translate karo.","translation","She had already told me.","Had told = Past Perfect. Already = pehle hi. Action completed before.",6),
  d7xq("d7-ex-q22","d7-t2-s1","'Woh bahut kuch hasil kar chuke the jab ye khabar aayi.' ko English mein translate karo.","translation","They had achieved a lot when the news came.","Had achieved = Past Perfect. When the news came = khabar aayi (Simple Past).",7),
  d7xq("d7-ex-q23","d7-t3-s1","'Ek baar mujhe pehle se sab pata tha.' ko English mein translate karo.","translation","I had known it all along.","Had known = Past Perfect. All along = pehle se hi. Expressing prior knowledge.",7),
  d7xq("d7-ex-q24","d7-t1-s2","Fill: 'Before I arrived, she ___ cooked dinner.'","fill_blank","had","Past Perfect: she + had + cooked (V3). Before I arrived = main aane se pehle.",6),
  d7xq("d7-ex-q25","d7-t2-s1","Fill: 'By the time the meeting ended, he ___ finished the report.'","fill_blank","had","Past Perfect: he + had + finished (V3). By the time = jab tak.",6),
  d7xq("d7-ex-q26","d7-t1-s1","'V3 of drink' kya hai?","mcq","Drunk","Drink → Drank → Drunk. Irregular verb. I had drunk = maine piya tha.",5,{a:"Drank",b:"Drunk",c:"Drinked",d:"Drink"}),
  d7xq("d7-ex-q27","d7-t1-s1","'V3 of speak' kya hai?","mcq","Spoken","Speak → Spoke → Spoken. Irregular verb. I had spoken = maine bola tha.",5,{a:"Spoke",b:"Speak",c:"Spoken",d:"Speaked"}),
  d7xq("d7-ex-q28","d7-t1-s1","'V3 of come' kya hai?","mcq","Come","Come → Came → Come. Irregular verb (same as V1). I had come = main aaya tha.",5,{a:"Came",b:"Coming",c:"Comed",d:"Come"}),
  d7xq("d7-ex-q29","d7-t1-s1","'V3 of give' kya hai?","mcq","Given","Give → Gave → Given. Irregular verb. I had given = maine diya tha.",5,{a:"Gave",b:"Given",c:"Gived",d:"Give"}),
  d7xq("d7-ex-q30","d7-t2-s2","'She had never visited that city before.' ka Hindi mein kya matlab hai?","translation","Usne us sheher ko pehle kabhi nahi dekha tha.","Past Perfect + never = kabhi nahi (past). Before = pehle.",7),
  d7xq("d7-ex-q31","d7-t3-s1","'Usne bahut kuch seekha tha us time tak.' ko English mein translate karo.","translation","She had learned a lot by that time.","Had learned = Past Perfect. By that time = us time tak.",7),
  d7xq("d7-ex-q32","d7-t2-s1","'Jab main wahan pahuncha, woh pehle se chale gaye the.' ko English mein translate karo.","translation","When I got there, they had already left.","When I got there = jab main pahuncha. They had already left = pehle ja chuke the.",7),
  d7xq("d7-ex-q33","d7-t1-s1","'I had a good time' ka kya matlab hai?","translation","Mujhe bahut maza aaya.","Had a good time = maza aaya. Common idiom using 'had' in past.",5),
  d7xq("d7-ex-q34","d7-t1-s1","'She had made up her mind.' ka kya matlab hai?","translation","Usne apna faisla kar liya tha.","Had made up her mind = faisla kar liya tha. Idiom for 'decided'.",6),
  d7xq("d7-ex-q35","d7-t3-s1","'Usne apna dil poora de diya tha is kaam mein.' ko English mein translate karo.","translation","She had put her heart and soul into this work.","Had put = Past Perfect. Heart and soul = puri tarah. Idiom for total dedication.",7),
  d7xq("d7-ex-q36","d7-t2-s1","Past Perfect formula kya hai?","mcq","Subject + Had + V3","Past Perfect = Subject + Had + V3 (past participle). Example: She had gone.",5,{a:"Subject + Have + V1",b:"Subject + Had + V3",c:"Subject + Was + V2",d:"Subject + Will + Have + V3"}),
  d7xq("d7-ex-q37","d7-t1-s2","Fill: 'He ___ never made such a mistake before.'","fill_blank","had","Past Perfect: He + had + never + made (V3). Before = pehle.",6),
  d7xq("d7-ex-q38","d7-t2-s2","'When did she leave?' vs 'She had left.' mein kya fark hai?","mcq","Pehla Simple Past hai, doosra Past Perfect","'When did she leave?' = Simple Past question. 'She had left' = Past Perfect showing a completed earlier action.",7,{a:"Dono same hain",b:"Pehla Simple Past hai, doosra Past Perfect",c:"Dono Past Perfect hain",d:"Pehla Present, doosra Past hai"}),
  d7xq("d7-ex-q39","d7-t3-s1","'Unhone us project mein bahut mehnat ki thi.' ko English mein translate karo.","translation","They had worked very hard on that project.","Had worked = Past Perfect. Very hard = bahut mehnat. On that project = us project mein.",6),
  d7xq("d7-ex-q40","d7-t3-s1","'Maine us din bahut galti ki thi.' ko English mein translate karo.","translation","I had made a big mistake that day.","Had made = Past Perfect. A big mistake = bahut galti. That day = us din.",6),
  d7xq("d7-ex-q41","d7-t1-s1","'She had' vs 'She has' mein kya fark hai?","mcq","Had = past perfect, Has = present perfect/possession","'Had' is past (completed) tense. 'Has' is present possession or present perfect.",5,{a:"Koi fark nahi",b:"Had = past perfect, Has = present perfect/possession",c:"Had = future, Has = present",d:"Had = singular, Has = plural"}),
  d7xq("d7-ex-q42","d7-t1-s2","Fill: 'I ___ already read that book when she recommended it.'","fill_blank","had","Past Perfect: I + had + already + read (V3). When she recommended = jab usne recommend kiya.",7),
  d7xq("d7-ex-q43","d7-t2-s2","Error detect karo: 'By the time he came, I have finished.'","error_detection","By the time he came, I had finished.","'By the time' + past event requires Past Perfect. Use 'had finished', not 'have finished'.",7,{a:"By the time he came, I have finished.",b:"By the time he came, I had finished.",c:"By the time he come, I had finished.",d:"By the time he came, I has finished."}),
  d7xq("d7-ex-q44","d7-t3-s1","'Usne us din sabse zyada results diye the.' ko English mein translate karo.","translation","She had given the best results that day.","Had given = Past Perfect (V3 of give). Best results = sabse achhe result. That day = us din.",7),
  d7xq("d7-ex-q45","d7-t1-s1","'V3 of take' kya hai?","mcq","Taken","Take → Took → Taken. Irregular verb. I had taken = maine liya tha.",5,{a:"Took",b:"Take",c:"Taken",d:"Taked"}),
  d7xq("d7-ex-q46","d7-t1-s1","'V3 of run' kya hai?","mcq","Run","Run → Ran → Run. Irregular verb (same as V1). I had run = main dauda tha.",5,{a:"Ran",b:"Running",c:"Run",d:"Runned"}),
  d7xq("d7-ex-q47","d7-t2-s1","'Woh bahut thak gayi thi itna kaam karne ke baad.' ko English mein translate karo.","translation","She had become very tired after doing so much work.","Had become = Past Perfect. Very tired = bahut thak gayi. After doing = karne ke baad.",7),
  d7xq("d7-ex-q48","d7-t3-s2","'Maine pehle hi is situation ke baare mein socha tha.' ko English mein translate karo.","translation","I had already thought about this situation.","Had thought = Past Perfect (V3 of think). Already = pehle hi. About this situation = is sthiti ke baare mein.",7),
  d7xq("d7-ex-q49","d7-t1-s2","Fill: 'By 2020, she ___ completed her degree.'","fill_blank","had","Past Perfect with specific past time. She + had + completed (V3).",6),
  d7xq("d7-ex-q50","d7-t2-s2","'She had been waiting for an hour when he arrived.' ka kya matlab hai?","translation","Jab woh pahuncha, toh woh ek ghante se intezaar kar rahi thi.","Past Perfect Continuous: had been + V-ing. Ongoing action before another past event.",8),
  d7xq("d7-ex-q51","d7-t3-s1","'Usne bahut kuch sikhaya tha hume.' ko English mein translate karo.","translation","She had taught us a lot.","Had taught = Past Perfect (V3 of teach). Us = hume. A lot = bahut kuch.",6),
  d7xq("d7-ex-q52","d7-t1-s1","'Unhone pahle kabhi yahan kaam nahi kiya tha.' ko English mein translate karo.","translation","They had never worked here before.","Had never worked = negative Past Perfect. Before = pehle. Never = kabhi nahi.",7),
];

// ─── Import extra questions (Days 4-7 expanded banks) ─────────
// These add 40-60 more questions per day for a total of 80-100+ per day
import {
  ALL_DAY_4_EXTRA,
  ALL_DAY_5_EXTRA,
  ALL_DAY_6_EXTRA,
  ALL_DAY_7_EXTRA,
} from "./days-4-7-extra-questions";

// ─── Merged question banks (original + extra) ─────────────────
const MERGED_DAY_4 = [...ALL_DAY_4_QUESTIONS, ...ALL_DAY_4_EXTRA];
const MERGED_DAY_5 = [...ALL_DAY_5_QUESTIONS, ...ALL_DAY_5_EXTRA];
const MERGED_DAY_6 = [...ALL_DAY_6_QUESTIONS, ...ALL_DAY_6_EXTRA];
const MERGED_DAY_7 = [...ALL_DAY_7_QUESTIONS, ...ALL_DAY_7_EXTRA];

// ─── Master export: All Days 3-7 Questions ───────────────────
export const ALL_DAYS_3_TO_7_QUESTIONS: PracticeQ[] = [
  ...ALL_DAY_3_QUESTIONS,
  ...MERGED_DAY_4,
  ...MERGED_DAY_5,
  ...MERGED_DAY_6,
  ...MERGED_DAY_7,
];

// ─── Helper: Get questions for a specific day/subtopic ────────
// Returns merged (original + extra) questions for Days 4-7
export function getDays3to7Questions(dayNumber: number, subtopicId?: string): PracticeQ[] {
  // Map each day to its merged question array (original + extra)
  const dayMap: Record<number, PracticeQ[]> = {
    3: ALL_DAY_3_QUESTIONS,  // Day 3 already has 80+ questions
    4: MERGED_DAY_4,          // Day 4: ~55 + ~45 extra = ~100 questions
    5: MERGED_DAY_5,          // Day 5: ~42 + ~40 extra = ~82 questions
    6: MERGED_DAY_6,          // Day 6: ~36 + ~40 extra = ~76 questions
    7: MERGED_DAY_7,          // Day 7: ~38 + ~45 extra = ~83 questions
  };
  const dayQuestions = dayMap[dayNumber] || [];
  // Filter by subtopic if specified, otherwise return all
  if (subtopicId) {
    return dayQuestions.filter(q => q.subtopicId === subtopicId);
  }
  return dayQuestions;
}
