"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  Phone,
  User,
  X,
} from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  navLinks: NavLink[];
  wishlistCount: number;
  isWishlisted: boolean;
  onOpenLogin: () => void;
}

export const MobileMenu = ({
  isOpen,
  onClose,
  categories,
  navLinks,
  wishlistCount,
  isWishlisted,
  onOpenLogin,
}: MobileMenuProps) => {
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-200">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-[82%] max-w-85 bg-white shadow-2xl flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-line shrink-0">
          <span className="font-bold text-lg">
            <span style={{ color: "var(--teal)" }}>Kid</span>
            <span style={{ color: "var(--coral)" }}>Xtore</span>
          </span>

          <button
            onClick={onClose}
            className="text-ink-soft p-1"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col py-2 border-b border-line">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink text-[15px] font-bold px-5 py-3 hover:bg-teal-light hover:text-teal-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-b border-line">
          <button
            className="w-full flex items-center justify-between px-5 py-3.5 font-bold text-[15px] text-ink"
            onClick={() => setMobileCategoriesOpen((prev) => !prev)}
          >
            <span className="flex items-center gap-2.5">
              <Menu size={17} strokeWidth={2} />
              All Categories
            </span>

            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`transition-transform ${
                mobileCategoriesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileCategoriesOpen && (
            <ul className="bg-[#fafafa]">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="flex justify-between items-center px-5 py-3 pl-9 text-[14px] font-semibold text-ink border-t border-line hover:text-teal-dark transition-colors"
                  >
                    {category}

                    <ChevronRight size={14} />
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  className="flex items-center px-5 py-3 pl-9 text-[14px] font-extrabold text-coral-dark border-t border-line"
                >
                  Sale hot
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center px-5 py-3 pl-9 text-[14px] font-extrabold text-[#c2185b] border-t border-line"
                >
                  Combo, save money
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="flex flex-col py-2 border-b border-line">
          <button
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="flex items-center gap-3 px-5 py-3 text-[14.5px] font-semibold text-ink hover:text-teal-dark transition-colors"
          >
            <User size={19} strokeWidth={1.8} />
            Login / Register
          </button>

          <a
            href="wishlist"
            className="flex items-center justify-between gap-3 px-5 py-3 text-[14.5px] font-semibold text-ink hover:text-teal-dark transition-colors"
          >
            <span className="flex items-center gap-3">
              <Heart
                size={19}
                strokeWidth={1.8}
                className={isWishlisted ? "text-coral" : ""}
                fill={isWishlisted ? "currentColor" : "none"}
              />
              Wishlist
            </span>

            {wishlistCount > 0 && (
              <span className="bg-teal text-white text-[11px] leading-none w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </a>
        </div>
        <div className="px-5 py-4 mt-auto">
          <a
            href="tel:+13083264120"
            className="flex items-center gap-2.5 text-teal-dark text-sm font-bold"
          >
            <Phone size={16} strokeWidth={2} />
            Hotline: +1 (308) 326-4120
          </a>
        </div>
      </div>
    </div>
  );
};
