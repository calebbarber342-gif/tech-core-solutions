/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
      colors: {
        arcade: {
          bg:     "#0a0a0f",
          card:   "#13131a",
          border: "#1e1e2e",
          purple: "#7c3aed",
          pink:   "#ec4899",
          cyan:   "#06b6d4",
          green:  "#10b981",
          yellow: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
