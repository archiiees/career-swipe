/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quantum: {
          blue: '#6366F1',
          purple: '#A855F7',
        }
      },
      backgroundImage: {
        'gradient-quantum': 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
      }
    },
  },
  plugins: [],
}
