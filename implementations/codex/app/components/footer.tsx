import Link from "next/link";
import { clinic, navItems } from "../lib/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="section-label">Clinic</p>
          <h2 className="site-footer__title">{clinic.name}</h2>
          <p className="site-footer__text">{clinic.address}</p>
          <p className="site-footer__text">
            대표전화 <a href={`tel:${clinic.phone}`}>{clinic.phone}</a>
          </p>
        </div>
        <div>
          <p className="section-label">Menu</p>
          <div className="site-footer__links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="section-label">Reserve</p>
          <p className="site-footer__text">{clinic.hours.weekday}</p>
          <p className="site-footer__text">{clinic.hours.saturday}</p>
          <a href={clinic.links.naverBooking} className="button site-footer__button" target="_blank" rel="noreferrer">
            예약 바로가기
          </a>
        </div>
      </div>
    </footer>
  );
}
