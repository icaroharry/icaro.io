module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        mono: ["Fira Mono", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        transparent: "transparent",

        dark: "#606060",
        darker: "#3e3e3e",
        primary: "#85D79C",
        secondary: "#B69AD6",
        light: "#D0F7DB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
