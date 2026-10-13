import type { Category } from "@/types/catalog";

/*
 * Categories: navigation order, page copy and metadata.
 *
 * Each category targets its own search intent (flowers, amigurumis, baby,
 * combos, custom pieces). Keep the copy factual: only what Tita actually
 * makes and how ordering works. No invented materials, times or prices.
 */
export const categories: Category[] = [
  {
    slug: "ramos-y-flores",
    name: "Ramos y Flores",
    heading: "Ramos y flores tejidas a crochet",
    metaTitle: "Ramos y flores tejidas a crochet",
    description:
      "Ramos de girasoles, rosas, tulipanes y margaritas tejidos a crochet que no se marchitan. Hechos a mano en Buenos Aires, con envíos a todo Argentina.",
    intro:
      "Girasoles, rosas, tulipanes, margaritas y lirios tejidos uno a uno, armados en ramos o para regalar de a una flor. No se marchitan ni necesitan agua, así que el regalo queda. Algunos ramos suman un personaje tejido en el centro. Los precios son de referencia y cada pedido se confirma por Instagram.",
    editorial: [
      {
        title: "Flores que no se marchitan",
        paragraphs: [
          "Un ramo tejido a crochet es un regalo que dura. Cada flor se teje a mano, pétalo por pétalo, y después se arma el ramo con su envoltorio: papel kraft, papel blanco o tul, según el modelo. Muchos incluyen una tarjeta para escribir una dedicatoria.",
        ],
      },
      {
        title: "Para regalar en fechas especiales",
        paragraphs: [
          "Son un regalo original para un cumpleaños, un aniversario o simplemente para decir te quiero. Una rosa o un girasol solos son un detalle; un ramo de rosas y margaritas, un regalo grande. Las flores sueltas también se pueden pedir en cantidad, por ejemplo como souvenir.",
        ],
      },
      {
        title: "Tu ramo, a medida",
        paragraphs: [
          "Si querés otras flores, otros colores o sumar un amigurumi, armamos un ramo personalizado. Contanos la idea por Instagram y coordinamos los detalles, el precio y la entrega. Tejemos en Lomas del Mirador, Buenos Aires, y enviamos a todo Argentina.",
        ],
      },
    ],
    productNote:
      "Las flores tejidas no se marchitan ni necesitan agua: son un regalo que queda. Cada flor se teje a mano y el ramo se arma pieza por pieza, así que podés pedirlo con otros colores o con más flores.",
    cover: {
      src: "/images/productos/ramo-girasol-y-rosa-1.jpg",
      alt: "Ramo tejido al crochet con un girasol, una rosa roja y pampas secas, envuelto en papel kraft",
      focus: "50% 30%",
    },
  },
  {
    slug: "amigurumis",
    name: "Amigurumis",
    heading: "Amigurumis tejidos a mano",
    metaTitle: "Amigurumis y muñecos tejidos a crochet",
    description:
      "Amigurumis tejidos a mano: animales, personajes y muñecos a crochet hechos por encargo en Buenos Aires. Pedí el tuyo por Instagram, con envíos a todo Argentina.",
    intro:
      "Muñecos y personajes tejidos a crochet, punto por punto: animales, figuras de películas y series, y diseños propios como el carpincho argentino. Cada amigurumi se hace a mano y por encargo, así que podés pedirlo en otros colores o con algún detalle distinto. Los precios son de referencia y se confirman por Instagram.",
    editorial: [
      {
        title: "¿Qué es un amigurumi?",
        paragraphs: [
          "Amigurumi es la técnica japonesa de tejer muñecos al crochet, en espiral y con puntos bien juntos para que la pieza quede firme. Después se rellenan y se cosen las partes una por una: orejas, brazos, ropa y accesorios. Por eso cada muñeco lleva varias horas de trabajo y ninguno sale exactamente igual a otro.",
        ],
      },
      {
        title: "Muñecos tejidos para regalar",
        paragraphs: [
          "Un amigurumi es un regalo para chicos y grandes: para quien colecciona a su personaje favorito, para una pareja que quiere regalarse algo de a dos o para acompañar una flor o una taza. Algunos se pueden colgar del bolso o la mochila.",
        ],
      },
      {
        title: "Amigurumis personalizados",
        paragraphs: [
          "Si el personaje que buscás no está en el catálogo, lo podemos tejer a pedido. También hacemos muñecos a partir de una foto, con el pelo, la ropa y los detalles de una persona o de tu mascota. Lo coordinamos por Instagram y enviamos a todo el país.",
        ],
      },
    ],
    productNote:
      "Cada amigurumi se teje a mano, punto por punto, y después se arma y se cose pieza por pieza. Como se hace por encargo, podés pedirlo en otros colores o con algún detalle distinto.",
    cover: {
      src: "/images/productos/snoopy-corazon-1.jpg",
      alt: "Amigurumi de perrito blanco abrazando un corazón rojo, sostenido en la mano",
    },
  },
  {
    slug: "baby",
    name: "Baby",
    heading: "Crochet para bebés",
    metaTitle: "Crochet para bebés: sets y sonajeros tejidos",
    description:
      "Muñecos de apego y sonajeros tejidos a crochet para recibir a un bebé. Regalos de nacimiento hechos a mano en Buenos Aires, con envíos a todo Argentina.",
    intro:
      "Muñecos de apego y sonajeros tejidos a crochet, pensados para recibir a un bebé. Hay sets que combinan un muñeco con su sonajero de aro de madera, y se pueden pedir con otros personajes o colores. Cada pieza se teje a mano y por encargo; los detalles se coordinan por Instagram.",
    editorial: [
      {
        title: "Regalos de nacimiento hechos a mano",
        paragraphs: [
          "Un set tejido es un regalo para un nacimiento, un baby shower o la primera visita. Cada set junta una pieza para abrazar con un sonajero para agarrar y sacudir, y todo se hace a mano, punto por punto.",
        ],
      },
      {
        title: "Amigurumis para bebés, a pedido",
        paragraphs: [
          "Si buscás otro animal, otros colores o un personaje en particular, escribinos y lo tejemos a pedido. Los tiempos se coordinan por mensaje, así que conviene consultar con anticipación si es para una fecha puntual. Enviamos a todo Argentina.",
        ],
      },
    ],
    productNote:
      "Pensado para recibir a un bebé: cada pieza se teje a mano y por encargo. Si lo querés con otro personaje o en otros colores, lo coordinamos por mensaje.",
    cover: {
      src: "/images/productos/combo-tita-1.jpg",
      alt: "Conejito de apego tejido color crudo junto a un sonajero de conejo con aro de madera",
    },
  },
  {
    slug: "combos",
    name: "Combos con Taza",
    heading: "Combos con taza para regalar",
    metaTitle: "Combos con taza y crochet para regalar",
    description:
      "Flores y amigurumis tejidos a crochet junto a su taza: regalos originales y completos para cumpleaños o aniversarios. Hechos a mano, con envíos a todo Argentina.",
    intro:
      "Una pieza tejida a crochet junto a una taza: un girasol, una rosa o un amigurumi acompañados de su taza. Un regalo completo para un cumpleaños, un aniversario o para sorprender a alguien. Los precios son de referencia y cada combo se confirma por Instagram.",
    editorial: [
      {
        title: "Un regalo original y completo",
        paragraphs: [
          "El combo resuelve el regalo de una vez: algo tejido a mano que dura, y una taza para usar todos los días. Hay combos con flores, para decir te quiero, y combos con personajes, para quien tiene un favorito.",
        ],
      },
      {
        title: "Armá tu combo",
        paragraphs: [
          "En el combo con amigurumi, la taza es personalizada y el muñeco se elige. Si querés otra combinación, escribinos por Instagram y vemos cómo armarla. Enviamos a todo Argentina.",
        ],
      },
    ],
    productNote:
      "Cada combo junta una pieza tejida a mano con su taza, para regalar todo junto. Si querés otra flor u otro personaje, armamos la combinación por mensaje.",
    cover: {
      src: "/images/productos/combo-taza-amigurumi-1.jpg",
      alt: "Amigurumi azul de orejas grandes tejido al crochet junto a una taza con su cara",
    },
  },
  {
    slug: "personalizados",
    name: "Personalizados",
    heading: "Regalos personalizados a crochet",
    metaTitle: "Regalos personalizados a crochet",
    description:
      "Muñecos personalizados, mascotas y ramos tejidos a crochet a partir de tu idea o una foto. Piezas por encargo hechas a mano en Buenos Aires, con envíos a todo Argentina.",
    intro:
      "Piezas tejidas a pedido, a partir de tu idea o de una foto: muñecos que se parecen a vos y a tu pareja, tu mascota en crochet, un hada con el pelo y el vestido que elijas o un ramo armado a tu gusto. Cada pieza se coordina por Instagram, desde los colores hasta el precio y la entrega.",
    editorial: [
      {
        title: "Muñecos personalizados tejidos a mano",
        paragraphs: [
          "Tejemos personas a partir de una foto: el pelo, la ropa, los accesorios y esos detalles que hacen que alguien se reconozca. Son un regalo para un aniversario, un cumpleaños, un casamiento o para una pareja. El precio final depende de la complejidad de cada pieza.",
        ],
      },
      {
        title: "Mascotas, animales y flores a medida",
        paragraphs: [
          "También tejemos a tu mascota, con sus colores, sus manchas y sus orejas, y ramos con las flores y los colores que elijas. Si viste una idea en otro lado o querés cambiarle algo a una pieza del catálogo, también se puede.",
        ],
      },
      {
        title: "Cómo pedir una pieza personalizada",
        paragraphs: [
          "Escribinos por Instagram con tu idea y, si tenés, fotos de referencia. Coordinamos los detalles, el precio y los tiempos antes de empezar a tejer. Cada pieza se hace a mano en Lomas del Mirador, Buenos Aires, y la enviamos a todo Argentina.",
        ],
      },
    ],
    productNote:
      "Es una pieza por encargo: la tejemos a partir de tu idea o de una foto, y coordinamos colores, detalles, precio y tiempos por mensaje antes de empezar.",
    cover: {
      src: "/images/productos/munecos-personalizados-1.jpg",
      alt: "Pareja de muñecos personalizados tejidos al crochet",
      focus: "50% 32%",
    },
  },
];
