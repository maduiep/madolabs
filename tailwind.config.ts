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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lime: "#E2FF3B",
        black: "#000000",
        'dark-gray': "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        title: ["var(--font-title)"],
      },
    },
  },
  plugins: [],
};
export default config;
