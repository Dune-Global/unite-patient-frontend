/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      ugray: {
        0: "hsl(var(--ugray-0))",
        50: "hsl(var(--ugray-50))",
        100: "hsl(var(--ugray-100))",
        200: "hsl(var(--ugray-200))",
        400: "hsl(var(--ugray-400))",
        600: "hsl(var(--ugray-600))",
        900: "hsl(var(--ugray-900))",
      },
      ublue: {
        50: "hsl(var(--ublue-50))",
        100: "hsl(var(--ublue-100))",
        200: "hsl(var(--ublue-200))",
        400: "hsl(var(--ublue-400))",
        600: "hsl(var(--ublue-600))",
        900: "hsl(var(--ublue-900))",
      },
      ugreen: {
        200: "hsl(var(--ugreen-200))",
        400: "hsl(var(--ugreen-400))",
        600: "hsl(var(--ugreen-600))",
        800: "hsl(var(--ugreen-800))",
      },
      uyellow: {
        200: "hsl(var(--uyellow-200))",
        400: "hsl(var(--uyellow-400))",
        600: "hsl(var(--uyellow-600))",
        800: "hsl(var(--uyellow-800))",
      },
      uorange: {
        200: "hsl(var(--uorange-200))",
        400: "hsl(var(--uorange-400))",
        600: "hsl(var(--uorange-600))",
        800: "hsl(var(--uorange-800))",
      },
      ured: {
        200: "hsl(var(--ured-200))",
        400: "hsl(var(--ured-400))",
        600: "hsl(var(--ured-600))",
        800: "hsl(var(--ured-800))",
      },
      uindigo: {
        200: "hsl(var(--uindigo-200))",
        400: "hsl(var(--uindigo-400))",
        600: "hsl(var(--uindigo-600))",
        800: "hsl(var(--uindigo-800))",
      },
      umint: {
        200: "hsl(var(--umint-200))",
        400: "hsl(var(--umint-400))",
        600: "hsl(var(--umint-600))",
        800: "hsl(var(--umint-800))",
      },
      uteal: {
        200: "hsl(var(--uteal-200))",
        400: "hsl(var(--uteal-400))",
        600: "hsl(var(--uteal-600))",
        800: "hsl(var(--uteal-800))",
      },
      ucyan: {
        200: "hsl(var(--ucyan-200))",
        400: "hsl(var(--ucyan-400))",
        600: "hsl(var(--ucyan-600))",
        800: "hsl(var(--ucyan-800))",
      },
      upurple: {
        200: "hsl(var(--upurple-200))",
        400: "hsl(var(--upurple-400))",
        600: "hsl(var(--upurple-600))",
        800: "hsl(var(--upurple-800))",
      },
      upink: {
        200: "hsl(var(--upink-200))",
        400: "hsl(var(--upink-400))",
        600: "hsl(var(--upink-600))",
        800: "hsl(var(--upink-800))",
      },

      transparent: "transparent",

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
