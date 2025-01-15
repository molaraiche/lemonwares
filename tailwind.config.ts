import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B00000",
        grey: "#D6D4D4E0",
        "text-body": "#808080",
        "Text/Gray 900": "#18191F",
        "Text/Title": "#2E2E2E",
      },
      boxShadow: {
        "cta-shadow": "0px 0px 64px 0px rgba(176, 0, 0, 0.30)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
