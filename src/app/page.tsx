import type { Metadata } from "next";
import { faqItems } from "@/content/faq";
import { site } from "@/content/site";
import { getCategories, getProducts } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";
import { jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/structured-data";
import { Hero } from "@/components/home/Hero";
import { CategoryNavigation } from "@/components/home/CategoryNavigation";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { EditorialSection } from "@/components/home/EditorialSection";
import { CatalogSection } from "@/components/home/CatalogSection";
import { CustomOrderSection } from "@/components/home/CustomOrderSection";
import { HowToOrder } from "@/components/home/HowToOrder";
import { AboutSection } from "@/components/home/AboutSection";
import { FaqSection } from "@/components/home/FaqSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { JsonLd } from "@/components/seo/JsonLd";

// No `image`: the home page uses the brand card from app/opengraph-image.tsx.
export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLdGraph(organizationSchema(), websiteSchema())} />
      <Hero />
      <CategoryNavigation />
      <FeaturedProducts />
      <EditorialSection />
      <CatalogSection products={getProducts()} categories={getCategories()} />
      <CustomOrderSection />
      <HowToOrder />
      <AboutSection />
      <FaqSection items={faqItems} />
      <InstagramSection />
    </>
  );
}
