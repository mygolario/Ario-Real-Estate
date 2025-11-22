import SectionHeader from "./SectionHeader";

type Neighborhood = {
  title: string;
  meta: string;
  price: string;
  image: string;
  alt: string;
};

const neighborhoods: Neighborhood[] = [
  {
    title: "الهیه",
    meta: "متوسط متراژ: ۱۵۰ متر · مناسب خانواده‌های کم‌جمعیت",
    price: "میانگین قیمت: ۲۲۰ میلیون / متر",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
    alt: "نمایی از محله مدرن"
  },
  {
    title: "شهرک غرب",
    meta: "مجتمع‌های مدرن · مراکز خرید و دسترسی بزرگراهی عالی",
    price: "میانگین قیمت: ۱۸۵ میلیون / متر",
    image: "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?auto=format&fit=crop&w=1200&q=80",
    alt: "ساختمان‌های لوکس با استخر"
  },
  {
    title: "لواسان",
    meta: "منطقه ویلایی · چشم‌انداز کوهستان و آب‌وهوای پاک",
    price: "شروع قیمت ویلاها از ۶۰ میلیارد تومان",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&q=80",
    alt: "ویلای لوکس مدرن"
  },
  {
    title: "پاسداران",
    meta: "محله قدیمی با بافت نوساز · مناسب سکونت طولانی‌مدت",
    price: "میانگین قیمت: ۱۵۰ میلیون / متر",
    image: "https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1200&q=80",
    alt: "مجتمع مسکونی مدرن"
  }
];

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">محله‌های پیشنهادی</h2>
          <p className="section-subtitle">محبوب‌ترین مناطق برای خرید و سرمایه‌گذاری، با نگاهی به امکانات محله، دسترسی، و روند رشد قیمت در سال‌های اخیر.</p>
        </div>
        <div className="section-subtitle">کشف محله‌ای که با سبک زندگی شما هماهنگ است.</div>
      </div>

      <div className="neighborhoods-grid">
        {neighborhoods.map((item) => (
          <article key={item.title} className="neighborhood-card">
            <div className="neighborhood-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="neighborhood-body">
              <div className="neighborhood-title">{item.title}</div>
              <div className="neighborhood-meta">{item.meta}</div>
              <div className="neighborhood-price">{item.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
