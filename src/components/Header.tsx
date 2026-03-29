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
        className={`w-full bg-brand-red h-[70px] sm:h-[80px] fixed top-0 z-50 transition-shadow duration-300 ${
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
          <Link
            href="/order-delivery"
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-2 text-white hover:opacity-85 transition-opacity"
            aria-label="Order delivery"
          >
            <svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-7"
              aria-hidden="true"
            >
              <path d="M15.75 1.75V0V0V1.75ZM29.75 15.75H31.5V15.75H29.75ZM16.4473 33.4092L17.2462 34.9662L17.2462 34.9662L16.4473 33.4092ZM15.0527 33.4092L14.2538 34.9662L14.2538 34.9662L15.0527 33.4092ZM1.75 15.75H0V15.75H1.75ZM15.75 9.75L15.75 8H15.75V9.75ZM9.75 15.75H8V15.75L9.75 15.75ZM15.75 21.75V23.5H15.75L15.75 21.75ZM21.75 15.75L23.5 15.75V15.75H21.75ZM15.75 1.75V3.5C22.5155 3.5 28 8.98451 28 15.75H29.75H31.5C31.5 7.05152 24.4485 1.19209e-07 15.75 0V1.75ZM29.75 15.75H28C28 20.1823 25.7172 23.8147 22.9236 26.6015C20.1327 29.3858 16.9851 31.1663 15.6483 31.8522L16.4473 33.4092L17.2462 34.9662C18.7386 34.2003 22.2424 32.225 25.3955 29.0794C28.546 25.9365 31.5 21.4652 31.5 15.75H29.75ZM16.4473 33.4092L15.6483 31.8522C15.6701 31.841 15.7058 31.8299 15.75 31.8299C15.7942 31.8299 15.8299 31.841 15.8517 31.8522L15.0527 33.4092L14.2538 34.9662C15.1988 35.4511 16.3012 35.4511 17.2462 34.9662L16.4473 33.4092ZM15.0527 33.4092L15.8517 31.8522C14.5149 31.1663 11.3673 29.3858 8.57638 26.6015C5.78278 23.8147 3.5 20.1823 3.5 15.75H1.75H0C5.96046e-07 21.4652 2.954 25.9365 6.10448 29.0794C9.25763 32.225 12.7614 34.2003 14.2538 34.9662L15.0527 33.4092ZM1.75 15.75H3.5C3.5 8.98451 8.98451 3.5 15.75 3.5V1.75V0C7.05152 0 0 7.05152 0 15.75H1.75ZM15.75 9.75V8C11.4698 8 8 11.4698 8 15.75H9.75H11.5C11.5 13.4028 13.4028 11.5 15.75 11.5V9.75ZM9.75 15.75L8 15.75C8 20.0302 11.4698 23.5 15.75 23.5V21.75V20C13.4028 20 11.5 18.0972 11.5 15.75L9.75 15.75ZM15.75 21.75L15.75 23.5C20.0302 23.5 23.5 20.0302 23.5 15.75L21.75 15.75L20 15.75C20 18.0972 18.0972 20 15.75 20L15.75 21.75ZM21.75 15.75H23.5C23.5 11.4698 20.0302 8.00001 15.75 8L15.75 9.75L15.75 11.5C18.0972 11.5 20 13.4028 20 15.75H21.75Z" fill="white"/>
            </svg>
            <span className="font-jomhuria text-[18px] sm:text-[24px] leading-[12px] sm:leading-[14px] text-left">
              ORDER<br />DELIVERY
            </span>
          </Link>

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
              { label: "ORDER DELIVERY", href: "/order-delivery" },
              { label: "ABOUT US", href: "/about" },
              { label: "LOCATIONS", href: "/locations" },
              { label: "DOWNLOAD APP", href: "#app" },
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
            <Link
              href="/order-delivery"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-brand-red rounded-full font-lilita text-[15px] hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg width="16" height="18" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M15.75 1.75V0V0V1.75ZM29.75 15.75H31.5V15.75H29.75ZM16.4473 33.4092L17.2462 34.9662L17.2462 34.9662L16.4473 33.4092ZM15.0527 33.4092L14.2538 34.9662L14.2538 34.9662L15.0527 33.4092ZM1.75 15.75H0V15.75H1.75ZM15.75 9.75L15.75 8H15.75V9.75ZM9.75 15.75H8V15.75L9.75 15.75ZM15.75 21.75V23.5H15.75L15.75 21.75ZM21.75 15.75L23.5 15.75V15.75H21.75ZM15.75 1.75V3.5C22.5155 3.5 28 8.98451 28 15.75H29.75H31.5C31.5 7.05152 24.4485 1.19209e-07 15.75 0V1.75ZM29.75 15.75H28C28 20.1823 25.7172 23.8147 22.9236 26.6015C20.1327 29.3858 16.9851 31.1663 15.6483 31.8522L16.4473 33.4092L17.2462 34.9662C18.7386 34.2003 22.2424 32.225 25.3955 29.0794C28.546 25.9365 31.5 21.4652 31.5 15.75H29.75ZM16.4473 33.4092L15.6483 31.8522C15.6701 31.841 15.7058 31.8299 15.75 31.8299C15.7942 31.8299 15.8299 31.841 15.8517 31.8522L15.0527 33.4092L14.2538 34.9662C15.1988 35.4511 16.3012 35.4511 17.2462 34.9662L16.4473 33.4092ZM15.0527 33.4092L15.8517 31.8522C14.5149 31.1663 11.3673 29.3858 8.57638 26.6015C5.78278 23.8147 3.5 20.1823 3.5 15.75H1.75H0C5.96046e-07 21.4652 2.954 25.9365 6.10448 29.0794C9.25763 32.225 12.7614 34.2003 14.2538 34.9662L15.0527 33.4092ZM1.75 15.75H3.5C3.5 8.98451 8.98451 3.5 15.75 3.5V1.75V0C7.05152 0 0 7.05152 0 15.75H1.75ZM15.75 9.75V8C11.4698 8 8 11.4698 8 15.75H9.75H11.5C11.5 13.4028 13.4028 11.5 15.75 11.5V9.75ZM9.75 15.75L8 15.75C8 20.0302 11.4698 23.5 15.75 23.5V21.75V20C13.4028 20 11.5 18.0972 11.5 15.75L9.75 15.75ZM15.75 21.75L15.75 23.5C20.0302 23.5 23.5 20.0302 23.5 15.75L21.75 15.75L20 15.75C20 18.0972 18.0972 20 15.75 20L15.75 21.75ZM21.75 15.75H23.5C23.5 11.4698 20.0302 8.00001 15.75 8L15.75 9.75L15.75 11.5C18.0972 11.5 20 13.4028 20 15.75H21.75Z" fill="#D0021B"/>
              </svg>
              ORDER DELIVERY
            </Link>
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
