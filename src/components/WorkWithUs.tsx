"use client";

import Image from "next/image";

export default function WorkWithUs() {
    return (
        <section className="w-full bg-[#FAFAFA] py-20 relative overflow-hidden" id="careers">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Illustration / Image */}
                <div className="relative h-[400px] md:h-[500px] w-full bg-black rounded-[40px] overflow-hidden shadow-2xl group">
                    <Image
                        src="/images/recruitment_chef_team.png"
                        alt="Join our team"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white font-lilita text-2xl">"BEST JOB EVER"</p>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    <div>
                        <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">JOIN THE SQUAD</span>
                        <h2 className="font-jomhuria text-[70px] md:text-[90px] leading-[0.8] text-black">
                            WORK WITH <br /><span className="text-brand-red">PASSION</span>
                        </h2>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        We are looking for energetic, burger-loving individuals to join our kitchen and service teams.
                        Flexible hours, great vibes, and free burgers on shift!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4">
                        <button className="px-10 py-4 bg-black text-white rounded-full font-lilita text-xl hover:bg-brand-red transition-all shadow-xl hover:shadow-brand-red/40 hover:-translate-y-1">
                            APPLY NOW
                        </button>
                        <button className="px-10 py-4 border-2 border-black text-black rounded-full font-lilita text-xl hover:bg-black hover:text-white transition-all">
                            VIEW POSITIONS
                        </button>
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                        *Experience is preferred but passion is mandatory.
                    </p>
                </div>

            </div>
        </section>
    );
}
