"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";

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
        description="전화, 네이버 예약, 온라인 문의 등 편한 방법으로 상담받으실 수 있습니다."
      />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Quick Contact */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy">빠른 상담</h2>

              {/* Phone */}
              <a
                href="tel:031-546-0051"
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-6 hover:border-mint hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-sub">전화 상담</p>
                  <p className="text-xl font-bold text-navy">031-546-0051</p>
                </div>
              </a>

              {/* Naver Booking */}
              <a
                href="https://booking.naver.com/booking/13/bizes/645159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-6 hover:border-mint hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#03C75A]">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <p className="text-sm text-text-sub">네이버 예약</p>
                  <p className="text-lg font-bold text-navy">
                    온라인으로 간편 예약
                  </p>
                </div>
              </a>

              {/* Info */}
              <div className="rounded-2xl bg-bg-light p-6">
                <h3 className="font-bold text-navy mb-3">진료시간 안내</h3>
                <div className="text-sm text-text-sub space-y-1">
                  <p>평일 09:30 – 18:30</p>
                  <p>토요일 09:30 – 14:30</p>
                  <p>점심시간 13:00 – 14:00 (토요일 없음)</p>
                  <p>일요일/공휴일 휴진</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">온라인 문의</h2>
              {submitted ? (
                <div className="rounded-2xl border border-mint bg-mint/5 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mint/20">
                    <svg className="h-8 w-8 text-mint" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy">
                    문의가 접수되었습니다
                  </h3>
                  <p className="mt-2 text-sm text-text-sub">
                    빠른 시일 내에 연락드리겠습니다. 급한 문의는 전화로 연락해
                    주세요.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", message: "" });
                    }}
                    className="mt-4 text-sm font-semibold text-mint hover:text-navy transition-colors"
                  >
                    새 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1.5"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy mb-1.5"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-1.5"
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
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-colors resize-none"
                      placeholder="증상이나 궁금한 점을 자유롭게 적어주세요."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-navy py-3.5 text-sm font-bold text-white hover:bg-navy-light transition-colors"
                  >
                    문의하기
                  </button>
                  <p className="text-xs text-text-sub text-center">
                    * 제출하신 정보는 상담 목적으로만 사용됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
