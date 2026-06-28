import Link from "next/link";

export type Category = {
  label: string;
  href: string;
};

type CategoriesProps = {
  categories: Category[];
};

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="rounded border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-black">Categories</h3>
      <ul className="mt-4">
        {categories.map((category, index) => (
          <li key={category.href}>
            <Link
              href={category.href}
              className={`block py-3 text-sm text-black transition-colors hover:text-coral ${
                index !== categories.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
