"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const items = [
  {
    name: "THE CLASSIC",
    image: "/images/classic-burger.png",
    desc: "Flame-grilled beef, cheese, lettuce, tomato",
    price: "$10.99",
    highlighted: false,
  },
  {
    name: "SIGNATURE SMASH",
    image: "/images/main-burger.png",
    desc: "Double beef, secret sauce, caramelized onion",
    price: "$14.99",
    highlighted: true,
  },
  {
    name: "CRISPY CHICKEN",
    image: "/images/fried-chicken-burger.png",
    desc: "Southern fried breast, spicy mayo, pickles",
    price: "$11.99",
    highlighted: false,
  },
];

export default function FanFavorites() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / items.length;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(idx, items.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#111] py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-14 gap-4">
          <div className="text-center md:text-left">
            <span className="text-brand-red font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block font-poppins">
              DISCOVER THE TASTE
            </span>
            <h2 className="font-jomhuria text-[52px] sm:text-[64px] md:text-[72px] text-white leading-[0.85]">
              OUR SIGNATURE <span className="text-brand-red">COLLECTION</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden md:flex items-center gap-2 text-white font-lilita text-lg xl:text-xl hover:text-brand-red transition-colors group"
          >
            EXPLORE FULL MENU
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Cards – scroll on mobile, grid on sm+ */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:overflow-visible sm:pb-0"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-[16px] sm:rounded-[28px] shrink-0 w-[60vw] max-w-[240px] snap-center sm:w-auto sm:max-w-none sm:shrink transition-all ${
                item.highlighted
                  ? "bg-brand-red p-4 sm:p-7 shadow-2xl sm:scale-105 z-10"
                  : "bg-[#1a1a1a] p-4 sm:p-7 hover:shadow-xl hover:-translate-y-2 hover:bg-[#222]"
              }`}
            >
              {item.highlighted && (
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-white text-brand-red px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-xs font-bold font-poppins">
                  #1 SELLER
                </div>
              )}
              <div className={`relative mb-3 sm:mb-5 flex items-center justify-center ${
                item.highlighted ? "h-[140px] sm:h-[200px] lg:h-[220px]" : "h-[120px] sm:h-[180px] lg:h-[200px]"
              }`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.highlighted ? 240 : 200}
                  height={item.highlighted ? 180 : 150}
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className={`font-lilita text-white mb-0.5 ${
                  item.highlighted ? "text-lg sm:text-2xl" : "text-base sm:text-xl"
                }`}>{item.name}</h3>
                <p className={`text-xs sm:text-sm mb-2.5 sm:mb-4 ${
                  item.highlighted ? "text-white/80" : "text-gray-400"
                }`}>
                  {item.desc}
                </p>
                {item.highlighted ? (
                  <button className="bg-white text-brand-red px-5 sm:px-8 py-2 sm:py-2.5 rounded-full font-lilita text-sm sm:text-lg hover:bg-gray-100 transition-colors w-full">
                    ORDER NOW - {item.price}
                  </button>
                ) : (
                  <span className="inline-block bg-brand-red text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-lilita text-sm sm:text-lg">
                    {item.price}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators – mobile only */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-6 h-2 bg-brand-red"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        {/* View Full Menu link */}
        <div className="text-center mt-6 sm:mt-10 lg:mt-12">
          <Link
            href="/menu"
            className="font-lilita text-base sm:text-xl text-white hover:text-brand-red underline underline-offset-4 transition-colors"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
