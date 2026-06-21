"use client";

import Image from "next/image";
import Link from "next/link";
import CommunityTerms from "./CommunityTerms";

export default function CommunitySection() {
  return (
    <section className="w-full bg-white">
      {/* Banner Image - You might want to update this later if you have a specific community image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px]">
        {/* Placeholder for now, you can replace the src if a specific community image exists */}
        <div className="absolute inset-0 bg-[#d56116]" />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-lilita text-white text-4xl sm:text-6xl md:text-8xl tracking-wider text-center px-4">
                COMMUNITY MEAL SUPPORT
            </h1>
        </div>
      </div>

      {/* Story Content */}
      <div className="w-full bg-white px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="font-lilita leading-[0.95]">
            <span
              className="block text-black"
              style={{ fontSize: "clamp(36px, 8vw, 72px)" }}
            >
              GOOD FOOD
            </span>
            <span
              className="block text-[#d56116]"
              style={{ fontSize: "clamp(32px, 7vw, 68px)" }}
            >
              BELONGS TO EVERYONE
            </span>
          </h2>

          <div className="font-poppins text-black/80 mt-6 sm:mt-8 space-y-6 sm:space-y-8 leading-relaxed" style={{ fontSize: "clamp(12px, 2vw, 16px)" }}>
            <div>
              <p>
                At Rizin&apos;s, we started with one belief: great, 100% halal food should be affordable and within reach for every single person — no exceptions. That belief doesn&apos;t stop at our counter. It&apos;s why we&apos;re giving back to the communities that make our neighborhoods worth living in.
              </p>
              <p className="mt-4">
                Through <strong className="text-black font-semibold">Rizin&apos;s Community Meal Support</strong>, we provide <strong className="text-black font-semibold">25 free meals</strong> to a community group or organization doing meaningful work for the people around them. Every meal is made with the same quality and care we put into every order — and it&apos;s always 100% halal.
              </p>
            </div>

            <div>
              <h3 className="font-lilita text-black text-2xl sm:text-3xl mb-3">Who this is for</h3>
              <p className="mb-3">
                If you&apos;re feeding, supporting, or bringing people together, we want to hear from you. That includes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Registered charities and nonprofits</li>
                <li>Mosques and faith communities</li>
                <li>Schools, youth groups, and after-school programs</li>
                <li>Shelters, food banks, and outreach programs</li>
                <li>Grassroots and community groups making a difference locally</li>
              </ul>
              <p className="mt-3 text-sm italic">
                You don&apos;t need to be a big organization. If there&apos;s a real need and real people behind it, you&apos;re welcome to apply.
              </p>
            </div>

            <div>
              <h3 className="font-lilita text-black text-2xl sm:text-3xl mb-3">How it works</h3>
              <ol className="list-decimal pl-5 space-y-3">
                <li><strong className="text-black">Apply</strong> — Fill out our short application form and tell us about your group and the people you serve.</li>
                <li><strong className="text-black">Share your story</strong> — Upload anything that supports your request: a flyer, a photo, a registration document, or simply a description of the need. We keep it simple.</li>
                <li><strong className="text-black">We review</strong> — Applications are reviewed weekly. We look for genuine need and a real impact on the community.</li>
                <li><strong className="text-black">Pick up your meals</strong> — If selected, you choose the date and time that works best for your group to collect the 25 fresh, halal meals from us. Pickups are available <strong className="text-black">Monday through Thursday</strong> (not available on Fridays or weekends).</li>
              </ol>
            </div>

            <div>
              <h3 className="font-lilita text-black text-2xl sm:text-3xl mb-3">Why we do this</h3>
              <p>
                Rizin&apos;s is building something bigger than a restaurant. We want to be a brand that communities love because we show up for them — not just with food, but with heart. Giving back is part of who we are from day one, and it always will be.
              </p>
              <p className="mt-2 font-semibold">
                Every meal we share is a small way of saying: <em>you matter, and good food should reach you too.</em>
              </p>
            </div>

            <div>
              <h3 className="font-lilita text-black text-2xl sm:text-3xl mb-3">100% halal — food everyone can enjoy</h3>
              <p>
                Everything Rizin&apos;s serves is 100% halal, and that will never change. Halal means our food is prepared to a clean, careful standard that makes it safe and welcoming for everyone to eat — so no one in your community has to think twice. Whatever someone&apos;s background or beliefs, they can share a Rizin&apos;s meal with complete peace of mind.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 sm:p-8 rounded-lg mt-8 text-center">
              <h3 className="font-lilita text-black text-3xl sm:text-4xl mb-4">Apply now</h3>
              <p className="mb-6">
                Ready to pick up 25 free meals for your community?
              </p>
              <a 
                href="https://forms.gle/cU4vHghD1hGVwxud8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#d56116] hover:bg-[#b85312] text-white font-lilita text-xl sm:text-2xl py-3 px-8 rounded transition-colors tracking-wider"
              >
                FILL OUT THE APPLICATION FORM
              </a>
              <p className="mt-6 text-sm text-gray-600">
                Have a question first? Reach out to us at <a href="mailto:richardjacob@rizins.com.au" className="text-[#d56116] hover:underline">richardjacob@rizins.com.au</a> — we&apos;d love to hear from you.
              </p>
            </div>
            
            <p className="text-center font-lilita text-[#d56116] text-xl mt-12 mb-4 tracking-wider">
              Rizin&apos;s Community Meal Support — because the best food is the food we share.
            </p>

            <CommunityTerms />
          </div>
        </div>
      </div>
    </section>
  );
}
