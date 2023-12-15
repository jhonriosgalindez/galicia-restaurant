/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'saint': ['Mrs Saint Delafield', 'cursive'],
      },
      backgroundImage: {
        'food-menu': "url('/src/app/assets/images/food-menu.jpg')",
      }
    },
  },
  plugins: [],
}
