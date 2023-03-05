const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#F3EADA",
        primaryDark: "#15131B",
        secondary: "#FFFFFF",
        secondaryDark: "#1E1C24",
        accent: "#FFA17A",
        accentDark: "#22BE74",
        lighten: "#BEBCC6",
        darken: "#F3EADA",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        h4: { fontSize: theme("fontSize.md") },
        h5: { fontSize: theme("fontSize.sm") },
      });
    }),
  ],
};
