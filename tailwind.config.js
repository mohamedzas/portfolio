/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1264a0',    // Your darker blue
        'brand-light-blue': '#e4f0fa', // Your light blue
      },
    },
  },
  plugins: [],
}