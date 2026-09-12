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
        'surface-container': '#e6f4ea',
        'tertiary-fixed-dim': '#a7f3d0',
        'error': '#ba1a1a',
        'surface-container-lowest': '#ffffff',
        'inverse-surface': '#0f2417',
        'outline-variant': '#bbf7d0',
        'on-secondary-fixed-variant': '#14532d',
        'primary-fixed': '#bbf7d0',
        'secondary-fixed-dim': '#86efac',
        'on-error': '#ffffff',
        'tertiary-container': '#15803d',
        'secondary': '#166534',
        'on-secondary-fixed': '#052e16',
        'on-secondary': '#ffffff',
        'on-primary-container': '#86efac',
        'outline': '#4ade80',
        'on-error-container': '#93000a',
        'surface-dim': '#dcfce7',
        'surface-variant': '#dcfce7',
        'on-background': '#052e16',
        'secondary-container': '#22c55e',
        'inverse-on-surface': '#ecfdf5',
        'tertiary': '#166534',
        'surface-tint': '#15803d',
        'on-surface': '#052e16',
        'primary-container': '#14532d',
        'surface-container-high': '#dcfce7',
        'primary-fixed-dim': '#86efac',
        'on-primary-fixed-variant': '#14532d',
        'background': '#f0fdf4',
        'surface-container-highest': '#d1fae5',
        'surface-container-low': '#f0fdf4',
        'on-surface-variant': '#166534',
        'on-secondary-container': '#052e16',
        'on-tertiary-container': '#bbf7d0',
        'on-tertiary-fixed-variant': '#14532d',
        'surface': '#f0fdf4',
        'secondary-fixed': '#dcfce7',
        'tertiary-fixed': '#dcfce7',
        'inverse-primary': '#86efac',
        primary: {
          DEFAULT: '#15803d',
          container: '#14532d',
          fixed: '#bbf7d0'
        }
      },
    },
  },
  plugins: [],
};
export default config;
