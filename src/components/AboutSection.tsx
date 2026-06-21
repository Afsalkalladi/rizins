"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      {/* Award showcase — frame matches the image's native ratio so it fills
          the container edge-to-edge with no stretching or cropping */}
      <div className="w-full bg-white flex justify-center px-4 pt-8 sm:pt-10 md:pt-12">
        <div className="relative w-full max-w-[420px] md:max-w-[480px] aspect-[536/428] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
          <Image
            src="/images/award-banner.png"
            alt="Australia's Best Burger Awards 2025 Finalist"
            fill
            sizes="(max-width: 640px) 92vw, 480px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Story Content */}
      <div className="w-full bg-white px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-4xl">
          {/* Headline */}
          <h2 className="font-lilita leading-[0.95]">
            <span
              className="block text-black"
              style={{ fontSize: "clamp(36px, 8vw, 72px)" }}
            >
              AUSTRALIA&apos;S BEST
            </span>
            <span
              className="block text-[#d56116]"
              style={{ fontSize: "clamp(48px, 10vw, 96px)" }}
            >
              BURGER
            </span>
          </h2>

          {/* Subheading */}
          <h3
            className="font-lilita text-black mt-6 sm:mt-8"
            style={{ fontSize: "clamp(16px, 3vw, 28px)" }}
          >
            THE RIZINS SMASH BURGERS STORY
          </h3>

          {/* Story Paragraphs */}
          <div className="font-poppins text-black/80 mt-6 sm:mt-8 space-y-4 sm:space-y-5 leading-relaxed" style={{ fontSize: "clamp(12px, 2vw, 16px)" }}>
            <p>
              In the heart of Melbourne, where food culture thrives and taste buds are discerning, Rizins Smash Burgers was born from a simple idea: burgers should be bold, fresh, and unforgettable.
            </p>
            <p>
              What started as a passion project between friends with a love for American smash-style burgers has grown into one of Australia&apos;s most talked-about burger joints. Our mission? To serve burgers that make you stop mid-bite and think, &quot;This is it.&quot;
            </p>
            <p>
              Every patty at Rizins is made from 100% Australian beef, smashed to perfection on a sizzling hot grill. The result? A crispy, caramelized crust on the outside, juicy and tender on the inside. We don&apos;t believe in shortcuts — our buns are baked fresh, our sauces are house-made, and our ingredients are sourced locally.
            </p>
            <p>
              From our classic Smash Burger to our signature Fried Chicken creations, every item on our menu is crafted with care and a whole lot of flavor. Whether you&apos;re a first-timer or a loyal regular, we promise one thing: you&apos;ll leave craving more.
            </p>
          </div>

          {/* Closing Line */}
          <p
            className="font-lilita text-black mt-8 sm:mt-10"
            style={{ fontSize: "clamp(14px, 2.5vw, 22px)" }}
          >
            Not all burgers are the same. Ours are smashed to perfection.
          </p>
        </div>
      </div>


    </section>
  );
}
