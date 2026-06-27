"use client";

import { useEffect, useState } from "react";

export function useCountdown(target: number) {
  const [left, setLeft] = useState(() => Math.max(target - Date.now(), 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setLeft(Math.max(target - Date.now(), 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return {
    days: Math.floor(left / (1000 * 60 * 60 * 24)),
    hours: Math.floor((left / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((left / (1000 * 60)) % 60),
    seconds: Math.floor((left / 1000) % 60),
  };
}

export const pad = (value: number) => value.toString().padStart(2, "0");
