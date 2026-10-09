import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/content/site";
import { getCategory, getProduct, getRelatedProducts } from "@/lib/catalog";
import { products } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductGrid } from "@/components/product/ProductGrid";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/productos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const cover = product.images[0];
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/productos/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: product.description,
      url: `/productos/${product.slug}`,
      ...(cover.src ? { images: [{ url: cover.src, alt: cover.alt }] } : {}),
    },
  };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: category?.name,
    brand: { "@type": "Brand", name: site.name },
    url: `${site.url}/productos/${product.slug}`,
    ...(product.images[0].src ? { image: `${site.url}${product.images[0].src}` } : {}),
    ...(product.price !== null
      ? { offers: { "@type": "Offer", price: product.price, priceCurrency: "ARS" } }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static data authored in this repo; escape "<" to keep the script inert.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <article className="page-container pb-20 pt-6 md:pt-12">
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
      </article>

      <section aria-labelledby="relacionados-title" className="page-container border-t border-line py-16 md:py-24">
        <h2 id="relacionados-title" className="display text-[2.25rem] md:text-[3rem]">
          También te puede gustar
        </h2>
        <div className="mt-10">
          <ProductGrid products={related} editorial={false} showCategory />
        </div>
      </section>
    </>
  );
}
