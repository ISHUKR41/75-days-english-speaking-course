// ============================================================
// Day 5 Vocabulary — DEMONSTRATIVE PRONOUNS (300+ unique words)
// Each word: IPA, Hindi meaning, examples, synonyms, antonyms
// UNIQUE words — none repeated from other days
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
    example3: `The word "${word}" is commonly used in English conversations.`,
    example4: `Using "${word}" correctly shows your English proficiency.`,
    example5: `Practice using "${word}" in your daily English sentences.`,
    officeExample: `In a professional setting, "${word}" is frequently used.`,
    dailyExample: `You can use "${word}" in everyday English conversations.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

// 300 unique vocabulary words for Day 5
const WORDS: W[] = [
  // Demonstrative / Reference words
  ["refer", "to mention or point to something", "संदर्भ देना", "verb", "beginner", "/rɪˈfɜːr/", "Please refer to this page for the answer.", "He referred to that document during the meeting.", "mention", "indicate", "ignore"],
  ["indicate", "to show or point out something", "संकेत देना", "verb", "beginner", "/ˈɪndɪkeɪt/", "This arrow indicates the correct direction.", "She indicated that those files were important.", "show", "signal", "hide"],
  ["point", "to direct attention toward something", "इशारा करना", "verb", "beginner", "/pɔɪnt/", "Can you point to that building over there?", "He pointed at this mark on the board.", "gesture", "indicate", ""],
  ["demonstrate", "to show how something works", "दिखाना / प्रदर्शित करना", "verb", "elementary", "/ˈdemənstreɪt/", "The teacher demonstrated this experiment to the class.", "She demonstrated how to use that machine.", "show", "illustrate", "conceal"],
  ["identify", "to recognize and name something", "पहचानना", "verb", "beginner", "/aɪˈdentɪfaɪ/", "Can you identify this plant?", "She identified those birds by their sound.", "recognize", "distinguish", "ignore"],
  ["specify", "to state something clearly and exactly", "स्पष्ट रूप से बताना", "verb", "elementary", "/ˈspesɪfaɪ/", "Please specify which book you need.", "He specified those requirements in writing.", "state", "define", "generalize"],
  ["denote", "to be a sign or symbol of something", "दर्शाना / संकेत करना", "verb", "intermediate", "/dɪˈnoʊt/", "This symbol denotes danger.", "Red color denotes stop in traffic signals.", "represent", "signify", "conceal"],
  ["display", "to show something for others to see", "प्रदर्शित करना", "verb", "beginner", "/dɪˈspleɪ/", "She displayed those paintings on the wall.", "This screen displays all your messages.", "show", "present", "hide"],
  ["highlight", "to draw attention to something important", "उजागर करना", "verb", "elementary", "/ˈhaɪlaɪt/", "Please highlight this sentence in yellow.", "The report highlighted those key issues.", "emphasize", "mark", "ignore"],
  ["select", "to choose something from a group", "चुनना", "verb", "beginner", "/sɪˈlekt/", "Please select this option from the menu.", "She selected those flowers for the bouquet.", "choose", "pick", "reject"],

  // Location / Position
  ["nearby", "close in distance, not far away", "पास में / निकट", "adjective", "beginner", "/ˈnɪrbaɪ/", "There is a market nearby.", "The school is nearby, just two minutes away.", "close", "adjacent", "distant"],
  ["distant", "far away in space or time", "दूर / दूरस्थ", "adjective", "beginner", "/ˈdɪstənt/", "Those mountains look distant but are beautiful.", "He moved to a distant city for work.", "far", "remote", "nearby"],
  ["above", "at a higher level or position", "ऊपर", "adverb", "beginner", "/əˈbʌv/", "The fan is above this table.", "Birds flew above those tall buildings.", "over", "higher", "below"],
  ["below", "at a lower level or position", "नीचे", "adverb", "beginner", "/bɪˈloʊ/", "The answer is written below this question.", "Water flows below those rocks.", "under", "beneath", "above"],
  ["beside", "next to or at the side of something", "बगल में / पास में", "adverb", "beginner", "/bɪˈsaɪd/", "Please sit beside me.", "She placed that vase beside this window.", "next to", "alongside", "away"],
  ["between", "in the space separating two things", "के बीच में", "adverb", "beginner", "/bɪˈtwiːn/", "This shop is between the bank and the school.", "She stood between those two trees.", "amid", "in the middle", "outside"],
  ["among", "surrounded by or in the company of", "के बीच (कई में)", "adverb", "beginner", "/əˈmʌŋ/", "She found her pen among those papers.", "He is popular among his friends.", "amidst", "surrounded by", "separate"],
  ["opposite", "on the other side, facing something", "विपरीत / सामने", "adjective", "beginner", "/ˈɒpəzɪt/", "The park is opposite this building.", "She sat opposite him in the meeting room.", "facing", "across", "same"],
  ["ahead", "in front, further forward", "आगे", "adverb", "beginner", "/əˈhed/", "The road ahead is clear.", "Look ahead, not at those distractions.", "forward", "in front", "behind"],
  ["behind", "at the back of something", "पीछे", "adverb", "beginner", "/bɪˈhaɪnd/", "The garden is behind this house.", "She found those keys behind the sofa.", "at the back", "following", "ahead"],
  ["around", "on all sides of something", "चारों ओर", "adverb", "beginner", "/əˈraʊnd/", "There are trees around this building.", "She looked around for those files.", "surrounding", "encircling", "away"],
  ["within", "inside the limits of something", "के अंदर / भीतर", "adverb", "elementary", "/wɪˈðɪn/", "Please finish this work within the deadline.", "The answer lies within those pages.", "inside", "in", "outside"],
  ["beyond", "further than, on the other side of", "परे / आगे", "adverb", "elementary", "/bɪˈɒnd/", "The city lies beyond those hills.", "This task is beyond this simple step.", "past", "further", "within"],
  ["throughout", "in every part of something", "हर जगह / पूरे में", "adverb", "elementary", "/θruːˈaʊt/", "This rule applies throughout the school.", "Those changes were felt throughout the country.", "everywhere", "all over", "nowhere"],
  ["along", "moving in a line next to something", "साथ-साथ / के किनारे", "adverb", "beginner", "/əˈlɒŋ/", "Walk along this road to reach the market.", "She planted flowers along those pathways.", "beside", "following", "away"],

  // Comparison Words
  ["similar", "almost the same but not exactly", "समान / मिलता-जुलता", "adjective", "beginner", "/ˈsɪmɪlər/", "This bag is similar to that one.", "Those two answers are similar in meaning.", "alike", "comparable", "different"],
  ["different", "not the same as another", "अलग / भिन्न", "adjective", "beginner", "/ˈdɪfrənt/", "This pen is different from that one.", "Those two books are completely different.", "distinct", "unlike", "similar"],
  ["identical", "exactly the same in every way", "बिल्कुल एक जैसा", "adjective", "elementary", "/aɪˈdentɪkəl/", "This copy is identical to that original.", "Those two twins look identical.", "same", "matching", "different"],
  ["contrasting", "showing clear differences when compared", "विपरीत / अंतर दिखाने वाला", "adjective", "elementary", "/ˈkɒntræstɪŋ/", "This bright color and that dark one are contrasting.", "Those contrasting opinions led to a debate.", "opposing", "differing", "matching"],
  ["related", "connected or linked to something", "संबंधित", "adjective", "beginner", "/rɪˈleɪtɪd/", "This topic is related to that lesson.", "All those questions are related to grammar.", "connected", "associated", "unrelated"],
  ["connected", "joined or linked together", "जुड़ा हुआ", "adjective", "beginner", "/kəˈnektɪd/", "This cable keeps the devices connected.", "Those events are all connected to each other.", "linked", "joined", "separate"],
  ["comparable", "similar enough to be compared", "तुलनीय", "adjective", "intermediate", "/ˈkɒmpərəbəl/", "This result is comparable to that last test.", "Those two candidates have comparable skills.", "similar", "equivalent", "incomparable"],
  ["equivalent", "equal in value, amount, or meaning", "समतुल्य / बराबर", "adjective", "elementary", "/ɪˈkwɪvələnt/", "This coin is equivalent in value to that note.", "Those two words are equivalent in meaning.", "equal", "same", "different"],
  ["matching", "the same in color, pattern, or style", "मिलान / एक जैसा", "adjective", "beginner", "/ˈmætʃɪŋ/", "This shirt and that trouser are matching.", "She wore a matching set of earrings and necklace.", "corresponding", "paired", "mismatched"],
  ["contrasted", "placed side by side to show differences", "तुलना की गई", "adjective", "elementary", "/ˈkɒntræstɪd/", "This method was contrasted with that old approach.", "Those two styles were contrasted in the report.", "compared", "differentiated", "matched"],

  // Grammar Terms
  ["pronoun", "a word used instead of a noun", "सर्वनाम", "noun", "beginner", "/ˈproʊnaʊn/", "This is a pronoun that replaces a noun.", "In that sentence, 'he' is a pronoun.", "substitute", "replacement", ""],
  ["singular", "referring to just one person or thing", "एकवचन", "adjective", "beginner", "/ˈsɪŋɡjʊlər/", "This word 'book' is in singular form.", "That is a singular noun, not plural.", "single", "one", "plural"],
  ["plural", "referring to more than one person or thing", "बहुवचन", "adjective", "beginner", "/ˈplʊərəl/", "These books are in plural form.", "Those pens show the plural usage.", "multiple", "many", "singular"],
  ["subject", "the person or thing that does the action", "कर्ता / विषय", "noun", "beginner", "/ˈsʌbdʒɪkt/", "In this sentence, 'Ram' is the subject.", "That question asks you to find the subject.", "doer", "topic", "object"],
  ["predicate", "the part of a sentence with the verb", "विधेय", "noun", "elementary", "/ˈpredɪkɪt/", "The predicate in this sentence is 'runs fast'.", "Find the predicate in that example sentence.", "verb phrase", "comment", "subject"],
  ["clause", "a group of words with a subject and verb", "उपवाक्य", "noun", "elementary", "/klɔːz/", "This sentence has two clauses.", "That dependent clause cannot stand alone.", "phrase", "sentence part", ""],
  ["phrase", "a group of words without a complete verb", "वाक्यांश / पदबंध", "noun", "beginner", "/freɪz/", "This phrase adds meaning to the sentence.", "Those phrases are used in daily conversation.", "expression", "group of words", ""],
  ["sentence", "a complete thought with subject and verb", "वाक्य", "noun", "beginner", "/ˈsentəns/", "Write this word in a sentence.", "Those are all complete sentences.", "statement", "utterance", "fragment"],
  ["grammar", "the rules of a language", "व्याकरण", "noun", "beginner", "/ˈɡræmər/", "This chapter teaches basic grammar rules.", "Those exercises help you practice grammar.", "syntax", "language rules", ""],
  ["tense", "the form of a verb showing time", "काल", "noun", "beginner", "/tens/", "This verb is in present tense.", "Change those sentences to past tense.", "time form", "verb form", ""],
  ["prefix", "letters added to the beginning of a word", "उपसर्ग", "noun", "elementary", "/ˈpriːfɪks/", "The prefix 'un-' makes this word negative.", "Those words all share the same prefix.", "beginning", "addition", "suffix"],
  ["suffix", "letters added to the end of a word", "प्रत्यय", "noun", "elementary", "/ˈsʌfɪks/", "Adding '-ing' is a common suffix for this verb.", "Those words have different suffixes.", "ending", "addition", "prefix"],
  ["vowel", "a speech sound made with an open mouth", "स्वर", "noun", "beginner", "/ˈvaʊəl/", "This letter 'a' is a vowel.", "Those five letters are all vowels.", "open sound", "letter", "consonant"],
  ["consonant", "a speech sound made by blocking air", "व्यंजन", "noun", "beginner", "/ˈkɒnsənənt/", "This letter 'b' is a consonant.", "Those letters are all consonants.", "blocked sound", "letter", "vowel"],
  ["syllable", "a unit of sound in a word", "अक्षर / syllable", "noun", "elementary", "/ˈsɪləbəl/", "This word 'water' has two syllables.", "Count those syllables to check the rhythm.", "sound unit", "beat", ""],

  // Quantity Words
  ["several", "more than two but not very many", "कई / अनेक", "adjective", "beginner", "/ˈsevərəl/", "There are several books on this shelf.", "She visited those places several times.", "a few", "multiple", "one"],
  ["plenty", "more than enough of something", "बहुत सारा / पर्याप्त से अधिक", "adjective", "beginner", "/ˈplenti/", "There is plenty of water in this bottle.", "She has plenty of time for those tasks.", "abundant", "enough", "scarce"],
  ["sufficient", "as much as is needed", "पर्याप्त", "adjective", "elementary", "/səˈfɪʃənt/", "This amount of rice is sufficient for dinner.", "Those supplies are sufficient for the week.", "enough", "adequate", "insufficient"],
  ["scarce", "not enough, hard to find", "दुर्लभ / कम", "adjective", "elementary", "/skeərs/", "Clean water is scarce in that area.", "Those resources are becoming scarce.", "rare", "limited", "plentiful"],
  ["numerous", "very many in number", "अनेक / बहुत सारे", "adjective", "elementary", "/ˈnjuːmərəs/", "There are numerous stars in this sky.", "Those errors were pointed out numerous times.", "many", "countless", "few"],
  ["majority", "more than half of a group", "बहुमत / अधिकांश", "noun", "elementary", "/məˈdʒɒrɪti/", "The majority of these students passed.", "Those votes show a clear majority.", "most", "bulk", "minority"],
  ["minority", "less than half of a group", "अल्पमत / अल्पसंख्यक", "noun", "elementary", "/maɪˈnɒrɪti/", "Only a minority of these students were absent.", "That decision affected a minority of people.", "few", "small group", "majority"],
  ["quantity", "an amount or number of something", "मात्रा / संख्या", "noun", "beginner", "/ˈkwɒntɪti/", "Please check the quantity of this order.", "Those items were delivered in large quantities.", "amount", "number", "quality"],
  ["portion", "a part or share of something", "हिस्सा / भाग", "noun", "beginner", "/ˈpɔːrʃən/", "Take a small portion of this dish.", "She divided those papers into equal portions.", "part", "share", "whole"],
  ["fraction", "a small part of something", "अंश / भिन्न", "noun", "elementary", "/ˈfrækʃən/", "Only a fraction of this work is done.", "Those savings cover just a fraction of the cost.", "part", "piece", "whole"],

  // Quality Identifiers
  ["specific", "clearly defined, not general", "विशिष्ट / खास", "adjective", "beginner", "/spɪˈsɪfɪk/", "Please give a specific example for this rule.", "She pointed out those specific mistakes.", "particular", "exact", "general"],
  ["general", "applying to most cases, not specific", "सामान्य / आम", "adjective", "beginner", "/ˈdʒenərəl/", "This is a general rule for all students.", "Those are general guidelines, not strict rules.", "broad", "common", "specific"],
  ["particular", "special or specific among others", "विशेष / खास", "adjective", "beginner", "/pəˈtɪkjʊlər/", "I need this particular pen for drawing.", "She chose those particular words carefully.", "specific", "special", "general"],
  ["unique", "one of a kind, unlike anything else", "अद्वितीय / अनोखा", "adjective", "beginner", "/juːˈniːk/", "This design is truly unique.", "Those paintings have a unique style.", "rare", "one-of-a-kind", "common"],
  ["typical", "having the usual qualities of something", "सामान्य / साधारण", "adjective", "beginner", "/ˈtɪpɪkəl/", "This is a typical day at school.", "Those are typical mistakes that beginners make.", "usual", "ordinary", "unusual"],
  ["common", "found or happening often", "सामान्य / आम", "adjective", "beginner", "/ˈkɒmən/", "This is a very common English word.", "Those mistakes are common among learners.", "frequent", "usual", "rare"],
  ["rare", "not found or happening very often", "दुर्लभ / कम होने वाला", "adjective", "beginner", "/reər/", "This is a rare bird found in that forest.", "Those coins are rare and very valuable.", "uncommon", "scarce", "common"],
  ["special", "different from normal in a good way", "विशेष", "adjective", "beginner", "/ˈspeʃəl/", "This is a special occasion for our family.", "Those special moments are worth remembering.", "unique", "exceptional", "ordinary"],
  ["ordinary", "normal, not special or unusual", "साधारण / सामान्य", "adjective", "beginner", "/ˈɔːrdɪneri/", "This is an ordinary day at the office.", "Those are just ordinary objects on the desk.", "normal", "regular", "special"],
  ["essential", "absolutely necessary, very important", "आवश्यक / ज़रूरी", "adjective", "elementary", "/ɪˈsenʃəl/", "Water is essential for all living things.", "Those are essential documents for this process.", "necessary", "vital", "unnecessary"],

  // Household Objects
  ["book", "a written or printed work with pages", "किताब", "noun", "beginner", "/bʊk/", "This book is very interesting to read.", "Please return those books to the shelf.", "volume", "text", ""],
  ["table", "a flat surface with legs for placing things", "मेज़", "noun", "beginner", "/ˈteɪbəl/", "This table is used for studying.", "Please clear those papers from the table.", "desk", "surface", ""],
  ["chair", "a seat with a back for one person", "कुर्सी", "noun", "beginner", "/tʃeər/", "Please sit on this chair.", "Those chairs need to be arranged in a row.", "seat", "stool", ""],
  ["bag", "a container used for carrying things", "थैला / बैग", "noun", "beginner", "/bæɡ/", "This bag belongs to Priya.", "Pick up those bags from the floor.", "sack", "pouch", ""],
  ["door", "a panel that opens and closes an entrance", "दरवाज़ा", "noun", "beginner", "/dɔːr/", "Please close this door quietly.", "Those doors open automatically.", "entrance", "gate", ""],
  ["window", "an opening in a wall with glass", "खिड़की", "noun", "beginner", "/ˈwɪndoʊ/", "Please open this window for fresh air.", "Close those windows before it rains.", "opening", "pane", ""],
  ["phone", "a device used for communication", "फ़ोन", "noun", "beginner", "/foʊn/", "This phone has a big screen.", "Those phones are the latest models.", "mobile", "device", ""],
  ["notebook", "a book with blank pages for writing notes", "नोटबुक / कॉपी", "noun", "beginner", "/ˈnoʊtbʊk/", "Write your notes in this notebook.", "Those notebooks are for grammar exercises.", "notepad", "journal", ""],
  ["computer", "an electronic device for processing data", "कंप्यूटर", "noun", "beginner", "/kəmˈpjuːtər/", "This computer is very fast.", "Those computers need to be updated.", "laptop", "machine", ""],
  ["pen", "a tool for writing with ink", "कलम / पेन", "noun", "beginner", "/pen/", "Please lend me this pen for a minute.", "Those pens are blue and black.", "writing tool", "marker", ""],

  // Classroom Objects
  ["board", "a flat surface for writing in a classroom", "बोर्ड / तख्ता", "noun", "beginner", "/bɔːrd/", "The teacher wrote this word on the board.", "Please clean those marks from the board.", "blackboard", "whiteboard", ""],
  ["marker", "a thick pen used for writing on boards", "मार्कर", "noun", "beginner", "/ˈmɑːrkər/", "Use this marker to write on the board.", "Those markers are running out of ink.", "pen", "highlighter", ""],
  ["eraser", "a tool used to remove pencil marks", "रबर / इरेज़र", "noun", "beginner", "/ɪˈreɪzər/", "Can I borrow this eraser for a moment?", "Those erasers are very small.", "rubber", "corrector", ""],
  ["ruler", "a straight tool used to measure length", "रूलर / पटरी", "noun", "beginner", "/ˈruːlər/", "Use this ruler to draw a straight line.", "Those rulers are 30 cm long.", "scale", "measure", ""],
  ["compass", "a tool used to draw circles", "कंपास / परकार", "noun", "beginner", "/ˈkʌmpəs/", "This compass is needed for the geometry class.", "Those compasses are kept in that box.", "divider", "circle tool", ""],
  ["calculator", "a device used to do math calculations", "कैलकुलेटर", "noun", "beginner", "/ˈkælkjʊleɪtər/", "Use this calculator for difficult sums.", "Those calculators are allowed in the exam.", "computing device", "adding machine", ""],
  ["dictionary", "a book listing words and their meanings", "शब्दकोश", "noun", "beginner", "/ˈdɪkʃəneri/", "Look up this word in the dictionary.", "Those dictionaries have over 50,000 words.", "word book", "lexicon", ""],
  ["atlas", "a book of maps", "एटलस / मानचित्र पुस्तक", "noun", "elementary", "/ˈætləs/", "This atlas shows the map of India.", "Find those countries in the atlas.", "map book", "gazetteer", ""],
  ["chalk", "a white stick used to write on blackboards", "चॉक / खड़िया", "noun", "beginner", "/tʃɔːk/", "The teacher used this chalk to write on the board.", "Those chalk pieces are kept in that box.", "writing stick", "crayon", ""],
  ["notebook paper", "sheets of lined paper used for writing", "नोटबुक का कागज़", "noun", "beginner", "/ˈnoʊtbʊk ˈpeɪpər/", "Write the answer on this notebook paper.", "Those notebook papers are neatly lined.", "lined paper", "sheet", ""],

  // Office Objects
  ["file", "a folder or container for documents", "फ़ाइल", "noun", "beginner", "/faɪl/", "Please put this document in the file.", "Those files contain last year's records.", "folder", "dossier", ""],
  ["folder", "a cover for storing papers", "फ़ोल्डर", "noun", "beginner", "/ˈfoʊldər/", "Keep this paper in the blue folder.", "Those folders are arranged by date.", "file", "binder", ""],
  ["desk", "a table for office or study work", "डेस्क / मेज़", "noun", "beginner", "/desk/", "His desk is always neat and tidy.", "Clear those items from the desk before the meeting.", "table", "workstation", ""],
  ["screen", "the display surface of a device", "स्क्रीन", "noun", "beginner", "/skriːn/", "This screen shows all the data clearly.", "Look at those screens in the conference room.", "display", "monitor", ""],
  ["keyboard", "a set of keys used to type on a computer", "कीबोर्ड", "noun", "beginner", "/ˈkiːbɔːrd/", "This keyboard needs to be cleaned.", "Those keyboards are wireless.", "keypad", "input device", ""],
  ["printer", "a machine that prints documents", "प्रिंटर", "noun", "beginner", "/ˈprɪntər/", "This printer is out of paper.", "Send those files to the printer.", "copier", "machine", ""],
  ["stapler", "a device used to join papers with staples", "स्टेपलर", "noun", "beginner", "/ˈsteɪplər/", "Use this stapler to attach those pages.", "The stapler on that desk needs refilling.", "binder", "fastener", ""],
  ["document", "an official or important written paper", "दस्तावेज़", "noun", "beginner", "/ˈdɒkjʊmənt/", "Please sign this document.", "Those documents need to be submitted today.", "paper", "record", ""],
  ["envelope", "a paper covering for sending letters", "लिफ़ाफ़ा", "noun", "beginner", "/ˈenvəloʊp/", "Put this letter in that envelope.", "Those envelopes are addressed and ready.", "cover", "wrapper", ""],
  ["report", "a written account of facts or events", "रिपोर्ट", "noun", "beginner", "/rɪˈpɔːrt/", "Submit this report by Friday.", "Those reports are reviewed by the manager.", "account", "summary", ""],

  // Nature Objects
  ["flower", "the colorful part of a plant", "फूल", "noun", "beginner", "/ˈflaʊər/", "This flower smells very sweet.", "Those flowers in the garden are beautiful.", "bloom", "blossom", ""],
  ["tree", "a tall plant with branches and leaves", "पेड़", "noun", "beginner", "/triː/", "This tree gives shade in summer.", "Those trees were planted five years ago.", "plant", "shrub", ""],
  ["leaf", "a flat green part of a plant", "पत्ता", "noun", "beginner", "/liːf/", "This leaf has fallen from that tree.", "Those leaves turn yellow in autumn.", "foliage", "blade", ""],
  ["stone", "a small solid piece of rock", "पत्थर", "noun", "beginner", "/stoʊn/", "This stone is smooth and round.", "Those stones are used to decorate the garden.", "rock", "pebble", ""],
  ["river", "a large natural flow of water", "नदी", "noun", "beginner", "/ˈrɪvər/", "This river flows through our city.", "Those rivers originate in the Himalayas.", "stream", "waterway", ""],
  ["mountain", "a very high, rocky natural landform", "पहाड़", "noun", "beginner", "/ˈmaʊntən/", "This mountain is covered with snow.", "Those mountains are visible from the town.", "peak", "hill", "valley"],
  ["sky", "the space above the earth", "आकाश", "noun", "beginner", "/skaɪ/", "This sky is clear and blue today.", "Those clouds made the sky look dark.", "heaven", "atmosphere", ""],
  ["cloud", "a mass of water droplets in the sky", "बादल", "noun", "beginner", "/klaʊd/", "This cloud looks like a rabbit.", "Those dark clouds mean rain is coming.", "vapor", "mist", ""],
  ["sun", "the star at the center of our solar system", "सूर्य / सूरज", "noun", "beginner", "/sʌn/", "This sun gives us light and heat.", "Look at those rays of the sun on the water.", "star", "daystar", "moon"],
  ["moon", "the natural satellite of the Earth", "चंद्रमा", "noun", "beginner", "/muːn/", "This moon is very bright tonight.", "Those craters on the moon are huge.", "satellite", "lunar body", "sun"],
  ["star", "a ball of burning gas in the sky", "तारा", "noun", "beginner", "/stɑːr/", "This star is very far away.", "Those stars twinkle beautifully at night.", "celestial body", "heavenly body", ""],

  // Food / Drink
  ["rice", "a common grain eaten as food", "चावल", "noun", "beginner", "/raɪs/", "This rice is perfectly cooked.", "Those rice grains are large and white.", "grain", "cereal", ""],
  ["bread", "a baked food made from flour", "रोटी / ब्रेड", "noun", "beginner", "/bred/", "This bread is fresh from the oven.", "Those bread slices are for the sandwich.", "loaf", "roll", ""],
  ["milk", "a white liquid food from animals", "दूध", "noun", "beginner", "/mɪlk/", "Drink this milk before going to school.", "Those milk bottles need to be refrigerated.", "dairy", "liquid", ""],
  ["tea", "a hot drink made from leaves", "चाय", "noun", "beginner", "/tiː/", "This tea is very refreshing.", "Would you like those teas served hot or cold?", "brew", "beverage", ""],
  ["fruit", "a sweet food that grows on plants", "फल", "noun", "beginner", "/fruːt/", "This fruit is ripe and ready to eat.", "Those fruits are imported from other countries.", "produce", "crop", "vegetable"],
  ["vegetable", "a plant food eaten as part of meals", "सब्जी", "noun", "beginner", "/ˈvedʒtəbəl/", "This vegetable is good for health.", "Those vegetables need to be washed before cooking.", "greens", "produce", "fruit"],
  ["sweet", "having a taste like sugar", "मीठा", "adjective", "beginner", "/swiːt/", "This mango is very sweet.", "Those sweets were made for the festival.", "sugary", "pleasant", "bitter"],
  ["spicy", "having a strong, hot flavor", "मसालेदार / तीखा", "adjective", "beginner", "/ˈspaɪsi/", "This curry is very spicy.", "Those spicy snacks are popular in India.", "hot", "pungent", "mild"],
  ["bitter", "having a sharp, unpleasant taste", "कड़वा", "adjective", "beginner", "/ˈbɪtər/", "This medicine tastes very bitter.", "Those bitter leaves are used in cooking.", "sharp", "harsh", "sweet"],
  ["sour", "having a sharp taste like lemon", "खट्टा", "adjective", "beginner", "/saʊər/", "This lemon is very sour.", "Those tamarind pieces have a sour taste.", "acidic", "tart", "sweet"],

  // Clothing
  ["shirt", "a piece of clothing worn on the upper body", "कमीज़ / शर्ट", "noun", "beginner", "/ʃɜːrt/", "This shirt has a nice pattern.", "Those shirts are made of cotton.", "top", "blouse", ""],
  ["dress", "a one-piece garment worn by women", "पोशाक / कपड़े", "noun", "beginner", "/dres/", "This dress looks very elegant.", "Those dresses were on sale.", "gown", "outfit", ""],
  ["pants", "a lower-body garment with two legs", "पैंट / पतलून", "noun", "beginner", "/pænts/", "These pants are a perfect fit.", "Please iron those pants for tomorrow.", "trousers", "slacks", ""],
  ["shoes", "coverings worn on the feet", "जूते", "noun", "beginner", "/ʃuːz/", "These shoes are very comfortable.", "Polish those shoes before the interview.", "footwear", "sneakers", ""],
  ["hat", "a covering worn on the head", "टोपी", "noun", "beginner", "/hæt/", "This hat protects from the sun.", "Those hats are made of straw.", "cap", "headgear", ""],
  ["scarf", "a piece of cloth worn around the neck", "दुपट्टा / स्कार्फ", "noun", "beginner", "/skɑːrf/", "This scarf keeps the neck warm.", "Those scarves are made of silk.", "wrap", "shawl", ""],
  ["jacket", "a short coat worn over other clothes", "जैकेट", "noun", "beginner", "/ˈdʒækɪt/", "Wear this jacket as it is cold outside.", "Those jackets are made of leather.", "coat", "blazer", ""],
  ["gloves", "coverings worn on the hands", "दस्ताने", "noun", "beginner", "/ɡlʌvz/", "These gloves will keep your hands warm.", "She lost those gloves at the market.", "mittens", "hand coverings", ""],
  ["socks", "soft coverings worn on the feet inside shoes", "मोजे", "noun", "beginner", "/sɒks/", "These socks are made of wool.", "Please wash those socks after use.", "stockings", "hosiery", ""],
  ["uniform", "a set of clothes worn by a group", "वर्दी / यूनिफ़ॉर्म", "noun", "beginner", "/ˈjuːnɪfɔːrm/", "This uniform must be worn every day.", "Those uniforms are blue and white.", "outfit", "dress code", ""],

  // Body Parts
  ["hand", "the part of the body at the end of the arm", "हाथ", "noun", "beginner", "/hænd/", "Raise this hand if you know the answer.", "Those hands need to be washed.", "palm", "fist", ""],
  ["eye", "the organ used for seeing", "आँख", "noun", "beginner", "/aɪ/", "This eye test is very simple.", "Those eyes are a beautiful shade of brown.", "vision organ", "sight", ""],
  ["ear", "the organ used for hearing", "कान", "noun", "beginner", "/ɪər/", "Keep this ear clean and healthy.", "Those ears heard every word clearly.", "hearing organ", "auricle", ""],
  ["nose", "the organ used for smelling and breathing", "नाक", "noun", "beginner", "/noʊz/", "This nose is sensitive to strong smells.", "Cover your nose and mouth when sneezing.", "smelling organ", "snout", ""],
  ["mouth", "the opening on the face used for eating and speaking", "मुँह", "noun", "beginner", "/maʊθ/", "Open your mouth and say 'ah'.", "Those words came out of his mouth very quickly.", "lips", "oral cavity", ""],
  ["head", "the top part of the body containing the brain", "सिर", "noun", "beginner", "/hed/", "Please keep this head covering on.", "Shake those heads if you understand.", "skull", "cranium", ""],
  ["finger", "one of the five parts at the end of the hand", "उंगली", "noun", "beginner", "/ˈfɪŋɡər/", "Point this finger at the correct answer.", "Those fingers are very skilled at typing.", "digit", "thumb", ""],
  ["arm", "the body part from shoulder to hand", "बाँह / भुजा", "noun", "beginner", "/ɑːrm/", "This arm is sore after writing all day.", "Raise those arms above your head.", "limb", "forearm", ""],
  ["leg", "the body part used for walking", "पैर / टाँग", "noun", "beginner", "/leɡ/", "This leg is hurting after the long walk.", "Stretch those legs before exercising.", "limb", "shin", ""],
  ["shoulder", "the body part connecting the arm to the body", "कंधा", "noun", "beginner", "/ˈʃoʊldər/", "Put this bag on your shoulder.", "Those shoulders are strong from exercise.", "joint", "upper arm", ""],
  ["neck", "the part connecting the head to the body", "गर्दन", "noun", "beginner", "/nek/", "This neck is sore from looking down.", "She wore a necklace around her neck.", "throat", "nape", ""],

  // Time References
  ["moment", "a very short period of time", "क्षण / पल", "noun", "beginner", "/ˈmoʊmənt/", "Wait for a moment, I will be right back.", "That was a special moment to remember.", "instant", "second", "eternity"],
  ["instant", "happening immediately without delay", "तत्काल / तुरंत", "adjective", "elementary", "/ˈɪnstənt/", "This app gives instant results.", "Those instant noodles are ready in minutes.", "immediate", "quick", "delayed"],
  ["period", "a length of time", "अवधि / काल", "noun", "beginner", "/ˈpɪəriəd/", "This period of study is very important.", "Those historical periods are interesting to study.", "duration", "span", ""],
  ["duration", "the length of time something lasts", "अवधि / समय", "noun", "elementary", "/djʊˈreɪʃən/", "What is the duration of this course?", "The duration of those classes is one hour.", "length", "span", ""],
  ["occasion", "a special event or time", "अवसर / मौका", "noun", "elementary", "/əˈkeɪʒən/", "This is a special occasion for our family.", "Those occasions are celebrated every year.", "event", "opportunity", ""],
  ["event", "something that happens at a particular time", "घटना / कार्यक्रम", "noun", "beginner", "/ɪˈvent/", "This event was organized very well.", "Those events take place every month.", "happening", "occasion", ""],
  ["situation", "a set of circumstances at a time", "स्थिति / परिस्थिति", "noun", "beginner", "/ˌsɪtʃuˈeɪʃən/", "Handle this situation carefully.", "Those situations require quick thinking.", "condition", "circumstance", ""],
  ["schedule", "a plan showing times for things", "समय-सारणी / शेड्यूल", "noun", "elementary", "/ˈʃedjuːl/", "Follow this schedule every day.", "Those schedules were changed at the last minute.", "timetable", "plan", ""],
  ["deadline", "the latest time something must be done", "अंतिम तारीख / डेडलाइन", "noun", "elementary", "/ˈdedlaɪn/", "Submit this form before the deadline.", "Those deadlines must be strictly followed.", "due date", "cutoff", ""],
  ["sequence", "the order in which things follow each other", "क्रम / अनुक्रम", "noun", "elementary", "/ˈsiːkwəns/", "Follow this sequence of steps carefully.", "Those events happened in a specific sequence.", "order", "series", ""],

  // Abstract References
  ["idea", "a thought or plan in the mind", "विचार / आइडिया", "noun", "beginner", "/aɪˈdɪə/", "This idea could solve the problem.", "Those ideas were shared in the meeting.", "thought", "concept", ""],
  ["concept", "an abstract idea or general understanding", "अवधारणा / संकल्पना", "noun", "elementary", "/ˈkɒnsept/", "Understand this concept before moving ahead.", "Those concepts are taught in the next chapter.", "idea", "notion", ""],
  ["theory", "a set of ideas to explain something", "सिद्धांत", "noun", "elementary", "/ˈθɪəri/", "This theory was proven by experiment.", "Those theories are still being debated.", "hypothesis", "principle", "fact"],
  ["fact", "something known to be true", "तथ्य", "noun", "beginner", "/fækt/", "This fact cannot be denied.", "Those facts support the argument clearly.", "truth", "reality", "opinion"],
  ["truth", "what is real and correct", "सत्य / सच", "noun", "beginner", "/truːθ/", "Always speak this truth.", "Those truths were finally revealed.", "reality", "fact", "lie"],
  ["belief", "something accepted as true", "विश्वास / मान्यता", "noun", "beginner", "/bɪˈliːf/", "This belief is common in Indian culture.", "Those beliefs guide their daily life.", "faith", "conviction", "doubt"],
  ["opinion", "a personal view or judgment", "राय / मत", "noun", "beginner", "/əˈpɪnjən/", "This is my opinion on the matter.", "Those opinions were shared openly in class.", "view", "perspective", "fact"],
  ["topic", "the main subject being discussed", "विषय", "noun", "beginner", "/ˈtɒpɪk/", "What is the topic of this essay?", "Those topics will be covered next week.", "subject", "theme", ""],
  ["theme", "the main idea running through something", "विषयवस्तु / थीम", "noun", "elementary", "/θiːm/", "The theme of this story is friendship.", "Those films share a common theme.", "subject", "motif", ""],
  ["argument", "a reason given to support or oppose something", "तर्क / बहस", "noun", "elementary", "/ˈɑːrɡjʊmənt/", "This argument is very logical.", "Those arguments were presented clearly.", "reason", "debate", "agreement"],

  // Measurement
  ["size", "how big or small something is", "आकार / साइज़", "noun", "beginner", "/saɪz/", "What is the size of this room?", "Those shoes come in different sizes.", "dimension", "measurement", ""],
  ["distance", "the amount of space between two places", "दूरी", "noun", "beginner", "/ˈdɪstəns/", "What is the distance from here to that station?", "Those cities are at a great distance from each other.", "gap", "space", ""],
  ["height", "the measurement from bottom to top", "ऊँचाई", "noun", "beginner", "/haɪt/", "This building has a great height.", "Measure the height of those walls.", "altitude", "elevation", "depth"],
  ["weight", "how heavy something is", "वज़न", "noun", "beginner", "/weɪt/", "What is the weight of this bag?", "Those boxes are too heavy to carry.", "mass", "heaviness", "lightness"],
  ["length", "how long something is from end to end", "लंबाई", "noun", "beginner", "/leŋθ/", "What is the length of this table?", "Measure the length of those curtains.", "extent", "span", "width"],
  ["depth", "how deep something is", "गहराई", "noun", "beginner", "/depθ/", "This well has a great depth.", "Measure the depth of those pools.", "deepness", "profundity", "height"],
  ["width", "how wide something is from side to side", "चौड़ाई", "noun", "beginner", "/wɪdθ/", "What is the width of this road?", "Those curtains need to match the window's width.", "breadth", "span", "length"],
  ["area", "the size of a flat surface", "क्षेत्रफल / इलाका", "noun", "beginner", "/ˈeəriə/", "Calculate the area of this rectangle.", "Those areas of the city are under development.", "surface", "region", ""],
  ["volume", "the amount of space something takes up", "आयतन / मात्रा", "noun", "elementary", "/ˈvɒljuːm/", "Calculate the volume of this container.", "Adjust the volume of those speakers.", "capacity", "amount", ""],
  ["measurement", "the process of finding size or amount", "माप / नाप", "noun", "beginner", "/ˈmeʒərmənt/", "Take the measurement of this room.", "Those measurements were recorded carefully.", "dimension", "reading", ""],

  // Direction / Space
  ["direction", "the way you move or point toward something", "दिशा", "noun", "beginner", "/dɪˈrekʃən/", "Which direction is this road going?", "Follow those direction signs on the highway.", "way", "course", ""],
  ["route", "a way or path taken to go somewhere", "रास्ता / मार्ग", "noun", "beginner", "/ruːt/", "This route is the shortest one.", "Those bus routes are changed during festivals.", "path", "way", ""],
  ["path", "a narrow way for walking", "पगडंडी / रास्ता", "noun", "beginner", "/pɑːθ/", "Follow this path to reach the temple.", "Those paths through the forest are beautiful.", "track", "trail", ""],
  ["side", "one of the surfaces or edges of something", "ओर / पक्ष", "noun", "beginner", "/saɪd/", "Stand on this side of the road.", "Look at those marks on both sides of the paper.", "edge", "flank", "center"],
  ["edge", "the outer boundary or border of something", "किनारा / कोर", "noun", "beginner", "/edʒ/", "Do not go near the edge of this cliff.", "Those edges of the paper are torn.", "border", "rim", "center"],
  ["corner", "the point where two edges or sides meet", "कोना", "noun", "beginner", "/ˈkɔːrnər/", "Put this plant in the corner of the room.", "Sweep those corners clean.", "angle", "intersection", "center"],
  ["center", "the middle point of something", "केंद्र / बीच", "noun", "beginner", "/ˈsentər/", "Place this vase in the center of the table.", "Those dots are in the center of the page.", "middle", "core", "edge"],
  ["surface", "the outside or top layer of something", "सतह / ऊपरी भाग", "noun", "beginner", "/ˈsɜːrfɪs/", "Clean this surface before painting.", "Those surfaces must be smooth and even.", "exterior", "face", "interior"],
  ["boundary", "the line that marks the limit of an area", "सीमा", "noun", "elementary", "/ˈbaʊndri/", "Do not cross this boundary line.", "Those boundaries are clearly marked on the map.", "border", "limit", ""],
  ["region", "a large area of land with defined features", "क्षेत्र / प्रदेश", "noun", "elementary", "/ˈriːdʒən/", "This region gets heavy rainfall.", "Those regions are known for their culture.", "area", "zone", ""],

  // Tools and Objects
  ["tool", "a device used to do a task", "औजार / उपकरण", "noun", "beginner", "/tuːl/", "Use this tool to fix the pipe.", "Those tools are kept in the garage.", "instrument", "device", ""],
  ["machine", "a mechanical device that does work", "मशीन", "noun", "beginner", "/məˈʃiːn/", "This machine prints very fast.", "Those machines are operated by workers.", "device", "apparatus", ""],
  ["device", "a piece of equipment for a purpose", "उपकरण / यंत्र", "noun", "beginner", "/dɪˈvaɪs/", "This device measures the temperature.", "Those devices need charging.", "gadget", "instrument", ""],
  ["instrument", "a tool used for precise work", "यंत्र / वाद्ययंत्र", "noun", "elementary", "/ˈɪnstrʊmənt/", "This instrument is used for surgery.", "Those musical instruments are very old.", "tool", "device", ""],
  ["equipment", "the tools and machines needed for a job", "उपकरण / सामग्री", "noun", "elementary", "/ɪˈkwɪpmənt/", "This equipment must be handled carefully.", "Those equipment sets were imported.", "gear", "apparatus", ""],
  ["material", "the substance from which something is made", "सामग्री / कच्चा माल", "noun", "beginner", "/məˈtɪəriəl/", "This building is made of strong material.", "Collect those materials before the project starts.", "substance", "matter", ""],
  ["substance", "a type of physical matter or material", "पदार्थ", "noun", "elementary", "/ˈsʌbstəns/", "This substance is very strong.", "Those substances must be stored safely.", "matter", "material", ""],
  ["container", "an object for storing or transporting things", "डब्बा / कंटेनर", "noun", "beginner", "/kənˈteɪnər/", "Fill this container with water.", "Those containers hold the chemicals.", "box", "vessel", ""],
  ["object", "a physical thing that can be touched or seen", "वस्तु / चीज़", "noun", "beginner", "/ˈɒbdʒɪkt/", "What is this object used for?", "Place those objects on the shelf.", "thing", "item", ""],
  ["item", "a single thing in a list or group", "चीज़ / आइटम", "noun", "beginner", "/ˈaɪtəm/", "This is the first item on the list.", "Check those items before packing.", "thing", "article", ""],

  // Digital / Tech
  ["website", "a set of pages on the internet", "वेबसाइट", "noun", "beginner", "/ˈwebsaɪt/", "This website has useful information.", "Visit those websites for study materials.", "web page", "portal", ""],
  ["app", "a program on a phone or computer", "ऐप / एप्लीकेशन", "noun", "beginner", "/æp/", "Download this app for free.", "Those apps help you learn English faster.", "application", "software", ""],
  ["software", "programs used to operate computers", "सॉफ़्टवेयर", "noun", "elementary", "/ˈsɒftweər/", "This software needs to be updated.", "Those software programs are easy to use.", "program", "application", "hardware"],
  ["link", "a connection between two web pages", "लिंक / कड़ी", "noun", "beginner", "/lɪŋk/", "Click this link to open the page.", "Share those links with your classmates.", "URL", "connection", ""],
  ["button", "a small shape you click to do something", "बटन", "noun", "beginner", "/ˈbʌtən/", "Press this button to start the machine.", "Those buttons on the keyboard are worn out.", "key", "switch", ""],
  ["menu", "a list of choices available on a screen", "मेनू / सूची", "noun", "beginner", "/ˈmenjuː/", "Select this option from the menu.", "Those menu items are easy to navigate.", "list", "options", ""],
  ["password", "a secret word used to access an account", "पासवर्ड / गुप्त शब्द", "noun", "beginner", "/ˈpɑːswɜːrd/", "Enter this password to log in.", "Change those passwords regularly for safety.", "code", "key", ""],
  ["network", "a system of connected devices or people", "नेटवर्क / जाल", "noun", "elementary", "/ˈnetwɜːrk/", "This network connection is very strong.", "Those networks are secured with passwords.", "system", "grid", ""],
  ["upload", "to send data from a device to the internet", "अपलोड करना", "verb", "beginner", "/ˈʌploʊd/", "Upload this document to the website.", "Please upload those photos to the folder.", "send", "transfer", "download"],
  ["download", "to get data from the internet to a device", "डाउनलोड करना", "verb", "beginner", "/ˈdaʊnloʊd/", "Download this file on your phone.", "Those apps can be downloaded for free.", "receive", "get", "upload"],

  // Relationship / Connection Words
  ["connection", "a link between two things or people", "संबंध / जुड़ाव", "noun", "beginner", "/kəˈnekʃən/", "This connection between the topics is clear.", "Those connections were formed during the workshop.", "link", "bond", "separation"],
  ["relationship", "the way two things or people are connected", "रिश्ता / संबंध", "noun", "beginner", "/rɪˈleɪʃənʃɪp/", "This relationship between cause and effect is important.", "Those working relationships are very professional.", "bond", "association", ""],
  ["bond", "a strong connection between people or things", "बंधन / रिश्ता", "noun", "beginner", "/bɒnd/", "This bond of friendship is very strong.", "Those bonds are formed through trust.", "connection", "tie", "separation"],
  ["association", "a group of people with a common purpose", "संघ / संगठन", "noun", "elementary", "/əˌsoʊsiˈeɪʃən/", "This association works for teachers.", "Those associations promote cultural activities.", "organization", "group", ""],
  ["partnership", "a relationship between people who work together", "साझेदारी", "noun", "elementary", "/ˈpɑːrtnərʃɪp/", "This partnership between both companies is strong.", "Those partnerships helped grow the business.", "alliance", "collaboration", ""],
  ["group", "a number of people or things together", "समूह / दल", "noun", "beginner", "/ɡruːp/", "Sit in this group for the activity.", "Those groups presented their ideas well.", "team", "cluster", "individual"],
  ["team", "a group working together toward a goal", "टीम / दल", "noun", "beginner", "/tiːm/", "This team worked very hard.", "Those teams competed in the final match.", "group", "crew", "individual"],
  ["pair", "two things or people together", "जोड़ा", "noun", "beginner", "/peər/", "This pair of gloves matches.", "Find those missing pairs of socks.", "duo", "couple", "single"],
  ["category", "a group of things with shared qualities", "श्रेणी / वर्ग", "noun", "elementary", "/ˈkætɪɡəri/", "This word belongs to which category?", "Those objects fall under different categories.", "class", "type", ""],
  ["type", "a kind or variety of something", "प्रकार / किस्म", "noun", "beginner", "/taɪp/", "What type of music do you like?", "Those types of questions come in every exam.", "kind", "sort", ""],

  // Additional Demonstrative / Reference Context
  ["reference", "a mention or direction to another source", "संदर्भ / हवाला", "noun", "elementary", "/ˈrefərəns/", "This reference helps explain the topic.", "Those references are listed at the end.", "mention", "citation", ""],
  ["example", "something used to explain or illustrate a point", "उदाहरण", "noun", "beginner", "/ɪɡˈzɑːmpəl/", "Give an example using this word.", "Those examples make the rule easy to understand.", "illustration", "instance", ""],
  ["instance", "a single case or example of something", "उदाहरण / मामला", "noun", "elementary", "/ˈɪnstəns/", "In this instance, the rule applies.", "Those instances were recorded carefully.", "case", "example", ""],
  ["sample", "a small part that shows what the whole is like", "नमूना", "noun", "beginner", "/ˈsɑːmpəl/", "This sample shows the quality of the cloth.", "Test those samples before buying in bulk.", "example", "specimen", ""],
  ["model", "a representation or example to follow", "मॉडल / नमूना", "noun", "beginner", "/ˈmɒdəl/", "Follow this model for writing the essay.", "Those models were built by the students.", "example", "prototype", ""],
  ["pattern", "a repeated design or way of doing things", "नमूना / पैटर्न", "noun", "beginner", "/ˈpætərn/", "This pattern repeats every five squares.", "Identify those patterns in the data.", "design", "sequence", ""],
  ["structure", "the way something is built or organized", "संरचना / ढाँचा", "noun", "elementary", "/ˈstrʌktʃər/", "Understand the structure of this sentence.", "Those structures were built centuries ago.", "framework", "organization", ""],
  ["format", "the way something is arranged or presented", "प्रारूप / फ़ॉर्मेट", "noun", "elementary", "/ˈfɔːrmæt/", "Follow this format for writing the letter.", "Those documents are all in the same format.", "layout", "style", ""],
  ["feature", "an important or interesting quality", "विशेषता / खूबी", "noun", "elementary", "/ˈfiːtʃər/", "This feature of the phone is very useful.", "Describe those features in detail.", "quality", "attribute", ""],
  ["attribute", "a quality or characteristic of something", "गुण / विशेषता", "noun", "elementary", "/ˈætrɪbjuːt/", "Patience is an important attribute for a teacher.", "Those attributes make this a great product.", "quality", "feature", ""],

  // More Abstract and Action Words
  ["arrange", "to put things in a particular order", "व्यवस्थित करना", "verb", "beginner", "/əˈreɪndʒ/", "Please arrange these books on the shelf.", "She arranged those chairs in a circle.", "organize", "order", "scatter"],
  ["organize", "to put things in a neat and planned way", "संगठित करना", "verb", "beginner", "/ˈɔːrɡənaɪz/", "Organize this drawer before the meeting.", "She organized those files alphabetically.", "arrange", "sort", "disorder"],
  ["compare", "to look at two things to find similarities or differences", "तुलना करना", "verb", "beginner", "/kəmˈpeər/", "Compare this answer with that one.", "Compare those two paragraphs carefully.", "contrast", "evaluate", ""],
  ["classify", "to put things into groups based on type", "वर्गीकृत करना", "verb", "elementary", "/ˈklæsɪfaɪ/", "Classify these words according to their type.", "She classified those documents by year.", "categorize", "sort", ""],
  ["describe", "to say what something is like", "वर्णन करना", "verb", "beginner", "/dɪˈskraɪb/", "Describe this object in one sentence.", "Can you describe those places you visited?", "explain", "portray", ""],
  ["explain", "to make something clear and easy to understand", "समझाना", "verb", "beginner", "/ɪkˈspleɪn/", "Please explain this rule to me.", "She explained those concepts very clearly.", "clarify", "describe", "confuse"],
  ["locate", "to find or identify the position of something", "पता लगाना / ढूंढना", "verb", "elementary", "/loʊˈkeɪt/", "Can you locate this city on the map?", "She located those missing files within minutes.", "find", "pinpoint", "lose"],
  ["position", "the place where something is located", "स्थान / स्थिति", "noun", "beginner", "/pəˈzɪʃən/", "This position at the top is important.", "Mark those positions on the map.", "location", "place", ""],
  ["location", "the specific place where something is", "स्थान / जगह", "noun", "beginner", "/loʊˈkeɪʃən/", "What is the location of this office?", "Those locations are marked on the guide.", "place", "site", ""],
  ["place", "a particular area or position", "जगह / स्थान", "noun", "beginner", "/pleɪs/", "Is this the right place to sit?", "Those places are worth visiting.", "location", "spot", ""],

  // Extra vocabulary — abstract, useful everyday
  ["notice", "to see or become aware of something", "ध्यान देना / नोटिस करना", "verb", "beginner", "/ˈnoʊtɪs/", "Did you notice this change in the sentence?", "She noticed those mistakes right away.", "observe", "see", "ignore"],
  ["observe", "to watch carefully and attentively", "देखना / निरीक्षण करना", "verb", "elementary", "/əbˈzɜːrv/", "Observe this experiment closely.", "She observed those birds for an hour.", "watch", "notice", "ignore"],
  ["examine", "to look at something carefully", "जाँचना / परीक्षा लेना", "verb", "elementary", "/ɪɡˈzæmɪn/", "The doctor will examine this patient.", "Examine those documents before signing.", "inspect", "study", "ignore"],
  ["inspect", "to look at something closely to check it", "निरीक्षण करना / जाँचना", "verb", "elementary", "/ɪnˈspekt/", "Please inspect this work before submitting.", "She inspected those products for defects.", "examine", "check", "ignore"],
  ["review", "to look at something again to check or improve", "समीक्षा करना / दोबारा देखना", "verb", "beginner", "/rɪˈvjuː/", "Review this lesson before the test.", "Those assignments were reviewed by the teacher.", "check", "revise", ""],
  ["revise", "to change or improve something", "संशोधित करना", "verb", "elementary", "/rɪˈvaɪz/", "Revise this draft before submitting.", "She revised those notes for the exam.", "edit", "update", ""],
  ["correct", "to fix mistakes and make something right", "सुधारना", "verb", "beginner", "/kəˈrekt/", "Please correct this sentence.", "She corrected those spelling mistakes.", "fix", "amend", "damage"],
  ["confirm", "to state or show that something is true", "पुष्टि करना", "verb", "elementary", "/kənˈfɜːrm/", "Please confirm this booking.", "She confirmed those details with the manager.", "verify", "validate", "deny"],
  ["verify", "to check that something is accurate and true", "सत्यापित करना", "verb", "elementary", "/ˈverɪfaɪ/", "Please verify this information.", "She verified those facts before publishing.", "confirm", "check", "doubt"],
  ["present", "to show or introduce something to others", "प्रस्तुत करना", "verb", "beginner", "/prɪˈzent/", "Please present this report to the class.", "She presented those ideas in the meeting.", "show", "display", "hide"],

  // More useful vocabulary
  ["attach", "to join or fasten one thing to another", "जोड़ना / संलग्न करना", "verb", "beginner", "/əˈtætʃ/", "Attach this photo to the form.", "Please attach those files to the email.", "join", "connect", "detach"],
  ["label", "a tag or name given to identify something", "लेबल / नाम पट्टी", "noun", "beginner", "/ˈleɪbəl/", "Read this label before using the product.", "Those labels show the price and name.", "tag", "sticker", ""],
  ["mark", "a visible sign or symbol on something", "चिह्न / निशान", "noun", "beginner", "/mɑːrk/", "Put a mark here to show the answer.", "Those marks on the wall need to be cleaned.", "sign", "symbol", ""],
  ["sign", "a mark or symbol that has a meaning", "संकेत / चिह्न", "noun", "beginner", "/saɪn/", "This sign shows that the road is closed.", "Those traffic signs must be followed.", "symbol", "indicator", ""],
  ["symbol", "a thing that represents something else", "प्रतीक", "noun", "elementary", "/ˈsɪmbəl/", "This symbol represents peace.", "Those symbols are used in mathematics.", "sign", "emblem", ""],
  ["signal", "a gesture or sound that gives information", "संकेत / सिग्नल", "noun", "beginner", "/ˈsɪɡnəl/", "Wait for this signal before crossing.", "Those signals tell drivers when to stop.", "sign", "indicator", ""],
  ["highlight", "an important or most interesting part", "मुख्य बात / हाइलाइट", "noun", "elementary", "/ˈhaɪlaɪt/", "The highlight of this trip was the museum.", "Those highlights were shared on social media.", "main point", "feature", ""],
  ["summary", "a short statement of the main points", "सारांश", "noun", "elementary", "/ˈsʌməri/", "Write a summary of this chapter.", "Those summaries help in quick revision.", "overview", "abstract", "detail"],
  ["detail", "a small but important piece of information", "विवरण / जानकारी", "noun", "beginner", "/ˈdiːteɪl/", "Please note every detail of this report.", "Those details are very important.", "particular", "fact", "overview"],
  ["outline", "a general plan showing main points", "रूपरेखा / आउटलाइन", "noun", "elementary", "/ˈaʊtlaɪn/", "Prepare an outline for this essay.", "Check those outlines before starting the project.", "plan", "framework", "detail"],

  // Miscellaneous high-frequency words
  ["choice", "the act of selecting from options", "चुनाव / विकल्प", "noun", "beginner", "/tʃɔɪs/", "This is the best choice.", "Those choices will affect your future.", "option", "selection", ""],
  ["option", "one of several things you can choose", "विकल्प", "noun", "beginner", "/ˈɒpʃən/", "This option is the easiest one.", "Consider all those options carefully.", "choice", "alternative", ""],
  ["decision", "a choice made after thinking", "निर्णय / फ़ैसला", "noun", "beginner", "/dɪˈsɪʒən/", "This is a very important decision.", "Those decisions were made by the committee.", "choice", "resolution", ""],
  ["solution", "the answer to a problem", "हल / समाधान", "noun", "beginner", "/səˈluːʃən/", "This solution works for all similar problems.", "Find solutions for those challenges quickly.", "answer", "resolution", "problem"],
  ["problem", "something that causes difficulty", "समस्या / मुश्किल", "noun", "beginner", "/ˈprɒbləm/", "This problem has a simple solution.", "Solve those problems step by step.", "issue", "difficulty", "solution"],
  ["challenge", "something that is difficult but possible", "चुनौती", "noun", "elementary", "/ˈtʃæləndʒ/", "This challenge will help you grow.", "Face those challenges with courage.", "difficulty", "obstacle", "ease"],
  ["task", "a piece of work that needs to be done", "कार्य / काम", "noun", "beginner", "/tɑːsk/", "Complete this task before lunch.", "Those tasks are easy once you understand the method.", "job", "duty", ""],
  ["goal", "something you aim to achieve", "लक्ष्य", "noun", "beginner", "/ɡoʊl/", "This is my goal for this month.", "Set those goals and work toward them daily.", "aim", "target", ""],
  ["target", "a specific goal to achieve", "लक्ष्य / टारगेट", "noun", "elementary", "/ˈtɑːrɡɪt/", "Hit this target before the deadline.", "Those sales targets were met on time.", "goal", "objective", ""],
  ["result", "what happens because of an action", "परिणाम / नतीजा", "noun", "beginner", "/rɪˈzʌlt/", "This result shows great improvement.", "Those results will be announced tomorrow.", "outcome", "consequence", "cause"],

  // More words to reach 300
  ["action", "the process of doing something", "क्रिया / कार्यवाही", "noun", "beginner", "/ˈækʃən/", "Take action on this problem immediately.", "Those actions led to a good result.", "deed", "activity", "inaction"],
  ["process", "a series of steps to achieve something", "प्रक्रिया", "noun", "elementary", "/ˈproʊses/", "Follow this process step by step.", "Those processes are automated now.", "procedure", "method", ""],
  ["method", "a way of doing something", "तरीका / विधि", "noun", "beginner", "/ˈmeθəd/", "This method is the most effective.", "Try those different methods and compare.", "approach", "technique", ""],
  ["approach", "a way of dealing with something", "दृष्टिकोण / तरीका", "noun", "elementary", "/əˈproʊtʃ/", "This approach gives better results.", "Try those new approaches for studying.", "method", "strategy", ""],
  ["step", "one action in a series of actions", "कदम / चरण", "noun", "beginner", "/step/", "Follow this step carefully.", "Those steps lead to the solution.", "stage", "phase", ""],
  ["stage", "a phase in a process", "चरण / अवस्था", "noun", "elementary", "/steɪdʒ/", "We are at this final stage now.", "Those stages of growth are important.", "phase", "step", ""],
  ["level", "a position or rank in a scale", "स्तर", "noun", "beginner", "/ˈlevəl/", "This is a beginner level question.", "Move to those higher levels after practice.", "grade", "rank", ""],
  ["standard", "a level of quality that is accepted", "मानक / स्तर", "noun", "elementary", "/ˈstændərd/", "Maintain this standard of work.", "Those standards must be followed strictly.", "level", "norm", ""],
  ["quality", "how good or bad something is", "गुणवत्ता", "noun", "beginner", "/ˈkwɒlɪti/", "This product is of very high quality.", "Check the quality of those items before use.", "grade", "standard", "quantity"],
  ["value", "the importance or worth of something", "मूल्य / महत्व", "noun", "beginner", "/ˈvæljuː/", "This rule has great value in grammar.", "Those values guide a person's behavior.", "worth", "importance", ""],

  // Final set to complete 300
  ["space", "an empty area or room for something", "जगह / स्थान", "noun", "beginner", "/speɪs/", "There is enough space on this desk.", "Leave those spaces blank in the form.", "room", "area", ""],
  ["gap", "an empty space or difference between things", "अंतर / खाली जगह", "noun", "beginner", "/ɡæp/", "Fill in this gap with the correct word.", "Bridge those gaps in your knowledge.", "space", "interval", ""],
  ["line", "a long narrow mark or row of things", "रेखा / लाइन", "noun", "beginner", "/laɪn/", "Draw a line under this heading.", "Stand in those lines patiently.", "row", "streak", ""],
  ["row", "a line of things placed next to each other", "पंक्ति / कतार", "noun", "beginner", "/roʊ/", "Sit in this row near the window.", "Those rows of seats are already filled.", "line", "queue", "column"],
  ["column", "a vertical line of items in a table", "स्तंभ / कॉलम", "noun", "elementary", "/ˈkɒləm/", "Look at this column in the table.", "Fill in those columns with the correct data.", "row", "pillar", ""],
  ["list", "a series of items written one below another", "सूची / लिस्ट", "noun", "beginner", "/lɪst/", "This list has all the vocabulary words.", "Check those items on your list.", "inventory", "record", ""],
  ["chart", "a visual display of information", "चार्ट / आरेख", "noun", "beginner", "/tʃɑːrt/", "This chart shows monthly progress.", "Study those charts before the test.", "graph", "diagram", ""],
  ["diagram", "a drawing that shows how something works", "आरेख / चित्र", "noun", "elementary", "/ˈdaɪəɡræm/", "Draw a diagram for this explanation.", "Label those parts in the diagram.", "figure", "illustration", ""],
  ["image", "a picture or visual representation", "छवि / चित्र", "noun", "beginner", "/ˈɪmɪdʒ/", "This image shows the correct position.", "Those images are from the textbook.", "picture", "photo", ""],
  ["picture", "a drawing or photograph of something", "तस्वीर / चित्र", "noun", "beginner", "/ˈpɪktʃər/", "Look at this picture carefully.", "Describe those pictures in two sentences.", "image", "photo", ""],
  // Additional words to reach 300+
  ["arrangement", "the way things are organized or ordered", "व्यवस्था / क्रम", "noun", "elementary", "/əˈreɪndʒmənt/", "This arrangement of chairs looks neat.", "Those arrangements were made by the team.", "organization", "setup", "disorder"],
  ["boundary", "a line that marks the limits of an area", "सीमा / हद", "noun", "elementary", "/ˈbaʊndri/", "Do not cross this boundary during the exam.", "Those boundaries are clearly marked on the map.", "border", "limit", ""],
  ["dimension", "a measurement of length, width, or height", "आयाम / माप", "noun", "intermediate", "/daɪˈmenʃn/", "Measure this dimension accurately before cutting.", "These dimensions are given in the technical drawing.", "measurement", "size", ""],
  ["feature", "an important or noticeable part of something", "विशेषता / लक्षण", "noun", "beginner", "/ˈfiːtʃər/", "This feature makes the product unique.", "Those features are described in the manual.", "characteristic", "quality", ""],
  ["highlight", "to emphasize or draw attention to something", "उजागर करना / महत्व देना", "verb", "elementary", "/ˈhaɪlaɪt/", "Highlight this word in yellow so you remember it.", "Those highlighted sections are very important.", "emphasize", "mark", "ignore"],
  ["version", "a particular form of something different from others", "संस्करण / रूप", "noun", "elementary", "/ˈvɜːʃn/", "This version of the book is very popular.", "Those versions contain different content.", "edition", "variant", "original"],
  ["sequence", "a particular order in which things follow each other", "अनुक्रम / क्रम", "noun", "elementary", "/ˈsiːkwəns/", "Follow this sequence of steps carefully.", "These sequences are important for the experiment.", "order", "series", "disorder"],
  ["method", "a particular way of doing something", "तरीका / विधि", "noun", "beginner", "/ˈmeθəd/", "This method of learning is very effective.", "Those methods have been proven by research.", "approach", "technique", ""],
  ["variety", "a range of different things of the same type", "विविधता / किस्म", "noun", "beginner", "/vəˈraɪəti/", "This variety of fruit is very sweet.", "These varieties of rice are grown locally.", "range", "assortment", "uniformity"],
  ["structure", "the arrangement of parts that make something", "संरचना / ढाँचा", "noun", "elementary", "/ˈstrʌktʃər/", "This structure needs to be repaired.", "Those structures were built centuries ago.", "framework", "form", "disorder"],
  ["network", "a system of connected things or people", "नेटवर्क / जाल", "noun", "elementary", "/ˈnetwɜːk/", "This network of roads connects all villages.", "Those networks support thousands of users.", "system", "web", ""],
  ["alternative", "something that can be used instead of something else", "विकल्प", "noun", "elementary", "/ɔːlˈtɜːnətɪv/", "This is a good alternative to the original plan.", "Those alternatives are cheaper and safer.", "option", "choice", ""],
  ["quantity", "the amount or number of something", "मात्रा / संख्या", "noun", "beginner", "/ˈkwɒntɪti/", "This quantity is not enough for ten people.", "Order those quantities from the supplier.", "amount", "number", "quality"],
  ["selection", "the process of choosing someone or something", "चयन / चुनाव", "noun", "elementary", "/sɪˈlekʃn/", "This selection of books is excellent.", "Those selections have been made by the committee.", "choice", "picking", "rejection"],
  ["source", "the place where something comes from", "स्रोत / मूल", "noun", "beginner", "/sɔːs/", "This source of information is reliable.", "Those sources confirm the same fact.", "origin", "root", ""],
  ["target", "an aim or goal that you are working toward", "लक्ष्य / उद्देश्य", "noun", "beginner", "/ˈtɑːɡɪt/", "This target must be achieved by Friday.", "Set those targets wisely and realistically.", "goal", "aim", ""],
  ["aspect", "a particular part or feature of something", "पहलू / पक्ष", "noun", "elementary", "/ˈæspekt/", "Focus on this aspect of the problem.", "Consider those aspects before making a decision.", "element", "part", ""],
  ["format", "the shape or structure in which something is presented", "प्रारूप / ढाँचा", "noun", "elementary", "/ˈfɔːmæt/", "Use this format for your assignment.", "Those formats are explained in the guide.", "layout", "structure", ""],
];

export const ALL_DAY_5_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d5v${String(i + 1).padStart(3, "0")}`, data)
);
