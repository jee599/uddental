import Image from "next/image";
import Link from "next/link";
import { PhotoGrid } from "./components/photo-grid";
import { Section } from "./components/section";
import {
  careJourney,
  clinic,
  differentiators,
  faqs,
  galleryPhotos,
  homeHighlights,
  homeStats,
  keyServices,
  principles,
} from "./lib/site-content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell">
          <div className="home-hero__grid">
            <div className="home-hero__content">
              <p className="section-label">Calm Dental Editorial</p>
              <p className="home-hero__eyebrow">동백에서 가볍게 들르고, 진료는 차분하게 이해하는 방식</p>
              <h1>
                설명을 먼저 듣고
                <br />
                편안하게 결정하는
                <br />
                우리 동네 치과
              </h1>
              <p className="home-hero__description">
                유디치과의원 용인동백점은 과한 광고 문구보다 실제 공간, 확인 가능한 운영 정보,
                예방 중심 진료 흐름을 먼저 보여주는 화면으로 첫 방문의 긴장을 줄이도록 구성했습니다.
              </p>
              <div className="home-hero__actions">
                <a href={`tel:${clinic.phone}`} className="button">
                  대표전화 {clinic.phone}
                </a>
                <a href={clinic.links.naverBooking} className="button button--ghost" target="_blank" rel="noreferrer">
                  네이버 예약
                </a>
              </div>
              <div className="home-hero__notes">
                <span>{clinic.address}</span>
                <span>{clinic.hours.weekday}</span>
                <span>{clinic.visit.parking}</span>
              </div>
              <div className="hero-highlights">
                {homeHighlights.map((item) => (
                  <article key={item.title} className="hero-highlight">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="home-hero__visual">
              <div className="hero-stage">
                <div className="hero-stage__photo hero-stage__photo--primary">
                  <Image
                    src={galleryPhotos[3].src}
                    alt={galleryPhotos[3].alt}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 36vw"
                  />
                </div>
                <div className="hero-stage__floating-card">
                  <p className="section-label">Visit Snapshot</p>
                  <h2>예약 전 확인할 정보</h2>
                  <div className="hero-panel">
                    {homeStats.map((item) => (
                      <div key={item.label} className="hero-panel__item">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                        {item.note ? <small>{item.note}</small> : null}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hero-stage__photo hero-stage__photo--secondary">
                  <Image src={galleryPhotos[0].src} alt={galleryPhotos[0].alt} fill sizes="(max-width: 900px) 100vw, 20vw" />
                </div>
                <div className="hero-stage__badge">
                  <span>REAL CLINIC PHOTOS</span>
                  <strong>Exterior, reception, treatment room</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="home-marquee" aria-label="핵심 차별점">
            {differentiators.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="visit-ribbon">
            <article className="visit-ribbon__card">
              <p className="section-label">Address</p>
              <strong>{clinic.address}</strong>
            </article>
            <article className="visit-ribbon__card">
              <p className="section-label">Hours</p>
              <strong>{clinic.hours.weekday}</strong>
              <span>{clinic.hours.saturday}</span>
            </article>
            <article className="visit-ribbon__card">
              <p className="section-label">Booking</p>
              <strong>{clinic.reservationPhone}</strong>
              <span>전화 또는 네이버 예약 가능</span>
            </article>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Clinic Story"
        title="실제 사진과 운영 정보를 먼저 보여주는 홈 구조"
        description="디자인 특화 AI 시안의 편집형 레이아웃을 참고하되, 병원 사이트에서 중요한 신뢰 요소는 실사진과 방문 준비 정보에 집중했습니다."
      >
        <div className="story-layout">
          <article className="story-card story-card--quote">
            <p className="section-label">Why This Layout</p>
            <h3>처음 방문하는 환자가 가장 궁금한 것부터 정리했습니다</h3>
            <p>
              어디에 있는지, 어떤 분위기인지, 예약이 쉬운지, 어떤 진료를 주로 보는지.
              홈 화면은 이 질문에 빠르게 답하는 방향으로 재배치했습니다.
            </p>
          </article>
          <div className="story-card story-card--stack">
            <div className="story-stack">
              <div className="story-stack__photo">
                <Image src={galleryPhotos[1].src} alt={galleryPhotos[1].alt} fill sizes="(max-width: 900px) 100vw, 24vw" />
              </div>
              <div className="story-stack__photo story-stack__photo--offset">
                <Image src={galleryPhotos[2].src} alt={galleryPhotos[2].alt} fill sizes="(max-width: 900px) 100vw, 20vw" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Core Care"
        title="주요 진료는 밀도 차가 있는 벤토형 카드로 재구성했습니다"
        description="정렬된 카드 나열 대신 우선순위와 진료 성격이 드러나도록 카드 크기와 강조도를 다르게 적용했습니다."
      >
        <div className="service-bento">
          {keyServices.map((service, index) => (
            <article key={service.title} className={`service-card service-card--${(index % 3) + 1}`}>
              <span className="service-card__badge">{service.badge}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Care Journey"
        title="예약부터 정기 검진까지의 흐름을 한 번에 보이게 했습니다"
        description="홈에 짧은 여정 섹션을 넣어 예약 전환과 진료 신뢰를 동시에 보완합니다."
        accent="soft"
      >
        <div className="journey-grid">
          {careJourney.map((item) => (
            <article key={item.step} className="journey-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Clinic Philosophy"
        title="복잡한 설명보다 이해되는 진료 경험을 중요하게 봅니다"
        description="확인된 브랜드 메시지를 바탕으로 예방 중심, 가족 진료, 정직한 안내라는 세 가지 축을 중심에 두었습니다."
      >
        <div className="principle-grid">
          {principles.map((item) => (
            <article key={item.title} className="principle-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Real Space"
        title="실제 병원 사진으로 공간의 분위기를 먼저 확인하세요"
        description="외관, 내부 동선, 진료실, 접수 데스크를 메인에서도 바로 볼 수 있게 반영했습니다."
        accent="soft"
      >
        <PhotoGrid items={galleryPhotos} />
      </Section>

      <Section
        eyebrow="FAQ"
        title="내원 전에 많이 묻는 질문"
        description="초진 방문자가 가장 먼저 확인하는 예약, 토요일 진료, 주차, 소아 진료 중심으로 구성했습니다."
      >
        <div className="faq-list">
          {faqs.map((item) => (
            <article key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="cta-band">
        <div className="shell cta-band__inner">
          <div>
            <p className="section-label">Reservation</p>
            <h2>전화 상담과 네이버 예약 중 편한 방식으로 문의하세요</h2>
            <p className="cta-band__description">
              첫 상담부터 위치, 주차, 운영시간까지 한 번에 확인하고 바로 예약할 수 있도록 CTA를 유지했습니다.
            </p>
          </div>
          <div className="cta-band__actions">
            <a href={`tel:${clinic.phone}`} className="button">
              전화하기
            </a>
            <Link href="/contact" className="button button--ghost">
              상담/예약 페이지
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
