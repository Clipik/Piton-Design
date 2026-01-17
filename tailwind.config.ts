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
        primary: "#FF0033",
        dark: "#222222",
      },
      fontFamily: {
        heading: ["var(--font-unbounded)", "sans-serif"],
        text: ["var(--font-golos-text)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
