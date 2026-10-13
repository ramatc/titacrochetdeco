import Link from "next/link";
import type { Category } from "@/types/catalog";

/**
 * Short editorial copy after the product grid: what the category is, who it
 * is for and how to order. Quiet typography so the catalog stays the focus.
 */
export function CategoryEditorial({ category }: { category: Category }) {
  const isCustom = category.slug === "personalizados";

  return (
    <section
      aria-label={`Sobre ${category.name}`}
      className="page-container border-t border-line py-16 md:py-section"
    >
      {category.quote && (
        <figure className="mb-16 max-w-2xl">
          <blockquote className="display text-[1.5rem] italic leading-snug text-ink md:text-[1.875rem]">
            “{category.quote.text}”
          </blockquote>
          {category.quote.author && (
            <figcaption className="mt-3 text-sm text-ink-soft">— {category.quote.author}</figcaption>
          )}
        </figure>
      )}

      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {category.editorial.map((block) => (
          <div key={block.title}>
            <h2 className="display text-[1.75rem] md:text-[2rem]">{block.title}</h2>
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-ink-soft">
        {isCustom ? (
          <>
            ¿Buscás inspiración? Mirá los{" "}
            <Link href="/catalogo/amigurumis" className="link-inline text-ink">
              amigurumis
            </Link>{" "}
            y los{" "}
            <Link href="/catalogo/ramos-y-flores" className="link-inline text-ink">
              ramos y flores
            </Link>{" "}
            del catálogo.
          </>
        ) : (
          <>
            ¿No encontrás lo que buscás? Mirá las{" "}
            <Link href="/catalogo/personalizados" className="link-inline text-ink">
              piezas personalizadas
            </Link>{" "}
            o recorré el{" "}
            <Link href="/catalogo" className="link-inline text-ink">
              catálogo completo
            </Link>
            .
          </>
        )}
      </p>
    </section>
  );
}
