/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "texto-color": "#AD565B",
      },
      backgroundImage: {
        "fundo-site": "url('/assets/images/fundos.jpg')",
      },
    },
  },
  plugins: [],
};
