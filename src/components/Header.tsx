"use client";

import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-brand-red h-[80px] relative flex items-center z-30">
        {/* Logo */}
        <div className="w-[44px] h-[44px] ml-4 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>

        {/* Divider 1 */}
        <div className="h-full w-[1px] bg-black/[0.48] ml-3" />

        {/* Order Delivery Section */}
        <div className="flex items-center px-3 h-full">
          {/* Location pin icon */}
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 flex-shrink-0">
            <path 
              d="M14 1C7.37 1 2 6.37 2 13c0 8.5 12 17 12 17s12-8.5 12-17c0-6.63-5.37-12-12-12z" 
              stroke="white" 
              strokeWidth="3" 
              fill="none"
            />
            <circle cx="14" cy="12" r="4" fill="#273B4A" />
            <circle cx="14" cy="12" r="2" fill="white" />
          </svg>
          <span className="font-jomhuria text-white text-[24px] leading-[14px]">
            ORDER<br />DELIVERY
          </span>
        </div>

        {/* Divider 2 */}
        <div className="h-full w-[1px] bg-black/[0.48]" />

        {/* Pick Up Section */}
        <div className="flex items-center px-3 h-full">
          {/* Shopping bag icon */}
          <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 flex-shrink-0">
            <rect x="2" y="10" width="23" height="18" rx="2" stroke="white" strokeWidth="3" fill="none" />
            <path d="M8 10V7a5.5 5.5 0 1 1 11 0v3" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
          <span className="font-jomhuria text-white text-[24px] leading-[14px]">
            PICK UP<br />ON APP
          </span>
        </div>

        {/* Divider 3 */}
        <div className="h-full w-[1px] bg-black/[0.48]" />

        {/* Menu Icon (Hamburger Button) */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col justify-center items-center ml-auto mr-4 gap-[7px] p-2 hover:opacity-80 transition-opacity"
          aria-label="Open menu"
        >
          <div className="w-[30px] h-[4px] bg-white rounded-sm" />
          <div className="w-[30px] h-[4px] bg-white rounded-sm" />
          <div className="w-[30px] h-[4px] bg-white rounded-sm" />
        </button>
      </header>

      {/* Mobile Menu Sidebar */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
