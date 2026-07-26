// ============================================================
// Day 11 Vocabulary — USE OF WANT (Want to, Want someone to do)
// Topic: Desires, wishes, ambitions, needs, aspirations
// 200 unique words not used in Days 1-10
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `"${word}" expresses a desire or want in English.`,
    example4: `I want to learn how to use "${word}" in daily conversation.`,
    example5: `She wants her students to understand the meaning of "${word}".`,
    officeExample: `The manager wants employees to use "${word}" appropriately at work.`,
    dailyExample: `Everyone wants to know how to use "${word}" correctly.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

const WORDS: W[] = [
  // Desire and wish words
  ["crave","to have a very strong desire for something","तीव्र इच्छा करना","verb","intermediate","/kreɪv/","She craves success in her career.","He craves to speak English without mistakes.","desire","yearn","dislike"],
  ["yearn","to have a deep longing for something","तड़पना, लालसा रखना","verb","intermediate","/jɜːn/","She yearns to travel abroad and use English.","He yearns for a better future.","long for","desire","dislike"],
  ["longing","a feeling of wanting something very much","लालसा, तड़प","noun","intermediate","/ˈlɒŋ.ɪŋ/","She has a longing to see her family.","His longing for English fluency motivates him.","desire","yearning","contentment"],
  ["urge","a strong impulse or desire","इच्छा, प्रेरणा","noun","elementary","/ɜːdʒ/","She felt an urge to speak in English immediately.","He had an urge to read more books.","impulse","drive","reluctance"],
  ["appetite","a strong desire or eagerness for something","रुचि, भूख","noun","intermediate","/ˈæp.ɪ.taɪt/","She has a great appetite for learning.","His appetite for knowledge is impressive.","desire","hunger","disinterest"],
  ["passion","a very strong feeling about something","जुनून, उत्साह","noun","elementary","/ˈpæʃ.ən/","She has a passion for learning English.","His passion for reading helps him learn fast.","enthusiasm","love","indifference"],
  ["preference","a greater liking for one thing over another","प्राथमिकता, पसंद","noun","elementary","/ˈprɛf.ər.əns/","Her preference is to practice speaking daily.","He has a preference for online learning.","choice","liking","dislike"],
  ["inclination","a tendency to do something","झुकाव, रुझान","noun","intermediate","/ˌɪn.klɪˈneɪ.ʃən/","She has an inclination toward public speaking.","His inclination is to read rather than write.","tendency","leaning","aversion"],
  ["desire","a strong wish to have or do something","इच्छा, चाहत","noun","beginner","/dɪˈzaɪər/","She has a strong desire to speak perfect English.","His desire to improve never stopped.","wish","longing","aversion"],
  ["wish","a hope or desire for something","इच्छा, कामना","noun","beginner","/wɪʃ/","Her wish is to work in an international company.","He made a wish to become fluent in English.","desire","hope",""],

  // Goal and achievement words
  ["strive","to try very hard to achieve something","प्रयत्न करना, कोशिश करना","verb","intermediate","/straɪv/","She strives to improve her English every day.","He strives for perfection in his writing.","try hard","endeavor","give up"],
  ["pursue","to follow or try to achieve something","पीछे लगना, प्रयास करना","verb","intermediate","/pəˈsjuː/","She pursues her goal of speaking fluent English.","He wants to pursue a career in teaching.","follow","chase","abandon"],
  ["intend","to plan to do something","इरादा रखना, मंशा रखना","verb","elementary","/ɪnˈtɛnd/","She intends to complete all 75 days.","He intends to apply for an English teaching job.","plan","mean","ignore"],
  ["resolve","to decide firmly to do something","दृढ़ निश्चय करना","verb","intermediate","/rɪˈzɒlv/","She resolved to practice English every single day.","He resolved never to give up on his dream.","determine","decide","waver"],
  ["commit","to dedicate yourself to something","प्रतिबद्ध होना","verb","intermediate","/kəˈmɪt/","She committed to studying English for one hour daily.","He committed to finishing all 75 lessons.","dedicate","pledge","ignore"],
  ["dedicate","to give time and energy to something","समर्पित करना","verb","elementary","/ˈdɛd.ɪ.keɪt/","She dedicated her mornings to English practice.","He dedicated his weekends to vocabulary building.","devote","commit","neglect"],
  ["devote","to give completely to a purpose","समर्पित करना","verb","intermediate","/dɪˈvəʊt/","She devotes two hours daily to English learning.","He devoted his energy to mastering grammar.","dedicate","commit","neglect"],
  ["plan","to decide in advance what to do","योजना बनाना","verb","beginner","/plæn/","She plans to speak only English at work.","He plans to read one English article per day.","intend","arrange","improvise"],
  ["aim","to have a particular goal","लक्ष्य करना","verb","beginner","/eɪm/","She aims to speak English without hesitation.","He aims to complete the course in 75 days.","target","intend","ignore"],
  ["target","to direct effort at something specific","निशाना लगाना","verb","elementary","/ˈtɑːɡ.ɪt/","She targets improving her accent this week.","He targets learning 10 new words daily.","aim","focus","ignore"],

  // Needs and requirements
  ["necessity","something that is essential","आवश्यकता","noun","intermediate","/nɪˈsɛs.ɪ.ti/","English is a necessity in today's job market.","She recognized the necessity of daily practice.","requirement","essential","luxury"],
  ["requirement","something that is needed","आवश्यकता, शर्त","noun","elementary","/rɪˈkwaɪər.mənt/","Good English is a requirement for the job.","She fulfilled all requirements of the course.","need","prerequisite","option"],
  ["essential","absolutely necessary","अत्यावश्यक, ज़रूरी","adjective","elementary","/ɪˈsɛn.ʃəl/","Practice is essential for learning English.","It is essential to revise every day.","necessary","vital","unnecessary"],
  ["vital","extremely important and necessary","महत्वपूर्ण, अत्यावश्यक","adjective","intermediate","/ˈvaɪ.tl/","Speaking practice is vital for fluency.","It is vital to correct your own mistakes.","crucial","essential","unimportant"],
  ["crucial","extremely important for success","निर्णायक, बेहद ज़रूरी","adjective","intermediate","/ˈkruː.ʃəl/","Daily practice is crucial for language learning.","It is crucial to read in English every day.","critical","key","trivial"],
  ["mandatory","required by rule or law","अनिवार्य","adjective","intermediate","/ˈmæn.də.tər.i/","Attendance is mandatory for the revision class.","It is mandatory to submit homework on time.","compulsory","required","optional"],
  ["compulsory","required and not optional","अनिवार्य","adjective","intermediate","/kəmˈpʌl.sər.i/","English grammar is compulsory in the curriculum.","Practice tests are compulsory for all students.","mandatory","necessary","optional"],
  ["optional","not required but possible to choose","वैकल्पिक","adjective","elementary","/ˈɒp.ʃən.əl/","The speaking lab is optional but recommended.","She chose the optional vocabulary module.","voluntary","elective","mandatory"],
  ["voluntary","done willingly without being forced","स्वैच्छिक","adjective","elementary","/ˈvɒl.ən.tər.i/","She does voluntary English practice on weekends.","His participation was voluntary but committed.","willing","optional","forced"],
  ["beneficial","having a good or helpful effect","लाभदायक","adjective","elementary","/ˌbɛn.ɪˈfɪʃ.əl/","English is beneficial for your career.","Daily revision is beneficial for long-term retention.","helpful","advantageous","harmful"],

  // Emotion and feeling words (want-related)
  ["eager","having a strong desire to do something","उत्सुक, बेताब","adjective","elementary","/ˈiː.ɡər/","She is eager to start speaking English daily.","He was eager to know his test results.","keen","enthusiastic","reluctant"],
  ["keen","very interested in doing something","उत्साही, रुचि रखने वाला","adjective","elementary","/kiːn/","She is keen to improve her English accent.","He is keen on learning new words each day.","eager","enthusiastic","indifferent"],
  ["enthusiastic","having a lot of interest and energy","उत्साही","adjective","elementary","/ɪnˌθjuː.ziˈæs.tɪk/","She is enthusiastic about every English lesson.","He is enthusiastic about the speaking test.","eager","excited","bored"],
  ["passionate","having a very strong feeling about something","उत्साहपूर्ण, जुनूनी","adjective","intermediate","/ˈpæʃ.ən.ɪt/","She is passionate about English literature.","He is passionate about teaching others.","enthusiastic","fervent","indifferent"],
  ["determined","having a firm decision to do something","दृढ़ निश्चयी","adjective","elementary","/dɪˈtɜː.mɪnd/","She is determined to complete all 75 days.","He was determined to pass the English exam.","resolute","firm","uncertain"],
  ["driven","having strong motivation to succeed","महत्वाकांक्षी, प्रेरित","adjective","elementary","/ˈdrɪv.ən/","She is a driven student who studies every day.","He is driven by his desire to get a better job.","motivated","ambitious","lazy"],
  ["ambitious","wanting to achieve a lot","महत्वाकांक्षी","adjective","intermediate","/æmˈbɪʃ.əs/","She is ambitious about reaching the C2 level.","Ambitious students learn languages faster.","driven","aspiring","content"],
  ["willing","happy to do something","तैयार, इच्छुक","adjective","beginner","/ˈwɪl.ɪŋ/","She is willing to practice English every day.","He is willing to help his classmates.","ready","prepared","reluctant"],
  ["ready","prepared and able to do something","तैयार","adjective","beginner","/ˈrɛd.i/","She is ready to take on new grammar challenges.","He is ready to speak English with strangers.","prepared","willing","unprepared"],
  ["motivated","feeling eager to do something","प्रेरित","adjective","elementary","/ˈməʊ.tɪ.veɪ.tɪd/","Stay motivated throughout your 75-day journey.","A motivated student learns twice as fast.","inspired","enthusiastic","lazy"],

  // Choices and decisions
  ["choose","to select from available options","चुनना","verb","beginner","/tʃuːz/","She wants to choose the right English course.","He chose to speak in English at every meeting.","select","pick","ignore"],
  ["select","to carefully choose something","चुनना, चयन करना","verb","elementary","/sɪˈlɛkt/","She selected the vocabulary she wanted to learn.","He selected the most useful grammar exercises.","choose","pick","reject"],
  ["prefer","to like one thing more than another","पसंद करना","verb","elementary","/prɪˈfɜːr/","She prefers to practice speaking over writing.","He prefers listening to podcasts in English.","favor","like","dislike"],
  ["decide","to make a choice after thinking","निर्णय लेना","verb","beginner","/dɪˈsaɪd/","She decided to spend one hour on English each day.","He decided to focus on grammar first.","choose","determine","hesitate"],
  ["consider","to think carefully about something","विचार करना","verb","elementary","/kənˈsɪd.ər/","She considered joining an English speaking club.","He is considering applying for a language course.","think about","contemplate","ignore"],
  ["contemplate","to think deeply about something","गहराई से सोचना","verb","intermediate","/ˈkɒn.tɛm.pleɪt/","She contemplated the best way to improve her accent.","He contemplated joining an English debating club.","ponder","reflect","ignore"],
  ["evaluate","to assess the value of something","मूल्यांकन करना","verb","intermediate","/ɪˈvæl.ju.eɪt/","She evaluated her progress after each lesson.","He evaluated different methods of learning English.","assess","judge","ignore"],
  ["prioritize","to treat something as most important","प्राथमिकता देना","verb","intermediate","/praɪˈɒr.ɪ.taɪz/","She prioritizes speaking practice above all.","He prioritized grammar before moving to vocabulary.","rank","order","ignore"],
  ["elect","to choose something formally","चुनना","verb","intermediate","/ɪˈlɛkt/","She elected to take the advanced English module.","He elected to focus on professional writing.","choose","select","reject"],
  ["opt","to choose from options","चुनना","verb","elementary","/ɒpt/","She opted for the speaking-focused course.","He opted to practice with native speakers online.","choose","decide","reject"],

  // Professional and career aspirations
  ["career","the type of work you do in your life","करियर","noun","beginner","/kəˈrɪər/","She wants a career in international business.","He wants to build a career using English.","profession","vocation","hobby"],
  ["promotion","moving to a better position at work","पदोन्नति","noun","elementary","/prəˈməʊ.ʃən/","She wants to get a promotion by year end.","He worked hard to earn his promotion.","advancement","upgrade","demotion"],
  ["salary","money paid for doing a job","वेतन","noun","beginner","/ˈsæl.ər.i/","She wants a higher salary after learning English.","Good English skills often lead to a better salary.","wage","pay",""],
  ["interview","a formal meeting to test a candidate","साक्षात्कार","noun","beginner","/ˈɪn.tə.vjuː/","She wants to pass her English job interview.","He prepared well for the interview.","meeting","selection",""],
  ["application","a formal request for a job or course","आवेदन","noun","elementary","/ˌæp.lɪˈkeɪ.ʃən/","She submitted her job application in English.","He wrote a strong application letter.","request","form",""],
  ["resume","a document listing work experience","रेज़ूमे","noun","elementary","/ˈrɛz.jʊ.meɪ/","She wants to write a strong English resume.","He updated his resume with new skills.","CV","profile",""],
  ["employer","a company or person who gives work","नियोक्ता","noun","elementary","/ɪmˈplɔɪ.ər/","She wants to impress her employer with English.","He built trust with his employer over time.","boss","company","employee"],
  ["employee","a person who works for a company","कर्मचारी","noun","elementary","/ɪmˈplɔɪ.iː/","She is a dedicated employee who speaks English.","He is the best employee in the department.","worker","staff","employer"],
  ["workplace","the place where people do their jobs","कार्यस्थल","noun","elementary","/ˈwɜːk.pleɪs/","She wants to use English confidently in the workplace.","Good communication is essential in the workplace.","office","job site","home"],
  ["entrepreneur","a person who starts a business","उद्यमी","noun","intermediate","/ˌɒn.trə.prəˈnɜːr/","She wants to become an entrepreneur and needs English.","He became a successful entrepreneur through hard work.","businessman","founder","employee"],

  // Interpersonal and social words
  ["friendship","a relationship between friends","मित्रता, दोस्ती","noun","beginner","/ˈfrɛnd.ʃɪp/","She wants to build friendships with English speakers.","Their friendship grew through English conversations.","companionship","bond","enmity"],
  ["relationship","a connection between people","रिश्ता, संबंध","noun","beginner","/rɪˈleɪ.ʃən.ʃɪp/","She wants to improve her professional relationships.","Good communication builds strong relationships.","connection","bond","distance"],
  ["interaction","communication between people","बातचीत, संपर्क","noun","intermediate","/ˌɪn.tərˈæk.ʃən/","She wants more interaction with English speakers.","Positive interactions build confidence.","communication","exchange","isolation"],
  ["communication","the process of sharing information","संवाद, संचार","noun","beginner","/kəˌmjuː.nɪˈkeɪ.ʃən/","She wants to improve her communication skills.","Effective communication is key to success.","expression","dialogue","silence"],
  ["conversation","talking with another person","बातचीत","noun","beginner","/ˌkɒn.vəˈseɪ.ʃən/","She wants to have longer conversations in English.","He initiated a conversation with his colleague.","talk","dialogue","silence"],
  ["dialogue","a conversation in a story or between people","संवाद","noun","elementary","/ˈdaɪ.ə.lɒɡ/","She practiced the English dialogue from Day 2.","They acted out a workplace dialogue in English.","conversation","exchange","monologue"],
  ["debate","a formal discussion on a topic","वाद-विवाद","noun","elementary","/dɪˈbeɪt/","She wants to participate in English debates.","He won the debate through clear arguments.","discussion","argument","agreement"],
  ["discussion","a conversation on a topic","चर्चा","noun","elementary","/dɪˈskʌʃ.ən/","She wants to join group discussions in English.","He started a discussion about grammar rules.","talk","conversation","silence"],
  ["negotiation","the process of reaching an agreement","वार्ता","noun","intermediate","/nɪˌɡəʊ.ʃiˈeɪ.ʃən/","She wants to improve her negotiation skills.","Good English helps in business negotiations.","bargaining","discussion",""],
  ["presentation","a talk or display given to others","प्रस्तुति","noun","elementary","/ˌprɛz.ənˈteɪ.ʃən/","She wants to give confident English presentations.","His presentation impressed the whole team.","talk","speech",""],

  // Travel and global words
  ["abroad","in or to a foreign country","विदेश में","adverb","elementary","/əˈbrɔːd/","She wants to study abroad and needs English.","He traveled abroad for the first time last year.","overseas","internationally","locally"],
  ["immigration","moving to a new country to live","आव्रजन","noun","intermediate","/ˌɪm.ɪˈɡreɪ.ʃən/","She wants to understand immigration processes in English.","The immigration officer asked questions in English.","migration","settlement",""],
  ["citizenship","the state of being a member of a country","नागरिकता","noun","intermediate","/ˈsɪt.ɪ.zən.ʃɪp/","She wants to apply for citizenship and needs English.","He studied English to prepare for the citizenship test.","nationality","membership",""],
  ["multilingual","able to speak several languages","बहुभाषी","adjective","intermediate","/ˌmʌl.tiˈlɪŋ.ɡwəl/","She wants to become multilingual by learning English.","Multilingual speakers are in high demand.","polyglot","diverse","monolingual"],
  ["global","relating to the whole world","वैश्विक","adjective","elementary","/ˈɡləʊ.bəl/","She wants to participate in global conversations.","English is the global language of business.","worldwide","international","local"],
  ["international","involving more than one country","अंतर्राष्ट्रीय","adjective","elementary","/ˌɪn.tər.ˈnæʃ.ən.əl/","She wants to work for an international company.","He attended an international English conference.","worldwide","global","national"],
  ["culture","the way of life of a group of people","संस्कृति","noun","elementary","/ˈkʌl.tʃər/","She wants to understand English-speaking cultures.","Learning English also means learning the culture.","tradition","heritage",""],
  ["exchange","sharing things with other people","आदान-प्रदान","noun","elementary","/ɪksˈtʃeɪndʒ/","She wants to join a language exchange program.","He did a cultural exchange with an American family.","trade","sharing",""],
  ["connect","to form a link or relationship","जोड़ना, संपर्क करना","verb","beginner","/kəˈnɛkt/","She wants to connect with English speakers online.","English helps you connect with the world.","link","join","disconnect"],
  ["explore","to travel through a new place to learn about it","खोजना, जानना","verb","elementary","/ɪkˈsplɔːr/","She wants to explore the English-speaking world.","He wants to explore new grammar topics each day.","discover","investigate","ignore"],

  // Health and lifestyle words
  ["lifestyle","the way a person lives","जीवनशैली","noun","elementary","/ˈlaɪf.staɪl/","She wants to change her lifestyle to include more English.","A healthy lifestyle includes learning new things daily.","way of life","habits",""],
  ["wellness","the state of being healthy","स्वास्थ्य, भलाई","noun","intermediate","/ˈwɛl.nɪs/","She wants to focus on mental wellness through learning.","Wellness includes mental growth and education.","health","wellbeing","illness"],
  ["balance","an even distribution of things","संतुलन","noun","elementary","/ˈbæl.əns/","She wants to balance work and English study.","He maintained a balance between social life and learning.","equilibrium","proportion","imbalance"],
  ["relaxation","the state of feeling free from tension","विश्राम, आराम","noun","elementary","/ˌriː.lækˈseɪ.ʃən/","She wants relaxation and fun in her English practice.","Relaxation helps the brain absorb new words.","rest","ease","stress"],
  ["recreation","activities done for fun and pleasure","मनोरंजन, मनबहलाव","noun","elementary","/ˌrɛk.riˈeɪ.ʃən/","She wants to make English practice her recreation.","He uses recreation time to watch English films.","enjoyment","leisure","work"],
  ["entertainment","activities that entertain people","मनोरंजन","noun","beginner","/ˌɛn.tərˈteɪn.mənt/","She wants more entertainment in English.","Watching English movies is a form of entertainment.","amusement","fun","boredom"],
  ["leisure","free time when you can relax","फुर्सत का समय","noun","intermediate","/ˈlɛʒ.ər/","She uses her leisure time to practice English.","He reads English books in his leisure time.","free time","downtime","work"],
  ["pleasure","a feeling of happiness or enjoyment","आनंद, खुशी","noun","elementary","/ˈplɛʒ.ər/","She gets great pleasure from speaking English.","Learning brings both pleasure and progress.","joy","delight","pain"],
  ["adventure","an exciting experience","रोमांच","noun","elementary","/ədˈvɛn.tʃər/","She wants to have English-speaking adventures.","Every new English lesson is an adventure.","excitement","experience","routine"],
  ["independence","freedom from control by others","स्वतंत्रता","noun","intermediate","/ˌɪn.dɪˈpɛn.dəns/","She wants independence through mastering English.","English gives her independence in communication.","freedom","autonomy","dependence"],

  // Food preferences and lifestyle
  ["vegetarian","a person who does not eat meat","शाकाहारी","adjective","elementary","/ˌvɛdʒ.ɪˈteər.i.ən/","She wants vegetarian options at the restaurant.","He prefers vegetarian food for health reasons.","plant-based","meatless","carnivore"],
  ["organic","natural, without chemicals","जैविक","adjective","intermediate","/ɔːˈɡæn.ɪk/","She wants to buy organic food from the market.","Organic farming is good for the environment.","natural","pure","chemical"],
  ["sustainable","not causing harm to the environment","टिकाऊ","adjective","intermediate","/səˈsteɪ.nə.bl/","She wants a sustainable lifestyle.","He prefers sustainable brands and products.","eco-friendly","green","harmful"],
  ["preference","liking one thing more than others","पसंद","noun","elementary","/ˈprɛf.ər.əns/","Her preference is for spicy food.","What is your preference for learning style?","liking","choice","dislike"],
  ["appetite","strong desire or interest","भूख, इच्छा","noun","intermediate","/ˈæp.ɪ.taɪt/","She has an appetite for challenging vocabulary.","His appetite for success motivates him.","desire","hunger","disinterest"],
  ["craving","a strong desire for something specific","तीव्र इच्छा","noun","intermediate","/ˈkreɪ.vɪŋ/","She has a craving for English novels.","He felt a craving to speak English everywhere.","longing","desire","dislike"],
  ["taste","personal preference in things","रुचि, पसंद","noun","beginner","/teɪst/","She has good taste in English literature.","His taste in music is quite international.","preference","liking","dislike"],
  ["style","a particular way of doing things","शैली, तरीका","noun","beginner","/staɪl/","She wants to develop her own speaking style.","His teaching style is engaging and modern.","manner","approach",""],
  ["choice","the act of selecting between options","चुनाव","noun","beginner","/tʃɔɪs/","She made the right choice to learn English.","The choice to practice daily changes everything.","selection","option",""],
  ["decision","a choice made after thinking","निर्णय","noun","beginner","/dɪˈsɪʒ.ən/","She made the decision to study English seriously.","His decision to practice daily paid off.","choice","resolution","indecision"],

  // Academic and intellectual words
  ["intellectual","relating to the ability to think and understand","बौद्धिक","adjective","intermediate","/ˌɪn.tɪˈlɛk.tʃu.əl/","She wants to grow intellectually through English.","An intellectual person enjoys challenging conversations.","intelligent","scholarly","dull"],
  ["academic","relating to education and learning","शैक्षिक","adjective","elementary","/ˌæk.əˈdɛm.ɪk/","She wants to improve her academic English.","Academic writing requires formal vocabulary.","scholarly","educational","practical"],
  ["literacy","the ability to read and write","साक्षरता","noun","intermediate","/ˈlɪt.ər.ə.si/","She wants to improve her English literacy skills.","English literacy opens many opportunities.","reading ability","writing skill","illiteracy"],
  ["comprehension","the ability to understand something","समझ, बोध","noun","intermediate","/ˌkɒm.prɪˈhɛn.ʃən/","She wants to improve her reading comprehension.","Good vocabulary helps comprehension skills.","understanding","grasp","confusion"],
  ["critical","relating to careful and detailed analysis","आलोचनात्मक","adjective","intermediate","/ˈkrɪt.ɪ.kəl/","She wants to develop critical thinking in English.","Critical reading skills improve with practice.","analytical","evaluative","uncritical"],
  ["analytical","using analysis to understand","विश्लेषणात्मक","adjective","intermediate","/ˌæn.əˈlɪt.ɪ.kəl/","She wants to develop analytical reading skills.","An analytical approach helps in exams.","logical","systematic","random"],
  ["creative","producing new and original ideas","रचनात्मक","adjective","elementary","/kriˈeɪ.tɪv/","She wants to write creative English stories.","Creative writing is a great way to learn.","imaginative","innovative","ordinary"],
  ["innovative","using new ideas and methods","अभिनव","adjective","intermediate","/ˈɪn.ə.veɪ.tɪv/","She wants to use innovative methods to learn English.","His teaching approach is innovative and effective.","creative","original","traditional"],
  ["curious","wanting to know or learn more","जिज्ञासु","adjective","elementary","/ˈkjʊər.i.əs/","She is curious about English grammar rules.","Be curious and ask questions in every class.","inquisitive","interested","indifferent"],
  ["logical","based on clear reasoning","तार्किक","adjective","elementary","/ˈlɒdʒ.ɪ.kəl/","She uses logical thinking to learn grammar.","A logical approach makes learning easier.","rational","reasonable","illogical"],

  // Technology and digital lifestyle
  ["download","to transfer data to your device","डाउनलोड करना","verb","beginner","/ˈdaʊn.ləʊd/","She wants to download an English learning app.","He downloaded all the vocabulary lists.","install","save","upload"],
  ["upload","to transfer data to the internet","अपलोड करना","verb","elementary","/ˈʌp.ləʊd/","She uploaded her English essay for feedback.","He uploaded his speaking practice recording.","share","post","download"],
  ["subscribe","to sign up for a service","सदस्यता लेना","verb","elementary","/səbˈskraɪb/","She wants to subscribe to an English learning channel.","He subscribed to a podcast to improve listening.","sign up","join","cancel"],
  ["stream","to watch or listen to online media","स्ट्रीम करना","verb","elementary","/striːm/","She wants to stream English TV shows for practice.","He streams English news every morning.","broadcast","play",""],
  ["update","to make something more modern or current","अपडेट करना","verb","beginner","/ˈʌp.deɪt/","She wants to update her English vocabulary regularly.","He updates his grammar notes weekly.","refresh","improve","outdated"],
  ["search","to look for something using a search engine","खोजना","verb","beginner","/sɜːtʃ/","She searches for English words she does not know.","He searched for the meaning of the new word.","look for","find","ignore"],
  ["browse","to look through something casually","ब्राउज़ करना","verb","elementary","/braʊz/","She browses English websites to improve vocabulary.","He browses English content on social media.","look through","explore",""],
  ["connect","to link with others online","जोड़ना","verb","beginner","/kəˈnɛkt/","She wants to connect with English speakers online.","He connected with language partners from England.","link","join","disconnect"],
  ["share","to give information with others","साझा करना","verb","beginner","/ʃɛər/","She wants to share her progress with her teacher.","He shares English vocabulary cards daily.","distribute","exchange","keep"],
  ["interact","to communicate with someone","बातचीत करना","verb","elementary","/ˌɪn.tərˈækt/","She wants to interact more with English speakers.","He interacts with native speakers online.","communicate","engage","isolate"],
];

export const ALL_DAY_11_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d11-v${i + 1}`, data)
);
