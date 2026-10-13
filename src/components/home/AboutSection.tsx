import type { CSSProperties } from "react";
import { about } from "@/content/home";
import { BLOB_ROSE, Blob } from "@/components/ui/Blob";
import { Flower, Heart } from "@/components/ui/Doodles";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Tita's portrait in a soft hand-cut frame, taped to the page with a vine
 * that draws itself up its side. The story closes on a pinned note about
 * where the name comes from.
 */
export function AboutSection() {
  return (
    <section
      id="sobre-tita"
      aria-labelledby="sobre-tita-title"
      className="overflow-hidden py-16 md:py-section"
    >
      <div className="page-container grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            id="sobre-tita-title"
            eyebrow={about.eyebrow}
            title={about.title}
            size="feature"
          />
          <div className="mt-6 flex max-w-[30rem] flex-col gap-5 text-base leading-[1.7] text-ink-soft md:mt-8 md:text-[1.0625rem]">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Note />
        </Reveal>

        <Reveal
          delay={120}
          className="relative mx-auto w-full max-w-md px-[8%] py-[6%] sm:max-w-lg lg:col-span-5 lg:col-start-8 lg:max-w-none lg:px-0"
        >
          <Blob
            path={BLOB_ROSE}
            className="top-[12%] -right-[4%] h-[86%] w-[92%] rotate-6 text-sand/70 lg:top-[10%] lg:-right-[14%] lg:h-[96%] lg:w-[108%]"
          />

          <div className="relative">
            <Photo
              photo={about.photo}
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 28rem, 84vw"
              className="aspect-[4/5] rounded-[30%_38%_34%_42%/24%_28%_36%_32%]"
            />
            <Tape className="top-[3%] -right-[5%] w-24 rotate-[34deg] sm:w-28" />
            <Vine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** "Why Tita?" — a note pinned under the story. */
function Note() {
  return (
    <figure className="relative mt-12 max-w-[30rem] -rotate-1 bg-linen px-6 py-7 shadow-[0_18px_32px_-24px_rgba(38,35,31,0.4)] transition-transform duration-500 ease-(--ease-soft) sm:px-8 [@media(hover:hover)]:hover:rotate-0">
      <Tape className="-top-3 left-8 w-20 -rotate-[4deg]" />
      <div className="flex items-stretch gap-5 sm:gap-6">
        <Heart delay={500} weight={4} className="mt-1 w-9 shrink-0 self-start text-clay sm:w-10" />
        <span aria-hidden className="w-px shrink-0 bg-clay/30" />
        <blockquote>
          <p className="font-serif text-[1.375rem] leading-[1.25] text-ink italic sm:text-[1.5rem]">
            {about.note.lead}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{about.note.body}</p>
        </blockquote>
      </div>
    </figure>
  );
}

/** Masking tape strip, the same one that holds the editorial polaroid. */
function Tape({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-6 bg-blush/80 shadow-[0_1px_2px_rgba(38,35,31,0.08)] ${className}`}
    />
  );
}

/** A thread vine climbing the photo's left edge, blooming at the top. */
function Vine() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 90 300"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="thread pointer-events-none absolute top-[2%] -left-[13%] w-[26%] overflow-visible text-clay"
    >
      <path
        pathLength={1}
        d="M74 298C38 268 16 226 22 180 28 136 58 116 54 80 51 56 44 44 44 36"
      />
      <path pathLength={1} d="M24 156c-16-2-24-14-22-28 14 2 22 12 22 28Z" />
      <path
        pathLength={1}
        style={{ "--draw-delay": "900ms" } as CSSProperties}
        d="M53 98c10-12 24-14 30-4-10 10-22 10-30 4Z"
      />
      <Flower x={44} y={24} style={{ "--draw-delay": "1100ms" } as CSSProperties} />
    </svg>
  );
}
