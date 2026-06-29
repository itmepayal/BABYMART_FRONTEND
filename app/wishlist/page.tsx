"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { HiOutlineHeart } from "react-icons/hi2";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { EmptyState } from "@/components/common/EmptyState";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import {
  wishlistItems as initialWishlistItems,
  WISHLIST_PER_PAGE,
  type WishlistItem,
} from "@/data/wishlist";

const formatPrice = (price: number) => `$${price.toFixed(2)}`;

const WishlistPage = () => {
  const [items, setItems] = useState<WishlistItem[]>(initialWishlistItems);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / WISHLIST_PER_PAGE));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * WISHLIST_PER_PAGE;
    return items.slice(start, start + WISHLIST_PER_PAGE);
  }, [items, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemove = (id: string) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      const nextTotalPages = Math.max(
        1,
        Math.ceil(next.length / WISHLIST_PER_PAGE),
      );
      setCurrentPage((page) => Math.min(page, nextTotalPages));
      return next;
    });
  };

  return (
    <>
      <Breadcrumb
        title="Wishlist"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
      />
      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {paginatedItems.length > 0 ? (
            <div>
              <table className="w-full min-w-330 border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 text-sm font-medium text-gray-500">
                      Product Image
                    </th>
                    <th className="py-4 pr-4 text-sm font-medium text-gray-500">
                      Product Name
                    </th>
                    <th className="py-4 pr-4 text-center text-sm font-medium text-gray-500">
                      Unit Price
                    </th>
                    <th className="py-4 pr-4 text-center text-sm font-medium text-gray-500">
                      Stock status
                    </th>
                    <th className="py-4 text-right text-sm font-medium text-gray-500">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-5 pr-4">
                        <div className="h-20 w-20 overflow-hidden rounded bg-gray-50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-5 pr-4 text-sm text-(--body_typo-color)">
                        {item.name}
                      </td>
                      <td className="py-5 pr-4 text-center text-base font-semibold text-main">
                        {formatPrice(item.price)}
                      </td>
                      <td className="py-5 pr-4 text-center text-sm text-(--body_typo-color)">
                        {item.inStock ? "In stock" : "Out of stock"}
                      </td>
                      <td className="py-5 text-right">
                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          aria-label={`Remove ${item.name} from wishlist`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded text-rose-400 transition-colors hover:bg-rose-50 hover:text-rose-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              icon={HiOutlineHeart}
              title="Your wishlist is empty"
              description="Save items you love and they'll show up here."
            />
          )}

          {totalPages > 1 && (
            <div className="flex justify-center border-t border-gray-100 pt-6 sm:pt-8">
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
    </>
  );
};

export default WishlistPage;
