import Link from "next/link";
import { Home, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                <Home size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">آریو املاک</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              آریو املاک، پلتفرم هوشمند خرید، فروش و اجاره ملک. ما با تکیه بر داده‌های دقیق و مشاوران متخصص، بهترین تجربه را برای شما رقم می‌زنیم.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">خدمات</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">خرید و فروش</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">رهن و اجاره</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">وام و تأمین مالی</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">مشاوره حقوقی</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">درباره ما</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">چرا آریو؟</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">همکاری با ما</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">وبلاگ</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">فرصت‌های شغلی</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">تماس با ما</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 shrink-0 mt-1" />
                <span>تهران، سعادت‌آباد، بلوار دریا، پلاک ۱۲</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600 shrink-0" />
                <span dir="ltr">021 - 88 77 66 55</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600 shrink-0" />
                <span className="font-sans">info@ario-estate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© ۱۴۰۴ آریو املاک. تمام حقوق محفوظ است.</p>
          <p>طراحی شده برای نمونه‌کار – Ario Landing Showcase</p>
        </div>
      </div>
    </footer>
  );
}
