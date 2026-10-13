import type { CSSProperties } from "react";
import { editorial } from "@/content/home";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { BLOB_ROSE, BLOB_SAGE, Blob } from "@/components/ui/Blob";
import { Flower } from "@/components/ui/Doodles";

/**
 * A scrapbook composition: the main photo framed by soft yarn-colored blobs,
 * a taped polaroid on top, and a thread that stitches itself into a flower.
 */
export function EditorialSection() {
  return (
    <section
      aria-labelledby="editorial-title"
      className="my-8 overflow-hidden bg-linen py-16 md:my-16 md:py-24 lg:py-28"
    >
      <div className="page-container grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="relative pb-14 sm:pb-20 lg:col-span-7 lg:pb-16">
          <Blob
            path={BLOB_SAGE}
            className="-top-6 -left-6 aspect-square w-[40%] text-sage sm:-top-10 sm:-left-10"
          />
          <Blob
            path={BLOB_ROSE}
            className="bottom-4 -left-8 aspect-square w-[34%] text-blush sm:-left-12"
          />

          <Reveal className="relative ml-[4%] w-[82%] sm:w-[80%]">
            <Photo
              photo={editorial.photo}
              sizes="(min-width: 1024px) 46vw, 82vw"
              className="aspect-[6/7]"
            />
          </Reveal>

          <Reveal delay={160} className="absolute right-0 bottom-0 w-[42%] sm:w-[36%] lg:-right-4">
            <Polaroid />
          </Reveal>
        </div>

        <Reveal delay={80} className="lg:col-span-5 lg:pl-4 xl:pl-10">
          <p className="eyebrow">{editorial.eyebrow}</p>
          <h2
            id="editorial-title"
            className="display mt-6 text-[3rem] md:text-[4.25rem] xl:text-[4.75rem]"
          >
            {editorial.title}
          </h2>
          <span aria-hidden className="mt-8 block h-px w-12 bg-clay" />
          <div className="mt-8 flex max-w-[30rem] flex-col gap-5 text-base leading-[1.7] text-ink-soft md:text-[1.0625rem]">
            {editorial.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Thread className="mt-10 w-60 sm:w-72 lg:-ml-32 lg:w-96" />
        </Reveal>
      </div>
    </section>
  );
}

function Polaroid() {
  return (
    <div className="relative rotate-[4deg] bg-cream p-2.5 pb-9 shadow-[0_22px_40px_-20px_rgba(38,35,31,0.45),0_2px_6px_rgba(38,35,31,0.08)] transition-transform duration-500 ease-(--ease-soft) sm:p-3 sm:pb-12 [@media(hover:hover)]:hover:rotate-[1.5deg]">
      {/* Masking tape holding the print to the page. */}
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-[5deg] bg-line-strong/55 shadow-[0_1px_2px_rgba(38,35,31,0.08)] sm:w-24"
      />
      <Photo
        photo={editorial.secondaryPhoto}
        sizes="(min-width: 1024px) 20vw, 44vw"
        className="aspect-[4/5]"
      />
    </div>
  );
}

/** Hand-drawn thread ending in a flower; strokes draw in once on reveal. */
function Thread({ className }: { className: string }) {
  const bloom = { "--draw-delay": "1100ms" } as CSSProperties;

  return (
    <svg
      aria-hidden
      viewBox="0 0 320 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`thread text-clay ${className}`}
    >
      <path
        pathLength={1}
        d="M2 92c26-22 58-34 92-22 30 11 48 36 86 34 40-2 62-30 82-58 6-9 12-18 18-24"
      />
      <path pathLength={1} style={bloom} d="M262 44c-16-6-28 2-30 16 14 3 26-3 30-16Z" />
      <Flower x={290} y={22} style={bloom} />
    </svg>
  );
}
