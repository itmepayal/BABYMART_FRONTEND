export interface Collection {
  slug: string;
  label: string;
  image: string;
  tint?: string;
}

export interface CollectionLinkCardProps {
  collection: Collection;
}
