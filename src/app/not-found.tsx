import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[60svh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-6 text-[3rem] md:text-[4.5rem]">Este punto se nos escapó.</h1>
      <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
        La página que buscás no existe o cambió de lugar.
      </p>
      <ButtonLink href="/catalogo" className="mt-10">
        Ver catálogo
      </ButtonLink>
    </section>
  );
}
