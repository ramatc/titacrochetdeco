/** Route-level loading state: a yarn ball that winds while the page arrives. */
export default function Loading() {
  return (
    <section
      role="status"
      aria-live="polite"
      className="loader page-container flex min-h-[60svh] flex-col items-center justify-center py-24 text-center"
    >
      <svg
        viewBox="0 0 120 80"
        className="h-20 w-30 text-ink"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <g className="loader-ball">
          <circle cx="40" cy="40" r="22" />
          <path d="M22 28c10 4 26 4 36 0" />
          <path d="M19 40c12 6 30 6 42 0" />
          <path d="M23 53c9-4 25-4 34 0" />
          <path d="M32 19c-6 12-6 30 0 42" />
        </g>
        <path
          className="loader-thread text-clay"
          stroke="currentColor"
          d="M62 44c8 6 14 10 22 6s8-14 16-12 8 12 14 14"
        />
      </svg>
      <p className="display mt-8 text-[1.75rem] md:text-[2rem]">Tejiendo la página…</p>
      <p className="mt-3 text-sm text-ink-soft">Un puntito más y ya está.</p>
    </section>
  );
}
