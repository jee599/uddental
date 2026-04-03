import Image from "next/image";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

export default function LocationPage() {
  return (
    <>
      <PageHero label="오시는길" title="오시는길 · 진료시간" />

      <section className="py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* 외관 이미지 */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-black/[0.03]">
                <Image
                  src="/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-37 002.jpeg"
                  alt="동백유디치과 외관"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-text-sub text-center">
                * 카카오맵/네이버지도 임베드는 배포 시 연동 예정
              </p>
            </ScrollReveal>

            {/* 정보 */}
            <div className="space-y-10">
              {/* 주소 */}
              <ScrollReveal delay={100}>
                <h2 className="text-2xl font-bold text-navy mb-5 sm:text-3xl">
                  주소
                </h2>
                <div className="rounded-3xl bg-bg-light p-5 space-y-4 shadow-sm ring-1 ring-black/[0.03] sm:p-7 lg:p-8">
                  <div>
                    <p className="font-medium text-navy text-base">도로명</p>
                    <p className="text-text-sub mt-1 text-base">
                      경기 용인시 기흥구 동백중앙로 273 훼미리프라자2 2층
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-base">지번</p>
                    <p className="text-text-sub mt-1 text-base">
                      경기 용인시 기흥구 중동 830-2 훼미리프라자2 2층
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* 진료시간 */}
              <ScrollReveal delay={200}>
                <h2 className="text-2xl font-bold text-navy mb-5 sm:text-3xl">
                  진료시간
                </h2>
                <div className="rounded-3xl bg-bg-light p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7 lg:p-8">
                  <table className="w-full text-sm sm:text-base">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 font-medium text-navy w-20 sm:w-28">평일</td>
                        <td className="py-4 text-text-main">09:30 – 18:30</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-medium text-navy">토요일</td>
                        <td className="py-4 text-text-main">09:30 – 14:30</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-medium text-navy">점심시간</td>
                        <td className="py-4 text-text-main">
                          13:00 – 14:00{" "}
                          <span className="text-text-sub text-sm">
                            (토요일 없음)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 font-medium text-navy">일/공휴일</td>
                        <td className="py-4 text-red-500 font-medium">휴진</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              {/* 교통 안내 */}
              <ScrollReveal delay={300}>
                <h2 className="text-2xl font-bold text-navy mb-5 sm:text-3xl">
                  교통 안내
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-mint/20">
                      <svg className="h-5 w-5 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy text-base">대중교통</p>
                      <p className="text-text-sub mt-1 text-base">
                        에버라인 어정역 1번출구에서 약 1,000m (도보 약 15분)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-mint/20">
                      <svg className="h-5 w-5 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy text-base">주차</p>
                      <p className="text-text-sub mt-1 text-base">
                        건물 지하주차장 이용 가능
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 연락처 */}
              <ScrollReveal delay={400}>
                <h2 className="text-2xl font-bold text-navy mb-5 sm:text-3xl">
                  연락처
                </h2>
                <div className="space-y-3 text-base">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-navy">전화</span>
                    <a
                      href="tel:031-546-0051"
                      className="text-mint font-semibold text-lg"
                    >
                      031-546-0051
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-navy">팩스</span>
                    <span className="text-text-sub">031-546-0052</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
