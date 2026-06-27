import { ChevronsRight } from "lucide-react";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkLabel?: string;
  showLink?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({
  title,
  href = "#",
  linkLabel = "See More",
  showLink = true,
  className = "",
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-5 flex flex-row items-center justify-between sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
        children
          ? "flex-col gap-3"
          : "flex-row items-center justify-between gap-3"
      } ${className}`}
    >
      <h2 className="min-w-0 shrink-0 text-xl font-bold leading-tight text-(--title_typo-color) sm:text-4xl lg:text-4xl">
        {title}
      </h2>

      {children}

      {showLink && (
        <a
          href={href}
          className="
            group flex w-fit shrink-0 items-center gap-1 rounded border
            border-border px-2.5 py-1 text-xs font-medium whitespace-nowrap
            text-(--title_typo-color)
            transition-all duration-200 ease-out
            sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm
            hover:border-dashed hover:border-main hover:text-main
          "
        >
          {linkLabel}
          <ChevronsRight
            size={12}
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-3.5"
          />
        </a>
      )}
    </div>
  );
}

export function FilterHeader({
  title,
  href = "#",
  linkLabel = "See More",
  showLink = true,
  className = "",
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-5 flex sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
        children
          ? "flex-col gap-3"
          : "flex-row items-center justify-between gap-3"
      } ${className}`}
    >
      <h2 className="min-w-0 shrink-0 text-xl font-bold leading-tight text-(--title_typo-color) sm:text-4xl lg:text-4xl">
        {title}
      </h2>

      {children && (
        <div className="flex w-full justify-center sm:w-auto sm:justify-start">
          {children}
        </div>
      )}

      {showLink && (
        <a
          href={href}
          className="
            group flex w-fit shrink-0 items-center gap-1 rounded border
            border-border px-2.5 py-1 text-xs font-medium whitespace-nowrap
            text-(--title_typo-color)
            transition-all duration-200 ease-out
            sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm
            hover:border-dashed hover:border-main hover:text-main
          "
        >
          {linkLabel}
          <ChevronsRight
            size={12}
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-3.5"
          />
        </a>
      )}
    </div>
  );
}
