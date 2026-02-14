"use client";

import Link from "next/link";
import Image from "next/image";

export default function FanFavorites() {
  return (
    <section className="w-full bg-[#111] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-14 gap-4">
          <div className="text-center md:text-left">
            <span className="text-brand-red font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block font-poppins">
              DISCOVER THE TASTE
            </span>
            <h2 className="font-jomhuria text-[52px] sm:text-[64px] md:text-[72px] text-white leading-[0.85]">
              OUR SIGNATURE <span className="text-brand-red">COLLECTION</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden md:flex items-center gap-2 text-white font-lilita text-lg xl:text-xl hover:text-brand-red transition-colors group"
          >
            EXPLORE FULL MENU
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Cards – horizontal scroll on mobile, grid on sm+ */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:overflow-visible sm:pb-0">
          {/* Item 1 */}
          <div className="group relative bg-[#1a1a1a] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-2 hover:bg-[#222] shrink-0 w-[75vw] max-w-[300px] snap-center sm:w-auto sm:max-w-none sm:shrink">
            <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] mb-4 sm:mb-6 flex items-center justify-center">
              <Image
                src="/images/classic-burger.png"
                alt="The Classic Burger"
                width={240}
                height={180}
                className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-lilita text-xl sm:text-2xl text-white mb-1">THE CLASSIC</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Flame-grilled beef, cheese, lettuce, tomato
              </p>
              <span className="inline-block bg-brand-red text-white px-5 sm:px-6 py-2 rounded-full font-lilita text-base sm:text-lg">
                $10.99
              </span>
            </div>
          </div>

          {/* Item 2 - Highlighted */}
          <div className="group relative bg-brand-red rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl sm:scale-105 z-10 shrink-0 w-[75vw] max-w-[300px] snap-center sm:w-auto sm:max-w-none sm:shrink">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white text-brand-red px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold font-poppins">
              #1 SELLER
            </div>
            <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] mb-4 sm:mb-6 flex items-center justify-center">
              <Image
                src="/images/main-burger.png"
                alt="Signature Smash Burger"
                width={280}
                height={220}
                className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-lilita text-2xl sm:text-3xl text-white mb-1">SIGNATURE SMASH</h3>
              <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6">
                Double beef, secret sauce, caramelized onion
              </p>
              <button className="bg-white text-brand-red px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-lilita text-lg sm:text-xl hover:bg-gray-100 transition-colors w-full">
                ORDER NOW - $14.99
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative bg-[#1a1a1a] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-2 hover:bg-[#222] shrink-0 w-[75vw] max-w-[300px] snap-center sm:w-auto sm:max-w-none sm:shrink">
            <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] mb-4 sm:mb-6 flex items-center justify-center">
              <Image
                src="/images/fried-chicken-burger.png"
                alt="Crispy Chicken Burger"
                width={240}
                height={180}
                className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-lilita text-xl sm:text-2xl text-white mb-1">CRISPY CHICKEN</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Southern fried breast, spicy mayo, pickles
              </p>
              <span className="inline-block bg-brand-red text-white px-5 sm:px-6 py-2 rounded-full font-lilita text-base sm:text-lg">
                $11.99
              </span>
            </div>
          </div>
        </div>

        {/* Mobile: View Full Menu link */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Link
            href="/menu"
            className="font-lilita text-lg sm:text-xl text-white hover:text-brand-red underline underline-offset-4 transition-colors"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
