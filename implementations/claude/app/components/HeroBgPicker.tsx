"use client";

import { useState } from "react";

const COLORS = [
  { name: "현재 (Navy)", value: "#164b8b" },
  { name: "다크 네이비", value: "#0f1b2d" },
  { name: "차콜", value: "#2d3436" },
  { name: "슬레이트", value: "#1e293b" },
  { name: "딥 틸", value: "#134e4a" },
  { name: "포레스트", value: "#14532d" },
  { name: "인디고", value: "#312e81" },
  { name: "미드나잇", value: "#1e1b4b" },
  { name: "버건디", value: "#4a1526" },
  { name: "웜 그레이", value: "#44403c" },
];

export default function HeroBgPicker({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bg, setBg] = useState(COLORS[0].value);
  const [open, setOpen] = useState(false);

  return (
    <section style={{ backgroundColor: bg }} className="relative py-6 sm:py-14 lg:py-20 transition-colors duration-500">
      {children}

      {/* Color picker toggle */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-4 z-[60] h-10 w-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-lg hover:scale-110 transition-transform"
        aria-label="배경색 선택"
      >
        🎨
      </button>

      {/* Color picker panel */}
      {open && (
        <div className="fixed bottom-40 right-4 z-[60] rounded-2xl bg-white p-4 shadow-2xl border border-gray-200 w-56">
          <p className="text-xs font-bold text-gray-700 mb-3">히어로 배경색</p>
          <div className="grid grid-cols-5 gap-2">
            {COLORS.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setBg(c.value)}
                className={`h-9 w-9 rounded-full border-2 transition-transform hover:scale-110 ${
                  bg === c.value ? "border-mint scale-110 ring-2 ring-mint/30" : "border-gray-200"
                }`}
                style={{ backgroundColor: c.value }}
                title={c.name}
              />
            ))}
          </div>
          <p className="mt-2 text-[10px] text-gray-400 text-center">
            {COLORS.find((c) => c.value === bg)?.name} {bg}
          </p>
        </div>
      )}
    </section>
  );
}
