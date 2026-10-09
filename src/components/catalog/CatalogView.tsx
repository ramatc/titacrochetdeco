import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { pillClasses } from "@/components/ui/Pill";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Category, Product } from "@/types/catalog";

type CatalogViewProps = {
  title: string;
  lead: string;
  products: Product[];
  /** Currently selected category; undefined means "Todos". */
  current?: Category;
};

/**
 * Full catalog layout used by /catalogo and /catalogo/[categoria].
 * Filters are plain links, so every category view is static and shareable.
 */
export function CatalogView({ title, lead, products, current }: CatalogViewProps) {
  const filters = [
    { href: "/catalogo", label: "Todos", active: !current },
    ...getCategories().map((c) => ({
      href: `/catalogo/${c.slug}`,
      label: c.name,
      active: current?.slug === c.slug,
    })),
  ];

  return (
    <div className="page-container pb-24 pt-12 md:pt-20">
      <header className="max-w-2xl">
        <p className="eyebrow">Catálogo</p>
        <h1 className="display mt-6 text-[3.25rem] md:text-[5rem]">{title}</h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">{lead}</p>
      </header>

      <nav
        aria-label="Categorías"
        className="no-scrollbar -mx-(--spacing-gutter) mt-10 overflow-x-auto px-(--spacing-gutter) md:mx-0 md:px-0"
      >
        <ul className="flex gap-2 md:flex-wrap">
          {filters.map((filter) => (
            <li key={filter.href} className="shrink-0">
              <Link
                href={filter.href}
                aria-current={filter.active ? "page" : undefined}
                className={pillClasses(filter.active)}
              >
                {filter.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-10 text-xs tabular-nums text-ink-soft">
        {products.length} {products.length === 1 ? "pieza" : "piezas"}
      </p>

      <div className="mt-6">
        <ProductGrid products={products} showCategory={!current} priorityCount={4} />
      </div>
    </div>
  );
}
