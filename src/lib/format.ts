import type { Product } from "@/types/catalog";

const ars = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function formatPrice(product: Pick<Product, "price" | "priceFrom">): string {
  if (product.price === null) return "Consultar precio";
  const amount = ars.format(product.price);
  return product.priceFrom ? `Desde ${amount}` : amount;
}
