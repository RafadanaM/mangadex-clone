/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      white: "rgb(var(--color-neutral-100) / <alpha-value>)",
      primary: "rgb(var(--color-neutral-900) / <alpha-value>)",
      icon: {
        DEFAULT: "rgb(var(--color-neutral-800) / <alpha-value>)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "rgb(var(--color-primary-400) / <alpha-value>)",
      },
      black: "rgb(var(--color-neutral-900) / <alpha-value>)",
    },
    backgroundColor: {
      transparent: "transparent",
      current: "currentColor",
      white: "rgb(var(--color-neutral-100) / <alpha-value>)",
      primary: {
        DEFAULT: "rgb(var(--color-primary-400) / <alpha-value>)",
        dark: "rgb(var(--color-primary-500) / <alpha-value>)",
      },
      secondary: "rgb(var(--color-neutral-400) / <alpha-value>)",
      shade: {
        light: "rgb(var(--color-neutral-300) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-neutral-500) / <alpha-value>)",
      },
      black: "rgb(var(--color-neutral-900) / <alpha-value>)",
    },
    extend: {
      animation: {
        "fade-in": "fade-in 1s ease-in alternate",
        "blow-up": "blow-up 100ms linear forwards",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        "blow-up": {
          "0%": { transform: "scale(2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      screens: {
        "3xl": "1904px",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        header: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "md-mw": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
