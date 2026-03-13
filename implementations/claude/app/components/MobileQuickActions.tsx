"use client";

type Props = { className?: string };

export default function MobileQuickActions({ className = "" }: Props) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      <a
        href="#home-location"
        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs font-semibold text-black"
      >
        위치
      </a>
      <a
        href="#home-hours"
        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs font-semibold text-black"
      >
        진료시간
      </a>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("focusReservation"))}
        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs font-semibold text-black"
      >
        예약
      </button>
    </div>
  );
}
