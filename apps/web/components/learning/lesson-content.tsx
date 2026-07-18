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
    // For Day 1, use the getDay1LessonContent function
    if (dayNumber === 1) {
      return getDay1LessonContent(subtopicId) || null;
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
