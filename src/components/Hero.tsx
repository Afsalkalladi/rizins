"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Slide Data
const slides = [
  {
    image: "/images/main-burger.png",
    subtitle: "BURGER'S",
    title: "REINVENTED",
  },
  {
    image: "/images/fried-chicken-burger.png",
    subtitle: "CRISPY",
    title: "CRUNCH",
  },
  {
    image: "/images/classic-burger.png",
    subtitle: "DOUBLE",
    title: "DELIGHT",
  },
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

  const total = slides.length;

  // Helper to get position class based on slide index and current slide
  const getSlideClass = (index: number) => {
    if (index === currentSlide) {
      // CENTER (Main)
      return "left-1/2 -translate-x-1/2 top-[35px] z-20 opacity-100 scale-100";
    } else if (index === (currentSlide - 1 + total) % total) {
      // LEFT (Previous)
      return "-left-[104px] top-[68px] opacity-40 z-10 scale-75 blur-[1.15px]";
    } else {
      // RIGHT (Next)
      return "left-[236px] top-[50px] opacity-40 z-10 scale-75 blur-[1.15px]";
    }
  };

  return (
    <section className="relative w-full h-[360px] bg-[#653913] overflow-hidden">
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/60 z-[5]" />

      {/* Glow/Ellipse Effect at top */}
      <div 
        className="absolute -left-[75px] -top-[21px] w-[552px] h-[265px] z-[6]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 70%)",
        }}
      />

      {/* BURGER Watermark Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none blur-sm">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <span
            key={index}
            className="absolute font-jomhuria text-white/[0.09] text-[222px] leading-[222px] whitespace-nowrap select-none"
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

      {/* Left Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-[17px] top-[115px] w-[38px] h-[38px] z-30 opacity-90 hover:opacity-100 transition-opacity bg-black/30 rounded-full flex items-center justify-center"
        aria-label="Previous"
      >
        <Image
          src="/images/arrow-left.svg"
          alt="Previous"
          width={20}
          height={20}
        />
      </button>

      {/* Right Arrow Navigation */}
      <button
        onClick={nextSlide}
        className="absolute right-[17px] top-[115px] w-[38px] h-[38px] z-30 opacity-90 hover:opacity-100 transition-opacity bg-black/30 rounded-full flex items-center justify-center"
        aria-label="Next"
      >
        <Image
          src="/images/arrow-right.svg"
          alt="Next"
          width={20}
          height={20}
        />
      </button>

      {/* BURGERS ROTATION CONTAINER */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-[216px] h-[216px] transition-all duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)] cursor-pointer ${getSlideClass(index)}`}
          onClick={() => setCurrentSlide(index)}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className={`object-contain transition-all duration-1000 ${
              index === currentSlide 
                ? "drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" 
                : "drop-shadow-[0_4px_6.7px_rgba(0,0,0,0.25)]"
            }`}
            priority={index === 0}
          />
        </div>
      ))}

      {/* BURGER'S REINVENTED Text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[220px] z-20 text-center">
        <h1 className="font-jomhuria text-[57px] leading-[33px] tracking-[2.69px] text-[#EDEDED]">
          BURGER&apos;S
        </h1>
        <h1 className="font-jomhuria text-[57px] leading-[33px] tracking-[2.69px] text-[#EDEDED]">
          REINVENTED
        </h1>
      </div>

      {/* ORDER NOW Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[300px] z-20">
        <button className="w-[161px] h-[32px] bg-brand-red rounded-[28px] flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
          <span className="font-lilita text-[20px] text-white">
            ORDER NOW
          </span>
        </button>
      </div>
    </section>
  );
}