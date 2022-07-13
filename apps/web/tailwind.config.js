/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('config/tailwind.config'),
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
