"use client";

import { useMemo, useState } from "react";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { EmptyState } from "@/components/common/EmptyState";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import {
  allPosts,
  categories,
  recentPosts,
  tags,
  POSTS_PER_PAGE,
} from "@/data/blog";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return allPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Breadcrumb
        title="Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <div className="mx-auto max-w-330 px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            <div className="flex flex-col gap-10">
              {paginatedPosts.length > 0 ? (
                paginatedPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))
              ) : (
                <EmptyState
                  icon={HiOutlineDocumentMagnifyingGlass}
                  title="No posts yet"
                  description="There are no blog posts to show right now. Check back soon for new content."
                />
              )}
            </div>

            <BlogSidebar
              categories={categories}
              recentPosts={recentPosts}
              tags={tags}
            />
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          )}

          <NewsletterBanner />
        </div>
      </div>
    </>
  );
};

export default Blog;
