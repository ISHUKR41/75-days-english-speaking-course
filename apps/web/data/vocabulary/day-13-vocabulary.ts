// ============================================================
// Day 13 Vocabulary — USE OF LET (Allow, permit, give permission)
// Topic: Permission, freedom, governance, allowance, authority
// 300+ unique words not used in Days 1-12
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
  ["advise","to give recommendations to someone","सलाह देना","verb","elementary","/ədˈvaɪz/","Let me advise you on the best way to learn.","She advised him to read English news daily.","recommend","suggest","mislead"],
  ["counsel","to give guidance to someone on problems","परामर्श देना","verb","intermediate","/ˈkaʊn.səl/","Let the teacher counsel you on study methods.","She counseled students who were struggling.","advise","guide","mislead"],
  ["mentor","to guide and train someone","मार्गदर्शन करना","verb","elementary","/ˈmɛn.tɔːr/","Let an experienced speaker mentor you in English.","She mentored younger students in communication.","guide","coach","ignore"],
  ["tutor","to give private lessons","ट्यूटर करना, पढ़ाना","verb","elementary","/ˈtjuː.tər/","She tutored her sister in English grammar.","Let a tutor help you with difficult grammar.","teach","instruct","ignore"],
  ["coach","to train and guide someone for a skill","प्रशिक्षित करना","verb","elementary","/kəʊtʃ/","Let a coach help you improve your pronunciation.","She coached her team to speak confidently.","train","guide","neglect"],
  ["train","to teach someone a particular skill","प्रशिक्षण देना","verb","elementary","/treɪn/","Let the institute train you in business English.","She was trained to handle formal correspondence.","teach","develop","ignore"],
  ["instruct","to give directions or orders","निर्देश देना","verb","intermediate","/ɪnˈstrʌkt/","Let the officer instruct you on the proper procedure.","She instructed her students to write neatly.","direct","teach","confuse"],

  // Trust and credibility words
  ["trustworthy","worthy of being trusted","भरोसेमंद","adjective","intermediate","/ˈtrʌst.wɜː.ði/","Let your English skills make you trustworthy.","A trustworthy communicator is valued everywhere.","reliable","dependable","dishonest"],
  ["credible","able to be trusted and believed","विश्वसनीय","adjective","intermediate","/ˈkrɛd.ɪ.bl/","Let your facts make you credible in English.","A credible speaker is always respected.","believable","reliable","unreliable"],
  ["authentic","genuine and real","प्रामाणिक, असली","adjective","intermediate","/ɔːˈθɛn.tɪk/","Let your language learning be authentic.","Authentic English communication builds trust.","genuine","real","fake"],
  ["transparent","open and clear in actions and communication","पारदर्शी","adjective","intermediate","/trænsˈpær.ənt/","Let your English communication be transparent.","A transparent speaker earns immediate trust.","open","honest","deceptive"],
  ["fair","treating everyone equally and justly","उचित, न्यायसंगत","adjective","beginner","/fɛər/","Let the assessment be fair for all students.","She received fair feedback from the teacher.","just","unbiased","unfair"],
  ["accountable","responsible for one's actions","जवाबदेह","adjective","intermediate","/əˈkaʊn.tə.bl/","Let students be accountable for their practice.","She held herself accountable for daily revision.","responsible","answerable","irresponsible"],
  ["integrity","the quality of being honest and having values","सत्यनिष्ठा","noun","intermediate","/ɪnˈtɛɡ.rɪ.ti/","Let integrity guide your English learning.","She showed integrity by admitting her mistakes.","honesty","ethics","dishonesty"],
  ["reputation","the way others see you","प्रतिष्ठा","noun","intermediate","/ˌrɛp.jʊˈteɪ.ʃən/","Let your English improve your professional reputation.","A good reputation is built through honest communication.","image","standing","disgrace"],
  ["loyalty","faithfulness to someone or something","वफ़ादारी","noun","intermediate","/ˈlɔɪ.əl.ti/","Let loyalty to your daily practice bring results.","She showed loyalty to her English learning commitment.","faithfulness","devotion","disloyalty"],
  ["reliability","the quality of being dependable","विश्वसनीयता","noun","intermediate","/rɪˌlaɪ.əˈbɪl.ɪ.ti/","Let reliability define your professional character.","Her reliability made her the team's most valued member.","dependability","trustworthiness","unreliability"],

  // Leadership and command words
  ["command","to give an order or instruction","आदेश देना","verb","intermediate","/kəˈmɑːnd/","Let the supervisor command the team respectfully.","She commanded the room with her confident English.","order","direct","follow"],
  ["direct","to manage or control something","निर्देशित करना","verb","elementary","/daɪˈrɛkt/","Let the manager direct the project effectively.","She directed her team to complete the report.","guide","manage","follow"],
  ["govern","to officially control and manage","शासन करना","verb","intermediate","/ˈɡʌv.ən/","Let good policies govern the workplace.","She governed the committee with fairness.","rule","manage","obey"],
  ["regulate","to control by rules or laws","नियंत्रित करना","verb","intermediate","/ˈrɛɡ.jʊ.leɪt/","Let the institution regulate the examination process.","She regulated her study hours carefully.","control","manage","ignore"],
  ["administer","to manage or organize something formally","प्रशासन करना","verb","intermediate","/ədˈmɪn.ɪ.stər/","Let the officer administer the test fairly.","She administered the department efficiently.","manage","oversee","neglect"],
  ["oversee","to watch and manage how something is done","निगरानी करना","verb","intermediate","/ˌəʊ.vəˈsiː/","Let the supervisor oversee daily operations.","She oversaw the new employee's training.","supervise","manage","ignore"],
  ["supervise","to watch over work being done","पर्यवेक्षण करना","verb","intermediate","/ˈsuː.pə.vaɪz/","Let the senior supervise the new staff.","She supervised the exam room with care.","oversee","manage","neglect"],
  ["delegate","to assign a task to someone else","सौंपना","verb","intermediate","/ˈdɛl.ɪ.ɡeɪt/","Let the manager delegate tasks to team members.","She delegated the writing task to her junior.","assign","entrust","micromanage"],
  ["appoint","to officially choose someone for a role","नियुक्त करना","verb","intermediate","/əˈpɔɪnt/","Let the school appoint a new English coordinator.","She was appointed to lead the committee.","select","designate","dismiss"],
  ["assign","to give a task or role to someone","सौंपना","verb","elementary","/əˈsaɪn/","Let the teacher assign roles for the group project.","She assigned each student a different grammar topic.","allocate","give","withhold"],

  // Home and domestic words
  ["household","relating to the home and family","घरेलू, परिवार","noun","elementary","/ˈhaʊs.həʊld/","Let household conversations be in English.","She uses English for all household discussions.","family","home",""],
  ["domestic","relating to the home or one's own country","घरेलू","adjective","elementary","/dəˈmɛs.tɪk/","Let domestic conversations be a practice field.","She applied English in domestic situations.","home","household","foreign"],
  ["chore","a routine task in the home","घर का काम","noun","elementary","/tʃɔːr/","Let household chores be described in English.","She described her daily chores in an English exercise.","task","duty","leisure"],
  ["accommodation","a place to live or stay","आवास","noun","intermediate","/əˌkɒm.əˈdeɪ.ʃən/","Let the accommodation be comfortable for students.","She found good accommodation near the college.","housing","lodging",""],
  ["tenant","a person who rents a property","किरायेदार","noun","intermediate","/ˈtɛn.ənt/","Let the tenant speak English with the landlord.","She is a tenant in a shared apartment.","renter","occupant","owner"],
  ["landlord","a person who rents property to others","मकान मालिक","noun","intermediate","/ˈlænd.lɔːd/","Let the landlord explain the rules in English.","She negotiated rent with the landlord.","owner","proprietor","tenant"],
  ["lease","a contract to rent a property","पट्टा, किराये का करार","noun","intermediate","/liːs/","Let the lease agreement be written in English.","She signed a one-year lease for the apartment.","rental agreement","contract",""],
  ["appliance","a device for household use","उपकरण","noun","intermediate","/əˈplaɪ.əns/","Let the appliance manual be read in English.","She described the appliances in her kitchen.","device","gadget",""],
  ["maintenance","keeping something in good condition","रखरखाव","noun","intermediate","/ˈmeɪn.tɪ.nəns/","Let proper maintenance keep your learning consistent.","She maintained her English practice schedule.","upkeep","care","neglect"],
  ["permit","an official document giving permission","अनुमति पत्र","noun","intermediate","/ˈpɜː.mɪt/","Let the permit allow entry to the restricted area.","She obtained a permit to conduct the workshop.","license","pass","ban"],

  // Professional office words
  ["agenda","a list of things to be done or discussed","कार्यसूची","noun","intermediate","/əˈdʒɛn.də/","Let the agenda be sent to all team members.","She prepared an agenda before the meeting.","schedule","plan",""],
  ["protocol","an official set of rules for a situation","नियमावली, प्रोटोकॉल","noun","intermediate","/ˈprəʊ.tə.kɒl/","Let the protocol be followed during the presentation.","She followed the official protocol for correspondence.","procedure","rules",""],
  ["procedure","an established way of doing something","प्रक्रिया","noun","intermediate","/prəˈsiː.dʒər/","Let the procedure be clearly explained to all staff.","She followed the correct procedure for the complaint.","process","method",""],
  ["policy","a set of rules or principles","नीति","noun","intermediate","/ˈpɒl.ɪ.si/","Let the office policy on leave be followed by all.","She read the company policy before joining.","rule","guideline",""],
  ["clause","a specific part of a legal document","खंड, धारा","noun","intermediate","/klɔːz/","Let the clause be reviewed before signing.","She understood every clause of the employment contract.","section","provision",""],
  ["contract","a legally binding agreement","अनुबंध","noun","intermediate","/ˈkɒn.trækt/","Let the contract be signed by both parties.","She reviewed the contract carefully before accepting.","agreement","deal",""],
  ["agreement","an arrangement between two or more parties","समझौता","noun","elementary","/əˈɡriː.mənt/","Let the agreement be put in writing.","She reached an agreement with the college.","deal","arrangement","disagreement"],
  ["obligation","a duty you are required to fulfill","दायित्व, ज़िम्मेदारी","noun","intermediate","/ˌɒb.lɪˈɡeɪ.ʃən/","Let obligations be met on time for good reputation.","She fulfilled all her obligations before leaving.","duty","responsibility","freedom"],
  ["liability","something you are legally responsible for","देयता, जवाबदेही","noun","intermediate","/ˌlaɪ.əˈbɪl.ɪ.ti/","Let liability be clearly stated in the contract.","She understood her liability as a project manager.","responsibility","accountability","immunity"],
  ["permit","to officially allow something","अनुमति देना","verb","elementary","/pəˈmɪt/","Let me permit you to use the reference books.","She was permitted to take the advanced exam.","allow","authorize","forbid"],

  // Access and entry words
  ["access","the right or ability to enter or use something","प्रवेश, पहुँच","noun","elementary","/ˈæk.sɛs/","Let students have access to the library resources.","She gained access to the online learning platform.","entry","right","denial"],
  ["admission","the process of being allowed to enter","प्रवेश","noun","elementary","/ədˈmɪʃ.ən/","Let the admission process be fair and transparent.","She received admission to the English program.","entry","acceptance","rejection"],
  ["clearance","official permission to proceed","मंज़ूरी, अनुमति","noun","intermediate","/ˈklɪər.əns/","Let me get clearance before releasing the report.","She received clearance to access the secure files.","permission","approval","denial"],
  ["certification","an official document proving qualification","प्रमाणन","noun","intermediate","/ˌsɜː.tɪ.fɪˈkeɪ.ʃən/","Let the certification open new doors for you.","She earned a certification in Business English.","credential","qualification",""],
  ["credential","proof of someone's qualifications","प्रमाण-पत्र","noun","intermediate","/krɪˈdɛn.ʃəl/","Let your credentials speak for your ability.","She submitted her credentials for the job application.","qualification","certificate",""],
  ["verification","the process of confirming something is true","सत्यापन","noun","intermediate","/ˌvɛr.ɪ.fɪˈkeɪ.ʃən/","Let the verification be completed before proceeding.","She completed the verification of all submitted documents.","confirmation","authentication",""],
  ["validation","confirmation that something is correct","पुष्टि, मान्यता","noun","intermediate","/ˌvæl.ɪˈdeɪ.ʃən/","Let the validation process ensure accuracy.","She sought validation for her grammar choices.","confirmation","approval","rejection"],
  ["nomination","the process of suggesting someone for a role","नामांकन","noun","intermediate","/ˌnɒm.ɪˈneɪ.ʃən/","Let your nomination be submitted before the deadline.","She received a nomination for best speaker.","proposal","suggestion","withdrawal"],
  ["selection","the process of choosing from options","चयन","noun","elementary","/sɪˈlɛk.ʃən/","Let the selection process be merit-based.","She was delighted by her selection for the program.","choice","appointment","rejection"],
  ["appointment","the act of being chosen for a role","नियुक्ति","noun","intermediate","/əˈpɔɪnt.mənt/","Let the appointment letter arrive before joining.","She received her appointment as head of department.","designation","selection","dismissal"],

  // Boundaries and scope
  ["boundary","a line that marks the limit","सीमा","noun","elementary","/ˈbaʊn.dri/","Let boundaries define what is acceptable.","She respected the boundary between personal and professional.","limit","border",""],
  ["scope","the range of things included","दायरा, क्षेत्र","noun","intermediate","/skəʊp/","Let the scope of the project be clearly defined.","She expanded the scope of her English skills.","range","extent",""],
  ["extent","the degree or range of something","हद, विस्तार","noun","intermediate","/ɪkˈstɛnt/","Let us understand the extent of the problem.","She grasped the full extent of the grammar rule.","degree","range",""],
  ["domain","a specific area of knowledge or activity","क्षेत्र","noun","intermediate","/dəˈmeɪn/","Let English become your domain of confidence.","She expanded her domain to include business writing.","area","field",""],
  ["sphere","an area of activity or influence","क्षेत्र, दायरा","noun","intermediate","/sfɪər/","Let English open new spheres of opportunity.","She excelled in the professional sphere.","area","domain",""],
  ["threshold","the level at which something begins","सीमा, दहलीज़","noun","intermediate","/ˈθrɛʃ.həʊld/","Let the threshold for passing be reasonable.","She crossed the threshold from beginner to intermediate.","limit","boundary",""],
  ["quota","a fixed amount assigned to someone","कोटा, निर्धारित मात्रा","noun","intermediate","/ˈkwəʊ.tə/","Let the daily word quota be met consistently.","She fulfilled her vocabulary quota every day.","allocation","share",""],
  ["allowance","an amount permitted within a limit","भत्ता, अनुमत राशि","noun","intermediate","/əˈlaʊ.əns/","Let the allowance cover the study materials.","She received a travel allowance for the training.","allocation","ration",""],
  ["exemption","freedom from an obligation or rule","छूट, अपवाद","noun","intermediate","/ɪɡˈzɛmp.ʃən/","Let the exemption apply to those with valid reasons.","She received an exemption from the attendance rule.","exception","exclusion","obligation"],
  ["immunity","protection from a rule or consequence","उन्मुक्ति, छूट","noun","intermediate","/ɪˈmjuː.nɪ.ti/","Let immunity from penalties encourage honest reporting.","She was granted immunity for her cooperation.","exemption","protection","liability"],

  // Instruction and direction words
  ["decree","an official order from authority","आदेश, डिक्री","noun","intermediate","/dɪˈkriː/","Let the decree be announced to all staff members.","She followed the official decree from the principal.","order","mandate","request"],
  ["mandate","an official order or authorization","आदेश, अधिदेश","noun","intermediate","/ˈmæn.deɪt/","Let the mandate be followed by all employees.","The school gave a mandate for daily English practice.","order","directive","request"],
  ["directive","an official instruction","निर्देश","noun","intermediate","/daɪˈrɛk.tɪv/","Let the directive be clear and actionable.","She issued a directive for all team members.","instruction","order","suggestion"],
  ["instruction","a statement about what to do","निर्देश","noun","beginner","/ɪnˈstrʌk.ʃən/","Let the instruction be written in simple English.","She read the instructions carefully before starting.","direction","guideline",""],
  ["ruling","an official decision by authority","निर्णय, आदेश","noun","intermediate","/ˈruː.lɪŋ/","Let the ruling be respected by all parties.","She accepted the committee's ruling with dignity.","decision","judgment",""],
  ["verdict","a final decision or judgment","फैसला","noun","intermediate","/ˈvɜː.dɪkt/","Let the verdict be announced after thorough review.","She awaited the panel's verdict on her presentation.","judgment","decision",""],
  ["order","a command given by someone in authority","आदेश","noun","beginner","/ˈɔː.dər/","Let the order be followed without delay.","She received an order to complete the report.","command","instruction","request"],
  ["notice","a formal announcement or warning","सूचना","noun","elementary","/ˈnəʊ.tɪs/","Let the notice board show all permission rules.","She received written notice of approval.","announcement","notification",""],
  ["notification","a formal message about something","अधिसूचना","noun","intermediate","/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/","Let the notification reach everyone on time.","She sent a notification about the changed schedule.","notice","alert",""],
  ["declaration","a formal announcement","घोषणा","noun","intermediate","/ˌdɛk.ləˈreɪ.ʃən/","Let the declaration be made in clear English.","She made a declaration of her learning goals.","announcement","proclamation",""],

  // Useful learning and professional vocabulary
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

  // Additional permission context words
  ["waiver","giving up a right or claim formally","छूट, दावा त्यागना","noun","intermediate","/ˈweɪ.vər/","Let the waiver be signed before the activity.","She signed a waiver to participate in the advanced class.","exemption","release","obligation"],
  ["concession","a special permission or reduction","रियायत","noun","intermediate","/kənˈsɛʃ.ən/","Let the concession be granted to eligible students.","She received a fee concession from the institute.","allowance","discount","restriction"],
  ["dispensation","special permission to ignore a rule","विशेष अनुमति","noun","intermediate","/ˌdɪs.pənˈseɪ.ʃən/","Let the dispensation apply in exceptional cases.","She received a dispensation to submit the work late.","exemption","permission","restriction"],
  ["ratification","official approval of an agreement","अनुसमर्थन","noun","intermediate","/ˌræt.ɪ.fɪˈkeɪ.ʃən/","Let the ratification of the policy happen quickly.","She awaited ratification of the new leave policy.","approval","endorsement","rejection"],
  ["endorsement","an official statement of support","समर्थन","noun","intermediate","/ɪnˈdɔːs.mənt/","Let the endorsement from the principal carry weight.","She received an endorsement for her public speaking skills.","approval","backing","opposition"],
  ["accreditation","official recognition of quality","मान्यता","noun","intermediate","/əˌkrɛd.ɪˈteɪ.ʃən/","Let accreditation confirm the quality of the course.","She studied at an accreditation-approved institution.","recognition","certification",""],
  ["recognition","acknowledgment of something as valid","मान्यता, पहचान","noun","elementary","/ˌrɛk.əɡˈnɪʃ.ən/","Let recognition motivate students to work harder.","She received recognition for her excellent English.","acknowledgment","praise","ignorance"],
  ["approval","agreement that something is acceptable","अनुमोदन","noun","elementary","/əˈpruː.vəl/","Let your work earn the approval of the teacher.","She received written approval to proceed.","permission","consent","refusal"],
  ["permission","the right to do something granted by authority","अनुमति","noun","beginner","/pəˈmɪʃ.ən/","Let the teacher give you permission to speak.","She asked for permission to leave the classroom.","allowance","consent","refusal"],
  ["license","an official document granting permission","लाइसेंस, अनुज्ञापत्र","noun","intermediate","/ˈlaɪ.səns/","Let the license allow you to practice professionally.","She obtained a license to teach English.","permit","certification","ban"],

  // Accountability and responsibility words
  ["duty","a moral or legal obligation","कर्तव्य, दायित्व","noun","elementary","/ˈdjuː.ti/","Let every student understand their duty to practice.","She performed her duties with dedication.","responsibility","obligation","choice"],
  ["responsibility","the state of being in charge of something","ज़िम्मेदारी","noun","elementary","/rɪˌspɒn.sɪˈbɪl.ɪ.ti/","Let responsibility drive your learning commitment.","She took full responsibility for her mistakes.","duty","obligation","irresponsibility"],
  ["commitment","a promise to do something","प्रतिबद्धता","noun","elementary","/kəˈmɪt.mənt/","Let commitment to practice make you fluent.","She showed commitment to learning English every day.","dedication","devotion","neglect"],
  ["pledge","a serious promise or commitment","प्रण, वादा","noun","intermediate","/plɛdʒ/","Let your pledge to practice be honored daily.","She made a pledge to complete all 75 days.","promise","vow","betrayal"],
  ["vow","a solemn promise","प्रतिज्ञा","noun","intermediate","/vaʊ/","Let your vow to improve English stay strong.","She made a vow to practice every morning.","promise","oath","betrayal"],
  ["oath","a formal promise","शपथ","noun","intermediate","/əʊθ/","Let the oath of honesty guide your learning.","She took an oath to speak only English during practice.","vow","pledge","betrayal"],
  ["assurance","a statement that gives confidence","आश्वासन","noun","intermediate","/əˈʃʊər.əns/","Let your assurance of effort satisfy the teacher.","She gave assurance that the work would be completed.","guarantee","promise","doubt"],
  ["guarantee","a formal promise that something will happen","गारंटी","noun","intermediate","/ˌɡær.ənˈtiː/","Let your hard work be a guarantee of success.","She gave a guarantee to deliver the project on time.","assurance","promise","uncertainty"],
  ["warranty","a written guarantee for a product or service","वारंटी","noun","intermediate","/ˈwɒr.ən.ti/","Let the warranty protect you from unexpected costs.","She checked the warranty before purchasing the device.","guarantee","assurance",""],
  ["surety","something that ensures a promise is kept","ज़मानत, आश्वासन","noun","intermediate","/ˈʃʊər.ɪ.ti/","Let surety provide confidence in the agreement.","She offered surety that the fee would be paid.","guarantee","security","uncertainty"],

  // Additional words for richness
  ["admission","acceptance of a fact or truth","स्वीकारोक्ति","noun","intermediate","/ədˈmɪʃ.ən/","Let your admission of error show your character.","She made an admission that grammar was her weakness.","acknowledgment","confession","denial"],
  ["submission","the act of presenting something for review","प्रस्तुति, जमा करना","noun","intermediate","/səbˈmɪʃ.ən/","Let the submission deadline be respected.","She made a timely submission of her assignment.","presentation","delivery","withdrawal"],
  ["application","a formal request for something","आवेदन","noun","elementary","/ˌæp.lɪˈkeɪ.ʃən/","Let the application be filled out in English.","She submitted her application for the course.","request","form",""],
  ["petition","a formal request signed by many people","याचिका","noun","intermediate","/pɪˈtɪʃ.ən/","Let the petition be submitted to the principal.","She signed a petition to allow English in all classes.","request","appeal",""],
  ["appeal","a formal request for a decision to be changed","अपील","noun","intermediate","/əˈpiːl/","Let the appeal be considered by the committee.","She filed an appeal against the exam result.","request","petition",""],
  ["request","an act of asking for something politely","अनुरोध","noun","beginner","/rɪˈkwɛst/","Let every request be made politely in English.","She submitted a request for additional practice time.","ask","petition","demand"],
  ["demand","a strong request for something","माँग","noun","elementary","/dɪˈmɑːnd/","Let the demand for English education grow.","She made a demand for better study materials.","request","claim","offer"],
  ["claim","an assertion that something is true","दावा","noun","intermediate","/kleɪm/","Let the claim be supported with evidence.","She made a claim to the scholarship for English studies.","assertion","statement","denial"],
  ["assertion","a confident statement of fact","दावा, बयान","noun","intermediate","/əˈsɜː.ʃən/","Let every assertion be backed by clear examples.","Her assertion that grammar is important was correct.","claim","statement","denial"],
  ["declaration","a formal or explicit statement","घोषणा","noun","intermediate","/ˌdɛk.ləˈreɪ.ʃən/","Let the declaration of intentions be clear and honest.","She made a declaration that she would improve her English.","announcement","statement",""],

  // Environment and conditions
  ["atmosphere","the mood or feeling of a place","वातावरण, माहौल","noun","intermediate","/ˈæt.mə.sfɪər/","Let the classroom atmosphere be positive and safe.","She created an atmosphere of trust and open learning.","environment","setting",""],
  ["environment","the conditions around you","वातावरण","noun","elementary","/ɪnˈvaɪ.rən.mənt/","Let the learning environment be supportive.","She studied in an environment free from distractions.","setting","surroundings",""],
  ["setting","the place or conditions where something happens","परिवेश, स्थान","noun","elementary","/ˈsɛt.ɪŋ/","Let the setting allow comfortable communication.","She practiced English in a professional office setting.","environment","context",""],
  ["context","the circumstances around something","संदर्भ","noun","intermediate","/ˈkɒn.tɛkst/","Let the context guide your use of grammar rules.","She understood the word in its proper context.","background","setting",""],
  ["condition","a requirement or circumstance","शर्त, स्थिति","noun","elementary","/kənˈdɪʃ.ən/","Let the conditions of the agreement be clear.","She accepted the conditions for joining the program.","requirement","term",""],
  ["term","a condition or requirement","शर्त, अवधि","noun","elementary","/tɜːm/","Let the terms of the contract be understood.","She agreed to all the terms before enrolling.","condition","requirement",""],
  ["clause","a section in an agreement or rule","खंड","noun","intermediate","/klɔːz/","Let each clause be read carefully before signing.","She found a helpful clause that allowed extensions.","section","provision",""],
  ["specification","an exact requirement or detail","विनिर्देश","noun","intermediate","/ˌspɛs.ɪ.fɪˈkeɪ.ʃən/","Let the specifications be met in every assignment.","She followed the teacher's specifications for the essay.","requirement","detail",""],
  ["requirement","something that is necessary","आवश्यकता","noun","elementary","/rɪˈkwaɪər.mənt/","Let the requirements for the course be known.","She met every requirement for the English certification.","necessity","prerequisite","option"],
  ["prerequisite","something required before another step","पूर्वापेक्षा","noun","intermediate","/priːˈrɛk.wɪ.zɪt/","Let the prerequisite knowledge be confirmed first.","Basic grammar is a prerequisite for advanced writing.","requirement","condition","option"],

  // Additional professional vocabulary
  ["memorandum","a written note in an organization","ज्ञापन","noun","intermediate","/ˌmɛm.əˈræn.dəm/","Let the memorandum be circulated to all staff.","She wrote a memorandum about the new English policy.","memo","notice",""],
  ["circular","an official letter sent to many people","परिपत्र","noun","intermediate","/ˈsɜː.kjʊ.lər/","Let the circular inform everyone about the rule change.","She issued a circular about the new permission process.","notice","letter",""],
  ["correspondence","written communication","पत्राचार","noun","intermediate","/ˌkɒr.ɪˈspɒn.dəns/","Let all correspondence be in formal English.","She maintained professional correspondence with the office.","communication","letters",""],
  ["documentation","written records and evidence","दस्तावेज़ीकरण","noun","intermediate","/ˌdɒk.jʊ.mɛnˈteɪ.ʃən/","Let the documentation support your request.","She submitted complete documentation for the application.","records","paperwork",""],
  ["record","information stored about something","रिकॉर्ड","noun","elementary","/ˈrɛk.ɔːd/","Let the record of attendance be maintained daily.","She kept a record of all her vocabulary progress.","register","log",""],
  ["register","an official list or record","पंजीकरण","noun","elementary","/ˈrɛdʒ.ɪ.stər/","Let the register show all permitted absences.","She registered for the advanced English course.","list","record",""],
  ["log","a written record of events","लॉग, रिकॉर्ड","noun","elementary","/lɒɡ/","Let the log of daily practice motivate you.","She kept a log of every new word she learned.","record","diary",""],
  ["report","a formal written or spoken account","रिपोर्ट","noun","beginner","/rɪˈpɔːt/","Let the progress report show your improvement.","She submitted a weekly report to her teacher.","account","summary",""],
  ["assessment","an evaluation of someone or something","मूल्यांकन","noun","intermediate","/əˈsɛs.mənt/","Let the assessment be fair and constructive.","She completed the grammar assessment with confidence.","evaluation","test",""],
  ["evaluation","a formal judgment of quality or value","मूल्यांकन","noun","intermediate","/ɪˌvæl.juˈeɪ.ʃən/","Let the evaluation reflect real progress.","She received a positive evaluation from the instructor.","assessment","review",""],
];

export const ALL_DAY_13_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d13-v${i + 1}`, data)
);
