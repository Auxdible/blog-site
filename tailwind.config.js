/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  blocklist: ['./components/post-content.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
