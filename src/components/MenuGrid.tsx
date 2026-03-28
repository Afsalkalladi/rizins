"use client";

import Image from "next/image";

/* ==============================
   MENU ITEM COMPONENT
================================ */
interface MenuItemProps {
  name: string;
  imageSrc: string;
}

function MenuItem({ name, imageSrc }: MenuItemProps) {
  return (
    <div className="flex items-center gap-6 py-4 group cursor-pointer">
      {/* Thumbnail Image */}
      <div className="relative w-[60px] h-[60px] shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain drop-shadow-lg"
          sizes="60px"
        />
      </div>

      {/* Item Name */}
      <h3 className="font-black text-xl md:text-2xl text-[#E5E5E5] group-hover:text-white uppercase tracking-wide">
        {name}
      </h3>
    </div>
  );
}

/* ==============================
   MENU GRID SECTION
================================ */
interface MenuGridProps {
  activeCategory: string;
}

// Menu data organized by category (Pricing removed)
interface MenuItemData {
  name: string;
  imageSrc: string;
}

const menuData: Record<string, MenuItemData[]> = {
  BEEF: [
    {
      name: "BEEF BURGER",
      imageSrc: "/images/classic-burger.png",
    },
    {
      name: "SMASHED BEEF BURGER",
      imageSrc: "/images/classic-burger.png",
    },
    {
      name: "CHEESE BEEF BURGER",
      imageSrc: "/images/classic-burger.png",
    },
  ],
  CHICKEN: [
    {
      name: "FRIED CHICKEN",
      imageSrc: "/images/fried-chicken-burger.png",
    },
    {
      name: "GRILLED CHICKEN",
      imageSrc: "/images/fried-chicken-burger.png",
    },
  ],
  CLASSIC: [
    {
      name: "RIZIN'S CLASSIC",
      imageSrc: "/images/classic-burger.png",
    },
  ],
  SPICY: [
    {
      name: "SPICY RIZIN'S",
      imageSrc: "/images/classic-burger.png",
    },
  ],
  COMBO: [
    {
      name: "BURGER & FRIES COMBO",
      imageSrc: "/images/classic-burger.png",
    },
  ],
  SHAKE: [
    {
      name: "THICK SHAKES",
      imageSrc: "/images/fried-chicken-burger.png",
    },
  ],
};

export default function MenuGrid({ activeCategory }: MenuGridProps) {
  const currentItems = menuData[activeCategory as keyof typeof menuData] || [];

  return (
    <section className="w-full bg-[#111] px-4 pt-6 pb-20">
      {/* Dark Rounded Container matching the image */}
      <div className="mx-auto w-full max-w-[800px] bg-[#1A1A1A] rounded-3xl p-6 md:p-8 shadow-2xl border border-white/5">
        
        {currentItems.length > 0 ? (
          <div className="flex flex-col gap-2">
            {currentItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No items found for this category.</p>
        )}

      </div>
    </section>
  );
}