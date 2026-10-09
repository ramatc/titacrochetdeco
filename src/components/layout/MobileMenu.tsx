"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { instagram, mainNav } from "@/content/site";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink"
      >
        {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-cream"
      >
        <nav aria-label="Principal" className="page-container pb-8 pt-4">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.href} className="border-b border-line/70">
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="display block py-4 text-[1.75rem] aria-[current=page]:text-clay"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-ink"
          >
            <InstagramIcon />@{instagram.handle}
          </a>
        </nav>
      </div>
    </div>
  );
}
