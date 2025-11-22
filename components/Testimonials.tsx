export default function Testimonials() {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">مشتریان آریو چه می‌گویند؟</h2>
        <p className="section-subtitle testimonial-subtext">
          تجربه واقعی خریداران و فروشندگانی که با کمک آریو املاک، معامله‌ای سریع و مطمئن انجام داده‌اند.
        </p>
      </div>

      <div className="testimonials-layout">
        <div></div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80" alt="مشتری راضی" />
            <div className="testimonial-name">دیانا رسولی</div>
            <div className="testimonial-role">مشاور ارشد سرمایه‌گذاری</div>
            <p>«در تمام مراحل معامله کنارمان بودند و اجازه ندادند تحت فشار تصمیم عجولانه بگیریم.»</p>
          </div>

          <div className="testimonial-card testimonial-main">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" alt="مشتری خوشحال" />
              <div>
                <div className="testimonial-index">[۰۲]</div>
                <div className="testimonial-name">سارا جهانشاهی</div>
                <div className="testimonial-role">خریدار اولین خانه</div>
              </div>
            </div>
            <p className="testimonial-main-text">
              «اولین تجربه خرید خانه‌ام بود و کاملاً استرس داشتم. تیم آریو با صبر و حوصله همه جزئیات را توضیح داد و کمک کرد در نهایت، واحدی
              دقیقاً مطابق نیازم پیدا کنم.»
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80" alt="مشتری آقا" />
            <div className="testimonial-name">آرمان کریمی</div>
            <div className="testimonial-role">فروشنده واحد مسکونی</div>
            <p>«ملکم طی کمتر از سه هفته و با قیمتی بالاتر از حد انتظار فروخته شد. گزارش‌های دقیق بازار خیلی کمک کرد.»</p>
          </div>
        </div>
      </div>
    </section>
  );
}
