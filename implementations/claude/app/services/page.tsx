import Link from "next/link";
import PageHero from "../components/PageHero";

const services = [
  {
    title: "임플란트",
    category: "보철과",
    desc: "상실된 치아 부위에 인공 치근(임플란트)을 심고 그 위에 보철물을 장착하여 자연치아와 유사한 기능과 외관을 회복합니다.",
    details: [
      "정밀 3D CT 촬영으로 뼈 상태 분석",
      "검증된 임플란트 재료 사용",
      "1:1 맞춤 치료 계획 수립",
      "시술 후 정기 관리 프로그램",
    ],
  },
  {
    title: "충치/신경치료",
    category: "보존과",
    desc: "초기 충치부터 신경까지 진행된 깊은 충치까지, 자연치아를 최대한 보존하는 방향으로 치료합니다.",
    details: [
      "초기 충치: 레진 충전 치료",
      "중기 충치: 인레이/온레이 보철",
      "심한 충치: 신경치료 후 크라운",
      "치아 보존을 최우선으로 판단",
    ],
  },
  {
    title: "잇몸치료",
    category: "치주과",
    desc: "잇몸 출혈, 붓기, 시린 증상, 구취 등 잇몸 질환을 정밀 진단하고 단계별로 치료합니다.",
    details: [
      "잇몸 상태 정밀 검사",
      "스케일링 및 치주 소파술",
      "잇몸 수술 (필요 시)",
      "유지 관리 및 재발 방지",
    ],
  },
  {
    title: "소아치과",
    category: "소아",
    desc: "아이가 치과를 무서워하지 않도록 편안한 환경에서 예방 중심으로 진료합니다.",
    details: [
      "유치 충치 치료",
      "불소 도포 및 실란트",
      "교합 및 성장 관찰",
      "치과 공포 줄이는 단계적 진료",
    ],
  },
  {
    title: "예방/스케일링",
    category: "예방",
    desc: "정기 검진과 스케일링으로 치석을 제거하고 잇몸 질환과 충치를 사전에 예방합니다.",
    details: [
      "6개월 간격 정기 검진 권장",
      "초음파 스케일링",
      "불소 도포",
      "올바른 양치 방법 교육",
    ],
  },
  {
    title: "사랑니 발치",
    category: "구강외과",
    desc: "매복 사랑니, 염증이 있는 사랑니 등을 정밀 진단 후 안전하게 발치합니다.",
    details: [
      "파노라마/CT 촬영으로 위치 확인",
      "신경 위치 파악 후 안전 발치",
      "발치 후 관리 안내",
      "필요 시 항생제/소염제 처방",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="진료과목"
        title="어떤 치료가 필요하세요?"
        description="동백유디치과는 보존과, 보철과, 치주과, 구강외과, 소아치과 등 폭넓은 진료를 제공합니다."
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

      {/* CTA */}
      <section className="py-12 bg-bg-light">
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
