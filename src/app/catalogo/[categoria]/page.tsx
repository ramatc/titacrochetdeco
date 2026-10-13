import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { customFaqIds, faqItems } from "@/content/faq";
import { getCategories, getCategory, getProducts } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionSchema, jsonLdGraph } from "@/lib/structured-data";
import { CatalogView } from "@/components/catalog/CatalogView";
import { CategoryEditorial } from "@/components/catalog/CategoryEditorial";
import { CustomOrderSection } from "@/components/home/CustomOrderSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HowToOrder } from "@/components/home/HowToOrder";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getCategories().map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/catalogo/[categoria]">): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) return {};

  return pageMetadata({
    title: category.metaTitle,
    description: category.description,
    path: `/catalogo/${category.slug}`,
    image: category.cover,
  });
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

  const path = `/catalogo/${category.slug}`;
  const products = getProducts(category.slug);
  const breadcrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Catálogo", path: "/catalogo" },
    { name: category.name, path },
  ];
  const isCustom = category.slug === "personalizados";

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          collectionSchema({ name: category.heading, description: category.description, path, products }),
          breadcrumbSchema(breadcrumbs),
        )}
      />
      <CatalogView
        title={category.heading}
        lead={category.intro}
        products={products}
        breadcrumbs={breadcrumbs}
        current={category}
      />
      <CategoryEditorial category={category} />
      {isCustom ? (
        <>
          <FaqSection items={faqItems.filter((item) => customFaqIds.includes(item.id))} />
          <CustomOrderSection />
        </>
      ) : (
        <HowToOrder />
      )}
    </>
  );
}
