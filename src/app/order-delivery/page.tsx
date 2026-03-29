"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

type Platform = "UberEats" | "DoorDash" | null;
type ModalStep = "platform" | "store";

const locations = [
  {
    name: "Seaford",
    id: "seaford",
    doordashUrl: "https://www.doordash.com/en-GB/store/rizin%E2%80%99s-smash-burgers-seaford-39534831/91585950/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJyaXppbnMgc21hc2ggYnVyZ2VycyBtaXRjaGFtIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InJpemluIHNtYXNoIGJ1cmdlciBtaXRjaGFtIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwiLCJxdWVyeV9pbnRlbnQiOiJTVE9SRV9SWCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsMTEwMDQ1LDRdfQ==&pickup=false",
    uberEatsUrl: "https://www.ubereats.com/au/store/rizins-smash-burgers-seaford/qE1o_MeIU2SingPFctXU0w?diningMode=DELIVERY&surfaceName=",
  },
  {
    name: "Mitcham",
    id: "mitcham",
    doordashUrl: "https://www.doordash.com/en-GB/store/rizin%E2%80%99s-smash-burgers-mitcham-33345535/83788161/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJyaXppbnMgc21hc2ggYnVyZ2VycyBtaXRjaGFtIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InJpemluIHNtYXNoIGJ1cmdlciBtaXRjaGFtIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwiLCJxdWVyeV9pbnRlbnQiOiJTVE9SRV9SWCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsMTEwMDQ1LDRsMTAwMzMzXX0=&pickup=false",
    uberEatsUrl: "https://www.ubereats.com/au/store/rizins-smash-burgers-mitcham/mAdz1sKATnGEa6Xtm-k7rQ?diningMode=DELIVERY&ps=1&surfaceName=",
  },
  {
    name: "Dandenong",
    id: "dandenong",
    doordashUrl: "https://www.doordash.com/en-GB/store/rizin%E2%80%99s-smash-burgers-dandenong-24403281/17715024/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJyaXppbnMgc21hc2ggYnVyZ2VycyIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJyaXppbiBzbWFzaCBidXJnZXIiLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCIsInF1ZXJ5X2ludGVudCI6IlNUT1JFX1JYIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxMTAwNDUsNCwxMDAzMzMsMTkyXX0=&pickup=false",
    uberEatsUrl: "https://www.ubereats.com/au/store/rizins-smash-burgers/mHLbgdAZQruoFtIhFWAdHg?diningMode=DELIVERY&mod=storeDeliveryTime&modctx=%257B%2522entryPoint%2522%253A%2522store-auto-surface%2522%252C%2522encodedStoreUuid%2522%253A%2522mHLbgdAZQruoFtIhFWAdHg%2522%257D&ps=1&surfaceName=",
  },
];

function getUrl(platform: Platform, locId: string) {
  const location = locations.find(l => l.id === locId);
  if (!location) return "#";
  if (platform === "UberEats") return location.uberEatsUrl;
  if (platform === "DoorDash") return location.doordashUrl;
  return "#";
}

export default function OrderDeliveryPage() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<ModalStep>("platform");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);

  const openModal = () => {
    setSelectedPlatform(null);
    setStep("platform");
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
      <main className="min-h-screen bg-white pt-[70px] sm:pt-[80px]">
        <Header />

        <section className="px-4 py-14 md:py-16">
          <div className="mx-auto w-full max-w-[680px] text-center">
            <h1 className="font-lilita text-brand-red text-[30px] sm:text-[38px] md:text-[46px] leading-[0.95] tracking-[0.01em] uppercase">
              CRAVING FOR A BURGER?
            </h1>
            <p className="mt-1 text-[13px] sm:text-[15px] md:text-[18px] text-black/80 font-semibold">
              Call & Order in 2 Minutes
            </p>

            <div className="relative mt-8 mx-auto w-full max-w-[620px] h-[300px] sm:h-[390px] md:h-[470px]">
              <Image
                src="/images/orderdelivery.png"
                alt="Order delivery"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-5">
              <button
                onClick={openModal}
                className="inline-flex h-[56px] min-w-[250px] items-center justify-center rounded-full bg-brand-red px-8 font-lilita text-[24px] sm:text-[28px] leading-[0.85] text-white uppercase shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all hover:brightness-110"
              >
                PLACE ORDER NOW
              </button>

              <p className="mt-4 text-[12px] sm:text-[14px] text-black/85 font-semibold tracking-[0.01em]">
                Fresh · Custom · Fast Delivery
              </p>
            </div>
          </div>
        </section>
      </main>

      {showModal && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#111] border border-white/10 p-7 rounded-3xl w-full max-w-sm relative flex flex-col items-center text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} aria-label="Close"
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

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
                </div>
              </>
            )}

            {step === "store" && (
              <>
                <h3 className="font-lilita text-2xl tracking-wide text-white mb-1 uppercase">Select Store</h3>
                <p className="text-xs text-gray-400 mb-1 font-poppins">
                  via{" "}
                  <button className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
                    style={{
                      color: selectedPlatform === "UberEats" ? "#06C167"
                        : selectedPlatform === "DoorDash" ? "#FF3008" : ""
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
