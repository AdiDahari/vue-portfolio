/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },

    extend: {
      colors: {
        "light-primary": "#FAF1E6",
        "light-secondary": "#FDFAF6",
        "light-tale-100": "#A9DED2",
        "light-tale-500": "#54BAB9",
        "dark-primary": "#050402",
        "dark-secondary": "#1C1D24",
        "dark-navy-500": "#212C6B",
        "dark-navy-100": "#07567D",
        blue: colors.blue,
        indigo: colors.indigo,
        green: colors.green,
        red: colors.red,
        paragraph: "#878E99",
        accent: {
          DEFAULT: "#AC6B34",
          hover: "#925A2B",
        },
      },
    },
  },
  plugins: [],
};
