import Image from "next/image";
import Link from "next/link";
import HeroHeadlineRotator from "./components/HeroHeadlineRotator";
import HeroImageRotator from "./components/HeroImageRotator";
import HeroBgPicker from "./components/HeroBgPicker";
import MobileQuickActions from "./components/MobileQuickActions";

const services = [
  {
    title: "임플란트",
    desc: "구강외과전문의가 3D CT로 골밀도·신경 위치를 분석한 뒤, 진단부터 식립·보철까지 원스톱으로 진행합니다. 국내외 검증된 임플란트 시스템을 사용하며, 식립 후 정기 관리 프로그램을 운영합니다.",
    highlight: "구강외과전문의 상주",
  },
  {
    title: "충치/신경치료",
    desc: "초기 충치는 레진 충전, 중기는 인레이·온레이, 신경까지 진행된 경우 근관치료 후 크라운으로 마무리합니다. 자연치아 보존을 최우선으로 치료 범위를 결정합니다.",
  },
  {
    title: "잇몸치료",
    desc: "잇몸 출혈·붓기·구취 등 치주질환을 정밀 검사 후 단계별로 치료합니다. 초음파 스케일링, 치주 소파술, 필요 시 잇몸 수술까지 진행하며 재발 방지를 위한 유지관리를 안내합니다.",
  },
  {
    title: "턱관절 · 보톡스",
    desc: "초음파·TENS·냉각스프레이·Perfect Healing Laser·Jaw Care System 등 5종 전문 장비로 물리치료를 진행하고, 이갈이·턱관절 통증에는 보톡스(보툴리눔톡신)를 병행합니다. 미용 목적 보톡스도 가능합니다.",
    highlight: "보톡스 치료 가능",
  },
  {
    title: "예방/스케일링",
    desc: "건강보험 적용 스케일링(연 1회)과 불소 도포로 충치·치주질환을 예방합니다. 6개월 간격 정기 검진을 권장하며, 올바른 양치법과 구강위생 관리를 함께 안내합니다.",
  },
];

const galleryImages = [
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg",
    alt: "동백유디치과 접수 데스크",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg",
    alt: "동백유디치과 대기실",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg",
    alt: "동백유디치과 진료실",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 008.jpeg",
    alt: "Vatech CT 장비",
  },
];

const faqs = [
  {
    q: "주차가 가능한가요?",
    a: "건물 지하주차장을 이용하실 수 있습니다. 내원 시 접수데스크에 말씀해 주시면 주차 안내를 도와드립니다.",
  },
  {
    q: "토요일에도 진료하나요?",
    a: "토요일은 오전 9:30부터 오후 2:30까지 점심시간 없이 연속 진료합니다. 박 원장이 토요일 진료를 담당합니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "전화(031-546-0051) 또는 네이버 예약으로 접수 가능합니다. 네이버 예약 요청 후 병원에서 스케줄을 확인하고 예약 확정 안내를 드립니다.",
  },
  {
    q: "턱관절 치료와 보톡스도 가능한가요?",
    a: "초음파, TENS, 냉각스프레이(Cloretilo), Perfect Healing Laser, Jaw Care System 등 5종 전문 장비로 물리치료를 진행합니다. 이갈이·두통·턱관절 통증에는 보톡스(보툴리눔톡신)를 병행하며, 미용 목적 보톡스도 시행합니다.",
  },
  {
    q: "임플란트 상담만 받을 수 있나요?",
    a: "네, 부담 없이 상담만 가능합니다. 구강외과전문의(조 원장)가 3D CT 촬영 후 골밀도와 신경 위치를 분석하고, 환자에게 맞는 치료 계획과 예상 비용을 안내드립니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroBgPicker>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          {/* Glass card with text */}
          <div className="rounded-3xl border border-gray-200 bg-white/95 px-5 py-8 shadow-2xl backdrop-blur-sm sm:px-10 sm:py-12">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 lg:text-left">
              용인 동백 · 예방 중심 치과
            </p>
            <HeroHeadlineRotator />
            <p className="mt-4 text-center text-sm leading-relaxed text-text-sub sm:text-base lg:text-left">
              상담부터 사후관리까지 한 흐름으로 연결하는
              <br />
              신뢰 중심 진료 경험을 제공합니다.
            </p>

            <MobileQuickActions className="mt-8" />
          </div>

          {/* Photo rotator */}
          <div className="relative">
            <HeroImageRotator />
          </div>
        </div>
      </HeroBgPicker>

      {/* Doctor Schedule + Journey */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">진료 안내</h2>
            <p className="mt-2 text-base sm:text-lg text-text-sub">원장님별 진료 요일</p>
          </div>

          {/* Doctor schedule cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "박 원장", role: "대표원장", color: "from-navy to-[#2a6cb8]", days: ["월", "화", "금", "토"], off: ["수", "목"], icon: "🦷" },
              { name: "권 원장", role: "원장", color: "from-[#1a5c96] to-[#2980b9]", days: ["월", "화", "수", "목"], off: ["금", "토"], icon: "🔬" },
              { name: "조 원장", role: "구강외과전문의", color: "from-mint to-[#0097a7]", days: [] as string[], off: [] as string[], special: "금요일 및 수술일", icon: "⚕️" },
            ].map((doc) => (
              <Link
                key={doc.name}
                href="/doctors"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${doc.color}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${doc.color} text-xl shadow-md transition-transform duration-300 group-hover:scale-105`}>
                      <span role="img" aria-label={doc.role}>{doc.icon}</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-navy">{doc.name}</p>
                      <p className={`text-xs font-bold ${doc.role === "구강외과전문의" ? "text-mint" : "text-text-sub"}`}>{doc.role}</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  {doc.days.length > 0 ? (
                    <div className="flex gap-1.5">
                      {["월", "화", "수", "목", "금", "토"].map((day) => {
                        const isWorking = doc.days.includes(day);
                        return (
                          <div key={day} className="flex-1 text-center">
                            <span className="block text-[10px] font-semibold text-text-sub mb-1">{day}</span>
                            <div className={`rounded-lg py-1.5 text-[11px] font-bold transition-all ${
                              isWorking
                                ? `bg-gradient-to-br ${doc.color} text-white shadow-sm`
                                : "bg-gray-100 text-gray-300"
                            }`}>
                              {isWorking ? "●" : "—"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className={`rounded-xl bg-gradient-to-r ${doc.color} px-4 py-3 text-center`}>
                      <p className="text-sm font-bold text-white">{doc.special}</p>
                      <p className="text-[11px] text-white/70 mt-0.5">사전 예약 필수</p>
                    </div>
                  )}

                  {doc.off.length > 0 && (
                    <p className="mt-3 text-xs text-text-sub text-center">
                      휴진: <span className="font-semibold text-navy">{doc.off.join("·")}요일</span>
                    </p>
                  )}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="h-4 w-4 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Reservation notice inline */}
          <div className="mt-6 rounded-2xl border border-mint/20 bg-mint/5 px-5 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm text-text-sub">
              <span className="font-bold text-navy">네이버 예약</span> 요청 시 병원에서 스케줄 확인 후 예약을 확정해 드립니다.
            </p>
            <a
              href="https://booking.naver.com/booking/13/bizes/645159"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 rounded-full bg-navy px-5 py-2 text-xs font-bold text-white hover:bg-mint transition-colors"
            >
              네이버 예약
            </a>
          </div>

          {/* Journey steps */}
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              ["01 상담", "증상 확인 및 내원 일정 안내"],
              ["02 정밀진단", "디지털 장비로 구강 상태 분석"],
              ["03 맞춤치료", "불필요한 치료 없이 필요한 진료만"],
              ["04 사후관리", "정기검진/스케일링 리마인드"],
            ].map(([step, desc]) => (
              <div key={step} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 hover:shadow-md hover:border-mint/40 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-bold text-navy">{step}</p>
                <p className="mt-2 text-sm text-text-sub">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">진료과목</h2>
            <p className="mt-2 text-base sm:text-lg text-text-sub">어떤 치료가 필요하세요?</p>
          </div>
          {/* Mobile: horizontal scroll snap / Desktop: grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, index) => (
              <Link
                key={s.title}
                href="/services"
                className="group relative rounded-2xl border border-gray-200 shadow-md bg-white p-6 hover:border-mint hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-sm font-bold text-navy group-hover:bg-mint group-hover:text-white transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-navy group-hover:text-mint transition-colors">
                    {s.title}
                  </h3>
                </div>
                {"highlight" in s && s.highlight && (
                  <span className="mb-2 inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold text-white">
                    {s.highlight}
                  </span>
                )}
                <p className="text-[15px] text-text-sub leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold text-mint opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기
                  <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">시설 안내</h2>
            <p className="mt-2 text-base sm:text-lg text-text-sub">깨끗하고 쾌적한 진료 환경</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center text-sm font-semibold text-mint hover:text-navy transition-colors"
            >
              시설 더 보기
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="home-location" className="scroll-mt-24 py-16 sm:py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Hours */}
            <div id="home-hours" className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold text-navy mb-6">진료시간</h2>
              <table className="w-full text-base sm:text-lg">
                <tbody className="divide-y divide-gray-100">
                  {[
                    { day: "평일", time: "09:30 – 18:30", note: "" },
                    { day: "토요일", time: "09:30 – 14:30", note: "점심 없이 연속" },
                    { day: "점심시간", time: "13:00 – 14:00", note: "토요일 제외" },
                    { day: "일/공휴일", time: "휴진", note: "" },
                  ].map((row) => (
                    <tr key={row.day}>
                      <td className="py-3.5 font-semibold text-navy w-28">
                        {row.day}
                      </td>
                      <td className="py-3.5 text-text-main">{row.time}</td>
                      <td className="py-3.5 text-text-sub text-right text-sm">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Location */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold text-navy mb-6">오시는길</h2>
              <div className="space-y-5 text-base sm:text-lg">
                <div>
                  <p className="font-semibold text-navy">주소</p>
                  <p className="text-text-sub mt-1">
                    경기 용인시 기흥구 동백중앙로 273 훼미리프라자2 2층
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-navy">대중교통</p>
                  <p className="text-text-sub mt-1">
                    에버라인 어정역 1번출구에서 약 1,000m
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-navy">주차</p>
                  <p className="text-text-sub mt-1">
                    건물 지하주차장 이용 가능
                  </p>
                </div>
                <Link
                  href="/location"
                  className="inline-flex items-center text-base font-semibold text-mint hover:text-navy transition-colors"
                >
                  지도 보기
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>

                <div className="pt-3 border-t border-gray-100">
                  <p className="mb-2 text-xs font-semibold text-navy">SNS</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.instagram.com/ud_dongbak/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-sub hover:border-mint hover:text-navy">
                      <img src="https://cdn.simpleicons.org/instagram" alt="동백점 인스타그램" className="h-3.5 w-3.5" /> 동백 인스타
                    </a>
                    <a href="https://blog.naver.com/PostList.naver?blogId=ud_dental&from=postList&categoryNo=94" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-sub hover:border-mint hover:text-navy">
                      <img src="https://cdn.simpleicons.org/naver/03C75A" alt="동백점 네이버 블로그" className="h-3.5 w-3.5" /> 동백 블로그
                    </a>
                    <a href="http://pf.kakao.com/_avxbGu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-sub hover:border-mint hover:text-navy">
                      <img src="https://cdn.simpleicons.org/kakaotalk/3C1E1E" alt="카카오 채널" className="h-3.5 w-3.5" /> 카카오채널
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Notice */}
          <div className="mt-6 rounded-2xl border border-mint/30 bg-mint/5 px-6 py-4">
            <p className="text-sm font-semibold text-navy">예약 안내</p>
            <p className="mt-1 text-sm text-text-sub">
              네이버 예약 요청 시, 병원에서 스케줄을 확인한 후 예약 확정 안내를 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">FAQ</h2>
            <p className="mt-2 text-base sm:text-lg text-text-sub">
              자주 묻는 질문
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-navy hover:bg-bg-light transition-colors">
                  {faq.q}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-text-sub group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-text-sub leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
