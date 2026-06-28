import { Eye, Heart, ShoppingCart } from "lucide-react";
import { StarRating } from "@/components/product/StarRating";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

export function ProductCard({
  product,
  onQuickView,
  onAddToCart,
  showQuickView = true,
  showWishlist = true,
  showAddToCart = true,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showQuickView?: boolean;
  showWishlist?: boolean;
  showAddToCart?: boolean;
}) {
  const router = useRouter();

  const actions = [
    {
      Icon: Eye,
      label: "Quick view",
      onClick: () => onQuickView?.(product),
      show: showQuickView,
    },
    {
      Icon: Heart,
      label: "Add to wishlist",
      onClick: () => router.push("/wishlist"),
      show: showWishlist,
    },
    {
      Icon: ShoppingCart,
      label: "Add to cart",
      onClick: () => onAddToCart?.(product),
      show: showAddToCart,
    },
  ].filter((action) => action.show);

  return (
    <div
      className="group w-full shrink-0 snap-start px-0"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden rounded bg-main-mix-bg/40">
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="rounded bg-teal px-2 py-0.5 text-xs font-semibold text-white">
              {product.badge.label}
            </span>
          )}
          {product.discountBadge && (
            <span className="rounded bg-sun px-2 py-0.5 text-xs font-semibold text-ink">
              {product.discountBadge}
            </span>
          )}
        </div>

        <img
          src={product.image}
          alt={product.title}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {actions.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-ink/0 opacity-0 transition-all duration-300 ease-out group-hover:bg-ink/10 group-hover:opacity-100">
            {actions.map(({ Icon, label, onClick }, i) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                style={{ transitionDelay: `${i * 60}ms` }}
                className="
                  flex h-9 w-9 -translate-y-2 items-center justify-center
                  rounded bg-white text-ink opacity-0 shadow-md
                  transition-all duration-300 ease-out
                  hover:bg-main hover:text-white
                  group-hover:translate-y-0 group-hover:opacity-100
                "
              >
                <Icon size={16} strokeWidth={2} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3">
        <p className="cursor-pointer text-sm font-medium text-(--title_typo-color) transition-colors duration-200 hover:text-main">
          {product.title}
        </p>
        <div className="mt-1">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          {product.oldPrice && (
            <span className="text-sm text-(--body_typo-color) line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-bold text-main">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
