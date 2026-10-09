import Link from "next/link";
import { footerNav, instagram, site } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-linen">
      <div className="page-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Wordmark />
          <p className="display mt-6 max-w-xs text-[1.75rem] text-ink">
            Tejidos hechos a mano, punto por punto.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="flex flex-col gap-3 text-sm">
            {footerNav.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <li key={item.href}>
                  {external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="link-underline">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <address className="flex flex-col gap-3 text-sm not-italic text-ink-soft">
          <span>{site.location}</span>
          <span>{site.shipping}</span>
          <a
            href={instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline self-start text-ink"
          >
            @{instagram.handle}
          </a>
        </address>
      </div>
      <div className="page-container border-t border-line py-6 text-xs text-ink-soft">
        © {site.name} · Hecho a mano en Argentina
      </div>
    </footer>
  );
}
