import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "آریو املاک | پیدا کردن خانه رویایی شما",
  description: "آریو املاک یک پلتفرم هوشمند برای خرید، فروش و تحلیل بازار مسکن است. از جستجوی فایل‌های واقعی تا تحلیل محله و بازدید حضوری.",
  openGraph: {
    title: "آریو املاک | پلتفرم هوشمند املاک",
    description: "جستجو، مقایسه و مشاهده بهترین املاک با آریو. تحلیل دقیق بازار مسکن، محله‌ها و قیمت‌ها.",
    url: "https://ario-real-estate.vercel.app/",
    siteName: "آریو املاک",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "آریو املاک",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "آریو املاک – جستجوی هوشمند ملک",
    description: "خانه مناسب خود را با آریو پیدا کنید.",
    images: ["https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"],
  },
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
