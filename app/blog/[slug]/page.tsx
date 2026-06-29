"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { categories, post, recentPosts, tags } from "@/data/blog";
import { ShareRow } from "@/components/blog/details/ShareRow";
import { CalendarIcon, UserIcon } from "lucide-react";
import { CommentIcon } from "@/components/icons/icon";
import { CommentForm } from "@/components/blog/form/CommentForm";

const BlogPostPage = () => {
  return (
    <>
      <Breadcrumb title="Post" breadcrumbs={post.breadcrumbs} />
      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            <article className="flex flex-col gap-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <UserIcon /> By {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <CommentIcon /> {post.commentsCount} Comments
                </span>
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {post.title}
              </h1>
              <p className="leading-relaxed text-gray-600">{post.intro}</p>
              <blockquote className="rounded border border-primary/30 bg-primary/5 px-6 py-5 text-gray-700 italic">
                <span className="mr-1 text-2xl leading-none text-primary">
                  &ldquo;
                </span>
                {post.quote}
              </blockquote>
              <p className="leading-relaxed text-gray-600">{post.body1}</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {post.galleryImages.map((src, idx) => (
                  <div
                    key={src}
                    className="relative aspect-4/3 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={src}
                      alt={`${post.title} gallery image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="leading-relaxed text-gray-600">{post.body2}</p>
              <ShareRow tags={post.tags} />
              <CommentForm />
            </article>
            <BlogSidebar
              categories={categories}
              recentPosts={recentPosts}
              tags={tags}
            />
          </div>
          <NewsletterBanner />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
