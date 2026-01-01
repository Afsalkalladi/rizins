"use client";

import Image from "next/image";

/* ==============================
   MENU ITEM COMPONENT
================================ */
interface MenuItemProps {
  name: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  fontSize: number;
  isMultiLine?: boolean;
  price?: string;
}

function MenuItem({
  name,
  imageSrc,
  imageWidth,
  imageHeight,
  fontSize,
  isMultiLine,
  price,
}: MenuItemProps) {
  return (
    <div className="group w-full max-w-[280px] min-h-[320px] flex flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">

      {/* Hover Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      {/* IMAGE + SHADOW CONTAINER */}
      <div
        className="relative flex items-end justify-center mt-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105"
        style={{
          width: imageWidth,
          height: imageHeight + 20,
        }}
      >
        {/* SHADOW */}
        <div
          className="absolute bottom-1 w-[80%] h-[16px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(4px)",
          }}
        />

        {/* IMAGE */}
        <div
          className="relative z-10"
          style={{ width: imageWidth, height: imageHeight }}
        >
          <Image
            src={imageSrc}
            alt={name.replace(/<br\s*\/?>/gi, " ")}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 240px"
          />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="text-center mt-4 z-10 bg-white w-full">
        <h3
          className="font-lilita text-text-dark tracking-wide group-hover:text-brand-red transition-colors"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: isMultiLine ? "1" : "1.2",
          }}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        {price && (
          <p className="font-sans font-bold text-gray-400 mt-2 text-lg">{price}</p>
        )}

        {/* Add to Cart Button (Hidden until hover on desktop) */}
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full font-bold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          ADD TO ORDER
        </button>
      </div>
    </div>
  );
}

/* ==============================
   MENU GRID SECTION
================================ */
export default function MenuGrid() {
  return (
    <section className="w-full bg-[#f8f8f8] py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mx-auto w-full max-w-[1440px] px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">Our Menu</span>
          <h2 className="font-jomhuria text-[64px] leading-[0.8] text-black mb-6">
            CRAFTED WITH PASSION
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every burger tells a story of flavor. From our locally sourced beef to our
            house-made sauces, discover the difference that obsession with quality makes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <MenuItem
            name="CLASSIC<br/>BEEF"
            imageSrc="/images/classic-burger.png"
            imageWidth={220}
            imageHeight={160}
            fontSize={32}
            price="$12.99"
          />

          <MenuItem
            name="CRISPY<br/>CHICKEN"
            imageSrc="/images/fried-chicken-burger.png"
            imageWidth={220}
            imageHeight={160}
            fontSize={32}
            price="$11.99"
            isMultiLine
          />

          <MenuItem
            name="DOUBLE<br/>CHEESE"
            imageSrc="/images/classic-burger.png"
            imageWidth={220}
            imageHeight={160}
            fontSize={32}
            price="$15.99"
            isMultiLine
          />

          <MenuItem
            name="SPICY<br/>VEGGIE"
            imageSrc="/images/fried-chicken-burger.png"
            imageWidth={220}
            imageHeight={160}
            fontSize={32}
            price="$13.50"
            isMultiLine
          />
        </div>
      </div>
    </section>
  );
}
