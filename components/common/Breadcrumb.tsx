import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImageSrc?: string;
};

export const Breadcrumb = ({
  title,
  breadcrumbs,
  bgImageSrc = "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/breadcrumbs-bg-img.png",
}: BreadcrumbProps) => {
  return (
    <section className="relative h-36 w-full overflow-hidden bg-coral/35 sm:h-45 md:h-50 lg:h-55">
      <Image
        src={bgImageSrc}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        priority
      />
      <div className="relative z-10 mx-auto flex h-full max-w-330 flex-col items-center justify-center gap-1.5 px-4 text-center sm:gap-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm font-medium sm:gap-2 sm:text-base md:text-lg">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li
                  key={`${item.label}-${index}`}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  {index > 0 && (
                    <HiChevronRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-black sm:h-4 sm:w-4"
                    />
                  )}
                  {isLast || !item.href ? (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={isLast ? "text-coral" : "text-black"}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black transition-colors hover:text-coral"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};
