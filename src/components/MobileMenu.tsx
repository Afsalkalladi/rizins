"use client";

import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "MENU", href: "/menu" },
  { label: "LOCATION", href: "/location" },
  { label: "ORDER NOW", href: "/menu" }, // redirecting order to menu for now as typical
  { label: "WORK WITH US", href: "/careers" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay with gradient shadow */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      >
        {/* Left side gradient shadow */}
        <div
          className="absolute left-0 top-0 w-[207px] h-full"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)",
          }}
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-[195px] h-full bg-brand-red z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-[28px] right-[18px] w-[33px] h-[33px] flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Close menu"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2L24 24M24 2L2 24"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Horizontal line separator */}
        <div className="absolute top-[80px] left-0 w-full h-[1px] bg-black/50" />

        {/* Menu Items */}
        <nav className="pt-[132px] px-6">
          <ul className="flex flex-col gap-[48px]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block text-white font-jomhuria text-[36px] leading-[16px] text-center hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
