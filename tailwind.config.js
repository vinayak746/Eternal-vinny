const { radialGradient } = require("framer-motion/client");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(173, 216, 230, 5) 0%, rgba(217, 217, 217, 0) 100%)",
      },
      boxShadow: {
        "glass-sm": "0 0 30px 5px rgba(255, 255, 255, 0.8)", // soft, bright white glass glow
        "glass-hover": "0 0 60px 20px rgba(255, 255, 255, 1.0)", // intense, fully luminous white glow on hover
      },

      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite ",
      },
    },
  },
  plugins: [],
};
