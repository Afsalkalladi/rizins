"use client";

import Image from "next/image";

interface MenuItemProps {
  name: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  fontSize: number;
  isMultiLine?: boolean;
}

function MenuItem({ name, imageSrc, imageWidth, imageHeight, fontSize, isMultiLine }: MenuItemProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Shadow blur effect under burger */}
      <div 
        className="absolute bottom-[45px] w-[70%] h-[8px] bg-[#7B7B7B] rounded-[50%]"
        style={{ filter: "blur(1.45px)" }}
      />
      
      {/* Burger Image */}
      <div 
        className="relative"
        style={{ width: imageWidth, height: imageHeight }}
      >
        <Image
          src={imageSrc}
          alt={name.replace(/<br\s*\/?>/gi, ' ')}
          fill
          className="object-contain"
        />
      </div>
      
      {/* Product Name */}
      <h3 
        className="font-lilita text-text-dark text-center mt-1"
        style={{ 
          fontSize: `${fontSize}px`, 
          lineHeight: isMultiLine ? "25px" : "31px" 
        }}
        dangerouslySetInnerHTML={{ __html: name }}
      />
    </div>
  );
}

export default function MenuGrid() {
  return (
    <section className="w-full bg-white pt-6 pb-10">
      <div className="flex justify-between items-end px-2">
        {/* Classic Burger */}
        <MenuItem
          name="CLASSIC"
          imageSrc="/images/classic-burger.png"
          imageWidth={180}
          imageHeight={130}
          fontSize={27}
        />
        
        {/* Fried Chicken Burger */}
        <MenuItem
          name="FRIED<br/>CHICKEN"
          imageSrc="/images/fried-chicken-burger.png"
          imageWidth={200}
          imageHeight={140}
          fontSize={24}
          isMultiLine
        />
      </div>
    </section>
  );
}
