"use client";

import Image from "next/image";

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
interface MenuItemData {
  name: string;
  description: string;
  imageSrc: string;
  prices: { label: string; value: string }[];
}

/* ─────────────────────────────────────────
   ALL MENU ITEMS — real menu board data
───────────────────────────────────────── */
const menuData: Record<string, MenuItemData[]> = {
  BEEF: [
    {
      name: "RIZIN'S CLASSIC",
      description: "Beef patty, cheese, lettuce, tomato, Rizin's sauce.",
      imageSrc: "/images/beef/classic.png",
      prices: [{ label: "Double", value: "$11.35" }, { label: "Triple", value: "$15.15" }],
    },
    {
      name: "SPICY RIZIN'S",
      description: "Beef patty, cheese, lettuce, tomato, onion, jalapeños and Rizin's spicy sauce.",
      imageSrc: "/images/beef/spicy.png",
      prices: [{ label: "Double", value: "$12.65" }, { label: "Triple", value: "$16.45" }],
    },
    {
      name: "SWEET RIZIN'S",
      description: "Beef patty, cheese, lettuce, tomato, grilled pineapple, bacon and honey mustard sauce.",
      imageSrc: "/images/beef/sweet.png",
      prices: [{ label: "Double", value: "$13.40" }, { label: "Triple", value: "$16.45" }],
    },
    {
      name: "CHEESE BURGER",
      description: "Beef patty, cheese, pickles, ketchup and mustard.",
      imageSrc: "/images/beef/cheese.png",
      prices: [{ label: "Double", value: "$9.65" }, { label: "Triple", value: "$12.65" }],
    },
  ],
  CHICKEN: [
    {
      name: "FRIED CHICKEN SANDWICH",
      description: "Fried chicken patty, pickles and choice of classic or spicy sauce.",
      imageSrc: "/images/chicken/fried.png",
      prices: [{ label: "Single", value: "$11.35" }],
    },
    {
      name: "GRILLED CHICKEN BURGER",
      description: "Herb marinated chicken patty, cheese, lettuce, tomato, Rizin's sauce.",
      imageSrc: "/images/chicken/grilled.png",
      prices: [{ label: "Double", value: "$10.90" }, { label: "Triple", value: "$13.95" }],
    },
  ],
  VEG: [
    {
      name: "CRISPY SHROOM BURGER",
      description: "Panko crumbed mushroom patty, cheese, lettuce, tomato, onion, Rizin's sauce.",
      imageSrc: "/images/veg/shroom.png",
      prices: [{ label: "Single", value: "$13.40" }],
    },
  ],
  KIDS: [
    {
      name: "KIDS COMBO MEAL",
      description: "6 pc nuggets + fries + choice of drink.",
      imageSrc: "/images/kids/kids.png",
      prices: [{ label: "Meal", value: "$12.65" }],
    },
  ],
  SHAKE: [
    {
      name: "CHOCOLATE SHAKE",
      description: "Rich and creamy chocolate shake.",
      imageSrc: "/images/shakes/Chocolate.png",
      prices: [],
    },
    {
      name: "VANILLA SHAKE",
      description: "Classic smooth vanilla shake.",
      imageSrc: "/images/shakes/Vanilla.png",
      prices: [],
    },
    {
      name: "STRAWBERRY SHAKE",
      description: "Sweet and fruity strawberry shake.",
      imageSrc: "/images/shakes/Strawberry.png",
      prices: [],
    },
    {
      name: "CARAMEL SHAKE",
      description: "Buttery and sweet caramel shake.",
      imageSrc: "/images/shakes/Caramel.png",
      prices: [],
    },
    {
      name: "MANGO SHAKE",
      description: "Tropical and refreshing mango shake.",
      imageSrc: "/images/shakes/Mango.png",
      prices: [],
    },
  ],
  SIDES: [
    {
      name: "FRIES",
      description: "Golden crispy fries.",
      imageSrc: "/images/sides/Fries1.png",
      prices: [{ label: "Regular", value: "$5.15" }],
    },
    {
      name: "SPICY FRIES",
      description: "Golden fries tossed in our signature spicy seasoning.",
      imageSrc: "/images/sides/Spicyfries.png",
      prices: [{ label: "Regular", value: "$5.50" }],
    },
    {
      name: "CHEESE FRIES",
      description: "Fries smothered in melted cheese sauce.",
      imageSrc: "/images/sides/Cheesyfries.png",
      prices: [{ label: "Regular", value: "$7.00" }],
    },
    {
      name: "NUGGETS",
      description: "Crispy golden chicken nuggets.",
      imageSrc: "/images/sides/Nuggets.png",
      prices: [{ label: "6 pc", value: "$7.65" }],
    },
  ],
};

/* ─────────────────────────────────────────
   MENU ITEM CARD (same style as before)
───────────────────────────────────────── */
interface MenuItemProps {
  name: string;
  description: string;
  imageSrc: string;
  prices: { label: string; value: string }[];
  showComboNote?: boolean;
}

function MenuItem({ name, description, imageSrc, prices, showComboNote }: MenuItemProps) {
  return (
    <div className="flex items-center gap-6 py-4 group cursor-pointer border-b border-white/5 last:border-0">
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

      {/* Item Name + Description */}
      <div className="flex-1 min-w-0">
        <h3 className="font-black text-xl md:text-2xl text-[#E5E5E5] group-hover:text-white uppercase tracking-wide leading-tight">
          {name}
        </h3>
        <p className="mt-1 font-poppins text-[11px] sm:text-xs md:text-sm text-[#B9B9B9] leading-snug uppercase tracking-[0.3px]">
          {description}
        </p>
        {showComboNote && (
          <p className="mt-1.5 font-poppins text-[10px] text-brand-red/80 tracking-wide">
            + Add normal fries &amp; tin of Coke for extra charge
          </p>
        )}
      </div>

      {/* Available Sizes */}
      <div className="flex flex-col items-end gap-1 shrink-0">
        {prices.map((p) => (
          <span
            key={p.label}
            className="text-[10px] font-poppins font-semibold uppercase tracking-widest text-gray-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full whitespace-nowrap"
          >
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MENU GRID (original container style)
───────────────────────────────────────── */
interface MenuGridProps {
  activeCategory: string;
}

export default function MenuGrid({ activeCategory }: MenuGridProps) {
  const currentItems = menuData[activeCategory] || [];
  const showComboNote = ["BEEF", "CHICKEN", "VEG"].includes(activeCategory);

  return (
    <section className="w-full bg-[#111] px-4 pt-6 pb-20">
      {/* Dark Rounded Container — same as original */}
      <div className="mx-auto w-full max-w-[800px] bg-[#1A1A1A] rounded-3xl p-6 md:p-8 shadow-2xl border border-white/5">
        {currentItems.length > 0 ? (
          <div className="flex flex-col gap-2">
            {currentItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                imageSrc={item.imageSrc}
                prices={item.prices}
                showComboNote={showComboNote}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8 font-poppins">No items found for this category.</p>
        )}
      </div>
    </section>
  );
}