import { Category } from "@/types/category";

export function CategoryItem({ category }: { category: Category }) {
  const content = (
    <div className="group flex flex-col items-center gap-3 rounded border-2 border-dashed border-transparent py-5 text-center transition-all duration-300 ease-out hover:border-main">
      <div className="flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-full bg-main-mix-bg/40 transition-transform duration-300 ease-out group-hover:scale-105 sm:h-18 sm:w-18 lg:h-20 lg:w-20">
        <img
          src={category.image}
          alt={category.label}
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="text-xs font-medium text-(--title_typo-color) transition-colors duration-200 group-hover:text-main sm:text-lg">
        {category.label}
      </span>
    </div>
  );

  if (category.href) {
    return (
      <a href={category.href} className="flex-none">
        {content}
      </a>
    );
  }

  return <div className="flex-none">{content}</div>;
}
