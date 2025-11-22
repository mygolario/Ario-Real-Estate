import Image from "next/image";
import { Search, MapPin, DollarSign, Home } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              پلتفرم شماره یک خرید و فروش ملک
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] mb-6">
              خانه مناسب خود را با <span className="text-blue-600">آریو املاک</span> پیدا کنید
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              ما با شفافیت کامل و مشاوران متخصص، مسیر خرید، فروش و اجاره ملک را برای شما هموار می‌کنیم. بهترین فرصت‌های سرمایه‌گذاری را اینجا بیابید.
            </p>

            {/* Search Box */}
            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="grid md:grid-cols-[1.2fr,1.2fr,1fr,auto] gap-2">
                {/* Type */}
                <div className="relative group">
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                    <Home size={20} />
                  </div>
                  <div className="h-full flex flex-col justify-center px-10 py-2.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-500 font-medium mb-0.5">نوع معامله</span>
                    <span className="text-sm font-bold text-gray-900">خرید آپارتمان</span>
                  </div>
                </div>

                {/* Location */}
                <div className="relative group">
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                    <MapPin size={20} />
                  </div>
                  <div className="h-full flex flex-col justify-center px-10 py-2.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-500 font-medium mb-0.5">محدوده</span>
                    <span className="text-sm font-bold text-gray-900 truncate">شهرک غرب، سعادت‌آباد</span>
                  </div>
                </div>

                {/* Budget */}
                <div className="relative group">
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                    <DollarSign size={20} />
                  </div>
                  <div className="h-full flex flex-col justify-center px-10 py-2.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <span className="text-xs text-gray-500 font-medium mb-0.5">بودجه</span>
                    <span className="text-sm font-bold text-gray-900 truncate">از ۱۵ تا ۳۰ میلیارد</span>
                  </div>
                </div>

                {/* Search Button */}
                <button className="h-full min-h-[56px] px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                  <Search size={20} />
                  <span className="hidden md:inline">جستجو</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                +۳۵۰ فایل فعال امروز
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                بازدید حضوری با هماهنگی سریع
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 aspect-4/3 lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Luxury Home"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 right-8 left-8 md:left-auto bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/20 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <Home size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">پروژه‌های منتخب آریو</h3>
                    <p className="text-sm text-gray-600">خانه‌های لوکس با شرایط پرداخت متنوع و اقساطی</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
