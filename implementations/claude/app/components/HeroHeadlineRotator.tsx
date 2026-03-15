"use client";

import { useEffect, useState } from "react";

const headlines: [React.ReactNode, React.ReactNode][] = [
  [
    <>전국 유디 <span className="text-[#0097a7]">네트워크</span></>,
    <>동백에서 <span className="text-[#0097a7]">동일한</span> 진료 기준</>,
  ],
  [
    <>브랜드 <span className="text-[#0097a7]">규모의 강점</span></>,
    <><span className="text-[#0097a7]">합리적인</span> 진료비</>,
  ],
  [
    <>예방 중심 <span className="text-[#0097a7]">시스템</span></>,
    <>가족 치아를 <span className="text-[#0097a7]">오래 건강하게</span></>,
  ],
  [
    <><span className="text-[#0097a7]">과잉 없이</span> 필요한 진료만</>,
    <><span className="text-[#0097a7]">정직하게</span> 설명하고 치료</>,
  ],
  [
    <>우리동네 <span className="text-[#0097a7]">접근성</span></>,
    <><span className="text-[#0097a7]">신뢰</span>할 수 있는 치과 네트워크</>,
  ],
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
    <div className="max-w-[760px] min-h-[80px] sm:min-h-[104px] lg:min-h-[132px]">
      <h1
        className={`text-center text-[1.65rem] font-bold leading-[1.3] tracking-[-0.02em] text-gray-900 transition-all duration-300 sm:text-[2.15rem] lg:text-5xl lg:text-left ${
          visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <span className="block whitespace-nowrap">{headlines[index][0]}</span>
        <span className="block whitespace-nowrap">{headlines[index][1]}</span>
      </h1>
    </div>
  );
}
