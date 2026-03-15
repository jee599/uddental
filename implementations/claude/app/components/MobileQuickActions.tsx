"use client";

import { useEffect, useState } from "react";

type Props = { className?: string };

const DAY_NAMES = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

function getClinicStatus() {
  const now = new Date();
  const day = now.getDay();
  const hhmm = now.getHours() * 100 + now.getMinutes();
  const dayName = DAY_NAMES[day];

  if (day === 0) return { day: dayName, status: "휴무", open: false };
  if (day === 6) {
    if (hhmm >= 930 && hhmm < 1430) return { day: dayName, status: "진료중", open: true };
    if (hhmm < 930) return { day: dayName, status: "09:30 오픈", open: false };
    return { day: dayName, status: "진료 종료", open: false };
  }
  if (hhmm >= 930 && hhmm < 1300) return { day: dayName, status: "진료중", open: true };
  if (hhmm >= 1300 && hhmm < 1400) return { day: dayName, status: "점심시간", open: false };
  if (hhmm >= 1400 && hhmm < 1830) return { day: dayName, status: "진료중", open: true };
  if (hhmm < 930) return { day: dayName, status: "09:30 오픈", open: false };
  return { day: dayName, status: "진료 종료", open: false };
}

function focusSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  el.classList.add("section-focus");
  window.setTimeout(() => el.classList.remove("section-focus"), 1200);
}

export default function MobileQuickActions({ className = "" }: Props) {
  const [clinic, setClinic] = useState({ day: "", status: "", open: false });

  useEffect(() => {
    setClinic(getClinicStatus());
    const timer = setInterval(() => setClinic(getClinicStatus()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`grid grid-cols-3 gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={() => focusSection("home-location")}
        className="flex flex-col items-center justify-center rounded-xl border border-gray-900 bg-white px-1.5 py-2.5 transition-all hover:bg-gray-50 hover:-translate-y-0.5"
      >
        <span className="text-[11px] font-bold text-gray-800">위치</span>
        <span className="mt-0.5 text-[9px] text-gray-900 whitespace-nowrap">어정역 1번출구 근처</span>
      </button>
      <button
        type="button"
        onClick={() => focusSection("home-hours")}
        className="flex flex-col items-center justify-center rounded-xl border border-gray-900 bg-white px-1.5 py-2.5 transition-all hover:bg-gray-50 hover:-translate-y-0.5"
        suppressHydrationWarning
      >
        <span className="text-[11px] font-bold text-gray-800">진료시간</span>
        <span
          suppressHydrationWarning
          className={`mt-0.5 text-[10px] ${clinic.open ? "text-emerald-600 font-semibold" : "text-gray-900"}`}
        >
          {clinic.day ? `${clinic.day} · ${clinic.status}` : "확인중"}
        </span>
      </button>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("focusReservation"))}
        className="flex items-center justify-center rounded-xl bg-gray-900 px-1.5 py-2.5 text-[11px] font-bold text-white transition-all hover:bg-gray-800 hover:-translate-y-0.5"
      >
        예약하기
      </button>
    </div>
  );
}
