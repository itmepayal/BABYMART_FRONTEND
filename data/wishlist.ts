export interface WishlistItem {
  id: string;
  slug?: string;
  image: string;
  name: string;
  price: number;
  inStock: boolean;
}

export const WISHLIST_PER_PAGE = 10;

const PRODUCT_IMAGE =
  "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07//product-new-29-400x400.png";

export const wishlistItems: WishlistItem[] = [
  {
    id: "1",
    slug: "benton-springs-fleece",
    image: PRODUCT_IMAGE,
    name: "Benton Springs Fleece",
    price: 250,
    inStock: true,
  },
  {
    id: "2",
    slug: "integer-tortor-eros-nas",
    image: PRODUCT_IMAGE,
    name: "Integer tortor eros nas",
    price: 65,
    inStock: true,
  },
];
