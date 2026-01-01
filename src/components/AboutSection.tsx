"use client";

import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="w-full bg-[#f8f8f8] py-24 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Images / Visual Story */}
                <div className="relative h-[500px] w-full">
                    {/* Main Visual */}
                    <div className="absolute top-0 right-0 w-[80%] h-[90%] bg-black rounded-[40px] overflow-hidden shadow-2xl z-10">
                        <Image
                            src="/images/main-burger.png" // Ideally a lifestyle shot, reusing burger for now
                            alt="Premium Ingredients"
                            fill
                            className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-8">
                            <span className="text-brand-red font-lilita text-xl">SINCE 2024</span>
                            <h3 className="text-white font-jomhuria text-5xl leading-none">THE GOLD STANDARD</h3>
                        </div>
                    </div>

                    {/* Secondary Accent - Badge */}
                    <div className="absolute bottom-0 left-4 w-[160px] h-[160px] bg-brand-red rounded-full flex items-center justify-center border-[8px] border-white shadow-xl z-20 animate-spin-slow">
                        <div className="text-center text-white p-4">
                            <p className="font-lilita text-lg leading-tight">100%<br />PREMIUM<br />BEEF</p>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col items-start space-y-8">
                    <h2 className="font-jomhuria text-[72px] leading-[0.8] text-black">
                        NOT JUST A BURGER,<br />
                        <span className="text-brand-red">IT'S AN EXPERIENCE.</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                        We believe that fast food shouldn't mean compromising on quality.
                        Every Rizins burger begins with locally sourced, ethically raised beef,
                        smashed to perfection on a scorching hot grill to lock in the flavor.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                        Paired with our secret house sauce, artisan buns baked fresh daily,
                        and crisp organic produce. This isn't just lunch—it's a culinary event.
                    </p>

                    <button className="group mt-4 flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full font-lilita text-xl hover:bg-brand-red transition-all duration-300">
                        OUR STORY
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

            </div>
        </section>
    );
}
