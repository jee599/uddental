import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Bar */}
      <div className="bg-mint">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-bold text-white">
            치아 건강이 걱정되신다면, 지금 상담하세요
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://booking.naver.com/booking/13/bizes/645159"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-navy hover:bg-gray-50 transition-colors"
            >
              네이버 예약
            </a>
            <a
              href="/contact"
              className="rounded-full bg-[#FEE500] px-6 py-2.5 text-sm font-bold text-[#3A1D1D] hover:bg-[#f6dd00] transition-colors"
            >
              카톡 예약
            </a>
            <a
              href="tel:031-546-0051"
              className="rounded-full border-2 border-white px-6 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              전화 상담
            </a>
          </div>
        </div>
      </div>

      {/* Footer Body */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">동백유디치과</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              유디치과의원 용인동백점
              <br />
              경기 용인시 기흥구 동백중앙로 273
              <br />
              훼미리프라자2 2층
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-3">진료시간</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>평일 09:30 – 18:30</p>
              <p>토요일 09:30 – 14:30</p>
              <p>점심시간 13:00 – 14:00 (토요일 없음)</p>
              <p>일요일/공휴일 휴진</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">바로가기</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/services" className="hover:text-mint transition-colors">
                진료과목
              </Link>
              <Link href="/location" className="hover:text-mint transition-colors">
                오시는길
              </Link>
              <Link href="/contact" className="hover:text-mint transition-colors">
                상담/예약
              </Link>
              <a
                href="https://blog.naver.com/ud_dental"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mint transition-colors"
              >
                블로그
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          <p>© 2026 유디치과의원 용인동백점. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
