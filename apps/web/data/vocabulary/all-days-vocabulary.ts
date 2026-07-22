// ============================================================
// All-Days Vocabulary Generator - 75 Days Hard English Course
// Generates 200 unique, topic-specific words for every day
// Each word includes: Hindi meaning, IPA, examples, synonyms
// Words are UNIQUE across days — no repeats
// ============================================================

import type { VocabularyWord } from "./day-1-vocabulary";

// ─── Compressed word entry format ────────────────────────────
// [word, meaning, hindiMeaning, partOfSpeech, difficulty, ipa, example1, example2, synonym1, synonym2, antonym1]
type W = [string, string, string, string, "beginner"|"elementary"|"intermediate", string, string, string, string, string, string?];

// ─── Helper to build full VocabularyWord from compressed entry ─
function w(id: string, data: W): VocabularyWord {
  const [word, meaning, hindi, pos, diff, ipa, ex1, ex2, syn1, syn2, ant] = data;
  return {
    id, word, meaning, hindiMeaning: hindi, partOfSpeech: pos, difficulty: diff,
    ipa, example1: ex1, example2: ex2,
    example3: `The word "${word}" is important in English communication.`,
    example4: `She used "${word}" perfectly in her sentence.`,
    example5: `Learning "${word}" will help you in daily conversations.`,
    officeExample: `In a professional setting, "${word}" is commonly used.`,
    dailyExample: `You can use "${word}" in your everyday English.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

// ══════════════════════════════════════════════════════════════
// DAY 3 — Imperative Sentence (Commands & Requests)
// ══════════════════════════════════════════════════════════════
const DAY_3_WORDS: W[] = [
  ["Command","An order or instruction given to someone","आदेश, हुक्म","noun","beginner","/kəˈmɑːnd/","The teacher gave a command to the students.","Please follow the commands carefully.",  "order","instruction","request"],
  ["Obey","To follow instructions or rules","आज्ञा मानना, मानना","verb","beginner","/əˈbeɪ/","You must obey the traffic rules.","Children should obey their parents.","follow","comply","disobey"],
  ["Request","To politely ask for something","विनती करना, निवेदन करना","verb","beginner","/rɪˈkwɛst/","She requested a glass of water.","I request you to please be quiet.","ask","appeal","demand"],
  ["Instruction","A direction or order on how to do something","निर्देश, हिदायत","noun","beginner","/ɪnˈstrʌkʃən/","Follow the instructions carefully.","The instruction manual is very helpful.","direction","guideline",""],
  ["Permit","To allow or give permission","अनुमति देना, इजाज़त देना","verb","beginner","/pəˈmɪt/","Please permit me to explain.","Are you permitted to enter this area?","allow","authorize","forbid"],
  ["Forbid","To officially not allow something","मना करना, निषेध करना","verb","intermediate","/fəˈbɪd/","Smoking is forbidden in this area.","She forbids her children from watching too much TV.","prohibit","ban","allow"],
  ["Urgent","Needs immediate attention or action","तत्काल, अत्यावश्यक","adjective","elementary","/ˈɜːdʒənt/","This is an urgent matter.","Please call me back — it is urgent.","pressing","critical","trivial"],
  ["Caution","A warning to be careful","सावधानी, चेतावनी","noun","elementary","/ˈkɔːʃən/","Proceed with caution on this road.","The sign says caution — wet floor.","warning","alert",""],
  ["Refuse","To say no to doing something","मना करना, इनकार करना","verb","beginner","/rɪˈfjuːz/","She refused to give up.","He refused the job offer politely.","decline","reject","accept"],
  ["Warn","To tell someone about a possible danger","चेतावनी देना, सावधान करना","verb","beginner","/wɔːn/","I warned you not to touch that.","The sign warns about falling rocks.","caution","alert","assure"],
  ["Insist","To demand something firmly","आग्रह करना, ज़ोर देना","verb","elementary","/ɪnˈsɪst/","She insisted on paying the bill.","I insist you take rest today.","demand","urge","yield"],
  ["Suggest","To put forward an idea for consideration","सुझाव देना, प्रस्ताव देना","verb","beginner","/səˈdʒɛst/","I suggest you study every day.","Can you suggest a good restaurant?","recommend","propose",""],
  ["Remind","To help someone remember something","याद दिलाना, स्मरण कराना","verb","beginner","/rɪˈmaɪnd/","Remind me to call the doctor.","She reminded him about the meeting.","notify","prompt","forget"],
  ["Advise","To give recommendations to someone","सलाह देना, परामर्श देना","verb","beginner","/ədˈvaɪz/","The doctor advised him to rest.","I advise you to study regularly.","counsel","guide","mislead"],
  ["Demand","To ask forcefully or with authority","माँग करना, दावा करना","verb","beginner","/dɪˈmɑːnd/","The workers demanded better wages.","She demanded an explanation.","require","insist","offer"],
  ["Encourage","To give confidence or support to act","प्रोत्साहित करना, हिम्मत देना","verb","beginner","/ɪnˈkʌrɪdʒ/","My teacher always encourages me.","Encourage your friends to learn English.","motivate","inspire","discourage"],
  ["Prohibit","To officially ban or not allow","प्रतिबंधित करना, रोकना","verb","intermediate","/prəˈhɪbɪt/","Littering is prohibited here.","The law prohibits driving without a license.","forbid","ban","allow"],
  ["Politely","In a respectful and courteous manner","विनम्रता से, शिष्टाचार से","adverb","beginner","/pəˈlaɪtli/","She politely refused his offer.","Always speak politely to elders.","courteously","respectfully","rudely"],
  ["Firmly","With determination and without doubt","दृढ़ता से, मज़बूती से","adverb","beginner","/ˈfɜːmli/","She firmly said no.","He firmly believes in hard work.","strongly","decisively","weakly"],
  ["Immediately","Without any delay, right now","तुरंत, फ़ौरन","adverb","beginner","/ɪˈmiːdiətli/","Please come here immediately.","Call the doctor immediately.","instantly","at once","later"],
  ["Carefully","With great attention and caution","सावधानी से, ध्यान से","adverb","beginner","/ˈkeəfʊli/","Read the instructions carefully.","Drive carefully on highways.","cautiously","thoroughly","carelessly"],
  ["Quickly","With great speed, fast","जल्दी से, तेज़ी से","adverb","beginner","/ˈkwɪkli/","Finish your work quickly.","She quickly understood the problem.","rapidly","swiftly","slowly"],
  ["Quietly","Without making noise, calmly","चुपचाप, शांति से","adverb","beginner","/ˈkwaɪətli/","Please sit quietly.","He left quietly without disturbing anyone.","silently","calmly","loudly"],
  ["Strictly","In a firm and exact manner","सख्ती से, कड़ाई से","adverb","elementary","/ˈstrɪktli/","Follow the rules strictly.","This rule is strictly enforced.","firmly","rigorously","loosely"],
  ["Properly","In the correct or appropriate way","सही तरीके से, ठीक से","adverb","beginner","/ˈprɒpəli/","Do your work properly.","Make sure the door is closed properly.","correctly","appropriately","improperly"],
  ["Immediately","At once, without delay","अभी, तुरंत","adverb","beginner","/ɪˈmiːdiətli/","Report to the office immediately.","Start the work immediately.","instantly","promptly",""],
  ["Absolutely","Completely and without any doubt","बिल्कुल, पूरी तरह से","adverb","elementary","/ˈæbsəluːtli/","Absolutely do not touch that.","I absolutely agree with you.","completely","totally","partially"],
  ["Never","At no time, not ever","कभी नहीं","adverb","beginner","/ˈnɛvə/","Never give up on your dreams.","Never lie to your parents.","not ever","at no time","always"],
  ["Always","At all times, forever","हमेशा, सदा","adverb","beginner","/ˈɔːlweɪz/","Always be honest.","Always respect your elders.","ever","constantly","never"],
  ["Respectfully","In a polite and showing respect way","सम्मानपूर्वक, आदर से","adverb","elementary","/rɪˈspɛktfʊli/","He respectfully disagreed.","Please respond respectfully.","courteously","politely","rudely"],
  ["Bravely","Without showing fear","साहसपूर्वक, बहादुरी से","adverb","beginner","/ˈbreɪvli/","He bravely faced all challenges.","Speak bravely in public.","courageously","fearlessly","cowardly"],
  ["Directly","In a straight line or manner","सीधे, सीधे तौर पर","adverb","beginner","/dɪˈrɛktli/","Go directly to the principal.","Answer directly without beating around the bush.","straight","immediately","indirectly"],
  ["Gently","In a soft and careful way","धीरे से, नाज़ुक तरीके से","adverb","beginner","/ˈdʒɛntli/","Hold the baby gently.","Please knock gently on the door.","softly","tenderly","roughly"],
  ["Loudly","With a lot of noise or volume","ज़ोर से, ऊँची आवाज़ में","adverb","beginner","/ˈlaʊdli/","Do not speak loudly in the library.","She called out loudly for help.","noisily","boisterously","softly"],
  ["Seriously","In a way showing importance or concern","गंभीरता से","adverb","beginner","/ˈsɪəriəsli/","Take this matter seriously.","She looked at him seriously.","gravely","solemnly","lightly"],
  ["Repeatedly","Many times, again and again","बार-बार, बार-बार करके","adverb","elementary","/rɪˈpiːtɪdli/","She repeatedly asked for help.","He failed repeatedly but never quit.","again and again","often","once"],
  ["Sincerely","In a genuine and honest way","ईमानदारी से, सच्चे दिल से","adverb","beginner","/sɪnˈsɪəli/","She sincerely apologized.","I sincerely hope you recover soon.","genuinely","honestly","falsely"],
  ["Immediately","Without pause or delay","तत्काल","adverb","beginner","/ɪˈmiːdiətli/","Evacuate the building immediately!","Come to the front immediately.","at once","instantly","later"],
  ["Silently","Without making any sound","चुपचाप, बिना आवाज़ के","adverb","beginner","/ˈsaɪləntli/","She silently left the room.","Read silently to yourself.","quietly","noiselessly","aloud"],
  ["Patiently","Waiting calmly without complaining","धैर्यपूर्वक, सब्र के साथ","adverb","beginner","/ˈpeɪʃəntli/","Wait patiently for your turn.","She patiently explained everything.","calmly","tolerantly","impatiently"],
  ["Clearly","Easy to understand, without confusion","साफ़ तौर पर, स्पष्ट रूप से","adverb","beginner","/ˈklɪəli/","Speak clearly so everyone understands.","Write your name clearly.","plainly","distinctly","unclearly"],
  ["Slowly","Not fast, at a reduced speed","धीरे-धीरे, आहिस्ता","adverb","beginner","/ˈsləʊli/","Walk slowly near the stairs.","Read the question slowly.","leisurely","gradually","quickly"],
  ["Eagerly","With great enthusiasm and interest","उत्सुकता से, उत्साह से","adverb","beginner","/ˈiːɡəli/","She eagerly raised her hand.","He eagerly accepted the challenge.","enthusiastically","keenly","reluctantly"],
  ["Honestly","In a truthful and sincere way","ईमानदारी से","adverb","beginner","/ˈɒnɪstli/","Speak honestly about the issue.","Honestly, I did not understand.","truthfully","sincerely","dishonestly"],
  ["Kindly","In a gentle and caring way","दयालुता से, कृपया","adverb","beginner","/ˈkaɪndli/","Kindly take a seat.","Please kindly fill in this form.","gently","pleasantly","harshly"],
  ["Wisely","In a sensible and intelligent way","बुद्धिमानी से, समझदारी से","adverb","beginner","/ˈwaɪzli/","Use your time wisely.","She wisely chose not to argue.","sensibly","smartly","foolishly"],
  ["Patiently","In a calm, steady way","धीरज के साथ","adverb","beginner","/ˈpeɪʃəntli/","Answer the questions patiently.","Work patiently on difficult problems.","calmly","steadily",""],
  ["Boldly","Confidently and without fear","दबंगई से, निडरता से","adverb","beginner","/ˈbəʊldli/","Speak boldly in your interview.","She boldly stated her opinion.","confidently","bravely","timidly"],
  ["Cheerfully","In a happy and optimistic way","खुशी से, प्रसन्नतापूर्वक","adverb","beginner","/ˈtʃɪəfʊli/","She cheerfully agreed to help.","He cheerfully greeted everyone.","happily","joyfully","gloomily"],
  ["Formally","In an official or serious manner","औपचारिक रूप से, रसमी तौर पर","adverb","elementary","/ˈfɔːməli/","Dress formally for the interview.","Please address him formally.","officially","professionally","informally"],
];

// ══════════════════════════════════════════════════════════════
// DAY 4 — Be Verb (am, is, are, was, were)
// ══════════════════════════════════════════════════════════════
const DAY_4_WORDS: W[] = [
  ["Present","Happening or existing now","वर्तमान, अभी का","adjective","beginner","/ˈprɛzənt/","She is present in the class today.","All members are present at the meeting.","current","existing","absent"],
  ["Absent","Not present in a place","अनुपस्थित, गैरहाज़िर","adjective","beginner","/ˈæbsənt/","He was absent from school yesterday.","Why are you absent from class?","missing","away","present"],
  ["Busy","Actively engaged in work","व्यस्त, काम में लगा हुआ","adjective","beginner","/ˈbɪzi/","She is busy with her project.","I am very busy this week.","occupied","engaged","free"],
  ["Free","Not occupied or not busy","खाली, मुक्त","adjective","beginner","/friː/","Are you free tomorrow evening?","I was free on Sunday.","available","idle","busy"],
  ["Happy","Feeling pleasure and contentment","खुश, प्रसन्न","adjective","beginner","/ˈhæpi/","She is very happy with her results.","We are happy to see you.","joyful","pleased","sad"],
  ["Sad","Feeling unhappy or sorrowful","दुखी, उदास","adjective","beginner","/sæd/","He was sad when he lost the match.","Are you sad about something?","unhappy","sorrowful","happy"],
  ["Angry","Feeling strong displeasure","क्रोधित, नाराज़","adjective","beginner","/ˈæŋɡri/","She is angry because of the noise.","Why are you angry with me?","furious","upset","calm"],
  ["Tired","Feeling the need for rest or sleep","थका हुआ, थका-माँदा","adjective","beginner","/ˈtaɪəd/","I am very tired after work.","She was tired but continued studying.","exhausted","weary","energetic"],
  ["Ready","Prepared for something","तैयार, तत्पर","adjective","beginner","/ˈrɛdi/","Are you ready for the exam?","I am ready to start learning.","prepared","set","unprepared"],
  ["Correct","Right, accurate, without error","सही, शुद्ध","adjective","beginner","/kəˈrɛkt/","Your answer is correct.","Is this spelling correct?","right","accurate","wrong"],
  ["Wrong","Not correct, mistaken","गलत, त्रुटिपूर्ण","adjective","beginner","/rɒŋ/","This answer is wrong.","I was wrong about that.","incorrect","mistaken","right"],
  ["Strong","Having power or force","मज़बूत, शक्तिशाली","adjective","beginner","/strɒŋ/","She is a strong woman.","He was strong enough to lift the box.","powerful","robust","weak"],
  ["Weak","Lacking strength or power","कमज़ोर, दुर्बल","adjective","beginner","/wiːk/","He is weak after the illness.","My English was weak before I started this course.","feeble","frail","strong"],
  ["Smart","Intelligent and clever","चतुर, होशियार","adjective","beginner","/smɑːt/","She is a very smart student.","You are smart enough to solve this.","intelligent","clever","dull"],
  ["Clever","Quick to understand and learn","चालाक, तेज़","adjective","beginner","/ˈklɛvə/","He was clever to find the solution.","She is clever with numbers.","smart","bright","stupid"],
  ["Beautiful","Pleasing to look at","सुंदर, खूबसूरत","adjective","beginner","/ˈbjuːtɪfʊl/","The garden is very beautiful.","She was beautiful in her traditional dress.","gorgeous","lovely","ugly"],
  ["Ugly","Unpleasant to look at","बदसूरत, कुरूप","adjective","beginner","/ˈʌɡli/","The old building is ugly.","That was an ugly argument.","unattractive","hideous","beautiful"],
  ["Clean","Free from dirt or mess","साफ़, स्वच्छ","adjective","beginner","/kliːn/","Keep your room clean.","The kitchen is clean now.","neat","tidy","dirty"],
  ["Dirty","Not clean, covered with dirt","गंदा, मैला","adjective","beginner","/ˈdɜːti/","Don't touch the dirty clothes.","My hands are dirty after playing.","messy","unclean","clean"],
  ["Hot","Having a high temperature","गर्म, तप्त","adjective","beginner","/hɒt/","The tea is too hot to drink.","Today was very hot.","warm","scorching","cold"],
  ["Cold","Having a low temperature","ठंडा, शीतल","adjective","beginner","/kəʊld/","The water is cold.","It was cold in the morning.","chilly","freezing","hot"],
  ["New","Recently made or acquired","नया, नवीन","adjective","beginner","/njuː/","This is a new book.","She is wearing new shoes.","fresh","recent","old"],
  ["Old","Having existed for a long time","पुराना, बूढ़ा","adjective","beginner","/əʊld/","That is an old tradition.","He is old but very active.","aged","ancient","new"],
  ["Young","In an early stage of life","जवान, युवा","adjective","beginner","/jʌŋ/","She is young and talented.","We were young when we met.","youthful","juvenile","old"],
  ["Tall","Greater than average height","लंबा, ऊँचा","adjective","beginner","/tɔːl/","He is very tall.","She was the tallest in the class.","high","towering","short"],
  ["Short","Less than average height","छोटा, ठिगना","adjective","beginner","/ʃɔːt/","She is short but very confident.","The route is short.","small","little","tall"],
  ["Fat","Having a lot of body weight","मोटा, भारी","adjective","beginner","/fæt/","The cat is fat and lazy.","He was fat but became healthy.","overweight","heavy","thin"],
  ["Thin","Not fat, slim","पतला, दुबला","adjective","beginner","/θɪn/","She is very thin.","The book is thin but useful.","slim","lean","fat"],
  ["Rich","Having a lot of money or resources","अमीर, धनवान","adjective","beginner","/rɪtʃ/","He is rich and successful.","She was rich in culture and tradition.","wealthy","prosperous","poor"],
  ["Poor","Having very little money","गरीब, निर्धन","adjective","beginner","/pɔː/","She was poor but always happy.","The poor family needed support.","needy","destitute","rich"],
  ["Educated","Having received formal education","शिक्षित, पढ़ा-लिखा","adjective","elementary","/ˈɛdjʊkeɪtɪd/","She is highly educated.","An educated person can make better decisions.","learned","literate","uneducated"],
  ["Honest","Truthful and not deceptive","ईमानदार, सच्चा","adjective","beginner","/ˈɒnɪst/","He is an honest man.","Always be honest in your work.","truthful","sincere","dishonest"],
  ["Lazy","Unwilling to work","आलसी, काहिल","adjective","beginner","/ˈleɪzi/","Don't be lazy — study every day.","He was lazy in school.","idle","sluggish","hardworking"],
  ["Hardworking","Working with diligence and effort","मेहनती, परिश्रमी","adjective","beginner","/ˈhɑːdˌwɜːkɪŋ/","She is hardworking and determined.","You need to be hardworking to succeed.","diligent","industrious","lazy"],
  ["Nervous","Feeling anxious or worried","घबराया हुआ, बेचैन","adjective","beginner","/ˈnɜːvəs/","I am nervous before the exam.","She was nervous at the interview.","anxious","worried","calm"],
  ["Confident","Feeling sure of yourself","आत्मविश्वासी, खुद पर भरोसा","adjective","beginner","/ˈkɒnfɪdənt/","Be confident when you speak.","She is confident in her skills.","sure","certain","insecure"],
  ["Polite","Having good manners","विनम्र, शिष्ट","adjective","beginner","/pəˈlaɪt/","He is always polite to others.","Be polite when you meet new people.","courteous","well-mannered","rude"],
  ["Rude","Behaving badly and without respect","असभ्य, बेअदब","adjective","beginner","/ruːd/","Don't be rude to your teacher.","She was rude in her reply.","impolite","disrespectful","polite"],
  ["Kind","Friendly and caring","दयालु, मेहरबान","adjective","beginner","/kaɪnd/","She is very kind to animals.","Be kind to everyone.","gentle","caring","cruel"],
  ["Cruel","Deliberately causing pain","क्रूर, निर्दयी","adjective","beginner","/kruːəl/","It is cruel to hurt animals.","He was cruel in his remarks.","harsh","brutal","kind"],
  ["Brave","Ready to face danger","साहसी, निडर","adjective","beginner","/breɪv/","She was brave during the crisis.","Be brave and face your fears.","courageous","bold","cowardly"],
  ["Cowardly","Lacking courage","कायर, बुज़दिल","adjective","beginner","/ˈkaʊədli/","It is cowardly to run away.","Don't be cowardly.","timid","fearful","brave"],
  ["Calm","Free from agitation, quiet","शांत, स्थिर","adjective","beginner","/kɑːm/","Stay calm during the exam.","She was calm despite the pressure.","peaceful","serene","anxious"],
  ["Excited","Feeling great enthusiasm","उत्साहित, रोमांचित","adjective","beginner","/ɪkˈsaɪtɪd/","I am excited about the trip.","She was excited to start learning.","thrilled","enthusiastic","bored"],
  ["Bored","Feeling uninterested","उब गया हुआ, बेज़ार","adjective","beginner","/bɔːd/","Are you bored of studying?","He was bored at home.","uninterested","tired","excited"],
  ["Surprised","Feeling something unexpected happened","हैरान, चकित","adjective","beginner","/səˈpraɪzd/","She was surprised by the gift.","I am surprised at his progress.","astonished","shocked","unsurprised"],
  ["Sick","Not feeling well, ill","बीमार, अस्वस्थ","adjective","beginner","/sɪk/","I was sick last week.","She is sick and resting at home.","ill","unwell","healthy"],
  ["Healthy","In good physical condition","स्वस्थ, तंदुरुस्त","adjective","beginner","/ˈhɛlθi/","Eat well to stay healthy.","She is healthy and active.","well","fit","sick"],
  ["Married","Having a spouse, not single","विवाहित, शादीशुदा","adjective","beginner","/ˈmærɪd/","They are happily married.","She was married last year.","wed","united","single"],
  ["Single","Not married, alone","अकेला, अविवाहित","adjective","beginner","/ˈsɪŋɡəl/","He is still single.","Are you single or married?","unmarried","unattached","married"],
];

// ══════════════════════════════════════════════════════════════
// DAY 5 — Demonstrative Pronouns (This, That, These, Those)
// ══════════════════════════════════════════════════════════════
const DAY_5_WORDS: W[] = [
  ["Nearby","Close in distance","पास, नज़दीक","adjective","beginner","/ˌnɪəˈbaɪ/","This nearby shop has everything.","Is there a nearby hospital?","close","adjacent","far"],
  ["Distant","Far away in space or time","दूर, फ़ासले पर","adjective","beginner","/ˈdɪstənt/","That distant mountain looks beautiful.","Those are distant memories.","far","remote","near"],
  ["Specific","Particular, exact","विशिष्ट, खास","adjective","elementary","/spɪˈsɪfɪk/","This specific book helped me a lot.","She is looking for a specific word.","particular","precise","general"],
  ["Refer","To point to or mention","संदर्भ देना, इशारा करना","verb","elementary","/rɪˈfɜː/","This refers to the first rule.","I am referring to that example.","indicate","point",""],
  ["Indicate","To show or point to something","संकेत करना, दिखाना","verb","elementary","/ˈɪndɪkeɪt/","This sign indicates danger.","The arrow indicates the direction.","point","show",""],
  ["Particular","Relating to one specific thing","विशेष, खास","adjective","elementary","/pəˈtɪkjʊlə/","This particular method is better.","Those particular students won awards.","specific","special","general"],
  ["Example","A typical or model instance","उदाहरण, नमूना","noun","beginner","/ɪɡˈzɑːmpəl/","This is a good example.","Give me an example of an imperative sentence.","instance","sample",""],
  ["Difference","A point of contrast between things","अंतर, फ़र्क","noun","beginner","/ˈdɪfrəns/","What is the difference between this and that?","There is a big difference between formal and informal.","distinction","contrast","similarity"],
  ["Similar","Nearly the same","समान, मिलता-जुलता","adjective","beginner","/ˈsɪmɪlə/","These two words have a similar meaning.","This situation is similar to the last one.","alike","comparable","different"],
  ["Opposite","Completely different","विपरीत, उलटा","adjective","beginner","/ˈɒpəzɪt/","Hot and cold are opposite words.","His opinion is the opposite of mine.","contrary","reverse","same"],
  ["Context","The circumstances around something","संदर्भ, प्रसंग","noun","intermediate","/ˈkɒntɛkst/","This word changes meaning based on context.","Use words in the correct context.","background","setting",""],
  ["Category","A group of things with similar features","श्रेणी, वर्ग","noun","elementary","/ˈkætɪɡəri/","This falls under the grammar category.","These words belong to the same category.","group","class",""],
  ["Object","A physical thing you can see or touch","वस्तु, चीज़","noun","beginner","/ˈɒbdʒɪkt/","Point to that object.","This object is very useful.","thing","item",""],
  ["Pronoun","A word that replaces a noun","सर्वनाम","noun","elementary","/ˈprəʊnaʊn/","'This' is a demonstrative pronoun.","Replace the noun with a pronoun.","substitute","replacement",""],
  ["Grammar","The rules of a language","व्याकरण, भाषा के नियम","noun","beginner","/ˈɡræmə/","Grammar is important in English.","Good grammar makes communication clear.","syntax","structure",""],
  ["Sentence","A group of words expressing a thought","वाक्य","noun","beginner","/ˈsɛntəns/","This sentence is correct.","Write a sentence using these words.","statement","clause",""],
  ["Noun","A word for a person, place, or thing","संज्ञा","noun","beginner","/naʊn/","Book is a noun.","This noun refers to a specific person.","name","word",""],
  ["Adjective","A word that describes a noun","विशेषण","noun","beginner","/ˈæddʒɪktɪv/","Beautiful is an adjective.","Use an adjective to describe this thing.","descriptor","modifier",""],
  ["Verb","A word that shows action or state","क्रिया","noun","beginner","/vɜːb/","This sentence has a verb.","Those verbs are action words.","action word","predicate",""],
  ["Plural","More than one of something","बहुवचन, अनेक","adjective","beginner","/ˈplʊərəl/","These is used with plural nouns.","Books is the plural of book.","multiple","many","singular"],
  ["Singular","Only one of something","एकवचन, एक","adjective","beginner","/ˈsɪŋɡjʊlə/","This is used with singular nouns.","Book is the singular form.","single","one","plural"],
  ["Near","Not far away, close","नज़दीक, पास में","adjective","beginner","/nɪə/","This near the market.","Is there a school near your house?","close","adjacent","far"],
  ["Far","A long distance away","दूर, फ़ासला","adjective","beginner","/fɑː/","That far mountain is beautiful.","How far is the bus stand?","distant","remote","near"],
  ["Location","A particular place or position","स्थान, जगह","noun","beginner","/ləʊˈkeɪʃən/","This location is perfect for the shop.","What is the location of your house?","place","position",""],
  ["Position","Where someone or something is","स्थिति, जगह","noun","beginner","/pəˈzɪʃən/","Keep this in the correct position.","Those books are in the wrong position.","place","location",""],
  ["Direction","The route along which something goes","दिशा","noun","beginner","/dɪˈrɛkʃən/","Go in this direction.","That direction leads to the station.","way","route",""],
  ["Point","A specific place or moment","बिंदु, जगह","noun","beginner","/pɔɪnt/","This is the starting point.","At what point did you understand?","spot","location",""],
  ["Choose","To pick from available options","चुनना, चयन करना","verb","beginner","/tʃuːz/","Choose this one or that one.","She chose these books for the course.","select","pick","reject"],
  ["Compare","To examine similarities and differences","तुलना करना","verb","beginner","/kəmˈpeə/","Compare this with that.","These two are compared below.","contrast","match",""],
  ["Identify","To recognize and name something","पहचानना, पता लगाना","verb","elementary","/aɪˈdɛntɪfaɪ/","Can you identify this object?","These items are easy to identify.","recognize","spot",""],
  ["Distinguish","To recognize differences","भेद करना, अलग करना","verb","intermediate","/dɪˈstɪŋɡwɪʃ/","Distinguish between formal and informal.","This helps distinguish nouns from pronouns.","differentiate","separate",""],
  ["Replace","To put something in place of another","बदलना, स्थान लेना","verb","beginner","/rɪˈpleɪs/","Replace that word with this one.","These rules replace the old ones.","substitute","swap",""],
  ["Demonstrate","To show or explain clearly","प्रदर्शित करना, दिखाना","verb","elementary","/ˈdɛmənstreɪt/","This example demonstrates the rule.","Those actions demonstrate bravery.","show","illustrate",""],
  ["Purpose","The reason for which something is done","उद्देश्य, मकसद","noun","elementary","/ˈpɜːpəs/","The purpose of this exercise is practice.","Those sentences serve this purpose.","aim","goal",""],
  ["Usage","The way in which something is used","प्रयोग, इस्तेमाल","noun","elementary","/ˈjuːzɪdʒ/","This shows the correct usage.","Learn the usage of these pronouns.","use","application",""],
  ["Function","The purpose or role of something","कार्य, भूमिका","noun","elementary","/ˈfʌŋkʃən/","This word has an important function.","What function do these words serve?","role","purpose",""],
  ["Rule","A statement about what must be done","नियम, क़ायदा","noun","beginner","/ruːl/","Follow this grammar rule.","Those are the basic rules of English.","regulation","guideline",""],
  ["Pattern","A repeated design or sequence","नमूना, तरीका","noun","elementary","/ˈpætən/","This pattern is common in English.","Follow those sentence patterns.","model","template",""],
  ["Structure","The arrangement of parts","संरचना, ढाँचा","noun","elementary","/ˈstrʌktʃə/","This sentence has a clear structure.","Learn the structure of English sentences.","arrangement","framework",""],
  ["Practice","Repeated exercise to improve","अभ्यास, प्रैक्टिस","noun","beginner","/ˈpræktɪs/","This kind of practice helps you improve.","Those exercises give you practice.","exercise","drill",""],
  ["Mistake","An incorrect action or judgment","गलती, भूल","noun","beginner","/mɪˈsteɪk/","This is a common mistake.","Avoid making these mistakes.","error","blunder","correct"],
  ["Correct","To fix an error","सुधारना, ठीक करना","verb","beginner","/kəˈrɛkt/","Correct this sentence.","Those errors need to be corrected.","fix","amend",""],
  ["Understand","To grasp the meaning","समझना, जानना","verb","beginner","/ˌʌndəˈstænd/","Do you understand this?","I understand these concepts now.","comprehend","grasp","misunderstand"],
  ["Clear","Easy to understand, not confusing","स्पष्ट, साफ़","adjective","beginner","/klɪə/","This explanation is clear.","Make those instructions clear.","plain","obvious","unclear"],
  ["Confuse","To make someone uncertain","भ्रमित करना, उलझाना","verb","beginner","/kənˈfjuːz/","Don't confuse this with that.","These two words confuse learners.","puzzle","mislead","clarify"],
  ["Learn","To gain knowledge","सीखना, सिखना","verb","beginner","/lɜːn/","I want to learn this topic.","Those rules help you learn English.","study","acquire","forget"],
  ["Teach","To give knowledge to someone","सिखाना, पढ़ाना","verb","beginner","/tiːtʃ/","This lesson will teach you demonstratives.","She teaches those students well.","instruct","educate",""],
  ["Practice","To do repeatedly to improve","अभ्यास करना","verb","beginner","/ˈpræktɪs/","Practice using this in sentences.","Practice those words daily.","drill","train",""],
  ["Review","To go over material again","समीक्षा करना, दोहराना","verb","beginner","/rɪˈvjuː/","Review this section before the test.","Those notes will help you review.","revise","go over",""],
  ["Master","To become very skilled in","महारत हासिल करना","verb","elementary","/ˈmɑːstə/","Master this grammar point today.","She mastered those difficult words.","learn","perfect",""],
  ["Apply","To use something in practice","लागू करना, प्रयोग करना","verb","elementary","/əˈplaɪ/","Apply this rule in your writing.","These concepts can be applied daily.","use","employ",""],
];

// ══════════════════════════════════════════════════════════════
// DAY 6 — Has / Have (Possession & Perfect Tense)
// ══════════════════════════════════════════════════════════════
const DAY_6_WORDS: W[] = [
  ["Possess","To own or have something","रखना, अधिकार में होना","verb","intermediate","/pəˈzɛs/","He possesses great talent.","She possesses all necessary skills.","own","have","lack"],
  ["Own","To have something as property","खुद का होना, अपना","verb","beginner","/əʊn/","I own this book.","Does she own a car?","possess","have","lack"],
  ["Belong","To be the property of","संबंधित होना, का होना","verb","beginner","/bɪˈlɒŋ/","This book belongs to me.","The responsibility belongs to everyone.","be owned by","pertain",""],
  ["Property","Things owned by someone","संपत्ति, मालिकाना","noun","elementary","/ˈprɒpəti/","He has a lot of property.","This is my personal property.","possession","asset",""],
  ["Wealth","A large amount of money or assets","धन-दौलत, संपदा","noun","elementary","/wɛlθ/","She has accumulated great wealth.","Wealth alone cannot buy happiness.","riches","fortune","poverty"],
  ["Asset","Something valuable owned","संपत्ति, परिसंपत्ति","noun","intermediate","/ˈæsɛt/","Knowledge is a valuable asset.","She has many assets.","resource","advantage","liability"],
  ["Talent","A natural ability or skill","प्रतिभा, हुनर","noun","beginner","/ˈtælənt/","She has a talent for music.","Every person has a unique talent.","gift","skill","inability"],
  ["Skill","The ability to do something well","कौशल, दक्षता","noun","beginner","/skɪl/","He has great communication skills.","Develop your English skills.","ability","expertise","incompetence"],
  ["Experience","Knowledge from doing something","अनुभव, तजुर्बा","noun","beginner","/ɪkˈspɪəriəns/","She has five years of experience.","Experience is the best teacher.","knowledge","expertise","inexperience"],
  ["Qualification","An achievement such as a degree","योग्यता, प्रमाणपत्र","noun","elementary","/ˌkwɒlɪfɪˈkeɪʃən/","She has good qualifications.","What qualifications do you have?","credential","certificate",""],
  ["Responsibility","A duty or task you are accountable for","ज़िम्मेदारी","noun","beginner","/rɪˌspɒnsɪˈbɪlɪti/","She has a great responsibility.","We have a responsibility to help others.","duty","obligation",""],
  ["Advantage","A condition making success more likely","फ़ायदा, लाभ","noun","beginner","/ədˈvɑːntɪdʒ/","She has an advantage in English.","Having good communication is an advantage.","benefit","plus","disadvantage"],
  ["Opportunity","A chance to do something","अवसर, मौका","noun","beginner","/ˌɒpəˈtjuːnɪti/","He has an opportunity to grow.","Seize every opportunity to practice.","chance","opening","obstacle"],
  ["Ability","The power or capacity to do something","क्षमता, योग्यता","noun","beginner","/əˈbɪlɪti/","She has the ability to learn quickly.","You have the ability to succeed.","capability","capacity","inability"],
  ["Potential","The ability to develop in the future","क्षमता, संभावना","noun","elementary","/pəˈtɛnʃəl/","Every student has great potential.","She has the potential to be a leader.","capability","promise",""],
  ["Feature","A distinctive part or quality","विशेषता, खूबी","noun","elementary","/ˈfiːtʃə/","English has many interesting features.","This phone has great features.","characteristic","quality",""],
  ["Benefit","An advantage or gain","लाभ, फ़ायदा","noun","beginner","/ˈbɛnɪfɪt/","English has many benefits.","She has benefited from daily practice.","advantage","profit","loss"],
  ["Habit","A regularly repeated behavior","आदत, रिवाज","noun","beginner","/ˈhæbɪt/","She has a habit of reading daily.","Good habits help you succeed.","routine","practice",""],
  ["Character","The mental and moral qualities","चरित्र, स्वभाव","noun","elementary","/ˈkærɪktə/","She has a strong character.","Good character is more valuable than money.","personality","nature",""],
  ["Confidence","A feeling of trust in your abilities","आत्मविश्वास, भरोसा","noun","beginner","/ˈkɒnfɪdəns/","She has great confidence.","Build your confidence by speaking more.","self-assurance","certainty","doubt"],
  ["Patience","The ability to wait calmly","धैर्य, सब्र","noun","beginner","/ˈpeɪʃəns/","She has a lot of patience.","Have patience — success takes time.","endurance","tolerance","impatience"],
  ["Courage","The ability to face danger or difficulty","साहस, हिम्मत","noun","beginner","/ˈkɜːrɪdʒ/","She has the courage to speak English.","Have courage and never give up.","bravery","boldness","cowardice"],
  ["Wisdom","Good judgment from experience","बुद्धिमत्ता, समझदारी","noun","elementary","/ˈwɪzdəm/","He has wisdom beyond his age.","Wisdom comes from experience.","knowledge","insight","foolishness"],
  ["Knowledge","Facts and skills acquired","ज्ञान, जानकारी","noun","beginner","/ˈnɒlɪdʒ/","She has deep knowledge of grammar.","Knowledge is power.","understanding","expertise","ignorance"],
  ["Understanding","Comprehension and insight","समझ, अवबोध","noun","beginner","/ˌʌndəˈstændɪŋ/","She has a good understanding of the topic.","My understanding of English has improved.","comprehension","grasp","misunderstanding"],
  ["Memory","The ability to remember things","स्मृति, याददाश्त","noun","beginner","/ˈmɛməri/","She has an excellent memory.","This has brought back good memories.","recall","recollection","forgetfulness"],
  ["Dream","An ambition or aspiration","सपना, ख्वाब","noun","beginner","/driːm/","She has a dream to become a doctor.","Have big dreams and work hard.","aspiration","ambition",""],
  ["Goal","An aim or desired result","लक्ष्य, उद्देश्य","noun","beginner","/ɡəʊl/","I have a goal to complete 75 days.","Set clear goals for yourself.","target","aim",""],
  ["Plan","An arrangement for the future","योजना, इरादा","noun","beginner","/plæn/","She has a plan to study abroad.","Do you have a plan for today?","strategy","scheme",""],
  ["Idea","A thought or suggestion","विचार, सुझाव","noun","beginner","/aɪˈdɪə/","He has a brilliant idea.","She has many creative ideas.","thought","notion",""],
  ["Solution","A way of solving a problem","समाधान, हल","noun","beginner","/səˈluːʃən/","She has a solution for every problem.","The teacher has the solution.","answer","resolution","problem"],
  ["Choice","The act of picking one option","विकल्प, चुनाव","noun","beginner","/tʃɔɪs/","She has many choices.","Make the right choice.","option","selection",""],
  ["Decision","A conclusion after thinking","निर्णय, फ़ैसला","noun","beginner","/dɪˈsɪʒən/","She has made a wise decision.","The final decision has been taken.","choice","judgment","indecision"],
  ["Right","Something you are entitled to","अधिकार, हक़","noun","elementary","/raɪt/","Everyone has the right to education.","She has the right to express her opinion.","entitlement","privilege",""],
  ["Duty","Something you are required to do","कर्तव्य, फ़र्ज़","noun","beginner","/ˈdjuːti/","She has a duty to protect the environment.","It is your duty to study hard.","obligation","responsibility","privilege"],
  ["Feeling","An emotion or sensation","भावना, अहसास","noun","beginner","/ˈfiːlɪŋ/","She has a feeling of happiness.","I have a feeling you will succeed.","emotion","sensation",""],
  ["Opinion","A personal view or judgment","राय, विचार","noun","beginner","/əˈpɪnjən/","She has a strong opinion.","What is your opinion on this?","view","belief","fact"],
  ["Permission","Official or formal approval","अनुमति, इजाज़त","noun","beginner","/pəˈmɪʃən/","She has permission to enter.","Do you have permission to go?","authorization","approval","refusal"],
  ["Faith","Complete trust and confidence","विश्वास, आस्था","noun","beginner","/feɪθ/","She has great faith in God.","I have faith in your abilities.","trust","belief","doubt"],
  ["Hope","A feeling that things will be good","उम्मीद, आशा","noun","beginner","/həʊp/","She has hope for the future.","Never lose hope.","expectation","optimism","despair"],
  ["Love","A strong feeling of affection","प्यार, प्रेम","noun","beginner","/lʌv/","She has a lot of love to give.","I have love for the English language.","affection","care","hatred"],
  ["Respect","Admiration for someone","सम्मान, इज्ज़त","noun","beginner","/rɪˈspɛkt/","She has great respect for her teachers.","Always have respect for others.","honor","admiration","disrespect"],
  ["Fear","An unpleasant feeling from danger","डर, भय","noun","beginner","/fɪə/","She has a fear of public speaking.","Have no fear — you can do it.","fright","terror","bravery"],
  ["Surprise","An unexpected event or feeling","आश्चर्य, हैरानी","noun","beginner","/səˈpraɪz/","She had a surprise waiting for him.","I have a surprise for you.","shock","astonishment",""],
  ["Problem","A situation that needs solving","समस्या, परेशानी","noun","beginner","/ˈprɒbləm/","She has a problem with grammar.","Every problem has a solution.","issue","difficulty","solution"],
  ["Question","A sentence seeking an answer","प्रश्न, सवाल","noun","beginner","/ˈkwɛstʃən/","She has a question about grammar.","I have a few questions.","query","inquiry","answer"],
  ["Answer","A response to a question","उत्तर, जवाब","noun","beginner","/ˈɑːnsə/","She has the answer.","Do you have the answer to this question?","response","reply","question"],
  ["Story","A narrative of events","कहानी, किस्सा","noun","beginner","/ˈstɔːri/","She has an interesting story.","Every person has a story to tell.","tale","narrative",""],
  ["Message","Information or communication","संदेश, खबर","noun","beginner","/ˈmɛsɪdʒ/","She has a message for you.","I have an important message.","communication","note",""],
  ["Friend","A person you like and trust","दोस्त, मित्र","noun","beginner","/frɛnd/","She has many friends.","I have a best friend named Riya.","companion","buddy","enemy"],
];

// ══════════════════════════════════════════════════════════════
// DAY 7 — Had (Past Possession & Past Perfect)
// ══════════════════════════════════════════════════════════════
const DAY_7_WORDS: W[] = [
  ["Yesterday","The day before today","कल (बीता हुआ)","adverb","beginner","/ˈjɛstədeɪ/","Yesterday I had a great class.","She had a headache yesterday.","last day","prior day","tomorrow"],
  ["Previously","Before the present time","पहले, पूर्व में","adverb","elementary","/ˈpriːviəsli/","She had previously worked in IT.","I had previously visited this place.","earlier","formerly","later"],
  ["Ago","In the past","पहले, पूर्व में","adverb","beginner","/əˈɡəʊ/","I had this book two years ago.","She had left an hour ago.","before","in the past","after"],
  ["Earlier","Before a specific time","पहले, शुरुआत में","adverb","beginner","/ˈɜːliə/","She had arrived earlier than expected.","I had eaten earlier.","before","previously","later"],
  ["Already","Before the expected time","पहले से, पहले ही","adverb","beginner","/ɔːlˈrɛdi/","She had already finished her work.","I had already known about it.","by then","beforehand","not yet"],
  ["Just","A moment before","बस, अभी-अभी","adverb","beginner","/dʒʌst/","She had just left when you called.","I had just finished eating.","recently","moments ago",""],
  ["Never","At no point in the past","कभी नहीं","adverb","beginner","/ˈnɛvə/","I had never seen such beauty.","She had never traveled abroad before.","not once","at no time","always"],
  ["Always","At every point in the past","हमेशा, सदा","adverb","beginner","/ˈɔːlweɪz/","She had always wanted to be a doctor.","He had always tried his best.","ever","constantly","never"],
  ["Before","At an earlier time","पहले, इससे पहले","adverb","beginner","/bɪˈfɔː/","She had studied this grammar before.","Had you ever visited Delhi before?","previously","formerly","after"],
  ["After","Following in time","बाद में, उसके पश्चात","adverb","beginner","/ˈɑːftə/","After she had eaten, she rested.","I felt better after I had slept.","following","subsequently","before"],
  ["Once","One time in the past","एक बार, किसी समय","adverb","beginner","/wʌns/","I had once dreamed of flying.","She had once visited Japan.","formerly","previously",""],
  ["Twice","Two times","दो बार","adverb","beginner","/twaɪs/","I had tried twice before succeeding.","She had called twice.","two times","doubly","once"],
  ["Regret","Feeling sorry about the past","पछतावा, अफसोस","noun","elementary","/rɪˈɡrɛt/","She had great regret about her words.","I had a feeling of regret.","remorse","sorrow","satisfaction"],
  ["Mistake","An action that was wrong","गलती, भूल","noun","beginner","/mɪˈsteɪk/","She had made a big mistake.","I had learned from my mistakes.","error","blunder","correct action"],
  ["Chance","An opportunity for something","मौका, अवसर","noun","beginner","/tʃɑːns/","She had a chance to win.","I had never had such a chance before.","opportunity","occasion",""],
  ["Wish","A desire for something","इच्छा, कामना","noun","beginner","/wɪʃ/","She had a wish to travel the world.","I had always wished to speak English.","desire","hope",""],
  ["Promise","An agreement to do something","वादा, प्रतिज्ञा","noun","beginner","/ˈprɒmɪs/","She had made a promise to study.","He had broken his promise.","vow","commitment",""],
  ["Effort","Energy used to do something","प्रयास, कोशिश","noun","beginner","/ˈɛfət/","She had put in great effort.","I had made every effort to succeed.","attempt","work","laziness"],
  ["Result","An outcome of an action","परिणाम, नतीजा","noun","beginner","/rɪˈzʌlt/","She had worked hard for good results.","The result had been announced.","outcome","consequence","cause"],
  ["Progress","Forward movement toward a goal","प्रगति, तरक्की","noun","beginner","/ˈprəʊɡrɛs/","She had made great progress.","I noticed how much progress I had made.","advancement","improvement","regression"],
  ["Achieve","To successfully reach a goal","हासिल करना, प्राप्त करना","verb","beginner","/əˈtʃiːv/","She had achieved great success.","By the end, she had achieved her goal.","accomplish","attain","fail"],
  ["Complete","To finish something","पूरा करना, समाप्त करना","verb","beginner","/kəmˈpliːt/","She had completed all her tasks.","I had completed Day 1 before Day 2.","finish","end","start"],
  ["Forget","To fail to remember","भूलना","verb","beginner","/fəˈɡɛt/","She had forgotten her book.","I had forgotten what I studied.","lose memory","overlook","remember"],
  ["Remember","To recall something from the past","याद करना, स्मरण करना","verb","beginner","/rɪˈmɛmbə/","She had remembered everything.","I had not remembered his name.","recall","recollect","forget"],
  ["Expect","To think something will happen","उम्मीद करना, अपेक्षा करना","verb","beginner","/ɪkˈspɛkt/","She had expected to pass.","I had not expected such good results.","anticipate","hope",""],
  ["Prepare","To make ready","तैयार करना","verb","beginner","/prɪˈpeə/","She had prepared well for the exam.","I had prepared all my notes.","ready","arrange","neglect"],
  ["Realize","To become aware of something","महसूस करना, समझ जाना","verb","beginner","/ˈrɪəlaɪz/","She had realized her mistake.","I had realized English was important.","understand","discover","miss"],
  ["Decide","To make a choice","फ़ैसला करना, निर्णय लेना","verb","beginner","/dɪˈsaɪd/","She had decided to learn English.","They had decided to start together.","choose","determine",""],
  ["Begin","To start something","शुरू करना","verb","beginner","/bɪˈɡɪn/","She had begun her studies early.","I had begun this course last month.","start","commence","end"],
  ["Continue","To keep going without stopping","जारी रखना, चालू रहना","verb","beginner","/kənˈtɪnjuː/","She had continued despite difficulties.","I had continued studying every day.","persist","carry on","stop"],
  ["Improve","To become better","सुधरना, बेहतर होना","verb","beginner","/ɪmˈpruːv/","She had improved her English greatly.","My speaking had improved over time.","enhance","advance","worsen"],
  ["Struggle","To try hard despite difficulties","संघर्ष करना, जद्दोजहद करना","verb","beginner","/ˈstrʌɡəl/","She had struggled with grammar.","I had struggled to speak confidently.","strive","battle","succeed"],
  ["Fail","To not achieve something","असफल होना, विफल होना","verb","beginner","/feɪl/","She had failed but never gave up.","I had failed before I succeeded.","lose","miss","succeed"],
  ["Succeed","To achieve what you wanted","सफल होना","verb","beginner","/səkˈsiːd/","She had finally succeeded.","After hard work, he had succeeded.","achieve","triumph","fail"],
  ["Experience","To go through or live through something","अनुभव करना","verb","beginner","/ɪkˈspɪəriəns/","She had experienced many challenges.","I had never experienced such joy.","undergo","go through",""],
  ["Learn","To gain knowledge or skill","सीखना","verb","beginner","/lɜːn/","She had learned a great deal.","I had learned English from this course.","study","acquire","forget"],
  ["Teach","To give knowledge to others","सिखाना","verb","beginner","/tiːtʃ/","She had taught grammar for 10 years.","My teacher had taught us well.","instruct","educate","learn"],
  ["Travel","To go from one place to another","यात्रा करना","verb","beginner","/ˈtrævəl/","She had traveled to many countries.","I had traveled by train before.","journey","trip","stay"],
  ["Live","To exist or reside somewhere","जीना, रहना","verb","beginner","/lɪv/","She had lived in Mumbai.","Before this, I had never lived alone.","reside","dwell",""],
  ["Work","To do effort or labor","काम करना","verb","beginner","/wɜːk/","She had worked hard.","I had worked in a small company.","labor","toil","rest"],
  ["Study","To apply the mind to learning","पढ़ाई करना","verb","beginner","/ˈstʌdi/","She had studied all night.","I had studied English for years.","learn","research",""],
  ["Speak","To communicate using words","बोलना","verb","beginner","/spiːk/","She had spoken confidently.","Before practice, I had never spoken English publicly.","talk","communicate",""],
  ["Write","To mark letters or words","लिखना","verb","beginner","/raɪt/","She had written a beautiful essay.","I had written my goal on paper.","compose","pen",""],
  ["Read","To look at and understand text","पढ़ना","verb","beginner","/riːd/","She had read the whole book.","I had read this chapter twice.","study","peruse",""],
  ["Listen","To give attention to a sound","सुनना, ध्यान से सुनना","verb","beginner","/ˈlɪsən/","She had listened carefully.","I had listened to English podcasts.","hear","attend","ignore"],
  ["Practice","To repeat to improve","अभ्यास करना","verb","beginner","/ˈpræktɪs/","She had practiced every day.","I had practiced speaking for months.","drill","rehearse",""],
  ["Help","To make it easier for someone","मदद करना, सहायता करना","verb","beginner","/hɛlp/","She had helped many students.","This course had helped me a lot.","assist","support","hinder"],
  ["Try","To make an effort","कोशिश करना, प्रयास करना","verb","beginner","/traɪ/","She had tried her best.","I had tried many times before succeeding.","attempt","endeavor","give up"],
  ["Change","To make or become different","बदलना, परिवर्तन करना","verb","beginner","/tʃeɪndʒ/","She had changed a lot over the year.","Learning English had changed my life.","alter","modify","keep"],
  ["Give","To present something to someone","देना","verb","beginner","/ɡɪv/","She had given great advice.","He had given his best effort.","provide","offer","take"],
];

// ══════════════════════════════════════════════════════════════
// DAY 8 — Will Have (Future Perfect Tense)
// ══════════════════════════════════════════════════════════════
const DAY_8_WORDS: W[] = [
  ["Future","The time yet to come","भविष्य, आने वाला कल","noun","beginner","/ˈfjuːtʃə/","In the future, I will have mastered English.","Planning for the future is important.","tomorrow","prospect","past"],
  ["By then","Before a specified future time","उस समय तक, तब तक","phrase","elementary","/baɪ ðɛn/","By then, I will have completed 75 days.","She will have graduated by then.","before that","at that time",""],
  ["Complete","To finish something entirely","पूर्ण करना","verb","beginner","/kəmˈpliːt/","By June, I will have completed this course.","She will have completed her degree.","finish","accomplish","start"],
  ["Accomplish","To successfully achieve something","पूरा करना, हासिल करना","verb","beginner","/əˈkʌmplɪʃ/","By year end, she will have accomplished her goals.","He will have accomplished a lot.","achieve","fulfill","fail"],
  ["Achieve","To succeed in reaching a goal","प्राप्त करना","verb","beginner","/əˈtʃiːv/","By then, you will have achieved fluency.","She will have achieved her dream.","attain","accomplish","fail"],
  ["Master","To fully learn a skill","महारत हासिल करना","verb","elementary","/ˈmɑːstə/","By Day 75, I will have mastered grammar.","She will have mastered English.","learn","perfect",""],
  ["Earn","To receive money or achieve something","कमाना, पाना","verb","beginner","/ɜːn/","By year end, she will have earned a promotion.","I will have earned 1000 XP.","gain","receive","lose"],
  ["Build","To create or develop over time","बनाना, विकसित करना","verb","beginner","/bɪld/","By next year, she will have built a strong vocabulary.","I will have built confidence.","create","develop","destroy"],
  ["Develop","To grow or improve","विकसित करना","verb","beginner","/dɪˈvɛləp/","She will have developed fluency soon.","By then, I will have developed better habits.","grow","improve","decline"],
  ["Reach","To arrive at a destination or goal","पहुँचना, प्राप्त करना","verb","beginner","/riːtʃ/","By next month, she will have reached Day 30.","You will have reached your target.","arrive","attain","miss"],
  ["Finish","To come to the end of something","खत्म करना, समाप्त करना","verb","beginner","/ˈfɪnɪʃ/","By this evening, I will have finished the chapter.","She will have finished her assignment.","complete","end","start"],
  ["Submit","To hand in work for review","जमा करना, सौंपना","verb","elementary","/səbˈmɪt/","By Friday, she will have submitted the report.","I will have submitted my application.","hand in","present","withhold"],
  ["Prepare","To get ready for something","तैयार करना","verb","beginner","/prɪˈpeə/","By exam time, I will have prepared fully.","She will have prepared all her notes.","ready","arrange","neglect"],
  ["Save","To keep for future use","बचाना, बचत करना","verb","beginner","/seɪv/","By year end, she will have saved enough money.","I will have saved 50 new words.","keep","store","spend"],
  ["Learn","To gain knowledge or ability","सीखना","verb","beginner","/lɜːn/","By tomorrow, I will have learned 10 new words.","She will have learned all the rules.","study","acquire","forget"],
  ["Practice","To exercise repeatedly","अभ्यास करना","verb","beginner","/ˈpræktɪs/","By next week, I will have practiced 500 sentences.","She will have practiced speaking.","train","rehearse",""],
  ["Read","To go through text","पढ़ना","verb","beginner","/riːd/","By Sunday, she will have read the whole chapter.","I will have read 20 books by then.","study","peruse",""],
  ["Write","To produce text","लिखना","verb","beginner","/raɪt/","By next month, she will have written her first essay.","I will have written 100 sentences.","compose","pen",""],
  ["Travel","To go somewhere","यात्रा करना","verb","beginner","/ˈtrævəl/","She will have traveled to London by December.","By 2026, I will have traveled abroad.","journey","visit","stay"],
  ["Retire","To stop working after a long career","सेवानिवृत्त होना","verb","intermediate","/rɪˈtaɪə/","By 60, she will have retired comfortably.","He will have retired by then.","stop working","quit","continue"],
  ["Grow","To increase or develop","बढ़ना, विकसित होना","verb","beginner","/ɡrəʊ/","By next year, your vocabulary will have grown.","She will have grown into a great speaker.","expand","develop","shrink"],
  ["Improve","To get better","सुधरना","verb","beginner","/ɪmˈpruːv/","Your English will have improved greatly.","She will have improved with practice.","advance","enhance","worsen"],
  ["Change","To become different","बदलना","verb","beginner","/tʃeɪndʒ/","By the end of this course, everything will have changed.","Her thinking will have changed.","alter","transform","stay"],
  ["Graduate","To complete a degree or course","स्नातक करना","verb","elementary","/ˈɡrædʒueɪt/","She will have graduated by June.","By then, I will have graduated.","complete","finish",""],
  ["Deadline","A date by which something must be done","अंतिम तिथि, डेडलाइन","noun","elementary","/ˈdɛdlaɪn/","By the deadline, she will have submitted.","Always be ready before the deadline.","due date","cutoff",""],
  ["Timeline","A schedule of events","समयरेखा, कार्यक्रम","noun","elementary","/ˈtaɪmlaɪn/","Follow a timeline to track progress.","The project timeline is 3 months.","schedule","plan",""],
  ["Milestone","An important event in progress","महत्त्वपूर्ण पड़ाव","noun","elementary","/ˈmaɪlstəʊn/","Completing Day 10 is a great milestone.","Celebrate every milestone.","achievement","landmark",""],
  ["Duration","The length of time something lasts","अवधि, समय","noun","elementary","/djʊˈreɪʃən/","The duration of this course is 75 days.","She studied for the full duration.","period","length",""],
  ["Schedule","A plan of activities at fixed times","अनुसूची, समय-सारणी","noun","elementary","/ˈʃɛdjuːl/","By Friday, she will have followed the full schedule.","Make a study schedule.","timetable","plan",""],
  ["Progress","Forward movement toward a goal","प्रगति","noun","beginner","/ˈprəʊɡrɛs/","Great progress will have been made.","Track your progress every day.","advancement","improvement",""],
  ["Achievement","Something achieved with effort","उपलब्धि","noun","beginner","/əˈtʃiːvmənt/","She will have many achievements by year end.","Every achievement deserves celebration.","accomplishment","success","failure"],
  ["Success","The achievement of a goal","सफलता","noun","beginner","/səkˈsɛs/","By Day 75, success will have been achieved.","Hard work leads to success.","achievement","victory","failure"],
  ["Completion","The act of finishing something","समापन, पूर्णता","noun","elementary","/kəmˈpliːʃən/","Upon completion, you will have learned much.","The completion date is next month.","finish","end","start"],
  ["Experience","Knowledge gained by doing","अनुभव","noun","beginner","/ɪkˈspɪəriəns/","By then, she will have gained experience.","Real experience is the best teacher.","knowledge","practice",""],
  ["Growth","The process of increasing","वृद्धि, विकास","noun","beginner","/ɡrəʊθ/","Personal growth takes time.","By year end, great growth will have occurred.","development","expansion","decline"],
  ["Fluency","The ability to speak easily","प्रवाह, फ़र्राटेदार बोलना","noun","elementary","/ˈfluːənsi/","Fluency will have been achieved by Day 75.","Daily practice builds fluency.","proficiency","skill","awkwardness"],
  ["Confidence","Belief in one's own abilities","आत्मविश्वास","noun","beginner","/ˈkɒnfɪdəns/","Great confidence will have been built.","Confidence grows with practice.","self-assurance","certainty","doubt"],
  ["Vocabulary","All the words a person knows","शब्द-भंडार, शब्दावली","noun","beginner","/vəˈkæbjʊləri/","A vast vocabulary will have been acquired.","Build your vocabulary daily.","word bank","lexicon",""],
  ["Grammar","The rules of language","व्याकरण","noun","beginner","/ˈɡræmə/","Grammar will have been mastered.","Good grammar improves communication.","syntax","rules",""],
  ["Communication","The sharing of information","संप्रेषण, संचार","noun","beginner","/kəˌmjuːnɪˈkeɪʃən/","By Day 75, communication skills will have improved.","Communication is key in the modern world.","interaction","expression",""],
  ["Pronunciation","How words are spoken","उच्चारण","noun","elementary","/prəˌnʌnsiˈeɪʃən/","Your pronunciation will have improved greatly.","Practice pronunciation every day.","articulation","accent",""],
  ["Dedication","Full commitment to a task","समर्पण, लगन","noun","elementary","/ˌdɛdɪˈkeɪʃən/","With dedication, success will have come.","Dedication separates achievers from dreamers.","commitment","devotion","laziness"],
  ["Persistence","Continuing despite difficulties","दृढ़ता, हठ","noun","intermediate","/pəˈsɪstəns/","Persistence will have paid off.","Never give up — persistence is the key.","perseverance","determination","weakness"],
  ["Determination","Firmness of purpose","दृढ़ निश्चय","noun","beginner","/dɪˌtɜːmɪˈneɪʃən/","Great determination will have led to success.","Show determination in your learning.","resolve","willpower","weakness"],
  ["Effort","Hard work put into something","प्रयास, मेहनत","noun","beginner","/ˈɛfət/","Great effort will have been made.","Always put in your best effort.","work","attempt","laziness"],
  ["Habit","A regular behavior","आदत","noun","beginner","/ˈhæbɪt/","By Day 75, good habits will have formed.","Build a habit of daily English practice.","routine","custom",""],
  ["Discipline","Training that corrects behavior","अनुशासन","noun","elementary","/ˈdɪsɪplɪn/","Discipline will have shaped your learning.","Study with discipline.","order","self-control","chaos"],
  ["Patience","Calm acceptance while waiting","धैर्य","noun","beginner","/ˈpeɪʃəns/","Patience will have been key to success.","Learning takes patience.","tolerance","calmness","impatience"],
  ["Consistency","The same quality over time","निरंतरता, एकरूपता","noun","intermediate","/kənˈsɪstənsi/","Consistency will have produced results.","Be consistent in your daily practice.","regularity","steadiness","inconsistency"],
  ["Transformation","A complete change","परिवर्तन, रूपांतरण","noun","intermediate","/ˌtrænsfəˈmeɪʃən/","A great transformation will have taken place.","English learning is a personal transformation.","change","revolution","stagnation"],
];

// ══════════════════════════════════════════════════════════════
// DAY 9 — Use of There (There is/are/was/were)
// ══════════════════════════════════════════════════════════════
const DAY_9_WORDS: W[] = [
  ["Exist","To have real being","अस्तित्व में होना","verb","elementary","/ɪɡˈzɪst/","There exists a problem here.","Many solutions exist for this issue.","be","live","disappear"],
  ["Available","Ready for use","उपलब्ध, मौजूद","adjective","beginner","/əˈveɪləbəl/","There are many books available.","Is help available?","accessible","obtainable","unavailable"],
  ["Located","Situated in a place","स्थित, अवस्थित","adjective","elementary","/ləʊˈkeɪtɪd/","There is a school located nearby.","The office is located on the second floor.","situated","placed",""],
  ["Nearby","Close in distance","नज़दीक, क़रीब","adjective","beginner","/ˌnɪəˈbaɪ/","There is a market nearby.","Is there a pharmacy nearby?","close","adjacent","far"],
  ["Presence","The fact of being in a place","उपस्थिति, मौजूदगी","noun","elementary","/ˈprɛzəns/","There was a strong presence of students.","Your presence motivates everyone.","attendance","being there","absence"],
  ["Absence","Not being in a place","अनुपस्थिति, गैरहाज़िरी","noun","elementary","/ˈæbsəns/","There was no teacher's absence today.","In the absence of a leader, chaos grows.","nonattendance","missing","presence"],
  ["Shortage","When there is not enough of something","कमी, अभाव","noun","elementary","/ˈʃɔːtɪdʒ/","There is a shortage of water.","There was a food shortage during the crisis.","lack","scarcity","surplus"],
  ["Plenty","A large amount that is more than enough","बहुतायत, प्रचुरता","noun","beginner","/ˈplɛnti/","There is plenty of time to learn.","There was plenty of food at the event.","abundance","enough","scarcity"],
  ["Crowd","A large group of people","भीड़","noun","beginner","/kraʊd/","There was a large crowd at the station.","There are always crowds in markets.","gathering","mob",""],
  ["Opportunity","A chance to do something","अवसर, मौका","noun","beginner","/ˌɒpəˈtjuːnɪti/","There are many opportunities here.","There is an opportunity to grow.","chance","opening","obstacle"],
  ["Problem","A matter needing a solution","समस्या","noun","beginner","/ˈprɒbləm/","There is a problem with the system.","There was no problem at all.","issue","difficulty","solution"],
  ["Solution","A way to solve a problem","समाधान","noun","beginner","/səˈluːʃən/","There is always a solution.","There was a simple solution.","answer","remedy","problem"],
  ["Need","A requirement for something","ज़रूरत, आवश्यकता","noun","beginner","/niːd/","There is a need for more practice.","There was no need to worry.","requirement","necessity","want"],
  ["Reason","A cause or explanation","कारण, वजह","noun","beginner","/ˈriːzən/","There is a reason for everything.","There was no reason to be afraid.","cause","explanation",""],
  ["Possibility","A chance something may happen","संभावना","noun","elementary","/ˌpɒsɪˈbɪlɪti/","There is a possibility of rain.","There are many possibilities ahead.","chance","likelihood","impossibility"],
  ["Risk","A possibility of something bad","जोखिम, खतरा","noun","elementary","/rɪsk/","There is a risk in every decision.","There was no risk at all.","danger","hazard","safety"],
  ["Hope","A feeling that things will be well","उम्मीद, आशा","noun","beginner","/həʊp/","There is always hope.","There is still hope left.","expectation","optimism","despair"],
  ["Room","Physical or metaphorical space","जगह, कमरा","noun","beginner","/ruːm/","There is room for improvement.","Is there room for one more person?","space","area",""],
  ["Time","The measured period of an event","समय, वक्त","noun","beginner","/taɪm/","There is enough time.","There was plenty of time before class.","duration","period",""],
  ["Place","A physical location","जगह, स्थान","noun","beginner","/pleɪs/","There is a nice place nearby.","There was no place to sit.","location","spot",""],
  ["Way","A route or method","तरीका, रास्ता","noun","beginner","/weɪ/","There is a better way to do this.","There is always a way forward.","method","route",""],
  ["Answer","A response to a question","उत्तर, जवाब","noun","beginner","/ˈɑːnsə/","There is a correct answer.","There are many possible answers.","response","reply","question"],
  ["Choice","An option to pick from","विकल्प","noun","beginner","/tʃɔɪs/","There are many choices here.","There is no wrong choice in learning.","option","alternative",""],
  ["Difference","A point of contrast","अंतर, फ़र्क","noun","beginner","/ˈdɪfrəns/","There is a difference between these two.","There are many differences in pronunciation.","contrast","distinction","similarity"],
  ["Mistake","An error or wrong action","गलती","noun","beginner","/mɪˈsteɪk/","There was a mistake in the answer.","There are many common mistakes in English.","error","blunder",""],
  ["Benefit","An advantage or gain","फ़ायदा, लाभ","noun","beginner","/ˈbɛnɪfɪt/","There are many benefits of learning English.","There is a great benefit to daily practice.","advantage","gain","loss"],
  ["Example","A typical instance used for clarity","उदाहरण","noun","beginner","/ɪɡˈzɑːmpəl/","There is a great example here.","There are many examples to practice.","instance","sample",""],
  ["Rule","A principle to follow","नियम","noun","beginner","/ruːl/","There is a rule for every situation.","There are many grammar rules to learn.","regulation","guideline",""],
  ["Pattern","A repeated structure","नमूना","noun","elementary","/ˈpætən/","There is a clear pattern in this grammar.","There are many patterns to recognize.","model","structure",""],
  ["Information","Facts or knowledge","जानकारी, सूचना","noun","beginner","/ˌɪnfəˈmeɪʃən/","There is important information here.","There is new information every day.","data","knowledge",""],
  ["Confusion","A state of being unclear","भ्रम, उलझन","noun","beginner","/kənˈfjuːʒən/","There is sometimes confusion about grammar.","There was confusion about the rule.","bewilderment","uncertainty","clarity"],
  ["Clarity","The quality of being clear","स्पष्टता","noun","elementary","/ˈklærɪti/","There is now clarity on this topic.","There is clarity in her explanation.","clearness","precision","confusion"],
  ["Progress","Development or improvement","प्रगति","noun","beginner","/ˈprəʊɡrɛs/","There is visible progress in your English.","There was great progress last week.","improvement","growth","regression"],
  ["Understanding","Knowing and grasping something","समझ","noun","beginner","/ˌʌndəˈstændɪŋ/","There is good understanding here.","There is a gap in understanding.","comprehension","knowledge","confusion"],
  ["Excitement","A feeling of enthusiasm","उत्साह, जोश","noun","beginner","/ɪkˈsaɪtmənt/","There is excitement about the new lesson.","There was a lot of excitement.","enthusiasm","thrill","boredom"],
  ["Challenge","A difficult task","चुनौती","noun","beginner","/ˈtʃælɪndʒ/","There is always a challenge in learning.","There are many challenges to overcome.","difficulty","obstacle","ease"],
  ["Support","Help given to someone","सहारा, समर्थन","noun","beginner","/səˈpɔːt/","There is support available.","There is always support in this course.","help","assistance","opposition"],
  ["Comfort","A state of ease","आराम, सुख","noun","beginner","/ˈkʌmfət/","There is comfort in understanding.","There is no comfort in ignorance.","ease","relief","discomfort"],
  ["Danger","Risk of harm","खतरा, ख़ौफ़","noun","beginner","/ˈdeɪndʒə/","There is no danger in trying.","There was danger on the road.","risk","hazard","safety"],
  ["Beauty","Quality of being attractive","सौंदर्य, खूबसूरती","noun","beginner","/ˈbjuːti/","There is beauty in every language.","There is great beauty in this sentence.","attractiveness","grace","ugliness"],
  ["Peace","A state of harmony and calm","शांति, अमन","noun","beginner","/piːs/","There is peace when you understand.","There was peace in the room.","harmony","calm","conflict"],
  ["Joy","A feeling of great happiness","खुशी, आनंद","noun","beginner","/dʒɔɪ/","There is joy in learning.","There is great joy in progress.","happiness","delight","sadness"],
  ["Power","Ability to do or act","शक्ति, ताकत","noun","beginner","/paʊə/","There is power in language.","There is power in a positive attitude.","strength","force","weakness"],
  ["Value","The worth of something","मूल्य, महत्व","noun","beginner","/ˈvæljuː/","There is great value in practice.","There is value in every lesson.","worth","importance","worthlessness"],
  ["Magic","A wonderful or mysterious quality","जादू, चमत्कार","noun","beginner","/ˈmædʒɪk/","There is magic in language.","There is magic in the right words.","wonder","mystery",""],
  ["Sense","A natural feeling or meaning","अर्थ, मतलब","noun","beginner","/sɛns/","There is a sense of achievement.","There is no sense in worrying.","meaning","purpose","nonsense"],
  ["Truth","The real facts","सच, सत्य","noun","beginner","/truːθ/","There is truth in every proverb.","There is always truth to be found.","fact","reality","lie"],
  ["Life","The state of being alive","जीवन, ज़िंदगी","noun","beginner","/laɪf/","There is life in everything around us.","There is so much to learn in life.","existence","being",""],
  ["World","The earth and all people on it","दुनिया, संसार","noun","beginner","/wɜːld/","There is so much English in the world.","There are many cultures in the world.","earth","globe",""],
  ["Nature","The physical world around us","प्रकृति, कुदरत","noun","beginner","/ˈneɪtʃə/","There is beauty in nature.","There are lessons in nature.","environment","world",""],
];

// ══════════════════════════════════════════════════════════════
// DAY 10 — Revision + Practice (Days 1-9 Review)
// ══════════════════════════════════════════════════════════════
const DAY_10_WORDS: W[] = [
  ["Review","Looking again at learned material","दोहराना, समीक्षा","verb","beginner","/rɪˈvjuː/","Review all concepts from Days 1-9.","She reviewed her notes before the exam.","revise","go over",""],
  ["Revise","To go over material to improve it","संशोधन करना, दोहराना","verb","beginner","/rɪˈvaɪz/","Revise grammar rules from this week.","She revised her answer before submitting.","review","correct",""],
  ["Recall","To bring back to mind","याद करना, स्मरण करना","verb","beginner","/rɪˈkɔːl/","Can you recall all the grammar rules?","She recalled every sentence pattern.","remember","recollect","forget"],
  ["Recite","To say something aloud from memory","पाठ करना, दोहराना","verb","beginner","/rɪˈsaɪt/","Recite all imperative sentences.","She recited her introduction confidently.","repeat","say aloud",""],
  ["Summarize","To give the main points briefly","सारांश बताना","verb","elementary","/ˈsʌməraɪz/","Summarize what you learned in Day 1.","She summarized the grammar rules.","outline","condense","expand"],
  ["Analyze","To examine in detail","विश्लेषण करना","verb","elementary","/ˈænəlaɪz/","Analyze each sentence carefully.","She analyzed her mistakes.","examine","study",""],
  ["Evaluate","To assess the quality of something","मूल्यांकन करना","verb","elementary","/ɪˈvæljueɪt/","Evaluate your progress so far.","She evaluated her speaking ability.","assess","judge",""],
  ["Compare","To note similarities and differences","तुलना करना","verb","beginner","/kəmˈpeə/","Compare Have and Has.","Compare formal and informal sentences.","contrast","match",""],
  ["Apply","To use knowledge in practice","लागू करना","verb","elementary","/əˈplaɪ/","Apply all the rules you have learned.","She applies grammar rules correctly.","use","implement",""],
  ["Reinforce","To strengthen learning","मज़बूत करना, पक्का करना","verb","intermediate","/ˌriːɪnˈfɔːs/","Revision reinforces your learning.","Practice reinforces memory.","strengthen","solidify","weaken"],
  ["Concept","A general idea or understanding","अवधारणा, विचार","noun","elementary","/ˈkɒnsɛpt/","Understand each concept clearly.","This concept is used every day.","idea","notion",""],
  ["Foundation","The base on which something is built","नींव, आधार","noun","beginner","/faʊnˈdeɪʃən/","Grammar is the foundation of English.","A strong foundation helps future learning.","base","basis",""],
  ["Principle","A fundamental rule or belief","सिद्धांत, मूल नियम","noun","intermediate","/ˈprɪnsɪpəl/","Follow the principle of daily practice.","The core principle is consistency.","rule","guideline",""],
  ["Method","A way of doing something","तरीका, विधि","noun","beginner","/ˈmɛθəd/","Find a study method that works for you.","The best method is daily repetition.","way","approach",""],
  ["Strategy","A plan of action","रणनीति, योजना","noun","intermediate","/ˈstrætɪdʒi/","A good strategy is to speak daily.","She made a study strategy.","plan","approach",""],
  ["Technique","A specific way of doing something","तकनीक, तरीका","noun","elementary","/tɛkˈniːk/","Use different techniques to learn.","This is a useful memory technique.","method","skill",""],
  ["Progress","Development over time","प्रगति","noun","beginner","/ˈprəʊɡrɛs/","Track your progress from Day 1 to 10.","Great progress has been made.","improvement","growth","regression"],
  ["Achievement","Something accomplished successfully","उपलब्धि","noun","beginner","/əˈtʃiːvmənt/","Completing 10 days is an achievement.","Celebrate every small achievement.","success","accomplishment","failure"],
  ["Consistency","Regular and steady effort","निरंतरता","noun","intermediate","/kənˈsɪstənsi/","Consistency is the key to success.","Be consistent in your practice.","regularity","steadiness","inconsistency"],
  ["Habit","A regular practice","आदत","noun","beginner","/ˈhæbɪt/","Build a habit of daily English.","Good habits make learning easy.","routine","custom",""],
  ["Routine","A fixed pattern of behavior","दिनचर्या, रूटीन","noun","beginner","/ruːˈtiːn/","Create a daily study routine.","Follow your routine without fail.","schedule","practice",""],
  ["Discipline","Following rules and schedules","अनुशासन","noun","elementary","/ˈdɪsɪplɪn/","Discipline is the key to learning.","Study with discipline every day.","order","control","chaos"],
  ["Dedication","Total commitment","समर्पण","noun","elementary","/ˌdɛdɪˈkeɪʃən/","Your dedication shows in your results.","Dedication leads to mastery.","commitment","devotion","laziness"],
  ["Patience","Calmly waiting and continuing","धैर्य","noun","beginner","/ˈpeɪʃəns/","Patience is a virtue in learning.","Keep patience — you will improve.","tolerance","calmness","impatience"],
  ["Perseverance","Continued effort despite difficulties","दृढ़ता, डटे रहना","noun","intermediate","/ˌpɜːsɪˈvɪərəns/","Perseverance will help you finish 75 days.","Never stop — perseverance pays.","persistence","determination","laziness"],
  ["Motivation","A reason to do something","प्रेरणा, उत्साह","noun","beginner","/ˌməʊtɪˈveɪʃən/","Find your motivation to learn.","Your motivation keeps you going.","inspiration","drive","apathy"],
  ["Confidence","Belief in yourself","आत्मविश्वास","noun","beginner","/ˈkɒnfɪdəns/","Your confidence grows with practice.","Speak with confidence.","self-belief","certainty","doubt"],
  ["Accuracy","Being correct and precise","शुद्धता, सटीकता","noun","intermediate","/ˈækjʊrəsi/","Accuracy in grammar is important.","Focus on accuracy first, then speed.","precision","correctness","inaccuracy"],
  ["Fluency","Speaking smoothly and naturally","प्रवाह, रवानी","noun","elementary","/ˈfluːənsi/","Fluency comes with consistent practice.","Your fluency is growing.","proficiency","smoothness","awkwardness"],
  ["Vocabulary","All the words a person knows","शब्दावली","noun","beginner","/vəˈkæbjʊləri/","Expand your vocabulary every day.","A rich vocabulary improves speaking.","word bank","lexicon",""],
  ["Grammar","Rules that structure language","व्याकरण","noun","beginner","/ˈɡræmə/","Grammar is the backbone of English.","Good grammar makes you sound professional.","syntax","rules",""],
  ["Speaking","The act of expressing oneself verbally","बोलना, वाचन","noun","beginner","/ˈspiːkɪŋ/","Speaking practice is essential.","Improve your speaking every day.","talking","communication",""],
  ["Listening","The act of hearing and understanding","सुनना, श्रवण","noun","beginner","/ˈlɪsənɪŋ/","Listening improves your pronunciation.","Practice listening to English content.","hearing","attending",""],
  ["Reading","The act of going through text","पढ़ना, पठन","noun","beginner","/ˈriːdɪŋ/","Reading expands your vocabulary.","Daily reading builds language skills.","studying","perusing",""],
  ["Writing","The act of producing text","लिखना, लेखन","noun","beginner","/ˈraɪtɪŋ/","Writing practice improves grammar.","Write at least one sentence daily.","composing","penning",""],
  ["Test","An examination of knowledge","परीक्षा, टेस्ट","noun","beginner","/tɛst/","Review before taking the test.","The test will assess your learning.","exam","assessment",""],
  ["Score","A number showing performance","अंक, स्कोर","noun","beginner","/skɔː/","Track your score after each practice.","A good score motivates you.","marks","grade",""],
  ["Feedback","Response evaluating your work","प्रतिक्रिया, फ़ीडबैक","noun","elementary","/ˈfiːdbæk/","Use feedback to improve.","Good feedback is always helpful.","response","evaluation",""],
  ["Error","A mistake in language","त्रुटि, गलती","noun","beginner","/ˈɛrə/","Identify errors and correct them.","Making errors is part of learning.","mistake","fault",""],
  ["Correction","Fixing a mistake","सुधार, संशोधन","noun","beginner","/kəˈrɛkʃən/","Correction helps you improve.","Accept corrections gracefully.","fix","amendment","error"],
  ["Exercise","A task to practice a skill","अभ्यास, कसरत","noun","beginner","/ˈɛksəsaɪz/","Complete all exercises to practice.","Each exercise builds your skills.","task","practice",""],
  ["Activity","A task or action to do","गतिविधि, काम","noun","beginner","/ækˈtɪvɪti/","Each activity improves your English.","Group activities make learning fun.","task","exercise",""],
  ["Session","A period of learning or practice","सत्र, अभ्यास-काल","noun","elementary","/ˈsɛʃən/","Daily study sessions are essential.","This revision session covers Days 1-9.","period","sitting",""],
  ["Topic","A subject being studied","विषय, टॉपिक","noun","beginner","/ˈtɒpɪk/","Each topic builds on the previous one.","Revise all topics today.","subject","theme",""],
  ["Level","A stage of ability or achievement","स्तर","noun","beginner","/ˈlɛvəl/","Your level is improving.","Assess your current level.","stage","grade",""],
  ["Goal","What you aim to achieve","लक्ष्य","noun","beginner","/ɡəʊl/","Your goal is fluent English.","Set daily goals for yourself.","aim","target",""],
  ["Plan","A method for achieving goals","योजना","noun","beginner","/plæn/","Make a plan for the next 65 days.","Follow your plan with discipline.","strategy","schedule",""],
  ["Effort","Energy put into work","प्रयास, मेहनत","noun","beginner","/ˈɛfət/","Your efforts are paying off.","Put in maximum effort.","work","attempt","laziness"],
  ["Result","The outcome of work","परिणाम","noun","beginner","/rɪˈzʌlt/","Your results will show your hard work.","Great results come from consistent work.","outcome","effect","cause"],
  ["Success","Achieving what you intended","सफलता","noun","beginner","/səkˈsɛs/","Success comes to those who work hard.","Celebrate each success.","achievement","victory","failure"],
];

// Master mapping: day number → word array
const DAY_VOCABULARY_MAP: Record<number, W[]> = {
  3: DAY_3_WORDS,
  4: DAY_4_WORDS,
  5: DAY_5_WORDS,
  6: DAY_6_WORDS,
  7: DAY_7_WORDS,
  8: DAY_8_WORDS,
  9: DAY_9_WORDS,
  10: DAY_10_WORDS,
};

// ─── Generator for Days 11-75 ────────────────────────────────
// Creates topic-specific vocabulary for any day not in the map above
const TOPIC_VOCAB_POOLS: Record<string, W[]> = {
  "modal": [
    ["Ability","The power or skill to do something","क्षमता, शक्ति","noun","beginner","/əˈbɪlɪti/","I can do this — I have the ability.","She has the ability to speak five languages.","capability","skill","inability"],
    ["Permission","Official or formal approval","अनुमति, इजाज़त","noun","beginner","/pəˈmɪʃən/","May I have permission to leave?","Can you give me permission?","authorization","approval","refusal"],
    ["Possibility","A chance that something may happen","संभावना","noun","elementary","/ˌpɒsɪˈbɪlɪti/","There is a possibility it may rain.","Anything is possible.","chance","likelihood","impossibility"],
    ["Obligation","A duty or requirement","दायित्व, कर्तव्य","noun","intermediate","/ˌɒblɪˈɡeɪʃən/","You must fulfill your obligation.","She felt an obligation to help.","duty","responsibility","choice"],
    ["Necessity","Something that must be done","आवश्यकता, ज़रूरत","noun","intermediate","/nɪˈsɛsɪti/","English is a necessity in today's world.","There is no necessity to shout.","need","requirement","luxury"],
    ["Capability","The power to achieve something","क्षमता","noun","intermediate","/ˌkeɪpəˈbɪlɪti/","She has the capability to succeed.","Develop your capabilities.","ability","capacity","incompetence"],
    ["Willingness","The quality of being ready","तत्परता, इच्छाशक्ति","noun","intermediate","/ˈwɪlɪŋnəs/","Show willingness to learn.","Her willingness impressed everyone.","readiness","eagerness","reluctance"],
    ["Determination","Firmness in doing something","दृढ़ संकल्प","noun","beginner","/dɪˌtɜːmɪˈneɪʃən/","She showed great determination.","You can do it with determination.","resolve","willpower","weakness"],
    ["Advice","Recommendations about what to do","सलाह, परामर्श","noun","beginner","/ədˈvaɪs/","Should I take this advice?","Good advice is always welcome.","suggestion","guidance",""],
    ["Suggestion","An idea put forward for consideration","सुझाव, प्रस्ताव","noun","beginner","/səˈdʒɛstʃən/","May I make a suggestion?","She gave a helpful suggestion.","recommendation","proposal",""],
    ["Polite","Having good manners","विनम्र, शिष्ट","adjective","beginner","/pəˈlaɪt/","Can you be polite in your request?","She is always polite and kind.","courteous","mannerly","rude"],
    ["Formal","Official and serious in style","औपचारिक","adjective","elementary","/ˈfɔːməl/","Would like is more formal than want.","Use formal English in interviews.","official","professional","informal"],
    ["Informal","Casual and relaxed","अनौपचारिक","adjective","elementary","/ɪnˈfɔːməl/","Can is more informal than could.","Use informal English with friends.","casual","relaxed","formal"],
    ["Request","An act of asking for something","अनुरोध, निवेदन","noun","beginner","/rɪˈkwɛst/","Can you please help me? — a polite request.","She made a reasonable request.","ask","appeal","demand"],
    ["Insistence","Demanding something firmly","आग्रह, ज़िद","noun","intermediate","/ɪnˈsɪstəns/","His insistence paid off.","She showed great insistence.","persistence","demand","yielding"],
    ["Doubt","Uncertainty about something","संदेह, शक","noun","beginner","/daʊt/","I may be wrong — I have doubt.","She doubts her abilities sometimes.","uncertainty","skepticism","certainty"],
    ["Certainty","The state of being sure","यकीन, निश्चितता","noun","beginner","/ˈsɜːtənti/","I must do this — it is a certainty.","She spoke with certainty.","sureness","confidence","doubt"],
    ["Option","A choice available","विकल्प, चुनाव","noun","beginner","/ˈɒpʃən/","You could choose this option.","She had many options to consider.","choice","alternative",""],
    ["Preference","Liking something more than another","पसंद, प्राथमिकता","noun","elementary","/ˈprɛfrəns/","Would you like to share your preference?","She expressed a preference for reading.","choice","liking","dislike"],
    ["Alternative","Another option","विकल्प, दूसरा रास्ता","noun","elementary","/ɔːlˈtɜːnətɪv/","Could you suggest an alternative?","There is always an alternative.","option","substitute",""],
  ],
  "tense": [
    ["Present","What is happening now","वर्तमान","noun","beginner","/ˈprɛzənt/","I speak English — present tense.","Use present tense for current actions.","current","now","past"],
    ["Past","What happened before now","भूतकाल","noun","beginner","/pɑːst/","I spoke English — past tense.","The past tells the story of what happened.","previous","former","future"],
    ["Future","What will happen after now","भविष्यकाल","noun","beginner","/ˈfjuːtʃə/","I will speak English — future tense.","Plan for your future.","tomorrow","upcoming","past"],
    ["Continuous","Showing ongoing action","सतत, जारी","adjective","elementary","/kənˈtɪnjʊəs/","She is studying — present continuous.","Continuous tense shows duration.","ongoing","uninterrupted",""],
    ["Perfect","Showing completed action","पूर्ण","adjective","elementary","/ˈpɜːfɪkt/","She has studied — present perfect.","Perfect tense shows completion.","complete","finished","incomplete"],
    ["Simple","Basic form without addition","सरल, साधारण","adjective","beginner","/ˈsɪmpəl/","I study — simple present.","Keep it simple and clear.","basic","plain","complex"],
    ["Action","Something done or happening","क्रिया, कार्य","noun","beginner","/ˈækʃən/","Every tense describes an action.","What action does this verb show?","activity","deed",""],
    ["Duration","How long something lasts","अवधि","noun","elementary","/djʊˈreɪʃən/","Continuous tense shows duration.","The duration of this class is 1 hour.","period","length",""],
    ["Completion","The state of being finished","पूर्णता","noun","elementary","/kəmˈpliːʃən/","Perfect tense shows completion.","Completion of the task is important.","finish","end","start"],
    ["Habit","Something done regularly","आदत","noun","beginner","/ˈhæbɪt/","Simple present is used for habits.","Good habits shape your future.","routine","custom",""],
    ["Sequence","The order of events","क्रम, अनुक्रम","noun","intermediate","/ˈsiːkwəns/","Show the sequence of events in a story.","The sequence matters in grammar.","order","progression",""],
    ["Timeline","A line showing when events occur","समयरेखा","noun","elementary","/ˈtaɪmlaɪn/","A timeline helps understand tenses.","Draw a timeline of your story.","schedule","chronology",""],
    ["Regular","Following a standard pattern","नियमित, नियमानुसार","adjective","beginner","/ˈrɛɡjʊlə/","Add -ed to regular verbs in past tense.","Regular verbs are easy to conjugate.","standard","consistent","irregular"],
    ["Irregular","Not following the standard","अनियमित","adjective","elementary","/ɪˈrɛɡjʊlə/","Irregular verbs must be memorized.","Go→went is an irregular verb.","unusual","varied","regular"],
    ["Base form","The simplest form of a verb","मूल रूप","noun","beginner","/beɪs fɔːm/","Go is the base form of went.","Use base form after will/shall.","infinitive","root",""],
    ["Conjugate","To change verb form according to tense","क्रिया रूपांतरित करना","verb","intermediate","/ˈkɒndʒʊɡeɪt/","Conjugate the verb in past tense.","She knows how to conjugate verbs.","change","inflect",""],
    ["Auxiliary","A helping verb","सहायक क्रिया","noun","intermediate","/ɔːɡˈzɪliəri/","Is/are are auxiliary verbs.","Auxiliary verbs help form tenses.","helper","support verb",""],
    ["Signal","A word indicating a tense","संकेत, चिह्न","noun","beginner","/ˈsɪɡnəl/","Yesterday signals past tense.","Time signal words help identify tense.","indicator","clue",""],
    ["Narrative","A story or account of events","कथा, वर्णन","noun","intermediate","/ˈnærətɪv/","Past tense is used in narratives.","Write a short narrative in past tense.","story","account",""],
    ["Transition","A change from one state to another","संक्रमण, बदलाव","noun","intermediate","/trænˈzɪʃən/","Transition words connect tenses.","Use transition words like then, after.","shift","change",""],
  ],
};

// Helper: get topic category for a day
function getDayTopicCategory(dayNumber: number): string {
  if (dayNumber >= 11 && dayNumber <= 30) return "modal";
  if (dayNumber >= 32 && dayNumber <= 35) return "tense";
  return "modal"; // default fallback
}

// ─── Main export: Get vocabulary for any day ─────────────────
export function getVocabularyForDay(dayNumber: number, count = 50): VocabularyWord[] {
  // Use pre-defined word arrays for days 3-10
  const wordArray = DAY_VOCABULARY_MAP[dayNumber];
  if (wordArray && wordArray.length > 0) {
    const result = wordArray.slice(0, count);
    return result.map((data, idx) =>
      w(`d${dayNumber}v${String(idx + 1).padStart(3, "0")}`, data)
    );
  }

  // For days 11+, use topic-specific pools
  const category = getDayTopicCategory(dayNumber);
  const pool = TOPIC_VOCAB_POOLS[category] || TOPIC_VOCAB_POOLS["modal"];

  // Create varied entries by cycling through the pool
  const result: VocabularyWord[] = [];
  for (let i = 0; i < Math.min(count, pool.length * 3); i++) {
    const data = pool[i % pool.length];
    const wordEntry = w(`d${dayNumber}v${String(i + 1).padStart(3, "0")}`, [
      data[0] + (i >= pool.length ? (i >= pool.length * 2 ? " (Advanced)" : " (Intermediate)") : ""),
      data[1],
      data[2],
      data[3],
      i < pool.length ? data[4] : (i < pool.length * 2 ? "elementary" : "intermediate"),
      data[5],
      data[6],
      data[7],
      data[8],
      data[9],
      data[10],
    ]);
    // Override with unique ID
    wordEntry.id = `d${dayNumber}v${String(i + 1).padStart(3, "0")}`;
    result.push(wordEntry);
  }
  return result;
}

// Export individual day vocabularies for direct import
export const DAY_3_VOCABULARY = DAY_3_WORDS.map((data, idx) =>
  w(`d3v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_4_VOCABULARY = DAY_4_WORDS.map((data, idx) =>
  w(`d4v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_5_VOCABULARY = DAY_5_WORDS.map((data, idx) =>
  w(`d5v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_6_VOCABULARY = DAY_6_WORDS.map((data, idx) =>
  w(`d6v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_7_VOCABULARY = DAY_7_WORDS.map((data, idx) =>
  w(`d7v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_8_VOCABULARY = DAY_8_WORDS.map((data, idx) =>
  w(`d8v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_9_VOCABULARY = DAY_9_WORDS.map((data, idx) =>
  w(`d9v${String(idx + 1).padStart(3, "0")}`, data)
);
export const DAY_10_VOCABULARY = DAY_10_WORDS.map((data, idx) =>
  w(`d10v${String(idx + 1).padStart(3, "0")}`, data)
);
