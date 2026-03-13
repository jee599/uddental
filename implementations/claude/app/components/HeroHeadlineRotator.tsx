"use client";

import { useEffect, useState } from "react";

const headlines = [
  ["전국 유디 네트워크", "동백에서 동일한 진료 기준"],
  ["브랜드 규모의 강점", "합리적인 진료비"],
  ["예방 중심 시스템", "가족 치아를 오래 건강하게"],
  ["과잉 없이 필요한 진료만", "정직하게 설명하고 치료"],
  ["우리동네 접근성", "신뢰할 수 있는 치과 네트워크"],
];

export default function HeroHeadlineRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 220);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[760px] min-h-[104px] sm:min-h-[132px]">
      <h1
        className={`text-center text-[2.15rem] font-bold leading-[1.25] tracking-[-0.01em] text-white transition-all duration-300 sm:text-4xl lg:text-5xl ${
          visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <span className="block">{headlines[index][0]}</span>
        <span className="block text-mint">{headlines[index][1]}</span>
      </h1>
    </div>
  );
}
