import type { Product } from "@/types/catalog";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  /** Mix wide / square frames for a lookbook rhythm. */
  editorial?: boolean;
  showCategory?: boolean;
  /** Max columns on large screens. */
  columns?: 3 | 4;
  /** Mark the first N images as high priority (above the fold). */
  priorityCount?: number;
};

export function ProductGrid({
  products,
  editorial = true,
  showCategory = false,
  columns = 4,
  priorityCount = 0,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-ink-soft">
        Todavía no hay piezas en esta categoría. Escribinos y la tejemos a pedido.
      </p>
    );
  }

  const cols = columns === 4 ? "xl:grid-cols-4" : "";

  return (
    <ul
      className={`grid grid-flow-row-dense grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 md:gap-y-16 ${cols}`}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          editorial={editorial}
          showCategory={showCategory}
          priority={index < priorityCount}
        />
      ))}
    </ul>
  );
}
