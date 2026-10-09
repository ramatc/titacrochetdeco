import { howToOrder } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

export function HowToOrder() {
  return (
    <section
      id="como-pedir"
      aria-labelledby="como-pedir-title"
      className="border-y border-line bg-linen py-16 md:py-24"
    >
      <div className="page-container">
        <p className="eyebrow">{howToOrder.eyebrow}</p>
        <h2 id="como-pedir-title" className="display mt-6 text-[2.5rem] md:text-[3.5rem]">
          {howToOrder.title}
        </h2>

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
