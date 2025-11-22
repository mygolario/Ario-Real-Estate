import { Home, CreditCard, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "خرید هوشمند",
    description: "با تحلیل‌های دقیق بازار و مشاوره تخصصی، بهترین ملک را با قیمت واقعی بخرید.",
    action: "مشاور خرید بگیر",
  },
  {
    icon: CreditCard,
    title: "بررسی وام و تأمین مالی",
    description: "مشاوره کامل در زمینه دریافت وام مسکن و نحوه پرداخت اقساطی پروژه‌ها.",
    action: "محاسبه اقساط",
  },
  {
    icon: ShieldCheck,
    title: "فروش سریع و مطمئن",
    description: "ملک شما را با بهترین قیمت و در کوتاه‌ترین زمان به خریداران واقعی معرفی می‌کنیم.",
    action: "درخواست بازدید مشاور",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F4F6FB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">چرا خدمات آریو املاک؟</h2>
          <p className="text-gray-600 text-lg">
            ما در تمام مراحل، از اولین بازدید تا امضای قرارداد نهایی، در کنار شما هستیم تا تجربه‌ای امن و راحت داشته باشید.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button className="text-sm font-medium text-blue-600 border border-blue-200 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
                {service.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
