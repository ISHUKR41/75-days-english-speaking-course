"use client";
// ============================================================
// useSpeechRecognition - Web Speech API wrapper hook
// Returns: { isListening, transcript, startListening, stopListening,
//            resetTranscript, isSupported, error }
// ============================================================

import { useState, useEffect, useRef, useCallback } from "react";

interface SpeechRecognitionOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  maxAlternatives?: number;
}

interface UseSpeechRecognitionReturn {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  finalTranscript: string;
  confidence: number;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  isSupported: boolean;
  error: string | null;
}

// Browser compatibility shim
const getSpeechRecognition = () => {
  if (typeof window === "undefined") return null;
  return (
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition ||
    null
  );
};

export function useSpeechRecognition(
  options: SpeechRecognitionOptions = {}
): UseSpeechRecognitionReturn {
  const {
    language = "en-US",
    continuous = false,
    interimResults = true,
    maxAlternatives = 1,
  } = options;

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const SpeechRecognitionClass = getSpeechRecognition();
  const isSupported = !!SpeechRecognitionClass;

  // Initialize recognition instance
  useEffect(() => {
    if (!isSupported) return;

    const recognition = new SpeechRecognitionClass();
    recognition.lang = language;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimTranscript("");
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      setError(event.error || "Speech recognition error");
    };

    recognition.onresult = (event: any) => {
      let interim = "";
      let finalText = "";
      let highestConfidence = 0;

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const text = result[0].transcript;
        const conf = result[0].confidence;

        if (result.isFinal) {
          finalText += text;
          highestConfidence = Math.max(highestConfidence, conf || 0);
        } else {
          interim += text;
        }
      }

      if (finalText) {
        setFinalTranscript((prev) => prev + finalText);
        setTranscript((prev) => prev + finalText);
        setConfidence(highestConfidence);
      }
      setInterimTranscript(interim);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.abort();
    };
  }, [language, continuous, interimResults, maxAlternatives, isSupported, SpeechRecognitionClass]);

  const startListening = useCallback(() => {
    if (!isSupported || !recognitionRef.current) {
      setError("Speech recognition is not supported in this browser");
      return;
    }
    try {
      setFinalTranscript("");
      setTranscript("");
      setInterimTranscript("");
      setConfidence(0);
      setError(null);
      recognitionRef.current.start();
    } catch (err) {
      setError("Failed to start speech recognition");
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  }, [isListening]);

  const resetTranscript = useCallback(() => {
    setTranscript("");
    setFinalTranscript("");
    setInterimTranscript("");
    setConfidence(0);
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    finalTranscript,
    confidence,
    startListening,
    stopListening,
    resetTranscript,
    isSupported,
    error,
  };
}
