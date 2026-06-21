"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuGrid from "@/components/MenuGrid";

const categories = ["CHICKEN", "BEEF", "VEG", "KIDS", "SIDES", "SHAKE"];

const featuredImageByCategory: Record<string, { src: string; alt: string }> = {
    CHICKEN: {
        src: "/images/chicken/fried.png",
        alt: "Featured Chicken Burger",
    },
    BEEF: {
        src: "/images/beef/classic.png",
        alt: "Featured Beef Burger",
    },
    VEG: {
        src: "/images/veg/shroom.png",
        alt: "Featured Veg Burger",
    },
    KIDS: {
        src: "/images/kids/kids.png",
        alt: "Featured Kids Meal",
    },
    SIDES: {
        src: "/images/sides/sidehero.png",
        alt: "Featured Sides",
    },
    SHAKE: {
        src: "/images/shakes/Chocolate.png",
        alt: "Featured Thick Shake",
    },
};

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("BEEF");
    const featuredImage = featuredImageByCategory[activeCategory] ?? featuredImageByCategory.BEEF;

    return (
        <main className="min-h-screen bg-[#111] text-white font-sans pt-[70px] sm:pt-[80px]">
            <Header />

            {/* Menu Title & Category Filter */}
            <section className="bg-black/95 backdrop-blur-sm pt-4 pb-3 sticky top-[70px] sm:top-[80px] z-40 border-b border-white/10">
                <h1 className="text-center font-extrabold text-xl sm:text-2xl tracking-[0.3em] text-white mb-3">MENU</h1>

                <div className="mx-auto max-w-[820px] px-3 sm:px-4">
                    <div className="grid grid-cols-6 gap-1 rounded-full bg-[linear-gradient(90deg,_#2f2f2f_0%,_#464646_45%,_#2f2f2f_100%)] p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`w-full min-w-0 rounded-full px-1 py-1.5 font-extrabold text-[10px] sm:text-sm tracking-wide transition-all ${
                                activeCategory === cat
                                    ? "bg-[#5b5b5b] text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                                    : "bg-transparent text-gray-300 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                    </div>
                </div>
            </section>

            {/* Top Featured Burger (Radial Gradient Background) */}
            <section className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] flex justify-center items-center overflow-hidden bg-[radial-gradient(circle_at_center,_#934A1C_0%,_#3E1F09_55%,_#170A03_100%)]">
                {/* Active-category watermark for depth */}
                <span
                    className="pointer-events-none absolute select-none whitespace-nowrap font-black uppercase tracking-tight text-white/[0.05] leading-none"
                    style={{ fontSize: "clamp(96px, 24vw, 280px)" }}
                >
                    {activeCategory}
                </span>

                <div className="relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] md:w-[370px] md:h-[370px]">
                    <Image
                        key={featuredImage.src}
                        src={featuredImage.src}
                        alt={featuredImage.alt}
                        fill
                        sizes="(max-width: 768px) 300px, 370px"
                        className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)] animate-fade-in-up"
                        priority
                    />
                </div>
            </section>

            {/* Overlapping Pill Text */}
            <div className="relative z-20 flex justify-center -mt-7 px-4">
                <div className="bg-[#0a0a0a] text-gray-200 px-6 py-4 rounded-[30px] text-center max-w-[90%] md:max-w-[600px] text-sm md:text-base border border-white/5 shadow-2xl">
                    Big, Thick, Crispy &amp; Juicy. Bite into better <br className="hidden md:block"/>
                    with our Rizin&apos;s Signature Range.
                </div>
            </div>

            {/* Signature tagline (relocated copy — no image) */}
            <section className="bg-[#111] px-4 pt-10 sm:pt-12 pb-2">
                <div className="mx-auto max-w-[640px] text-center">
                    <span className="mx-auto mb-5 block h-[3px] w-12 rounded-full bg-brand-red" />
                    <p className="font-poppins text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        Indulge in the ultimate taste sensation with{" "}
                        <span className="font-semibold text-white">Rizin&apos;s Signature Burgers</span>
                        {" "}— where crispy meets succulent, and flavor knows no bounds.
                    </p>
                </div>
            </section>

            {/* Full Menu List */}
            <MenuGrid activeCategory={activeCategory} />

            <Footer />
        </main>
    );
}