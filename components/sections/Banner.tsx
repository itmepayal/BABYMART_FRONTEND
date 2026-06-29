"use client";

import { BANNERS, SLIDERS } from "@/data/banner";
import { useEffect, useRef, useState, useCallback } from "react";

const AUTO_PLAY_INTERVAL = 3500;

export function Banner() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => setCurrent((index + SLIDERS.length) % SLIDERS.length),
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
    <section>
      <div className="mx-auto max-w-330 flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5">
        <div
          className="relative w-full md:w-[66%] overflow-hidden rounded shrink-0"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${SLIDERS.length * 100}%`,
              transform: `translateX(-${(current * 100) / SLIDERS.length}%)`,
            }}
          >
            {SLIDERS.map((slide) => (
              <div
                key={slide.id}
                style={{ width: `${100 / SLIDERS.length}%` }}
                className="shrink-0"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="block w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {SLIDERS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2 rounded-full border-0 p-0 cursor-pointer transition-all duration-300 focus:outline-none",
                  i === current
                    ? "w-5 bg-[#ffc857]"
                    : "w-2 bg-white/60 hover:bg-white/90",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:flex-1 md:flex-col gap-3 sm:gap-4 md:gap-5">
          {BANNERS.map((banner) => (
            <a
              key={banner.id}
              href={banner.href}
              className="block md:w-full md:flex-1 overflow-hidden rounded transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                draggable={false}
                className="block w-full h-full object-cover"
                style={{ minHeight: "100px" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
