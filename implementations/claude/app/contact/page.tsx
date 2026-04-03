"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="상담/예약"
        title="편하게 상담하세요"
        description="전화, 네이버 예약, 카카오톡, 온라인 문의 등 편한 방법으로 상담받으실 수 있습니다."
      />

      <section className="py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* 빠른 상담 */}
            <div className="space-y-6">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                  빠른 상담
                </h2>
              </ScrollReveal>

              {/* 전화 */}
              <ScrollReveal delay={100}>
                <a
                  href="tel:031-546-0051"
                  className="flex items-center gap-5 rounded-3xl p-5 shadow-sm ring-1 ring-black/[0.03] bg-white sm:p-7 lg:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-text-sub">전화 상담</p>
                    <p className="text-2xl font-bold text-navy">031-546-0051</p>
                  </div>
                </a>
              </ScrollReveal>

              {/* 네이버 예약 */}
              <ScrollReveal delay={200}>
                <a
                  href="https://booking.naver.com/booking/13/bizes/645159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-3xl p-5 shadow-sm ring-1 ring-black/[0.03] bg-white sm:p-7 lg:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#03C75A]">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                  <div>
                    <p className="text-base text-text-sub">네이버 예약</p>
                    <p className="text-xl font-bold text-navy">
                      온라인으로 간편 예약
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* 카카오톡 */}
              <ScrollReveal delay={300}>
                <a
                  href="https://pf.kakao.com/_avxbGu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-3xl p-5 shadow-sm ring-1 ring-black/[0.03] bg-white sm:p-7 lg:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500]">
                    <svg className="h-7 w-7 text-[#3C1E1E]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.65 1.735 4.985 4.377 6.365l-.89 3.29a.5.5 0 00.766.548l3.83-2.55c.62.09 1.257.137 1.917.137 5.523 0 10-3.463 10-7.79S17.523 3 12 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-text-sub">카카오톡 상담</p>
                    <p className="text-xl font-bold text-navy">
                      카톡으로 편하게 문의
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* 예약 안내 */}
              <ScrollReveal delay={400}>
                <div className="rounded-3xl border border-mint/30 bg-mint/5 p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7 lg:p-8">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    예약 안내
                  </h3>
                  <p className="text-base text-text-sub">
                    네이버 예약 요청 시, 병원에서 스케줄을 확인한 후 예약 확정 안내를 드립니다.
                  </p>
                </div>
              </ScrollReveal>

              {/* 진료시간 */}
              <ScrollReveal delay={500}>
                <div className="rounded-3xl bg-bg-light p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-7 lg:p-8">
                  <h3 className="text-lg font-bold text-navy mb-4">
                    진료시간 안내
                  </h3>
                  <div className="text-base text-text-sub space-y-2">
                    <p>평일 09:30 – 18:30</p>
                    <p>토요일 09:30 – 14:30</p>
                    <p>점심시간 13:00 – 14:00 (토요일 없음)</p>
                    <p>일요일/공휴일 휴진</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* 온라인 문의 폼 */}
            <ScrollReveal delay={200} direction="right">
              <h2 className="text-3xl font-bold text-navy mb-8 sm:text-4xl">
                온라인 문의
              </h2>
              {submitted ? (
                <div className="rounded-3xl border border-mint bg-mint/5 p-10 text-center shadow-sm ring-1 ring-black/[0.03]">
                  <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full bg-mint/20">
                    <svg className="h-9 w-9 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    문의가 접수되었습니다
                  </h3>
                  <p className="mt-3 text-base text-text-sub">
                    빠른 시일 내에 연락드리겠습니다. 급한 문의는 전화로 연락해
                    주세요.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", message: "" });
                    }}
                    className="mt-5 text-base font-semibold text-mint"
                  >
                    새 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-medium text-navy mb-2"
                    >
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 text-base focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-medium text-navy mb-2"
                    >
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 text-base focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-base font-medium text-navy mb-2"
                    >
                      문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 text-base focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-colors resize-none"
                      placeholder="증상이나 궁금한 점을 자유롭게 적어주세요."
                    />
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-bg-light p-4 text-sm text-text-sub space-y-1.5">
                    <p>개인정보 수집 항목: 이름, 연락처, 문의내용 (임시)</p>
                    <p>수집 목적: 진료 상담 및 예약 안내 (임시)</p>
                    <p>보관 기간: 상담 종료 후 최대 12개월 (임시)</p>
                    <label className="mt-2 flex items-center gap-2 text-sm text-navy">
                      <input type="checkbox" required className="h-4 w-4" />
                      개인정보 수집·이용에 동의합니다. (임시)
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-navy py-4.5 text-base font-bold text-white transition-colors sm:text-lg"
                  >
                    문의하기
                  </button>
                  <p className="text-sm text-text-sub text-center">
                    * 제출하신 정보는 상담 목적으로만 사용됩니다.
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
