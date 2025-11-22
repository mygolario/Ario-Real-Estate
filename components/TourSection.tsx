import Image from "next/image";

const tours = [
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=900&q=80",
];

export default function TourSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F6FB] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">تور بازدید املاک، بدون تعهد</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                ما می‌دانیم که انتخاب خانه نیازمند بررسی دقیق است. به همین دلیل، امکان بازدید حضوری از چندین ملک را در یک روز برای شما فراهم می‌کنیم.
              </p>
              <p>
                بدون هیچ‌گونه تعهد یا فشار برای خرید، با مشاوران ما همراه شوید و از نزدیک با جزئیات املاک آشنا شوید. ما برنامه‌ریزی را انجام می‌دهیم، شما فقط انتخاب کنید.
              </p>
            </div>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              هماهنگی تور بازدید
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {tours.map((src, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg aspect-square ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Tour ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
