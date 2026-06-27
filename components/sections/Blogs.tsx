"use client";

import { MessageCircle, UserRound } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { LATEST_NEWS } from "@/lib/constants";

import "swiper/css";

export function Blogs() {
  return (
    <section className="overflow-x-hidden">
      <SectionHeader title="Latest News" href="#" linkLabel="See More" />

      <div className="sm:hidden">
        <Swiper slidesPerView={1.15} spaceBetween={16}>
          {LATEST_NEWS.map((post) => (
            <SwiperSlide key={post.id} className="h-auto">
              <BlogCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {LATEST_NEWS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: (typeof LATEST_NEWS)[number] }) {
  return (
    <article className="group overflow-hidden">
      <a href={post.href ?? "#"} className="block overflow-hidden rounded">
        <img
          src={post.image}
          alt={post.title}
          draggable={false}
          className="aspect-4/3 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </a>

      <h3 className="mt-3 text-base font-semibold leading-snug text-(--title_typo-color) sm:text-lg">
        <a
          href={post.href ?? "#"}
          className="transition-colors duration-200 hover:text-main line-clamp-1"
        >
          {post.title}
        </a>
      </h3>

      <div className="mt-2 flex items-center gap-3 text-sm text-(--body_typo-color)">
        <span className="flex items-center gap-1.5">
          <UserRound size={14} />
          By: {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle size={14} />
          {post.comments} Comments
        </span>
      </div>
    </article>
  );
}
