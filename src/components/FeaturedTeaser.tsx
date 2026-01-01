"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeaturedTeaser() {
    return (
        <section className="w-full bg-black py-24 relative overflow-hidden text-white">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                {/* Abstract shapes or pattern could go here */}
                <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-brand-red rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-brand-red rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Side */}
                <div className="flex-1 text-center md:text-left">
                    <span className="text-brand-red font-lilita text-xl tracking-wider uppercase mb-4 block">
                        Trending This Week
                    </span>
                    <h2 className="font-jomhuria text-[80px] leading-[0.8] mb-6">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">SPICY SUPREME</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8 mx-auto md:mx-0">
                        A fiery blend of jalapeños, pepper jack cheese, and our signature ghost pepper sauce.
                        Are you brave enough to take the bite?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/menu" className="px-10 py-4 bg-white text-black rounded-full font-lilita text-xl hover:bg-gray-200 transition-colors">
                            EXPLORE FULL MENU
                        </Link>
                        <button className="px-10 py-4 border border-white text-white rounded-full font-lilita text-xl hover:bg-brand-red hover:border-brand-red transition-colors">
                            INSTANT ORDER
                        </button>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 relative h-[400px] w-full flex items-center justify-center">
                    {/* Floating Burger */}
                    <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] animate-float">
                        <Image
                            src="/images/fried-chicken-burger.png" // Placeholder
                            alt="Spicy Supreme"
                            fill
                            className="object-contain drop-shadow-[0_0_60px_rgba(220,38,38,0.4)]"
                        />
                    </div>
                    {/* Price Tag Badge */}
                    <div className="absolute top-10 right-10 bg-brand-red text-white p-4 rounded-full shadow-lg rotate-12">
                        <span className="font-lilita text-2xl">$14.99</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
