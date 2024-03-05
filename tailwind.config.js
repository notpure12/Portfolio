/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFontLight:'Light',
        customFontRegular:'Regular',
        customFontBold:'Bold',
        customFontMedium:'Medium',
        customFontSemibold:'Semibold',

      }
    },
  },
  plugins: [],
}