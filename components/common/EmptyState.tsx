import Link from "next/link";
import { EmptyStateProps } from "@/types/empty";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

export const EmptyState = ({
  icon: Icon = HiOutlineDocumentMagnifyingGlass,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) => {
  return (
    <div
      className={`mx-auto flex w-full max-w-225 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20 ${className}`}
    >
      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100 sm:mb-5 sm:h-16 sm:w-16">
        <Icon className="h-5 w-5 text-coral sm:h-7 sm:w-7" />
      </div>

      <h3 className="text-lg font-bold text-black sm:text-xl md:text-2xl">
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600 sm:mt-3 sm:max-w-sm sm:text-base">
          {description}
        </p>
      )}

      {action && (
        <Link
          href={action.href}
          className="mt-5 inline-flex items-center rounded-full bg-coral px-5 py-2 text-xs font-bold tracking-wide text-white transition-colors hover:bg-coral/90 sm:mt-6 sm:px-6 sm:py-2.5 sm:text-sm"
        >
          {action.label.toUpperCase()}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
