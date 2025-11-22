import Header from "../components/Header";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Services from "../components/Services";
import Neighborhoods from "../components/Neighborhoods";
import Market from "../components/Market";
import Testimonials from "../components/Testimonials";
import TourGallery from "../components/TourGallery";
import Insights from "../components/Insights";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Header />
      <Hero />
      <Properties />
      <Services />
      <Neighborhoods />
      <Market />
      <Testimonials />
      <TourGallery />
      <Insights />
      <FinalCta />
      <Footer />
    </main>
  );
}
