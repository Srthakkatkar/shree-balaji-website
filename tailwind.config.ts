import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#f5c518",
          deep: "#e6a800",
        },
        red: {
          accent: "#c0392b",
        },
        gray: {
          900: "#0d0d0d",
          800: "#1a1a1a",
          700: "#2a2a2a",
          600: "#3a3a3a",
          400: "#666666",
          200: "#cccccc",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        marathi: ["var(--font-noto)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "road-line": "roadLine 3s linear infinite",
        "orbit": "rotateSlow 20s linear infinite",
        "float": "orbFloat 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease infinite",
        "scroll-line": "scrollPulse 2s ease infinite",
        "float-btn": "floatBtn 3s ease-in-out infinite",
      },
      keyframes: {
        roadLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        rotateSlow: {
          to: { transform: "translateY(-50%) rotate(360deg)" },
        },
        orbFloat: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.1)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        scrollPulse: {
          "0%,100%": { transform: "scaleY(1)", opacity: "1" },
          "50%": { transform: "scaleY(0.5)", opacity: "0.5" },
        },
        floatBtn: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },

      },
    },
  },
  plugins: [],
};
export default config;
