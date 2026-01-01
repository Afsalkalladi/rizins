"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-white pt-[100px] flex flex-col justify-between">
            <Header />

            <section className="flex-grow flex flex-col items-center justify-center text-center px-6">
                <h1 className="font-jomhuria text-[80px] md:text-[120px] leading-none text-black mb-6">
                    FIND US
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="font-lilita text-3xl mb-2 text-brand-red">DOWNTOWN</h2>
                        <p className="text-gray-600 mb-4">123 Burger Lane, Food District<br />Sydney, NSW 2000</p>
                        <p className="text-sm font-bold">MON-SUN: 10AM - 11PM</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="font-lilita text-3xl mb-2 text-brand-red">WESTSIDE</h2>
                        <p className="text-gray-600 mb-4">456 Tasty Ave, West End<br />Melb, VIC 3000</p>
                        <p className="text-sm font-bold">MON-SUN: 11AM - 10PM</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
