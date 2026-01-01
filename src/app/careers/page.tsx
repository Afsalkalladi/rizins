"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkWithUs from "@/components/WorkWithUs";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero / Intro for Careers */}
            <section className="bg-black text-white py-20 text-center">
                <div className="max-w-[800px] mx-auto px-6">
                    <h1 className="font-jomhuria text-[80px] leading-[0.8] mb-6">JOIN THE REVOLUTION</h1>
                    <p className="text-xl text-gray-400">
                        We're not just flipping burgers. We're building a legacy.
                        If you have passion for food and people, we want you on our team.
                    </p>
                </div>
            </section>

            {/* The Work With Us Component */}
            <WorkWithUs />

            <Footer />
        </main>
    );
}
