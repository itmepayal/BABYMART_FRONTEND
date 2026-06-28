"use client";

import { Menu, ChevronDown, Phone } from "lucide-react";
import { CategoriesMenu } from "@/components/layout/header/CategoriesMenu";
import { CollectionsMenu } from "@/components/layout/header/CollectionsMenu";

type NavLink = {
  label: string;
  href: string;
};

type Collection = {
  label: string;
  href: string;
  image?: string;
};

interface NavbarProps {
  categories: string[];
  navLinks: NavLink[];
  collections?: Collection[];
  showCategoryMenu: boolean;
  onCategoryMouseEnter: () => void;
  onCategoryMouseLeave: () => void;
}

const navLinkClassName =
  "text-white text-sm font-bold px-3.5 xl:px-5.5 py-3.75 hover:bg-black/10 transition-colors whitespace-nowrap";

export const Navbar = ({
  categories,
  navLinks,
  collections,
  showCategoryMenu,
  onCategoryMouseEnter,
  onCategoryMouseLeave,
}: NavbarProps) => {
  return (
    <nav className="hidden lg:flex bg-teal">
      <div className="w-full max-w-330 mx-auto flex items-center px-0">
        <div
          className="relative bg-teal-dark text-white px-5.5 py-3.75 flex items-center gap-2.5 font-bold text-sm cursor-pointer min-w-fit"
          onMouseEnter={onCategoryMouseEnter}
          onMouseLeave={onCategoryMouseLeave}
        >
          <Menu size={17} strokeWidth={2} />

          <span className="hidden xl:inline">All Categories</span>
          <span className="xl:hidden">Categories</span>

          <ChevronDown size={14} strokeWidth={2} className="ml-1" />
          <CategoriesMenu categories={categories} show={showCategoryMenu} />
        </div>

        <div className="flex flex-1 justify-center overflow-x-auto">
          {navLinks.map((link) => {
            if (link.label === "Collections") {
              return (
                <CollectionsMenu
                  key={link.href}
                  collections={collections}
                  label={link.label}
                />
              );
            }

            return (
              <a key={link.href} href={link.href} className={navLinkClassName}>
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden xl:flex items-center gap-2 ml-auto pl-12 shrink-0 text-white text-[13px] font-bold">
          <Phone size={16} strokeWidth={2} />
          Hotline: +1 (308) 326-4120
        </div>
      </div>
    </nav>
  );
};
