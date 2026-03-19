import PageHero from "../components/PageHero";

const doctors = [
  {
    name: "박 원장",
    role: "대표원장",
    color: "from-navy to-[#2a6cb8]",
    bgTint: "from-navy/3 to-transparent",
    schedule: { working: ["월", "화", "금", "토"], off: ["수", "목"] },
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    career: [
      "(임시) 서울대학교 치의학대학원 졸업",
      "(임시) 서울대학교치과병원 수련",
      "(임시) 대한치과보존학회 정회원",
      "(임시) 前 강남 OO치과 원장",
    ],
    icon: "🦷",
  },
  {
    name: "권 원장",
    role: "원장",
    color: "from-[#1a5c96] to-[#2980b9]",
    bgTint: "from-[#1a5c96]/3 to-transparent",
    schedule: { working: ["월", "화", "수", "목"], off: ["금", "토"] },
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    career: [
      "(임시) 연세대학교 치과대학 졸업",
      "(임시) 연세대학교치과병원 수련",
      "(임시) 대한치과보철학회 정회원",
      "(임시) 前 용인 OO치과 진료과장",
    ],
    icon: "🔬",
  },
  {
    name: "조 원장",
    role: "구강외과전문의",
    color: "from-mint to-[#0097a7]",
    bgTint: "from-mint/3 to-transparent",
    schedule: { working: ["금요일 및 수술일"], off: [] as string[] },
    specialty: ["임플란트", "구강외과", "사랑니 발치", "턱관절·보톡스"],
    career: [
      "(임시) 경희대학교 치과대학 졸업",
      "(임시) 경희대학교치과병원 구강악안면외과 수련",
      "(임시) 구강악안면외과 전문의 취득",
      "(임시) 대한구강악안면외과학회 정회원",
      "(임시) 대한턱관절교합학회 정회원",
    ],
    icon: "⚕️",
  },
];

const dayLabels = ["월", "화", "수", "목", "금", "토"] as const;

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        bgImage="/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg"
        label="의료진"
        title="3인 원장 체제의 전문 진료"
        description="보존·보철·치주·구강외과 전 분야를 각 분야 전문 원장이 직접 진료합니다."
      />

      {/* 의료진 카드 섹션 */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doc, idx) => (
              <div
                key={doc.name}
                className={`animate-fade-up animate-fade-up-${idx + 1} group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* 그라데이션 헤더 */}
                <div className={`relative h-32 bg-gradient-to-r ${doc.color}`}>
                  {/* 장식 원형 */}
                  <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white/10" />
                  <div className="absolute bottom-6 right-12 h-8 w-8 rounded-full bg-white/5" />
                </div>

                {/* 아바타 + 본문 */}
                <div className="relative px-6 pb-6">
                  {/* 아바타 - 헤더와 본문 사이에 걸침 */}
                  <div className="flex justify-center -mt-10">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${doc.color} text-3xl shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:scale-105`}>
                      <span role="img" aria-label={doc.role}>{doc.icon}</span>
                    </div>
                  </div>

                  {/* 이름 + 직책 */}
                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold text-navy">{doc.name}</h2>
                    <span className={`mt-2 inline-block rounded-full px-3.5 py-1 text-xs font-bold ${
                      doc.role === "구강외과전문의"
                        ? "bg-mint/10 text-mint border border-mint/20"
                        : doc.role === "대표원장"
                          ? "bg-navy/8 text-navy border border-navy/15"
                          : "bg-gray-50 text-text-sub border border-gray-200"
                    }`}>
                      {doc.role}
                    </span>
                  </div>

                  {/* 약력 */}
                  <div className="mt-5">
                    <p className="text-xs font-bold text-text-sub uppercase tracking-wider mb-2">약력</p>
                    <ul className="space-y-1.5">
                      {doc.career.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-navy leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 전문 분야 태그 */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {doc.specialty.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium border transition-colors ${
                          doc.role === "구강외과전문의"
                            ? "border-mint/20 bg-mint/5 text-mint"
                            : "border-navy/10 bg-navy/5 text-navy"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 진료 요일 */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <p className="text-xs font-bold text-text-sub mb-3">진료 요일</p>
                    {doc.schedule.off.length > 0 ? (
                      <div className="flex gap-1.5">
                        {dayLabels.map((day) => {
                          const isWorking = doc.schedule.working.includes(day);
                          return (
                            <div
                              key={day}
                              className={`flex-1 flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-bold transition-all ${
                                isWorking
                                  ? `bg-gradient-to-b ${doc.color} text-white shadow-sm`
                                  : "bg-gray-50 text-gray-300"
                              }`}
                            >
                              <span>{day}</span>
                              {isWorking && (
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={`rounded-xl bg-gradient-to-r ${doc.color} px-4 py-3 text-center`}>
                        <p className="text-sm font-bold text-white">{doc.schedule.working.join(", ")}</p>
                        <p className="mt-1 text-[11px] text-white/70">수술 일정에 따라 변동</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 주간 일정표 */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy">주간 진료 일정표</h3>
              <p className="mt-2 text-[15px] text-text-sub">원장님별 진료 요일을 한눈에 비교하세요</p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-navy via-[#1a3f6b] to-navy-light">
                      <th className="px-6 py-5 text-left text-sm font-bold text-white sm:px-8">원장</th>
                      {dayLabels.map((day) => (
                        <th key={day} className="px-4 py-5 text-center text-sm font-bold text-white/90 sm:px-6">{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doc, idx) => (
                      <tr
                        key={doc.name}
                        className={`border-b border-gray-100 transition-colors duration-200 hover:bg-mint/5 ${idx % 2 === 1 ? "bg-bg-light/50" : "bg-white"}`}
                      >
                        <td className="px-6 py-5 sm:px-8">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${doc.color} text-sm shadow-sm`}>
                              <span role="img" aria-label={doc.name}>{doc.icon}</span>
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
                                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${doc.color} text-white shadow-sm transition-transform duration-200 hover:scale-110`}>
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                </span>
                              ) : (
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-xs text-gray-300">—</span>
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

          {/* 예약 CTA 배너 */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-navy-light to-navy shadow-xl">
            <div className="relative px-8 py-12 sm:px-12 sm:py-14 text-center">
              {/* 장식 요소 */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-mint/10" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />
              <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-white/3" />

              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  원하시는 원장님을 지정해서 예약하세요
                </h3>
                <p className="mt-3 text-[15px] text-white/70 max-w-lg mx-auto leading-relaxed">
                  네이버 예약 요청 시, 병원에서 해당 원장님의 스케줄을 확인한 후 예약 확정 안내를 드립니다.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:031-546-0051"
                    className="inline-flex items-center gap-2.5 rounded-full bg-warm px-8 py-4 text-base font-bold text-white shadow-lg shadow-warm/30 hover:bg-warm/90 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    전화 상담
                  </a>
                  <a
                    href="https://booking.naver.com/booking/13/bizes/645159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#03C75A] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#03C75A]/30 hover:bg-[#02b351] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                    </svg>
                    네이버 예약
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-text-sub">
            * 의료진 상세 약력은 확인 후 업데이트 예정입니다. 진료 일정은 병원 사정에 따라 변경될 수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}
