// ============================================================
// Days 4-7 Extra Questions — 75 Days Hard English Course
// Massively expands question banks so every day has 80-100+ Qs
// Topics: Be Verb (Day 4), Demonstrative Pronoun (Day 5),
//         Has / Have (Day 6), Had (Day 7)
// ============================================================

import type { PracticeQ } from "./day-1-questions";

// ─── Compact question builder ─────────────────────────────────
// Makes it easy to write many questions quickly
const q = (
  id: string,
  subtopicId: string,
  questionText: string,
  type: "translation" | "mcq" | "fill_blank" | "error_detection",
  correctAnswer: string,
  explanation: string,
  hindiExplanation: string,
  points: number,
  options?: { a: string; b: string; c: string; d: string },
  hints?: { word: string; meaning: string }[]
): PracticeQ => ({
  id,
  subtopicId,
  questionText,
  questionType: type,
  difficulty: points <= 5 ? "beginner" : points <= 8 ? "elementary" : "intermediate",
  correctAnswer,
  explanation,
  hindiExplanation,
  optionA: options?.a,
  optionB: options?.b,
  optionC: options?.c,
  optionD: options?.d,
  wordHints: hints || [],
  points,
});

// ══════════════════════════════════════════════════════════════
// DAY 4 EXTRA QUESTIONS — BE VERB (Am / Is / Are / Was / Were)
// 80+ additional questions across all subtopics
// ══════════════════════════════════════════════════════════════

export const DAY_4_EXTRA_T1: PracticeQ[] = [
  q("d4e-t1-q01","d4-t1-s1","'Main ek student hun.' ko English mein translate karo.","translation","I am a student.","I + am → I am. Subject pronoun 'I' always uses 'am'.","I am a student = Main ek student hun. 'Am' sirf 'I' ke saath use hota hai.",5),
  q("d4e-t1-q02","d4-t1-s1","'Woh ek doctor hai.' (She) ko English mein translate karo.","translation","She is a doctor.","She + is → She is. Third person singular (he/she/it) uses 'is'.","She is a doctor = Woh ek doctor hai. 'Is' he/she/it ke saath use hota hai.",5),
  q("d4e-t1-q03","d4-t1-s1","'Hum sab dost hain.' ko English mein translate karo.","translation","We are friends.","We + are → We are. First person plural uses 'are'.","We are friends = Hum sab dost hain. 'Are' we/you/they ke saath use hota hai.",5),
  q("d4e-t1-q04","d4-t1-s1","'Aap bahut achhe ho.' ko English mein translate karo.","translation","You are very good.","You (singular/plural) always uses 'are'.","You are very good = Aap bahut achhe ho. 'Are' you ke saath hamesha use hota hai.",5),
  q("d4e-t1-q05","d4-t1-s1","'Woh log engineers hain.' ko English mein translate karo.","translation","They are engineers.","They + are → They are. Third person plural uses 'are'.","They are engineers = Woh log engineers hain. 'Are' they ke saath use hota hai.",5),
  q("d4e-t1-q06","d4-t1-s2","'Woh kal ghar par tha.' (He) ko English mein translate karo.","translation","He was at home yesterday.","He (past) → was. Past tense of 'is' = 'was' (for he/she/it/I).","He was at home yesterday = Woh kal ghar par tha. Past mein 'was' use karte hain.",5),
  q("d4e-t1-q07","d4-t1-s2","'Hum school mein the.' ko English mein translate karo.","translation","We were in school.","We (past) → were. Past tense of 'are' = 'were' (for we/you/they).","We were in school = Hum school mein the. Past mein 'were' use karte hain.",5),
  q("d4e-t1-q08","d4-t1-s2","'Woh log thake hue the.' ko English mein translate karo.","translation","They were tired.","They (past) → were. 'Tired' = thaka hua. Past state with 'were'.","They were tired = Woh log thake hue the. 'Were' they ke liye past mein.",5),
  q("d4e-t1-q09","d4-t1-s2","Past tense mein 'is' ka form kya hota hai?","mcq","Was","Is → Was (past). Was is used for I/He/She/It in the past tense.","Is ka past form 'was' hota hai. I was, He was, She was, It was.",5,{a:"Were",b:"Was",c:"Be",d:"Am"}),
  q("d4e-t1-q10","d4-t1-s2","Past tense mein 'are' ka form kya hota hai?","mcq","Were","Are → Were (past). Were is used for We/You/They in the past tense.","Are ka past form 'were' hota hai. We were, You were, They were.",5,{a:"Was",b:"Be",c:"Were",d:"Is"}),
  q("d4e-t1-q11","d4-t1-s3","'Main agle saal engineer ban jaunga.' ko English mein translate karo.","translation","I will be an engineer next year.","Future with 'will be'. Will + be (infinitive without 'to').","I will be an engineer next year = Main agle saal engineer ban jaunga. Future mein 'will be' use hota hai.",6),
  q("d4e-t1-q12","d4-t1-s3","'Woh kal busy rahegi.' ko English mein translate karo.","translation","She will be busy tomorrow.","Future prediction with 'will be + adjective'.","She will be busy tomorrow = Woh kal busy rahegi. 'Will be' future state dikhata hai.",6),
  q("d4e-t1-q13","d4-t1-s4","'Will be' ki jagah 'shall be' kab use karte hain?","mcq","I aur We ke saath formal situations mein","Traditionally 'shall' was used with I/We for formal future. Modern English uses 'will' for both.","I/We ke saath formal English mein 'shall be' use ho sakta hai, lekin aajkal 'will be' zyada common hai.",7,{a:"He/She ke saath",b:"They ke saath",c:"I aur We ke saath formal situations mein",d:"Kabhi nahi"}),
];

export const DAY_4_EXTRA_T2: PracticeQ[] = [
  q("d4e-t2-q01","d4-t2-s1","'Woh ek pilot hai.' ko English mein translate karo.","translation","He is a pilot.","He + is + a + profession. Be Verb with noun (profession).","He is a pilot = Woh ek pilot hai. Profession batane ke liye 'is' use hota hai.",5),
  q("d4e-t2-q02","d4-t2-s1","'Yeh meri pen hai.' ko English mein translate karo.","translation","This is my pen.","This + is + possessive + noun. Be Verb identifying an object.","This is my pen = Yeh meri pen hai. Object identify karne ke liye.",5),
  q("d4e-t2-q03","d4-t2-s1","'Woh log hamare clients hain.' ko English mein translate karo.","translation","They are our clients.","They + are + plural noun. Be Verb with a group noun.","They are our clients = Woh log hamare clients hain. Group ke liye 'are' use karte hain.",5),
  q("d4e-t2-q04","d4-t2-s2","'Woh bahut smart hai.' (She) ko English mein translate karo.","translation","She is very smart.","She + is + adjective. Be Verb describing a quality.","She is very smart = Woh bahut smart hai. Quality batane ke liye adjective use hoti hai.",5),
  q("d4e-t2-q05","d4-t2-s2","'Main bahut khush hun.' ko English mein translate karo.","translation","I am very happy.","I + am + adjective (happy). Emotional state with Be Verb.","I am very happy = Main bahut khush hun. Emotional state ke liye adjective.",5),
  q("d4e-t2-q06","d4-t2-s2","'Yeh daal bahut tasty hai.' ko English mein translate karo.","translation","This dal is very tasty.","This dal (it) + is + adjective. Describing food.","This dal is very tasty = Yeh daal bahut tasty hai. Food describe karne ke liye.",5),
  q("d4e-t2-q07","d4-t2-s3","'Woh market mein hai.' ko English mein translate karo.","translation","He is at the market.","He + is + at + location. Be Verb with preposition showing location.","He is at the market = Woh market mein hai. Location ke liye preposition 'at' use hota hai.",5),
  q("d4e-t2-q08","d4-t2-s3","'Main office mein hun.' ko English mein translate karo.","translation","I am in the office.","I + am + in + location. 'In' is used for enclosed spaces.","I am in the office = Main office mein hun. Enclosed space ke liye 'in' use hota hai.",5),
  q("d4e-t2-q09","d4-t2-s3","'Woh log station par hain.' ko English mein translate karo.","translation","They are at the station.","They + are + at + location. Group at a place.","They are at the station = Woh log station par hain. 'At' specific location ke liye.",5),
  q("d4e-t2-q10","d4-t2-s4","'Kya woh busy hai?' ko English mein translate karo.","translation","Is she busy?","Question with Be Verb: Is + she + adjective? Inversion for question.","Is she busy? = Kya woh busy hai? Be Verb question mein subject aur verb ki jagah badal jaati hai.",5),
  q("d4e-t2-q11","d4-t2-s4","'Kya tum office mein ho?' ko English mein translate karo.","translation","Are you in the office?","Question: Are + you + in + location? Yes/No question with Be Verb.","Are you in the office? = Kya tum office mein ho? 'Are' question ke saath.",5),
  q("d4e-t2-q12","d4-t2-s4","'Main theek nahi hun.' ko English mein translate karo.","translation","I am not fine.","Negative with Be Verb: I + am + not + adjective. 'Not' comes after the Be Verb.","I am not fine = Main theek nahi hun. Negative ke liye 'not' Be Verb ke baad aata hai.",5),
  q("d4e-t2-q13","d4-t2-s4","'Woh ghar par nahi hai.' (She) ko English mein translate karo.","translation","She is not at home.","Negative: She + is + not + at + location. Short form: She isn't at home.","She is not at home = Woh ghar par nahi hai. Short form: She isn't at home.",5),
];

export const DAY_4_EXTRA_T3: PracticeQ[] = [
  q("d4e-t3-q01","d4-t3-s1","'Woh abhi kaam kar raha hai.' ko English mein translate karo.","translation","He is working right now.","Present Continuous = Subject + is/am/are + V-ing. Be Verb as helper verb.","He is working right now = Woh abhi kaam kar raha hai. 'Is' + V-ing = continuous action.",6),
  q("d4e-t3-q02","d4-t3-s1","'Hum logo kal meeting kar rahe the.' ko English mein translate karo.","translation","We were having a meeting yesterday.","Past Continuous = Subject + was/were + V-ing. Past action in progress.","We were having a meeting yesterday = Hum log kal meeting kar rahe the. 'Were' + V-ing.",6),
  q("d4e-t3-q03","d4-t3-s1","'Main kal report likh raha hounga.' ko English mein translate karo.","translation","I will be writing the report tomorrow.","Future Continuous = Subject + will be + V-ing. Future action in progress.","I will be writing the report tomorrow = Main kal report likh raha hounga. 'Will be' + V-ing.",7),
  q("d4e-t3-q04","d4-t3-s2","'Yeh report likhi ja rahi hai.' ko English mein translate karo.","translation","This report is being written.","Passive: Subject + is/am/are + being + V3. Present passive with Be Verb.","This report is being written = Yeh report likhi ja rahi hai. 'Is being' + V3 = present passive.",7),
  q("d4e-t3-q05","d4-t3-s2","'Kaam complete ho gaya tha.' ko English mein translate karo.","translation","The work was completed.","Past passive: Subject + was/were + V3. 'Was completed' = ho gaya tha.","The work was completed = Kaam complete ho gaya tha. 'Was' + V3 = past passive.",7),
  q("d4e-t3-q06","d4-t3-s2","'Exam postpone kiya jayega.' ko English mein translate karo.","translation","The exam will be postponed.","Future passive: Subject + will be + V3. 'Will be postponed' = postpone kiya jayega.","The exam will be postponed = Exam postpone kiya jayega. 'Will be' + V3 = future passive.",7),
  q("d4e-t3-q07","d4-t3-s3","'He are a teacher.' mein kya galti hai?","error_detection","He is a teacher.","'He' takes 'is', not 'are'. Are = We/You/They. Is = He/She/It.","'He are' galat hai. 'He' ke saath 'is' use hota hai, 'are' nahi. Sahi: He is a teacher.",5,{a:"He are a teacher.",b:"He is a teacher.",c:"He am a teacher.",d:"He be a teacher."}),
  q("d4e-t3-q08","d4-t3-s3","'I is very happy.' mein kya galti hai?","error_detection","I am very happy.","'I' always takes 'am', never 'is'. Am is exclusively for 'I'.","'I is' galat hai. 'I' ke saath hamesha 'am' use hota hai. Sahi: I am very happy.",5,{a:"I is very happy.",b:"I am very happy.",c:"I are very happy.",d:"I be very happy."}),
  q("d4e-t3-q09","d4-t3-s3","'They was at the party.' mein kya galti hai?","error_detection","They were at the party.","'They' (past) takes 'were', not 'was'. Was = I/He/She/It. Were = We/You/They.","'They was' galat hai. 'They' ke saath past mein 'were' use hota hai. Sahi: They were at the party.",5,{a:"They was at the party.",b:"They were at the party.",c:"They is at the party.",d:"They be at the party."}),
  q("d4e-t3-q10","d4-t3-s3","'She were happy.' mein kya galti hai?","error_detection","She was happy.","'She' (past) takes 'was', not 'were'. Was = I/He/She/It. Were = We/You/They.","'She were' galat hai. 'She' ke saath past mein 'was' use hota hai. Sahi: She was happy.",5,{a:"She were happy.",b:"She was happy.",c:"She is happy.",d:"She been happy."}),
];

export const DAY_4_EXTRA_T4: PracticeQ[] = [
  q("d4e-t4-q01","d4-t4-s1","'Nervous' ka Hindi mein kya matlab hai?","mcq","Ghabrahua / Bechain","Nervous = anxious, worried, not relaxed. Very common adjective with Be Verb.","Nervous = Ghabrahua / Bechain. Nervous feel karna = uncomfortable/anxious hona.",5,{a:"Khush / Prasann",b:"Ghabrahua / Bechain",c:"Thaka hua",d:"Beemar"}),
  q("d4e-t4-q02","d4-t4-s1","'She is determined.' ka Hindi mein kya matlab hai?","translation","Woh dridh nikhit hai.","Determined = strong-minded, focused on a goal. Adjective used with Be Verb.","She is determined = Woh dridh nikhit hai. Determined = pakke irade wala.",6),
  q("d4e-t4-q03","d4-t4-s1","'I am confident.' ko Hindi mein translate karo.","translation","Main aatm vishwaasi hun.","Confident = having trust in yourself. Important professional quality.","I am confident = Main aatm vishwaasi hun. Confidence = khud par bharosa.",6),
  q("d4e-t4-q04","d4-t4-s1","'Qualified' ka kya matlab hai?","mcq","Yogya / Prashikshit","Qualified = having the necessary education, skill, or experience for a job.","Qualified = Yogya / Prashikshit. 'She is qualified' = woh yogya hai.",6,{a:"Beemar",b:"Yogya / Prashikshit",c:"Ghabrahua",d:"Khushi"}),
  q("d4e-t4-q05","d4-t4-s2","'Woh bahut experienced hai.' ko English mein translate karo.","translation","He is very experienced.","Experienced = having a lot of skill from doing something for a long time.","He is very experienced = Woh bahut experienced hai. Job interviews mein bahut important.",6),
  q("d4e-t4-q06","d4-t4-s2","'Main is project ke liye responsible hun.' ko English mein translate karo.","translation","I am responsible for this project.","Responsible for + noun/gerund. Be Verb with adjective in professional context.","I am responsible for this project = Main is project ke liye responsible hun.",7),
  q("d4e-t4-q07","d4-t4-s3","'I am available for a meeting.' ka Hindi mein matlab hai?","translation","Main ek meeting ke liye available hun.","Available = free, not busy, ready to meet. Professional email phrase.","I am available for a meeting = Main meeting ke liye available hun. Email mein common.",6),
  q("d4e-t4-q08","d4-t4-s3","'The meeting is postponed.' ko Hindi mein translate karo.","translation","Meeting postpone ho gayi hai.","Postponed = delayed to a later time. Professional passive with Be Verb.","The meeting is postponed = Meeting postpone ho gayi hai. Office mein common announcement.",6),
];

export const DAY_4_EXTRA_T5: PracticeQ[] = [
  q("d4e-t5-q01","d4-t5-s1","'Main bahut preshan hun.' ko English mein translate karo.","translation","I am very stressed.","Stressed = under pressure, anxious. Common emotional state with Be Verb.","I am very stressed = Main bahut preshan hun. Stress = mental pressure.",6),
  q("d4e-t5-q02","d4-t5-s1","'Interview ke liye main ready hun.' ko English mein translate karo.","translation","I am ready for the interview.","Ready for + noun. Be Verb showing state of preparation.","I am ready for the interview = Interview ke liye main ready hun.",5),
  q("d4e-t5-q03","d4-t5-s2","'Woh log abhi busy hain.' ko English mein translate karo.","translation","They are busy right now.","They + are + adjective + time adverb. Current state.","They are busy right now = Woh log abhi busy hain.",5),
  q("d4e-t5-q04","d4-t5-s2","'Dukaan band hai.' ko English mein translate karo.","translation","The shop is closed.","The shop (it) + is + adjective (closed). State of an object.","The shop is closed = Dukaan band hai. State describe karne ke liye.",5),
  q("d4e-t5-q05","d4-t5-s2","'Kya aap kal free ho?' ko English mein translate karo.","translation","Are you free tomorrow?","Are + you + adjective + time? Future plan question.","Are you free tomorrow? = Kya aap kal free ho? Meeting schedule karne ke liye.",5),
  q("d4e-t5-q06","d4-t5-s3","'Be yourself!' ka Hindi mein kya matlab hai?","translation","Apne aap raho! / Khud bano!","Be + yourself = imperative with Be Verb. Motivational phrase.","Be yourself! = Apne aap raho! Be Verb imperative mein bhi use hota hai.",6),
  q("d4e-t5-q07","d4-t5-s3","'Don't be late.' ka Hindi mein kya matlab hai?","translation","Der mat karo. / Late mat aana.","Don't be + adjective = negative imperative with Be Verb.","Don't be late = Der mat karo. Negative imperative mein 'be' use hota hai.",5),
  q("d4e-t5-q08","d4-t5-s3","'Be careful on the road.' ka Hindi mein kya matlab hai?","translation","Sadak par dhyan se raho. / Savdhaan raho.","Be + adjective (careful) = imperative command. Safety instruction.","Be careful on the road = Sadak par savdhaan raho. Safety advice ke liye.",5),
  q("d4e-t5-q09","d4-t5-s3","'Woh pehle bahut confident nahi thi.' ko English mein translate karo.","translation","She was not very confident before.","Past negative: She + was + not + adjective + time. Previous state.","She was not very confident before = Woh pehle bahut confident nahi thi.",7),
  q("d4e-t5-q10","d4-t5-s3","'Kal meeting kaafi productive thi.' ko English mein translate karo.","translation","Yesterday's meeting was quite productive.","Past: meeting (it) + was + adjective. Describing past event.","Yesterday's meeting was quite productive = Kal ki meeting kaafi productive thi.",7),
];

// All Day 4 extra questions combined
export const ALL_DAY_4_EXTRA: PracticeQ[] = [
  ...DAY_4_EXTRA_T1,
  ...DAY_4_EXTRA_T2,
  ...DAY_4_EXTRA_T3,
  ...DAY_4_EXTRA_T4,
  ...DAY_4_EXTRA_T5,
];

// ══════════════════════════════════════════════════════════════
// DAY 5 EXTRA QUESTIONS — DEMONSTRATIVE PRONOUN
// (This / That / These / Those)
// ══════════════════════════════════════════════════════════════

export const DAY_5_EXTRA_T1: PracticeQ[] = [
  q("d5e-t1-q01","d5-t1-s1","'Yeh kya hai?' ko English mein translate karo.","translation","What is this?","'What is this?' = Yeh kya hai? Near singular question with demonstrative.","What is this? = Yeh kya hai? Kisi paas ki cheez ke baare mein poochha ja raha hai.",5),
  q("d5e-t1-q02","d5-t1-s1","'Woh kya hai?' ko English mein translate karo.","translation","What is that?","'What is that?' = Woh kya hai? Far singular question with demonstrative.","What is that? = Woh kya hai? Door ki cheez ke baare mein poochha ja raha hai.",5),
  q("d5e-t1-q03","d5-t1-s1","'Yeh ek school hai.' ko English mein translate karo.","translation","This is a school.","Near singular identifying a building. This + is + article + noun.","This is a school = Yeh ek school hai. Paas ki building identify karna.",5),
  q("d5e-t1-q04","d5-t1-s1","'Yeh sab meri cheezein hain.' ko English mein translate karo.","translation","These are my things.","Near plural: These + are + possessive + plural noun.","These are my things = Yeh sab meri cheezein hain. Paas ki bahut saari cheezein.",5),
  q("d5e-t1-q05","d5-t1-s1","'Woh sab hamare log hain.' ko English mein translate karo.","translation","Those are our people.","Far plural: Those + are + possessive + plural noun.","Those are our people = Woh sab hamare log hain. Door ke bahut saare log.",5),
  q("d5e-t1-q06","d5-t1-s2","'These' aur 'This' mein kya fark hai?","mcq","This = singular (ek cheez), These = plural (bahut cheezein)","This = one thing near. These = multiple things near. Both refer to close objects.","This = ek cheez (singular). These = bahut saari cheezein (plural). Dono paas ki cheezein ke liye.",5,{a:"Koi fark nahi hai",b:"This = singular (ek cheez), These = plural (bahut cheezein)",c:"This = far, These = near",d:"This = verb hai, These = pronoun"}),
  q("d5e-t1-q07","d5-t1-s2","'That' aur 'Those' mein kya fark hai?","mcq","That = singular (ek cheez door), Those = plural (bahut cheezein door)","That = one far thing. Those = many far things. Both refer to distant objects.","That = ek cheez (singular, door). Those = bahut saari cheezein (plural, door). Dono door ki cheezein.",5,{a:"Koi fark nahi",b:"That = near, Those = far",c:"That = singular (ek cheez door), Those = plural (bahut cheezein door)",d:"That = past mein hota hai"}),
  q("d5e-t1-q08","d5-t1-s3","'Yeh aur woh' ko English mein kya kehte hain?","mcq","This and that","This and that = Yeh aur woh. Common English phrase for miscellaneous things.","This and that = Yeh aur woh. English mein ek common phrase hai.",5,{a:"These and those",b:"This and that",c:"Here and there",d:"Now and then"}),
];

export const DAY_5_EXTRA_T2: PracticeQ[] = [
  q("d5e-t2-q01","d5-t2-s1","'Kya yeh tumhara phone hai?' ko English mein translate karo.","translation","Is this your phone?","Question with demonstrative: Is + this + possessive + noun?","Is this your phone? = Kya yeh tumhara phone hai? Kisi ki cheez confirm karna.",5),
  q("d5e-t2-q02","d5-t2-s1","'Haan, yeh mera hai.' ko English mein translate karo.","translation","Yes, this is mine.","'Mine' = standalone possessive pronoun. Replacing 'my phone'.","Yes, this is mine = Haan, yeh mera hai. 'Mine' = mera/meri (without noun).",5),
  q("d5e-t2-q03","d5-t2-s1","'Nahi, woh mera nahi hai.' ko English mein translate karo.","translation","No, that is not mine.","Negative: that + is + not + mine. Denying ownership with demonstrative.","No, that is not mine = Nahi, woh mera nahi hai. Ownership deny karna.",5),
  q("d5e-t2-q04","d5-t2-s2","'Mujhe yeh pasand hai.' ko English mein translate karo.","translation","I like this.","I like + this. Demonstrative as direct object after a verb.","I like this = Mujhe yeh pasand hai. 'This' yahan object hai.",5),
  q("d5e-t2-q05","d5-t2-s2","'Mujhe woh wali blue pen chahiye.' ko English mein translate karo.","translation","I want that blue pen.","'That blue pen' = demonstrative adjective + adjective + noun.","I want that blue pen = Mujhe woh wali blue pen chahiye. Demonstrative + adjective + noun.",6),
  q("d5e-t2-q06","d5-t2-s2","'Mujhe yeh sab cheezein chahiye.' ko English mein translate karo.","translation","I need all these things.","'All these things' = quantifier + demonstrative + noun.","I need all these things = Mujhe yeh sab cheezein chahiye. 'All these' = yeh sab.",6),
  q("d5e-t2-q07","d5-t2-s3","'Kya yeh notebook kisi ki hai?' ko English mein translate karo.","translation","Does this notebook belong to anyone?","Complex question with demonstrative + belong to.","Does this notebook belong to anyone? = Kya yeh notebook kisi ki hai?",7),
  q("d5e-t2-q08","d5-t2-s4","'Yeh meeting kal thi.' ko English mein translate karo.","translation","This meeting was yesterday.","This + noun + was + time. Demonstrative adjective with past Be Verb.","This meeting was yesterday = Yeh meeting kal thi. Demonstrative adjective + past.",6),
  q("d5e-t2-q09","d5-t2-s4","'Woh party bahut acha tha.' ko English mein translate karo.","translation","That party was very good.","That + noun (party) + was + adjective. Far demonstrative with past.","That party was very good = Woh party bahut acha tha. Past ke baare mein baat karna.",6),
];

export const DAY_5_EXTRA_T3: PracticeQ[] = [
  q("d5e-t3-q01","d5-t3-s1","'Yeh mere bahai hain.' ko English mein translate karo.","translation","These are my brothers.","Near plural (these) for family members standing close by.","These are my brothers = Yeh mere bhai hain. Paas ke logon ke liye 'These'.",5),
  q("d5e-t3-q02","d5-t3-s1","'Woh mere puraane teachers hain.' ko English mein translate karo.","translation","Those are my old teachers.","Far plural (those) for people farther away.","Those are my old teachers = Woh mere puraane teachers hain. Door logon ke liye 'Those'.",5),
  q("d5e-t3-q03","d5-t3-s2","Shopping: 'Mujhe yeh wali shirt leni hai.' ko English mein translate karo.","translation","I want to buy this shirt.","Shopping context. 'This shirt' = near demonstrative adjective.","I want to buy this shirt = Mujhe yeh wali shirt leni hai. Shopping mein demonstrative.",5),
  q("d5e-t3-q04","d5-t3-s2","Shopping: 'Woh shoes kitne ke hain?' ko English mein translate karo.","translation","How much are those shoes?","'Those shoes' = far plural demonstrative. Price inquiry.","How much are those shoes? = Woh shoes kitne ke hain? Price poochhna.",5),
  q("d5e-t3-q05","d5-t3-s2","Shopping: 'Kya yeh sale mein hai?' ko English mein translate karo.","translation","Is this on sale?","'Is this on sale?' = Kya yeh sale mein hai? Shopping question.","Is this on sale? = Kya yeh sale mein hai? Shop mein cheez ka discount poochhna.",5),
  q("d5e-t3-q06","d5-t3-s3","Office: 'Yeh report submit karo.' ko English mein translate karo.","translation","Submit this report.","Imperative with demonstrative adjective. Command in office.","Submit this report = Yeh report submit karo. Office command with demonstrative.",5),
  q("d5e-t3-q07","d5-t3-s3","Office: 'Woh presentation mujhe bhejo.' ko English mein translate karo.","translation","Send me that presentation.","Command: Send + me (indirect) + that presentation (direct). Office context.","Send me that presentation = Woh presentation mujhe bhejo. Office instruction.",6),
  q("d5e-t3-q08","d5-t3-s3","'In sab mein se best kaunsa hai?' ko English mein translate karo.","translation","Which is the best among these?","'Among these' = in mein se. Comparison question with demonstrative.","Which is the best among these? = In sab mein se best kaunsa hai?",7),
];

export const DAY_5_EXTRA_T4: PracticeQ[] = [
  q("d5e-t4-q01","d5-t4-s1","Identify the error: 'These is my books.'","error_detection","These are my books.","'These' is plural, so it takes 'are', not 'is'. Is → singular. Are → plural.","'These is' galat hai. These plural hai, toh 'are' use hoga. Sahi: These are my books.",5,{a:"These is my books.",b:"These are my books.",c:"This are my books.",d:"Those is my books."}),
  q("d5e-t4-q02","d5-t4-s1","Identify the error: 'That are my car.'","error_detection","That is my car.","'That' is singular, so it takes 'is', not 'are'. Is → singular (this/that). Are → plural (these/those).","'That are' galat hai. That singular hai, toh 'is' use hoga. Sahi: That is my car.",5,{a:"That are my car.",b:"That is my car.",c:"Those is my car.",d:"This are my car."}),
  q("d5e-t4-q03","d5-t4-s2","'These type of problems common hain.' mein kya galti hai?","error_detection","This type of problem is common.","'Type' is singular → This type (not These type). 'Problem' singular → is (not are).","'These type' galat hai. 'Type' ek noun hai (singular) → 'This type' sahi. Problem singular → 'is'.",7,{a:"These types of problems are common.",b:"This type of problem is common.",c:"That type of problems are common.",d:"Those type of problem is common."}),
  q("d5e-t4-q04","d5-t4-s3","'This kind of people are troublesome.' mein kya galti hai?","error_detection","These kinds of people are troublesome.","'People' = plural, so 'these kinds' is correct. Alternatively: This kind of person is troublesome.","'This kind of people' mein inconsistency hai. 'People' plural hai. Sahi: These kinds of people are troublesome.",8,{a:"This kind of people are troublesome.",b:"These kinds of people are troublesome.",c:"That kinds of people are troublesome.",d:"Those kind of people is troublesome."}),
];

export const DAY_5_EXTRA_T5: PracticeQ[] = [
  q("d5e-t5-q01","d5-t5-s1","'Yeh sirf ek baar ka mauka hai.' ko English mein translate karo.","translation","This is a once-in-a-lifetime opportunity.","Motivational sentence with 'This is'. Demonstrative for an abstract concept.","This is a once-in-a-lifetime opportunity = Yeh sirf ek baar ka mauka hai.",8),
  q("d5e-t5-q02","d5-t5-s1","'Woh din mujhe yaad hai.' ko English mein translate karo.","translation","I remember that day.","'That day' = woh din (past reference). Demonstrative for past event.","I remember that day = Woh din mujhe yaad hai. Past ki baat mein 'that' use hota hai.",6),
  q("d5e-t5-q03","d5-t5-s2","'Woh zamane ki baat alag thi.' ko English mein translate karo.","translation","Those were different times.","'Those were' = woh zamana tha. Plural past demonstrative.","Those were different times = Woh zamane ki baat alag thi. Past ke baare mein baat karna.",7),
  q("d5e-t5-q04","d5-t5-s2","'Yeh sab ek sapne jaisa lagta hai.' ko English mein translate karo.","translation","All this feels like a dream.","'All this' = yeh sab. Demonstrative with 'all' for emphasis.","All this feels like a dream = Yeh sab ek sapne jaisa lagta hai.",8),
  q("d5e-t5-q05","d5-t5-s3","'This' aur 'That' ka use idioms mein kaise hota hai?","mcq","'This and that' = yeh aur woh (various things); 'At that time' = us waqt","Demonstratives appear in many idioms: this and that, at that time, in those days, like this/that.","Demonstratives idioms mein bhi use hote hain: this and that = yeh aur woh; at that time = us waqt.",8,{a:"Sirf identify karne ke liye",b:"'This and that' = yeh aur woh (various things); 'At that time' = us waqt",c:"Sirf plural ke liye",d:"Sirf questions mein"}),
];

// All Day 5 extra questions combined
export const ALL_DAY_5_EXTRA: PracticeQ[] = [
  ...DAY_5_EXTRA_T1,
  ...DAY_5_EXTRA_T2,
  ...DAY_5_EXTRA_T3,
  ...DAY_5_EXTRA_T4,
  ...DAY_5_EXTRA_T5,
];

// ══════════════════════════════════════════════════════════════
// DAY 6 EXTRA QUESTIONS — HAS / HAVE
// Present possession, perfect tense, idioms, professional use
// ══════════════════════════════════════════════════════════════

export const DAY_6_EXTRA_T1: PracticeQ[] = [
  q("d6e-t1-q01","d6-t1-s1","'Mere paas ek idea hai.' ko English mein translate karo.","translation","I have an idea.","'An idea' not 'a idea' because 'idea' starts with vowel sound 'i'.","I have an idea = Mere paas ek idea hai. 'An' vowel sound se pehle use hota hai.",5),
  q("d6e-t1-q02","d6-t1-s1","'Is dukaan mein bahut saari cheezein hain.' ko English mein translate karo.","translation","This shop has many things.","This shop (It/singular) + has + many things. Third person singular.","This shop has many things = Is dukaan mein bahut saari cheezein hain. Singular shop → 'has'.",5),
  q("d6e-t1-q03","d6-t1-s1","'Unke paas 3 bhai aur 2 behen hain.' ko English mein translate karo.","translation","She has 3 brothers and 2 sisters.","Family members with 'has'. He/She/It → has for possession.","She has 3 brothers and 2 sisters = Unke paas 3 bhai aur 2 behen hain.",5),
  q("d6e-t1-q04","d6-t1-s2","'Kya aapke paas passport hai?' ko English mein translate karo.","translation","Do you have a passport?","'Do you have?' = formal question. 'A passport' = ek passport.","Do you have a passport? = Kya aapke paas passport hai? Important travel/formal question.",5),
  q("d6e-t1-q05","d6-t1-s2","'Kya unke paas experience hai?' (she) ko English mein translate karo.","translation","Does she have experience?","'Does she have?' = third person singular question. 'Do' → 'Does' for He/She/It.","Does she have experience? = Kya unke paas experience hai? Does = He/She/It ke liye.",5),
  q("d6e-t1-q06","d6-t1-s2","'Mere paas abhi paise nahi hain.' ko English mein translate karo.","translation","I don't have money right now.","Negative: I + don't + have + noun. Short form of 'do not have'.","I don't have money right now = Mere paas abhi paise nahi hain. Don't have = nahi hai.",5),
  q("d6e-t1-q07","d6-t1-s3","'Uski aankhen kaali hain.' ko English mein translate karo.","translation","She has black eyes.","Physical feature: She + has + adjective + plural noun. Describing appearance.","She has black eyes = Uski aankhen kaali hain. Physical appearance describe karna.",5),
  q("d6e-t1-q08","d6-t1-s3","'Is mobile mein bahut achi battery life hai.' ko English mein translate karo.","translation","This phone has very good battery life.","Product feature: This phone (it) + has + adjective + noun.","This phone has very good battery life = Is mobile mein bahut achi battery life hai.",6),
  q("d6e-t1-q09","d6-t1-s4","'Have' aur 'Has' mein fark?","mcq","Have = I/You/We/They ke saath; Has = He/She/It ke saath","Have is used with plural subjects and 'I/You'. Has is used for third person singular only.","Have = I/You/We/They ke saath. Has = He/She/It ke saath. Yeh basic grammar rule hai.",5,{a:"Have = singular, Has = plural",b:"Have = I/You/We/They ke saath; Has = He/She/It ke saath",c:"Koi fark nahi",d:"Have = past, Has = present"}),
];

export const DAY_6_EXTRA_T2: PracticeQ[] = [
  q("d6e-t2-q01","d6-t2-s1","'Main 5 saal se is company mein kaam kar raha hun.' ko Present Perfect se translate karo.","translation","I have been working in this company for 5 years.","Present Perfect Continuous = have/has + been + V-ing. Ongoing action since past.","I have been working in this company for 5 years = Main 5 saal se yahan kaam kar raha hun.",8),
  q("d6e-t2-q02","d6-t2-s1","'Usne pehle kabhi English mein presentation nahi di hai.' ko translate karo.","translation","She has never given a presentation in English.","Present Perfect with 'never'. She has + never + V3. Life experience (never done).","She has never given a presentation in English = Usne pehle kabhi English mein presentation nahi di.",8),
  q("d6e-t2-q03","d6-t2-s1","'Main pehle London ja chuka hun.' ko English mein translate karo.","translation","I have been to London before.","Present Perfect with 'before'. Life experience: I have + been to + place.","I have been to London before = Main pehle London ja chuka hun. Life experience batana.",7),
  q("d6e-t2-q04","d6-t2-s2","'Usne report abhi submit ki hai.' ko English mein translate karo.","translation","She has just submitted the report.","'Just' = abhi abhi. Present Perfect with 'just' for very recent action.","She has just submitted the report = Usne abhi abhi report submit ki hai. 'Just' = abhi abhi.",7),
  q("d6e-t2-q05","d6-t2-s2","'Kya aapne kabhi seafood khaya hai?' ko English mein translate karo.","translation","Have you ever eaten seafood?","'Have you ever + V3?' = Life experience question. Ever = kabhi bhi.","Have you ever eaten seafood? = Kya aapne kabhi seafood khaya hai? Experience question.",7),
  q("d6e-t2-q06","d6-t2-s3","'Unhone pehle se sab plan kar liya hai.' ko English mein translate karo.","translation","They have already planned everything.","'Already' with Present Perfect = pehle se complete action.","They have already planned everything = Unhone pehle se sab plan kar liya hai.",7),
];

export const DAY_6_EXTRA_T3: PracticeQ[] = [
  q("d6e-t3-q01","d6-t3-s1","'Have a great day!' ka Hindi mein matlab hai?","translation","Aapka din bahut acha rahe!","'Have a great day' = a common farewell/wish. Idiomatic use of 'have'.","Have a great day! = Aapka din bahut acha rahe! Common English farewell.",5),
  q("d6e-t3-q02","d6-t3-s1","'Have a seat.' ka Hindi mein matlab hai?","translation","Baith jaiye. / Baithiye.","'Have a seat' = an invitation to sit down. Polite way to invite someone.","Have a seat = Baith jaiye. Polite office/meeting invitation to sit.",5),
  q("d6e-t3-q03","d6-t3-s2","'Have a word with someone' ka kya matlab hai?","mcq","Kisi se baat karna / discuss karna","'Have a word with' = to speak briefly with someone, often about something serious.","Have a word with someone = kisi se kuch baat karna. Serious discussion ke liye.",6,{a:"Kisi se ladna",b:"Kisi se baat karna / discuss karna",c:"Kisi ko ignore karna",d:"Kisi ko pakadna"}),
  q("d6e-t3-q04","d6-t3-s2","'Have a problem with' ka kya matlab hai?","mcq","Kisi cheez se problem hona / objection hona","'Have a problem with' = to object to or be unhappy about something.","Have a problem with = kisi cheez se problem ya objection hona.",6,{a:"Kuch fix karna",b:"Kisi cheez se problem hona / objection hona",c:"Kisi ki madad karna",d:"Kisi cheez ko enjoy karna"}),
  q("d6e-t3-q05","d6-t3-s3","'Have a look at this document.' ko Hindi mein translate karo.","translation","Is document ko ek baar dekho.","'Have a look' = dekhna. Idiomatic expression very common in offices.","Have a look at this document = Is document ko ek baar dekho. Office mein common phrase.",5),
  q("d6e-t3-q06","d6-t3-s3","'Have fun at the party!' ko Hindi mein translate karo.","translation","Party mein maza karo!","'Have fun' = maza karna. Common social wish.","Have fun at the party! = Party mein maza karo! Social situation mein use.",5),
];

export const DAY_6_EXTRA_T4: PracticeQ[] = [
  q("d6e-t4-q01","d6-t4-s1","'She have a meeting.' mein kya galti hai?","error_detection","She has a meeting.","'She' (3rd person singular) takes 'has', not 'have'. Have → I/You/We/They.","'She have' galat hai. She ke saath 'has' use hota hai. Sahi: She has a meeting.",5,{a:"She have a meeting.",b:"She has a meeting.",c:"She haves a meeting.",d:"She is have a meeting."}),
  q("d6e-t4-q02","d6-t4-s1","'I has completed the work.' mein kya galti hai?","error_detection","I have completed the work.","'I' takes 'have', not 'has'. Has → He/She/It only.","'I has' galat hai. 'I' ke saath 'have' use hota hai. Sahi: I have completed the work.",5,{a:"I has completed the work.",b:"I have completed the work.",c:"I had completed the work.",d:"I haved completed the work."}),
  q("d6e-t4-q03","d6-t4-s2","'Main bahut saare kaam kar chuka hun.' ko English mein translate karo.","translation","I have done a lot of work.","Present Perfect: I + have + done (V3). Summary of past accomplishments.","I have done a lot of work = Main bahut saare kaam kar chuka hun.",7),
  q("d6e-t4-q04","d6-t4-s2","'Humne puri preparation kar li hai.' ko English mein translate karo.","translation","We have completed all the preparation.","Present Perfect: We + have + completed (V3). Group achievement.","We have completed all the preparation = Humne puri preparation kar li hai.",7),
  q("d6e-t4-q05","d6-t4-s3","Interview mein: 'I have 3 years of experience in marketing.' ka kya matlab hai?","translation","Mere paas marketing mein 3 saal ka experience hai.","Professional sentence: I have + duration + of + field. Essential for job interviews.","I have 3 years of experience in marketing = Mere paas marketing mein 3 saal ka experience hai.",7),
];

// All Day 6 extra questions
export const ALL_DAY_6_EXTRA: PracticeQ[] = [
  ...DAY_6_EXTRA_T1,
  ...DAY_6_EXTRA_T2,
  ...DAY_6_EXTRA_T3,
  ...DAY_6_EXTRA_T4,
];

// ══════════════════════════════════════════════════════════════
// DAY 7 EXTRA QUESTIONS — HAD
// Past possession, Past Perfect tense, storytelling, professional use
// ══════════════════════════════════════════════════════════════

export const DAY_7_EXTRA_T1: PracticeQ[] = [
  q("d7e-t1-q01","d7-t1-s1","'Mere paas pehle ek motorcycle thi.' ko English mein translate karo.","translation","I had a motorcycle before.","'Had' = past of have. Past possession of a vehicle.","I had a motorcycle before = Mere paas pehle ek motorcycle thi.",5),
  q("d7e-t1-q02","d7-t1-s1","'Unki ek pyaari beti thi.' ko English mein translate karo.","translation","They had a lovely daughter.","They + had + article + adjective + noun. Past family member.","They had a lovely daughter = Unki ek pyaari beti thi.",5),
  q("d7e-t1-q03","d7-t1-s1","'Hamare gaon mein ek bada mela tha.' ko English mein translate karo.","translation","Our village had a big fair.","Village (it) + had + article + adjective + noun. Past event/feature.","Our village had a big fair = Hamare gaon mein ek bada mela tha.",5),
  q("d7e-t1-q04","d7-t1-s2","'Kya tumhare paas pehle koi pet tha?' ko English mein translate karo.","translation","Did you have a pet before?","Past question: Did + you + have? 'Did' makes the question.","Did you have a pet before? = Kya tumhare paas pehle koi pet tha?",5),
  q("d7e-t1-q05","d7-t1-s2","'Nahi, mere paas koi pet nahi tha.' ko English mein translate karo.","translation","No, I didn't have a pet.","Past negative: I + didn't + have. 'Didn't' = did not.","No, I didn't have a pet = Nahi, mere paas koi pet nahi tha.",5),
  q("d7e-t1-q06","d7-t1-s2","'Unke paas pehle bahut paisa tha, ab nahi hai.' ko translate karo.","translation","She had a lot of money before, but not now.","Contrast: Past (had) vs Present (doesn't have). Real-life financial context.","She had a lot of money before, but not now = Pehle unke paas bahut paisa tha, ab nahi hai.",7),
  q("d7e-t1-q07","d7-t1-s3","'Had' ka use sirf 'have' ke past ke liye hota hai?","mcq","Nahi — 'had' 'have' aur 'has' dono ka past form hai","'Had' is the past tense of BOTH 'have' AND 'has'. All subjects use 'had' in past.","'Had' 'have' aur 'has' dono ka past form hai. Har subject ke liye 'had' use hota hai past mein.",5,{a:"Haan, sirf 'have' ke liye",b:"Haan, sirf 'has' ke liye",c:"Nahi — 'had' 'have' aur 'has' dono ka past form hai",d:"'Had' koi past form nahi hai"}),
];

export const DAY_7_EXTRA_T2: PracticeQ[] = [
  q("d7e-t2-q01","d7-t2-s1","Past Perfect kab use karte hain?","mcq","Jab do past actions mein se pehle wale ko highlight karna ho","Past Perfect (had + V3) shows which of two past events happened FIRST.","Past Perfect tab use hota hai jab do past actions mein se pehle wala action highlight karna ho.",7,{a:"Sirf present ke liye",b:"Jab do past actions mein se pehle wale ko highlight karna ho",c:"Sirf future ke liye",d:"Jab question poochhna ho"}),
  q("d7e-t2-q02","d7-t2-s2","'Jab woh aaya tab main khaana kha chuka tha.' ko translate karo.","translation","When he came, I had already eaten.","Past Perfect (had eaten) + Simple Past (came). The eating happened BEFORE he came.","When he came, I had already eaten = Jab woh aaya tab main khaana kha chuka tha.",8),
  q("d7e-t2-q03","d7-t2-s2","'Jab tak hum pahunche, movie shuru ho chuki thi.' ko translate karo.","translation","By the time we arrived, the movie had already started.","'By the time' introduces Simple Past; main clause uses Past Perfect.","By the time we arrived, the movie had already started = Jab tak hum pahunche, movie shuru ho chuki thi.",9),
  q("d7e-t2-q04","d7-t2-s2","Past Perfect ka formula kya hai?","mcq","Subject + had + V3 (past participle)","Past Perfect = Subject + had + past participle (V3). ALL subjects use 'had'.","Past Perfect formula: Subject + had + V3. I had eaten, She had gone, They had finished.",7,{a:"Subject + was/were + V3",b:"Subject + have/has + V3",c:"Subject + had + V3 (past participle)",d:"Subject + did + V3"}),
  q("d7e-t2-q05","d7-t2-s3","'Kya tune pehle yeh kitaab padhi thi?' ko translate karo.","translation","Had you read this book before?","Past Perfect question: Had + subject + V3? Asking about experience before another past time.","Had you read this book before? = Kya tune pehle yeh kitaab padhi thi?",8),
  q("d7e-t2-q06","d7-t2-s3","'Haan, maine yeh pehle padhi thi.' ko translate karo.","translation","Yes, I had read it before.","Past Perfect affirmative response. I + had + V3.","Yes, I had read it before = Haan, maine yeh pehle padhi thi.",8),
  q("d7e-t2-q07","d7-t2-s4","'Maine report submit karne se pehle use 3 baar check kiya tha.' translate karo.","translation","I had checked the report 3 times before submitting it.","Past Perfect for action completed before another past action (submitting).","I had checked the report 3 times before submitting it = Pehle 3 baar check kiya, phir submit kiya.",9),
];

export const DAY_7_EXTRA_T3: PracticeQ[] = [
  q("d7e-t3-q01","d7-t3-s1","'Ek baar ek garib ladka tha.' ko translate karo.","translation","Once there was a poor boy.","Story beginning with past. 'Once' = ek baar. Past state with 'was'/'had'.","Once there was a poor boy = Ek baar ek garib ladka tha. Kahani ki shuruaat.",6),
  q("d7e-t3-q02","d7-t3-s1","'Uske koi dost nahi the.' ko English mein translate karo.","translation","He had no friends.","Past negative possession: He + had + no + noun. Story-telling.","He had no friends = Uske koi dost nahi the. Past mein koi cheez na hona.",6),
  q("d7e-t3-q03","d7-t3-s2","'Unhone aisi pareshaniyon ka samna pehle kabhi nahi kiya tha.' translate karo.","translation","They had never faced such difficulties before.","Past Perfect with 'never'. Life situation never experienced before.","They had never faced such difficulties before = Unhone pehle kabhi aisi pareshani ka samna nahi kiya tha.",8),
  q("d7e-t3-q04","d7-t3-s2","'Woh pehle kabhi itna khush nahi tha.' ko translate karo.","translation","He had never been so happy before.","Past Perfect with Be Verb: had + been + adjective. Previous emotional state.","He had never been so happy before = Woh pehle kabhi itna khush nahi tha.",8),
  q("d7e-t3-q05","d7-t3-s3","Office: 'Jab manager aaye, tab team sab kaam complete kar chuki thi.' translate karo.","translation","By the time the manager arrived, the team had completed all the work.","Past Perfect for completed work before manager's arrival.","By the time the manager arrived, the team had completed all the work.",9),
  q("d7e-t3-q06","d7-t3-s3","'Deadline se pehle humne sab deliver kar diya tha.' ko translate karo.","translation","We had delivered everything before the deadline.","Past Perfect for professional accomplishment before a deadline.","We had delivered everything before the deadline = Deadline se pehle humne sab deliver kar diya tha.",9),
];

export const DAY_7_EXTRA_T4: PracticeQ[] = [
  q("d7e-t4-q01","d7-t4-s1","'Write' ke V1/V2/V3 forms kya hain?","mcq","Write / Wrote / Written","Irregular verb: Write → Wrote → Written. V3 'Written' used in perfect tenses.","Write ka V1=Write, V2=Wrote, V3=Written. Perfect tenses mein V3 use hota hai.",6,{a:"Write / Writed / Writed",b:"Write / Wrote / Written",c:"Write / Write / Write",d:"Write / Wrote / Wrote"}),
  q("d7e-t4-q02","d7-t4-s1","'Take' ke V1/V2/V3 forms kya hain?","mcq","Take / Took / Taken","Irregular verb: Take → Took → Taken. 'Taken' is V3 for perfect tenses.","Take ka V1=Take, V2=Took, V3=Taken. I had taken = Maine le liya tha.",6,{a:"Take / Taked / Taked",b:"Take / Took / Taken",c:"Take / Took / Took",d:"Take / Taken / Taken"}),
  q("d7e-t4-q03","d7-t4-s1","'See' ke V1/V2/V3 forms kya hain?","mcq","See / Saw / Seen","Irregular verb: See → Saw → Seen. 'Seen' is V3. I had seen = Maine dekha tha.","See ka V1=See, V2=Saw, V3=Seen. I had seen this before = Maine yeh pehle dekha tha.",6,{a:"See / Seed / Seed",b:"See / Sawed / Sawn",c:"See / Saw / Seen",d:"See / Saw / Saw"}),
  q("d7e-t4-q04","d7-t4-s2","'I had ate before coming.' mein kya galti hai?","error_detection","I had eaten before coming.","Past Perfect uses V3 (past participle). 'Ate' is V2 (simple past). V3 of eat = 'eaten'.","'Had ate' galat hai. Past Perfect mein V3 use hota hai. Eat ka V3 = Eaten. Sahi: I had eaten.",6,{a:"I had ate before coming.",b:"I had eaten before coming.",c:"I had eat before coming.",d:"I have eaten before coming."}),
  q("d7e-t4-q05","d7-t4-s2","'She had went to London.' mein kya galti hai?","error_detection","She had gone to London.","'Went' is V2 (simple past). Past Perfect needs V3. V3 of go = 'gone'.","'Had went' galat hai. Go ka V3 = Gone. Sahi: She had gone to London.",6,{a:"She had went to London.",b:"She had gone to London.",c:"She had go to London.",d:"She have gone to London."}),
  q("d7e-t4-q06","d7-t4-s3","'Had enough of something' ka kya matlab hai?","mcq","Kafi ho gaya / Aur bardaasht nahi hota","'Had enough of' = idiom meaning you are tired of something and can't take more.","Had enough of something = kafi ho gaya / aur bardaasht nahi hota. Frustration express karna.",7,{a:"Kuch bhool gaya",b:"Kafi khana kha liya",c:"Kafi ho gaya / Aur bardaasht nahi hota",d:"Kuch hasil kar liya"}),
  q("d7e-t4-q07","d7-t4-s3","'I had a hard time doing that.' ka kya matlab hai?","translation","Woh kaam karna mujhe bahut mushkil laga.","'Have/Had a hard time doing something' = struggle karna. Common idiom with 'had'.","I had a hard time doing that = Woh kaam karna mujhe bahut mushkil laga.",7),
];

export const DAY_7_EXTRA_T5: PracticeQ[] = [
  q("d7e-t5-q01","d7-t5-s1","'Mujhe woh topic pehle se pata tha.' ko translate karo.","translation","I had already known that topic.","Past Perfect for prior knowledge before some event.","I had already known that topic = Mujhe woh topic pehle se pata tha.",8),
  q("d7e-t5-q02","d7-t5-s1","'Unhone exam dene se pehle sab kuch padha tha.' ko translate karo.","translation","They had studied everything before giving the exam.","Past Perfect: studying happened before the exam (another past event).","They had studied everything before giving the exam = Unhone exam se pehle sab padh liya tha.",8),
  q("d7e-t5-q03","d7-t5-s2","'It had been a very long time since we last met.' ko Hindi mein translate karo.","translation","Humari pichli mulaqat ke baad bahut lamba samay beet gaya tha.","'It had been + time' = past state with been. Expressing time elapsed in past.","It had been a very long time since we last met = Pichli mulaqat ke baad bahut samay beet gaya tha.",9),
  q("d7e-t5-q04","d7-t5-s2","'Jab tak tumhe yeh pata chala tab tak woh ja chuke the.' ko translate karo.","translation","By the time you found out, they had already left.","'By the time' + Simple Past, + Past Perfect. Complex sequence of past events.","By the time you found out, they had already left = Jab tak tumhe pata chala, woh ja chuke the.",9),
  q("d7e-t5-q05","d7-t5-s3","'Had' ka use kab nahi karna chahiye?","mcq","Jab simple past kaafi ho (ek hi past action)","If there's only ONE past event, use Simple Past, not Past Perfect. Past Perfect needs TWO past events.","Sirf ek past action ho to Simple Past kaafi hai. Past Perfect sirf tab jab do events hon.",8,{a:"Kabhi nahi",b:"Jab simple past kaafi ho (ek hi past action)",c:"Present tense mein",d:"Questions mein"}),
  q("d7e-t5-q06","d7-t5-s3","'She left. Then I arrived.' in dono sentences ko Past Perfect se ek sentence mein likhein.","translation","She had left when I arrived.","Combining two past events: She leaving happened FIRST → Past Perfect 'had left'.","She had left when I arrived = Pehle woh chali gayi, phir main aaya. Past Perfect for first event.",8),
];

// All Day 7 extra questions combined
export const ALL_DAY_7_EXTRA: PracticeQ[] = [
  ...DAY_7_EXTRA_T1,
  ...DAY_7_EXTRA_T2,
  ...DAY_7_EXTRA_T3,
  ...DAY_7_EXTRA_T4,
  ...DAY_7_EXTRA_T5,
];
