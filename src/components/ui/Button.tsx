import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 text-sm tracking-[0.02em] transition-colors duration-300 ease-(--ease-soft)";

const pill = "min-h-11 rounded-full px-6";

const variants: Record<Variant, string> = {
  primary: `${pill} bg-moss text-cream hover:bg-moss-deep`,
  secondary: `${pill} border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream`,
  quiet: "min-h-11 text-ink link-underline",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

/** Internal or external link styled as a pill button. */
export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
    </Link>
  );
}
