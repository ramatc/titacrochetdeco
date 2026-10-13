import type { Metadata } from "next";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";
import type { Photo } from "@/types/catalog";

type PageMetadataInput = {
  /** Page title without the brand suffix (the root template adds it). */
  title: string;
  description: string;
  /** Site path, e.g. "/catalogo/amigurumis". Used for canonical and og:url. */
  path: string;
  /** Share image. Omit to fall back to the brand card (app/opengraph-image). */
  image?: Photo;
  /** Use the title as-is, skipping the "%s | Tita Crochet" template. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

/**
 * Complete per-page metadata. Next merges metadata shallowly, so a page
 * that sets `openGraph` replaces the layout's object entirely: this helper
 * always returns the full set (canonical, Open Graph and Twitter).
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  type = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const images = image?.src ? [{ url: absoluteUrl(image.src), alt: image.alt }] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      url: absoluteUrl(path),
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}

/**
 * Meta description for a product: its own description plus a short,
 * truthful context line, kept within the length search engines display.
 */
export function productMetaDescription(description: string): string {
  const candidates = [
    `${description} Pieza hecha a mano en Buenos Aires, con envíos a todo Argentina.`,
    `${description} Pieza hecha a mano, con envíos a todo Argentina.`,
  ];
  return candidates.find((text) => text.length <= 165) ?? description;
}
