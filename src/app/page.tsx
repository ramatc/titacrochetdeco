import { getCategories, getProducts } from "@/lib/catalog";
import { Hero } from "@/components/home/Hero";
import { CategoryNavigation } from "@/components/home/CategoryNavigation";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { EditorialSection } from "@/components/home/EditorialSection";
import { CatalogSection } from "@/components/home/CatalogSection";
import { CustomOrderSection } from "@/components/home/CustomOrderSection";
import { HowToOrder } from "@/components/home/HowToOrder";
import { AboutSection } from "@/components/home/AboutSection";
import { InstagramSection } from "@/components/home/InstagramSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryNavigation />
      <FeaturedProducts />
      <EditorialSection />
      <CatalogSection products={getProducts()} categories={getCategories()} />
      <CustomOrderSection />
      <HowToOrder />
      <AboutSection />
      <InstagramSection />
    </>
  );
}
