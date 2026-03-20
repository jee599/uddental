"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm"
            : "bg-white/70 backdrop-blur-lg"
        } border-b border-gray-100`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo + 병원명 */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/brand/ud-logo.svg"
                alt="유디치과"
                width={118}
                height={28}
                className="h-7 w-auto"
                priority
              />
              <span className="hidden text-sm font-bold text-navy sm:inline">
                동백유디치과
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-navy transition-colors border-b-2 border-transparent hover:border-navy pb-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("focusReservation"))}
              className="hidden rounded-full bg-warm px-5 py-2 text-sm font-semibold text-white hover:bg-warm/90 transition-colors md:inline-flex"
            >
              예약하기
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
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
      </header>

      {/* Mobile Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden">
          {/* Close button */}
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/brand/ud-logo.svg"
                alt="유디치과"
                width={118}
                height={28}
                className="h-7 w-auto"
              />
              <span className="text-sm font-bold text-navy">동백유디치과</span>
            </Link>
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => setIsOpen(false)}
              aria-label="메뉴 닫기"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3.5 text-lg font-medium text-gray-800 hover:bg-bg-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-10">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event("focusReservation"));
                setIsOpen(false);
              }}
              className="w-full rounded-full bg-warm py-3.5 text-center text-base font-semibold text-white"
            >
              예약하기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
