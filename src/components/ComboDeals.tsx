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

        {/* Top gradient overlay – smooth blend from hero above */}
        <div
          className="absolute top-0 left-0 right-0 h-[60%] z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.18) 55%, transparent 100%)",
          }}
        />

        {/* Content overlay – positioned to match Figma */}
        <div className="absolute inset-0 z-20 flex flex-col justify-start items-start pt-4 sm:pt-6 md:pt-10 lg:pt-14 pl-6 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-32">
          {/* "rizins" script branding */}
          <p className="font-jomhuria text-white/80 text-[24px] sm:text-[28px] md:text-[34px] lg:text-[44px] leading-none italic">
            rizins
          </p>

          {/* Main heading: CRUNCH. SPICE. REPEAT. */}
          <h2 className="font-lilita text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] leading-[1] mt-0 tracking-tight">
            CRUNCH.<br />
            SPICE. REPEAT.
          </h2>

          {/* Subtitle */}
          <p className="font-poppins text-white/70 text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] mt-1.5 sm:mt-2 md:mt-3 leading-relaxed">
            The Ultimate Fried Chicken<br />
            Burger Experience.
          </p>

          {/* Desktop-only CTA button */}
          <button className="hidden md:flex mt-5 lg:mt-8 px-7 lg:px-10 py-2 lg:py-3 bg-brand-red rounded-full font-lilita text-[15px] lg:text-[20px] text-white hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/40 hover:scale-105 active:scale-95 items-center gap-2">
            VIEW COMBO DEALS
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

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