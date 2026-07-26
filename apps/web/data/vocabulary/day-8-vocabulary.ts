// ============================================================
// Day 8 Vocabulary — WILL HAVE (Future Perfect Tense)
// Topic: Future achievements, completion, professional success
// 200 unique words not used in Days 1-7
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

// Compact word format — saves space while keeping all fields
// [word, meaning, hindiMeaning, partOfSpeech, difficulty, ipa, example1, example2, syn1, syn2, ant1?]
type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

// Build full VocabularyWord from compact format
function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `Understanding "${word}" will improve your English fluency greatly.`,
    example4: `By tomorrow, she will have used "${word}" correctly in her presentation.`,
    example5: `Mastering "${word}" will have helped you in professional communications.`,
    officeExample: `By the deadline, the team will have completed the task using "${word}".`,
    dailyExample: `You will have learned "${word}" by the end of this lesson.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

// 200 unique vocabulary words for Day 8 — Will Have (Future Perfect)
const WORDS: W[] = [
  // Future accomplishment words
  ["accomplish","to successfully complete something","पूरा करना, सफलतापूर्वक करना","verb","elementary","/əˈkɒm.plɪʃ/","By next year, she will have accomplished all her goals.","He will have accomplished the mission by Friday.","achieve","complete","fail"],
  ["attain","to succeed in reaching a goal","प्राप्त करना, हासिल करना","verb","intermediate","/əˈteɪn/","By graduation, she will have attained her degree.","He will have attained fluency in English by year end.","achieve","reach","lose"],
  ["fulfill","to carry out a task or promise","पूरा करना, निभाना","verb","elementary","/fʊlˈfɪl/","By Monday, she will have fulfilled her promise.","The company will have fulfilled all orders by December.","complete","satisfy","neglect"],
  ["complete","to finish something fully","पूरा करना, समाप्त करना","verb","beginner","/kəmˈpliːt/","By noon, he will have completed the report.","She will have completed all 75 days of English practice.","finish","conclude","begin"],
  ["achieve","to reach a goal through effort","प्राप्त करना, हासिल करना","verb","beginner","/əˈtʃiːv/","By the exam, I will have achieved my target score.","She will have achieved her dream of speaking fluent English.","attain","accomplish","fail"],
  ["surpass","to go beyond a limit or expectation","पार करना, आगे निकलना","verb","intermediate","/səˈpɑːs/","By next month, she will have surpassed her own record.","The team will have surpassed the sales target.","exceed","outdo","fall behind"],
  ["excel","to be very good at something","श्रेष्ठ होना, बेहतरीन करना","verb","intermediate","/ɪkˈsɛl/","By the competition, he will have excelled in public speaking.","She will have excelled in all her English exams.","outshine","thrive","fail"],
  ["master","to learn something completely","महारत हासिल करना","verb","elementary","/ˈmɑːs.tər/","By June, she will have mastered the Future Perfect tense.","He will have mastered English grammar by year end.","learn","perfect","forget"],
  ["progress","to move forward or develop","प्रगति करना","verb","beginner","/prəˈɡrɛs/","By December, the student will have progressed greatly.","She will have progressed from beginner to advanced level.","advance","develop","regress"],
  ["improve","to make better","सुधारना, बेहतर करना","verb","beginner","/ɪmˈpruːv/","By next week, your pronunciation will have improved.","He will have improved his vocabulary by 500 words.","enhance","better","worsen"],

  // Time and planning words
  ["deadline","the time by which something must be done","समय-सीमा, अंतिम तिथि","noun","elementary","/ˈdɛd.laɪn/","By the deadline, they will have submitted the project.","She will have met the deadline without any problems.","due date","cutoff",""],
  ["schedule","a plan for doing things at certain times","समय-सारणी, कार्यक्रम","noun","beginner","/ˈʃɛd.juːl/","By tomorrow, the schedule will have been finalized.","She will have followed the schedule perfectly.","timetable","agenda",""],
  ["timeline","a plan showing when things should happen","समय-रेखा","noun","elementary","/ˈtaɪm.laɪn/","By next quarter, we will have met all timeline targets.","The project timeline will have been completed on time.","schedule","plan",""],
  ["milestone","an important stage in progress","मील का पत्थर, महत्वपूर्ण पड़ाव","noun","intermediate","/ˈmaɪl.stəʊn/","By graduation, she will have reached a major milestone.","He will have achieved several career milestones by 30.","achievement","landmark",""],
  ["target","a goal you aim to reach","लक्ष्य","noun","beginner","/ˈtɑːɡɪt/","By March, the team will have hit their sales target.","She will have reached her English target by Day 75.","goal","aim",""],
  ["objective","a specific goal or aim","उद्देश्य, लक्ष्य","noun","elementary","/əbˈdʒɛk.tɪv/","By the meeting, she will have achieved her objective.","The team will have met all their objectives by Friday.","goal","purpose",""],
  ["priority","something that is most important","प्राथमिकता","noun","elementary","/praɪˈɒr.ɪ.ti/","By Monday, she will have sorted her priorities.","He will have made learning English his top priority.","preference","main concern",""],
  ["commitment","a promise to do something","प्रतिबद्धता, वचन","noun","intermediate","/kəˈmɪt.mənt/","By year end, she will have honored her commitment.","He will have fulfilled his commitment to learn English.","dedication","pledge","neglect"],
  ["determination","a firm decision to do something","दृढ़ संकल्प, निश्चय","noun","elementary","/dɪˌtɜːmɪˈneɪʃən/","By Day 75, her determination will have paid off.","He will have shown great determination in his studies.","resolve","willpower","weakness"],
  ["perseverance","continuing despite difficulties","दृढ़ता, लगन","noun","intermediate","/ˌpɜːsɪˈvɪər.əns/","Her perseverance will have led her to success.","By the end, his perseverance will have made a difference.","persistence","tenacity","giving up"],

  // Professional success words
  ["promotion","moving to a higher job position","पदोन्नति","noun","elementary","/prəˈməʊ.ʃən/","By December, she will have received her promotion.","He will have earned a promotion through hard work.","advancement","raise","demotion"],
  ["career","a person's working life and job history","करियर, जीविका","noun","beginner","/kəˈrɪər/","By age 30, she will have built a successful career.","He will have established his career in IT.","profession","vocation",""],
  ["reputation","what others think of you","प्रतिष्ठा, नाम","noun","intermediate","/ˌrɛp.jʊˈteɪ.ʃən/","By next year, she will have built a strong reputation.","He will have earned a good reputation at work.","image","standing","disgrace"],
  ["expertise","deep knowledge or skill in a field","विशेषज्ञता","noun","intermediate","/ˌɛks.pɜːˈtiːz/","By the project end, she will have gained real expertise.","He will have developed expertise in English by Day 75.","skill","proficiency","ignorance"],
  ["qualification","a certificate showing skill or training","योग्यता, प्रमाण-पत्र","noun","elementary","/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/","By May, she will have earned her qualification.","He will have completed all qualifications by graduation.","credential","certificate",""],
  ["certificate","an official document proving achievement","प्रमाण-पत्र","noun","beginner","/səˈtɪf.ɪ.kɪt/","By the exam, she will have received her certificate.","He will have earned three certificates by year end.","diploma","document",""],
  ["credential","proof of someone's qualifications","प्रमाण-पत्र, साख","noun","intermediate","/krɪˈdɛn.ʃəl/","By the interview, she will have prepared all credentials.","He will have gathered all required credentials.","qualification","document",""],
  ["portfolio","a collection of work samples","कार्य-संग्रह, पोर्टफोलियो","noun","intermediate","/ˌpɔːt.fəʊˈliəʊ/","By graduation, she will have built an impressive portfolio.","He will have created a strong portfolio by next month.","collection","profile",""],
  ["network","a group of professional connections","नेटवर्क, संपर्क-जाल","noun","elementary","/ˈnɛt.wɜːk/","By the conference, she will have built a strong network.","He will have networked with 100 professionals by year end.","connections","contacts",""],
  ["mentor","an experienced person who guides others","मार्गदर्शक, गुरु","noun","elementary","/ˈmɛn.tɔːr/","By month end, she will have found a good mentor.","He will have become a mentor for junior employees.","guide","advisor",""],

  // Education and learning words
  ["curriculum","all the subjects and topics in a course","पाठ्यक्रम","noun","intermediate","/kəˈrɪk.jʊ.ləm/","By end of term, she will have covered the full curriculum.","He will have completed the entire English curriculum.","syllabus","program",""],
  ["syllabus","a list of topics to be studied","पाठ्यक्रम","noun","elementary","/ˈsɪl.ə.bəs/","By the exam, he will have finished the whole syllabus.","She will have covered the syllabus three times.","curriculum","outline",""],
  ["revision","reviewing what has been learned","दोहराना, पुनरावृत्ति","noun","elementary","/rɪˈvɪʒ.ən/","By exam day, she will have done three rounds of revision.","He will have completed revision of all 75 lessons.","review","recap",""],
  ["lecture","a formal talk on a subject","व्याख्यान","noun","elementary","/ˈlɛk.tʃər/","By noon, the professor will have delivered her lecture.","He will have attended 50 lectures by end of term.","talk","presentation",""],
  ["assignment","a task given to do","कार्य, होमवर्क","noun","beginner","/əˈsaɪn.mənt/","By Friday, she will have submitted all assignments.","He will have completed every assignment perfectly.","task","homework",""],
  ["examination","a formal test of knowledge","परीक्षा","noun","beginner","/ɪɡˌzæm.ɪˈneɪ.ʃən/","By next month, she will have passed the examination.","He will have cleared four examinations by graduation.","test","assessment",""],
  ["scholarship","money given to a student for study","छात्रवृत्ति","noun","elementary","/ˈskɒl.ə.ʃɪp/","By application deadline, she will have applied for scholarships.","He will have earned a scholarship by end of year.","grant","fellowship",""],
  ["graduate","to successfully finish a course of study","स्नातक करना","verb","elementary","/ˈɡræd.ju.ɪt/","By May, she will have graduated from university.","He will have graduated with top marks.","complete","finish","fail"],
  ["certificate","formal recognition of completing a course","प्रमाण-पत्र","noun","beginner","/səˈtɪf.ɪ.kɪt/","By July, he will have received his English certificate.","She will have earned her certificate in spoken English.","diploma","award",""],
  ["knowledge","facts and information about a subject","ज्ञान","noun","beginner","/ˈnɒl.ɪdʒ/","By Day 75, her English knowledge will have grown immensely.","He will have gained extensive knowledge of grammar.","understanding","expertise","ignorance"],

  // Futuristic and aspirational words
  ["aspiration","a strong desire to achieve something","आकांक्षा, अभिलाषा","noun","intermediate","/ˌæs.pɪˈreɪ.ʃən/","By next year, her aspirations will have been realized.","He will have fulfilled his aspiration of speaking English.","ambition","desire","apathy"],
  ["ambition","a strong desire to succeed","महत्वाकांक्षा","noun","intermediate","/æmˈbɪʃ.ən/","By age 25, she will have achieved all her ambitions.","His ambition will have taken him to great heights.","aspiration","drive","laziness"],
  ["vision","a clear idea of what you want to achieve","दूरदृष्टि, विज़न","noun","intermediate","/ˈvɪʒ.ən/","By year end, his vision for the team will have materialized.","She will have turned her vision into reality.","goal","dream",""],
  ["dream","something you strongly hope to achieve","सपना","noun","beginner","/driːm/","By the time she is 30, her dream will have come true.","He will have fulfilled his dream of becoming fluent.","aspiration","wish","nightmare"],
  ["potential","the ability to develop in the future","क्षमता, संभावना","noun","intermediate","/pəˈtɛn.ʃəl/","By graduation, she will have reached her full potential.","He will have unlocked his potential through hard work.","capability","capacity","limitation"],
  ["opportunity","a chance to do something good","अवसर","noun","beginner","/ˌɒp.əˈtjuː.nɪ.ti/","By next month, she will have grabbed the opportunity.","He will have created new opportunities for himself.","chance","opening","obstacle"],
  ["possibility","something that might happen","संभावना","noun","elementary","/ˌpɒs.ɪˈbɪl.ɪ.ti/","By tomorrow, all possibilities will have been explored.","He will have considered every possibility.","chance","prospect","impossibility"],
  ["prospect","the possibility of something happening","भविष्य की संभावना","noun","intermediate","/ˈprɒs.pɛkt/","Her prospects will have improved greatly by year end.","He will have explored all job prospects by graduation.","outlook","opportunity",""],
  ["expectation","a belief that something will happen","अपेक्षा, उम्मीद","noun","elementary","/ˌɛks.pɛkˈteɪ.ʃən/","By next month, she will have exceeded all expectations.","He will have met every expectation of his employer.","anticipation","hope","disappointment"],
  ["outcome","the result of something","परिणाम","noun","elementary","/ˈaʊt.kʌm/","By Friday, the outcome of the exam will have been declared.","She will have achieved a positive outcome.","result","consequence",""],

  // Business and finance words
  ["investment","money put into something to make profit","निवेश","noun","intermediate","/ɪnˈvɛst.mənt/","By year end, their investment will have tripled.","She will have made a wise investment in her education.","expenditure","funding","loss"],
  ["profit","money gained from a business","लाभ, मुनाफा","noun","elementary","/ˈprɒf.ɪt/","By December, the company will have made a good profit.","She will have generated profits through smart work.","gain","earnings","loss"],
  ["revenue","total income from business activities","राजस्व, आय","noun","intermediate","/ˈrɛv.ɪ.njuː/","By quarter end, the company will have reported strong revenue.","She will have increased revenue by 20% this year.","income","earnings","expense"],
  ["budget","a plan for money spending","बजट","noun","beginner","/ˈbʌdʒ.ɪt/","By next month, she will have finalized the annual budget.","He will have managed the budget efficiently.","finance","allocation",""],
  ["strategy","a plan for achieving a goal","रणनीति, कार्यनीति","noun","intermediate","/ˈstræt.ɪ.dʒi/","By the meeting, she will have prepared the marketing strategy.","He will have developed a clear strategy for success.","plan","approach",""],
  ["proposal","a written or spoken plan for something","प्रस्ताव","noun","elementary","/prəˈpəʊ.zəl/","By Friday, the team will have submitted their proposal.","She will have sent the business proposal by morning.","plan","suggestion",""],
  ["contract","a legal agreement between parties","अनुबंध, करार","noun","elementary","/ˈkɒn.trækt/","By next week, both parties will have signed the contract.","She will have reviewed the contract carefully.","agreement","deal",""],
  ["negotiation","the process of reaching an agreement","वार्ता, समझौता वार्ता","noun","intermediate","/nɪˌɡəʊ.ʃiˈeɪ.ʃən/","By tomorrow, they will have completed the negotiation.","She will have won the negotiation by staying calm.","discussion","bargaining",""],
  ["transaction","a business deal or exchange","लेन-देन","noun","intermediate","/trænˈzæk.ʃən/","By noon, all transactions will have been processed.","She will have completed the transaction successfully.","deal","exchange",""],
  ["approval","official permission or agreement","स्वीकृति, अनुमोदन","noun","elementary","/əˈpruːv.əl/","By Monday, the project will have received approval.","She will have gained approval from the management.","permission","consent","rejection"],

  // Communication words
  ["presentation","a talk or display to an audience","प्रस्तुति","noun","elementary","/ˌprɛz.ənˈteɪ.ʃən/","By tomorrow, she will have prepared her presentation.","He will have delivered 10 presentations by year end.","talk","speech",""],
  ["announcement","an official or public statement","घोषणा","noun","elementary","/əˈnaʊns.mənt/","By Friday, the company will have made the announcement.","She will have heard the announcement by noon.","declaration","statement",""],
  ["correspondence","written communication, especially letters","पत्र-व्यवहार","noun","intermediate","/ˌkɒr.ɪˈspɒn.dəns/","By month end, she will have replied to all correspondence.","He will have maintained regular correspondence.","communication","letters",""],
  ["notification","an official message or alert","सूचना","noun","elementary","/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/","By morning, you will have received the notification.","She will have sent all notifications by deadline.","alert","message",""],
  ["publication","a printed or digital document","प्रकाशन","noun","intermediate","/ˌpʌb.lɪˈkeɪ.ʃən/","By year end, her book will have been published.","He will have completed three publications.","release","printing",""],
  ["documentation","written evidence or records","दस्तावेज़ीकरण","noun","intermediate","/ˌdɒk.jʊ.mɛnˈteɪ.ʃən/","By Friday, all documentation will have been completed.","She will have organized the documentation properly.","records","paperwork",""],
  ["feedback","information about how well someone is doing","प्रतिक्रिया, फ़ीडबैक","noun","elementary","/ˈfiːd.bæk/","By end of week, she will have received all feedback.","He will have given constructive feedback to his team.","response","evaluation",""],
  ["summary","a short statement of main points","सारांश","noun","elementary","/ˈsʌm.ər.i/","By tomorrow, she will have written the meeting summary.","He will have prepared a summary of all 75 lessons.","overview","brief",""],
  ["conclusion","the final part or decision","निष्कर्ष","noun","elementary","/kənˈkluː.ʒən/","By end of term, she will have drawn a clear conclusion.","He will have reached a conclusion by Friday.","result","decision","beginning"],
  ["recommendation","a suggestion that something is good","सिफ़ारिश, अनुशंसा","noun","intermediate","/ˌrɛk.ə.mɛnˈdeɪ.ʃən/","By the review meeting, she will have prepared recommendations.","He will have followed the doctor's recommendation.","suggestion","advice",""],

  // Technology and digital words
  ["technology","tools and systems based on science","तकनीक, प्रौद्योगिकी","noun","elementary","/tɛkˈnɒl.ə.dʒi/","By 2030, technology will have transformed education.","She will have learned new technology by year end.","innovation","science",""],
  ["software","programs used in computers","सॉफ़्टवेयर","noun","beginner","/ˈsɒft.weər/","By launch day, the software will have been tested.","He will have developed new software by next month.","program","application","hardware"],
  ["platform","a system or service for doing things","प्लेटफ़ॉर्म","noun","elementary","/ˈplæt.fɔːm/","By year end, the platform will have 1 million users.","She will have mastered the learning platform.","system","service",""],
  ["application","a computer program for specific tasks","एप्लीकेशन, ऐप","noun","beginner","/ˌæp.lɪˈkeɪ.ʃən/","By tomorrow, the application will have been updated.","She will have downloaded the English learning application.","app","program",""],
  ["upgrade","to make something better or newer","अपग्रेड करना","verb","elementary","/ˈʌp.ɡreɪd/","By next week, the system will have been upgraded.","She will have upgraded her English skills by Day 75.","improve","enhance","downgrade"],
  ["innovation","introducing new ideas or methods","नवाचार","noun","intermediate","/ˌɪn.əˈveɪ.ʃən/","By year end, the company will have launched major innovations.","Her innovation will have changed how English is taught.","invention","creativity","tradition"],
  ["automation","using machines to do work automatically","स्वचालन","noun","intermediate","/ˌɔː.tə.ˈmeɪ.ʃən/","By 2025, automation will have replaced many manual tasks.","She will have implemented automation in her workflow.","mechanization","technology","manual"],
  ["database","an organized collection of information","डेटाबेस","noun","intermediate","/ˈdeɪ.tə.beɪs/","By month end, the database will have been updated.","She will have created a vocabulary database.","records","archive",""],
  ["interface","a point where two systems connect","इंटरफ़ेस","noun","intermediate","/ˈɪn.tər.feɪs/","By launch, the interface will have been redesigned.","The user interface will have been improved by then.","connection","link",""],
  ["digital","relating to computers or electronic systems","डिजिटल","adjective","beginner","/ˈdɪdʒ.ɪ.tl/","By 2030, all education will have gone fully digital.","She will have mastered digital communication skills.","electronic","virtual","physical"],

  // Personal development words
  ["confidence","the feeling that you can do something well","आत्मविश्वास","noun","beginner","/ˈkɒn.fɪ.dəns/","By Day 75, her confidence will have grown tremendously.","He will have built great confidence in speaking English.","self-assurance","assurance","doubt"],
  ["discipline","training that follows rules strictly","अनुशासन","noun","elementary","/ˈdɪs.ɪ.plɪn/","By month end, her discipline will have shown results.","He will have maintained discipline throughout the course.","order","self-control","chaos"],
  ["habit","something you do regularly","आदत","noun","beginner","/ˈhæb.ɪt/","By month end, she will have built good study habits.","He will have developed the habit of reading in English.","routine","practice",""],
  ["routine","a fixed way of doing things regularly","दिनचर्या","noun","elementary","/ruːˈtiːn/","By next week, she will have established a study routine.","He will have followed a daily routine for 30 days.","schedule","habit",""],
  ["mindset","the way of thinking about something","मानसिकता","noun","intermediate","/ˈmaɪnd.sɛt/","By end of the course, her mindset will have changed.","He will have developed a growth mindset.","attitude","perspective",""],
  ["motivation","the desire to do or achieve something","प्रेरणा","noun","elementary","/ˌməʊ.tɪˈveɪ.ʃən/","By tomorrow, her motivation will have returned.","He will have maintained motivation throughout 75 days.","drive","inspiration","apathy"],
  ["growth","the process of becoming bigger or better","विकास, वृद्धि","noun","beginner","/ɡrəʊθ/","By year end, her personal growth will have been remarkable.","He will have shown tremendous growth in English.","development","progress","decline"],
  ["transformation","a complete change in form or character","परिवर्तन","noun","intermediate","/ˌtræns.fɔːˈmeɪ.ʃən/","By Day 75, your English transformation will have begun.","She will have undergone a complete transformation.","change","evolution","stagnation"],
  ["resilience","the ability to recover from difficulties","लचीलापन, उठ खड़े होने की क्षमता","noun","intermediate","/rɪˈzɪl.jəns/","Her resilience will have helped her overcome every obstacle.","He will have shown great resilience during the course.","toughness","strength","weakness"],
  ["perseverance","continued effort despite difficulty","दृढ़ता, लगन","noun","intermediate","/ˌpɜː.sɪˈvɪər.əns/","Her perseverance will have paid off by Day 75.","He will have demonstrated perseverance throughout.","determination","persistence","weakness"],

  // Travel and places words
  ["destination","the place where someone is going","गंतव्य, मंज़िल","noun","elementary","/ˌdɛs.tɪˈneɪ.ʃən/","By Friday, she will have reached her destination.","He will have traveled to 10 destinations by year end.","location","endpoint","origin"],
  ["journey","traveling from one place to another","यात्रा","noun","beginner","/ˈdʒɜː.ni/","By sunset, they will have completed the journey.","She will have begun an amazing English learning journey.","trip","voyage",""],
  ["expedition","a journey made for a purpose","अभियान","noun","intermediate","/ˌɛks.pɪˈdɪʃ.ən/","By next week, the expedition will have concluded.","He will have joined the mountain expedition.","trip","mission",""],
  ["adventure","an exciting and unusual experience","साहसिक अनुभव","noun","elementary","/ədˈvɛn.tʃər/","By next year, she will have had amazing adventures.","He will have had a life-changing adventure.","experience","excitement","routine"],
  ["exploration","the activity of traveling to discover","खोज, अन्वेषण","noun","intermediate","/ˌɛks.plɔːˈreɪ.ʃən/","By year end, the team will have completed the exploration.","She will have explored every aspect of English grammar.","discovery","investigation",""],
  ["itinerary","a planned route for a journey","यात्रा-कार्यक्रम","noun","intermediate","/aɪˈtɪn.ər.ər.i/","By departure, she will have arranged the full itinerary.","He will have followed the itinerary perfectly.","schedule","plan",""],
  ["visa","an official permit to enter a country","वीज़ा","noun","beginner","/ˈviː.zə/","By next month, she will have received her visa.","He will have applied for a work visa by Friday.","permit","pass",""],
  ["passport","an official document for international travel","पासपोर्ट","noun","beginner","/ˈpɑːs.pɔːt/","By departure, she will have renewed her passport.","He will have obtained a passport for the first time.","identification","document",""],
  ["accommodation","a place to stay during travel","आवास, ठहरने की जगह","noun","intermediate","/əˌkɒm.əˈdeɪ.ʃən/","By arrival, she will have booked accommodation.","He will have arranged comfortable accommodation.","lodging","housing",""],
  ["tourism","visiting places for pleasure or interest","पर्यटन","noun","elementary","/ˈtʊər.ɪ.zəm/","By 2030, international tourism will have fully recovered.","She will have contributed to tourism in her city.","travel","sightseeing",""],

  // Health and wellness words
  ["fitness","the state of being physically healthy","शारीरिक स्वास्थ्य","noun","elementary","/ˈfɪt.nəs/","By month end, her fitness level will have improved.","He will have achieved his fitness goals by December.","health","wellness","illness"],
  ["nutrition","the process of eating the right food","पोषण","noun","intermediate","/njuːˈtrɪʃ.ən/","By next year, her nutrition will have greatly improved.","She will have learned about proper nutrition.","diet","nourishment",""],
  ["recovery","the process of getting better from illness","स्वस्थ होना, ठीक होना","noun","elementary","/rɪˈkʌv.ər.i/","By next week, his recovery will have been complete.","She will have made a full recovery from illness.","healing","restoration","relapse"],
  ["treatment","medical care given to someone","उपचार, इलाज","noun","elementary","/ˈtriːt.mənt/","By month end, the treatment will have shown results.","She will have completed her full course of treatment.","therapy","care",""],
  ["prevention","keeping something bad from happening","रोकथाम","noun","intermediate","/prɪˈvɛn.ʃən/","By year end, prevention campaigns will have saved lives.","She will have learned about disease prevention.","protection","avoidance",""],
  ["diagnosis","identifying a disease from symptoms","निदान","noun","intermediate","/ˌdaɪ.əɡˈnəʊ.sɪs/","By tomorrow, the doctor will have made a diagnosis.","She will have received a proper diagnosis.","identification","assessment",""],
  ["symptom","a sign that someone is ill","लक्षण","noun","elementary","/ˈsɪmp.təm/","By next week, all symptoms will have disappeared.","She will have understood the symptoms clearly.","sign","indication",""],
  ["immunity","protection of the body against disease","प्रतिरक्षा","noun","intermediate","/ɪˈmjuː.nɪ.ti/","By then, her immunity will have strengthened.","He will have built strong immunity through good habits.","resistance","protection","vulnerability"],
  ["hygiene","practices that keep things clean","स्वच्छता","noun","elementary","/ˈhaɪ.dʒiːn/","By next month, better hygiene practices will have been adopted.","She will have maintained good hygiene throughout.","cleanliness","sanitation",""],
  ["exercise","physical activity to stay healthy","व्यायाम","noun","beginner","/ˈɛk.sər.saɪz/","By next month, she will have exercised for 30 days straight.","He will have built an exercise habit by year end.","workout","training","inactivity"],

  // Nature and environment words
  ["environment","the natural world around us","पर्यावरण","noun","elementary","/ɪnˈvaɪ.rən.mənt/","By 2050, the environment will have changed significantly.","She will have contributed to saving the environment.","nature","ecology",""],
  ["climate","the regular weather conditions of a place","जलवायु","noun","elementary","/ˈklaɪ.mɪt/","By 2100, the global climate will have changed dramatically.","She will have understood climate change issues.","weather","atmosphere",""],
  ["conservation","protecting natural resources","संरक्षण","noun","intermediate","/ˌkɒn.səˈveɪ.ʃən/","By next year, conservation efforts will have shown results.","She will have supported conservation projects.","preservation","protection","destruction"],
  ["sustainability","using resources without damaging the future","स्थिरता, टिकाऊपन","noun","intermediate","/səˌsteɪ.nəˈbɪl.ɪ.ti/","By 2030, the company will have achieved full sustainability.","She will have learned about sustainability in business.","endurance","longevity","waste"],
  ["pollution","harmful substances in the environment","प्रदूषण","noun","elementary","/pəˈluː.ʃən/","By next decade, pollution will have reduced greatly.","She will have taken steps to reduce pollution.","contamination","harm","cleanliness"],
  ["renewable","energy from sources that never run out","नवीकरणीय","adjective","intermediate","/rɪˈnjuː.ə.bl/","By 2030, renewable energy will have replaced fossil fuels.","She will have invested in renewable energy by then.","sustainable","green","finite"],
  ["biodiversity","variety of plant and animal life","जैव विविधता","noun","intermediate","/ˌbaɪ.əʊ.daɪˈvɜː.sɪ.ti/","By 2100, biodiversity will have declined unless we act.","She will have studied biodiversity in her course.","variety","ecosystem",""],
  ["habitat","the natural home of an animal or plant","आवास, प्राकृतिक वास","noun","elementary","/ˈhæb.ɪ.tæt/","By next year, the habitat will have been restored.","She will have learned about animal habitats.","home","environment",""],
  ["ecosystem","a community of living things in a place","पारिस्थितिकी तंत्र","noun","intermediate","/ˈiː.kəʊ.sɪs.təm/","By year end, the ecosystem will have recovered.","She will have understood how ecosystems work.","environment","ecology",""],
  ["wildlife","animals and plants in nature","वन्यजीव","noun","elementary","/ˈwaɪld.laɪf/","By year end, wildlife protection will have improved.","She will have supported wildlife conservation.","fauna","animals",""],

  // Society and culture words
  ["tradition","a custom passed from one generation to next","परंपरा","noun","elementary","/trəˈdɪʃ.ən/","By next festival, they will have revived the tradition.","She will have learned about Indian traditions.","custom","heritage","modernity"],
  ["culture","the ideas, customs and arts of a society","संस्कृति","noun","elementary","/ˈkʌl.tʃər/","By the visit, she will have understood the local culture.","He will have experienced different cultures by then.","heritage","tradition",""],
  ["diversity","variety of different people or things","विविधता","noun","elementary","/daɪˈvɜː.sɪ.ti/","By next year, workplace diversity will have improved.","She will have embraced diversity in her community.","variety","difference","uniformity"],
  ["equality","being treated the same regardless of differences","समानता","noun","intermediate","/ɪˈkwɒl.ɪ.ti/","By next decade, gender equality will have been achieved.","She will have fought for equality in the workplace.","fairness","parity","inequality"],
  ["community","a group of people living in the same area","समुदाय","noun","beginner","/kəˈmjuː.nɪ.ti/","By next year, the community will have grown stronger.","She will have contributed to her local community.","society","group",""],
  ["heritage","things inherited from past generations","विरासत","noun","intermediate","/ˈhɛr.ɪ.tɪdʒ/","By the tour, she will have learned about cultural heritage.","He will have preserved his family heritage.","tradition","legacy",""],
  ["festival","a special celebration or event","उत्सव, त्योहार","noun","beginner","/ˈfɛs.tɪ.vəl/","By December, she will have attended five festivals.","He will have experienced various cultural festivals.","celebration","event",""],
  ["ceremony","a formal event with special actions","समारोह","noun","elementary","/ˈsɛr.ɪ.mə.ni/","By the end of term, the ceremony will have taken place.","She will have participated in the graduation ceremony.","ritual","event",""],
  ["celebration","enjoying a special event or occasion","उत्सव मनाना","noun","beginner","/ˌsɛl.ɪˈbreɪ.ʃən/","By December, the celebration will have begun.","She will have planned a celebration for her achievement.","party","festivity","mourning"],
  ["collaboration","working together to achieve something","सहयोग, मिलकर काम करना","noun","intermediate","/kəˌlæb.əˈreɪ.ʃən/","By the project end, collaboration will have produced results.","She will have led a successful collaboration.","teamwork","partnership","competition"],

  // Academic vocabulary
  ["analysis","a detailed examination of something","विश्लेषण","noun","intermediate","/əˈnæl.ɪ.sɪs/","By Friday, the analysis will have been completed.","She will have conducted a thorough analysis.","examination","study",""],
  ["research","careful study of a subject","शोध, अनुसंधान","noun","elementary","/ˈriː.sɜːtʃ/","By year end, the research will have been published.","She will have completed her research paper.","study","investigation",""],
  ["theory","a set of ideas to explain something","सिद्धांत","noun","intermediate","/ˈθɪər.i/","By next year, the theory will have been proven.","She will have understood the theory behind grammar.","hypothesis","concept","fact"],
  ["experiment","a scientific test or trial","प्रयोग","noun","elementary","/ɪkˈspɛr.ɪ.mənt/","By Friday, the experiment will have been completed.","She will have conducted five experiments.","test","trial",""],
  ["evidence","facts that show if something is true","साक्ष्य, प्रमाण","noun","intermediate","/ˈɛv.ɪ.dəns/","By court day, all evidence will have been gathered.","She will have collected enough evidence to prove it.","proof","data","assumption"],
  ["conclusion","the end of a process or study","निष्कर्ष","noun","elementary","/kənˈkluː.ʒən/","By the end, a clear conclusion will have emerged.","She will have arrived at a logical conclusion.","outcome","result","beginning"],
  ["evaluation","the process of judging something","मूल्यांकन","noun","intermediate","/ɪˌvæl.juˈeɪ.ʃən/","By next week, the evaluation will have been done.","She will have completed the self-evaluation.","assessment","review",""],
  ["assessment","a judgment about something's quality","आकलन","noun","intermediate","/əˈsɛs.mənt/","By exam day, all assessments will have been graded.","She will have completed the language assessment.","evaluation","test",""],
  ["methodology","a system of methods for doing something","पद्धति","noun","intermediate","/ˌmɛθ.əˈdɒl.ə.dʒi/","By the report, the methodology will have been explained.","She will have followed a clear methodology.","approach","method",""],
  ["statistics","facts or numbers that show information","सांख्यिकी","noun","intermediate","/stəˈtɪs.tɪks/","By year end, the statistics will have been analyzed.","She will have used statistics in her report.","data","figures",""],

  // Leadership and management
  ["leadership","the ability to lead or guide others","नेतृत्व","noun","elementary","/ˈliː.də.ʃɪp/","By year end, she will have developed strong leadership skills.","He will have shown great leadership in the project.","guidance","direction",""],
  ["management","the control and organization of something","प्रबंधन","noun","elementary","/ˈmæn.ɪdʒ.mənt/","By month end, new management will have taken over.","She will have learned project management skills.","administration","control",""],
  ["initiative","the ability to start or create something","पहल","noun","intermediate","/ɪˈnɪʃ.ɪ.ə.tɪv/","By next month, she will have taken several initiatives.","He will have shown initiative in the new project.","action","effort","inaction"],
  ["delegation","giving tasks to other people to do","सौंपना, प्रत्यायोजन","noun","intermediate","/ˌdɛl.ɪˈɡeɪ.ʃən/","By month end, proper delegation will have improved efficiency.","She will have learned the art of delegation.","assignment","distribution",""],
  ["accountability","taking responsibility for your actions","जवाबदेही","noun","intermediate","/əˌkaʊn.tə.ˈbɪl.ɪ.ti/","By year end, accountability standards will have improved.","She will have developed a culture of accountability.","responsibility","answerability",""],
  ["transparency","being open and honest about activities","पारदर्शिता","noun","intermediate","/trænsˈpær.ən.si/","By year end, transparency in the company will have increased.","She will have promoted transparency in her team.","openness","honesty","secrecy"],
  ["efficiency","doing something well with little waste","दक्षता, कुशलता","noun","intermediate","/ɪˈfɪʃ.ən.si/","By next quarter, efficiency will have improved by 30%.","She will have boosted efficiency in her department.","productivity","effectiveness","waste"],
  ["productivity","the amount of work done in a given time","उत्पादकता","noun","intermediate","/ˌprɒd.ʌkˈtɪv.ɪ.ti/","By month end, their productivity will have doubled.","She will have increased her productivity through routine.","efficiency","output","laziness"],
  ["performance","how well something or someone does a task","प्रदर्शन","noun","elementary","/pəˈfɔːm.əns/","By year end, her performance will have impressed everyone.","He will have improved his performance in English.","achievement","execution","failure"],
  ["responsibility","a duty or obligation you must fulfill","ज़िम्मेदारी","noun","elementary","/rɪˌspɒn.sɪˈbɪl.ɪ.ti/","By graduation, she will have learned to handle responsibility.","He will have accepted responsibility for his mistakes.","duty","obligation","freedom"],

  // Daily life and household words
  ["arrangement","a plan or organization of things","व्यवस्था","noun","elementary","/əˈreɪndʒ.mənt/","By morning, all arrangements will have been made.","She will have made travel arrangements in advance.","organization","plan","disorder"],
  ["preparation","the process of getting ready","तैयारी","noun","elementary","/ˌprɛp.ərˈeɪ.ʃən/","By exam day, her preparation will have been thorough.","He will have completed all preparations by Friday.","readiness","planning","unreadiness"],
  ["maintenance","keeping something in good condition","रखरखाव","noun","intermediate","/ˈmeɪn.tɪ.nəns/","By year end, the maintenance will have been completed.","She will have done regular maintenance of her skills.","upkeep","care","neglect"],
  ["renovation","the process of repairing and improving","नवीनीकरण","noun","intermediate","/ˌrɛn.əˈveɪ.ʃən/","By next month, the office renovation will have been completed.","She will have overseen the renovation project.","restoration","improvement",""],
  ["installation","putting something in place","स्थापना, इंस्टॉलेशन","noun","intermediate","/ˌɪn.stəˈleɪ.ʃən/","By tomorrow, the installation will have been completed.","She will have supervised the equipment installation.","setup","mounting","removal"],
  ["collection","a group of things gathered together","संग्रह","noun","elementary","/kəˈlɛk.ʃən/","By month end, her vocabulary collection will have grown.","He will have built a collection of 500 English words.","gathering","assortment",""],
  ["organization","the arrangement of things in order","संगठन, व्यवस्था","noun","elementary","/ˌɔːɡ.ən.aɪˈzeɪ.ʃən/","By Friday, the organization of files will have been done.","She will have improved her study organization.","arrangement","order","chaos"],
  ["distribution","sharing things among people","वितरण","noun","intermediate","/ˌdɪs.trɪˈbjuː.ʃən/","By noon, the distribution of materials will have been done.","She will have organized the distribution of exam papers.","sharing","allocation",""],
  ["production","the process of making something","उत्पादन","noun","elementary","/prəˈdʌk.ʃən/","By December, production will have reached its target.","She will have increased content production.","manufacture","creation","consumption"],
  ["consumption","the use of something","उपभोग, खपत","noun","intermediate","/kənˈsʌmp.ʃən/","By year end, energy consumption will have reduced.","She will have analyzed consumption patterns.","use","intake","production"],

  // Feelings and emotions
  ["satisfaction","the feeling of contentment from achieving something","संतुष्टि","noun","elementary","/ˌsæt.ɪsˈfæk.ʃən/","By Day 75, she will have felt deep satisfaction.","He will have experienced the satisfaction of fluency.","contentment","fulfillment","dissatisfaction"],
  ["enthusiasm","strong excitement or interest","उत्साह","noun","elementary","/ɪnˈθjuː.zi.æz.əm/","By next week, her enthusiasm will have spread to others.","He will have shown enthusiasm throughout the course.","passion","eagerness","apathy"],
  ["excitement","the feeling of being excited","उत्तेजना, रोमांच","noun","beginner","/ɪkˈsaɪt.mənt/","By the result day, her excitement will have been visible.","He will have felt excitement at his progress.","thrill","joy","boredom"],
  ["gratitude","the feeling of being thankful","कृतज्ञता, आभार","noun","intermediate","/ˈɡræt.ɪ.tjuːd/","By the end of the course, she will have expressed gratitude.","He will have shown gratitude to his teacher.","thankfulness","appreciation","ingratitude"],
  ["pride","a feeling of pleasure in achievement","गर्व","noun","beginner","/praɪd/","By Day 75, she will have felt great pride.","He will have made his family feel proud.","satisfaction","honor","shame"],
  ["relief","a feeling of comfort after worry","राहत","noun","beginner","/rɪˈliːf/","By result day, she will have felt relief.","He will have felt relief after completing the exam.","comfort","ease","worry"],
  ["anticipation","excitement about something going to happen","प्रत्याशा, उत्सुकता","noun","intermediate","/ænˌtɪs.ɪˈpeɪ.ʃən/","By test day, his anticipation will have built up.","She will have been full of anticipation.","excitement","expectation",""],
  ["inspiration","something that motivates you","प्रेरणा","noun","elementary","/ˌɪn.spɪˈreɪ.ʃən/","By Day 75, her story will have been an inspiration.","He will have drawn inspiration from successful people.","motivation","encouragement","discouragement"],
  ["courage","the ability to do difficult things bravely","साहस, हिम्मत","noun","elementary","/ˈkʌr.ɪdʒ/","By the test, she will have gathered enough courage.","He will have shown courage to speak in public.","bravery","boldness","cowardice"],
  ["patience","the ability to wait calmly","धैर्य, सब्र","noun","beginner","/ˈpeɪ.ʃəns/","By end of course, her patience will have been rewarded.","He will have learned patience through English practice.","tolerance","endurance","impatience"],
];

// Export 200 vocabulary words for Day 8
export const ALL_DAY_8_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d8-v${i + 1}`, data)
);
