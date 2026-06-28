import { FilterSidebar } from "@/components/common/FilterSidebar";
import type { CategoryFilter, Product } from "@/data/product";

type MarketSidebarProps = {
  categoryFilters: CategoryFilter[];
  selectedCategories: string[];
  onToggleCategory: (label: string) => void;
  onClearCategories: () => void;
  priceMin: number;
  priceMax: number;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedRatings: number[];
  onToggleRating: (rating: number) => void;
  latestProducts: Product[];
};

export const MarketSidebar = ({
  categoryFilters,
  selectedCategories,
  onToggleCategory,
  onClearCategories,
  priceMin,
  priceMax,
  priceRange,
  onPriceRangeChange,
  selectedRatings,
  onToggleRating,
  latestProducts,
}: MarketSidebarProps) => {
  return (
    <FilterSidebar
      categoryFilters={categoryFilters}
      selectedCategories={selectedCategories}
      onToggleCategory={onToggleCategory}
      priceMin={priceMin}
      priceMax={priceMax}
      priceRange={priceRange}
      onPriceRangeChange={onPriceRangeChange}
      ratingOptions={[5, 4]}
      selectedRatings={selectedRatings}
      onToggleRating={onToggleRating}
      latestProducts={latestProducts}
      onClearFilters={onClearCategories}
    />
  );
};
