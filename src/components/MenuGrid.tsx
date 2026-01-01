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
}

function MenuItem({
  name,
  imageSrc,
  imageWidth,
  imageHeight,
  fontSize,
  isMultiLine,
}: MenuItemProps) {
  return (
    <div className="flex flex-col items-center justify-end rounded-lg bg-white p-4 shadow-lg">
      {/* IMAGE + SHADOW CONTAINER */}
      <div
        className="relative flex items-end justify-center"
        style={{
          width: imageWidth,
          height: imageHeight + 28, // shared visual ground
        }}
      >
        {/* SHADOW */}
        <div
          className="absolute bottom-1 w-[75%] h-[14px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(2px)",
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
            sizes="(max-width: 768px) 50vw, 240px"
            priority
          />
        </div>
      </div>

      {/* TITLE */}
      <h3
        className="mt-3 text-center font-lilita text-text-dark"
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: isMultiLine ? "26px" : "32px",
        }}
        dangerouslySetInnerHTML={{ __html: name }}
      />
    </div>
  );
}

/* ==============================
   MENU GRID SECTION
================================ */
export default function MenuGrid() {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          <MenuItem
            name="CLASSIC"
            imageSrc="/images/classic-burger.png"
            imageWidth={190}
            imageHeight={140}
            fontSize={26}
          />

          <MenuItem
            name="FRIED<br/>CHICKEN"
            imageSrc="/images/fried-chicken-burger.png"
            imageWidth={190}
            imageHeight={140}
            fontSize={26}
            isMultiLine
          />

          <MenuItem
            name="DOUBLE<br/>CHEESE"
            imageSrc="/images/classic-burger.png"
            imageWidth={190}
            imageHeight={140}
            fontSize={26}
            isMultiLine
          />

          <MenuItem
            name="SPICY<br/>VEGGIE"
            imageSrc="/images/fried-chicken-burger.png"
            imageWidth={190}
            imageHeight={140}
            fontSize={26}
            isMultiLine
          />
        </div>
      </div>
    </section>
  );
}
