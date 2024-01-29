/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'footer-bg': '#8d7b68',
        'navbar-text': '#643843',
        'navbar-hover': '#85586F',
      },
    },
  },
  plugins: [],
};
