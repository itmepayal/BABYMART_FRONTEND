"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  qty: number;
  price: number;
};

const DUMMY_CART_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Integer tortor eros nas",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=160&h=160&fit=crop",
    qty: 1,
    price: 65.0,
  },
];

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items?: CartItem[];
  onRemoveItem?: (id: string) => void;
  onIncreaseQty?: (id: string) => void;
  onDecreaseQty?: (id: string) => void;
  onCheckout?: () => void;
  onViewCart?: () => void;
}

export const CartDrawer = ({
  open,
  onOpenChange,
  items = DUMMY_CART_ITEMS,
  onRemoveItem,
  onIncreaseQty,
  onDecreaseQty,
  onCheckout,
  onViewCart,
}: CartDrawerProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="h-full w-full max-w-sm rounded-none">
        <DrawerHeader className="flex flex-row items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-2">
            <DrawerTitle className="text-base font-semibold text-ink">
              Your Products
            </DrawerTitle>
            {itemCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-teal/10 px-1.5 text-xs font-semibold text-teal">
                {itemCount}
              </span>
            )}
          </div>
          <DrawerClose asChild>
            <button
              className="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-coral"
              aria-label="Close"
            >
              <span className="text-base leading-none">×</span>
              Close
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <ShoppingBag
                  size={22}
                  strokeWidth={1.5}
                  className="text-ink-soft"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">
                  Your cart is empty
                </p>
                <p className="mt-1 text-xs text-ink-soft">
                  Add items to get started.
                </p>
              </div>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <p className="line-clamp-1 text-sm font-medium text-ink">
                      {item.name}
                    </p>
                    <p className="text-sm font-semibold text-teal">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mt-0.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onDecreaseQty?.(item.id)}
                        disabled={item.qty <= 1}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="flex h-6 w-6 items-center justify-center rounded border border-line text-ink-soft transition-colors hover:border-teal hover:text-teal disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="min-w-4 text-center text-sm font-semibold text-ink">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => onIncreaseQty?.(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="flex h-6 w-6 items-center justify-center rounded border border-line text-ink-soft transition-colors hover:border-teal hover:text-teal"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-2 self-stretch">
                    <button
                      onClick={() => onRemoveItem?.(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-coral/70 transition-colors hover:text-coral"
                    >
                      <Trash2 size={18} strokeWidth={1.8} />
                    </button>
                    <span className="mt-auto text-sm font-semibold text-ink">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-ink-soft">
                Order subtotal{" "}
                <span className="text-xs text-ink-soft/70">
                  ({itemCount} {itemCount === 1 ? "item" : "items"})
                </span>
              </span>
              <span className="text-lg font-bold text-teal">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 rounded-md border-none bg-ink text-white hover:bg-ink/90"
                onClick={onViewCart}
              >
                View Cart
              </Button>
              <Button
                className="flex-1 rounded-md bg-teal text-white hover:bg-teal-dark"
                onClick={onCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};
