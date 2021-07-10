module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightMode: {
          default: "hsl(200, 15%, 8%)",
          input: "hsl(0, 0%, 52%)",
          bg: "hsl(0, 0%, 98%)"
        },
        darkMode: {
          element: "hsl(209, 23%, 22%)",
          bg: "hsl(207, 26%, 17%)"
        }
      }
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
