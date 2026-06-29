import {
  FacebookIcon,
  LinkIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/icons/icon";

export const ShareRow = ({ tags }: { tags: string[] }) => (
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
