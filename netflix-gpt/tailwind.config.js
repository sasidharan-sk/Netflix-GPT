/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        // => @media (min-width: 500px) { ... }
        'md': '860px',
        // => @media (min-width: 800px) { ... }
      },
    },
  },
  plugins: [],
}