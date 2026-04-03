import Image from "next/image";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const photos = [
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg",
    alt: "접수 데스크",
    desc: "깨끗하고 친근한 접수 공간",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 012.jpeg",
    alt: "접수 데스크 (측면)",
    desc: "네이비 톤의 브랜드 인테리어",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg",
    alt: "대기실",
    desc: "넓고 편안한 소파 대기 공간",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-45 001.jpeg",
    alt: "진료 복도",
    desc: "개별 진료실이 갖춰진 쾌적한 동선",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg",
    alt: "진료실",
    desc: "최신 유닛체어와 모니터가 설치된 진료실",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 011.jpeg",
    alt: "진료실 2",
    desc: "각 진료실에 독립된 장비 구성",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 008.jpeg",
    alt: "Vatech 3D CT",
    desc: "방사선량 52.6% 절감 Green CT",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 005.jpeg",
    alt: "디지털 파노라마",
    desc: "정밀 진단을 위한 디지털 X-ray",
  },
  {
    src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 006.jpeg",
    alt: "X-ray 촬영실",
    desc: "최신 디지털 촬영 장비",
  },
];

const equipment = [
  {
    name: "Vatech 3D CT (Green CT)",
    desc: "기존 CT 대비 방사선량 52.6% 절감. 3차원 입체 영상으로 임플란트 식립 위치, 신경 위치, 뼈 상태를 정밀하게 파악합니다.",
  },
  {
    name: "디지털 파노라마",
    desc: "전체 치아와 턱관절을 한 번에 촬영. 디지털 방식으로 즉시 확인 가능하며 방사선 노출을 최소화합니다.",
  },
  {
    name: "최신 유닛체어",
    desc: "각 진료실에 최신 유닛체어와 대형 모니터를 배치하여 환자에게 진료 과정을 직접 보여드립니다.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        label="시설/장비"
        title="깨끗하고 쾌적한 진료 환경"
        description="첨단 장비와 쾌적한 공간에서 정확한 진단과 안전한 치료를 제공합니다."
      />

      {/* 사진 갤러리 */}
      <section className="py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((p, idx) => (
              <ScrollReveal key={p.alt} delay={idx * 80}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/[0.03]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-semibold text-base">{p.alt}</p>
                    <p className="text-white/80 text-sm mt-1">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 장비 */}
      <section className="py-14 sm:py-20 lg:py-32 bg-bg-light">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">주요 장비</h2>
            <p className="mt-4 text-lg sm:text-xl text-text-sub">
              정밀 진단을 위한 첨단 장비
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((e, idx) => (
              <ScrollReveal key={e.name} delay={idx * 100}>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8 lg:p-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mint/20">
                    <svg className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy sm:text-2xl">{e.name}</h3>
                  <p className="mt-3 text-base text-text-sub leading-relaxed sm:text-lg">
                    {e.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
