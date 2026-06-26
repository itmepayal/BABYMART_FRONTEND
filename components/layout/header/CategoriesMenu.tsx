"use client";

interface CategoriesMenuProps {
  categories: string[];
  show: boolean;
}

export const CategoriesMenu = ({ categories, show }: CategoriesMenuProps) => {
  if (!show) return null;

  return (
    <ul
      className="absolute top-full left-0 z-50 w-64 overflow-hidden rounded-b-lg bg-white shadow-[0_12px_30px_rgba(0,0,0,0.14)]"
      style={{ borderRadius: "0 0 8px 8px" }}
    >
      {categories.map((category) => (
        <li key={category}>
          <a
            href="#"
            className="flex items-center justify-between gap-2 border-b border-[#f5f3ef] px-4.5 py-2.75 text-[13.5px] font-semibold text-ink transition-colors hover:bg-teal-light hover:text-teal-dark whitespace-nowrap"
          >
            {category}
            <span className="text-xs">›</span>
          </a>
        </li>
      ))}

      <li>
        <a
          href="#"
          className="flex items-center justify-between px-4.5 py-2.75 text-[13.5px] font-extrabold text-coral-dark transition-colors hover:bg-teal-light"
        >
          Sale hot
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center justify-between px-4.5 py-2.75 text-[13.5px] font-extrabold text-[#c2185b] transition-colors hover:bg-teal-light"
        >
          Combo, save money
        </a>
      </li>
    </ul>
  );
};
