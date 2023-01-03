/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "msa-blue": "#6cbed9",
        "msa-orange": "#EB9A6E",
        "msa-green": "#6DBA43",
      },
    },
  },
  plugins: [],
}
