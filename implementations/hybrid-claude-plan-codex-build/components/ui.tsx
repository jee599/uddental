import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, copy, children }: SectionProps) {
  return (
    <section className="shell py-16 sm:py-20">
      <div className="max-w-3xl">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title mt-4">{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function CTAButton({
  href,
  children,
  secondary,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        secondary
          ? "inline-flex items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-navy)] transition hover:border-[color:var(--color-mint)] hover:text-[color:var(--color-navy-soft)]"
          : "inline-flex items-center justify-center rounded-full bg-[color:var(--color-navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-navy-soft)]"
      }
    >
      {children}
    </Link>
  );
}

export function PhotoCard({
  src,
  alt,
  title,
  copy,
  priority,
}: {
  src: string;
  alt: string;
  title?: string;
  copy?: string;
  priority?: boolean;
}) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
      </div>
      {title || copy ? (
        <div className="p-5">
          {title ? <h3 className="text-lg font-semibold text-[color:var(--color-navy)]">{title}</h3> : null}
          {copy ? <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">{copy}</p> : null}
        </div>
      ) : null}
    </article>
  );
}
