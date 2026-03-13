"use client";

import { useEffect, useState } from "react";

export default function FloatingReservation() {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const handler = () => {
      setFocused(true);
      setTimeout(() => setFocused(false), 1200);
    };
    window.addEventListener("focusReservation", handler);
    return () => window.removeEventListener("focusReservation", handler);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 flex justify-center px-2 md:bottom-6">
      <div className={`floating-cta w-full max-w-xl rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-2xl backdrop-blur md:w-auto md:min-w-[420px] ${focused ? "floating-cta-focus" : ""}`}>
        <p className="mb-2 rounded-lg bg-mint py-1.5 text-center text-xs font-bold text-white">예약 / 상담하기</p>
        <div className="grid grid-cols-3 gap-2 md:flex md:items-center md:justify-center">
          <a
            href="https://booking.naver.com/booking/13/bizes/645159"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 min-w-[104px] items-center justify-center gap-1 rounded-xl border border-gray-200 px-3 text-sm font-semibold text-navy hover:border-mint hover:text-mint md:h-10 md:text-xs"
          >
            <img src="https://cdn.simpleicons.org/naver/03C75A" alt="네이버" className="h-4 w-4" />
            네이버
          </a>
          <a
            href="/contact"
            className="inline-flex h-11 min-w-[104px] items-center justify-center gap-1 rounded-xl bg-[#FEE500] px-3 text-sm font-semibold text-[#3A1D1D] hover:bg-[#f6dd00] md:h-10 md:text-xs"
          >
            <img src="https://cdn.simpleicons.org/kakaotalk/3C1E1E" alt="카톡" className="h-4 w-4" />
            카톡
          </a>
          <a
            href="tel:031-546-0051"
            className="inline-flex h-11 min-w-[104px] items-center justify-center gap-1 rounded-xl border border-red-200 bg-white px-3 text-sm font-semibold text-black hover:bg-red-50 md:h-10 md:text-xs"
          >
            <span aria-hidden="true" className="text-red-500">📞</span>
전화연결
          </a>
        </div>
      </div>
    </div>
  );
}
