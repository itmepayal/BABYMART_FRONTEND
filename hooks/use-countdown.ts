"use client";

import { useEffect, useState } from "react";

export function useCountdown(target: number) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    setLeft(Math.max(target - Date.now(), 0));

    const timer = setInterval(() => {
      setLeft(Math.max(target - Date.now(), 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const safeLeft = left ?? 0;

  return {
    days: Math.floor(safeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeLeft / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeLeft / (1000 * 60)) % 60),
    seconds: Math.floor((safeLeft / 1000) % 60),
  };
}

export const pad = (value: number) => value.toString().padStart(2, "0");
