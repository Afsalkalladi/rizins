"use client";

import Image from "next/image";

// Generate positions for BURGER watermark text
const burgerPositions = [
  { left: "26%", top: "59%", opacity: 0.1 },
  { left: "16%", top: "0%", opacity: 0.1 },
  { left: "12%", top: "18%", opacity: 0.1 },
  { left: "43%", top: "0%", opacity: 0.1 },
  { left: "7%", top: "36%", opacity: 0.1 },
  { left: "39%", top: "18%", opacity: 0.1 },
  { left: "0%", top: "57%", opacity: 0.1 },
  { left: "32%", top: "38%", opacity: 0.1 },
  { left: "57%", top: "40%", opacity: 0.1 },
  { left: "64%", top: "21%", opacity: 0.1 },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[422px] bg-hero-bg overflow-hidden">
      {/* BURGER Watermark Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {burgerPositions.map((pos, index) => (
          <span
            key={index}
            className="absolute font-jomhuria text-white text-[222px] leading-[222px] rotate-burger whitespace-nowrap select-none pointer-events-none"
            style={{
              left: pos.left,
              top: pos.top,
              opacity: pos.opacity,
              transform: "rotate(-18.27deg)",
            }}
          >
            BURGER
          </span>
        ))}
      </div>

      {/* Background gradient overlay */}
      <div 
        className="absolute w-[437px] h-[93px] left-[-18px] bottom-0"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        }}
      />

      {/* Left decorative burger (Classic) */}
      <div className="absolute w-[302px] h-[165px] -left-[160px] top-[83px] opacity-30">
        <Image
          src="/images/classic-burger.svg"
          alt="Classic burger decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Right decorative burger (Fried Chicken) */}
      <div className="absolute w-[427px] h-[233px] left-[229px] top-[58px] opacity-30">
        <Image
          src="/images/fried-chicken-burger.svg"
          alt="Fried chicken burger decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Left Arrow */}
      <button 
        className="absolute left-[17px] top-1/2 -translate-y-1/2 w-[25px] h-[40px] z-10"
        aria-label="Previous slide"
      >
        <div 
          className="w-full h-full"
          style={{
            background: "linear-gradient(180deg, #FFFFFF -52.18%, rgba(0, 0, 0, 0) 164.76%)",
            clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
            opacity: 0.9,
          }}
        />
      </button>

      {/* Right Arrow */}
      <button 
        className="absolute right-[17px] top-1/2 -translate-y-1/2 w-[25px] h-[40px] z-10"
        aria-label="Next slide"
      >
        <div 
          className="w-full h-full"
          style={{
            background: "linear-gradient(180deg, #FFFFFF -52.18%, rgba(0, 0, 0, 0) 164.76%)",
            clipPath: "polygon(0 0, 0 100%, 100% 50%)",
            opacity: 0.9,
          }}
        />
      </button>

      {/* Main Landing Burger */}
      <div className="absolute w-[198px] h-[198px] left-1/2 -translate-x-1/2 top-[67px] z-20">
        <Image
          src="/images/main-burger.svg"
          alt="Delicious cheese burger"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* BURGER'S REINVENTED Text */}
      <div className="absolute w-[191px] left-1/2 -translate-x-1/2 top-[276px] z-20">
        <h1 
          className="font-jomhuria text-[57px] leading-[33px] text-center tracking-[0.047em] text-text-light"
        >
          BURGER&apos;S<br />REINVENTED
        </h1>
      </div>

      {/* ORDER NOW Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[359px] z-20">
        <button 
          className="w-[161px] h-[32px] bg-brand-red rounded-[28px] flex items-center justify-center hover:bg-red-700 transition-colors"
        >
          <span className="font-lilita text-[20px] leading-[23px] text-white">
            ORDER NOW
          </span>
        </button>
      </div>
    </section>
  );
}
