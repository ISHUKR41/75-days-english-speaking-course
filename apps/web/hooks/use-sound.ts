"use client";
// ============================================================
// useSound - Sound effects hook using Web Audio API
// Returns: { playCorrect, playWrong, playPerfect, playLevelUp,
//            playBadge, isSoundEnabled, toggleSound }
// ============================================================

import { useCallback } from "react";
import { useAppStore } from "@/store/use-app-store";
import { playSoundEffect } from "@/lib/sounds";

export function useSound() {
  const { soundEnabled, toggleSound, setSoundEnabled } = useAppStore();

  const play = useCallback(
    (type: "correct" | "wrong" | "perfect" | "levelup" | "badge" | "click") => {
      if (!soundEnabled) return;
      try {
        playSoundEffect(type);
      } catch {
        // Silently fail
      }
    },
    [soundEnabled]
  );

  return {
    playCorrect: () => play("correct"),
    playWrong: () => play("wrong"),
    playPerfect: () => play("perfect"),
    playLevelUp: () => play("levelup"),
    playBadge: () => play("badge"),
    playClick: () => play("click"),
    isSoundEnabled: soundEnabled,
    toggleSound,
    setSoundEnabled,
  };
}
