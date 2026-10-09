import { editorial } from "@/content/home";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

/** Breaks the grid: a large texture photo bleeding to the left edge. */
export function EditorialSection() {
  return (
    <section aria-labelledby="editorial-title" className="my-8 bg-linen md:my-16">
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Photo
            photo={editorial.photo}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto lg:h-full lg:min-h-[44rem]"
          />
        </div>

        <div className="flex flex-col justify-between gap-12 px-(--spacing-gutter) py-16 md:px-10 lg:col-span-5 lg:px-14 lg:py-20">
          <Reveal>
            <p className="eyebrow">{editorial.eyebrow}</p>
            <h2
              id="editorial-title"
              className="display mt-6 text-[3rem] md:text-[4.25rem]"
            >
              {editorial.title}
            </h2>
            <div className="mt-8 flex max-w-md flex-col gap-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              {editorial.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="w-1/2 self-end sm:w-2/5">
            <Photo
              photo={editorial.secondaryPhoto}
              sizes="(min-width: 1024px) 16vw, 45vw"
              className="aspect-square"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
