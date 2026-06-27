import { BRAND_LOGO_BASE, BRAND_NAMES } from "@/lib/constants";
import { Brand } from "@/types/brand";

export const BrandCard = ({ brand }: { brand: Brand }) => {
  const content = (
    <div
      data-card
      className="flex aspect-6/3 w-full items-center justify-center rounded bg-main-mix-bg/40 px-6 transition-transform duration-300 ease-out hover:scale-[1.03]"
    >
      <img
        src={brand.logo}
        alt={brand.name}
        draggable={false}
        className="h-full w-full object-contain"
      />
    </div>
  );

  return brand.href ? (
    <a href={brand.href} className="block">
      {content}
    </a>
  ) : (
    content
  );
};
