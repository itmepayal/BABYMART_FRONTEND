"use client";

import { useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";

type SaleCategory = {
  label: string;
  slug: string;
};

const saleCategories: SaleCategory[] = [
  { label: "Toys", slug: "toys" },
  { label: "Clothes", slug: "clothes" },
];

const demoSaleProducts: (Product & { category: string })[] = [
  {
    id: "suscipit-lobortis-nisl",
    title: "Suscipit Lobortis Nisl",
    price: 31,
    oldPrice: 38,
    rating: 4,
    reviews: 22,
    discountBadge: "-18%",
    category: "clothes",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },

  {
    id: "quilted-wind-jacket",
    title: "Quilted Wind Jacket",
    price: 55,
    oldPrice: 76,
    rating: 5,
    reviews: 41,
    discountBadge: "-28%",
    category: "clothes",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },

  {
    id: "habit-nisl-tellus-congue",
    title: "Habit Nisl Tellus Congue",
    price: 45,
    oldPrice: 64,
    rating: 0,
    reviews: 0,
    discountBadge: "-30%",
    category: "clothes",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },

  {
    id: "neque-nisl-vestibulum-duis",
    title: "Neque Nisl Vestibulum Duis",
    price: 40,
    oldPrice: 47,
    rating: 0,
    reviews: 0,
    discountBadge: "-15%",
    category: "clothes",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },

  {
    id: "integer-tortor-eros-nas",
    title: "Integer Tortor Eros Nas",
    price: 55,
    oldPrice: 63,
    rating: 4.5,
    reviews: 18,
    discountBadge: "-13%",
    category: "clothes",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },

  {
    id: "wooden-educational-toy",
    title: "Wooden Educational Toy",
    price: 34,
    oldPrice: 40,
    rating: 4.7,
    reviews: 41,
    discountBadge: "-15%",
    category: "toys",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },

  {
    id: "kids-backpack-blue",
    title: "Kids Backpack Blue",
    price: 48,
    oldPrice: 60,
    rating: 4.9,
    reviews: 56,
    discountBadge: "-20%",
    category: "toys",
    image:
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=300&h=300&fit=crop",
    ],
  } as Product & { category: string },
];

interface SaleMenuProps {
  label?: string;
  triggerClassName?: string;
}

export function SaleMenu({
  label = "Sale",
  triggerClassName = "",
}: SaleMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("clothes");

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const c of saleCategories) {
      map[c.slug] = demoSaleProducts.filter(
        (p) => p.category === c.slug,
      ).length;
    }
    return map;
  }, []);

  const filteredProducts = useMemo(
    () =>
      demoSaleProducts.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex items-center gap-1 text-white text-sm font-bold px-3.5 xl:px-5.5 py-3.75 whitespace-nowrap`}
          >
            {label}
            <ChevronDown size={14} strokeWidth={2} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center" className="p-6 w-5xl!">
          <nav
            aria-label="Filter sale items by category"
            className="flex flex-wrap items-center justify-center gap-1.5 mb-6 sm:gap-2"
          >
            {saleCategories.map((category) => {
              const active = activeCategory === category.slug;
              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveCategory(category.slug)}
                  aria-pressed={active}
                  className={[
                    "inline-flex items-center gap-1.5 whitespace-nowrap rounded border px-3 py-1.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "border-main bg-main text-white shadow-sm"
                      : "border-border bg-transparent text-(--body_typo-color) hover:border-main hover:text-main",
                  ].join(" ")}
                >
                  {category.label}
                  <span
                    className={[
                      "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
                      active
                        ? "bg-white/20 text-white"
                        : "bg-main-mix-bg/60 text-(--body_typo-color)",
                    ].join(" ")}
                  >
                    {counts[category.slug] ?? 0}
                  </span>
                </button>
              );
            })}
          </nav>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showQuickView={false}
                  showWishlist={false}
                  showAddToCart={false}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-(--body_typo-color) py-16">
              No sale items in this category right now.
            </p>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
