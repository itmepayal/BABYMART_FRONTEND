"use client";

import { use, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { ProductCard } from "@/components/product/ProductCard";
import { MarketSidebar } from "@/components/market/MarketSidebar";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { ListToolbar, type ViewMode } from "@/components/common/ListToolbar";
import type { Product } from "@/types/product";
import {
  allProducts,
  categoryFilters,
  latestProducts,
  PRICE_MIN,
  PRICE_MAX,
  PRODUCTS_PER_PAGE,
} from "@/data/product";
import {
  allCollections,
  collectionCategoryMap,
  sortOptions,
} from "@/data/collection";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { EmptyState } from "@/components/common/EmptyState";
import { CollectionDetailPageProps, SortOption } from "@/types/collection";

const CollectionDetailPage = ({ params }: CollectionDetailPageProps) => {
  const { slug } = use(params);

  const collection = useMemo(
    () => allCollections.find((c) => c.slug === slug),
    [slug],
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    PRICE_MIN,
    PRICE_MAX,
  ]);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [view, setView] = useState<ViewMode>("grid");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  if (!collection) {
    notFound();
  }

  const collectionCategories = collectionCategoryMap[slug] ?? [];

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

  const scopedCategoryFilters =
    collectionCategories.length > 0
      ? categoryFilters.filter((c) => collectionCategories.includes(c.label))
      : categoryFilters;

  const collectionProducts = useMemo(() => {
    const combined = [...allProducts, ...latestProducts];
    if (collectionCategories.length === 0) return combined;
    return combined.filter((product) =>
      (product.categories ?? []).some((c) => collectionCategories.includes(c)),
    );
  }, [collectionCategories]);

  const filteredProducts = useMemo(() => {
    let result = collectionProducts.filter((product) => {
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
  }, [
    collectionProducts,
    selectedCategories,
    priceRange,
    selectedRatings,
    sortBy,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );

  const { paginatedProducts, rangeStart, rangeEnd } = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = Math.min(start + PRODUCTS_PER_PAGE, filteredProducts.length);
    return {
      paginatedProducts: filteredProducts.slice(start, end),
      rangeStart: filteredProducts.length === 0 ? 0 : start + 1,
      rangeEnd: end,
    };
  }, [currentPage, filteredProducts]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const gridColsClass =
    view === "grid"
      ? "grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      : view === "compact"
        ? "grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  return (
    <>
      <Breadcrumb
        title={collection!.label}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: collection!.label },
        ]}
      />

      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr]">
            <div className="lg:sticky lg:top-6">
              <MarketSidebar
                categoryFilters={scopedCategoryFilters}
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
              <ListToolbar
                sortBy={sortBy}
                sortOptions={sortOptions}
                onSortChange={(value) => {
                  setSortBy(value);
                  setCurrentPage(1);
                }}
                rangeStart={rangeStart}
                rangeEnd={rangeEnd}
                total={filteredProducts.length}
                view={view}
                onViewChange={setView}
              />

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
                <EmptyState
                  title="No products found"
                  description={`No products in ${collection!.label} match your filters. Try adjusting or clearing them.`}
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
          <NewsletterBanner />
        </div>
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

export default CollectionDetailPage;
