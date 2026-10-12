import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/catalogo/flores", destination: "/catalogo/ramos-y-flores", permanent: true },
      { source: "/catalogo/ramos", destination: "/catalogo/ramos-y-flores", permanent: true },
      { source: "/catalogo/deco", destination: "/catalogo/combos", permanent: true },
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
