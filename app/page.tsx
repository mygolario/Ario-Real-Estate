import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertiesSection from "@/components/PropertiesSection";
import ServicesSection from "@/components/ServicesSection";
import NeighborhoodsSection from "@/components/NeighborhoodsSection";
import MarketSection from "@/components/MarketSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TourSection from "@/components/TourSection";
import InsightsSection from "@/components/InsightsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <PropertiesSection />
      <ServicesSection />
      <NeighborhoodsSection />
      <MarketSection />
      <TestimonialsSection />
      <TourSection />
      <InsightsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
