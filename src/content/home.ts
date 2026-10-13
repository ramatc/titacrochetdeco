import type { Photo } from "@/types/catalog";

/*
 * Home page copy and editorial photos. Photos without `src` render as
 * labelled placeholders — add files under /public/images/ and set `src`.
 */

export const hero = {
  /** Rendered inside the H1, above the tagline: says what Tita makes and where. */
  eyebrow: "Crochet hecho a mano en Buenos Aires",
  title: ["Pequeñas cosas,", "tejidas para quedarse."],
  lead: "Ramos de flores, amigurumis y regalos personalizados, tejidos a mano punto por punto.",
  primaryCta: { label: "Ver catálogo", href: "/catalogo" },
  secondaryCta: { label: "Hacer un pedido", href: "#como-pedir" },
  photo: {
    src: "/images/home/hero-ramo.jpg",
    alt: "Ramo tejido al crochet con rosas rojas, margaritas blancas y un girasol, envuelto en papel sobre tela blanca",
  } satisfies Photo,
};

export const categoriesSection = {
  title: "Encontrá tu Tita",
  lead: "Flores, amigurumis, piezas para bebés, combos y personalizados, todo tejido a mano.",
};

export const featuredSection = {
  eyebrow: "Selección",
  title: "Favoritos de Tita",
  cta: { label: "Ver todo el catálogo", href: "/catalogo" },
};

export const editorial = {
  eyebrow: "Hecho a mano",
  title: "Hecho punto por punto.",
  body: [
    "Cada pieza de Tita se teje de manera artesanal.",
    "Por eso cada una puede tener pequeños detalles que la hacen única: no salen de una máquina, salen de unas manos y de varias horas de trabajo.",
  ],
  photo: {
    src: "/images/home/girasoles-y-margaritas.jpg",
    alt: "Girasoles y margaritas tejidos al crochet, con tallos y hojas verdes, sobre una tela blanca",
  } satisfies Photo,
  secondaryPhoto: {
    src: "/images/productos/camaleon-pascal-2.jpg",
    alt: "Cuatro camaleones verdes tejidos al crochet con flores rosas",
  } satisfies Photo,
};

export const catalogSection = {
  title: "El catálogo",
  lead: "Precios de referencia. Cada pieza se confirma por mensaje.",
  allLabel: "Todos",
  cta: { label: "Abrir catálogo completo", href: "/catalogo" },
};

export const customSection = {
  eyebrow: "Personalizados",
  title: "¿Tenés algo en mente?",
  body: "Si viste una idea, querés cambiar colores o estás buscando una pieza especial, escribinos y vemos cómo hacerla realidad en crochet.",
  cta: "Consultar personalizado",
  message:
    "¡Hola Tita! Quería consultar por una pieza personalizada. Mi idea es: ",
  photo: {
    src: "/images/productos/coraline-1.jpg",
    alt: "Amigurumi de Coraline con pelo azul, ojos de botón negros e impermeable amarillo con capucha, sostenido en la mano",
  } satisfies Photo,
};

export const howToOrder = {
  eyebrow: "Cómo pedir",
  title: "Pedir es simple.",
  steps: [
    {
      title: "Elegí",
      body: "Recorré el catálogo y encontrá la pieza que te guste.",
    },
    {
      title: "Escribinos",
      body: "Mandanos el producto por Instagram. Te preparamos el mensaje.",
    },
    {
      title: "Lo preparamos",
      body: "Coordinamos colores, detalles, pago y entrega.",
    },
  ],
};

export const about = {
  eyebrow: "Sobre Tita",
  title: "Detrás de cada punto hay tiempo.",
  body: [
    "Tita es un pequeño taller de crochet en Lomas del Mirador. Cada pieza se teje a mano, una por vez, con hilos de algodón y mucha paciencia.",
    "Tejemos ramos y flores que no se marchitan, amigurumis, piezas para bebés y regalos personalizados. Los pedidos se coordinan por Instagram y enviamos a todo Argentina.",
    "¿Y por qué Tita? Por ella: Tita es la coneja de la casa, la compañera de cada tarde de tejido. El taller lleva su nombre porque, de alguna forma, todo empezó a su lado.",
  ],
  photo: {
    src: "/images/home/tita.jpg",
    alt: "Tita, una coneja blanca con orejas y manchas marrones, vista desde arriba",
    focus: "62% 50%",
  } satisfies Photo,
};

export const instagramSection = {
  title: "Encontranos en Instagram",
  cta: "Seguir a Tita",
};
