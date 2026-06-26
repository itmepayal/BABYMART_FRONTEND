"use client";

import { Sliders, Banners } from "@/lib/constants";
import { useEffect, useRef, useState, useCallback } from "react";

const AUTO_PLAY_INTERVAL = 3500;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => setCurrent((index + Sliders.length) % Sliders.length),
    [],
  );

  const currentRef = useRef(current);
  currentRef.current = current;

  const next = useCallback(() => goTo(currentRef.current + 1), [goTo]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
  }, [next, stopTimer]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  return (
    <section className="py-3 sm:pt-6 px-3.5 sm:px-0">
      <div
        className="
          mx-auto max-w-330 grid sm:gap-6 gap-3
          grid-cols-1
          md:grid-cols-[2fr_1fr] md:grid-rows-2
        "
      >
        <div
          className="
            relative col-span-1 overflow-hidden rounded 
            row-span-1 md:row-span-2
          "
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              width: `${Sliders.length * 100}%`,
              transform: `translateX(-${(current * 100) / Sliders.length}%)`,
            }}
          >
            {Sliders.map((slide) => (
              <div
                key={slide.id}
                className="relative min-h-45 sm:min-h-60 md:min-h-80 "
                style={{ width: `${100 / Sliders.length}%`, flexShrink: 0 }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {Sliders.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2 rounded-full border-none p-0 transition-all duration-300 focus:outline-none",
                  i === current
                    ? "w-5.5 bg-[#ffc857]"
                    : "w-2 bg-white/55 hover:bg-white/90",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:contents">
          {Banners.map((banner) => (
            <a
              key={banner.id}
              href={banner.href}
              className="
                row-span-1 overflow-hidden rounded
                transition-transform duration-300 hover:scale-[1.02]
              "
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="h-32 w-full object-cover sm:h-40 md:h-full"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
