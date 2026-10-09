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
      {
        src: "/images/productos/ramo-girasoles-1.jpg",
        alt: "Ramo de tres girasoles tejidos al crochet con hojas verdes, envuelto en papel kraft con una tarjeta, sobre tela blanca",
      },
      { alt: "Detalle del centro tejido de un girasol" },
      { alt: "Ramo de girasoles sostenido en la mano" },
    ],
    description:
      "Girasoles tejidos uno a uno, con su centro texturado y hojas verdes. Un ramo luminoso que dura para siempre.",
    dimensions: "40 cm de alto aprox.",
    colors: "Amarillo, marrón y verde",
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "ramo-rosas-y-margaritas",
    name: "Ramo Rosas y Margaritas",
    category: "ramos",
    price: 42000,
    images: [
      {
        src: "/images/home/hero-ramo.jpg",
        alt: "Ramo tejido al crochet con rosas rojas, margaritas blancas y un girasol, envuelto en papel sobre tela blanca",
      },
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
    slug: "ramo-girasol-y-rosa",
    name: "Ramo Girasol y Rosa",
    category: "ramos",
    price: 28000,
    images: [
      {
        src: "/images/productos/ramo-girasol-y-rosa-1.jpg",
        alt: "Ramo tejido al crochet con un girasol, una rosa roja y pampas secas, envuelto en papel kraft con tarjeta y etiqueta de Tita",
      },
    ],
    description:
      "Un girasol y una rosa tejidos, acompañados de pampas secas y envueltos en papel kraft. Incluye tarjeta para dedicar.",
    dimensions: "45 cm de alto aprox.",
    colors: "Amarillo, rojo y verde",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "girasol-sonriente",
    name: "Girasol Sonriente",
    category: "flores",
    price: 14000,
    images: [
      {
        src: "/images/productos/girasol-sonriente-1.jpg",
        alt: "Girasol tejido al crochet con carita verde en el centro y hojas, envuelto en papel kraft sobre tela blanca",
      },
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
      {
        src: "/images/productos/snoopy-con-ramito-1.jpg",
        alt: "Amigurumi de perrito blanco con collar rojo sosteniendo un ramito de flores amarillas, sobre tela blanca",
      },
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
    images: [
      {
        src: "/images/productos/hombre-arana-1.jpg",
        alt: "Dos amigurumis de superhéroe rojo y azul con telarañas tejidas, sobre tela blanca",
      },
    ],
    description:
      "Nuestro superhéroe favorito, tejido punto por punto con todos sus detalles.",
    dimensions: "20 cm de alto aprox.",
    colors: "Rojo, azul, negro y blanco",
    madeToOrder: true,
    featured: true,
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
    images: [
      {
        src: "/images/productos/llavero-aranita-1.jpg",
        alt: "Llavero tejido de superhéroe rojo y azul colgado de la manija de un bolso negro, junto a una telaraña tejida",
        focus: "50% 55%",
      },
    ],
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
    images: [
      {
        src: "/images/productos/combo-taza-amigurumi-1.jpg",
        alt: "Amigurumi azul de orejas grandes tejido al crochet junto a una taza con su cara, sobre tela blanca",
      },
    ],
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
      {
        src: "/images/productos/munecos-personalizados-1.jpg",
        alt: "Pareja de muñecos personalizados tejidos al crochet, con pelo castaño y ropa a medida, sostenidos en la mano",
        focus: "50% 32%",
      },
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
