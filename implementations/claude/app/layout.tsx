import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingReservation from "./components/FloatingReservation";


export const metadata: Metadata = {
  title: "동백유디치과 | 용인 동백 임플란트·치아교정·소아치과 전문",
  description:
    "용인 동백역 유디치과의원. 임플란트, 치아교정, 충치치료, 소아치과, 예방치료 전문. 가족을 진료하는 마음으로 예방 중심 정직한 진료를 약속합니다. 031-546-0051",
  keywords:
    "동백유디치과, 용인치과, 동백치과, 동백역치과, 임플란트, 치아교정, 충치치료, 소아치과, 예방치료, 용인동백",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body suppressHydrationWarning className="bg-white antialiased">
        <Header />
        <main>{children}</main>
        <FloatingReservation />
        <Footer />
      </body>
    </html>
  );
}
