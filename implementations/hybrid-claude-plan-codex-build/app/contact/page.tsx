import { CTAButton, Section } from "@/components/ui";
import { site } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="상담 및 예약" copy="전화 CTA와 네이버 예약 CTA를 우선 배치하고, 간단 문의 폼으로 보조 전환을 구성했습니다.">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="card p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">빠른 예약</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
            대표번호 {site.phone}를 기본 연락처로 사용했습니다. `data.md`에 0507 번호도 존재하므로 실제 운영 번호는 배포 전에 최종 확인이 필요합니다.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <CTAButton href={`tel:${site.phone}`}>전화 상담 {site.phone}</CTAButton>
            <CTAButton href={site.reservationUrl} secondary>
              네이버 예약
            </CTAButton>
          </div>
          <div className="mt-8 rounded-3xl bg-[color:var(--color-sand)] px-5 py-5 text-sm leading-6 text-[color:var(--color-muted)]">
            주소: {site.address}
            <br />
            주차: {site.parking}
          </div>
        </div>
        <form className="card p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">간단 문의</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">백엔드 연동 전 단계이므로 문의 폼은 정적 UI로 구성했습니다.</p>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-[color:var(--color-navy)]">이름</span>
              <input className="rounded-2xl border border-[color:var(--color-line)] px-4 py-3 outline-none" placeholder="성함을 입력해 주세요" />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-[color:var(--color-navy)]">연락처</span>
              <input className="rounded-2xl border border-[color:var(--color-line)] px-4 py-3 outline-none" placeholder="연락 가능한 번호" />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-[color:var(--color-navy)]">문의 내용</span>
              <textarea className="min-h-36 rounded-2xl border border-[color:var(--color-line)] px-4 py-3 outline-none" placeholder="문의 내용을 남겨 주세요" />
            </label>
            <button type="button" className="rounded-full bg-[color:var(--color-navy)] px-5 py-3 text-sm font-semibold text-white">
              문의 남기기
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
