import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        surface: "#131314",
        border: "#232324",
        paper: "#F2F0EA",
        mist: "#8A8780",
        brass: "#D6A94A",
        "brass-dim": "#8C6E30",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
