import type { Photo } from "@/types/catalog";

/*
 * Local selection of feed photos for the Instagram section. Kept local on
 * purpose: no fragile third-party embed. Add files to /public/images/feed/.
 * Photos with `postUrl` link to that post; the rest link to the profile.
 */
export type FeedPhoto = Photo & { postUrl?: string };

export const feedPhotos: FeedPhoto[] = [
  { alt: "Flor tejida sostenida en la mano" },
  { alt: "Girasol sonriente tejido" },
  {
    src: "/images/productos/ramo-tulipanes-y-lavandas-1.jpg",
    alt: "Ramo tejido con un tulipán rojo, un tulipán blanco y lavandas violetas, envuelto en tul",
    postUrl: "https://www.instagram.com/p/Cn5MIiJubbl/",
  },
  {
    src: "/images/productos/vaca-personalizada-1.jpg",
    alt: "Vaca personalizada tejida al crochet, blanca con manchas negras y cuernos marrones",
    postUrl: "https://www.instagram.com/p/C95ZOX-vxiv/",
  },
  {
    src: "/images/productos/frida-1.jpg",
    alt: "Amigurumi de Frida Kahlo con corona de flores de colores, blusa rosa y pollera violeta",
    postUrl: "https://www.instagram.com/p/C2V9ugWuwCC/",
  },
  {
    src: "/images/productos/furia-1.jpg",
    alt: "Amigurumi de Furia de Intensamente, rojo con ceño fruncido, camisa blanca y corbata roja",
    postUrl: "https://www.instagram.com/p/C9an6mov5jG/",
  },
];
