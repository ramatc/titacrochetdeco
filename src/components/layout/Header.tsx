"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { instagram, mainNav } from "@/content/site";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Saltar al contenido
      </a>
      <div className="page-container flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Tita Crochet, inicio" className="py-2">
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="link-underline text-[0.8125rem] tracking-[0.03em] text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-[0.8125rem] tracking-[0.03em] text-ink lg:inline-flex"
          >
            <InstagramIcon />
            <span className="link-underline">Instagram</span>
          </a>
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
