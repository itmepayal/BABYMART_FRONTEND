"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const getPageNumbers = (
  current: number,
  total: number,
): (number | "ellipsis")[] => {
  const pages: (number | "ellipsis")[] = [];
  const siblingCount = 1;

  const start = Math.max(2, current - siblingCount);
  const end = Math.min(total - 1, current + siblingCount);

  pages.push(1);
  if (start > 2) pages.push("ellipsis");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("ellipsis");
  if (total > 1) pages.push(total);

  return pages;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-4 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-sm transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous page"
      >
        ‹
      </button>

      {pageNumbers.map((page, idx) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex h-10 w-10 items-center justify-center text-sm text-gray-400"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-white"
                : "border border-gray-200 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-sm transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
};
