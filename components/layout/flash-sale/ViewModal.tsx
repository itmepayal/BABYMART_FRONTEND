import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "@/types/product";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[95vh] w-full max-w-2xl grid-cols-1 gap-5 overflow-y-auto rounded-lg bg-card p-4 shadow-xl sm:max-h-[90vh] sm:grid-cols-2 sm:gap-6 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded text-(--body_typo-color) transition-colors hover:bg-main-mix-bg hover:text-main sm:right-3 sm:top-3 sm:h-8 sm:w-8"
        >
          <X size={18} />
        </button>

        <div>
          <div className="group relative aspect-square overflow-hidden rounded bg-main-mix-bg/40">
            <img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${product.title} – image ${activeIndex + 1}`}
              className="h-full w-full object-cover transition-opacity duration-200"
            />
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => goTo(activeIndex - 1)}
                className="flex h-9 w-9 flex-none items-center justify-center rounded text-(--body_typo-color) transition-colors hover:bg-main-mix-bg hover:text-main sm:h-7 sm:w-7"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex flex-1 gap-1.5 sm:gap-2">
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
                className="flex h-9 w-9 flex-none items-center justify-center rounded text-(--body_typo-color) transition-colors hover:bg-main-mix-bg hover:text-main sm:h-7 sm:w-7"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          {product.badge && (
            <span className="mb-2 w-fit rounded bg-teal px-2 py-0.5 text-xs font-semibold text-white">
              {product.badge.label}
            </span>
          )}
          <h3 className="pr-10 text-lg font-bold text-(--title_typo-color) sm:pr-0 sm:text-xl">
            {product.title}
          </h3>

          <div className="mt-3 flex items-baseline gap-2 rounded bg-main-mix-bg/40 px-3 py-2.5 sm:px-4 sm:py-3">
            <span className="text-xl font-bold text-main sm:text-2xl">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-(--body_typo-color) line-through sm:text-base">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <dt className="font-semibold text-(--title_typo-color)">
                Availability
              </dt>
              <dd className="flex items-center gap-1 text-(--body_typo-color)">
                {inStock ? (
                  <>
                    <Check
                      size={14}
                      className="rounded-sm bg-green-600 text-white"
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
                <dt className="font-semibold text-(--title_typo-color)">
                  Product Type
                </dt>
                <dd className="text-(--body_typo-color)">
                  {product.productType}
                </dd>
              </div>
            )}
            {product.vendor && (
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-semibold text-(--title_typo-color)">
                  Vendor
                </dt>
                <dd className="text-(--body_typo-color)">{product.vendor}</dd>
              </div>
            )}
          </dl>

          {product.description && (
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-(--body_typo-color)">
              {product.description}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex items-center gap-3">
              <span className="flex-none text-sm font-semibold text-(--title_typo-color)">
                Qty:
              </span>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Number(e.target.value) || 1))
                }
                className="h-10 w-16 flex-none rounded border border-border bg-card px-2 text-center text-sm text-(--body_typo-color) focus:border-main focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-ink/90"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
