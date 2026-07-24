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

// ─── Master export: All Days 3-7 Questions ───────────────────
export const ALL_DAYS_3_TO_7_QUESTIONS: PracticeQ[] = [
  ...ALL_DAY_3_QUESTIONS,
  ...ALL_DAY_4_QUESTIONS,
  ...ALL_DAY_5_QUESTIONS,
  ...ALL_DAY_6_QUESTIONS,
  ...ALL_DAY_7_QUESTIONS,
];

// ─── Helper: Get questions for a specific day/subtopic ────────
export function getDays3to7Questions(dayNumber: number, subtopicId?: string): PracticeQ[] {
  // Get the day's full question array
  const dayMap: Record<number, PracticeQ[]> = {
    3: ALL_DAY_3_QUESTIONS,
    4: ALL_DAY_4_QUESTIONS,
    5: ALL_DAY_5_QUESTIONS,
    6: ALL_DAY_6_QUESTIONS,
    7: ALL_DAY_7_QUESTIONS,
  };
  const dayQuestions = dayMap[dayNumber] || [];
  // Filter by subtopic if specified
  if (subtopicId) {
    return dayQuestions.filter(q => q.subtopicId === subtopicId);
  }
  return dayQuestions;
}
