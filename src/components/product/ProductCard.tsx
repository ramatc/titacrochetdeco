import Link from "next/link";
import { getCategory } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { Photo } from "@/components/ui/Photo";
import type { Product } from "@/types/catalog";

type ProductCardProps = {
  product: Product;
  /** Honour the product's editorial `cardFormat` (wide / square). */
  editorial?: boolean;
  showCategory?: boolean;
  priority?: boolean;
};

const frames = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[4/3] md:aspect-[8/5]",
} as const;

export function ProductCard({
  product,
  editorial = true,
  showCategory = false,
  priority = false,
}: ProductCardProps) {
  const format = editorial ? (product.cardFormat ?? "portrait") : "portrait";
  const isWide = format === "wide";
  const sizes = isWide
    ? "(min-width: 1280px) 50vw, (min-width: 768px) 66vw, 100vw"
    : "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw";

  return (
    <li className={isWide ? "col-span-2" : undefined}>
      <Link href={`/productos/${product.slug}`} className="group block">
        <div className="relative">
          <Photo
            photo={product.images[0]}
            className={frames[format]}
            sizes={sizes}
            priority={priority}
            zoomOnHover
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 right-3 hidden rounded-full bg-cream px-3 py-1.5 text-xs tracking-[0.03em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block"
          >
            Ver detalle
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {showCategory ? (
            <span className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
              {getCategory(product.category)?.name}
            </span>
          ) : null}
          <h3 className="text-[0.9375rem] leading-snug text-ink">{product.name}</h3>
          <p className="text-sm tabular-nums text-ink-soft">{formatPrice(product)}</p>
        </div>
      </Link>
    </li>
  );
}
