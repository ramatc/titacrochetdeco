import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getCategories, getProducts } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/catalogo",
    ...getCategories().map((c) => `/catalogo/${c.slug}`),
    ...getProducts().map((p) => `/productos/${p.slug}`),
  ];

  return routes.map((route) => ({ url: `${site.url}${route}` }));
}
