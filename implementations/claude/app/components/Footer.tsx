import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-28 sm:pb-24 md:pb-0">
      {/* CTA */}
      <div className="bg-navy">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">편안한 진료, 미리 예약하세요</h2>
          <p className="mt-3 text-sm text-white/60">전화 또는 네이버로 간편 예약</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:031-546-0051" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              031-546-0051
            </a>
            <a href="https://booking.naver.com/booking/13/bizes/645159" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#03c75a] px-6 py-3.5 text-sm font-semibold text-white">
              네이버 예약
            </a>
            <a href="https://pf.kakao.com/_avxbGu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-sm font-semibold text-[#3A1D1D]">
              카톡 상담
            </a>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold text-text-main">동백유디치과</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-sub">유디치과의원 용인동백점<br />경기 용인시 기흥구 동백중앙로 273<br />훼미리프라자2 2층</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-text-main">진료시간</h3>
            <div className="mt-2 space-y-0.5 text-sm text-text-sub">
              <p>평일 09:30 - 18:30</p>
              <p>토요일 09:30 - 14:30</p>
              <p>점심 13:00 - 14:00 (토요일 없음)</p>
              <p>일요일·공휴일 휴진</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-text-main">바로가기</h3>
            <div className="mt-2 flex flex-col gap-1 text-sm text-text-sub">
              <Link href="/services" className="hover:text-navy">진료과목</Link>
              <Link href="/doctors" className="hover:text-navy">의료진</Link>
              <Link href="/location" className="hover:text-navy">오시는길</Link>
              <a href="https://blog.naver.com/ud_dental" target="_blank" rel="noopener noreferrer" className="hover:text-navy">블로그</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-6 text-xs text-text-sub">
          <p>의료기관명: 유디치과의원 용인동백점 | 대표전화: 031-546-0051</p>
          <p className="mt-1">© 2026 유디치과의원 용인동백점</p>
        </div>
      </div>
    </footer>
  );
}
