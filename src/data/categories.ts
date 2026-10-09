import type { Category } from "@/types/catalog";

/** Order here defines the order in navigation and filters. */
export const categories: Category[] = [
  {
    slug: "ramos",
    name: "Ramos",
    description: "Ramos tejidos que no se marchitan: girasoles, rosas y margaritas.",
    cover: { alt: "Ramo de girasoles y rosas tejido al crochet" },
  },
  {
    slug: "flores",
    name: "Flores",
    description: "Flores sueltas para regalar de a una o armar tu propio ramo.",
    cover: { alt: "Girasol tejido al crochet" },
  },
  {
    slug: "amigurumis",
    name: "Amigurumis",
    description: "Muñecos y personajes tejidos a mano, punto por punto.",
    cover: { alt: "Amigurumi tejido al crochet sostenido en la mano" },
  },
  {
    slug: "deco",
    name: "Deco",
    description: "Pequeños objetos tejidos para la casa, la mochila o el escritorio.",
    cover: { alt: "Llavero tejido al crochet colgando de un bolso" },
  },
  {
    slug: "personalizados",
    name: "Personalizados",
    description: "Piezas a pedido: tus colores, tus personajes, tu idea.",
    cover: { alt: "Pareja de muñecos personalizados tejidos al crochet" },
  },
];
