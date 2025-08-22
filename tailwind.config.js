/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        'ink': '#0F172A',
        'slate-ink': '#1F2937'
      },
      borderRadius: {
        'xl2': '1.25rem'
      }
    },
  },
  plugins: []
}
