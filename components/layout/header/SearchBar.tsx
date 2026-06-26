"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Star } from "lucide-react";

type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
};

type Post = {
  id: string;
  title: string;
};

const DUMMY_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "White One-Piece Dress",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop",
    rating: 3,
    reviewCount: 1,
    price: 34.76,
    oldPrice: 36.0,
    discountPercent: 3,
  },
  {
    id: "2",
    name: "Kids Cotton T-Shirt Set",
    image:
      "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=200&h=200&fit=crop",
    rating: 4,
    reviewCount: 12,
    price: 18.5,
  },
];

const DUMMY_POSTS: Post[] = [];

const Rating = ({ value, count }: { value: number; count: number }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < value
              ? "fill-yellow-400 text-yellow-400"
              : "fill-transparent text-gray-300"
          }
        />
      ))}
    </div>
    <span className="text-xs text-gray-500">
      {count} review{count !== 1 ? "s" : ""}
    </span>
  </div>
);

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const trimmed = query.trim();
  const showResults = isOpen && trimmed.length > 0;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!trimmed) return;
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(t);
  }, [trimmed]);

  const filteredProducts = trimmed
    ? DUMMY_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(trimmed.toLowerCase()),
      )
    : [];
  const filteredPosts = trimmed
    ? DUMMY_POSTS.filter((p) =>
        p.title.toLowerCase().includes(trimmed.toLowerCase()),
      )
    : [];

  const hasNoResults =
    trimmed.length > 0 &&
    filteredProducts.length === 0 &&
    filteredPosts.length === 0 &&
    !isLoading;

  return (
    <div
      ref={containerRef}
      className="hidden sm:block flex-1 max-w-150 mx-auto relative"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-11 overflow-hidden rounded-md border-[1.5px] border-line relative z-10 bg-white"
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Enter key to search"
          className="flex-1 w-0 min-w-0 bg-white px-3 sm:px-4.5 text-sm font-medium outline-none"
        />

        <button
          type="submit"
          className="flex shrink-0 items-center gap-1.5 bg-teal px-3.5 sm:px-6 text-sm font-bold text-white transition-colors hover:bg-teal-dark"
          aria-label="Search"
        >
          <Search size={16} strokeWidth={2} />
          <span className="hidden md:inline">Search</span>
        </button>
      </form>

      {showResults && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 max-h-[70vh] overflow-y-auto rounded-md border border-line bg-white p-5 shadow-xl">
          {isLoading ? (
            <div className="flex items-center justify-center py-8 text-sm text-gray-400">
              Searching…
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">Products</h3>
                {filteredProducts.length > 0 && (
                  <button
                    type="button"
                    className="text-sm font-medium text-teal hover:underline"
                  >
                    View all
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <p className="mt-2 text-sm text-gray-400">
                  No results found for &ldquo;{trimmed}&rdquo; in products.
                </p>
              ) : (
                <div className="mt-3 flex flex-col gap-4">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      className="group flex items-center gap-4 text-left"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
                        {product.discountPercent && (
                          <span className="absolute left-1.5 top-1.5 z-10 rounded bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold text-gray-900">
                            -{product.discountPercent}%
                          </span>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                          {product.name}
                        </p>
                        <div className="mt-1">
                          <Rating
                            value={product.rating}
                            count={product.reviewCount}
                          />
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          {product.oldPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-sm font-bold text-teal">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <h3 className="text-sm font-bold text-gray-900">Posts</h3>
                {filteredPosts.length > 0 && (
                  <button
                    type="button"
                    className="text-sm font-medium text-teal hover:underline"
                  >
                    View all
                  </button>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {filteredPosts.length === 0
                  ? `No results found for "${trimmed}" in all posts.`
                  : null}
              </p>

              {hasNoResults && filteredPosts.length === 0 && (
                <div className="mt-4 flex flex-col items-center gap-1 py-4 text-center">
                  <p className="text-sm text-gray-500">
                    Nothing matched &ldquo;{trimmed}&rdquo;. Try a different
                    keyword.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
