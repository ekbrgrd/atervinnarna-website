/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#E5E8E5",
          200: "#C8CEC8",
          300: "#A1A7A1",
          400: "#788078",
          500: "#596659",
          600: "#465046",
          700: "#353C34",
          800: "#252C27",
          900: "#171F1A",
        },
        green: {
          100: "#e3f8dd",
          200: "#b9ea9b",
          300: "#8edb59",
          400: "#63cd17",
          500: "#2e830e",
          600: "#266a0b",
          700: "#1f5208",
          800: "#173a06",
          900: "#0f2204",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        quicksand: ["var(--font-quicksand)", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.01em" }],
        "3xl": ["2rem", { lineHeight: "1.3125", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "6xl": ["4rem", { lineHeight: "1.1562", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
