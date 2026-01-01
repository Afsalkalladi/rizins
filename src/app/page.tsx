import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTeaser from "@/components/FeaturedTeaser";
import CravingSection from "@/components/CravingSection";
import FanFavorites from "@/components/FanFavorites";

const Home = () => {
  return (
    <main className="min-h-screen bg-white flex justify-center w-full">
      {/* Responsive Container */}
      <div className="w-full max-w-[1440px] bg-white relative shadow-2xl mx-auto flex flex-col">
        <Header />

        {/* Hero Section - Reverted to Original Auto-Rotating Design */}
        <Hero />

        {/* Fan Favorites - Curated Menu Teaser (Replacing full grid/about) */}
        <FanFavorites />

        {/* Featured Item / Menu Teaser (Visual Break) */}
        <FeaturedTeaser />

        {/* Craving Section - Call to Action */}
        <CravingSection />

        <Footer />
      </div>
    </main>
  );
}

export default Home;
