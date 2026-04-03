import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    title: "임플란트",
    subtitle: "구강외과전문의가 직접 식립합니다",
    image: "/images/services/implant.png",
    badge: "구강외과전문의 상주",
    desc: "구강외과전문의(조 원장님)가 3D CT로 골밀도·골폭·하치조신경 위치를 분석한 뒤, 진단–식립–보철까지 원스톱으로 진행합니다.",
    points: [
      "구강외과전문의 직접 진단 및 식립",
      "3D CT 촬영 기반 정밀 분석",
      "국내외 검증 임플란트 시스템",
      "식립 후 정기 관리 프로그램",
    ],
  },
  {
    title: "충치 · 신경치료",
    subtitle: "자연치아 보존을 최우선으로",
    image: "/images/services/cavity.png",
    desc: "디지털 X-ray로 충치 깊이를 정확히 파악합니다. 초기 레진 충전부터 근관치료 후 크라운까지, 단계별 맞춤 치료를 진행합니다.",
    points: [
      "초기 충치: 레진 충전 (당일 가능)",
      "중기: 세라믹 인레이·온레이",
      "신경치료 후 크라운 마무리",
      "자연치아 보존 최우선 판단",
    ],
  },
  {
    title: "잇몸치료",
    subtitle: "건강한 잇몸이 건강한 치아의 시작",
    image: "/images/services/gum.png",
    desc: "치주낭 깊이 측정과 정밀 검사로 잇몸 상태를 진단합니다. 스케일링부터 치주 수술까지 단계별로 관리합니다.",
    points: [
      "치주낭 깊이 정밀 측정",
      "초음파 스케일링 · 치근활택술",
      "진행된 치주염: 치주 수술",
      "3~6개월 유지관리 프로그램",
    ],
  },
  {
    title: "턱관절 · 보톡스",
    subtitle: "5종 전문 장비로 체계적 관리",
    image: "/images/services/tmj.png",
    badge: "보톡스 치료 가능",
    desc: "턱관절 장애 환자를 위해 5종 전문 장비로 물리치료를 진행하고, 이갈이·교근비대에는 보톡스를 병행합니다.",
    points: [
      "초음파 · TENS 물리치료",
      "냉각스프레이 (건강보험 적용)",
      "레이저 · Jaw Care 시스템",
      "보톡스: 치료 + 미용 목적",
    ],
  },
  {
    title: "예방 · 스케일링",
    subtitle: "치료보다 중요한 예방",
    image: "/images/services/prevention.png",
    desc: "건강보험 스케일링으로 치석을 제거하고, 불소 도포로 충치를 예방합니다. 6개월 간격 정기 검진을 권장합니다.",
    points: [
      "건강보험 스케일링 (연 1회)",
      "불소 도포 충치 예방",
      "6개월 정기 검진 권장",
      "개인별 구강 관리 교육",
    ],
  },
  {
    title: "사랑니 발치",
    subtitle: "구강외과전문의의 안전한 발치",
    image: "/images/services/wisdom.png",
    desc: "3D CT로 매복 깊이와 신경 거리를 정밀 분석한 뒤 안전하게 발치합니다. 완전매복·수평매복도 담당합니다.",
    points: [
      "3D CT 정밀 위치 분석",
      "구강외과전문의 직접 발치",
      "발치 후 관리 안내",
      "난이도별 맞춤 시술",
    ],
  },
];

const tmjTargets = [
  { label: "이갈이(브럭시즘)가 심한 분", sub: "수면 중 이갈이로 치아 마모·교근 비대가 진행된 경우" },
  { label: "만성 두통·안면통이 있는 분", sub: "턱관절 기능장애로 인한 측두부·후두부 두통" },
  { label: "턱관절 통증·잡음(클릭)이 있는 분", sub: "입 벌릴 때 딸깍 소리, 개구 제한, 턱 빠짐 증상" },
];

const tmjEquipment = [
  { name: "초음파 (Ultrasound)", desc: "1MHz 심부투열치료, 관절·근육 통증 완화", code: "보험코드 U2381" },
  { name: "TENS", desc: "저주파 전기자극, 근피로·통증 완화, 6채널 동시", code: "보험코드 U2382" },
  { name: "냉각스프레이", desc: "에틸클로라이드 분사신장치료, 근육 이완", code: "건강보험 적용" },
  { name: "Healing Laser", desc: "다이오드 레이저 + IR LED, 세포 재생 촉진", code: "" },
  { name: "Jaw Care System", desc: "턱관절 장애 종합 물리치료 시스템", code: "" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="진료과목"
        title="정확한 진단, 맞춤 치료"
        description="임플란트부터 예방치료까지, 각 분야 전문 원장님이 직접 진료합니다."
      />

      {/* ───── Apple-style Service Sections ───── */}
      {services.map((s, i) => {
        const isReversed = i % 2 === 1;
        return (
          <section
            key={s.title}
            className={`py-16 sm:py-24 lg:py-36 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-20 ${isReversed ? "lg:direction-rtl" : ""}`}>
                {/* 이미지 */}
                <ScrollReveal direction={isReversed ? "right" : "left"} duration={1}>
                  <div className={`${isReversed ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/[0.04]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width:1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                {/* 텍스트 */}
                <ScrollReveal direction={isReversed ? "left" : "right"} delay={200} duration={1}>
                  <div className={`${isReversed ? "lg:order-1" : ""}`}>
                    {s.badge && (
                      <span className="inline-block rounded-full bg-mint/10 px-4 py-1.5 text-sm font-semibold text-mint mb-4">
                        {s.badge}
                      </span>
                    )}
                    <p className="text-sm text-text-sub font-medium sm:text-lg">{s.subtitle}</p>
                    <h2 className="mt-2 text-3xl font-black text-navy sm:text-4xl lg:text-6xl tracking-tight">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-text-sub sm:mt-6 sm:text-lg lg:text-xl max-w-xl">
                      {s.desc}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {s.points.map((p, j) => (
                        <ScrollReveal key={p} delay={300 + j * 80} direction="up">
                          <li className="flex items-start gap-2 rounded-xl bg-white/80 px-3 py-3 shadow-sm ring-1 ring-black/[0.03] sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-white">
                              ✓
                            </span>
                            <span className="text-sm font-medium text-navy sm:text-base">{p}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* ───── 턱관절 치료 상세 ───── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-mint text-sm font-semibold mb-2 sm:text-lg sm:mb-3">TMJ Treatment</p>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight">
                턱관절 치료 상세
              </h2>
              <p className="mt-3 text-sm text-white/60 max-w-2xl mx-auto sm:mt-5 sm:text-lg lg:text-xl">
                전문 장비와 보톡스 치료를 병행해 턱관절 증상을 체계적으로 관리합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 대상 */}
            <ScrollReveal direction="left" duration={1}>
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm p-5 ring-1 ring-white/[0.08] sm:rounded-[2rem] sm:p-8 lg:p-10">
                <h3 className="text-xl font-bold mb-5 sm:text-2xl sm:mb-8">이런 분들에게 권합니다</h3>
                <div className="space-y-5">
                  {tmjTargets.map((t, j) => (
                    <ScrollReveal key={t.label} delay={j * 120} direction="up">
                      <div className="rounded-2xl bg-white/[0.05] px-6 py-5 ring-1 ring-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-white">✓</span>
                          <span className="text-base font-semibold">{t.label}</span>
                        </div>
                        <p className="mt-2 ml-10 text-sm text-white/50 leading-relaxed">{t.sub}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 p-6 ring-1 ring-mint/20">
                  <h4 className="text-lg font-bold">보톡스(보툴리눔톡신)</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    교근에 보톡스를 주입해 이갈이·이 악물기를 완화하고 사각턱 개선 효과도 기대할 수 있습니다. 치료 목적과 미용 목적 모두 시행합니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 장비 */}
            <ScrollReveal direction="right" delay={100} duration={1}>
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm p-5 ring-1 ring-white/[0.08] sm:rounded-[2rem] sm:p-8 lg:p-10">
                <h3 className="text-xl font-bold mb-5 sm:text-2xl sm:mb-8">전문 치료 장비</h3>
                <div className="space-y-4">
                  {tmjEquipment.map((eq, j) => (
                    <ScrollReveal key={eq.name} delay={j * 100} direction="up">
                      <div className="flex items-start gap-4 rounded-2xl bg-white/[0.05] px-6 py-5 ring-1 ring-white/[0.06] hover:bg-white/[0.08] transition-colors">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-mint">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-bold">{eq.name}</p>
                          <p className="mt-1 text-sm text-white/50">{eq.desc}</p>
                          {eq.code && <p className="mt-1 text-xs font-medium text-mint/80">{eq.code}</p>}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <ScrollReveal direction="scale">
            <p className="text-mint text-lg font-semibold mb-3">Consultation</p>
            <h2 className="text-3xl font-black text-navy sm:text-4xl lg:text-5xl tracking-tight">
              어떤 치료가 필요한지<br />잘 모르겠다면?
            </h2>
            <p className="mt-5 text-lg text-text-sub sm:text-xl">
              부담 없이 상담해 주세요. 정밀 검사 후 최적의 치료 방법을 안내드립니다.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:031-546-0051"
                className="rounded-full bg-navy px-6 sm:px-10 py-4.5 text-lg font-bold text-white hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                전화 상담
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-mint px-6 sm:px-10 py-4.5 text-lg font-bold text-white hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                온라인 문의
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
