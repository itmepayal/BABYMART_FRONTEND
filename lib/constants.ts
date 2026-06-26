import { Product } from "@/types/product";
import { Tag, Headphones, RefreshCw, ShieldCheck } from "lucide-react";

export const categories = [
  "Children's clothing",
  "Eating utensils",
  "Toys and learning",
  "High-end machinery",
  "Kid strollers",
  "House facility",
  "Pregnant mother",
  "Hygiene for babies",
  "Feeding set",
];

export const navLinks = [
  "Home",
  "Shop",
  "Collections",
  "Blog",
  "Pages",
  "Sale",
];

export const Features = [
  {
    id: "daily-offers",
    icon: Tag,
    title: "Daily Offers",
    desc: "20% off by subscribing",
  },
  {
    id: "quality-support",
    icon: Headphones,
    title: "Quality Support",
    desc: "Always online 24/7",
  },
  {
    id: "return-refund",
    icon: RefreshCw,
    title: "Return & refund",
    desc: "Money back guarantee",
  },
  {
    id: "secure-payment",
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% complete",
  },
];

export const Sliders = [
  {
    id: "slide-1",
    src: "https://bs-kidxtore.myshopify.com/cdn/shop/files/h4-slide1.jpg?v=1710412537&width=690",
    alt: "Baby clothes – soft and safe",
  },
  {
    id: "slide-2",
    src: "https://bs-kidxtore.myshopify.com/cdn/shop/files/h4-slide2.jpg?v=1710412537&width=690",
    alt: "Kids fashion collection",
  },
];

export const Banners = [
  {
    id: "banner-1",
    src: "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-bn1.jpg?v=1709970686",
    alt: "Discounted Bicycles – up to 70% off",
    href: "#",
  },
  {
    id: "banner-2",
    src: "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-bn2.jpg?v=1709970687",
    alt: "Mega Sale – special offer",
    href: "#",
  },
];

const product_image =
  "https://bs-kidxtore.myshopify.com/cdn/shop/files/pro-2_large_crop_center.png?v=1710841842";

const gallery_images = [
  "https://bs-kidxtore.myshopify.com/cdn/shop/files/pro-2_large_crop_center.png?v=1710841842",
  "https://bs-kidxtore.myshopify.com/cdn/shop/files/h4-slide1.jpg?v=1710412537&width=600",
  "https://bs-kidxtore.myshopify.com/cdn/shop/files/h4-slide2.jpg?v=1710412537&width=600",
  "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-bn1.jpg?v=1709970686&width=600",
];

export const Products: Product[] = [
  {
    id: "p1",
    title: "Unde Omnis Iste Natus",
    image: product_image,
    images: gallery_images,
    rating: 5,
    reviews: 1,
    price: 20,
    oldPrice: 21,
    badge: { label: "New", tone: "new" },
    discountBadge: "-5%",
    inStock: true,
    productType: "Fashion",
    vendor: "KidXtore",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "p2",
    title: "Benton Springs Fleece",
    image: product_image,
    images: gallery_images,
    rating: 4,
    reviews: 1,
    price: 250,
    oldPrice: 260,
    badge: { label: "New", tone: "new" },
    discountBadge: "-4%",
    inStock: true,
    productType: "Fashion",
    vendor: "KidXtore",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci...",
  },
  {
    id: "p3",
    title: "Integer Tortor Eros Nas",
    image: product_image,
    images: gallery_images,
    rating: 5,
    reviews: 1,
    price: 65,
    oldPrice: 89,
    badge: { label: "New", tone: "new" },
    discountBadge: "-27%",
    inStock: true,
    productType: "Fashion",
    vendor: "KidXtore",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "p4",
    title: "White One-Piece Dress",
    image: product_image,
    images: gallery_images,
    rating: 3,
    reviews: 1,
    price: 34.76,
    oldPrice: 36,
    discountBadge: "-3%",
    inStock: true,
    productType: "Fashion",
    vendor: "KidXtore",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "p5",
    title: "Beige One-Piece Dress",
    image: product_image,
    images: gallery_images,
    rating: 5,
    reviews: 1,
    price: 20,
    oldPrice: 21,
    badge: { label: "New", tone: "new" },
    discountBadge: "-5%",
    inStock: true,
    productType: "Fashion",
    vendor: "KidXtore",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];
