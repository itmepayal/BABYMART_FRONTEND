"use client";

import { Trash2 } from "lucide-react";
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
  onCheckout?: () => void;
  onViewCart?: () => void;
}

export const CartDrawer = ({
  open,
  onOpenChange,
  items = DUMMY_CART_ITEMS,
  onRemoveItem,
  onCheckout,
  onViewCart,
}: CartDrawerProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="h-full w-full max-w-sm rounded-none">
        <DrawerHeader className="flex flex-row items-center justify-between border-b border-line px-5 py-4">
          <DrawerTitle className="text-base font-semibold text-ink">
            Your Products
          </DrawerTitle>
          <DrawerClose asChild>
            <button
              className="flex items-center gap-1 text-sm text-ink-soft hover:text-coral transition-colors"
              aria-label="Close"
            >
              <span className="text-base leading-none">×</span>
              Close
            </button>
          </DrawerClose>
        </DrawerHeader>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-ink-soft">
              Your cart is empty.
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <p className="text-sm font-medium text-ink line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-sm text-ink-soft">
                      Qty:{" "}
                      <span className="font-semibold text-ink">{item.qty}</span>
                    </p>
                    <p className="text-sm font-semibold text-teal">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveItem?.(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="shrink-0 text-coral/70 hover:text-coral transition-colors"
                  >
                    <Trash2 size={18} strokeWidth={1.8} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-line px-5 py-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-ink-soft">Order subtotal</span>
            <span className="text-lg font-bold text-teal">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 rounded-md bg-ink text-white hover:bg-ink/90 border-none"
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
      </DrawerContent>
    </Drawer>
  );
};
