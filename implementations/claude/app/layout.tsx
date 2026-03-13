import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingReservation from "./components/FloatingReservation";

export const metadata: Metadata = {
  title: "동백유디치과 | 가족을 진료하는 마음",
  description:
    "용인 동백 유디치과의원. 임플란트, 충치치료, 소아치과, 예방치료. 예방 중심 정직한 진료.",
  keywords: "동백유디치과, 용인치과, 동백치과, 임플란트, 충치치료, 소아치과"
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
      </head>
      <body className="bg-white antialiased">
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <FloatingReservation />
        <Footer />
      </body>
    </html>
  );
}
