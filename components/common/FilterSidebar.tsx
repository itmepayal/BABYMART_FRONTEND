import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { CategoryFilter, Product } from "@/data/product";

type RatingOption = 5 | 4 | 3 | 2 | 1;

export type FilterSidebarProps = {
  categoryFilters?: CategoryFilter[];
  selectedCategories?: string[];
  onToggleCategory?: (label: string) => void;
  priceMin?: number;
  priceMax?: number;
  priceRange?: [number, number];
  onPriceRangeChange?: (range: [number, number]) => void;
  ratingOptions?: RatingOption[];
  selectedRatings?: number[];
  onToggleRating?: (rating: number) => void;
  latestProducts?: Product[];
  onClearFilters?: () => void;
  extraSections?: React.ReactNode;
};

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-lg border border-border bg-card p-5">
    <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-(--title_typo-color)">
      {title}
    </h3>
    {children}
  </div>
);

export const FilterSidebar = ({
  categoryFilters,
  selectedCategories = [],
  onToggleCategory,
  priceMin = 0,
  priceMax = 1000,
  priceRange,
  onPriceRangeChange,
  ratingOptions = [5, 4],
  selectedRatings = [],
  onToggleRating,
  latestProducts,
  onClearFilters,
  extraSections,
}: FilterSidebarProps) => {
  const effectivePriceRange = priceRange ?? [priceMin, priceMax];

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedRatings.length > 0 ||
    effectivePriceRange[0] !== priceMin ||
    effectivePriceRange[1] !== priceMax;

  const showClearButton = !!onClearFilters && hasActiveFilters;
  const showCategories = !!categoryFilters?.length && !!onToggleCategory;
  const showPrice = !!priceRange && !!onPriceRangeChange;
  const showRatings = !!ratingOptions.length && !!onToggleRating;
  const showLatest = !!latestProducts?.length;

  return (
    <aside className="flex flex-col gap-6">
      {showClearButton && (
        <button
          type="button"
          onClick={onClearFilters}
          className="self-start rounded-full border border-border px-4 py-1.5 text-base font-medium text-(--body_typo-color) transition-colors hover:bg-main-mix-bg/40 hover:text-main"
        >
          Clear filters ✕
        </button>
      )}

      {showCategories && (
        <SectionCard title="Categories">
          <ul className="flex flex-col gap-3">
            {categoryFilters!.map((cat) => (
              <li key={cat.label}>
                <label className="flex cursor-pointer items-center justify-between gap-2 text-base text-(--body_typo-color) hover:text-main">
                  <span className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.label)}
                      onChange={() => onToggleCategory!(cat.label)}
                      className="h-4 w-4 rounded border-border text-main focus:ring-main"
                    />
                    {cat.label}
                  </span>
                  <span className="text-sm text-(--body_typo-color)/70">
                    ({cat.count})
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </SectionCard>
      )}

      {showPrice && (
        <SectionCard title="Filter by price">
          <input
            type="range"
            min={priceMin}
            max={priceMax}
            value={effectivePriceRange[1]}
            onChange={(e) =>
              onPriceRangeChange!([
                effectivePriceRange[0],
                Number(e.target.value),
              ])
            }
            className="w-full accent-main"
          />
          <div className="mt-3 flex items-center justify-between gap-3 text-base text-(--body_typo-color)">
            <span>${effectivePriceRange[0].toFixed(2)}</span>
            <span>—</span>
            <span>${effectivePriceRange[1].toFixed(2)}</span>
          </div>
        </SectionCard>
      )}

      {showRatings && (
        <SectionCard title="Rating">
          <ul className="flex flex-col gap-3">
            {ratingOptions.map((rating) => (
              <li key={rating}>
                <label className="flex cursor-pointer items-center gap-2.5 text-base text-(--body_typo-color) hover:text-main">
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => onToggleRating!(rating)}
                    className="h-4 w-4 rounded border-border text-main focus:ring-main"
                  />
                  <span className="flex items-center gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < rating
                            ? "fill-sun text-sun"
                            : "fill-transparent text-border"
                        }
                      />
                    ))}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </SectionCard>
      )}

      {showLatest && (
        <SectionCard title="Latest products">
          <ul className="flex flex-col gap-4">
            {latestProducts!.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.slug ?? product.id}`}
                  className="group flex items-center gap-3.5"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded bg-main-mix-bg/40">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="text-base text-(--title_typo-color) transition-colors group-hover:text-main">
                      {product.title}
                    </p>
                    <p className="text-base font-semibold text-coral">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </SectionCard>
      )}
      {extraSections}
    </aside>
  );
};
