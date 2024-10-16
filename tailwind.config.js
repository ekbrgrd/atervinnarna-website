/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* slate: {
          100: "#F1F5F9", // Lightest shade
          200: "#E2E8F0", // Slightly darker
          300: "#CBD5E1", // Light grayish-blue
          400: "#94A3B8", // Medium-light
          500: "#64748B", // Medium shade, neutral
          600: "#475569", // Darker neutral
          700: "#334155", // Deeper and darker
          800: "#1E293B", // Very dark, almost at 900
          900: "#101D2D", // The provided darkest shade
        }, */ slate: {
          100: "#E5E8E5", // Lighter, more neutral grayish tone
          200: "#C8CEC8", // Light gray with a slight cool undertone
          300: "#A1A7A1", // Medium-light grayish tone with less saturation
          400: "#788078", // Medium gray, desaturated and balanced
          500: "#596659", // Darker, more neutral gray with a hint of green
          600: "#465046", // Dark slate, reduced green influence
          700: "#353C34", // Deeper gray, subtle green hint
          800: "#252C27", // Very dark grayish-slate, more neutral
          900: "#171F1A", // Darkest, almost neutral dark gray
        },

        /* blue: {
          500: "#5696FF",
          600: "#2174EA",
        }, */
        blue: {
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
