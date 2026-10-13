import { customSection } from "@/content/home";
import { InquiryButton } from "@/components/InquiryButton";
import { BLOB_ROSE, BLOB_SAGE, Blob } from "@/components/ui/Blob";
import { Heart, Sparkles } from "@/components/ui/Doodles";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The photo sits on a soft hand-cut backdrop, marked with a couple of
 * hand-drawn doodles: a burst of sparkle strokes and a looped heart.
 */
export function CustomOrderSection() {
  return (
    <section
      id="personalizados"
      aria-labelledby="personalizados-title"
      className="overflow-hidden py-16 md:py-28"
    >
      <div className="page-container grid items-center gap-16 md:grid-cols-12 md:gap-10">
        <Reveal className="relative px-[6%] py-[8%] md:col-span-6 md:col-start-1 lg:col-span-5 lg:col-start-2 lg:p-0">
          <Blob
            path={BLOB_ROSE}
            className="top-[10%] -left-[2%] h-[92%] w-[96%] -rotate-6 text-sand/70 lg:top-[6%] lg:-left-[22%] lg:h-[108%] lg:w-[112%]"
          />
          <Blob
            path={BLOB_SAGE}
            className="-top-[2%] right-[2%] aspect-square w-[30%] text-blush/70 lg:-top-[8%] lg:-right-[10%]"
          />

          <div className="relative">
            <Photo
              photo={customSection.photo}
              sizes="(min-width: 1024px) 36vw, (min-width: 768px) 46vw, 88vw"
              className="aspect-[4/5]"
            />
            <Sparkles className="absolute text-moss/45 -top-8 -left-7 w-12 sm:-top-10 sm:-left-12 sm:w-16" />
            <Heart
              delay={700}
              className="absolute -right-6 -bottom-12 w-20 text-clay sm:-right-12 sm:-bottom-14 sm:w-24"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-6 md:col-start-7">
          <p className="eyebrow">{customSection.eyebrow}</p>
          <h2
            id="personalizados-title"
            className="display mt-6 text-[2.75rem] text-balance lg:text-[4rem] xl:text-[4.5rem]"
          >
            {customSection.title}
          </h2>
          <p className="mt-6 max-w-[28rem] text-base leading-[1.7] text-ink-soft md:mt-8 md:text-[1.0625rem]">
            {customSection.body}
          </p>
          <InquiryButton message={customSection.message} className="mt-10">
            {customSection.cta}
          </InquiryButton>
        </Reveal>
      </div>
    </section>
  );
}
