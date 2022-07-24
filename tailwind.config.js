/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#008000",
        secondary: "#008000",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
  darkMode: 'class',
}
