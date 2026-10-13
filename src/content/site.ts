/*
 * Site-wide content and links. Edit copy here, not inside components.
 */
import { siteUrl } from "@/lib/site-url";

export const site = {
  name: "Tita Crochet",
  shortName: "TITA",
  /** Base URL, configured through NEXT_PUBLIC_SITE_URL (see src/lib/site-url.ts). */
  url: siteUrl,
  locale: "es_AR",
  language: "es-AR",
  title: "Tita Crochet | Amigurumis, flores y regalos tejidos a crochet",
  description:
    "Ramos de flores, amigurumis y regalos personalizados tejidos a crochet en Buenos Aires. Elegí tu pieza, pedila por Instagram y te la enviamos a todo Argentina.",
  /** Short brand description, reused by the Organization schema. */
  about:
    "Taller de crochet en Lomas del Mirador, Buenos Aires. Ramos y flores tejidas, amigurumis, piezas para bebés y regalos personalizados hechos a mano, con pedidos por Instagram y envíos a todo Argentina.",
  location: "Lomas del Mirador, Buenos Aires",
  /** Public location only: no street, postal code or phone. */
  address: {
    locality: "Lomas del Mirador",
    region: "Buenos Aires",
    country: "AR",
    countryName: "Argentina",
  },
  shipping: "Envíos a todo el país",
  logo: "/brand/logo-tita.png",
  /** Rabbit isotype shown next to the wordmark. Set to null to hide it. */
  isotype: "/brand/isotipo.png" as string | null,
} as const;

export const instagram = {
  handle: "titacrochetdeco",
  profileUrl: "https://www.instagram.com/titacrochetdeco/",
  /**
   * Direct-message link. Instagram does not support pre-filled DM text via
   * URL, so the inquiry flow copies a message to the clipboard first and
   * then opens this link (see src/lib/inquiry.ts).
   */
  directUrl: "https://ig.me/m/titacrochetdeco",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Ramos y Flores", href: "/catalogo/ramos-y-flores" },
  { label: "Amigurumis", href: "/catalogo/amigurumis" },
  { label: "Baby", href: "/catalogo/baby" },
  { label: "Combos", href: "/catalogo/combos" },
  { label: "Personalizados", href: "/catalogo/personalizados" },
  { label: "Sobre Tita", href: "/#sobre-tita" },
];

export const footerNav: NavItem[] = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Ramos y Flores", href: "/catalogo/ramos-y-flores" },
  { label: "Amigurumis", href: "/catalogo/amigurumis" },
  { label: "Personalizados", href: "/catalogo/personalizados" },
  { label: "Preguntas frecuentes", href: "/#preguntas-frecuentes" },
  { label: "Sobre Tita", href: "/#sobre-tita" },
  { label: "Instagram", href: instagram.profileUrl },
];
