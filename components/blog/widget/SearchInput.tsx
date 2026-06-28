"use client";

import { useState } from "react";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex items-center overflow-hidden rounded border border-gray-200 bg-white pr-1.5"
    >
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full bg-transparent px-5 py-3 text-sm text-black outline-none placeholder:text-gray-400"
      />

      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          aria-label="Clear search"
          className="mr-1 flex h-8 w-8 items-center justify-center rounded text-gray-500 transition hover:bg-gray-100 hover:text-black"
        >
          <HiOutlineXMark className="h-5 w-5" />
        </button>
      )}

      <button
        type="submit"
        aria-label="Search"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-black text-white transition-colors hover:bg-coral"
      >
        <HiOutlineMagnifyingGlass className="h-4 w-4" />
      </button>
    </form>
  );
};
