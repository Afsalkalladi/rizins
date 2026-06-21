"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import OrderModal, { useOrderModal } from "@/components/OrderModal";

export default function OrderDeliveryPage() {
  const { open, initialPlatform, openModal, closeModal } = useOrderModal();

  return (
    <>
      <main className="min-h-screen bg-white pt-[70px] sm:pt-[80px] flex flex-col">
        <Header />

        <section className="flex-1 flex items-center justify-center px-4 py-14 md:py-16">
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

        <Footer />
      </main>

      <OrderModal open={open} onClose={closeModal} initialPlatform={initialPlatform} />
    </>
  );
}
