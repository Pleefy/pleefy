/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e8ecff",
          200: "#cfd8ff",
          300: "#aab9ff",
          400: "#7e92ff",
          500: "#5c73ff",
          600: "#4459e6",
          700: "#3849b3",
          800: "#2f3d8f",
          900: "#2a366f"
        }
      }
    },
  },
  plugins: [],
};
