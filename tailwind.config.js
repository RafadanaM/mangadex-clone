/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "rgb(var(--color-neutral-100) / <alpha-value>)",
      black: "rgb(var(--color-neutral-900) / <alpha-value>)",
      icon: {
        DEFAULT: "rgb(var(--color-neutral-800) / <alpha-value>)",
      },
      status: {
        red: "rgb(var(--color-status-red) / <alpha-value>)",
        blue: "rgb(var(--color-status-blue) / <alpha-value>)",
        yellow: "rgb(var(--color-status-yellow) / <alpha-value>)",
        green: "rgb(var(--color-status-green) / <alpha-value>)",
        grey: "rgb(var(--color-status-grey) / <alpha-value>)",
      },
      primary: {
        DEFAULT: "rgb(var(--color-primary-400) / <alpha-value>)",
        dark: "rgb(var(--color-primary-500) / <alpha-value>)",
      },
      secondary: {
        light: "rgb(var(--color-neutral-200) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-neutral-400) / <alpha-value>)",
        dark: "rgb(var(--color-neutral-300) / <alpha-value>)",
      },
      shade: {
        light: "rgb(var(--color-neutral-300) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-neutral-500) / <alpha-value>)",
      },
    },

    extend: {
      height: {
        nav: "var(--nav-height)",
        banner: "var(--banner-height)",
      },
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
      boxShadow: {
        glow: "0px 0px 24px -6px rgb(0 0 0 / 0.25)",
        main: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
