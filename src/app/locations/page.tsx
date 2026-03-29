import Header from "@/components/Header";
import Footer from "@/components/Footer";

const locations = [
  {
    suburb: "Mitcham",
    address: "2/535 Whitehorse Rd, Mitcham VIC",
    link: "https://www.google.com/maps/search/?api=1&query=2%2F535+Whitehorse+Rd%2C+Mitcham+VIC"
  },
  {
    suburb: "Dandenong",
    address: "132 Walker St, Dandenong VIC",
    link: "https://www.google.com/maps/search/?api=1&query=132+Walker+St%2C+Dandenong+VIC"
  },
  {
    suburb: "Seaford",
    address: "6/366 Frankston-Dandenong Rd, Seaford VIC",
    link: "https://www.google.com/maps/search/?api=1&query=6%2F366+Frankston-Dandenong+Rd%2C+Seaford+VIC"
  }
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-[70px] sm:pt-[80px] flex flex-col">
      <Header />
      
      <section className="w-full relative py-8 sm:py-10 overflow-hidden bg-[#FDFBF7] flex-1 flex flex-col justify-center">
        {/* Soft light gradient background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-200 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          <h1 className="font-jomhuria text-[64px] sm:text-[80px] md:text-[96px] leading-[0.8] text-brand-red tracking-widest text-center mb-2 drop-shadow-sm">
            OUR LOCATIONS
          </h1>
          <p className="font-poppins text-gray-700 text-center max-w-lg mb-8 sm:mb-12 text-[14px]">
            Find your nearest Rizins Smash Burgers below. Drop in and grab a bite.
          </p>
          
          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {locations.map((loc, i) => (
              <div 
                key={i} 
                className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl overflow-hidden border border-gray-100 hover:border-brand-red/30 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[170px]"
              >
                {/* Subtle hover effect to red tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex flex-col items-center w-full">
                  <h2 className="font-lilita text-[22px] sm:text-[24px] text-gray-900 tracking-wide mb-1">
                    {loc.suburb}
                  </h2>
                  <p className="font-poppins text-gray-600 text-[13px] leading-relaxed max-w-[200px] mb-4">
                    {loc.address}
                  </p>
                </div>

                <a 
                  href={loc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center gap-2 bg-brand-red text-white px-4 py-2 w-full sm:w-auto rounded-full font-lilita hover:bg-red-700 transition-colors text-[14px] shadow-sm hover:shadow"
                >
                  {/* Google Maps Pin SVG */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  GET DIRECTIONS
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
