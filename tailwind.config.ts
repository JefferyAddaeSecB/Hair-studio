import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f4eee7",
        rosewood: "#5c2e23",
        terracotta: "#bc6c54",
        olive: "#66714f",
        ink: "#1d1715",
        gold: "#d4af37"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(98, 54, 42, 0.18)"
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top, rgba(255,255,255,0.75), rgba(255,255,255,0) 45%)"
      }
    }
  },
  plugins: []
};

export default config;
