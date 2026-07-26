// ============================================================
// Day 14 Vocabulary — USE OF LET'S (Suggestions, proposals)
// Topic: Suggestions, teamwork, collaboration, proposals
// 200 unique words not used in Days 1-13
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
  ["approve","to officially agree with something","मंज़ूरी देना","verb","elementary","/əˈpruːv/","Let's all approve the final study plan.","She approved the group's presentation outline.","agree","accept","reject"],
  ["endorse","to publicly support something","समर्थन करना","verb","intermediate","/ɪnˈdɔːs/","Let's all endorse this learning method.","She endorsed the suggestion to practice speaking daily.","support","back","oppose"],
  ["validate","to confirm that something is true or correct","मान्य करना","verb","intermediate","/ˈvæl.ɪ.deɪt/","Let's validate each other's progress.","She validated her answer by checking the grammar rule.","confirm","verify","reject"],

  // Celebration and encouragement
  ["celebrate","to enjoy a special event","मनाना","verb","beginner","/ˈsɛl.ɪ.breɪt/","Let's celebrate every English milestone together.","She celebrated completing her first 14 days.","mark","honour","mourn"],
  ["appreciate","to recognize the value of something","सराहना करना","verb","elementary","/əˈpriː.ʃi.eɪt/","Let's appreciate each other's progress.","She appreciated the feedback from her teacher.","value","recognize","ignore"],
  ["acknowledge","to recognize achievement","स्वीकार करना, सराहना करना","verb","intermediate","/əkˈnɒl.ɪdʒ/","Let's acknowledge everyone's hard work.","She acknowledged the improvement of her classmates.","recognize","praise","ignore"],
  ["praise","to express strong approval","प्रशंसा करना","verb","elementary","/preɪz/","Let's praise each other for daily practice.","The teacher praised her for clear pronunciation.","compliment","commend","criticize"],
  ["commend","to praise someone formally","सराहना करना","verb","intermediate","/kəˈmɛnd/","Let's commend our group for finishing Day 14.","She was commended for her excellent presentation.","praise","recommend","criticize"],
  ["applaud","to clap or show strong approval","सराहना करना, तालियाँ बजाना","verb","elementary","/əˈplɔːd/","Let's applaud every student who speaks in English.","The audience applauded her confident speech.","praise","cheer","criticize"],
  ["reward","to give something for good work","पुरस्कार देना","verb","elementary","/rɪˈwɔːd/","Let's reward consistent practice with recognition.","She was rewarded with a certificate for her progress.","honor","recognize","punish"],
  ["motivate","to inspire someone to take action","प्रेरित करना","verb","elementary","/ˈməʊ.tɪ.veɪt/","Let's motivate each other through our journey.","She motivated the group by sharing her success.","inspire","encourage","discourage"],
  ["encourage","to give confidence to someone","प्रोत्साहित करना","verb","elementary","/ɪnˈkʌr.ɪdʒ/","Let's encourage every student in the group.","She encouraged her partner to speak boldly.","support","inspire","discourage"],
  ["inspire","to make someone feel they can achieve","प्रेरित करना","verb","elementary","/ɪnˈspaɪər/","Let's inspire each other to reach Day 75.","Her progress inspired the whole class.","motivate","encourage","discourage"],

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
  ["online","connected to the internet","ऑनलाइन","adjective","beginner","/ˈɒn.laɪn/","Let's practice English through online resources.","She found online vocabulary games very helpful.","digital","internet-based","offline"],
  ["interactive","involving active participation","संवादात्मक","adjective","intermediate","/ˌɪn.tərˈæk.tɪv/","Let's use an interactive approach to learning.","Interactive lessons keep students engaged.","engaging","participative","passive"],
  ["innovative","using new methods and ideas","अभिनव","adjective","intermediate","/ˈɪn.ə.veɪ.tɪv/","Let's try innovative ways to remember grammar.","She developed an innovative study method.","creative","original","traditional"],
  ["accessible","easy to reach or use","सुलभ","adjective","intermediate","/əkˈsɛs.ɪ.bl/","Let's make English learning accessible to all.","Online resources make English accessible everywhere.","available","obtainable","unavailable"],
  ["flexible","able to change easily","लचीला","adjective","elementary","/ˈflɛk.sɪ.bl/","Let's have a flexible study schedule.","She has a flexible approach to learning.","adaptable","open","rigid"],
  ["comprehensive","covering all aspects of something","व्यापक","adjective","intermediate","/ˌkɒm.prɪˈhɛn.sɪv/","Let's take a comprehensive approach to grammar.","The 75-day course is a comprehensive English program.","complete","thorough","incomplete"],
  ["systematic","done in an organized, planned way","व्यवस्थित","adjective","intermediate","/ˌsɪs.təˈmæt.ɪk/","Let's be systematic in our English practice.","A systematic approach to grammar is very effective.","organized","methodical","random"],
  ["progressive","moving forward step by step","प्रगतिशील","adjective","intermediate","/prəˈɡrɛs.ɪv/","Let's take a progressive approach to learning.","A progressive learner grows stronger every day.","advancing","developing","regressive"],

  // Action-oriented words
  ["act","to do something","कार्य करना","verb","beginner","/ækt/","Let's act on our English learning plan today.","She acted immediately on the teacher's advice.","do","perform","hesitate"],
  ["launch","to start something new","शुरू करना","verb","elementary","/lɔːntʃ/","Let's launch our English speaking challenge.","She launched a new vocabulary review system.","start","begin","end"],
  ["implement","to put a plan into action","लागू करना","verb","intermediate","/ˈɪm.plɪ.mɛnt/","Let's implement our new grammar study system.","She implemented a daily reading habit.","execute","carry out","ignore"],
  ["execute","to carry out a plan","कार्यान्वित करना","verb","intermediate","/ˈɛk.sɪ.kjuːt/","Let's execute our English project plan today.","She executed the plan perfectly.","carry out","perform","abandon"],
  ["accomplish","to successfully do something","हासिल करना","verb","elementary","/əˈkɒm.plɪʃ/","Let's accomplish today's learning goals together.","She accomplished all 14 subtopics by Day 14.","achieve","complete","fail"],
  ["advance","to move forward in progress","आगे बढ़ना","verb","elementary","/ədˈvɑːns/","Let's advance to the next level of English.","She advanced quickly through consistent practice.","progress","improve","regress"],
  ["develop","to grow or improve gradually","विकसित करना","verb","elementary","/dɪˈvɛl.əp/","Let's develop a strong speaking habit.","She developed excellent English communication skills.","grow","improve","decline"],
  ["expand","to make something larger or broader","विस्तार करना","verb","elementary","/ɪkˈspænd/","Let's expand our vocabulary every day.","She expanded her grammar knowledge through practice.","grow","extend","reduce"],
  ["refine","to improve by making small changes","सुधारना","verb","intermediate","/rɪˈfaɪn/","Let's refine our English pronunciation.","She refined her accent through shadowing practice.","improve","polish","worsen"],
  ["transform","to completely change something","बदलना, रूपांतरित करना","verb","intermediate","/trænsˈfɔːm/","Let's transform our English skills by Day 75.","She transformed from a beginner to an advanced speaker.","change","convert","preserve"],
];

export const ALL_DAY_14_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d14-v${i + 1}`, data)
);
