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

## Catalog update (2026-10-11)
- Real photos for 37 products; categories now: Ramos y Flores, Amigurumis, Baby, Combos con Taza, Personalizados.
- `flores` merged into `ramos`, `deco` replaced by `combos`; old URLs redirect in `next.config.ts`.
- Llavero Arañita folded into Hombre Araña (same piece); redirect kept.
- Unit prices from the owner: girasol $11.000, tulipán $8.500, rosa $12.500, lavanda $3.000,
  Flor Shrek $14.000, margarita $7.000, Flor de Rapunzel + Pascal $30.000
  (flor sola $18.500, Pascal solo $14.000).
- About section has Tita's photo (the owner's rabbit); rabbit logo used as isotype and favicon.

## Pending
- [ ] Confirm bouquet prices computed from unit prices: Ramo Girasoles $33.000, Tres Rosas $37.500,
      Girasol y Rosa $23.500, Girasol y Tulipán $19.500.
- [ ] Missing prices (show "Consultar precio"): Ramo de Messi (Messi doll price), Combo Tita,
      Ramo Rosas y Margaritas, Ramo Girasoles Sonrientes, Ramo Margarita, Girasol con Shrek,
      combos con taza (mug price), new amigurumis and personalizados.
- [ ] Old placeholder prices still on pre-existing amigurumis/personalizados (Snoopy, Hombre Araña, etc.).
- [ ] Decide whether tulipán and lavanda get standalone products.
- [ ] Owner to review/rewrite the Tita story paragraph in `src/content/home.ts` (current text is a draft).
- [ ] Owner to review product names (Muñeca con Velo, Hada Personalizada, etc.).
- [x] Full logo (`public/brand/logo-tita.png`) used on the OpenGraph share image (static, verified render).
- [x] Category slug renamed to `ramos-y-flores`; `/catalogo/ramos` and `/catalogo/flores` redirect to it.
