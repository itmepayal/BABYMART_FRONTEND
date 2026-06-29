export type EmptyStateAction = {
  label: string;
  href: string;
};

export type EmptyStateProps = {
  icon?: IconType;
  title: string;
  description?: string;
  action?: EmptyStateAction;
  className?: string;
};
