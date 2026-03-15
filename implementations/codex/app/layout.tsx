import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const bodyFont = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const displayFont = Noto_Serif_KR({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "동백유디치과 | Codex 구현본",
  description: "심플하고 전문적이며 친근한 한국 치과 톤의 Next.js 구현본",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <div className="site-frame">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
