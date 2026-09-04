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
        'surface-container': '#e6eeff',
        'surface-container-lowest': '#ffffff',
        'outline-variant': '#c0c9be',
        'primary-container': '#14532d',
        'primary': '#003b1b',
        'secondary': '#904d00',
        'tertiary': '#002b7b',
        'surface': '#f8f9ff',
        'on-surface': '#121c2a',
        'on-surface-variant': '#404941'
      }
    }
  },
  plugins: [],
};
export default config;
