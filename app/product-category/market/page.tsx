"use client";

import { useMemo, useState } from "react";
import { List, Grid2x2, Columns3 } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { ProductCard } from "@/components/product/ProductCard";
import { MarketSidebar } from "@/components/market/MarketSidebar";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import type { Product } from "@/types/product";
import {
  allProducts,
  categoryFilters,
  latestProducts,
  PRICE_MIN,
  PRICE_MAX,
  PRODUCTS_PER_PAGE,
} from "@/data/product";
import { NewsletterBanner } from "@/components/blog/detail/NewsletterBanner";
import BlogEmptyState from "@/components/blog/BlogEmptyState";

type SortOption = "default" | "price-asc" | "price-desc" | "rating";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "Default sorting" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Highest rated" },
];

const MarketPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    PRICE_MIN,
    PRICE_MAX,
  ]);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [view, setView] = useState<"list" | "grid" | "compact">("grid");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCategory = (label: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label],
    );
  };

  const toggleRating = (rating: number) => {
    setCurrentPage(1);
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRatings([]);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setCurrentPage(1);
    setPriceRange(range);
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

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        (product.categories ?? []).some((c) => selectedCategories.includes(c));

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const productRating = product.rating ?? 0;
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.some((r) => productRating >= r);

      return matchesCategory && matchesPrice && matchesRating;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
      return 0;
    });

    return result;
  }, [selectedCategories, priceRange, selectedRatings, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [currentPage, filteredProducts]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const gridColsClass =
    view === "grid"
      ? "grid-cols-3 sm:grid-cols-4"
      : view === "compact"
        ? "grid-cols-4 sm:grid-cols-5"
        : "grid-cols-2 sm:grid-cols-3";

  return (
    <>
      <Breadcrumb
        title="Market"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market" }]}
      />

      <div className="mx-auto max-w-330 px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr]">
          <div className="lg:sticky lg:top-6">
            <MarketSidebar
              categoryFilters={categoryFilters}
              selectedCategories={selectedCategories}
              onToggleCategory={toggleCategory}
              onClearCategories={clearFilters}
              priceMin={PRICE_MIN}
              priceMax={PRICE_MAX}
              priceRange={priceRange}
              onPriceRangeChange={handlePriceRangeChange}
              selectedRatings={selectedRatings}
              onToggleRating={toggleRating}
              latestProducts={latestProducts}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gray-100 px-4 py-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded border border-gray-200 px-3 py-1.5 text-sm text-(--body_typo-color) focus:border-main focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-3">
                <p className="text-sm text-(--body_typo-color)">
                  Showing {paginatedProducts.length} of{" "}
                  {filteredProducts.length} results
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    aria-label="List view"
                    aria-pressed={view === "list"}
                    className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
                      view === "list"
                        ? "bg-main text-white"
                        : "text-(--body_typo-color) hover:bg-main-mix-bg/40"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                    aria-pressed={view === "grid"}
                    className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
                      view === "grid"
                        ? "bg-main text-white"
                        : "text-(--body_typo-color) hover:bg-main-mix-bg/40"
                    }`}
                  >
                    <Grid2x2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("compact")}
                    aria-label="Compact grid view"
                    aria-pressed={view === "compact"}
                    className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
                      view === "compact"
                        ? "bg-main text-white"
                        : "text-(--body_typo-color) hover:bg-main-mix-bg/40"
                    }`}
                  >
                    <Columns3 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {paginatedProducts.length > 0 ? (
              <div
                className={`grid items-start gap-x-6 gap-y-6 transition-none ${gridColsClass}`}
                style={{ minHeight: "400px" }}
              >
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <BlogEmptyState
                title="No products found"
                description="Try adjusting your filters or clear them to see more results."
              />
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            )}
          </div>
        </div>
      </div>

      <div className="max-w-330 mx-auto w-full">
        <NewsletterBanner />
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
        onCheckout={() => console.log("checkout", cartItems)}
        onViewCart={() => console.log("view cart", cartItems)}
      />
    </>
  );
};

export default MarketPage;
