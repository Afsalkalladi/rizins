import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComboDeals from "@/components/ComboDeals";
import MenuGrid from "@/components/MenuGrid";
import CravingSection from "@/components/CravingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      {/* iPhone 16 Pro Container - 402px fixed width */}
      <div className="w-[402px] bg-white relative shadow-2xl">
        {/* Header */}
        <Header />
        
        {/* Hero Section with BURGER watermark */}
        <Hero />
        
        {/* Combo Deals Section */}
        <ComboDeals />
        
        {/* Menu Grid Section - Hidden */}
        {/* <MenuGrid /> */}
        
        {/* Craving Section */}
        <CravingSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
