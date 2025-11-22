import SectionHeader from "./SectionHeader";

type Service = {
  icon: string;
  title: string;
  text: string;
  cta: string;
};

const services: Service[] = [
  {
    icon: "🏠",
    title: "خرید هوشمند",
    text: "مشاوران آریو با شناخت دقیق از محله و قیمت‌های واقعی بازار، به شما کمک می‌کنند بهترین گزینه را در کمترین زمان انتخاب کنید.",
    cta: "مشاور خرید بگیر"
  },
  {
    icon: "💳",
    title: "بررسی وام و تأمین مالی",
    text: "مقایسه آنلاین گزینه‌های وام مسکن، محاسبه اقساط و همراهی تا دریافت تسهیلات بانکی با بهترین شرایط ممکن.",
    cta: "محاسبه اقساط"
  },
  {
    icon: "📄",
    title: "فروش سریع و مطمئن",
    text: "قیمت‌گذاری دقیق، بازاریابی حرفه‌ای و معرفی ملک شما به شبکه گسترده خریداران آماده تا فروش باکیفیتی تجربه کنید.",
    cta: "درخواست بازدید مشاور"
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeader
        title="چرا خدمات آریو املاک؟"
        subtitle="از اولین بازدید تا تنظیم قرارداد نهایی، همراه شما هستیم تا در بودجه و زمان‌بندی خود بمانید و معامله‌ای امن و شفاف انجام دهید."
      />

      <div className="services">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-title">{service.title}</div>
            <div className="service-text">{service.text}</div>
            <button className="btn btn-outline">{service.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
