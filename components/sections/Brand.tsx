"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BrandCard } from "@/components/brand/BrandCard";
import { BRANDS } from "@/lib/constants";

export function Brands() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : track.clientWidth / 2;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <>
      <SectionHeader title="Famous Brands" showLink={false}>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="flex h-9 w-9 items-center justify-center rounded border border-border bg-white text-(--body_typo-color) shadow-sm transition-colors hover:border-main hover:text-main"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="flex h-9 w-9 items-center justify-center rounded border border-border bg-white text-(--body_typo-color) shadow-sm transition-colors hover:border-main hover:text-main"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </SectionHeader>
      <div
        ref={trackRef}
        className="
            grid grid-rows-2 grid-flow-col auto-cols-[calc((100%-1rem)/2)] gap-3 sm:gap-4
            overflow-x-auto scroll-smooth snap-x snap-mandatory
            scrollbar-none [&::-webkit-scrollbar]:hidden
            sm:auto-cols-[calc((100%-2rem)/3)]
            md:auto-cols-[calc((100%-3rem)/4)]
            lg:auto-cols-[calc((100%-4rem)/5)]
            xl:auto-cols-[calc((100%-5rem)/6)]
          "
      >
        {BRANDS.map((brand) => (
          <div key={brand.id} className="snap-start">
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
    </>
  );
}
