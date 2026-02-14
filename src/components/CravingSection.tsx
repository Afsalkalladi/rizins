"use client";

import Image from "next/image";

export default function CravingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[270px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[580px]">
        {/* Background Image – fried chicken scene */}
        <Image
          src="/images/crave-crunch-bg.png"
          alt="Crave the Crunch – Fried Chicken"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Top gradient – seamlessly blends with ComboDeals above (hides seam) */}
        <div
          className="absolute top-0 left-0 right-0 h-[35%] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          }}
        />

        {/* Light overlay for text contrast */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Text: CRAVE THE CRUNCH – positioned top-left */}
        <div className="absolute z-20 left-6 sm:left-8 md:left-12 lg:left-20 xl:left-32 top-[24px] sm:top-[32px] md:top-[44px] lg:top-[60px]">
          <h2
            className="font-jomhuria text-text-light leading-[0.9] tracking-[2.6px]"
            style={{
              fontSize: "clamp(48px, 13.7vw, 80px)",
            }}
          >
            CRAVE THE<br />
            CRUNCH
          </h2>

          {/* Desktop-only CTA */}
          <button className="hidden md:flex mt-4 lg:mt-6 px-8 lg:px-10 py-2.5 lg:py-3 bg-brand-red rounded-full font-lilita text-[16px] lg:text-[20px] text-white hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/40 hover:scale-105 active:scale-95 items-center gap-2">
            ORDER NOW
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
