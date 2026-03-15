import { PageHero } from "../components/page-hero";
import { Section } from "../components/section";
import { keyServices } from "../lib/site-content";

const recommendations = [
  "음식을 씹을 때 불편함이 반복된다면 임플란트 또는 보철 상담을 고려할 수 있습니다.",
  "찬 음식에 시리거나 통증이 있다면 충치 또는 보존 치료 검진을 먼저 받아보는 흐름이 적절합니다.",
  "잇몸 출혈이나 구취가 반복되면 스케일링과 치주 관리 상담이 도움이 될 수 있습니다.",
  "사랑니 통증, 붓기, 염증이 있으면 구강외과 영역 상담이 필요할 수 있습니다.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="일상에서 자주 필요한 치과 진료를 중심으로 정리했습니다"
        description="공식 사이트와 외부 채널에서 확인된 진료 키워드를 기준으로, 지역 치과에서 많이 찾는 항목들을 실제 상담 흐름에 맞춰 재구성했습니다."
      />

      <Section
        eyebrow="Main Services"
        title="주요 진료 항목"
        description="모든 카드를 같은 무게로 두지 않고, 이용 빈도가 높은 진료를 중심으로 크기와 여백을 조절했습니다."
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
        eyebrow="Prevention First"
        title="치료 전에 예방을 먼저 생각하는 구조"
        description="브랜드 메시지에 맞춰 특정 시술만 강조하기보다 검진과 관리 루틴을 함께 제안하는 방향으로 페이지를 구성했습니다."
        accent="soft"
      >
        <div className="info-grid">
          <article className="info-card">
            <h3>정기검진</h3>
            <p>작은 불편을 초기에 확인하고 치료 규모를 줄이는 방향을 우선합니다.</p>
          </article>
          <article className="info-card">
            <h3>스케일링</h3>
            <p>잇몸 관리와 구강 위생 습관을 함께 설명하는 예방 루틴의 출발점입니다.</p>
          </article>
          <article className="info-card">
            <h3>생활 관리 안내</h3>
            <p>내원 후 관리 방법까지 이어지는 설명형 진료 경험을 지향합니다.</p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="When To Visit"
        title="이런 경우 먼저 상담해 보세요"
        description="의학적 확정 진단이 아니라, 사용자 입장에서 어떤 상황에 어떤 페이지를 참고해야 하는지 안내하는 수준으로 정리했습니다."
      >
        <div className="bullet-panel">
          {recommendations.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
