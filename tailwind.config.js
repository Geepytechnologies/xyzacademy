/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      d1: "300px",
      d2: "450px",
      sm: '480px',
      sm1: "499px",
      sm2: "565px",
      sm3: "667px",
      md: '768px',
      md1: '832px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    fontFamily: {
      'mont': ["Montserrat", "sans-serif"],
      'rob': ["Roboto", "sans-serif"],
      'danc': ["Dancing Script", "cursive"],
      'popp': ["Poppins", "sans-serif"],
      'open': ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
}
