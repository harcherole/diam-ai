import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060B14",
          900: "#0A1628",
          800: "#0F2444",
          700: "#16325C",
        },
        accent: {
          DEFAULT: "#2F6FED",
          light: "#5B8DEF",
        },
        cyan: {
          DEFAULT: "#17C3B2",
        },
        sand: {
          DEFAULT: "#C99A4B",
        },
        surface: {
          50: "#F7F9FC",
          100: "#EEF1F6",
        },
        ink: {
          500: "#8A94A6",
          700: "#4A5568",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(15,36,68,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,36,68,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
