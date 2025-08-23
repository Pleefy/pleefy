
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: "0.9rem",
        '2xl': "1.25rem"
      },
      colors: {
        brand: {
          DEFAULT: "#0A84FF",
          fg: "#0A84FF"
        }
      }
    }
  },
  plugins: []
};
