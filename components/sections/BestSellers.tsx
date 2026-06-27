"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { SectionHeader } from "@/components/common/SectionHeader";

const FILTERS = ["All", "Kid Clothing", "Feeding Set", "Kid Toys", "Strollers"];

const PROMO_BANNER =
  "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/home4-bn-tab2.jpg";

const PRODUCT_IMAGE =
  "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/10/product-new-5-400x400.png";

const BEST_SELLERS: Product[] = [
  {
    id: "bs1",
    title: "Quilted Wind Jacket",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 55,
    oldPrice: 76,
    discountBadge: "-28%",
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Kid Clothing",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 312,
    code: "CLO09",
    categories: ["4-6 Years", "6-8 Years", "Jackets", "Winter Wear"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A warm, quilted jacket designed to keep kids cozy in cold weather.",
  },
  {
    id: "bs2",
    title: "Traditional Ride On Toys Kid",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 56,
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Kid Toys",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 184,
    code: "TOY11",
    categories: ["2-4 Years", "4-6 Years", "Ride On Toys", "Outdoor Toys"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A classic ride-on toy car for kids, built for safe indoor and outdoor play.",
  },
  {
    id: "bs3",
    title: "Tricycle For Kids To Learn To Walk",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 52,
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Strollers",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 147,
    code: "STR07",
    categories: ["2-4 Years", "4-6 Years", "Tricycles", "Outdoor Toys"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A sturdy tricycle to help young children build balance and confidence.",
  },
  {
    id: "bs4",
    title: "Feeding Set To Help Children Eat Easily",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 33,
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Feeding Set",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 268,
    code: "FEED05",
    categories: ["6 Months+", "1-3 Years", "Feeding Set", "Mealtime"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A complete feeding set with bowls, plates, and utensils for little hands.",
  },
  {
    id: "bs5",
    title: "Integer Tortor Eros Nas",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 55,
    oldPrice: 63,
    discountBadge: "-13%",
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Kid Clothing",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 201,
    code: "CLO10",
    categories: ["2-4 Years", "4-6 Years", "Sets", "Outerwear"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A cozy denim jacket set with a soft plush companion, perfect for little ones.",
  },
  {
    id: "bs6",
    title: "Est Luctus Facilisi Himen",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 35,
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Kid Clothing",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 158,
    code: "CLO11",
    categories: ["1-3 Years", "2-4 Years", "Outfit Sets"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A playful outfit set featuring a fun bear hood and matching pieces.",
  },
  {
    id: "bs7",
    title: "Piece Neon Striped Dress",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 60,
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Kid Clothing",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 132,
    code: "CLO12",
    categories: ["4-6 Years", "6-8 Years", "Dresses", "Summer Wear"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A charming dress with a matching sun hat, great for warm-weather outings.",
  },
  {
    id: "bs8",
    title: "Merries Diapers For Babies",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 4,
    reviews: 1,
    price: 21,
    badge: { label: "Best Seller", tone: "bestseller" },
    inStock: true,
    productType: "Feeding Set",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 521,
    code: "FEED04",
    categories: ["0-1 Years", "1-3 Years", "Diapers", "Baby Care"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description: "Soft and absorbent diapers designed for everyday comfort.",
  },
];

export function BestSellers({
  products = BEST_SELLERS,
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
      <SectionHeader title="Best Sellers" showLink={false}>
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
                onClick={() => setActiveFilter(filter)}
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
      </SectionHeader>
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

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {filtered.map((product) => (
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
