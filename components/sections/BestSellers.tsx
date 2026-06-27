"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { FilterHeader } from "@/components/common/SectionHeader";
import { Products, PROMO_BANNER } from "@/lib/constants";

const FILTERS = ["All", "Kid Clothing", "Feeding Set", "Kid Toys", "Strollers"];
const ITEMS_PER_PAGE = 8;

export function BestSellers({
  products = Products,
  onQuickView = () => {},
}: {
  products?: Product[];
  onQuickView?: (product: Product) => void;
}) {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: products.length };
    for (const f of FILTERS.slice(1)) {
      map[f] = products.filter((p) => p.productType === f).length;
    }
    return map;
  }, [products]);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.productType === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(clamped);
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
    <section>
      <FilterHeader title="Best Sellers" showLink={false}>
        <nav
          aria-label="Filter best sellers by category"
          className="flex flex-wrap items-center gap-1.5 sm:gap-2"
        >
          {FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                aria-pressed={active}
                className={[
                  "inline-flex items-center gap-1.5 whitespace-nowrap rounded border px-3 py-1.5 text-sm font-medium transition-all duration-200",
                  active
                    ? "border-main bg-main text-white shadow-sm"
                    : "border-border bg-transparent text-(--body_typo-color) hover:border-main hover:text-main",
                ].join(" ")}
              >
                {filter}
                <span
                  className={[
                    "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
                    active
                      ? "bg-white/20 text-white"
                      : "bg-main-mix-bg/60 text-(--body_typo-color)",
                  ].join(" ")}
                >
                  {counts[filter] ?? 0}
                </span>
              </button>
            );
          })}
        </nav>
      </FilterHeader>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[400px_1fr]">
        <a
          href="#"
          className="group relative hidden overflow-hidden rounded bg-pink-100 lg:block"
        >
          <img
            src={PROMO_BANNER}
            alt="Singles Day — enjoy the sale, all items discounted"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </a>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {paginated.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(product) => {
                  setQuickViewProduct(product);
                  onQuickView(product);
                }}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-50 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border text-center">
            <p className="font-semibold text-(--title_typo-color)">
              Nothing here yet
            </p>
            <p className="text-sm text-(--body_typo-color)">
              Try a different category, or check back soon.
            </p>
          </div>
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-6 flex items-center justify-center gap-1.5 sm:gap-2"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center justify-center rounded border border-border px-3 py-1.5 text-sm font-medium text-(--body_typo-color) transition-all duration-200 hover:border-main hover:text-main disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-(--body_typo-color)"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const active = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={active ? "page" : undefined}
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded border text-sm font-medium transition-all duration-200",
                  active
                    ? "border-main bg-main text-white shadow-sm"
                    : "border-border bg-transparent text-(--body_typo-color) hover:border-main hover:text-main",
                ].join(" ")}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center justify-center rounded border border-border px-3 py-1.5 text-sm font-medium text-(--body_typo-color) transition-all duration-200 hover:border-main hover:text-main disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-(--body_typo-color)"
          >
            Next
          </button>
        </nav>
      )}

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
    </section>
  );
}
