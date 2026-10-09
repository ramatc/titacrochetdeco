import { hero } from "@/content/home";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="page-container pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:pb-6">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="display mt-6 text-[3.25rem] sm:text-[4.25rem] lg:text-[5.25rem]">
            {hero.title[0]}
            <br />
            <em className="italic">{hero.title[1]}</em>
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft md:text-[1.0625rem]">
            {hero.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="quiet">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-xs tracking-[0.03em] text-ink-soft">
            {["Hecho a mano", "Pedidos por Instagram", site.shipping].map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-clay" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <figure className="-mx-(--spacing-gutter) md:mx-0 lg:col-span-7">
          <Photo
            photo={hero.photo}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[6/7] lg:max-h-[46rem] lg:w-full"
          />
          <figcaption className="mt-3 px-(--spacing-gutter) text-xs text-ink-soft md:px-0">
            {hero.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
