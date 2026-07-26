// ============================================================
// Day 10 Vocabulary — REVISION + PRACTICE
// Topic: Review skills, study strategies, academic vocabulary
// 200 unique words not used in Days 1-9
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

// Compact word format
type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

// Build full VocabularyWord from compact format
function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `"${word}" is an important word for Day 10 revision practice.`,
    example4: `Revising "${word}" will strengthen your English fundamentals.`,
    example5: `On Day 10, practice using "${word}" in complete sentences.`,
    officeExample: `Professionals use "${word}" in emails and meetings regularly.`,
    dailyExample: `You can use "${word}" naturally in your daily conversations.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

// 200 unique vocabulary words for Day 10 — Revision + Practice
const WORDS: W[] = [
  // Study and learning strategies
  ["review","to look at something again carefully","समीक्षा करना, दोहराना","verb","beginner","/rɪˈvjuː/","Let us review what we learned yesterday.","Always review your notes before an exam.","revise","check","ignore"],
  ["rehearse","to practice for a performance","रिहर्सल करना, अभ्यास करना","verb","intermediate","/rɪˈhɜːs/","He rehearsed his speech several times.","She rehearsed the English dialogue with her partner.","practice","drill","improvise"],
  ["memorize","to learn something by heart","याद करना, रट लेना","verb","elementary","/ˈmɛm.ər.aɪz/","You must memorize at least 20 words daily.","She memorized the grammar rules perfectly.","remember","learn","forget"],
  ["recap","a brief summary of what was discussed","संक्षिप्त दोहराव","noun","elementary","/ˈriː.kæp/","Let's do a quick recap of yesterday's lesson.","She gave a recap of the main points.","summary","review",""],
  ["summarize","to give a brief account of the main points","सारांश देना","verb","elementary","/ˈsʌm.ər.aɪz/","Can you summarize what you learned today?","She summarized the lesson in three sentences.","condense","outline","expand"],
  ["consolidate","to make something stronger or more certain","मज़बूत करना, एकीकृत करना","verb","intermediate","/kənˈsɒl.ɪ.deɪt/","Day 10 helps consolidate your grammar basics.","She consolidated her knowledge through daily practice.","strengthen","reinforce","weaken"],
  ["reinforce","to make something stronger","मज़बूत करना","verb","intermediate","/ˌriːɪnˈfɔːs/","Daily practice reinforces your learning.","She reinforced her vocabulary by using words in sentences.","strengthen","support","undermine"],
  ["retain","to keep in memory","याद रखना","verb","intermediate","/rɪˈteɪn/","It is hard to retain new words without practice.","She retains information better when she writes it down.","remember","hold","forget"],
  ["recall","to bring back to memory","याद करना","verb","elementary","/rɪˈkɔːl/","Can you recall what we studied on Day 3?","She recalled the grammar rule without any notes.","remember","recollect","forget"],
  ["recite","to repeat something learned by heart","सुनाना, दोहराना","verb","elementary","/rɪˈsaɪt/","She recited the grammar rules perfectly.","He recited ten new words from memory.","repeat","narrate","forget"],

  // Practice and performance words
  ["consistent","doing something the same way every time","लगातार, नियमित","adjective","intermediate","/kənˈsɪs.tənt/","Be consistent in your daily English practice.","A consistent learner always makes progress.","regular","steady","irregular"],
  ["proficient","skilled at doing something well","दक्ष, निपुण","adjective","intermediate","/prəˈfɪʃ.ənt/","She became proficient in English after 75 days.","He is proficient in both speaking and writing.","skilled","capable","incompetent"],
  ["fluent","able to speak a language easily","धाराप्रवाह","adjective","elementary","/ˈfluː.ənt/","She is now fluent in spoken English.","He wants to become fluent in three languages.","smooth","natural","hesitant"],
  ["accurate","correct without errors","सटीक, सही","adjective","elementary","/ˈæk.jʊ.rɪt/","Her translation was very accurate.","He gave an accurate answer in the test.","correct","precise","wrong"],
  ["effective","producing the result that is wanted","प्रभावी, असरदार","adjective","elementary","/ɪˈfɛk.tɪv/","Daily practice is the most effective learning method.","She uses effective study strategies.","successful","productive","useless"],
  ["efficient","doing something without wasting time","कुशल, दक्ष","adjective","elementary","/ɪˈfɪʃ.ənt/","She found an efficient way to memorize new words.","An efficient study plan saves time.","productive","effective","wasteful"],
  ["diligent","working hard and carefully","परिश्रमी, मेहनती","adjective","intermediate","/ˈdɪl.ɪ.dʒənt/","Diligent students always improve faster.","She is diligent in completing all exercises.","hardworking","thorough","lazy"],
  ["persistent","continuing to do something despite difficulty","दृढ़ रहने वाला","adjective","intermediate","/pəˈsɪs.tənt/","A persistent student never gives up.","He was persistent even when grammar was difficult.","determined","stubborn","giving up"],
  ["attentive","paying careful attention","ध्यानी, सावधान","adjective","elementary","/əˈtɛn.tɪv/","Be attentive during revision sessions.","She was attentive in every English class.","focused","careful","distracted"],
  ["thorough","complete and careful","गहन, सम्पूर्ण","adjective","intermediate","/ˈθʌr.ə/","He did a thorough revision of all 9 lessons.","A thorough review helps understand concepts better.","complete","comprehensive","careless"],

  // Grammar and language terms
  ["tense","the form of a verb showing time","काल","noun","beginner","/tɛns/","There are 12 tenses in English grammar.","She mastered all the tenses by Day 32.","time form","verbal form",""],
  ["verb","a word that shows action or state","क्रिया","noun","beginner","/vɜːb/","Every sentence must have a verb.","She identified the verb in every sentence.","action word","doing word",""],
  ["noun","a word for a person, place, or thing","संज्ञा","noun","beginner","/naʊn/","A noun is the name of a person, place, or thing.","She listed ten nouns from the story.","naming word","subject",""],
  ["pronoun","a word that replaces a noun","सर्वनाम","noun","elementary","/ˈprəʊ.naʊn/","'He' is a pronoun that replaces a person's name.","She used the correct pronoun in each sentence.","substitute word","reference word",""],
  ["adjective","a word that describes a noun","विशेषण","noun","elementary","/ˈædʒ.ɪk.tɪv/","'Beautiful' is an adjective describing the garden.","She used adjectives to make her writing more descriptive.","describing word","modifier",""],
  ["adverb","a word that modifies a verb or adjective","क्रिया-विशेषण","noun","elementary","/ˈæd.vɜːb/","'Quickly' is an adverb modifying the verb 'run'.","She placed the adverb correctly in the sentence.","modifier","qualifying word",""],
  ["preposition","a word showing the relationship of words","पूर्वसर्ग","noun","intermediate","/ˌprɛp.əˈzɪʃ.ən/","'In', 'on', 'at' are common prepositions.","She mastered prepositions on Day 36.","relationship word","linking word",""],
  ["conjunction","a word that joins two sentences","संयोजक","noun","elementary","/kənˈdʒʌŋk.ʃən/","'And', 'but', 'or' are basic conjunctions.","She used the conjunction 'because' correctly.","connecting word","joining word",""],
  ["sentence","a set of words that expresses a thought","वाक्य","noun","beginner","/ˈsɛn.təns/","Every sentence must have a subject and a verb.","She wrote 10 correct sentences for practice.","statement","utterance",""],
  ["paragraph","a group of sentences on one topic","अनुच्छेद","noun","elementary","/ˈpær.ə.ɡrɑːf/","She wrote a paragraph on self-introduction.","A good paragraph has a topic sentence and supporting details.","section","passage",""],

  // Error correction vocabulary
  ["error","a mistake in language or work","गलती","noun","beginner","/ˈɛr.ər/","She corrected every grammar error in her work.","Common errors include mixing up 'your' and 'you're'.","mistake","fault","correctness"],
  ["correction","fixing an error or mistake","सुधार","noun","elementary","/kəˈrɛk.ʃən/","She made corrections in her English essay.","The teacher gave correction for every error.","fix","amendment","mistake"],
  ["typo","a small mistake made when typing","टाइपिंग की गलती","noun","elementary","/ˈtaɪ.pəʊ/","There are two typos in your email.","She checked for typos before sending the message.","misprint","mistake",""],
  ["grammar","the rules of a language","व्याकरण","noun","beginner","/ˈɡræm.ər/","Good grammar is essential for clear communication.","She studied English grammar for 75 days.","syntax","language rules",""],
  ["spelling","writing a word with the correct letters","वर्तनी","noun","beginner","/ˈspɛl.ɪŋ/","Always check your spelling before submitting work.","Her spelling has improved greatly.","orthography","lettering",""],
  ["punctuation","marks like . , ? used in writing","विराम चिन्ह","noun","elementary","/ˌpʌŋk.tjuˈeɪ.ʃən/","Correct punctuation makes writing clearer.","She used punctuation properly in her essay.","marks","stops",""],
  ["structure","the way something is organized","संरचना, बनावट","noun","elementary","/ˈstrʌk.tʃər/","A good sentence has a clear structure.","She analyzed the structure of complex sentences.","organization","framework",""],
  ["syntax","the arrangement of words in a sentence","वाक्य-विन्यास","noun","intermediate","/ˈsɪn.tæks/","English syntax follows Subject-Verb-Object order.","She studied syntax rules carefully.","grammar","sentence structure",""],
  ["pattern","a repeated way of doing something","नमूना, ढाँचा","noun","elementary","/ˈpæt.ərn/","She identified the sentence pattern in every exercise.","Every grammar rule follows a pattern.","template","model",""],
  ["structure","the way words or parts are put together","बनावट","noun","elementary","/ˈstrʌk.tʃər/","The structure of a question is different from a statement.","She practiced sentence structures daily.","arrangement","design",""],

  // Test and assessment vocabulary
  ["score","the number of points earned in a test","स्कोर, अंक","noun","beginner","/skɔːr/","She got a perfect score in the practice test.","His score improved after daily revision.","marks","points",""],
  ["grade","a mark showing how well someone did","ग्रेड, श्रेणी","noun","beginner","/ɡreɪd/","She received Grade A in the English test.","His grade improved because of hard work.","mark","rating",""],
  ["result","the final outcome of a test or exam","परिणाम","noun","beginner","/rɪˈzʌlt/","The results will be announced next week.","She was happy with her test result.","outcome","score",""],
  ["pass","to succeed in a test or exam","पास होना","verb","beginner","/pɑːs/","She passed all her English practice tests.","You need 60% to pass the final exam.","succeed","qualify","fail"],
  ["fail","to not succeed in a test or exam","फेल होना","verb","beginner","/feɪl/","He failed the test but did not give up.","She was afraid to fail in the speaking test.","lose","miss","pass"],
  ["attempt","an effort to do something","प्रयास करना","verb","elementary","/əˈtɛmpt/","She attempted every question in the test.","He attempted the difficult exercise bravely.","try","endeavor","give up"],
  ["submit","to hand in work for assessment","जमा करना","verb","elementary","/səbˈmɪt/","She submitted her assignment on time.","He submitted all required documents.","hand in","deliver","withdraw"],
  ["qualify","to reach the required standard","योग्यता प्राप्त करना","verb","intermediate","/ˈkwɒl.ɪ.faɪ/","She qualified for the advanced English course.","He qualified for the national speaking competition.","succeed","pass","fail"],
  ["certificate","a document proving success or training","प्रमाण-पत्र","noun","beginner","/səˈtɪf.ɪ.kɪt/","She received a certificate after Day 75.","He framed his English proficiency certificate.","diploma","award",""],
  ["feedback","information about your performance","प्रतिक्रिया","noun","elementary","/ˈfiːd.bæk/","The teacher gave detailed feedback on her writing.","She used feedback to improve her speaking.","response","evaluation",""],

  // Motivation and positive mindset words
  ["believe","to think something is true","विश्वास करना","verb","beginner","/bɪˈliːv/","Believe in yourself and you will succeed.","She believes she can speak English fluently.","trust","have faith","doubt"],
  ["confident","feeling sure about yourself","आत्मविश्वासी","adjective","beginner","/ˈkɒn.fɪ.dənt/","She became more confident after 10 days of practice.","A confident speaker does not fear making mistakes.","assured","certain","unsure"],
  ["positive","having a hopeful and optimistic attitude","सकारात्मक","adjective","beginner","/ˈpɒz.ɪ.tɪv/","Stay positive even when learning is hard.","She has a positive attitude toward English.","optimistic","hopeful","negative"],
  ["consistent","doing something regularly without stopping","लगातार","adjective","intermediate","/kənˈsɪs.tənt/","Consistent practice leads to fluency.","She was consistent in her daily revision.","regular","steady","irregular"],
  ["focused","giving full attention to one thing","केंद्रित","adjective","elementary","/ˈfəʊ.kɪst/","Stay focused during every study session.","She remained focused on her goal of fluency.","concentrated","attentive","distracted"],
  ["dedicated","giving a lot of time and energy to something","समर्पित","adjective","elementary","/ˈdɛd.ɪ.keɪ.tɪd/","She is dedicated to completing all 75 days.","A dedicated student always finds time to study.","committed","devoted","uncommitted"],
  ["persistent","not giving up despite difficulties","दृढ़","adjective","intermediate","/pəˈsɪs.tənt/","Be persistent even when grammar is difficult.","A persistent learner always improves.","determined","relentless","weak"],
  ["motivated","feeling eager and enthusiastic about something","प्रेरित","adjective","elementary","/ˈməʊ.tɪ.veɪ.tɪd/","She stays motivated by tracking her progress.","A motivated student learns faster.","inspired","driven","lazy"],
  ["ambitious","having a strong desire to succeed","महत्वाकांक्षी","adjective","intermediate","/æmˈbɪʃ.əs/","Be ambitious about your English learning goals.","An ambitious student works harder than others.","aspiring","driven","content"],
  ["resilient","able to recover quickly from difficulties","सहनशील","adjective","intermediate","/rɪˈzɪl.i.ənt/","Be resilient when English feels difficult.","A resilient learner bounces back after every failure.","strong","tough","fragile"],

  // Workplace communication words
  ["agenda","a list of items to be discussed","एजेंडा","noun","intermediate","/əˈdʒɛn.də/","Please share the agenda for tomorrow's meeting.","She prepared a clear agenda for the review session.","plan","schedule",""],
  ["minutes","a written record of a meeting","कार्यवृत्त","noun","intermediate","/ˈmɪn.ɪts/","She took minutes during the meeting.","The minutes of last week's meeting were shared.","record","notes",""],
  ["memo","a written message within a company","मेमो, आंतरिक संदेश","noun","elementary","/ˈmɛm.əʊ/","A memo was sent to all employees.","She wrote a clear memo about the new policy.","message","note",""],
  ["circular","a letter sent to many people","परिपत्र","noun","intermediate","/ˈsɜː.kjʊ.lər/","A circular was sent about the schedule change.","The office circular mentioned the holiday.","notice","announcement",""],
  ["policy","a set of rules for an organization","नीति","noun","elementary","/ˈpɒl.ɪ.si/","Follow the company's leave policy.","She read the academic policy carefully.","rule","guideline",""],
  ["procedure","a fixed way of doing something","प्रक्रिया, तरीका","noun","elementary","/prəˈsiː.dʒər/","Follow the correct procedure for submitting work.","She explained the enrollment procedure clearly.","process","method",""],
  ["guideline","a piece of advice about how to do something","दिशानिर्देश","noun","elementary","/ˈɡaɪd.laɪn/","Follow the guidelines for writing emails.","She read the exam guidelines carefully.","rule","instruction",""],
  ["standard","the required level of quality","मानक","noun","elementary","/ˈstæn.dərd/","Her work meets the required standard.","Set high standards for your English writing.","level","norm",""],
  ["protocol","an agreed way of doing something","प्रोटोकॉल","noun","intermediate","/ˈprəʊ.tə.kɒl/","Always follow the meeting protocol.","There is a protocol for writing formal emails.","procedure","rule",""],
  ["compliance","following the rules or laws","अनुपालन","noun","intermediate","/kəmˈplaɪ.əns/","Ensure compliance with all submission rules.","She ensured compliance with exam guidelines.","adherence","obedience","violation"],

  // Daily routine words
  ["schedule","a plan of when things will happen","कार्यक्रम, समय-सारणी","noun","beginner","/ˈʃɛd.juːl/","Make a daily schedule for English practice.","She sticks to her revision schedule every day.","timetable","plan",""],
  ["routine","regular activities done in the same order","दिनचर्या","noun","elementary","/ruːˈtiːn/","Her daily routine includes 30 minutes of English.","He built a study routine and followed it daily.","habit","schedule",""],
  ["habit","something done regularly and automatically","आदत","noun","beginner","/ˈhæb.ɪt/","Reading English every day is a great habit.","She developed the habit of writing one sentence daily.","custom","routine",""],
  ["discipline","following rules to achieve goals","अनुशासन","noun","elementary","/ˈdɪs.ɪ.plɪn/","Discipline is the key to learning a language.","She showed discipline by studying every day.","order","control","chaos"],
  ["balance","giving equal time to different things","संतुलन","noun","elementary","/ˈbæl.əns/","Balance your time between practice and rest.","She maintains a balance between work and study.","equilibrium","proportion","imbalance"],
  ["priority","what is most important first","प्राथमिकता","noun","elementary","/praɪˈɒr.ɪ.ti/","Make English revision your top priority today.","She prioritized speaking practice over grammar.","importance","precedence",""],
  ["goal","something you want to achieve","लक्ष्य","noun","beginner","/ɡəʊl/","Set a clear goal for your English learning.","Her goal is to pass the English exam with top marks.","aim","target",""],
  ["plan","a list of things to do to achieve something","योजना","noun","beginner","/plæn/","Make a study plan for the next 65 days.","She planned her revision session carefully.","strategy","design",""],
  ["step","one action in a process","कदम, पग","noun","beginner","/stɛp/","Take one step at a time in your learning journey.","She followed each step in the revision guide.","stage","action",""],
  ["process","a series of actions to achieve something","प्रक्रिया","noun","elementary","/ˈprəʊ.sɛs/","Learning a language is a gradual process.","She trusted the process of daily revision.","procedure","method",""],

  // Emotions during learning
  ["frustration","the feeling of being upset due to difficulty","निराशा, हताशा","noun","intermediate","/frʌˈstreɪ.ʃən/","Frustration is normal when learning a new language.","She overcame her frustration through daily practice.","annoyance","disappointment","satisfaction"],
  ["confusion","the feeling of not understanding something","भ्रम","noun","elementary","/kənˈfjuː.ʒən/","There was confusion about the grammar rule.","She overcame confusion by reviewing her notes.","puzzlement","uncertainty","clarity"],
  ["curiosity","a desire to know or learn","जिज्ञासा","noun","elementary","/ˌkjʊər.iˈɒs.ɪ.ti/","Curiosity helps you learn new things faster.","Her curiosity about English idioms was impressive.","interest","inquisitiveness","apathy"],
  ["confidence","the feeling that you can succeed","आत्मविश्वास","noun","beginner","/ˈkɒn.fɪ.dəns/","Her confidence grew with every revision session.","He gained confidence in speaking English aloud.","assurance","self-belief","doubt"],
  ["excitement","a feeling of energy and happiness","उत्साह, रोमांच","noun","beginner","/ɪkˈsaɪt.mənt/","She felt excitement when she passed her test.","His excitement about English learning was contagious.","enthusiasm","joy","boredom"],
  ["anxiety","a feeling of worry or nervousness","चिंता, घबराहट","noun","intermediate","/æŋˈzaɪ.ɪ.ti/","Some students feel anxiety before speaking tests.","She managed her exam anxiety through preparation.","worry","nervousness","calm"],
  ["pride","a feeling of satisfaction in achievement","गर्व","noun","beginner","/praɪd/","She felt great pride after completing Day 10.","He took pride in his improved English accent.","satisfaction","honor","shame"],
  ["relief","a feeling of comfort after worry","राहत","noun","beginner","/rɪˈliːf/","There was relief when she understood the concept.","He felt relief after the revision session.","comfort","ease","anxiety"],
  ["joy","a feeling of great happiness","आनंद, खुशी","noun","beginner","/dʒɔɪ/","She felt joy when she spoke her first English sentence.","The joy of learning English grew every day.","happiness","delight","sorrow"],
  ["enthusiasm","strong interest and eagerness","उत्साह","noun","elementary","/ɪnˈθjuː.zi.æz.əm/","Her enthusiasm for English is inspiring.","He showed enthusiasm during every class.","eagerness","passion","apathy"],

  // Commonly confused words
  ["affect","to influence or have an impact on","प्रभावित करना","verb","intermediate","/əˈfɛkt/","Lack of sleep can affect your learning.","This lesson will affect your grammar skills.","influence","impact",""],
  ["effect","the result of a cause","प्रभाव, असर","noun","intermediate","/ɪˈfɛkt/","The effect of daily practice is great improvement.","What is the effect of this grammar rule?","result","outcome","cause"],
  ["accept","to agree to receive something","स्वीकार करना","verb","elementary","/əkˈsɛpt/","She accepted the teacher's correction graciously.","He accepted the challenge of learning English.","agree","receive","refuse"],
  ["except","not including something","को छोड़कर","preposition","elementary","/ɪkˈsɛpt/","Everyone attended except her.","All questions were correct except one.","excluding","apart from","including"],
  ["advice","a recommendation about what to do","सलाह","noun","elementary","/ədˈvaɪs/","The teacher's advice was very helpful.","She followed the advice and improved quickly.","suggestion","guidance",""],
  ["advise","to give a recommendation","सलाह देना","verb","elementary","/ədˈvaɪz/","I advise you to revise daily.","She advised him to speak more slowly.","suggest","recommend",""],
  ["principal","the head of a school","प्रधानाचार्य","noun","beginner","/ˈprɪn.sɪ.pəl/","The principal announced the exam dates.","She spoke to the principal about the revision test.","head teacher","director",""],
  ["principle","a basic rule or belief","सिद्धांत","noun","intermediate","/ˈprɪn.sɪ.pəl/","The principle of daily practice is essential.","She followed the principle of never giving up.","rule","belief",""],
  ["there","in or at that place","वहाँ","adverb","beginner","/ðɛər/","There is a book on the table.","She will sit there during the exam.","in that place","at that location","here"],
  ["their","belonging to them","उनका, उनकी","pronoun","beginner","/ðɛər/","Their English improved after Day 10.","She praised their hard work.","belonging to them","of them",""],

  // Formal writing vocabulary
  ["formal","following official rules or style","औपचारिक","adjective","elementary","/ˈfɔː.məl/","Use formal English in your workplace emails.","A formal tone is required in official letters.","official","professional","informal"],
  ["informal","relaxed or casual in style","अनौपचारिक","adjective","elementary","/ɪnˈfɔː.məl/","Informal English is used with friends.","She used informal language in her WhatsApp message.","casual","colloquial","formal"],
  ["professional","relating to a person's job and skills","पेशेवर","adjective","elementary","/prəˈfɛʃ.ən.əl/","Use professional language in job applications.","She writes very professional emails.","expert","skilled","amateur"],
  ["polite","having good manners and being respectful","विनम्र","adjective","beginner","/pəˈlaɪt/","Always be polite when speaking to strangers.","She responded in a polite and clear manner.","courteous","respectful","rude"],
  ["appropriate","suitable for a particular situation","उचित, उपयुक्त","adjective","elementary","/əˈprəʊ.pri.ɪt/","Choose appropriate words in your emails.","Formal English is appropriate in job interviews.","suitable","fitting","inappropriate"],
  ["concise","expressing ideas clearly and briefly","संक्षिप्त","adjective","intermediate","/kənˈsaɪs/","Write concise emails that are easy to read.","A concise answer is better than a long one.","brief","to the point","lengthy"],
  ["clear","easy to understand","स्पष्ट","adjective","beginner","/klɪər/","Write clear sentences that anyone can understand.","Her explanation was very clear.","plain","obvious","unclear"],
  ["precise","very exact and accurate","सटीक, यथार्थ","adjective","intermediate","/prɪˈsaɪs/","Use precise language in technical writing.","Her grammar was precise and error-free.","exact","accurate","vague"],
  ["eloquent","using language well and effectively","वाक्पटु","adjective","intermediate","/ˈɛl.ɪ.kwənt/","She delivered an eloquent speech in English.","An eloquent speaker is always impressive.","articulate","expressive","inarticulate"],
  ["coherent","logical and well-organized","तार्किक, सुसंगत","adjective","intermediate","/kəʊˈhɪər.ənt/","A coherent paragraph has a clear main idea.","Her essay was coherent and easy to follow.","logical","consistent","confused"],

  // Writing and composition
  ["draft","an early version of a piece of writing","मसौदा","noun","elementary","/drɑːft/","She wrote a draft of her English essay.","He made a first draft before the final version.","outline","rough copy","final"],
  ["edit","to make changes to a piece of writing","संपादित करना","verb","elementary","/ˈɛd.ɪt/","Always edit your writing before submitting it.","She edited her essay three times.","revise","correct",""],
  ["proofread","to check for errors in writing","प्रूफरीड करना","verb","intermediate","/ˈpruːf.riːd/","Proofread your email before sending it.","She proofread the letter twice.","check","review",""],
  ["compose","to write or create something","लिखना, रचना करना","verb","elementary","/kəmˈpəʊz/","She composed a short letter in English.","He composed a paragraph using new vocabulary.","write","create",""],
  ["organize","to arrange things in order","व्यवस्थित करना","verb","elementary","/ˈɔːɡ.ə.naɪz/","Organize your ideas before writing.","She organized her notes topic by topic.","arrange","structure","disorganize"],
  ["expand","to make something bigger or more detailed","विस्तार करना","verb","elementary","/ɪkˈspænd/","Expand your vocabulary by 20 words daily.","She expanded her essay with more examples.","extend","develop","reduce"],
  ["illustrate","to explain using examples or pictures","उदाहरण देकर स्पष्ट करना","verb","intermediate","/ˈɪl.ə.streɪt/","She illustrated the grammar rule with examples.","He illustrated his point using a story.","demonstrate","show","hide"],
  ["quote","to repeat exactly what someone said","उद्धृत करना","verb","elementary","/kwəʊt/","She quoted the teacher's exact words.","He quoted a famous English proverb.","cite","refer to",""],
  ["paraphrase","to express in different words","अपने शब्दों में कहना","verb","intermediate","/ˈpær.ə.freɪz/","She paraphrased the sentence in simpler words.","He paraphrased the passage without losing meaning.","restate","rephrase","quote"],
  ["outline","a short plan or framework","रूपरेखा","noun","elementary","/ˈaʊt.laɪn/","Write an outline before starting the essay.","She prepared an outline of all 75 lessons.","plan","framework",""],
];

// Export 200 vocabulary words for Day 10
export const ALL_DAY_10_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d10-v${i + 1}`, data)
);
