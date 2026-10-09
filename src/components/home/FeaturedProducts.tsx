import { ArrowRight } from "lucide-react";
import { featuredSection } from "@/content/home";
import { getFeaturedProducts } from "@/lib/catalog";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/product/ProductGrid";

export function FeaturedProducts() {
  return (
    <section aria-labelledby="favoritos-title" className="page-container py-16 md:py-24">
      <SectionHeading
        id="favoritos-title"
        eyebrow={featuredSection.eyebrow}
        title={featuredSection.title}
        aside={
          <ButtonLink href={featuredSection.cta.href} variant="quiet">
            {featuredSection.cta.label}
            <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </ButtonLink>
        }
      />
      <Reveal className="mt-12 md:mt-16">
        <ProductGrid products={getFeaturedProducts()} showCategory />
      </Reveal>
    </section>
  );
}
