"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// --- Types ---
interface BurgerDeal {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageSrc: string;
}

// --- Data ---
const burgerDeals: BurgerDeal[] = [
  { id: 1, name: "Zinger Burger", price: 18, rating: 4, imageSrc: "/images/zinger-burger.png" },
  { id: 2, name: "Cheese Burger", price: 37, rating: 3, imageSrc: "/images/cheese-burger.png" },
  { id: 3, name: "Jumbo Burger", price: 27, rating: 3, imageSrc: "/images/cheese-burger.png" },
];

// --- Sub-Components ---

// Improved: SVG Icon for better performance than loading small PNGs
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "#FFC107" : "#E2E8F0"}
    className="w-2.5 h-2.5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const BurgerCard = ({ deal, isActive }: { deal: BurgerDeal; isActive: boolean }) => {
  return (
    <div
      className={`
        relative flex flex-col justify-between p-4 rounded-[25px] transition-all duration-300 ease-out
        ${isActive 
          ? "w-[154px] h-[190px] bg-gradient-to-b from-[#630b10] to-[#d66c0f] shadow-lg shadow-orange-900/40 -mt-6" 
          : "w-[146px] h-[163px] bg-white shadow-md mt-0"
        }
      `}
    >
      {/* Image Container - Handled with transform for performance */}
      <div 
        className={`relative mx-auto transition-all duration-300 ${
          isActive ? "w-[125px] h-[80px] -mt-8 scale-110" : "w-[65px] h-[65px]"
        }`}
      >
        <Image
          src={deal.imageSrc}
          alt={deal.name}
          fill
          className="object-contain drop-shadow-xl"
          priority={isActive}
        />
      </div>

      {/* Content */}
      <div className="mt-auto">
        <h3 className={`font-poppins font-bold text-[11px] ${isActive ? "text-white" : "text-gray-900"}`}>
          {deal.name}
        </h3>
        
        <div className="flex gap-0.5 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= deal.rating} />
          ))}
        </div>

        <p className={`font-poppins font-bold mt-1 ${isActive ? "text-[20px] text-white" : "text-[15px] text-gray-900"}`}>
          ${deal.price}
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function ComboDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- RESTORED LOGIC START ---
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
  // --- RESTORED LOGIC END ---

  // Optional: Center initial load
  useEffect(() => {
    // Logic to scroll to initial center if needed
  }, []);

  return (
    <section className="relative w-full bg-transparent">
      
      {/* PROFESSIONAL TIP:
        Using CSS rounded corners + negative margin removes the need for the heavy SVG.
        It pulls this white section UP over the previous hero section.
      */}
      <div className="bg-white rounded-t-[20px] pt-8 pb-10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] -mt-6 relative z-10">
        
        {/* Section Header */}
        <div className="w-fit mx-auto mb-6">
          <div className="bg-[#f6f6f6] rounded-[20px] py-2 px-6 shadow-sm">
            <h2 className="font-poppins font-bold text-[18px]">
              <span className="text-[#232323]">COMBO</span>{" "}
              <span className="text-[#c65e0f]">DEAL</span>
            </h2>
          </div>
        </div>

        {/* Cards Slider - Using Original Logic Props */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8"
          style={{ 
            // Ensures first/last items can be centered
            paddingLeft: 'calc(50% - 77px)',
            paddingRight: 'calc(50% - 77px)', 
          }}
        >
          {burgerDeals.map((deal, index) => (
            <div 
              key={deal.id}
              // Ref assignment for the original logic to work
              ref={(el) => { itemRefs.current[index] = el; }}
              className="snap-center flex-shrink-0 transition-all duration-300"
            >
              <BurgerCard deal={deal} isActive={index === currentIndex} />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-2">
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
      </div>
    </section>
  );
}