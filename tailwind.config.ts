import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans your App Router pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans components if outside src
    "./data/**/*.{js,ts,jsx,tsx,mdx}", // Scans data files
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeOrbit: 'fadeOrbit 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeOrbit: {
           '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
           '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;