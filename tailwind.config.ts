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
        crt: {
          darkest: "#050806",
          black: "#0a0e0b",
          dark: "#101612",
          surface: "#161e19",
          border: "#202d24",
          borderBright: "#2e4235",
        },
        term: {
          green: "#34d399",
          greenBright: "#4ade80",
          greenMuted: "#15803d",
          greenGlow: "rgba(52, 211, 153, 0.15)",
          amber: "#fbbf24",
          amberBright: "#f59e0b",
          amberMuted: "#b45309",
          amberGlow: "rgba(251, 191, 36, 0.15)",
          red: "#f87171",
          redBright: "#ef4444",
          orange: "#fb923c",
          cyan: "#38bdf8",
        },
        archive: {
          paper: "#e6ebe0",
          text: "#d1d8cc",
          muted: "#8a9686",
          darkMuted: "#4b5548",
        }
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "'Courier New'",
          "monospace"
        ],
        display: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif"
        ],
      },
      animation: {
        "crt-flicker": "flicker 0.15s infinite",
        "scanline-scroll": "scanline 8s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-sweep": "sweep 4s linear infinite",
        "glitch-jump": "glitch 2.5s infinite",
      },
      keyframes: {
        flicker: {
          "0%": { opacity: "0.98" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.985" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-1px, -1px)" },
          "60%": { transform: "translate(2px, 1px)" },
          "80%": { transform: "translate(1px, -2px)" },
        }
      },
      boxShadow: {
        "term-green": "0 0 20px -5px rgba(52, 211, 153, 0.3)",
        "term-amber": "0 0 20px -5px rgba(251, 191, 36, 0.3)",
        "crt-screen": "inset 0 0 100px rgba(0, 0, 0, 0.8), 0 0 30px rgba(52, 211, 153, 0.1)",
      }
    },
  },
  plugins: [],
};
export default config;
