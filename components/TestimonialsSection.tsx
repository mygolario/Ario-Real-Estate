import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "خریدار اولین خانه",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
    quote: "تجربه خرید با آریو فوق‌العاده بود. مشاوران صبورانه تمام گزینه‌ها را بررسی کردند و بهترین انتخاب را به من پیشنهاد دادند.",
    highlight: false,
  },
  {
    id: 2,
    name: "علی رضایی",
    role: "سرمایه‌گذار ملک",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    quote: "دقت و شفافیت در معاملات برای من اولویت است. آریو املاک با گزارش‌های دقیق بازار، اعتماد من را جلب کرد.",
    highlight: true,
  },
  {
    id: 3,
    name: "مریم کمالی",
    role: "فروشنده واحد مسکونی",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    quote: "سرعت فروش ملکم باورنکردنی بود. تیم بازاریابی حرفه‌ای آن‌ها باعث شد ملک من در کمتر از دو هفته به فروش برسد.",
    highlight: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">مشتریان آریو چه می‌گویند؟</h2>
          <p className="text-gray-600 text-lg">
            رضایت مشتریان بزرگترین سرمایه ماست. داستان‌های واقعی از تجربه همکاری با آریو املاک را بخوانید.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                item.highlight
                  ? "bg-[#111827] text-white shadow-2xl shadow-gray-900/20 md:-translate-y-4"
                  : "bg-white text-gray-900 border border-gray-100 hover:shadow-xl"
              }`}
            >
              <Quote
                size={40}
                className={`absolute top-8 left-8 opacity-20 ${
                  item.highlight ? "text-white" : "text-blue-600"
                }`}
              />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className={`text-sm ${item.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {item.role}
                  </p>
                </div>
              </div>
              
              <p className={`leading-relaxed ${item.highlight ? "text-gray-300" : "text-gray-600"}`}>
                &quot;{item.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
