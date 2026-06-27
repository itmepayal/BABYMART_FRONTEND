export function StarRating({
  rating = 0,
  reviews = 0,
}: {
  rating?: number;
  reviews?: number;
}) {
  return (
    <div className="flex items-center gap-1 text-sun">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i < rating ? "fill-sun" : "fill-line"}`}
        >
          <path d="M10 1.5l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L10 14.9l-5.5 3.2 1.4-6.1L1.2 7.8l6.2-.6z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-(--body_typo-color)">({reviews})</span>
    </div>
  );
}
