"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ViewModal } from "@/components/layout/flash-sale/ViewModal";
import { Products } from "@/lib/constants";
import { ProductCard } from "@/components/layout/flash-sale/ProductCard";
import { Product } from "@/types/product";

const SALE_END =
  Date.now() + (550 * 24 * 60 * 60 + 2 * 60 * 60 + 2 * 60 + 5) * 1000;

function useCountdown(target: number) {
  const [left, setLeft] = useState(Math.max(target - Date.now(), 0));

  useEffect(() => {
    const id = setInterval(() => {
      setLeft(Math.max(target - Date.now(), 0));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const d = Math.floor(left / (24 * 60 * 60 * 1000));
  const h = Math.floor((left / (60 * 60 * 1000)) % 24);
  const m = Math.floor((left / (60 * 1000)) % 60);
  const s = Math.floor((left / 1000) % 60);

  return { d, h, m, s };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function FlashSale() {
  const { d, h, m, s } = useCountdown(SALE_END);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : track.clientWidth / 2;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="sm:py-3 pb-3 sm:pb-6 sm:px-0">
      <div className="mx-auto max-w-330 px-4 sm:px-0">
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <h2 className="text-xl font-extrabold text-(--title_typo-color) sm:text-2xl lg:text-3xl">
              Flash Sale
            </h2>

            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
              {[
                { v: d, label: "d" },
                { v: h, label: "h" },
                { v: m, label: "m" },
                { v: s, label: "s" },
              ].map((unit, i) => (
                <div
                  key={unit.label}
                  className="flex items-center gap-1 sm:gap-1.5"
                >
                  <span className="rounded bg-coral px-2 py-1 text-xs font-bold text-white sm:px-2.5 sm:py-1.5 sm:text-sm">
                    {pad(unit.v)} {unit.label}
                  </span>
                  {i < 3 && (
                    <span className="text-xs font-bold text-coral sm:text-sm">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="
              group flex w-fit items-center gap-1.5 rounded border border-border
              px-4 py-1.5 text-sm font-medium text-(--title_typo-color)
              transition-all duration-200 ease-out
              hover:border-dashed hover:border-main hover:text-main
            "
          >
            See More
            <ChevronRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="
              grid auto-cols-[calc((100%-1rem)/2)] grid-flow-col gap-3 sm:gap-4
              overflow-x-auto scroll-smooth snap-x snap-mandatory
              scrollbar-none [&::-webkit-scrollbar]:hidden
              sm:auto-cols-[calc((100%-2rem)/3)]
              md:auto-cols-[calc((100%-3rem)/4)]
              lg:auto-cols-[calc((100%-4rem)/5)]
            "
          >
            {Products.map((product) => (
              <div key={product.id} data-card>
                <ProductCard
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="absolute -left-4 top-[38%] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded border border-border bg-white text-(--body_typo-color) shadow-sm transition-colors hover:border-main hover:text-main lg:flex"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="absolute -right-4 top-[38%] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded border border-border bg-white text-(--body_typo-color) shadow-sm transition-colors hover:border-main hover:text-main lg:flex"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {quickViewProduct && (
        <ViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
