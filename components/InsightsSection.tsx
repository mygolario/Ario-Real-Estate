import Image from "next/image";
import { Clock, User } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "راهنمای جامع خرید ملک در تهران",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=900&q=80",
    author: "رضا نیازی",
    readTime: "۵ دقیقه مطالعه",
  },
  {
    id: 2,
    title: "تحلیل قیمت مسکن در سال ۱۴۰۴",
    image: "https://images.unsplash.com/photo-1505842679541-2ae3d2b9c4c8?auto=format&fit=crop&w=900&q=80",
    author: "مینا کاظمی",
    readTime: "۸ دقیقه مطالعه",
  },
  {
    id: 3,
    title: "نکات حقوقی مهم در قراردادهای اجاره",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
    author: "امیر حسینی",
    readTime: "۶ دقیقه مطالعه",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">بینش‌های بازار مسکن</h2>
            <p className="text-gray-600 max-w-2xl">
              آخرین اخبار، تحلیل‌ها و راهنمایی‌های ملکی را در وبلاگ ما بخوانید تا با آگاهی کامل تصمیم بگیرید.
            </p>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
            مشاهده همه مقالات
            <span className="text-lg">←</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  {item.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {item.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
