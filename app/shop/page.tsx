"use client";

import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { ProductCard } from "@/components/product/ProductCard";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { EmptyState } from "@/components/common/EmptyState";
import { ListToolbar, type ViewMode } from "@/components/common/ListToolbar";
import type { Product, SortOption } from "@/types/product";
import { allProducts, PRODUCTS_PER_PAGE, sortOptions } from "@/data/product";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [view, setView] = useState<ViewMode>("grid");
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
        title="Shop"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14">
          {paginatedProducts.length > 0 ? (
            <>
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

              <div
                className={`grid items-start gap-2 xs:gap-3 sm:gap-4 md:gap-5 ${gridColsClass}`}
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
            </>
          ) : (
            <EmptyState
              title="No products found"
              description="No products available right now."
            />
          )}

          {totalPages > 1 && (
            <div className="flex justify-center overflow-x-auto border-t border-gray-100 pt-6 sm:pt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          )}
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

export default ShopPage;
