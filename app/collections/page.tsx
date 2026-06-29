"use client";

import { useMemo, useState } from "react";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { EmptyState } from "@/components/common/EmptyState";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { CollectionCard } from "@/components/collections/CollectionCard";
import { allCollections, COLLECTIONS_PER_PAGE } from "@/data/collection";

const CollectionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(allCollections.length / COLLECTIONS_PER_PAGE),
  );
  const { paginatedCollections, rangeStart, rangeEnd } = useMemo(() => {
    const start = (currentPage - 1) * COLLECTIONS_PER_PAGE;
    const end = Math.min(start + COLLECTIONS_PER_PAGE, allCollections.length);
    return {
      paginatedCollections: allCollections.slice(start, end),
      rangeStart: allCollections.length === 0 ? 0 : start + 1,
      rangeEnd: end,
    };
  }, [currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Breadcrumb
        title="Collections"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Collections" }]}
      />

      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {paginatedCollections.length > 0 ? (
            <>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between sm:pb-6">
                <p className="max-w-xl text-sm leading-relaxed text-gray-500">
                  Browse every category, from newborn essentials to gifts for
                  big kids — find the right age group or product type in one
                  place.
                </p>
                <p className="shrink-0 text-xs font-medium text-gray-400 sm:text-sm">
                  Showing{" "}
                  <span className="text-gray-700">
                    {rangeStart}–{rangeEnd}
                  </span>{" "}
                  of{" "}
                  <span className="text-gray-700">{allCollections.length}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                {paginatedCollections.map((collection) => (
                  <CollectionCard
                    key={collection.slug}
                    collection={collection}
                  />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              icon={HiOutlineDocumentMagnifyingGlass}
              title="No collections yet"
              description="There are no collections to show right now. Check back soon."
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

export default CollectionPage;
