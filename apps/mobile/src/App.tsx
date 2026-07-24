// ============================================================
// Mobile Application Entry - 75 Days Hard English Course
// Native-like responsive mobile client synchronized with web app.
// Features voice practice, vocabulary bank, offline capability,
// and real-time XP & streak tracking.
// ============================================================

import React, { useState, useEffect } from "react";
import {
  BookOpen, Mic, Flame, Trophy, Award, CheckCircle2,
  Volume2, Search, ArrowRight, Zap, RefreshCcw, Wifi, WifiOff,
  ChevronRight, Sparkles
} from "lucide-react";
import {
  getMobileSyncState,
  syncUserFromAPI,
  markSubtopicCompletedMobile,
  MobileSyncState,
} from "./lib/syncBridge";

// Navigation tabs
type TabType = "home" | "speaking" | "vocab" | "profile";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [syncState, setSyncState] = useState<MobileSyncState>(getMobileSyncState());
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [speechText, setSpeechText] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [activeVocabFilter, setActiveVocabFilter] = useState<string>("all");

  // Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Refresh identity and progress from the web source of truth. If the
  // network is unavailable, the last verified account cache may continue
  // offline; a brand-new device remains signed out.
  useEffect(() => {
    let cancelled = false;
    syncUserFromAPI().then((nextState) => {
      if (!cancelled) setSyncState(nextState);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Web Speech API recognition setup
  const startSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");
      setSpeechText(transcript);
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.start();
  };

  // Text to speech helper
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-indigo-600 selection:text-white">
      {/* Top App Header */}
      <header className="sticky top-0 z-40 glass-nav px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            75
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              75 Days English
            </h1>
            <p className="text-[10px] text-indigo-400 font-medium tracking-wide">
              {isOnline ? "● SYNCED WITH WEB" : "○ OFFLINE MODE"}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            <span>{syncState.streak}</span>
          </div>

          <div className="flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full text-xs font-semibold text-indigo-300">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>{syncState.totalXp} XP</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 py-4 max-w-md mx-auto w-full">
        {/* Tab 1: Home / Course Journey */}
        {activeTab === "home" && (
          <div className="space-y-4">
            {/* Banner card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/60 via-indigo-950 to-slate-900 p-5 border border-indigo-500/30 shadow-xl">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-300 bg-indigo-500/20 border border-indigo-400/30 px-2.5 py-0.5 rounded-full mb-2">
                  <Sparkles className="w-3 h-3 text-indigo-300" /> Day {syncState.currentDay} of 75
                </span>
                <h2 className="text-xl font-bold text-white mb-1">
                  Master Fluent English
                </h2>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Both Speaking & Typing practice modes are active. Complete your daily lessons to maintain your streak!
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                    <span>Overall Progress</span>
                    <span>{Math.round((syncState.currentDay / 75) * 100)}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                      style={{ width: `${(syncState.currentDay / 75) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Day Selector Grid */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-300 flex items-center justify-between">
                <span>Course Days</span>
                <span className="text-xs text-indigo-400 font-normal">75 Days Hard</span>
              </h3>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 15 }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isCurrent = dayNum === syncState.currentDay;
                  const isDone = dayNum < syncState.currentDay;

                  return (
                    <button
                      key={dayNum}
                      onClick={() => setSelectedDay(dayNum)}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-indigo-600 border-indigo-400 text-white font-bold shadow-lg shadow-indigo-600/40 ring-2 ring-indigo-400/50"
                          : isDone
                          ? "bg-slate-900/80 border-slate-800 text-emerald-400"
                          : "bg-slate-900/40 border-slate-800/60 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold tracking-wider opacity-75">
                        Day
                      </span>
                      <span className="text-base font-bold leading-tight">{dayNum}</span>
                      {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Day Detail Card */}
            <div className="glass-card rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Day {selectedDay}: Basic of English
                  </h4>
                  <p className="text-xs text-slate-400">
                    Alphabet, Pronunciation, Daily Greetings & Vocabulary
                  </p>
                </div>
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <button
                  onClick={() => setActiveTab("speaking")}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-200">Voice Speaking Lab</div>
                      <div className="text-[10px] text-slate-400">Speak out loud & evaluate pronunciation</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>

                <button
                  onClick={() => setActiveTab("vocab")}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-200">Vocabulary Bank</div>
                      <div className="text-[10px] text-slate-400">200+ unique words with audio & Hindi meaning</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Voice Speaking Lab */}
        {activeTab === "speaking" && (
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h2 className="text-lg font-bold text-white flex items-center justify-center gap-2">
                <Mic className="w-5 h-5 text-indigo-400" /> Voice Speaking Lab
              </h2>
              <p className="text-xs text-slate-400">
                Speak into your phone's microphone to practice fluent English
              </p>
            </div>

            {/* Prompt sentence */}
            <div className="glass-card rounded-2xl p-5 text-center space-y-3 border-indigo-500/30">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-1 rounded-full">
                Practice Sentence
              </span>
              <p className="text-base font-semibold text-white leading-snug">
                "Hello, my name is Alex and I am learning fluent English."
              </p>
              <p className="text-xs text-slate-400 italic">
                नमस्ते, मेरा नाम एलेक्स है और मैं धाराप्रवाह अंग्रेजी सीख रहा हूं।
              </p>

              <button
                onClick={() => speakText("Hello, my name is Alex and I am learning fluent English.")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-medium hover:bg-indigo-500/30 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" /> Listen Audio
              </button>
            </div>

            {/* Mic Recording button */}
            <div className="flex flex-col items-center justify-center gap-3 py-4">
              <button
                onClick={startSpeechRecognition}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                  isListening
                    ? "bg-rose-600 text-white animate-pulse shadow-lg shadow-rose-600/50 scale-110"
                    : "bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-xl shadow-indigo-600/30 hover:scale-105"
                }`}
              >
                <Mic className="w-8 h-8" />
              </button>
              <p className="text-xs text-slate-400 font-medium">
                {isListening ? "Listening... Speak now!" : "Tap microphone to start speaking"}
              </p>
            </div>

            {/* Speech output */}
            {speechText && (
              <div className="glass-card rounded-xl p-4 space-y-2 border-emerald-500/30">
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Recognized Speech:
                </div>
                <p className="text-sm font-medium text-slate-200 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  "{speechText}"
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Vocabulary Bank */}
        {activeTab === "vocab" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Daily Vocabulary</h2>
              <span className="text-xs text-indigo-400 font-medium">Day {selectedDay}</span>
            </div>

            {/* Search input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search word or Hindi meaning..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Word cards list */}
            <div className="space-y-2.5">
              {[
                { word: "Alphabet", meaning: "A set of letters arranged in fixed order", hindi: "वर्णमाला", pos: "noun", ipa: "/ˈælfəbɛt/", ex: "The English alphabet has 26 letters." },
                { word: "Fluent", meaning: "Able to express oneself easily and articulately", hindi: "धाराप्रवाह", pos: "adj", ipa: "/ˈfluːənt/", ex: "She speaks fluent English after 75 days." },
                { word: "Vocabulary", meaning: "A body of words used in a particular language", hindi: "शब्दावली", pos: "noun", ipa: "/vəˈkæbjʊləri/", ex: "Expand your vocabulary every single day." },
                { word: "Pronunciation", meaning: "The way in which a word is pronounced", hindi: "उच्चारण", pos: "noun", ipa: "/prəˌnʌnsɪˈeɪʃən/", ex: "Practice pronunciation using the voice lab." }
              ].map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3.5 space-y-2 border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        {item.word}
                        <span className="text-[10px] font-normal text-slate-400">{item.ipa}</span>
                      </h4>
                      <p className="text-xs text-indigo-400 font-medium">{item.hindi}</p>
                    </div>

                    <button
                      onClick={() => speakText(item.word)}
                      className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-normal">{item.meaning}</p>
                  <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
                    <strong className="text-slate-300">Ex:</strong> "{item.ex}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Profile & Sync */}
        {activeTab === "profile" && (
          <div className="space-y-4">
            <div className="text-center space-y-2 pt-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 mx-auto flex items-center justify-center text-2xl font-bold text-white shadow-xl shadow-indigo-600/30">
                75
              </div>
              <h2 className="text-lg font-bold text-white">Learner Account</h2>
              <p className="text-xs text-slate-400">Synced across Web & Mobile</p>
            </div>

            <div className="glass-card rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Current Level</span>
                <span className="font-bold text-indigo-400">Level {syncState.level}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Total Experience</span>
                <span className="font-bold text-amber-400">{syncState.totalXp} XP</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Active Streak</span>
                <span className="font-bold text-emerald-400">{syncState.streak} Days</span>
              </div>
              <div className="flex justify-between items-center py-2 text-xs">
                <span className="text-slate-400">Data Synchronization</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <Wifi className="w-3.5 h-3.5" /> Active
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Floating Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav px-6 py-2">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
              activeTab === "home" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Course</span>
          </button>

          <button
            onClick={() => setActiveTab("speaking")}
            className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
              activeTab === "speaking" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Mic className="w-5 h-5" />
            <span>Speaking</span>
          </button>

          <button
            onClick={() => setActiveTab("vocab")}
            className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
              activeTab === "vocab" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Search className="w-5 h-5" />
            <span>Words</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-colors ${
              activeTab === "profile" ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Trophy className="w-5 h-5" />
            <span>Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
