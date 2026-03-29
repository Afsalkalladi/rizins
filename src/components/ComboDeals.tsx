"use client";

import { useEffect, useRef } from "react";

export default function ComboDeals() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applySlowSpeed = () => {
      // Keep the loop noticeably slower for a longer visual cycle.
      video.defaultPlaybackRate = 0.85;
      video.playbackRate = 0.85;
    };

    applySlowSpeed();
    video.addEventListener("loadedmetadata", applySlowSpeed);

    return () => {
      video.removeEventListener("loadedmetadata", applySlowSpeed);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden z-10 -mt-[6px] bg-[#0a0602]">
      {/* Background video with rounded top corners */}
      <div className="relative w-full h-[284px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px] rounded-t-[30px] sm:rounded-t-[36px] md:rounded-t-[48px] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/combo-deal-bg.png"
        >
          <source src="/videos/Remove_White_Cup_Duplicate_Other%20(1).mp4" type="video/mp4" />
        </video>

        {/* Top gradient – blends the dark gap into the image */}
        <div
          className="absolute top-0 left-0 right-0 h-[25%] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(10,6,2,0.65) 0%, rgba(10,6,2,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Bottom dark overlay for depth */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Center text overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <p
            className="font-jomhuria text-white leading-none"
            style={{
              fontSize: "clamp(34px, 7.5vw, 72px)",
              textShadow: "0 3px 14px rgba(0,0,0,0.65)",
            }}
          >
            rizins
          </p>

          <h2
            className="font-lilita uppercase text-white leading-[0.95] tracking-wide"
            style={{
              fontSize: "clamp(34px, 8.5vw, 86px)",
              textShadow: "0 4px 16px rgba(0,0,0,0.7)",
            }}
          >
            CRUNCH.
            <br />
            SPICE. REPEAT.
          </h2>

          <p
            className="font-poppins text-white/95 mt-2 sm:mt-3 leading-tight"
            style={{
              fontSize: "clamp(12px, 2.5vw, 30px)",
              textShadow: "0 2px 10px rgba(0,0,0,0.75)",
            }}
          >
            The Ultimate Fried Chicken
            <br />
            Burger Experience.
          </p>
        </div>
      </div>
    </section>
  );
}