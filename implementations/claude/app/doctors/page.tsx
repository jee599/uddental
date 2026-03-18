import PageHero from "../components/PageHero";

const doctors = [
  {
    name: "박 원장",
    role: "대표원장",
    color: "from-navy to-[#2a6cb8]",
    schedule: { working: ["월", "화", "금", "토"], off: ["수", "목"] },
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    philosophy: "내 가족이라면 어떤 치료를 받게 할까 — 이 질문에서 시작합니다.",
    summary: "예방 중심 진료와 충분한 설명을 우선하며, 과잉 진료 없이 꼭 필요한 치료만 권합니다.",
  },
  {
    name: "권 원장",
    role: "원장",
    color: "from-[#1a5c96] to-[#2980b9]",
    schedule: { working: ["월", "화", "수", "목"], off: ["금", "토"] },
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    philosophy: "치료보다 예방이 중요하다고 믿습니다.",
    summary: "정기 검진을 통해 큰 치료를 미리 막는 것이 환자와 치아 모두에게 최선의 결과를 만듭니다.",
  },
  {
    name: "조 원장",
    role: "구강외과전문의",
    color: "from-mint to-[#0097a7]",
    schedule: { working: ["금요일 및 수술일"], off: [] as string[] },
    specialty: ["임플란트", "구강외과", "사랑니 발치", "턱관절·보톡스"],
    philosophy: "정밀한 진단이 안전한 수술의 첫 걸음입니다.",
    summary: "3D CT 기반 정밀 분석으로 임플란트 식립, 난이도 높은 매복 사랑니 발치, 턱관절 치료를 담당합니다.",
  },
];

const dayLabels = ["월", "화", "수", "목", "금", "토"] as const;

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="의료진"
        title="풍부한 경험의 의료진"
        description="3인 원장 체제로 보존·보철·치주·구강외과 전 분야를 진료합니다."
      />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Doctor Cards */}
          <div className="space-y-8">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
                  {/* Left: Profile */}
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start gap-6">
                      {/* Avatar with gradient */}
                      <div className="relative flex-shrink-0">
                        <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${doc.color} text-3xl font-bold text-white shadow-lg`}>
                          {doc.name.charAt(0)}
                        </div>
                        {doc.role === "구강외과전문의" && (
                          <div className="absolute -top-2 -right-2 rounded-lg bg-mint px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                            전문의
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="text-2xl font-bold text-navy">{doc.name}</h2>
                          <span className={`rounded-full px-3.5 py-1 text-xs font-bold ${
                            doc.role === "구강외과전문의"
                              ? "bg-mint/10 text-mint border border-mint/20"
                              : doc.role === "대표원장"
                                ? "bg-navy/8 text-navy border border-navy/15"
                                : "bg-gray-50 text-text-sub border border-gray-200"
                          }`}>
                            {doc.role}
                          </span>
                        </div>

                        {/* Philosophy quote */}
                        <div className="mt-4 border-l-2 border-mint pl-4">
                          <p className="text-sm font-medium text-navy italic">
                            &ldquo;{doc.philosophy}&rdquo;
                          </p>
                        </div>

                        <p className="mt-3 text-sm text-text-sub leading-relaxed">
                          {doc.summary}
                        </p>

                        {/* Specialty tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {doc.specialty.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-bg-light px-3 py-1.5 text-xs font-medium text-navy"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Schedule panel */}
                  <div className="relative border-t border-gray-100 lg:border-l lg:border-t-0">
                    {/* Gradient accent top (mobile) / left (desktop) */}
                    <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${doc.color} lg:h-full lg:w-1`} />

                    <div className="p-8 sm:p-10 lg:pl-9">
                      <p className="text-xs font-bold uppercase tracking-widest text-text-sub mb-5">
                        진료 요일
                      </p>

                      {doc.schedule.off.length > 0 ? (
                        <>
                          <div className="grid grid-cols-6 gap-2">
                            {dayLabels.map((day) => {
                              const isWorking = doc.schedule.working.includes(day);
                              return (
                                <div key={day} className="flex flex-col items-center gap-2">
                                  <span className="text-[11px] font-semibold text-text-sub">{day}</span>
                                  <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all duration-200 ${
                                      isWorking
                                        ? `bg-gradient-to-br ${doc.color} text-white shadow-md`
                                        : "bg-gray-50 text-gray-300 border border-gray-100"
                                    }`}
                                  >
                                    {isWorking ? "진료" : "휴진"}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="mt-4 flex items-center gap-2 text-xs text-text-sub">
                            <span className="h-3 w-3 rounded bg-gray-200" />
                            <span>휴진: {doc.schedule.off.join("·")}요일</span>
                          </div>
                        </>
                      ) : (
                        <div className={`rounded-2xl bg-gradient-to-br ${doc.color} p-5 text-white`}>
                          <p className="text-lg font-bold">{doc.schedule.working.join(", ")}</p>
                          <p className="mt-1 text-sm text-white/80">수술 일정에 따라 변동될 수 있습니다</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Unified Schedule Overview */}
          <div className="mt-14">
            <div className="text-center mb-8">
              <p className="text-mint font-semibold text-sm mb-2">Weekly Schedule</p>
              <h3 className="text-2xl font-bold text-navy">주간 진료 일정표</h3>
              <p className="mt-2 text-sm text-text-sub">원장님별 진료 요일을 한눈에 비교하세요</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy">
                      <th className="px-6 py-4 text-left text-sm font-bold text-white sm:px-8">원장</th>
                      {dayLabels.map((day) => (
                        <th key={day} className="px-4 py-4 text-center text-sm font-bold text-white sm:px-6">{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doc, idx) => (
                      <tr key={doc.name} className={`border-b border-gray-50 transition-colors hover:bg-bg-light/60 ${idx % 2 === 1 ? "bg-gray-50/30" : ""}`}>
                        <td className="px-6 py-5 sm:px-8">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${doc.color} text-xs font-bold text-white`}>
                              {doc.name.charAt(0)}
                            </div>
                            <div>
                              <span className="font-bold text-navy">{doc.name}</span>
                              <span className="ml-2 text-xs text-text-sub">{doc.role}</span>
                            </div>
                          </div>
                        </td>
                        {dayLabels.map((day) => {
                          const isWorking = doc.schedule.off.length > 0
                            ? doc.schedule.working.includes(day)
                            : day === "금";
                          return (
                            <td key={day} className="px-4 py-5 text-center sm:px-6">
                              {isWorking ? (
                                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${doc.color} text-[10px] font-bold text-white shadow-sm`}>
                                  ✓
                                </span>
                              ) : (
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-300">—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Reservation Notice */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-navy-light to-navy shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-8 py-7 sm:px-10">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-white">예약 안내</p>
                <p className="mt-1 text-sm text-white/80 leading-relaxed">
                  네이버 예약 요청 시, 병원에서 해당 원장님의 스케줄을 확인한 후 예약 확정 안내를 드립니다. 특정 원장님 지정 진료를 원하시면 예약 시 말씀해 주세요.
                </p>
              </div>
              <div className="flex flex-shrink-0 gap-3">
                <a
                  href="tel:031-546-0051"
                  className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/25 transition-colors"
                >
                  전화 상담
                </a>
                <a
                  href="https://booking.naver.com/booking/13/bizes/645159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy hover:bg-mint hover:text-white transition-colors"
                >
                  네이버 예약
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-text-sub">
            * 의료진 상세 약력은 확인 후 업데이트 예정입니다. 진료 일정은 병원 사정에 따라 변경될 수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}
