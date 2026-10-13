import type { Metadata } from "next";
import { getProducts } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionSchema, jsonLdGraph } from "@/lib/structured-data";
import { CatalogView } from "@/components/catalog/CatalogView";
import { HowToOrder } from "@/components/home/HowToOrder";
import { JsonLd } from "@/components/seo/JsonLd";

const title = "Catálogo de crochet: flores, amigurumis y regalos";
const description =
  "Todas las piezas de Tita Crochet: ramos y flores tejidas, amigurumis, crochet para bebés, combos con taza y regalos personalizados, hechos a mano en Buenos Aires.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/catalogo" });

const breadcrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/catalogo" },
];

export default function CatalogPage() {
  const products = getProducts();

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          collectionSchema({ name: "Catálogo de Tita Crochet", description, path: "/catalogo", products }),
          breadcrumbSchema(breadcrumbs),
        )}
      />
      <CatalogView
        title="El catálogo de Tita"
        lead="Ramos y flores tejidas, amigurumis, piezas para bebés, combos con taza y personalizados. Los precios son de referencia: cada pieza se teje a mano y se confirma por mensaje en Instagram."
        products={products}
        breadcrumbs={breadcrumbs}
      />
      <HowToOrder />
    </>
  );
}
