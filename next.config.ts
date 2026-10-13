import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // AVIF first (smaller), WebP as fallback; both served from the source JPGs.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/catalogo/flores", destination: "/catalogo/ramos-y-flores", permanent: true },
      { source: "/catalogo/ramos", destination: "/catalogo/ramos-y-flores", permanent: true },
      { source: "/catalogo/deco", destination: "/catalogo/combos", permanent: true },
      { source: "/productos/margarita", destination: "/productos/ramo-margarita", permanent: true },
      { source: "/productos/ramo-a-pedido", destination: "/catalogo/personalizados", permanent: true },
      { source: "/productos/girasol-con-grogu", destination: "/productos/girasol-con-shrek", permanent: true },
      { source: "/productos/llavero-aranita", destination: "/productos/hombre-arana", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
