type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-widest text-(--color-main)">
      {title}
    </h3>

    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.label} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 flex-none rounded bg-(--color-main)" />

          <a
            href={link.href}
            className="text-sm text-(--body_typo-color) transition-colors duration-200 hover:text-(--color-main)"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
