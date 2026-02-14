"use client";

import Image from "next/image";

export default function ComboDeals() {
  return (
    <section className="relative w-full overflow-hidden z-10">
      {/* Background Image with rounded top corners */}
      <div className="relative w-full h-[284px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px] rounded-t-[25px] sm:rounded-t-[30px] md:rounded-t-[40px] overflow-hidden">
        <Image
          src="/images/combo-deal-bg.png"
          alt="Combo Deal - Burger, Fries & Milkshake"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Subtle dark overlay for depth */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>
    </section>
  );
}