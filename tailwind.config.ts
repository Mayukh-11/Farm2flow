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
        'tertiary-fixed-dim': '#b4c5ff',
        'error': '#ba1a1a',
        'surface-container-lowest': '#ffffff',
        'inverse-surface': '#27313f',
        'outline-variant': '#c0c9be',
        'on-secondary-fixed-variant': '#6e3900',
        'primary-fixed': '#b1f2be',
        'secondary-fixed-dim': '#ffb77d',
        'on-error': '#ffffff',
        'tertiary-container': '#003fab',
        'secondary': '#904d00',
        'on-secondary-fixed': '#2f1500',
        'on-secondary': '#ffffff',
        'on-primary-container': '#87c695',
        'outline': '#717970',
        'on-error-container': '#93000a',
        'surface-dim': '#d0dbed',
        'surface-variant': '#d9e3f6',
        'on-background': '#121c2a',
        'secondary-container': '#fe932c',
        'inverse-on-surface': '#eaf1ff',
        'tertiary': '#002b7b',
        'surface-tint': '#2e6a41',
        'on-surface': '#121c2a',
        'primary-container': '#14532d',
        'surface-container-high': '#dee9fc',
        'primary-fixed-dim': '#96d5a3',
        'on-primary-fixed-variant': '#12512c',
        'background': '#f8f9ff',
        'surface-container-highest': '#d9e3f6',
        'surface-container-low': '#eff4ff',
        'on-surface-variant': '#404941',
        'on-secondary-container': '#663500',
        'on-tertiary-container': '#9eb5ff',
        'on-tertiary-fixed-variant': '#003ea8',
        'surface': '#f8f9ff',
        'secondary-fixed': '#ffdcc3',
        'tertiary-fixed': '#dbe1ff',
        'inverse-primary': '#96d5a3',
        primary: {
          DEFAULT: '#003b1b',
          container: '#14532d',
          fixed: '#b1f2be'
        }
      },
    },
  },
  plugins: [],
};
export default config;
