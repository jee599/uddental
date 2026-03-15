"use client";

type Props = { className?: string };

function focusSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

  el.classList.add("section-focus");
  window.setTimeout(() => el.classList.remove("section-focus"), 1200);
}

export default function MobileQuickActions({ className = "" }: Props) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      <button
        type="button"
        onClick={() => focusSection("home-location")}
        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs font-semibold text-black"
      >
        위치
      </button>
      <button
        type="button"
        onClick={() => focusSection("home-hours")}
        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-2.5 py-2.5 text-xs font-semibold text-black"
      >
        진료시간
      </button>
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
