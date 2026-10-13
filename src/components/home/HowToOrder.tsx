import { howToOrder } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowToOrder() {
  return (
    <section
      id="como-pedir"
      aria-labelledby="como-pedir-title"
      className="border-y border-line bg-linen py-16 md:py-section"
    >
      <div className="page-container">
        <SectionHeading id="como-pedir-title" eyebrow={howToOrder.eyebrow} title={howToOrder.title} />

        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {howToOrder.steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 100} className="border-t border-ink/20 pt-6">
              <span aria-hidden="true" className="display block text-[4rem] leading-none text-clay md:text-[5rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-[1.75rem]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
