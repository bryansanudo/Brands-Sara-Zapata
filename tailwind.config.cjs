/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thPrimary: "#c539ac",
        thSecondary: "#6057ca",
      },
    },
  },
  plugins: [],
};
