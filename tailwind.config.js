/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/assets/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg')",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        sora: ["Sora", "Sora Placeholder", "sans-serif"], // New custom class
        inter: ["Inter", "Inter Placeholder", "sans-serif"], // New custom class
      },
    },
  },
  plugins: [],
};
