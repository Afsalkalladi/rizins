"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Slide Data
const slides = [
  {
    image: "/images/main-burger.png",
    subtitle: "BURGER'S",
    title: "REINVENTED",
    description: "The classic taste you love, elevated to perfection.",
  },
  {
    image: "/images/fried-chicken-burger.png",
    subtitle: "CRISPY",
    title: "CRUNCH",
    description: "Golden fried chicken with our signature spicy mayo.",
  },
  {
    image: "/images/classic-burger.png",
    subtitle: "DOUBLE",
    title: "DELIGHT",
    description: "Double the beef, double the cheese, double the joy.",
  },
];

// BURGER watermark positions based on exact Figma CSS percentages
const burgerPositions = [
  { left: "5.0%", top: "86.5%" },
  { left: "1.8%", top: "50%" },
  { left: "4.7%", top: "0%" },
  { left: "-69%", top: "0%" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black overflow-hidden group">
      {/* BURGER Watermark Pattern - responsive adjustments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        {burgerPositions.map((pos, index) => (
          <span
            key={index}
            className="absolute font-jomhuria text-white/5 text-[222px] leading-[222px] whitespace-nowrap select-none transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              left: pos.left,
              top: pos.top,
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
        className="absolute left-[17px] md:left-[40px] top-[45%] -translate-y-1/2 w-[40px] h-[40px] z-30 opacity-60 hover:opacity-100 transition-all hover:scale-110 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm"
        aria-label="Previous"
      >
        <Image
          src="/images/arrow-left.svg"
          alt="Previous"
          width={15}
          height={24}
        />
      </button>

      {/* Right Arrow Navigation */}
      <button
        onClick={nextSlide}
        className="absolute right-[17px] md:right-[40px] top-[45%] -translate-y-1/2 w-[40px] h-[40px] z-30 opacity-60 hover:opacity-100 transition-all hover:scale-110 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm"
        aria-label="Next"
      >
        <Image
          src="/images/arrow-right.svg"
          alt="Next"
          width={15}
          height={24}
        />
      </button>

      {/* Black Rectangle Background Gradient */}
      <div className="absolute w-full h-[60%] bottom-0 left-0 bg-gradient-to-t from-black via-black to-transparent z-10" />

      {/* Main Landing Burger - Animated */}
      <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] left-1/2 -translate-x-1/2 top-[80px] md:top-[100px] z-20 transition-all duration-700 ease-in-out hover:scale-105 cursor-pointer">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                ? "opacity-100 translate-x-0 rotate-0 scale-100"
                : "opacity-0 translate-x-20 rotate-12 scale-90"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(200,50,50,0.15)]"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Text Content - Animated */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[340px] md:top-[480px] lg:top-[580px] z-20 text-center w-full px-4">
        <div className="overflow-hidden h-[160px] md:h-[220px]"> {/* Container for text transition */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 absolute w-full left-0 ${index === currentSlide ? "top-0 opacity-100" : "top-[100px] opacity-0"
                }`}
            >
              <h2 className="font-jomhuria text-[40px] md:text-[60px] leading-none text-brand-red tracking-wider">
                {slide.subtitle}
              </h2>
              <h1 className="font-jomhuria text-[60px] md:text-[100px] leading-[0.8] tracking-[0.05em] text-[#EDEDED] mb-4">
                {slide.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* ORDER NOW Button */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] md:bottom-[60px] z-30">
        <button className="px-8 py-3 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/50 hover:-translate-y-1">
          <span className="font-lilita text-[20px] md:text-[24px] text-white tracking-wide">
            ORDER NOW
          </span>
        </button>
      </div>
    </section>
  );
}