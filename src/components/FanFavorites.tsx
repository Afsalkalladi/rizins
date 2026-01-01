"use client";

import Link from "next/link";
import Image from "next/image";

export default function FanFavorites() {
    return (
        <section className="w-full bg-[#FAFAFA] py-10">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">DISCOVER THE TASTE</span>
                        <h2 className="font-jomhuria text-[72px] text-black leading-[0.8]">
                            OUR SIGNATURE <span className="text-brand-red">COLLECTION</span>
                        </h2>
                    </div>

                    <Link href="/menu" className="hidden md:flex items-center gap-2 text-black font-lilita text-xl hover:text-brand-red transition-colors group">
                        EXPLORE FULL MENU
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Favorite Item 1 */}
                    <div className="group relative bg-gray-50 rounded-[32px] p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                        <div className="relative h-[220px] mb-6 flex items-center justify-center">
                            <Image
                                src="/images/classic-burger.png"
                                alt="Classic"
                                width={240}
                                height={180}
                                className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-lilita text-2xl text-black mb-1">THE CLASSIC</h3>
                            <p className="text-gray-500 text-sm mb-4">Flame-grilled beef, cheese, lettuce, tomato</p>
                            <span className="inline-block bg-black text-white px-6 py-2 rounded-full font-lilita text-lg">$10.99</span>
                        </div>
                    </div>

                    {/* Favorite Item 2 - Highlighted */}
                    <div className="group relative bg-brand-red rounded-[32px] p-8 shadow-2xl scale-105 z-10">
                        <div className="absolute top-4 right-4 bg-white text-brand-red px-3 py-1 rounded-full text-xs font-bold font-sans">#1 SELLER</div>
                        <div className="relative h-[240px] mb-6 flex items-center justify-center">
                            <Image
                                src="/images/main-burger.png"
                                alt="Signature"
                                width={280}
                                height={220}
                                className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-lilita text-3xl text-white mb-1">SIGNATURE SMASH</h3>
                            <p className="text-white/80 text-sm mb-6">Double beef, secret sauce, caramelized onion</p>
                            <button className="bg-white text-brand-red px-8 py-3 rounded-full font-lilita text-xl hover:bg-gray-100 transition-colors w-full">
                                ORDER NOW - $14.99
                            </button>
                        </div>
                    </div>

                    {/* Favorite Item 3 */}
                    <div className="group relative bg-gray-50 rounded-[32px] p-8 transition-all hover:shadow-xl hover:-translate-y-2">
                        <div className="relative h-[220px] mb-6 flex items-center justify-center">
                            <Image
                                src="/images/fried-chicken-burger.png"
                                alt="Fried Chicken"
                                width={240}
                                height={180}
                                className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-lilita text-2xl text-black mb-1">CRISPY CHICKEN</h3>
                            <p className="text-gray-500 text-sm mb-4">Southern fried breast, spicy mayo, pickles</p>
                            <span className="inline-block bg-black text-white px-6 py-2 rounded-full font-lilita text-lg">$11.99</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/menu" className="font-lilita text-xl text-black hover:text-brand-red underline underline-offset-4 transition-colors">
                        VIEW FULL MENU
                    </Link>
                </div>
            </div>
        </section>
    );
}
