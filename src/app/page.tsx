import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center w-full">
      {/* Responsive Container */}
      <div className="w-full max-w-[1440px] bg-white relative shadow-2xl mx-auto">
        {/* Header */}
        <Header />

        {/* Hero Section with BURGER watermark */}
        <Hero />

        {/* Menu Grid Section */}
        <MenuGrid />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
