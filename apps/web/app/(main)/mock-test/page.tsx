// ============================================================
// Mock Test Page - Full 50-question test
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { MockTestClient } from "@/components/mock-test/mock-test-client";

export const metadata: Metadata = {
  title: "Mock Test",
  description: "Test your English knowledge with 50 questions",
};

async function getMockTestQuestions() {
  try {
    // Get a mix of test questions from all subtopics
    const questions = await db.testQuestion.findMany({
      take: 50,
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        questionText: true,
        questionType: true,
        correctAnswer: true,
        explanation: true,
        optionA: true,
        optionB: true,
        optionC: true,
        optionD: true,
        points: true,
        timeLimit: true,
      },
    });

    // If not enough questions in DB, generate fallback questions
    if (questions.length < 10) {
      return generateFallbackQuestions();
    }

    return questions;
  } catch {
    return generateFallbackQuestions();
  }
}

function generateFallbackQuestions() {
  return [
    { id: "q1", questionText: "Which sentence uses 'is' correctly?", questionType: "MCQ", correctAnswer: "She is a doctor.", explanation: "'Is' is used with singular third-person subjects (he, she, it).", optionA: "I is happy.", optionB: "She is a doctor.", optionC: "They is friends.", optionD: "We is going.", points: 10, timeLimit: 60 },
    { id: "q2", questionText: "Fill in the blank: 'She ___ to school every day.'", questionType: "FILL_BLANK", correctAnswer: "goes", explanation: "Third-person singular subjects (he/she/it) require -s/-es on the verb.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q3", questionText: "What is the past tense of 'go'?", questionType: "MCQ", correctAnswer: "went", explanation: "'Go' is an irregular verb. Its past tense is 'went'.", optionA: "goed", optionB: "gone", optionC: "went", optionD: "going", points: 10, timeLimit: 60 },
    { id: "q4", questionText: "True or False: 'I have went to the market.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "The correct sentence is 'I have gone to the market.' Use 'gone' after 'have/has'.", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q5", questionText: "Which word means 'very happy'?", questionType: "MCQ", correctAnswer: "elated", explanation: "'Elated' means feeling great happiness or joy.", optionA: "elated", optionB: "sad", optionC: "confused", optionD: "tired", points: 10, timeLimit: 60 },
    { id: "q6", questionText: "Fill in the blank: '___ she sing well?'", questionType: "FILL_BLANK", correctAnswer: "Does", explanation: "'Does' is used for questions with third-person singular (he/she/it).", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q7", questionText: "What is the plural of 'child'?", questionType: "MCQ", correctAnswer: "children", explanation: "'Child' has an irregular plural form: 'children'.", optionA: "childs", optionB: "childen", optionC: "children", optionD: "child's", points: 10, timeLimit: 60 },
    { id: "q8", questionText: "Which is the correct sentence?", questionType: "MCQ", correctAnswer: "I can swim very fast.", explanation: "'Can' does not change form. We don't say 'cans'.", optionA: "I cans swim very fast.", optionB: "I can swim very fast.", optionC: "I can swims very fast.", optionD: "I can swiming very fast.", points: 10, timeLimit: 60 },
    { id: "q9", questionText: "Fill in the blank: 'He ___ been waiting for two hours.'", questionType: "FILL_BLANK", correctAnswer: "has", explanation: "'Has' is used with singular subjects (he/she/it) in the present perfect.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q10", questionText: "Which sentence is in the future tense?", questionType: "MCQ", correctAnswer: "She will travel tomorrow.", explanation: "Future tense uses 'will' + base verb form.", optionA: "She traveled yesterday.", optionB: "She travels every day.", optionC: "She was traveling.", optionD: "She will travel tomorrow.", points: 10, timeLimit: 60 },
    { id: "q11", questionText: "Which article is used before 'university'?", questionType: "MCQ", correctAnswer: "a", explanation: "'University' starts with a 'y' sound (/juː/), so we use 'a', not 'an'.", optionA: "a", optionB: "an", optionC: "the", optionD: "no article", points: 10, timeLimit: 60 },
    { id: "q12", questionText: "Fill in the blank: 'They ___ playing cricket right now.'", questionType: "FILL_BLANK", correctAnswer: "are", explanation: "Present continuous with plural subjects uses 'are' + verb-ing.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q13", questionText: "What does 'eloquent' mean?", questionType: "MCQ", correctAnswer: "Speaking clearly and persuasively", explanation: "Eloquent means expressing ideas clearly and impressively.", optionA: "Feeling very tired", optionB: "Speaking clearly and persuasively", optionC: "Being extremely angry", optionD: "Moving very quickly", points: 10, timeLimit: 60 },
    { id: "q14", questionText: "True or False: 'He don't know the answer.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "With 'he/she/it', use 'doesn't': 'He doesn't know the answer.'", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q15", questionText: "Which preposition is correct: 'I am interested ___ English.'", questionType: "MCQ", correctAnswer: "in", explanation: "We say 'interested in' — 'in' is the correct preposition.", optionA: "at", optionB: "on", optionC: "in", optionD: "by", points: 10, timeLimit: 60 },
    { id: "q16", questionText: "Fill in the blank: 'I ___ to Mumbai last year.'", questionType: "FILL_BLANK", correctAnswer: "went", explanation: "Past tense of 'go' is 'went'.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q17", questionText: "Which is the correct comparative form of 'good'?", questionType: "MCQ", correctAnswer: "better", explanation: "'Good' has an irregular comparative: 'better', not 'gooder' or 'more good'.", optionA: "gooder", optionB: "more good", optionC: "better", optionD: "goodest", points: 10, timeLimit: 60 },
    { id: "q18", questionText: "What is the opposite of 'ancient'?", questionType: "MCQ", correctAnswer: "modern", explanation: "'Ancient' means very old; 'modern' means new/current — they are antonyms.", optionA: "huge", optionB: "modern", optionC: "small", optionD: "bright", points: 10, timeLimit: 60 },
    { id: "q19", questionText: "Fill in: 'If I had money, I ___ buy a car.'", questionType: "FILL_BLANK", correctAnswer: "would", explanation: "Type 2 conditional: If + past simple, would + base verb.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q20", questionText: "Which sentence uses passive voice?", questionType: "MCQ", correctAnswer: "The letter was written by her.", explanation: "Passive voice uses 'was/were + past participle'. Subject receives the action.", optionA: "She wrote the letter.", optionB: "The letter was written by her.", optionC: "She is writing a letter.", optionD: "She will write a letter.", points: 10, timeLimit: 60 },
    { id: "q21", questionText: "Fill in: 'She ___ here since 2020.'", questionType: "FILL_BLANK", correctAnswer: "has been", explanation: "For duration up to now, use present perfect: 'has been' + since.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q22", questionText: "Which word is a synonym for 'angry'?", questionType: "MCQ", correctAnswer: "furious", explanation: "'Furious' is a strong synonym for angry/very upset.", optionA: "happy", optionB: "furious", optionC: "calm", optionD: "tired", points: 10, timeLimit: 60 },
    { id: "q23", questionText: "True or False: 'Neither of the students are ready.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "'Neither' is singular: 'Neither of the students IS ready.'", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q24", questionText: "Which sentence uses 'will' correctly for a future plan?", questionType: "MCQ", correctAnswer: "I will call you tomorrow.", explanation: "'Will' + base verb is used for future actions and promises.", optionA: "I am will call you.", optionB: "I will calling you.", optionC: "I will call you tomorrow.", optionD: "I will called you.", points: 10, timeLimit: 60 },
    { id: "q25", questionText: "Fill in: 'Please give me ___ water.'", questionType: "FILL_BLANK", correctAnswer: "some", explanation: "Use 'some' in affirmative sentences and polite requests.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q26", questionText: "What does 'perseverance' mean?", questionType: "MCQ", correctAnswer: "Continuing despite difficulty", explanation: "Perseverance means persistence and determination despite obstacles.", optionA: "Giving up easily", optionB: "Being very clever", optionC: "Continuing despite difficulty", optionD: "Feeling jealous", points: 10, timeLimit: 60 },
    { id: "q27", questionText: "Which modal shows ability?", questionType: "MCQ", correctAnswer: "can", explanation: "'Can' expresses ability: 'I can swim'. Other modals have different uses.", optionA: "should", optionB: "must", optionC: "can", optionD: "might", points: 10, timeLimit: 60 },
    { id: "q28", questionText: "Fill in: 'The children ___ playing outside.'", questionType: "FILL_BLANK", correctAnswer: "are", explanation: "'Children' is plural, so use 'are' in present continuous.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q29", questionText: "Which is correct: 'He suggested that she ___ a doctor.'", questionType: "MCQ", correctAnswer: "see", explanation: "After 'suggest that', use the base form (subjunctive): 'she see', not 'sees'.", optionA: "sees", optionB: "see", optionC: "will see", optionD: "is seeing", points: 10, timeLimit: 60 },
    { id: "q30", questionText: "True or False: 'Its a beautiful day.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "'Its' is possessive. The contraction for 'it is' is 'It's' (with apostrophe).", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q31", questionText: "Which word correctly completes: 'I am ___ at English now.'", questionType: "MCQ", correctAnswer: "better", explanation: "'Better' is the comparative form for improvement.", optionA: "more better", optionB: "gooder", optionC: "better", optionD: "best", points: 10, timeLimit: 60 },
    { id: "q32", questionText: "Fill in: 'By the time you arrive, I ___ finished.'", questionType: "FILL_BLANK", correctAnswer: "will have", explanation: "Future perfect: 'will have' + past participle for actions complete before a future point.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q33", questionText: "What does 'verbose' mean?", questionType: "MCQ", correctAnswer: "Using too many words", explanation: "Verbose describes someone who uses too many words to express an idea.", optionA: "Speaking softly", optionB: "Telling lies", optionC: "Using too many words", optionD: "Being very brave", points: 10, timeLimit: 60 },
    { id: "q34", questionText: "Which is correct: 'I look forward to ___ you.'", questionType: "MCQ", correctAnswer: "seeing", explanation: "After 'look forward to', use gerund (-ing form): 'seeing'.", optionA: "see", optionB: "saw", optionC: "seeing", optionD: "to see", points: 10, timeLimit: 60 },
    { id: "q35", questionText: "True or False: 'He is more taller than me.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "Don't use 'more' with -er comparatives. Say 'He is taller than me.'", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q36", questionText: "Fill in: 'She has never ___ to London.'", questionType: "FILL_BLANK", correctAnswer: "been", explanation: "Present perfect uses 'have/has + past participle'. 'Go' → 'been' (for experience).", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q37", questionText: "Which sentence has correct subject-verb agreement?", questionType: "MCQ", correctAnswer: "Everyone is responsible.", explanation: "'Everyone' is singular — use 'is', not 'are'.", optionA: "Everyone are responsible.", optionB: "Everyone is responsible.", optionC: "Everyones is responsible.", optionD: "Everyone were responsible.", points: 10, timeLimit: 60 },
    { id: "q38", questionText: "What does 'collaborate' mean?", questionType: "MCQ", correctAnswer: "Work together", explanation: "Collaborate means to work jointly with others toward a common goal.", optionA: "Work alone", optionB: "Give up", optionC: "Work together", optionD: "Compete", points: 10, timeLimit: 60 },
    { id: "q39", questionText: "Fill in: 'You ___ smoke here. It is not allowed.'", questionType: "FILL_BLANK", correctAnswer: "must not", explanation: "'Must not' (mustn't) expresses prohibition — something not allowed.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q40", questionText: "Which is correct indirect speech?", questionType: "MCQ", correctAnswer: "She said she was busy.", explanation: "In indirect speech, present tense ('am') shifts to past tense ('was').", optionA: "She said she is busy.", optionB: "She said she was busy.", optionC: "She says she was busy.", optionD: "She told she is busy.", points: 10, timeLimit: 60 },
    { id: "q41", questionText: "True or False: 'He plays guitar good.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "Use adverb 'well', not adjective 'good': 'He plays guitar well.'", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q42", questionText: "Fill in: 'I wish I ___ more time.'", questionType: "FILL_BLANK", correctAnswer: "had", explanation: "After 'wish', use past simple for present wishes: 'I wish I had' (not 'have').", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q43", questionText: "Which word means 'to officially stop an agreement'?", questionType: "MCQ", correctAnswer: "terminate", explanation: "Terminate means to bring something to an end, especially officially.", optionA: "extend", optionB: "renew", optionC: "terminate", optionD: "begin", points: 10, timeLimit: 60 },
    { id: "q44", questionText: "Which is grammatically correct?", questionType: "MCQ", correctAnswer: "I have been living here for 5 years.", explanation: "Present perfect continuous: 'have been + -ing' for ongoing actions that started in the past.", optionA: "I am living here since 5 years.", optionB: "I have been living here for 5 years.", optionC: "I live here since 5 years.", optionD: "I was living here for 5 years.", points: 10, timeLimit: 60 },
    { id: "q45", questionText: "Fill in: 'This is the best movie ___ I have ever seen.'", questionType: "FILL_BLANK", correctAnswer: "that", explanation: "After superlatives ('best'), use 'that' as the relative pronoun.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q46", questionText: "What does 'meticulous' mean?", questionType: "MCQ", correctAnswer: "Very careful and precise", explanation: "Meticulous means showing great attention to detail; very careful.", optionA: "Very rude", optionB: "Very lazy", optionC: "Very careful and precise", optionD: "Very loud", points: 10, timeLimit: 60 },
    { id: "q47", questionText: "True or False: 'She suggested to go shopping.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "'Suggest' takes a gerund: 'She suggested going shopping.'", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q48", questionText: "Fill in: 'Not only did she pass, ___ she topped the exam.'", questionType: "FILL_BLANK", correctAnswer: "but", explanation: "'Not only...but also' is a common correlative conjunction.", optionA: null, optionB: null, optionC: null, optionD: null, points: 10, timeLimit: 60 },
    { id: "q49", questionText: "Which question is correctly formed?", questionType: "MCQ", correctAnswer: "How long have you been learning English?", explanation: "Present perfect question: How long + have/has + subject + been + verb-ing?", optionA: "How long you are learning English?", optionB: "How long have you been learning English?", optionC: "Since how long are you learning English?", optionD: "How much long you learn English?", points: 10, timeLimit: 60 },
    { id: "q50", questionText: "True or False: 'The news are shocking.' is correct.", questionType: "TRUE_FALSE", correctAnswer: "False", explanation: "'News' is uncountable and always singular: 'The news IS shocking.'", optionA: "True", optionB: "False", optionC: null, optionD: null, points: 10, timeLimit: 60 },
  ];
}

export default async function MockTestPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const questions = await getMockTestQuestions();

  return (
    <div className="py-2">
      <MockTestClient questions={questions as any} userId={userId} />
    </div>
  );
}
