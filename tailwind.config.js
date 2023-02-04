/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1640px',
    },
    extend: {
      fontFamily: {
        logo: ['Shrikhand', 'cursive'],
        heading: ['PT Serif', 'serif'],
        label: ['Roboto', 'sans-serif']
      },
      colors: {
        'p-800':'#FF8A00',

      }
    },
  },
  plugins: [],
}
