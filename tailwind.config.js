/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mont': ["Montserrat", "sans-serif"],
      'rob': ["Roboto", "sans-serif"],
      'danc': ["Dancing Script", "cursive"],
      'popp': ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}
