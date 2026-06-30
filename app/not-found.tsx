"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-330 w-full flex flex-col items-center text-center">
        <div className="relative mb-6 sm:mb-8">
          <p
            className="text-[96px] sm:text-[140px] md:text-[170px] font-extrabold leading-none select-none"
            style={{ color: "var(--teal)" }}
          >
            4<span style={{ color: "var(--coral)" }}>0</span>4
          </p>

          <span
            className="absolute -top-2 left-2 h-3 w-3 rounded-full sm:h-4 sm:w-4"
            style={{ backgroundColor: "var(--sun)" }}
          />
          <span
            className="absolute bottom-2 -right-3 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
            style={{ backgroundColor: "var(--coral)" }}
          />
          <span
            className="absolute top-1/2 -left-4 h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5"
            style={{ backgroundColor: "var(--teal-dark)" }}
          />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-ink mb-2.5 sm:mb-3">
          Oops, this page took a nap
        </h1>

        <p className="text-sm sm:text-base text-(--body_typo-color) max-w-md mb-7 sm:mb-9">
          We couldn&apos;t find the page you were looking for. It may have
          moved, been renamed, or never existed. Let&apos;s get you back to
          shopping.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-md px-6 py-3 text-sm font-bold text-white transition-colors"
            style={{ backgroundColor: "var(--teal)" }}
          >
            <Home size={17} strokeWidth={2} />
            Back to home
          </Link>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-md border px-6 py-3 text-sm font-bold transition-colors hover:bg-teal-light"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            <Search size={17} strokeWidth={2} />
            Browse shop
          </Link>
        </div>

        <button
          type="button"
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-(--body_typo-color) hover:text-teal-dark transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Go back
        </button>
      </div>
    </div>
  );
}
