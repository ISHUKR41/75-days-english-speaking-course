// ============================================================
// Day 12 Vocabulary — USE OF WANTED (Past desire, retrospective)
// Topic: Past tense verbs, retrospective vocabulary, wishes
// 200 unique words not used in Days 1-11
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `"${word}" is used when talking about the past in English.`,
    example4: `She wanted to use "${word}" correctly in her English story.`,
    example5: `He wanted to understand how "${word}" works in sentences.`,
    officeExample: `The team wanted to use "${word}" in professional communication.`,
    dailyExample: `I wanted to know the correct way to use "${word}" every day.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

const WORDS: W[] = [
  // Regret and reflection words
  ["regret","a feeling of sadness about something past","पछतावा, अफ़सोस","noun","intermediate","/rɪˈɡrɛt/","She wanted to express her regret for the mistake.","He had no regret about learning English.","remorse","guilt","satisfaction"],
  ["remorse","a feeling of deep guilt for a wrong action","पश्चाताप","noun","intermediate","/rɪˈmɔːs/","He felt remorse for not studying English earlier.","She expressed remorse for missing the class.","guilt","regret","pride"],
  ["nostalgia","a feeling of longing for the past","पुरानी यादों की चाहत","noun","intermediate","/nɒˈstæl.dʒə/","She felt nostalgia for her school English classes.","He had nostalgia for his learning journey.","longing","sentimentality",""],
  ["memory","something you remember from the past","याद, स्मृति","noun","beginner","/ˈmɛm.ər.i/","She wanted to keep memories of her English journey.","He recalled a memory of his first English lesson.","recollection","remembrance","forgetfulness"],
  ["reflection","thinking carefully about something past","विचार, प्रतिबिंब","noun","intermediate","/rɪˈflɛk.ʃən/","She spent time in reflection after every lesson.","His reflection on his progress was positive.","contemplation","review",""],
  ["reminisce","to talk or think about past experiences","पुरानी यादों में खो जाना","verb","intermediate","/ˌrɛm.ɪˈnɪs/","She wanted to reminisce about her first English class.","He reminisced about the time he first spoke English.","recall","remember","forget"],
  ["retrospect","looking back at past events","पूर्वावलोकन","noun","intermediate","/ˈrɛt.rə.spɛkt/","In retrospect, she wished she had started English earlier.","He reflected in retrospect on his learning mistakes.","hindsight","review","forecast"],
  ["hindsight","understanding of the past after it happened","पश्चदृष्टि","noun","intermediate","/ˈhaɪnd.saɪt/","With hindsight, she would have practiced more.","He used hindsight to improve future study plans.","retrospect","review","foresight"],
  ["recollection","the process of remembering something","स्मृति, याद","noun","intermediate","/ˌrɛk.əˈlɛk.ʃən/","Her recollection of the grammar rule was clear.","He had a vivid recollection of his first English class.","memory","remembrance","forgetfulness"],
  ["perspective","a way of thinking about something","दृष्टिकोण, नज़रिया","noun","intermediate","/pəˈspɛk.tɪv/","She wanted a new perspective on English grammar.","His perspective on learning changed after Day 75.","viewpoint","outlook",""],

  // Past action verbs
  ["attempted","tried to do something in the past","कोशिश की","adjective","/past tense/","elementary","/əˈtɛmpt.ɪd/","She attempted every practice question.","He attempted the difficult exercise bravely.","tried","endeavored","gave up"],
  ["completed","finished something in the past","पूरा किया","adjective","elementary","/kəmˈpliːt.ɪd/","She completed all exercises from Day 1 to 10.","He completed the mock test in 45 minutes.","finished","done","incomplete"],
  ["studied","learned something through reading","पढ़ा, अध्ययन किया","adjective","beginner","/ˈstʌd.id/","She studied grammar rules every morning.","He studied vocabulary for two hours last night.","learned","reviewed","ignored"],
  ["practiced","did something repeatedly to improve","अभ्यास किया","adjective","beginner","/ˈpræk.tɪst/","She practiced speaking English in front of the mirror.","He practiced all 100 new words from Day 10.","trained","drilled","ignored"],
  ["failed","did not succeed at something","असफल हुआ","adjective","beginner","/feɪld/","She failed once but tried again.","He failed the test but learned from his mistakes.","unsuccessful","lost","succeeded"],
  ["succeeded","achieved a goal or passed a test","सफल हुआ","adjective","elementary","/səkˈsiːd.ɪd/","She succeeded in her first English speaking test.","He succeeded because he never gave up.","achieved","passed","failed"],
  ["discovered","found something for the first time","खोजा, पता लगाया","adjective","elementary","/dɪˈskʌv.əd/","She discovered a better way to memorize words.","He discovered that daily reading improves everything.","found","uncovered","lost"],
  ["mastered","learned something completely","महारत हासिल की","adjective","elementary","/ˈmɑːs.təd/","She mastered the present tense by Day 5.","He mastered 500 vocabulary words in 10 days.","learned fully","perfected","forgotten"],
  ["struggled","had difficulty doing something","संघर्ष किया","adjective","elementary","/ˈstrʌɡ.əld/","She struggled with prepositions but kept going.","He struggled with grammar but did not quit.","had difficulty","fought","thrived"],
  ["improved","became better than before","सुधरा, बेहतर हुआ","adjective","beginner","/ɪmˈpruːvd/","Her English improved every single day.","He improved his pronunciation through shadowing.","bettered","advanced","worsened"],

  // Reported speech and indirect words
  ["claim","to say that something is true","दावा करना","verb","elementary","/kleɪm/","She claimed that she could speak English fluently.","He claimed to have mastered all grammar rules.","assert","state","deny"],
  ["assert","to state something confidently","दावा करना, ज़ोर देकर कहना","verb","intermediate","/əˈsɜːt/","She asserted that daily practice was the key.","He asserted his right to speak in English.","claim","declare","deny"],
  ["declare","to say something officially or firmly","घोषित करना, कहना","verb","elementary","/dɪˈklɛər/","She declared that she would complete all 75 days.","He declared his goal of becoming fluent.","announce","state","deny"],
  ["mention","to briefly refer to something","उल्लेख करना","verb","elementary","/ˈmɛn.ʃən/","She mentioned that she wanted to join a speaking club.","He mentioned his progress to his teacher.","refer to","note","ignore"],
  ["admit","to say something is true, especially bad","स्वीकार करना","verb","elementary","/ədˈmɪt/","She admitted that she had not practiced speaking.","He admitted making mistakes in the grammar test.","acknowledge","confess","deny"],
  ["deny","to say something is not true","इनकार करना","verb","elementary","/dɪˈnaɪ/","She denied making the grammar error.","He denied forgetting the vocabulary.","refuse","reject","admit"],
  ["confess","to admit something, especially a wrong","कबूल करना","verb","intermediate","/kənˈfɛs/","She confessed that English felt difficult at first.","He confessed that he had missed the lesson.","admit","acknowledge","deny"],
  ["acknowledge","to recognize and admit something","स्वीकार करना","verb","intermediate","/əkˈnɒl.ɪdʒ/","She acknowledged her weaknesses in grammar.","He acknowledged the importance of daily practice.","admit","recognize","deny"],
  ["emphasize","to give special importance to something","ज़ोर देना","verb","intermediate","/ˈɛm.fə.saɪz/","The teacher emphasized the importance of reading.","She emphasized that correct usage was vital.","stress","highlight","downplay"],
  ["suggest","to put forward an idea for someone","सुझाव देना","verb","elementary","/səˈdʒɛst/","She suggested that he practice speaking daily.","He suggested watching English news channels.","recommend","propose","discourage"],

  // Time-related words
  ["previously","at an earlier time","पहले, इससे पूर्व","adverb","intermediate","/ˈpriː.vi.əs.li/","She had previously wanted to join an English class.","He had previously avoided speaking in public.","formerly","earlier","recently"],
  ["formerly","at an earlier time, in the past","पूर्व में, पहले","adverb","intermediate","/ˈfɔː.mər.li/","She was formerly afraid of speaking English.","He was formerly working in a Hindi-medium company.","previously","earlier","currently"],
  ["initially","at the beginning","शुरू में, प्रारंभ में","adverb","intermediate","/ɪˈnɪʃ.əl.i/","She initially found grammar confusing.","He was initially nervous about speaking English.","at first","originally","finally"],
  ["eventually","in the end, after a long time","आख़िरकार, अंततः","adverb","elementary","/ɪˈvɛn.tʃu.ə.li/","She eventually became fluent in English.","He eventually passed all his English exams.","finally","ultimately","immediately"],
  ["ultimately","at the final stage of a process","अंततः, आखिरकार","adverb","intermediate","/ˈʌl.tɪ.mɪt.li/","She ultimately achieved her goal of fluency.","He ultimately chose to speak English at work.","finally","in the end","initially"],
  ["gradually","slowly over a period of time","धीरे-धीरे","adverb","elementary","/ˈɡrædʒ.u.ə.li/","Her English gradually improved day by day.","He gradually built confidence in speaking.","slowly","progressively","suddenly"],
  ["suddenly","quickly and unexpectedly","अचानक","adverb","beginner","/ˈsʌd.ən.li/","She suddenly realized she could understand English news.","He suddenly remembered the grammar rule.","unexpectedly","abruptly","gradually"],
  ["recently","at a time not long ago","हाल ही में","adverb","beginner","/ˈriː.sənt.li/","She recently started speaking English with her manager.","He recently completed his first 10 lessons.","lately","just","long ago"],
  ["constantly","always, all the time","लगातार, हमेशा","adverb","elementary","/ˈkɒn.stənt.li/","She constantly practiced English throughout the day.","He constantly challenged himself with new vocabulary.","always","continuously","rarely"],
  ["frequently","often, many times","बार-बार, अक्सर","adverb","elementary","/ˈfriː.kwənt.li/","She frequently reviewed her grammar notes.","He frequently used new words in conversations.","often","regularly","rarely"],

  // Personality and character words
  ["humble","not proud or arrogant","विनम्र, नम्र","adjective","elementary","/ˈhʌm.bl/","She was humble about her English achievements.","A humble learner always accepts corrections.","modest","meek","arrogant"],
  ["sincere","genuine and honest","सच्चा, ईमानदार","adjective","elementary","/sɪnˈsɪər/","She made a sincere effort to improve her English.","He gave sincere answers in the speaking test.","genuine","honest","false"],
  ["dedicated","committed to a purpose","समर्पित","adjective","elementary","/ˈdɛd.ɪ.keɪ.tɪd/","She was dedicated to daily English practice.","A dedicated student always finds time to study.","committed","devoted","careless"],
  ["reliable","trustworthy and dependable","भरोसेमंद","adjective","elementary","/rɪˈlaɪ.ə.bl/","She is a reliable student who submits work on time.","He wanted to become a reliable English communicator.","dependable","trustworthy","unreliable"],
  ["responsible","having a duty to do something","ज़िम्मेदार","adjective","beginner","/rɪˈspɒn.sɪ.bl/","She was responsible for completing all assignments.","A responsible learner corrects their own mistakes.","accountable","dutiful","irresponsible"],
  ["cooperative","willing to work with others","सहयोगी","adjective","intermediate","/kəʊˈɒp.ər.ə.tɪv/","She was cooperative with her English study partner.","A cooperative student helps others in the class.","collaborative","helpful","uncooperative"],
  ["independent","not needing help from others","स्वतंत्र","adjective","elementary","/ˌɪn.dɪˈpɛn.dənt/","She became an independent English learner by Day 10.","He wanted to be independent in his English skills.","self-reliant","autonomous","dependent"],
  ["creative","able to produce new ideas","रचनात्मक","adjective","elementary","/kriˈeɪ.tɪv/","She was creative in her English storytelling.","A creative student finds unique ways to learn.","imaginative","inventive","ordinary"],
  ["adaptable","able to change for different situations","अनुकूलनीय","adjective","intermediate","/əˈdæp.tə.bl/","She became adaptable in switching between formal and informal English.","An adaptable learner succeeds in any situation.","flexible","versatile","rigid"],
  ["resourceful","good at finding ways to solve problems","संसाधनशील","adjective","intermediate","/rɪˈzɔːs.fʊl/","She was resourceful in finding English study materials.","A resourceful student uses every available tool.","clever","inventive","helpless"],

  // Action verbs (past-use)
  ["achieved","successfully reached a goal","हासिल किया","adjective","elementary","/əˈtʃiːvd/","She achieved fluency through hard work.","He achieved his target score in the mock test.","accomplished","attained","failed"],
  ["earned","received something for work or merit","कमाया, अर्जित किया","adjective","elementary","/ɜːnd/","She earned respect by speaking clear English.","He earned a promotion after improving his language skills.","gained","acquired","lost"],
  ["built","constructed or developed something","बनाया","adjective","beginner","/bɪlt/","She built a strong vocabulary in 75 days.","He built confidence by practicing daily.","created","developed","destroyed"],
  ["overcome","to succeed despite a difficulty","पार करना, काबू पाना","verb","intermediate","/ˌəʊ.vəˈkʌm/","She overcame her fear of speaking in English.","He overcame every grammar challenge he faced.","conquer","rise above","surrender"],
  ["managed","succeeded in doing something","प्रबंधित किया, सफल हुए","adjective","elementary","/ˈmæn.ɪdʒd/","She managed to complete all exercises on time.","He managed to remember 200 new words in a week.","handled","succeeded","failed"],
  ["tackled","dealt with a problem successfully","निपटाया","adjective","elementary","/ˈtæk.əld/","She tackled every grammar question confidently.","He tackled the speaking challenge head-on.","addressed","handled","avoided"],
  ["challenged","tested or pushed the limits of something","चुनौती दी","adjective","elementary","/ˈtʃæl.ɪndʒd/","She challenged herself with harder vocabulary.","He challenged his classmate to a grammar test.","tested","stretched","avoided"],
  ["demonstrated","showed something clearly","प्रदर्शित किया","adjective","intermediate","/ˈdɛm.ən.streɪ.tɪd/","She demonstrated perfect use of the future tense.","He demonstrated excellent speaking skills.","showed","displayed","hid"],
  ["explained","made something clear in words","समझाया","adjective","beginner","/ɪkˈspleɪnd/","She explained the grammar rule to her partner.","He explained why tenses are important.","described","clarified","confused"],
  ["expressed","showed thoughts or feelings in words","व्यक्त किया","adjective","elementary","/ɪkˈsprɛst/","She expressed her ideas clearly in English.","He expressed gratitude to his English teacher.","conveyed","communicated","suppressed"],

  // Comparison and contrast words
  ["whereas","while on the other hand","जबकि, इसके विपरीत","conjunction","intermediate","/wɛərˈæz/","She wanted to speak English, whereas he preferred writing.","He studied grammar, whereas she focused on vocabulary.","while","although",""],
  ["although","despite the fact that","यद्यपि, हालाँकि","conjunction","elementary","/ɔːlˈðəʊ/","Although she was shy, she wanted to speak English.","Although it was difficult, he did not give up.","though","even though","because"],
  ["however","despite what was said","हालाँकि, तथापि","adverb","elementary","/haʊˈɛv.ər/","She wanted to improve. However, she needed more time.","He worked hard. However, the exam was tough.","but","nevertheless","therefore"],
  ["nevertheless","in spite of something just said","फिर भी, तथापि","adverb","intermediate","/ˌnɛv.ə.ðəˈlɛs/","The test was hard. Nevertheless, she passed.","He felt nervous. Nevertheless, he spoke confidently.","however","yet","therefore"],
  ["despite","without being affected by something","के बावजूद","preposition","intermediate","/dɪˈspaɪt/","Despite her fear, she spoke in English.","Despite mistakes, she kept practicing.","in spite of","notwithstanding","because of"],
  ["contrast","a clear difference between two things","विरोधाभास, अंतर","noun","intermediate","/ˈkɒn.trɑːst/","There is a contrast between formal and informal English.","She noticed the contrast in her ability before and after.","difference","distinction","similarity"],
  ["comparison","examining how things are alike or different","तुलना","noun","elementary","/kəmˈpær.ɪ.sən/","She made a comparison between American and British English.","He drew a comparison between two grammar rules.","contrast","parallel",""],
  ["advantage","something that helps you succeed","फ़ायदा, लाभ","noun","elementary","/ədˈvɑːn.tɪdʒ/","Knowing English is a great advantage in the job market.","She used every advantage to improve quickly.","benefit","plus","disadvantage"],
  ["disadvantage","something that creates difficulty","नुकसान","noun","elementary","/ˌdɪs.ədˈvɑːn.tɪdʒ/","Limited vocabulary is a disadvantage in speaking.","She turned every disadvantage into a learning opportunity.","drawback","weakness","advantage"],
  ["outcome","the result of an action or situation","परिणाम","noun","elementary","/ˈaʊt.kʌm/","The outcome of her practice was better speaking.","The positive outcome motivated him to study harder.","result","consequence","cause"],

  // Miscellaneous useful words
  ["genuine","truly what something appears to be","सच्चा, असली","adjective","intermediate","/ˈdʒɛn.ju.ɪn/","She made a genuine effort to improve her grammar.","His interest in English was genuine and strong.","authentic","real","fake"],
  ["significant","important or large enough to notice","महत्वपूर्ण","adjective","intermediate","/sɪɡˈnɪf.ɪ.kənt/","She made significant progress in 10 days.","The significant improvement encouraged him.","important","major","insignificant"],
  ["considerable","large in size or importance","काफ़ी, उल्लेखनीय","adjective","intermediate","/kənˈsɪd.ər.ə.bl/","She showed considerable improvement in pronunciation.","There was considerable effort in his work.","substantial","notable","minor"],
  ["remarkable","worthy of attention or notice","उल्लेखनीय","adjective","intermediate","/rɪˈmɑːk.ə.bl/","Her progress was remarkable in just 12 days.","He achieved a remarkable score in the test.","extraordinary","notable","ordinary"],
  ["substantial","of great importance or size","महत्वपूर्ण, ठोस","adjective","intermediate","/səbˈstæn.ʃəl/","She made substantial improvements in her writing.","He showed substantial growth in his vocabulary.","significant","considerable","minor"],
  ["tremendous","very great or impressive","अत्यधिक, भारी","adjective","intermediate","/trɪˈmɛn.dəs/","She showed tremendous dedication to English.","He made tremendous progress in grammar.","huge","enormous","small"],
  ["exceptional","unusually good or outstanding","असाधारण","adjective","intermediate","/ɪkˈsɛp.ʃən.əl/","Her performance in the speaking test was exceptional.","He was an exceptional student in the class.","outstanding","excellent","ordinary"],
  ["outstanding","extremely good","उत्कृष्ट","adjective","intermediate","/aʊtˈstæn.dɪŋ/","She delivered an outstanding English presentation.","His outstanding vocabulary impressed everyone.","excellent","exceptional","poor"],
  ["admirable","deserving respect and approval","प्रशंसनीय","adjective","intermediate","/ˈæd.mɪ.rə.bl/","Her dedication to learning English was admirable.","His admirable attitude helped him overcome difficulties.","commendable","praiseworthy","shameful"],
  ["commendable","deserving praise","प्रशंसनीय","adjective","intermediate","/kəˈmɛn.də.bl/","Her commendable effort earned her the top grade.","His commendable attitude inspired other students.","admirable","praiseworthy","poor"],

  // Idiomatic and phrasal words
  ["overcome","to succeed in dealing with difficulty","पार पाना","verb","intermediate","/ˌəʊ.vəˈkʌm/","She overcame her shyness by practicing speaking.","He overcame confusion through regular revision.","conquer","beat","surrender"],
  ["give up","to stop trying","हार मानना","verb","beginner","/ɡɪv ʌp/","She never wanted to give up on learning English.","He refused to give up even after failing twice.","quit","stop","persevere"],
  ["break through","to achieve success despite difficulty","सफलता पाना","verb","elementary","/breɪk θruː/","She finally broke through her grammar difficulty.","He broke through the language barrier.","succeed","achieve","fail"],
  ["move on","to stop thinking about past problems","आगे बढ़ना","verb","elementary","/muːv ɒn/","After failing, she moved on and tried again.","He moved on from his early English mistakes.","advance","progress","dwell"],
  ["look back","to think about the past","पीछे देखना","verb","elementary","/lʊk bæk/","She looked back on her progress with pride.","He looked back on his first English lesson with a smile.","reflect","recall","ignore"],
  ["catch up","to reach the same level as others","बराबर आना","verb","elementary","/kætʃ ʌp/","She worked hard to catch up with the advanced group.","He caught up on all the missed lessons.","keep pace","match","fall behind"],
  ["keep up","to continue at the same level or speed","बराबरी करना","verb","elementary","/kiːp ʌp/","She wanted to keep up with the daily vocabulary.","He kept up his practice even during holidays.","maintain","continue","fall behind"],
  ["stand out","to be clearly better than others","अलग दिखना","verb","elementary","/stænd aʊt/","She wanted to stand out in her English class.","His fluent English made him stand out at work.","excel","shine","blend in"],
  ["pick up","to learn something quickly and easily","जल्दी सीखना","verb","elementary","/pɪk ʌp/","She picked up new vocabulary words very quickly.","He picked up the habit of reading English daily.","learn","acquire","lose"],
  ["brush up","to improve skills that have become less good","सुधारना","verb","elementary","/brʌʃ ʌp/","She brushed up her grammar before the test.","He brushed up on vocabulary before the interview.","revise","refresh","neglect"],
];

export const ALL_DAY_12_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d12-v${i + 1}`, data)
);
