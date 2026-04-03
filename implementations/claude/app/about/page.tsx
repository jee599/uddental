import Image from "next/image";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const values = [
  {
    title: "예방 중심 진료",
    desc: "치료는 최후의 수단입니다. 정기 검진과 조기 발견으로 큰 치료를 예방합니다. 건강한 치아를 오래 유지하는 것이 최선의 치료라 믿습니다.",
  },
  {
    title: "정직한 진료비",
    desc: "불필요한 과잉 진료를 하지 않습니다. 환자에게 꼭 필요한 치료만 권하고, 치료 전 비용을 투명하게 안내합니다.",
  },
  {
    title: "가족을 진료하는 마음",
    desc: "내 가족이라면 어떤 치료를 받게 할까, 항상 그 기준으로 진료합니다. 환자 한 분 한 분의 상황을 충분히 듣고 최적의 방법을 찾습니다.",
  },
  {
    title: "첨단 시설과 검증된 재료",
    desc: "Vatech 3D CT, 디지털 파노라마 등 첨단 장비로 정밀 진단합니다. 임플란트 등 보철 재료는 검증된 제품만 사용합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="병원소개"
        title="동백유디치과를 소개합니다"
        description="용인 동백에서 지역 주민의 구강 건강을 책임지는 유디치과의원 용인동백점입니다."
      />

      {/* Photo + Intro */}
      <section className="py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:gap-16">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/[0.03]">
                <Image
                  src="/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 012.jpeg"
                  alt="동백유디치과 접수 데스크"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
                  유디치과 네트워크,
                  <br />
                  동백에서 만나보세요
                </h2>
                <div className="space-y-5 text-base text-text-sub leading-relaxed sm:text-lg lg:text-xl">
                  <p>
                    유디치과는 전국 네트워크를 갖춘 치과 브랜드입니다. 동백점은 용인시 기흥구 동백동에 위치하여 동백, 중동, 상갈 등 인근 주민분들이 편리하게 이용하실 수 있습니다.
                  </p>
                  <p>
                    깨끗하고 쾌적한 원내 환경, 첨단 진단 장비, 그리고 풍부한 경험의 의료진이 여러분의 치아 건강을 지켜드립니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 lg:py-32 bg-bg-light">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">진료 철학</h2>
              <p className="mt-4 text-lg sm:text-xl text-text-sub">
                이런 마음으로 진료합니다
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/[0.03] hover:shadow-md transition-shadow sm:p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/20 text-base font-bold text-mint">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-navy sm:text-2xl">{v.title}</h3>
                  </div>
                  <p className="text-base text-text-sub leading-relaxed sm:text-lg">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waiting Room */}
      <section className="py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:gap-16">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
                  편안한 대기 공간
                </h2>
                <p className="text-base text-text-sub leading-relaxed sm:text-lg lg:text-xl">
                  넓고 쾌적한 대기실에서 편안하게 기다리실 수 있습니다. 벽돌 인테리어와 따뜻한 조명, 넉넉한 소파가 마련되어 있어 긴장을 덜어드립니다.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/[0.03]">
                <Image
                  src="/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg"
                  alt="동백유디치과 대기실"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
