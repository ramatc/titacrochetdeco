import { about } from "@/content/home";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section
      id="sobre-tita"
      aria-labelledby="sobre-tita-title"
      className="page-container py-16 md:py-28"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-6 md:pt-24">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="sobre-tita-title" className="display mt-6 max-w-lg text-[2.75rem] md:text-[4rem]">
            {about.title}
          </h2>
          <div className="mt-8 flex max-w-md flex-col gap-4 text-[0.9375rem] leading-relaxed text-ink-soft">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-5 md:col-start-8">
          <Photo
            photo={about.photo}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[3/4]"
          />
        </Reveal>
      </div>
    </section>
  );
}
