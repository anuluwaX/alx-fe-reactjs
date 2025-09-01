/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/index.html",   // <-- added for checker
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // custom theme settings go here
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms')
  ],
}
