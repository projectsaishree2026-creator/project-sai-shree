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
        primary: {
          DEFAULT: "#0EA5E9",
          dark: "#0284C7",
          light: "#BAE6FD",
          50: "#F0F9FF",
        },
        secondary: "#06B6D4",
        accent: "#10B981",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(14, 165, 233, 0.08)",
        glow: "0 0 32px rgba(14, 165, 233, 0.2)",
        "glow-lg": "0 0 48px rgba(14, 165, 233, 0.3)",
        card: "0 4px 16px rgba(14, 165, 233, 0.1), 0 2px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 40px rgba(14, 165, 233, 0.14), 0 4px 8px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "mesh-primary":
          "radial-gradient(at 20% 30%, rgba(14,165,233,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.08) 0px, transparent 50%)",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};

export default config;
