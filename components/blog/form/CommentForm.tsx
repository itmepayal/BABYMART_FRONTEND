"use client";

import { useState, type FormEvent } from "react";

export const CommentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (
      e.currentTarget.elements.namedItem("are_you_human") as HTMLInputElement
    )?.value;
    if (honeypot) return;
    setSubmitted(true);
  };

  return (
    <section className="flex flex-col gap-4 border-t border-gray-200 pt-6">
      <h2 className="text-xl font-semibold text-gray-900">Leave A Comment</h2>

      <label className="flex items-center gap-2 text-sm text-gray-500">
        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        Save my name, email, and website in this browser for the next time I
        comment.
      </label>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="hidden">
          <label htmlFor="are_you_human">Are you human?</label>
          <input
            id="are_you_human"
            name="are_you_human"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <textarea
          required
          placeholder="* Comment"
          rows={5}
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            required
            type="text"
            placeholder="* Name"
            className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
          <input
            required
            type="email"
            placeholder="* Email"
            className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </div>

        <input
          type="url"
          placeholder="Web Site"
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />

        <button
          type="submit"
          className="w-fit rounded bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Post Comment
        </button>

        {submitted && (
          <p className="text-sm text-green-600">
            Thanks! Your comment has been submitted.
          </p>
        )}
      </form>
    </section>
  );
};
