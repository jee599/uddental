import { PhotoCard, Section } from "@/components/ui";
import { brandPoints, photos } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="Philosophy" title="예방 중심, 정직한 설명, 가족 같은 마음" copy="Claude 설계의 핵심 메시지를 병원소개 페이지의 첫 문장과 정보 순서에 그대로 반영했습니다.">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card p-7">
            <div className="space-y-5">
              {brandPoints.map((point) => (
                <div key={point} className="rounded-3xl bg-[color:var(--color-sand)] px-5 py-5">
                  <p className="text-lg font-semibold text-[color:var(--color-navy)]">{point}</p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                    동백유디치과가 처음 방문한 환자에게도 부담 없이 이해되는 정보 구조를 지향한다는 점을 설명하는 문장으로 확장했습니다.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <PhotoCard src={photos.receptionSide} alt="동백유디치과 접수 공간" priority />
        </div>
      </Section>

      <Section eyebrow="Network" title="유디치과 브랜드 맥락을 간결하게" copy="공식 지점 소개 페이지에 있는 네트워크 맥락은 과하지 않게 정리하고, 지역 지점의 신뢰와 접근성을 우선했습니다.">
        <div className="grid gap-6 md:grid-cols-2">
          <PhotoCard src={photos.waiting} alt="동백유디치과 대기실" />
          <div className="card p-7">
            <h3 className="text-2xl font-semibold text-[color:var(--color-navy)]">환자 경험 중심 소개</h3>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
              본 시안은 연혁을 길게 나열하기보다, 내원 전 환자가 궁금해하는 진료 철학과 공간 분위기를 먼저 설명합니다.
              이는 한국 치과 사이트에서 익숙한 신뢰 중심 흐름을 유지하면서도 정보 피로를 줄이기 위한 선택입니다.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--color-line)] px-4 py-4">
                <p className="text-sm font-semibold text-[color:var(--color-navy)]">예방 우선</p>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">치료보다 앞선 관리의 중요성 안내</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--color-line)] px-4 py-4">
                <p className="text-sm font-semibold text-[color:var(--color-navy)]">설명 중심</p>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">상담 단계의 이해도와 신뢰 확보</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
