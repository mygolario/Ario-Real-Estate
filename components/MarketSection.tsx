import Image from "next/image";
import { TrendingUp, Users, Home, Clock } from "lucide-react";

const stats = [
  {
    label: "فروخته‌شده در ماه گذشته",
    value: "۱۵+ ملک",
    icon: Home,
    dark: false,
  },
  {
    label: "میانگین ماندگاری فایل",
    value: "۱۸ روز",
    icon: Clock,
    dark: false,
  },
  {
    label: "میانگین ارزش هر معامله",
    value: "۴٫۲ میلیارد",
    icon: TrendingUp,
    dark: true,
  },
  {
    label: "رضایت مشتریان",
    value: "۹۶٪",
    icon: Users,
    dark: false,
  },
];

export default function MarketSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F6FB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 aspect-4/3">
              <Image
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80"
                alt="Market Analysis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 to-transparent"></div>
            </div>
            {/* Decorative Blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">تحلیل جامع عملکرد بازار</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              ما با استفاده از داده‌های واقعی معاملات و تحلیل روندهای بازار، دقیق‌ترین گزارش‌ها را در اختیار شما قرار می‌دهیم تا تصمیم‌گیری هوشمندانه‌تری داشته باشید.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    stat.dark
                      ? "bg-[#111827] text-white border-[#111827] shadow-xl shadow-gray-900/20"
                      : "bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${stat.dark ? "bg-white/10" : "bg-blue-50 text-blue-600"}`}>
                      <stat.icon size={24} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm ${stat.dark ? "text-gray-400" : "text-gray-500"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
