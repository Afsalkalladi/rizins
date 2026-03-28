"use client";

import Image from "next/image";

/* ==============================
   MENU ITEM COMPONENT
================================ */
interface MenuItemProps {
  name: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  fontSize: number;
  isMultiLine?: boolean;
  price?: string;
}

function MenuItem({
  name,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
  fontSize,
  isMultiLine,
  price,
}: MenuItemProps) {
  return (
    <div className="group w-full max-w-[280px] min-h-[360px] flex flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">

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
        <p className="text-gray-600 text-xs mt-2 leading-tight px-2">{description}</p>
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
interface MenuGridProps {
  activeCategory: string;
  showHeader?: boolean;
}

// Menu data organized by category
interface MenuItemData {
  name: string;
  description: string;
  imageSrc: string;
  price: string;
  fontSize?: number;
}

const menuData: Record<string, MenuItemData[]> = {
  BEEF: [
    {
      name: "RIZIN'S<br/>CLASSIC",
      description: "Beef patty, cheese, lettuce, tomato, Rizin's sauce",
      imageSrc: "/images/classic-burger.png",
      price: "$12.99",
    },
    {
      name: "SPICY<br/>RIZIN'S",
      description: "Beef patty, cheese, lettuce, tomato, onion, jalapenos, spicy sauce",
      imageSrc: "/images/classic-burger.png",
      price: "$13.99",
    },
    {
      name: "SWEET<br/>RIZIN'S",
      description: "Beef patty, cheese, lettuce, tomato, grilled pineapple, bacon, honey mustard",
      imageSrc: "/images/classic-burger.png",
      price: "$14.99",
    },
    {
      name: "CHEESE<br/>BURGER",
      description: "Beef patty, cheese, pickles, ketchup, mustard",
      imageSrc: "/images/classic-burger.png",
      price: "$11.99",
    },
  ],
  CHICKEN: [
    {
      name: "FRIED<br/>CHICKEN",
      description: "Fried chicken patty, pickles, choice of classic or spicy sauce",
      imageSrc: "/images/fried-chicken-burger.png",
      price: "$11.99",
    },
    {
      name: "GRILLED<br/>CHICKEN",
      description: "Herb marinated chicken patty, cheese, lettuce, tomato, Rizin's sauce",
      imageSrc: "/images/fried-chicken-burger.png",
      price: "$12.49",
    },
  ],
  VEGGIE: [
    {
      name: "CRISPY<br/>SHROOM",
      description: "Panko crumbed mushroom patty, cheese, lettuce, tomato, onion, Rizin's sauce",
      imageSrc: "/images/fried-chicken-burger.png",
      price: "$10.99",
    },
  ],
  SIDES: [
    {
      name: "FRIES /<br/>SPICY FRIES",
      description: "Regular or spicy seasoned",
      imageSrc: "/images/classic-burger.png",
      price: "$4.99",
      fontSize: 24,
    },
    {
      name: "CHEESE FRIES /<br/>NUGGETS",
      description: "6pc Nuggets available",
      imageSrc: "/images/classic-burger.png",
      price: "$6.99",
      fontSize: 22,
    },
  ],
  SHAKES: [
    {
      name: "THICK<br/>SHAKES",
      description: "Vanilla, Chocolate, Caramel, Mango, Strawberry",
      imageSrc: "/images/fried-chicken-burger.png",
      price: "$5.99",
    },
  ],
};

export default function MenuGrid({ activeCategory, showHeader = true }: MenuGridProps) {
  const currentItems = menuData[activeCategory as keyof typeof menuData] || [];

  return (
    <section className="w-full bg-[#f8f8f8] py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mx-auto w-full max-w-[1440px] px-6 relative z-10">

        {/* Section Header */}
        {showHeader && (
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">Our Menu</span>
            <h2 className="font-jomhuria text-[64px] leading-[0.8] text-black mb-6">
              {activeCategory}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every burger tells a story of flavor. From our locally sourced beef to our
              house-made sauces, discover the difference that obsession with quality makes.
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {currentItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              description={item.description}
              imageSrc={item.imageSrc}
              imageWidth={220}
              imageHeight={160}
              fontSize={item.fontSize || 28}
              price={item.price}
              isMultiLine
            />
          ))}
        </div>
      </div>
    </section>
  );
}
