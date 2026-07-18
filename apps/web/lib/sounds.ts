// ============================================================
// Sound Effects - 75 Days Hard English Course
// Web Audio API oscillator beeps — no .mp3 files needed
// ============================================================

type SoundType = "correct" | "wrong" | "perfect" | "levelup" | "badge" | "click";

// Shared AudioContext (lazy-initialized)
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

// ─── Beep generator ──────────────────────────────────────────
function playBeep(
  frequency: number,
  duration: number,
  gain: number,
  type: OscillatorType = "sine",
  delay = 0
): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay);

  gainNode.gain.setValueAtTime(0, ctx.currentTime + delay);
  gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + delay + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime + delay + duration
  );

  oscillator.start(ctx.currentTime + delay);
  oscillator.stop(ctx.currentTime + delay + duration);
}

// ─── Sound Presets ────────────────────────────────────────────

function playCorrect(): void {
  // Happy ascending two-note chord
  playBeep(523.25, 0.15, 0.3, "sine", 0);    // C5
  playBeep(659.25, 0.2, 0.3, "sine", 0.05);  // E5
  playBeep(783.99, 0.25, 0.25, "sine", 0.1); // G5
}

function playWrong(): void {
  // Low buzz descending
  playBeep(300, 0.1, 0.3, "sawtooth", 0);
  playBeep(200, 0.2, 0.25, "sawtooth", 0.05);
}

function playPerfect(): void {
  // Full ascending arpeggio
  playBeep(523.25, 0.12, 0.25, "sine", 0);    // C5
  playBeep(659.25, 0.12, 0.25, "sine", 0.1);  // E5
  playBeep(783.99, 0.12, 0.25, "sine", 0.2);  // G5
  playBeep(1046.5, 0.25, 0.3, "sine", 0.3);   // C6
}

function playLevelUp(): void {
  // Dramatic fanfare
  playBeep(523.25, 0.1, 0.3, "triangle", 0);
  playBeep(659.25, 0.1, 0.3, "triangle", 0.1);
  playBeep(783.99, 0.1, 0.3, "triangle", 0.2);
  playBeep(1046.5, 0.1, 0.35, "triangle", 0.3);
  playBeep(1318.5, 0.3, 0.4, "triangle", 0.4);
}

function playBadge(): void {
  // Sparkle chime
  playBeep(880, 0.1, 0.2, "sine", 0);
  playBeep(1108.73, 0.1, 0.2, "sine", 0.08);
  playBeep(1318.51, 0.1, 0.2, "sine", 0.16);
  playBeep(1760, 0.2, 0.25, "sine", 0.24);
}

function playClick(): void {
  playBeep(1200, 0.05, 0.15, "sine", 0);
}

// ─── Public API ───────────────────────────────────────────────
export function playSoundEffect(type: SoundType): void {
  try {
    switch (type) {
      case "correct":  playCorrect(); break;
      case "wrong":    playWrong(); break;
      case "perfect":  playPerfect(); break;
      case "levelup":  playLevelUp(); break;
      case "badge":    playBadge(); break;
      case "click":    playClick(); break;
    }
  } catch {
    // Silently fail - sounds are not critical
  }
}

// ─── Sound Manager Class (for Howler-compatible interface) ────
export class SoundManager {
  private enabled: boolean;

  constructor(enabled = true) {
    this.enabled = enabled;
  }

  play(type: SoundType): void {
    if (!this.enabled) return;
    playSoundEffect(type);
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

export const soundManager = new SoundManager();
