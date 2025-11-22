import SectionHeader from "./SectionHeader";

type Property = {
  image: string;
  alt: string;
  price: string;
  meta: string;
  location: string;
};

const properties: Property[] = [
  {
    image: "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=900&q=80",
    alt: "ویلای مدرن با استخر",
    price: "۲۵ میلیارد تومان",
    meta: "۳ خواب · ۲ حمام · ۱۸۰ متر بنا",
    location: "فرمانیه، تهران"
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    alt: "خانه لوکس ساحلی",
    price: "۱۸٫۵ میلیارد تومان",
    meta: "۲ خواب · ۲ حمام · ۱۴۰ متر بنا",
    location: "زعفرانیه، تهران"
  },
  {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    alt: "آپارتمان دوبلکس مدرن",
    price: "۱۲ میلیارد تومان",
    meta: "۲ خواب · ۱ حمام · ۱۲۰ متر بنا",
    location: "پونک، تهران"
  }
];

export default function Properties() {
  return (
    <section id="properties" className="section">
      <SectionHeader
        title="محبوب در نزدیکی شما"
        subtitle="پر بازدیدترین و پسندیده‌ترین فایل‌های امروز که توسط کاربران آریو املاک دیده شده‌اند. هر سه مورد، آماده بازدید حضوری هستند."
        action={<a href="#">مشاهده همه فایل‌ها →</a>}
      />

      <div className="properties-grid">
        {properties.map((property) => (
          <article key={property.alt} className="property-card">
            <div className="property-image">
              <img src={property.image} alt={property.alt} />
            </div>
            <div className="property-price">{property.price}</div>
            <div className="property-meta">{property.meta}</div>
            <div className="property-location">{property.location}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
