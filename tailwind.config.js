/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#4D5B56",
        secondary:"#333333",
        tertiary:"#666666",
        success:"#029C53",
        danger:"#E2190C",
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'], // Add Urbanist font family
      },
    },
  },
  plugins: [],
}

