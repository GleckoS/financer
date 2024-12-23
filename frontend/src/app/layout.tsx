import "@/global/global.scss";
import localFont from "next/font/local";
import { LOCALE, THEME_COLOR } from "@/global/constants";
import type { Viewport } from "next";
import Footer from "@/components/ui/footer";

const IBMPlexSans = localFont({
  src: [
    {
      path: "../assets/fonts/IBMPlexSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
});

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={LOCALE}>
      <body className={IBMPlexSans.className}>
        <header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
