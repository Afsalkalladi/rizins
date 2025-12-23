import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center">
      {/* iPhone 16 Pro Container - 402px fixed width */}
      <div className="w-[402px] bg-white relative shadow-2xl">
        {/* Header */}
        <Header />
        
        {/* Hero Section with BURGER watermark */}
        <Hero />
        
        {/* Menu Grid Section */}
        <MenuGrid />
      </div>
    </main>
  );
}
