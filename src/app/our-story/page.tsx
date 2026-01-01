"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-[#111] text-white pt-[100px] flex flex-col">
            <Header />

            <section className="max-w-[1000px] mx-auto px-6 py-20 text-center">
                <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4 block">THE JOURNEY</span>
                <h1 className="font-jomhuria text-[80px] md:text-[120px] leading-[0.85] mb-12">
                    OUR STORY OF <br /> <span className="text-gray-500">OBSESSION</span>
                </h1>

                <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                    <p>
                        It started with a simple question: <strong className="text-white">Why are burgers so boring?</strong>
                    </p>
                    <p>
                        In 2024, we set out to change that. No shortcuts, no frozen patties, just pure, unadulterated flavor.
                        We spent months perfecting our blend, baking our own buns, and sourcing the freshest local produce
                        to create a burger that doesn't just feed you—it moves you.
                    </p>
                    <p>
                        Rizins isn't just about food; it's about the culture of eating well and living loud.
                        Welcome to the family.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
