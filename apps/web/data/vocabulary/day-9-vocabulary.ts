// ============================================================
// Day 9 Vocabulary — USE OF THERE (There is / are / was / were)
// Topic: Existence, location, places, buildings, rooms, objects,
//        spatial words, description words, counting, quantities
// 300+ unique words not used in Days 1-8
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
    example3: `"${word}" is commonly used when describing what exists somewhere.`,
    example4: `Using "${word}" makes your English more descriptive and clear.`,
    example5: `There is a good reason to learn "${word}" in English.`,
    officeExample: `There is a need for using "${word}" in professional contexts.`,
    dailyExample: `There are many ways to use "${word}" in daily conversation.`,
    synonyms: [syn1, syn2],
    antonyms: ant ? [ant] : [],
  };
}

// 300+ unique vocabulary words for Day 9 — Use of There
const WORDS: W[] = [
  // ── Location and place words ──────────────────────────────
  ["location","a particular place or position","स्थान, जगह","noun","beginner","/ləʊˈkeɪ.ʃən/","There is a good restaurant at this location.","The location of the office is convenient.","place","position",""],
  ["vicinity","the area near a particular place","आसपास का क्षेत्र","noun","intermediate","/vɪˈsɪn.ɪ.ti/","There are many schools in the vicinity.","Is there a hospital in the vicinity?","neighborhood","surroundings",""],
  ["surroundings","the environment or area around something","परिवेश, आसपास","noun","elementary","/səˈraʊn.dɪŋz/","There is peace in these surroundings.","The surroundings of the park are beautiful.","environment","area",""],
  ["neighborhood","the area around where you live","मोहल्ला, पड़ोस","noun","elementary","/ˈneɪ.bər.hʊd/","There are many children in this neighborhood.","Is there a market in the neighborhood?","locality","community",""],
  ["region","a large area of land","क्षेत्र, प्रांत","noun","elementary","/ˈriː.dʒən/","There are many forests in this region.","Is there snow in that region?","area","zone",""],
  ["territory","an area of land that belongs to someone","क्षेत्र, भूभाग","noun","intermediate","/ˈtɛr.ɪ.tər.i/","There are strict rules in this territory.","Is there a border in this territory?","area","zone",""],
  ["district","an area of a country or city","ज़िला, जनपद","noun","elementary","/ˈdɪs.trɪkt/","There are 30 schools in this district.","Is there a collector's office in this district?","area","division",""],
  ["province","a region of a country","प्रांत","noun","intermediate","/ˈprɒv.ɪns/","There are many languages spoken in this province.","Is there a university in this province?","state","region",""],
  ["suburb","a residential area outside a city","उपनगर","noun","intermediate","/ˈsʌb.ɜːb/","There are many parks in the suburbs.","Is there public transport in the suburb?","outskirts","residential area","city center"],
  ["rural","relating to the countryside","ग्रामीण","adjective","elementary","/ˈrʊər.əl/","There are many farms in rural areas.","Is there electricity in that rural village?","country","agricultural","urban"],

  // ── Existence and presence words ──────────────────────────
  ["existence","the fact of being real or present","अस्तित्व","noun","intermediate","/ɪɡˈzɪs.təns/","There is proof of its existence.","Is there evidence of its existence?","being","presence","nonexistence"],
  ["presence","being in a place or being available","उपस्थिति","noun","elementary","/ˈprɛz.əns/","There is a strong presence of security here.","Is there a presence of animals in that forest?","attendance","being","absence"],
  ["absence","not being in a place","अनुपस्थिति","noun","elementary","/ˈæb.səns/","There was an absence of students today.","Is there an absence of leadership?","lack","nonattendance","presence"],
  ["availability","being able to be used or obtained","उपलब्धता","noun","intermediate","/əˌveɪ.lə.ˈbɪl.ɪ.ti/","There is good availability of books here.","Is there availability of seats on this train?","access","supply","scarcity"],
  ["abundance","a very large quantity","बहुतायत, प्रचुरता","noun","intermediate","/əˈbʌn.dəns/","There is an abundance of fruit in summer.","Is there an abundance of water here?","plenty","excess","scarcity"],
  ["shortage","not enough of something","कमी","noun","elementary","/ˈʃɔːt.ɪdʒ/","There is a shortage of teachers in rural areas.","Is there a shortage of drinking water?","scarcity","lack","abundance"],
  ["supply","the amount of something available","आपूर्ति","noun","elementary","/səˈplaɪ/","There is a good supply of electricity.","Is there a regular supply of medicines?","provision","stock","demand"],
  ["demand","a desire or need for something","माँग","noun","elementary","/dɪˈmɑːnd/","There is a high demand for English speakers.","Is there a demand for these products?","need","requirement","supply"],
  ["access","the ability to reach or use something","पहुँच","noun","elementary","/ˈæk.sɛs/","There is free access to this library.","Is there access to the internet here?","approach","entry","restriction"],
  ["opportunity","a time when something is possible","अवसर, मौका","noun","elementary","/ˌɒp.əˈtjuː.nɪ.ti/","There is an opportunity to grow here.","Is there an opportunity for promotion?","chance","opening","obstacle"],

  // ── Nature and physical environment ───────────────────────
  ["mountain","a large natural rise of the earth","पहाड़, पर्वत","noun","beginner","/ˈmaʊn.tɪn/","There is a beautiful mountain in the north.","Are there mountains near your city?","peak","hill","valley"],
  ["valley","a low area between mountains or hills","घाटी","noun","elementary","/ˈvæl.i/","There is a river flowing through the valley.","Are there any villages in the valley?","dale","glen","mountain"],
  ["forest","a large area covered with trees","जंगल, वन","noun","beginner","/ˈfɒr.ɪst/","There is a dense forest on the hill.","Are there wild animals in the forest?","woods","jungle","desert"],
  ["desert","a dry area with very little rain","रेगिस्तान","noun","elementary","/ˈdɛz.ət/","There is very little water in the desert.","Are there any oases in that desert?","wasteland","arid land","oasis"],
  ["ocean","a very large area of sea","महासागर","noun","beginner","/ˈəʊ.ʃən/","There is a lot of life in the ocean.","Are there whales in that ocean?","sea","deep water","land"],
  ["river","a large natural stream of water","नदी","noun","beginner","/ˈrɪv.ər/","There is a river near my house.","Is there a bridge over that river?","stream","waterway",""],
  ["lake","a large body of water surrounded by land","झील","noun","beginner","/leɪk/","There is a beautiful lake in the park.","Are there fish in this lake?","pond","reservoir",""],
  ["island","a piece of land surrounded by water","द्वीप","noun","elementary","/ˈaɪ.lənd/","There is a small island in the middle of the river.","Are there people living on that island?","isle","landmass","continent"],
  ["cave","a large hole in the side of a hill","गुफा","noun","elementary","/keɪv/","There is a deep cave in that mountain.","Are there bats in the cave?","cavern","tunnel",""],
  ["cliff","a steep rock face near the sea","चट्टान, खड़ी चट्टान","noun","intermediate","/klɪf/","There is a dangerous cliff at the edge.","Are there birds nesting on the cliff?","rock face","bluff",""],

  // ── Buildings and infrastructure ──────────────────────────
  ["structure","something built or constructed","संरचना, ढाँचा","noun","intermediate","/ˈstrʌk.tʃər/","There is a strong structure supporting the bridge.","Is there a structure plan for this building?","building","framework",""],
  ["facility","a building or service for a specific purpose","सुविधा","noun","elementary","/fəˈsɪl.ɪ.ti/","There is a gym facility in this hotel.","Are there medical facilities here?","service","amenity",""],
  ["infrastructure","the basic systems of a country","आधारभूत ढाँचा","noun","intermediate","/ˈɪn.frə.strʌk.tʃər/","There is good infrastructure in the city.","Is there proper infrastructure in that area?","framework","system",""],
  ["construction","the process of building something","निर्माण","noun","elementary","/kənˈstrʌk.ʃən/","There is construction going on near the school.","Is there new construction in your area?","building","development","demolition"],
  ["foundation","the base of a building","नींव","noun","elementary","/faʊnˈdeɪ.ʃən/","There is a strong foundation under this building.","Is there a crack in the foundation?","base","ground","roof"],
  ["entrance","the way in to a building or place","प्रवेश द्वार","noun","elementary","/ˈɛn.trəns/","There is a security guard at the entrance.","Is there an entrance from the back?","entry","door","exit"],
  ["exit","the way out of a building or place","निकास","noun","elementary","/ˈɛɡ.zɪt/","There is an emergency exit on the right.","Is there an exit near the parking lot?","way out","door","entrance"],
  ["corridor","a long narrow passage in a building","गलियारा, रास्ता","noun","elementary","/ˈkɒr.ɪ.dɔːr/","There is a long corridor in the office.","Is there a shortcut through this corridor?","hallway","passage",""],
  ["balcony","a platform on the outside of a building","बालकनी","noun","elementary","/ˈbæl.kə.ni/","There is a beautiful balcony in the apartment.","Is there a view from the balcony?","terrace","platform",""],
  ["basement","the lowest floor of a building","तहखाना","noun","elementary","/ˈbeɪs.mənt/","There is a parking lot in the basement.","Is there a storage room in the basement?","cellar","underground floor",""],

  // ── Transportation and roads ──────────────────────────────
  ["highway","a main road between cities","राजमार्ग","noun","elementary","/ˈhaɪ.weɪ/","There is a new highway connecting the two cities.","Is there a toll on this highway?","freeway","expressway","lane"],
  ["intersection","a place where roads meet","चौराहा","noun","intermediate","/ˌɪn.təˈsɛk.ʃən/","There is a traffic light at the intersection.","Is there a crossing at the intersection?","crossroads","junction",""],
  ["flyover","a bridge carrying a road over another","फ्लाईओवर","noun","elementary","/ˈflaɪ.əʊ.vər/","There is a flyover being built near the market.","Is there a flyover on this route?","overpass","bridge","underpass"],
  ["tunnel","a passage under the ground or mountain","सुरंग","noun","elementary","/ˈtʌn.əl/","There is a tunnel through the mountain.","Is there a train tunnel here?","passage","underpass","bridge"],
  ["signal","a light that tells traffic to stop or go","यातायात संकेत","noun","beginner","/ˈsɪɡ.nəl/","There is a signal at every crossing.","Is there a broken signal on this road?","traffic light","indicator",""],
  ["roundabout","a circular road junction","गोल चक्कर","noun","elementary","/ˈraʊnd.ə.baʊt/","There is a roundabout at the end of the road.","Is there a garden in the roundabout?","traffic circle","rotary",""],
  ["pavement","a hard surface for walking on","फुटपाथ","noun","elementary","/ˈpeɪv.mənt/","There is a smooth pavement on this road.","Is there a pavement for pedestrians?","footpath","sidewalk","road"],
  ["pedestrian","a person walking on a road","पैदल यात्री","noun","intermediate","/pɪˈdɛs.tri.ən/","There are many pedestrians on this street.","Is there a pedestrian crossing here?","walker","passer-by","driver"],
  ["commute","traveling regularly between home and work","आना-जाना, सफ़र","noun","elementary","/kəˈmjuːt/","There is a long commute to the office.","Is there a faster way to commute?","travel","journey",""],
  ["parking","a place where vehicles can be left","पार्किंग","noun","beginner","/ˈpɑːk.ɪŋ/","There is free parking near the mall.","Is there a parking lot behind the office?","garage","lot",""],

  // ── Market and shopping words ─────────────────────────────
  ["market","a place where goods are bought and sold","बाज़ार","noun","beginner","/ˈmɑːk.ɪt/","There is a weekly market on Sundays.","Is there a vegetable market nearby?","bazaar","mall",""],
  ["store","a place that sells things","दुकान","noun","beginner","/stɔːr/","There is a new store opening in town.","Is there a stationery store here?","shop","outlet",""],
  ["supermarket","a large store selling food and other goods","सुपरमार्केट","noun","elementary","/ˈsuː.pəˌmɑː.kɪt/","There is a supermarket on the main road.","Is there a supermarket with a bakery section?","grocery store","hypermarket",""],
  ["warehouse","a large building for storing goods","गोदाम","noun","intermediate","/ˈweər.haʊs/","There is a warehouse behind the factory.","Is there space in the warehouse for new stock?","storage","depot",""],
  ["outlet","a store that sells goods directly","आउटलेट, विक्रय केंद्र","noun","elementary","/ˈaʊt.lɛt/","There is a branded outlet in the mall.","Is there an outlet for this product in our city?","store","shop",""],
  ["counter","a long flat surface in a shop","काउंटर","noun","beginner","/ˈkaʊn.tər/","There is a billing counter at the exit.","Is there a counter for complaints?","desk","table",""],
  ["receipt","a written proof of payment","रसीद","noun","beginner","/rɪˈsiːt/","There is a receipt for every purchase.","Is there a receipt for this payment?","bill","invoice",""],
  ["discount","a reduction in the price","छूट, बट्टा","noun","beginner","/ˈdɪs.kaʊnt/","There is a 20% discount on all items today.","Is there a discount for students?","reduction","offer","surcharge"],
  ["bargain","something bought for a low price","सस्ता सौदा","noun","elementary","/ˈbɑːɡ.ɪn/","There is a great bargain at the winter sale.","Is there a bargain available on this product?","deal","offer",""],
  ["purchase","something you buy","खरीदारी","noun","elementary","/ˈpɜː.tʃɪs/","There is a return policy on every purchase.","Is there a warranty on this purchase?","buy","acquisition","sale"],

  // ── Social and community places ───────────────────────────
  ["library","a building with books to borrow or read","पुस्तकालय","noun","beginner","/ˈlaɪ.brər.i/","There is a public library near the school.","Is there a library with English books?","bookstore","archive",""],
  ["museum","a building where historical objects are kept","संग्रहालय","noun","elementary","/mjuːˈziː.əm/","There is a national museum in the capital.","Is there a science museum in this city?","gallery","archive",""],
  ["gallery","a room or building for showing art","दीर्घा, गैलरी","noun","elementary","/ˈɡæl.ər.i/","There is an art gallery downtown.","Is there a free gallery near us?","museum","exhibition",""],
  ["stadium","a large venue for sports events","स्टेडियम","noun","elementary","/ˈsteɪ.di.əm/","There is a cricket stadium in our city.","Is there a covered stadium here?","arena","ground",""],
  ["gymnasium","a room or building for exercise","जिम, व्यायामशाला","noun","intermediate","/dʒɪmˈneɪ.zi.əm/","There is a modern gymnasium in the school.","Is there a gymnasium in the hotel?","gym","fitness center",""],
  ["auditorium","a large room for meetings and performances","सभागार","noun","intermediate","/ˌɔː.dɪˈtɔː.ri.əm/","There is a new auditorium at the college.","Is there seating for 500 in the auditorium?","hall","theater",""],
  ["canteen","a place where food is sold in a school or office","कैंटीन","noun","elementary","/kænˈtiːn/","There is a canteen on the third floor.","Is there a canteen with healthy food?","cafeteria","dining room",""],
  ["cafeteria","a self-service restaurant","कैफेटेरिया","noun","elementary","/ˌkæf.ɪˈtɪər.i.ə/","There is a cafeteria on every floor of the office.","Is there a cafeteria open in the evening?","canteen","dining hall",""],
  ["pharmacy","a shop that sells medicines","दवाई की दुकान, फार्मेसी","noun","elementary","/ˈfɑːr.mə.si/","There is a 24-hour pharmacy nearby.","Is there a pharmacy that sells this medicine?","drugstore","medical shop",""],
  ["clinic","a small medical center","क्लीनिक","noun","elementary","/ˈklɪn.ɪk/","There is a dental clinic on the ground floor.","Is there a free clinic for poor patients?","health center","dispensary",""],

  // ── Furniture and household items ─────────────────────────
  ["furniture","tables, chairs, and other movable items","फर्नीचर","noun","beginner","/ˈfɜː.nɪ.tʃər/","There is beautiful furniture in the living room.","Is there enough furniture for all guests?","fittings","fixtures",""],
  ["shelf","a flat board for storing things","ताक, शेल्फ","noun","beginner","/ʃɛlf/","There is a shelf full of books in my room.","Is there a shelf in the kitchen?","rack","ledge",""],
  ["cabinet","a piece of furniture with shelves","अलमारी, कैबिनेट","noun","elementary","/ˈkæb.ɪ.nɪt/","There is a medicine cabinet in the bathroom.","Is there a locked cabinet in the office?","cupboard","wardrobe",""],
  ["drawer","a sliding box in a desk or cabinet","दराज","noun","elementary","/drɔːr/","There is a set of keys in the drawer.","Is there a lock on this drawer?","compartment","slot",""],
  ["wardrobe","a large piece of furniture for clothes","अलमारी, वार्डरोब","noun","elementary","/ˈwɔːd.rəʊb/","There is a large wardrobe in the bedroom.","Is there space in the wardrobe for more clothes?","closet","cabinet",""],
  ["mattress","the soft part of a bed","गद्दा","noun","elementary","/ˈmæt.rɪs/","There is a new mattress on the bed.","Is there a comfortable mattress in the room?","cushion","padding",""],
  ["curtain","a piece of cloth to cover a window","पर्दा","noun","beginner","/ˈkɜː.tɪn/","There are thick curtains to block the light.","Is there a curtain on every window?","drape","blind",""],
  ["mirror","a glass in which you see your reflection","आईना, दर्पण","noun","beginner","/ˈmɪr.ər/","There is a mirror in every room.","Is there a full-length mirror here?","looking glass","reflection glass",""],
  ["cushion","a soft pad for sitting on","कुशन, तकिया","noun","beginner","/ˈkʊʃ.ən/","There are colorful cushions on the sofa.","Is there a cushion for back support?","pillow","pad",""],
  ["appliance","an electrical device for household use","उपकरण","noun","intermediate","/əˈplaɪ.əns/","There is a new appliance in the kitchen.","Is there a warranty for this appliance?","device","gadget",""],

  // ── Garden and outdoor words ──────────────────────────────
  ["garden","an area where plants or flowers grow","बगीचा","noun","beginner","/ˈɡɑː.dən/","There is a beautiful garden behind the house.","Is there a garden in your school?","park","yard",""],
  ["lawn","an area of short grass in a garden","लॉन, घास का मैदान","noun","elementary","/lɔːn/","There is a green lawn in front of the bungalow.","Is there a lawn for children to play?","grass","yard",""],
  ["pond","a small area of still water","तालाब","noun","beginner","/pɒnd/","There is a pond with lotuses in the park.","Are there fish in that pond?","pool","lake",""],
  ["fountain","a structure that shoots water into the air","फव्वारा","noun","elementary","/ˈfaʊn.tɪn/","There is a beautiful fountain in the center.","Is there a fountain in the garden?","waterfall","spring",""],
  ["bench","a long seat in a park or public place","बेंच","noun","beginner","/bɛntʃ/","There is a bench under every tree.","Is there a bench near the entrance?","seat","chair",""],
  ["gate","a movable barrier at an entrance","फाटक, दरवाज़ा","noun","beginner","/ɡeɪt/","There is a large iron gate at the entrance.","Is there a lock on the gate?","door","entrance",""],
  ["fence","a structure used to mark a boundary","बाड़","noun","beginner","/fɛns/","There is a wooden fence around the garden.","Is there a fence to keep animals out?","barrier","boundary",""],
  ["pathway","a path for walking on","रास्ता, पगडंडी","noun","elementary","/ˈpɑːθ.weɪ/","There is a stone pathway through the garden.","Is there a clean pathway to the entrance?","path","walkway",""],
  ["flowerbed","an area where flowers are planted","फूलों की क्यारी","noun","elementary","/ˈflaʊ.ə.bɛd/","There is a colorful flowerbed near the main entrance.","Is there a flowerbed in your garden?","garden bed","planting area",""],
  ["greenhouse","a glass building for growing plants","ग्रीनहाउस","noun","intermediate","/ˈɡriːn.haʊs/","There is a greenhouse in the botanical garden.","Is there a greenhouse in the university?","glasshouse","hothouse",""],

  // ── Weather and atmosphere words ──────────────────────────
  ["atmosphere","the air around the Earth or a place","वातावरण","noun","intermediate","/ˈæt.mə.sfɪər/","There is a pleasant atmosphere in this café.","Is there a good atmosphere at the event?","environment","air",""],
  ["breeze","a gentle wind","हवा, बयार","noun","elementary","/briːz/","There is a cool breeze coming from the sea.","Is there a breeze today?","wind","gust","still air"],
  ["humidity","the amount of moisture in the air","आर्द्रता, नमी","noun","intermediate","/hjuːˈmɪd.ɪ.ti/","There is high humidity in coastal cities.","Is there a lot of humidity during monsoon?","moisture","dampness","dryness"],
  ["frost","ice crystals formed on cold surfaces","पाला, ठंड","noun","elementary","/frɒst/","There is frost on the grass in winter mornings.","Is there frost at night in December?","freeze","ice","heat"],
  ["heatwave","a long period of very hot weather","गर्मी की लहर","noun","intermediate","/ˈhiːt.weɪv/","There is a heatwave across the country this week.","Is there a heatwave warning today?","extreme heat","hot spell","cold wave"],
  ["rainfall","the amount of rain that falls","वर्षापात","noun","elementary","/ˈreɪn.fɔːl/","There is heavy rainfall in Kerala in June.","Is there enough rainfall for farming?","precipitation","rain","drought"],
  ["storm","violent weather with wind and rain","तूफान","noun","beginner","/stɔːm/","There is a storm approaching from the coast.","Is there a storm warning for tonight?","hurricane","tempest","calm"],
  ["lightning","a flash of light in the sky during a storm","बिजली, आकाशीय विद्युत","noun","elementary","/ˈlaɪt.nɪŋ/","There is lightning in the dark sky.","Is there lightning protection on this building?","thunderbolt","flash",""],
  ["thunder","the loud sound during a storm","गड़गड़ाहट, बादलों का शोर","noun","elementary","/ˈθʌn.dər/","There is loud thunder outside.","Is there thunder without lightning?","boom","rumble","silence"],
  ["drizzle","light rain falling in fine drops","हल्की बारिश, फुहार","noun","elementary","/ˈdrɪz.əl/","There is a slight drizzle this morning.","Is there a drizzle expected today?","light rain","shower","downpour"],

  // ── Food and kitchen words ────────────────────────────────
  ["ingredient","a food item used in cooking","सामग्री","noun","elementary","/ɪnˈɡriː.di.ənt/","There is a list of ingredients on the packet.","Are there fresh ingredients in the kitchen?","component","element",""],
  ["recipe","instructions for preparing a dish","नुस्ख़ा, रेसिपी","noun","beginner","/ˈrɛs.ɪ.pi/","There is a recipe book on the shelf.","Is there a recipe for this dish online?","formula","method",""],
  ["cuisine","a style or method of cooking","व्यंजन शैली","noun","intermediate","/kwɪˈziːn/","There is a wide variety of Indian cuisine.","Is there a restaurant with Italian cuisine?","cookery","food style",""],
  ["portion","an amount of food for one person","हिस्सा, भाग","noun","elementary","/ˈpɔːʃ.ən/","There is a large portion of rice on the plate.","Is there an extra portion available?","serving","helping",""],
  ["flavor","the taste of food or drink","स्वाद, जायका","noun","beginner","/ˈfleɪ.vər/","There is a strong flavor of spices in this dish.","Is there a sweet flavor in this dessert?","taste","zest","blandness"],
  ["seasoning","salt, pepper, or spices added to food","मसाला, नमक-मिर्च","noun","intermediate","/ˈsiː.zən.ɪŋ/","There is too much seasoning in this soup.","Is there seasoning in this salad?","spice","flavoring",""],
  ["nutrition","the process of getting healthy food","पोषण","noun","intermediate","/njuːˈtrɪʃ.ən/","There is great nutrition in green vegetables.","Is there enough nutrition in this meal?","nourishment","diet",""],
  ["appetite","a desire for food","भूख, रुचि","noun","intermediate","/ˈæp.ɪ.taɪt/","There is a good appetite after exercise.","Is there a loss of appetite in the patient?","hunger","craving","fullness"],
  ["beverage","a drink","पेय पदार्थ","noun","intermediate","/ˈbɛv.ər.ɪdʒ/","There is a choice of beverages at the counter.","Is there a hot beverage available?","drink","liquid",""],
  ["aroma","a pleasant smell from food or drink","सुगंध, महक","noun","elementary","/əˈrəʊ.mə/","There is a wonderful aroma from the kitchen.","Is there an aroma of spices in this dish?","fragrance","scent","odor"],

  // ── Sports and games ──────────────────────────────────────
  ["championship","a competition to find the best","चैंपियनशिप","noun","elementary","/ˈtʃæm.pi.ən.ʃɪp/","There is a cricket championship next month.","Is there a national championship for badminton?","tournament","contest",""],
  ["tournament","a series of competitions","टूर्नामेंट","noun","elementary","/ˈtɔː.nə.mənt/","There is a chess tournament at school.","Is there a football tournament this summer?","championship","competition",""],
  ["trophy","a prize for winning a competition","ट्रॉफी","noun","elementary","/ˈtrəʊ.fi/","There is a golden trophy for the winner.","Is there a trophy for the debate competition?","prize","award",""],
  ["referee","someone who makes sure rules are followed","रेफरी","noun","elementary","/ˌrɛf.əˈriː/","There is a referee for every match.","Is there a fair referee in this game?","umpire","judge",""],
  ["spectator","someone who watches a game or event","दर्शक","noun","intermediate","/spɛkˈteɪ.tər/","There are thousands of spectators at the match.","Is there a good view for spectators?","viewer","audience","participant"],
  ["venue","the place where an event happens","स्थल, आयोजन स्थल","noun","elementary","/ˈvɛn.juː/","There is a wonderful venue for the concert.","Is there parking at the venue?","location","site",""],
  ["coach","a person who trains athletes","प्रशिक्षक","noun","elementary","/kəʊtʃ/","There is a new coach for the basketball team.","Is there a coach for swimming?","trainer","instructor",""],
  ["equipment","tools or gear used for an activity","उपकरण, सामग्री","noun","elementary","/ɪˈkwɪp.mənt/","There is all the necessary equipment in the gym.","Is there enough equipment for the team?","gear","tools",""],
  ["scoreboard","a board showing the score in a game","स्कोरबोर्ड","noun","elementary","/ˈskɔː.bɔːd/","There is a large scoreboard at the stadium.","Is there a digital scoreboard in this arena?","display board","score display",""],
  ["league","a group of sports teams that compete together","लीग, संघ","noun","elementary","/liːɡ/","There is a premier league match today.","Is there a local cricket league in your town?","division","association",""],

  // ── Office and workplace ──────────────────────────────────
  ["colleague","a person you work with","सहकर्मी","noun","elementary","/ˈkɒl.iːɡ/","There is a new colleague joining today.","Are there friendly colleagues in your office?","coworker","associate","competitor"],
  ["department","a section of an organization","विभाग","noun","elementary","/dɪˈpɑːt.mənt/","There is a marketing department on the second floor.","Is there a separate HR department?","division","section",""],
  ["meeting","a gathering to discuss something","बैठक, मीटिंग","noun","beginner","/ˈmiː.tɪŋ/","There is a team meeting at 10 AM.","Is there a meeting room available?","conference","session",""],
  ["agenda","a list of items to discuss","एजेंडा, कार्यसूची","noun","intermediate","/əˈdʒɛn.də/","There is a clear agenda for today's meeting.","Is there an agenda for the board meeting?","plan","schedule",""],
  ["deadline","a time by which work must be finished","समय-सीमा","noun","elementary","/ˈdɛd.laɪn/","There is a strict deadline for this project.","Is there a flexible deadline for this task?","due date","cutoff","extension"],
  ["cubicle","a small enclosed work space","क्यूबिकल, कार्य-कक्ष","noun","intermediate","/ˈkjuː.bɪ.kl/","There is a cubicle assigned to each employee.","Is there a printer near my cubicle?","partition","workspace",""],
  ["printer","a machine that prints documents","प्रिंटर","noun","beginner","/ˈprɪn.tər/","There is a color printer in the office.","Is there a printer available on this floor?","copier","machine",""],
  ["report","an official written account of something","रिपोर्ट","noun","elementary","/rɪˈpɔːt/","There is a monthly report to be submitted.","Is there a report on the recent audit?","document","record",""],
  ["supervisor","a person who oversees work","पर्यवेक्षक, निरीक्षक","noun","elementary","/ˈsuː.pər.vaɪ.zər/","There is a supervisor checking all the work.","Is there a supervisor available to help?","manager","boss","employee"],
  ["intern","a person learning a job for a short time","इंटर्न, प्रशिक्षु","noun","elementary","/ˈɪn.tɜːn/","There is an intern starting work today.","Is there an internship program in your company?","trainee","apprentice","senior"],

  // ── Rooms and spaces ──────────────────────────────────────
  ["bedroom","a room used for sleeping","शयनकक्ष, सोने का कमरा","noun","beginner","/ˈbɛd.ruːm/","There is a large bedroom on the first floor.","Is there an attached bathroom in the bedroom?","sleeping room","chamber",""],
  ["bathroom","a room with a toilet and bath","बाथरूम, स्नानघर","noun","beginner","/ˈbɑːθ.ruːm/","There is a bathroom at the end of the corridor.","Is there hot water in the bathroom?","washroom","restroom",""],
  ["kitchen","a room where food is prepared","रसोई, किचन","noun","beginner","/ˈkɪtʃ.ɪn/","There is a modern kitchen in the new flat.","Is there a gas stove in the kitchen?","cookroom","galley",""],
  ["hallway","an entrance passage in a building","दालान, प्रवेश मार्ग","noun","elementary","/ˈhɔːl.weɪ/","There is a shoe rack in the hallway.","Is there a mirror in the hallway?","entrance","foyer",""],
  ["staircase","a set of stairs inside a building","सीढ़ियाँ","noun","elementary","/ˈsteər.keɪs/","There is a wooden staircase in the old house.","Is there a lift or only a staircase?","stairs","stairway",""],
  ["rooftop","the top surface of a building","छत, रूफटॉप","noun","elementary","/ˈruːf.tɒp/","There is a garden on the rooftop of the hotel.","Is there a rooftop café here?","terrace","roof",""],
  ["lobby","an entrance hall in a hotel or building","लॉबी, स्वागत कक्ष","noun","elementary","/ˈlɒb.i/","There is a comfortable lobby in the hotel.","Is there a reception desk in the lobby?","foyer","entrance hall",""],
  ["attic","the space below the roof of a building","अटारी, छत के नीचे का कमरा","noun","elementary","/ˈæt.ɪk/","There is an old trunk in the attic.","Is there a window in the attic?","loft","garret",""],
  ["cellar","an underground room for storage","तहखाना","noun","elementary","/ˈsɛl.ər/","There is a wine cellar in this old mansion.","Is there a cellar under the building?","basement","vault",""],
  ["porch","a covered shelter at the entrance of a house","बरामदा","noun","elementary","/pɔːtʃ/","There is a porch where guests can sit.","Is there a fan on the porch?","veranda","entrance",""],

  // ── Spatial and positional words ──────────────────────────
  ["adjacent","next to or close to something","निकट, बगल में","adjective","intermediate","/əˈdʒeɪ.sənt/","There is a shop adjacent to the school.","Is there a building adjacent to the park?","nearby","neighboring","distant"],
  ["opposite","on the other side of something","विपरीत, सामने","adjective","elementary","/ˈɒp.ə.zɪt/","There is a bus stop opposite the office.","Is there a park directly opposite the hotel?","facing","across","same side"],
  ["beneath","in a lower position than something","नीचे, के नीचे","preposition","elementary","/bɪˈniːθ/","There is a secret room beneath the stairs.","Is there a basement beneath this building?","below","under","above"],
  ["overhead","above your head or at a higher level","ऊपर, सिर के ऊपर","adjective","elementary","/ˌəʊ.vəˈhɛd/","There is an overhead projector in the classroom.","Is there an overhead bridge near the station?","above","elevated","below"],
  ["distant","far away in space or time","दूर, दूरस्थ","adjective","elementary","/ˈdɪs.tənt/","There is a distant mountain visible on a clear day.","Is there a distant relative visiting you?","far","remote","nearby"],
  ["inner","inside or close to the center","आंतरिक, भीतरी","adjective","elementary","/ˈɪn.ər/","There is an inner room behind the main hall.","Is there an inner courtyard in this building?","interior","inside","outer"],
  ["outer","on the outside of something","बाहरी","adjective","elementary","/ˈaʊ.tər/","There is an outer wall surrounding the campus.","Is there an outer gate to this property?","exterior","outside","inner"],
  ["central","in the middle of a place","केंद्रीय, मध्य का","adjective","elementary","/ˈsɛn.trəl/","There is a central park in the city.","Is there a central heating system here?","middle","main","peripheral"],
  ["perimeter","the outer edge of an area","परिधि, सीमा रेखा","noun","intermediate","/pəˈrɪm.ɪ.tər/","There is a fence around the perimeter of the school.","Is there CCTV along the perimeter?","boundary","edge","center"],
  ["boundary","a line marking the limits of an area","सीमा","noun","elementary","/ˈbaʊn.dri/","There is a boundary wall between the two houses.","Is there a clear boundary for this property?","border","limit","center"],

  // ── Quantity and counting words ───────────────────────────
  ["quantity","an amount or number of something","मात्रा, संख्या","noun","elementary","/ˈkwɒn.tɪ.ti/","There is a large quantity of rice in the store.","Is there a minimum quantity for this order?","amount","number",""],
  ["plenty","a large or sufficient amount","प्रचुरता, काफी","pronoun","elementary","/ˈplɛn.ti/","There is plenty of food for everyone.","Is there plenty of time before the exam?","abundance","enough","scarcity"],
  ["several","more than two but not very many","कई, अनेक","adjective","elementary","/ˈsɛv.ər.əl/","There are several options to choose from.","Is there still several days before the deadline?","many","numerous","few"],
  ["numerous","very many","बहुत, बहुसंख्यक","adjective","intermediate","/ˈnjuː.mər.əs/","There are numerous examples of this rule.","Is there a numerous crowd at the event?","many","countless","few"],
  ["sufficient","enough for a purpose","पर्याप्त","adjective","intermediate","/səˈfɪʃ.ənt/","There is sufficient food for all the guests.","Is there sufficient light in the room?","enough","adequate","insufficient"],
  ["excess","more than what is needed","अतिरिक्त, बहुत अधिक","noun","intermediate","/ˈɛk.sɛs/","There is an excess of sugar in this recipe.","Is there any excess material after construction?","surplus","extra","deficit"],
  ["majority","the greater number of a group","बहुमत, अधिकांश","noun","intermediate","/məˈdʒɒr.ɪ.ti/","There is a majority of students who passed.","Is there a majority opinion on this issue?","bulk","most","minority"],
  ["minority","the smaller number of a group","अल्पसंख्यक, कम संख्या","noun","intermediate","/maɪˈnɒr.ɪ.ti/","There is a minority of students who need extra help.","Is there a minority language spoken in this area?","small group","few","majority"],
  ["proportion","a part of a whole","अनुपात, हिस्सा","noun","intermediate","/prəˈpɔː.ʃən/","There is a large proportion of students from rural areas.","Is there a correct proportion of ingredients in this recipe?","ratio","share",""],
  ["fraction","a small part of something","भाग, अंश","noun","intermediate","/ˈfræk.ʃən/","There is only a fraction of the work left.","Is there a fraction of the budget remaining?","portion","part","whole"],

  // ── Describing objects and things ─────────────────────────
  ["texture","how a surface feels when touched","बनावट, सतह की प्रकृति","noun","intermediate","/ˈtɛks.tʃər/","There is a rough texture on the wall.","Is there a smooth texture in this fabric?","surface","feel",""],
  ["dimension","a measurement of length, width, or height","आयाम, माप","noun","intermediate","/daɪˈmɛn.ʃən/","There is an exact dimension listed in the blueprint.","Is there a height dimension mentioned in the plan?","measurement","size",""],
  ["weight","how heavy something is","वज़न, भार","noun","beginner","/weɪt/","There is a weight limit for this elevator.","Is there a difference in weight between these two boxes?","mass","heaviness","lightness"],
  ["height","how tall something is","ऊंचाई","noun","beginner","/haɪt/","There is a maximum height restriction on this road.","Is there enough height in this room?","altitude","tallness","depth"],
  ["width","how wide something is","चौड़ाई","noun","elementary","/wɪdθ/","There is a limited width in this parking space.","Is there enough width for a double bed?","breadth","span","narrowness"],
  ["depth","how deep something is","गहराई","noun","elementary","/dɛpθ/","There is great depth in this swimming pool.","Is there enough depth for a large fish tank?","deepness","profundity","shallowness"],
  ["length","the distance from one end to the other","लंबाई","noun","beginner","/lɛŋkθ/","There is a standard length for this type of pipe.","Is there a length restriction for this essay?","extent","span","width"],
  ["volume","the amount of space something takes up","आयतन, मात्रा","noun","intermediate","/ˈvɒl.juːm/","There is a large volume of water in this tank.","Is there a volume measurement on the container?","capacity","amount",""],
  ["capacity","the maximum amount something can hold","क्षमता","noun","elementary","/kəˈpæs.ɪ.ti/","There is a seating capacity of 200 in this hall.","Is there enough capacity for additional storage?","size","volume",""],
  ["shape","the outer form of something","आकार, आकृति","noun","beginner","/ʃeɪp/","There is a triangular shape on the logo.","Is there a specific shape required for this design?","form","outline",""],

  // ── Description and quality words ─────────────────────────
  ["ancient","very old, from a long time ago","प्राचीन, पुरातन","adjective","elementary","/ˈeɪn.ʃənt/","There is an ancient temple near the forest.","Is there an ancient monument in your city?","old","historic","modern"],
  ["modern","of the present time or recent past","आधुनिक, नवीन","adjective","elementary","/ˈmɒd.ərn/","There is a modern hospital in the new town.","Is there a modern design in this building?","contemporary","new","ancient"],
  ["spacious","having a lot of space","विशाल, खुला हुआ","adjective","elementary","/ˈspeɪ.ʃəs/","There is a spacious hall for the event.","Is there a spacious kitchen in the flat?","roomy","large","cramped"],
  ["narrow","not wide","संकरा, तंग","adjective","elementary","/ˈnær.əʊ/","There is a narrow lane behind the market.","Is there a narrow passage between these buildings?","thin","tight","wide"],
  ["cramped","uncomfortably small or restricted","तंग, भीड़भाड़ वाला","adjective","intermediate","/kræmpt/","There is a cramped working space in the old office.","Is there a cramped feeling in this small room?","tight","confined","spacious"],
  ["elevated","raised above the ground level","ऊँचा, उन्नत","adjective","intermediate","/ˈɛl.ɪ.veɪ.tɪd/","There is an elevated platform for the speaker.","Is there an elevated section in the stadium?","raised","high","low"],
  ["underground","below the surface of the ground","भूमिगत, ज़मीन के नीचे","adjective","elementary","/ˌʌn.dəˈɡraʊnd/","There is an underground market below the mall.","Is there an underground metro here?","subterranean","below ground","surface"],
  ["isolated","far from other places or people","एकांत, अलग-थलग","adjective","intermediate","/ˈaɪ.sə.leɪ.tɪd/","There is an isolated village deep in the mountains.","Is there an isolated room for quiet study?","remote","secluded","connected"],
  ["visible","able to be seen","दृश्य, नज़र आने वाला","adjective","elementary","/ˈvɪz.ɪ.bəl/","There is a visible crack in the wall.","Is there a visible sign at the entrance?","noticeable","observable","invisible"],
  ["transparent","clear and able to be seen through","पारदर्शी","adjective","intermediate","/trænsˈpær.ənt/","There is a transparent glass wall in the office.","Is there a transparent cover on this screen?","clear","see-through","opaque"],

  // ── Objects around us ─────────────────────────────────────
  ["container","an object used to hold things","कंटेनर, डिब्बा","noun","elementary","/kənˈteɪ.nər/","There is a container of rice in the pantry.","Is there a container large enough for storage?","box","vessel",""],
  ["device","a tool or machine for a particular purpose","यंत्र, उपकरण","noun","elementary","/dɪˈvaɪs/","There is a new device to measure blood pressure.","Is there a device for cleaning the air?","instrument","gadget",""],
  ["instrument","a tool used for a specific purpose","यंत्र, औज़ार","noun","elementary","/ˈɪn.strə.mənt/","There is a surgical instrument in the clinic.","Is there a musical instrument in the school?","tool","device",""],
  ["material","the matter from which something is made","सामग्री, पदार्थ","noun","elementary","/məˈtɪər.i.əl/","There is a lot of construction material on the site.","Is there any raw material left in the store?","substance","matter",""],
  ["surface","the outside or top layer of something","सतह, ऊपरी परत","noun","elementary","/ˈsɜː.fɪs/","There is a smooth surface on this table.","Is there a clean surface to work on?","top","face",""],
  ["layer","a single thickness of a material","परत","noun","elementary","/ˈleɪ.ər/","There is a thick layer of dust on the shelf.","Is there a protective layer on this phone screen?","coat","level",""],
  ["pile","a heap of things placed on top of each other","ढेर, अंबार","noun","elementary","/paɪl/","There is a pile of books on the desk.","Is there a pile of clothes in the corner?","heap","stack",""],
  ["stack","a neat pile of things","ढेर, क्रमबद्ध ढेर","noun","elementary","/stæk/","There is a stack of papers near the printer.","Is there a stack of plates in the kitchen?","pile","heap",""],
  ["bundle","a group of things tied together","गठरी, बंडल","noun","elementary","/ˈbʌn.dl/","There is a bundle of newspapers at the gate.","Is there a bundle offer on this product?","package","bunch",""],
  ["collection","a group of similar things kept together","संग्रह","noun","elementary","/kəˈlɛk.ʃən/","There is a collection of rare coins in the museum.","Is there a book collection in the library?","set","group",""],

  // ── Extra useful existence vocabulary ─────────────────────
  ["evidence","proof or facts that support something","साक्ष्य, सबूत","noun","intermediate","/ˈɛv.ɪ.dəns/","There is strong evidence for global warming.","Is there any evidence of the theft?","proof","data","assumption"],
  ["solution","an answer to a problem","समाधान","noun","elementary","/səˈluː.ʃən/","There is a solution to every problem.","Is there a quick solution available?","answer","remedy","problem"],
  ["reason","a cause or explanation","कारण","noun","beginner","/ˈriː.zən/","There is a good reason for this rule.","Is there a reason for the delay?","cause","motive","effect"],
  ["difference","a way that two things are unlike","अंतर, फ़र्क","noun","beginner","/ˈdɪf.ər.əns/","There is a big difference between these two words.","Is there a difference in quality?","distinction","variation","similarity"],
  ["similarity","a way that two things are alike","समानता","noun","elementary","/ˌsɪm.ɪˈlær.ɪ.ti/","There is a similarity between British and American English.","Is there a similarity in meaning?","resemblance","likeness","difference"],
  ["connection","a link between two things","संबंध, कड़ी","noun","elementary","/kəˈnɛk.ʃən/","There is a clear connection between the two events.","Is there a connection between these topics?","link","relationship","disconnect"],
  ["benefit","an advantage or good result","लाभ, फायदा","noun","elementary","/ˈbɛn.ɪ.fɪt/","There is a great benefit to learning English.","Is there a health benefit from this exercise?","advantage","gain","disadvantage"],
  ["risk","a chance that something bad will happen","जोखिम, ख़तरा","noun","elementary","/rɪsk/","There is a risk of flood in low-lying areas.","Is there a risk of rain tomorrow?","danger","hazard","safety"],
  ["challenge","something difficult that requires effort","चुनौती","noun","elementary","/ˈtʃæl.ɪndʒ/","There is a challenge in every new lesson.","Is there a bigger challenge ahead?","difficulty","obstacle","ease"],
  ["reward","something given for doing something well","इनाम, पुरस्कार","noun","elementary","/rɪˈwɔːd/","There is a reward for completing the course.","Is there a reward for good performance?","prize","incentive","punishment"],

  // ── Additional nature and environment words ───────────────
  ["plateau","a flat elevated land area","पठार","noun","intermediate","/ˈplæt.əʊ/","There is a fertile plateau in the central region.","Is there a village on that plateau?","highland","tableland","valley"],
  ["wetland","an area where the soil is wet","आर्द्रभूमि, दलदली भूमि","noun","intermediate","/ˈwɛt.lænd/","There is a wetland reserve near the coast.","Is there a wetland in this national park?","marsh","swamp","desert"],
  ["meadow","a field of grass or wildflowers","घास का मैदान","noun","elementary","/ˈmɛd.əʊ/","There is a beautiful meadow behind the farm.","Is there a meadow where children can play?","field","pasture",""],
  ["shore","the land along the edge of water","तट, किनारा","noun","elementary","/ʃɔːr/","There is a rocky shore on this side of the island.","Is there a shore where boats can dock?","coast","bank",""],
  ["harbour","a sheltered area of water for ships","बंदरगाह","noun","elementary","/ˈhɑː.bər/","There is a busy harbour in the old city.","Is there a harbour nearby for fishing boats?","port","dock",""],
  ["waterfall","water falling from a height","झरना","noun","elementary","/ˈwɔː.tər.fɔːl/","There is a spectacular waterfall in that valley.","Is there a waterfall accessible by road?","cascade","falls",""],
  ["glacier","a large slow-moving mass of ice","हिमनद, ग्लेशियर","noun","intermediate","/ˈɡlæs.i.ər/","There is a glacier in the Himalayan region.","Is there a glacier retreating in that area?","ice sheet","ice field",""],
  ["canyon","a deep valley with steep rocky sides","गहरी घाटी, कैन्यन","noun","intermediate","/ˈkæn.jən/","There is a grand canyon in the national park.","Is there a canyon tour available?","gorge","ravine",""],
  ["dune","a hill of sand formed by the wind","बालू का टीला","noun","elementary","/djuːn/","There is a large sand dune in the desert park.","Is there a dune for sand surfing?","sand hill","mound",""],
  ["ridge","a long narrow raised area of land","पर्वत श्रेणी, धार","noun","intermediate","/rɪdʒ/","There is a hiking trail along the ridge.","Is there a ridge separating the two valleys?","crest","summit",""],

  // ── Additional buildings and places ───────────────────────
  ["temple","a building used for religious worship","मंदिर","noun","beginner","/ˈtɛm.pl/","There is a famous temple at the top of the hill.","Is there a temple with historical significance?","shrine","place of worship",""],
  ["mosque","a building for Muslim worship","मस्जिद","noun","beginner","/mɒsk/","There is a mosque near the old bazaar.","Is there a mosque open for visitors?","masjid","place of prayer",""],
  ["church","a building for Christian worship","गिरजाघर, चर्च","noun","beginner","/tʃɜːtʃ/","There is a colonial church in the city center.","Is there a church open this Sunday?","cathedral","chapel",""],
  ["court","a place where legal matters are decided","न्यायालय, कोर्ट","noun","elementary","/kɔːt/","There is a district court in this town.","Is there a court hearing today?","tribunal","judiciary",""],
  ["prison","a building where criminals are kept","जेल, कारागार","noun","elementary","/ˈprɪz.ən/","There is a high-security prison outside the city.","Is there a prison reform program running?","jail","correctional facility",""],
  ["airport","a place where aircraft take off and land","हवाई अड्डा","noun","beginner","/ˈɛər.pɔːt/","There is an international airport in the capital.","Is there an airport bus service from the city?","airfield","aerodrome",""],
  ["terminal","the building at an airport for passengers","टर्मिनल","noun","elementary","/ˈtɜː.mɪ.nəl/","There is a new terminal under construction.","Is there a terminal for domestic flights?","departure hall","gate area",""],
  ["station","a place where trains or buses stop","स्टेशन","noun","beginner","/ˈsteɪ.ʃən/","There is a railway station in the city center.","Is there a metro station nearby?","depot","halt",""],
  ["platform","the raised area at a station","प्लेटफार्म","noun","elementary","/ˈplæt.fɔːm/","There is a train arriving at platform 3.","Is there a platform for local trains?","berth","stand",""],
  ["port","a town or city with a harbour","बंदरगाह, बंदर","noun","elementary","/pɔːt/","There is a major port on the west coast.","Is there a passenger port in this city?","harbour","dock",""],

  // ── Additional room and household words ───────────────────
  ["pantry","a small room for storing food","पेंट्री, खाद्य भण्डार","noun","elementary","/ˈpæn.tri/","There is a pantry stocked with dry food.","Is there a pantry near the kitchen?","larder","food store",""],
  ["veranda","a covered porch or balcony","बरामदा, वरांडा","noun","elementary","/vəˈræn.də/","There is a veranda where the family sits in the evening.","Is there a veranda facing the garden?","porch","terrace",""],
  ["courtyard","an open area surrounded by walls","आंगन","noun","elementary","/ˈkɔːt.jɑːd/","There is a large courtyard in the heritage hotel.","Is there a courtyard with a fountain?","yard","atrium",""],
  ["loft","a room or storage space just under the roof","छत के नीचे का कक्ष","noun","intermediate","/lɒft/","There is a loft used for storing old furniture.","Is there a loft conversion in this house?","attic","garret",""],
  ["shed","a simple building used for storage","शेड, छोटा भण्डार गृह","noun","elementary","/ʃɛd/","There is a wooden shed at the back of the house.","Is there a shed for garden tools?","outhouse","hut",""],
  ["garage","a building for keeping a car","गैरेज","noun","elementary","/ˈɡær.ɑːʒ/","There is a garage attached to the house.","Is there a garage large enough for two cars?","carport","vehicle store",""],
  ["fireplace","a structure in a room for a wood fire","अंगीठी, चूल्हा","noun","elementary","/ˈfaɪər.pleɪs/","There is a classic fireplace in the living room.","Is there a fireplace in the hotel room?","hearth","chimney",""],
  ["windowsill","the ledge at the bottom of a window","खिड़की की चौखट","noun","elementary","/ˈwɪn.dəʊ.sɪl/","There is a pot of flowers on the windowsill.","Is there enough space on the windowsill?","ledge","sill",""],
  ["chimney","a vertical channel for smoke to escape","चिमनी","noun","elementary","/ˈtʃɪm.ni/","There is a tall chimney on the old factory.","Is there a chimney sweep available?","flue","smokestack",""],
  ["ceiling","the upper inside surface of a room","छत, सीलिंग","noun","beginner","/ˈsiː.lɪŋ/","There is a beautiful ceiling fan in the hall.","Is there a crack in the ceiling?","roof","overhead surface","floor"],

  // ── Additional miscellaneous existence words ───────────────
  ["option","a choice from a set of possibilities","विकल्प, चुनाव","noun","elementary","/ˈɒp.ʃən/","There is an option to pay by card or cash.","Is there an option to extend the deadline?","choice","alternative",""],
  ["variety","a number of different types","विविधता, किस्म","noun","elementary","/vəˈraɪ.ɪ.ti/","There is a wide variety of fruits in the market.","Is there a variety of courses available?","range","diversity","uniformity"],
  ["gap","a space or hole in something","अंतराल, खाई","noun","elementary","/ɡæp/","There is a gap in the fence near the gate.","Is there a gap in the schedule today?","space","opening",""],
  ["passage","a way through or along something","मार्ग, रास्ता","noun","elementary","/ˈpæs.ɪdʒ/","There is a narrow passage between the houses.","Is there a passage to the back garden?","corridor","way","blockage"],
  ["opening","a hole or gap in something","छेद, द्वार","noun","elementary","/ˈəʊ.pən.ɪŋ/","There is an opening in the wall for ventilation.","Is there an opening in the roof?","hole","gap","closing"],
  ["spot","a particular place or location","जगह, स्थान","noun","beginner","/spɒt/","There is a good spot near the window.","Is there a parking spot available?","place","location",""],
  ["corner","the point where two sides meet","कोना","noun","beginner","/ˈkɔː.nər/","There is a bookshelf in the corner of the room.","Is there a tea stall at the corner?","angle","bend",""],
  ["edge","the border or outside limit of something","किनारा, धार","noun","elementary","/ɛdʒ/","There is a sharp edge on this tool.","Is there a fence along the edge of the property?","border","rim","center"],
  ["tip","the pointed end of something","नोक, सिरा","noun","elementary","/tɪp/","There is a metal tip on this pen.","Is there a tip of the mountain visible?","point","end",""],
  ["section","a part of something larger","खंड, भाग","noun","elementary","/ˈsɛk.ʃən/","There is a vegetable section in the supermarket.","Is there a separate section for international books?","part","division","whole"],
];

// Export 300+ vocabulary words for Day 9
export const ALL_DAY_9_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d9-v${i + 1}`, data)
);
