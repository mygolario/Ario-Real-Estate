import SectionHeader from "./SectionHeader";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "۱۵+ ملک", label: "فروخته‌شده در ماه گذشته" },
  { value: "۱۸ روز", label: "میانگین ماندگاری فایل روی سایت" },
  { value: "۴٫۲ میلیارد", label: "میانگین ارزش هر معامله" },
  { value: "۹۶٪", label: "رضایت ثبت‌شده توسط مشتریان" }
];

export default function Market() {
  return (
    <section className="section">
      <SectionHeader title="تحلیل جامع عملکرد بازار" />

      <div className="market">
        <div className="market-image">
          <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80" alt="خانه مدرن در شب" />
        </div>
        <div>
          <p className="market-text">
            آریو املاک با استفاده از داده‌های واقعی معاملات، گزارش‌های لحظه‌ای از وضعیت بازار مسکن در محله‌های مختلف ارائه می‌کند تا خریداران،
            فروشندگان و سرمایه‌گذاران تصمیم‌های هوشمندانه‌تری بگیرند.
          </p>
          <div className="market-stats">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`stat-card ${index === 1 ? "dark" : ""}`}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
