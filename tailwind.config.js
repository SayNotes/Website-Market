/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{php,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
    plugins: {
      '@tailwindcss/jit': {}
    },
  },
};