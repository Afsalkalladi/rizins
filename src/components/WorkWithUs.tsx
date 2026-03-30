"use client";

import Image from "next/image";
import Link from "next/link";

const GOOGLE_FORM_URL = "https://forms.gle/fDqv7eq45CUKyzSv8";

export default function WorkWithUs() {
    return (
        <section className="w-full min-h-[calc(100vh-80px)] bg-white py-12 md:py-16" id="careers">
            <div className="mx-auto w-full max-w-[760px] px-5 text-center">
                <h1 className="font-lilita text-brand-red text-[30px] md:text-[42px] leading-[0.95] tracking-wide uppercase">
                    WORK WITH US!
                </h1>

                <div className="relative mt-6 w-full h-[240px] sm:h-[320px] md:h-[390px] overflow-hidden">
                    <Image
                        src="/images/workwithus.png"
                        alt="Kitchen team at work"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <h2 className="mt-7 font-lilita text-brand-red text-[30px] md:text-[40px] leading-[0.95] uppercase">
                    APPLY FOR
                    <br />
                    STORE STAFF
                </h2>

                <Link
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-red px-10 py-3 font-lilita text-[28px] md:text-[34px] leading-[0.9] text-white uppercase shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all hover:brightness-110"
                >
                    CONTACT NOW
                </Link>

                <p className="mt-4 text-[22px] md:text-[28px] leading-none font-jomhuria text-black/85 tracking-wide">
                    Read More About Policy
                </p>
            </div>
        </section>
    );
}
