module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(222.2, 47.4%, 11.2%)",
        muted: "hsl(210, 40%, 96%)"
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 6px 12px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.2rem"
      }
    }
  },
  plugins: []
};
