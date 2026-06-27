import { Categories } from "@/lib/constants";
import { CategoryItem } from "@/components/category/CategoryItem";

export function Category() {
  return (
    <div
      className="
            grid grid-flow-col auto-cols-[minmax(88px,1fr)] justify-between gap-3
            overflow-x-auto scroll-smooth
            scrollbar-none [&::-webkit-scrollbar]:hidden
            sm:auto-cols-[minmax(96px,1fr)]
            md:auto-cols-fr md:overflow-visible
          "
    >
      {Categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
