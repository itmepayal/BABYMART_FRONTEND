import Image from "next/image";
import Link from "next/link";
import { CollectionLinkCardProps } from "@/types/collection";

export const CollectionCard = ({ collection }: CollectionLinkCardProps) => {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative flex flex-col overflow-hidden rounded border border-gray-100 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_45px_-15px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 p-1"
    >
      <div
        className={`relative aspect-square w-full rounded-full overflow-hidden ${collection.tint ?? "bg-gray-50"}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[65%] w-[65%] rounded-full bg-white/55 blur-2xl transition-transform duration-500 ease-out group-hover:scale-110" />
        </div>

        <Image
          src={collection.image}
          alt={collection.label}
          fill
          sizes="(max-width: 480px) 42vw, (max-width: 640px) 33vw, (max-width: 768px) 28vw, (max-width: 1024px) 22vw, (max-width: 1280px) 16vw, 13vw"
          className="relative z-10 object-contain p-4 sm:p-5 md:p-6 lg:p-7 transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <span className="absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-transparent via-white/0 to-transparent" />
      </div>

      <div className="flex flex-1 items-center justify-between gap-2 border-t border-gray-100 px-2.5 py-2.5 sm:gap-3 sm:px-4 sm:py-3.5">
        <div className="min-w-0">
          <p className="truncate text-[12.5px] font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-teal-700 sm:text-[13.5px] md:text-[15px]">
            {collection.label}
          </p>
          <p className="mt-0.5 hidden text-xs font-medium text-gray-400 sm:block">
            Shop the collection
          </p>
        </div>

        <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white sm:h-7 sm:w-7 md:h-8 md:w-8">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5"
          >
            <path
              d="M2 8h11M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};
