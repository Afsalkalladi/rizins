"use client";

import Image from "next/image";

export default function ComboDeals() {
  return (
    <section className="relative w-full overflow-hidden -mt-3 sm:-mt-4 md:-mt-6 z-10">
      {/* Background Image with rounded top corners matching Figma */}
      <div className="relative w-full h-[284px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px] rounded-t-[25px] sm:rounded-t-[30px] md:rounded-t-[40px] overflow-hidden">
        <Image
          src="/images/combo-deal-bg.png"
          alt="Combo Deal - Burger, Fries & Milkshake"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Content overlay – centered text, positioned lower */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 text-center">
          {/* "rizins" script branding */}
          <p className="font-jomhuria text-white/80 text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] leading-none italic mb-1">
            rizins
          </p>

          {/* Main heading */}
          <h2 className="font-lilita text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[60px] leading-[1.05] tracking-tight">
            CRUNCH. SPICE. REPEAT.
          </h2>

          {/* Subtitle */}
          <p className="font-poppins text-white/70 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-2 sm:mt-3 leading-relaxed">
            The Ultimate Fried Chicken Burger Experience.
          </p>

          {/* Desktop-only CTA button */}
          <button className="hidden md:flex mt-5 lg:mt-8 px-7 lg:px-10 py-2 lg:py-3 bg-brand-red rounded-full font-lilita text-[15px] lg:text-[20px] text-white hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/40 hover:scale-105 active:scale-95 items-center gap-2">
            VIEW COMBO DEALS
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Bottom gradient – blends into CravingSection below */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[100px] md:h-[120px] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.95) 100%)",
          }}
        />

        {/* COMBO DEAL Badge – bottom-right, matches Figma position */}
        <div className="absolute bottom-[16px] sm:bottom-[20px] md:bottom-[28px] lg:bottom-[36px] right-[12px] sm:right-[16px] md:right-[24px] lg:right-[40px] z-20">
          <div className="bg-white rounded-[42px] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 shadow-md relative">
            <span className="font-poppins font-bold text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] whitespace-nowrap">
              <span className="text-[#232323]">COMBO</span>{" "}
              <span className="text-orange-accent">DEAL</span>
            </span>
            {/* Small triangle pointer – Figma Polygon 3 */}
            <svg
              className="absolute -bottom-[6px] right-3"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
            >
              <polygon points="8,12 0,0 16,0" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}