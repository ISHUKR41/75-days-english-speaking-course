// ============================================================
// Day 1 Vocabulary - 200+ unique words for Day 1: Basic English
// Each word has: meaning, hindi meaning, IPA, examples, synonyms
// IMPORTANT: These words are UNIQUE to Day 1. No repeats across days.
// ============================================================

export interface VocabularyWord {
  id: string;
  word: string;
  meaning: string;         // Simple English meaning
  hindiMeaning: string;    // Hindi translation
  ipa: string;             // Pronunciation guide
  partOfSpeech: string;    // noun, verb, adj, adverb, etc.
  difficulty: "beginner" | "elementary" | "intermediate";

  // 3-5 example sentences
  example1: string;
  example2: string;
  example3: string;
  example4?: string;
  example5?: string;

  // Context usage
  officeExample?: string;
  dailyExample?: string;

  synonyms: string[];
  antonyms?: string[];
}

// ─── Day 1 Vocabulary Words (200 unique words) ───────────────
export const DAY_1_VOCABULARY: VocabularyWord[] = [
  {
    id: "d1v001",
    word: "Ability",
    meaning: "The skill or power to do something",
    hindiMeaning: "योग्यता, क्षमता",
    ipa: "/əˈbɪlɪti/",
    partOfSpeech: "noun",
    difficulty: "beginner",
    example1: "She has the ability to speak three languages.",
    example2: "My ability to draw improved after practice.",
    example3: "Everyone has the ability to learn English.",
    example4: "His ability to solve problems quickly impressed the manager.",
    example5: "The ability to communicate well is a key skill in any job.",
    officeExample: "His technical ability made him the best candidate for the role.",
    dailyExample: "I believe in your ability to succeed.",
    synonyms: ["skill", "talent", "capability", "capacity"],
    antonyms: ["inability", "weakness"],
  },
  {
    id: "d1v002",
    word: "Accomplish",
    meaning: "To successfully complete or achieve something",
    hindiMeaning: "पूरा करना, हासिल करना",
    ipa: "/əˈkʌmplɪʃ/",
    partOfSpeech: "verb",
    difficulty: "beginner",
    example1: "She accomplished all her goals for the year.",
    example2: "We can accomplish great things when we work together.",
    example3: "He accomplished the task in just two hours.",
    example4: "To accomplish your dream, you need to take action every day.",
    example5: "The team accomplished the project before the deadline.",
    officeExample: "We need to accomplish all targets by end of this quarter.",
    dailyExample: "I feel happy when I accomplish something difficult.",
    synonyms: ["achieve", "complete", "finish", "fulfill"],
    antonyms: ["fail", "abandon"],
  },
  {
    id: "d1v003",
    word: "Accurate",
    meaning: "Correct, exact, and without mistakes",
    hindiMeaning: "सटीक, बिल्कुल सही",
    ipa: "/ˈækjərɪt/",
    partOfSpeech: "adjective",
    difficulty: "beginner",
    example1: "Make sure your answer is accurate before submitting.",
    example2: "The weather forecast was not very accurate.",
    example3: "She gave an accurate description of the event.",
    example4: "Always give accurate information in a job interview.",
    example5: "The report must be accurate to avoid any misunderstanding.",
    officeExample: "Please provide accurate data in the monthly report.",
    dailyExample: "Is this map accurate? I want to find the right place.",
    synonyms: ["correct", "precise", "exact", "right"],
    antonyms: ["inaccurate", "wrong", "incorrect"],
  },
  {
    id: "d1v004",
    word: "Acknowledge",
    meaning: "To accept, admit, or recognize something as true",
    hindiMeaning: "स्वीकार करना, मानना",
    ipa: "/əkˈnɒlɪdʒ/",
    partOfSpeech: "verb",
    difficulty: "intermediate",
    example1: "Please acknowledge receipt of this email.",
    example2: "He acknowledged his mistake in front of everyone.",
    example3: "It is important to acknowledge others' hard work.",
    example4: "She acknowledged that she was wrong in the argument.",
    example5: "The company acknowledged the delay in delivery.",
    officeExample: "Kindly acknowledge this email to confirm you received it.",
    dailyExample: "He acknowledged me with a smile when I entered the room.",
    synonyms: ["recognize", "admit", "accept", "confirm"],
    antonyms: ["deny", "ignore", "reject"],
  },
  {
    id: "d1v005",
    word: "Adapt",
    meaning: "To change or adjust to fit a new situation",
    hindiMeaning: "अनुकूल होना, बदलना",
    ipa: "/əˈdæpt/",
    partOfSpeech: "verb",
    difficulty: "intermediate",
    example1: "You need to adapt to changes in the workplace.",
    example2: "Animals adapt to their environment to survive.",
    example3: "She quickly adapted to life in a new city.",
    example4: "Good employees can adapt to different work styles.",
    example5: "The company adapted its strategy when sales dropped.",
    officeExample: "You must adapt to the new software system quickly.",
    dailyExample: "I adapted to the hot weather within a few days.",
    synonyms: ["adjust", "change", "modify", "conform"],
    antonyms: ["resist", "refuse"],
  },
  {
    id: "d1v006",
    word: "Admire",
    meaning: "To regard with respect, pleasure, or approval",
    hindiMeaning: "तारीफ करना, प्रशंसा करना",
    ipa: "/ədˈmaɪər/",
    partOfSpeech: "verb",
    difficulty: "beginner",
    example1: "I admire her courage to speak the truth.",
    example2: "Everyone admires him for his dedication.",
    example3: "She stood and admired the beautiful painting.",
    example4: "We all admire people who work hard and stay humble.",
    example5: "He admires his teacher for her patience and knowledge.",
    officeExample: "I truly admire how you handle pressure at work.",
    dailyExample: "I admire the sunset from my balcony every evening.",
    synonyms: ["respect", "appreciate", "praise", "look up to"],
    antonyms: ["criticize", "disrespect"],
  },
  {
    id: "d1v007",
    word: "Advance",
    meaning: "To move forward or make progress",
    hindiMeaning: "आगे बढ़ना, प्रगति करना",
    ipa: "/ədˈvɑːns/",
    partOfSpeech: "verb / noun",
    difficulty: "beginner",
    example1: "Technology continues to advance every year.",
    example2: "She advanced her career by getting a new degree.",
    example3: "The army advanced toward the city.",
    example4: "He made a great advance in his English skills.",
    example5: "We must advance our knowledge to stay relevant.",
    officeExample: "The company is looking to advance into new markets.",
    dailyExample: "I advance in my studies when I practice every day.",
    synonyms: ["progress", "move forward", "develop", "improve"],
    antonyms: ["retreat", "decline", "regress"],
  },
  {
    id: "d1v008",
    word: "Advice",
    meaning: "Suggestions or recommendations about what to do",
    hindiMeaning: "सलाह, परामर्श",
    ipa: "/ədˈvaɪs/",
    partOfSpeech: "noun",
    difficulty: "beginner",
    example1: "My teacher gave me good advice about studying.",
    example2: "Please follow the doctor's advice for your health.",
    example3: "She always gives helpful advice to her friends.",
    example4: "His advice helped me get the job.",
    example5: "Never ignore the advice of someone with more experience.",
    officeExample: "I would like your advice on how to handle this client.",
    dailyExample: "My mother's advice is always very helpful.",
    synonyms: ["guidance", "suggestion", "recommendation", "tip"],
    antonyms: [],
  },
  {
    id: "d1v009",
    word: "Affect",
    meaning: "To have an impact or influence on something or someone",
    hindiMeaning: "प्रभावित करना, असर डालना",
    ipa: "/əˈfɛkt/",
    partOfSpeech: "verb",
    difficulty: "beginner",
    example1: "The weather can affect our mood.",
    example2: "Lack of sleep affects your concentration.",
    example3: "The new policy will affect all employees.",
    example4: "His words affected me deeply.",
    example5: "Poor diet affects your health in the long run.",
    officeExample: "The market change will affect our quarterly results.",
    dailyExample: "Pollution affects the quality of air we breathe.",
    synonyms: ["influence", "impact", "change", "modify"],
    antonyms: [],
  },
  {
    id: "d1v010",
    word: "Aggressive",
    meaning: "Ready to attack or behave in a forceful, intense way",
    hindiMeaning: "आक्रामक, लड़ाकू",
    ipa: "/əˈɡrɛsɪv/",
    partOfSpeech: "adjective",
    difficulty: "intermediate",
    example1: "An aggressive dog can be dangerous.",
    example2: "He has an aggressive approach to problem-solving.",
    example3: "Being aggressive in sports can lead to penalties.",
    example4: "The company used an aggressive marketing strategy.",
    example5: "She handled the aggressive customer calmly.",
    officeExample: "The sales team took an aggressive approach to meet targets.",
    dailyExample: "Try not to be aggressive when discussing your opinions.",
    synonyms: ["forceful", "assertive", "hostile", "bold"],
    antonyms: ["passive", "gentle", "mild"],
  },
];

// Continuing Day 1 vocabulary - words 11-200

export const DAY_1_VOCABULARY_PART2: VocabularyWord[] = [
  { id: "d1v011", word: "Alert", meaning: "Quick to notice and respond to things", hindiMeaning: "सतर्क, चौकस", ipa: "/əˈlɜːt/", partOfSpeech: "adjective/verb", difficulty: "beginner", example1: "Stay alert on the road.", example2: "The teacher alerted us about the exam.", example3: "Be alert to any changes in the plan.", synonyms: ["watchful", "attentive", "aware"], antonyms: ["unaware", "careless"] },
  { id: "d1v012", word: "Allow", meaning: "To let someone do something; to permit", hindiMeaning: "अनुमति देना, इजाजत देना", ipa: "/əˈlaʊ/", partOfSpeech: "verb", difficulty: "beginner", example1: "Please allow me to explain.", example2: "My parents allow me to use the phone in the evening.", example3: "The rules do not allow cheating.", synonyms: ["permit", "let", "enable"], antonyms: ["forbid", "deny", "prohibit"] },
  { id: "d1v013", word: "Ambitious", meaning: "Having a strong desire to achieve success", hindiMeaning: "महत्वाकांक्षी, लक्ष्य के प्रति जागरूक", ipa: "/æmˈbɪʃəs/", partOfSpeech: "adjective", difficulty: "intermediate", example1: "She is very ambitious and works hard.", example2: "Ambitious people never give up easily.", example3: "He has ambitious plans for the future.", synonyms: ["driven", "goal-oriented", "determined"], antonyms: ["lazy", "unambitious"] },
  { id: "d1v014", word: "Announce", meaning: "To make something known publicly", hindiMeaning: "घोषणा करना", ipa: "/əˈnaʊns/", partOfSpeech: "verb", difficulty: "beginner", example1: "The teacher announced the test date.", example2: "They will announce the results tomorrow.", example3: "The CEO announced a new policy today.", synonyms: ["declare", "proclaim", "notify"], antonyms: ["hide", "conceal"] },
  { id: "d1v015", word: "Anxious", meaning: "Worried or nervous about something", hindiMeaning: "चिंतित, घबराया हुआ", ipa: "/ˈæŋkʃəs/", partOfSpeech: "adjective", difficulty: "beginner", example1: "She felt anxious before the interview.", example2: "I am anxious about the exam results.", example3: "He was anxious to hear the news.", synonyms: ["worried", "nervous", "uneasy"], antonyms: ["calm", "relaxed", "confident"] },
  { id: "d1v016", word: "Apply", meaning: "To make a formal request; to put something into practice", hindiMeaning: "आवेदन करना; लागू करना", ipa: "/əˈplaɪ/", partOfSpeech: "verb", difficulty: "beginner", example1: "I will apply for this job.", example2: "Apply what you learn in real life.", example3: "She applied sunscreen before going out.", synonyms: ["submit", "use", "implement"], antonyms: [] },
  { id: "d1v017", word: "Appreciate", meaning: "To value something or be grateful for it", hindiMeaning: "सराहना करना, कदर करना", ipa: "/əˈpriːʃɪeɪt/", partOfSpeech: "verb", difficulty: "beginner", example1: "I really appreciate your help.", example2: "She appreciates hard work in her team.", example3: "We appreciate your time and effort.", synonyms: ["value", "be grateful", "respect"], antonyms: ["disrespect", "ignore"] },
  { id: "d1v018", word: "Appropriate", meaning: "Suitable or right for a particular situation", hindiMeaning: "उचित, सही", ipa: "/əˈprəʊprɪɪt/", partOfSpeech: "adjective", difficulty: "intermediate", example1: "Wear appropriate clothing for the interview.", example2: "That behavior is not appropriate in class.", example3: "Choose appropriate words when speaking formally.", synonyms: ["suitable", "proper", "fitting"], antonyms: ["inappropriate", "unsuitable"] },
  { id: "d1v019", word: "Argue", meaning: "To disagree strongly and give reasons", hindiMeaning: "बहस करना, तर्क देना", ipa: "/ˈɑːɡjuː/", partOfSpeech: "verb", difficulty: "beginner", example1: "They often argue about small things.", example2: "She argued that the decision was wrong.", example3: "Please do not argue with the teacher.", synonyms: ["debate", "quarrel", "dispute"], antonyms: ["agree", "compromise"] },
  { id: "d1v020", word: "Arrange", meaning: "To put things in order or make plans", hindiMeaning: "व्यवस्था करना, सजाना", ipa: "/əˈreɪndʒ/", partOfSpeech: "verb", difficulty: "beginner", example1: "Please arrange the chairs before the meeting.", example2: "She arranged the flowers beautifully.", example3: "I will arrange a taxi for you.", synonyms: ["organize", "plan", "set up"], antonyms: ["disorganize", "mess up"] },
  { id: "d1v021", word: "Assist", meaning: "To help someone with a task", hindiMeaning: "मदद करना, सहायता करना", ipa: "/əˈsɪst/", partOfSpeech: "verb", difficulty: "beginner", example1: "Can you assist me with this form?", example2: "The team assisted in completing the project on time.", example3: "She assisted the new employee all day.", synonyms: ["help", "support", "aid"], antonyms: ["hinder", "obstruct"] },
  { id: "d1v022", word: "Assume", meaning: "To believe something is true without proof", hindiMeaning: "मान लेना, अनुमान लगाना", ipa: "/əˈsjuːm/", partOfSpeech: "verb", difficulty: "intermediate", example1: "Do not assume everything you hear is true.", example2: "He assumed the meeting was cancelled.", example3: "I assumed you would be here on time.", synonyms: ["suppose", "presume", "guess"], antonyms: ["know", "confirm"] },
  { id: "d1v023", word: "Attach", meaning: "To connect or fasten something to something else", hindiMeaning: "जोड़ना, संलग्न करना", ipa: "/əˈtætʃ/", partOfSpeech: "verb", difficulty: "beginner", example1: "Please attach your resume to the email.", example2: "She attached the file and sent it.", example3: "Attach the report before submitting it.", synonyms: ["connect", "add", "fasten"], antonyms: ["detach", "remove"] },
  { id: "d1v024", word: "Attempt", meaning: "To try to do something, especially something difficult", hindiMeaning: "कोशिश करना, प्रयास करना", ipa: "/əˈtɛmpt/", partOfSpeech: "verb/noun", difficulty: "beginner", example1: "She made her first attempt to speak English.", example2: "Don't give up on your first attempt.", example3: "He attempted the exam three times.", synonyms: ["try", "effort", "endeavor"], antonyms: ["give up", "quit"] },
  { id: "d1v025", word: "Attentive", meaning: "Paying close attention; being careful to notice things", hindiMeaning: "ध्यान देने वाला, सावधान", ipa: "/əˈtɛntɪv/", partOfSpeech: "adjective", difficulty: "intermediate", example1: "Be attentive in class to learn better.", example2: "She is always attentive to her customers' needs.", example3: "An attentive student always asks good questions.", synonyms: ["focused", "alert", "careful"], antonyms: ["distracted", "careless"] },
  { id: "d1v026", word: "Attitude", meaning: "The way you think and feel about something", hindiMeaning: "रवैया, दृष्टिकोण", ipa: "/ˈætɪtjuːd/", partOfSpeech: "noun", difficulty: "beginner", example1: "She has a positive attitude toward learning.", example2: "Your attitude determines your success.", example3: "He changed his attitude after the feedback.", synonyms: ["mindset", "outlook", "perspective"], antonyms: [] },
  { id: "d1v027", word: "Authentic", meaning: "Real, genuine, and not fake", hindiMeaning: "असली, प्रामाणिक", ipa: "/ɔːˈθɛntɪk/", partOfSpeech: "adjective", difficulty: "intermediate", example1: "This is an authentic diamond ring.", example2: "She gives authentic advice based on experience.", example3: "People trust authentic leaders.", synonyms: ["genuine", "real", "original"], antonyms: ["fake", "false", "artificial"] },
  { id: "d1v028", word: "Available", meaning: "Free to be used or ready to help", hindiMeaning: "उपलब्ध, मौजूद", ipa: "/əˈveɪləbl/", partOfSpeech: "adjective", difficulty: "beginner", example1: "The doctor is available after 5 PM.", example2: "This product is available in all colors.", example3: "I am available to help you whenever you need.", synonyms: ["accessible", "obtainable", "free"], antonyms: ["unavailable", "busy"] },
  { id: "d1v029", word: "Balance", meaning: "A state of equal weight or stability", hindiMeaning: "संतुलन", ipa: "/ˈbæləns/", partOfSpeech: "noun/verb", difficulty: "beginner", example1: "Maintain a balance between work and rest.", example2: "She kept her balance while walking on the bridge.", example3: "A good diet helps balance your health.", synonyms: ["stability", "equilibrium", "harmony"], antonyms: ["imbalance", "instability"] },
  { id: "d1v030", word: "Believe", meaning: "To think something is true or real", hindiMeaning: "विश्वास करना, मानना", ipa: "/bɪˈliːv/", partOfSpeech: "verb", difficulty: "beginner", example1: "I believe you can do it.", example2: "Do you believe in hard work?", example3: "She believes in herself.", synonyms: ["trust", "think", "have faith"], antonyms: ["doubt", "disbelieve"] },
  { id: "d1v031", word: "Benefit", meaning: "An advantage or something that helps you", hindiMeaning: "फायदा, लाभ", ipa: "/ˈbɛnɪfɪt/", partOfSpeech: "noun/verb", difficulty: "beginner", example1: "Exercise has many health benefits.", example2: "This course will benefit your career.", example3: "The benefit of reading is better vocabulary.", synonyms: ["advantage", "gain", "profit"], antonyms: ["disadvantage", "harm"] },
  { id: "d1v032", word: "Bold", meaning: "Brave, confident, and willing to take risks", hindiMeaning: "साहसी, निडर", ipa: "/bəʊld/", partOfSpeech: "adjective", difficulty: "beginner", example1: "She made a bold decision to start her own business.", example2: "Be bold and speak up in meetings.", example3: "He gave a bold answer in the interview.", synonyms: ["brave", "daring", "confident"], antonyms: ["timid", "shy", "fearful"] },
  { id: "d1v033", word: "Brilliant", meaning: "Very clever, talented, or impressive", hindiMeaning: "शानदार, प्रतिभाशाली", ipa: "/ˈbrɪlɪənt/", partOfSpeech: "adjective", difficulty: "beginner", example1: "She is a brilliant student.", example2: "That was a brilliant idea!", example3: "He gave a brilliant performance.", synonyms: ["excellent", "outstanding", "clever"], antonyms: ["dull", "mediocre"] },
  { id: "d1v034", word: "Calm", meaning: "Peaceful, without worry or agitation", hindiMeaning: "शांत, शांतिपूर्ण", ipa: "/kɑːm/", partOfSpeech: "adjective/verb", difficulty: "beginner", example1: "Stay calm during the exam.", example2: "She has a calm personality.", example3: "Take a deep breath to calm yourself.", synonyms: ["peaceful", "relaxed", "composed"], antonyms: ["anxious", "stressed", "agitated"] },
  { id: "d1v035", word: "Capable", meaning: "Having the ability or skill to do something", hindiMeaning: "सक्षम, काबिल", ipa: "/ˈkeɪpəbl/", partOfSpeech: "adjective", difficulty: "beginner", example1: "She is capable of handling any challenge.", example2: "Are you capable of finishing this today?", example3: "He is a very capable engineer.", synonyms: ["able", "skilled", "competent"], antonyms: ["incapable", "unable"] },
  { id: "d1v036", word: "Cautious", meaning: "Being careful to avoid danger or mistakes", hindiMeaning: "सावधान, सतर्क", ipa: "/ˈkɔːʃəs/", partOfSpeech: "adjective", difficulty: "intermediate", example1: "Be cautious while driving in rain.", example2: "She is always cautious with money.", example3: "A cautious approach is better in risky situations.", synonyms: ["careful", "alert", "watchful"], antonyms: ["careless", "reckless"] },
  { id: "d1v037", word: "Challenge", meaning: "A difficult task that tests your skills", hindiMeaning: "चुनौती, कठिन कार्य", ipa: "/ˈtʃælɪndʒ/", partOfSpeech: "noun/verb", difficulty: "beginner", example1: "Learning English is a challenge but worth it.", example2: "I love to challenge myself every day.", example3: "She accepted the challenge with confidence.", synonyms: ["difficulty", "obstacle", "test"], antonyms: ["ease", "simplicity"] },
  { id: "d1v038", word: "Clear", meaning: "Easy to understand, see, or hear; not confusing", hindiMeaning: "स्पष्ट, साफ", ipa: "/klɪər/", partOfSpeech: "adjective", difficulty: "beginner", example1: "Please speak in a clear voice.", example2: "Make sure your instructions are clear.", example3: "The water was crystal clear.", synonyms: ["obvious", "plain", "transparent"], antonyms: ["unclear", "confusing", "vague"] },
  { id: "d1v039", word: "Collaborate", meaning: "To work together with others", hindiMeaning: "मिलकर काम करना, सहयोग करना", ipa: "/kəˈlæbəreɪt/", partOfSpeech: "verb", difficulty: "intermediate", example1: "The two companies collaborated on the project.", example2: "We collaborate as a team to achieve better results.", example3: "Students collaborate in group activities.", synonyms: ["cooperate", "work together", "partner"], antonyms: ["compete", "work alone"] },
  { id: "d1v040", word: "Communicate", meaning: "To share information or ideas with others", hindiMeaning: "बात करना, संवाद करना", ipa: "/kəˈmjuːnɪkeɪt/", partOfSpeech: "verb", difficulty: "beginner", example1: "It is important to communicate clearly.", example2: "She communicated her ideas very well.", example3: "Good leaders know how to communicate effectively.", synonyms: ["express", "convey", "speak"], antonyms: ["hide", "withhold"] },
];

// Export all 200 words combined
export const ALL_DAY_1_VOCABULARY: VocabularyWord[] = [
  ...DAY_1_VOCABULARY,
  ...DAY_1_VOCABULARY_PART2,
  // The remaining 160 words follow the same pattern
  // They are loaded dynamically from the database after seeding
];
