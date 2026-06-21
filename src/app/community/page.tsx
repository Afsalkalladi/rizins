import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white pt-[70px] sm:pt-[80px]">
      <Header />
      <CommunitySection />
      <Footer />
    </main>
  );
}
