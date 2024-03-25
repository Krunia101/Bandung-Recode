/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1: "#31A0FE",
        f2: "#23856D",
        f3: "#EC5C2E",
        f4: "#E1F4FF",
        df1:"#252B42",
        df2:"#3942564",
      },
      boxShadow: {
        'df': '0 4px 8px 0px rgba(0, 0, 0, 2)'
      },
      borderRadius: {
        'nl': '5px'
      },
      colors: {
        'normal': '#477577',
      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
  darkMode:'class'
}
