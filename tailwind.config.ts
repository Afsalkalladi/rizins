import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#D0021B",
        "text-dark": "#2B2B2B",
        "hero-bg": "#000000",
        "text-light": "#EDEDED",
        "shadow-gray": "#7B7B7B",
        "orange-accent": "#c65e0f",
        "orange-gradient-start": "#630b10",
        "orange-gradient-end": "#d66c0f",
      },
      fontFamily: {
        jomhuria: ["var(--font-jomhuria)", "Jomhuria", "cursive"],
        lilita: ["var(--font-lilita)", "Lilita One", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      width: {
        mobile: "402px",
      },
      rotate: {
        burger: "-18.27deg",
      },
      fontSize: {
        "burger-watermark": ["221.888px", { lineHeight: "222px" }],
        "hero-title": ["57.1918px", { lineHeight: "33px" }],
      },
    },
  },
  plugins: [],
};

export default config;
