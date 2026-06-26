"use client";

import { useState } from "react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import {
  CartDrawer,
  type CartItem,
} from "@/components/layout/header/cart/Cartdrawer";

interface HeaderActionsProps {
  cartCount: number;
  wishlistCount: number;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onOpenLogin: () => void;
  onToggleSearch: () => void;
  cartItems?: CartItem[];
}

export const HeaderActions = ({
  cartCount,
  wishlistCount,
  isWishlisted,
  onToggleWishlist,
  onOpenLogin,
  onToggleSearch,
  cartItems,
}: HeaderActionsProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 ml-auto shrink-0">
      <button
        className="sm:hidden text-ink-soft hover:text-coral transition-colors"
        aria-label="Search"
        onClick={onToggleSearch}
      >
        <Search size={21} strokeWidth={1.8} />
      </button>

      <button
        className="relative text-ink-soft hover:text-coral transition-colors"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        onClick={onToggleWishlist}
      >
        <Heart
          size={21}
          strokeWidth={1.8}
          className={isWishlisted ? "text-coral" : ""}
          fill={isWishlisted ? "currentColor" : "none"}
        />

        {wishlistCount > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-teal text-white text-[10px] leading-none w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {wishlistCount}
          </span>
        )}
      </button>

      <button
        className="relative text-ink-soft hover:text-coral transition-colors"
        aria-label="Cart"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart size={21} strokeWidth={1.8} />

        <span className="absolute -top-1.5 -right-2 bg-teal text-white text-[10px] leading-none w-4 h-4 rounded-full flex items-center justify-center font-bold">
          {cartCount}
        </span>
      </button>

      <button
        className="group hidden sm:flex items-center gap-2.5 text-ink-soft transition-colors"
        aria-label="Account"
        onClick={onOpenLogin}
      >
        <User
          size={22}
          strokeWidth={1.8}
          className="shrink-0 transition-colors group-hover:text-coral"
        />

        <span className="hidden lg:flex flex-col text-base font-medium text-ink leading-[1.2] text-left whitespace-nowrap transition-colors group-hover:text-coral">
          <span>Log In</span>
        </span>
      </button>

      <CartDrawer
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
      />
    </div>
  );
};
