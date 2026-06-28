import Link from "next/link";
import { type IconType } from "react-icons";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

type BlogEmptyStateAction = {
  label: string;
  href: string;
};

type BlogEmptyStateProps = {
  icon?: IconType;
  title: string;
  description?: string;
  action?: BlogEmptyStateAction;
  className?: string;
};

export const BlogEmptyState = ({
  icon: Icon = HiOutlineDocumentMagnifyingGlass,
  title,
  description,
  action,
  className = "",
}: BlogEmptyStateProps) => {
  return (
    <div
      className={`w-225 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 px-6 py-16 text-center sm:py-20 ${className}`}
    >
      <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
        <Icon className="h-7 w-7 text-coral" />
      </div>

      <h3 className="text-xl font-bold text-black sm:text-2xl">{title}</h3>

      {description && (
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>
      )}

      {action && (
        <Link
          href={action.href}
          className="mt-6 inline-flex items-center rounded-full bg-coral px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-coral/90"
        >
          {action.label.toUpperCase()}
        </Link>
      )}
    </div>
  );
};

export default BlogEmptyState;
