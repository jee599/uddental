import { PageHero } from "../components/page-hero";
import { Section } from "../components/section";
import { clinic, contactChecklist } from "../lib/site-content";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Reservation"
        title="전화 문의와 예약 동선을 분리해 더 직관적으로 안내합니다"
        description="대표번호와 예약 문의 번호가 출처별로 다르게 노출되는 점을 반영해, 상담 목적에 따라 연락 수단을 분리해 제시했습니다."
      />

      <Section
        eyebrow="Call To Action"
        title="편한 방식으로 상담을 시작하세요"
        description="상담이 필요한 경우와 예약이 필요한 경우를 구분해 버튼 우선순위를 다르게 두었습니다."
      >
        <div className="contact-grid">
          <article className="contact-card">
            <p className="section-label">대표 문의</p>
            <h3>{clinic.phone}</h3>
            <p>공식 사이트 기준 대표전화입니다. 진료 문의, 운영시간 확인, 기본 상담에 적합합니다.</p>
            <a href={`tel:${clinic.phone}`} className="button">
              대표전화 연결
            </a>
          </article>
          <article className="contact-card">
            <p className="section-label">예약 문의</p>
            <h3>{clinic.reservationPhone}</h3>
            <p>네이버 예약 채널과 함께 사용하는 문의 번호로, 예약 관련 안내에 적합합니다.</p>
            <a href={clinic.links.naverBooking} className="button button--ghost" target="_blank" rel="noreferrer">
              네이버 예약 열기
            </a>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Before You Visit"
        title="상담 전에 준비하면 좋은 내용"
        description="실제 폼을 만들기 전 단계에서도 예약 전환율을 높일 수 있도록 짧은 준비 가이드를 넣었습니다."
        accent="soft"
      >
        <div className="bullet-panel">
          {contactChecklist.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
