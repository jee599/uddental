import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer, Header } from "@/components/site-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "동백유디치과 | 심플하고 신뢰감 있는 지역 치과",
  description: "예방 중심 진료, 정직한 진료비, 실제 병원 사진을 바탕으로 구성한 동백유디치과 사이트 시안입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
