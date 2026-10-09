import { instagram, site } from "@/content/site";
import type { Product } from "@/types/catalog";
import { formatPrice } from "./format";

/*
 * Instagram inquiry architecture.
 *
 * Instagram has no supported URL parameter for pre-filled DM text, so an
 * inquiry is: build a message → copy it to the clipboard → open the DM link.
 * If Instagram ever supports pre-filled text, only `inquiryUrl` changes.
 */

export function productInquiryMessage(product: Product): string {
  const url = `${site.url}/productos/${product.slug}`;
  return `¡Hola Tita! Me interesa "${product.name}" (${formatPrice(product)}). ${url}`;
}

export function inquiryUrl(): string {
  return instagram.directUrl;
}
