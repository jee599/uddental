import Image from "next/image";
import Link from "next/link";
import HeroHeadlineRotator from "./components/HeroHeadlineRotator";
import HeroImageRotator from "./components/HeroImageRotator";
import HeroBgPicker from "./components/HeroBgPicker";
import MobileQuickActions from "./components/MobileQuickActions";

const services = [
  {
    title: "임플란트",
    desc: "구강외과전문의가 직접 진단부터 수술까지 진행합니다. 정밀 CT 분석과 검증된 재료로 기능과 심미를 함께 고려합니다.",
    highlight: "구강외과전문의 상주",
  },
  {
    title: "충치/신경치료",
    desc: "초기 충치부터 심한 손상까지, 최대한 자연치아를 보존하는 치료를 합니다.",
  },
  {
    title: "잇몸치료",
    desc: "잇몸 출혈, 붓기, 시린 증상을 정밀 진단하고 단계별로 치료합니다.",
  },
  {
    title: "턱관절 치료",
    desc: "초음파, TENS, 레이저 등 전문 장비와 보톡스 치료를 병행합니다. 이갈이·두통·턱관절 통증이 있는 분에게 권합니다.",
  },
  {
    title: "예방/스케일링",
    desc: "정기 검진과 스케일링으로 큰 치료 전에 미리 예방합니다.",
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
    a: "네, 건물 지하주차장을 이용하실 수 있습니다.",
  },
  {
    q: "토요일에도 진료하나요?",
    a: "토요일 오전 9시 30분부터 오후 2시 30분까지 진료합니다. 점심시간 없이 연속 진료합니다.",
  },
  {
    q: "예약 없이 방문해도 되나요?",
    a: "예약 없이도 방문 가능하지만, 대기 시간을 줄이려면 네이버 예약이나 전화 예약을 추천드립니다.",
  },
  {
    q: "턱관절 치료도 가능한가요?",
    a: "초음파, TENS, 레이저 등 전문 장비와 보톡스 치료를 병행합니다. 이갈이, 두통, 턱관절 통증이 있으신 분은 상담해 주세요.",
  },
  {
    q: "임플란트 상담만 받을 수 있나요?",
    a: "네, 부담 없이 상담만 받으실 수 있습니다. 구강외과전문의가 직접 정밀 검사 후 치료 계획과 비용을 안내드립니다.",
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


      {/* Journey */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-7 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "#181D61" }}>진료 여정</h2>
            <p className="mt-2 text-base sm:text-lg font-medium text-mint">상담부터 사후관리까지</p>
          </div>
          {/* Mobile: horizontal scroll snap / Desktop: grid */}
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              ["01 상담", "증상 확인 및 내원 일정 안내"],
              ["02 정밀진단", "디지털 장비로 구강 상태 분석"],
              ["03 맞춤치료", "불필요한 치료 없이 필요한 진료만"],
              ["04 사후관리", "정기검진/스케일링 리마인드"],
            ].map(([step, desc]) => (
              <div key={step} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm hover:shadow-md hover:border-mint/40 hover:-translate-y-1 transition-all duration-300">
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
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#181D61" }}>진료과목</h2>
            <p className="mt-2 text-base sm:text-lg font-medium text-mint">어떤 치료가 필요하세요?</p>
          </div>
          {/* Mobile: horizontal scroll snap / Desktop: grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, index) => (
              <Link
                key={s.title}
                href="/services"
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:border-mint hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-navy group-hover:bg-mint group-hover:text-white transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy group-hover:text-mint transition-colors">
                  {s.title}
                </h3>
                {"highlight" in s && s.highlight && (
                  <span className="mt-2 inline-block rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
                    {s.highlight}
                  </span>
                )}
                <p className="mt-2 text-sm text-text-sub leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#181D61" }}>시설 안내</h2>
            <p className="mt-2 text-base sm:text-lg font-medium text-mint">깨끗하고 쾌적한 진료 환경</p>
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
            <div id="home-hours" className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-sm">
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
            <div className="rounded-2xl bg-white p-8 shadow-sm">
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
          <div className="text-center mb-8">
            <p className="text-mint font-semibold text-sm mb-2">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              자주 묻는 질문
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-100 overflow-hidden"
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
