import { PageHero } from "../components/page-hero";
import { Section } from "../components/section";
import { clinic, differentiators, principles } from "../lib/site-content";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Clinic"
        title="가깝고 편안한 내원을 돕는 지역 치과의 정보 구조"
        description="병원소개 페이지는 역사 나열보다 환자가 실제로 체감하는 설명 방식, 내원 동선, 진료 철학을 중심으로 읽히도록 구성했습니다."
        aside={
          <div className="summary-card">
            <strong>{clinic.shortName}</strong>
            <p>{clinic.address}</p>
            <p>대표전화 {clinic.phone}</p>
          </div>
        }
      />

      <Section
        eyebrow="Our Principles"
        title="사이트 전반을 관통하는 세 가지 기준"
        description="데이터 문서의 브랜드 메시지를 직접 반영해 과장보다 이해와 신뢰를 우선하는 방향으로 정리했습니다."
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
        eyebrow="Patient Flow"
        title="첫 방문부터 정기 검진까지 흐름이 자연스럽도록 설계합니다"
        description="상담, 안내, 치료, 관리 단계를 분리해 사용자 입장에서 내원 경험을 상상하기 쉽도록 구성했습니다."
        accent="soft"
      >
        <div className="timeline">
          <article className="timeline__item">
            <span>01</span>
            <h3>상담과 예약</h3>
            <p>전화 또는 네이버 예약으로 현재 상태와 방문 목적을 먼저 정리합니다.</p>
          </article>
          <article className="timeline__item">
            <span>02</span>
            <h3>상태 설명</h3>
            <p>현재 상태와 필요한 진료 방향을 이해하기 쉬운 언어로 안내합니다.</p>
          </article>
          <article className="timeline__item">
            <span>03</span>
            <h3>예방 중심 관리</h3>
            <p>치료 이후에도 정기 검진과 관리 루틴으로 이어질 수 있게 돕습니다.</p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Why This Layout"
        title="Codex 버전은 신뢰 정보를 더 조용하고 선명하게 배치합니다"
        description="강한 CTA를 위쪽에 몰아넣지 않고, 설명과 운영 정보를 균형 있게 배치해 한국 병원형 톤을 유지하면서도 조금 더 정제된 인상을 만듭니다."
      >
        <div className="bullet-panel">
          {differentiators.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
