"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        
        {/* Quality Seal / Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-[60px] h-[4px] bg-brand-red mb-6 rounded-full" />
          <h2 className="font-lilita text-[42px] sm:text-[56px] md:text-[64px] text-[#1a1a1a] leading-tight mb-4">
            QUALITY YOU CAN TASTE
          </h2>
          <p className="text-gray-500 font-poppins text-sm sm:text-base max-w-2xl">
            We don&apos;t just make burgers. We craft experiences using only the freshest, locally sourced ingredients. 
            From farm to tray, every step is handled with care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Fresh Ingredients Visual */}
          <div className="relative order-2 lg:order-1">
             <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-[40px] shadow-xl border border-gray-100 p-8 sm:p-12 overflow-hidden group">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-red/5 rounded-bl-[100px] -z-0 transition-all duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-yellow-400/10 rounded-tr-[80px] -z-0 transition-all duration-500 group-hover:scale-110" />
                
                <div className="relative w-full h-full">
                  <Image
                    src="/images/main-burger.png"
                    alt="Fresh Ingredients"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>

                {/* Floating "Fresh" tag */}
                <div className="absolute top-8 left-8 bg-green-600 text-white px-4 py-1.5 rounded-full font-lilita text-sm shadow-lg rotate-[-6deg]">
                  FRESH DAILY
                </div>
                
                {/* 100% Beef Badge */}
                <div className="absolute bottom-8 right-8 w-[100px] h-[100px] bg-brand-red text-white sorted-full rounded-full flex flex-col items-center justify-center font-lilita text-center shadow-red-500/30 shadow-xl rotate-[12deg] border-4 border-white">
                  <span className="text-sm leading-none">100%</span>
                  <span className="text-[10px] mt-0.5">AUSSIE<br/>BEEF</span>
                </div>
             </div>
          </div>

          {/* Right: Content Cards */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Card 1 */}
            <div className="flex gap-6 items-start group">
               <div className="w-[60px] h-[60px] shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-2xl group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                 🔥
               </div>
               <div>
                 <h3 className="font-lilita text-2xl text-[#1a1a1a] mb-2 group-hover:text-brand-red transition-colors">FLAME GRILLED TO PERFECTION</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">
                   Our patties are smashed fresh on a scorching hot grill to lock in the juices and create that signature crust you crave.
                 </p>
               </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-6 items-start group">
               <div className="w-[60px] h-[60px] shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-2xl group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                 🥬
               </div>
               <div>
                 <h3 className="font-lilita text-2xl text-[#1a1a1a] mb-2 group-hover:text-brand-red transition-colors">CRISP & ORGANIC</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">
                   We partner with local farmers to bring you crunchy lettuce, ripe tomatoes, and artisan buns baked fresh every morning.
                 </p>
               </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-red text-white rounded-xl font-lilita text-xl hover:bg-[#b00217] transition-all shadow-lg hover:shadow-brand-red/30 hover:-translate-y-1"
              >
                READ OUR FULL STORY
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
