"use client";

import { motion } from "framer-motion";
import CommunityTerms from "./CommunityTerms";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const eligibleGroups = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
    label: "Registered charities & nonprofits",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    label: "Mosques & faith communities",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    label: "Schools & youth groups",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    label: "Shelters & food banks",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "Grassroots community groups",
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Fill out our short application form and tell us about your group and the people you serve.",
  },
  {
    num: "02",
    title: "Share your story",
    desc: "Upload anything that supports your request: a flyer, a photo, a registration document, or simply a description of the need.",
  },
  {
    num: "03",
    title: "We review",
    desc: "Applications are reviewed weekly. We look for genuine need and a real impact on the community.",
  },
  {
    num: "04",
    title: "Pick up your meals",
    desc: "Choose the date and time that works best for your group to collect 25 fresh, halal meals. Pickups available Monday through Thursday.",
  },
];

export default function CommunitySection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* ===== HERO BANNER ===== */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[540px] overflow-hidden">
        {/* Layered gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #d56116 0%, #e8782e 30%, #c24e0a 60%, #a03d05 100%)",
          }}
        />
        {/* Subtle radial overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Diagonal pattern stripes */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,1) 30px, rgba(255,255,255,1) 31px)",
          }}
        />
        {/* Large decorative heart watermark */}
        <div className="absolute -right-12 sm:-right-6 top-1/2 -translate-y-1/2 opacity-[0.07]">
          <svg className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px]" fill="white" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Banner content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 sm:px-6 sm:py-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="font-poppins text-white/90 text-xs sm:text-sm tracking-wider uppercase">
                Giving Back
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-lilita text-white text-center leading-[0.95] drop-shadow-lg"
          >
            <span
              className="block"
              style={{ fontSize: "clamp(32px, 8vw, 80px)" }}
            >
              COMMUNITY
            </span>
            <span
              className="block mt-1 sm:mt-2"
              style={{ fontSize: "clamp(28px, 7vw, 72px)" }}
            >
              MEAL SUPPORT
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
            className="font-poppins text-white/80 text-center text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-xl tracking-wide"
          >
            25 free halal meals for organizations making a difference
          </motion.p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="w-full bg-white px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">

          {/* ===== HEADLINE ===== */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-lilita leading-[0.95]"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="block text-black"
              style={{ fontSize: "clamp(36px, 8vw, 72px)" }}
            >
              GOOD FOOD
            </motion.span>
            <motion.span
              custom={1}
              variants={fadeUp}
              className="block text-[#d56116]"
              style={{ fontSize: "clamp(32px, 7vw, 68px)" }}
            >
              BELONGS TO EVERYONE
            </motion.span>
          </motion.h2>

          {/* ===== INTRO TEXT ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-poppins text-black/80 mt-8 sm:mt-10 space-y-5 leading-relaxed"
            style={{ fontSize: "clamp(13px, 2vw, 16px)" }}
          >
            <motion.p custom={0} variants={fadeUp}>
              At Rizin&apos;s, we started with one belief: great, 100% halal food should be affordable and within reach for every single person — no exceptions. That belief doesn&apos;t stop at our counter. It&apos;s why we&apos;re giving back to the communities that make our neighborhoods worth living in.
            </motion.p>
            <motion.p custom={1} variants={fadeUp}>
              Through <strong className="text-black font-semibold">Rizin&apos;s Community Meal Support</strong>, we provide <strong className="text-black font-semibold">25 free meals</strong> to a community group or organization doing meaningful work for the people around them. Every meal is made with the same quality and care we put into every order — and it&apos;s always 100% halal.
            </motion.p>
          </motion.div>

          {/* ===== WHO THIS IS FOR — Icon Cards ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 sm:mt-16"
          >
            <motion.h3
              custom={0}
              variants={fadeUp}
              className="font-lilita text-black text-2xl sm:text-3xl mb-2"
            >
              Who this is for
            </motion.h3>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="font-poppins text-black/70 mb-6"
              style={{ fontSize: "clamp(13px, 2vw, 16px)" }}
            >
              If you&apos;re feeding, supporting, or bringing people together, we want to hear from you.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {eligibleGroups.map((group, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50/80 to-white hover:border-[#d56116]/30 hover:shadow-lg hover:shadow-[#d56116]/5 transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#d56116]/10 text-[#d56116] flex items-center justify-center group-hover:bg-[#d56116] group-hover:text-white transition-all duration-300">
                    {group.icon}
                  </div>
                  <span
                    className="font-poppins text-black/80 font-medium"
                    style={{ fontSize: "clamp(12px, 1.8vw, 14px)" }}
                  >
                    {group.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              custom={6}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 font-poppins text-black/50 italic text-sm"
            >
              You don&apos;t need to be a big organization. If there&apos;s a real need and real people behind it, you&apos;re welcome to apply.
            </motion.p>
          </motion.div>

          {/* ===== HOW IT WORKS — Step Cards ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 sm:mt-16"
          >
            <motion.h3
              custom={0}
              variants={fadeUp}
              className="font-lilita text-black text-2xl sm:text-3xl mb-8"
            >
              How it works
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#d56116]/20 hover:shadow-xl hover:shadow-[#d56116]/5 transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#d56116] to-[#e8782e] text-white flex items-center justify-center font-lilita text-lg sm:text-xl shadow-lg shadow-[#d56116]/20 group-hover:scale-110 transition-transform duration-300">
                      {step.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-lilita text-black text-lg sm:text-xl mb-1.5">
                        {step.title}
                      </h4>
                      <p
                        className="font-poppins text-black/65 leading-relaxed"
                        style={{ fontSize: "clamp(12px, 1.8vw, 14px)" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== WHY WE DO THIS ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 sm:mt-16"
          >
            <motion.h3
              custom={0}
              variants={fadeUp}
              className="font-lilita text-black text-2xl sm:text-3xl mb-4"
            >
              Why we do this
            </motion.h3>
            <motion.div
              custom={1}
              variants={fadeUp}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#fdf6f0] to-[#fef9f5] border border-[#d56116]/10"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-3 right-4 sm:top-4 sm:right-6 font-lilita text-[#d56116]/10 select-none pointer-events-none" style={{ fontSize: "clamp(60px, 12vw, 120px)", lineHeight: 1 }}>
                &ldquo;
              </div>
              <p
                className="font-poppins text-black/75 leading-relaxed relative z-10"
                style={{ fontSize: "clamp(13px, 2vw, 16px)" }}
              >
                Rizin&apos;s is building something bigger than a restaurant. We want to be a brand that communities love because we show up for them — not just with food, but with heart. Giving back is part of who we are from day one, and it always will be.
              </p>
              <p className="font-poppins text-black/85 font-semibold mt-4 relative z-10" style={{ fontSize: "clamp(13px, 2vw, 16px)" }}>
                Every meal we share is a small way of saying: <em className="text-[#d56116]">you matter, and good food should reach you too.</em>
              </p>
            </motion.div>
          </motion.div>

          {/* ===== 100% HALAL ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 sm:mt-16"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-start gap-4 sm:gap-5"
            >
              {/* Halal badge */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#d56116] to-[#c24e0a] text-white flex flex-col items-center justify-center font-lilita shadow-lg shadow-[#d56116]/20">
                <span className="text-lg sm:text-xl leading-none">100%</span>
                <span className="text-[9px] sm:text-[11px] tracking-wider mt-0.5">HALAL</span>
              </div>
              <div>
                <h3 className="font-lilita text-black text-xl sm:text-2xl md:text-3xl mb-2">
                  Food everyone can enjoy
                </h3>
                <p
                  className="font-poppins text-black/70 leading-relaxed"
                  style={{ fontSize: "clamp(13px, 2vw, 16px)" }}
                >
                  Everything Rizin&apos;s serves is 100% halal, and that will never change. Halal means our food is prepared to a clean, careful standard that makes it safe and welcoming for everyone to eat — so no one in your community has to think twice. Whatever someone&apos;s background or beliefs, they can share a Rizin&apos;s meal with complete peace of mind.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ===== CTA SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-14 sm:mt-20"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#d56116] via-[#e07a2f] to-[#c24e0a] p-8 sm:p-10 md:p-12 text-center">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/[0.06]" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white/[0.04]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />

              <div className="relative z-10">
                <h3 className="font-lilita text-white text-3xl sm:text-4xl md:text-5xl mb-3 tracking-wide drop-shadow-md">
                  Apply now
                </h3>
                <p className="font-poppins text-white/85 mb-8 text-sm sm:text-base md:text-lg max-w-md mx-auto">
                  Ready to pick up 25 free meals for your community?
                </p>
                <a
                  href="https://forms.gle/cU4vHghD1hGVwxud8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#d56116] font-lilita text-lg sm:text-xl md:text-2xl py-3.5 px-8 sm:px-10 rounded-full shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:scale-105 active:scale-95 transition-all duration-300 tracking-wider"
                >
                  FILL OUT THE APPLICATION FORM
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <p className="mt-6 text-sm text-white/70 font-poppins">
                  Have a question first? Reach out to us at{" "}
                  <a
                    href="mailto:richardjacob@rizins.com.au"
                    className="text-white underline underline-offset-2 hover:text-white/90 transition-colors"
                  >
                    richardjacob@rizins.com.au
                  </a>{" "}
                  — we&apos;d love to hear from you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===== CLOSING TAGLINE ===== */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center font-lilita text-[#d56116] text-xl sm:text-2xl mt-12 mb-4 tracking-wider"
          >
            Rizin&apos;s Community Meal Support — because the best food is the food we share.
          </motion.p>

          <CommunityTerms />
        </div>
      </div>
    </section>
  );
}
