"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface BurgerDeal {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageSrc: string;
}

const burgerDeals: BurgerDeal[] = [
  {
    id: 1,
    name: "Zinger Burger",
    price: 18,
    rating: 4,
    imageSrc: "/images/zinger-burger.png",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 37,
    rating: 3,
    imageSrc: "/images/cheese-burger.png",
  },
  {
    id: 3,
    name: "Jumbo Burger",
    price: 27,
    rating: 3,
    imageSrc: "/images/cheese-burger.png",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[0.5px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="w-[7.5px] h-[7.5px] relative">
          {/* Note: Ensure these images exist in your public folder */}
          <Image
            src={star <= rating ? "/images/star-filled.png" : "/images/star-empty.png"}
            alt=""
            width={8}
            height={8}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function BurgerCard({ deal, isActive }: { deal: BurgerDeal; isActive: boolean }) {
  // We use a fixed wrapper size for layout stability, but scale the inner content
  // logic to differentiate Active vs Inactive
  
  const containerClasses = isActive
    ? "w-[154px] h-[180px] bg-gradient-to-b from-[#630b10] to-[#d66c0f] border border-[#d66c0f] shadow-[0px_3px_6px_0px_#9d5013]"
    : "w-[146px] h-[163px] bg-white shadow-[0px_4px_6.5px_0px_rgba(0,0,0,0.11)] mt-[8.5px]"; // margin top aligns it visually to center

  const textClasses = isActive ? "text-white" : "text-black";
  const priceSize = isActive ? "text-[21px]" : "text-[15px]";
  
  // Image sizing differences
  const imgWrapperClass = isActive 
    ? "w-[125px] h-[68px] -mt-2" 
    : "w-[57px] h-[57px] shadow-[1px_4px_5px_0px_rgba(0,0,0,0.28)]";

  return (
    <div className={`${containerClasses} rounded-[25px] p-4 flex flex-col justify-between transition-all duration-300 ease-out`}>
      {/* Burger Image */}
      <div className={`relative mx-auto ${imgWrapperClass} transition-all duration-300`}>
        <Image
          src={deal.imageSrc}
          alt={deal.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Info */}
      <div className="mt-auto">
        <p className={`font-poppins font-semibold text-[10px] ${textClasses}`}>
          {deal.name}
        </p>
        <div className="mt-1">
          <StarRating rating={deal.rating} />
        </div>
        <p className={`font-poppins font-semibold ${priceSize} ${textClasses} mt-1`}>
          ${deal.price}
        </p>
      </div>
    </div>
  );
}

export default function ComboDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate the center on scroll based on actual DOM positions
  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    burgerDeals.forEach((_, index) => {
      const item = itemRefs.current[index];
      if (item) {
        // Calculate the center of the card relative to the scroll container
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(itemCenter - sliderCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  // Optional: Scroll to center on initial load
  useEffect(() => {
    // 77px is roughly half of the active card width (154/2)
    // This ensures the first item starts centered if you wanted that, 
    // but CSS padding handles the bounds.
  }, []);

  return (
    <section className="w-full bg-[rgba(221,221,221,0.27)] pt-8 pb-8 relative overflow-hidden">
      {/* Curved Top SVG */}
      <svg 
        className="absolute top-0 left-0 w-full -translate-y-[1px]" 
        height="30" 
        viewBox="0 0 402 30" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,30 Q 201,0 402,30 L 402,0 L 0,0 Z" fill="#653913"/>
      </svg>
      
      {/* Header Tab */}
      <div className="w-fit mx-auto">
        <div className="bg-[#f6f6f6] rounded-[20px] py-2 px-6 -mt-6 mb-6 relative z-10 shadow-sm">
          <h2 className="font-poppins font-bold text-[18px]">
            <span className="text-[#232323]">COMBO</span>{" "}
            <span className="text-[#c65e0f]">DEAL</span>
          </h2>
        </div>
      </div>

      {/* Cards Slider */}
      <div 
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
        style={{ 
          // This padding logic ensures the first and last items can be perfectly centered
          // 50% of screen - half of active card width (77px)
          paddingLeft: 'calc(50% - 77px)',
          paddingRight: 'calc(50% - 77px)', 
        }}
      >
        {burgerDeals.map((deal, index) => (
          <div 
            key={deal.id}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="snap-center flex-shrink-0 transition-all duration-300"
          >
            <BurgerCard deal={deal} isActive={index === currentIndex} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {burgerDeals.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-[#d66c0f] w-4" 
                : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}