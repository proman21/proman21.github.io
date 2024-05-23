/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "Cutive Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
