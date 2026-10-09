import { Photo } from "@/components/ui/Photo";
import type { Photo as PhotoData } from "@/types/catalog";

/**
 * Mobile: swipeable row with scroll snapping (no JS).
 * Desktop: photos stacked in a column next to the sticky product info.
 */
export function ProductGallery({ images, name }: { images: PhotoData[]; name: string }) {
  const single = images.length === 1;

  return (
    <section aria-label={`Fotos de ${name}`} className="-mx-(--spacing-gutter) md:mx-0">
      <ul
        className={`no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-(--spacing-gutter) md:px-0 lg:flex-col lg:gap-4 lg:overflow-visible ${
          single ? "" : "scroll-px-(--spacing-gutter) md:scroll-px-0"
        }`}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className={`shrink-0 snap-start ${single ? "w-full" : "w-[86%] md:w-[70%] lg:w-full"}`}
          >
            <Photo
              photo={image}
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 55vw, 86vw"
              priority={index === 0}
            />
          </li>
        ))}
      </ul>
      {single ? null : (
        <p className="mt-3 px-(--spacing-gutter) text-xs text-ink-soft md:px-0 lg:hidden">
          {images.length} fotos · deslizá para ver más
        </p>
      )}
    </section>
  );
}
