import { Section } from "@/components/ui";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <Section eyebrow="Services" title="주요 진료과목" copy="6개 핵심 진료를 중심으로 홈과 상세 페이지의 메시지를 일관되게 유지했습니다.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="card p-7">
            <p className="text-sm font-semibold text-[color:var(--color-mint)]">Specialty {index + 1}</p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-navy)]">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{service.description}</p>
            <div className="mt-6 rounded-2xl bg-[color:var(--color-sand)] px-4 py-4 text-sm text-[color:var(--color-muted)]">
              상담 시 환자의 상태, 통증 여부, 일정까지 함께 고려하는 설명형 페이지 구조를 염두에 두고 작성했습니다.
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
