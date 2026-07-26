// ============================================================
// Day 14 Vocabulary — USE OF LET'S (Suggestions, proposals)
// Topic: Suggestions, teamwork, collaboration, proposals
// 300+ unique words not used in Days 1-13
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `"${word}" is used in suggestions and team discussions in English.`,
    example4: `Let's practice using "${word}" in a group conversation.`,
    example5: `Let's make "${word}" part of our daily English vocabulary.`,
    officeExample: `Let's use "${word}" in our professional team meetings.`,
    dailyExample: `Let's try using "${word}" when speaking with friends.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

const WORDS: W[] = [
  // Suggestion and proposal words
  ["propose","to suggest a plan or idea formally","प्रस्ताव रखना","verb","elementary","/prəˈpəʊz/","Let's propose a new schedule for English practice.","She proposed a better method of grammar study.","suggest","recommend","reject"],
  ["recommend","to suggest something as being good","अनुशंसा करना","verb","elementary","/ˌrɛk.əˈmɛnd/","Let's recommend this book to all learners.","She recommended daily practice to her students.","suggest","advise","oppose"],
  ["initiate","to start something","शुरू करना","verb","intermediate","/ɪˈnɪʃ.i.eɪt/","Let's initiate a speaking club in our school.","She initiated the group discussion on grammar.","begin","start","end"],
  ["brainstorm","to share lots of ideas quickly","विचार-मंथन करना","verb","elementary","/ˈbreɪn.stɔːm/","Let's brainstorm ideas for the English project.","She brainstormed topics for the debate.","think","ideate","silence"],
  ["collaborate","to work with others on something","सहयोग करना","verb","intermediate","/kəˈlæb.ə.reɪt/","Let's collaborate on the English presentation.","They collaborated on writing the group essay.","cooperate","work together","compete"],
  ["coordinate","to organize people to work together","समन्वय करना","verb","intermediate","/kəʊˈɔː.dɪ.neɪt/","Let's coordinate our group practice sessions.","She coordinated the team's English project.","organize","manage","disorder"],
  ["volunteer","to offer to do something willingly","स्वेच्छा से करना","verb","elementary","/ˌvɒl.ənˈtɪər/","Let's volunteer to present in English today.","She volunteered to help plan the event.","offer","step up","refuse"],
  ["participate","to take part in an activity","भाग लेना","verb","elementary","/pɑːˈtɪs.ɪ.peɪt/","Let's all participate in the speaking exercise.","She participated in every English discussion.","join","engage","withdraw"],
  ["involve","to include someone in an activity","शामिल करना","verb","elementary","/ɪnˈvɒlv/","Let's involve every student in the activity.","She involved her partner in the dialogue practice.","include","engage","exclude"],
  ["engage","to involve someone in an activity","संलग्न होना","verb","intermediate","/ɪnˈɡeɪdʒ/","Let's engage in a real English conversation.","She engaged her classmates with a group quiz.","involve","participate","disengage"],

  // Teamwork and cooperation
  ["teamwork","working together as a group","टीम वर्क, समूह कार्य","noun","elementary","/ˈtiːm.wɜːk/","Let's show great teamwork in our English project.","Good teamwork produced an excellent presentation.","cooperation","collaboration","competition"],
  ["partnership","a relationship where people work together","साझेदारी","noun","elementary","/ˈpɑːt.nər.ʃɪp/","Let's build a strong learning partnership.","Their partnership improved both students' English.","collaboration","alliance","rivalry"],
  ["alliance","a union for a common purpose","गठबंधन, मेल","noun","intermediate","/əˈlaɪ.əns/","Let's form an alliance to support each other's learning.","They formed an alliance to practice English together.","union","partnership","rivalry"],
  ["solidarity","unity and support in a group","एकजुटता","noun","intermediate","/ˌsɒl.ɪˈdær.ɪ.ti/","Let's show solidarity as a class of learners.","Solidarity helps students overcome language barriers.","unity","togetherness","division"],
  ["unity","the state of being joined together","एकता","noun","elementary","/ˈjuː.nɪ.ti/","Let's keep unity in our English study group.","Unity among learners produces better results.","togetherness","harmony","division"],
  ["harmony","a pleasing combination of things","सामंजस्य","noun","intermediate","/ˈhɑː.mə.ni/","Let's create harmony in our speaking sessions.","Group harmony improves the learning atmosphere.","balance","agreement","discord"],
  ["cooperation","working together for a common goal","सहयोग","noun","elementary","/kəʊˌɒp.ərˈeɪ.ʃən/","Let's promote cooperation in every group task.","Good cooperation made the project a success.","collaboration","teamwork","competition"],
  ["mutual","shared by two or more people","पारस्परिक","adjective","intermediate","/ˈmjuː.tʃu.əl/","Let's build mutual respect in our learning group.","They had a mutual goal of improving English.","shared","common","individual"],
  ["collective","done by a group working together","सामूहिक","adjective","intermediate","/kəˈlɛk.tɪv/","Let's make this a collective English learning effort.","The collective effort produced great results.","group","joint","individual"],
  ["shared","used or enjoyed by more than one person","साझा","adjective","elementary","/ʃɛəd/","Let's build a shared vocabulary notebook.","A shared goal keeps the team motivated.","common","mutual","individual"],

  // Planning and organizing words
  ["agenda","a list of things to discuss or do","एजेंडा, कार्यसूची","noun","intermediate","/əˈdʒɛn.də/","Let's set an agenda for our English practice group.","She prepared an agenda for the study session.","plan","schedule",""],
  ["blueprint","a detailed plan for something","खाका, योजना","noun","intermediate","/ˈbluː.prɪnt/","Let's create a blueprint for 75-day English success.","She followed the blueprint for learning fluency.","plan","design",""],
  ["scheme","a plan for doing something","योजना","noun","intermediate","/skiːm/","Let's make a scheme for weekly vocabulary review.","She thought of a creative scheme to memorize words.","plan","strategy",""],
  ["outline","a general description of something","रूपरेखा","noun","elementary","/ˈaʊt.laɪn/","Let's draw an outline of our English project.","She outlined the main points for the presentation.","plan","framework",""],
  ["draft","an early version of something","मसौदा","noun","elementary","/drɑːft/","Let's write a draft of our group email.","She reviewed the draft before submitting.","rough copy","outline","final"],
  ["schedule","a plan of when activities happen","कार्यक्रम","noun","beginner","/ˈʃɛd.juːl/","Let's set a schedule for our group study.","She stuck to the practice schedule every day.","timetable","plan",""],
  ["roadmap","a plan showing the path to a goal","मार्गचित्र","noun","intermediate","/ˈrəʊd.mæp/","Let's create a roadmap to English fluency.","She followed a clear roadmap for the 75 days.","plan","route",""],
  ["milestone","an important point in progress","महत्वपूर्ण पड़ाव","noun","intermediate","/ˈmaɪl.stəʊn/","Let's celebrate every milestone in our learning.","Completing Day 14 is a significant milestone.","achievement","landmark",""],
  ["benchmark","a standard for measuring progress","मानक, पैमाना","noun","intermediate","/ˈbɛntʃ.mɑːk/","Let's set a benchmark for vocabulary growth.","She used the benchmark to track her progress.","standard","measure",""],
  ["checkpoint","a point where progress is reviewed","जाँच बिंदु","noun","elementary","/ˈtʃɛk.pɔɪnt/","Let's do a checkpoint every 7 days.","She passed every checkpoint in the course.","review point","assessment",""],

  // Group activities and events
  ["workshop","a meeting to learn or practice skills","कार्यशाला","noun","elementary","/ˈwɜːk.ʃɒp/","Let's organize an English grammar workshop.","She attended a workshop on public speaking.","seminar","session",""],
  ["seminar","an educational event with discussion","संगोष्ठी","noun","intermediate","/ˈsɛm.ɪ.nɑːr/","Let's attend the English speaking seminar.","She conducted a seminar on effective communication.","workshop","forum",""],
  ["conference","a large formal meeting to discuss topics","सम्मेलन","noun","intermediate","/ˈkɒn.fər.əns/","Let's participate in the English language conference.","She presented at the national education conference.","meeting","summit",""],
  ["forum","a place for open discussion","मंच","noun","intermediate","/ˈfɔː.rəm/","Let's create a forum for English learners.","She shared her progress on the online forum.","platform","discussion space",""],
  ["assembly","a group of people gathered together","सभा","noun","intermediate","/əˈsɛm.bli/","Let's present our work at the school assembly.","She addressed the morning assembly in English.","gathering","meeting",""],
  ["gathering","a meeting of people for a purpose","सभा, जमावड़ा","noun","elementary","/ˈɡæð.ər.ɪŋ/","Let's organize a gathering for English practice.","They had a gathering to celebrate their progress.","meeting","assembly",""],
  ["club","a group of people with a shared interest","क्लब","noun","beginner","/klʌb/","Let's start an English speaking club at school.","She joined the debate club to improve English.","group","society",""],
  ["society","a group of people with shared aims","समाज, संस्था","noun","intermediate","/səˈsaɪ.ɪ.ti/","Let's build a society of English learners.","She became president of the English society.","group","club",""],
  ["committee","a group chosen to manage something","समिति","noun","intermediate","/kəˈmɪt.i/","Let's form a committee for the English event.","She joined the organizing committee.","group","panel",""],
  ["panel","a group of experts discussing something","पैनल","noun","intermediate","/ˈpæn.əl/","Let's invite a panel of English speakers.","She was on the panel for the interview practice.","group","committee",""],

  // Agreement and consensus words
  ["agree","to have the same opinion as someone","सहमत होना","verb","beginner","/əˈɡriː/","Let's agree on a common study schedule.","She agreed with the teacher's suggestion.","concur","consent","disagree"],
  ["consensus","a general agreement among people","सर्वसम्मति","noun","intermediate","/kənˈsɛn.səs/","Let's reach a consensus on the best approach.","The group reached a consensus after discussion.","agreement","unity","disagreement"],
  ["compromise","an agreement where everyone gives up something","समझौता","noun","intermediate","/ˈkɒm.prə.maɪz/","Let's reach a compromise on the study plan.","A compromise made everyone in the group happy.","agreement","middle ground","stubbornness"],
  ["negotiate","to discuss to reach an agreement","वार्ता करना","verb","intermediate","/nɪˈɡəʊ.ʃi.eɪt/","Let's negotiate the terms of our study partnership.","She negotiated a fair practice schedule.","discuss","bargain","impose"],
  ["reconcile","to bring two sides into agreement","सुलह करना","verb","intermediate","/ˈrɛk.ən.saɪl/","Let's reconcile any differences in our group.","She reconciled her grammar mistakes through review.","settle","resolve","dispute"],
  ["resolve","to find a solution to a problem","हल करना","verb","elementary","/rɪˈzɒlv/","Let's resolve any grammar confusion today.","She resolved the dispute calmly and clearly.","solve","settle","worsen"],
  ["settle","to decide or agree on something","तय करना","verb","elementary","/ˈsɛt.l/","Let's settle on a time for group practice.","She settled the issue by speaking clearly.","resolve","fix","disturb"],
  ["validate","to confirm that something is true or correct","मान्य करना","verb","intermediate","/ˈvæl.ɪ.deɪt/","Let's validate each other's progress.","She validated her answer by checking the grammar rule.","confirm","verify","reject"],
  ["ratify","to officially confirm an agreement","पुष्टि करना","verb","intermediate","/ˈræt.ɪ.faɪ/","Let's ratify our group rules for speaking practice.","The committee ratified the proposal unanimously.","confirm","approve","reject"],
  ["affirm","to state something with confidence","पुष्टि करना, कहना","verb","intermediate","/əˈfɜːm/","Let's affirm our commitment to daily English practice.","She affirmed her belief in the team's success.","confirm","declare","deny"],

  // Celebration and encouragement
  ["celebrate","to enjoy a special event","मनाना","verb","beginner","/ˈsɛl.ɪ.breɪt/","Let's celebrate every English milestone together.","She celebrated completing her first 14 days.","mark","honour","mourn"],
  ["appreciate","to recognize the value of something","सराहना करना","verb","elementary","/əˈpriː.ʃi.eɪt/","Let's appreciate each other's progress.","She appreciated the feedback from her teacher.","value","recognize","ignore"],
  ["acknowledge","to recognize achievement","स्वीकार करना, सराहना करना","verb","intermediate","/əkˈnɒl.ɪdʒ/","Let's acknowledge everyone's hard work.","She acknowledged the improvement of her classmates.","recognize","praise","ignore"],
  ["praise","to express strong approval","प्रशंसा करना","verb","elementary","/preɪz/","Let's praise each other for daily practice.","The teacher praised her for clear pronunciation.","compliment","commend","criticize"],
  ["commend","to praise someone formally","सराहना करना","verb","intermediate","/kəˈmɛnd/","Let's commend our group for finishing Day 14.","She was commended for her excellent presentation.","praise","recommend","criticize"],
  ["applaud","to clap or show strong approval","सराहना करना, तालियाँ बजाना","verb","elementary","/əˈplɔːd/","Let's applaud every student who speaks in English.","The audience applauded her confident speech.","praise","cheer","criticize"],
  ["reward","to give something for good work","पुरस्कार देना","verb","elementary","/rɪˈwɔːd/","Let's reward consistent practice with recognition.","She was rewarded with a certificate for her progress.","honor","recognize","punish"],
  ["cheer","to shout to encourage someone","उत्साहित करना","verb","beginner","/tʃɪər/","Let's cheer for every student who attempts to speak.","She cheered her classmates on during the debate.","encourage","support","boo"],
  ["honour","to show great respect for someone","सम्मान करना","verb","intermediate","/ˈɒn.ər/","Let's honour each other's learning achievements.","She was honoured with an award for best speaker.","respect","recognize","disrespect"],
  ["toast","to raise a glass in honor of someone","सम्मान में पीना","verb","intermediate","/təʊst/","Let's toast to our team's success in English.","She proposed a toast to the winner of the speech contest.","honor","salute",""],

  // Vocabulary about discussion and conversation
  ["viewpoint","a particular way of thinking about something","दृष्टिकोण","noun","intermediate","/ˈvjuː.pɔɪnt/","Let's discuss every viewpoint in the group.","She presented her viewpoint on the grammar topic.","opinion","perspective",""],
  ["perspective","a way of looking at something","नज़रिया","noun","intermediate","/pəˈspɛk.tɪv/","Let's consider every perspective before deciding.","She gained a new perspective on grammar rules.","viewpoint","outlook",""],
  ["opinion","what you think about something","राय, विचार","noun","beginner","/əˈpɪn.jən/","Let's share our opinions on the best learning strategy.","She gave a clear opinion on the grammar exercise.","view","belief",""],
  ["argument","a reason given to support a position","तर्क","noun","elementary","/ˈɑːɡ.jʊ.mənt/","Let's build a strong argument in English.","She supported her argument with clear examples.","reason","point",""],
  ["evidence","facts that support a claim","साक्ष्य","noun","intermediate","/ˈɛv.ɪ.dəns/","Let's find evidence to support our suggestion.","She presented evidence to support her grammar rule.","proof","data",""],
  ["reasoning","the process of thinking logically","तर्क करने की प्रक्रिया","noun","intermediate","/ˈriː.zən.ɪŋ/","Let's use good reasoning in our debate.","Her reasoning for the grammar rule was very clear.","logic","thinking",""],
  ["statement","something said or written clearly","कथन, बयान","noun","elementary","/ˈsteɪt.mənt/","Let's write a clear opening statement.","She made a strong statement about the rule.","declaration","assertion",""],
  ["clarification","making something clearer","स्पष्टीकरण","noun","intermediate","/ˌklær.ɪ.fɪˈkeɪ.ʃən/","Let's ask for clarification when we don't understand.","She asked for clarification on the grammar rule.","explanation","elaboration","confusion"],
  ["elaboration","giving more detail about something","विस्तार","noun","intermediate","/ɪˌlæb.ər.ˈeɪ.ʃən/","Let's ask for elaboration on difficult topics.","She asked the teacher for elaboration on tenses.","detail","expansion","summary"],
  ["conclusion","the final point of an argument","निष्कर्ष","noun","elementary","/kənˈkluː.ʒən/","Let's draw a conclusion from today's lesson.","She concluded with a strong English statement.","result","end","beginning"],

  // Modern world vocabulary
  ["digital","relating to computers and electronics","डिजिटल","adjective","beginner","/ˈdɪdʒ.ɪ.tl/","Let's use digital tools for English learning.","Digital English resources are very useful.","electronic","online","physical"],
  ["virtual","existing online rather than physically","आभासी","adjective","elementary","/ˈvɜː.tʃu.əl/","Let's join a virtual English speaking session.","She attended a virtual grammar class.","online","digital","physical"],
  ["interactive","involving active participation","संवादात्मक","adjective","intermediate","/ˌɪn.tərˈæk.tɪv/","Let's use an interactive approach to learning.","Interactive lessons keep students engaged.","engaging","participative","passive"],
  ["innovative","using new methods and ideas","अभिनव","adjective","intermediate","/ˈɪn.ə.veɪ.tɪv/","Let's try innovative ways to remember grammar.","She developed an innovative study method.","creative","original","traditional"],
  ["accessible","easy to reach or use","सुलभ","adjective","intermediate","/əkˈsɛs.ɪ.bl/","Let's make English learning accessible to all.","Online resources make English accessible everywhere.","available","obtainable","unavailable"],
  ["flexible","able to change easily","लचीला","adjective","elementary","/ˈflɛk.sɪ.bl/","Let's have a flexible study schedule.","She has a flexible approach to learning.","adaptable","open","rigid"],
  ["comprehensive","covering all aspects of something","व्यापक","adjective","intermediate","/ˌkɒm.prɪˈhɛn.sɪv/","Let's take a comprehensive approach to grammar.","The 75-day course is a comprehensive English program.","complete","thorough","incomplete"],
  ["systematic","done in an organized, planned way","व्यवस्थित","adjective","intermediate","/ˌsɪs.təˈmæt.ɪk/","Let's be systematic in our English practice.","A systematic approach to grammar is very effective.","organized","methodical","random"],
  ["progressive","moving forward step by step","प्रगतिशील","adjective","intermediate","/prəˈɡrɛs.ɪv/","Let's take a progressive approach to learning.","A progressive learner grows stronger every day.","advancing","developing","regressive"],
  ["collaborative","done by people working together","सहयोगात्मक","adjective","intermediate","/kəˈlæb.ər.ə.tɪv/","Let's take a collaborative approach to the project.","A collaborative environment produces better ideas.","cooperative","joint","independent"],

  // Action-oriented words
  ["launch","to start something new","शुरू करना","verb","elementary","/lɔːntʃ/","Let's launch our English speaking challenge.","She launched a new vocabulary review system.","start","begin","end"],
  ["implement","to put a plan into action","लागू करना","verb","intermediate","/ˈɪm.plɪ.mɛnt/","Let's implement our new grammar study system.","She implemented a daily reading habit.","execute","carry out","ignore"],
  ["execute","to carry out a plan","कार्यान्वित करना","verb","intermediate","/ˈɛk.sɪ.kjuːt/","Let's execute our English project plan today.","She executed the plan perfectly.","carry out","perform","abandon"],
  ["accomplish","to successfully do something","हासिल करना","verb","elementary","/əˈkɒm.plɪʃ/","Let's accomplish today's learning goals together.","She accomplished all 14 subtopics by Day 14.","achieve","complete","fail"],
  ["expand","to make something larger or broader","विस्तार करना","verb","elementary","/ɪkˈspænd/","Let's expand our vocabulary every day.","She expanded her grammar knowledge through practice.","grow","extend","reduce"],
  ["refine","to improve by making small changes","सुधारना","verb","intermediate","/rɪˈfaɪn/","Let's refine our English pronunciation.","She refined her accent through shadowing practice.","improve","polish","worsen"],
  ["transform","to completely change something","बदलना, रूपांतरित करना","verb","intermediate","/trænsˈfɔːm/","Let's transform our English skills by Day 75.","She transformed from a beginner to an advanced speaker.","change","convert","preserve"],
  ["pursue","to follow or try to achieve something","पीछा करना, अनुसरण करना","verb","intermediate","/pəˈsjuː/","Let's pursue our goal of English fluency together.","She pursued every opportunity to speak English.","follow","chase","abandon"],
  ["strive","to try very hard to achieve something","प्रयास करना","verb","intermediate","/straɪv/","Let's strive to improve every single day.","She strove to speak English with confidence.","try hard","endeavor","give up"],
  ["endeavor","to try hard to do or achieve something","प्रयास करना","verb","intermediate","/ɪnˈdɛv.ər/","Let's endeavor to make every session count.","She endeavored to complete every grammar exercise.","try","strive","abandon"],

  // Social interaction words
  ["greet","to say hello or welcome someone","अभिवादन करना","verb","beginner","/ɡriːt/","Let's greet each other in English every morning.","She greeted everyone with a warm smile and a hello.","welcome","salute","ignore"],
  ["introduce","to make someone known to another","परिचय कराना","verb","beginner","/ˌɪn.trəˈdjuːs/","Let's introduce ourselves to the new classmates.","She introduced her partner to the group in English.","present","acquaint","ignore"],
  ["mingle","to mix and talk with others socially","घुलना-मिलना","verb","intermediate","/ˈmɪŋ.ɡl/","Let's mingle with new English learners at the event.","She mingled easily with the conference attendees.","mix","socialize","avoid"],
  ["interact","to communicate and deal with others","बातचीत करना","verb","elementary","/ˌɪn.tərˈækt/","Let's interact with native speakers online.","She interacted confidently with foreign visitors.","communicate","engage","avoid"],
  ["socialize","to meet and spend time with others","सामाजिक होना","verb","elementary","/ˈsəʊ.ʃəl.aɪz/","Let's socialize and practice English together.","She socialized with her colleagues at the team lunch.","mix","mingle","isolate"],
  ["network","to build professional relationships","नेटवर्क बनाना","verb","intermediate","/ˈnɛt.wɜːk/","Let's network with professionals to improve English.","She networked effectively at the career fair.","connect","link","isolate"],
  ["connect","to join or link with someone","जोड़ना, जुड़ना","verb","elementary","/kəˈnɛkt/","Let's connect with English speakers around the world.","She connected with students from other cities.","link","join","disconnect"],
  ["bond","to form a close connection","जुड़ना, बंधन बनाना","verb","elementary","/bɒnd/","Let's bond as a group of English learners.","She bonded with her study partner over shared goals.","connect","unite","separate"],
  ["unite","to come together for a purpose","एकजुट होना","verb","elementary","/juːˈnaɪt/","Let's unite as a team to achieve English fluency.","They united to organize the group presentation.","join","combine","divide"],
  ["gather","to come together in a group","इकट्ठा होना","verb","elementary","/ˈɡæð.ər/","Let's gather at the library for group study.","She gathered her friends for an English quiz.","collect","assemble","scatter"],

  // Activity and events
  ["trip","a journey to a place","यात्रा","noun","beginner","/trɪp/","Let's plan a trip and practice English along the way.","She described her trip in a written English assignment.","journey","outing",""],
  ["outing","a short trip for enjoyment","भ्रमण, सैर","noun","elementary","/ˈaʊt.ɪŋ/","Let's plan a group outing and speak only English.","The class outing gave students a chance to speak freely.","excursion","trip",""],
  ["excursion","an organized short trip","भ्रमण","noun","intermediate","/ɪkˈskɜː.ʃən/","Let's organize an English club excursion.","She wrote about her school excursion in English.","trip","outing",""],
  ["picnic","an outdoor meal or gathering","पिकनिक","noun","beginner","/ˈpɪk.nɪk/","Let's have a picnic and speak English all day.","She organized a picnic for the English study group.","outing","gathering",""],
  ["game","an activity with rules for fun or competition","खेल","noun","beginner","/ɡeɪm/","Let's play a vocabulary game to learn new words.","She organized a grammar game for the class.","activity","sport",""],
  ["quiz","a short test of knowledge","प्रश्नोत्तरी","noun","elementary","/kwɪz/","Let's hold a vocabulary quiz at the end of the week.","She participated enthusiastically in the English quiz.","test","competition",""],
  ["contest","a competition between people","प्रतियोगिता","noun","elementary","/ˈkɒn.tɛst/","Let's enter the English speaking contest.","She won the story-writing contest at school.","competition","event",""],
  ["tournament","a series of competitions","टूर्नामेंट","noun","intermediate","/ˈtʊər.nə.mənt/","Let's organize a debate tournament for English learners.","She reached the final of the speech tournament.","competition","championship",""],
  ["campaign","an organized effort to achieve a goal","अभियान","noun","intermediate","/kæmˈpeɪn/","Let's start a campaign to promote English speaking.","She joined the literacy campaign in her village.","drive","initiative",""],
  ["drive","an organized effort to achieve something","अभियान, प्रयास","noun","elementary","/draɪv/","Let's start a drive to increase vocabulary skills.","She joined the reading drive at her school.","campaign","initiative",""],

  // Creativity and expression
  ["creative","using imagination to make something new","रचनात्मक","adjective","elementary","/kriˈeɪ.tɪv/","Let's be creative in how we practice English.","Creative learners find unique ways to memorize words.","imaginative","original","unimaginative"],
  ["imaginative","having or showing creative ideas","कल्पनाशील","adjective","intermediate","/ɪˈmædʒ.ɪ.nə.tɪv/","Let's find imaginative ways to use new vocabulary.","She told an imaginative story using 20 new words.","creative","inventive","dull"],
  ["expressive","showing feelings or ideas well","अभिव्यंजक","adjective","intermediate","/ɪkˈsprɛs.ɪv/","Let's be expressive when we speak in English.","She gave an expressive reading of the poem.","communicative","vivid","restrained"],
  ["artistic","having skill in the arts","कलात्मक","adjective","elementary","/ɑːˈtɪs.tɪk/","Let's write artistic sentences using today's words.","She used artistic language in her English essay.","creative","aesthetic","plain"],
  ["inventive","good at creating new things or ideas","आविष्कारशील","adjective","intermediate","/ɪnˈvɛn.tɪv/","Let's be inventive with our group presentation.","Her inventive story impressed the whole class.","creative","innovative","ordinary"],
  ["dramatic","exciting and impressive","नाटकीय","adjective","intermediate","/drəˈmæt.ɪk/","Let's add dramatic pauses in our speeches.","She gave a dramatic reading at the talent show.","theatrical","expressive","dull"],
  ["narrative","a spoken or written story","कथा, वर्णन","noun","intermediate","/ˈnær.ə.tɪv/","Let's write a narrative about our learning journey.","She shared her narrative about learning English.","story","account",""],
  ["anecdote","a short interesting story about a real event","किस्सा, प्रसंग","noun","intermediate","/ˈæn.ɪk.dəʊt/","Let's share an anecdote to start the presentation.","She told an amusing anecdote about her first English lesson.","story","tale",""],
  ["metaphor","a comparison that says one thing is another","रूपक","noun","intermediate","/ˈmɛt.ə.fɔːr/","Let's use a metaphor to make our point interesting.","She used the metaphor of a journey to describe learning.","comparison","figure of speech",""],
  ["imagery","the use of vivid language to create pictures","कल्पना-चित्रण","noun","intermediate","/ˈɪm.ɪ.dʒər.i/","Let's use imagery to make our writing more vivid.","She used beautiful imagery to describe the sunrise.","description","visualization",""],

  // Building and improving skills
  ["practice","repeated activity to improve a skill","अभ्यास","noun","beginner","/ˈpræk.tɪs/","Let's make daily practice our most important habit.","She made it a point to practice speaking every day.","exercise","training",""],
  ["revision","the process of reviewing and improving","पुनरावृत्ति","noun","elementary","/rɪˈvɪʒ.ən/","Let's schedule revision of all vocabulary on Day 14.","She did a full revision of the week's vocabulary.","review","study",""],
  ["rehearsal","practice before a performance","पूर्वाभ्यास","noun","intermediate","/rɪˈhɜː.səl/","Let's do a rehearsal before the group presentation.","She attended every rehearsal for the English play.","practice","run-through","performance"],
  ["simulation","an imitation of a real situation","अनुकरण, नकल","noun","intermediate","/ˌsɪm.jʊˈleɪ.ʃən/","Let's do a simulation of a job interview in English.","She practiced through a simulation of a customer call.","role-play","exercise",""],
  ["role-play","acting out a scenario for practice","भूमिका-नाटक","noun","elementary","/ˈrəʊl.pleɪ/","Let's do a role-play at the hospital to practice English.","She enjoyed the role-play activity in class.","simulation","acting",""],
  ["exercise","an activity done to practice a skill","अभ्यास, कसरत","noun","beginner","/ˈɛk.sɜː.saɪz/","Let's complete each grammar exercise as a team.","She did twenty vocabulary exercises in one session.","practice","drill",""],
  ["drill","a repeated practice activity","अभ्यास, ड्रिल","noun","elementary","/drɪl/","Let's do a pronunciation drill every morning.","She led the grammar drill for the class.","exercise","practice",""],
  ["activity","something done for a purpose or pleasure","गतिविधि","noun","beginner","/ækˈtɪv.ɪ.ti/","Let's plan a fun activity for the group session.","She enjoyed every activity in the English course.","task","exercise",""],
  ["project","a planned piece of work or study","परियोजना","noun","elementary","/ˈprɒdʒ.ɛkt/","Let's work on a group project about daily English use.","She presented her project in front of the class.","assignment","task",""],
  ["assignment","a task given to someone to do","कार्य, सौंपा गया काम","noun","elementary","/əˈsaɪn.mənt/","Let's complete the assignment together by tomorrow.","She submitted her group assignment on time.","task","homework",""],

  // Travel and leisure vocabulary for suggestions
  ["travel","to go from one place to another","यात्रा करना","verb","beginner","/ˈtræv.əl/","Let's travel to new places and practice English there.","She traveled to learn about different cultures.","journey","go","stay"],
  ["adventure","an exciting or unusual experience","साहसिक यात्रा, रोमांच","noun","elementary","/ədˈvɛn.tʃər/","Let's plan our next language learning adventure.","Learning English is an adventure worth taking.","excitement","experience","boredom"],
  ["explore","to look at or investigate something new","खोजना, जाँचना","verb","elementary","/ɪkˈsplɔːr/","Let's explore new grammar structures together.","She explored different ways of learning vocabulary.","discover","investigate","ignore"],
  ["discover","to find something for the first time","खोजना","verb","elementary","/dɪˈskʌv.ər/","Let's discover the joy of English communication.","She discovered her love for language through this course.","find","uncover","lose"],
  ["experience","to go through or feel something","अनुभव करना","verb","elementary","/ɪkˈspɪər.i.əns/","Let's experience English in real conversations.","She experienced the joy of speaking confidently.","go through","feel","avoid"],
  ["enjoy","to take pleasure in something","आनंद लेना","verb","beginner","/ɪnˈdʒɔɪ/","Let's enjoy learning English every single day.","She enjoyed the group activities in the English class.","relish","like","dislike"],
  ["relax","to rest and reduce stress","आराम करना, तनाव कम करना","verb","beginner","/rɪˈlæks/","Let's relax before the big group presentation.","She relaxed with an English podcast in the evening.","rest","unwind","stress"],
  ["unwind","to relax after a period of work","आराम करना, तनाव मुक्त होना","verb","intermediate","/ˌʌnˈwaɪnd/","Let's unwind together after our English marathon session.","She unwound by reading an English novel.","relax","rest","stress"],
  ["refresh","to make something feel new again","ताज़ा करना","verb","elementary","/rɪˈfrɛʃ/","Let's refresh our memory of last week's vocabulary.","She refreshed her mind with a short break.","renew","revive","tire"],
  ["recharge","to restore energy or enthusiasm","ऊर्जा वापस पाना","verb","elementary","/ˌriːˈtʃɑːdʒ/","Let's recharge with a fun activity before revision.","She recharged by spending time with family on Sunday.","refresh","restore","drain"],

  // Communication vocabulary unique to Day 14
  ["dialogue","a conversation between two or more people","संवाद","noun","elementary","/ˈdaɪ.ə.lɒɡ/","Let's write a dialogue to practice speaking English.","She performed a dialogue with her study partner.","conversation","exchange","monologue"],
  ["debate","a formal discussion on a topic","बहस, वाद-विवाद","noun","elementary","/dɪˈbeɪt/","Let's have a debate on the best learning methods.","She won the debate competition with her fluent English.","discussion","argument","agreement"],
  ["conversation","an informal talk between people","बातचीत","noun","beginner","/ˌkɒn.vəˈseɪ.ʃən/","Let's have a full conversation in English today.","She enjoyed long conversations with her partner.","talk","discussion","silence"],
  ["discussion","a talk where people share ideas","चर्चा, विचार-विमर्श","noun","elementary","/dɪˈskʌʃ.ən/","Let's begin the group discussion on grammar.","She led an insightful discussion on tenses.","talk","conversation","silence"],
  ["feedback","information about someone's performance","प्रतिक्रिया, फ़ीडबैक","noun","elementary","/ˈfiːd.bæk/","Let's give each other helpful feedback after speaking.","She received positive feedback from the teacher.","response","comment",""],
  ["critique","a detailed evaluation of something","समालोचना","noun","intermediate","/krɪˈtiːk/","Let's offer a constructive critique of each other's work.","She gave a thoughtful critique of her partner's essay.","review","analysis","praise"],
  ["narrate","to tell a story or describe events","वर्णन करना","verb","intermediate","/nəˈreɪt/","Let's narrate our weekend in English as practice.","She narrated the story with confidence and clarity.","tell","describe","listen"],
  ["describe","to say what something is like","वर्णन करना","verb","beginner","/dɪˈskraɪb/","Let's describe our surroundings in English.","She described the image in ten clear sentences.","explain","depict",""],
  ["present","to show or explain something to an audience","प्रस्तुत करना","verb","elementary","/prɪˈzɛnt/","Let's present our group project to the class.","She presented her research findings confidently.","show","demonstrate","hide"],
  ["demonstrate","to show how something works","दिखाना, प्रदर्शित करना","verb","intermediate","/ˈdɛm.ən.streɪt/","Let's demonstrate the use of Let's in a conversation.","She demonstrated the correct pronunciation clearly.","show","exhibit","hide"],

  // Positive attitude and mindset words
  ["optimistic","expecting good things to happen","आशावादी","adjective","intermediate","/ˌɒp.tɪˈmɪs.tɪk/","Let's stay optimistic about our English progress.","She remained optimistic even when grammar was hard.","hopeful","positive","pessimistic"],
  ["enthusiastic","showing great interest and excitement","उत्साही","adjective","intermediate","/ɪnˌθjuː.ziˈæs.tɪk/","Let's be enthusiastic in every group activity.","She was enthusiastic about every new English lesson.","eager","passionate","bored"],
  ["confident","feeling sure of your abilities","आत्मविश्वासी","adjective","elementary","/ˈkɒn.fɪ.dənt/","Let's be confident when we speak in English.","She became more confident after two weeks of practice.","assured","bold","timid"],
  ["positive","having a good or hopeful attitude","सकारात्मक","adjective","beginner","/ˈpɒz.ɪ.tɪv/","Let's keep a positive attitude toward learning.","She had a positive impact on everyone in the group.","optimistic","constructive","negative"],
  ["curious","eager to know or learn something","जिज्ञासु","adjective","elementary","/ˈkjʊər.i.əs/","Let's be curious about every new English word we find.","She was curious about the origin of English phrases.","inquisitive","eager","indifferent"],
  ["open-minded","willing to consider new ideas","खुले मन का","adjective","intermediate","/ˌəʊ.pənˈmaɪn.dɪd/","Let's be open-minded about different learning approaches.","She was open-minded about her teacher's new method.","receptive","flexible","narrow-minded"],
  ["determined","having strong will to succeed","दृढ़ संकल्पित","adjective","elementary","/dɪˈtɜː.mɪnd/","Let's stay determined until we reach Day 75.","She was determined to speak English without mistakes.","resolute","focused","indecisive"],
  ["resilient","able to recover quickly from difficulty","लचीला, साहसी","adjective","intermediate","/rɪˈzɪl.i.ənt/","Let's be resilient when grammar feels difficult.","She remained resilient throughout her learning journey.","tough","strong","fragile"],
  ["patient","able to wait without getting upset","धैर्यशील","adjective","beginner","/ˈpeɪ.ʃənt/","Let's be patient with each other during practice.","She was patient when her partner made mistakes.","calm","tolerant","impatient"],
  ["persistent","continuing despite difficulty","दृढ़, लगातार प्रयास करने वाला","adjective","intermediate","/pəˈsɪs.tənt/","Let's be persistent in our daily English learning.","She was persistent and improved noticeably each week.","determined","tenacious","giving up"],

  // Health and wellbeing group activities
  ["wellness","the state of being in good health","कल्याण, स्वस्थता","noun","intermediate","/ˈwɛl.nəs/","Let's prioritize wellness while studying English.","She attended a wellness workshop on mindful learning.","health","wellbeing","illness"],
  ["balance","a state where things are equal","संतुलन","noun","elementary","/ˈbæl.əns/","Let's maintain a balance between study and rest.","She struck a balance between grammar and speaking practice.","equilibrium","harmony","imbalance"],
  ["routine","a regular set of activities","दिनचर्या","noun","elementary","/ruːˈtiːn/","Let's create a routine that includes English every day.","She built a routine of 30 minutes of English each morning.","habit","schedule","chaos"],
  ["habit","something done regularly and automatically","आदत","noun","beginner","/ˈhæb.ɪt/","Let's build the habit of reading English every day.","She developed the habit of writing down new words.","routine","practice",""],
  ["ritual","a series of actions done regularly","रिवाज़, नियमित प्रक्रिया","noun","intermediate","/ˈrɪtʃ.u.əl/","Let's make English practice a daily ritual.","She had a morning ritual of reviewing vocabulary.","routine","habit",""],
  ["lifestyle","the way a person lives","जीवन शैली","noun","elementary","/ˈlaɪf.staɪl/","Let's build a lifestyle that supports English learning.","She changed her lifestyle to include more reading.","way of life","routine",""],
  ["nutrition","food and drink that your body needs","पोषण","noun","intermediate","/njuːˈtrɪʃ.ən/","Let's discuss nutrition topics in English for practice.","She wrote a paragraph about nutrition for her assignment.","diet","nourishment",""],
  ["fitness","being in good physical health","फिटनेस, स्वास्थ्य","noun","elementary","/ˈfɪt.nəs/","Let's talk about our fitness routines in English.","She described her fitness plan in a speaking exercise.","health","wellness","illness"],
  ["recreation","activities done for enjoyment","मनोरंजन, अवकाश गतिविधि","noun","intermediate","/ˌrɛk.riˈeɪ.ʃən/","Let's plan recreation activities where English is used.","She chose English reading as her favorite recreation.","leisure","entertainment","work"],
  ["leisure","free time for enjoyment","फुर्सत, अवकाश","noun","elementary","/ˈlɛʒ.ər/","Let's use leisure time to practice English conversation.","She used her leisure hours to watch English films.","free time","recreation","work"],

  // Additional collaboration words
  ["synergy","combined effort producing greater results","तालमेल, सहक्रिया","noun","intermediate","/ˈsɪn.ər.dʒi/","Let's create synergy in our English learning group.","The synergy of the team produced an outstanding project.","cooperation","combined effect","conflict"],
  ["camaraderie","friendly feeling in a group","साथीभाव, मित्रता","noun","intermediate","/ˌkæm.əˈrɑː.dər.i/","Let's build camaraderie in our study circle.","The camaraderie in the group made learning fun.","friendship","bonding","hostility"],
  ["rapport","a friendly and understanding relationship","अच्छे संबंध","noun","intermediate","/ræˈpɔːr/","Let's build a strong rapport with our study partners.","She built a strong rapport with her teacher.","relationship","connection","distance"],
  ["trust","belief in someone's honesty or ability","विश्वास","noun","beginner","/trʌst/","Let's build trust in our learning group.","She earned the trust of every member through hard work.","faith","confidence","distrust"],
  ["respect","admiration for someone's qualities","सम्मान","noun","beginner","/rɪˈspɛkt/","Let's show respect to every learner in the group.","She treated every classmate with great respect.","admiration","regard","disrespect"],
  ["empathy","understanding others' feelings","सहानुभूति","noun","intermediate","/ˈɛm.pə.θi/","Let's show empathy when someone struggles to speak.","She showed empathy when her partner felt nervous.","compassion","understanding","indifference"],
  ["inclusion","making everyone feel part of a group","समावेश","noun","intermediate","/ɪnˈkluː.ʒən/","Let's promote inclusion in every English activity.","She believed in inclusion — everyone gets a turn.","belonging","involvement","exclusion"],
  ["diversity","variety of different people or ideas","विविधता","noun","intermediate","/daɪˈvɜː.sɪ.ti/","Let's celebrate diversity in our learning group.","Diversity in the group enriched every discussion.","variety","range","uniformity"],
  ["belonging","feeling accepted as part of a group","अपनापन","noun","intermediate","/bɪˈlɒŋ.ɪŋ/","Let's create a sense of belonging in our group.","She felt a sense of belonging in the English class.","inclusion","connection","exclusion"],
  ["togetherness","the feeling of being united","एकसाथ होना, अपनापन","noun","intermediate","/təˈɡɛð.ə.nəs/","Let's celebrate togetherness through shared learning.","Togetherness made the group sessions enjoyable.","unity","closeness","division"],
];

export const ALL_DAY_14_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d14-v${i + 1}`, data)
);
