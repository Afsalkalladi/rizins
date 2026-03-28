"use client";

export default function TasteDifference() {
  return (
    <section className="w-full flex flex-row bg-white">
      
      {/* Left: Image Box with Blue Border */}
      {/* Reduced width to 40% to give the text side more room */}
      <div className="relative w-[45%] lg:w-[40%] border-[3px] border-[#0099ff] bg-[#111] flex items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
        {/* <Image
          src="/images/taste-difference.png"
          alt="Smash Burger on Grill"
          fill
          className="object-cover object-center"
        /> */}
        <div className="text-white/30 font-poppins text-center p-2">
          <div className="text-3xl mb-1">🍔</div>
          <div className="text-sm">taste-difference.png</div>
        </div>
      </div>

      {/* Right: Text Content */}
      {/* Increased width to 55% / 60% */}
      <div className="w-[55%] lg:w-[60%] bg-white flex flex-col justify-center items-start pl-[5%] sm:pl-[6%] md:pl-[8%] pr-[4%] py-6 overflow-hidden">
        
        {/* Main Headings */}
        <h2 
          className="font-lilita text-black uppercase flex flex-col items-start whitespace-nowrap"
          style={{ lineHeight: "0.9" }}
        >
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">TASTE THE</span>
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">DIFFERENCE.</span>
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">BITE INTO REAL</span>
          <span className="text-[clamp(18px,3.8vw,70px)] tracking-tight">
            <span className="text-[#d56116]">SMASH</span>
            <span className="text-black">.</span>
          </span>
        </h2>

        {/* Description paragraph */}
        {/* Removed max-w constraints so the text uses the full new width */}
        <p className="font-poppins text-black text-left mt-5 lg:mt-6 font-normal text-[clamp(10px,1.2vw,16px)] leading-relaxed w-full">
          Satisfy your cravings with Rizins Smash Burgers — where every bite is big, juicy, crispy, and packed with flavour. Our smashed patties are pressed fresh on the grill, creating that signature crust on the outside while staying tender and juicy inside.
        </p>

        {/* Closing text */}
        <p className="font-poppins text-black text-left mt-4 lg:mt-5 font-normal text-[clamp(10px,1.2vw,16px)] leading-relaxed w-full">
          This isn&apos;t just a burger.<br />
          It&apos;s the real smash experience.
        </p>
        
      </div>

    </section>
  );
}