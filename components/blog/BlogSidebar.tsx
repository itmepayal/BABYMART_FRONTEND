import { SearchInput } from "@/components/blog/widget/SearchInput";
import { Categories, type Category } from "@/components/blog/widget/Categories";
import {
  RecentPosts,
  type RecentPost,
} from "@/components/blog/widget/RecentPosts";
import { Tags } from "@/components/blog/widget/Tags";

type BlogSidebarProps = {
  categories: Category[];
  recentPosts: RecentPost[];
  tags: string[];
};

export const BlogSidebar = ({
  categories,
  recentPosts,
  tags,
}: BlogSidebarProps) => {
  return (
    <aside className="flex flex-col gap-6">
      <SearchInput />
      <Categories categories={categories} />
      <RecentPosts posts={recentPosts} />
      <Tags tags={tags} />
    </aside>
  );
};

export default BlogSidebar;
