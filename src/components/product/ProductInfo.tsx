import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCategory } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { productInquiryMessage } from "@/lib/inquiry";
import { InquiryButton } from "@/components/InquiryButton";
import { ButtonLink } from "@/components/ui/Button";
import type { Product } from "@/types/catalog";

export function ProductInfo({ product }: { product: Product }) {
  const category = getCategory(product.category);

  const details = [
    { term: "Hecho", value: "Tejido a mano al crochet" },
    product.dimensions && { term: "Medidas", value: product.dimensions },
    product.colors && { term: "Colores", value: product.colors },
    {
      term: "Entrega",
      value: product.madeToOrder
        ? "Realizado por encargo — coordinamos los tiempos por mensaje"
        : "Consultá disponibilidad por mensaje",
    },
  ].filter(Boolean) as { term: string; value: string }[];

  return (
    <div className="flex flex-col">
      {category ? (
        <Link href={`/catalogo/${category.slug}`} className="eyebrow link-underline self-start">
          {category.name}
        </Link>
      ) : null}

      <h1 className="display mt-4 text-[2.5rem] md:text-[3.25rem]">{product.headline}</h1>
      <p className="mt-4 text-lg tabular-nums text-ink">{formatPrice(product)}</p>

      <p className="mt-8 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
        {product.description}
      </p>

      {product.quote && (
        <figure className="mt-8 max-w-md border-l border-line pl-5">
          <blockquote className="display text-[1.125rem] italic leading-snug text-ink">
            “{product.quote.text}”
          </blockquote>
          {product.quote.author && (
            <figcaption className="mt-2 text-sm text-ink-soft">— {product.quote.author}</figcaption>
          )}
        </figure>
      )}

      <dl className="mt-10 border-t border-line">
        {details.map((detail) => (
          <div
            key={detail.term}
            className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-4 text-sm"
          >
            <dt className="text-ink-soft">{detail.term}</dt>
            <dd className="text-ink">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-xs leading-relaxed text-ink-soft">
        Al ser una pieza artesanal, puede tener pequeñas variaciones respecto de la foto.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start">
        <InquiryButton message={productInquiryMessage(product)}>
          Consultar este producto
        </InquiryButton>
        <ButtonLink href="/catalogo" variant="secondary" className="w-full sm:w-auto">
          <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
          Ver más productos
        </ButtonLink>
      </div>
    </div>
  );
}
