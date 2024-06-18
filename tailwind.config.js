/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#CAB43F',
        'gold-dark': '#B59E35', // Darker shade for hover states
        'pink-500': '#D63384',
        'pink-400': '#E57399',
        'gray-700': '#4A5568',
      },
    },
  },
  plugins: [],
}