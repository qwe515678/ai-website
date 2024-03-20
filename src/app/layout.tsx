import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import ContextProvider from "../components/ui/providers";
import dynamic from "next/dynamic";
import ScrollTest from "@/components/ui/scrollProgress";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const Mouse = dynamic(() => import("@/components/ui/Mouse"), { ssr: false });
const montserrat = Unbounded({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Ai website",
  description: "Created by Dmitrii Levkin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={
          montserrat.className +
          " group/body dark relative bg-black text-white "
        }
        style={{ background: "black" }}
      >
        <Analytics />
        <SpeedInsights />
        <ContextProvider>
          <ScrollTest />
          <Mouse />
          <div className="">{children}</div>
        </ContextProvider>
      </body>
    </html>
  );
}
