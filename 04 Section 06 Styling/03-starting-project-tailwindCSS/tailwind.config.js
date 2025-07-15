/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"], // importante que Pacifico tem double-quotes dentro do single-quotes
      },
    },
  },
  plugins: [],
};
