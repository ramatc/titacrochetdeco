export type CategorySlug =
  | "ramos-y-flores"
  | "amigurumis"
  | "baby"
  | "combos"
  | "personalizados";

/** A titled block of editorial copy rendered below a category's products. */
export type EditorialBlock = {
  /** Rendered as an H2. */
  title: string;
  paragraphs: string[];
};

export type Quote = {
  text: string;
  /** Rendered as the citation, e.g. "Shrek". Omit for anonymous sayings. */
  author?: string;
};

export type Category = {
  slug: CategorySlug;
  /** Short label used in navigation, filters and breadcrumbs. */
  name: string;
  /** Descriptive H1 for the category page. */
  heading: string;
  /** <title> without the brand suffix. */
  metaTitle: string;
  /** Meta description (~150-160 characters). */
  description: string;
  /** Short introduction shown under the H1 (40-80 words). */
  intro: string;
  /** Editorial copy shown after the product grid. */
  editorial: EditorialBlock[];
  /** Optional quote shown above the editorial copy. */
  quote?: Quote;
  /** "Sobre esta pieza" note shown on every product of this category. */
  productNote: string;
  /** Representative image for navigation and share cards. */
  cover: Photo;
};

/**
 * A photograph. When `src` is missing the UI renders a labelled placeholder,
 * so a real photo can be dropped in later by filling `src` only.
 */
export type Photo = {
  /** Path under /public, e.g. "/images/productos/ramo-girasoles-1.jpg". */
  src?: string;
  alt: string;
  /**
   * Focal point kept visible when the frame crops the photo, as a CSS
   * object-position value, e.g. "50% 30%". Defaults to the center.
   */
  focus?: string;
};

/**
 * Controls how a product sits in the editorial grid.
 * - portrait: default 4:5 frame
 * - square: 1:1 frame, adds rhythm between portraits
 * - wide: spans two columns
 */
export type CardFormat = "portrait" | "square" | "wide";

export type Product = {
  slug: string;
  /** Catalog name, as used on Instagram and in inquiry messages. */
  name: string;
  /**
   * Descriptive title used as the product page H1 and <title>, e.g.
   * "Ramo de girasoles tejido a crochet". Describe the piece; do not stuff keywords.
   */
  headline: string;
  category: CategorySlug;
  /** Price in ARS. `null` renders "Consultar precio". */
  price: number | null;
  /** Shows "Desde" before the price for made-to-order pieces. */
  priceFrom?: boolean;
  images: Photo[];
  description: string;
  /** Approximate size, free text, e.g. "35 cm de alto aprox." */
  dimensions?: string;
  colors?: string;
  madeToOrder: boolean;
  featured: boolean;
  /** Optional quote shown under the description. */
  quote?: Quote;
  cardFormat?: CardFormat;
};
