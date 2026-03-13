import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy pb-24 text-white md:pb-10">
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
