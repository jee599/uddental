import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

const galleryImages = [
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg", alt: "접수 데스크", desc: "밝고 쾌적한 접수 공간" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg", alt: "대기실", desc: "편안한 소파와 넓은 대기 공간" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg", alt: "진료실", desc: "최신 장비를 갖춘 개별 진료실" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 006.jpeg", alt: "Vatech CT", desc: "3D CT로 정밀 진단" },
];

const faqs = [
  { q: "주차가 가능한가요?", a: "건물 지하주차장을 이용하실 수 있습니다." },
  { q: "토요일에도 진료하나요?", a: "토요일 09:30~14:30, 점심 없이 연속 진료합니다." },
  { q: "예약은 어떻게 하나요?", a: "전화(031-546-0051) 또는 네이버 예약으로 접수 가능합니다." },
  { q: "임플란트 상담만 받을 수 있나요?", a: "네, 부담 없이 상담만 가능합니다. 구강외과전문의가 CT 촬영 후 맞춤 계획을 안내합니다." },
];

export default function Home() {
  return (
    <>
      {/* ───── 히어로: 풀스크린 사진 + 오버레이 ───── */}
      <section className="relative h-[75vh] min-h-[420px] sm:h-[85vh] sm:min-h-[540px] md:h-[90vh]">
        <Image
          src="/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg"
          alt="동백유디치과 내부"
          fill
          className="object-cover brightness-110"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* ───── 진료시간 바 ───── */}
      <section className="bg-[#181D61]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-4 py-4 text-sm font-semibold tracking-tight text-white/90 sm:gap-x-8 sm:py-6 sm:text-lg lg:text-xl">
          <span><span className="text-[#5AB3DF]">평일</span> 09:30 - 18:30</span>
          <span className="text-white/20">|</span>
          <span><span className="text-[#5AB3DF]">토요일</span> 09:30 - 14:30 <span className="font-bold text-[#5AB3DF]">(점심 없이 연속)</span></span>
          <span className="text-white/20">|</span>
          <span><span className="text-[#5AB3DF]">점심</span> 13:00 - 14:00</span>
          <span className="text-white/20">|</span>
          <span>일·공휴일 <span className="text-white">휴진</span></span>
        </div>
      </section>

      {/* ───── 핵심 강점 ───── */}
      <section className="bg-bg-light py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:gap-5 md:grid-cols-4">
          {[
            { num: "3인", label: "원장 체제" },
            { num: "전문의", label: "구강외과전문의 상주" },
            { num: "5종", label: "턱관절 전문 장비" },
            { num: "토요일", label: "점심 없이 연속 진료" },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 120} direction="scale">
              <div className="rounded-3xl bg-white px-4 py-8 text-center shadow-sm ring-1 ring-black/[0.03] sm:px-6 sm:py-12 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <p className="text-3xl font-black text-navy sm:text-5xl lg:text-6xl">{s.num}</p>
                <p className="mt-2 text-sm font-medium text-text-sub sm:mt-3 sm:text-lg">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ───── 진료과목 ───── */}
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl bg-bg-light px-5 py-8 text-center shadow-sm ring-1 ring-black/[0.03] sm:rounded-3xl sm:px-8 sm:py-14">
              <h2 className="text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">진료과목</h2>
              <p className="mt-3 text-base text-text-sub sm:mt-4 sm:text-xl">자연치아 보존을 최우선으로, 필요한 진료만 정직하게</p>
            </div>
          </ScrollReveal>

          {/* 임플란트 — featured */}
          <div className="mt-16 grid items-center gap-10 md:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src="/images/generated/implant-closeup.png" alt="임플란트" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <span className="inline-block rounded-full bg-mint-light px-5 py-2 text-base font-semibold text-mint">구강외과전문의 상주</span>
              <h3 className="mt-5 text-3xl font-black text-navy sm:text-5xl lg:text-6xl">임플란트</h3>
              <p className="mt-4 text-base leading-relaxed text-text-sub sm:mt-6 sm:text-xl lg:text-2xl">
                구강외과전문의가 3D CT로 골밀도·신경 위치를 분석한 뒤, 진단부터 식립·보철까지 원스톱으로 진행합니다. 국내외 검증된 임플란트 시스템을 사용하며, 식립 후 정기 관리 프로그램을 운영합니다.
              </p>
              <Link href="/services" className="mt-6 inline-block text-base font-semibold text-mint hover:underline">자세히 보기 →</Link>
            </ScrollReveal>
          </div>

          {/* 나머지 서비스 */}
          <ScrollReveal delay={100}>
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "충치 · 신경치료", desc: "자연치아 보존 최우선. 레진부터 크라운까지." },
                { title: "잇몸치료", desc: "초음파 스케일링부터 치주 수술까지." },
                { title: "턱관절 · 보톡스", desc: "5종 전문 장비 물리치료 + 보톡스.", badge: "보톡스 가능" },
                { title: "예방 · 스케일링", desc: "건강보험 스케일링 + 불소 도포." },
              ].map((s) => (
                <Link key={s.title} href="/services" className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.03] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:rounded-3xl sm:p-8 lg:p-9">
                  <h3 className="text-lg font-bold text-text-main sm:text-2xl">{s.title}</h3>
                  {s.badge && <span className="mt-2 inline-block rounded-full bg-mint-light px-3 py-1 text-sm font-semibold text-mint">{s.badge}</span>}
                  <p className="mt-2 text-sm leading-relaxed text-text-sub sm:mt-3 sm:text-lg">{s.desc}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── 상담 안내 ───── */}
      <section className="bg-bg-light py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-5">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">부담 없이 상담부터<br />시작하세요</h2>
              <p className="mt-3 text-base leading-relaxed text-text-sub sm:mt-5 sm:text-lg lg:text-xl">
                증상 확인 → 정밀 진단 → 맞춤 치료 → 사후관리.<br />
                불필요한 치료 없이, 환자에게 맞는 계획을 안내합니다.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">
                {[
                  { step: "01", title: "상담", desc: "증상 확인 · 일정 안내" },
                  { step: "02", title: "정밀진단", desc: "3D CT · 디지털 분석" },
                  { step: "03", title: "맞춤치료", desc: "필요한 진료만 진행" },
                  { step: "04", title: "사후관리", desc: "정기검진 리마인드" },
                ].map((item, i) => (
                  <ScrollReveal key={item.step} delay={i * 100}>
                    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/[0.03] sm:rounded-2xl sm:p-6 lg:p-8">
                      <span className="text-2xl font-black text-mint/40 sm:text-3xl lg:text-4xl">{item.step}</span>
                      <p className="mt-1 text-base font-bold text-navy sm:mt-2 sm:text-xl lg:text-2xl">{item.title}</p>
                      <p className="mt-1 text-sm text-text-sub sm:mt-2 sm:text-base lg:text-lg">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── 원장별 진료시간 ───── */}
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl bg-bg-light px-5 py-8 text-center shadow-sm ring-1 ring-black/[0.03] sm:rounded-3xl sm:px-8 sm:py-14">
              <h2 className="text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">원장님별 진료 시간</h2>
              <p className="mt-2 text-sm text-text-sub sm:mt-3 sm:text-lg">평일 09:30–18:30 · 토 09:30–14:30 · 점심 13:00–14:00</p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {([
              { name: "박 원장님", role: "대표원장", days: ["월", "화", "금", "토"] as string[], off: "수·목" },
              { name: "권 원장님", role: "원장", days: ["월", "화", "수", "목"] as string[], off: "금·토" },
              { name: "조 원장님", role: "구강외과전문의", days: [] as string[], special: "금요일 및 수술일 · 사전예약" },
            ]).map((doc) => (
              <Link key={doc.name} href="/doctors" className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.03] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:rounded-3xl sm:p-7 lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">{doc.name.charAt(0)}</div>
                  <div>
                    <p className="text-base font-bold text-text-main sm:text-lg">{doc.name}</p>
                    <p className={`text-sm font-semibold ${doc.role === "구강외과전문의" ? "text-mint" : "text-text-sub"}`}>{doc.role}</p>
                  </div>
                </div>
                {doc.days.length > 0 ? (
                  <>
                    <div className="flex gap-1.5">
                      {["월", "화", "수", "목", "금", "토"].map((day) => {
                        const on = doc.days.includes(day);
                        return (
                          <div key={day} className="flex-1 text-center">
                            <span className="block text-xs text-text-sub">{day}</span>
                            <div className={`mt-1 rounded-md py-2 text-sm font-bold ${on ? "bg-mint text-white" : "bg-gray-50 text-gray-300"}`}>{on ? "●" : "—"}</div>
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-center text-sm text-text-sub">휴진: <span className="font-semibold text-text-main">{doc.off}요일</span></p>
                  </>
                ) : (
                  <div className="rounded-xl bg-mint-light px-4 py-4 text-center">
                    <p className="text-base font-bold text-mint">{doc.special}</p>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 시설 갤러리 ───── */}
      <section className="bg-bg-light py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl bg-white px-5 py-8 text-center shadow-sm ring-1 ring-black/[0.03] sm:rounded-3xl sm:px-8 sm:py-14">
              <h2 className="text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">시설 안내</h2>
              <p className="mt-3 text-base text-text-sub sm:text-lg">깨끗하고 편안한 진료 환경</p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 md:gap-5">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.alt} delay={i * 100} direction="scale">
              <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.03] hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 400px" />
                </div>
                <div className="bg-white px-3 py-2.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5">
                  <p className="text-sm font-bold text-navy sm:text-lg lg:text-xl">{img.alt}</p>
                  <p className="mt-0.5 text-xs text-text-sub sm:mt-1 sm:text-base">{img.desc}</p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 가족 신뢰 ───── */}
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/generated/family-smile.png" alt="건강한 가족 미소" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">가족의 치아를<br />오래 건강하게</h2>
            <p className="mt-5 text-lg leading-relaxed text-text-sub sm:text-xl">
              전국 유디치과 네트워크의 동일한 진료 기준과 시스템으로 운영됩니다. 브랜드 규모의 강점으로 합리적인 진료비와 체계적인 예방 프로그램을 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["예방 중심 진료", "정직한 설명", "합리적 진료비", "체계적 사후관리"].map((b) => (
                <span key={b} className="rounded-full border border-mint/20 bg-mint-light px-3 py-1.5 text-sm font-semibold text-navy sm:px-5 sm:py-2.5 sm:text-lg">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── 진료시간 + 오시는길 ───── */}
      <section id="home-location" className="scroll-mt-24 bg-bg-light py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 md:grid-cols-2">
            <div id="home-hours" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.03] sm:rounded-3xl sm:p-7 lg:p-10">
              <h3 className="text-xl font-bold text-navy sm:text-2xl">진료시간</h3>
              <table className="mt-4 w-full text-sm sm:mt-5 sm:text-base">
                <tbody className="divide-y divide-gray-50">
                  {[
                    { day: "평일", time: "09:30 - 18:30", note: "" },
                    { day: "토요일", time: "09:30 - 14:30", note: "점심 없이 연속" },
                    { day: "점심시간", time: "13:00 - 14:00", note: "토요일 제외" },
                    { day: "일/공휴일", time: "휴진", note: "" },
                  ].map((r) => (
                    <tr key={r.day}>
                      <td className="w-20 py-3 font-semibold text-navy sm:w-28 sm:py-4">{r.day}</td>
                      <td className="py-3 text-text-main sm:py-4">{r.time}</td>
                      <td className="py-3 text-right sm:py-4">{r.note && <span className="rounded-full bg-mint-light px-2 py-0.5 text-xs font-semibold text-mint sm:px-3 sm:py-1 sm:text-sm">{r.note}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.03] sm:rounded-3xl sm:p-7 lg:p-10">
              <h3 className="text-xl font-bold text-navy sm:text-2xl">오시는길</h3>
              <div className="mt-4 space-y-4 text-sm sm:mt-5 sm:space-y-5 sm:text-base">
                <div><p className="text-sm font-bold text-text-sub">주소</p><p className="mt-1 font-medium text-text-main">경기 용인시 기흥구 동백중앙로 273 훼미리프라자2 2층</p></div>
                <div><p className="text-sm font-bold text-text-sub">대중교통</p><p className="mt-1 font-medium text-text-main">에버라인 어정역 1번출구에서 약 1,000m</p></div>
                <div><p className="text-sm font-bold text-text-sub">주차</p><p className="mt-1 font-medium text-text-main">건물 지하주차장 이용 가능</p></div>
                <Link href="/location" className="inline-block text-base font-semibold text-mint hover:underline">지도 보기 →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-2xl font-extrabold text-navy sm:text-4xl lg:text-5xl">자주 묻는 질문</h2>
          <div className="mt-10 divide-y divide-gray-100">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between py-4 text-base font-semibold text-text-main hover:text-navy transition-colors sm:py-6 sm:text-lg">
                  {faq.q}
                  <svg className="h-6 w-6 shrink-0 text-text-sub transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-text-sub sm:pb-6 sm:text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
