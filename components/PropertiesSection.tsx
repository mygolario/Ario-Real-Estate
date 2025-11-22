import Image from "next/image";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=900&q=80",
    price: "۲۵ میلیارد تومان",
    title: "آپارتمان لوکس فرمانیه",
    location: "فرمانیه، تهران",
    beds: 3,
    baths: 2,
    area: "۱۸۰ متر",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    price: "۴۵ میلیارد تومان",
    title: "ویلا مدرن لواسان",
    location: "لواسان، تهران",
    beds: 4,
    baths: 4,
    area: "۴۵۰ متر",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    price: "۱۸ میلیارد تومان",
    title: "پنت‌هاوس سعادت‌آباد",
    location: "سعادت‌آباد، تهران",
    beds: 2,
    baths: 2,
    area: "۱۴۰ متر",
  },
];

export default function PropertiesSection() {
  return (
    <section id="properties" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">محبوب در نزدیکی شما</h2>
            <p className="text-gray-600 max-w-2xl">
              این املاک بیشترین بازدید را در هفته گذشته داشته‌اند. فرصت‌های عالی برای سرمایه‌گذاری و سکونت.
            </p>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
            مشاهده همه املاک
            <span className="text-lg">←</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <MapPin size={16} className="ml-1" />
                  {property.location}
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={18} className="text-blue-500" />
                    <span>{property.beds} خواب</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={18} className="text-blue-500" />
                    <span>{property.baths} حمام</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize size={18} className="text-blue-500" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
