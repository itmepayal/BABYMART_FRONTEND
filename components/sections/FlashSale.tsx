"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { Products } from "@/lib/constants";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { SectionHeader } from "@/components/common/SectionHeader";
import { pad, useCountdown } from "@/hooks/use-countdown";

const SALE_END =
  Date.now() + (550 * 24 * 60 * 60 + 2 * 60 * 60 + 2 * 60 + 5) * 1000;

export function FlashSale() {
  const { days, hours, minutes, seconds } = useCountdown(SALE_END);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : track.clientWidth / 2;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.title,
          image: product.image,
          qty: 1,
          price: product.price,
        },
      ];
    });
    setCartOpen(true);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("checkout", cartItems);
  };

  const handleViewCart = () => {
    console.log("view cart", cartItems);
  };

  return (
    <>
      <SectionHeader title="Flash Sale">
        <div className="sm:flex flex-wrap items-center gap-1 sm:gap-1.5 hidden">
          {[
            { v: days, label: "d" },
            { v: hours, label: "h" },
            { v: minutes, label: "m" },
            { v: seconds, label: "s" },
          ].map((unit, i) => (
            <div
              key={unit.label}
              className="flex items-center gap-1 sm:gap-1.5"
            >
              <span className="rounded bg-red-600 px-2 py-1 text-base font-semibold text-white sm:px-2.5 sm:py-2.5 sm:text-lg">
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
      </SectionHeader>
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
                onAddToCart={handleAddToCart}
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

      {quickViewProduct && (
        <ViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onViewCart={handleViewCart}
      />
    </>
  );
}
