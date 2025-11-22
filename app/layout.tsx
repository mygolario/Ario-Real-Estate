import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آریو املاک | پیدا کردن خانه رویایی شما",
  description: "صفحه فرود آریو املاک با تمرکز بر خرید و فروش هوشمند ملک"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
