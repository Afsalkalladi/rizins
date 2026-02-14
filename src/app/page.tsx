import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComboDeals from "@/components/ComboDeals";
import CravingSection from "@/components/CravingSection";
import FanFavorites from "@/components/FanFavorites";
import AboutSection from "@/components/AboutSection";
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

      {/* Fan Favorites / Signature Collection */}
      <FanFavorites />

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
