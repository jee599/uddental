import Link from "next/link";
import { clinic, navItems } from "../lib/site-content";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__eyebrow">YONGIN DONGBAEK</span>
          <span className="brand__name">{clinic.shortName}</span>
        </Link>
        <nav aria-label="주요 메뉴" className="site-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__cta">
          <a href={`tel:${clinic.phone}`} className="button button--ghost">
            전화문의
          </a>
          <a href={clinic.links.naverBooking} className="button" target="_blank" rel="noreferrer">
            네이버 예약
          </a>
        </div>
      </div>
    </header>
  );
}
