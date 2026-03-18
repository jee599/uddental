"use client";

import Image from "next/image";
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
          <Link href="/" className="flex items-center">
            <Image
              src="/images/brand/ud-logo.svg"
              alt="유디치과"
              width={118}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("focusReservation"))}
            className="hidden rounded-full bg-mint px-4 py-2 text-sm font-semibold text-white hover:bg-mint/90 md:inline-flex"
          >
            예약하기
          </button>

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
            <div className="mt-3 border-t border-gray-100 pt-3">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new Event("focusReservation"));
                  setIsOpen(false);
                }}
                className="w-full rounded-lg bg-mint px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                예약하기
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
