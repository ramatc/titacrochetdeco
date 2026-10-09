# Feature: Tita Crochet catalog site

## Objective
Editorial web catalog for Tita Crochet: present the brand, show products with prices,
explain the handmade nature, and route every inquiry to Instagram. No ecommerce flow.

## Constraints
- No cart, checkout, quantity, stock, wishlist, reviews or payment UI.
- Interface 80–90% neutral; accents only for actions (moss) and editorial marks (clay).
- No fake product photography: missing images render as labelled placeholders.
- Data (products, categories, copy) lives outside components.
- Stack: Next.js 16 (App Router, Cache Components), TypeScript, Tailwind v4, lucide-react.

## Delivery strategy
`single-pr` — greenfield site, one feature branch `feat/catalog-site`.

## Tasks
- [x] T1 Scaffold Next.js app on feature branch (inline)
- [x] T2 Design tokens, fonts, base layout (Header, MobileMenu, Footer) (inline)
- [x] T3 Data layer: types, categories, products, site content, catalog queries (inline)
- [x] T4 Home sections (Hero, categories, favorites, editorial, catalog, custom, how-to, about, Instagram) (inline)
- [x] T5 Catalog routes + product detail with Instagram inquiry (inline)
- [x] T6 SEO: metadata, OpenGraph image, sitemap, robots, JSON-LD (inline)

Route note: all tasks inline — single coherent design system authored by one hand; no
parallel writers.

## Acceptance criteria
- `npm run build` and `npm run lint` pass.
- No horizontal overflow at 360px; catalog is 2 columns on mobile.
- Every product CTA opens Instagram; no ecommerce vocabulary in the UI.

## Checks / evidence
See commit history on `feat/catalog-site`.

## Next step
Replace placeholder photos (`public/images/...`) and example prices in `src/data/products.ts`.
