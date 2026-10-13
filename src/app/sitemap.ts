import type { MetadataRoute } from "next";
import { hero } from "@/content/home";
import { getCategories, getProducts } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site-url";

/*
 * Every indexable page with its images. `lastModified` is omitted on
 * purpose: the catalog has no reliable per-page modification date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const imageUrls = (sources: (string | undefined)[]) =>
    sources.flatMap((src) => (src ? [absoluteUrl(src)] : []));

  return [
    { url: absoluteUrl("/"), images: imageUrls([hero.photo.src]) },
    { url: absoluteUrl("/catalogo") },
    ...getCategories().map((category) => ({
      url: absoluteUrl(`/catalogo/${category.slug}`),
      images: imageUrls([category.cover.src]),
    })),
    ...getProducts().map((product) => ({
      url: absoluteUrl(`/productos/${product.slug}`),
      images: imageUrls(product.images.map((image) => image.src)),
    })),
  ];
}
