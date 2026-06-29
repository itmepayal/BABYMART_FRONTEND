export interface Collection {
  slug: string;
  label: string;
  image: string;
  tint?: string;
}

export interface CollectionLinkCardProps {
  collection: Collection;
}

export type SortOption = "default" | "price-asc" | "price-desc" | "rating";

export interface CollectionDetailPageProps {
  params: Promise<{ slug: string }>;
}
