"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { catalogSection } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { pillClasses } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Category, CategorySlug, Product } from "@/types/catalog";

type CatalogSectionProps = {
  products: Product[];
  categories: Category[];
  /** How many pieces to preview before linking to the full catalog. */
  limit?: number;
};

/** In-page catalog preview with client-side category filter. */
export function CatalogSection({ products, categories, limit = 8 }: CatalogSectionProps) {
  const [active, setActive] = useState<CategorySlug | null>(null);
  const filtered = active ? products.filter((p) => p.category === active) : products;
  const visible = filtered.slice(0, limit);

  const filters: { slug: CategorySlug | null; label: string }[] = [
    { slug: null, label: catalogSection.allLabel },
    ...categories.map((c) => ({ slug: c.slug, label: c.name })),
  ];

  return (
    <section id="catalogo" aria-labelledby="catalogo-title" className="page-container py-16 md:py-24">
      <SectionHeading id="catalogo-title" title={catalogSection.title} lead={catalogSection.lead} />

      <div
        role="group"
        aria-label="Filtrar por categoría"
        className="no-scrollbar -mx-(--spacing-gutter) mt-10 flex gap-2 overflow-x-auto px-(--spacing-gutter) md:mx-0 md:flex-wrap md:px-0"
      >
        {filters.map((filter) => {
          const isActive = active === filter.slug;
          return (
            <button
              key={filter.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter.slug)}
              className={pillClasses(isActive)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12" aria-live="polite">
        <ProductGrid products={visible} editorial={false} />
      </div>

      <div className="mt-16 flex justify-center">
        <ButtonLink
          href={active ? `/catalogo/${active}` : catalogSection.cta.href}
          variant="secondary"
        >
          {catalogSection.cta.label}
          <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  );
}
