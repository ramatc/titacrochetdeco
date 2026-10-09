import Image from "next/image";
import type { Photo as PhotoData } from "@/types/catalog";

type PhotoProps = {
  photo: PhotoData;
  /** Frame classes: aspect ratio, sizing, rounding. */
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Subtle zoom when an ancestor with the `group` class is hovered. */
  zoomOnHover?: boolean;
};

/**
 * A photo frame. Without `photo.src` it renders a clearly labelled
 * placeholder so missing photography is never mistaken for a real image.
 */
export function Photo({
  photo,
  className = "",
  sizes,
  priority = false,
  zoomOnHover = false,
}: PhotoProps) {
  const zoom = zoomOnHover
    ? "transition-transform duration-500 ease-(--ease-soft) group-hover:scale-[1.03]"
    : "";

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${zoom}`}
        />
      ) : (
        <div
          role="img"
          aria-label={`${photo.alt} (foto pendiente)`}
          className={`absolute inset-0 flex items-center justify-center p-4 ${zoom}`}
        >
          <div className="pointer-events-none absolute inset-3 border border-dashed border-line-strong/70" />
          <div className="relative max-w-[16rem] text-center">
            <p className="eyebrow text-ink-soft!">Foto pendiente</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">{photo.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
