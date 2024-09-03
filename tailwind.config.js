/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        background1: "background1 10s linear infinite",
      },
      keyframes: {
        background1: {
          "0%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
          "100%": { backgroundPosition: "50% 0%" },
        },
      },
      boxShadow: {
        "custom-dark": "16px 16px 0 #DBAFA0", // Custom brown shadow
      },
    },
  },
  plugins: [],
};
