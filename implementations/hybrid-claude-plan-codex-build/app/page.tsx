import Image from "next/image";
import { CTAButton, PhotoCard, Section } from "@/components/ui";
import { brandPoints, faq, facilities, photos, services, site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="shell py-8 sm:py-10">
        <div className="card grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[420px] bg-[color:var(--color-navy)] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0">
              <Image src={photos.hero} alt="동백유디치과 외관" fill priority className="object-cover opacity-30" />
            </div>
            <div className="relative z-10 max-w-xl">
              <span className="eyebrow border-white/20 bg-white/10 text-white">Simple · Professional · Friendly</span>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                가족을 진료하는 마음,
                <br />
                동백유디치과
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/84 sm:text-lg">
                예방 중심 진료와 충분한 설명, 실제 내원 경험이 떠오르는 실사진 중심 구성으로 신뢰감을 전하는
                지역 치과 홈페이지입니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href={`tel:${site.phone}`}>전화 상담 {site.phone}</CTAButton>
                <CTAButton href={site.reservationUrl} secondary>
                  네이버 예약
                </CTAButton>
              </div>
            </div>
          </div>
          <div className="grid gap-px bg-[color:var(--color-line)] md:grid-cols-2 lg:grid-cols-1">
            <div className="bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold text-[color:var(--color-navy)]">핵심 포인트</p>
              <div className="mt-6 grid gap-3">
                {brandPoints.map((point) => (
                  <div key={point} className="rounded-2xl bg-[color:var(--color-sand)] px-4 py-4 text-sm font-medium text-[color:var(--color-text)]">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[color:var(--color-sand)] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[color:var(--color-navy)]">진료 안내</p>
              <div className="mt-5 space-y-3">
                {site.hours.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-sm">
                    <span className="text-[color:var(--color-muted)]">{item.label}</span>
                    <span className="font-semibold text-[color:var(--color-navy)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Core Services" title="주요 진료를 한눈에" copy="임플란트부터 예방 스케일링까지, 한국 치과 사이트에서 익숙한 정보 구조로 간결하게 정리했습니다.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="card p-6">
              <p className="text-sm font-semibold text-[color:var(--color-mint)]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-navy)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="About" title="정돈된 공간과 충분한 설명으로 만드는 편안한 내원 경험" copy="접수, 대기, 진료 흐름을 직관적으로 전달해 처음 방문하는 환자도 병원의 분위기를 미리 이해할 수 있도록 구성했습니다.">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <PhotoCard src={photos.receptionMain} alt="동백유디치과 접수 데스크" priority />
          <div className="card flex flex-col justify-between p-7">
            <div>
              <h3 className="text-2xl font-semibold text-[color:var(--color-navy)]">병원 소개 요약</h3>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-semibold text-[color:var(--color-text)]">예방 중심 진료</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">치료 이전의 관리와 설명을 강조해 불필요한 부담을 줄입니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--color-text)]">정직한 진료비</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">비용 안내의 명확성을 통해 상담 단계의 신뢰를 높입니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--color-text)]">풍부한 경험 기반 상담</p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">진단 결과와 치료 방향을 쉬운 언어로 설명하는 흐름을 반영했습니다.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <CTAButton href="/about">병원소개 자세히 보기</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Gallery" title="실사진으로 보는 시설과 장비" copy="외관, 접수, 대기실, 진료실, CT 장비까지 실제 사진을 전면 반영했습니다.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {facilities.slice(0, 4).map((item) => (
            <PhotoCard key={item.title} src={item.image} alt={item.title} title={item.title} copy={item.copy} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Visit" title="진료시간과 위치를 빠르게 확인하세요" copy="전화 상담, 지도 확인, 주차 정보까지 처음 방문에 필요한 핵심 정보를 한 영역에 모았습니다.">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card p-6">
            <p className="text-lg font-semibold text-[color:var(--color-navy)]">오시는 길</p>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">{site.address}</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="rounded-2xl bg-[color:var(--color-sand)] px-4 py-4">
                <p className="font-semibold text-[color:var(--color-navy)]">대중교통</p>
                <p className="mt-1 text-[color:var(--color-muted)]">{site.transit}</p>
              </div>
              <div className="rounded-2xl bg-[color:var(--color-sand)] px-4 py-4">
                <p className="font-semibold text-[color:var(--color-navy)]">주차</p>
                <p className="mt-1 text-[color:var(--color-muted)]">{site.parking}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <PhotoCard src={photos.hoursBoard} alt="동백유디치과 진료시간 안내" />
            <div className="card p-6">
              <p className="text-lg font-semibold text-[color:var(--color-navy)]">상담/예약</p>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">예약 전환을 위해 전화와 네이버 예약 CTA를 함께 배치했습니다.</p>
              <div className="mt-6 flex flex-col gap-3">
                <CTAButton href={`tel:${site.phone}`}>전화 상담</CTAButton>
                <CTAButton href={site.reservationUrl} secondary>
                  네이버 예약 바로가기
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="자주 묻는 질문" copy="초진 환자가 가장 먼저 확인하는 항목을 중심으로 간단하게 구성했습니다.">
        <div className="grid gap-4">
          {faq.map((item) => (
            <article key={item.q} className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--color-navy)]">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">{item.a}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="shell pb-20">
        <div className="card rounded-[36px] bg-[color:var(--color-navy)] px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">Contact</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">상담과 예약은 편하게, 진료는 차분하게</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                지역 환자가 바로 행동할 수 있도록 하단 CTA를 유지했습니다. 실제 운영 채널인 전화와 네이버 예약을 중심으로 구성했습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={`tel:${site.phone}`}>전화 {site.phone}</CTAButton>
              <CTAButton href="/contact" secondary>
                상담/예약 페이지
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
