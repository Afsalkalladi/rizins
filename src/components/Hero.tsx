"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Slide Data (Images only, since title is now static)
const slides = [
  { image: "/images/main-burger.png" },
  { image: "/images/fried-chicken-burger.png" },
  { image: "/images/classic-burger.png" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getPosition = (index: number) => {
    if (index === currentSlide) return "center";
    if (index === (currentSlide - 1 + slides.length) % slides.length)
      return "left";
    return "right";
  };

  // Animation Variants
  // WE USE `left: 50%` for all states to keep them relative to the center of the screen
  // This solves the "Above Mobile" view issue.
  const burgerVariants = {
    center: {
      left: "50%",
      x: "-50%", // Perfectly centered
      y: 0,
      top: "55px",
      scale: 1,
      opacity: 1,
      zIndex: 20,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    left: {
      left: "50%",
      x: "-180%", // Move to the left of center (symmetric)
      y: 20,
      top: "75px",
      scale: 0.75,
      opacity: 0.4,
      zIndex: 10,
      filter: "blur(1.5px)",
      transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
    },
    right: {
      left: "50%",
      x: "80%", // Move to the right of center (symmetric)
      y: 20,
      top: "75px",
      scale: 0.75,
      opacity: 0.4,
      zIndex: 10,
      filter: "blur(1.5px)",
      transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
    },
  };

  // Floating animation for the active burger
  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative w-full h-[439px] bg-[#653913] overflow-hidden">
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/60 z-[5]" />

      {/* Glow/Ellipse Effect */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[21px] w-[552px] h-[265px] z-[6]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Watermark Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none blur-sm opacity-50">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <span
            key={index}
            className="absolute font-jomhuria text-white/[0.05] text-[222px] leading-[222px] whitespace-nowrap select-none"
            style={{
              left: `${-30 + (index % 3) * 40}%`,
              top: `${-20 + Math.floor(index / 3) * 35}%`,
              transform: "rotate(-18.27deg)",
            }}
          >
            BURGER
          </span>
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-[17px] md:left-[10%] top-[145px] w-[38px] h-[38px] z-30 opacity-90 hover:opacity-100 bg-black/30 rounded-full flex items-center justify-center cursor-pointer"
      >
        <Image
          src="/images/arrow-left.svg"
          alt="Previous"
          width={20}
          height={20}
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-[17px] md:right-[10%] top-[145px] w-[38px] h-[38px] z-30 opacity-90 hover:opacity-100 bg-black/30 rounded-full flex items-center justify-center cursor-pointer"
      >
        <Image
          src="/images/arrow-right.svg"
          alt="Next"
          width={20}
          height={20}
        />
      </motion.button>

      {/* BURGERS */}
      {slides.map((slide, index) => {
        const position = getPosition(index);
        const isCurrent = position === "center";

        return (
          <motion.div
            key={index}
            initial={false}
            animate={position}
            variants={burgerVariants}
            className="absolute w-[216px] h-[216px] cursor-pointer"
            onClick={() => setCurrentSlide(index)}
          >
            <motion.div
              // Apply the floating animation ONLY to the center burger
              animate={isCurrent ? floatingAnimation : { y: 0 }}
              className="relative w-full h-full"
            >
              <Image
                src={slide.image}
                alt="Burger"
                fill
                className={`object-contain transition-all duration-1000 ${isCurrent
                  ? "drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                  : "drop-shadow-[0_4px_6.7px_rgba(0,0,0,0.25)]"
                  }`}
                priority={index === 0}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* STATIC TITLE with Entrance & Float Animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[271px] z-20 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-jomhuria text-[57px] leading-[33px] tracking-[2.69px] text-[#EDEDED]"
          >
            BURGER&apos;S
          </motion.h1>
          <motion.h1
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1, // Slight offset for wave effect
            }}
            className="font-jomhuria text-[57px] leading-[33px] tracking-[2.69px] text-[#EDEDED]"
          >
            REINVENTED
          </motion.h1>
        </motion.div>
      </div>

      {/* ORDER NOW Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[367px] z-20">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
          whileTap={{ scale: 0.95 }}
          className="w-[161px] h-[32px] bg-brand-red bg-[#D92323] rounded-[28px] flex items-center justify-center shadow-lg"
        >
          <span className="font-lilita text-[20px] text-white">ORDER NOW</span>
        </motion.button>
      </div>
    </section>
  );
}