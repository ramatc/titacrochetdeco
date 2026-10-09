import type { Metadata } from "next";
import { getProducts } from "@/lib/catalog";
import { CatalogView } from "@/components/catalog/CatalogView";
import { HowToOrder } from "@/components/home/HowToOrder";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Todas las piezas de Tita Crochet: ramos, flores, amigurumis, deco y personalizados, tejidos a mano.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogPage() {
  return (
    <>
      <CatalogView
        title="El catálogo"
        lead="Precios de referencia. Cada pieza se teje a mano y se confirma por mensaje en Instagram."
        products={getProducts()}
      />
      <HowToOrder />
    </>
  );
}
