"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import BlogSidebar from "@/components/blog/BlogSidebar";
import type { Category } from "@/components/blog/widget/Categories";
import type { RecentPost } from "@/components/blog/widget/RecentPosts";
import { NewsletterBanner } from "@/components/blog/detail/NewsletterBanner";

const post = {
  slug: "luctus-enim-hac-mus-mauris-erat-risus-elit",
  title: "Luctus Enim Hac Mus Mauris Erat Risus Elit",
  author: "admin",
  date: "May 9, 2025",
  commentsCount: 2,
  heroImage:
    "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-1.jpg",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Children Care", href: "/blog/category/children-care" },
    { label: "New Collection", href: "/blog/category/new-collection" },
    { label: "Luctus enim hac mus mauris erat risus elit" },
  ],
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis non commodo sodales. Proin vel egestas erat. Vestibulum facilisis nibh erat, sit amet commodo magna erat congue. Quisque imperdiet de lorus erat at vehicula.",
  body1:
    "Purus, mus litore enim erat nec turpis dignissim sociis sit lacinia. Sociis sit amet quisque lobortis dignissim, sociis sit lacinia sem laoreet vivamus rutrum gravida rhoncus magnis a varius. Proin vulputate est tellus accumsan parturient, augue cras nam turpis hendrerit duis litora ligula pharetra curae mi risus et semper conubia sem facilisis.",
  quote:
    "If you're #toxykids include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body's major building blocks; it's a protein and critical to keeping your skin structure strong.",
  galleryImages: [
    "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-2.jpg",
    "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-3.jpg",
  ],
  body2:
    "Sagittis tincidunt nisl etiam ante netus magnis parturient, vel litora purus poscitur risus elit, sed dolor vestibulum aliquet ridiculus vitae vehicula. Cum magnis turpis a duis sapien lectus litora amet conubia praesent metus, sociis tincidunt volutpat fringilla curae mi risus et semper conubia.",
  tags: ["Children Care", "Jigsaw Puzzle", "New Collection"],
};

const categories: Category[] = [
  { label: "Baby", href: "/blog/category/baby" },
  { label: "Children Care", href: "/blog/category/children-care" },
  { label: "How To", href: "/blog/category/how-to" },
  { label: "Jigsaw Puzzle", href: "/blog/category/jigsaw-puzzle" },
  { label: "New Collection", href: "/blog/category/new-collection" },
  { label: "Smart Toys", href: "/blog/category/smart-toys" },
];

const recentPosts: RecentPost[] = [
  {
    slug: "ut-wisi-enim-ad-minim-veniam",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-3.jpg",
    date: "October 27, 2022",
    title: "Ut wisi enim ad minim veniam",
  },
  {
    slug: "montes-suspendisse-massa-curae",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-2.jpg",
    date: "October 27, 2022",
    title: "Montes suspendisse massa curae",
  },
  {
    slug: "eu-parturient-dictumst-fames",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-4.jpg",
    date: "October 27, 2022",
    title: "Eu parturient dictumst fames",
  },
  {
    slug: "sociis-tincidunt-volutpat-fringilla",
    image:
      "https://bw-kidxtore.bzotech.com/wp-content/uploads/2023/04/blog-1.jpg",
    date: "October 27, 2022",
    title: "Sociis tincidunt volutpat fringilla",
  },
];

const tags: string[] = [
  "Alternatives",
  "Clinical",
  "Health",
  "Nutrients",
  "Pills",
  "Shortage",
  "Tampons",
  "Tools",
  "Treatment",
  "Vitamin",
];

const BlogPostPage = () => {
  return (
    <>
      <Breadcrumb title="Post" breadcrumbs={post.breadcrumbs} />

      <div className="mx-auto max-w-330 px-4 py-10 sm:py-14">
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
    </>
  );
};

const ShareRow = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4">
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Share:</span>
      {[FacebookIcon, TwitterIcon, MailIcon, LinkIcon].map((Icon, idx) => (
        <button
          key={idx}
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-primary hover:text-white"
          aria-label="Share"
        >
          <Icon />
        </button>
      ))}
    </div>
  </div>
);

const CommentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (
      e.currentTarget.elements.namedItem("are_you_human") as HTMLInputElement
    )?.value;
    if (honeypot) return;
    setSubmitted(true);
  };

  return (
    <section className="flex flex-col gap-4 border-t border-gray-200 pt-6">
      <h2 className="text-xl font-semibold text-gray-900">Leave A Comment</h2>

      <label className="flex items-center gap-2 text-sm text-gray-500">
        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        Save my name, email, and website in this browser for the next time I
        comment.
      </label>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="hidden">
          <label htmlFor="are_you_human">Are you human?</label>
          <input
            id="are_you_human"
            name="are_you_human"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <textarea
          required
          placeholder="* Comment"
          rows={5}
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            required
            type="text"
            placeholder="* Name"
            className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
          <input
            required
            type="email"
            placeholder="* Email"
            className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </div>

        <input
          type="url"
          placeholder="Web Site"
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />

        <button
          type="submit"
          className="w-fit rounded bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Post Comment
        </button>

        {submitted && (
          <p className="text-sm text-green-600">
            Thanks! Your comment has been submitted.
          </p>
        )}
      </form>
    </section>
  );
};

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <path
      d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 4.5V20h14v-1.5c0-2.5-3-4.5-7-4.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <rect
      x="4"
      y="6"
      width="16"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M4 10h16M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <path
      d="M21 12a8.5 8.5 0 1 1-3.4-6.8L21 4l-1.2 3.4A8.5 8.5 0 0 1 21 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8 10 10v1.5H8.5V14H10v7h2.5v-7h2l.5-2.5h-2.5V10c0-.6.4-1 1-1Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20 6.6c-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.9-.7.4-1.4.7-2.2.8a3.2 3.2 0 0 0-5.5 2.9A9 9 0 0 1 5 5.8a3.2 3.2 0 0 0 1 4.3c-.6 0-1.1-.2-1.6-.4 0 1.5 1.1 2.8 2.5 3.1-.6.2-1.1.2-1.7.1.5 1.3 1.7 2.2 3.2 2.3A9.1 9.1 0 0 1 3 17a12.8 12.8 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.9v-.6c.7-.5 1.3-1.2 1.3-1.9Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <path
      d="M9 12a3 3 0 0 0 4.2.3l2-2a3 3 0 0 0-4.2-4.3l-1 1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M15 12a3 3 0 0 0-4.2-.3l-2 2a3 3 0 0 0 4.2 4.3l1-1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export default BlogPostPage;
