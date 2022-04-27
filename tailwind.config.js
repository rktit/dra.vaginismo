const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        gray2: "#aeaeb3",
        gray3: "#292929",
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        yellow2: "#ffc000",
        green: "#347541",
        blue: "#114161",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
