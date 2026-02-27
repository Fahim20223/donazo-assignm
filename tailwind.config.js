/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#164E33",
        secondary: "#22C55E",
        "background-light": "#F8FAFB",
        "background-dark": "#0B1215",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.25rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};
