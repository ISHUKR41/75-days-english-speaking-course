// ============================================================
// Days 12, 13 & 14 Extra Questions — 100 each = 300 total
// Day 12: Use of Wanted (past desires, unfulfilled wishes)
// Day 13: Use of Let (permission, allow, permit)
// Day 14: Use of Let's (group suggestions, invitations)
// ============================================================

import type { PracticeQ } from "./day-1-questions";

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
// DAY 12 EXTRA QUESTIONS — Use of Wanted (Past Desires)
// 100 questions — past tense desires, unfulfilled wishes
// ══════════════════════════════════════════════════════════════
export const DAY_12_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d12-t1-s1: Wanted to basics ─────────────────────────────
  q("d12-ex-q001","d12-t1-s1","'Wanted' ka formula kya hai?","mcq","Subject + wanted + to + base verb (past desire)","Wanted is the past tense of want. Shows a past desire. Formula: wanted + to + base verb.","Wanted = want ka past tense. Past desire = wanted to + base verb.",5,{a:"Subject + wanted + V-ing",b:"Subject + wanted + to + base verb (past desire)",c:"Subject + had want + to + verb",d:"Subject + was wanting + to + verb"}),

  q("d12-ex-q002","d12-t1-s1","'Main doctor banna chahta tha.' ko English mein translate karo.","translation","I wanted to become a doctor.","Wanted to become = past desire. Become = base verb.","I wanted to become = past desire. Wanted to + base verb.",5,undefined,[{word:"I wanted to become",meaning:"main banna chahta tha"}]),

  q("d12-ex-q003","d12-t1-s1","'She ___ (want — past) to travel the world.' — fill in.","fill_blank","wanted","Wanted = past of want. She wanted to travel = past desire.","She wanted to travel = past desire. Wanted = want ka past.",5,undefined,[{word:"she wanted to travel",meaning:"woh travel karna chahti thi"}]),

  q("d12-ex-q004","d12-t1-s1","'Bachpan mein mujhe pilot banna tha.' ko English mein translate karo.","translation","As a child, I wanted to become a pilot.","As a child = bachpan mein. Wanted to become = past desire.","As a child = bachpan mein. Wanted to become = past desire.",5,undefined,[{word:"as a child, I wanted to become",meaning:"bachpan mein banna chahta tha"}]),

  q("d12-ex-q005","d12-t1-s1","Error detect karo: 'He wanted becoming an actor.'","error_detection","He wanted to become an actor.","Wanted is followed by 'to + base verb' (not gerund/V-ing). 'To become' not 'becoming'.","Wanted + to + base verb = sahi. Wanted + V-ing = galat.",5,{a:"He wanted becoming an actor.",b:"He wanted to becoming an actor.",c:"He wanted to become an actor.",d:"He was wanting to become an actor."}),

  q("d12-ex-q006","d12-t1-s1","'Woh apni life mein success chahte the.' ko English mein translate karo.","translation","They wanted success in their life.","Wanted + noun = past desire. Success = noun.","They wanted success = past desire + noun.",5,undefined,[{word:"they wanted success",meaning:"woh success chahte the"},{word:"in their life",meaning:"apni life mein"}]),

  q("d12-ex-q007","d12-t1-s1","'Mere papa chahte the ki main engineer banun.' ko English mein translate karo.","translation","My father wanted me to become an engineer.","Wanted + me (object) + to become (infinitive). Past desire for someone else.","My father wanted me to become = want + object + to + verb (past).",8,undefined,[{word:"my father wanted me to become",meaning:"papa chahte the ki main banun"}]),

  q("d12-ex-q008","d12-t1-s1","'Uss waqt main kisi bhi kaam mein interest nahi lena chahta tha.' ko English mein translate karo.","translation","At that time, I didn't want to take interest in any work.","Didn't want to = past negative desire. Take interest = interest lena.","Didn't want to = negative past desire.",5,undefined,[{word:"I didn't want to",meaning:"main nahi chahta tha"},{word:"at that time",meaning:"uss waqt"}]),

  q("d12-ex-q009","d12-t1-s1","'Kya usne kabhi cricket khelna chaha tha?' ko English mein translate karo.","translation","Did he ever want to play cricket?","Did + subject + want = simple past question. Ever = kabhi?","Did he want = simple past question. Kabhi = ever.",5,undefined,[{word:"did he ever want",meaning:"kya usne kabhi chaha tha"}]),

  q("d12-ex-q010","d12-t1-s1","'Unhone nahin chaha tha ki yeh ho.' ko English mein translate karo.","translation","They didn't want this to happen.","Didn't want + this (object) + to happen (infinitive). Negative past desire.","Didn't want this to happen = negative past + want + object + infinitive.",8,undefined,[{word:"they didn't want this to happen",meaning:"unhone nahi chaha tha ki yeh ho"}]),

  // ── d12-t1-s2: Past desires and regrets ─────────────────────
  q("d12-ex-q011","d12-t1-s2","'Woh sab kuch chod ke videsh jaana chahte the.' ko English mein translate karo.","translation","They wanted to leave everything and go abroad.","Wanted to leave + and + go = two infinitives. Past desire.","Wanted to leave + go = two past desires.",5,undefined,[{word:"they wanted to leave everything",meaning:"woh sab kuch chod dena chahte the"},{word:"and go abroad",meaning:"aur videsh jaana chahte the"}]),

  q("d12-ex-q012","d12-t1-s2","'Kash main waapas jaana chahta tha aur woh faisla baadal deta.' ko English mein translate karo.","translation","I wish I had wanted to go back and change that decision.","Wish + past perfect = unfulfilled desire. Complex regret.","Wish + had wanted = unfulfilled past desire.",10,undefined,[{word:"I wish I had wanted",meaning:"kash main chahta"},{word:"change that decision",meaning:"faisla badal deta"}]),

  q("d12-ex-q013","d12-t1-s2","'Uski ek hi khwaish thi — music mein naam kamana.' ko English mein translate karo.","translation","She had only one desire — to make a name in music.","Had one desire = ek khwaish thi. To make a name = naam kamana.","She had only one desire = ek hi khwaish. Past tense.",5,undefined,[{word:"she had only one desire",meaning:"sirf ek khwaish thi"},{word:"to make a name",meaning:"naam kamana"}]),

  q("d12-ex-q014","d12-t1-s2","Error detect karo: 'She wanted that he come early.'","error_detection","She wanted him to come early.","'Wanted' takes object + infinitive, not 'that' clause. She wanted him to come.","Wanted + object + to + verb = sahi. That clause = galat.",8,{a:"She wanted that he come early.",b:"She wanted him coming early.",c:"She wanted him to come early.",d:"She was wanting him to come early."}),

  q("d12-ex-q015","d12-t1-s2","'Woh hamesha apne ghar se door rehna chahta tha.' ko English mein translate karo.","translation","He always wanted to stay away from his home.","Always wanted to stay = hamesha chahna. Away from = door se.","He always wanted to stay away = always + past desire.",8,undefined,[{word:"he always wanted to stay away",meaning:"hamesha door rehna chahta tha"}]),

  q("d12-ex-q016","d12-t1-s2","'Main chahta tha ki yeh din kabhi khatam na ho.' ko English mein translate karo.","translation","I wanted this day to never end.","Wanted + this day (object) + to never end (infinitive).","I wanted this day to never end = past + want + object + infinitive.",8,undefined,[{word:"I wanted this day to never end",meaning:"chahta tha ki yeh din khatam na ho"}]),

  q("d12-ex-q017","d12-t1-s2","'Unhone aisa hospital banana chaha tha jo sabke liye free ho.' ko English mein translate karo.","translation","They wanted to build a hospital that would be free for everyone.","Wanted to build = past desire + to + base verb. Free for everyone = relative clause.","Wanted to build a hospital that would be free = complex past desire.",8,undefined,[{word:"wanted to build a hospital",meaning:"hospital banana chaha tha"},{word:"that would be free",meaning:"jo free hota"}]),

  q("d12-ex-q018","d12-t1-s2","'Aaj pataa chala ki woh bahut kuch banana chahte the jo ho na saka.' ko English mein translate karo.","translation","Today I realized that he had wanted to achieve many things that couldn't happen.","Had wanted = Past Perfect showing desire before another past point. Couldn't happen = past inability.","Had wanted = Past Perfect desire. Couldn't happen = past impossibility.",10,undefined,[{word:"he had wanted to achieve",meaning:"woh achieve karna chahta tha"},{word:"that couldn't happen",meaning:"jo ho na saka"}]),

  q("d12-ex-q019","d12-t1-s2","'Pehle mujhe sweets bahut pasand the.' ko English mein translate karo.","translation","I used to want a lot of sweets before. / I wanted a lot of sweets before.","Wanted = past desire. Sweets = noun. Before = pehle.","Wanted + noun = past desire for thing.",5,undefined,[{word:"I wanted a lot of sweets",meaning:"mujhe meetha bahut chahiye tha"},{word:"before",meaning:"pehle"}]),

  q("d12-ex-q020","d12-t1-s2","'Mere goals uss waqt alag the — main different cheez banana chahta tha.' ko English mein translate karo.","translation","My goals were different then — I wanted to create something different.","My goals were = past Be Verb. I wanted to create = past desire.","My goals were + I wanted to create = combined past.",8,undefined,[{word:"I wanted to create something different",meaning:"kuch alag banana chahta tha"}]),

  // ── d12-t1-s3: Didn't want (Negative past desire) ───────────
  q("d12-ex-q021","d12-t1-s3","'Didn't want to' ka structure kya hai?","mcq","Subject + didn't want + to + base verb","Negative past: didn't want to + base verb. She didn't want to go = woh jaana nahi chahti thi.","Didn't want to = negative past desire.",5,{a:"Subject + not wanted + to + verb",b:"Subject + didn't want + to + base verb",c:"Subject + wanted not + to + verb",d:"Subject + had not want + to + verb"}),

  q("d12-ex-q022","d12-t1-s3","'Woh us waqt kuch bhi sunna nahi chahta tha.' ko English mein translate karo.","translation","He didn't want to hear anything at that time.","Didn't want to hear = negative past desire. Anything = kuch bhi.","He didn't want to hear = negative past desire.",5,undefined,[{word:"he didn't want to hear anything",meaning:"kuch bhi sunna nahi chahta tha"},{word:"at that time",meaning:"uss waqt"}]),

  q("d12-ex-q023","d12-t1-s3","'Maine nahi chaha tha ki yeh mujhse ho.' ko English mein translate karo.","translation","I didn't want this to happen to me.","Didn't want + this (object) + to happen + to me. Negative past.","I didn't want this to happen = negative past + object + infinitive.",8,undefined,[{word:"I didn't want this to happen to me",meaning:"nahi chaha tha ki mujhse yeh ho"}]),

  q("d12-ex-q024","d12-t1-s3","'She ___ (not want — past) to disappoint her parents.' — fill in.","fill_blank","didn't want","Didn't want = negative past. She didn't want to disappoint = negative past desire.","She didn't want to disappoint = negative past desire.",5,undefined,[{word:"didn't want to disappoint",meaning:"nahi chahti thi ki parents fail ho"}]),

  q("d12-ex-q025","d12-t1-s3","Error detect karo: 'He not wanted to speak at the meeting.'","error_detection","He didn't want to speak at the meeting.","Negative past: didn't want (not 'not wanted'). Didn't = did not.","Negative past = didn't want. Not wanted = galat structure.",5,{a:"He not wanted to speak at the meeting.",b:"He wasn't want to speak at the meeting.",c:"He didn't want to speak at the meeting.",d:"He hadn't wanted speaking at the meeting."}),

  q("d12-ex-q026","d12-t1-s3","'Hum nahi chahte the ki yeh project fail ho.' ko English mein translate karo.","translation","We didn't want this project to fail.","Didn't want + this project (object) + to fail (infinitive).","We didn't want this project to fail = negative past + object + infinitive.",5,undefined,[{word:"we didn't want this project to fail",meaning:"nahi chahte the ki project fail ho"}]),

  q("d12-ex-q027","d12-t1-s3","'Woh kisi se bhi help nahi lena chahte the.' ko English mein translate karo.","translation","They didn't want to take help from anyone.","Didn't want to take = negative past desire. From anyone = kisi se bhi.","They didn't want to take help = negative past desire.",5,undefined,[{word:"they didn't want to take help from anyone",meaning:"kisi se bhi madad nahi lena chahte the"}]),

  q("d12-ex-q028","d12-t1-s3","'Mujhe pata tha ki woh jaana nahi chahta tha.' ko English mein translate karo.","translation","I knew that he didn't want to go.","I knew = mujhe pata tha. That he didn't want to go = embedded negative past desire.","I knew that + didn't want to go = reported past desire.",8,undefined,[{word:"I knew that he didn't want to go",meaning:"pata tha ki woh nahi chahta tha"}]),

  q("d12-ex-q029","d12-t1-s3","'Usne apna kaam kisi ke saath share karna nahi chaha tha.' ko English mein translate karo.","translation","She hadn't wanted to share her work with anyone.","Hadn't wanted to = Past Perfect negative. Before another past point.","Hadn't wanted to share = Past Perfect negative desire.",8,undefined,[{word:"she hadn't wanted to share",meaning:"woh share karna nahi chahti thi"}]),

  q("d12-ex-q030","d12-t1-s3","'Kuch log success ke liye kaam hi nahi karna chahte.' ko English mein translate karo.","translation","Some people don't even want to work for success.","Don't even want to = negative present desire (timeless truth about some people).","Some people don't even want to work = general negative desire.",5,undefined,[{word:"don't even want to work",meaning:"kaam hi nahi karna chahte"},{word:"for success",meaning:"success ke liye"}]),

  // ── d12-t2-s1: Did you want? (Questions) ────────────────────
  q("d12-ex-q031","d12-t2-s1","'Kya tum bhi actor banna chahte the bachpan mein?' ko English mein translate karo.","translation","Did you also want to become an actor as a child?","Did + you + want = past question. Also = bhi. As a child = bachpan mein.","Did you want to become = past question.",5,undefined,[{word:"did you also want to become",meaning:"kya tum bhi banna chahte the"},{word:"as a child",meaning:"bachpan mein"}]),

  q("d12-ex-q032","d12-t2-s1","'What did you ___ (want) to do when you were young?' — fill in.","fill_blank","want","Past question: Did + subject + want (base form). What did you want.","Did + base verb. Did you want = base form ke sath.",5,undefined,[{word:"what did you want to do",meaning:"tum kya karna chahte the"}]),

  q("d12-ex-q033","d12-t2-s1","'Kya uss waqt tumhare parents chahte the ki tum abroad jao?' ko English mein translate karo.","translation","Did your parents want you to go abroad at that time?","Did + parents + want + you (object) + to go (infinitive). Past question.","Did your parents want you to go = past question + object + infinitive.",8,undefined,[{word:"did your parents want you to go abroad",meaning:"kya parents chahte the ki jao"}]),

  q("d12-ex-q034","d12-t2-s1","Error detect karo: 'Wanted he to become a scientist?'","error_detection","Did he want to become a scientist?","Past question: Did + subject + want (not 'Wanted + subject'). Did he want?","Past question: Did he want? Not 'Wanted he'. Inversion galat.",5,{a:"Wanted he to become a scientist?",b:"Does he wanted to become a scientist?",c:"Did he want to become a scientist?",d:"Did he wanted to become a scientist?"}),

  q("d12-ex-q035","d12-t2-s1","'Kya usne kabhi apna business kholna chaha tha?' ko English mein translate karo.","translation","Did she ever want to start her own business?","Did she ever want = past question. Ever = kabhi?","Did she ever want to start = past question.",5,undefined,[{word:"did she ever want to start her own business",meaning:"kya usne kabhi business kholna chaha tha"}]),

  // ── d12-t2-s2: Wanted in sentences (various contexts) ───────
  q("d12-ex-q036","d12-t2-s2","'Shaam tak main ghar jaana chahta tha.' ko English mein translate karo.","translation","By evening, I wanted to go home.","By evening = shaam tak. Wanted to go = past desire.","By evening + wanted to go = time + past desire.",5,undefined,[{word:"I wanted to go home",meaning:"ghar jaana chahta tha"},{word:"by evening",meaning:"shaam tak"}]),

  q("d12-ex-q037","d12-t2-s2","'Woh apni zindagi mein ek difference banana chahte the.' ko English mein translate karo.","translation","They wanted to make a difference in their life.","Wanted to make = past desire. A difference = noun phrase.","They wanted to make a difference = past desire.",8,undefined,[{word:"wanted to make a difference",meaning:"difference banana chahte the"},{word:"in their life",meaning:"apni zindagi mein"}]),

  q("d12-ex-q038","d12-t2-s2","'He ___ (want — past) her to understand his feelings.' — fill in.","fill_blank","wanted","Wanted + her (object) + to understand (infinitive). Past desire for someone.","He wanted her to understand = past + object + infinitive.",8,undefined,[{word:"he wanted her to understand",meaning:"woh chahta tha ki woh samjhe"}]),

  q("d12-ex-q039","d12-t2-s2","'Maine khaana nahi khaya kyunki main nahi chahta tha.' ko English mein translate karo.","translation","I didn't eat food because I didn't want to.","Didn't want to = negative past desire (ellipsis — no need to repeat 'eat'). Because = kyunki.","Didn't want to = short negative past desire. No need to repeat verb.",5,undefined,[{word:"I didn't want to",meaning:"main nahi chahta tha"},{word:"because",meaning:"kyunki"}]),

  q("d12-ex-q040","d12-t2-s2","'Unke friends chahte the ki woh unke saath raat guzaare.' ko English mein translate karo.","translation","Their friends wanted them to spend the night with them.","Friends wanted + them (object) + to spend (infinitive) + the night.","Friends wanted them to spend = past + want + object + infinitive.",8,undefined,[{word:"friends wanted them to spend the night",meaning:"chahte the ki raat guzaaren"}]),

  // ── d12-t2-s3: Reported speech with wanted ──────────────────
  q("d12-ex-q041","d12-t2-s3","'Woh bola ki woh doctor banna chahta hai.' ko reported speech mein translate karo.","translation","He said that he wanted to become a doctor.","Said that + wanted (past of wants in reported speech). Reported speech backshift.","Reported speech: wants → wanted. He said that he wanted to become.",8,undefined,[{word:"he said that he wanted to become",meaning:"usne kaha ki woh banna chahta tha"}]),

  q("d12-ex-q042","d12-t2-s3","Reported speech mein present 'want' kaise change hota hai?","mcq","Want/wants → wanted (past mein shift hota hai)","In reported speech (past reporting), present want becomes past wanted.","Reported speech: want/wants → wanted (backshift to past).",8,{a:"Want/wants → will want",b:"Want/wants → wanted (past mein shift hota hai)",c:"Want/wants → had wanted",d:"Want/wants → would want"}),

  q("d12-ex-q043","d12-t2-s3","'Usne kaha ki woh music mein apna career banana chahti hai.' ko reported speech mein translate karo.","translation","She said that she wanted to build her career in music.","Said that + wanted (reported speech backshift from wants to wanted).","She said that she wanted = reported speech. Wants → wanted.",8,undefined,[{word:"she said that she wanted",meaning:"usne kaha ki woh chahti thi"},{word:"to build her career",meaning:"career banana chahna"}]),

  q("d12-ex-q044","d12-t2-s3","Error detect karo: 'He told me that he wants to resign.'","error_detection","He told me that he wanted to resign.","Reported speech: told (past) + wants (present) should backshift to 'wanted'.","Told = past. Backshift: wants → wanted in reported speech.",8,{a:"He told me that he wants to resign.",b:"He told me that he will want to resign.",c:"He told me that he wanted to resign.",d:"He told me that he had want to resign."}),

  q("d12-ex-q045","d12-t2-s3","'Teacher ne kaha ki woh chahti hai ki sab students library ayein.' ko reported speech mein translate karo.","translation","The teacher said that she wanted all students to come to the library.","Said that + wanted (backshift) + students (object) + to come.","Teacher said that she wanted students to come = reported speech.",8,undefined,[{word:"the teacher said that she wanted",meaning:"teacher ne kaha ki woh chahti thi"},{word:"all students to come",meaning:"ki sab students aayein"}]),

  // More Day 12 questions (46-100)
  q("d12-ex-q046","d12-t1-s1","'Mujhe apni life mein something different karna tha.' ko English mein translate karo.","translation","I wanted to do something different in my life.","Wanted to do = past desire. Something different = kuch alag.","I wanted to do something different = past desire.",5,undefined,[{word:"I wanted to do something different",meaning:"kuch alag karna chahta tha"}]),

  q("d12-ex-q047","d12-t1-s2","'Woh chahti thi ki usse koi notice kare.' ko English mein translate karo.","translation","She wanted someone to notice her.","Wanted + someone (object) + to notice (infinitive) + her.","She wanted someone to notice her = past + object + infinitive.",8,undefined,[{word:"she wanted someone to notice her",meaning:"chahti thi ki koi notice kare"}]),

  q("d12-ex-q048","d12-t1-s3","'Main nahi chahta tha ki yeh cheez public ho.' ko English mein translate karo.","translation","I didn't want this thing to become public.","Didn't want + this thing (object) + to become (infinitive) + public.","I didn't want this to become public = negative past + object + infinitive.",8,undefined,[{word:"I didn't want this to become public",meaning:"nahi chahta tha ki public ho"}]),

  q("d12-ex-q049","d12-t2-s1","'Kya tumne kabhi videsh mein settle hona chaha tha?' ko English mein translate karo.","translation","Did you ever want to settle abroad?","Did + you + ever + want = past question with 'ever'. Settle abroad = videsh mein rehna.","Did you ever want to settle abroad = past question.",5,undefined,[{word:"did you ever want to settle abroad",meaning:"kya kabhi videsh mein settle hona chaha tha"}]),

  q("d12-ex-q050","d12-t2-s2","'Unki ek wish thi ki unki family khush rahe.' ko English mein translate karo.","translation","His one wish was that his family would be happy.","His one wish was = uski ek wish thi. That his family would be happy = embedded wish.","His wish was that family would be happy = past wish expression.",8,undefined,[{word:"his one wish was",meaning:"uski ek wish thi"},{word:"his family would be happy",meaning:"family khush rahe"}]),

  q("d12-ex-q051","d12-t1-s1","'Uska sapna tha ki woh cricket world cup jeetega.' ko English mein translate karo.","translation","His dream was that he would win the Cricket World Cup.","His dream was = uska sapna tha. That he would win = embedded past desire.","His dream was + that he would win = past dream expression.",5,undefined,[{word:"his dream was that he would win",meaning:"uska sapna tha ki woh jeetega"}]),

  q("d12-ex-q052","d12-t1-s2","'Hum college mein saath kaam karna chahte the.' ko English mein translate karo.","translation","We wanted to work together in college.","We wanted to work = plural past desire. Together = saath mein.","We wanted to work together = plural past desire.",5,undefined,[{word:"we wanted to work together",meaning:"saath kaam karna chahte the"},{word:"in college",meaning:"college mein"}]),

  q("d12-ex-q053","d12-t1-s3","'Maine mana kiya kyunki main nahi chahta tha.' ko English mein translate karo.","translation","I refused because I didn't want to.","I refused = maine mana kiya. Because I didn't want to = kyunki nahi chahta tha.","I refused because I didn't want to = short negative past desire.",5,undefined,[{word:"I refused because I didn't want to",meaning:"mana kiya kyunki nahi chahta tha"}]),

  q("d12-ex-q054","d12-t2-s1","'Kya usne apni job quit karna chaha tha?' ko English mein translate karo.","translation","Did he want to quit his job?","Did he want to quit = past question. Quit = base verb.","Did he want to quit = past simple question.",5,undefined,[{word:"did he want to quit his job",meaning:"kya usne job quit karna chaha tha"}]),

  q("d12-ex-q055","d12-t2-s2","'She always wanted to be the best version of herself.' ka matlab kya hai?","mcq","Woh hamesha khud ka sabse accha version banna chahti thi","Always wanted = hamesha chahna (past continuous desire). Best version = sabse accha version.","Always wanted to be = hamesha chahna. Best version = sabse accha.",8,{a:"Woh khud se pyaar nahi karti thi",b:"Woh hamesha khud ka sabse accha version banna chahti thi",c:"Woh doosron se behtar nahi banna chahti thi",d:"Woh sirf ek baar best version banna chahti thi"}),

  q("d12-ex-q056","d12-t2-s3","'Meri dost ne kaha ki woh Paris ghoomna chahti thi.' ko reported speech mein translate karo.","translation","My friend said that she wanted to visit Paris.","Said that + wanted (backshift from wants). Reported speech.","Said that she wanted = reported speech past.",5,undefined,[{word:"my friend said that she wanted to visit Paris",meaning:"dost ne kaha ki Paris ghoomna chahti thi"}]),

  q("d12-ex-q057","d12-t1-s1","'Woh ek artist banna chahta tha par usne engineer ki padhai ki.' ko English mein translate karo.","translation","He wanted to become an artist but he studied engineering.","Wanted to become = past desire. But = lekin (contrast). Studied = past simple.","He wanted to become + but studied = past desire + contrast.",8,undefined,[{word:"he wanted to become an artist",meaning:"artist banna chahta tha"},{word:"but he studied engineering",meaning:"par engineering padhi"}]),

  q("d12-ex-q058","d12-t1-s2","'Mujhe pata hai ki woh ghar jaana chahta tha.' ko English mein translate karo.","translation","I know that he wanted to go home.","I know = mujhe pata hai. That he wanted to go = embedded past desire.","I know that he wanted to go = embedded past desire.",5,undefined,[{word:"I know that he wanted to go home",meaning:"pata hai ki ghar jaana chahta tha"}]),

  q("d12-ex-q059","d12-t1-s3","'Unhe nahi pata tha ki woh kya banana chahte the.' ko English mein translate karo.","translation","They didn't know what they wanted to become.","Didn't know = nahi pata tha. What they wanted to become = embedded past desire question.","Didn't know + what they wanted = past + embedded desire.",8,undefined,[{word:"they didn't know what they wanted to become",meaning:"pata nahi tha ki kya banana chahte the"}]),

  q("d12-ex-q060","d12-t2-s1","'Kya tumhare boss chahte the ki tum overtime karo?' ko English mein translate karo.","translation","Did your boss want you to work overtime?","Did + boss + want + you (object) + to work = past question + object + infinitive.","Did your boss want you to work overtime = past question + object + infinitive.",8,undefined,[{word:"did your boss want you to work overtime",meaning:"kya boss chahte the ki overtime karo"}]),

  q("d12-ex-q061","d12-t2-s2","'Unka ek sapna tha — bahut saare logon ki zindagi badalna.' ko English mein translate karo.","translation","They had a dream — to change the lives of many people.","Had a dream = sapna tha. To change the lives = infinitive phrase.","They had a dream to change = past dream + infinitive.",8,undefined,[{word:"they had a dream to change",meaning:"sapna tha ki badlen"},{word:"the lives of many people",meaning:"bahut saare logon ki zindagi"}]),

  q("d12-ex-q062","d12-t2-s3","'Usne kaha ki woh kabhi bhi politician nahi banna chahta tha.' ko reported speech mein translate karo.","translation","He said that he never wanted to become a politician.","Said that + never wanted = reported speech past negative desire.","He said that he never wanted = reported speech negative.",8,undefined,[{word:"he said that he never wanted",meaning:"usne kaha ki kabhi nahi chahta tha"}]),

  q("d12-ex-q063","d12-t1-s1","'Sirf ek cheez chahiye thi — pyaar aur sahara.' ko English mein translate karo.","translation","All they wanted was love and support.","All they wanted was = sirf yahi chahiye tha. Emphatic expression.","All they wanted was = emphatic past desire.",8,undefined,[{word:"all they wanted was love and support",meaning:"sirf pyaar aur sahara chahiye tha"}]),

  q("d12-ex-q064","d12-t1-s2","'Woh chahte the ki unka kaam logo ke kaam aaye.' ko English mein translate karo.","translation","They wanted their work to be useful to people.","Wanted + their work (object) + to be (infinitive) + useful to people.","They wanted their work to be useful = past + object + infinitive.",8,undefined,[{word:"they wanted their work to be useful",meaning:"chahte the ki kaam kaam aaye"}]),

  q("d12-ex-q065","d12-t1-s3","'Woh nahi chahti thi ki koi usse judge kare.' ko English mein translate karo.","translation","She didn't want anyone to judge her.","Didn't want + anyone (object) + to judge (infinitive) + her.","She didn't want anyone to judge her = negative past + object + infinitive.",8,undefined,[{word:"she didn't want anyone to judge her",meaning:"nahi chahti thi ki koi judge kare"}]),

  q("d12-ex-q066","d12-t2-s1","'Did you ___ (want) to be a teacher?' — fill in.","fill_blank","want","Past question: Did + base verb (want). Did you want = sahi.",5,undefined,[{word:"did you want to be a teacher",meaning:"kya tum teacher banna chahte the"}]),

  q("d12-ex-q067","d12-t2-s2","'Woh chahta tha ki unki baat sunni jaaye.' ko English mein translate karo.","translation","He wanted his voice to be heard.","Wanted + his voice (object) + to be heard (passive infinitive). Past desire.","He wanted his voice to be heard = past + passive infinitive.",10,undefined,[{word:"he wanted his voice to be heard",meaning:"chahta tha ki baat suni jaaye"}]),

  q("d12-ex-q068","d12-t2-s3","'Usne bataya ki woh sirf peace chahti thi.' ko reported speech mein translate karo.","translation","She told me that she only wanted peace.","Told me that + only wanted (backshift) + peace (noun).","She told me that she only wanted peace = reported speech.",5,undefined,[{word:"she told me that she only wanted peace",meaning:"bataya ki sirf peace chahti thi"}]),

  q("d12-ex-q069","d12-t1-s1","'Bachpan ka ek sapna — space mein jaana.' ko English mein translate karo.","translation","A childhood dream — to go to space.","A childhood dream = bachpan ka sapna. To go to space = infinitive.","A childhood dream = past aspiration.",5,undefined,[{word:"a childhood dream",meaning:"bachpan ka sapna"},{word:"to go to space",meaning:"space mein jaana"}]),

  q("d12-ex-q070","d12-t1-s2","'Unhe koi complaint nahi karni thi — bas apna kaam karna tha.' ko English mein translate karo.","translation","They didn't want to complain — they just wanted to do their work.","Didn't want to complain = negative past. Just wanted to do = past positive desire.","Didn't want to + just wanted to = contrast in past desires.",5,undefined,[{word:"they didn't want to complain",meaning:"complaint nahi karni thi"},{word:"they just wanted to do their work",meaning:"bas apna kaam karna tha"}]),

  q("d12-ex-q071","d12-t1-s1","'Uss waqt main sirf ek accha dost banana chahta tha.' ko English mein translate karo.","translation","At that time, I just wanted to be a good friend.","At that time = uss waqt. Just wanted to be = sirf banna chahta tha.","I just wanted to be = simple past desire.",5,undefined,[{word:"I just wanted to be a good friend",meaning:"sirf accha dost banna chahta tha"}]),

  q("d12-ex-q072","d12-t1-s2","'Woh apni life mein real happiness chahte the.' ko English mein translate karo.","translation","They wanted real happiness in their life.","Wanted + noun (real happiness). Past desire for abstract noun.","They wanted real happiness = past + noun desire.",5,undefined,[{word:"they wanted real happiness",meaning:"sachchi khushi chahte the"}]),

  q("d12-ex-q073","d12-t1-s3","'Main uss samay gusse mein tha aur kisi se baat nahi karna chahta tha.' ko English mein translate karo.","translation","I was angry at that time and I didn't want to talk to anyone.","I was angry = past Be Verb. Didn't want to talk = negative past desire.","I was angry + didn't want to talk = combined past.",5,undefined,[{word:"I was angry",meaning:"main gusse mein tha"},{word:"I didn't want to talk to anyone",meaning:"kisi se baat nahi karna chahta tha"}]),

  q("d12-ex-q074","d12-t2-s1","'Kya usne apna naam change karna chaha tha?' ko English mein translate karo.","translation","Did he want to change his name?","Did he want to change = past question. Change = base verb.","Did he want to change = past question.",5,undefined,[{word:"did he want to change his name",meaning:"kya apna naam badalna chaha tha"}]),

  q("d12-ex-q075","d12-t2-s2","'Meri dadi chahti thin ki sab roz school jayein.' ko English mein translate karo.","translation","My grandmother wanted everyone to go to school every day.","My grandmother wanted + everyone (object) + to go (infinitive).","Grandmother wanted everyone to go = past + object + infinitive.",5,undefined,[{word:"my grandmother wanted everyone to go to school",meaning:"dadi chahti thin ki sab school jayein"}]),

  q("d12-ex-q076","d12-t2-s3","'Teacher ne kaha ki woh chahte the ki hum mehnat karein.' ko reported speech mein translate karo.","translation","The teacher said that he wanted us to work hard.","Said that + wanted (backshift) + us (object) + to work hard.","Teacher said that he wanted us to work hard = reported speech.",8,undefined,[{word:"the teacher said that he wanted us to work hard",meaning:"teacher ne kaha ki woh chahte the ki mehnat karein"}]),

  q("d12-ex-q077","d12-t1-s1","'Unka ek hi goal tha — apni family ki care karna.' ko English mein translate karo.","translation","They had only one goal — to take care of their family.","Had only one goal = sirf ek goal tha. To take care = infinitive.","Had one goal + to take care = past goal expression.",5,undefined,[{word:"they had only one goal",meaning:"sirf ek goal tha"},{word:"to take care of their family",meaning:"family ki care karna"}]),

  q("d12-ex-q078","d12-t1-s2","'Woh apni company mein ek positive culture chahte the.' ko English mein translate karo.","translation","They wanted a positive culture in their company.","Wanted + noun (a positive culture). Past organizational desire.","They wanted a positive culture = past + noun desire.",5,undefined,[{word:"they wanted a positive culture",meaning:"positive culture chahte the"}]),

  q("d12-ex-q079","d12-t1-s3","Error detect karo: 'She didn't wanted to leave the city.'","error_detection","She didn't want to leave the city.","After 'didn't', use base form (want, not 'wanted'). Didn't want.","Didn't + base verb. Didn't want = sahi. Didn't wanted = galat.",5,{a:"She didn't wanted to leave the city.",b:"She not wanted to leave the city.",c:"She didn't want to leave the city.",d:"She wasn't wanted to leave the city."}),

  q("d12-ex-q080","d12-t2-s1","'Kya tumhare school mein sab cricket khelna chahte the?' ko English mein translate karo.","translation","Did everyone in your school want to play cricket?","Did everyone want to play = past question. Everyone = singular.","Did everyone want to play = past simple question.",5,undefined,[{word:"did everyone in your school want to play cricket",meaning:"kya sab cricket khelna chahte the"}]),

  q("d12-ex-q081","d12-t2-s2","'Unhe apni income se zyada nahi chahiye tha.' ko English mein translate karo.","translation","They didn't want more than their income.","Didn't want more than = comparative negative past desire.","They didn't want more than their income = negative past desire.",5,undefined,[{word:"they didn't want more than their income",meaning:"income se zyada nahi chahte the"}]),

  q("d12-ex-q082","d12-t2-s3","'Usne kaha ki woh apne family ke sath Christmas celebrate karna chahti hai.' ko reported speech mein translate karo.","translation","She said that she wanted to celebrate Christmas with her family.","Said that + wanted (backshift). Reported speech past.","Said that she wanted = reported speech backshift.",5,undefined,[{word:"she said that she wanted to celebrate",meaning:"usne kaha ki celebrate karna chahti thi"}]),

  q("d12-ex-q083","d12-t1-s1","'Woh kuch aisa banana chahta tha jisse log yaad rakhein.' ko English mein translate karo.","translation","He wanted to create something that people would remember.","Wanted to create = past desire. Something that people would remember = relative clause.","Wanted to create + relative clause = complex past desire.",8,undefined,[{word:"he wanted to create something",meaning:"kuch banana chahta tha"},{word:"that people would remember",meaning:"jisse log yaad rakhein"}]),

  q("d12-ex-q084","d12-t1-s2","'Bachpan mein sab kuch simple tha — main sirf khushi chahta tha.' ko English mein translate karo.","translation","In childhood, everything was simple — I just wanted happiness.","In childhood = bachpan mein. Everything was simple = past Be Verb. Just wanted = past desire.","Childhood was simple + I just wanted happiness = past nostalgia.",5,undefined,[{word:"in childhood, everything was simple",meaning:"bachpan mein sab simple tha"},{word:"I just wanted happiness",meaning:"sirf khushi chahta tha"}]),

  q("d12-ex-q085","d12-t1-s3","'Unhone try kiya par woh kamiyab nahi hona chahte the.' ko English mein translate karo.","translation","They tried but they didn't want to succeed.","Tried = past simple. Didn't want to succeed = negative past desire.","They tried but didn't want to succeed = contrast in past.",8,undefined,[{word:"they tried but didn't want to succeed",meaning:"try kiya par kamiyab nahi hona chahte the"}]),

  q("d12-ex-q086","d12-t2-s1","'Kya tumhare sab dost lawyer banna chahte the?' ko English mein translate karo.","translation","Did all your friends want to become lawyers?","Did all your friends want = past question. Lawyers = plural.","Did all your friends want to become lawyers = past question.",5,undefined,[{word:"did all your friends want to become lawyers",meaning:"kya sab dost lawyer banna chahte the"}]),

  q("d12-ex-q087","d12-t2-s2","'Woh chahte the ki duniya unhe ek inspiring leader ke roop mein yaad kare.' ko English mein translate karo.","translation","They wanted the world to remember them as an inspiring leader.","Wanted + world (object) + to remember (infinitive) + them as a leader.","Wanted the world to remember = past + object + infinitive.",10,undefined,[{word:"they wanted the world to remember them",meaning:"chahte the ki duniya unhe yaad kare"},{word:"as an inspiring leader",meaning:"ek inspiring leader ke roop mein"}]),

  q("d12-ex-q088","d12-t2-s3","'Unhone bataya ki woh project manager banna chahti hai.' ko translate karo.","translation","She told me that she wanted to become a project manager.","Told me that + wanted (backshift from wants). Reported speech.","Told me that she wanted = reported speech.",5,undefined,[{word:"she told me that she wanted to become",meaning:"usne bataya ki banna chahti thi"}]),

  q("d12-ex-q089","d12-t1-s1","'Unka ek hi khwaab tha — bina darr ke jiyo.' ko English mein translate karo.","translation","Their only dream was to live without fear.","Their only dream was = unka sirf ek khwaab tha. To live without fear = infinitive.","Their only dream was to live = past dream + infinitive.",8,undefined,[{word:"their only dream was to live without fear",meaning:"bina darr ke jeene ka khwaab tha"}]),

  q("d12-ex-q090","d12-t1-s2","'Uss waqt mujhe kisi bhi cheez ki parwaah nahi thi — sirf cricket chahiye tha.' ko English mein translate karo.","translation","At that time, I didn't care about anything — I just wanted cricket.","Didn't care = parwaah nahi thi. Just wanted cricket = sirf cricket chahiye tha.","Didn't care + just wanted = past nostalgia about priorities.",5,undefined,[{word:"I just wanted cricket",meaning:"sirf cricket chahiye tha"}]),

  q("d12-ex-q091","d12-t1-s3","'Main nahi chahta tha ki koi mujhe dekhe.' ko English mein translate karo.","translation","I didn't want anyone to see me.","Didn't want + anyone (object) + to see (infinitive) + me.","I didn't want anyone to see me = negative past + object + infinitive.",5,undefined,[{word:"I didn't want anyone to see me",meaning:"nahi chahta tha ki koi dekhe"}]),

  q("d12-ex-q092","d12-t2-s1","'Kya tum chahte the ki doctor tumhari operation kare?' ko English mein translate karo.","translation","Did you want the doctor to operate on you?","Did you want + the doctor (object) + to operate on you = past question.","Did you want the doctor to operate = past question + object + infinitive.",8,undefined,[{word:"did you want the doctor to operate",meaning:"kya doctor se operation karwana chahte the"}]),

  q("d12-ex-q093","d12-t2-s2","'Unki maa chahti thi ki woh kabhi bhi drugs se door rahe.' ko English mein translate karo.","translation","His mother wanted him to always stay away from drugs.","Mother wanted + him (object) + to always stay away (infinitive).","Mother wanted him to stay away = past + object + infinitive.",8,undefined,[{word:"his mother wanted him to always stay away from drugs",meaning:"chahti thi ki hamesha drugs se door rahe"}]),

  q("d12-ex-q094","d12-t2-s3","'Usne confess kiya ki woh pehle se hi chodi job karna chahta tha.' ko reported speech mein translate karo.","translation","He confessed that he had wanted to quit the job earlier.","Confessed that + had wanted (Past Perfect in reported speech). Earlier = pehle se.","Confessed that he had wanted = reported speech Past Perfect.",10,undefined,[{word:"he confessed that he had wanted",meaning:"usne maana ki woh chahta tha"},{word:"to quit the job earlier",meaning:"pehle job chodni thi"}]),

  q("d12-ex-q095","d12-t1-s1","'Woh ek khiladi banna chahta tha jisko poori duniya jaane.' ko English mein translate karo.","translation","He wanted to become a player that the whole world would know.","Wanted to become = past desire. That the whole world would know = relative clause.","Wanted to become + relative clause = complex past aspiration.",8,undefined,[{word:"he wanted to become a player",meaning:"khiladi banna chahta tha"},{word:"that the whole world would know",meaning:"jisko poori duniya jaane"}]),

  q("d12-ex-q096","d12-t1-s2","'Jab main chhota tha, main pilot banna chahta tha.' ko English mein translate karo.","translation","When I was young, I wanted to become a pilot.","When I was young = childhood. Wanted to become = past desire.","When I was young + wanted to become = childhood aspiration.",5,undefined,[{word:"when I was young",meaning:"jab main chhota tha"},{word:"I wanted to become a pilot",meaning:"main pilot banna chahta tha"}]),

  q("d12-ex-q097","d12-t1-s3","'Unhone yeh kabhi nahi chaha tha ki unke baad koi unhe bhool jaaye.' ko English mein translate karo.","translation","They had never wanted anyone to forget them after their time.","Had never wanted = Past Perfect negative. Anyone to forget them = object + infinitive.","Had never wanted = Past Perfect negative desire.",10,undefined,[{word:"they had never wanted anyone to forget them",meaning:"kabhi nahi chaha tha ki koi bhool jaaye"}]),

  q("d12-ex-q098","d12-t2-s1","'Kya tum apna ghar kisi aur jagah banana chahte the?' ko English mein translate karo.","translation","Did you want to build your home in a different place?","Did you want to build = past question + to + base verb.","Did you want to build = past question.",5,undefined,[{word:"did you want to build your home",meaning:"kya ghar banana chahte the"},{word:"in a different place",meaning:"kisi aur jagah"}]),

  q("d12-ex-q099","d12-t2-s2","'Unka ek aur sapna tha — ek best-selling book likhna.' ko English mein translate karo.","translation","They had another dream — to write a best-selling book.","Had another dream = ek aur sapna tha. To write = infinitive.","Had another dream to write = past aspiration.",5,undefined,[{word:"they had another dream",meaning:"ek aur sapna tha"},{word:"to write a best-selling book",meaning:"best-seller likhna"}]),

  q("d12-ex-q100","d12-t3-s1","'Wanted' ka kya use hai aur yeh 'want' se kaise alag hai?","mcq","Wanted = past tense desire; want = present desire. Wanted shows past unfulfilled or fulfilled wishes.","Wanted is the past tense of want, used for past desires, wishes, and requests.","Wanted = want ka past. Past desires, past requests, reported speech mein use hota hai.",5,{a:"Dono same hain",b:"Wanted = past tense desire; want = present desire. Wanted shows past unfulfilled or fulfilled wishes.",c:"Wanted = future tense",d:"Want = past, Wanted = present"}),
];

// ══════════════════════════════════════════════════════════════
// DAY 13 EXTRA QUESTIONS — Use of Let (Permission/Allow)
// 100 questions — Let me, Let him, Don't let, Let + object + verb
// ══════════════════════════════════════════════════════════════
export const DAY_13_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d13-t1-s1: Let me basics ─────────────────────────────────
  q("d13-ex-q001","d13-t1-s1","'Let' ka main use kya hai?","mcq","Kisi ko kuch karne ki permission dena / allow karna","'Let' = to allow or permit someone to do something. Let + object + base verb.","Let = allow/permit. Let + object + base verb = permission structure.",5,{a:"Request karna",b:"Kisi ko kuch karne ki permission dena / allow karna",c:"Suggestion dena (sab milkar ke liye)",d:"Command dena"}),

  q("d13-ex-q002","d13-t1-s1","'Mujhe bhi try karne dena.' ko English mein translate karo.","translation","Let me try too.","Let me + base verb. Try = base verb. Too = bhi.","Let me try = mujhe try karne dena. Let + me + base verb.",5,undefined,[{word:"let me try",meaning:"mujhe try karne dena"},{word:"too",meaning:"bhi"}]),

  q("d13-ex-q003","d13-t1-s1","'Let' ke baad kaun sa form aata hai?","mcq","Object (me/him/her/them/us) + base verb","Let + object + base verb. Let me go. Let him speak. Let them in.","Let + object + base verb. Object pronoun ke baad base verb.",5,{a:"Let + to + base verb",b:"Let + V-ing",c:"Object (me/him/her/them/us) + base verb",d:"Let + V3"}),

  q("d13-ex-q004","d13-t1-s1","'Let her speak.' ka Hindi matlab kya hai?","mcq","Usse bolne dena.","Let her speak = her ko bolne dena. Permission to speak.","Let her speak = usse bolne dena. Bolne ki permission.",5,{a:"Woh kuch bole.",b:"Usse bolne dena.",c:"Woh baat karna chahti hai.",d:"Woh bol sakti hai."}),

  q("d13-ex-q005","d13-t1-s1","Error detect karo: 'Let me to explain the situation.'","error_detection","Let me explain the situation.","After 'let me', use base verb (no 'to'). Let me explain (not 'to explain').","Let me + base verb. 'to' nahi lagte. Let me explain = sahi.",5,{a:"Let me to explain the situation.",b:"Let me explaining the situation.",c:"Let me explain the situation.",d:"Let to me explain the situation."}),

  q("d13-ex-q006","d13-t1-s1","'Mujhe tumse ek baat kehni hai.' ko English mein translate karo.","translation","Let me tell you something.","Let me + tell (base verb). Something = kuch baat.","Let me tell you something = mujhe kuch kehna hai.",5,undefined,[{word:"let me tell you something",meaning:"mujhe tumse kuch kehna hai"}]),

  q("d13-ex-q007","d13-t1-s1","'Unhe aandar aane dena.' ko English mein translate karo.","translation","Let them come in.","Let them + come in (base verb phrase). Them = unhe.","Let them come in = unhe aandar aane dena.",5,undefined,[{word:"let them come in",meaning:"unhe aandar aane dena"}]),

  q("d13-ex-q008","d13-t1-s1","'___ him know about the meeting.' — fill in.","fill_blank","Let","Let him know = use let to mean 'allow' or 'make sure he knows'. Idiom.","Let him know = use karo. Let = permission/inform.",5,undefined,[{word:"let him know",meaning:"use bata dena"}]),

  q("d13-ex-q009","d13-t1-s1","'Bacche ko khud decide karne dena.' ko English mein translate karo.","translation","Let the child decide on his own.","Let the child + decide (base verb) + on his own.","Let the child decide = bacche ko decide karne dena.",5,undefined,[{word:"let the child decide",meaning:"bacche ko decide karne dena"},{word:"on his own",meaning:"khud"}]),

  q("d13-ex-q010","d13-t1-s1","'Mujhe apna kaam karne dena.' ko English mein translate karo.","translation","Let me do my work.","Let me + do (base verb) + my work.","Let me do = mujhe karne dena. Let + me + base verb.",5,undefined,[{word:"let me do my work",meaning:"mujhe apna kaam karne dena"}]),

  // ── d13-t1-s2: Let someone do something (various subjects) ──
  q("d13-ex-q011","d13-t1-s2","'Unhe apni pasand ka kaam karne dena.' ko English mein translate karo.","translation","Let them do the work they like.","Let them + do (base verb) + the work they like.","Let them do the work they like = unhe karne dena.",5,undefined,[{word:"let them do the work they like",meaning:"unhe pasand ka kaam karne dena"}]),

  q("d13-ex-q012","d13-t1-s2","'School ne students ko mobile phone laane ki permission di.' ko English mein translate karo.","translation","The school let students bring mobile phones.","Let + students (object) + bring (base verb) = gave permission.","School let students bring = school ne bring karne diya.",8,undefined,[{word:"the school let students bring",meaning:"school ne laane diya"}]),

  q("d13-ex-q013","d13-t1-s2","'___ (let) the team choose their leader.' — fill in with correct form.","fill_blank","Let","Base imperative: Let + team + choose. No conjugation needed.","Let the team choose = team ko choose karne dena.",5,undefined,[{word:"let the team choose",meaning:"team ko choose karne dena"}]),

  q("d13-ex-q014","d13-t1-s2","Error detect karo: 'She let him to use her car.'","error_detection","She let him use her car.","After 'let', use base verb (no 'to'). Let him use (not 'to use').","Let + object + base verb. 'to' nahi aata. Let him use = sahi.",8,{a:"She let him to use her car.",b:"She let him using her car.",c:"She let him use her car.",d:"She let him uses her car."}),

  q("d13-ex-q015","d13-t1-s2","'Parents ne unhe late raat tak jaagne diya.' ko English mein translate karo.","translation","The parents let them stay up late at night.","Let them + stay up (base verb phrase) + late at night.","Parents let them stay up late = late jaagne diya.",8,undefined,[{word:"the parents let them stay up late",meaning:"parents ne late jaagne diya"}]),

  q("d13-ex-q016","d13-t1-s2","'Teacher ne students ko bathroom jaane diya.' ko English mein translate karo.","translation","The teacher let the students go to the bathroom.","Let the students + go (base verb) + to the bathroom.","Teacher let students go = teacher ne jaane diya.",5,undefined,[{word:"let the students go to the bathroom",meaning:"students ko bathroom jaane diya"}]),

  q("d13-ex-q017","d13-t1-s2","'___ me help you with this problem.' — fill in.","fill_blank","Let","Let me + help (base verb) = please allow me to help you.","Let me help = mujhe help karne dena.",5,undefined,[{word:"let me help you",meaning:"mujhe tumhari madad karne dena"}]),

  q("d13-ex-q018","d13-t1-s2","'Doctor ne mujhe hospital se jaane diya.' ko English mein translate karo.","translation","The doctor let me leave the hospital.","Let me + leave (base verb) + the hospital.","Doctor let me leave = doctor ne jaane diya.",5,undefined,[{word:"the doctor let me leave the hospital",meaning:"doctor ne hospital se jaane diya"}]),

  q("d13-ex-q019","d13-t1-s2","'Company ne employees ko work from home karne diya.' ko English mein translate karo.","translation","The company let employees work from home.","Let employees + work (base verb) + from home.","Company let employees work from home = WFH ki permission di.",8,undefined,[{word:"the company let employees work from home",meaning:"company ne WFH karne diya"}]),

  q("d13-ex-q020","d13-t1-s2","'Manager ne team ko lunch mein extra time lene diya.' ko English mein translate karo.","translation","The manager let the team take extra time for lunch.","Let the team + take (base verb) + extra time for lunch.","Manager let team take extra time = extra time lene diya.",5,undefined,[{word:"the manager let the team take extra time",meaning:"manager ne extra time lene diya"}]),

  // ── d13-t1-s3: Don't let (Negative Let) ──────────────────────
  q("d13-ex-q021","d13-t1-s3","'Don't let' ka structure kya hai?","mcq","Don't let + object + base verb (permission deny karna)","Don't let = refuse permission. Don't let them in = unhe andar mat aane do.","Don't let = permission rokna. Don't let + object + base verb.",5,{a:"Let + not + object + verb",b:"Don't let + object + base verb (permission deny karna)",c:"Not let + object + verb",d:"Let + object + not + verb"}),

  q("d13-ex-q022","d13-t1-s3","'Bacchon ko yahan khelne mat dena.' ko English mein translate karo.","translation","Don't let the children play here.","Don't let + the children (object) + play (base verb) + here.","Don't let the children play here = unhe yahan khelne mat do.",5,undefined,[{word:"don't let the children play here",meaning:"bacchon ko yahan khelne mat dena"}]),

  q("d13-ex-q023","d13-t1-s3","'Mat karne dena kisi ko bhi gadbad.' ko English mein translate karo.","translation","Don't let anyone create trouble.","Don't let + anyone (object) + create (base verb) + trouble.","Don't let anyone create trouble = kisi ko gadbad mat karne dena.",5,undefined,[{word:"don't let anyone create trouble",meaning:"kisi ko gadbad mat karne dena"}]),

  q("d13-ex-q024","d13-t1-s3","Error detect karo: 'Don't let him to enter the room.'","error_detection","Don't let him enter the room.","Don't let + object + base verb (no 'to'). Enter = base verb.","Don't let him enter = sahi. 'to' nahi lagte.",5,{a:"Don't let him to enter the room.",b:"Don't let him entering the room.",c:"Don't let him enter the room.",d:"Not let him enter the room."}),

  q("d13-ex-q025","d13-t1-s3","'Mat aane dena kisi ko party mein bina invite ke.' ko English mein translate karo.","translation","Don't let anyone come to the party without an invitation.","Don't let + anyone (object) + come (base verb) + without an invitation.","Don't let anyone come = kisi ko mat aane dena.",5,undefined,[{word:"don't let anyone come",meaning:"kisi ko mat aane dena"},{word:"without an invitation",meaning:"bina invite ke"}]),

  q("d13-ex-q026","d13-t1-s3","'Negative thoughts ko tumhare andar mat aane dena.' ko English mein translate karo.","translation","Don't let negative thoughts enter your mind.","Don't let + negative thoughts (object) + enter (base verb) + your mind.","Don't let negative thoughts enter = negative thoughts ko mat aane dena.",8,undefined,[{word:"don't let negative thoughts enter your mind",meaning:"negative thoughts mat aane dena"}]),

  q("d13-ex-q027","d13-t1-s3","'___ let failure stop you.' (Don't) — fill in.","fill_blank","Don't","Don't let failure stop you = failure ko rokne mat dena. Motivational.","Don't let failure stop you = failure se mat rukna.",5,undefined,[{word:"don't let failure stop you",meaning:"failure ko rokne mat dena"}]),

  q("d13-ex-q028","d13-t1-s3","'Pareshaniyon ko tumhare sapnon ko khatam mat karne dena.' ko English mein translate karo.","translation","Don't let problems destroy your dreams.","Don't let + problems (object) + destroy (base verb) + your dreams.","Don't let problems destroy your dreams = problems ko sapne mat todne dena.",8,undefined,[{word:"don't let problems destroy your dreams",meaning:"problems ko sapne mat todne dena"}]),

  q("d13-ex-q029","d13-t1-s3","'Please kisi ko bhi mere phone ko use mat karne dena.' ko English mein translate karo.","translation","Please don't let anyone use my phone.","Please don't let + anyone (object) + use (base verb) + my phone.","Don't let anyone use my phone = kisi ko use mat karne dena.",5,undefined,[{word:"don't let anyone use my phone",meaning:"kisi ko phone use mat karne dena"}]),

  q("d13-ex-q030","d13-t1-s3","'Bacche ko bahar jaane mat dena abhi.' ko English mein translate karo.","translation","Don't let the child go outside now.","Don't let + the child (object) + go (base verb) + outside + now.","Don't let the child go outside = bacche ko bahar mat jaane dena.",5,undefined,[{word:"don't let the child go outside",meaning:"bacche ko bahar mat jaane dena"},{word:"now",meaning:"abhi"}]),

  // ── d13-t2-s1: Professional Let expressions ──────────────────
  q("d13-ex-q031","d13-t2-s1","'Let me clarify' ka use kab hota hai?","mcq","Jab hum koi point clear karna chahein (professional setting mein)","'Let me clarify' = professional phrase to clarify a point in a meeting or discussion.","Let me clarify = clarity dene ke liye professional phrase.",5,{a:"Jab hum agree karna chahein",b:"Jab hum koi point clear karna chahein (professional setting mein)",c:"Jab hum goodbye kehna chahein",d:"Jab hum question poochna chahein"}),

  q("d13-ex-q032","d13-t2-s1","'Mujhe is project ke baare mein explain karne dena.' ko English mein translate karo.","translation","Let me explain about this project.","Let me + explain (base verb) + about this project.","Let me explain about this project = professional explanation.",5,undefined,[{word:"let me explain",meaning:"mujhe explain karne dena"}]),

  q("d13-ex-q033","d13-t2-s1","'Let me check the details.' ka professional context kya hai?","mcq","Meeting ya email mein — jab hum information verify karna chahein","'Let me check' is commonly used in professional settings when you need time to verify information.","Let me check = professional information verification phrase.",5,{a:"Jab hum refuse karna chahein",b:"Meeting ya email mein — jab hum information verify karna chahein",c:"Jab hum homework submit karna chahein",d:"Sirf formal emails mein"}),

  q("d13-ex-q034","d13-t2-s1","'Unhe apna kaam khud decide karne dena — micromanage mat karo.' ko English mein translate karo.","translation","Let them decide their own work — don't micromanage.","Let them + decide (base verb) + their own work. Don't micromanage = mat karo.","Let them decide = unhe decide karne dena. Professional advice.",8,undefined,[{word:"let them decide their own work",meaning:"unhe khud decide karne dena"},{word:"don't micromanage",meaning:"micromanage mat karo"}]),

  q("d13-ex-q035","d13-t2-s1","Error detect karo: 'Let me to show you the data.'","error_detection","Let me show you the data.","Let me + base verb (no 'to'). Show = base verb. Let me show.","Let me + base verb. 'to' nahi lagte. Let me show = sahi.",5,{a:"Let me to show you the data.",b:"Let me showing you the data.",c:"Let me show you the data.",d:"Let me shows you the data."}),

  q("d13-ex-q036","d13-t2-s1","'Meeting ke baad ek quick call karte hain.' ko English mein translate karo.","translation","Let's have a quick call after the meeting.","Let's (not 'let') = suggestion for group. Have a quick call = meeting se baad.","Let's have a quick call = group suggestion. Let's = Let us.",5,undefined,[{word:"let's have a quick call",meaning:"ek quick call karte hain"},{word:"after the meeting",meaning:"meeting ke baad"}]),

  q("d13-ex-q037","d13-t2-s1","'Mujhe presentation ke liye thoda time dena.' ko English mein translate karo.","translation","Let me have some time for the presentation.","Let me + have (base verb) + some time + for the presentation.","Let me have some time = professional request for time.",5,undefined,[{word:"let me have some time",meaning:"mujhe thoda time dena"},{word:"for the presentation",meaning:"presentation ke liye"}]),

  q("d13-ex-q038","d13-t2-s1","'Client ko apni baat rakhne dena — suno pehle.' ko English mein translate karo.","translation","Let the client speak — listen first.","Let the client + speak (base verb). Imperative: professional advice.","Let the client speak = client ko bolne dena. Professional.",5,undefined,[{word:"let the client speak",meaning:"client ko bolne dena"},{word:"listen first",meaning:"pehle suno"}]),

  q("d13-ex-q039","d13-t2-s1","'Mujhe project ka status check karne dena.' ko English mein translate karo.","translation","Let me check the project status.","Let me + check (base verb) + the project status.","Let me check = professional request to check.",5,undefined,[{word:"let me check the project status",meaning:"mujhe status check karne dena"}]),

  q("d13-ex-q040","d13-t2-s1","'Manager ne team ko apna approach choose karne diya.' ko English mein translate karo.","translation","The manager let the team choose their own approach.","Let the team + choose (base verb) + their own approach.","Manager let team choose = team ko choose karne diya.",8,undefined,[{word:"the manager let the team choose their own approach",meaning:"manager ne approach choose karne diya"}]),

  // ── d13-t2-s2: Idioms with Let ──────────────────────────────
  q("d13-ex-q041","d13-t2-s2","'Let it go' ka matlab kya hai?","mcq","Chod do — mat pakdo iss cheez ko","'Let it go' = release, stop holding onto something. Very common idiom.","Let it go = chod do, bhool jao. Common English idiom.",5,{a:"Isse roko.",b:"Chod do — mat pakdo iss cheez ko",c:"Isse pakad lo.",d:"Isse dekho."}),

  q("d13-ex-q042","d13-t2-s2","'Let me down' ka matlab kya hai?","mcq","Disappoint karna / nirakash karna","'Let someone down' = to disappoint them, to fail their expectations.","Let me down = mujhe disappoint karna. Idiom.",5,{a:"Mujhe girano.",b:"Mujhe dhoondo.",c:"Disappoint karna / nirakash karna",d:"Mujhe madad karo."}),

  q("d13-ex-q043","d13-t2-s2","'Please don't let me down.' ka matlab kya hai?","mcq","Please mujhe disappoint mat karo.","Don't let me down = don't disappoint me. Idiom for trust.","Don't let me down = mujhe disappoint mat karna.",5,{a:"Mujhe giraao nahi.",b:"Please mujhe disappoint mat karo.",c:"Mujhe neeche mat aane dena.",d:"Please mujhe chhodna nahi."}),

  q("d13-ex-q044","d13-t2-s2","'Let bygones be bygones' ka matlab kya hai?","mcq","Jo hua so hua — purani baatein bhool jao","'Let bygones be bygones' = forget the past, move on. Common forgiveness idiom.","Let bygones be bygones = purani baatein bhool jao, age badho.",8,{a:"Purani baatein yaad karo.",b:"Jo hua so hua — purani baatein bhool jao",c:"Purani galtiyan sudharo.",d:"Purani cheezein waapas lao."}),

  q("d13-ex-q045","d13-t2-s2","'Let me know if you need anything.' ka use kab hota hai?","mcq","Jab hum kisi ko information share karne ki request karte hain","'Let me know' = inform me. Please tell me if something comes up. Very common in professional/friendly communication.","Let me know = mujhe batao. Professional/friendly phrase.",5,{a:"Jab hum kuch dena chahte hain",b:"Jab hum kisi ko information share karne ki request karte hain",c:"Jab hum kisi se permission maangte hain",d:"Jab hum argument karna chahte hain"}),

  q("d13-ex-q046","d13-t2-s2","'Please let me know your decision by tomorrow.' ko Hindi mein translate karo.","translation","Kal tak apna faisla mujhe batao.","Let me know = mujhe batao. Your decision = apna faisla. By tomorrow = kal tak.","Let me know your decision = mujhe batao decision. Kal tak.",5,undefined,[{word:"let me know your decision",meaning:"mujhe apna faisla batao"},{word:"by tomorrow",meaning:"kal tak"}]),

  q("d13-ex-q047","d13-t2-s2","'Let off steam' ka matlab kya hai?","mcq","Gussa ya frustration nikaalna — vent karna","'Let off steam' = release tension, express frustration.","Let off steam = gussa ya tension nikaalna. Idiom.",8,{a:"Engine chalana.",b:"Gussa ya frustration nikaalna — vent karna",c:"Barish mein nikalna.",d:"Game khelna."}),

  q("d13-ex-q048","d13-t2-s2","'Let the cat out of the bag' ka matlab kya hai?","mcq","Secret accidentally bata dena","'Let the cat out of the bag' = accidentally reveal a secret.","Let the cat out of the bag = galti se secret bata dena.",8,{a:"Billi ko bahar karo.",b:"Secret jaanboojhkar chhupana.",c:"Secret accidentally bata dena",d:"Kisi ki madad karna."}),

  q("d13-ex-q049","d13-t2-s2","'He let the cat out of the bag about the surprise party.' ka matlab kya hai?","mcq","Usne galti se surprise party ka secret bata diya.","He revealed the secret of the surprise party accidentally.","He let the cat out of the bag = surprise ka secret galti se bata diya.",8,{a:"Usne party mein billi laya.",b:"Usne party organize ki.",c:"Usne galti se surprise party ka secret bata diya.",d:"Usne party cancel ki."}),

  q("d13-ex-q050","d13-t2-s2","'Let sleeping dogs lie' ka matlab kya hai?","mcq","Jo hua so hua — soni baat ko mat jagao (problem dubara mat uthao)","'Let sleeping dogs lie' = don't stir up trouble from the past. Leave problems alone.","Let sleeping dogs lie = purani problems mat uthao. Idiom.",8,{a:"Kutte ko sone dena.",b:"Jo hua so hua — soni baat ko mat jagao (problem dubara mat uthao)",c:"Jaanwaron ka khayal rakhna.",d:"Purani cheezein yaad karna."}),

  // ── d13-t2-s3: Let in daily conversation ─────────────────────
  q("d13-ex-q051","d13-t2-s3","'Mujhe ek minute mein vaapas aane dena.' ko English mein translate karo.","translation","Let me be back in a minute.","Let me + be (base verb) + back in a minute.","Let me be back = mujhe vaapas aane dena.",5,undefined,[{word:"let me be back in a minute",meaning:"mujhe ek minute mein vaapas aane dena"}]),

  q("d13-ex-q052","d13-t2-s3","'Karo na — hume bhi try karne dena.' ko English mein translate karo.","translation","Come on — let us try too.","Let us + try (base verb) + too. Us = hum (group).","Let us try too = hume bhi try karne dena.",5,undefined,[{word:"let us try too",meaning:"hume bhi try karne dena"}]),

  q("d13-ex-q053","d13-t2-s3","'Vo child ko apni marzi ka color choose karne deti hai.' ko English mein translate karo.","translation","She lets the child choose their own color.","Lets = third person singular present of let. Child + choose = base verb.","She lets the child choose = present tense let (third person singular).",8,undefined,[{word:"she lets the child choose",meaning:"woh bacche ko choose karne deti hai"},{word:"their own color",meaning:"apni marzi ka color"}]),

  q("d13-ex-q054","d13-t2-s3","'Abhi mat jaane dena unhe — ruko.' ko English mein translate karo.","translation","Don't let them go yet — wait.","Don't let them + go (base verb) + yet. Yet = abhi.","Don't let them go yet = unhe abhi mat jaane dena.",5,undefined,[{word:"don't let them go yet",meaning:"unhe abhi mat jaane dena"},{word:"wait",meaning:"ruko"}]),

  q("d13-ex-q055","d13-t2-s3","Error detect karo: 'Mom lets me to eat ice cream every day.'","error_detection","Mom lets me eat ice cream every day.","Let/lets + object + base verb (no 'to'). Eat = base verb.","Lets me eat = sahi. Lets me to eat = galat. 'to' nahi.",5,{a:"Mom lets me to eat ice cream every day.",b:"Mom let me eat ice cream every day.",c:"Mom lets me eat ice cream every day.",d:"Mom letting me eat ice cream every day."}),

  q("d13-ex-q056","d13-t2-s3","'Uski maa use der raat tak jaagne deti hai.' ko English mein translate karo.","translation","His mother lets him stay up late.","His mother lets + him (object) + stay up (base verb phrase) + late.","His mother lets him stay up late = late jaagne deti hai.",8,undefined,[{word:"his mother lets him stay up late",meaning:"uski maa use der raat tak jaagne deti hai"}]),

  q("d13-ex-q057","d13-t2-s3","'Mujhe khud se seekhne dena — tum mat batao.' ko English mein translate karo.","translation","Let me learn on my own — don't tell me.","Let me + learn (base verb) + on my own. Don't tell me = mat batao.","Let me learn on my own = khud seekhne dena.",5,undefined,[{word:"let me learn on my own",meaning:"mujhe khud se seekhne dena"}]),

  q("d13-ex-q058","d13-t2-s3","'Unhe khud decide karne do.' ko English mein translate karo.","translation","Let them decide for themselves.","Let them + decide (base verb) + for themselves. Themselves = khud.","Let them decide for themselves = khud decide karne dena.",5,undefined,[{word:"let them decide for themselves",meaning:"unhe khud decide karne dena"}]),

  q("d13-ex-q059","d13-t2-s3","'Mujhe tumse ek cheez poochni hai.' ko English mein translate karo.","translation","Let me ask you something.","Let me + ask (base verb) + you + something.","Let me ask you something = poochne dena.",5,undefined,[{word:"let me ask you something",meaning:"mujhe kuch poochna hai"}]),

  q("d13-ex-q060","d13-t2-s3","'Hame unke decisions mein dakhal nahi dena chahiye — unhe apna kaam karne dena chahiye.' ko English mein translate karo.","translation","We shouldn't interfere in their decisions — we should let them do their work.","Should let them + do (base verb) + their work. Let = allow.","We should let them do their work = unhe karne dena chahiye.",8,undefined,[{word:"we should let them do their work",meaning:"unhe apna kaam karne dena chahiye"}]),

  // More Day 13 questions (61-100)
  q("d13-ex-q061","d13-t1-s1","'Mujhe baat khatam karne dena.' ko English mein translate karo.","translation","Let me finish talking.","Let me + finish (base verb) + talking.","Let me finish talking = baat khatam karne dena.",5,undefined,[{word:"let me finish talking",meaning:"mujhe baat khatam karne dena"}]),

  q("d13-ex-q062","d13-t1-s2","'Principal ne school mein phone use karne ki permission nahi di.' ko English mein translate karo.","translation","The principal didn't let students use phones in school.","Didn't let + students (object) + use (base verb) = past permission denial.","Didn't let students use = school mein phone use nahi karne diya.",8,undefined,[{word:"the principal didn't let students use phones",meaning:"principal ne phone use nahi karne diya"}]),

  q("d13-ex-q063","d13-t1-s3","'Darr ko apni zindagi pe control mat karne dena.' ko English mein translate karo.","translation","Don't let fear control your life.","Don't let + fear (object) + control (base verb) + your life.","Don't let fear control = darr ko control mat karne dena.",8,undefined,[{word:"don't let fear control your life",meaning:"darr ko zindagi pe control mat karne dena"}]),

  q("d13-ex-q064","d13-t2-s1","'Mujhe is contract ko pehle review karne dena.' ko English mein translate karo.","translation","Let me review this contract first.","Let me + review (base verb) + this contract + first.","Let me review first = professional review request.",5,undefined,[{word:"let me review this contract first",meaning:"mujhe pehle contract review karne dena"}]),

  q("d13-ex-q065","d13-t2-s2","'Let go of the past.' ka matlab kya hai?","mcq","Beeiti baaton ko chod do / bhool jao","'Let go of' = release, stop holding onto. Let go of the past = past ko bhool jao.","Let go of the past = past ko chod do. Common motivational phrase.",5,{a:"Past ki baatein yaad karo.",b:"Beeiti baaton ko chod do / bhool jao",c:"Past mein jaana.",d:"Purani cheezein lao."}),

  q("d13-ex-q066","d13-t2-s3","'Hame dusron ko apni khushi choose karne ka haq dena chahiye.' ko English mein translate karo.","translation","We should let others choose their own happiness.","We should let + others (object) + choose (base verb) + their own happiness.","We should let others choose = unhe apni khushi choose karne dena.",8,undefined,[{word:"we should let others choose their own happiness",meaning:"dusron ko khushi choose karne dena"}]),

  q("d13-ex-q067","d13-t1-s1","'Unhe bhaagne dena — pakad mat.' ko English mein translate karo.","translation","Let them run — don't catch them.","Let them + run (base verb). Don't catch them = mat pakad.","Let them run = unhe bhaagne dena.",5,undefined,[{word:"let them run",meaning:"unhe bhaagne dena"},{word:"don't catch them",meaning:"pakad mat"}]),

  q("d13-ex-q068","d13-t1-s2","'Kya usne unhe ghar mein rehne diya?' ko English mein translate karo.","translation","Did he let them stay at his home?","Did he let + them (object) + stay (base verb) + at his home. Past question.","Did he let them stay = past question with let.",5,undefined,[{word:"did he let them stay",meaning:"kya usne rehne diya"},{word:"at his home",meaning:"ghar mein"}]),

  q("d13-ex-q069","d13-t1-s3","'Kisi bhi galat cheez ko badhne mat dena.' ko English mein translate karo.","translation","Don't let any wrong thing grow.","Don't let + any wrong thing (object) + grow (base verb).","Don't let wrong things grow = galat cheezon ko mat badhne dena.",8,undefined,[{word:"don't let any wrong thing grow",meaning:"kisi bhi galat cheez ko badhne mat dena"}]),

  q("d13-ex-q070","d13-t2-s1","'Mujhe presentation mein ek slide add karne dena.' ko English mein translate karo.","translation","Let me add one slide to the presentation.","Let me + add (base verb) + one slide + to the presentation.","Let me add one slide = professional request.",5,undefined,[{word:"let me add one slide",meaning:"ek slide add karne dena"},{word:"to the presentation",meaning:"presentation mein"}]),

  q("d13-ex-q071","d13-t2-s2","'Let me be frank with you.' ka matlab kya hai?","mcq","Mujhe tumse seedha baat karne dena / seedhe seedhe bolunga","'Let me be frank' = allow me to be honest/direct with you. Very common professional phrase.","Let me be frank = seedha bolunga. Honesty expression.",5,{a:"Mujhe Frank se milwao.",b:"Mujhe tumse seedha baat karne dena / seedhe seedhe bolunga",c:"Mujhe Frank jaisi tarah behave karne dena.",d:"Mujhe tumhari help karne dena."}),

  q("d13-ex-q072","d13-t2-s3","'Bacchon ko nature mein time bitane dena — woh seekhenge.' ko English mein translate karo.","translation","Let the children spend time in nature — they will learn.","Let the children + spend (base verb) + time in nature.","Let the children spend time in nature = children ko nature mein jaane dena.",5,undefined,[{word:"let the children spend time in nature",meaning:"bacchon ko nature mein time bitane dena"}]),

  q("d13-ex-q073","d13-t1-s1","'Let us all take a moment.' ka matlab kya hai?","mcq","Chaliye hum sabhi ek moment lein.","Let us all = group invitation. Take a moment = ek pal lo.","Let us all = sab milkar. Take a moment = ek pal.",5,{a:"Humein sab rukna chahiye.",b:"Chaliye hum sabhi ek moment lein.",c:"Hum ek saath jayein.",d:"Humein moment miss karna chahiye."}),

  q("d13-ex-q074","d13-t1-s2","'Doctor ne patient ko kuch bhi khaane ki permission nahi di surgery se pehle.' ko English mein translate karo.","translation","The doctor didn't let the patient eat anything before the surgery.","Didn't let + the patient (object) + eat (base verb) + anything + before the surgery.","Doctor didn't let patient eat = khaane ki permission nahi di.",8,undefined,[{word:"the doctor didn't let the patient eat",meaning:"doctor ne khaane ki permission nahi di"},{word:"before the surgery",meaning:"surgery se pehle"}]),

  q("d13-ex-q075","d13-t1-s3","Error detect karo: 'Don't let him knowing about this.'","error_detection","Don't let him know about this.","Don't let + object + base verb. Know = base verb (not knowing).","Don't let him know = sahi. Knowing = V-ing galat yahan.",5,{a:"Don't let him knowing about this.",b:"Don't let him to know about this.",c:"Don't let him know about this.",d:"Don't letting him know about this."}),

  q("d13-ex-q076","d13-t2-s1","'Iss baare mein mujhe soochne dena.' ko English mein translate karo.","translation","Let me think about this.","Let me + think (base verb) + about this.","Let me think about this = soochne dena.",5,undefined,[{word:"let me think about this",meaning:"iss baare mein soochne dena"}]),

  q("d13-ex-q077","d13-t2-s2","'Let me put it this way.' ka matlab kya hai?","mcq","Iss tarah bolta hun — alag andaz mein samjhata hun","'Let me put it this way' = allow me to explain it differently. Common clarification phrase.","Let me put it this way = iss tarah samjhata hun. Explanation phrase.",8,{a:"Isse is jagah rakh dete hain.",b:"Iss tarah bolta hun — alag andaz mein samjhata hun",c:"Chaliye yahan rakhein isse.",d:"Mujhe yeh dene dena."}),

  q("d13-ex-q078","d13-t2-s3","'Unhe apni creativity express karne dena chahiye.' ko English mein translate karo.","translation","We should let them express their creativity.","We should let + them (object) + express (base verb) + their creativity.","We should let them express = creativity express karne dena.",8,undefined,[{word:"we should let them express their creativity",meaning:"unhe creativity express karne dena chahiye"}]),

  q("d13-ex-q079","d13-t1-s1","'Mujhe sunne dena — main sab samjha dunga.' ko English mein translate karo.","translation","Let me listen — I will explain everything.","Let me + listen (base verb). I will explain = main samjha dunga.","Let me listen = sunne dena. I will explain = samjhaunga.",5,undefined,[{word:"let me listen",meaning:"mujhe sunne dena"},{word:"I will explain everything",meaning:"main sab samjha dunga"}]),

  q("d13-ex-q080","d13-t1-s2","'Vo teachers ne students ko khud choose karne diya ki woh kaunse topic par project kare.' ko English mein translate karo.","translation","The teachers let the students choose which topic to work on for their project.","Let the students + choose (base verb) + which topic. Complex permission sentence.","Teachers let students choose = students ko choose karne diya.",8,undefined,[{word:"let the students choose which topic",meaning:"students ko topic choose karne diya"}]),

  q("d13-ex-q081","d13-t1-s3","'Mujhe apni galtiyon se sikhne dena.' ko English mein translate karo.","translation","Let me learn from my mistakes.","Let me + learn (base verb) + from my mistakes.","Let me learn from mistakes = galtiyon se seekhne dena.",5,undefined,[{word:"let me learn from my mistakes",meaning:"mujhe galtiyon se sikhne dena"}]),

  q("d13-ex-q082","d13-t2-s1","'Chaliye mein ek demo de deta hun.' ko English mein translate karo.","translation","Let me give you a quick demo.","Let me + give (base verb) + you + a quick demo.","Let me give a demo = demo dene dena. Professional phrase.",5,undefined,[{word:"let me give you a quick demo",meaning:"ek demo de deta hun"}]),

  q("d13-ex-q083","d13-t2-s2","'Let well enough alone' ka matlab kya hai?","mcq","Agar kuch theek chal raha hai, toh use mat chhedna","'Let well enough alone' = don't try to improve what's already working fine. Leave it alone.","Let well enough alone = jo theek hai use mat bigaadna.",8,{a:"Sirf ache kaam karo.",b:"Agar kuch theek chal raha hai, toh use mat chhedna",c:"Hamesha improvement karo.",d:"Dusron ko akela chod do."}),

  q("d13-ex-q084","d13-t2-s3","'Hum dono ko ek dusre ko samjhane dena chahiye.' ko English mein translate karo.","translation","We should let each other understand.","We should let + each other (object) + understand (base verb).","We should let each other understand = ek dusre ko samjhane dena.",5,undefined,[{word:"we should let each other understand",meaning:"ek dusre ko samjhane dena"}]),

  q("d13-ex-q085","d13-t1-s1","'Unhe apna faisla khud karne dena.' ko English mein translate karo.","translation","Let them make their own decision.","Let them + make (base verb) + their own decision.","Let them make their own decision = khud faisla karne dena.",5,undefined,[{word:"let them make their own decision",meaning:"unhe apna faisla khud karne dena"}]),

  q("d13-ex-q086","d13-t1-s2","'Company ne employees ko Diwali par chutti dedi.' ko English mein translate karo.","translation","The company let employees take a holiday on Diwali.","Let employees + take (base verb) + a holiday. Permission for holiday.","Company let employees take holiday = chutti lene di.",5,undefined,[{word:"the company let employees take a holiday",meaning:"company ne chutti dedi"},{word:"on Diwali",meaning:"Diwali par"}]),

  q("d13-ex-q087","d13-t1-s3","'Jhoot ko andar mat aane dena.' ko English mein translate karo.","translation","Don't let lies enter.","Don't let + lies (object) + enter (base verb). Short and powerful.","Don't let lies enter = jhoot ko mat aane dena.",5,undefined,[{word:"don't let lies enter",meaning:"jhoot ko andar mat aane dena"}]),

  q("d13-ex-q088","d13-t2-s1","'Mujhe situation handle karne dena.' ko English mein translate karo.","translation","Let me handle the situation.","Let me + handle (base verb) + the situation.","Let me handle = situation handle karne dena.",5,undefined,[{word:"let me handle the situation",meaning:"mujhe situation handle karne dena"}]),

  q("d13-ex-q089","d13-t2-s2","'Never let them see you sweat.' ka matlab kya hai?","mcq","Kabhi apni ghababarahat ya tension unhe mat dikho","'Never let them see you sweat' = don't show weakness or nervousness. Idiom for confidence.","Never let them see you sweat = tension mat dikhao.",8,{a:"Pasiina mat aane do.",b:"Kabhi apni ghababarahat ya tension unhe mat dikho",c:"Hamesha confident dikhna zaroori nahi.",d:"Apni success mat dikhao."}),

  q("d13-ex-q090","d13-t2-s3","'Unhe apni speed se kaam karne dena — rush mat karo.' ko English mein translate karo.","translation","Let them work at their own pace — don't rush.","Let them + work (base verb) + at their own pace. Don't rush = mat karo.","Let them work at their own pace = unhe apni speed se karne dena.",8,undefined,[{word:"let them work at their own pace",meaning:"apni speed se karne dena"},{word:"don't rush",meaning:"jaldi mat karo"}]),

  q("d13-ex-q091","d13-t1-s1","'Chaliye mujhe sab samjhane dena.' ko English mein translate karo.","translation","Let me explain everything.","Let me + explain (base verb) + everything.","Let me explain everything = sab samjhane dena.",5,undefined,[{word:"let me explain everything",meaning:"mujhe sab samjhane dena"}]),

  q("d13-ex-q092","d13-t1-s2","'Unhone bacchon ko free time mein khelne diya.' ko English mein translate karo.","translation","They let the children play during free time.","Let the children + play (base verb) + during free time.","They let children play = children ko khelne diya.",5,undefined,[{word:"they let the children play",meaning:"unhone bacchon ko khelne diya"},{word:"during free time",meaning:"free time mein"}]),

  q("d13-ex-q093","d13-t1-s3","'Dar ko apne raste mein aa mat aane dena.' ko English mein translate karo.","translation","Don't let fear come in your way.","Don't let + fear (object) + come (base verb) + in your way.","Don't let fear come in your way = dar ko raste mein mat aane dena.",8,undefined,[{word:"don't let fear come in your way",meaning:"dar ko raste mein mat aane dena"}]),

  q("d13-ex-q094","d13-t2-s1","'Mujhe ek quick update dene dena.' ko English mein translate karo.","translation","Let me give you a quick update.","Let me + give (base verb) + you + a quick update.","Let me give a quick update = update dene dena.",5,undefined,[{word:"let me give you a quick update",meaning:"ek update dene dena"}]),

  q("d13-ex-q095","d13-t2-s2","'Let your work speak for itself.' ka matlab kya hai?","mcq","Apne kaam ko khud baat karne dena — woh sab kuch batayega","'Let your work speak for itself' = your work quality should be its own proof. No need to boast.","Let your work speak = apna kaam khud prove karega. Quality idiom.",8,{a:"Apne baare mein zyada bolo.",b:"Apne kaam ko khud baat karne dena — woh sab kuch batayega",c:"Sirf ache kaam pe dhyan do.",d:"Kaam ko mat chodna."}),

  q("d13-ex-q096","d13-t2-s3","'Hum sab ko ek dusre ko grow karne dena chahiye.' ko English mein translate karo.","translation","We should all let each other grow.","We should all let + each other (object) + grow (base verb).","We should let each other grow = grow karne dena.",8,undefined,[{word:"we should all let each other grow",meaning:"ek dusre ko grow karne dena chahiye"}]),

  q("d13-ex-q097","d13-t1-s1","Error detect karo: 'Let them to go home early today.'","error_detection","Let them go home early today.","Let + object + base verb (no 'to'). Go = base verb. Let them go.","Let them go = sahi. 'to' nahi. Let them to go = galat.",5,{a:"Let them to go home early today.",b:"Let them going home early today.",c:"Let them go home early today.",d:"Lets them go home early today."}),

  q("d13-ex-q098","d13-t1-s2","'Vo sirf creativity ko badhne deti hai — kabhi limit nahi lagaati.' ko English mein translate karo.","translation","She always lets creativity grow — she never puts limits.","She always lets + creativity (object) + grow (base verb). Never puts limits = kabhi limit nahi lagaati.","She always lets creativity grow = hamesha badhne deti hai.",8,undefined,[{word:"she always lets creativity grow",meaning:"hamesha creativity ko badhne deti hai"}]),

  q("d13-ex-q099","d13-t1-s3","'Kisi ko bhi tum pe bura effect daalne mat dena.' ko English mein translate karo.","translation","Don't let anyone have a bad effect on you.","Don't let + anyone (object) + have (base verb) + a bad effect on you.","Don't let anyone have a bad effect = bura effect daalne mat dena.",8,undefined,[{word:"don't let anyone have a bad effect on you",meaning:"kisi ko bhi bura effect daalne mat dena"}]),

  q("d13-ex-q100","d13-t3-s1","'Let' aur 'Let's' mein kya fark hai?","mcq","Let = kisi aur ko permission dena; Let's = sab milkar kuch karne ki suggestion","'Let' = allow someone (Let him go). 'Let's' = Let us = suggestion for everyone (Let's go!).","Let = permission to others. Let's = sab milkar suggestion.",5,{a:"Dono same hain",b:"Let = kisi aur ko permission dena; Let's = sab milkar kuch karne ki suggestion",c:"Let = past, Let's = present",d:"Let's = permission, Let = suggestion"}),
];

// ══════════════════════════════════════════════════════════════
// DAY 14 EXTRA QUESTIONS — Use of Let's (Group Suggestions)
// 100 questions — Let's go, Let's try, Let's not, Shall we?
// ══════════════════════════════════════════════════════════════
export const DAY_14_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d14-t1-s1: Let's basics ───────────────────────────────────
  q("d14-ex-q001","d14-t1-s1","'Let's' ka full form kya hai?","mcq","Let us","Let's = Let us. Contraction of 'let us'. Used for group suggestions.","Let's = Let us. Group suggestion ke liye.",5,{a:"Let me",b:"Let them",c:"Let us",d:"Let it"}),

  q("d14-ex-q002","d14-t1-s1","'Chaliye bahar chalte hain.' ko English mein translate karo.","translation","Let's go outside.","Let's + go (base verb). Outside = bahar.","Let's go outside = group suggestion to go out.",5,undefined,[{word:"let's go outside",meaning:"chaliye bahar chalte hain"}]),

  q("d14-ex-q003","d14-t1-s1","'Let's' ke baad kaun sa form aata hai?","mcq","Base verb (V1)","After Let's, always use the base form of the verb. Let's go, Let's try, Let's eat.","Let's + base verb. Let's go/try/eat = examples.",5,{a:"V-ing",b:"to + V1",c:"Base verb (V1)",d:"V3"}),

  q("d14-ex-q004","d14-t1-s1","'Chaliye kuch naya try karte hain.' ko English mein translate karo.","translation","Let's try something new.","Let's + try (base verb) + something new.","Let's try something new = naya try karne ka suggestion.",5,undefined,[{word:"let's try something new",meaning:"chaliye kuch naya try karte hain"}]),

  q("d14-ex-q005","d14-t1-s1","Error detect karo: 'Let's to eat at the new restaurant.'","error_detection","Let's eat at the new restaurant.","After Let's, use base verb (no 'to'). Let's eat (not 'to eat').","Let's + base verb. 'to' nahi lagte. Let's eat = sahi.",5,{a:"Let's to eat at the new restaurant.",b:"Let's eating at the new restaurant.",c:"Let's eat at the new restaurant.",d:"Lets eat at the new restaurant."}),

  q("d14-ex-q006","d14-t1-s1","'Chaliye milkar kuch positive karte hain.' ko English mein translate karo.","translation","Let's do something positive together.","Let's + do (base verb) + something positive + together.","Let's do something positive together = group suggestion.",5,undefined,[{word:"let's do something positive together",meaning:"milkar kuch positive karte hain"}]),

  q("d14-ex-q007","d14-t1-s1","'Chaliye saath mein enjoy karte hain.' ko English mein translate karo.","translation","Let's enjoy together.","Let's + enjoy (base verb) + together.","Let's enjoy together = saath mein enjoy karne ka suggestion.",5,undefined,[{word:"let's enjoy together",meaning:"saath mein enjoy karte hain"}]),

  q("d14-ex-q008","d14-t1-s1","'___ celebrate this success!' — fill in.","fill_blank","Let's","Let's + celebrate = group suggestion to celebrate.","Let's celebrate = group suggestion. Let's + base verb.",5,undefined,[{word:"let's celebrate",meaning:"chaliye celebrate karte hain"}]),

  q("d14-ex-q009","d14-t1-s1","'Chaliye shuru karte hain.' ko English mein translate karo.","translation","Let's get started.","Let's + get started (phrasal verb). Common opening phrase.","Let's get started = shuru karte hain. Very common phrase.",5,undefined,[{word:"let's get started",meaning:"chaliye shuru karte hain"}]),

  q("d14-ex-q010","d14-t1-s1","'Hum sab milkar yeh karo.' ko English mein translate karo.","translation","Let's all do this together.","Let's all + do (base verb) + this + together.","Let's all do this together = sab milkar karo.",5,undefined,[{word:"let's all do this together",meaning:"hum sab milkar yeh karo"}]),

  // ── d14-t1-s2: Let's not (Negative suggestion) ──────────────
  q("d14-ex-q011","d14-t1-s2","'Let's not' ka structure aur use kya hai?","mcq","Let's not + base verb = negative suggestion (kuch na karne ki suggestion)","Let's not = suggestion NOT to do something. Let's not argue = mat ladein.","Let's not = negative group suggestion.",5,{a:"Let's + not + V-ing",b:"Don't let's + base verb",c:"Let's not + base verb = negative suggestion (kuch na karne ki suggestion)",d:"Let not + us + base verb"}),

  q("d14-ex-q012","d14-t1-s2","'Chaliye mat ladte hain.' ko English mein translate karo.","translation","Let's not fight.","Let's not + fight (base verb). Negative group suggestion.","Let's not fight = mat ladte hain. Negative suggestion.",5,undefined,[{word:"let's not fight",meaning:"chaliye mat ladte hain"}]),

  q("d14-ex-q013","d14-t1-s2","'Chaliye is topic par abhi baat mat karte hain.' ko English mein translate karo.","translation","Let's not talk about this topic now.","Let's not + talk (base verb) + about this topic + now.","Let's not talk now = abhi baat mat karte hain.",5,undefined,[{word:"let's not talk about this topic now",meaning:"abhi is topic par baat mat karte hain"}]),

  q("d14-ex-q014","d14-t1-s2","Error detect karo: 'Lets not wasting time.'","error_detection","Let's not waste time.","Let's not + base verb (no 'wasting'). Waste = base verb. Also 'Lets' should be 'Let's'.","Let's not + base verb. Waste = base verb. Let's not waste = sahi.",5,{a:"Lets not wasting time.",b:"Let's not to waste time.",c:"Let's not waste time.",d:"Let not's waste time."}),

  q("d14-ex-q015","d14-t1-s2","'Chaliye kisi ke baare mein bura mat sochen.' ko English mein translate karo.","translation","Let's not think badly about anyone.","Let's not + think (base verb) + badly about anyone.","Let's not think badly = kisi ke baare mein bura mat sochen.",5,undefined,[{word:"let's not think badly about anyone",meaning:"kisi ke baare mein bura mat sochen"}]),

  q("d14-ex-q016","d14-t1-s2","'Chaliye yeh cheez yahan khatam karte hain, baad mein mat uthana.' ko English mein translate karo.","translation","Let's end this here — let's not bring it up again.","Let's end this here. Let's not bring it up again = mat uthao isse.","Let's end + let's not bring = two Let's suggestions.",5,undefined,[{word:"let's end this here",meaning:"yahan khatam karte hain"},{word:"let's not bring it up again",meaning:"baad mein mat uthana"}]),

  q("d14-ex-q017","d14-t1-s2","'___ not make the same mistake again.' — fill in.","fill_blank","Let's","Let's not + make = negative group suggestion to not repeat mistake.","Let's not make the same mistake = negative suggestion.",5,undefined,[{word:"let's not make the same mistake",meaning:"yahi galti mat karein dobara"}]),

  q("d14-ex-q018","d14-t1-s2","'Chaliye koi bhi important decision jaldi mat lein.' ko English mein translate karo.","translation","Let's not make any important decision quickly.","Let's not + make (base verb) + any important decision + quickly.","Let's not make any decision quickly = negative suggestion.",8,undefined,[{word:"let's not make any important decision quickly",meaning:"koi important decision jaldi mat lein"}]),

  q("d14-ex-q019","d14-t1-s2","'Let's not panic. Let's think clearly.' ka matlab kya hai?","mcq","Mat ghabrao. Clearly sochen. — Negative suggestion + positive suggestion","Two suggestions: Let's not panic (negative) + Let's think (positive). Contrast.","Let's not panic + Let's think = negative + positive suggestion.",5,{a:"Ghabrao aur socho.",b:"Mat ghabrao. Clearly sochen. — Negative suggestion + positive suggestion",c:"Panic karo aur clearly socho.",d:"Kuch mat karo."}),

  q("d14-ex-q020","d14-t1-s2","'Chaliye raat ke baahar jaane ka plan mat karte hain.' ko English mein translate karo.","translation","Let's not plan to go out at night.","Let's not + plan (base verb) + to go out at night.","Let's not plan = raat ke bahar mat jaane ka plan karte hain.",5,undefined,[{word:"let's not plan to go out at night",meaning:"raat ke bahar mat jaane ka plan karten"}]),

  // ── d14-t1-s3: Shall we? (Alternative to Let's?) ─────────────
  q("d14-ex-q021","d14-t1-s3","'Shall we?' aur 'Let's' mein kya fark hai?","mcq","Shall we? = question/invitation (answer maangna), Let's = direct suggestion","'Shall we go?' asks for agreement. 'Let's go' makes a direct suggestion. 'Shall we' is more polite/formal.","Shall we = polite question asking agreement. Let's = direct suggestion.",8,{a:"Koi fark nahi",b:"Shall we? = question/invitation (answer maangna), Let's = direct suggestion",c:"Shall we = Let's ka formal form hai, same meaning",d:"Let's = polite, Shall we = direct"}),

  q("d14-ex-q022","d14-t1-s3","'Shall we begin?' ka equivalent 'Let's' se kaise kahein?","mcq","Let's begin.","Shall we begin? = Let's begin! Same meaning, different politeness.","Shall we begin = Let's begin. Same suggestion, different forms.",5,{a:"Let's beginning.",b:"Let's began.",c:"Let's begin.",d:"Let us to begin."}),

  q("d14-ex-q023","d14-t1-s3","'Kya hum bahar chalein?' ko English mein translate karo (Shall we form).","translation","Shall we go outside?","Shall we + base verb. Go = base verb. 'Shall we go?' = polite invitation.","Shall we go outside = polite invitation/question.",5,undefined,[{word:"shall we go outside",meaning:"kya hum bahar chalein"}]),

  q("d14-ex-q024","d14-t1-s3","'Shall we dance?' ka matlab kya hai?","mcq","Kya hum dance kare? (polite invitation to dance)","Shall we dance? = invitation to dance together. Famous phrase.","Shall we dance = kya hum dance karein? Polite invitation.",5,{a:"Kya tum dance karte ho?",b:"Kya hum dance kare? (polite invitation to dance)",c:"Tum dance karo.",d:"Main dance karunga."}),

  q("d14-ex-q025","d14-t1-s3","'Chaliye party shuru karte hain, kya?' ko English mein translate karo.","translation","Let's start the party, shall we?","Let's + start (base verb) + the party + shall we? (tag question).","Let's start + shall we = Let's with tag question for confirmation.",8,undefined,[{word:"let's start the party, shall we?",meaning:"chaliye party shuru karte hain, kya?"}]),

  // ── d14-t2-s1: Let's in professional settings ─────────────────
  q("d14-ex-q026","d14-t2-s1","'Chaliye meeting schedule karte hain agle haffte.' ko English mein translate karo.","translation","Let's schedule a meeting next week.","Let's + schedule (base verb) + a meeting + next week.","Let's schedule a meeting = professional meeting suggestion.",5,undefined,[{word:"let's schedule a meeting next week",meaning:"chaliye agle hafte meeting karte hain"}]),

  q("d14-ex-q027","d14-t2-s1","'Chaliye project ka review karte hain.' ko English mein translate karo.","translation","Let's review the project.","Let's + review (base verb) + the project. Professional.","Let's review the project = project review karne ka suggestion.",5,undefined,[{word:"let's review the project",meaning:"chaliye project review karte hain"}]),

  q("d14-ex-q028","d14-t2-s1","'___ move on to the next agenda item.' — fill in.","fill_blank","Let's","Let's + move on = agla agenda item pe jaana. Professional meeting phrase.","Let's move on = agla point pe jaate hain. Professional.",5,undefined,[{word:"let's move on",meaning:"chaliye aage badhte hain"}]),

  q("d14-ex-q029","d14-t2-s1","'Chaliye deadline kal raat tak rakhte hain.' ko English mein translate karo.","translation","Let's keep the deadline by tomorrow night.","Let's + keep (base verb) + the deadline + by tomorrow night.","Let's keep the deadline = deadline fix karne ka suggestion.",8,undefined,[{word:"let's keep the deadline by tomorrow night",meaning:"kal raat tak deadline rakhte hain"}]),

  q("d14-ex-q030","d14-t2-s1","Error detect karo: 'Let's discusses this in the meeting.'","error_detection","Let's discuss this in the meeting.","Let's + base verb. Discuss = base verb (not 'discusses').","Let's discuss = sahi. Discusses = third person, Let's ke baad nahi.",5,{a:"Let's discusses this in the meeting.",b:"Let's discussing this in the meeting.",c:"Let's discuss this in the meeting.",d:"Lets discuss this in the meeting."}),

  q("d14-ex-q031","d14-t2-s1","'Chaliye aaj ke saare action items list karte hain.' ko English mein translate karo.","translation","Let's list all today's action items.","Let's + list (base verb) + all today's action items.","Let's list action items = professional task management suggestion.",8,undefined,[{word:"let's list all today's action items",meaning:"aaj ke action items list karte hain"}]),

  q("d14-ex-q032","d14-t2-s1","'Chaliye break ke baad milte hain.' ko English mein translate karo.","translation","Let's meet after the break.","Let's + meet (base verb) + after the break.","Let's meet after the break = professional catch-up suggestion.",5,undefined,[{word:"let's meet after the break",meaning:"chaliye break ke baad milte hain"}]),

  q("d14-ex-q033","d14-t2-s1","'Chaliye is problem ko milkar solve karte hain.' ko English mein translate karo.","translation","Let's solve this problem together.","Let's + solve (base verb) + this problem + together.","Let's solve this problem together = collaborative suggestion.",5,undefined,[{word:"let's solve this problem together",meaning:"milkar problem solve karte hain"}]),

  q("d14-ex-q034","d14-t2-s1","'Chaliye conference call set up karte hain client ke saath.' ko English mein translate karo.","translation","Let's set up a conference call with the client.","Let's + set up (phrasal verb) + a conference call + with the client.","Let's set up a conference call = professional arrangement.",5,undefined,[{word:"let's set up a conference call",meaning:"chaliye conference call lagaate hain"},{word:"with the client",meaning:"client ke saath"}]),

  q("d14-ex-q035","d14-t2-s1","'Chaliye quarterly targets review karte hain.' ko English mein translate karo.","translation","Let's review the quarterly targets.","Let's + review (base verb) + the quarterly targets.","Let's review quarterly targets = professional review suggestion.",5,undefined,[{word:"let's review the quarterly targets",meaning:"quarterly targets review karte hain"}]),

  // ── d14-t2-s2: Motivational Let's phrases ────────────────────
  q("d14-ex-q036","d14-t2-s2","'Let's do this!' ka use kab hota hai?","mcq","Kisi kaam ke shuru mein enthusiasm dikhane ke liye","'Let's do this!' = motivational phrase to start something with enthusiasm and energy.","Let's do this = motivation + enthusiasm at start of task.",5,{a:"Jab hum kaam khatam kar lete hain",b:"Kisi kaam ke shuru mein enthusiasm dikhane ke liye",c:"Jab hum agree nahi karte",d:"Sirf sports mein"}),

  q("d14-ex-q037","d14-t2-s2","'Chaliye aage badhte hain.' ko English mein translate karo.","translation","Let's move forward.","Let's + move forward (phrasal verb). Motivational suggestion.","Let's move forward = aage badhne ka suggestion.",5,undefined,[{word:"let's move forward",meaning:"chaliye aage badhte hain"}]),

  q("d14-ex-q038","d14-t2-s2","'Chaliye sapne bade dekhein.' ko English mein translate karo.","translation","Let's dream big.","Let's + dream (base verb) + big.","Let's dream big = bade sapne dekhne ka suggestion.",5,undefined,[{word:"let's dream big",meaning:"chaliye bade sapne dekhein"}]),

  q("d14-ex-q039","d14-t2-s2","'___ make a difference!' — fill in.","fill_blank","Let's","Let's + make = group motivational suggestion.","Let's make a difference = motivational group suggestion.",5,undefined,[{word:"let's make a difference",meaning:"chaliye kuch badlaav laayein"}]),

  q("d14-ex-q040","d14-t2-s2","'Chaliye ek team ki tarah kaam karein.' ko English mein translate karo.","translation","Let's work as a team.","Let's + work (base verb) + as a team.","Let's work as a team = team motivation suggestion.",5,undefined,[{word:"let's work as a team",meaning:"ek team ki tarah kaam karein"}]),

  q("d14-ex-q041","d14-t2-s2","'Chaliye yeh challenge accept karein.' ko English mein translate karo.","translation","Let's accept this challenge.","Let's + accept (base verb) + this challenge.","Let's accept this challenge = challenge accept karne ka suggestion.",5,undefined,[{word:"let's accept this challenge",meaning:"yeh challenge accept karein"}]),

  q("d14-ex-q042","d14-t2-s2","'Chaliye ek dusre ka support karein.' ko English mein translate karo.","translation","Let's support each other.","Let's + support (base verb) + each other.","Let's support each other = mutual support suggestion.",5,undefined,[{word:"let's support each other",meaning:"ek dusre ka support karein"}]),

  q("d14-ex-q043","d14-t2-s2","'Chaliye nayi shuruwaat karein.' ko English mein translate karo.","translation","Let's make a fresh start.","Let's + make (base verb) + a fresh start.","Let's make a fresh start = nayi shuruwaat ka suggestion.",5,undefined,[{word:"let's make a fresh start",meaning:"nayi shuruwaat karein"}]),

  q("d14-ex-q044","d14-t2-s2","'Let's raise the bar!' ka matlab kya hai?","mcq","Chaliye standard upar uthayein — aur behtar karein","'Raise the bar' = increase standards, do better. Let's raise the bar = let's all do better.","Raise the bar = standard upar karna. Let's raise the bar = sab milkar better karein.",8,{a:"Chaliye bar mein jaayein.",b:"Chaliye standard upar uthayein — aur behtar karein",c:"Chaliye bar ko girayein.",d:"Chaliye ek bar wale ko milein."}),

  q("d14-ex-q045","d14-t2-s2","'Chaliye apna best dein.' ko English mein translate karo.","translation","Let's give our best.","Let's + give (base verb) + our best.","Let's give our best = apna best dene ka suggestion.",5,undefined,[{word:"let's give our best",meaning:"chaliye apna best dein"}]),

  // ── d14-t2-s3: Social and daily Let's ────────────────────────
  q("d14-ex-q046","d14-t2-s3","'Chaliye aaj shaam ko movie dekhte hain.' ko English mein translate karo.","translation","Let's watch a movie this evening.","Let's + watch (base verb) + a movie + this evening.","Let's watch a movie this evening = social suggestion.",5,undefined,[{word:"let's watch a movie this evening",meaning:"aaj shaam ko movie dekhte hain"}]),

  q("d14-ex-q047","d14-t2-s3","'Chaliye weekend mein trip plan karein.' ko English mein translate karo.","translation","Let's plan a trip this weekend.","Let's + plan (base verb) + a trip + this weekend.","Let's plan a trip = weekend trip suggestion.",5,undefined,[{word:"let's plan a trip this weekend",meaning:"weekend mein trip plan karein"}]),

  q("d14-ex-q048","d14-t2-s3","'___ order some pizza tonight.' — fill in.","fill_blank","Let's","Let's + order = group decision to order food.","Let's order pizza = social food suggestion.",5,undefined,[{word:"let's order some pizza",meaning:"chaliye pizza order karte hain"}]),

  q("d14-ex-q049","d14-t2-s3","'Chaliye apne doston ko kal call karte hain.' ko English mein translate karo.","translation","Let's call our friends tomorrow.","Let's + call (base verb) + our friends + tomorrow.","Let's call our friends = social connection suggestion.",5,undefined,[{word:"let's call our friends tomorrow",meaning:"kal doston ko call karte hain"}]),

  q("d14-ex-q050","d14-t2-s3","Error detect karo: 'Let's went to the park yesterday.'","error_detection","Let's go to the park today. / Let's go to the park.","Let's is always followed by base verb (present suggestion). Can't use past 'went'.","Let's + base verb (present/future suggestion). Past tense = wrong.",5,{a:"Let's went to the park yesterday.",b:"Let's going to the park.",c:"Let's go to the park.",d:"Lets go to the park."}),

  q("d14-ex-q051","d14-t2-s3","'Chaliye ek dusre ke birthday celebrate karte hain.' ko English mein translate karo.","translation","Let's celebrate each other's birthdays.","Let's + celebrate (base verb) + each other's birthdays.","Let's celebrate birthdays = social celebration suggestion.",5,undefined,[{word:"let's celebrate each other's birthdays",meaning:"ek dusre ke birthday celebrate karte hain"}]),

  q("d14-ex-q052","d14-t2-s3","'Chaliye aaj raat saath khaana khaate hain.' ko English mein translate karo.","translation","Let's have dinner together tonight.","Let's + have (base verb) + dinner + together + tonight.","Let's have dinner together = dinner suggestion.",5,undefined,[{word:"let's have dinner together tonight",meaning:"aaj raat saath khaana khaate hain"}]),

  q("d14-ex-q053","d14-t2-s3","'Chaliye purane friends se milte hain.' ko English mein translate karo.","translation","Let's meet old friends.","Let's + meet (base verb) + old friends.","Let's meet old friends = friends se milne ka suggestion.",5,undefined,[{word:"let's meet old friends",meaning:"purane friends se milte hain"}]),

  q("d14-ex-q054","d14-t2-s3","'Chaliye bike ride par chalte hain kal.' ko English mein translate karo.","translation","Let's go for a bike ride tomorrow.","Let's + go (base verb) + for a bike ride + tomorrow.","Let's go for a bike ride = outdoor activity suggestion.",5,undefined,[{word:"let's go for a bike ride tomorrow",meaning:"kal bike ride par chalte hain"}]),

  q("d14-ex-q055","d14-t2-s3","'Chaliye ek dusre ki madadkarte hain.' ko English mein translate karo.","translation","Let's help each other.","Let's + help (base verb) + each other.","Let's help each other = mutual help suggestion.",5,undefined,[{word:"let's help each other",meaning:"ek dusre ki madad karte hain"}]),

  // ── d14-t3-s1: Let's in creative contexts ────────────────────
  q("d14-ex-q056","d14-t3-s1","'Chaliye kuch creative karte hain.' ko English mein translate karo.","translation","Let's do something creative.","Let's + do (base verb) + something creative.","Let's do something creative = creative suggestion.",5,undefined,[{word:"let's do something creative",meaning:"chaliye kuch creative karte hain"}]),

  q("d14-ex-q057","d14-t3-s1","'Chaliye ek nayi story shuru karte hain.' ko English mein translate karo.","translation","Let's start a new story.","Let's + start (base verb) + a new story.","Let's start a new story = creative writing suggestion.",5,undefined,[{word:"let's start a new story",meaning:"chaliye nayi story shuru karte hain"}]),

  q("d14-ex-q058","d14-t3-s1","'Chaliye kuch alag aur nayi cheez learn karte hain.' ko English mein translate karo.","translation","Let's learn something different and new.","Let's + learn (base verb) + something different and new.","Let's learn something new = learning suggestion.",5,undefined,[{word:"let's learn something different and new",meaning:"kuch alag aur nayi cheez seekhte hain"}]),

  q("d14-ex-q059","d14-t3-s1","'___ imagine a world without problems.' — fill in.","fill_blank","Let's","Let's + imagine = creative thinking suggestion.","Let's imagine = creative suggestion.",5,undefined,[{word:"let's imagine a world without problems",meaning:"chaliye ek aisi duniya sochein jahan koi problem nahi"}]),

  q("d14-ex-q060","d14-t3-s1","Error detect karo: 'Let's to think of a better solution.'","error_detection","Let's think of a better solution.","Let's + base verb (no 'to'). Think = base verb. Let's think.","Let's think = sahi. 'to' nahi lagte. Let's to think = galat.",5,{a:"Let's to think of a better solution.",b:"Let's thinking of a better solution.",c:"Let's think of a better solution.",d:"Lets think of a better solution."}),

  // More Day 14 questions (61-100)
  q("d14-ex-q061","d14-t1-s1","'Chaliye Diwali ek special way mein celebrate karte hain.' ko English mein translate karo.","translation","Let's celebrate Diwali in a special way.","Let's + celebrate (base verb) + Diwali + in a special way.","Let's celebrate Diwali in a special way = celebration suggestion.",5,undefined,[{word:"let's celebrate Diwali in a special way",meaning:"special way mein celebrate karte hain"}]),

  q("d14-ex-q062","d14-t1-s2","'Chaliye abhi koi decision mat lein.' ko English mein translate karo.","translation","Let's not make any decision now.","Let's not + make (base verb) + any decision + now.","Let's not make any decision now = negative suggestion.",5,undefined,[{word:"let's not make any decision now",meaning:"abhi koi decision mat lein"}]),

  q("d14-ex-q063","d14-t1-s3","'Shall we check the results together?' ka equivalent 'Let's' se likho.","translation","Let's check the results together.","Shall we check = Let's check. Same meaning, different form.","Shall we check = Let's check. Same suggestion.",5,undefined,[{word:"let's check the results together",meaning:"chaliye milkar results dekhte hain"}]),

  q("d14-ex-q064","d14-t2-s1","'Chaliye project mein ek revision cycle add karte hain.' ko English mein translate karo.","translation","Let's add a revision cycle to the project.","Let's + add (base verb) + a revision cycle + to the project.","Let's add a revision cycle = professional process improvement suggestion.",8,undefined,[{word:"let's add a revision cycle",meaning:"ek revision cycle add karte hain"}]),

  q("d14-ex-q065","d14-t2-s2","'Chaliye ek aisa culture banayein jahan sab grow karein.' ko English mein translate karo.","translation","Let's create a culture where everyone grows.","Let's + create (base verb) + a culture + where everyone grows.","Let's create a culture where everyone grows = motivational suggestion.",8,undefined,[{word:"let's create a culture where everyone grows",meaning:"aisi culture banayein jahan sab grow karein"}]),

  q("d14-ex-q066","d14-t2-s3","'Chaliye saath milkar khana pakaate hain.' ko English mein translate karo.","translation","Let's cook food together.","Let's + cook (base verb) + food + together.","Let's cook food together = cooking suggestion.",5,undefined,[{word:"let's cook food together",meaning:"saath milkar khana pakaate hain"}]),

  q("d14-ex-q067","d14-t3-s1","'Chaliye hum apne English skills par kaam karte hain.' ko English mein translate karo.","translation","Let's work on our English skills.","Let's + work (base verb) + on our English skills.","Let's work on English skills = learning suggestion.",5,undefined,[{word:"let's work on our English skills",meaning:"apne English skills par kaam karte hain"}]),

  q("d14-ex-q068","d14-t1-s1","'Let's + give it a shot.' ka matlab kya hai?","mcq","Chaliye try karte hain — ek baar karke dekhte hain","'Give it a shot' = try it. Let's give it a shot = let's try it together.","Let's give it a shot = chaliye try karte hain. Informal suggestion.",5,{a:"Chaliye shot game khelte hain.",b:"Chaliye try karte hain — ek baar karke dekhte hain",c:"Chaliye kuch shoot karte hain.",d:"Chaliye dono milkar gun use karte hain."}),

  q("d14-ex-q069","d14-t1-s2","'Chaliye ek dusre ke saath seedha aur honest rahein.' ko English mein translate karo.","translation","Let's be honest and straightforward with each other.","Let's + be (base verb) + honest and straightforward + with each other.","Let's be honest = honesty suggestion for group.",5,undefined,[{word:"let's be honest and straightforward",meaning:"seedha aur honest rahein"},{word:"with each other",meaning:"ek dusre ke saath"}]),

  q("d14-ex-q070","d14-t1-s3","'Let's call it a day.' ka matlab kya hai?","mcq","Aaj ke liye bus — kaam khatam karte hain","'Call it a day' = stop working for today. Let's call it a day = let's stop for today.","Let's call it a day = aaj ka kaam khatam karte hain. Very common office phrase.",8,{a:"Chaliye aaj ke liye nahin rukein.",b:"Chaliye kal fir milein.",c:"Aaj ke liye bus — kaam khatam karte hain",d:"Chaliye ek aur ghante kaam karte hain."}),

  q("d14-ex-q071","d14-t2-s1","'Chaliye weekly sync meeting rakkhein.' ko English mein translate karo.","translation","Let's keep a weekly sync meeting.","Let's + keep (base verb) + a weekly sync meeting.","Let's keep a weekly sync meeting = recurring meeting suggestion.",5,undefined,[{word:"let's keep a weekly sync meeting",meaning:"weekly sync meeting rakkhein"}]),

  q("d14-ex-q072","d14-t2-s2","'Let's take it one step at a time.' ka matlab kya hai?","mcq","Chaliye ek ek step karte hain — jaldi mat karein","'Take it one step at a time' = don't rush, be methodical. Let's = group suggestion.","Let's take it one step at a time = slowly aur methodically karte hain.",8,{a:"Chaliye ek saath sab karte hain.",b:"Chaliye ek ek step karte hain — jaldi mat karein",c:"Chaliye sirf ek step karte hain.",d:"Chaliye pehla step skip karte hain."}),

  q("d14-ex-q073","d14-t2-s3","'Chaliye weekend mein kuch relaxing karte hain.' ko English mein translate karo.","translation","Let's do something relaxing this weekend.","Let's + do (base verb) + something relaxing + this weekend.","Let's do something relaxing = weekend activity suggestion.",5,undefined,[{word:"let's do something relaxing this weekend",meaning:"weekend mein kuch aaram deh karte hain"}]),

  q("d14-ex-q074","d14-t3-s1","'Chaliye apni galatiyon se seekhein.' ko English mein translate karo.","translation","Let's learn from our mistakes.","Let's + learn (base verb) + from our mistakes.","Let's learn from mistakes = growth suggestion.",5,undefined,[{word:"let's learn from our mistakes",meaning:"apni galatiyon se seekhein"}]),

  q("d14-ex-q075","d14-t1-s1","Error detect karo: 'Lets go to the market.'","error_detection","Let's go to the market.","'Lets' needs an apostrophe — 'Let's' (Let us). Lets without apostrophe = wrong spelling.","Let's = Let us (apostrophe zaroori hai). Lets bina apostrophe = galat.",5,{a:"Lets go to the market.",b:"Let's goes to the market.",c:"Let's go to the market.",d:"Let's going to the market."}),

  q("d14-ex-q076","d14-t1-s2","'Chaliye yeh topic is hafte khatam mat karte hain — next week continue karein.' ko English mein translate karo.","translation","Let's not finish this topic this week — let's continue next week.","Let's not finish + let's continue = two suggestions.","Let's not finish + let's continue = negative + positive.",5,undefined,[{word:"let's not finish this topic this week",meaning:"is hafte mat khatam karte hain"},{word:"let's continue next week",meaning:"chaliye agle hafte continue karein"}]),

  q("d14-ex-q077","d14-t1-s3","'Shall we recap what we learned today?' ka Hindi matlab kya hai?","translation","Kya hum aaj jo seekha uska recap karein?","Shall we = kya hum karein? Polite invitation for group to recap.","Shall we recap = kya hum recap karein? Polite question.",5,undefined,[{word:"shall we recap",meaning:"kya hum recap karein"},{word:"what we learned today",meaning:"aaj jo seekha"}]),

  q("d14-ex-q078","d14-t2-s1","'Chaliye is quarter ke goals set karte hain.' ko English mein translate karo.","translation","Let's set our goals for this quarter.","Let's + set (base verb) + our goals + for this quarter.","Let's set goals = professional goal-setting suggestion.",5,undefined,[{word:"let's set our goals for this quarter",meaning:"is quarter ke goals set karte hain"}]),

  q("d14-ex-q079","d14-t2-s2","'Let's turn this negative into a positive.' ka matlab kya hai?","mcq","Chaliye is negative cheez ko positive mein badlein","'Turn something into something else' = transform. Let's turn negative into positive = optimistic suggestion.","Let's turn negative into positive = negative cheez ko positive karna.",8,{a:"Chaliye negative hi rahein.",b:"Chaliye is negative cheez ko positive mein badlein",c:"Chaliye positive ko negative mein badlein.",d:"Chaliye kuch bhi mat karein."}),

  q("d14-ex-q080","d14-t2-s3","'Chaliye ek dusre ki success celebrate karte hain.' ko English mein translate karo.","translation","Let's celebrate each other's success.","Let's + celebrate (base verb) + each other's success.","Let's celebrate each other's success = celebratory group suggestion.",5,undefined,[{word:"let's celebrate each other's success",meaning:"ek dusre ki success celebrate karte hain"}]),

  q("d14-ex-q081","d14-t3-s1","'Chaliye ek aisi duniya banayein jahan sab safe hain.' ko English mein translate karo.","translation","Let's create a world where everyone is safe.","Let's + create (base verb) + a world + where everyone is safe.","Let's create a world where = visionary Let's suggestion.",8,undefined,[{word:"let's create a world where everyone is safe",meaning:"aisi duniya banayein jahan sab safe hain"}]),

  q("d14-ex-q082","d14-t1-s1","'Chaliye is cheez ke baare mein seriously sochen.' ko English mein translate karo.","translation","Let's think seriously about this.","Let's + think (base verb) + seriously + about this.","Let's think seriously = thoughtful suggestion.",5,undefined,[{word:"let's think seriously about this",meaning:"is cheez ke baare mein seriously sochen"}]),

  q("d14-ex-q083","d14-t1-s2","'Chaliye mat bhoolein ki hum kyun yahan hain.' ko English mein translate karo.","translation","Let's not forget why we are here.","Let's not + forget (base verb) + why we are here.","Let's not forget = negative suggestion.",5,undefined,[{word:"let's not forget why we are here",meaning:"mat bhoolein ki hum kyun hain"}]),

  q("d14-ex-q084","d14-t2-s1","'Chaliye innovation ke liye time dedicate karein.' ko English mein translate karo.","translation","Let's dedicate time for innovation.","Let's + dedicate (base verb) + time + for innovation.","Let's dedicate time for innovation = professional innovation suggestion.",8,undefined,[{word:"let's dedicate time for innovation",meaning:"innovation ke liye time dedicate karein"}]),

  q("d14-ex-q085","d14-t2-s2","'Let's hit the ground running!' ka matlab kya hai?","mcq","Chaliye ekdum energy ke saath shuru karein — bina roke!","'Hit the ground running' = start immediately with full energy. Let's = group motivational phrase.","Let's hit the ground running = ekdum energy ke saath shuru karein.",8,{a:"Chaliye dheere dheere shuru karein.",b:"Chaliye ekdum energy ke saath shuru karein — bina roke!",c:"Chaliye ground hit karein.",d:"Chaliye daud ke shuru karein."}),

  q("d14-ex-q086","d14-t2-s3","'Chaliye apne parents ko surprise karein is birthday pe.' ko English mein translate karo.","translation","Let's surprise our parents this birthday.","Let's + surprise (base verb) + our parents + this birthday.","Let's surprise parents = family suggestion.",5,undefined,[{word:"let's surprise our parents this birthday",meaning:"parents ko is birthday surprise karein"}]),

  q("d14-ex-q087","d14-t3-s1","'Chaliye is English course ko seriously lete hain.' ko English mein translate karo.","translation","Let's take this English course seriously.","Let's + take (base verb) + this English course + seriously.","Let's take the course seriously = learning commitment suggestion.",5,undefined,[{word:"let's take this English course seriously",meaning:"is course ko seriously lete hain"}]),

  q("d14-ex-q088","d14-t1-s1","'Chaliye milkar ek best plan banate hain.' ko English mein translate karo.","translation","Let's make the best plan together.","Let's + make (base verb) + the best plan + together.","Let's make the best plan = planning suggestion.",5,undefined,[{word:"let's make the best plan together",meaning:"milkar best plan banate hain"}]),

  q("d14-ex-q089","d14-t1-s2","'Chaliye abhi time waste mat karein.' ko English mein translate karo.","translation","Let's not waste time now.","Let's not + waste (base verb) + time + now.","Let's not waste time = negative urgency suggestion.",5,undefined,[{word:"let's not waste time now",meaning:"abhi time waste mat karein"}]),

  q("d14-ex-q090","d14-t1-s3","'Chaliye kisi ek volunteer ko stage pe aane dein.' ko English mein translate karo.","translation","Shall we invite one volunteer to come on stage?","Shall we invite = polite suggestion to invite. One volunteer.","Shall we invite = polite question for group decision.",5,undefined,[{word:"shall we invite one volunteer",meaning:"kisi ek volunteer ko bulayein"},{word:"to come on stage",meaning:"stage pe aane ke liye"}]),

  q("d14-ex-q091","d14-t2-s1","'Chaliye is problem ka root cause dhundthe hain.' ko English mein translate karo.","translation","Let's find the root cause of this problem.","Let's + find (base verb) + the root cause + of this problem.","Let's find the root cause = analytical professional suggestion.",8,undefined,[{word:"let's find the root cause",meaning:"root cause dhundthe hain"},{word:"of this problem",meaning:"is problem ka"}]),

  q("d14-ex-q092","d14-t2-s2","'Let's put our heads together.' ka matlab kya hai?","mcq","Chaliye milkar sochein — apni ideas share karein","'Put heads together' = combine efforts and think together. Team brainstorming.","Let's put our heads together = milkar sochein. Team idiom.",8,{a:"Chaliye apne sir ek jagah rakhein.",b:"Chaliye milkar sochein — apni ideas share karein",c:"Chaliye alag alag sochein.",d:"Chaliye baith jaayein."}),

  q("d14-ex-q093","d14-t2-s3","'Chaliye is Holi par rang aur khushi failaayein.' ko English mein translate karo.","translation","Let's spread colors and joy this Holi.","Let's + spread (base verb) + colors and joy + this Holi.","Let's spread colors and joy = festival celebration suggestion.",5,undefined,[{word:"let's spread colors and joy",meaning:"rang aur khushi failaayein"},{word:"this Holi",meaning:"is Holi par"}]),

  q("d14-ex-q094","d14-t3-s1","'Chaliye apna 75 din ka English course complete karein.' ko English mein translate karo.","translation","Let's complete our 75-day English course.","Let's + complete (base verb) + our 75-day English course.","Let's complete our 75-day course = learning commitment suggestion.",5,undefined,[{word:"let's complete our 75-day English course",meaning:"75 din ka course complete karein"}]),

  q("d14-ex-q095","d14-t1-s1","'Chaliye puri team ke liye ek party organize karte hain.' ko English mein translate karo.","translation","Let's organize a party for the whole team.","Let's + organize (base verb) + a party + for the whole team.","Let's organize a party = team celebration suggestion.",5,undefined,[{word:"let's organize a party for the whole team",meaning:"puri team ke liye party organize karte hain"}]),

  q("d14-ex-q096","d14-t1-s2","'Chaliye kisi bhi choti cheez pe argue mat karte hain.' ko English mein translate karo.","translation","Let's not argue over small things.","Let's not + argue (base verb) + over small things.","Let's not argue over small things = conflict avoidance suggestion.",5,undefined,[{word:"let's not argue over small things",meaning:"choti cheez pe argue mat karte hain"}]),

  q("d14-ex-q097","d14-t2-s1","'Chaliye product roadmap review karte hain aaj.' ko English mein translate karo.","translation","Let's review the product roadmap today.","Let's + review (base verb) + the product roadmap + today.","Let's review the product roadmap = product management suggestion.",5,undefined,[{word:"let's review the product roadmap today",meaning:"aaj product roadmap review karte hain"}]),

  q("d14-ex-q098","d14-t2-s2","'Let's get the ball rolling!' ka matlab kya hai?","mcq","Chaliye shuru karte hain — pehla qadam uthate hain","'Get the ball rolling' = start something, take the first step. Common motivational phrase.","Let's get the ball rolling = chaliye shuru karte hain. First step idiom.",8,{a:"Chaliye ball khelte hain.",b:"Chaliye shuru karte hain — pehla qadam uthate hain",c:"Chaliye ek game khelein.",d:"Chaliye ball girne dein."}),

  q("d14-ex-q099","d14-t3-s1","'Let' aur 'Let's' ke beech ka most important difference summarize karo.","mcq","Let = permission/allow dena (kisi ko); Let's = sab milkar kuch karne ki suggestion","Let = allow someone else (Let him go). Let's = suggest to group (Let's go together!).","Let = permission (others ke liye). Let's = group suggestion (sab milkar).",5,{a:"Dono exact same hain",b:"Let = permission/allow dena (kisi ko); Let's = sab milkar kuch karne ki suggestion",c:"Let's = formal, Let = informal",d:"Let = present, Let's = past"}),

  q("d14-ex-q100","d14-t3-s2","'Chaliye is 75 din ke English course ki ek aur lesson seekhein.' ko English mein translate karo.","translation","Let's learn one more lesson of this 75-day English course.","Let's + learn (base verb) + one more lesson + of this 75-day course.","Let's learn one more lesson = encouragement to continue learning.",5,undefined,[{word:"let's learn one more lesson",meaning:"ek aur lesson seekhein"},{word:"of this 75-day English course",meaning:"is 75 din ke course ki"}]),
];

// ── Master export ─────────────────────────────────────────────
export const ALL_DAYS_12_14_EXTRA: PracticeQ[] = [
  ...DAY_12_EXTRA_QUESTIONS,
  ...DAY_13_EXTRA_QUESTIONS,
  ...DAY_14_EXTRA_QUESTIONS,
];
