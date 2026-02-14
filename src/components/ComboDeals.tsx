"use client";

import Image from "next/image";

export default function ComboDeals() {
  return (
    <section className="relative w-full overflow-hidden z-10 -mt-[6px] bg-[#0a0602]">
      {/* Background Image with rounded top corners */}
      <div className="relative w-full h-[284px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px] rounded-t-[30px] sm:rounded-t-[36px] md:rounded-t-[48px] overflow-hidden">
        <Image
          src="/images/combo-deal-bg.png"
          alt="Combo Deal - Burger, Fries & Milkshake"
          fill
          className="object-cover object-center lg:object-[center_30%]"
          sizes="100vw"
          priority
        />

        {/* Top gradient – blends the dark gap into the image */}
        <div
          className="absolute top-0 left-0 right-0 h-[25%] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(10,6,2,0.65) 0%, rgba(10,6,2,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Bottom dark overlay for depth */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>
    </section>
  );
}