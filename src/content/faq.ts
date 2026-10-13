/*
 * Frequently asked questions. Answers only state what Tita already
 * publishes; anything that depends on the piece is coordinated by Instagram.
 *
 * Rendered as visible content only. FAQPage structured data is deliberately
 * not used: Google limits FAQ rich results to authoritative government and
 * health sites, so the markup would add nothing here.
 */

export type FaqItem = { id: string; question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    id: "hechos-a-mano",
    question: "¿Los productos son hechos a mano?",
    answer:
      "Sí. Cada pieza se teje a mano al crochet, una por vez, en Lomas del Mirador, Buenos Aires. Por eso puede tener pequeñas variaciones respecto de la foto.",
  },
  {
    id: "personalizados",
    question: "¿Hacen productos personalizados?",
    answer:
      "Sí. Tejemos muñecos a partir de una foto, mascotas, ramos a tu gusto y personajes que no están en el catálogo. Escribinos por Instagram con tu idea y coordinamos colores, detalles y precio.",
  },
  {
    id: "como-pedir",
    question: "¿Cómo hago un pedido?",
    answer:
      "Elegí la pieza en el catálogo y tocá el botón para consultar: te preparamos el mensaje para mandarlo por Instagram. Desde ahí coordinamos colores, detalles, pago y entrega.",
  },
  {
    id: "envios",
    question: "¿Realizan envíos?",
    answer:
      "Sí, enviamos a todo Argentina. La forma de envío se coordina por Instagram según el destino.",
  },
  {
    id: "tiempos",
    question: "¿Cuánto tarda una pieza?",
    answer:
      "Depende de la pieza y de los pedidos en curso. La mayoría se teje por encargo, así que te confirmamos los tiempos por mensaje antes de empezar.",
  },
  {
    id: "precios",
    question: "¿Los precios del catálogo son finales?",
    answer:
      "Son precios de referencia. El precio final se confirma por mensaje, sobre todo en las piezas personalizadas, donde depende de la complejidad.",
  },
];

/** Subset shown on the custom-pieces category page. */
export const customFaqIds = ["personalizados", "como-pedir", "tiempos", "envios"];
