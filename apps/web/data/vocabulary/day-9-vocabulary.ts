// ============================================================
// Day 9 Vocabulary — USE OF THERE (There is / are / was / were)
// Topic: Existence, location, environment, surroundings
// 200 unique words not used in Days 1-8
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

// 200 unique vocabulary words for Day 9 — Use of There
const WORDS: W[] = [
  // Location and place words
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

  // Existence and presence words
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

  // Nature and physical environment
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

  // Buildings and infrastructure
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

  // Transportation and roads
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

  // Market and shopping words
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

  // Social and community places
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

  // Furniture and household items
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

  // Garden and outdoor words
  ["garden","an area where plants or flowers grow","बगीचा","noun","beginner","/ˈɡɑː.dən/","There is a beautiful garden behind the house.","Is there a garden in your school?","park","yard",""],
  ["lawn","an area of short grass in a garden","लॉन, घास का मैदान","noun","elementary","/lɔːn/","There is a green lawn in front of the bungalow.","Is there a lawn for children to play?","grass","yard",""],
  ["pond","a small area of still water","तालाब","noun","beginner","/pɒnd/","There is a pond with lotuses in the park.","Are there fish in that pond?","pool","lake",""],
  ["fountain","a structure that shoots water into the air","फव्वारा","noun","elementary","/ˈfaʊn.tɪn/","There is a beautiful fountain in the center.","Is there a fountain in the garden?","waterfall","spring",""],
  ["bench","a long seat in a park or public place","बेंच","noun","beginner","/bɛntʃ/","There is a bench under every tree.","Is there a bench near the entrance?","seat","chair",""],
  ["gate","a movable barrier at an entrance","फाटक, दरवाज़ा","noun","beginner","/ɡeɪt/","There is a large iron gate at the entrance.","Is there a lock on the gate?","door","entrance",""],
  ["fence","a structure used to mark a boundary","बाड़, बाड़","noun","beginner","/fɛns/","There is a wooden fence around the garden.","Is there a fence to keep animals out?","barrier","boundary",""],
  ["pathway","a path for walking on","रास्ता, पगडंडी","noun","elementary","/ˈpɑːθ.weɪ/","There is a stone pathway through the garden.","Is there a clean pathway to the entrance?","path","walkway",""],
  ["flowerbed","an area where flowers are planted","फूलों की क्यारी","noun","elementary","/ˈflaʊ.ə.bɛd/","There is a colorful flowerbed near the main entrance.","Is there a flowerbed in your garden?","garden bed","planting area",""],
  ["greenhouse","a glass building for growing plants","ग्रीनहाउस","noun","intermediate","/ˈɡriːn.haʊs/","There is a greenhouse in the botanical garden.","Is there a greenhouse in the university?","glasshouse","hothouse",""],

  // Weather and atmosphere words
  ["atmosphere","the air around the Earth or a place","वातावरण","noun","intermediate","/ˈæt.mə.sfɪər/","There is a pleasant atmosphere in this café.","Is there a good atmosphere at the event?","environment","air",""],
  ["breeze","a gentle wind","हवा, बयार","noun","elementary","/briːz/","There is a cool breeze coming from the sea.","Is there a breeze today?","wind","gust","still air"],
  ["humidity","the amount of moisture in the air","आर्द्रता, नमी","noun","intermediate","/hjuːˈmɪd.ɪ.ti/","There is high humidity in coastal cities.","Is there a lot of humidity during monsoon?","moisture","dampness","dryness"],
  ["frost","ice crystals formed on cold surfaces","पाला, ठंड","noun","elementary","/frɒst/","There is frost on the grass in winter mornings.","Is there frost at night in December?","freeze","ice","heat"],
  ["heatwave","a long period of very hot weather","गर्मी की लहर","noun","intermediate","/ˈhiːt.weɪv/","There is a heatwave across the country this week.","Is there a heatwave warning today?","extreme heat","hot spell","cold wave"],
  ["rainfall","the amount of rain that falls","वर्षापात","noun","elementary","/ˈreɪn.fɔːl/","There is heavy rainfall in Kerala in June.","Is there enough rainfall for farming?","precipitation","rain","drought"],
  ["storm","violent weather with wind and rain","तूफान","noun","beginner","/stɔːm/","There is a storm approaching from the coast.","Is there a storm warning for tonight?","hurricane","tempest","calm"],
  ["lightning","a flash of light in the sky during a storm","बिजली, आकाशीय विद्युत","noun","elementary","/ˈlaɪt.nɪŋ/","There is lightning in the dark sky.","Is there lightning protection on this building?","thunder bolt","flash",""],
  ["thunder","the loud sound during a storm","गड़गड़ाहट, बादलों का शोर","noun","elementary","/ˈθʌn.dər/","There is loud thunder outside.","Is there thunder without lightning?","boom","rumble","silence"],
  ["drizzle","light rain falling in fine drops","हल्की बारिश, फुहार","noun","elementary","/ˈdrɪz.əl/","There is a slight drizzle this morning.","Is there a drizzle expected today?","light rain","shower","downpour"],

  // Food and kitchen words
  ["ingredient","a food item used in cooking","सामग्री","noun","elementary","/ɪnˈɡriː.di.ənt/","There is a list of ingredients on the packet.","Are there fresh ingredients in the kitchen?","component","element",""],
  ["recipe","instructions for preparing a dish","नुस्ख़ा, रेसिपी","noun","beginner","/ˈrɛs.ɪ.pi/","There is a recipe book on the shelf.","Is there a recipe for this dish online?","formula","method",""],
  ["cuisine","a style or method of cooking","व्यंजन शैली","noun","intermediate","/kwɪˈziːn/","There is a wide variety of Indian cuisine.","Is there a restaurant with Italian cuisine?","cookery","food style",""],
  ["portion","an amount of food for one person","हिस्सा, भाग","noun","elementary","/ˈpɔːʃ.ən/","There is a large portion of rice on the plate.","Is there an extra portion available?","serving","helping",""],
  ["flavor","the taste of food or drink","स्वाद, जायका","noun","beginner","/ˈfleɪ.vər/","There is a strong flavor of spices in this dish.","Is there a sweet flavor in this dessert?","taste","zest","blandness"],
  ["seasoning","salt, pepper, or spices added to food","मसाला, नमक-मिर्च","noun","intermediate","/ˈsiː.zən.ɪŋ/","There is too much seasoning in this soup.","Is there seasoning in this salad?","spice","flavoring",""],
  ["nutrition","the process of getting healthy food","पोषण","noun","intermediate","/njuːˈtrɪʃ.ən/","There is great nutrition in green vegetables.","Is there enough nutrition in this meal?","nourishment","diet",""],
  ["appetite","a desire for food","भूख, रुचि","noun","intermediate","/ˈæp.ɪ.taɪt/","There is a good appetite after exercise.","Is there a loss of appetite in the patient?","hunger","craving","fullness"],
  ["beverage","a drink","पेय पदार्थ","noun","intermediate","/ˈbɛv.ər.ɪdʒ/","There is a choice of beverages at the counter.","Is there a hot beverage available?","drink","liquid",""],
  ["cuisine","style of cooking in a particular place","पाकशैली","noun","intermediate","/kwɪˈziːn/","There is delicious cuisine in South India.","Is there local cuisine at the festival?","cooking","food culture",""],

  // Sports and games
  ["championship","a competition to find the best","चैंपियनशिप","noun","elementary","/ˈtʃæm.pi.ən.ʃɪp/","There is a cricket championship next month.","Is there a national championship for badminton?","tournament","contest",""],
  ["tournament","a series of competitions","टूर्नामेंट","noun","elementary","/ˈtɔː.nə.mənt/","There is a chess tournament at school.","Is there a football tournament this summer?","championship","competition",""],
  ["trophy","a prize for winning a competition","ट्रॉफी","noun","elementary","/ˈtrəʊ.fi/","There is a golden trophy for the winner.","Is there a trophy for the debate competition?","prize","award",""],
  ["referee","someone who makes sure rules are followed","रेफरी","noun","elementary","/ˌrɛf.əˈriː/","There is a referee for every match.","Is there a fair referee in this game?","umpire","judge",""],
  ["stadium","a large ground for sports events","स्टेडियम","noun","elementary","/ˈsteɪ.di.əm/","There is a packed stadium today.","Is there a stadium in your city?","arena","ground",""],
  ["spectator","someone who watches a game or event","दर्शक","noun","intermediate","/spɛkˈteɪ.tər/","There are thousands of spectators at the match.","Is there a good view for spectators?","viewer","audience","participant"],
  ["venue","the place where an event happens","स्थल, आयोजन स्थल","noun","elementary","/ˈvɛn.juː/","There is a wonderful venue for the concert.","Is there parking at the venue?","location","site",""],
  ["practice","repeated activity to improve skill","अभ्यास","noun","beginner","/ˈpræk.tɪs/","There is a football practice session tomorrow.","Is there a practice area in the club?","training","exercise","laziness"],
  ["coach","a person who trains athletes","प्रशिक्षक","noun","elementary","/kəʊtʃ/","There is a new coach for the basketball team.","Is there a coach for swimming?","trainer","instructor",""],
  ["equipment","tools or gear used for an activity","उपकरण, सामग्री","noun","elementary","/ɪˈkwɪp.mənt/","There is all the necessary equipment in the gym.","Is there enough equipment for the team?","gear","tools",""],

  // Office and workplace
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

  // Extra useful vocabulary
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
];

// Export 200 vocabulary words for Day 9
export const ALL_DAY_9_VOCABULARY: VocabularyWord[] = WORDS.map((data, i) =>
  w(`d9-v${i + 1}`, data)
);
