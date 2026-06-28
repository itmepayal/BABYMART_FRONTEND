"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Pagination } from "@/components/common/Pagination";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { NewsletterBanner } from "@/components/blog/detail/NewsletterBanner";
import {
  allPosts,
  categories,
  recentPosts,
  tags,
  slugToLabel,
  POSTS_PER_PAGE,
} from "@/data/blog";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

const TagPage = () => {
  const params = useParams();

  const rawSlug = Array.isArray(params?.slug)
    ? params.slug[0]
    : ((params?.slug as string) ?? "");

  const tagLabel = slugToLabel(rawSlug);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(
    () =>
      allPosts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === tagLabel.toLowerCase()),
      ),
    [tagLabel],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, filteredPosts]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Breadcrumb
        title={tagLabel}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: tagLabel },
        ]}
      />

      <div className="mx-auto max-w-330 px-4 sm:px-0 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-10">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))
            ) : (
              <BlogEmptyState
                icon={HiOutlineDocumentMagnifyingGlass}
                title="No posts found"
                description={`We couldn't find any posts tagged "${tagLabel}".`}
                action={{ label: "Browse all posts", href: "/blog" }}
              />
            )}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            )}
          </div>
          <BlogSidebar
            categories={categories}
            recentPosts={recentPosts}
            tags={tags}
          />
        </div>
        <NewsletterBanner />
      </div>
    </>
  );
};

export default TagPage;
