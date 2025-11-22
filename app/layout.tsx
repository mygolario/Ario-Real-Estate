import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "آریو املاک | پلتفرم هوشمند خرید و فروش ملک",
  description: "خرید، فروش و اجاره ملک در تهران و حومه با آریو املاک",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} font-sans antialiased bg-[#F4F6FB] text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
