import SectionHeader from "./SectionHeader";

type Insight = {
  title: string;
  meta: string[];
  image: string;
  alt: string;
};

const insights: Insight[] = [
  {
    title: "۵ نکته طلایی برای خرید اولین خانه",
    meta: ["نوشته: الهام پاک‌نژاد", "۵ دقیقه مطالعه"],
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=900&q=80",
    alt: "خانه مدرن با نور طبیعی"
  },
  {
    title: "چطور ارزش واقعی یک ملک را تشخیص دهیم؟",
    meta: ["نوشته: نیما جهانگیر", "۷ دقیقه مطالعه"],
    image: "https://images.unsplash.com/photo-1505842679541-2ae3d2b9c4c8?auto=format&fit=crop&w=900&q=80",
    alt: "ساختمان مدرن"
  },
  {
    title: "اشتباهات رایج در زمان فروش ملک",
    meta: ["نوشته: رویا محمدی", "۴ دقیقه مطالعه"],
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
    alt: "خانه با پنجره‌های بزرگ"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="section">
      <SectionHeader
        title="بینش‌های بازار مسکن"
        subtitle="مقالات کوتاه و کاربردی برای خریداران، فروشندگان و سرمایه‌گذاران که می‌خواهند با دید باز وارد معامله شوند."
        action={<a href="#">مشاهده همه مقالات →</a>}
      />

      <div className="insights-grid">
        {insights.map((item) => (
          <article key={item.title} className="insight-card">
            <div className="insight-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="insight-body">
              <h3 className="insight-title">{item.title}</h3>
              <div className="insight-meta">
                {item.meta.map((entry) => (
                  <span key={entry}>{entry}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
