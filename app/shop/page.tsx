"use client";

import { useMemo, useState } from "react";
import { List, Grid2x2, Columns3 } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { ProductCard } from "@/components/product/ProductCard";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { NewsletterBanner } from "@/components/blog/detail/NewsletterBanner";
import BlogEmptyState from "@/components/blog/BlogEmptyState";
import type { Product } from "@/types/product";
import {
  allProducts,
  PRICE_MIN,
  PRICE_MAX,
  PRODUCTS_PER_PAGE,
} from "@/data/product";

type SortOption = "default" | "price-asc" | "price-desc" | "rating";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "Default sorting" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Highest rated" },
];

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [view, setView] = useState<"list" | "grid" | "compact">("grid");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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
    return [...allProducts].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
      return 0;
    });
  }, [sortBy]);

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
      ? "grid-cols-3 sm:grid-cols-5"
      : view === "compact"
        ? "grid-cols-4 sm:grid-cols-6"
        : "grid-cols-2 sm:grid-cols-4";

  return (
    <>
      <Breadcrumb
        title="Shop"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <div className="mx-auto max-w-330 px-4 py-10 sm:py-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as SortOption);
                setCurrentPage(1);
              }}
              className="rounded border border-gray-200 px-3 py-1.5 text-sm text-gray-700 focus:border-main focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-700">
                {paginatedProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-gray-700">
                {filteredProducts.length}
              </span>{" "}
              results
            </p>

            <div className="flex items-center gap-1">
              {(
                [
                  { key: "list", Icon: List, label: "List view" },
                  { key: "grid", Icon: Grid2x2, label: "Grid view" },
                  { key: "compact", Icon: Columns3, label: "Compact view" },
                ] as const
              ).map(({ key, Icon, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setView(key)}
                  aria-label={label}
                  aria-pressed={view === key}
                  className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
                    view === key
                      ? "bg-main text-white"
                      : "text-gray-500 hover:bg-orange-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {paginatedProducts.length > 0 ? (
          <div
            className={`grid items-start gap-x-5 gap-y-6 ${gridColsClass}`}
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
            description="No products available right now."
          />
        )}

        {totalPages > 1 && (
          <div className="mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </div>
        )}
      </div>

      <div className="mx-auto max-w-330 w-full px-4 pb-10">
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

export default ShopPage;
