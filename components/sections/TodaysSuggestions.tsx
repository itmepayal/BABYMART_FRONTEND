"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { Product } from "@/types/product";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Products } from "@/lib/constants";

const PAGE_SIZE = 10;

export function TodaysSuggestions({
  products = Products,
  onQuickView = () => {},
}: {
  products?: Product[];
  onQuickView?: (product: Product) => void;
}) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );
  const [page, setPage] = useState(0);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const pageCount = Math.max(1, Math.ceil(products.length / PAGE_SIZE));

  const pages = Array.from({ length: pageCount }, (_, i) =>
    products.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE),
  );

  const goToPage = (direction: 1 | -1) => {
    setPage((p) => (p + direction + pageCount) % pageCount);
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
      <div>
        <SectionHeader title="Today's Suggestions" showLink={false}>
          {pageCount > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => goToPage(-1)}
                className="flex h-9 w-9 items-center justify-center rounded border border-border bg-white text-(--body_typo-color) shadow-sm transition-colors hover:border-main hover:text-main"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => goToPage(1)}
                className="flex h-9 w-9 items-center justify-center rounded border border-border bg-white text-(--body_typo-color) shadow-sm transition-colors hover:border-main hover:text-main"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </SectionHeader>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${pageCount * 100}%`,
              transform: `translateX(-${(page * 100) / pageCount}%)`,
            }}
          >
            {pages.map((pageProducts, i) => (
              <div
                key={i}
                style={{ width: `${100 / pageCount}%`, flexShrink: 0 }}
                className="px-0"
              >
                <div
                  className="
                    grid grid-cols-2 gap-3 sm:gap-4
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                  "
                >
                  {pageProducts.map((product) => (
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
              </div>
            ))}
          </div>
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
        onCheckout={handleCheckout}
        onViewCart={handleViewCart}
      />
    </section>
  );
}
