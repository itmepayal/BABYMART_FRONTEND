export interface ProductBadge {
  label: string;
  tone?: "new" | "sale" | "hot" | "bestseller" | string;
}

export interface ProductOffer {
  icon: "shipping" | "membership" | "safe" | "returns";
  label: string;
}

export interface Product {
  id: string;
  slug?: string; // optional, used for pretty URLs (/product/[slug]); falls back to id
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

export type CategoryFilter = {
  label: string;
  count: number;
};

export const categoryFilters: CategoryFilter[] = [
  { label: "Accessories", count: 13 },
  { label: "Bath", count: 8 },
  { label: "Bibs", count: 14 },
  { label: "Carrier Toys", count: 19 },
  { label: "Diaper", count: 2 },
  { label: "Fashion Kid", count: 22 },
  { label: "Feeding Set", count: 6 },
  { label: "Jigsaw Puzzle", count: 9 },
  { label: "Toys", count: 17 },
  { label: "Sandbox Toys", count: 19 },
  { label: "Smart Toys", count: 19 },
  { label: "Strollers", count: 7 },
  { label: "Stuffed Toys", count: 3 },
  { label: "Toy & Game", count: 16 },
  { label: "Wooden Toys", count: 7 },
];

export const allProducts: Product[] = [
  {
    id: "1",
    slug: "feeding-set-help-children-ready",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "Feeding set to help children eat ready",
    price: 33,
    rating: 5,
    reviews: 12,
    categories: ["Feeding Set", "Bibs"],
    badge: { label: "New", tone: "new" },
    code: "TOY01",
    inStock: true,
  },
  {
    id: "2",
    slug: "mug-shaped-cube-for-children",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "Mug-shaped cube for children",
    price: 42,
    rating: 0,
    reviews: 0,
    categories: ["Toy & Game", "Smart Toys"],
    code: "TOY02",
    inStock: true,
  },
  {
    id: "3",
    slug: "high-quality-sanitizer-suite",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "High-quality sanitizer suite to use for newborns",
    price: 87,
    oldPrice: 105,
    rating: 4,
    reviews: 8,
    categories: ["Accessories", "Bath"],
    discountBadge: "-17%",
    code: "TOY03",
    inStock: true,
  },
  {
    id: "4",
    slug: "wrinkle-diapers-for-newborns",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "Wrinkle diapers for newborns",
    price: 31,
    rating: 4,
    reviews: 5,
    categories: ["Diaper", "Bibs"],
    code: "TOY04",
    inStock: true,
  },
  {
    id: "5",
    slug: "spotted-little-mommas-pump",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "Spotted little mommas pump",
    price: 55,
    rating: 4,
    reviews: 3,
    categories: ["Accessories", "Feeding Set"],
    code: "TOY05",
    inStock: true,
  },
  {
    id: "6",
    slug: "traditional-little-car-toy-for-kid",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "Traditional little car toy for kid",
    price: 50,
    oldPrice: 65,
    rating: 5,
    reviews: 21,
    categories: ["Toys", "Smart Toys"],
    badge: { label: "Best seller", tone: "bestseller" },
    discountBadge: "-23%",
    code: "TOY06",
    inStock: true,
  },
  {
    id: "7",
    slug: "tricycle-for-kids-to-learn-to-walk",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png",
    ],
    title: "Tricycle for kids to learn to walk",
    price: 52,
    rating: 4,
    reviews: 9,
    categories: ["Toys", "Carrier Toys"],
    code: "TOY07",
    inStock: true,
  },
];

export const latestProducts: Product[] = [
  {
    id: "8",
    slug: "decorative-wooden-basket",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/product-new-29-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/product-new-29-400x400.png",
    ],
    title: "Decorative wooden basket",
    price: 250,
    rating: 0,
    reviews: 0,
    categories: ["Wooden Toys"],
  },
  {
    id: "9",
    slug: "storybook-room-stand",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/product-new-30-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/product-new-30-400x400.png",
    ],
    title: "Storybook room stand",
    price: 250,
    rating: 0,
    reviews: 0,
    categories: ["Accessories"],
  },
  {
    id: "10",
    slug: "stay-explorer-rocking-set",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/product-new-31-400x400.png",
    images: [
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/product-new-31-400x400.png",
    ],
    title: "Stay explorer rocking set",
    price: 500,
    rating: 0,
    reviews: 0,
    categories: ["Toys"],
  },
];

export const PRICE_MIN = 0;
export const PRICE_MAX = 670;
export const PRODUCTS_PER_PAGE = 6;
