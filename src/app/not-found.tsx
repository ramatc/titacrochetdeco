import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { ButtonLink } from "@/components/ui/Button";

// Next marks not-found responses as noindex automatically.
export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[60svh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-6 text-[3rem] md:text-[4.5rem]">Este punto se nos escapó.</h1>
      <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
        La página que buscás no existe o cambió de lugar.
      </p>
      <ButtonLink href="/catalogo" className="mt-10">
        Ver catálogo
      </ButtonLink>
      <nav aria-label="Categorías" className="mt-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {getCategories().map((category) => (
            <li key={category.slug}>
              <Link href={`/catalogo/${category.slug}`} className="link-underline text-ink">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
