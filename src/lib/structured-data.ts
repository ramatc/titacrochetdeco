import { instagram, site } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";
import type { Category, Product } from "@/types/catalog";

/*
 * schema.org JSON-LD builders. Only facts already published on the site:
 * no ratings, reviews, stock, SKUs or exact address.
 */

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export type BreadcrumbItem = { name: string; path: string };

/** Brand entity, rendered once on the home page. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    description: site.about,
    sameAs: [instagram.profileUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "Country", name: site.address.countryName },
    knowsAbout: ["Crochet", "Amigurumi", "Flores tejidas a crochet", "Regalos personalizados"],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Category or full-catalog listing page. */
export function collectionSchema({
  name,
  description,
  path,
  products,
}: {
  name: string;
  description: string;
  path: string;
  products: Product[];
}) {
  return {
    "@type": "CollectionPage",
    "@id": absoluteUrl(`${path}#collection`),
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: site.language,
    isPartOf: { "@id": websiteId },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/productos/${product.slug}`),
        name: product.name,
      })),
    },
  };
}

/**
 * Product schema. Catalog prices are published reference prices, so they
 * are exposed as an Offer (or AggregateOffer for "Desde" prices) matching
 * the visible price. Products without a price get no offer at all, and
 * availability is never declared because stock is confirmed per order.
 */
export function productSchema(product: Product, category: Category | undefined) {
  const url = absoluteUrl(`/productos/${product.slug}`);
  const images = product.images.flatMap((image) => (image.src ? [absoluteUrl(image.src)] : []));

  let offers: Record<string, unknown> | undefined;
  if (product.price !== null) {
    offers = product.priceFrom
      ? {
          "@type": "AggregateOffer",
          lowPrice: product.price,
          priceCurrency: "ARS",
          url,
        }
      : {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "ARS",
          url,
          itemCondition: "https://schema.org/NewCondition",
        };
  }

  return {
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.headline,
    alternateName: product.name,
    description: product.description,
    url,
    ...(images.length ? { image: images } : {}),
    ...(category ? { category: category.name } : {}),
    ...(product.colors ? { color: product.colors } : {}),
    ...(product.dimensions ? { size: product.dimensions } : {}),
    brand: { "@type": "Brand", name: site.name },
    manufacturer: {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      url: absoluteUrl("/"),
    },
    ...(offers ? { offers } : {}),
  };
}

/** Wraps one or more nodes in a single @graph document. */
export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
