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
        label="의료진"
        title="풍부한 경험의 의료진"
        description="3인 원장 체제로 보존·보철·치주·구강외과 전 분야를 진료합니다."
      />

      <section className="py-14 sm:py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Doctor Cards */}
          <div className="space-y-10">
            {doctors.map((doc, idx) => (
              <div
                key={doc.name}
                className={`animate-fade-up animate-fade-up-${idx + 1} group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Top accent gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${doc.color}`} />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
                  {/* Left: Profile */}
                  <div className={`relative p-8 sm:p-10 bg-gradient-to-br ${doc.bgTint}`}>
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${doc.color} text-4xl shadow-xl transition-transform duration-300 group-hover:scale-105`}>
                          <span role="img" aria-label={doc.role}>{doc.icon}</span>
                        </div>
                        {doc.role === "구강외과전문의" && (
                          <div className="badge-shimmer absolute -top-2 -right-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                            전문의
                          </div>
                        )}
                        {doc.role === "대표원장" && (
                          <div className="absolute -top-2 -right-3 rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                            대표
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

                        {/* Career */}
                        <div className="mt-5 relative rounded-2xl bg-white/80 border border-gray-100 p-5">
                          <div className={`absolute -left-px top-4 bottom-4 w-1 rounded-full bg-gradient-to-b ${doc.color}`} />
                          <p className="pl-4 text-xs font-bold text-text-sub uppercase tracking-wider mb-3">약력</p>
                          <ul className="pl-4 space-y-1.5">
                            {doc.career.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[15px] text-navy leading-relaxed">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Specialty tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {doc.specialty.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-white border border-gray-200 px-3 py-1.5 text-xs font-medium text-navy shadow-sm transition-colors hover:border-mint hover:text-mint"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Schedule panel */}
                  <div className="relative border-t border-gray-100 lg:border-l lg:border-t-0 bg-gradient-to-b from-white to-bg-light">
                    <div className="p-8 sm:p-10 lg:pl-9">
                      <div className="flex items-center gap-2 mb-6">
                        <svg className="h-4 w-4 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <p className="text-sm font-bold text-navy">진료 요일</p>
                      </div>

                      {doc.schedule.off.length > 0 ? (
                        <>
                          <div className="space-y-2">
                            {dayLabels.map((day) => {
                              const isWorking = doc.schedule.working.includes(day);
                              return (
                                <div key={day} className={`flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-200 ${
                                  isWorking
                                    ? "bg-white border border-gray-100 shadow-sm"
                                    : "bg-gray-50"
                                }`}>
                                  <span className={`text-sm font-bold ${isWorking ? "text-navy" : "text-gray-300"}`}>
                                    {day}요일
                                  </span>
                                  {isWorking ? (
                                    <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${doc.color} px-3 py-1 text-xs font-bold text-white shadow-sm`}>
                                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                      진료
                                    </span>
                                  ) : (
                                    <span className="text-xs font-medium text-gray-300">휴진</span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      ) : (
                        <div className={`rounded-2xl bg-gradient-to-br ${doc.color} p-6 text-white shadow-lg`}>
                          <p className="text-xl font-bold">{doc.schedule.working.join(", ")}</p>
                          <p className="mt-2 text-sm text-white/80">수술 일정에 따라 변동될 수 있습니다</p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            사전 예약 필수
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Unified Schedule Overview */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <p className="text-mint font-bold text-base mb-1">Weekly Schedule</p>
              <h3 className="text-2xl font-bold text-navy">주간 진료 일정표</h3>
              <p className="mt-2 text-[15px] text-text-sub">원장님별 진료 요일을 한눈에 비교하세요</p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-navy to-navy-light">
                      <th className="px-6 py-5 text-left text-sm font-bold text-white sm:px-8">원장</th>
                      {dayLabels.map((day) => (
                        <th key={day} className="px-4 py-5 text-center text-sm font-bold text-white/90 sm:px-6">{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doc, idx) => (
                      <tr key={doc.name} className={`border-b border-gray-100 transition-colors hover:bg-mint/5 ${idx % 2 === 1 ? "bg-bg-light/50" : "bg-white"}`}>
                        <td className="px-6 py-5 sm:px-8">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${doc.color} text-sm shadow-sm`}>
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
                                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${doc.color} text-white shadow-sm transition-transform hover:scale-110`}>
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                </span>
                              ) : (
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-xs text-gray-300">—</span>
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
          <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-navy-light to-navy shadow-xl">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 px-8 py-8 sm:px-10">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-mint/10" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/5" />

              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="relative flex-1">
                <p className="text-lg font-bold text-white">예약 안내</p>
                <p className="mt-1 text-[15px] text-white/80 leading-relaxed">
                  네이버 예약 요청 시, 병원에서 해당 원장님의 스케줄을 확인한 후 예약 확정 안내를 드립니다. 특정 원장님 지정 진료를 원하시면 예약 시 말씀해 주세요.
                </p>
              </div>
              <div className="relative flex flex-shrink-0 gap-3">
                <a
                  href="tel:031-546-0051"
                  className="rounded-full bg-white/15 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white hover:bg-white/25 transition-all duration-300"
                >
                  전화 상담
                </a>
                <a
                  href="https://booking.naver.com/booking/13/bizes/645159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-navy shadow-lg hover:bg-mint hover:text-white hover:shadow-mint/30 transition-all duration-300"
                >
                  네이버 예약
                </a>
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
