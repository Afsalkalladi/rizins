"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1c1008 0%, #201209 30%, #1e100a 60%, #18100c 100%)" }}
    >
      {/* Warm ambient glow – right */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #D0021B 0%, transparent 65%)" }}
      />
      {/* Warm ambient glow – left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #c65e0f 0%, transparent 65%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-[85%] sm:w-[75%] lg:w-full mx-auto aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/main-burger.png"
                    alt="Premium Rizins Burger"
                    fill
                    className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Subtle background glow behind burger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* EST badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/10 z-10">
                <span className="text-[#e8a54b] font-poppins text-[10px] sm:text-xs font-bold tracking-widest">EST. 2024</span>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 z-10">
                <h3 className="text-white font-jomhuria text-3xl sm:text-5xl leading-none drop-shadow-lg">
                  THE GOLD<br />STANDARD
                </h3>
              </div>
            </div>

            {/* Premium Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-5 right-[5%] lg:-right-4 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] bg-brand-red rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(208,2,27,0.5)] z-20 ring-4 ring-[#1c1008]">
              <div className="text-center text-white">
                <p className="font-lilita text-[10px] sm:text-sm leading-tight">
                  100%<br />PREMIUM<br />BEEF
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Label with line accent */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-8 sm:w-12 h-[2px] bg-[#e8a54b]" />
              <span className="text-[#e8a54b] font-poppins text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">
                OUR STORY
              </span>
              <div className="w-8 sm:w-12 h-[2px] bg-[#e8a54b] lg:hidden" />
            </div>

            <h2 className="font-jomhuria text-[48px] sm:text-[60px] md:text-[72px] lg:text-[84px] xl:text-[96px] leading-[0.85] text-white mb-6 sm:mb-8">
              NOT JUST A BURGER,<br />
              <span className="text-brand-red">IT&apos;S AN EXPERIENCE.</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                We believe that fast food shouldn&apos;t mean compromising on quality.
                Every Rizins burger begins with{" "}
                <span className="text-[#e8a54b] font-medium">locally sourced, ethically raised beef</span>,
                smashed to perfection on a scorching hot grill.
              </p>
              <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                Paired with our <span className="text-brand-red font-medium">secret house sauce</span>,
                artisan buns baked fresh daily, and crisp organic produce&mdash;this
                is a culinary event.
              </p>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-6 sm:gap-10 mb-8 sm:mb-10 py-5 sm:py-6 px-6 sm:px-8 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-center lg:text-left">
                <span className="font-jomhuria text-3xl sm:text-4xl text-[#e8a54b] leading-none">50+</span>
                <p className="text-white/40 text-[10px] sm:text-xs mt-0.5 font-poppins">Menu Items</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center lg:text-left">
                <span className="font-jomhuria text-3xl sm:text-4xl text-[#e8a54b] leading-none">10K+</span>
                <p className="text-white/40 text-[10px] sm:text-xs mt-0.5 font-poppins">Happy Diners</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center lg:text-left">
                <span className="font-jomhuria text-3xl sm:text-4xl text-[#e8a54b] leading-none">4.9</span>
                <p className="text-white/40 text-[10px] sm:text-xs mt-0.5 font-poppins">Avg Rating</p>
              </div>
            </div>

            <Link
              href="/our-story"
              className="group flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-3.5 bg-brand-red text-white rounded-full font-lilita text-lg sm:text-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-brand-red/30 hover:scale-105 active:scale-95"
            >
              OUR STORY
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
