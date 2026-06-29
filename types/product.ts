export interface ProductBadge {
  label: string;
  tone?: "new" | "sale" | "hot" | "bestseller" | string;
}

export interface ProductOffer {
  icon: "shipping" | "membership" | "safe" | "returns";
  label: string;
}

export type SortOption = "default" | "price-asc" | "price-desc" | "rating";

export interface Product {
  id: string;
  title: string;

  image: string;
  images: string[];

  price: number;
  oldPrice?: number;

  rating?: number; // 0–5
  reviews?: number; // number of reviews (used alongside `rating`)
  reviewCount?: number; // display count, e.g. "(1 customer review)"
  sold?: number; // units sold, e.g. 397

  badge?: ProductBadge;
  discountBadge?: string; // e.g. "-5%"

  inStock?: boolean;
  productType?: string;
  vendor?: string;
  code?: string; // product code, e.g. "TOY03"

  categories?: string[];
  offers?: ProductOffer[];

  description?: string;
}
