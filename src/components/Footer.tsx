"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Platform = "UberEats" | "DoorDash" | "Menulog" | null;
type ModalStep = "platform" | "store";

const locations = [
  { name: "Mitcham", id: "mitcham" },
  { name: "Dandenong", id: "dandenong" },
  { name: "Seaford", id: "seaford" },
];

const navLinks = [
  { label: "OUR MENU", href: "/menu" },
  { label: "ORDER DELIVERY", href: "/order-delivery" },
  { label: "LOCATIONS", href: "/locations" },
  { label: "ABOUT US", href: "/about" },
  { label: "CAREERS", href: "/careers" },
];

function getUrl(platform: Platform, locId: string) {
  if (platform === "UberEats") return `https://www.ubereats.com/au/store/rizins-${locId}`;
  if (platform === "DoorDash") return `https://www.doordash.com/store/rizins-${locId}`;
  if (platform === "Menulog") return `https://www.menulog.com.au/restaurants-rizins-${locId}`;
  return "#";
}

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<ModalStep>("platform");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);

  const openModal = (platform: Platform = null) => {
    if (platform) {
      setSelectedPlatform(platform);
      setStep("store");
    } else {
      setSelectedPlatform(null);
      setStep("platform");
    }
    setShowModal(true);
  };

  const handlePlatformSelect = (p: NonNullable<Platform>) => {
    setSelectedPlatform(p);
    setStep("store");
  };

  const handleLocationClick = (locId: string) => {
    const url = getUrl(selectedPlatform, locId);
    window.open(url, "_blank");
    setShowModal(false);
    setSelectedPlatform(null);
    setStep("platform");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlatform(null);
    setStep("platform");
  };

  return (
    <>
      <footer className="w-full bg-[#0a0a0a] border-t border-white/5 text-white">

        {/* ── Main body ── */}
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pt-12 pb-8 flex flex-col items-center gap-8">

          {/* Brand row */}
          <div className="flex flex-col items-center gap-3">
            <Link href="/" className="group flex items-center gap-3">
              <Image src="/images/logo.png" alt="Rizins" width={44} height={44}
                className="object-contain group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-jomhuria text-5xl leading-none pt-2 tracking-widest text-white">RIZINS</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed text-center font-poppins max-w-[280px]">
              Redefining the burger experience with premium ingredients and unmatched flavor.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-red transition-all flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-red transition-all flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.92 5.74-1.65 1.25-3.8 1.73-5.83 1.29-2.14-.46-3.95-1.84-4.86-3.83-.93-2.02-.91-4.43.04-6.43 1.05-2.2 3.19-3.79 5.56-4.14v4.06c-1.23.2-2.31.96-2.94 2.05-.62 1.04-.68 2.4-.19 3.48.47 1.04 1.4 1.83 2.5 2.11 1.25.32 2.62.06 3.63-.73 1.01-.78 1.56-2.03 1.57-3.32.03-4.9.01-9.8.02-14.71z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Delivery partner buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <button onClick={() => openModal("UberEats")}
              className="group hover:scale-105 transition-transform">
              <span className="text-base sm:text-lg font-sans tracking-tight text-white/80 group-hover:text-white">
                Uber <span className="font-bold text-[#06C167]">Eats</span>
              </span>
            </button>
            <button onClick={() => openModal("DoorDash")}
              className="group hover:scale-105 transition-transform">
              <span className="text-sm sm:text-base font-black font-sans tracking-tighter text-[#FF3008]/80 group-hover:text-[#FF3008] uppercase">
                DoorDash
              </span>
            </button>
            <button onClick={() => openModal("Menulog")}
              className="group hover:scale-105 transition-transform">
              <span className="text-lg sm:text-xl font-bold font-sans tracking-tighter text-[#FF8000]/80 group-hover:text-[#FF8000] lowercase">
                menulog
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-white/10" />

          {/* Nav links — horizontal, no heading */}
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 sm:gap-x-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[11px] sm:text-xs font-lilita tracking-widest text-white/60 hover:text-white transition-colors whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </nav>

        </div>

        {/* ── Copyright bar — always last ── */}
        <div className="w-full border-t border-white/5 text-center"
          style={{ padding: "1rem 1.5rem max(1rem, env(safe-area-inset-bottom, 1rem))" }}>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/40 font-poppins">
            © {new Date().getFullYear()} <span className="text-white/60">RIZINS BURGERS</span>. ALL RIGHTS RESERVED.
          </p>
        </div>

      </footer>

      {/* ── 2-step Delivery Modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#111] border border-white/10 p-7 rounded-3xl w-full max-w-sm relative flex flex-col items-center text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button onClick={closeModal} aria-label="Close"
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* STEP 1 — choose platform */}
            {step === "platform" && (
              <>
                <h3 className="font-lilita text-2xl tracking-wide text-white mb-1 uppercase">Order Via</h3>
                <p className="text-xs text-gray-400 mb-6 font-poppins">Choose your delivery platform</p>
                <div className="flex flex-col gap-3 w-full">
                  <button onClick={() => handlePlatformSelect("UberEats")}
                    className="w-full bg-white/5 border border-white/5 hover:border-[#06C167]/50 hover:bg-[#06C167]/10 py-4 rounded-2xl font-sans text-base font-semibold transition-all duration-200 active:scale-95">
                    <span className="text-white">Uber </span>
                    <span className="font-bold text-[#06C167]">Eats</span>
                  </button>
                  <button onClick={() => handlePlatformSelect("DoorDash")}
                    className="w-full bg-white/5 border border-white/5 hover:border-[#FF3008]/50 hover:bg-[#FF3008]/10 py-4 rounded-2xl font-black font-sans text-base uppercase tracking-tighter text-[#FF3008] transition-all duration-200 active:scale-95">
                    DoorDash
                  </button>
                  <button onClick={() => handlePlatformSelect("Menulog")}
                    className="w-full bg-white/5 border border-white/5 hover:border-[#FF8000]/50 hover:bg-[#FF8000]/10 py-4 rounded-2xl font-bold font-sans text-xl lowercase tracking-tighter text-[#FF8000] transition-all duration-200 active:scale-95">
                    menulog
                  </button>
                </div>
              </>
            )}

            {/* STEP 2 — choose store */}
            {step === "store" && (
              <>
                <h3 className="font-lilita text-2xl tracking-wide text-white mb-1 uppercase">Select Store</h3>
                <p className="text-xs text-gray-400 mb-1 font-poppins">
                  via{" "}
                  <button className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
                    style={{
                      color: selectedPlatform === "UberEats" ? "#06C167"
                        : selectedPlatform === "DoorDash" ? "#FF3008" : "#FF8000"
                    }}
                    onClick={() => setStep("platform")}>
                    {selectedPlatform}
                  </button>
                </p>
                <p className="text-[10px] text-gray-600 mb-5 font-poppins">Tap name to change platform</p>
                <div className="flex flex-col gap-3 w-full">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => handleLocationClick(loc.id)}
                      className="w-full bg-white/5 border border-white/5 hover:bg-brand-red hover:border-brand-red text-white py-4 rounded-2xl font-lilita tracking-widest text-xl transition-all duration-300 active:scale-95"
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}