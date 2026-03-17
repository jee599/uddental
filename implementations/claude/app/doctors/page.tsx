import PageHero from "../components/PageHero";

const doctors = [
  {
    name: "박 원장",
    role: "대표원장",
    schedule: { working: ["월", "화", "금", "토"], off: ["수", "목"] },
    summary: "상세 약력은 추후 업데이트 예정입니다.",
  },
  {
    name: "권 원장",
    role: "원장",
    schedule: { working: ["월", "화", "수", "목"], off: ["금", "토"] },
    summary: "상세 약력은 추후 업데이트 예정입니다.",
  },
  {
    name: "조 원장",
    role: "구강외과전문의",
    schedule: { working: ["금요일 및 수술일"], off: [] as string[] },
    summary: "임플란트 수술 및 구강외과 진료를 담당합니다. 상세 약력은 추후 업데이트 예정입니다.",
  },
];

const dayLabels = ["월", "화", "수", "목", "금", "토"];

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="의료진"
        title="풍부한 경험의 의료진"
        description="각 원장님의 진료 요일을 확인하시고 방문 전 참고해 주세요."
      />

      {/* Doctor Cards */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
                    {doc.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy">{doc.name}</h2>
                    <p className="text-sm font-medium text-mint">{doc.role}</p>
                  </div>
                </div>

                <p className="text-sm text-text-sub leading-relaxed mb-6">
                  {doc.summary}
                </p>

                {/* Schedule */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-sub mb-3">
                    진료 요일
                  </p>
                  {doc.schedule.off.length > 0 ? (
                    <div className="flex gap-2">
                      {dayLabels.map((day) => {
                        const isWorking = doc.schedule.working.includes(day);
                        return (
                          <span
                            key={day}
                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                              isWorking
                                ? "bg-navy text-white"
                                : "bg-gray-100 text-gray-300"
                            }`}
                          >
                            {day}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-xl bg-bg-light px-4 py-3 text-sm font-medium text-navy">
                      {doc.schedule.working.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Reservation Notice */}
          <div className="mt-8 rounded-2xl border border-mint/30 bg-mint/5 px-6 py-5">
            <p className="text-sm font-bold text-navy">예약 안내</p>
            <p className="mt-1 text-sm text-text-sub">
              네이버 예약 요청 시, 병원에서 스케줄을 확인한 후 예약 확정 안내를 드립니다.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-text-sub">
            * 의료진 상세 약력은 확인 후 업데이트 예정입니다.
          </p>
        </div>
      </section>
    </>
  );
}
