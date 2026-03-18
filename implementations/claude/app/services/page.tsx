import Link from "next/link";
import PageHero from "../components/PageHero";

const services = [
  {
    title: "임플란트",
    category: "구강외과",
    highlight: "구강외과전문의 상주",
    desc: "구강외과전문의(조 원장)가 3D CT로 골밀도·골폭·하치조신경 위치를 분석한 뒤, 진단–식립–보철까지 원스톱으로 진행합니다. 국내외 검증된 임플란트 시스템을 사용하며, 식립 후 3·6·12개월 정기 검진 프로그램을 운영합니다.",
    details: [
      "구강외과전문의 직접 진단 및 식립",
      "3D CT 촬영 기반 골밀도·신경 위치 분석",
      "국내외 검증 임플란트 시스템 사용",
      "식립 후 3·6·12개월 정기 관리 프로그램",
    ],
  },
  {
    title: "충치/신경치료",
    category: "보존과",
    desc: "디지털 X-ray로 충치 깊이를 정확히 파악한 뒤, 초기 충치는 레진 충전, 중기는 세라믹 인레이·온레이, 신경까지 진행된 경우 근관치료 후 크라운으로 마무리합니다. 자연치아 보존을 최우선 원칙으로 치료 범위를 결정합니다.",
    details: [
      "초기 충치: 레진 충전 (당일 치료 가능)",
      "중기 충치: 세라믹 인레이·온레이 보철",
      "심한 충치: 근관(신경)치료 후 크라운",
      "자연치아 보존을 최우선으로 판단",
    ],
  },
  {
    title: "잇몸치료",
    category: "치주과",
    desc: "치주낭 깊이 측정과 X-ray 검사로 잇몸 상태를 정밀 진단합니다. 초음파 스케일링으로 치석을 제거하고, 깊은 치주낭에는 치근활택술(SRP)을 시행합니다. 진행된 치주염에는 치주 수술을 병행하며, 3~6개월 간격 유지관리로 재발을 방지합니다.",
    details: [
      "치주낭 깊이 측정 및 정밀 검사",
      "초음파 스케일링 및 치근활택술(SRP)",
      "진행된 치주염: 치주 수술 (필요 시)",
      "3~6개월 간격 유지관리 및 재발 방지",
    ],
  },
  {
    title: "턱관절 · 보톡스",
    category: "구강외과",
    highlight: "보톡스 치료 가능",
    desc: "턱관절 장애(TMD) 환자를 위해 5종 전문 장비로 물리치료를 진행하고, 이갈이·교근비대·턱관절 통증에는 보톡스(보툴리눔톡신)를 병행합니다. 미용 목적 보톡스도 시행하며, 냉각스프레이(Cloretilo) 분사신장치료는 건강보험이 적용됩니다.",
    details: [
      "초음파(Ultrasound): 심부투열치료, 관절 통증 완화 (보험코드 U2381)",
      "TENS: 저주파 전기자극으로 근피로·통증 완화, 근육 재교육",
      "냉각스프레이(Cloretilo): 에틸클로라이드 분사신장치료, 건강보험 적용 (보험코드 MX032)",
      "Perfect Healing Laser: 고성능 다이오드 레이저 + IR LED, 통증·부종·염증 완화",
      "Jaw Care System Premium: 턱관절 장애 종합 물리치료 시스템",
      "보톡스(보툴리눔톡신): 이갈이·교근비대·턱관절 통증 치료 + 미용 목적",
    ],
  },
  {
    title: "예방/스케일링",
    category: "예방",
    desc: "건강보험 적용 스케일링(만 19세 이상, 연 1회)으로 치석을 제거하고, 불소 도포로 충치를 예방합니다. 6개월 간격 정기 검진을 권장하며, 구강 상태에 맞는 칫솔질 방법과 치간 관리를 안내합니다.",
    details: [
      "건강보험 적용 초음파 스케일링 (만 19세 이상, 연 1회)",
      "불소 도포 (충치 예방)",
      "6개월 간격 정기 검진 권장",
      "개인별 칫솔질·치간칫솔·치실 사용법 교육",
    ],
  },
  {
    title: "사랑니 발치",
    category: "구강외과",
    desc: "파노라마 및 3D CT 촬영으로 매복 깊이, 하치조신경과의 거리를 정확히 파악한 뒤 안전하게 발치합니다. 구강외과전문의가 난이도 높은 완전매복·수평매복 사랑니도 담당합니다.",
    details: [
      "파노라마 · 3D CT로 위치 및 신경 거리 확인",
      "구강외과전문의의 난이도별 맞춤 발치",
      "발치 후 지혈·소독·식이 관리 안내",
      "필요 시 항생제·소염제 처방",
    ],
  },
];

const tmjTargets = [
  { label: "이갈이(브럭시즘)가 심한 분", sub: "수면 중 이갈이로 치아 마모·교근 비대가 진행된 경우" },
  { label: "만성 두통·안면통이 있는 분", sub: "턱관절 기능장애로 인한 측두부·후두부 두통" },
  { label: "턱관절 통증·잡음(클릭)이 있는 분", sub: "입 벌릴 때 딸깍 소리, 개구 제한, 턱 빠짐 증상" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="진료과목"
        title="어떤 치료가 필요하세요?"
        description="임플란트, 턱관절 치료, 보존과, 치주과, 구강외과, 예방치료 등 폭넓은 진료를 제공합니다."
      />

      {/* Service List */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-8">
          {services.map((s, index) => (
            <div
              key={s.title}
              id={s.title}
              className="rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-bg-light text-xs font-bold text-navy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-bold text-navy">{s.title}</h2>
                    <span className="rounded-full bg-bg-light px-3 py-0.5 text-xs font-medium text-text-sub">
                      {s.category}
                    </span>
                    {"highlight" in s && s.highlight && (
                      <span className="rounded-full bg-navy px-3 py-0.5 text-xs font-bold text-white">
                        {s.highlight}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-text-sub leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-text-sub"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TMJ Detail Section */}
      <section className="py-12 sm:py-16 bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-mint font-semibold text-sm mb-2">TMJ Treatment</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">턱관절 치료 상세</h2>
            <p className="mt-2 text-text-sub">전문 장비와 보톡스 치료를 병행해 턱관절 증상을 체계적으로 관리합니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Targets */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-navy mb-5">이런 분들에게 권합니다</h3>
              <div className="space-y-3">
                {tmjTargets.map((target) => (
                  <div
                    key={target.label}
                    className="rounded-xl bg-bg-light px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm font-semibold text-navy">{target.label}</span>
                    </div>
                    <p className="mt-1.5 ml-9 text-xs text-text-sub leading-relaxed">{target.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-mint/30 bg-mint/5 p-5">
                <h4 className="text-sm font-bold text-navy">보톡스(보툴리눔톡신) 치료</h4>
                <p className="mt-2 text-sm text-text-sub leading-relaxed">
                  교근(씹는 근육)에 보톡스를 주입해 이갈이·이 악물기 습관을 완화하고, 교근비대로 인한 사각턱 개선 효과도 기대할 수 있습니다. 치료 목적(턱관절 통증·이갈이)과 미용 목적(사각턱·안면윤곽) 모두 시행합니다.
                </p>
              </div>
            </div>

            {/* Equipment */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-navy mb-5">전문 치료 장비</h3>
              <div className="space-y-3">
                {[
                  { name: "초음파 (Ultrasound)", desc: "1MHz 초음파로 심부투열치료, 관절·근육 통증 완화", code: "보험코드 U2381" },
                  { name: "TENS (경피신경전기자극)", desc: "저주파 전기자극으로 근피로·통증 완화, 근육 재교육, 6채널 동시 치료", code: "보험코드 U2382" },
                  { name: "냉각스프레이 (Cloretilo)", desc: "에틸클로라이드 100% 분사신장치료, 영하 20°C 냉각으로 근육 이완 및 통증 차단", code: "건강보험 적용 (MX032)" },
                  { name: "Perfect Healing Laser (PHL-15)", desc: "650nm Red Diode Laser + 850nm IR LED, 세포 재생 촉진, 통증·부종·염증 완화", code: "텐스 포함 복합자극요법 청구" },
                  { name: "Jaw Care System Premium", desc: "턱관절 장애·임플란트·발치·교정 후 통증 관리 종합 시스템", code: "" },
                ].map((eq) => (
                  <div key={eq.name} className="rounded-xl bg-bg-light px-5 py-4">
                    <p className="text-sm font-bold text-navy">{eq.name}</p>
                    <p className="mt-1 text-sm text-text-sub">{eq.desc}</p>
                    {eq.code && <p className="mt-1 text-xs font-medium text-mint">{eq.code}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-navy mb-4">
            어떤 치료가 필요한지 잘 모르겠다면?
          </h2>
          <p className="text-sm text-text-sub mb-6">
            부담 없이 상담해 주세요. 정밀 검사 후 최적의 치료 방법을 안내드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:031-546-0051"
              className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-light transition-colors"
            >
              전화 상담
            </a>
            <Link
              href="/contact"
              className="rounded-full border-2 border-navy px-6 py-3 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
