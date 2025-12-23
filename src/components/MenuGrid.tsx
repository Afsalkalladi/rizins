"use client";

import Image from "next/image";

interface ProductCardProps {
  name: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  fontSize: number;
  multiLine?: boolean;
}

function ProductCard({ name, imageSrc, imageWidth, imageHeight, fontSize, multiLine }: ProductCardProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Shadow blur effect */}
      <div 
        className="absolute bottom-[50px] w-[80%] h-[10px] bg-shadow-gray shadow-blur rounded-full"
        style={{ filter: "blur(1.45px)" }}
      />
      
      {/* Burger Image */}
      <div 
        className="relative"
        style={{ width: imageWidth, height: imageHeight }}
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      
      {/* Product Name */}
      <h3 
        className="font-lilita text-text-dark text-center mt-2"
        style={{ 
          fontSize: `${fontSize}px`, 
          lineHeight: multiLine ? "25px" : "31px" 
        }}
        dangerouslySetInnerHTML={{ __html: name }}
      />
    </div>
  );
}

export default function MenuGrid() {
  return (
    <section className="w-full bg-white py-8">
      <div className="flex justify-center gap-4 px-4">
        {/* Classic Burger */}
        <ProductCard
          name="CLASSIC"
          imageSrc="/images/classic-burger.svg"
          imageWidth={225}
          imageHeight={123}
          fontSize={27}
        />
        
        {/* Fried Chicken Burger */}
        <ProductCard
          name="FRIED<br/>CHICKEN"
          imageSrc="/images/fried-chicken-burger.svg"
          imageWidth={271}
          imageHeight={148}
          fontSize={24}
          multiLine
        />
      </div>
    </section>
  );
}
