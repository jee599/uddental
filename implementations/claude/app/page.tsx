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
      {/* ───── 1. Hero ───── */}
      <HeroBgPicker>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          {/* Glass card */}
          <div className="rounded-3xl border border-white/30 bg-white/95 px-6 py-10 shadow-2xl backdrop-blur-md sm:px-10 sm:py-14">
            <div className="inline-block rounded-full bg-navy/10 px-4 py-1.5 text-center lg:text-left">
              <span className="text-xs font-bold tracking-wide text-navy">
                용인 동백 · 예방 중심 치과
              </span>
            </div>
            <div className="mt-5">
              <HeroHeadlineRotator />
            </div>
            <p className="mt-5 text-center text-[15px] leading-relaxed text-text-sub sm:text-base lg:text-left">
              상담부터 사후관리까지 한 흐름으로 연결하는
              <br />
              <span className="font-semibold text-navy">신뢰 중심 진료 경험</span>을 제공합니다.
            </p>

            {/* Inline trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["3인 원장 체제", "구강외과전문의", "토요 진료"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint"
                >
                  {badge}
                </span>
              ))}
            </div>

            <MobileQuickActions className="mt-8" />
          </div>

          {/* Photo rotator */}
          <div className="relative">
            <HeroImageRotator />
          </div>
        </div>
      </HeroBgPicker>

      {/* ───── 2. Doctor Schedule ───── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-mint">Schedule</p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">원장별 진료시간</h2>
            <p className="mt-2 text-text-sub">3인 원장이 요일별로 전문 진료를 담당합니다</p>
          </div>

          {/* Doctor cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { name: "박 원장", role: "대표원장", color: "from-navy to-[#2a6cb8]", days: ["월", "화", "금", "토"], off: ["수", "목"], icon: "🦷" },
              { name: "권 원장", role: "원장", color: "from-[#1a5c96] to-[#2980b9]", days: ["월", "화", "수", "목"], off: ["금", "토"], icon: "🔬" },
              { name: "조 원장", role: "구강외과전문의", color: "from-mint to-[#0097a7]", days: [] as string[], off: [] as string[], special: "금요일 및 수술일", icon: "⚕️" },
            ].map((doc) => (
              <Link
                key={doc.name}
                href="/doctors"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${doc.color}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.color} text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <span role="img" aria-label={doc.role}>{doc.icon}</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-navy">{doc.name}</p>
                      <p className={`text-xs font-bold ${doc.role === "구강외과전문의" ? "text-mint" : "text-text-sub"}`}>
                        {doc.role}
                      </p>
                    </div>
                  </div>

                  {/* Schedule grid */}
                  {doc.days.length > 0 ? (
                    <div className="flex gap-1.5">
                      {["월", "화", "수", "목", "금", "토"].map((day) => {
                        const isWorking = doc.days.includes(day);
                        return (
                          <div key={day} className="flex-1 text-center">
                            <span className="block text-[10px] font-semibold text-text-sub mb-1.5">{day}</span>
                            <div className={`rounded-lg py-2 text-[11px] font-bold transition-all duration-200 ${
                              isWorking
                                ? `bg-gradient-to-br ${doc.color} text-white shadow-sm`
                                : "bg-gray-50 text-gray-300"
                            }`}>
                              {isWorking ? "●" : "—"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className={`rounded-xl bg-gradient-to-r ${doc.color} px-4 py-4 text-center`}>
                      <p className="text-sm font-bold text-white">{doc.special}</p>
                      <p className="mt-1 text-[11px] text-white/80">사전 예약 필수</p>
                    </div>
                  )}

                  {doc.off.length > 0 && (
                    <p className="mt-4 text-xs text-text-sub text-center">
                      휴진: <span className="font-semibold text-navy">{doc.off.join("·")}요일</span>
                    </p>
                  )}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-mint/10">
                  <svg className="h-4 w-4 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Reservation banner */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-navy to-[#2a6cb8] px-6 py-5 shadow-lg sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <p className="text-sm text-white/90">
                <span className="font-bold text-white">네이버 예약</span> 요청 시 병원에서 스케줄 확인 후 예약을 확정해 드립니다.
              </p>
            </div>
            <a
              href="https://booking.naver.com/booking/13/bizes/645159"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-navy shadow-md hover:bg-mint hover:text-white transition-all duration-200 sm:mt-0"
            >
              네이버 예약
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Journey steps */}
          <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "상담", desc: "증상 확인 및 내원 일정 안내", icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" },
              { step: "02", title: "정밀진단", desc: "디지털 장비로 구강 상태 분석", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
              { step: "03", title: "맞춤치료", desc: "불필요한 치료 없이 필요한 진료만", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" },
              { step: "04", title: "사후관리", desc: "정기검진/스케일링 리마인드", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" },
            ].map((item) => (
              <div key={item.step} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-mint/40 hover:-translate-y-1 transition-all duration-300">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 group-hover:bg-mint/10 transition-colors">
                  <svg className="h-5 w-5 text-navy group-hover:text-mint transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <p className="text-xs font-bold text-mint">{item.step}</p>
                <p className="mt-1 text-sm font-bold text-navy">{item.title}</p>
                <p className="mt-1 text-xs text-text-sub leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. Services — Bento Grid ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-mint">Services</p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">진료과목</h2>
            <p className="mt-2 text-text-sub">어떤 치료가 필요하세요?</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
              <Link
                key={s.title}
                href="/services"
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-mint/40 transition-all duration-300"
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
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-warm/10 px-3 py-1 text-xs font-bold text-warm">
                    <span className="h-1.5 w-1.5 rounded-full bg-warm animate-pulse" />
                    {s.highlight}
                  </span>
                )}
                <p className="text-sm text-text-sub leading-relaxed line-clamp-3">
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

      {/* ───── 4. Gallery ───── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-mint">Facilities</p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">시설 안내</h2>
            <p className="mt-2 text-text-sub">깨끗하고 쾌적한 진료 환경</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm font-bold tracking-wide">
                    {img.alt}
                  </p>
                  <div className="mt-2 flex items-center text-xs text-white/70 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    크게 보기
                    <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-navy shadow-sm hover:border-mint hover:text-mint hover:shadow-md transition-all duration-200"
            >
              시설 더 보기
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── 5. Trust Section (NEW) ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-mint">Why Us</p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              왜 동백유디치과인가?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {[
              {
                num: "3인",
                label: "원장 체제",
                desc: "각 분야 전문 원장이 요일별로 진료합니다",
                icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                color: "from-navy to-[#2a6cb8]",
              },
              {
                num: "전문의",
                label: "구강외과전문의 상주",
                desc: "임플란트 식립부터 발치까지 전문 진료",
                icon: "M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0L11.42 9.17l5.66-5.66a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-8.18 8.18a.75.75 0 01-1.06 0z",
                color: "from-mint to-[#0097a7]",
              },
              {
                num: "5종",
                label: "턱관절 전문 장비",
                desc: "초음파·TENS·레이저 등 전문 물리치료 장비",
                icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
                color: "from-warm to-[#4f46e5]",
              },
              {
                num: "보험",
                label: "건강보험 스케일링",
                desc: "연 1회 건강보험 적용 스케일링 진행",
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
                color: "from-navy to-mint",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <p className="text-2xl font-black text-navy">{item.num}</p>
                <p className="mt-1 text-sm font-bold text-navy">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-text-sub">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 6. Hours & Location ───── */}
      <section id="home-location" className="scroll-mt-24 py-16 sm:py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Hours */}
            <div id="home-hours" className="scroll-mt-24 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
              <div className="bg-gradient-to-r from-navy to-[#2a6cb8] px-8 py-5">
                <h2 className="text-xl font-bold text-white">진료시간</h2>
              </div>
              <div className="p-8">
                <table className="w-full text-base sm:text-lg">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { day: "평일", time: "09:30 – 18:30", note: "" },
                      { day: "토요일", time: "09:30 – 14:30", note: "점심 없이 연속" },
                      { day: "점심시간", time: "13:00 – 14:00", note: "토요일 제외" },
                      { day: "일/공휴일", time: "휴진", note: "" },
                    ].map((row) => (
                      <tr key={row.day} className="group">
                        <td className="py-4 font-semibold text-navy w-28">
                          {row.day}
                        </td>
                        <td className="py-4 text-text-main">{row.time}</td>
                        <td className="py-4 text-right text-sm">
                          {row.note && (
                            <span className="rounded-full bg-mint/10 px-2.5 py-1 text-xs font-semibold text-mint">
                              {row.note}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Location */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
              <div className="bg-gradient-to-r from-mint to-[#0097a7] px-8 py-5">
                <h2 className="text-xl font-bold text-white">오시는길</h2>
              </div>
              <div className="p-8">
                <div className="space-y-5 text-base sm:text-lg">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                      <svg className="h-4 w-4 text-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-sub">주소</p>
                      <p className="text-sm text-navy font-medium mt-0.5">
                        경기 용인시 기흥구 동백중앙로 273 훼미리프라자2 2층
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                      <svg className="h-4 w-4 text-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.008M3.375 14.25H6.75m11.25 0h.008M17.25 14.25H21M6.75 14.25v-3.375A3.375 3.375 0 0110.125 7.5H12m5.25 6.75v-1.875A3.375 3.375 0 0013.875 9H12m0 0V7.5m0 0h1.875" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-sub">대중교통</p>
                      <p className="text-sm text-navy font-medium mt-0.5">
                        에버라인 어정역 1번출구에서 약 1,000m
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                      <svg className="h-4 w-4 text-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-sub">주차</p>
                      <p className="text-sm text-navy font-medium mt-0.5">
                        건물 지하주차장 이용 가능
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/location"
                    className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/5 px-5 py-2 text-sm font-semibold text-mint hover:bg-mint hover:text-white transition-all duration-200"
                  >
                    지도 보기
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="mb-2 text-xs font-semibold text-navy">SNS</p>
                    <div className="flex flex-wrap gap-2">
                      <a href="https://www.instagram.com/ud_dongbak/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-sub hover:border-mint hover:text-navy transition-colors">
                        <img src="https://cdn.simpleicons.org/instagram" alt="동백점 인스타그램" className="h-3.5 w-3.5" /> 동백 인스타
                      </a>
                      <a href="https://blog.naver.com/PostList.naver?blogId=ud_dental&from=postList&categoryNo=94" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-sub hover:border-mint hover:text-navy transition-colors">
                        <img src="https://cdn.simpleicons.org/naver/03C75A" alt="동백점 네이버 블로그" className="h-3.5 w-3.5" /> 동백 블로그
                      </a>
                      <a href="http://pf.kakao.com/_avxbGu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-sub hover:border-mint hover:text-navy transition-colors">
                        <img src="https://cdn.simpleicons.org/kakaotalk/3C1E1E" alt="카카오 채널" className="h-3.5 w-3.5" /> 카카오채널
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Notice */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-mint/20 bg-white px-6 py-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-4">
            <div>
              <p className="text-sm font-bold text-navy">예약 안내</p>
              <p className="mt-1 text-sm text-text-sub">
                네이버 예약 요청 시, 병원에서 스케줄을 확인한 후 예약 확정 안내를 드립니다.
              </p>
            </div>
            <a
              href="tel:031-546-0051"
              className="mt-3 inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-mint transition-colors sm:mt-0"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              031-546-0051
            </a>
          </div>
        </div>
      </section>

      {/* ───── 7. FAQ ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-mint">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">자주 묻는 질문</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-semibold text-navy hover:bg-gray-50/50 transition-colors sm:text-base">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-mint/10 text-xs font-bold text-mint">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-text-sub group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-text-sub">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. Bottom CTA ───── */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        {/* Decorative bg elements */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-mint/10" />
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-warm/10" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            건강한 치아, 지금 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            3인 원장 체제로 각 분야 전문 진료를 제공합니다.
            부담 없이 상담부터 시작해 보세요.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="https://booking.naver.com/booking/13/bizes/645159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-warm px-8 py-3.5 text-base font-bold text-white shadow-lg hover:brightness-110 transition-all duration-200 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              네이버 예약
            </a>
            <a
              href="tel:031-546-0051"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all duration-200 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              031-546-0051
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            평일 09:30–18:30 · 토요일 09:30–14:30 · 일/공휴일 휴진
          </p>
        </div>
      </section>
    </>
  );
}
