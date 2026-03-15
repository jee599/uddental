import { PhotoCard, Section } from "@/components/ui";
import { doctor, photos } from "@/lib/site-data";

export default function DoctorsPage() {
  return (
    <Section eyebrow="Doctor" title="의료진 소개" copy="의료진 상세 정보가 아직 확정되지 않은 점을 고려해 플레이스홀더가 아니라 진료 철학 중심 콘텐츠로 정리했습니다.">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <PhotoCard src={photos.treatmentB} alt="동백유디치과 진료 공간" priority />
        <div className="card p-7">
          <p className="text-sm font-semibold text-[color:var(--color-mint)]">Representative Doctor</p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-navy)]">{doctor.name}</h2>
          <p className="mt-3 text-lg text-[color:var(--color-text)]">{doctor.role}</p>
          <p className="mt-6 text-sm leading-7 text-[color:var(--color-muted)]">{doctor.summary}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-[color:var(--color-sand)] px-5 py-5">
              <p className="font-semibold text-[color:var(--color-navy)]">진료 철학</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">불안감을 줄이는 설명과 예방 중심 관리의 중요성을 전합니다.</p>
            </div>
            <div className="rounded-3xl bg-[color:var(--color-sand)] px-5 py-5">
              <p className="font-semibold text-[color:var(--color-navy)]">상담 방식</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">치료 필요성과 선택지를 쉽게 이해할 수 있는 구조를 목표로 했습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
