import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getProducts } from "@/lib/catalog";
import { CatalogView } from "@/components/catalog/CatalogView";
import { CustomOrderSection } from "@/components/home/CustomOrderSection";
import { HowToOrder } from "@/components/home/HowToOrder";

export function generateStaticParams() {
  return getCategories().map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/catalogo/[categoria]">): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/catalogo/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps<"/catalogo/[categoria]">) {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) notFound();

  return (
    <>
      <CatalogView
        title={category.name}
        lead={category.description}
        products={getProducts(category.slug)}
        current={category}
      />
      {category.slug === "personalizados" ? <CustomOrderSection /> : <HowToOrder />}
    </>
  );
}
