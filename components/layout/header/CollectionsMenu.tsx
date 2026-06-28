"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductCard } from "@/components/product/ProductCard";
import { ViewModal } from "@/components/product/ViewModal";
import { CartDrawer, type CartItem } from "@/components/product/Cartdrawer";
import { Product } from "@/types/product";

export type Collection = {
  label: string;
  href: string;
  image?: string;
};

export const demoCollections: Collection[] = [
  {
    label: "New Arrivals",
    href: "/collections/new-arrivals",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=160&h=160&fit=crop",
  },
  {
    label: "Best Sellers",
    href: "/collections/best-sellers",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=160&h=160&fit=crop",
  },
  {
    label: "Summer Essentials",
    href: "/collections/summer-essentials",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=160&h=160&fit=crop",
  },
  {
    label: "Toys & Games",
    href: "/collections/toys-games",
    image:
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=160&h=160&fit=crop",
  },
  {
    label: "Kids Footwear",
    href: "/collections/kids-footwear",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=160&h=160&fit=crop",
  },
  {
    label: "School Ready",
    href: "/collections/school-ready",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=160&h=160&fit=crop",
  },
  {
    label: "Baby Care",
    href: "/collections/baby-care",
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=160&h=160&fit=crop",
  },
  {
    label: "Sale",
    href: "/collections/sale",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop",
  },
];

export const demoTopRatedProducts: Product[] = [
  {
    id: "integer-tortor-eros-nas",
    title: "Integer Tortor Eros Nas",
    price: 55,
    oldPrice: 63,
    rating: 4.5,
    reviews: 18,
    discountBadge: "-13%",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    ],
  } as Product,

  {
    id: "et-elit-vivamus-nisl",
    title: "Et Elit Vivamus Nisl",
    price: 29,
    oldPrice: 36,
    rating: 5,
    reviews: 32,
    discountBadge: "-19%",
    image:
      "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=200&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    ],
  } as Product,

  {
    id: "mussel-sleeve-t-shirt",
    title: "Mussel Sleeve T-Shirt",
    price: 95,
    rating: 4,
    reviews: 9,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    ],
  } as Product,

  {
    id: "baby-cotton-romper",
    title: "Baby Cotton Romper",
    price: 42,
    oldPrice: 50,
    rating: 4.8,
    reviews: 27,
    discountBadge: "-16%",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=200&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    ],
  } as Product,

  {
    id: "wooden-educational-toy",
    title: "Wooden Educational Toy",
    price: 34,
    oldPrice: 40,
    rating: 4.7,
    reviews: 41,
    discountBadge: "-15%",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    ],
  } as Product,

  {
    id: "kids-backpack-blue",
    title: "Kids Backpack Blue",
    price: 48,
    oldPrice: 60,
    rating: 4.9,
    reviews: 56,
    discountBadge: "-20%",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    ],
  } as Product,
];

interface CollectionsMenuProps {
  collections?: Collection[];
  topRatedProducts?: Product[];
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  label?: string;
  collectionsColumns?: number;
  productsColumns?: number;
  triggerClassName?: string;
}

export const CollectionsMenu = ({
  collections = demoCollections,
  topRatedProducts = demoTopRatedProducts,
  onQuickView,
  onAddToCart,
  label = "Collections",
  collectionsColumns,
  productsColumns = 3,
  triggerClassName = "",
}: CollectionsMenuProps) => {
  const collectionsGridCols =
    collectionsColumns ?? Math.min(collections.length, 4);

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    if (onQuickView) {
      onQuickView(product);
    } else {
      setQuickViewProduct(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    if (onAddToCart) {
      onAddToCart(product);
      return;
    }

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`flex items-center gap-1 text-white text-sm font-bold px-3.5 xl:px-5.5 py-3.75 whitespace-nowrap ${triggerClassName}`}
            style={{ backgroundColor: "#fbbf24" }}
          >
            {label}
            <ChevronDown size={14} strokeWidth={2} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center" className="p-6 w-5xl!">
          <div
            className="grid gap-8 w-full max-w-7xl"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            <div>
              <h3 className="text-sm font-extrabold text-ink mb-4 uppercase tracking-wide">
                Top Rated Products
              </h3>

              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${productsColumns}, minmax(0, 1fr))`,
                }}
              >
                {topRatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showQuickView={false}
                    showWishlist={false}
                    showAddToCart={false}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-ink mb-4 uppercase tracking-wide">
                Way to Shop
              </h3>

              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
                }}
              >
                {collections.map((collection) => (
                  <a
                    key={collection.href}
                    href={collection.href}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <span className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 group-hover:border-teal transition-all duration-300">
                      {collection.image && (
                        <img
                          src={collection.image}
                          alt={collection.label}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </span>

                    <span className="text-sm font-semibold text-ink text-center group-hover:text-teal-dark transition-colors">
                      {collection.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {!onQuickView && quickViewProduct && (
        <ViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      {!onAddToCart && (
        <CartDrawer
          open={cartOpen}
          onOpenChange={setCartOpen}
          items={cartItems}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          onViewCart={handleViewCart}
        />
      )}
    </>
  );
};
