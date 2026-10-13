import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/structured-data";

/**
 * Visible breadcrumb trail. The last item is the current page and is not a
 * link. Pair it with `breadcrumbSchema` using the same items.
 */
export function Breadcrumbs({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-soft">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="link-underline">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
