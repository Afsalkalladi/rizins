"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TasteDifference() {
  return (
    <section className="w-full flex flex-row bg-white">

      {/* Left: Image Box */}
      <div className="relative w-[45%] lg:w-[40%] bg-[#111] min-h-[300px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
        <Image
          src="/images/taste-difference.png"
          alt="Smash Burger on Grill"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 45vw, 40vw"
        />
      </div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[55%] lg:w-[60%] bg-white flex flex-col justify-center items-start pl-[5%] sm:pl-[6%] md:pl-[8%] pr-[4%] py-6 overflow-hidden"
      >
        
        {/* Main Headings */}
        <h2 
          className="font-lilita text-black uppercase flex flex-col items-start whitespace-nowrap"
          style={{ lineHeight: "0.9" }}
        >
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">TASTE THE</span>
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">DIFFERENCE.</span>
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">BITE INTO REAL</span>
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">
            <span className="text-[#d56116]">SMASH</span>
            <span className="text-black">.</span>
          </span>
        </h2>

        {/* Description paragraph */}
        {/* Removed max-w constraints so the text uses the full new width */}
        <p className="font-poppins text-black text-left mt-5 lg:mt-6 font-normal text-[clamp(10px,1.2vw,16px)] leading-relaxed w-full">
          Satisfy your cravings with Rizins Smash Burgers — where every bite is big, juicy, crispy, and packed with flavour. Our smashed patties are pressed fresh on the grill, creating that signature crust on the outside while staying tender and juicy inside.
        </p>

        {/* Closing text */}
        <p className="font-poppins text-black text-left mt-4 lg:mt-5 font-normal text-[clamp(10px,1.2vw,16px)] leading-relaxed w-full">
          This isn&apos;t just a burger.<br />
          It&apos;s the real smash experience.
        </p>
        
      </motion.div>

    </section>
  );
}