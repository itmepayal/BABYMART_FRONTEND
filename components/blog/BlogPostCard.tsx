import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineChatBubbleLeft,
} from "react-icons/hi2";
import { BlogPostCardProps } from "@/types/blog";

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden rounded"
      >
        <div className="relative aspect-16/8 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mt-4 text-2xl font-bold text-black sm:text-3xl">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-coral"
        >
          {post.title}
        </Link>
      </h2>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <HiOutlineUser className="h-4 w-4" />
          By: <span className="font-medium text-black">{post.author}</span>
        </span>
        <span aria-hidden="true" className="hidden sm:inline">
          |
        </span>
        <span className="flex items-center gap-1.5">
          <HiOutlineCalendar className="h-4 w-4" />
          {post.date}
        </span>
        <span aria-hidden="true" className="hidden sm:inline">
          |
        </span>
        <span className="flex items-center gap-1.5">
          <HiOutlineChatBubbleLeft className="h-4 w-4" />
          {post.commentsCount} Comments
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
        {post.excerpt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center rounded-full bg-coral px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-coral/90"
      >
        READ MORE
      </Link>
    </article>
  );
};

export default BlogPostCard;
