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
        gta: {
          pink: "#ff1493",
          hotPink: "#ff007f",
          cyan: "#00f0ff",
          cyanBright: "#38bdf8",
          yellow: "#ffe600",
          orange: "#ff5e00",
          red: "#ff2a2a",
          dark: "#080808",
          cardDark: "#101010",
          panel: "#141414",
          border: "#262626",
        },
      },
      fontFamily: {
        pricedown: [
          "Pricedown",
          "Impact",
          "'Arial Black'",
          "'Trebuchet MS'",
          "sans-serif",
        ],
        display: [
          "'Bebas Neue'",
          "Impact",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        "gta-pink": "0 0 25px rgba(255, 20, 147, 0.4)",
        "gta-cyan": "0 0 25px rgba(0, 240, 255, 0.4)",
        "gta-yellow": "0 0 25px rgba(255, 230, 0, 0.4)",
        "gta-red": "0 0 25px rgba(255, 42, 42, 0.4)",
        "hard": "4px 4px 0px #000000",
        "hard-pink": "4px 4px 0px #ff1493",
        "hard-cyan": "4px 4px 0px #00f0ff",
        "hard-yellow": "4px 4px 0px #ffe600",
      },
    },
  },
  plugins: [],
};

export default config;
