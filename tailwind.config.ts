import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        gold: "#C9A84C",
        "gold-light": "#E8D5A3",
        "gold-dark": "#9E7E32",
        red: "#B22222",
        "red-dark": "#8B1A1A",
        cream: "#F5F0E8",
        "text-muted": "#6B6B6B",
      },
    },
  },
  plugins: [],
};

export default config;
