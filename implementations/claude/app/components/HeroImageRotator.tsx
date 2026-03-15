"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 012.jpeg", alt: "접수 데스크" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg", alt: "대기실" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-45 001.jpeg", alt: "진료 복도" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg", alt: "진료실" },
  { src: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 006.jpeg", alt: "디지털 장비" },
];

export default function HeroImageRotator() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-mint" : "w-1.5 bg-white/50"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
