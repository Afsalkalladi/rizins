"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CravingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[460px] lg:h-[540px] xl:h-[620px]">
        {/* Background Image – fried chicken scene */}
        <Image
          src="/images/crave-crunch-bg.png"
          alt="Crave the Crunch – Fried Chicken"
          fill
          className="object-cover object-[20%_center]"
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

        {/* Text Content – positioned top-left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute z-20 left-6 sm:left-8 md:left-12 lg:left-20 xl:left-32 top-[24px] sm:top-[32px] md:top-[44px] lg:top-[60px] max-w-[60%] sm:max-w-[55%] md:max-w-[42%] lg:max-w-[35%]"
        >
          {/* CRAVE THE CRUNCH */}
          <h2
            className="font-jomhuria text-text-light leading-[0.50] tracking-[2.6px]"
            style={{
              fontSize: "clamp(48px, 13.7vw, 80px)",
            }}
          >
            CRAVE THE<br />
            CRUNCH
          </h2>

          {/* SMASHED Fresh. TASTES BETTER tagline */}
          <p
            className="font-lilita text-white mt-3 sm:mt-4 md:mt-5 leading-tight"
            style={{
              fontSize: "clamp(14px, 4vw, 28px)",
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            SMASHED <span className="text-yellow-400 italic">Fresh.</span> TASTES{" "}
            <span className="text-yellow-400 italic">BETTER</span>
          </p>

          {/* Description text */}
          <p
            className="font-poppins text-white/85 mt-2 sm:mt-3 md:mt-4 leading-relaxed max-w-[90%] sm:max-w-[85%] md:max-w-[80%]"
            style={{
              fontSize: "clamp(10px, 2.5vw, 16px)",
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Great burgers start with great ingredients. At Rizins Smash Burgers, we use premium quality meat, smashed fresh on the grill for that perfect crispy edge and juicy bite.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
