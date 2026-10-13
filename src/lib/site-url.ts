/*
 * Single source of truth for the public base URL.
 *
 * Canonicals, sitemap, robots, JSON-LD and Open Graph all build absolute
 * URLs through `absoluteUrl`. To move to a custom domain, set
 * NEXT_PUBLIC_SITE_URL (e.g. https://titacrochet.com.ar) in the Vercel
 * project and redeploy: nothing else needs to change.
 */

const FALLBACK_SITE_URL = "https://titacrochetdeco.vercel.app";

function normalizeBaseUrl(value: string | undefined): string {
  const raw = value?.trim();
  if (!raw) return FALLBACK_SITE_URL;
  const withProtocol = /^https?:\/\//.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}

export const siteUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Absolute URL for a site path, e.g. absoluteUrl("/catalogo") → "https://…/catalogo". */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? siteUrl : `${siteUrl}${normalized}`;
}
