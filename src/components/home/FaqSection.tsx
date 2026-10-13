import type { FaqItem } from "@/content/faq";
import { Reveal } from "@/components/ui/Reveal";

/** Plain, always-visible questions and answers (no accordion, no schema). */
export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="preguntas-frecuentes-title"
      className="page-container py-16 md:py-24"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2
            id="preguntas-frecuentes-title"
            className="display mt-6 text-[2.5rem] md:text-[3.5rem]"
          >
            Antes de pedir.
          </h2>
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
