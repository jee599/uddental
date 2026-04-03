import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const doctors = [
  {
    name: "박 원장님",
    role: "대표원장",
    accent: "#1a3a5c",
    days: ["월", "화", "금", "토"],
    off: "수·목",
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    career: [
      "서울대학교 치의학대학원 졸업",
      "서울대학교치과병원 수련",
      "대한치과보존학회 정회원",
      "前 강남 OO치과 원장",
    ],
  },
  {
    name: "권 원장님",
    role: "원장",
    accent: "#2563eb",
    days: ["월", "화", "수", "목"],
    off: "금·토",
    specialty: ["보존치료", "보철치료", "잇몸치료", "예방치료"],
    career: [
      "연세대학교 치과대학 졸업",
      "연세대학교치과병원 수련",
      "대한치과보철학회 정회원",
      "前 용인 OO치과 진료과장",
    ],
  },
  {
    name: "조 원장님",
    role: "구강외과전문의",
    accent: "#00897b",
    days: ["금"],
    off: "",
    specialty: ["임플란트", "구강외과", "사랑니 발치", "턱관절·보톡스"],
    career: [
      "경희대학교 치과대학 졸업",
      "경희대학교치과병원 구강악안면외과 수련",
      "구강악안면외과 전문의 취득",
      "대한구강악안면외과학회 정회원",
      "대한턱관절교합학회 정회원",
    ],
  },
];

const allDays = ["월", "화", "수", "목", "금", "토"] as const;

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="의료진"
        title="3인 원장 체제의 전문 진료"
        description="보존·보철·치주·구강외과 전 분야를 각 분야 전문 원장님이 직접 진료합니다."
      />

      {/* 원장님별 섹션: 이름 → 근무표 → 이력 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 space-y-20">
          {doctors.map((doc, idx) => (
            <ScrollReveal key={doc.name} delay={idx * 100}>
              <div>
                {/* 1) 원장님 */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
                    style={{ backgroundColor: doc.accent }}
                  >
                    {doc.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-navy sm:text-2xl lg:text-3xl">{doc.name}</h2>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: doc.accent }}
                    >
                      {doc.role}
                    </span>
                  </div>
                </div>

                {/* 2) 근무표 */}
                <div className="rounded-2xl bg-[#fafafa] p-5 ring-1 ring-black/[0.03] sm:p-6 mb-8">
                  <div className="flex gap-1.5 sm:gap-2">
                    {allDays.map((d) => {
                      const on = doc.days.includes(d);
                      return (
                        <div
                          key={d}
                          className={`flex-1 h-10 rounded-lg flex items-center justify-center text-xs font-bold sm:h-12 sm:rounded-xl sm:text-sm lg:h-14 ${
                            on ? "text-white" : "bg-white text-gray-300 ring-1 ring-black/[0.04]"
                          }`}
                          style={on ? { backgroundColor: doc.accent } : undefined}
                        >
                          {d}
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-3 text-sm text-text-sub text-center">
                    {doc.off ? (
                      <>휴진 <span className="font-semibold text-navy">{doc.off}요일</span></>
                    ) : (
                      <span className="font-semibold text-navy">금요일 및 수술일 · 사전예약</span>
                    )}
                  </p>
                </div>

                {/* 3) 이력: 약력 + 전문분야 한 줄 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xs font-bold text-text-sub uppercase tracking-wider mb-3">약력</h3>
                    <ul className="space-y-2">
                      {doc.career.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-navy leading-relaxed">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: doc.accent }}
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-text-sub uppercase tracking-wider mb-3">전문 분야</h3>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialty.map((s) => (
                        <span
                          key={s}
                          className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${doc.accent} 4%, transparent)`,
                            color: doc.accent,
                            border: `1px solid color-mix(in srgb, ${doc.accent} 10%, transparent)`,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 구분선 */}
                {idx < doctors.length - 1 && (
                  <div className="mt-20 border-t border-gray-100" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#fafafa]">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              원하시는 원장님을 지정해서 예약하세요
            </h3>
            <p className="mt-4 text-base text-text-sub sm:text-lg max-w-lg mx-auto">
              네이버 예약 시 병원에서 스케줄 확인 후 예약 확정 안내를 드립니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:031-546-0051"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-bold text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-8 py-4 text-base font-bold text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
                네이버 예약
              </a>
            </div>
          </ScrollReveal>
          <p className="mt-10 text-xs text-text-sub">
            * 약력은 확인 후 업데이트 예정. 진료 일정은 병원 사정에 따라 변경 가능.
          </p>
        </div>
      </section>
    </>
  );
}
