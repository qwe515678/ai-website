import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // screens: {
    //   'max-2xl': { 'max': '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   'max-xl': { 'max': '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   'max-lg': { 'max': '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   'max-md': { 'max': '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   'max-sm': { 'max': '639px' },
    //   // => @media (max-width: 639px) { ... }
    // }
  },
  plugins: [
    addVariablesForColors
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
