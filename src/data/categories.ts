import type { Category } from "@/types/catalog";

/** Order here defines the order in navigation and filters. */
export const categories: Category[] = [
  {
    slug: "ramos",
    name: "Ramos y Flores",
    description: "Ramos y flores tejidas que no se marchitan: girasoles, rosas, tulipanes y margaritas.",
    cover: {
      src: "/images/productos/ramo-girasol-y-rosa-1.jpg",
      alt: "Ramo tejido al crochet con un girasol, una rosa roja y pampas secas, envuelto en papel kraft",
      focus: "50% 30%",
    },
  },
  {
    slug: "amigurumis",
    name: "Amigurumis",
    description: "Muñecos y personajes tejidos a mano, punto por punto.",
    cover: {
      src: "/images/productos/snoopy-corazon-1.jpg",
      alt: "Amigurumi de Snoopy abrazando un corazón rojo, sostenido en la mano",
    },
  },
  {
    slug: "baby",
    name: "Baby",
    description: "Sonajeros y muñecos de apego tejidos con suavidad para los más chiquitos.",
    cover: {
      src: "/images/productos/combo-tita-1.jpg",
      alt: "Conejito de apego tejido color crudo junto a un sonajero de conejo con aro de madera",
    },
  },
  {
    slug: "combos",
    name: "Combos con Taza",
    description: "Una pieza tejida junto a su taza: un regalo completo, listo para entregar.",
    cover: {
      src: "/images/productos/combo-taza-amigurumi-1.jpg",
      alt: "Amigurumi de Stitch tejido al crochet junto a una taza con su cara",
    },
  },
  {
    slug: "personalizados",
    name: "Personalizados",
    description: "Piezas a pedido: tus colores, tus personajes, tu idea.",
    cover: {
      src: "/images/productos/munecos-personalizados-1.jpg",
      alt: "Pareja de muñecos personalizados tejidos al crochet",
      focus: "50% 32%",
    },
  },
];
