"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuGrid from "@/components/MenuGrid";

const categories = ["CHICKEN", "BEEF", "VEG", "KIDS", "SIDES", "SHAKE"];

const featuredImageByCategory: Record<string, { src: string; alt: string }> = {
    CHICKEN: {
        src: "/images/chicken/grilled.png",
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
        src: "/images/shakes/Milkshake Chocolate.png",
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
                <h1 className="text-center font-extrabold text-2xl tracking-widest text-white mb-3">MENU</h1>

                <div className="mx-auto max-w-[820px] px-3 sm:px-4">
                    <div className="grid grid-cols-6 gap-1 rounded-full bg-[linear-gradient(90deg,_#2f2f2f_0%,_#464646_45%,_#2f2f2f_100%)] p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`w-full min-w-0 rounded-full px-1 py-1.5 font-extrabold text-[11px] sm:text-sm tracking-wide transition-all ${
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
            <section className="relative w-full h-[350px] flex justify-center items-center bg-[radial-gradient(circle_at_center,_#934A1C_0%,_#3E1F09_50%,_#170A03_100%)]">
                <div className="relative w-[280px] h-[280px]">
                    <Image
                        src={featuredImage.src}
                        alt={featuredImage.alt}
                        fill
                        className="object-contain drop-shadow-2xl"
                    />
                </div>
            </section>

            {/* Overlapping Pill Text */}
            <div className="relative z-20 flex justify-center -mt-6 px-4">
                <div className="bg-[#0a0a0a] text-gray-200 px-6 py-4 rounded-[30px] text-center max-w-[90%] md:max-w-[600px] text-sm md:text-base border border-white/5 shadow-2xl">
                    Big, Thick, Crispy &amp; Juicy. Bite into better <br className="hidden md:block"/>
                    with our Rizin&apos;s Signature Range.
                </div>
            </div>

            {/* Secondary Featured Section (Image Background) */}
            <section className="relative w-full h-[250px] -mt-10 pt-16 bg-[#222]">
                <Image
                    src="/images/image.png"
                    alt="Chicken Burger and Fries"
                    fill
                    className="object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/85 via-[#111]/25 to-transparent" />
                
                <div className="absolute bottom-6 left-6 max-w-[80%] md:max-w-[50%] z-10">
                    <p className="text-gray-200 text-xs md:text-sm leading-snug drop-shadow-md">
                        Indulge in the ultimate taste sensation <br/>
                        with Rizin&apos;s Signature Burgers <br/>
                        – where crispy meets succulent, and <br/>
                        flavor knows no bounds!
                    </p>
                </div>
            </section>

            {/* Full Menu List */}
            <MenuGrid activeCategory={activeCategory} />

            <Footer />
        </main>
    );
}