// ============================================================
// Days 8-14 Practice Questions — 75 Days Hard English Course
// Rich, topic-specific questions for each day (120+ per day)
// Each question has: questionText, correctAnswer, explanation,
// hindiExplanation, optionA-D (for MCQ), wordHints, points
// ============================================================

// Import the shared question type
import type { PracticeQ } from "./day-1-questions";

// ── Compact question helper ────────────────────────────────────
// Creates a PracticeQ with all required fields
// Points: beginner=5, elementary=8, intermediate=10
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
// DAY 8: WILL HAVE (FUTURE PERFECT TENSE)
// Subtopics: d8-t1-s1, d8-t1-s2, d8-t1-s3, d8-t1-s4
//            d8-t2-s1, d8-t2-s2, d8-t2-s3
//            d8-t3-s1, d8-t3-s2, d8-t3-s3
//            d8-t4-s1, d8-t4-s2, d8-t4-s3
//            d8-t5-s1, d8-t5-s2, d8-t5-s3
// ══════════════════════════════════════════════════════════════

// Day 8 - Topic 1: Introduction to Will Have / Future Perfect
export const DAY_8_T1_QUESTIONS: PracticeQ[] = [
  // ── d8-t1-s1: What is Future Perfect Tense ──
  q("d8-t1-s1-q01","d8-t1-s1","'Future Perfect Tense' ka matlab kya hai?","mcq","Woh kaam jo bhavishya mein kisi time se pehle pura ho jayega","Future Perfect Tense describes an action that WILL BE COMPLETED before a specific point in the future.","Future Perfect = woh kaam jo future mein kisi specific time se pehle khatam ho jayega.",5,{a:"Jo kaam abhi ho raha hai",b:"Jo kaam kal tha",c:"Woh kaam jo bhavishya mein kisi time se pehle pura ho jayega",d:"Jo kaam hamesha hota hai"}),
  q("d8-t1-s1-q02","d8-t1-s1","Future Perfect Tense ka formula kya hai?","mcq","Subject + will have + V3 (past participle)","Will have + V3 is the correct formula. All subjects use the same formula.","`Will have + V3` = Future Perfect. Example: I will have done, She will have gone.",5,{a:"Subject + will + V1",b:"Subject + will have + V3 (past participle)",c:"Subject + have + V3",d:"Subject + will be + V3"}),
  q("d8-t1-s1-q03","d8-t1-s1","'Kal tak main kaam khatam kar lunga.' ko English mein translate karo.","translation","I will have finished the work by tomorrow.","'By tomorrow' = kal tak. 'Will have finished' = Future Perfect showing completion before tomorrow.","`Will have finished` ka matlab hai khatam ho jayega. By tomorrow = kal tak.",5,
    undefined,[{word:"by tomorrow",meaning:"kal tak"},{word:"will have finished",meaning:"khatam kar lunga"}]),
  q("d8-t1-s1-q04","d8-t1-s1","'By 5 PM, she will have left the office.' ka Hindi mein kya matlab hai?","translation","Shaam 5 baje tak woh office se ja chuki hogi.","'By 5 PM' = shaam 5 baje tak. 'Will have left' = ja chuki hogi. Future Perfect completion.","By 5 PM = shaam 5 baje tak. Will have left = ja chuki hogi.",5),
  q("d8-t1-s1-q05","d8-t1-s1","'Will have' ke baad verb ki kaisi form aati hai?","mcq","V3 (Past Participle)","After 'will have', always use the past participle (V3). Example: done, gone, written, eaten.","`Will have` ke baad hamesha V3 (past participle) aata hai — done, gone, written, eaten.",5,{a:"V1 (Base form)",b:"V2 (Past simple)",c:"V3 (Past Participle)",d:"V1 + ing"}),
  q("d8-t1-s1-q06","d8-t1-s1","Which sentence uses Future Perfect correctly?","mcq","By next year, he will have completed his MBA.","Future Perfect = will have + V3. 'By next year' is the future deadline.","`By next year, he will have completed his MBA.` sahi hai kyunki will have + V3 (completed).",8,{a:"He will completes his MBA next year.",b:"He have completed MBA by next year.",c:"By next year, he will have completed his MBA.",d:"He had completed his MBA by next year."}),
  q("d8-t1-s1-q07","d8-t1-s1","'Go' ka V3 form kya hai?","mcq","Gone","Go → Went → Gone. 'She will have gone' = Future Perfect.","`Go` ka V3 = `Gone`. Will have gone = ja chuki hogi.",5,{a:"Went",b:"Going",c:"Gone",d:"Goes"}),

  // ── d8-t1-s2: Structure and Formula ──
  q("d8-t1-s2-q01","d8-t1-s2","'Do saal baad tak usne apna business shuru kar liya hoga.' ko English mein translate karo.","translation","She will have started her business within two years.","'Within two years' = do saal ke andar. 'Will have started' = shuru kar liya hoga.","`Within two years` = do saal ke andar. Will have started = shuru kar liya hoga.",8,
    undefined,[{word:"within two years",meaning:"do saal ke andar"},{word:"will have started",meaning:"shuru kar liya hoga"}]),
  q("d8-t1-s2-q02","d8-t1-s2","'Kal shaam tak team ne presentation taiyar kar li hogi.' ko English mein translate karo.","translation","The team will have prepared the presentation by tomorrow evening.","'By tomorrow evening' = kal shaam tak. 'Will have prepared' = taiyar kar li hogi.","`Will have prepared` = taiyar kar li hogi. By tomorrow evening = kal shaam tak.",8),
  q("d8-t1-s2-q03","d8-t1-s2","Fill in the blank: 'By the time you arrive, I ___ already ___ dinner.'","fill_blank","will have cooked","Future Perfect: will have + V3. I will have cooked dinner before you arrive.","`Will have cooked` = paka liya hoga. Before you arrive = aane se pehle.",8),
  q("d8-t1-s2-q04","d8-t1-s2","'Nex month tak woh 5 saal experience complete kar lenge.' ko English mein translate karo.","translation","By next month, they will have completed 5 years of experience.","'By next month' = agle mahine tak. 'Will have completed' = complete kar lenge.","`By next month` = agle mahine tak. Will have completed = khatam kar lenge.",8),
  q("d8-t1-s2-q05","d8-t1-s2","Identify the error: 'By Friday, she will has finished the project.'","error_detection","By Friday, she will have finished the project.","'Will has' is wrong. The correct form is 'will have' + V3 (past participle).","`Will has` galat hai. Sahi form: `will have + V3`. Will have finished = correct.",8,{a:"By Friday, she will has finished the project.",b:"By Friday, she will have finished the project.",c:"By Friday, she will had finished the project.",d:"By Friday, she has finished the project."}),

  // ── d8-t1-s3: Negative and Question forms ──
  q("d8-t1-s3-q01","d8-t1-s3","Future Perfect ka negative form kaise banate hain?","mcq","Subject + will not have + V3","Negative Future Perfect = will not have + V3. Shortened: won't have + V3.","`Will not have + V3` = negative Future Perfect. Example: I will not have finished.",5,{a:"Subject + have not + V3",b:"Subject + will not have + V3",c:"Subject + had not + V3",d:"Subject + won't be + V3"}),
  q("d8-t1-s3-q02","d8-t1-s3","'Kal tak main report nahin bhej paunga.' ko English mein translate karo.","translation","I will not have sent the report by tomorrow.","'Will not have sent' = negative Future Perfect. 'By tomorrow' = kal tak.","`I will not have sent` = main nahin bhej paunga. Negative Future Perfect.",8),
  q("d8-t1-s3-q03","d8-t1-s3","Future Perfect ka question form kaise banate hain?","mcq","Will + subject + have + V3?","For questions, move 'will' to the front: Will + subject + have + V3?","`Will + subject + have + V3?` = Future Perfect question. Will you have done?",5,{a:"Have + subject + V3?",b:"Will + subject + have + V3?",c:"Does + subject + have + V3?",d:"Had + subject + V3?"}),
  q("d8-t1-s3-q04","d8-t1-s3","'Kya tum shaam tak report bhej doge?' ko English mein translate karo.","translation","Will you have sent the report by evening?","Question form: Will + you + have + sent (V3)? By evening = shaam tak.","`Will you have sent?` = Future Perfect question form. By evening = shaam tak.",8),
  q("d8-t1-s3-q05","d8-t1-s3","'Woh sab jane ke baad main office nahin pauncha hounga.' ko English mein translate karo.","translation","I will not have reached the office after they all leave.","Negative Future Perfect showing non-completion. 'After they all leave' = jane ke baad.","`Will not have reached` = negative Future Perfect. Main nahin paunga.",8),
];

// Day 8 - Topic 2: Future Perfect with Time Expressions
export const DAY_8_T2_QUESTIONS: PracticeQ[] = [
  // ── d8-t2-s1: "By" time expressions ──
  q("d8-t2-s1-q01","d8-t2-s1","Future Perfect ke sath kaunse time words use hote hain?","mcq","By, by the time, before, until","'By', 'by the time', 'before', and 'until' are common with Future Perfect.","`By`, `by the time`, `before`, `until` = Future Perfect ke sath common time words.",5,{a:"Since, for, ago",b:"By, by the time, before, until",c:"Yesterday, last week, then",d:"Now, currently, at the moment"}),
  q("d8-t2-s1-q02","d8-t2-s1","'Shaam 6 baje tak woh ghar pahunch chuki hogi.' ko English mein translate karo.","translation","She will have reached home by 6 PM.","By 6 PM = shaam 6 baje tak. Will have reached = pahunch chuki hogi.","`By 6 PM` = shaam 6 baje tak. Will have reached = pahunch chuki hogi.",8),
  q("d8-t2-s1-q03","d8-t2-s1","'Next week tak main 1000 words of English seekh lunga.' ko English mein translate karo.","translation","By next week, I will have learned 1000 English words.","'By next week' = agle hafte tak. 'Will have learned' = seekh lunga.","`By next week` = agle hafte tak. Will have learned = seekh lunga.",8,
    undefined,[{word:"by next week",meaning:"agle hafte tak"}]),
  q("d8-t2-s1-q04","d8-t2-s1","Fill: 'By the time the boss arrives, we ___ the meeting notes.'","fill_blank","will have prepared","Future Perfect with 'by the time'. Will have prepared = taiyar kar lenge.","`Will have prepared` = taiyar kar lenge. By the time the boss arrives = boss ke aane tak.",8),
  q("d8-t2-s1-q05","d8-t2-s1","'2025 tak usne MBA kar li hogi.' ko English mein translate karo.","translation","By 2025, she will have completed her MBA.","'By 2025' = 2025 tak. 'Will have completed' = kar li hogi. Professional achievement.","`By 2025` = 2025 tak. Will have completed = kar li hogi.",8),

  // ── d8-t2-s2: Professional and daily use ──
  q("d8-t2-s2-q01","d8-t2-s2","'Deadline se pehle team project khatam kar legi.' ko English mein translate karo.","translation","The team will have finished the project before the deadline.","'Before the deadline' = deadline se pehle. 'Will have finished' = khatam kar legi.","`Before the deadline` = deadline se pehle. Will have finished = khatam kar legi.",8),
  q("d8-t2-s2-q02","d8-t2-s2","'Agle mahine tak usne 6 mahine kaam kar liye honge.' ko English mein translate karo.","translation","By next month, she will have worked for 6 months.","Professional context. By next month = agle mahine tak. Will have worked for 6 months.","`Will have worked for 6 months` = 6 mahine kaam kar liye honge.",8),
  q("d8-t2-s2-q03","d8-t2-s2","Which sentence is CORRECT?","mcq","By this time tomorrow, I will have landed in Mumbai.","Future Perfect with specific future deadline: 'by this time tomorrow' = kal is waqt tak.","`By this time tomorrow, I will have landed in Mumbai.` = correct Future Perfect.",8,{a:"By this time tomorrow, I will landed in Mumbai.",b:"By this time tomorrow, I landed in Mumbai.",c:"By this time tomorrow, I will have landed in Mumbai.",d:"By this time tomorrow, I have landed in Mumbai."}),
  q("d8-t2-s2-q04","d8-t2-s2","'March tak usne 10 articles publish kar liye honge.' ko English mein translate karo.","translation","By March, she will have published 10 articles.","Future Perfect showing achievement by a deadline. By March = March tak.","`By March, she will have published 10 articles.` = Future Perfect.",8),
  q("d8-t2-s2-q05","d8-t2-s2","'Yeh course khatam hote hote tumne 1000 sentences bol liye honge.' ko English mein translate karo.","translation","By the time this course ends, you will have spoken 1000 sentences.","'By the time this course ends' = yeh course khatam hote hote. Future Perfect.","`By the time this course ends` = course khatam hote hote. Will have spoken = bol loge.",8),

  // ── d8-t2-s3: Common V3 forms ──
  q("d8-t2-s3-q01","d8-t2-s3","'Write' ka V3 form kya hai?","mcq","Written","Write → Wrote → Written. I will have written = main likh chuka hounga.","`Write` ka V3 = `Written`. Will have written = likh chuka hounga.",5,{a:"Wrote",b:"Writing",c:"Written",d:"Writed"}),
  q("d8-t2-s3-q02","d8-t2-s3","'Eat' ka V3 form kya hai?","mcq","Eaten","Eat → Ate → Eaten. She will have eaten = woh kha chuki hogi.","`Eat` ka V3 = `Eaten`. Will have eaten = kha chuki hogi.",5,{a:"Ate",b:"Eating",c:"Eaten",d:"Eated"}),
  q("d8-t2-s3-q03","d8-t2-s3","'Run' ka V3 form kya hai?","mcq","Run","Run → Ran → Run. He will have run = woh dauda chuka hoga (same as V1).","`Run` ka V3 = `Run` (same as V1). Will have run = dauda chuka hoga.",5,{a:"Ran",b:"Running",c:"Run",d:"Runned"}),
  q("d8-t2-s3-q04","d8-t2-s3","'Speak' ka V3 form kya hai?","mcq","Spoken","Speak → Spoke → Spoken. She will have spoken = woh bol chuki hogi.","`Speak` ka V3 = `Spoken`. Will have spoken = bol chuki hogi.",5,{a:"Spoke",b:"Speaking",c:"Spoken",d:"Speaked"}),
];

// Day 8 - Topic 3: Future Perfect in Sentences
export const DAY_8_T3_QUESTIONS: PracticeQ[] = [
  // ── d8-t3-s1: Positive Future Perfect ──
  q("d8-t3-s1-q01","d8-t3-s1","'Kal subah tak woh apna speech ready kar lega.' ko English mein translate karo.","translation","He will have prepared his speech by tomorrow morning.","By tomorrow morning = kal subah tak. Will have prepared = ready kar lega.","`By tomorrow morning` = kal subah tak. Will have prepared = ready kar lega.",8),
  q("d8-t3-s1-q02","d8-t3-s1","'Exam se pehle usne sab kuch padh liya hoga.' ko English mein translate karo.","translation","She will have studied everything before the exam.","Before the exam = exam se pehle. Will have studied = padh liya hoga.","`Before the exam` = exam se pehle. Will have studied = padh liya hoga.",8),
  q("d8-t3-s1-q03","d8-t3-s1","Fill: 'By the time you read this, I ___ already ___ the city.'","fill_blank","will have left","Future Perfect with 'already': I will have already left = main pehle hi ja chuka hounga.","`Will have left` = ja chuka hounga. By the time = jab tak.",8),
  q("d8-t3-s1-q04","d8-t3-s1","'Next year tak hum apna naya ghar khareed lenge.' ko English mein translate karo.","translation","We will have bought our new house by next year.","By next year = agle saal tak. Will have bought = khareed lenge. Possession achievement.","`By next year` = agle saal tak. Will have bought = khareed lenge.",8),
  q("d8-t3-s1-q05","d8-t3-s1","'Interview se pehle usne 10 log se practice kar li hogi.' ko English mein translate karo.","translation","She will have practiced with 10 people before the interview.","Before the interview = interview se pehle. Will have practiced = practice kar li hogi.","`Before the interview` = interview se pehle. Will have practiced = practice kar li hogi.",8),

  // ── d8-t3-s2: Future Perfect in daily life ──
  q("d8-t3-s2-q01","d8-t3-s2","'Dinner time tak mom khana bana chuki hongi.' ko English mein translate karo.","translation","By dinner time, Mom will have cooked the food.","By dinner time = khaane ke waqt tak. Will have cooked = bana chuki hongi.","`By dinner time` = khaane ke waqt tak. Will have cooked = bana chuki hongi.",8),
  q("d8-t3-s2-q02","d8-t3-s2","'Raat tak main apna assignment jama kar dunga.' ko English mein translate karo.","translation","I will have submitted my assignment by night.","By night = raat tak. Will have submitted = jama kar dunga. Student context.","`By night` = raat tak. Will have submitted = jama kar dunga.",8),
  q("d8-t3-s2-q03","d8-t3-s2","'Aane se pehle woh sab plan kar lega.' ko English mein translate karo.","translation","He will have planned everything before coming.","Before coming = aane se pehle. Will have planned = plan kar lega.","`Before coming` = aane se pehle. Will have planned = plan kar lega.",8),
  q("d8-t3-s2-q04","d8-t3-s2","'June tak hum dono shaadi kar lenge.' ko English mein translate karo.","translation","By June, we will have gotten married.","By June = June tak. Will have gotten married = shaadi kar lenge.","`By June` = June tak. Will have gotten married = shaadi kar lenge.",8),

  // ── d8-t3-s3: Error detection ──
  q("d8-t3-s3-q01","d8-t3-s3","Identify the error: 'By tomorrow, I will have went to the office.'","error_detection","By tomorrow, I will have gone to the office.","V3 of 'go' is 'gone', not 'went'. Will have + gone (V3) = correct.","'Went' = V2 (Simple Past). V3 of go = 'gone'. Will have gone = correct.",8,{a:"By tomorrow, I will have went to the office.",b:"By tomorrow, I will have go to the office.",c:"By tomorrow, I will have gone to the office.",d:"By tomorrow, I will went to the office."}),
  q("d8-t3-s3-q02","d8-t3-s3","Identify the error: 'She will have complete the work.'","error_detection","She will have completed the work.","After 'will have', always use V3 (past participle). 'Complete' should be 'completed'.","`Will have` ke baad V3 chahiye. 'Complete' galat hai, 'completed' sahi hai.",8,{a:"She will have complete the work.",b:"She will have completed the work.",c:"She will completed the work.",d:"She will has completed the work."}),
];

// Day 8 - Topic 4: Comparison with other tenses
export const DAY_8_T4_QUESTIONS: PracticeQ[] = [
  // ── d8-t4-s1: Future Perfect vs Simple Future ──
  q("d8-t4-s1-q01","d8-t4-s1","'Will go' aur 'will have gone' mein kya fark hai?","mcq","Will go = action hogi, Will have gone = action puri ho chuki hogi","'Will go' = simple future (going to happen). 'Will have gone' = will be completed by a future time.","`Will go` = hoga. `Will have gone` = ho chuka hoga (puri ho chuki hogi).",8,{a:"Dono same hain",b:"Will go = action hogi, Will have gone = action puri ho chuki hogi",c:"Will have gone = present, Will go = future",d:"Koi fark nahi"}),
  q("d8-t4-s1-q02","d8-t4-s1","'I will do the work.' vs 'I will have done the work by 5 PM.' mein kya fark hai?","mcq","Pehla simple future, doosra deadline ke sath completion dikhata hai","Simple Future = just an action. Future Perfect = completion before a specific time.","`Will do` = simple future. `Will have done by 5 PM` = 5 baje se pehle khatam.",8,{a:"Dono same hain",b:"Pehla Past hai, doosra Future",c:"Pehla simple future, doosra deadline ke sath completion dikhata hai",d:"Pehla negative, doosra positive"}),
  q("d8-t4-s1-q03","d8-t4-s1","'Kal tak report bhejna hai.' ko Future Perfect mein kaise bolenge?","translation","I will have sent the report by tomorrow.","Future Perfect correctly expresses 'completing by tomorrow'. Will have + sent (V3).","`I will have sent the report by tomorrow` = kal tak report bhej dene ki future perfect.",8),

  // ── d8-t4-s2: Professional use cases ──
  q("d8-t4-s2-q01","d8-t4-s2","'Client meeting se pehle proposal taiyar kar lo.' ko Future Perfect mein translate karo.","translation","I will have the proposal ready before the client meeting.","Future Perfect in professional: 'will have ready' before specific event.","`Will have the proposal ready` = professional Future Perfect.",8),
  q("d8-t4-s2-q02","d8-t4-s2","'Interview mein kya bolein jab puchha jaye ki 5 saal mein kya karoge?'","mcq","By 5 years, I will have achieved my career goals.","Best professional answer using Future Perfect to show goal completion.","`By 5 years, I will have achieved my career goals.` = professional answer.",8,{a:"I will do many things in 5 years.",b:"By 5 years, I will have achieved my career goals.",c:"I did many things in 5 years.",d:"I have done many things."}),
  q("d8-t4-s2-q03","d8-t4-s2","'Is saal December tak humne 75 din ki English course complete kar li hogi.' ko English mein translate karo.","translation","By December this year, we will have completed the 75-day English course.","By December this year = is saal December tak. Will have completed = khatam kar li hogi.","`By December this year, we will have completed the 75-day English course.` = correct.",8),

  // ── d8-t4-s3: Review questions ──
  q("d8-t4-s3-q01","d8-t4-s3","'Finish' ka V3 form kya hai?","mcq","Finished","Finish → Finished (regular verb, same form for V2 and V3). Will have finished = khatam kar lunga.","`Finish` ka V3 = `Finished`. Will have finished = khatam kar lunga.",5,{a:"Finish",b:"Finishing",c:"Finished",d:"Finshed"}),
  q("d8-t4-s3-q02","d8-t4-s3","'Send' ka V3 form kya hai?","mcq","Sent","Send → Sent → Sent (irregular, same V2 and V3). Will have sent = bhej lunga.","`Send` ka V3 = `Sent`. Will have sent = bhej lunga.",5,{a:"Send",b:"Sending",c:"Sended",d:"Sent"}),
  q("d8-t4-s3-q03","d8-t4-s3","'Take' ka V3 form kya hai?","mcq","Taken","Take → Took → Taken. Will have taken = le chuka hounga.","`Take` ka V3 = `Taken`. Will have taken = le chuka hounga.",5,{a:"Took",b:"Taking",c:"Take",d:"Taken"}),
];

// Day 8 - Topic 5: Practice and speaking
export const DAY_8_T5_QUESTIONS: PracticeQ[] = [
  // ── d8-t5-s1: Translation practice ──
  q("d8-t5-s1-q01","d8-t5-s1","'Jab tum subah uthoge, woh pehle se chale jaenge.' ko English mein translate karo.","translation","By the time you wake up, they will have already left.","By the time you wake up = jab tum uthoge. They will have already left = pehle se ja chuke honge.","`By the time you wake up` = jab tum uthoge. Will have already left = pehle se ja chuke honge.",10),
  q("d8-t5-s1-q02","d8-t5-s1","'Ek mahine mein woh 3 books padh chuki hogi.' ko English mein translate karo.","translation","She will have read 3 books in one month.","Will have read = padh chuki hogi. In one month = ek mahine mein.","`Will have read` = padh chuki hogi. One month mein achievement.",8),
  q("d8-t5-s1-q03","d8-t5-s1","'Season khatam hone se pehle team ne 10 matches jeet liye honge.' ko English mein translate karo.","translation","The team will have won 10 matches before the season ends.","Before the season ends = season khatam hone se pehle. Will have won = jeet liye honge.","`Before the season ends` = season khatam hone se pehle. Will have won = jeet liye honge.",8),
  q("d8-t5-s1-q04","d8-t5-s1","'Retirement tak unhone 30 saal service kar li hogi.' ko English mein translate karo.","translation","By retirement, they will have served for 30 years.","By retirement = retirement tak. Will have served = kar li hogi.","`By retirement` = retirement tak. Will have served for 30 years = 30 saal service kar li hogi.",8),
  q("d8-t5-s1-q05","d8-t5-s1","'Next year tak hum apna pehla product launch kar lenge.' ko English mein translate karo.","translation","We will have launched our first product by next year.","By next year = agle saal tak. Will have launched = launch kar lenge.","`By next year` = agle saal tak. Will have launched = launch kar lenge.",8),

  // ── d8-t5-s2: Mixed practice ──
  q("d8-t5-s2-q01","d8-t5-s2","'Have' ka V3 form kya hai?","mcq","Had","Have → Had → Had. Will have had = raha hoga.","`Have` ka V3 = `Had`. Will have had = raha hoga.",5,{a:"Has",b:"Having",c:"Had",d:"Haved"}),
  q("d8-t5-s2-q02","d8-t5-s2","'See' ka V3 form kya hai?","mcq","Seen","See → Saw → Seen. Will have seen = dekha chuka hounga.","`See` ka V3 = `Seen`. Will have seen = dekha chuka hounga.",5,{a:"Saw",b:"Seeing",c:"Seen",d:"Seed"}),
  q("d8-t5-s2-q03","d8-t5-s2","'Drink' ka V3 form kya hai?","mcq","Drunk","Drink → Drank → Drunk. Will have drunk = pee chuka hounga.","`Drink` ka V3 = `Drunk`. Will have drunk = pee chuka hounga.",5,{a:"Drank",b:"Drinking",c:"Drunk",d:"Drinked"}),
  q("d8-t5-s2-q04","d8-t5-s2","'Kal tak woh pehle se apni tabiyat theek kar chuki hogi.' ko English mein translate karo.","translation","She will have recovered by tomorrow.","Will have recovered = tabiyat theek kar chuki hogi. By tomorrow = kal tak.","`Will have recovered` = tabiyat theek kar chuki hogi. By tomorrow = kal tak.",8),

  // ── d8-t5-s3: Error detection ──
  q("d8-t5-s3-q01","d8-t5-s3","Error detect karo: 'By morning, he will have ate his breakfast.'","error_detection","By morning, he will have eaten his breakfast.","V3 of 'eat' is 'eaten', not 'ate'. Will have + eaten (V3) = correct.","'Ate' = V2. 'Eaten' = V3. Will have eaten = correct.",8,{a:"By morning, he will have ate his breakfast.",b:"By morning, he will have eating his breakfast.",c:"By morning, he will have eaten his breakfast.",d:"By morning, he will ate his breakfast."}),
  q("d8-t5-s3-q02","d8-t5-s3","Error detect karo: 'Will you have finished by then?'","error_detection","Will you have finished by then?","This sentence is CORRECT. Future Perfect question form: Will + you + have + V3.","`Will you have finished by then?` = bilkul sahi Future Perfect question.",8,{a:"Will you had finished by then?",b:"Have you finished by then?",c:"Will you have finished by then?",d:"You will have finish by then?"}),
  q("d8-t5-s3-q03","d8-t5-s3","'Exam se pehle kya woh padh lega?' ko English mein translate karo.","translation","Will he have studied before the exam?","Future Perfect question: Will + he + have + studied (V3)? Before the exam = exam se pehle.","`Will he have studied before the exam?` = correct Future Perfect question.",8),
];

// ── Export all Day 8 questions ──
export const ALL_DAY_8_QUESTIONS: PracticeQ[] = [
  ...DAY_8_T1_QUESTIONS,
  ...DAY_8_T2_QUESTIONS,
  ...DAY_8_T3_QUESTIONS,
  ...DAY_8_T4_QUESTIONS,
  ...DAY_8_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 9: USE OF THERE (There is / are / was / were)
// Subtopics: d9-t1-s1, d9-t1-s2, d9-t1-s3, d9-t1-s4
//            d9-t2-s1, d9-t2-s2, d9-t2-s3
//            d9-t3-s1, d9-t3-s2, d9-t3-s3
//            d9-t4-s1, d9-t4-s2, d9-t4-s3
//            d9-t5-s1, d9-t5-s2, d9-t5-s3
// ══════════════════════════════════════════════════════════════

// Day 9 - Topic 1: Introduction to "There is / There are"
export const DAY_9_T1_QUESTIONS: PracticeQ[] = [
  // ── d9-t1-s1: There is / There are basics ──
  q("d9-t1-s1-q01","d9-t1-s1","'There is' ka use kab karte hain?","mcq","Jab ek cheez ya vyakti ho (singular)","'There is' = singular noun ke saath. There is a book. There is one person.","`There is` = ek cheez ke liye (singular). There is a book = ek kitaab hai.",5,{a:"Jab bahut saari cheezein hon (plural)",b:"Jab ek cheez ya vyakti ho (singular)",c:"Jab koi cheez nahi ho",d:"Jab bhavishya ki baat ho"}),
  q("d9-t1-s1-q02","d9-t1-s1","'Kamre mein ek kursi hai.' ko English mein translate karo.","translation","There is a chair in the room.","'There is' = ek cheez hai. 'A chair' = singular. 'In the room' = kamre mein.","`There is a chair in the room.` = Kamre mein ek kursi hai.",5),
  q("d9-t1-s1-q03","d9-t1-s1","'There are' ka use kab karte hain?","mcq","Jab ek se zyada cheezein ya log hon (plural)","'There are' = plural nouns ke saath. There are 5 books. There are many people.","`There are` = ek se zyada cheezein ke liye (plural). There are 5 books.",5,{a:"Jab ek cheez ho",b:"Jab bhavishya ki baat ho",c:"Jab ek se zyada cheezein ya log hon (plural)",d:"Jab past ki baat ho"}),
  q("d9-t1-s1-q04","d9-t1-s1","'Class mein 30 students hain.' ko English mein translate karo.","translation","There are 30 students in the class.","'There are' = plural (30 students). 'In the class' = class mein.","`There are 30 students in the class.` = Class mein 30 students hain.",5),
  q("d9-t1-s1-q05","d9-t1-s1","Which is CORRECT?","mcq","There is a problem with this plan.","'A problem' = singular, so use 'There is'. 'There are' = plural.","`A problem` = singular, isliye `There is` sahi hai.",5,{a:"There are a problem with this plan.",b:"There is a problem with this plan.",c:"There is problems with this plan.",d:"There are problem with this plan."}),
  q("d9-t1-s1-q06","d9-t1-s1","'Bahar 5 cars khadi hain.' ko English mein translate karo.","translation","There are 5 cars outside.","'There are' = plural (5 cars). 'Outside' = bahar.","`There are 5 cars outside.` = Bahar 5 cars khadi hain.",5),
  q("d9-t1-s1-q07","d9-t1-s1","Fill: 'There ___ a message for you on your phone.'","fill_blank","is","'A message' = singular, so 'There is' is correct.","`A message` = singular, isliye `There is` sahi hai.",5),

  // ── d9-t1-s2: There was / There were ──
  q("d9-t1-s2-q01","d9-t1-s2","'There was' ka use kab karte hain?","mcq","Past mein ek cheez thi (singular past)","'There was' = singular noun + past tense. There was a book = ek kitaab thi.","`There was` = singular past. There was a book = ek kitaab thi.",5,{a:"Plural present mein",b:"Future mein",c:"Past mein ek cheez thi (singular past)",d:"Plural past mein"}),
  q("d9-t1-s2-q02","d9-t1-s2","'Pehle yahan ek school tha.' ko English mein translate karo.","translation","There was a school here before.","'There was' = singular past. 'Before' = pehle. 'A school' = singular.","`There was a school here before.` = Pehle yahan ek school tha.",5),
  q("d9-t1-s2-q03","d9-t1-s2","'There were' ka use kab hota hai?","mcq","Past mein bahut saari cheezein thin (plural past)","'There were' = plural noun + past tense. There were many students.","`There were` = plural past. There were many students = bahut saare students the.",5,{a:"Singular present",b:"Singular past",c:"Plural future",d:"Past mein bahut saari cheezein thin (plural past)"}),
  q("d9-t1-s2-q04","d9-t1-s2","'Kal meeting mein 20 log the.' ko English mein translate karo.","translation","There were 20 people in the meeting yesterday.","'There were' = plural past. '20 people' = plural. 'Yesterday' = kal.","`There were 20 people in the meeting yesterday.` = Kal meeting mein 20 log the.",5),
  q("d9-t1-s2-q05","d9-t1-s2","Fill: 'There ___ many problems in the project last year.'","fill_blank","were","'Many problems' = plural + 'last year' = past. So 'There were' is correct.","`Many problems` = plural + past tense = `There were`.",5),

  // ── d9-t1-s3: Negative and Question forms ──
  q("d9-t1-s3-q01","d9-t1-s3","'Kamre mein koi nahi hai.' ko English mein translate karo.","translation","There is no one in the room.","'There is no one' = negative existence. 'In the room' = kamre mein.","`There is no one in the room.` = Kamre mein koi nahi hai.",5),
  q("d9-t1-s3-q02","d9-t1-s3","'There is no water' = kya matlab hai?","translation","Paani nahi hai.","'There is no + noun' = negative existence. No water = koi paani nahi.","`There is no water` = paani nahi hai. Negative existence statement.",5),
  q("d9-t1-s3-q03","d9-t1-s3","'Kya wahan koi bus stand hai?' ko English mein translate karo.","translation","Is there a bus stand there?","Question: 'Is there' = question form of 'There is'. 'A bus stand' = singular.","`Is there a bus stand there?` = question form. Is there = kya wahan hai?",5),
  q("d9-t1-s3-q04","d9-t1-s3","'Kya wahan koi problem nahi thi?' ko English mein translate karo.","translation","Were there no problems there?","Question past plural: 'Were there...?' = plural past question. 'No problems' = koi problems nahi.","`Were there no problems there?` = past plural question form.",5),
  q("d9-t1-s3-q05","d9-t1-s3","'Kal koi meeting nahi thi.' ko English mein translate karo.","translation","There was no meeting yesterday.","Negative past: 'There was no + noun'. 'Yesterday' = kal.","`There was no meeting yesterday.` = Kal koi meeting nahi thi.",5),

  // ── d9-t1-s4: Choices for There is/are ──
  q("d9-t1-s4-q01","d9-t1-s4","'Office mein ek new employee aayi hai.' ko English mein translate karo.","translation","There is a new employee in the office.","'There is' = singular new arrival. 'In the office' = office mein.","`There is a new employee in the office.` = correct.",5),
  q("d9-t1-s4-q02","d9-t1-s4","Identify the error: 'There is many books on the shelf.'","error_detection","There are many books on the shelf.","'Many books' = plural, so use 'There are', not 'There is'.","`Many books` = plural, isliye `There are` chahiye. 'There is' singular ke liye hota hai.",5,{a:"There is many books on the shelf.",b:"There are many books on the shelf.",c:"There were many books on the shelf.",d:"There was many books on the shelf."}),
];

// Day 9 - Topic 2: There in different contexts
export const DAY_9_T2_QUESTIONS: PracticeQ[] = [
  // ── d9-t2-s1: Daily life sentences ──
  q("d9-t2-s1-q01","d9-t2-s1","'Fridge mein kuch khaana hai.' ko English mein translate karo.","translation","There is some food in the fridge.","'There is some food' = singular/uncountable. 'In the fridge' = fridge mein.","`There is some food in the fridge.` = Fridge mein kuch khaana hai.",5),
  q("d9-t2-s1-q02","d9-t2-s1","'Bahar bahut traffic hai.' ko English mein translate karo.","translation","There is a lot of traffic outside.","'A lot of traffic' = uncountable singular. 'There is' with uncountable nouns.","`There is a lot of traffic outside.` = Bahar bahut traffic hai.",5),
  q("d9-t2-s1-q03","d9-t2-s1","'Table par teen cups hain.' ko English mein translate karo.","translation","There are three cups on the table.","'Three cups' = plural. 'There are' + plural noun.","`There are three cups on the table.` = Table par teen cups hain.",5),
  q("d9-t2-s1-q04","d9-t2-s1","'Ghar ke paas ek park hai.' ko English mein translate karo.","translation","There is a park near the house.","'A park' = singular. 'There is' + singular noun. 'Near the house' = ghar ke paas.","`There is a park near the house.` = Ghar ke paas ek park hai.",5),
  q("d9-t2-s1-q05","d9-t2-s1","'Kya fridge mein doodh hai?' ko English mein translate karo.","translation","Is there any milk in the fridge?","'Is there any milk?' = question with uncountable noun. 'Any' used in questions.","`Is there any milk in the fridge?` = Kya fridge mein doodh hai?",5),

  // ── d9-t2-s2: Office and formal context ──
  q("d9-t2-s2-q01","d9-t2-s2","'Meeting room mein projector hai.' ko English mein translate karo.","translation","There is a projector in the meeting room.","Office context. 'There is' = singular. 'A projector' = ek projector.","`There is a projector in the meeting room.` = professional sentence.",5),
  q("d9-t2-s2-q02","d9-t2-s2","'Is project mein kaafi opportunities hain.' ko English mein translate karo.","translation","There are many opportunities in this project.","'Many opportunities' = plural. 'There are' + plural.","`There are many opportunities in this project.` = kaafi opportunities hain.",5),
  q("d9-t2-s2-q03","d9-t2-s2","'Aaj office mein koi nahin tha.' ko English mein translate karo.","translation","There was no one in the office today.","Past singular: 'There was no one'. 'Today' = aaj (past context here).","`There was no one in the office today.` = Aaj office mein koi nahin tha.",5),
  q("d9-t2-s2-q04","d9-t2-s2","'Agle hafte mein 3 meetings hongi.' ko English mein translate karo.","translation","There will be 3 meetings next week.","Future: 'There will be' = hongi. '3 meetings' = plural.","`There will be 3 meetings next week.` = Agle hafte 3 meetings hongi.",8),
  q("d9-t2-s2-q05","d9-t2-s2","'Is plan mein ek problem hai.' ko English mein translate karo.","translation","There is a problem with this plan.","'There is a problem' = ek samasya hai. 'With this plan' = is plan mein.","`There is a problem with this plan.` = Is plan mein ek problem hai.",5),

  // ── d9-t2-s3: There will be (Future) ──
  q("d9-t2-s3-q01","d9-t2-s3","Future mein 'There is' ka form kya hota hai?","mcq","There will be","'There will be' = future existence. There will be a meeting = meeting hogi.","`There will be` = future mein existence dikhata hai.",5,{a:"There is going to",b:"There will be",c:"There would be",d:"There shall be"}),
  q("d9-t2-s3-q02","d9-t2-s3","'Kal office mein ek special announcement hogi.' ko English mein translate karo.","translation","There will be a special announcement in the office tomorrow.","'There will be' = future existence. 'Tomorrow' = kal. 'A special announcement' = singular.","`There will be a special announcement tomorrow.` = Kal announcement hogi.",8),
  q("d9-t2-s3-q03","d9-t2-s3","'Apni trip mein bahut kuch dekhne layak hoga.' ko English mein translate karo.","translation","There will be a lot to see on the trip.","'There will be a lot to see' = bahut kuch dekhne layak hoga.","`There will be a lot to see on the trip.` = bahut kuch hoga dekhne ke liye.",8),
];

// Day 9 - Topic 3: Advanced "There" usage
export const DAY_9_T3_QUESTIONS: PracticeQ[] = [
  // ── d9-t3-s1: There + adjective + noun ──
  q("d9-t3-s1-q01","d9-t3-s1","'Bahar ek sundar garden hai.' ko English mein translate karo.","translation","There is a beautiful garden outside.","'There is a beautiful garden' = adjective + noun. 'Outside' = bahar.","`There is a beautiful garden outside.` = adjective `beautiful` + noun `garden`.",5),
  q("d9-t3-s1-q02","d9-t3-s1","'Office mein bahut experienced log hain.' ko English mein translate karo.","translation","There are very experienced people in the office.","'Very experienced people' = plural with adjective. 'There are' + plural.","`There are very experienced people in the office.` = plural + adjective.",5),
  q("d9-t3-s1-q03","d9-t3-s1","'Kya is area mein koi hospital hai?' ko English mein translate karo.","translation","Is there a hospital in this area?","'Is there a hospital?' = singular question. 'In this area' = is area mein.","`Is there a hospital in this area?` = singular question.",5),
  q("d9-t3-s1-q04","d9-t3-s1","Fill: 'There ___ a lot of noise in the street last night.'","fill_blank","was","'A lot of noise' = uncountable/singular concept. 'Last night' = past. So 'There was'.","`A lot of noise` singular treat hota hai + past = `There was`.",5),

  // ── d9-t3-s2: Error detection ──
  q("d9-t3-s2-q01","d9-t3-s2","Error detect karo: 'There is many students in the class.'","error_detection","There are many students in the class.","'Many students' = plural, so use 'There are', not 'There is'.","`Many students` plural hai, isliye `There are` chahiye.",5,{a:"There is many students in the class.",b:"There are many student in the class.",c:"There are many students in the class.",d:"There was many students in the class."}),
  q("d9-t3-s2-q02","d9-t3-s2","Error detect karo: 'There were a problem in the meeting.'","error_detection","There was a problem in the meeting.","'A problem' = singular, so use 'There was', not 'There were'.","`A problem` singular hai, isliye `There was` chahiye.",5,{a:"There were a problem in the meeting.",b:"There was a problem in the meeting.",c:"There is a problem in the meeting.",d:"There are a problem in the meeting."}),
  q("d9-t3-s2-q03","d9-t3-s2","Error detect karo: 'Is there some chairs in the hall?'","error_detection","Are there any chairs in the hall?","'Chairs' = plural, so use 'Are there'. 'Any' (not 'some') in questions.","`Chairs` plural hai isliye `Are there` chahiye. Questions mein `any` use karte hain.",8,{a:"Is there some chairs in the hall?",b:"Is there any chairs in the hall?",c:"Are there any chairs in the hall?",d:"Were there some chairs in the hall?"}),

  // ── d9-t3-s3: Practice sentences ──
  q("d9-t3-s3-q01","d9-t3-s3","'Kal ke event mein bahut log aayenge.' ko English mein translate karo.","translation","There will be a lot of people at tomorrow's event.","Future: 'There will be'. 'A lot of people' = bahut log.","`There will be a lot of people at tomorrow's event.` = Kal ke event mein bahut log aayenge.",8),
  q("d9-t3-s3-q02","d9-t3-s3","'Mere sheher mein pehle bahut zyada parks the.' ko English mein translate karo.","translation","There used to be many parks in my city.","'There used to be' = past habit/existence. 'Many parks' = bahut zyada parks.","`There used to be many parks in my city.` = past existence.",8),
  q("d9-t3-s3-q03","d9-t3-s3","'Yahan kuch din baad ek nayi dukaan khulegi.' ko English mein translate karo.","translation","There will be a new shop here in a few days.","'There will be' = future opening. 'In a few days' = kuch din baad.","`There will be a new shop here in a few days.` = Future existence.",8),
];

// Day 9 - Topic 4: Vocabulary and common errors
export const DAY_9_T4_QUESTIONS: PracticeQ[] = [
  // ── d9-t4-s1: Common phrases with There ──
  q("d9-t4-s1-q01","d9-t4-s1","'There you go!' ka matlab kya hai?","mcq","Lo! / Yeh lo!","'There you go' = informal phrase used when handing something or when something works.","`There you go` = informal English. Kuch dete waqt bolte hain = 'Lo!'",5,{a:"Wahan jao!",b:"Lo! / Yeh lo!",c:"Wahan hai.",d:"Bahar jao."}),
  q("d9-t4-s1-q02","d9-t4-s1","'There's no way!' ka matlab kya hai?","mcq","Bilkul nahi! / Yeh mumkin nahi!","'There's no way' = very emphatic 'impossible'. Common informal English expression.","`There's no way` = bilkul nahi! Very strong denial in English.",5,{a:"Wahan raasta hai.",b:"Bilkul nahi! / Yeh mumkin nahi!",c:"Wahan ek tarika hai.",d:"Koi cheez nahi."}),
  q("d9-t4-s1-q03","d9-t4-s1","'There, there!' ka kab use karte hain?","mcq","Jab kisi ko console (dilasa) karna ho","'There, there' = used to soothe or comfort someone who is upset. 'There, there, don't cry.'","`There, there` = English consolation phrase. Dilasa dene ke liye use hota hai.",5,{a:"Jab kisi ko wahan bhejein",b:"Jab kisi ko console (dilasa) karna ho",c:"Jab kisi ko dar lagaye",d:"Jab kuch door ho"}),

  // ── d9-t4-s2: More sentences ──
  q("d9-t4-s2-q01","d9-t4-s2","'Is bottle mein kuch paani nahi hai.' ko English mein translate karo.","translation","There is no water in this bottle.","'There is no water' = negative existence uncountable. 'In this bottle' = is bottle mein.","`There is no water in this bottle.` = Is bottle mein paani nahi hai.",5),
  q("d9-t4-s2-q02","d9-t4-s2","'Bahut zyada options hain yeh job mein.' ko English mein translate karo.","translation","There are too many options in this job.","'Too many options' = bahut zyada options (plural). 'There are' + plural.","`There are too many options in this job.` = Bahut zyada options hain.",5),
  q("d9-t4-s2-q03","d9-t4-s2","'Market mein acchi books nahi milti thi pehle.' ko English mein translate karo.","translation","There were no good books available in the market before.","'There were no good books' = plural past negative. 'Before' = pehle.","`There were no good books available in the market before.` = pehle acchi books nahi thin.",5),
  q("d9-t4-s2-q04","d9-t4-s2","Fill: 'Excuse me, is ___ a pharmacy near here?'","fill_blank","there","'Is there...?' = question form of 'There is'. 'A pharmacy' = singular.","`Is there a pharmacy near here?` = question form. Is there = kya hai?",5),

  // ── d9-t4-s3: Multiple choice review ──
  q("d9-t4-s3-q01","d9-t4-s3","'There ___ a beautiful lake near our village.' mein kya aayega? (past)","mcq","was","Past tense + singular (a beautiful lake) = 'There was'.","`A beautiful lake` = singular + past = `There was`.",5,{a:"is",b:"are",c:"was",d:"were"}),
  q("d9-t4-s3-q02","d9-t4-s3","'There ___ many flights to Delhi every day.' mein kya aayega? (present)","mcq","are","'Many flights' = plural + present = 'There are'.","`Many flights` = plural + present = `There are`.",5,{a:"is",b:"are",c:"was",d:"were"}),
  q("d9-t4-s3-q03","d9-t4-s3","'There ___ no issues in the last meeting.' mein kya aayega? (past)","mcq","were","'No issues' = plural + past = 'There were'.","`No issues` plural + past = `There were`.",5,{a:"is",b:"are",c:"was",d:"were"}),
];

// Day 9 - Topic 5: Practice
export const DAY_9_T5_QUESTIONS: PracticeQ[] = [
  // ── d9-t5-s1: Comprehensive translation ──
  q("d9-t5-s1-q01","d9-t5-s1","'Is coffee shop mein ek cozy corner hai.' ko English mein translate karo.","translation","There is a cozy corner in this coffee shop.","'There is' = singular. 'A cozy corner' = ek aaram deh kona.","`There is a cozy corner in this coffee shop.` = singular noun.",5),
  q("d9-t5-s1-q02","d9-t5-s1","'Pichle saal is area mein kaafi zyada crimes the.' ko English mein translate karo.","translation","There were many crimes in this area last year.","'Many crimes' = plural + past. 'Last year' = pichle saal.","`There were many crimes in this area last year.` = plural past.",5),
  q("d9-t5-s1-q03","d9-t5-s1","'Future mein bahut opportunities hongi.' ko English mein translate karo.","translation","There will be many opportunities in the future.","'There will be' = future. 'Many opportunities' = plural future.","`There will be many opportunities in the future.` = future existence.",8),
  q("d9-t5-s1-q04","d9-t5-s1","'Meeting mein koi agenda nahi tha.' ko English mein translate karo.","translation","There was no agenda in the meeting.","'There was no agenda' = singular past negative. 'In the meeting' = meeting mein.","`There was no agenda in the meeting.` = singular past negative.",5),

  // ── d9-t5-s2: Mix practice ──
  q("d9-t5-s2-q01","d9-t5-s2","'Street food market mein bahut tasty khana hai.' ko English mein translate karo.","translation","There is a lot of tasty food in the street food market.","'A lot of tasty food' = uncountable/singular treatment. 'There is'.","`There is a lot of tasty food in the street food market.` = singular uncountable.",5),
  q("d9-t5-s2-q02","d9-t5-s2","'Kya aaj koi special event hai?' ko English mein translate karo.","translation","Is there any special event today?","'Is there any...?' = singular question. 'Today' = aaj.","`Is there any special event today?` = singular question form.",5),
  q("d9-t5-s2-q03","d9-t5-s2","'Library mein hazaron kitabein hain.' ko English mein translate karo.","translation","There are thousands of books in the library.","'Thousands of books' = plural. 'There are' + plural.","`There are thousands of books in the library.` = plural.",5),
  q("d9-t5-s2-q04","d9-t5-s2","'Kal raat ek mast movie thi TV par.' ko English mein translate karo.","translation","There was a great movie on TV last night.","'There was a great movie' = singular past. 'Last night' = kal raat.","`There was a great movie on TV last night.` = singular past.",5),

  // ── d9-t5-s3: Error detection ──
  q("d9-t5-s3-q01","d9-t5-s3","Error detect karo: 'There is ten students in the room.'","error_detection","There are ten students in the room.","'Ten students' = plural, so use 'There are', not 'There is'.","`Ten students` = plural, isliye `There are` chahiye.",5,{a:"There is ten students in the room.",b:"There are ten student in the room.",c:"There are ten students in the room.",d:"There was ten students in the room."}),
  q("d9-t5-s3-q02","d9-t5-s3","Error detect karo: 'There will be many problem next year.'","error_detection","There will be many problems next year.","'Many problems' = plural. 'Problem' should be 'problems'.","`Many problems` = plural. `Problem` galat hai, `problems` sahi hai.",8,{a:"There will be many problem next year.",b:"There will be many problems next year.",c:"There will were many problems next year.",d:"There are many problems next year."}),
  q("d9-t5-s3-q03","d9-t5-s3","'Wahan kitne rooms hain hotel mein?' ko English mein translate karo.","translation","How many rooms are there in the hotel?","'How many rooms are there?' = quantity question. 'In the hotel' = hotel mein.","`How many rooms are there in the hotel?` = plural question.",5),
];

// ── Export all Day 9 questions ──
export const ALL_DAY_9_QUESTIONS: PracticeQ[] = [
  ...DAY_9_T1_QUESTIONS,
  ...DAY_9_T2_QUESTIONS,
  ...DAY_9_T3_QUESTIONS,
  ...DAY_9_T4_QUESTIONS,
  ...DAY_9_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 10: REVISION + PRACTICE (Days 1-9 Review)
// Subtopics: d10-t1-s1, d10-t1-s2, d10-t1-s3
//             d10-t2-s1, d10-t2-s2, d10-t2-s3
//             d10-t3-s1, d10-t3-s2, d10-t3-s3
// ══════════════════════════════════════════════════════════════

// Day 10 - Topic 1: Grammar Revision
export const DAY_10_T1_QUESTIONS: PracticeQ[] = [
  // ── d10-t1-s1: Key Concepts Review ──
  q("d10-t1-s1-q01","d10-t1-s1","Be verb present tense mein 'She' ke sath kaunsa use hota hai?","mcq","is","She/He/It = is (present). I = am. We/You/They = are. Very important rule.","`She` ke sath `is` aata hai. She is = woh hai.",5,{a:"am",b:"is",c:"are",d:"be"}),
  q("d10-t1-s1-q02","d10-t1-s1","'There are' kab use karte hain?","mcq","Plural noun ke sath present mein","'There are' = plural + present. There is = singular + present.","`There are` = plural present. There is = singular present.",5,{a:"Singular past",b:"Plural noun ke sath present mein",c:"Singular present",d:"Future ke liye"}),
  q("d10-t1-s1-q03","d10-t1-s1","'Has' aur 'Have' mein kya fark hai?","mcq","Has = He/She/It ke liye, Have = I/You/We/They ke liye","Has = third person singular (He/She/It). Have = all others.","`Has` = He/She/It. `Have` = I/You/We/They. Yeh rule zaroori hai.",5,{a:"Dono same hain",b:"Has = past, Have = present",c:"Has = He/She/It ke liye, Have = I/You/We/They ke liye",d:"Has = plural, Have = singular"}),
  q("d10-t1-s1-q04","d10-t1-s1","'Had' kya hai?","mcq","Have/Has ka past tense","'Had' is the simple past tense of both 'Have' and 'Has'. All subjects use 'Had' in past.","`Had` = Have/Has ka past. I had, She had, They had — sab subjects ke sath `had` aata hai.",5,{a:"Have ka future form",b:"Has ka present perfect form",c:"Have/Has ka past tense",d:"Be verb ka past"}),
  q("d10-t1-s1-q05","d10-t1-s1","Imperative sentence mein verb ki kaisi form use hoti hai?","mcq","Base form (V1) — bina kisi change ke","Imperative = base verb. 'Go!', 'Sit!', 'Open the door!' — no -s, no -ing.","`Go!` `Sit!` `Open!` = base verb (V1). Imperative mein hamesha base form.",5,{a:"V2 (Past form)",b:"V1 + s",c:"V1 + ing",d:"Base form (V1) — bina kisi change ke"}),
  q("d10-t1-s1-q06","d10-t1-s1","'This' aur 'These' mein kya fark hai?","mcq","This = singular near, These = plural near","This = one thing near you. These = multiple things near you. Both are demonstratives.","`This` = singular paas. `These` = plural paas. Paas ka difference.",5,{a:"This = plural, These = singular",b:"This = far, These = near",c:"This = singular near, These = plural near",d:"Koi fark nahi"}),
  q("d10-t1-s1-q07","d10-t1-s1","Future Perfect Tense ka formula kya hai?","mcq","Subject + will have + V3","Future Perfect = Subject + will have + V3 (past participle). I will have done.","`Subject + will have + V3` = Future Perfect. I will have done = main kar chuka hounga.",5,{a:"Subject + will + V1",b:"Subject + will have + V3",c:"Subject + have + V3",d:"Subject + had + V3"}),

  // ── d10-t1-s2: Common Mistakes ──
  q("d10-t1-s2-q01","d10-t1-s2","Error detect karo: 'She am a doctor.'","error_detection","She is a doctor.","'She' takes 'is', not 'am'. I = am, He/She/It = is, We/You/They = are.","`She` ke sath `is` hota hai, `am` nahi. She is a doctor = correct.",5,{a:"She am a doctor.",b:"She is a doctor.",c:"She are a doctor.",d:"She was a doctor."}),
  q("d10-t1-s2-q02","d10-t1-s2","Error detect karo: 'There is many cars in the parking.'","error_detection","There are many cars in the parking.","'Many cars' = plural, so use 'There are'.","`Many cars` = plural, isliye `There are` chahiye.",5,{a:"There is many cars in the parking.",b:"There was many cars in the parking.",c:"There are many cars in the parking.",d:"There were many car in the parking."}),
  q("d10-t1-s2-q03","d10-t1-s2","Error detect karo: 'Please to come inside.'","error_detection","Please come inside.","'Please + to + verb' is wrong. Correct: 'Please + base verb'. No 'to' after 'please'.","`Please to come` galat. Sahi: `Please come`. Please ke baad base verb seedha aata hai.",5,{a:"Please to coming inside.",b:"Please come inside.",c:"Please to come inside.",d:"Please comes inside."}),
  q("d10-t1-s2-q04","d10-t1-s2","Error detect karo: 'I have ate my lunch.'","error_detection","I have eaten my lunch.","V3 of 'eat' is 'eaten', not 'ate'. Present Perfect: I have + eaten.","`Ate` = V2. `Eaten` = V3. I have eaten = present perfect. Sahi form.",8,{a:"I have ate my lunch.",b:"I have eating my lunch.",c:"I have eaten my lunch.",d:"I eated my lunch."}),
  q("d10-t1-s2-q05","d10-t1-s2","Error detect karo: 'She doesn't has a car.'","error_detection","She doesn't have a car.","With 'doesn't', always use base verb 'have', not 'has'. Doesn't + have.","`Doesn't` ke baad base verb `have` aata hai, `has` nahi.",5,{a:"She doesn't has a car.",b:"She don't have a car.",c:"She doesn't have a car.",d:"She hasn't a car."}),

  // ── d10-t1-s3: Quick Reference ──
  q("d10-t1-s3-q01","d10-t1-s3","'That' aur 'Those' mein kya fark hai?","mcq","That = singular far, Those = plural far","That = one far thing. Those = many far things. Both point to distant objects.","`That` = ek door cheez. `Those` = kai door cheezein. Dono door ke liye.",5,{a:"That = near, Those = far",b:"That = plural, Those = singular",c:"That = singular far, Those = plural far",d:"Koi fark nahi"}),
  q("d10-t1-s3-q02","d10-t1-s3","'This is' vs 'These are' mein kya fark hai?","mcq","This is = singular, These are = plural","This is = ek cheez. These are = kai cheezein. Subject-verb agreement with demonstratives.","`This is` = singular. `These are` = plural. Subject-verb agreement.",5,{a:"Dono same hain",b:"This is = singular, These are = plural",c:"This is = plural, These are = singular",d:"Koi fark nahi"}),
  q("d10-t1-s3-q03","d10-t1-s3","'Go' ka V3 form kya hai?","mcq","Gone","Go → Went → Gone. V3 = Gone. I have gone, She had gone, I will have gone.","`Go` ka V3 = `Gone`. Gone = past participle. I have gone = main ja chuka hun.",5,{a:"Went",b:"Going",c:"Gone",d:"Goes"}),
];

// Day 10 - Topic 2: Speaking Practice
export const DAY_10_T2_QUESTIONS: PracticeQ[] = [
  // ── d10-t2-s1: Speaking Drills ──
  q("d10-t2-s1-q01","d10-t2-s1","'Mujhe apna parichay dena hai.' ko English mein translate karo.","translation","I need to introduce myself.","'I need to introduce myself.' = mujhe apna parichay dena hai. Self-introduction prompt.","`I need to introduce myself.` = Self-introduction ka pehla step.",5),
  q("d10-t2-s1-q02","d10-t2-s1","'Aap kahan se hain?' ko English mein translate karo.","translation","Where are you from?","'Where are you from?' = Aap kahan se hain? Classic question using be verb.","`Where are you from?` = Simple question with be verb.",5),
  q("d10-t2-s1-q03","d10-t2-s1","'Mere paas 5 saal ka experience hai.' ko English mein translate karo.","translation","I have 5 years of experience.","'I have' = mere paas hai. '5 years of experience' = professional statement.","`I have 5 years of experience.` = Professional introduction sentence.",5),
  q("d10-t2-s1-q04","d10-t2-s1","'Kya aapne yeh job pehle ki hai?' ko English mein translate karo.","translation","Have you done this job before?","Present Perfect question: Have + you + done (V3)? 'Before' = pehle.","`Have you done this job before?` = Present Perfect question.",8),
  q("d10-t2-s1-q05","d10-t2-s1","'Main daily English practice karta hun.' ko English mein translate karo.","translation","I practice English every day.","Simple present: I practice = main karta hun. 'Every day' = roz. Habit statement.","`I practice English every day.` = daily habit. Simple present.",5),

  // ── d10-t2-s2: Real Conversation ──
  q("d10-t2-s2-q01","d10-t2-s2","'Baaki sab kaisi hai?' ko English mein translate karo.","translation","How is everyone else?","'How is everyone else?' = Baaki sab kaisi hai? Using be verb for asking about others.","`How is everyone else?` = Be verb ke sath question.",5),
  q("d10-t2-s2-q02","d10-t2-s2","'Chaliye shuru karte hain.' ko English mein translate karo.","translation","Let's get started.","'Let's get started' = chaliye shuru karte hain. 'Let's' = inclusive suggestion.","`Let's get started.` = Let's ke sath suggestion.",5),
  q("d10-t2-s2-q03","d10-t2-s2","'Kya aap samjhe?' ko English mein translate karo.","translation","Did you understand?","'Did you understand?' = Kya aap samjhe? Simple past question.","`Did you understand?` = Simple past question.",5),
  q("d10-t2-s2-q04","d10-t2-s2","'Main aur zyada seekhna chahta hun.' ko English mein translate karo.","translation","I want to learn more.","'I want to learn' = want to + base verb. 'More' = aur zyada.","`I want to learn more.` = want to + V1 pattern.",5),

  // ── d10-t2-s3: Pronunciation Refinement ──
  q("d10-t2-s3-q01","d10-t2-s3","'There is' ko naturally kaise bolte hain informal English mein?","mcq","There's","In informal spoken English, 'There is' is contracted to 'There's'.","`There's` = informal short form of `There is`. Spoken English mein zyada use hota hai.",5,{a:"There're",b:"There's",c:"There'd",d:"There'll"}),
  q("d10-t2-s3-q02","d10-t2-s3","'I will have' ko spoken English mein kaise bolte hain?","mcq","I'll have","'I will have' → 'I'll have' in spoken English. Contractions make speech natural.","`I'll have` = spoken form of `I will have`. Contractions = natural English.",5,{a:"I'd have",b:"I'll have",c:"I've had",d:"I'm having"}),
  q("d10-t2-s3-q03","d10-t2-s3","'Will not have' ka short form kya hai?","mcq","Won't have","'Will not' → 'Won't'. So 'Will not have' → 'Won't have'.","`Won't have` = `will not have` ka short form.",5,{a:"Wouldn't have",b:"Won't have",c:"Shan't have",d:"Willn't have"}),
];

// Day 10 - Topic 3: Comprehensive Test
export const DAY_10_T3_QUESTIONS: PracticeQ[] = [
  // ── d10-t3-s1: Grammar Test ──
  q("d10-t3-s1-q01","d10-t3-s1","'Woh teacher hai.' ko English mein translate karo.","translation","She is a teacher.","She = is. A teacher = profession. Simple be verb sentence.","`She is a teacher.` = woh teacher hai. She ke sath is.",5),
  q("d10-t3-s1-q02","d10-t3-s1","'Mere paas do bhai hain.' ko English mein translate karo.","translation","I have two brothers.","I have = mere paas. Two brothers = plural. Have with I.","`I have two brothers.` = I ke sath have.",5),
  q("d10-t3-s1-q03","d10-t3-s1","'Ghar mein ek billi hai.' ko English mein translate karo.","translation","There is a cat in the house.","There is = singular. A cat = singular.","`There is a cat in the house.` = singular existence.",5),
  q("d10-t3-s1-q04","d10-t3-s1","'Kal tak main letter bhej dunga.' ko English mein translate karo.","translation","I will have sent the letter by tomorrow.","Future Perfect: will have + sent (V3). By tomorrow = kal tak.","`I will have sent the letter by tomorrow.` = Future Perfect.",8),
  q("d10-t3-s1-q05","d10-t3-s1","'Darwaza mat kholo.' ko English mein translate karo.","translation","Don't open the door.","Negative imperative: Don't + base verb. Don't open = mat kholo.","`Don't open the door.` = negative imperative.",5),
  q("d10-t3-s1-q06","d10-t3-s1","'Yeh kitaab meri hai.' ko English mein translate karo.","translation","This book is mine.","'This book' = near singular demonstrative. 'Is mine' = meri hai.","`This book is mine.` = demonstrative adjective.",5),
  q("d10-t3-s1-q07","d10-t3-s1","'Pichle saal mere paas ek acha job tha.' ko English mein translate karo.","translation","I had a good job last year.","'Had' = past possession. 'Last year' = pichle saal.","`I had a good job last year.` = past possession.",5),
  q("d10-t3-s1-q08","d10-t3-s1","'Uske paas bahut zyada experience hai.' ko English mein translate karo.","translation","She has a lot of experience.","She has = uske paas hai. A lot of experience = bahut zyada anubhav.","`She has a lot of experience.` = She ke sath has.",5),

  // ── d10-t3-s2: Vocabulary Test ──
  q("d10-t3-s2-q01","d10-t3-s2","'Achieve' ka Hindi mein kya matlab hai?","mcq","Haasil karna / Pana","Achieve = to successfully accomplish something. She achieved her goal = usne apna lakshya haasil kiya.","`Achieve` = haasil karna / pana. Achievement = uplabdhi.",5,{a:"Bhoolna",b:"Rokna",c:"Haasil karna / Pana",d:"Aana"}),
  q("d10-t3-s2-q02","d10-t3-s2","'Complete' ka V3 form kya hai?","mcq","Completed","Complete → Completed (regular verb). V2 and V3 are same.","`Complete` ka V3 = `Completed`. Regular verb hai.",5,{a:"Complete",b:"Completes",c:"Completing",d:"Completed"}),
  q("d10-t3-s2-q03","d10-t3-s2","'Submit' ko Hindi mein kya kehte hain?","mcq","Jama karna","Submit = jama karna / dena. Please submit your report = kripaya apni report jama karein.","`Submit` = jama karna. Office/school mein bahut use hota hai.",5,{a:"Lena",b:"Dekhhna",c:"Jama karna",d:"Chalana"}),

  // ── d10-t3-s3: Speaking Assessment ──
  q("d10-t3-s3-q01","d10-t3-s3","'Apne 5 saal ke goals' ko Future Perfect mein batao.","translation","By the next 5 years, I will have achieved my career goals and started my own business.","Best answer using Future Perfect for multiple goals with 'by the next 5 years'.","`By the next 5 years, I will have achieved my goals.` = correct Future Perfect.",10),
  q("d10-t3-s3-q02","d10-t3-s3","'Aaj aapke din mein kya kya hua?' ko English mein batao (past tense mein).","translation","Today I had many meetings and I had a good lunch with my team.","Past tense storytelling using 'had'. Combines past possession and past events.","`Today I had many meetings.` = past tense narrative.",8),
  q("d10-t3-s3-q03","d10-t3-s3","'Apne ghar ka description 'There is/are' use karke do.'","translation","There is a living room and two bedrooms. There are five people in my family.","Describing home using There is (singular) and There are (plural).","`There is a living room. There are five people.` = singular + plural.",5),
];

// ── Export all Day 10 questions ──
export const ALL_DAY_10_QUESTIONS: PracticeQ[] = [
  ...DAY_10_T1_QUESTIONS,
  ...DAY_10_T2_QUESTIONS,
  ...DAY_10_T3_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 11: USE OF WANT (want to, wants to, want someone to do)
// Subtopics: d11-t1-s1, d11-t1-s2, d11-t1-s3, d11-t1-s4
//             d11-t2-s1, d11-t2-s2, d11-t2-s3
//             d11-t3-s1, d11-t3-s2, d11-t3-s3
//             d11-t4-s1, d11-t4-s2, d11-t4-s3
//             d11-t5-s1, d11-t5-s2, d11-t5-s3
// ══════════════════════════════════════════════════════════════

// Day 11 - Topic 1: Want to / Wants to basics
export const DAY_11_T1_QUESTIONS: PracticeQ[] = [
  // ── d11-t1-s1: Introduction to Want ──
  q("d11-t1-s1-q01","d11-t1-s1","'Want to' ka kya matlab hai?","mcq","Karna chahna / Kuch karne ki ichha hona","'Want to' = desire to do something. I want to go = main jaana chahta hun.","`Want to` = karna chahna. Present desire express karta hai.",5,{a:"Kuch karke dikhaana",b:"Karna chahna / Kuch karne ki ichha hona",c:"Zaroor karna",d:"Zyada karna"}),
  q("d11-t1-s1-q02","d11-t1-s1","'Main English seekhna chahta hun.' ko English mein translate karo.","translation","I want to learn English.","'I want to' = main chahta hun. 'To learn' = seekhna. Want + to + base verb.","`I want to learn English.` = main English seekhna chahta hun.",5,
    undefined,[{word:"want to",meaning:"chahna"},{word:"learn",meaning:"seekhna"}]),
  q("d11-t1-s1-q03","d11-t1-s1","'She wants to' kab use karte hain?","mcq","Jab subject He/She/It ho","'Wants' = third person singular (He/She/It). 'Want' = I/You/We/They.","`Wants to` = He/She/It ke sath. `Want to` = I/You/We/They ke sath.",5,{a:"Jab subject I ho",b:"Jab subject We ho",c:"Jab subject He/She/It ho",d:"Jab past ho"}),
  q("d11-t1-s1-q04","d11-t1-s1","'Woh ghar jaana chahti hai.' ko English mein translate karo.","translation","She wants to go home.","'She wants to' = woh chahti hai. 'To go home' = ghar jaana.","`She wants to go home.` = woh ghar jaana chahti hai.",5),
  q("d11-t1-s1-q05","d11-t1-s1","'Want to' ke baad verb ki kaisi form aati hai?","mcq","Base form (V1)","After 'want to', always use the base form (V1). I want to go (not 'goes', 'going').","`Want to` ke baad hamesha base verb (V1) aata hai.",5,{a:"V2 (Past form)",b:"V3 (Past participle)",c:"V1+ing",d:"Base form (V1)"}),
  q("d11-t1-s1-q06","d11-t1-s1","'Hum log ek movie dekhna chahte hain.' ko English mein translate karo.","translation","We want to watch a movie.","'We want to' = hum chahte hain. 'To watch a movie' = movie dekhna.","`We want to watch a movie.` = hum movie dekhna chahte hain.",5),
  q("d11-t1-s1-q07","d11-t1-s1","Fill: 'He ___ to buy a new laptop.'","fill_blank","wants","He = third person singular, so 'wants to' (not 'want to').","`He wants to` = third person singular. `wants` correct hai.",5),

  // ── d11-t1-s2: Structure and Formula ──
  q("d11-t1-s2-q01","d11-t1-s2","'Positive Want' ka structure kya hai?","mcq","Subject + want/wants + to + base verb","Want to = present desire formula. She wants to eat. I want to go.","`Subject + want/wants + to + V1` = positive want formula.",5,{a:"Subject + want + base verb",b:"Subject + want/wants + to + base verb",c:"Subject + wanting + to + base verb",d:"Subject + wants + base verb"}),
  q("d11-t1-s2-q02","d11-t1-s2","'Uske bhai engineer banna chahta hai.' ko English mein translate karo.","translation","Her brother wants to become an engineer.","'Her brother wants to' = third person. 'To become an engineer' = engineer banna.","`Her brother wants to become an engineer.` = third person want.",8),
  q("d11-t1-s2-q03","d11-t1-s2","'Main aur zyada money kamaana chahta hun.' ko English mein translate karo.","translation","I want to earn more money.","'I want to' = first person. 'To earn more money' = zyada money kamaana.","`I want to earn more money.` = first person want.",5),
  q("d11-t1-s2-q04","d11-t1-s2","'Woh aapko ek gift dena chahte hain.' ko English mein translate karo.","translation","They want to give you a gift.","'They want to' = third person plural. 'To give you a gift' = tumhe gift dena.","`They want to give you a gift.` = plural want.",5),
  q("d11-t1-s2-q05","d11-t1-s2","Identify the error: 'She want to go home.'","error_detection","She wants to go home.","'She' = third person singular, so 'wants' (not 'want').","`She` = third person, isliye `wants` chahiye. 'want' = I/You/We/They ke liye.",5,{a:"She want to go home.",b:"She wants to go home.",c:"She is want to go home.",d:"She wanted to go home."}),

  // ── d11-t1-s3: Negative Want ──
  q("d11-t1-s3-q01","d11-t1-s3","'Main nahin jaana chahta.' ko English mein translate karo.","translation","I don't want to go.","Negative want: I don't want to + base verb. 'Don't want to' = nahin chahta.","`I don't want to go.` = main nahin jaana chahta.",5),
  q("d11-t1-s3-q02","d11-t1-s3","'Woh class mein nahin padhna chahti.' ko English mein translate karo.","translation","She doesn't want to study in class.","'She doesn't want to' = third person negative. 'To study in class' = class mein padhna.","`She doesn't want to study in class.` = third person negative want.",5),
  q("d11-t1-s3-q03","d11-t1-s3","Negative want ka formula kya hai?","mcq","Subject + don't/doesn't + want + to + base verb","Don't want to = I/You/We/They. Doesn't want to = He/She/It.","`Subject + don't/doesn't + want to + V1` = negative want formula.",5,{a:"Subject + not want + to + V1",b:"Subject + don't/doesn't + want + to + base verb",c:"Subject + want + not + to + V1",d:"Subject + didn't + want + to + V1"}),
  q("d11-t1-s3-q04","d11-t1-s3","'Woh log mere saath kaam nahin karna chahte.' ko English mein translate karo.","translation","They don't want to work with me.","'They don't want to' = plural negative. 'To work with me' = mere saath kaam karna.","`They don't want to work with me.` = plural negative want.",5),

  // ── d11-t1-s4: Question with Want ──
  q("d11-t1-s4-q01","d11-t1-s4","'Want' se question kaise banate hain?","mcq","Do/Does + subject + want + to + base verb?","Question: Do + I/You/We/They + want to? Does + He/She/It + want to?","`Do/Does + subject + want to + V1?` = want ka question form.",5,{a:"Want + subject + to + V1?",b:"Do/Does + subject + want + to + base verb?",c:"Does + subject + wants + to + V1?",d:"Subject + want + V1?"}),
  q("d11-t1-s4-q02","d11-t1-s4","'Kya tum job change karna chahte ho?' ko English mein translate karo.","translation","Do you want to change your job?","Question: Do + you + want to + change? 'Your job' = tumhari job.","`Do you want to change your job?` = question form.",5),
  q("d11-t1-s4-q03","d11-t1-s4","'Kya woh doosre sheher mein move karna chahti hai?' ko English mein translate karo.","translation","Does she want to move to another city?","'Does she want to?' = third person question. 'Move to another city' = doosre sheher jaana.","`Does she want to move to another city?` = third person question.",5),
];

// Day 11 - Topic 2: Want someone to do something
export const DAY_11_T2_QUESTIONS: PracticeQ[] = [
  // ── d11-t2-s1: Want + object + to + verb ──
  q("d11-t2-s1-q01","d11-t2-s1","'Main chahta hun ki tum aao.' ko English mein translate karo.","translation","I want you to come.","'Want + object + to + base verb'. I want you to come = main chahta hun ki tum aao.","`I want you to come.` = want + object (you) + to + V1.",8,
    undefined,[{word:"want you to",meaning:"chahna ki tum..."}]),
  q("d11-t2-s1-q02","d11-t2-s1","'Woh chahta hai ki hum jaldi aayein.' ko English mein translate karo.","translation","He wants us to come early.","'He wants + object (us) + to + base verb'. 'Come early' = jaldi aana.","`He wants us to come early.` = He wants + object + to + V1.",8),
  q("d11-t2-s1-q03","d11-t2-s1","'I want + object + to + V1' ka structure kya dikhata hai?","mcq","Main chahta hun ki koi aur kuch kare","'Want + object + to + verb' = you want someone ELSE to do something.","`Want + object + to + V1` = kisi aur se kuch karwaana chahna.",8,{a:"Main khud kuch karna chahta hun",b:"Main chahta hun ki koi aur kuch kare",c:"Mujhe kuch karna hai",d:"Kisi ko rokna chahta hun"}),
  q("d11-t2-s1-q04","d11-t2-s1","'Teacher chahti hain ki students regular homework karein.' ko English mein translate karo.","translation","The teacher wants students to do homework regularly.","'Wants students to do' = teacher wants + object (students) + to + do.","`The teacher wants students to do homework regularly.` = want + object + to + V1.",8),
  q("d11-t2-s1-q05","d11-t2-s1","'Manager chahte hain ki team kal meeting attend kare.' ko English mein translate karo.","translation","The manager wants the team to attend the meeting tomorrow.","'Wants + object (the team) + to + attend'. Professional context.","`The manager wants the team to attend the meeting.` = professional want.",8),

  // ── d11-t2-s2: Professional and social want ──
  q("d11-t2-s2-q01","d11-t2-s2","'Main apni salary badhwana chahta hun.' ko English mein translate karo.","translation","I want to increase my salary.","'I want to increase' = first person want. 'My salary' = meri salary.","`I want to increase my salary.` = professional desire.",5),
  q("d11-t2-s2-q02","d11-t2-s2","'Woh naya phone khareedna chahta hai.' ko English mein translate karo.","translation","He wants to buy a new phone.","'He wants to buy' = third person singular. 'A new phone' = naya phone.","`He wants to buy a new phone.` = third person want.",5),
  q("d11-t2-s2-q03","d11-t2-s2","'Main chahta hun ki mera bhai doctor bane.' ko English mein translate karo.","translation","I want my brother to become a doctor.","'I want + my brother (object) + to become'. Causative want structure.","`I want my brother to become a doctor.` = want + object + to + V1.",8),
  q("d11-t2-s2-q04","d11-t2-s2","'Woh chahti hai ki uske bacche English mein baat karein.' ko English mein translate karo.","translation","She wants her children to speak in English.","'She wants + her children (object) + to speak'. Desire for others.","`She wants her children to speak in English.` = want + object + to + V1.",8),

  // ── d11-t2-s3: Common errors ──
  q("d11-t2-s3-q01","d11-t2-s3","Error detect karo: 'I want to you come here.'","error_detection","I want you to come here.","Correct structure: want + object + to + verb. Not 'want + to + object'.","`I want you to come here` = sahi. `want to you` galat structure hai.",8,{a:"I want to you come here.",b:"I want you to coming here.",c:"I want you to come here.",d:"I wants you to come here."}),
  q("d11-t2-s3-q02","d11-t2-s3","Error detect karo: 'She wants him go to the market.'","error_detection","She wants him to go to the market.","'Want + object + to + verb'. The word 'to' is missing between 'him' and 'go'.","`Him` ke baad `to` chahiye. She wants him to go = correct.",8,{a:"She wants him go to the market.",b:"She want him to go to the market.",c:"She wants him to go to the market.",d:"She wants him going to the market."}),
];

// Day 11 - Topic 3: Want in context
export const DAY_11_T3_QUESTIONS: PracticeQ[] = [
  // ── d11-t3-s1: Daily life wants ──
  q("d11-t3-s1-q01","d11-t3-s1","'Main pizza khaana chahta hun.' ko English mein translate karo.","translation","I want to eat pizza.","Simple want: I want to + eat. Pizza = pizza.","`I want to eat pizza.` = I ke sath want to.",5),
  q("d11-t3-s1-q02","d11-t3-s1","'Woh kuch din ke liye chutti lena chahti hai.' ko English mein translate karo.","translation","She wants to take a few days off.","'She wants to take a few days off' = chutti lena chahna.","`She wants to take a few days off.` = third person singular want.",5),
  q("d11-t3-s1-q03","d11-t3-s1","'Mere dost kal beach jaana chahte hain.' ko English mein translate karo.","translation","My friends want to go to the beach tomorrow.","'My friends want to go' = third person plural. 'Tomorrow' = kal.","`My friends want to go to the beach tomorrow.` = plural want.",5),
  q("d11-t3-s1-q04","d11-t3-s1","'Main dono languages mein fluent hona chahta hun.' ko English mein translate karo.","translation","I want to be fluent in both languages.","'I want to be' = I want to + be (base verb). 'Fluent in both languages' = dono languages mein fluent.","`I want to be fluent in both languages.` = want to + be + adjective.",8),
  q("d11-t3-s1-q05","d11-t3-s1","'Woh apna khud ka business shuru karna chahta hai.' ko English mein translate karo.","translation","He wants to start his own business.","'He wants to start' = third person. 'His own business' = apna khud ka business.","`He wants to start his own business.` = professional want.",8),

  // ── d11-t3-s2: What do you want? questions ──
  q("d11-t3-s2-q01","d11-t3-s2","'Tum zindagi mein kya pana chahte ho?' ko English mein translate karo.","translation","What do you want to achieve in life?","'What do you want to...?' = kya tum...chahte ho? Deep life question.","`What do you want to achieve in life?` = important life question.",8),
  q("d11-t3-s2-q02","d11-t3-s2","'Kya tum apni English improve karna chahte ho?' ko English mein translate karo.","translation","Do you want to improve your English?","'Do you want to improve?' = Yes/No question with want.","`Do you want to improve your English?` = Yes/No question.",5),
  q("d11-t3-s2-q03","d11-t3-s2","'Woh kya banana chahta hai jab bada hoga?' ko English mein translate karo.","translation","What does he want to become when he grows up?","'What does he want to become?' = third person question. 'When he grows up' = bada hokar.","`What does he want to become when he grows up?` = third person question.",8),

  // ── d11-t3-s3: Mix questions ──
  q("d11-t3-s3-q01","d11-t3-s3","Which is CORRECT?","mcq","She wants to become a doctor.","'She' = third person singular = 'wants to'. Not 'want to'.","`She wants to become a doctor.` = third person singular = wants.",5,{a:"She want to become a doctor.",b:"She wants to became a doctor.",c:"She wants to become a doctor.",d:"She wanting to become a doctor."}),
  q("d11-t3-s3-q02","d11-t3-s3","'I want + to + base verb' ka ek example do.","translation","I want to travel the world.","Example of want to structure: I want to + travel (base verb). World = duniya.","`I want to travel the world.` = want to + base verb example.",5),
  q("d11-t3-s3-q03","d11-t3-s3","'Mujhe office mein promote hona hai.' ko English mein translate karo.","translation","I want to get promoted at work.","'I want to get promoted' = promote hona chahna. 'At work' = office mein.","`I want to get promoted at work.` = professional aspiration.",8),
];

// Day 11 - Topic 4: Vocabulary
export const DAY_11_T4_QUESTIONS: PracticeQ[] = [
  // ── d11-t4-s1: Key words ──
  q("d11-t4-s1-q01","d11-t4-s1","'Desire' ka Hindi mein kya matlab hai?","mcq","Ichha / Chahna","Desire = strong wish or want. I have a desire to travel = mujhe travel karne ki ichha hai.","`Desire` = ichha / chahna. Strong want.",5,{a:"Ghabrana",b:"Ichha / Chahna",c:"Rokna",d:"Paana"}),
  q("d11-t4-s1-q02","d11-t4-s1","'Aspire' ka kya matlab hai?","mcq","Kuch pane ki uchch ambition rakhna","Aspire = to have strong ambition to achieve something great.","`Aspire` = badi ambition rakhna. He aspires to become a leader.",5,{a:"Rokna",b:"Bhoolna",c:"Kuch pane ki uchch ambition rakhna",d:"Darna"}),
  q("d11-t4-s1-q03","d11-t4-s1","'Goal' ka Hindi mein kya matlab hai?","mcq","Lakshya / Uddeshya","Goal = aim or objective. My goal is to become fluent = mera lakshya fluent banana hai.","`Goal` = lakshya / uddeshya. I have a goal.",5,{a:"Niyam",b:"Kaam",c:"Lakshya / Uddeshya",d:"Jawab"}),
  q("d11-t4-s1-q04","d11-t4-s1","'Main career mein aage badhna chahta hun.' ko English mein translate karo.","translation","I want to advance in my career.","'I want to advance' = aage badhna chahna. 'In my career' = career mein.","`I want to advance in my career.` = professional aspiration.",8),
  q("d11-t4-s1-q05","d11-t4-s1","'Woh apni team ko motivate karna chahti hain.' ko English mein translate karo.","translation","She wants to motivate her team.","'She wants to motivate' = third person. 'Her team' = uski team.","`She wants to motivate her team.` = leadership want.",5),

  // ── d11-t4-s2: Fill in the blanks ──
  q("d11-t4-s2-q01","d11-t4-s2","Fill: 'My sister ___ to become a pilot.'","fill_blank","wants","My sister = third person singular = 'wants to'.","`My sister wants to` = third person. wants correct hai.",5),
  q("d11-t4-s2-q02","d11-t4-s2","Fill: '___ you want to attend the conference?'","fill_blank","Do","Question: Do + you + want to...? First/second person question.","`Do you want to attend?` = question with do.",5),
  q("d11-t4-s2-q03","d11-t4-s2","Fill: 'He ___ to improve his communication skills.'","fill_blank","wants","He = third person singular = 'wants to'.","`He wants to` = third person singular.",5),

  // ── d11-t4-s3: Professional wants ──
  q("d11-t4-s3-q01","d11-t4-s3","Interview mein 'want' kaise use karein?","translation","I want to contribute to the company's growth.","Professional answer. I want to + contribute. Shows ambition and team spirit.","`I want to contribute to the company's growth.` = interview answer.",8),
  q("d11-t4-s3-q02","d11-t4-s3","'Company ki success ke liye main kya karna chahta hun?' ka English answer do.","translation","I want to work hard and deliver excellent results.","Shows professional desire. I want to + work hard + deliver excellent results.","`I want to work hard and deliver excellent results.` = professional want.",8),
];

// Day 11 - Topic 5: Practice
export const DAY_11_T5_QUESTIONS: PracticeQ[] = [
  // ── d11-t5-s1: Translation ──
  q("d11-t5-s1-q01","d11-t5-s1","'Main apne parents ke sath quality time spend karna chahta hun.' ko English mein translate karo.","translation","I want to spend quality time with my parents.","I want to spend = main chahta hun. With my parents = apne parents ke sath.","`I want to spend quality time with my parents.` = personal want.",5),
  q("d11-t5-s1-q02","d11-t5-s1","'Meri company chahti hai ki main zyada clients laaun.' ko English mein translate karo.","translation","My company wants me to bring more clients.","'Wants + me (object) + to bring'. Professional want + object structure.","`My company wants me to bring more clients.` = want + object + to + V1.",8),
  q("d11-t5-s1-q03","d11-t5-s1","'Woh apni life mein peace chahti hai.' ko English mein translate karo.","translation","She wants peace in her life.","'She wants peace' = direct object (no 'to' needed when want = desire for a thing, not action).","`She wants peace in her life.` = wants + noun (direct object).",5),
  q("d11-t5-s1-q04","d11-t5-s1","'Main chahta hun ki duniya ek behtar jagah bane.' ko English mein translate karo.","translation","I want the world to become a better place.","'I want + the world (object) + to become'. Philosophical want.","`I want the world to become a better place.` = want + object + to + V1.",10),
  q("d11-t5-s1-q05","d11-t5-s1","'Tum kya pana chahte ho is course se?' ko English mein translate karo.","translation","What do you want to achieve from this course?","'What do you want to achieve?' = question with want. 'From this course' = is course se.","`What do you want to achieve from this course?` = question form.",8),

  // ── d11-t5-s2: Error detection ──
  q("d11-t5-s2-q01","d11-t5-s2","Error detect karo: 'They wants to improve their English.'","error_detection","They want to improve their English.","'They' = plural, use 'want to' (not 'wants to'). Wants = He/She/It only.","`They` = plural, isliye `want to` chahiye. `Wants` galat hai.",5,{a:"They wants to improve their English.",b:"They want to improve their English.",c:"They are wanting to improve their English.",d:"They wanted to improve their English."}),
  q("d11-t5-s2-q02","d11-t5-s2","Error detect karo: 'Do she want to come?'","error_detection","Does she want to come?","'She' = third person singular, so use 'Does' not 'Do' in questions.","`She` = third person, isliye `Does` chahiye, `Do` nahi.",5,{a:"Do she want to come?",b:"Does she wants to come?",c:"Does she want to come?",d:"Is she want to come?"}),
  q("d11-t5-s2-q03","d11-t5-s2","Error detect karo: 'She wants to going out.'","error_detection","She wants to go out.","After 'wants to', use base verb (go), not 'going'. Want + to + base verb.","`Wants to` ke baad base verb chahiye. `going` galat, `go` sahi hai.",5,{a:"She wants to going out.",b:"She wants to goes out.",c:"She wants to go out.",d:"She want to go out."}),

  // ── d11-t5-s3: Mixed ──
  q("d11-t5-s3-q01","d11-t5-s3","'Tum kya khana chahte ho?' ko English mein translate karo.","translation","What do you want to eat?","'What do you want to eat?' = kya tum khaana chahte ho? Question with want.","`What do you want to eat?` = want ka question.",5),
  q("d11-t5-s3-q02","d11-t5-s3","'Woh apna startup launch karna chahta hai.' ko English mein translate karo.","translation","He wants to launch his startup.","'He wants to launch' = third person. 'His startup' = apna startup.","`He wants to launch his startup.` = third person want.",8),
  q("d11-t5-s3-q03","d11-t5-s3","'Main apni team ko aage le jaana chahta hun.' ko English mein translate karo.","translation","I want to lead my team forward.","'I want to lead' = first person. 'My team forward' = apni team aage.","`I want to lead my team forward.` = leadership aspiration.",8),
];

// ── Export all Day 11 questions ──
export const ALL_DAY_11_QUESTIONS: PracticeQ[] = [
  ...DAY_11_T1_QUESTIONS,
  ...DAY_11_T2_QUESTIONS,
  ...DAY_11_T3_QUESTIONS,
  ...DAY_11_T4_QUESTIONS,
  ...DAY_11_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 12: USE OF WANTED (Past desire — wanted to, was going to)
// Subtopics: d12-t1-s1, d12-t1-s2, d12-t1-s3, d12-t1-s4
//             d12-t2-s1, d12-t2-s2, d12-t2-s3
//             d12-t3-s1, d12-t3-s2, d12-t3-s3
//             d12-t4-s1, d12-t4-s2, d12-t4-s3
//             d12-t5-s1, d12-t5-s2, d12-t5-s3
// ══════════════════════════════════════════════════════════════

// Day 12 - Topic 1: Wanted to basics
export const DAY_12_T1_QUESTIONS: PracticeQ[] = [
  // ── d12-t1-s1: Introduction ──
  q("d12-t1-s1-q01","d12-t1-s1","'Wanted to' ka kya matlab hai?","mcq","Pehle chahta tha (past desire)","'Wanted to' = past desire. Something you wanted to do in the past.","`Wanted to` = past mein chahna. Abhi nahi chahte ya hua ya nahi hua.",5,{a:"Abhi chahna",b:"Bhavishya mein chahna",c:"Pehle chahta tha (past desire)",d:"Zaroor karna"}),
  q("d12-t1-s1-q02","d12-t1-s1","'Main doctor banna chahta tha.' ko English mein translate karo.","translation","I wanted to become a doctor.","'I wanted to' = main chahta tha. 'To become a doctor' = doctor banna.","`I wanted to become a doctor.` = main doctor banna chahta tha.",5,
    undefined,[{word:"wanted to",meaning:"chahta tha (past)"}]),
  q("d12-t1-s1-q03","d12-t1-s1","'Wanted' kab use karte hain?","mcq","Jab past mein desire/wish thi","'Wanted' = past tense of 'want'. Used for desires that existed in the past.","`Wanted` = past mein desire. Past events ya unfulfilled wishes ke liye.",5,{a:"Present desire ke liye",b:"Future planning ke liye",c:"Jab past mein desire/wish thi",d:"Permission ke liye"}),
  q("d12-t1-s1-q04","d12-t1-s1","'Woh bahut ghumna chahti thi.' ko English mein translate karo.","translation","She wanted to travel a lot.","'She wanted to' = woh chahti thi (past). 'To travel a lot' = bahut ghumna.","`She wanted to travel a lot.` = past desire.",5),
  q("d12-t1-s1-q05","d12-t1-s1","'Hum log London jaana chahte the.' ko English mein translate karo.","translation","We wanted to go to London.","'We wanted to' = hum chahte the (past). 'To go to London' = London jaana.","`We wanted to go to London.` = past plural desire.",5),
  q("d12-t1-s1-q06","d12-t1-s1","Fill: 'He ___ to become an engineer, but he became a teacher.'","fill_blank","wanted","Past desire that changed. 'Wanted to become' = banana chahta tha.","`He wanted to become an engineer.` = past desire. But = lekin (it changed).",5),
  q("d12-t1-s1-q07","d12-t1-s1","'I wanted to' vs 'I want to' mein kya fark hai?","mcq","Wanted = past, Want = present","'Wanted' = desire in past. 'Want' = desire now.","`Wanted to` = past desire. `Want to` = present desire.",5,{a:"Dono same hain",b:"Wanted = future, Want = present",c:"Wanted = past, Want = present",d:"Wanted = more formal, Want = informal"}),

  // ── d12-t1-s2: Was going to ──
  q("d12-t1-s2-q01","d12-t1-s2","'Was going to' ka kya matlab hai?","mcq","Karne wala tha / plan tha karne ka","'Was going to' = a plan or intention from the past that may or may not have happened.","`Was going to` = past plan ya intention. Karne wala tha.",5,{a:"Karna chahta hun",b:"Karne wala tha / plan tha karne ka",c:"Karna hoga",d:"Kar chuka hun"}),
  q("d12-t1-s2-q02","d12-t1-s2","'Main khaana banana wala tha lekin late ho gaya.' ko English mein translate karo.","translation","I was going to cook food but I got late.","'I was going to' = main karne wala tha. 'But I got late' = lekin late ho gaya.","`I was going to cook but I got late.` = past plan that was interrupted.",8),
  q("d12-t1-s2-q03","d12-t1-s2","'Woh call karne wali thi, lekin phone khatam ho gaya.' ko English mein translate karo.","translation","She was going to call, but her phone died.","'She was going to' = woh karne wali thi. 'But her phone died' = lekin phone khatam ho gaya.","`She was going to call, but her phone died.` = past intention interrupted.",8),
  q("d12-t1-s2-q04","d12-t1-s2","'Woh log kal meeting rakhne wale the.' ko English mein translate karo.","translation","They were going to have a meeting yesterday.","'They were going to' = woh karne wale the. 'Have a meeting' = meeting rakhna.","`They were going to have a meeting yesterday.` = past plan.",8),
  q("d12-t1-s2-q05","d12-t1-s2","'Was going to' aur 'wanted to' mein kya fark hai?","mcq","Was going to = specific plan tha, Wanted to = general desire thi","'Was going to' implies a specific plan. 'Wanted to' = general past desire.","`Was going to` = specific plan. `Wanted to` = general past wish/desire.",8,{a:"Dono same hain",b:"Was going to = specific plan tha, Wanted to = general desire thi",c:"Was going to = future, Wanted to = past",d:"Koi fark nahi"}),

  // ── d12-t1-s3: Negative wanted ──
  q("d12-t1-s3-q01","d12-t1-s3","'Main wahan nahin jaana chahta tha.' ko English mein translate karo.","translation","I didn't want to go there.","Negative past: 'didn't want to'. 'I didn't want to go' = main nahin jaana chahta tha.","`I didn't want to go there.` = negative past want.",5),
  q("d12-t1-s3-q02","d12-t1-s3","'Woh khaana nahin khaana chahti thi.' ko English mein translate karo.","translation","She didn't want to eat.","'She didn't want to' = woh nahin chahti thi. 'To eat' = khaana.","`She didn't want to eat.` = negative past want.",5),
  q("d12-t1-s3-q03","d12-t1-s3","Negative 'wanted to' ka formula kya hai?","mcq","Subject + didn't + want + to + base verb","Negative past want = didn't want to + base verb. Same for all subjects.","`Subject + didn't want to + V1` = negative past want.",5,{a:"Subject + not wanted + to + V1",b:"Subject + didn't + want + to + base verb",c:"Subject + didn't + wanted + to + V1",d:"Subject + hadn't + wanted + to + V1"}),

  // ── d12-t1-s4: Question with wanted ──
  q("d12-t1-s4-q01","d12-t1-s4","'Past mein tum kya banna chahte the?' ko English mein translate karo.","translation","What did you want to become in the past?","'What did you want to...?' = past question with wanted. 'In the past' = pehle.","`What did you want to become in the past?` = past desire question.",5),
  q("d12-t1-s4-q02","d12-t1-s4","'Kya woh wahan jaana chahta tha?' ko English mein translate karo.","translation","Did he want to go there?","'Did he want to?' = past question. 'Go there' = wahan jaana.","`Did he want to go there?` = past question form.",5),
];

// Day 12 - Topic 2: Wanted in context
export const DAY_12_T2_QUESTIONS: PracticeQ[] = [
  // ── d12-t2-s1: Life stories ──
  q("d12-t2-s1-q01","d12-t2-s1","'Bachpan mein main pilot banna chahta tha.' ko English mein translate karo.","translation","I wanted to become a pilot as a child.","'Wanted to become' = banna chahta tha. 'As a child' = bachpan mein.","`I wanted to become a pilot as a child.` = childhood dream.",5),
  q("d12-t2-s1-q02","d12-t2-s1","'Usne engineering karni chahte thi lekin usne medical choose kiya.' ko English mein translate karo.","translation","She wanted to do engineering but she chose medical.","Past desire that changed. 'Wanted to do' = karni chahti thi. 'But she chose' = lekin usne choose kiya.","`She wanted to do engineering but she chose medical.` = past desire + change.",8),
  q("d12-t2-s1-q03","d12-t2-s1","'Hum log beach par jaana chahte the magar baarish aayi.' ko English mein translate karo.","translation","We wanted to go to the beach but it rained.","'We wanted to go' = hum chahte the. 'But it rained' = magar baarish aayi.","`We wanted to go to the beach but it rained.` = past desire interrupted.",5),
  q("d12-t2-s1-q04","d12-t2-s1","'Main kal early uthna chahta tha, lekin neend nahi aaya.' ko English mein translate karo.","translation","I wanted to wake up early yesterday, but I couldn't sleep.","Past desire that failed. 'Wanted to wake up early' = jaldi uthna chahta tha.","`I wanted to wake up early yesterday, but I couldn't sleep.` = unfulfilled past want.",8),

  // ── d12-t2-s2: Professional past wants ──
  q("d12-t2-s2-q01","d12-t2-s2","'Woh us company mein kaam karna chahta tha.' ko English mein translate karo.","translation","He wanted to work at that company.","Past professional desire. 'He wanted to work' = woh kaam karna chahta tha.","`He wanted to work at that company.` = past professional desire.",5),
  q("d12-t2-s2-q02","d12-t2-s2","'Company ek naya branch kholna chahti thi.' ko English mein translate karo.","translation","The company wanted to open a new branch.","'The company wanted to' = company chahti thi. 'Open a new branch' = naya branch kholna.","`The company wanted to open a new branch.` = past company desire.",8),
  q("d12-t2-s2-q03","d12-t2-s2","'Manager chahta tha ki team zyada mehnat kare.' ko English mein translate karo.","translation","The manager wanted the team to work harder.","'Wanted + object (the team) + to work harder'. Past causative want.","`The manager wanted the team to work harder.` = past want + object.",8),

  // ── d12-t2-s3: Error detection ──
  q("d12-t2-s3-q01","d12-t2-s3","Error detect karo: 'I wanted to went home early.'","error_detection","I wanted to go home early.","After 'wanted to', use base verb (go), not 'went' (V2).","`Wanted to` ke baad base verb chahiye. `went` galat, `go` sahi.",5,{a:"I wanted to went home early.",b:"I wanted to going home early.",c:"I wanted to go home early.",d:"I was wanted to go home early."}),
  q("d12-t2-s3-q02","d12-t2-s3","Error detect karo: 'She didn't wanted to eat.'","error_detection","She didn't want to eat.","After 'didn't', always use base form 'want', not 'wanted'.","`Didn't` ke baad base verb `want` chahiye, `wanted` nahi.",5,{a:"She didn't wanted to eat.",b:"She didn't want to eating.",c:"She didn't want to eat.",d:"She not wanted to eat."}),
];

// Day 12 - Topic 3: Was/Were going to practice
export const DAY_12_T3_QUESTIONS: PracticeQ[] = [
  // ── d12-t3-s1: Was going to sentences ──
  q("d12-t3-s1-q01","d12-t3-s1","'Main ghumne jaane wala tha lekin baarish aa gayi.' ko English mein translate karo.","translation","I was going to go out but it rained.","'I was going to go out' = main jaane wala tha. 'But it rained' = lekin baarish aayi.","`I was going to go out but it rained.` = past plan interrupted.",8),
  q("d12-t3-s1-q02","d12-t3-s1","'Woh kal call karne wali thi.' ko English mein translate karo.","translation","She was going to call yesterday.","'She was going to call' = woh call karne wali thi. 'Yesterday' = kal.","`She was going to call yesterday.` = past intention.",8),
  q("d12-t3-s1-q03","d12-t3-s1","'Hum log trip plan karne wale the.' ko English mein translate karo.","translation","We were going to plan a trip.","'We were going to plan' = hum plan karne wale the.","`We were going to plan a trip.` = plural past plan.",8),
  q("d12-t3-s1-q04","d12-t3-s1","Fill: 'I ___ ___ tell you this yesterday.'","fill_blank","was going to","Past plan: 'I was going to tell you' = main kal yeh batane wala tha.","`I was going to tell you this yesterday.` = past unfulfilled plan.",8),
  q("d12-t3-s1-q05","d12-t3-s1","'Woh apna project kal submit karne wala tha.' ko English mein translate karo.","translation","He was going to submit his project yesterday.","'He was going to submit' = woh submit karne wala tha. 'Yesterday' = kal.","`He was going to submit his project yesterday.` = past plan.",8),

  // ── d12-t3-s2: Mix review ──
  q("d12-t3-s2-q01","d12-t3-s2","'Wanted to' aur 'Was going to' dono ko ek sentence mein use karo.","translation","I wanted to travel but I was going to save money instead.","Combining wanted to (general desire) and was going to (specific plan).","`I wanted to travel but I was going to save money.` = both structures.",10),
  q("d12-t3-s2-q02","d12-t3-s2","'Usse bahut kuch haasil karna tha lekin woh try nahin kiya.' ko English mein translate karo.","translation","He wanted to achieve a lot but he didn't try.","'Wanted to achieve' = haasil karna chahta tha. 'But he didn't try' = lekin koshish nahin ki.","`He wanted to achieve a lot but he didn't try.` = past unfulfilled desire.",8),

  // ── d12-t3-s3: Error detection ──
  q("d12-t3-s3-q01","d12-t3-s3","Error detect karo: 'She was going to called him.'","error_detection","She was going to call him.","After 'was going to', use base verb (call), not 'called'.","`Was going to` ke baad base verb chahiye. `called` galat, `call` sahi.",8,{a:"She was going to called him.",b:"She was going to calling him.",c:"She was going to call him.",d:"She is going to call him."}),
  q("d12-t3-s3-q02","d12-t3-s3","Error detect karo: 'They were wanting to go.'","error_detection","They wanted to go.","'Was wanting/Were wanting' is not used in standard English. Use simple past 'wanted to'.","`Were wanting` galat hai. Sahi form `wanted to` hai.",5,{a:"They were wanting to go.",b:"They were gone.",c:"They wanted to go.",d:"They was wanting to go."}),
];

// Day 12 - Topic 4: Vocabulary
export const DAY_12_T4_QUESTIONS: PracticeQ[] = [
  // ── d12-t4-s1: Past desire vocabulary ──
  q("d12-t4-s1-q01","d12-t4-s1","'Regret' ka Hindi mein kya matlab hai?","mcq","Pachtawa / Afsos karna","Regret = to feel sorry about something that happened or didn't happen.","`Regret` = pachtawa / afsos. I regret not studying harder = main pehle zyada na padhne ka afsos karta hun.",5,{a:"Khushi",b:"Pachtawa / Afsos karna",c:"Kamiyaabi",d:"Umeed"}),
  q("d12-t4-s1-q02","d12-t4-s1","'Mujhe afsos hai ki main us waqt aur mehnat nahin kar saka.' ko English mein translate karo.","translation","I wish I had worked harder at that time.","'I wish I had' = expressing regret. Past perfect with wish shows unfulfilled past desire.","`I wish I had worked harder.` = afsos sentence. Past unfulfilled desire.",8),
  q("d12-t4-s1-q03","d12-t4-s1","'Dream' ka ek sentence banao 'wanted to' se.","translation","I always wanted to fulfill my dream of becoming an author.","'Wanted to fulfill my dream' = apna sapna poora karna chahta tha.","`I always wanted to fulfill my dream.` = wanted to with past aspiration.",8),
  q("d12-t4-s1-q04","d12-t4-s1","'Intention' ka Hindi mein kya matlab hai?","mcq","Irada / Niyat","Intention = purpose or plan to do something. My intention is to help = mera irada madad karna hai.","`Intention` = irada / niyat. Past intention = tha karne ka irada.",5,{a:"Khawahish",b:"Darna",c:"Irada / Niyat",d:"Yaad rakhna"}),

  // ── d12-t4-s2: Fill in the blanks ──
  q("d12-t4-s2-q01","d12-t4-s2","Fill: 'She ___ ___ visit her grandparents but she was too busy.'","fill_blank","wanted to","Past desire: 'She wanted to visit' = woh milne jaana chahti thi.","`She wanted to visit` = past desire interrupted.",5),
  q("d12-t4-s2-q02","d12-t4-s2","Fill: 'I ___ ___ ___ go to the gym this morning but I overslept.'","fill_blank","was going to","Past plan: 'I was going to go' = main jaane wala tha.","`I was going to go to the gym.` = past plan that didn't happen.",8),
  q("d12-t4-s2-q03","d12-t4-s2","Fill: 'He ___ ___ buy a car, but the price was too high.'","fill_blank","wanted to","Past desire blocked by obstacle. 'Wanted to buy' = khareedna chahta tha.","`He wanted to buy a car` = past desire blocked.",5),

  // ── d12-t4-s3: Translation ──
  q("d12-t4-s3-q01","d12-t4-s3","'Mujhe aaj kal apni English bahut improve karni thi.' ko English mein translate karo.","translation","I really wanted to improve my English a lot recently.","'Really wanted to improve' = bahut chahta tha. 'Recently' = aaj kal.","`I really wanted to improve my English recently.` = past desire.",8),
  q("d12-t4-s3-q02","d12-t4-s3","'Woh ek leader ki tarah kaam karna chahta tha.' ko English mein translate karo.","translation","He wanted to work like a leader.","'Wanted to work like a leader' = ek leader ki tarah kaam karna chahta tha.","`He wanted to work like a leader.` = past professional desire.",5),
];

// Day 12 - Topic 5: Practice
export const DAY_12_T5_QUESTIONS: PracticeQ[] = [
  // ── d12-t5-s1: Comprehensive translation ──
  q("d12-t5-s1-q01","d12-t5-s1","'School mein mera favourite subject science tha aur main scientist banna chahta tha.' ko English mein translate karo.","translation","My favourite subject in school was science and I wanted to become a scientist.","Childhood memory with past tense + wanted to. 'In school' = school mein.","`I wanted to become a scientist.` = childhood aspiration.",8),
  q("d12-t5-s1-q02","d12-t5-s1","'Main office time par pahunchna chahta tha lekin traffic tha.' ko English mein translate karo.","translation","I wanted to reach the office on time but there was traffic.","Past desire blocked by reality. 'On time' = samay par. 'There was traffic' = traffic tha.","`I wanted to reach on time but there was traffic.` = reality vs desire.",5),
  q("d12-t5-s1-q03","d12-t5-s1","'Woh ek book likhna chahti thi aur usne likh bhi li.' ko English mein translate karo.","translation","She wanted to write a book and she did write it.","Past desire fulfilled: 'Wanted to write' + 'she did write'. Positive outcome.","`She wanted to write a book and she did write it.` = fulfilled desire.",8),
  q("d12-t5-s1-q04","d12-t5-s1","'Hum log cinema jaane wale the lekin film cancel ho gayi.' ko English mein translate karo.","translation","We were going to go to the cinema but the movie was cancelled.","Past plan cancelled: 'Were going to go' + 'but was cancelled'.","`We were going to go to the cinema but the movie was cancelled.` = cancelled plan.",8),

  // ── d12-t5-s2: Error detection ──
  q("d12-t5-s2-q01","d12-t5-s2","Error detect karo: 'What he wanted to do in past?'","error_detection","What did he want to do in the past?","Past question: 'What did + subject + want to...?' Use 'did' for past questions.","`Did he want to` = past question. `did` zaroor chahiye.",5,{a:"What he wanted to do in past?",b:"What he did want to do in past?",c:"What did he want to do in the past?",d:"What does he wanted to do in past?"}),
  q("d12-t5-s2-q02","d12-t5-s2","Error detect karo: 'She was going to went to the party.'","error_detection","She was going to go to the party.","After 'was going to', use base verb (go), not 'went'.","`Was going to` ke baad base verb `go` chahiye, `went` nahi.",8,{a:"She was going to went to the party.",b:"She was going to going to the party.",c:"She was going to go to the party.",d:"She is going to go to the party."}),

  // ── d12-t5-s3: Mixed ──
  q("d12-t5-s3-q01","d12-t5-s3","'Past mein tumhari kya wish thi?' ko English mein translate karo.","translation","What did you want to do in the past?","'What did you want to do?' = past desire question.","`What did you want to do in the past?` = past desire question.",5),
  q("d12-t5-s3-q02","d12-t5-s3","'Ek unfulfilled childhood dream ko English mein describe karo.'","translation","When I was young, I wanted to become a footballer but I focused on academics instead.","Story of past unfulfilled desire with 'wanted to' + 'but'.","`When I was young, I wanted to become a footballer.` = past dream story.",10),
];

// ── Export all Day 12 questions ──
export const ALL_DAY_12_QUESTIONS: PracticeQ[] = [
  ...DAY_12_T1_QUESTIONS,
  ...DAY_12_T2_QUESTIONS,
  ...DAY_12_T3_QUESTIONS,
  ...DAY_12_T4_QUESTIONS,
  ...DAY_12_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 13: USE OF LET (let me, let him, let them, let us)
// Subtopics: d13-t1-s1, d13-t1-s2, d13-t1-s3, d13-t1-s4
//             d13-t2-s1, d13-t2-s2, d13-t2-s3
//             d13-t3-s1, d13-t3-s2, d13-t3-s3
//             d13-t4-s1, d13-t4-s2, d13-t4-s3
//             d13-t5-s1, d13-t5-s2, d13-t5-s3
// ══════════════════════════════════════════════════════════════

// Day 13 - Topic 1: Let basics
export const DAY_13_T1_QUESTIONS: PracticeQ[] = [
  // ── d13-t1-s1: Introduction to Let ──
  q("d13-t1-s1-q01","d13-t1-s1","'Let' ka matlab kya hai?","mcq","Kisi ko kuch karne dena (allow/permit)","'Let' = to allow or permit someone to do something. Let him go = use jaane do.","`Let` = allow karna / anumati dena. Let me = mujhe karne do.",5,{a:"Rokna",b:"Kisi ko kuch karne dena (allow/permit)",c:"Kisi ko kuch karna banana",d:"Khud karna"}),
  q("d13-t1-s1-q02","d13-t1-s1","'Let me' ka formula kya hai?","mcq","Let + me + base verb","'Let me + base verb' = mujhe karne do. Let me try = mujhe try karne do.","`Let me + V1` = mujhe karne do. Let me explain = mujhe explain karne do.",5,{a:"Let + me + to + V1",b:"Let + me + V1+ing",c:"Let + me + base verb",d:"Let + me + V2"}),
  q("d13-t1-s1-q03","d13-t1-s1","'Mujhe yeh kaam karne do.' ko English mein translate karo.","translation","Let me do this work.","'Let me do' = mujhe karne do. 'This work' = yeh kaam.","`Let me do this work.` = mujhe karne do.",5,
    undefined,[{word:"let me",meaning:"mujhe karne do"}]),
  q("d13-t1-s1-q04","d13-t1-s1","'Use yahan baithne do.' ko English mein translate karo.","translation","Let him sit here.","'Let him sit here' = use yahan baithne do. Him = uss ko (male).","`Let him sit here.` = use baithne do.",5),
  q("d13-t1-s1-q05","d13-t1-s1","'Let' ke baad verb ki kaisi form aati hai?","mcq","Base form (V1)","After 'Let + object', always use base verb. Let him go (not 'goes' or 'going').","`Let` ke baad object phir base verb. Let him go, Let me try.",5,{a:"V2 (past form)",b:"V1 + ing",c:"To + V1",d:"Base form (V1)"}),
  q("d13-t1-s1-q06","d13-t1-s1","'Unhe baat karne do.' ko English mein translate karo.","translation","Let them speak.","'Let them speak' = unhe baat karne do. Them = unhe.","`Let them speak.` = unhe bolne do.",5),
  q("d13-t1-s1-q07","d13-t1-s1","'Use wahan jaane do.' ko English mein translate karo.","translation","Let her go there.","'Let her go there' = use wahan jaane do. Her = us ko (female).","`Let her go there.` = use jaane do.",5),

  // ── d13-t1-s2: Let with different objects ──
  q("d13-t1-s2-q01","d13-t1-s2","'Let me explain.' ka Hindi mein kya matlab hai?","translation","Mujhe explain karne do.","'Let me explain' = mujhe samjhane do. Very common phrase in English.","`Let me explain.` = mujhe samjhane do. Bahut common phrase.",5),
  q("d13-t1-s2-q02","d13-t1-s2","'Bacche ko khilone se khelne do.' ko English mein translate karo.","translation","Let the child play with toys.","'Let the child play' = bacche ko khelne do. 'With toys' = khilone se.","`Let the child play with toys.` = permission structure.",5),
  q("d13-t1-s2-q03","d13-t1-s2","'Please mujhe yeh finish karne do.' ko English mein translate karo.","translation","Please let me finish this.","'Please let me finish' = please mujhe finish karne do. Polite request.","`Please let me finish this.` = polite let request.",5),
  q("d13-t1-s2-q04","d13-t1-s2","'Unhe apna decision khud lene do.' ko English mein translate karo.","translation","Let them make their own decision.","'Let them make' = unhe banana karne do. 'Their own decision' = apna faisla.","`Let them make their own decision.` = independence + let.",8),
  q("d13-t1-s2-q05","d13-t1-s2","Identify the error: 'Let me to go home.'","error_detection","Let me go home.","'Let me + base verb'. No 'to' between 'let me' and the verb.","`Let me` ke baad seedha base verb aata hai. `to` nahin aata. Let me go = correct.",5,{a:"Let me to go home.",b:"Let me goes home.",c:"Let me go home.",d:"Let me going home."}),

  // ── d13-t1-s3: Let us (formal) ──
  q("d13-t1-s3-q01","d13-t1-s3","'Let us' ka use kab karte hain?","mcq","Jab formal suggestion ya permission chahte hon","'Let us' = formal version of 'Let's'. Used in formal speech or writing.","`Let us` = formal version. Let us discuss = chaliye discuss karte hain. (Formal)",5,{a:"Jab casual suggestion den",b:"Jab formal suggestion ya permission chahte hon",c:"Sirf questions mein",d:"Negative sentences mein"}),
  q("d13-t1-s3-q02","d13-t1-s3","'Let us celebrate this achievement.' ka Hindi mein kya matlab hai?","translation","Chaliye is uplabdhi ko celebrate karte hain.","'Let us celebrate' = chaliye celebrate karte hain. Formal inclusive suggestion.","`Let us celebrate this achievement.` = formal inclusive suggestion.",5),
  q("d13-t1-s3-q03","d13-t1-s3","'Let us not lose hope.' ka Hindi mein kya matlab hai?","translation","Chaliye umeed mat chorte.","'Let us not' = negative let us. 'Lose hope' = umeed chorna.","`Let us not lose hope.` = formal negative suggestion.",5),

  // ── d13-t1-s4: Real-life Let sentences ──
  q("d13-t1-s4-q01","d13-t1-s4","'Chhote ko khilone se khelne do.' ko English mein translate karo.","translation","Let the little one play with toys.","'Let the little one play' = use khelne do. Common parenting sentence.","`Let the little one play with toys.` = parenting context.",5),
  q("d13-t1-s4-q02","d13-t1-s4","'Doctor ko patient ko check karne do.' ko English mein translate karo.","translation","Let the doctor check the patient.","'Let the doctor check' = doctor ko check karne do. Allowing professional action.","`Let the doctor check the patient.` = professional permission.",5),
];

// Day 13 - Topic 2: Let in professional context
export const DAY_13_T2_QUESTIONS: PracticeQ[] = [
  // ── d13-t2-s1: Office use ──
  q("d13-t2-s1-q01","d13-t2-s1","'Mujhe is project ko handle karne do.' ko English mein translate karo.","translation","Let me handle this project.","'Let me handle' = mujhe handle karne do. Showing initiative at work.","`Let me handle this project.` = professional initiative.",5),
  q("d13-t2-s1-q02","d13-t2-s1","'Team ko creativity ke liye kuch space do.' ko English mein translate karo.","translation","Let the team have some space for creativity.","'Let the team have space' = team ko space dena. Management sentence.","`Let the team have some space for creativity.` = management context.",8),
  q("d13-t2-s1-q03","d13-t2-s1","'Mujhe meeting mein apna point explain karne do.' ko English mein translate karo.","translation","Let me explain my point in the meeting.","Professional: 'Let me explain my point' = mujhe apna point samjhane do.","`Let me explain my point in the meeting.` = meeting participation.",5),
  q("d13-t2-s1-q04","d13-t2-s1","'Naye employee ko seekhne ka mauka do.' ko English mein translate karo.","translation","Let the new employee have the chance to learn.","'Let the new employee have' = naye employee ko chahiye. Mentoring context.","`Let the new employee have the chance to learn.` = mentoring.",8),

  // ── d13-t2-s2: Let + negative ──
  q("d13-t2-s2-q01","d13-t2-s2","'Negative let' ka formula kya hai?","mcq","Don't let + object + base verb","'Don't let' = mat karne do. Don't let him go = use mat jaane do.","`Don't let + object + V1` = negative let. Don't let him go.",5,{a:"Let not + object + V1",b:"Don't let + object + base verb",c:"Not let + object + V1",d:"Let + object + not + V1"}),
  q("d13-t2-s2-q02","d13-t2-s2","'Use yahan mat aane do.' ko English mein translate karo.","translation","Don't let him come here.","'Don't let him come' = use mat aane do. Negative let.","`Don't let him come here.` = negative let.",5),
  q("d13-t2-s2-q03","d13-t2-s2","'Bacchon ko raat tak jaag ke mat khelne do.' ko English mein translate karo.","translation","Don't let the children play till late at night.","'Don't let the children play' = bacchon ko mat khelne do. 'Till late at night' = raat tak.","`Don't let the children play till late at night.` = negative let.",5),
  q("d13-t2-s2-q04","d13-t2-s2","'Tension ko apni kaamyabi ke raaste mein mat aane do.' ko English mein translate karo.","translation","Don't let stress come in the way of your success.","'Don't let stress come' = tension ko mat aane do. Motivational sentence.","`Don't let stress come in the way of your success.` = motivational.",8),

  // ── d13-t2-s3: Error correction ──
  q("d13-t2-s3-q01","d13-t2-s3","Error detect karo: 'Let him to sit down.'","error_detection","Let him sit down.","After 'Let + object', use base verb directly. No 'to'.","`Let him sit down.` = sahi. `to` nahin aata let ke baad.",5,{a:"Let him to sit down.",b:"Let him sits down.",c:"Let him sit down.",d:"Let him sitting down."}),
  q("d13-t2-s3-q02","d13-t2-s3","Error detect karo: 'Don't lets him in.'","error_detection","Don't let him in.","'Don't let' (not 'Don't lets'). 'Let' is already the base verb.","`Don't let` = sahi. `Don't lets` galat hai.",5,{a:"Don't lets him in.",b:"Don't letting him in.",c:"Don't let him in.",d:"Let him not in."}),
];

// Day 13 - Topic 3: Let in common expressions
export const DAY_13_T3_QUESTIONS: PracticeQ[] = [
  // ── d13-t3-s1: Common Let phrases ──
  q("d13-t3-s1-q01","d13-t3-s1","'Let me know.' ka Hindi mein kya matlab hai?","translation","Mujhe batao.","'Let me know' = mujhe bata do. Very common English phrase for asking for information.","`Let me know.` = mujhe batao. Bahut common phrase.",5),
  q("d13-t3-s1-q02","d13-t3-s1","'Let it go.' ka kab use karte hain?","mcq","Jab kisi cheez ko chhodna ho ya bhoolna ho","'Let it go' = bhool jao / chhodh do. Used when you should stop holding on to something.","`Let it go` = chhodh do / bhool jao. Famous English expression.",5,{a:"Jab kuch lena ho",b:"Jab kisi cheez ko chhodna ho ya bhoolna ho",c:"Jab bahar jaana ho",d:"Jab kuch khona ho"}),
  q("d13-t3-s1-q03","d13-t3-s1","'Let me see.' ka kya matlab hai?","mcq","Dekhne do / Sochne do (thinking pause)","'Let me see' = ek second sochne do. Used as a thinking pause in conversation.","`Let me see` = ek moment sochne do. Conversation mein pause ke liye.",5,{a:"Woh dekhne do.",b:"Dekhne do / Sochne do (thinking pause)",c:"Dekha jayega.",d:"Dekh lena."}),
  q("d13-t3-s1-q04","d13-t3-s1","'Let me think about it.' ka Hindi mein kya matlab hai?","translation","Mujhe iske baare mein sochne do.","'Let me think about it' = mujhe iske baare mein sochne do. Common polite response.","`Let me think about it.` = mujhe sochne do. Polite response when needing time.",5),
  q("d13-t3-s1-q05","d13-t3-s1","'Let me check.' ka kya matlab hai?","translation","Mujhe check karne do.","'Let me check' = mujhe check karne do. Used when looking for information.","`Let me check.` = mujhe check karne do. Helpful phrase.",5),
  q("d13-t3-s1-q06","d13-t3-s1","'Let it be.' ka kya matlab hai?","mcq","Rehne do / Jaisi hai waisi rehne do","'Let it be' = rehne do. Famous Beatles song, means 'leave it as it is'.","`Let it be` = rehne do / jaisa hai waisa rehne do. Famous expression.",5,{a:"Woh jaaye.",b:"Rehne do / Jaisi hai waisi rehne do",c:"Ise lo.",d:"Karo ise."}),

  // ── d13-t3-s2: Let in different scenarios ──
  q("d13-t3-s2-q01","d13-t3-s2","'Har kisi ko apni raaye rakhne do.' ko English mein translate karo.","translation","Let everyone have their opinion.","'Let everyone have their opinion' = har kisi ko apni raaye rakhne do.","`Let everyone have their opinion.` = respecting others.",8),
  q("d13-t3-s2-q02","d13-t3-s2","'Mujhe yeh explain karne do please.' ko English mein translate karo.","translation","Please let me explain this.","'Please let me explain' = please mujhe samjhane do. Polite request.","`Please let me explain this.` = polite let request.",5),
  q("d13-t3-s2-q03","d13-t3-s2","'Uske saath honiwale galat cheez ko mat hone do.' ko English mein translate karo.","translation","Don't let anything wrong happen to her.","'Don't let anything wrong happen' = galat mat hone do. Protection sentence.","`Don't let anything wrong happen to her.` = protective negative let.",8),

  // ── d13-t3-s3: Practice mix ──
  q("d13-t3-s3-q01","d13-t3-s3","Which sentence is CORRECT?","mcq","Let the students choose their projects.","'Let the students choose' = let + object + base verb. Correct structure.","`Let the students choose their projects.` = correct let structure.",5,{a:"Let the students to choose their projects.",b:"Let the students choosing their projects.",c:"Let the students choose their projects.",d:"Lets the students choose their projects."}),
  q("d13-t3-s3-q02","d13-t3-s3","'Unhe apna time lene do.' ko English mein translate karo.","translation","Let them take their time.","'Let them take their time' = unhe apna time lene do. Common encouraging phrase.","`Let them take their time.` = common encouraging sentence.",5),
];

// Day 13 - Topic 4: Vocabulary
export const DAY_13_T4_QUESTIONS: PracticeQ[] = [
  // ── d13-t4-s1: Permission vocabulary ──
  q("d13-t4-s1-q01","d13-t4-s1","'Allow' ka Hindi mein kya matlab hai?","mcq","Anumati dena / Izzazat dena","Allow = to give permission. I will allow you to speak = main tumhe bolne ki anumati dunga.","`Allow` = anumati dena. Similar to `let` but more formal.",5,{a:"Rokna",b:"Anumati dena / Izzazat dena",c:"Bhoolna",d:"Dena"}),
  q("d13-t4-s1-q02","d13-t4-s1","'Permit' ka kya matlab hai?","mcq","Sarkari ya official izazat dena","Permit = formal or official allowance. The rules don't permit smoking here.","`Permit` = official permission. More formal than `let` or `allow`.",5,{a:"Inform karna",b:"Rokna",c:"Sarkari ya official izazat dena",d:"Bhoolna"}),
  q("d13-t4-s1-q03","d13-t4-s1","'Let' aur 'Allow' mein kya fark hai?","mcq","Let = casual/conversational, Allow = more formal","'Let' is used in casual everyday speech. 'Allow' is more formal and polished.","`Let` = casual. `Allow` = formal. Let me go vs I am allowed to go.",5,{a:"Koi fark nahi",b:"Let = formal, Allow = casual",c:"Let = casual/conversational, Allow = more formal",d:"Dono same contexts mein use hote hain"}),
  q("d13-t4-s1-q04","d13-t4-s1","'Mujhe presentation dene ki permission do.' ko formal English mein translate karo.","translation","Please allow me to give the presentation.","'Allow me to give' = formal version of 'Let me give'. More professional.","`Please allow me to give the presentation.` = formal permission request.",8),

  // ── d13-t4-s2: More vocabulary ──
  q("d13-t4-s2-q01","d13-t4-s2","'Enable' ka kya matlab hai?","mcq","Kuch karna sambhav banana","Enable = to make something possible. This software enables you to work faster.","`Enable` = kuch karna possible banana. Sambhav karna.",5,{a:"Rokna",b:"Kuch karna sambhav banana",c:"Shuru karna",d:"Khatam karna"}),
  q("d13-t4-s2-q02","d13-t4-s2","'Authorize' ka kya matlab hai?","mcq","Aadhikaarik roop se izazat dena","Authorize = to give official permission. The manager authorized the payment.","`Authorize` = official/legal permission. Manager ne authorize kiya.",5,{a:"Pareshan karna",b:"Aadhikaarik roop se izazat dena",c:"Rokna",d:"Bhoolna"}),
  q("d13-t4-s2-q03","d13-t4-s2","'Sabko baat karne ka mauka do.' ko English mein translate karo.","translation","Let everyone have a chance to speak.","'Let everyone have a chance' = sabko mauka do. Including everyone.","`Let everyone have a chance to speak.` = inclusive permission.",5),

  // ── d13-t4-s3: Sentences with let ──
  q("d13-t4-s3-q01","d13-t4-s3","'Mujhe apna best karne do.' ko English mein translate karo.","translation","Let me do my best.","'Let me do my best' = mujhe apna best karne do. Motivational phrase.","`Let me do my best.` = commitment statement.",5),
  q("d13-t4-s3-q02","d13-t4-s3","'Nayi generation ko naya raasta chunne do.' ko English mein translate karo.","translation","Let the new generation choose their own path.","'Let the new generation choose' = unhe chunne do. Generational freedom.","`Let the new generation choose their own path.` = freedom + let.",8),
];

// Day 13 - Topic 5: Practice
export const DAY_13_T5_QUESTIONS: PracticeQ[] = [
  // ── d13-t5-s1: Translation practice ──
  q("d13-t5-s1-q01","d13-t5-s1","'Mujhe meeting mein kuch bolne ka mauka do.' ko English mein translate karo.","translation","Let me say something in the meeting.","'Let me say something' = mujhe kuch bolne do. Meeting participation.","`Let me say something in the meeting.` = meeting participation.",5),
  q("d13-t5-s1-q02","d13-t5-s1","'Usse apni problem khud solve karne do, woh seekhega.' ko English mein translate karo.","translation","Let him solve his problem himself, he will learn.","'Let him solve' = use solve karne do. 'He will learn' = woh seekhega.","`Let him solve his problem himself, he will learn.` = learning by doing.",8),
  q("d13-t5-s1-q03","d13-t5-s1","'Sab kuch apne aap hone do — worry mat karo.' ko English mein translate karo.","translation","Let things happen naturally — don't worry.","'Let things happen naturally' = apne aap hone do. Relaxing attitude.","`Let things happen naturally.` = philosophical let.",8),
  q("d13-t5-s1-q04","d13-t5-s1","'Bacchon ko naye experiences se sikhne do.' ko English mein translate karo.","translation","Let children learn from new experiences.","'Let children learn from new experiences' = bacchon ko seekhne do. Educational philosophy.","`Let children learn from new experiences.` = educational permission.",8),

  // ── d13-t5-s2: Error detection ──
  q("d13-t5-s2-q01","d13-t5-s2","Error detect karo: 'Let me to introduce myself.'","error_detection","Let me introduce myself.","After 'Let me', use base verb directly — no 'to'.","`Let me introduce myself.` = sahi. `to` nahin aata.",5,{a:"Let me to introduce myself.",b:"Let me introducing myself.",c:"Let me introduce myself.",d:"Let me introduces myself."}),
  q("d13-t5-s2-q02","d13-t5-s2","Error detect karo: 'Don't let him to goes outside.'","error_detection","Don't let him go outside.","'Don't let + object + base verb'. No 'to', and use base form 'go'.","`Don't let him go outside.` = sahi. `to` mat lagao, `goes` ki jagah `go`.",5,{a:"Don't let him to goes outside.",b:"Don't let him going outside.",c:"Don't let him go outside.",d:"Don't let him to going outside."}),

  // ── d13-t5-s3: Comprehensive ──
  q("d13-t5-s3-q01","d13-t5-s3","'Let' se ek professional sentence banao.","translation","Let me share my ideas with the team.","'Let me share my ideas' = mujhe apne ideas share karne do. Professional Let.","`Let me share my ideas with the team.` = professional sentence.",5),
  q("d13-t5-s3-q02","d13-t5-s3","'Let' se ek motivational sentence banao.","translation","Let your dreams be bigger than your fears.","'Let your dreams be bigger than your fears' = sapno ko daro se bada hone do. Motivational.","`Let your dreams be bigger than your fears.` = motivational let.",10),
];

// ── Export all Day 13 questions ──
export const ALL_DAY_13_QUESTIONS: PracticeQ[] = [
  ...DAY_13_T1_QUESTIONS,
  ...DAY_13_T2_QUESTIONS,
  ...DAY_13_T3_QUESTIONS,
  ...DAY_13_T4_QUESTIONS,
  ...DAY_13_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// DAY 14: USE OF LET'S (Suggestions and invitations)
// Subtopics: d14-t1-s1, d14-t1-s2, d14-t1-s3, d14-t1-s4
//             d14-t2-s1, d14-t2-s2, d14-t2-s3
//             d14-t3-s1, d14-t3-s2, d14-t3-s3
//             d14-t4-s1, d14-t4-s2, d14-t4-s3
//             d14-t5-s1, d14-t5-s2, d14-t5-s3
// ══════════════════════════════════════════════════════════════

// Day 14 - Topic 1: Let's basics
export const DAY_14_T1_QUESTIONS: PracticeQ[] = [
  // ── d14-t1-s1: Introduction to Let's ──
  q("d14-t1-s1-q01","d14-t1-s1","'Let's' kya hai?","mcq","'Let us' ka short form — inclusive suggestion","'Let's' = 'Let us' (short form). Used to suggest something to yourself and others.","`Let's` = `Let us` ka short form. Main + tum sab milke kuch karein.",5,{a:"'Let him' ka short form",b:"'Let me' ka short form",c:"'Let us' ka short form — inclusive suggestion",d:"'Let them' ka short form"}),
  q("d14-t1-s1-q02","d14-t1-s1","'Chaliye bahar chalte hain.' ko English mein translate karo.","translation","Let's go outside.","'Let's go' = chaliye chalte hain. Classic Let's suggestion.","`Let's go outside.` = chaliye bahar chalte hain.",5,
    undefined,[{word:"let's go",meaning:"chaliye chalte hain"}]),
  q("d14-t1-s1-q03","d14-t1-s1","'Let's' ke baad verb ki kaisi form aati hai?","mcq","Base form (V1)","After 'Let's', always use the base form. Let's go, Let's eat, Let's try.","`Let's` ke baad hamesha base verb aata hai. Let's go, Let's try.",5,{a:"V2 (past form)",b:"to + V1",c:"V1 + ing",d:"Base form (V1)"}),
  q("d14-t1-s1-q04","d14-t1-s1","'Chaliye khaana khaate hain.' ko English mein translate karo.","translation","Let's eat.","'Let's eat' = chaliye khaate hain. Simple food suggestion.","`Let's eat.` = chaliye khaate hain.",5),
  q("d14-t1-s1-q05","d14-t1-s1","'Let's' kis situation mein use karte hain?","mcq","Jab hum sab milke kuch karne ka suggestion dein","'Let's' = when you suggest doing something together. Inclusive suggestion.","`Let's` = sab milke kuch karne ka suggestion. Inclusive.",5,{a:"Jab kisi ko command dein",b:"Jab kisi ke baare mein baat karein",c:"Jab hum sab milke kuch karne ka suggestion dein",d:"Jab permission maangein"}),
  q("d14-t1-s1-q06","d14-t1-s1","'Chaliye milkar kuch naya seekhte hain.' ko English mein translate karo.","translation","Let's learn something new together.","'Let's learn' = milkar seekhte hain. 'Together' = saath mein.","`Let's learn something new together.` = inclusive learning suggestion.",5),
  q("d14-t1-s1-q07","d14-t1-s1","'Chaliye party mein jaate hain.' ko English mein translate karo.","translation","Let's go to the party.","'Let's go to the party' = chaliye party mein jaate hain.","`Let's go to the party.` = party suggestion.",5),

  // ── d14-t1-s2: Structure and Formula ──
  q("d14-t1-s2-q01","d14-t1-s2","Let's ka positive formula kya hai?","mcq","Let's + base verb","Let's + base form of verb. Let's eat, Let's try, Let's discuss.","`Let's + V1` = positive suggestion formula.",5,{a:"Let's + to + V1",b:"Let's + V1+ing",c:"Let's + base verb",d:"Let's + V3"}),
  q("d14-t1-s2-q02","d14-t1-s2","'Chaliye sab milkar celebrate karte hain.' ko English mein translate karo.","translation","Let's all celebrate together.","'Let's all celebrate' = sab milkar celebrate karte hain. Group celebration.","`Let's all celebrate together.` = group suggestion.",5),
  q("d14-t1-s2-q03","d14-t1-s2","'Chaliye pehle problem samajhte hain.' ko English mein translate karo.","translation","Let's first understand the problem.","'Let's first understand' = pehle samajhte hain. Problem-solving suggestion.","`Let's first understand the problem.` = logical approach suggestion.",5),
  q("d14-t1-s2-q04","d14-t1-s2","'Meeting shuru karte hain.' ko English mein translate karo.","translation","Let's start the meeting.","'Let's start the meeting' = meeting shuru karte hain. Professional.","`Let's start the meeting.` = professional suggestion.",5),
  q("d14-t1-s2-q05","d14-t1-s2","Identify the error: 'Let's to go home.'","error_detection","Let's go home.","After 'Let's', no 'to'. Let's + base verb directly.","`Let's go home.` = sahi. `to` nahin lagta Let's ke baad.",5,{a:"Let's to go home.",b:"Let's going home.",c:"Let's go home.",d:"Lets go home."}),

  // ── d14-t1-s3: Let's not (Negative) ──
  q("d14-t1-s3-q01","d14-t1-s3","'Let's not' kab use karte hain?","mcq","Jab suggestion ho ki kuch na karein","'Let's not' = negative suggestion. Let's not go there = wahan mat chalte hain.","`Let's not` = negative suggestion. Kuch na karne ki salah.",5,{a:"Jab kisi ko command dein",b:"Jab positive suggestion ho",c:"Jab suggestion ho ki kuch na karein",d:"Sirf past mein"}),
  q("d14-t1-s3-q02","d14-t1-s3","'Aaj late mat rahen.' ko English mein translate karo.","translation","Let's not stay late today.","'Let's not stay late' = aaj late mat rahen. Inclusive negative suggestion.","`Let's not stay late today.` = negative suggestion.",5),
  q("d14-t1-s3-q03","d14-t1-s3","'Is topic par baat mat karte abhi.' ko English mein translate karo.","translation","Let's not talk about this topic right now.","'Let's not talk' = baat mat karte hain. 'Right now' = abhi.","`Let's not talk about this topic right now.` = negative suggestion.",5),
  q("d14-t1-s3-q04","d14-t1-s3","'Chaliye is cheez ko ignore mat karein.' ko English mein translate karo.","translation","Let's not ignore this matter.","'Let's not ignore' = ignore mat karte hain. Important negative suggestion.","`Let's not ignore this matter.` = important negative suggestion.",5),

  // ── d14-t1-s4: Shall we? (alternative) ──
  q("d14-t1-s4-q01","d14-t1-s4","'Shall we?' ka use kab hota hai?","mcq","'Let's' ka question form — more formal","'Shall we...?' is the question form of a Let's suggestion. More formal/British English.","`Shall we?` = `Let's` ka question form. Formal English mein zyada use hota hai.",5,{a:"Jab command dein",b:"'Let's' ka question form — more formal",c:"Past tense suggestion ke liye",d:"Kisi se permission maangne ke liye"}),
  q("d14-t1-s4-q02","d14-t1-s4","'Chaliye shuru karein?' ko formal English mein translate karo.","translation","Shall we begin?","'Shall we begin?' = formal question suggestion. More polished than 'Let's begin'.","`Shall we begin?` = formal suggestion question. Meetings mein use hota hai.",8),
];

// Day 14 - Topic 2: Let's in different situations
export const DAY_14_T2_QUESTIONS: PracticeQ[] = [
  // ── d14-t2-s1: Social suggestions ──
  q("d14-t2-s1-q01","d14-t2-s1","'Chaliye ek sath movie dekhte hain.' ko English mein translate karo.","translation","Let's watch a movie together.","Social suggestion: 'Let's watch' = chaliye dekhte hain. 'Together' = ek sath.","`Let's watch a movie together.` = social suggestion.",5),
  q("d14-t2-s1-q02","d14-t2-s1","'Aaj ka plan kya hai? Chaliye kuch plan karte hain.' ko English mein translate karo.","translation","What's the plan for today? Let's make some plans.","'Let's make some plans' = kuch plan karte hain. Planning suggestion.","`Let's make some plans.` = planning suggestion.",5),
  q("d14-t2-s1-q03","d14-t2-s1","'Chaliye kal subah walk pe jaayein.' ko English mein translate karo.","translation","Let's go for a walk tomorrow morning.","'Let's go for a walk' = walk pe jaayein. Health suggestion.","`Let's go for a walk tomorrow morning.` = health suggestion.",5),
  q("d14-t2-s1-q04","d14-t2-s1","'Chaliye ek dusre ki help karte hain.' ko English mein translate karo.","translation","Let's help each other.","'Let's help each other' = ek dusre ki madad karte hain. Cooperation.","`Let's help each other.` = cooperative suggestion.",5),

  // ── d14-t2-s2: Professional Let's ──
  q("d14-t2-s2-q01","d14-t2-s2","'Chaliye is problem ka solution dhundhte hain.' ko English mein translate karo.","translation","Let's find a solution to this problem.","Professional: 'Let's find a solution' = solution dhundhte hain.","`Let's find a solution to this problem.` = professional problem-solving.",5),
  q("d14-t2-s2-q02","d14-t2-s2","'Chaliye target set karte hain is hafte ke liye.' ko English mein translate karo.","translation","Let's set targets for this week.","'Let's set targets' = target set karte hain. Team/work context.","`Let's set targets for this week.` = professional planning.",5),
  q("d14-t2-s2-q03","d14-t2-s2","'Chaliye apni progress review karte hain.' ko English mein translate karo.","translation","Let's review our progress.","'Let's review our progress' = progress dekhte hain. Review meeting.","`Let's review our progress.` = meeting suggestion.",5),
  q("d14-t2-s2-q04","d14-t2-s2","'Chaliye kuch creative ideas brainstorm karte hain.' ko English mein translate karo.","translation","Let's brainstorm some creative ideas.","'Let's brainstorm' = milkar sochte hain. Creative meeting.","`Let's brainstorm some creative ideas.` = creative meeting.",5),

  // ── d14-t2-s3: Responding to Let's ──
  q("d14-t2-s3-q01","d14-t2-s3","'Let's go for lunch' ka positive response kya hoga?","mcq","Great idea! / Sure, let's go!","Positive responses to suggestions: 'Great idea!', 'Sure, let's go!', 'Sounds great!'","Positive response = 'Great idea!' ya 'Sure, let's go!' ya 'Sounds great!'",5,{a:"No, I don't want to.",b:"I am not sure.",c:"Great idea! / Sure, let's go!",d:"Please let me go."}),
  q("d14-t2-s3-q02","d14-t2-s3","'Let's meet tomorrow' ka polite refusal kya hoga?","mcq","Sorry, I can't make it tomorrow. Let's plan for another day.","Polite refusal: Apologize + suggest alternative.","`Sorry, I can't make it tomorrow. Let's plan for another day.` = polite refusal.",8,{a:"No!",b:"I don't want to.",c:"Sorry, I can't make it tomorrow. Let's plan for another day.",d:"Let me not."}),
  q("d14-t2-s3-q03","d14-t2-s3","'Let's get started!' ka kya matlab hai?","translation","Chaliye shuru karte hain!","'Let's get started' = chaliye shuru karte hain. Action-starting phrase.","`Let's get started!` = chaliye shuru karte hain! Energy + action.",5),
];

// Day 14 - Topic 3: Let's in common phrases
export const DAY_14_T3_QUESTIONS: PracticeQ[] = [
  // ── d14-t3-s1: Famous Let's phrases ──
  q("d14-t3-s1-q01","d14-t3-s1","'Let's do it!' ka kya matlab hai?","translation","Chaliye karte hain! / Ho jaaye!","'Let's do it!' = enthusiasm for action. Very common motivating phrase.","`Let's do it!` = chaliye karte hain! Motivating phrase.",5),
  q("d14-t3-s1-q02","d14-t3-s1","'Let's talk.' ka kya matlab hai?","translation","Chaliye baat karte hain.","'Let's talk' = chaliye baat karte hain. Invitation for conversation.","`Let's talk.` = chaliye baat karte hain. Simple conversation invitation.",5),
  q("d14-t3-s1-q03","d14-t3-s1","'Let's see how it goes.' ka kya matlab hai?","translation","Dekha jaayega kaise hota hai.","'Let's see how it goes' = wait and watch attitude. Common expression.","`Let's see how it goes.` = dekha jaayega. Common patient response.",5),
  q("d14-t3-s1-q04","d14-t3-s1","'Let's make the most of it.' ka kya matlab hai?","translation","Chaliye iska poora faayda uthate hain.","'Let's make the most of it' = situation ka maximum faayda uthaana.","`Let's make the most of it.` = best use karne ki suggestion.",8),
  q("d14-t3-s1-q05","d14-t3-s1","'Let's call it a day.' ka kya matlab hai?","mcq","Bas aaj ke liye yahi kaafi hai — kaam khatam karte hain","'Let's call it a day' = stop working for today. End of workday phrase.","`Let's call it a day.` = aaj ka kaam khatam. Professional phrase.",8,{a:"Aaj kuch mat karo.",b:"Kal kaam karo.",c:"Bas aaj ke liye yahi kaafi hai — kaam khatam karte hain",d:"Kal tak ka plan karo."}),
  q("d14-t3-s1-q06","d14-t3-s1","'Let's agree to disagree.' ka kya matlab hai?","mcq","Hum dono ki alag raaye hai — dono sahi ho sakte hain","When two people disagree but accept each other's views, they 'agree to disagree'.","`Let's agree to disagree.` = dono ki alag raaye hai, dono theek hain.",10,{a:"Chaliye agree karte hain.",b:"Hum dono ki alag raaye hai — dono sahi ho sakte hain",c:"Chaliye ek raaye banate hain.",d:"Disagree mat karo."}),

  // ── d14-t3-s2: Let's in daily situations ──
  q("d14-t3-s2-q01","d14-t3-s2","'Chaliye yeh kitaab padh ke dekhte hain.' ko English mein translate karo.","translation","Let's try reading this book.","'Let's try reading' = padhne ki koshish karte hain. Reading suggestion.","`Let's try reading this book.` = reading suggestion.",5),
  q("d14-t3-s2-q02","d14-t3-s2","'Chaliye is issue ko solve karte hain saath mein.' ko English mein translate karo.","translation","Let's solve this issue together.","'Let's solve together' = milkar solve karte hain. Collaborative.","`Let's solve this issue together.` = collaborative suggestion.",5),
  q("d14-t3-s2-q03","d14-t3-s2","'Chaliye khud se promise karte hain ki roz English practice karenge.' ko English mein translate karo.","translation","Let's promise ourselves to practice English every day.","'Let's promise ourselves' = khud se vaada karte hain. Self-commitment.","`Let's promise ourselves to practice English every day.` = commitment.",8),

  // ── d14-t3-s3: Error detection ──
  q("d14-t3-s3-q01","d14-t3-s3","Error detect karo: 'Let's goes to the park.'","error_detection","Let's go to the park.","After 'Let's', use base verb (go), not 'goes'.","`Let's go` = sahi. `goes` galat — base verb chahiye.",5,{a:"Let's goes to the park.",b:"Let's going to the park.",c:"Let's go to the park.",d:"Lets go to the park."}),
  q("d14-t3-s3-q02","d14-t3-s3","Error detect karo: 'Lets not make the same mistake.'","error_detection","Let's not make the same mistake.","'Let's' needs an apostrophe (Let's not 'Lets'). 'Let's not' = negative suggestion.","`Let's` mein apostrophe hota hai — `Lets` galat spelling hai.",5,{a:"Lets not make the same mistake.",b:"Let's not making the same mistake.",c:"Let's not make the same mistake.",d:"Let's not to make the same mistake."}),
];

// Day 14 - Topic 4: Vocabulary
export const DAY_14_T4_QUESTIONS: PracticeQ[] = [
  // ── d14-t4-s1: Suggestion vocabulary ──
  q("d14-t4-s1-q01","d14-t4-s1","'Suggest' ka Hindi mein kya matlab hai?","mcq","Salah dena / Propose karna","Suggest = to propose or recommend. I suggest we try a new approach.","`Suggest` = salah dena. I suggest = main salah deta hun.",5,{a:"Rokna",b:"Salah dena / Propose karna",c:"Shuru karna",d:"Dekhna"}),
  q("d14-t4-s1-q02","d14-t4-s1","'Propose' ka kya matlab hai?","mcq","Pesh karna / Rakkhna (formally)","Propose = to formally put forward a plan or idea. I propose a new meeting.","`Propose` = formally pesh karna. Meetings mein use hota hai.",5,{a:"Lena",b:"Rokna",c:"Pesh karna / Rakkhna (formally)",d:"Seekhna"}),
  q("d14-t4-s1-q03","d14-t4-s1","'Collaborate' ka kya matlab hai?","mcq","Milkar kaam karna","Collaborate = to work together. Let's collaborate on this project.","`Collaborate` = milkar kaam karna. Let's collaborate = chaliye milkar kaam karte hain.",5,{a:"Akele kaam karna",b:"Milkar kaam karna",c:"Kisi ko rokna",d:"Khatam karna"}),
  q("d14-t4-s1-q04","d14-t4-s1","'Let's collaborate on this project.' ka Hindi mein kya matlab hai?","translation","Chaliye is project par milkar kaam karte hain.","'Let's collaborate' = milkar kaam karte hain. 'On this project' = is project par.","`Let's collaborate on this project.` = milkar kaam karne ki suggestion.",5),

  // ── d14-t4-s2: More words ──
  q("d14-t4-s2-q01","d14-t4-s2","'Unite' ka kya matlab hai?","mcq","Milna / Ek hona","Unite = to come together for a common purpose. Let's unite for a good cause.","`Unite` = milna / ek hona. Let's unite = chaliye ek hokar chalein.",5,{a:"Alag hona",b:"Lad'na",c:"Milna / Ek hona",d:"Chhorr dena"}),
  q("d14-t4-s2-q02","d14-t4-s2","'Teamwork' ek sentence mein 'Let's' ke sath use karo.","translation","Let's show our teamwork and win this challenge together.","'Let's show our teamwork' = apni teamwork dikhate hain. Group effort.","`Let's show our teamwork and win this challenge.` = motivational.",8),
  q("d14-t4-s2-q03","d14-t4-s2","'Initiative' ka kya matlab hai?","mcq","Apne aap se pehla kadam uthana","Initiative = the ability to take action independently. Let's take the initiative.","`Initiative` = pehla kadam khud uthana. Let's take initiative.",5,{a:"Ruk jaana",b:"Kisi ka intezaar karna",c:"Apne aap se pehla kadam uthana",d:"Galti karna"}),

  // ── d14-t4-s3: Professional suggestions ──
  q("d14-t4-s3-q01","d14-t4-s3","'Chaliye aaj ki meeting mein productive discussion karein.' ko English mein translate karo.","translation","Let's have a productive discussion in today's meeting.","'Let's have a productive discussion' = achhi baat karte hain. Professional.","`Let's have a productive discussion in today's meeting.` = professional.",8),
  q("d14-t4-s3-q02","d14-t4-s3","'Chaliye goals set karte hain aur unke liye kaam karte hain.' ko English mein translate karo.","translation","Let's set our goals and work towards them.","'Let's set goals and work towards them' = target set karte hain aur kaam karte hain.","`Let's set our goals and work towards them.` = goal-setting.",8),
];

// Day 14 - Topic 5: Practice
export const DAY_14_T5_QUESTIONS: PracticeQ[] = [
  // ── d14-t5-s1: Comprehensive translation ──
  q("d14-t5-s1-q01","d14-t5-s1","'Chaliye ek naya chapter shuru karte hain.' ko English mein translate karo.","translation","Let's start a new chapter.","'Let's start a new chapter' = naya chapter shuru karte hain. Fresh start.","`Let's start a new chapter.` = fresh start suggestion.",5),
  q("d14-t5-s1-q02","d14-t5-s1","'Chaliye duniya ko ek behtar jagah banate hain.' ko English mein translate karo.","translation","Let's make the world a better place.","'Let's make the world a better place' = duniya ko behtar banate hain. Inspirational.","`Let's make the world a better place.` = inspirational Let's.",8),
  q("d14-t5-s1-q03","d14-t5-s1","'Chaliye apni English ko aaj se better karte hain.' ko English mein translate karo.","translation","Let's improve our English starting from today.","'Let's improve our English' = apni English behtar karte hain. Learning commitment.","`Let's improve our English starting from today.` = learning commitment.",5),
  q("d14-t5-s1-q04","d14-t5-s1","'Chaliye is course mein best karein.' ko English mein translate karo.","translation","Let's do our best in this course.","'Let's do our best' = apna best dete hain. Motivational.","`Let's do our best in this course.` = course commitment.",5),
  q("d14-t5-s1-q05","d14-t5-s1","'Chaliye ek aisa future banate hain jis par garv ho.' ko English mein translate karo.","translation","Let's build a future that we are proud of.","'Let's build a future that we are proud of' = garv wala future banate hain.","`Let's build a future that we are proud of.` = inspirational.",10),

  // ── d14-t5-s2: Error detection ──
  q("d14-t5-s2-q01","d14-t5-s2","Error detect karo: 'Let's not to waste time.'","error_detection","Let's not waste time.","'Let's not' = negative suggestion. No 'to' after 'Let's not'.","`Let's not waste time.` = sahi. `to` nahin aata Let's not ke baad.",5,{a:"Let's not to waste time.",b:"Let's not wasting time.",c:"Let's not waste time.",d:"Let's don't waste time."}),
  q("d14-t5-s2-q02","d14-t5-s2","Error detect karo: 'Let us to celebrate our success.'","error_detection","Let us celebrate our success.","'Let us + base verb'. No 'to' after 'Let us'.","`Let us celebrate our success.` = sahi. `to` nahin aata.",5,{a:"Let us to celebrate our success.",b:"Let us celebrating our success.",c:"Let us celebrate our success.",d:"Let us celebrates our success."}),

  // ── d14-t5-s3: Mix review ──
  q("d14-t5-s3-q01","d14-t5-s3","'Let' aur 'Let's' mein kya fark hai?","mcq","Let = kisi aur ko permission dena, Let's = sab milkar kuch karna","'Let him go' = him ko jaane do (permission). 'Let's go' = hum sab chalein (suggestion).","`Let` = permission dena. `Let's` = sab milkar suggestion. Different use.",5,{a:"Dono same hain",b:"Let = future, Let's = present",c:"Let = kisi aur ko permission dena, Let's = sab milkar kuch karna",d:"Let = negative, Let's = positive"}),
  q("d14-t5-s3-q02","d14-t5-s3","'Let's go, team!' ka kya matlab hai?","translation","Chaliye team! / Team aage badho!","'Let's go, team!' = motivational phrase. Used to encourage a team or group.","`Let's go, team!` = motivational cheering phrase.",5),
  q("d14-t5-s3-q03","d14-t5-s3","'Chaliye is adventure mein sath chalte hain.' ko English mein translate karo.","translation","Let's go on this adventure together.","'Let's go on this adventure' = is adventure mein jaate hain. Together = sath.","`Let's go on this adventure together.` = exciting suggestion.",5),
];

// ── Export all Day 14 questions ──
export const ALL_DAY_14_QUESTIONS: PracticeQ[] = [
  ...DAY_14_T1_QUESTIONS,
  ...DAY_14_T2_QUESTIONS,
  ...DAY_14_T3_QUESTIONS,
  ...DAY_14_T4_QUESTIONS,
  ...DAY_14_T5_QUESTIONS,
];

// ══════════════════════════════════════════════════════════════
// MASTER EXPORT: All Days 8-14 Questions
// ══════════════════════════════════════════════════════════════
export const ALL_DAYS_8_TO_14_QUESTIONS: PracticeQ[] = [
  ...ALL_DAY_8_QUESTIONS,
  ...ALL_DAY_9_QUESTIONS,
  ...ALL_DAY_10_QUESTIONS,
  ...ALL_DAY_11_QUESTIONS,
  ...ALL_DAY_12_QUESTIONS,
  ...ALL_DAY_13_QUESTIONS,
  ...ALL_DAY_14_QUESTIONS,
];

// ─── Helper: Get questions for a specific day and subtopic ─────
// Filters the merged question bank by dayNumber and optional subtopicId
export function getDays8to14Questions(dayNumber: number, subtopicId?: string): PracticeQ[] {
  // Map each day to its question array
  const dayMap: Record<number, PracticeQ[]> = {
    8: ALL_DAY_8_QUESTIONS,   // Day 8: Will Have (Future Perfect)
    9: ALL_DAY_9_QUESTIONS,   // Day 9: Use of There
    10: ALL_DAY_10_QUESTIONS, // Day 10: Revision + Practice
    11: ALL_DAY_11_QUESTIONS, // Day 11: Use of Want
    12: ALL_DAY_12_QUESTIONS, // Day 12: Use of Wanted
    13: ALL_DAY_13_QUESTIONS, // Day 13: Use of Let
    14: ALL_DAY_14_QUESTIONS, // Day 14: Use of Let's
  };

  // Get all questions for this day
  const dayQuestions = dayMap[dayNumber] || [];

  // Filter by subtopicId if provided, otherwise return all for the day
  if (subtopicId) {
    return dayQuestions.filter(q => q.subtopicId === subtopicId);
  }
  return dayQuestions;
}
