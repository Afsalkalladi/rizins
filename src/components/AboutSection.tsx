"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-brand-red py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: Visual */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
          <div className="absolute top-0 right-0 w-[85%] sm:w-[80%] h-[90%] bg-black rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl z-10">
            <Image
              src="/images/main-burger.png"
              alt="Premium Ingredients"
              fill
              className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8">
              <span className="text-white font-lilita text-base sm:text-xl">SINCE 2024</span>
              <h3 className="text-white font-jomhuria text-3xl sm:text-5xl leading-none">
                THE GOLD STANDARD
              </h3>
            </div>
          </div>

          {/* Badge – right side */}
          <div className="absolute bottom-0 right-2 sm:right-4 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] bg-white rounded-full flex items-center justify-center border-[5px] sm:border-[7px] border-brand-red shadow-xl z-20">
            <div className="text-center text-brand-red p-2 sm:p-4">
              <p className="font-lilita text-xs sm:text-base leading-tight">
                100%<br />PREMIUM<br />BEEF
              </p>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 sm:space-y-8">
          <h2 className="font-jomhuria text-[48px] sm:text-[60px] md:text-[72px] leading-[0.85] text-white">
            NOT JUST A BURGER,<br />
            <span className="text-black">IT&apos;S AN EXPERIENCE.</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            We believe that fast food shouldn&apos;t mean compromising on quality.
            Every Rizins burger begins with locally sourced, ethically raised beef,
            smashed to perfection on a scorching hot grill to lock in the flavor.
          </p>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            Paired with our secret house sauce, artisan buns baked fresh daily,
            and crisp organic produce. This isn&apos;t just lunch—it&apos;s a culinary event.
          </p>

          <Link
            href="/our-story"
            className="group mt-2 sm:mt-4 flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full font-lilita text-lg sm:text-xl hover:bg-white hover:text-brand-red transition-all duration-300"
          >
            OUR STORY
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
