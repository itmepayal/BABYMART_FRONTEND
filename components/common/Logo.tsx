export const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-2 font-heading font-bold shrink-0"
      aria-label="KidXtore"
    >
      <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 64 64">
        <circle cx="32" cy="28" r="14" fill="var(--sun)" />
        <circle cx="20" cy="16" r="6" fill="var(--sun)" />
        <circle cx="44" cy="16" r="6" fill="var(--sun)" />

        <circle cx="27" cy="26" r="2.2" fill="var(--ink)" />
        <circle cx="37" cy="26" r="2.2" fill="var(--ink)" />

        <path
          d="M27 33q5 4 10 0"
          stroke="var(--ink)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <ellipse cx="32" cy="48" rx="16" ry="12" fill="var(--coral)" />
      </svg>

      <span
        className="text-2xl sm:text-4xl font-extrabold tracking-tight"
        style={{ color: "var(--teal)" }}
      >
        Kid
      </span>

      <span
        className="text-2xl sm:text-4xl font-extrabold tracking-tight"
        style={{ color: "var(--coral)" }}
      >
        Xtore
      </span>
    </a>
  );
};
