"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuGrid from "@/components/MenuGrid";

const categories = ["CHICKEN", "BEEF", "CLASSIC", "SPICY", "GRILLED", "SHAKE"];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("CHICKEN");

    return (
        <main className="min-h-screen bg-[#111] text-white">
            <Header />

            {/* Menu Header / Filter (Design 5) */}
            <section className="pt-8 pb-12 px-4 border-b border-white/10">
                <div className="max-w-[600px] mx-auto text-center">
                    <h1 className="font-jomhuria text-[64px] leading-none mb-8 text-white">MENU</h1>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-lilita text-lg transition-all ${activeCategory === cat
                                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/30"
                                    : "bg-white/10 text-gray-400 hover:bg-white/20"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Item (Design 3) */}
            <section className="py-16 px-6 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-red/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-[400px] mx-auto text-center relative z-10">
                    <div className="w-full h-[300px] relative mb-8 hover:scale-105 transition-transform duration-500">
                        <Image
                            src="/images/fried-chicken-burger.png" // Using existing asset as placeholder for "Jack's Fried Chicken"
                            alt="Featured Burger"
                            fill
                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        />
                    </div>

                    <h2 className="font-lilita text-3xl mb-4 text-[#EDEDED]">JACK&apos;S FRIED CHICKEN RANGE</h2>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Big, Thick, Crispy & Juicy. Bite into better with our Jack&apos;s Fried Chicken Range.
                        Made with 100% chicken breast.
                    </p>

                    <button className="mt-8 px-8 py-3 border-2 border-brand-red text-brand-red rounded-full font-lilita text-xl hover:bg-brand-red hover:text-white transition-all">
                        VIEW DETAILS
                    </button>
                </div>
            </section>

            {/* Full Menu Grid (Moved from Landing Page) */}
            <MenuGrid />

            <Footer />
        </main>
    );
}
