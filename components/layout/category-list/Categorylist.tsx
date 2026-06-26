type Category = {
  id: string;
  label: string;
  image: string;
  href?: string;
};

const CATEGORIES: Category[] = [
  {
    id: "c1",
    label: "Kid Toys",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-1.png?v=1709979621&width=89",
  },
  {
    id: "c2",
    label: "Kid Books",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-2.png?v=1709979621&width=89",
  },
  {
    id: "c3",
    label: "Cloth Utensils",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-3.png?v=1709979621&width=89",
  },
  {
    id: "c4",
    label: "Milk Bottle",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-4.png?v=1709979621&width=89",
  },
  {
    id: "c5",
    label: "Clothing Boy",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-5.png?v=1709979621&width=89",
  },
  {
    id: "c6",
    label: "Feeding Set",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-6.png?v=1709979621&width=89",
  },
  {
    id: "c7",
    label: "Baby Supplies",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-7.png?v=1709979621&width=89",
  },
  {
    id: "c8",
    label: "Strollers",
    image:
      "https://bs-kidxtore.myshopify.com/cdn/shop/files/home4-cate-8.png?v=1709979621&width=89",
  },
];

function CategoryItem({ category }: { category: Category }) {
  const content = (
    <div className="group flex flex-col items-center gap-3 text-center">
      <div className="flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-full bg-main-mix-bg/40 transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[72px] sm:w-[72px] lg:h-20 lg:w-20">
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

export function CategoryList({
  categories = CATEGORIES,
}: {
  categories?: Category[];
}) {
  return (
    <section className="sm:py-3 pb-3 sm:pb-6 sm:px-0">
      <div className="mx-auto max-w-330 px-4 sm:px-0">
        <div
          className="
            grid grid-flow-col auto-cols-[minmax(88px,1fr)] justify-between gap-3
            overflow-x-auto scroll-smooth
            scrollbar-none [&::-webkit-scrollbar]:hidden
            sm:auto-cols-[minmax(96px,1fr)]
            md:auto-cols-fr md:overflow-visible
          "
        >
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
