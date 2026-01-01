"use client";

import Image from "next/image";

export default function CravingSection() {
    return (
        <section className="w-full bg-brand-red py-16 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center text-white">

                <h2 className="font-jomhuria text-[64px] md:text-[80px] leading-[0.8] mb-4">
                    CRAVING FOR A BURGER?
                </h2>

                <p className="font-lilita text-xl md:text-2xl mb-8 opacity-90 tracking-wide">
                    FRESH TASTE AT A GREAT PRICE
                </p>

                <button className="px-10 py-4 bg-white text-brand-red rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl hover:shadow-white/20 hover:-translate-y-1">
                    <span className="font-lilita text-2xl md:text-3xl">
                        PLACE ORDER NOW
                    </span>
                </button>

            </div>
        </section>
    );
}
