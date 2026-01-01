"use client";

import Image from "next/image";

// BURGER watermark positions based on exact Figma CSS percentages
const burgerPositions = [
  { left: "5.0%", top: "86.5%" },
  { left: "1.8%", top: "50%" },
  { left: "4.7%", top: "0%" },
  { left: "-69%", top: "0%" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[422px] md:h-[600px] lg:h-[700px] bg-black overflow-hidden group">
      {/* BURGER Watermark Pattern - responsive adjustments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {burgerPositions.map((pos, index) => (
          <span
            key={index}
            className="absolute font-jomhuria text-white/10 text-[222px] leading-[222px] whitespace-nowrap select-none transition-transform duration-700 ease-out group-hover:scale-105"
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
        className="absolute left-[17px] md:left-[40px] top-[45%] -translate-y-1/2 w-[25px] h-[40px] z-30 opacity-90 hover:opacity-100 transition-opacity"
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
        className="absolute right-[17px] md:right-[40px] top-[45%] -translate-y-1/2 w-[25px] h-[40px] z-30 opacity-90 hover:opacity-100 transition-opacity"
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
      <div className="absolute w-[302px] h-[165px] -left-[160px] md:-left-[100px] lg:left-[5%] top-[83px] md:top-[120px] opacity-30 pointer-events-none z-20 transition-transform duration-700 delay-100 group-hover:-translate-x-4">
        <Image
          src="/images/classic-burger.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Right decorative burger - faded */}
      <div className="absolute w-[427px] h-[233px] left-[229px] md:left-[auto] md:right-[-100px] lg:right-[5%] top-[58px] md:top-[100px] opacity-30 pointer-events-none z-20 transition-transform duration-700 delay-100 group-hover:translate-x-4">
        <Image
          src="/images/fried-chicken-burger.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Black Rectangle Background - covers area from above burger to below text */}
      <div className="absolute w-full h-[290px] md:h-[400px] left-0 top-[65px] md:top-[100px] bg-black/100 z-10" />

      {/* Main Landing Burger - Center */}
      <div className="absolute w-[198px] h-[198px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] left-1/2 -translate-x-1/2 top-[67px] md:top-[50px] z-20 transition-transform duration-500 hover:scale-105 cursor-pointer">
        <Image
          src="/images/main-burger.png"
          alt="Delicious gourmet burger"
          fill
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          priority
        />
      </div>

      {/* BURGER'S REINVENTED Text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[280px] md:top-[380px] lg:top-[450px] z-20 text-center w-full">
        <h1 className="font-jomhuria text-[57px] md:text-[80px] lg:text-[100px] leading-[33px] md:leading-[50px] lg:leading-[70px] tracking-[0.047em] text-[#EDEDED]">
          BURGER&apos;S
        </h1>
        <h1 className="font-jomhuria text-[57px] md:text-[80px] lg:text-[100px] leading-[33px] md:leading-[50px] lg:leading-[70px] tracking-[0.047em] text-[#EDEDED]">
          REINVENTED
        </h1>
      </div>

      {/* ORDER NOW Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[365px] md:top-[500px] lg:top-[620px] z-20">
        <button className="w-[161px] h-[32px] md:w-[200px] md:h-[48px] bg-brand-red rounded-[28px] flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg hover:shadow-brand-red/50">
          <span className="font-lilita text-[20px] md:text-[24px] leading-[23px] md:leading-[28px] text-white">
            ORDER NOW
          </span>
        </button>
      </div>
    </section>
  );
}