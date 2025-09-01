/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // you can add custom colors, fonts, spacing etc. here later
    },
  },
  plugins: [
    // e.g. require('@tailwindcss/forms')
  ],
}
