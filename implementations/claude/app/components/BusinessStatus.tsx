"use client";

function getKstNow() {
  const now = new Date();
  const kstText = now.toLocaleString("sv-SE", { timeZone: "Asia/Seoul" });
  return new Date(kstText.replace(" ", "T"));
}

export default function BusinessStatus() {
  const now = getKstNow();
  const day = now.getDay(); // 0 Sun ... 6 Sat
  const minutes = now.getHours() * 60 + now.getMinutes();

  const isWeekday = day >= 1 && day <= 5;
  const isSaturday = day === 6;

  const openWeekday = 9 * 60 + 30;
  const closeWeekday = 18 * 60 + 30;
  const lunchStart = 13 * 60;
  const lunchEnd = 14 * 60;

  const openSaturday = 9 * 60 + 30;
  const closeSaturday = 14 * 60 + 30;

  let isOpen = false;

  if (isWeekday) {
    isOpen = minutes >= openWeekday && minutes < closeWeekday && !(minutes >= lunchStart && minutes < lunchEnd);
  } else if (isSaturday) {
    isOpen = minutes >= openSaturday && minutes < closeSaturday;
  }

  return (
    <div className="rounded-xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur">
      <p className={`text-sm font-bold ${isOpen ? "text-emerald-600" : "text-rose-500"}`}>
        {isOpen ? "지금 영업중" : "지금 진료 종료"}
      </p>
      <p className="mt-1 text-xs text-text-sub">평일 09:30–18:30 (13:00–14:00 점심)</p>
      <p className="text-xs text-text-sub">토요일 09:30–14:30 · 일/공휴일 휴진</p>
    </div>
  );
}
