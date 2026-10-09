import type { Product } from "@/types/catalog";

/*
 * Product catalog — single source of truth.
 *
 * EXAMPLE DATA: names follow pieces published on Instagram, but prices,
 * sizes and descriptions are placeholders. Review every entry before launch.
 *
 * To add a photo: put the file in /public/images/productos/ and set `src`
 * on the matching image, e.g. { src: "/images/productos/ramo-girasoles-1.jpg", alt: "..." }.
 * The first image is the cover used in grids.
 */
export const products: Product[] = [
  {
    slug: "ramo-girasoles",
    name: "Ramo Girasoles",
    category: "ramos",
    price: 38000,
    images: [
      { alt: "Ramo de girasoles tejidos al crochet envuelto en papel" },
      { alt: "Detalle del centro tejido de un girasol" },
      { alt: "Ramo de girasoles sostenido en la mano" },
    ],
    description:
      "Girasoles tejidos uno a uno, con su centro texturado y hojas verdes. Un ramo luminoso que dura para siempre.",
    dimensions: "40 cm de alto aprox.",
    colors: "Amarillo, marrón y verde",
    madeToOrder: true,
    featured: true,
    cardFormat: "wide",
  },
  {
    slug: "ramo-rosas-y-margaritas",
    name: "Ramo Rosas y Margaritas",
    category: "ramos",
    price: 42000,
    images: [
      { alt: "Ramo de rosas rojas, margaritas y girasol tejidos al crochet" },
      { alt: "Detalle de una rosa roja tejida" },
    ],
    description:
      "Rosas rojas, margaritas blancas y un girasol al centro. Un clásico para regalar en fechas especiales.",
    dimensions: "45 cm de alto aprox.",
    colors: "Rojo, blanco, amarillo y verde",
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "ramo-margarita",
    name: "Ramo Margarita",
    category: "ramos",
    price: 26000,
    images: [{ alt: "Ramo pequeño de margaritas tejidas al crochet" }],
    description:
      "Un ramito simple y delicado de margaritas blancas. Ideal como detalle o acompañando otro regalo.",
    dimensions: "30 cm de alto aprox.",
    colors: "Blanco, amarillo y verde",
    madeToOrder: true,
    featured: false,
    cardFormat: "square",
  },
  {
    slug: "girasol-sonriente",
    name: "Girasol Sonriente",
    category: "flores",
    price: 14000,
    images: [
      { alt: "Girasol tejido con carita sonriente en el centro" },
      { alt: "Girasoles sonrientes listos para entregar" },
    ],
    description:
      "Un girasol con carita, tejido a mano. Se puede regalar solo o sumar a un ramo.",
    dimensions: "35 cm de alto aprox.",
    colors: "Amarillo y verde",
    madeToOrder: false,
    featured: true,
  },
  {
    slug: "lirio-con-tortuguita",
    name: "Lirio con Tortuguita",
    category: "flores",
    price: 18000,
    images: [{ alt: "Lirio amarillo tejido con una pequeña tortuga verde encima" }],
    description:
      "Un lirio amarillo con una tortuguita tejida que lo acompaña. Una flor con sorpresa.",
    dimensions: "35 cm de alto aprox.",
    colors: "Amarillo, violeta y verde",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "rosa-individual",
    name: "Rosa",
    category: "flores",
    price: 9000,
    images: [{ alt: "Rosa roja tejida al crochet con tallo" }],
    description: "Una rosa tejida para regalar de a una. Disponible en distintos colores.",
    dimensions: "30 cm de alto aprox.",
    colors: "Rojo u otros colores a elección",
    madeToOrder: false,
    featured: false,
    cardFormat: "square",
  },
  {
    slug: "snoopy-con-ramito",
    name: "Snoopy con Ramito",
    category: "amigurumis",
    price: 32000,
    images: [
      { alt: "Amigurumi de perrito blanco sosteniendo un ramito de flores" },
      { alt: "Detalle de la cara del amigurumi" },
    ],
    description:
      "Amigurumi tejido a mano con un pequeño ramo de flores amarillas. Para abrazar y para guardar.",
    dimensions: "20 cm de alto aprox.",
    colors: "Blanco, negro y amarillo",
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "hombre-arana",
    name: "Hombre Araña",
    category: "amigurumis",
    price: 30000,
    images: [{ alt: "Amigurumi de superhéroe rojo y azul sostenido en la mano" }],
    description:
      "Nuestro superhéroe favorito, tejido punto por punto con todos sus detalles.",
    dimensions: "20 cm de alto aprox.",
    colors: "Rojo, azul, negro y blanco",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "snoopy-corazon",
    name: "Snoopy Corazón",
    category: "amigurumis",
    price: 30000,
    images: [{ alt: "Amigurumi de perrito blanco abrazando un corazón rojo" }],
    description: "Un perrito abrazando un corazón rojo. Pensado para regalar cariño.",
    dimensions: "18 cm de alto aprox.",
    colors: "Blanco, negro y rojo",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "llavero-aranita",
    name: "Llavero Arañita",
    category: "deco",
    price: 9500,
    images: [{ alt: "Llavero tejido de superhéroe colgado de un bolso" }],
    description:
      "Un llavero tejido para llevar en la mochila, el bolso o las llaves.",
    dimensions: "8 cm aprox.",
    colors: "Rojo, negro y blanco",
    madeToOrder: false,
    featured: true,
    cardFormat: "square",
  },
  {
    slug: "combo-taza-amigurumi",
    name: "Combo Taza + Amigurumi",
    category: "deco",
    price: 40000,
    images: [{ alt: "Taza blanca con dibujo junto a un amigurumi tejido" }],
    description:
      "Una taza personalizada junto a un amigurumi a elección. Un regalo completo, listo para entregar.",
    dimensions: "Taza estándar + amigurumi de 15 cm aprox.",
    colors: "Según el personaje elegido",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "munecos-personalizados",
    name: "Muñecos Personalizados",
    category: "personalizados",
    price: 45000,
    priceFrom: true,
    images: [
      { alt: "Pareja de muñecos tejidos al crochet basados en personas reales" },
      { alt: "Detalle del pelo y la ropa de los muñecos personalizados" },
    ],
    description:
      "Te tejemos en crochet: pelo, ropa y detalles a partir de una foto. El precio final depende de la complejidad.",
    dimensions: "25 cm de alto aprox. cada uno",
    colors: "A definir con vos",
    madeToOrder: true,
    featured: true,
    cardFormat: "wide",
  },
  {
    slug: "ramo-a-pedido",
    name: "Ramo a Pedido",
    category: "personalizados",
    price: 30000,
    priceFrom: true,
    images: [{ alt: "Ramo tejido armado a pedido con flores combinadas" }],
    description:
      "Elegí las flores, los colores y el envoltorio. Lo armamos a tu medida.",
    dimensions: "Según la cantidad de flores",
    colors: "A elección",
    madeToOrder: true,
    featured: false,
  },
];
