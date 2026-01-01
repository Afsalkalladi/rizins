"use client";

import Image from "next/image";

export default function WorkWithUs() {
    return (
        <section className="w-full bg-white py-16 relative overflow-hidden" id="careers">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Illustration */}
                <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-gray-50 rounded-3xl overflow-hidden">
                    {/* Placeholder for Chef Illustration - Using a generic kitchen/chef concept or text if image not available */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-200">
                        <span className="text-9xl opacity-20">👨‍🍳</span>
                    </div>
                    {/* If we had the specific chef illustration from Figma, we'd use it here. 
               For now, I'll use a stylized SVG or text representation to match the layout. */}
                    <div className="relative z-10 text-center">
                        <h3 className="font-lilita text-4xl text-gray-300">CHEF ILLUSTRATION</h3>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="font-jomhuria text-[64px] leading-[0.8] text-brand-red mb-2">
                        WORK WITH US!
                    </h2>
                    <h3 className="font-lilita text-2xl text-black mb-8 uppercase tracking-wide">
                        APPLY FOR STORE STAFF & DELIVERY
                    </h3>

                    <button className="px-8 py-3 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg hover:shadow-brand-red/50">
                        <span className="font-lilita text-2xl text-white">
                            CONTACT NOW
                        </span>
                    </button>

                    <a href="#" className="mt-6 text-gray-400 text-sm hover:text-black transition-colors underline decoration-gray-300">
                        Read More About Policy
                    </a>
                </div>

            </div>
        </section>
    );
}
