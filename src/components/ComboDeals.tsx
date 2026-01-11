"use client";

import Image from "next/image";
import { useState } from "react";

interface BurgerDeal {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageSrc: string;
  featured?: boolean;
}

const burgerDeals: BurgerDeal[] = [
  {
    id: 1,
    name: "Zinger Burger",
    price: 18,
    rating: 4,
    imageSrc: "/images/zinger-burger.png",
    featured: true,
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

function FeaturedCard({ deal }: { deal: BurgerDeal }) {
  return (
    <div className="w-[154px] h-[180px] rounded-[25px] bg-gradient-to-b from-[#630b10] to-[#d66c0f] border border-[#d66c0f] shadow-[0px_3px_6px_0px_#9d5013] p-4 flex flex-col justify-between flex-shrink-0">
      {/* Burger Image */}
      <div className="relative w-[125px] h-[68px] -mt-2 mx-auto">
        <Image
          src={deal.imageSrc}
          alt={deal.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Info */}
      <div className="mt-auto">
        <p className="font-poppins font-semibold text-[10px] text-white">
          {deal.name}
        </p>
        <div className="mt-1">
          <StarRating rating={deal.rating} />
        </div>
        <p className="font-poppins font-semibold text-[21px] text-white mt-1">
          ${deal.price}
        </p>
      </div>
    </div>
  );
}

function RegularCard({ deal }: { deal: BurgerDeal }) {
  return (
    <div className="w-[146px] h-[163px] rounded-[25px] bg-white shadow-[0px_4px_6.5px_0px_rgba(0,0,0,0.11)] p-4 flex flex-col flex-shrink-0">
      {/* Burger Image */}
      <div className="relative w-[57px] h-[57px] mx-auto shadow-[1px_4px_5px_0px_rgba(0,0,0,0.28)]">
        <Image
          src={deal.imageSrc}
          alt={deal.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Info */}
      <div className="mt-auto">
        <p className="font-poppins font-semibold text-[10px] text-black">
          {deal.name}
        </p>
        <div className="mt-1">
          <StarRating rating={deal.rating} />
        </div>
        <p className="font-poppins font-semibold text-[15px] text-black mt-1">
          ${deal.price}
        </p>
      </div>
    </div>
  );
}

export default function ComboDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full bg-[rgba(221,221,221,0.27)] pt-6 pb-8">
      {/* Header Tab */}
      <div className="bg-[#f6f6f6] rounded-[20px] py-2 px-4 mx-0 -mt-6 mb-6">
        <h2 className="font-poppins font-bold text-[18px]">
          <span className="text-[#232323]">COMBO</span>{" "}
          <span className="text-[#c65e0f]">DEAL</span>
        </h2>
      </div>

      {/* Cards Slider */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
        {burgerDeals.map((deal) =>
          deal.featured ? (
            <FeaturedCard key={deal.id} deal={deal} />
          ) : (
            <RegularCard key={deal.id} deal={deal} />
          )
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2, 3, 4].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full transition-colors ${
              dot === currentIndex ? "bg-[#d66c0f]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
