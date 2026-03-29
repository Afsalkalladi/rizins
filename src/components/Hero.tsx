"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = slides.length;

  const goToSlide = useCallback(
    (index: number, moveDirection: "next" | "prev" = "next") => {
      if (isAnimating) return;
      setIsFirstLoad(false);
      setIsAnimating(true);
      setDirection(moveDirection);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 1200);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % total, "next");
  }, [currentSlide, total, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + total) % total, "prev");
  }, [currentSlide, total, goToSlide]);

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, isAnimating]);

  const getPos = useCallback((index: number) => {
    if (index === currentSlide) return "center";
    if (index === (currentSlide + 1) % total) return "right";
    return "left";
  }, [currentSlide, total]);

  return (
    <>
      <section className="relative w-full h-[439px] sm:h-[500px] md:h-[560px] lg:h-[640px] xl:h-[720px] bg-brand-brown overflow-hidden">
        {/* Top gradient – perfectly blending the red navbar downwards into the brown background */}
        <div
          className="absolute top-0 left-0 right-0 h-[15%] sm:h-[20%] z-[6] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #2e2828ff 0%, rgba(208,2,27,0) 100%)",
          }}
        />

        {/* BURGER Watermark Pattern – blurred, rotated */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[4px] z-[1]">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="absolute font-jomhuria text-white/[0.09] whitespace-nowrap select-none"
              style={{
                fontSize: "clamp(140px, 55vw, 222px)",
                lineHeight: "1",
                left: `${-30 + (index % 3) * 40}%`,
                top: `${-20 + Math.floor(index / 3) * 35}%`,
                transform: "rotate(-18.27deg)",
              }}
            >
              BURGER
            </span>
          ))}
        </div>

        {/* ===== BURGER CAROUSEL ===== */}
        {slides.map((slide, index) => {
          const pos = getPos(index);
          let className = "absolute transition-all duration-1000 ease-in-out cursor-pointer ";
          let style: React.CSSProperties = {};

          if (pos === "center") {
            className += "z-20 cursor-default";
            style = {
              top: "8%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(190px, 48vw, 400px)",
              height: "clamp(190px, 48vw, 400px)",
              opacity: 1,
              filter: "blur(0px)",
            };
          } else if (pos === "left") {
            className += "z-10";
            style = {
              top: "16%",
              left: "clamp(-48px, calc(5vw - 60px), 14%)",
              transform: "translateX(0)",
              width: "clamp(130px, 30vw, 240px)",
              height: "clamp(100px, 22vw, 170px)",
              opacity: 0.5,
              filter: "blur(1px)",
            };
          } else if (pos === "right") {
            className += "z-10";
            style = {
              top: "16%",
              left: "calc(100% - clamp(-48px, calc(5vw - 60px), 14%))", /* Anchors exact same bound from right */
              transform: "translateX(-100%)",
              width: "clamp(130px, 30vw, 240px)",
              height: "clamp(100px, 22vw, 170px)",
              opacity: 0.5,
              filter: "blur(1px)",
            };
          }

          return (
            <div
              key={index}
              className={className}
              style={style}
              onClick={() => {
                if (pos === "left") prevSlide();
                if (pos === "right") nextSlide();
              }}
            >
              <div className={`relative w-full h-full ${pos === "center" ? "animate-float" : "animate-float-slow"}`}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={`object-contain ${pos === "center" ? "sm:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" : "drop-shadow-lg"}`}
                  priority={pos === "center"}
                />
              </div>
            </div>
          );
        })}

        {/* ===== ARROW NAVIGATION ===== */}
        <button
          onClick={prevSlide}
          className="absolute z-30 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] md:w-[46px] md:h-[46px] lg:w-[50px] lg:h-[50px]"
          style={{ left: "clamp(8px, 3%, 24px)", top: "33%" }}
          aria-label="Previous slide"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-30 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] md:w-[46px] md:h-[46px] lg:w-[50px] lg:h-[50px]"
          style={{ right: "clamp(8px, 3%, 24px)", top: "33%" }}
          aria-label="Next slide"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* ===== HEADER & CALL TO ACTION (fixed) ===== */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-between w-full px-4"
          style={{ top: "54%", height: "32%" }}
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="font-jomhuria text-[57px] sm:text-[64px] md:text-[72px] lg:text-[90px] xl:text-[110px] leading-[33px] sm:leading-[38px] md:leading-[42px] lg:leading-[52px] xl:leading-[64px] tracking-[2.69px] text-text-light">
              BURGER&apos;S
            </h1>
            <h1 className="font-jomhuria text-[57px] sm:text-[64px] md:text-[72px] lg:text-[90px] xl:text-[110px] leading-[33px] sm:leading-[38px] md:leading-[42px] lg:leading-[52px] xl:leading-[64px] tracking-[2.69px] text-text-light">
              REINVENTED
            </h1>
          </div>

          {/* CENTERED BUT MOVED SLIGHTLY UP */}
          <div className="flex flex-1 items-start pt-2 sm:pt-4 justify-center w-full">
            <p className="text-white/90 font-light text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] tracking-wide opacity-80 text-center">
              One brand. One standard. Endless satisfaction.
            </p>
          </div>

          <button className="w-[161px] h-[32px] sm:w-[180px] sm:h-[38px] md:w-[200px] md:h-[42px] lg:w-[240px] lg:h-[50px] bg-brand-red rounded-[28px] flex shrink-0 items-center justify-center hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/40 hover:scale-105 active:scale-95">
            <span className="font-lilita text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-white">
              ORDER NOW
            </span>
          </button>
        </div>

        {/* Bottom gradient – seamless fade into combo section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%] z-[5] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0a0602 0%, rgba(10,6,2,0.8) 20%, rgba(10,6,2,0.2) 60%, transparent 100%)",
          }}
        />

        {/* Vignette Gradient from sides */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 100%, transparent 60%, rgba(0,0,0,0.6) 95%)",
          }}
        />

        {/* Tiny connector – prevents sub-pixel gaps */}
        <div className="w-full h-[6px] bg-[#0a0602]" />
      </section>

      {/* Tiny connector – prevents sub-pixel gaps */}
      <div className="w-full h-[6px] bg-[#0a0602]" />
    </>
  );
}