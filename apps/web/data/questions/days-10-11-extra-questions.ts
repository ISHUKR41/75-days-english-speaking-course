// ============================================================
// Days 10 & 11 Extra Questions — 120 + 150 = 270 total
// Day 10: Revision + Practice (Days 1-9 review)
// Day 11: Use of Want (I want to, She wants, I want you to)
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
// DAY 10 EXTRA QUESTIONS — Revision + Practice (Days 1-9)
// 120 questions — comprehensive review of all topics
// ══════════════════════════════════════════════════════════════
export const DAY_10_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d10-t1-s1: Be Verb revision (Day 4) ─────────────────────
  q("d10-ex-q001","d10-t1-s1","'I am' ka use kab hota hai?","mcq","Sirf 'I' ke sath (first person singular)","'Am' is used only with 'I'. Is = he/she/it. Are = you/we/they.","Am = sirf 'I' ke sath. Is = he/she/it. Are = you/we/they.",5,{a:"He/She ke sath",b:"We/They ke sath",c:"Sirf 'I' ke sath (first person singular)",d:"Sabhi subjects ke sath"}),

  q("d10-ex-q002","d10-t1-s1","'Woh ek doctor hai.' ko English mein translate karo.","translation","He is a doctor.","Is = third person singular (he/she/it). 'He is a doctor' = profession.","He is = third person singular. He is a doctor = uska profession.",5,undefined,[{word:"he is",meaning:"woh hai"}]),

  q("d10-ex-q003","d10-t1-s1","'We ___ students.' — fill in.","fill_blank","are","We = plural. Are = used with you/we/they.","We = plural. Are = plural ke sath.",5,undefined,[{word:"are",meaning:"hain (plural)"}]),

  q("d10-ex-q004","d10-t1-s1","Error detect karo: 'She are my best friend.'","error_detection","She is my best friend.","She = singular (third person). Use 'is' not 'are'.","She = singular. Is = singular ke sath. Are = galat.",5,{a:"She are my best friend.",b:"She am my best friend.",c:"She is my best friend.",d:"She be my best friend."}),

  q("d10-ex-q005","d10-t1-s1","'Kya tum thake hue ho?' ko English mein translate karo.","translation","Are you tired?","Question with Be Verb: Are + subject + adjective? You = plural/respectful.","Are you = question with 'you'. Tired = thaka hua.",5,undefined,[{word:"are you tired",meaning:"kya tum thake ho"}]),

  q("d10-ex-q006","d10-t1-s1","'Hum khush hain.' ko English mein translate karo.","translation","We are happy.","We + are + adjective. Happy = khush.","We are = hum hain. Happy = khush.",5,undefined,[{word:"we are happy",meaning:"hum khush hain"}]),

  q("d10-ex-q007","d10-t1-s1","Past mein 'is/am' ki jagah kya aata hai?","mcq","was","Past of is/am = was. Past of are = were.","Past: is/am → was. Are → were.",5,{a:"were",b:"was",c:"been",d:"be"}),

  q("d10-ex-q008","d10-t1-s1","'Kal school band tha.' ko English mein translate karo.","translation","The school was closed yesterday.","Was = past singular. Yesterday = past indicator. Closed = band.","Was = past singular. School was closed = school band tha.",5,undefined,[{word:"was closed",meaning:"band tha"}]),

  // ── d10-t1-s2: Has/Have/Had revision (Days 6 & 7) ──────────
  q("d10-ex-q009","d10-t1-s2","'Has' aur 'Have' mein kya fark hai?","mcq","Has = third person singular (he/she/it), Have = I/you/we/they ke liye","Has is used with he/she/it. Have is used with I, you, we, they.","Has = he/she/it ke liye. Have = I/you/we/they ke liye.",5,{a:"Has = plural, Have = singular",b:"Has = third person singular (he/she/it), Have = I/you/we/they ke liye",c:"Dono same hain",d:"Has = present, Have = past"}),

  q("d10-ex-q010","d10-t1-s2","'Mere paas ek car hai.' ko English mein translate karo.","translation","I have a car.","Have = I/you/we/they ke sath. I have = mere paas hai.","I have = mere paas hai (possession).",5,undefined,[{word:"I have",meaning:"mere paas hai"}]),

  q("d10-ex-q011","d10-t1-s2","'Uske paas koi phone nahi tha.' ko English mein translate karo.","translation","He did not have a phone. / He had no phone.","Had = past of have. Negative: did not have OR had no.","Had = past. He didn't have = uske paas nahi tha.",5,undefined,[{word:"he didn't have",meaning:"uske paas nahi tha"},{word:"had no",meaning:"koi nahi tha"}]),

  q("d10-ex-q012","d10-t1-s2","'___ you ever been to Delhi?' — fill in.","fill_blank","Have","Present Perfect question: Have/Has + subject + V3? Have = I/you/we/they.","Have you = present perfect question. Ever = kabhi?",5,undefined,[{word:"have you ever been",meaning:"kya tum kabhi gaye ho"}]),

  q("d10-ex-q013","d10-t1-s2","Error detect karo: 'He have a big house.'","error_detection","He has a big house.","He = third person singular. Use 'has' not 'have' with he/she/it.","He = third person singular. Has = singular ke sath. Have = galat.",5,{a:"He have a big house.",b:"He haves a big house.",c:"He has a big house.",d:"He is have a big house."}),

  q("d10-ex-q014","d10-t1-s2","'Mujhe yaad aaya ki usne meri madad ki thi.' ko English mein translate karo.","translation","I remembered that she had helped me.","Past Perfect: had + V3 (helped). Past action completed before another past action.","Had helped = Past Perfect. Past se pehle ki action.",8,undefined,[{word:"had helped",meaning:"madad ki thi"},{word:"I remembered",meaning:"mujhe yaad aaya"}]),

  q("d10-ex-q015","d10-t1-s2","'Khaana khaane se pehle woh haath dho chuki thi.' ko English mein translate karo.","translation","She had washed her hands before eating food.","Had washed = Past Perfect. Before eating = past time reference.","Before eating = past reference. Had washed = Past Perfect.",8,undefined,[{word:"had washed",meaning:"dho chuki thi"},{word:"before eating",meaning:"khaane se pehle"}]),

  // ── d10-t1-s3: Will Have + There revision (Days 8 & 9) ──────
  q("d10-ex-q016","d10-t1-s3","'Kal tak woh apna kaam pura kar chuka hoga.' ko English mein translate karo.","translation","By tomorrow, he will have completed his work.","Future Perfect: will have + V3. By tomorrow = deadline.","By tomorrow = deadline. Will have completed = Future Perfect.",8,undefined,[{word:"will have completed",meaning:"pura kar chuka hoga"}]),

  q("d10-ex-q017","d10-t1-s3","'___ a hospital near your house?' — fill in.","fill_blank","Is there","Singular question: Is there + a + noun?","Is there = singular question. A hospital = singular.",5,undefined,[{word:"is there a hospital",meaning:"kya hospital hai"}]),

  q("d10-ex-q018","d10-t1-s3","Error detect karo: 'By next year, she will has completed the course.'","error_detection","By next year, she will have completed the course.","Will has = wrong. Future Perfect = will have (not 'will has').","Will has = galat. Will have = sahi. Future Perfect.",5,{a:"By next year, she will has completed the course.",b:"By next year, she will completed the course.",c:"By next year, she will have completed the course.",d:"By next year, she will be completed the course."}),

  q("d10-ex-q019","d10-t1-s3","'Is library mein kai interesting kitaabein hain.' ko English mein translate karo.","translation","There are many interesting books in this library.","Many books = plural present. There are.","Many books = plural. There are = plural ke liye.",5,undefined,[{word:"there are many interesting books",meaning:"kai interesting kitaabein hain"}]),

  q("d10-ex-q020","d10-t1-s3","'By the time you arrive, I ___ lunch.' (cook)","fill_blank","will have cooked","Future Perfect: will have + V3. Cook V3 = cooked. By the time = trigger.","Will have cooked = Future Perfect. By the time = trigger.",8,undefined,[{word:"will have cooked",meaning:"bana lunga"}]),

  // ── d10-t2-s1: Imperative sentences revision (Day 3) ─────────
  q("d10-ex-q021","d10-t2-s1","Imperative sentence kab banate hain?","mcq","Jab kisi ko command, request ya advice deni ho","Imperative sentences give commands, instructions, requests, or advice. They start with a base verb.","Imperative = command/request/advice. Base verb se shuru.",5,{a:"Jab future ki baat karni ho",b:"Jab kisi ko command, request ya advice deni ho",c:"Jab past ki baat karni ho",d:"Jab question poochna ho"}),

  q("d10-ex-q022","d10-t2-s1","'Please mujhe ek glass paani dena.' ko English mein translate karo.","translation","Please give me a glass of water.","Please + base verb = polite command/request. Give = base verb.","Please + base verb = polite imperative.",5,undefined,[{word:"please give",meaning:"dena please"}]),

  q("d10-ex-q023","d10-t2-s1","'Yahan mat baithna.' ko English mein translate karo.","translation","Don't sit here.","Negative imperative: Don't + base verb. Sit = base verb.","Don't + base verb = negative imperative.",5,undefined,[{word:"don't sit",meaning:"mat baithna"}]),

  q("d10-ex-q024","d10-t2-s1","'___ quiet in the library!' — fill in.","fill_blank","Be","Be + adjective = imperative with Be verb. 'Be quiet' = chup raho.","Be + adjective = imperative. Be quiet = chup raho.",5,undefined,[{word:"be quiet",meaning:"chup raho"}]),

  q("d10-ex-q025","d10-t2-s1","Error detect karo: 'Please to open the door.'","error_detection","Please open the door.","Imperative = base verb (no 'to'). 'Please open' not 'Please to open'.","Please + base verb. 'To' nahi lagte imperative mein.",5,{a:"Please to open the door.",b:"Please opens the door.",c:"Please open the door.",d:"Please opened the door."}),

  q("d10-ex-q026","d10-t2-s1","'Roz exercise karo.' ko English mein translate karo.","translation","Exercise every day.","Imperative = base verb. Exercise = base verb. Every day = roz.","Exercise = imperative (base verb).",5,undefined,[{word:"exercise every day",meaning:"roz exercise karo"}]),

  // ── d10-t2-s2: Self introduction revision (Day 2) ───────────
  q("d10-ex-q027","d10-t2-s2","Self introduction mein sabse pehle kya bolte hain?","mcq","Hello/Hi, my name is [Name].","Start with greeting + name. 'Hello, my name is...' or 'Hi, I am...'","Pehle greeting, phir naam. Hello, my name is...",5,{a:"'I live in...' se shuru karo",b:"Hello/Hi, my name is [Name].",c:"'My profession is...' se shuru karo",d:"'I am from...' se shuru karo"}),

  q("d10-ex-q028","d10-t2-s2","'Mera naam Rahul hai aur main Delhi mein rehta hun.' ko English mein translate karo.","translation","My name is Rahul and I live in Delhi.","My name is = mera naam hai. I live in = main rehta hun.","My name is + I live in = self introduction.",5,undefined,[{word:"my name is",meaning:"mera naam hai"},{word:"I live in",meaning:"main rehta hun"}]),

  q("d10-ex-q029","d10-t2-s2","'Main ek teacher hun aur mujhe padhana pasand hai.' ko English mein translate karo.","translation","I am a teacher and I like teaching.","I am a teacher = main ek teacher hun. I like teaching = mujhe padhana pasand hai.","I am + profession. I like + V-ing = hobby.",5,undefined,[{word:"I am a teacher",meaning:"main teacher hun"},{word:"I like teaching",meaning:"mujhe padhana pasand hai"}]),

  q("d10-ex-q030","d10-t2-s2","'My hobby ___ reading books.' — fill in.","fill_blank","is","My hobby is = subject (singular) + is + noun/gerund. Hobby = singular.","Hobby = singular. My hobby is = sahi.",5,undefined,[{word:"my hobby is",meaning:"meri hobby hai"}]),

  // ── d10-t2-s3: This/That/These/Those revision (Day 5) ───────
  q("d10-ex-q031","d10-t2-s3","'This' aur 'That' mein kya fark hai?","mcq","This = paas ki cheez (near), That = door ki cheez (far)","This = near (singular). That = far (singular). These = near (plural). Those = far (plural).","This = paas (singular). That = door (singular).",5,{a:"This = plural, That = singular",b:"This = paas ki cheez (near), That = door ki cheez (far)",c:"This = past, That = future",d:"Koi fark nahi"}),

  q("d10-ex-q032","d10-t2-s3","'Yeh kitaab meri hai.' ko English mein translate karo.","translation","This book is mine.","This = yeh (near, singular). Mine = meri/mera.","This = yeh (paas, singular). Mine = mera/meri.",5,undefined,[{word:"this book",meaning:"yeh kitaab"},{word:"mine",meaning:"meri"}]),

  q("d10-ex-q033","d10-t2-s3","'___ are my parents.' (pointing to parents far away) — fill in.","fill_blank","Those","Far + plural = Those. Parents = plural.","Far + plural = Those. Plural door ki cheezein.",5,undefined,[{word:"those",meaning:"woh (door, plural)"}]),

  q("d10-ex-q034","d10-t2-s3","Error detect karo: 'These is a good book.'","error_detection","This is a good book.","'A good book' = singular. Use 'This' (singular near) not 'These' (plural).","A book = singular. This = singular ke liye. These = galat.",5,{a:"These is a good book.",b:"Those is a good book.",c:"This is a good book.",d:"That are a good book."}),

  q("d10-ex-q035","d10-t2-s3","'Woh log bahut intelligent hain.' ko English mein translate karo.","translation","Those people are very intelligent.","Those = far plural. People = plural. Are = plural.","Those = door plural. Those people are = far plural.",5,undefined,[{word:"those people",meaning:"woh log (door)"}]),

  // ── d10-t3-s1: Grammar pattern mixing ───────────────────────
  q("d10-ex-q036","d10-t3-s1","'Main khush hun kyunki mere paas ek acchi job hai.' ko English mein translate karo.","translation","I am happy because I have a good job.","I am happy = Be Verb. I have = Has/Have. Both in one sentence.","I am (Be Verb) + I have (Has/Have) = combined grammar.",5,undefined,[{word:"I am happy",meaning:"main khush hun"},{word:"I have a good job",meaning:"mere paas acchi job hai"}]),

  q("d10-ex-q037","d10-t3-s1","'Woh khana bana chuki thi jab hum ghar aaye.' ko English mein translate karo.","translation","She had cooked the food when we came home.","Had cooked = Past Perfect. When we came = past simple trigger.","Had cooked (Past Perfect) + when we came (Past Simple).",8,undefined,[{word:"had cooked",meaning:"bana chuki thi"},{word:"when we came",meaning:"jab hum aaye"}]),

  q("d10-ex-q038","d10-t3-s1","'There ___ no electricity last night, so we had to use candles.' — fill in.","fill_blank","was","No electricity = uncountable past. There was no electricity.","No electricity = uncountable singular past. There was.",5,undefined,[{word:"there was no electricity",meaning:"bijli nahi thi"}]),

  q("d10-ex-q039","d10-t3-s1","Error detect karo: 'By morning, they will have ate breakfast.'","error_detection","By morning, they will have eaten breakfast.","Eat V3 = eaten (not 'ate' which is V2). Future Perfect needs V3.","Eat ka V3 = eaten. Will have eaten = sahi.",5,{a:"By morning, they will have ate breakfast.",b:"By morning, they will eaten breakfast.",c:"By morning, they will have eaten breakfast.",d:"By morning, they will be eaten breakfast."}),

  q("d10-ex-q040","d10-t3-s1","'Don't be ___ in class.' (rude) — fill in.","fill_blank","rude","Negative imperative: Don't + Be + adjective. Rude = badtameez.","Don't be + adjective = negative imperative. Rude = badtameez.",5,undefined,[{word:"don't be rude",meaning:"badtameez mat bano"}]),

  // ── d10-t3-s2: Complete sentence building ───────────────────
  q("d10-ex-q041","d10-t3-s2","'Main student tha aur school mein kaafi marks the mere.' ko English mein translate karo.","translation","I was a student and I had good marks in school.","I was (past Be Verb) + I had (past have) = two past constructions.","I was (past Be) + I had (past have) = combined past.",5,undefined,[{word:"I was a student",meaning:"main student tha"},{word:"I had good marks",meaning:"mere marks the"}]),

  q("d10-ex-q042","d10-t3-s2","'Yeh kaam mushkil hai, lekin main kar sakta hun.' ko English mein translate karo.","translation","This work is difficult, but I can do it.","This = yeh. Is difficult = mushkil hai. I can = main kar sakta hun.","This (demonstrative) + is (Be Verb) + I can = combined grammar.",5,undefined,[{word:"this work is difficult",meaning:"yeh kaam mushkil hai"},{word:"I can do it",meaning:"main kar sakta hun"}]),

  q("d10-ex-q043","d10-t3-s2","'Kya tumne woh movie dekhi hai jo last month aayi thi?' ko English mein translate karo.","translation","Have you seen that movie that came last month?","Have you seen = Present Perfect. That movie = That + noun. Came last month = Past Simple.","Have you seen (Present Perfect) + that (demonstrative) + came last month (Past Simple).",8,undefined,[{word:"have you seen",meaning:"kya dekha hai"},{word:"that movie",meaning:"woh movie"}]),

  q("d10-ex-q044","d10-t3-s2","'There ___ many people who ___ never been to Delhi.' — fill in (are, have).","fill_blank","are; have","There are many people (plural present) + who have never been (present perfect).","There are + who have never = There + Present Perfect combination.",8,undefined,[{word:"there are",meaning:"bahut log hain"},{word:"have never been",meaning:"kabhi nahi gaye"}]),

  q("d10-ex-q045","d10-t3-s2","Error detect karo: 'Those is my books on the table.'","error_detection","Those are my books on the table.","Those = plural. Plural subject + are (not 'is'). 'Are' is used with plural.","Those = plural. Those + are = sahi. 'Is' galat hai.",5,{a:"Those is my books on the table.",b:"These are my books on the table.",c:"Those are my books on the table.",d:"That are my books on the table."}),

  // ── d10-t3-s3: Error detection and mixed practice ───────────
  q("d10-ex-q046","d10-t3-s3","'Kal tak main 75 din ki English course poori kar lunga.' ko English mein translate karo.","translation","By tomorrow, I will have completed the 75-day English course.","Future Perfect: by tomorrow + will have completed.","By tomorrow + will have completed = Future Perfect.",8,undefined,[{word:"will have completed",meaning:"poori kar lunga"}]),

  q("d10-ex-q047","d10-t3-s3","Error detect karo: 'Please to don't talk in class.'","error_detection","Please don't talk in class.","Negative imperative: Please + don't + base verb. 'Please to don't' is wrong.","Please + don't + verb = negative imperative. 'to' nahi lagte.",5,{a:"Please to don't talk in class.",b:"Please doesn't talk in class.",c:"Please don't talk in class.",d:"Please not talk in class."}),

  q("d10-ex-q048","d10-t3-s3","'Main teacher hun, mere paas kai students hain.' ko English mein translate karo.","translation","I am a teacher; I have many students.","I am (Be Verb) + I have (Has/Have). Both combined.","I am (Be Verb) + I have (Has/Have) = combined.",5,undefined,[{word:"I am a teacher",meaning:"main teacher hun"},{word:"I have many students",meaning:"mere paas kai students hain"}]),

  q("d10-ex-q049","d10-t3-s3","'Is gali mein kai purani dukanen thi.' ko English mein translate karo.","translation","There were many old shops in this street.","Many old shops = plural past. There were.","Many shops = plural past. There were = sahi.",5,undefined,[{word:"there were many old shops",meaning:"kai purani dukanen thi"}]),

  q("d10-ex-q050","d10-t3-s3","Sabse important revision point kya hai — Has/Have ka?","mcq","Has = he/she/it; Have = I/you/we/they","Has is for third person singular. Have is for all other persons.","Has = he/she/it (singular). Have = I/you/we/they.",5,{a:"Has = I/you/we/they; Have = he/she/it",b:"Has = he/she/it; Have = I/you/we/they",c:"Has aur Have same hain",d:"Has = past, Have = present"}),

  // Day 10 extra questions (71-120)
  q("d10-ex-q051","d10-t1-s1","'Aap kaisi hain?' ko English mein translate karo.","translation","How are you?","Are = second person. 'How are you?' = basic greeting question.","How are you = svaasthya ke baare mein basic question.",5,undefined,[{word:"how are you",meaning:"aap kaisi/kaise hain"}]),

  q("d10-ex-q052","d10-t1-s2","'Usne mujhe ek gift diya tha.' ko English mein translate karo.","translation","She had given me a gift.","Had given = Past Perfect. V3 of give = given.","Had given = Past Perfect. Give ka V3 = given.",5,undefined,[{word:"had given",meaning:"diya tha"},{word:"a gift",meaning:"ek gift"}]),

  q("d10-ex-q053","d10-t1-s3","'Kal tak result aa chuka hoga.' ko English mein translate karo.","translation","By tomorrow, the result will have come.","Future Perfect: will have come. By tomorrow = deadline.","By tomorrow + will have come = Future Perfect.",5,undefined,[{word:"will have come",meaning:"aa chuka hoga"}]),

  q("d10-ex-q054","d10-t2-s1","'Roz subah paani piyo.' ko English mein translate karo.","translation","Drink water every morning.","Imperative: base verb (drink). Every morning = roz subah.","Drink = base verb. Imperative sentence.",5,undefined,[{word:"drink water",meaning:"paani piyo"}]),

  q("d10-ex-q055","d10-t2-s2","'Main computer engineer hun aur Bangalore mein kaam karta hun.' ko English mein translate karo.","translation","I am a computer engineer and I work in Bangalore.","I am + profession. I work in + city. Self introduction pattern.","I am + profession + I work in + location = self intro.",5,undefined,[{word:"I am a computer engineer",meaning:"main computer engineer hun"},{word:"I work in Bangalore",meaning:"Bangalore mein kaam karta hun"}]),

  q("d10-ex-q056","d10-t2-s3","'___ is my school.' (pointing nearby) — fill in.","fill_blank","This","Nearby singular = This. School = singular.","Nearby singular = This. This is my school.",5,undefined,[{word:"this is",meaning:"yeh hai (paas, singular)"}]),

  q("d10-ex-q057","d10-t3-s1","'Kya usne exam pass kiya tha pehle?' ko English mein translate karo.","translation","Had he passed the exam before?","Past Perfect question: Had + subject + V3? Before = pehle.","Past Perfect question: Had he passed = Past Perfect.",5,undefined,[{word:"had he passed",meaning:"kya woh pass kar chuka tha"}]),

  q("d10-ex-q058","d10-t3-s2","Error detect karo: 'She have a fever yesterday.'","error_detection","She had a fever yesterday.","Yesterday = past. 'Have' past = had. She + had = correct past.","Yesterday = past. Had = past of have. She had = sahi.",5,{a:"She have a fever yesterday.",b:"She has a fever yesterday.",c:"She had a fever yesterday.",d:"She were having a fever yesterday."}),

  q("d10-ex-q059","d10-t3-s3","'Woh log tumhare dost hain.' ko English mein translate karo.","translation","Those people are your friends.","Those = far plural. Are = plural. Your friends = tumhare dost.","Those = far plural. Those are = plural ke sath.",5,undefined,[{word:"those people",meaning:"woh log"},{word:"are your friends",meaning:"tumhare dost hain"}]),

  q("d10-ex-q060","d10-t3-s3","'By the time school closes, I ___ 6 classes today.' (teach)","fill_blank","will have taught","Teach V3 = taught. By the time = trigger. Future Perfect.","Teach ka V3 = taught. Will have taught = Future Perfect.",8,undefined,[{word:"will have taught",meaning:"padha chuka hounga"}]),

  q("d10-ex-q061","d10-t1-s1","'They ___ not at home.' (present) — fill in.","fill_blank","are","They = plural. Are = plural present. Negative: They are not.","They = plural. Are not = plural negative present.",5,undefined,[{word:"they are not",meaning:"woh nahi hain"}]),

  q("d10-ex-q062","d10-t1-s2","'Kya tumhare paas koi idea hai?' ko English mein translate karo.","translation","Do you have any idea?","Do you have = informal question with 'have'. Any idea = koi idea.","Do you have any idea = informal question.",5,undefined,[{word:"do you have any idea",meaning:"kya tumhare paas koi idea hai"}]),

  q("d10-ex-q063","d10-t1-s3","'Is area mein pehle ek farm tha.' ko English mein translate karo.","translation","There was a farm in this area before.","A farm = singular past. Before = past indicator. There was.","There was + singular = past. Before = past indicator.",5,undefined,[{word:"there was a farm",meaning:"ek farm tha"},{word:"before",meaning:"pehle"}]),

  q("d10-ex-q064","d10-t2-s1","'Careful raho!' ko English mein translate karo.","translation","Be careful!","Be + adjective = imperative. Careful = savdhan.","Be careful = imperative. Be + adjective = command.",5,undefined,[{word:"be careful",meaning:"savdhan raho"}]),

  q("d10-ex-q065","d10-t2-s2","'Mujhe cricket khelna bahut pasand hai.' ko English mein translate karo.","translation","I love playing cricket. / I like playing cricket very much.","I love playing = I like very much = bahut pasand hai.","I love playing cricket = like + V-ing = pasand hai.",5,undefined,[{word:"I love playing cricket",meaning:"mujhe cricket khelna bahut pasand hai"}]),

  q("d10-ex-q066","d10-t2-s3","Error detect karo: 'This are my books.'","error_detection","These are my books.","'My books' = plural. Plural near = These (not 'This').","Books = plural. Near plural = These. This = galat.",5,{a:"This are my books.",b:"These is my books.",c:"These are my books.",d:"Those are my books."}),

  q("d10-ex-q067","d10-t3-s1","'Woh is project mein 3 saal se kaam kar rahi hai.' ko English mein translate karo.","translation","She has been working on this project for 3 years.","Has been working = Present Perfect Continuous. For 3 years = duration.","Has been working + for 3 years = Present Perfect Continuous.",8,undefined,[{word:"has been working",meaning:"kaam kar rahi hai"},{word:"for 3 years",meaning:"3 saal se"}]),

  q("d10-ex-q068","d10-t3-s2","'Unke aane se pehle, hum sab taiyaar ho chuke the.' ko English mein translate karo.","translation","Before they arrived, we had all gotten ready.","Had gotten ready = Past Perfect. Before they arrived = past reference.","Before + Past Simple, Past Perfect = sequence of past events.",8,undefined,[{word:"had gotten ready",meaning:"taiyaar ho chuke the"},{word:"before they arrived",meaning:"unke aane se pehle"}]),

  q("d10-ex-q069","d10-t3-s3","'Is jagah par kai prakar ke log milte hain.' ko English mein translate karo.","translation","There are many types of people to meet in this place.","Many types = plural present. There are.","Many types of people = plural. There are.",5,undefined,[{word:"there are many types of people",meaning:"kai prakar ke log milte hain"}]),

  q("d10-ex-q070","d10-t3-s3","Kaun si cheez Future Perfect indicate karti hai sentence mein?","mcq","'By' + time (by tomorrow, by next year, by the time...)","'By' with a time reference signals Future Perfect tense. It shows completion before that future point.","'By' + time = Future Perfect ka indicator.",5,{a:"'Since' + time",b:"'For' + duration",c:"'By' + time (by tomorrow, by next year, by the time...)",d:"'Until' + time"}),

  q("d10-ex-q071","d10-t1-s1","'Tum mujhse door ho.' ko English mein translate karo.","translation","You are far from me.","You are = present Be Verb (second person). Far from me = mujhse door.","You are = second person present. Far from me = mujhse door.",5,undefined,[{word:"you are far from me",meaning:"tum mujhse door ho"}]),

  q("d10-ex-q072","d10-t1-s2","'Unhone poori movie dekh li thi.' ko English mein translate karo.","translation","They had watched the entire movie.","Had watched = Past Perfect. Entire movie = poori movie.","Had watched = Past Perfect. V3 of watch = watched.",5,undefined,[{word:"had watched",meaning:"dekh li thi"},{word:"the entire movie",meaning:"poori movie"}]),

  q("d10-ex-q073","d10-t1-s3","'Kal tak uski salary credit ho chuki hogi.' ko English mein translate karo.","translation","By tomorrow, his salary will have been credited.","Passive Future Perfect: will have been + V3. By tomorrow = deadline.","Passive Future Perfect: will have been credited.",8,undefined,[{word:"will have been credited",meaning:"credit ho chuki hogi"}]),

  q("d10-ex-q074","d10-t2-s1","'Late mat aana.' ko English mein translate karo.","translation","Don't come late.","Negative imperative: Don't + base verb. Come = base verb. Late = late.","Don't come late = negative imperative.",5,undefined,[{word:"don't come late",meaning:"late mat aana"}]),

  q("d10-ex-q075","d10-t2-s2","'Meri sister ek doctor hai aur woh AIIMS mein kaam karti hai.' ko English mein translate karo.","translation","My sister is a doctor and she works at AIIMS.","My sister is (Be Verb) + she works (Present Simple). Third person.",5,undefined,[{word:"my sister is a doctor",meaning:"meri sister doctor hai"},{word:"she works at",meaning:"woh kaam karti hai"}]),

  q("d10-ex-q076","d10-t2-s3","'___ mango is very sweet.' (pointing to one nearby) — fill in.","fill_blank","This","Nearby singular noun = This. Mango = singular.","Nearby singular = This. This mango is...",5),

  q("d10-ex-q077","d10-t3-s1","'Mujhe neend aa rahi thi kyunki maine raat bhar padhai ki thi.' ko English mein translate karo.","translation","I was sleepy because I had studied all night.","I was sleepy = Past Be Verb. I had studied = Past Perfect.","Past Be Verb + Past Perfect = combined sentence.",8,undefined,[{word:"I was sleepy",meaning:"mujhe neend aa rahi thi"},{word:"I had studied all night",meaning:"raat bhar padhai ki thi"}]),

  q("d10-ex-q078","d10-t3-s2","'By year end, there ___ more than 100 employees in our team.' (be, future)","fill_blank","will be","Future There: There will be = kuch hoga. More than 100 = plural future.","Future There: There will be = plural future.",5,undefined,[{word:"there will be",meaning:"honge (future)"}]),

  q("d10-ex-q079","d10-t3-s3","Error detect karo: 'Don't to worry about small things.'","error_detection","Don't worry about small things.","Negative imperative: Don't + base verb (no 'to'). 'Don't to worry' is wrong.","Don't + base verb. 'to' nahi lagte. Don't worry = sahi.",5,{a:"Don't to worry about small things.",b:"Don't worries about small things.",c:"Don't worry about small things.",d:"Doesn't worry about small things."}),

  q("d10-ex-q080","d10-t3-s3","'Main proud hun kyunki mere paas ek loving family hai.' ko English mein translate karo.","translation","I am proud because I have a loving family.","I am proud (Be Verb) + I have (Has/Have) = combined grammar.","I am (Be Verb) + I have (Has/Have) = combined.",5,undefined,[{word:"I am proud",meaning:"main proud hun"},{word:"I have a loving family",meaning:"mere paas loving family hai"}]),

  // 40 more Day 10 revision questions
  q("d10-ex-q081","d10-t1-s1","'It ___ raining outside.' (present) — fill in.","fill_blank","is","It = singular. Is + V-ing = Present Continuous. It is raining.",5,undefined,[{word:"it is raining",meaning:"baarish ho rahi hai"}]),
  q("d10-ex-q082","d10-t1-s2","'I have ___ many cities.' (visit) — fill in.","fill_blank","visited","Present Perfect: have + V3. Visit V3 = visited.","Have visited = Present Perfect. V3 = visited.",5,undefined,[{word:"have visited",meaning:"ghoom aaya hun"}]),
  q("d10-ex-q083","d10-t1-s3","'By June, she ___ her degree.' (complete) — fill in.","fill_blank","will have completed","By June = deadline. Future Perfect = will have completed.","By June = deadline. Will have completed.",5),
  q("d10-ex-q084","d10-t2-s1","'Listen carefully.' ka matlab kya hai?","mcq","Dhyan se suno.","Listen = sunna. Carefully = dhyan se. Imperative sentence.","Listen carefully = dhyan se suno. Imperative.",5,{a:"Kuch mat bolo.",b:"Dhyan se suno.",c:"Uthkar chalo.",d:"Dhyan se dekho."}),
  q("d10-ex-q085","d10-t2-s2","'My name is ___ and I am from ___.' — yeh kaisa sentence hai?","mcq","Self introduction ka basic pattern","My name is + I am from = basic self introduction structure.","My name is + I am from = self intro structure.",5,{a:"Imperative sentence",b:"Self introduction ka basic pattern",c:"Question sentence",d:"Future tense sentence"}),
  q("d10-ex-q086","d10-t2-s3","'That building is very tall.' mein 'that' kis cheez ko indicate karta hai?","mcq","Door ki ek building (singular, far)","That = far singular demonstrative pronoun. Building = singular, far.","That = door singular. Building = singular.",5,{a:"Paas ki ek building",b:"Door ki ek building (singular, far)",c:"Kai buildings (far)",d:"Koi bhi building"}),
  q("d10-ex-q087","d10-t3-s1","'___ they ever met before?' (past) — fill in.","fill_blank","Had","Past Perfect question: Had + subject + V3? Had they met before?","Past Perfect question: Had they met = sahi.",5,undefined,[{word:"had they met",meaning:"kya woh pehle mil chuke the"}]),
  q("d10-ex-q088","d10-t3-s2","'By next month, there ___ 10 new employees in the company.' (future)","fill_blank","will be","Future There: There will be = kuch hoga. New employees = plural future.","There will be = future. New employees = plural future.",5),
  q("d10-ex-q089","d10-t3-s3","'Aaj kal English seekhna important hai.' ko English mein translate karo.","translation","It is important to learn English nowadays.","It is important to = aaj kal important hai. Infinitive structure.","It is important to learn = importance expression.",5,undefined,[{word:"it is important to learn",meaning:"seekhna important hai"},{word:"nowadays",meaning:"aaj kal"}]),
  q("d10-ex-q090","d10-t3-s3","'Was' aur 'Were' mein kya fark hai?","mcq","Was = singular past (I/he/she/it), Were = plural past (you/we/they)","Was = past of am/is (singular). Were = past of are (plural).","Was = singular past. Were = plural past.",5,{a:"Was = plural, Were = singular",b:"Was = singular past (I/he/she/it), Were = plural past (you/we/they)",c:"Dono same hain",d:"Was = present, Were = past"}),

  q("d10-ex-q091","d10-t1-s1","'They ___ very busy yesterday.' (past) — fill in.","fill_blank","were","They = plural. Past plural = were. Yesterday = past indicator.","They = plural. Past plural = were.",5),
  q("d10-ex-q092","d10-t1-s2","'She ___ three brothers.' (have/has) — fill in.","fill_blank","has","She = third person singular. Has = singular.","She = third person singular. Has = singular ke sath.",5,undefined,[{word:"she has",meaning:"uske paas hai"}]),
  q("d10-ex-q093","d10-t1-s3","'There ___ no water in the tank yesterday.' (past) — fill in.","fill_blank","was","No water = uncountable singular past. There was no.","Uncountable past negative: There was no water.",5),
  q("d10-ex-q094","d10-t2-s1","'Idhar aa jao.' ko English mein translate karo.","translation","Come here.","Imperative: base verb. Come = aana. Here = idhar.","Come here = imperative. Base verb.",5,undefined,[{word:"come here",meaning:"idhar aa jao"}]),
  q("d10-ex-q095","d10-t2-s2","'My favorite subject ___ Math.' (is/are) — fill in.","fill_blank","is","My favorite subject = singular. Is = singular present.","Subject = singular. Is = singular ke sath.",5),
  q("d10-ex-q096","d10-t2-s3","'___ flowers are beautiful.' (pointing to flowers near you) — fill in.","fill_blank","These","Near plural = These. Flowers = plural.","Near plural = These. These flowers = paas ke phool.",5),
  q("d10-ex-q097","d10-t3-s1","'Jab woh aaye, main so chuka tha.' ko English mein translate karo.","translation","When he came, I had already slept.","Past Perfect: had slept. When he came = Past Simple. Two past events.","When he came (Past Simple), I had slept (Past Perfect).",8,undefined,[{word:"I had already slept",meaning:"main so chuka tha"},{word:"when he came",meaning:"jab woh aaye"}]),
  q("d10-ex-q098","d10-t3-s2","Error detect karo: 'He were a student last year.'","error_detection","He was a student last year.","He = singular. Past singular = was (not 'were'). Were = plural.","He = singular. Was = singular past. Were = galat.",5,{a:"He were a student last year.",b:"He is a student last year.",c:"He was a student last year.",d:"He are a student last year."}),
  q("d10-ex-q099","d10-t3-s3","'Main teacher hun aur mere paas 30 students hain. Woh sab is class mein hain.' ko English mein translate karo.","translation","I am a teacher and I have 30 students. They are all in this class.","I am (Be Verb) + I have (Has/Have) + They are (Be Verb) + this class (This/That).","Multiple grammar concepts combined: I am + I have + They are + this.",5,undefined,[{word:"I am a teacher",meaning:"main teacher hun"},{word:"I have 30 students",meaning:"mere paas 30 students hain"},{word:"they are all in this class",meaning:"woh sab is class mein hain"}]),
  q("d10-ex-q100","d10-t3-s3","Kaunsa sentence grammatically correct hai?","mcq","By tomorrow, I will have written the letter.","Future Perfect = will have + V3. By tomorrow = deadline. Written = V3 of write.","By tomorrow + will have written = correct Future Perfect.",5,{a:"By tomorrow, I will wrote the letter.",b:"By tomorrow, I will have writing the letter.",c:"By tomorrow, I will have written the letter.",d:"By tomorrow, I had written the letter."}),

  q("d10-ex-q101","d10-t1-s1","'She ___ a good singer.' (is/am/are) — fill in.","fill_blank","is","She = third person singular. Is = singular.","She = singular. Is = singular ke sath.",5),
  q("d10-ex-q102","d10-t1-s2","'___ you eaten lunch?' — fill in.","fill_blank","Have","Have = I/you/we/they ke sath. Question: Have + you + V3?","Have you eaten = Present Perfect question.",5,undefined,[{word:"have you eaten",meaning:"kya tumne khaana khaya"}]),
  q("d10-ex-q103","d10-t1-s3","'By this time next year, we ___ 1 year of marriage.' (complete) — fill in.","fill_blank","will have completed","By this time next year = future deadline. Future Perfect = will have completed.","Will have completed = Future Perfect.",5),
  q("d10-ex-q104","d10-t2-s1","'Shor mat karo.' ko English mein translate karo.","translation","Don't make noise.","Negative imperative: Don't + base verb. Make noise = shor karna.","Don't make noise = negative imperative.",5,undefined,[{word:"don't make noise",meaning:"shor mat karo"}]),
  q("d10-ex-q105","d10-t2-s2","'I ___ from Mumbai.' — fill in for self introduction.","fill_blank","am","I + am = first person singular Be Verb. I am from Mumbai.","I am from Mumbai = self intro. Am = first person.",5),
  q("d10-ex-q106","d10-t2-s3","'Those buildings ___ very old.' (is/are) — fill in.","fill_blank","are","Those = far plural. Plural subject + are.","Those = plural. Are = plural ke sath.",5),
  q("d10-ex-q107","d10-t3-s1","'Maine kaam khatam kiya, lekin usne nahi kiya tha.' ko English mein translate karo.","translation","I finished the work, but he had not finished it.","Finished (past simple) vs Had not finished (past perfect) = sequence.",8,undefined,[{word:"I finished",meaning:"maine kiya"},{word:"he had not finished",meaning:"usne nahi kiya tha"}]),
  q("d10-ex-q108","d10-t3-s2","'Is city mein kai purane temples hain.' ko English mein translate karo.","translation","There are many old temples in this city.","Many old temples = plural present. There are.","Many temples = plural. There are.",5,undefined,[{word:"there are many old temples",meaning:"kai purane temples hain"}]),
  q("d10-ex-q109","d10-t3-s3","'Hamesha sach bolo.' ko English mein translate karo.","translation","Always tell the truth.","Imperative: base verb (tell). Always = hamesha.","Tell the truth = imperative. Always = hamesha.",5,undefined,[{word:"always tell the truth",meaning:"hamesha sach bolo"}]),
  q("d10-ex-q110","d10-t3-s3","'Unhone kaam pura kar liya tha jab main pahuncha.' ko English mein translate karo.","translation","They had completed the work when I arrived.","Past Perfect: had completed. When I arrived = past simple trigger.","Had completed (Past Perfect) + when I arrived (Past Simple).",8,undefined,[{word:"had completed",meaning:"khatam kar liya tha"},{word:"when I arrived",meaning:"jab main pahuncha"}]),

  q("d10-ex-q111","d10-t1-s1","'We ___ not ready.' (present) — fill in.","fill_blank","are","We = plural. Are not = plural present negative.","We = plural. Are = plural ke sath.",5),
  q("d10-ex-q112","d10-t1-s2","'She ___ a great time at the party.' (have — past) — fill in.","fill_blank","had","Past of have = had. She had a great time = usne bahut enjoy kiya.","She had = past. Have ka past = had.",5,undefined,[{word:"she had a great time",meaning:"usne bahut enjoy kiya"}]),
  q("d10-ex-q113","d10-t1-s3","'By Monday, they ___ the project.' (submit) — fill in.","fill_blank","will have submitted","Submit V3 = submitted. By Monday = deadline. Future Perfect.","Submit ka V3 = submitted. Will have submitted.",5),
  q("d10-ex-q114","d10-t2-s1","'Late mat soona.' ko English mein translate karo.","translation","Don't stay up late.","Negative imperative: Don't + base verb. Stay up late = der tak jaagna.","Don't stay up late = negative imperative.",5,undefined,[{word:"don't stay up late",meaning:"late mat soona"}]),
  q("d10-ex-q115","d10-t2-s2","'Main ek singer hun aur mujhe gaana bahut pasand hai.' ko English mein translate karo.","translation","I am a singer and I love singing.","I am + profession. I love + V-ing = passion.","I am a singer + I love singing = self intro with passion.",5,undefined,[{word:"I am a singer",meaning:"main singer hun"},{word:"I love singing",meaning:"mujhe gaana bahut pasand hai"}]),
  q("d10-ex-q116","d10-t2-s3","'___ students are working hard.' (nearby, plural) — fill in.","fill_blank","These","Nearby plural = These. Students = plural.","Near plural = These. These students.",5),
  q("d10-ex-q117","d10-t3-s1","'Kya woh kabhi London gaya tha?' ko English mein translate karo.","translation","Had he ever been to London?","Past Perfect question: Had + subject + V3? Ever = kabhi?","Had he ever been = Past Perfect question.",5,undefined,[{word:"had he ever been",meaning:"kya woh kabhi gaya tha"}]),
  q("d10-ex-q118","d10-t3-s2","'By this time, the rescue team ___ 10 people.' (save) — fill in.","fill_blank","will have saved","By this time = deadline. Future Perfect: will have saved.","By this time = deadline. Will have saved = Future Perfect.",5),
  q("d10-ex-q119","d10-t3-s3","'Sab mil kar ek team ki tarah kaam karo.' ko English mein translate karo.","translation","Work together as a team.","Imperative: Work together = sab milkar kaam karo. As a team = ek team ki tarah.","Work together as a team = imperative.",5,undefined,[{word:"work together",meaning:"sab milkar kaam karo"},{word:"as a team",meaning:"ek team ki tarah"}]),
  q("d10-ex-q120","d10-t3-s3","Days 1-9 ka sabse important concept kya hai?","mcq","Subject-Verb agreement — sahi verb ka sahi subject ke sath use karna","Subject-Verb agreement is the foundation. Using the right form of be verb, have, do with the right subject.","Subject-Verb agreement = sahi verb + sahi subject = sabse important rule.",5,{a:"Sirf vocabulary yaad karna",b:"Subject-Verb agreement — sahi verb ka sahi subject ke sath use karna",c:"Sirf tenses yaad karna",d:"Sirf sentences yaad karna"}),
];

// ══════════════════════════════════════════════════════════════
// DAY 11 EXTRA QUESTIONS — Use of Want
// 150 questions: I want to, She wants, Want someone to, Do you want?
// ══════════════════════════════════════════════════════════════
export const DAY_11_EXTRA_QUESTIONS: PracticeQ[] = [

  // ── d11-t1-s1: I want to + verb (basic) ─────────────────────
  q("d11-ex-q001","d11-t1-s1","'Want to' ka formula kya hai?","mcq","Subject + want/wants + to + base verb","'Want to' = want followed by 'to' and the base form of a verb.","Want to + base verb = desire ka expression.",5,{a:"Subject + want + V-ing",b:"Subject + want/wants + to + base verb",c:"Subject + wanted + to + V3",d:"Subject + want + V3"}),

  q("d11-ex-q002","d11-t1-s1","'Mujhe English sikhni hai.' ko English mein translate karo.","translation","I want to learn English.","I want to + base verb. Learn = sikhna (base verb).","I want to learn = mujhe sikhna hai. Want to + base verb.",5,undefined,[{word:"I want to learn",meaning:"mujhe sikhna hai"}]),

  q("d11-ex-q003","d11-t1-s1","'She ___ to become a doctor.' — fill in.","fill_blank","wants","She = third person singular. Wants = singular form of want.","She = singular. Wants = singular ke sath. She wants to.",5,undefined,[{word:"she wants to",meaning:"woh chahti hai"}]),

  q("d11-ex-q004","d11-t1-s1","'Mujhe kal bahar jaana hai.' ko English mein translate karo.","translation","I want to go out tomorrow.","I want to go = mujhe jaana hai. Go = base verb. Tomorrow = kal.","I want to go = want to + base verb.",5,undefined,[{word:"I want to go",meaning:"mujhe jaana hai"},{word:"tomorrow",meaning:"kal"}]),

  q("d11-ex-q005","d11-t1-s1","Error detect karo: 'He want to eat pizza.'","error_detection","He wants to eat pizza.","He = third person singular. Use 'wants' (not 'want') with he/she/it.","He = singular. Wants = singular ke sath. Want = galat.",5,{a:"He want to eat pizza.",b:"He wanting to eat pizza.",c:"He wants to eat pizza.",d:"He wants eating pizza."}),

  q("d11-ex-q006","d11-t1-s1","'Main apna career science mein banana chahta hun.' ko English mein translate karo.","translation","I want to build my career in science.","I want to build = main banana chahta hun. Build = base verb.","I want to build = want to + base verb.",5,undefined,[{word:"I want to build my career",meaning:"career banana chahta hun"},{word:"in science",meaning:"science mein"}]),

  q("d11-ex-q007","d11-t1-s1","'She wants ___ (study) hard for the exam.' — fill in.","fill_blank","to study","Want + to + base verb. Study = base verb. She wants to study.","Want to + base verb. She wants to study = woh padhna chahti hai.",5,undefined,[{word:"wants to study",meaning:"padhna chahti hai"}]),

  q("d11-ex-q008","d11-t1-s1","'Woh ek famous writer banna chahta hai.' ko English mein translate karo.","translation","He wants to become a famous writer.","He wants to become = woh banna chahta hai. Become = base verb.","He wants to become = want to + base verb (third person singular).",5,undefined,[{word:"he wants to become",meaning:"woh banna chahta hai"}]),

  q("d11-ex-q009","d11-t1-s1","'Humein milkar kaam karna hai.' ko English mein translate karo.","translation","We want to work together.","We want to work = humein milkar kaam karna hai. Work = base verb.","We want to work = want to + base verb (plural subject).",5,undefined,[{word:"we want to work together",meaning:"humein milkar kaam karna hai"}]),

  q("d11-ex-q010","d11-t1-s1","'I want to ___ (read) this book tonight.' — fill in.","fill_blank","read","Want to + base verb. Read = base verb. I want to read.","I want to read = mujhe padhni hai. Want to + base verb.",5,undefined,[{word:"want to read",meaning:"padhni hai"}]),

  // ── d11-t1-s2: Third person (She/He wants) ──────────────────
  q("d11-ex-q011","d11-t1-s2","'Uski beti painter banna chahti hai.' ko English mein translate karo.","translation","His daughter wants to become a painter.","His daughter = third person singular. Wants = singular. To become = base verb.","Third person singular = wants. His daughter wants to become.",5,undefined,[{word:"his daughter wants to become",meaning:"uski beti banna chahti hai"}]),

  q("d11-ex-q012","d11-t1-s2","'Mere bhai ko cricket khelna hai.' ko English mein translate karo.","translation","My brother wants to play cricket.","My brother = third person singular. Wants = singular. To play = base verb.","My brother = singular. Wants to play = want to + base verb.",5,undefined,[{word:"my brother wants to play",meaning:"mere bhai ko khelna hai"}]),

  q("d11-ex-q013","d11-t1-s2","'She ___ to eat (past desire).' — fill in.","fill_blank","wanted","Past of want = wanted. She wanted to eat = woh khaana chahti thi.","Past: wanted to eat = woh khaana chahti thi.",5,undefined,[{word:"she wanted to eat",meaning:"woh khaana chahti thi"}]),

  q("d11-ex-q014","d11-t1-s2","Error detect karo: 'My friend wants eating Chinese food.'","error_detection","My friend wants to eat Chinese food.","Want is followed by 'to + base verb' (not gerund/V-ing). 'Eating' should be 'to eat'.","Want + to + base verb = sahi. Want + V-ing = galat.",5,{a:"My friend wants eating Chinese food.",b:"My friend want to eat Chinese food.",c:"My friend wants to eat Chinese food.",d:"My friend wants to eating Chinese food."}),

  q("d11-ex-q015","d11-t1-s2","'CEO banna chahne wale log kaafi mehnat karte hain.' ko English mein translate karo.","translation","People who want to become CEOs work very hard.","People who want to become = plural relative clause. Work = plural verb.","People who want to become = plural subject. Want to become.",8,undefined,[{word:"who want to become CEOs",meaning:"jo CEO banna chahte hain"},{word:"work very hard",meaning:"kaafi mehnat karte hain"}]),

  q("d11-ex-q016","d11-t1-s2","'Meri company kuch naye clients chahti hai.' ko English mein translate karo.","translation","My company wants some new clients.","Company = singular (treated as one entity). Wants + noun (no infinitive needed).","Company = singular. Wants + noun = wants without 'to'.",8,undefined,[{word:"my company wants",meaning:"meri company chahti hai"},{word:"new clients",meaning:"naye clients"}]),

  q("d11-ex-q017","d11-t1-s2","'Uske parents chahte hain ki woh engineer bane.' ko English mein translate karo.","translation","His parents want him to become an engineer.","Want + object + to + base verb = someone wants someone else to do something.","Want + object + to + verb = doosron ke liye desire.",8,undefined,[{word:"want him to become",meaning:"chahte hain ki woh bane"}]),

  q("d11-ex-q018","d11-t1-s2","'She ___ (not want) to stay late.' — fill in.","fill_blank","doesn't want","She = third person singular. Negative: doesn't want. She doesn't want to stay late.","Negative third person singular: doesn't want. She doesn't want to.",5,undefined,[{word:"doesn't want to",meaning:"nahi chahti hai"}]),

  q("d11-ex-q019","d11-t1-s2","'Mera dost chahta hai ki main uski wedding attend karun.' ko English mein translate karo.","translation","My friend wants me to attend his wedding.","Want + me + to + verb = want someone to do something.","Want + me + to attend = doosre ke liye desire.",8,undefined,[{word:"wants me to attend",meaning:"chahta hai ki main attend karun"}]),

  q("d11-ex-q020","d11-t1-s2","'___ the manager want them to work on weekends?","fill_blank","Does","Third person singular question: Does + he/she/it + want? Does the manager want?","Does = third person singular question. Does the manager want?",5,undefined,[{word:"does the manager want",meaning:"kya manager chahta hai"}]),

  // ── d11-t1-s3: Want + noun (no infinitive) ──────────────────
  q("d11-ex-q021","d11-t1-s3","'Want + noun' ka example kya hai?","mcq","I want a cup of tea.","Want + noun = want + object (no 'to'). I want tea, I want help, I want success.","Want + noun = want + object. No 'to' needed.",5,{a:"I want to a cup of tea.",b:"I want a cup of tea.",c:"I want drinking a cup of tea.",d:"I want for a cup of tea."}),

  q("d11-ex-q022","d11-t1-s3","'Mujhe ek naukri chahiye.' ko English mein translate karo.","translation","I want a job.","I want + noun. Job = noun. No 'to' needed.","I want + noun = direct object desire.",5,undefined,[{word:"I want a job",meaning:"mujhe naukri chahiye"}]),

  q("d11-ex-q023","d11-t1-s3","'Mujhe kuch pani chahiye.' ko English mein translate karo.","translation","I want some water.","Want + noun. Water = uncountable noun. Some water.","I want + some water = uncountable noun desire.",5,undefined,[{word:"I want some water",meaning:"mujhe kuch paani chahiye"}]),

  q("d11-ex-q024","d11-t1-s3","'She wants ___ (advice / to advice / advise).' — fill in correctly.","fill_blank","advice","Want + noun. Advice = noun (not infinitive needed here). She wants advice.","She wants advice = noun. Want + noun = sahi.",5,undefined,[{word:"wants advice",meaning:"salah chahti hai"}]),

  q("d11-ex-q025","d11-t1-s3","Error detect karo: 'He wants a success in life.'","error_detection","He wants success in life.","'Success' = abstract uncountable noun. No article 'a' needed. He wants success.","Success = abstract uncountable. No 'a' before uncountable nouns.",5,{a:"He wants a success in life.",b:"He want success in life.",c:"He wants success in life.",d:"He wants to a success in life."}),

  q("d11-ex-q026","d11-t1-s3","'Bachon ko ice cream chahiye.' ko English mein translate karo.","translation","The children want ice cream.","Children = plural. Want (not wants — plural subject). Ice cream = noun.","Children = plural. Want = plural ke sath. Ice cream = noun.",5,undefined,[{word:"the children want ice cream",meaning:"bachon ko ice cream chahiye"}]),

  q("d11-ex-q027","d11-t1-s3","'Main apne liye ek naya laptop chahta hun.' ko English mein translate karo.","translation","I want a new laptop for myself.","I want + noun (a new laptop). For myself = apne liye.","I want + noun = object desire. For myself = apne liye.",5,undefined,[{word:"I want a new laptop",meaning:"mujhe naya laptop chahiye"},{word:"for myself",meaning:"apne liye"}]),

  q("d11-ex-q028","d11-t1-s3","'She wants ___ help.' (your) — fill in (complete the sentence).","fill_blank","your","She wants your help = possessive noun. Want + noun.","She wants your help = want + noun (possessive).",5,undefined,[{word:"she wants your help",meaning:"woh tumhari madad chahti hai"}]),

  q("d11-ex-q029","d11-t1-s3","'Sabko bahut kuch chahiye par waqt nahi hota.' ko English mein translate karo.","translation","Everyone wants many things but doesn't have time.","Everyone = singular. Wants = singular. Doesn't have time = negative have.","Everyone = singular. Everyone wants = singular.",8,undefined,[{word:"everyone wants",meaning:"sabko chahiye"},{word:"doesn't have time",meaning:"waqt nahi hota"}]),

  q("d11-ex-q030","d11-t1-s3","'Company ko kuch naye investors chahiye.' ko English mein translate karo.","translation","The company wants some new investors.","Company = singular. Wants = singular. Some new investors = plural noun.","Company = singular. Wants some new investors = want + noun.",5,undefined,[{word:"the company wants",meaning:"company chahti hai"},{word:"new investors",meaning:"naye investors"}]),

  // ── d11-t2-s1: Want someone to do something ─────────────────
  q("d11-ex-q031","d11-t2-s1","'I want + someone + to + verb' ka structure kya hai?","mcq","Subject + want/wants + object + to + base verb","'I want you to go' = I want + you (object) + to go (infinitive). Shows desire for someone else.","Want + object + to + base verb = doosron se kuch karwaana chahna.",8,{a:"Subject + want + to + object + base verb",b:"Subject + want/wants + object + to + base verb",c:"Subject + want + object + V-ing",d:"Subject + want + object + V3"}),

  q("d11-ex-q032","d11-t2-s1","'Main chahta hun ki tum yahan aao.' ko English mein translate karo.","translation","I want you to come here.","I want you to come = I want + you (object) + to come (infinitive).","I want you to come = want + object + to + base verb.",8,undefined,[{word:"I want you to come",meaning:"chahta hun ki tum aao"}]),

  q("d11-ex-q033","d11-t2-s1","'She ___ him to apologize.' — fill in.","fill_blank","wants","She = third person singular. Wants = singular. She wants him to apologize.","She = singular. Wants him to apologize = want + object + to + verb.",8,undefined,[{word:"wants him to apologize",meaning:"chahti hai ki woh maafi maange"}]),

  q("d11-ex-q034","d11-t2-s1","'Teacher chahti hai ki students roz homework karo.' ko English mein translate karo.","translation","The teacher wants students to do homework every day.","The teacher wants + students (object) + to do (infinitive) + homework.","Teacher wants + students + to do = want + object + to + verb.",8,undefined,[{word:"wants students to do",meaning:"chahti hai ki students karo"},{word:"every day",meaning:"roz"}]),

  q("d11-ex-q035","d11-t2-s1","Error detect karo: 'I want that you study hard.'","error_detection","I want you to study hard.","In English, 'want' is followed by object + infinitive, not 'that' clause. 'I want you to study' not 'I want that you study'.","Want + object + to + verb = sahi. Want + that clause = Hindi-style, galat.",8,{a:"I want that you study hard.",b:"I want you studying hard.",c:"I want you to study hard.",d:"I want for you to study hard."}),

  q("d11-ex-q036","d11-t2-s1","'Manager chahta hai ki team overtime kare.' ko English mein translate karo.","translation","The manager wants the team to work overtime.","The manager wants + the team (object) + to work overtime.","Manager wants + team + to work = want + object + to + verb.",8,undefined,[{word:"wants the team to work overtime",meaning:"chahta hai ki team overtime kare"}]),

  q("d11-ex-q037","d11-t2-s1","'Do you want ___ (me/I) to help you?' — fill in.","fill_blank","me","Object pronoun = me (not 'I'). Want + me (object) + to help.","Object pronoun: me = object form. Want + me + to help.",5,undefined,[{word:"do you want me to help",meaning:"kya tum chahte ho ki main madad karun"}]),

  q("d11-ex-q038","d11-t2-s1","'Meri maa chahti hai ki main doctor banun.' ko English mein translate karo.","translation","My mother wants me to become a doctor.","My mother wants + me (object) + to become (infinitive) + a doctor.","My mother wants me to become = want + object + to + base verb.",8,undefined,[{word:"my mother wants me to become",meaning:"meri maa chahti hai ki main banun"}]),

  q("d11-ex-q039","d11-t2-s1","'Parents don't want their children ___ bad habits.' (develop) — fill in.","fill_blank","to develop","Want + object + to + base verb. Develop = base verb (negative context).","Parents don't want + children + to develop = want + object + infinitive.",8,undefined,[{word:"don't want to develop",meaning:"nahi chahte ki develop ho"}]),

  q("d11-ex-q040","d11-t2-s1","'Company chahti hai ki employees professional dress code follow karen.' ko English mein translate karo.","translation","The company wants employees to follow a professional dress code.","The company wants + employees (object) + to follow + dress code.","Company wants + employees + to follow = want + object + to + verb.",8,undefined,[{word:"wants employees to follow",meaning:"chahti hai ki employees follow karo"}]),

  // ── d11-t2-s2: Do you want? (Questions) ─────────────────────
  q("d11-ex-q041","d11-t2-s2","'Do you want?' question kaise banate hain?","mcq","Do/Does + subject + want + to + verb / noun?","Question: Do (I/you/we/they) / Does (he/she/it) + subject + want + to + verb?","Question: Do/Does + subject + want = basic question form.",5,{a:"Want + do + you + to?",b:"Do/Does + subject + want + to + verb / noun?",c:"You + do + want?",d:"Want + you + to?"}),

  q("d11-ex-q042","d11-t2-s2","'Kya tum cinema dekhna chahte ho?' ko English mein translate karo.","translation","Do you want to watch a movie?","Do you want to + base verb. Watch = base verb. Movie = cinema.","Do you want to watch = question + want to + verb.",5,undefined,[{word:"do you want to watch",meaning:"kya dekhna chahte ho"},{word:"a movie",meaning:"cinema"}]),

  q("d11-ex-q043","d11-t2-s2","'Does she ___ (want) coffee?' — fill in.","fill_blank","want","Does she want = third person singular question. After does, use base form (want, not wants).","Does + base verb. Does she want = third person singular question.",5,undefined,[{word:"does she want",meaning:"kya woh chahti hai"}]),

  q("d11-ex-q044","d11-t2-s2","'Kya woh interview ke liye taiyaar hona chahta hai?' ko English mein translate karo.","translation","Does he want to prepare for the interview?","Does he want to + base verb. Prepare = base verb.","Does he want to prepare = third person singular question.",5,undefined,[{word:"does he want to prepare",meaning:"kya woh taiyaari karna chahta hai"}]),

  q("d11-ex-q045","d11-t2-s2","Error detect karo: 'Does she wants to join the club?'","error_detection","Does she want to join the club?","After 'Does', always use base verb (want, not 'wants'). Does she want.","Does ke baad base verb aata hai. Does she want = sahi.",5,{a:"Does she wants to join the club?",b:"Do she want to join the club?",c:"Does she want to join the club?",d:"Does she wanting to join the club?"}),

  q("d11-ex-q046","d11-t2-s2","'Tum kya khaana chahte ho?' ko English mein translate karo.","translation","What do you want to eat?","What + do you want to + base verb. Eat = base verb.","What do you want to eat = question with want.",5,undefined,[{word:"what do you want to eat",meaning:"tum kya khaana chahte ho"}]),

  q("d11-ex-q047","d11-t2-s2","'Kya unhein koi madad chahiye?' ko English mein translate karo.","translation","Do they want any help?","Do they want = plural question. Any help = noun.","Do they want any help = plural question + noun.",5,undefined,[{word:"do they want any help",meaning:"kya unhein madad chahiye"}]),

  q("d11-ex-q048","d11-t2-s2","'Woh kab aana chahti hai?' ko English mein translate karo.","translation","When does she want to come?","When + does she want to + base verb. Come = base verb.","When does she want to come = WH question + want to.",5,undefined,[{word:"when does she want to come",meaning:"woh kab aana chahti hai"}]),

  q("d11-ex-q049","d11-t2-s2","'Tum kahan rehna chahte ho?' ko English mein translate karo.","translation","Where do you want to live?","Where + do you want to + base verb. Live = base verb.","Where do you want to live = WH question + want to.",5,undefined,[{word:"where do you want to live",meaning:"tum kahan rehna chahte ho"}]),

  q("d11-ex-q050","d11-t2-s2","'Kya manager chahte hain ki report kal submit ho?' ko English mein translate karo.","translation","Does the manager want the report submitted by tomorrow?","Does the manager want + report (object) + submitted = want + object + past participle (adjective).","Does manager want report submitted = want + object + V3 (adjective).",10,undefined,[{word:"does the manager want",meaning:"kya manager chahte hain"},{word:"submitted by tomorrow",meaning:"kal tak submit"}]),

  // ── d11-t2-s3: I don't want to (Negative) ───────────────────
  q("d11-ex-q051","d11-t2-s3","'Want' ka negative form kya hai?","mcq","I don't want to / She doesn't want to","Negative: I/you/we/they + don't want + to + verb. He/she/it + doesn't want + to + verb.","Negative: don't/doesn't want + to + base verb.",5,{a:"I not want to / She not want to",b:"I don't want to / She doesn't want to",c:"I am not wanting / She is not wanting",d:"I won't want to / She won't want to"}),

  q("d11-ex-q052","d11-t2-s3","'Mujhe yahan rehna nahi hai.' ko English mein translate karo.","translation","I don't want to stay here.","I don't want to + base verb (negative). Stay = base verb.","I don't want to stay = negative want to.",5,undefined,[{word:"I don't want to stay",meaning:"mujhe rehna nahi hai"}]),

  q("d11-ex-q053","d11-t2-s3","'She ___ (not) want to argue.' — fill in.","fill_blank","doesn't","She = third person singular. Negative singular = doesn't. She doesn't want to argue.","She = singular. Doesn't want to = singular negative.",5,undefined,[{word:"she doesn't want to",meaning:"woh nahi chahti"}]),

  q("d11-ex-q054","d11-t2-s3","'Woh kaam karna nahi chahte.' ko English mein translate karo.","translation","They don't want to work.","They = plural. Don't want to + base verb (negative).","They = plural. Don't want to work = plural negative.",5,undefined,[{word:"they don't want to work",meaning:"woh kaam karna nahi chahte"}]),

  q("d11-ex-q055","d11-t2-s3","Error detect karo: 'He doesn't wants to travel.'","error_detection","He doesn't want to travel.","After 'doesn't', always use base verb (want, not 'wants').","Doesn't + base verb. Doesn't want = sahi. Wants = galat.",5,{a:"He doesn't wants to travel.",b:"He don't want to travel.",c:"He doesn't want to travel.",d:"He doesn't wanting to travel."}),

  q("d11-ex-q056","d11-t2-s3","'Mujhe kuch khaana nahi chahiye.' ko English mein translate karo.","translation","I don't want to eat anything. / I don't want anything to eat.","I don't want to eat anything = negative want + to + verb. Or: don't want anything (noun).","I don't want to eat = negative want + to + base verb.",5,undefined,[{word:"I don't want to eat anything",meaning:"mujhe kuch khaana nahi chahiye"}]),

  q("d11-ex-q057","d11-t2-s3","'Main aaj meet karna nahi chahta.' ko English mein translate karo.","translation","I don't want to meet today.","I don't want to + base verb. Meet = base verb.","I don't want to meet = negative want to.",5,undefined,[{word:"I don't want to meet",meaning:"main milna nahi chahta"},{word:"today",meaning:"aaj"}]),

  q("d11-ex-q058","d11-t2-s3","'Children ___ (not) want to sleep early.' — fill in.","fill_blank","don't","Children = plural. Don't want to = plural negative.","Children = plural. Don't want = plural negative ke sath.",5,undefined,[{word:"children don't want to",meaning:"bache nahi chahte"}]),

  q("d11-ex-q059","d11-t2-s3","'Usne kaha ki woh wahan jaana nahi chahta.' ko English mein translate karo.","translation","He said that he didn't want to go there.","Reported speech: said that + he didn't want (past of doesn't want). Didn't want to go.","He said that he didn't want = reported speech past.",8,undefined,[{word:"he said that he didn't want to go",meaning:"usne kaha ki woh nahi jaana chahta tha"}]),

  q("d11-ex-q060","d11-t2-s3","'Main koi risk lena nahi chahta.' ko English mein translate karo.","translation","I don't want to take any risk.","I don't want to + take (base verb). Any risk = negative context with 'any'.","I don't want to take any risk = negative want + to + verb.",5,undefined,[{word:"I don't want to take any risk",meaning:"main koi risk nahi lena chahta"}]),

  // ── d11-t3-s1: Want in professional contexts ────────────────
  q("d11-ex-q061","d11-t3-s1","'Main is company mein apply karna chahta hun.' ko English mein translate karo.","translation","I want to apply for a job in this company.","I want to apply = main apply karna chahta hun. Apply = base verb.","I want to apply = professional want to expression.",5,undefined,[{word:"I want to apply",meaning:"apply karna chahta hun"},{word:"for a job",meaning:"naukri ke liye"}]),

  q("d11-ex-q062","d11-t3-s1","'Company naye market mein expand karna chahti hai.' ko English mein translate karo.","translation","The company wants to expand into new markets.","Company = singular. Wants to expand = want to + base verb.","Company wants to expand = professional want to.",8,undefined,[{word:"the company wants to expand",meaning:"company expand karna chahti hai"},{word:"into new markets",meaning:"naye market mein"}]),

  q("d11-ex-q063","d11-t3-s1","'I want to ___ (schedule) a meeting this week.' — fill in.","fill_blank","schedule","I want to + base verb. Schedule = base verb. Professional meeting context.","I want to schedule = professional want to + base verb.",5,undefined,[{word:"want to schedule",meaning:"schedule karna chahta hun"}]),

  q("d11-ex-q064","d11-t3-s1","Error detect karo: 'The manager want to review the project.'","error_detection","The manager wants to review the project.","The manager = third person singular. Wants = singular.","The manager = singular. Wants = singular ke sath. Want = galat.",5,{a:"The manager want to review the project.",b:"The manager wants reviewing the project.",c:"The manager wants to review the project.",d:"The manager wanting to review the project."}),

  q("d11-ex-q065","d11-t3-s1","'Mujhe apni team ke sath collaborate karna hai.' ko English mein translate karo.","translation","I want to collaborate with my team.","I want to collaborate = professional want to expression. With my team = apni team ke sath.","I want to collaborate = want to + base verb (professional).",8,undefined,[{word:"I want to collaborate",meaning:"main collaborate karna chahta hun"},{word:"with my team",meaning:"apni team ke sath"}]),

  q("d11-ex-q066","d11-t3-s1","'We want to ___ (improve) our customer service.' — fill in.","fill_blank","improve","We want to + base verb. Improve = base verb. Professional context.","We want to improve = want to + base verb.",5,undefined,[{word:"want to improve",meaning:"improve karna chahte hain"}]),

  q("d11-ex-q067","d11-t3-s1","'CEO chahte hain ki team zyada productive ho.' ko English mein translate karo.","translation","The CEO wants the team to be more productive.","CEO wants + the team (object) + to be (infinitive) + more productive.","CEO wants team to be = want + object + to + be.",8,undefined,[{word:"the CEO wants the team to be",meaning:"CEO chahte hain ki team ho"},{word:"more productive",meaning:"zyada productive"}]),

  q("d11-ex-q068","d11-t3-s1","'HR chahti hai ki sab employees training attend karen.' ko English mein translate karo.","translation","HR wants all employees to attend the training.","HR wants + all employees (object) + to attend + training.","HR wants employees to attend = want + object + to + verb.",8,undefined,[{word:"HR wants employees to attend",meaning:"HR chahti hai ki employees attend karen"}]),

  q("d11-ex-q069","d11-t3-s1","'Main is month apna target achieve karna chahta hun.' ko English mein translate karo.","translation","I want to achieve my target this month.","I want to achieve = main achieve karna chahta hun. This month = is month.","I want to achieve = professional want to.",5,undefined,[{word:"I want to achieve my target",meaning:"target achieve karna chahta hun"},{word:"this month",meaning:"is month"}]),

  q("d11-ex-q070","d11-t3-s1","'Team chahti hai ki presentation clear aur concise ho.' ko English mein translate karo.","translation","The team wants the presentation to be clear and concise.","Team wants + presentation (object) + to be (infinitive) + clear and concise.","Team wants presentation to be = want + object + to + be.",8,undefined,[{word:"wants the presentation to be",meaning:"chahti hai ki presentation ho"},{word:"clear and concise",meaning:"clear aur concise"}]),

  // ── d11-t3-s2: Want in daily conversations ─────────────────
  q("d11-ex-q071","d11-t3-s2","'Mujhe kuch meetha khaana hai.' ko English mein translate karo.","translation","I want to eat something sweet.","I want to eat + something sweet. Eat = base verb.","I want to eat = want to + verb. Something sweet = kuch meetha.",5,undefined,[{word:"I want to eat something sweet",meaning:"mujhe kuch meetha khaana hai"}]),

  q("d11-ex-q072","d11-t3-s2","'Meri beti doctor banna chahti hai.' ko English mein translate karo.","translation","My daughter wants to become a doctor.","My daughter = singular. Wants to become = want to + base verb.","My daughter wants to become = third person singular.",5,undefined,[{word:"my daughter wants to become",meaning:"meri beti banna chahti hai"}]),

  q("d11-ex-q073","d11-t3-s2","'Kya tum coffee peena chahte ho?' ko English mein translate karo.","translation","Do you want to drink coffee?","Do you want to + base verb. Drink = base verb. Coffee = coffee.","Do you want to drink = question + want to.",5,undefined,[{word:"do you want to drink coffee",meaning:"kya coffee peena chahte ho"}]),

  q("d11-ex-q074","d11-t3-s2","'Hamara poora group yahan aana chahta hai.' ko English mein translate karo.","translation","Our whole group wants to come here.","Group = singular. Wants to come = singular. Here = yahan.","Group = singular collective noun. Wants to come.",5,undefined,[{word:"wants to come here",meaning:"yahan aana chahta hai"}]),

  q("d11-ex-q075","d11-t3-s2","Error detect karo: 'I am wanting to go to the party.'","error_detection","I want to go to the party.","'Want' is a stative verb — it is not used in continuous form. 'Am wanting' is wrong.","Want = stative verb. Continuous form nahi hoti. I want = sahi.",8,{a:"I am wanting to go to the party.",b:"I wants to go to the party.",c:"I want to go to the party.",d:"I wanting to go to the party."}),

  q("d11-ex-q076","d11-t3-s2","'Main aaj ghar pe rehna chahta hun.' ko English mein translate karo.","translation","I want to stay home today.","I want to stay home = want to + base verb. Today = aaj.","I want to stay home = daily life want to expression.",5,undefined,[{word:"I want to stay home",meaning:"ghar pe rehna chahta hun"}]),

  q("d11-ex-q077","d11-t3-s2","'Kya aap bahar dinner karna chahenge?' ko English mein translate karo.","translation","Would you like to have dinner outside? / Do you want to have dinner outside?","Would you like = more polite form of want. Do you want = direct. Both acceptable.","Do you want / Would you like = outside dinner ka suggestion.",5,undefined,[{word:"do you want to have dinner outside",meaning:"kya bahar dinner karna chahte ho"}]),

  q("d11-ex-q078","d11-t3-s2","'Mere do dost foreign mein padhna chahte hain.' ko English mein translate karo.","translation","Two of my friends want to study abroad.","Two of my friends = plural. Want = plural. Study abroad = padhna.","Two friends = plural. Want = plural ke sath.",5,undefined,[{word:"want to study abroad",meaning:"foreign mein padhna chahte hain"}]),

  q("d11-ex-q079","d11-t3-s2","'Main apni life mein kuch meaningful karna chahta hun.' ko English mein translate karo.","translation","I want to do something meaningful in my life.","I want to do + something meaningful. Do = base verb.","I want to do something meaningful = want to + base verb.",8,undefined,[{word:"I want to do something meaningful",meaning:"kuch meaningful karna chahta hun"},{word:"in my life",meaning:"apni life mein"}]),

  q("d11-ex-q080","d11-t3-s2","'Unhe pata hai ki unhe kya chahiye.' ko English mein translate karo.","translation","They know what they want.","They know = pata hai. What they want = kya chahiye. Embedded clause.","They know what they want = embedded want clause.",8,undefined,[{word:"they know what they want",meaning:"unhe pata hai ki kya chahiye"}]),

  // ── d11-t3-s3: Advanced want usage ──────────────────────────
  q("d11-ex-q081","d11-t3-s3","'Want' aur 'Would like' mein kya fark hai?","mcq","Would like = zyada formal aur polite, Want = direct aur casual","'Would like' is more formal/polite than 'want'. Used in formal settings.","Would like = formal/polite. Want = casual/direct.",8,{a:"Want = formal, Would like = casual",b:"Would like = zyada formal aur polite, Want = direct aur casual",c:"Dono same hain",d:"Want = past, Would like = present"}),

  q("d11-ex-q082","d11-t3-s3","'Main chahta hun ki tum success achieve karo.' ko English mein translate karo.","translation","I want you to achieve success.","I want + you (object) + to achieve (infinitive). Success = noun.","I want you to achieve = want + object + to + verb.",8,undefined,[{word:"I want you to achieve success",meaning:"chahta hun ki tum achieve karo"}]),

  q("d11-ex-q083","d11-t3-s3","'She has always wanted ___ (travel) the world.' — fill in.","fill_blank","to travel","Has always wanted = Present Perfect + always. To travel = base verb.","She has always wanted to travel = Present Perfect + want to.",8,undefined,[{word:"has always wanted to travel",meaning:"hamesha travel karna chahti rahi hai"}]),

  q("d11-ex-q084","d11-t3-s3","Error detect karo: 'She wants that I help her.'","error_detection","She wants me to help her.","In English, 'want' takes object + infinitive, not 'that' clause. 'She wants me to help' is correct.","Want + object + infinitive. 'That' clause = galat in this context.",8,{a:"She wants that I help her.",b:"She wants I to help her.",c:"She wants me to help her.",d:"She wants me helping her."}),

  q("d11-ex-q085","d11-t3-s3","'Mujhe pata nahi main kya karna chahta hun.' ko English mein translate karo.","translation","I don't know what I want to do.","I don't know = pata nahi. What I want to do = embedded question.","I don't know what I want to do = embedded want clause.",8,undefined,[{word:"I don't know what I want to do",meaning:"pata nahi kya karna chahta hun"}]),

  q("d11-ex-q086","d11-t3-s3","'Mere boss chahte hain ki main zyada overtime kaarun.' ko English mein translate karo.","translation","My boss wants me to work more overtime.","My boss wants + me (object) + to work (infinitive) + more overtime.","Boss wants me to work = want + object + to + verb.",8,undefined,[{word:"my boss wants me to work",meaning:"boss chahte hain ki main kaarun"},{word:"more overtime",meaning:"zyada overtime"}]),

  q("d11-ex-q087","d11-t3-s3","'All she wanted was recognition.' ka matlab kya hai?","mcq","Usse sirf pahchaan chahiye thi — bas yahi tha jo woh chahti thi","'All she wanted was' = she only wanted, nothing more. Just recognition.","All she wanted was = sirf ek cheez chahiye thi.",10,{a:"Woh bahut kuch chahti thi",b:"Usse sirf pahchaan chahiye thi — bas yahi tha jo woh chahti thi",c:"Usse recognition nahi chahiye tha",d:"Recognition ne sab diya"}),

  q("d11-ex-q088","d11-t3-s3","'Main yahi chahta hun ki tum samjho.' ko English mein translate karo.","translation","All I want is for you to understand.","All I want is = yahi chahta hun. For you to understand = tum samjho.","All I want is for you to understand = emphatic want expression.",10,undefined,[{word:"all I want is",meaning:"yahi chahta hun"},{word:"for you to understand",meaning:"ki tum samjho"}]),

  q("d11-ex-q089","d11-t3-s3","'Ek waqt tha jab main actor banna chahta tha.' ko English mein translate karo.","translation","There was a time when I wanted to become an actor.","There was a time when = ek waqt tha jab. Wanted to become = past desire.","There was a time when + wanted to become = past dream.",8,undefined,[{word:"there was a time when",meaning:"ek waqt tha jab"},{word:"I wanted to become",meaning:"main banna chahta tha"}]),

  q("d11-ex-q090","d11-t3-s3","'Want' ka use kab stative (non-action) verb ki tarah hota hai?","mcq","Jab yeh current desire ya possession ko express kare (continuous nahi hota)","'Want' is a stative verb showing a state of desire. It doesn't take continuous form. 'I am wanting' = wrong. 'I want' = correct.","Want = stative verb. Continuous form nahi hoti.",8,{a:"Jab future ki baat ho",b:"Jab yeh current desire ya possession ko express kare (continuous nahi hota)",c:"Sirf past mein",d:"Sirf question mein"}),

  // Extra Day 11 questions (91-150)
  q("d11-ex-q091","d11-t1-s1","'Mujhe paani peena hai.' ko English mein translate karo.","translation","I want to drink water.","I want to drink = main peena chahta hun. Water = paani.","I want to drink water = want to + verb.",5,undefined,[{word:"I want to drink water",meaning:"mujhe paani peena hai"}]),

  q("d11-ex-q092","d11-t1-s2","'Mere papa chahte hain ki main IAS banun.' ko English mein translate karo.","translation","My father wants me to become an IAS officer.","My father wants + me (object) + to become (infinitive).","Father wants me to become = want + object + to + verb.",8,undefined,[{word:"my father wants me to become",meaning:"papa chahte hain ki main banun"}]),

  q("d11-ex-q093","d11-t1-s3","'She wants ___ (help/to help/helping) with her project.' — fill in.","fill_blank","help","She wants help = want + noun. Or: She wants to get help = want + to + verb. Direct noun: wants help.","She wants help = want + noun (direct object).",5,undefined,[{word:"she wants help",meaning:"usse madad chahiye"}]),

  q("d11-ex-q094","d11-t2-s1","'Kya tum coffee peena chahte ho ya chai?' ko English mein translate karo.","translation","Do you want to drink coffee or tea?","Do you want to drink = question + want to + verb. Coffee or tea = choice.","Do you want to drink = question form + want to.",5,undefined,[{word:"do you want to drink",meaning:"kya peena chahte ho"}]),

  q("d11-ex-q095","d11-t2-s2","'Vo kya banna chahte hain bade hokar?' ko English mein translate karo.","translation","What do they want to become when they grow up?","What do they want to become = WH question + want to. When they grow up = bade hokar.","What do they want to become = question + want to.",5,undefined,[{word:"what do they want to become",meaning:"kya banna chahte hain"},{word:"when they grow up",meaning:"bade hokar"}]),

  q("d11-ex-q096","d11-t2-s3","'Main aaj koi social media use nahi karna chahta.' ko English mein translate karo.","translation","I don't want to use social media today.","I don't want to use = negative want to + base verb. Today = aaj.","I don't want to use = negative want to.",5,undefined,[{word:"I don't want to use",meaning:"main use nahi karna chahta"}]),

  q("d11-ex-q097","d11-t3-s1","'Main chahta hun ki yeh deal successfully close ho.' ko English mein translate karo.","translation","I want this deal to close successfully.","I want + this deal (object) + to close (infinitive) + successfully.","I want this deal to close = want + object + to + verb.",8,undefined,[{word:"I want this deal to close",meaning:"chahta hun ki deal close ho"}]),

  q("d11-ex-q098","d11-t3-s2","'Mere baad ke plans kuch nahi hain, bas aram karna chahta hun.' ko English mein translate karo.","translation","I have no plans after this; I just want to rest.","I just want to rest = sirf aram karna chahta hun. Just = sirf.","I just want to rest = emphatic want to expression.",5,undefined,[{word:"I just want to rest",meaning:"sirf aram karna chahta hun"}]),

  q("d11-ex-q099","d11-t3-s3","'What do you really want in life?' ka jawab 'want to' use karke do.","translation","I really want to live a happy and peaceful life.","I really want to live = strong desire with 'really'. Live = base verb.","I really want to live = emphatic want to + base verb.",8),

  q("d11-ex-q100","d11-t1-s1","'Tumhara best friend kya karna chahta hai?' ko English mein translate karo.","translation","What does your best friend want to do?","WH question: What does + third person + want to + base verb?","What does your best friend want to do = WH + want to.",5,undefined,[{word:"what does your best friend want to do",meaning:"tumhara best friend kya karna chahta hai"}]),

  q("d11-ex-q101","d11-t1-s2","'Company naye product launch karna chahti hai.' ko English mein translate karo.","translation","The company wants to launch a new product.","Company = singular. Wants to launch = want to + base verb.","Company wants to launch = want to + base verb.",5,undefined,[{word:"the company wants to launch",meaning:"company launch karna chahti hai"}]),

  q("d11-ex-q102","d11-t1-s3","'Mujhe kal uthna jaldi nahi chahiye.' ko English mein translate karo.","translation","I don't want to wake up early tomorrow.","I don't want to wake up early = negative want to. Tomorrow = kal.","I don't want to wake up early = negative want to + verb.",5,undefined,[{word:"I don't want to wake up early",meaning:"jaldi uthna nahi chahta"}]),

  q("d11-ex-q103","d11-t2-s1","'My parents want ___ (I/me) to study medicine.' — fill in.","fill_blank","me","Object pronoun = me. Want + me (object) + to study.","Object pronoun: me = sahi. I = subject, me = object.",5,undefined,[{word:"want me to study",meaning:"chahte hain ki main padhe"}]),

  q("d11-ex-q104","d11-t2-s2","'Kya tumhe koi cheez chahiye?' ko English mein translate karo.","translation","Do you want anything?","Do you want = question. Anything = koi bhi cheez.","Do you want anything = basic question with want.",5,undefined,[{word:"do you want anything",meaning:"kya tumhe koi cheez chahiye"}]),

  q("d11-ex-q105","d11-t2-s3","Error detect karo: 'I doesn't want to leave early.'","error_detection","I don't want to leave early.","I = first person. Negative = don't (not 'doesn't'). Don't want to leave.","I = first person. Don't = I ke sath. Doesn't = he/she/it ke sath.",5,{a:"I doesn't want to leave early.",b:"I am not wanting to leave early.",c:"I don't want to leave early.",d:"I don't wants to leave early."}),

  q("d11-ex-q106","d11-t3-s1","'Main chahta hun ki yeh project time pe deliver ho.' ko English mein translate karo.","translation","I want this project to be delivered on time.","I want + this project (object) + to be delivered (passive infinitive) + on time.","I want this project to be delivered = want + object + passive infinitive.",10,undefined,[{word:"I want this project to be delivered",meaning:"chahta hun ki project deliver ho"},{word:"on time",meaning:"time pe"}]),

  q("d11-ex-q107","d11-t3-s2","'Mere parivaar ko meri success chahiye.' ko English mein translate karo.","translation","My family wants my success.","My family = singular. Wants = singular. My success = noun.","My family wants + noun = want + direct object.",5,undefined,[{word:"my family wants my success",meaning:"mere parivaar ko meri success chahiye"}]),

  q("d11-ex-q108","d11-t3-s3","'She has been wanting to tell you something.' ka matlab kya hai?","mcq","Woh kaafi time se tumhe kuch bataana chahti rahi hai","Has been wanting = Present Perfect Continuous showing ongoing desire over time.","Has been wanting = time se chahti rahi hai (ongoing desire).",8,{a:"Woh abhi tumhe kuch bataana chahti hai",b:"Woh kaafi time se tumhe kuch bataana chahti rahi hai",c:"Woh tumhe kuch batana nahi chahti",d:"Woh tumhe pehle batana chahti thi"}),

  q("d11-ex-q109","d11-t1-s1","'Woh ghar ki cleaning karna chahta tha.' (past) ko English mein translate karo.","translation","He wanted to clean the house.","Wanted = past of want. To clean = base verb. Past desire.","Wanted to clean = past desire. Want ka past = wanted.",5,undefined,[{word:"he wanted to clean",meaning:"woh karna chahta tha"}]),

  q("d11-ex-q110","d11-t1-s2","'Does your sister ___ (want) to study abroad?' — fill in.","fill_blank","want","Does = third person question. Base verb after Does = want (not wants).","Does + base verb. Does your sister want = sahi.",5,undefined,[{word:"does your sister want",meaning:"kya tumhari sister chahti hai"}]),

  q("d11-ex-q111","d11-t1-s3","'Sabko chahiye ki yahan peace ho.' ko English mein translate karo.","translation","Everyone wants there to be peace here.","Everyone wants + there to be + peace (infinitive clause). Complex structure.","Everyone wants there to be = want + infinitive clause.",10,undefined,[{word:"everyone wants there to be peace",meaning:"sabko chahiye ki peace ho"}]),

  q("d11-ex-q112","d11-t2-s1","'Kya tumhare friends bhi aana chahte hain?' ko English mein translate karo.","translation","Do your friends want to come too?","Do + plural subject + want to + verb. Too = bhi.","Do your friends want to come = plural question + want to.",5,undefined,[{word:"do your friends want to come too",meaning:"kya friends bhi aana chahte hain"}]),

  q("d11-ex-q113","d11-t2-s2","'Main samajhna chahta hun.' ko English mein translate karo.","translation","I want to understand.","I want to understand = main samajhna chahta hun. Understand = base verb.","I want to understand = want to + base verb.",5,undefined,[{word:"I want to understand",meaning:"main samajhna chahta hun"}]),

  q("d11-ex-q114","d11-t2-s3","'Mujhe aaj bahar khaana nahi khaana.' ko English mein translate karo.","translation","I don't want to eat out today.","I don't want to eat out = negative want to. Eat out = bahar khaana.","I don't want to eat out = negative want to.",5,undefined,[{word:"I don't want to eat out",meaning:"mujhe bahar khaana nahi khaana"}]),

  q("d11-ex-q115","d11-t3-s1","'Organization chahti hai ki sab employees POSH policy samjhen.' ko English mein translate karo.","translation","The organization wants all employees to understand the POSH policy.","Organization wants + employees (object) + to understand (infinitive).","Organization wants employees to understand = want + object + to + verb.",8,undefined,[{word:"wants all employees to understand",meaning:"chahti hai ki sab samjhen"}]),

  q("d11-ex-q116","d11-t3-s2","'Mere dost ko ek naya phone chahiye.' ko English mein translate karo.","translation","My friend wants a new phone.","My friend = singular. Wants = singular. A new phone = noun.","My friend wants + noun = want + direct object.",5,undefined,[{word:"my friend wants a new phone",meaning:"mere dost ko naya phone chahiye"}]),

  q("d11-ex-q117","d11-t3-s3","'Kya tum wahi karna chahte ho jo doosre karte hain, ya kuch alag?' ko English mein translate karo.","translation","Do you want to do what others do, or something different?","Do you want to do = question + want to + verb. What others do = relative clause.","Complex question with want to + embedded clause.",10,undefined,[{word:"do you want to do",meaning:"kya karna chahte ho"},{word:"what others do",meaning:"jo doosre karte hain"}]),

  q("d11-ex-q118","d11-t1-s1","'Unhe cricket dekhna bahut pasand hai aur woh player bhi banna chahte hain.' ko English mein translate karo.","translation","They love watching cricket and they want to become players too.","They love watching (like) + they want to become (desire). Combined sentence.","They love watching + they want to become = combined.",5,undefined,[{word:"they love watching cricket",meaning:"unhe cricket dekhna pasand hai"},{word:"they want to become players",meaning:"woh player bhi banna chahte hain"}]),

  q("d11-ex-q119","d11-t1-s2","'Meri company chahti hai ki main zyada travel karun.' ko English mein translate karo.","translation","My company wants me to travel more.","My company wants + me (object) + to travel (infinitive) more.","Company wants me to travel = want + object + to + verb.",8,undefined,[{word:"my company wants me to travel more",meaning:"company chahti hai ki main travel karun"}]),

  q("d11-ex-q120","d11-t1-s3","'Koi nahi chahta ki unhe ignore kiya jaaye.' ko English mein translate karo.","translation","Nobody wants to be ignored.","Nobody wants to be ignored = passive infinitive. Nobody = koi nahi.","Nobody wants to be ignored = want + passive infinitive.",8,undefined,[{word:"nobody wants to be ignored",meaning:"koi ignore hona nahi chahta"}]),

  q("d11-ex-q121","d11-t2-s1","'Kya tum chahte ho ki main tumhare liye kuch karun?' ko English mein translate karo.","translation","Do you want me to do something for you?","Do you want + me (object) + to do + something for you.","Do you want me to do = question + want + object + to + verb.",5,undefined,[{word:"do you want me to do something for you",meaning:"kya tum chahte ho ki main karun"}]),

  q("d11-ex-q122","d11-t2-s2","'Uska beta kisi bhi cheez se nahi darta, woh boxer banna chahta hai.' ko English mein translate karo.","translation","Her son is not afraid of anything; he wants to become a boxer.","Her son = singular. Wants to become = singular want to.","Her son wants to become = third person singular want to.",5,undefined,[{word:"he wants to become a boxer",meaning:"woh boxer banna chahta hai"}]),

  q("d11-ex-q123","d11-t2-s3","'Vo log nahi chahte ki koi unhe disturb kare.' ko English mein translate karo.","translation","They don't want anyone to disturb them.","They don't want + anyone (object) + to disturb (infinitive) them.","They don't want anyone to disturb = negative want + object + to + verb.",8,undefined,[{word:"they don't want anyone to disturb them",meaning:"nahi chahte ki koi disturb kare"}]),

  q("d11-ex-q124","d11-t3-s1","'Agar tum success chahte ho, toh kaam karo.' ko English mein translate karo.","translation","If you want success, you have to work hard.","If you want = conditional. Success = noun. You have to work hard = result.","If you want + noun = conditional want expression.",5,undefined,[{word:"if you want success",meaning:"agar success chahte ho"},{word:"you have to work hard",meaning:"kaam karna padega"}]),

  q("d11-ex-q125","d11-t3-s2","'Main janna chahta hun ki aage kya hoga.' ko English mein translate karo.","translation","I want to know what will happen next.","I want to know = main janna chahta hun. What will happen next = embedded future question.","I want to know + embedded question = complex want expression.",8,undefined,[{word:"I want to know",meaning:"main janna chahta hun"},{word:"what will happen next",meaning:"aage kya hoga"}]),

  q("d11-ex-q126","d11-t3-s3","'They wanted nothing more than peace.' ka matlab kya hai?","mcq","Unhe sirf peace chahiye thi — aur kuch nahi","'Wanted nothing more than' = only wanted that one thing. Emphatic want expression.","Wanted nothing more than = sirf ek cheez chahiye thi.",10,{a:"Unhe peace nahi chahiye thi",b:"Unhe peace se zyada kuch chahiye tha",c:"Unhe sirf peace chahiye thi — aur kuch nahi",d:"Unhe bahut kuch chahiye tha"}),

  q("d11-ex-q127","d11-t1-s1","'Main is course ko complete karna chahta hun.' ko English mein translate karo.","translation","I want to complete this course.","I want to complete = main khatam karna chahta hun. Complete = base verb.","I want to complete = want to + base verb.",5,undefined,[{word:"I want to complete this course",meaning:"is course ko khatam karna chahta hun"}]),

  q("d11-ex-q128","d11-t1-s2","'Uski maa chahti hai ki woh ghar pe ruke.' ko English mein translate karo.","translation","His mother wants him to stay home.","His mother wants + him (object) + to stay (infinitive) + home.","Mother wants him to stay = want + object + to + verb.",5,undefined,[{word:"his mother wants him to stay home",meaning:"uski maa chahti hai ki woh ruke"}]),

  q("d11-ex-q129","d11-t2-s1","'Kya teachers chahte hain ki students zyada participate karen?' ko English mein translate karo.","translation","Do teachers want students to participate more?","Do teachers want + students (object) + to participate + more = question.","Do teachers want students to participate = question + want + object + infinitive.",5,undefined,[{word:"do teachers want students to participate",meaning:"kya teachers chahte hain ki students participate karen"}]),

  q("d11-ex-q130","d11-t2-s2","'Main nahi jaanta ki woh kya chahte hain.' ko English mein translate karo.","translation","I don't know what they want.","I don't know = main nahi jaanta. What they want = embedded question.","I don't know what they want = embedded want question.",5,undefined,[{word:"I don't know what they want",meaning:"nahi jaanta ki woh kya chahte hain"}]),

  q("d11-ex-q131","d11-t2-s3","'Mujhe thoda time chahiye soochne ke liye.' ko English mein translate karo.","translation","I want some time to think.","I want some time + to think (infinitive of purpose). Time = noun.","I want + noun + to + verb = want + noun with infinitive of purpose.",5,undefined,[{word:"I want some time to think",meaning:"mujhe soochne ke liye time chahiye"}]),

  q("d11-ex-q132","d11-t3-s1","'Investors chahte hain ki company IPO laye.' ko English mein translate karo.","translation","Investors want the company to bring an IPO.","Investors want + the company (object) + to bring (infinitive) + an IPO.","Investors want company to bring = want + object + to + verb.",8,undefined,[{word:"investors want the company to bring",meaning:"investors chahte hain ki company laye"}]),

  q("d11-ex-q133","d11-t3-s2","'Woh chahti hai ki sab use pasand kare.' ko English mein translate karo.","translation","She wants everyone to like her.","She wants + everyone (object) + to like (infinitive) + her.","She wants everyone to like her = want + object + to + verb.",5,undefined,[{word:"she wants everyone to like her",meaning:"chahti hai ki sab use pasand kare"}]),

  q("d11-ex-q134","d11-t3-s3","Reported speech mein 'want' kaise change hota hai?","mcq","Want → wanted (past mein), wants → wanted (past mein)","In reported speech (past), want becomes wanted. Example: He said he wanted to leave.","Reported speech past mein: want/wants → wanted.",8,{a:"Want/wants remain the same",b:"Want → wanted (past mein), wants → wanted (past mein)",c:"Want → will want (future mein)",d:"Want → has wanted (present perfect)"}),

  q("d11-ex-q135","d11-t1-s1","'Mujhe aaj raat acchi neend chahiye.' ko English mein translate karo.","translation","I want a good night's sleep tonight.","I want + noun (a good night's sleep). Tonight = aaj raat.","I want + noun = direct object desire.",5,undefined,[{word:"I want a good night's sleep",meaning:"mujhe acchi neend chahiye"},{word:"tonight",meaning:"aaj raat"}]),

  q("d11-ex-q136","d11-t1-s2","'Ve teachers chahte hain ki students roz padhen.' ko English mein translate karo.","translation","Those teachers want students to study every day.","Those teachers want + students (object) + to study + every day.","Want students to study = want + object + to + verb.",5,undefined,[{word:"want students to study every day",meaning:"chahte hain ki students roz padhen"}]),

  q("d11-ex-q137","d11-t2-s1","'Kya tum chahte ho ki main tumhare liye kuch gaauun?' ko English mein translate karo.","translation","Do you want me to sing something for you?","Do you want + me (object) + to sing (infinitive) + something for you.","Do you want me to sing = question + want + object + infinitive.",5,undefined,[{word:"do you want me to sing",meaning:"kya chahte ho ki main gaaun"}]),

  q("d11-ex-q138","d11-t2-s2","'Apne kya banana chahte ho kal ke khane mein?' ko English mein translate karo.","translation","What do you want to make for tomorrow's food?","What do you want to make = WH question + want to + base verb.","What do you want to make = WH + want to.",5,undefined,[{word:"what do you want to make",meaning:"kya banana chahte ho"},{word:"for tomorrow's food",meaning:"kal ke khane mein"}]),

  q("d11-ex-q139","d11-t2-s3","'Woh nahi chahte ki koi unke baare mein jaane.' ko English mein translate karo.","translation","They don't want anyone to know about them.","They don't want + anyone (object) + to know (infinitive) + about them.","They don't want anyone to know = negative want + object + infinitive.",8,undefined,[{word:"they don't want anyone to know",meaning:"nahi chahte ki koi jaane"}]),

  q("d11-ex-q140","d11-t3-s1","'Hamaare CEO chahte hain ki is year company double grow kare.' ko English mein translate karo.","translation","Our CEO wants the company to grow double this year.","Our CEO wants + the company (object) + to grow (infinitive) + double this year.","CEO wants company to grow = want + object + to + verb.",8,undefined,[{word:"our CEO wants the company to grow",meaning:"CEO chahte hain ki company grow kare"}]),

  q("d11-ex-q141","d11-t3-s2","'Mujhe apni life mein stability chahiye.' ko English mein translate karo.","translation","I want stability in my life.","I want + stability (noun). Stability = uncountable noun.","I want + noun = direct object (uncountable).",5,undefined,[{word:"I want stability",meaning:"mujhe stability chahiye"},{word:"in my life",meaning:"apni life mein"}]),

  q("d11-ex-q142","d11-t3-s3","'She has always wanted what others have.' ka matlab kya hai?","mcq","Woh hamesha wohi chahti rahi hai jo doosron ke paas hai (comparison desire)","'Has always wanted what others have' = comparing desires to others' possessions.","Always wanted what others have = doosron ki cheezon ki desire.",8,{a:"Woh khud kuch nahi chahti",b:"Woh hamesha wohi chahti rahi hai jo doosron ke paas hai (comparison desire)",c:"Woh doosron ko kuch dena chahti hai",d:"Woh khud ke paas jo hai usse chahti hai"}),

  q("d11-ex-q143","d11-t1-s1","'Main yeh English course finish karna chahta hun.' ko English mein translate karo.","translation","I want to finish this English course.","I want to finish = main finish karna chahta hun. Finish = base verb.","I want to finish = want to + base verb.",5,undefined,[{word:"I want to finish this English course",meaning:"yeh course finish karna chahta hun"}]),

  q("d11-ex-q144","d11-t1-s2","'Uske dost chahte hain ki woh unke sath aaye.' ko English mein translate karo.","translation","His friends want him to come with them.","His friends want + him (object) + to come (infinitive) + with them.","Friends want him to come = want + object + to + verb.",5,undefined,[{word:"want him to come with them",meaning:"chahte hain ki woh unke sath aaye"}]),

  q("d11-ex-q145","d11-t2-s1","'Main chahta hun ki yeh desh safe rahe.' ko English mein translate karo.","translation","I want this country to remain safe.","I want + this country (object) + to remain (infinitive) + safe.","I want this country to remain = want + object + to + verb.",8,undefined,[{word:"I want this country to remain safe",meaning:"chahta hun ki desh safe rahe"}]),

  q("d11-ex-q146","d11-t2-s2","'Woh kuch alag karna chahte hain.' ko English mein translate karo.","translation","They want to do something different.","They want to do = plural want to + base verb. Something different = kuch alag.","They want to do something different = plural want to.",5,undefined,[{word:"they want to do something different",meaning:"kuch alag karna chahte hain"}]),

  q("d11-ex-q147","d11-t2-s3","'Mujhe kal koi meeting nahi chahiye.' ko English mein translate karo.","translation","I don't want any meeting tomorrow.","I don't want + any meeting (noun) tomorrow.","I don't want + noun = negative want + direct object.",5,undefined,[{word:"I don't want any meeting",meaning:"mujhe koi meeting nahi chahiye"}]),

  q("d11-ex-q148","d11-t3-s1","'HR wants candidates ___ (have/to have) 5 years experience.' — fill in.","fill_blank","to have","Want + object + to + base verb. To have = infinitive.","HR wants candidates to have = want + object + to + verb.",5,undefined,[{word:"wants candidates to have",meaning:"chahti hai ki candidates ke paas ho"}]),

  q("d11-ex-q149","d11-t3-s2","'Main chahta hun ki meri baatein samjhi jayen.' ko English mein translate karo.","translation","I want my words to be understood.","I want + my words (object) + to be understood (passive infinitive).","I want my words to be understood = want + object + passive infinitive.",10,undefined,[{word:"I want my words to be understood",meaning:"chahta hun ki baatein samjhi jayen"}]),

  q("d11-ex-q150","d11-t3-s3","'Want' use karke ek professional email ka opening sentence likho.","translation","I wanted to reach out to discuss a potential collaboration.","I wanted to reach out = professional email opener. Slightly more formal (past wanted = polite).","I wanted to reach out = professional email opener with 'want'.",8,undefined,[{word:"I wanted to reach out",meaning:"main contact karna chahta tha"},{word:"to discuss",meaning:"discuss karne ke liye"}]),
];
