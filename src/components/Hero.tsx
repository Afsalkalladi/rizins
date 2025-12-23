"use client";

import Image from "next/image";

// BURGER watermark positions based on Figma CSS
const burgerPositions = [
  { left: "15%", top: "-5%" },
  { left: "43%", top: "-5%" },
  { left: "65%", top: "5%" },
  { left: "5%", top: "15%" },
  { left: "35%", top: "18%" },
  { left: "60%", top: "25%" },
  { left: "0%", top: "35%" },
  { left: "30%", top: "40%" },
  { left: "55%", top: "45%" },
  { left: "20%", top: "60%" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[422px] bg-black overflow-hidden">
      {/* BURGER Watermark Pattern - rotated text background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {burgerPositions.map((pos, index) => (
          <span
            key={index}
            className="absolute font-jomhuria text-white/10 text-[200px] leading-none whitespace-nowrap select-none"
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
        className="absolute left-[17px] top-[45%] -translate-y-1/2 w-[25px] h-[40px] z-30 opacity-90 hover:opacity-100 transition-opacity"
        aria-label="Previous"
      >
        <Image
          src="/images/arrow-left.svg"
          alt="Previous"
          width={25}
          height={40}
        />
      </button>

      {/* Right Arrow Navigation */}
      <button 
        className="absolute right-[17px] top-[45%] -translate-y-1/2 w-[25px] h-[40px] z-30 opacity-90 hover:opacity-100 transition-opacity"
        aria-label="Next"
      >
        <Image
          src="/images/arrow-right.svg"
          alt="Next"
          width={25}
          height={40}
        />
      </button>


      {/* Left decorative burger - faded */}
      <div className="absolute w-[302px] h-[165px] -left-[160px] top-[83px] opacity-30 pointer-events-none z-20">
        <Image
          src="/images/classic-burger.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Right decorative burger - faded */}
      <div className="absolute w-[427px] h-[233px] left-[229px] top-[58px] opacity-30 pointer-events-none z-20">
        <Image
          src="/images/fried-chicken-burger.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Black Rectangle Background - covers area from above burger to below text */}
      <div className="absolute w-full h-[290px] left-0 top-[65px] bg-black/100 z-10" />

      {/* Main Landing Burger - Center */}
      <div className="absolute w-[198px] h-[198px] left-1/2 -translate-x-1/2 top-[67px] z-20">
        <Image
          src="/images/main-burger.png"
          alt="Delicious gourmet burger"
          fill
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          priority
        />
      </div>

      {/* BURGER'S REINVENTED Text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[280px] z-20 text-center">
        <h1 className="font-jomhuria text-[57px] leading-[33px] tracking-[0.047em] text-[#EDEDED]">
          BURGER&apos;S
        </h1>
        <h1 className="font-jomhuria text-[57px] leading-[33px] tracking-[0.047em] text-[#EDEDED]">
          REINVENTED
        </h1>
      </div>

      {/* ORDER NOW Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[365px] z-20">
        <button className="w-[161px] h-[32px] bg-brand-red rounded-[28px] flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
          <span className="font-lilita text-[20px] leading-[23px] text-white">
            ORDER NOW
          </span>
        </button>
      </div>
    </section>
  );
}