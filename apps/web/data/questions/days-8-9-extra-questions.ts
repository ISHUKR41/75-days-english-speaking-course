// ============================================================
// Days 8 & 9 Extra Questions — 150 each (300 total)
// Day 8: Will Have (Future Perfect Tense)
// Day 9: Use of There (There is/are/was/were/will be)
// Format matches days-8-14-questions.ts exactly
// ============================================================

import type { PracticeQ } from "./day-1-questions";

// Helper to build a PracticeQ object cleanly
const q = (
  id: string,
  subtopicId: string,
  questionText: string,
  questionType: "translation" | "mcq" | "fill_blank" | "error_detection",
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
  questionType,
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
// DAY 8 EXTRA QUESTIONS — Will Have (Future Perfect)
// 150 questions across subtopics d8-t1-s1 through d8-t4-s3
// ══════════════════════════════════════════════════════════════
export const DAY_8_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d8-t1-s1: Future Perfect basics ──────────────────────────
  q("d8-ex-q001","d8-t1-s1","'Main kal tak apna kaam khatam kar lunga.' ko English mein translate karo.","translation","I will have finished my work by tomorrow.","By tomorrow = kal tak. Will have finished = Future Perfect showing completion before a future point.","Future Perfect: Subject + will have + V3 (past participle).",8,undefined,[{word:"by tomorrow",meaning:"kal tak"},{word:"will have finished",meaning:"khatam kar lunga"}]),

  q("d8-ex-q002","d8-t1-s1","Future Perfect ka sahi formula kya hai?","mcq","Subject + will have + V3","Will have + V3 = Future Perfect. It shows an action completed before a specific future time.","Will have + V3 = Future Perfect formula.",5,{a:"Subject + will + V1",b:"Subject + will have + V3",c:"Subject + have + V3",d:"Subject + will has + V3"}),

  q("d8-ex-q003","d8-t1-s1","'She ___ the report before the meeting.' — fill in.","fill_blank","will have submitted","Future Perfect is used to show completion before a future event (the meeting).","Meeting se pehle report submit ho jaayegi — Future Perfect.",8,undefined,[{word:"will have submitted",meaning:"submit kar chuki hogi"}]),

  q("d8-ex-q004","d8-t1-s1","'By 2030, scientists ___ a cure for cancer.' — fill in.","fill_blank","will have discovered","By 2030 = a specific future time. Action (discover) completed before that time = Future Perfect.","2030 tak = Future Perfect. will have discovered.",8,undefined,[{word:"will have discovered",meaning:"dhundh chuke honge"}]),

  q("d8-ex-q005","d8-t1-s1","Error detect karo: 'He will has completed the task.'","error_detection","He will have completed the task.","After 'will', always use 'have' (not 'has'). Has = present, have = used with will in Future Perfect.","Will ke baad hamesha 'have' aata hai, 'has' nahi.",5,{a:"He will has completed the task.",b:"He will have completing the task.",c:"He will have completed the task.",d:"He will have complete the task."}),

  q("d8-ex-q006","d8-t1-s1","'Woh kal tak ghar aa chuka hoga.' ko English mein translate karo.","translation","He will have come home by tomorrow.","Will have come = Future Perfect of 'come'. V3 of come = come (irregular).","Come ka V3 = come. Will have come = aa chuka hoga.",8,undefined,[{word:"will have come",meaning:"aa chuka hoga"},{word:"by tomorrow",meaning:"kal tak"}]),

  q("d8-ex-q007","d8-t1-s1","'By the time you read this, I ___ already ___.' (leave)","fill_blank","will have already left","By the time = jab tak. Future Perfect shows action completed before another future action.","Jab tak tum padho, main ja chuka hounga — will have left.",8,undefined,[{word:"will have left",meaning:"ja chuka hounga"}]),

  q("d8-ex-q008","d8-t1-s1","Future Perfect ka use kab hota hai?","mcq","Kisi kaam ko future mein ek specific time se pehle complete dikhane ke liye","Future Perfect shows an action that will be completed before a specific future time or event.","Future Perfect = future mein kisi specific time se pehle kaam khatam hoga.",5,{a:"Past mein jo kaam hua uske liye",b:"Kisi kaam ko future mein ek specific time se pehle complete dikhane ke liye",c:"Present mein jo kaam chal raha hai uske liye",d:"Kisi bhi future action ke liye"}),

  q("d8-ex-q009","d8-t1-s1","'Tumhare aane se pehle main khaana bana lunga.' ko English mein translate karo.","translation","I will have cooked the food before you arrive.","Before you arrive = tumhare aane se pehle (future time trigger). Will have cooked = Future Perfect.","Before you arrive = future trigger. Will have cooked = Future Perfect.",8,undefined,[{word:"before you arrive",meaning:"tumhare aane se pehle"},{word:"will have cooked",meaning:"bana lunga"}]),

  q("d8-ex-q010","d8-t1-s1","'V3 form of 'write' kya hai?","mcq","written","Write → wrote → written. V3 = written. Used in Perfect tenses.","Write ka V3 = written. Will have written = likh chuka hounga.",5,{a:"wrote",b:"writed",c:"write",d:"written"}),

  // ── d8-t1-s2: By/Before/When triggers ──────────────────────
  q("d8-ex-q011","d8-t1-s2","'By' ke sath kaun sa tense use hota hai?","mcq","Future Perfect (will have + V3)","'By' introduces a deadline — a specific future time by which the action will be complete. This signals Future Perfect.","'By' ek deadline introduce karta hai — iske sath Future Perfect use hota hai.",5,{a:"Simple Future (will + V1)",b:"Future Perfect (will have + V3)",c:"Present Perfect (have + V3)",d:"Past Perfect (had + V3)"}),

  q("d8-ex-q012","d8-t1-s2","'By next Monday, she ___ her project.' (finish)","fill_blank","will have finished","By next Monday = deadline. Future Perfect = will have finished.","By next Monday = deadline. Will have finished = Future Perfect.",8,undefined,[{word:"by next Monday",meaning:"agle somvar tak"}]),

  q("d8-ex-q013","d8-t1-s2","'Before she leaves, he ___ the report.' (write)","fill_blank","will have written","Before she leaves = future time trigger. Will have written = Future Perfect.","Before she leaves = Future Perfect trigger. Will have written.",8),

  q("d8-ex-q014","d8-t1-s2","'When you wake up, the sun ___.' (rise)","fill_blank","will have risen","When you wake up = future time. The sun rises before that = Future Perfect.","Jab tum utho, suraj ug chuka hoga — will have risen.",8,undefined,[{word:"will have risen",meaning:"ug chuka hoga"}]),

  q("d8-ex-q015","d8-t1-s2","'Agar train 5 baje aaye, tum kal tak pahunch chuke hoge.' ko English mein translate karo.","translation","If the train arrives at 5, you will have reached by tomorrow.","Conditional Future Perfect: If + Simple Present, Subject + will have + V3.","If + Simple Present, will have + V3 = Conditional Future Perfect.",10,undefined,[{word:"will have reached",meaning:"pahunch chuke hoge"}]),

  q("d8-ex-q016","d8-t1-s2","Error detect karo: 'By tomorrow, he will have go to Delhi.'","error_detection","By tomorrow, he will have gone to Delhi.","V3 of 'go' = gone (not 'go'). Future Perfect requires V3.","Go ka V3 = gone, not go. Will have gone.",8,{a:"By tomorrow, he will have go to Delhi.",b:"By tomorrow, he will gone to Delhi.",c:"By tomorrow, he will have went to Delhi.",d:"By tomorrow, he will have gone to Delhi."}),

  q("d8-ex-q017","d8-t1-s2","'2025 tak woh 10 kitaabein likh chuki hongi.' ko English mein translate karo.","translation","By 2025, she will have written 10 books.","By 2025 = 2025 tak. Will have written = likh chuki hongi (Future Perfect).","By 2025 + will have written = Future Perfect.",8,undefined,[{word:"by 2025",meaning:"2025 tak"},{word:"will have written",meaning:"likh chuki hongi"}]),

  q("d8-ex-q018","d8-t1-s2","'Jab meeting shuru hogi, hum presentation khatam kar chuke honge.' ko English mein translate karo.","translation","By the time the meeting starts, we will have finished the presentation.","By the time = jab tak. Future Perfect: will have finished.","By the time + Future Perfect. Will have finished.",8,undefined,[{word:"by the time",meaning:"jab tak"},{word:"will have finished",meaning:"khatam kar chuke honge"}]),

  q("d8-ex-q019","d8-t1-s2","Future Perfect mein 'already' kahaan aata hai?","mcq","will + already + have + V3","'Already' can be placed between 'will' and 'have': I will already have left.","Already = will aur have ke beech. I will already have left.",8,{a:"V3 ke baad",b:"will ke pehle",c:"will + already + have + V3",d:"have ke baad, V3 ke pehle"}),

  q("d8-ex-q020","d8-t1-s2","'Vo subah tak kaam kar chuke honge.' ko English mein translate karo.","translation","They will have worked by morning.","By morning = subah tak. Will have worked = kar chuke honge (Future Perfect).","By morning = subah tak. Future Perfect = will have worked.",5,undefined,[{word:"by morning",meaning:"subah tak"},{word:"will have worked",meaning:"kar chuke honge"}]),

  // ── d8-t1-s3: Negative & Question forms ────────────────────
  q("d8-ex-q021","d8-t1-s3","Future Perfect ka negative form kya hota hai?","mcq","Subject + will not have + V3","Negative = will not have + V3. Will not = won't. Example: She won't have left yet.","Negative Future Perfect = will not have + V3. Won't have.",5,{a:"Subject + will not + V3",b:"Subject + will not have + V3",c:"Subject + not have + V3",d:"Subject + will have not + V3"}),

  q("d8-ex-q022","d8-t1-s3","'Vo kal tak nahi aaya hoga.' ko English mein translate karo.","translation","He will not have come by tomorrow.","Negative Future Perfect: will not have + V3. 'come' V3 = come.","Negative: will not have come = nahi aaya hoga.",8,undefined,[{word:"will not have come",meaning:"nahi aaya hoga"}]),

  q("d8-ex-q023","d8-t1-s3","Future Perfect ka question form kya hota hai?","mcq","Will + subject + have + V3?","For questions: Will is moved to front. Will + Subject + have + V3?","Question: Will ko pehle laao. Will + Subject + have + V3?",5,{a:"Have + subject + will + V3?",b:"Will + subject + have + V3?",c:"Subject + will have + V3?",d:"Do + subject + will have + V3?"}),

  q("d8-ex-q024","d8-t1-s3","'Kya usne kal tak kaam khatam kar liya hoga?' ko English mein translate karo.","translation","Will she have finished the work by tomorrow?","Question form: Will + she + have + finished. By tomorrow = kal tak.","Will + subject + have + V3 = question. Will she have finished?",8,undefined,[{word:"will she have finished",meaning:"kya usne khatam kar liya hoga"}]),

  q("d8-ex-q025","d8-t1-s3","Error detect karo: 'Won't she have been left by now?'","error_detection","Won't she have left by now?","'Have been left' is passive. Simple Future Perfect = will not have + V3 (left, not been left).","Left = V3. 'been left' passive hai. Sahi: won't have left.",10,{a:"Won't she be left by now?",b:"Will she not have been left by now?",c:"Won't she have left by now?",d:"Won't she have leave by now?"}),

  q("d8-ex-q026","d8-t1-s3","'Kya woh kal tak Delhi pahunch chuke honge?' ko English mein translate karo.","translation","Will they have reached Delhi by tomorrow?","Question Future Perfect: Will + they + have + reached (V3).","Will they have reached = pahunch chuke honge? Question form.",8,undefined,[{word:"will they have reached",meaning:"pahunch chuke honge?"}]),

  q("d8-ex-q027","d8-t1-s3","'By 8 PM, they ___ dinner.' — negative form (eat)","fill_blank","will not have eaten","Negative Future Perfect: will not have + V3. V3 of eat = eaten.","Negative: will not have eaten = nahi kha chuke honge.",8,undefined,[{word:"will not have eaten",meaning:"nahi kha chuke honge"}]),

  q("d8-ex-q028","d8-t1-s3","'Kya clinic kal tak khul chuki hogi?' ko English mein translate karo.","translation","Will the clinic have opened by tomorrow?","Question: Will + subject + have + V3. Opened = V3 of open.","Will the clinic have opened? = question Future Perfect.",5,undefined,[{word:"will have opened",meaning:"khul chuki hogi"}]),

  q("d8-ex-q029","d8-t1-s3","'Main kal tak exam nahi de chuka hounga.' ko English mein translate karo.","translation","I will not have given the exam by tomorrow.","Negative: will not have + V3. V3 of give = given.","Will not have given = nahi de chuka hounga. Negative Future Perfect.",8,undefined,[{word:"will not have given",meaning:"nahi de chuka hounga"}]),

  q("d8-ex-q030","d8-t1-s3","'By the time the doctor comes, the patient ___.' — negative (recover)","fill_blank","will not have recovered","Negative Future Perfect: will not have recovered.","Will not have recovered = negative Future Perfect.",8),

  // ── d8-t2-s1: V3 (Past Participle) forms ───────────────────
  q("d8-ex-q031","d8-t2-s1","'Write' ka V3 form kya hai?","mcq","written","Write → wrote → written. Irregular verb. Used in perfect tenses.","Write → wrote → written. Irregular verb.",5,{a:"wrote",b:"writed",c:"write",d:"written"}),

  q("d8-ex-q032","d8-t2-s1","'Take' ka V3 form kya hai?","mcq","taken","Take → took → taken. Irregular verb.","Take → took → taken. Irregular.",5,{a:"took",b:"taked",c:"taken",d:"take"}),

  q("d8-ex-q033","d8-t2-s1","'Buy' ka V3 form kya hai?","mcq","bought","Buy → bought → bought. Irregular.","Buy → bought → bought. Irregular verb.",5,{a:"buyed",b:"buys",c:"bought",d:"boughted"}),

  q("d8-ex-q034","d8-t2-s1","'Speak' ka V3 form kya hai?","mcq","spoken","Speak → spoke → spoken. Irregular.","Speak → spoke → spoken.",5,{a:"spoke",b:"speaked",c:"spoken",d:"speak"}),

  q("d8-ex-q035","d8-t2-s1","'By next year, he will have ___ 3 languages.' (learn)","fill_blank","learned / learnt","Learn is a regular verb. V3 = learned or learnt (both correct).","Learn ka V3 = learned ya learnt. Dono sahi hai.",5,undefined,[{word:"learned/learnt",meaning:"seekh chuka hoga"}]),

  q("d8-ex-q036","d8-t2-s1","'Run' ka V3 form kya hai?","mcq","run","Run → ran → run. Same as base form (irregular).","Run → ran → run. V3 = run (same as V1).",5,{a:"ran",b:"runned",c:"run",d:"running"}),

  q("d8-ex-q037","d8-t2-s1","'See' ka V3 form kya hai?","mcq","seen","See → saw → seen. Irregular.","See → saw → seen. V3 = seen.",5,{a:"saw",b:"see",c:"seen",d:"seened"}),

  q("d8-ex-q038","d8-t2-s1","'By the time we reach, the show ___.' (begin)","fill_blank","will have begun","Begin → began → begun. V3 = begun. Future Perfect.","Begin ka V3 = begun. Will have begun.",8,undefined,[{word:"will have begun",meaning:"shuru ho chuki hogi"}]),

  q("d8-ex-q039","d8-t2-s1","'Lose' ka V3 form kya hai?","mcq","lost","Lose → lost → lost. Irregular. Both V2 and V3 = lost.","Lose → lost → lost. V2 aur V3 dono lost hain.",5,{a:"losed",b:"losted",c:"lost",d:"losen"}),

  q("d8-ex-q040","d8-t2-s1","'Eat' ka V3 form kya hai?","mcq","eaten","Eat → ate → eaten. Irregular verb.","Eat → ate → eaten. V3 = eaten.",5,{a:"ate",b:"eated",c:"eat",d:"eaten"}),

  // ── d8-t2-s2: Professional contexts ─────────────────────────
  q("d8-ex-q041","d8-t2-s2","'Meeting se pehle hum target achieve kar chuke honge.' ko English mein translate karo.","translation","We will have achieved the target before the meeting.","Before the meeting = future time trigger. Will have achieved = Future Perfect.","Before the meeting = trigger. Will have achieved = Future Perfect.",8,undefined,[{word:"will have achieved",meaning:"achieve kar chuke honge"}]),

  q("d8-ex-q042","d8-t2-s2","'Deadline tak saare documents submit ho chuke honge.' ko English mein translate karo.","translation","All documents will have been submitted by the deadline.","Passive Future Perfect: will have been + V3 (submitted). By the deadline = trigger.","Passive Future Perfect: will have been submitted.",10,undefined,[{word:"will have been submitted",meaning:"submit ho chuke honge"}]),

  q("d8-ex-q043","d8-t2-s2","Office email mein ek Future Perfect sentence likho jo project completion show kare.","translation","By Friday, our team will have completed the project successfully.","Professional Future Perfect: By + time + subject + will have + V3 + adverb.","By Friday = deadline. Will have completed = Future Perfect in professional context.",8),

  q("d8-ex-q044","d8-t2-s2","'Agar aap 10 baje tak aaye, main presentation de chuka hounga.' ko English mein translate karo.","translation","If you come by 10 o'clock, I will have already given the presentation.","Conditional Future Perfect: If + Simple Present, Subject + will have + V3.","If you come = condition. Will have given = result in Future Perfect.",10,undefined,[{word:"will have given",meaning:"de chuka hounga"},{word:"already",meaning:"pehle se hi"}]),

  q("d8-ex-q045","d8-t2-s2","'By year-end, sales ___ the target.' (exceed)","fill_blank","will have exceeded","By year-end = deadline. Will have exceeded = Future Perfect.","By year-end = deadline. Will have exceeded = Future Perfect.",8,undefined,[{word:"will have exceeded",meaning:"exceed kar chuki hogi"}]),

  q("d8-ex-q046","d8-t2-s2","Error detect karo: 'By next week, the manager will have approve the budget.'","error_detection","By next week, the manager will have approved the budget.","V3 of 'approve' = approved (regular verb, add -d). Not 'approve'.","Approve ka V3 = approved. Will have approved.",5,{a:"By next week, the manager will have approve the budget.",b:"By next week, the manager will approved the budget.",c:"By next week, the manager will have approved the budget.",d:"By next week, the manager will has approved the budget."}),

  q("d8-ex-q047","d8-t2-s2","'Project launch se pehle team ne saari testing khatam kar li hogi.' ko English mein translate karo.","translation","Before the project launch, the team will have completed all testing.","Before project launch = future time. Will have completed = Future Perfect.","Before project launch = trigger. Will have completed = Future Perfect.",8,undefined,[{word:"will have completed",meaning:"khatam kar li hogi"}]),

  q("d8-ex-q048","d8-t2-s2","'By the time new employee joins, we ___ all onboarding material.' (prepare)","fill_blank","will have prepared","By the time = trigger for Future Perfect. Will have prepared.","By the time = Future Perfect trigger. Will have prepared.",8),

  q("d8-ex-q049","d8-t2-s2","Office mein 'will have been' ka use kab hote hain?","mcq","Passive Future Perfect mein — jab action doosre ne kiya ho aur wo complete ho","Will have been + V3 = Passive Future Perfect. Shows a passive action completed in future.","Will have been + V3 = Passive Future Perfect.",10,{a:"Simple future ke liye",b:"Passive Future Perfect mein — jab action doosre ne kiya ho aur wo complete ho",c:"Present perfect ke liye",d:"Future continuous ke liye"}),

  q("d8-ex-q050","d8-t2-s2","'Interview ke time tak, HR ne candidates shortlist kar liye honge.' ko English mein translate karo.","translation","By the time of the interview, HR will have shortlisted the candidates.","By the time of = trigger. Will have shortlisted = Future Perfect.","By the time of interview = trigger. Will have shortlisted.",8,undefined,[{word:"will have shortlisted",meaning:"shortlist kar liye honge"}]),

  // ── d8-t2-s3: Daily life contexts ───────────────────────────
  q("d8-ex-q051","d8-t2-s3","'Kal subah tak main gym kar chuka hounga.' ko English mein translate karo.","translation","By tomorrow morning, I will have worked out.","By tomorrow morning = deadline. Will have worked out = Future Perfect.","By tomorrow morning = trigger. Will have worked out = Future Perfect.",5,undefined,[{word:"will have worked out",meaning:"gym kar chuka hounga"}]),

  q("d8-ex-q052","d8-t2-s3","'Jab woh aayenge, hum khaana kha chuke honge.' ko English mein translate karo.","translation","By the time they come, we will have eaten.","By the time they come = trigger. Will have eaten = Future Perfect.","By the time = trigger. Will have eaten = Future Perfect.",5,undefined,[{word:"will have eaten",meaning:"kha chuke honge"}]),

  q("d8-ex-q053","d8-t2-s3","'By tomorrow, I ___ this novel.' (read)","fill_blank","will have read","Read (V3) = read (same spelling, different pronunciation). By tomorrow = Future Perfect.","Read ka V3 bhi 'read' hai (alag pronunciation). Will have read.",8,undefined,[{word:"will have read",meaning:"padh chuka hounga"}]),

  q("d8-ex-q054","d8-t2-s3","Error detect karo: 'By next week she will have buyed a new phone.'","error_detection","By next week she will have bought a new phone.","Buy → bought → bought. V3 = bought (not 'buyed' — irregular verb).","Buy irregular hai — V3 = bought, not buyed.",5,{a:"By next week she will have buyed a new phone.",b:"By next week she will bought a new phone.",c:"By next week she will have bought a new phone.",d:"By next week she will have buy a new phone."}),

  q("d8-ex-q055","d8-t2-s3","'Main is mahine ek naya skill seekh chuka hounga.' ko English mein translate karo.","translation","By the end of this month, I will have learned a new skill.","By the end of this month = deadline. Will have learned = Future Perfect.","By the end of this month = deadline. Will have learned.",8,undefined,[{word:"by the end of this month",meaning:"is mahine ke ant tak"}]),

  q("d8-ex-q056","d8-t2-s3","'By the time you finish reading, I ___ my homework.' (complete)","fill_blank","will have completed","By the time = trigger. Future Perfect: will have completed.","Will have completed = Future Perfect.",5),

  q("d8-ex-q057","d8-t2-s3","'Sunne se pehle, mujhe pata chal chuka hoga.' ko English mein translate karo.","translation","Before you tell me, I will have already found out.","Before = trigger. Will have already found out = Future Perfect.","Before = trigger. Will have found out = Future Perfect.",8,undefined,[{word:"will have found out",meaning:"pata chal chuka hoga"}]),

  q("d8-ex-q058","d8-t2-s3","'By this time next year, she ___ married.' (get)","fill_blank","will have gotten / will have got","Get → got → gotten/got. By this time next year = future time.","Get ka V3 = gotten ya got. Will have gotten married.",8,undefined,[{word:"will have gotten",meaning:"ho chuki hogi"}]),

  q("d8-ex-q059","d8-t2-s3","'Jab main waapas aaunga, woh so chuki hogi.' ko English mein translate karo.","translation","By the time I return, she will have fallen asleep.","By the time I return = trigger. Will have fallen = Future Perfect of 'fall'.","Fall ka V3 = fallen. Will have fallen asleep = so chuki hogi.",8,undefined,[{word:"will have fallen asleep",meaning:"so chuki hogi"}]),

  q("d8-ex-q060","d8-t2-s3","'By tonight, I ___ all my pending emails.' (reply)","fill_blank","will have replied","Will have replied = Future Perfect of 'reply' (regular verb). By tonight = deadline.","Reply ka V3 = replied. Will have replied = Future Perfect.",5),

  // ── d8-t3-s1: Duration with Future Perfect ──────────────────
  q("d8-ex-q061","d8-t3-s1","Future Perfect + duration ka pattern kya hai?","mcq","Subject + will have + V3 + for + time period","For showing duration up to a future point: will have + worked/lived/studied + for 5 years.","Duration: will have + V3 + for + time period. Like: will have lived here for 5 years.",8,{a:"Subject + will + V3 + for + time",b:"Subject + will have + V3 + for + time period",c:"Subject + will be + V3 + since + time",d:"Subject + will have + V3 + since + time period"}),

  q("d8-ex-q062","d8-t3-s1","'Agli January tak, woh 5 saal se yahan padh rahi hogi.' ko English mein translate karo.","translation","By next January, she will have been studying here for 5 years.","Future Perfect Continuous = will have been + V-ing + for duration. Studying = V-ing.","Will have been studying = Future Perfect Continuous with duration.",10,undefined,[{word:"will have been studying",meaning:"padh rahi hogi"}]),

  q("d8-ex-q063","d8-t3-s1","'By 2026, they ___ in this city for 10 years.' (live)","fill_blank","will have lived","Will have lived for 10 years = duration up to a future point (2026).","Will have lived for 10 years = Future Perfect with duration.",8,undefined,[{word:"will have lived",meaning:"reh chuke honge"}]),

  q("d8-ex-q064","d8-t3-s1","'Kal tak, main 3 ghante se homework kar raha hounga.' ko English mein translate karo.","translation","By tomorrow, I will have been doing homework for 3 hours.","Will have been doing = Future Perfect Continuous (emphasizes duration).","Will have been doing = Future Perfect Continuous. Duration ke liye.",10,undefined,[{word:"will have been doing",meaning:"kar raha hounga"}]),

  q("d8-ex-q065","d8-t3-s1","Error detect karo: 'By 2025, she will has lived in Mumbai for 3 years.'","error_detection","By 2025, she will have lived in Mumbai for 3 years.","Will has = wrong. Always 'will have' in Future Perfect.","Will has = galat. Will have = sahi. Future Perfect.",5,{a:"By 2025, she will has lived in Mumbai for 3 years.",b:"By 2025, she will have live in Mumbai for 3 years.",c:"By 2025, she will have lived in Mumbai for 3 years.",d:"By 2025, she will had lived in Mumbai for 3 years."}),

  q("d8-ex-q066","d8-t3-s1","'Next week, we will have worked together ___ 2 years.' — fill blank.","fill_blank","for","'For' is used with a time period/duration. 'Since' is used with a starting point.","Duration ke liye 'for' use karte hain. For 2 years.",5,undefined,[{word:"for",meaning:"se (duration)"}]),

  q("d8-ex-q067","d8-t3-s1","'By graduation, he ___ 4 years in college.' (spend)","fill_blank","will have spent","Spend → spent → spent. V3 = spent. By graduation = deadline.","Spend ka V3 = spent. Will have spent.",8,undefined,[{word:"will have spent",meaning:"bitaa chuka hoga"}]),

  q("d8-ex-q068","d8-t3-s1","'Uski retirement tak, usne 30 saal kaam kar liya hoga.' ko English mein translate karo.","translation","By his retirement, he will have worked for 30 years.","By retirement = future deadline. Will have worked for 30 years = duration.","By retirement = deadline. Will have worked for 30 years = Future Perfect with duration.",8,undefined,[{word:"by retirement",meaning:"sewa-niwritti tak"}]),

  q("d8-ex-q069","d8-t3-s1","'By next month, I ___ this app ___ 6 months.' (use, for)","fill_blank","will have used; for","Will have used + for 6 months = Future Perfect with duration.","Will have used + for = Future Perfect + duration.",8),

  q("d8-ex-q070","d8-t3-s1","'By the time she retires, she ___ over 1000 students.' (teach)","fill_blank","will have taught","Teach → taught → taught. V3 = taught. Future Perfect.","Teach ka V3 = taught. Will have taught = padhaa chuki hogi.",8,undefined,[{word:"will have taught",meaning:"padha chuki hogi"}]),

  // ── d8-t3-s2: Mixed practice ─────────────────────────────────
  q("d8-ex-q071","d8-t3-s2","'By the end of this course, I will have ___ 75 days of English.' (complete)","fill_blank","completed","By the end of this course = deadline. Will have completed = Future Perfect.","Will have completed = Future Perfect. Course khatam tak.",5,undefined,[{word:"will have completed",meaning:"khatam kar liya hounga"}]),

  q("d8-ex-q072","d8-t3-s2","'Subah tak doctor ne mujhe dekh liya hoga.' ko English mein translate karo.","translation","By morning, the doctor will have seen me.","See → saw → seen. V3 = seen. By morning = deadline.","See ka V3 = seen. Will have seen = dekh liya hoga.",8,undefined,[{word:"will have seen",meaning:"dekh liya hoga"}]),

  q("d8-ex-q073","d8-t3-s2","Error detect karo: 'Will she has completed the exam by noon?'","error_detection","Will she have completed the exam by noon?","Future Perfect question: Will + subject + have (not 'has') + V3?","Question Future Perfect: Will + she + have + V3? (has nahi).",8,{a:"Will she has completed the exam by noon?",b:"Will she have complete the exam by noon?",c:"Will she have completed the exam by noon?",d:"Does she will have completed the exam by noon?"}),

  q("d8-ex-q074","d8-t3-s2","'Dono teams kal tak apna match khel chuki hongi.' ko English mein translate karo.","translation","Both teams will have played their match by tomorrow.","Will have played = Future Perfect. Both teams = plural subject.","Both teams + will have played = Future Perfect. Plural subject.",8,undefined,[{word:"will have played",meaning:"khel chuki hongi"}]),

  q("d8-ex-q075","d8-t3-s2","'By the time she wakes up, breakfast ___.' — passive (prepare)","fill_blank","will have been prepared","Passive Future Perfect: will have been + V3. Prepared = V3.","Passive Future Perfect: will have been prepared.",10,undefined,[{word:"will have been prepared",meaning:"taiyaar ho chuka hoga"}]),

  // ── d8-t3-s3: Advanced Future Perfect ────────────────────────
  q("d8-ex-q076","d8-t3-s3","Conditional Future Perfect ka structure kya hai?","mcq","If + Simple Present, Subject + will have + V3","Conditional Future Perfect: If + present tense clause, result clause with will have + V3.","If + present, will have + V3 = Conditional Future Perfect.",10,{a:"If + Past, will have + V3",b:"If + Simple Present, Subject + will have + V3",c:"If + Future, would have + V3",d:"If + Present Perfect, will + V3"}),

  q("d8-ex-q077","d8-t3-s3","'Agar main 10 baje tak kaam khatam kar loon, tab hum bahar ja sakte hain.' ko English mein translate karo.","translation","If I have finished work by 10 o'clock, we can go out.","Conditional with present perfect can also express Future Perfect meaning.","If + present perfect, main + will = conditional.",10,undefined,[{word:"if I have finished",meaning:"agar khatam kar loon"}]),

  q("d8-ex-q078","d8-t3-s3","'By next exam, she ___ all chapters.' (revise)","fill_blank","will have revised","Will have revised = Future Perfect. By next exam = deadline.","By next exam = deadline. Will have revised = Future Perfect.",8),

  q("d8-ex-q079","d8-t3-s3","Error detect karo: 'By next year, I will have been promoted to Manager.'","error_detection","Correct! This sentence is already grammatically correct.","This is a correct Passive Future Perfect sentence. Will have been promoted = passive Future Perfect.","Yeh sentence correct hai! Passive Future Perfect ka sahi use.",10,{a:"By next year, I will be promoted to Manager.",b:"By next year, I will promoted to Manager.",c:"By next year, I will have been promoted to Manager.",d:"By next year, I have been promoted to Manager."}),

  q("d8-ex-q080","d8-t3-s3","'Is September tak, mujhe is company mein 5 saal ho jayenge.' ko English mein translate karo.","translation","By this September, I will have been working in this company for 5 years.","Will have been working = Future Perfect Continuous. By + deadline + for + duration.","Will have been working for 5 years = Future Perfect Continuous.",10,undefined,[{word:"will have been working",meaning:"kaam kar raha hounga"}]),

  // ── d8-t4-s1: Quick-fire review ─────────────────────────────
  q("d8-ex-q081","d8-t4-s1","'Go' ka V3 form kya hai?","mcq","gone","Go → went → gone. Irregular verb.","Go → went → gone. V3 = gone.",5,{a:"went",b:"goed",c:"gone",d:"go"}),

  q("d8-ex-q082","d8-t4-s1","'Break' ka V3 form kya hai?","mcq","broken","Break → broke → broken. Irregular.","Break → broke → broken. V3 = broken.",5,{a:"broke",b:"breaked",c:"broken",d:"broked"}),

  q("d8-ex-q083","d8-t4-s1","'Choose' ka V3 form kya hai?","mcq","chosen","Choose → chose → chosen. Irregular.","Choose → chose → chosen. V3 = chosen.",5,{a:"chose",b:"choosen",c:"chosen",d:"choose"}),

  q("d8-ex-q084","d8-t4-s1","'By next week, I ___ the assignment.' (submit)","fill_blank","will have submitted","Submit = regular verb. V3 = submitted. Future Perfect.","Submit ka V3 = submitted. Will have submitted.",5,undefined,[{word:"will have submitted",meaning:"submit kar chuka hounga"}]),

  q("d8-ex-q085","d8-t4-s1","'By the end of today, he ___ 10 km.' (run)","fill_blank","will have run","Run → ran → run. V3 = run. Future Perfect = will have run.","Run ka V3 = run (same). Will have run = 10 km dauda hoga.",8,undefined,[{word:"will have run",meaning:"dauda hoga"}]),

  q("d8-ex-q086","d8-t4-s1","'Drive' ka V3 form kya hai?","mcq","driven","Drive → drove → driven. Irregular.","Drive → drove → driven. V3 = driven.",5,{a:"drove",b:"drived",c:"driven",d:"drive"}),

  q("d8-ex-q087","d8-t4-s1","'Sing' ka V3 form kya hai?","mcq","sung","Sing → sang → sung. Irregular.","Sing → sang → sung. V3 = sung.",5,{a:"sang",b:"singed",c:"sing",d:"sung"}),

  q("d8-ex-q088","d8-t4-s1","'By tonight, the chef ___ 50 meals.' (prepare)","fill_blank","will have prepared","Prepare = regular verb. V3 = prepared. Future Perfect = will have prepared.","Prepare ka V3 = prepared. Will have prepared = Future Perfect.",5),

  q("d8-ex-q089","d8-t4-s1","'Fall' ka V3 form kya hai?","mcq","fallen","Fall → fell → fallen. Irregular.","Fall → fell → fallen. V3 = fallen.",5,{a:"fell",b:"falled",c:"fallen",d:"fall"}),

  q("d8-ex-q090","d8-t4-s1","'Know' ka V3 form kya hai?","mcq","known","Know → knew → known. Irregular.","Know → knew → known. V3 = known.",5,{a:"knew",b:"knowed",c:"known",d:"know"}),

  // ── d8-t4-s2: Integrated sentences ──────────────────────────
  q("d8-ex-q091","d8-t4-s2","'Kal tak main 10 chapters padh chuka hounga.' ko English mein translate karo.","translation","By tomorrow, I will have read 10 chapters.","Read V3 = read. By tomorrow = deadline. Future Perfect.","Read ka V3 = read. By tomorrow + will have read.",8,undefined,[{word:"by tomorrow",meaning:"kal tak"},{word:"will have read",meaning:"padh chuka hounga"}]),

  q("d8-ex-q092","d8-t4-s2","'2025 tak, is company ne 1 lakh employees hire kar liye honge.' ko English mein translate karo.","translation","By 2025, this company will have hired 100,000 employees.","By 2025 = deadline. Will have hired = Future Perfect. 1 lakh = 100,000.","By 2025 = deadline. Will have hired = Future Perfect.",8,undefined,[{word:"will have hired",meaning:"hire kar liye honge"}]),

  q("d8-ex-q093","d8-t4-s2","'She ___ home before I wake up.' (leave) — fill in.","fill_blank","will have left","Leave → left → left. V3 = left. Future Perfect = will have left.","Leave ka V3 = left. Will have left = Future Perfect.",5,undefined,[{word:"will have left",meaning:"ja chuki hogi"}]),

  q("d8-ex-q094","d8-t4-s2","Error detect karo: 'By the time he arrives, we will have ate lunch.'","error_detection","By the time he arrives, we will have eaten lunch.","Eat → ate → eaten. V3 = eaten (not 'ate' which is V2).","Eat ka V3 = eaten, not ate. Ate = V2. Will have eaten = sahi.",8,{a:"By the time he arrives, we will have ate lunch.",b:"By the time he arrives, we ate lunch.",c:"By the time he arrives, we will have eaten lunch.",d:"By the time he arrives, we will eat lunch."}),

  q("d8-ex-q095","d8-t4-s2","'Meri naani kal tak 80 saal ki ho jaayengi.' ko English mein translate karo.","translation","By tomorrow, my grandmother will have turned 80.","Turn 80 = 80 saal ki hona. By tomorrow = deadline. Will have turned.","By tomorrow = deadline. Will have turned 80 = age reach kar li hogi.",8,undefined,[{word:"will have turned 80",meaning:"80 saal ki ho jaayengi"}]),

  q("d8-ex-q096","d8-t4-s2","'By the time the guests arrive, we ___ the house.' (clean)","fill_blank","will have cleaned","Will have cleaned = Future Perfect. By the time = trigger.","Will have cleaned = Future Perfect. By the time = trigger.",5),

  q("d8-ex-q097","d8-t4-s2","'Kya tum kal tak apna homework khatam kar chuke hoge?' ko English mein translate karo.","translation","Will you have finished your homework by tomorrow?","Question form: Will + you + have + V3? By tomorrow = deadline.","Question: Will you have finished? = kya khatam kar chuke hoge?",8,undefined,[{word:"will you have finished",meaning:"kya khatam kar chuke hoge"}]),

  q("d8-ex-q098","d8-t4-s2","'By next summer, I ___ to Europe.' (travel)","fill_blank","will have traveled / will have travelled","Travel = regular verb. V3 = traveled/travelled. Future Perfect.","Travel ka V3 = traveled. Will have traveled.",8,undefined,[{word:"will have traveled",meaning:"travel kar chuka hounga"}]),

  q("d8-ex-q099","d8-t4-s2","'Vo shaadi se pehle ghar saja chuki hogi.' ko English mein translate karo.","translation","She will have decorated the house before the wedding.","Before the wedding = trigger. Will have decorated = Future Perfect.","Before the wedding = trigger. Will have decorated.",8,undefined,[{word:"will have decorated",meaning:"saja chuki hogi"}]),

  q("d8-ex-q100","d8-t4-s2","'By the time the year ends, I ___ this English course.' (complete)","fill_blank","will have completed","Will have completed = Future Perfect. By the time the year ends = trigger.","By the time year ends = trigger. Will have completed = Future Perfect.",5),

  // ── d8-t4-s3: Final review ───────────────────────────────────
  q("d8-ex-q101","d8-t4-s3","Future Perfect aur Simple Future mein kya fark hai?","mcq","Future Perfect = kaam ek time se pehle complete hoga; Simple Future = kaam hoga","Simple Future (will go) just shows future action. Future Perfect (will have gone) shows completion before a reference point.","Future Perfect = completion before reference. Simple Future = just future action.",8,{a:"Koi fark nahi",b:"Future Perfect = kaam ek time se pehle complete hoga; Simple Future = kaam hoga",c:"Future Perfect = present ke liye hai",d:"Simple Future = completion show karta hai"}),

  q("d8-ex-q102","d8-t4-s3","'Kal subah tak sun nikal chuka hoga.' ko English mein translate karo.","translation","By tomorrow morning, the sun will have risen.","Rise → rose → risen. V3 = risen. Future Perfect.","Rise ka V3 = risen. Will have risen = ug chuka hoga.",8,undefined,[{word:"will have risen",meaning:"ug chuka hoga"}]),

  q("d8-ex-q103","d8-t4-s3","'They ___ for 3 hours by the time we meet.' (wait)","fill_blank","will have been waiting","Future Perfect Continuous: will have been + V-ing. Duration = 3 hours.","Duration ke sath Future Perfect Continuous: will have been waiting.",10,undefined,[{word:"will have been waiting",meaning:"intezaar kar rahe honge"}]),

  q("d8-ex-q104","d8-t4-s3","Error detect karo: 'By the time I graduate, I will has studied for 5 years.'","error_detection","By the time I graduate, I will have studied for 5 years.","Will has = incorrect. Future Perfect = will have (not will has).","Will has = galat. Will have = sahi. Future Perfect.",5,{a:"By the time I graduate, I will has studied for 5 years.",b:"By the time I graduate, I will studied for 5 years.",c:"By the time I graduate, I will have studied for 5 years.",d:"By the time I graduate, I had studied for 5 years."}),

  q("d8-ex-q105","d8-t4-s3","'Agla saal aate aate, hamne 2 saal saath kaam kiya hoga.' ko English mein translate karo.","translation","By next year, we will have worked together for 2 years.","By next year = deadline. Will have worked for 2 years = Future Perfect with duration.","By next year + will have worked for 2 years = Future Perfect with duration.",8,undefined,[{word:"will have worked together",meaning:"saath kaam kar chuke honge"}]),

  q("d8-ex-q106","d8-t4-s3","'V3 form of 'steal' kya hai?","mcq","stolen","Steal → stole → stolen. Irregular verb.","Steal → stole → stolen. V3 = stolen.",5,{a:"stole",b:"stealed",c:"stolen",d:"steal"}),

  q("d8-ex-q107","d8-t4-s3","'By Saturday, they ___ their new house.' (move into)","fill_blank","will have moved into","Move = regular verb. V3 = moved. Future Perfect = will have moved into.","Move ka V3 = moved. Will have moved into = ghar mein shift kar chuke honge.",8),

  q("d8-ex-q108","d8-t4-s3","'Main is January tak is job mein 3 saal kaam kar chuka hounga.' ko English mein translate karo.","translation","By this January, I will have worked in this job for 3 years.","By this January = deadline. Will have worked for 3 years = duration + Future Perfect.","By this January + will have worked for 3 years = Future Perfect with duration.",8,undefined,[{word:"by this January",meaning:"is January tak"}]),

  q("d8-ex-q109","d8-t4-s3","'Heal' ka V3 form kya hai?","mcq","healed","Heal is a regular verb. V3 = healed (add -ed).","Heal = regular verb. V3 = healed.",5,{a:"healed",b:"healt",c:"heal",d:"healen"}),

  q("d8-ex-q110","d8-t4-s3","'By the time summer arrives, the flowers ___ already ___.' (bloom)","fill_blank","will have already bloomed","Will have already bloomed = Future Perfect with 'already'. Bloom = regular, V3 = bloomed.","Already + will have bloomed = Future Perfect. Regular verb.",5,undefined,[{word:"will have bloomed",meaning:"khil chuke honge"}]),

  // Extra questions to reach 150 for Day 8
  q("d8-ex-q111","d8-t1-s1","'Swim' ka V3 form kya hai?","mcq","swum","Swim → swam → swum. Irregular verb.","Swim → swam → swum. V3 = swum.",5,{a:"swam",b:"swimmed",c:"swum",d:"swim"}),

  q("d8-ex-q112","d8-t1-s2","'By the time you arrive, I ___ dinner.' (cook)","fill_blank","will have cooked","Cook = regular verb. V3 = cooked. Future Perfect.","Cook ka V3 = cooked. Will have cooked.",5),

  q("d8-ex-q113","d8-t1-s3","'Kya wo kal tak apna assignment khatam kar chuka hoga?' ko English mein translate karo.","translation","Will he have completed his assignment by tomorrow?","Question Future Perfect: Will + he + have + V3?","Will he have completed = question Future Perfect.",5,undefined,[{word:"will he have completed",meaning:"kya khatam kar chuka hoga"}]),

  q("d8-ex-q114","d8-t2-s1","'Forget' ka V3 form kya hai?","mcq","forgotten","Forget → forgot → forgotten. Irregular.","Forget → forgot → forgotten. V3 = forgotten.",5,{a:"forgot",b:"forgeted",c:"forgotten",d:"forget"}),

  q("d8-ex-q115","d8-t2-s2","'By next quarter, we ___ all milestones.' (achieve)","fill_blank","will have achieved","Achieve = regular verb. V3 = achieved. Future Perfect.","Achieve ka V3 = achieved. Will have achieved.",8),

  q("d8-ex-q116","d8-t2-s3","'By the time the seminar ends, I ___ a lot.' (learn)","fill_blank","will have learned","Learn = regular verb. V3 = learned. Future Perfect.","Will have learned = Future Perfect.",5),

  q("d8-ex-q117","d8-t3-s1","'Grow' ka V3 form kya hai?","mcq","grown","Grow → grew → grown. Irregular.","Grow → grew → grown. V3 = grown.",5,{a:"grew",b:"growed",c:"grown",d:"grow"}),

  q("d8-ex-q118","d8-t3-s2","'By this evening, she ___ her medicine.' (take)","fill_blank","will have taken","Take → took → taken. V3 = taken. Future Perfect.","Take ka V3 = taken. Will have taken.",5,undefined,[{word:"will have taken",meaning:"le chuki hogi"}]),

  q("d8-ex-q119","d8-t3-s3","'Hold' ka V3 form kya hai?","mcq","held","Hold → held → held. Both V2 and V3 = held.","Hold → held → held. V3 = held.",5,{a:"holded",b:"held",c:"holding",d:"hold"}),

  q("d8-ex-q120","d8-t4-s1","'By next week, they ___ a decision.' (make)","fill_blank","will have made","Make → made → made. V3 = made. Future Perfect.","Make ka V3 = made. Will have made.",5,undefined,[{word:"will have made",meaning:"faisla kar chuke honge"}]),

  q("d8-ex-q121","d8-t4-s2","'Understand' ka V3 form kya hai?","mcq","understood","Understand → understood → understood. Both V2 and V3 same.","Understand → understood → understood.",5,{a:"understanded",b:"understood",c:"understanding",d:"understand"}),

  q("d8-ex-q122","d8-t4-s3","'Vo kal tak 5 kitaabein padh chuki hogi.' ko English mein translate karo.","translation","By tomorrow, she will have read 5 books.","Read V3 = read. By tomorrow = deadline. Future Perfect.","Read ka V3 = read. Will have read 5 books = Future Perfect.",5,undefined,[{word:"will have read",meaning:"padh chuki hogi"}]),

  q("d8-ex-q123","d8-t1-s1","'Give' ka V3 form kya hai?","mcq","given","Give → gave → given. Irregular.","Give → gave → given. V3 = given.",5,{a:"gave",b:"gived",c:"given",d:"give"}),

  q("d8-ex-q124","d8-t1-s2","'By next year, they ___ a new office.' (build)","fill_blank","will have built","Build → built → built. V3 = built. Future Perfect.","Build ka V3 = built. Will have built = Future Perfect.",5,undefined,[{word:"will have built",meaning:"bana chuke honge"}]),

  q("d8-ex-q125","d8-t1-s3","Error detect karo: 'By next June, she will have been graduated.'","error_detection","By next June, she will have graduated.","Graduate is not typically used in passive perfect. Active: will have graduated.","Active: she will have graduated. Passive form yahan sahi nahi.",8,{a:"By next June, she will have been graduated.",b:"By next June, she graduated.",c:"By next June, she will have graduated.",d:"By next June, she will be graduated."}),

  q("d8-ex-q126","d8-t2-s1","'Find' ka V3 form kya hai?","mcq","found","Find → found → found. Both V2 and V3 = found.","Find → found → found. V3 = found.",5,{a:"finded",b:"found",c:"find",d:"foud"}),

  q("d8-ex-q127","d8-t2-s2","'Is course ke khatam hote hote, tum English expert ban chuke hoge.' ko English mein translate karo.","translation","By the end of this course, you will have become an English expert.","By the end of this course = deadline. Will have become = Future Perfect.","Will have become = Future Perfect. Course khatam hote tak.",8,undefined,[{word:"will have become",meaning:"ban chuke hoge"}]),

  q("d8-ex-q128","d8-t2-s3","'By evening, they ___ the movie.' (watch)","fill_blank","will have watched","Watch = regular verb. V3 = watched. Future Perfect.","Watch ka V3 = watched. Will have watched.",5),

  q("d8-ex-q129","d8-t3-s1","'Show' ka V3 form kya hai?","mcq","shown","Show → showed → shown (or showed). V3 = shown.","Show → showed → shown. V3 = shown.",5,{a:"showed",b:"showned",c:"shown",d:"show"}),

  q("d8-ex-q130","d8-t3-s2","'By tomorrow morning, the sun ___ .' (rise)","fill_blank","will have risen","Rise → rose → risen. V3 = risen. Future Perfect.","Rise ka V3 = risen. Will have risen = ug chuka hoga.",8,undefined,[{word:"will have risen",meaning:"ug chuka hoga"}]),

  q("d8-ex-q131","d8-t3-s3","'Woh kal tak poora ghar pack kar chuki hogi.' ko English mein translate karo.","translation","By tomorrow, she will have packed the entire house.","Will have packed = Future Perfect. By tomorrow = deadline.","Will have packed = Future Perfect.",5,undefined,[{word:"will have packed",meaning:"pack kar chuki hogi"}]),

  q("d8-ex-q132","d8-t4-s1","'Put' ka V3 form kya hai?","mcq","put","Put → put → put. V2 and V3 same as base form. Irregular.","Put → put → put. Sabhi teen forms same hain.",5,{a:"putted",b:"puts",c:"put",d:"putten"}),

  q("d8-ex-q133","d8-t4-s2","'By the time they call, I ___ the solution.' (find)","fill_blank","will have found","Find → found → found. V3 = found. Future Perfect.","Find ka V3 = found. Will have found.",5,undefined,[{word:"will have found",meaning:"dhundh chuka hounga"}]),

  q("d8-ex-q134","d8-t4-s3","'Cut' ka V3 form kya hai?","mcq","cut","Cut → cut → cut. All three forms same. Irregular.","Cut → cut → cut. Sabhi forms same.",5,{a:"cutted",b:"cuts",c:"cut",d:"cutten"}),

  q("d8-ex-q135","d8-t1-s1","'By next month, prices ___ significantly.' (rise)","fill_blank","will have risen","Rise → rose → risen. Future Perfect shows completion before next month.","Rise ka V3 = risen. Will have risen significantly.",5),

  q("d8-ex-q136","d8-t1-s2","'Bet' ka V3 form kya hai?","mcq","bet","Bet → bet → bet. All forms same. Irregular.","Bet → bet → bet. Sabhi forms same.",5,{a:"betted",b:"bets",c:"bet",d:"bitten"}),

  q("d8-ex-q137","d8-t1-s3","'Is saal ke ant tak, usne 12 countries visit ki hongi.' ko English mein translate karo.","translation","By the end of this year, she will have visited 12 countries.","By the end of this year = deadline. Will have visited = Future Perfect.","By the end of this year = deadline. Will have visited.",8,undefined,[{word:"will have visited",meaning:"visit ki hongi"}]),

  q("d8-ex-q138","d8-t2-s1","'Blow' ka V3 form kya hai?","mcq","blown","Blow → blew → blown. Irregular.","Blow → blew → blown. V3 = blown.",5,{a:"blew",b:"blowed",c:"blown",d:"blow"}),

  q("d8-ex-q139","d8-t2-s2","'By the product launch, the team ___ all features.' (test)","fill_blank","will have tested","Test = regular verb. V3 = tested. Future Perfect.","Test ka V3 = tested. Will have tested = Future Perfect.",8),

  q("d8-ex-q140","d8-t2-s3","Error detect karo: 'By the time she calls, I will have ate.'","error_detection","By the time she calls, I will have eaten.","Eat V3 = eaten (not 'ate' which is V2). Future Perfect needs V3.","Eat ka V3 = eaten. Will have eaten = sahi.",5,{a:"By the time she calls, I will have ate.",b:"By the time she calls, I will ate.",c:"By the time she calls, I will have eaten.",d:"By the time she calls, I will eat."}),

  q("d8-ex-q141","d8-t3-s1","'Ride' ka V3 form kya hai?","mcq","ridden","Ride → rode → ridden. Irregular.","Ride → rode → ridden. V3 = ridden.",5,{a:"rode",b:"rided",c:"ridden",d:"ride"}),

  q("d8-ex-q142","d8-t3-s2","'By next winter, they ___ a new home.' (buy)","fill_blank","will have bought","Buy → bought → bought. V3 = bought. Future Perfect.","Buy ka V3 = bought. Will have bought = Future Perfect.",5,undefined,[{word:"will have bought",meaning:"khareed chuke honge"}]),

  q("d8-ex-q143","d8-t3-s3","'Woh kal tak gana gaana seekh chuka hoga.' ko English mein translate karo.","translation","By tomorrow, he will have learned to sing.","Learn + to sing = seekhna gaana. By tomorrow = deadline. Future Perfect.","By tomorrow = deadline. Will have learned to sing.",5,undefined,[{word:"will have learned",meaning:"seekh chuka hoga"}]),

  q("d8-ex-q144","d8-t4-s1","'Fly' ka V3 form kya hai?","mcq","flown","Fly → flew → flown. Irregular.","Fly → flew → flown. V3 = flown.",5,{a:"flew",b:"flied",c:"flown",d:"fly"}),

  q("d8-ex-q145","d8-t4-s2","'By this time tomorrow, she ___ home.' (reach)","fill_blank","will have reached","Reach = regular verb. V3 = reached. Future Perfect.","Reach ka V3 = reached. Will have reached = Future Perfect.",5,undefined,[{word:"will have reached",meaning:"pahunch chuki hogi"}]),

  q("d8-ex-q146","d8-t4-s3","'By the end of today, I ___ all my emails.' (send)","fill_blank","will have sent","Send → sent → sent. V3 = sent. Future Perfect.","Send ka V3 = sent. Will have sent = Future Perfect.",5,undefined,[{word:"will have sent",meaning:"bhej chuka hounga"}]),

  q("d8-ex-q147","d8-t1-s1","'Meet' ka V3 form kya hai?","mcq","met","Meet → met → met. Both V2 and V3 = met.","Meet → met → met. V3 = met.",5,{a:"meeted",b:"meets",c:"met",d:"meeting"}),

  q("d8-ex-q148","d8-t1-s2","'By Saturday, she ___ all her chores.' (finish)","fill_blank","will have finished","Finish = regular verb. V3 = finished. Future Perfect.","Finish ka V3 = finished. Will have finished.",5),

  q("d8-ex-q149","d8-t1-s3","'Hit' ka V3 form kya hai?","mcq","hit","Hit → hit → hit. All forms same. Irregular.","Hit → hit → hit. Sabhi forms same.",5,{a:"hitted",b:"hits",c:"hit",d:"hitten"}),

  q("d8-ex-q150","d8-t2-s1","'Kal tak woh apna breakfast kha chuka hoga.' ko English mein translate karo.","translation","By tomorrow, he will have eaten his breakfast.","Eat V3 = eaten. By tomorrow = deadline. Future Perfect.","Eat ka V3 = eaten. Will have eaten = Future Perfect.",5,undefined,[{word:"will have eaten",meaning:"kha chuka hoga"}]),

];

// ══════════════════════════════════════════════════════════════
// DAY 9 EXTRA QUESTIONS — Use of There (There is/are/was/were)
// 150 questions across subtopics d9-t1-s1 through d9-t3-s3
// ══════════════════════════════════════════════════════════════
export const DAY_9_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d9-t1-s1: There is / There are (Present) ────────────────
  q("d9-ex-q001","d9-t1-s1","'Mez par ek kitaab hai.' ko English mein translate karo.","translation","There is a book on the table.","There is = singular noun ke liye. 'A book' = singular.","`There is` = singular noun ke sath.",5,undefined,[{word:"there is",meaning:"kuch hai (singular)"},{word:"on the table",meaning:"mez par"}]),

  q("d9-ex-q002","d9-t1-s1","'There is' aur 'There are' mein kya fark hai?","mcq","There is = singular noun, There are = plural noun","'There is' is used with singular nouns. 'There are' is used with plural nouns.","There is = singular. There are = plural.",5,{a:"There is = plural, There are = singular",b:"There is = singular noun, There are = plural noun",c:"Dono same hain",d:"There is = past, There are = present"}),

  q("d9-ex-q003","d9-t1-s1","'Kamre mein teen kursiyan hain.' ko English mein translate karo.","translation","There are three chairs in the room.","Three chairs = plural noun. Use 'There are' for plural.","Teen kursiyan = plural. There are = plural ke liye.",5,undefined,[{word:"there are",meaning:"hain (plural)"},{word:"three chairs",meaning:"teen kursiyan"}]),

  q("d9-ex-q004","d9-t1-s1","'___ a cat in the garden.' — fill in.","fill_blank","There is","'A cat' = singular. Use 'There is' for singular nouns.","A cat = singular. There is = singular ke liye.",5,undefined,[{word:"there is",meaning:"ek hai"}]),

  q("d9-ex-q005","d9-t1-s1","Error detect karo: 'There are a dog in the park.'","error_detection","There is a dog in the park.","'A dog' is singular, so use 'There is' (not 'There are').","A dog = singular. There is = singular ke liye.",5,{a:"There are a dog in the park.",b:"There is some dogs in the park.",c:"There is a dog in the park.",d:"There are an dog in the park."}),

  q("d9-ex-q006","d9-t1-s1","'Fridge mein doodh hai.' ko English mein translate karo.","translation","There is milk in the fridge.","Milk = uncountable singular. Use 'There is' for uncountable nouns.","Milk = uncountable noun. There is = uncountable ke liye bhi.",5,undefined,[{word:"there is milk",meaning:"doodh hai"},{word:"in the fridge",meaning:"fridge mein"}]),

  q("d9-ex-q007","d9-t1-s1","'___ many people at the market.' — fill in.","fill_blank","There are","'Many people' = plural. Use 'There are' for plural.","Many people = plural. There are = plural ke liye.",5),

  q("d9-ex-q008","d9-t1-s1","'Iss gali mein 5 dukanen hain.' ko English mein translate karo.","translation","There are 5 shops in this street.","Five shops = plural. Use 'There are'.","5 shops = plural. There are = plural ke liye.",5,undefined,[{word:"there are 5 shops",meaning:"5 dukanen hain"},{word:"in this street",meaning:"is gali mein"}]),

  q("d9-ex-q009","d9-t1-s1","'Unmeasurable nouns ke sath konsa use hota hai?","mcq","There is (singular form)","Uncountable nouns (water, sugar, milk, money) are treated as singular. Use 'There is'.","Uncountable nouns = singular. There is = unke sath.",5,{a:"There are",b:"There is (singular form)",c:"There were",d:"Dono sahi hain"}),

  q("d9-ex-q010","d9-t1-s1","'Baag mein kai prakar ke phool hain.' ko English mein translate karo.","translation","There are various types of flowers in the garden.","Various types = plural. Use 'There are'.","Various types = plural. There are = plural ke liye.",5,undefined,[{word:"there are various types",meaning:"kai prakar hain"},{word:"in the garden",meaning:"baag mein"}]),

  // ── d9-t1-s2: There was / There were (Past) ─────────────────
  q("d9-ex-q011","d9-t1-s2","'There was' aur 'There were' ka use kab hota hai?","mcq","There was = past singular, There were = past plural","Past tense of There is/are. Was = singular past, Were = plural past.","There was = past singular. There were = past plural.",5,{a:"There was = plural past, There were = singular past",b:"There was = past singular, There were = past plural",c:"Dono present ke liye hain",d:"There was = future, There were = past"}),

  q("d9-ex-q012","d9-t1-s2","'Kal school mein bahut students the.' ko English mein translate karo.","translation","There were many students in school yesterday.","Yesterday = past. Many students = plural. Use 'There were'.","Kal = past. Many students = plural. There were = past plural.",5,undefined,[{word:"there were",meaning:"the (plural past)"},{word:"yesterday",meaning:"kal"}]),

  q("d9-ex-q013","d9-t1-s2","'Purane zamaane mein ek bada jungle tha.' ko English mein translate karo.","translation","There was a big forest in the old days.","Old days = past. A big forest = singular. Use 'There was'.","Old days = past. A big forest = singular. There was.",5,undefined,[{word:"there was",meaning:"tha (singular past)"},{word:"in the old days",meaning:"purane zamaane mein"}]),

  q("d9-ex-q014","d9-t1-s2","'___ a beautiful lake near our village.' (past) — fill in.","fill_blank","There was","Past singular: 'a beautiful lake' = singular. There was.","A lake = singular past. There was.",5,undefined,[{word:"there was",meaning:"tha (past singular)"}]),

  q("d9-ex-q015","d9-t1-s2","Error detect karo: 'There was many problems in the project.'","error_detection","There were many problems in the project.","'Many problems' = plural past. Use 'There were' (not 'There was').","Many problems = plural. There were = plural past.",5,{a:"There was many problems in the project.",b:"There were a problems in the project.",c:"There were many problems in the project.",d:"There was problem in the project."}),

  q("d9-ex-q016","d9-t1-s2","'Pehle is shahri mein do cinema ghar the.' ko English mein translate karo.","translation","There were two cinema halls in this city before.","Before = past. Two cinema halls = plural. There were.","Before = past. Two cinema halls = plural. There were.",5,undefined,[{word:"there were",meaning:"the (plural past)"},{word:"before",meaning:"pehle"}]),

  q("d9-ex-q017","d9-t1-s2","'___ no electricity last night.' — fill in.","fill_blank","There was","No electricity = uncountable singular. Past = There was.","No electricity = uncountable singular. Past = There was.",5,undefined,[{word:"there was no",meaning:"kuch nahi tha"}]),

  q("d9-ex-q018","d9-t1-s2","'Mujhe yaad hai ki wahan ek parana ghar tha.' ko English mein translate karo.","translation","I remember there was an old house there.","I remember = main yaad karta hun. There was = tha (past singular).","I remember = mujhe yaad hai. There was = tha (past).",8,undefined,[{word:"I remember there was",meaning:"mujhe yaad hai ki tha"},{word:"an old house",meaning:"ek purana ghar"}]),

  q("d9-ex-q019","d9-t1-s2","'Uss zamaane mein log ke paas koi gadget nahi the.' ko English mein translate karo.","translation","There were no gadgets for people in those days.","No gadgets = plural past. Those days = past. There were no.","No gadgets = plural past. There were no = plural negative past.",8,undefined,[{word:"there were no gadgets",meaning:"koi gadgets nahi the"},{word:"in those days",meaning:"uss zamaane mein"}]),

  q("d9-ex-q020","d9-t1-s2","'___ a strong smell coming from the kitchen.' (past) — fill in.","fill_blank","There was","A strong smell = singular past. There was.","A smell = singular past. There was.",5),

  // ── d9-t1-s3: Negative and Question forms ───────────────────
  q("d9-ex-q021","d9-t1-s3","'There is' ka negative form kya hai?","mcq","There isn't / There is not","Negative = There isn't (contraction) or There is not. 'Not' comes after 'is'.","Negative: There isn't = There is not. 'isn't' = contracted form.",5,{a:"There not is",b:"There isn't / There is not",c:"There is no not",d:"Not there is"}),

  q("d9-ex-q022","d9-t1-s3","'Fridge mein khaana nahi hai.' ko English mein translate karo.","translation","There isn't any food in the fridge. / There is no food in the fridge.","Negative: There isn't + any OR There is + no + noun.","There isn't any OR There is no = negative forms.",5,undefined,[{word:"there isn't any",meaning:"koi nahi hai"},{word:"there is no",meaning:"koi nahi"}]),

  q("d9-ex-q023","d9-t1-s3","'Is there' question form kab banate hain?","mcq","Jab singular noun ke baare mein poocha jaaye","For questions with singular nouns: 'Is there a...?' For plural: 'Are there any...?'","Question: Is there (singular) / Are there (plural).",5,{a:"Jab plural ke baare mein poocha jaaye",b:"Jab singular noun ke baare mein poocha jaaye",c:"Sirf past tense mein",d:"Kisi bhi time mein"}),

  q("d9-ex-q024","d9-t1-s3","'Kya is restaurant mein vegetarian khaana milta hai?' ko English mein translate karo.","translation","Is there any vegetarian food in this restaurant?","Is there any = singular/uncountable question. Vegetarian food = uncountable.","Is there any = question for uncountable noun.",5,undefined,[{word:"is there any",meaning:"kya koi hai"},{word:"vegetarian food",meaning:"shakahari khaana"}]),

  q("d9-ex-q025","d9-t1-s3","Error detect karo: 'Are there a hospital near here?'","error_detection","Is there a hospital near here?","'A hospital' = singular. Singular question = 'Is there' (not 'Are there').","A hospital = singular. Is there = singular question.",5,{a:"Are there a hospital near here?",b:"Is there any hospital near here?",c:"Is there a hospital near here?",d:"There are a hospital near here?"}),

  q("d9-ex-q026","d9-t1-s3","'Kya kal party mein koi problem thi?' ko English mein translate karo.","translation","Was there any problem at the party yesterday?","Was there = past singular question. Any problem = singular.","Was there = past singular question.",5,undefined,[{word:"was there any problem",meaning:"kya koi problem thi"},{word:"at the party",meaning:"party mein"}]),

  q("d9-ex-q027","d9-t1-s3","'There ___ no students in the classroom.' (past) — fill in.","fill_blank","were","No students = plural past. There were no.","Students = plural past. There were.",5,undefined,[{word:"there were no",meaning:"koi nahi the"}]),

  q("d9-ex-q028","d9-t1-s3","'Kya iss imarat mein lift hai?' ko English mein translate karo.","translation","Is there a lift in this building?","Is there = singular question. A lift = singular.","Is there a lift = singular question.",5,undefined,[{word:"is there a lift",meaning:"kya lift hai"},{word:"in this building",meaning:"is imarat mein"}]),

  q("d9-ex-q029","d9-t1-s3","'There ___ any noise last night.' — negative past — fill in.","fill_blank","wasn't","There wasn't = negative past singular. No noise = singular uncountable.","Negative past singular: There wasn't any noise.",5,undefined,[{word:"there wasn't",meaning:"nahi tha"}]),

  q("d9-ex-q030","d9-t1-s3","'Unke ghar mein koi TV nahi tha.' ko English mein translate karo.","translation","There was no TV in their house.","There was no = negative past singular. TV = singular.","There was no = past negative singular.",5,undefined,[{word:"there was no",meaning:"nahi tha"},{word:"in their house",meaning:"unke ghar mein"}]),

  // ── d9-t2-s1: There will be / There would be ───────────────
  q("d9-ex-q031","d9-t2-s1","Future mein 'There will be' ka structure kya hai?","mcq","There will be + noun (singular ya uncountable)","Future: There will be = kuch hoga. Same structure for singular and uncountable.","Future: There will be = kuch hoga (future singular).",5,{a:"There will is + noun",b:"There will are + noun",c:"There will be + noun (singular ya uncountable)",d:"There be will + noun"}),

  q("d9-ex-q032","d9-t2-s1","'Agle saal ek naya school khulega.' ko English mein translate karo.","translation","There will be a new school next year.","There will be = future. A new school = singular.","There will be = future. A new school = singular noun.",5,undefined,[{word:"there will be",meaning:"hoga (future)"},{word:"next year",meaning:"agle saal"}]),

  q("d9-ex-q033","d9-t2-s1","'___ many opportunities in the future.' — fill in.","fill_blank","There will be","Many opportunities = plural future. There will be = future plural.","Future plural: There will be many opportunities.",5,undefined,[{word:"there will be",meaning:"honge (future plural)"}]),

  q("d9-ex-q034","d9-t2-s1","'Aane wale dinon mein bahut badlaav honge.' ko English mein translate karo.","translation","There will be many changes in the coming days.","Many changes = plural future. There will be.","There will be many changes = future plural.",5,undefined,[{word:"there will be many changes",meaning:"bahut badlaav honge"},{word:"in the coming days",meaning:"aane wale dinon mein"}]),

  q("d9-ex-q035","d9-t2-s1","Error detect karo: 'There will is a party tomorrow.'","error_detection","There will be a party tomorrow.","After 'will', always use 'be' — not 'is' or 'are'.","Will ke baad 'be' aata hai. There will be = sahi.",5,{a:"There will is a party tomorrow.",b:"There will a party tomorrow.",c:"There will be a party tomorrow.",d:"There be will a party tomorrow."}),

  q("d9-ex-q036","d9-t2-s1","'There would be' ka use kab hota hai?","mcq","Hypothetical ya conditional situation mein","'Would be' is used in conditionals and hypothetical situations. Example: If I were rich, there would be no problems.","Would be = conditional / hypothetical situations mein.",8,{a:"Simple present mein",b:"Hypothetical ya conditional situation mein",c:"Past continuous mein",d:"Future perfect mein"}),

  q("d9-ex-q037","d9-t2-s1","'Agar sab log sath aayein, toh bahut masti hogi.' ko English mein translate karo.","translation","If everyone comes together, there would be a lot of fun.","Conditional: If + present, there would be + result.","If + present, there would be = conditional.",8,undefined,[{word:"there would be",meaning:"hogi (conditional)"},{word:"a lot of fun",meaning:"bahut masti"}]),

  q("d9-ex-q038","d9-t2-s1","'___ a big problem if we don't plan.' — fill in.","fill_blank","There will be / There would be","Conditional or future warning: There will be (certain) or There would be (hypothetical).","Will be (certain future) ya would be (hypothetical).",5,undefined,[{word:"there will be",meaning:"hogi (future)"},{word:"there would be",meaning:"hoti (hypothetical)"}]),

  q("d9-ex-q039","d9-t2-s1","'Kal bahut garmi hogi.' ko English mein translate karo.","translation","There will be a lot of heat tomorrow. / It will be very hot tomorrow.","There will be a lot of heat = 'there' construction. It will be hot = alternative.","There will be lot of heat = There construction. Both correct.",5,undefined,[{word:"there will be",meaning:"hogi (future)"},{word:"a lot of heat",meaning:"bahut garmi"}]),

  q("d9-ex-q040","d9-t2-s1","'Agar woh agree kare, toh koi problem nahi hogi.' ko English mein translate karo.","translation","If he agrees, there will be no problem.","If he agrees = condition. There will be no = future negative.","If + present, there will be no = conditional future.",8,undefined,[{word:"there will be no problem",meaning:"koi problem nahi hogi"}]),

  // ── d9-t2-s2: Location sentences ────────────────────────────
  q("d9-ex-q041","d9-t2-s2","'Hamare ghar ke paas ek acha park hai.' ko English mein translate karo.","translation","There is a nice park near our house.","Near our house = location. A nice park = singular. There is.","There is + singular noun + location.",5,undefined,[{word:"there is a nice park",meaning:"ek acha park hai"},{word:"near our house",meaning:"hamare ghar ke paas"}]),

  q("d9-ex-q042","d9-t2-s2","'Sheher ke center mein kai museums hain.' ko English mein translate karo.","translation","There are several museums in the city center.","Several museums = plural. There are + plural noun + location.","Several museums = plural. There are = plural ke liye.",5,undefined,[{word:"there are several museums",meaning:"kai museums hain"},{word:"in the city center",meaning:"sheher ke center mein"}]),

  q("d9-ex-q043","d9-t2-s2","'___ a pharmacy on the next street.' — fill in.","fill_blank","There is","A pharmacy = singular. There is + singular.","A pharmacy = singular. There is = singular ke liye.",5,undefined,[{word:"there is a pharmacy",meaning:"ek pharmacy hai"}]),

  q("d9-ex-q044","d9-t2-s2","'Iss station ke paas koi hotel nahi tha.' (past) ko English mein translate karo.","translation","There was no hotel near this station.","Past negative: There was no + singular. No hotel = singular past.","Past negative: There was no hotel.",5,undefined,[{word:"there was no hotel",meaning:"koi hotel nahi tha"},{word:"near this station",meaning:"is station ke paas"}]),

  q("d9-ex-q045","d9-t2-s2","Error detect karo: 'There were a big mountain in that area.'","error_detection","There was a big mountain in that area.","'A big mountain' = singular past. Use 'There was' (not 'There were').","A mountain = singular past. There was = sahi.",5,{a:"There were a big mountain in that area.",b:"There was big mountain in that area.",c:"There was a big mountain in that area.",d:"There is a big mountain in that area."}),

  q("d9-ex-q046","d9-t2-s2","'Meri company ke cafeteria mein bahut acha khaana milta hai.' ko English mein translate karo.","translation","There is very good food in my company's cafeteria.","Good food = uncountable singular. There is.","Good food = uncountable. There is = uncountable ke liye.",5,undefined,[{word:"there is good food",meaning:"acha khaana milta hai"},{word:"in the cafeteria",meaning:"cafeteria mein"}]),

  q("d9-ex-q047","d9-t2-s2","'Uss bazar mein pehle kai shops the.' ko English mein translate karo.","translation","There were many shops in that market before.","Many shops = plural past. Before = past indicator. There were.","Many shops = plural past. There were = plural past ke liye.",5,undefined,[{word:"there were many shops",meaning:"kai shops the"},{word:"before",meaning:"pehle"}]),

  q("d9-ex-q048","d9-t2-s2","'___ a swimming pool on the rooftop.' — fill in.","fill_blank","There is","A swimming pool = singular present. There is.","A swimming pool = singular. There is.",5),

  q("d9-ex-q049","d9-t2-s2","'Mere gaon mein ek achha doctor hai.' ko English mein translate karo.","translation","There is a good doctor in my village.","A good doctor = singular. There is + singular + location.","A good doctor = singular. There is.",5,undefined,[{word:"there is a good doctor",meaning:"ek achha doctor hai"},{word:"in my village",meaning:"mere gaon mein"}]),

  q("d9-ex-q050","d9-t2-s2","'Kya iss ilake mein koi bus stand hai?' ko English mein translate karo.","translation","Is there a bus stand in this area?","Is there = singular question. A bus stand = singular.","Is there a bus stand = singular question.",5,undefined,[{word:"is there a bus stand",meaning:"kya bus stand hai"},{word:"in this area",meaning:"iss ilake mein"}]),

  // ── d9-t2-s3: Quantity expressions ──────────────────────────
  q("d9-ex-q051","d9-t2-s3","'There is some / a lot of / plenty of' kab use hote hain?","mcq","Uncountable nouns ke sath (like water, sugar, time)","'Some, a lot of, plenty of' work with both countable and uncountable. With uncountable: there is some water.","Some/a lot of = both countable aur uncountable ke sath.",8,{a:"Sirf plural ke sath",b:"Uncountable nouns ke sath (like water, sugar, time)",c:"Sirf negative sentences mein",d:"Sirf question mein"}),

  q("d9-ex-q052","d9-t2-s3","'Ghar mein bahut time hai.' ko English mein translate karo.","translation","There is a lot of time at home.","Time = uncountable. A lot of time = quantity expression. There is.","Time = uncountable. There is a lot of time.",5,undefined,[{word:"there is a lot of time",meaning:"bahut time hai"},{word:"at home",meaning:"ghar mein"}]),

  q("d9-ex-q053","d9-t2-s3","'___ some apples in the basket.' — fill in.","fill_blank","There are","Some apples = countable plural. There are.","Some apples = countable plural. There are = plural ke liye.",5),

  q("d9-ex-q054","d9-t2-s3","Error detect karo: 'There are a little sugar in the bowl.'","error_detection","There is a little sugar in the bowl.","Sugar = uncountable. 'A little' = with uncountable. Use 'There is' not 'There are'.","Sugar = uncountable. There is + uncountable. A little = uncountable marker.",5,{a:"There are a little sugar in the bowl.",b:"There is some sugars in the bowl.",c:"There is a little sugar in the bowl.",d:"There are little sugar in the bowl."}),

  q("d9-ex-q055","d9-t2-s3","'Meri plate mein kafi khaana hai.' ko English mein translate karo.","translation","There is enough food on my plate.","Enough food = uncountable quantity. There is + uncountable.","Enough food = uncountable. There is enough food.",5,undefined,[{word:"there is enough food",meaning:"kafi khaana hai"},{word:"on my plate",meaning:"meri plate mein"}]),

  q("d9-ex-q056","d9-t2-s3","'___ a few people waiting outside.' — fill in.","fill_blank","There are","A few people = countable plural. There are.","A few people = countable plural. There are.",5,undefined,[{word:"a few people",meaning:"kuch log"}]),

  q("d9-ex-q057","d9-t2-s3","'Is bank mein bahut paisa nahi tha.' (past) ko English mein translate karo.","translation","There wasn't much money in this bank.","Past negative: There wasn't much money. Money = uncountable past.","Past negative uncountable: There wasn't much money.",8,undefined,[{word:"there wasn't much money",meaning:"bahut paisa nahi tha"},{word:"in this bank",meaning:"is bank mein"}]),

  q("d9-ex-q058","d9-t2-s3","'There ___ plenty of ___ after the wedding.' (food, was/were) — fill in.","fill_blank","was; food","Food = uncountable singular. Plenty of food = uncountable. Past = There was.","Food = uncountable. Past: There was plenty of food.",5,undefined,[{word:"there was plenty of food",meaning:"bahut khaana tha"}]),

  q("d9-ex-q059","d9-t2-s3","'Kitne log the party mein?' ko English mein translate karo.","translation","How many people were there at the party?","How many = kitne. Were there = past plural question form.","How many people were there = question past plural.",5,undefined,[{word:"how many people were there",meaning:"kitne log the"},{word:"at the party",meaning:"party mein"}]),

  q("d9-ex-q060","d9-t2-s3","'___ lots of activities planned for the event.' — fill in.","fill_blank","There were / There are","Lots of activities = plural. There are (present) or There were (past).","Lots of activities = plural. There are/were.",5,undefined,[{word:"lots of activities",meaning:"bahut saari activities"}]),

  // ── d9-t3-s1: Formal & written English ──────────────────────
  q("d9-ex-q061","d9-t3-s1","'Kya pata hai ki vahan kuch problem hai?' ko English mein translate karo.","translation","It appears that there is some problem there.","Formal: It appears that there is = kuch problem hai. Formal reporting language.","Formal: It appears that there is = reporting language.",8,undefined,[{word:"it appears that there is",meaning:"aise lagta hai ki hai"}]),

  q("d9-ex-q062","d9-t3-s1","'Is report mein kai galtiyan hain.' ko English mein translate karo.","translation","There are several mistakes in this report.","Several mistakes = plural. There are + plural noun.","Several mistakes = plural. There are = plural ke liye.",5,undefined,[{word:"there are several mistakes",meaning:"kai galtiyan hain"},{word:"in this report",meaning:"is report mein"}]),

  q("d9-ex-q063","d9-t3-s1","Error detect karo: 'There is several issues that need to be addressed.'","error_detection","There are several issues that need to be addressed.","Several issues = plural. Use 'There are' (not 'There is') for plural.","Several issues = plural. There are = plural ke liye.",5,{a:"There is several issues that need to be addressed.",b:"There are a several issues that need to be addressed.",c:"There are several issues that need to be addressed.",d:"There were several issues that needs to be addressed."}),

  q("d9-ex-q064","d9-t3-s1","'Humein maloom hua ki kaafi kharche hain.' ko English mein translate karo.","translation","We found that there are quite a few expenses.","We found that = humein maloom hua. There are = plural present.","There are quite a few expenses = plural.",8,undefined,[{word:"there are quite a few expenses",meaning:"kaafi kharche hain"}]),

  q("d9-ex-q065","d9-t3-s1","'Mujhe yaqeen hai ki koi solution hoga.' ko English mein translate karo.","translation","I am sure there will be a solution.","I am sure = mujhe yaqeen hai. There will be = future singular.","I am sure there will be = confidence + future There.",5,undefined,[{word:"there will be a solution",meaning:"koi solution hoga"}]),

  q("d9-ex-q066","d9-t3-s1","'Is project mein bahut kaam bacha hai.' ko English mein translate karo.","translation","There is a lot of work remaining in this project.","A lot of work = uncountable singular. There is + uncountable.","A lot of work = uncountable. There is a lot of work.",5,undefined,[{word:"there is a lot of work",meaning:"bahut kaam hai"},{word:"remaining",meaning:"bacha hua"}]),

  q("d9-ex-q067","d9-t3-s1","'___ a need to review the policy immediately.' — fill in.","fill_blank","There is","A need = singular. There is + singular noun.","A need = singular. There is = singular ke liye.",5,undefined,[{word:"there is a need",meaning:"zaroorat hai"}]),

  q("d9-ex-q068","d9-t3-s1","'Iss decision se bahut fayde hain.' ko English mein translate karo.","translation","There are many benefits to this decision.","Many benefits = plural. There are + plural.","Many benefits = plural. There are = plural.",5,undefined,[{word:"there are many benefits",meaning:"bahut fayde hain"},{word:"to this decision",meaning:"is decision se"}]),

  q("d9-ex-q069","d9-t3-s1","'___ been a significant increase in sales this quarter.' — fill in.","fill_blank","There has","Present Perfect with There: There has been = hua hai (singular). Sales increase = singular concept.","There has been = Present Perfect singular with 'there'.",8,undefined,[{word:"there has been",meaning:"rahi hai (present perfect)"}]),

  q("d9-ex-q070","d9-t3-s1","'Pichle saal kai naye rules aaye hain.' ko English mein translate karo.","translation","There have been several new rules this past year.","There have been = Present Perfect plural. Several new rules = plural.","There have been = Present Perfect plural.",8,undefined,[{word:"there have been",meaning:"aaye hain (present perfect plural)"},{word:"several new rules",meaning:"kai naye rules"}]),

  // ── d9-t3-s2: There + present/past perfect ──────────────────
  q("d9-ex-q071","d9-t3-s2","'There has been' ka matlab kya hai?","mcq","Kuch hua hai / kuch raha hai (Present Perfect singular)","There has been = singular Present Perfect. Shows something happened or existed up to now.","There has been = kuch hua hai (Present Perfect singular).",8,{a:"Kuch tha (past)",b:"Kuch hoga (future)",c:"Kuch hua hai / kuch raha hai (Present Perfect singular)",d:"Kuch chal raha hai (Present Continuous)"}),

  q("d9-ex-q072","d9-t3-s2","'Hamare beech kaafi galat-fehmi rahi hai.' ko English mein translate karo.","translation","There has been a lot of misunderstanding between us.","There has been = Present Perfect singular. A lot of misunderstanding = uncountable singular.","There has been = Present Perfect singular. Misunderstanding = uncountable.",8,undefined,[{word:"there has been",meaning:"rahi hai"},{word:"misunderstanding",meaning:"galat-fehmi"}]),

  q("d9-ex-q073","d9-t3-s2","'___ many changes in the education system lately.' — fill in.","fill_blank","There have been","Many changes = plural Present Perfect. There have been.","Many changes = plural. There have been = Present Perfect plural.",8,undefined,[{word:"there have been many changes",meaning:"kai badlaav aaye hain"}]),

  q("d9-ex-q074","d9-t3-s2","Error detect karo: 'There has been many accidents on this road.'","error_detection","There have been many accidents on this road.","Many accidents = plural. Present Perfect plural = There have been (not 'has been').","Many accidents = plural. There have been = sahi.",8,{a:"There has been many accidents on this road.",b:"There have been a many accidents on this road.",c:"There have been many accidents on this road.",d:"There had been many accidents on this road."}),

  q("d9-ex-q075","d9-t3-s2","'Haal hi mein kaafi developments hui hain.' ko English mein translate karo.","translation","There have been quite a few developments recently.","Quite a few developments = plural recent. There have been.","There have been + plural = Present Perfect plural.",8,undefined,[{word:"there have been quite a few developments",meaning:"kaafi developments hui hain"},{word:"recently",meaning:"haal hi mein"}]),

  q("d9-ex-q076","d9-t3-s2","'___ a lot of confusion about the new rules.' (Present Perfect) — fill in.","fill_blank","There has been","A lot of confusion = uncountable singular. There has been.","Confusion = uncountable. Present Perfect singular: There has been.",8),

  q("d9-ex-q077","d9-t3-s2","'Abhi tak koi decision nahi hua hai.' ko English mein translate karo.","translation","There has been no decision so far.","No decision = singular Present Perfect negative. There has been no.","There has been no decision = Present Perfect singular negative.",8,undefined,[{word:"there has been no decision",meaning:"koi decision nahi hua"},{word:"so far",meaning:"abhi tak"}]),

  q("d9-ex-q078","d9-t3-s2","'___ three major earthquakes in the region.' (Present Perfect) — fill in.","fill_blank","There have been","Three earthquakes = plural Present Perfect. There have been.","Three earthquakes = plural. There have been.",8),

  q("d9-ex-q079","d9-t3-s2","'Is jagah par kai baar dhoka mila hai logon ko.' ko English mein translate karo.","translation","There have been many cases of fraud at this place.","Many cases = plural Present Perfect. There have been.","Many cases of fraud = plural. There have been.",8,undefined,[{word:"there have been many cases",meaning:"kai baar hua hai"},{word:"of fraud",meaning:"dhoke ke"}]),

  q("d9-ex-q080","d9-t3-s2","'___ a major breakthrough in cancer research.' (Present Perfect) — fill in.","fill_blank","There has been","A major breakthrough = singular Present Perfect. There has been.","A breakthrough = singular. There has been.",8),

  // ── d9-t3-s3: Advanced There constructions ───────────────────
  q("d9-ex-q081","d9-t3-s3","'There + be' ke sath kaunse tenses use ho sakte hain?","mcq","Present, Past, Future, Perfect — sabhi tenses possible hain","'There' can be used with any tense: is/are (present), was/were (past), will be (future), has/have been (perfect).","There + be = sabhi tenses mein use ho sakta hai.",8,{a:"Sirf present tense mein",b:"Sirf past aur present mein",c:"Present, Past, Future, Perfect — sabhi tenses possible hain",d:"Sirf future tense mein"}),

  q("d9-ex-q082","d9-t3-s3","'Agar sahi planning ho, toh koi problem nahi hogi.' ko English mein translate karo.","translation","If there is proper planning, there will be no problems.","If there is = conditional present. There will be no = future result.","If there is (condition), there will be no (result) = conditional.",8,undefined,[{word:"if there is",meaning:"agar ho"},{word:"there will be no",meaning:"koi nahi hogi"}]),

  q("d9-ex-q083","d9-t3-s3","Error detect karo: 'There have been a great opportunity last year.'","error_detection","There was a great opportunity last year.","'Last year' = past. Simple past: There was. Also 'a great opportunity' = singular, so 'was' not 'were'.","Last year = past. A great opportunity = singular past. There was.",10,{a:"There have been a great opportunity last year.",b:"There were a great opportunity last year.",c:"There was a great opportunity last year.",d:"There has been a great opportunity last year."}),

  q("d9-ex-q084","d9-t3-s3","'Is situation mein koi easy solution nahi hai.' ko English mein translate karo.","translation","There is no easy solution in this situation.","There is no = negative singular. No easy solution = singular.","There is no + singular noun = present negative.",5,undefined,[{word:"there is no easy solution",meaning:"koi aasaan solution nahi hai"}]),

  q("d9-ex-q085","d9-t3-s3","'Pehle ki tulna mein aaj kaafi progress hua hai.' ko English mein translate karo.","translation","There has been a lot of progress compared to before.","There has been = Present Perfect singular. A lot of progress = uncountable.","There has been + uncountable = Present Perfect singular.",8,undefined,[{word:"there has been a lot of progress",meaning:"kaafi progress hua hai"},{word:"compared to before",meaning:"pehle ki tulna mein"}]),

  q("d9-ex-q086","d9-t3-s3","'___ supposed to be a meeting at 3 PM.' — fill in.","fill_blank","There was","Past expectation: There was supposed to be = honi chahiye thi.","There was supposed to be = past expectation/arrangement.",8,undefined,[{word:"there was supposed to be",meaning:"honi chahiye thi"}]),

  q("d9-ex-q087","d9-t3-s3","'Kya kabhi aisa waqt aayega jab koi poverty nahi hogi?' ko English mein translate karo.","translation","Will there ever be a time when there is no poverty?","Will there be = future question. There is no poverty = embedded clause.","Will there ever be = future question. Rhetorical.",10,undefined,[{word:"will there ever be",meaning:"kya kabhi hoga"},{word:"no poverty",meaning:"koi gareebi nahi"}]),

  q("d9-ex-q088","d9-t3-s3","'___ been a dramatic improvement in air quality.' (Present Perfect) — fill in.","fill_blank","There has","A dramatic improvement = singular Present Perfect. There has been.","A dramatic improvement = singular. There has been = Present Perfect singular.",8),

  q("d9-ex-q089","d9-t3-s3","'Bilkul sahi baat hai: wahan bahut traffic tha.' ko English mein translate karo.","translation","Absolutely right: there was a lot of traffic there.","There was = past. A lot of traffic = uncountable past.","There was a lot of traffic = past uncountable.",5,undefined,[{word:"there was a lot of traffic",meaning:"bahut traffic tha"}]),

  q("d9-ex-q090","d9-t3-s3","'Is company mein kafi talented log hain.' ko English mein translate karo.","translation","There are quite a few talented people in this company.","Quite a few talented people = plural. There are.","Quite a few = plural. There are = plural ke liye.",5,undefined,[{word:"there are quite a few",meaning:"kafi hain"},{word:"talented people",meaning:"talented log"}]),

  // Extra questions to reach 150 for Day 9
  q("d9-ex-q091","d9-t1-s1","'Clinic ke bahar kai log hain.' ko English mein translate karo.","translation","There are many people outside the clinic.","Many people = plural present. There are.","Many people = plural. There are.",5,undefined,[{word:"there are many people",meaning:"kai log hain"},{word:"outside the clinic",meaning:"clinic ke bahar"}]),

  q("d9-ex-q092","d9-t1-s2","'Pehle wahan ek naadi thi.' ko English mein translate karo.","translation","There was a river there before.","A river = singular past. There was.","A river = singular past. There was.",5,undefined,[{word:"there was a river",meaning:"ek naadi thi"}]),

  q("d9-ex-q093","d9-t1-s3","'Kya koi AC hai is kamre mein?' ko English mein translate karo.","translation","Is there an AC in this room?","Is there = singular question. An AC = singular.","Is there an AC = singular question.",5,undefined,[{word:"is there an AC",meaning:"kya AC hai"}]),

  q("d9-ex-q094","d9-t2-s1","'Kal ki party mein bahut maza hoga.' ko English mein translate karo.","translation","There will be a lot of fun at tomorrow's party.","There will be = future. A lot of fun = uncountable future.","There will be a lot of fun = future uncountable.",5,undefined,[{word:"there will be a lot of fun",meaning:"bahut maza hoga"}]),

  q("d9-ex-q095","d9-t2-s2","'School ke peeche ek bada ground hai.' ko English mein translate karo.","translation","There is a big ground behind the school.","A big ground = singular present. There is.","A big ground = singular. There is.",5,undefined,[{word:"there is a big ground",meaning:"ek bada ground hai"},{word:"behind the school",meaning:"school ke peeche"}]),

  q("d9-ex-q096","d9-t2-s3","'Tere ghar mein kitne log hain?' ko English mein translate karo.","translation","How many people are there in your house?","How many + plural + are there = question plural.","How many people are there = question plural.",5,undefined,[{word:"how many people are there",meaning:"kitne log hain"}]),

  q("d9-ex-q097","d9-t3-s1","'Is proposal mein koi risk hai.' ko English mein translate karo.","translation","There is some risk in this proposal.","Some risk = uncountable singular. There is.","Some risk = uncountable. There is = singular.",5,undefined,[{word:"there is some risk",meaning:"koi risk hai"},{word:"in this proposal",meaning:"is proposal mein"}]),

  q("d9-ex-q098","d9-t3-s2","'Iss topic par kai views hain.' ko English mein translate karo.","translation","There are many views on this topic.","Many views = plural present. There are.","Many views = plural. There are.",5,undefined,[{word:"there are many views",meaning:"kai views hain"}]),

  q("d9-ex-q099","d9-t3-s3","'___ no denying that hard work pays off.' — fill in.","fill_blank","There is","There is no denying = idiom. Singular uncountable concept.","There is no denying = idiom meaning 'ye sacchi baat hai'.",8,undefined,[{word:"there is no denying",meaning:"is baat se inkaar nahi"}]),

  q("d9-ex-q100","d9-t1-s1","'Aaspaas ke ilake mein koi hospital nahi hai.' ko English mein translate karo.","translation","There is no hospital in the nearby area.","No hospital = singular negative. There is no.","There is no hospital = singular negative.",5,undefined,[{word:"there is no hospital",meaning:"koi hospital nahi hai"},{word:"in the nearby area",meaning:"aaspaas ke ilake mein"}]),

  q("d9-ex-q101","d9-t1-s2","Error detect karo: 'There is two mango trees in our garden.'","error_detection","There are two mango trees in our garden.","Two mango trees = plural. Use 'There are' not 'There is'.","Two trees = plural. There are = plural ke liye.",5,{a:"There is two mango trees in our garden.",b:"There are two mango trees in our garden.",c:"There were two mango trees in our garden.",d:"There is two mango tree in our garden."}),

  q("d9-ex-q102","d9-t1-s3","'Kya kal market mein bheed thi?' ko English mein translate karo.","translation","Was there a crowd in the market yesterday?","Was there = past singular question. A crowd = singular.","Was there a crowd = past singular question.",5,undefined,[{word:"was there a crowd",meaning:"kya bheed thi"},{word:"yesterday",meaning:"kal"}]),

  q("d9-ex-q103","d9-t2-s1","'Agle mahine ek naya rule aayega.' ko English mein translate karo.","translation","There will be a new rule next month.","There will be = future. A new rule = singular future.","There will be a new rule = future singular.",5,undefined,[{word:"there will be a new rule",meaning:"ek naya rule aayega"}]),

  q("d9-ex-q104","d9-t2-s2","'Hamare ghar ke peeche ek chota talab hai.' ko English mein translate karo.","translation","There is a small pond behind our house.","A small pond = singular. There is.","A small pond = singular. There is.",5,undefined,[{word:"there is a small pond",meaning:"ek chota talab hai"},{word:"behind our house",meaning:"ghar ke peeche"}]),

  q("d9-ex-q105","d9-t2-s3","'Bahut saare fruits aur vegetables available hain.' ko English mein translate karo.","translation","There are many fruits and vegetables available.","Many fruits and vegetables = plural. There are.","Plural nouns = There are.",5,undefined,[{word:"there are many fruits and vegetables",meaning:"bahut saare fruits aur vegetables hain"}]),

  q("d9-ex-q106","d9-t3-s1","'Is case mein koi evidence nahi mila.' ko English mein translate karo.","translation","There was no evidence found in this case.","No evidence = uncountable past negative. There was no.","Evidence = uncountable past. There was no evidence.",5,undefined,[{word:"there was no evidence",meaning:"koi evidence nahi mila"}]),

  q("d9-ex-q107","d9-t3-s2","'Is saal bahut sari new companies start hui hain.' ko English mein translate karo.","translation","There have been many new companies started this year.","Many new companies = plural Present Perfect. There have been.","There have been + plural = Present Perfect plural.",8,undefined,[{word:"there have been many new companies",meaning:"bahut saari nayi companies hui hain"}]),

  q("d9-ex-q108","d9-t3-s3","'Yeh sach hai ki iss desh mein bahut talent hai.' ko English mein translate karo.","translation","It is true that there is a lot of talent in this country.","It is true that = yeh sach hai. There is a lot of talent = uncountable singular.","It is true that there is = truth + there construction.",8,undefined,[{word:"there is a lot of talent",meaning:"bahut talent hai"}]),

  q("d9-ex-q109","d9-t1-s1","'Mere laptop mein koi virus hai.' ko English mein translate karo.","translation","There is a virus in my laptop.","A virus = singular. There is.","A virus = singular. There is = singular ke liye.",5,undefined,[{word:"there is a virus",meaning:"ek virus hai"},{word:"in my laptop",meaning:"mere laptop mein"}]),

  q("d9-ex-q110","d9-t1-s2","'Uss colony mein kai bade ghar the.' ko English mein translate karo.","translation","There were many big houses in that colony.","Many big houses = plural past. There were.","Many big houses = plural past. There were.",5,undefined,[{word:"there were many big houses",meaning:"kai bade ghar the"},{word:"in that colony",meaning:"uss colony mein"}]),

  q("d9-ex-q111","d9-t1-s3","'Kya college ke paas koi library hai?' ko English mein translate karo.","translation","Is there a library near the college?","Is there = singular question. A library = singular.","Is there a library = singular question.",5,undefined,[{word:"is there a library",meaning:"kya library hai"},{word:"near the college",meaning:"college ke paas"}]),

  q("d9-ex-q112","d9-t2-s1","Error detect karo: 'There would been a problem if you hadn't helped.'","error_detection","There would have been a problem if you hadn't helped.","Would have been = conditional perfect. Not 'would been'.","Would have been = sahi. Would been = galat.",8,{a:"There would been a problem if you hadn't helped.",b:"There would had been a problem if you hadn't helped.",c:"There would have been a problem if you hadn't helped.",d:"There would be been a problem if you hadn't helped."}),

  q("d9-ex-q113","d9-t2-s2","'Iss road ke upar ek purana bridge tha.' ko English mein translate karo.","translation","There was an old bridge over this road.","An old bridge = singular past. There was.","An old bridge = singular past. There was.",5,undefined,[{word:"there was an old bridge",meaning:"ek purana bridge tha"},{word:"over this road",meaning:"is road ke upar"}]),

  q("d9-ex-q114","d9-t2-s3","'Do taraf se logon ki jagah hai, ek jagah nahi.' ko English mein translate karo.","translation","There are places for people from both sides, there isn't just one place.","There are places = plural. There isn't = singular negative.","There are (plural) + there isn't (singular negative).",8),

  q("d9-ex-q115","d9-t3-s1","'Iss meeting mein koi agenda nahi tha.' ko English mein translate karo.","translation","There was no agenda in this meeting.","No agenda = singular past negative. There was no.","There was no agenda = past singular negative.",5,undefined,[{word:"there was no agenda",meaning:"koi agenda nahi tha"}]),

  q("d9-ex-q116","d9-t3-s2","'Aaj tak kai log aaye hain is campaign mein.' ko English mein translate karo.","translation","There have been many people who have come to this campaign so far.","There have been many people = plural Present Perfect.","There have been many people = Present Perfect plural.",8,undefined,[{word:"there have been many people",meaning:"kai log aaye hain"}]),

  q("d9-ex-q117","d9-t3-s3","'Is Diwali, zyada roshni nahi thi.' ko English mein translate karo.","translation","There wasn't much light this Diwali.","There wasn't much light = past negative uncountable.","There wasn't much light = past negative uncountable.",5,undefined,[{word:"there wasn't much light",meaning:"zyada roshni nahi thi"}]),

  q("d9-ex-q118","d9-t1-s1","'___ a mistake in your application form.' — fill in.","fill_blank","There is","A mistake = singular present. There is.","A mistake = singular. There is.",5),

  q("d9-ex-q119","d9-t1-s2","'Kal dukan mein koi customer nahi tha.' ko English mein translate karo.","translation","There was no customer in the shop yesterday.","No customer = singular past negative. There was no.","No customer = singular past. There was no.",5,undefined,[{word:"there was no customer",meaning:"koi customer nahi tha"}]),

  q("d9-ex-q120","d9-t1-s3","'___ anything to eat at home?' (negative question, past) — fill in.","fill_blank","Was there","Past question: Was there anything = kya kuch tha?","Was there = past question.",5,undefined,[{word:"was there anything",meaning:"kya kuch tha"}]),

  q("d9-ex-q121","d9-t2-s1","'Agle hafte ek bada sale hoga.' ko English mein translate karo.","translation","There will be a big sale next week.","There will be = future. A big sale = singular future.","There will be a big sale = future singular.",5,undefined,[{word:"there will be a big sale",meaning:"ek bada sale hoga"}]),

  q("d9-ex-q122","d9-t2-s2","'Paani ki tanki ke paas kuch chhipkali thi.' (past) ko English mein translate karo.","translation","There was a lizard near the water tank.","A lizard = singular past. There was.","A lizard = singular past. There was.",5,undefined,[{word:"there was a lizard",meaning:"ek chhipkali thi"}]),

  q("d9-ex-q123","d9-t2-s3","'___ hardly any free time during exams.' — fill in.","fill_blank","There is / There was","Hardly any free time = almost no time (uncountable). There is (present) or There was (past).","Hardly any = almost zero. Uncountable = There is/was.",5),

  q("d9-ex-q124","d9-t3-s1","'Iss report mein kai sifaarshein hain.' ko English mein translate karo.","translation","There are several recommendations in this report.","Several recommendations = plural present. There are.","Several recommendations = plural. There are.",5,undefined,[{word:"there are several recommendations",meaning:"kai sifaarshein hain"}]),

  q("d9-ex-q125","d9-t3-s2","Error detect karo: 'There has been many improvements in the last decade.'","error_detection","There have been many improvements in the last decade.","Many improvements = plural Present Perfect. There have been (not 'has been').","Many improvements = plural. There have been = sahi.",8,{a:"There has been many improvements in the last decade.",b:"There were many improvements in the last decade.",c:"There have been many improvements in the last decade.",d:"There has been a many improvements in the last decade."}),

  q("d9-ex-q126","d9-t3-s3","'Yeh jaankar accha laga ki koi naya solution aaya.' ko English mein translate karo.","translation","It was good to know that there was a new solution.","It was good to know that = jaankar accha laga. There was = past singular.","It was good to know that there was = embedded clause.",8,undefined,[{word:"it was good to know",meaning:"jaankar accha laga"},{word:"there was a new solution",meaning:"koi naya solution aaya"}]),

  q("d9-ex-q127","d9-t1-s1","'Is kitaab mein 300 pages hain.' ko English mein translate karo.","translation","There are 300 pages in this book.","300 pages = plural present. There are.","300 pages = plural. There are.",5,undefined,[{word:"there are 300 pages",meaning:"300 pages hain"},{word:"in this book",meaning:"is kitaab mein"}]),

  q("d9-ex-q128","d9-t1-s2","'Uss waqt koi phone nahi tha.' ko English mein translate karo.","translation","There was no phone at that time.","No phone = singular past negative. There was no.","There was no phone = past negative singular.",5,undefined,[{word:"there was no phone",meaning:"koi phone nahi tha"},{word:"at that time",meaning:"uss waqt"}]),

  q("d9-ex-q129","d9-t2-s1","'Puri duniya mein peace hogi ek din.' ko English mein translate karo.","translation","There will be peace throughout the world one day.","There will be = future. Peace = uncountable future singular.","There will be peace = future uncountable.",8,undefined,[{word:"there will be peace",meaning:"peace hogi"},{word:"throughout the world",meaning:"puri duniya mein"}]),

  q("d9-ex-q130","d9-t2-s2","'Meri company ke office mein kai floors hain.' ko English mein translate karo.","translation","There are many floors in my company's office.","Many floors = plural present. There are.","Many floors = plural. There are.",5,undefined,[{word:"there are many floors",meaning:"kai floors hain"}]),

  q("d9-ex-q131","d9-t2-s3","'Kisi bhi time par kuch na kuch options hote hain.' ko English mein translate karo.","translation","There are always some options available at any time.","Some options = plural present. Always = hamesha.","There are always some options = plural.",5,undefined,[{word:"there are always some options",meaning:"kuch na kuch options hote hain"}]),

  q("d9-ex-q132","d9-t3-s1","'Is project mein improvement ki kaafi gunjaish hai.' ko English mein translate karo.","translation","There is a lot of room for improvement in this project.","Room for improvement = uncountable singular. There is a lot of room.","There is a lot of room = uncountable. Idiomatic.",8,undefined,[{word:"there is a lot of room for improvement",meaning:"improvement ki gunjaish hai"}]),

  q("d9-ex-q133","d9-t3-s2","'___ been a lot of controversy about this topic lately.' (Present Perfect) — fill in.","fill_blank","There has","A lot of controversy = uncountable Present Perfect. There has been.","Controversy = uncountable. There has been.",8),

  q("d9-ex-q134","d9-t3-s3","'Naye rules aane se kaafi differences padenge.' ko English mein translate karo.","translation","There will be quite a few differences with the new rules.","Quite a few differences = plural future. There will be.","There will be quite a few differences = future plural.",8,undefined,[{word:"there will be quite a few differences",meaning:"kaafi differences padenge"}]),

  q("d9-ex-q135","d9-t1-s1","'Hamare shahar mein ek famous mandir hai.' ko English mein translate karo.","translation","There is a famous temple in our city.","A famous temple = singular present. There is.","A famous temple = singular. There is.",5,undefined,[{word:"there is a famous temple",meaning:"ek famous mandir hai"},{word:"in our city",meaning:"hamare shahar mein"}]),

  q("d9-ex-q136","d9-t1-s2","'Uss waqt school mein kai teachers the.' ko English mein translate karo.","translation","There were many teachers in the school at that time.","Many teachers = plural past. There were.","Many teachers = plural past. There were.",5,undefined,[{word:"there were many teachers",meaning:"kai teachers the"}]),

  q("d9-ex-q137","d9-t1-s3","'___ many students absent today?' (question) — fill in.","fill_blank","Are there","Many students = plural question. Are there many students?","Are there = plural question form.",5,undefined,[{word:"are there many students",meaning:"kya kai students hain"}]),

  q("d9-ex-q138","d9-t2-s1","'Is saal diwali mein bahut patakhe honge.' ko English mein translate karo.","translation","There will be a lot of fireworks this Diwali.","A lot of fireworks = plural future. There will be.","There will be a lot of fireworks = future plural.",5,undefined,[{word:"there will be a lot of fireworks",meaning:"bahut patakhe honge"}]),

  q("d9-ex-q139","d9-t2-s2","'Is university mein kai departments hain.' ko English mein translate karo.","translation","There are many departments in this university.","Many departments = plural present. There are.","Many departments = plural. There are.",5,undefined,[{word:"there are many departments",meaning:"kai departments hain"},{word:"in this university",meaning:"is university mein"}]),

  q("d9-ex-q140","d9-t2-s3","Error detect karo: 'Are there a good restaurant near here?'","error_detection","Is there a good restaurant near here?","'A good restaurant' = singular. Singular question = 'Is there' (not 'Are there').","A restaurant = singular. Is there = singular question.",5,{a:"Are there a good restaurant near here?",b:"Is there a good restaurants near here?",c:"Is there a good restaurant near here?",d:"Are there any good restaurant near here?"}),

  q("d9-ex-q141","d9-t3-s1","'Is problem ka koi solution nahi dikh raha.' ko English mein translate karo.","translation","There seems to be no solution to this problem.","There seems to be = aise lagta hai ki hai (formal). No solution = negative.","There seems to be no = formal negative There construction.",8,undefined,[{word:"there seems to be no solution",meaning:"koi solution nahi dikh raha"}]),

  q("d9-ex-q142","d9-t3-s2","'Pichhle kai saalon mein iss ilake mein bahut vikas hua hai.' ko English mein translate karo.","translation","There has been a lot of development in this area over the last few years.","There has been = Present Perfect singular. A lot of development = uncountable.","There has been a lot of development = Present Perfect uncountable.",8,undefined,[{word:"there has been a lot of development",meaning:"bahut vikas hua hai"}]),

  q("d9-ex-q143","d9-t3-s3","'Ek waqt aayega jab sab theek hoga.' ko English mein translate karo.","translation","There will come a time when everything will be fine.","There will come a time = inverted/formal There construction.","There will come a time = formal/literary There construction.",10,undefined,[{word:"there will come a time",meaning:"ek waqt aayega"}]),

  q("d9-ex-q144","d9-t1-s1","'Baad mein dekhte hain agar koi time available hai.' ko English mein translate karo.","translation","Let's see if there is any time available later.","Is there any time = embedded question. If there is = indirect question.","Let's see if there is = indirect question.",5,undefined,[{word:"if there is any time",meaning:"agar koi time hai"}]),

  q("d9-ex-q145","d9-t1-s2","'Pichle saal iss gali mein bahut accidents the.' ko English mein translate karo.","translation","There were many accidents in this street last year.","Many accidents = plural past. There were.","Many accidents = plural past. There were.",5,undefined,[{word:"there were many accidents",meaning:"bahut accidents the"}]),

  q("d9-ex-q146","d9-t1-s3","'Kya train station mein waiting room hai?' ko English mein translate karo.","translation","Is there a waiting room at the train station?","Is there = singular question. A waiting room = singular.","Is there a waiting room = singular question.",5,undefined,[{word:"is there a waiting room",meaning:"kya waiting room hai"}]),

  q("d9-ex-q147","d9-t2-s1","'___ a chance that the event gets cancelled.' — fill in.","fill_blank","There is","A chance = singular present. There is a chance.","A chance = singular. There is.",5,undefined,[{word:"there is a chance",meaning:"ek mauka hai"}]),

  q("d9-ex-q148","d9-t2-s2","'Hamare mohalle mein ek naya gym khula hai.' ko English mein translate karo.","translation","There is a new gym in our neighborhood.","A new gym = singular present. There is.","A new gym = singular. There is.",5,undefined,[{word:"there is a new gym",meaning:"ek naya gym hai"},{word:"in our neighborhood",meaning:"hamare mohalle mein"}]),

  q("d9-ex-q149","d9-t3-s1","'Iss problem mein doubt ki koi gunjaish nahi.' ko English mein translate karo.","translation","There is no room for doubt in this matter.","No room for doubt = negative singular (idiomatic). There is no room.","There is no room for doubt = idiomatic negative.",8,undefined,[{word:"there is no room for doubt",meaning:"doubt ki gunjaish nahi"}]),

  q("d9-ex-q150","d9-t3-s2","'Pichle 10 saalon mein is field mein bahut revolution aaya hai.' ko English mein translate karo.","translation","There has been a great revolution in this field over the last 10 years.","There has been = Present Perfect singular. A great revolution = singular.","There has been a revolution = Present Perfect singular.",8,undefined,[{word:"there has been a great revolution",meaning:"bahut revolution aaya hai"}]),

];
