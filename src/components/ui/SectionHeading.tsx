import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Right-aligned slot on desktop, e.g. a "see all" link. */
  aside?: ReactNode;
};

export function SectionHeading({ id, eyebrow, title, lead, aside }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-xl">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h2 id={id} className="display text-[2.5rem] md:text-[3.5rem]">
          {title}
        </h2>
        {lead ? <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{lead}</p> : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
