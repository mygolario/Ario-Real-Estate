import Image from "next/image";

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80"
        alt="Dream Home"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/70"></div>
      
      <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">آماده‌ای خانه رؤیایی‌ات را پیدا کنی؟</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          به هزاران مشتری راضی بپیوندید که با آریو املاک خانه ایده‌آل خود را پیدا کرده‌اند. همین امروز شروع کنید.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30">
            شروع جستجو
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-xl font-bold text-lg transition-all">
            گفت‌وگو با مشاور
          </button>
        </div>
      </div>
    </section>
  );
}
