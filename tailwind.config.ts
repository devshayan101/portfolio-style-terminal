import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0a0a",
          fg: "#e0e0e0",
          accent: "#60a5fa", // Cyan from therobin.dev
          "accent-dim": "rgba(96, 165, 250, 0.1)",
          border: "#1a1a1a",
          muted: "#525252",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "typewriter": "type 3s steps(40, end)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        type: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;