/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // root HTML file (not public/index.html for Vite)
    "./src/**/*.{js,jsx,ts,tsx}" // all React/TypeScript files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
