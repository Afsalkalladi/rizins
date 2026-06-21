"use client";

import Header from "@/components/Header";
import WorkWithUs from "@/components/WorkWithUs";
import Footer from "@/components/Footer";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#ececec] pt-[70px] sm:pt-[80px] flex flex-col">
            <Header />

            {/* The Work With Us Component */}
            <WorkWithUs />

            <Footer />
        </main>
    );
}
