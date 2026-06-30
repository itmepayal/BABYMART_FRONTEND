"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { categories, navLinks, mobileNavLinks } from "@/lib/constants";
import { Navbar } from "@/components/layout/header/Navbar";
import { SearchBar } from "@/components/layout/header/SearchBar";
import { MobileMenu } from "@/components/layout/header/MobileMenu";
import { AuthDrawer } from "@/components/layout/header/AuthDrawer";
import { MobileSearch } from "@/components/layout/header/MobileSearch";
import { HeaderActions } from "@/components/layout/header/HeaderActions";

const Header = () => {
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [loginDrawerOpen, setLoginDrawerOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login");

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || loginDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, loginDrawerOpen]);

  function openDrawer(tab = "login") {
    setAuthTab(tab);
    setLoginDrawerOpen(true);
  }

  function toggleWishlist() {
    setIsWishlisted((prev) => !prev);
    setWishlistCount((prev) =>
      isWishlisted ? Math.max(0, prev - 1) : prev + 1,
    );
  }

  return (
    <>
      <header className="bg-white border-b border-line py-3 lg:py-3.5 relative">
        <div className="w-full max-w-330 mx-auto flex items-center gap-3 lg:gap-6 px-4 sm:px-0">
          <button
            className="lg:hidden text-ink shrink-0 -ml-1 p-1"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={2} />
          </button>
          <Logo />
          <SearchBar />
          <HeaderActions
            cartCount={cartCount}
            wishlistCount={wishlistCount}
            isWishlisted={isWishlisted}
            onToggleWishlist={toggleWishlist}
            onOpenLogin={() => openDrawer("login")}
            onToggleSearch={() => setMobileSearchOpen((v) => !v)}
          />
        </div>
      </header>

      {mobileSearchOpen && <MobileSearch isOpen={mobileSearchOpen} />}

      <Navbar
        categories={categories}
        navLinks={navLinks}
        showCategoryMenu={showCategoryMenu}
        onCategoryMouseEnter={() => setShowCategoryMenu(true)}
        onCategoryMouseLeave={() => setShowCategoryMenu(false)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        categories={categories}
        navLinks={mobileNavLinks}
        wishlistCount={wishlistCount}
        isWishlisted={isWishlisted}
        onOpenLogin={() => openDrawer("login")}
      />

      <AuthDrawer
        open={loginDrawerOpen}
        onClose={() => setLoginDrawerOpen(false)}
      />
    </>
  );
};

export default Header;
