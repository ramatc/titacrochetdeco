/*
 * Site-wide content and links. Edit copy here, not inside components.
 */

export const site = {
  name: "Tita Crochet",
  shortName: "TITA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://titacrochetdeco.vercel.app",
  locale: "es_AR",
  title: "Tita Crochet | Tejidos hechos a mano",
  description:
    "Ramos, flores, amigurumis y objetos tejidos a mano. Conocé el catálogo de Tita Crochet y hacé tu pedido por Instagram.",
  location: "Lomas del Mirador, Buenos Aires",
  shipping: "Envíos a todo el país",
  /**
   * Set to the isotype path (e.g. "/brand/isotipo.svg") once the rabbit mark
   * is exported. While null, the header shows the TITA wordmark alone.
   */
  isotype: null as string | null,
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
  { label: "Ramos", href: "/catalogo/ramos" },
  { label: "Amigurumis", href: "/catalogo/amigurumis" },
  { label: "Deco", href: "/catalogo/deco" },
  { label: "Personalizados", href: "/catalogo/personalizados" },
  { label: "Sobre Tita", href: "/#sobre-tita" },
];

export const footerNav: NavItem[] = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Personalizados", href: "/catalogo/personalizados" },
  { label: "Sobre Tita", href: "/#sobre-tita" },
  { label: "Instagram", href: instagram.profileUrl },
];
