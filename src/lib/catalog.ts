import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Category, CategorySlug, Product } from "@/types/catalog";

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProducts(category?: CategorySlug): Product[] {
  return category ? products.filter((p) => p.category === category) : products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/** Same-category pieces first, then the rest, excluding the current one. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const others = products.filter((p) => p.slug !== product.slug);
  const sameCategory = others.filter((p) => p.category === product.category);
  const rest = others.filter((p) => p.category !== product.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
