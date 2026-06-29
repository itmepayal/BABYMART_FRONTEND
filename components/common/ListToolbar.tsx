"use client";

import { List, Grid2x2, Columns3 } from "lucide-react";

export type ViewMode = "list" | "grid" | "compact";

export type SortConfig<T extends string> = {
  value: T;
  label: string;
};

type ListToolbarProps<T extends string> = {
  sortBy: T;
  sortOptions: SortConfig<T>[];
  onSortChange: (value: T) => void;

  rangeStart: number;
  rangeEnd: number;
  total: number;

  view?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
  showViewToggle?: boolean;
};

export function ListToolbar<T extends string>({
  sortBy,
  sortOptions,
  onSortChange,
  rangeStart,
  rangeEnd,
  total,
  view,
  onViewChange,
  showViewToggle = true,
}: ListToolbarProps<T>) {
  const viewOptions = [
    { key: "list" as const, Icon: List, label: "List view" },
    { key: "grid" as const, Icon: Grid2x2, label: "Grid view" },
    { key: "compact" as const, Icon: Columns3, label: "Compact view" },
  ];

  return (
    <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pb-6">
      <div className="flex items-center gap-2">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as T)}
          className="w-full min-w-0 rounded border border-gray-200 px-3 py-1.5 text-xs text-gray-700 focus:border-main focus:outline-none sm:w-auto sm:text-sm"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:justify-end sm:gap-4">
        <p className="min-w-0 flex-1 text-xs font-medium text-gray-400 sm:flex-none sm:text-sm">
          Showing{" "}
          <span className="text-gray-700">
            {rangeStart}–{rangeEnd}
          </span>{" "}
          of <span className="text-gray-700">{total}</span>
        </p>

        {showViewToggle && view && onViewChange && (
          <div className="flex shrink-0 items-center gap-1">
            {viewOptions.map(({ key, Icon, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => onViewChange(key)}
                aria-label={label}
                aria-pressed={view === key}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded transition-colors sm:h-8 sm:w-8 ${
                  view === key
                    ? "bg-main text-white"
                    : "text-gray-500 hover:bg-orange-50"
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
