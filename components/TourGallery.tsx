const tourImages = [
  {
    src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
    alt: "مجتمع مسکونی مدرن"
  },
  {
    src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80",
    alt: "ساختمان با نورپردازی غروب"
  },
  {
    src: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=80",
    alt: "نمای شهرک مسکونی"
  },
  {
    src: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=900&q=80",
    alt: "آپارتمان مدرن با بالکن"
  }
];

export default function TourGallery() {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">تور بازدید املاک، بدون تعهد</h2>
      </div>

      <div className="tour-layout">
        <div>
          <p className="tour-text">
            برخلاف بسیاری از مشاورین، در آریو املاک برای بازدید اولیه نیازی به امضای قراردادهای پیچیده ندارید. کافی است محدوده مورد نظر خود
            را انتخاب کنید تا مشاوران ما تور اختصاصی بازدید برایتان برنامه‌ریزی کنند.
          </p>
          <p className="tour-text" style={{ marginTop: "10px" }}>
            از آپارتمان‌های نوساز تا واحدهای لوکس و ویلاهای خاص، همه در یک برنامه منظم و کوتاه در دسترس شماست.
          </p>
        </div>
        <div className="tour-gallery">
          {tourImages.map((item) => (
            <div key={item.src} className="tour-item">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
