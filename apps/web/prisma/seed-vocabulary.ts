// ============================================================
// Vocabulary Seed Script — Seeds 15 words for every day 3-75
// Run: npx tsx prisma/seed-vocabulary.ts
// ============================================================

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// Words organised by day theme / grammar topic
// Each day gets ~15 carefully chosen words relevant to its topic
const DAY_WORDS: Record<number, Array<{
  word: string; meaning: string; hindiMeaning: string;
  partOfSpeech: string; difficulty: string;
  example1: string; example2: string;
  synonyms?: string; antonyms?: string;
}>> = {
  3: [
    { word: "Command", meaning: "An order given to do something", hindiMeaning: "आदेश देना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Please sit down.", example2: "Open the door immediately.", synonyms: "order, instruct", antonyms: "request, beg" },
    { word: "Request", meaning: "To politely ask for something", hindiMeaning: "विनती करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Please help me.", example2: "Can you open the window?", synonyms: "ask, plead", antonyms: "demand, order" },
    { word: "Immediately", meaning: "Without any delay", hindiMeaning: "तुरंत", partOfSpeech: "adverb", difficulty: "BEGINNER", example1: "Come here immediately.", example2: "Call me immediately.", synonyms: "instantly, right away", antonyms: "later, eventually" },
    { word: "Politely", meaning: "In a respectful and courteous manner", hindiMeaning: "विनम्रतापूर्वक", partOfSpeech: "adverb", difficulty: "BEGINNER", example1: "Speak politely to elders.", example2: "He politely refused.", synonyms: "courteously, respectfully", antonyms: "rudely, harshly" },
    { word: "Instructions", meaning: "Directions that tell you how to do something", hindiMeaning: "निर्देश", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Follow the instructions carefully.", example2: "Read all instructions first.", synonyms: "directions, guidelines", antonyms: "confusion, disorder" },
    { word: "Silence", meaning: "Complete absence of sound", hindiMeaning: "चुप्पी, शांति", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Please maintain silence.", example2: "Silence is golden.", synonyms: "quiet, stillness", antonyms: "noise, sound" },
    { word: "Attention", meaning: "Focusing your mind on something", hindiMeaning: "ध्यान", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Pay attention in class.", example2: "Stand at attention.", synonyms: "focus, concentration", antonyms: "distraction, carelessness" },
    { word: "Obey", meaning: "To follow orders or rules", hindiMeaning: "पालन करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Obey the traffic rules.", example2: "Children should obey parents.", synonyms: "follow, comply", antonyms: "disobey, rebel" },
    { word: "Warn", meaning: "To inform someone about possible danger", hindiMeaning: "चेतावनी देना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "I warned him about the risk.", example2: "Don't touch that wire!", synonyms: "caution, alert", antonyms: "ignore, overlook" },
    { word: "Forbid", meaning: "To not allow something", hindiMeaning: "मना करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Smoking is forbidden here.", example2: "She forbade him from going.", synonyms: "ban, prohibit", antonyms: "allow, permit" },
    { word: "Permit", meaning: "To allow or give permission", hindiMeaning: "अनुमति देना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Permit me to explain.", example2: "Are cameras permitted here?", synonyms: "allow, authorize", antonyms: "forbid, ban" },
    { word: "Suggestion", meaning: "An idea put forward for consideration", hindiMeaning: "सुझाव", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "May I give a suggestion?", example2: "That is a good suggestion.", synonyms: "recommendation, proposal", antonyms: "command, order" },
    { word: "Advice", meaning: "Guidance or recommendation", hindiMeaning: "सलाह", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Follow my advice.", example2: "Take her advice seriously.", synonyms: "guidance, counsel", antonyms: "ignorance, disregard" },
    { word: "Urgent", meaning: "Needing immediate action or attention", hindiMeaning: "जरूरी, अत्यावश्यक", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "This is urgent!", example2: "Call me on an urgent basis.", synonyms: "pressing, critical", antonyms: "unimportant, trivial" },
    { word: "Emphasize", meaning: "To give special importance", hindiMeaning: "जोर देना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "I must emphasize this point.", example2: "She emphasized the deadline.", synonyms: "stress, highlight", antonyms: "minimize, understate" },
  ],
  4: [
    { word: "Exist", meaning: "To be real or present", hindiMeaning: "होना, अस्तित्व होना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Does this place still exist?", example2: "Life exists on Earth.", synonyms: "live, be present", antonyms: "disappear, vanish" },
    { word: "Become", meaning: "To begin to be something", hindiMeaning: "बनना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "She became a doctor.", example2: "He wants to become a teacher.", synonyms: "turn into, grow", antonyms: "remain, stay" },
    { word: "Appear", meaning: "To come into sight", hindiMeaning: "दिखाई देना, लगना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "He appears to be tired.", example2: "Stars appear at night.", synonyms: "seem, look", antonyms: "disappear, vanish" },
    { word: "Remain", meaning: "To stay in the same place or condition", hindiMeaning: "रहना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Please remain seated.", example2: "Remain calm in difficult times.", synonyms: "stay, continue", antonyms: "leave, go" },
    { word: "Belong", meaning: "To be the property of someone", hindiMeaning: "संबंधित होना, का होना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "This book belongs to me.", example2: "Where do you belong?", synonyms: "own, be owned by", antonyms: "exclude, expel" },
    { word: "Consist", meaning: "To be made up of", hindiMeaning: "से मिलकर बना होना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "This team consists of 5 members.", example2: "The meal consists of rice and dal.", synonyms: "comprise, include", antonyms: "exclude, lack" },
    { word: "Represent", meaning: "To stand for or act on behalf of", hindiMeaning: "प्रतिनिधित्व करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Blue represents the sky.", example2: "She represents our school.", synonyms: "symbolize, stand for", antonyms: "misrepresent, oppose" },
    { word: "Consider", meaning: "To think carefully about something", hindiMeaning: "विचार करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Consider all your options.", example2: "I will consider your offer.", synonyms: "think, reflect", antonyms: "ignore, dismiss" },
    { word: "Describe", meaning: "To give details about something", hindiMeaning: "वर्णन करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Describe yourself in 3 words.", example2: "Can you describe the suspect?", synonyms: "explain, illustrate", antonyms: "misrepresent, confuse" },
    { word: "Include", meaning: "To contain as part of a whole", hindiMeaning: "शामिल करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "The price includes tax.", example2: "Please include me in the plan.", synonyms: "contain, involve", antonyms: "exclude, omit" },
    { word: "Indicate", meaning: "To point out or show", hindiMeaning: "इंगित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "The arrow indicates the direction.", example2: "This indicates a problem.", synonyms: "show, signal", antonyms: "hide, conceal" },
    { word: "Depend", meaning: "To rely on someone or something", hindiMeaning: "निर्भर होना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Children depend on parents.", example2: "It depends on the weather.", synonyms: "rely on, count on", antonyms: "be independent, stand alone" },
    { word: "Involve", meaning: "To include someone as a participant", hindiMeaning: "शामिल करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Don't involve me in this.", example2: "This project involves teamwork.", synonyms: "include, engage", antonyms: "exclude, separate" },
    { word: "Determine", meaning: "To find out or decide something", hindiMeaning: "निर्धारित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Hard work determines success.", example2: "Let me determine the cause.", synonyms: "decide, establish", antonyms: "waver, guess" },
    { word: "Identify", meaning: "To recognize and name something", hindiMeaning: "पहचानना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Can you identify this bird?", example2: "Identify the main problem.", synonyms: "recognize, spot", antonyms: "ignore, overlook" },
  ],
  5: [
    { word: "This", meaning: "Used to identify a specific thing nearby", hindiMeaning: "यह", partOfSpeech: "pronoun", difficulty: "BEGINNER", example1: "This is my book.", example2: "This problem is hard.", synonyms: "the present, here", antonyms: "that, those" },
    { word: "That", meaning: "Used to identify a specific thing not nearby", hindiMeaning: "वह", partOfSpeech: "pronoun", difficulty: "BEGINNER", example1: "That is a beautiful house.", example2: "Is that your car?", synonyms: "the distant, over there", antonyms: "this, these" },
    { word: "These", meaning: "Used for plural things nearby", hindiMeaning: "ये", partOfSpeech: "pronoun", difficulty: "BEGINNER", example1: "These are my shoes.", example2: "These books are mine.", synonyms: "the nearby ones", antonyms: "those, them" },
    { word: "Those", meaning: "Used for plural things not nearby", hindiMeaning: "वे", partOfSpeech: "pronoun", difficulty: "BEGINNER", example1: "Those are the new students.", example2: "Can I have those papers?", synonyms: "the distant ones", antonyms: "these, here" },
    { word: "Point", meaning: "To indicate or direct attention", hindiMeaning: "इशारा करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Don't point at people.", example2: "She pointed to the board.", synonyms: "indicate, show", antonyms: "hide, conceal" },
    { word: "Nearby", meaning: "Located a short distance away", hindiMeaning: "पास में, नजदीक", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Is there a hospital nearby?", example2: "The school is nearby.", synonyms: "close, adjacent", antonyms: "far, distant" },
    { word: "Specific", meaning: "Clearly defined or identified", hindiMeaning: "विशिष्ट, खास", partOfSpeech: "adjective", difficulty: "INTERMEDIATE", example1: "Be specific about your needs.", example2: "She gave a specific example.", synonyms: "particular, precise", antonyms: "general, vague" },
    { word: "Object", meaning: "A physical thing that can be seen or touched", hindiMeaning: "वस्तु, आपत्ति जताना", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "This object is heavy.", example2: "What is that strange object?", synonyms: "thing, item", antonyms: "concept, idea" },
    { word: "Reference", meaning: "Mention of or attention to something", hindiMeaning: "संदर्भ", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "With reference to your letter...", example2: "Use this as a reference.", synonyms: "mention, citation", antonyms: "irrelevance" },
    { word: "Replace", meaning: "To put something new in place of another", hindiMeaning: "बदलना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Replace the old bulb.", example2: "Can I replace this item?", synonyms: "substitute, swap", antonyms: "keep, retain" },
    { word: "Noun", meaning: "A word that names a person, place, or thing", hindiMeaning: "संज्ञा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Dog is a noun.", example2: "A noun can be singular or plural.", synonyms: "name word", antonyms: "verb, adjective" },
    { word: "Pronoun", meaning: "A word that replaces a noun", hindiMeaning: "सर्वनाम", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "He, she, it are pronouns.", example2: "Use a pronoun to avoid repetition.", synonyms: "substitution word", antonyms: "noun" },
    { word: "Context", meaning: "The circumstances surrounding something", hindiMeaning: "संदर्भ, परिस्थिति", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Read the sentence in context.", example2: "Understand the context first.", synonyms: "background, setting", antonyms: "isolation" },
    { word: "Singular", meaning: "Referring to one person or thing", hindiMeaning: "एकवचन", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Cat is a singular noun.", example2: "Use singular verbs with one subject.", synonyms: "one, solo", antonyms: "plural, multiple" },
    { word: "Plural", meaning: "Referring to more than one person or thing", hindiMeaning: "बहुवचन", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Cats is plural.", example2: "Add 's' to make most words plural.", synonyms: "multiple, many", antonyms: "singular, one" },
  ],
};

// Generic vocabulary banks for days that don't have specific words
// These words cover common English vocabulary sorted by difficulty
const GENERIC_VOCAB_POOL = [
  // A
  { word: "Achieve", meaning: "To successfully reach a goal", hindiMeaning: "हासिल करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "She achieved her dream.", example2: "Work hard to achieve success." },
  { word: "Active", meaning: "Energetic and engaged in activity", hindiMeaning: "सक्रिय", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Stay active and healthy.", example2: "He is an active member." },
  { word: "Adopt", meaning: "To take something as your own", hindiMeaning: "अपनाना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Adopt good habits.", example2: "They adopted a new policy." },
  { word: "Agree", meaning: "To have the same opinion", hindiMeaning: "सहमत होना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "I agree with you.", example2: "We agreed on the price." },
  { word: "Analyze", meaning: "To examine something carefully", hindiMeaning: "विश्लेषण करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Analyze the data carefully.", example2: "Let me analyze this problem." },
  { word: "Arrange", meaning: "To put in order", hindiMeaning: "व्यवस्थित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Arrange the books on the shelf.", example2: "She arranged the flowers." },
  { word: "Assist", meaning: "To help someone", hindiMeaning: "सहायता करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Can you assist me?", example2: "He assisted in the project." },
  // B
  { word: "Balance", meaning: "Equal distribution of weight or amount", hindiMeaning: "संतुलन", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Maintain balance in life.", example2: "Check the account balance." },
  { word: "Believe", meaning: "To accept something as true", hindiMeaning: "विश्वास करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "I believe in hard work.", example2: "She believes in herself." },
  { word: "Benefit", meaning: "Something that helps you", hindiMeaning: "लाभ, फायदा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Exercise has many benefits.", example2: "What is the benefit of this?" },
  { word: "Build", meaning: "To construct or create something", hindiMeaning: "बनाना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Build your vocabulary every day.", example2: "They built a new bridge." },
  // C
  { word: "Calculate", meaning: "To work out a number or amount", hindiMeaning: "गणना करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Calculate the total cost.", example2: "Can you calculate this?" },
  { word: "Capable", meaning: "Having the ability to do something", hindiMeaning: "सक्षम", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "She is capable of doing this.", example2: "Be capable and confident." },
  { word: "Career", meaning: "A person's professional life", hindiMeaning: "करियर", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Choose a good career.", example2: "Her career in medicine is outstanding." },
  { word: "Cause", meaning: "The reason why something happens", hindiMeaning: "कारण, का कारण बनना", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "What is the cause of the problem?", example2: "Smoking causes cancer." },
  { word: "Celebrate", meaning: "To show happiness for a special occasion", hindiMeaning: "मनाना, जश्न मनाना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Celebrate your achievements.", example2: "We celebrated his birthday." },
  { word: "Challenge", meaning: "A difficult task that tests your ability", hindiMeaning: "चुनौती", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Accept every challenge.", example2: "This is a big challenge." },
  { word: "Change", meaning: "To become or make different", hindiMeaning: "बदलाव, बदलना", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Change is inevitable.", example2: "She changed her mind." },
  { word: "Character", meaning: "The mental and moral qualities of a person", hindiMeaning: "चरित्र, व्यक्तित्व", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Build a strong character.", example2: "He has good character." },
  { word: "Choice", meaning: "An act of selecting between two or more options", hindiMeaning: "चुनाव", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Make the right choice.", example2: "It was a difficult choice." },
  { word: "Clarity", meaning: "The quality of being clear and easy to understand", hindiMeaning: "स्पष्टता", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Speak with clarity.", example2: "There is clarity in his writing." },
  { word: "Commit", meaning: "To dedicate yourself to something", hindiMeaning: "प्रतिबद्ध होना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Commit to your goals.", example2: "She committed to the project." },
  { word: "Communicate", meaning: "To share information with others", hindiMeaning: "संवाद करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Communicate clearly.", example2: "He communicates well with his team." },
  { word: "Complete", meaning: "Having all parts, finished", hindiMeaning: "पूरा करना, पूर्ण", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Complete your homework.", example2: "The task is complete." },
  { word: "Concentrate", meaning: "To focus all attention on something", hindiMeaning: "ध्यान केंद्रित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Concentrate on your studies.", example2: "She concentrated hard." },
  { word: "Contribute", meaning: "To give or help with something", hindiMeaning: "योगदान देना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Contribute to the team.", example2: "She contributed ideas." },
  { word: "Cooperate", meaning: "To work together toward a common goal", hindiMeaning: "सहयोग करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Please cooperate with us.", example2: "They cooperated on the project." },
  { word: "Create", meaning: "To make or produce something new", hindiMeaning: "बनाना, निर्माण करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Create a good impression.", example2: "She created a beautiful painting." },
  { word: "Criticize", meaning: "To point out faults", hindiMeaning: "आलोचना करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Don't criticize harshly.", example2: "He criticized the plan." },
  // D
  { word: "Decide", meaning: "To make a choice or come to a conclusion", hindiMeaning: "फैसला करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Decide quickly.", example2: "She decided to study abroad." },
  { word: "Declare", meaning: "To announce officially", hindiMeaning: "घोषणा करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "The president declared a holiday.", example2: "Declare your income." },
  { word: "Dedicate", meaning: "To commit time and effort to something", hindiMeaning: "समर्पित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Dedicate yourself to learning.", example2: "She dedicated the book to her mother." },
  { word: "Deliver", meaning: "To bring or hand over something", hindiMeaning: "पहुंचाना, देना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Deliver the parcel by 5 PM.", example2: "He delivered a great speech." },
  { word: "Demonstrate", meaning: "To show clearly", hindiMeaning: "प्रदर्शित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Demonstrate how to use this.", example2: "She demonstrated her skills." },
  { word: "Develop", meaning: "To grow or make more advanced", hindiMeaning: "विकसित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Develop your skills.", example2: "The city developed rapidly." },
  { word: "Difference", meaning: "A way in which two things are not alike", hindiMeaning: "अंतर", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "What is the difference?", example2: "There is a big difference." },
  { word: "Difficult", meaning: "Needing much effort or skill", hindiMeaning: "कठिन, मुश्किल", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "English is difficult at first.", example2: "This is a difficult question." },
  { word: "Direction", meaning: "The way towards which something faces or moves", hindiMeaning: "दिशा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Go in the right direction.", example2: "What direction is north?" },
  { word: "Discover", meaning: "To find something for the first time", hindiMeaning: "खोज करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Discover new words daily.", example2: "Columbus discovered America." },
  // E
  { word: "Effective", meaning: "Producing the desired result", hindiMeaning: "प्रभावशाली, असरदार", partOfSpeech: "adjective", difficulty: "INTERMEDIATE", example1: "This medicine is effective.", example2: "Be an effective communicator." },
  { word: "Effort", meaning: "A determined attempt", hindiMeaning: "प्रयास, मेहनत", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Put in your best effort.", example2: "Success requires effort." },
  { word: "Encourage", meaning: "To give support and confidence", hindiMeaning: "प्रोत्साहित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Encourage your friends.", example2: "She encouraged him to try again." },
  { word: "Energy", meaning: "The ability to be active", hindiMeaning: "ऊर्जा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "I have lots of energy.", example2: "Solar energy is clean." },
  { word: "Enhance", meaning: "To improve the quality of something", hindiMeaning: "बढ़ाना, सुधारना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Enhance your vocabulary.", example2: "This enhances the flavor." },
  { word: "Ensure", meaning: "To make certain something will happen", hindiMeaning: "सुनिश्चित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Ensure your safety.", example2: "Please ensure timely delivery." },
  { word: "Establish", meaning: "To set up or create permanently", hindiMeaning: "स्थापित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Establish good habits.", example2: "He established a new company." },
  { word: "Event", meaning: "A thing that happens", hindiMeaning: "घटना, कार्यक्रम", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "The event was successful.", example2: "Which event do you prefer?" },
  { word: "Evidence", meaning: "Facts that prove something is true", hindiMeaning: "सबूत, प्रमाण", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Show me the evidence.", example2: "There is no evidence of wrongdoing." },
  { word: "Examine", meaning: "To inspect carefully", hindiMeaning: "जांच करना, परीक्षण करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "The doctor will examine you.", example2: "Examine the contract carefully." },
  // F
  { word: "Failure", meaning: "Lack of success", hindiMeaning: "विफलता, असफलता", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Failure teaches us lessons.", example2: "Don't fear failure." },
  { word: "Famous", meaning: "Known by many people", hindiMeaning: "प्रसिद्ध, मशहूर", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "He is a famous actor.", example2: "Mumbai is famous for Bollywood." },
  { word: "Feature", meaning: "An important part or quality", hindiMeaning: "विशेषता", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "A key feature of this phone is its camera.", example2: "What are the main features?" },
  { word: "Focus", meaning: "To concentrate on one thing", hindiMeaning: "ध्यान केंद्रित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Focus on your work.", example2: "She focused on her goals." },
  { word: "Foundation", meaning: "The basis on which something is built", hindiMeaning: "नींव, आधार", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Build a strong foundation.", example2: "This is the foundation of grammar." },
  { word: "Freedom", meaning: "The power to act without restraint", hindiMeaning: "आजादी, स्वतंत्रता", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Freedom is precious.", example2: "We have freedom of speech." },
  // G
  { word: "Generate", meaning: "To produce or create", hindiMeaning: "उत्पन्न करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Generate new ideas.", example2: "Solar panels generate electricity." },
  { word: "Genuine", meaning: "Truly what it claims to be", hindiMeaning: "असली, वास्तविक", partOfSpeech: "adjective", difficulty: "INTERMEDIATE", example1: "Is this a genuine diamond?", example2: "She gave a genuine smile." },
  { word: "Global", meaning: "Relating to the whole world", hindiMeaning: "वैश्विक", partOfSpeech: "adjective", difficulty: "INTERMEDIATE", example1: "English is a global language.", example2: "Global warming is a serious issue." },
  { word: "Goal", meaning: "An aim you want to achieve", hindiMeaning: "लक्ष्य, उद्देश्य", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Set clear goals.", example2: "My goal is to speak English fluently." },
  { word: "Growth", meaning: "The process of increasing in size, number, or strength", hindiMeaning: "विकास, बढ़ोतरी", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Growth comes from hard work.", example2: "Career growth is important." },
  // H
  { word: "Handle", meaning: "To manage or deal with", hindiMeaning: "संभालना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Handle the situation calmly.", example2: "Can you handle this task?" },
  { word: "Helpful", meaning: "Giving assistance or support", hindiMeaning: "मददगार, उपयोगी", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "She is very helpful.", example2: "This app is helpful for learning." },
  { word: "Honest", meaning: "Free from deceit and truthful", hindiMeaning: "ईमानदार", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Be honest with yourself.", example2: "He gave an honest answer." },
  // I
  { word: "Imagine", meaning: "To form a mental picture of something", hindiMeaning: "कल्पना करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Imagine a world without war.", example2: "I can't imagine living abroad." },
  { word: "Important", meaning: "Of great significance or value", hindiMeaning: "महत्वपूर्ण", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "English is an important language.", example2: "This is an important meeting." },
  { word: "Improve", meaning: "To make or become better", hindiMeaning: "सुधारना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Improve your English daily.", example2: "The situation has improved." },
  { word: "Independent", meaning: "Not relying on others", hindiMeaning: "स्वतंत्र", partOfSpeech: "adjective", difficulty: "INTERMEDIATE", example1: "Be financially independent.", example2: "She is an independent woman." },
  { word: "Inform", meaning: "To give someone information about something", hindiMeaning: "सूचित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Please inform me of the result.", example2: "Inform the team about the meeting." },
  { word: "Inspire", meaning: "To fill someone with the urge to do something", hindiMeaning: "प्रेरित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Your story inspires me.", example2: "She inspires others to learn." },
  // J-K
  { word: "Journey", meaning: "A long travel from one place to another", hindiMeaning: "यात्रा, सफर", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Life is a journey.", example2: "The journey was tiring but enjoyable." },
  { word: "Knowledge", meaning: "Facts or information you have learned", hindiMeaning: "ज्ञान", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Knowledge is power.", example2: "Increase your knowledge daily." },
  // L
  { word: "Language", meaning: "A system of words used for communication", hindiMeaning: "भाषा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "English is an international language.", example2: "Learn a new language." },
  { word: "Leadership", meaning: "The ability to guide and inspire others", hindiMeaning: "नेतृत्व", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Show good leadership.", example2: "Leadership requires responsibility." },
  { word: "Limit", meaning: "A point beyond which something cannot go", hindiMeaning: "सीमा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "There is no limit to learning.", example2: "Know your limits." },
  // M
  { word: "Maintain", meaning: "To keep something in its current state", hindiMeaning: "बनाए रखना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Maintain eye contact.", example2: "Maintain a healthy routine." },
  { word: "Manage", meaning: "To control or be responsible for", hindiMeaning: "प्रबंधन करना, संभालना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Manage your time well.", example2: "She manages a big team." },
  { word: "Master", meaning: "To become very skilled at something", hindiMeaning: "महारत हासिल करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Master English grammar.", example2: "He mastered the piano." },
  { word: "Mention", meaning: "To briefly refer to something", hindiMeaning: "उल्लेख करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Mention your experience in the interview.", example2: "She mentioned it briefly." },
  { word: "Method", meaning: "A particular procedure for doing something", hindiMeaning: "तरीका, विधि", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "What method do you use?", example2: "This is an effective method." },
  { word: "Motivate", meaning: "To give someone a reason to act", hindiMeaning: "प्रेरित करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Motivate yourself daily.", example2: "She motivates her students." },
  // N-O
  { word: "Natural", meaning: "Existing in nature; normal", hindiMeaning: "प्राकृतिक, स्वाभाविक", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Natural resources are precious.", example2: "She has a natural talent." },
  { word: "Necessary", meaning: "Required to be done or present", hindiMeaning: "आवश्यक, जरूरी", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Is this necessary?", example2: "Practice is necessary to improve." },
  { word: "Opportunity", meaning: "A time when something can be done", hindiMeaning: "अवसर, मौका", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Grab every opportunity.", example2: "This is a great opportunity." },
  { word: "Organize", meaning: "To arrange in a systematic way", hindiMeaning: "व्यवस्थित करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Organize your notes.", example2: "She organized the event." },
  { word: "Overcome", meaning: "To succeed in dealing with a problem", hindiMeaning: "पार पाना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Overcome your fear of speaking.", example2: "They overcame all challenges." },
  // P
  { word: "Patience", meaning: "The ability to wait calmly", hindiMeaning: "धैर्य, सब्र", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Have patience when learning.", example2: "Patience is a virtue." },
  { word: "Perform", meaning: "To carry out or do an activity", hindiMeaning: "प्रदर्शन करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Perform your best.", example2: "She performed brilliantly." },
  { word: "Persist", meaning: "To continue doing something despite difficulties", hindiMeaning: "डटे रहना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Persist through hardships.", example2: "He persisted until he succeeded." },
  { word: "Plan", meaning: "A detailed proposal for doing something", hindiMeaning: "योजना बनाना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Plan your day.", example2: "She planned the trip." },
  { word: "Polite", meaning: "Having good manners", hindiMeaning: "विनम्र, शिष्ट", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Always be polite.", example2: "He gave a polite response." },
  { word: "Positive", meaning: "Optimistic and confident", hindiMeaning: "सकारात्मक", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Think positive.", example2: "Stay positive in hard times." },
  { word: "Practice", meaning: "Repeated exercise to improve a skill", hindiMeaning: "अभ्यास करना", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Practice makes perfect.", example2: "Daily practice is key." },
  { word: "Prepare", meaning: "To make ready in advance", hindiMeaning: "तैयारी करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Prepare for your interview.", example2: "She prepared for the exam." },
  { word: "Present", meaning: "Existing or happening now", hindiMeaning: "वर्तमान, उपस्थित", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Live in the present.", example2: "Are you present today?" },
  { word: "Priority", meaning: "Something that is more important than others", hindiMeaning: "प्राथमिकता", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Make learning a priority.", example2: "Health is my top priority." },
  { word: "Problem", meaning: "A matter that is difficult to deal with", hindiMeaning: "समस्या, परेशानी", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Solve the problem.", example2: "There is no problem." },
  // Q-R
  { word: "Quality", meaning: "The standard of excellence", hindiMeaning: "गुणवत्ता, गुण", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Quality matters more than quantity.", example2: "She has many good qualities." },
  { word: "Realize", meaning: "To become fully aware of something", hindiMeaning: "समझना, महसूस करना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "I realized my mistake.", example2: "Do you realize how important this is?" },
  { word: "Recognize", meaning: "To identify from previous encounters", hindiMeaning: "पहचानना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "I recognized her face.", example2: "Recognize your strengths." },
  { word: "Responsibility", meaning: "A duty or obligation", hindiMeaning: "जिम्मेदारी", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Take responsibility for your actions.", example2: "It is your responsibility." },
  { word: "Result", meaning: "The outcome of something", hindiMeaning: "परिणाम, नतीजा", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Hard work gives good results.", example2: "What was the result?" },
  // S
  { word: "Situation", meaning: "The circumstances at a particular time", hindiMeaning: "स्थिति, परिस्थिति", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Handle the situation calmly.", example2: "What is the current situation?" },
  { word: "Skill", meaning: "The ability to do something well", hindiMeaning: "कौशल", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Develop new skills.", example2: "Communication is an important skill." },
  { word: "Solution", meaning: "A way of solving a problem", hindiMeaning: "समाधान", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Find a solution.", example2: "There is always a solution." },
  { word: "Strategy", meaning: "A plan designed to achieve a goal", hindiMeaning: "रणनीति", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Plan a good strategy.", example2: "Her strategy worked." },
  { word: "Strength", meaning: "The quality of being physically or mentally strong", hindiMeaning: "शक्ति, ताकत", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Know your strengths.", example2: "Physical strength comes from exercise." },
  { word: "Success", meaning: "The achievement of a goal", hindiMeaning: "सफलता", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Success comes with hard work.", example2: "Celebrate your success." },
  // T
  { word: "Talent", meaning: "A natural ability or skill", hindiMeaning: "प्रतिभा, हुनर", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Show your talent.", example2: "She has a talent for music." },
  { word: "Target", meaning: "A goal you aim to reach", hindiMeaning: "लक्ष्य", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Set a target and work for it.", example2: "She met her sales target." },
  { word: "Teamwork", meaning: "Working together as a group", hindiMeaning: "टीम वर्क, सहयोग", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Teamwork makes the dream work.", example2: "Good teamwork is essential." },
  { word: "Technology", meaning: "The application of scientific knowledge", hindiMeaning: "प्रौद्योगिकी, तकनीक", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Technology is changing fast.", example2: "Use technology wisely." },
  { word: "Thankful", meaning: "Feeling or expressing gratitude", hindiMeaning: "आभारी, कृतज्ञ", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Be thankful for what you have.", example2: "I am thankful for your help." },
  { word: "Thorough", meaning: "Complete with attention to every detail", hindiMeaning: "पूर्ण, गहन", partOfSpeech: "adjective", difficulty: "INTERMEDIATE", example1: "Do a thorough check.", example2: "She gave a thorough explanation." },
  { word: "Transform", meaning: "To change in form or character", hindiMeaning: "परिवर्तन करना", partOfSpeech: "verb", difficulty: "INTERMEDIATE", example1: "Transform your life.", example2: "English can transform your career." },
  // U-V
  { word: "Understand", meaning: "To know the meaning of something", hindiMeaning: "समझना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "Do you understand?", example2: "I understand your point." },
  { word: "Unique", meaning: "Being the only one of its kind", hindiMeaning: "अनूठा, अद्वितीय", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "You are unique.", example2: "This design is unique." },
  { word: "Valuable", meaning: "Worth a lot of money or importance", hindiMeaning: "मूल्यवान", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Time is valuable.", example2: "This is a valuable lesson." },
  { word: "Variety", meaning: "A range of different things", hindiMeaning: "विविधता", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "There is a variety of foods.", example2: "Variety makes life interesting." },
  { word: "Vision", meaning: "The ability to think about the future wisely", hindiMeaning: "दृष्टि, नजरिया", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Have a clear vision.", example2: "Her vision inspired the team." },
  // W-Z
  { word: "Willing", meaning: "Ready or eager to do something", hindiMeaning: "तैयार, इच्छुक", partOfSpeech: "adjective", difficulty: "BEGINNER", example1: "Are you willing to work hard?", example2: "She is always willing to help." },
  { word: "Wisdom", meaning: "The ability to use knowledge and experience well", hindiMeaning: "बुद्धि, समझदारी", partOfSpeech: "noun", difficulty: "INTERMEDIATE", example1: "Wisdom comes with experience.", example2: "He spoke with wisdom." },
  { word: "Wonder", meaning: "To feel curious about something", hindiMeaning: "अचंभा, सोचना", partOfSpeech: "verb", difficulty: "BEGINNER", example1: "I wonder what she is doing.", example2: "She wondered about the answer." },
  { word: "Work", meaning: "Activity done to achieve a purpose", hindiMeaning: "काम, कार्य", partOfSpeech: "noun", difficulty: "BEGINNER", example1: "Work hard.", example2: "Her work is excellent." },
];

async function main() {
  const days = await db.day.findMany({
    select: { id: true, dayNumber: true },
    orderBy: { dayNumber: "asc" },
  });

  const existingCounts = await db.dayVocabulary.groupBy({
    by: ["dayId"],
    _count: { id: true },
  });
  const countMap = Object.fromEntries(
    existingCounts.map((c) => [c.dayId, c._count.id])
  );

  let totalAdded = 0;

  for (const day of days) {
    const existing = countMap[day.id] ?? 0;
    if (existing >= 10) continue; // Skip days that already have 10+ words

    const neededCount = 15 - existing;
    const specificWords = DAY_WORDS[day.dayNumber];

    let wordsToAdd = specificWords
      ? specificWords.slice(0, neededCount)
      : [];

    // Fill with generic words if specific ones are not enough
    if (wordsToAdd.length < neededCount) {
      const offset = ((day.dayNumber - 1) * 15) % GENERIC_VOCAB_POOL.length;
      const remaining = neededCount - wordsToAdd.length;
      for (let i = 0; i < remaining; i++) {
        const idx = (offset + i) % GENERIC_VOCAB_POOL.length;
        wordsToAdd.push(GENERIC_VOCAB_POOL[idx]);
      }
    }

    for (const word of wordsToAdd) {
      try {
        await db.dayVocabulary.create({
          data: {
            dayId: day.id,
            word: word.word,
            meaning: word.meaning,
            hindiMeaning: word.hindiMeaning,
            partOfSpeech: word.partOfSpeech,
            difficulty: word.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED",
            example1: word.example1,
            example2: word.example2,
            synonyms: (word as Record<string, string>).synonyms ?? undefined,
            antonyms: (word as Record<string, string>).antonyms ?? undefined,
          },
        });
        totalAdded++;
      } catch {
        // Ignore duplicates
      }
    }
  }

  const total = await db.dayVocabulary.count();
  console.log(`Done! Added ${totalAdded} words. Total vocabulary: ${total}`);
  await db.$disconnect();
}

main().catch(console.error);
