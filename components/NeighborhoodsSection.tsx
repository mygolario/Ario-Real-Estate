import Image from "next/image";

const neighborhoods = [
  {
    id: 1,
    name: "الهیه",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
    meta: "لوکس‌ترین منطقه با دسترسی عالی",
    price: "شروع قیمت از ۱۸۰ میلیون / متر",
  },
  {
    id: 2,
    name: "شهرک غرب",
    image: "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?auto=format&fit=crop&w=1200&q=80",
    meta: "فضای سبز و شهرسازی مدرن",
    price: "میانگین قیمت: ۱۵۰ میلیون / متر",
  },
  {
    id: 3,
    name: "لواسان",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&q=80",
    meta: "ویلاهای ییلاقی و هوای پاک",
    price: "شروع قیمت ویلاها از ۶۰ میلیارد",
  },
  {
    id: 4,
    name: "پاسداران",
    image: "https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1200&q=80",
    meta: "تنوع بافت مسکونی و تجاری",
    price: "میانگین قیمت: ۱۴۰ میلیون / متر",
  },
];

export default function NeighborhoodsSection() {
  return (
    <section id="neighborhoods" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">محله‌های پیشنهادی</h2>
          <p className="text-gray-600 max-w-2xl">
            محبوب‌ترین مناطق برای زندگی و سرمایه‌گذاری را بشناسید. ما اطلاعات دقیق هر محله را در اختیار شما می‌گذاریم.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((item) => (
            <div key={item.id} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-200 text-sm mb-3 opacity-90">{item.meta}</p>
                <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-lg text-xs font-medium">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
