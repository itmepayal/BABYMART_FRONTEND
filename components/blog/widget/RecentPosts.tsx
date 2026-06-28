import Image from "next/image";
import Link from "next/link";

export type RecentPost = {
  slug: string;
  image: string;
  date: string;
  title: string;
};

type RecentPostsProps = {
  posts: RecentPost[];
};

export const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <div className="rounded border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-black">Recent Posts</h3>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group flex gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400">{post.date}</p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-black transition-colors group-hover:text-coral">
                  {post.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
