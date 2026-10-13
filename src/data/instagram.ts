import type { Photo } from "@/types/catalog";

/*
 * Local selection of feed photos for the Instagram section. Kept local on
 * purpose: no fragile third-party embed. Add files to /public/images/feed/.
 */
export const feedPhotos: Photo[] = [
  { alt: "Flor tejida sostenida en la mano" },
  { alt: "Girasol sonriente tejido" },
  { alt: "Ramo de rosas y girasol tejido" },
  {
    src: "/images/productos/vaca-personalizada-1.jpg",
    alt: "Vaca personalizada tejida al crochet, blanca con manchas negras y cuernos marrones",
  },
  { alt: "Girasoles tejidos listos para entregar" },
  { alt: "Amigurumi de superhéroe" },
];
