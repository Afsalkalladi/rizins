import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CravingSection from "@/components/CravingSection";
import FanFavorites from "@/components/FanFavorites";

const Home = () => {
  return (
    <main className="min-h-screen bg-white w-full flex flex-col">
      <Header />

      {/* Hero Section - 3D Carousel */}
      <Hero />

      {/* Section 2: Fan Favorites / Signature Collection */}
      <FanFavorites />

      {/* Craving Section - Call to Action */}
      <CravingSection />

      <Footer />
    </main>
  );
}

export default Home;
