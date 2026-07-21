"use client";
// ============================================================
// Lesson Content - The main theory/learning section for a subtopic
// Shows: why learn, concept, rules, examples, mistakes, tips,
// memory tricks, professional usage, stories, dialogues, essays
// Dynamically loads content from day-specific content files
// ============================================================

import { useState, useMemo } from "react";
// Import animation library for smooth transitions
import { motion, AnimatePresence } from "framer-motion";
// Import icons from lucide-react for visual elements
import {
  AlertTriangle, BookOpen, Brain, CheckCircle2, ChevronDown,
  Lightbulb, MessageSquare, Star, Volume2, Zap, Briefcase,
  Home, GraduationCap, Sparkles, BookMarked, Users,
} from "lucide-react";
// Import utility for conditional class names
import { cn } from "@/lib/utils";
// Import content types and data loader from Day 1 content
import type { LessonContent as LessonContentType } from "@/data/course-content/day-1-content";
// Import the content retrieval function
import { getDay1LessonContent } from "@/data/course-content/day-1-content";

// ─── Props for this component ─────────────────────────────────
interface LessonContentProps {
  // The day number (1-75)
  dayNumber: number;
  // The topic ID (e.g., "d1-t1")
  topicId: string;
  // The subtopic ID (e.g., "d1-t1-s1")
  subtopicId: string;
  // The subtopic title for display
  subtopicTitle: string;
  // The topic's brand color
  topicColor: string;
  // Callback when user completes the lesson
  onComplete: () => void;
}

// ─── Section Types ───────────────────────────────────────────
// All the sections available in the lesson view
type Section =
  | "why"          // Why are we learning this topic
  | "concept"      // Full concept explanation
  | "rules"        // Grammar rules and structure
  | "examples"     // Sentence patterns and real examples
  | "mistakes"     // Common mistakes students make
  | "tips"         // Speaking tips and memory tricks
  | "professional" // Professional, office, interview usage
  | "story"        // Story using learned concepts
  | "dialogue"     // Dialogue between two people
  | "summary";     // Summary of everything learned

// ─── Section configuration ────────────────────────────────────
// Each section has an icon, label, and color for the tab button
const SECTIONS = [
  { key: "why" as Section, icon: Lightbulb, label: "Why Learn?", color: "text-amber-500", bg: "bg-amber-500/10" },
  { key: "concept" as Section, icon: Brain, label: "Concept", color: "text-purple-500", bg: "bg-purple-500/10" },
  { key: "rules" as Section, icon: BookOpen, label: "Rules", color: "text-blue-500", bg: "bg-blue-500/10" },
  { key: "examples" as Section, icon: MessageSquare, label: "Examples", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { key: "mistakes" as Section, icon: AlertTriangle, label: "Mistakes", color: "text-rose-500", bg: "bg-rose-500/10" },
  { key: "tips" as Section, icon: Star, label: "Tips", color: "text-gold-500", bg: "bg-gold-400/10" },
  { key: "professional" as Section, icon: Briefcase, label: "Pro Use", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { key: "story" as Section, icon: BookMarked, label: "Story", color: "text-pink-500", bg: "bg-pink-500/10" },
  { key: "dialogue" as Section, icon: Users, label: "Dialogue", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { key: "summary" as Section, icon: GraduationCap, label: "Summary", color: "text-teal-500", bg: "bg-teal-500/10" },
];

// ============================================================
// Content Generators for Days 2-75
// These generate rich lesson content for any subtopic/day
// Real Day 1 content comes from day-1-content.ts
// ============================================================

// Generate rich content for Day 2 (Self Introduction) subtopics
function generateDay2Content(
  subtopicId: string,
  subtopicTitle: string
): LessonContentType | null {
  // Map of subtopic IDs to their specific content
  // Returns a full LessonContent object tailored to Self Introduction
  const day2ContentMap: Record<string, Partial<LessonContentType>> = {
    // Subtopic: The Power of First Impressions
    "d2-t1-s1": {
      whyLearnThis: `First impressions are formed in just 7 seconds! When you meet someone for the first time — whether in an interview, at a party, in a meeting, or online — the way you introduce yourself determines how they will see you FOREVER.\n\nIn English, a strong introduction shows:\n• You are confident\n• You are professional\n• You can communicate clearly\n• You respect others\n\nThis skill is used EVERY DAY of your life. Mastering it will open doors in your career, social life, and relationships.`,
      conceptExplanation: `A first impression includes THREE things:\n\n1. WORDS — What you say (your introduction)\n2. TONE — How you say it (confident, warm, clear)\n3. BODY LANGUAGE — How you look (eye contact, smile, posture)\n\nIn English, a good first impression starts with:\n• A greeting: "Hello!", "Hi!", "Good morning!"\n• Your name: "My name is..." or "I am..."\n• Something about yourself: your role, where you're from, why you're here\n\nExample:\n"Hello! I am Rahul Sharma. I am a software engineer from Bangalore. Nice to meet you!"`,
      rules: [
        { rule: "Always start with a greeting", explanation: "Never skip the greeting. 'Hello', 'Hi', or 'Good morning/afternoon' sets a positive tone.", example: "Hello! My name is Priya." },
        { rule: "State your name clearly", explanation: "Speak slowly and clearly when saying your name so people remember it.", example: "My name is Arjun. Arjun Patel." },
        { rule: "Add context", explanation: "Tell people one relevant fact about yourself — your job, city, or why you're meeting.", example: "I am from Mumbai. I work at TCS." },
        { rule: "End with a social phrase", explanation: "Always end with 'Nice to meet you' or 'Pleased to meet you' to be polite.", example: "Nice to meet you!" },
      ],
      commonMistakes: [
        { wrong: "I am Rahul from IT.", correct: "My name is Rahul and I work in IT.", explanation: "Always include your full name and use complete sentences." },
        { wrong: "Nice meeting you. (said right after meeting)", correct: "Nice to meet you.", explanation: "Use 'Nice to meet you' when meeting for the FIRST time. 'Nice meeting you' is used when saying GOODBYE." },
        { wrong: "I am doing the engineer.", correct: "I am an engineer.", explanation: "Do not use 'doing the' before job titles. Say 'I am a/an + job title'." },
      ],
      speakingTips: [
        "Practice your name pronunciation clearly — say it slowly the first time",
        "Maintain eye contact while introducing yourself — it shows confidence",
        "Smile when you greet — it makes you seem approachable and friendly",
        "Speak at a medium pace — not too fast, not too slow",
        "Use your hands naturally — don't fold them or hide them",
      ],
      memoryTricks: [
        "Remember: GHNA formula — Greeting + Hello + Name + About yourself",
        "Think of introducing yourself like a MOVIE TRAILER — short, interesting, memorable",
        "'Nice to MEET you' (first time) vs 'Nice MEETING you' (saying goodbye)",
      ],
      summary: [
        "First impressions happen in 7 seconds — make them count",
        "Always start with a greeting before your name",
        "State your name clearly and add one relevant fact",
        "End with 'Nice to meet you' to be polite",
        "Confidence + Smile + Eye contact = Great first impression",
      ],
    },
  };

  // Get specific content for this subtopic ID if available
  const specificContent = day2ContentMap[subtopicId];

  // Build full content object with defaults for missing fields
  return {
    id: `day2-${subtopicId}`,
    subtopicId,
    whyLearnThis: specificContent?.whyLearnThis ?? `Learning "${subtopicTitle}" is essential for Day 2 of your 75-day English journey. Self Introduction is one of the most used English skills in daily life — from job interviews to meeting new friends, from office meetings to social gatherings. Mastering this topic will give you immediate confidence to communicate in English.`,
    conceptExplanation: specificContent?.conceptExplanation ?? `"${subtopicTitle}" is a fundamental part of introducing yourself in English. This skill is used multiple times every day by professionals, students, and everyday people. Understanding how to use this correctly will make your English sound natural and confident.\n\nKey points:\n• Use clear, simple sentences\n• Speak at a comfortable pace\n• Be specific — give details, not vague statements\n• Practice until it feels natural`,
    simpleExplanation: `Think of it like this: when you meet someone new, you want them to remember you. The best way is to say who you are, what you do, and one interesting thing about yourself. That is all! Keep it simple, clear, and friendly.`,
    hindiExplanation: `"${subtopicTitle}" मतलब है खुद को अंग्रेजी में सही तरीके से पेश करना। यह skill रोज काम आती है — interview में, office में, नए लोगों से मिलने पर। इसे सीखने के बाद आप किसी से भी English में confidently बात कर पाएंगे। याद रखें: practice से ही fluency आती है!`,
    rules: specificContent?.rules ?? [
      { rule: "Use 'My name is...' or 'I am...'", explanation: "Both are correct. 'My name is' is slightly more formal.", example: "My name is Anjali. / I am Anjali." },
      { rule: "Keep your introduction brief", explanation: "A good introduction is 3-5 sentences. Don't make it too long.", example: "Hi! I am Vikram. I am from Pune. I work as a teacher." },
      { rule: "Use present tense for current facts", explanation: "Talk about what you do NOW using simple present tense.", example: "I live in Delhi. I work at Infosys." },
    ],
    commonMistakes: specificContent?.commonMistakes ?? [
      { wrong: "I am from the India.", correct: "I am from India.", explanation: "Do not use 'the' before country names (India, USA, France)." },
      { wrong: "My self is Raj.", correct: "My name is Raj. / I am Raj.", explanation: "'My self is' is incorrect. Use 'My name is' or 'I am'." },
      { wrong: "I am doing job in IT.", correct: "I work in IT. / I am an IT professional.", explanation: "Don't say 'doing job'. Say 'I work in...' or 'I am a/an...'." },
    ],
    sentencePatterns: [
      {
        pattern: "Greeting + Name + Origin",
        hindiPattern: "अभिवादन + नाम + स्थान",
        examples: [
          { english: "Hello! My name is Priya and I am from Chennai.", hindi: "नमस्ते! मेरा नाम प्रिया है और मैं चेन्नई से हूँ।" },
          { english: "Hi! I am Rohan and I am from Jaipur.", hindi: "हाय! मैं रोहन हूँ और मैं जयपुर से हूँ।" },
          { english: "Good morning! I am Sunita from Kolkata.", hindi: "शुभ प्रभात! मैं कोलकाता की सुनीता हूँ।" },
        ],
      },
    ],
    speakingTips: specificContent?.speakingTips ?? [
      "Practice your introduction in front of a mirror every morning",
      "Record yourself and listen back — you will notice areas to improve",
      "Start slow and build speed as you get more confident",
      "Focus on pronunciation of YOUR NAME — people need to hear it clearly",
      "Always end with 'Nice to meet you' — it shows good manners",
    ],
    memoryTricks: specificContent?.memoryTricks ?? [
      "Use the PINE formula: Profession + Introduction + Name + Extra detail",
      "Think of your introduction as a tweet — keep it short and impactful",
      "Practice 3 versions: 30 seconds (elevator), 1 minute (meeting), 2 minutes (interview)",
    ],
    professionalUsage: [
      { situation: "Job Interview", english: "Good morning! I am Rahul Verma. I have 5 years of experience in software development at Wipro.", hindi: "शुभ प्रभात! मैं राहुल वर्मा हूँ। मुझे विप्रो में सॉफ्टवेयर डेवलपमेंट का 5 साल का अनुभव है।" },
      { situation: "Business Meeting", english: "Hello everyone! I am Neha Singh, the project manager for this initiative.", hindi: "नमस्ते सभी! मैं नेहा सिंह हूँ, इस प्रोजेक्ट की प्रोजेक्ट मैनेजर।" },
      { situation: "Conference", english: "Good afternoon! My name is Dr. Amit Shah. I specialize in data science and machine learning.", hindi: "शुभ अपराह्न! मेरा नाम डॉ. अमित शाह है। मैं डेटा साइंस और मशीन लर्निंग में विशेषज्ञ हूँ।" },
    ],
    dailyUsage: [
      { situation: "Meeting a new neighbor", english: "Hi! I am Kavya. I just moved in next door. Nice to meet you!", hindi: "हाय! मैं काव्या हूँ। मैं अभी बगल में रहने आई हूँ। आपसे मिलकर खुशी हुई!" },
      { situation: "Joining a new class", english: "Hello everyone! My name is Sanjay and I am new here. I hope we can be friends!", hindi: "नमस्ते सभी! मेरा नाम संजय है और मैं यहाँ नया हूँ। मुझे उम्मीद है हम दोस्त बन सकते हैं!" },
    ],
    officeUsage: [
      { situation: "First day at work", english: "Good morning team! I am Divya Krishnan, your new marketing executive. I am excited to work with all of you!", hindi: "शुभ प्रभात टीम! मैं दिव्या कृष्णन हूँ, आपकी नई मार्केटिंग एक्जीक्यूटिव। मैं आप सभी के साथ काम करने के लिए उत्साहित हूँ!" },
    ],
    interviewUsage: [
      { situation: "Classic 'Tell me about yourself'", english: "My name is Arun Kumar. I am a mechanical engineer with 3 years of experience. I am passionate about innovation and problem-solving. I am currently looking for growth opportunities in the manufacturing sector.", hindi: "मेरा नाम अरुण कुमार है। मैं 3 साल के अनुभव के साथ एक मैकेनिकल इंजीनियर हूँ।" },
    ],
    story: {
      title: "Ravi's Big Day",
      paragraphs: [
        "Ravi was nervous. It was his first day at a new company in Mumbai. He did not know anyone.",
        "When he walked into the office, everyone looked at him. His manager said, 'Please introduce yourself to the team.'",
        "Ravi took a deep breath. He smiled and said, 'Good morning everyone! My name is Ravi Shankar. I am from Hyderabad. I have 2 years of experience in web development. I am very happy to join this wonderful team. I hope we can work well together!'",
        "Everyone clapped. A colleague named Priya came to him and said, 'Great introduction, Ravi! Nice to meet you!'",
        "Ravi smiled. His first impression was perfect. That day, he made five new friends.",
      ],
      moral: "A confident and clear introduction can open many doors. Practice it until it feels natural!",
      keyWords: [
        { word: "introduction", meaning: "presenting yourself to others" },
        { word: "nervous", meaning: "feeling worried or anxious" },
        { word: "confident", meaning: "feeling sure of yourself" },
        { word: "impression", meaning: "the feeling someone gets about you" },
      ],
    },
    essay: {
      title: "Why Self Introduction is Important in English",
      paragraphs: [
        "Self introduction is one of the most basic and important skills in English communication. Every day, we meet new people — at work, in college, at events, and online.",
        "A good self introduction tells others who you are, where you are from, what you do, and why you are there. It should be clear, confident, and friendly.",
        "In professional settings like job interviews, a strong introduction can be the difference between getting hired and being rejected. Interviewers form opinions in the first 30 seconds.",
        "The key to a great self introduction is practice. Prepare 2-3 versions of your introduction for different situations — formal, semi-formal, and casual.",
      ],
      keyPoints: [
        "Self introduction = Name + Background + Purpose + Friendly close",
        "Practice makes perfect — rehearse daily",
        "Adapt your introduction to the situation (formal vs casual)",
        "Always end with a polite phrase like 'Nice to meet you'",
      ],
    },
    dialogue: {
      title: "Two People Meeting at a Conference",
      setting: "A professional conference in Delhi. Two professionals meet for the first time.",
      lines: [
        { speaker: "Amit", text: "Hello! I don't think we've met. I am Amit Gupta.", hindi: "नमस्ते! मुझे नहीं लगता हम मिले हैं। मैं अमित गुप्ता हूँ।" },
        { speaker: "Neha", text: "Hi Amit! I am Neha Sharma. Nice to meet you!", hindi: "हाय अमित! मैं नेहा शर्मा हूँ। आपसे मिलकर खुशी हुई!" },
        { speaker: "Amit", text: "Nice to meet you too, Neha! Are you from Delhi?", hindi: "मुझे भी खुशी हुई, नेहा! क्या आप दिल्ली से हैं?" },
        { speaker: "Neha", text: "No, I am from Jaipur. I work as a digital marketing manager. What about you?", hindi: "नहीं, मैं जयपुर से हूँ। मैं डिजिटल मार्केटिंग मैनेजर के रूप में काम करती हूँ। आप?" },
        { speaker: "Amit", text: "I am a software engineer from Bangalore. I am here to learn about the latest trends in AI.", hindi: "मैं बेंगलुरु से एक सॉफ्टवेयर इंजीनियर हूँ। मैं AI के नवीनतम रुझानों के बारे में जानने यहाँ आया हूँ।" },
        { speaker: "Neha", text: "That's great! AI and marketing are becoming so connected these days.", hindi: "बहुत अच्छा! AI और मार्केटिंग आजकल बहुत जुड़े हुए हो रहे हैं।" },
      ],
      notes: [
        "Use 'Nice to meet you' the FIRST time you meet someone",
        "Ask follow-up questions to show interest",
        "Share something relevant about yourself, not just your name",
        "In professional settings, mention your job/role",
      ],
    },
    summary: specificContent?.summary ?? [
      `"${subtopicTitle}" is a key skill for English communication`,
      "Practice your introduction until it feels natural and confident",
      "Adapt your introduction for different situations (formal, casual, professional)",
      "Always include: Greeting + Name + Background + Friendly close",
      "End every introduction with 'Nice to meet you' or 'Pleased to meet you'",
    ],
  };
}

// ─── Generic Content Generator for Days 3-75 ─────────────────
// Creates rich lesson content for any day/subtopic combination
// Used as a fallback until specific content files are created
function generateGenericContent(
  subtopicId: string,
  subtopicTitle: string,
  dayNumber: number
): LessonContentType | null {
  // Get the day title from the days config data
  const DAY_TITLES: Record<number, string> = {
    3: "Imperative Sentence", 4: "Be Verb", 5: "Demonstrative Pronoun",
    6: "Has / Have", 7: "Had", 8: "Will Have", 9: "Use of There",
    10: "Revision + Practice", 11: "Use of Want", 12: "Use of Wanted",
    13: "Use of Let", 14: "Use of Let's", 15: "Would Like To",
    16: "Can", 17: "Should", 18: "May", 19: "Must", 20: "Revision",
    21: "Used To", 22: "Could", 23: "Should Have", 24: "Must Have",
    25: "Could Have", 26: "Would Have", 27: "May Have", 28: "Might Have",
    29: "Will / Shall", 30: "Would + Ought To + Dare",
  };
  const dayTitle = DAY_TITLES[dayNumber] || subtopicTitle;

  // Build comprehensive content for any topic
  return {
    id: `day${dayNumber}-${subtopicId}`,
    subtopicId,
    // Motivational opening about why this topic matters
    whyLearnThis: `"${subtopicTitle}" is an essential part of Day ${dayNumber} of your 75-day English journey.\n\nUnderstanding "${dayTitle}" will help you:\n• Speak more naturally in conversations\n• Write correct English sentences\n• Build confidence in professional settings\n• Pass grammar tests and interviews\n• Communicate clearly with native speakers\n\nThis topic comes up EVERY DAY in real English communication. Master it today and you will use it for life!`,
    // Full teacher-style explanation of the concept
    conceptExplanation: `Let's learn "${subtopicTitle}" step by step.\n\nIn English, this concept is used to express specific ideas clearly. Think of it as a tool in your English toolkit — once you understand it, you will notice it everywhere: in books, movies, conversations, and emails.\n\nKey concepts:\n\n1. WHAT it is: The grammatical structure of "${subtopicTitle}"\n2. WHEN to use it: The situations where this applies\n3. HOW to form it: The exact pattern with subject, verb, and objects\n4. WHY it matters: Real-world examples from daily life\n\nLet's go through each concept with clear examples in both English and Hindi so you understand everything perfectly.`,
    // Simplified explanation for beginners
    simpleExplanation: `Think of "${subtopicTitle}" like this:\n\nJust like in Hindi we have specific ways to say things, English has its own patterns. "${subtopicTitle}" is the English way to express this idea. \n\nThe simple formula is:\nSubject + ${dayTitle} + Rest of sentence\n\nExample:\nHindi: मैं पढ़ना चाहता हूँ।\nEnglish: I want to read.\n\nOnce you see the pattern, it becomes easy!`,
    // Hindi explanation for Indian learners
    hindiExplanation: `"${subtopicTitle}" का मतलब है अंग्रेजी में एक खास तरीके से बात करना।\n\nयह structure use होता है जब आप "${dayTitle}" के बारे में बात करना चाहते हैं।\n\nमहत्वपूर्ण बात: ${dayTitle} को हिंदी में इस तरह समझें:\n• यह तब use होता है जब...\n• Formula है: Subject + ${dayTitle} + Object\n• Example: I ${dayTitle.toLowerCase()} reading. (मैं पढ़ ${dayTitle.toLowerCase()} करता हूँ।)\n\nयाद रखें: रोज practice करो और जल्दी याद हो जाएगा!`,
    // Grammar rules
    rules: [
      {
        rule: `Basic structure of ${subtopicTitle}`,
        explanation: `The fundamental pattern for using "${subtopicTitle}" correctly in English sentences.`,
        example: `Subject + ${dayTitle} + Object/Complement`,
        exception: "Some irregular forms exist — these are covered in the examples below",
      },
      {
        rule: "Use with different subjects",
        explanation: "The structure changes slightly depending on whether we use I/You/We/They or He/She/It.",
        example: "I/You/We/They + verb (base form) | He/She/It + verb + s/es",
      },
      {
        rule: "Negative form",
        explanation: "To make a negative sentence, add 'not' or 'don't/doesn't/didn't' before the main verb.",
        example: "I do not want to go. / She does not like it. / They did not come.",
      },
      {
        rule: "Question form",
        explanation: "To make a question, move the auxiliary verb to the front of the sentence.",
        example: "Do you want to go? / Does she like it? / Did they come?",
      },
    ],
    // Common mistakes learners make
    commonMistakes: [
      {
        wrong: "He don't know the answer.",
        correct: "He doesn't know the answer.",
        explanation: "With He/She/It, always use 'doesn't' (not 'don't') in present tense.",
      },
      {
        wrong: "She is knowing him.",
        correct: "She knows him.",
        explanation: "State verbs like 'know', 'like', 'love', 'hate' are NOT used in continuous (-ing) form.",
      },
      {
        wrong: "I am having a car.",
        correct: "I have a car.",
        explanation: "When 'have' shows possession (ownership), don't use -ing form. Only use 'having' for experiences like 'I am having lunch'.",
      },
      {
        wrong: "Did you went there?",
        correct: "Did you go there?",
        explanation: "After 'did', always use the BASE form of the verb (go, not went).",
      },
    ],
    // Sentence patterns with examples
    sentencePatterns: [
      {
        pattern: "Positive sentence",
        hindiPattern: "सकारात्मक वाक्य",
        examples: [
          { english: `I understand ${subtopicTitle} now.`, hindi: `मैं अब ${subtopicTitle} समझता/समझती हूँ।` },
          { english: `She practices English every day.`, hindi: `वह हर दिन अंग्रेजी का अभ्यास करती है।` },
          { english: `They speak English fluently.`, hindi: `वे धाराप्रवाह अंग्रेजी बोलते हैं।` },
          { english: `We learn something new every day.`, hindi: `हम हर दिन कुछ नया सीखते हैं।` },
          { english: `He works hard to improve his English.`, hindi: `वह अपनी अंग्रेजी सुधारने के लिए कड़ी मेहनत करता है।` },
        ],
      },
      {
        pattern: "Negative sentence",
        hindiPattern: "नकारात्मक वाक्य",
        examples: [
          { english: `I don't understand this yet, but I will.`, hindi: `मैं अभी यह नहीं समझता, लेकिन समझूंगा।` },
          { english: `She doesn't make this mistake anymore.`, hindi: `वह अब यह गलती नहीं करती।` },
          { english: `They don't speak Hindi at the office.`, hindi: `वे ऑफिस में हिंदी नहीं बोलते।` },
        ],
      },
      {
        pattern: "Question sentence",
        hindiPattern: "प्रश्नवाचक वाक्य",
        examples: [
          { english: `Do you understand this concept?`, hindi: `क्या आप यह concept समझते हैं?` },
          { english: `Does she practice every day?`, hindi: `क्या वह हर दिन अभ्यास करती है?` },
          { english: `How often do you speak English?`, hindi: `आप कितनी बार अंग्रेजी बोलते हैं?` },
        ],
      },
    ],
    // Speaking tips
    speakingTips: [
      `Practice "${subtopicTitle}" sentences out loud 5 times every morning`,
      "Record yourself speaking and listen back to improve pronunciation",
      "Use this pattern in real conversations today — even just one sentence",
      "Write 5 original sentences using this pattern and read them aloud",
      "Find this pattern in English songs, movies, or videos you watch",
    ],
    // Memory tricks
    memoryTricks: [
      `Remember the pattern: SUBJECT + ${dayTitle.toUpperCase()} + OBJECT`,
      `Associate "${subtopicTitle}" with a real-life situation you face every day`,
      "Create a song or rhyme using the pattern — music helps memory",
      "Write the pattern on a sticky note and put it where you study",
    ],
    // Professional usage
    professionalUsage: [
      { situation: "Email writing", english: `I would like to discuss the ${subtopicTitle} guidelines in our next meeting.`, hindi: `मैं अगली मीटिंग में ${subtopicTitle} दिशानिर्देशों पर चर्चा करना चाहूंगा।` },
      { situation: "Meeting", english: `Can you please explain how ${subtopicTitle} applies to our project?`, hindi: `क्या आप कृपया बता सकते हैं कि ${subtopicTitle} हमारे project पर कैसे लागू होता है?` },
      { situation: "Presentation", english: `Today I will present three examples of ${subtopicTitle} in our industry.`, hindi: `आज मैं हमारे उद्योग में ${subtopicTitle} के तीन उदाहरण प्रस्तुत करूंगा।` },
    ],
    // Daily life usage
    dailyUsage: [
      { situation: "With friends", english: `Do you want to practice English together using ${subtopicTitle}?`, hindi: `क्या तुम ${subtopicTitle} का उपयोग करके मेरे साथ अंग्रेजी का अभ्यास करना चाहते हो?` },
      { situation: "At home", english: `I am practicing ${subtopicTitle} sentences every day to improve my English.`, hindi: `मैं अपनी अंग्रेजी सुधारने के लिए हर दिन ${subtopicTitle} वाक्यों का अभ्यास कर रहा/रही हूँ।` },
      { situation: "Shopping", english: `Could you please show me the English menu? I am learning ${subtopicTitle}.`, hindi: `क्या आप कृपया मुझे अंग्रेजी मेनू दिखा सकते हैं? मैं ${subtopicTitle} सीख रहा/रही हूँ।` },
    ],
    // Office usage
    officeUsage: [
      { situation: "Team briefing", english: `Good morning everyone! Today we will focus on ${subtopicTitle} to improve our communication.`, hindi: `शुभ प्रभात सभी! आज हम अपने communication को बेहतर बनाने के लिए ${subtopicTitle} पर ध्यान देंगे।` },
      { situation: "Report writing", english: `The report clearly demonstrates the importance of ${subtopicTitle} in our workflow.`, hindi: `रिपोर्ट हमारे कार्यप्रवाह में ${subtopicTitle} के महत्व को स्पष्ट रूप से दर्शाती है।` },
    ],
    // Interview usage
    interviewUsage: [
      { situation: "Interview question about communication", english: `I always make sure to use correct grammar, including ${subtopicTitle}, when communicating with clients and colleagues.`, hindi: `मैं हमेशा सुनिश्चित करता/करती हूँ कि clients और colleagues के साथ communicate करते समय ${subtopicTitle} सहित सही grammar का उपयोग करूं।` },
    ],
    // Short story
    story: {
      title: `Riya Learns ${subtopicTitle}`,
      paragraphs: [
        `Riya was a young woman from a small town in India. She dreamed of working for a big company in a major city. But there was one problem — her English was not confident.`,
        `One day, her teacher introduced her to the concept of "${subtopicTitle}". At first, it seemed difficult. But her teacher explained it with simple Hindi examples, and suddenly it made sense!`,
        `Riya practiced "${subtopicTitle}" sentences every morning for 30 minutes. She wrote 10 sentences, spoke them aloud, and recorded herself. Within a week, she was using this structure naturally.`,
        `Three months later, Riya went for a job interview at a top company. When the interviewer spoke to her in English, she answered confidently using everything she had learned — including "${subtopicTitle}".`,
        `She got the job. When her friends asked her secret, she smiled: "Learn one thing at a time. Master it completely. Then move on."`,
      ],
      moral: `Master one concept at a time and practice it every day. Small steps lead to great destinations!`,
      keyWords: [
        { word: subtopicTitle.split(" ")[0], meaning: `The main concept of today's lesson` },
        { word: "confident", meaning: "sure of yourself and your abilities" },
        { word: "practice", meaning: "to do something repeatedly to get better" },
        { word: "master", meaning: "to become an expert at something" },
      ],
    },
    // Essay
    essay: {
      title: `The Importance of ${subtopicTitle} in English Communication`,
      paragraphs: [
        `English is the global language of communication, and mastering its grammar is essential for success. Among the many grammatical structures, "${subtopicTitle}" holds special importance.`,
        `"${subtopicTitle}" is used in countless daily situations — from sending emails to attending meetings, from casual conversations to formal presentations. Understanding this structure allows speakers to express their thoughts clearly and precisely.`,
        `For Indian learners of English, "${subtopicTitle}" can initially seem challenging because it may not have a direct equivalent in Hindi or regional languages. However, with practice and proper understanding, it becomes a natural part of speech.`,
        `The key to mastering "${subtopicTitle}" is consistent practice. Write five sentences using this structure every day, speak them aloud, and try to use them in real conversations. Within weeks, it will become automatic.`,
      ],
      keyPoints: [
        `"${subtopicTitle}" is essential for clear English communication`,
        "Used in both formal and informal settings daily",
        "Practice 5 original sentences every day",
        "Look for this pattern in English media — movies, books, songs",
        "Teaching others is the fastest way to master a concept",
      ],
    },
    // Dialogue
    dialogue: {
      title: `Learning ${subtopicTitle} Together`,
      setting: "Two students, Aryan and Pooja, are studying English together at a library.",
      lines: [
        { speaker: "Aryan", text: `Hey Pooja! I am really confused about "${subtopicTitle}". Can you help me?`, hindi: `हे पूजा! मैं "${subtopicTitle}" के बारे में बहुत confused हूँ। क्या तुम मेरी help कर सकती हो?` },
        { speaker: "Pooja", text: `Of course! It is actually quite simple once you understand the pattern.`, hindi: `बिल्कुल! एक बार pattern समझने के बाद यह काफी simple है।` },
        { speaker: "Aryan", text: `Really? Can you give me an example?`, hindi: `सच में? क्या तुम मुझे एक example दे सकती हो?` },
        { speaker: "Pooja", text: `Sure! Let's start with something you do every day. Do you study English every day?`, hindi: `ज़रूर! चलो किसी ऐसी चीज़ से शुरू करते हैं जो तुम रोज करते हो। क्या तुम रोज अंग्रेजी पढ़ते हो?` },
        { speaker: "Aryan", text: `Yes, I study English every day now! I understand the pattern!`, hindi: `हाँ, मैं अब रोज अंग्रेजी पढ़ता हूँ! मैं pattern समझ गया!` },
        { speaker: "Pooja", text: `Perfect! That is exactly how "${subtopicTitle}" works. You are getting it!`, hindi: `बिल्कुल सही! यही है "${subtopicTitle}" का काम करने का तरीका। तुम समझ रहे हो!` },
      ],
      notes: [
        "Studying with a partner makes learning faster and more fun",
        "Use real examples from YOUR life to practice new grammar",
        `"${subtopicTitle}" becomes natural with daily practice`,
        "Don't be afraid to make mistakes — that's how you learn",
      ],
    },
    // Summary
    summary: [
      `"${subtopicTitle}" is a key English grammar structure used in daily communication`,
      "The basic pattern: Subject + Verb (correct form) + Object/Complement",
      "Practice 5-10 sentences every day using this structure",
      "Use it in real conversations, emails, and writing immediately",
      `Day ${dayNumber} complete! You are one step closer to fluent English!`,
    ],
  };
}

// ─── Day 1 Topic-Specific Content Generator ──────────────────
// Provides rich, specific content for ALL Day 1 subtopics
// Covers Topics 2-5: Alphabet, Parts of Speech, Sentence Structure, Punctuation
function generateDay1TopicContent(
  subtopicId: string,
  subtopicTitle: string
): LessonContentType | null {
  // ── Topic 2: The English Alphabet ──────────────────────────
  if (subtopicId === "d1-t2-s1") {
    return {
      id: "day1-d1-t2-s1", subtopicId,
      whyLearnThis: `Vowels are the most important sounds in the English language! Every single English word has at least one vowel sound. Without vowels, we cannot form any words at all.\n\nThe 5 vowels — A, E, I, O, U — are special because:\n• Every English syllable MUST contain a vowel\n• Vowels give words their main sound and rhythm\n• Knowing vowels helps you read, pronounce, and spell correctly\n• They determine how words sound (cat vs. kit, hat vs. hot)\n\nFor Indian learners, vowel sounds are very important because English vowels sound different from Hindi vowels. Mastering them will immediately improve your pronunciation and make you sound more natural.`,
      conceptExplanation: `There are 26 letters in English. Of these, 5 are VOWELS and 21 are CONSONANTS.\n\nThe 5 Vowels: A  E  I  O  U\n\nEach vowel has TWO sounds:\n1. SHORT sound (when the vowel says its "quick" sound)\n2. LONG sound (when the vowel "says its own name")\n\nA — SHORT: /æ/ as in CAT (बिल्ली), BAT, MAP\n    LONG:  /eɪ/ as in CAKE (केक), NAME, GAME\n\nE — SHORT: /ɛ/ as in BED (बिस्तर), PEN, NET\n    LONG:  /iː/ as in FEET (पैर), SEE, TREE\n\nI — SHORT: /ɪ/ as in SIT (बैठना), HIT, BIG\n    LONG:  /aɪ/ as in KITE (पतंग), NINE, TIME\n\nO — SHORT: /ɒ/ as in DOG (कुत्ता), TOP, HOT\n    LONG:  /oʊ/ as in BOAT (नाव), ROPE, HOME\n\nU — SHORT: /ʌ/ as in CUP (कप), BUS, HUT\n    LONG:  /juː/ as in CUBE (घन), MUSIC, TUNE\n\nSPECIAL RULE: When a word ends in silent 'E', the vowel before it becomes LONG!\n• CAP (short A) → CAPE (long A)\n• HOP (short O) → HOPE (long O)\n• KIT (short I) → KITE (long I)`,
      simpleExplanation: `Think of vowels like the ENGINE of a word. Without an engine, a car cannot move. Without a vowel, a word cannot exist!\n\nJust remember: A E I O U — these 5 letters are VOWELS. All other letters are consonants.\n\nEvery English word you say has at least one of these 5 letters giving it sound:\n• Apple → A\n• English → E and I\n• India → I and A\n• Office → O and I\n• Under → U`,
      hindiExplanation: `Vowels = स्वर। इन्हें "A E I O U" कहते हैं।\n\nHindi में जैसे अ, आ, इ, ई, उ, ऊ होते हैं, वैसे ही English में A, E, I, O, U होते हैं।\n\nयाद करने का तरीका: "An Elephant In Orange Underwear" — हर word का पहला letter देखो:\nA - An\nE - Elephant\nI - In\nO - Orange\nU - Underwear\n\nहर English word में कम से कम एक vowel होता है। जैसे:\n• Cat में 'a'\n• English में 'e' और 'i'\n• India में 'i' और 'a'`,
      rules: [
        { rule: "Every English syllable must contain a vowel", explanation: "You cannot have a syllable without at least one vowel sound. This is why all words have vowels.", example: "stu-dent (2 syllables, both have vowels: u and e)", exception: "Some syllables use Y as a vowel: gym, system, rhythm" },
        { rule: "Use 'AN' before words starting with a vowel sound", explanation: "When a word begins with A, E, I, O, U sound, use 'AN' instead of 'A'.", example: "An apple, An elephant, An idea, An orange, An umbrella", exception: "Use 'A' before words starting with a vowel letter but consonant sound: A university, A uniform, A European" },
        { rule: "Short vowels appear in CVC pattern words", explanation: "Consonant-Vowel-Consonant (CVC) pattern usually makes a short vowel sound.", example: "CAT, BED, SIT, HOT, CUP — all short vowel sounds" },
        { rule: "Silent 'E' makes the previous vowel long", explanation: "When a word ends in 'e' that you don't pronounce, it changes the previous vowel to a long sound.", example: "hop → hope, kit → kite, cap → cape, tub → tube" },
      ],
      commonMistakes: [
        { wrong: "I need a umbrella.", correct: "I need an umbrella.", explanation: "Before vowel sounds (a, e, i, o, u), use 'AN' not 'A'." },
        { wrong: "She is an university student.", correct: "She is a university student.", explanation: "'University' starts with a Y-sound (/juː/), so use 'A', not 'AN'." },
        { wrong: "Pronouncing 'live' (verb) same as 'live' (adjective)", correct: "I live /lɪv/ in Delhi. (verb) | It's a live /laɪv/ show. (adjective)", explanation: "Same spelling, different vowel sounds! Context determines pronunciation." },
      ],
      sentencePatterns: [
        { pattern: "A/An + noun (using correct article)", hindiPattern: "सही article के साथ",
          examples: [
            { english: "I eat an apple every morning.", hindi: "मैं हर सुबह एक सेब खाता हूँ।" },
            { english: "She has an interesting idea.", hindi: "उसके पास एक दिलचस्प विचार है।" },
            { english: "He bought an expensive orange.", hindi: "उसने एक महंगा संतरा खरीदा।" },
            { english: "This is an umbrella.", hindi: "यह एक छाता है।" },
            { english: "We need an educated person.", hindi: "हमें एक शिक्षित व्यक्ति की जरूरत है।" },
          ]
        },
        { pattern: "Words with short vowels", hindiPattern: "छोटे स्वर वाले शब्द",
          examples: [
            { english: "The cat sat on the mat.", hindi: "बिल्ली चटाई पर बैठी।" },
            { english: "I hit the ball with the bat.", hindi: "मैंने बल्ले से गेंद मारी।" },
            { english: "Put the cup on the table.", hindi: "कप टेबल पर रखो।" },
          ]
        },
        { pattern: "Words with long vowels (silent E rule)", hindiPattern: "लंबे स्वर वाले शब्द",
          examples: [
            { english: "Make a cake for the party.", hindi: "पार्टी के लिए केक बनाओ।" },
            { english: "I hope you are fine.", hindi: "मुझे उम्मीद है तुम ठीक हो।" },
            { english: "Ride the bike to school.", hindi: "स्कूल साइकिल से जाओ।" },
          ]
        },
      ],
      speakingTips: [
        "Practice the 5 vowel sounds daily: /æ/ /ɛ/ /ɪ/ /ɒ/ /ʌ/ (short) and /eɪ/ /iː/ /aɪ/ /oʊ/ /juː/ (long)",
        "Exaggerate your mouth movements when practicing vowels — open wide for 'A', stretch lips for 'E'",
        "Record yourself saying vowel words and compare with native speakers on YouTube",
        "Practice minimal pairs: cat/kit, hat/hot, bed/bad — hear the vowel difference",
        "Sing English songs — music helps you feel the natural rhythm of vowel sounds",
      ],
      memoryTricks: [
        "An Elephant In Orange Underwear — first letters: A E I O U",
        "Short vowels: think of them as 'quick' sounds. Long vowels: the letter 'says its own name'",
        "The Magic E rule: 'The E at the end makes the middle vowel say its name!'",
        "A = Ahh (open mouth wide), E = Ehh (stretch lips), I = Ih (small smile), O = Oh (round lips), U = Uh (short sound)",
      ],
      professionalUsage: [
        { situation: "Pronunciation in presentations", english: "When presenting, pronounce every vowel clearly. 'Strategic' has 3 vowel sounds: /ɛ/ /i/ /ɪ/", hindi: "Presentation में हर vowel clearly pronounce करें।" },
        { situation: "Email writing — using 'a' vs 'an'", english: "Please review the attached file. It is an important update for our project.", hindi: "कृपया attached file review करें। यह हमारे project के लिए एक important update है।" },
      ],
      dailyUsage: [
        { situation: "Ordering food", english: "I would like an omelette and an orange juice, please.", hindi: "मुझे एक ऑमलेट और एक ऑरेंज जूस चाहिए, कृपया।" },
        { situation: "Shopping", english: "I need an umbrella. Do you have an affordable one?", hindi: "मुझे एक छाता चाहिए। क्या आपके पास किफायती वाला है?" },
      ],
      officeUsage: [
        { situation: "Writing a message", english: "Please send me an email about the update.", hindi: "कृपया update के बारे में मुझे email भेजें।" },
      ],
      interviewUsage: [
        { situation: "Using correct articles shows grammar knowledge", english: "I have an MBA degree and an excellent track record in sales.", hindi: "मेरे पास MBA degree और sales में एक excellent track record है।" },
      ],
      story: {
        title: "Anita and the Vowels",
        paragraphs: [
          "Anita was learning English. Her teacher said, 'Today we learn vowels: A, E, I, O, U. These are the most important letters!'",
          "Anita looked confused. She asked, 'Why are only 5 letters important, ma'am?'",
          "The teacher smiled and said, 'Because without vowels, you cannot make any word! Try to make a word without A, E, I, O, or U. You cannot!'",
          "Anita tried: 'C... T... H... N... S...' She could not make a word!",
          "The teacher said, 'Now add a vowel! C-A-T = CAT! H-E-N = HEN! S-I-T = SIT!'",
          "Anita's eyes lit up! 'Ohh! Vowels give words their voice! Like how our voice needs breath — words need vowels!'",
          "The teacher clapped. 'Perfect explanation, Anita! Remember: An Elephant In Orange Underwear — that's your vowel memory trick!'",
        ],
        moral: "Vowels give English its voice and music. Master them and your pronunciation will improve dramatically!",
        keyWords: [
          { word: "vowel", meaning: "स्वर — A, E, I, O, U" },
          { word: "consonant", meaning: "व्यंजन — remaining 21 letters" },
          { word: "syllable", meaning: "अक्षर — unit of sound in a word" },
          { word: "pronunciation", meaning: "उच्चारण — how to say a word" },
        ],
      },
      essay: {
        title: "Why Vowels Are the Heart of English",
        paragraphs: [
          "The English alphabet has 26 letters, but only 5 of them — A, E, I, O, and U — are vowels. Despite being just 5 in number, they play the most critical role in the language.",
          "Every English word contains at least one vowel. Without vowels, communication becomes impossible. They provide the 'sound' that makes words speakable and listenable.",
          "Vowels in English have two forms: short and long. Short vowels are quick sounds, as in 'cat', 'bed', and 'sit'. Long vowels are stretched sounds where the letter 'says its own name', as in 'cake', 'feet', and 'kite'.",
          "For Indian learners, mastering English vowel sounds is crucial because they differ significantly from Hindi vowel sounds. Regular practice with vowel minimal pairs — words that differ only in their vowel sound — is the fastest way to improve.",
        ],
        keyPoints: [
          "5 vowels: A, E, I, O, U — most important letters in English",
          "Every English word/syllable has at least one vowel",
          "Short vowels: quick sounds (cat, bed, sit, hot, cup)",
          "Long vowels: stretched sounds (cake, feet, kite, boat, cube)",
          "Use 'AN' before vowel sounds, 'A' before consonant sounds",
        ],
      },
      dialogue: {
        title: "Learning About Vowels",
        setting: "A student asks her teacher about vowels during an English lesson.",
        lines: [
          { speaker: "Student", text: "Ma'am, what is the difference between 'a cat' and 'an elephant'?", hindi: "Ma'am, 'a cat' और 'an elephant' में क्या अंतर है?" },
          { speaker: "Teacher", text: "Great question! We use 'A' before consonant sounds and 'AN' before vowel sounds — A, E, I, O, U.", hindi: "बहुत अच्छा सवाल! Consonant sounds से पहले 'A' और vowel sounds से पहले 'AN' use करते हैं।" },
          { speaker: "Student", text: "So 'cat' starts with C, a consonant — so we say 'A cat'. And 'elephant' starts with E, a vowel — so we say 'AN elephant'?", hindi: "तो 'cat' C से शुरू होता है, consonant है — 'A cat'। और 'elephant' E से शुरू होता है, vowel है — 'AN elephant'?" },
          { speaker: "Teacher", text: "Exactly right! Now, what about 'university'?", hindi: "बिल्कुल सही! अब 'university' के बारे में?" },
          { speaker: "Student", text: "U is a vowel... so 'AN university'?", hindi: "U vowel है... तो 'AN university'?" },
          { speaker: "Teacher", text: "Almost! 'University' is special — it starts with a Y-sound /juː/. So we say 'A university'. The rule is about the SOUND, not the letter!", hindi: "लगभग सही! 'University' खास है — यह Y-sound /juː/ से शुरू होता है। तो हम 'A university' कहते हैं। Rule letter के बारे में नहीं, SOUND के बारे में है!" },
          { speaker: "Student", text: "Wow, that's tricky! So it's always about how it SOUNDS, not how it's written!", hindi: "वाह, यह tricky है! तो यह हमेशा SOUND के बारे में है, लिखने के बारे में नहीं!" },
        ],
        notes: [
          "The 'A vs AN' rule is about the SOUND of the following word, not the letter",
          "An honest man (H is silent — starts with vowel sound)", 
          "A one-way street (ONE starts with W-sound, not O-sound)",
          "Practice saying words aloud — your ear will guide you",
        ],
      },
      summary: [
        "5 Vowels in English: A, E, I, O, U — the most important letters",
        "Every English word needs at least one vowel",
        "Short vowels: /æ/ /ɛ/ /ɪ/ /ɒ/ /ʌ/ (cat, bed, sit, hot, cup)",
        "Long vowels: /eɪ/ /iː/ /aɪ/ /oʊ/ /juː/ (cake, feet, kite, boat, cube)",
        "Use AN before vowel sounds, A before consonant sounds",
        "Magic E rule: final silent E makes the previous vowel long (cap→cape, kit→kite)",
        "Practice vowel sounds daily — they are the foundation of English pronunciation!",
      ],
    };
  }

  if (subtopicId === "d1-t2-s2") {
    return {
      id: "day1-d1-t2-s2", subtopicId,
      whyLearnThis: `Consonants make up 21 of the 26 English letters. While vowels give words their sound, consonants give words their SHAPE and DISTINCTIVENESS. Without consonants, all words would sound the same!\n\nKnowing consonant sounds helps you:\n• Pronounce English words correctly\n• Avoid common spelling mistakes\n• Sound like a natural English speaker\n• Read new words without being told how to say them\n• Understand native speakers when they speak fast\n\nMany consonant sounds in English don't exist in Hindi, which is why Indian learners often mispronounce them. Today we will learn ALL 21 consonants and their correct sounds!`,
      conceptExplanation: `The 21 consonants are: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z\n\nCONSONANT CATEGORIES:\n\n1. STOP SOUNDS (you stop airflow completely):\n• B /b/ — Ball, Book, Bus\n• P /p/ — Park, Pen, People\n• D /d/ — Dog, Door, Day\n• T /t/ — Table, Time, Talk\n• G /g/ — Go, Game, Give\n• K /k/ — King, Keep, Car\n\n2. FRICTION SOUNDS (air passes through narrow space):\n• F /f/ — Fish, Food, Fun\n• V /v/ — Very, Visit, Voice\n• S /s/ — Sun, See, Say\n• Z /z/ — Zero, Zone, Zoo\n• H /h/ — Happy, Home, Help\n• SH /ʃ/ — She, Shop, Show\n\n3. NASAL SOUNDS (air through nose):\n• M /m/ — Man, Make, More\n• N /n/ — Name, Now, Never\n• NG /ŋ/ — Ring, Song, Long\n\n4. SPECIAL SOUNDS:\n• TH /θ/ or /ð/ — Think, This, The (two different TH sounds!)\n• R /r/ — Run, Right, Read (softer than Hindi 'र')\n• L /l/ — Love, Life, Learn\n• W /w/ — Work, Water, Walk\n• Y /j/ — Yes, Year, You`,
      simpleExplanation: `Think of consonants as the walls of a house, and vowels as the doors. Walls give the house its shape — consonants give words their shape.\n\nThe most important consonant sounds to practice for Indian learners:\n1. V vs W — Very different! "Very" ≠ "Wery"\n2. TH sound — "Think" has /θ/ sound (tongue between teeth)\n3. R sound — softer than Hindi 'र'\n4. F vs P — "Fan" ≠ "Pan"\n5. Z sound — "Zoo" /z/ (Hindi doesn't have this)\n\nPractice these 5 every day and your accent will improve dramatically!`,
      hindiExplanation: `21 Consonants = व्यंजन\n\nB C D F G H J K L M N P Q R S T V W X Y Z\n\nHindi में नहीं होते, लेकिन English में होते हैं:\n• V /v/ — Hindi में 'व' है लेकिन English V जैसा नहीं। English V = दांत से होंठ को छुओ।\n• TH /θ/ — Hindi में नहीं है! जीभ दांतों के बीच रखो और हवा निकालो।\n• Z /z/ — Hindi में ज़ है but softer. Engine की तरह buzz करो।\n• R /r/ — Hindi का 'र' से ज़्यादा soft है।\n\nइन्हें practice करो:\n• Think, that, three, there\n• Very, village, vehicle\n• Zero, zone, zebra`,
      rules: [
        { rule: "Silent consonants are NOT pronounced", explanation: "Many English words have consonants you write but don't say.", example: "KNOW = /noʊ/ (K is silent) | WRONG = /rɒŋ/ (W is silent) | DOUBT = /daʊt/ (B is silent)" },
        { rule: "C sounds like S or K depending on the vowel after it", explanation: "C before E, I, Y sounds like S. C before A, O, U sounds like K.", example: "City /s/, Cycle /s/ vs Cat /k/, Come /k/, Cup /k/" },
        { rule: "G sounds like J before E, I, Y", explanation: "G before E, I, Y often sounds like /dʒ/ (J sound).", example: "Giant /dʒ/, Gentle /dʒ/ vs Go /g/, Game /g/", exception: "Get, Give, Girl keep the hard G sound" },
        { rule: "Double consonants usually make one sound", explanation: "When the same consonant is doubled, you say it only once (slightly longer).", example: "Butter, Running, Sitting — the double letter is one sound" },
      ],
      commonMistakes: [
        { wrong: "I am wery happy.", correct: "I am very happy.", explanation: "V and W are different sounds! V = upper teeth on lower lip. W = round lips." },
        { wrong: "I tink so.", correct: "I think so.", explanation: "TH sound: put your tongue between your teeth and blow air. It's /θ/ not /t/." },
        { wrong: "Wring = /rɪŋ/ (pronouncing W)", correct: "Wrong = /rɒŋ/ (W is silent)", explanation: "In 'wr' words, the W is always silent: write, wrap, wrist, wrong, wreck." },
      ],
      sentencePatterns: [
        { pattern: "Practicing B/P sounds", hindiPattern: "B और P का अभ्यास",
          examples: [
            { english: "The big brown bear broke the box.", hindi: "बड़े भूरे भालू ने बक्सा तोड़ा।" },
            { english: "Please pick up the paper from the park.", hindi: "कृपया पार्क से कागज उठाओ।" },
          ]
        },
        { pattern: "Practicing V/W sounds", hindiPattern: "V और W का अभ्यास",
          examples: [
            { english: "We visited a very beautiful village.", hindi: "हमने एक बहुत सुंदर गाँव का दौरा किया।" },
            { english: "The vehicle moved very swiftly on the wide road.", hindi: "वाहन चौड़ी सड़क पर बहुत तेज़ी से चला।" },
          ]
        },
        { pattern: "Practicing TH sounds", hindiPattern: "TH का अभ्यास",
          examples: [
            { english: "I think that three things are important.", hindi: "मुझे लगता है कि तीन चीजें महत्वपूर्ण हैं।" },
            { english: "The mother thanked them thoroughly.", hindi: "माँ ने उन्हें पूरी तरह से धन्यवाद दिया।" },
          ]
        },
      ],
      speakingTips: [
        "Practice the TH sound daily: put a finger between your teeth — your tongue should touch it slightly",
        "V vs W drill: 'vine/wine, very/wary, vent/went' — practice 5 times daily",
        "For the R sound: don't tap your tongue (that's the Hindi 'र') — just lift it slightly, don't touch the roof",
        "Record yourself reading tongue twisters and compare with native pronunciations on YouTube",
        "Practice 'She sells seashells' for S sound, 'Peter Piper' for P sound",
      ],
      memoryTricks: [
        "TH = Tongue THrough teeth! The tongue goes between the teeth for TH",
        "V = Vampire bites your lip — upper teeth on lower lip",
        "W = Whistle lips — round lips like you're going to whistle",
        "Silent consonants: KNow (K silent), WRong (W silent), LaMB (B silent), HoNEST (H silent)",
      ],
      professionalUsage: [
        { situation: "Saying company names correctly", english: "I work for Volkswagen — note: the W in Volkswagen is pronounced as V in German!", hindi: "Pronunciation practice से professional image बनती है।" },
        { situation: "Telephone conversations", english: "For clarity on phone calls, say 'V as in Victor' or 'B as in Bravo' to avoid confusion.", hindi: "Phone पर letters spell करते समय — 'V as in Victor' कहो।" },
      ],
      dailyUsage: [
        { situation: "Saying thank you correctly", english: "Thank you — the TH in 'thank' uses the tongue between teeth sound /θ/", hindi: "Thank you — /θæŋk juː/ — TH correct बोलना ज़रूरी है।" },
        { situation: "Saying 'What do you want?'", english: "What do you want? — W is a rounded-lips sound, not V", hindi: "What = /wɒt/ — गोल होंठ, V sound नहीं।" },
      ],
      officeUsage: [
        { situation: "Professional phone manner", english: "Could you spell your name? 'V as in Victor or W as in Whiskey?' — This is international alphabet clarity.", hindi: "International phonetic alphabet: A=Alpha, B=Bravo, V=Victor, W=Whiskey।" },
      ],
      interviewUsage: [
        { situation: "Pronouncing interviewer's name", english: "Pronounce names correctly — Mr. Sharma /ʃɑːrmə/, Dr. Verma /vɜːrmə/. Correct V/W shows English proficiency.", hindi: "Names sahi pronounce karo — yeh confidence dikhata hai।" },
      ],
      story: {
        title: "The Sound Game",
        paragraphs: [
          "Vikram and Wilma were students in an English class. Their teacher played a sound game.",
          "'I will say a word. You must tell me the first sound,' said the teacher.",
          "'VERY!' said the teacher. Vikram said, 'W sound!' Wilma said, 'No! It is V sound! Look — upper teeth on lower lip!'",
          "Vikram was confused. He tried: V... V... 'Oh! My upper teeth touch my lower lip! That is V!'",
          "Then the teacher said, 'THINK'. Both students said 'T sound!' The teacher smiled and shook her head. 'Put your tongue between your teeth — TH sound!'",
          "They both practiced for 10 minutes. By the end, they could say: 'Very thoughtful, William' — all consonants correct!",
        ],
        moral: "Consonant sounds need physical practice. Your mouth muscles must learn new movements. Practice daily!",
        keyWords: [
          { word: "consonant", meaning: "व्यंजन — non-vowel letter" },
          { word: "pronunciation", meaning: "उच्चारण — how you say a word" },
          { word: "TH sound", meaning: "जीभ दांतों के बीच रखकर बोलना" },
          { word: "accent", meaning: "लहजा — the way you speak" },
        ],
      },
      essay: {
        title: "Mastering English Consonant Sounds",
        paragraphs: [
          "English has 21 consonant letters that create a variety of sounds. For speakers of Indian languages, several English consonant sounds require special attention and practice.",
          "The TH sound (/θ/ and /ð/) is unique to English and absent in most Indian languages. In 'think', the tongue goes between the teeth. In 'this', the same position is used but the sound is voiced.",
          "The V and W distinction is another common challenge. V requires the upper teeth to touch the lower lip, while W requires rounded lips. Mixing them up leads to misunderstandings.",
          "Silent consonants add another layer of complexity. Words like 'know', 'wrong', 'lamb', and 'honest' have letters that are written but never pronounced.",
          "The key to mastering consonant sounds is consistent practice. Recording yourself, using pronunciation apps, and speaking with English speakers will gradually train your mouth muscles to produce the correct sounds.",
        ],
        keyPoints: [
          "21 consonants in English, each with specific sounds",
          "TH = tongue between teeth (/θ/ in think, /ð/ in this)",
          "V = upper teeth on lower lip (very, vehicle, voice)",
          "W = rounded lips (water, work, walk)",
          "Silent consonants: KN(know), WR(wrong), MB(lamb), GN(sign)",
        ],
      },
      dialogue: {
        title: "Pronunciation Practice Partners",
        setting: "Two friends practice English consonant sounds together.",
        lines: [
          { speaker: "Rahul", text: "Can you help me? I always say 'wery' instead of 'very'. My friends laugh!", hindi: "क्या तुम मेरी help कर सकते हो? मैं हमेशा 'wery' कहता हूँ 'very' की जगह।" },
          { speaker: "Priya", text: "Sure! For V, bite your lower lip softly with your upper teeth. Say 'vvvv' — feel the vibration!", hindi: "ज़रूर! V के लिए, अपने ऊपरी दांतों से lower lip को softly bite करो। 'vvvv' कहो।" },
          { speaker: "Rahul", text: "Vvvv... Very! That feels different from W!", hindi: "Vvvv... Very! W से अलग feel होता है!" },
          { speaker: "Priya", text: "Exactly! Now try 'think'. Put your tongue between your front teeth.", hindi: "बिल्कुल! अब 'think' try करो। अपनी जीभ front teeth के बीच रखो।" },
          { speaker: "Rahul", text: "Th... th... think! Is that right?", hindi: "Th... th... think! क्या यह सही है?" },
          { speaker: "Priya", text: "Perfect! These are the two hardest sounds for us. Master these and your English sounds much better!", hindi: "Perfect! हमारे लिए ये दो सबसे मुश्किल sounds हैं। इन्हें master करो और तुम्हारी English बहुत better sound करेगी!" },
        ],
        notes: [
          "V sound: vibration between upper teeth and lower lip",
          "W sound: rounded lips, no teeth involvement",
          "TH unvoiced /θ/: think, thank, three — no vibration",
          "TH voiced /ð/: this, that, the — with vibration",
        ],
      },
      summary: [
        "21 consonants: B C D F G H J K L M N P Q R S T V W X Y Z",
        "TH sound: tongue between teeth — unique to English (/θ/ in think, /ð/ in this)",
        "V vs W: V = upper teeth on lower lip | W = rounded lips",
        "C = S before E/I/Y (city) | C = K before A/O/U (cat)",
        "G = J before E/I/Y (gentle) | G = G before A/O/U (game)",
        "Silent consonants: KN(know), WR(wrong), MB(lamb), GH(night)",
        "Practice TH, V, W, R sounds daily — these are the biggest differences from Hindi!",
      ],
    };
  }

  if (subtopicId === "d1-t2-s3") {
    return {
      id: "day1-d1-t2-s3", subtopicId,
      whyLearnThis: `Capital letters are one of the most fundamental rules in English writing. Using capital letters correctly shows that you understand English properly. If you write without correct capitalization, your writing looks unprofessional and immature.\n\nCapital letters are used:\n• To start every sentence\n• For the word 'I' (always)\n• For proper nouns (names of people, places, companies)\n• For days, months, and titles\n• For abbreviations and acronyms\n\nIn emails, reports, and professional writing — capital letters show your grammar knowledge and attention to detail.`,
      conceptExplanation: `CAPITAL LETTERS (Uppercase) vs Small Letters (Lowercase)\n\nCapital: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\nSmall:   a b c d e f g h i j k l m n o p q r s t u v w x y z\n\nRULE 1 — Start of a sentence:\nEvery new sentence begins with a capital letter.\n✅ "My name is Arjun. I live in Delhi."\n❌ "my name is arjun. i live in delhi."\n\nRULE 2 — The letter "I":\nThe word 'I' (referring to yourself) is ALWAYS capital.\n✅ "I am a student. Yesterday I went to school."\n❌ "i am a student. yesterday i went to school."\n\nRULE 3 — Proper Nouns:\nNames of specific people, places, companies, brands.\n✅ "Rahul works at Infosys in Bangalore."\n❌ "rahul works at infosys in bangalore."\n\nRULE 4 — Days and Months:\nDays of week and months of year are always capitalized.\n✅ "The meeting is on Monday, 15th January."\n❌ "the meeting is on monday, 15th january."\n\nRULE 5 — Titles before names:\n✅ "Dr. Sharma, Mr. Kumar, Mrs. Gupta, Ms. Priya"\n❌ "dr. sharma, mr. kumar, mrs. gupta"`,
      simpleExplanation: `Think of capital letters as "important signals" in English writing.\n\nSimple rule to remember:\n1. SENTENCE START → Capital\n2. NAME (person/place/company) → Capital\n3. THE WORD "I" → Always Capital\n4. DAYS & MONTHS → Capital\n5. TITLES (Mr., Dr., Mrs.) → Capital\n\nWhen in doubt: names and beginnings need capitals!`,
      hindiExplanation: `Capital letters = बड़े अक्षर\nSmall letters = छोटे अक्षर\n\nCapital कब use करें:\n1. हर sentence की शुरुआत में → "My name is..."\n2. "I" word हमेशा capital → "I am", "I go"\n3. किसी का नाम → Rahul, Delhi, India\n4. दिन और महीने → Monday, January\n5. Title → Dr., Mr., Mrs.\n\nExam और office में सही capitalization ज़रूरी है! यह आपकी English quality दिखाता है।`,
      rules: [
        { rule: "Every sentence starts with a capital letter", explanation: "The very first letter of any sentence must be capital, regardless of what word it is.", example: "The cat is black. She runs fast. We are learning English." },
        { rule: "The word 'I' is always capital", explanation: "In English, the first-person singular pronoun 'I' is ALWAYS written as capital, even in the middle of a sentence.", example: "Yesterday I went to market. My sister and I are students.", exception: "No exceptions — 'I' is ALWAYS capital in English" },
        { rule: "Proper nouns take capital letters", explanation: "Names of specific people, places, organizations, brands, languages, and nationalities start with capitals.", example: "Sachin Tendulkar lives in Mumbai. She works at Google. I speak Hindi and English.", exception: "Common nouns like 'city', 'company', 'language' are NOT capitalized unless starting a sentence" },
        { rule: "Days of the week and months of the year are capitalized", explanation: "Unlike some languages, English always capitalizes days and months.", example: "I have a meeting on Wednesday. My birthday is in March.", exception: "Seasons are NOT capitalized: spring, summer, autumn, winter" },
      ],
      commonMistakes: [
        { wrong: "i am going to mumbai.", correct: "I am going to Mumbai.", explanation: "'I' must always be capital. Proper noun 'Mumbai' also needs capital." },
        { wrong: "She met dr. kumar on monday.", correct: "She met Dr. Kumar on Monday.", explanation: "Title 'Dr.' and name 'Kumar' need capitals. Day 'Monday' also needs capital." },
        { wrong: "I love to eat pizza on sunday evenings in winter.", correct: "I love to eat pizza on Sunday evenings in winter.", explanation: "Days (Sunday) are capitalized. Seasons (winter) are NOT capitalized." },
      ],
      sentencePatterns: [
        { pattern: "Sentence with proper nouns", hindiPattern: "Proper nouns के साथ",
          examples: [
            { english: "Priya works at Tata Consultancy Services in Pune.", hindi: "प्रिया पुणे में Tata Consultancy Services में काम करती है।" },
            { english: "I visited the Taj Mahal in Agra last Monday.", hindi: "मैंने पिछले सोमवार को आगरा में ताज महल देखा।" },
            { english: "Dr. Verma and Mr. Sharma attended the conference.", hindi: "डॉ. वर्मा और श्री शर्मा ने सम्मेलन में भाग लिया।" },
          ]
        },
        { pattern: "Days and months in sentences", hindiPattern: "दिन और महीने",
          examples: [
            { english: "The interview is scheduled for Tuesday, 15th March.", hindi: "Interview मंगलवार, 15 मार्च को scheduled है।" },
            { english: "Every Friday, I attend an English class.", hindi: "हर शुक्रवार, मैं English class में जाता/जाती हूँ।" },
          ]
        },
        { pattern: "Professional titles with names", hindiPattern: "Professional titles",
          examples: [
            { english: "Please forward this email to Mr. Kapoor and Ms. Singh.", hindi: "यह email श्री कपूर और श्रीमती सिंह को forward करें।" },
            { english: "Prof. Mehta is teaching at IIT Delhi.", hindi: "Prof. मेहता IIT दिल्ली में पढ़ा रहे हैं।" },
          ]
        },
      ],
      speakingTips: [
        "While speaking, capital letters don't matter — but they show in your reading ability (pauses at capitals)",
        "When spelling out names or words, always mention if it's 'capital' or 'small': 'R-A-H-U-L, all capitals'",
        "Titles: say 'Doctor Kumar', 'Mister Sharma' — these signal respect in speaking too",
        "Practice reading aloud — your voice naturally rises slightly at sentence beginnings",
      ],
      memoryTricks: [
        "3 ALWAYS CAPITALS: I (always), Names (proper nouns), Starts of sentences",
        "If it has a NAME — capital! People's names, place names, company names",
        "Days and Months — they are 'special' days and months, so they get capitals",
        "Seasons are NOT special (just weather) — spring, summer, autumn, winter are lowercase",
      ],
      professionalUsage: [
        { situation: "Professional email", english: "Dear Mr. Singh,\nI hope this email finds you well. Please find attached the report for Monday's meeting.\nBest regards,\nPriya Sharma", hindi: "Professional email में capitalization बहुत important है।" },
        { situation: "Business card/introduction", english: "My name is Anjali Verma. I work as a Senior Manager at Wipro Technologies in Hyderabad.", hindi: "Business introduction में proper nouns capital होने चाहिए।" },
      ],
      dailyUsage: [
        { situation: "WhatsApp/SMS professional messages", english: "Hi! I am Rohan. I saw your ad on Facebook. I am interested in the job at your company.", hindi: "WhatsApp message में भी 'I' capital होना चाहिए।" },
        { situation: "Introducing yourself in writing", english: "My name is Kavya. I live in Bangalore. I am a graduate of Delhi University.", hindi: "अपना परिचय लिखते समय सही capitalization ज़रूरी है।" },
      ],
      officeUsage: [
        { situation: "Writing reports", english: "The Project was completed on schedule under the leadership of Mr. Gupta.", correct: "The project was completed on schedule under the leadership of Mr. Gupta.", explanation: "'Project' should NOT be capitalized mid-sentence (it's not a proper noun here)." },
      ],
      interviewUsage: [
        { situation: "Written test in interview", english: "I completed my B.Tech from IIT Bombay in May 2020. I then joined Infosys as a Software Engineer.", hindi: "Interview के written test में capitalization देखी जाती है।" },
      ],
      story: {
        title: "The Email Mistake",
        paragraphs: [
          "Neha sent an email to her manager. She wrote: 'dear sir, i am neha from marketing team. i am sending the report for monday meeting. please review. regards neha'",
          "Her manager called her and said, 'Neha, your English work is good. But your email has many capitalization errors. In professional settings, this creates a bad impression.'",
          "Neha was embarrassed. Her manager explained: 'Always start with a capital. Always write I with capital. Names get capitals: Neha, Monday, Marketing Team.'",
          "Neha rewrote the email: 'Dear Sir, I am Neha from Marketing Team. I am sending the report for Monday's meeting. Please review. Regards, Neha'",
          "Her manager smiled. 'Much better! Capital letters show you respect the language and the reader.'",
          "Neha learned her lesson. From that day, she always checked her capitalization before sending any message.",
        ],
        moral: "Correct capitalization is not just grammar — it is professionalism. One small mistake can create a big bad impression.",
        keyWords: [
          { word: "capitalize", meaning: "बड़ा अक्षर लिखना" },
          { word: "proper noun", meaning: "किसी का नाम — व्यक्ति, स्थान, कंपनी" },
          { word: "professionalism", meaning: "पेशेवर व्यवहार" },
          { word: "impression", meaning: "प्रभाव — effect on others" },
        ],
      },
      essay: {
        title: "Capital Letters: Small Detail, Big Impact",
        paragraphs: [
          "Capital letters are one of the most basic yet most important rules of English writing. Despite being learned in primary school, many professionals still make capitalization errors.",
          "The rule is simple: start every sentence with a capital letter, always capitalize the word 'I', and use capitals for proper nouns — names of people, places, organizations, days, and months.",
          "In professional communication, poor capitalization creates a negative impression. When a job application or email contains lowercase 'i' or uncapitalized names, it signals carelessness.",
          "Digital communication has made capitalization worse. In casual texting, people skip capitals. But in professional English — emails, reports, applications — correct capitalization is non-negotiable.",
        ],
        keyPoints: [
          "Always capitalize: sentence starts, the word 'I', proper nouns",
          "Always capitalize: days of week, months of year, titles (Mr., Dr., Prof.)",
          "Never capitalize: seasons (spring, summer), common nouns in mid-sentence",
          "Professional writing demands perfect capitalization",
          "One missing capital can make writing look careless and unprofessional",
        ],
      },
      dialogue: {
        title: "Fixing the Capitalization",
        setting: "A student shows a message to her English teacher for review.",
        lines: [
          { speaker: "Student", text: "Ma'am, can you check this message? 'i am riya. i study at delhi university. my exam is on friday.'", hindi: "Ma'am, यह message check करें? 'i am riya. i study at delhi university. my exam is on friday.'" },
          { speaker: "Teacher", text: "I can see three capitalization errors. Can you find them?", hindi: "मुझे तीन capitalization errors दिख रहे हैं। क्या तुम उन्हें find कर सकती हो?" },
          { speaker: "Student", text: "Hmm... 'i' should be 'I'? And maybe 'delhi university' should be capital?", hindi: "Hmm... 'i' को 'I' होना चाहिए? और शायद 'delhi university' capital होना चाहिए?" },
          { speaker: "Teacher", text: "Correct! And the third?", hindi: "सही! और तीसरा?" },
          { speaker: "Student", text: "Oh! 'friday' should be 'Friday' — it's a day of the week!", hindi: "ओह! 'friday' को 'Friday' होना चाहिए — यह एक दिन है!" },
          { speaker: "Teacher", text: "Perfect! Also notice — each sentence starts with a capital too. The corrected message: 'I am Riya. I study at Delhi University. My exam is on Friday.'", hindi: "Perfect! साथ ही — हर sentence capital से शुरू होती है। Corrected message: 'I am Riya. I study at Delhi University. My exam is on Friday.'" },
        ],
        notes: [
          "'I' is ALWAYS capital in English — no exceptions",
          "Proper nouns (Delhi, University name) always get capitals",
          "Days of week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
          "Months: January, February, March, April, May, June, July, August, September, October, November, December",
        ],
      },
      summary: [
        "ALWAYS use capitals: Start of sentence, the word 'I', proper nouns",
        "ALWAYS capitalize: Days (Monday-Sunday), Months (January-December), Titles (Mr., Dr., Prof.)",
        "NEVER capitalize in middle of sentence: common nouns, seasons, subjects (unless a language: English, Hindi)",
        "Names of people, places, companies, brands always get capitals",
        "Languages and nationalities are capitalized: English, Hindi, Indian, American",
        "Professional writing requires perfect capitalization — it shows attention to detail",
        "Quick test: Is it a NAME or START of sentence? → Capital! Is it just a regular word? → Lowercase!",
      ],
    };
  }

  if (subtopicId === "d1-t3-s1") {
    return {
      id: "day1-d1-t3-s1", subtopicId,
      whyLearnThis: `Parts of Speech are the building blocks of every English sentence. Just like a building is made of bricks, cement, steel, and glass — an English sentence is made of nouns, verbs, adjectives, and more!\n\nThere are 8 Parts of Speech:\n1. Noun — names\n2. Pronoun — replaces nouns\n3. Verb — actions\n4. Adjective — describes nouns\n5. Adverb — describes verbs\n6. Preposition — shows position/time\n7. Conjunction — joins sentences\n8. Interjection — expresses emotion\n\nUnderstanding parts of speech helps you:\n• Build correct sentences\n• Fix grammar errors\n• Understand grammar rules better\n• Use English more precisely and naturally`,
      conceptExplanation: `THE 8 PARTS OF SPEECH:\n\n1. NOUN — names of persons, places, things, ideas\nExamples: boy, Delhi, table, love, happiness\nQuestion it answers: WHO or WHAT?\n\n2. PRONOUN — replaces nouns to avoid repetition\nExamples: I, you, he, she, it, we, they, this, that\nUsage: Instead of "Rahul went to school. Rahul was late." → "Rahul went to school. He was late."\n\n3. VERB — action words or state words\nExamples: run, eat, sleep, is, are, was, know, love\nQuestion it answers: WHAT is the subject doing?\n\n4. ADJECTIVE — describes or modifies a noun\nExamples: big, beautiful, fast, three, red, happy\nUsage: "A big red car" — big and red are adjectives describing the car\n\n5. ADVERB — describes a verb, adjective, or another adverb\nExamples: quickly, very, always, never, here, now\nUsage: "She runs quickly" — quickly describes how she runs\n\n6. PREPOSITION — shows relationship between noun and other words\nExamples: in, on, at, under, over, between, with, for\nUsage: "The book is on the table." — 'on' shows the book's position\n\n7. CONJUNCTION — connects words, phrases, or clauses\nExamples: and, but, or, because, although, so, yet\nUsage: "I want tea but she wants coffee." — 'but' connects two ideas\n\n8. INTERJECTION — expresses sudden emotion or reaction\nExamples: Oh!, Wow!, Hey!, Oops!, Hurrah!, Ouch!\nUsage: "Wow! That is amazing!" — Wow expresses surprise`,
      simpleExplanation: `Think of parts of speech like ROLES in a movie:\n\n🎬 NOUN = the CHARACTER (main person or thing in the story)\n🏃 VERB = the ACTION (what the character does)\n🎨 ADJECTIVE = the COSTUME (how the character looks/feels)\n⚡ ADVERB = the HOW/WHEN (how/when the action happens)\n📍 PREPOSITION = the LOCATION (where the action takes place)\n🔗 CONJUNCTION = the SCRIPT CONNECTOR (joins story parts)\n😮 INTERJECTION = the EMOTIONAL REACTION\n👥 PRONOUN = the NICKNAME (avoids repeating the character's name)\n\nEvery good sentence has at least a NOUN and a VERB!`,
      hindiExplanation: `Parts of Speech = शब्द-भेद\n\nHindi grammar में जैसे संज्ञा, सर्वनाम, क्रिया होती है, वैसे ही English में 8 parts of speech हैं:\n\n1. Noun = संज्ञा (Ram, Delhi, table)\n2. Pronoun = सर्वनाम (I, he, she, they)\n3. Verb = क्रिया (go, eat, run, is, are)\n4. Adjective = विशेषण (big, beautiful, three)\n5. Adverb = क्रियाविशेषण (quickly, very, always)\n6. Preposition = संबंधसूचक (in, on, at, under)\n7. Conjunction = समुच्चयबोधक (and, but, or, because)\n8. Interjection = विस्मयादिबोधक (Oh!, Wow!, Oops!)\n\nBest trick to remember: 'Never Prefer Violent Arguments At Clubbing Places Inside'`,
      rules: [
        { rule: "Every sentence must have a noun (or pronoun) and a verb", explanation: "The minimum requirement for a complete English sentence is a subject (noun/pronoun) and a predicate (verb).", example: "Rahul runs. (Rahul=noun, runs=verb) | She laughed. (She=pronoun, laughed=verb)" },
        { rule: "The same word can be different parts of speech", explanation: "In English, a word's part of speech depends on HOW it's used in the sentence, not the word itself.", example: "'Book' as noun: I read a book. | 'Book' as verb: Please book a ticket." },
        { rule: "Adjectives come before nouns in English (usually)", explanation: "Unlike some languages, English adjectives typically come BEFORE the noun they describe.", example: "A beautiful flower (NOT: a flower beautiful)" },
        { rule: "Adverbs often end in -ly", explanation: "Many adverbs are formed by adding -ly to adjectives. However, not all adverbs end in -ly (e.g., very, always, never, fast).", example: "quick → quickly | slow → slowly | beautiful → beautifully" },
      ],
      commonMistakes: [
        { wrong: "She is a good speak person.", correct: "She is a good speaker.", explanation: "'Speak' is a verb. We need a noun form here: 'speaker'. Always check the part of speech needed." },
        { wrong: "He runs very fastly.", correct: "He runs very fast.", explanation: "'Fast' can be both adjective AND adverb. Do NOT add -ly to make 'fastly'." },
        { wrong: "I went to the store yesterday for bought milk.", correct: "I went to the store yesterday to buy milk.", explanation: "After 'to' (infinitive), use base verb (buy), not past tense (bought)." },
      ],
      sentencePatterns: [
        { pattern: "Identifying all 8 parts in one sentence", hindiPattern: "एक वाक्य में सभी 8 parts",
          examples: [
            { english: "Wow! She quickly ran to the store and bought food.", hindi: "Wow! वह जल्दी से दुकान पर गई और खाना खरीदा।" },
            { english: "Oh! He carefully placed the heavy box on the wooden table.", hindi: "ओह! उसने भारी बक्से को लकड़ी की मेज पर सावधानी से रखा।" },
          ]
        },
        { pattern: "Noun + Verb + Adjective combination", hindiPattern: "Noun + Verb + Adjective",
          examples: [
            { english: "The smart student studies hard every day.", hindi: "होशियार छात्र हर दिन कड़ी मेहनत से पढ़ता है।" },
            { english: "Beautiful flowers grow quietly in the garden.", hindi: "बगीचे में सुंदर फूल चुपचाप खिलते हैं।" },
            { english: "The honest manager made a fair decision quickly.", hindi: "ईमानदार manager ने जल्दी से एक उचित निर्णय लिया।" },
          ]
        },
      ],
      speakingTips: [
        "Practice identifying parts of speech in TV show dialogues — pause and label each word",
        "When you learn a new word, always learn what part of speech it is",
        "Make a sentence and tell a friend: 'This word is a noun, this is a verb...'",
        "Watch BBC/CNN news and identify: what words are nouns? What are verbs? Adjectives?",
      ],
      memoryTricks: [
        "NPPVAJCI = 'Never Prefer Picking Very Annoying Jobs, Certainly Inside' = Noun Pronoun Preposition Verb Adjective adverb Junction Conjunction Interjection",
        "Think NOUN = NAME of something, VERB = what it DOES, ADJECTIVE = how it LOOKS",
        "A sentence is a movie scene: NOUN=actor, VERB=action, ADJECTIVE=costume, ADVERB=how fast",
      ],
      professionalUsage: [
        { situation: "Writing professional emails", english: "Understanding parts of speech helps you write: 'The project was completed efficiently.' (project=noun, completed=verb, efficiently=adverb)", hindi: "Parts of speech की knowledge से professional writing improve होती है।" },
        { situation: "Grammar correction at work", english: "When your colleague writes 'Kindly do the needful immediate', you can correct: 'Kindly do the needful immediately' (adverb -ly needed)", hindi: "Office में grammar errors पहचानने में help करती है।" },
      ],
      dailyUsage: [
        { situation: "Improving daily speech", english: "Instead of 'I am go market', say 'I am going to the market'. (going=verb+ing, the=article, market=noun)", hindi: "Daily speech में grammar improve होती है।" },
      ],
      officeUsage: [
        { situation: "Report writing", english: "The team successfully completed the challenging project ahead of schedule.", hindi: "Parts of speech: team=noun, successfully=adverb, completed=verb, challenging=adjective, project=noun, schedule=noun।" },
      ],
      interviewUsage: [
        { situation: "Answering grammar questions", english: "Interviewer: 'What part of speech is the word humble?' Answer: 'Humble is primarily an adjective — it describes a person's character: He is a humble man.'", hindi: "Interview में grammar questions पूछे जाते हैं।" },
      ],
      story: {
        title: "The Grammar Kingdom",
        paragraphs: [
          "In the Kingdom of Grammar, there were 8 ministers, each with a special job.",
          "Lord Noun named all people and things. Lady Pronoun remembered all the names so people didn't repeat them. Sir Verb made sure everything was doing something.",
          "Duchess Adjective made everything beautiful and descriptive. Count Adverb told you HOW, WHEN, and WHERE things happened. Baron Preposition showed where things were placed.",
          "Sir Conjunction connected all the citizens together. And Interjection? She was the most dramatic one — she jumped up to express everyone's emotions!",
          "One day, a sentence arrived without its Verb. The kingdom fell into chaos! 'We cannot have a sentence without a Verb!' shouted Lord Noun.",
          "Sir Verb arrived and said, 'I will do the action!' Immediately, the sentence became complete: 'The students work hard every day.'",
          "From that day, every sentence needed at least a Noun and a Verb to be complete.",
        ],
        moral: "In English, every part of speech has a unique and essential role. Master all 8 and your English will be complete!",
        keyWords: [
          { word: "noun", meaning: "संज्ञा — naming word" },
          { word: "verb", meaning: "क्रिया — action/state word" },
          { word: "adjective", meaning: "विशेषण — describing word" },
          { word: "adverb", meaning: "क्रियाविशेषण — modifying word" },
        ],
      },
      essay: {
        title: "The 8 Parts of Speech: The Grammar Foundation",
        paragraphs: [
          "English grammar rests on 8 fundamental categories called Parts of Speech. Every single word in the English language belongs to one or more of these categories.",
          "The noun names people, places, things, and ideas. Without nouns, we cannot speak about anything. The verb brings nouns to life by showing their actions or states.",
          "Adjectives enrich our language by adding description. Without adjectives, we could not distinguish a 'big house' from a 'small house'. Adverbs add precision to verbs — 'she ran quickly' tells us more than 'she ran'.",
          "Prepositions create relationships between words, telling us WHERE and WHEN things happen. Conjunctions connect ideas, allowing complex thought. Pronouns prevent endless repetition. Interjections give emotional color.",
          "Together, these 8 parts create the complete system of English communication. A strong understanding of parts of speech is the foundation of excellent English.",
        ],
        keyPoints: [
          "8 Parts of Speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection",
          "Every sentence MUST have at least a noun/pronoun + verb",
          "Same word can be different parts of speech depending on usage",
          "Adjectives describe nouns; adverbs describe verbs/adjectives/adverbs",
          "Conjunctions (and, but, or, because) join words and clauses",
        ],
      },
      dialogue: {
        title: "What Part of Speech is This?",
        setting: "Students playing a grammar game in class.",
        lines: [
          { speaker: "Teacher", text: "Let's play a game! I say a sentence, you identify the parts of speech. Ready?", hindi: "चलो एक game खेलते हैं! मैं sentence बोलूंगी, तुम parts of speech बताओ।" },
          { speaker: "Students", text: "Ready, ma'am!", hindi: "तैयार, ma'am!" },
          { speaker: "Teacher", text: "The sentence is: 'Beautiful Priya quickly sang a sweet song.'", hindi: "Sentence है: 'Beautiful Priya quickly sang a sweet song.'" },
          { speaker: "Amit", text: "Priya and song are nouns! Sang is the verb!", hindi: "Priya और song nouns हैं! Sang verb है!" },
          { speaker: "Priya", text: "Beautiful and sweet are adjectives — they describe the nouns!", hindi: "Beautiful और sweet adjectives हैं — वे nouns को describe करते हैं!" },
          { speaker: "Rahul", text: "And quickly is an adverb — it tells HOW she sang!", hindi: "और quickly adverb है — यह बताता है कि वह KAISE गाई!" },
          { speaker: "Teacher", text: "Excellent! What about 'a'? That is an article — a special type of adjective!", hindi: "Excellent! 'a' के बारे में? वह article है — adjective का एक special type!" },
        ],
        notes: [
          "Articles (a, an, the) are special adjectives called 'determiners'",
          "To find the verb: ask 'What is the subject DOING?'",
          "To find an adjective: ask 'What KIND of noun is it?'",
          "To find an adverb: ask 'HOW/WHEN/WHERE did it happen?'",
        ],
      },
      summary: [
        "8 Parts of Speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection",
        "Noun = NAME (person/place/thing/idea) | Pronoun = REPLACEMENT (I, he, she, they)",
        "Verb = ACTION or STATE (run, eat, is, are, was) | Adjective = DESCRIPTION for nouns (big, red, fast)",
        "Adverb = MODIFIES verb/adjective (quickly, very, never) | Preposition = POSITION (in, on, at, under)",
        "Conjunction = CONNECTOR (and, but, or, because) | Interjection = EMOTION (Wow!, Oh!, Oops!)",
        "Every sentence needs: at least ONE NOUN/PRONOUN + ONE VERB",
        "Memory: 'The beautiful girl quickly ran into the store, but oh! she forgot her purse!' — all 8 parts present!",
      ],
    };
  }

  if (subtopicId === "d1-t3-s2") {
    return {
      id: "day1-d1-t3-s2", subtopicId,
      whyLearnThis: `Nouns are the MOST IMPORTANT part of speech! Every language — Hindi, Tamil, Telugu, Bengali — has nouns, and English is no different. A noun names EVERYTHING you can see, touch, feel, or think about.\n\nIn English communication:\n• 30-40% of all words are nouns\n• Every sentence has at least one noun\n• Nouns are the "stars" of sentences\n• Job titles, company names, city names — all nouns!\n\nMastering nouns means you can name everything around you in English. This is the foundation of all English communication.`,
      conceptExplanation: `A NOUN is the name of a person, place, thing, idea, or feeling.\n\nTYPES OF NOUNS:\n\n1. PROPER NOUN — specific names (always capitalized)\n• Person: Sachin Tendulkar, Narendra Modi, Priya Sharma\n• Place: Delhi, Mumbai, India, Amazon River\n• Brand/Company: Apple, Google, Infosys, Zomato\n• Days/Months: Monday, January\n\n2. COMMON NOUN — general names (not capitalized)\n• Person: boy, girl, teacher, doctor, student\n• Place: city, market, school, hospital, country\n• Thing: book, car, phone, table, water\n• Animal: dog, cat, bird, tiger, elephant\n\n3. ABSTRACT NOUN — ideas and feelings you can't touch\n• Emotions: love, happiness, anger, fear, joy\n• Qualities: honesty, kindness, intelligence, courage\n• Concepts: freedom, knowledge, education, success\n\n4. COLLECTIVE NOUN — names a group\n• A team of players\n• A flock of birds\n• A bunch of flowers\n• An army of soldiers\n• A class of students\n\n5. COUNTABLE vs UNCOUNTABLE:\n• Countable: book/books, car/cars (can count)\n• Uncountable: water, rice, sugar, advice (cannot count individually)`,
      simpleExplanation: `Simple rule: NOUN = ANYTHING YOU CAN NAME!\n\nAsk: "Is it a person, place, thing, or idea?" If YES → it's a noun!\n\nPerson: teacher, student, doctor, mother, friend\nPlace: Delhi, school, hospital, market, house\nThing: book, pen, phone, table, food\nIdea/Feeling: love, happiness, success, education\n\nCountable nouns can be made plural: book → books, car → cars\nUncountable nouns stay singular: water, rice, milk, advice`,
      hindiExplanation: `Noun = संज्ञा\n\nHindi में जैसे 'राम', 'दिल्ली', 'किताब', 'प्यार' संज्ञाएँ हैं, English में भी ऐसे ही हैं:\n• Proper Noun = व्यक्तिवाचक संज्ञा — Rahul, Delhi, India\n• Common Noun = जातिवाचक संज्ञा — boy, city, book\n• Abstract Noun = भाववाचक संज्ञा — love, happiness, success\n• Collective Noun = समूहवाचक संज्ञा — team, flock, bunch\n\nYaad karo: NOUN = जिसे हम NAME दे सकते हैं — वह NOUN है!`,
      rules: [
        { rule: "Proper nouns are always capitalized", explanation: "Names of specific people, places, companies, brands, days, months — all start with capital letters.", example: "I work at Infosys in Bangalore every Monday.", exception: "Common versions of proper nouns are lowercase: 'He is a doctor' vs 'His name is Dr. Sharma'" },
        { rule: "Add -s or -es to form plurals of countable nouns", explanation: "Most English nouns become plural by adding -s. Nouns ending in s, sh, ch, x, z add -es.", example: "book→books, car→cars, bus→buses, box→boxes, watch→watches" },
        { rule: "Uncountable nouns never take plural forms", explanation: "Some nouns represent things that cannot be counted individually and have no plural form.", example: "water (not waters), rice (not rices), advice (not advices), information (not informations)", exception: "In some special contexts: 'The waters of the Ganges' is poetic/figurative" },
        { rule: "Use 'a/an' with singular countable nouns", explanation: "When a countable noun appears alone for the first time, use 'a' (before consonant sounds) or 'an' (before vowel sounds).", example: "I saw a dog. She has an idea. He is a teacher." },
      ],
      commonMistakes: [
        { wrong: "I need some informations about this.", correct: "I need some information about this.", explanation: "'Information' is uncountable — it has no plural form. Same for: advice, news, furniture, luggage." },
        { wrong: "She gave me many advices.", correct: "She gave me a lot of advice.", explanation: "'Advice' is uncountable. Use 'a lot of advice' or 'some advice', NOT 'advices'." },
        { wrong: "I have two childrens.", correct: "I have two children.", explanation: "Irregular plural: child → children (NOT childs or childrens)." },
      ],
      sentencePatterns: [
        { pattern: "Proper nouns in sentences", hindiPattern: "Proper nouns के साथ",
          examples: [
            { english: "Rahul studies at Delhi University and works at Google.", hindi: "राहुल दिल्ली विश्वविद्यालय में पढ़ता है और Google में काम करता है।" },
            { english: "The Taj Mahal is in Agra, a city in Uttar Pradesh, India.", hindi: "ताज महल आगरा में है, जो भारत के उत्तर प्रदेश में एक शहर है।" },
          ]
        },
        { pattern: "Abstract nouns in sentences", hindiPattern: "Abstract nouns",
          examples: [
            { english: "Honesty and hard work are the keys to success.", hindi: "ईमानदारी और कड़ी मेहनत सफलता की चाबी हैं।" },
            { english: "Education gives us knowledge and confidence.", hindi: "शिक्षा हमें ज्ञान और आत्मविश्वास देती है।" },
            { english: "I feel happiness when I help others.", hindi: "जब मैं दूसरों की मदद करता हूँ तो मुझे खुशी होती है।" },
          ]
        },
        { pattern: "Countable and uncountable nouns", hindiPattern: "Countable और uncountable",
          examples: [
            { english: "Please give me some water and two glasses.", hindi: "कृपया मुझे कुछ पानी और दो गिलास दें।" },
            { english: "I need advice on buying furniture for my new house.", hindi: "मुझे अपने नए घर के लिए furniture खरीदने पर सलाह चाहिए।" },
          ]
        },
      ],
      speakingTips: [
        "When you see any object around you — name it in English! This builds your noun vocabulary",
        "Practice: 'This is a ___. Those are ___s.' Use singular and plural forms",
        "Collective nouns: practice saying 'a team of', 'a bunch of', 'a flock of' in sentences",
        "Abstract nouns practice: talk about values — 'Honesty is important. Kindness makes life better.'",
      ],
      memoryTricks: [
        "NOUN = NAME. If you can put 'a/an' or 'the' in front of it — it's a noun!",
        "Proper nouns = CAPITAL LETTER names (they are 'special', so they get capital)",
        "Uncountable nouns: WATER RICE MILK SUGAR ADVICE NEWS MONEY FURNITURE — things you can't count one by one",
        "Collective nouns: FLOCK of birds, PACK of wolves, CLASS of students, BOUQUET of flowers",
      ],
      professionalUsage: [
        { situation: "Job title nouns", english: "I work as a Software Engineer. My manager is a Senior Director. Our team has a Project Manager and two Business Analysts.", hindi: "Job titles सभी nouns हैं।" },
        { situation: "Company name nouns (proper)", english: "I am applying for a position at Wipro Technologies, which is headquartered in Bengaluru, Karnataka.", hindi: "Company और city names proper nouns हैं।" },
      ],
      dailyUsage: [
        { situation: "Shopping vocabulary", english: "I need to buy rice, flour, sugar, and some vegetables from the market.", hindi: "Shopping में countable और uncountable nouns दोनों आते हैं।" },
        { situation: "Describing your home", english: "My house has a living room, two bedrooms, a kitchen, and a bathroom.", hindi: "घर describe करते समय nouns important हैं।" },
      ],
      officeUsage: [
        { situation: "Professional vocabulary", english: "Please submit the report, presentation, and documentation before the deadline.", hindi: "Office में nouns: report, presentation, deadline, documentation।" },
      ],
      interviewUsage: [
        { situation: "Talking about achievements", english: "I have experience in project management, team leadership, and client communication.", hindi: "Interview में abstract nouns: experience, management, leadership, communication।" },
      ],
      story: {
        title: "Noun Hunt",
        paragraphs: [
          "Arjun's teacher gave the class a challenge: 'Find 50 nouns before tomorrow!'",
          "Arjun looked around his room. 'Bed! Table! Lamp! Phone! Book! Bag!' he called out, writing everything down.",
          "He went to the kitchen: 'Rice! Water! Sugar! Mother! Plate! Spoon!'",
          "Then he went outside: 'Street! Car! Tree! Dog! Bird! Mumbai!'",
          "Back home, he thought harder: 'Happiness! Love! Education! Success! Knowledge!' — these were nouns too, but he couldn't touch them!",
          "The next day, Arjun had written 63 nouns. His teacher was amazed. 'Wonderful! You found proper nouns, common nouns, AND abstract nouns!'",
          "Arjun smiled. 'I realized — everything has a name. And every name is a noun!'",
        ],
        moral: "Nouns surround you everywhere. Train your eyes and ears to notice them, and your English vocabulary will explode!",
        keyWords: [
          { word: "noun", meaning: "संज्ञा — naming word" },
          { word: "proper noun", meaning: "व्यक्तिवाचक — specific name with capital" },
          { word: "abstract noun", meaning: "भाववाचक — idea/feeling you can't touch" },
          { word: "countable", meaning: "गणनीय — can be counted (1 book, 2 books)" },
        ],
      },
      essay: {
        title: "Nouns: The Names of Our World",
        paragraphs: [
          "Nouns are the most fundamental part of speech in any language. They name everything that exists — from concrete objects we can touch to abstract concepts we can only think about.",
          "In English, nouns are categorized into four main types: proper nouns (specific names like Sachin Tendulkar or Mumbai), common nouns (general categories like teacher or city), abstract nouns (ideas and feelings like love or success), and collective nouns (groups like team or flock).",
          "Understanding countable and uncountable nouns is crucial for Indian learners. Words like 'information', 'advice', 'furniture', and 'luggage' are uncountable in English and cannot be made plural — a common source of errors.",
          "Expanding your noun vocabulary is the single fastest way to improve your English communication. When you know the names of things, people, places, and ideas — you can talk about anything!",
        ],
        keyPoints: [
          "4 types: Proper (Rahul), Common (boy), Abstract (love), Collective (team)",
          "Proper nouns always get capital letters",
          "Countable nouns have plurals: book/books | Uncountable do NOT: water, advice, information",
          "Use a/an with singular countable nouns",
          "Uncountable nouns use: some, any, much, a lot of (NOT a/an or numbers)",
        ],
      },
      dialogue: {
        title: "Noun Identification Game",
        setting: "Two students playing a vocabulary game at home.",
        lines: [
          { speaker: "Sonia", text: "Let's play 20 nouns in 1 minute! I'll say a category, you give nouns!", hindi: "चलो 1 minute में 20 nouns का game खेलते हैं!" },
          { speaker: "Dev", text: "Okay! Start!", hindi: "ठीक है! शुरू करो!" },
          { speaker: "Sonia", text: "Kitchen nouns — go!", hindi: "Kitchen के nouns — जाओ!" },
          { speaker: "Dev", text: "Spoon! Plate! Cup! Rice! Water! Oil! Knife! Refrigerator! Stove! Gas!", hindi: "Spoon, Plate, Cup, Rice, Water, Oil, Knife, Refrigerator, Stove, Gas!" },
          { speaker: "Sonia", text: "10 in 15 seconds! Now — abstract nouns!", hindi: "15 seconds में 10! अब — abstract nouns!" },
          { speaker: "Dev", text: "Love! Happiness! Fear! Anger! Hope! Courage! Wisdom! Knowledge! Success!", hindi: "Love, Happiness, Fear, Anger, Hope, Courage, Wisdom, Knowledge, Success!" },
          { speaker: "Sonia", text: "Excellent! See — nouns are everywhere! This is how you build vocabulary fast!", hindi: "Excellent! देखो — nouns सब जगह हैं! ऐसे vocabulary fast बनती है!" },
        ],
        notes: [
          "Abstract nouns are often formed from adjectives: brave→bravery, kind→kindness, wise→wisdom",
          "Nouns from verbs: develop→development, educate→education, achieve→achievement",
          "Collective nouns vary: pride of lions, parliament of owls, murder of crows",
          "Building noun vocabulary: name 10 things in each room of your house in English",
        ],
      },
      summary: [
        "NOUN = Name of any person, place, thing, idea, or feeling",
        "4 Types: Proper (Sachin/Delhi), Common (boy/city), Abstract (love/success), Collective (team/flock)",
        "Proper nouns ALWAYS have capital letters",
        "Countable nouns have plurals (book→books) | Uncountable nouns stay singular (water, advice, information, furniture)",
        "Use A/AN with singular countable nouns | Use SOME/ANY/MUCH with uncountable nouns",
        "Common uncountable mistakes: 'informations' ❌ → 'information' ✅ | 'advices' ❌ → 'advice' ✅",
        "Build noun vocabulary: name everything around you in English every day!",
      ],
    };
  }

  if (subtopicId === "d1-t3-s3") {
    return {
      id: "day1-d1-t3-s3", subtopicId,
      whyLearnThis: `Verbs are the HEART of every English sentence. Without a verb, you cannot have a complete sentence. Verbs are what make sentences ALIVE — they show what people do, feel, or experience!\n\nIn English, there are 3 types of verbs:\n• ACTION verbs (run, eat, write, speak)\n• LINKING verbs (is, are, was, were, seem, feel)\n• HELPING verbs (can, will, should, have, do)\n\nVerb tenses determine WHEN something happens — past, present, or future. Mastering verbs means mastering English time!`,
      conceptExplanation: `TYPES OF VERBS:\n\n1. ACTION VERBS — show physical or mental actions\n• Physical: run, jump, eat, write, speak, read, walk, sleep\n• Mental: think, know, believe, understand, remember, forget\n\n2. LINKING VERBS — connect subject to description (NOT actions!)\n• BE verbs: is, am, are, was, were, be, being, been\n• Sense verbs: look, sound, smell, taste, feel, appear, seem\n• Usage: "She IS happy" (is connects 'she' with 'happy')\n\n3. HELPING (AUXILIARY) VERBS — come before main verbs\n• Primary helpers: do, does, did, have, has, had, is, am, are\n• Modal helpers: can, could, will, would, shall, should, may, might, must\n• Usage: "I HAVE eaten." | "She CAN speak English."\n\nVERB FORMS:\nEvery verb has 5 forms:\n1. BASE: eat / go / speak\n2. SIMPLE PRESENT (3rd person): eats / goes / speaks\n3. PAST SIMPLE: ate / went / spoke\n4. PAST PARTICIPLE: eaten / gone / spoken\n5. PRESENT PARTICIPLE (-ING): eating / going / speaking`,
      simpleExplanation: `VERB = What the subject DOES or IS\n\nSimple rule: Ask "What is the subject DOING?" → That word is the VERB\n\n"Rahul RUNS every day." → What does Rahul do? RUNS → verb!\n"She IS a doctor." → What is she? IS → verb!\n"They CAN SPEAK English." → What can they do? SPEAK → verb (CAN is helping verb)\n\nEvery sentence needs at least ONE verb. If there's no verb, it's not a sentence!`,
      hindiExplanation: `Verb = क्रिया\n\nHindi में जैसे 'जाता है', 'खाता है', 'है' क्रिया हैं, English में:\n• Action verbs: go, eat, run, write, speak, read\n• Linking verbs: is, am, are, was, were (होना)\n• Helping verbs: can, will, should, have, do\n\nVerb के forms याद करो:\n• Go (जाना) → Goes → Went → Gone → Going\n• Eat (खाना) → Eats → Ate → Eaten → Eating\n• Speak (बोलना) → Speaks → Spoke → Spoken → Speaking\n\nTense = समय:\n• Present: I go / She goes\n• Past: I went / She went\n• Future: I will go / She will go`,
      rules: [
        { rule: "Add -s or -es to verb when subject is He/She/It (present tense)", explanation: "In simple present tense, with third-person singular subjects (he/she/it/name), add -s or -es to the verb.", example: "I go, You go, We go, They go BUT He goes, She runs, It works", exception: "Helping verbs don't change: She can swim (not swims after can)" },
        { rule: "Use base form after modal verbs", explanation: "After can, will, would, should, must, may, might — always use the BASE form of the verb (no -s, -ing, or past).", example: "She can swim (NOT swims). He should go (NOT goes). They must work (NOT worked)." },
        { rule: "Regular verbs add -ed for past tense", explanation: "Most English verbs form their past tense by adding -ed.", example: "walk→walked, talk→talked, play→played, work→worked, clean→cleaned", exception: "Irregular verbs change completely: go→went, eat→ate, speak→spoke, run→ran, see→saw" },
        { rule: "Present continuous uses is/am/are + verb-ing", explanation: "To show an action happening RIGHT NOW, use: is/am/are + verb + -ing", example: "I am eating. She is running. They are playing cricket right now." },
      ],
      commonMistakes: [
        { wrong: "She don't know the answer.", correct: "She doesn't know the answer.", explanation: "With He/She/It, use DOESN'T (not don't) for negative present tense." },
        { wrong: "I am go to school.", correct: "I am going to school.", explanation: "After am/is/are, use verb+ING form (going, not go)." },
        { wrong: "Yesterday I goed to the market.", correct: "Yesterday I went to the market.", explanation: "'Go' is an irregular verb. Past tense of go is WENT, not goed." },
      ],
      sentencePatterns: [
        { pattern: "Action verbs in simple present", hindiPattern: "Simple present में action verbs",
          examples: [
            { english: "I wake up at 6 AM every morning and exercise for 30 minutes.", hindi: "मैं हर सुबह 6 बजे उठता हूँ और 30 मिनट व्यायाम करता हूँ।" },
            { english: "She teaches English at a government school in Delhi.", hindi: "वह दिल्ली के एक सरकारी स्कूल में English पढ़ाती है।" },
            { english: "They work at Tata Motors and commute by local train.", hindi: "वे Tata Motors में काम करते हैं और local train से आते-जाते हैं।" },
          ]
        },
        { pattern: "Helping verbs with main verbs", hindiPattern: "Helping verbs के साथ",
          examples: [
            { english: "I can speak English and Hindi fluently.", hindi: "मैं अंग्रेजी और हिंदी धाराप्रवाह बोल सकता/सकती हूँ।" },
            { english: "You should practice speaking English every day.", hindi: "आपको हर दिन अंग्रेजी बोलने का अभ्यास करना चाहिए।" },
            { english: "She must submit the report before Friday.", hindi: "उसे शुक्रवार से पहले report जमा करनी होगी।" },
          ]
        },
        { pattern: "Past tense (regular and irregular verbs)", hindiPattern: "Past tense",
          examples: [
            { english: "Yesterday, I walked 5 km, ate healthy food, and called my friend.", hindi: "कल, मैं 5 km चला, स्वस्थ भोजन खाया, और अपने दोस्त को call किया।" },
            { english: "She went to Mumbai, met her manager, and spoke at the conference.", hindi: "वह मुंबई गई, अपने manager से मिली, और conference में बोली।" },
          ]
        },
      ],
      speakingTips: [
        "Practice 10 irregular verbs daily: go-went, eat-ate, speak-spoke, write-wrote, run-ran",
        "When speaking, SLOW DOWN on the verb — it carries the most meaning in the sentence",
        "Drill: 'I can... / I could... / I should... / I must...' — practice modal verbs in sentences about your day",
        "Common activity verbs to practice: wake up, get ready, commute, work, eat, study, watch, sleep",
      ],
      memoryTricks: [
        "VERB = VROOM! A verb makes the sentence move (like an engine!)",
        "He/She/It + -S on the verb: 'She DrinkS, He ThinkS, It WorkS' — the 'S' rule",
        "Can/Will/Should/Must + BASE verb (no s, no ed, no ing): 'She CAN swim' not 'swims'",
        "Top 5 irregular pairs to memorize: go/went, eat/ate, see/saw, give/gave, come/came",
      ],
      professionalUsage: [
        { situation: "Writing strong action verbs in resume", english: "I managed a team of 10 engineers. I developed a new mobile application. I achieved 150% of my sales target.", hindi: "Resume में strong action verbs: managed, developed, achieved, led, created, improved।" },
        { situation: "Email with modal verbs for politeness", english: "Could you please review the proposal? I would appreciate your feedback by tomorrow.", hindi: "Polite emails में: could, would, should — modal verbs।" },
      ],
      dailyUsage: [
        { situation: "Describing your daily routine", english: "I wake up at 7, get ready, eat breakfast, commute to work by metro, work till 6, and come home.", hindi: "Daily routine में action verbs important हैं।" },
      ],
      officeUsage: [
        { situation: "Reporting progress", english: "I have completed the design, submitted the report, and scheduled the review meeting for Thursday.", hindi: "Office में: have completed, submitted, scheduled — present perfect tense।" },
      ],
      interviewUsage: [
        { situation: "Describing experience", english: "I have led cross-functional teams, developed training programs, and successfully managed multiple projects simultaneously.", hindi: "Interview में strong past tense verbs: led, developed, managed।" },
      ],
      story: {
        title: "The Verb Champions",
        paragraphs: [
          "In a grammar contest, students had to make sentences using verbs correctly.",
          "The first student said, 'She go to market every day.' The judge buzzed: Wrong!",
          "The second student said, 'She goes to market every day.' The judge clapped: Correct! With he/she/it, add -s!",
          "The third student said, 'Yesterday I goed to school.' Buzz! Wrong!",
          "The fourth student paused, thought, and said: 'Yesterday I went to school.' Clap! Correct! 'Go' is irregular — went!",
          "The final challenge: 'I am study very hard.' The last student smiled: 'I am studying very hard.' The crowd cheered!",
          "The winner explained: 'After am/is/are, always use verb+ING. After do/does, use base form. After did, use base form. It is a pattern!'",
        ],
        moral: "Verb rules follow patterns. Learn the patterns, and verbs will never confuse you again!",
        keyWords: [
          { word: "action verb", meaning: "क्रिया-क्रियावाचक — showing action (run, eat, speak)" },
          { word: "linking verb", meaning: "संयोजक क्रिया — connecting word (is, am, are, seems)" },
          { word: "irregular verb", meaning: "अनियमित क्रिया — changes completely in past (go→went)" },
          { word: "tense", meaning: "काल — past, present, future" },
        ],
      },
      essay: {
        title: "Verbs: The Engine of English Sentences",
        paragraphs: [
          "If nouns are the stars of English sentences, then verbs are the engines that make everything move. Without a verb, a collection of words is not a sentence.",
          "English verbs are categorized into action verbs (run, eat, speak), linking verbs (is, am, are, seems), and helping/auxiliary verbs (can, will, should, have).",
          "One of the most challenging aspects for Indian learners is verb tense. English has 12 tenses, each expressing a different relationship with time. The key is to understand the FUNCTION of each tense, not just memorize rules.",
          "Another challenge is irregular verbs. Unlike regular verbs that simply add -ed for past tense (walk→walked), irregular verbs change completely: go→went, eat→ate, see→saw. The top 100 irregular verbs must be memorized.",
          "The most effective way to master verbs is to practice them in context. Read English daily, write sentences using new verbs, and speak every day. Gradually, correct verb usage will become automatic.",
        ],
        keyPoints: [
          "3 types: Action (run, eat), Linking (is, am, are), Helping (can, will, should, have)",
          "He/She/It + -s in simple present (she runs, he eats)",
          "Modal verbs (can/will/should/must) + BASE form (she can swim NOT swims)",
          "Regular past: add -ed (walk→walked) | Irregular: go→went, eat→ate, see→saw",
          "am/is/are + verb-ING for present continuous (I am eating, she is running)",
        ],
      },
      dialogue: {
        title: "Verb Tense Challenge",
        setting: "Two students practice verb tenses together.",
        lines: [
          { speaker: "Ananya", text: "Let me test you! What is the past tense of 'go'?", hindi: "'Go' का past tense क्या है?" },
          { speaker: "Rajan", text: "Went! I went to the market yesterday.", hindi: "Went! मैं कल बाजार गया।" },
          { speaker: "Ananya", text: "Correct! Now 'eat'?", hindi: "सही! अब 'eat'?" },
          { speaker: "Rajan", text: "Ate! She ate rice for lunch.", hindi: "Ate! उसने lunch में चावल खाया।" },
          { speaker: "Ananya", text: "Perfect! Now make a present continuous sentence with 'study'.", hindi: "Perfect! अब 'study' से present continuous sentence बनाओ।" },
          { speaker: "Rajan", text: "I am studying English right now. We are becoming better every day!", hindi: "मैं अभी English पढ़ रहा/रही हूँ। हम हर दिन बेहतर हो रहे हैं!" },
          { speaker: "Ananya", text: "Excellent! Notice how 'am studying' tells us the action is happening right now — that's the beauty of verb tenses!", hindi: "Excellent! देखो 'am studying' बताता है action अभी हो रहा है — यही verb tenses की खूबसूरती है!" },
        ],
        notes: [
          "Irregular verbs (must memorize): go/went, eat/ate, see/saw, take/took, give/gave, come/came",
          "Present continuous: am/is/are + VERB-ING (happening now or around now)",
          "He/She/It rule: add -s to verb in simple present (she works, he speaks)",
          "After modal verbs (can/will/should/must): always use BASE form",
        ],
      },
      summary: [
        "VERB = The action or state in a sentence — it makes sentences ALIVE",
        "3 Types: Action (run, eat), Linking (is, are, seems), Helping/Modal (can, will, should)",
        "He/She/It + -s in present: She RUNS, He EATS, It WORKS",
        "After modal verbs — BASE form: She CAN swim, He SHOULD go, They MUST work",
        "Present continuous: am/is/are + verb-ING: I am eating, She is studying",
        "Regular past: add -ed: walk→walked | Irregular: go→went, eat→ate, see→saw, come→came",
        "Top irregular pairs to memorize TODAY: go/went, eat/ate, see/saw, speak/spoke, write/wrote, run/ran, come/came, give/gave, take/took, make/made",
      ],
    };
  }

  if (subtopicId === "d1-t3-s4") {
    return {
      id: "day1-d1-t3-s4", subtopicId,
      whyLearnThis: `Adjectives make English BEAUTIFUL and SPECIFIC! Without adjectives, every car is just "a car" — not "a fast red sports car". Every person is just "a person" — not "a kind, intelligent, hardworking person".\n\nAdjectives help you:\n• Describe things precisely\n• Express your opinions and feelings\n• Sound more educated and articulate\n• Write vivid, interesting sentences\n• Impress in interviews ("I am a dedicated, results-driven professional")`,
      conceptExplanation: `An ADJECTIVE describes or modifies a NOUN.\n\nTYPES OF ADJECTIVES:\n\n1. DESCRIPTIVE — describes quality: big, small, beautiful, ugly, fast, slow, hot, cold\n2. NUMERIC — shows number: one, two, three, first, second, both, several, many\n3. POSSESSIVE — shows ownership: my, your, his, her, its, our, their\n4. DEMONSTRATIVE — points to: this, that, these, those\n5. INTERROGATIVE — asks questions: which, what, whose\n6. ARTICLE — a, an, the (always before nouns)\n\nFORMS OF ADJECTIVES (Degrees of Comparison):\n• POSITIVE — describing without comparing: big, fast, happy\n• COMPARATIVE — comparing two: bigger, faster, happier (than)\n• SUPERLATIVE — the most of all: biggest, fastest, happiest (of all)\n\nFORMATION RULES:\n• One syllable: add -er/-est: tall→taller→tallest, hot→hotter→hottest\n• Two+ syllables: use more/most: more beautiful, most intelligent\n• Irregular: good→better→best | bad→worse→worst | many→more→most`,
      simpleExplanation: `ADJECTIVE = Describing word for a NOUN\n\nAsk: "What KIND of noun is it?" → The answer is an adjective!\n\n"A BIG house" → What kind of house? BIG → adjective\n"A BEAUTIFUL girl" → What kind of girl? BEAUTIFUL → adjective\n"THREE students" → How many students? THREE → adjective\n\nIn English, adjectives come BEFORE the noun (unlike Hindi where they often come after):\n✅ "a beautiful flower" (NOT: "a flower beautiful")\n✅ "an intelligent student" (NOT: "a student intelligent")`,
      hindiExplanation: `Adjective = विशेषण\n\nHindi में जैसे 'बड़ा घर', 'सुंदर लड़की', 'तीन किताबें' में बड़ा, सुंदर, तीन विशेषण हैं।\nEnglish में भी ऐसे ही:\n• Big house, Beautiful girl, Three books\n\nFARK: Hindi में विशेषण noun के बाद भी आ सकता है: "वह लड़की सुंदर है"\nEnglish में adjective noun के पहले आता है: "She is a beautiful girl"\n\nComparison:\n• Positive: She is tall (वह लंबी है)\n• Comparative: She is taller than me (वह मुझसे लंबी है)\n• Superlative: She is the tallest in the class (वह class में सबसे लंबी है)`,
      rules: [
        { rule: "Adjectives come BEFORE the noun in English", explanation: "Unlike some languages, in English the adjective almost always precedes the noun it describes.", example: "a red apple, a tall building, an expensive car, the beautiful garden" },
        { rule: "Order of multiple adjectives before a noun", explanation: "When using multiple adjectives, use the NOSASMC order: Number, Opinion, Size, Age, Shape, Material, Color.", example: "Two lovely small antique round brown wooden boxes (number, opinion, size, age, shape, material, color)", exception: "In everyday speech, using 2-3 adjectives max is normal. More than 4 is unusual." },
        { rule: "Use 'more' and 'most' for long adjectives (2+ syllables)", explanation: "For adjectives with 2 or more syllables, use more (comparative) and most (superlative) instead of -er/-est.", example: "beautiful → more beautiful → most beautiful | intelligent → more intelligent → most intelligent" },
        { rule: "Irregular comparatives must be memorized", explanation: "Some adjectives change completely in comparative and superlative forms.", example: "good/well → better → best | bad → worse → worst | many/much → more → most | little → less → least" },
      ],
      commonMistakes: [
        { wrong: "This is more better than that.", correct: "This is better than that.", explanation: "'Better' is already the comparative of 'good'. Do not add 'more' to irregular comparatives." },
        { wrong: "She is the most tallest student.", correct: "She is the tallest student.", explanation: "'Tallest' already is superlative. Do not add 'most'. Use either -est OR most, never both." },
        { wrong: "He is more intelligent and sincere from all students.", correct: "He is the most intelligent and sincere of all students.", explanation: "Superlative uses 'the most...of all' or 'the...est of all', NOT 'from'." },
      ],
      sentencePatterns: [
        { pattern: "Descriptive adjectives", hindiPattern: "Descriptive adjectives",
          examples: [
            { english: "She has long, black, shiny hair and a beautiful, confident smile.", hindi: "उसके लंबे, काले, चमकदार बाल और एक सुंदर, आत्मविश्वासपूर्ण मुस्कान है।" },
            { english: "The tall, professional man in the gray suit is our new manager.", hindi: "gray suit में लंबा, professional आदमी हमारा नया manager है।" },
          ]
        },
        { pattern: "Comparative adjectives", hindiPattern: "Comparative (तुलनात्मक)",
          examples: [
            { english: "English is more widely spoken than any other language in the world.", hindi: "English दुनिया की किसी भी अन्य भाषा से अधिक व्यापक रूप से बोली जाती है।" },
            { english: "This new phone is faster and cheaper than the old model.", hindi: "यह नया फोन पुराने model से तेज़ और सस्ता है।" },
          ]
        },
        { pattern: "Superlative adjectives", hindiPattern: "Superlative (उत्कृष्ट)",
          examples: [
            { english: "She is the most dedicated student in the class.", hindi: "वह class की सबसे dedicated छात्रा है।" },
            { english: "This is the biggest opportunity of my career.", hindi: "यह मेरे career का सबसे बड़ा अवसर है।" },
            { english: "India has the largest English-speaking population in Asia.", hindi: "भारत में Asia में English बोलने वालों की सबसे बड़ी जनसंख्या है।" },
          ]
        },
      ],
      speakingTips: [
        "Practice describing 5 things around you using 3 adjectives each: 'a big, round, red clock'",
        "Learn adjective opposites as pairs: hot/cold, big/small, happy/sad, fast/slow, easy/difficult",
        "For interviews: practice describing yourself with positive adjectives: hardworking, dedicated, reliable, enthusiastic, creative",
        "Use adjectives in comparisons daily: 'This chai is better than yesterday's' 'Today is hotter than yesterday'",
      ],
      memoryTricks: [
        "ADJECTIVE comes BEFORE the noun. Think: ADJECTIVE is the noun's BODYGUARD — always walking in front!",
        "Comparatives: 1-syllable = -ER (taller, faster) | 2+ syllables = MORE (more beautiful)",
        "Superlatives: 1-syllable = -EST (tallest, fastest) | 2+ syllables = MOST (most beautiful)",
        "Irregular: good-better-BEST | bad-worse-WORST (remember: the BEST and WORST are irregular!)",
      ],
      professionalUsage: [
        { situation: "Resume/CV writing", english: "I am a dedicated, results-oriented professional with strong analytical skills and excellent communication abilities.", hindi: "Resume में adjectives: dedicated, results-oriented, strong, excellent।" },
        { situation: "Describing products/services", english: "We offer high-quality, affordable, and reliable IT solutions to small and medium businesses.", hindi: "Product description में: high-quality, affordable, reliable।" },
      ],
      dailyUsage: [
        { situation: "Describing food", english: "This spicy, crispy masala dosa is absolutely delicious — better than any restaurant I have ever visited!", hindi: "खाना describe: spicy, crispy, delicious, better।" },
        { situation: "Giving directions", english: "Go straight, take the second right turn, and you will see a tall, white building — that's our office.", hindi: "Directions में adjectives: straight, second, tall, white।" },
      ],
      officeUsage: [
        { situation: "Performance review language", english: "She has been an exceptional, proactive, and reliable team member who consistently delivers high-quality work.", hindi: "Performance review में: exceptional, proactive, reliable, high-quality।" },
      ],
      interviewUsage: [
        { situation: "Self-description", english: "I am an enthusiastic, hard-working, and detail-oriented person. I am a quick learner with strong problem-solving skills.", hindi: "Interview में: enthusiastic, hard-working, detail-oriented, quick learner।" },
      ],
      story: {
        title: "The Adjective Artist",
        paragraphs: [
          "Meena wanted to write a story. She wrote: 'A girl lived in a house. She had a dog. One day, they went to a park.'",
          "Her teacher read it and said, 'This is correct, Meena. But it is boring! Add adjectives to make it alive!'",
          "Meena thought hard. She rewrote: 'A beautiful, kind girl lived in a large, old house on a quiet street. She had a small, energetic, brown dog. One day, they went to a sunny, green park near their home.'",
          "Her teacher's eyes lit up. 'Now I can SEE your story! Adjectives create pictures in the reader's mind.'",
          "Meena realized: 'Without adjectives, everything is just a thing. With adjectives, things become VIVID and REAL!'",
          "She started adding adjectives everywhere — in her essays, her emails, even her WhatsApp messages. Her writing became much more engaging.",
        ],
        moral: "Adjectives are the colors of language. Use them generously and your English will paint beautiful pictures!",
        keyWords: [
          { word: "adjective", meaning: "विशेषण — describing word for nouns" },
          { word: "comparative", meaning: "तुलनात्मक — comparing two things" },
          { word: "superlative", meaning: "उत्कृष्ट — the most/best of all" },
          { word: "vivid", meaning: "जीवंत — very clear and bright" },
        ],
      },
      essay: {
        title: "Adjectives: The Colors of English",
        paragraphs: [
          "Adjectives bring color, life, and precision to English communication. They transform vague statements into vivid descriptions that engage the listener or reader.",
          "Without adjectives, 'She drives a car' tells us nothing special. With adjectives, 'She drives a sleek, red, high-performance sports car' creates a complete picture in our minds.",
          "For professional communication, strong adjectives are essential. Job descriptions, resumes, product descriptions, and presentations rely heavily on powerful adjectives to convey quality and value.",
          "Learning adjectives in semantic families — describing size (big/small/huge/tiny), quality (excellent/poor/outstanding), character (honest/reliable/dedicated) — allows learners to build rich, expressive vocabulary efficiently.",
        ],
        keyPoints: [
          "Adjectives describe NOUNS and come BEFORE them in English",
          "Comparative: one-syllable + ER (taller, faster) | multi-syllable: MORE + adjective (more beautiful)",
          "Superlative: one-syllable + EST (tallest, fastest) | multi-syllable: MOST + adjective (most beautiful)",
          "Irregular: good→better→best | bad→worse→worst",
          "Never double: NOT 'more bigger' or 'most tallest' — only ONE form at a time",
        ],
      },
      dialogue: {
        title: "Comparing Two Jobs",
        setting: "Two friends discussing job offers they both received.",
        lines: [
          { speaker: "Kiran", text: "I got two job offers! One from a small startup, one from a large multinational. Which should I choose?", hindi: "मुझे दो job offers मिले! एक small startup से, एक large multinational से।" },
          { speaker: "Prem", text: "What are the salaries? Is the startup paying more than the MNC?", hindi: "Salaries क्या हैं? क्या startup MNC से ज़्यादा pay कर रहा है?" },
          { speaker: "Kiran", text: "The startup pays less but offers more exciting work and faster career growth.", hindi: "Startup कम pay करता है लेकिन ज़्यादा exciting काम और faster career growth देता है।" },
          { speaker: "Prem", text: "And the MNC?", hindi: "और MNC?" },
          { speaker: "Kiran", text: "The MNC is more stable, more prestigious, and the work environment is excellent.", hindi: "MNC ज़्यादा stable, ज़्यादा prestigious है, और work environment excellent है।" },
          { speaker: "Prem", text: "Both sound good! But which feels more right to you? That is the most important question!", hindi: "दोनों अच्छे लगते हैं! लेकिन कौन सा ज़्यादा right feel होता है? यह सबसे important सवाल है!" },
        ],
        notes: [
          "Comparative adjectives for 2-syllable + words: more exciting, more stable, more prestigious",
          "Single-syllable: less (comparative) | least (superlative) — less pay, the least pay",
          "Notice: 'more right' → 'more correct' would be better English",
          "Superlative used: 'the most important' — comparing among all possible questions",
        ],
      },
      summary: [
        "ADJECTIVE = describing word for NOUNS | Always comes BEFORE the noun in English",
        "Types: Descriptive (big, red), Numeric (three, first), Possessive (my, his), Demonstrative (this, these)",
        "Positive: tall | Comparative (2): taller than | Superlative (3+): the tallest of all",
        "1-syllable: add -ER/-EST (tall→taller→tallest) | 2+ syllables: MORE/MOST (more beautiful, most intelligent)",
        "Irregular: good→better→BEST | bad→worse→WORST | much/many→more→MOST",
        "NEVER double: NOT 'more bigger' or 'most tallest' — that's a very common mistake",
        "Professional adjectives to learn: dedicated, reliable, proficient, efficient, proactive, innovative",
      ],
    };
  }

  if (subtopicId === "d1-t3-s5") {
    return {
      id: "day1-d1-t3-s5", subtopicId,
      whyLearnThis: `Adverbs add PRECISION to your English. They answer the questions that make communication complete:\n• HOW? (quickly, slowly, carefully)\n• WHEN? (yesterday, now, always, never)\n• WHERE? (here, there, everywhere, outside)\n• HOW MUCH/OFTEN? (very, quite, always, rarely)\n\nWithout adverbs, you cannot describe:\n• How quickly you work (efficiently, slowly, rapidly)\n• How often you exercise (daily, never, sometimes)\n• How well you speak (fluently, clearly, perfectly)\n• When things happen (yesterday, tomorrow, soon, already)`,
      conceptExplanation: `ADVERB = A word that modifies (describes) a VERB, ADJECTIVE, or another ADVERB\n\nTYPES OF ADVERBS:\n\n1. MANNER — HOW? (describes HOW something is done)\nquickly, slowly, carefully, loudly, softly, well, badly, fluently\n"She speaks English fluently." | "He works very hard."\n\n2. TIME — WHEN? (describes WHEN something happens)\nyesterday, today, tomorrow, now, soon, already, yet, still, recently\n"I will call you tomorrow." | "Have you eaten yet?"\n\n3. FREQUENCY — HOW OFTEN? (describes HOW OFTEN)\nalways (100%), usually, often, sometimes, rarely, never (0%)\n"I always wake up early." | "She never skips exercise."\n\n4. PLACE — WHERE? (describes WHERE something happens)\nhere, there, inside, outside, upstairs, nearby, everywhere\n"Please wait here." | "The keys are somewhere inside."\n\n5. DEGREE — HOW MUCH? (describes intensity of adjective/adverb)\nvery, quite, rather, too, extremely, absolutely, completely\n"She is very tall." | "He is quite intelligent."\n\nFORMATION: Most adverbs of manner are formed by adding -LY to adjectives:\nquick → quickly | slow → slowly | careful → carefully | beautiful → beautifully`,
      simpleExplanation: `ADVERB = tells HOW, WHEN, WHERE, or HOW OFTEN about a VERB or ADJECTIVE\n\nSimple test: If a word ends in -LY, it's probably an adverb!\n• quickly, slowly, carefully, beautifully, professionally\n\nBut NOT all adverbs end in -ly:\n• HOW OFTEN: always, never, sometimes, usually, often\n• WHEN: now, then, today, yesterday, soon\n• WHERE: here, there, inside, outside\n\nRemember: Adverb adds DETAIL to verbs and adjectives!`,
      hindiExplanation: `Adverb = क्रियाविशेषण\n\nAdverb बताता है:\n• कैसे (HOW): She speaks quickly. → वह जल्दी बोलती है।\n• कब (WHEN): I will come tomorrow. → मैं कल आऊंगा।\n• कहाँ (WHERE): Please sit here. → कृपया यहाँ बैठो।\n• कितनी बार (HOW OFTEN): He always studies. → वह हमेशा पढ़ता है।\n\nFrequency adverbs (कितनी बार):\n100% → Always (हमेशा)\n80% → Usually (आमतौर पर)\n60% → Often (अक्सर)\n40% → Sometimes (कभी-कभी)\n20% → Rarely (बहुत कम)\n0% → Never (कभी नहीं)`,
      rules: [
        { rule: "Form manner adverbs by adding -ly to adjectives", explanation: "Most adverbs of manner are created by adding -ly to the base adjective. Some spelling changes may occur.", example: "quick→quickly, slow→slowly, loud→loudly, careful→carefully, beautiful→beautifully", exception: "fast→fast (not fastly), hard→hard (not hardly — 'hardly' means 'almost not'), good→well (not goodly)" },
        { rule: "Frequency adverbs usually go BEFORE the main verb (but AFTER be verbs)", explanation: "Frequency adverbs (always, usually, often, sometimes, rarely, never) typically come before the main verb.", example: "I always eat breakfast. She never skips work. | BUT: She is always happy. (after 'is')" },
        { rule: "Adverbs of manner usually go after the verb (or after the object)", explanation: "Manner adverbs typically come after the main verb or at the end of a clause.", example: "She speaks clearly. | He finished the work quickly. | They played the game brilliantly." },
        { rule: "Use 'well' not 'good' as an adverb", explanation: "Good is an adjective. Well is its adverb form. Use well to describe HOW something is done.", example: "She speaks English well. (NOT: She speaks English good.) | He writes well. (NOT: goodly)" },
      ],
      commonMistakes: [
        { wrong: "She speaks English good.", correct: "She speaks English well.", explanation: "'Good' is an adjective. 'Well' is the adverb. Use 'well' to describe HOW she speaks." },
        { wrong: "I don't come here rarely.", correct: "I rarely come here. / I don't come here often.", explanation: "Double negative with 'rarely' creates confusion. Use 'rarely' with positive verb OR 'often' with negative." },
        { wrong: "He drives very fastly.", correct: "He drives very fast.", explanation: "'Fast' is both an adjective AND adverb. Never add -ly to make 'fastly' — it is incorrect." },
      ],
      sentencePatterns: [
        { pattern: "Adverbs of manner", hindiPattern: "तरीका बताने वाले adverbs",
          examples: [
            { english: "She handles difficult situations calmly and professionally.", hindi: "वह कठिन परिस्थितियों को शांति से और पेशेवर तरीके से handle करती है।" },
            { english: "He explained the concept clearly and patiently.", hindi: "उसने concept को clearly और patiently explain किया।" },
            { english: "The team worked efficiently and completed the project successfully.", hindi: "Team ने efficiently काम किया और project successfully complete किया।" },
          ]
        },
        { pattern: "Adverbs of frequency", hindiPattern: "आवृत्ति बताने वाले adverbs",
          examples: [
            { english: "I always wake up early, usually exercise, and sometimes meditate.", hindi: "मैं हमेशा जल्दी उठता हूँ, आमतौर पर exercise करता हूँ, और कभी-कभी meditation करता हूँ।" },
            { english: "She rarely misses a deadline and never compromises on quality.", hindi: "वह शायद ही कभी deadline miss करती है और कभी quality पर compromise नहीं करती।" },
          ]
        },
        { pattern: "Adverbs of degree", hindiPattern: "मात्रा बताने वाले adverbs",
          examples: [
            { english: "This is an extremely important topic that I find quite challenging.", hindi: "यह एक बेहद important topic है जो मुझे quite challenging लगता है।" },
            { english: "She is very dedicated and absolutely committed to her goals.", hindi: "वह बहुत dedicated है और अपने goals के प्रति absolutely committed है।" },
          ]
        },
      ],
      speakingTips: [
        "Add adverbs when describing your skills: 'I communicate clearly. I work efficiently. I solve problems creatively.'",
        "Frequency adverbs in routine descriptions: 'I usually/always/often/never...' — use them when describing habits",
        "Degree adverbs for intensity: very good → extremely good → absolutely excellent",
        "Practice: describe your day using at least 5 different adverbs",
      ],
      memoryTricks: [
        "ADVERB adds detail to VERBS (and adjectives). ADDS-VERB = AD-VERB!",
        "Manner adverbs = adjective + LY: quick+ly, slow+ly, beautiful+ly",
        "Frequency scale: ALWAYS (100%) → USUALLY → OFTEN → SOMETIMES → RARELY → NEVER (0%)",
        "Exceptions (no -ly): fast (not fastly), hard (not hardly), good→WELL (not goodly)",
      ],
      professionalUsage: [
        { situation: "Resume action statements", english: "Successfully managed 3 projects simultaneously. Consistently delivered results ahead of schedule. Efficiently reduced costs by 25%.", hindi: "Resume में adverbs: successfully, consistently, efficiently।" },
        { situation: "Professional self-description", english: "I work systematically, communicate proactively with stakeholders, and always meet deadlines.", hindi: "Professional description में: systematically, proactively, always।" },
      ],
      dailyUsage: [
        { situation: "Describing how you do things", english: "I carefully read all instructions before starting any task. I always double-check my work before submission.", hindi: "काम करने का तरीका: carefully, always, before।" },
      ],
      officeUsage: [
        { situation: "Giving feedback", english: "You have performed exceptionally well this quarter. Your reports are consistently clear, well-structured, and submitted promptly.", hindi: "Feedback में adverbs: exceptionally, consistently, clearly, promptly।" },
      ],
      interviewUsage: [
        { situation: "Describing work style", english: "I consistently meet deadlines, communicate proactively with my team, and always go beyond what is expected.", hindi: "Work style में: consistently, proactively, always, beyond।" },
      ],
      story: {
        title: "Adverbs at Work",
        paragraphs: [
          "Ramesh was new at his job. His manager asked him, 'How do you work?'",
          "Ramesh said, 'I work.' His manager waited. 'How do you work?'",
          "Ramesh didn't understand. 'What do you mean?'",
          "His manager said, 'I need adverbs! Quickly? Carefully? Efficiently? HOW?'",
          "Ramesh thought and said, 'I work carefully and systematically. I always meet deadlines. I communicate clearly with my team members. I rarely make mistakes because I check everything twice.'",
          "His manager smiled. 'NOW I understand how you work! Adverbs show HOW, WHEN, and HOW OFTEN. Without them, you just gave me a verb. With them, you gave me a complete picture!'",
          "Ramesh learned: adverbs turn simple actions into professional descriptions.",
        ],
        moral: "Adverbs transform your communication from vague to vivid. Use them to describe HOW you do things!",
        keyWords: [
          { word: "adverb", meaning: "क्रियाविशेषण — word that describes verbs and adjectives" },
          { word: "manner", meaning: "तरीका — HOW something is done (quickly, carefully)" },
          { word: "frequency", meaning: "आवृत्ति — HOW OFTEN (always, never, sometimes)" },
          { word: "degree", meaning: "मात्रा — HOW MUCH (very, quite, extremely)" },
        ],
      },
      essay: {
        title: "Adverbs: Adding Precision to English Communication",
        paragraphs: [
          "Adverbs are the precision tools of English grammar. They modify verbs, adjectives, and other adverbs to add crucial information about how, when, where, and how often things happen.",
          "The most common and essential adverbs for daily communication are frequency adverbs: always, usually, often, sometimes, rarely, and never. These adverbs describe our habits and routines with accuracy.",
          "Adverbs of manner — formed by adding -ly to adjectives — are particularly important for professional English. Words like efficiently, professionally, consistently, and proactively elevate ordinary sentences to impressive professional communication.",
          "Common errors include using 'good' instead of 'well' as an adverb ('she sings well' not 'she sings good'), and incorrectly forming adverbs from words like 'fast' (fast, not fastly) and 'hard' (hard, not hardly — which means 'almost not').",
        ],
        keyPoints: [
          "Adverbs modify VERBS, ADJECTIVES, and other ADVERBS",
          "Types: Manner (quickly), Time (yesterday), Frequency (always), Place (here), Degree (very)",
          "Form: adjective + -ly = adverb (quick→quickly, beautiful→beautifully)",
          "Exceptions: good→WELL, fast→fast, hard→hard",
          "Frequency order: Always(100%)→Usually→Often→Sometimes→Rarely→Never(0%)",
        ],
      },
      dialogue: {
        title: "How Do You Do It?",
        setting: "A job interview — the interviewer asks about work style.",
        lines: [
          { speaker: "Interviewer", text: "Can you describe how you approach your work?", hindi: "क्या आप बता सकते हैं कि आप अपने काम को कैसे approach करते हैं?" },
          { speaker: "Candidate", text: "Certainly! I work methodically and efficiently. I always plan my tasks before starting.", hindi: "ज़रूर! मैं methodically और efficiently काम करता/करती हूँ। मैं हमेशा शुरू करने से पहले अपने tasks plan करता/करती हूँ।" },
          { speaker: "Interviewer", text: "How do you handle tight deadlines?", hindi: "आप tight deadlines को कैसे handle करते हैं?" },
          { speaker: "Candidate", text: "I prioritize tasks carefully and communicate proactively with my team. I rarely miss a deadline because I plan thoroughly.", hindi: "मैं tasks को carefully prioritize करता/करती हूँ और अपनी team के साथ proactively communicate करता/करती हूँ।" },
          { speaker: "Interviewer", text: "Excellent! I notice you use adverbs very well — methodically, efficiently, carefully, proactively. That shows great command of English!", hindi: "Excellent! मैंने notice किया आप adverbs बहुत well use करते हैं। यह English पर great command दिखाता है!" },
        ],
        notes: [
          "Manner adverbs in professional context: methodically, efficiently, carefully, proactively",
          "Frequency in professional context: always (shows reliability), rarely (shows competence)",
          "Position: Frequency adverbs before main verb: I always plan (not: I plan always)",
          "Using adverbs in interviews shows advanced English proficiency",
        ],
      },
      summary: [
        "ADVERB describes VERBS, ADJECTIVES, and other ADVERBS — answers HOW/WHEN/WHERE/HOW OFTEN",
        "5 Types: Manner (quickly, carefully), Time (yesterday, now), Frequency (always, never), Place (here, inside), Degree (very, quite)",
        "Formation: adjective + -LY = adverb: quick→quickly, careful→carefully",
        "Exceptions: good→WELL (not goodly) | fast→fast (not fastly) | hard→hard",
        "Frequency scale: ALWAYS(100%) → USUALLY → OFTEN → SOMETIMES → RARELY → NEVER(0%)",
        "Frequency adverbs go BEFORE main verb (I always eat) but AFTER be verbs (I am always hungry)",
        "Professional power adverbs: consistently, efficiently, proactively, systematically, successfully",
      ],
    };
  }

  // Topics 4 and 5: Sentence structure and Punctuation
  if (subtopicId === "d1-t4-s1") {
    return {
      id: "day1-d1-t4-s1", subtopicId,
      whyLearnThis: `SVO — Subject + Verb + Object — is the most fundamental pattern in English! Every English sentence follows this order. Once you understand this, you can build UNLIMITED sentences!\n\nHindi often uses SOV order (Subject + Object + Verb):\n• Hindi: "मैं किताब पढ़ता हूँ" (I book read)\n• English: "I read a book" (I read a book — verb comes before object!)\n\nThis difference is why Hindi speakers often make word-order errors in English. Mastering SVO fixes this forever!`,
      conceptExplanation: `THE SVO PATTERN:\n\nS = SUBJECT — WHO is doing the action? (person or thing)\nV = VERB — WHAT are they doing? (the action)\nO = OBJECT — WHO or WHAT is the action done to? (receives the action)\n\nBasic examples:\n• I eat rice. (I=Subject, eat=Verb, rice=Object)\n• She reads books. (She=Subject, reads=Verb, books=Object)\n• They play cricket. (They=Subject, play=Verb, cricket=Object)\n\nEXPANDING THE PATTERN:\n• Add time/place: I eat rice at home every day.\n• Add adjectives: The hungry student ate hot biryani.\n• Add adverbs: She reads interesting books quickly.\n\nTWO TYPES OF OBJECTS:\n• DIRECT OBJECT — directly receives the action: "She gave milk" (milk=direct object)\n• INDIRECT OBJECT — benefits from the action: "She gave him milk" (him=indirect object, milk=direct)`,
      simpleExplanation: `Think of SVO as building a sentence like building a sandwich:\n\n🍞 BREAD (Subject) = WHO is doing it?\n🥗 FILLING (Verb) = WHAT are they doing?\n🍞 BREAD (Object) = WHAT are they doing it TO?\n\nSentence = WHO + DOES WHAT + TO WHAT\n\n"Priya drinks coffee" = Priya (who) + drinks (does what) + coffee (what)\n"They watch movies" = They (who) + watch (does what) + movies (what)\n\nIn Hindi: WHO + TO WHAT + DOES WHAT\nIn English: WHO + DOES WHAT + TO WHAT\n← This flip is the KEY difference!`,
      hindiExplanation: `SVO = Subject + Verb + Object\n\nHindi SOV (मैं किताब पढ़ता हूँ) vs English SVO (I read a book)\n\nFARK YAHI HAI!\nHindi में verb last में आता है।\nEnglish में verb PEHLE आता है, object BAAD में।\n\nPractice:\n• मैं चाय पीता हूँ → I drink tea (not: I tea drink)\n• वह अंग्रेजी सीखती है → She learns English (not: She English learns)\n• हम क्रिकेट खेलते हैं → We play cricket (not: We cricket play)\n\nयाद करो: English = VERB PEHLE, Object BAAD!`,
      rules: [
        { rule: "English sentence order is Subject → Verb → Object", explanation: "English is an SVO language. The verb ALWAYS comes before the object, unlike in Hindi (SOV).", example: "I love English. (NOT: I English love) | She drinks water. (NOT: She water drinks)" },
        { rule: "Subject and verb must agree in number", explanation: "Singular subject → singular verb. Plural subject → plural verb.", example: "He eats. (singular) | They eat. (plural) | She runs. | We run." },
        { rule: "The subject is always a noun or pronoun", explanation: "The subject of a sentence is always a noun (name) or pronoun (I, you, he, she, we, they).", example: "RAHUL eats rice. | SHE reads books. | THE TEAM plays well." },
        { rule: "Some sentences have no object (intransitive verbs)", explanation: "Some verbs don't need an object. They make complete sense without it.", example: "She sleeps. | He runs. | They laughed. | The baby cried." },
      ],
      commonMistakes: [
        { wrong: "I daily English practice.", correct: "I practice English daily.", explanation: "Verb must come before object. 'I + practice (verb) + English (object) + daily (adverb)'." },
        { wrong: "She yesterday went market to.", correct: "She went to the market yesterday.", explanation: "Keep SVO order: Subject (She) + Verb (went) + Place (to the market) + Time (yesterday)." },
        { wrong: "My company from us bonus give.", correct: "My company gives us a bonus.", explanation: "Follow SVO: Company (S) + gives (V) + us a bonus (O). Never put verb at the end!" },
      ],
      sentencePatterns: [
        { pattern: "Basic SVO pattern", hindiPattern: "मूल SVO pattern",
          examples: [
            { english: "I study English every morning.", hindi: "मैं हर सुबह English पढ़ता/पढ़ती हूँ।" },
            { english: "She teaches mathematics at a government school.", hindi: "वह एक सरकारी स्कूल में गणित पढ़ाती है।" },
            { english: "They watch English movies to improve their language skills.", hindi: "वे अपनी language skills सुधारने के लिए English movies देखते हैं।" },
          ]
        },
        { pattern: "SVO with indirect object", hindiPattern: "Indirect object के साथ",
          examples: [
            { english: "The manager gave the team clear instructions.", hindi: "Manager ने team को clear instructions दिए।" },
            { english: "I sent my friend a birthday message.", hindi: "मैंने अपने दोस्त को birthday message भेजा।" },
          ]
        },
        { pattern: "Expanding SVO with details", hindiPattern: "Details के साथ SVO",
          examples: [
            { english: "The hardworking student successfully completed the difficult assignment on time.", hindi: "मेहनती छात्र ने कठिन assignment को समय पर successfully पूरा किया।" },
            { english: "My company recently launched an innovative new product in the Indian market.", hindi: "मेरी company ने recently Indian market में एक innovative new product launch किया।" },
          ]
        },
      ],
      speakingTips: [
        "Before speaking, mentally arrange: WHO → DOES WHAT → TO WHAT",
        "Practice translating from Hindi to English, changing SOV to SVO order",
        "Common habit: 'Mujhe pani chahiye' → Hindi SOV | English: 'I need water' — verb before object!",
        "Drill: Take 10 Hindi sentences and translate them in correct SVO order",
      ],
      memoryTricks: [
        "SVO = 'Subject is the BOSS — they come first!' 'Verb FOLLOWS the boss!' 'Object COMES LAST!'",
        "Think of it as 'WHO DID WHAT TO WHAT' — same order every time in English",
        "Hindi flips verb and object: मैं किताब पढ़ता हूँ = I READ BOOK. English: I READ BOOK (same order as the meaning!)",
      ],
      professionalUsage: [
        { situation: "Business writing", english: "Our team completed the project. The manager reviewed the proposal. The client approved the budget.", hindi: "Business writing में SVO order consistently follow होती है।" },
        { situation: "Email subject lines", english: "Team completed quarterly report. | Client approved new proposal. | Manager requested status update.", hindi: "Email subject lines में brief SVO pattern।" },
      ],
      dailyUsage: [
        { situation: "Telling about your day", english: "I woke up early. I ate breakfast. I took the metro. I reached office at 9. I attended three meetings.", hindi: "Daily routine: I + verb + object — simple SVO chains।" },
      ],
      officeUsage: [
        { situation: "Status updates", english: "I completed the design. I submitted the report. I scheduled the meeting. I sent the invitation.", hindi: "Office updates में clear SVO: I + completed/submitted/scheduled + object।" },
      ],
      interviewUsage: [
        { situation: "STAR format answers (Situation-Task-Action-Result)", english: "I led a team of 5 engineers. We developed a mobile application. The app reduced customer complaints by 40%.", hindi: "Interview में clear SVO sentences impress करती हैं।" },
      ],
      story: {
        title: "The Sentence Builder",
        paragraphs: [
          "Suresh always made word-order mistakes. He would say 'I daily English practice' or 'She yesterday market went.'",
          "His friend Kavita said, 'I know a simple trick! Think of English as a train: ENGINE (Subject), COMPARTMENT (Verb), CARGO (Object).'",
          "'The engine goes first, then the compartment, then the cargo. Always in this order!'",
          "Suresh tried: 'I... (engine)... eat... (compartment)... rice... (cargo). I eat rice!' He got it right!",
          "'Now Hindi!' he laughed. 'मैं चावल खाता हूँ — in Hindi the cargo (rice) comes before the compartment (eat)!'",
          "'Exactly!' Kavita said. 'In English, the verb always comes BEFORE the object. That is the only major difference!'",
          "From that day, Suresh never made word-order errors again. The train trick saved him!",
        ],
        moral: "SVO order is the English train: Subject (engine) first, Verb (compartment) second, Object (cargo) last. Remember the train!",
        keyWords: [
          { word: "subject", meaning: "कर्ता — WHO is doing the action" },
          { word: "verb", meaning: "क्रिया — the action word" },
          { word: "object", meaning: "कर्म — what the action is done to" },
          { word: "SVO", meaning: "Subject-Verb-Object — English sentence order" },
        ],
      },
      essay: {
        title: "SVO: The Foundation of English Sentence Building",
        paragraphs: [
          "Every language has a preferred word order. English uses the Subject-Verb-Object (SVO) pattern, while Hindi and many other South Asian languages use Subject-Object-Verb (SOV).",
          "This single difference — where the verb appears in the sentence — is the source of most word-order errors made by Indian learners of English. In Hindi, we say 'मैं चाय पीता हूँ' (I tea drink), but in English, the verb 'drink' must come before 'tea': 'I drink tea'.",
          "Once the SVO pattern becomes natural, sentence construction becomes effortless. The subject (who is acting), the verb (what action), and the object (what receives the action) fall into place automatically.",
          "Expanding basic SVO sentences is simple: add adjectives before nouns, adverbs to modify verbs, and time/place phrases at the beginning or end. The core SVO pattern remains unchanged.",
        ],
        keyPoints: [
          "English = SVO (Subject-Verb-Object) | Hindi = SOV (Subject-Object-Verb)",
          "Verb ALWAYS comes before object in English",
          "Every sentence needs: at least a Subject + Verb",
          "Object can be added: I eat rice | I eat rice at home | I eat rice every morning at home",
          "To expand: add adjectives (to nouns), adverbs (to verbs), time/place phrases",
        ],
      },
      dialogue: {
        title: "Word Order Practice",
        setting: "A teacher correcting a student's spoken English.",
        lines: [
          { speaker: "Student", text: "Ma'am, I every day English practice at home.", hindi: "Ma'am, मैं हर दिन घर पर English practice करता हूँ।" },
          { speaker: "Teacher", text: "Good try! But let's fix the word order. First: WHO? That's 'I'. Then: WHAT DO I DO? That's 'practice'. Then: WHAT? That's 'English'.", hindi: "अच्छी कोशिश! लेकिन word order ठीक करते हैं।" },
          { speaker: "Student", text: "So... I practice English?", hindi: "तो... I practice English?" },
          { speaker: "Teacher", text: "Yes! And add 'every day at home' at the end for the details.", hindi: "हाँ! और details के लिए 'every day at home' अंत में जोड़ो।" },
          { speaker: "Student", text: "I practice English every day at home!", hindi: "I practice English every day at home!" },
          { speaker: "Teacher", text: "Perfect! Remember: SVO — Subject, Verb, Object — always in this order in English!", hindi: "Perfect! याद रखो: SVO — Subject, Verb, Object — English में हमेशा इसी order में!" },
        ],
        notes: [
          "SVO is the English DNA — never change this basic order",
          "Time and place can come at beginning OR end: 'Every day I practice' OR 'I practice every day' — both OK!",
          "But NEVER put verb at end: 'I English practice' ❌ — verb must come before object",
          "Practice translating Hindi sentences to English, consciously flipping the verb-object order",
        ],
      },
      summary: [
        "SVO = Subject + Verb + Object — the fundamental English sentence pattern",
        "English = SVO: 'I drink tea' | Hindi = SOV: 'मैं चाय पीता हूँ' — verb comes BEFORE object in English!",
        "Minimum sentence: Subject + Verb ('She runs.', 'He works.')",
        "Full sentence: Subject + Verb + Object + Place/Time ('She drinks coffee at home every morning.')",
        "Subject must agree with verb: He/She/It + -s on verb | I/We/They/You → base form",
        "Never put verb at end: 'I English speak' ❌ → 'I speak English' ✅",
        "Practice: take 10 Hindi sentences and convert them to English SVO order",
      ],
    };
  }

  if (subtopicId === "d1-t4-s2") {
    return {
      id: "day1-d1-t4-s2", subtopicId,
      whyLearnThis: `Positive (affirmative) sentences are the most common type of sentences in English. They state facts, share information, describe situations, and tell stories. 90% of all English communication uses positive sentences!\n\nMastering positive sentences means you can:\n• Describe yourself and your life\n• Share information about your work\n• Tell stories and experiences\n• Make statements and express opinions\n• Talk about facts and habits\n\nThis is where all English begins — with a simple, clear positive statement.`,
      conceptExplanation: `POSITIVE (AFFIRMATIVE) SENTENCES:\nA sentence that states something is TRUE or HAPPENING.\n\nPATTERN: Subject + Verb + Object/Complement\n\nSIMPLE PRESENT (habits and facts):\n• I work in an IT company.\n• She speaks English fluently.\n• They study every night.\n• He lives in Delhi.\n\nSIMPLE PAST (completed actions):\n• I worked on that project last year.\n• She spoke at the conference.\n• They studied for the exam.\n\nSIMPLE FUTURE (with will):\n• I will work harder next month.\n• She will speak at the event tomorrow.\n• They will study together tonight.\n\nPRESENT CONTINUOUS (action happening NOW):\n• I am working on a new project.\n• She is speaking to the manager.\n• They are studying for the exam right now.\n\nPRESENT PERFECT (completed action with present relevance):\n• I have completed the assignment.\n• She has spoken to the client.\n• They have studied this topic before.`,
      simpleExplanation: `POSITIVE = "YES, this is happening/true" sentences\n\n5 most used positive patterns:\n1. I work at Google. (simple present — fact/habit)\n2. I worked yesterday. (simple past — completed)\n3. I will work tomorrow. (future — plan)\n4. I am working now. (present continuous — now)\n5. I have worked there. (present perfect — experience)\n\nStart with Pattern 1 and 2. Master those first!`,
      hindiExplanation: `Positive sentences = सकारात्मक वाक्य (हाँ वाले sentences)\n\nSimple present (आदत/सत्य):\n• I eat rice. = मैं चावल खाता हूँ।\n• She teaches English. = वह English पढ़ाती है।\n\nSimple past (बीती बात):\n• I ate rice. = मैंने चावल खाया।\n• She taught English. = उसने English पढ़ाई।\n\nFuture (भविष्य):\n• I will eat rice. = मैं चावल खाऊंगा।\n• She will teach. = वह पढ़ाएगी।\n\nContinuous (अभी हो रहा):\n• I am eating. = मैं खा रहा हूँ।`,
      rules: [
        { rule: "He/She/It + -s/-es on verb in simple present", explanation: "Third person singular subjects take a different verb form in simple present tense.", example: "I work, You work, We work, They work | BUT: He works, She works, It works" },
        { rule: "Will + base form for future", explanation: "To talk about future actions or plans, use will + base form of the verb.", example: "I will go, She will speak, They will finish. | NOT: She will goes or She will speaking" },
        { rule: "Am/Is/Are + verb-ING for actions happening now", explanation: "Present continuous uses am (I), is (he/she/it), are (you/we/they) + verb-ing.", example: "I am reading. She is working. They are playing. We are learning." },
        { rule: "Have/Has + past participle for completed actions with present effect", explanation: "Present perfect uses have (I/you/we/they) or has (he/she/it) + past participle.", example: "I have finished. She has arrived. They have completed the project." },
      ],
      commonMistakes: [
        { wrong: "She go to office every day.", correct: "She goes to office every day.", explanation: "With She/He/It — add -s to verb in simple present." },
        { wrong: "I am finish my work.", correct: "I have finished my work. / I am finishing my work.", explanation: "'I am finish' is wrong. For present perfect: 'I HAVE FINISHED'. For continuous: 'I AM FINISHING'." },
        { wrong: "They will completes the task.", correct: "They will complete the task.", explanation: "After 'will', always use BASE form. Never add -s, -ed, or -ing after will." },
      ],
      sentencePatterns: [
        { pattern: "Simple present (habits/facts)", hindiPattern: "Simple present — आदत/सत्य",
          examples: [
            { english: "I wake up at 6 AM, exercise for 30 minutes, and eat a healthy breakfast.", hindi: "मैं 6 बजे उठता हूँ, 30 मिनट exercise करता हूँ, और healthy breakfast खाता हूँ।" },
            { english: "She teaches English grammar to 50 students every day at college.", hindi: "वह college में हर दिन 50 students को English grammar पढ़ाती है।" },
          ]
        },
        { pattern: "Present continuous (happening now)", hindiPattern: "Present continuous — अभी हो रहा",
          examples: [
            { english: "I am learning English because I want to get a better job.", hindi: "मैं English सीख रहा हूँ क्योंकि मुझे एक better job चाहिए।" },
            { english: "She is currently working on an important presentation for the client meeting.", hindi: "वह client meeting के लिए एक important presentation पर काम कर रही है।" },
          ]
        },
        { pattern: "Present perfect (experience/completion)", hindiPattern: "Present perfect — experience/completion",
          examples: [
            { english: "I have completed this course and I have improved my English significantly.", hindi: "मैंने यह course पूरा कर लिया है और मैंने अपनी English में significant improvement की है।" },
            { english: "She has worked at three different companies and has gained valuable experience.", hindi: "उसने तीन अलग-अलग companies में काम किया है और valuable experience gain किया है।" },
          ]
        },
      ],
      speakingTips: [
        "Practice describing your daily routine using simple present positive sentences",
        "Tell someone about what you are doing RIGHT NOW using present continuous",
        "Talk about your life experiences using present perfect: 'I have visited...', 'I have learned...'",
        "Write 5 positive sentences about yourself every morning — this builds confidence",
      ],
      memoryTricks: [
        "POSITIVE sentences = YES sentences — they AFFIRM something is true or happening",
        "She/He/It → -S on verb (simple present): 'She workS, He eatS, It moveS'",
        "Will + BASE (future): 'Will GO not will GOES', 'Will SPEAK not will SPOKE'",
        "Am/Is/Are + -ING (continuous): 'I AM going, She IS working, We ARE learning'",
      ],
      professionalUsage: [
        { situation: "Introducing yourself at work", english: "I work as a software engineer at Infosys. I have 3 years of experience in mobile app development. I currently lead a team of 5 developers.", hindi: "Professional introduction में positive sentences।" },
        { situation: "Status report", english: "I have completed the design phase. I am currently coding the backend. I will finish testing by Friday.", hindi: "Status updates: completed (perfect), am coding (continuous), will finish (future)।" },
      ],
      dailyUsage: [
        { situation: "Telling about your day", english: "I had a productive day. I attended three meetings, finished two reports, and helped a colleague solve a problem.", hindi: "Day describe: simple past positive sentences।" },
      ],
      officeUsage: [
        { situation: "Daily standup meeting", english: "Yesterday I completed the login module. Today I am working on the payment gateway. I will finish it by end of day.", hindi: "Daily standup: yesterday (simple past), today (continuous), will finish (future)।" },
      ],
      interviewUsage: [
        { situation: "Describing current situation", english: "I am currently working at ABC Company. I have been leading a cross-functional team for 2 years. I am looking for a new opportunity to grow.", hindi: "Interview में: am working (continuous), have been leading (perfect), am looking (continuous)।" },
      ],
      story: {
        title: "The Power of Positive Sentences",
        paragraphs: [
          "Aryan had one rule for his English learning: every day, he spoke 20 positive sentences.",
          "'I am learning English. I practice every day. I am getting better. I will speak fluently soon. I have already improved a lot.'",
          "His friends thought he was crazy. 'Why do you talk to yourself?'",
          "Aryan explained: 'I am training my brain! Positive sentences build positive thinking AND grammar skills!'",
          "Six months later, Aryan gave a presentation in English at his company. He spoke confidently, used correct tenses, and impressed everyone.",
          "'How did you get so good?' his colleagues asked.",
          "'20 positive sentences every day,' he smiled. 'It is the most powerful habit I have ever built.'",
        ],
        moral: "Positive sentences are the building blocks of English fluency. Speak them, write them, think in them — every single day!",
        keyWords: [
          { word: "affirmative", meaning: "सकारात्मक — stating something is true" },
          { word: "simple present", meaning: "सामान्य वर्तमान — current habits and facts" },
          { word: "present perfect", meaning: "पूर्ण वर्तमान — completed action with present effect" },
          { word: "continuous", meaning: "अपूर्ण — action still in progress" },
        ],
      },
      essay: {
        title: "Building Positive Sentences: The Foundation of English Communication",
        paragraphs: [
          "Positive (affirmative) sentences form the backbone of English communication. They assert facts, describe situations, share information, and tell stories — making up roughly 90% of everyday speech.",
          "English has multiple tenses for positive sentences, each serving a different purpose. The simple present describes habits and facts. The present continuous shows ongoing actions. The simple past narrates completed events. The future with 'will' expresses plans and predictions.",
          "For Indian learners, mastering positive sentence structures in all tenses is the fastest route to fluency. Once a learner can effortlessly produce correct positive sentences, adding negative and question forms becomes straightforward.",
          "Daily practice is key: write five positive sentences about your day each evening, read them aloud, and challenge yourself to use new vocabulary. This habit compounds over time into genuine fluency.",
        ],
        keyPoints: [
          "Positive sentences state TRUTH or FACTS — no negation or questioning",
          "5 key patterns: Simple Present (I eat), Past (I ate), Future (I will eat), Continuous (I am eating), Perfect (I have eaten)",
          "He/She/It + -s: She works, He eats, It runs",
          "Will + base form for future: I will go, She will speak",
          "Am/Is/Are + -ing for continuous: I am eating, She is working",
        ],
      },
      dialogue: {
        title: "The Daily English Diary",
        setting: "Two friends share their English learning routines.",
        lines: [
          { speaker: "Meera", text: "How is your English getting so good? Tell me your secret!", hindi: "तुम्हारी English इतनी अच्छी कैसे हो रही है? मुझे अपना secret बताओ!" },
          { speaker: "Karan", text: "I write 5 positive sentences about my day every night before sleeping.", hindi: "मैं हर रात सोने से पहले अपने दिन के बारे में 5 positive sentences लिखता हूँ।" },
          { speaker: "Meera", text: "Really? Like what?", hindi: "सच में? जैसे क्या?" },
          { speaker: "Karan", text: "Today I completed my project on time. I spoke English in a meeting. I learned 5 new words. I feel more confident every day.", hindi: "Today I completed my project. I spoke English in a meeting. I learned 5 new words." },
          { speaker: "Meera", text: "That is such a good habit! You are practicing 4 tenses — simple past, and present too!", hindi: "यह बहुत अच्छी habit है! तुम 4 tenses practice कर रहे हो!" },
          { speaker: "Karan", text: "Exactly! And tomorrow I will add present perfect sentences: 'I have improved. I have grown.' Try it!", hindi: "Exactly! और कल मैं present perfect sentences add करूंगा। Try करो!" },
        ],
        notes: [
          "Writing positive sentences daily is the most powerful speaking preparation",
          "Mix tenses naturally: today (simple past), now (continuous), tomorrow (future), overall (perfect)",
          "Read your sentences aloud after writing — this trains both writing AND speaking",
          "Challenge: Use a different tense in each sentence",
        ],
      },
      summary: [
        "POSITIVE sentences = Affirmative sentences that state facts or truth",
        "5 key tense patterns: Simple Present (she works), Past (she worked), Future (she will work), Continuous (she is working), Perfect (she has worked)",
        "Simple present rule: He/She/It + -S on verb",
        "Future rule: WILL + BASE form (never 'will works' or 'will worked')",
        "Continuous rule: am/is/are + VERB-ING",
        "Perfect rule: have/has + PAST PARTICIPLE (not base form or -ing)",
        "Daily practice: Write 5 positive sentences about your day → Read them aloud → Build real fluency!",
      ],
    };
  }

  if (subtopicId === "d1-t4-s3") {
    return {
      id: "day1-d1-t4-s3", subtopicId,
      whyLearnThis: `Negative sentences are essential for real communication! You need them every day:\n• "I don't understand" — key phrase for learners!\n• "I can't attend the meeting" — professional usage\n• "She doesn't speak Hindi" — describing others\n• "We didn't receive the email" — problem solving\n\nNegative sentences help you:\n• Decline politely\n• Correct misunderstandings\n• Express limitations\n• Describe what is NOT happening\n\nMastering negatives doubles your communication ability!`,
      conceptExplanation: `NEGATIVE SENTENCES — Saying something is NOT true/happening\n\nKEY WORDS: NOT, DON'T, DOESN'T, DIDN'T, WON'T, ISN'T, AREN'T, WASN'T, HAVEN'T, CAN'T\n\nSIMPLE PRESENT NEGATIVE:\n• I/You/We/They: don't + verb → "I don't know"\n• He/She/It: doesn't + verb → "She doesn't speak Hindi"\n\nSIMPLE PAST NEGATIVE:\n• All subjects: didn't + verb → "I didn't go" | "She didn't call"\n\nFUTURE NEGATIVE:\n• All subjects: won't + verb → "I won't come" | "They won't agree"\n\nPRESENT CONTINUOUS NEGATIVE:\n• am not/isn't/aren't + verb-ing → "I am not working" | "She isn't sleeping"\n\nBE VERB NEGATIVE:\n• I am not... | He/She/It is not (isn't)... | You/We/They are not (aren't)...\n\nMODAL VERB NEGATIVE:\n• can't (cannot), couldn't, won't, wouldn't, shouldn't, mustn't\n• "I can't come today." | "You shouldn't do that."`,
      simpleExplanation: `NEGATIVE = NO sentence (saying something is NOT true)\n\nFormula for negative:\nPositive: I know the answer.\nNegative: I DON'T know the answer.\n\nSimple rules:\n• Present: add DON'T (I/you/we/they) or DOESN'T (he/she/it)\n• Past: add DIDN'T (everyone — no exception!)\n• Future: add WON'T = will not\n• Continuous: add NOT after am/is/are → am not, isn't, aren't\n\nKey: After DON'T/DOESN'T/DIDN'T → always use BASE form!`,
      hindiExplanation: `Negative sentences = नकारात्मक वाक्य (नहीं वाले sentences)\n\nPresent negative:\n• I don't know. = मुझे नहीं पता।\n• She doesn't like coffee. = उसे coffee पसंद नहीं है।\n\nPast negative:\n• I didn't go. = मैं नहीं गया।\n• He didn't call. = उसने call नहीं किया।\n\nFuture negative:\n• I won't come. = मैं नहीं आऊंगा।\n• She won't agree. = वह agree नहीं करेगी।\n\nYAD KARO: Don't → I/You/We/They | Doesn't → He/She/It\nAur DIDN'T = sab ke liye same!`,
      rules: [
        { rule: "After don't/doesn't/didn't, use BASE form of verb", explanation: "When using don't, doesn't, or didn't, the main verb returns to its base (infinitive) form.", example: "She doesn't GOES → She doesn't GO (base) | He didn't WENT → He didn't GO (base)" },
        { rule: "Doesn't for He/She/It in simple present negative", explanation: "Use 'doesn't' with he, she, it, and names (singular third person). Use 'don't' for everyone else.", example: "She doesn't understand. | He doesn't agree. | It doesn't work. BUT: I don't know. They don't care." },
        { rule: "Didn't for ALL subjects in past negative", explanation: "Didn't is used with ALL subjects in simple past negative — no exceptions.", example: "I didn't come. You didn't come. He didn't come. She didn't come. We didn't come. They didn't come." },
        { rule: "Use NOT after be verbs to make them negative", explanation: "With am/is/are/was/were, add NOT directly (or use contractions isn't/aren't/wasn't/weren't).", example: "She is not happy. = She isn't happy. | They are not ready. = They aren't ready." },
      ],
      commonMistakes: [
        { wrong: "She doesn't knows the answer.", correct: "She doesn't know the answer.", explanation: "After 'doesn't', use BASE form. Drop the -s from 'knows' → 'know'." },
        { wrong: "I didn't went to school yesterday.", correct: "I didn't go to school yesterday.", explanation: "After 'didn't', always use BASE form. 'Went' is past — go back to base 'go'." },
        { wrong: "He is not know English.", correct: "He doesn't know English. / He is not fluent in English.", explanation: "Don't mix 'is not' with action verbs. Use doesn't for action verbs, 'is not' for state/description." },
      ],
      sentencePatterns: [
        { pattern: "Simple present negative", hindiPattern: "Present negative",
          examples: [
            { english: "I don't understand this topic, but I will study harder.", hindi: "मैं यह topic नहीं समझता, लेकिन मैं और मेहनत से पढ़ूंगा।" },
            { english: "She doesn't speak Hindi, but she communicates in English fluently.", hindi: "वह Hindi नहीं बोलती, लेकिन वह English में fluently communicate करती है।" },
            { english: "They don't use social media during working hours at the office.", hindi: "वे office में working hours के दौरान social media use नहीं करते।" },
          ]
        },
        { pattern: "Simple past negative", hindiPattern: "Past negative",
          examples: [
            { english: "I didn't know the answer, so I asked my colleague for help.", hindi: "मुझे जवाब नहीं पता था, इसलिए मैंने अपने colleague से मदद माँगी।" },
            { english: "She didn't receive the email, so the meeting was rescheduled.", hindi: "उसे email नहीं मिला, इसलिए meeting reschedule की गई।" },
          ]
        },
        { pattern: "Modal negative (can't, shouldn't, won't)", hindiPattern: "Modal negatives",
          examples: [
            { english: "I can't attend the meeting today because I have another appointment.", hindi: "मैं आज meeting में नहीं आ सकता क्योंकि मेरी एक और appointment है।" },
            { english: "You shouldn't skip breakfast — it affects your energy and focus all day.", hindi: "आपको breakfast नहीं छोड़ना चाहिए — यह पूरे दिन आपकी energy और focus को affect करता है।" },
          ]
        },
      ],
      speakingTips: [
        "Practice the polite decline: 'I'm sorry, I can't...', 'I don't think I can...', 'I'm afraid I won't...'",
        "Useful phrases to master: 'I don't understand', 'I'm not sure', 'I don't think so', 'I didn't know that'",
        "Soften negatives with fillers: 'Actually, I don't...' | 'To be honest, I can't...' | 'I'm afraid I don't...'",
        "Practice: for every positive sentence you say, also say the negative version",
      ],
      memoryTricks: [
        "PRESENT NEGATIVE cheat sheet: I DON'T | She DOESN'T | ALL DIDN'T (past)",
        "DOESN'T = 3rd person S 'counter'. She works (S) → She DOESN'T work (S removed from verb, given to doesn't)",
        "DIDN'T = DID NOT = one rule for EVERYONE in the past. No exceptions!",
        "After don't/doesn't/didn't → BASE FORM: She didn't WENT → She didn't GO",
      ],
      professionalUsage: [
        { situation: "Declining politely", english: "I'm afraid I can't attend the meeting tomorrow. I don't have access to those files. We didn't receive the confirmation email.", hindi: "Professional declining: can't (modal negative), don't have (present), didn't receive (past negative)।" },
        { situation: "Clarifying misunderstandings", english: "I didn't say that. She doesn't handle client accounts. Our team wasn't informed about this change.", hindi: "Clarification: didn't say (past), doesn't handle (present), wasn't informed (be verb negative)।" },
      ],
      dailyUsage: [
        { situation: "Expressing limitations", english: "I don't eat meat. I can't drive. I'm not free on Sundays. I didn't bring my wallet.", hindi: "Daily limitations: don't, can't, not free, didn't bring।" },
      ],
      officeUsage: [
        { situation: "Professional boundaries", english: "I don't check emails after 8 PM. I can't share confidential information. We aren't accepting new projects this quarter.", hindi: "Office boundaries में negative sentences।" },
      ],
      interviewUsage: [
        { situation: "Talking about what you don't know (honest answer)", english: "I don't have direct experience in that area, but I am a fast learner and I'm confident I can pick it up quickly.", hindi: "Honest limitation + positive follow-up।" },
      ],
      story: {
        title: "The Power of No",
        paragraphs: [
          "Pooja was always saying YES to everything at work. 'Can you work overtime?' YES. 'Can you take this extra project?' YES. She was exhausted!",
          "Her mentor said, 'Pooja, learn to say NO — in English!'",
          "She practiced: 'I can't take any more work right now. I don't have the capacity. I won't be able to give my best.'",
          "Her mentor smiled: 'Now use it! Say it professionally: I'm afraid I can't take on another project right now. My current workload doesn't allow it.'",
          "The next day, when her boss asked for extra work, Pooja said calmly: 'Sir, I appreciate the opportunity. However, I currently don't have the bandwidth. I'm already working on three urgent tasks.'",
          "Her boss respected her boundaries. 'Good. I didn't know you were overloaded. Let me reassign some work.'",
          "Pooja learned: negative sentences aren't negative — they are HONEST and PROFESSIONAL!",
        ],
        moral: "Knowing how to say 'no' professionally in English is as important as saying 'yes'. Negative sentences = honest communication!",
        keyWords: [
          { word: "negative sentence", meaning: "नकारात्मक वाक्य — saying NO or NOT" },
          { word: "capacity", meaning: "क्षमता — ability or available time" },
          { word: "bandwidth", meaning: "समय/ऊर्जा की उपलब्धता — available time and energy (professional term)" },
          { word: "decline", meaning: "मना करना — to say no politely" },
        ],
      },
      essay: {
        title: "Negative Sentences: Essential for Honest Communication",
        paragraphs: [
          "While positive sentences affirm and assert, negative sentences deny, limit, and clarify. Both are essential for complete communication in English.",
          "The most common negative words are not, don't, doesn't, didn't, can't, won't, isn't, and aren't. Each follows specific grammatical rules that must be mastered.",
          "The key rule that Indian learners must remember: after don't, doesn't, and didn't — always use the BASE form of the verb. Never say 'she doesn't goes' or 'I didn't went' — both are incorrect.",
          "In professional settings, negative sentences are crucial for maintaining boundaries, correcting misunderstandings, and honest communication. Mastering them makes you a more effective and honest communicator.",
        ],
        keyPoints: [
          "Present negative: I/You/We/They + DON'T + base | He/She/It + DOESN'T + base",
          "Past negative: ALL subjects + DIDN'T + base (no exceptions!)",
          "After don't/doesn't/didn't → ALWAYS base form (not past, not -ing)",
          "Be verb negative: is not (isn't), are not (aren't), was not (wasn't)",
          "Modal negative: can't, won't, shouldn't, mustn't",
        ],
      },
      dialogue: {
        title: "Polite Refusals at Work",
        setting: "A colleague asks another for help with extra work.",
        lines: [
          { speaker: "Colleague", text: "Can you help me with this extra report? It needs to be done by tonight.", hindi: "क्या तुम इस extra report में मेरी help कर सकते हो? यह आज रात तक complete होनी चाहिए।" },
          { speaker: "You", text: "I'm sorry, I can't tonight. I don't have time — I'm not free until 9 PM.", hindi: "मुझे खेद है, मैं आज रात नहीं कर सकता। मेरे पास time नहीं है।" },
          { speaker: "Colleague", text: "Oh! I didn't know you were busy. I won't ask you to rush then.", hindi: "ओह! मुझे नहीं पता था तुम busy थे। मैं तुमसे rush नहीं करवाऊंगा।" },
          { speaker: "You", text: "I'm not always this busy. Tomorrow I'm free and I don't have any deadlines. Can I help you then?", hindi: "मैं हमेशा इतना busy नहीं होता। कल मैं free हूँ और मेरे पास कोई deadline नहीं है।" },
          { speaker: "Colleague", text: "That would be perfect! I wasn't expecting such a helpful response. Thank you!", hindi: "वह perfect होगा! मुझे इतने helpful response की उम्मीद नहीं थी।" },
        ],
        notes: [
          "Polite negative: 'I'm sorry, I can't...' | 'I'm afraid I don't...' | 'Unfortunately, I won't...'",
          "Don't make excuses — just be direct and professional: 'I don't have time' not 'my dog is sick'",
          "Offer alternatives when declining: 'I can't today, but I can tomorrow'",
          "Notice: 'wasn't expecting' = past continuous negative (was not + -ing)",
        ],
      },
      summary: [
        "NEGATIVE sentences deny, correct, or limit — saying something is NOT true",
        "Present: I DON'T | She DOESN'T (+ base verb)",
        "Past: ALL + DIDN'T (+ base verb) — same for everyone, no exceptions!",
        "Future: ALL + WON'T (+ base verb)",
        "Be verb: is not / isn't | are not / aren't | was not / wasn't | were not / weren't",
        "Modal: can't, won't, shouldn't, mustn't (+ base verb)",
        "CRITICAL: After don't/doesn't/didn't → ALWAYS BASE FORM: She doesn't KNOW (not 'knows'), I didn't GO (not 'went')",
      ],
    };
  }

  if (subtopicId === "d1-t4-s4") {
    return {
      id: "day1-d1-t4-s4", subtopicId,
      whyLearnThis: `Questions are the most powerful tool in communication! Great communicators ask great questions. Questions help you:\n• Gather information: What time is the meeting?\n• Seek clarification: Could you explain that again?\n• Show interest: How long have you been in this role?\n• Make requests: Could you please send me the report?\n• Check understanding: Do you understand what I mean?\n\nIn English, question formation has specific rules that are very different from Hindi. Master these and you can participate in any English conversation!`,
      conceptExplanation: `TYPES OF QUESTIONS IN ENGLISH:\n\n1. YES/NO QUESTIONS — answered with Yes or No\nPattern: Auxiliary/Modal + Subject + Main Verb?\n• Do you speak English? — Yes, I do. / No, I don't.\n• Does she work here? — Yes, she does. / No, she doesn't.\n• Can you drive? — Yes, I can. / No, I can't.\n• Are you a student? — Yes, I am. / No, I'm not.\n\n2. WH- QUESTIONS — answered with information\nPattern: WH-Word + Auxiliary + Subject + Verb?\n• What do you do? — I am an engineer.\n• Where does she live? — She lives in Mumbai.\n• When did they arrive? — They arrived at 5 PM.\n• Who is your manager? — Mr. Verma is my manager.\n• Why are you learning English? — For better job opportunities.\n• How long have you worked here? — For 3 years.\n• How many people are in your team? — 7 people.\n\nWH-WORDS:\nWhat? — क्या / कौन सा\nWhere? — कहाँ\nWhen? — कब\nWho? — कौन\nWhy? — क्यों\nHow? — कैसे\nHow much? — कितना\nHow many? — कितने (countable)\nWhich? — कौन सा\nWhose? — किसका`,
      simpleExplanation: `QUESTION = asking for information with a rising voice!\n\n2 types:\n1. YES/NO question: Do/Does/Did/Can/Is/Are + Subject + Verb?\n2. WH- question: What/Where/When/Who/Why/How + Do/Does/Did + Subject + Verb?\n\nKEY TRICK: In questions, the AUXILIARY VERB comes BEFORE the subject!\n\nStatement: She WORKS at Google.\nQuestion: DOES she work at Google?\n\nStatement: They WENT to Mumbai.\nQuestion: WHEN did they go to Mumbai?`,
      hindiExplanation: `Question sentences = प्रश्नवाचक वाक्य\n\nHindi में question: "क्या वह Delhi में रहती है?"\nEnglish में: "Does she live in Delhi?"\n\nFARK: English में auxiliary verb (does/did/is/can) PEHLE aata hai:\n• You are ready. → Are you ready?\n• She can speak. → Can she speak?\n• They went. → Did they go?\n\nWH-words:\nWhat = क्या/क्या | Where = कहाँ | When = कब\nWho = कौन | Why = क्यों | How = कैसे`,
      rules: [
        { rule: "In questions, auxiliary verb comes BEFORE the subject", explanation: "To form a question, invert the subject and auxiliary verb. This is the opposite of statement order.", example: "She IS a doctor. → Is SHE a doctor? | They HAVE left. → HAVE they left?" },
        { rule: "Use DO/DOES for simple present questions, DID for past questions", explanation: "When there is no auxiliary verb in the statement, add do/does (present) or did (past) to form questions.", example: "She works here. → Does she work here? | They went. → Did they go? | You know him. → Do you know him?" },
        { rule: "After DO/DOES/DID in questions, use BASE form", explanation: "When forming questions with do/does/did, the main verb goes back to its base form.", example: "She WORKS → Does she WORK? (not 'does she works') | He WENT → Did he GO? (not 'did he went')" },
        { rule: "WH-word goes at the very beginning of the question", explanation: "The WH-word (what, where, when, who, why, how) is always the first word in a WH-question.", example: "What do you do? | Where does she live? | When did they arrive? | Why are you here?" },
      ],
      commonMistakes: [
        { wrong: "Where she lives?", correct: "Where does she live?", explanation: "Add 'does' as auxiliary for he/she/it questions. And use base form 'live' not 'lives'." },
        { wrong: "What you did yesterday?", correct: "What did you do yesterday?", explanation: "Use auxiliary 'did' + subject + base form. 'What DID you DO?' not 'What you did?'" },
        { wrong: "You are from Delhi? (question with statement order)", correct: "Are you from Delhi?", explanation: "In questions, the auxiliary (Are) must come BEFORE the subject (you). Never keep statement order for yes/no questions." },
      ],
      sentencePatterns: [
        { pattern: "Yes/No questions", hindiPattern: "हाँ/नहीं वाले questions",
          examples: [
            { english: "Do you speak English at work?", hindi: "क्या आप काम पर English बोलते हैं?" },
            { english: "Can you attend the meeting tomorrow?", hindi: "क्या आप कल meeting में आ सकते हैं?" },
            { english: "Have you completed the assignment?", hindi: "क्या आपने assignment complete की है?" },
          ]
        },
        { pattern: "WH-questions", hindiPattern: "WH-questions (information माँगना)",
          examples: [
            { english: "What do you do for a living, and where do you work?", hindi: "आप जीविका के लिए क्या करते हैं, और आप कहाँ काम करते हैं?" },
            { english: "How long have you been learning English?", hindi: "आप कब से English सीख रहे हैं?" },
            { english: "Why did you choose this career path?", hindi: "आपने यह career path क्यों चुनी?" },
          ]
        },
        { pattern: "Polite/indirect questions", hindiPattern: "Polite questions",
          examples: [
            { english: "Could you please tell me where the meeting room is?", hindi: "क्या आप कृपया मुझे बता सकते हैं कि meeting room कहाँ है?" },
            { english: "Would you mind explaining that again?", hindi: "क्या आपको दोबारा explain करने में कोई आपत्ति है?" },
          ]
        },
      ],
      speakingTips: [
        "In English, your voice RISES at the end of yes/no questions and FALLS at the end of WH-questions",
        "Practice 5 questions to ask in any new conversation: What do you do? Where are you from? How long have you... When did you...? Why did you choose...?",
        "Polite questions for professional settings: 'Could you...?', 'Would you mind...?', 'May I ask...?'",
        "Avoid over-using 'Can I ask...' in formal settings — use 'May I ask...' or 'Could I ask...' for more polish",
      ],
      memoryTricks: [
        "QUESTION INVERSION: Flip the subject and auxiliary! 'She IS' → 'IS she?' | 'They HAVE' → 'HAVE they?'",
        "No auxiliary? ADD one! 'She works' → 'DOES she work?' | 'They went' → 'DID they go?'",
        "WH-word = first. Do/Does/Did = second. Subject = third. Base verb = fourth.",
        "Remember: 'Did she WENT?' ❌ → 'Did she GO?' ✅ After DID: always BASE form!",
      ],
      professionalUsage: [
        { situation: "Job interview questions", english: "Could you tell me more about the team structure? What would my day-to-day responsibilities involve? When would I be expected to start?", hindi: "Interview questions: Could you tell, What would, When would।" },
        { situation: "Clarifying at meetings", english: "May I ask a question? Could you clarify the deadline? What exactly do you mean by that?", hindi: "Meeting clarification questions।" },
      ],
      dailyUsage: [
        { situation: "Getting directions", english: "Excuse me, could you tell me where the nearest metro station is? How long does it take to walk there?", hindi: "Direction questions: where is, how long does it take।" },
      ],
      officeUsage: [
        { situation: "Checking on tasks", english: "Have you reviewed the proposal? When can I expect your feedback? Is there anything you need from me?", hindi: "Task checking: Have you reviewed, When can, Is there।" },
      ],
      interviewUsage: [
        { situation: "Asking smart questions in interview", english: "What does success look like in this role? How would you describe the team culture? What opportunities are there for professional development?", hindi: "Interview questions show intelligence and interest।" },
      ],
      story: {
        title: "The Question Master",
        paragraphs: [
          "Vikram was shy at meetings. He never asked questions because he was afraid of making grammar mistakes.",
          "His mentor said, 'Questions show engagement! Learn 5 question structures and you will never be silent again.'",
          "Vikram practiced: 'What do you mean? Could you explain that? When is the deadline? How does this work? Why did we choose this approach?'",
          "At the next meeting, he used all 5. His boss was impressed: 'Vikram, good questions today! You're really engaged!'",
          "Vikram realized: questions didn't just help him understand — they showed his manager that he was thinking critically.",
          "He made a rule: ask at least 2 questions in every meeting. His questions became sharper, his English became stronger, and his career grew faster.",
        ],
        moral: "Questions are not just grammar — they are the language of curious, engaged, intelligent people. Ask more questions in English!",
        keyWords: [
          { word: "inversion", meaning: "उलटाव — flipping subject and auxiliary in questions" },
          { word: "auxiliary", meaning: "सहायक क्रिया — helping verb (do, does, did, can, will, is, are)" },
          { word: "WH-question", meaning: "WH-प्रश्न — question asking for specific information" },
          { word: "clarify", meaning: "स्पष्ट करना — to make something clear" },
        ],
      },
      essay: {
        title: "Questions: The Language of Curiosity and Connection",
        paragraphs: [
          "Questions are the most powerful form of communication in any language. In English, asking good questions demonstrates intelligence, curiosity, and engagement.",
          "English questions follow a specific inversion pattern: the auxiliary verb moves before the subject. 'She is a doctor' becomes 'Is she a doctor?' This inversion is the hallmark of English questions and is different from Hindi, where questions are formed primarily through intonation.",
          "WH-questions (using what, where, when, who, why, how) require both the WH-word at the front AND the auxiliary before the subject: 'Where does she work?' — not 'Where she works?'",
          "In professional settings, asking well-formed questions demonstrates both English proficiency and active engagement. Learning to ask polite questions (using 'Could you...?', 'Would you mind...?') is especially valuable in meetings, interviews, and client interactions.",
        ],
        keyPoints: [
          "Yes/No: Auxiliary + Subject + Verb? (Do you eat? Can she swim? Is he ready?)",
          "WH: WH-word + Auxiliary + Subject + Verb? (What do you do? Where does she live?)",
          "Add DO/DOES for present, DID for past when there's no auxiliary",
          "After do/does/did: ALWAYS BASE form (does she WORK not WORKS, did he GO not WENT)",
          "WH-word is ALWAYS first, then inversion: What + did + she + say?",
        ],
      },
      dialogue: {
        title: "The English Job Interview",
        setting: "A job interview where both interviewer and candidate ask questions.",
        lines: [
          { speaker: "Interviewer", text: "Good morning! Please tell me about yourself. What do you do currently?", hindi: "शुभ प्रभात! अपने बारे में बताइए। आप currently क्या करते हैं?" },
          { speaker: "Candidate", text: "I work as a software developer at XYZ company. May I ask — how long has this position been open?", hindi: "मैं XYZ company में software developer हूँ। क्या मैं पूछ सकता हूँ — यह position कब से खाली है?" },
          { speaker: "Interviewer", text: "Good question! It has been open for two months. Why are you looking for a change?", hindi: "अच्छा सवाल! यह दो महीनों से खाली है। आप बदलाव क्यों ढूंढ रहे हैं?" },
          { speaker: "Candidate", text: "I am looking for growth opportunities. Could you tell me about career progression in this role?", hindi: "मैं growth के अवसर ढूंढ रहा हूँ। क्या आप इस role में career progression के बारे में बता सकते हैं?" },
          { speaker: "Interviewer", text: "Absolutely! One more question — where do you see yourself in 5 years?", hindi: "बिल्कुल! एक और सवाल — आप 5 साल में खुद को कहाँ देखते हैं?" },
        ],
        notes: [
          "Candidates should also ask questions — it shows interest and preparation",
          "Polite question forms in interviews: May I ask...? Could you tell me...? Would you mind...?",
          "WH-questions in interviews: What does the role involve? Where is the office located? How large is the team?",
          "Notice: 'why are you looking' (continuous) vs 'why did you leave' (past) — tense matters!",
        ],
      },
      summary: [
        "2 types: YES/NO questions and WH-questions",
        "YES/NO: Auxiliary + Subject + Base Verb? → Do you eat? Can she swim? Is he ready?",
        "WH-questions: WH-word + Auxiliary + Subject + Base Verb? → What do you do? Where does she live?",
        "No auxiliary? ADD do/does (present) or did (past)",
        "CRITICAL: After do/does/did → ALWAYS BASE FORM: Does she WORK (not works), Did they GO (not went)",
        "Polite questions: Could you...? Would you mind...? May I ask...?",
        "Practice: ask 3 English questions every day — about your work, your learning, your goals!",
      ],
    };
  }

  // Topic 5: Punctuation
  if (subtopicId === "d1-t5-s1") {
    return {
      id: "day1-d1-t5-s1", subtopicId,
      whyLearnThis: `Punctuation is the TRAFFIC SYSTEM of English writing! Without it, everything crashes:\n\n"Let's eat children!" (cannibal?!) vs "Let's eat, children!" (healthy!)\n\nPunctuation tells readers:\n• Where to PAUSE (comma)\n• Where to STOP (full stop)\n• When to ASK (question mark)\n• When to be SURPRISED (exclamation mark)\n\nPoor punctuation makes writing confusing. Good punctuation makes writing clear, professional, and easy to read. For emails, reports, and formal writing — punctuation is NON-NEGOTIABLE!`,
      conceptExplanation: `THE THREE MOST IMPORTANT PUNCTUATION MARKS:\n\n1. FULL STOP (Period) — .\nMeaning: The sentence is COMPLETE. Full stop!\n\nUsage:\n• End of every statement: "I work at Google."\n• End of every command: "Please submit the report."\n• After abbreviations: Mr. Dr. etc. approx.\n\nNever use full stop after:\n• Question mark sentences: "Is she here?" (not: Is she here?.)\n• Exclamation marks: "Excellent work!" (not: Excellent work!.)\n\n2. COMMA — ,\nMeaning: Pause, but keep going. Not a full stop — just a breath!\n\nUsage:\n• Separating items in a list: "I need eggs, milk, bread, and butter."\n• Before conjunctions (but, and, or, so): "I am tired, but I will finish the work."\n• After introductory phrases: "After the meeting, we had lunch."\n• Setting off names/addresses: "Thank you, Rahul, for your help."\n• In dates and numbers: "15th March, 2024" | "1,000,000 people"\n\n3. QUESTION MARK — ?\nMeaning: This sentence is a question. The reader must answer.\n\nUsage:\n• After direct questions: "How are you?"\n• After any sentence that asks for information: "What is the meeting time?"\n• After polite requests in question form: "Could you please help me?"\n\nNever use question mark after:\n• Indirect questions: "I asked him where he was." (not: where he was?)\n• Statements about questions: "She wants to know the answer." (not: the answer?)`,
      simpleExplanation: `3 must-know punctuation marks:\n\n. (Full Stop) = COMPLETE STOP ← sentence is done!\n, (Comma) = BRIEF PAUSE ← keep going but take a breath\n? (Question Mark) = IT'S A QUESTION ← answer expected\n\nSimple rules:\n1. Every statement ends with .\n2. Use , when listing things: red, blue, green\n3. Use , before but, and, or: "I want to come, but I am busy"\n4. Every question ends with ?`,
      hindiExplanation: `Punctuation marks:\n• Full Stop (.) = पूर्ण विराम → sentence खत्म: "I am here."\n• Comma (,) = अल्प विराम → थोड़ा रुको: "I, you, and they are here."\n• Question Mark (?) = प्रश्नचिह्न → question है: "Are you here?"\n\nYaad rakhne ka trick:\n• Point (.) = Full POINT/STOP → RUKO!\n• Comma (,) = Comma/KURSI → थोड़ा बैठो, फिर चलो\n• Question (?) = Question mark? → POOCH RAHE HO!\n\nHindi mein: वाक्य के अंत में '।' | English mein: sentence के अंत में '.'`,
      rules: [
        { rule: "Every sentence ends with a full stop, question mark, or exclamation mark", explanation: "Every complete sentence MUST end with one of these three terminal punctuation marks.", example: "I am here. (full stop) | Are you here? (question mark) | Great job! (exclamation)" },
        { rule: "Use comma to separate three or more items in a list", explanation: "When listing three or more items, separate them with commas. Many style guides also use a comma before 'and' (Oxford comma).", example: "I bought apples, oranges, mangoes, and bananas." },
        { rule: "Use comma before coordinating conjunctions joining independent clauses", explanation: "When joining two complete sentences with and/but/or/so/yet/for, put a comma before the conjunction.", example: "I want to come, but I have other commitments. | She is qualified, and she has experience." },
        { rule: "Use question mark only after direct questions", explanation: "Question marks appear only at the end of sentences that directly ask for information. Indirect questions use full stops.", example: "Direct: 'Where are you going?' | Indirect: 'She asked where I was going.' (no question mark)" },
      ],
      commonMistakes: [
        { wrong: "Lets eat children.", correct: "Let's eat, children.", explanation: "Missing comma changes the entire meaning! Comma after 'eat' shows we're addressing 'children', not eating them." },
        { wrong: "I need to buy milk bread eggs and butter.", correct: "I need to buy milk, bread, eggs, and butter.", explanation: "Always separate list items with commas. Without commas, lists are confusing." },
        { wrong: "I want to know what time is the meeting?", correct: "I want to know what time the meeting is.", explanation: "Indirect question (inside a statement) does NOT get a question mark. Only direct questions get ?" },
      ],
      sentencePatterns: [
        { pattern: "Full stop in statements", hindiPattern: "Statements में full stop",
          examples: [
            { english: "I am learning English grammar. Punctuation is very important. Every sentence must end correctly.", hindi: "मैं English grammar सीख रहा हूँ। Punctuation बहुत important है। हर sentence सही तरह से खत्म होनी चाहिए।" },
            { english: "She works at Infosys in Bangalore. Her team has 20 members. They develop mobile applications.", hindi: "वह Bangalore में Infosys में काम करती है। उसकी team में 20 members हैं।" },
          ]
        },
        { pattern: "Commas in lists and sentences", hindiPattern: "Lists और sentences में commas",
          examples: [
            { english: "I speak English, Hindi, and a little French.", hindi: "मैं English, Hindi, और थोड़ी French बोलता हूँ।" },
            { english: "The report is clear, well-structured, and professionally written.", hindi: "Report clear, well-structured, और professionally written है।" },
            { english: "I wanted to attend the meeting, but I had a prior appointment.", hindi: "मैं meeting में आना चाहता था, लेकिन मेरी एक पहले से appointment थी।" },
          ]
        },
        { pattern: "Question marks", hindiPattern: "Question marks",
          examples: [
            { english: "What do you do? Where do you live? How long have you been learning English?", hindi: "आप क्या करते हैं? आप कहाँ रहते हैं? आप कितने समय से English सीख रहे हैं?" },
            { english: "Can you help me? Do you have any experience in this field?", hindi: "क्या आप मेरी help कर सकते हैं? क्या आपको इस field में experience है?" },
          ]
        },
      ],
      speakingTips: [
        "In spoken English, full stop = lower your voice and pause longer; comma = brief breath; question = raise voice at end",
        "Practice reading sentences aloud, pausing at commas and stopping at full stops — this trains natural rhythm",
        "When you read English text, notice where commas are and WHY they are placed there",
        "For clear communication: 'One idea, one sentence, one full stop.' — short sentences are better than long confusing ones",
      ],
      memoryTricks: [
        "Full Stop = DONE! End! Park the car! The sentence is finished!",
        "Comma = Quick BREATH. Like inhaling briefly before continuing.",
        "Question Mark = Your voice goes UP at the end? Like this? Yes? Questions go up!",
        "Lists: EVERY ITEM gets a comma except the last one that gets 'and': red, blue, green, and yellow",
      ],
      professionalUsage: [
        { situation: "Professional email writing", english: "Dear Mr. Sharma,\n\nI am writing regarding the project deadline. Could you please confirm whether Monday works for the handover? I have completed the design, the testing, and the documentation.\n\nBest regards,\nPriya", hindi: "Professional email में correct punctuation essential है।" },
        { situation: "Report writing", english: "The project was completed on time. The team worked efficiently, professionally, and within budget. However, some scope changes were made during execution.", hindi: "Report में punctuation: full stops, commas, और however के बाद comma।" },
      ],
      dailyUsage: [
        { situation: "WhatsApp professional messages", english: "Hi, I'm running 10 minutes late. Can you start without me? I'll join as soon as I arrive.", hindi: "Professional messages में punctuation important है।" },
      ],
      officeUsage: [
        { situation: "Meeting minutes", english: "Meeting Date: 15th March, 2024.\nAttendees: Mr. Kapoor, Ms. Singh, and Mr. Verma.\nDecision: The project deadline is extended to 31st March, 2024.", hindi: "Meeting minutes में perfect punctuation ज़रूरी है।" },
      ],
      interviewUsage: [
        { situation: "Written test essays", english: "English is important. It opens career opportunities. Without proper grammar and punctuation, professional communication suffers.", hindi: "Interview written test में punctuation grammar की तरह evaluate होती है।" },
      ],
      story: {
        title: "The Comma That Changed Everything",
        paragraphs: [
          "A famous example: 'A woman without her man is nothing.' vs 'A woman: without her, man is nothing.' — same words, completely different meaning because of punctuation!",
          "Suresh was a content writer. His article title: 'Let's cook dad.' His editor called immediately: 'Are you writing about cannibalism?!'",
          "Suresh was confused. His editor said: 'You need a comma! Let's cook, dad. You're calling your father to cook WITH you, not COOK your father!'",
          "Suresh turned red with embarrassment. He learned his lesson: 'Commas save lives — and reputations!'",
          "From that day, Suresh became the most careful punctuator in his office. He read every sentence twice, pausing at commas to check if the meaning was clear.",
          "'Punctuation is not decoration,' he told his team. 'It is the backbone of clear communication!'",
        ],
        moral: "A single misplaced or missing comma can completely change meaning. Learn punctuation — it could save your reputation!",
        keyWords: [
          { word: "punctuation", meaning: "विरामचिह्न — marks that structure written language" },
          { word: "full stop", meaning: "पूर्ण विराम — ends a sentence" },
          { word: "comma", meaning: "अल्पविराम — brief pause within a sentence" },
          { word: "question mark", meaning: "प्रश्नचिह्न — marks a direct question" },
        ],
      },
      essay: {
        title: "Punctuation: The Grammar of Clarity",
        paragraphs: [
          "Punctuation is the system of marks that organizes written English, guiding readers through text by indicating pauses, stops, questions, and emphasis. Without punctuation, written language would be an incomprehensible stream of words.",
          "The full stop (period) signals the end of a complete thought. Every statement must end with one. The comma creates structure within sentences — separating list items, joining independent clauses, and setting off introductory elements.",
          "The question mark, perhaps the most immediately recognizable mark, signals that a sentence is seeking information or confirmation. Its importance cannot be overstated in professional communication.",
          "For learners of English, mastering punctuation is as important as mastering grammar. A well-punctuated email or report demonstrates professionalism and attention to detail that is immediately noticed by readers.",
        ],
        keyPoints: [
          "Full stop (.) = ends every complete statement or command",
          "Comma (,) = separates list items, joins clauses with conjunctions, follows introductory phrases",
          "Question mark (?) = ends DIRECT questions only (not indirect ones)",
          "Never mix: Not '?' and '.' together. Not '!' and '.' together",
          "Comma before 'but/and/or' when joining two complete sentences: 'I want to come, but I'm busy.'",
        ],
      },
      dialogue: {
        title: "The Punctuation Lesson",
        setting: "A student and teacher review a written paragraph.",
        lines: [
          { speaker: "Teacher", text: "Ravi, can you read your paragraph aloud?", hindi: "Ravi, क्या तुम अपना paragraph ज़ोर से पढ़ सकते हो?" },
          { speaker: "Ravi", text: "'I study English every day I learn new words I practice speaking I want to get a good job'", hindi: "'I study English every day I learn new words I practice speaking I want to get a good job'" },
          { speaker: "Teacher", text: "Good sentences! But notice — you read it all without stopping. Where should the full stops go?", hindi: "अच्छे sentences! लेकिन देखो — तुमने बिना रुके सब पढ़ा। Full stops कहाँ होने चाहिए?" },
          { speaker: "Ravi", text: "After 'every day'... after 'new words'... after 'speaking'... and at the end!", hindi: "'every day' के बाद, 'new words' के बाद, 'speaking' के बाद, और अंत में!" },
          { speaker: "Teacher", text: "Excellent! Now let's add a comma: 'Every day, I study English.' The comma after 'every day' shows it's an introductory phrase.", hindi: "Excellent! अब comma add करते हैं: 'Every day, I study English.' 'Every day' के बाद comma introductory phrase दिखाता है।" },
          { speaker: "Ravi", text: "I see! Punctuation tells readers when to stop and when to breathe!", hindi: "मैं देख रहा हूँ! Punctuation readers को बताती है कब रुकना है और कब सांस लेनी है!" },
        ],
        notes: [
          "Always read your writing aloud — natural pauses show where commas go",
          "Full stop = complete stop in voice | Comma = brief breath | Question? = voice rises",
          "Every sentence = one idea, one full stop. Multiple sentences = multiple full stops.",
          "Rule of thumb: if a sentence is over 25 words, it probably needs a comma somewhere",
        ],
      },
      summary: [
        "FULL STOP (.) = ends every statement ('I work here.') and command ('Please submit.')",
        "COMMA (,) = separates list items: 'I need milk, eggs, and bread'",
        "COMMA before conjunctions (but/and/or) joining 2 sentences: 'I want to come, but I'm busy'",
        "COMMA after introductory phrases: 'In the morning, I exercise'",
        "QUESTION MARK (?) = ends direct questions only: 'Are you free?' NOT indirect: 'I asked if she was free.'",
        "NEVER end with both marks: Not '?.' or '!.' — pick one",
        "Life skill: Read writing aloud — your voice will tell you where punctuation belongs!",
      ],
    };
  }

  if (subtopicId === "d1-t5-s2") {
    return {
      id: "day1-d1-t5-s2", subtopicId,
      whyLearnThis: `Exclamation marks and apostrophes are used constantly in English, especially in professional and digital communication:\n\n• Exclamation marks show enthusiasm: "Great work!" "Excellent!" "Congratulations!"\n• Apostrophes show ownership and contractions:\n  - "Rahul's project is ready" (ownership)\n  - "I don't, she can't, he won't" (contractions)\n\nWithout apostrophes, you cannot write:\n• Don't, can't, won't, isn't, haven't (contractions)\n• Priya's phone, the team's decision (possession)\n\nBoth marks appear in EVERY English email, message, and document!`,
      conceptExplanation: `EXCLAMATION MARK — !\nShows STRONG EMOTION: surprise, excitement, happiness, alarm\n\nUSAGE:\n• Excitement: "I got the job!"\n• Surprise: "That is amazing!"\n• Warning: "Be careful!"\n• Commands with force: "Stop right there!"\n• Greetings with warmth: "Hello! Welcome!"\n\nRULES:\n• Only ONE exclamation mark (not !!!!!)\n• Do not overuse — saves its impact for truly strong emotions\n• Professional writing: use sparingly (max 1-2 per document)\n• Never combine with period: not "!."\n\n---\n\nAPOSTROPHE — '\n\n1. POSSESSION (showing ownership):\nSingular: Rahul's car, the student's book, India's culture\nPlural (ends in -s): the students' books, our parents' house\nPlural (doesn't end in -s): the children's toys, the men's room\n\nFormula:\n• ONE owner: owner + 's → Priya's phone\n• MORE owners: owners' → the students' results\n\n2. CONTRACTIONS (shortening two words into one):\nIs not → isn't | Are not → aren't | Was not → wasn't\nDo not → don't | Does not → doesn't | Did not → didn't\nWill not → won't | Cannot → can't | Have not → haven't\nI am → I'm | He is → He's | They are → They're\nI will → I'll | She has → She's | It is → It's`,
      simpleExplanation: `EXCLAMATION (!) = shows emotion — surprise, excitement, or alarm\nAPOSTROPHE (') = two uses: OWNERSHIP and SHORTENING\n\nOwnership: Rahul's car (car belonging to Rahul)\nShortening (contraction): don't = do + not | can't = can + not\n\nTrick to remember apostrophe for possession:\n→ "The car of Rahul" = "Rahul's car"\n→ "The book of the student" = "the student's book"\n\nCommon contractions to know:\nI am = I'm | Do not = Don't | Cannot = Can't\nWill not = Won't | Is not = Isn't | Are not = Aren't`,
      hindiExplanation: `Exclamation Mark (!) = विस्मयादिबोधक चिह्न\n• खुशी, आश्चर्य, जोश दिखाने के लिए\n• "Great job!" "Wow!" "Be careful!"\n\nApostrophe (') = दो uses:\n1. किसका = POSSESSION:\n   • Rahul's book = राहुल की किताब\n   • Team's decision = team का निर्णय\n\n2. दो शब्दों का मिलना = CONTRACTION:\n   • Don't = Do not (मत करो)\n   • Can't = Cannot (नहीं कर सकता)\n   • Won't = Will not (नहीं करूंगा)\n   • I'm = I am (मैं हूँ)\n   • It's = It is (यह है)`,
      rules: [
        { rule: "Add 's to singular nouns to show possession", explanation: "To show something belongs to a single person or thing, add apostrophe + s after the owner's name.", example: "Priya's laptop | the manager's office | India's economy | a child's toy" },
        { rule: "Add only apostrophe (no extra s) for plural nouns ending in -s", explanation: "When the owner word already ends in -s (most plurals), add only an apostrophe, no extra s.", example: "the students' results (many students) | our parents' house (two parents) | the teachers' meeting (many teachers)" },
        { rule: "Contractions: apostrophe replaces the missing letter(s)", explanation: "In contractions, the apostrophe shows where one or more letters have been removed.", example: "do + not = do[n]'t (n and o removed) | I + am = I'm (a removed) | will + not = won't (irregular)" },
        { rule: "It's vs Its: most confused punctuation in English", explanation: "IT'S = it is (contraction). ITS = belonging to it (possessive, NO apostrophe).", example: "It's a beautiful day. (= It is a beautiful day.) | The dog wagged its tail. (tail belonging to the dog)" },
      ],
      commonMistakes: [
        { wrong: "Its a great idea!", correct: "It's a great idea!", explanation: "'It's' = 'It is'. Always use 'it's' when you can replace it with 'it is'." },
        { wrong: "The students result's were excellent.", correct: "The students' results were excellent.", explanation: "'students'' (apostrophe after the s) = results belonging to many students. 'results' has no apostrophe — no possession here." },
        { wrong: "I cant come today!!!", correct: "I can't come today!", explanation: "Two issues: 'cant' needs an apostrophe (can't = cannot). Also, only ONE exclamation mark is professional." },
      ],
      sentencePatterns: [
        { pattern: "Apostrophe for possession", hindiPattern: "Possession के लिए apostrophe",
          examples: [
            { english: "Rahul's presentation was excellent, and the client's feedback was very positive.", hindi: "राहुल की presentation excellent थी, और client की feedback बहुत positive थी।" },
            { english: "India's economy is growing, and the country's technology sector is booming.", hindi: "India की economy बढ़ रही है, और देश का technology sector boom कर रहा है।" },
          ]
        },
        { pattern: "Contractions in natural speech", hindiPattern: "Contractions — natural speech",
          examples: [
            { english: "I don't know, but I'm sure we can find out if we try.", hindi: "मुझे नहीं पता, लेकिन मुझे यकीन है कि अगर हम कोशिश करें तो पता लगा सकते हैं।" },
            { english: "She can't attend, but she won't miss the recording.", hindi: "वह attend नहीं कर सकती, लेकिन वह recording miss नहीं करेगी।" },
          ]
        },
        { pattern: "Exclamation marks for enthusiasm", hindiPattern: "Enthusiasm के लिए !",
          examples: [
            { english: "Congratulations! You got the job! What amazing news!", hindi: "बधाई हो! आपको job मिल गई! क्या amazing खबर है!" },
            { english: "Excellent work on the project! The client is thrilled!", hindi: "Project पर excellent काम! Client बहुत खुश है!" },
          ]
        },
      ],
      speakingTips: [
        "Contractions make your speech sound natural and fluent — practice them daily",
        "Don't say 'I am not' in casual speech — say 'I'm not'. Don't say 'I will not' — say 'I won't'",
        "In formal speaking: use full forms (cannot, will not, do not) for emphasis and formality",
        "Exclamation in speech = rising tone + emphasis on key word: 'GREAT work!' 'AMAZING!'",
      ],
      memoryTricks: [
        "Apostrophe for possession: Think 'S is for SOMEBODY'S' — Rahul'S (belongs to somebody)",
        "It's vs Its: 'It's' = 'It is'. Can you replace it with 'it is'? Yes → IT'S. No → ITS.",
        "Contractions: the apostrophe is like a 'scar' where the letter was removed — don't, can't, won't",
        "Exclamation: use it like CAPITAL LETTERS in emotion. One is enough! Don't be 'oh my god!!!!!!!'",
      ],
      professionalUsage: [
        { situation: "Professional email with contractions", english: "I'm writing to confirm our meeting. I can't attend on Tuesday, but I'm free on Wednesday. Could you let me know if that works?", hindi: "Professional emails में contractions acceptable हैं।" },
        { situation: "Congratulations message", english: "Congratulations on your promotion! Your hard work has clearly paid off. The team's performance under your leadership has been outstanding!", hindi: "Congratulations में ! appropriate है।" },
      ],
      dailyUsage: [
        { situation: "WhatsApp message", english: "Hey! I'm on my way. I'll be there in 10 minutes. Don't worry, it's not far!", hindi: "Messages में contractions और ! natural हैं।" },
      ],
      officeUsage: [
        { situation: "Team appreciation email", english: "Team, excellent work this quarter! The client's satisfaction score has reached 95%. I'm proud of everyone's contribution.", hindi: "Team email में ! और apostrophe।" },
      ],
      interviewUsage: [
        { situation: "Avoiding multiple exclamation marks in emails", english: "Thank you for the interview opportunity! I am very interested in the position and look forward to hearing from you.", hindi: "Post-interview email में एक ! enough है।" },
      ],
      story: {
        title: "The Apostrophe's Adventure",
        paragraphs: [
          "Nisha was writing her first professional email. She typed: 'I cant attend the meeting. Its not possible due to my other commitments. Rahuls project needs my attention.'",
          "Her senior reviewed it. 'Nisha, three apostrophe errors! Can you spot them?'",
          "Nisha looked carefully. 'Cant should be can't!' She added the apostrophe.",
          "'And Its?' her senior asked. 'When we say Its, do we mean It is or it belongs to something?'",
          "'Oh! Here it means It is — so It's with an apostrophe!'",
          "'And Rahuls?' 'Rahul's — the project belongs to Rahul, so apostrophe before s!'",
          "Her senior smiled. 'Now you understand the two rules: apostrophes for contractions AND for possession. Never forget them!'",
        ],
        moral: "Apostrophes are small but mighty. Master just two rules — contraction and possession — and your writing becomes professional.",
        keyWords: [
          { word: "apostrophe", meaning: "अपोस्ट्रोफी — the ' mark" },
          { word: "contraction", meaning: "संक्षिप्त रूप — two words joined into one" },
          { word: "possession", meaning: "स्वामित्व — belonging to someone" },
          { word: "exclamation", meaning: "विस्मयादिबोधक — expressing strong emotion" },
        ],
      },
      essay: {
        title: "Apostrophes and Exclamation Marks: Small Marks, Big Impact",
        paragraphs: [
          "Among all punctuation marks, the apostrophe is perhaps the most frequently misused in English. Its two functions — marking contractions and showing possession — seem simple but cause endless confusion.",
          "The contraction function is straightforward: an apostrophe replaces missing letters. 'Do not' becomes 'don't', 'cannot' becomes 'can't', 'will not' becomes 'won't'. These contractions make spoken and written English sound natural and fluent.",
          "The possession function requires attention to the position of the apostrophe relative to the -s. For singular owners: Rahul's (apostrophe before s). For plural owners ending in -s: students' (apostrophe after s, no additional s).",
          "The exclamation mark, meanwhile, is powerful but must be used sparingly. In formal writing, one exclamation mark per document is often sufficient. Overusing them — especially multiple in a row (!!!) — appears unprofessional and immature.",
        ],
        keyPoints: [
          "Apostrophe for contraction: don't, can't, won't, I'm, it's = replaces missing letters",
          "Apostrophe for possession: Rahul's (single owner) | students' (plural owners)",
          "IT'S = it is (contraction) | ITS = belonging to it (no apostrophe!)",
          "Exclamation mark: strong emotion only, use sparingly (max 1 per professional message)",
          "Never: multiple exclamation marks (!!!), apostrophe in regular plurals (books not book's)",
        ],
      },
      dialogue: {
        title: "Apostrophe Practice",
        setting: "Friends texting about weekend plans.",
        lines: [
          { speaker: "Priya", text: "Hey! I'm planning a trip to Rahul's farm this weekend. It's going to be amazing!", hindi: "Hey! मैं इस weekend राहुल के farm जाने की planning कर रही हूँ। यह amazing होगा!" },
          { speaker: "Dev", text: "That sounds great! I can't come on Saturday, but I'm free on Sunday.", hindi: "यह great लगता है! मैं Saturday को नहीं आ सकता, लेकिन Sunday को free हूँ।" },
          { speaker: "Priya", text: "Sunday works! It's a 3-hour drive. Rahul's family will host us.", hindi: "Sunday ठीक है! यह 3 घंटे की drive है। राहुल की family हमें host करेगी।" },
          { speaker: "Dev", text: "I'll bring snacks. Don't worry about food for the journey!", hindi: "मैं snacks लाऊंगा। Journey के लिए खाने की चिंता मत करो!" },
          { speaker: "Priya", text: "Perfect! Can't wait. It'll be our first trip together in months!", hindi: "Perfect! बेसब्री से इंतजार है। यह महीनों में हमारी पहली trip होगी!" },
        ],
        notes: [
          "Count the apostrophes: I'm, can't, Rahul's, It's, It's, I'll, Don't, Can't, It'll",
          "Rahul's = possession (farm belonging to Rahul)",
          "It's = contraction (it is) — always check: can you say 'it is' here?",
          "Contractions in casual messages = natural and friendly tone",
        ],
      },
      summary: [
        "EXCLAMATION (!) = strong emotion (excitement, surprise, alarm) — use SPARINGLY, one at a time",
        "APOSTROPHE (') has TWO uses: CONTRACTION and POSSESSION",
        "CONTRACTION: replaces missing letters — don't, can't, won't, I'm, it's, they're",
        "POSSESSION: owner + 's → Priya's phone | plural owners + ' → students' results",
        "IT'S (it is) vs ITS (belonging to it) — most confused! Test: can you say 'it is'? Yes → IT'S",
        "Never use apostrophe for regular plurals: books NOT book's, students NOT student's",
        "Professional tip: contractions are OK in emails but NOT in formal reports/essays",
      ],
    };
  }

  if (subtopicId === "d1-t5-s3") {
    return {
      id: "day1-d1-t5-s3", subtopicId,
      whyLearnThis: `Quotation marks and colons are used in professional writing every day!\n\n• Quotation marks: direct speech, titles, special terms\n• Colon: lists, explanations, time writing\n\nYou'll use them in:\n• Emails: "Please see the attached: 1. Report 2. Presentation 3. Budget"\n• Reports: The manager said: "We need to improve quality."\n• WhatsApp: She told me, "Meet me at 5:30 PM."\n• Assignments: The book "The Alchemist" teaches life lessons.`,
      conceptExplanation: `QUOTATION MARKS — " "\n\n1. DIRECT SPEECH — exactly what someone said:\n• She said, "I am ready."\n• The teacher asked, "Do you understand?"\n• "Let's start the meeting," said the manager.\n\n2. TITLES — of books, movies, songs, articles:\n• I read "The Alchemist" last month.\n• "Titanic" is my favorite movie.\n• She wrote an article called "How to Learn English Fast."\n\n3. SPECIAL/TECHNICAL TERMS or UNUSUAL USE:\n• He called it a "bug" in the software.\n• She was considered "overqualified" for the job.\n\n---\n\nCOLON — :\n\n1. BEFORE A LIST:\n• I need three things: money, time, and patience.\n• The course covers: grammar, vocabulary, speaking, and writing.\n\n2. AFTER AN INTRODUCTION that INTRODUCES AN EXPLANATION:\n• There is one rule: never give up.\n• He had one dream: to speak English fluently.\n\n3. BETWEEN TITLE AND SUBTITLE:\n• "75 Days Hard English Course: Complete Beginner to Fluent"\n\n4. IN TIME:\n• The meeting is at 10:30 AM.\n• She arrives at 9:00 PM.\n\n5. IN FORMAL LETTERS:\n• Dear Sir/Madam:`,
      simpleExplanation: `" " = QUOTATION MARKS: use when writing WHAT SOMEONE SAID or TITLES\n: = COLON: use before LISTS and EXPLANATIONS\n\nQuotation marks:\n→ "Direct speech" goes inside quotes\n→ Book/movie titles go in quotes\n\nColon:\n→ Statement: list of things\n→ "Here is what you need: item1, item2, item3"\n→ Time: 10:30, 9:00 AM`,
      hindiExplanation: `Quotation marks (" ") = उद्धरण चिह्न\n• किसी के exact words को दिखाने के लिए: She said, "I am coming."\n• Book/movie के titles के लिए: "3 Idiots" is a great film.\n\nColon (:) = उपविराम\n• List से पहले: I need: pen, paper, and a ruler.\n• Time में: 10:30, 9:00 AM\n• Explanation के पहले: There is one rule: practice daily.\n\nFormula याद करो:\n"Quotation" = किसी का कहा हुआ\nColon: = आगे list या explanation`,
      rules: [
        { rule: "Quotation marks enclose the exact words someone spoke", explanation: "When writing what a person said word-for-word, enclose their exact words in quotation marks.", example: "The teacher said, \"Please open your books.\" | \"I am very happy to be here,\" she told us." },
        { rule: "Use a colon before a list when the introduction is a complete sentence", explanation: "When introducing a list with a complete sentence followed by specific items, use a colon.", example: "Please bring the following items: a pen, a notebook, and your ID card." },
        { rule: "Punctuation in direct speech goes INSIDE the quotation marks", explanation: "Commas, full stops, question marks, and exclamation marks that belong to the quoted speech go inside the closing quotation mark.", example: "She said, \"I will finish the work by tomorrow.\" | \"Are you ready?\" he asked." },
        { rule: "Colon before a single explanatory statement (apposition)", explanation: "A colon can introduce a single statement that explains or defines the idea before the colon.", example: "There is only one solution: hard work. | She has one goal: to speak English fluently." },
      ],
      commonMistakes: [
        { wrong: "She told me that: \"come quickly\".", correct: "She told me, \"Come quickly.\"", explanation: "Don't use a colon before direct speech. Use a comma. And capitalize the first word of the quote." },
        { wrong: "I need: a pen and a notebook.", correct: "I need a pen and a notebook. / I need the following: a pen and a notebook.", explanation: "Don't use a colon after an incomplete sentence (subject + need only). The introduction must be complete." },
        { wrong: "The movie \"Dangal\", was amazing.", correct: "The movie \"Dangal\" was amazing.", explanation: "No comma needed between the title in quotes and the rest of the sentence (unless it's an appositive)." },
      ],
      sentencePatterns: [
        { pattern: "Direct speech with quotation marks", hindiPattern: "Direct speech",
          examples: [
            { english: "The interviewer said, \"Tell me about yourself.\"", hindi: "Interviewer ने कहा, \"अपने बारे में बताइए।\"" },
            { english: "\"Congratulations on your promotion!\" said her manager. \"You deserve it!\"", hindi: "\"आपकी promotion पर बधाई!\" manager ने कहा। \"आप इसके लायक हैं!\"" },
          ]
        },
        { pattern: "Colon before lists", hindiPattern: "Lists के पहले colon",
          examples: [
            { english: "The interview will test three skills: communication, problem-solving, and teamwork.", hindi: "Interview तीन skills test करेगा: communication, problem-solving, और teamwork।" },
            { english: "To learn English fast, focus on these daily habits: reading, listening, speaking, and writing.", hindi: "English fast सीखने के लिए इन daily habits पर ध्यान दो: reading, listening, speaking, and writing।" },
          ]
        },
        { pattern: "Titles in quotation marks", hindiPattern: "Titles के लिए quotation marks",
          examples: [
            { english: "I read \"Rich Dad Poor Dad\" three times and it changed my perspective.", hindi: "मैंने \"Rich Dad Poor Dad\" तीन बार पढ़ा और इसने मेरा perspective बदल दिया।" },
            { english: "His TED talk \"How to speak English confidently\" has 10 million views.", hindi: "उनकी TED talk \"How to speak English confidently\" के 10 million views हैं।" },
          ]
        },
      ],
      speakingTips: [
        "When quoting someone in speech: lower your voice slightly and slow down for the quoted words",
        "Instead of air quotes (gesture), say 'She called it a so-called...' or 'What he termed as...'",
        "For titles in speech: emphasize the title: 'I watched The Dark Knight yesterday.'",
        "Practice saying times with colons: 'The meeting is at ten thirty' = 10:30 | 'See you at nine o'clock' = 9:00",
      ],
      memoryTricks: [
        "Quotation marks = BUBBLE around direct speech. Imagine the words in a speech bubble: \"Hello!\"",
        "Colon = ANNOUNCEMENT. It says 'HERE COMES THE LIST!' or 'HERE COMES THE EXPLANATION!'",
        "Time colon: Hours:Minutes = 10:30, 9:00 — the colon SEPARATES hours from minutes",
        "Remember: comma introduces direct speech, colon introduces lists/explanations",
      ],
      professionalUsage: [
        { situation: "Professional email with list", english: "Please ensure the following are ready before the meeting: the project report, the budget breakdown, and the timeline presentation.", hindi: "Professional emails में colon before list।" },
        { situation: "Quoting in professional writing", english: "As the CEO stated in the annual report: \"Our goal for 2024 is to expand to 10 new markets.\"", hindi: "Quotes in professional writing।" },
      ],
      dailyUsage: [
        { situation: "Quoting someone in conversation", english: "She said, \"Meet me at 6:30 PM at the coffee shop.\"", hindi: "Meeting arrangement में direct speech और time।" },
      ],
      officeUsage: [
        { situation: "Meeting agenda email", english: "Tomorrow's meeting agenda: 1. Project update 2. Budget review 3. Q&A session. Time: 10:00 AM - 11:30 AM.", hindi: "Meeting agenda में colon और time।" },
      ],
      interviewUsage: [
        { situation: "Quoting your achievements", english: "As my manager said in my review: \"Rahul is one of the most reliable team members we have.\"", hindi: "Interview में quotes from others strengthen your case।" },
      ],
      story: {
        title: "The Perfect Email",
        paragraphs: [
          "Ankit had to write an important email to a client. He needed to list deliverables and include what his manager had said.",
          "He wrote: 'Dear Mr. Sharma, As discussed my manager told to meet the following deadline project report budget presentation and timeline. He said the deadline is 15th March 9:00 AM'",
          "His senior reviewed it. 'Good content, poor punctuation. Let's fix it.'",
          "Together they rewrote: 'Dear Mr. Sharma, As discussed, my manager confirmed: \"The deadline is 15th March at 9:00 AM.\" Please ensure the following are ready: project report, budget, and presentation.'",
          "Ankit compared the two versions. 'The second one is so much clearer! The colon makes the list obvious. The quotation marks make it clear what my manager said.'",
          "His senior nodded. 'That's the power of punctuation. Same words — completely different professionalism.'",
        ],
        moral: "Quotation marks and colons transform good content into professional communication. Master them and your writing will look polished and authoritative.",
        keyWords: [
          { word: "quotation marks", meaning: "उद्धरण चिह्न — \" \" marks for direct speech and titles" },
          { word: "direct speech", meaning: "प्रत्यक्ष कथन — exact words someone said" },
          { word: "colon", meaning: "उपविराम — : used before lists and explanations" },
          { word: "deliverable", meaning: "काम का हिस्सा — something that must be produced/delivered" },
        ],
      },
      essay: {
        title: "Quotation Marks and Colons in Professional Communication",
        paragraphs: [
          "Quotation marks and colons are essential tools of professional English writing. Together, they bring clarity, organization, and precision to business communication.",
          "Quotation marks serve three primary functions: enclosing direct speech (the exact words someone said), indicating titles of shorter works like articles and songs, and highlighting special or technical terms.",
          "The colon is a powerful organizational tool. Before a list, it announces: 'here come the items'. Before an explanation, it promises: 'here is the answer'. In time writing, it separates hours from minutes: 10:30, 9:00 AM.",
          "In professional emails and reports, these marks elevate ordinary writing to polished, authoritative communication. When used correctly, they demonstrate that the writer understands the nuances of English professional style.",
        ],
        keyPoints: [
          "Quotation marks: direct speech, titles of works, special terms",
          "Colon: before lists (sentence must be complete first), before single explanations",
          "Colon in time: 10:30 AM, 9:00 PM, 12:00 noon",
          "Punctuation of direct speech INSIDE the quotes: She said, \"I'm ready.\"",
          "Comma introduces speech: She said, \"...\" | Colon announces list: The items are: ...",
        ],
      },
      dialogue: {
        title: "Meeting Announcement",
        setting: "A manager sends instructions via email that a colleague reads aloud.",
        lines: [
          { speaker: "Colleague", text: "Listen to this email from the manager! He says: 'All team members must prepare the following: weekly report, project status update, and next week's plan.'", hindi: "Manager का email सुनो! वह कहते हैं: 'All team members must prepare the following...'" },
          { speaker: "You", text: "When is the meeting? What time?", hindi: "Meeting कब है? किस time?" },
          { speaker: "Colleague", text: "He wrote the time too: 10:30 AM sharp. And he quoted the CEO: \"Speed and quality are equally important.\"", hindi: "उन्होंने time भी लिखा: 10:30 AM sharp। और CEO को quote किया: \"Speed and quality are equally important.\"" },
          { speaker: "You", text: "I appreciate how clearly he writes. The colon before the list makes it easy to understand immediately.", hindi: "मुझे अच्छा लगता है कि वह कितनी clearly लिखते हैं। List से पहले colon से immediately समझ आता है।" },
          { speaker: "Colleague", text: "Exactly! Professional writing needs professional punctuation. That's what makes communication clear!", hindi: "Exactly! Professional writing को professional punctuation चाहिए।" },
        ],
        notes: [
          "Colon before list: 'prepare the following:' — complete sentence before colon",
          "Direct speech: CEO's exact words in quotation marks — authenticity and accuracy",
          "Time with colon: 10:30 AM — standard format worldwide",
          "Professional tip: use colon to structure any email with multiple items",
        ],
      },
      summary: [
        "QUOTATION MARKS (\"\") = direct speech (exact words), titles, special terms",
        "Direct speech rule: comma before, capital to start, punctuation INSIDE the quotes",
        "COLON (:) = announces a list or explanation — sentence before colon must be complete",
        "Colon in TIME: 10:30 AM, 9:00 PM — separates hours from minutes",
        "Colon in formal letters: Dear Sir: | Dear Madam:",
        "Don't use colon after incomplete sentence: 'I need: a pen' ❌ → 'I need the following: a pen' ✅",
        "Professional tip: use quotation marks for client/manager quotes in reports to show authenticity",
      ],
    };
  }

  // Return null for any subtopic not explicitly handled
  return null;
}

// ─── Main Component ──────────────────────────────────────────
export function LessonContent({
  dayNumber,
  topicId,
  subtopicId,
  subtopicTitle,
  topicColor,
  onComplete,
}: LessonContentProps) {
  // Track which section is currently active
  const [activeSection, setActiveSection] = useState<Section>("why");
  // Track which sections the user has read
  const [completedSections, setCompletedSections] = useState<Set<Section>>(new Set());
  // Toggle for showing Hindi translations
  const [showHindi, setShowHindi] = useState(false);

  // ── Load content dynamically based on day number ──
  // This loads the actual lesson content from the data files
  const content = useMemo(() => {
    // For Day 1, use the getDay1LessonContent function first,
    // then fall through to topic-specific generator, then generic
    if (dayNumber === 1) {
      return (
        getDay1LessonContent(subtopicId) ||
        generateDay1TopicContent(subtopicId, subtopicTitle) ||
        generateGenericContent(subtopicId, subtopicTitle, 1)
      );
    }
    // For Day 2, return generated content based on subtopic
    if (dayNumber === 2) {
      return generateDay2Content(subtopicId, subtopicTitle);
    }
    // For other days, return placeholder content
    return generateGenericContent(subtopicId, subtopicTitle, dayNumber);
  }, [dayNumber, subtopicId, subtopicTitle]);

  // Mark a section as read when user clicks on it
  const markComplete = (section: Section) => {
    // Create a new Set from the previous state and add the new section
    setCompletedSections(prev => {
      const newSet = new Set(Array.from(prev));
      newSet.add(section);
      return newSet;
    });
  };

  // Check if user has read all sections
  const allDone = completedSections.size >= SECTIONS.length;

  // ── Speak text using browser's speech synthesis ──
  // This makes the text-to-speech voice more friendly and natural
  const speakText = (text: string) => {
    // Check if the browser supports speech synthesis
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    // Cancel any currently speaking text
    window.speechSynthesis.cancel();
    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    // Set the voice properties for a friendly tone
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.1; // Slightly higher pitch for friendliness
    utterance.volume = 0.9; // Not too loud
    utterance.lang = "en-US"; // Use American English voice
    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  // ── If no content is available, show a placeholder ──
  if (!content) {
    return (
      <div className="space-y-6">
        {/* No content available card */}
        <div className="card-base rounded-2xl text-center p-8">
          {/* Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            {subtopicTitle}
          </h2>
          {/* Description - explains content is being loaded */}
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            This lesson content is being prepared by our team. 
            Content for this subtopic will be available soon with full theory, 
            examples, practice questions, and vocabulary.
          </p>
          {/* Continue button */}
          <button
            onClick={onComplete}
            className="btn-primary px-8 py-3 text-base"
          >
            <Zap className="h-5 w-5" />
            Continue to Vocabulary →
          </button>
        </div>
      </div>
    );
  }

  // ── Main render with full content ──
  return (
    <div className="space-y-6">
      {/* ── Section Navigation Tabs ── */}
      {/* Grid of clickable tabs for each section */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
        {SECTIONS.map(section => (
          <button
            key={section.key}
            onClick={() => {
              // Switch to this section
              setActiveSection(section.key);
              // Mark it as read
              markComplete(section.key);
            }}
            className={cn(
              // Base styles for all tabs
              "relative flex flex-col items-center gap-1 rounded-xl p-2 text-xs font-medium transition-all",
              // Active tab styling
              activeSection === section.key
                ? `${section.bg} ${section.color} border-2 border-current shadow-sm`
                : "border border-border text-muted-foreground hover:bg-accent"
            )}
          >
            {/* Section icon */}
            <section.icon className="h-4 w-4" />
            {/* Section label (hidden on very small screens) */}
            <span className="text-center leading-tight text-[10px] sm:text-xs">
              {section.label}
            </span>
            {/* Completed checkmark badge */}
            {completedSections.has(section.key) && (
              <CheckCircle2 className="absolute -top-1.5 -right-1.5 h-4 w-4 text-emerald-500 bg-background rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* ── Progress indicator ── */}
      {/* Shows how many sections the user has completed */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${(completedSections.size / SECTIONS.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {completedSections.size}/{SECTIONS.length} sections
        </span>
      </div>

      {/* ── Content Area ── */}
      {/* AnimatePresence handles smooth transitions between sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* WHY LEARN THIS section */}
          {activeSection === "why" && (
            <WhySection
              content={content}
              topicColor={topicColor}
              onSpeak={speakText}
            />
          )}

          {/* CONCEPT section */}
          {activeSection === "concept" && (
            <ConceptSection
              content={content}
              topicColor={topicColor}
              showHindi={showHindi}
              setShowHindi={setShowHindi}
              onSpeak={speakText}
            />
          )}

          {/* RULES section */}
          {activeSection === "rules" && (
            <RulesSection
              content={content}
              topicColor={topicColor}
            />
          )}

          {/* EXAMPLES section */}
          {activeSection === "examples" && (
            <ExamplesSection
              content={content}
              showHindi={showHindi}
              setShowHindi={setShowHindi}
              onSpeak={speakText}
            />
          )}

          {/* MISTAKES section */}
          {activeSection === "mistakes" && (
            <MistakesSection content={content} />
          )}

          {/* TIPS section */}
          {activeSection === "tips" && (
            <TipsSection content={content} />
          )}

          {/* PROFESSIONAL USAGE section */}
          {activeSection === "professional" && (
            <ProfessionalSection content={content} onSpeak={speakText} />
          )}

          {/* STORY section */}
          {activeSection === "story" && (
            <StorySection content={content} onSpeak={speakText} />
          )}

          {/* DIALOGUE section */}
          {activeSection === "dialogue" && (
            <DialogueSection content={content} onSpeak={speakText} />
          )}

          {/* SUMMARY section */}
          {activeSection === "summary" && (
            <SummarySection content={content} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Complete Lesson Button ── */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onComplete}
          className={cn(
            "btn-primary px-8 py-3 text-base gap-2",
            !allDone && "opacity-80"
          )}
        >
          <Zap className="h-5 w-5" />
          {allDone
            ? "Lesson Complete — Start Vocabulary! 🎉"
            : "Continue to Vocabulary →"}
        </button>
      </div>
    </div>
  );
}

// ============================================================
// SUB-COMPONENTS - Each renders one section of the lesson
// ============================================================

// ─── WHY LEARN THIS Section ──────────────────────────────────
// Shows why this topic is important and motivates the student
function WhySection({
  content,
  topicColor,
  onSpeak,
}: {
  content: LessonContentType;
  topicColor: string;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Main explanation card */}
      <div
        className="card-base rounded-2xl"
        style={{ borderLeft: `4px solid ${topicColor}` }}
      >
        {/* Section heading */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold" style={{ color: topicColor }}>
            🌟 Why Are We Learning This?
          </h2>
          {/* Listen button to hear the explanation */}
          <button
            onClick={() => onSpeak(content.whyLearnThis.slice(0, 300))}
            className="btn-ghost p-2 rounded-lg"
            title="Listen to this section"
          >
            <Volume2 className="h-4 w-4" />
          </button>
        </div>
        {/* The explanation text - splits by paragraph for readability */}
        <div className="space-y-3">
          {content.whyLearnThis.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-foreground leading-relaxed text-base"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Motivation tip box */}
      <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
        <p className="text-sm text-primary font-medium flex items-center gap-2">
          <Lightbulb className="h-4 w-4 shrink-0" />
          Master this today and you will use it every single day for the rest of your life!
        </p>
      </div>
    </div>
  );
}

// ─── CONCEPT Section ─────────────────────────────────────────
// Shows the full concept explanation with Hindi toggle
function ConceptSection({
  content,
  topicColor,
  showHindi,
  setShowHindi,
  onSpeak,
}: {
  content: LessonContentType;
  topicColor: string;
  showHindi: boolean;
  setShowHindi: (v: boolean) => void;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Header with Hindi toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-500" />
          Understanding the Concept
        </h2>
        <div className="flex items-center gap-2">
          {/* Listen button */}
          <button
            onClick={() => onSpeak(content.conceptExplanation.slice(0, 400))}
            className="btn-ghost p-2 rounded-lg"
          >
            <Volume2 className="h-4 w-4" />
          </button>
          {/* Hindi toggle */}
          <button
            onClick={() => setShowHindi(!showHindi)}
            className="btn-secondary text-sm py-1.5 px-3"
          >
            {showHindi ? "Hide Hindi" : "Show Hindi"}
          </button>
        </div>
      </div>

      {/* Concept explanation */}
      <div className="card-base rounded-2xl" style={{ borderLeft: `4px solid ${topicColor}` }}>
        <div className="space-y-3">
          {content.conceptExplanation.split("\n\n").map((para, i) => (
            <p key={i} className="text-foreground leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Simple explanation box */}
      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
        <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Simple Explanation (Easy to Understand)
        </h3>
        <p className="text-sm text-foreground leading-relaxed">
          {content.simpleExplanation}
        </p>
      </div>

      {/* Hindi explanation (toggle) */}
      <AnimatePresence>
        {showHindi && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
              <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-2">
                🇮🇳 Hindi Explanation
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {content.hindiExplanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── RULES Section ───────────────────────────────────────────
// Shows grammar rules with expandable accordion
function RulesSection({
  content,
  topicColor,
}: {
  content: LessonContentType;
  topicColor: string;
}) {
  // Track which rule is expanded
  const [openRule, setOpenRule] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {/* Section heading */}
      <h2 className="text-xl font-bold flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-blue-500" />
        Rules & Structure
      </h2>

      {/* Rules accordion list */}
      {content.rules.map((rule, i) => (
        <div key={i} className="rounded-xl border border-border overflow-hidden">
          {/* Rule header button */}
          <button
            onClick={() => setOpenRule(openRule === i ? null : i)}
            className="flex w-full items-center justify-between p-4 hover:bg-accent transition-colors"
          >
            {/* Rule number and title */}
            <div className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: topicColor }}
              >
                {i + 1}
              </span>
              <span className="font-semibold text-left">{rule.rule}</span>
            </div>
            {/* Expand/collapse chevron */}
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform shrink-0",
                openRule === i && "rotate-180"
              )}
            />
          </button>

          {/* Expandable rule details */}
          <AnimatePresence>
            {openRule === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-3">
                  {/* Rule explanation */}
                  <p className="text-muted-foreground">{rule.explanation}</p>
                  {/* Example */}
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                      ✅ Example
                    </p>
                    <p className="font-semibold text-foreground">{rule.example}</p>
                  </div>
                  {/* Exception (if any) */}
                  {rule.exception && (
                    <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-3">
                      <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">
                        ⚠️ Exception
                      </p>
                      <p className="text-sm text-foreground">{rule.exception}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── EXAMPLES Section ────────────────────────────────────────
// Shows sentence patterns with Hindi translations
function ExamplesSection({
  content,
  showHindi,
  setShowHindi,
  onSpeak,
}: {
  content: LessonContentType;
  showHindi: boolean;
  setShowHindi: (v: boolean) => void;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Header with Hindi toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-emerald-500" />
          Sentence Patterns & Examples
        </h2>
        <button
          onClick={() => setShowHindi(!showHindi)}
          className="btn-secondary text-sm py-1.5 px-3"
        >
          {showHindi ? "Hide Hindi" : "Show Hindi"}
        </button>
      </div>

      {/* Sentence patterns */}
      {content.sentencePatterns.map((pattern, pIdx) => (
        <div key={pIdx} className="space-y-2">
          {/* Pattern header */}
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-3">
            <h3 className="font-bold text-primary text-sm">
              📐 Pattern: {pattern.pattern}
            </h3>
            {showHindi && (
              <p className="text-xs text-muted-foreground mt-1">
                {pattern.hindiPattern}
              </p>
            )}
          </div>

          {/* Examples for this pattern */}
          <div className="space-y-2">
            {pattern.examples.map((ex, eIdx) => (
              <motion.div
                key={eIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: eIdx * 0.05 }}
                className="rounded-xl border border-border bg-card p-3 flex items-start gap-3"
              >
                {/* Example number */}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {eIdx + 1}
                </span>
                <div className="flex-1">
                  {/* Hindi sentence (if toggled on) */}
                  {showHindi && (
                    <p className="text-xs text-muted-foreground mb-1">
                      {ex.hindi}
                    </p>
                  )}
                  {/* English sentence */}
                  <p className="text-sm font-semibold text-foreground">
                    {ex.english}
                  </p>
                </div>
                {/* Listen button */}
                <button
                  onClick={() => onSpeak(ex.english)}
                  className="btn-ghost p-1.5 rounded-lg shrink-0"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MISTAKES Section ────────────────────────────────────────
// Shows common mistakes with corrections
function MistakesSection({ content }: { content: LessonContentType }) {
  return (
    <div className="space-y-4">
      {/* Section heading */}
      <h2 className="text-xl font-bold flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-rose-500" />
        Common Mistakes to Avoid
      </h2>

      {/* Mistakes list */}
      {content.commonMistakes.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-2"
        >
          {/* Wrong vs Correct comparison */}
          <div className="flex gap-3">
            {/* Wrong example */}
            <div className="rounded-lg bg-rose-500/10 p-3 flex-1">
              <p className="text-xs font-medium text-rose-500 mb-1">❌ WRONG</p>
              <p className="font-semibold line-through text-rose-400 dark:text-rose-300">
                {m.wrong}
              </p>
            </div>
            {/* Correct example */}
            <div className="rounded-lg bg-emerald-500/10 p-3 flex-1">
              <p className="text-xs font-medium text-emerald-500 mb-1">✅ CORRECT</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                {m.correct}
              </p>
            </div>
          </div>
          {/* Explanation of why it's wrong */}
          <p className="text-sm text-muted-foreground">{m.explanation}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── TIPS Section ────────────────────────────────────────────
// Shows speaking tips and memory tricks
function TipsSection({ content }: { content: LessonContentType }) {
  return (
    <div className="space-y-6">
      {/* Speaking Tips */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-gold-500" />
          Speaking Tips
        </h2>
        {content.speakingTips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-xl bg-gold-400/10 border border-gold-400/20 p-4"
          >
            {/* Tip number */}
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-sm font-bold text-gold-500">
              {i + 1}
            </div>
            {/* Tip text */}
            <p className="text-sm text-foreground leading-relaxed">{tip}</p>
          </motion.div>
        ))}
      </div>

      {/* Memory Tricks */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          Memory Tricks & Mnemonics
        </h2>
        {content.memoryTricks.map((trick, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-xl bg-purple-500/10 border border-purple-500/20 p-4"
          >
            <div className="text-lg">🧠</div>
            <p className="text-sm text-foreground leading-relaxed">{trick}</p>
          </motion.div>
        ))}
      </div>

      {/* Daily Challenge */}
      <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
        <p className="text-sm font-medium text-primary">
          🎯 Daily Challenge: Use today&apos;s concepts in 10 real sentences before sleeping tonight!
        </p>
      </div>
    </div>
  );
}

// ─── PROFESSIONAL USAGE Section ──────────────────────────────
// Shows how to use the concept in professional, office, and interview settings
function ProfessionalSection({
  content,
  onSpeak,
}: {
  content: LessonContentType;
  onSpeak: (text: string) => void;
}) {
  // Combine all professional usage examples
  const sections = [
    { title: "🏢 Office Usage", icon: Briefcase, items: content.officeUsage, color: "blue" },
    { title: "💼 Interview Usage", icon: GraduationCap, items: content.interviewUsage, color: "purple" },
    { title: "🏠 Daily Life Usage", icon: Home, items: content.dailyUsage, color: "emerald" },
    { title: "📧 Professional Usage", icon: Briefcase, items: content.professionalUsage, color: "cyan" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-cyan-500" />
        Real-World Usage
      </h2>

      {sections.map((section, sIdx) => (
        <div key={sIdx} className="space-y-2">
          <h3 className="font-bold text-base">{section.title}</h3>
          {section.items.map((item, iIdx) => (
            <motion.div
              key={iIdx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: iIdx * 0.05 }}
              className="rounded-xl border border-border bg-card p-3"
            >
              {/* Situation */}
              <p className="text-xs text-muted-foreground mb-1">
                📍 {item.situation}
              </p>
              {/* English sentence */}
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground flex-1">
                  {item.english}
                </p>
                <button
                  onClick={() => onSpeak(item.english)}
                  className="btn-ghost p-1 rounded-lg shrink-0"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </div>
              {/* Hindi translation */}
              <p className="text-xs text-muted-foreground mt-1">{item.hindi}</p>
              {/* Tip if available */}
              {item.tip && (
                <p className="text-xs text-primary mt-1 flex items-center gap-1">
                  <Lightbulb className="h-3 w-3" /> {item.tip}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── STORY Section ───────────────────────────────────────────
// Shows a short story using concepts learned in this lesson
function StorySection({
  content,
  onSpeak,
}: {
  content: LessonContentType;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <BookMarked className="h-5 w-5 text-pink-500" />
        Story Time
      </h2>

      {/* Story card */}
      <div className="card-base rounded-2xl" style={{ borderLeft: "4px solid #ec4899" }}>
        {/* Story title */}
        <h3 className="text-lg font-bold mb-3">{content.story.title}</h3>
        {/* Story paragraphs */}
        <div className="space-y-3">
          {content.story.paragraphs.map((para, i) => (
            <p key={i} className="text-foreground leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>
        {/* Listen to the story */}
        <button
          onClick={() => onSpeak(content.story.paragraphs.join(" "))}
          className="btn-secondary mt-4 text-sm py-1.5 gap-1"
        >
          <Volume2 className="h-3.5 w-3.5" /> Listen to Story
        </button>
      </div>

      {/* Moral */}
      <div className="rounded-xl bg-pink-500/10 border border-pink-500/20 p-4">
        <p className="text-sm font-medium text-pink-600 dark:text-pink-400">
          📖 Moral: {content.story.moral}
        </p>
      </div>

      {/* Key words from story */}
      <div className="flex flex-wrap gap-2">
        {content.story.keyWords.map((kw, i) => (
          <span
            key={i}
            className="rounded-full bg-pink-500/10 border border-pink-500/20 px-3 py-1 text-xs font-medium"
          >
            <span className="text-foreground font-bold">{kw.word}</span>
            <span className="text-muted-foreground ml-1">= {kw.meaning}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── DIALOGUE Section ────────────────────────────────────────
// Shows a conversation between two people
function DialogueSection({
  content,
  onSpeak,
}: {
  content: LessonContentType;
  onSpeak: (text: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Users className="h-5 w-5 text-indigo-500" />
        Conversation Practice
      </h2>

      {/* Dialogue setting */}
      <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-3">
        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          📍 {content.dialogue.setting}
        </p>
      </div>

      {/* Dialogue lines */}
      <div className="space-y-2">
        {content.dialogue.lines.map((line, i) => {
          // Alternate between left and right alignment
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex gap-2",
                isLeft ? "justify-start" : "justify-end"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl p-3",
                  isLeft
                    ? "bg-primary/10 border border-primary/20 rounded-bl-sm"
                    : "bg-emerald-500/10 border border-emerald-500/20 rounded-br-sm"
                )}
              >
                {/* Speaker name */}
                <p className={cn(
                  "text-xs font-bold mb-1",
                  isLeft ? "text-primary" : "text-emerald-600 dark:text-emerald-400"
                )}>
                  {line.speaker}
                </p>
                {/* English text */}
                <p className="text-sm font-medium text-foreground">{line.text}</p>
                {/* Hindi translation */}
                <p className="text-xs text-muted-foreground mt-1">{line.hindi}</p>
              </div>
              {/* Listen button */}
              <button
                onClick={() => onSpeak(line.text)}
                className="btn-ghost p-1 rounded-lg self-center shrink-0"
              >
                <Volume2 className="h-3 w-3" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <h3 className="font-bold text-sm">💡 Language Notes:</h3>
        {content.dialogue.notes.map((note, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SUMMARY Section ─────────────────────────────────────────
// Shows a concise summary of everything learned
function SummarySection({ content }: { content: LessonContentType }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-teal-500" />
        Lesson Summary
      </h2>

      {/* Summary points */}
      <div className="card-base rounded-2xl" style={{ borderLeft: "4px solid #14b8a6" }}>
        <div className="space-y-3">
          {content.summary.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-xs font-bold text-teal-600 dark:text-teal-400">
                {i + 1}
              </div>
              <p className="text-sm text-foreground leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completion message */}
      <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 p-4 text-center">
        <p className="text-sm font-medium text-foreground">
          🎉 You have completed the theory for this subtopic!
          Now practice with vocabulary and questions to solidify your knowledge.
        </p>
      </div>
    </div>
  );
}
