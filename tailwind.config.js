/** @type {import('tailwindcss').Config} */

//TODO: Change colors to css variables later
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-mode-light-color': '#fff3cf',
        'light-mode-dark-color': '#643843',
        'light-mode-alt-color': '#85586F',
        'dark-mode-dark-text': '#1B262C',
        'dark-mode-light-bg': '#e3caa5',
        'dark-mode-alt-color': '#EADBC8'
      },
    },
  },
  plugins: [],
};
