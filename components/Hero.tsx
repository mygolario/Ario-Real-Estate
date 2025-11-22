export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badges">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>جدیدترین فایل‌های واقعی و به‌روز</span>
          </div>
          <div className="hero-badge">
            <span>پوشش کامل مناطق منتخب شهر</span>
          </div>
        </div>
        <h1>خانه مناسب خود را با آریو املاک پیدا کنید</h1>
        <p>بازار را با شفافیت کامل ببینید، بین خرید، اجاره و سرمایه‌گذاری مقایسه کنید و با کمک مشاوران تخصصی آریو، بهترین تصمیم ملکی را بگیرید.</p>

        <div className="hero-search">
          <div className="hero-search-group">
            <span className="hero-label">نوع معامله</span>
            <span className="hero-value">خرید آپارتمان</span>
          </div>
          <div className="hero-search-group">
            <span className="hero-label">محدوده</span>
            <span className="hero-value">شهرک غرب، سعادت‌آباد</span>
          </div>
          <div className="hero-search-group">
            <span className="hero-label">بودجه تقریبی</span>
            <span className="hero-value">از ۱۵ تا ۳۰ میلیارد تومان</span>
          </div>
          <button className="btn btn-primary">جستجوی ملک</button>
        </div>

        <div className="hero-meta">
          <span>
            <span className="hero-meta-dot"></span> بیش از ۳۵۰ فایل فعال امروز
          </span>
          <span>
            <span className="hero-meta-dot"></span> بازدید حضوری با هماهنگی سریع
          </span>
        </div>
      </div>

      <div className="hero-media">
        <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80" alt="نمایی از خانه مدرن لوکس" />
        <div className="hero-tag">
          <span>پروژه‌های منتخب آریو</span>
          <span>خانه‌های لوکس با شرایط پرداخت متنوع</span>
        </div>
      </div>
    </section>
  );
}
