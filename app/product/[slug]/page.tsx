"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Minus,
  Plus,
  Heart,
  ArrowLeftRight,
  Eye,
  Pencil,
} from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import {
  additionalInfoRows,
  existingReviews,
  product,
  relatedProducts,
} from "@/data/product";
import { Rating } from "@/components/product/StarRating";

const ProductDetailPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "additionalInfo" | "reviews"
  >("description");
  const [wishlist, setWishlist] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewHover, setReviewHover] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    comment: "",
    saveInfo: false,
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Breadcrumb
        title="Product"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Movement Toys", href: "/market" },
          { label: product.title },
        ]}
      />

      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded border border-border bg-card">
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded bg-coral px-2.5 py-1 text-xs font-bold text-white">
                    {product.badge}
                  </span>
                )}
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.images[activeImage]}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                {product.images.slice(0, 3).map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded border-2 transition-colors ${
                      i === activeImage
                        ? "border-main"
                        : "border-border hover:border-main/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`thumb-${i}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold text-(--title_typo-color) sm:text-3xl">
                {product.title}
              </h1>

              <div className="flex items-center gap-2">
                <Rating rating={product.rating} />
                <span className="text-sm text-(--body_typo-color)">
                  ({product.reviewCount} customer reviews)
                </span>
                <span className="ml-2 rounded bg-main/10 px-2 py-0.5 text-xs font-semibold text-main">
                  {product.badge}
                </span>
              </div>

              <p className="text-base leading-relaxed text-(--body_typo-color)">
                {product.description}
              </p>

              <div className="flex items-center gap-2">
                {[
                  { v: product.countdown.days, label: "DAYS" },
                  { v: product.countdown.hours, label: "HRS" },
                  { v: product.countdown.minutes, label: "MIN" },
                  { v: product.countdown.seconds, label: "SEC" },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="flex flex-col items-center rounded bg-main px-3 py-2 text-white min-w-13"
                  >
                    <span className="text-xl font-bold leading-none">
                      {String(unit.v).padStart(2, "0")}
                    </span>
                    <span className="mt-0.5 text-[10px] font-semibold tracking-wider opacity-80">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-3">
                {product.oldPrice && (
                  <span className="text-lg text-(--body_typo-color) line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-3xl font-bold text-main">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center overflow-hidden rounded-full border border-border">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="flex h-11 w-11 items-center justify-center text-(--body_typo-color) hover:text-main transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center text-base font-semibold text-(--title_typo-color)">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="flex h-11 w-11 items-center justify-center text-(--body_typo-color) hover:text-main transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  type="button"
                  className="flex-1 rounded-full bg-main px-8 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-main-darken"
                >
                  + ADD TO CART
                </button>
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-sun py-3 text-sm font-bold tracking-wide text-ink transition-opacity hover:opacity-90"
              >
                Pay with PayPal
              </button>

              <div className="flex items-center gap-4 text-sm text-(--body_typo-color)">
                <button
                  type="button"
                  onClick={() => setWishlist(!wishlist)}
                  className="flex items-center gap-1.5 hover:text-coral transition-colors"
                >
                  <Heart
                    size={16}
                    className={wishlist ? "fill-coral text-coral" : ""}
                  />
                  Wishlist
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 hover:text-main transition-colors"
                >
                  <ArrowLeftRight size={16} />
                  Compare
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 hover:text-main transition-colors"
                >
                  <Eye size={16} />
                  Quick view
                </button>
              </div>

              <div className="border-t border-border pt-4 text-sm text-(--body_typo-color) space-y-1.5">
                <p>
                  <span className="font-semibold text-(--title_typo-color)">
                    Product Code:
                  </span>{" "}
                  {product.sku}
                </p>
                <p>
                  <span className="font-semibold text-(--title_typo-color)">
                    Categories:
                  </span>{" "}
                  {product.categories.join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-(--title_typo-color)">
                    Tags:
                  </span>{" "}
                  {product.tags.join(", ")}
                </p>
              </div>

              <div className="rounded border-2 border-dashed border-main/30 bg-main/5 p-4">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-main">
                  Exclusive Offer
                </p>
                <ul className="flex flex-col gap-2">
                  {product.offers.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex items-center gap-2.5 text-sm text-(--body_typo-color)"
                    >
                      <Icon size={16} className="shrink-0 text-main" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-0 border-b border-border overflow-x-auto scrollbar-none">
              {(["description", "additionalInfo", "reviews"] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm font-semibold transition-colors border-b-2 -mb-px ${
                      activeTab === tab
                        ? "border-coral text-coral"
                        : "border-transparent text-(--title_typo-color) hover:text-coral"
                    }`}
                  >
                    {tab === "description"
                      ? "Description"
                      : tab === "additionalInfo"
                        ? "Additional Information"
                        : `Reviews (${existingReviews.length})`}
                  </button>
                ),
              )}
            </div>

            {activeTab === "description" && (
              <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6 text-sm sm:text-base leading-relaxed text-(--body_typo-color)">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat
                </p>
                <p>
                  Est luctus facilisi himenaeos non ac curae magna et, integer
                  tortor eros nascetur amet pulvinar sed, neque nisl vestibulum
                  duis urna lacinia massa.
                </p>
                <div className="overflow-hidden rounded">
                  <div className="relative h-48 w-full sm:h-64 md:h-80">
                    <Image
                      src="https://images.unsplash.com/photo-1536337005238-94b997371b40?w=1200&h=500&fit=crop"
                      alt="Children playing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "additionalInfo" && (
              <div className="mt-6 sm:mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-xs sm:text-sm text-(--body_typo-color)">
                  <tbody>
                    {additionalInfoRows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="border border-border px-3 py-2.5 sm:px-4 sm:py-3 font-semibold text-(--title_typo-color) w-28 sm:w-40">
                          {row.label}
                        </td>
                        <td className="border border-border px-3 py-2.5 sm:px-4 sm:py-3">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="mt-6 sm:mt-8 flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Rating rating={5} size={18} />
                    <span className="text-xs sm:text-sm text-(--body_typo-color)">
                      ({existingReviews.length} customer review)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-coral px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
                  >
                    <Pencil size={12} className="sm:w-3.5 sm:h-3.5" />
                    WRITE A REVIEW
                  </button>
                </div>

                <hr className="border-border" />

                {showReviewForm && (
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <h3 className="text-sm sm:text-base font-bold text-(--title_typo-color)">
                      Be the first to review &ldquo;{product.title}&rdquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-(--body_typo-color)">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <label className="flex items-center gap-2 text-xs sm:text-sm text-(--body_typo-color) cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reviewForm.saveInfo}
                        onChange={(e) =>
                          setReviewForm({
                            ...reviewForm,
                            saveInfo: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-border"
                      />
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs sm:text-sm text-(--body_typo-color)">
                        Your rating *
                      </label>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onMouseEnter={() => setReviewHover(i + 1)}
                            onMouseLeave={() => setReviewHover(0)}
                            onClick={() => setReviewRating(i + 1)}
                          >
                            <Star
                              size={20}
                              className={`sm:w-5.5 sm:h-5.5 ${
                                i < (reviewHover || reviewRating)
                                  ? "fill-sun text-sun"
                                  : "fill-transparent text-sun"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs sm:text-sm text-(--body_typo-color)">
                        Your review *
                      </label>
                      <textarea
                        rows={4}
                        value={reviewForm.comment}
                        onChange={(e) =>
                          setReviewForm({
                            ...reviewForm,
                            comment: e.target.value,
                          })
                        }
                        className="w-full rounded border border-border bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-(--title_typo-color) focus:border-main focus:outline-none resize-y"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs sm:text-sm text-(--body_typo-color)">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={reviewForm.name}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              name: e.target.value,
                            })
                          }
                          className="w-full rounded border border-border bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-(--title_typo-color) focus:border-main focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs sm:text-sm text-(--body_typo-color)">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={reviewForm.email}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full rounded border border-border bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-(--title_typo-color) focus:border-main focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="self-start rounded border border-border px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide text-(--title_typo-color) transition-colors hover:border-main hover:text-main"
                    >
                      SUBMIT
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-(--title_typo-color) sm:text-3xl">
                Related products
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="group flex flex-col gap-2 rounded border border-border bg-card p-3 transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded bg-main-mix-bg/30">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {p.oldPrice && (
                      <span className="absolute left-2 top-2 rounded bg-coral px-1.5 py-0.5 text-[10px] font-bold text-white">
                        -
                        {Math.round(
                          ((p.oldPrice - p.price) / p.oldPrice) * 100,
                        )}
                        %
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-(--title_typo-color) line-clamp-2 group-hover:text-main transition-colors">
                    {p.title}
                  </p>
                  <Rating rating={p.rating} size={13} />
                  <div className="flex items-baseline gap-1.5">
                    {p.oldPrice && (
                      <span className="text-xs text-(--body_typo-color) line-through">
                        ${p.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-sm font-bold text-coral">
                      ${p.price.toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <NewsletterBanner />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
