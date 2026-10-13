import type { Photo } from "@/types/catalog";

/*
 * Local selection of feed photos for the Instagram section. Kept local on
 * purpose: no fragile third-party embed. Add files to /public/images/feed/.
 * Photos with `postUrl` link to that post; the rest link to the profile.
 */
export type FeedPhoto = Photo & { postUrl?: string };

export const feedPhotos: FeedPhoto[] = [
  {
    src: "/images/productos/caballo-1.jpg",
    alt: "Amigurumi de caballo marrón con crin de flecos y ojos grandes",
    postUrl: "https://www.instagram.com/p/Cp59IHOu8tX/",
  },
  {
    src: "/images/productos/pareja-personalizada-1.jpg",
    alt: "Pareja de muñecos tejidos inspirados en Harry Potter, con túnicas negras y bufandas verde y azul",
    postUrl: "https://www.instagram.com/p/DVraxmUkSXA/",
  },
  {
    src: "/images/productos/ramo-personalizado-1.jpg",
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
