import type { FaqItem } from "@/content/faq";
import { faqSection } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Plain, always-visible questions and answers (no accordion, no schema). */
export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="preguntas-frecuentes-title"
      className="page-container py-16 md:py-section"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <SectionHeading
            id="preguntas-frecuentes-title"
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
          />
        </div>

        <Reveal className="md:col-span-7 md:col-start-6">
          <ul className="border-t border-line">
            {items.map((item) => (
              <li key={item.id} className="border-b border-line py-6">
                <h3 className="text-[1.0625rem] leading-snug text-ink">{item.question}</h3>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
