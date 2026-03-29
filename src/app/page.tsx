import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComboDeals from "@/components/ComboDeals";
import CravingSection from "@/components/CravingSection";
import TasteDifference from "@/components/TasteDifference";
import QualitySection from "@/components/QualitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black overflow-x-hidden pt-[70px] sm:pt-[80px]">
      {/* Header */}
      <Header />

      {/* Hero Section with BURGER watermark & carousel */}
      <Hero />

      {/* Combo Deals Banner */}
      <ComboDeals />

      {/* Crave the Crunch Section */}
      <CravingSection />

      {/* Taste the Difference Section */}
      <TasteDifference />

      {/* Quality Section */}
      <QualitySection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
