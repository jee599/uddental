import { PageHero } from "../components/page-hero";
import { Section } from "../components/section";
import { teamNotes } from "../lib/site-content";

const careModel = [
  {
    title: "설명 중심 진료",
    description: "상태와 치료 방향을 쉽게 이해할 수 있어야 한다는 기준으로 상담 흐름을 설계합니다.",
  },
  {
    title: "협진을 고려한 운영",
    description: "보존, 보철, 치주, 구강외과 등 확인된 진료 분야를 바탕으로 필요한 진료 연결을 상정한 구조입니다.",
  },
  {
    title: "정기 관리 연계",
    description: "단발성 치료보다 검진과 관리까지 이어지는 관계를 중요하게 봅니다.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical Team"
        title="허위 약력 없이, 확인 가능한 진료 철학을 먼저 보여주는 의료진 페이지"
        description="현재 데이터에는 원장명과 상세 약력이 없어 실명 카드 대신 진료 철학과 협진 운영 방식을 중심으로 구성했습니다."
      />

      <Section
        eyebrow="Care Model"
        title="의료진 페이지를 운영 철학 중심으로 설계한 이유"
        description="실제 의료기관 사이트에서는 정확성이 가장 중요하므로, 비어 있는 정보를 억지로 채우지 않고 신뢰를 해치지 않는 방향을 택했습니다."
      >
        <div className="principle-grid">
          {careModel.map((item) => (
            <article key={item.title} className="principle-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Update Notice"
        title="실제 배포 전 반드시 확인이 필요한 항목"
        description="아래 항목은 현재 페이지 설계에서 의도적으로 비워 둔 영역입니다."
        accent="soft"
      >
        <div className="bullet-panel">
          {teamNotes.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
