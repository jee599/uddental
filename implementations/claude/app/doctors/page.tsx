import Link from "next/link";
import PageHero from "../components/PageHero";

const doctors = [
  {
    name: "박 원장",
    role: "대표원장",
    schedule: { working: ["월", "화", "금", "토"], off: ["수", "목"] },
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    summary: "상세 약력은 추후 업데이트 예정입니다.",
  },
  {
    name: "권 원장",
    role: "원장",
    schedule: { working: ["월", "화", "수", "목"], off: ["금", "토"] },
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    summary: "상세 약력은 추후 업데이트 예정입니다.",
  },
  {
    name: "조 원장",
    role: "구강외과전문의",
    schedule: { working: ["금요일 및 수술일"], off: [] as string[] },
    specialty: ["임플란트", "구강외과", "사랑니 발치", "턱관절 치료"],
    summary: "임플란트 수술 및 구강외과 진료를 담당합니다.",
  },
];

const dayLabels = ["월", "화", "수", "목", "금", "토"] as const;

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="의료진"
        title="풍부한 경험의 의료진"
        description="각 원장님의 진료 요일과 전문 분야를 확인하세요."
      />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Doctor Cards — stacked layout for emphasis */}
          <div className="space-y-6">
            {doctors.map((doc, idx) => (
              <div
                key={doc.name}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:border-mint/40"
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-mint opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">
                  {/* Main info */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-5">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-light text-2xl font-bold text-white shadow-sm">
                          {doc.name.charAt(0)}
                        </div>
                        {doc.role === "구강외과전문의" && (
                          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-mint text-[10px] font-bold text-white shadow-sm">
                            ✦
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="text-xl sm:text-2xl font-bold text-navy">{doc.name}</h2>
                          <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                            doc.role === "구강외과전문의"
                              ? "bg-mint/10 text-mint"
                              : doc.role === "대표원장"
                                ? "bg-navy/10 text-navy"
                                : "bg-gray-100 text-text-sub"
                          }`}>
                            {doc.role}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-text-sub leading-relaxed">
                          {doc.summary}
                        </p>

                        {/* Specialty tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {doc.specialty.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-text-sub"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Schedule panel */}
                  <div className="border-t border-gray-100 bg-gradient-to-br from-bg-light to-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:min-w-[280px]">
                    <p className="text-xs font-semibold text-text-sub mb-4">진료 요일</p>

                    {doc.schedule.off.length > 0 ? (
                      <div className="flex gap-1.5">
                        {dayLabels.map((day) => {
                          const isWorking = doc.schedule.working.includes(day);
                          return (
                            <div key={day} className="flex flex-col items-center gap-1.5">
                              <span className="text-[10px] font-medium text-text-sub">{day}</span>
                              <span
                                className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                                  isWorking
                                    ? "bg-navy text-white shadow-sm"
                                    : "bg-gray-100 text-gray-300"
                                }`}
                              >
                                {isWorking ? "●" : "—"}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="rounded-xl bg-mint/10 border border-mint/20 px-4 py-3">
                        <p className="text-sm font-semibold text-navy">{doc.schedule.working.join(", ")}</p>
                        <p className="mt-1 text-xs text-text-sub">수술 일정에 따라 변동될 수 있습니다</p>
                      </div>
                    )}

                    {doc.schedule.off.length > 0 && (
                      <p className="mt-3 text-xs text-text-sub">
                        휴진: <span className="font-semibold text-navy">{doc.schedule.off.join(", ")}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Unified Schedule Table */}
          <div className="mt-12 rounded-2xl border border-gray-100 overflow-hidden">
            <div className="bg-navy px-6 py-4 sm:px-8">
              <h3 className="text-lg font-bold text-white">주간 진료 일정표</h3>
              <p className="mt-1 text-sm text-white/70">원장님별 진료 요일을 한눈에 확인하세요</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-bg-light">
                    <th className="px-6 py-3.5 text-left font-semibold text-navy sm:px-8">원장</th>
                    {dayLabels.map((day) => (
                      <th key={day} className="px-3 py-3.5 text-center font-semibold text-navy sm:px-5">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {doctors.map((doc) => (
                    <tr key={doc.name} className="hover:bg-bg-light/50 transition-colors">
                      <td className="px-6 py-4 sm:px-8">
                        <span className="font-semibold text-navy">{doc.name}</span>
                        <span className="ml-2 text-xs text-text-sub">{doc.role}</span>
                      </td>
                      {dayLabels.map((day) => {
                        const isWorking = doc.schedule.off.length > 0
                          ? doc.schedule.working.includes(day)
                          : day === "금";
                        return (
                          <td key={day} className="px-3 py-4 text-center sm:px-5">
                            {isWorking ? (
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-mint/15 text-xs font-bold text-mint">✓</span>
                            ) : (
                              <span className="text-gray-300">—</span>
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

          {/* Reservation Notice */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl bg-gradient-to-r from-navy to-navy-light px-6 py-5 sm:px-8">
            <div className="flex-1">
              <p className="font-bold text-white">예약 안내</p>
              <p className="mt-1 text-sm text-white/80">
                네이버 예약 요청 시, 병원에서 스케줄을 확인한 후 예약 확정 안내를 드립니다.
              </p>
            </div>
            <a
              href="https://booking.naver.com/booking/13/bizes/645159"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy hover:bg-mint hover:text-white transition-colors"
            >
              네이버 예약
            </a>
          </div>

          <p className="mt-8 text-center text-xs text-text-sub">
            * 의료진 상세 약력은 확인 후 업데이트 예정입니다.
          </p>
        </div>
      </section>
    </>
  );
}
