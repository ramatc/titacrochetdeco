import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/content/site";
import { getCategory, getProduct, getRelatedProducts } from "@/lib/catalog";
import { pageMetadata, productMetaDescription } from "@/lib/seo";
import { breadcrumbSchema, jsonLdGraph, productSchema } from "@/lib/structured-data";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/productos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return pageMetadata({
    title: product.headline,
    description: productMetaDescription(product.description),
    path: `/productos/${product.slug}`,
    image: product.images[0],
  });
}

// URL data is read inside <Suspense> so navigations show the layout instantly.
export default function ProductPage({ params }: PageProps<"/productos/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-[80svh]" />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const category = getCategory(product.category);
  const path = `/productos/${product.slug}`;
  const breadcrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Catálogo", path: "/catalogo" },
    ...(category ? [{ name: category.name, path: `/catalogo/${category.slug}` }] : []),
    { name: product.name, path },
  ];

  return (
    <>
      <JsonLd data={jsonLdGraph(productSchema(product, category), breadcrumbSchema(breadcrumbs))} />

      <article className="page-container pb-16 pt-6 md:pb-20 md:pt-10">
        <Breadcrumbs items={breadcrumbs} className="mb-6 md:mb-10" />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} name={product.name} />
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>

        {category ? (
          <section
            aria-labelledby="sobre-esta-pieza-title"
            className="mt-16 grid gap-6 border-t border-line pt-12 md:mt-24 md:grid-cols-12 md:gap-10"
          >
            <h2
              id="sobre-esta-pieza-title"
              className="display text-[1.75rem] md:col-span-4 md:text-[2.25rem]"
            >
              Sobre esta pieza
            </h2>
            <div className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft md:col-span-7 md:col-start-6">
              <p>{category.productNote}</p>
              <p className="mt-4">
                Hecha a mano en {site.location}. Enviamos a todo Argentina y coordinamos cada pedido
                por Instagram.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <li>
                  <Link href={`/catalogo/${category.slug}`} className="link-inline text-ink">
                    Ver más de {category.name}
                  </Link>
                </li>
                {category.slug !== "personalizados" ? (
                  <li>
                    <Link href="/catalogo/personalizados" className="link-inline text-ink">
                      Pedir una pieza personalizada
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </section>
        ) : null}
      </article>

      <section aria-labelledby="relacionados-title" className="page-container border-t border-line py-16 md:py-section">
        <SectionHeading id="relacionados-title" title="También te puede gustar" />
        <div className="mt-10">
          <ProductGrid products={related} editorial={false} showCategory />
        </div>
      </section>
    </>
  );
}
