# Tita Crochet

Editorial web catalog for Tita Crochet. Shows the pieces and their prices and sends
every inquiry to Instagram. There is no cart or checkout by design.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

| What | Where |
| --- | --- |
| Products, prices, sizes, featured pieces | `src/data/products.ts` |
| Categories (order = nav/filter order) | `src/data/categories.ts` |
| Home copy (hero, editorial, about, how to order) | `src/content/home.ts` |
| Links, Instagram, location, SEO defaults | `src/content/site.ts` |
| Instagram section photos | `src/data/instagram.ts` |

> Prices in `src/data/products.ts` are **example values**. Review them before launch.

### Photos

Every image is a `{ src?, alt }` object. While `src` is empty the site shows a labelled
"Foto pendiente" frame. To add a real photo:

1. Put the file in `public/images/...` (e.g. `public/images/productos/ramo-girasoles-1.jpg`).
2. Set `src: "/images/productos/ramo-girasoles-1.jpg"` on that image.

The first image of a product is its grid cover. `cardFormat` (`portrait`, `square`,
`wide`) controls how the piece sits in the editorial grids.

### Logo

Set `site.isotype` in `src/content/site.ts` to the rabbit isotype file
(e.g. `/brand/isotipo.svg`) to show it next to the `TITA` wordmark.

### Instagram inquiries

Instagram does not support pre-filled DM text through a URL. "Consultar" buttons copy
a ready-made message (product name, price and link) to the clipboard and open
`https://ig.me/m/titacrochetdeco`. The logic lives in `src/lib/inquiry.ts`.

## Structure

```
src/
  app/          routes: /, /catalogo, /catalogo/[categoria], /productos/[slug], SEO files
  components/   layout/, home/, product/, catalog/, ui/
  content/      editable copy and site settings
  data/         products, categories, feed photos
  lib/          catalog queries, price formatting, inquiry messages, SEO helpers
  types/        shared types
```

Production: https://titacrochetdeco.vercel.app (deploys on every push to `main`).
The public base URL lives in one place, `src/lib/site-url.ts`, and defaults to the Vercel URL.
To move to a custom domain, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://titacrochet.com.ar`) in the
Vercel project and redeploy: canonicals, sitemap, robots, JSON-LD and Open Graph all build
absolute URLs through `absoluteUrl()`, so no component needs to change.

## SEO

- Per-page metadata: `pageMetadata()` in `src/lib/seo.ts` (title, description, canonical, Open Graph, Twitter).
- Structured data: `src/lib/structured-data.ts` (Organization + WebSite on the home page, Product,
  CollectionPage and BreadcrumbList). No ratings, reviews, stock or SKUs.
- Category copy (H1, intro, editorial blocks, meta title/description): `src/data/categories.ts`.
- Product H1 and `<title>`: the `headline` field in `src/data/products.ts`.
- FAQ: `src/content/faq.ts`, visible content only (no FAQPage schema).
