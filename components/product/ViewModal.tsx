import {
  Check,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  Undo2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "@/types/product";

const offerIcons: Record<string, typeof ShieldCheck> = {
  shipping: Truck,
  membership: ShoppingCart,
  safe: ShieldCheck,
  returns: Undo2,
};

export function ViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const images = product.images.length ? product.images : [product.image];

  const goTo = (i: number) =>
    setActiveIndex((i + images.length) % images.length);

  const incQty = () => setQty((q) => q + 1);
  const decQty = () => setQty((q) => Math.max(1, q - 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, activeIndex]);

  const inStock = product.inStock ?? true;
  const rating = product.rating ?? 0;
  const reviewCount = product.reviewCount ?? 0;
  const sold = product.sold;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[95vh] w-full max-w-5xl grid-cols-1 gap-5 overflow-y-auto rounded-lg bg-card p-3.5 shadow-xl xs:p-4 sm:max-h-[90vh] sm:grid-cols-2 sm:gap-6 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded text-base transition-colors hover:bg-main-mix-bg hover:text-main sm:right-3 sm:top-3 sm:h-8 sm:w-8"
        >
          <X size={18} className="size-4 sm:size-4.5" />
        </button>

        <div>
          {product.badge && (
            <span className="absolute left-5 top-5 z-10 w-fit rounded-full bg-rose-500 px-2 py-0.5 text-[11px] font-semibold text-white xs:left-6 xs:top-6 sm:left-8 sm:top-8 sm:px-2.5 sm:py-1 sm:text-xs">
              {product.badge.label}
            </span>
          )}

          <div className="group relative aspect-square overflow-hidden rounded bg-main-mix-bg/40">
            <img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${product.title} – image ${activeIndex + 1}`}
              className="h-full w-full object-cover transition-opacity duration-200"
            />
          </div>

          {images.length > 1 && (
            <div className="mt-2.5 flex items-center gap-1 xs:mt-3 xs:gap-1.5 sm:gap-2">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => goTo(activeIndex - 1)}
                className="flex h-8 w-8 flex-none items-center justify-center rounded text-base transition-colors hover:bg-main-mix-bg hover:text-main xs:h-9 xs:w-9 sm:h-7 sm:w-7"
              >
                <ChevronLeft size={16} className="size-3.5 sm:size-4" />
              </button>

              <div className="flex flex-1 gap-1 xs:gap-1.5 sm:gap-2">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    aria-label={`View image ${i + 1}`}
                    onClick={() => setActiveIndex(i)}
                    className={`relative aspect-square w-full overflow-hidden rounded border-2 transition-colors duration-200 ${
                      i === activeIndex
                        ? "border-main"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => goTo(activeIndex + 1)}
                className="flex h-8 w-8 flex-none items-center justify-center rounded text-base transition-colors hover:bg-main-mix-bg hover:text-main xs:h-9 xs:w-9 sm:h-7 sm:w-7"
              >
                <ChevronRight size={16} className="size-3.5 sm:size-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col">
          <h3 className="pr-9 text-base font-bold leading-snug xs:text-lg sm:pr-0 sm:text-2xl lg:text-2xl">
            {product.title}
          </h3>

          {(rating > 0 || sold !== undefined) && (
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5  text-base xs:mt-2 xs:gap-2 sm:text-sm">
              {rating > 0 && (
                <span className="flex items-center gap-1">
                  <span className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`size-3 sm:size-3.5 ${
                          i < Math.round(rating)
                            ? "fill-current"
                            : "fill-none text-border"
                        }`}
                      />
                    ))}
                  </span>
                  {reviewCount > 0 && (
                    <span>
                      ({reviewCount} customer review
                      {reviewCount === 1 ? "" : "s"})
                    </span>
                  )}
                </span>
              )}
              {rating > 0 && sold !== undefined && (
                <span className="text-border">|</span>
              )}
              {sold !== undefined && <span>Sold: {sold}</span>}
            </div>
          )}

          {product.description && (
            <p className="mt-2.5 line-clamp-3 leading-relaxed text-base xs:mt-3 xs:text-sm">
              {product.description}
            </p>
          )}

          <div className="mt-3 flex items-baseline gap-1.5 xs:mt-4 xs:gap-2">
            <span className="text-xl font-bold text-main xs:text-2xl sm:text-2xl lg:text-3xl">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className=" text-base line-through xs:text-base">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-3.5 flex flex-wrap items-center gap-2 xs:mt-4 xs:gap-3">
            <div className="flex h-9 flex-none items-center rounded border border-border xs:h-10">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={decQty}
                className="flex h-full w-8 items-center justify-center text-base transition-colors hover:bg-main-mix-bg hover:text-main xs:w-9"
              >
                <Minus size={14} className="size-3 sm:size-3.5" />
              </button>
              <span className="w-7 flex-none text-center font-medium text-base xs:w-8 xs:text-sm">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={incQty}
                className="flex h-full w-8 items-center justify-center text-base transition-colors hover:bg-main-mix-bg hover:text-main xs:w-9"
              >
                <Plus size={14} className="size-3 sm:size-3.5" />
              </button>
            </div>

            <button
              type="button"
              disabled={!inStock}
              className="flex h-9 min-w-35 flex-1 items-center justify-center gap-1.5 rounded bg-main px-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-main/90 disabled:cursor-not-allowed disabled:opacity-50 xs:h-10 xs:gap-2 xs:px-4 text-base"
            >
              <ShoppingCart size={16} className="size-3.5 sm:size-4" />
              {inStock ? "Add To Cart" : "Out Of Stock"}
            </button>

            <button
              type="button"
              aria-label="Compare"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-main text-white transition-colors hover:bg-main/90 xs:h-10 xs:w-10"
            >
              <RefreshCw size={15} className="size-3.5 sm:size-4" />
            </button>
          </div>

          <dl className="mt-4 space-y-1.5 text-xs xs:space-y-2 xs:text-sm">
            {product.code && (
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-semibold text-base">Product Code:</dt>
                <dd className="text-base">{product.code}</dd>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <dt className="font-semibold text-base">Availability:</dt>
              <dd className="flex items-center gap-1 text-base">
                {inStock ? (
                  <>
                    <Check
                      size={14}
                      className="size-3 rounded-sm bg-green-600 text-white xs:size-3.5"
                    />
                    In stock
                  </>
                ) : (
                  "Out of stock"
                )}
              </dd>
            </div>

            {product.productType && (
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-semibold text-base">Product Type:</dt>
                <dd className="text-base">{product.productType}</dd>
              </div>
            )}

            {product.vendor && (
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-semibold text-base">Vendor:</dt>
                <dd className="text-base">{product.vendor}</dd>
              </div>
            )}

            {product.categories && product.categories.length > 0 && (
              <div className="flex flex-wrap items-start gap-2">
                <dt className="flex-none font-semibold text-base">
                  Categories:
                </dt>
                <dd className="text-base">{product.categories.join(", ")}</dd>
              </div>
            )}
          </dl>

          {product.offers && product.offers.length > 0 && (
            <div className="mt-4 rounded border border-dashed border-border p-2.5 xs:mt-5 xs:p-3 sm:p-4">
              <p className="mb-2.5 text-xs font-semibold text-main xs:mb-3 xs:text-sm">
                Exclusive Offer:
              </p>
              <div className="grid grid-cols-1 gap-2 xs:gap-2.5 sm:grid-cols-2 sm:gap-3">
                {product.offers.map((offer, i) => {
                  const Icon = offerIcons[offer.icon] ?? ShieldCheck;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[11px] text-base xs:text-xs sm:text-sm"
                    >
                      <Icon
                        size={16}
                        className="size-3.5 flex-none text-main sm:size-4"
                      />
                      <span>{offer.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
