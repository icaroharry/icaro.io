module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "light",
      "primary",
      "yellow-300",
      "yellow-600",
      "pink-300",
      "pink-600",
      "gray-300",
      "gray-600",
      "green-200",
      "green-500",
      "bg-light",
      "bg-primary",
      "bg-yellow-300",
      "bg-yellow-600",
      "bg-pink-300",
      "bg-pink-600",
      "bg-gray-300",
      "bg-gray-600",
      "bg-green-200",
      "bg-green-500",
    ],
  },
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
