import { NewsPost } from "@/types/blog";
import { Brand } from "@/types/brand";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { Tag, Headphones, RefreshCw, ShieldCheck } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

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
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "Sale",
    href: "/sale",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const mobileNavLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
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

export const PROMO_BANNER =
  "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/home4-bn-tab1.jpg";

const PRODUCT_IMAGE =
  "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/10/product-new-5-400x400.png";

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
    reviewCount: 1,
    sold: 397,
    code: "TOY03",
    categories: ["10+ Years", "2-4 Years", "6-8 Years", "Stuffed Toys"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
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
  {
    id: "na1",
    title: "Traditional Ride On Toys Kid",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 56,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Kid Toys",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 184,
    code: "TOY11",
    categories: ["2-4 Years", "4-6 Years", "Ride On Toys", "Outdoor Toys"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A classic ride-on toy car for kids, built for safe indoor and outdoor play.",
  },
  {
    id: "na2",
    title: "Frog-Shaped Toilet For Children",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 0,
    reviews: 1,
    price: 40,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Kid Toys",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 62,
    code: "TOY12",
    categories: ["1-3 Years", "Potty Training", "Bathroom"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A fun frog-shaped potty training seat designed for comfort and ease of use.",
  },
  {
    id: "na3",
    title: "Merries Diapers For Babies",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 4,
    reviews: 1,
    price: 21,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Feeding Set",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 521,
    code: "FEED04",
    categories: ["0-1 Years", "1-3 Years", "Diapers", "Baby Care"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description: "Soft and absorbent diapers designed for everyday comfort.",
  },
  {
    id: "na4",
    title: "Tricycle For Kids To Learn To Walk",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 52,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Strollers",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 147,
    code: "STR07",
    categories: ["2-4 Years", "4-6 Years", "Tricycles", "Outdoor Toys"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A sturdy tricycle to help young children build balance and confidence.",
  },
  {
    id: "na5",
    title: "Feeding Set To Help Children Eat Easily",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 33,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Feeding Set",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 268,
    code: "FEED05",
    categories: ["6 Months+", "1-3 Years", "Feeding Set", "Mealtime"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A complete feeding set with bowls, plates, and utensils for little hands.",
  },
  {
    id: "na6",
    title: "Spectra S1 Plus Breast Pump",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 4,
    reviews: 1,
    price: 56,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Feeding Set",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 93,
    code: "FEED06",
    categories: ["Breastfeeding", "Mothers", "Feeding Set"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description: "A reliable, hospital-grade breast pump for everyday use.",
  },
  {
    id: "na7",
    title: "High Quality Sterilizer Safe To Use For Mothers",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 4,
    reviews: 1,
    price: 67,
    badge: { label: "New", tone: "new" },
    inStock: true,
    productType: "Feeding Set",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 76,
    code: "FEED07",
    categories: ["Sterilizers", "Baby Care", "Feeding Set"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A safe and effective sterilizer for baby bottles and feeding accessories.",
  },
  {
    id: "na8",
    title: "Quilted Wind Jacket",
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    rating: 5,
    reviews: 1,
    price: 55,
    oldPrice: 76,
    badge: { label: "New", tone: "new" },
    discountBadge: "-28%",
    inStock: true,
    productType: "Kid Clothing",
    vendor: "KidXtore",
    reviewCount: 1,
    sold: 312,
    code: "CLO09",
    categories: ["4-6 Years", "6-8 Years", "Jackets", "Winter Wear"],
    offers: [
      { icon: "shipping", label: "Free shipping orders from $199" },
      { icon: "safe", label: "100% safe for kid" },
      { icon: "membership", label: "Membership offers 10%, 15%, 20% off" },
      { icon: "returns", label: "Returns within 30 days" },
    ],
    description:
      "A warm, quilted jacket designed to keep kids cozy in cold weather.",
  },
];

export const Categories: Category[] = [
  {
    id: "c1",
    label: "Kid Toys",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-1.png?v=1709979621&width=89",
  },
  {
    id: "c2",
    label: "Kid Books",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-2.png?v=1709979621&width=89",
  },
  {
    id: "c3",
    label: "Cloth Utensils",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-3.png?v=1709979621&width=89",
  },
  {
    id: "c4",
    label: "Milk Bottle",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-4.png?v=1709979621&width=89",
  },
  {
    id: "c5",
    label: "Clothing Boy",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-5.png?v=1709979621&width=89",
  },
  {
    id: "c6",
    label: "Feeding Set",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-6.png?v=1709979621&width=89",
  },
  {
    id: "c7",
    label: "Baby Supplies",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-7.png?v=1709979621&width=89",
  },
  {
    id: "c8",
    label: "Strollers",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-8.png?v=1709979621&width=89",
  },
];

export const InformationLinks = [
  { label: "About", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Wishlist Products", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Shipment", href: "#" },
];

export const AccountLinks = [
  { label: "My Cart", href: "#" },
  { label: "Orders", href: "#" },
  { label: "Return Policy", href: "#" },
  { label: "Address", href: "#" },
  { label: "Checkout", href: "#" },
];

export const ServiceLinks = [
  { label: "Search Terms", href: "#" },
  { label: "Orders And Returns", href: "#" },
  { label: "Return Policy", href: "#" },
  { label: "Shipping Options", href: "#" },
  { label: "How to Sell", href: "#" },
];

export const SocialLinks = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaXTwitter, label: "X (Twitter)" },
  { Icon: FaYoutube, label: "YouTube" },
];

export const BRAND_LOGO_BASE =
  "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/07/home4-brand-";

export const BRAND_NAMES = [
  "Simba",
  "Merries",
  "Fatz Baby",
  "Chaang",
  "Vinamilk",
  "Moony",
  "Aptakid",
  "Philips Avent",
  "Rototo Bebe",
  "Bledina",
  "Enfamil",
  "Rototo Bebe",
];

export const BRANDS: Brand[] = BRAND_NAMES.map((name, i) => ({
  id: `b${i + 1}`,
  name,
  logo: `${BRAND_LOGO_BASE}${i + 1}.png`,
}));

const NEWS_IMAGE_1 =
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80";
const NEWS_IMAGE_2 =
  "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=600&q=80";
const NEWS_IMAGE_3 =
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80";
const NEWS_IMAGE_4 =
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80";

export const LATEST_NEWS: NewsPost[] = [
  {
    id: "news1",
    title: "Mi risus et semper conubia sem facilisis",
    image: NEWS_IMAGE_1,
    author: "admin",
    comments: 0,
  },
  {
    id: "news2",
    title: "Luctus enim hac mus mauris erat risus elit",
    image: NEWS_IMAGE_2,
    author: "admin",
    comments: 0,
  },
  {
    id: "news3",
    title: "Purus mus litora ante ad amet erat taciti cras",
    image: NEWS_IMAGE_3,
    author: "admin",
    comments: 0,
  },
  {
    id: "news4",
    title: "Tellus pharetra lacus ligula fusce cum eu potenti",
    image: NEWS_IMAGE_4,
    author: "admin",
    comments: 0,
  },
];
