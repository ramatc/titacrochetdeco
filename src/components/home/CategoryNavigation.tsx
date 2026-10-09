import Link from "next/link";
import { categoriesSection } from "@/content/home";
import { getCategories, getProducts } from "@/lib/catalog";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

/** Arch-topped photo crops: soft and organic, without card chrome. */
export function CategoryNavigation() {
  const categories = getCategories();

  return (
    <section aria-labelledby="categorias-title" className="py-16 md:py-24">
      <div className="page-container">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 id="categorias-title" className="display text-[2.5rem] md:text-[3.5rem]">
            {categoriesSection.title}
          </h2>
          <p className="text-[0.9375rem] text-ink-soft">{categoriesSection.lead}</p>
        </div>
      </div>

      <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-(--spacing-gutter) scroll-px-(--spacing-gutter) md:mx-auto md:mt-14 md:grid md:max-w-(--container-page) md:grid-cols-5 md:gap-6 md:overflow-visible md:px-10 xl:px-14">
        {categories.map((category, index) => (
          <Reveal
            as="li"
            key={category.slug}
            delay={index * 60}
            className="w-[42%] shrink-0 snap-start sm:w-[30%] md:w-auto"
          >
            <Link href={`/catalogo/${category.slug}`} className="group block">
              <Photo
                photo={category.cover}
                sizes="(min-width: 768px) 20vw, 42vw"
                className="aspect-[3/4] rounded-t-full"
                zoomOnHover
              />
              <span className="mt-4 flex items-baseline justify-between gap-2">
                <span className="display text-[1.5rem] md:text-[1.75rem]">{category.name}</span>
                <span className="text-xs tabular-nums text-ink-soft">
                  {getProducts(category.slug).length}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
