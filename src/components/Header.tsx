"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full bg-brand-red h-[70px] sm:h-[80px] sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""
        }`}
      >
        {/* Mobile & Tablet: 4-column grid (matches Figma) */}
        <div className="lg:hidden grid h-full grid-cols-4 divide-x divide-black/30">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="Rizins Logo"
              width={44}
              height={44}
              className="object-contain w-[36px] h-[36px] sm:w-[44px] sm:h-[44px]"
              priority
            />
          </Link>

          {/* Order Delivery */}
          <a
            href="#order"
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-2 text-white hover:opacity-85 transition-opacity"
            aria-label="Order delivery"
          >
            <svg
              width="24"
              height="28"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-7"
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
            <span className="font-jomhuria text-[18px] sm:text-[24px] leading-[12px] sm:leading-[14px] text-left">
              ORDER<br />DELIVERY
            </span>
          </a>

          {/* Pick Up On App */}
          <a
            href="#app"
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-2 text-white hover:opacity-85 transition-opacity"
            aria-label="Pick up on app"
          >
            <svg
              width="24"
              height="27"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-7"
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
            <span className="font-jomhuria text-[18px] sm:text-[24px] leading-[12px] sm:leading-[14px] text-left">
              PICK UP<br />ON APP
            </span>
          </a>

          {/* Hamburger Menu */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center hover:opacity-85 transition-opacity"
            aria-label="Open menu"
          >
            <span className="flex flex-col justify-center items-center gap-[5px] sm:gap-[7px] p-2">
              <span className="w-[24px] sm:w-[30px] h-[3px] sm:h-[4px] bg-white rounded-sm" />
              <span className="w-[24px] sm:w-[30px] h-[3px] sm:h-[4px] bg-white rounded-sm" />
              <span className="w-[24px] sm:w-[30px] h-[3px] sm:h-[4px] bg-white rounded-sm" />
            </span>
          </button>
        </div>

        {/* Desktop: Full navigation bar */}
        <div className="hidden lg:flex h-full items-center justify-between px-8 xl:px-16 max-w-[1440px] mx-auto">
          {/* Left: Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Go to homepage">
            <Image
              src="/images/logo.png"
              alt="Rizins Logo"
              width={48}
              height={48}
              className="object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <span className="font-jomhuria text-white text-[36px] leading-none pt-2 tracking-wider">RIZINS</span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="flex items-center gap-8 xl:gap-12">
            {[
              { label: "MENU", href: "/menu" },
              { label: "LOCATIONS", href: "/location" },
              { label: "OUR STORY", href: "/our-story" },
              { label: "CAREERS", href: "/careers" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-lilita text-white text-[16px] xl:text-[18px] tracking-wider hover:text-white/80 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#order"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-brand-red rounded-full font-lilita text-[15px] hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg width="16" height="18" viewBox="0 0 28 32" fill="none" className="flex-shrink-0">
                <path d="M14 1C7.37 1 2 6.37 2 13c0 8.5 12 17 12 17s12-8.5 12-17c0-6.63-5.37-12-12-12z" stroke="#D0021B" strokeWidth="3" fill="none"/>
                <circle cx="14" cy="12" r="4" fill="#D0021B"/>
              </svg>
              ORDER DELIVERY
            </a>
            <a
              href="#app"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-white text-white rounded-full font-lilita text-[15px] hover:bg-white hover:text-brand-red transition-all"
            >
              <svg width="16" height="18" viewBox="0 0 27 30" fill="none" className="flex-shrink-0">
                <rect x="2" y="10" width="23" height="18" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M8 10V7a5.5 5.5 0 1 1 11 0v3" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
              PICK UP
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
