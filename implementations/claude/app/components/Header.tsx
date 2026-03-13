"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "병원소개" },
  { href: "/services", label: "진료과목" },
  { href: "/doctors", label: "의료진" },
  { href: "/facilities", label: "시설/장비" },
  { href: "/location", label: "오시는길" },
  { href: "/contact", label: "상담/예약" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-navy">UD</span>
            <span className="text-sm font-medium text-navy">
              동백유디치과
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-mint transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://booking.naver.com/booking/13/bizes/645159"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-navy hover:border-mint hover:text-mint transition-colors"
            >
              네이버 예약
            </a>
            <a
              href="/contact"
              className="rounded-full bg-[#FEE500] px-4 py-2 text-sm font-semibold text-[#3A1D1D] hover:bg-[#f6dd00] transition-colors"
            >
              카톡 예약
            </a>
            <a
              href="tel:031-546-0051"
              className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-white hover:bg-mint/90 transition-colors"
            >
              전화 상담
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-bg-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <a
                href="https://booking.naver.com/booking/13/bizes/645159"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-navy px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                네이버 예약
              </a>
              <a
                href="/contact"
                className="rounded-lg bg-[#FEE500] px-3 py-2.5 text-center text-sm font-semibold text-[#3A1D1D]"
              >
                카톡 예약
              </a>
              <a
                href="tel:031-546-0051"
                className="rounded-lg bg-mint px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                전화 상담
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
