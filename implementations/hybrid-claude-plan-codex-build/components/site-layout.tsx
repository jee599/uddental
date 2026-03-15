import Link from "next/link";
import { navigation, site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-muted)]">UD Dental</p>
          <p className="truncate text-lg font-semibold text-[color:var(--color-navy)]">{site.shortName}</p>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-[color:var(--color-muted)] lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--color-navy)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${site.phone}`}
          className="rounded-full bg-[color:var(--color-mint)] px-4 py-2 text-sm font-semibold text-[color:var(--color-navy)]"
        >
          {site.phone}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-white">
      <div className="shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-[color:var(--color-navy)]">{site.name}</p>
          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">{site.address}</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">대표번호 {site.phone} · 팩스 {site.fax}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-navy)]">진료시간</p>
          <div className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
            {site.hours.map((item) => (
              <p key={item.label}>
                {item.label} {item.value}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-navy)]">바로가기</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--color-muted)]">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
