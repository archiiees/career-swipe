/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lodha: {
          gold: '#9E801B',       // Official "Reef Gold"
          dark: '#282828',       // Official "Mine Shaft"
          navy: '#1b1247',       // Secondary Navy
          cream: '#F5F5F0',      // Luxury background neutral
          'gold-light': '#D4C485', // For gradients/hover
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'], // For Headings
        sans: ['"Open Sans"', 'sans-serif'],     // For Body text
      },
      backgroundImage: {
        'gradient-lodha': 'linear-gradient(135deg, #9E801B 0%, #D4C485 100%)',
        'gradient-dark': 'linear-gradient(135deg, #282828 0%, #1b1247 100%)',
      }
    },
  },
  plugins: [],
}