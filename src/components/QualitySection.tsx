"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QualitySection() {
  return (
    <section className="w-full bg-white -mt-6 sm:-mt-8 pt-12 sm:pt-16 pb-6 sm:pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed to always be flex-row so they stay side-by-side */}
        <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12">
          
          {/* Text Content - Forced to always take exactly half the width (w-1/2) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-1/2 text-left"
          >
            <h2 className="font-lilita text-[24px] sm:text-[36px] lg:text-[44px] text-[#1a1a1a] leading-tight mb-3 sm:mb-4">
              QUALITY YOU CAN TASTE
            </h2>
            <p className="text-gray-600 font-poppins text-xs sm:text-sm lg:text-base leading-relaxed">
              We don&apos;t just make burgers. We craft experiences using only the freshest, locally sourced ingredients. From farm to tray, every step is handled with care.
            </p>
            <div className="mt-4 sm:mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2 sm:px-5 sm:py-2.5 font-lilita text-sm sm:text-base text-white transition-colors duration-300 hover:bg-[#b00217]"
              >
                READ OUR STORY
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Image - Forced to always take exactly half the width (w-1/2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-1/2 h-[250px] sm:h-[350px] lg:h-[450px] relative"
          >
            <Image
              src="/images/main-burger.png"
              alt="Quality Ingredients"
              fill
              className="object-contain"
            />
            {/* Adjusted the badge size slightly for smaller screens to fit the 50% layout */}
            <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 bg-brand-red text-white rounded-full flex flex-col items-center justify-center font-lilita text-center shadow-red-500/30 shadow-xl rotate-[12deg] border-2 sm:border-4 border-white">
              <span className="text-xs sm:text-sm leading-none">100%</span>
              <span className="text-[8px] sm:text-[10px] mt-0.5">
                AUSSIE
                <br />
                BEEF
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}