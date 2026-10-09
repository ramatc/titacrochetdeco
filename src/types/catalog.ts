export type CategorySlug =
  | "ramos"
  | "flores"
  | "amigurumis"
  | "deco"
  | "personalizados";

export type Category = {
  slug: CategorySlug;
  name: string;
  /** One-line description used on category pages and metadata. */
  description: string;
  /** Representative image for the category navigation. */
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
  name: string;
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
  cardFormat?: CardFormat;
};
