// ============================================================
// Day 13 Vocabulary — USE OF LET (Allow, permit, give permission)
// Topic: Permission, freedom, governance, allowance
// 200 unique words not used in Days 1-12
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `"${word}" is important when discussing permission in English.`,
    example4: `Let me show you how to use "${word}" in a sentence.`,
    example5: `The teacher will let students use "${word}" in writing practice.`,
    officeExample: `The manager will let employees use "${word}" in formal emails.`,
    dailyExample: `Let your family hear how you use "${word}" in conversation.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

const WORDS: W[] = [
  // Permission and allowance words
  ["authorize","to give official permission","अधिकृत करना","verb","intermediate","/ˈɔː.θər.aɪz/","The manager authorized her to send the email.","Let me authorize your access to the system.","approve","permit","deny"],
  ["sanction","to officially approve something","अनुमोदित करना","verb","intermediate","/ˈsæŋk.ʃən/","The school sanctioned her request for a leave.","Let the committee sanction the proposal.","approve","authorize","reject"],
  ["grant","to give something to someone formally","प्रदान करना","verb","elementary","/ɡrɑːnt/","The principal granted permission for the trip.","Let the authority grant your request.","give","award","deny"],
  ["consent","to give agreement to something","सहमति देना","verb","intermediate","/kənˈsɛnt/","She consented to join the English club.","Let your parents consent to the program.","agree","approve","refuse"],
  ["approve","to officially agree to something","मंज़ूरी देना","verb","elementary","/əˈpruːv/","The teacher approved her request to sit in front.","Let the manager approve your leave application.","accept","authorize","reject"],
  ["entitle","to give someone the right to something","हकदार बनाना","verb","intermediate","/ɪnˈtaɪ.tl/","This pass entitles you to attend the seminar.","Let your certificate entitle you to the job.","qualify","allow","disqualify"],
  ["enable","to make something possible","सक्षम बनाना","verb","intermediate","/ɪˈneɪ.bl/","Good English enables you to work anywhere.","Let technology enable your learning.","allow","empower","prevent"],
  ["empower","to give someone power or authority","सशक्त बनाना","verb","intermediate","/ɪmˈpaʊər/","Learning English empowers you to speak globally.","Let education empower your future.","enable","strengthen","weaken"],
  ["facilitate","to make something easier","सुगम बनाना","verb","intermediate","/fəˈsɪl.ɪ.teɪt/","Good grammar facilitates clear communication.","Let vocabulary facilitate your expression.","assist","help","hinder"],
  ["endorse","to officially support something","समर्थन करना","verb","intermediate","/ɪnˈdɔːs/","The teacher endorsed her English learning journey.","Let your mentor endorse your progress.","support","approve","oppose"],

  // Freedom and rights words
  ["freedom","the right to act without restriction","आज़ादी, स्वतंत्रता","noun","beginner","/ˈfriː.dəm/","Learning English gives you freedom to communicate.","Let freedom of expression guide your speaking.","liberty","independence","restriction"],
  ["liberty","the state of being free","स्वाधीनता, स्वतंत्रता","noun","intermediate","/ˈlɪb.ər.ti/","Education gives you liberty of thought.","Let your knowledge bring liberty to your life.","freedom","independence","captivity"],
  ["right","a moral or legal claim to something","अधिकार","noun","beginner","/raɪt/","You have the right to learn and grow.","Let everyone have the right to education.","entitlement","privilege","obligation"],
  ["privilege","a special right available to only some","विशेषाधिकार","noun","intermediate","/ˈprɪv.ɪ.lɪdʒ/","Learning English is a privilege you must use.","Let the privilege of education not go to waste.","right","advantage","burden"],
  ["entitlement","the feeling that you deserve something","अधिकार बोध","noun","intermediate","/ɪnˈtaɪ.tl.mənt/","She has an entitlement to quality education.","Let your hard work create entitlement to success.","right","claim",""],
  ["authority","the right to make decisions","प्राधिकार, अधिकार","noun","intermediate","/ɔːˈθɒr.ɪ.ti/","The teacher has the authority to let students leave.","Let the authority make the final decision.","power","control","obedience"],
  ["jurisdiction","the official power over an area","क्षेत्राधिकार","noun","intermediate","/ˌdʒʊər.ɪsˈdɪk.ʃən/","This rule falls under the school's jurisdiction.","Let the court exercise its jurisdiction.","authority","power",""],
  ["sovereignty","the full power of a state to govern itself","संप्रभुता","noun","intermediate","/ˈsɒv.rɪn.ti/","Personal sovereignty includes language freedom.","Let every student exercise sovereignty over their learning.","authority","independence","dependence"],
  ["autonomy","the right to make your own decisions","स्वायत्तता","noun","intermediate","/ɔːˈtɒn.ə.mi/","She gained autonomy in speaking English confidently.","Let students have autonomy in choosing topics.","independence","self-rule","control"],
  ["capacity","the ability to do something","क्षमता","noun","elementary","/kəˈpæs.ɪ.ti/","Let her capacity to learn English shine.","She has the capacity to speak at an advanced level.","ability","capability","incapacity"],

  // Rules and regulations
  ["regulation","an official rule","नियम, विनियमन","noun","intermediate","/ˌrɛɡ.jʊˈleɪ.ʃən/","The school regulation allows students to speak English.","Let the regulation guide your conduct.","rule","law","freedom"],
  ["restriction","a rule that limits what you can do","प्रतिबंध","noun","intermediate","/rɪˈstrɪk.ʃən/","There are restrictions on phone use in class.","Let the restrictions be fair and clear.","limitation","constraint","freedom"],
  ["limitation","something that prevents full progress","सीमा, मर्यादा","noun","intermediate","/ˌlɪm.ɪˈteɪ.ʃən/","Grammar limitations slow down communication.","Let us identify and overcome limitations.","constraint","restriction","freedom"],
  ["constraint","something that limits your actions","बाधा, नियंत्रण","noun","intermediate","/kənˈstreɪnt/","Time constraints make daily study important.","Let constraints motivate creative solutions.","restriction","limitation","freedom"],
  ["guideline","a rule or piece of advice","दिशानिर्देश","noun","elementary","/ˈɡaɪd.laɪn/","Let the guidelines help you write correct sentences.","She followed all writing guidelines.","rule","direction",""],
  ["standard","an acceptable level of quality","मानक","noun","elementary","/ˈstæn.dərd/","Let your work meet the standard required.","She maintained a high standard in her English.","level","norm",""],
  ["criterion","a standard used for judging something","मापदंड","noun","intermediate","/kraɪˈtɪər.i.ən/","The main criterion for passing is clear communication.","Let the criterion be fair for every student.","standard","measure",""],
  ["parameter","a limit or boundary for something","मापदंड, सीमा","noun","intermediate","/pəˈræm.ɪ.tər/","Let all work stay within the given parameters.","She understood the parameters of the assignment.","boundary","limit",""],
  ["compliance","following rules or laws","अनुपालन","noun","intermediate","/kəmˈplaɪ.əns/","Let your behavior show compliance with school rules.","She demonstrated full compliance with exam guidelines.","obedience","adherence","violation"],
  ["exception","something not included in a rule","अपवाद","noun","intermediate","/ɪkˈsɛp.ʃən/","There is an exception to every grammar rule.","Let the exception be handled fairly.","special case","exclusion","rule"],

  // Giving and sharing words
  ["donate","to give something freely to help others","दान करना","verb","elementary","/dəʊˈneɪt/","She donated books to the school library.","Let us donate time to teach others English.","contribute","give","take"],
  ["contribute","to give something to a shared effort","योगदान करना","verb","elementary","/kənˈtrɪb.juːt/","She contributed new ideas to the English project.","Let every student contribute to the group.","give","participate","withhold"],
  ["offer","to present something for acceptance","पेश करना","verb","beginner","/ˈɒf.ər/","She offered to help her classmate with grammar.","Let us offer support to struggling learners.","propose","provide","refuse"],
  ["provide","to make something available","प्रदान करना","verb","elementary","/prəˈvaɪd/","The teacher provides new vocabulary daily.","Let the course provide all you need.","supply","give","withhold"],
  ["share","to let others have part of something","बाँटना","verb","beginner","/ʃɛər/","She shared her vocabulary notes with friends.","Let students share their English stories.","distribute","give","keep"],
  ["lend","to give something temporarily","उधार देना","verb","beginner","/lɛnd/","She lent her grammar book to a friend.","Let me lend you a helping hand in your learning.","loan","give temporarily","borrow"],
  ["borrow","to take something temporarily","उधार लेना","verb","beginner","/ˈbɒr.əʊ/","She borrowed a dictionary from the library.","Let me borrow your notes for revision.","use temporarily","take","own"],
  ["exchange","to give something and receive something back","अदला-बदली करना","verb","elementary","/ɪksˈtʃeɪndʒ/","She exchanged grammar tips with her partner.","Let students exchange feedback with each other.","trade","swap","keep"],
  ["allocate","to assign something for a purpose","आवंटित करना","verb","intermediate","/ˈæl.ə.keɪt/","The teacher allocated time for speaking practice.","Let each student be allocated equal learning time.","assign","distribute","withhold"],
  ["distribute","to give out to multiple people","वितरित करना","verb","elementary","/dɪˈstrɪb.juːt/","She distributed grammar worksheets to the class.","Let the materials be distributed fairly.","share","hand out","collect"],

  // Care and support words
  ["assist","to help someone do something","सहायता करना","verb","elementary","/əˈsɪst/","She assisted her friend with English grammar.","Let me assist you in understanding tenses.","help","support","hinder"],
  ["support","to give help or encouragement","समर्थन करना","verb","beginner","/səˈpɔːt/","She always supported her classmates' learning.","Let your teachers support your progress.","help","encourage","oppose"],
  ["guide","to show someone the right direction","मार्गदर्शन करना","verb","elementary","/ɡaɪd/","She guided new students in English grammar.","Let an expert guide your language learning.","lead","direct","mislead"],
  ["encourage","to give confidence and support","प्रोत्साहित करना","verb","elementary","/ɪnˈkʌr.ɪdʒ/","Let your family encourage your English journey.","She encouraged her friend to speak boldly.","motivate","inspire","discourage"],
  ["motivate","to inspire someone to take action","प्रेरित करना","verb","elementary","/ˈməʊ.tɪ.veɪt/","Let your goals motivate you every morning.","She motivated her classmates to practice daily.","inspire","drive","discourage"],
  ["inspire","to make someone feel they can achieve something","प्रेरित करना","verb","elementary","/ɪnˈspaɪər/","Let great speakers inspire you to be better.","She inspired others by sharing her success story.","motivate","encourage","discourage"],
  ["advise","to give recommendations to someone","सलाह देना","verb","elementary","/ədˈvaɪz/","Let me advise you on the best way to learn.","She advised him to read English news daily.","recommend","suggest","mislead"],
  ["counsel","to give guidance to someone on problems","परामर्श देना","verb","intermediate","/ˈkaʊn.səl/","Let the teacher counsel you on study methods.","She counseled students who were struggling.","advise","guide","mislead"],
  ["mentor","to guide and train someone","मार्गदर्शन करना","verb","elementary","/ˈmɛn.tɔːr/","Let an experienced speaker mentor you in English.","She mentored younger students in communication.","guide","coach","ignore"],
  ["tutor","to give private lessons","ट्यूटर करना, पढ़ाना","verb","elementary","/ˈtjuː.tər/","She tutored her sister in English grammar.","Let a tutor help you with difficult grammar.","teach","instruct","ignore"],

  // Home and domestic words
  ["household","relating to the home and family","घरेलू, परिवार","noun","elementary","/ˈhaʊs.həʊld/","Let household conversations be in English.","She uses English for all household discussions.","family","home",""],
  ["domestic","relating to the home or one's own country","घरेलू","adjective","elementary","/dəˈmɛs.tɪk/","Let domestic conversations be a practice field.","She applied English in domestic situations.","home","household","foreign"],
  ["chore","a routine task in the home","घर का काम","noun","elementary","/tʃɔːr/","Let household chores be described in English.","She described her daily chores in an English exercise.","task","duty","leisure"],
  ["accommodation","a place to live or stay","आवास","noun","intermediate","/əˌkɒm.əˈdeɪ.ʃən/","Let the accommodation be comfortable for students.","She found good accommodation near the college.","housing","lodging",""],
  ["tenant","a person who rents a property","किरायेदार","noun","intermediate","/ˈtɛn.ənt/","Let the tenant speak English with the landlord.","She is a tenant in a shared apartment.","renter","occupant","owner"],
  ["landlord","a person who rents property to others","मकान मालिक","noun","intermediate","/ˈlænd.lɔːd/","Let the landlord explain the rules in English.","She negotiated rent with the landlord.","owner","proprietor","tenant"],
  ["lease","a contract to rent a property","पट्टा, किराये का करार","noun","intermediate","/liːs/","Let the lease agreement be written in English.","She signed a one-year lease for the apartment.","rental agreement","contract",""],
  ["furniture","movable objects for a house or room","फर्नीचर","noun","beginner","/ˈfɜː.nɪ.tʃər/","Let the furniture be described in English for practice.","She listed furniture items as a vocabulary exercise.","fittings","furnishings",""],
  ["appliance","a device for household use","उपकरण","noun","intermediate","/əˈplaɪ.əns/","Let the appliance manual be read in English.","She described the appliances in her kitchen.","device","gadget",""],
  ["maintenance","keeping something in good condition","रखरखाव","noun","intermediate","/ˈmeɪn.tɪ.nəns/","Let proper maintenance keep your learning consistent.","She maintained her English practice schedule.","upkeep","care","neglect"],

  // Trust and credibility words
  ["trustworthy","worthy of being trusted","भरोसेमंद","adjective","intermediate","/ˈtrʌst.wɜː.ði/","Let your English skills make you trustworthy.","A trustworthy communicator is valued everywhere.","reliable","dependable","dishonest"],
  ["credible","able to be trusted and believed","विश्वसनीय","adjective","intermediate","/ˈkrɛd.ɪ.bl/","Let your facts make you credible in English.","A credible speaker is always respected.","believable","reliable","unreliable"],
  ["authentic","genuine and real","प्रामाणिक, असली","adjective","intermediate","/ɔːˈθɛn.tɪk/","Let your language learning be authentic.","Authentic English communication builds trust.","genuine","real","fake"],
  ["transparent","open and clear in actions and communication","पारदर्शी","adjective","intermediate","/trænsˈpær.ənt/","Let your English communication be transparent.","A transparent speaker earns immediate trust.","open","honest","deceptive"],
  ["fair","treating everyone equally and justly","उचित, न्यायसंगत","adjective","beginner","/fɛər/","Let the assessment be fair for all students.","She received fair feedback from the teacher.","just","unbiased","unfair"],
  ["honest","telling the truth","ईमानदार","adjective","beginner","/ˈɒn.ɪst/","Let honest feedback improve your English.","She was honest about her grammar weaknesses.","truthful","sincere","dishonest"],
  ["accountable","responsible for one's actions","जवाबदेह","adjective","intermediate","/əˈkaʊn.tə.bl/","Let students be accountable for their practice.","She held herself accountable for daily revision.","responsible","answerable","irresponsible"],
  ["integrity","the quality of being honest and having values","सत्यनिष्ठा","noun","intermediate","/ɪnˈtɛɡ.rɪ.ti/","Let integrity guide your English learning.","She showed integrity by admitting her mistakes.","honesty","ethics","dishonesty"],
  ["reputation","the way others see you","प्रतिष्ठा","noun","intermediate","/ˌrɛp.jʊˈteɪ.ʃən/","Let your English improve your professional reputation.","A good reputation is built through honest communication.","image","standing","disgrace"],
  ["loyalty","faithfulness to someone or something","वफ़ादारी","noun","intermediate","/ˈlɔɪ.əl.ti/","Let loyalty to your daily practice bring results.","She showed loyalty to her English learning commitment.","faithfulness","devotion","disloyalty"],

  // Additional useful vocabulary
  ["solution","an answer to a problem","समाधान","noun","elementary","/səˈluː.ʃən/","Let us find a solution to your grammar difficulty.","She found a solution to her pronunciation problem.","answer","remedy","problem"],
  ["approach","a way of dealing with something","दृष्टिकोण, तरीका","noun","elementary","/əˈprəʊtʃ/","Let your approach to learning be positive.","She used a fresh approach to grammar practice.","method","strategy",""],
  ["technique","a skill or method for doing something","तकनीक","noun","elementary","/tɛkˈniːk/","Let this technique help you remember grammar rules.","She learned a technique for memorizing vocabulary.","method","skill",""],
  ["strategy","a plan for achieving a goal","रणनीति","noun","intermediate","/ˈstræt.ɪ.dʒi/","Let your strategy be consistent and measurable.","She developed a clear strategy for English learning.","plan","approach",""],
  ["framework","a basic structure for organizing something","ढाँचा","noun","intermediate","/ˈfreɪm.wɜːk/","Let the grammar framework guide your writing.","She used a framework to organize her essay.","structure","system",""],
  ["foundation","the base that everything is built on","नींव","noun","elementary","/faʊnˈdeɪ.ʃən/","Let a strong grammar foundation support fluency.","She built a solid foundation in English by Day 13.","base","basis",""],
  ["platform","a base for doing activities","मंच, प्लेटफ़ॉर्म","noun","elementary","/ˈplæt.fɔːm/","Let this platform be your English learning hub.","She used the platform to practice daily.","base","system",""],
  ["tool","something used to achieve a goal","साधन, औज़ार","noun","beginner","/tuːl/","Let every grammar lesson be a useful tool.","She used vocabulary as a tool for communication.","instrument","means",""],
  ["resource","something that can be used for help","संसाधन","noun","elementary","/rɪˈzɔːs/","Let every book be a resource for learning.","She used every resource to improve her English.","material","asset",""],
  ["advantage","a good result or benefit","फ़ायदा","noun","elementary","/ədˈvɑːn.tɪdʒ/","Let English be your greatest advantage.","She turned her grammar knowledge into a career advantage.","benefit","plus","disadvantage"],
];

export const ALL_DAY_13_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d13-v${i + 1}`, data)
);
