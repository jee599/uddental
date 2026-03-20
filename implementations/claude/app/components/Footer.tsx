import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy pb-24 text-white md:pb-10">
      {/* CTA Banner */}
      <div className="bg-navy-light">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            지금 바로 상담하세요
          </h2>
          <p className="mt-2 text-white/70">
            편안한 진료를 위해 사전 예약을 권장합니다
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:031-546-0051"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              031-546-0051
            </a>
            <a
              href="https://m.place.naver.com/hospital/1139172960/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#03c75a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#02b351] transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
              </svg>
              네이버 예약
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
            <p className="text-sm text-white/75 leading-relaxed">
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
            <div className="text-sm text-white/75 space-y-1">
              <p>평일 09:30 – 18:30</p>
              <p>토요일 09:30 – 14:30</p>
              <p>점심시간 13:00 – 14:00 (토요일 없음)</p>
              <p>일요일/공휴일 휴진</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">바로가기</h3>
            <div className="flex flex-col gap-2 text-sm text-white/75">
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

        {/* Legal */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-xs text-white/50">
          <div className="space-y-1">
            <p>의료기관명: 유디치과의원 용인동백점 | 대표자: (임시) 홍길동</p>
            <p>사업자등록번호: (임시) 000-00-00000 | 대표전화: 031-546-0051</p>
            <p>광고 심의 관련: (임시) 심의 대상 문구/이미지 사용 시 사전 심의 후 심의번호 기재 예정</p>
          </div>
          <p className="shrink-0">© 2026 유디치과의원 용인동백점</p>
        </div>
      </div>
    </footer>
  );
}
