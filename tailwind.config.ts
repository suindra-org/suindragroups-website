// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e11d48', // Corporate Crimson
          dark: '#0f172a', // Deep Navy/Slate
          gray: '#64748b',
        }
      }
    }
  },
  plugins: [],
};
export default config;