export function pillClasses(active: boolean) {
  const state = active
    ? "border-ink bg-ink text-cream"
    : "border-line-strong text-ink hover:border-ink";
  return `inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-[0.8125rem] tracking-[0.02em] transition-colors duration-300 ease-(--ease-soft) ${state}`;
}
