import { customSection } from "@/content/home";
import { InquiryButton } from "@/components/InquiryButton";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export function CustomOrderSection() {
  return (
    <section
      id="personalizados"
      aria-labelledby="personalizados-title"
      className="page-container py-16 md:py-28"
    >
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5 md:col-start-2">
          <Photo
            photo={customSection.photo}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[4/5]"
          />
        </Reveal>

        <Reveal delay={100} className="md:col-span-5 md:col-start-8">
          <p className="eyebrow">{customSection.eyebrow}</p>
          <h2
            id="personalizados-title"
            className="display mt-6 text-[2.75rem] md:text-[4rem]"
          >
            {customSection.title}
          </h2>
          <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
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
