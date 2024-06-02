/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors:{
        primary: "#3CC2B1",
        online: '#34C759',
        darkGray: '#F2F2F7',
        gray: '#8E8E93',
      }
    },
  },
  plugins: [],
}

