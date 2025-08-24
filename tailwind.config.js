/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A84FF",
          foreground: "#0B0B0B"
        }
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      }
    },
  },
  plugins: [],
};
