"use client";

import { useEffect, useRef, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const eased = 90 * (1 - Math.exp(-elapsed / 900));
      setProgress((prev) => (prev < 90 ? eased : prev));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const finish = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setProgress(100);
      window.setTimeout(() => {
        setFading(true);
        window.setTimeout(() => setVisible(false), 450);
      }, 300);
    };

    if (document.readyState === "complete") {
      const t = window.setTimeout(finish, 600);
      return () => {
        window.clearTimeout(t);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    window.addEventListener("load", finish);
    return () => {
      window.removeEventListener("load", finish);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  const logoLetters = ["K", "i", "d", "X", "t", "o", "r", "e"];

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden bg-white transition-opacity duration-450 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className="absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-25"
        style={{ backgroundColor: "var(--teal-light)" }}
      />
      <div
        className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "var(--sun)" }}
      />

      <span
        className="absolute h-3 w-3 rounded-full animate-bounce"
        style={{
          backgroundColor: "var(--coral)",
          top: "32%",
          left: "38%",
          animationDelay: "0ms",
          animationDuration: "1800ms",
        }}
      />
      <span
        className="absolute h-2.5 w-2.5 rounded-full animate-bounce"
        style={{
          backgroundColor: "var(--sun)",
          top: "36%",
          right: "36%",
          animationDelay: "250ms",
          animationDuration: "2100ms",
        }}
      />
      <span
        className="absolute h-2 w-2 rounded-full animate-bounce"
        style={{
          backgroundColor: "var(--teal-dark)",
          bottom: "36%",
          left: "34%",
          animationDelay: "500ms",
          animationDuration: "1900ms",
        }}
      />

      <div className="relative z-10 mb-7 flex items-center text-3xl sm:text-4xl font-extrabold tracking-tight">
        {logoLetters.map((letter, i) => (
          <span
            key={i}
            className="inline-block animate-letter-in"
            style={{
              color: i < 3 ? "var(--teal)" : "var(--coral)",
              animationDelay: `${i * 60}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="relative z-10 w-48 sm:w-56">
        <div
          className="h-1.5 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "var(--teal-light)" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-200 ease-out"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, var(--teal) 0%, var(--coral) 100%)",
            }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-(--body_typo-color)">
          <span>Loading your store</span>
          <span className="tabular-nums">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
