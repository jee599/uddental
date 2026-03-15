import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { Section } from "../components/section";
import { clinic, galleryPhotos, visitSteps } from "../lib/site-content";

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="처음 방문하는 분도 바로 이해할 수 있게 위치와 시간을 정리했습니다"
        description="주소, 대중교통, 주차, 운영시간을 한 페이지에서 확인할 수 있게 구성했습니다."
      />

      <Section
        eyebrow="Location"
        title="오시는 길"
        description="외관 사진과 함께 건물명, 층수, 교통, 주차 정보를 한 번에 확인하도록 배치했습니다."
      >
        <div className="visit-layout">
          <div className="visit-layout__photo">
            <Image src={galleryPhotos[0].src} alt={galleryPhotos[0].alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="visit-layout__content">
            <article className="info-card">
              <h3>주소</h3>
              <p>{clinic.address}</p>
              <p>{clinic.addressLot}</p>
            </article>
            <article className="info-card">
              <h3>대중교통</h3>
              <p>{clinic.visit.subway}</p>
            </article>
            <article className="info-card">
              <h3>주차</h3>
              <p>{clinic.visit.parking}</p>
            </article>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Hours"
        title="진료시간"
        description="한눈에 읽히도록 표 형식 대신 중요한 시간만 남긴 간결한 카드로 정리했습니다."
        accent="soft"
      >
        <div className="info-grid">
          <article className="info-card">
            <h3>평일</h3>
            <p>{clinic.hours.weekday}</p>
          </article>
          <article className="info-card">
            <h3>토요일</h3>
            <p>{clinic.hours.saturday}</p>
          </article>
          <article className="info-card">
            <h3>점심시간</h3>
            <p>{clinic.hours.lunch}</p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Arrival Guide"
        title="도착 순서"
        description="실제 방문 동선을 기준으로 간단한 세 단계 안내를 제공합니다."
      >
        <div className="timeline">
          {visitSteps.map((step, index) => (
            <article key={step} className="timeline__item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
