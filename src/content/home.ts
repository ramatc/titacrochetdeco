import type { Photo } from "@/types/catalog";

/*
 * Home page copy and editorial photos. Photos without `src` render as
 * labelled placeholders — add files under /public/images/ and set `src`.
 */

export const hero = {
  eyebrow: "Tejido a mano en Buenos Aires",
  title: ["Pequeñas cosas,", "tejidas para quedarse."],
  lead: "Flores, amigurumis y piezas hechas a mano, punto por punto.",
  primaryCta: { label: "Ver catálogo", href: "/catalogo" },
  secondaryCta: { label: "Hacer un pedido", href: "#como-pedir" },
  photo: {
    alt: "Ramo de girasoles tejido al crochet sostenido en la mano sobre tela blanca",
  } satisfies Photo,
  caption: "Ramo Girasoles — tejido a pedido",
};

export const categoriesSection = {
  title: "Encontrá tu Tita",
  lead: "Cinco familias de piezas, todas tejidas a mano.",
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
    alt: "Detalle cercano de la textura del tejido al crochet",
  } satisfies Photo,
  secondaryPhoto: {
    alt: "Ovillos de hilo de algodón en colores cálidos",
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
    alt: "Muñecos personalizados tejidos al crochet a partir de una foto",
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
  // EDITABLE: replace with Tita's real story. Kept intentionally generic.
  body: [
    "Tita es un pequeño taller de crochet en Lomas del Mirador. Cada pieza se teje a mano, una por vez, con hilos de algodón y mucha paciencia.",
    "[Texto editable — contá acá la historia de Tita: cómo empezó, quién teje y qué la inspira.]",
  ],
  photo: {
    alt: "Manos tejiendo al crochet",
  } satisfies Photo,
};

export const instagramSection = {
  title: "Encontranos en Instagram",
  cta: "Seguir a Tita",
};
