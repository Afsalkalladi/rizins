"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-brand-red h-[80px] relative flex items-center">
      {/* Logo */}
      <div className="w-[44px] h-[44px] ml-4 relative flex items-center justify-center">
        <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center">
          <span className="font-jomhuria text-brand-red text-2xl font-bold">R</span>
        </div>
      </div>

      {/* Divider 1 */}
      <div className="h-full w-[1px] bg-black/[0.48] ml-4" />

      {/* Order Delivery Section */}
      <div className="flex items-center px-4 h-full">
        <div className="relative w-[28px] h-[32px] mr-2">
          {/* Location pin icon */}
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 18 14 18s14-7.5 14-18c0-7.732-6.268-14-14-14z" 
              stroke="white" 
              strokeWidth="3.5" 
              fill="none"
            />
            <circle cx="14" cy="12" r="4" fill="#273B4A" />
            <circle cx="14" cy="12" r="2" fill="white" />
          </svg>
        </div>
        <span className="font-jomhuria text-white text-[24px] leading-[14px]">
          ORDER<br />DELIVERY
        </span>
      </div>

      {/* Divider 2 */}
      <div className="h-full w-[1px] bg-black/[0.48]" />

      {/* Pick Up Section */}
      <div className="flex items-center px-4 h-full">
        <div className="relative w-[28px] h-[28px] mr-2">
          {/* Shopping bag icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="10" width="24" height="16" rx="2" stroke="white" strokeWidth="3.4" fill="none" />
            <path d="M8 10V7a6 6 0 1 1 12 0v3" stroke="white" strokeWidth="3.4" fill="none" />
          </svg>
        </div>
        <span className="font-jomhuria text-white text-[24px] leading-[14px]">
          PICK UP<br />ON APP
        </span>
      </div>

      {/* Divider 3 */}
      <div className="h-full w-[1px] bg-black/[0.48]" />

      {/* Menu Icon */}
      <div className="flex flex-col justify-center items-center ml-auto mr-4 gap-[8px]">
        <div className="w-[33px] h-[4px] bg-white rounded-sm" />
        <div className="w-[33px] h-[4px] bg-white rounded-sm" />
        <div className="w-[33px] h-[4px] bg-white rounded-sm" />
      </div>
    </header>
  );
}
