"use client";

import { useEffect, useState } from "react";
import { locations, getUrl, type Platform, type ModalStep } from "@/lib/orderModal";

/**
 * Shared hook that owns the open/close state for the delivery modal.
 * `openModal()` starts at the platform-picker step; `openModal("UberEats")`
 * jumps straight to the store list for that platform.
 */
export function useOrderModal() {
  const [open, setOpen] = useState(false);
  const [initialPlatform, setInitialPlatform] = useState<Platform>(null);

  // `platform` is typed loosely so the function can be used directly as an
  // onClick handler (`onClick={openModal}`) — any non-platform argument
  // (e.g. a React event) is ignored and opens the platform-picker step.
  const openModal = (platform?: unknown) => {
    setInitialPlatform(platform === "UberEats" || platform === "DoorDash" ? platform : null);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return { open, initialPlatform, openModal, closeModal };
}

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
  /** When provided, the modal opens directly on the store list for this platform. */
  initialPlatform?: Platform;
}

/**
 * Two-step "Order via … / Select store …" delivery modal.
 * Single source of truth — used by Header, Hero, Footer and the order-delivery page.
 */
export default function OrderModal({ open, onClose, initialPlatform = null }: OrderModalProps) {
  const [step, setStep] = useState<ModalStep>("platform");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);

  // Reset to the correct starting step whenever the modal (re)opens.
  useEffect(() => {
    if (!open) return;
    if (initialPlatform) {
      setSelectedPlatform(initialPlatform);
      setStep("store");
    } else {
      setSelectedPlatform(null);
      setStep("platform");
    }
  }, [open, initialPlatform]);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handlePlatformSelect = (p: NonNullable<Platform>) => {
    setSelectedPlatform(p);
    setStep("store");
  };

  const handleLocationClick = (locId: string) => {
    window.open(getUrl(selectedPlatform, locId), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#111] border border-white/10 p-6 sm:p-7 rounded-3xl w-full max-w-sm relative flex flex-col items-center text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === "platform" && (
          <>
            <h3 className="font-lilita text-2xl tracking-wide text-white mb-1 uppercase">Order Via</h3>
            <p className="text-xs text-gray-400 mb-6 font-poppins">Choose your delivery platform</p>
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={() => handlePlatformSelect("UberEats")}
                className="w-full bg-white/5 border border-white/5 hover:border-[#06C167]/50 hover:bg-[#06C167]/10 py-4 rounded-2xl font-sans text-base font-semibold transition-all duration-200 active:scale-95"
              >
                <span className="text-white">Uber </span>
                <span className="font-bold text-[#06C167]">Eats</span>
              </button>
              <button
                onClick={() => handlePlatformSelect("DoorDash")}
                className="w-full bg-white/5 border border-white/5 hover:border-[#FF3008]/50 hover:bg-[#FF3008]/10 py-4 rounded-2xl font-black font-sans text-base uppercase tracking-tighter text-[#FF3008] transition-all duration-200 active:scale-95"
              >
                DoorDash
              </button>
            </div>
          </>
        )}

        {step === "store" && (
          <>
            <h3 className="font-lilita text-2xl tracking-wide text-white mb-1 uppercase">Select Store</h3>
            <p className="text-xs text-gray-400 mb-1 font-poppins">
              via{" "}
              <button
                className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{
                  color:
                    selectedPlatform === "UberEats"
                      ? "#06C167"
                      : selectedPlatform === "DoorDash"
                      ? "#FF3008"
                      : "",
                }}
                onClick={() => setStep("platform")}
              >
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
  );
}
