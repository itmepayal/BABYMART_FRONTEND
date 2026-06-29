export interface NewsPost {
  id: string;
  title: string;
  image: string;
  author: string;
  comments: number;
  href?: string;
}

export type BlogPost = {
  slug: string;
  image: string;
  tags: string[];
  title: string;
  author: string;
  date: string;
  commentsCount: number;
  excerpt: string;
};

export type BlogPostCardProps = {
  post: BlogPost;
};
