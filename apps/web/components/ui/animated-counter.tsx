"use client";
// AnimatedCounter - smoothly counts up to a target number when visible
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", className = "", decimals = 0 }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setValue(end * easeOut(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const format = (num: number) => {
    const fixed = num.toFixed(decimals);
    return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return <span ref={ref} className={className}>{prefix}{format(value)}{suffix}</span>;
}
