import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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

// URL data is read inside <Suspense> so navigations show the layout instantly.
export default function CategoryPage({ params }: PageProps<"/catalogo/[categoria]">) {
  return (
    <Suspense fallback={<div className="min-h-[80svh]" />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: { params: Promise<{ categoria: string }> }) {
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
