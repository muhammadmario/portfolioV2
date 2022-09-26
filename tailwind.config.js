/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      animation: {
        "bounce-slow": "bounce 5s infinite",
      },
    },
  },
  plugins: [],
};
