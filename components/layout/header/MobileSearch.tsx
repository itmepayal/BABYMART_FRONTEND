"use client";

import { Search } from "lucide-react";

interface MobileSearchProps {
  isOpen: boolean;
}

export const MobileSearch = ({ isOpen }: MobileSearchProps) => {
  if (!isOpen) return null;

  return (
    <div className="sm:hidden bg-white border-b border-line py-3">
      <div className="w-full max-w-330 mx-auto px-4">
        <div className="flex h-11 rounded-full border-[1.5px] border-line overflow-hidden">
          <input
            type="text"
            autoFocus
            placeholder="Enter key to search"
            className="flex-1 w-0 min-w-0 h-full px-4.5 outline-none text-sm font-medium bg-white"
            style={{
              borderRadius: "24px 0 0 24px",
              borderRight: "none",
            }}
          />

          <button
            className="bg-teal text-white h-full px-5 text-sm font-bold flex items-center hover:bg-teal-dark transition-colors shrink-0"
            style={{
              borderRadius: "0 24px 24px 0",
            }}
            aria-label="Search"
          >
            <Search size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};
