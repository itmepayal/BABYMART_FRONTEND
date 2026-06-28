import Link from "next/link";

type TagsProps = {
  tags: string[];
};

export const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="rounded border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-black">Tags</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tag/${tag.toLowerCase()}`}
            className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-black transition-colors hover:border-coral hover:text-coral"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};
