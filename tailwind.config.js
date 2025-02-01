/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100vw', // add required value here
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
