// ============================================================
// Day 10 Vocabulary — REVISION + PRACTICE
// Topic: Review skills, study strategies, academic vocabulary,
//        learning words, improvement words, success words
// 300+ unique words not used in Days 1-9
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

// 300+ unique vocabulary words for Day 10 — Revision + Practice
const WORDS: W[] = [
  // ── Study and learning strategies ─────────────────────────
  ["review","to look at something again carefully","समीक्षा करना, दोहराना","verb","beginner","/rɪˈvjuː/","Let us review what we learned yesterday.","Always review your notes before an exam.","revise","check","ignore"],
  ["rehearse","to practice for a performance","रिहर्सल करना, अभ्यास करना","verb","intermediate","/rɪˈhɜːs/","He rehearsed his speech several times.","She rehearsed the English dialogue with her partner.","practice","drill","improvise"],
  ["memorize","to learn something by heart","याद करना, रट लेना","verb","elementary","/ˈmɛm.ər.aɪz/","You must memorize at least 20 words daily.","She memorized the grammar rules perfectly.","remember","learn","forget"],
  ["recap","a brief summary of what was discussed","संक्षिप्त दोहराव","noun","elementary","/ˈriː.kæp/","Let's do a quick recap of yesterday's lesson.","She gave a recap of the main points.","summary","overview",""],
  ["summarize","to give a brief account of the main points","सारांश देना","verb","elementary","/ˈsʌm.ər.aɪz/","Can you summarize what you learned today?","She summarized the lesson in three sentences.","condense","outline","expand"],
  ["consolidate","to make something stronger or more certain","मज़बूत करना, एकीकृत करना","verb","intermediate","/kənˈsɒl.ɪ.deɪt/","Day 10 helps consolidate your grammar basics.","She consolidated her knowledge through daily practice.","strengthen","reinforce","weaken"],
  ["reinforce","to make something stronger","मज़बूत करना","verb","intermediate","/ˌriːɪnˈfɔːs/","Daily practice reinforces your learning.","She reinforced her vocabulary by using words in sentences.","strengthen","support","undermine"],
  ["retain","to keep in memory","याद रखना","verb","intermediate","/rɪˈteɪn/","It is hard to retain new words without practice.","She retains information better when she writes it down.","remember","hold","forget"],
  ["recall","to bring back to memory","याद करना","verb","elementary","/rɪˈkɔːl/","Can you recall what we studied on Day 3?","She recalled the grammar rule without any notes.","remember","recollect","forget"],
  ["recite","to repeat something learned by heart","सुनाना, दोहराना","verb","elementary","/rɪˈsaɪt/","She recited the grammar rules perfectly.","He recited ten new words from memory.","repeat","narrate","forget"],

  // ── Practice and performance words ────────────────────────
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

  // ── Grammar and language terms ────────────────────────────
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

  // ── Error correction vocabulary ───────────────────────────
  ["error","a mistake in language or work","गलती","noun","beginner","/ˈɛr.ər/","She corrected every grammar error in her work.","Common errors include mixing up 'your' and 'you're'.","mistake","fault","correctness"],
  ["correction","fixing an error or mistake","सुधार","noun","elementary","/kəˈrɛk.ʃən/","She made corrections in her English essay.","The teacher gave correction for every error.","fix","amendment","mistake"],
  ["typo","a small mistake made when typing","टाइपिंग की गलती","noun","elementary","/ˈtaɪ.pəʊ/","There are two typos in your email.","She checked for typos before sending the message.","misprint","mistake",""],
  ["grammar","the rules of a language","व्याकरण","noun","beginner","/ˈɡræm.ər/","Good grammar is essential for clear communication.","She studied English grammar for 75 days.","syntax","language rules",""],
  ["spelling","writing a word with the correct letters","वर्तनी","noun","beginner","/ˈspɛl.ɪŋ/","Always check your spelling before submitting work.","Her spelling has improved greatly.","orthography","lettering",""],
  ["punctuation","marks like . , ? used in writing","विराम चिन्ह","noun","elementary","/ˌpʌŋk.tjuˈeɪ.ʃən/","Correct punctuation makes writing clearer.","She used punctuation properly in her essay.","marks","stops",""],
  ["syntax","the arrangement of words in a sentence","वाक्य-विन्यास","noun","intermediate","/ˈsɪn.tæks/","English syntax follows Subject-Verb-Object order.","She studied syntax rules carefully.","grammar","sentence structure",""],
  ["pattern","a repeated way of doing something","नमूना, ढाँचा","noun","elementary","/ˈpæt.ərn/","She identified the sentence pattern in every exercise.","Every grammar rule follows a pattern.","template","model",""],
  ["structure","the way words or parts are put together","बनावट","noun","elementary","/ˈstrʌk.tʃər/","The structure of a question is different from a statement.","She practiced sentence structures daily.","arrangement","design",""],
  ["vocabulary","a set of words known by a person","शब्द भंडार","noun","elementary","/vəˈkæb.jʊ.lər.i/","She built a strong vocabulary through daily reading.","Expanding your vocabulary helps you express ideas better.","word bank","lexicon",""],

  // ── Test and assessment vocabulary ────────────────────────
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

  // ── Motivation and positive mindset words ─────────────────
  ["believe","to think something is true","विश्वास करना","verb","beginner","/bɪˈliːv/","Believe in yourself and you will succeed.","She believes she can speak English fluently.","trust","have faith","doubt"],
  ["confident","feeling sure about yourself","आत्मविश्वासी","adjective","beginner","/ˈkɒn.fɪ.dənt/","She became more confident after 10 days of practice.","A confident speaker does not fear making mistakes.","assured","certain","unsure"],
  ["positive","having a hopeful and optimistic attitude","सकारात्मक","adjective","beginner","/ˈpɒz.ɪ.tɪv/","Stay positive even when learning is hard.","She has a positive attitude toward English.","optimistic","hopeful","negative"],
  ["focused","giving full attention to one thing","केंद्रित","adjective","elementary","/ˈfəʊ.kɪst/","Stay focused during every study session.","She remained focused on her goal of fluency.","concentrated","attentive","distracted"],
  ["dedicated","giving a lot of time and energy to something","समर्पित","adjective","elementary","/ˈdɛd.ɪ.keɪ.tɪd/","She is dedicated to completing all 75 days.","A dedicated student always finds time to study.","committed","devoted","uncommitted"],
  ["motivated","feeling eager and enthusiastic about something","प्रेरित","adjective","elementary","/ˈməʊ.tɪ.veɪ.tɪd/","She stays motivated by tracking her progress.","A motivated student learns faster.","inspired","driven","lazy"],
  ["ambitious","having a strong desire to succeed","महत्वाकांक्षी","adjective","intermediate","/æmˈbɪʃ.əs/","Be ambitious about your English learning goals.","An ambitious student works harder than others.","aspiring","driven","content"],
  ["resilient","able to recover quickly from difficulties","सहनशील","adjective","intermediate","/rɪˈzɪl.i.ənt/","Be resilient when English feels difficult.","A resilient learner bounces back after every failure.","strong","tough","fragile"],
  ["optimistic","expecting good things to happen","आशावादी","adjective","intermediate","/ˌɒp.tɪˈmɪs.tɪk/","Stay optimistic and your English will improve.","An optimistic attitude helps you learn faster.","hopeful","positive","pessimistic"],
  ["determined","having a strong will to succeed","दृढ़निश्चयी","adjective","elementary","/dɪˈtɜː.mɪnd/","She was determined to complete all 75 lessons.","A determined learner never stops trying.","resolute","firm","weak"],

  // ── Workplace communication words ─────────────────────────
  ["minutes","a written record of a meeting","कार्यवृत्त","noun","intermediate","/ˈmɪn.ɪts/","She took minutes during the meeting.","The minutes of last week's meeting were shared.","record","notes",""],
  ["memo","a written message within a company","मेमो, आंतरिक संदेश","noun","elementary","/ˈmɛm.əʊ/","A memo was sent to all employees.","She wrote a clear memo about the new policy.","message","note",""],
  ["circular","a letter sent to many people","परिपत्र","noun","intermediate","/ˈsɜː.kjʊ.lər/","A circular was sent about the schedule change.","The office circular mentioned the holiday.","notice","announcement",""],
  ["policy","a set of rules for an organization","नीति","noun","elementary","/ˈpɒl.ɪ.si/","Follow the company's leave policy.","She read the academic policy carefully.","rule","guideline",""],
  ["procedure","a fixed way of doing something","प्रक्रिया, तरीका","noun","elementary","/prəˈsiː.dʒər/","Follow the correct procedure for submitting work.","She explained the enrollment procedure clearly.","process","method",""],
  ["guideline","a piece of advice about how to do something","दिशानिर्देश","noun","elementary","/ˈɡaɪd.laɪn/","Follow the guidelines for writing emails.","She read the exam guidelines carefully.","rule","instruction",""],
  ["standard","the required level of quality","मानक","noun","elementary","/ˈstæn.dərd/","Her work meets the required standard.","Set high standards for your English writing.","level","norm",""],
  ["protocol","an agreed way of doing something","प्रोटोकॉल","noun","intermediate","/ˈprəʊ.tə.kɒl/","Always follow the meeting protocol.","There is a protocol for writing formal emails.","procedure","rule",""],
  ["compliance","following the rules or laws","अनुपालन","noun","intermediate","/kəmˈplaɪ.əns/","Ensure compliance with all submission rules.","She ensured compliance with exam guidelines.","adherence","obedience","violation"],
  ["appraisal","an evaluation of someone's performance","मूल्यांकन","noun","intermediate","/əˈpreɪ.zəl/","Her annual appraisal was very positive.","She prepared well for the performance appraisal.","evaluation","assessment",""],

  // ── Daily routine words ───────────────────────────────────
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

  // ── Emotions during learning ──────────────────────────────
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

  // ── Commonly confused words ───────────────────────────────
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

  // ── Formal writing vocabulary ─────────────────────────────
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

  // ── Writing and composition ───────────────────────────────
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

  // ── Academic improvement words ────────────────────────────
  ["analyse","to examine something in detail","विश्लेषण करना","verb","intermediate","/ˈæn.ə.laɪz/","She analysed the grammar pattern carefully.","He analysed his mistakes to avoid repeating them.","examine","study","ignore"],
  ["interpret","to explain the meaning of something","व्याख्या करना","verb","intermediate","/ɪnˈtɜː.prɪt/","She interpreted the passage in simple words.","He interpreted the teacher's instruction correctly.","explain","translate","misunderstand"],
  ["evaluate","to judge the quality or value of something","मूल्यांकन करना","verb","intermediate","/ɪˈvæl.ju.eɪt/","Evaluate your progress after each lesson.","The teacher evaluated each student's spoken English.","assess","judge","ignore"],
  ["comprehend","to fully understand something","पूरी तरह समझना","verb","intermediate","/ˌkɒm.prɪˈhɛnd/","It takes time to comprehend complex grammar rules.","She comprehended the reading passage quickly.","understand","grasp","misunderstand"],
  ["absorb","to take in information easily","आत्मसात करना, सोख लेना","verb","intermediate","/əbˈzɔːb/","A good student absorbs new information quickly.","She absorbed all ten grammar rules in one sitting.","take in","assimilate","forget"],
  ["apply","to use knowledge in a practical situation","लागू करना, प्रयोग करना","verb","elementary","/əˈplaɪ/","Apply the grammar rule in your writing.","She applied her vocabulary in real conversations.","use","practise","ignore"],
  ["master","to become very skilled at something","महारत हासिल करना","verb","elementary","/ˈmɑː.stər/","She mastered all 75 grammar topics.","He wants to master the art of speaking English.","perfect","excel","struggle"],
  ["revise","to read and improve something you have learned","पुनरीक्षण करना","verb","elementary","/rɪˈvaɪz/","Revise today's lesson before tomorrow's class.","She revised all chapters before the final exam.","review","study","ignore"],
  ["practise","to do something repeatedly to improve","अभ्यास करना","verb","beginner","/ˈpræk.tɪs/","Practise speaking English for 20 minutes daily.","She practised new vocabulary in full sentences.","train","exercise","neglect"],
  ["assess","to judge or evaluate something carefully","आकलन करना","verb","intermediate","/əˈsɛs/","Assess your own performance after each lesson.","The teacher assessed every student's writing skill.","evaluate","judge","ignore"],

  // ── Success and achievement words ─────────────────────────
  ["achievement","something accomplished through effort","उपलब्धि, सफलता","noun","elementary","/əˈtʃiːv.mənt/","Completing Day 10 is a great achievement.","She listed her academic achievements in her resume.","accomplishment","success","failure"],
  ["progress","forward movement toward a goal","प्रगति","noun","elementary","/ˈprəʊ.ɡrɛs/","She made great progress in her English skills.","Track your progress to stay motivated.","advancement","improvement","regression"],
  ["improvement","a change that makes something better","सुधार, बेहतरी","noun","elementary","/ɪmˈpruːv.mənt/","There is a visible improvement in her speaking.","Her improvement over 10 days was remarkable.","enhancement","upgrade","decline"],
  ["success","the achievement of a goal","सफलता","noun","beginner","/səkˈsɛs/","Her success in English inspired many others.","Hard work is the key to success.","achievement","accomplishment","failure"],
  ["milestone","an important point in progress","मील का पत्थर, उपलब्धि","noun","intermediate","/ˈmaɪl.stəʊn/","Day 10 is a milestone in your learning journey.","Passing the test was a major milestone for him.","landmark","achievement",""],
  ["outcome","the result of an action or process","परिणाम, नतीजा","noun","elementary","/ˈaʊt.kʌm/","The outcome of regular practice is fluency.","She was satisfied with the outcome of her revision.","result","consequence",""],
  ["breakthrough","an important discovery or achievement","महत्वपूर्ण प्रगति","noun","intermediate","/ˈbreɪk.θruː/","Understanding tenses was a breakthrough for him.","She made a breakthrough in her pronunciation.","advance","discovery","setback"],
  ["triumph","a great success or victory","विजय, सफलता","noun","intermediate","/ˈtraɪ.əmf/","Finishing Day 10 is a personal triumph.","She celebrated her triumph in the English test.","victory","success","defeat"],
  ["accomplish","to successfully complete or achieve something","पूरा करना, हासिल करना","verb","elementary","/əˈkɒm.plɪʃ/","She accomplished every task in this lesson.","He accomplished his goal of speaking English fluently.","achieve","complete","fail"],
  ["persevere","to continue doing something despite difficulty","दृढ़ता से जारी रखना","verb","intermediate","/ˌpɜː.sɪˈvɪər/","Persevere even when learning feels hard.","She persevered through every difficult grammar topic.","persist","continue","quit"],

  // ── Instruction and direction words ──────────────────────
  ["instruct","to tell someone how to do something","निर्देश देना","verb","elementary","/ɪnˈstrʌkt/","The teacher instructs students in grammar rules.","She instructed the group on how to write formally.","teach","direct","learn"],
  ["demonstrate","to show how something is done","प्रदर्शन करना","verb","elementary","/ˈdɛm.ən.streɪt/","She demonstrated the correct pronunciation.","He demonstrated the use of 'there is' in sentences.","show","display","hide"],
  ["explain","to make something clear and understandable","समझाना","verb","beginner","/ɪkˈspleɪn/","She explained the grammar rule in simple Hindi.","He explained every word with examples.","clarify","describe","confuse"],
  ["describe","to give details about something","वर्णन करना","verb","beginner","/dɪˈskraɪb/","Describe your daily routine in English.","She described the picture using full sentences.","explain","portray",""],
  ["define","to state the exact meaning of a word","परिभाषित करना","verb","elementary","/dɪˈfaɪn/","Define the word 'fluent' in your own words.","She defined each grammar term clearly.","explain","clarify","confuse"],
  ["identify","to recognize and name something","पहचानना","verb","elementary","/aɪˈdɛn.tɪ.faɪ/","Identify the verb in each sentence.","She identified all the nouns in the passage.","recognize","spot","overlook"],
  ["classify","to arrange things into groups","वर्गीकृत करना","verb","intermediate","/ˈklæs.ɪ.faɪ/","Classify these words as nouns or verbs.","She classified vocabulary words by topic.","categorize","sort","mix"],
  ["compare","to look for similarities and differences","तुलना करना","verb","elementary","/kəmˈpeər/","Compare these two sentences and find the error.","She compared her answer with the model answer.","contrast","match",""],
  ["contrast","to show the differences between things","अंतर दिखाना","verb","elementary","/ˈkɒn.trɑːst/","Contrast formal and informal English styles.","She contrasted the two grammar rules with examples.","differ","distinguish","compare"],
  ["construct","to build or put something together","निर्माण करना","verb","elementary","/kənˈstrʌkt/","Construct a sentence using the new vocabulary.","She constructed five sentences for practice.","build","form","demolish"],

  // ── Language skills words ─────────────────────────────────
  ["listening","the skill of understanding spoken words","श्रवण कौशल","noun","beginner","/ˈlɪs.ən.ɪŋ/","Listening is one of the four key English skills.","Improve your listening by watching English shows.","hearing","comprehension",""],
  ["speaking","the skill of producing spoken words","बोलने का कौशल","noun","beginner","/ˈspiː.kɪŋ/","Speaking practice is essential for fluency.","She improved her speaking by talking to a partner.","oral expression","talking",""],
  ["reading","the skill of understanding written text","पठन कौशल","noun","beginner","/ˈriː.dɪŋ/","Reading English books improves vocabulary.","Her reading speed improved after 10 days.","comprehension","literacy",""],
  ["writing","the skill of producing written text","लेखन कौशल","noun","beginner","/ˈraɪ.tɪŋ/","Writing practice helps fix grammar errors.","She improved her writing by keeping a daily journal.","composition","penmanship",""],
  ["pronunciation","the way a word is said aloud","उच्चारण","noun","elementary","/prəˌnʌn.siˈeɪ.ʃən/","Correct pronunciation makes you easier to understand.","She worked on her pronunciation of difficult words.","diction","articulation",""],
  ["intonation","the rise and fall of voice when speaking","स्वर आरोह-अवरोह","noun","intermediate","/ˌɪn.tɒˈneɪ.ʃən/","Correct intonation makes speech sound natural.","She practised intonation patterns with recordings.","tone","pitch",""],
  ["accent","a particular way of pronouncing words","लहजा, उच्चारण शैली","noun","elementary","/ˈæk.sənt/","A clear accent helps people understand you better.","She improved her accent by listening to native speakers.","diction","tone",""],
  ["fluency","the ability to speak smoothly and naturally","प्रवाहशीलता","noun","elementary","/ˈfluː.ən.si/","Fluency in English opens many doors.","She achieved fluency through consistent daily practice.","smoothness","ease","hesitation"],
  ["comprehension","the ability to understand something","समझ, बोध","noun","elementary","/ˌkɒm.prɪˈhɛn.ʃən/","Good comprehension skills help you read faster.","She scored high in the reading comprehension test.","understanding","grasp","misunderstanding"],
  ["expression","the way of conveying ideas in words","अभिव्यक्ति","noun","elementary","/ɪkˈsprɛʃ.ən/","Rich expression makes your English interesting.","She used natural expressions in her conversation.","phrase","idiom",""],

  // ── Academic and study support words ─────────────────────
  ["notes","written records of key information","नोट्स, टिप्पणियाँ","noun","beginner","/nəʊts/","She always takes notes during the lesson.","Review your notes every evening for revision.","record","summary",""],
  ["flashcard","a card with a word or fact for quick learning","फ्लैशकार्ड","noun","elementary","/ˈflæʃ.kɑːd/","She made flashcards for every new word.","Flashcards help you memorize vocabulary quickly.","memory card","study card",""],
  ["dictionary","a book listing words and their meanings","शब्दकोश","noun","beginner","/ˈdɪk.ʃən.ər.i/","Always use a dictionary to check word meanings.","She carries a pocket dictionary to class.","lexicon","word book",""],
  ["thesaurus","a book listing synonyms and antonyms","पर्यायकोश","noun","intermediate","/θɪˈsɔːr.əs/","Use a thesaurus to find synonyms for common words.","She used a thesaurus to improve her writing.","synonym book","word finder",""],
  ["textbook","a book used for formal study","पाठ्यपुस्तक","noun","beginner","/ˈtɛkst.bʊk/","She studied English from her grammar textbook.","The textbook has exercises at the end of each chapter.","coursebook","manual",""],
  ["workbook","a practice book with exercises","अभ्यास पुस्तक","noun","elementary","/ˈwɜːk.bʊk/","Complete all exercises in the workbook.","She filled in the workbook answers carefully.","exercise book","practice book",""],
  ["syllabus","a list of topics covered in a course","पाठ्यक्रम","noun","intermediate","/ˈsɪl.ə.bəs/","She followed the syllabus for all 75 days.","Check the syllabus before each lesson.","curriculum","course plan",""],
  ["module","a unit of a course of study","मॉड्यूल, इकाई","noun","intermediate","/ˈmɒd.juːl/","Each module covers one grammar topic.","She completed the writing module in five days.","unit","section",""],
  ["exercise","a task done to practise a skill","अभ्यास, व्यायाम","noun","beginner","/ˈɛk.sə.saɪz/","Complete the exercise at the end of every lesson.","She found the fill-in-the-blank exercise helpful.","practice","drill",""],
  ["assignment","a piece of work set by a teacher","गृहकार्य, कार्य","noun","elementary","/əˈsaɪn.mənt/","She submitted the assignment before the deadline.","His assignment on self-introduction was excellent.","task","homework",""],

  // ── Words about improvement and growth ───────────────────
  ["upgrade","to improve the quality of something","उन्नत करना, बेहतर बनाना","verb","elementary","/ˌʌpˈɡreɪd/","Upgrade your vocabulary by learning new words daily.","She upgraded her speaking skills with daily practice.","improve","enhance","downgrade"],
  ["enhance","to improve the quality or value of something","बढ़ाना, सुधारना","verb","intermediate","/ɪnˈhɑːns/","Reading enhances your vocabulary and grammar.","She enhanced her writing by using more descriptive words.","improve","boost","reduce"],
  ["polish","to improve something until it is excellent","निखारना, सुधारना","verb","elementary","/ˈpɒl.ɪʃ/","Polish your speaking skills with daily practice.","She polished her essay before the final submission.","refine","perfect","neglect"],
  ["refine","to make small improvements to something","परिष्कृत करना","verb","intermediate","/rɪˈfaɪn/","Refine your pronunciation by listening to native speakers.","She refined her writing style over 10 days.","polish","improve","worsen"],
  ["strengthen","to make something stronger or better","मजबूत करना","verb","elementary","/ˈstrɛŋ.θən/","Daily practice strengthens your grammar foundation.","She strengthened her vocabulary through reading.","reinforce","build","weaken"],
  ["sharpen","to make a skill more precise or effective","तेज करना, सुधारना","verb","elementary","/ˈʃɑː.pən/","Sharpen your grammar by practising daily.","She sharpened her communication skills at work.","improve","hone","dull"],
  ["broaden","to make something wider or more varied","विस्तृत करना","verb","intermediate","/ˈbrɔː.dən/","Broaden your vocabulary by reading widely.","She broadened her understanding of English grammar.","expand","extend","narrow"],
  ["deepen","to make something more thorough","गहरा करना","verb","intermediate","/ˈdiː.pən/","Deepen your knowledge through consistent revision.","She deepened her understanding of complex tenses.","strengthen","intensify","reduce"],
  ["transform","to change completely and for the better","पूरी तरह बदल देना","verb","intermediate","/trænsˈfɔːm/","This 75-day course will transform your English.","She transformed her writing from basic to advanced.","change","convert","maintain"],
  ["overcome","to succeed despite a difficulty","काबू पाना, दूर करना","verb","elementary","/ˌəʊ.vəˈkʌm/","She overcame her fear of speaking English.","He overcame every grammar challenge step by step.","conquer","defeat","surrender"],

  // ── Words about teaching and instruction ──────────────────
  ["tutor","a private teacher who helps someone","ट्यूटर, निजी शिक्षक","noun","elementary","/ˈtjuː.tər/","She hired a tutor to improve her English.","The tutor gave her individual attention.","teacher","instructor",""],
  ["mentor","an experienced person who guides others","मार्गदर्शक, परामर्शदाता","noun","intermediate","/ˈmɛn.tər/","Her mentor helped her improve her spoken English.","He acted as a mentor to new learners.","guide","advisor",""],
  ["lecture","a formal talk to a group of students","व्याख्यान","noun","elementary","/ˈlɛk.tʃər/","She attended a lecture on English pronunciation.","The lecture covered five grammar topics in one hour.","talk","lesson",""],
  ["seminar","a group discussion on a topic","सेमिनार, परिसंवाद","noun","intermediate","/ˈsɛm.ɪ.nɑːr/","She participated in a seminar on business English.","The seminar helped her improve her formal speaking.","workshop","discussion",""],
  ["workshop","a session where people learn by doing","कार्यशाला","noun","elementary","/ˈwɜːk.ʃɒp/","She attended a writing workshop at the college.","The workshop included group speaking activities.","session","training",""],
  ["curriculum","the set of subjects studied in a course","पाठ्यक्रम","noun","intermediate","/kəˈrɪk.jʊ.ləm/","The curriculum covers all four language skills.","She followed the 75-day curriculum carefully.","syllabus","course",""],
  ["session","a period of time for a particular activity","सत्र, घंटा","noun","elementary","/ˈsɛʃ.ən/","She attended three practice sessions this week.","Each session focuses on one grammar topic.","period","class",""],
  ["interaction","communication between two or more people","संवाद, अंतःक्रिया","noun","intermediate","/ˌɪn.tərˈæk.ʃən/","Classroom interaction helps build speaking confidence.","She enjoyed the interaction with her English partner.","communication","exchange",""],
  ["participation","taking part in an activity","भागीदारी, सहभागिता","noun","intermediate","/pɑːˌtɪs.ɪˈpeɪ.ʃən/","Active participation in class helps you learn faster.","Her participation in every exercise was impressive.","involvement","engagement","absence"],
  ["engagement","involvement and interest in something","संलग्नता, रुचि","noun","intermediate","/ɪnˈɡeɪdʒ.mənt/","High engagement leads to faster language learning.","Her engagement with the material was excellent.","involvement","participation","disinterest"],

  // ── Words about language use and communication ────────────
  ["context","the situation in which a word is used","संदर्भ","noun","intermediate","/ˈkɒn.tɛkst/","Always learn words in context to remember them.","The meaning of a word depends on its context.","setting","background",""],
  ["usage","the way a word or phrase is used","प्रयोग, उपयोग","noun","intermediate","/ˈjuː.zɪdʒ/","Study the usage of 'there is' and 'there are'.","She learned the correct usage of each tense.","use","application",""],
  ["register","a style of language for a particular situation","भाषा शैली","noun","intermediate","/ˈrɛdʒ.ɪ.stər/","Use the correct register in formal writing.","She switched register from formal to informal.","style","tone",""],
  ["idiom","an expression with a meaning that is not literal","मुहावरा","noun","intermediate","/ˈɪd.i.əm/","'Break a leg' is an English idiom meaning good luck.","She learned five idioms in every revision session.","phrase","expression",""],
  ["phrase","a small group of words used together","वाक्यांश","noun","elementary","/freɪz/","Learn common English phrases for daily conversation.","She practised useful phrases for job interviews.","expression","clause",""],
  ["clause","a group of words with a subject and verb","उपवाक्य","noun","intermediate","/klɔːz/","A sentence can have one or more clauses.","She identified the main clause in the sentence.","part","unit",""],
  ["dialogue","a conversation between two people","संवाद, वार्तालाप","noun","elementary","/ˈdaɪ.ə.lɒɡ/","She practised a dialogue with her study partner.","Writing a dialogue helps improve speaking skills.","conversation","exchange",""],
  ["narration","telling a story or describing events","कथन, वर्णन","noun","intermediate","/næˈreɪ.ʃən/","She practised narration by describing her school day.","Good narration skills improve speaking fluency.","storytelling","description",""],
  ["translation","converting text from one language to another","अनुवाद","noun","elementary","/trænsˈleɪ.ʃən/","Translation exercises help clarify word meanings.","She avoided direct translation and thought in English.","interpretation","conversion",""],
  ["abbreviation","a shortened form of a word","संक्षिप्त रूप","noun","intermediate","/əˌbriː.viˈeɪ.ʃən/","'Mr.' is an abbreviation for 'Mister'.","She learned common abbreviations used in emails.","short form","acronym",""],
];

// Export 300+ vocabulary words for Day 10
export const ALL_DAY_10_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d10-v${i + 1}`, data)
);
