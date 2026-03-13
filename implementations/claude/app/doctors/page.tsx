import PageHero from "../components/PageHero";

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="의료진"
        title="풍부한 경험의 의료진"
        description="환자 한 분 한 분에게 최적의 치료를 제공하기 위해 끊임없이 연구합니다."
      />

      {/* Doctor Card */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-100 p-8 sm:p-10 text-center">
            {/* Placeholder avatar */}
            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-bg-light">
              <svg className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy">원장</h2>
            <p className="mt-1 text-mint font-medium text-sm">
              유디치과의원 용인동백점
            </p>

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold text-navy mb-4">진료 철학</h3>
              <div className="space-y-3 text-sm text-text-sub leading-relaxed">
                <p>
                  &ldquo;내 가족이라면 어떤 치료를 받게 할까&rdquo; — 항상 이 질문에서 시작합니다. 과잉 진료 없이 꼭 필요한 치료만 권하고, 환자의 상황과 예산을 함께 고려하여 최선의 방법을 찾습니다.
                </p>
                <p>
                  치료보다 예방이 중요하다고 믿습니다. 정기 검진을 통해 큰 치료를 미리 막는 것이 환자에게도, 치아에게도 가장 좋은 결과를 만듭니다.
                </p>
              </div>
            </div>

            <div className="mt-8 text-left">
              <h3 className="text-lg font-bold text-navy mb-4">진료 분야</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "임플란트",
                  "보존치료",
                  "보철치료",
                  "잇몸치료",
                  "소아치과",
                  "구강외과",
                  "예방치료",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-mint/10 px-4 py-1.5 text-sm font-medium text-mint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-text-sub">
            * 의료진 상세 약력은 확인 후 업데이트 예정입니다.
          </p>
        </div>
      </section>
    </>
  );
}
