/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        darkbg: "#0F172A",
        card: "#1E293B",
      },
    },
  },
  plugins: [],
}