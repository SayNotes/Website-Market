/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientDarken: 'linear-gradient(180deg, rgba(100,116,139,0.15) 0%, rgba(255,255,255,0) 65%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
    plugins: [],
  },
};