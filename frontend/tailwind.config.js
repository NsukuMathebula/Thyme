/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#013220"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fil, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}