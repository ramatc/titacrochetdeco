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
    category: "ramos-y-flores",
    price: 33000,
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
    category: "ramos-y-flores",
    price: 42000,
    images: [
      {
        src: "/images/home/hero-ramo.jpg",
        alt: "Ramo tejido al crochet con rosas rojas, margaritas blancas y un girasol, envuelto en papel sobre tela blanca",
      },
      {
        src: "/images/productos/ramo-rosas-y-margaritas-1.jpg",
        alt: "Ramo tejido con dos girasoles, rosas rojas y margaritas blancas, envuelto en papel blanco con cinta roja",
      },
    ],
    description:
      "Rosas rojas, margaritas blancas y girasoles. Un clásico para regalar en fechas especiales.",
    dimensions: "45 cm de alto aprox.",
    colors: "Rojo, blanco, amarillo y verde",
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "ramo-margarita",
    name: "Ramo Margarita",
    category: "ramos-y-flores",
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
    category: "ramos-y-flores",
    price: 23500,
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
    name: "Flor Shrek",
    category: "ramos-y-flores",
    price: 14000,
    images: [
      {
        src: "/images/productos/girasol-sonriente-1.jpg",
        alt: "Girasol tejido al crochet con carita verde en el centro y hojas, envuelto en papel kraft sobre tela blanca",
      },
      {
        src: "/images/productos/girasol-sonriente-2.jpg",
        alt: "Girasol sonriente tejido envuelto en papel kraft, sostenido en la mano en la vereda",
      },
      {
        src: "/images/productos/girasol-sonriente-3.jpg",
        alt: "Muchos girasoles sonrientes embolsados con tarjeta, listos para entregar como souvenir",
      },
    ],
    description:
      "Un girasol con la carita de Shrek, tejido a mano. Se puede regalar solo o sumar a un ramo.",
    dimensions: "35 cm de alto aprox.",
    colors: "Amarillo y verde",
    madeToOrder: false,
    featured: true,
  },
  {
    slug: "flor-rapunzel-con-pascal",
    name: "Flor de Rapunzel con Pascal",
    category: "ramos-y-flores",
    price: 30000,
    images: [
      {
        src: "/images/productos/flor-rapunzel-con-pascal-1.jpg",
        alt: "Lirio amarillo y violeta tejido al crochet con un pequeño camaleón verde encima",
      },
      {
        src: "/images/productos/flor-rapunzel-con-pascal-2.jpg",
        alt: "Lirio tejido con camaleón sostenido en la mano frente a una reja",
      },
      {
        src: "/images/productos/flor-rapunzel-con-pascal-3.jpg",
        alt: "Vista de frente del lirio tejido con el camaleón sobre los pétalos",
      },
      {
        src: "/images/productos/flor-rapunzel-con-pascal-4.jpg",
        alt: "Lirio tejido visto de costado con el camaleón apoyado en un pétalo",
      },
    ],
    description:
      "La flor de Rapunzel con Pascal, el camaleón, apoyado en sus pétalos. También se venden por separado: la flor a $18.500 y Pascal a $14.000.",
    dimensions: "35 cm de alto aprox.",
    colors: "Amarillo, violeta y verde",
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "rosa-individual",
    name: "Rosa",
    category: "ramos-y-flores",
    price: 12500,
    images: [
      {
        src: "/images/productos/rosa-individual-1.jpg",
        alt: "Dos rosas rojas tejidas envueltas en papel kraft con tarjetas de dedicatoria",
      },
    ],
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
      {
        src: "/images/productos/hombre-arana-2.jpg",
        alt: "Amigurumi de Hombre Araña de cuerpo entero sobre tela blanca",
      },
      {
        src: "/images/productos/hombre-arana-3.jpg",
        alt: "Hombre Araña tejido colgado de la manija de un bolso negro con su telaraña",
        focus: "50% 55%",
      },
    ],
    description:
      "Nuestro superhéroe favorito, tejido punto por punto con todos sus detalles. Con su telaraña, se puede colgar del bolso o la mochila.",
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
    images: [
      {
        src: "/images/productos/snoopy-corazon-1.jpg",
        alt: "Amigurumi de Snoopy blanco abrazando un corazón rojo, sostenido en la mano",
      },
      {
        src: "/images/productos/snoopy-corazon-2.jpg",
        alt: "Snoopy tejido con corazón rojo junto a una taza con la palabra Love",
      },
      {
        src: "/images/productos/snoopy-corazon-3.jpg",
        alt: "Snoopy con corazón sentado junto a una taza blanca, sobre tela blanca",
      },
      {
        src: "/images/productos/snoopy-corazon-4.jpg",
        alt: "Snoopy tejido visto de costado con su corazón y collar rojo",
      },
    ],
    description: "Un perrito abrazando un corazón rojo. Pensado para regalar cariño.",
    dimensions: "18 cm de alto aprox.",
    colors: "Blanco, negro y rojo",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "combo-taza-amigurumi",
    name: "Combo Taza + Amigurumi",
    category: "combos",
    price: 40000,
    images: [
      {
        src: "/images/productos/combo-taza-amigurumi-1.jpg",
        alt: "Amigurumi azul de orejas grandes tejido al crochet junto a una taza con su cara, sobre tela blanca",
      },
      {
        src: "/images/productos/combo-taza-amigurumi-2.jpg",
        alt: "Amigurumi de Stitch sostenido en la mano junto a su taza azul",
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
  {
    slug: "ramo-tres-rosas",
    name: "Ramo Tres Rosas",
    category: "ramos-y-flores",
    price: 37500,
    images: [
      {
        src: "/images/productos/ramo-tres-rosas-1.jpg",
        alt: "Ramo de tres rosas rojas tejidas al crochet con tallos verdes, envuelto en papel kraft",
      },
    ],
    description:
      "Tres rosas rojas tejidas a mano, envueltas en papel kraft. Un clásico que no se marchita.",
    colors: "Rojo y verde",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "ramo-girasoles-sonrientes",
    name: "Ramo Girasoles Sonrientes",
    category: "ramos-y-flores",
    price: null,
    images: [
      {
        src: "/images/productos/ramo-girasoles-sonrientes-1.jpg",
        alt: "Ramo grande con girasoles, girasoles con carita y rosas rojas tejidas, envuelto en papel kraft",
      },
    ],
    description:
      "Un ramo abundante que mezcla girasoles clásicos, girasoles con carita y rosas rojas.",
    colors: "Amarillo, marrón, verde y rojo",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "ramo-girasol-y-tulipan",
    name: "Ramo Girasol y Tulipán",
    category: "ramos-y-flores",
    price: 19500,
    images: [
      {
        src: "/images/productos/ramo-girasol-y-tulipan-1.jpg",
        alt: "Ramito tejido con un girasol y un tulipán amarillo, envuelto en papel kraft y sostenido en la mano",
      },
    ],
    description: "Un girasol y un tulipán amarillo juntos en un ramito luminoso.",
    colors: "Amarillo, marrón y verde",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "girasol-con-grogu",
    name: "Girasol con Grogu",
    category: "ramos-y-flores",
    price: null,
    images: [
      {
        src: "/images/productos/girasol-con-grogu-1.jpg",
        alt: "Girasol tejido envuelto en papel kraft con un pequeño amigurumi de Grogu y una tarjeta",
      },
    ],
    description:
      "Un girasol tejido acompañado de un mini Grogu. Una flor con personaje incluido.",
    colors: "Amarillo, verde y marrón",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "margarita",
    name: "Margarita",
    category: "ramos-y-flores",
    price: 7000,
    images: [
      {
        src: "/images/productos/margarita-1.jpg",
        alt: "Muchas margaritas blancas tejidas, cada una envuelta en papel kraft",
      },
    ],
    description:
      "Una margarita tejida para regalar de a una. Ideal también como souvenir.",
    colors: "Blanco, amarillo y verde",
    madeToOrder: false,
    featured: false,
    cardFormat: "square",
  },
  {
    slug: "naruto-y-kurama",
    name: "Naruto y Kurama",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/naruto-y-kurama-1.jpg",
        alt: "Amigurumis de Naruto y del zorro Kurama naranja sostenidos en la mano",
      },
      {
        src: "/images/productos/naruto-y-kurama-2.jpg",
        alt: "Kurama tejido de frente con Naruto detrás, sobre tela blanca",
      },
      {
        src: "/images/productos/naruto-y-kurama-3.jpg",
        alt: "Naruto y Kurama tejidos al crochet vistos desde arriba",
      },
    ],
    description: "Naruto y su zorro Kurama, tejidos con todos sus detalles.",
    colors: "Naranja, negro y amarillo",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "darth-vader",
    name: "Darth Vader",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/darth-vader-1.jpg",
        alt: "Amigurumi de Darth Vader negro con sable de luz rojo, sobre tela blanca",
      },
      {
        src: "/images/productos/darth-vader-2.jpg",
        alt: "Darth Vader tejido de frente sosteniendo su sable rojo",
      },
    ],
    description: "El lado oscuro, pero tejido y abrazable. Con su sable de luz rojo.",
    colors: "Negro, gris y rojo",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "shrek",
    name: "Shrek",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/shrek-1.jpg",
        alt: "Amigurumi de Shrek verde con chaleco marrón, sobre tela blanca",
      },
      {
        src: "/images/productos/shrek-2.jpg",
        alt: "Dos amigurumis de Shrek sostenidos en la mano junto a girasoles tejidos",
      },
    ],
    description: "Shrek tejido a mano, con su chaleco y sus orejas inconfundibles.",
    colors: "Verde, marrón y blanco",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "abejita",
    name: "Abejita",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/abejita-1.jpg",
        alt: "Amigurumi de abeja amarilla y negra con alas rosas y cachetes rosados",
      },
    ],
    description: "Una abejita tejida con alas rosas y cachetes colorados.",
    colors: "Amarillo, negro y rosa",
    madeToOrder: true,
    featured: false,
    cardFormat: "square",
  },
  {
    slug: "mascota-personalizada",
    name: "Mascota Personalizada",
    category: "personalizados",
    price: null,
    images: [
      {
        src: "/images/productos/mascota-personalizada-1.jpg",
        alt: "Perrito blanco y negro tejido a partir de una mascota real, sostenido en la mano",
      },
    ],
    description:
      "Tejemos a tu mascota a partir de una foto: sus colores, sus manchas y sus orejas.",
    colors: "Según tu mascota",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "camaleon-pascal",
    name: "Camaleón Pascal",
    category: "amigurumis",
    price: 14000,
    images: [
      {
        src: "/images/productos/camaleon-pascal-1.jpg",
        alt: "Amigurumi de camaleón verde con flor rosa en la cabeza, sostenido en la mano",
      },
      {
        src: "/images/productos/camaleon-pascal-2.jpg",
        alt: "Cuatro camaleones verdes tejidos con flores rosas",
      },
      {
        src: "/images/productos/camaleon-pascal-3.jpg",
        alt: "Detalle del camaleón tejido con su flor rosa",
      },
    ],
    description: "El camaleón más simpático, tejido con una florcita rosa en la cabeza.",
    colors: "Verde y rosa",
    madeToOrder: true,
    featured: false,
    cardFormat: "square",
  },
  {
    slug: "carpincho-argentino",
    name: "Carpincho Argentino",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/carpincho-argentino-1.jpg",
        alt: "Amigurumi de carpincho marrón con capa celeste y blanca, sostenido en la mano",
      },
      {
        src: "/images/productos/carpincho-argentino-2.jpg",
        alt: "Carpincho tejido de perfil con su capa argentina",
      },
      {
        src: "/images/productos/carpincho-argentino-3.jpg",
        alt: "Carpincho tejido visto de costado con la capa celeste y blanca",
      },
    ],
    description: "Un carpincho bien argentino, con su capa celeste y blanca.",
    colors: "Marrón, celeste y blanco",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "pooh-con-rosa",
    name: "Pooh con Rosa",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/pooh-con-rosa-1.jpg",
        alt: "Amigurumi de Winnie Pooh junto a una rosa roja tejida y una tarjeta con frase",
      },
      {
        src: "/images/productos/pooh-con-rosa-2.jpg",
        alt: "Pooh tejido con remera roja junto a una rosa y su tarjeta",
      },
    ],
    description: "Pooh tejido acompañado de una rosa roja y una tarjeta con frase.",
    colors: "Amarillo, rojo y verde",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "combo-tita",
    name: "Combo Tita",
    category: "baby",
    price: null,
    images: [
      {
        src: "/images/productos/combo-tita-1.jpg",
        alt: "Conejito tejido color crudo junto a un sonajero de conejo con aro de madera",
      },
      {
        src: "/images/productos/combo-tita-2.jpg",
        alt: "Set de conejito y sonajero tejidos sobre tela blanca",
      },
      {
        src: "/images/productos/combo-tita-3.jpg",
        alt: "Conejito dormido y sonajero con aro de madera, vistos desde arriba",
      },
    ],
    description:
      "Un conejito de apego y un sonajero de conejo con aro de madera. El regalo ideal para recibir a un bebé.",
    colors: "Crudo y marrón",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "combo-taza-hombre-arana",
    name: "Combo Taza + Hombre Araña",
    category: "combos",
    price: null,
    images: [
      {
        src: "/images/productos/combo-taza-hombre-arana-1.jpg",
        alt: "Amigurumi de Hombre Araña junto a una taza blanca con los ojos del personaje",
      },
    ],
    description: "Un Hombre Araña tejido junto a su taza. Un regalo completo.",
    colors: "Rojo, azul, negro y blanco",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "combo-taza-girasol",
    name: "Combo Taza + Girasol",
    category: "combos",
    price: null,
    images: [
      {
        src: "/images/productos/combo-taza-girasol-1.jpg",
        alt: "Girasol tejido envuelto en papel blanco junto a una taza con girasoles y la frase te amo",
      },
    ],
    description: "Un girasol tejido junto a una taza con girasoles. Para decir te quiero.",
    colors: "Amarillo, marrón y verde",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "combo-taza-rosa",
    name: "Combo Taza + Rosa",
    category: "combos",
    price: null,
    images: [
      {
        src: "/images/productos/combo-taza-rosa-1.jpg",
        alt: "Rosa roja tejida junto a una taza blanca con la frase Te Amo",
      },
    ],
    description: "Una rosa roja tejida junto a una taza con la frase Te Amo.",
    colors: "Rojo, verde y blanco",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "hada-personalizada",
    name: "Hada Personalizada",
    category: "personalizados",
    price: null,
    images: [
      {
        src: "/images/productos/hada-personalizada-1.jpg",
        alt: "Muñeca tejida con pelo pelirrojo, corona de flores rosas, vestido rosa y alas blancas",
      },
      {
        src: "/images/productos/hada-personalizada-2.jpg",
        alt: "Muñeca hada tejida de cuerpo entero sobre tela blanca",
      },
    ],
    description:
      "Una muñeca hada hecha a pedido: elegimos juntos el pelo, el vestido y los detalles.",
    colors: "A definir con vos",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "muneca-con-velo",
    name: "Muñeca con Velo",
    category: "personalizados",
    price: null,
    images: [
      {
        src: "/images/productos/muneca-con-velo-1.jpg",
        alt: "Muñeca tejida de pelo negro con vestido negro y velo blanco, sobre tela blanca",
      },
    ],
    description: "Muñeca personalizada tejida a partir de una foto, con su ropa y peinado.",
    colors: "A definir con vos",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "it-takes-two",
    name: "It Takes Two",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/it-takes-two-1.jpg",
        alt: "Amigurumis de May y Cody de It Takes Two tomados de la mano: ella con pelo azul y él con hojas en la cabeza",
      },
    ],
    description:
      "May y Cody, la pareja de It Takes Two, tejidos de la mano. Ideal para regalar de a dos.",
    colors: "Azul, verde, marrón y beige",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "iron-man",
    name: "Iron Man",
    category: "amigurumis",
    price: null,
    images: [
      {
        src: "/images/productos/iron-man-1.jpg",
        alt: "Amigurumi de Iron Man con barba y pelo castaño, traje rojo y dorado y reactor en el pecho",
      },
    ],
    description: "Tony Stark con su traje de Iron Man, tejido punto por punto.",
    colors: "Rojo, dorado y marrón",
    madeToOrder: true,
    featured: false,
  },
  {
    slug: "ramo-messi",
    name: "Ramo de Messi",
    category: "ramos-y-flores",
    price: null,
    images: [
      {
        src: "/images/productos/ramo-messi-1.jpg",
        alt: "Ramo de tulipanes celeste y blanco con un muñeco de Messi tejido con la camiseta número 10",
      },
    ],
    description:
      "Tulipanes celeste y blanco con un Messi tejido con la 10. Ideal para un fanático.",
    colors: "Celeste, blanco y verde",
    madeToOrder: true,
    featured: false,
  },
];
