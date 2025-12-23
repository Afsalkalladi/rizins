"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-brand-red h-[80px] relative z-30">
        <div className="grid h-full grid-cols-4 divide-x divide-black/50">
          {/* Logo (Home) */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Order (Order Now) */}
          <a
            href="#order"
            className="flex items-center justify-center gap-2 px-2 text-white hover:opacity-85 transition-opacity"
            aria-label="Order now"
          >
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <path
                d="M14 1C7.37 1 2 6.37 2 13c0 8.5 12 17 12 17s12-8.5 12-17c0-6.63-5.37-12-12-12z"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="14" cy="12" r="4" fill="#273B4A" />
              <circle cx="14" cy="12" r="2" fill="white" />
            </svg>
            <span className="font-jomhuria text-[24px] leading-[14px] text-left">
              ORDER<br />DELIVERY
            </span>
          </a>

          {/* Get App */}
          <a
            href="#app"
            className="flex items-center justify-center gap-2 px-2 text-white hover:opacity-85 transition-opacity"
            aria-label="Get the app"
          >
            <svg
              width="27"
              height="30"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="10"
                width="23"
                height="18"
                rx="2"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M8 10V7a5.5 5.5 0 1 1 11 0v3"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-jomhuria text-[24px] leading-[14px] text-left">
              PICK UP<br />ON APP
            </span>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center hover:opacity-85 transition-opacity"
            aria-label="Open menu"
          >
            <span className="flex flex-col justify-center items-center gap-[7px] p-2">
              <span className="w-[30px] h-[4px] bg-white rounded-sm" />
              <span className="w-[30px] h-[4px] bg-white rounded-sm" />
              <span className="w-[30px] h-[4px] bg-white rounded-sm" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
