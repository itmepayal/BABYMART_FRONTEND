export type Product = {
  id: string;
  title: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  badge?: { label: string; tone: "new" | "discount" };
  discountBadge?: string;
  inStock?: boolean;
  productType?: string;
  vendor?: string;
  description?: string;
};
